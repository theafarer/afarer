const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/el_sol_work/parts';
const files = fs
  .readdirSync(WORK)
  .filter((f) => /^\d{2}_.*\.yaml$/.test(f))
  .sort();
let bad = 0;
for (const f of files) {
  try {
    yaml.load(fs.readFileSync(path.join(WORK, f), 'utf8'));
  } catch (e) {
    bad++;
    const line = e.mark ? e.mark.line + 1 : '?';
    console.log(f + ' :: line ' + line + ' :: ' + e.reason);
  }
}
console.log('parse errors:', bad, 'of', files.length);
