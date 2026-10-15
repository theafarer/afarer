#!/usr/bin/env node
/**
 * _concat106.cjs — shard 106: concatenate per-locale part files into src/data/guides-{no,fi}.yaml
 * and self-verify with js-yaml (29 records, 14 keys per record).
 *
 * Part files are draft slices written to a temp dir (Write-tool size limits); this joins them,
 * asserts count/key-count, and writes the final yaml. Parts config records the exact split used
 * for the archived shards (no: 4 parts, fi: 4 parts — identical R-splits).
 *
 * Usage (repo root): node TOOLS/i18n-merge/guides-data-106/_concat106.cjs no|fi [tempDir]
 */
const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const T = process.argv[3] || 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = {
  no: 'E:/github/afarer/src/data/guides-no.yaml',
  fi: 'E:/github/afarer/src/data/guides-fi.yaml',
};
const PARTS = {
  // R1-8 / R9-15 / R16-22 / R23-29 (EN guides.ts order), both locales
  no: ['_no1.yaml', '_no2.yaml', '_no3.yaml', '_no4.yaml'],
  fi: ['_fi1.yaml', '_fi2.yaml', '_fi3.yaml', '_fi4.yaml'],
};

const loc = process.argv[2];
if (!OUT[loc]) {
  console.error('usage: node _concat106.cjs no|fi [tempDir]');
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
