const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'parts');
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.yaml'))
  .sort();
for (const f of files) {
  const lines = fs.readFileSync(path.join(dir, f), 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    let s = line;
    while (s.includes("''")) s = s.replace(/''/g, '');
    const count = (s.match(/'/g) || []).length;
    if (count % 2 === 1) {
      console.log(`${f}:${i + 1} ODD lone-quote count=${count}`);
      console.log('  ' + line.slice(0, 200));
    }
  });
}
console.log('diag done');
