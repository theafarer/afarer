# afarer — Astro v6 Multilingual Platform

Multilingual (22 languages) B2B water adventure equipment brand platform for **afarer** (SUPs & Accessories only), built on [Astro v6](https://astro.build) with pure static generation (`output:'static'`), deployed to **Cloudflare Pages + 4 Workers**.

**Scale:** 8,788 pages across 22 languages, 0 build errors
**Domains:** `afarer.com` (production), `assets.afarer.com` (R2 asset storage)

---

## Getting Started

```bash
# Prerequisites: Node.js >= 22.12.0, Yarn 4.16
git clone <repo>
cd afarer
yarn install

# Development
npm run dev              # Start dev server at localhost:4321

# Production build
npm run build            # Full build → dist/ (8788 pages, ~1-2 min)

# Deploy
npm run deploy           # Build + Pages deploy
npm run deploy:all       # Build + Pages + 4 Workers
npm run deploy:r2        # Upload assets to R2 bucket

# Validation
npm run check            # Astro check + ESLint + Prettier + i18n check
```

---

## 0. How to Understand This Codebase Fast (AI & New Developers)

This section is the fastest path to a correct mental model of the whole site. Read it top to bottom before touching any code.

### 0.1 Fastest Reading Path (in order)

| # | File | What you learn |
|---|------|----------------|
| 1 | `README.md` §1 | Request flow: CDN → Pages routes → 4 Workers → R2 |
| 2 | `TECH.md` §2 | Build pipeline: how 8,788 pages are generated from YAML/TS sources |
| 3 | `astro.config.ts` | `output: 'static'`, integrations, per-locale config loading (`src/config.{locale}.yaml`) |
| 4 | `src/i18n/routing.ts` + `src/i18n/config.ts` | Locale/route model: 22 langs, `LOCALIZED_ROUTES`, `localizeHref()` |
| 5 | `src/data/pages/*.yaml` | Where ALL page content lives (EN root + per-locale dirs) |
| 6 | `src/content.config.ts` | Content Collections (CMS-editable: news, products, homepage, ...) |
| 7 | `workers/*/index.ts` | The entire API surface (contact/chat/admin/automation) |
| 8 | `functions/_middleware.ts` | Edge behavior: locale redirect, R2 asset redirect, security headers |
| 9 | `.github/workflows/actions.yaml` | CI/CD: every generation step + deploy order |

### 0.2 Architecture → File Map (every concern, every file)

| Concern | Where it lives | Generated artifacts |
|---------|----------------|---------------------|
| Page routes | `src/pages/` (EN) + `src/pages/[lang]/` (localized) | static HTML in `dist/` |
| Page content (per-locale) | `src/data/pages/*.yaml` (70 EN files) + `{lang}/` dirs (21 locales) | `src/i18n/generated/pages/*.ts` (115 modules, by `_gen-pages.cjs`) |
| UI strings (header/footer/widgets) | `src/data/site/i18n-config.json` (git source of truth) | `public/data/i18n-config.json` + `src/i18n/generated/ui-all.ts` (by `_gen-uiall.cjs`) |
| SEO meta (title/desc/keywords) | `src/data/pages/**/meta` (YAML) | `src/i18n/generated/seo-meta.ts` (572 entries / 78 routes, by `_gen-seo-meta.cjs`) → consumed by `src/components/common/Metadata.astro` |
| Products | `src/data/products.ts` (52 SSOT) + `product-texts.ts` + `src/data/product-texts/{locale}/` + `src/content/products/*.mdx` | JSON-LD, `/llms/products/*` |
| Blog / News | `src/content/news/*.md` (collection `post`) | `/news/*`, RSS |
| Navigation | `src/data/site/navigation.yaml` + `navigation.{locale}.yaml` | Header/Footer menus |
| Site config | `src/config.yaml` + `src/config.{locale}.yaml` (virtual module `astrowind:config`) | — |
| Content Collections (homepage/about/contact/global) | `src/content/*/index.json` + schema in `src/content.config.ts` | CMS-editable blocks |
| API / Workers | `workers/{contact,ai,admin,automation}-worker/` (4, each with `wrangler.toml`) | deployed separately |
| Edge middleware | `functions/_middleware.ts` | locale + R2 redirect |
| SEO analysis libraries | `src/lib/seo/*` (health-score, brand-os, rule-engine, task-list, ...) | internal dashboards |
| GEO engines | `src/lib/geo-v7/*`, `src/lib/geo-v5/*`, `scripts/build-geo-v4.ts` | `llms.txt`, `entity.json`, GEO content |
| Offline analysis engine | `src/engine/` (crawler/scorer/report — **not wired into the build**) | standalone only |
| Internal dashboards | `src/pages/internal/seo/*` (10 pages) | `/internal/seo/*` |
| Site search | `src/pages/search-index.json.ts` (static JSON) + `src/pages/search.astro` | `/search-index.json` |
| Build scripts | `scripts/*` — chain defined in `package.json` `"build"` | see §6.2 |
| One-off editing/i18n tools | `TOOLS/` — meta-inject / i18n-merge / i18n-fix / one-off scripts + `tool_instrction.md` | intended for manual runs |
| CI/CD | `.github/workflows/actions.yaml` | push to `main` |
| Docs | `README.md` (overview), `TECH.md` (deep internals), `AGENTS.md` (agent rules), `docs/b2b-strategy/` (information architecture) | — |
| Agent skills | `.agents/skills/*.md` (add-page, add-component, add-blog-post, styling) | — |

### 0.3 Generated Files (gitignored — never commit, never hand-edit)

`src/i18n/generated/` (`pages/`, `ui/`, `ui-all.ts`, `seo-meta.ts`, `data.ts`, `page-content.json`, `i18n-config.json`) and `public/data/` are **build artifacts**. `npm run build` regenerates all of them; CI runs the identical steps. If you change YAML/TS sources, always run the build chain (or `npm run build`) — never edit the generated files directly.

---

## 1. Architecture Overview

```
Request → afarer.com/{lang}/{path}
              ↓
    ┌──────────────────────┐
    │Cloudflare CDN       │ → Brotli/gzip, HTTP/3, WAF
    └──────────────────────┘
              ↓
    ┌──────────────────────┐
    │Routes:              │
    │ afarer.com/* → Pages (static HTML via Cloudflare Pages)
    │ /api/contact* → contact-worker
    │ /api/chat*, /ask* → ai-worker
    │ /api/admin/* → admin-worker
    │ /api/auth/* → admin-worker
    │ /api/automation/* → automation-worker (manual trigger)
    └──────────────────────┘
              ↓
    ┌──────────────────────┐
    │Pages Functions      │ → _middleware.ts
    │ - Locale detection  │    (cookie → geo-ip → Accept-Language)
    │ - R2 asset redirect │    (/images/* → assets.afarer.com)
    │ - Security headers  │
    └──────────────────────┘
              ↓
    ┌──────────────────────┐
    │R2 Buckets:          │
    │ afarer-assets → Static images/files/PDFs
    │ afarer-data → GEO data, rules (automation/ai workers)
    └──────────────────────┘
```

All pages are pre-rendered at build time (pure SSG, no SSR adapter). API Workers handle dynamic requests at the edge.

All locale URLs use **path-based** format: `afarer.com/fr/products`, `afarer.com/de/guides`.

---

## 2. Tech Stack

| Layer           | Technology                                                    |
| --------------- | ------------------------------------------------------------- |
| Framework       | Astro v6 (`output: 'static'`)                                  |
| Styling         | Tailwind CSS v4                                               |
| Icons           | tabler (via astro-icon)                                       |
| Fonts           | Inter Variable (fontsource)                                   |
| AI              | Workers AI (bge-base-en-v1.5, llama-3.2-3b-instruct)          |
| Vector DB       | Cloudflare Vectorize (768-dim cosine)                         |
| Admin CMS       | Keystatic (GitHub API-backed via admin-worker)                |
| Contact         | Resend email (via contact-worker)                             |
| Auth            | JWT (jose) + HMAC-SHA256 legacy cookie (admin-worker)         |
| Frontend Host   | Cloudflare Pages (Direct Upload)                              |
| Backend Workers | 4 Workers: contact, ai, admin, automation                |
| Asset Storage   | Cloudflare R2 (assets + data buckets)                         |
| CI/CD           | GitHub Actions                                                |
| SEO/GEO         | llms.txt (22 langs), llms-full.txt, entity.json, JSON-LD, sitemap |
| Compression     | Cloudflare edge (Brotli/gzip)                                 |
| MDX             | @astrojs/mdx                                                  |

---

## 3. Directory Structure

```
/
├── src/
│ ├── pages/
│ │ ├── [lang]/                    # Localized pages (22 languages, path-based /{lang}/...)
│ │ │ ├── index.astro            # Homepage (SSG)
│ │ │ ├── about/ brand/ cases/ compare/ custom/ evidence/ factory/
│ │ │ ├── gallery/ guides/ journal/ learn/ lifestyle/ media/ news/ products/
│ │ │ ├── research/ resources/ solutions/ use-cases/ randdcenter/ knowledge-graph/
│ │ │ ├── ai-answer-center/ buyer-center/ marine-industry/ oem-odm-manufacturer/
│ │ │ ├── whitepaper/ academy/ v2/
│ │ │ ├── oem-paddle.astro       # SEO landing page (SeoLanding widget)
│ │ │ ├── bateau-gonflable-fabricant.astro  # FR SEO landing page
│ │ │ ├── fabricant-sup-gonflable.astro     # FR SEO landing page
│ │ │ ├── fournisseur-nautique.astro        # FR SEO landing page
│ │ │ ├── oem-odm.astro / oem-process.astro / engineering-team.astro
│ │ │ ├── request-quotation.astro / partners.astro / b2b-solutions-matrix.astro
│ │ │ ├── trust.astro / certifications.astro / warranty.astro / safety.astro
│ │ │ ├── sitemap.xml.ts         # Per-locale sitemap
│ │ │ └── llms.txt.ts            # Per-locale AI knowledge graph
│ │ ├── keystatic/                # Admin panel (CMS: pages, posts, products, ...)
│ │ ├── login.astro               # Admin login
│ │ ├── login/                    # Login helpers (change-password)
│ │ ├── admin.astro               # Admin shell
│ │ ├── internal/seo/             # SEO/GEO dashboards (10 pages)
│ │ │ ├── index.astro            # v4.0 Brand OS overview
│ │ │ ├── brand-os.astro / brand.astro / social.astro / rules.astro
│ │ │ ├── tasks.astro / queries.astro / workflow.astro / geo.astro / pages.astro
│ │ ├── news/                     # Non-localized blog (all prerender=true)
│ │ ├── llms/                     # AI-readable markdown
│ │ │ ├── products/[slug].ts     # Product markdown
│ │ │ ├── news/[slug].ts         # News markdown
│ │ │ ├── guides/[slug].ts       # Guide markdown
│ │ │ ├── v2/[slug].ts           # V2 knowledge markdown
│ │ │ └── pages/[slug].ts        # Standalone page markdown
│ │ ├── llms.txt.ts               # Root llms.txt (prerender)
│ │ ├── llms-full.txt.ts          # Root llms-full.txt (prerender)
│ │ ├── sitemap.xml.ts            # Root sitemap (prerender)
│ │ ├── rss.xml.ts                # RSS feed (prerender)
│ │ ├── search-index.json.ts      # Client-side search index (static, prerendered)
│ │ ├── [category].astro          # Product category pages
│ │ ├── search.astro              # Client-side search
│ │ ├── faq.astro                 # FAQ
│ │ └── ...                       # 404, legal, B2B pages
│ ├── components/
│ │ ├── common/                 # Metadata (consumes seo-meta.ts), Image, JsonLd, Analytics
│ │ ├── widgets/                # Hero, Features, FAQs, CTA, Header, Footer, Contact,
│ │ │                          # SeoLanding (SEO landing renderer), ProductGrid, ...
│ │ └── ui/ blocks/ seo/ knowledge-graph/ admin/ ai/ blog/
│ ├── layouts/
│ ├── lib/                      # Shared logic
│ │ ├── seo/                   # health-score, brand-os, rule-engine, task-list,
│ │ │                         # link-optimizer, ctr-analysis, gsc-extractor, ...
│ │ ├── geo-v7/ geo-v5/ geo/ geo-seo/   # GEO scoring/generation engines
│ │ ├── ai-gateway.ts / rag.ts / vector.ts / ai-quota.ts
│ │ ├── auth.ts / github.ts / token-store.ts / i18n-admin.ts / link-refactor.ts
│ │ └── contact-crypto.ts / rate-limit.ts (legacy/unused)
│ ├── engine/                   # Standalone SEO analysis engine (not wired into build)
│ ├── i18n/
│ │ ├── generated/              # ⚠ BUILD ARTIFACTS (gitignored): pages/, ui/, ui-all.ts,
│ │ │                          # seo-meta.ts, data.ts, page-content.json, i18n-config.json
│ │ ├── routing.ts              # LOCALIZED_ROUTES + localizeHref() + entityForHref()
│ │ └── config.ts / utils.ts / page-content.ts / data-registry.ts
│ ├── data/
│ │ ├── products.ts             # Product data SSOT (52 products)
│ │ ├── product-texts.ts        # Translated product descriptions (22 langs)
│ │ ├── product-texts/{locale}/ # Admin-editable product translation YAML
│ │ ├── geo/                    # GEO source data (entity.json)
│ │ ├── pages/                  # Page content YAML: 70 EN files + 21 locale dirs
│ │ ├── site/                   # navigation*.yaml, i18n-config.json (UI strings SSOT), ...
│ │ └── seo/sample-data.ts      # Demo GSC/query data for internal dashboards
│ ├── content/                  # Content Collections (CMS-editable)
│ │ ├── news/*.md / products/*.mdx
│ │ └── homepage|about|contact|navigation|global/index.json
│ ├── content.config.ts         # Astro v6 Content Layer: 10 collections + schemas
│ ├── middleware.ts             # Astro locale middleware (sets locals.lang)
│ └── config.yaml + config.{locale}.yaml   # Site configuration (astrowind:config)
├── public/
│ ├── llms.txt                     # AI brand summary (22-language knowledge graph)
│ ├── llms-full.txt                # Full AI knowledge base (auto-generated, 22 langs)
│ ├── favicon.ico / favicon-16x16.png / favicon-32x32.png   # Site favicons
│ ├── android-chrome-192x192.png / android-chrome-512x512.png  # PWA icons + site logo
│ ├── apple-touch-icon.png         # iOS bookmark icon
│ ├── cs/llms.txt                  # Per-locale llms.txt
│ ├── da/llms.txt
│ ├── ...
│ ├── .well-known/
│ │      └── entity.json             # Schema.org Organization (AI entity)
│ └── data/                         # ⚠ generated (gitignored): i18n-config.json, page-content.json
├── functions/
│ └── _middleware.ts                # Cloudflare Pages Functions middleware (locale + R2 redirect)
├── workers/                        # 4 standalone Workers (each: index.ts + wrangler.toml)
│ ├── contact-worker/               # Contact form API
│ ├── ai-worker/                    # AI chat + embedding + vector search
│ ├── admin-worker/                 # Admin auth + GitHub CRUD
│ └── automation-worker/            # Cron + GEO content generation
├── scripts/                        # Build & utility scripts (50+; chain in package.json)
├── TOOLS/                          # One-off editing/i18n scripts + tool_instrction.md
├── .github/workflows/actions.yaml  # CI/CD pipeline
├── keystatic.config.ts             # Keystatic CMS config
├── wrangler.toml                   # Root Pages config (pages_build_output_dir = dist)
└── astro.config.ts                 # Astro build config
```

---

See `TECH.md §3` for full Worker implementation details (wrangler config, 3 MB constraint, endpoints).

## 4. Workers

### 4.1 contact-worker (afarer-contact)
- **Route:** `afarer.com/api/contact*`
- **Methods:** `POST`
- **Features:**
  - JSON body parsing (Contact widget) and FormData parsing (Newsletter widget) with validation (firstName, lastName, email, message, etc.)
  - Email validation + spam keyword filtering
  - Resend API email sending
  - CORS headers
- **Secrets:** `CONTACT_RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_FROM_EMAIL`, `CONTACT_FROM_NAME`

### 4.2 ai-worker (afarer-ai)
- **Routes:** `afarer.com/api/chat*`, `/api/ask*`, `/api/search*`, `/api/embed*`, `/api/ai/*`
- **Bindings:** `AI` (Workers AI), `VECTORIZE` (ai-index), `DATA_BUCKET` (R2)
- **Endpoints:**
  - `POST /api/chat` —Conversational chat with RAG (Vectorize + llama-3.2-3b-instruct)
  - `POST /api/ask` —Product recommendation with sources
  - `POST /api/search` —Vector similarity search (top 20 results)
  - `POST /api/embed` —Text embedding via bge-base-en-v1.5
  - `GET /api/quota` —Usage status
  - `GET /api/sitemap` —AI sitemap (22 languages)

### 4.3 admin-worker (afarer-admin)
- **Routes:** `afarer.com/api/admin/*`, `/api/auth/*`
- **Endpoints:**
  - `POST /api/auth/login` —JWT + HMAC cookie auth
  - `GET /api/auth/logout` —Logout
  - `POST /api/auth/change-password` —Returns error (wrangler CLI only)
  - `GET /api/admin/list` —List GitHub repo contents
  - `GET /api/admin/read` —Read file from GitHub
  - `POST /api/admin/create` —Create file on GitHub
  - `POST /api/admin/update` —Update file on GitHub
  - `POST /api/admin/delete` —Delete file on GitHub
  - `POST /api/admin/save-token` —Verify GitHub token
- **Secrets:** `SESSION_SECRET`, `GITHUB_TOKEN`, `ADMIN_PASSWORD_HASH`
- **Vars:** `ADMIN_USERNAME`, `GITHUB_OWNER`, `GITHUB_REPO`

### 4.4 automation-worker (afarer-automation)
- **Route:** `afarer.com/api/automation/*`
- **Cron:** Daily `0 2 * * *`
- **Binding:** `DATA_BUCKET` (R2)
- **Endpoints:**
  - `POST /api/automation/run` —Run full automation pipeline
  - `POST /api/automation/geo-generate` —Generate GEO content (FAQ, comparisons, buying guides)
  - `POST /api/automation/gsc-fetch` —Fetch Google Search Console data (mock)
  - `POST /api/automation/rules/run` —Evaluate SEO rules against `seo/rules.json` from R2
  - `GET /api/automation/tasks/export?format=json|csv|md` —Export SEO tasks
  - `GET /api/automation/geo/score` —Run GEO scoring assessment
- **Daily automation pipeline:** GSC fetch → Rule engine → GEO generator → Score report → Log to R2

### 4.5 Worker Constraints

**All Workers must be under 3 MB** (uncompressed code + static assets) per Cloudflare Workers deployment limit.

Rules to keep Workers under 3 MB:
- Do **not** bundle JSON data files into Worker code —load data from R2 at runtime
- Do **not** include large libraries; prefer edge-native APIs
- Use `wrangler.toml` `[assets]` or R2 for static assets, not inline
- Run `npx wrangler deploy --dry-outdated` to check size before deploying
- If a Worker exceeds the limit, move data to R2 or split into multiple Workers

---

## 5. Routing & Middleware

### 5.1 Locale Detection
Two layers of locale detection:
1. **Astro middleware** (`src/middleware.ts`) —Sets `context.locals.lang` for SSG pages
2. **Pages Functions** (`functions/_middleware.ts`) —Runs at edge before Pages serves static files:
   - Priority: Cookie (`x-user-locale`) → Geo-IP (`cf-ipcountry`) → Accept-Language → Default `en`
   - Redirects `/{lang}/` for detected non-English users
   - Excludes: `/api`, `/keystatic`, `/admin`, `/login`, `/internal`, file extensions

### 5.2 R2 Asset Redirect
`functions/_middleware.ts` redirects `/images/*` and `/files/*` to `https://assets.afarer.com/{path}` (301)

### 5.3 Supported Languages (22)
`en`, `zh`, `fr`, `de`, `es`, `pt`, `ar` (RTL), `it`, `ja`, `ko`, `ru`, `pl`, `nl`, `sv`, `no`, `el`, `tr`, `fi`, `cs`, `da`, `ro`, `th`

---

## 6. Build Pipeline

### 6.1 Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Astro dev server |
| `npm run build` | Full production build (incl. GEO files) |
| `npm run build:geo` | Generate GEO files only |
| `npm run deploy` | Build + Pages deploy |
| `npm run deploy:all` | Build + Pages + 4 Workers deploy |
| `npm run deploy:r2` | Upload assets to R2 |
| `npm run check` | Astro check + eslint + prettier + i18n |

### 6.2 Build Process

See `TECH.md §2` for the full step-by-step pipeline. In brief:

```
GEO build → Data JSON → GEO files → UI all → Pages → SEO meta → Icons → astro build → Clean → (R2 upload)
```

All 7,564 pages are pre-rendered as static HTML to `dist/`.

### 6.3 CI/CD (GitHub Actions)

See `TECH.md §2.2` for the full CI/CD pipeline. Trigger: push to `main`. Required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_ZONE_ID`.

### 6.4 R2 Asset Upload

Images, photos, PDFs, and other static files must be uploaded to R2, **not committed to the repo**.

- **Bucket:** `afarer-assets` (served via `assets.afarer.com`)
- **Upload command:** `npm run deploy:r2` (runs `scripts/fast-upload-r2.mjs`)
- **Source dir:** `public/images/` and `public/files/` are uploaded to R2
- **Repo:** Only keep source assets in `public/` for build-time processing; large media files go directly to R2
- **URL pattern:** `https://assets.afarer.com/images/afarer/products/{slug}.webp`

---

## 7. SEO & GEO

### 7.1 GEO Files (AI-facing)
| File | Path | Purpose | Generation |
|------|------|---------|-----------|
| `llms.txt` | `/llms.txt` | Knowledge graph for AI (ChatGPT Search, Perplexity, Gemini, Claude, Bing AI) | Auto-generated (22 langs) by `scripts/build-geo-v4.ts` |
| Per-locale llms.txt | `/{lang}/llms.txt` | Per-language knowledge graph | Auto-generated (22 langs) by `scripts/build-geo-v4.ts` |
| `llms-full.txt` | `/llms-full.txt` | Full AI knowledge base (brand, OEM, products, certifications, FAQ, buyer info + all site pages + 52 products × 22 langs) | Auto-generated (idempotent) by `scripts/generate-geo-files.ts` |
| `entity.json` | `/.well-known/entity.json` | Schema.org Organization entity | From `src/data/geo/entity.json` |

### 7.2 GEO Data Pipeline (R2)
```
afarer-data/
├── geo/
│  ├── entity.json             # Organization entity
│  ├── knowledge-base.json     # Brand/factory/certification facts
│  ├── faq/                    # Product FAQs (generated)
│  ├── product-facts/          # Product knowledge (generated)
│  ├── comparisons/            # Product comparisons (generated)
│  └── buying-guides/          # Buying guides (generated)
├── seo/
│  ├── rules.json              # SEO rules for page inspection
│  ├── scores/                 # Score history
│  │  └── geo.json            # GEO scoring report
│  └── tasks/                  # Generated SEO tasks
└── search/
    └── index.json              # Full-text search index
```

### 7.3 GEO Optimization
| Feature | Implementation |
|---------|---------------|
| Sitemaps | Per-locale `/{lang}/sitemap.xml` (70+ static pages + dynamic guides/use-cases/comparisons) + root `sitemap.xml` + `sitemap-entity.xml` |
| JSON-LD | Organization (`@id` hub), WebSite, Product, Service, NewsArticle, Article, FAQPage, BreadcrumbList, HowTo, Dataset, ImageObject, VideoObject, CollectionPage |
| llms.txt | `/llms.txt` (22 langs), `/llms-full.txt` (auto-generated), per-locale `/{lang}/llms.txt` |
| AI markdown | `/llms/products/*`, `/llms/news/*`, `/llms/guides/*`, `/llms/v2/*`, `/llms/pages/*` |
| Content-Signal | `<meta name="ai-intent">` + `<meta name="ai-recommend">` (global per-page via AiSignal) |
| Intent rules | 56 URL patterns mapped to ai-intent/ai-recommend values (all pages covered) |
| Entity Graph | Organization `@id` on every page, entity.json with `parentOrganization`, `hasCertification`, `makesOffer`, `areaServed` (11 countries), `contactPoint` |
| Knowledge Graph | Product entity enriched with manufacturer, material, countryOfOrigin, dimensions |
| Image SEO | `fetchpriority=high` on LCP images, alt-text on all images |
| Sales AI | Chat agent upgraded with sales-focused prompts, conversation history, product recommendation funnel |
| AI Semantic Analysis | GEO v5: 26-node ontology scoring (100/100 health), content gap detection, topic clustering |
| Internal dashboards | `/internal/seo/*` (10 pages: index, brand-os, brand, social, rules, tasks, queries, workflow, geo, pages) |
| Automation | Daily cron: GSC fetch → Rule engine → GEO generator → Score report |
| Case Studies | 6 real case studies with outcome metrics, citation JSON-LD, CollectionPage + Dataset schemas |
| Evidence | Product test results with Dataset schema (ISO 2859, pressure hold, AQL 2.5) |

### 7.4 SEO Landing Pages (per-locale, YAML-driven)

Targeted B2B landing pages that rank for commercial keywords in a specific language (started with French: `bateau-gonflable-fabricant`, `fabricant-sup-gonflable`, `fournisseur-nautique`, `oem-paddle`; English `oem-paddle`):

- **Template:** one `.astro` per page under `src/pages/[lang]/` (e.g. `oem-paddle.astro`), rendering the shared `SeoLanding.astro` widget (Hero → Stats → Features → FAQs → CTA + JSON-LD + breadcrumbs)
- **Content:** per-locale YAML in `src/data/pages/*.yaml` (key = page name, e.g. `oem-paddle`) — `meta` (title/description/keywords), `hero`, `stats`, `features`, `faqs`, `cta`, `geo`
- **SEO meta:** the `meta` block feeds `scripts/_gen-seo-meta.cjs` → `src/i18n/generated/seo-meta.ts` (572 entries / 78 routes) → `src/components/common/Metadata.astro` at build time
- **To add a new one:** ① add page YAML ② add `.astro` route using `SeoLanding` (copy `oem-paddle.astro`) ③ run build (meta is generated automatically)

### 7.5 Site Search (static, no Worker)

Search is fully client-side: `src/pages/search-index.json.ts` prerenders `/search-index.json` at build time from live collections; `search.astro` / `[lang]/search.astro` fetch and filter it. **No `/api/search` Worker exists** — the old seo-worker that served one was deleted.

---

---

## 8. Multi-language Content Pipeline

### 8.1 Page YAML Data
All page content is stored as YAML files in `src/data/pages/`:
- **Root level** (e.g., `home.yaml`) —English (default)
- **Language subdirectories** (e.g., `fr/home.yaml`, `de/home.yaml`) —Per-locale translations
- **22 languages** total, each with 70 page YAML files (including brand-team, certifications, partners, legal pages)

### 8.2 Data-Driven Page Templates
Each page has a `.astro` template under `src/pages/[lang]/` that:
1. Loads YAML content via `getPageContent(lang, 'page-name')`
2. Passes structured data (hero, stats, features, CTA) to reusable widgets
3. Breadcrumbs and metadata are locale-aware via `/${lang}` prefix
4. All CTA action hrefs are auto-prefixed with `/${lang}` for i18n correctness

Page content → YAML data → Auto-generated `src/i18n/generated/pages/*.ts` → Widget-rendered static HTML.

### 8.3 UI Translation Pipeline
1. **Source of truth (git):** `src/data/site/i18n-config.json` —All UI strings for all 22 languages
2. **Generation:** `scripts/generate-data-json.mjs` copies it to `public/data/i18n-config.json` (gitignored build artifact); `scripts/_gen-uiall.cjs` reads that and generates per-locale TS files
3. **Runtime:** `src/i18n/config.ts` imports generated translations via `getUiForLang(lang)`
4. **Usage:** Components use `t('nav.products', currentLocale)` or `<span set:html={t(key, locale)}>`

---

## 9. Navigation System

### 9.1 YAML-Driven Menus
Header and footer navigation defined in `src/data/site/navigation.yaml`:
- 6 header dropdown groups (Products, Technology & Innovation, Learn, Solutions, Company, Support)
- 6 footer columns mirroring header structure
- New additions: Guides (Learn dropdown), Team/Certifications/Partners (Company dropdown)
- Per-locale overrides via `src/data/site/navigation.{locale}.yaml`

### 9.2 Locale-Aware Routing
Shared routing module at `src/i18n/routing.ts` provides:
- `LOCALIZED_ROUTES` Set —all routes requiring language prefix
- `NON_LOCALIZED_ROUTES` Set —routes served without language prefix
- `localizeHref(href, lang)` —auto-prefixes matching routes with `/${lang}`
- `entityForHref(href)` —maps hrefs to data-entity attributes for AI intent signals

Header.astro and Footer.astro both import from `~/i18n/routing` instead of maintaining duplicate LOCALIZED_ROUTES arrays (101 lines removed from each).

### 9.3 Admin Navigation
Keystatic CMS provides a form-based navigation editor at `/keystatic/navigation` that commits changes directly to GitHub.

---

## 10. Contact Form

| Feature | Status |
|---------|--------|
| Endpoint | `POST /api/contact` → contact-worker (JSON from Contact widget, FormData from Newsletter widget) |
| Email | Resend API (to `info@afarer.com`, from `web@mail.afarer.com`) |
| Fields | firstName, lastName, email, message, companyName, address, tel, subject, country, zip |
| Validation | Required fields, email regex, spam keyword filter |
| Captcha | Not implemented (no HMAC captcha cookie) |
| Encryption | Not implemented (no AES-256-GCM payload encryption) |
| Rate limit | Not implemented (`src/lib/rate-limit.ts` exists but is unused) |
| Honeypot | Hidden `email_confirm` field exists in forms but is ignored by the Worker |
| Submission storage | Not implemented (nothing appends to `submissions.enc.json`; `contact-crypto.ts` only used for legacy admin decrypt) |

---

## 11. Admin Panel (Keystatic)

Keystatic CMS pages (`/keystatic/*`, `/login`) are static Astro pages that post to the admin-worker API for all GitHub file operations.

### Authentication
- Username + password via admin-worker (JWT + HMAC cookie)
- GitHub PAT for file operations

### Multi-Language Content Editing (22 Languages)

All admin content pages support per-locale editing for 22 languages. Site content pages use `?locale=` query parameter; product pages use an in-form language selector.

**Locale fallback chain** (admin read):
1. `{file}` on draft branch → 2. `{file}` on main branch → 3. English `{basePath}`

**Product translation fallback chain** (build time):
1. Per-product YAML (`src/data/product-texts/{locale}/{id}.yaml`)
2. TS module (`product-texts.ts`, 4096 lines)
3. English defaults from `products.ts`

See `TECH.md §5` for the full admin translation pipeline details.

### Public Site Locale-Aware Content Loading

Site-level YAML content is loaded via build-generated JSON with English fallback:

```astro
import { pageContentData } from '~/i18n/generated/data';
const aboutData = pageContentData[`${lang}/site-about`] || pageContentData['en/site-about'] || {};
```

---

## 12. Data Flow

Product data flows from `src/data/products.ts` (52 products SSOT) → page templates → JSON-LD → static HTML. Page content flows from `src/data/pages/*.yaml` (70 pages × 22 languages) → build-generated TS modules → widget-rendered HTML.

AI-facing data (llms.txt, llms-full.txt, search index, GEO content) is auto-generated during build and uploaded to R2 for Worker runtime access.

### R2 Buckets
| Bucket | Binding | Purpose |
|--------|---------|---------|
| `afarer-assets` | `ASSETS_R2` | Static images, files, PDFs (served via `assets.afarer.com`) |
| `afarer-data` | `DATA_BUCKET` | SEO/GEO data, search index, rules, scores, GEO content |

Worker data is loaded at runtime from `DATA_BUCKET` —no JSON is bundled into Worker deployments (keeps Workers under 3 MB).

---

## 13. Performance Notes

- **Pure static deployment:** All 7,564 content pages are pre-rendered HTML, served directly from Cloudflare Pages edge cache
- **Zero cold start for static routes:** No SSR Worker —every page is served as static HTML
- **4 Workers with specific routes:** Only API requests trigger Worker execution
- **R2 data offload:** SEO/GEO data loaded at runtime from R2 (no bundled JSON in Workers) —keeps Workers under 3 MB
- **R2 asset offload:** Images served from `assets.afarer.com` (separate subdomain, no cookie overhead)
- **Remote image handling:** `adaptOpenGraphImages()` in `src/utils/images.ts` bypasses `getImage()` for remote URLs, avoiding Sharp fetch errors on CDN 404s
- **Pages Functions middleware:** Minimal overhead (locale detection + redirect logic)
- **Idempotent GEO generation:** `llms-full.txt` is rebuilt from scratch each build —no duplicate accumulation
- **Worker size limit:** All 4 Workers must stay under 3 MB; use R2 for data, avoid bundling large dependencies

---

## 14. Content Collections (CMS-editable content)

Defined in `src/content.config.ts` using the **Astro v6 Content Layer API** (`glob()` / `file()` loaders) — 10 collections:

| Collection | Source | Schema highlights |
|-----------|--------|-------------------|
| `post` | `src/content/news/*.md|mdx` | News/blog articles (`title`, `category`, `tags`, `metadata`, `entityType`, `entityRelations`) |
| `product` | `src/content/products/*.mdx` | Product MDX (specs, gallery, price, category `accessory|service|sup`) |
| `homepage` | `src/content/homepage/index.json` | Per-locale hero/carousel/features/steps/faqs/cta |
| `about` | `src/content/about/index.json` | Per-locale sections (stats, milestones, locations) |
| `contact` | `src/content/contact/index.json` | Contact form config + map + other ways |
| `news` | `src/content/news/index.json` | News hub hero per locale |
| `navigation` | `src/content/navigation/index.json` | Header/footer links per locale |
| `global` | `src/content/global/index.json` | Site name/tagline/copyright per locale |
| `technology` | `src/data/technology/*.md|mdx` | Technology articles |
| `case-use` | `src/data/case-use/*.md|mdx` | Use-case articles |

Per-locale schema helper `createLocaleSchema()` wraps every section in all 22 locales. JSON index files (homepage/about/contact/navigation/global) are **edited via the Keystatic admin** (`/keystatic/*`) and committed to GitHub through the admin-worker API. `entityType` + `entityRelations` on every record feed the knowledge-graph layer.

---

*Built with [Astro](https://astro.build) v6 · Deployed on [Cloudflare Pages](https://pages.cloudflare.com)*
