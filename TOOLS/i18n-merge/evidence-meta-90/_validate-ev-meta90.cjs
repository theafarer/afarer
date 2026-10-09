const fs = require('fs');
const path = require('path');

const dir = __dirname;
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
const enSlugs = Object.keys(en).sort();

if (enSlugs.length !== 19) {
  console.log(`FATAL: EN source has ${enSlugs.length} slugs, expected 19`);
  process.exit(1);
}

let failed = 0;
for (const loc of locales) {
  const file = path.join(dir, `_ev-meta-${loc}.json`);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.log(`FAIL ${loc}: JSON parse error: ${e.message}`);
    failed++;
    continue;
  }
  const slugs = Object.keys(data);
  const missing = enSlugs.filter((s) => !slugs.includes(s));
  const extra = slugs.filter((s) => !(s in en));
  const issues = [];
  if (missing.length) issues.push(`missing slugs: ${missing.join(', ')}`);
  if (extra.length) issues.push(`extra slugs: ${extra.join(', ')}`);
  let maxDesc = 0;
  for (const slug of enSlugs) {
    if (!(slug in data)) continue;
    const t = (data[slug].title || '').trim();
    const d = (data[slug].description || '').trim();
    if (!t) issues.push(`${slug}: empty title`);
    if (!d) issues.push(`${slug}: empty description`);
    if (t && !t.endsWith('| Afarer')) issues.push(`${slug}: title missing "| Afarer" suffix`);
    if (t && !t.includes(' — ')) issues.push(`${slug}: title missing " — " separator`);
    if (t && t === en[slug].enTitle) issues.push(`${slug}: title identical to EN`);
    if (d && d === en[slug].enDesc) issues.push(`${slug}: desc identical to EN`);
    if (/ {2,}/.test(t) || / {2,}/.test(d)) issues.push(`${slug}: double space detected`);
    if (d.length > maxDesc) maxDesc = d.length;
  }
  if (issues.length) {
    console.log(`FAIL ${loc} (${slugs.length} slugs):`);
    issues.forEach((i) => console.log('  - ' + i));
    failed++;
  } else {
    console.log(`PASS ${loc}: ${slugs.length}/19 slugs OK, maxDescLen=${maxDesc}`);
  }
}

console.log(failed === 0 ? 'ALL 18 LOCALES PASS' : `${failed} locale file(s) FAILED`);
process.exit(failed === 0 ? 0 : 1);
