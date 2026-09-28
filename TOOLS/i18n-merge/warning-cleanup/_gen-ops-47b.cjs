// shard 47b correction: yaml single-quote escaping.
// The 47 op replaced SUPer -> SUP'er on home.yaml L3+L15 in one shot (n=2), but L3 is a
// single-quoted yaml scalar where ' must be escaped as '' — SUP'er broke the yaml parse.
// This script replaces that op in _ops-data-47.cjs with two terminal-consistent ops:
//   A (L3, quoted scalar):  performance-oppustelige SUP'er  -> performance-oppustelige SUP''er
//      (transition intermediate->terminal; applies on the current broken state, "already" after)
//   B (L15, block scalar):  Performance-oppustelige SUPer designet -> ...SUP'er designet
//      (historical pre-47->terminal form; "already" on current and terminal state)
// Idempotent: no-op if the corrected block is already in place.
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '_ops-data-47.cjs');
const raw = fs.readFileSync(FILE, 'utf8');

const OLD = [
  '  {',
  "    f: 'src/data/pages/da/home.yaml',",
  "    find: 'SUPer',",
  '    rep: "SUP\'er",',
  '    n: 2,',
  '  },',
].join('\n');

const NEW = [
  '  {',
  "    f: 'src/data/pages/da/home.yaml',",
  '    find: "performance-oppustelige SUP\'er",',
  '    rep: "performance-oppustelige SUP\'\'er",',
  '    n: 1,',
  '  },',
  '  {',
  "    f: 'src/data/pages/da/home.yaml',",
  "    find: 'Performance-oppustelige SUPer designet',",
  '    rep: "Performance-oppustelige SUP\'er designet",',
  '    n: 1,',
  '  },',
].join('\n');

function count(hay, needle) {
  let c = 0;
  let p = 0;
  while ((p = hay.indexOf(needle, p)) !== -1) {
    c++;
    p += 1;
  }
  return c;
}

if (count(raw, NEW) === 1) {
  console.log('OK already: _ops-data-47.cjs already carries the 47b corrected SUPer ops.');
  process.exit(0);
}
if (count(raw, NEW) !== 0) {
  console.error('FATAL: partial 47b state in _ops-data-47.cjs.');
  process.exit(1);
}
if (count(raw, OLD) !== 1) {
  console.error('FATAL: original n=2 SUPer op not found exactly once in _ops-data-47.cjs.');
  process.exit(1);
}
fs.writeFileSync(FILE, raw.replace(OLD, NEW), 'utf8');
console.log('OK: _ops-data-47.cjs SUPer op split into 47b corrected ops (L3 quoted / L15 block).');
