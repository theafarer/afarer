// shard 44 generator: el UI dict EN residue (130 keys = 104 exact + 26 stale-EN)
// Run ONLY on pre-patch state. Output: _ops-data-44.cjs (delete before re-run).
// Strategy (shard 43 pattern): dense runs share one op per run, anchored on the nearest
// unique non-target line above. Chain-safety asserts vs all old ops on the same file.
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const CONFIG = 'src/data/site/i18n-config.json';
const OUT = path.join(DIR, '_ops-data-44.cjs');
const GAP = 10;

if (fs.existsSync(OUT)) {
  console.error('FATAL: _ops-data-44.cjs exists — delete it before re-running the generator.');
  process.exit(1);
}

const data = require('./_b44-data.cjs');
const raw = fs.readFileSync(path.join(DIR, '..', '..', '..', CONFIG), 'utf8');
if (raw.includes('\r')) {
  console.error('FATAL: config file contains CR — line-ending mismatch risk.');
  process.exit(1);
}
const lines = raw.split('\n');
const parsedBefore = JSON.parse(raw);

// el block boundaries (2-space close brace)
let elStart = -1;
let elEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (elStart < 0 && lines[i] === '  "el": {') elStart = i;
  else if (elStart >= 0 && elEnd < 0 && lines[i] === '  },') {
    elEnd = i;
    break;
  }
}
if (elStart < 0 || elEnd < 0) {
  console.error('FATAL: el block not found');
  process.exit(1);
}
console.log('el block: L' + (elStart + 1) + ' - L' + (elEnd + 1));

function countOccurrences(hay, needle) {
  if (!needle) return 0;
  let n = 0;
  let p = 0;
  while ((p = hay.indexOf(needle, p)) !== -1) {
    n++;
    p += 1;
  }
  return n;
}

// locate + validate every target key
const dataKeys = Object.keys(data);
if (dataKeys.length !== 130) {
  console.error('FATAL: expected 130 data keys, got ' + dataKeys.length);
  process.exit(1);
}
const targets = new Map(); // lineIdx -> { key, translation }
for (const key of dataKeys) {
  const prefix = '    "' + key + '": ';
  let idx = -1;
  for (let i = elStart + 1; i < elEnd; i++) {
    if (lines[i].startsWith(prefix)) {
      idx = i;
      break;
    }
  }
  if (idx < 0) {
    console.error('FATAL: key line not found in el block: ' + key);
    process.exit(1);
  }
  const line = lines[idx];
  const jsonText = line.trim().replace(/,$/, '');
  let cur;
  try {
    cur = JSON.parse('{' + jsonText + '}')[key];
  } catch (e) {
    console.error('FATAL: cannot parse line for ' + key + ': ' + line);
    process.exit(1);
  }
  if (cur !== parsedBefore.el[key]) {
    console.error('FATAL: raw/parse mismatch for ' + key);
    process.exit(1);
  }
  const tr = data[key];
  if (typeof tr !== 'string' || tr.length === 0) {
    console.error('FATAL: empty translation for ' + key);
    process.exit(1);
  }
  if (tr === cur) {
    console.error('FATAL: translation equals current value (no-op) for ' + key);
    process.exit(1);
  }
  if (/[\u0000-\u001F]/.test(tr)) {
    console.error('FATAL: control char in translation for ' + key);
    process.exit(1);
  }
  targets.set(idx, { key: key, translation: tr });
}
console.log('targets located: ' + targets.size);

// sanity: serialization style — an existing Greek el line must equal our newLine construction
{
  const probeIdx = targets.size > 0 ? null : null;
  let probe = -1;
  for (let i = elStart + 1; i < elEnd; i++) {
    if (lines[i].startsWith('    "people.heroDesc": ')) {
      probe = i;
      break;
    }
  }
  if (probe < 0) {
    console.error('FATAL: probe line people.heroDesc not found');
    process.exit(1);
  }
  const v = parsedBefore.el['people.heroDesc'];
  const expect = '    "people.heroDesc": ' + JSON.stringify(v) + ',';
  if (lines[probe] !== expect) {
    console.error('FATAL: serialization style mismatch:\n  file: ' + lines[probe] + '\n  ours: ' + expect);
    process.exit(1);
  }
  console.log('serialization style check OK (literal UTF-8, JSON.stringify)');
}

