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

**仍遗留（下次内容审计）**：factory stats[2] 标签全 locale 为 "Boote/Barcos/…" 而 EN 为 "SUPs produced annually"（语言惯例差异，暂不动）。死数据（无渲染消费方，数据层面不动）：factory.yaml `oem_section`（case 内容实际来自 evidence/case-studies，el/ar 修复仅数据层面）与 `qc_section`（steps 的 step 值在 ru/de/es/it/nl/pl/pt 为拼写数字，与 production_flow 同源问题但无 UI 影响）。

**已清零（分片 34，367 op = 数字 75 + 品牌归一 285 + 功能 7，281 文件，2026-09 数字位剥离恢复 + 品牌归一批次）**：① **数字位剥离损坏恢复 ~56 处**——`15–10`→`15–20`（ar/cs/da/de/el/es/fi/ro/tr + EN 根 factory-capacity 等）、`30–5`→`30–50`、`5–0 enheder`→`5–10 enheder`、`1– dage`→`1–2 dage`（n=4）、`dage per board`→`dage pr. board`、`100–00`/`20–0`/`11–2` 等变体全站清零（05bc52de 8 月"已清零"声明的漏网族，见 L24①）。② **品牌归一 285 处**——ja 片假名アクアフェアラー/アファーラー→afarer 67 处（certifications/community/disaster-relief/maritime-safety-defense/search-and-rescue/tourism-recreation/trust/commercial-workboats 等）；standalone `afar` 282 处（it/ko/nl/no/pt/sv/th，ko 더 먼×6 顺带）；Hyplon→Hypalon ×2。③ **功能修复 7 op**——brand-team `data:image/svg xml,` 损坏 data URI → 合法 URL 编码形式 ×7 locale（de/es/pt/it/ru/pl/nl，每文件 n=4）；contact 默认国码机翻值（Uno/Een/Jeden/Um/Один）→数字 `1` ×5 文件。④ **单点**：EN trust ISO 9001 标题恢复、fr 数字小数逗号、ja 双认证段 `UKCA、FCC`、ar 标题 4 处（`أكثر من 50 دولة`）、es RIB testimonial。⑤ **引擎外模板修复 2 处（dist 验证暴露，见 L24）**：`src/pages/guides/index.astro` 硬编码 `(11–2 ft)`→`(11–12 ft)` + `–our`→`– our`；`src/components/widgets/Contact.astro` selected 比较修复（String 归一 + 去 `+` 前缀）×2 处。回归全绿：引擎 1497 op/34 分片（补丁前后双 dry 均 errors 0）、check:i18n 0/0、prettier/eslint/astro check 0 err、build 13,858 页 ×2、**dist 全扫 13,858 HTML 硬 token 0 命中**、抽查 11 项 + SVG 7 locale×4 匹配 + contact selected 6 页全过。

**已清零（分片 33，43 op，9 文件，2026-09 遗留债务清算批次）**：① **production_flow stage 数字徽章归一（41 op）**——ru/de/es/it/nl/pl/pt 七个 locale 的 `stage:` 为拼写数字（Один/Четыре、Eins/Sechs、Uno/Seis…），渲染进 `w-10 h-10 rounded-full` 40px 圆形徽章（`text-lg font-bold`）必然溢出（dist 实证 `> Четыре </span>`），it 更是 `'01'`+Due/Tre 混排；全部归一为 EN 的 `'01'`–`'06'`（it 首项已对仅修 2–6，共 6+6+6+5+6+6+6=41）；qc_section steps 为死数据不动（见上）。② **de/academy 等级重名（1 op）**——Intermediate/Advanced 均译 "Fortgeschritten"（全 21 locale 唯一重名），Advanced（understanding-tides）改 "Expertenstufe"，锚用 `slug: understanding-tides\n  - level:` 两行跨行 find 保唯一。③ **fr/partners:12 补列举（1 op）**——subtitle 丢 EN 的 "boat dealers, equipment retailers, and brand partners" 列举，补 `des concessionnaires nautiques, des détaillants d'équipements et des partenaires de marque`（U+2019 撇号）。回归全绿：引擎 1130 op/33 分片（补丁前后双 dry 均 errors 0）、check:i18n 0/0、prettier/eslint/astro check 0 err、build 13,858 页、dist 验证 9 locale 徽章 01–06 + de Expertenstufe + fr 列举全 OK。

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

#### L24. dist 验证暴露四类盲区：验证声明边界、模板硬编码、YAML 数字类型、死数据字段（2026-09 分片 34）

