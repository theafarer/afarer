// shard 54 generator — nav.* residue clearing (TECH.md L44):
//   1. MID 12-key block (inflatableVsHardboard..brandTeam, pvcVsHypalon interleaved KEEP) holds raw EN
//      in 13 locales (ru,pl,ar,nl,sv,no,el,tr,fi,cs,da,ro,th) — translate from each locale's own page
//      titles + dict vocab (groundings in _b54-data.cjs header).
//   2. 5 nav keys referenced by Header/Footer label->key maps but ABSENT from the dict in ALL 21
//      locales (brandWhyAfarer, inflatableSup, b2bSolutionsMatrix, solutionsResortsHotels,
//      solutionsOemBrands) — t() falls back to the raw EN label in every locale. Add keys everywhere.
//   3. nav.resourcesJournal holds EN "Journal" in 10 locales — set each locale's own nav.journal value.
//   4. 16 scattered residues (da guides family, sv/da designPowerhouse, pt/tr r8a/r8b price format,
//      pt rel2label, ru techspecs.materialDropstitch, de academy.guides, es geo.total corrupt value,
//      ar product.catalog mixed-script garbage).
//
// 52/53 lesson kept: rep is NOT hand-serialized — ops are built SEQUENTIALLY against a simulated
// patch state (later ops may rely on earlier ops for find uniqueness, e.g. en brandTeam "Our Team"
// only becomes unique after the 13 segment ops), then prettier(json) terminal === sim is asserted,
// then an engine-semantics replay onto raw must reproduce sim byte-exact.
//
// Run ONCE against pre-patch state: node _gen-ops-54.cjs   (delete output first, or --force)
// Output: _ops-data-54.cjs (47 ops = 13 segment + 8 insertion + 10 resourcesJournal + 16 scattered;
// 287 changed/new key-lines).
const fs = require('fs');

const REPO = 'E:/github/afarer';
const prettier = require(REPO + '/node_modules/prettier');

const DIR = 'E:/github/afarer/TOOLS/i18n-merge/warning-cleanup';
const OPS_PATH = DIR + '/_ops-data-54.cjs';
if (fs.existsSync(OPS_PATH) && !process.argv.includes('--force')) {
  throw new Error('_ops-data-54.cjs already exists — delete it first (generator runs on pre-patch state only)');
}

const D = require('./_b54-data.cjs');

const JSON_OPTS = { parser: 'json', tabWidth: 2, useTabs: false };
const count = (text, s) => text.split(s).length - 1;
const J = (s) => JSON.stringify(s);
const LOCALES = D.LOCALES;

const ops = [];
const notes = [];

function blockRange(sim, loc) {
  const li = LOCALES.indexOf(loc);
  if (li < 0) throw new Error('unknown locale ' + loc);
  const next = LOCALES[li + 1];
  const start = sim.indexOf('\n  "' + loc + '": {');
  const end = next ? sim.indexOf('\n  "' + next + '": {') : sim.length;
  if (start < 0 || end < 0 || end <= start) throw new Error('block boundary fail: ' + loc);
  return { start, end };
}

// extend [lo..hi] line window within a block until the joined text is globally unique in sim
function uniqueWindow(sim, segLines, idx, blockFloor) {
  let lo = idx;
  let hi = idx;
  let find = segLines[idx];
  if (count(sim, find) === 1) return { lo, hi, find };
  while (true) {
    if (lo > blockFloor) lo--;
    else if (hi < segLines.length - 2) hi++;
    else throw new Error('cannot disambiguate line idx ' + idx);
    find = segLines.slice(lo, hi + 1).join('\n');
    if (count(sim, find) === 1) return { lo, hi, find };
    if (hi - lo > 80) throw new Error('disambiguation window exceeded for line idx ' + idx);
  }
}

