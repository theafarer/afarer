const fs = require('fs');
const s = fs.readFileSync('E:/github/afarer/src/pages/[lang]/index.astro', 'utf8');
const lines = s.split('\n');
lines.forEach((l, i) => {
  if (/'\/' \+ lang/.test(l) || /`\/\$\{lang\}/.test(l)) console.log(`${i + 1}: ${l.trim().slice(0, 160)}`);
});
