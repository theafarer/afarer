// shard 48 generator — request-quotation content_form STRUCTURAL drift (TECH.md L38 / 挂账⑧).
//
// EN root was rewritten to a clean 12-field structure. 19 locales still hold the OLD broken structure:
// old-EN labels, f0 options = obsolete EN "SUP Boat" list, f1 = Quantity/text carrying 10 translated
// Application options, f5 = Additional Requirements/textarea carrying 5 translated material options,
// duplicated Timeline (f4/f8) and Additional Requirements (f5/f9) fields. fr was re-translated at
// rewrite time but carries 4 EN-residue lines (see _b48-data.cjs frFixes).
//
// Op shape: one WHOLE-BLOCK replacement op per locale — find = the exact on-disk text from the
// `  fields:` line up to (excluding) the `cta:` line; rep = the new 12-field block. New labels/options/
// placeholders come from _b48-data.cjs (20 new strings per locale); app options (10), material options
// (5) and 7 placeholders are REUSED from the locale's own existing translated content, extracted from
// disk by field name (old f8 Timeline placeholder feeds new f8; old f4/f3 duplicates are dropped).
//
// 47c lesson applied: rep is NOT hand-serialized — the generator builds the block, runs the repo
// prettier (yaml, singleQuote) over the full simulated patched file, and extracts the PRETTIER-STABLE
// terminal block as rep. Assertions: prettier output is stable (format(format(x))===format(x)), text
// outside the block is untouched, rep parses to a structure isomorphic to the EN root, all 12 labels
// differ from EN, and the rest of the document is unchanged. fr line ops are verified the same way.
//
// Run ONCE against pre-patch state from anywhere (paths absolute or repo-relative): node _gen-ops-48.cjs
// Output: _ops-data-48.cjs (23 ops = 19 block ops + 4 fr line ops). Delete output before re-running.
const fs = require('fs');

const REPO = 'E:/github/afarer';
const yaml = require(REPO + '/node_modules/js-yaml');
const prettier = require(REPO + '/node_modules/prettier');

const OPS_PATH = 'E:/github/afarer/TOOLS/i18n-merge/warning-cleanup/_ops-data-48.cjs';
if (fs.existsSync(OPS_PATH) && !process.argv.includes('--force')) {
  throw new Error('_ops-data-48.cjs already exists — delete it first (generator runs on pre-patch state only)');
}

const DATA = require('./_b48-data.cjs');

const LOCALES = [
  'de',
  'pt',
  'es',
  'it',
  'ja',
  'ko',
  'ru',
  'pl',
  'ar',
  'nl',
  'sv',
  'no',
  'el',
  'tr',
  'fi',
  'cs',
  'da',
  'ro',
  'th',
];

// EN root SSOT (src/data/pages/request-quotation.yaml, post-rewrite)
const EN_NAMES = [
  'Product Category',
  'Application',
  'Quantity',
  'Target Market',
  'Delivery Country',
  'Material Preference',
  'Engine Requirement',
  'Customization Required',
  'Timeline',
  'Additional Requirements',
  'Upload Specification',
  'Upload Logo / Artwork',
];
const EN_TYPES = [
  'select',
  'select',
  'text',
  'text',
  'text',
  'select',
  'text',
  'text',
  'text',
  'textarea',
  'file',
  'file',
];
const EN_OPTS_LEN = [6, 10, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0];
const EN_CAT_OPTS = [
  'SUP Board',
  'Inflatable SUP',
  'Inflatable SUP Board',
  'Life Vest',
  'Marine Accessory',
  'Custom OEM/ODM',
];
const EN_QTY_PH = 'e.g. 50 units';
const EN_DC_PH = 'e.g. Italy, UAE, USA, Australia';

const PRETTIER_OPTS = { parser: 'yaml', printWidth: 120, singleQuote: true, tabWidth: 2, useTabs: false };
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function blockSpan(text) {
  const fc = text.split('\n  fields:\n').length - 1;
  const cc = text.split('\ncta:\n').length - 1;
  if (fc !== 1 || cc !== 1) throw new Error(`span markers not unique (fields=${fc}, cta=${cc})`);
  return { start: text.indexOf('\n  fields:\n') + 1, end: text.indexOf('\ncta:\n') + 1 };
}

