#!/usr/bin/env node
/**
 * _concat105.cjs — shard 105: concatenate per-locale part files into src/data/guides-{pl,cs}.yaml
 * and self-verify with js-yaml (29 records, 14 keys per record).
 *
 * Part files are draft slices written to a temp dir (Write-tool size limits); this joins them,
 * asserts count/key-count, and writes the final yaml. Parts config records the exact split used
 * for the archived shards (pl: 4 parts, cs: 4 parts — identical R-splits).
 *
 * Usage (repo root): node TOOLS/i18n-merge/guides-data-105/_concat105.cjs pl|cs [tempDir]
 */
const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const T = process.argv[3] || 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = {
  pl: 'E:/github/afarer/src/data/guides-pl.yaml',
  cs: 'E:/github/afarer/src/data/guides-cs.yaml',
};
const PARTS = {
  // R1-8 / R9-15 / R16-22 / R23-29 (EN guides.ts order), both locales
  pl: ['_pl1.yaml', '_pl2.yaml', '_pl3.yaml', '_pl4.yaml'],
  cs: ['_cs1.yaml', '_cs2.yaml', '_cs3.yaml', '_cs4.yaml'],
};

const loc = process.argv[2];
if (!OUT[loc]) {
  console.error('usage: node _concat105.cjs pl|cs [tempDir]');
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
