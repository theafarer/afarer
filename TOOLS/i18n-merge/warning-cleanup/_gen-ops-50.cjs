// shard 50 generator — solutions-resorts-hotels EN drift resync (TECH.md L40 / 挂账⑧ 第三项).
//
// EN root was rewritten (v0 -> v1): new hero copy, packages.subtitle gains the warranty+CE
// sentence, per-package taglines lose the 'Best for: ' prefix, and the features lineups were
// redistributed (6/8/8; pkg1 staff-training line moves f6->f5, new 48h parts line at f6).
// 19 locales still hold the pre-repo v0 state: 21 old-EN keys + 3 untranslated EN package
// names; de additionally carries an EN hero.tagline residue. fr was translated at rewrite
// time and is OUT OF SCOPE.
//
// Op shape: THREE block ops per locale (57 total) —
//   op1: 'hero:' line .. before 'roi_section:' (meta untouched).
//   op2: 'packages:' line .. before 'case_study:'.
//   op3: 'cta:' line .. EOF (last top-level section).
// rep is NOT hand-serialized: the generator emits an initial block, prettier-formats the FULL
// simulated patched file (repo prettier, yaml singleQuote — 47c lesson), and extracts the
// prettier-terminal spans as rep. The engine result (find1->rep1, find2->rep2, find3->rep3
// applied in order) must equal the prettier terminal byte-for-byte.
//
// Fresh strings (23 per locale) come from _b50-data.cjs; everything else is REUSED from each
// locale's own translated disk content, extracted by structure: hero.tagline (except de ->
// fresh 'Resorts und Hotels'), hero.image.src/alt, packages.title, pkg0.f5 (warranty+CE),
// pkg1.f1/f7, pkg1.f6->f5 (staff-training move), pkg2.f3/f4/f6/f7, revenue x3, cta_text x3,
// cta.subtitle + cta.actions.
//
// Assertions: pre-patch v0 constants (21 old-EN keys + 3 EN names) uniform across 19 locales;
// de hero.tagline === 'Resorts & Hotels' pre-patch; every fresh string differs from its EN
// root counterpart (EN root yaml = SSOT); every reused string differs from its EN counterpart
// (image.src / action href / variant must EQUAL EN); terminal doc verified structurally
// (meta/roi_section/case_study/features byte-untouched, hero/packages/cta exact).
//
// Run ONCE against pre-patch state: node _gen-ops-50.cjs   (delete output before re-running)
// Output: _ops-data-50.cjs (57 ops = 19x3 block ops). See TECH.md L40.
const fs = require('fs');

const REPO = 'E:/github/afarer';
const DIR = 'E:/github/afarer/TOOLS/i18n-merge/warning-cleanup';
const yaml = require(REPO + '/node_modules/js-yaml');
const prettier = require(REPO + '/node_modules/prettier');

const OPS_PATH = DIR + '/_ops-data-50.cjs';
if (fs.existsSync(OPS_PATH) && !process.argv.includes('--force')) {
  throw new Error('_ops-data-50.cjs already exists — delete it first (generator runs on pre-patch state only)');
}

const DATA = require('./_b50-data.cjs');

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
const FRESH_KEYS = [
  'heroTitle',
  'heroSubtitle',
  'pkgSubtitle',
  'p0Name',
  'p0Tag',
  'p0f0',
  'p0f1',
  'p0f2',
  'p0f3',
  'p0f4',
  'p1Name',
  'p1Tag',
  'p1f0',
  'p1f2',
  'p1f3',
  'p1f4',
  'p1f6',
  'p2Name',
  'p2Tag',
  'p2f0',
  'p2f1',
  'p2f2',
  'p2f5',
  'ctaTitle',
];

