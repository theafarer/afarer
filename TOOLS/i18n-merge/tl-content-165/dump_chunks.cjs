const fs = require('fs');
const path = require('path');
const js = require('E:/github/afarer/node_modules/js-yaml');

const DIR = __dirname;
const EN = js.load(fs.readFileSync('E:/github/afarer/src/data/site/content-v2.yaml', 'utf8'));
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

const cleaned = EN.map((a) => {
  const o = {};
  for (const f of FIELDS) o[f] = a[f];
  return o;
});

const PER = 3;
const chunks = [];
for (let i = 0; i < cleaned.length; i += PER) chunks.push(cleaned.slice(i, i + PER));

chunks.forEach((chunk, i) => {
  const n = String(i + 1).padStart(2, '0');
  const out = js.dump(chunk, { lineWidth: -1, noRefs: true });
  fs.writeFileSync(path.join(DIR, `c${n}_en.yaml`), out, 'utf8');
});

console.log(`articles=${cleaned.length} chunks=${chunks.length}`);
console.log('slugs:', cleaned.map((a) => a.slug).join(', '));
