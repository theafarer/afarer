const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/tr_sol_work';
const file = process.argv[2];
if (!file) {
  console.log('usage: node check1.cjs parts/01_xxx.yaml');
  process.exit(1);
}
const t = fs.readFileSync(path.join(WORK, file), 'utf8');
// 1. parse
try {
  yaml.load(t);
  console.log('PARSE OK');
} catch (e) {
  console.log('PARSE FAIL line', e.mark ? e.mark.line + 1 : '?', '::', e.reason);
  process.exit(1);
}
// 2. unexpected script scan (tr batch: CJK/Cyrillic/Greek unexpected; Turkish Latin expected)
const bad = t.match(/[\u3400-\u9fff\uf900-\ufaff\u0400-\u04ff\u0370-\u03ff]/g);
console.log('CJK/Cyrillic/Greek:', bad ? JSON.stringify(bad.join('')) : 'none');
// 3. Turkish-specific diacritics count (proves the text is actually Turkish)
const trChars = (t.match(/[şğıİçöüŞĞÇÖÜ]/g) || []).length;
console.log('Turkish diacritic chars:', trChars);
// 4. common EN residue words
const residue = t.match(
  /\b(the|and of|with|for the|your|our|their|from|was|were|has been|have been|will be|that|this|these|those|which|when|where|because|between|during|within|across|including|featuring|before|after|about|into|onto|over|under|than|then|them|they|you can|we can|are|is|been|being)\b/gi
);
console.log('EN residue hits:', residue ? JSON.stringify(residue) : 'none');
// 5. double-space scan
const dbl = (t.match(/ {2,}/g) || []).length;
console.log('double-space occurrences:', dbl);
// 6. straight-quote pairs that may be EN quotes
const dq = t.match(/"[^"\n]{3,}"/g) || [];
console.log('double-quoted strings:', dq.length ? JSON.stringify(dq) : 'none');
// 7. soft hyphen U+00AD scan (never allow soft hyphens)
let shy = 0;
for (let i = 0; i < t.length; i++) if (t.charCodeAt(i) === 0xad) shy++;
console.log('soft hyphens (U+00AD):', shy);
