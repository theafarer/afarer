// shard 49 generator — solutions-paddle-clubs EN drift resync (TECH.md L39 / 挂账⑧).
//
// EN root was rewritten (v0 -> v1): new meta/hero copy and a redistributed packages features
// block (6/7/7, launch-guide line at pkg0.f4, CE line last, pkg1 staff-training online at f5).
// 19 locales still hold the pre-repo v0 state: 17 old-EN keys + 5 untranslated EN names
// (packages + training names). fr was translated at rewrite time except hero.subtitle (one line).
//
// Op shape: TWO block ops per locale —
//   op1: file head (pos 0, file starts with `meta:`) .. before `benefits:` — meta + hero.
//   op2: `packages:` .. before `features:` — packages + training blocks.
// rep is NOT hand-serialized: the generator emits an initial block, prettier-formats the FULL
// simulated patched file (repo prettier, yaml singleQuote — 47c lesson), and extracts the
// prettier-terminal spans as rep. The engine result (find1->rep1, find2->rep2 applied in order)
// must equal the prettier terminal byte-for-byte, so the patched file stays prettier-clean.
//
// Fresh strings (22 per locale + p2f0 for 7 locales that lost the "+") come from _b49-data.cjs;
// everything else is REUSED from each locale's own translated disk content, extracted by
// structure: launch guide (pkg0.f3|f4 per launchGuideFrom, default f4), CE line (pkg0.f5 ===
// pkg1.f6 === pkg2.f6), replacement-parts program (pkg1.f3 -> new f4), staff training online
// (pkg1.f5 -> new f5), pkg2.f0 for 12 locales (p2f3/f4/f5 stay in place), training features,
// package/training titles+subtitles, cta_text x3, hero.image.src/alt.
//
// Assertions: pre-patch v0 constants (17 old-EN keys + 5 EN names) uniform across 19 locales;
// every fresh string differs from its EN root counterpart (read from EN root yaml = SSOT);
// every reused string differs from its EN counterpart; image.src === EN; terminal doc verified
// structurally (meta/hero exact, packages 6/7/7 + popular only on pkg1, training 5/6 features,
// benefits/features/cta byte-untouched). fr = 1 line op with revert check.
//
// Run ONCE against pre-patch state: node _gen-ops-49.cjs   (delete output before re-running)
// Output: _ops-data-49.cjs (39 ops = 19x2 block ops + 1 fr line op). See TECH.md L39.
const fs = require('fs');

const REPO = 'E:/github/afarer';
const DIR = 'E:/github/afarer/TOOLS/i18n-merge/warning-cleanup';
const yaml = require(REPO + '/node_modules/js-yaml');
const prettier = require(REPO + '/node_modules/prettier');

const OPS_PATH = DIR + '/_ops-data-49.cjs';
if (fs.existsSync(OPS_PATH) && !process.argv.includes('--force')) {
  throw new Error('_ops-data-49.cjs already exists — delete it first (generator runs on pre-patch state only)');
}

const DATA = require('./_b49-data.cjs');

