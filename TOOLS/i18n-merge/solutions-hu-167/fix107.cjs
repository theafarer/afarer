const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'parts', '12_luxury-portable-sup-package.yaml');
let t = fs.readFileSync(p, 'utf8');
const m = 'felszereléssel.';
const i = t.lastIndexOf(m);
if (i < 0) {
  console.log('marker not found');
  process.exit(1);
}
let j = i + m.length;
while (t[j] === "'") j++;
const removed = j - (i + m.length);
t = t.slice(0, i) + m + "'''" + t.slice(j);
fs.writeFileSync(p, t);
console.log('replaced quote run of', removed, 'with 3');
