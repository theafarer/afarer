const fs = require('fs');
const x = fs.readFileSync('E:/github/afarer/dist/sitemap-0.xml', 'utf8');
const urls = [...x.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const uc = urls.filter((u) => u.includes('/use-cases/'));
const bySlug = {};
for (const u of uc) {
  const slug = u.split('/use-cases/')[1]?.replace(/\/$/, '');
  bySlug[slug] = (bySlug[slug] || 0) + 1;
}
console.log('total use-cases URLs in sitemap:', uc.length);
Object.entries(bySlug)
  .sort()
  .forEach(([s, n]) => console.log(' ', s, ':', n));
console.log('\nstale URLs sample:');
urls
  .filter((u) => /use-cases\/(touring-distance-paddling|fishing-from-inflatable-craft)\//.test(u))
  .slice(0, 14)
  .forEach((u) => console.log(' ', u));
console.log('\ntouring URLs:', urls.filter((u) => /\/touring\/$/.test(u)).length);
console.log('de touring URL present:', urls.includes('https://afarer.com/de/use-cases/touring/'));
