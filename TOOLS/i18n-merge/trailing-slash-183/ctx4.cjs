const fs = require('fs');
const cases = [
  ['E:/github/afarer/dist/ar/search/index.html', "' + lang + '/guides"],
  ['E:/github/afarer/dist/ar/journal/index.html', '/internal/seo/social'],
  ['E:/github/afarer/dist/ar/b2b-solutions-matrix/index.html', 'href="/resources/download-catalog"'],
  ['E:/github/afarer/dist/academy/index.html', 'href="/contact"'],
  ['E:/github/afarer/dist/ar/products/compare/index.html', 'href="/products/sup-touring-cruiser"'],
  ['E:/github/afarer/dist/pl/fabricant-sup-gonflable/index.html', 'href="/pl/contact"'],
  ['E:/github/afarer/dist/ar/news/private-label-sup-oem-guide/index.html', 'href="/contact?package=oem"'],
];
for (const [f, needle] of cases) {
  const s = fs.readFileSync(f, 'utf8');
  const i = s.indexOf(needle);
  console.log('### ' + needle + ' @ ' + f.split('dist/')[1]);
  console.log(JSON.stringify(s.slice(Math.max(0, i - 350), i + 150)));
  console.log();
}
