const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'parts');
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.yaml'))
  .sort();
let bad = 0;
for (const f of files) {
  const c = fs.readFileSync(path.join(dir, f), 'utf8');
  const chars = [];
  for (const ch of c) {
    const code = ch.codePointAt(0);
    if (
      (code >= 0x4e00 && code <= 0x9fff) ||
      (code >= 0x3000 && code <= 0x303f) ||
      (code >= 0xff00 && code <= 0xffef) ||
      (code >= 0x400 && code <= 0x4ff)
    ) {
      chars.push('U+' + code.toString(16).toUpperCase().padStart(4, '0'));
    }
  }
  if (chars.length) {
    bad++;
    console.log('STRAY', f, [...new Set(chars)].join(' '));
  }
}
console.log(bad === 0 ? 'ALL CLEAN (' + files.length + ' files)' : bad + ' file(s) with stray chars');
