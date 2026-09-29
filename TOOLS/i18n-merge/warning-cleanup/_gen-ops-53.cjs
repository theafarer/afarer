// shard 53 generator — 404 dict residues (ja/ko full-EN blocks, ko explore garbage, en explore German)
// + it/fr brand-marine-expertise EN residue & mistranslated titles. (TECH.md L43 / 挂账⑩ follow-ups.)
//
// Damage (translation commit db928cfa aftermath):
//   - i18n-config.json: every locale EXCEPT ja/ko has translated 404.* keys; ja/ko carry 7 raw-EN keys
//     (title/description/label/heading/home/products/news) while their 404.explore IS translated.
//     ko 404.explore is garbage ("제품 칼테고리 사운탑바로운:"), en 404.explore is GERMAN
//     ("Produktkategorien erkunden:", same string as de) — dist/404.html (EN-root render) shows it live.
//   - it/brand-marine-expertise.yaml: 3 old-EN variant descriptions (materials items[2], manufacturing
//     items[3], testing items[5]) + 2 mistranslated titles (drop-stitch assembly, water testing).
//   - fr/brand-marine-expertise.yaml: materials items[2] description half-French (2nd sentence raw EN).
//
// 52 lesson kept: rep is NOT hand-serialized — generator builds simulated patched files, runs repo
// prettier (yaml: singleQuote/printWidth 120; json: parser json) over them, asserts terminal ===
// simulated (byte-exact), then asserts engine-style find→rep replay onto raw reproduces terminal.
// find strings are SLICED FROM DISK (404 blocks by locale-block boundaries, yaml lines by unique
// prefix) — never hand-transcribed.
//
// Run ONCE against pre-patch state: node _gen-ops-53.cjs   (delete output first, or --force)
// Output: _ops-data-53.cjs (9 ops = 3 dict block/line + 5 it bme + 1 fr bme; 22 changed keys).
const fs = require('fs');

const REPO = 'E:/github/afarer';
const prettier = require(REPO + '/node_modules/prettier');

const DIR = 'E:/github/afarer/TOOLS/i18n-merge/warning-cleanup';
const OPS_PATH = DIR + '/_ops-data-53.cjs';
if (fs.existsSync(OPS_PATH) && !process.argv.includes('--force')) {
  throw new Error('_ops-data-53.cjs already exists — delete it first (generator runs on pre-patch state only)');
}

const D = require('./_b53-data.cjs');

const YAML_OPTS = { parser: 'yaml', printWidth: 120, singleQuote: true, tabWidth: 2, useTabs: false };
const JSON_OPTS = { parser: 'json', tabWidth: 2, useTabs: false };
const count = (text, s) => text.split(s).length - 1;
const J = (s) => JSON.stringify(s);

const ops = [];
const notes = [];

