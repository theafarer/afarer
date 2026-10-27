const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/no_sol_work';
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
// 2. CJK / Cyrillic / Greek scan
const bad = t.match(/[\u3400-\u9fff\uf900-\ufaff\u0400-\u04ff\u0370-\u03ff]/g);
console.log('CJK/Cyr/Greek:', bad ? bad.join('') : 'none');
// 3. common EN residue words (Polish-aware: exclude words valid in Polish context)
const residue = t.match(
  /\b(the|and of|with|for the|your|our|their|from|was|were|has been|have been|will be|that|this|these|those|which|when|where|because|between|during|within|across|including|featuring|before|after|about|into|onto|over|under|than|then|them|they|you can|we can|are|is|been|being)\b/gi
);
console.log('EN residue hits:', residue ? JSON.stringify(residue) : 'none');
// 4. double-space scan
const dbl = (t.match(/ {2,}/g) || []).length;
console.log('double-space occurrences (yaml indent excluded approx):', dbl);
// 5. straight-quote pairs that may be EN quotes
const dq = t.match(/"[^"\n]{3,}"/g) || [];
console.log('double-quoted strings:', dq.length ? JSON.stringify(dq) : 'none');