// initial serialization — only needs to parse correctly; the prettier pass computes the terminal form
function v(s) {
  if (typeof s !== 'string' || s.length === 0) throw new Error('empty/non-string scalar');
  if (s.includes("'")) return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  if (/^[\s!\-&*?|>%@`",\[\]{}#]|:\s|\s#|\s$|:#?$/.test(s)) return "'" + s + "'";
  return s;
}

function emitBlock(d, r) {
  const L = ['  fields:'];
  const field = (name, type) => L.push('    - name: ' + v(name), '      type: ' + type);
  const opts = (arr) => {
    L.push('      options:');
    arr.forEach((o) => L.push('        - ' + v(o)));
  };
  const ph = (p) => L.push('      placeholder: ' + v(p));
  field(d.catLabel, 'select');
  opts(d.catOpts);
  field(d.appLabel, 'select');
  opts(r.appOptions);
  field(d.qtyLabel, 'text');
  ph(d.qtyPh);
  field(d.tmLabel, 'text');
  ph(r.ph_target);
  field(d.dcLabel, 'text');
  ph(d.dcPh);
  field(d.matLabel, 'select');
  opts(r.matOptions);
  field(d.engLabel, 'text');
  ph(r.ph_engine);
  field(d.custLabel, 'text');
  ph(r.ph_custom);
  field(d.tlLabel, 'text');
  ph(r.ph_timeline);
  field(d.arLabel, 'textarea');
  ph(r.ph_addreq);
  field(d.usLabel, 'file');
  ph(r.ph_uploadspec);
  field(d.ulLabel, 'file');
  ph(r.ph_uploadlogo);
  return L.join('\n') + '\n';
}

// pre-patch structural assertions + reuse extraction from the locale's own translated content
function extractReuse(doc, loc) {
  const f = doc.content_form.fields;
  const one = (pred, what) => {
    const m = f.filter(pred);
    if (m.length !== 1) throw new Error(`${loc}: ${what} matched ${m.length} fields`);
    return m[0];
  };
  // drift-family markers (uniform across the 19 locales — probe-verified)
  if (f.length !== 12) throw new Error(`${loc}: fields.length=${f.length}`);
  if (
    f[0].name !== 'Product Type' ||
    f[0].type !== 'select' ||
    !eq(f[0].options, ['SUP Boat', 'Inflatable Boat', 'SUP Board', 'Inflatable SUP', 'Life Vest', 'Accessory'])
  )
    throw new Error(`${loc}: f0 old-EN Product Type marker missing`);
  const qty = one(
    (x) => x.name === 'Quantity' && x.type === 'text' && Array.isArray(x.options) && x.options.length === 10,
    'Quantity/text/options10'
  );
  const arOpts = one(
    (x) =>
      x.name === 'Additional Requirements' &&
      x.type === 'textarea' &&
      Array.isArray(x.options) &&
      x.options.length === 5,
    'AR/textarea/options5'
  );
  const arPh = one(
    (x) => x.name === 'Additional Requirements' && x.type === 'textarea' && typeof x.placeholder === 'string',
    'AR/textarea/placeholder'
  );
  const tm = one((x) => x.name === 'Target Market' && typeof x.placeholder === 'string', 'Target Market');
  const er = one((x) => x.name === 'Engine Requirement' && typeof x.placeholder === 'string', 'Engine Requirement');
  const cr = one(
    (x) => x.name === 'Customization Required' && typeof x.placeholder === 'string',
    'Customization Required'
  );
  const tl = f.filter((x) => x.name === 'Timeline');
  if (tl.length !== 2 || tl.some((x) => x.type !== 'text' || typeof x.placeholder !== 'string'))
    throw new Error(`${loc}: Timeline duplicate pair shape broken`);
  const us = one((x) => x.name === 'Upload Specification' && typeof x.placeholder === 'string', 'Upload Specification');
  const ul = one(
    (x) => x.name === 'Upload Logo / Artwork' && typeof x.placeholder === 'string',
    'Upload Logo / Artwork'
  );
  return {
    appOptions: qty.options,
    matOptions: arOpts.options,
    ph_target: tm.placeholder,
    ph_engine: er.placeholder,
    ph_custom: cr.placeholder,
    ph_timeline: tl[1].placeholder, // old f8 → new f8 (same slot; audited reuse table matches f8)
    ph_addreq: arPh.placeholder,
    ph_uploadspec: us.placeholder,
    ph_uploadlogo: ul.placeholder,
  };
}

function assertLabels(loc, d) {
  const labels = [
    d.catLabel,
    d.appLabel,
    d.qtyLabel,
    d.tmLabel,
    d.dcLabel,
    d.matLabel,
    d.engLabel,
    d.custLabel,
    d.tlLabel,
    d.arLabel,
    d.usLabel,
    d.ulLabel,
  ];
  labels.forEach((lab, i) => {
    if (lab === EN_NAMES[i]) throw new Error(`${loc}: label #${i} equals EN "${lab}"`);
  });
  if (eq(d.catOpts, EN_CAT_OPTS)) throw new Error(`${loc}: catOpts equals EN`);
  if (d.qtyPh === EN_QTY_PH) throw new Error(`${loc}: qtyPh equals EN`);
  if (d.dcPh === EN_DC_PH) throw new Error(`${loc}: dcPh equals EN`);
}

