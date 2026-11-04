const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer';
const WORK = __dirname;
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/site/i18n-config.json'), 'utf8'));
const en = cfg.en;
const keys = Object.keys(en);
console.log('en keys:', keys.length);

// group by top prefix
const groups = {};
for (const k of keys) {
  const g = k.split('.')[0];
  groups[g] = groups[g] || [];
  groups[g].push(k);
}
const gNames = Object.keys(groups).sort((a, b) => groups[b].length - groups[a].length);
for (const g of gNames) console.log(' ', g, groups[g].length);

// length distribution
let lens = keys.map((k) => ({ k, len: en[k].length }));
lens.sort((a, b) => b.len - a.len);
console.log('longest values:');
for (const l of lens.slice(0, 8)) console.log('  ', l.len, l.k);
const totalChars = lens.reduce((s, l) => s + l.len, 0);
console.log('total en value chars:', totalChars);

// params
const paramKeys = keys.filter((k) => /\{\w+\}/.test(en[k]));
console.log(
  'param keys:',
  paramKeys.length,
  paramKeys
    .slice(0, 25)
    .map((k) => k + ' => ' + en[k])
    .join(' | ')
);

// write en baseline flat file for translation work
fs.writeFileSync(path.join(WORK, 'en_ui.json'), JSON.stringify(en, null, 1), 'utf8');
console.log('wrote en_ui.json');
