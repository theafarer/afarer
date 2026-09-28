// shard 47 chain maintenance (_gen-ops-46-fix42.cjs precedent):
// shard 47 translated da/about.yaml keywords[0]/[1] ('inflatable sup brand' ->
// 'oppusteligt sup brand', 'inflatable bådbrand' -> 'oppusteligt bådbrand'), which broke the
// shard 14 insertion op whose find/rep embed the old EN values. Update that op's find/rep to
// the post-47 terminal state. Idempotent: no-op if the new state is already in place.
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '_ops-data-14.cjs');
const raw = fs.readFileSync(FILE, 'utf8');

// Literal text inside _ops-data-14.cjs (\n here is the two-char escape sequence in the file)
const OLD_FIND = 'find: "  keywords:\\n    - \'inflatable sup brand\'"';
const OLD_REP = "rep: \"  keywords:\\n    - 'inflatable sup brand'\\n    - 'inflatable bådbrand'\"";
const NEW_FIND = 'find: "  keywords:\\n    - \'oppusteligt sup brand\'"';
const NEW_REP = "rep: \"  keywords:\\n    - 'oppusteligt sup brand'\\n    - 'oppusteligt bådbrand'\"";

function count(hay, needle) {
  let c = 0;
  let p = 0;
  while ((p = hay.indexOf(needle, p)) !== -1) {
    c++;
    p += 1;
  }
  return c;
}

if (count(raw, NEW_FIND) === 1 && count(raw, NEW_REP) === 1) {
  console.log('OK already: _ops-data-14.cjs da op already at post-47 terminal state.');
  process.exit(0);
}
if (count(raw, NEW_FIND) !== 0 || count(raw, NEW_REP) !== 0) {
  console.error('FATAL: unexpected partial state in _ops-data-14.cjs (new find/rep count mismatch).');
  process.exit(1);
}
if (count(raw, OLD_FIND) !== 1 || count(raw, OLD_REP) !== 1) {
  console.error('FATAL: old find/rep not found exactly once in _ops-data-14.cjs.');
  process.exit(1);
}
const out = raw.replace(OLD_FIND, NEW_FIND).replace(OLD_REP, NEW_REP);
fs.writeFileSync(FILE, out, 'utf8');
console.log('OK: _ops-data-14.cjs da/about.yaml op updated to post-47 terminal state.');