① **"verified clean" 只对扫描过的模式成立（05bc52de 教训）**——8 月 05bc52de（818 处 em-dash 数字修复）声明 "zero corruption remains, end-to-end verified"，但分片 34 又找回 ~56 处同类损坏（`15–10`/`30–5`/`5–0`/`100–00`/`11–2`/`1– dage`…）：那次验证只扫 em-dash 缺位形（`A—B`），未枚举"第二数字位被改"变体（en-dash + 错误数字）。**模式族审计必须穷举损坏形状（缺位/改位/换位 × dash 类型）；验证声明永远以模式清单为边界表述。** ② **模板硬编码文案是 YAML 审计的盲区**——dist 里 `(11–2 ft)` 来自 `src/pages/guides/index.astro` 硬编码而非 guides.yaml（YAML 干净，数据级扫描 0 命中）；模板层损坏只有全站 dist 扫描能兜住（13,858 页仅此 1 处）。**dist 全扫是 YAML 审计的必要超集。** ③ **YAML 数字类型 vs 字符串比较**——countries.yaml `tel: 1` 解析为 number，组件 `c.code === '+1'`（string）永假 → contact 默认国码 selected 从未生效（独立历史 bug，EN 也从未选中）；option value 无 `+` 前缀。跨源比较须 `String()` 归一 + 前缀剥离：`selected={String(c.code) === (defaultCountryCode || '').replace(/^\+/, '')}`。同类：data URI 在 HTML 属性中被转义（`"`→`&quot;`），与 YAML 值比对须先反转义；YAML 已 URL 编码的值**不能**再 `decodeURIComponent`（双重解码必然失配）。④ **死数据字段清单（模板不渲染，数据级修复即可、不追渲染验证）**：ja commercial-workboats FAQ answer、es brand-why-afarer testimonials items、factory `workforce.shift_pattern`（页面渲染的是转述文本）、locale capacity 页 `oem_capacity.lead_time`（仅 EN 模板渲染该节）——与已知 `qc_section`/`oem_section` 同类。⑤ **dist 抽查必须结构感知**——字符串可能分 span 渲染（`15–20` 与 `days` 分节点，连续 `includes` 断言要拆开）、字段可能不在假定路由渲染；断言失败先确认"该字段是否真的被模板消费"再决定修数据还是修模板。全 dist 扫描用 node walk 脚本（PowerShell Select-String 扫 13,858 文件×12 模式 >300s 超时）。

#### L25. 统计值归一：侦察 key 清单、SEP 幂等 bug、合法 plus 短语豁免、dist 词表扫描假阳性三族（2026-09 分片 35）

① **stat 值散布在远不止 `value:` 一个 key**——本批涉及 `value/count/number/metric/amount/num/step`（home oem `number`、custom `num`、factory-process `step` 零填充、factory qc `step` 单数字、about `amount`、paddle `metric`）。按"已知页面已知字段"做的侦察连漏 3 组（addendum 69 + 108 op 全部来自 dist 全扫回捞）。**正确顺序：先全 key 宽正则扫描全页面 → 位置配对 EN↔locale 比较 digits/plus/SEP → 再人工 triage。** ② **位置配对是强不变量但有边界**——等行数文件逐 scalar 行配对、数字序列不等即 flag：拼写=locale 无 digit、SEP 变体=digit 相等但分隔符不符本语言约定、plus 丢失=hasPlus 不等；但 prose 行合法拼写数字（"Vier Kernkompetenzen"、"Acht bis zwölf"）会产出海量 flag（全 key 扫描 1,723 条，绝大多数是合法译文/类别 2 漂移）——stat 归一只修 badge/stat 位置。③ **sepFix 必须保留全部捕获组**——`'$1' + SEP[l] + '$2'`：丢 `$2` 会吃掉千分位组（`'15,000+'`→`'15.+'`）；不变量检查不得复用被测函数（循环验证短路）。④ **合法 plus 短语豁免表**：ar `أكثر من`、ja/ko `以上/이상`、fi `Yli `、tr `%40+`（百分号前缀惯例）、EN `500-plus` vs da `500+`（digits+plus 等价即可）、句子型 quick_facts 里 "50+ countries" 的译文句式（über 50 Länder / más de 50 países 等合法）。⑤ **dist 词表扫描假阳性三族**：SVG path data（`m2.46`/`m2 5H7` 是相对坐标——扫 `[mمм]2` 必须先剥 `<svg>…</svg>` 与 `d="…"`，否则 13,320 文件假命中）；德语 Stoß 复合词（`Stoßdämpfung`——`Sto` 命中因 ß 不属于 JS `\w`，词边界在变音符前断裂）；`Einsätze` 同理（ä 非 `\w`）。**词表命中必须带上下文人工 triage，严禁只看计数。** ⑥ **数字徽章同样被拼写化**——损坏链把序号 01–08 也译成 Eins/Uno/Один；EN 形态零填充 `'01'`（factory-process、home steps、custom num）与单数字 `'1'`（factory qc）并存，rep 必须逐字段对齐 EN 形态，it 文件呈"半修复"态（`'01'` 已对、Due 起损坏）证明历史上有人手工零星修过——损坏清单不能假设同文件内一致。⑦ **builder 加载老 op 必须排除自身分片**（按文件名 parse 分片号跳过），否则 op 计数翻倍报错。⑧ **SEP 变体是未清完的存量**——本批 about `amount` 6 处（cs/da/el/fi/fr/ro 用 EN 逗号）证明此前 SEP 审计只覆盖了主 stat 家族；da/fi tsm 逗号千分位仍挂账；下个 shard 用全 key 配对扫描产出完整 SEP 变体清单再统一清。⑨ **模板硬编码再现**（L24 ② 同类）：about.astro `12K m2` stat 直接模板修复 `12,000 m²`。分片 35 合计 470 op（主批 293 + addendum 69 + addendum 2 108），总 1967 op/35 分片；dist 终验 13,858 页：bare m2 0、拼写徽章 0、36 组 mustHave 全过。

#### L26. factory-capacity 考古与根路由硬编码孪生页；手写 \uXXXX 转义实锤出错（2026-09 分片 36）

