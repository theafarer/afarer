# AstroWind Agent Instructions

## Project Overview

AstroWind is a free, open-source website template built with **Astro v6** and **Tailwind CSS v4**. It generates a fully static site optimized for performance, SEO, and accessibility.

**Stack:** Astro v6 | Tailwind CSS v4 | TypeScript 5.9 | MDX | Sharp

## Quick Reference

| Command           | Purpose                             |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Production build to `./dist/`       |
| `npm run preview` | Preview production build locally    |
| `npm run check`   | Run astro check + ESLint + Prettier |
| `npm run fix`     | Auto-fix ESLint + Prettier issues   |

**Node.js requirement:** >= 22.12.0

## Architecture

### Directory Structure

```
src/
  assets/styles/tailwind.css   # Tailwind v4 config (themes, utilities, plugins)
  components/
    common/        # Shared: Image, Metadata (consumes seo-meta.ts), JsonLd, Analytics
    ui/            # Primitives: Button, Headline, WidgetWrapper, ItemGrid
    widgets/       # Page sections: Hero, Features, Pricing, Header, Footer, SeoLanding
    blog/          # Blog: SinglePost, List, Pagination, Tags
    seo/ knowledge-graph/ blocks/ admin/ ai/   # Domain-specific components
  content.config.ts    # Content Collections schema (Astro v6 Content Layer, 10 collections)
  content/             # CMS-editable content (news/*.md, products/*.mdx, */index.json)
  data/pages/          # Page content YAML: EN root files + 21 locale dirs (the content SSOT)
  data/site/           # navigation*.yaml, i18n-config.json (UI strings SSOT)
  data/products.ts     # 52-product SSOT; product-texts.ts + product-texts/{locale}/
  layouts/             # Layout.astro, PageLayout.astro, MarkdownLayout.astro
  pages/               # File-based routing; [lang]/ holds the 22-locale routes
  pages/internal/seo/  # SEO/GEO dashboards (10 static pages)
  lib/
    seo/               # health-score, brand-os, rule-engine, task-list, link-optimizer, ...
    geo-v7/ geo-v5/ geo/ geo-seo/   # GEO generation/scoring engines
    ai-gateway.ts rag.ts vector.ts auth.ts github.ts link-refactor.ts ...
  engine/              # Standalone offline SEO analysis engine (NOT wired into build)
  i18n/
    generated/         # ⚠ BUILD ARTIFACTS (gitignored): seo-meta.ts, ui-all.ts, pages/, ui/, ...
    routing.ts         # LOCALIZED_ROUTES + localizeHref() + entityForHref()
  utils/               # blog.ts, images.ts, permalinks.ts, frontmatter.ts, locale.ts
  config.yaml          # Site configuration (loaded as virtual module)
  config.{locale}.yaml # Per-locale overrides (loaded when SITE_LOCALE is set)
  navigation.ts        # Navigation structure
  types.d.ts           # TypeScript type definitions
vendor/integration/    # Custom Astro integration for config loading
```

### Path Aliases

Use `~/` to import from `src/`:

```typescript
import Image from '~/components/common/Image.astro';
import { SITE } from 'astrowind:config';
```

### Configuration System

Site config lives in `src/config.yaml` and is loaded as a Vite virtual module `astrowind:config` by the custom integration in `vendor/integration/`. Exports: `SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`, `ANALYTICS`.

## Tailwind CSS v4

Configuration is CSS-first in `src/assets/styles/tailwind.css`:

- **Theme tokens:** `@theme { --color-primary: var(--aw-color-primary); ... }`
- **Custom utilities:** `@utility bg-page { ... }`
- **Dark mode:** Class-based via `@variant dark (&:where(.dark, .dark *))`
- **Plugins:** `@plugin "@tailwindcss/typography"`
- **Custom variant:** `@custom-variant intersect (&:not([no-intersect]))`

CSS variables for colors/fonts are defined in `src/components/CustomStyles.astro` with light/dark theme variants.

