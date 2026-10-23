const fs = require('fs');
const path = require('path');
const dir = 'C:/Users/Helleo/AppData/Local/Temp/deveco/tr_work/parts';

// Fix plain scalars containing ": ", " #", or ending ":" by wrapping in single quotes.
// Only touches lines whose key is one of the known content fields.
const KEYS = [
  'slug',
  'title',
  'description',
  'definition',
  'tldr',
  'problem',
  'explanation',
  'solution',
  'recommendation',
  'q',
  'a',
];

for (const f of fs.readdirSync(dir)) {
  const p = path.join(dir, f);
  const lines = fs.readFileSync(p, 'utf8').split('\n');
  let fixed = 0;
  lines.forEach((line, i) => {
    const m = line.match(/^(\s*(?:- )?(?:[A-Za-z-]+)): (.*)$/);
    if (!m) return;
    const key = m[1].trim().replace(/^-\s+/, '');
    if (!KEYS.includes(key)) return;
    let val = m[2];
    if (/^['"]/.test(val)) return;
    if (/: /.test(val) || / #/.test(val) || /:$/.test(val)) {
      const escaped = val.replace(/'/g, "''");
      lines[i] = m[1] + ": '" + escaped + "'";
      fixed++;
      console.log(f + ':' + (i + 1) + ' quoted: ' + val.slice(0, 80));
    }
  });
  if (fixed) fs.writeFileSync(p, lines.join('\n'), 'utf8');
}
console.log('DONE');
