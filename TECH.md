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
 5. scripts/_gen-landing-i18n.cjs      → Generate landing/*.ts modules (EN-key → 19-locale maps for fr() pages, from src/data/landing-i18n/)
 6. scripts/_gen-pages.cjs             → Generate pages/*.ts modules from JSON (109 pages)
 7. scripts/_gen-seo-meta.cjs          → Generate seo-meta.ts (572 entries / 78 routes, from page YAML `meta` blocks; consumed by `src/components/common/Metadata.astro`)
 8. scripts/gen-icon-svgs.cjs          → Generate icon SVGs
 9. astro build                        → Static site to dist/ (13,858 pages)
 10. scripts/clean-public-assets.mjs    → Clean temp assets
 11. (optional) scripts/fast-upload-r2.mjs → Upload to R2 (assets + data)
```

> ⚠ Steps 2–7 write gitignored artifacts into `src/i18n/generated/` and `public/data/`. Never edit them by hand; always regenerate via the build chain. CI runs the same steps.

### 2.2 CI/CD (GitHub Actions)

Trigger: Push to `main`

```
checkout → npm install
 → geo-build → generate-data-json → generate-geo-files (tsx)
 → gen-uiall → gen-landing-i18n → gen-pages → gen-seo-meta → gen-icon-svgs
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

### 3.4 contact-worker env contract（2026-10 修复 "Destination email not configured"）

- `CONTACT_EMAIL_TO`：收件箱，**非敏感**，作为 `[vars]` 固化在 `workers/contact-worker/wrangler.toml`（`info@afarer.com`，页面公开地址）；worker 代码另有同值兜底（`env.CONTACT_EMAIL_TO || 'info@afarer.com'`），丢失 var 也不再 500。改收件箱 = 改 toml var（或 dashboard 设同名 secret 覆盖，secret 优先）。
- `CONTACT_RESEND_API_KEY` + `CONTACT_FROM_EMAIL`：**secrets**，值存 GitHub repo secrets（2026-07-30 已设），由 deploy.yml 的 "Sync contact worker secrets" 步在每次部署时 `wrangler secret put` 推送到 worker（缺任一则跳过并打 SKIP）；二者齐备才实际发信，缺失时 worker 返回 success 但**静默丢弃提交**。审计步 "Audit contact worker secrets" 输出 secret 名单用于核验。`CONTACT_FROM_EMAIL` 应为 Resend 已验证发信域（config.yaml 记录 `web@afarer.com` / `Afarer`）。
- `CONTACT_EMAIL_TO`：同名 GH repo secret 存在但**不用于同步**——收件箱以 toml `[vars]` 为唯一真源（见上）。
- ~~`CONTACT_SUBMISSIONS_PAT`/`GITHUB_TOKEN`~~：Env 接口死字段已于 2026-10 清除（连同 `CONTACT_EMAIL_PROVIDER`），Env 仅保留代码实际使用的 4 个字段。
- 4 个前端提交点共用此 worker：Contact 表单、NewsletterSignup、QuotationForm、whitepaper 表单（subject=`newsletter signup` 走 newsletter 分支自动补 firstName/lastName）。
- 部署链：push → CI `deploy.yml` 末尾 `npm run deploy:workers`（`wrangler deploy -c workers/contact-worker/wrangler.toml`）；**本地 wrangler 无 CI 账号 token**（本机 config 属另一账号，查询报 code 10007），worker 改动一律走 CI 部署。
- 查 worker 运行日志：用 `.github/workflows/debug-contact.yml`（workflow_dispatch，可经 GitHub API 触发）——`wrangler tail` 后台挂着 + curl 打一条真实 POST，采集 console.error 输出。2026-10-04 诊断结论：Resend API 返回 2xx（无 error 日志），邮件已被 Resend 接收，问题在投递侧（收件箱垃圾箱/退信），发信配置（DKIM `resend._domainkey.mail.afarer.com` + SPF `send.mail.afarer.com`→amazonses）DNS 记录齐全。

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

#### L34. 分片 44：el UI 字典 EN 残留清理、纯 ASCII 补充扫描、全链模拟生成器双 bug、FAM 姊妹判定（2026-09）

① **语言选型——非 ASCII 文字系统让残留检测零假阳性**：全 locale 三层扫描（精确 ===en + 词表启发式）定位 el 为全站最重（158 精确 + 14 陈旧）；希腊语值必含希腊字母 → 纯 ASCII 值即嫌疑，无 it/nl/no 的日耳曼/罗曼同形词假阳性负担（no "for/in"、it "a/in" 是合法本语词——Latin 语言的 stale-EN 扫描必须加同形词过滤，挂账后续 shard）。② **纯 ASCII 补充扫描捞回 12 键（L33① 教训重演）**：词表启发式只捞 14 键，纯 ASCII 全量复核再捞 12（materialAluminum/Fiberglass 旧美式拼写族、paramMax 三键 "Max Engine"、col2Title、home.category.sups）——**残留审计三层：精确等值 → 词表启发式 → 文字系统特征全量（非希腊字母值逐条过目），第三层不可省**。③ **残留判定阈值与 FAM 姊妹判定**：键被 ≥14 locale 翻译且 el===en → RESIDUE（104 键）；0–3 译的数值/价格/lbs/CE 徽章、7 译的 nav.*/breadcrumb 族（fi/sv/no/da 四姊妹全保 EN → FAM 保留）、小写 afarer 品牌惯例 → KEEP；r8a/r8b 价格键 16 译判残留，形态循姊妹先例后置 `200-500 $`（en 为前置 `$200-$500`）。④ **全链模拟生成器双 bug**：其一，模拟断言误遍历非 config 文件的旧 op（find/rep 双 0 → 误报 break）——**全链模拟必须按 `f === 目标文件` 收窄**；其二，比对 `chained !== content` 前漏把新 op 应用到 chained（模拟的是"旧链终态"而非"新链终态"）——**链模拟的比对基准 = 旧 op + 新 op 顺序应用后的内容**。⑤ **链条安全零维护作业**：43 op8 的 el mgmt 希腊行全部位于非目标行 → 整区段替换逐字节保留（生成器断言旧 rep 在 span 内出现次数不变）；el 块序列化以 people.heroDesc 行做风格探针（字面 UTF-8、4 空格缩进、尾逗号），`sq()` 反斜杠优先转义（L33③ 教训沿用）。⑥ **孤儿/客户端键 dist N/A 判定（L32⑤/L33⑤ 同法）**：compareLabel/paramPressure 孤儿（src 零消费点）、col2Title/search.loading/product.noResults 客户端态（EN dist 同为 0 命中）→ el dist 0 渲染为预期；**dist walk 正签名 MISS 必须先对照 EN dist 同键**。负签名 7 命中全部为 el 路径页面 yaml EN 内容（同路径 EN 页同样包含，挂账族⑤ el 变体）——**负签名命中必须做同路径 EN 对照再定性**。控制探针（伪造希腊语签名）0 命中佐证检测可信。⑦ 数字：130 el 键（104 精确 + 26 陈旧）→ 6 op（区段键数 1/1/60/65/2/1，锚=上方最近唯一非目标行，GAP=10 分组）；总 2453 op/44 分片全幂等（dry 6/2447/0 → patch → 复 dry 2453/0/0）；el===en 复扫 158→54 全为既定 FAM、陈旧 14→0；check 0 err/19 既有 warn；build 13,858 页；dist walk 392 el 页：正签名落地、4 负签名全为页面内容假阳性、字面 `\u2014` 0。

#### L35. 分片 45：es UI 字典 EN 残留清理、拉丁 cognate 陷阱、token 级 EN 独占词过滤、跨语言污染（2026-09）

① **拉丁语言三层检测定型（L34① 预言兑现）**：el 的纯 ASCII 补充扫描对拉丁语失效——es 纯 ASCII 嫌疑 320 条几乎全为合法西语（FP 率过高弃用），第三层改 **token 级 EN 独占词过滤**：es 值 token ∈ en 词表 且 ∉ pt/it/fr 词表（罗曼姊妹语均不用）→ 37 嫌疑净捞 4 键嵌入式 EN 词（recDesc "boater"、hardBestDesc/verdictDesc "paddlers"、aiBlock "setup"+"paddlers"）。② **拉丁同 cognate 陷阱（精确等值扫描的拉丁语盲区）**：es strong 34 键中 7 键合法同形 KEEP——hero.title "afarer"（en SSOT=品牌，17 locale 为旧文案漂移）、techspecs.paramMaterial/compare.material "Material"、faq.category.general "General"、compare.factor "Factor"、404.label "Error"、afarerVsTraditional.r1a "Qingdao, China"（es 中国=China 同形）；gray 9 键全 KEEP（数值族/`18-30 lbs`/`(premium)`/TLDR/nav 姊妹族）；词表启发式 stale 29 仅 6 键真残留，其余 23 假阳性系西语功能词 "a" 命中 EN 词表——**拉丁语言词表启发式必须配 cognate/功能词白名单**。③ **跨语言污染 + typo（L32 da 捷克语污染同族）**：es oem.why 为挪威语 "Hvorfor samarbeide med afarer for OEM/ODM?"（no 块复制粘贴污染）；顺修 r3b `Excelente ( inherente)` 多余空格。④ **字面 `\u2192`/`\u2014` 过度转义族（L33 useCase.view 同族扩大到 5 键）**：JSON 源为双反斜杠字面转义（解析值为 6 字符可见文本）——home.useCases.browse/useCase.view/home.evidence.read/browse/useCase.hubDesc；生成器按 raw 行替换、新值用真实 →/—（es 块序列化=字面 UTF-8，JSON.stringify 不转义非 ASCII）。⑤ **翻译循块内先例 + pre-patch 值类断言**：paddlers→"palistas"（块内 ×4 先例）、"Tiempo de Montaje"（singleVsMulti.r6）、"Visión General"（commercialWorkboats.rel4）、"Contáctanos"（solutionsByIndustry.contactBtn 姊妹）、"Soporte de Buceo"（scenario6/answer6/aiBlock ×3 先例，舍块内 "apoyo a buceo" 单例）；性别循先例：pvc r4a/r5a→"Buena"/"Moderada"（Resistencia 阴性，r3a/r10b 先例）、r9b→"Pegada = buena"（costura 阴性）、ivh r10a→"Buena"（r10b 块内先例）；r8a/r8b 后置 `200-500 $`（L34③ 姊妹形态沿用）；生成器新增 **pre-patch 值类断言**（27 exact===en + 5 字面转义 + NB 污染 + typo + 4 嵌入词逐键锁定，防状态漂移误 patch）+ 翻译值断言禁字面 `\u` 转义。⑥ **孤儿键族扩大 + yaml 巧合同串假归因（L34⑥ 同法延伸）**：pvcVsHypalon r 族 8 键 + recDesc（EN dist 'Glued = good'/'Choose PVC if you' 0 命中 → UI 字典表无渲染点；en/marine-industry '8-12 years' 系页面 yaml）、commercialWorkboats.a1（EN dist 'Dive Support' 命中实为 yaml h3 "Dive Support Vessels"）、oem.why（EN dist 0）→ es dist 0 渲染为预期；**正签名命中还须防 yaml 巧合同串假归因**——'Excelente (inherente)' 命中经上下文检查为 research 页 es yaml 自有表格文案（非字典 r3b 渲染）；UI 字典 ivh 表实际渲染于 `/compare/inflatable-vs-hardboard`、solutionsByUseCase 5 键渲染于 `/solutions/by-use-case`。⑦ 数字：38 es 键（27 exact + 10 stale/嵌入/NB + 1 typo）→ 7 op（区段键数 4/2/8/17/1/1/5，锚=上方最近唯一非目标行，GAP=10，6944→6969 gap 25 拆 C1/C2）；总 2460 op/45 分片全幂等（dry 7/2453/0 → patch → 复 dry 2460/0/0）；es strong 复扫 34→7 全为 cognate KEEP、嵌入词/字面转义 0；check 0 err/19 既有 warn；build 13,858 页；dist walk 393 es 页：正签名落地（ivh 表/by-use-case 5 键/首页 browse·evidence/use-cases hub）、UI 字典负签名全 0、paddlers/boater 83 文件命中全为页面 yaml EN 内容（同路径 EN 对照 es==en 或 es<en，挂账族⑤ es 变体）。

#### L36. 分片 46：da UI 字典 EN 残留清理、日耳曼 cognate/loanword 判定、化合物掩蔽与 dist walk 权威性、da 页面 yaml 新债族（2026-09）

① **定界三层**：精确等值 + 词表启发式 + 词干化 token 复扫（86 token 嫌疑 → 30 键主批 + 48 weak 键 KEEP + 17 stale 条零残留）。**日耳曼 cognate 陷阱（L35② 拉丁 cognate 的日耳曼对偶）**：da 与 EN 同形合法词大量存在——Guides/guides、Find、Definition、Innovation、Design & Innovation、Compliance、Brand/branding、Co-Brand、Scroll、Rail（de 保 Rails）、Node（no 保留）、nav 姊妹族 ×7、数值/lbs/英寸族；**loanword KEEP**：fair pris、touring、startup、resort、door-to-door、bulk、private label、stealth、tutorials、whitepaper、platform、support、Yoga/Surf/FAQ/TLDR、Downloads og manualer；产品系列名（All-Around SUP）与运动名（stand-up paddle boarding）保留。② **Download→Hent 先例族 10 键**（sv Ladda ner/no Last ned 佐证为未翻译残留而非 KEEP）：home.resources.download/retail.download/b2bSubtitle/buyerCenter.downloadCatalog/b2bResourcesDesc/oem.catalog/resources.metaDesc/nav.resourcesDownloadCatalog/exitIntent.title/exitIntent.button。③ **嵌入词 18 键循块内先例**：Militær-grade→"PVC-lag i militærkvalitet"、stiv Board→"hårdt bræt"、performance surfing→"præstationssurfing"、Performance-drevet→"Præstationsdrevet"、whitewater→"vildt vand"、use cases→"anvendelsestilfælde"、SOLAS-compliant→"SOLAS-kompatible"、All-around→"Allround"、Shop→"Se"、Se case→"Vis casestudie"、labels→"etiketter"、email→"e-mail"、Medium→"Middels alvorlighed"、SUP-basics→"det grundlæggende i SUP" 等；46b 补 2 键（ai.kgDesc、home.resources.supComparisonDesc）。④ **化合物掩蔽教训（本 shard 最大教训，L28③/L39⑥ 同族升级）**：home.catalog.sup.desc "Stand-up paddle boards fra 9 ft..." 的 stand/paddle/boards 三 token 全被词干化复扫过滤——de 姊妹保化合物 "Stand-Up-Paddle-Boards"（L2197）令三词成为"姊妹共享 token"被剔除，字典级三层扫描（精确/词表/词干）全漏，**仅 dist walk 抓到 → dist 全站 walk 是残留审计的权威收口环，字典级扫描只能证伪不能证真**；另小写签名漏 capital-S "Stand-up paddle boards" → **负签名必须含大小写变体**。⑤ **da 块复数形式规则**："SUP-brædder"=短标签（nav.supBoards/techspecs.sup/home.catalog.sup 等）；"SUP-brætter"=描述句（techspecs.supDesc/ai.definition/singleVsMulti.cta/oem.desc）→ desc 键取 brætter。⑥ **dist walk 负命中三层定性法（L44⑥/L35⑥ 延伸定型）**：(a) EN 同路径也有 → 内容层 EN 页挂账⑤（Military-grade/SOLAS-compliant/use cases 等）；(b) da 特有且源自 `src/data/pages/da/*.yaml` → **da 页面数据 yaml 层 EN 残留（新债族，6 处定位挂账：technology.yaml L17 "Militær-grade PVC"、resources.yaml L14 + home.yaml L24 + b2b-solutions-matrix.yaml L119 "Download katalog"、brand-why-afarer.yaml L71 "Download produktkatalog"、academy.yaml L87 "All-around vs. touring vs. yoga SUP"、retail-partners.yaml "Download vores omfattende retail-partnerkit"）**；(c) da 特有且源自字典 → 真残留（仅 46c 一例）。正签名 MISS 定性：孤儿键（home.tech.pvc.title/home.learn.guide3/carousel.prev/pvcVsHypalon.subtitle src 无 t() 消费点，SSOT 层修复 dist N/A）、客户端渲染键（geo.mediumSeverity EN dist 同 0）、yaml 覆盖键（academy.* 渲染 academy.yaml hero 为 da 内容无残留）、页面任何 locale 均不存在（compare/pvc-vs-hypalon）。⑦ **链条维护**：42 #2 techspecs.supDesc rep 被 46 重译消耗 → `_gen-ops-46-fix42.cjs` 程序化更新 rep 为 46 终态（L29⑥/L30⑤ 模式）；46b/46c 生成器 one-shot + pre-patch 值类断言（L35⑤ 范式）。⑧ 数字：25 op = 22 主批 + 2 46b addendum + 1 46c addendum = 31 键（数据表 `_b46-data.cjs` + 生成器 `_gen-ops-46/46b/46c.cjs`）/46 分片共 2485 op 全幂等（复 dry 2485 already/0 err）；prettier ops/生成器全过；check 0 err/19 既有 warn；build 13,858 页；dist walk 392 da 页：46c "SUP-brætter fra 9 ft til 12 ft" 落地（"SUP-brædder" h3 下）、capital-S "Stand-up paddle boards" 归零、exitIntent "Hent" ×381 页、oem.catalog "Hent produktkatalog"/retail.download "Hent →" ×3/anvendelsestilfælde ×10 页落地、剩余 "Download katalog" 为 yaml 层挂账。


