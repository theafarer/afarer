#!/usr/bin/env node
/**
 * _concat109.cjs — shard 109: concatenate per-locale part files into src/data/guides-{ja,ko}.yaml
 * and self-verify with js-yaml (29 records, 14 keys per record).
 *
 * Part files are draft slices written to a temp dir (Write-tool size limits); this joins them,
 * asserts count/key-count, and writes the final yaml. Parts config records the exact split used
 * for the archived shards (ja: 8 half-parts, ko: 8 half-parts (R1-8/R9-15/R16-22/R23-29, each part split a/b)).
 *
 * Usage (repo root): node TOOLS/i18n-merge/guides-data-109/_concat109.cjs ja|ko [tempDir]
 */
const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const T = process.argv[3] || 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = {
  ja: 'E:/github/afarer/src/data/guides-ja.yaml',
  ko: 'E:/github/afarer/src/data/guides-ko.yaml',
};
const PARTS = {
  // R1-8 / R9-15 / R16-22 / R23-29 (EN guides.ts order), both locales
  ja: ['_ja1a.yaml', '_ja1b.yaml', '_ja2a.yaml', '_ja2b.yaml', '_ja3a.yaml', '_ja3b.yaml', '_ja4a.yaml', '_ja4b.yaml'],
  ko: ['_ko1a.yaml', '_ko1b.yaml', '_ko2a.yaml', '_ko2b.yaml', '_ko3a.yaml', '_ko3b.yaml', '_ko4a.yaml', '_ko4b.yaml'],
};

const loc = process.argv[2];
if (!OUT[loc]) {
  console.error('usage: node _concat109.cjs ja|ko [tempDir]');
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