// group target indices into runs (gap <= GAP)
const idxs = [...targets.keys()].sort((a, b) => a - b);
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
console.log('runs: ' + runs.length + ' (' + runs.map((r) => r.length).join('/') + ')');

function newLine(key, val, oldLine) {
  const tail = oldLine.trim().endsWith(',') ? ',' : '';
  return '    ' + JSON.stringify(key) + ': ' + JSON.stringify(val) + tail;
}

// build ops with upward-anchored unique find
const ops = [];
for (const run of runs) {
  const first = run[0];
  const last = run[run.length - 1];
  let a = first - 1;
  if (a <= elStart) {
    console.error('FATAL: no anchor room for run starting L' + (first + 1));
    process.exit(1);
  }
  if (targets.has(a)) {
    console.error('FATAL: anchor is a target line for run at L' + (first + 1));
    process.exit(1);
  }
  let find = null;
  for (;;) {
    find = lines.slice(a, last + 1).join('\n');
    if (countOccurrences(raw, find) === 1) break;
    a--;
    if (a <= elStart || targets.has(a)) {
      console.error('FATAL: cannot find unique anchor for run L' + (first + 1) + '-' + (last + 1));
      process.exit(1);
    }
  }
  const repLines = lines.slice(a, last + 1).map((l, i) => {
    const abs = a + i;
    const t = targets.get(abs);
    return t ? newLine(t.key, t.translation, l) : l;
  });
  const rep = repLines.join('\n');
  if (rep === find) {
    console.error('FATAL: no-op op for run L' + (first + 1));
    process.exit(1);
  }
  ops.push({
    f: CONFIG,
    find: find,
    rep: rep,
    anchor: a + 1,
    span: 'L' + (first + 1) + '-' + (last + 1),
    keys: run.length,
  });
}
console.log('ops built: ' + ops.length + ', changed keys: ' + ops.reduce((s, o) => s + o.keys, 0));

// ---- chain safety vs old ops on the same file ----
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
console.log('old ops on config: ' + configOld.length);

// 1) every old op must currently be "already" (find count 0)
for (const e of configOld) {
  const fc = countOccurrences(raw, e.op.find);
  if (fc !== 0) {
    console.error('FATAL: old op not in already state: ' + e.shard + ' #' + e.i + ' find x' + fc);
    process.exit(1);
  }
}
// 2) my rep text must not resurrect any old find (would make an old op re-apply)
const allRepText = ops.map((o) => o.rep).join('\n');
for (const e of configOld) {
  if (allRepText.includes(e.op.find)) {
    console.error('CHAIN: old op find appears in my rep — needs maintenance: ' + e.shard + ' #' + e.i);
    process.exit(1);
  }
}
// 3) old rep occurrences within my spans must be preserved byte-identically
const chainJobs = [];
for (const o of ops) {
  for (const e of configOld) {
    const cFind = countOccurrences(o.find, e.op.rep);
    if (cFind === 0) continue;
    const cRep = countOccurrences(o.rep, e.op.rep);
    if (cFind !== cRep) {
      chainJobs.push({ shard: e.shard, i: e.i, span: o.span, inFind: cFind, inRep: cRep });
    }
  }
}
if (chainJobs.length > 0) {
  console.log('CHAIN MAINTENANCE REQUIRED:');
  for (const j of chainJobs)
    console.log('  ' + j.shard + ' #' + j.i + ' span ' + j.span + ' find x' + j.inFind + ' -> rep x' + j.inRep);
} else {
  console.log('chain safety: no maintenance jobs');
}

// ---- idempotency simulation (my ops only) ----
let content = raw;
for (const o of ops) {
  const fc = countOccurrences(content, o.find);
  if (fc !== 1) {
    console.error('FATAL: apply-time find count ' + fc + ' for span ' + o.span);
    process.exit(1);
  }
  content = content.split(o.find).join(o.rep);
}
for (const o of ops) {
  const fc = countOccurrences(content, o.find);
  const rc = countOccurrences(content, o.rep);
  if (fc !== 0 || rc < 1) {
    console.error('FATAL: second pass not idempotent for span ' + o.span + ' (find x' + fc + ', rep x' + rc + ')');
    process.exit(1);
  }
}
console.log('idempotency simulation OK');

