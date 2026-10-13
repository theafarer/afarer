// ===== _live-verify101.mjs — live verification for slice 101 (guides [lang] wiring) =====
// Runs the same assertions as _verify-dist101.cjs against https://afarer.com.
// Usage: node _live-verify101.mjs

import fs from 'node:fs';

const BASE = 'https://afarer.com';
const SSOT = JSON.parse(fs.readFileSync('E:/github/afarer/src/data/site/i18n-config.json', 'utf8'));
const LOCALES = Object.keys(SSOT);
const CATS = ['buying-guide', 'tutorial', 'safety', 'technical', 'maintenance', 'lifestyle', 'planning', 'comparison'];
const SLUG_TARGETS = [
  { slug: 'how-to-choose-your-sup', cat: 'buying-guide', diff: 'beginner' },
  { slug: 'sup-fishing', cat: 'lifestyle', diff: 'intermediate' },
];

let pass = 0;
let fail = 0;
const bad = (m) => {
  console.log('FAIL ' + m);
  fail++;
};
const ok = () => pass++;

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const has = (html, text) => html.includes(text) || html.includes(esc(text));

async function get(path) {
  const res = await fetch(BASE + path, { redirect: 'follow' });
  if (!res.ok) throw new Error(path + ' HTTP ' + res.status);
  return res.text();
}

// localized page meta (title) — source of truth for <title>
const seoMetaRaw = fs.readFileSync('E:/github/afarer/src/i18n/generated/seo-meta.ts', 'utf8');
const seoMeta = JSON.parse(seoMetaRaw.slice(seoMetaRaw.indexOf('=') + 1, seoMetaRaw.lastIndexOf('}') + 1));

// ===== 0. sitemap invariant =====
{
  const sm = await get('/sitemap-0.xml');
  const n = (sm.match(/<loc>/g) || []).length;
  if (n !== 11164) bad('sitemap-0.xml loc count = ' + n + ' (expected 11164)');
  else ok();
}

// ===== 1. per-locale pages =====
const EN = SSOT.en;
for (const loc of LOCALES) {
  const T = SSOT[loc];
  let idx;
  try {
    idx = await get('/' + loc + '/guides/');
  } catch (e) {
    bad(loc + ' guides index fetch: ' + e.message);
    continue;
  }
  ok();

  const countLabel = T['guides.count'].replace('{count}', '29');
  const categoriesLabel = T['guides.categories'].replace('{count}', '8');
  if (!has(idx, countLabel)) bad(loc + ' index missing count chip "' + countLabel + '"');
  else ok();
  if (!has(idx, categoriesLabel)) bad(loc + ' index missing categories chip "' + categoriesLabel + '"');
  else ok();

  for (const cat of CATS) {
    const key = 'guides.category.' + cat.replace('-', '_');
    const v = T[key];
    if (typeof v !== 'string' || !v) {
      bad(loc + ' SSOT missing ' + key);
      continue;
    }
    if (!has(idx, v)) bad(loc + ' index missing category heading "' + v + '" (' + key + ')');
    else ok();
  }

  if (!has(idx, T['guides.readGuide'])) bad(loc + ' index missing readGuide "' + T['guides.readGuide'] + '"');
  else ok();

  const pageMeta = seoMeta[loc + '/guides'];
  const expectedTitle = pageMeta?.title
    ? String(pageMeta.title).replace('{SITE}', 'Afarer')
    : T['guides.pageLabel'] + ' — Afarer';
  const titleMatch = idx.match(/<title>([^<]*)<\/title>/);
  if (!titleMatch) bad(loc + ' index no <title>');
  else if (titleMatch[1] !== expectedTitle)
    bad(loc + ' index title "' + titleMatch[1] + '" != "' + expectedTitle + '"');
  else ok();

  if (loc !== 'en') {
    const enCount = EN['guides.count'].replace('{count}', '29');
    const enCats = EN['guides.categories'].replace('{count}', '8');
    const enRead = EN['guides.readGuide'];
    if (countLabel !== enCount && has(idx, enCount)) bad(loc + ' index leaks EN count chip "' + enCount + '"');
    else ok();
    if (categoriesLabel !== enCats && has(idx, enCats)) bad(loc + ' index leaks EN categories chip "' + enCats + '"');
    else ok();
    if (T['guides.readGuide'] !== enRead && has(idx, enRead)) bad(loc + ' index leaks EN "' + enRead + '"');
    else ok();
  }

  for (const target of SLUG_TARGETS) {
    let html;
    try {
      html = await get('/' + loc + '/guides/' + target.slug + '/');
    } catch (e) {
      bad(loc + ' slug page fetch ' + target.slug + ': ' + e.message);
      continue;
    }
    ok();
    const catKey = 'guides.category.' + target.cat.replace('-', '_');
    const diffKey = 'guides.difficulty.' + target.diff;
    const catV = T[catKey];
    const diffV = T[diffKey];
    if (typeof catV !== 'string' || !catV) bad(loc + ' SSOT missing ' + catKey);
    else if (!has(html, catV)) bad(loc + ' ' + target.slug + ' missing category chip "' + catV + '"');
    else ok();
    if (typeof diffV !== 'string' || !diffV) bad(loc + ' SSOT missing ' + diffKey);
    else if (!has(html, diffV)) bad(loc + ' ' + target.slug + ' missing difficulty chip "' + diffV + '"');
    else ok();
    if (T['v2.problem'] && !has(html, T['v2.problem']))
      bad(loc + ' ' + target.slug + ' missing v2.problem "' + T['v2.problem'] + '"');
    else ok();
    if (T['v2.solution'] && !has(html, T['v2.solution']))
      bad(loc + ' ' + target.slug + ' missing v2.solution "' + T['v2.solution'] + '"');
    else ok();
  }
}

// ===== 2. EN regression =====
{
  const idx = await get('/en/guides/');
  for (const expected of ['29 guides', '8 categories', 'Buying Guides', 'Comparisons', 'Read guide →']) {
    if (!has(idx, expected)) bad('EN index regression: missing "' + expected + '"');
    else ok();
  }
  const slugHtml = await get('/en/guides/how-to-choose-your-sup/');
  for (const expected of ['Buying Guides', 'Beginner', 'The problem', 'The solution']) {
    if (!has(slugHtml, expected)) bad('EN slug regression: missing "' + expected + '"');
    else ok();
  }
}

console.log('---');
console.log('PASS=' + pass + ' FAIL=' + fail);
process.exit(fail ? 1 : 0);
