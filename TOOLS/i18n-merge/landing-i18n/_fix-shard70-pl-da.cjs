#!/usr/bin/env node
/**
 * Shard 70 — 挂账修复批 A:pl "inflatable" 残留 + da "brædder" 错拼
 *
 * 背景:
 *   - all-around-sup.json pl 8 处、marine-industry.json pl 13 处 "inflatable" 未译
 *     (validator 软扫描词表不含 inflatable 域词,故历史漏网)
 *   - sup-accessories.json da title 用了错拼 "brædder",正确为 "brætter"(同文件他处均用对)
 *
 * 规则(有序替换,长/具体在前)+ 末尾零残留断言。逐条打印变更值供人工复核。
 * 用法: node TOOLS/i18n-merge/landing-i18n/_fix-shard70-pl-da.cjs [--dry]
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const DATA = path.join(ROOT, 'src', 'data', 'landing-i18n');
const DRY = process.argv.includes('--dry');

// pl "inflatable" 有序替换规则(具体在前,防止误吃)
const PL_RULES = [
  ['sprzęt do sportów wodnych inflatable', 'dmuchany sprzęt do sportów wodnych'],
  ['Deska SUP inflatable', 'Dmuchana deska SUP'],
  ['Deski SUP inflatable', 'Dmuchane deski SUP'],
  ['po deskach SUP inflatable', 'po dmuchanych deskach SUP'],
  ['po SUP inflatable', 'po dmuchanych deskach SUP'],
  ['deski paddle inflatable', 'dmuchane deski paddle'],
  ['deska paddle inflatable', 'dmuchana deska paddle'],
  ['desek paddle inflatable', 'dmuchanych desek paddle'],
  ['deskach SUP inflatable', 'dmuchanych deskach SUP'],
  ['deskę SUP inflatable', 'dmuchaną deskę SUP'],
  ['deski SUP inflatable', 'dmuchane deski SUP'],
  ['deska SUP inflatable', 'dmuchana deska SUP'],
  ['deski ratownicze inflatable', 'dmuchane deski ratownicze'],
  ['materiałów desek inflatable', 'materiałów dmuchanych desek'],
  ['sprzęcie inflatable', 'dmuchanym sprzęcie'],
  ['sprzętu inflatable', 'dmuchanego sprzętu'],
  ['Czy inflatable uniwersalne SUP', 'Czy dmuchane uniwersalne SUP'],
  ['Uniwersalne inflatable SUP', 'Uniwersalne dmuchane SUP'],
  ['Inflatable czy deska twarda', 'Dmuchana czy deska twarda'],
];

const TARGETS = [
  { file: 'all-around-sup.json', locale: 'pl', rules: PL_RULES, residue: /inflatable/i },
  { file: 'marine-industry.json', locale: 'pl', rules: PL_RULES, residue: /inflatable/i },
  { file: 'sup-accessories.json', locale: 'da', rules: [['oppustelige brædder', 'oppustelige brætter'], ['brædder', 'brætter']], residue: /brædder/i },
];

let totalChanges = 0;
const residueHits = [];

for (const target of TARGETS) {
  const fp = path.join(DATA, target.file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
  const bucket = data[target.locale];
  if (!bucket) {
    console.error(`FATAL: ${target.file} missing locale ${target.locale}`);
    process.exit(1);
  }
  let changes = 0;
  for (const [key, value] of Object.entries(bucket)) {
    if (typeof value !== 'string') continue;
    let next = value;
    for (const [from, to] of target.rules) {
      next = next.split(from).join(to);
    }
    if (next !== value) {
      changes++;
      console.log(`\n[${target.file} ${target.locale}] key: ${JSON.stringify(key.slice(0, 80))}`);
      console.log(`  - ${JSON.stringify(value)}`);
      console.log(`  + ${JSON.stringify(next)}`);
      bucket[key] = next;
    }
    if (target.residue.test(next)) {
      residueHits.push(`${target.file} ${target.locale}: ${JSON.stringify(key.slice(0, 60))} -> ${next}`);
    }
  }
  console.log(`\n[${target.file} ${target.locale}] ${changes} value(s) changed`);
  totalChanges += changes;
  if (!DRY) {
    fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf8');
  }
}

console.log(`\n=== TOTAL: ${totalChanges} changes ${DRY ? '(DRY, not written)' : '(written)'} ===`);

if (residueHits.length > 0) {
  console.error(`\nFATAL: ${residueHits.length} residual hit(s) after rules:`);
  for (const h of residueHits) console.error('  ' + h);
  process.exit(1);
}
console.log('Residue scan: 0 hits. PASS');