#### L37. 分片 47：da 页面数据 yaml 层 EN 残留清理、EN 根漂移家族挂账⑧、yaml 单引号标量转义陷阱（2026-09）

① **定界与阈值**：46⑥ 新债族全量清算——js-yaml 扁平化 `src/data/pages/da/*.yaml` 66 文件 + 21-locale 家族同值测试（da===EN 且 ≥14 locale 已译 → RESIDUE；tr≤3 → KEEP；中间态依 sv/no 姊妹语义 + 块内/层内先例）+ 表层 grep 补扫（大小写变体、`SUPer` 等拼写残留）；A2 精确 202 + B 词形 281 全部定性为 FIX 58 op/29 文件、KEEP、漂移挂账三类。**整段 EN 块必须先做 EN 根对照 + 全 locale 同值测试再定性**（tr-count 单独会误导，见②）。② **EN 根漂移家族（本 shard 最大发现，挂账⑧ 60 键）**：request-quotation.content_form.*（15）、solutions-paddle-clubs（17）、solutions-resorts-hotels（21）、solutions-retail-partners（5）、brand-marine-expertise.mat0desc、about.brand_hub_subtitle（12-shared）——da 持整段 EN 非 da 懒惰：EN 根已改写，19/20 locale 同持旧 EN（仅 fr 偶有 de/pt 译过更旧版本）→ 系跨 locale 系统性漂移，非 da 残留，留专门同步分片（判据：≥15 locale 同持 + != 现 EN 根；探针脚本临时目录 `_s47-drift-inv.cjs`）。③ **58 op 修复**：Download 动词→Hent 22 处（名词 download/downloads 及 href KEEP）；`SUPer`→`SUP'er` ×2（da 层 15× 先例）；about meta 块 inflatable→oppustelig(t) 4 处；afarer Academy→Akademi（块内 Akademiet + no 先例，tr=13/20 中间态仍 FIX）；Lab 02/03/05/06→Laboratorium（da 01/04 已译，六文件层内归一）；AQL 2.5→2,5 ×5（da 小数逗号）；军事/海洋级 PVC 三形态："PVC i militærkvalitet"（标题体，technology）/“PVC i militær kvalitet"（散文体，inflatable-vs-hardboard 整段船时代旧译重写）/"PVC af marinekvalitet"（factory/tourism，mat0title 先例）；Qingdao, China→Kina ×1、UAE→Forenede Arabiske Emirater ×1（cases）；BSCI & REACH→og ×2（sv/no）；20–30 days→dage、units/yr→enheder/år、$/yr→/år（文件内先例）；Ofte stillede spørgsmål、Bestseller、bedste praksis、hotelbranchen、nye forme→former（da 复数）等。④ **KEEP 终判**：yaml 层 "SUP-boards"/"board" loanword 惯例（~60×，与 dict 层 brædder/brætter 分层共存不互改）；"Guides/guides"（46 cognate 裁定，da 层 15×）；home meta.title "Performance"（de/nl/no loanword）；"CE Certified"、knowledge "Marine-grade PVC-teknologi"（sv/no 同保 hybrid）、distributor rows（Authorized Dealer 等 sv/no 保留）、客户位置专名（Dubai, United Arab Emirates 等）、E-mail、min/board（文件内惯例）。⑤ **yaml 单引号标量转义陷阱（47b+47c 两段教训）**：fragment patch 的 rep 引入 `'`（SUP'er）落在 `'...'` 单引号标量内会破坏 yaml 解析——单引号标量内 `'` 必须写成 `''`（块标量 `|` 不受影响）；原 n=2 单 op 拆为两个终态一致 op（L3 中间态→`SUP''er`；L15 历史形→`SUP'er`）。**但 47b 手算的 `''` 终态从未落盘**：prettier 归一化会把含 `''` 转义的单引号标量整体重排为双引号标量（`"...SUP'er..."`），op 指向的单引号终态令 post-patch dry 永远 `applied:1`，且真跑 `--patch` 会向双引号标量注入字面双撇号（损坏）——**终态必须以 prettier 归一化后的磁盘为准，不能手算 yaml 转义形；post-patch dry 必须 0 applied 才算收口**；47c 修复（`_gen-ops-47c.cjs`）：op #0 改整行 op（find=HEAD 历史单引号整行、rep=磁盘实存双引号终态整行），同时幂等且可重放。引擎套件为**终态一致**而非从头可重放（46-fix42 先例）。⑥ **链条维护**：shard 14 da/about.yaml 插入型 op（rep ⊃ find 内嵌旧 EN keywords 值）被 47 patch 打断 → `_gen-ops-47-fix14.cjs` 程序化更新旧 op find/rep 至新终态（'oppusteligt sup brand' 等）——**插入型 op 的 rep 内嵌锚文本，下游同区域值变更必须回写旧 op**。⑦ **dist walk 392 da 页**：36 正签名 35 命中（1 false-miss=表格分 `<td>` 渲染拆断逗号签名的连续文本，修复实际生效——**表格单元格拆分是连续文本签名的盲区**）；31 负签名 28 归零，3 命中全定性：国别电话 `<option>` 下拉（表单技术值 KEEP）、客户位置专名（KEEP）、JSON-LD `"address":"...Qingdao, China..."` 结构化地址（全 locale canonical 同形，sv 对照确认）；另 home/evidence "AQL 2.5" 为 dict 层残留（sv 同持）→ 48+ 候选。⑧ **挂账**：⑧ 漂移家族 60 键跨 locale 同步分片；da dict 层剩余残留（含 AQL 2.5 证据卡）；⑤ 内容层 EN 页族延续。

#### L38. 分片 48：request-quotation content_form 跨 locale 结构漂移整块重写、prettier 终态提取生成器范式、fr 残留扩围、contact 页新漂移家族（2026-09）

① **L37② 挂账⑧ 首项兑现**：rq `content_form.fields` 19 locale 全持旧 EN 结构（f0 Product Type/select 含旧 EN 6 项 options 首项 "SUP Boat"、f1 Quantity/text 10 项、AR×2、Timeline×2 重复、TM/ER/CR/US/UL 带 EN placeholder），EN 根已重写为新 12 字段结构（Product Category ×6 / Application ×10 / Quantity / Target Market / Delivery Country / Material Preference ×5 / Engine / Customization / Timeline / Additional Requirements / Upload Specification / Upload Logo；types 序列 [select,select,text,text,text,select,text,text,text,textarea,file,file]）。19 locale 旧结构完全同构（span `  fields:`..`cta:` 前各 58 行、LF、磁盘全 prettier-clean）→ 每 locale 一个整块 op（find=磁盘提取、唯一性 count==1 断言）+ 数据表 `_b48-data.cjs`（19 locale × 20 新译串：12 label + 8 placeholder/options）。② **prettier 终态提取范式（L37⑤ 47c 教训内化为标准设计）**：rep 一律不手算——生成器 `_gen-ops-48.cjs` 内置 repo prettier（v3 异步 format，`{ parser: 'yaml', printWidth: 120, singleQuote: true, tabWidth: 2, useTabs: false }` = .prettierrc.mjs 等价）format 模拟 patch 后全文件，从格式化结果提取 `  fields:`..`cta:` 前块作 rep；断言 format(format(x))==format(x)（prettier 稳定性）、pretty==head+rep+tail（块外零改动）、终态 20 文件结构同构、label!=EN、复用值 round-trip。初始序列化只需 js-yaml 正确解析（值含 `: ` 单引号、含 `'` 双引号、余 plain），**"复用值不含撇号"假设废除**——it ph_uploadlogo 含 `opera d'arte`，由双引号包裹+prettier 正确处理；patch 后 `prettier --check` 20 文件实测 0 重排（终态即 prettier 形态，无需 --write 兜底）。③ **复用值从磁盘提取而非引 temp JSON**：temp 探针产物会消失，磁盘才是 SSOT；ph_timeline 9 locale（pt/es/it/ja/ko/ru/tr/fi/ro）旧 f4/f8 两处 Timeline placeholder 略异 → 裁定取磁盘 f8（与审计表一致），生成器按字段名直接提取。④ **fr 扩围（本 shard 定界教训）**：fr 修复本定界只查 content_form，full-file EN-identity walk 捞回 2 处块外残留——hero_text.tagline "Get a Quote"、steps2_process.title "How It Works" → 修复 2→4 处（另 2 处：tagline "Quotation Form"、AR placeholder 残留 "or any special requirements"）；译法 grounded："Obtenir un devis"（姊妹 infinitive 模式 es "Obtener una cotización"/it "Richiedi un preventivo"，避免与 hero 标题 "Demander un Devis" 重复）、"Comment ça fonctionne"（fr/custom.yaml L17 同概念先例）→ 23 op 而非 21。**同一文件同分片的 EN 残留定界必须 full-file 扫描，不能只扫目标块。** ⑤ **q() 序列化 bug**：find 整块含换行，单引号 CJS 序列化崩（`Invalid or unexpected token`）→ 双引号分支补 `\n`/`\r` 转义——**多行块序列化必须转义换行**。⑥ **验证链**：dry 2566 loaded / 23 applied / 2543 already / 0 errors → patch 23 applied / 20 文件 → prettier --check 全过 → 复 dry 2566/0/0；`npm run check` 0 err / 19 既有 factory-oem-capability warn；build 13,858 页；dist walk 20 rq 页全 OK（正签名 catLabel/vest 术语/qtyPh/dcPh/matLabel + fr 4 串全落地；负签名 SUP Boat/Product Type/Customization Needed/Upload Logo / Artwork/e.g. 50 units 归零）+ 全 dist 13,858 页扫 "SUP Boat" 0 命中。⑦ **新发现挂账（dist 全扫负签名捞出）**："Customization Needed" 全 dist 31 命中全为 **contact 页**——de/es/fr/pt contact_form 已译而 ~30 locale（it/ja/ko/nl/sv/no/th/da/fi 等）仍持 EN 标签；且 src 层 contact 页 `contact_form.fields` 字段名自身混乱（多数 locale 字段 name 为 EN 且 type 错乱：firstName/lastName/select、字段顺序漂移；fr 字段名半翻译 `pays`/`sélectionner`/`adresse`）→ **contact 页 contact_form 结构漂移为独立新家族（挂账⑨，shard 49+）**，规模与 rq 同级。⑧ 数字：23 op（19 locale 整块 + 4 fr 行 op）/48 分片共 2566 op 全幂等（复 dry 2566/0/0）。

#### L39. 分片 49：solutions-paddle-clubs 跨 locale EN 漂移重译、双块 op 范式、链条安全按引擎幂等语义判定、write 工具分片写入再证实（2026-09）

① **漂移形态（L37② 挂账⑧ 第二项兑现）**：EN 根 v0→v1 重写（meta/hero 新文案 + packages features 重排 6/7/7：launch guide 定位 pkg0.f4、CE 行殿后、pkg1 staff-training online=f5），19 locale 仍持 pre-repo v0——17 个 old-EN 键 + 5 个未翻译 EN 名（3 pkg name + 2 training name）跨 locale 统一同构；fr 整体已译仅 hero.subtitle 一行漏网；19 locale 无 meta.keywords（fr 有 4 个 = 唯一 shape 差异）。② **双块 op 范式**：每 locale 2 op——op1 = 文件头（pos 0，文件以 `meta:` 开头，**不是** `\nmeta:\n` 标记）至 `\nbenefits:\n` 前（meta+hero）；op2 = `\npackages:\n` 至 `\nfeatures:\n` 前（packages+training）。rep 沿 48 prettier 终态提取范式并升级：模拟双 op 合并应用 → format 全文件 → 从终态切 rep1/rep2 → 断言 engine(find1→rep1, find2→rep2) 与 prettier 终态**字节级相等**、benefits/tail 区段零改动、rep 唯一性。③ **复用映射**：launchGuide = pkg0.f3|f4（launchGuideFrom {fi:3, nl:3, th:3} 默认 f4——de f4 "Startanleitung" 优于 f3 "Launch-Anleitung"）；CE 行 = pkg0.f5===pkg1.f6===pkg2.f6（三处相等断言）；p1f4←pkg1.f3、p1f5←pkg1.f5；p2f0 12 locale 复用磁盘值、7 locale 丢 "+" 需重写（p2f0Old 锚定磁盘旧值防状态漂移）；p2f3/f4/f5 原位；training features 5/6、titles/subtitles、cta_text×3、hero.image.src/alt 全复用。EN 对照值从 EN 根 yaml 读取（SSOT），fresh 与 reused 均断言 !==EN、image.src ===EN。④ **链条安全判定修正（本 shard 关键教训）**：naive 扫描"旧分片是否触本文件族"误报——23/27/28/32/35/47 有 44 个行级 op 在本文件族（" + " 恢复、más de 50 países 等）但全部 already-applied。正确判定按引擎幂等语义：旧 op 的 find 在当前磁盘 count==0（已应用）**且**在新终态 count==0（不复活）→ 安全；**"旧分片触同文件"不是冲突，"新 rep 复活旧 find"才是**（L22② 的判定粒度精确到 find 串而非文件名）。⑤ **数据文件分片写入（L11 再证实）**：_b49-data.cjs（~32KB/600 行）单次 write 调用 JSON 解析失败 "Unterminated string" → 3 个 part 文件 + node concat；smoke 断言 19 locale 键集 + 惯例字符（sv=en dash、ko/th=em dash、ja=U+2015、fr 仅 U+2019——fr 新串初稿误用 ASCII 撇号，生成器断言拦截后修正；sv/ko/th 的 dash 初稿错配由 smoke 拦截）。⑥ **dist walk 假阳性两族**：短负签名命中长合法串子串（"Full accessory set" ⊂ "Full accessory set (paddles, vests, pumps)"）；13 个 EN-fallback locale（bg/et/he/hr/hu/id/lt/lv/ms/sk/sl/sr/tl 无自有 yaml）渲染新 EN 根内容——对照 `<title>` 确认是新版 EN 即为合法回退非残留（L24⑤ 同族）。⑦ **新挂账**：cta.actions[0].text "Club Fleet" EN 残留 ×8 locale（it/nl/da/fi/cs/el/ja/th，其余 cta_text 均已译）；挂账⑧ 剩余 resorts-hotels 21 键、retail-partners 5 键、brand-marine-expertise、about.brand_hub_subtitle、挂账⑨ contact 页。⑧ 数字：39 op = 19 locale × 2 块 op + 1 fr 行 op（数据表 _b49-data.cjs：19 locale × 23 新串 + 7 p2f0Old + frSubtitle/frOldSubtitle + launchGuideFrom；生成器 _gen-ops-49.cjs 含 44 旧 op 双向链检）/49 分片共 2605 op 全幂等（dry 39/2566/0 → patch 20 文件 → prettier --check 0 重排 → 复 dry 0/2605/0）；check 0 issue/19 既有 warn；build 13,858 页；dist walk 20 页正负签名全过 + 13,858 页全扫 v0 特征串 0 真命中。

