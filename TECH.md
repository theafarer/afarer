# afarer — Technical Documentation

> Last updated: 2026-09-23
> Project path: `E:\github\afarer`
> Production: https://afarer.com (Cloudflare Pages)
> Build: `npm run build` → `dist/` (13,858 pages, 34 languages)

---

## 1. Architecture Decisions

### 1.1 Pure Static Generation (`output: 'static'`)

All ~13,858 pages are pre-rendered at build time. No SSR adapter. API endpoints are handled by standalone Workers at the edge.

**Why not `output: 'server'`:** The site is built and deployed as static Cloudflare Pages (`dist/` + `functions/_middleware.ts`). `scripts/patch-worker.mjs` only applies to a `output: 'server'` Cloudflare Workers+Assets build (`dist/server/wrangler.json`); it is **not** part of the current `npm run build` chain.

### 1.2 Locale Detection (Two Layers)

| Layer | File | Environment | Purpose |
|-------|------|-------------|---------|
| 1 | `src/middleware.ts` | Astro build-time | Sets `context.locals.lang` for SSG pages |
| 2 | `functions/_middleware.ts` | Cloudflare Edge | Cookie → Geo-IP → Accept-Language → redirect |

Priority for edge detection: Cookie (`x-user-locale`) → `cf-ipcountry` → `Accept-Language` → default `en`.

### 1.3 R2 Asset Offload

- `afarer-assets` bucket served via `assets.afarer.com` (separate subdomain, no cookie overhead)
- `functions/_middleware.ts` redirects `/images/*` and `/files/*` → `https://assets.afarer.com` (301)
- Large media files go directly to R2; `public/` only keeps source assets for build-time processing

---

## 2. Build Pipeline

### 2.1 Step-by-Step

```
 1. scripts/geo-build.mjs              → Build GEO content & llms.txt (22 langs)
 2. scripts/generate-data-json.mjs     → Generate data JSON + page content JSON
 3. scripts/generate-geo-files.ts (tsx) → Generate entity.json + llms-full.txt
    (idempotent: 52 products × 22 languages + 1,034 pages)
 4. scripts/_gen-uiall.cjs             → Generate ui-all.ts (merge 22 lang translations)
 5. scripts/_gen-pages.cjs             → Generate pages/*.ts modules from JSON (109 pages)
6. scripts/_gen-seo-meta.cjs          → Generate seo-meta.ts (572 entries / 78 routes, from page YAML `meta` blocks; consumed by `src/components/common/Metadata.astro`)
  7. scripts/gen-icon-svgs.cjs          → Generate icon SVGs
  8. astro build                        → Static site to dist/ (7,564 pages)
  9. scripts/clean-public-assets.mjs    → Clean temp assets
 10. (optional) scripts/fast-upload-r2.mjs → Upload to R2 (assets + data)
```

> ⚠ Steps 2–7 write gitignored artifacts into `src/i18n/generated/` and `public/data/`. Never edit them by hand; always regenerate via the build chain. CI runs the same steps.

### 2.2 CI/CD (GitHub Actions)

Trigger: Push to `main`

```
checkout → npm install
 → geo-build → generate-data-json → generate-geo-files (tsx)
 → gen-uiall → gen-pages → gen-seo-meta → gen-icon-svgs
 → astro build
 → clean → R2 upload
 → Ensure Pages project → Pages deploy
 → Deploy 4 Workers: contact → ai → admin → automation
 → Purge CDN cache
```

**Required Secrets:** `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_ZONE_ID`

### 2.3 Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Astro dev server |
| `npm run build` | Full production build (incl. GEO files) |
| `npm run build:geo` | Generate GEO files only (`generate-geo-files.ts`) |
| `npm run build:r2` | Upload assets + data to R2 |
| `npm run deploy` | Build + Pages deploy |
| `npm run deploy:all` | Build + Pages + 4 Workers deploy |
| `npm run deploy:pages` | Pages deploy only (no build) |
| `npm run deploy:worker-{contact,ai,admin,automation}` | Deploy a single Worker |
| `npm run deploy:workers` | Deploy all 4 Workers |
| `npm run deploy:r2` | Upload assets to R2 |
| `npm run geo:build` | Run `scripts/geo-build.mjs` (GEO content + llms.txt) |
| `npm run seo:pipeline` | Offline SEO task pipeline → `output/` (demo GSC data) |
| `npm run check` | Astro check + eslint + prettier + i18n |

---

## 3. Workers

### 3.1 Overview

4 Cloudflare Workers deployed independently:

| Worker | Routes | Bindings | Purpose |
|--------|--------|----------|---------|
| contact-worker | `/api/contact*` | — | Contact form POST → validate/sanitise → Resend email (`workers/contact-worker/index.ts`) |
| ai-worker | `/api/chat*`, `/api/ask*`, `/api/search*`, `/api/embed*`, `/api/ai/*` | Workers AI, Vectorize, R2 | AI chat, RAG, embeddings |
| admin-worker | `/api/admin/*`, `/api/auth/*` | — | Auth, GitHub CRUD |
| automation-worker | `/api/automation/*` (cron: daily 2AM) | R2 (DATA_BUCKET) | GEO generation, GSC fetch, SEO rules |

### 3.2 3 MB Worker Constraint

All Workers must stay under 3 MB uncompressed. Rules:
- Do NOT bundle JSON data files — load from R2 at runtime
- Do NOT include large libraries; prefer edge-native APIs
- Use `wrangler.toml` `[assets]` or R2 for static assets
- Run `npx wrangler deploy --dry-outdated` to check size before deploying
- If exceeding limit, move data to R2 or split Workers

### 3.3 Worker wrangler.toml

See `workers/*/wrangler.toml` for per-worker config. Key bindings:

- `ai-worker`: Workers AI (LLM), Vectorize (ai-index), R2 (DATA_BUCKET)
- `automation-worker`: R2 (DATA_BUCKET), cron trigger

---

## 4. Internationalization (i18n)

### 4.1 Supported Languages (34)

`en`, `fr`, `de`, `es`, `pt`, `ar` (RTL), `it`, `ja`, `ko`, `ru`, `pl`, `nl`, `sv`, `no`, `el`, `tr`, `fi`, `cs`, `da`, `ro`, `th`, `hr`, `hu`, `sk`, `bg`, `sl`, `sr`, `id`, `he` (RTL), `ms`, `lt`, `lv`, `et`, `tl`

- `zh` was removed (2026-09); its re-appearance in `dist/` is a regression — checked by `TOOLS/verify/verify-langs.cjs`.
- Language list SSOT: `src/data/site/languages.yaml` (`code`/`name`/`locale`/`textDirection`/`enabled`). Enabled languages drive `getStaticPaths` via `src/i18n/config.ts` and the header language switcher.
- New languages fall back to English at runtime (`map[lang][key] || map.en[key]`) **without** needing an entry in `i18n-config.json` — never register a language there with an empty object/empty strings, that breaks the `||` fallback.

### 4.2 Translation Data Pipeline

```
ui/*.ts (auto-generated key-value pairs per language)
   ↓
ui-all.ts (getUiForLang(lang) entry point)
   ↓
Header.astro / Footer.astro / pages
  (via getUiForLang(locale))
```

