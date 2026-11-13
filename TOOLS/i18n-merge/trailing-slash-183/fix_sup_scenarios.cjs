const fs = require('fs');
const fp = 'E:/github/afarer/src/data/sup-scenarios.ts';
let s = fs.readFileSync(fp, 'utf8');
const re = /href: '(\/[^'?]*)'/g;
let n = 0;
s = s.replace(re, (f, h) => {
  if (h.endsWith('/')) return f;
  n++;
  return "href: '" + h + "/'";
});
fs.writeFileSync(fp, s);
console.log('slashed:', n);
console.log((s.match(/href: '[^']*'/g) || []).join('\n'));