#### L40. 分片 50：solutions-resorts-hotels 跨 locale EN 漂移重译、三块 op 范式、链条安全引擎三分类镜像、前缀型 op 判定修正（2026-09）

① **漂移形态（L37② 挂账⑧ 第三项兑现）**：EN 根 v0→v1 重写（hero 新文案“Turn Your Waterfront Into a Revenue Centre” + packages features 重排 6/7/8 + cta 措辞），19 locale 持 v0 旧 EN 21 键 + 3 个未译 EN 包名（Starter/Premium/Flagship Package）+ de hero.tagline 残留 ‘Resorts & Hotels’→‘Resorts und Hotels’；fr 全部 v1 已译不在范围；v0 旧 EN 常量 19 locale 完全 uniform（生成器 V0 断言）。23 fresh 串/locale（数据表 _b50-data.cjs，32KB 仍需 4 part 分片写入+concat，L39⑤ 再证实）。② **三块 op 范式（L39② 双块推广）**：每 locale 3 op——op1 hero 块（‘\nhero:\n’..‘\nroi_section:\n’ 前）、op2 packages 块（‘\npackages:\n’..‘\ncase_study:\n’ 前）、op3 cta 块（‘\ncta:\n’..EOF）；meta/roi_section/case_study/features 完全不动 + 三段 untouched region 字节级断言；rep 沿 48/49 prettier 终态提取范式。③ **v1 features 移位映射**：pkg1 staff-training online 从磁盘 f6 移位到新位 f5（f5←disk f6），fresh 与 reuse 均 !==EN 断言，imgSrc/href/variant ===EN；ja 惯例经 49 磁盘实测内化：fresh 串半角括号+ASCII ‘+’ 无空格、句尾全角 ‘？’、U+2015/U+301C，复用串可保留全角。④ **链条安全判定改用引擎三分类镜像（本 shard 关键教训，修正 L39④ 的 find==0 口径）**：shard 39 的前缀型 op（rep=find+‘+’，find 是合法串仍残留磁盘）find count>0——“旧 find==0”判据在此类 op 上必然误报。正解 = engineClass() 镜像引擎三分类（_patch-warnings.cjs L71-78）：fc=0&&rc>=n → already；fc=n&&rc>=n&&rep⊃find → already；fc=n → apply；其余 err；且 raw 与 prettier 终态两个方向都必须 already。空 rep op（shard 32 软连字符）rc=全文长度同判 already；fc=0&&rc=0（前序 rep 被删）→ 引擎 ERR——前序 op 的 rep 必须在新终态存活（resorts 族 56 前序 op 实测全在 untouched 区或复用行上，自动满足）。**链条安全判定唯一权威口径 = 引擎三分类，find==0 只是 fc=0 特例。** ⑤ **dist walk 路径与假阳性**：本族页面路径为 ‘dist/<loc>/solutions/resorts-hotels/index.html’（solutions/ 目录段，勿按文件名直拼）；de 负签名 ‘Resorts & Hotels’ 命中 2 处实为 UI 字典 nav/footer 链接标签（‘Für Resorts & Hotels’，da/nl/ro/de UI 字典残留既有挂账），hero tagline 元素独立 scope 锚验证干净——**负签名命中必须定位元素上下文（hero/meta/nav）再定性，同串可同时存在于页面数据与 UI 字典两层**。⑥ 数字：57 op = 19 locale × 3 块 op（生成器 _gen-ops-50.cjs 含 56 前序 op 三分类链检）/50 分片共 2662 op 全幂等（dry 57/2605/0 → patch 19 文件 → git diff +457/−457 平衡 → 复 dry 0/2662/0）；check 0 issue/19 既有 warn；build 13,858 页；dist walk 19 locale 页 22 负签名 0 真命中 + 正签名（heroTitle/p0Name/p1f6/ctaTitle）全落地 + en v1 根/fr 未动对照全过。

#### L41. 分片 51：挂账⑧ 收尾四项（retail/bme/about-hub/paddle-clubs）行级 op 范式、chainCheck 生成器内置、smoke 正则转义与 BOM 陷阱（2026-09）

① **漂移形态（L37② 挂账⑧ 第四/五/六项 + L39⑦ club fleet 一次收尾，挂账⑧ 至此全部清偿）**：A `solutions-retail-partners` 5 键 ×19 locale 持 v0 旧 EN；B `brand-marine-expertise` EN 根重写为 BME 定位（19 locale 持 v0，cs/sv dash 首版误用 em dash 被 smoke 拦截后改 en dash）；C `about` brand_hub_subtitle（hub）13 locale fresh 全译 + 6 locale（de/es/it/nl/pl/pt）仅 marine 术语→SUP 词组替换（hubOld 6 swap 断言，13 locale 旧 EN “marine engineering expertise” 为负签名）；D `solutions-paddle-clubs` club fleet（L39⑦ 8 locale it/nl/da/fi/cs/el/ja/th 全译）+ fi 误译 “seurakunnan ohje”（seurakunta=教会）→“kerhon opas”（fiGuide）。142 op = retail 95（5×19）+ bme 19 + hub 19（13 fresh + 6 swap）+ club 8 + fiGuide 1；数据表 `_b51-data.cjs` 七族（retail/bme/hub/hubOld/club/clubOld/fiGuide）；smoke（键集/dash/% 惯例/ja 全角？/fr 仅 U+2019/hub swap 无 marine 词/club 无 ASCII 'Club Fleet'/fresh!==EN）全过。② **行级 op 范式（48/49/50 整块 op 的轻量对偶）**：残留为离散行且无块重排 → find=旧值完整行（含 `\n`）+ 文件内 count==1 断言，rep=prettier 终态行，不做 head/tail 块切分；块结构漂移（如 48 fields）仍须整块 op。③ **chainCheck 内置生成器（`_gen-ops-51.cjs`，L40④ 三分类口径工具化）**：engineClass 镜像引擎三分类（_patch-warnings.cjs L71-78），101 个前序 op 在 raw 与 prettier 终态两个方向均 already；engine mirror 逐文件 === prettier 终态、terminal doc 深等 expected、exists-guard + pre-patch 值断言防状态漂移误 patch。④ **工具链新陷阱**：smoke 正则字面量含 curly-quote/非 ASCII 被 write 工具写坏 → 正则一律 `\uXXXX` 转义；PowerShell `[System.IO.File]::WriteAllText` UTF8 必写 BOM → concat 侧 strip `/^\uFEFF/`；prettier 必须在 repo workdir 运行（temp cwd 报 Cannot find package 'prettier-plugin-astro'）。⑤ **翻译判定**：tr heroTitle “satın” 歧义辨析（sat-ın 祈使 “卖” vs satın al- “购买”——零售商进货语境取祈使 “İşe yarayan marjlarla<br />premium şişme SUP'ler satın”）；新内容 dash/% 惯例按 49/50 实测全量应用（cs/sv `–`、ja `―`、tr `%` 前缀、no/sv/de/da/fi/cs `%` 前空格）。⑥ **数字**：dry 142/2662/0 → patch 65 文件 git diff +142/−142 完全平衡 → 复 dry **0/2804/0**（01..51 全幂等）；check 0 issue/19 既有 warn；build 13,858 页（public/llms-full.txt checkout 恢复）；dist walk（`_s51-distwalk.cjs`）四族页（solutions/retail-partners、brand-marine-expertise、about、solutions/paddle-clubs）×19 locale 共 246 检查 0 负命中 0 正缺失（负签名含 v0 四串 + bme v0 尾 + hubOld 13+6 swap 词 + clubOld 全串 + fi 旧译，正签名含 heroSubtitle/ctaTitle/heroTitle/bme/hub/club 终值）。⑦ **新挂账（shard 52+）**：it bme items[2] EN 残留 “Deep-V fiberglass hulls for RIBs...”（51 侦察发现未入范围）；contact 页跨 locale 漂移（L38⑤ 挂账⑨）；da/nl/ro/de UI 字典残留（L40⑤）；fi 误译族排查。

#### L42. 分片 52：挂账⑨ contact 表单 20 locale 结构损坏整块重写、块+行混合 op、prettier 引号保留实证、fr 按位映射（2026-09）

① **损坏形态（挂账⑨ 兑现）**：20 locale contact.yaml `contact_form.fields` 13 字段块在翻译 commit db928cfa 被错误骨架重组——firstName/lastName/companyName/address 四字段被错抹三个 select options 组（optionsKey 'countries' 落到 firstName 且值被翻译）、orderVolume 得 type:select+withCountryCode、customization/productInterest 丢 type+options、tel 丢 withCountryCode、email 丢 type:email、rows 1-10 错乱、机器 option value 被翻译（de 'Beispiel'/'Was geht?'、pl 'siema'、es '¿qué tal?' 等）；fr 更将字段 name 译出（pays/adresse/code postal）+ type 值（'sélectionner'）→ FormData 键损坏。运行时缺陷实锤：Contact.astro L88 仅认 `optionsKey === 'countries'` → 19/20 locale 国别下拉渲染为空。v0 考古（db928cfa，文件 UTF-16LE）：EN 根当时已是现行结构，损坏为翻译链自身引入、非旧 EN 持有。② **块+行混合 op 范式（48 整块与 51 行级的合体）**：每 locale 1 个整块 op（find=`\n  fields:\n`..`\nfeatures2_other_ways:\n` 前磁盘文本）+ 按需行 op——13 fresh submit_button（丢 "→ Get a Quote" 尾）、7 电话 '+86' 前缀恢复、3 fresh hero title（ja/ko/th title==tagline 重复）、2 ja 地址简体字修复（青岛市→青島市、莱西→萊西，hq desc+map.address 两行）；共 45 op。13 字段 label + 3×5 option label 全部复用磁盘译文（19 locale 按规范字段名提取、**fr 因字段名被译改按数组位置映射**；fr 'Message' 与 EN 同形为正确法语保留）+ 19 处 option label 质量修复（7 locale OPT0[4] 丢 '+'、es/no/ru OPT0[2] MOQ 意译复原、fi tilavuus→tilausmäärä/kappaleta→kappaletta/aomat→melat、el Πολωτά→'Σανίδες SUP / Paddleboards'、it/nl/pl OPT1[4] 语法修复、sv logotype→logotyp、de en→em dash）。③ **prettier 引号保留特性（本 shard 关键实证）**：ja 磁盘电话行 `+86 13305324192` 无引号、EN 根 `'+86 13305324192'` 单引号，两者均 prettier-clean → **prettier-yaml 保留作者引号选择而非强制归一**，sim 中发出什么形式终态就是什么形式（phone rep 统一取 EN 根引号形式）；option value 引号按 EN 根形态手发（`''`/`'5-10'`/`'100-500'`/`'500-plus'` 引、枚举词 plain）。④ **链检与验证**：engineClass 三分类镜像，shard 14（el/ro/th 地址+description、de dcc）+ shard 34（dcc ×5、afar→afarer）共 25 个前序 contact op raw/pretty 双向 already；生成器断言 engine 重放===prettier 终态（20/20 字节级）+ 终态 doc 深等 expected（结构同构 EN 根、optionsKey==='countries'、机器值 canonical）+ untouched 区段（meta / hero（除 3 title）/ contact_form 余键 / features2（除 phone、ja desc）/ map（除 ja address））深等；额外断言 rep 不含品牌 'afar'（防复活 shard 34 find）。⑤ **数字与教训**：dry 45/2804/0 → patch 20 文件 git diff +886/−886 平衡 → 复 dry **0/2849/0**（01..52 全幂等）；check 0 issue/19 既有 warn；build 13,858 页（13,857 index.html + 404.html，llms-full.txt checkout 恢复）；dist walk（`_s52-distwalk.cjs`）**35 contact 页**（20 locale + en + 14 EN-fallback）全过：负签名（30+ 翻译后机器 value、fr 译名字段、'sélectionner'、ja 简体字）0 命中、正签名（13 canonical name、12 canonical value、+86、→、国别下拉 ≥10 option、ja 繁体地址）全落地。dist walk 正则窗口须 ≥ 国家列表长度（200 国 × ~50 字符，初版 4000 窗口致 35 页假阳性全 fail）。

#### L43. 分片 53：ja/ko 404 字典 EN 残留、en/ko 404.explore 损坏、it/fr bme 残留清偿、UI 字典 dist 验证面（2026-09）

