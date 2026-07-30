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
    common/        # Shared: Image, Metadata, Analytics, ToggleTheme
    ui/            # Primitives: Button, Headline, WidgetWrapper, ItemGrid
    widgets/       # Page sections: Hero, Features, Pricing, Header, Footer
    blog/          # Blog: SinglePost, List, Pagination, Tags
    CustomStyles.astro  # CSS variables for colors and fonts
  content.config.ts    # Content Collections schema (Astro v6 location)
  data/post/           # Blog posts (.md, .mdx)
  layouts/             # Layout.astro, PageLayout.astro, MarkdownLayout.astro
  pages/               # File-based routing
  utils/               # blog.ts, images.ts, permalinks.ts, frontmatter.ts
  config.yaml          # Site configuration (loaded as virtual module)
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

## Contact Form (encrypted submissions + email)

`/contact` is **SSR** (`prerender = false`) so the math captcha cookie can be set on every request. `POST /api/contact` is a Cloudflare Pages Function that:

1. Validates the HMAC-signed captcha cookie (`src/lib/contact-captcha.ts`).
2. Sanitises + validates 10 fields (First/Last Name, Company, Address, Zip, Country, E-mail, TEL with country code, Subject, Message).
3. Encrypts the payload with **AES-256-GCM** (key derived from `SESSION_SECRET` env var or fallback) — `src/lib/contact-crypto.ts`.
4. Appends the encrypted record to `src/data/contact/submissions.enc.json` via GitHub API using the **service-account Fine-grained PAT** stored in `branding.yaml` (`contact_submissions_pat`).
5. Optionally sends an email via **Resend** with `Reply-To` set to the submitter — `src/pages/api/contact.ts` `sendEmailViaResend()`. Cloudflare Email Workers cannot send arbitrary outbound mail, so a transactional service is required.

Admin can read submissions at `/keystatic/contact-submissions` (decryption happens in the admin's session). The submissions file is **not** read by `search-index.json.ts` (it only scans `pages/`, `post/`, `product/`).

**Rate limiting + honeypot** (`src/lib/rate-limit.ts` + `src/components/widgets/Contact.astro`): `/api/contact` enforces **5 submissions per IP per hour** via an in-memory sliding window (`contact:<ip>` key). On overflow it returns HTTP 429 with `Retry-After`, `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` headers. The contact form also has a hidden `email_confirm` honeypot field (`position:absolute; left:-9999px; tabindex=-1; aria-hidden=true`); if a bot fills it, the API returns HTTP 200 with a fake UUID but skips both the GitHub write and the email — so the bot can't tell it was caught. The map is per-Worker-isolate (no Cloudflare KV / DO), so under high traffic the effective limit is `5 × isolate_count`. For single-tenant or low-traffic sites this is sufficient.

**Security note:** `contact_submissions_pat` and `contact_resend_api_key` live in the public GitHub repo (bundled into the Cloudflare Worker). Use a separate Fine-grained PAT scoped to a single repo with Contents R/W only, and rotate the Resend key periodically.

## Important: Subdomain Routing Requires `output: 'server'`

With `output: 'static'`, Cloudflare Workers + Assets serves static files directly at the edge **without** calling the Worker's `w.fetch`. The subdomain routing injected by `scripts/patch-worker.mjs` never executes for static paths.

With `output: 'server'`, ALL requests go through the Worker, allowing the injected `w.fetch` override in `dist/server/entry.mjs` to intercept subdomain URLs and rewrite them to path-based URLs before Astro's handler serves the correct localized content.

Do NOT change back to `output: 'static'` unless you remove subdomain routing.

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
3. Visual check in browser: homepage, blog, dark mode, mobile menu, contact form (verify captcha + submission roundtrip end-to-end)
