/* Merge _v2{ro,th}_p1..p4 temp parts into content-v2.{ro,th}.yaml and validate. */
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');

const TEMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const PROJ = 'E:/github/afarer';
const projRequire = createRequire(path.join(PROJ, 'package.json'));
const yaml = projRequire('js-yaml');

const EN_FILE = path.join(PROJ, 'src/data/site/content-v2.yaml');
const enRaw = fs.readFileSync(EN_FILE, 'utf8');
const enRecords = yaml.load(enRaw);
const enSlugsAll = enRecords.map((r) => r.slug);
const first16 = enSlugsAll.slice(0, 16);
const enBySlug = new Map(enRecords.map((r) => [r.slug, r]));
const enSlugSet = new Set(enSlugsAll);

const REQUIRED_FIELDS = [
  'title',
  'description',
  'definition',
  'tldr',
  'problem',
  'explanation',
  'solution',
  'recommendation',
];
const OVERRIDE_KEYS = ['slug', ...REQUIRED_FIELDS, 'faq'];

let errors = [];
let warnings = [];

function mergeParts(lang) {
  const parts = [1, 2, 3, 4].map((i) => fs.readFileSync(path.join(TEMP, `_v2${lang}_p${i}.yaml`), 'utf8'));
  const merged = parts.map((p) => p.replace(/\r\n/g, '\n').replace(/\n+$/, '')).join('\n') + '\n';
  return merged;
}

function validate(lang, merged) {
  // No BOM, no FFFD, no tabs
  if (merged.charCodeAt(0) === 0xfeff) errors.push(`${lang}: file starts with BOM`);
  if (/\uFFFD/.test(merged)) errors.push(`${lang}: contains U+FFFD replacement char`);
  if (/\t/.test(merged)) errors.push(`${lang}: contains tab char`);
  // No CJK / fullwidth forms / ideographic space
  const badChar = merged.match(/[\u4e00-\u9fff\u3040-\u30ff\uFF01-\uFF5E\u3000]/);
  if (badChar)
    errors.push(
      `${lang}: contains CJK/fullwidth char near: ${JSON.stringify(merged.slice(Math.max(0, badChar.index - 20), badChar.index + 20))}`
    );

  let records;
  try {
    records = yaml.load(merged);
  } catch (e) {
    errors.push(`${lang}: YAML parse error: ${e.message}`);
    return;
  }
  if (!Array.isArray(records)) {
    errors.push(`${lang}: merged YAML is not an array`);
    return;
  }
  if (records.length !== 16) errors.push(`${lang}: expected 16 records, got ${records.length}`);

  const seen = new Set();
  for (const rec of records) {
    const slug = rec.slug;
    if (!enSlugSet.has(slug)) {
      errors.push(`${lang}: unknown slug ${slug}`);
      continue;
    }
    if (seen.has(slug)) errors.push(`${lang}: duplicate slug ${slug}`);
    seen.add(slug);

    const extraKeys = Object.keys(rec).filter((k) => !OVERRIDE_KEYS.includes(k));
    if (extraKeys.length) warnings.push(`${lang}/${slug}: extra keys ${extraKeys.join(',')}`);

    for (const f of REQUIRED_FIELDS) {
      const v = rec[f];
      if (typeof v !== 'string' || v.trim().length === 0) {
        errors.push(`${lang}/${slug}: field ${f} missing or empty`);
        continue;
      }
      if (/[\u4e00-\u9fff]/.test(v)) errors.push(`${lang}/${slug}: field ${f} contains Chinese`);
    }
    const en = enBySlug.get(slug);
    const faq = rec.faq;
    if (!Array.isArray(faq) || faq.length === 0) {
      errors.push(`${lang}/${slug}: faq missing`);
    } else {
      if (en && faq.length !== (en.faq || []).length)
        errors.push(`${lang}/${slug}: faq count ${faq.length} != EN ${(en.faq || []).length}`);
      faq.forEach((item, i) => {
        if (typeof item.q !== 'string' || !item.q.trim()) errors.push(`${lang}/${slug}: faq[${i}].q missing`);
        if (typeof item.a !== 'string' || !item.a.trim()) errors.push(`${lang}/${slug}: faq[${i}].a missing`);
        const extra = Object.keys(item).filter((k) => k !== 'q' && k !== 'a');
        if (extra.length) warnings.push(`${lang}/${slug}: faq[${i}] extra keys ${extra.join(',')}`);
      });
    }
  }
  // coverage: must equal first 16 EN slugs
  for (const s of first16) {
    if (!seen.has(s)) errors.push(`${lang}: missing expected slug ${s}`);
  }
  // lang-specific scans
  if (lang === 'ro') {
    if (!/[ăâîșț]/.test(merged)) errors.push('ro: no Romanian diacritics found');
    const nonDia = merged.match(/\b[a-z]+\b/g) || [];
    // token sanity: look for suspicious double spaces in sentences is fine; skip
  }
  if (lang === 'th') {
    if (!/[\u0e00-\u0e7f]/.test(merged)) errors.push('th: no Thai characters found');
  }
  console.log(`${lang}: ${records.length} records, slugs ok=${[...seen].length}`);
}

const outFiles = [];
for (const lang of ['ro', 'th']) {
  const merged = mergeParts(lang);
  validate(lang, merged);
  const outFile = path.join(PROJ, `src/data/site/content-v2.${lang}.yaml`);
  fs.writeFileSync(outFile, merged, 'utf8');
  outFiles.push(outFile);
}

if (warnings.length) console.log('WARNINGS:\n' + warnings.join('\n'));
if (errors.length) {
  console.error('ERRORS:\n' + errors.join('\n'));
  process.exit(1);
}
console.log('ALL OK. Written:');
for (const f of outFiles) console.log('  ' + f + ' (' + fs.statSync(f).size + ' bytes)');