**Core functions:**

| Function | File | Purpose |
|----------|------|---------|
| `getUiForLang(lang)` | `src/i18n/generated/ui-all.ts` | Single correct entry for UI translations |
| `getPageContent(lang, page)` | `src/i18n/page-content.ts` | Page content data (YAML-driven) |
| `getLangFromUrl(url)` | `src/i18n/utils.ts` | Extract lang code from URL path |
| `localizeHref(href, lang)` | `src/i18n/routing.ts` | Auto-prefix routes with `/{lang}` |

### 4.3 Concurrent Rendering Fix

**Problem:** With `output: 'static'` and 7,564+ pages rendered in parallel, the shared mutable `_ui` object (`setLang()` in `config.ts`) caused data races — one page's `setLang()` would overwrite another's data.

**Solution:** All components use `getUiForLang(locale)` directly instead of relying on `_ui`. The `setLang()` call in `Layout.astro` is preserved only for backward compatibility.

### 4.4 Navigation Translation

Navigation uses a `navTextMap` in Header.astro/Footer.astro to map English text → translation key → `i18n-config.json` per-language values.

When adding a nav item, update all 4:
1. `src/data/site/navigation.yaml` — nav structure (English text + href)
2. `navTextMap` in Header.astro and Footer.astro — text → key mapping
3. `src/data/site/i18n-config.json` — translation for all 22 languages
4. `src/i18n/routing.ts` `LOCALIZED_ROUTES` — if new page needs lang prefix

### 4.5 Page Content YAML

Page content stored in `src/data/pages/` as YAML:
- Root level: English (default)
- Language subdirectories (e.g., `fr/home.yaml`): per-locale translations
- 22 languages × 70 page YAML files each
- Loaded at build time, compiled into TS modules by `_gen-pages.cjs`

---

## 5. Product Data Pipeline

### 5.1 Data Sources

| Layer | File | Format | Purpose |
|-------|------|--------|---------|
| A | `src/data/products.ts` | TS array (`ProductRecord[]`) | Structured data (52 products, English) |
| B | `src/data/product-texts.ts` | TS dictionary | Bulk translations (21 langs × 52 products) |
| C | `src/data/product-texts/{locale}/{id}.yaml` | YAML per product per locale | Admin-editable translations |
| D | `src/content/product/*.mdx` | MDX | Content collections (images, specs, gallery) |

### 5.2 Fallback Chain

1. YAML file exists → `yaml.load()` → merge into ProductRecord
2. No YAML → `product-texts.ts` TS module
3. Neither exists → English original

### 5.3 Admin Translation Editor

`ProductForm.astro` provides a 22-language dropdown. When:
- **English**: Edits MDX frontmatter → `collectFrontmatter()` → POST `/api/admin/update` with `format: frontmatter`
- **Translation**: Edits YAML → `collectTranslatable()` (text fields only) → POST with `format: yaml` → Worker `yaml.dump()` → `b64encode()` → GitHub PUT

Key YAML key mappings: `name` (YAML) ↔ `title` (form), `desc` ↔ `description`.

