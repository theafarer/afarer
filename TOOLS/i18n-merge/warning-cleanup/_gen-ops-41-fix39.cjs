// shard 41 chain maintenance: _ops-data-39.cjs #65 (da cwb) rep contains '12,000 m'
// comma form. Shard 41 SEP op rewrites that line to dot form ('12.000 m'), so the old
// rep would no longer be found in the file -> engine ERR on re-dry. Update rep in place
// to the new terminal state (same pattern as _gen-ops-40-fix35.cjs).
// Run from repo root: node TOOLS/i18n-merge/warning-cleanup/_gen-ops-41-fix39.cjs
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '_ops-data-39.cjs');
const raw = fs.readFileSync(FILE, 'utf8');
const idx = raw.indexOf('module.exports =');
if (idx < 0) throw new Error('no module.exports');
const head = raw.slice(0, idx);
const ops = require('./_ops-data-39.cjs');

let n = 0;
for (const o of ops) {
  if (o.f === 'src/data/pages/da/commercial-workboats.yaml' && o.rep.includes('12,000 m')) {
    if (o.rep.split('12,000 m').length - 1 !== 1) throw new Error('expected exactly 1 occurrence in rep');
    if (!o.rep.includes('12,000 m\u00B2 ISO- og')) throw new Error('unexpected rep form: ' + o.rep.slice(0, 120));
    o.rep = o.rep.replace('12,000 m\u00B2', '12.000 m\u00B2');
    n++;
  }
}
if (n !== 1) throw new Error('expected 1 updated, got ' + n);
fs.writeFileSync(FILE, head + 'module.exports = ' + JSON.stringify(ops, null, 2) + ';\n');
console.log('updated ' + n + ' op in _ops-data-39.cjs (#65 da cwb rep 12,000 -> 12.000)');
