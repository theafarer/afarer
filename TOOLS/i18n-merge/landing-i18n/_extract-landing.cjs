// landing-i18n extractor — scans fr()/frArr() call sites in the campaign pages and emits
// _landing-manifest.json: per page, deduped list of { en, fr, shape, line }.
// EN strings are the table keys (unescaped source literals); shapes: plain | templ | arr | other.
// Also prints diagnostics for non-plain shapes so they can be triaged.
// Re-runnable: manifest is derived from source state (no pre/post-patch distinction).
const fs = require('fs');
const path = require('path');

const REPO = 'E:/github/afarer';
const BASE = REPO + '/src/pages/[lang]';
const DIR = REPO + '/TOOLS/i18n-merge/landing-i18n';
const OUT = DIR + '/_landing-manifest.json';

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

// minimal JS string-literal scanner
function scanString(src, i) {
  // src[i] is a quote char; returns { value, unescaped, end } or null
  const q = src[i];
  let j = i + 1;
  let raw = '';
  while (j < src.length) {
    const c = src[j];
    if (c === '\\') {
      raw += c + (src[j + 1] || '');
      j += 2;
      continue;
    }
    if (c === q) return { raw, end: j + 1, unescaped: unescapeJs(raw), templ: q === '`' };
    if (c === '\n') return null; // literals don't span lines in our sources
    raw += c;
    j++;
  }
  return null;
}
function unescapeJs(s) {
  return s
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\`/g, '`')
    .replace(/\\\\/g, '\\')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t');
}

function skipWs(src, i) {
  while (i < src.length && /\s/.test(src[i])) i++;
  return i;
}

// parse first fr() argument starting at index i (just after 'fr(')
function parseArg(src, i) {
  i = skipWs(src, i);
  const c = src[i];
  if (c === "'" || c === '"' || c === '`') {
    const r = scanString(src, i);
    if (!r) return { shape: 'other', en: src.slice(i, i + 60).replace(/\n/g, '\\n') };
    return { shape: r.templ ? 'templ' : 'plain', en: r.unescaped, end: r.end };
  }
  if (c === '[') {
    const items = [];
    let j = skipWs(src, i + 1);
    while (src[j] !== ']' && j < src.length) {
      if (src[j] === "'" || src[j] === '"' || src[j] === '`') {
        const r = scanString(src, j);
        if (!r) return { shape: 'other', en: src.slice(i, i + 60).replace(/\n/g, '\\n') };
        items.push(r.unescaped);
        j = skipWs(src, r.end);
      } else {
        // non-string element (expression) — flag whole call as other
        return { shape: 'other', en: src.slice(i, i + 60).replace(/\n/g, '\\n') };
      }
      if (src[j] === ',') j = skipWs(src, j + 1);
    }
    return { shape: 'arr', en: items, end: j + 1 };
  }
  return { shape: 'other', en: src.slice(i, i + 60).replace(/\n/g, '\\n') };
}

// parse the SECOND argument (fr reference value) — best effort
function parseSecond(src, i) {
  i = skipWs(src, i);
  if (i >= src.length || src[i] !== ',') return '';
  i = skipWs(src, i + 1);
  const c = src[i];
  if (c === "'" || c === '"' || c === '`') {
    const r = scanString(src, i);
    if (r) return r.unescaped;
  }
  if (c === '[') {
    const a = parseArg(src, i);
    if (Array.isArray(a.en)) return JSON.stringify(a.en);
  }
  return '';
}

function lineOfIndex(src, idx) {
  let n = 1;
  for (let i = 0; i < idx && i < src.length; i++) if (src[i] === '\n') n++;
  return n;
}

const manifest = { pages: {}, generatedAt: new Date().toISOString() };
const diagnostics = [];
let totalCalls = 0;
let totalKeys = 0;

for (const p of PAGES) {
  const full = BASE + '/' + p;
  const src = fs.readFileSync(full, 'utf8');
  const entries = []; // {en, fr, shape, line}
  const seen = new Map(); // en -> index in entries
  const re = /\bfr(?:Arr)?\(/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    totalCalls++;
    const callStart = m.index;
    const argStart = m.index + m[0].length;
    const arg = parseArg(src, argStart);
    const frVal = parseSecond(src, arg.end !== undefined ? arg.end : argStart);
    const line = lineOfIndex(src, callStart);
    const isArr = Array.isArray(arg.en);
    const keys = isArr ? arg.en : [arg.en];
    for (const k of keys) {
      if (!k) continue;
      if (seen.has(k)) continue;
      seen.set(k, entries.length);
      entries.push({ en: k, fr: isArr ? '' : frVal, shape: isArr ? 'plain' : arg.shape, line });
      totalKeys++;
    }
    if (arg.shape !== 'plain' && arg.shape !== 'arr') {
      diagnostics.push({ page: p, line, shape: arg.shape, raw: arg.en });
    } else if (arg.shape === 'templ') {
      diagnostics.push({ page: p, line, shape: 'templ', raw: String(arg.en).slice(0, 100) });
    }
  }
  manifest.pages[p] = entries;
}

fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log('manifest written: ' + OUT);
console.log('calls scanned: ' + totalCalls + ', unique EN keys: ' + totalKeys);
console.log('\nper page:');
for (const p of PAGES) {
  console.log('  ' + p.padEnd(44) + String(manifest.pages[p].length).padStart(4) + ' keys');
}
console.log('\nnon-plain diagnostics (' + diagnostics.length + '):');
for (const d of diagnostics) {
  console.log('  [' + d.shape + '] ' + d.page + ' L' + d.line + ': ' + JSON.stringify(d.raw.slice(0, 90)));
}
