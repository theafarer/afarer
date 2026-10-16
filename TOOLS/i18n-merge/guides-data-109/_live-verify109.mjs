// Live verification for shard 109 (guides ja/ko) — run AFTER Cloudflare Pages deploy.
// Usage: node TOOLS/i18n-merge/guides-data-109/_live-verify109.mjs
// NOTE: Node undici fetch does NOT support file:// — read local files with fs.
//       Direct https to afarer.com is blocked in this environment; requests go through
//       curl.exe --socks5-hostname 127.0.0.1:10908 (same local proxy as the git push).
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const execFileAsync = promisify(execFile);

const ROOT = 'E:/github/afarer';
const BASE = 'https://afarer.com';

let pass = 0;
const errors = [];
const ok = (tag, msg) => {
  pass++;
  if (process.argv.includes('-v')) console.log('  PASS ' + tag + ' ' + msg);
};
const bad = (tag, msg) => {
  errors.push(tag + ' ' + msg);
  console.log('  FAIL ' + tag + ' ' + msg);
};

function loadEnGuides() {
  const ts = fs.readFileSync(path.join(ROOT, 'src/data/guides.ts'), 'utf8');
  const marker = 'export const guides: GuideRecord[] =';
  const at = ts.indexOf(marker);
  if (at < 0) throw new Error('guides.ts marker not found');
  const slice = ts.slice(at + marker.length);
  const start = slice.indexOf('[');
  const end = slice.indexOf('];');
  const guides = eval(slice.slice(start, end + 1));
  if (!Array.isArray(guides) || guides.length !== 29) throw new Error('EN guides != 29');
  return guides;
}
const loadYaml = (f) => {
  const d = yaml.load(fs.readFileSync(path.join(ROOT, 'src/data', f), 'utf8'));
  if (!Array.isArray(d) || d.length !== 29) throw new Error(f + ' != 29');
  return d;
};
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
const contains = (html, needle) => decode(html).includes(needle) || html.includes(needle);

async function fetchPage(url) {
  // curl follows 308 trailing-slash redirects via -L; status marker appended after body
  const marker = '__CURL_STATUS__';
  try {
    const { stdout } = await execFileAsync(
      'curl.exe',
      [
        '-s',
        '-L',
        '--max-time',
        '30',
        '--socks5-hostname',
        '127.0.0.1:10908',
        '-w',
        '\n' + marker + '%{http_code}',
        url,
      ],
      { maxBuffer: 20 * 1024 * 1024, encoding: 'utf8' }
    );
    const at = stdout.lastIndexOf(marker);
    if (at < 0) return { status: 0, html: null };
    const status = parseInt(stdout.slice(at + marker.length), 10);
    const html = stdout.slice(0, at - 1); // drop the \n before marker
    if (status !== 200) return { status, html: null };
    return { status, html };
  } catch (e) {
    return { status: 0, html: null, err: e.message };
  }
}

const enGuides = loadEnGuides();
const byLoc = {
  no: loadYaml('guides-no.yaml'),
  fi: loadYaml('guides-fi.yaml'),
  pl: loadYaml('guides-pl.yaml'),
  cs: loadYaml('guides-cs.yaml'),
  fr: loadYaml('guides-fr.yaml'),
  de: loadYaml('guides-de.yaml'),
  es: loadYaml('guides-es.yaml'),
  it: loadYaml('guides-it.yaml'),
  pt: loadYaml('guides-pt.yaml'),
  nl: loadYaml('guides-nl.yaml'),
  da: loadYaml('guides-da.yaml'),
  sv: loadYaml('guides-sv.yaml'),
  ru: loadYaml('guides-ru.yaml'),
  tr: loadYaml('guides-tr.yaml'),
  ar: loadYaml('guides-ar.yaml'),
  el: loadYaml('guides-el.yaml'),
  ja: loadYaml('guides-ja.yaml'),
  ko: loadYaml('guides-ko.yaml'),
};

console.log('== 1. live ja/ko guide pages: localized title/description ==');
for (const loc of ['ja', 'ko']) {
  for (const g of byLoc[loc]) {
    const { status, html } = await fetchPage(`${BASE}/${loc}/guides/${g.slug}/`);
    if (!html) {
      bad(loc, `/guides/${g.slug}/ HTTP ${status}`);
      continue;
    }
    let fine = true;
    if (!contains(html, g.title)) {
      bad(loc, g.slug + ' title not found: "' + g.title + '"');
      fine = false;
    }
    if (!contains(html, g.description)) {
      bad(loc, g.slug + ' description not found');
      fine = false;
    }
    if (fine) ok(loc, g.slug);
  }
}

console.log('== 2. live ja/ko guides index lists localized titles ==');
for (const loc of ['ja', 'ko']) {
  const { status, html } = await fetchPage(`${BASE}/${loc}/guides/`);
  if (!html) {
    bad(loc, '/guides/ HTTP ' + status);
    continue;
  }
  let fine = true;
  for (const g of byLoc[loc]) {
    if (!contains(html, g.title)) {
      bad(loc, 'index missing title of ' + g.slug);
      fine = false;
    }
  }
  if (fine) ok(loc, 'guides index lists all 29 localized titles');
}

console.log('== 3. live regression: every locale rendering guides uses its expected source ==');
const samples = ['how-to-choose-your-sup', 'sup-yoga', 'what-is-sup'].filter((s) => enGuides.some((g) => g.slug === s));
const enBySlug = new Map(enGuides.map((g) => [g.slug, g]));
const guideLocales = fs
  .readdirSync(path.join(ROOT, 'dist'), { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, 'dist', d.name, 'guides')))
  .map((d) => d.name)
  .filter((n) => n !== 'llms')
  .sort();
console.log('   locales with /guides: ' + guideLocales.join(' '));
for (const loc of guideLocales) {
  const source = byLoc[loc] || enGuides;
  const srcName = byLoc[loc] ? loc : 'EN-fallback';
  let fine = true;
  let checked = 0;
  for (const slug of samples) {
    if (!enBySlug.has(slug)) continue;
    const { status, html } = await fetchPage(`${BASE}/${loc}/guides/${slug}/`);
    if (!html) {
      bad(loc, `/guides/${slug}/ HTTP ${status} (expected ${srcName})`);
      fine = false;
      continue;
    }
    const expected = source.find((g) => g.slug === slug);
    checked++;
    if (!contains(html, expected.title)) {
      bad(loc, slug + ' expected ' + srcName + ' title not found: "' + expected.title + '"');
      fine = false;
    }
  }
  if (fine && checked > 0) ok(loc, checked + ' sample slugs carry ' + srcName + ' titles');
}

console.log('');
console.log('PASS: ' + pass + '  FAIL: ' + errors.length);
if (errors.length > 0) {
  console.log('LIVE VERIFICATION FAILED');
  process.exit(1);
}
console.log('LIVE VERIFICATION PASSED');
