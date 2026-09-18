# afarer — Technical Documentation

> Last updated: 2026-08-18
> Project path: `E:\github\afarer`
> Production: https://afarer.com (Cloudflare Pages)
> Build: `npm run build` → `dist/` (7,564 pages)

---

## 1. Architecture Decisions

### 1.1 Pure Static Generation (`output: 'static'`)

All ~7,564 pages are pre-rendered at build time. No SSR adapter. API endpoints are handled by standalone Workers at the edge.

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

### 4.1 Supported Languages (22)

`en`, `zh`, `fr`, `de`, `es`, `pt`, `ar` (RTL), `it`, `ja`, `ko`, `ru`, `pl`, `nl`, `sv`, `no`, `el`, `tr`, `fi`, `cs`, `da`, `ro`, `th`

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
| `TOOLS/tool_instrction.md` | One-off editing/i18n script usage: meta-inject / i18n-merge / i18n-fix / one-off fixers |
| `TOOLS/meta-inject/*` | SEO meta batch injection (`_inject-meta.cjs` + `_meta-{lang}.cjs` data), unused for builds |
| `workers/contact-worker/index.ts` | Live `POST /api/contact` handler (validate + Resend email) |
| `scripts/patch-worker.mjs` | `output: 'server'` only; subdomain routing + KV injection (not in current build) |
| `scripts/fix-garbled.py` | Encoding/garble repair helpers (see §6; `find-garbled.py`, `check-encoding.py` too) |
