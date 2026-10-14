#!/usr/bin/env node
/**
 * Shard 103 — dist verification (guides pt/nl).
 *
 * Verifies the BUILT site (dist/) after adding guides-pt.yaml / guides-nl.yaml:
 *   1. Every one of the 29 guide slugs exists at dist/pt/guides/{slug}/ and dist/nl/guides/{slug}/
 *      and the page HTML contains the LOCALIZED title + description (HTML-entity-aware).
 *   2. Regression — every other locale that renders guides keeps its expected source:
 *        fr -> guides-fr.yaml, de -> guides-de.yaml, es -> guides-es.yaml, it -> guides-it.yaml,
 *        everyone else -> EN (guides.ts). Sample slugs are checked per locale.
 *   3. Locale guides index pages (dist/{loc}/guides/index.html) exist for pt/nl and list
 *      localized titles.
 *
 * Run from repo root AFTER `npm run build`.
 */
const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const ROOT = 'E:/github/afarer';
const DIST = path.join(ROOT, 'dist');

let pass = 0;
const errors = [];
function ok(tag, msg) {
  pass++;
  if (process.argv.includes('-v')) console.log('  PASS ' + tag + ' ' + msg);
}
function bad(tag, msg) {
  errors.push(tag + ' ' + msg);
  console.log('  FAIL ' + tag + ' ' + msg);
}

function loadEnGuides() {
  const ts = fs.readFileSync(path.join(ROOT, 'src/data/guides.ts'), 'utf8');
  const marker = 'export const guides: GuideRecord[] =';
  const at = ts.indexOf(marker);
  if (at < 0) throw new Error('guides.ts marker not found');
  const slice = ts.slice(at + marker.length);
  const start = slice.indexOf('[');
  const end = slice.indexOf('];');
  if (start < 0 || end < 0) throw new Error('guides.ts brackets not found');
  const body = slice.slice(start, end + 1);
  const guides = eval(body);
  if (!Array.isArray(guides) || guides.length !== 29) {
    throw new Error('EN guides expected 29 entries, got ' + (guides && guides.length));
  }
  return guides;
}

function loadYaml(file) {
  const doc = yaml.load(fs.readFileSync(path.join(ROOT, 'src/data', file), 'utf8'));
  if (!Array.isArray(doc) || doc.length !== 29) {
    throw new Error(file + ' expected 29 entries, got ' + (doc && doc.length));
  }
  return doc;
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}
function htmlContains(html, needle) {
  const decoded = decodeEntities(html);
  return decoded.includes(needle) || html.includes(needle);
}

function readPage(loc, slug) {
  const p = path.join(DIST, loc, 'guides', slug, 'index.html');
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8');
}

const enGuides = loadEnGuides();
const byLoc = {
  pt: loadYaml('guides-pt.yaml'),
  nl: loadYaml('guides-nl.yaml'),
  fr: loadYaml('guides-fr.yaml'),
  de: loadYaml('guides-de.yaml'),
  es: loadYaml('guides-es.yaml'),
  it: loadYaml('guides-it.yaml'),
};
const enBySlug = new Map(enGuides.map((g) => [g.slug, g]));

console.log('== 1. pt/nl guide pages: existence + localized title/description ==');
for (const loc of ['pt', 'nl']) {
  const list = byLoc[loc];
  for (const g of list) {
    const html = readPage(loc, g.slug);
    if (!html) {
      bad(loc, '/guides/' + g.slug + '/ MISSING');
      continue;
    }
    let fine = true;
    if (!htmlContains(html, g.title)) {
      bad(loc, g.slug + ' title not found: "' + g.title + '"');
      fine = false;
    }
    if (!htmlContains(html, g.description)) {
      bad(loc, g.slug + ' description not found');
      fine = false;
    }
    if (fine) ok(loc, g.slug);
  }
}

console.log('== 2. guides index pages list localized titles ==');
for (const loc of ['pt', 'nl']) {
  const idx = path.join(DIST, loc, 'guides', 'index.html');
  if (!fs.existsSync(idx)) {
    bad(loc, '/guides/index.html MISSING');
    continue;
  }
  const html = fs.readFileSync(idx, 'utf8');
  let fine = true;
  for (const g of byLoc[loc]) {
    if (!htmlContains(html, g.title)) {
      bad(loc, 'index missing title of ' + g.slug);
      fine = false;
    }
  }
  if (fine) ok(loc, 'guides index lists all 29 localized titles');
}

console.log('== 3. regression: every locale rendering guides uses its expected source ==');
const guideLocales = fs
  .readdirSync(DIST, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(DIST, d.name, 'guides')))
  .map((d) => d.name)
  .filter((n) => n !== 'llms')
  .sort();
console.log('   locales with /guides: ' + guideLocales.join(' '));

const samples = ['how-to-choose-your-sup', 'sup-yoga', 'what-is-sup'].filter((s) => enBySlug.has(s));
for (const loc of guideLocales) {
  const source = byLoc[loc] || enGuides;
  const srcName = byLoc[loc] ? loc : 'EN-fallback';
  let fine = true;
  let checked = 0;
  for (const slug of samples) {
    const html = readPage(loc, slug);
    if (!html) {
      bad(loc, '/guides/' + slug + '/ MISSING (expected source ' + srcName + ')');
      fine = false;
      continue;
    }
    const expected = source.find((g) => g.slug === slug);
    if (!expected) continue;
    checked++;
    if (!htmlContains(html, expected.title)) {
      bad(loc, slug + ' expected ' + srcName + ' title not found: "' + expected.title + '"');
      fine = false;
    }
  }
  if (fine && checked > 0) ok(loc, checked + ' sample slugs carry ' + srcName + ' titles');
}

console.log('');
console.log('PASS: ' + pass + '  FAIL: ' + errors.length);
if (errors.length > 0) {
  console.log('DIST VERIFICATION FAILED');
  process.exit(1);
}
console.log('DIST VERIFICATION PASSED');
