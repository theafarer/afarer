const fs = require('fs');

const DIST = 'dist';
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const L = [
  'ar',
  'cs',
  'da',
  'de',
  'el',
  'es',
  'fi',
  'fr',
  'it',
  'ja',
  'ko',
  'nl',
  'no',
  'pl',
  'pt',
  'ro',
  'ru',
  'sv',
  'th',
  'tr',
];
const en = JSON.parse(fs.readFileSync(TMP + '/_sol-meta-en.json', 'utf8'));
const slugs = Object.keys(en);
const cfg = JSON.parse(fs.readFileSync('src/data/site/i18n-config.json', 'utf8'));

function getMeta(html) {
  const t = html.match(/<title>([^<]*)<\/title>/);
  const d = html.match(/<meta name="description" content="([^"]*)"/);
  return { title: t ? t[1] : '', desc: d ? d[1] : '' };
}

// 1. meta != EN for all 480 combos
let pass = 0,
  fail = 0;
const fails = [];
for (const l of L) {
  for (const s of slugs) {
    const p = `${DIST}/${l}/solutions/${s}/index.html`;
    if (!fs.existsSync(p)) {
      fail++;
      fails.push(`MISSING ${l}/${s}`);
      continue;
    }
    const m = getMeta(fs.readFileSync(p, 'utf8'));
    const enT = en[s].title.replace('{SITE}', 'Afarer');
    const enD = en[s].description.replace('{SITE}', 'Afarer');
    if (m.title === enT || m.desc === enD || !m.title || !m.desc) {
      fail++;
      fails.push(`META ${l}/${s}`);
      continue;
    }
    pass++;
  }
}
console.log(`meta: pass=${pass} fail=${fail}`);
fails.slice(0, 10).forEach((f) => console.log('  ' + f));

// 2. UI labels: check faqTitle + results render localized on pages that have those blocks
let lpass = 0,
  lfail = 0;
for (const l of L) {
  const s = 'sup-brand-startup';
  const p = `${DIST}/${l}/solutions/${s}/index.html`;
  const html = fs.readFileSync(p, 'utf8');
  const faq = cfg[l]['solutions.faqTitle'];
  if (html.includes(faq)) lpass++;
  else {
    lfail++;
    console.log(`  faqTitle MISS ${l}: "${faq}"`);
  }
  const res = cfg[l]['solutions.results'];
  if (html.includes(res)) lpass++;
  else {
    lfail++;
    console.log(`  results MISS ${l}: "${res}"`);
  }
  const bg = cfg[l]['solutions.background'];
  if (html.includes(bg)) lpass++;
  else {
    lfail++;
    console.log(`  background MISS ${l}: "${bg}"`);
  }
}
console.log(`labels: pass=${lpass} fail=${lfail}`);

// 3. caseStudy label on a slug WITH customer case study: corporate-sup-event-package (fr/es had full override, customer known)
// find which slugs render cs block: check for 'solutions.caseStudy' localized value on every locale for one known slug
const csSlugs = ['ecommerce-sup-brand-development', 'commercial-sup-fleet', 'retail-private-label-program'];
let cpass = 0,
  cfail = 0;
for (const l of ['it', 'nl', 'sv', 'no', 'da']) {
  let found = false;
  for (const s of csSlugs) {
    const p = `${DIST}/${l}/solutions/${s}/index.html`;
    if (!fs.existsSync(p)) continue;
    const html = fs.readFileSync(p, 'utf8');
    if (html.includes(cfg[l]['solutions.caseStudy'])) {
      found = true;
      break;
    }
  }
  if (found) cpass++;
  else {
    cfail++;
    console.log(`  caseStudy MISS ${l}`);
  }
}
console.log(`caseStudy(fixed locales): pass=${cpass} fail=${cfail}`);

// 4. baselines
const sm = fs.readFileSync(DIST + '/sitemap-0.xml', 'utf8');
console.log('sitemap-0 urls:', (sm.match(/<loc>/g) || []).length);
const rm = JSON.parse(fs.readFileSync('src/i18n/generated/route-manifest.json', 'utf8'));
console.log('route-manifest:', Array.isArray(rm) ? rm.length : Object.keys(rm).length);
