// dist verification for pt content-v2 batch 4 (25 records appended; overlay now 75 records = full EN set).
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

// 1) all 25 batch-4 pt pages translated
if (pt.length !== 75) bad('pt overlay record count ' + pt.length + ' != 75');
let pass = 0;
for (const r of pt.slice(50, 75)) {
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
if (pass === 25) ok('pt all 25 batch-4 pages render translated content');

// 2) overlay order matches EN records 1-75
let orderOk = true;
for (let i = 0; i < 75; i++) {
  if (pt[i].slug !== en[i].slug) {
    bad('pt overlay order mismatch at index ' + i + ': ' + pt[i].slug + ' != ' + en[i].slug);
    orderOk = false;
    break;
  }
}
if (orderOk) ok('pt overlay order matches EN records 1-75');

// 3) pt batch-1/batch-2/batch-3 regression
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

// 5) pt has no EN fallback anymore - spot check EN #51 renders pt translation
{
  const fb = en[50];
  const r = pt.find((x) => x.slug === fb.slug);
  if (!r) {
    bad('pt overlay missing full-coverage record: ' + fb.slug);
  } else {
    const html = readPage('pt', fb.slug);
    if (!html) bad('pt full-coverage page missing: ' + fb.slug);
    else if (!html.includes(r.title.slice(0, 25))) bad('pt full-coverage page missing translated title: ' + fb.slug);
    else if (html.includes(fb.title.slice(0, 30)) && !r.title.slice(0, 30).includes(fb.title.slice(0, 30)))
      bad('pt full-coverage page still shows EN title: ' + fb.slug);
    else ok('pt renders translated content for former fallback record (' + fb.slug + ')');
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
