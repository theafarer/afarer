const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:', 'github', 'afarer', 'node_modules', 'js-yaml'));

const dir = path.join(__dirname, 'parts');
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.yaml'))
  .sort();
let bad = 0;
for (const f of files) {
  const raw = fs.readFileSync(path.join(dir, f), 'utf8');
  try {
    yaml.load(raw);
  } catch (e) {
    bad++;
    console.log(f + ' => line ' + e.mark.line + ' col ' + e.mark.column + ': ' + e.reason);
    const lines = raw.split(/\r?\n/);
    const ln = lines[e.mark.line];
    if (ln !== undefined) console.log('  LINE: ' + ln.slice(Math.max(0, e.mark.column - 60), e.mark.column + 60));
  }
}
console.log('files with parse errors: ' + bad + ' / ' + files.length);