const LOCALES = [
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
const FRESH_P2F0 = ['de', 'es', 'it', 'nl', 'pl', 'pt', 'ru'];
const BASE_KEYS = [
  'metaTitle',
  'metaDesc',
  'heroTagline',
  'heroTitle',
  'heroSubtitle',
  'p0Name',
  'p0Tag',
  'p1Name',
  'p1Tag',
  'p2Name',
  'p2Tag',
  'p0f0',
  'p0f1',
  'p0f2',
  'p0f3',
  'p1f0',
  'p1f1',
  'p1f2',
  'p1f3',
  'p2f1',
  'p2f2',
  'tr0Name',
  'tr1Name',
];

// pre-patch v0 EN constants (probe-verified uniform across the 19 locales, _s49-dump.cjs)
const V0 = {
  metaTitle: 'Paddle Club Fleet Solutions | {SITE}',
  metaDesc:
    'Complete SUP fleet programs for paddle clubs. Start-up packages, professional fleets, competition boards, custom branding, and replacement parts support.',
  heroTagline: 'Paddle Clubs',
  heroTitle: 'Build Your Paddle Club<br />With Afarer',
  heroSubtitle:
    'Everything you need to launch, run, and grow a successful paddle club — from equipment to training to replacement parts.',
  p0Name: 'Start-Up Package',
  p0Tag: 'Best for: New clubs, up to 30 members',
  p1Name: 'Professional Fleet',
  p1Tag: 'Best for: Established clubs, 50-100 members',
  p2Name: 'Competition Fleet',
  p2Tag: 'Best for: Racing clubs, events, competitions',
  p0f0: '10 SUP boards + paddles + vests',
  p0f1: '2 pumps + 1 repair kit',
  p0f2: 'Club branding on boards',
  p1f0: '30 SUP boards + paddles + vests',
  p1f1: '5 pumps + 2 repair kits',
  p1f2: 'Custom club colors + logo',
  p1f4: 'Staff training session',
  p2f1: 'Full accessory set',
  p2f2: 'Event support kit',
  tr0Name: 'Instructor Starter',
  tr1Name: 'School Full Set',
};

const PRETTIER_OPTS = { parser: 'yaml', printWidth: 120, singleQuote: true, tabWidth: 2, useTabs: false };
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const keys = (o) => JSON.stringify(Object.keys(o));

// spans: file starts with `meta:` (no leading newline); blocks end right before the next marker
function spans(text) {
  if (!text.startsWith('meta:\n')) throw new Error('file does not start with meta:\\n');
  const c1 = text.split('\nbenefits:\n').length - 1;
  const c2 = text.split('\npackages:\n').length - 1;
  const c3 = text.split('\nfeatures:\n').length - 1;
  if (c1 !== 1 || c2 !== 1 || c3 !== 1) throw new Error(`span markers not unique (${c1},${c2},${c3})`);
  return {
    e1: text.indexOf('\nbenefits:\n') + 1, // find1 = raw.slice(0, e1)
    s2: text.indexOf('\npackages:\n') + 1,
    e2: text.indexOf('\nfeatures:\n') + 1, // find2 = raw.slice(s2, e2)
  };
}

// initial serialization — only needs to parse; the prettier pass computes the terminal form
function v(s) {
  if (typeof s !== 'string' || s.length === 0) throw new Error('empty/non-string scalar');
  if (s.includes("'")) return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  if (/^[\s!\-&*?|>%@`",\[\]{}#]|:\s|\s#|\s$|:#?$/.test(s)) return "'" + s + "'";
  return s;
}

function emit1(d, r) {
  return [
    'meta:',
    '  title: ' + v(d.metaTitle),
    '  description: ' + v(d.metaDesc),
    'hero:',
    '  tagline: ' + v(d.heroTagline),
    '  title: ' + v(d.heroTitle),
    '  subtitle: ' + v(d.heroSubtitle),
    '  image:',
    '    src: ' + v(r.imgSrc),
    '    alt: ' + v(r.imgAlt),
    '',
  ].join('\n');
}

function emit2(d, r) {
  const L = ['packages:', '  title: ' + v(r.pkgTitle), '  subtitle: ' + v(r.pkgSubtitle), '  items:'];
  const item = (name, tagline, feats, cta, popular) => {
    L.push('    - name: ' + v(name), '      tagline: ' + v(tagline), '      features:');
    feats.forEach((x) => L.push('        - ' + v(x)));
    if (popular) L.push('      popular: true');
    L.push('      cta_text: ' + v(cta));
  };
  item(d.p0Name, d.p0Tag, [d.p0f0, d.p0f1, d.p0f2, d.p0f3, r.launchGuide, r.ceAll], r.cta0, false);
  item(d.p1Name, d.p1Tag, [d.p1f0, d.p1f1, d.p1f2, d.p1f3, r.p1f4, r.p1f5, r.ceAll], r.cta1, true);
  item(d.p2Name, d.p2Tag, [r.p2f0, d.p2f1, d.p2f2, r.p2f3, r.p2f4, r.p2f5, r.ceAll], r.cta2, false);
  L.push('training:', '  title: ' + v(r.trTitle), '  subtitle: ' + v(r.trSubtitle), '  items:');
  L.push('    - name: ' + v(d.tr0Name), '      features:');
  r.tr0.forEach((x) => L.push('        - ' + v(x)));
  L.push('    - name: ' + v(d.tr1Name), '      features:');
  r.tr1.forEach((x) => L.push('        - ' + v(x)));
  return L.join('\n') + '\n';
}

// pre-patch structural assertions + reuse extraction from the locale's own translated content
function extractReuse(doc, loc, d, fresh) {
  if (keys(doc) !== keys({ meta: 0, hero: 0, benefits: 0, packages: 0, training: 0, features: 0, cta: 0 }))
    throw new Error(`${loc}: top-level sections unexpected: ${keys(doc)}`);
  if (keys(doc.meta) !== keys({ title: 0, description: 0 })) throw new Error(`${loc}: meta keys`);
  if (doc.meta.title !== V0.metaTitle || doc.meta.description !== V0.metaDesc)
    throw new Error(`${loc}: meta v0 mismatch`);
  const h = doc.hero;
  if (keys(h) !== keys({ tagline: 0, title: 0, subtitle: 0, image: 0 })) throw new Error(`${loc}: hero keys`);
  if (h.tagline !== V0.heroTagline || h.title !== V0.heroTitle || h.subtitle !== V0.heroSubtitle)
    throw new Error(`${loc}: hero v0 mismatch`);
  if (keys(h.image) !== keys({ src: 0, alt: 0 })) throw new Error(`${loc}: hero.image keys`);

  const pk = doc.packages;
  if (keys(pk) !== keys({ title: 0, subtitle: 0, items: 0 }) || pk.items.length !== 3)
    throw new Error(`${loc}: packages shape`);
  const p0 = pk.items[0];
  const p1 = pk.items[1];
  const p2 = pk.items[2];
  if (keys(p0) !== keys({ name: 0, tagline: 0, features: 0, cta_text: 0 })) throw new Error(`${loc}: p0 keys`);
  if (keys(p1) !== keys({ name: 0, tagline: 0, features: 0, popular: 0, cta_text: 0 }) || p1.popular !== true)
    throw new Error(`${loc}: p1 keys/popular`);
  if (keys(p2) !== keys({ name: 0, tagline: 0, features: 0, cta_text: 0 })) throw new Error(`${loc}: p2 keys`);
  if (p0.features.length !== 6 || p1.features.length !== 7 || p2.features.length !== 7)
    throw new Error(`${loc}: feature counts ${p0.features.length}/${p1.features.length}/${p2.features.length}`);

  const oldEn = [
    [p0.name, V0.p0Name],
    [p0.tagline, V0.p0Tag],
    [p1.name, V0.p1Name],
    [p1.tagline, V0.p1Tag],
    [p2.name, V0.p2Name],
    [p2.tagline, V0.p2Tag],
    [p0.features[0], V0.p0f0],
    [p0.features[1], V0.p0f1],
    [p0.features[2], V0.p0f2],
    [p1.features[0], V0.p1f0],
    [p1.features[1], V0.p1f1],
    [p1.features[2], V0.p1f2],
    [p1.features[4], V0.p1f4],
    [p2.features[1], V0.p2f1],
    [p2.features[2], V0.p2f2],
  ];
  oldEn.forEach(([got, want], i) => {
    if (got !== want) throw new Error(`${loc}: old-EN marker #${i} = ${JSON.stringify(got)}`);
  });

  const tr = doc.training;
  if (keys(tr) !== keys({ title: 0, subtitle: 0, items: 0 }) || tr.items.length !== 2)
    throw new Error(`${loc}: training shape`);
  if (keys(tr.items[0]) !== keys({ name: 0, features: 0 }) || keys(tr.items[1]) !== keys({ name: 0, features: 0 }))
    throw new Error(`${loc}: training item keys`);
  if (tr.items[0].features.length !== 5 || tr.items[1].features.length !== 6)
    throw new Error(`${loc}: training feature counts`);
  if (tr.items[0].name !== V0.tr0Name || tr.items[1].name !== V0.tr1Name)
    throw new Error(`${loc}: training names not EN`);

  const lgIdx = DATA.launchGuideFrom[loc] !== undefined ? DATA.launchGuideFrom[loc] : 4;
  if (lgIdx !== 3 && lgIdx !== 4) throw new Error(`${loc}: launchGuideFrom must be 3 or 4`);
  const ce = [p0.features[5], p1.features[6], p2.features[6]];
  if (!ce.every((x) => x === ce[0])) throw new Error(`${loc}: CE lines differ across packages`);

  const p2f0 = fresh ? d.p2f0 : p2.features[0];
  if (fresh && p2.features[0] !== d.p2f0Old)
    throw new Error(`${loc}: p2f0Old mismatch: ${JSON.stringify(p2.features[0])}`);

  return {
    imgSrc: h.image.src,
    imgAlt: h.image.alt,
    pkgTitle: pk.title,
    pkgSubtitle: pk.subtitle,
    cta0: p0.cta_text,
    cta1: p1.cta_text,
    cta2: p2.cta_text,
    launchGuide: p0.features[lgIdx],
    ceAll: ce[0],
    p1f4: p1.features[3],
    p1f5: p1.features[5],
    p2f0,
    p2f3: p2.features[3],
    p2f4: p2.features[4],
    p2f5: p2.features[5],
    trTitle: tr.title,
    trSubtitle: tr.subtitle,
    tr0: tr.items[0].features,
    tr1: tr.items[1].features,
  };
}

function verifyTerminal(doc2, doc, loc, d, r) {
  const E = (got, want, what) => {
    if (!eq(got, want)) throw new Error(`${loc}: terminal ${what}: ${JSON.stringify(got).slice(0, 120)}`);
  };
  E(doc2.meta, { title: d.metaTitle, description: d.metaDesc }, 'meta');
  E(
    doc2.hero,
    { tagline: d.heroTagline, title: d.heroTitle, subtitle: d.heroSubtitle, image: { src: r.imgSrc, alt: r.imgAlt } },
    'hero'
  );
  E(doc2.benefits, doc.benefits, 'benefits changed');
  E(doc2.features, doc.features, 'features changed');
  E(doc2.cta, doc.cta, 'cta changed');
  const pk = doc2.packages;
  E(keys(pk), keys({ title: 0, subtitle: 0, items: 0 }), 'packages keys');
  E(pk.title, r.pkgTitle, 'pkg title');
  E(pk.subtitle, r.pkgSubtitle, 'pkg subtitle');
  E(
    pk.items[0],
    {
      name: d.p0Name,
      tagline: d.p0Tag,
      features: [d.p0f0, d.p0f1, d.p0f2, d.p0f3, r.launchGuide, r.ceAll],
      cta_text: r.cta0,
    },
    'pkg0'
  );
  E(
    pk.items[1],
    {
      name: d.p1Name,
      tagline: d.p1Tag,
      features: [d.p1f0, d.p1f1, d.p1f2, d.p1f3, r.p1f4, r.p1f5, r.ceAll],
      popular: true,
      cta_text: r.cta1,
    },
    'pkg1'
  );
  E(
    pk.items[2],
    {
      name: d.p2Name,
      tagline: d.p2Tag,
      features: [r.p2f0, d.p2f1, d.p2f2, r.p2f3, r.p2f4, r.p2f5, r.ceAll],
      cta_text: r.cta2,
    },
    'pkg2'
  );
  const tr = doc2.training;
  E(tr.title, r.trTitle, 'tr title');
  E(tr.subtitle, r.trSubtitle, 'tr subtitle');
  E(tr.items[0], { name: d.tr0Name, features: r.tr0 }, 'tr0');
  E(tr.items[1], { name: d.tr1Name, features: r.tr1 }, 'tr1');
}

async function main() {
  // data table shape
  {
    const top = Object.keys(DATA).sort();
    const exp = LOCALES.concat(['frOldSubtitle', 'frSubtitle', 'launchGuideFrom']).sort();
    if (!eq(top, exp)) throw new Error('data top-level keys mismatch: ' + top.join(','));
    for (const loc of LOCALES) {
      const got = Object.keys(DATA[loc]).sort();
      const want = BASE_KEYS.concat(FRESH_P2F0.includes(loc) ? ['p2f0', 'p2f0Old'] : []).sort();
      if (!eq(got, want)) throw new Error('data keys mismatch for ' + loc);
    }
    const lgf = DATA.launchGuideFrom;
    for (const k of Object.keys(lgf)) {
      if (!LOCALES.includes(k) || (lgf[k] !== 3 && lgf[k] !== 4)) throw new Error('launchGuideFrom bad: ' + k);
    }
    if (DATA.frSubtitle.includes("'") || !DATA.frSubtitle.includes('’'))
      throw new Error('fr: apostrophe must be U+2019 (fr convention), no ASCII quote');
    if (!DATA.frOldSubtitle.includes('rapides')) throw new Error('frOldSubtitle looks wrong');
  }

  // EN root SSOT — fresh and reused strings must differ from their EN counterparts
  const en = yaml.load(fs.readFileSync(REPO + '/src/data/pages/solutions-paddle-clubs.yaml', 'utf8'));
  const EP = en.packages.items;
  const ET = en.training.items;
  const EN_FRESH = {
    metaTitle: en.meta.title,
    metaDesc: en.meta.description,
    heroTagline: en.hero.tagline,
    heroTitle: en.hero.title,
    heroSubtitle: en.hero.subtitle,
    p0Name: EP[0].name,
    p0Tag: EP[0].tagline,
    p1Name: EP[1].name,
    p1Tag: EP[1].tagline,
    p2Name: EP[2].name,
    p2Tag: EP[2].tagline,
    p0f0: EP[0].features[0],
    p0f1: EP[0].features[1],
    p0f2: EP[0].features[2],
    p0f3: EP[0].features[3],
    p1f0: EP[1].features[0],
    p1f1: EP[1].features[1],
    p1f2: EP[1].features[2],
    p1f3: EP[1].features[3],
    p2f1: EP[2].features[1],
    p2f2: EP[2].features[2],
    tr0Name: ET[0].name,
    tr1Name: ET[1].name,
  };
  const ops = [];

  // chain safety — earlier shards (23/27/28/32/35/47) carry line ops on these files. Their find
  // strings must be ABSENT from current disk (already applied) and ABSENT from the shard-49
  // terminal output (no re-introduction), or engine idempotency breaks.
  const EARLIER = {};
  for (const name of fs.readdirSync(DIR).sort()) {
    if (!/^_ops-data-\d+\.cjs$/.test(name) || name === '_ops-data-49.cjs') continue;
    for (const o of require(DIR + '/' + name)) {
      if (!o.f.includes('solutions-paddle-clubs')) continue;
      (EARLIER[o.f] = EARLIER[o.f] || []).push({ name, find: o.find });
    }
  }
  let chainChecked = 0;
  const chainCheck = (rel, raw, pretty) => {
    for (const p of EARLIER[rel] || []) {
      if (raw.split(p.find).length - 1 !== 0)
        throw new Error(`${rel}: ${p.name} find still on disk (earlier op unapplied — pre-state broken)`);
      if (pretty.split(p.find).length - 1 !== 0)
        throw new Error(`${rel}: shard-49 terminal re-introduces ${p.name} find (idempotency break)`);
      chainChecked++;
    }
  };

  for (const loc of LOCALES) {
    const fresh = FRESH_P2F0.includes(loc);
    const d = DATA[loc];
    const rel = 'src/data/pages/' + loc + '/solutions-paddle-clubs.yaml';
    const raw = fs.readFileSync(REPO + '/' + rel, 'utf8');
    if ((await prettier.format(raw, PRETTIER_OPTS)) !== raw) throw new Error(`${loc}: disk file is not prettier-clean`);
    const doc = yaml.load(raw);

    for (const k of Object.keys(EN_FRESH)) {
      if (d[k] === EN_FRESH[k]) throw new Error(`${loc}: fresh ${k} equals EN`);
    }
    if (fresh && d.p2f0 === EP[2].features[0]) throw new Error(`${loc}: fresh p2f0 equals EN`);
    if (fresh && d.p2f0 === d.p2f0Old) throw new Error(`${loc}: p2f0 unchanged from disk`);

    const r = extractReuse(doc, loc, d, fresh);
    if (r.imgSrc !== en.hero.image.src) throw new Error(`${loc}: image.src differs from EN`);
    const reuseChecks = [
      [r.imgAlt, en.hero.image.alt, 'imgAlt'],
      [r.pkgTitle, en.packages.title, 'pkgTitle'],
      [r.pkgSubtitle, en.packages.subtitle, 'pkgSubtitle'],
      [r.cta0, EP[0].cta_text, 'cta0'],
      [r.cta1, EP[1].cta_text, 'cta1'],
      [r.cta2, EP[2].cta_text, 'cta2'],
      [r.launchGuide, EP[0].features[4], 'launchGuide'],
      [r.ceAll, EP[0].features[5], 'ceAll'],
      [r.p1f4, EP[1].features[4], 'p1f4'],
      [r.p1f5, EP[1].features[5], 'p1f5'],
      [r.p2f0, EP[2].features[0], 'p2f0'],
      [r.p2f3, EP[2].features[3], 'p2f3'],
      [r.p2f4, EP[2].features[4], 'p2f4'],
      [r.p2f5, EP[2].features[5], 'p2f5'],
      [r.trTitle, en.training.title, 'trTitle'],
      [r.trSubtitle, en.training.subtitle, 'trSubtitle'],
    ];
    reuseChecks.forEach(([got, enVal, what]) => {
      if (got === enVal) throw new Error(`${loc}: reused ${what} equals EN: ${JSON.stringify(got)}`);
    });
    r.tr0.forEach((x, i) => {
      if (x === ET[0].features[i]) throw new Error(`${loc}: tr0 feature ${i} equals EN`);
    });
    r.tr1.forEach((x, i) => {
      if (x === ET[1].features[i]) throw new Error(`${loc}: tr1 feature ${i} equals EN`);
    });

    const sp = spans(raw);
    const find1 = raw.slice(0, sp.e1);
    const find2 = raw.slice(sp.s2, sp.e2);
    if (raw.split(find1).length - 1 !== 1) throw new Error(`${loc}: find1 not unique`);
    if (raw.split(find2).length - 1 !== 1) throw new Error(`${loc}: find2 not unique`);

    // simulate the engine application, prettify, extract terminal spans
    const sim = raw.replace(find1, () => emit1(d, r)).replace(find2, () => emit2(d, r));
    const pretty = await prettier.format(sim, PRETTIER_OPTS);
    const pretty2 = await prettier.format(pretty, PRETTIER_OPTS);
    if (pretty !== pretty2) throw new Error(`${loc}: prettier output not stable`);
    const sp2 = spans(pretty);
    const rep1 = pretty.slice(0, sp2.e1);
    const rep2 = pretty.slice(sp2.s2, sp2.e2);
    if (pretty.slice(sp2.e1, sp2.s2) !== raw.slice(sp.e1, sp.s2)) throw new Error(`${loc}: benefits region touched`);
    if (pretty.slice(sp2.e2) !== raw.slice(sp.e2)) throw new Error(`${loc}: tail region touched`);
    if (pretty.split(rep1).length - 1 !== 1) throw new Error(`${loc}: rep1 not unique`);
    if (pretty.split(rep2).length - 1 !== 1) throw new Error(`${loc}: rep2 not unique`);

    // the engine result must equal the prettier terminal byte-for-byte
    let engine = raw.replace(find1, () => rep1);
    if (engine.split(find2).length - 1 !== 1) throw new Error(`${loc}: find2 not unique after op1`);
    engine = engine.replace(find2, () => rep2);
    if (engine !== pretty) throw new Error(`${loc}: engine application != prettier terminal`);

    verifyTerminal(yaml.load(pretty), doc, loc, d, r);
    chainCheck(rel, raw, pretty);

    ops.push({ f: rel, find: find1, rep: rep1, n: 1 });
    ops.push({ f: rel, find: find2, rep: rep2, n: 1 });
    console.log(`${loc}: 2 block ops (${find1.length}+${find2.length} -> ${rep1.length}+${rep2.length} chars)`);
  }

  // fr — 1 line op (hero.subtitle is the only untranslated line)
  const frRel = 'src/data/pages/fr/solutions-paddle-clubs.yaml';
  const frRaw = fs.readFileSync(REPO + '/' + frRel, 'utf8');
  if ((await prettier.format(frRaw, PRETTIER_OPTS)) !== frRaw) throw new Error('fr: disk file is not prettier-clean');
  const frFind = '  subtitle: ' + DATA.frOldSubtitle;
  if (frRaw.split(frFind).length - 1 !== 1) throw new Error('fr: find line not exactly once');
  const frDoc0 = yaml.load(frRaw);
  if (frDoc0.hero.subtitle !== DATA.frOldSubtitle) throw new Error('fr: parsed subtitle != frOldSubtitle');
  const frSim = frRaw.replace(frFind, () => '  subtitle: ' + v(DATA.frSubtitle));
  const frPretty = await prettier.format(frSim, PRETTIER_OPTS);
  if ((await prettier.format(frPretty, PRETTIER_OPTS)) !== frPretty) throw new Error('fr: prettier output not stable');
  const frRep = frPretty.split('\n').find((l) => l.startsWith('  subtitle: ') && l.includes('Fournisseur'));
  if (!frRep) throw new Error('fr: terminal subtitle line not found');
  if (frPretty !== frRaw.replace(frFind, () => frRep)) throw new Error('fr: prettier touched more than the one line');
  if (frPretty.replace(frRep, () => frFind) !== frRaw) throw new Error('fr: revert mismatch');
  const frDoc1 = yaml.load(frPretty);
  if (frDoc1.hero.subtitle !== DATA.frSubtitle) throw new Error('fr: terminal subtitle value wrong');
  for (const k of Object.keys(frDoc0)) {
    if (k === 'hero') continue;
    if (!eq(frDoc1[k], frDoc0[k])) throw new Error('fr: section changed: ' + k);
  }
  const hero0 = { ...frDoc0.hero, subtitle: undefined };
  const hero1 = { ...frDoc1.hero, subtitle: undefined };
  if (!eq(hero0, hero1)) throw new Error('fr: hero changed beyond subtitle');
  chainCheck(frRel, frRaw, frPretty);
  ops.push({ f: frRel, find: frFind, rep: frRep, n: 1 });
  console.log(`fr: 1 line op (${frFind.length} -> ${frRep.length} chars)`);
  console.log(`chain scan: ${chainChecked} earlier ops on this file family stay applied (no re-introduction)`);

  // serialize ops file (prettier-compatible singleQuote CJS, same q() as 47c/48)
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
    '// shard 49 (GENERATED by _gen-ops-49.cjs — do not edit by hand)',
    '// 39 ops — solutions-paddle-clubs EN drift resync: 19x2 block ops (meta+hero head block,',
    '// packages+training block; 22 fresh strings per locale from _b49-data.cjs + p2f0 for 7 locales,',
    '// everything else reused from each locale) + 1 fr hero.subtitle line op.',
    '// rep blocks are prettier-terminal forms extracted via the repo prettier (47c lesson). See TECH.md L39.',
    '// Pre-patch anchors: 17 old-EN v0 keys + 5 EN names asserted uniform across all 19 locales.',
  ].join('\n');
  fs.writeFileSync(OPS_PATH, header + '\nmodule.exports = [\n' + body + '\n];\n');

  // post-write verification
  delete require.cache[require.resolve(OPS_PATH)];
  const ops2 = require(OPS_PATH);
  if (ops2.length !== 39) throw new Error('post-write: op count ' + ops2.length);
  for (const o of ops2) {
    const disk = fs.readFileSync(REPO + '/' + o.f, 'utf8');
    if (disk.split(o.find).length - 1 !== 1) throw new Error('post-write: find not on disk: ' + o.f);
  }
  if (!ops2[0].find.startsWith('meta:\n')) throw new Error('post-write: op0 is not the head block');
  if (!ops2[1].find.startsWith('packages:\n')) throw new Error('post-write: op1 is not the packages block');
  if (ops2[38].f !== frRel) throw new Error('post-write: last op is not fr');
  console.log('\n49 OK: wrote 39 ops (19x2 block + 1 fr line) to _ops-data-49.cjs');
}

main().catch((e) => {
  console.error('GEN FAIL:', e.message);
  process.exit(1);
});
