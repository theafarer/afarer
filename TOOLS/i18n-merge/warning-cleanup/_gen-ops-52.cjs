// shard 52 generator — contact form STRUCTURAL repair (TECH.md L42 / 挂账⑨).
//
// Damage (all 20 locales, introduced at translation commit db928cfa): the 13-field block was
// re-assembled on a wrong skeleton — firstName/lastName/companyName/address received the three
// select option groups (optionsKey 'countries' landed on firstName, translated), orderVolume got
// type:select + withCountryCode, customization/productInterest lost type+options, tel lost
// withCountryCode, email lost type:email, rows scrambled, and machine option `value` strings were
// translated. fr additionally had field NAMES translated (pays/adresse/code postal) and type
// values ('sélectionner') — FormData keys broken. Runtime: Contact.astro only honors
// optionsKey === 'countries' → country dropdown empty in 19/20 locales.
//
// Op shape per locale: ONE whole-block replacement (find = exact on-disk `  fields:`..
// pre-`features2_other_ways:` text; rep = EN-root structure with the locale's own labels) plus
// line ops where needed: 13 fresh submit_button (lost "→ Get a Quote" tail), 7 phone '+86'
// prefix restorations, 3 fresh hero_text.title (ja/ko/th title==tagline dups), 2 ja address
// simplified-character repairs. 13 field labels + 3x5 option labels are REUSED from each
// locale's disk content (19 locales by canonical field name, fr by position); 19 option-label
// quality fixes come from _b52-data.cjs.
//
// 47c/48 lesson: rep is NOT hand-serialized — the generator builds the simulated patched file,
// runs the repo prettier (yaml, singleQuote) over it, extracts the PRETTIER-STABLE terminal
// forms, then asserts that applying the ops engine-style onto raw reproduces the terminal
// byte-exactly. Prettier preserves author quoting (verified: ja disk has unquoted +86, EN root
// quoted, both prettier-clean), so emitted quote forms persist into the terminal.
//
// Chain check: every prior op (shards 01..51) touching these files must classify 'already' on
// BOTH raw and terminal (shard 14: el/ro/th address+description, de dcc; shard 34: dcc x5,
// afar→afarer brand fixes — all outside this shard's changed regions).
//
// Run ONCE against pre-patch state: node _gen-ops-52.cjs   (delete output first, or --force)
// Output: _ops-data-52.cjs (45 ops = 20 block + 13 submit + 3 hero + 7 phone + 2 ja address).
const fs = require('fs');

const REPO = 'E:/github/afarer';
const yaml = require(REPO + '/node_modules/js-yaml');
const prettier = require(REPO + '/node_modules/prettier');

const DIR = 'E:/github/afarer/TOOLS/i18n-merge/warning-cleanup';
const OPS_PATH = DIR + '/_ops-data-52.cjs';
if (fs.existsSync(OPS_PATH) && !process.argv.includes('--force')) {
  throw new Error('_ops-data-52.cjs already exists — delete it first (generator runs on pre-patch state only)');
}

const D = require('./_b52-data.cjs');

const LOCALES = [
  'ar',
  'cs',
  'da',
  'de',
  'el',
  'es',
  'fi',
  'fr',
  'it',
  'ja',
  'ko',
  'nl',
  'no',
  'pl',
  'pt',
  'ro',
  'ru',
  'sv',
  'th',
  'tr',
];
const PRETTIER_OPTS = { parser: 'yaml', printWidth: 120, singleQuote: true, tabWidth: 2, useTabs: false };
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// EN root SSOT (src/data/pages/contact.yaml)
const enRaw = fs.readFileSync(REPO + '/src/data/pages/contact.yaml', 'utf8');
const enDoc = yaml.load(enRaw);
const EN_FIELDS = enDoc.contact_form.fields;
const EN_SUBMIT = enDoc.contact_form.submit_button;
const EN_LABELS = {};
EN_FIELDS.forEach((f) => (EN_LABELS[f.name] = f.label));
const CANON = EN_FIELDS.map((f) => f.name);
const GROUP_OF = { orderVolume: 0, customization: 1, productInterest: 2 };
if (EN_FIELDS.length !== 13 || !eq(CANON.slice(0, 4), ['country', 'orderVolume', 'customization', 'productInterest'])) {
  throw new Error('EN root structure unexpected: ' + JSON.stringify(CANON));
}

