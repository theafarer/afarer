// Patch product-texts.ts per-language name/desc translations.
// Data files: _pt-data-*.cjs in this directory, each exports { lang: { productId: { name?, desc? } } }
// Usage:
//   node _patch-product-texts.cjs            (dry run: report planned changes)
//   node _patch-product-texts.cjs --patch    (apply changes)
const fs = require('fs');
const path = require('path');

const FILE = path.resolve(__dirname, '../../../src/data/product-texts.ts');

// ---- load table shards ----
const TABLE = {};
const shards = fs
  .readdirSync(__dirname)
  .filter((f) => f.startsWith('_pt-data-') && f.endsWith('.cjs'))
  .sort();
for (const f of shards) {
  const part = require(path.join(__dirname, f));
  for (const lang of Object.keys(part)) {
    if (TABLE[lang]) throw new Error('lang ' + lang + ' duplicated across shards');
    TABLE[lang] = part[lang];
  }
}

const emit = (v) => {
  if (v.includes("'")) return JSON.stringify(v);
  return "'" + v + "'";
};

const fieldRe = (field) => new RegExp('(\\n      ' + field + ': )("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')');

const decode = (quoted) => {
  if (quoted.startsWith('"')) return JSON.parse(quoted);
  return quoted.slice(1, -1).replace(/\\'/g, "'");
};

let ts = fs.readFileSync(FILE, 'utf8');
const patch = process.argv.includes('--patch');
let plannedInserts = 0;
let plannedReplacements = 0;
const report = [];

// locate absolute bounds of a language section in current ts
function sectionBounds(lang) {
  const secStart = ts.indexOf('\n  ' + lang + ': {') + 1;
  if (secStart === 0) throw new Error('lang section not found: ' + lang);
  const rest = ts.slice(secStart);
  const nextLang = rest.search(/\n  [a-z]{2}: \{/);
  return nextLang === -1 ? [secStart, ts.length] : [secStart, secStart + nextLang];
}

for (const lang of Object.keys(TABLE)) {
  for (const id of Object.keys(TABLE[lang])) {
    const fields = TABLE[lang][id];
    const [secStart, secEnd] = sectionBounds(lang);
    const sec = ts.slice(secStart, secEnd);
    const entryOpen = "    '" + id + "': {";
    const ei = sec.indexOf(entryOpen);
    if (ei === -1) {
      // INSERT new entry before section close (line '  },' at 2-space indent)
      const closeIdx = sec.lastIndexOf('\n  },');
      if (closeIdx === -1) throw new Error('section close not found for ' + lang);
      let block = "    '" + id + "': {\n";
      if (fields.name !== undefined) block += '      name: ' + emit(fields.name) + ',\n';
      if (fields.desc !== undefined) block += '      desc: ' + emit(fields.desc) + ',\n';
      block += '    },\n';
      const insertAt = secStart + closeIdx + 1; // right after the \n preceding '  },'
      if (patch) ts = ts.slice(0, insertAt) + block + ts.slice(insertAt);
      plannedInserts++;
      report.push(
        'INSERT ' + lang + '/' + id + ' name=' + JSON.stringify(fields.name) + ' desc=' + (fields.desc ? 'yes' : '-')
      );
      continue;
    }
    // existing entry: replace provided fields in place
    const entryEnd = sec.indexOf('\n    },', ei);
    if (entryEnd === -1) throw new Error('entry close not found: ' + lang + '/' + id);
    let body = sec.slice(ei, entryEnd);
    let changed = false;
    for (const field of ['name', 'desc']) {
      if (fields[field] === undefined) continue;
      const re = fieldRe(field);
      const m = body.match(re);
      const want = emit(fields[field]);
      if (m) {
        if (decode(m[2]) === fields[field]) continue; // already applied
        report.push('REPLACE ' + lang + '/' + id + ' ' + field + ':\n    old: ' + m[2] + '\n    new: ' + want);
        body = body.replace(re, (full, p1) => p1 + want);
        changed = true;
        plannedReplacements++;
      } else {
        const openEnd = body.indexOf('{\n');
        body = body.slice(0, openEnd + 2) + '      ' + field + ': ' + want + ',\n' + body.slice(openEnd + 2);
        report.push('ADD ' + lang + '/' + id + ' ' + field + ': ' + want);
        changed = true;
        plannedReplacements++;
      }
    }
    if (changed && patch) {
      ts = ts.slice(0, secStart + ei) + body + ts.slice(secStart + entryEnd);
    }
  }
}

console.log(report.join('\n'));
console.log(
  '\n--- ' +
    (patch ? 'PATCHED' : 'DRY RUN') +
    ': ' +
    plannedInserts +
    ' inserts, ' +
    plannedReplacements +
    ' field replacements ---'
);
if (patch) {
  fs.writeFileSync(FILE, ts);
  console.log('written: ' + FILE);
}
