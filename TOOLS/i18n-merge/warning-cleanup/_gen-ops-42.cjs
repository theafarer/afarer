// shard 42 generator: da UI block Czech contamination fix (nafukovací -> oppustelig family)
// Runs on PRE-PATCH state (post shard 41). Produces static ops module _ops-data-42.cjs.
// Per-key adjective form map (da grammar):
//   plural  -> oppustelige (plural / definite contexts)
//   common  -> oppustelig  (bare singular / headings, cf. existing 'Oppustelig SUP' L29771,
//                            'oppustelig vs. hård' L29551, 'oppustelig SUP-teknologi' L29548)
//   neuter  -> oppusteligt (with 'et' article, cf. 'et oppusteligt SUP-bræt' L29633)
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer';
const CFG = path.join(ROOT, 'src/data/site/i18n-config.json');
const OUT = path.join(ROOT, 'TOOLS/i18n-merge/warning-cleanup/_ops-data-42.cjs');

// key -> form
const FORMS = {
  // plural
  'people.designDesc': 'plural',
  'techspecs.inflatableDesc': 'plural',
  'techspecs.supDesc': 'plural',
  'home.gallery.sup.desc': 'plural',
  'home.preview.beginner.product1.desc': 'plural',
  'home.research.ceCertification.desc': 'plural',
  'home.research.dropStitch.desc': 'plural',
  'home.research.oemBuyer.desc': 'plural',
  'home.research.subtitle': 'plural',
  'compare.inflatableVsHard.aiBlock': 'plural',
  'compare.inflatableVsHard.desc': 'plural',
  'compare.inflatableVsHard.subtitle': 'plural',
  'learn.drop-stitch-core.description': 'plural',
  // common (bare singular / headings)
  'compare.inflatableVsHard': 'common',
  'compare.inflatableVsHard.col1Title': 'common',
  'compare.inflatableVsHard.cta': 'common',
  'compare.inflatableVsHard.heading': 'common',
  'compare.inflatableVsHard.headline': 'common',
  'compare.inflatableVsHard.isupShort': 'common',
  'compare.inflatableVsHard.short': 'common',
  'compare.inflatableVsHard.title': 'common',
  'learn.inflatable-technology.title': 'common',
  'learn.sup.description': 'common',
  // neuter (et ...)
  'compare.inflatableVsHard.verdictDesc': 'neuter',
  'faq.sup.travel': 'neuter',
};

const WORD = {
  plural: 'oppustelige',
  common: 'oppustelig',
  neuter: 'oppusteligt',
};

// keys whose full line also exists verbatim in the cs block (legit Czech) -> anchor to a
// da-unique non-target neighbor line to disambiguate ('prev' = line above, 'next' = line below)
const ANCHORS = {
  'compare.inflatableVsHard.col1Title': 'prev', // anchor: bestFor "Bedst til:" (da-unique)
  'compare.inflatableVsHard.isupShort': 'next', // anchor: perfDesc "Moderne iSUP..." (da-unique)
};

const RAW = fs.readFileSync(CFG, 'utf8');
const lines = RAW.split('\n');

