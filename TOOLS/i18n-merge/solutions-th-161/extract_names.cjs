const fs = require('fs');
const path = require('path');
const d = 'parts';
for (const f of fs.readdirSync(d).sort()) {
  const t = fs.readFileSync(path.join(d, f), 'utf8');
  const names = [...t.matchAll(/^\s*name\s*:\s*(.+)$/gm)].map((x) => x[1].trim());
  console.log(f + ' => ' + JSON.stringify(names));
}
