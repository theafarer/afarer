/* Dump EN content-v2 records 51-75 (all override fields + faq) to a temp file for pt batch-4 translation. */
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');

const PROJ = 'E:/github/afarer';
const projRequire = createRequire(path.join(PROJ, 'package.json'));
const yaml = projRequire('js-yaml');

const enRecords = yaml.load(fs.readFileSync(path.join(PROJ, 'src/data/site/content-v2.yaml'), 'utf8'));
console.log('total EN records:', enRecords.length);
const FIELDS = ['title', 'description', 'definition', 'tldr', 'problem', 'explanation', 'solution', 'recommendation'];

let out = '';
enRecords.slice(50, 75).forEach((r, idx) => {
  out += `=== #${idx + 51} ${r.slug} ===\n`;
  for (const f of FIELDS) {
    out += `--- ${f} ---\n${r[f]}\n`;
  }
  out += `--- faq (${r.faq.length}) ---\n`;
  r.faq.forEach((item, i) => {
    out += `Q${i + 1}: ${item.q}\nA${i + 1}: ${item.a}\n`;
  });
  out += '\n';
});
fs.writeFileSync('C:/Users/Helleo/AppData/Local/Temp/deveco/_en_v2_ptb4.txt', out, 'utf8');
console.log('written _en_v2_ptb4.txt', out.length, 'chars');
console.log(
  'slugs 51-75:',
  enRecords
    .slice(50, 75)
    .map((r) => r.slug)
    .join(', ')
);
console.log(
  'faq counts 51-75:',
  enRecords
    .slice(50, 75)
    .map((r) => r.faq.length)
    .join(', ')
);
