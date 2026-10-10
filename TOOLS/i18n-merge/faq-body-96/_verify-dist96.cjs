const fs = require('fs');
const path = require('path');

const dir = __dirname;
const dist = 'E:/github/afarer/dist';
const NEW_LOCALES = ['ar', 'el', 'fi', 'ro', 'th', 'tr'];
const BASELINE94 = ['es', 'it', 'ja', 'ko', 'pt', 'ru'];
const BASELINE95 = ['cs', 'da', 'nl', 'no', 'pl', 'sv'];
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

let pass = 0;
let fail = 0;
const issues = [];

const readPage = (p) => {
  try {
    return decode(fs.readFileSync(path.join(dist, p), 'utf8'));
  } catch (e) {
    return null;
  }
};

// 1) 6 new locales: all 53 q + a rendered, JsonLd FAQPage present, 53 items
for (const loc of NEW_LOCALES) {
  const draft = JSON.parse(fs.readFileSync(path.join(dir, `_faq-${loc}.json`), 'utf8'));
  const html = readPage(path.join(loc, 'faq', 'index.html'));
  if (!html) {
    fail++;
    issues.push(`MISSING ${loc}/faq/index.html`);
    continue;
  }
  const missingQ = draft.filter((r) => !html.includes(r.q)).map((r) => r.id);
  const missingA = draft.filter((r) => !html.includes(r.a)).map((r) => r.id);
  const itemCount = (html.match(/data-faq-question=/g) || []).length;
  const hasJsonLd = html.includes('"@type":"FAQPage"');
  if (missingQ.length === 0 && missingA.length === 0 && itemCount === 53 && hasJsonLd) {
    pass++;
    console.log(`${loc}/faq: 53 q+a rendered, 53 items, FAQPage JsonLd OK`);
  } else {
    fail++;
    issues.push(
      `FAIL ${loc}/faq: missingQ=[${missingQ.join(',')}] missingA=[${missingA.join(',')}] items=${itemCount} jsonLd=${hasJsonLd}`
    );
  }
}

// 2) baseline 94 + 95 locales: yaml q+a still rendered (regression check)
for (const loc of BASELINE94.concat(BASELINE95)) {
  const data = yaml.load(fs.readFileSync(`E:/github/afarer/src/data/faq-${loc}.yaml`, 'utf8'));
  const html = readPage(path.join(loc, 'faq', 'index.html'));
  if (!html) {
    fail++;
    issues.push(`MISSING ${loc}/faq/index.html`);
    continue;
  }
  const missing = data.filter((f) => !html.includes(f.question) || !html.includes(f.answer)).map((f) => f.id);
  if (missing.length === 0) {
    pass++;
    console.log(`baseline ${loc}/faq: ${data.length} yaml q+a intact`);
  } else {
    fail++;
    issues.push(`REGRESSION ${loc}/faq: missing [${missing.join(',')}]`);
  }
}

// 3) baseline de/fr: yaml q+a still rendered
for (const loc of ['de', 'fr']) {
  const data = yaml.load(fs.readFileSync(`E:/github/afarer/src/data/faq-${loc}.yaml`, 'utf8'));
  const html = readPage(path.join(loc, 'faq', 'index.html'));
  if (!html) {
    fail++;
    issues.push(`MISSING ${loc}/faq/index.html`);
    continue;
  }
  const missing = data.filter((f) => !html.includes(f.question) || !html.includes(f.answer)).map((f) => f.id);
  if (missing.length === 0) {
    pass++;
    console.log(`baseline ${loc}/faq: ${data.length} yaml q+a intact`);
  } else {
    fail++;
    issues.push(`REGRESSION ${loc}/faq: missing [${missing.join(',')}]`);
  }
}

// 4) baseline EN (/en/faq + root /faq): EN source q+a intact
const enDraft = JSON.parse(fs.readFileSync(path.join(dir, '_faq-en.json'), 'utf8'));
const enSrc = enDraft.map((r) => ({ id: r.id, question: r.question, answer: r.answer }));
for (const p of [path.join('en', 'faq', 'index.html'), path.join('faq', 'index.html')]) {
  const html = readPage(p);
  if (!html) {
    fail++;
    issues.push(`MISSING ${p}`);
    continue;
  }
  const missing = enSrc.filter((f) => !html.includes(f.question) || !html.includes(f.answer)).map((f) => f.id);
  if (missing.length === 0) {
    pass++;
    console.log(`baseline EN ${p.replace(/\\/g, '/')}: ${enSrc.length} q+a intact`);
  } else {
    fail++;
    issues.push(`EN REGRESSION ${p}: missing [${missing.join(',')}]`);
  }
}

// 5) sitemap + route-manifest counts (no route changes expected)
{
  const sm = fs.readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8');
  const locCount = (sm.match(/<loc>/g) || []).length;
  console.log(`sitemap-0.xml <loc> count: ${locCount}`);
  if (locCount !== 11164) {
    fail++;
    issues.push(`sitemap-0 count ${locCount} != 11164`);
  } else {
    pass++;
  }
  const rm = JSON.parse(fs.readFileSync('E:/github/afarer/src/i18n/generated/route-manifest.json', 'utf8'));
  const rmCount = Array.isArray(rm) ? rm.length : Object.keys(rm).length;
  console.log(`route-manifest.json count: ${rmCount}`);
  if (rmCount !== 13858) {
    fail++;
    issues.push(`route-manifest count ${rmCount} != 13858`);
  } else {
    pass++;
  }
}

console.log(`\nTotal: ${pass} passed, ${fail} failed`);
if (issues.length) {
  console.log('--- Issues ---');
  issues.forEach((i) => console.log('  ' + i));
}
console.log(fail === 0 ? 'DIST VERIFICATION ALL PASS' : 'DIST VERIFICATION FAILED');
process.exit(fail === 0 ? 0 : 1);