async function main() {
  // ---------- 1. i18n-config.json ----------
  const CFG_F = 'src/data/site/i18n-config.json';
  const cfgRaw = fs.readFileSync(REPO + '/' + CFG_F, 'utf8');
  if ((await prettier.format(cfgRaw, JSON_OPTS)) !== cfgRaw) {
    throw new Error('i18n-config.json disk file is not prettier-clean');
  }

  // locale block boundaries (top-level 2-space keys)
  function blockOf(raw, loc, nextLoc) {
    const start = raw.indexOf('\n  "' + loc + '": {');
    const end = raw.indexOf('\n  "' + nextLoc + '": {');
    if (start < 0 || end < 0 || end <= start) throw new Error('block boundary fail: ' + loc);
    return { start, end };
  }
  // extract the 8 consecutive 404.* lines from a block
  function block404(raw, loc, nextLoc) {
    const b = blockOf(raw, loc, nextLoc);
    const seg = raw.slice(b.start, b.end);
    const lines = seg.split('\n');
    const i = lines.findIndex((l) => /^    "404\.title": /.test(l));
    if (i < 0) throw new Error('no 404.title in ' + loc);
    const eight = lines.slice(i, i + 8);
    if (!/^    "404\.explore": /.test(eight[7]))
      throw new Error('404 block not 8 lines in ' + loc + ': ' + J(eight[7]));
    return eight;
  }

  const en404 = block404(cfgRaw, 'en', 'de');
  const ja404 = block404(cfgRaw, 'ja', 'ko');
  const ko404 = block404(cfgRaw, 'ko', 'ru');

  // pre-patch assertions
  const EN_EXPECT = {
    '404.title': 'Page not found — {name}',
    '404.description':
      'Sorry, the page you are looking for has drifted out to sea. Use the links below to find your way back.',
    '404.label': 'Error',
    '404.heading': 'Lost at sea.',
    '404.home': 'Back to homepage',
    '404.products': 'Browse products',
    '404.news': 'Read the news',
    '404.explore': 'Produktkategorien erkunden:',
  };
  for (const line of en404) {
    const m = line.match(/^    "(404\.[a-z]+)": (.*),$/);
    if (!m || J(EN_EXPECT[m[1]]) !== m[2]) {
      throw new Error('en 404 disk mismatch: ' + J(line) + ' vs expected ' + J(EN_EXPECT[m && m[1]]));
    }
  }
  for (const [loc, eight] of [
    ['ja', ja404],
    ['ko', ko404],
  ]) {
    for (let i = 0; i < 7; i++) {
      if (eight[i] !== en404[i]) throw new Error(loc + ' 404 line ' + i + ' not EN-identical: ' + J(eight[i]));
    }
  }
  if (ja404[7] !== '    "404.explore": "製品カテゴリを探す：",') throw new Error('ja explore mismatch: ' + J(ja404[7]));
  if (ko404[7] !== '    "404.explore": "제품 칼테고리 사운탑바로운:",')
    throw new Error('ko explore mismatch: ' + J(ko404[7]));
  // residue translations must not already exist (as full dict lines — short values like エラー
  // legitimately occur under other keys)
  for (const [loc, dict] of [
    ['ja', D.ja404],
    ['ko', D.ko404],
  ]) {
    for (const [k, v] of Object.entries(dict)) {
      const line = '    "' + k + '": ' + J(v) + ',';
      if (cfgRaw.includes(line)) throw new Error(loc + ' translation line already on disk: ' + J(line));
    }
  }
  if (cfgRaw.includes('    "404.explore": ' + J(D.koExploreNew) + ','))
    throw new Error('ko explore translation already on disk');
  if (cfgRaw.includes('    "404.explore": ' + J(D.enExploreNew) + ','))
    throw new Error('en explore translation already on disk');

  // op: en explore German → EN (2-line find anchored on "Read the news", unique to en because
  // ja/ko explore lines differ)
  const opEn = {
    f: CFG_F,
    find: en404[6] + '\n' + en404[7],
    rep: en404[6] + '\n    "404.explore": ' + J(D.enExploreNew) + ',',
  };
  if (count(cfgRaw, opEn.find) !== 1) throw new Error('opEn find count != 1');

  // op: ja block (8 lines; explore line carried unchanged for uniqueness)
  const opJa = {
    f: CFG_F,
    find: ja404.join('\n'),
    rep: [
      '    "404.title": ' + J(D.ja404['404.title']) + ',',
      '    "404.description": ' + J(D.ja404['404.description']) + ',',
      '    "404.label": ' + J(D.ja404['404.label']) + ',',
      '    "404.heading": ' + J(D.ja404['404.heading']) + ',',
      '    "404.home": ' + J(D.ja404['404.home']) + ',',
      '    "404.products": ' + J(D.ja404['404.products']) + ',',
      '    "404.news": ' + J(D.ja404['404.news']) + ',',
      ja404[7],
    ].join('\n'),
  };
  if (count(cfgRaw, opJa.find) !== 1) throw new Error('opJa find count != 1');

  // op: ko block (8 lines; explore replaced — garbage fix)
  const opKo = {
    f: CFG_F,
    find: ko404.join('\n'),
    rep: [
      '    "404.title": ' + J(D.ko404['404.title']) + ',',
      '    "404.description": ' + J(D.ko404['404.description']) + ',',
      '    "404.label": ' + J(D.ko404['404.label']) + ',',
      '    "404.heading": ' + J(D.ko404['404.heading']) + ',',
      '    "404.home": ' + J(D.ko404['404.home']) + ',',
      '    "404.products": ' + J(D.ko404['404.products']) + ',',
      '    "404.news": ' + J(D.ko404['404.news']) + ',',
      '    "404.explore": ' + J(D.koExploreNew) + ',',
    ].join('\n'),
  };
  if (count(cfgRaw, opKo.find) !== 1) throw new Error('opKo find count != 1');

  // simulate + prettier(json) terminal assertion (48/49/50/52 pattern: stable format, sim===term)
  function replay(text, opList) {
    for (const op of opList) {
      if (count(text, op.find) !== 1) throw new Error('replay find count != 1: ' + J(op.find.slice(0, 60)));
      text = text.replace(op.find, op.rep);
    }
    return text;
  }
  const cfgSim = replay(cfgRaw, [opEn, opJa, opKo]);
  const cfgTerm = await prettier.format(cfgSim, JSON_OPTS);
  const cfgTerm2 = await prettier.format(cfgTerm, JSON_OPTS);
  if (cfgTerm2 !== cfgTerm) throw new Error('i18n-config.json prettier output not stable');
  if (cfgTerm !== cfgSim) {
    throw new Error('i18n-config.json simulated patch NOT prettier-stable — inspect diff before proceeding');
  }
  ops.push(opEn, opJa, opKo);
  notes.push(
    'cfg: en explore L714 (German→EN), ja block L9517-9524 (7 keys), ko block L11096-11103 (7 keys + explore garbage)'
  );

  // ---------- 2. it/fr brand-marine-expertise.yaml ----------
  async function yamlOps(relPath, pairs) {
    const raw = fs.readFileSync(REPO + '/' + relPath, 'utf8');
    if ((await prettier.format(raw, YAML_OPTS)) !== raw) {
      throw new Error(relPath + ': disk file is not prettier-clean');
    }
    const out = [];
    for (const [prefix, newLine] of pairs) {
      const exact = raw.split('\n').filter((l) => l.startsWith(prefix));
      if (exact.length !== 1) throw new Error(relPath + ' prefix not unique x' + exact.length + ': ' + J(prefix));
      const find = exact[0];
      if (count(raw, find) !== 1) throw new Error(relPath + ' find count != 1: ' + J(find.slice(0, 60)));
      if (count(raw, newLine) !== 0) throw new Error(relPath + ' rep already on disk: ' + J(newLine.slice(0, 60)));
      out.push({ f: relPath, find, rep: newLine });
    }
    // simulate + prettier(yaml) terminal assertion
    const sim = replay(raw, out);
    const term = await prettier.format(sim, YAML_OPTS);
    const term2 = await prettier.format(term, YAML_OPTS);
    if (term2 !== term) throw new Error(relPath + ': prettier output not stable');
    if (term !== sim) {
      throw new Error(relPath + ' simulated patch NOT prettier-stable — inspect diff before proceeding');
    }
    return out;
  }

  const itOps = await yamlOps('src/data/pages/it/brand-marine-expertise.yaml', D.itBme);
  const frOps = await yamlOps('src/data/pages/fr/brand-marine-expertise.yaml', [D.frBme]);
  ops.push(...itOps, ...frOps);
  notes.push('it bme: L29/L47/L53 EN descriptions + L43/L52 mistranslated titles');
  notes.push('fr bme: L29 second sentence EN→French');

  // ---------- 3. emit ops file ----------
  if (ops.length !== 9) throw new Error('expected 9 ops, got ' + ops.length);
  let src =
    '// shard 53 (GENERATED by _gen-ops-53.cjs — do not edit by hand)\n' +
    '// 9 ops / 22 changed keys: ja 404 x7, ko 404 x8 (incl. explore garbage), en 404.explore German x1,\n' +
    '// it bme x5 (3 old-EN descriptions + 2 mistranslated titles), fr bme x1 (half-translated description).\n' +
    '// find strings sliced from pre-patch disk; rep asserted prettier-stable (json/yaml) and\n' +
    '// engine-replay===terminal byte-exact. See TECH.md L43.\n' +
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
