/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { products } from '../src/data/products';
import { productTexts } from '../src/data/product-texts';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const LLMS_FULL_TXT = path.join(PUBLIC, 'llms-full.txt');
const LLMS_TXT = path.join(PUBLIC, 'llms.txt');
const PAGES_DIR = path.join(ROOT, 'src', 'data', 'pages');
const WELL_KNOWN_DIR = path.join(PUBLIC, '.well-known');
const ENTITY_JSON = path.join(WELL_KNOWN_DIR, 'entity.json');
// Committed two-pass manifest of the previous build's rendered routes
// (no trailing slashes). Used to filter the Site Pages section so
// llms-full.txt only lists URLs that actually resolve (see
// scripts/_gen-route-manifest.cjs for the generation logic).
const ROUTE_MANIFEST = path.join(ROOT, 'src', 'i18n', 'generated', 'route-manifest.json');

const SITE_URL = 'https://afarer.com';

function loadRenderedRoutes(): Set<string> {
  try {
    const arr = JSON.parse(fs.readFileSync(ROUTE_MANIFEST, 'utf8')) as unknown;
    if (Array.isArray(arr) && arr.length > 0 && arr.every((p) => typeof p === 'string')) {
      return new Set(arr as string[]);
    }
  } catch {
    /* fall through */
  }
  return new Set();
}

const RENDERED_ROUTES = loadRenderedRoutes();

// Flat data slugs (e.g. 'brand-team') back nested routes ('/[lang]/brand/team/')
// whose URL the YAML filename cannot express. Derive the real URL by scanning
// src/pages/** for the .astro files that import each slug's generated page-data
// module (src/i18n/generated/pages/<slug>.ts) — the importing file's path IS
// the route shape.
const PAGES_SRC_DIR = path.join(ROOT, 'src', 'pages');

function buildSlugTemplates(): Map<string, string[]> {
  const map = new Map<string, string[]>();
  const walk = (dir: string) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.astro')) {
        const content = fs.readFileSync(p, 'utf8');
        for (const m of content.matchAll(/generated\/pages\/([\w.-]+)\.ts/g)) {
          let rel = path.relative(PAGES_SRC_DIR, p).replace(/\\/g, '/');
          rel = rel.replace(/\.astro$/, '').replace(/\[lang\]/g, '{lang}');
          if (rel.endsWith('/index')) rel = rel.slice(0, -'/index'.length);
          else if (rel === 'index') rel = '';
          // dynamic segments other than [lang] cannot be resolved from data
          if (rel.includes('[')) continue;
          const tmpl = '/' + rel;
          if (!map.has(m[1])) map.set(m[1], []);
          if (!map.get(m[1])!.includes(tmpl)) map.get(m[1])!.push(tmpl);
        }
      }
    }
  };
  walk(PAGES_SRC_DIR);
  return map;
}

const SLUG_TEMPLATES = buildSlugTemplates();

const LANGUAGES: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  pt: 'Português',
  ar: 'العربية',
  it: 'Italiano',
  ru: 'Русский',
  pl: 'Polski',
  nl: 'Nederlands',
  sv: 'Svenska',
  no: 'Norsk',
  el: 'Ελληνικά',
  tr: 'Türkçe',
  fi: 'Suomi',
  cs: 'Čeština',
  da: 'Dansk',
  ro: 'Română',
  th: 'ไทย',
  hr: 'Hrvatski',
  hu: 'Magyar',
  sk: 'Slovenčina',
  bg: 'Български',
  sl: 'Slovenščina',
  sr: 'Српски',
  id: 'Bahasa Indonesia',
  he: 'עברית',
  ms: 'Bahasa Melayu',
  lt: 'Lietuvių',
  lv: 'Latviešu',
  et: 'Eesti',
  tl: 'Tagalog',
};

const CATEGORY_LABELS: Record<string, string> = {
  INFLATABLE: 'Inflatable Boats',
  SUP: 'SUP Paddle Boards',
  ACCESSORY: 'Accessories',
};

function readSource(file: string): string | null {
  try {
    return fs.readFileSync(path.join(ROOT, 'src', 'data', 'geo', file), 'utf8');
  } catch {
    return null;
  }
}

