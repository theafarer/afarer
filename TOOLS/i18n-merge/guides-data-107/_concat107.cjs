#!/usr/bin/env node
/**
 * _concat107.cjs — shard 107: concatenate per-locale part files into src/data/guides-{ru,tr}.yaml
 * and self-verify with js-yaml (29 records, 14 keys per record).
 *
 * Part files are draft slices written to a temp dir (Write-tool size limits); this joins them,
 * asserts count/key-count, and writes the final yaml. Parts config records the exact split used
 * for the archived shards (ru: 4 parts, tr: 4 parts — identical R-splits).
 *
 * Usage (repo root): node TOOLS/i18n-merge/guides-data-107/_concat107.cjs ru|tr [tempDir]
 */
const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const T = process.argv[3] || 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = {
  ru: 'E:/github/afarer/src/data/guides-ru.yaml',
  tr: 'E:/github/afarer/src/data/guides-tr.yaml',
};
const PARTS = {
  // R1-8 / R9-15 / R16-22 / R23-29 (EN guides.ts order), both locales
  ru: ['_ru1.yaml', '_ru2.yaml', '_ru3.yaml', '_ru4.yaml'],
  tr: ['_tr1.yaml', '_tr2.yaml', '_tr3.yaml', '_tr4.yaml'],
};

const loc = process.argv[2];
if (!OUT[loc]) {
  console.error('usage: node _concat107.cjs no|fi [tempDir]');
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
