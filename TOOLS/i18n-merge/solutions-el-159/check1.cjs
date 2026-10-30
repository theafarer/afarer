const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/el_sol_work';
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
// 2. unexpected script scan (el batch: CJK/Cyrillic/Hebrew/Arabic unexpected; Greek + Latin expected)
const bad = t.match(/[\u3400-\u9fff\uf900-\ufaff\u0400-\u04ff\u0590-\u05ff\u0600-\u06ff]/g);
console.log('CJK/Cyrillic/Hebrew/Arabic:', bad ? JSON.stringify(bad.join('')) : 'none');
// 3. Greek char count (proves the text is actually Greek)
const elChars = (t.match(/[\u0370-\u03ff\u1f00-\u1fff]/g) || []).length;
console.log('Greek chars:', elChars);
// 4. common EN residue words
const ALLOWED_PHRASES = ['Paddle into Production', 'Rite in the Rain'];
let tRes = t;
for (const p of ALLOWED_PHRASES) tRes = tRes.split(p).join(' ');
const residue = tRes.match(
  /\b(the|and of|with|for the|your|our|their|from|was|were|has been|have been|will be|that|this|these|those|which|when|where|because|between|during|within|across|including|featuring|before|after|about|into|onto|over|under|than|then|them|they|you can|we can|are|is|been|being)\b/gi
);
console.log('EN residue hits:', residue ? JSON.stringify(residue) : 'none');
// 5. quotes (el convention: bare names, zero quote chars — cf. faq-el.yaml)
const sq = (t.match(/"/g) || []).length;
const cq = (t.match(/[\u201C\u201D\u2018\u2019]/g) || []).length;
const gl = (t.match(/[\u00AB\u00BB]/g) || []).length;
console.log('straight quotes (must be 0):', sq, '| curly quotes:', cq, '| guillemets:', gl);
// 6. double-space scan
const dbl = (t.match(/ {2,}/g) || []).length;
console.log('double-space occurrences:', dbl);
// 7. soft hyphen U+00AD scan (never allow soft hyphens)
let shy = 0;
for (let i = 0; i < t.length; i++) if (t.charCodeAt(i) === 0xad) shy++;
console.log('soft hyphens (U+00AD):', shy);