// pre-patch v0 EN constants (recon-verified uniform across the 19 locales, _s50-recon2.cjs)
const V0 = {
  heroTitle: 'Create Premium Water Experiences<br />For Your Guests',
  heroSubtitle:
    'Complete SUP fleet solutions for resorts, hotels, and waterfront destinations worldwide. One partner. One invoice. Zero hassle.',
  pkgSubtitle: 'Choose the package that fits your guest capacity and revenue goals.',
  p0Name: 'Starter Package',
  p0Tag: 'Best for: Boutique resorts, up to 20 guests/day',
  p0f0: '20 SUP boards (mixed sizes)',
  p0f1: '20 paddles + 20 life vests',
  p0f2: '4 dual-action pumps',
  p0f3: '2 storage racks',
  p0f4: '1 repair kit',
  p1Name: 'Premium Package',
  p1Tag: 'Best for: Large resorts, 50-100 guests/day',
  p1f0: '50 SUP boards (mixed sizes)',
  p1f2: '10 dual-action pumps',
  p1f3: '5 storage racks / cart',
  p1f4: '2 repair kits',
  p1f5: 'Custom branding on all boards',
  p2Name: 'Flagship Package',
  p2Tag: 'Best for: Ultra-premium resorts, 100+ guests/day',
  p2f0: '100+ SUP boards',
  p2f1: 'Complete accessory set',
  p2f2: 'On-site staff training',
  p2f5: 'Custom branding + logo',
  ctaTitle: 'Ready to upgrade your guest experience?',
};

const PRETTIER_OPTS = { parser: 'yaml', printWidth: 120, singleQuote: true, tabWidth: 2, useTabs: false };
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const keys = (o) => JSON.stringify(Object.keys(o));

// top-level markers are unindented `xxx:` lines — nested indented keys (e.g. item features:)
// never match '\nxxx:\n', but the count assertion catches any surprise anyway
function marker(text, m) {
  const c = text.split('\n' + m + '\n').length - 1;
  if (c !== 1) throw new Error(`marker ${m} count ${c}`);
  return text.indexOf('\n' + m + '\n') + 1;
}

function spans(text) {
  return {
    s1: marker(text, 'hero:'),
    e1: marker(text, 'roi_section:'),
    s2: marker(text, 'packages:'),
    e2: marker(text, 'case_study:'),
    s3: marker(text, 'cta:'),
  };
}

