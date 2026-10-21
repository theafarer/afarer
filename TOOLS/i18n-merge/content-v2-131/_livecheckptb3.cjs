// Live verification for pt content-v2 batch 3 (records 34-50) on afarer.com
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');
const req = createRequire('E:\\github\\afarer\\node_modules\\js-yaml\\package.json');
const yaml = req('js-yaml');

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

async function fetchText(url) {
  const r = await fetch(url, { redirect: 'follow' });
  if (!r.ok) return null;
  return r.text();
}

async function main() {
  // 1) all 17 batch-3 pt pages live and translated
  let pass = 0;
  for (const r of pt.slice(33, 50)) {
    const url = 'https://afarer.com/pt/v2/' + r.slug + '/';
    let html;
    try {
      html = await fetchText(url);
    } catch (e) {
      bad('pt fetch error ' + r.slug + ': ' + e.message);
      continue;
    }
    if (!html) {
      bad('pt page not live: ' + url);
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
  if (pass === 17) ok('pt all 17 batch-3 pages live with translated content');

  // 2) pt batch-1/2/3 regression spot checks
  for (const slug of ['how-to-choose-a-surfboard-for-beginners', 'sup-size-guide', 'sup-safety-guide']) {
    const r = pt.find((x) => x.slug === slug);
    const html = await fetchText('https://afarer.com/pt/v2/' + slug + '/');
    if (!html) bad('pt regression page not live: ' + slug);
    else if (!html.includes(r.title.slice(0, 25))) bad('pt regression: translated title missing for ' + slug);
    else ok('pt regression intact for ' + slug);
  }

  // 3) pt fallback for untranslated record #51 (afarer-airdeck-360-review)
  {
    const fb = en[50];
    const html = await fetchText('https://afarer.com/pt/v2/' + fb.slug + '/');
    if (!html) bad('pt fallback page not live');
    else if (!html.includes(fb.title.slice(0, 30))) bad('pt fallback missing EN title');
    else ok('pt renders EN fallback for records beyond batch 3');
  }

  // 4) nl pure EN fallback spot check (batch-2 slug)
  {
    const html = await fetchText('https://afarer.com/nl/v2/sup-size-guide/');
    if (!html) bad('nl fallback page not live');
    else if (!html.includes(enBySlug.get('sup-size-guide').title.slice(0, 30))) bad('nl fallback missing EN title');
    else ok('nl renders EN fallback as expected');
  }

  // 5) es/it regression (batch-1 page + batch-3 sup-safety-guide)
  for (const lang of ['es', 'it']) {
    const h1 = await fetchText('https://afarer.com/' + lang + '/v2/how-to-choose-a-surfboard-for-beginners/');
    if (!h1) bad(lang + ' regression page 1 not live');
    else if (h1.includes(enBySlug.get('how-to-choose-a-surfboard-for-beginners').title.slice(0, 30)))
      bad(lang + ' regression 1: EN title visible');
    else ok(lang + ' regression 1 intact');
    const h2 = await fetchText('https://afarer.com/' + lang + '/v2/sup-safety-guide/');
    if (!h2) bad(lang + ' regression page 2 not live');
    else if (h2.includes(enBySlug.get('sup-safety-guide').title.slice(0, 30)))
      bad(lang + ' regression 2: EN title visible');
    else ok(lang + ' regression 2 intact');
  }

  // 6) pt v2 index lists all 75 records
  {
    const idx = await fetchText('https://afarer.com/pt/v2/');
    if (!idx) bad('pt v2 index not live');
    else {
      const missing = en.filter((r) => !idx.includes('/pt/v2/' + r.slug)).map((r) => r.slug);
      if (missing.length) bad('pt v2 index missing ' + missing.length + ' links: ' + missing.slice(0, 3).join(', '));
      else ok('pt v2 index lists all 75 entries');
    }
  }

  console.log(fails === 0 ? 'LIVE CHECK PASSED' : fails + ' LIVE CHECKS FAILED');
  process.exit(fails === 0 ? 0 : 1);
}
main();