① **定界 9 op / 22 键**：A ja/ko 404 字典块各 7 键纯 EN（title/description/label/heading/home/products/news；其余 18 locale 全已译）+ ko 404.explore 乱码 "제품 칼테고리 사운탑바로운:"；B **en 404.explore = 德语 "Produktkategorien erkunden:"**（与 de 同值——dist/404.html 是 EN 根单文件渲染，en 块损坏直接进 dist，实测命中）；C it bme 3 处旧版 EN 描述（L29/L47/L53，含 RIBs/patrol boats/SUP tubes/SUP model 等现 EN 根没有的词——L33 stale-EN 类）+ 2 误译标题（L43 "punto basso"、L52 "Analisi dell'acqua"）；D fr bme L29 半译（第二句整句 EN）。② **op 结构**：en explore 2 行锚（"Read the news"+explore 行——ja/ko explore 行与 en 不同故 en 不能整块 8 行）；ja 块 8 行 find（explore 行已译原样携带保唯一性）；ko 块 8 行（explore 换新）；it bme 5 行 op + fr bme 1 行 op；find 一律磁盘切片提取（404 块按 locale 块边界 `\n  "xx": {` 定位，yaml 按唯一前缀），残译预存在断言按**完整 JSON 行**（短值如 "エラー" 在其他键下合法存在）。③ **术语 grounding 与 dash 分层**：ja 404.products="製品を見る" 等按 nav.products=製品/nav.news=ニュース/nav.home=ホーム；ja 404.title 用 `— {name}`（与全 20 locale 一致）；**UI 字典（i18n-config.json）内 ja 亦用 `—` 带空格**（dict 全文 U+2015=0、ja 块 U+2014×54）——与页面 yaml 层 ja `―` 惯例分层不互改；it 重译按现 EN 根语义（L47 "Tubes"→"I tubolari"、"Every model"→"Ogni modello"、小数 "1,5 volte"）；L43 标题保留技术术语 "Assemblaggio del nucleo Drop Stitch"（sibling nl/tr/pl/th 同样保留）；L52→"Prove in acqua"。④ **UI 字典 dist 验证面（本 shard 关键教训）**：`src/pages/404.astro` 是 EN 根单文件渲染 → ja/ko 字典 404 值**没有 per-locale dist 签名**（全 dist 搜 "404.title" 键 0 命中）；字典层的权威验证面 = `src/i18n/generated/` 构建产物——`generated/i18n-config.json` 与源 404 键值 src===generated 全等 + `generated/ui/{en,ja,ko}.ts` 携带全部 8 键值 + 垃圾串（Produktkategorien/사운탑바로운）0 命中。**UI 字典键的 dist walk 必须先确认渲染路径：单文件/客户端键无 dist 签名，改验 generated 产物。** ⑤ **数字**：dry 9/2849/0 → patch 3 文件 → 复 dry **0/2858/0**（01..53 全幂等，prettier 重排 3 个新 TOOLS 文件后再 dry 仍 0/2858/0）；check 全绿（astro 0 err 0 warn 172 hint / eslint / prettier / check:i18n 0 issue + 19 既有 warn）；build 13,858 页；dist walk：dist/404.html "Produktkategorien" 0 命中 + "Explore product categories:" 落地；it/fr bme 页负签名（RIBs/patrol boats/SUP tubes/Analisi dell'acqua/punto basso/Aluminum hulls 整句）0 + 正签名（Scafi Deep-V/Scafi in alluminio/Drop Stitch/1,5 volte/Prove in acqua/Ogni modello/Coques en aluminium）全落地。⑥ **新挂账（shard 54+）**：nav.\* UI 字典族残留——nav.factoryCapacity/QualityLab/OemCapability/supBasics/inflatableTech/brandMarineExpertise/cta.oem 等 ~15 键 × 全 20 locale（identical-to-EN 计数 46-87/语言，shard 41-46 未触及），体量 ~300 键，需 cognate 逐语言 triage（fr "Certifications"/nl "Contact"/da "Guides" 等同形词合法）。

---


#### L44. 分片 54：nav MID 13 行块 12 键 ×13 locale 全译、5 缺失键发现与全修、navTextMap 渲染路径与休眠键定性（2026-09）

