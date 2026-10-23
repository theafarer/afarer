const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const partsDir = 'C:/Users/Helleo/AppData/Local/Temp/deveco/el_work/parts';
const enPath = 'E:/github/afarer/src/data/site/content-v2.yaml';

const en = yaml.load(fs.readFileSync(enPath, 'utf8'));
const enSlice = en.slice(50, 75); // records 51-75

const partFiles = ['_v2el_b4_p1.yaml', '_v2el_b4_p2.yaml', '_v2el_b4_p3.yaml', '_v2el_b4_p4.yaml', '_v2el_b4_p5.yaml'];
let records = [];
for (const f of partFiles) {
  const p = yaml.load(fs.readFileSync(path.join(partsDir, f), 'utf8'));
  records = records.concat(p);
}

let errors = [];
let warns = [];

if (records.length !== 25) errors.push(`record count ${records.length} != 25`);

const FIELDS = [
  'slug',
  'title',
  'description',
  'definition',
  'tldr',
  'problem',
  'explanation',
  'solution',
  'recommendation',
  'faq',
];

records.forEach((r, i) => {
  const enR = enSlice[i];
  const id = `${i + 51}(${r.slug || '?'})`;
  if (r.slug !== enR.slug) errors.push(`${id}: slug mismatch vs EN ${enR.slug}`);
  const keys = Object.keys(r);
  for (const k of keys) if (!FIELDS.includes(k)) errors.push(`${id}: unexpected field '${k}'`);
  for (const f of FIELDS) {
    if (f === 'faq') continue;
    if (typeof r[f] !== 'string' || r[f].length < 10) errors.push(`${id}: field '${f}' missing/short`);
  }
  if (!Array.isArray(r.faq) || r.faq.length !== enR.faq.length) {
    errors.push(`${id}: faq count ${r.faq ? r.faq.length : '?'} != EN ${enR.faq.length}`);
  } else {
    r.faq.forEach((f, j) => {
      if (typeof f.q !== 'string' || f.q.length < 5) errors.push(`${id}: faq[${j}].q missing`);
      if (typeof f.a !== 'string' || f.a.length < 10) errors.push(`${id}: faq[${j}].a missing`);
    });
  }
  const allText =
    FIELDS.filter((f) => f !== 'slug' && f !== 'faq')
      .map((f) => r[f] || '')
      .join(' ') + (r.faq || []).map((f) => (f.q || '') + ' ' + (f.a || '')).join(' ');
  if (/\b(the|and you|your board|when you|with the|of the|for the)\b/i.test(allText)) {
    warns.push(`${id}: possible EN residue`);
  }
  if (/[\u4e00-\u9fff]/.test(allText)) errors.push(`${id}: CJK chars`);
});

console.log(`records: ${records.length}`);
console.log(`errors: ${errors.length}`);
errors.forEach((e) => console.log('ERROR: ' + e));
warns.forEach((w) => console.log('WARN: ' + w));
console.log(errors.length === 0 ? 'BATCH4 CHECKS PASSED' : 'BATCH4 CHECKS FAILED');
process.exit(errors.length === 0 ? 0 : 1);