① **损坏机制铁证**：EN 根 YAML 曾遭 `\bRIB\b→SUP` 词替换（`\bRIBs\b` 不匹配幸存——"RIBs/year"、"SUPs, SUPs, RIBs, SUPs" 中的 RIBs 都是幸存者；ru 文件部分被换证明替换跑了 locale），之后 EN 根又被整体重写为 SUP 定位（intro 4×SUP），但 19 个 locale 保留了旧 boat 版翻译——恢复 boat 版而非 SUP 版的依据：站点存在 commercial-workboats/hull-engineering 页面、EN meta 仍说 "15,000+ boats"、locale 按 boat 版翻译。ws1 标题 "SUP Boat Production" 实为 "RIB Boat Production" 被词替换的产物。② **根路由硬编码孪生页**（L24 ② 模板硬编码的系统性变体）：`src/pages/factory/capacity.astro`（根路由 `/factory/capacity/`，无 [lang] 前缀）是模板内联数据的 legacy 页——3 个 workshop、"four specialized workshops"、2 段 moq、SUP-only sr-only 块，与 YAML 驱动的 `/en/factory/capacity/` 内容漂移且**两条 URL 都在 sitemap 中**；6 个 factory 根页（capacity/equipment/index/oem-capability/process/quality-lab）均有孪生，本 shard 只修了 capacity，其余 5 个待后续 shard。**[lang] 模板不渲染 oem_capacity/moq 段**（moq 是 YAML-only 数据，仅根硬编码页渲染）——dist 验证断言必须先确认模板渲染范围，勿把"数据已修但模板不渲染"当失败。③ **手写 \uXXXX 转义实锤 6 处错**（ko `同기`/`몽`/`갖추유리센유`、ko `겸당`→교대당、th `ท่องอรับ`→ท่อรองรับ、th `คายัก`→คายัค、tr `Şışme`→Şişme 点 İ）：非拉丁 rep 一律运行时从磁盘提取或程序化序列化（安全转义器整体重序列化），生成后**解码全文 dump 逐条复核**——上次 slice 120 字符截断漏看了长 desc 中段的损坏。④ **跨语言近形词必须码点级核实**：no moq 'enheter' 是挪威语（'enheder' 才是丹麦语），报告里"看着像丹麦语"不构成修改依据（本轮一次误报）。⑤ intro YAML shape 分 block（`>-` 折叠）与 plain 单行两类，rep 必须保形；21 文件全 LF。⑥ 已知小问题挂账（尊重计划边界未入本 shard）：tr factory-capacity ws0 desc 混入荷兰语 'serigrafie'、tr "botlar...ve botlar" 重复句、fi 轻微翻译质量。分片 36 合计 236 op（EN 根 7 + 20 locale 229），总 2203 op/36 分片；dry→patch→prettier→复 dry 全绿（2203 already-applied、prettier 稳定 0 重排）；check 四段全绿；dist 终验 22 页逐项 + 13,858 页全扫 0 命中 + 10 语言 SEP 抽查全过。

#### L27. factory 族 EN 根考古收尾；根硬编码孪生页 6 页全清；跨分片锚冲突再现（2026-09 分片 37）

① **factory 族 EN 根考古（L26① 同族收尾）**：factory/factory-process/factory-oem-capability 三个 EN 根同遭 `\bRIB\b→SUP` 词替换后又整体重写为 SUP 定位，而 19 个 locale 多数保留 boat 版翻译。22 op 逐字段恢复 boat 版（证据链：de/ru/ja locale YAML + 根 .astro 硬编码孪生页互证）：subtitle `12,000 m² of integrated manufacturing — from raw material to finished boat`、intro 车间清单（tube heat sealing/FRP mould fabrication）、stats label `Boats produced annually`、ws3 `FRP Moulds & Composite Fabrication`、ws5 `Final Assembly & Rigging`、equipment `Fiberglass Hand-Lay-Up Moulds`、process step04 `FRP RIB Hull Moulding`、step06 发动机/线束装配、durations `2–4 days per hull`、oem subtitle `inflatable watercraft`。② **根硬编码孪生页 6 页全清（L26② 挂账清账）**：剩余 5 页（index/equipment/process/quality-lab/oem-capability.astro）以修复后 EN YAML 为 SSOT 手工对齐（Edit 直接编辑，非 ops 引擎，与分片 36 capacity 同法）：ISO 9001/ASTM D751 认证令牌、`200–300 °C` 单位、`—from` 族破折号断裂修复，SUP-only 段（custom board colors、Hypalon 列举）boat 版改写，workshop 图片对齐；root-only 结构（AiQuickAnswer/sr-only/oem_section/faq/qc steps/shift_pattern/why_us）保留在根页。③ **L22① 锚冲突再现**：分片 35 的 m2→m² op（rep 锚 `subtitle: 12,000 m² SUP factory`）被分片 37 的 subtitle 重写整体移除 → dry ERR find x0。修法照 L22① 承接更新：旧 op find/rep 改指当前文本（`subtitle: 12,000 m2/m² of integrated manufacturing`）。**新分片重写字段全文前，必须扫描全部旧分片在同文件同字段的 rep 锚并逐一承接。** ④ **dist 断言必须按模板渲染范围分层**：[lang] factory index 模板只渲染子集（oem_section/faq/qc steps/shift_pattern/why_us/AiQuickAnswer/sr-only 均不渲染）→ 校验分 shared/rootOnly 两层，root-only 项不得对 /en/ 页断言，/en/ 缺段是模板行为不是数据缺陷（L24⑤ 同族）。⑤ **walk 损坏签名必须带边界上下文**：`', BSCI, CE'` 命中合法串 `ISO 9001, BSCI, CE` 的子串（假阳性）→ 改用 `>, BSCI, CE`（标签闭界）；同法在范围外发现 11 个既有 em dash 断裂页挂账（见下）。