// ---- full-chain simulation (old config ops must stay already, then mine apply) ----
// NOTE: only ops targeting CONFIG are simulated — the simulation content is the config file;
// ops on other files are untouched by this shard and out of scope here.
let chained = raw;
for (const e of configOld) {
  const fc = countOccurrences(chained, e.op.find);
  const rc = countOccurrences(chained, e.op.rep);
  const isAlready = fc === 0 && rc >= 1;
  const isApply = fc === 1 && rc === 0;
  if (!isAlready && !isApply) {
    console.error('FATAL: old op ' + e.shard + ' #' + e.i + ' breaks in chain sim (find x' + fc + ', rep x' + rc + ')');
    process.exit(1);
  }
  if (isApply) chained = chained.split(e.op.find).join(e.op.rep);
}
// now apply MY ops on top of the chained state
for (const o of ops) {
  const fc = countOccurrences(chained, o.find);
  if (fc !== 1) {
    console.error('FATAL: my op not applicable in chain sim for span ' + o.span + ' (find x' + fc + ')');
    process.exit(1);
  }
  chained = chained.split(o.find).join(o.rep);
}
if (chained !== content) {
  console.error('FATAL: full-chain result differs from my-only patch');
  process.exit(1);
}
console.log('full-chain simulation OK');

// ---- semantic verification of patched content ----
const parsedAfter = JSON.parse(content);
{
  const locales = Object.keys(parsedBefore);
  if (locales.join(',') !== Object.keys(parsedAfter).join(',')) {
    console.error('FATAL: locale set changed');
    process.exit(1);
  }
  let bad = 0;
  for (const lc of locales) {
    const a = parsedBefore[lc];
    const b = parsedAfter[lc];
    const ka = Object.keys(a);
    if (ka.length !== Object.keys(b).length) {
      console.error('FATAL: key count changed for ' + lc);
      bad++;
      continue;
    }
    for (const k of ka) {
      if (lc === 'el' && data[k] !== undefined) {
        if (b[k] !== data[k]) {
          console.error('FATAL: el patched value wrong: ' + k);
          bad++;
        }
      } else if (a[k] !== b[k]) {
        console.error('FATAL: unintended change: ' + lc + ' / ' + k);
        bad++;
      }
    }
  }
  if (bad > 0) process.exit(1);
}
console.log('semantic verification OK (130 el keys patched, everything else byte-identical)');

// ---- serialize output ----
function sq(s) {
  return "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
}
let out = '';
out += '// shard 44 (GENERATED by _gen-ops-44.cjs — do not edit by hand)\n';
out += '// ' + ops.length + ' ops / 130 changed keys: el UI dict EN residue (104 exact + 26 stale-EN).\n';
out += '// Dense el target runs share one op per run, anchored on the nearest unique non-target\n';
out += '// line above (per-key anchors would break each other idempotency). See TECH.md L33/L34.\n';
out += 'module.exports = [\n';
for (const o of ops) {
  out += '  {\n';
  out += '    f: ' + sq(o.f) + ',\n';
  out += '    find: ' + sq(o.find) + ',\n';
  out += '    rep: ' + sq(o.rep) + ',\n';
  out += '  }, // ' + o.span + ', ' + o.keys + ' keys (anchor L' + o.anchor + ')\n';
}
out += '];\n';
fs.writeFileSync(OUT, out, 'utf8');

// round-trip require check (L33 lesson: verify serialization, not just write success)
delete require.cache[require.resolve(OUT)];
const reloaded = require(OUT);
if (reloaded.length !== ops.length) {
  console.error('FATAL: round-trip op count mismatch');
  process.exit(1);
}
for (let i = 0; i < ops.length; i++) {
  if (reloaded[i].f !== ops[i].f || reloaded[i].find !== ops[i].find || reloaded[i].rep !== ops[i].rep) {
    console.error('FATAL: round-trip mismatch at op ' + i);
    process.exit(1);
  }
}
console.log('written: _ops-data-44.cjs (' + ops.length + ' ops), round-trip OK');
