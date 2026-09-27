#!/usr/bin/env node
/**
 * _gen-ops-43.cjs — shard 43 generator
 *
 * Scope: fi UI dict EN residue (104 exact fi===en + 13 stale-EN copies + 1 typo veneyiden)
 *        + el people.managementDesc (Greek, el dot-thousands 12.000 m² per precedent).
 *
 * Strategy: fi targets sit in dense contiguous runs where each target line is
 * byte-identical to the en-block line (count >= 2 in file), so per-key anchors
 * would break each other's idempotency. Instead each maximal contiguous run
 * (targets + interleaved non-unique keep-lines) becomes ONE op, anchored on the
 * nearest UNIQUE non-target line above the run. Anchor is never a target and
 * never modified afterwards -> find count 1 pre-patch, rep count 1 post-patch,
 * idempotent on re-dry.
 *
 * Assertions (FATAL on any failure):
 *   - guard: refuse if _ops-data-43.cjs already exists (pre-patch only)
 *   - every data key resolves to exactly one line in its locale block
 *   - old ops (shards 01..42, same file) apply ZERO changes on RAW
 *   - each generated op: find count == 1, rep count == 0 in RAW
 *   - sequential simulation: every op applies cleanly; post: find==0 && rep==1
 *   - chain safety: old ops' find/rep counts identical RAW vs post-simulation
 *   - coverage: exactly 118 fi lines + 1 el line changed
 *
 * Run from repo root: node TOOLS/i18n-merge/warning-cleanup/_gen-ops-43.cjs
 */
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const CFG_REL = 'src/data/site/i18n-config.json';
const CFG = path.resolve(dir, '../../..', CFG_REL);
const OUT = path.join(dir, '_ops-data-43.cjs');
const data = require(path.join(dir, '_b43-data.cjs'));

const fatal = (msg) => {
  console.log('FATAL: ' + msg);
  process.exit(1);
};

if (fs.existsSync(OUT)) fatal('_ops-data-43.cjs already exists — generator runs on pre-patch state only.');

const RAW = fs.readFileSync(CFG, 'utf8');
if (RAW.includes('\r')) fatal('CRLF in i18n-config.json — unexpected');
const lines = RAW.split('\n');
const count = (hay, needle) => (needle ? hay.split(needle).length - 1 : 0);

// ---- locale block ranges ----
const blocks = [];
lines.forEach((l, i) => {
  const m = l.match(/^  "([a-z]{2})": \{$/);
  if (m) blocks.push({ key: m[1], start: i });
});
const blockRange = (lang) => {
  const bi = blocks.findIndex((b) => b.key === lang);
  if (bi < 0) fatal('block not found: ' + lang);
  return [blocks[bi].start, bi + 1 < blocks.length ? blocks[bi + 1].start : lines.length];
};
// block content = (start, endExclusive) where endExclusive = next opener index; last content line is endExclusive-2 ("},")
const lineKey = (l) => {
  const m = l.match(/^(\s*)"([^"]+)":\s*".*",\s*$/);
  return m ? m[2] : null;
};