新挂账（后续 shard）：① 11 个非 factory 根页 ` –from`/` –how`/` –all` 族 em dash 断裂（about/academy/custom/learn-materials/lifestyle/marine-industry/oem-odm-manufacturer/randdcenter×4）；② locale factory 族漂移（home proof_points、custom MOQ 5–10 vs 50、resorts roi 货币、da/es/pl/tr ISO 9001 变体、ja meta `12,000㎡`、da/fi tsm 千分位、ja process step06/08 复制粘贴、de traceability 缺 `+`、equipment cat3 标题分歧、traceability Vatrad vs Aquafarer、tr 'serigrafie'、fi 翻译质量）。分片 37 合计 22 op（factory.yaml 10 / factory-process.yaml 11 / factory-oem-capability.yaml 1）+ 5 个根 .astro 页引擎外手工修复 + 分片 35 承接更新 1 op；总 2225 op/37 分片（复 dry 2225 already/0 err）；check 0 err（19 i18n warnings 为既有挂账）；build 13,858 页；dist 分层验证 root+en×5 factory 页 ALL VERIFY PASS + factory 范围 walk 损坏签名 0 命中。

#### L28. 全站 dash 断裂考古：四族损坏形状、插值族漏网教训、占位符误报、SPECIFIC 幂等语义（2026-09 分片 38）

① **损坏先于仓库**：initial commit e2063e26 即有 213 处 ` –word`/56 文件 → 无干净 git 版本可回滚，恢复形态靠 SSOT 对照法确定——干净 rf-welding.yaml（shard 30 已修）与损坏 root rf-welding.astro 标题逐字孪生仅 dash 不同（`RF Welding Center — Dielectric...` vs `–Dielectric...`）；EN YAML meta 标题 spaced-em 1132 vs spaced-en 11；config.yaml title template `'%s — Afarer'`。**同源孪生文件互证是恢复形态的决定性证据。** ② **四族形状**：A ` –word`（space+en dash 贴后词，空格后吃，197 处）；B `word—word`（em dash 双贴，空格前吃，26 处含 3 处 `)—digit` 变体）；C 令牌级损坏（ISO 6185 剥离、`Peel test ()`、RFopaque、Colourchange、数字剥离 `0.5–.0`/`0.9mm—.2mm`、`3–year` 应连字符、tr `–C$` 杂散字符注入）；D ` –${...}`（en dash 贴模板插值，17 处/16 文件——全部是 `title: \`...\`–${SITE.name}` 和 gallery alt 后缀）。③ **插值族漏网教训（本 shard 最大教训，L24①/L27⑤ 延伸）**：pattern A 正则要求 dash 后随字母，`${` 不匹配 → 源码级扫描显示 0 残留，dist walk 却命中 40 处（17 源 × title/og:title/twitter:title/alt 多渲染点）。**源码范围的模式扫描只能证明"已知形状已清"，不能证明"损坏族已穷尽"；dist 全站 walk 是收口环，每轮修复后必须跑。** ④ **占位符误报与守卫收紧→残余再枚举循环**：B 首版误报 16 处合法占位符（`'—'` tech-specs 空值 ×9、`<td>—</td>` mdx ×4、`>—<` SEO 仪表盘 ×3）→ 守卫收紧为前置 `[A-Za-z0-9]` + CJK-after guard → 再跑残余枚举（`[^\s—]—[^\s—]` 全量 + 守卫排除项逐条列出）又捞出 3 处真损坏 `($132,600)—210%`/`oysters)—94%`/`(Term 2)—44%`（前置是 `)` 非字母数字被守卫误排除）。**每次收紧守卫后必须做一轮"被排除项全量枚举"人工 triage，防止守卫过紧漏真损坏——收紧与枚举交替直到排除项全为合法。** ⑤ **勿动清单**：合法 spaced en dash ` – `（16 处新页标题，cs/da locale 同形）；数字/日期范围 en dash（`$50K–$200K`、`January–March`、`I–III`）；ja/ko 闭合形（`100%——PVC`、CJK—CJK）；`'—'`/`<td>—</td>`/`>—<` 占位符；about.yaml title 硬编码 `| {SITE}` 管道后缀（Metadata 检测 title 已含品牌则跳过 template，既有约定非损坏）。⑥ **SPECIFIC 幂等语义**：find 计数=expected（本轮应用）**或** find 消失+rep 存在（前轮已应用）均为 OK——首版只查计数，patch 后复 dry 必然 0 命中误报 MISMATCH。⑦ 修复载体：root .astro/.ts 走专用工具 `TOOLS/i18n-merge/warning-cleanup/_fix-dash-breaks.cjs`（--dry/--patch 幂等，A/B/C/D 四 pattern + SPECIFIC 表前置），locale YAML 走 ops 引擎分片 38（3 op：es `descontaminación—` 行尾贴 dash 括入对第二支 → spaced；tr `–C$` ×2 杂散 C → 对照 EN 根 `$50K–$200K+`/`$50K–$80K`）。⑧ 数字统计：fixer 247 处（A=197 B=26 C=10 D=17）/55 文件 + ops 3 op → 总 2228 op/38 分片（复 dry 2228 already/0 err）；prettier +1 字符引发 9 文件重排（预期内）；check 0 issues/19 既有 warnings；build 13,858 页；dist walk 13,941 文件：A/B/C 签名 0、ja/ko 闭合形 sanity 1、llms-full.txt 0 损坏 + 23 处健康 ` — Afarer`、抽查全过（rf ISO 6185/Peel test/RF-opaque、es、tr、biz-solutions、eng-perf/gallery 标题与 alt）。

#### L29. 分片 39：L27 挂账②漂移族清算、生成器模式、泰文/法文 rep 构造 bug、UI 字典漏网、rep 取代维护 ×3（2026-09）

