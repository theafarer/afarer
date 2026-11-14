const fs = require('fs');
const pages = [
  'fr/use-cases/fishing',
  'fr/use-cases/fishing-from-inflatable-craft',
  'de/use-cases/touring-distance-paddling',
  'en/use-cases/touring',
  'en/use-cases/fishing',
  'de/use-cases/touring',
];
for (const p of pages) {
  const f = 'E:/github/afarer/dist/' + p + '/index.html';
  if (!fs.existsSync(f)) {
    console.log(p, ': MISSING');
    continue;
  }
  const h = fs.readFileSync(f, 'utf8');
  const t = h.match(/<title>([^<]*)<\/title>/);
  const c = h.match(/rel="canonical" href="([^"]+)"/);
  console.log(p);
  console.log('  title:', t && t[1]);
  console.log('  canonical:', c && c[1]);
}