**SHA management:** YAML file SHA is stored in `form.dataset.sha`, independent of MDX file `_sha`. First save (file doesn't exist) omits SHA; subsequent updates use it.

---

## 6. Encoding Restoration (README.md Mojibake Fix)

### 6.1 Root Cause

README.md was saved through a GB2312 (EUC-CN) decoder. UTF-8 bytes like `E2 94 82` (`│`) were read as two GB2312 bytes and decoded to CJK characters (`鈸?`), with bytes below `0xA1` becoming `?` (U+003F).

Example: `│` (E2 94 82) → E2 94 → CJK char, 82 (< A1) → `?` → `鈸?`

### 6.2 Why GB2312 Not GBK

GB2312 first-byte range is A1-F7. Byte 0x82 is invalid in GB2312 → `?`. GBK has wider range (81-FE) so maps differently. The `?` characters were the key signal that the corruption used GB2312 (EUC-CN), not GBK/CP936.

### 6.3 Fix Approach (Direct Replacement)

No encoding roundtrip needed. Direct character mapping based on known corruption patterns:

| Corruption | → | Original | UTF-8 bytes |
|-----------|-----|---------|-------------|
| `鈸?` | `│` | E2 94 82 |
| `鈸€` | `─` | E2 94 80 |
| `鈸尨攢` | `┌─` | E2 94 8C E2 94 80 |
| `鈸溾攢` | `├─` | E2 94 9C E2 94 80 |
| `鈸斺攢` | `└─` | E2 94 94 E2 94 80 |
| `鈫?` | `→` | E2 86 92 |
| `鈥?` | `—` | E2 80 94 |
| `脳` | `×` | C3 97 |
| `鉂?` | `❌` | E2 9D 8C |
| `路` | `·` | C2 B7 |

Down arrow (`↓`) detection: if line contains only spaces + `鈫?`, replace with `↓` instead of `→`.

### 6.4 Current Status

All mojibake resolved. 0 U+FFFD, 0 remaining CJK corruption characters in source files.

---

## 7. Contact Form Internals

### 7.1 Implementation Status

`/api/contact` is a **standalone Cloudflare Worker** (`workers/contact-worker/index.ts`, deployed as `afarer-contact`, zone route `afarer.com/api/contact*`) — **not** a Pages Function. `/contact` pages are static.

| Feature | Implementation |
|---------|---------------|
| Endpoint | `POST /api/contact` → Worker (JSON or FormData body, CORS, 405 on non-POST) |
| Validation | 10 fields sanitised (First/Last Name, Company, Address, Zip, Country, Email, TEL+country code, Subject, Message); required: first/last name, valid email, message ≥ 5 chars |
| Spam block | Keyword filter: `viagra`, `cialis`, `crypto airdrop`, `investment opportunity`, `casino`, `betting` |
| Email | Resend API with `Reply-To` set to submitter (`workers/contact-worker/index.ts`) |
| Captcha | Not implemented (no HMAC captcha cookie; no `contact-captcha.ts`) |
| Rate limit | Not implemented (`src/lib/rate-limit.ts` exists but unused) |
| Honeypot | Hidden `email_confirm` field exists in forms but is ignored by the Worker |
| Encryption / storage | Not implemented (no writer for `submissions.enc.json`; `contact-crypto.ts` only used for legacy admin decrypt) |

### 7.2 Flow

1. Static `/contact` (`src/pages/contact.astro` / `[lang]/contact.astro`) renders the widget (`src/components/widgets/Contact.astro` — multi-step, abandonment recovery via `localStorage`, consent checkbox, honeypot input).
2. Client-side JS submits `POST /api/contact` with **JSON** (Contact widget) or **FormData** (Newsletter widget — both now handled).
3. contact-worker checks CORS/method, parses JSON body, sanitises 10 fields, validates required/email/message, blocks spam keywords.
4. Sends email via Resend (`Reply-To` = submitter) when `CONTACT_EMAIL_TO` + `CONTACT_RESEND_API_KEY` + `CONTACT_FROM_EMAIL` are set; returns `{ success: true, id, receivedAt }`. Send failures are logged, not fatal.

### 7.3 Getting the Environment

- `CONTACT_EMAIL_TO` — destination inbox (required, else 500)
- `CONTACT_RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_FROM_NAME` — Resend sender config
- `CONTACT_EMAIL_PROVIDER` / `CONTACT_SUBMISSIONS_PAT` — accepted in the env interface but unused in the current handler

### 7.4 Security Notes

- Rate limit is per-Worker-isolate (no KV/DO); the current worker performs no rate limiting at all
- Worker reads secrets from Cloudflare runtime env, not repo files; `contact_submissions_pat` / `contact_resend_api_key` in `branding.yaml` are legacy and should be scoped/rotated if populated
- Admin `/keystatic/contact-submissions` reads + decrypts `submissions.enc.json` via GitHub API (`GitHubClient`), but nothing appends to it today — legacy path

---

## 8. Common Errors & Avoidance

### 8.1 Concurrent Rendering Race (`_ui` shared mutable state)

**Fix:** Use `getUiForLang(locale)` directly instead of `(ui as any)[key]` from shared `_ui`.

### 8.2 Encoding Issues (PowerShell + UTF-8)

PowerShell 5.1 defaults to ANSI (GBK). Always use:
```powershell
[System.IO.File]::WriteAllText($path, $content, [System.Text.UTF8Encoding]::new($false))
```
Never `Set-Content` without `-Encoding UTF8`.

### 8.3 `export` Before `import` (esbuild)

In Astro frontmatter, `import` statements must come before `export`. Wrong:
```astro
export const prerender = true;
import AdminLayout from '~/layouts/AdminLayout.astro';
```

### 8.4 `[object Object]` Displayed on Page

Tags and other objects rendered without accessing `.title` or `.slug`:
```astro
<span>{String((tag as any)?.title || (tag as any)?.slug || tag || '').trim()}</span>
```

### 8.5 Login Redirect Loop

`Astro.redirect('/login')` in admin page frontmatter runs at build time when `Astro.cookies.get()` returns `undefined`. Use client-side redirect instead for session checks.

### 8.6 `readTokenFromCookies` Decryption Fallback

Worker stores GitHub token as plaintext URL-encoded cookie; Node.js AdminLayout stores encrypted. `readTokenFromCookies` must try decryption first, fall back to raw value.

### 8.7 Link Refactoring

When renaming URLs/names across the site:
- `/keystatic/link-refactor` — scan + replace URLs/names in `src/data/`
- `/keystatic/validate-links` — validate all internal links resolve
- Sitemap, search index, and RSS feed auto-regenerate on build

### 8.8 Lessons Learned — 历史 technical 错误记录（防再犯）

以下均为本项目实际踩过的坑，按时间倒序追加。**新会话/新协作者必读。**

#### L1. Windows PowerShell 5.1 命令行陷阱（多次踩中）

| 陷阱 | 症状 | 规则 |
|------|------|------|
| `node -e "复杂脚本"` 引号被 PS 解析器吞掉/拆散 | ParserError（乱码报错指向意外的 `)`） | **禁止**在 PS 中内联复杂 `node -e`；一律写成 `.cjs` 脚本文件再 `node xxx.cjs` |
| `&&` 链接命令 | `The token '&&' is not a valid statement separator` | PS 5.1 用 `cmd1; if ($?) { cmd2 }` |
| `git ls-files ... \| head` / `rg` / `gh` | 命令不存在 | 本机未装 head/rg/gh；截断用 PS 原生方式，文件搜索用专用工具 |
| `ls src/[lang]` 方括号被当通配符 | 路径解析错误/找不到 | 路径含 `[]` 必须用 `-LiteralPath` |
| PS 控制台显示 UTF-8 为乱码 | 看似文件坏了 | 控制台 codepage 936 显示假象；**以 node 读取结果为准**，不要据此"修复"文件 |
| `git commit -m "..."` 双引号消息被吞 | commit message 残缺 | 多行/含特殊字符消息一律 `git commit -F 临时文件` |

#### L2. Git 远程名不是 origin

本仓库远程名为 `theafarer`（`https://github.com/theafarer/afarer.git`），`git push origin main` 会失败。推送用 `git push theafarer main`。

#### L3. Node 构建内存不足

13k+ 页面构建超默认堆内存。本地构建前设置 `$env:NODE_OPTIONS="--max-old-space-size=4096"`（`astro check` 需 6144）。

#### L4. 全站关键词搜索的假阳性（Brand Partners 教训）

删除首页 Brand Partners 模块后，用 "brand partners" 全文搜索仍命中 en/ja/he/ar —— 实为 "Co-Brand Partners" 卡片标题与质保条款句子的合法文案，**不是残留**。教训：验证删除要用足够特异的关键词（如 `wavefella`、`foida-logo`），并用 `TOOLS/verify/check-dist.cjs --absent` 而非裸 grep；失败项必须人工复核上下文。

#### L5. i18n-config.json 空语言段破坏回退

运行时回退是 `map[lang][key] || map.en[key]`。若为某语言写入空对象或空串值，`||` 判空后仍回退 en 尚可，但**部分键有值部分为空**会造成同页混排。规则：新语言不写入 i18n-config.json；已翻译语言用 `TOOLS/i18n-manage/ui-keys.cjs set` 或 `TOOLS/i18n-merge/_merge-langs.cjs` 补齐整段。

#### L6. 多语言模块增删必须走"脚本 + 全语言验证"流程

一次改动产出 34 种语言页面，人工抽查必然漏。标准流程（详见 `TOOLS/tool_instrction.md` §5）：改代码 → `ui-keys.cjs` 清死键/加新键 → `npm run build` → `check-dist.cjs --absent/--present` 全语言断言 → `verify-langs.cjs` 整站六项。**先构建再验证，验证通过才算完成。**

#### L7. 生成物漂移属预期

`public/llms-full.txt` 随每次构建漂移（聚合 ja 等语言的合法标题）；`src/i18n/generated/**`、`public/data/*.json` 由构建链再生。diff 时识别这些文件，不要手工"修"它们，也不要对其内容变化大惊小怪。

#### L8. Solutions 多语言机制

`src/data/biz-solutions/translations/{lang}.ts` 覆盖层 + `getSolutionBySlug(slug, lang)` 深合并（对象递归、数组整体替换）。新翻译一页：在 translations 目录加该 slug 的 override 导出即可，**不要改 EN 数据源**；翻译完成后把期望译文子串登记进 `TOOLS/verify/check-solutions-page.cjs` 的 `EXPECTED` 表做回归。

#### L9. 删除组件前先全仓 grep 引用

`grep "ComponentName" src/` 确认所有引用点后再删（含 import 与 JSX/模板用法）。实例：删除 `ChatWidget.astro` 时只清了 `Layout.astro`，漏了 `src/pages/404.astro` 的独立引用，`astro build` 在 Rollup 解析阶段才报 `Failed to resolve import`。教训：组件在页面内直接渲染（不止 Layout）时，删除必须以 grep 结果为准，不能凭"应该在 Layout 里"的假设。

#### L10. 站内链接必须走 localizePath/localizeHref

硬编码 `/contact` 这类绝对路径在非默认语言页面会跳回英文站。本站 `showDefaultLang=true`，连默认语言也会生成 `/en/...` 前缀页。规则：任何指向站内页面的 href 一律 `localizePath(path, currentLang)`（`src/i18n/utils.ts`）或 `localizeHref`（`src/i18n/routing.ts`），默认语言也不例外。

#### L11. write 工具单次调用内容过大必失败 —— 大译文文件必须分片写入

单次 write 写入整份 `_lang-{lang}.cjs`（约 35KB 全量译文）时工具层 JSON 解析报 "Unterminated string"，输入被截断且行为不可预测（甚至截断在行中间）。解决方案：把译文拆成 3 个纯文本片段文件（每片 ≤ 约 12KB，单行条目格式 `'key': 'value',`），用一次性拼接脚本（`_tmp-build.cjs` 模式：`node _tmp-build.cjs <lang> <part1> <part2> ...` 读 utf8 拼接、加标准头注释、写 `_lang-<lang>.cjs`）合成完整文件，再用 `_verify-langs.cjs` 校验键集，最后 `prettier --write` 统一格式。片段与拼接脚本都是临时文件，批次完成后删除。教训：**任何 >20KB 的单文件写入都要走分片 + 拼接 + 校验流程**。

#### L12. 工具脚本改动后先空跑一次再进正式流程

`_merge-langs.cjs` 第 9 行用了 `path.join(__dirname, ...)` 但从未 `require('path')`，导致 17 语言合并首跑即 `ReferenceError: path is not defined`。该脚本此前"能跑"是因为旧批次走的不同调用路径，掩盖了缺陷。教训：**修改/新增批量脚本后必须先用 1 个语言试跑确认无异常，再跑全量**；`require('fs')`/`require('path')` 这类依赖检查可用 `node --check` 快速过一遍语法（但运行时 ReferenceError 只能实跑发现）。

#### L13. 正则捕获组必须包含完整引号 token —— 否则"值比较"静默跳过

`_patch-product-texts.cjs` 的字段匹配正则把单引号值的**闭引号落在捕获组外**：`("..."|'...')'`。后果：`m[2]` = `'Ocean Pulse Series`（缺尾引号），`decode` 用 `slice(1,-1)` 去头尾后变成 `Ocean Pulse Serie`，恰好等于目标译文 `Ocean Pulse Serie` → 脚本误判"已应用"而**静默跳过 6 个替换**（dry run 少报、不报错）。同时该正则对双引号值（`"SUP Explorer 11'"`）完全不匹配（闭引号强制要求后面还有个 `'`），会走错 ADD 分支造成重复字段。教训：**解析带引号字符串的正则，捕获组必须把开闭引号整体包进去**：`("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')`；且 dry-run 计数必须与预期手工核算值比对（本例预期 120 实报 114 才发现）。

#### L14. 等值比较检测不到"旧版英文残留"—— 检测要用内容特征而非仅 diff SSOT

product-texts.ts 中 ja/ko/ar 的 9 个系列 desc 是**旧版英文文案**（与当前 products.ts EN SSOT 不同），"desc == 当前 EN" 的等值审计完全漏报。发现途径是靠"非拉丁语言中出现长 ASCII 串"的内容特征扫描。教训：**占位/回退检测要两套：① 与 SSOT 等值比较（抓直接复制）；② 按语言文字系统做内容特征扫描（ja/ko/zh/th/ar 中长拉丁串 = 残留）。** Latin 语言的特征扫描需用英文独有词（with/featuring/inspired 等）并人工复核假阳性（sv/de 保留术语 offshore、drop-stitch 会误报）。

#### L15. 插入式补丁 op（rep ⊃ find）二次运行必然重复插入 —— 引擎必须先查 rep 已存在

`warning-cleanup/_patch-warnings.cjs` 早期版本的幂等判定只有"find 消失 = 已应用"。两类 op 打破该假设：① **插入式**（`keywords:\n    - A` → `keywords:\n    - A\n    - B`，rep 包含 find）应用后 find 仍在 → 二次运行重复追加（6 个 about 文件 keyword 重复插入两次）；② **前缀式**（`icon_bg: blu` → `icon_bg: blue`，find 是 rep 的前缀）应用后 find 仍是 rep 的子串 → 二次运行把 `blue` 改成 `bluee`。正确判定：**先查 `rep` 是否已存在（出现次数 ≥ n）→ 是则跳过；否则 find 计数匹配才应用**。另外早期 `--dry` 不在内存中应用 rep，导致"dup 修复后 BSCI find 仍出现 2 次"的链式 op 报错 —— dry 必须模拟完整应用链，才能与 patch 结果一致。教训：**补丁引擎的幂等性以 rep 为锚点而非 find；插入式/前缀式 op 是天然的反例，dry 必须全链模拟。**

#### L16. YAML 值含 ": "（冒号+空格）必须整体加引号

fi/factory.yaml 的 card3 desc 修复值（`desc: Kattavat OEM/ODM-palvelut: räätälöity...`）未加引号，值内的 `: ` 被 YAML 解析器当作嵌套映射键 → 整文件解析失败，`check-translations.mjs` 直接报 invalid YAML（FAIL）。与 tool_instrction.md 尾注 #4（en dash 须加引号）同类。教训：**手写 rep 时，凡值内含 `: `、`–`、逗号开头等 flow 敏感字符，一律整体单引号包裹；批量 patch 后必须对全部改动文件跑 YAML 解析校验（js-yaml load），不能只信替换成功计数。**

#### L17. check:i18n 150 条存量 warning 清零后的白名单语义（2026-09 批次）

`scripts/check-translations.mjs` 新增三处合法豁免，语义边界要守住：① 结构比较前剥离 `meta.keywords`（SEO 关键词密度按语言浮动是合法的，但**只豁免 keywords，其余叶子路径仍严格**）；② `shouldTranslate` 排除 kebab-case slug（`/^[a-z0-9]+(?:-[a-z0-9]+)+$/`）、4 个虚构客户公司名 Set、认证/标准 token 逗号列表（`isCertificationList`，token 全部来自 `UNTRANSLATABLE_TOKENS` 白名单）。**新增豁免必须逐条对应真实 warning，不许"先加宽规则再找理由"。**

遗留内容债务清单状态（2026-09 分片 19–25 机械批次 + 26–29 内容漂移批次 + 30 ko 乱码专修批次 + 31 rf-welding 文件族专修 + 32 sv 乱码清扫批次后）：

**已清零（分片 19–23，171 op；分片 24–25，10 op；em dash 批次）**：أكوافارير→أفارير 73 处（8 文件）+ 变体 أكوافارر（漏 ي）21 处 4 文件（分片 25：config.ar 7、ar/factory 2、ar/factory-process 2、site/i18n-config.json 10）；rf-welding "()" 16 语言+EN（ko:34 因整行乱码延后）；EN 源头令牌恢复（commercial-workboats/tourism-recreation/maritime-safety-defense/trust 的 ISO 9001、UKCA, FCC 被删；factory-equipment "50 kN,  / ASTM D751"；factory-process 双空格）+ 各语言镜像令牌恢复（~40 op）；it `''` 疤（afarer-story/factory）+ tr（afarer-story）；SPDOT 全部（句号前空格）；factory/solutions-paddle-clubs/solutions-resorts-hotels role/套餐列表 2–3 空格及单空格分隔符 → " + "（EN 惯例）；factory-process/tourism-recreation 数字印刷双空格折叠；ar/afarer-story + ar/trust "?²" mojibake → "م²"；ko/trust "12,000m²"→"12,000 m²"；分片 24 补译 about.yaml brand_hub_cards[0].desc 六语言（ja/ko/cs/da/ro/th，em dash 规范化暴露的未翻译值）；**em dash 全站规范化已完成（见 L19）**。

**已清零（分片 26–29，247 op，2026-09 内容漂移批次）**：EN quality UV desc 重写 + 20 locale 镜像（原为 Pressure 条目副本；8 个 locale 是 `description: >-` 折叠块，见 L20）；da/ro/th safety desc 补 ISO 12402 第二句 + hero subtitle 尾句；ja/ko academy（Learning Center + 10 guide 标题 + 4 level）；de/es/pt/it/nl/pl/ru factory stats 拼写数字 → "200+"、es 15,000→15.000+、ar '15000'→'15,000+'；"50+ countries" 丢 plus（46 处）；sol-dist 区域名 EN 残留 19 locale×6（114 op，fr 本已译；9 个恒等 op 构建期过滤）；el factory OEM 段（title/subtitle + 9 case 字段 + ΣΣΕ→FAQ + responsibility 误译）+ el/commercial-workboats 2 answer 缺句；ar factory 6 处 OEM 误译（كاياك→SUP、AS1799 多余细节等）+ responsibility；fr factory q0 5–50→5–10 / ship 答案缺句 / b2b_moq；ru factory q0/ship/b2b_moq；fr brand-global-presence taglines；EN factory-equipment.yaml:51 `UV-resistantwater-based` 拼写。

**已清零（分片 30，39 op，2026-09 ko 乱码专修 + rf-welding 令牌批次）**：ko/research-drop-stitch `content_html` 整体重译（语言性乱码非编码可逆：더론스티치→드롭스티치、직믳→직물、字面 `\bc18` 断转义×4、表格 "Entry Level"/"1 thread / sq in" 英文残留；meta title 인플레이션블→인플레이터블、desc 건설→제작 방법）；ko/rf-welding `content_html` 整块修复（35 处：이은사→이음새、볼창→박리、`\uC194루션`→솔루션、"볼창 테스트 ()" 延后疤、피라텐→플래튼 等；meta 밀착→박리 테스트、intro 补 ISO 6185）；ko/research-sup-thickness 去字面 `\uFEFF` 转义（YAML 双引号里会解析成真 BOM）+ 원격→정격 압력；**rf-welding ISO 6185 令牌恢复**：EN 根 intro "requirements of — the international standard"（初始提交即缺）+ 12 个破折号疤 locale（ar/cs/da/el/es/fi/no/pt/ro/sv/th/tr，折叠块 find 不能跨断行，见 L21）+ 6 个平滑 locale 补插（de/it/ja/nl/pl/ru）；rf-welding " min" 图表标签疤：EN→"Min"、cs/da/es/fi/nl/no/pl/ro→"Min."、de 去前导空格；sv 顺带修 överträda→överträffa（词义反转）、compromise→äventyra。回归全绿：引擎 942 op/30 分片、check:i18n 0/0、prettier/eslint/astro check 0 err、build 13,858 页、dist 抽查 8 语言通过。

**已清零（分片 31，58 op = 新增 57 + 分片 19 承接 1，2026-09 rf-welding 文件族专修）**：① fi/rf-welding 全文语言性乱码（分片 07–10 fi 批次漏网）：meta desc/subtitle/image_alt 重写 + intro `>-` 块整体重写（Painistettava→Paineistettava、nahat→saumat、kamarin→kammion、tulehdettavat→täytettävät、hitsataan piilollaulella→piilotetulla päällekkäisyydellä）+ 25 修复对（Koorrotesti→Kuorintatesti、hitsustesti→hitsauskoe、läpäisymättömät→epäläpäisevät、vahvistuskappalet→vahvistuspaikkaukset、kulumakestöisen→kulumiskestävän、liimausprosessi→liitosprosessi、koappale→koekappale 族等）；② sv/rf-welding 全文乱码：meta desc（Peelingprovning→Skalprovning）+ image_alt 去 2 处 U+00AD + intro 块重写 + 19 修复对（oppust 族→uppblås 族、kamma→kammare、Huvudlångsömmar→Huvudlängsömmar、transom-rörfogar→akterspegel-till-rör-fogar 循 factory-equipment 先例、` min.` 图表标签、kompromissa→äventyra、dragprovats→dragprovas 时态）；③ fr/rf-welding 对齐 EN 新结构全量重译（4 op：meta desc、intro plain 标量、image_alt 品牌修正 soudure RF afarer→d'Afarer、content_html `|-` 整块 ~65 行——设备表/四项测试/图表/定制方案/承诺全部镜像 EN 结构，U+2019 撇号 + 小数逗号 27,12 MHz/1,2 m/min/0,5 %/1,5 ×）；④ fi/factory qc_threshold 骑行修复（Koorroisuus→Kuorintalujuus、kanaali→kanavointi）。**跨分片 op 锚处理见 L22**。回归全绿：引擎 999 op/31 分片（补丁前后双 dry 均 errors 0）、check:i18n 0/0、astro check 0 err、build 13,858 页、dist 抽查 fi/sv/fr/fi-factory 通过。

**仍遗留（下次内容审计）**：fr/partners.yaml:12 丢 partner 类型列举（缩短）；factory stats[2] 标签全 locale 为 "Boote/Barcos/…" 而 EN 为 "SUPs produced annually"（语言惯例差异，暂不动）；de/academy Intermediate/Advanced 均译 "Fortgeschritten"；ru production_flow `stage: Один` vs EN '01'。另：factory.yaml `oem_section` 为全语言死数据（页面不渲染，case 内容实际来自 evidence/case-studies），el/ar 修复仅数据层面。

**已清零（分片 32，88 op = 25 U+00AD strip + 63 文本，39 文件，2026-09 sv 乱码清扫批次）**：① **oppust（丹麦语，sv 正字为 uppblås 族）47 处清零**——academy ×9、research-ce-certification ×6、trust ×6、research-pvc-vs-hypalon ×4、research-oem-buyer-guide ×3、pvc-fabric-lab ×2、technology ×2、其余 15 文件各 ×1；变体映射 oppustlig(a/ar/bara)→uppblåsbar(a/…)、`SAR-oppustade båtar`→`uppblåsbara SAR-båtar`、oppustningsskeden→uppblåsningscykler，长形先行短形殿后防子串误伤（academy `högtrycksoppustbara` 短语 op 先于 `oppustbara`）。② **kamma/kammar/kamrar 家族 6 行 7 词**——certifications:46、factory:179、prototype-workshop:40、quality-inspection-lab:65/100、factory:165 `Rör­kammar`（post-strip→`Rörkammar`→`Rörkammare`）；`kamrar`（k-a-m-r-a-r）不匹配 `\bkamma[rn]?\b`，残留扫描须 `\bkammar?\b` + `\bkamrar\b` 两条，`Kammarluftprovning` 等复合词为合法词不误伤。③ **skrovgemon ×2**（hydrodynamic-test-tank:18/108→`skrovformer`/`skrovform`）**+ skrovgonomi ×1**（about:105→`djup-V-skrovdesign`）；`skrovgrafik` 为合法词，扫描用 `/skrovgemon|skrovgonom/` 而非 `/skrovg/`。④ **huvudlängsgömmar→huvudlängsömmar**（factory-equipment）。⑤ **U+00AD 全 locale 清除 166 处**（sv 163 + de 2 + pl 1；hydrodynamic-test-tank ×79、factory ×13、factory-quality-lab ×10、randdcenter ×9 为大头）——rep='' strip op 最前置、幂等成立，meta desc/alt 中软连字符会进 SEO 快照故全清，渲染无影响。⑥ 顺修 research-ce `Rekreaktionsfartygsdirektivet`→`Rekreationsfartygsdirektivet`、`byggarmskylt`→`tillverkarskylt`、vattenfordon→vattenfarkoster、`Treså stark som`→`Tre gånger starkare än`、`Läckagesatsen`→`Läckagetalet`、`DoC-föreligger`→`DoC föreligger`、randdcenter 50–70→50–80。**da/no 的 oppust 为正字不动**。回归全绿：引擎 1087 op/32 分片（补丁前后双 dry 均 errors 0）、check:i18n 0/0、prettier/eslint/astro check 0 err、build 13,858 页、**dist 全扫 13,858 页 U+00AD/oppust(非da)/skrovgon/sv-kammar 均 0**、llms-full.txt 21 处 oppust 全为 da 合法词。

#### L19. em dash 全站规范化：内容源远不止 YAML；三类"隐形"模式（2026-09 em dash 批次）

"word —word"（前空格后无）作者风格全站统一为 "word — word"，共 **3,674 处替换（phase1 YAML 2,846 + site YAML 278 + phase2 全域 550）+ 4 处 `\u2014` 转义 + 9 处模板插值**，工具 `TOOLS/i18n-merge/warning-cleanup/_normalize-emdash.cjs`（幂等，二次 dry=0）。四点教训：

① **内容源清单**：src/data/pages/**（locale 子目录）、src/data/site/*.yaml（`base.<loc>.yaml` 后缀式）、src/data/*.ts 数据文件（biz-solutions/guides/faq/products/journals/standalone-pages/geo/entity.json）、src/data/site/i18n-config.json（UI 串源头，2.5MB）、src/config.*.yaml（21 个，title/template/siteTagline）、src/content/**/*.mdx、src/pages/**/*.astro 硬编码文案、src/lib/**（seo/geo-generator/llms 等）、public/ai/*.json + .well-known/entity.json（tracked 静态 AI 文件；public/data/** 是 ignored 复制品勿动）。**src/i18n/generated/** 与 public/llms-full.txt 为生成物，规范化源头后 build 自愈。

② **三类正则盲区**（`—\p{L}` 匹配不到）：**模板字符串 `` `Title —${SITE.name}` ``**（8 处，faq/guides/compare/safety/size-guide/v2/llms.ts）；**astro 插值 `{s.name} —{s.skill}`**（1 处 how-to-choose-your-sup，astro 用 `{}` 不是 `${}`）；**TS 转义 `\u2014nylon`**（guides.ts 4 处）。`— {name}` 占位符（404.title）是**正确**空格勿动；`'—'` 独立占位（tech-specs 空值）也勿动。

③ **ja/ko 闭合式**：`L—L`（情報—製品）保留；仅 " —L" 补后空格。混合语言文件用 CJK 守卫（规则1/2 任一侧为 Han/Hiragana/Katakana/Hangul 即跳过，规则3 恒适用）。规范化后全站仅剩 3 处闭合（ja/news、ja/pvc-fabric-lab、ko/news），均为设计保留。

④ **检查器副作用**：规范化使原本"空格不同而不相等"的 EN==locale 值变为完全相等 → check:i18n 暴露 6 条既有未翻译值（about.yaml desc，分片 24 补译）。值集合比较（路径无关）的排查脚本 `_find-dup2.cjs` 比按路径比较有效。

#### L18. 疤痕扫描必须覆盖列表行；损坏链同样命中 EN 根文件（2026-09 分片 19–23）

三点教训：① **扫描正则只匹配 `key: value` 会漏掉 `- item` 列表行**——分片 23 的 solutions-paddle-clubs / resorts-hotels 套餐列表分隔符疤（2/3 空格及单空格丢失 " + "）就是列表行漏扫后补查发现的；scanner 必须同时匹配 `/^\s*(\w+:|-\s)/`。② **损坏链（db928cfa）不只命中翻译，EN 根文件同样被删令牌**（"Our factory is  certified"、"50 kN,  / ASTM D751"），且 initial commit 即已损坏 → git 历史里没有干净版本，只能依据站点上下文恢复（ISO 9001 质量体系、UKCA+FCC 配对、"ISO & CE-certified" 互文）；翻译镜像恢复时按各语言惯用复合词形（de "ISO 9001-zertifiziert"、fi "ISO 9001 -sertifioitu"、ru "по ISO 9001"）。③ prettier 会重排新写的 `_ops-data-*.cjs`（不改字符串内容），重排后必须重跑 `--dry` 确认 646 op 全部 still-pass。

#### L20. 四个批次级陷阱：PS 编码、YAML 折叠块、恒等 op、列表前缀（2026-09 分片 26–29）

① **PowerShell Get-Content 默认按 GBK 读 UTF-8 文件**——修 `_ops-data-28.cjs` 时 `Get-Content $f -Raw` 忘带 `-Encoding UTF8`，读入即乱码、`Set-Content -Encoding UTF8` 回写双重编码，41 个含非 ASCII rep 的 op 全毁（数据文件本身未动，靠 builder 从 `git show HEAD:` 重建分片恢复）。**任何含非 ASCII 的文件改动一律走 node 脚本，PowerShell 只允许在显式 `-Encoding UTF8`（读写都要）或纯 ASCII 场景使用。**
② **YAML 折叠块（`description: >-` + 缩进续行）的 find 必须整体覆盖**——只匹配到 `>-` 标记行就替换，续行成为孤儿残留并悄悄拼进新值（8 个 locale 的 quality UV desc 旧文未删、语义拼接；prettier 又把多行 plain scalar 重排导致 rep 匹配断裂才暴露）。**构建 op 时若目标行以 `: >-`/`: >`/`: |` 结束，必须把后续更深缩进行全部纳入 find。**
③ **恒等 op（find === rep）构建期必须过滤**——sol-dist 区域名部分 locale 与 EN 相同（es/it "Asia"、it "Oceania/Africa" 等 9 个），引擎对 `rep.includes(find) && repCount>=n` 判为 already → dry 计数 247/9 对不上 256；builder 的 `add()` 加 `if (find === rep) return`。
④ **列表项前缀提取用 `/^\s*-?\s*/` 而非 `/^\s*/`**——el factory cases 的 `- challenge:` 行，`\s*` 丢掉 `- ` 标记导致 rep 缩进错位、YAML 解析失败（solution 悬挂为坏缩进映射）。
⑤ 补充：**重建已应用分片时，find 要从 `git show HEAD:`（补丁前的已提交态）提取**，builder 验证允许 `fc===0 && rep 已存在` 视为 already；对"结构漂移敏感"的 op（如 title 行追加后缀）要加防重入条件（`titleLine.includes('Brand & OEM')` 即跳过），否则重跑会生成 `... & OEM & OEM` 的破坏性 op。

#### L21. 语言性乱码检查器完全不可见；折叠块 find 不能跨断行；YAML 双引号里的 `\uXXXX` 是真字符（2026-09 分片 30）

① **语言性乱码（合法文字系统的胡言乱语）check:i18n 零告警**——ko "더론스티치/볼창/이은사" 全是合法谚文，结构比较照样通过。审计方法：先对已知坏文件提取乱码签名 token 列表，全目录 `.includes()` 扫描定界（"스트레이크"=rubbing strake 合法借词属假阳性，须人工复核上下文）；乱码文件常成簇（同一翻译批次），坏文件周边同簇文件要一并检查。② **折叠块（`intro: >-`）的 find 绝不能跨物理断行**——控制台 dump 时把 `\n\s+` 折叠成空格会造出文件里不存在的 find 串（分片 30 el/it/ro 三个 op 因此 x0）；折叠块内断行位置任意，find 必须先 dump 原始块（`match(/^intro: >-\n((?:[ \t]+.*\n?)*)/m)`）确认断点，选行内子串。③ **YAML 双引号标量中的字面 `\uFEFF`/`\uC194` 会被解析成真实字符**（U+FEFF 进 HTML、`\uC194루션` 渲染成 "솔루션" 首字断档），而 `|` 字面块中同样写法则原样上屏——扫描断转义要用单反斜杠正则 `/\\u[0-9A-Fa-f]{4}/` 且经 .cjs 文件跑（node -e 内联双反斜杠被 PS 吞、必假阴性）。④ JS 单引号字符串里写 `'\uC194'` 会解析成字符 솔，要匹配文件里的字面反斜杠必须写 `'\\uC194'`。

#### L22. 跨分片 op 锚失效；新译文不得复活旧 find；git checkout 的 autocrlf 陷阱（2026-09 分片 31）

① **早期分片 op 的 rep 是"already-applied"判定锚——后续分片若把该 rep 文本整体移除，引擎 dry 永久 ERR find x0**（分片 19 `'Koorrotesti ()'→'Koorrotesti'`，rep 锚被分片 31 正字修复清除）。修法：**旧 op 的 find 改指当前文件现存文本、rep 更新为新正字（承接修复）**，并删除新分片中重复的修复对——只改 rep 无效（分片按序求值，19 早于 31，dry 模拟时新 rep 锚尚未生成，照样 x0）。② **新译文不得重新包含任何旧 op 的 find**——分片 31 fi 新 intro 初稿复活了分片 30 的 find `vaatimukset — kansainvälinen standardi`，顺序模拟重放原地改写新文本，连锁导致本分片 intro op 也 x0（假阳性）；新文案须同时满足：不含任何旧 find，且旧 op 的 rep 锚若住在同块需原样保留（本例改写为 "ylittämään vaatimukset — kansainvälinen ISO 6185 -standardi ilmatäytettäville veneille"，恰为分片 30 的 rep）。③ **`core.autocrlf=true` 下 `git checkout --` 会把工作树文件还原为 CRLF**（builder 的 CRLF 守卫当场拦截）；回滚已打补丁文件必须 `git -c core.autocrlf=false checkout --`。④ **补丁前后各跑一次 dry**（补丁前 applied=新增数、补丁后 applied 0/already=总数，两者 errors 都须 0），是跨分片冲突的终极检查；引擎的顺序模拟使冲突在 dry 阶段即可暴露。⑤ **prettier 会把补丁写入的 YAML 双引号标量重排为单引号**（值内只有 U+2019 时无冲突即缩引号），op 的 rep 锚与 builder 数据表须跟进 prettier 规范形式——引擎 patch 后必须跑 `check:prettier` 并复跑 dry；CJS 单引号字符串里嵌单引号要写 `\'`，替换脚本生成新引号形式时最容易漏。

#### L23. 乱码审计必须码点级验证；strip op 的双轨锚检查；分片加载序是词法序（2026-09 分片 32）

① **控制台 dump 对 U+00AD 不可见、对近似词形极度误导**——肉眼审计把 `skrovgemon` 读成 `skrovgonom`、把 `kamrar` 读成 `kammar`，且软连字符完全隐形导致"同一行两词"漏数（factory:165 `Rör­kammar` 实为 post-strip `Rörkammar`）。乱码审计一律以**码点级 dump**（`[...str].map(c=>c.codePointAt(0).toString(16))`）+ builder 精确计数断言为准，肉眼只用来定位不用来定案。② **builder 锚检查必须双轨**：旧 op 分 self-contained（rep 含 find，共 12 个）与 strict（rep 不含 find）——strict 的 find 补丁后必须不存在；self-contained 的 find 合法留存，只断言其计数不被新 rep 增长（增长即 ERR）。单轨检查要么误报要么漏报。③ **strip op（rep=''）幂等成立且须最前置**——同一文件 strip 后再跑文本 op 时 find 用 post-strip 形式；strip 只删 U+00AD 对渲染/解析无影响，但 meta desc/alt 会进 SEO 快照故须全清。④ **引擎分片按文件名词法序加载**（1,10,…,19,2,20,…,32,4,…,9）而非数字序——新分片的 rep 若被词法序更靠后的旧分片（如 4–9）的 find 命中，dry 会暴露；构造 rep 时要按词法序检查全部旧分片。⑤ **词边界正则对不同屈折变体有盲区**——`\bkamma[rn]?\b` 匹配不到 `kamrar`（a-r 交错），家族清扫要枚举全部变体分别建扫描式；`Kammarluftprovning` 等复合词因无词边界天然豁免，属合法词。

---

## 9. SEO & GEO Internals

### 9.1 SEO Meta Generation (seo-meta.ts)

`scripts/_gen-seo-meta.cjs` scans `src/pages/[lang]/` routes, maps each route path to a page YAML key (via `getPageContent(lang, 'key')` + manual overrides in the script), then extracts `meta` blocks from `src/i18n/generated/page-content.json` for all 22 languages:

```
route .astro → page key → page-content.json meta → src/i18n/generated/seo-meta.ts (572 entries, 78 routes)
```

`src/components/common/Metadata.astro` consumes it at build time:
`seoPageMeta?.[`${currentLang}${routePath}`]` — title/description/keywords per locale, with `{SITE}` placeholder substitution.

**Adding a page:** create the YAML (`src/data/pages/{key}.yaml` with `meta`) + route `.astro`; run the build chain — `_gen-pages.cjs` regenerates the page module, `_gen-seo-meta.cjs` regenerates the meta. Nothing else to wire up.

### 9.2 SEO Landing Pages (SeoLanding widget)

Per-locale B2B landing pages (`/oem-paddle`, `/bateau-gonflable-fabricant`, `/fabricant-sup-gonflable`, `/fournisseur-nautique` — currently EN/FR):

- Route: `src/pages/[lang]/oem-paddle.astro` (copy-paste template) — loads YAML via `getPageContent(lang, 'oem-paddle')`, renders `SeoLanding.astro`
- Widget: `src/components/widgets/SeoLanding.astro` — Hero → Stats → Features → FAQs → CTA + breadcrumbs + JSON-LD; locale-prefixes all internal hrefs via `/${lang}`
- Content: YAML keys `meta`, `hero`, `stats`, `features`, `faqs`, `cta`, `geo` per locale (21 subdirs + EN root)
- SEO meta comes automatically via §9.1

### 9.3 SEO Analysis Libraries (`src/lib/seo/*`)

Used by internal dashboards (no AI, no external API):

| Module | Purpose |
|--------|---------|
| `health-score.ts` | Per-page SEO health scoring (A–F grade) |
| `brand-os.ts` / `brand-layer.ts` | Brand OS model (global brand posture) |
| `rule-engine.ts` | SEO rules evaluation |
| `task-list.ts` / `task-exporter.ts` | Task generation/export (JSON/CSV/MD) |
| `link-optimizer.ts` / `position-engine.ts` | Internal-link density analysis, position targets |
| `ctr-analysis.ts` / `gsc-extractor.ts` | CTR analysis, GSC data extraction |
| `geo-monitor.ts` / `geo-generator.ts` | GEO content monitoring/generation |
| `semanticEngine.ts` / `topicCluster.ts` / `gapDetector.ts` / `scoring.ts` | Semantic ontology analysis (26 nodes), topic clusters, content gaps |
| `kv-store.ts` / `schema.ts` / `types.ts` | Shared infrastructure |

Dashboards: `/internal/seo/{index,brand-os,brand,social,rules,tasks,queries,workflow,geo,pages}` — static SSG pages reading `src/data/content-v2.ts` + `src/data/seo/sample-data.ts` (demo GSC data). Note: the old `geo-dashboard.astro` was deleted with the seo-worker (it depended on dead APIs).

### 9.4 GEO Engines

- `src/lib/geo-v7/*` — current GEO scoring/generation stack (`geo-v5/`, `geo/`, `geo-seo/` are older iterations; `build-geo-v4.ts` generates llms.txt)
- `src/engine/*` — standalone offline SEO analysis engine (crawler, sitemap fetch, link graph, page/site scoring, reports). **Not wired into the build or any page** — kept for standalone analysis.
- `scripts/seo-pipeline.mjs` (`npm run seo:pipeline`) — offline task pipeline writing `output/*` using demo query data.

### 9.5 Site Search (static)

`src/pages/search-index.json.ts` prerenders `/search-index.json` from live collections each build; `search.astro` / `[lang]/search.astro` fetch + filter client-side. The former `/api/search` Worker endpoint (seo-worker, R2 `search/index.json`) was deleted — nothing uploads that file today.

---

## 10. Content Collections (Astro v6 Content Layer)

`src/content.config.ts` defines 10 collections via `glob()`/`file()` loaders. Locale-editable index JSON files (`homepage`, `about`, `contact`, `news`, `navigation`, `global`) are written by the Keystatic admin through the admin-worker GitHub API. `post` (news) and `product` collections carry `entityType`/`entityRelations` for the knowledge graph. See README §14 for the collection table.

---

## 11. Key Files Reference

| File | Purpose |
|------|---------|
| `astro.config.ts` | Astro build config (output: static, integrations, per-locale `config.{locale}.yaml` loading via `SITE_LOCALE`) |
| `src/content.config.ts` | Content Collections schemas (10 collections) |
| `keystatic.config.ts` | Keystatic CMS config |
| `src/middleware.ts` | Astro locale middleware (`locals.lang`/`locale`/`isEN`) |
| `functions/_middleware.ts` | Cloudflare edge middleware (locale redirect + R2) |
| `src/i18n/routing.ts` | Shared route definitions, `localizeHref()`, `entityForHref()` |
| `src/i18n/page-content.ts` | Page YAML content loader (build-time cache) |
| `src/i18n/generated/*` | ⚠ Build artifacts (gitignored): `seo-meta.ts`, `ui-all.ts`, `data.ts`, `page-content.json`, `i18n-config.json`, `pages/`, `ui/` |
| `src/utils/product-i18n.ts` | Product translation merge (YAML → TS → English fallback) |
| `src/components/common/Metadata.astro` | Per-route SEO meta consumer (seo-meta.ts) |
| `src/components/widgets/SeoLanding.astro` | SEO landing page renderer |
| `src/pages/search-index.json.ts` | Static client-side search index (prerendered) |
| `src/lib/seo/*` | SEO analysis libraries (health-score, brand-os, rule-engine, task-list, ...) |
| `src/lib/geo-v7/*` | Current GEO generation/scoring stack |
| `src/engine/*` | Standalone offline analysis engine (not in build) |
| `src/lib/contact-crypto.ts` | AES-256-GCM encrypt/decrypt for legacy contact submissions |
| `src/lib/rate-limit.ts` | In-memory sliding window rate limiter (currently unused) |
| `src/lib/link-refactor.ts` | URL/name refactoring engine |
| `scripts/_gen-seo-meta.cjs` | Generates `src/i18n/generated/seo-meta.ts` |
| `scripts/_gen-pages.cjs` / `_gen-uiall.cjs` | Generate page modules / ui-all.ts |
| `TOOLS/tool_instrction.md` | 工具总目录文档：meta-inject / i18n-merge / i18n-fix / one-off / **verify（构建后全语言回归验证）** / **i18n-manage（UI 键批量管理 + CJK 泄漏扫描）** |
| `TOOLS/verify/*.cjs` | 构建后回归验证：`verify-langs.cjs`（六项整站）、`check-dist.cjs`（--present/--absent 全语言断言）、`scan-en-leak.cjs`、`check-solutions-page.cjs` — 模块增删后必跑 |
| `TOOLS/i18n-manage/*.cjs` | `ui-keys.cjs`（i18n UI 键 count/missing/add/remove/set）、`scan-cjk.cjs`（src/dist 中文泄漏扫描） |
| `TOOLS/i18n-merge/warning-cleanup/*` | check:i18n 150 条存量 warning 一次性清零批次（475 op ×18 分片 + 幂等补丁引擎，见 §8.8 L15-L17） |
| `TOOLS/meta-inject/*` | SEO meta batch injection (`_inject-meta.cjs` + `_meta-{lang}.cjs` data), unused for builds |
| `workers/contact-worker/index.ts` | Live `POST /api/contact` handler (validate + Resend email) |
| `scripts/patch-worker.mjs` | `output: 'server'` only; subdomain routing + KV injection (not in current build) |
| `scripts/fix-garbled.py` | Encoding/garble repair helpers (see §6; `find-garbled.py`, `check-encoding.py` too) |
