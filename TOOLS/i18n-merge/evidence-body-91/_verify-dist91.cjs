const fs = require('fs');
const path = require('path');

const dir = __dirname;
const dist = 'E:/github/afarer/dist';
const BODY_LOCALES = ['ja', 'ko', 'ru', 'es', 'pt', 'it'];
const OTHER_LOCALES = ['nl', 'sv', 'no', 'da', 'cs', 'pl', 'ro', 'tr', 'ar', 'el', 'fi', 'th'];
const en = JSON.parse(fs.readFileSync(path.join(dir, '_ev-body-en.json'), 'utf8'));
const enSlugs = Object.keys(en);
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const enYaml = yaml.load(fs.readFileSync('E:/github/afarer/src/data/site/evidence.yaml', 'utf8'));
const enChallenge = {};
for (const cs of enYaml.case_studies || []) {
  enChallenge[cs.id] = cs.challenge;
}

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
const read = (loc, slug) => {
  try {
    return decode(fs.readFileSync(path.join(dist, loc, 'evidence', 'case-studies', slug, 'index.html'), 'utf8'));
  } catch (e) {
    issues.push(`MISSING ${loc}/${slug}`);
    fail++;
    return null;
  }
};

// 1) six body locales x 19 slugs: all body fields present
for (const loc of BODY_LOCALES) {
  const draft = JSON.parse(fs.readFileSync(path.join(dir, `_ev-body-${loc}.json`), 'utf8'));
  const meta = JSON.parse(fs.readFileSync(path.join(dir, `_ev-meta-${loc}.json`), 'utf8'));
  let locOk = 0;
  for (const slug of enSlugs) {
    const html = read(loc, slug);
    if (!html) continue;
    const d = draft[slug];
    const checks = [
      ['industry', d.industry],
      ['challenge', meta[slug].description],
      ['solution', d.solution],
      ['result', d.result],
      ...d.outcomeMetrics.map((m, i) => [`metric${i}.label`, m.label]),
      ...(d.beforeAfter || []).flatMap((b, i) => [
        [`beforeAfter${i}.label`, b.label],
        [`beforeAfter${i}.before`, String(b.before)],
        [`beforeAfter${i}.after`, String(b.after)],
      ]),
    ];
    const missing = checks.filter(([, v]) => !html.includes(v)).map(([k]) => k);
    if (missing.length === 0) {
      locOk++;
      pass++;
    } else {
      fail++;
      issues.push(`FAIL ${loc}/${slug}: missing [${missing.join(', ')}]`);
    }
  }
  console.log(`body ${loc}: ${locOk}/19 detail pages fully localized`);
}

// 2) 12 other locales regression: still EN body (industry + challenge + first solution)
for (const loc of OTHER_LOCALES) {
  let ok = 0;
  for (const slug of enSlugs) {
    const html = read(loc, slug);
    if (!html) continue;
    const e = en[slug];
    if (html.includes(e.industry) && html.includes(enChallenge[slug]) && html.includes(e.solution)) {
      ok++;
      pass++;
    } else {
      fail++;
      issues.push(`REGRESSION ${loc}/${slug}: EN body fields not all present`);
    }
  }
  console.log(`regression ${loc}: ${ok}/19 EN fallback intact`);
}

// 3) de/fr regression: yaml-translated body (industry + challenge) intact
for (const loc of ['de', 'fr']) {
  const data = yaml.load(fs.readFileSync(`E:/github/afarer/src/data/site/evidence.${loc}.yaml`, 'utf8'));
  const studies = data.case_studies || [];
  let ok = 0;
  for (const slug of enSlugs) {
    const cs = studies.find((s) => s.id === slug);
    const html = read(loc, slug);
    if (!html) continue;
    if (!cs) {
      issues.push(`REGRESSION ${loc}: slug ${slug} missing in yaml`);
      fail++;
      continue;
    }
    if (html.includes(cs.industry) && html.includes(cs.challenge)) {
      ok++;
      pass++;
    } else {
      fail++;
      issues.push(`REGRESSION ${loc}/${slug}: yaml body fields missing`);
    }
  }
  console.log(`regression ${loc}: ${ok}/19 yaml body intact`);
}

// 4) EN regression (non-lang route)
{
  let ok = 0;
  for (const slug of enSlugs) {
    const html = read('', slug);
    if (!html) continue;
    const e = en[slug];
    if (html.includes(e.industry) && html.includes(enChallenge[slug]) && html.includes(e.solution)) {
      ok++;
      pass++;
    } else {
      fail++;
      issues.push(`EN REGRESSION ${slug}: EN body fields missing`);
    }
  }
  console.log(`EN regression: ${ok}/19 EN body intact`);
}

// 5) index pages: 6 locales localized, 12 locales EN fallback
for (const loc of BODY_LOCALES) {
  const first = enSlugs[0];
  const draft = JSON.parse(fs.readFileSync(path.join(dir, `_ev-body-${loc}.json`), 'utf8'));
  const meta = JSON.parse(fs.readFileSync(path.join(dir, `_ev-meta-${loc}.json`), 'utf8'));
  const client = meta[first].title.split(' \u2014 ')[0];
  for (const p of ['evidence', 'evidence/case-studies']) {
    let html;
    try {
      html = decode(fs.readFileSync(path.join(dist, loc, p, 'index.html'), 'utf8'));
    } catch (e) {
      issues.push(`MISSING ${loc}/${p}/index.html`);
      fail++;
      continue;
    }
    if (
      html.includes(draft[first].industry) &&
      html.includes(draft[first].outcomeMetrics[0].label) &&
      html.includes(client)
    ) {
      pass++;
    } else {
      fail++;
      issues.push(`FAIL ${loc}/${p}/index.html: localized card fields missing`);
    }
  }
  console.log(`index ${loc}: both list pages localized`);
}
for (const loc of OTHER_LOCALES) {
  const first = enSlugs[0];
  for (const p of ['evidence', 'evidence/case-studies']) {
    const html = decode(fs.readFileSync(path.join(dist, loc, p, 'index.html'), 'utf8'));
    if (html.includes(en[first].industry)) {
      pass++;
    } else {
      fail++;
      issues.push(`REGRESSION ${loc}/${p}/index.html: EN fallback card missing`);
    }
  }
}

// 6) sitemap + route-manifest counts
{
  const sm = fs.readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8');
  const locCount = (sm.match(/<loc>/g) || []).length;
  console.log(`sitemap-0.xml <loc> count: ${locCount}`);
  if (locCount !== 11164) {
    fail++;
    issues.push(`sitemap-0 count ${locCount} != 11164`);
  }
  const rm = JSON.parse(fs.readFileSync('E:/github/afarer/src/i18n/generated/route-manifest.json', 'utf8'));
  const rmCount = Array.isArray(rm) ? rm.length : Object.keys(rm).length;
  console.log(`route-manifest.json count: ${rmCount}`);
  if (rmCount !== 13858) {
    fail++;
    issues.push(`route-manifest count ${rmCount} != 13858`);
  }
}

console.log(`\nTotal: ${pass} passed, ${fail} failed`);
if (issues.length) {
  console.log('--- Issues ---');
  issues.slice(0, 40).forEach((i) => console.log('  ' + i));
  if (issues.length > 40) console.log(`  ... and ${issues.length - 40} more`);
}
console.log(fail === 0 ? 'DIST VERIFICATION ALL PASS' : 'DIST VERIFICATION FAILED');
process.exit(fail === 0 ? 0 : 1);
