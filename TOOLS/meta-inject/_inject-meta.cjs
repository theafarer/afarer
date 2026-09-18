// Injects translated `meta:` blocks (from scripts/_meta-{lang}.cjs) into locale page
// YAML files that lack one. Mirrors EN meta shape exactly (title/description/keywords).
// Usage: node scripts/_inject-meta.cjs [lang ...]
const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'src/data/pages');
const LOCALES = [
  'ar',
  'cs',
  'da',
  'de',
  'el',
  'es',
  'fi',
  'fr',
  'it',
  'ja',
  'ko',
  'nl',
  'no',
  'pl',
  'pt',
  'ro',
  'ru',
  'sv',
  'th',
  'tr',
  'zh',
];

function yamlQuote(s) {
  return "'" + String(s).replace(/'/g, "''") + "'";
}

function metaBlock(meta) {
  const lines = ['meta:'];
  lines.push('  title: ' + yamlQuote(meta.title));
  lines.push('  description: ' + yamlQuote(meta.description));
  lines.push('  keywords:');
  for (const k of meta.keywords) lines.push('    - ' + yamlQuote(k));
  return lines.join('\n');
}

function readOne(rel) {
  try {
    return fs.readFileSync(path.join(ROOT, rel), 'utf8');
  } catch {
    return null;
  }
}

const targets = process.argv.slice(2);
const locales = targets.length ? targets.filter((l) => LOCALES.includes(l)) : LOCALES;

let updated = 0;
let skipped = [];
for (const lang of locales) {
  const dataFile = path.join(__dirname, `_meta-${lang}.cjs`);
  if (!fs.existsSync(dataFile)) {
    console.log(`MISSING data file: TOOLS/meta-inject/_meta-${lang}.cjs`);
    continue;
  }
  const META = require(dataFile);
  for (const [page, meta] of Object.entries(META)) {
    const rel = `src/data/pages/${lang}/${page}.yaml`;
    const source = readOne(rel);
    if (source === null) continue;
    let data;
    try {
      data = yaml.parse(source);
    } catch (e) {
      skipped.push(rel + ' PARSE');
      continue;
    }
    if (data && data.meta) continue; // already present
    fs.writeFileSync(path.join(ROOT, rel), metaBlock(meta) + '\n' + source, 'utf8');
    updated++;
  }
}
console.log('injected meta into', updated, 'files across', locales.length, 'locales');
if (skipped.length) console.log('skipped:', skipped.join(', '));
