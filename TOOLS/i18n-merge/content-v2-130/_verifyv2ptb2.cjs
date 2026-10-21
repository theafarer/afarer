// dist verification for pt content-v2 batch 2 (17 records appended; overlay now 33 records).
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
const B2_SLUGS = pt.slice(16, 33).map((r) => r.slug);

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

// 1) all 17 batch-2 pt pages translated
if (pt.length !== 33) bad('pt overlay record count ' + pt.length + ' != 33');
let pass = 0;
for (const r of pt.slice(16, 33)) {
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
if (pass === 17) ok('pt all 17 batch-2 pages render translated content');

// 2) overlay order matches EN records 1-33
let orderOk = true;
for (let i = 0; i < 33; i++) {
  if (pt[i].slug !== en[i].slug) {
    bad('pt overlay order mismatch at index ' + i + ': ' + pt[i].slug + ' != ' + en[i].slug);
    orderOk = false;
    break;
  }
}
if (orderOk) ok('pt overlay order matches EN records 1-33');

// 3) pt batch-1 regression + es/it/ro/th regression
{
  const html = readPage('pt', 'how-to-choose-a-surfboard-for-beginners');
  if (!html) bad('pt batch-1 regression page missing');
  else if (
    !html.includes(String(pt.find((r) => r.slug === 'how-to-choose-a-surfboard-for-beginners').title).slice(0, 25))
  )
    bad('pt batch-1 regression: translated title missing');
  else ok('pt batch-1 regression intact');
}
for (const lang of ['es', 'it', 'ro', 'th']) {
  const html = readPage(lang, 'how-to-choose-a-surfboard-for-beginners');
  if (!html) bad(lang + ' regression page missing');
  else if (html.includes(enBySlug.get('how-to-choose-a-surfboard-for-beginners').title.slice(0, 30)))
    bad(lang + ' regression: EN title visible on overlay page');
  else ok(lang + ' regression overlay intact');
}

// 4) pt fallback for untranslated record beyond batch 2 (sup-safety-guide is #35)
const ptSlugs = new Set(pt.map((r) => r.slug));
if (ptSlugs.has('sup-safety-guide')) {
  bad('test invalid: sup-safety-guide unexpectedly present in pt overlay');
} else {
  const html = readPage('pt', 'sup-safety-guide');
  if (!html) bad('pt fallback page missing');
  else if (!html.includes(enBySlug.get('sup-safety-guide').title.slice(0, 30)))
    bad('pt fallback (untranslated record) missing EN title');
  else ok('pt renders EN fallback for records beyond batch 2');
}

// 5) nl pure EN fallback spot check (nl has no overlay; use a batch-2 slug)
{
  const html = readPage('nl', 'sup-size-guide');
  if (!html) bad('nl fallback page missing');
  else if (!html.includes(enBySlug.get('sup-size-guide').title.slice(0, 30))) bad('nl fallback missing EN title');
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