function extractPageTitle(content: string): string | null {
  const parsed = yaml.load(content) as Record<string, any>;
  if (!parsed || typeof parsed !== 'object') return null;
  for (const key of Object.keys(parsed)) {
    const val = parsed[key];
    if (val && typeof val === 'object' && val.title) {
      return String(val.title)
        .replace(/\{SITE\}/g, 'Afarer')
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
  }
  return null;
}

function getPageUrls(): string[] {
  const urls: string[] = [];
  const seen = new Set<string>();
  // Manifest paths carry no trailing slash; the middleware serves root
  // (non-locale) URLs by rewriting to /en/<path>, so both forms count.
  const isRendered = (noSlashPath: string): boolean =>
    RENDERED_ROUTES.size === 0 || RENDERED_ROUTES.has(noSlashPath) || RENDERED_ROUTES.has(`/en${noSlashPath}`);

  // Second chance for content-only slugs: resolve the real (usually nested)
  // URL of the page that imports this slug's generated page-data module.
  // lang === null -> root (EN) YAML; otherwise a locale YAML.
  const resolveAliasUrl = (slug: string, lang: string | null): string | null => {
    const tmpls = SLUG_TEMPLATES.get(slug);
    if (!tmpls || tmpls.length === 0) return null;
    const candidates: string[] = [];
    if (lang === null) {
      const rootTmpl = tmpls.find((t) => !t.includes('{lang}'));
      if (rootTmpl) candidates.push(rootTmpl);
      for (const t of tmpls) {
        if (t.includes('{lang}')) candidates.push(t.replace(/^\/\{lang\}/, ''));
      }
    } else {
      for (const t of tmpls) {
        if (t.includes('{lang}')) candidates.push(t.replace(/\{lang\}/g, lang));
      }
    }
    for (const c of candidates) {
      const urlPath = c.endsWith('/') ? c : `${c}/`;
      if (urlPath === '/' || urlPath === '/en/') continue; // homepage: not a Site Pages entry
      if (lang === null ? isRendered(urlPath.slice(0, -1)) : RENDERED_ROUTES.has(urlPath.slice(0, -1))) {
        return urlPath;
      }
    }
    return null;
  };

  let skipped = 0;
  let aliased = 0;
  const entries = fs.readdirSync(PAGES_DIR);
  for (const entry of entries) {
    const entryPath = path.join(PAGES_DIR, entry);
    if (fs.statSync(entryPath).isDirectory()) {
      const lang = entry;
      if (!LANGUAGES[lang]) continue;
      const langFiles = fs.readdirSync(entryPath);
      for (const lf of langFiles) {
        if (!lf.endsWith('.yaml')) continue;
        const name = lf.replace(/\.yaml$/, '');
        let urlPath: string;
        if (RENDERED_ROUTES.has(`/${lang}/${name}`)) {
          urlPath = `/${lang}/${name}/`;
        } else {
          const alias = resolveAliasUrl(name, lang);
          if (!alias) {
            // content-only YAML: consumed via getPageContent() but no route renders this URL
            skipped++;
            continue;
          }
          urlPath = alias;
          aliased++;
        }
        const url = SITE_URL + urlPath;
        if (seen.has(url)) continue;
        seen.add(url);
        const content = fs.readFileSync(path.join(entryPath, lf), 'utf8');
        const title = extractPageTitle(content);
        urls.push(title ? `- ${url} — ${title}` : `- ${url}`);
      }
    } else if (entry.endsWith('.yaml') && !entry.startsWith('_')) {
      const name = entry.replace(/\.yaml$/, '');
      let urlPath: string;
      if (isRendered(`/${name}`)) {
        urlPath = `/${name}/`;
      } else {
        const alias = resolveAliasUrl(name, null);
        if (!alias) {
          skipped++;
          continue;
        }
        urlPath = alias;
        aliased++;
      }
      const url = SITE_URL + urlPath;
      if (seen.has(url)) continue;
      seen.add(url);
      const content = fs.readFileSync(entryPath, 'utf8');
      const title = extractPageTitle(content);
      urls.push(title ? `- ${url} — ${title}` : `- ${url}`);
    }
  }

  urls.sort();
  if (skipped > 0) console.log(`[geo]   ${skipped} content-only page files skipped (no rendered route)`);
  if (aliased > 0) console.log(`[geo]   ${aliased} flat slugs resolved to their nested route URLs`);
  return urls;
}

function getProductLines(): string[] {
  const lines: string[] = [];

  const allLangs = Object.keys(LANGUAGES);
  // English first, then alphabetical
  const sortedLangs = ['en', ...allLangs.filter((l) => l !== 'en').sort()];

  for (const lang of sortedLangs) {
    const langName = LANGUAGES[lang];
    const prefix = lang === 'en' ? '' : ` (${lang})`;
    const heading = lang === 'en' ? 'English' : `${langName}${prefix}`;
    lines.push(`\n### ${heading}\n`);

    const categories = ['INFLATABLE', 'SUP', 'ACCESSORY'];
    for (const cat of categories) {
      const catProducts = products.filter((p) => p.category === cat);
      if (catProducts.length === 0) continue;

      lines.push(`#### ${CATEGORY_LABELS[cat]}\n`);

      for (const p of catProducts) {
        const localizedName = productTexts[lang]?.[p.id]?.name || p.name;
        const url = `${SITE_URL}/products/${p.id}/`;
        lines.push(`- ${url} — ${localizedName}`);
      }
      lines.push('');
    }
  }

  return lines;
}

function readGeoFacts(): string[] {
  const lines: string[] = [];
  const geoDir = path.join(ROOT, 'src', 'data', 'geo');
  try {
    const files = fs.readdirSync(geoDir);
    for (const file of files.sort()) {
      if (!file.endsWith('.json') || file === 'entity.json') continue;
      const content = fs.readFileSync(path.join(geoDir, file), 'utf8');
      const parsed = JSON.parse(content);
      lines.push(
        `### ${file
          .replace('.json', '')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase())}`
      );
      lines.push('');
      lines.push('```json');
      lines.push(JSON.stringify(parsed, null, 2));
      lines.push('```');
      lines.push('');
    }
  } catch {
    // geo dir not found
  }
  return lines;
}

function main(): void {
  fs.mkdirSync(WELL_KNOWN_DIR, { recursive: true });

  // Ensure llms.txt exists
  if (!fs.existsSync(LLMS_TXT)) {
    fs.writeFileSync(
      LLMS_TXT,
      `# Aquafarer\n\nAquafarer is a professional OEM/ODM manufacturer of inflatable water sports equipment.\n`
    );
    console.log('[geo] Created default llms.txt');
  }

  // Build llms-full.txt from scratch (idempotent)
  const baseParts: string[] = [];

  // Static base content — read existing file up to the auto-generated sections
  if (fs.existsSync(LLMS_FULL_TXT)) {
    const existing = fs.readFileSync(LLMS_FULL_TXT, 'utf8');
    const sitePagesIdx = existing.indexOf('\n## Site Pages');
    let base = sitePagesIdx !== -1 ? existing.slice(0, sitePagesIdx) : existing;
    // Strip any previously appended Company Facts sections (idempotency:
    // older builds appended a fresh section on every run)
    const factsIdx = base.indexOf('\n## Company Facts');
    if (factsIdx !== -1) {
      base = base.slice(0, factsIdx);
    }
    baseParts.push(base.trim());
  } else {
    // Default base
    baseParts.push(
      `# Aquafarer Knowledge Base\n\nAquafarer is a water sports equipment manufacturer specializing in inflatable watercraft.`
    );
  }

  // Generate structured GEO facts section
  console.log('[geo] Reading structured GEO data...');
  const geoFacts = readGeoFacts();
  if (geoFacts.length > 0) {
    baseParts.push('\n\n## Company Facts\n');
    baseParts.push(geoFacts.join('\n'));
  }

  // Generate site pages
  console.log('[geo] Gathering site pages...');
  const pageUrls = getPageUrls();
  if (pageUrls.length > 0) {
    baseParts.push('\n\n## Site Pages\n');
    baseParts.push(pageUrls.join('\n'));
  }
  console.log(`[geo]   ${pageUrls.length} pages found`);

  // Generate product catalog — all LANGUAGES, all products
  console.log('[geo] Generating product catalog...');
  const productLines = getProductLines();
  if (productLines.length > 0) {
    baseParts.push('\n\n## Product Catalog\n');
    baseParts.push(productLines.join('\n'));
  }

  const productCount = products.length;
  const langCount = Object.keys(LANGUAGES).length;
  console.log(`[geo]   ${productCount} products x ${langCount} LANGUAGES`);

  const output =
    baseParts
      .join('')
      .replace(/\r\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim() + '\n';
  fs.writeFileSync(LLMS_FULL_TXT, output);
  console.log('[geo] Wrote llms-full.txt');

  // Generate entity.json
  const entitySource = readSource('entity.json');
  if (entitySource) {
    try {
      JSON.parse(entitySource);
      fs.writeFileSync(ENTITY_JSON, entitySource);
      console.log('[geo] Wrote .well-known/entity.json from source data');
    } catch {
      console.warn('[geo] Invalid entity.json source, keeping existing');
    }
  }

  console.log('[generate-geo-files] Done');
}

main();