The Vite plugin `@tailwindcss/vite` is configured in `astro.config.ts` (not as an Astro integration).

### Class Merging

Components use `twMerge` from `tailwind-merge` v3 for conditional class composition.

## Content Collections

Defined in `src/content.config.ts` using the Astro v6 Content Layer API with `glob()` loader. Posts are in `src/data/post/` as `.md` or `.mdx` files.

Post frontmatter: `title` (required), `publishDate`, `updateDate`, `draft`, `excerpt`, `image`, `category`, `tags`, `author`, `metadata`.

## Component Patterns

- Props extend interfaces from `~/types`
- Use `class:list` for conditional classes
- Use `twMerge()` when accepting className overrides
- Use named slots for layout composition
- Widget components accept standardized props (see `~/types`)

## Image Handling

`src/components/common/Image.astro` supports:

- Local images via `astro:assets` (optimized by Sharp)
- Remote images via Unpic CDN
- Allowed domains (for providers Unpic can't detect, processed by Sharp): `cdn.pixabay.com`

Hero images use `loading="eager"` and `fetchpriority="high"`.

## Link Refactor (URL / name rename across the site)

When the admin renames a navigation item (e.g. `Blog` → `News`, `/blog` → `/news`), other YAML/MD/MDX files in `src/data/` can still reference the old URL or name. Two admin tools handle this:

- **`/keystatic/link-refactor`** — paste `oldUrl` + `newUrl` (and optionally `oldName` + `newName`), scan the entire `src/data/` tree (excluding `contact/*.enc.json`), preview every match with a colour-coded diff, then commit per-file. URL matching uses `(?<![A-Za-z0-9_-])URL(?![A-Za-z0-9_-])` so `/blog` does not match `/blog-post`. Name matching is whole-word. Code blocks (`...`) are skipped.
  - Library: `src/lib/link-refactor.ts`
  - Endpoints: `POST /api/admin/refactor/scan`, `POST /api/admin/refactor/apply`
  - URL prefill: `?oldUrl=…&newUrl=…&oldName=…&newName=…` (so other admin pages can deep-link with changes).
- **`/keystatic/validate-links`** — read-only sweep that extracts every `href` / `url` / `linkUrl` / Markdown link / HTML anchor from data files, builds a known-URL set from `src/config.yaml` + `src/data/post/*` + `src/data/product/*` + static pages, and reports any internal URL that doesn't resolve.

**Sitemap is auto-generated by `@astrojs/sitemap`** from the actual routes — renaming `Blog` to `News` only needs the routes to change; no manual sitemap edit is required. (The search index at `src/pages/search-index.json.ts` and the RSS feed at `src/pages/rss.xml.ts` are also regenerated on every build from the live collections, so they follow the renames automatically.)

The navigation editor (`src/pages/keystatic/navigation.astro`) shows a static warning that points at `/keystatic/link-refactor` whenever a nav URL/name is changed. After a successful save, the page also **auto-detects** which text/href pairs were modified and shows a floating banner at the bottom of the page. Each detected change has a one-click "重命名 URL →" / "重命名 文字 →" button that opens the refactor tool with the change pre-filled via `?oldUrl=&newUrl=` or `?oldName=&newName=` query params. The banner also has a "重新加载" button (to refresh the new SHA into the form) and a "收起" button (to dismiss).

## Contact Form (email via Cloudflare Worker)

`/contact` and `/{lang}/contact` are **static** SSG pages (no SSR, no captcha cookie). `POST /api/contact` is handled by a **standalone Cloudflare Worker** (`workers/contact-worker/index.ts`, deployed as `afarer-contact`, zone route `afarer.com/api/contact*` — see `workers/contact-worker/wrangler.toml`). This is **not** a Pages Function; there is no `src/pages/api/contact.ts`.

The worker does:

1. CORS + `OPTIONS` preflight; rejects non-`POST` with 405.
2. Parses a **JSON body** (the Contact widget) or **FormData** (Newsletter widget) via content-type detection. `request.json()` / `request.formData()` are used.
3. Sanitises + validates 10 fields (First/Last Name, Company, Address, Zip, Country, E-mail, TEL with country code, Subject, Message): first + last name and a valid e-mail are required, Message must be ≥ 5 chars.
4. Blocks spam keywords (viagra / cialis / crypto airdrop / investment opportunity / casino / betting) in `message` and `subject`.
5. Optionally sends an email via **Resend** with `Reply-To` set to the submitter — `workers/contact-worker/index.ts`. Cloudflare Email Workers cannot send arbitrary outbound mail, so a transactional service is required.
6. Destination e-mail and Resend key come from **Worker secrets** (`CONTACT_EMAIL_TO`, `CONTACT_RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_FROM_NAME`) — not from repo files.

**Not implemented (legacy docs claimed these):** no HMAC captcha cookie (no `src/lib/contact-captcha.ts`), no AES-256-GCM payload encryption (no `src/data/contact/submissions.enc.json` writer — that file is never appended to anymore), and no rate limiting (`src/lib/rate-limit.ts` exists but is unused). The hidden `email_confirm` honeypot field (`position:absolute; left:-9999px; tabindex=-1; aria-hidden=true`) still exists in the forms but is **ignored** by the worker. `/keystatic/contact-submissions` still reads/decrypts `submissions.enc.json` via GitHub API (`src/lib/contact-crypto.ts`) for legacy records, but nothing writes that file today.

**Security note:** `contact_submissions_pat` and `contact_resend_api_key` in `branding.yaml` are legacy repo-stored values; the worker reads secrets from the Cloudflare env instead. Keep any repo-stored tokens scoped (Contents R/W only) and rotate them periodically.

## Generated Files — Never Edit, Always Regenerate

`src/i18n/generated/` and `public/data/` are **gitignored build artifacts**:

| Artifact                                                              | Generated by                                                                                                                             |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `src/i18n/generated/pages/*.ts` (115 modules)                         | `scripts/_gen-pages.cjs`                                                                                                                 |
| `src/i18n/generated/ui/*.ts` + `ui-all.ts`                            | `scripts/_gen-uiall.cjs` (from `public/data/i18n-config.json`, copied from `src/data/site/i18n-config.json` by `generate-data-json.mjs`) |
| `src/i18n/generated/seo-meta.ts` (572 entries / 78 routes)            | `scripts/_gen-seo-meta.cjs` (from page YAML `meta` blocks)                                                                               |
| `src/i18n/generated/data.ts`, `page-content.json`, `i18n-config.json` | `scripts/generate-data-json.mjs`                                                                                                         |
| `public/data/*.json`                                                  | `scripts/generate-data-json.mjs`                                                                                                         |

After ANY content/route/meta change, regenerate via the build chain (`npm run build`, or the individual script). CI runs the identical steps, so a committed source change always rebuilds them. **`npm run build` failing locally on a missing `seo-meta.ts`/`ui-all.ts` usually means the generation steps were skipped — run the chain.**

## SEO Landing Pages (how to add one)

Per-locale B2B landing pages (e.g. `/fr/bateau-gonflable-fabricant`, `/en/oem-paddle`) follow a strict pattern:

1. **Content:** add page YAML `src/data/pages/{key}.yaml` (EN) + `{lang}/{key}.yaml` translations with `meta` (title/description/keywords), `hero`, `stats`, `features`, `faqs`, `cta`, `geo`
2. **Route:** copy `src/pages/[lang]/oem-paddle.astro` → `src/pages/[lang]/{key}.astro`; it calls `getPageContent(lang, '{key}')` and renders `src/components/widgets/SeoLanding.astro`
3. **Meta:** nothing to wire — `_gen-pages.cjs` + `_gen-seo-meta.cjs` pick it up on next build; `Metadata.astro` reads `seoPageMeta[`${lang}${routePath}`]`

Do NOT create a new widget or copy the whole layout — `SeoLanding` is the single renderer for these pages.

## Internal SEO Dashboards

`/internal/seo/*` (10 static pages: index, brand-os, brand, social, rules, tasks, queries, workflow, geo, pages) are pure-SSG dashboards reading `src/data/content-v2.ts` + `src/data/seo/sample-data.ts` (demo GSC data) through `src/lib/seo/*` analyzers. No AI, no API calls. The old seo-worker (`/api/seo/*`, `/api/geo-score`, `/api/search`) was **deleted** — never link to those endpoints. Site search uses the static `/search-index.json` (prerendered by `src/pages/search-index.json.ts`).

## Workers — 4, not 5

Deployed Workers: **contact-worker, ai-worker, admin-worker, automation-worker** (`workers/*/`, each with its own `wrangler.toml`). The legacy `seo-worker` was removed from the repo; CI deletes its deployed instance (`afarer-seo`) as a no-op safety step. `npm run deploy:workers` deploys exactly these 4.

## Important: Static Output + Edge Locale Middleware

The site is built with `output: 'static'` (`astro.config.ts`) and the edge middleware `functions/_middleware.ts` handles locale detection/redirect and R2 `/images|/files` → `assets.afarer.com` (301). `scripts/patch-worker.mjs` (subdomain routing + `dist/server/wrangler.json` KV injection) targets the `output: 'server'` Cloudflare Workers+Assets build and is **not part of the current `npm run build` chain** — do not rely on it for the current static deployment.

## Iron Rule — Encoding / Garbled Text

### Root cause

On Chinese Windows (codepage 936), PowerShell cmdlets like `Get-Content` and `Set-Content` default to GBK/ANSI, not UTF-8. Reading a UTF-8 YAML file as GBK misinterprets every 2-byte pair in the UTF-8 byte stream as a GBK CJK character, scrambling all non-ASCII text. **Always pass `-Encoding UTF8` to `Get-Content` and `Set-Content` in every PowerShell script that touches translation files.**

### U+FFFD status (all cleared as of Jul 2026)

All ~24,700 U+FFFD characters have been resolved:

1. **GBK roundtrip** fixed ~98% of mojibake (commit 6ed7024)
2. **Original-file contextual repair** (`fix_fffd_v2–v8.cjs`) fixed remaining FFFD by matching each current YAML value against commit `b1f0b9c` originals with LCS similarity + brand normalization
3. **Full-file restore** (`fix_yaml_errors.cjs`) replaced YAML-broken files with brand-normalized originals (fixing both FFFD and structure)

**Current state:** `rg '\uFFFD' src/` returns zero matches in all source files, including generated JSON.

### If new FFFD appears (e.g., after PowerShell scripts without -Encoding UTF8)

The fastest fix is to restore the original from `b1f0b9c` with brand normalization:

```js
const { spawnSync } = require('child_process');
const fs = require('fs');
const rel = 'src/data/pages/ko/home.yaml'; // example
const buf = spawnSync('git', ['show', 'b1f0b9c:' + rel], { encoding: 'buffer' });
fs.writeFileSync(
  rel,
  buf.stdout
    .toString('utf-8')
    .replace(/Aquafarer/g, 'afarer')
    .replace(/aquafarer/g, 'afarer')
);
```

For files renamed in the redesign (e.g. `aquafarer-story.yaml` → `afarer-story.yaml`, `brand-aquafarer.yaml` → `brand-afarer.yaml`), use the original filename.

Then regenerate: `node scripts/generate-data-json.mjs` + `npm run build`.

## Verification Checklist

After changes, always verify:

1. `npm run build` succeeds
2. `npm run check` passes (astro check + ESLint + Prettier)
3. Visual check in browser: homepage, blog, dark mode, mobile menu, contact form (verify submission roundtrip end-to-end: form posts JSON → `afarer-contact` Worker → Resend email)
