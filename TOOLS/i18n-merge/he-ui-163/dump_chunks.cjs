const fs = require('fs');
const path = require('path');
const en = JSON.parse(fs.readFileSync(__dirname + '/en_ui.json', 'utf8'));
const keys = Object.keys(en);

const groups = {};
for (const k of keys) {
  const g = k.split('.')[0];
  (groups[g] = groups[g] || []).push(k);
}

function pick(names, perFile) {
  // flatten names' groups in order, then slice into files of perFile keys
  const flat = [];
  for (const n of names) flat.push(...(groups[n] || []));
  return flat;
}

const chunks = [];
chunks.push(pick(['nav']));
let home = groups['home'];
chunks.push(home.slice(0, 132), home.slice(132, 264), home.slice(264));
let compare = groups['compare'];
chunks.push(compare.slice(0, 137), compare.slice(137));
chunks.push(pick(['oem']));
chunks.push(pick(['solutionsByIndustry']));
chunks.push(pick(['solutionsByUseCase', 'commercialWorkboats']));
chunks.push(pick(['ai', 'buyerCenter', 'engineeringPerfection']));
chunks.push(pick(['factory', 'techspecs', 'product', 'faq']));
chunks.push(pick(['v2', 'guides', 'learn', 'solutions', 'useCase', 'geo']));
const restNames = Object.keys(groups).filter(
  (g) =>
    [
      'nav',
      'home',
      'compare',
      'oem',
      'solutionsByIndustry',
      'solutionsByUseCase',
      'commercialWorkboats',
      'ai',
      'buyerCenter',
      'engineeringPerfection',
      'factory',
      'techspecs',
      'product',
      'faq',
      'v2',
      'guides',
      'learn',
      'solutions',
      'useCase',
      'geo',
    ].indexOf(g) < 0
);
chunks.push(pick(restNames));

let total = 0;
chunks.forEach((ck, i) => {
  const n = String(i + 1).padStart(2, '0');
  const obj = {};
  for (const k of ck) obj[k] = en[k];
  fs.writeFileSync(path.join(__dirname, 'c' + n + '_en.json'), JSON.stringify(obj, null, 1), 'utf8');
  total += ck.length;
  console.log('c' + n, ck.length, 'keys', ck[0].split('.')[0], '..', ck[ck.length - 1].split('.')[0]);
});
console.log('total', total, 'of', keys.length);
