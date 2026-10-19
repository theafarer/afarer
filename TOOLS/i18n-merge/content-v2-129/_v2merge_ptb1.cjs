/* Merge pt batch-1 parts into a NEW content-v2.pt.yaml (first 16 records) and validate. */
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');
const req = createRequire('E:\\github\\afarer\\node_modules\\js-yaml\\package.json');
const yaml = req('js-yaml');

const TMP = 'C:\\Users\\Helleo\\AppData\\Local\\Temp\\deveco';
const OUT = 'E:\\github\\afarer\\src\\data\\site\\content-v2.pt.yaml';
const PARTS = ['_v2pt_b1_p1.yaml', '_v2pt_b1_p2.yaml', '_v2pt_b1_p3.yaml', '_v2pt_b1_p4.yaml'];

let merged = '';
for (const p of PARTS) {
  const raw = fs.readFileSync(path.join(TMP, p), 'utf8');
  merged += raw.trimEnd() + '\n';
}
fs.writeFileSync(OUT, merged, 'utf8');
console.log('written', OUT, merged.length, 'chars');

const docs = yaml.load(fs.readFileSync(OUT, 'utf8'));
console.log('records:', docs.length);
if (docs.length !== 16) {
  console.log('FAIL: expected 16 records');
  process.exit(1);
}
const slugs = docs.map((r) => r.slug);
const unique = new Set(slugs);
console.log('unique slugs:', unique.size);
if (unique.size !== 16) {
  console.log('FAIL: duplicate slugs');
  process.exit(1);
}
const enDocs = yaml.load(fs.readFileSync('E:\\github\\afarer\\src\\data\\site\\content-v2.yaml', 'utf8'));
const enSlugs = enDocs.slice(0, 16).map((r) => r.slug);
for (let i = 0; i < 16; i++) {
  if (slugs[i] !== enSlugs[i]) {
    console.log('FAIL: order mismatch at ' + i + ': ' + slugs[i] + ' != ' + enSlugs[i]);
    process.exit(1);
  }
}
console.log('order matches EN 1-16');
console.log('MERGE OK');
