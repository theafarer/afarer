const fs = require('fs');
const read = (p) => fs.readFileSync('E:/github/afarer/dist/' + p, 'utf8');
const checks = [
  ['hr/index.html', 'namijenjena morskim'],
  ['hr/index.html', 'Prvog dana sam je izveo'],
  ['hr/index.html', 'standarde sigurnosti i kvalitete'],
  ['hr/use-cases/index.html', 'Trebaju stabilnu opremu'],
  ['hr/learn/index.html', 'prije nego'],
];
for (const [p, needle] of checks) {
  try {
    const h = read(p);
    console.log(p + ' | ' + needle + ' => ' + (h.includes(needle) ? 'PASS' : 'FAIL'));
  } catch (e) {
    console.log(p + ' => READ ERROR: ' + e.code);
  }
}
// fallbacks if learn/use-cases paths differ
const dirs = ['hr/use-cases/index.html', 'hr/learning/index.html', 'hr/lifestyle/index.html'];
for (const d of dirs) {
  try {
    read(d);
    console.log('EXISTS: ' + d);
  } catch {
    console.log('missing: ' + d);
  }
}