① **12 项挂账清算**：修 9 组机械漂移（107 op）——custom MOQ→50 ×21（20 locale L56 + fr L3；EN SSOT=commit 51974b4c，本地单位 cs jednotek/da enheder/th ชิ้น/ar وحدة 单数/ja `50台（SUP）` 全角括号）；resorts roi 缺 `+` ×7（只补 + 不动数字格式：de `200.000+\_$`、ru `тыс.+`）；equipment items[3] Fiberglass Hand-Lay-Up Moulds ×11（cs/da/fr/ro/th name+spec + el 仅 spec `6 m`→`14 ft`；th name/spec 全部运行时从 th/prototype-workshop 提取）；ja m² 归一 ×10（㎡/无空格/の前空格 → `12,000 m²`）；ja factory-process steps ×6 块（desc 新译 + duration + step08 title）；traceability ` + ` ×7；tr serigrafie ×1；ISO-strip ×15；fi 英文残留 ×15（hydrodynamic-test-tank 12 块含 39c 表题 + research-sup-thickness 3 标题，站内 fi/academy 既有译法 Monikäyttö）。销项：⑥ tsm 页不存在；④ ISO 9001 变体无损坏；⑩ Vatrad EN SSOT 业务决定不动。划归后续 shard：home proof_points 20 语言整块重译（shard 40）、da/fi SEP 千分位（专项）。② **⑦ 规模超挂账记载**：ja factory-process 污染不止 desc——duration 全是复制错值、step08 title 也是复制（EN SSOT：03 `1–2 days per boat`/04 `2–4 days per hull`/05 `1–2 days`/06 `2–4 days`/07 `1–2 days`/08 `1 day`；ja 波浪线实为 U+301C `〜` 非 U+FF5E——dist 校验签名必须按实际码位写）。③ **ISO-strip 族**：`ISO &` 令牌剥除留双空格疤痕 `m²  & CE`，**EN 根 commercial-workboats.yaml 自身损坏** + cwb da/it/ja/ko/nl/no/pt/ro/sv + tourism fi/it/nl/pt + **de/tourism（39b dist walk 补获，recon 漏）**；语言惯例 da/no `ISO- og CE-`、sv `ISO- och CE-`、fi `ISO- ja CE`、it 语序 `fabbrica ISO & CE di 12.000 m²`、ja 全角 `のISO＆CE認証工場`（U+FF06）。④ **生成器模式（新 shard 标配）**：动态提取 ops 模块在 require 时对当前文件状态跑提取 → patch 后复 dry 必崩（提取失败/计数漂移）；正解 = `_gen-ops-39*.cjs` 提取+`JSON.stringify` 序列化生成静态 `_ops-data-39.cjs`（字节精确、非 ASCII 零手打），生成器只对 pre-patch 状态运行、文件名不匹配 `_ops-data-\d+` 故引擎不加载。⑤ **rep 构造双 bug（验证环节拦截）**：fr L3 `'MOQ 50' + m[0].slice(m[0].indexOf(' '))` —— indexOf 命中 MOQ 后第 3 位空格 → 产出 `MOQ 50 5–10 unités` 垃圾串；th spec `thMould.split(' ')[0]` —— 泰文无空格 → 取到整个短语 `แม่พิมพ์ขึ้นรูปด้วยมือบอร์ด`。**字符串切片类 rep 必须用 replace(锚正则) 或显式码位切片（`slice(0,8)`+charCode 断言），且 rep 结果必须 JSON.stringify 解码复核**；修复=改文件+同步改静态 op rep（链条终态一致）。⑥ **rep 取代维护 ×3**：新 shard 的 rep 不得销毁旧 op 的 rep（find0/rep0=ERR）；39 更新 03 fr（`Cœurs SUP`→`Moules de planches SUP jusqu'à 14 ft`）、35 ja（`12,000m²の統合製造`→`12,000 m²の…`）、39b 更新 35 ko #135（`12,000m² 규모`→`12,000 m² 규모`）。**注意 dry 无法预防此类破坏**（引擎按序求值，销毁发生在旧 op 已判定之后，只有下一轮 dry 才 ERR）——新 shard 若触碰旧 shard rep 所在文件，必须主动扫描旧分片 rep 交集。⑦ **dist walk 收口环再立功（L28③ 延伸）**：recon 只扫 ja → dist walk 捞出 ko 整族（㎡ 象形字 ×4 + `12,000m²` 无空格 ×12，站点既有正确形 `12,000 m²` ×18 为先例）+ **UI 字典 `src/data/site/i18n-config.json`**（ja×5+ko×5，ja home/people/engineering-perfection dist 命中全来自 UI 串而非 pages yaml）；引擎按 `op.f` 任意路径读写 → UI 字典 op（n:10）直接入分片；`src/i18n/generated/*` 与 `public/data/*` 均 gitignore，`npm run generate` 刷新即可。⑧ **fr/factory 与 tr/factory 的 `MOQ 5–10` 非 bug**：EN factory.yaml SSOT FAQ 本就是 `MOQ starts at 5–10 units for standard OEM models`（custom 页 MOQ 50 是另一业务口径）——本地化与 SSOT 一致，勿"顺手修复"；同理 `public/llms-full.txt` 的 +164 行（Company Facts 段）是无关生成器产物，勿混入提交。⑨ 数字：107 op（21+7+11+10+6+7+1+15+15+13+1+1）/39 分片共 2335 op 全幂等（复 dry 2335 already/0 err）；78 pages yaml + i18n-config.json + 2 旧分片 rep 维护；check 0 errors/19 既有 warnings；dist 13,858 页 walk 坏签名全 0（㎡/无空格 m²/双空格 &/MOQ 垃圾串/泰文坏连接）。fi/research-sup-thickness 无 dist 路由（src 修复仍入库生效于数据层）。