// initial serialization — only needs to parse; the prettier pass computes the terminal form
function v(s) {
  if (typeof s !== 'string' || s.length === 0) throw new Error('empty/non-string scalar');
  if (s.includes("'")) return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  if (/^[\s!\-&*?|>%@`",\[\]{}#]|:\s|\s#|\s$|:#?$/.test(s)) return "'" + s + "'";
  return s;
}

function emit1(d, r, heroTagline) {
  return [
    'hero:',
    '  tagline: ' + v(heroTagline),
    '  title: ' + v(d.heroTitle),
    '  subtitle: ' + v(d.heroSubtitle),
    '  image:',
    '    src: ' + v(r.imgSrc),
    '    alt: ' + v(r.imgAlt),
    '',
  ].join('\n');
}

function emitItem(L, name, tagline, feats, revenue, cta, popular) {
  L.push('    - name: ' + v(name), '      tagline: ' + v(tagline), '      features:');
  feats.forEach((x) => L.push('        - ' + v(x)));
  L.push('      revenue: ' + v(revenue));
  if (popular) L.push('      popular: true');
  L.push('      cta_text: ' + v(cta));
}

function emit2(d, r) {
  const L = ['packages:', '  title: ' + v(r.pkgTitle), '  subtitle: ' + v(d.pkgSubtitle), '  items:'];
  emitItem(L, d.p0Name, d.p0Tag, [d.p0f0, d.p0f1, d.p0f2, d.p0f3, d.p0f4, r.p0f5], r.rev0, r.cta0, false);
  emitItem(
    L,
    d.p1Name,
    d.p1Tag,
    [d.p1f0, r.p1f1, d.p1f2, d.p1f3, d.p1f4, r.p1f5, d.p1f6, r.p1f7],
    r.rev1,
    r.cta1,
    true
  );
  emitItem(
    L,
    d.p2Name,
    d.p2Tag,
    [d.p2f0, d.p2f1, d.p2f2, r.p2f3, r.p2f4, d.p2f5, r.p2f6, r.p2f7],
    r.rev2,
    r.cta2,
    false
  );
  return L.join('\n') + '\n';
}

function emit3(d, r) {
  const L = ['cta:', '  title: ' + v(d.ctaTitle), '  subtitle: ' + v(r.ctaSubtitle), '  actions:'];
  r.actions.forEach((a) =>
    L.push('    - text: ' + v(a.text), '      href: ' + v(a.href), '      variant: ' + v(a.variant))
  );
  return L.join('\n') + '\n';
}

// pre-patch structural assertions + reuse extraction from the locale's own translated content
function extractReuse(doc, loc) {
  if (keys(doc) !== keys({ meta: 0, hero: 0, roi_section: 0, packages: 0, case_study: 0, features: 0, cta: 0 }))
    throw new Error(`${loc}: top-level sections unexpected: ${keys(doc)}`);
  const h = doc.hero;
  if (keys(h) !== keys({ tagline: 0, title: 0, subtitle: 0, image: 0 })) throw new Error(`${loc}: hero keys`);
  if (keys(h.image) !== keys({ src: 0, alt: 0 })) throw new Error(`${loc}: hero.image keys`);
  if (h.title !== V0.heroTitle || h.subtitle !== V0.heroSubtitle) throw new Error(`${loc}: hero v0 mismatch`);
  if (loc === 'de' && h.tagline !== DATA.deOldHeroTagline) throw new Error(`${loc}: de hero.tagline not EN residue`);

  const pk = doc.packages;
  if (keys(pk) !== keys({ title: 0, subtitle: 0, items: 0 }) || pk.items.length !== 3)
    throw new Error(`${loc}: packages shape`);
  if (pk.subtitle !== V0.pkgSubtitle) throw new Error(`${loc}: packages.subtitle v0 mismatch`);
  const p0 = pk.items[0];
  const p1 = pk.items[1];
  const p2 = pk.items[2];
  if (keys(p0) !== keys({ name: 0, tagline: 0, features: 0, revenue: 0, cta_text: 0 }))
    throw new Error(`${loc}: p0 keys`);
  if (
    keys(p1) !== keys({ name: 0, tagline: 0, features: 0, revenue: 0, popular: 0, cta_text: 0 }) ||
    p1.popular !== true
  )
    throw new Error(`${loc}: p1 keys/popular`);
  if (keys(p2) !== keys({ name: 0, tagline: 0, features: 0, revenue: 0, cta_text: 0 }))
    throw new Error(`${loc}: p2 keys`);
  if (p0.features.length !== 6 || p1.features.length !== 8 || p2.features.length !== 8)
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
    [p0.features[3], V0.p0f3],
    [p0.features[4], V0.p0f4],
    [p1.features[0], V0.p1f0],
    [p1.features[2], V0.p1f2],
    [p1.features[3], V0.p1f3],
    [p1.features[4], V0.p1f4],
    [p1.features[5], V0.p1f5],
    [p2.features[0], V0.p2f0],
    [p2.features[1], V0.p2f1],
    [p2.features[2], V0.p2f2],
    [p2.features[5], V0.p2f5],
  ];
  oldEn.forEach(([got, want], i) => {
    if (got !== want) throw new Error(`${loc}: old-EN marker #${i} = ${JSON.stringify(got)}`);
  });

  const ct = doc.cta;
  if (keys(ct) !== keys({ title: 0, subtitle: 0, actions: 0 }) || ct.actions.length !== 2)
    throw new Error(`${loc}: cta shape`);
  if (ct.title !== V0.ctaTitle) throw new Error(`${loc}: cta.title v0 mismatch`);
  ct.actions.forEach((a, i) => {
    if (keys(a) !== keys({ text: 0, href: 0, variant: 0 })) throw new Error(`${loc}: action ${i} keys`);
  });

  return {
    heroTagline: h.tagline,
    imgSrc: h.image.src,
    imgAlt: h.image.alt,
    pkgTitle: pk.title,
    p0f5: p0.features[5],
    p1f1: p1.features[1],
    p1f5: p1.features[6], // staff-training line moves f6 -> f5 in v1
    p1f7: p1.features[7],
    p2f3: p2.features[3],
    p2f4: p2.features[4],
    p2f6: p2.features[6],
    p2f7: p2.features[7],
    rev0: p0.revenue,
    rev1: p1.revenue,
    rev2: p2.revenue,
    cta0: p0.cta_text,
    cta1: p1.cta_text,
    cta2: p2.cta_text,
    ctaSubtitle: ct.subtitle,
    actions: ct.actions,
  };
}

