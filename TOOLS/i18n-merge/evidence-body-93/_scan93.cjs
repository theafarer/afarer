const fs = require('fs');
const path = require('path');
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const LOCALES = ['ro', 'tr', 'ar', 'el', 'fi', 'th'];

const has = (s, re) => re.test(s);
const CJK = /[\u4e00-\u9fff\u3040-\u30ff]/;
const CYR = /[\u0400-\u04ff]/;
const GREEK = /[\u0370-\u03ff]/;
const THAI = /[\u0e00-\u0e7f]/;
const ARABIC = /[\u0600-\u06ff]/;

// Latin tokens allowed inside Arabic draft (technical terms, awards, brand)
const AR_LATIN_OK = new Set(
  [
    'PVC',
    'REACH',
    'BSCI',
    'AS',
    'SOLAS',
    'FSC',
    'EPS',
    'EVA',
    'CSM',
    'Hypalon',
    'OEM',
    'QR',
    'FOB',
    'PO',
    'SKU',
    'SKUs',
    'SUP',
    'SUPs',
    'AU',
    'NZ',
    'D',
    'cold',
    'flex',
    'drop',
    'stitch',
    'afarer',
    'Best',
    'Fishing',
    'Lakeside',
    'Living',
    'Outdoor',
    'Gear',
    'Lab',
    'Tokyo',
    'Marine',
    'Show',
    'GCC',
    'all',
    'around',
    'scupper',
    'charter',
  ].map((w) => w.toLowerCase())
);

let fail = 0;
for (const loc of LOCALES) {
  const p = path.join(TMP, `_ev-body-${loc}.json`);
  const raw = fs.readFileSync(p, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.log(`[${loc}] JSON PARSE FAIL: ${e.message}`);
    fail++;
    continue;
  }
  const errs = [];
  // scan every string value recursively
  const walk = (node, trail) => {
    if (typeof node === 'string') {
      if (has(node, CJK)) errs.push(`${trail}: CJK residue "${node.slice(0, 40)}"`);
      if (has(node, CYR)) errs.push(`${trail}: CYRILLIC residue "${node.slice(0, 40)}"`);
      if (loc !== 'el' && has(node, GREEK)) errs.push(`${trail}: GREEK residue "${node.slice(0, 40)}"`);
      if (loc !== 'th' && has(node, THAI)) errs.push(`${trail}: THAI residue "${node.slice(0, 40)}"`);
      if (loc !== 'ar' && has(node, ARABIC)) errs.push(`${trail}: ARABIC residue "${node.slice(0, 40)}"`);
      if (loc === 'ar') {
        const tokens = node.match(/[A-Za-z]+/g) || [];
        for (const t of tokens) {
          if (!AR_LATIN_OK.has(t.toLowerCase())) {
            errs.push(`${trail}: Latin token "${t}" not in allowlist`);
          }
        }
      }
    } else if (Array.isArray(node)) {
      node.forEach((v, i) => walk(v, `${trail}[${i}]`));
    } else if (node && typeof node === 'object') {
      for (const k of Object.keys(node)) walk(node[k], `${trail}.${k}`);
    }
  };
  walk(data, loc);
  if (errs.length) {
    fail++;
    console.log(`[${loc}] ${errs.length} issue(s):`);
    errs.slice(0, 20).forEach((e) => console.log(`   ${e}`));
  } else {
    console.log(`[${loc}] clean`);
  }
}
console.log(fail === 0 ? 'ALL CLEAN' : `${fail} locale(s) FAILED`);
process.exit(fail === 0 ? 0 : 1);
