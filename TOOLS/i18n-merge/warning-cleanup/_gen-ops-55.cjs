// shard 55 generator — page-layer EN residue clearing, dict part (TECH.md L45):
//   A) inserts ONE new UI-dict key (b2bSolutionsMatrix.coreNeed) after the b2bSolutionsMatrix.metaDesc
//      anchor line in each of the 21 locale blocks of src/data/site/i18n-config.json.
//      Anchor note: nav.b2bSolutionsMatrix (the natural neighbour) sits INSIDE shard 54's rep
//      strings — using it would break shard 54 op idempotency. metaDesc is untouched by all
//      earlier shards (verified: ops 46/54 reference only partners/resources/academy/
//      solutions.yachtTender metaDesc keys) and its value is distinct per locale.
//   B) replaces breadcrumb.home EN "Home" with the locale's nav.home value in the 16 non-cognate
//      locales (it/nl "Home" is the legal cognate; de/fr already localized; en untouched).
//      Root cause found in dist walk: PageLayout.astro:25-26 remaps every literal 'Home' crumb
//      to breadcrumb.home, and learn/index + learn/[slug] call t('breadcrumb.home') directly —
//      with the key holding EN, academy + the whole learn cluster rendered EN "Home" in 18
//      locales. find = breadcrumb.label line + breadcrumb.home line (label is localized and
//      unique per locale, keeping find globally unique).
//
// 54 lesson kept: ops are built SEQUENTIALLY against a simulated patch state, then
// prettier(json) terminal === sim is asserted, then an engine-semantics replay onto raw must
// reproduce sim byte-exact. Runs ONCE against pre-patch state (delete output or --force).
//
// Output: _ops-data-55.cjs (21 insertion ops + 16 replacement ops).
//   ANCHOR = b2bSolutionsMatrix.metaDesc line (see header note: nav.b2bSolutionsMatrix would
//   collide with shard 54 rep strings and break their idempotency).
const fs = require('fs');

const REPO = 'E:/github/afarer';
const prettier = require(REPO + '/node_modules/prettier');

const DIR = 'E:/github/afarer/TOOLS/i18n-merge/warning-cleanup';
const OPS_PATH = DIR + '/_ops-data-55.cjs';
if (fs.existsSync(OPS_PATH) && !process.argv.includes('--force')) {
  throw new Error('_ops-data-55.cjs already exists — delete it first (generator runs on pre-patch state only)');
}

const D = require('./_b55-data.cjs');

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