function verifyTerminal(doc2, doc, loc, d, r, heroTagline) {
  const E = (got, want, what) => {
    if (!eq(got, want)) throw new Error(`${loc}: terminal ${what}: ${JSON.stringify(got).slice(0, 120)}`);
  };
  E(doc2.meta, doc.meta, 'meta changed');
  E(doc2.roi_section, doc.roi_section, 'roi_section changed');
  E(doc2.case_study, doc.case_study, 'case_study changed');
  E(doc2.features, doc.features, 'features changed');
  E(
    doc2.hero,
    { tagline: heroTagline, title: d.heroTitle, subtitle: d.heroSubtitle, image: { src: r.imgSrc, alt: r.imgAlt } },
    'hero'
  );
  const pk = doc2.packages;
  E(keys(pk), keys({ title: 0, subtitle: 0, items: 0 }), 'packages keys');
  E(pk.title, r.pkgTitle, 'pkg title');
  E(pk.subtitle, d.pkgSubtitle, 'pkg subtitle');
  E(
    pk.items[0],
    {
      name: d.p0Name,
      tagline: d.p0Tag,
      features: [d.p0f0, d.p0f1, d.p0f2, d.p0f3, d.p0f4, r.p0f5],
      revenue: r.rev0,
      cta_text: r.cta0,
    },
    'pkg0'
  );
  E(
    pk.items[1],
    {
      name: d.p1Name,
      tagline: d.p1Tag,
      features: [d.p1f0, r.p1f1, d.p1f2, d.p1f3, d.p1f4, r.p1f5, d.p1f6, r.p1f7],
      revenue: r.rev1,
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
      features: [d.p2f0, d.p2f1, d.p2f2, r.p2f3, r.p2f4, d.p2f5, r.p2f6, r.p2f7],
      revenue: r.rev2,
      cta_text: r.cta2,
    },
    'pkg2'
  );
  E(doc2.cta, { title: d.ctaTitle, subtitle: r.ctaSubtitle, actions: r.actions }, 'cta');
}

