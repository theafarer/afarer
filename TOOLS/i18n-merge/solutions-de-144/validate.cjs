// Structural validator: de part YAML vs EN part YAML
// Usage: node validate.cjs <NN>  (e.g. node validate.cjs 01)  or no arg = all translated parts
const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const WORK = __dirname;
const EN_DIR = path.join(WORK, 'en_parts');
const DE_DIR = path.join(WORK, 'parts');

const errors = [];
const warnings = [];

function keyOf(f) {
  return f.replace(/\.yaml$/, '');
}

function checkShape(en, de, p) {
  if (en === null || de === null) {
    if ((en === null) !== (de === null)) errors.push(`${p}: null mismatch (en=${en}, de=${de})`);
    return;
  }
  if (Array.isArray(en)) {
    if (!Array.isArray(de)) {
      errors.push(`${p}: en is array(${en.length}), de is not array`);
      return;
    }
    if (en.length !== de.length) {
      errors.push(`${p}: array length en=${en.length} de=${de.length}`);
      return;
    }
    for (let i = 0; i < en.length; i++) checkShape(en[i], de[i], `${p}[${i}]`);
    return;
  }
  if (typeof en === 'object') {
    if (typeof de !== 'object' || Array.isArray(de) || de === null) {
      errors.push(`${p}: en is object, de is ${de === null ? 'null' : typeof de}`);
      return;
    }
    const enKeys = Object.keys(en).sort();
    const deKeys = Object.keys(de).sort();
    // keys intentionally NOT translated (EN value survives deep-merge): src, href
    const SKIP_DE = ['src', 'href'];
    for (const k of enKeys)
      if (!deKeys.includes(k) && !SKIP_DE.includes(k)) errors.push(`${p}: missing key "${k}" in de`);
    for (const k of deKeys) if (!enKeys.includes(k)) errors.push(`${p}: extra key "${k}" in de`);
    for (const k of enKeys) if (deKeys.includes(k)) checkShape(en[k], de[k], `${p}.${k}`);
    return;
  }
  // primitives: string vs number/boolean mismatch
  if (typeof en !== typeof de) {
    errors.push(`${p}: type mismatch en=${typeof en} de=${typeof de}`);
    return;
  }
  if (typeof de === 'string' && de.trim() === '') errors.push(`${p}: empty string in de`);
}

// English residue scan: common English words that must not appear in German body.
// "in" removed (legit German preposition). Word boundaries exclude hyphens so
// keep-Latin compounds (Direct-to-Consumer, Proof-of-Concept) don't false-positive.
const L = 'A-Za-zÄÖÜäöüß';
const w = (word) => new RegExp(`(?<![${L}\\-])${word}(?![${L}\\-])`, 'i');
const EN_RESIDUE = [
  w('the'),
  w('and'),
  w('with'),
  w('for'),
  w('your'),
  w('our'),
  w('of'),
  w('to'),
  w('on'),
  w('is'),
  w('are'),
  w('that'),
  w('this'),
  w('from'),
  w('more'),
  w('can'),
  w("brand's"),
  w("doesn't"),
  w("board's"),
  w("doesn'"),
  w("won't"),
  w("don't"),
];

function scanResidue(node, p, fileKey) {
  if (Array.isArray(node)) {
    node.forEach((c, i) => scanResidue(c, `${p}[${i}]`, fileKey));
    return;
  }
  if (node !== null && typeof node === 'object') {
    for (const k of Object.keys(node)) scanResidue(node[k], `${p}.${k}`, fileKey);
    return;
  }
  if (typeof node === 'string') {
    for (const re of EN_RESIDUE) {
      const m = node.match(re);
      if (m) warnings.push(`${fileKey} ${p}: EN residue "${m[0]}" in: "${node.slice(0, 120)}"`);
    }
  }
}

function validateFile(file) {
  const fileKey = keyOf(file);
  const enFile = path.join(EN_DIR, file);
  if (!fs.existsSync(enFile)) {
    errors.push(`${fileKey}: no EN counterpart`);
    return;
  }
  const en = yaml.load(fs.readFileSync(enFile, 'utf8'));
  const de = yaml.load(fs.readFileSync(path.join(DE_DIR, file), 'utf8'));
  checkShape(en, de, fileKey);
  scanResidue(de, fileKey, fileKey);
}

let files;
if (process.argv[2]) {
  const prefix = process.argv[2];
  files = fs.readdirSync(DE_DIR).filter((f) => f.startsWith(prefix + '_'));
} else {
  files = fs.readdirSync(DE_DIR).filter((f) => f.endsWith('.yaml'));
}
for (const f of files) validateFile(f);

console.log(`Validated ${files.length} part file(s).`);
if (errors.length) {
  console.log(`\n=== ERRORS (${errors.length}) ===`);
  errors.forEach((e) => console.log('  ' + e));
}
if (warnings.length) {
  console.log(`\n=== WARNINGS - EN residue (${warnings.length}) ===`);
  warnings.forEach((w) => console.log('  ' + w));
}
if (!errors.length && !warnings.length) console.log('ALL CLEAN');
process.exit(errors.length ? 1 : 0);
