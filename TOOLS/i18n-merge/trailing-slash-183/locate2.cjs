const fs = require('fs');
const path = require('path');

const DIST = 'E:/github/afarer/dist';
const NEEDLES = [
  'href="/ar/distributor-program"',
  'href="/media"',
  'href="/news"',
  'href="/about"',
  'href="/pl/factory"',
  'href="/contact?subject=Co-Brand Project"',
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
    if (hits.length >= 3) break;
  }
  console.log(`\n### ${n} (${hits.length})`);
  for (const h of hits) console.log('   ' + h);
}
