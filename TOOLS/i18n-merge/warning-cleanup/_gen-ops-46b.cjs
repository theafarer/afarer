// shard 46b addendum: 2 keys missed by the primary scans, caught post-patch by
// (a) leftover regex rescan and (b) stem-tolerant token rescan (plural "cases" vs "case").
//   ai.kgDesc: "use cases" EN tail -> anvendelsestilfælde (precedent knowledgeGraph.subtitle)
//   home.resources.supComparisonDesc: "All-around" -> "Allround" (sv/no precedent;
//     "All-Around SUP" product-series name in faq.sup.* is untouched)
// Appends 2 ops to _ops-data-46.cjs (post-patch state). Delete nothing; safe to re-run? NO —
// one-shot: refuses if the addendum op is already present.
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const CONFIG = 'src/data/site/i18n-config.json';
const OPS_FILE = path.join(DIR, '_ops-data-46.cjs');
const GAP = 10;

const FIXES = [
  {
    key: 'ai.kgDesc',
    old: 'Visuelt kort over relationer mellem produkter, teknologier og use cases',
    neu: 'Visuelt kort over relationer mellem produkter, teknologier og anvendelsestilfælde',
  },
  {
    key: 'home.resources.supComparisonDesc',
    old: 'All-around vs touring vs yoga — find din perfekte SUP.',
    neu: 'Allround vs touring vs yoga — find din perfekte SUP.',
  },
];

const raw = fs.readFileSync(path.join(DIR, '..', '..', '..', CONFIG), 'utf8');
if (raw.includes('\r')) {
  console.error('FATAL: config contains CR');
  process.exit(1);
}
const lines = raw.split('\n');
const parsed = JSON.parse(raw);

// idempotency guard: if a fix is already applied, refuse
for (const fx of FIXES) {
  if (parsed.da[fx.key] === fx.neu) {
    console.error('FATAL: ' + fx.key + ' already patched — addendum is one-shot.');
    process.exit(1);
  }
  if (parsed.da[fx.key] !== fx.old) {
    console.error('FATAL: ' + fx.key + ' state drifted: ' + JSON.stringify(parsed.da[fx.key]));
    process.exit(1);
  }
}

// da block
let daStart = -1;
let daEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (daStart < 0 && lines[i] === '  "da": {') daStart = i;
  else if (daStart >= 0 && daEnd < 0 && lines[i] === '  },') {
    daEnd = i;
    break;
  }
}
if (daStart < 0 || daEnd < 0) {
  console.error('FATAL: da block not found');
  process.exit(1);
}

function countOccurrences(hay, needle) {
  let n = 0;
  let p = 0;
  while ((p = hay.indexOf(needle, p)) !== -1) {
    n++;
    p += 1;
  }
  return n;
}

// locate lines + build one op per key (anchored upward to a unique non-target line)
const targetIdx = new Map(); // lineIdx -> fix
for (const fx of FIXES) {
  const prefix = '    "' + fx.key + '": ';
  let idx = -1;
  for (let i = daStart + 1; i < daEnd; i++) {
    if (lines[i].startsWith(prefix)) {
      idx = i;
      break;
    }
  }
  if (idx < 0) {
    console.error('FATAL: line not found: ' + fx.key);
    process.exit(1);
  }
  const jsonText = lines[idx].trim().replace(/,$/, '');
  const cur = JSON.parse('{' + jsonText + '}')[fx.key];
  if (cur !== fx.old) {
    console.error('FATAL: raw/parse mismatch for ' + fx.key);
    process.exit(1);
  }
  targetIdx.set(idx, fx);
}
const idxs = [...targetIdx.keys()].sort((a, b) => a - b);
const runs = [];
let curRun = [idxs[0]];
for (let i = 1; i < idxs.length; i++) {
  if (idxs[i] - curRun[curRun.length - 1] <= GAP) curRun.push(idxs[i]);
  else {
    runs.push(curRun);
    curRun = [idxs[i]];
  }
}
runs.push(curRun);

const ops = [];
for (const run of runs) {
  const first = run[0];
  const last = run[run.length - 1];
  let a = first - 1;
  if (a <= daStart || targetIdx.has(a)) {
    console.error('FATAL: no anchor room');
    process.exit(1);
  }
  let find = null;
  for (;;) {
    find = lines.slice(a, last + 1).join('\n');
    if (countOccurrences(raw, find) === 1) break;
    a--;
    if (a <= daStart || targetIdx.has(a)) {
      console.error('FATAL: no unique anchor for ' + first);
      process.exit(1);
    }
  }
  const rep = lines
    .slice(a, last + 1)
    .map((l, i) => {
      const t = targetIdx.get(a + i);
      if (!t) return l;
      const tail = l.trim().endsWith(',') ? ',' : '';
      return '    ' + JSON.stringify(t.key) + ': ' + JSON.stringify(t.neu) + tail;
    })
    .join('\n');
  ops.push({ f: CONFIG, find: find, rep: rep, span: 'L' + (first + 1) + '-' + (last + 1), keys: run.length });
}
console.log('addendum ops built: ' + ops.length + ' (' + runs.map((r) => r.length).join('/') + ')');