async function main() {
  const CFG_F = 'src/data/site/i18n-config.json';
  const cfgRaw = fs.readFileSync(REPO + '/' + CFG_F, 'utf8');
  if ((await prettier.format(cfgRaw, JSON_OPTS)) !== cfgRaw) {
    throw new Error('i18n-config.json disk file is not prettier-clean');
  }
  let sim = cfgRaw;

  // ---------- pre-patch assertions ----------
  // MID EN lines (byte-exact, sliced from en block)
  const enBlock = blockRange(cfgRaw, 'en');
  const enLines = cfgRaw.slice(enBlock.start, enBlock.end).split('\n');
  const MID_KEYS = Object.keys(D.MID_EN);
  const enMidIdx = enLines.findIndex((l) => l.startsWith('    "nav.inflatableVsHardboard": '));
  if (enMidIdx < 0) throw new Error('en MID block not found');
  const EN_MID_LINES = MID_KEYS.map((k, j) => {
    const line = enLines[enMidIdx + j];
    const expect = '    "' + k + '": ' + J(D.MID_EN[k]) + ',';
    if (line !== expect) throw new Error('en MID line ' + j + ' mismatch: ' + J(line) + ' vs ' + J(expect));
    return line;
  });
  // 5 new keys absent everywhere
  for (const k of D.NEW5) {
    if (cfgRaw.includes('"' + k + '":')) throw new Error('new key already on disk: ' + k);
  }
  // MID_T shape: exactly the 12 non-KEEP keys
  for (const loc of D.MID_LOCALES) {
    const got = Object.keys(D.MID_T[loc]).sort().join(',');
    const want = MID_KEYS.filter((k) => k !== 'nav.pvcVsHypalon')
      .sort()
      .join(',');
    if (got !== want) throw new Error('MID_T[' + loc + '] key set mismatch');
  }
  // NEW5_V shape for all 21 locales
  for (const loc of LOCALES) {
    const got = Object.keys(D.NEW5_V[loc]).sort().join(',');
    const want = D.NEW5.slice().sort().join(',');
    if (got !== want) throw new Error('NEW5_V[' + loc + '] key set mismatch');
  }
  // smoke: placeholders preserved, no replacement char
  for (const loc of LOCALES) {
    for (const v of Object.values(D.NEW5_V[loc])) {
      if (v.includes('\uFFFD')) throw new Error('replacement char in NEW5 ' + loc);
    }
  }

  const lineOf = (key, val) => '    "' + key + '": ' + J(val) + ',';

  // ---------- 1. segment ops: 13 MID locales ----------
  for (const loc of D.MID_LOCALES) {
    const b = blockRange(sim, loc);
    const seg = sim.slice(b.start, b.end);
    const segLines = seg.split('\n');
    const i = segLines.findIndex((l) => l.startsWith('    "nav.inflatableVsHardboard": '));
    if (i < 0) throw new Error(loc + ' MID block not found');
    for (let j = 0; j < 13; j++) {
      if (segLines[i + j] !== EN_MID_LINES[j]) {
        throw new Error(loc + ' MID line ' + j + ' not EN-identical: ' + J(segLines[i + j]));
      }
    }
    // disambiguate against the 13 sibling EN blocks: extend up
    const w = uniqueWindow(sim, segLines, i, 1);
    // hmm: uniqueWindow starts from the single first line; we need the whole 13-line block in find
    let lo = i;
    let find = segLines.slice(lo, i + 13).join('\n');
    while (count(sim, find) !== 1) {
      if (lo <= 1) throw new Error(loc + ' cannot disambiguate MID block');
      lo--;
      find = segLines.slice(lo, i + 13).join('\n');
      if (i - lo > 80) throw new Error(loc + ' MID disambiguation window exceeded');
    }
    const anchor = segLines.slice(lo, i).join('\n');
    const translated = MID_KEYS.map((k) =>
      k === 'nav.pvcVsHypalon' ? lineOf(k, D.MID_EN[k]) : lineOf(k, D.MID_T[loc][k])
    );
    const five = D.NEW5.map((k) => lineOf(k, D.NEW5_V[loc][k]));
    const rep = [anchor, translated.join('\n'), five.join('\n')].join('\n');
    if (count(sim, rep) !== 0) throw new Error(loc + ' segment rep already on disk');
    ops.push({ f: CFG_F, find, rep });
    sim = sim.split(find).join(rep);
    notes.push('seg ' + loc + ': MID 12 keys + 5 new nav keys (anchor ' + (i - lo) + ' lines)');
  }

  // ---------- 2. insertion ops: en + healthy 7 ----------
  for (const loc of ['en', 'de', 'pt', 'fr', 'es', 'it', 'ja', 'ko']) {
    const b = blockRange(sim, loc);
    const seg = sim.slice(b.start, b.end);
    const segLines = seg.split('\n');
    const i = segLines.findIndex((l) => l.startsWith('    "nav.brandTeam": '));
    if (i < 0) throw new Error(loc + ' brandTeam line not found');
    if (!segLines[i + 1].startsWith('    "nav.buyerCenter": ')) {
      throw new Error(loc + ' line after brandTeam is not buyerCenter: ' + J(segLines[i + 1]));
    }
    const find = segLines[i] + '\n' + segLines[i + 1];
    if (count(sim, find) !== 1) throw new Error(loc + ' insertion find count != 1: ' + J(segLines[i]));
    const five = D.NEW5.map((k) => lineOf(k, D.NEW5_V[loc][k])).join('\n');
    const rep = segLines[i] + '\n' + five + '\n' + segLines[i + 1];
    if (count(sim, five) !== 0) throw new Error(loc + ' insertion lines already on disk');
    ops.push({ f: CFG_F, find, rep });
    sim = sim.split(find).join(rep);
    notes.push('ins ' + loc + ': 5 new nav keys after brandTeam');
  }

  // ---------- 3. resourcesJournal line ops (10) ----------
  for (const loc of Object.keys(D.RJ)) {
    const b = blockRange(sim, loc);
    const seg = sim.slice(b.start, b.end);
    const segLines = seg.split('\n');
    const target = lineOf('nav.resourcesJournal', D.RJ_EXPECT);
    const hits = [];
    for (let i = 0; i < segLines.length; i++) if (segLines[i] === target) hits.push(i);
    if (hits.length !== 1) throw new Error(loc + ' resourcesJournal line hits x' + hits.length);
    const idx = hits[0];
    const w = uniqueWindow(sim, segLines, idx, 1);
    const rep = segLines
      .slice(w.lo, w.hi + 1)
      .map((l, j) => (w.lo + j === idx ? lineOf('nav.resourcesJournal', D.RJ[loc]) : l))
      .join('\n');
    ops.push({ f: CFG_F, find: w.find, rep });
    sim = sim.split(w.find).join(rep);
    notes.push('rj ' + loc + ': Journal -> ' + D.RJ[loc]);
  }

  // ---------- 4. scattered line ops (16) ----------
  for (const e of D.SCATTERED) {
    const b = blockRange(sim, e.loc);
    const seg = sim.slice(b.start, b.end);
    const segLines = seg.split('\n');
    const target = lineOf(e.key, e.expect);
    const hits = [];
    for (let i = 0; i < segLines.length; i++) if (segLines[i] === target) hits.push(i);
    if (hits.length !== 1) throw new Error(e.loc + ' ' + e.key + ' line hits x' + hits.length);
    const idx = hits[0];
    const w = uniqueWindow(sim, segLines, idx, 1);
    const rep = segLines
      .slice(w.lo, w.hi + 1)
      .map((l, j) => (w.lo + j === idx ? lineOf(e.key, e.val) : l))
      .join('\n');
    ops.push({ f: CFG_F, find: w.find, rep });
    sim = sim.split(w.find).join(rep);
    notes.push('scat ' + e.loc + ' ' + e.key);
  }

  // ---------- terminal assertions ----------
  if (ops.length !== 47) throw new Error('expected 47 ops, got ' + ops.length);
  const term = await prettier.format(sim, JSON_OPTS);
  const term2 = await prettier.format(term, JSON_OPTS);
  if (term2 !== term) throw new Error('prettier output not stable');
  if (term !== sim) throw new Error('simulated patch NOT prettier-stable — inspect diff before proceeding');
  // engine-semantics replay onto raw must reproduce sim
  let replay = cfgRaw;
  for (const op of ops) {
    const n = count(replay, op.find);
    if (n !== 1) throw new Error('engine replay find x' + n + ': ' + J(op.find.slice(0, 80)));
    replay = replay.split(op.find).join(op.rep);
  }
  if (replay !== sim) throw new Error('engine replay !== sim');

  // ---------- emit ----------
  let src =
    '// shard 54 (GENERATED by _gen-ops-54.cjs — do not edit by hand)\n' +
    '// 47 ops / 287 changed/new key-lines: MID 12-key nav block x13 locales (156) + 5 missing nav\n' +
    '// keys x21 locales (105, incl. segment-append x13 + insertion x8) + resourcesJournal x10 +\n' +
    '// 16 scattered residues (da guides family, sv/da designPowerhouse, pt/tr price format, pt\n' +
    '// rel2label, ru dropstitch, de academy.guides, es geo.total corrupt, ar product.catalog garbage).\n' +
    '// find strings sliced from pre-patch disk (sequentially disambiguated); rep asserted\n' +
    '// prettier-stable (json) and engine-replay===sim byte-exact. See TECH.md L44.\n' +
    'module.exports = [\n';
  for (const op of ops) {
    src += '  {\n    f: ' + J(op.f) + ',\n    find: ' + J(op.find) + ',\n    rep: ' + J(op.rep) + ',\n  },\n';
  }
  src += '];\n';
  fs.writeFileSync(OPS_PATH, src, 'utf8');
  console.log('wrote ' + OPS_PATH + ' (' + ops.length + ' ops)');
  notes.forEach((n) => console.log('  - ' + n));
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
