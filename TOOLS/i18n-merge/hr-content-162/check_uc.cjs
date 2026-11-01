const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const uc = yaml.load(fs.readFileSync('E:/github/afarer/src/data/site/use-cases.hr.yaml', 'utf8'));
console.log('use-cases.hr.yaml top keys:', Object.keys(uc));
const s = JSON.stringify(uc);
const strs = s.match(/[\u0100-\u017E][^"\\]{20,50}/g) || [];
console.log('samples:', strs.slice(0, 5));
const html = fs.readFileSync('E:/github/afarer/dist/hr/use-cases/index.html', 'utf8');
for (const st of strs.slice(0, 8)) console.log('HTML has "' + st + '":', html.includes(st));
// also check homepage
const home = fs.readFileSync('E:/github/afarer/dist/hr/index.html', 'utf8');
for (const st of strs.slice(0, 8)) console.log('HOME has "' + st + '":', home.includes(st));
