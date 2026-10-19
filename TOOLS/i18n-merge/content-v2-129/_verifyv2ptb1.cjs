// dist verification for pt content-v2 batch 1 (new overlay, records 1-16).
// NOTE: pt now has a partial overlay, so the "EN fallback" spot check must use
// (a) a pt record NOT in the first 16 (fallback within pt), and
// (b) a language with no overlay at all (nl) for the pure-fallback check.
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');
const req = createRequire('E:\\github\\afarer\\node_modules\\js-yaml\\package.json');
const yaml = req('js-yaml');

const DIST = 'E:\\github\\afarer\\dist';
const SITE = 'E:\\github\\afarer\\src\\data\\site';

const en = yaml.load(fs.readFileSync(path.join(SITE, 'content-v2.yaml'), 'utf8'));
const pt = yaml.load(fs.readFileSync(path.join(SITE, 'content-v2.pt.yaml'), 'utf8'));
const enBySlug = new Map(en.map((r) => [r.slug, r]));

let fails = 0;
const bad = (m) => {
  console.log('FAIL: ' + m);
  fails++;
};
const ok = (m) => console.log('ok: ' + m);

function readPage(lang, slug) {
  const p = path.join(DIST, lang, 'v2', slug, 'index.html');
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8');
}

// 1) all 16 translated pt pages
if (pt.length !== 16) bad('pt overlay record count ' + pt.length + ' != 16');
let pass = 0;
for (const r of pt) {
  const html = readPage('pt', r.slug);
  if (!html) {
    bad('pt missing page ' + r.slug);
    continue;
  }
  const frag = r.title.slice(0, 25);
  if (!html.includes(frag)) {
    bad('pt ' + r.slug + ' missing translated title fragment: ' + frag);
    continue;
  }
  const enTitle = enBySlug.get(r.slug).title.slice(0, 30);
  if (html.includes(enTitle) && !r.title.slice(0, 30).includes(enTitle)) {
    bad('pt ' + r.slug + ' still shows EN title');
    continue;
  }
  pass++;
}
if (pass === 16) ok('pt all 16 translated pages render translated content');

// 2) overlay order matches EN records 1-16
let orderOk = true;
for (let i = 0; i < 16; i++) {
  if (pt[i].slug !== en[i].slug) {
    bad('pt overlay order mismatch at index ' + i + ': ' + pt[i].slug + ' != ' + en[i].slug);
    orderOk = false;
    break;
  }
}
if (orderOk) ok('pt overlay order matches EN records 1-16');

// 3) regression: es/it/ro/th batch-1 page + es/it batch-3 page
for (const lang of ['ro', 'th', 'es', 'it']) {
  const html = readPage(lang, 'how-to-choose-a-surfboard-for-beginners');
  if (!html) bad(lang + ' regression page missing');
  else if (html.includes(enBySlug.get('how-to-choose-a-surfboard-for-beginners').title.slice(0, 30)))
    bad(lang + ' regression: EN title visible on overlay page');
  else ok(lang + ' regression overlay intact');
}
for (const lang of ['es', 'it']) {
  const html = readPage(lang, 'sup-safety-guide');
  if (!html) bad(lang + ' batch-3 regression page missing');
  else if (html.includes(enBySlug.get('sup-safety-guide').title.slice(0, 30)))
    bad(lang + ' batch-3 regression: EN title visible');
  else ok(lang + ' batch-3 regression intact');
}

// 4) pt fallback for untranslated record (afarer-surfboard-pro is beyond the first 16)
const ptSlugs = new Set(pt.map((r) => r.slug));
if (ptSlugs.has('afarer-surfboard-pro')) {
  bad('test invalid: afarer-surfboard-pro unexpectedly present in pt overlay');
} else {
  const html = readPage('pt', 'afarer-surfboard-pro');
  if (!html) bad('pt fallback page missing');
  else if (!html.includes(enBySlug.get('afarer-surfboard-pro').title.slice(0, 30)))
    bad('pt fallback (untranslated record) missing EN title');
  else ok('pt renders EN fallback for records beyond batch 1');
}

// 5) nl pure EN fallback spot check (nl has no overlay)
{
  const html = readPage('nl', 'how-to-choose-a-surfboard-for-beginners');
  if (!html) bad('nl fallback page missing');
  else if (!html.includes(enBySlug.get('how-to-choose-a-surfboard-for-beginners').title.slice(0, 30)))
    bad('nl fallback missing EN title');
  else ok('nl renders EN fallback as expected');
}

// 6) pt v2 index lists all 75 records
{
  const idxPath = path.join(DIST, 'pt', 'v2', 'index.html');
  if (!fs.existsSync(idxPath)) bad('pt v2 index missing');
  else {
    const idx = fs.readFileSync(idxPath, 'utf8');
    const missing = en.filter((r) => !idx.includes('/pt/v2/' + r.slug)).map((r) => r.slug);
    if (missing.length) bad('pt v2 index missing ' + missing.length + ' links: ' + missing.slice(0, 3).join(', '));
    else ok('pt v2 index lists all 75 entries');
  }
}

console.log(fails === 0 ? 'DIST VERIFY PASSED' : fails + ' DIST CHECKS FAILED');
process.exit(fails === 0 ? 0 : 1);
