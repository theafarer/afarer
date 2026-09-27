// shard 40 chain maintenance: _ops-data-35.cjs spelled-metric ops rep destroyed by shard 40
// new-block terminal state is unquoted 10+ / 50+ (matches EN SSOT). Update those reps in place.
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '_ops-data-35.cjs');
const raw = fs.readFileSync(FILE, 'utf8');
const idx = raw.indexOf('module.exports =');
if (idx < 0) throw new Error('no module.exports');
const head = raw.slice(0, idx);
const ops = require('./_ops-data-35.cjs');

const targets =
  /    - metric: (Zehn|F\u00FCnfzig|Diez|Cincuenta|Dieci|Cinquanta|Cinquenta|Tien|Vijftig|Dez|Ten|Pi\u0119\u0107dziesi\u0105t|\u0414\u0435\u0441\u044F\u0442\u044C|\u041F\u044F\u0442\u044C\u0434\u0435\u0441\u044F\u0442)\n/;
let n = 0;
for (const o of ops) {
  if (/home\.yaml$/.test(o.f) && targets.test(o.find)) {
    if (o.rep === "    - metric: '10+'\n") {
      o.rep = '    - metric: 10+\n';
    } else if (o.rep === "    - metric: '50+'\n") {
      o.rep = '    - metric: 50+\n';
    } else {
      throw new Error('unexpected rep: ' + JSON.stringify(o.rep));
    }
    n++;
  }
}
if (n !== 14) throw new Error('expected 14 updated, got ' + n);
fs.writeFileSync(FILE, head + 'module.exports = ' + JSON.stringify(ops, null, 2) + ';\n');
console.log('updated ' + n + ' ops in _ops-data-35.cjs (quoted 10+/50+ -> unquoted)');
