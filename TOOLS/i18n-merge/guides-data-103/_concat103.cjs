#!/usr/bin/env node
/**
 * _concat103.cjs — shard 103: concatenate per-locale part files into src/data/guides-{pt,nl}.yaml
 * and self-verify with js-yaml (29 records, 14 keys per record).
 *
 * Part files are draft slices written to a temp dir (Write-tool size limits); this joins them,
 * asserts count/key-count, and writes the final yaml. Parts config records the exact split used
 * for the archived shards (pt: 4 parts, nl: 3 parts).
 *
 * Usage (repo root): node TOOLS/i18n-merge/guides-data-103/_concat103.cjs pt|nl [tempDir]
 */
const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const T = process.argv[3] || 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = {
  pt: 'E:/github/afarer/src/data/guides-pt.yaml',
  nl: 'E:/github/afarer/src/data/guides-nl.yaml',
};
const PARTS = {
  // R1-10 / R11-20 / sup-board-materials / R22-29 (EN guides.ts order)
  pt: ['_gp1.yaml', '_gp2.yaml', '_gp2b.yaml', '_gp3.yaml'],
  // R1-10 / R11-21 (incl. sup-board-materials) / R22-29
  nl: ['_np1.yaml', '_np2.yaml', '_np3.yaml'],
};

const loc = process.argv[2];
if (!OUT[loc]) {
  console.error('usage: node _concat103.cjs pt|nl [tempDir]');
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
