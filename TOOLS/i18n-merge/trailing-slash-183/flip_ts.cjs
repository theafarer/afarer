const fs = require('fs');
const path = require('path');
const dir = 'E:/github/afarer/src';
const files = fs
  .readdirSync(dir)
  .filter((f) => /^config(\.[a-z]{2})?\.yaml$/.test(f))
  .map((f) => path.join(dir, f));
let n = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  const before = s;
  s = s.replace(/trailingSlash: false/g, 'trailingSlash: true');
  if (s !== before) {
    fs.writeFileSync(f, s, 'utf8');
    n++;
    console.log('flipped:', path.basename(f));
  }
}
console.log('total flipped:', n, '/', files.length);
