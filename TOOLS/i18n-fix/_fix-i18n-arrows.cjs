// Fixes src/data/site/i18n-config.json:
// Repairs the second arrow-corruption class: an em dash followed by a space
// ("— ") was collapsed into a single right arrow ("→") in UI strings across
// every locale. The same collapse hit en-dash ranges ("– " -> "→") and the
// leading left-arrow on compare.backToProducts ("← " -> "→").
//
// Rules:
//   - compare.backToProducts : leading "→" -> "← " (back navigation)
//   - numeric ranges ("°C →NN") : "→" -> "– " (en dash)
//   - everything else (inline) : "→" -> "— " (em dash)
//   - trailing CTA arrows ("Read guide →") are intentionally preserved.
//
// Usage (from repo root): node TOOLS/i18n-fix/_fix-i18n-arrows.cjs
const fs = require('fs');
const path = require('path');

const FILE = path.join(process.cwd(), 'src', 'data', 'site', 'i18n-config.json');
const ARROW = '\u2192';
const EM = '\u2014';
const EN = '\u2013';
const LEFT = '\u2190';

let src = fs.readFileSync(FILE, 'utf8');
const hadBom = src.charCodeAt(0) === 0xfeff;
if (hadBom) src = src.slice(1);
const root = JSON.parse(src);

const stats = { back: 0, range: 0, em: 0, valuesChanged: 0, trailingKept: 0 };
const changed = [];

for (const [locale, obj] of Object.entries(root)) {
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val !== 'string' || !val.includes(ARROW)) continue;

    // count trailing CTA arrows we deliberately keep
    const trailing = (val.match(new RegExp(ARROW + '(?=\\s*$)')) || []).length;
    stats.trailingKept += trailing;

    let out;
    if (key === 'compare.backToProducts' && /^\s*\u2192/.test(val)) {
      out = val.replace(/^\s*\u2192\s*/, LEFT + ' ');
      stats.back += 1;
    } else if (/\u00b0C\s*\u2192\s*\d/.test(val)) {
      out = val.replace(new RegExp(ARROW, 'g'), EN + ' ');
      stats.range += 1;
    } else {
      const inline = (val.match(new RegExp(ARROW + '(?!\\s*$)', 'g')) || []).length;
      out = val.replace(new RegExp(ARROW + '(?!\\s*$)', 'g'), EM + ' ');
      stats.em += inline;
    }

    if (out !== val) {
      obj[key] = out;
      stats.valuesChanged += 1;
      changed.push(`${locale}.${key}`);
    }
  }
}

let outStr = JSON.stringify(root, null, 2);
if (hadBom) outStr = '\ufeff' + outStr;
fs.writeFileSync(FILE, outStr + '\n', 'utf8');

console.log(JSON.stringify(stats, null, 2));
console.log('changed values:', changed.length);