async function main() {
  // data table shape
  {
    const top = Object.keys(DATA).sort();
    const exp = LOCALES.concat(['deHeroTagline', 'deOldHeroTagline']).sort();
    if (!eq(top, exp)) throw new Error('data top-level keys mismatch: ' + top.join(','));
    for (const loc of LOCALES) {
      const got = Object.keys(DATA[loc]).sort();
      if (!eq(got, FRESH_KEYS.slice().sort())) throw new Error('data keys mismatch for ' + loc);
    }
    if (DATA.deOldHeroTagline !== 'Resorts & Hotels') throw new Error('deOldHeroTagline must be the EN residue');
    if (DATA.deHeroTagline === DATA.deOldHeroTagline) throw new Error('de tagline unchanged');
  }

  // EN root SSOT — fresh and reused strings must differ from their EN counterparts
  const en = yaml.load(fs.readFileSync(REPO + '/src/data/pages/solutions-resorts-hotels.yaml', 'utf8'));
  const EP = en.packages.items;
  const EN_FRESH = {
    heroTitle: en.hero.title,
    heroSubtitle: en.hero.subtitle,
    pkgSubtitle: en.packages.subtitle,
    p0Name: EP[0].name,
    p0Tag: EP[0].tagline,
    p0f0: EP[0].features[0],
    p0f1: EP[0].features[1],
    p0f2: EP[0].features[2],
    p0f3: EP[0].features[3],
    p0f4: EP[0].features[4],
    p1Name: EP[1].name,
    p1Tag: EP[1].tagline,
    p1f0: EP[1].features[0],
    p1f2: EP[1].features[2],
    p1f3: EP[1].features[3],
    p1f4: EP[1].features[4],
    p1f6: EP[1].features[6],
    p2Name: EP[2].name,
    p2Tag: EP[2].tagline,
    p2f0: EP[2].features[0],
    p2f1: EP[2].features[1],
    p2f2: EP[2].features[2],
    p2f5: EP[2].features[5],
    ctaTitle: en.cta.title,
  };
  const ops = [];

  // chain safety — earlier shards (23 ' + ' restore, 27/28 50-countries, 32 soft-hyphen,
  // 35 metric/value, 38 tr currency, 39 resorts-roi prefix ops, 41 da/fi roi subtitle,
  // 47 da cta wording) carry ops on these files. Each earlier op must classify as
  // already-applied on current disk AND on the shard-50 terminal, mirroring the engine's
  // three-way rules (_patch-warnings.cjs L71-78). The naive find==0 check is WRONG for
  // prefix-style ops (39: rep === find + '+', so find stays on disk as a substring of rep)
  // and for empty-rep ops (32 soft-hyphen wipe): both are legitimately 'already'.
  const EARLIER = {};
  for (const name of fs.readdirSync(DIR).sort()) {
    if (!/^_ops-data-\d+\.cjs$/.test(name) || name === '_ops-data-50.cjs') continue;
    for (const o of require(DIR + '/' + name)) {
      if (!o.f.includes('solutions-resorts-hotels')) continue;
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
      if (c1 !== 'already') throw new Error(`${rel}: shard-50 terminal breaks ${p.name} idempotency (${c1})`);
      chainChecked++;
    }
  };

  for (const loc of LOCALES) {
    const d = DATA[loc];
    const rel = 'src/data/pages/' + loc + '/solutions-resorts-hotels.yaml';
    const raw = fs.readFileSync(REPO + '/' + rel, 'utf8');
    if ((await prettier.format(raw, PRETTIER_OPTS)) !== raw) throw new Error(`${loc}: disk file is not prettier-clean`);
    const doc = yaml.load(raw);

    for (const k of FRESH_KEYS) {
      if (d[k] === EN_FRESH[k]) throw new Error(`${loc}: fresh ${k} equals EN`);
    }
    const heroTagline = loc === 'de' ? DATA.deHeroTagline : undefined;

    const r = extractReuse(doc, loc);
    if (heroTagline === undefined && r.heroTagline === en.hero.tagline)
      throw new Error(`${loc}: reused heroTagline equals EN`);
    if (heroTagline !== undefined && heroTagline === en.hero.tagline)
      throw new Error(`${loc}: de heroTagline equals EN`);
    if (r.imgSrc !== en.hero.image.src) throw new Error(`${loc}: image.src differs from EN`);
    const reuseChecks = [
      [r.imgAlt, en.hero.image.alt, 'imgAlt'],
      [r.pkgTitle, en.packages.title, 'pkgTitle'],
      [r.p0f5, EP[0].features[5], 'p0f5'],
      [r.p1f1, EP[1].features[1], 'p1f1'],
      [r.p1f5, EP[1].features[5], 'p1f5'],
      [r.p1f7, EP[1].features[7], 'p1f7'],
      [r.p2f3, EP[2].features[3], 'p2f3'],
      [r.p2f4, EP[2].features[4], 'p2f4'],
      [r.p2f6, EP[2].features[6], 'p2f6'],
      [r.p2f7, EP[2].features[7], 'p2f7'],
      [r.rev0, EP[0].revenue, 'rev0'],
      [r.rev1, EP[1].revenue, 'rev1'],
      [r.rev2, EP[2].revenue, 'rev2'],
      [r.cta0, EP[0].cta_text, 'cta0'],
      [r.cta1, EP[1].cta_text, 'cta1'],
      [r.cta2, EP[2].cta_text, 'cta2'],
      [r.ctaSubtitle, en.cta.subtitle, 'ctaSubtitle'],
    ];
    reuseChecks.forEach(([got, enVal, what]) => {
      if (got === enVal) throw new Error(`${loc}: reused ${what} equals EN: ${JSON.stringify(got)}`);
    });
    r.actions.forEach((a, i) => {
      const ea = en.cta.actions[i];
      if (a.text === ea.text) throw new Error(`${loc}: action ${i} text equals EN`);
      if (a.href !== ea.href) throw new Error(`${loc}: action ${i} href differs from EN`);
      if (a.variant !== ea.variant) throw new Error(`${loc}: action ${i} variant differs from EN`);
    });

    const sp = spans(raw);
    const find1 = raw.slice(sp.s1, sp.e1);
    const find2 = raw.slice(sp.s2, sp.e2);
    const find3 = raw.slice(sp.s3);
    if (raw.split(find1).length - 1 !== 1) throw new Error(`${loc}: find1 not unique`);
    if (raw.split(find2).length - 1 !== 1) throw new Error(`${loc}: find2 not unique`);
    if (raw.split(find3).length - 1 !== 1) throw new Error(`${loc}: find3 not unique`);

    // simulate the engine application, prettify, extract terminal spans
    const tagline = heroTagline !== undefined ? heroTagline : r.heroTagline;
    const sim = raw
      .replace(find1, () => emit1(d, r, tagline))
      .replace(find2, () => emit2(d, r))
      .replace(find3, () => emit3(d, r));
    const pretty = await prettier.format(sim, PRETTIER_OPTS);
    const pretty2 = await prettier.format(pretty, PRETTIER_OPTS);
    if (pretty !== pretty2) throw new Error(`${loc}: prettier output not stable`);
    const sp2 = spans(pretty);
    const rep1 = pretty.slice(sp2.s1, sp2.e1);
    const rep2 = pretty.slice(sp2.s2, sp2.e2);
    const rep3 = pretty.slice(sp2.s3);
    if (pretty.slice(0, sp2.s1) !== raw.slice(0, sp.s1)) throw new Error(`${loc}: meta region touched`);
    if (pretty.slice(sp2.e1, sp2.s2) !== raw.slice(sp.e1, sp.s2)) throw new Error(`${loc}: roi_section region touched`);
    if (pretty.slice(sp2.e2, sp2.s3) !== raw.slice(sp.e2, sp.s3))
      throw new Error(`${loc}: case_study/features region touched`);
    if (pretty.split(rep1).length - 1 !== 1) throw new Error(`${loc}: rep1 not unique`);
    if (pretty.split(rep2).length - 1 !== 1) throw new Error(`${loc}: rep2 not unique`);
    if (pretty.split(rep3).length - 1 !== 1) throw new Error(`${loc}: rep3 not unique`);

    // the engine result must equal the prettier terminal byte-for-byte
    let engine = raw.replace(find1, () => rep1);
    if (engine.split(find2).length - 1 !== 1) throw new Error(`${loc}: find2 not unique after op1`);
    engine = engine.replace(find2, () => rep2);
    if (engine.split(find3).length - 1 !== 1) throw new Error(`${loc}: find3 not unique after op2`);
    engine = engine.replace(find3, () => rep3);
    if (engine !== pretty) throw new Error(`${loc}: engine application != prettier terminal`);

    verifyTerminal(yaml.load(pretty), doc, loc, d, r, tagline);
    chainCheck(rel, raw, pretty);

    ops.push({ f: rel, find: find1, rep: rep1, n: 1 });
    ops.push({ f: rel, find: find2, rep: rep2, n: 1 });
    ops.push({ f: rel, find: find3, rep: rep3, n: 1 });
    console.log(
      `${loc}: 3 block ops (hero ${find1.length}->${rep1.length}, packages ${find2.length}->${rep2.length}, cta ${find3.length}->${rep3.length} chars)`
    );
  }
  console.log(`chain scan: ${chainChecked} earlier ops on this file family stay applied (no re-introduction)`);

  // serialize ops file (prettier-compatible singleQuote CJS, same q() as 47c/48/49)
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
    '// shard 50 (GENERATED by _gen-ops-50.cjs — do not edit by hand)',
    '// 57 ops — solutions-resorts-hotels EN drift resync: 19x3 block ops (hero block,',
    '// packages block, cta block; 23 fresh strings per locale from _b50-data.cjs + de hero.tagline',
    '// fix, everything else reused from each locale). rep blocks are prettier-terminal forms',
    '// extracted via the repo prettier (47c lesson). See TECH.md L40.',
    '// Pre-patch anchors: 21 old-EN v0 keys + 3 EN package names asserted uniform across 19 locales.',
  ].join('\n');
  fs.writeFileSync(OPS_PATH, header + '\nmodule.exports = [\n' + body + '\n];\n');

  // post-write verification
  delete require.cache[require.resolve(OPS_PATH)];
  const ops2 = require(OPS_PATH);
  if (ops2.length !== 57) throw new Error('post-write: op count ' + ops2.length);
  for (let i = 0; i < ops2.length; i++) {
    const o = ops2[i];
    const disk = fs.readFileSync(REPO + '/' + o.f, 'utf8');
    if (disk.split(o.find).length - 1 !== 1) throw new Error('post-write: find not on disk: ' + o.f + ' #' + i);
    const m = i % 3;
    if (m === 0 && !o.find.startsWith('hero:\n')) throw new Error('post-write: op #' + i + ' is not the hero block');
    if (m === 1 && !o.find.startsWith('packages:\n'))
      throw new Error('post-write: op #' + i + ' is not the packages block');
    if (m === 2 && !o.find.startsWith('cta:\n')) throw new Error('post-write: op #' + i + ' is not the cta block');
  }
  console.log('\n50 OK: wrote 57 ops (19x3 block) to _ops-data-50.cjs');
}

main().catch((e) => {
  console.error('GEN FAIL:', e.message);
  process.exit(1);
});