// damaged-disk skeletons (probe-verified uniform)
const SKELETON19 = [
  'firstName',
  'lastName',
  'companyName',
  'address',
  'zip',
  'country',
  'email',
  'tel',
  'orderVolume',
  'customization',
  'productInterest',
  'subject',
  'message',
];
const SKELETON_FR = [
  'pays',
  'orderVolume',
  'customization',
  'productInterest',
  'firstName',
  'lastName',
  'companyName',
  'email',
  'tel',
  'adresse',
  'code postal',
  'subject',
  'message',
];

// ---------- helpers ----------
const count = (text, s) => text.split(s).length - 1;

function replaceOnce(text, find, rep) {
  if (count(text, find) !== 1)
    throw new Error('replaceOnce: find count ' + count(text, find) + ' for ' + JSON.stringify(find.slice(0, 60)));
  return text.replace(find, rep);
}

function blockSpan(text) {
  const fc = text.split('\n  fields:\n').length - 1;
  const cc = text.split('\nfeatures2_other_ways:\n').length - 1;
  if (fc !== 1 || cc !== 1) throw new Error('span markers not unique (fields=' + fc + ', features2=' + cc + ')');
  return { start: text.indexOf('\n  fields:\n') + 1, end: text.indexOf('\nfeatures2_other_ways:\n') + 1 };
}

function heroSpan(text) {
  const h = text.indexOf('\nhero_text:\n');
  const c = text.indexOf('\ncontact_form:\n');
  if (h < 0 || c < 0 || h >= c) throw new Error('hero_text span not found');
  return { start: h + 1, end: c + 1 };
}

function lineByPrefix(text, pred, what) {
  const hits = text.split('\n').filter(pred);
  if (hits.length !== 1) throw new Error(what + ' matched ' + hits.length + ' lines');
  return hits[0];
}

