const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:', 'github', 'afarer', 'node_modules', 'js-yaml'));

const partsDir = path.join(__dirname, 'parts');
const files = fs
  .readdirSync(partsDir)
  .filter((f) => f.endsWith('.yaml'))
  .sort();
let bad = 0;
for (const f of files) {
  try {
    yaml.load(fs.readFileSync(path.join(partsDir, f), 'utf8'));
    console.log('OK  ', f);
  } catch (e) {
    bad++;
    const m = e.mark || {};
    console.log('FAIL', f, '| line', (m.line || 0) + 1, '|', e.reason);
  }
}
console.log(bad === 0 ? 'ALL PARSE OK' : bad + ' files failed');
