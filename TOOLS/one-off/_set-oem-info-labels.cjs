// Temp one-off: set cta.oemInfo translations for all 20 non-en langs in i18n-config.json
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', '..', 'src', 'data', 'site', 'i18n-config.json');
const T = {
  de: 'OEM-Infos',
  pt: 'Info OEM',
  fr: 'Infos OEM',
  es: 'Info OEM',
  it: 'Info OEM',
  ja: 'OEM情報',
  ko: 'OEM 정보',
  ru: 'Об OEM',
  pl: 'Info OEM',
  ar: 'معلومات OEM',
  nl: 'OEM-info',
  sv: 'OEM-info',
  no: 'OEM-info',
  el: 'Πληροφορίες OEM',
  tr: 'OEM Bilgisi',
  fi: 'OEM-tiedot',
  cs: 'Info OEM',
  da: 'OEM-info',
  ro: 'Info OEM',
  th: 'ข้อมูล OEM',
};
const root = JSON.parse(fs.readFileSync(FILE, 'utf8'));
if (!root.en || root.en['cta.oemInfo'] !== 'OEM Info') {
  throw new Error('en cta.oemInfo missing — run ui-keys.cjs add first');
}
let n = 0;
for (const [lang, val] of Object.entries(T)) {
  if (!root[lang]) throw new Error('unknown lang section: ' + lang);
  root[lang]['cta.oemInfo'] = val;
  n++;
}
fs.writeFileSync(FILE, JSON.stringify(root, null, 2) + '\n', 'utf8');
console.log(`set cta.oemInfo for ${n} langs`);
