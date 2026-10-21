// dist verification for pt content-v2 batch 3 (17 records appended; overlay now 50 records).
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

// 1) all 17 batch-3 pt pages translated
if (pt.length !== 50) bad('pt overlay record count ' + pt.length + ' != 50');
let pass = 0;
for (const r of pt.slice(33, 50)) {
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
if (pass === 17) ok('pt all 17 batch-3 pages render translated content');

// 2) overlay order matches EN records 1-50
let orderOk = true;
for (let i = 0; i < 50; i++) {
  if (pt[i].slug !== en[i].slug) {
    bad('pt overlay order mismatch at index ' + i + ': ' + pt[i].slug + ' != ' + en[i].slug);
    orderOk = false;
    break;
  }
}
if (orderOk) ok('pt overlay order matches EN records 1-50');

// 3) pt batch-1/batch-2 regression
for (const slug of ['how-to-choose-a-surfboard-for-beginners', 'sup-size-guide', 'sup-safety-guide']) {
  const r = pt.find((x) => x.slug === slug);
  if (!r) {
    bad('pt regression record missing from overlay: ' + slug);
    continue;
  }
  const html = readPage('pt', slug);
  if (!html) bad('pt regression page missing: ' + slug);
  else if (!html.includes(r.title.slice(0, 25))) bad('pt regression: translated title missing for ' + slug);
  else ok('pt regression intact for ' + slug);
}

// 4) es/it/ro/th regression
for (const lang of ['es', 'it', 'ro', 'th']) {
  const html = readPage(lang, 'how-to-choose-a-surfboard-for-beginners');
  if (!html) bad(lang + ' regression page missing');
  else if (html.includes(enBySlug.get('how-to-choose-a-surfboard-for-beginners').title.slice(0, 30)))
    bad(lang + ' regression: EN title visible on overlay page');
  else ok(lang + ' regression overlay intact');
}

// 5) pt fallback for untranslated record beyond batch 3 (EN #51)
{
  const ptSlugs = new Set(pt.map((r) => r.slug));
  const fb = en[50];
  if (ptSlugs.has(fb.slug)) {
    bad('test invalid: ' + fb.slug + ' unexpectedly present in pt overlay');
  } else {
    const html = readPage('pt', fb.slug);
    if (!html) bad('pt fallback page missing: ' + fb.slug);
    else if (!html.includes(fb.title.slice(0, 30))) bad('pt fallback missing EN title for ' + fb.slug);
    else ok('pt renders EN fallback for records beyond batch 3 (' + fb.slug + ')');
  }
}

// 6) nl pure EN fallback spot check (nl has no overlay)
{
  const html = readPage('nl', 'sup-size-guide');
  if (!html) bad('nl fallback page missing');
  else if (!html.includes(enBySlug.get('sup-size-guide').title.slice(0, 30))) bad('nl fallback missing EN title');
  else ok('nl renders EN fallback as expected');
}

// 7) pt v2 index lists all 75 records
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