#### L30. 分片 40：home proof_points 20 语言整块重译、反向链条维护、根硬编码页鉴别（2026-09）

① **漂移形态**：51974b4c 重构把 EN home proof_points 改为 "Tested Beyond the Showroom"（items：10+ Years Designing for the Water / 50+ Countries on the Water / 12–15 PSI Drop-Stitch Core / 100% Pressure-Tested Board by Board），20 locale 仍是旧 "Trusted by water businesses" 块（15,000 units / CE certified 族，metric 形态各异：`'15000'`/`15,000+`/`'15.000'`/`15 000+`/`15,000 이상`/`10건 이상`）。② **整块 op 策略**：每 locale 一个 op，find=从文件行级提取的 16 行整块（`proof_points:` 到下一顶层键前），断言：恰 16 行、4 个 `- metric:`、含 100% 形态（fr 为 `100 %` 带空格——断言用 `/metric:\s*100\s*%/`）、find 全文唯一、pre-patch 无 U+2013；rep=数据文件拼装的新块，metrics 统一 `10+`/`50+`/`12–15`(U+2013)/`100%`（与 EN SSOT 同为不带引号）。③ **数据文件 + 生成器**：`_b40-data.cjs`（20 语言 title/subtitle/4×label+detail）+ `_gen-ops-40.cjs`（提取+序列化静态 `_ops-data-40.cjs`）；值级 YAML 安全断言（无 `: `、无 ` #`、无首尾空格、无换行）；撇号惯例断言：fr 仅 U+2019、it/tr 仅直撇号（与各 home.yaml 既有惯例一致）。④ **数据文件语法教训**：单引号 CJS 字符串内含 it/tr 直撇号 → SyntaxError——含撇号的值必须双引号包裹；prettier 会把 JSON.stringify 的双引号键值按 quoteProps as-needed + singleQuote 归一（值含 `'` 时自动双引号），生成器无需手写引号风格。⑤ **反向链条维护 ×14（L29⑥ 对偶面）**：shard 40 新块替换销毁了分片 35 拼写数字 metric op 的 rep（find `    - metric: Zehn\n` 等 → rep `    - metric: '10+'\n` 带引号旧终态）；`_gen-ops-40-fix35.cjs` 程序化更新 35 的 14 个 rep 为不带引号新终态（`    - metric: 10+\n`）。**教训：整块替换型 op 上线前必须扫旧分片 rep 与目标块的交集——即使旧 op 的 find 是早已消失的拼写词，其 rep 仍锚定在块内。** dry 无法预防（旧 op 先判 already，新块 patch 后下一轮 dry 才 ERR）；本例 patch 后复 dry 立即暴露，fix 后 2355/0/0。⑥ **根硬编码页鉴别（L27 家族补充）**：`dist/index.html`（根 `src/pages/index.astro` 硬编码 home）无 proof_points section——hero feature strip（`12–15 PSI Drop-Stitch Rigidity` / `Pressure-Tested Board by Board` / `CE & ISO 9001 Quality Standards` / `Ships to 50+ Countries`）是独立营销文案，与 home.yaml proof_points 非孪生（'Rigidity' vs 'Core' 措辞差异为设计差异非漂移，勿"对齐"）；EN YAML 的渲染体是 `dist/en/index.html`（[lang] 路由），dist walk 校验 EN anchor 必须查 en/ 而非根。⑦ 数字：20 op（20 locale × 1 整块）/40 分片共 2355 op 全幂等（复 dry 2355 already/0 err）；prettier 20 home.yaml 全 unchanged（写入格式即终态）；check 0 errors/19 既有 warnings；build 13,858 页；dist walk 20 locale + en 全 OK、旧 15,000 族签名 0。手打笔误自查案例：no detail4 首版 `Inspirert`（inspired）→ `Inspisert`（inspected）——**北欧语言 -sp-/-pir- 词族极易混淆，手打译文必须逐词复核**。

#### L31. 分片 41：da/fi SEP 千分位归一、链条维护时序、UI 字典新债务侦察（2026-09）

