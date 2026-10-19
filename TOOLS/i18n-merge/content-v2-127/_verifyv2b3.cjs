// dist verification for es/it batch 3 (records 33-48 appended; total 48 overlay records per lang).
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');
const req = createRequire('E:\\github\\afarer\\node_modules\\js-yaml\\package.json');
const yaml = req('js-yaml');

const DIST = 'E:\\github\\afarer\\dist';
const SITE = 'E:\\github\\afarer\\src\\data\\site';

const en = yaml.load(fs.readFileSync(path.join(SITE, 'content-v2.yaml'), 'utf8'));
const es = yaml.load(fs.readFileSync(path.join(SITE, 'content-v2.es.yaml'), 'utf8'));
const it = yaml.load(fs.readFileSync(path.join(SITE, 'content-v2.it.yaml'), 'utf8'));
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

// 1) all 48 translated pages x 2 langs
for (const [records, lang] of [
  [es, 'es'],
  [it, 'it'],
]) {
  let pass = 0;
  if (records.length !== 48) bad(lang + ' overlay record count ' + records.length + ' != 48');
  for (const r of records) {
    const html = readPage(lang, r.slug);
    if (!html) {
      bad(lang + ' missing page ' + r.slug);
      continue;
    }
    const frag = r.title.slice(0, 25);
    if (!html.includes(frag)) {
      bad(lang + ' ' + r.slug + ' missing translated title fragment: ' + frag);
      continue;
    }
    const enTitle = enBySlug.get(r.slug).title.slice(0, 30);
    if (html.includes(enTitle)) {
      bad(lang + ' ' + r.slug + ' still shows EN title');
      continue;
    }
    pass++;
  }
  if (pass === 48) ok(lang + ' all 48 translated pages render translated content');
}

// 2) batch-1/2 regression (earlier batch slug still translated) + ro/th regression
for (const lang of ['ro', 'th']) {
  const html = readPage(lang, 'how-to-choose-a-surfboard-for-beginners');
  if (!html) {
    bad(lang + ' regression page missing');
    continue;
  }
  if (html.includes(enBySlug.get('how-to-choose-a-surfboard-for-beginners').title.slice(0, 30))) {
    bad(lang + ' regression: EN title visible on overlay page');
  } else {
    ok(lang + ' regression overlay intact');
  }
}
{
  const html = readPage('es', 'how-to-choose-a-surfboard-for-beginners');
  if (!html) bad('es batch-1 regression page missing');
  else if (html.includes(enBySlug.get('how-to-choose-a-surfboard-for-beginners').title.slice(0, 30)))
    bad('es batch-1 regression: EN title visible');
  else ok('es batch-1 regression intact');
}
{
  const html = readPage('it', 'how-to-choose-a-surfboard-for-beginners');
  if (!html) bad('it batch-1 regression page missing');
  else if (html.includes(enBySlug.get('how-to-choose-a-surfboard-for-beginners').title.slice(0, 30)))
    bad('it batch-1 regression: EN title visible');
  else ok('it batch-1 regression intact');
}

// 3) pt EN fallback spot check
{
  const html = readPage('pt', 'how-to-choose-a-surfboard-for-beginners');
  if (!html) bad('pt fallback page missing');
  else if (!html.includes(enBySlug.get('how-to-choose-a-surfboard-for-beginners').title.slice(0, 30)))
    bad('pt fallback missing EN title');
  else ok('pt renders EN fallback as expected');
}

// 4) v2 index pages list all 75 records for es/it
for (const lang of ['es', 'it']) {
  const idx = fs.readFileSync(path.join(DIST, lang, 'v2', 'index.html'), 'utf8');
  const missing = en.filter((r) => !idx.includes('/' + lang + '/v2/' + r.slug)).map((r) => r.slug);
  if (missing.length) bad(lang + ' v2 index missing ' + missing.length + ' links: ' + missing.slice(0, 3).join(', '));
  else ok(lang + ' v2 index lists all 75 entries');
}

console.log(fails === 0 ? 'DIST VERIFY PASSED' : fails + ' DIST CHECKS FAILED');
process.exit(fails === 0 ? 0 : 1);
