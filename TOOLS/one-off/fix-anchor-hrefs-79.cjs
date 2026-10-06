#!/usr/bin/env node
/**
 * Shard 79 one-off: fix dead in-page anchor hrefs in page YAML data (dist anchor audit).
 *
 * Sources (dist audit, see TECH.md L69):
 *  - {loc}/home.yaml hero action `href: '#features'` (15 locales) - homepage has no #features
 *    section; EN hero links real pages. -> `href: '/afarer-story'` (matches "learn more" intent,
 *    exists in all 34 locales, hero actions get `/${lang}` prefix in [lang]/index.astro).
 *  - {loc}/learn.yaml + root learn.yaml CTA action `href: '#ai-guide'` (21 files) - learn page
 *    has no #ai-guide target. -> `href: '/ai-answer-center'` (AI hub, all 34 locales; CTA
 *    actions stay root-relative and are locale-routed by the middleware).
 *
 * Usage: node TOOLS/one-off/fix-anchor-hrefs-79.cjs [--dry]
 * Idempotent: files already fixed are counted as `already`.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const PAGES = path.join(ROOT, 'src', 'data', 'pages');
const DRY = process.argv.includes('--dry');

const RULES = [
  {
    name: "home.yaml hero '#features' -> '/afarer-story'",
    find: "href: '#features'",
    rep: "href: '/afarer-story'",
    expect: 15,
  },
  {
    name: "learn.yaml CTA '#ai-guide' -> '/ai-answer-center'",
    find: "href: '#ai-guide'",
    rep: "href: '/ai-answer-center'",
    expect: 21,
  },
];

function yamlFiles(base, name) {
  const out = [];
  const rootFile = path.join(base, name);
  if (fs.existsSync(rootFile)) out.push(rootFile);
  for (const ent of fs.readdirSync(base, { withFileTypes: true })) {
    if (!ent.isDirectory()) continue;
    const f = path.join(base, ent.name, name);
    if (fs.existsSync(f)) out.push(f);
  }
  return out;
}

let fail = false;
for (const rule of RULES) {
  const files = yamlFiles(PAGES, rule.name.startsWith('home') ? 'home.yaml' : 'learn.yaml');
  let fixed = 0;
  let already = 0;
  const touched = [];
  for (const f of files) {
    const raw = fs.readFileSync(f, 'utf8');
    if (raw.includes(rule.find)) {
      const cnt = raw.split(rule.find).length - 1;
      const next = raw.split(rule.find).join(rule.rep);
      if (!DRY) fs.writeFileSync(f, next);
      fixed += cnt;
      touched.push(path.relative(ROOT, f));
    } else if (raw.includes(rule.rep)) {
      already += 1;
    }
  }
  console.log(`[${rule.name}] files=${files.length} fixed=${fixed} alreadyFiles=${already}`);
  for (const t of touched) console.log(`  + ${t}`);
  const total = fixed + already;
  if (total !== rule.expect) {
    console.error(`  EXPECT ${rule.expect} files, got fixed(${fixed})+already(${already})=${total}`);
    fail = true;
  }
}
if (fail) process.exit(1);
console.log(DRY ? '[dry] all rules consistent' : 'done');
