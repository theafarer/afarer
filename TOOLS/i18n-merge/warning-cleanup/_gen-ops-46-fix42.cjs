// shard 46 chain maintenance: update _ops-data-42.cjs op#2 rep to the new final state.
// MUST run AFTER shard 46 --patch (L31④ lesson: pre-patch run would leave 42#2 find0/rep0 ERR).
// 42#2 fixed Czech "Nafukovací..." -> "Oppustelige drop-stitch stand-up paddle boards...";
// shard 46 re-translated that same line (EN residue "stand-up paddle boards" -> "SUP-brætter"),
// consuming 42#2's rep. Re-point rep to the shard-46 final value so the op stays "already".
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '_ops-data-42.cjs');
const CFG = path.join(__dirname, '..', '..', '..', 'src', 'data', 'site', 'i18n-config.json');
const OLD_REP = '    "techspecs.supDesc": "Oppustelige drop-stitch stand-up paddle boards med højtryksstivhed.",';
const NEW_REP = '    "techspecs.supDesc": "Oppustelige drop-stitch SUP-brætter med højtryksstivhed.",';
const FIND = '    "techspecs.supDesc": "Nafukovací drop-stitch stand-up paddle boards med højtryksstivhed.",';

// post-patch state assertions
const cfg = JSON.parse(fs.readFileSync(CFG, 'utf8'));
if (cfg.da['techspecs.supDesc'] !== 'Oppustelige drop-stitch SUP-brætter med højtryksstivhed.') {
  console.error('FATAL: config not in post-46 state (run --patch first)');
  process.exit(1);
}
const ops = require(FILE);
if (ops.length !== 25) {
  console.error('FATAL: expected 25 ops in shard 42, got ' + ops.length);
  process.exit(1);
}
if (ops[2].find !== FIND || ops[2].rep !== OLD_REP) {
  console.error(
    'FATAL: 42#2 does not match expected find/rep:\n find: ' +
      JSON.stringify(ops[2].find) +
      '\n rep: ' +
      JSON.stringify(ops[2].rep)
  );
  process.exit(1);
}

// text-level replacement (serialized sq() form; values contain no quotes/backslashes)
let text = fs.readFileSync(FILE, 'utf8');
const occurrences = text.split(OLD_REP).length - 1;
if (occurrences !== 1) {
  console.error('FATAL: expected old rep exactly once in 42 file, found ' + occurrences);
  process.exit(1);
}
text = text.replace(OLD_REP, NEW_REP);
fs.writeFileSync(FILE, text, 'utf8');

// round-trip verify
delete require.cache[require.resolve(FILE)];
const reloaded = require(FILE);
if (reloaded[2].rep !== NEW_REP || reloaded[2].find !== FIND) {
  console.error('FATAL: round-trip mismatch after rewrite');
  process.exit(1);
}
if (reloaded.length !== 25) {
  console.error('FATAL: op count changed');
  process.exit(1);
}
console.log('42#2 rep updated to shard-46 final state, round-trip OK');
