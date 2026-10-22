/* Merge all ru batch parts (75 records) into new content-v2.ru.yaml and validate (75 total, order matches EN 1-75). */
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');
const req = createRequire('E:\\github\\afarer\\node_modules\\js-yaml\\package.json');
const yaml = req('js-yaml');

const PARTS_DIR = 'C:\\Users\\Helleo\\AppData\\Local\\Temp\\deveco\\ru_work\\parts';
const OUT = 'E:\\github\\afarer\\src\\data\\site\\content-v2.ru.yaml';
const PARTS = [
  '_v2ru_b1_p1.yaml',
  '_v2ru_b1_p2.yaml',
  '_v2ru_b1_p3.yaml',
  '_v2ru_b1_p4.yaml',
  '_v2ru_b2_p1.yaml',
  '_v2ru_b2_p2.yaml',
  '_v2ru_b2_p3.yaml',
  '_v2ru_b2_p4.yaml',
  '_v2ru_b3_p1.yaml',
  '_v2ru_b3_p2.yaml',
  '_v2ru_b3_p3.yaml',
  '_v2ru_b3_p4.yaml',
  '_v2ru_b4_p1.yaml',
  '_v2ru_b4_p2.yaml',
  '_v2ru_b4_p3.yaml',
  '_v2ru_b4_p4.yaml',
  '_v2ru_b4_p5.yaml',
];

let merged = '';
for (const p of PARTS) {
  const raw = fs.readFileSync(path.join(PARTS_DIR, p), 'utf8');
  merged += raw.trimEnd() + '\n';
}
fs.writeFileSync(OUT, merged, 'utf8');
console.log('wrote', merged.length, 'chars');

const docs = yaml.load(fs.readFileSync(OUT, 'utf8'));
console.log('total records:', docs.length);
if (docs.length !== 75) {
  console.log('FAIL: expected 75 records');
  process.exit(1);
}
const slugs = docs.map((r) => r.slug);
const unique = new Set(slugs);
console.log('unique slugs:', unique.size);
if (unique.size !== 75) {
  console.log('FAIL: duplicate slugs');
  process.exit(1);
}
const enDocs = yaml.load(fs.readFileSync('E:\\github\\afarer\\src\\data\\site\\content-v2.yaml', 'utf8'));
const enSlugs = enDocs.slice(0, 75).map((r) => r.slug);
for (let i = 0; i < 75; i++) {
  if (slugs[i] !== enSlugs[i]) {
    console.log('FAIL: order mismatch at ' + i + ': ' + slugs[i] + ' != ' + enSlugs[i]);
    process.exit(1);
  }
}
// Per-record field + faq count validation
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
for (let i = 0; i < 75; i++) {
  const r = docs[i];
  const keys = Object.keys(r);
  for (const k of keys)
    if (!FIELDS.includes(k)) {
      console.log('FAIL: unexpected field ' + k + ' in record ' + (i + 1));
      process.exit(1);
    }
  for (const f of FIELDS) {
    if (f === 'faq') continue;
    if (typeof r[f] !== 'string' || r[f].length < 10) {
      console.log('FAIL: field ' + f + ' missing/short in record ' + (i + 1));
      process.exit(1);
    }
  }
  if (!Array.isArray(r.faq) || r.faq.length !== enDocs[i].faq.length) {
    console.log('FAIL: faq count in record ' + (i + 1));
    process.exit(1);
  }
}
console.log('order + fields + faq counts match EN 1-75');
console.log('MERGE OK');