// chain safety vs ALL old ops (incl. the 22 already-applied shard-46 ops)
const shardFiles = fs
  .readdirSync(DIR)
  .filter((n) => /^_ops-data-\d+\.cjs$/.test(n))
  .sort((x, y) => parseInt(x.match(/\d+/)[0], 10) - parseInt(y.match(/\d+/)[0], 10));
const oldOps = [];
for (const sf of shardFiles) {
  const arr = require(path.join(DIR, sf));
  for (let i = 0; i < arr.length; i++) oldOps.push({ shard: sf, i: i, op: arr[i] });
}
const configOld = oldOps.filter((e) => e.op.f === CONFIG);
for (const e of configOld) {
  if (countOccurrences(raw, e.op.find) !== 0) {
    console.error('FATAL: old op not already: ' + e.shard + ' #' + e.i);
    process.exit(1);
  }
  if (ops.some((o) => o.rep.includes(e.op.find))) {
    console.error('CHAIN: my rep resurrects old find: ' + e.shard + ' #' + e.i);
    process.exit(1);
  }
}
let jobs = 0;
for (const o of ops) {
  for (const e of configOld) {
    const cFind = countOccurrences(o.find, e.op.rep);
    if (cFind === 0) continue;
    if (countOccurrences(o.rep, e.op.rep) !== cFind) {
      console.error('CHAIN: old rep count changes in span ' + o.span + ': ' + e.shard + ' #' + e.i);
      jobs++;
    }
  }
}
if (jobs > 0) process.exit(1);
console.log('chain safety OK (' + configOld.length + ' old config ops checked)');

// idempotency simulation
let content = raw;
for (const o of ops) {
  if (countOccurrences(content, o.find) !== 1) {
    console.error('FATAL: find count != 1 for ' + o.span);
    process.exit(1);
  }
  content = content.split(o.find).join(o.rep);
}
for (const o of ops) {
  if (countOccurrences(content, o.find) !== 0 || countOccurrences(content, o.rep) < 1) {
    console.error('FATAL: not idempotent for ' + o.span);
    process.exit(1);
  }
}
const parsedAfter = JSON.parse(content);
for (const lc of Object.keys(parsed)) {
  const a = parsed[lc];
  const b = parsedAfter[lc];
  if (Object.keys(a).length !== Object.keys(b).length) {
    console.error('FATAL: key count changed for ' + lc);
    process.exit(1);
  }
  for (const k of Object.keys(a)) {
    const fx = FIXES.find((f) => f.key === k);
    if (lc === 'da' && fx) {
      if (b[k] !== fx.neu) {
        console.error('FATAL: patched value wrong: ' + k);
        process.exit(1);
      }
    } else if (a[k] !== b[k]) {
      console.error('FATAL: unintended change: ' + lc + ' / ' + k);
      process.exit(1);
    }
  }
}
console.log('idempotency + semantic verification OK');

// append to _ops-data-46.cjs
let text = fs.readFileSync(OPS_FILE, 'utf8');
if (!text.includes('];\n')) {
  console.error('FATAL: ops file terminator not found');
  process.exit(1);
}
function sq(s) {
  return "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
}
let block = '';
for (const o of ops) {
  block += '  {\n';
  block += '    f: ' + sq(o.f) + ',\n';
  block += '    find: ' + sq(o.find) + ',\n';
  block += '    rep: ' + sq(o.rep) + ',\n';
  block += '  }, // 46b addendum ' + o.span + ', ' + o.keys + ' keys\n';
}
text = text.replace('];\n', block + '];\n');
// update header counts
const oldOpsArr = require(OPS_FILE);
const totalOps = oldOpsArr.length + ops.length;
const totalKeys = 28 + FIXES.length;
text = text.replace(
  /\/\/ \d+ ops \/ 28 changed keys[^\n]*/,
  '// ' + totalOps + ' ops / ' + totalKeys + ' changed keys (46b addendum included)'
);
fs.writeFileSync(OPS_FILE, text, 'utf8');

// round-trip
delete require.cache[require.resolve(OPS_FILE)];
const reloaded = require(OPS_FILE);
if (reloaded.length !== totalOps) {
  console.error('FATAL: round-trip op count mismatch: ' + reloaded.length + ' vs ' + totalOps);
  process.exit(1);
}
console.log('appended: _ops-data-46.cjs now ' + reloaded.length + ' ops, round-trip OK');
