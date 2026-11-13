const fs = require('fs');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/sitemisc_work';
const CLDR_LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'he', 'ms', 'lt', 'lv', 'et'];

// manual aliases: yaml EN name -> ISO 3166-1 alpha-2 (CLDR en name differs)
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

const mapped = JSON.parse(fs.readFileSync(`${WORK}/out/country_codes.json`, 'utf8'));
const terr = {};
for (const l of CLDR_LOCALES) {
  const j = JSON.parse(fs.readFileSync(`${WORK}/cldr/${l}.json`, 'utf8'));
  terr[l] = j.main[l].localeDisplayNames.territories;
}

// patch mapped with aliases
const aliasVals = new Set(Object.keys(ALIAS));
for (const m of mapped) {
  if (aliasVals.has(m.value)) {
    m.code = ALIAS[m.value];
    m.aliased = true;
  }
}
const aliasedCount = mapped.filter((m) => m.aliased).length;
console.log('aliased:', aliasedCount, '(expect 15; total mapped now:', mapped.length + ')');

// check CLDR en display name for each alias code (informational)
const enJ = JSON.parse(fs.readFileSync(`${WORK}/cldr/en.json`, 'utf8'));
const enT = enJ.main.en.localeDisplayNames.territories;
for (const [name, code] of Object.entries(ALIAS)) {
  console.log(' ', name, '->', code, '| CLDR en:', enT[code], '| hr:', terr.hr[code], '| he:', terr.he[code]);
}

// coverage after alias
let allOk = true;
for (const l of CLDR_LOCALES) {
  const missing = mapped.filter((m) => !terr[l][m.code]);
  if (missing.length) {
    allOk = false;
    console.log(l, 'MISSING after alias:', missing.map((m) => m.code + '=' + m.value).join(','));
  }
}
console.log(allOk ? 'ALL 195 mapped x 12 CLDR locales OK' : 'GAPS REMAIN');

fs.writeFileSync(`${WORK}/out/country_codes.json`, JSON.stringify(mapped, null, 1), 'utf8');
fs.writeFileSync(
  `${WORK}/out/tl_countries_en.json`,
  JSON.stringify(Object.fromEntries(mapped.map((m) => [m.value, m.value])), null, 1),
  'utf8'
);
console.log('updated country_codes.json (195) + tl_countries_en.json (195)');
