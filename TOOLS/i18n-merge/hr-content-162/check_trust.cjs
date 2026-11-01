const fs = require('fs');
const h = fs.readFileSync('E:/github/afarer/dist/hr/index.html', 'utf8');
const needles = ['ISO i CE certificirano', 'Svaki proizvod ispunjava', 'BSCI certificirano', 'REACH sukladnost'];
for (const n of needles) console.log(n + ' => ' + (h.includes(n) ? 'PASS' : 'FAIL'));
// which pages use TrustBadges with locale? search a couple of other pages
const other = ['hr/about/index.html', 'hr/factory/index.html', 'hr/trust/index.html', 'hr/products/index.html'];
for (const p of other) {
  try {
    const c = fs.readFileSync('E:/github/afarer/dist/' + p, 'utf8');
    console.log(p + ' => ' + (c.includes('ISO i CE certificirano') ? 'HAS HR TRUST' : 'no hr trust text'));
  } catch (e) {
    console.log(p + ' missing');
  }
}
