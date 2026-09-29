// shard 51 generator — line-level ops (挂账⑧ 收尾四项, TECH.md L41).
//
// Scope (4 file families, 142 line ops total):
//   A. solutions-retail-partners: 5 keys x 19 locales (95 ops) — meta.description,
//      hero.title, hero.subtitle, cta.title, cta.subtitle all hold pre-repo v0 EN.
//   B. brand-marine-expertise: expertise_materials.items[0].description x 19 (19 ops)
//      — v0 'recreational boats, SUP boards, and SUPs' tail.
//   C. about: brand_hub_subtitle x 19 (19 ops) — 13 locales hold old EN ('marine
//      engineering'), 6 hold v0 marine-semantic translations (de/es/it/nl/pl/pt -> term
//      swap only); fr is v1 and OUT OF SCOPE.
//   D. solutions-paddle-clubs: cta.actions[0].text 'Club Fleet' x8 (cs/da/el/fi/it/ja/nl/th)
//      + fi cta.actions[1].text mistranslation fix ('seurakunnan'=parish -> 'kerhon'=club)
//      (9 ops).
//
// Op shape: ONE line op per target (unlike 50's block ops). find = the full raw line
// (incl. trailing newline) containing the pre-patch value; rep = the prettier-terminal
// line. Per file: all targets are provisionally replaced, the FULL simulated file is
// prettier-formatted (repo prettier, yaml singleQuote — 47c lesson), terminal lines are
// extracted as rep, and the sequential engine application must equal the prettier output
// byte-for-byte.
//
// Assertions: pre-patch doc values equal the expected old constants (v0 EN uniform /
// hubOld translations / clubOld); every fresh string differs from its EN root counterpart
// (EN root yaml = SSOT) and from the old value; target lines unique in raw and terminal;
// terminal doc deep-equals the expected structured doc; earlier shards' ops on these files
// (retail: 32/34/47, bme: 34/39, paddle-clubs: 23/27/28/32/35/47/49, about: none) must
// classify as already-applied on current disk AND on the shard-51 terminal (engine
// three-way rules, _patch-warnings.cjs L71-78).
//
// Run ONCE against pre-patch state: node _gen-ops-51.cjs   (delete output before re-running)
// Output: _ops-data-51.cjs (142 ops). See TECH.md L41.
const fs = require('fs');

const REPO = 'E:/github/afarer';
const DIR = 'E:/github/afarer/TOOLS/i18n-merge/warning-cleanup';
const yaml = require(REPO + '/node_modules/js-yaml');
const prettier = require(REPO + '/node_modules/prettier');

const OPS_PATH = DIR + '/_ops-data-51.cjs';
if (fs.existsSync(OPS_PATH) && !process.argv.includes('--force')) {
  throw new Error('_ops-data-51.cjs already exists — delete it first (generator runs on pre-patch state only)');
}

const DATA = require('./_b51-data.cjs');

const L19 = [
  'de',
  'es',
  'it',
  'pt',
  'nl',
  'da',
  'sv',
  'no',
  'fi',
  'cs',
  'pl',
  'ru',
  'tr',
  'ar',
  'el',
  'ro',
  'ja',
  'ko',
  'th',
];
const CLUB = ['cs', 'da', 'el', 'fi', 'it', 'ja', 'nl', 'th'];
const RKEYS = ['metaDesc', 'heroTitle', 'heroSubtitle', 'ctaTitle', 'ctaSubtitle'];

// pre-patch v0 EN constants (recon-verified uniform across the 19 locales, _s51-dump.cjs)
const V0_RETAIL = {
  metaDesc:
    'Become an Afarer retail partner. Full product line, professional marketing materials, dropshipping options, and competitive margins for SUP retailers.',
  heroTitle: 'Become An Afarer<br />Retail Partner',
  heroSubtitle:
    'Sell the fastest-growing SUP brand in your market. Full product line, professional marketing materials, dropshipping options, and margins that make sense.',
  ctaTitle: 'Ready to become a partner?',
  ctaSubtitle: 'Apply for partnership or download our retail catalog.',
};
const V0_BME =
  '1100 denier PVC fabric — our most versatile material. UV-stabilized, abrasion-resistant, and REACH compliant. Ideal for recreational boats, SUP boards, and SUPs where weight and cost efficiency matter.';
const EN_HUB_OLD =
  'Dive deeper into our marine engineering expertise, global presence, and the principles that drive us.';
const V0_FI_GUIDE = 'Lataa seurakunnan ohje';

