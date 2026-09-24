// Dump keys missing from incomplete languages (relative to en) with EN values.
// Usage: node TOOLS/i18n-merge/_dump-missing.cjs  -> writes _missing-en.json next to this script
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', '..', 'src', 'data', 'site', 'i18n-config.json');
const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const incomplete = Object.keys(data).filter(
  (l) => l !== 'en' && Object.keys(data[l]).length !== Object.keys(data.en).length
);
const missing = {};
for (const k of Object.keys(data.en)) {
  for (const l of incomplete) {
    if (data[l][k] === undefined || data[l][k] === '') {
      missing[k] = data.en[k];
      break;
    }
  }
}
const out = path.join(__dirname, '_missing-en.json');
fs.writeFileSync(out, JSON.stringify(missing, null, 2) + '\n', 'utf8');
console.log('incomplete langs:', incomplete.join(','));
console.log('missing keys:', Object.keys(missing).length);
console.log(
  'total en chars:',
  Object.values(missing).reduce((a, v) => a + String(v).length, 0)
);
