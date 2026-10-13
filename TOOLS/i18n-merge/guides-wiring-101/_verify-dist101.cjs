const fs = require('fs');

// ===== _verify-dist101.cjs — dist verification for slice 101 (guides [lang] wiring) =====
// Asserts: 21 locales x guides index + 2 slug pages match UI SSOT exactly + EN regression + invariants.

const DIST = 'E:/github/afarer/dist';
const SSOT = JSON.parse(fs.readFileSync('E:/github/afarer/src/data/site/i18n-config.json', 'utf8'));
const LOCALES = Object.keys(SSOT);
const CATS = ['buying-guide', 'tutorial', 'safety', 'technical', 'maintenance', 'lifestyle', 'planning', 'comparison'];
const SLUG_TARGETS = [
  { slug: 'how-to-choose-your-sup', cat: 'buying-guide', diff: 'beginner' },
  { slug: 'sup-fishing', cat: 'lifestyle', diff: 'intermediate' },
];

let pass = 0;
let fail = 0;
const bad = (m) => {
  console.log('FAIL ' + m);
  fail++;
};
const ok = () => pass++;

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// presence check tolerant to HTML escaping
const has = (html, text) => html.includes(text) || html.includes(esc(text));

// ===== 1. Invariants =====
const sitemap = fs.readFileSync(DIST + '/sitemap-0.xml', 'utf8');
const locCount = (sitemap.match(/<loc>/g) || []).length;
if (locCount !== 11164) bad('sitemap-0.xml loc count = ' + locCount + ' (expected 11164)');
else ok();
const routeManifest = JSON.parse(fs.readFileSync('E:/github/afarer/src/i18n/generated/route-manifest.json', 'utf8'));
const manifestRoutes = Array.isArray(routeManifest) ? routeManifest.length : Object.keys(routeManifest).length;
if (manifestRoutes !== 13858) bad('route-manifest = ' + manifestRoutes + ' (expected 13858)');
else ok();

// localized page meta (title/description) — source of truth for <title>
const seoMetaRaw = fs.readFileSync('E:/github/afarer/src/i18n/generated/seo-meta.ts', 'utf8');
const seoMeta = JSON.parse(seoMetaRaw.slice(seoMetaRaw.indexOf('=') + 1, seoMetaRaw.lastIndexOf('}') + 1));

// ===== 2. Per-locale index + slug pages =====
const EN = SSOT.en;
for (const loc of LOCALES) {
  const T = SSOT[loc];
  const idxPath = DIST + '/' + loc + '/guides/index.html';
  if (!fs.existsSync(idxPath)) {
    bad(loc + ' guides index.html missing');
    continue;
  }
  ok();
  const idx = fs.readFileSync(idxPath, 'utf8');

  // count / categories chips
  const countLabel = T['guides.count'].replace('{count}', '29');
  const categoriesLabel = T['guides.categories'].replace('{count}', '8');
  if (!has(idx, countLabel)) bad(loc + ' index missing count chip "' + countLabel + '"');
  else ok();
  if (!has(idx, categoriesLabel)) bad(loc + ' index missing categories chip "' + categoriesLabel + '"');
  else ok();

  // all 8 category headings
  for (const cat of CATS) {
    const key = 'guides.category.' + cat.replace('-', '_');
    const v = T[key];
    if (typeof v !== 'string' || !v) {
      bad(loc + ' SSOT missing ' + key);
      continue;
    }
    if (!has(idx, v)) bad(loc + ' index missing category heading "' + v + '" (' + key + ')');
    else ok();
  }

  // readGuide
  if (!has(idx, T['guides.readGuide'])) bad(loc + ' index missing readGuide "' + T['guides.readGuide'] + '"');
  else ok();

  // <title> comes from localized seo-meta ({loc}/guides); fallback = pageLabel — SITE.name
  const pageMeta = seoMeta[loc + '/guides'];
  const expectedTitle = pageMeta?.title
    ? String(pageMeta.title).replace('{SITE}', 'Afarer')
    : T['guides.pageLabel'] + ' — Afarer';
  const titleMatch = idx.match(/<title>([^<]*)<\/title>/);
  if (!titleMatch) bad(loc + ' index no <title>');
  else if (titleMatch[1] !== expectedTitle)
    bad(loc + ' index title "' + titleMatch[1] + '" != "' + expectedTitle + '"');
  else ok();

  // negative: non-en must not leak EN chips (only when localized value differs)
  if (loc !== 'en') {
    const enCount = EN['guides.count'].replace('{count}', '29');
    const enCats = EN['guides.categories'].replace('{count}', '8');
    const enRead = EN['guides.readGuide'];
    if (countLabel !== enCount && has(idx, enCount)) bad(loc + ' index leaks EN count chip "' + enCount + '"');
    else ok();
    if (categoriesLabel !== enCats && has(idx, enCats)) bad(loc + ' index leaks EN categories chip "' + enCats + '"');
    else ok();
    if (T['guides.readGuide'] !== enRead && has(idx, enRead)) bad(loc + ' index leaks EN "' + enRead + '"');
    else ok();
  }

  // slug pages
  for (const target of SLUG_TARGETS) {
    const p = DIST + '/' + loc + '/guides/' + target.slug + '/index.html';
    if (!fs.existsSync(p)) {
      bad(loc + ' slug page missing: ' + target.slug);
      continue;
    }
    ok();
    const html = fs.readFileSync(p, 'utf8');
    const catKey = 'guides.category.' + target.cat.replace('-', '_');
    const diffKey = 'guides.difficulty.' + target.diff;
    const catV = T[catKey];
    const diffV = T[diffKey];
    if (typeof catV !== 'string' || !catV) bad(loc + ' SSOT missing ' + catKey);
    else if (!has(html, catV)) bad(loc + ' ' + target.slug + ' missing category chip "' + catV + '"');
    else ok();
    if (typeof diffV !== 'string' || !diffV) bad(loc + ' SSOT missing ' + diffKey);
    else if (!has(html, diffV)) bad(loc + ' ' + target.slug + ' missing difficulty chip "' + diffV + '"');
    else ok();
    // v2.problem / v2.solution headings (regression — already wired pre-101)
    if (T['v2.problem'] && !has(html, T['v2.problem']))
      bad(loc + ' ' + target.slug + ' missing v2.problem "' + T['v2.problem'] + '"');
    else ok();
    if (T['v2.solution'] && !has(html, T['v2.solution']))
      bad(loc + ' ' + target.slug + ' missing v2.solution "' + T['v2.solution'] + '"');
    else ok();
  }
}

// ===== 3. EN regression =====
{
  const idx = fs.readFileSync(DIST + '/en/guides/index.html', 'utf8');
  for (const expected of ['29 guides', '8 categories', 'Buying Guides', 'Comparisons', 'Read guide →', 'Guides — ']) {
    if (!has(idx, expected)) bad('EN index regression: missing "' + expected + '"');
    else ok();
  }
  const slugHtml = fs.readFileSync(DIST + '/en/guides/how-to-choose-your-sup/index.html', 'utf8');
  for (const expected of ['Buying Guides', 'Beginner', 'The problem', 'The solution']) {
    if (!has(slugHtml, expected)) bad('EN slug regression: missing "' + expected + '"');
    else ok();
  }
}

console.log('---');
console.log('PASS=' + pass + ' FAIL=' + fail);
process.exit(fail ? 1 : 0);