// scalar serializer (48 lesson) — labels and canonical field names
function v(s) {
  if (typeof s !== 'string' || s.length === 0) throw new Error('empty/non-string scalar');
  if (s.includes("'")) return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  if (/^[\s!\-&*?|>%@`",\[\]{}#]|:\s|\s#|\s$|:#?$/.test(s)) return "'" + s + "'";
  return s;
}

// option VALUE serializer — quote like the EN root ('', '5-10', '100-500', '500-plus'; plain enum words)
function vv(s) {
  if (typeof s !== 'string') throw new Error('non-string value');
  if (s === '' || /^[0-9+]/.test(s)) return "'" + s + "'";
  return s;
}

function emitFieldsBlock(labels, opt) {
  const L = ['  fields:'];
  for (const f of EN_FIELDS) {
    L.push('    - name: ' + v(f.name));
    L.push('      label: ' + v(labels[f.name]));
    if (f.row !== undefined) L.push('      row: ' + f.row);
    if (f.type !== undefined) L.push('      type: ' + f.type);
    if (f.withCountryCode !== undefined) L.push('      withCountryCode: ' + f.withCountryCode);
    if (f.optionsKey !== undefined) L.push('      optionsKey: ' + f.optionsKey);
    if (f.rows !== undefined) L.push('      rows: ' + f.rows);
    if (Array.isArray(f.options)) {
      const gi = GROUP_OF[f.name];
      if (gi === undefined) throw new Error('no group mapping for ' + f.name);
      L.push('      options:');
      f.options.forEach((o, i) => {
        L.push('        - value: ' + vv(o.value));
        L.push('          label: ' + v(opt[gi][i]));
      });
    }
    if (f.step !== undefined) L.push('      step: ' + f.step);
  }
  return L.join('\n') + '\n';
}

// engine classification mirror (_patch-warnings.cjs L66-82)
function engineClass(text, op) {
  const n = op.n || 1;
  const fc = text.split(op.find).length - 1;
  const rc = text.split(op.rep).length - 1;
  if (fc === n && !(rc >= n && op.rep.includes(op.find))) return 'apply';
  if ((fc === 0 && rc >= n) || (fc === n && rc >= n && op.rep.includes(op.find))) return 'already';
  return 'err';
}

// ---------- data table validation ----------
function validateData() {
  const expectSubmits = ['ar', 'de', 'el', 'it', 'ja', 'ko', 'nl', 'no', 'pl', 'pt', 'ru', 'sv', 'tr'];
  if (!eq(Object.keys(D.submits).sort(), expectSubmits.slice().sort()))
    throw new Error('submits keys mismatch: ' + Object.keys(D.submits).join(','));
  for (const [loc, s] of Object.entries(D.submits)) {
    if (typeof s !== 'string' || !s) throw new Error('submits.' + loc + ' empty');
    if (!s.includes(' → ')) throw new Error('submits.' + loc + ' missing " → "');
    if (s === EN_SUBMIT) throw new Error('submits.' + loc + ' equals EN');
    if (s.includes('afar')) throw new Error('submits.' + loc + ' mentions brand');
    if (/^\s|\s$|^['"]|['"]$/.test(s)) throw new Error('submits.' + loc + ' stray whitespace/quotes');
  }
  if (!eq(Object.keys(D.heroTitles).sort(), ['ja', 'ko', 'th'])) throw new Error('heroTitles keys mismatch');
  for (const [loc, t] of Object.entries(D.heroTitles)) {
    if (typeof t !== 'string' || !t) throw new Error('heroTitles.' + loc + ' empty');
    if (t === 'GET IN TOUCH' || t.includes('afar') || t.includes('→'))
      throw new Error('heroTitles.' + loc + ' invalid');
  }
  if (!eq(D.phoneLocales.slice().sort(), ['de', 'es', 'it', 'nl', 'pl', 'pt', 'ru'].sort()))
    throw new Error('phoneLocales mismatch');
  if (D.phoneNewValue !== '+86 13305324192' || D.phoneOldValue !== '86 13305324192')
    throw new Error('phone values mismatch');
  if (!D.jaAddrNew.includes('\u9752\u5cf6\u5e02') || !D.jaAddrNew.includes('\u840a\u897f'))
    throw new Error('jaAddrNew missing traditional forms');
  if (D.jaAddrNew.includes('\u9752\u5c9b\u5e02') || D.jaAddrNew.includes('\u83b1\u897f'))
    throw new Error('jaAddrNew still simplified');
  const fixLocales = Object.keys(D.optFixes);
  if (fixLocales.some((l) => !LOCALES.includes(l) || l === 'fr'))
    throw new Error('optFixes bad locale: ' + fixLocales.join(','));
  let fixCount = 0;
  for (const [loc, fx] of Object.entries(D.optFixes)) {
    for (const [k, val] of Object.entries(fx)) {
      if (!/^o[0-2]c[0-4]$/.test(k)) throw new Error('optFixes.' + loc + '.' + k + ' bad key');
      if (typeof val !== 'string' || !val || val.includes('afar'))
        throw new Error('optFixes.' + loc + '.' + k + ' invalid value');
      fixCount++;
    }
  }
  if (fixCount !== 19) throw new Error('optFixes count ' + fixCount + ' != 19');
}

// ---------- main ----------
async function main() {
  validateData();
  if ((await prettier.format(enRaw, PRETTIER_OPTS)) !== enRaw) throw new Error('EN root not prettier-clean');

  // prior ops for the chain check
  const priorOps = [];
  for (const fn of fs
    .readdirSync(DIR)
    .filter((f) => /^_ops-data-\d+\.cjs$/.test(f))
    .sort()) {
    if (fn === '_ops-data-52.cjs') continue;
    const arr = require(DIR + '/' + fn);
    if (!Array.isArray(arr)) throw new Error(fn + ' does not export an array');
    for (const op of arr) priorOps.push({ src: fn, op });
  }
  console.log('chain check pool: ' + priorOps.length + ' prior ops');

  const ops = [];
  const warnings = [];
  const terminalByRel = new Map();

  for (const loc of LOCALES) {
    const rel = 'src/data/pages/' + loc + '/contact.yaml';
    const raw = fs.readFileSync(REPO + '/' + rel, 'utf8');
    if ((await prettier.format(raw, PRETTIER_OPTS)) !== raw) throw new Error(loc + ': disk not prettier-clean');
    const doc = yaml.load(raw);
    const fields = doc.contact_form.fields;
    if (!Array.isArray(fields) || fields.length !== 13)
      throw new Error(loc + ': fields.length=' + (fields && fields.length));

    // skeleton assertion + label extraction
    const labels = {};
    if (loc === 'fr') {
      if (
        !eq(
          fields.map((f) => f.name),
          SKELETON_FR
        )
      )
        throw new Error(loc + ': fr skeleton mismatch');
      if (fields[0].type !== 's\u00e9lectionner' || fields[0].optionsKey !== 'countries')
        throw new Error(loc + ': fr f0 marker mismatch');
      fields.forEach((f, i) => (labels[CANON[i]] = f.label));
    } else {
      if (
        !eq(
          fields.map((f) => f.name),
          SKELETON19
        )
      )
        throw new Error(loc + ': skeleton mismatch');
      if (
        fields[0].type !== 'select' ||
        typeof fields[0].optionsKey !== 'string' ||
        fields[0].optionsKey === 'countries'
      ) {
        throw new Error(loc + ': f0 smear marker missing');
      }
      fields.forEach((f) => (labels[f.name] = f.label));
    }
    for (const name of CANON) {
      if (typeof labels[name] !== 'string' || !labels[name]) throw new Error(loc + ': label missing for ' + name);
      if (labels[name] === EN_LABELS[name] && name !== 'tel' && name !== 'email') {
        warnings.push(loc + ': label of ' + name + ' equals EN ("' + labels[name] + '")');
      }
    }

    // option groups (reused) + quality fixes
    const withOpts = fields.filter((f) => Array.isArray(f.options));
    if (withOpts.length !== 3) throw new Error(loc + ': option groups ' + withOpts.length);
    const OPT = withOpts.map((f) => f.options.map((o) => o.label));
    OPT.forEach((g, gi) => {
      if (g.length !== 5) throw new Error(loc + ': OPT' + gi + ' length ' + g.length);
      g.forEach((l) => {
        if (typeof l !== 'string' || !l) throw new Error(loc + ': OPT' + gi + ' empty label');
      });
    });
    for (const [k, val] of Object.entries(D.optFixes[loc] || {})) {
      const gi = +k[1];
      const ci = +k[3];
      if (OPT[gi][ci] === val) throw new Error(loc + ': fix ' + k + ' equals current value');
      OPT[gi][ci] = val;
    }

    // ---- collect find/rep pairs (order = engine application order)
    const pairs = [];

    // block op
    const span = blockSpan(raw);
    const blockFind = raw.slice(span.start, span.end);
    if (count(raw, blockFind) !== 1) throw new Error(loc + ': block find not unique');
    let sim = raw.slice(0, span.start) + emitFieldsBlock(labels, OPT) + raw.slice(span.end);

    // submit line (13 locales)
    let submitPair = null;
    if (D.submits[loc]) {
      const find = lineByPrefix(raw, (l) => l.startsWith('  submit_button: '), loc + ' submit line');
      const cur = doc.contact_form.submit_button;
      if (cur.includes('→')) throw new Error(loc + ': current submit already has arrow');
      if (!find.endsWith(cur)) throw new Error(loc + ': submit line/value mismatch');
      sim = replaceOnce(sim, find, '  submit_button: ' + D.submits[loc]);
      submitPair = { find };
    } else if (!doc.contact_form.submit_button.includes('→')) {
      warnings.push(loc + ': submit lacks arrow but not in submits table');
    }

    // hero title (ja/ko/th) — two-line anchor (tagline+title) for uniqueness
    let heroPair = null;
    if (D.heroTitles[loc]) {
      if (doc.hero_text.title !== doc.hero_text.tagline) throw new Error(loc + ': hero title not a tagline dup');
      const hs = heroSpan(raw);
      const heroBlock = raw.slice(hs.start, hs.end);
      const tagline = lineByPrefix(heroBlock, (l) => l.startsWith('  tagline: '), loc + ' hero tagline');
      const title = lineByPrefix(heroBlock, (l) => l.startsWith('  title: '), loc + ' hero title');
      const find = tagline + '\n' + title;
      if (count(raw, find) !== 1) throw new Error(loc + ': hero find not unique');
      sim = replaceOnce(sim, find, tagline + '\n  title: ' + D.heroTitles[loc]);
      heroPair = { find };
    }

    // phone line (7 locales)
    let phonePair = null;
    const phoneItem = doc.features2_other_ways.items[3];
    if (phoneItem.icon !== 'tabler:headset') throw new Error(loc + ': items[3] is not Phone');
    if (D.phoneLocales.includes(loc)) {
      if (phoneItem.description !== D.phoneOldValue)
        throw new Error(loc + ': phone value ' + JSON.stringify(phoneItem.description));
      const find = lineByPrefix(
        raw,
        (l) => l.startsWith('      description: ') && l.includes(D.phoneOldValue) && !l.includes(D.phoneNewValue),
        loc + ' phone line'
      );
      sim = replaceOnce(sim, find, "      description: '" + D.phoneNewValue + "'");
      phonePair = { find };
    } else if (phoneItem.description !== D.phoneNewValue) {
      warnings.push(loc + ': phone not canonical: ' + JSON.stringify(phoneItem.description));
    }

    // ja address (2 lines)
    let jaDescPair = null;
    let jaAddrPair = null;
    if (loc === 'ja') {
      const hq = doc.features2_other_ways.items[5];
      if (hq.icon !== 'tabler:map-pin') throw new Error('ja: items[5] is not HQ');
      if (hq.description !== doc.map.address) throw new Error('ja: hq desc != map address');
      if (!hq.description.includes('\u9752\u5c9b\u5e02') || !hq.description.includes('\u83b1\u897f'))
        throw new Error('ja: simplified chars missing');
      const computed = hq.description
        .split('\u9752\u5c9b\u5e02')
        .join('\u9752\u5cf6\u5e02')
        .split('\u83b1\u897f')
        .join('\u840a\u897f');
      if (computed !== D.jaAddrNew) throw new Error('ja: computed addr != table: ' + computed);
      const dFind = lineByPrefix(
        raw,
        (l) => l.startsWith('      description: ') && l.includes('\u9752\u5c9b\u5e02'),
        'ja hq desc line'
      );
      const aFind = lineByPrefix(raw, (l) => l.startsWith('  address: '), 'ja map address line');
      if (!dFind.endsWith(hq.description) || !aFind.endsWith(doc.map.address))
        throw new Error('ja: address line/value mismatch');
      sim = replaceOnce(sim, dFind, '      description: ' + D.jaAddrNew);
      sim = replaceOnce(sim, aFind, '  address: ' + D.jaAddrNew);
      jaDescPair = { find: dFind };
      jaAddrPair = { find: aFind };
    }

    // ---- prettier terminal
    const pretty = await prettier.format(sim, PRETTIER_OPTS);
    if ((await prettier.format(pretty, PRETTIER_OPTS)) !== pretty)
      throw new Error(loc + ': prettier output not stable');

    // extract reps from the terminal
    const span2 = blockSpan(pretty);
    const blockRep = pretty.slice(span2.start, span2.end);
    if (count(pretty, blockRep) !== 1) throw new Error(loc + ': block rep not unique in terminal');
    pairs.push({ find: blockFind, rep: blockRep });

    if (submitPair) {
      const rep = lineByPrefix(pretty, (l) => l.startsWith('  submit_button: '), loc + ' terminal submit');
      if (!rep.endsWith(D.submits[loc])) throw new Error(loc + ': terminal submit value mismatch');
      pairs.push({ find: submitPair.find, rep });
    }
    if (heroPair) {
      const hs2 = heroSpan(pretty);
      const repTitle = lineByPrefix(
        pretty.slice(hs2.start, hs2.end),
        (l) => l.startsWith('  title: '),
        loc + ' terminal hero title'
      );
      if (!repTitle.endsWith(D.heroTitles[loc])) throw new Error(loc + ': terminal hero title mismatch');
      const tagline2 = lineByPrefix(
        pretty.slice(hs2.start, hs2.end),
        (l) => l.startsWith('  tagline: '),
        loc + ' terminal hero tagline'
      );
      pairs.push({ find: heroPair.find, rep: tagline2 + '\n' + repTitle });
    }
    if (phonePair) {
      const rep = lineByPrefix(
        pretty,
        (l) => l.startsWith('      description: ') && l.includes(D.phoneNewValue),
        loc + ' terminal phone'
      );
      pairs.push({ find: phonePair.find, rep });
    }
    if (jaDescPair) {
      const rep = lineByPrefix(
        pretty,
        (l) => l.startsWith('      description: ') && l.includes('\u9752\u5cf6\u5e02'),
        'ja terminal hq desc'
      );
      pairs.push({ find: jaDescPair.find, rep });
    }
    if (jaAddrPair) {
      const rep = lineByPrefix(pretty, (l) => l.startsWith('  address: '), 'ja terminal map address');
      pairs.push({ find: jaAddrPair.find, rep });
    }

    // ---- master assertion: engine-style application onto raw reproduces the terminal
    let eng = raw;
    for (const p of pairs) {
      if (p.rep.includes('afar')) throw new Error(loc + ': rep mentions brand');
      const fc = count(eng, p.find);
      if (fc !== 1) throw new Error(loc + ': engine find x' + fc + ' for ' + JSON.stringify(p.find.slice(0, 60)));
      eng = eng.split(p.find).join(p.rep);
    }
    if (eng !== pretty) throw new Error(loc + ': engine apply !== prettier terminal');

    // ---- structural verification of the terminal
    const doc2 = yaml.load(pretty);
    const expFields = EN_FIELDS.map((f) => {
      const g = { ...f };
      g.label = labels[f.name];
      if (Array.isArray(f.options)) {
        const gi = GROUP_OF[f.name];
        g.options = f.options.map((o, i) => ({ value: o.value, label: OPT[gi][i] }));
      }
      return g;
    });
    if (!eq(doc2.contact_form.fields, expFields)) throw new Error(loc + ': terminal fields !== expected structure');
    if (
      doc2.contact_form.fields.some((f) =>
        f.name === 'country' ? f.optionsKey !== 'countries' : f.optionsKey !== undefined
      )
    ) {
      throw new Error(loc + ': optionsKey wrong');
    }
    if (!eq(doc2.meta, doc.meta)) throw new Error(loc + ': meta changed');
    const expHero = D.heroTitles[loc] ? { ...doc.hero_text, title: D.heroTitles[loc] } : doc.hero_text;
    if (!eq(doc2.hero_text, expHero)) throw new Error(loc + ': hero_text changed unexpectedly');
    const cf0 = { ...doc.contact_form };
    const cf1 = { ...doc2.contact_form };
    delete cf0.fields;
    delete cf1.fields;
    delete cf0.submit_button;
    delete cf1.submit_button;
    if (!eq(cf1, cf0)) throw new Error(loc + ': contact_form (sans fields/submit) changed');
    if (D.submits[loc] && doc2.contact_form.submit_button !== D.submits[loc])
      throw new Error(loc + ': terminal submit mismatch');
    const expItems = doc.features2_other_ways.items.map((it, i) => {
      if (i === 3 && D.phoneLocales.includes(loc)) return { ...it, description: D.phoneNewValue };
      if (i === 5 && loc === 'ja') return { ...it, description: D.jaAddrNew };
      return it;
    });
    if (!eq(doc2.features2_other_ways, { ...doc.features2_other_ways, items: expItems }))
      throw new Error(loc + ': features2 changed unexpectedly');
    const expMap = loc === 'ja' ? { ...doc.map, address: D.jaAddrNew } : doc.map;
    if (!eq(doc2.map, expMap)) throw new Error(loc + ': map changed unexpectedly');

    // ---- chain check against prior shards
    for (const { src, op } of priorOps.filter((p) => p.op.f === rel)) {
      const c1 = engineClass(raw, op);
      const c2 = engineClass(pretty, op);
      if (c1 !== 'already' || c2 !== 'already') {
        throw new Error(
          loc + ': chain ' + src + ' raw=' + c1 + ' terminal=' + c2 + ' find=' + JSON.stringify(op.find.slice(0, 50))
        );
      }
    }

    for (const p of pairs) ops.push({ f: rel, find: p.find, rep: p.rep, n: 1 });
    terminalByRel.set(rel, pretty);
    console.log(
      loc +
        ': ' +
        pairs.length +
        ' ops (block' +
        (submitPair ? ' +submit' : '') +
        (heroPair ? ' +hero' : '') +
        (phonePair ? ' +phone' : '') +
        (jaDescPair ? ' +jaAddr x2' : '') +
        ')'
    );
  }

  if (ops.length !== 45) throw new Error('op count ' + ops.length + ' != 45');

  // ---------- serialize ops file ----------
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
    '// shard 52 (GENERATED by _gen-ops-52.cjs — do not edit by hand)',
    '// 45 ops — contact form structural repair (挂账⑨): 20 whole-block replacements rebuilding the',
    '// 13-field block on the EN-root skeleton (labels + option labels reused from each locale; 19',
    '// option-label quality fixes from _b52-data.cjs) + 13 fresh submit_button + 3 fresh hero title',
    '// (ja/ko/th tagline dups) + 7 phone "+86" restorations + 2 ja address simplified-char repairs.',
    '// rep blocks/lines are prettier-terminal forms; engine replay === terminal asserted per file.',
    '// Chain-checked: shard 14/34 ops on these files stay already-applied pre and post. See TECH.md L42.',
  ].join('\n');
  fs.writeFileSync(OPS_PATH, header + '\nmodule.exports = [\n' + body + '\n];\n');

  // ---------- post-write verification ----------
  delete require.cache[require.resolve(OPS_PATH)];
  const ops2 = require(OPS_PATH);
  if (ops2.length !== 45) throw new Error('post-write: op count ' + ops2.length);
  const byRel = new Map();
  for (const op of ops2) {
    if (!byRel.has(op.f)) byRel.set(op.f, []);
    byRel.get(op.f).push(op);
  }
  if (byRel.size !== 20) throw new Error('post-write: file count ' + byRel.size);
  for (const [rel, fileOps] of byRel) {
    let src = fs.readFileSync(REPO + '/' + rel, 'utf8');
    for (const op of fileOps) {
      const fc = src.split(op.find).length - 1;
      if (fc !== 1) throw new Error('post-write: ' + rel + ' find x' + fc);
      src = src.split(op.find).join(op.rep);
    }
    if (src !== terminalByRel.get(rel)) throw new Error('post-write: ' + rel + ' replay !== terminal');
  }

  console.log('\nwarnings (' + warnings.length + '):');
  warnings.forEach((w) => console.log('  WARN ' + w));
  console.log('\n52 OK: wrote 45 ops (20 block + 13 submit + 3 hero + 7 phone + 2 jaAddr) to _ops-data-52.cjs');
}

main().catch((e) => {
  console.error('GEN FAIL:', e.message);
  process.exit(1);
});
