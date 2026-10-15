#!/usr/bin/env node
/**
 * _concat108.cjs — shard 108: concatenate per-locale part files into src/data/guides-{ar,el}.yaml
 * and self-verify with js-yaml (29 records, 14 keys per record).
 *
 * Part files are draft slices written to a temp dir (Write-tool size limits); this joins them,
 * asserts count/key-count, and writes the final yaml. Parts config records the exact split used
 * for the archived shards (ar: 8 half-parts, el: 8 half-parts (R1-8/R9-15/R16-22/R23-29, each part split a/b)).
 *
 * Usage (repo root): node TOOLS/i18n-merge/guides-data-108/_concat108.cjs ar|el [tempDir]
 */
const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const T = process.argv[3] || 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = {
  ar: 'E:/github/afarer/src/data/guides-ar.yaml',
  el: 'E:/github/afarer/src/data/guides-el.yaml',
};
const PARTS = {
  // R1-8 / R9-15 / R16-22 / R23-29 (EN guides.ts order), both locales
  ar: ['_ar1a.yaml', '_ar1b.yaml', '_ar2a.yaml', '_ar2b.yaml', '_ar3a.yaml', '_ar3b.yaml', '_ar4a.yaml', '_ar4b.yaml'],
  el: ['_el1a.yaml', '_el1b.yaml', '_el2a.yaml', '_el2b.yaml', '_el3a.yaml', '_el3b.yaml', '_el4a.yaml', '_el4b.yaml'],
};

const loc = process.argv[2];
if (!OUT[loc]) {
  console.error('usage: node _concat108.cjs ar|el [tempDir]');
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
if (!Array.isArray(data)) throw new Error('not an array');
if (data.length !== 29) throw new Error('count=' + data.length);
const badKeys = data.filter((r) => Object.keys(r).length !== 14).map((r) => r.slug);
console.log('bytes=' + out.length + ' records=' + data.length + ' first=' + data[0].slug + ' last=' + data[28].slug);
if (badKeys.length) {
  console.log('BAD-KEY-COUNT: ' + badKeys.join(','));
  process.exit(1);
}
console.log('key-count ok (14 per record)');
