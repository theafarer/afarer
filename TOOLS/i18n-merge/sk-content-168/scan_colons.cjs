const fs = require('fs');
const path = require('path');
const dir = __dirname;
const re = /^(\s*(?:slug|title|description|definition|tldr|problem|explanation|solution|recommendation|q|a):\s)(.*)$/;
for (let i = 1; i <= 24; i++) {
  const name = 'c' + String(i).padStart(2, '0') + '_sk.yaml';
  const lines = fs.readFileSync(path.join(dir, name), 'utf8').split(/\r?\n/);
  lines.forEach((line, idx) => {
    const m = line.match(re);
    if (!m) return;
    const val = m[2];
    if (val === '') return;
    const first = val[0];
    if (first === "'" || first === '"' || first === '[' || first === '-' || first === '|') return;
    if (val.includes(': ') || val.endsWith(':')) {
      console.log(name + ':' + (idx + 1) + ': PLAIN-SCALAR-COLON');
      console.log('   ' + line.substring(0, 160));
    }
  });
}
