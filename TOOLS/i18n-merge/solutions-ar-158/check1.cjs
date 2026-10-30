const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/ar_sol_work';
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
// 2. unexpected script scan (ar batch: CJK/Cyrillic/Greek/Hebrew unexpected; Arabic + Latin expected)
const bad = t.match(/[\u3400-\u9fff\uf900-\ufaff\u0400-\u04ff\u0370-\u03ff\u0590-\u05ff]/g);
console.log('CJK/Cyrillic/Greek/Hebrew:', bad ? JSON.stringify(bad.join('')) : 'none');
// 3. Arabic char count (proves the text is actually Arabic)
const arChars = (t.match(/[\u0600-\u06FF]/g) || []).length;
console.log('Arabic chars:', arChars);
// 4. Arabic-Indic digits must be 0 (Latin digits convention, cf. faq-ar/guides-ar)
const ad = (t.match(/[\u0660-\u0669]/g) || []).length;
console.log('Arabic-Indic digits (must be 0):', ad);
// 5. invisible directionality marks must be 0 (RLM/LRM/embeddings/isolates)
const bidi = (t.match(/[\u200E\u200F\u202A-\u202E\u2066-\u2069]/g) || []).length;
console.log('bidi control marks (must be 0):', bidi);
// 6. common EN residue words
const residue = t.match(
  /\b(the|and of|with|for the|your|our|their|from|was|were|has been|have been|will be|that|this|these|those|which|when|where|because|between|during|within|across|including|featuring|before|after|about|into|onto|over|under|than|then|them|they|you can|we can|are|is|been|being)\b/gi
);
console.log('EN residue hits:', residue ? JSON.stringify(residue) : 'none');
// 7. straight/curly quotes and guillemets (ar convention: bare names, zero quote chars)
const sq = (t.match(/"/g) || []).length;
const cq = (t.match(/[\u201C\u201D\u2018\u2019]/g) || []).length;
const gl = (t.match(/[\u00AB\u00BB]/g) || []).length;
console.log('straight quotes (must be 0):', sq, '| curly quotes:', cq, '| guillemets:', gl);
// 8. double-space scan
const dbl = (t.match(/ {2,}/g) || []).length;
console.log('double-space occurrences:', dbl);
// 9. soft hyphen U+00AD scan (never allow soft hyphens)
let shy = 0;
for (let i = 0; i < t.length; i++) if (t.charCodeAt(i) === 0xad) shy++;
console.log('soft hyphens (U+00AD):', shy);