function verifyTerminal(doc2, loc, d, r) {
  const f2 = doc2.content_form.fields;
  if (f2.length !== 12) throw new Error(`${loc}: terminal fields.length=${f2.length}`);
  f2.forEach((x, i) => {
    if (x.type !== EN_TYPES[i]) throw new Error(`${loc}: terminal f${i}.type=${x.type}`);
    if ((x.options || []).length !== EN_OPTS_LEN[i])
      throw new Error(`${loc}: terminal f${i} options=${(x.options || []).length}`);
  });
  const names = [
    d.catLabel,
    d.appLabel,
    d.qtyLabel,
    d.tmLabel,
    d.dcLabel,
    d.matLabel,
    d.engLabel,
    d.custLabel,
    d.tlLabel,
    d.arLabel,
    d.usLabel,
    d.ulLabel,
  ];
  const phs = [
    null,
    null,
    d.qtyPh,
    r.ph_target,
    d.dcPh,
    null,
    r.ph_engine,
    r.ph_custom,
    r.ph_timeline,
    r.ph_addreq,
    r.ph_uploadspec,
    r.ph_uploadlogo,
  ];
  f2.forEach((x, i) => {
    if (x.name !== names[i]) throw new Error(`${loc}: terminal f${i}.name=${JSON.stringify(x.name)}`);
    if (phs[i] !== null && x.placeholder !== phs[i]) throw new Error(`${loc}: terminal f${i}.placeholder mismatch`);
    if (phs[i] === null && x.placeholder !== undefined)
      throw new Error(`${loc}: terminal f${i} unexpected placeholder`);
  });
  if (!eq(f2[0].options, d.catOpts)) throw new Error(`${loc}: terminal catOpts mismatch`);
  if (!eq(f2[1].options, r.appOptions)) throw new Error(`${loc}: terminal appOptions mismatch`);
  if (!eq(f2[5].options, r.matOptions)) throw new Error(`${loc}: terminal matOptions mismatch`);
}

