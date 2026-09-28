// shard 46 generator: da UI dict EN residue (28 keys = 10 Download->Hent + 18 embedded-EN/hybrid)
// Run ONLY on pre-patch state. Output: _ops-data-46.cjs (delete before re-run).
// Strategy (shard 43/44/45 pattern): dense runs share one op per run, anchored on the nearest
// unique non-target line above. Chain-safety asserts vs all old ops on the same file
// (shards 41/42 previously touched the da block — must stay "already").
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const CONFIG = 'src/data/site/i18n-config.json';
const OUT = path.join(DIR, '_ops-data-46.cjs');
const GAP = 10;

if (fs.existsSync(OUT)) {
  console.error('FATAL: _ops-data-46.cjs exists — delete it before re-running the generator.');
  process.exit(1);
}

const data = require('./_b46-data.cjs');
const raw = fs.readFileSync(path.join(DIR, '..', '..', '..', CONFIG), 'utf8');
if (raw.includes('\r')) {
  console.error('FATAL: config file contains CR — line-ending mismatch risk.');
  process.exit(1);
}
const lines = raw.split('\n');
const parsedBefore = JSON.parse(raw);

// da block boundaries (2-space close brace)
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
console.log('da block: L' + (daStart + 1) + ' - L' + (daEnd + 1));

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

// ---- pre-patch value-class assertions (prove we are fixing the diagnosed residue) ----
{
  // exact current da values for all 28 targets (strongest anti-drift lock)
  const expectedOld = {
    'home.resources.download': 'Download PDF',
    'retail.download': 'Download',
    'home.resources.b2bSubtitle':
      'Download produktkataloger, kvalitetsrapporter og overholdelsesdokumentation for at udforske afarers kollektioner og partnerprogrammer.',
    'buyerCenter.downloadCatalog': 'Download katalog',
    'buyerCenter.b2bResourcesDesc': 'Download kataloger, QC-rapporter og fabriksrundvisningsinformation.',
    'oem.catalog': 'Download produktkatalog',
    'resources.metaDesc':
      'Download produktkataloger, OEM-produktionsguider, indkøbschecklister og teknisk dokumentation til indkøb af marineudstyr.',
    'nav.resourcesDownloadCatalog': 'Download katalog',
    'exitIntent.title': 'Inden du går — Download vores OEM-guide',
    'exitIntent.button': 'Download guiden gratis',
    'home.tech.pvc.title': 'Militær-grade PVC-lag',
    'home.learn.guide3': 'Gummibåd vs. stiv Board',
    'techspecs.supDesc': 'Oppustelige drop-stitch stand-up paddle boards med højtryksstivhed.',
    'compare.pvcVsHypalon.subtitle':
      'Den endelige sammenligning mellem PVC og Hypalon CSM — de to dominerende materialer i gummibådsfremstilling worldwide.',
    'compare.inflatableVsHard.hardBestDesc':
      'Løb, performance surfing, avancerede padlere, padlere med opbevaringsplads.',
    'home.products.sup.title': 'Letvægt. Stabil. Performance-drevet.',
    'compare.singleVsMulti.cta': 'Shop flerkammer-SUP-brætter',
    'home.evidence.viewCaseStudy': 'Se case',
    'home.problem.wrongGear.desc':
      'Et begynderbræt taget med i åben søgang. Et racebræt brugt i whitewater. Udstyr presset ud over dets designgrænser fører til usikre situationer og dårlige oplevelser.',
    'carousel.prev': 'Forrige slide',
    'carousel.next': 'Næste slide',
    'chat.sendEmail': 'Send email',
    'geo.mediumSeverity': 'Medium alvorlighed ({count})',
    'graph.subtitle': 'Udforsk relationer mellem produkter, teknologier, materialer og use cases',
    'academy.learningCenterDesc':
      'Trinvise guider og tutorials organiseret efter færdighedsniveau — fra SUP-basics til avancerede redningsteknikker.',
    'academy.metaDesc':
      'Guider og tutorials for hvert færdighedsniveau — fra SUP-basics til avancerede redningsteknikker. Lær i dit eget tempo med Afarer Academy.',
    'oem.pkg.growing.f2': 'Skræddersyet emballage & labels',
    'solutionsByIndustry.sar.cert1': 'SOLAS-compliant muligheder',
  };
  let bad = 0;
  for (const k of Object.keys(expectedOld)) {
    if (parsedBefore.da[k] !== expectedOld[k]) {
      console.error('FATAL: da state drifted for ' + k + ': ' + JSON.stringify(parsedBefore.da[k]));
      bad++;
    }
  }
  // the two exact ===en residues must also equal the en value
  if (parsedBefore.da['home.resources.download'] !== parsedBefore.en['home.resources.download']) bad++;
  if (parsedBefore.da['retail.download'] !== parsedBefore.en['retail.download']) bad++;
  if (bad > 0) process.exit(1);
  console.log('pre-patch value-class assertions OK (28 exact-value locks, 2 of them ===en)');
}