① **漂移形态**：da/fi locale YAML 千分位违反本地惯例——da 应用点号（`12.000`）、fi 应用空格（`12 000`），实际散布 `12,000`/`15,000+`/`1,100` 等 56 行（da 36 + fi 20，含 DTEX `1,100/1,680`、fi MOQ 表 `'300–1,000'`）；UI 字典 3 处（da/fi `oem.why.factory.desc` SEP + fi `people.managementDesc` EN 残留译为芬兰语 `Kokenut johtoryhmä valvoo 12 000 m²:n tuotantolaitosta...`）。② **排除项**：`0,001 mm`（da/fi 合法小数逗号）、`rgb()`/`data:image` 行、hull-engineering `18 000 h`（全站 17 locale + EN 同形——非漂移，改单点反致全站不一致，改全部超范围，勿动）。③ **同值双锚**：fi mgmt 的 EN 值与 el 块字节相同（el 也未翻译），单行 find 歧义 → 6 行锚（mgmt+quality+qualityDesc+sales+salesDesc+subtitle；el 在 subtitle 分歧为希腊语）；**rep 首行必须保留 find 行的原始缩进**（生成器从锚行 `/^\s*/` 提取——漏掉则 JSON 缩进错乱、prettier 拦截）。④ **链条维护时序（L29⑥/L30⑤ 补充）**：39 #65（da cwb）rep 含 `12,000 m²`，41 的 SEP op 会把它改点号 → rep 计数归零 ERR；正解=`_gen-ops-41-fix39.cjs` 更新 rep 为 `12.000 m²` 新终态，**但必须在 patch 之后执行**——pre-patch dry 时文件仍是逗号形态，提前改 rep 会让 39 #65 find0/rep0 直接 ERR ABORT（本例实测：先 fix 后 dry 报 ERR，回退 rep→dry 59/2355/0→patch→fix→复 dry 2414/0/0）。⑤ **dist walk 假阳性**：Google Maps embed `center=36.8861,120.5261` 命中 `\d{1,3},\d{3}`（取到 `861,120`）——坐标分隔逗号必须排除（`/center=-?\d+\.\d+,\d+\.\d+/`）。⑥ **新债务侦察（后续 shard 挂账）**：(a) da UI 块**捷克语系统性污染**——`nafukovací`（捷克语"充气式"）×25 处混入丹麦语句子（compare.inflatableVsHard 全族 + people.designDesc + techspecs + home.research 等），需按上下文变形oppustelig/oppustelige/oppusteligt 逐行修，专项 shard；(b) fi UI 字典 ~52 键 EN 残留块（knowledgeGraph/product/search/useCase/buyerCenter/faq/learn/people/techspecs 族）；(c) el `people.managementDesc` EN 残留（fi 修复后 el 行自然唯一，届时单行 op）；(d) 共享 site 数据文件 `src/data/site/about.yaml` 无 per-locale 变体（仅 fr 有 about.fr.yaml 且保留 EN `1,500+`/`of conditions` heading）→ da/fi about 页渲染共享 EN 统计块，结构性缺口；(e) EN 内容页族（news/evidence/case-studies/solutions/v2/bateau-gonflable 等落地页）在 da/fi 路径下整页英文——其逗号属未翻译债务非 SEP 违规，dist walk 需按数据源分类。⑦ 数字：59 op（56 yaml + 3 UI dict，生成器 `_gen-ops-41.cjs` 断言：rep 无逗号残留、find 行全文唯一、fi 6 行锚 count==1、spaced `12,000 m²` pre-patch ≥13 保 39 #105 n:10）/41 分片共 2414 op 全幂等（复 dry 2414/0/0）；prettier da/fi yaml + i18n-config.json 全过（fix39 的 JSON.stringify 重写会丢 prettier 格式——**链条维护脚本跑完必须重新 prettier --write 该 ops 文件**）；check 0 errors/0 warnings/169 hints（此前 19 个 i18n warnings 已清零）；build 13,858 页；dist walk 56/56 yaml op + 3 UI op 全落地、EN 21 文件逗号形态未受扰。

#### L32. 分片 42：da UI 捷克语污染专项（nafukovací → oppustelig 族）（2026-09）

① **漂移形态**：L31⑥(a) 兑现——da UI 字典块 25 行捷克语 `nafukovací`（cs→da 翻译管道泄漏），全部为单词级污染（丹麦语句子内嵌捷克语形容词，compare.inflatableVsHard 全族 + people.designDesc + techspecs + home.research + faq + learn）。② **形态决策**：依 da 块既有 42 处正确 `oppustelig` 先例定形，不凭空造——13 复数 `oppustelige`（vandfartøjer/både/SUP-brædder/platforme 复数语境）；10 共性 `oppustelig`（标题/裸单数：`Oppustelig SUP`←L29771 home.products.sup、`oppustelig vs. hård`←L29551 guides.metaDesc、`oppustelig SUP-teknologi`←L29548 knowledge.metaDesc）；2 中性 `oppusteligt`（`et` 冠词语境：verdictDesc/faq.sup.travel，←L29633 `et oppusteligt SUP-bræt`）；sv/no 姊妹块同键译法交叉参考。③ **cs 同值相撞（L31③ 同值双锚新形态）**：2 键（compare.inflatableVsHard.col1Title `"Nafukovací SUP (iSUP)"`、isupShort `"Nafukovací SUP"`）da 污染值与 cs 块合法捷克语**逐字节相同**，单行 find 歧义 → 邻行锚：col1Title 锚 prev（bestFor `"Bedst til:"` da 唯一）、isupShort 锚 next（perfDesc da 唯一）；**锚行必须为非目标行**（若邻行也是被改行，先应用的 op 会令后继锚失配）。④ **链条安全断言必须限定同文件**：全量扫旧 op 引用 `nafukovac` 误报——shard 26 有 op 在 `cs/quality.yaml`（cs 本地合法内容）；断言应收窄为 `f === i18n-config.json` 的旧 op。⑤ **孤儿字典键**：3 键（techspecs.inflatableDesc/home.gallery.sup.desc/home.preview.beginner.product1.desc）在 **EN dist 同样不渲染**（0 命中）——SSOT 层修复正确、dist 落地 N/A；dist walk 签名 MISS 时先对照 EN dist 同键再判定缺失。⑥ **dist walk 签名教训**：渲染形态带空白/属性（`> Oppustelig vs stiv </h2>`、`alt="..."`、JSON-LD），猜测标签闭合边界的签名（`>X<`）必 MISS——签名用纯文本片段勿加边界猜测；subtitle MISS 系手打签名笔误（samenligningen vs sammenligning），复用 op 的 rep 值片段做签名可免笔误。⑦ 数字：25 op（生成器 `_gen-ops-42.cjs` 断言：da 块 25 行全命中且形态映射键全覆盖、find 全文唯一（2 锚 op count==1）、rep 无捷克语字符、cs/da 块外无 nafukovac、同文件旧 op 无 nafukovac 引用与 find 碰撞）/42 分片共 2439 op 全幂等（复 dry 2439/0/0）；prettier i18n-config.json + ops/生成器文件全过；check 0 errors/0 warnings/169 hints；build 13,858 页；dist walk：da dist `nafukovac` 0（cs dist 642 合法保留），22 渲染键签名全落地。