async function main() {
  const ops = [];

  for (const loc of LOCALES) {
    const rel = 'src/data/pages/' + loc + '/request-quotation.yaml';
    const raw = fs.readFileSync(REPO + '/' + rel, 'utf8');
    const clean = await prettier.format(raw, PRETTIER_OPTS);
    if (clean !== raw) throw new Error(`${loc}: disk file is not prettier-clean`);
    const doc = yaml.load(raw);
    const d = DATA[loc];
    if (!d) throw new Error(`${loc}: missing from _b48-data.cjs`);
    assertLabels(loc, d);
    const r = extractReuse(doc, loc);

    const { start, end } = blockSpan(raw);
    const find = raw.slice(start, end);
    const head = raw.slice(0, start);
    const tail = raw.slice(end);
    if (raw.split(find).length - 1 !== 1) throw new Error(`${loc}: find block not unique`);

    const patched = head + emitBlock(d, r) + tail;
    const pretty = await prettier.format(patched, PRETTIER_OPTS);
    const pretty2 = await prettier.format(pretty, PRETTIER_OPTS);
    if (pretty !== pretty2) throw new Error(`${loc}: prettier output not stable`);
    const span2 = blockSpan(pretty);
    const rep = pretty.slice(span2.start, span2.end);
    if (pretty !== head + rep + tail) throw new Error(`${loc}: prettier touched text outside the block`);
    if (pretty.split(rep).length - 1 !== 1) throw new Error(`${loc}: rep block not unique in terminal file`);

    const doc2 = yaml.load(pretty);
    verifyTerminal(doc2, loc, d, r);
    for (const key of ['meta', 'hero_text', 'steps2_process', 'cta']) {
      if (!eq(doc2[key], doc[key])) throw new Error(`${loc}: ${key} changed`);
    }
    const cfO = { ...doc.content_form };
    const cfN = { ...doc2.content_form };
    delete cfO.fields;
    delete cfN.fields;
    if (!eq(cfN, cfO)) throw new Error(`${loc}: content_form (sans fields) changed`);

    ops.push({ f: rel, find, rep, n: 1 });
    console.log(`${loc}: block op ${find.length}->${rep.length} chars`);
  }

  // fr — 4 line ops
  const frRel = 'src/data/pages/fr/request-quotation.yaml';
  const frRaw = fs.readFileSync(REPO + '/' + frRel, 'utf8');
  if ((await prettier.format(frRaw, PRETTIER_OPTS)) !== frRaw) throw new Error('fr: disk file is not prettier-clean');
  const fx = DATA.frFixes;
  const ADDREQ_PFX = '      placeholder: ';
  if (!fx.addreqFind.startsWith(ADDREQ_PFX) || !fx.addreqRep.startsWith(ADDREQ_PFX))
    throw new Error('fr: addreq find/rep must start with placeholder indent');
  const frPairs = [
    { find: fx.heroTaglineFind, rep: fx.heroTaglineRep },
    { find: fx.stepsTitleFind, rep: fx.stepsTitleRep },
    { find: fx.taglineFind, rep: fx.taglineRep },
    { find: fx.addreqFind, rep: fx.addreqRep },
  ];
  let frSim = frRaw;
  for (const p of frPairs) {
    if (frSim.split(p.find).length - 1 !== 1)
      throw new Error('fr: find not exactly once: ' + JSON.stringify(p.find.slice(0, 60)));
    frSim = frSim.replace(p.find, p.rep);
  }
  const frPretty = await prettier.format(frSim, PRETTIER_OPTS);
  if ((await prettier.format(frPretty, PRETTIER_OPTS)) !== frPretty) throw new Error('fr: prettier output not stable');
  for (const p of frPairs) {
    if (frPretty.split(p.find).length - 1 !== 0)
      throw new Error('fr: find remains after prettier: ' + JSON.stringify(p.find.slice(0, 60)));
    if (frPretty.split(p.rep).length - 1 !== 1)
      throw new Error('fr: rep not exactly once after prettier: ' + JSON.stringify(p.rep.slice(0, 60)));
  }
  const frDoc0 = yaml.load(frRaw);
  const frDoc1 = yaml.load(frPretty);
  if (frDoc1.hero_text.tagline !== 'Obtenir un devis') throw new Error('fr: hero tagline wrong');
  if (frDoc1.steps2_process.title !== 'Comment ça fonctionne') throw new Error('fr: steps title wrong');
  if (frDoc1.content_form.tagline !== 'Formulaire de demande de devis')
    throw new Error('fr: content_form tagline wrong');
  if (frDoc1.content_form.fields[9].placeholder !== fx.addreqRep.slice(ADDREQ_PFX.length))
    throw new Error('fr: addreq placeholder wrong');
  const cf0 = { ...frDoc0.content_form };
  const cf1 = { ...frDoc1.content_form };
  delete cf0.fields;
  delete cf1.fields;
  delete cf0.tagline;
  delete cf1.tagline;
  if (!eq(cf1, cf0) || !eq(frDoc1.meta, frDoc0.meta) || !eq(frDoc1.cta, frDoc0.cta))
    throw new Error('fr: unrelated content changed');
  if (frDoc1.hero_text.title !== frDoc0.hero_text.title || frDoc1.hero_text.subtitle !== frDoc0.hero_text.subtitle)
    throw new Error('fr: hero_text changed beyond tagline');
  if (
    !eq(frDoc1.steps2_process.items, frDoc0.steps2_process.items) ||
    frDoc1.steps2_process.subtitle !== frDoc0.steps2_process.subtitle
  )
    throw new Error('fr: steps2_process changed beyond title');
  for (const p of frPairs) ops.push({ f: frRel, find: p.find, rep: p.rep, n: 1 });

  // serialize ops file (prettier-compatible singleQuote CJS, same q() as 47c)
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
    '// shard 48 (GENERATED by _gen-ops-48.cjs — do not edit by hand)',
    '// 23 ops — request-quotation content_form structural drift: 19 whole-block replacements (old broken',
    '// 12-field structure -> EN-root-isomorphic structure; 20 new strings per locale from _b48-data.cjs,',
    '// app/material options + 7 placeholders reused from each locale) + 4 fr EN-residue line fixes.',
    '// rep blocks are prettier-terminal forms extracted via the repo prettier (47c lesson). See TECH.md L38.',
    '// Whole-block ops: find = exact on-disk `  fields:`..pre-`cta:` text; structure asserted by generator.',
  ].join('\n');
  fs.writeFileSync(OPS_PATH, header + '\nmodule.exports = [\n' + body + '\n];\n');

  // post-write verification
  delete require.cache[require.resolve(OPS_PATH)];
  const ops2 = require(OPS_PATH);
  if (ops2.length !== 23) throw new Error('post-write: op count ' + ops2.length);
  const deRaw = fs.readFileSync(REPO + '/src/data/pages/de/request-quotation.yaml', 'utf8');
  if (deRaw.split(ops2[0].find).length - 1 !== 1) throw new Error('post-write: op #0 find does not match disk');
  const frRaw2 = fs.readFileSync(REPO + '/src/data/pages/fr/request-quotation.yaml', 'utf8');
  if (!frPairs.every((p, i) => ops2[19 + i].find === p.find && ops2[19 + i].rep === p.rep))
    throw new Error('post-write: fr ops mismatch');
  if (frRaw2.split(fx.addreqFind).length - 1 !== 1) throw new Error('post-write: fr addreq find does not match disk');
  console.log('\n48 OK: wrote 23 ops (19 block + 4 fr line) to _ops-data-48.cjs');
}

main().catch((e) => {
  console.error('GEN FAIL:', e.message);
  process.exit(1);
});
