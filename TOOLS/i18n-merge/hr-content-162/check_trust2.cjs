const fs = require('fs');
const h = fs.readFileSync('E:/github/afarer/dist/hr/about/index.html', 'utf8');
const needles = [
  'ISO i CE certificirano',
  'Svaki proizvod ispunjava međunarodne standarde',
  'Stroga ispitivanja',
  'Garancija 2 godine',
  'BSCI certificirano',
  'REACH sukladnost',
];
for (const n of needles) console.log(n + ' => ' + (h.includes(n) ? 'PASS' : 'FAIL'));
// use-cases + learning-center consumers
const uc = fs.readFileSync('E:/github/afarer/dist/hr/use-cases/index.html', 'utf8');
console.log('--- use-cases page hr text:');
for (const n of ['stabilnu opremu', 'veslanje na dasci']) console.log(n + ' => ' + (uc.includes(n) ? 'PASS' : 'FAIL'));