// ---- resolve fi/el target lines ----
const resolve = (lang, entries) => {
  const [bs, be] = blockRange(lang);
  const keyLine = new Map();
  for (let i = bs + 1; i < be - 1; i++) {
    const k = lineKey(lines[i]);
    if (k) {
      if (keyLine.has(k)) fatal('duplicate key ' + k + ' in ' + lang + ' block');
      keyLine.set(k, i);
    }
  }
  const out = new Map(); // lineIdx -> { key, val }
  for (const [k, v] of entries) {
    if (!keyLine.has(k)) fatal('key missing in ' + lang + ' block: ' + k);
    if (/["\u0000-\u001f]/.test(v)) fatal('illegal char in new value for ' + k);
    const i = keyLine.get(k);
    const old = lines[i];
    if (!/,\s*$/.test(old)) fatal('target line lacks trailing comma: ' + k);
    const indent = old.match(/^\s*/)[0];
    const newVal = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const rep = indent + '"' + k + '": "' + newVal + '",';
    if (rep === old) fatal('new value identical to old for ' + k);
    out.set(i, { key: k, rep });
  }
  return out;
};

const fiTargets = resolve('fi', data.fi);
const elTargets = resolve('el', data.el);
if (fiTargets.size !== data.fi.length) fatal('fi resolve mismatch');
if (elTargets.size !== 1) fatal('el resolve mismatch');
console.log('targets: fi=' + fiTargets.size + ' el=' + elTargets.size);

// ---- build fi run ops ----
const [fs_, fe_] = blockRange('fi');
const ops = [];
let anchor = fs_; // block opener "fi": { — unique, non-target
let runStart = null;
let runEnd = null;
let covered = 0;
const emitRun = (a, s, e) => {
  const span = [];
  let changed = 0;
  for (let i = a; i <= e; i++) {
    const t = fiTargets.get(i);
    if (t) {
      span.push(t.rep);
      changed++;
    } else {
      span.push(lines[i]);
    }
  }
  const find = lines.slice(a, e + 1).join('\n');
  const rep = span.join('\n');
  if (count(RAW, find) !== 1) fatal('run find count != 1 (anchor L' + (a + 1) + ', end L' + (e + 1) + ')');
  if (count(RAW, rep) !== 0) fatal('run rep already present (anchor L' + (a + 1) + ')');
  if (changed === 0) fatal('empty run emitted');
  ops.push({ f: CFG_REL, find, rep, _anchor: a + 1, _end: e + 1, _changed: changed });
  covered += changed;
};
for (let i = fs_ + 1; i < fe_ - 1; i++) {
  if (fiTargets.has(i)) {
    if (runStart === null) runStart = i;
    runEnd = i;
  } else if (lines[i].trim() !== '' && count(RAW, lines[i]) === 1) {
    if (runStart !== null) emitRun(anchor, runStart, runEnd);
    anchor = i;
    runStart = null;
    runEnd = null;
  } // non-unique non-target: keep-line inside an open run, or noise between runs
}
if (runStart !== null) emitRun(anchor, runStart, runEnd);
if (covered !== fiTargets.size) fatal('coverage ' + covered + ' != ' + fiTargets.size);
console.log('fi runs: ' + ops.length + ' (lines covered: ' + covered + ')');

// ---- el op (single unique line) ----
for (const [i, t] of elTargets) {
  const old = lines[i];
  if (count(RAW, old) !== 1) fatal('el line not unique: ' + t.key);
  if (count(RAW, t.rep) !== 0) fatal('el rep already present: ' + t.key);
  ops.push({ f: CFG_REL, find: old, rep: t.rep, _anchor: i + 1, _end: i + 1, _changed: 1 });
}

// ---- load old ops, same file (with shard provenance) ----
const shards = fs
  .readdirSync(dir)
  .filter((f) => /^_ops-data-\d+\.cjs$/.test(f) && f !== '_ops-data-43.cjs')
  .sort();
const oldSame = []; // { shard, idx, op }
let oldTotal = 0;
for (const s of shards) {
  const arr = require(path.join(dir, s));
  oldTotal += arr.length;
  arr.forEach((op, idx) => {
    if (op.f === CFG_REL) oldSame.push({ shard: s, idx, op });
  });
}
console.log('old ops total: ' + oldTotal + ', same-file: ' + oldSame.length);

// ---- engine verdict helper ----
const verdict = (op, hay) => {
  const n = op.n || 1;
  const fc = count(hay, op.find);
  const rc = count(hay, op.rep);
  if (fc === n && !(rc >= n && op.rep.includes(op.find))) return 'apply';
  if (fc === 0 && rc >= n) return 'already';
  if (fc === n && rc >= n && op.rep.includes(op.find)) return 'already';
  return 'err';
};
for (const e of oldSame) {
  if (verdict(e.op, RAW) !== 'already')
    fatal('old op not already on pre-patch RAW: ' + JSON.stringify(e.op.find.slice(0, 60)));
}

// ---- chain maintenance: old reps may contain lines shard 43 replaces ----
// (e.g. shard 41's fi mgmt op anchored on people.quality/qualityDesc/sales/
//  salesDesc/subtitle EN lines, which shard 43 translates). Post-patch those
// reps vanish -> old op breaks. Maintenance (post-patch) rewrites affected
// reps line-wise to the post-43 state; find stays historical (x0 forever).
const lineMap = new Map(); // raw old line -> new line
for (const [i, t] of fiTargets) lineMap.set(lines[i], t.rep);
for (const [i, t] of elTargets) lineMap.set(lines[i], t.rep);
const jobs = []; // { shard, idx, oldRep, newRep }
for (const e of oldSame) {
  const newRep = e.op.rep
    .split('\n')
    .map((l) => (lineMap.has(l) ? lineMap.get(l) : l))
    .join('\n');
  if (newRep !== e.op.rep) jobs.push({ shard: e.shard, idx: e.idx, oldRep: e.op.rep, newRep });
}
console.log('chain maintenance jobs: ' + jobs.length);
for (const j of jobs) console.log('  job: ' + j.shard + ' op#' + j.idx);

// ---- simulation ----
let content = RAW;
// apply mine sequentially
for (const op of ops) {
  if (count(content, op.find) !== 1) fatal('sim: find != 1 for anchor L' + op._anchor);
  content = content.split(op.find).join(op.rep);
}
// post: idempotency pre-check
for (const op of ops) {
  if (count(content, op.find) !== 0) fatal('sim: find remains post-patch (anchor L' + op._anchor + ')');
  if (count(content, op.rep) !== 1) fatal('sim: rep count != 1 post-patch (anchor L' + op._anchor + ')');
}
// chain safety: maintained old ops must still evaluate "already" post-patch
for (const e of oldSame) {
  const j = jobs.find((x) => x.shard === e.shard && x.idx === e.idx);
  const op2 = j ? Object.assign({}, e.op, { rep: j.newRep }) : e.op;
  const v = verdict(op2, content);
  if (v !== 'already') fatal('chain: old op ' + e.shard + ' op#' + e.idx + ' -> ' + v + ' post-patch (maintained)');
}
console.log('simulation OK: ' + ops.length + ' ops, all idempotent, chain safe (' + jobs.length + ' maintenance jobs)');

// ---- write ops file ----
const sq = (s) => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
const head =
  '// shard 43 (GENERATED by _gen-ops-43.cjs — do not edit by hand)\n' +
  '// ' +
  ops.length +
  ' ops / 119 changed lines: fi UI dict EN residue (104 exact + 13 stale-EN + 1 typo)\n' +
  '// + el people.managementDesc. Dense fi target runs share one op per run, anchored on the\n' +
  '// nearest unique non-target line above (per-key anchors would break each other idempotency).\n';
const body = ops
  .map((op) => {
    const note =
      op._changed > 1 ? ' // run L' + op._anchor + '-' + op._end + ', ' + op._changed + ' keys' : ' // L' + op._anchor;
    return '  {\n    f: ' + sq(op.f) + ',\n    find: ' + sq(op.find) + ',\n    rep: ' + sq(op.rep) + ',\n  },' + note;
  })
  .join('\n');
fs.writeFileSync(OUT, head + 'module.exports = [\n' + body + '\n];\n', 'utf8');
console.log('written: ' + OUT + ' (' + ops.length + ' ops)');
for (const op of ops) console.log('  op: anchor L' + op._anchor + ' end L' + op._end + ' changed ' + op._changed);

// ---- write chain maintenance script (run AFTER patch) ----
if (jobs.length > 0) {
  const CHAIN = path.join(dir, '_chain-43.cjs');
  const script =
    '#!/usr/bin/env node\n' +
    '// _chain-43.cjs (GENERATED by _gen-ops-43.cjs — do not edit by hand)\n' +
    '// Post-patch chain maintenance for shard 43: old ops whose rep contained fi/en lines\n' +
    '// translated by shard 43 get their rep rewritten line-wise to the post-43 state.\n' +
    '// find stays historical (x0 forever). Run AFTER _patch-warnings.cjs --patch,\n' +
    '// then prettier --write the maintained shard files, then re-run --dry.\n' +
    "const fs = require('fs');\n" +
    "const path = require('path');\n" +
    'const dir = __dirname;\n' +
    "const CFG = path.resolve(dir, '../../..', 'src/data/site/i18n-config.json');\n" +
    'const count = (h, n) => h.split(n).length - 1;\n' +
    "const fatal = (m) => { console.log('FATAL: ' + m); process.exit(1); };\n" +
    "const sq = (s) => \"'\" + s.replace(/\\\\/g, '\\\\\\\\').replace(/'/g, \"\\\\'\").replace(/\\n/g, '\\\\n') + \"'\";\n" +
    'const opStr = (op) => {\n' +
    "  let s = '  {\\n';\n" +
    "  for (const k of ['f', 'find', 'rep', 'n']) {\n" +
    "    if (op[k] !== undefined) s += '    ' + k + ': ' + (typeof op[k] === 'number' ? op[k] : sq(op[k])) + ',\\n';\n" +
    '  }\n' +
    "  return s + '  },';\n" +
    '};\n' +
    'const jobs = ' +
    JSON.stringify(jobs, null, 2) +
    ';\n' +
    "const cfg = fs.readFileSync(CFG, 'utf8');\n" +
    'for (const j of jobs) {\n' +
    "  if (count(cfg, j.oldRep) !== 0) fatal('pre-patch state (old rep still in i18n-config.json) — run _patch-warnings.cjs --patch first: ' + j.shard + ' op#' + j.idx);\n" +
    "  if (count(cfg, j.newRep) < 1) fatal('new rep missing in patched file: ' + j.shard + ' op#' + j.idx);\n" +
    '}\n' +
    'const byShard = new Map();\n' +
    'for (const j of jobs) { if (!byShard.has(j.shard)) byShard.set(j.shard, []); byShard.get(j.shard).push(j); }\n' +
    'for (const [shard, js] of byShard) {\n' +
    '  const p = path.join(dir, shard);\n' +
    "  const text = fs.readFileSync(p, 'utf8');\n" +
    '  const arr = require(p);\n' +
    '  let changed = 0;\n' +
    '  for (const j of js) {\n' +
    "    if (JSON.stringify(arr[j.idx].rep) === JSON.stringify(j.newRep)) { console.log('already maintained: ' + shard + ' op#' + j.idx); continue; }\n" +
    "    if (JSON.stringify(arr[j.idx].rep) !== JSON.stringify(j.oldRep)) fatal('op drift: ' + shard + ' op#' + j.idx);\n" +
    '    arr[j.idx].rep = j.newRep;\n' +
    '    changed++;\n' +
    '  }\n' +
    '  if (changed === 0) continue;\n' +
    "  const hIdx = text.indexOf('module.exports');\n" +
    "  const header = text.slice(0, hIdx).replace(/\\s+$/, '') + '\\n// [chain-maint 43] rep updated to post-shard-43 state by _chain-43.cjs\\n';\n" +
    "  const bodyStr = arr.map(opStr).join('\\n');\n" +
    "  fs.writeFileSync(p, header + 'module.exports = [\\n' + bodyStr + '\\n];\\n', 'utf8');\n" +
    '  delete require.cache[require.resolve(p)];\n' +
    '  const re = require(p);\n' +
    "  if (re.length !== arr.length) fatal('round-trip length mismatch: ' + shard);\n" +
    "  re.forEach((op, i) => { if (JSON.stringify(op) !== JSON.stringify(arr[i])) fatal('round-trip mismatch: ' + shard + ' op#' + i); });\n" +
    "  console.log('maintained: ' + shard + ' (' + changed + ' ops) — run prettier --write on it');\n" +
    '}\n' +
    "console.log('chain maintenance done');\n";
  fs.writeFileSync(CHAIN, script, 'utf8');
  console.log('written: ' + CHAIN);
}
