#!/usr/bin/env node
/**
 * _concat110.cjs — shard 110: concatenate per-locale part files into src/data/guides-{ro,th}.yaml
 * and self-verify with js-yaml (29 records, 14 keys per record).
 *
 * Part files are draft slices written to a temp dir (Write-tool size limits); this joins them,
 * asserts count/key-count, and writes the final yaml. Parts config records the exact split used
 * for the archived shards (ro: 8 half-parts, th: 8 half-parts (R1-8/R9-15/R16-22/R23-29, each part split a/b)).
 *
 * Usage (repo root): node TOOLS/i18n-merge/guides-data-110/_concat110.cjs ro|th [tempDir]
 */
const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const T = process.argv[3] || 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = {
  ro: 'E:/github/afarer/src/data/guides-ro.yaml',
  th: 'E:/github/afarer/src/data/guides-th.yaml',
};
const PARTS = {
  // R1-8 / R9-15 / R16-22 / R23-29 (EN guides.ts order), both locales
  ro: ['_ro1a.yaml', '_ro1b.yaml', '_ro2a.yaml', '_ro2b.yaml', '_ro3a.yaml', '_ro3b.yaml', '_ro4a.yaml', '_ro4b.yaml'],
  th: ['_th1a.yaml', '_th1b.yaml', '_th2a.yaml', '_th2b.yaml', '_th3a.yaml', '_th3b.yaml', '_th4a.yaml', '_th4b.yaml'],
};

const loc = process.argv[2];
if (!OUT[loc]) {
  console.error('usage: node _concat110.cjs ro|th [tempDir]');
  process.exit(1);
}

let out = '';
for (const p of PARTS[loc]) {
  let s = fs.readFileSync(T + '/' + p, 'utf8');
  if (!s.endsWith('\n')) s += '\n';
  out += s;
}
fs.writeFileSync(OUT[loc], out, 'utf8');

const data = yaml.load(fs.readFileSync(OUT[loc], 'utf8'));
if (!Array.isArray(data) || data.length !== 29)
  throw new Error(OUT[loc] + ': expected 29 records, got ' + (data && data.length));
for (const rec of data) {
  const keys = Object.keys(rec).sort().join(',');
  const expected =
    'audience,category,description,difficulty,faq,problem,relatedGuides,relatedProducts,slug,solution,steps,title,tldr,waterType';
  if (keys !== expected) throw new Error(OUT[loc] + ' ' + rec.slug + ': key set mismatch: ' + keys);
}
console.log(OUT[loc] + ': ' + data.length + ' records, keys OK, bytes=' + out.length);