// locate + validate every target key
const dataKeys = Object.keys(data);
if (dataKeys.length !== 28) {
  console.error('FATAL: expected 28 data keys, got ' + dataKeys.length);
  process.exit(1);
}
const targets = new Map(); // lineIdx -> { key, translation }
for (const key of dataKeys) {
  const prefix = '    "' + key + '": ';
  let idx = -1;
  for (let i = daStart + 1; i < daEnd; i++) {
    if (lines[i].startsWith(prefix)) {
      idx = i;
      break;
    }
  }
  if (idx < 0) {
    console.error('FATAL: key line not found in da block: ' + key);
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
  if (cur !== parsedBefore.da[key]) {
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
  if (tr.includes('\\u')) {
    console.error('FATAL: literal escape sequence in translation for ' + key + ' — use real UTF-8 chars');
    process.exit(1);
  }
  targets.set(idx, { key: key, translation: tr });
}
console.log('targets located: ' + targets.size);

// sanity: serialization style — an existing Danish line must equal our newLine construction
{
  let probe = -1;
  for (let i = daStart + 1; i < daEnd; i++) {
    if (lines[i].startsWith('    "people.heroDesc": ')) {
      probe = i;
      break;
    }
  }
  if (probe < 0) {
    console.error('FATAL: probe line people.heroDesc not found');
    process.exit(1);
  }
  const v = parsedBefore.da['people.heroDesc'];
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
  if (a <= daStart) {
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
    if (a <= daStart || targets.has(a)) {
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
    console.error('FATAL: old op ' + e.shard + ' #' + e.i + ' breaks in chain sim (find x' + fc + ', rep x' + rc);
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
      if (lc === 'da' && data[k] !== undefined) {
        if (b[k] !== data[k]) {
          console.error('FATAL: da patched value wrong: ' + k);
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
console.log('semantic verification OK (28 da keys patched, everything else byte-identical)');

// ---- serialize output ----
function sq(s) {
  return "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
}
let out = '';
out += '// shard 46 (GENERATED by _gen-ops-46.cjs — do not edit by hand)\n';
out +=
  '// ' + ops.length + ' ops / 28 changed keys: da UI dict EN residue (10 Download->Hent + 18 embedded-EN/hybrid).\n';
out += '// Dense da target runs share one op per run, anchored on the nearest unique non-target\n';
out += '// line above (per-key anchors would break each other idempotently). See TECH.md L34/L35/L36.\n';
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
for (let i = 0; i < reloaded.length; i++) {
  if (reloaded[i].f !== ops[i].f || reloaded[i].find !== ops[i].find || reloaded[i].rep !== ops[i].rep) {
    console.error('FATAL: round-trip mismatch at op ' + i);
    process.exit(1);
  }
}
console.log('written: _ops-data-46.cjs (' + ops.length + ' ops), round-trip OK');
