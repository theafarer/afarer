const fs = require('fs');
const path = require('path');

const DIST = 'E:/github/afarer/dist';
const NEEDLES = [
  'href="/resources/download-catalog"',
  'href="/contact"',
  'href="/products/sup-touring-cruiser"',
  "href=\"/' + lang + '/guides\"",
  'href="/distributor-program"',
  'href="/internal/seo/social"',
  'href="/pl/contact"',
  'href="/contact?package=oem"',
];

function walkHtml(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkHtml(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const all = walkHtml(DIST);
for (const n of NEEDLES) {
  const hits = [];
  for (const p of all) {
    const s = fs.readFileSync(p, 'utf8');
    if (s.includes(n)) hits.push(p.replace(/\\/g, '/').replace(DIST + '/', ''));
    if (hits.length >= 4) break;
  }
  console.log(`\n### ${n}  (${hits.length}${hits.length >= 4 ? '+' : ''} shown)`);
  for (const h of hits) console.log('   ' + h);
}
