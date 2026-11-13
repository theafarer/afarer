// Phase B merge: out2/<lang>/g*.json -> repo landing-i18n JSONs (+13 locale blocks)
const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const REPO = 'E:/github/afarer';
const DATA_DIR = path.join(REPO, 'src', 'data', 'landing-i18n');
const NEW_LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'he', 'ms', 'lt', 'lv', 'et', 'tl'];
const EMPTY_FILES = ['dock-platform.json', 'giant-sup.json', 'surf-sup.json'];

// 1. build per-locale map: file -> {key: value}
const perLocale = {};
for (const lang of NEW_LOCALES) {
  perLocale[lang] = {};
  for (const g of ['g0', 'g1', 'g2', 'g3']) {
    const arr = JSON.parse(fs.readFileSync(path.join(BASE, 'out2', lang, g + '.json'), 'utf8'));
    for (const e of arr) {
      if (!perLocale[lang][e.file]) perLocale[lang][e.file] = {};
      if (perLocale[lang][e.file][e.key] !== undefined)
        throw new Error(`dup key in ${lang}/${e.file}: ${e.key.slice(0, 50)}`);
      perLocale[lang][e.file][e.key] = e.value;
    }
  }
}

// 2. content files = union of file fields
const contentFiles = Object.keys(perLocale.hr);
console.log('content files (' + contentFiles.length + '):', contentFiles.join(', '));

// 3. verify against repo dir
const repoFiles = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.json'))
  .sort();
const expected = [...contentFiles, ...EMPTY_FILES].sort();
if (JSON.stringify(repoFiles) !== JSON.stringify(expected)) {
  throw new Error('file set mismatch.\nrepo: ' + repoFiles.join(',') + '\nexpected: ' + expected.join(','));
}

// 4. merge content files
let totalNewKeys = 0;
for (const f of contentFiles) {
  const p = path.join(DATA_DIR, f);
  const raw = fs.readFileSync(p, 'utf8');
  if (raw.charCodeAt(0) === 0xfeff) throw new Error('BOM in ' + f);
  const data = JSON.parse(raw);
  const existing = Object.keys(data);
  const deCount = data.de ? Object.keys(data.de).length : -1;
  for (const lang of NEW_LOCALES) {
    if (data[lang] !== undefined) throw new Error(`locale ${lang} already exists in ${f}`);
    const table = perLocale[lang][f];
    if (!table) throw new Error(`no translations for ${f} in ${lang}`);
    if (deCount >= 0 && Object.keys(table).length !== deCount) {
      throw new Error(`${f}/${lang}: ${Object.keys(table).length} keys != de ${deCount}`);
    }
    data[lang] = table;
    totalNewKeys += Object.keys(table).length;
  }
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('merged ' + f + ' (+' + NEW_LOCALES.length + ' locales, existing: ' + existing.length + ')');
}

// 5. empty files: add 13 empty blocks
for (const f of EMPTY_FILES) {
  const p = path.join(DATA_DIR, f);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const lang of NEW_LOCALES) {
    if (data[lang] !== undefined) throw new Error(`locale ${lang} already exists in ${f}`);
    data[lang] = {};
  }
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('merged (empty) ' + f);
}

console.log('DONE. total new key-value pairs: ' + totalNewKeys + ' (expected ' + 804 * 13 + ')');
