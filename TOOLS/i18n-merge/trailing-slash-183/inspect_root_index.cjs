const fs = require('fs');
const h = fs.readFileSync('E:/github/afarer/dist/index.html', 'utf8');
const c = h.match(/rel="canonical" href="([^"]+)"/);
console.log('canonical:', c && c[1]);
const t = h.match(/<title>([^<]*)<\/title>/);
console.log('title:', t && t[1]);
const re = /href="(\/[^"]+)"/g;
let m;
const set = new Set();
while ((m = re.exec(h))) {
  const b = m[1].split(/[?#]/)[0];
  if (!/\.[a-z0-9]{1,6}$/i.test(b) && !b.endsWith('/') && b !== '/') set.add(m[1]);
}
console.log('slashless count:', set.size);
console.log([...set].sort().join('\n'));