async function main() {
  const CFG_F = 'src/data/site/i18n-config.json';
  const cfgRaw = fs.readFileSync(REPO + '/' + CFG_F, 'utf8');
  if ((await prettier.format(cfgRaw, JSON_OPTS)) !== cfgRaw) {
    throw new Error('i18n-config.json disk file is not prettier-clean');
  }
  let sim = cfgRaw;

  // ---------- pre-patch assertions ----------
  if (cfgRaw.includes('"b2bSolutionsMatrix.coreNeed":')) {
    throw new Error('b2bSolutionsMatrix.coreNeed already on disk');
  }
  const parsed = JSON.parse(cfgRaw);
  for (const loc of LOCALES) {
    const v = parsed[loc] && parsed[loc]['b2bSolutionsMatrix.metaDesc'];
    if (typeof v !== 'string' || !v) throw new Error(loc + ' missing b2bSolutionsMatrix.metaDesc anchor value');
    if (typeof D.CORE_NEED[loc] !== 'string' || !D.CORE_NEED[loc]) {
      throw new Error(loc + ' missing CORE_NEED translation');
    }
    if (D.CORE_NEED[loc].includes('\uFFFD')) throw new Error('replacement char in CORE_NEED ' + loc);
  }
  // distinct anchor values across locales (keeps each find globally unique as-is)
  const vals = LOCALES.map((l) => parsed[l]['b2bSolutionsMatrix.metaDesc']);
  if (new Set(vals).size !== LOCALES.length) throw new Error('anchor values collide across locales');
  // no earlier shard op may contain the anchor line inside find or rep (idempotency guard);
  // breadcrumb.home/label are now shard-55 replace targets — earlier shards must not touch them
  const opFiles = fs.readdirSync(DIR).filter((f) => /^_ops-data-\d+\.cjs$/.test(f) && f !== '_ops-data-55.cjs');
  for (const f of opFiles) {
    const txt = fs.readFileSync(DIR + '/' + f, 'utf8');
    if (txt.includes('b2bSolutionsMatrix.metaDesc')) {
      throw new Error(f + ' references b2bSolutionsMatrix.metaDesc — anchor unsafe');
    }
    if (txt.includes('breadcrumb.home') || txt.includes('breadcrumb.label')) {
      throw new Error(f + ' references breadcrumb.home/label — replace target unsafe');
    }
  }

  const lineOf = (key, val) => '    "' + key + '": ' + J(val) + ',';

  // ---------- insertion ops: 21 locales ----------
  for (const loc of LOCALES) {
    const b = blockRange(sim, loc);
    const seg = sim.slice(b.start, b.end);
    const segLines = seg.split('\n');
    const target = lineOf('b2bSolutionsMatrix.metaDesc', parsed[loc]['b2bSolutionsMatrix.metaDesc']);
    const hits = [];
    for (let i = 0; i < segLines.length; i++) if (segLines[i] === target) hits.push(i);
    if (hits.length !== 1) throw new Error(loc + ' anchor line hits x' + hits.length);
    const find = target;
    if (count(sim, find) !== 1) throw new Error(loc + ' anchor find count != 1');
    const newline = lineOf('b2bSolutionsMatrix.coreNeed', D.CORE_NEED[loc]);
    const rep = find + '\n' + newline;
    if (count(sim, newline) !== 0) throw new Error(loc + ' new line already on disk');
    ops.push({ f: CFG_F, find, rep });
    sim = sim.split(find).join(rep);
    notes.push('ins ' + loc + ': b2bSolutionsMatrix.coreNeed after b2bSolutionsMatrix.metaDesc');
  }

  // ---------- replacement ops: breadcrumb.home x16 ----------
  // Pre-patch state: key holds EN "Home" in 16 non-cognate locales (it/nl "Home" is the legal
  // cognate; de/fr localized; en is the source). New value = that locale's nav.home.
  // find context = FOLLOWING language.choose line (breadcrumb.label is EN "Breadcrumb" in
  // ro/en/it/nl so it cannot anchor; language.choose is localized x21 with unique values).
  const BH_LOCALES = LOCALES.filter(
    (l) => l !== 'en' && l !== 'it' && l !== 'nl' && parsed[l]['breadcrumb.home'] === 'Home'
  );
  if (BH_LOCALES.length !== 16) {
    throw new Error('expected 16 breadcrumb.home EN locales, got ' + BH_LOCALES.length + ': ' + BH_LOCALES.join(','));
  }
  const chooseSeen = new Set();
  for (const loc of BH_LOCALES) {
    const nav = parsed[loc]['nav.home'];
    if (typeof nav !== 'string' || !nav || nav === 'Home') throw new Error(loc + ' nav.home unusable as BH value');
    const choose = parsed[loc]['language.choose'];
    if (typeof choose !== 'string' || !choose) throw new Error(loc + ' language.choose missing');
    if (chooseSeen.has(choose)) throw new Error('language.choose value collides: ' + loc);
    chooseSeen.add(choose);
    const find = lineOf('breadcrumb.home', 'Home') + '\n' + lineOf('language.choose', choose);
    const rep = lineOf('breadcrumb.home', nav) + '\n' + lineOf('language.choose', choose);
    if (count(sim, find) !== 1) throw new Error(loc + ' breadcrumb find x' + count(sim, find));
    if (count(sim, lineOf('breadcrumb.home', nav)) !== 0)
      throw new Error(loc + ' breadcrumb home line already on disk');
    ops.push({ f: CFG_F, find, rep });
    sim = sim.split(find).join(rep);
    notes.push('rep ' + loc + ': breadcrumb.home "Home" -> ' + J(nav));
  }

  // ---------- terminal assertions ----------
  if (ops.length !== 37) throw new Error('expected 37 ops, got ' + ops.length);
  JSON.parse(sim); // structural sanity before prettier
  const term = await prettier.format(sim, JSON_OPTS);
  const term2 = await prettier.format(term, JSON_OPTS);
  if (term2 !== term) throw new Error('prettier output not stable');
  if (term !== sim) throw new Error('simulated patch NOT prettier-stable — inspect diff before proceeding');
  let replay = cfgRaw;
  for (const op of ops) {
    const n = count(replay, op.find);
    if (n !== 1) throw new Error('engine replay find x' + n + ': ' + J(op.find.slice(0, 80)));
    replay = replay.split(op.find).join(op.rep);
  }
  if (replay !== sim) throw new Error('engine replay !== sim');

  // ---------- emit ----------
  let src =
    '// shard 55 (GENERATED by _gen-ops-55.cjs — do not edit by hand)\n' +
    '// 21 insertion ops: b2bSolutionsMatrix.coreNeed x21 locales (B2B matrix table header; page\n' +
    '// wired to t() in the same shard). Anchor: b2bSolutionsMatrix.metaDesc line\n' +
    '// (nav.b2bSolutionsMatrix would collide with shard 54 rep strings).\n' +
    '// 16 replacement ops: breadcrumb.home EN "Home" -> locale nav.home value (PageLayout remaps\n' +
    '// literal Home crumbs to this key; learn cluster reads it directly). find = breadcrumb.label\n' +
    '// + breadcrumb.home two-line context (label localized => find unique).\n' +
    '// find strings sliced from pre-patch disk; rep asserted prettier-stable (json) and\n' +
    '// engine-replay===sim byte-exact. See TECH.md L45.\n' +
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
