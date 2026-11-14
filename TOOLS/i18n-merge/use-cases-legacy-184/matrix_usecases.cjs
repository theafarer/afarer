const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const locales = fs.readdirSync(DIST).filter((d) => fs.existsSync(path.join(DIST, d, 'use-cases')));
const map = {};
for (const loc of locales) {
  const ucDir = path.join(DIST, loc, 'use-cases');
  const slugs = fs.readdirSync(ucDir).filter((d) => fs.statSync(path.join(ucDir, d)).isDirectory());
  map[loc] = slugs.sort();
}
// print matrix
const allSlugs = [...new Set(Object.values(map).flat())].sort();
console.log('locale  '.padEnd(8), allSlugs.map((s) => s.padEnd(30)).join(''));
for (const loc of Object.keys(map).sort()) {
  console.log(loc.padEnd(8), allSlugs.map((s) => (map[loc].includes(s) ? 'X'.padEnd(30) : '-'.padEnd(30))).join(''));
}
