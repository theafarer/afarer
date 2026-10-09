const fs = require('fs');
const path = require('path');

const dir = __dirname;
const dist = 'E:/github/afarer/dist';
const en = JSON.parse(fs.readFileSync(path.join(dir, '_ev-meta-en.json'), 'utf8'));
const locales = [
  'ja',
  'ko',
  'ru',
  'es',
  'pt',
  'it',
  'nl',
  'sv',
  'no',
  'da',
  'cs',
  'pl',
  'ro',
  'tr',
  'ar',
  'el',
  'fi',
  'th',
];
const enSlugs = Object.keys(en);
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

for (const loc of locales) {
  const draft = JSON.parse(fs.readFileSync(path.join(dir, `_ev-meta-${loc}.json`), 'utf8'));
  for (const slug of enSlugs) {
    const file = path.join(dist, loc, 'evidence', 'case-studies', slug, 'index.html');
    let html;
    try {
      html = fs.readFileSync(file, 'utf8');
    } catch (e) {
      issues.push(`MISSING ${loc}/${slug}: ${e.message}`);
      fail++;
      continue;
    }
    const tm = html.match(/<title>([\s\S]*?)<\/title>/);
    const dm = html.match(/<meta name="description" content="([\s\S]*?)"/);
    const title = tm ? decode(tm[1].trim()) : '';
    const desc = dm ? decode(dm[1].trim()) : '';
    const okTitle = title === draft[slug].title;
    const okDesc = desc === draft[slug].description;
    const okNonEn = title !== en[slug].enTitle && desc !== en[slug].enDesc;
    if (okTitle && okDesc && okNonEn) {
      pass++;
    } else {
      fail++;
      issues.push(
        `FAIL ${loc}/${slug}: title=${okTitle ? 'OK' : `BAD [${title}]`} desc=${okDesc ? 'OK' : `BAD [${desc}]`}${
          okNonEn ? '' : ' (identical to EN!)'
        }`
      );
    }
  }
}

// de/fr regression: localized titles from full yaml translations
const yaml = require('E:/github/afarer/node_modules/js-yaml');
for (const loc of ['de', 'fr']) {
  const data = yaml.load(fs.readFileSync(`E:/github/afarer/src/data/site/evidence.${loc}.yaml`, 'utf8'));
  const studies = data.case_studies || [];
  let checked = 0;
  let nonEn = 0;
  for (const slug of enSlugs) {
    const cs = studies.find((s) => s.id === slug);
    if (!cs) {
      issues.push(`REGRESSION ${loc}: slug ${slug} missing in evidence.${loc}.yaml`);
      continue;
    }
    const file = path.join(dist, loc, 'evidence', 'case-studies', slug, 'index.html');
    const html = fs.readFileSync(file, 'utf8');
    const tm = html.match(/<title>([\s\S]*?)<\/title>/);
    const title = tm ? decode(tm[1].trim()) : '';
    const expected = `${cs.client} — ${cs.product} | Afarer`;
    checked++;
    if (title === expected) {
      pass++;
      nonEn++;
    } else {
      fail++;
      issues.push(`REGRESSION ${loc}/${slug}: title [${title}] != expected [${expected}]`);
    }
  }
  console.log(`de/fr regression ${loc}: ${nonEn}/${checked} titles match ${loc} yaml`);
}

// EN regression (non-lang route)
{
  let ok = 0;
  for (const slug of enSlugs) {
    const file = path.join(dist, 'evidence', 'case-studies', slug, 'index.html');
    const html = fs.readFileSync(file, 'utf8');
    const tm = html.match(/<title>([\s\S]*?)<\/title>/);
    const title = tm ? decode(tm[1].trim()) : '';
    if (title === en[slug].enTitle) {
      ok++;
      pass++;
    } else {
      fail++;
      issues.push(`EN REGRESSION ${slug}: [${title}] != [${en[slug].enTitle}]`);
    }
  }
  console.log(`EN regression: ${ok}/19 titles match EN template`);
}

// sitemap + route-manifest counts
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

console.log(`\n342-meta check: ${pass} passed, ${fail} failed`);
if (issues.length) {
  console.log('--- Issues ---');
  issues.slice(0, 40).forEach((i) => console.log('  ' + i));
  if (issues.length > 40) console.log(`  ... and ${issues.length - 40} more`);
}
console.log(fail === 0 ? 'DIST VERIFICATION ALL PASS' : 'DIST VERIFICATION FAILED');
process.exit(fail === 0 ? 0 : 1);
