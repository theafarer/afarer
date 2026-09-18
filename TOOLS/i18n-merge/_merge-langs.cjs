// Merges per-language translation files into i18n-config.json.
// Usage: node scripts/_merge-langs.cjs de nl
const fs = require('fs');
const FILE = 'src/data/site/i18n-config.json';
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const langs = process.argv.slice(2);
let total = 0;
for (const l of langs) {
  const file = path.join(__dirname, `_lang-${l}.cjs`);
  if (!fs.existsSync(file)) {
    console.error('missing', file);
    process.exit(1);
  }
  const tr = require('./_lang-' + l + '.cjs');
  if (!data[l]) data[l] = {};
  let added = 0;
  for (const [k, v] of Object.entries(tr)) {
    if (data[l][k] === undefined || data[l][k] === '') {
      data[l][k] = v;
      added++;
    }
  }
  total += added;
  console.log(l, 'added', added, '| total keys:', Object.keys(data[l]).length);
}
fs.writeFileSync(FILE, JSON.stringify(data, null, 2), 'utf8');
console.log('total added:', total);
