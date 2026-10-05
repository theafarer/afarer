#!/usr/bin/env node
/**
 * Shard 74: inject 16 locale labels (it,ja,ko,ru,pl,ar,nl,sv,no,el,tr,fi,cs,da,ro,th)
 * into src/data/site/countries.yaml after each block's `pt:` line.
 * Line-level insertion; all other bytes preserved (BOM + EOL).
 * Usage: node TOOLS/one-off/_gen-countries-locales.cjs [--dry|--write]
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const YAML = path.join(ROOT, 'src', 'data', 'site', 'countries.yaml');
const LOCS = ['it', 'ja', 'ko', 'ru', 'pl', 'ar', 'nl', 'sv', 'no', 'el', 'tr', 'fi', 'cs', 'da', 'ro', 'th'];
const MODE = process.argv.includes('--write') ? 'write' : 'dry';

const raw = fs.readFileSync(YAML, 'utf8');
const bom = raw.startsWith('\uFEFF');
const body = bom ? raw.slice(1) : raw;
const eol = body.includes('\r\n') ? '\r\n' : '\n';
const lines = body.split(eol);

// load tables
const tbl = {};
for (const loc of LOCS) {
  const p = path.join(__dirname, `_countries-tbl-${loc}.json`);
  tbl[loc] = JSON.parse(fs.readFileSync(p, 'utf8'));
}

// collect country values from yaml: lines like "  - value: X"
const values = [];
const reVal = /^ {2}- value: (.+)$/;
for (const line of lines) {
  const m = line.match(reVal);
  if (m) values.push(m[1].trim());
}
console.log(`yaml countries: ${values.length}`);

// validate coverage per locale
let bad = 0;
const uniq = new Set(values);
if (uniq.size !== values.length) {
  console.error('DUPLICATE value entries in yaml!');
  process.exit(1);
}
for (const loc of LOCS) {
  const keys = Object.keys(tbl[loc]);
  const missing = values.filter((v) => !(v in tbl[loc]));
  const extra = keys.filter((k) => !uniq.has(k));
  if (missing.length || extra.length || keys.length !== values.length) {
    bad++;
    console.error(
      `[${loc}] keys=${keys.length} missing(${missing.length})=${JSON.stringify(missing)} extra(${extra.length})=${JSON.stringify(extra)}`
    );
  }
}
if (bad) {
  console.error(`coverage check FAILED for ${bad} locale(s) — abort`);
  process.exit(1);
}
console.log(`coverage check OK: ${LOCS.length} locales x ${values.length} countries`);

// idempotency: already applied?
if (lines.some((l) => /^ {6}it: /.test(l))) {
  console.log('locale labels already present — nothing to do (idempotent)');
  process.exit(0);
}

// build output: insert after each `pt:` line within a block
const out = [];
let blockCount = 0;
let inBlock = false;
for (const line of lines) {
  out.push(line);
  if (reVal.test(line)) inBlock = true;
  const mPt = line.match(/^ {6}pt: (.+)$/);
  if (inBlock && mPt) {
    const val = values[blockCount];
    for (const loc of LOCS) {
      out.push(`      ${loc}: ${tbl[loc][val]}`);
    }
    blockCount++;
    inBlock = false;
  }
}
if (blockCount !== values.length) {
  console.error(`block walk mismatch: ${blockCount} !== ${values.length}`);
  process.exit(1);
}
console.log(`inserted ${blockCount} x ${LOCS.length} = ${blockCount * LOCS.length} label lines`);

if (MODE === 'write') {
  fs.writeFileSync(YAML, (bom ? '\uFEFF' : '') + out.join(eol), 'utf8');
  console.log(`WROTE ${YAML} (${out.length} lines)`);
} else {
  console.log(`[dry] would write ${out.length} lines. Sample (first block):`);
  console.log(out.slice(0, 24).join(eol));
}
