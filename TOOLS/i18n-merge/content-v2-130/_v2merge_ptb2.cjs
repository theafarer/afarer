/* Append pt batch-2 parts (17 records) to existing content-v2.pt.yaml and validate (33 total, order matches EN 1-33). */
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');
const req = createRequire('E:\\github\\afarer\\node_modules\\js-yaml\\package.json');
const yaml = req('js-yaml');

const TMP = 'C:\\Users\\Helleo\\AppData\\Local\\Temp\\deveco';
const OUT = 'E:\\github\\afarer\\src\\data\\site\\content-v2.pt.yaml';
const PARTS = ['_v2pt_b2_p1.yaml', '_v2pt_b2_p2.yaml', '_v2pt_b2_p3.yaml', '_v2pt_b2_p4.yaml'];

const existing = fs.readFileSync(OUT, 'utf8');
const before = yaml.load(existing);
console.log('existing records:', before.length);
if (before.length !== 16) {
  console.log('FAIL: expected 16 existing records');
  process.exit(1);
}

let append = '';
for (const p of PARTS) {
  const raw = fs.readFileSync(path.join(TMP, p), 'utf8');
  append += raw.trimEnd() + '\n';
}
fs.writeFileSync(OUT, existing.trimEnd() + '\n' + append, 'utf8');
console.log('appended', append.length, 'chars');

const docs = yaml.load(fs.readFileSync(OUT, 'utf8'));
console.log('total records:', docs.length);
if (docs.length !== 33) {
  console.log('FAIL: expected 33 records');
  process.exit(1);
}
const slugs = docs.map((r) => r.slug);
const unique = new Set(slugs);
console.log('unique slugs:', unique.size);
if (unique.size !== 33) {
  console.log('FAIL: duplicate slugs');
  process.exit(1);
}
const enDocs = yaml.load(fs.readFileSync('E:\\github\\afarer\\src\\data\\site\\content-v2.yaml', 'utf8'));
const enSlugs = enDocs.slice(0, 33).map((r) => r.slug);
for (let i = 0; i < 33; i++) {
  if (slugs[i] !== enSlugs[i]) {
    console.log('FAIL: order mismatch at ' + i + ': ' + slugs[i] + ' != ' + enSlugs[i]);
    process.exit(1);
  }
}
console.log('order matches EN 1-33');
console.log('MERGE OK');