// block delimit
const blocks = [];
lines.forEach((l, i) => {
  const m = l.match(/^  "([a-z]{2})": \{/);
  if (m) blocks.push({ key: m[1], start: i });
});
const range = (lang) => {
  const bi = blocks.findIndex((b) => b.key === lang);
  return [blocks[bi].start, bi + 1 < blocks.length ? blocks[bi + 1].start : lines.length];
};
const [daS, daE] = range('da');
const [csS, csE] = range('cs');

// assert: no nafukovaci outside cs+da blocks
let outside = 0;
lines.forEach((l, i) => {
  if (/nafukovac/i.test(l) && !((i >= csS && i < csE) || (i >= daS && i < daE))) {
    console.error('FATAL nafukovaci outside cs/da at L' + (i + 1) + ': ' + l.trim().slice(0, 120));
    outside++;
  }
});
if (outside) process.exit(1);

// collect contaminated da lines
const ops = [];
const seen = new Set();
for (let i = daS; i < daE; i++) {
  if (!/nafukovac/i.test(lines[i])) continue;
  const lm = lines[i].match(/^(\s*)"([^"]+)":\s*"(.*)",?\s*$/);
  if (!lm) {
    console.error('FATAL unparseable da line L' + (i + 1) + ': ' + lines[i]);
    process.exit(1);
  }
  const key = lm[2];
  if (!(key in FORMS)) {
    console.error('FATAL key not in form map: ' + key);
    process.exit(1);
  }
  const oldVal = lm[3];
  const hits = (oldVal.match(/nafukovací/gi) || []).length;
  if (hits !== 1) {
    console.error('FATAL expected 1 occurrence in ' + key + ', got ' + hits);
    process.exit(1);
  }
  let word = WORD[FORMS[key]];
  if (/^Nafukovací/.test(oldVal)) word = word[0].toUpperCase() + word.slice(1);
  const newVal = oldVal.replace(/nafukovací/i, word);
  const find0 = lines[i].replace(/\s+$/, '');
  const rep0 = lm[1] + '"' + key + '": "' + newVal + '",';
  let find = find0;
  let rep = rep0;
  if (key in ANCHORS) {
    const dir = ANCHORS[key];
    const j = dir === 'prev' ? i - 1 : i + 1;
    const neighbor = lines[j];
    if (!neighbor || /nafukovac/i.test(neighbor)) {
      console.error('FATAL anchor neighbor missing or is a target for ' + key);
      process.exit(1);
    }
    find = dir === 'prev' ? neighbor + '\n' + find0 : find0 + '\n' + neighbor;
    rep = dir === 'prev' ? neighbor + '\n' + rep0 : rep0 + '\n' + neighbor;
  }
  // find must be unique across the whole file
  const cnt = RAW.split(find).length - 1;
  if (cnt !== 1) {
    console.error('FATAL find count ' + cnt + ' for [' + key + ']: ' + find.slice(0, 140));
    process.exit(1);
  }
  // rep must be clean of Czech
  if (/[řěůžščďťň]|nafukovac/i.test(rep)) {
    console.error('FATAL Czech residue in rep [' + key + ']: ' + rep.slice(0, 140));
    process.exit(1);
  }
  ops.push({ f: 'src/data/site/i18n-config.json', find, rep });
  seen.add(key);
}
// completeness: every mapped key found
const missing = Object.keys(FORMS).filter((k) => !seen.has(k));
if (missing.length) {
  console.error('FATAL mapped keys not found in da block: ' + missing.join(', '));
  process.exit(1);
}
if (ops.length !== 25) {
  console.error('FATAL expected 25 ops, got ' + ops.length);
  process.exit(1);
}

// chain safety: no existing op ON THE SAME FILE references nafukovac or collides with new finds
// (ops on other files — e.g. legit cs pages yaml — are irrelevant to this target)
const opFiles = fs
  .readdirSync(path.dirname(OUT))
  .filter((f) => /^_ops-data-\d+\.cjs$/.test(f) && !f.includes('42'))
  .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));
const newFinds = new Set(ops.map((o) => o.find));
for (const f of opFiles) {
  const mod = require(path.join(path.dirname(OUT), f));
  for (const op of mod) {
    if (op.f !== 'src/data/site/i18n-config.json') continue;
    for (const s of [op.find, op.rep]) {
      if (/nafukovac/i.test(s)) {
        console.error('FATAL old op in ' + f + ' (i18n-config) references nafukovaci');
        process.exit(1);
      }
      if (newFinds.has(s)) {
        console.error('FATAL old op in ' + f + ' collides with new find');
        process.exit(1);
      }
    }
  }
}

// serialize
const header =
  '// shard 42 (GENERATED by _gen-ops-42.cjs — do not edit by hand)\n' +
  '// 25 ops: da UI dict Czech contamination fix — nafukovaci -> oppustelig family\n' +
  '// forms: 13 plural (oppustelige), 10 common (oppustelig), 2 neuter (oppusteligt)\n';
fs.writeFileSync(OUT, header + 'module.exports = ' + JSON.stringify(ops, null, 2) + ';\n');
console.log('OK wrote ' + ops.length + ' ops -> ' + path.basename(OUT));
console.log(
  'form tally: plural=' +
    ops.filter((o) => /oppustelige/.test(o.rep)).length +
    ' common=' +
    ops.filter((o) => /Oppustelig|oppustelig(?!e|t)/.test(o.rep)).length +
    ' neuter=' +
    ops.filter((o) => /oppusteligt/.test(o.rep)).length
);