① **定界 47 op / 287 行键变更**：A `nav.*` MID 13 行块中 12 键在 13 locale（ru/pl/ar/nl/sv/no/el/tr/fi/cs/da/ro/th）纯 EN（inflatableVsHardboard/supBasics/inflatableTech/safetyWaterSports/materialsRef/dropStitchCore/intermediateTechniques/supSizeGuide/qualityNav/brandMarineExpertise/brandGlobalPresence/brandTeam；**pvcVsHypalon 全 21 locale KEEP**——产品族名）；B **5 缺失键**（nav.brandWhyAfarer/inflatableSup/b2bSolutionsMatrix/solutionsResortsHotels/solutionsOemBrands）**21 locale 全 absent**——Header.astro:206-214 / Footer.astro navTextMap 的 t() 回退原始 EN label → 用户裁定全修（en SSOT + 19 locale 翻译）；C nav.resourcesJournal 10 EN 持有者（pt/es/it/pl/nl/sv/no/cs/da/ro → 各自 nav.journal 值：es=Revista、sv/no=Blogg、ro=Jurnal、其余 Blog；de KEEP）；D 零星 16（da guides 族 ×4→Guider、sv/da nav.designPowerhouse ×2→"Design & innovation"、pt/tr compare r8a/r8b ×4→"200-500 $"/"400-800 $" 后缀格式、pt rel2label ×2→"Embarcações de Trabalho"（Title Case，pt solutionsByUseCase 先例）、ru techspecs.materialDropstitch→"Сердечник Drop-Stitch"、de academy.guides→Ratgeber、**es geo.total 损坏值 "{count} socios en {countries} países"→"Total"**、**ar product.catalog "الك catalogue"→"الكتالوج"**（ar downloadCatalog 先例））。② **op 结构**：13 segment op（MID 12 键译 + pvcVsHypalon 原样交错 + rep 尾部 append 5 新键行 after brandTeam）+ 8 insertion（en/de/pt/fr/es/it/ja/ko；find=brandTeam+buyerCenter 行对）+ 10 RJ + 16 scattered。**生成器必须顺序 sim 构建**：en "Our Team" 14 处，13 个 segment op 应用后才唯一（insertion find 依赖前序 op 消歧）；行值跨块重复（da "Guides" 在 en/fr 亦存）→ uniqueWindow 锚扩展（sv/no 需 2 行锚，其余 1 行）；prettier 终态断言 + 引擎回放字节级 === sim。③ **grounding**：brandWhyAfarer ← brand-why-afarer.yaml 页题前缀（ru/cs 用主格 "Почему Afarer"/"Proč Afarer"，按 oem.why.title 大小写惯例）；inflatableSup ← compare.inflatableVsHard.isupShort 逐字；b2bSolutionsMatrix ← b2b-solutions-matrix.yaml 页题去 "Client(s)"；solutionsResortsHotels ← nav.solutionsResorts 去 "For"；solutionsOemBrands ← nav.oemPaddle 括号段（it/da 保 "Private Label" 借词）；r8a/r8b 按 16/20 locale 后缀格式姊妹先例（ru r8a/r8b="-" 非 EN 不管）；pt rel2label 按块内 Title Case 先例精化。④ **navTextMap 渲染路径与休眠键定性（本 shard 关键教训，L43④ 的对偶）**：navTextMap 的 label→key 映射**只在 nav 结构持该 EN label 时触发**——实际 nav 标签来自已本地化的 navigation yaml（pt footer "Para resorts & hotéis" ≠ map 键 'Resorts & Hotels'）→ 多数字典键休眠：b2bSolutionsMatrix/solutionsOemBrands（全 dist 无 EN label 渲染）、solutionsResortsHotels（多数 locale）、resourcesJournal（**无任何代码消费点**，grep 21 命中全在 i18n-config.json 数据内）、no/da supBasics（sup-basics 页在 no/da 是 nav 孤儿，仅语言切换器链入）。**正签名命中 ≠ 字典消费**：首页 body 卡片 h3 是页面层数据（pt "Resorts e Hotéis" ≠ 字典值 "Resorts & hotéis"；ru "Курорты и отели" 命中纯页题巧合）。权威验证面两层：字典层（引擎复 dry + NEW5_V/MID_T/RJ/SCATTERED 值匹配 + generated 语义等同 + ui/*.ts 携带）+ 渲染层（**header/footer 区域**才是 navTextMap 消费面：21 locale × 5 采样页 × 17 EN 标签 0 命中）。⑤ **body 层 EN 为页面层既有残留，非本 shard 范围**（挂账⑩）：34 页 b2b-solutions-matrix H1 "B2B Solutions Matrix"、14 页 request-quotation 相关卡 "OEM / Private Label"、13 locale subtree 内 H1/相关卡/面包屑 EN（"Inflatable Technology"/"Drop-Stitch Core"/"Marine Expertise" 等 ×10/locale）、da 3 处 hero.tagline fallback ">Guides<"（guides/index.astro L69 `{hero.tagline || 'Guides'}`）、sv/da design-powerhouse 面包屑 designPowerhouse.nav（≠ nav.designPowerhouse，后者已在 solutions/by-use-case、people、engineering-perfection 页落地）。dist 另含 **14 个额外 locale 目录**（bg/et/he/hr/hu/id/lt/lv/ms/sk/sl/sr/tl）不在 21-locale 字典系统（页面层 EN 既有）。**de "Resorts & Hotels" / it,da "OEM / Private Label" 为合法同源/借词**（值=EN 非残留，校验器须白名单）。⑥ **数字**：dry 47/2858/0 → patch 1 文件 → 复 dry **0/2905/0**（01..54 全幂等，prettier 重排 3 个新 TOOLS 文件后再 dry 仍 0/2905/0）；check 四绿（astro 0 err/0 warn/173 hint、eslint、prettier、check:i18n 0 issue + 19 既有 warn）；build 13,858 页；closure 全绿 + 渲染落地验证：pt/tr compare "200-500 $"/"400-800 $" + 旧 $ 前缀 0、pt rel2label ×2 + EN Workboats 0、ru tech-specs "Сердечник Drop-Stitch"、de academy Ratgeber、es geo-report "Total"、ar "الكتالوج" ≥3 页、da Guider + nav 层 Guides 0、sv/da "Design & innovation" ×3 页；全局损坏串（الك catalogue/{count} socios en）0；数据表 `_b54-data.cjs` + 生成器 `_gen-ops-54.cjs` + op 集 `_ops-data-54.cjs`。

#### L45. 分片 55：page 层面包屑/徽章/表头 t() 全量接线、coreNeed 新键、breadcrumb.home ×16 根因修复、design-powerhouse _() fallback 复活、PageLayout Home 重映射机制发现（2026-09）

① **定界与接线（方案 A：层1 面包屑全量 + 层2 徽章/表头 + 层7 guides tagline）**：49 文件 57 edits（`TOOLS/i18n-merge/crumb-wiring/_wire-crumbs-55.cjs`，--dry/--patch，幂等，post-patch re-dry 0/57/0）+ 45 处 `const t = (key) => getUiForLang(lang)?.[key] || ''` helper 插入（锚 `import { languages }` 或 `const { lang }` 行；contact/news-index 例外用 `const lang = Astro.params.lang || 'en'` + fr 行锚）；quality/contact 本地已有 `t` 符号 → helper 命名 `tnav`（quality 的 t 是 {SITE} 模板替换器、contact 的 t 是 record 查找器）；b2b 表头两条长 th 行被 prettier 拆成 `>` 独立行格式 → 脚本 rep 同步规范形。**EN 微变接受清单**（先例 "Terms and Conditions"→"Terms"）：nav.knowledge="Knowledge Base"、nav.afarerStory="afarer Story" 小写、nav.terms="Terms"、nav.randd="R&D Center"、nav.factory="Factory"、nav.designPowerhouse="Design & Innovation"、nav.solutions{Distributors,RentalOperators,RetailPartners} 带 "For " 前缀；'Team'→home.resources.team、'Request a Quote'→cta.requestQuote、'Solution'→home.useCases.solution 复用既有键；ep 徽章四键 Quality→nav.qualityNav、R&D→nav.randd、Facility→nav.factory、Design→nav.designPowerhouse；guides/index tagline `hero.tagline || t('guides.pageLabel') || 'Guides'`。

② **字典侧 37 op（引擎终态 01..55 = 2942 op 全幂等）**：A b2bSolutionsMatrix.coreNeed 新键 ×21 插入（锚 = b2bSolutionsMatrix.metaDesc 行——nav.b2bSolutionsMatrix 邻行落在 shard 54 rep 串内会破坏其幂等；metaDesc ×21 全异值且跨 shard 引用扫描零命中）；B breadcrumb.home ×16 行替换（EN "Home"→各 locale nav.home 值；it/nl "Home" 同源词 KEEP、de/fr 已译、en 源不动；find 上下文 = 后随 language.choose 行——×21 全异值，前锚 breadcrumb.label 在 ro/en/it/nl 同为 EN "Breadcrumb" 逐字节撞车 find ×4）。生成器跨 shard 安全断言扩至 breadcrumb.home/label 引用。

③ **PageLayout Home 重映射机制（本 shard 最大发现）**：`PageLayout.astro:25-26` 把一切字面量 `'Home'` crumb 重映射到 `breadcrumb.home`——该键在 16 locale 持 EN 是全站可见 EN Home 残留的**单一根因**（learn/index、learn/[slug] 直接 `t('breadcrumb.home') || 'Home'`；academy 等未接线页经重映射落同键）。dist walk 首轮 266 处 `>Home<` 残留三层定性：18-locale 集群（academy/learn，真残留→字典修复）、2-locale 全站（it/nl 同源词合法）、1-locale（nl/it + 额外 13 locale bg/et/he/hr/hu/id/lt/lv/ms/sk/sl/sr/tl 系统性挂账）。修后 7846 非 en HTML `>Home<` 与 JSON-LD `"name":"Home"` 双零（it/nl 除外）。

④ **design-powerhouse _() 既有 bug（fallback 全灭）**：`_()` 判定 `v === key` 永假（t() miss 返回 '' 而非 key）且 designPowerhouse.\* 键在字典 21 locale 全不存在 → 标题/统计/能力卡/crumb 全渲染空串（`<title> | Afarer</title>`，HEAD 既有）。修复 `return v || fallback`（EN fallback 优于空串，guides 数据层先例）；crumb `_('designPowerhouse.nav', t('nav.designPowerhouse'))` 由此激活 → 21 locale 本地化 + EN fallback 全量复活。`=== key ? fallback` 模式全站扫描仅此一文件。

⑤ **挂账**：额外 13 locale（bg/et/he/hr/hu/id/lt/lv/ms/sk/sl/sr/tl）系统性 EN；guides 数据仅 fr/de（da tagline 仍 EN "Guides"）；marine-industry/whitepaper 页名 fr() 无键（仅接 Home/Resources）；learn hub 页名层（hero.title 'Learn'）；metadata.title 家族；yaml features 层；ro/it/nl breadcrumb.label "Breadcrumb" 借词定性；news/page "Page N"。

⑥ **工具与陷阱**：新工具族 `crumb-wiring/` 登记 tool_instrction.md；dist walk 探针 `_s55-distwalk.cjs` 37 检查（21 locale 采样面包屑/徽章/表头/learn/academy/design-powerhouse + 全局 `>Home<`/JSON-LD 扫描）；**`[lang]` 通配符陷阱**——`[...]` 是字符类，Select-String -Path 与 glob pattern 均会把 `[lang]` 目录当通配符吞掉（必须 -LiteralPath 或递归枚举），侦察漏掉 academy/index.astro 即由此起；**dist walk needle 陷阱**——`&` 在 HTML 渲染为 `&amp;`（"Центр R&D"/"Design & innovation" needle 必须用转义形），且 needle 预期值必须以字典为准勿凭记忆（"Мировое присутствие" vs 实际 "Глобальное присутствие" 假阴性）。四件套 + build 13858 页全绿。

#### L46. 分片 56：fr() 落地页 EN 键映射基建（方案 C）+ ultra-stable-sup 试点全链、JsonLd data-prop 既有 bug 发现（2026-09）

① **形态普查与方案裁定**：15 个 `[lang]` 落地页 `fr(en, francais)` helper 在 19 个非 en/fr locale 全渲染 EN。903 调用普查 → 97.6% 纯字符串、4 templ（全是 `` `X — ${SITE.name}` `` 标题后缀形态，privacy/terms/whitepaper/disclaimer 四页）、4 数组（frArr，ultra-stable-sup 3 + marine-industry 1）。用户裁定 **C 方案（EN 键映射表）**：fr() 调用点零改动，每页只改 helper 一行 + 加 import；EN 串为表键，fr fallback 保留代码第二参，en/fr 不进表。

② **基建三件套 + 生成器**（`TOOLS/i18n-merge/landing-i18n/`）：A `_extract-landing.cjs` 扫描 15 页 → `_landing-manifest.json`（903 调用 → 841 唯一 EN 键；per page：marine-industry 116、kids-sup 65、yoga-sup 65、privacy 65、all-around-sup 63、fishing-sup 62、whitewater-sup 61、touring-sup 54、terms 55、whitepaper 52、sup-accessories 49、inflatable-sup 48、ultra-stable-sup 41、disclaimer 39、afarer-story 6）；B `scripts/_gen-landing-i18n.cjs` 把 `src/data/landing-i18n/<pageKey>.json` 生成 `src/i18n/generated/landing/<name>.ts`（`export const landingI18n: Record<string, Record<string,string>>`；19 locale 白名单/值类型校验），挂进 package.json `build`/`generate` 链（_gen-uiall 之后）+ actions.yaml legacy 链（CI deploy.yml/ci.yml 走 `npm run build` 自动含）；C `_wire-landing-helpers.cjs` 数据驱动接线器（仅当数据 json 存在才补丁，--dry/--patch 幂等，标记 `__landing`；frArr 改写 `(lang === 'fr' ? francais : en.map((s) => __lt[s] || s))`；4 templ 前缀化 `` fr(`X — ${SITE.name}`,...) `` → `` ${fr('X —',...)} ${SITE.name} ``）；D `_check-landing.cjs` manifest vs data 完整性校验（19 locale × 全键覆盖，missing exit 1）。pageKey 规则：`marine-industry/index.astro`→`marine-industry`、`whitepaper/oem-sup-manufacturing-guide.astro`→`whitepaper-oem-sup-manufacturing-guide`（去 .astro、/index、/ → -）。

③ **试点页 ultra-stable-sup 全链走通**：41 键 × 19 locale 数据文件（152KB，分 5 part 写 + node merge 键集跨 locale 全等校验）；接线 = L8 import `landingI18n as __landing` + L15-16 `const __lt = __landing[lang || ''] || {}` 与 `fr = (en, francais) => __lt[en] || (lang === 'fr' ? francais : en)`；翻译口径：单位本地化 FR 参考值英寸→cm（34"→86 cm 等）19 locale 跟随、"Home" 键 = 各 locale breadcrumb.home 值（shard 55 机制衔接）、dash 按各 locale 惯例。回归：astro check 0 err、prettier/eslint 绿、check:i18n 19 既有 warn 不变、build 13,858 页、dist walk 21/21 PASS（19 locale h1 本地化 + EN needle 零残留 + fr fallback + en 原样；h1 marker 程序化取自数据文件，EN needle 避免 `&`——dist 为 `&amp;`）。

④ **JsonLd data-prop 既有 bug（~~新挂账~~已修，见 L61/分片 71）**：fr() 页 JsonLd 调用传 `data={{...}}` prop，但组件（`src/components/common/JsonLd.astro`）只认 `type` + 结构化 props（article/breadcrumb）→ data 被完全忽略，页面 Article/BreadcrumbList JSON-LD **从未渲染**（en/de 同样）→ manifest key #3（Article headline）为死调用，翻译入表但不出现在 dist。**2026-10 已修**：组件 9 类型分支全部支持 data 后备（126 处死调用一次性复活），扫描/回归工具归档 `TOOLS/verify/scan-jsonld-dead.cjs` + `verify-jsonld.cjs`。

⑤ **后续 shard 流程**：每 shard 1-2 页 = 翻译数据（分 part 写）→ `_wire-landing-helpers.cjs --patch` → 4 个 templ 页接线后**必须重跑 `_extract-landing.cjs`**（EN 键变前缀形如 "Privacy Policy —"）→ `_check-landing.cjs` → build → dist walk；推荐顺序按页大小（marine-industry 116 键含 frArr 下一站）。引擎终态：warning-cleanup dry 0/2942/0、crumb dry 0/57/0、landing wire dry = 0 applied/1 already/14 pending/0 errors。

#### L47. 分片 57：marine-industry 全链（116 键 × 19 locale）+ 锚点 id/标签解耦修复、nav chip 验证面、EN dist 路径（2026-09）

① **数据与合并**：19 个单 locale part 文件（`_mi-<loc>.json`，各 15-18KB 单写无 32KB 陷阱）→ `_merge-marine-industry.cjs`（TOOLS/i18n-merge/landing-i18n/ 归档）合并校验（locale 集 + 116 键跨 locale 全等 + === manifest + 无空值）→ `marine-industry.json` 329,147 bytes，prettier 天然合规（键排序/宽度）unchanged；`_gen-landing-i18n.cjs` 输出 2 模块。

② **接线前置锚点 bug 修复（手工，未碰接线器匹配行）**：nav chips 原以本地化标签字符串做 `` `#${label.toLowerCase().replace(...)}` `` 生成 href，但 section id 是硬编码英文（types/construction/materials/selection/safety/maintenance/applications）→ 非 en 页全部断锚，**fr 现网亦然**（#matériaux vs id="materials"）。修复 = frontmatter 加 `SECTION_IDS` 常量 + chips map 改 `(section, i)` 用 `#${SECTION_IDS[i]}`——**锚点 id 与标签解耦**（与 fr()/__() 翻译机制同构）。dist 验证面：7 个英文 id 的 `id="x"` + `href="#x"` × 21 locale 全在。

③ **翻译口径**："Learning Center" 按 locale 自然译；"View Products" 复数形；"Required (EU)" 括注按 locale（UE/EU/ЕС/ΕΕ/AB）；"NEVER" 大写强调（NUNCA/MAI/НИКОГДА/ALDRIG/ALDRI/NIKDY/ASLA/EI KOSKAAN/OVERSCHRIJD NOOIT/NIGDY/أبدًا/ห้ามเด็ดขาด）；sv/da/no 用 HF-svetsning/sveising 替代 RF 缩写；价格/dash/千分位按既有先例（ko `200~400달러`、ja `200～400ドル`；技术范围 15-25 PSI 等保持 EN 连字符）。

④ **回归数字**：wire dry 1/1/13/0 → patch applied 1 → 复 dry **0 applied/2 already/13 pending/0 errors**；extract 重跑（903 调用/841 键不变，marine-industry 116）；checker `pages checked: 2, missing: 0, stale: 0 PASS`；astro check 0 err 0 warn 175 hint / eslint / prettier 绿 / check:i18n 0 issue 19 既有 warn；build 13,858 页；dist walk（`_mi-walk.cjs` 改造自 _uss-walk）21/21 PASS——**注意 EN 页在 `dist/en/marine-industry/`（根路径是 redirect 页，无 h1 签名）**；nav chip 检查须容忍标签前后空白（`> Typen </a>`，用 includes 不用 `>x<` 锚定）。

---

#### L48. 分片 58：kids-sup + yoga-sup 双页全链（各 65 键 × 19 locale）、h1 短键陷阱、extract 输出 prettier 化（2026-09）

① **数据与合并**：两页各 19 个单 locale part 文件（`_ks-<loc>.json`/`_ys-<loc>.json`）→ `_merge-kids-sup.cjs`/`_merge-yoga-sup.cjs`（同构改造自 marine 合并器：换 PAGE/EXPECTED_KEYS=65/part 前缀/OUT；kids 版含边缘空格键专项断言——"Check our " 尾空格 + " for kid-friendly options." 头空格）→ `kids-sup.json` 219,507 bytes / `yoga-sup.json` 233,546 bytes，prettier 合规；`_gen-landing-i18n.cjs` 输出 4 模块。**共用键跨页一致**：Home/Inflatable SUP Boards/SUP Category/← SUP Product Center 复用 marine-industry 值；OEM 块（Custom/Units minimum order/30 Days/Typical lead time/Request OEM Quote/Contact Us）本 shard 新立、两页同值。

② **公制换算约定（本 shard 立，后续页沿用）**：范围连字符 `2,40-2,70 m`；小数逗号 = de/es/pt/it/nl/el/da/ro/tr/ru/pl/cs/fi/no/sv，小数点 = ar/ja/ko/th；换算表 8′–9′→2,40-2,70 m、9′–10′→2,70-3,00 m、26″–28″→66-71 cm、28″–30″→71-76 cm、33-36 inches→84-91 cm、10-11 feet→3,00-3,35 m、80 lbs→36 kg、12–15 lbs→5,5-7 kg；纯数字范围（"5–6 years"）保持 EN en dash。FAQ 近似键（#8 plain "33-36 inches" vs #53 templ "33″–36″"）是不同键、均照译。

③ **h1 短键陷阱（walk 假阳性全 42 FAIL 教训）**：两页 hero `<h1>` 是**独立短键**（"Kids SUP Board"/"SUP Yoga Board"，kids idx18/yoga idx5），不是 key#3 长标题（那是 hero 副文案区）；且短键是 FAQ 标题等长串的子串 → walk 须用 `<h1[^>]*>\s*值\s*</h1>` 标签内含断言（容忍 Astro 输出的标签内空白），不能裸 includes 断 EN 残留。`_ksys-walk.cjs` 双页 21/21 × 2 PASS。

④ **extract 输出 prettier 化**：`_extract-landing.cjs` L157 原以 1 空格缩进写 manifest（shard 57 在 prettier 门禁后重跑 extract 遗留），致 `prettier -c .` 在 HEAD 即 warn。修复 = 改 `JSON.stringify(manifest, null, 2) + '\n'` + prettier -w 既有 manifest（内容语义不变，checker PASS / 15 页 841 调用不变），后续 extract 重跑不再产生格式漂移。

⑤ **回归数字**：wire dry 2/2/11/0 → patch applied 2 → 复 dry **0/4/11/0**；checker `pages checked: 4, missing: 0, stale: 0 PASS`；astro check 0 err 0 warn 175 hint / eslint 绿 / prettier 全绿 / check:i18n 0 issue 19 既有 warn；build 13,858 页；llms-full.txt 构建漂移照例 `git checkout` 还原。待接线 11 页：privacy 65（templ，接线后须重跑 extract）、all-around-sup 63、fishing-sup 62、whitewater-sup 61 顺位。

#### L49. 分片 59：privacy 全链（65 键 × 19 locale，首个 templ 页）、templ 键映射排序、metaDesc 优先链（2026-10）

① **templ 页流程立序（解决循环依赖）**：privacy idx0 为 templ `` fr(`Privacy Policy — ${SITE.name}`, `…`) ``——wire 需数据文件存在、merger 校验需 manifest 键、而 manifest 键在接线后才变 post-wiring 形态。解法 = 数据文件直接用 post-wiring 键（`Privacy Policy —`，剥 ` ${SITE.name}` 后缀），merger 对 manifest templ 键做确定性映射（`shape==='templ' ? en.replace(/ \$\{SITE\.name\}$/, '') : en`）后与数据键集比对，顺序 = merge → wire --patch（applied 1）→ 重跑 extract（privacy templ → plain，manifest 剩 3 templ：terms/whitepaper/disclaimer）→ checker PASS。

② **数据**：19 part（`_pv-<loc>.json`）→ `_merge-privacy.cjs`（yoga 合并器 + templ 映射）→ `privacy.json` 204,193 bytes。标题键 = 译文前缀 + locale dash（de „…"、el/tr «…»、cs/ro „…"、sv ”…“ 引号惯例；cs/sv/da `–`、ja/ko `―` 带空格、其余 `—`），渲染 `${前缀} Afarer`；K31 尾随空格保留、K32 `afarer.com` 不变；地址 21 locale 全译（fi/cs/da contact 页 EN 残留挂账不影响 privacy 正常翻译）。

③ **walk 教训**：meta 描述实际取 ui `privacy.metaDesc` 优先于 fr() 后备——断言改"非 EN 残留"而非精确串；ja 页合法含汉字（日文汉字），CJK 残留检查须豁免 ja；语言切换器 endonym（日本語）是全站既有内容非中文残留，须白名单剥离后再查。

④ **回归数字**：wire dry 1/4/11/0 → patch applied 1 → 复 dry **0/5/10/0**；extract 903 调用/841 键不变（privacy 65 plain）；checker `pages checked: 5, missing: 0, stale: 0 PASS`；astro check 0 err / eslint 绿 / prettier 全绿 / check:i18n 0 issue 19 既有 warn；build 13,858 页；`_pv-walk.cjs` 21/21 PASS（title = 前缀 + "Afarer"、og:title、EN 锚点 id、Contact Us 译文 h2、EN 残留、CJK 白名单）。待接线 10 页：all-around-sup 63、fishing-sup 62、whitewater-sup 61、terms 55（templ）顺位。

#### L50. 分片 60：all-around-sup 全链（63 键 × 19 locale，plain 页）、walk `&#39;` 实体归一化（2026-10）

① **数据**：19 part（`_as-<loc>.json`）→ `_merge-all-around-sup.cjs`（plain 版，与 `_merge-kids-sup.cjs` 同构）→ `all-around-sup.json` 238,092 bytes。9 个共用键（Home、Inflatable SUP Boards、← SUP Product Center、Request OEM Quote 等）从 `_as-shared-values.json` 逐字符复用，validator（`_as-validate.cjs`）双层校验：硬 = 键数/键集/非空/共用键全等，软 = EN 残留词扫描（the|and|with|your|from|our 等，白名单 it/nl "Home" 值=键合法）→ 0 hard 0 soft。翻译修正：ru 3 处（performance→отличные ходовые качества、weekend→выходные、оллраунддер→оллраундер）、fi 7 处（vakan→vakauden、retki-SUP→retkeily-SUP、väritystämistä→värien sovittamista、vaatimustentäytäntöönpano→vaatimustenmukaisuus ×2、ensimmäisen kerran aikana→ensimmäisellä kerrallaan、joellamiseen→joenlaskuihin、väritetyllä→värisävyltään sovitetulla）、cs 5 处（4 处 `—`→`–` + pro dostatečné vztlaku→dostatečný vztlak）。

② **页面结构与断言**：h1 = 独立短键 `All-Around SUP Board`（同 kids/yoga 陷阱，长键非 h1，须 `<h1>` 标签内含断言）；title/meta/og:title = 整键精确渲染，**无 ui metaDesc 覆盖**（与 privacy 相反，可精确等值断言而非"非 EN 残留"）；EN 页 h2/h3 无锚点 id → 跳过锚点断言；FAQ 非 details/summary 结构（无 `<summary>`）→ 用 q1 includes 断言。th 保留 "all-around" 术语（SUP All-Around / ไม้ SUP All-Around）；da=allround、ro=polivalent。

③ **walk 新教训（`&#39;` 实体）**：Astro 文本节点把 `'` 渲染为 `&#39;`（属性值保字面量）——首跑 nl/tr/da h2（SUP&#39;s / SUP&#39;ların / SUP&#39;er）与 it FAQ q1（Cos&#39;è）4 页挂；walk 须先 `html.replace(/&#39;/g, "'")` 归一化再断言。归一化对属性值断言无害（属性内 `'` 本为字面量，不受影响）。

④ **回归数字**：wire dry 1/5/10/0 → patch applied 1 → 复 dry **0/6/9/0**；extract 903 调用/841 键不变（all-around-sup 63 plain）；checker `pages checked: 6, missing: 0, stale: 0 PASS`；generate 6 landing 模块 + route manifest 13,857 routes；astro check（6144）0 err 0 warn 175 既有 hint / eslint 绿 / prettier 全绿 / check:i18n passed（19 条 factory-oem-capability 既有 warn）；build（4096）13,858 页 4m58s，无 llms-full.txt 漂移；`_as-walk.cjs` **21/21 PASS**。待接线 9 页：fishing-sup 62、whitewater-sup 61、touring-sup 54、terms 55（templ）顺位。

#### L51. 分片 61：fishing-sup 全链（62 键 × 19 locale，plain 页）、fr 期望值 manifest 派生（2026-10）

① **数据**：19 part（`_fs-<loc>.json`）→ `_merge-fishing-sup.cjs`（与 `_merge-all-around-sup.cjs` 同构）→ `fishing-sup.json` 213,904 bytes。**共用键 11 个**（Home、Inflatable SUP Boards、← SUP Product Center、SUP Category、Custom、Units minimum order、30 Days、Typical lead time、Request OEM Quote、Get a Quote、View product →）：前 9 个逐字符复用 `_as-shared-values.json`；"Get a Quote" 从 shard 60 part 文件提取、"View product →" 从已提交 yoga-sup.json 提取，合成 `_fs-shared-values.json`（`_fs-shared-build.cjs`）。validator 0 hard / 0 soft。翻译修正 8 处：de Farbaboestimmung→Farbabstimmung、pt FAQ2 键体混入译文（键必须纯 EN）、it le→gli elastici、ja 収纳(中文)→収納、ru лищ→лиш + standing(EN 残)→стоя、pl nąs→nami、ar many(EN 残)→كثير من、cs Silent Approach 键体混入捷克语 + 值内 Ultimate(EN 残)→Dokonalá、fi Kevytvaraiset(错词)→Kestävät + tilaavat→mahdollistavat、da synsfordel→bedre udsyn、no Tilpassbar→Tilpassbart(中性)、ro un vestă→o vestă、nl 生硬问句改自然表达、sv 四处拼写（däckyta/älvar/guidetjänster/Driv）。

② **结构**：h1 = 独立短键 `Fishing SUP Board`；title/meta/og:title = 整键精确渲染无 ui 覆盖（同 all-around）；FAQ 无 summary 结构用 q1 includes；EN 页无锚点 id 跳过锚点断言。公制换算：34″+→86 cm+、34″–36″→86-91 cm、4–6 inches→10-15 cm（小数点/千分位随 locale）。

③ **walk 教训（fr 期望值）**：首跑前 sanity check 拦截——手写 fr title 与 manifest 不符（manifest 为 "Planche de Paddle Pêche | Paddle Gonflable Pêche | Fabricant OEM afarer"）。**walk 的 fr 期望块必须从 manifest `frEntry` 派生而非手写**（shard 60 线上抽查同因：期望值一律取数据源）。归一化 `&#39;`→`'` 沿用 shard 60。

④ **回归数字**：wire dry 1/6/8/0 → patch applied 1 → 复 dry **0/7/8/0**；extract 903 调用/841 键不变（fishing-sup 62 plain）；checker `pages checked: 7, missing: 0, stale: 0 PASS`；generate 7 landing 模块 + route manifest 13,857 routes；check 四合一 exit=0（astro 0 err / eslint 绿 / prettier 全绿 / check:i18n 0 issue 19 既有 warn）；build（4096）13,858 页 3m07s；`_fs-walk.cjs` **21/21 PASS**。待接线 8 页：whitewater-sup 61、touring-sup 54、terms 55（templ）顺位。

#### L52. 分片 62：whitewater-sup 全链（61 键 × 19 locale，plain 页）（2026-10）

① **数据**：19 part（`_ww-<loc>.json`）→ `_merge-whitewater-sup.cjs`（与 `_merge-fishing-sup.cjs` 同构）→ `whitewater-sup.json` 215,897 bytes。**共用键 10 个**（Home、Inflatable SUP Boards、← SUP Product Center、SUP Category、View product →、Custom、Units minimum order、30 Days、Typical lead time、Request OEM Quote）全部逐字符复用 `_fs-shared-values.json`（whitewater 无 "Get a Quote"），无需扩充。validator（`_ww-validate.cjs`）0 hard / 0 soft 一次通过。翻译修正 11 处：de Verlehtsflotten→Verleihflotten + Expeditions-verpackung→Expeditionsverpackung + turbulenterem→turbulentem、ru/ar 后置品牌位改小写 afarer（ru 2 处、ar 4 处，含 "ألواح SUP للمياه البيضاء من afarer" 语序重排）、sv meta 漏词 för（forspaddling→för forspaddling）、tr 键14 语病（→türbülansta şeklini ve sertliğini koruyan）。

② **术语与换算**：whitewater → de Wildwasser-SUP、pt/es SUP de Aguas Bravas/Águas Bravas、it SUP per acque bianche、ja ホワイトウォーターSUP、ko 화이트워터 SUP、ru SUP-доска для бурной воды、pl SUP do białej wody、ar SUP للمياه البيضاء、nl wildwater-SUP、sv/no viltvatten-/viltvann-SUP、da vildtvands-SUP、el SUP για λευκά ύδατα、tr Beyaz Su SUP、fi koski-SUP、cs SUP pro divokou vodu、ro SUP pentru ape albe、th ไม้ SUP ล่องแก่ง（斯堪的纳维亚三语一致，呼应 shard 46 字典 whitewater→vildt vand）。rapids 等级：ko 1-2급 阿拉伯数字、ru I-II категории 罗马数字、pl klasy I-III、nl klasse I-II、tr I-II sınıfı、fi luokan I-II、cs I-III、da klasse I-I、ro grad I-III、th ระดับ I-III。river running → de Flussfahren、es descenso de ríos、it discesa fluviale、ja 川下り、ru сплав по рекам、fi koskenlasku、cs sjíždění řek、da elvløb、th ล่องแก่ง 等。公制换算：8'–10'→2,44-3,05 m、9'–10'→2,74-3,05 m、15–18 PSI→15-18 PSI、15+ PSI→ab/vanaf/от/over/„mehr als" 15 PSI（小数逗号随 locale，ar/ja/ko/th 小数点）。

③ **结构**：h1 = 独立短键 `Whitewater SUP Board`；title = `Whitewater SUP Board | River-Running Inflatable Paddle Board | Afarer`；title/meta/og:title 整键精确渲染无 ui 覆盖（同 all-around/fishing）；FAQ 无 summary 结构用 q1 includes；EN 页无锚点 id 跳过锚点断言；walk 沿用 `&#39;` 归一化 + fr 期望块 manifest frEntry 派生（`_ww-walk.cjs`，模板 `_fs-walk.cjs`）——EN 残留 needle 用 River Runners persona / Features h2 / h1。品牌大小写惯例沿 shard 60/61：主语位 Afarer 大写（ja/fi 小写）、后置位小写 afarer（ru/ar/nl/sv/pl/el）、de 前缀位大写、th 主语位大写。

④ **回归数字**：wire patch applied 1（already 7）→ 复 dry **0/8/7/0**；checker `pages checked: 8, missing: 0, stale: 0 PASS`；generate 8 landing 模块 + route manifest 13,857 routes；check 四合一 exit=0（astro 0 err / eslint 绿 / prettier 全绿 / check:i18n 0 issue 19 既有 warn）；build（4096）13,858 页 3m11s；`_ww-walk.cjs` **21/21 PASS**。待接线 7 页：touring-sup 54、terms 55（templ）、whitepaper 52（templ）、sup-accessories 49、inflatable-sup 48、disclaimer 39（templ）、afarer-story 6。

#### L53. 分片 63：touring-sup 全链（54 键 × 19 locale，plain 页）、validator 软扫描词表教训（2026-10）

① **数据**：19 part（`_tu-<loc>.json`）→ `_merge-touring-sup.cjs`（与 `_merge-whitewater-sup.cjs` 同构）→ `touring-sup.json` 206,025 bytes。**共用键 10 个**（Home、Inflatable SUP Boards、← SUP Product Center、SUP Category、View product →、Custom、Units minimum order、30 Days、Typical lead time、Request OEM Quote，同 whitewater 无 "Get a Quote"）全部逐字符复用 `_fs-shared-values.json`。validator（`_tu-validate.cjs`）0 hard / 0 soft 一次过。**码位陷阱**：touring 键英尺符号 = U+0027 直引号（whitewater 为 U+2019 弯引号），4 键含 ' —— 提取器须按页实测码位，不可沿用上一 shard 假设。

② **validator 教训（软扫描词表）**：临时把 board|boards|each|stroke|count 加进 EN 残留正则 → 25 条假阳性（de "SUP-Board"、nl "SUP-boards" 为既有合法借词，shard 60-62 同用法）——**残留词表勿扩至借词领域**，回退 shard 62 词表后 0/0。

③ **术语与换算**：touring → de Touren-SUP、pt SUP de Turismo、es SUP de Travesía、it SUP da Touring（拉丁借用）、ja ツーリングSUP、ko 투어링 SUP、ru туристический SUP、pl SUP turystyczny、ar SUP للرحلات、nl tour-SUP、sv/no/da tur-SUP、el SUP Touring（拉丁借用，问号希腊 ；）、tr Tur SUP、fi retki-SUP、cs SUP pro dlouhé výpravy（沿 whitewater "pro divokou vodu" 句式）、ro SUP pentru turism、th SUP ทัวริ่ง/ไม้ SUP ทัวริ่ง。displacement bow → de Verdrängerbug、pt bico de deslocamento、es proa de desplazamiento、it prua a dislocamento、ja ディスプレイスメントバウ、ru водоизмещающий нос、pl dziób wypornościowy、nl verdrangerboeg、sv/no/da deplacerande bog/stævn、fi siirtymäkeula、cs vytlaková příď、ro provă de deplasare、th หัวเรือแหลมแบบดิสเพลสเมนต์；tracking → de Spurtreue、it tenuta di rotta、ru курсовая устойчивость、nl koersvastheid、sv/no/da kursstabilitet、fi suuntapysyvyys、cs držení směru、ro menținerea direcției、th การคงทิศทาง。title 带 OEM 后缀（同 fishing 模式）：`Touring SUP Board | Long-Distance Inflatable Paddle Board | Afarer OEM Manufacturer`，19 locale 后缀译法沿 _fs-*.json title 对照。公制换算：12'–14'→3,66-4,27 m、12'→3,66 m、14'→4,27 m、5–15 miles→8-24 km（小数逗号随 locale，ar/ja/ko/th 小数点）。

④ **结构**：h1 = 独立短键 `Touring SUP Board`；title/meta/og:title 整键精确渲染无 ui 覆盖（同 all-around/fishing/whitewater）；**无 "Features" h2**（Why Choose 节为 h3 特性卡）→ walk h2 检查改 Why Choose / Best Touring SUP Products / Who / FAQ 四断言，EN 残留 needle 用 Distance Paddlers persona / Best Products h2 / h1（`_tu-walk.cjs`，模板 `_ww-walk.cjs`）；`&#39;` 归一化 + fr 期望块 manifest frEntry 派生沿用。品牌大小写惯例沿 shard 60-62：主语位 Afarer 大写（ja/fi 小写 afarer）、后置位小写 afarer（ru/pl/nl/sv/no/da/cs/el/tr/ro/ar）、pt/es/it 后置位大写 Afarer、de 前缀位大写、th 主语位大写。

⑤ **回归数字**：wire patch applied 1（already 8）→ 复 dry **0/9/6/0**；checker `pages checked: 9, missing: 0, stale: 0 PASS`；generate 9 landing 模块 + route manifest 13,857 routes；check 四合一 exit=0（astro 0 err / eslint 绿 / prettier 全绿 / check:i18n 0 issue 19 既有 warn）；build（4096）13,858 页 3m16s；`_tu-walk.cjs` **21/21 PASS**。待接线 6 页：terms 55（templ）、whitepaper 52（templ）、sup-accessories 49、inflatable-sup 48、disclaimer 39（templ）、afarer-story 6。

---

#### L54. 分片 64：terms 全链（55 键 × 19 locale，templ 页转 plain）、法律页族品牌小写惯例（2026-10）

① **数据**：19 part（`_te-<loc>.json`）→ `_merge-terms.cjs`（templ 映射版，沿 shard 59 privacy 模式：merger 对 manifest templ 键做 `en.replace(/ \$\{SITE\.name\}$/, '')` 确定性映射）→ `terms.json` 161,018 bytes。**55 键 = 1 templ（idx0 标题前缀）+ 54 plain；其中 19 个 privacy 共用键逐字符复用**（含尾随空格键 `refers to Afarer, accessible from ` 与 `afarer.com` 值=键），36 新译。validator（`_te-validate.cjs`，含 afarer.com 白名单）0 hard / 0 soft。顺序 = merge → wire --patch → 重跑 extract（terms 55 键全变 plain，manifest 剩 2 templ = whitepaper/disclaimer）→ checker → `node scripts/_gen-landing-i18n.cjs`（10 模块）。

② **品牌大小写（法律页族例外）**：terms 值内品牌**全部 19 locale 统一小写 afarer**（沿 privacy.json 实测惯例：de "von afarer"、pt "da afarer" 等；与产品页"主语位大写"惯例不同）；title 的大写 "Afarer" 由模板 ` ${SITE.name}` 追加。T&C 译名：de Allgemeine Geschäftsbedingungen、pt Termos e Condições、es Términos y Condiciones、it Termini e Condizioni、ja 利用規約、ko 이용약관、ru Условия и Положения、pl Regulamin、ar الشروط والأحكام、nl Algemene voorwaarden、sv Användarvillkor、no Vilkår og betingelser、el Όροι χρήσης、tr Kullanım Koşulları、fi Käyttöehdot、cs Podmínky použití、da Vilkår og Betingelser、ro Termeni și Condiții、th ข้อกำหนดและเงื่อนไข。标题键 = `{T&C 译名} {dash}`（无尾随空格；sv/da/no `–`、ja/ko `―`、其余 `—`）。"AS IS"/"AS AVAILABLE" 引号按 locale：de „…"（大写 WIE BESEHEN/WIE VERFÜGBAR）、ru/tr/no/el/ar «…»、pl/cs/ro „…"、sv ”…”、ja 「」、ko/nl/fi/da/th/pt/es/it 直引号。日期键沿 privacy 实测格式（pl 带 "r."、fi "Päivitetty viimeksi: 6. tammikuuta 2023"、ru 带 "г."、ja 无空格冒号「最終更新日：」）。

③ **结构**：h1 = `Terms and Conditions` 整键；title/og:title = 前缀键 + ` Afarer` 后缀（suffix 程序化取自 en 页 `<title>`）；meta desc 整键精确渲染无 ui 覆盖（en 精确断言、非 en 断言非 EN 残留）。walk（`_te-walk.cjs`）：EN 锚点 id ×5（interpretation-and-definitions/acknowledgment/as-is-and-as-available-disclaimer/governing-law/contact-us）+ Last updated 译文 includes + h2 按 id 锚定 ×4（Acknowledgment/Termination/Governing Law/Contact Us）+ EN 残留 needle（EN h1/EN Last updated/EN desc）+ `&#39;` 归一化 + fr 期望块 manifest frEntry 派生 + ja CJK 豁免。ro 性别一致：混合性别取阴性（"prezentelor Termeni și Condiții"）。

④ **回归数字**：wire patch applied 1（already 9）→ 复 dry **0/10/5/0**；checker `pages checked: 10, missing: 0, stale: 0 PASS`；generate 10 landing 模块；check 四合一 exit=0（astro 0 err 175 既有 hint / eslint 绿 / prettier 全绿 / check:i18n 0 issue 19 既有 warn）；build（4096）13,858 页 8m17s；`_te-walk.cjs` **21/21 PASS**。待接线 5 页：whitepaper 52（templ）、sup-accessories 49、inflatable-sup 48、disclaimer 39（templ）、afarer-story 6。挂账：privacy da meta desc "afafers" 拼写错误待单独修复。（**已清**：`f162b593` 修正 afafers→afarers，da/sv/no 属格 afarers 为正确斯堪的纳维亚形）

---

#### L55. 分片 65：whitepaper 全链（52 键 × 19 locale，templ 页转 plain）、White Paper 译名与表单页 walk 惯例（2026-10）

① **数据**：19 part（`_wp-<loc>.json`）→ `_merge-whitepaper.cjs`（templ 映射版沿 shard 64）→ `whitepaper-oem-sup-manufacturing-guide.json` 133,414 bytes。**数据文件名 = wire pageKey（`/`→`-`），误写 `whitepaper.json` 时 wire applied 0（引擎按 `<pageKey>.json` 探测）**。52 键 = 1 templ（idx0 标题前缀，尾随 " |"）+ 51 plain。validator（`_wp-validate.cjs`，无共用键）0 hard / 0 soft。**wire TEMPL_RE 只匹配单行 templ 调用——本页 title fr() 为多行格式，wire applied 后 templ 仍在、checker 报 MISSING/stale；须手工改为 `` `${fr('… |', '… |')} ${SITE.name}` `` 再重跑 extract**。顺序 = merge → wire --patch → 手工修 templ 调用点 → 重跑 extract（manifest 仅剩 1 templ = disclaimer）→ checker → `node scripts/_gen-landing-i18n.cjs`（11 模块）。

② **White Paper 译名**：de Whitepaper、es Libro Blanco、ja ホワイトペーパー、ko 화이트페이퍼、ar ورقة بيضاء、th 保留大写 "White Paper" 借词；**其余 13 locale（pt/it/ru/pl/nl/sv/no/el/tr/fi/cs/da/ro）统一保留大写 "White Paper" 借词**（it/pt 不译 Libro Bianco/Livro Branco）。章节键：Kapitel/Capítulo/Capítulo/Capitolo/第N章/제N장/Глава/Rozdział/الفصل/Hoofdstuk/Kapitel/Kapittel/Κεφάλαιο/Bölüm/Luku/Kapitola/Kapitel/Capitolul/บทที่ N；desc 开头冒号附着 ": "（ja 全角 "：" 无空格）。货币 $12,000 → de/it/el/tr/nl/da/ro 12.000 $、pt/es/ru/pl/sv/no/fi/cs 12 000 $、ja 12,000ドル、ko 12,000달러、ar 12,000 دولار、th 12,000 ดอลลาร์。署名国家：US→USA/EUA/EE. UU./米国/미국/США/الولايات المتحدة/VS/ΗΠΑ/ABD/สหรัฐอเมริกา 等、EU→UE/ЕС/الاتحاد الأوروبي/ΕΕ/AB/สหภาพยุโรป 等、UK→VK/Storbritannien(VK)/Storbritannia/英国/영국/Великобритания/Wielka Brytania/المملكة المتحدة/Ηνωμένο Βασίλειο/İngiltere/Iso-Britannia/Velká Británie/Marea Britanie/สหราชอาณาจักร（详见 `_wp-*.json`）。testimonial 引号沿 terms 实测惯例（de/cs „…“ U+201E…U+201C、pl/ro „…” U+201E…U+201D、ru/tr/no/el/ar «…»、sv ”…” U+201D 两侧、ja 「」、其余直引号）；it/tr 直撇号；th 无尾点；dash sv/da/no `–`、ja/ko `―`、其余 `—`。品牌主语位大写 Afarer（ja/fi 小写 afarer）。

③ **walk（`_wp-walk.cjs`）**：title/og:title = 前缀键 + ` Afarer` 后缀（suffix 程序化取自 en 页）；**文本节点直引号 `"` 渲染为 `&quot;`——归一化须同时做 `&quot;`→`"` + `&#39;`→`'`**（terms 只有后者）；badge `<span>` 标签锚定；章条目 `<strong>章名</strong>desc` 邻接 includes（dist 实测无空白）；表单 placeholder 与 hidden subject/message 用属性值字面断言（`placeholder="…"`、`name="subject" value="…"`，属性值不转义撇号）；meta desc 21 locale 全部精确断言（本页无 ui 覆盖）；fr 期望块 manifest frEntry 派生；ja CJK 豁免。

④ **回归数字**：wire patch applied 1（already 10）→ 复 dry **0/11/4/0**；checker `pages checked: 11, missing: 0, stale: 0 PASS`；generate 11 landing 模块；check 四合一 exit=0；build（4096）13,858 页 5m43s；`_wp-walk.cjs` **21/21 PASS**。待接线 4 页：sup-accessories 49、inflatable-sup 48、disclaimer 39（templ）、afarer-story 6。

#### L56. 分片 66：sup-accessories 全链（49 键 × 19 locale，plain 页）、`&amp;` 归一化第三步与 JsonLd 死调用定界（2026-10）

① **数据**：19 part（`_sa-<loc>.json`）→ `_sa-merge.cjs` → `sup-accessories.json` 172,059 bytes。49 键全 plain（idx0 title 尾随 `| Afarer` 整串——本页 metadata `ignoreTitleTemplate: true`，title 键整串即 `<title>`，非 templ、无后缀拼接）。validator（`_sa-validate.cjs`）0 hard / 0 soft。4 共用键逐字符复用 `_sa-shared-values.json`（Home、Inflatable SUP Boards、← SUP Product Center、Get a Quote——cs/da/ro/th 值提取自既有已译数据）；2 组 dup pair（hyphen vs en-dash FAQ 答案键 `2-3`/`2–3 minutes`、`6-10`/`6–10 inches`）各 locale 同值。顺序 = merge → wire --patch（默认 apply）→ checker → generate（12 模块）→ check → build。

② **术语**：leash 借词 12 locale（de/es/it/pt/nl/sv/no/da/ro/el/tr/cs/pl）、ja リーシュコード、ko 리시 코드、ru лиш、fi leash-naru、th สายคล้องข้อเท้า leash；life vest：cs záchranná vesta、da redningsvest、ro vestă de salvare、th เสื้อชูชีพ；PFD/USCG/SOLAS/CE/OEM/ODM 保留缩写（da `Redningsvester & PFD'er`、th `เสื้อชูชีพ & PFD`）；公制换算 6-10 inches→15-25 cm、6-foot→183 cm（部分 locale 1,83 m）、76-78 inch→193-198 cm，数字范围保留 EN 连字符；"Paddles & Oars" paddle 主词、oars 备用桨义（cs Pádla & vesla、da Padleårer & reserveårer、ro Vâsle & vâsle de rezervă、th ใบพาย & ใบพายสำรอง）；title 键品牌全大写 Afarer（19 locale）、meta desc 后置小写 afarer（de 前缀位大写例外）、正文句首大写 Afarer（ja/fi/ko/tr 句首小写 afarer；th 句首大写）；dash sv/da/no `–`、ja/ko `―` 带空格、其余 `—`。

③ **walk（`_sa-walk.cjs`）**：title/og:title 整键精确断言（ignoreTitleTemplate，无后缀拼接，区别于 wp 的 prefix+suffix）；**归一化须加第三步 `&amp;`→`&`**——属性值与文本节点 `&` 均转义（og:title `Leashes &amp; Vests`、h3 `Life Vests &amp; PFDs`），wp 只有 `&quot;`/`&#39;` 两步；back link / Shop vests → / Shop pumps → / 双 CTA 用 href+text 复合正则（`href="/${loc}/products/life-vest-classic"[^>]*>\s*…</a>`、CTA `>\s*…\s*<span>→</span>`）；**FAQ 可见区使用 en-dash dup 键（idx44/45），hyphen 键与 breadcrumb 键（Home/Inflatable SUP Boards）仅存于不渲染的 JsonLd data-prop 死调用，不可断言**（L46④ 挂账的实证定界）；fr 期望块从 `_sa-keys.json` 派生；ja CJK 豁免。

④ **回归数字**：wire patch applied 1（already 11）→ 复 dry **0/12/3/0**；checker `pages checked: 12, missing: 0, stale: 0 PASS`；generate 12 landing 模块；check exit=0（仅既有 ts 警告）；build（4096）13,858 页 5m24s；`_sa-walk.cjs` **21/21 PASS**。待接线 3 页：inflatable-sup 48、disclaimer 39（templ）、afarer-story 6。挂账：da part 拼写瑕疵（Fuldendt→应为 Fuldfør、reperationsæt→reparationsæt）validator 不拦，待质量修。（**已清**：分片 72 修复，见 L62）

---

#### L57. 分片 67：inflatable-sup 全链（48 键 × 19 locale，plain 页）、localizeHref 回退定界（2026-10）

① **数据**：19 part（`_is-<loc>.json`）→ `_is-merge.cjs`（归档 `_merge-inflatable-sup.cjs`）→ `inflatable-sup.json` 190,130 bytes。48 键全 plain（idx0 title 整串含 `| Afarer`——`ignoreTitleTemplate: true` 同 shard 66，无后缀拼接）。validator（`_is-validate.cjs`）0 hard / 0 soft。5 共用键（Home、Inflatable SUP Boards、← Home、SUP Product Center、Contact Us）逐字符复用 `_is-shared-values.json`——**no part 首跑 sharedMismatch 1 处**：`Inflatable SUP Boards` 误写 "Oppblåsbare SUP-brett"，shared-values 权威值为 "Oppblåsbare SUP-bretter"（跨页一致优先于本页措辞）；2 组 dup pair（`5-10`/`5–10 years`、`12-15`/`12–15 PSI`）各 locale 同值。

② **术语**：drop-stitch 借词——Latin script locale 保留 "drop-stitch"（ja ドロップスティッチ、ko 드롭스티치、ru/th 混用语境保留英文）；military-grade PVC：de "PVC in Militärqualität"、pt "PVC de grau militar"、sv "militärkvalitets-PVC"、fi "armeijaluokan PVC"、th "PVC ระดับทหาร" 等；公制换算 18–22 lbs→8-10 kg 全 19 locale（数字范围保留 EN 连字符）；"Browse All Products" 无既有先例，按各 locale 新译；品牌大小写惯例沿 shard 60-66（title `| Afarer` 全大写、meta desc 后置小写、ja/fi/ko/tr 句首小写）。

③ **walk（`_is-walk.cjs`）**：**back link `localizeHref('/', lang)` 渲染为 `href="/"`（根路径不本地化）**——区别于 shard 66 back link 指 `/{loc}/inflatable-sup/`；**资源卡 res2/res3 链接 `/research/sup-thickness-guide`、`/research/ce-certification-guide` 路由不存在 → localizeHref 回退为未本地化 `href="/research/..."`**，而 res1 `/compare/inflatable-vs-hardboard` 路由存在则正常本地化 `/{loc}/compare/...`——walk 断言用 `(loc/)?` 可选前缀兼容两种形态；FAQ 可见区 a3/a4 使用 en-dash dup 键（idx43/44），hyphen 键与 breadcrumb 键属 JsonLd data-prop 死调用不可断言（沿 L56③）；三步归一化（`&quot;`/`&#39;`/`&amp;`）沿用；fr 期望块从 `_is-keys.json` 派生；ja CJK 豁免。

④ **回归数字**：wire applied 1（already 12）→ 复 dry **0/13/2/0**；checker `pages checked: 13, missing: 0, stale: 0 PASS`；generate 13 landing 模块；check exit=0（仅既有 ts 警告 + i18n 19 条既有 factory-oem-capability warnings）；build **须 `NODE_OPTIONS=--max-old-space-size=4096`——首跑无该变量 2GB 堆 OOM**，13,858 页 4m41s；`_is-walk.cjs` **21/21 PASS**。待接线 2 页：disclaimer 39（templ）、afarer-story 6。

#### L58. 分片 68：disclaimer 全链（39 键 × 19 locale，templ 页转 plain）、屈折语 Privacy Policy 句中链接的引号文档名方案（2026-10）

① **数据**：19 part（`_di-<loc>.json`）→ `_merge-disclaimer.cjs`（归档）→ `disclaimer.json` 130,759 bytes。39 键 = 1 templ（idx0 标题前缀 `Medical Disclaimer —`，merger 对 manifest templ 键做 `en.replace(/ \$\{SITE\.name\}$/, '')` 确定性映射沿 shard 64/65）+ 38 plain；**3 共用键逐字符复用 `_di-shared-values.json`**：`Limitation of Liability`/`Privacy Policy`（源 privacy.json）+ `Economic Development Zone, Laixi, Qingdao, China, 266600`（源 terms.json）。validator（`_di-validate.cjs`，硬校验键数/键集/非空/shared + 软扫描 EN 残留词表）**0 hard / 0 soft**。39 键含 6 个 strong 片段键（idx6/12/14/17/21/38）与首尾空格片段键（idx5/11/16/20/26 尾空格、idx7/13/28 首 `. `、idx15/18/22 首空格、idx21 字面双引号 `"as is"`）。

② **屈折语 Privacy Policy 句中链接**：shared 主格值（如 ru «Политика конфиденциальности»）无法屈折 → **ru/fi/cs/pl/tr 用"引号文档名"结构包住链接**：ru `…в соответствии с документом «`+link+`».`、fi `…asiakirjan ”`+link+`” mukaisesti.`、cs `…s naším dokumentem „`+link+`“.`、pl `…zgodnie z dokumentem „`+link+`”.`、tr `…, «`+link+`» adlı belgemize uygun şekilde işlenir.`；de/pt/es/it/el/nl/sv/no/da/ro/ar/th 冠词自然搭配直接拼接（`gemäß unserer `、`de acordo com nossa `、`cu `、`με την ` 等）。**100% 写法**：de `100 %`、it `al 100%`、tr `%100`、fi `100-prosenttisesti`、ru `на 100%`、其余 `100%`。**AS IS 引号**：en `"as is"` → de „as is“、fr « en l’état »、ru «как есть»、ja 「ありのまま」等按各 locale 引号惯例。品牌大小写沿惯例：法律页族正文值一律小写 afarer（已核 terms de meta desc "von afarer" 先例）。es Email=Correo electrónico、el Email=Email、ja Contact=お問い合わせ/Email=メール。

③ **walk（`_di-walk.cjs`）**：21 locale；title = idx0 值 + ` Afarer` 拼接（无 ignoreTitleTemplate，与 shard 67 整串形态不同）；og:title/meta desc/h1/9 个 h2 全精确锚定；6 strong 片段 `<strong>` 标签锚定 + 周边文本段 includes；privacy 链接断言 `href="/{loc}/privacy"` + 锚文本；末段确认 strong；EN 残留（h1/desc/h2×2/strong×2）；三步归一化沿 L57；**fr 期望块从 `_di-keys.json` fr 字段派生——idx0 须剥 ` ${SITE.name}` 后缀再拼 ` Afarer`**；ja CJK 豁免。ja/ko/th 片段重排不破坏断言（三键结构不变：seg+strong+seg，ja idx18=`。`/ko=`.`）。

④ **回归数字**：wire applied 1（already 13）→ pending 1（afarer-story 6）；重跑 extract 后 manifest **0 templ**（15 页 841 键全 plain）；checker `pages checked: 14, missing: 0, stale: 0 PASS`；generate 14 landing 模块；check exit=0（仅既有警告）；build 13,858 页 5m32s（4096 堆）；`_di-walk.cjs` **21/21 PASS**。待接线 1 页：afarer-story 6（最后一页）。

#### L59. 分片 69：afarer-story 全链（6 键 × 19 locale，plain 页）——campaign 15/15 页接线收官（2026-10）

① **数据**：19 part（`_story-<loc>.json`，前缀避让 shard 60 的 `_as-`）→ `_merge-afarer-story.cjs`（归档）→ `afarer-story.json` 5,282 bytes。6 键全 plain 无 templ 无共用键（landing-i18n 既有数据 grep 确认零交集）。validator（`_story-validate.cjs`）**0 hard / 0 soft**，含三类硬校验：键数/键集/非空；**3 个 UI 先例键逐字符比对 i18n-config**（`Explore Products`=ui `cta.explore`、`Visit Our Factory`=ui `home.resources.factoryTour.cta`、`Best For`=ui `product.bestFor`）；K4 品牌大小写规则（ja/fi 小写 afarer，其余大写 Afarer）。

② **翻译决策**：页面主体 YAML 已本地化（timeline/hero/stats 等走 getPageContent），fr() 仅 6 处。按钮复用 UI 字典既有 CTA 标签（站点级一致性优先）；`Brand Journey`（uppercase eyebrow，CSS 转大写，译文正常句式）与 `Strengths` 新译；`Afarer Timeline` 品牌大小写按**商业页**惯例（probe 4 核实：前缀位大写、ja/fi 小写、后置位大写 `SUP Afarer`/`van Afarer`/`ของ Afarer`、属格 `Afarers tidslinje` sv/no/da、ja `afarerの沿革`、fi `afarerin aikajana`——法律页族"后置位小写"仅适用于法律正文，商业页标题用大写）。no `Best For`=`Best for` 系 UI 字典既有值（no 语合法拼写字面），逐字符沿用不擅改。

③ **walk（`_story-walk.cjs`）**：21 locale；hero 双 CTA 锚定 `href="/{loc}/products"`+`href="/{loc}/factory"` + 锚文本精确；eyebrow 用 `<p[^>]*uppercase[^>]*>` 标签锚定；h2 Timeline/h3 Strengths/h3 BestFor 标签锚定；EN 残留（cta×2/h2/h3×2）；三步归一化沿 L57；fr 期望块从 `_story-keys.json` fr 字段派生；ja CJK 豁免。**21/21 PASS**。

④ **回归数字**：wire applied 1 / already 14 / pending 0（收官）；无 templ 无需重跑 extract；checker `pages checked: 15, missing: 0, stale: 0 PASS`；generate **15 模块**；astro check 0 errors；build 13,858 页 3m25s（4096 堆）。campaign 15/15 页全部接线完毕。

#### L60. 分片 70：挂账清理批（pl inflatable 残留 / da brætter / news-page2·compare·use-cases 标题 / contact 表单与三件套 / 404 href / academy mojibake）（2026-10）

① **A 批 landing 数据修复（`_fix-shard70-pl-da.cjs` 归档）**：pl all-around-sup 8 处 + marine-industry 13 处 "inflatable" EN 残留（validator 软扫描词表不含域词 inflatable 故历史漏网）→ 有序规则表替换为 dmuchany/dmuchana/dmuchane/dmuchanych 系（**规则顺序：具体/长串在前**，含大写开头三条 `Deska/Deski SUP inflatable` 与分离式 `sprzęt do sportów wodnych inflatable`；末尾零残留断言 `/inflatable/i`），共 22 处（含 da sup-accessories title `oppustelige brædder`→`brætter`）。教训：**dry-run 首跑暴露 2 处规则盲区**（大写开头 + 介词分离式），规则表须由 dry 输出迭代而非一次成型。

② **C1a 404 href 修复（`_fix-shard70-resources-href.cjs` 归档）**：18 locale brand-why-afarer.yaml hero CTA 裸 `href: /resources` → `/resources/download-catalog`（EN/fr 基线对照；`[lang]/resources.astro` 为 getStaticPaths 返回 `[]` 的死页，无害保留）。ui.da 17 键 "SUP-brædder" 为 da 语 bræt 的合法复数形之一（板材义，如 gulvbrædder），与 sup-accessories 文件内部 brætter 不一致属词形选择而非错拼，**不改**，留待母语审校。

③ **B 批源码 i18n**：compare/use-cases hub title 硬编码 EN → `t('compare.hubTitle'/'useCase.hubTitle') | SITE.name`（键 21 locale 既有）；news/page/[page] 从 EN 根 yaml 改 `getPageContent(lang,'news')`（hero 本地化）+ 新 ui 键 `blog.page` ×21（de Seite/ja ページ/th หน้า 等）拼 `— ${t('blog.page')} ${currentPage}`（面包屑同步）；academy L156 JSON-LD mojibake `�?` → em-dash；contact `t()` 优先级 `lang→en→fallback` 改 `lang→fallback→en`（**修复 ft(contact-form-text.yaml 仅 en/fr/de/es/pt) EN 值压过 21 locale 已本地化页面 YAML 的根因**），submit/success/error/consent 调用点传页面 YAML 作 fallback；三件套 `fr('Address','Adresse')` 等 → `tnav('home.contact.address/phone/email')`（键 21 locale 既有）；**新发现并修复**：ContactUs widget 步骤条 `_ui('contact.step1/2/3', EN)` 三键全缺 → 新增 ×21（Project Details/Contact Information/Message），contact.astro h3 死 fallback `'Contact Information'`（quick_info 任何 yaml 都不存在）→ `tnav('contact.step2')`。

④ **回归数字**：checker `15, missing: 0, stale: 0 PASS`（纯值修复不动键集）；generate 15 模块 + seo-meta 1486 entries；astro check 0 errors（1117 files）；build 13,858 页 3m31s；walk `_shard70-walk.cjs` **408/408 PASS**（21 locale ×：pl 可见文本零 inflatable、da title brætter、compare/use-cases title 逐字符等值、news/page/2 含 hero+页码词、contact 三件套+step1-3+非 ft 语言表单 YAML 值、why-afarer href（路由 `/da/brand-why-afarer/` 非 `/da/brand/why-afarer/`）、academy em-dash）；live 9/9 PASS。**walk 教训**：① residue 断言必须限可见文本（先剥 `<script>/<style>` 再剥标签）——URL slug/资源文件名（inflatable-sup、afarer-inflatable-boat.webp）与 JSON-LD 合法含英文词；② ft 语言（en/fr/de/es/pt）表单断言须按 ft 优先级或仅断言无 EN 残留（widget 内联脚本的 `|| 'Send message'` JS 后备不是可见文本）；③ walk 的 `if (file)` 存在性分支会静默跳过失配路径 → 断言前须先断言文件存在；④ **页面 YAML 改动必须重跑 `scripts/_gen-pages.cjs`**（`npm run generate` 链第 4 步）——只跑 generate-data-json 时 `src/i18n/generated/pages/*` 滞留旧值，本地 dist 旧貌而 CI（generate 全链）部署为新值，本地/线上表现分裂；⑤ CI `npm run check` = astro + eslint + prettier + i18n 四合一，新增 TOOLS 脚本须过 prettier（本地 astro check 通过≠CI 过）。

#### L61. 分片 71：JsonLd `data=` 死调用组件级修复（126 处 SEO 结构化数据复活）（2026-10）

① **根因与修复**：`src/components/common/JsonLd.astro` 各类型分支只认结构化 props（article/breadcrumbs/faqs/product/howto/image/video/service/itemList），但全站 294 处调用中 **126 处**（~50 文件：adventure-sup/all-around-sup/about/solutions/oem-odm-manufacturer/`[lang]` 15 landing 页等）传的是 `data={{...}}`（完整 schema.org 形态：headline/mainEntity/itemListElement/provider 等）→ 被组件完全忽略；渲染守卫 `Object.keys(schema).length > 2` 使其只产出 `{'@context','@type'}` 2 键 → **从未渲染**。修复 = 9 类型分支守卫全部改 `(prop || data)`，prop 存在走原逻辑，否则 spread `...data`（Service 分支体引用 `service.items` 需 if 包裹）；无死调用的类型（Product/HowTo/ImageObject/VideoObject）同样加后备——仅影响"prop 缺失且 data 存在"的调用，现无此形态，行为零变化。**组件级单点修复而非改 126 个调用点**（调用点 data 均已是完整 schema 形态）。

② **验证与工具归档**：prettier 绿；astro check 0 errors（1117 files）；build 13,858 页 6m02s；dist 断言 17/17 PASS（死调用页 adventure-sup/solutions/about/oem-odm-manufacturer/download-catalog 出现 Article/BreadcrumbList/FAQPage/ItemList/Service、`[lang]` 页 de/fr all-around-sup 翻译值落地、活调用页 guides/products/contact/home 零回归、adventure-sup headline 全文在页）。工具归档 `TOOLS/verify/`：`scan-jsonld-dead.cjs`（源码侧死调用扫描，修复后 DEAD=0、DATA-FALLBACK=126，`--strict` exit 1 防新增死调用）+ `verify-jsonld.cjs`（dist 侧 `页面@类型` 断言）；已登记 tool_instrction.md §5。**教训：块注释内写 `src/**/*.astro` 的 `**/` 会提前闭合注释**（Node SyntaxError Unexpected token '*'）。

③ **挂账联动**：L583 挂账④标记已修；landing-i18n manifest key #3（Article headline）不再是死调用，`[lang]` 页翻译 headline 现随 data= 渲染进 dist。剩余小挂账（**已全部于分片 72 清除**，见 L62）：trust-badges.yaml EN-only badge 标题、privacy da "afafers" 拼写、da Fuldendt/reperationsæt 拼写、worker Env 死字段（CONTACT_SUBMISSIONS_PAT/GITHUB_TOKEN/CONTACT_EMAIL_PROVIDER）。

#### L62. 分片 72：挂账清理批二（trust-badges 全站本地化 / de Afafers / da 拼写 / worker Env 死字段）（2026-10）

① **trust-badges 本地化（主项）**：`TrustBadges.astro` 原硬编码 `import trust-badges.yaml` → 全站 locale 页（[lang]/about、[lang]/contact、[lang]/products/[slug] 等）渲染 EN badge 标题/描述；既有 `.de/.fr` 变体从未被组件消费（仅 keystatic 后台可见）。修复 = 组件改 `import.meta.glob('/src/data/site/trust-badges*.yaml', { eager: true })` 按 `Astro.locals.lang`（middleware URL 前缀派生，预渲染期生效——about/faq/contact 等根页既有先例）选变体，EN 回退；新增 18 locale 变体（da/sv/no/nl/es/pt/it/pl/cs/ro/ru/el/tr/fi/ja/ko/th/ar，6 badge × title/desc = 216 译文），生成器 `TOOLS/one-off/_gen-trust-badges-locales.cjs`（--dry/--write 幂等，翻译表内嵌 `T`，icon/variant 与 EN 源一致）已归档登记 tool_instrction.md §4。品牌大小写沿既有惯例（后置位小写 afarer；ja/fi 小写；th 主语位大写）。

② **拼写/死字段小修**：i18n-config de `engineeringTeam.desc` "Afafers"→"Afarers"（/de/engineering-team/ 渲染）；landing-i18n sup-accessories da 两值 "Fuldendt"→"Fuldfør"、"reperationsæt"→"reparationsæt"（分片 65 挂账）；contact-worker `Env` 接口清除 3 死字段（CONTACT_SUBMISSIONS_PAT/GITHUB_TOKEN/CONTACT_EMAIL_PROVIDER，§3.4 已同步），仅留代码实际使用的 4 字段。

③ **回归数字**：generate 全链（15 landing 模块 / 227 pages / seo-meta 1486 / route-manifest 13857）；astro check 0 errors（1138 files，新增 18 yaml 计入）；build（4096）13,858 页 3m34s；walk `_s72-walk.cjs` **38/38 PASS**（EN 根页零变化、de/fr 既有变体首次真正渲染、12 locale 抽样 badge 标题本地化 + 9 locale EN 残留为零、de contact + de/ja 产品页（`layout="row"` 路径）本地化、da sup-accessories 两拼写修复落地、de engineering-team Afafers 清除、ar RTL 页正常）。**教训**：① walk 断言前先确认目标页确实渲染该组件（[lang]/oem-odm-manufacturer 不用 TrustBadges，断言写成 FAIL 假警）；② PowerShell `[lang]` 路径必须 `-LiteralPath`（通配符吞文件）；③ 挂账文字会失真——da "afafers" 实际已在 `f162b593` 修过（git log -S 复核后才标记），真实残留是 de engineeringTeam.desc 的同族拼写。

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
| `src/i18n/generated/*` | ⚠ Build artifacts (gitignored): `seo-meta.ts`, `ui-all.ts`, `data.ts`, `page-content.json`, `i18n-config.json`, `pages/`, `ui/`, `landing/` |
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
| `scripts/_gen-pages.cjs` / `_gen-uiall.cjs` / `_gen-landing-i18n.cjs` | Generate page modules / ui-all.ts / landing EN-key map modules (`src/i18n/generated/landing/`) |
| `TOOLS/tool_instrction.md` | 工具总目录文档：meta-inject / i18n-merge / i18n-fix / one-off / **verify（构建后全语言回归验证）** / **i18n-manage（UI 键批量管理 + CJK 泄漏扫描）** |
| `TOOLS/verify/*.cjs` | 构建后回归验证：`verify-langs.cjs`（六项整站）、`check-dist.cjs`（--present/--absent 全语言断言）、`scan-en-leak.cjs`、`check-solutions-page.cjs` — 模块增删后必跑 |
| `TOOLS/i18n-manage/*.cjs` | `ui-keys.cjs`（i18n UI 键 count/missing/add/remove/set）、`scan-cjk.cjs`（src/dist 中文泄漏扫描） |
| `TOOLS/i18n-merge/warning-cleanup/*` | check:i18n 150 条存量 warning 一次性清零批次（475 op ×18 分片 + 幂等补丁引擎，见 §8.8 L15-L17） |
| `TOOLS/meta-inject/*` | SEO meta batch injection (`_inject-meta.cjs` + `_meta-{lang}.cjs` data), unused for builds |
| `workers/contact-worker/index.ts` | Live `POST /api/contact` handler (validate + Resend email) |
| `scripts/patch-worker.mjs` | `output: 'server'` only; subdomain routing + KV injection (not in current build) |
| `scripts/fix-garbled.py` | Encoding/garble repair helpers (see §6; `find-garbled.py`, `check-encoding.py` too) |
