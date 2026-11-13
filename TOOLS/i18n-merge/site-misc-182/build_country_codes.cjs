const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/sitemisc_work';
const CLDR_LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'he', 'ms', 'lt', 'lv', 'et'];

const ALIAS = {
  'Antigua and Barbuda': 'AG',
  'Bosnia and Herzegovina': 'BA',
  'Cabo Verde': 'CV',
  Congo: 'CG',
  "Côte d'Ivoire": 'CI',
  'Czech Republic': 'CZ',
  'DR Congo': 'CD',
  Myanmar: 'MM',
  'Saint Kitts and Nevis': 'KN',
  'Saint Lucia': 'LC',
  'Saint Vincent and the Grenadines': 'VC',
  'Sao Tome and Principe': 'ST',
  'Trinidad and Tobago': 'TT',
  'Holy See': 'VA',
  'State of Palestine': 'PS',
};

const countries = yaml.load(fs.readFileSync('E:/github/afarer/src/data/site/countries.yaml', 'utf8')).countries;

const enJ = JSON.parse(fs.readFileSync(`${WORK}/cldr/en.json`, 'utf8'));
const enT = enJ.main.en.localeDisplayNames.territories;
const reverse = new Map();
for (const [code, name] of Object.entries(enT)) {
  if (code.includes('-alt') || /^\d+$/.test(code)) continue;
  const key = name.toLowerCase();
  if (!reverse.has(key)) reverse.set(key, code);
}

const terr = {};
for (const l of CLDR_LOCALES) {
  const j = JSON.parse(fs.readFileSync(`${WORK}/cldr/${l}.json`, 'utf8'));
  terr[l] = j.main[l].localeDisplayNames.territories;
}

const mapped = [];
const stillUnmapped = [];
for (const c of countries) {
  let code = reverse.get(c.value.toLowerCase());
  if (!code) code = ALIAS[c.value];
  if (!code) {
    stillUnmapped.push(c.value);
    continue;
  }
  mapped.push({ value: c.value, code, tel: c.tel });
}
console.log('total:', countries.length, 'mapped:', mapped.length, 'still unmapped:', stillUnmapped.length);
if (stillUnmapped.length) console.log('STILL UNMAPPED:', stillUnmapped.join(', '));

let allOk = true;
for (const l of CLDR_LOCALES) {
  const missing = mapped.filter((m) => !terr[l][m.code]);
  if (missing.length) {
    allOk = false;
    console.log(l, 'MISSING:', missing.map((m) => m.code + '=' + m.value).join(','));
  }
}
console.log(allOk ? 'ALL ' + mapped.length + ' x 12 CLDR locales OK' : 'GAPS REMAIN');

fs.writeFileSync(`${WORK}/out/country_codes.json`, JSON.stringify(mapped, null, 1), 'utf8');
fs.writeFileSync(
  `${WORK}/out/tl_countries_en.json`,
  JSON.stringify(Object.fromEntries(mapped.map((m) => [m.value, m.value])), null, 1),
  'utf8'
);
console.log('wrote country_codes.json + tl_countries_en.json, both', mapped.length, 'entries');
