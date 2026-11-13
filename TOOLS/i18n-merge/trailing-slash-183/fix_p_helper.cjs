const fs = require('fs');
const files = [
  'E:/github/afarer/src/pages/[lang]/buyer-center/index.astro',
  'E:/github/afarer/src/pages/[lang]/people/index.astro',
];
let n = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  const before = s;
  s = s.replace(
    /const p = \(path: string\) => \(lang === 'en' \? withTrailingSlash\(path\) : withTrailingSlash\(`\/\$\{lang\}\$\{path\}`\)\)\);/,
    "const p = (path: string) => (lang === 'en' ? withTrailingSlash(path) : withTrailingSlash(`/${lang}${path}`));"
  );
  if (s !== before) {
    fs.writeFileSync(f, s);
    n++;
    console.log('fixed', f);
  } else {
    console.log('NO MATCH', f);
  }
}
console.log('fixed:', n);