#### L33. 分片 43：fi UI 字典 EN 残留清理、陈旧 EN 副本类别、区段单 op 策略、链条序列化转义 bug（2026-09）

① **陈旧 EN 副本（stale-EN）类别——精确等值扫描的系统性盲区（L14 延伸）**：fi 字典 172 键 fi===en 只是第一层；en 文案后续演进（`Aluminum Hull`→`Aluminium Hull` 英式拼写、`View Careers`→`View Open Positions`、`Compare side-by-side`→`Side-by-Side Comparison`）后，fi 留下的旧英文与当前 en 既不相等也非 case 变体，精确/casefold 扫描全漏。三层检测缺一不可：精确等值（+sv/no/da 三向对照区分 RESIDUE/FAMILY-EN）→ 词表+无变音符启发式（芬兰语值必含 ä/ö/y 之外的芬兰语特征词，无变音符且非术语的值人工逐条复核）→ 区段边界审查（密集连续目标区段内的非目标行逐条过目，本层捞回 13 键含 people.joinCta `View Careers`、useCase.view 含 `\\u2192` 过度转义渲染 bug、techspecs material/param 族）。**残留审计的收口环是"区段内非目标行逐条人工过目"，不是模式扫描。** ② **区段单 op 策略（L31③ 同值双锚的规模推广）**：fi 131 键聚成 7 个密集连续区段（最大 39 行），逐键多行锚必互相破坏幂等——后应用 op 的 rep 含先应用 op 已改写的中间行，pre-patch 状态构造的 rep 在 patch 后失配。正解=**整区段合并单 op**：锚取区段上方最近唯一非目标行（锚永不被任何 op 修改）、find/rep 覆盖锚行到区段末行的完整行集，生成器断言覆盖行数=目标键数、顺序模拟全幂等。③ **链条序列化转义 bug（生成器嵌入代码的转义层级）**：`_gen-ops-43.cjs` 自身 `sq()` 正确（`.replace(/'/g, "\\'")`），但把该函数**作为字符串模板嵌入** `_chain-43.cjs` 时少转义一层，产出 `.replace(/'/g, "\'")`——`"\'"`===`"'"` 为 no-op，维护脚本重写 41 整文件时把含内嵌单引号的 op（`'300–1,000'`、`MOQ'er`）写成语法错误；writeFileSync 先成功、round-trip require 才崩（文件已坏）。恢复=git checkout 41 → 修生成器嵌入层转义（`\"\\\\'\"`）→ 回退 i18n-config.json → 删产物重生成 → 全链重跑。**生成器嵌入可执行代码时，嵌入模板的转义必须逐层推演；round-trip 校验放 require 而非只比 JSON。** ④ **链条断言按引擎语义而非精确计数（L31④ 补充）**：新 shard 合法消耗旧 op rep 的出现次数——el mgmt 翻译消耗 39 #105（find `12,000m²` n:10，raw repCount 34→33）一处，33≥10 引擎判 already 仍成立；断言写"repCount ≥ n"而非"repCount == 旧值"。⑤ **孤儿字典键判定（L32⑤ 同法）**：techspecs.compareLabel/paramPressure 在 src 零消费点（grep 确认）→ dist N/A；paramMaxLoad 有消费点（tech-specs 页表头）→ fi dist 实证 `Suurin kuorma` 落地；EN dist 同键命中 3 处实为 per-locale 页面 yaml 的同文 h2（fi 版既有 `Vertailu rinnakkain`），与字典键无关——**dist 签名 MISS 必须先 grep src 消费点，再对照 EN dist 区分"孤儿键"与"渲染遗漏"。** ⑥ **保留决策**：4 个数值范围键（compare.pvcVsHypalon.r2a/r2b、compare.inflatableVsHard.r1a/r1b，`18-30 lbs`/`25-35 kg`）姊妹 sv/da 保留 EN 形态 → fi 跟随；compare.afarerVsTraditional.col1Title/col1Short 的 `afarer` 小写为品牌惯例非 case-drift。⑦ **fi 既有误译族挂账（非 EN 残留，另立债务类）**：`Sahaus tyyppi`/`liuotinsahauksella`（welding 误译为锯切，techspecs 页）、`veneprosentit`（compare，应为 venevalmistajat）、`Marketin edullisin`、`kerrostaloasukast`、`raojltainen`、`Agiliit laudat` 等拼写/误译——修复需逐条语义复核，不入机械 shard。⑧ 数字：131 fi 键（104 精确 + 26 陈旧 + 1 typo `veneyiden`→`veneiden`）+ 1 el mgmt（`12.000 m²` 点号先例 ×5）= 8 op（7 fi 区段 + 1 el 单行）；链维护 1 job（41 op#58 rep 行级改写含 5 行被译 EN 锚）；总 2447 op/43 分片全幂等（patch 8/2439/0 → chain → 复 dry 2447/0/0）；fi===en 复扫余 64 FAM + 4 数值键；check 0 err/19 既有 warn；build 13,858 页；dist walk：fi 9 签名 7 落地 + 2 孤儿 N/A、7 残留签名 0、字面 `\u2014` 0、el 3 签名全落地。

---

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
