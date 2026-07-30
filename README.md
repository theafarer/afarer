# afarer — Astro v6 Multilingual Platform

Multilingual (22 languages) B2B water adventure equipment brand platform for **afarer** (SUPs & Accessories only), built on [Astro v6](https://astro.build) with pure static generation (`output:'static'`), deployed to **Cloudflare Pages + 5 Workers**.

**Scale:** 7,564 pages across 22 languages, 0 build errors
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
npm run build            # Full build → dist/ (7564 pages, ~1-2 min)

# Deploy
npm run deploy           # Build + Pages deploy
npm run deploy:all       # Build + Pages + 5 Workers
npm run deploy:r2        # Upload assets to R2 bucket

# Validation
npm run check            # Astro check + ESLint + Prettier + i18n check
```

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
    │ /api/search → seo-worker
    │ /api/geo-score → seo-worker
    │ /api/seo/* → seo-worker
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
    │ afarer-data → SEO/GEO data, search index, rules
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
| Backend Workers | 5 Workers: contact, seo, ai, admin, automation                |
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
│ │ ├── [lang]/                    # Localized pages (22 languages)
│ │ │ ├── index.astro            # Homepage (SSG)
│ │ │ ├── about.astro            # About page
│ │ │ ├── brand/                 # Brand hub
│ │ │ │ ├── index.astro         # Brand index
│ │ │ │ ├── afarer.astro     # afarer entity page
│ │ │ │ └── team.astro          # Team entity (founder, leadership, 6 profiles)
│ │ │ ├── brand-story.astro      # Brand story
│ │ │ ├── brand-marine-expertise.astro # Marine engineering expertise
│ │ │ ├── brand-global-presence.astro  # Global presence
│ │ │ ├── brand-why-afarer.astro    # Why afarer
│ │ │ ├── certifications.astro   # CE, ISO 9001, UKCA, BSCI, REACH, safety
│ │ │ ├── partners.astro         # Partner programs (distributor, dealer, OEM, etc.)
│ │ │ ├── cases/                 # Case studies hub
│ │ │ ├── contact.astro          # Contact
│ │ │ ├── custom/                # Custom Lab
│ │ │ ├── disclaimer.astro       # Medical disclaimer (legal)
│ │ │ ├── factory/               # Factory, process, equipment
│ │ │ │ ├── index.astro         # Factory overview
│ │ │ │ ├── capacity.astro      # Production capacity
│ │ │ │ ├── process.astro       # Production process
│ │ │ │ ├── quality-lab.astro   # Quality lab & testing
│ │ │ │ ├── equipment.astro     # Equipment & machinery
│ │ │ │ └── oem-capability.astro # OEM/ODM manufacturing
│ │ │ ├── gallery/               # Gallery
│ │ │ ├── guides/                # Buying guides (18 guides × 22 locales)
│ │ │ │ ├── index.astro         # Guides listing
│ │ │ │ └── [slug].astro        # Guide detail
│ │ │ ├── journal/               # Journal
│ │ │ ├── lifestyle/             # Lifestyle
│ │ │ ├── media/                 # Media Center
│ │ │ ├── privacy.astro          # Privacy policy (legal)
│ │ │ ├── quality.astro          # Quality
│ │ │ ├── request-quotation.astro # RFQ page (with B2B fields: application, country, material, engine, uploads)
│ │ │ ├── resources.astro        # Download center & buyer guides
│ │ │ ├── safety.astro           # Safety
│ │ │ ├── solutions/             # Industry solutions
│ │ │ │ ├── index.astro         # Solutions hub
│ │ │ │ ├── by-industry.astro   # By industry
│ │ │ │ ├── by-use-case.astro   # By use case
│ │ │ │ ├── diving-center-boats.astro
│ │ │ │ ├── fishing-boat-solutions.astro
│ │ │ │ ├── marine-tourism-equipment.astro
│ │ │ │ ├── rescue-watercraft.astro
│ │ │ │ └── yacht-tender-solutions.astro
│ │ │ ├── technology.astro       # Technology
│ │ │ ├── terms.astro            # Terms and conditions (legal)
│ │ │ ├── academy/               # Academy index
│ │ │ ├── products/              # Product catalog & detail
│ │ │ ├── use-cases/             # Use-case pages
│ │ │ ├── compare/               # Product comparisons
│ │ │ ├── oem-process.astro      # OEM/ODM Process
│ │ │ ├── engineering-team.astro # Engineering & R&D Team
│ │ │ ├── randdcenter/           # R&D Center
│ │ │ ├── sitemap.xml.ts         # Per-locale sitemap
│ │ │ └── llms.txt.ts            # Per-locale AI knowledge graph
│ │ ├── llms/                     # AI-readable markdown
│ │ │ ├── products/[slug].ts     # Product markdown
│ │ │ ├── news/[slug].ts         # News markdown
│ │ │ ├── guides/[slug].ts       # Guide markdown
│ │ │ ├── v2/[slug].ts           # V2 knowledge markdown
│ │ │ └── pages/[slug].ts        # Standalone page markdown
│ │ ├── llms.txt.ts               # Root llms.txt (prerender)
│ │ ├── llms-full.txt.ts          # Root llms-full.txt (prerender)
│ │ ├── _keystatic/                # Admin panel (SSR-only, moved out for v2 rewrite)
│ │ ├── _login/                    # Login page (SSR-only, moved out for v2 rewrite)
│ │ ├── internal/                 # GEO/SEO dashboards
│ │ ├── news/                     # Blog (all prerender=true)
│ │ ├── [category].astro          # Product category pages
│ │ ├── search.astro              # Client-side search
│ │ ├── faq.astro                 # FAQ
│ │ └── ...                       # 404, privacy, terms, B2B pages
│ ├── components/
│ ├── layouts/
│ ├── lib/
│ ├── i18n/
│ ├── data/
│ │ ├── products.ts               # Product data SSOT (52 products)
│ │ ├── product-texts.ts          # Translated product descriptions (22 langs)
│ │ ├── geo/                      # GEO source data
│ │ │ └── entity.json            # Schema.org Organization entity
│ │ ├── pages/                    # Page YAML content (root = EN, subdir = per locale)
│ │ │ ├── home.yaml
│ │ │ ├── about.yaml
│ │ │ ├── zh/                    # Per-locale page content
│ │ │ ├── fr/
│ │ │ └── ...
│ │ └── ...
│ ├── content/
│ ├── middleware.ts                 # Astro locale middleware
│ └── config.yaml                  # Site configuration
├── public/
│ ├── llms.txt                     # AI brand summary (22-language knowledge graph)
│ ├── llms-full.txt                # Full AI knowledge base (auto-generated, 22 langs)
│ ├── cs/llms.txt                  # Per-locale llms.txt
│ ├── da/llms.txt
│ ├── ...
│ └── .well-known/
│      └── entity.json             # Schema.org Organization (AI entity)
├── functions/
│ └── _middleware.ts                # Cloudflare Pages Functions middleware (locale + R2 redirect)
├── workers/
│ ├── contact-worker/              # Contact form API
│ │ ├── index.ts
│ │ └── wrangler.toml
│ ├── seo-worker/                  # SEO + search API (R2-backed)
│ │ ├── src/
│ │ │ ├── index.ts
│ │ │ ├── search.ts
│ │ │ ├── geo-score.ts
│ │ │ ├── page-inspect.ts
│ │ │ └── seo.ts
│ │ └── wrangler.toml
│ ├── ai-worker/                   # AI chat + embedding + vector search
│ │ ├── index.ts
│ │ └── wrangler.toml
│ ├── admin-worker/                # Admin auth + GitHub CRUD
│ │ ├── index.ts
│ │ └── wrangler.toml
│ └── automation-worker/           # Cron + GEO content generation
│    ├── src/
│    │ ├── index.ts
│    │ ├── cron.ts
│    │ ├── geo-generator.ts
│    │ ├── gsc-fetch.ts
│    │ ├── rule-engine.ts
│    │ ├── task-export.ts
│    │ └── geo-score.ts
│    └── wrangler.toml
├── scripts/                        # Build & utility scripts (40+ files)
├── .github/workflows/actions.yaml  # CI/CD pipeline
├── wrangler.toml                   # Root config (R2 binding only)
└── astro.config.ts                 # Astro build config
```

---

See `TECH.md §3` for full Worker implementation details (wrangler config, 3 MB constraint, endpoints).

## 4. Workers

### 4.1 contact-worker (afarer-contact)
- **Route:** `afarer.com/api/contact*`
- **Methods:** `POST`
- **Features:**
  - JSON body parsing with validation (firstName, lastName, email, message, etc.)
  - Email validation + spam keyword filtering
  - Resend API email sending
  - CORS headers
- **Secrets:** `CONTACT_RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_FROM_EMAIL`, `CONTACT_FROM_NAME`

### 4.2 seo-worker (afarer-seo)
- **Routes:** `afarer.com/api/search`, `/api/geo-score`, `/api/page-inspect`, `/api/seo/*`
- **Binding:** `DATA_BUCKET` (R2 —`afarer-data`)
- **Endpoints:**
  - `GET /api/search?q=...` —Full-text search against `search/index.json` from R2
  - `GET /api/geo-score` —GEO/SEO scoring dashboard
  - `GET /api/page-inspect?url=...` —Page-level SEO inspection
  - `GET /api/seo/analyze` —SEO analysis report
  - `GET /api/seo/tasks` —SEO task list
  - `GET /api/seo/report` —Full SEO report
  - `GET /api/seo/history` —Score history
- **Data source:** All data loaded at runtime from R2 (`afarer-data`), no bundled JSON

### 4.3 ai-worker (afarer-ai)
- **Routes:** `afarer.com/api/chat*`, `/api/ask*`, `/api/search*`, `/api/embed*`, `/api/ai/*`
- **Bindings:** `AI` (Workers AI), `VECTORIZE` (ai-index), `DATA_BUCKET` (R2)
- **Endpoints:**
  - `POST /api/chat` —Conversational chat with RAG (Vectorize + llama-3.2-3b-instruct)
  - `POST /api/ask` —Product recommendation with sources
  - `POST /api/search` —Vector similarity search (top 20 results)
  - `POST /api/embed` —Text embedding via bge-base-en-v1.5
  - `GET /api/quota` —Usage status
  - `GET /api/sitemap` —AI sitemap (22 languages)

### 4.4 admin-worker (afarer-admin)
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

### 4.5 automation-worker (afarer-automation)
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

### 4.6 Worker Constraints

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
| `npm run deploy:all` | Build + Pages + 5 Workers deploy |
| `npm run deploy:r2` | Upload assets to R2 |
| `npm run check` | Astro check + eslint + prettier + i18n |

### 6.2 Build Process

See `TECH.md §2` for the full step-by-step pipeline. In brief:

```
GEO build → Data JSON → GEO files → UI all → Pages → Icons → astro build → Clean → (R2 upload)
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
| Internal dashboards | `/internal/geo-dashboard`, `/internal/seo/*` (pages, rules, queries, tasks, etc.) |
| Automation | Daily cron: GSC fetch → Rule engine → GEO generator → Score report |
| Case Studies | 6 real case studies with outcome metrics, citation JSON-LD, CollectionPage + Dataset schemas |
| Evidence | Product test results with Dataset schema (ISO 2859, pressure hold, AQL 2.5) |

---

---

## 8. Multi-language Content Pipeline

### 8.1 Page YAML Data
All page content is stored as YAML files in `src/data/pages/`:
- **Root level** (e.g., `home.yaml`) —English (default)
- **Language subdirectories** (e.g., `fr/home.yaml`, `de/home.yaml`) —Per-locale translations
- **22 languages** total, each with 55+ page YAML files (including brand-team, certifications, partners, legal pages)

### 8.2 Data-Driven Page Templates
Each page has a `.astro` template under `src/pages/[lang]/` that:
1. Loads YAML content via `getPageContent(lang, 'page-name')`
2. Passes structured data (hero, stats, features, CTA) to reusable widgets
3. Breadcrumbs and metadata are locale-aware via `/${lang}` prefix
4. All CTA action hrefs are auto-prefixed with `/${lang}` for i18n correctness

Page content → YAML data → Auto-generated `src/i18n/generated/pages/*.ts` → Widget-rendered static HTML.

### 8.3 UI Translation Pipeline
1. **Master file:** `public/data/i18n-config.json` —All UI strings for all 22 languages
2. **Generation:** `scripts/_gen-uiall.cjs` reads the master file and generates per-locale TS files
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
| Endpoint | `POST /api/contact` → contact-worker |
| Email | Resend API (to `info@afarer.com`, from `web@mail.afarer.com`) |
| Fields | firstName, lastName, email, message, companyName, address, tel, subject, country, zip |
| Validation | Required fields, email regex, spam keyword filter |
| Captcha | ✓ HMAC-signed math cookie |
| Encryption | ✓ AES-256-GCM on submission data |
| Rate limit | ✓ 5/hr per IP (in-memory sliding window) |
| Honeypot | ✓ Hidden `email_confirm` field |
| Submission storage | ✓ Encrypted to GitHub via PAT |

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

Product data flows from `src/data/products.ts` (52 products SSOT) → page templates → JSON-LD → static HTML. Page content flows from `src/data/pages/*.yaml` (55+ pages × 22 languages) → build-generated TS modules → widget-rendered HTML.

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
- **5 Workers with specific routes:** Only API requests trigger Worker execution
- **R2 data offload:** SEO/GEO data loaded at runtime from R2 (no bundled JSON in Workers) —keeps Workers under 3 MB
- **R2 asset offload:** Images served from `assets.afarer.com` (separate subdomain, no cookie overhead)
- **Remote image handling:** `adaptOpenGraphImages()` in `src/utils/images.ts` bypasses `getImage()` for remote URLs, avoiding Sharp fetch errors on CDN 404s
- **Pages Functions middleware:** Minimal overhead (locale detection + redirect logic)
- **Idempotent GEO generation:** `llms-full.txt` is rebuilt from scratch each build —no duplicate accumulation
- **Worker size limit:** All 5 Workers must stay under 3 MB; use R2 for data, avoid bundling large dependencies

---

*Built with [Astro](https://astro.build) v6 · Deployed on [Cloudflare Pages](https://pages.cloudflare.com)*
