/**
 * posts-112 dist verification.
 *
 * Confirms the built site exposes the 19 es/it news translations and that no
 * localized entries leaked into the EN-only llms/search endpoints:
 *   1. dist/<loc>/news/<slug>/index.html exists for every EN slug (loc = es|it)
 *      and contains the translated <title>, the right <html lang>, and NOT the
 *      EN title.
 *   2. dist/<loc>/news/index.html (localized news list) exists.
 *   3. dist/llms/news/ holds exactly the 19 EN entries (no es/it subdirs).
 *   4. dist/search-index.json references no /news/<loc>/ URLs.
 *
 * Usage: node TOOLS/i18n-merge/posts-112/_verify-dist112.cjs   (from repo root)
 * Exit code 1 on any failure.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const DIST = path.join(ROOT, 'dist');
const CONTENT = path.join(ROOT, 'src', 'content', 'news');
const yaml = require(path.join(ROOT, 'node_modules', 'js-yaml'));

const parseMdx = (raw) => {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error('frontmatter not found');
  return { fm: yaml.load(m[1]), body: m[2] };
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const read = (p) => fs.readFileSync(p, 'utf8');

let errors = 0;
const fail = (msg) => {
  errors++;
  console.log('FAIL ' + msg);
};

// --- collect EN slugs + titles -------------------------------------------------
const enSlugs = fs
  .readdirSync(CONTENT)
  .filter((f) => /\.(md|mdx)$/.test(f))
  .map((f) => f.replace(/\.(md|mdx)$/, ''))
  .sort();
const enTitles = {};
for (const slug of enSlugs) {
  const { fm } = parseMdx(read(path.join(CONTENT, slug + '.mdx')));
  enTitles[slug] = String(fm.title);
}
console.log('EN posts: ' + enSlugs.length);

// --- 1+2. localized article + list pages ---------------------------------------
for (const loc of ['es', 'it']) {
  const listPage = path.join(DIST, loc, 'news', 'index.html');
  if (!fs.existsSync(listPage)) fail(loc + '/news/index.html missing');

  for (const slug of enSlugs) {
    const page = path.join(DIST, loc, 'news', slug, 'index.html');
    const src = path.join(CONTENT, loc, slug + '.mdx');
    if (!fs.existsSync(src)) {
      fail(loc + '/' + slug + ': source mdx missing');
      continue;
    }
    if (!fs.existsSync(page)) {
      fail(loc + '/news/' + slug + '/index.html missing');
      continue;
    }
    const html = read(page);
    const { fm } = parseMdx(read(src));
    const locTitle = esc(String(fm.title));
    if (!html.includes(locTitle)) fail(loc + '/news/' + slug + ': translated title not found');
    const enTitle = esc(enTitles[slug]);
    if (locTitle !== enTitle && html.includes(enTitle)) {
      fail(loc + '/news/' + slug + ': EN title still present');
    }
    const langRe = new RegExp('<html[^>]*\\slang="' + loc + '"');
    if (!langRe.test(html)) fail(loc + '/news/' + slug + ': html lang mismatch');
  }
  console.log(loc + ': checked ' + enSlugs.length + ' pages');
}

// --- 3. llms/news stays EN-only --------------------------------------------------
const llmsDir = path.join(DIST, 'llms', 'news');
const llmsEntries = fs.existsSync(llmsDir) ? fs.readdirSync(llmsDir).sort() : [];
if (llmsEntries.length !== enSlugs.length) {
  fail('llms/news has ' + llmsEntries.length + ' entries, expected ' + enSlugs.length);
} else if (llmsEntries.join(',') !== enSlugs.join(',')) {
  fail('llms/news entries do not match EN slug set');
}
for (const bad of ['es', 'it']) {
  if (llmsEntries.includes(bad)) fail('llms/news contains localized dir ' + bad);
}

// --- 4. search-index.json has no localized news URLs -----------------------------
const si = path.join(DIST, 'search-index.json');
if (!fs.existsSync(si)) {
  fail('search-index.json missing');
} else {
  const raw = read(si);
  for (const frag of ['/news/es/', '/news/it/']) {
    if (raw.includes(frag)) fail('search-index.json references ' + frag);
  }
}

console.log('---');
console.log('errors=' + errors);
process.exit(errors ? 1 : 0);
