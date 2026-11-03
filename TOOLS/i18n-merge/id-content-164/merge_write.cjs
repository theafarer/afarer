const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:\\github\\afarer', 'node_modules', 'js-yaml'));

const dir = __dirname;
const outPath = 'E:\\github\\afarer\\src\\data\\site\\content-v2.id.yaml';

let id = [];
for (let i = 1; i <= 24; i++) {
  const p = path.join(dir, 'c' + String(i).padStart(2, '0') + '_id.yaml');
  const doc = yaml.load(fs.readFileSync(p, 'utf8'));
  id = id.concat(doc);
}
console.log('Total articles:', id.length);

const dumped = yaml.dump(id, { lineWidth: -1, noRefs: true, quotingType: "'" });
fs.writeFileSync(outPath, dumped, 'utf8');
console.log('Written:', outPath, dumped.length, 'chars');

const back = yaml.load(fs.readFileSync(outPath, 'utf8'));
console.log('Round-trip articles:', back.length);
const ok = back.length === 71 && back.every((a) => a.slug && a.title && a.faq);
console.log(ok ? 'ROUND-TRIP OK' : 'ROUND-TRIP FAIL');
