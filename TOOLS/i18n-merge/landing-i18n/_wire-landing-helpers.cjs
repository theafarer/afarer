// landing-i18n helper patcher — rewrites the fr()/frArr() helper definition in each campaign
// page to a table-lookup version backed by src/i18n/generated/landing/<key>.ts.
// A page is patched ONLY when its data file src/data/landing-i18n/<key>.json exists (data-driven
// wiring: each shard ships page data + wiring together). Also fixes the 4 template-literal
// title call sites (fr(`X — ${SITE.name}`, ...) -> `${fr('X —', ...)} ${SITE.name}`) so their
// EN prefix becomes a plain extractable table key.
// Idempotent: pages already containing __landing are skipped as 'already'.
// Usage: node TOOLS/i18n-merge/landing-i18n/_wire-landing-helpers.cjs [--dry]
// After wiring, ALWAYS re-run _extract-landing.cjs (templ keys change) then _check-landing.cjs.
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..', '..', '..');
const BASE = path.join(REPO, 'src', 'pages', '[lang]');
const DATA_DIR = path.join(REPO, 'src', 'data', 'landing-i18n');

const PAGES = [
  'marine-industry/index.astro',
  'kids-sup.astro',
  'yoga-sup.astro',
  'fishing-sup.astro',
  'whitewater-sup.astro',
  'privacy.astro',
  'touring-sup.astro',
  'all-around-sup.astro',
  'sup-accessories.astro',
  'inflatable-sup.astro',
  'terms.astro',
  'whitepaper/oem-sup-manufacturing-guide.astro',
  'ultra-stable-sup.astro',
  'disclaimer.astro',
  'afarer-story.astro',
];

const HELPER = "const fr = (en: string, francais: string) => (lang === 'fr' ? francais : en);";
const HELPER_NEW =
  "const __lt = __landing[lang || ''] || {};\n" +
  "const fr = (en: string, francais: string) => __lt[en] || (lang === 'fr' ? francais : en);";
const FRARR_OLD = "const frArr = (en: string[], francais: string[]) => (lang === 'fr' ? francais : en);";
const FRARR_NEW =
  "const frArr = (en: string[], francais: string[]) => (lang === 'fr' ? francais : en.map((s) => __lt[s] || s));";
const TEMPL_RE = /fr\(`([^`\\]+) \$\{SITE\.name\}`, `([^`\\]+) \$\{SITE\.name\}`\)/g;

function pageKey(p) {
  return p
    .replace(/\.astro$/, '')
    .replace('/index', '')
    .replace(/\//g, '-');
}

const dry = process.argv.includes('--dry');
let applied = 0;
let already = 0;
let pending = 0;
let errors = 0;

for (const p of PAGES) {
  const key = pageKey(p);
  const full = path.join(BASE, p);
  let src;
  try {
    src = fs.readFileSync(full, 'utf8');
  } catch (e) {
    console.log('ERROR   ' + p + ': unreadable: ' + e.message);
    errors++;
    continue;
  }
  if (src.includes('__landing')) {
    already++;
    continue;
  }
  if (!fs.existsSync(path.join(DATA_DIR, key + '.json'))) {
    pending++;
    continue;
  }
  try {
    // 1. import line after last top import
    const importRe = /^import .*;$/gm;
    let last = null;
    let m;
    while ((m = importRe.exec(src)) !== null) last = m;
    if (!last) throw new Error('no import line found');
    const importLine = "import { landingI18n as __landing } from '~/i18n/generated/landing/" + key + "';";
    let out = src.slice(0, last.index + last[0].length) + '\n' + importLine + src.slice(last.index + last[0].length);

    // 2. helper replacement
    if (!out.includes(HELPER)) throw new Error('fr helper line not found (expected verbatim form)');
    out = out.replace(HELPER, HELPER_NEW);

    // 3. frArr replacement (marine-industry)
    if (out.includes(FRARR_OLD)) {
      out = out.replace(FRARR_OLD, FRARR_NEW);
    }

    // 4. templ title fix
    out = out.replace(TEMPL_RE, (_all, en, frVal) => "`${fr('" + en + "', '" + frVal + "')} ${SITE.name}`");

    if (!dry) fs.writeFileSync(full, out, 'utf8');
    console.log('APPLIED ' + p);
    applied++;
  } catch (e) {
    console.log('ERROR   ' + p + ': ' + e.message);
    errors++;
  }
}

console.log('---');
console.log(
  'wire-landing-helpers: applied: ' +
    applied +
    ', already: ' +
    already +
    ', pending(no data): ' +
    pending +
    ', errors: ' +
    errors +
    (dry ? ' (DRY)' : '')
);
if (errors > 0) process.exit(1);
