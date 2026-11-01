const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const lc = yaml.load(fs.readFileSync('E:/github/afarer/src/data/site/learning-center.hr.yaml', 'utf8'));
const strs = (JSON.stringify(lc).match(/[\u0100-\u017E][^"\\]{20,50}/g) || []).slice(0, 6);
const home = fs.readFileSync('E:/github/afarer/dist/hr/index.html', 'utf8');
for (const st of strs) console.log('HOME has lc hr: ' + home.includes(st));
// parity check: /th/use-cases page falls back to EN too?
const thuc = fs.readFileSync('E:/github/afarer/dist/th/use-cases/index.html', 'utf8');
console.log(
  'TH use-cases page has EN text (fallback parity):',
  thuc.includes('stability') || thuc.includes('beginner')
);
