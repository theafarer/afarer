/* Batch 4: append temp parts _v2{ro,th}_p1..p4 (EN records 49-75) onto existing
   content-v2.{ro,th}.yaml (48 records from batches 1-3) -> 75 records, then validate. */
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');

const TEMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const PROJ = 'E:/github/afarer';
const projRequire = createRequire(path.join(PROJ, 'package.json'));
const yaml = projRequire('js-yaml');

const EN_FILE = path.join(PROJ, 'src/data/site/content-v2.yaml');
const enRecords = yaml.load(fs.readFileSync(EN_FILE, 'utf8'));
const enSlugsAll = enRecords.map((r) => r.slug);
const first48 = enSlugsAll.slice(0, 48);
const first75 = enSlugsAll.slice(0, 75);
const batch4Slugs = enSlugsAll.slice(48, 75);
const first48Set = new Set(first48);
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
  return parts.map((p) => p.replace(/\r\n/g, '\n').replace(/\n+$/, '')).join('\n') + '\n';
}

function checkText(lang, text, label) {
  if (text.charCodeAt(0) === 0xfeff) errors.push(`${lang}/${label}: starts with BOM`);
  if (/\uFFFD/.test(text)) errors.push(`${lang}/${label}: contains U+FFFD`);
  if (/\t/.test(text)) errors.push(`${lang}/${label}: contains tab char`);
  const badChar = text.match(/[\u4e00-\u9fff\u3040-\u30ff\uFF01-\uFF5E\u3000]/);
  if (badChar)
    errors.push(
      `${lang}/${label}: CJK/fullwidth char near: ${JSON.stringify(text.slice(Math.max(0, badChar.index - 20), badChar.index + 20))}`
    );
}

function validateRecords(lang, records, expectedSlugs, label) {
  if (!Array.isArray(records)) {
    errors.push(`${lang}/${label}: not an array`);
    return;
  }
  if (records.length !== expectedSlugs.length)
    errors.push(`${lang}/${label}: expected ${expectedSlugs.length} records, got ${records.length}`);
  const seen = new Set();
  for (const rec of records) {
    const slug = rec.slug;
    if (!enSlugSet.has(slug)) {
      errors.push(`${lang}/${label}: unknown slug ${slug}`);
      continue;
    }
    if (seen.has(slug)) errors.push(`${lang}/${label}: duplicate slug ${slug}`);
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
  for (const s of expectedSlugs) {
    if (!seen.has(s)) errors.push(`${lang}/${label}: missing expected slug ${s}`);
  }
}

const outFiles = [];
for (const lang of ['ro', 'th']) {
  // 1) new parts from temp
  const newText = mergeParts(lang);
  checkText(lang, newText, 'new-parts');
  let newRecords;
  try {
    newRecords = yaml.load(newText);
  } catch (e) {
    errors.push(`${lang}: new parts YAML parse error: ${e.message}`);
    continue;
  }
  // new parts must not overlap existing 48
  if (Array.isArray(newRecords)) {
    for (const rec of newRecords) {
      if (rec.slug && first48Set.has(rec.slug)) errors.push(`${lang}: new part overlaps existing slug ${rec.slug}`);
    }
  }
  validateRecords(lang, newRecords, batch4Slugs, 'new-parts');

  // 2) existing overlay file
  const outFile = path.join(PROJ, `src/data/site/content-v2.${lang}.yaml`);
  const existingRaw = fs.readFileSync(outFile, 'utf8');
  checkText(lang, existingRaw, 'existing');
  let existingRecords;
  try {
    existingRecords = yaml.load(existingRaw);
  } catch (e) {
    errors.push(`${lang}: existing file YAML parse error: ${e.message}`);
    continue;
  }
  validateRecords(lang, existingRecords, first48, 'existing');

  if (errors.length) continue; // don't write if anything is off

  // 3) combine: existing 48 + new 27, ordered as EN first 75
  const combined = existingRecords.concat(newRecords);
  const orderMap = new Map(first75.map((s, i) => [s, i]));
  combined.sort((a, b) => orderMap.get(a.slug) - orderMap.get(b.slug));
  const combinedSlugs = combined.map((r) => r.slug);
  if (combinedSlugs.join('|') !== first75.join('|')) {
    errors.push(`${lang}: combined slug order mismatch`);
    continue;
  }

  // 4) write as raw concatenation; prettier --write normalizes afterwards
  const outText = existingRaw.replace(/\r\n/g, '\n').replace(/\n+$/, '') + '\n' + newText;
  fs.writeFileSync(outFile, outText, 'utf8');

  // 5) re-read and final validate
  const finalRecords = yaml.load(fs.readFileSync(outFile, 'utf8'));
  validateRecords(lang, finalRecords, first75, 'final');
  if (lang === 'ro' && !/[ăâîșț]/.test(outText)) errors.push('ro: no Romanian diacritics found');
  if (lang === 'th' && !/[\u0e00-\u0e7f]/.test(outText)) errors.push('th: no Thai characters found');
  console.log(`${lang}: ${finalRecords.length} records written (${first48.length} old + ${newRecords.length} new)`);
  outFiles.push(outFile);
}

if (warnings.length) console.log('WARNINGS:\n' + warnings.join('\n'));
if (errors.length) {
  console.error('ERRORS:\n' + errors.join('\n'));
  process.exit(1);
}
console.log('ALL OK. Written:');
for (const f of outFiles) console.log('  ' + f + ' (' + fs.statSync(f).size + ' bytes)');