const PRETTIER_OPTS = { parser: 'yaml', printWidth: 120, singleQuote: true, tabWidth: 2, useTabs: false };
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// YAML scalar serializer — only needs to parse; the prettier pass computes the terminal form
function v(s) {
  if (typeof s !== 'string' || s.length === 0) throw new Error('empty/non-string scalar');
  if (s.includes("'")) return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  if (/^[\s!\-&*?|>%@`",\[\]{}#]|:\s|\s#|\s$|:#?$/.test(s)) return "'" + s + "'";
  return s;
}

// locate the single raw line holding value; return {line, provisional, indentKey}
function lineOp(raw, label, oldV, newV) {
  const c = raw.split(oldV).length - 1;
  if (c !== 1) throw new Error(`${label}: old value count ${c} in raw`);
  const idx = raw.indexOf(oldV);
  const ls = raw.lastIndexOf('\n', idx) + 1;
  const le = raw.indexOf('\n', idx);
  if (le < 0) throw new Error(`${label}: target line has no trailing newline`);
  const line = raw.slice(ls, le + 1);
  const prefix = raw.slice(ls, idx);
  const m = prefix.match(/^(\s*(?:- )?[A-Za-z_][\w-]*:\s*)(['"]?)$/);
  if (!m) throw new Error(`${label}: unexpected line prefix ${JSON.stringify(prefix)}`);
  const tail = raw.slice(idx + oldV.length, le);
  if (tail !== m[2]) throw new Error(`${label}: unexpected quoting tail ${JSON.stringify(tail)}`);
  if (raw.split(line).length - 1 !== 1) throw new Error(`${label}: target line not unique in raw`);
  return { line, provisional: m[1] + v(newV) + '\n', indentKey: m[1] };
}

// extract the terminal line holding value from the prettier output
function terminalLine(pretty, label, value) {
  const c = pretty.split(value).length - 1;
  if (c !== 1) throw new Error(`${label}: fresh value count ${c} in prettier output`);
  const idx = pretty.indexOf(value);
  const ls = pretty.lastIndexOf('\n', idx) + 1;
  const le = pretty.indexOf('\n', idx);
  if (le < 0) throw new Error(`${label}: terminal line has no trailing newline`);
  const line = pretty.slice(ls, le + 1);
  if (pretty.split(line).length - 1 !== 1) throw new Error(`${label}: terminal line not unique`);
  return { line, prefix: pretty.slice(ls, idx) };
}

async function main() {
  // ---- EN root SSOTs ----
  const enRetail = yaml.load(fs.readFileSync(REPO + '/src/data/pages/solutions-retail-partners.yaml', 'utf8'));
  const enBme = yaml.load(fs.readFileSync(REPO + '/src/data/pages/brand-marine-expertise.yaml', 'utf8'));
  const enAbout = yaml.load(fs.readFileSync(REPO + '/src/data/pages/about.yaml', 'utf8'));
  const enClubs = yaml.load(fs.readFileSync(REPO + '/src/data/pages/solutions-paddle-clubs.yaml', 'utf8'));
  const EN = {
    metaDesc: enRetail.meta.description,
    heroTitle: enRetail.hero.title,
    heroSubtitle: enRetail.hero.subtitle,
    ctaTitle: enRetail.cta.title,
    ctaSubtitle: enRetail.cta.subtitle,
    bme: enBme.expertise_materials.items[0].description,
    hub: enAbout.brand_hub_subtitle,
    club: enClubs.cta.actions[0].text,
    clubGuide: enClubs.cta.actions[1].text,
  };
  if (EN.hub === EN_HUB_OLD) throw new Error('EN about root still holds the old hub subtitle — SSOT broken');

  // ---- build the file job list: rel -> [{label, old, fresh, enKey, docPath, valuePath}] ----
  const jobs = new Map();
  const addJob = (rel, t) => {
    if (!jobs.has(rel)) jobs.set(rel, []);
    jobs.get(rel).push(t);
  };
  for (const loc of L19) {
    const rel = 'src/data/pages/' + loc + '/solutions-retail-partners.yaml';
    addJob(rel, {
      label: loc + '.metaDesc',
      old: V0_RETAIL.metaDesc,
      fresh: DATA.retail[loc].metaDesc,
      enKey: 'metaDesc',
      kind: 'retail',
    });
    addJob(rel, {
      label: loc + '.heroTitle',
      old: V0_RETAIL.heroTitle,
      fresh: DATA.retail[loc].heroTitle,
      enKey: 'heroTitle',
      kind: 'retail',
    });
    addJob(rel, {
      label: loc + '.heroSubtitle',
      old: V0_RETAIL.heroSubtitle,
      fresh: DATA.retail[loc].heroSubtitle,
      enKey: 'heroSubtitle',
      kind: 'retail',
    });
    addJob(rel, {
      label: loc + '.ctaTitle',
      old: V0_RETAIL.ctaTitle,
      fresh: DATA.retail[loc].ctaTitle,
      enKey: 'ctaTitle',
      kind: 'retail',
    });
    addJob(rel, {
      label: loc + '.ctaSubtitle',
      old: V0_RETAIL.ctaSubtitle,
      fresh: DATA.retail[loc].ctaSubtitle,
      enKey: 'ctaSubtitle',
      kind: 'retail',
    });
  }
  for (const loc of L19) {
    addJob('src/data/pages/' + loc + '/brand-marine-expertise.yaml', {
      label: loc + '.bme',
      old: V0_BME,
      fresh: DATA.bme[loc],
      enKey: 'bme',
      kind: 'bme',
    });
    const hubOld = DATA.hubOld[loc] || EN_HUB_OLD;
    addJob('src/data/pages/' + loc + '/about.yaml', {
      label: loc + '.hub',
      old: hubOld,
      fresh: DATA.hub[loc],
      enKey: 'hub',
      kind: 'hub',
    });
  }
  for (const loc of CLUB) {
    addJob('src/data/pages/' + loc + '/solutions-paddle-clubs.yaml', {
      label: loc + '.club',
      old: DATA.clubOld[loc],
      fresh: DATA.club[loc],
      enKey: 'club',
      kind: 'club',
    });
  }
  addJob('src/data/pages/fi/solutions-paddle-clubs.yaml', {
    label: 'fi.clubGuide',
    old: V0_FI_GUIDE,
    fresh: DATA.fiGuide,
    enKey: 'clubGuide',
    kind: 'clubGuide',
  });
  const RELS = Array.from(jobs.keys());
  if (RELS.length !== 19 * 3 + 8) throw new Error('file count ' + RELS.length); // 57 retail/bme/about + 8 clubs (fi shared)

  // ---- chain safety — earlier shards' ops on these exact files ----
  // (retail: 32/34/47, bme: 34/39, paddle-clubs: 23/27/28/32/35/47/49, about: none)
  const REL_SET = new Set(RELS);
  const EARLIER = {};
  for (const name of fs.readdirSync(DIR).sort()) {
    if (!/^_ops-data-\d+\.cjs$/.test(name) || name === '_ops-data-51.cjs') continue;
    for (const o of require(DIR + '/' + name)) {
      if (!REL_SET.has(o.f)) continue;
      (EARLIER[o.f] = EARLIER[o.f] || []).push({ name, find: o.find, rep: o.rep, n: o.n || 1 });
    }
  }
  let chainChecked = 0;
  const engineClass = (text, p) => {
    const fc = text.split(p.find).length - 1;
    const rc = text.split(p.rep).length - 1;
    if (fc === 0 && rc >= p.n) return 'already';
    if (fc === p.n && rc >= p.n && p.rep.includes(p.find)) return 'already';
    if (fc === p.n) return 'apply';
    return 'err';
  };
  const chainCheck = (rel, raw, pretty) => {
    for (const p of EARLIER[rel] || []) {
      const c0 = engineClass(raw, p);
      if (c0 !== 'already') throw new Error(`${rel}: ${p.name} not applied on disk (${c0}) — pre-state broken`);
      const c1 = engineClass(pretty, p);
      if (c1 !== 'already') throw new Error(`${rel}: shard-51 terminal breaks ${p.name} idempotency (${c1})`);
      chainChecked++;
    }
  };

  const ops = [];
  for (const rel of RELS) {
    const targets = jobs.get(rel);
    const raw = fs.readFileSync(REPO + '/' + rel, 'utf8');
    if ((await prettier.format(raw, PRETTIER_OPTS)) !== raw) throw new Error(`${rel}: disk file is not prettier-clean`);
    const doc = yaml.load(raw);

    // per-target: pre-patch doc assertion + fresh sanity + line op
    const fileOps = targets.map((t) => {
      const cur = readCurrent(doc, t);
      if (cur !== t.old)
        throw new Error(`${t.label}: pre-patch doc value mismatch: ${JSON.stringify(String(cur).slice(0, 80))}`);
      if (t.fresh === t.old) throw new Error(`${t.label}: fresh equals old`);
      if (t.fresh === EN[t.enKey]) throw new Error(`${t.label}: fresh equals EN SSOT`);
      if (raw.includes(t.fresh)) throw new Error(`${t.label}: fresh already on disk`);
      return { t, ...lineOp(raw, t.label, t.old, t.fresh) };
    });

    // simulate all replacements, prettify, extract terminal lines
    let sim = raw;
    for (const o of fileOps) sim = sim.replace(o.line, () => o.provisional);
    const pretty = await prettier.format(sim, PRETTIER_OPTS);
    const pretty2 = await prettier.format(pretty, PRETTIER_OPTS);
    if (pretty !== pretty2) throw new Error(`${rel}: prettier output not stable`);
    for (const o of fileOps) {
      const tl = terminalLine(pretty, o.t.label, o.t.fresh);
      if (!tl.prefix.startsWith(o.indentKey))
        throw new Error(`${o.t.label}: terminal prefix changed: ${JSON.stringify(tl.prefix)}`);
      o.rep = tl.line;
    }

    // engine mirror: sequential unique-line replacement must equal the prettier terminal
    let engine = raw;
    for (const o of fileOps) {
      if (engine.split(o.line).length - 1 !== 1) throw new Error(`${o.t.label}: find not unique at engine stage`);
      engine = engine.replace(o.line, () => o.rep);
    }
    if (engine !== pretty) throw new Error(`${rel}: engine application != prettier terminal`);

    // terminal doc deep-equals the expected structured doc
    const expected = structuredClone(doc);
    for (const o of fileOps) writeExpected(expected, o.t, o.t.fresh);
    const doc2 = yaml.load(pretty);
    if (!eq(doc2, expected)) throw new Error(`${rel}: terminal doc mismatch`);

    chainCheck(rel, raw, pretty);
    for (const o of fileOps) ops.push({ f: rel, find: o.line, rep: o.rep, n: 1 });
    console.log(`${rel}: ${fileOps.length} line ops`);
  }
  console.log(`chain scan: ${chainChecked} earlier ops on these file families stay applied (no re-introduction)`);
  if (ops.length !== 142) throw new Error('op count ' + ops.length);

  // serialize ops file (prettier-compatible singleQuote CJS, same q() as 47c/48/49/50)
  function q(s) {
    if (!s.includes("'") && !s.includes('\n')) return "'" + s + "'";
    return (
      '"' +
      s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r') +
      '"'
    );
  }
  const body = ops
    .map((o) => `  {\n    f: ${q(o.f)},\n    find: ${q(o.find)},\n    rep: ${q(o.rep)},\n    n: 1,\n  },`)
    .join('\n');
  const header = [
    '// shard 51 (GENERATED by _gen-ops-51.cjs — do not edit by hand)',
    '// 142 line ops — 挂账⑧ 收尾四项:',
    '//   retail-partners 5 keys x19 (95), brand-marine-expertise mat0desc x19 (19),',
    '//   about brand_hub_subtitle x19 (13 old-EN + 6 marine->SUP term swaps),',
    '//   paddle-clubs cta.actions[0].text x8 + fi actions[1] mistranslation fix (9).',
    '// find = full raw line (pre-patch v0 state); rep = prettier-terminal line (47c lesson).',
    '// Fresh strings from _b51-data.cjs. See TECH.md L41.',
  ].join('\n');
  fs.writeFileSync(OPS_PATH, header + '\nmodule.exports = [\n' + body + '\n];\n');

  // post-write verification
  delete require.cache[require.resolve(OPS_PATH)];
  const ops2 = require(OPS_PATH);
  if (ops2.length !== 142) throw new Error('post-write: op count ' + ops2.length);
  for (let i = 0; i < ops2.length; i++) {
    const o = ops2[i];
    if (!REL_SET.has(o.f)) throw new Error('post-write: unexpected file ' + o.f);
    const disk = fs.readFileSync(REPO + '/' + o.f, 'utf8');
    if (disk.split(o.find).length - 1 !== 1) throw new Error('post-write: find not on disk: ' + o.f + ' #' + i);
  }
  console.log('\n51 OK: wrote 142 ops to _ops-data-51.cjs');
}

// current doc value for each target kind
function readCurrent(doc, t) {
  switch (t.kind) {
    case 'retail':
      return {
        metaDesc: doc.meta.description,
        heroTitle: doc.hero.title,
        heroSubtitle: doc.hero.subtitle,
        ctaTitle: doc.cta.title,
        ctaSubtitle: doc.cta.subtitle,
      }[t.enKey];
    case 'bme':
      return doc.expertise_materials.items[0].description;
    case 'hub':
      return doc.brand_hub_subtitle;
    case 'club':
      return doc.cta.actions[0].text;
    case 'clubGuide':
      return doc.cta.actions[1].text;
    default:
      throw new Error('bad kind ' + t.kind);
  }
}

function writeExpected(doc, t, value) {
  switch (t.kind) {
    case 'retail':
      if (t.enKey === 'metaDesc') doc.meta.description = value;
      else if (t.enKey === 'heroTitle') doc.hero.title = value;
      else if (t.enKey === 'heroSubtitle') doc.hero.subtitle = value;
      else if (t.enKey === 'ctaTitle') doc.cta.title = value;
      else doc.cta.subtitle = value;
      return;
    case 'bme':
      doc.expertise_materials.items[0].description = value;
      return;
    case 'hub':
      doc.brand_hub_subtitle = value;
      return;
    case 'club':
      doc.cta.actions[0].text = value;
      return;
    case 'clubGuide':
      doc.cta.actions[1].text = value;
      return;
    default:
      throw new Error('bad kind ' + t.kind);
  }
}

main().catch((e) => {
  console.error('GEN FAIL:', e.message);
  process.exit(1);
});
