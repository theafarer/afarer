#!/usr/bin/env node
/**
 * _patch-warnings.cjs — 修复 check:i18n 150 warning 及连带发现的内容损坏
 *
 * 损坏类型:
 *   1. EN 内容丢失 (ISO 12402/9001/6185、ASTM D751 令牌被删, 留下双空格/" ()"/悬挂连字符疤痕)
 *   2. 翻译文件同源疤痕 (令牌缺失、空括号、句号前空格)
 *   3. fi/factory.yaml 整文件 mojibake (ä/ö→?) + 温度 "200°C600 –C" 二次损坏
 *   4. icon_bg 被 19 个语言误译 (是 CSS 映射键, 渲染全部掉灰色兜底)
 *   5. safety cert[1].title / quality&factory stats value / custom highlight = null
 *   6. cs safety cert[2] 重复条目顶掉了 SOLAS
 *   7. fr 半翻译块 (stats/qc_dashboard 标签、safety hero)
 *   8. 翻译漂移: 地区列表/地址/关键词缺失
 *
 * 用法 (仓库根目录):
 *   node TOOLS/i18n-merge/warning-cleanup/_patch-warnings.cjs --dry    # 按应用链顺序校验所有 find 计数 (内存模拟, 不写盘)
 *   node TOOLS/i18n-merge/warning-cleanup/_patch-warnings.cjs --patch  # 应用并复验
 *
 * 幂等: find 计数不匹配但 rep 已存在 => 视为已应用, 跳过。
 */
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const dry = process.argv.includes('--dry');
const patch = process.argv.includes('--patch');
if (!dry && !patch) {
  console.log('用法: node _patch-warnings.cjs --dry | --patch');
  process.exit(1);
}

const shards = fs
  .readdirSync(dir)
  .filter((f) => /^_ops-data-\d+\.cjs$/.test(f))
  .sort();
let ops = [];
for (const s of shards) ops = ops.concat(require(path.join(dir, s)));
console.log(`Loaded ${ops.length} ops from ${shards.length} shards [${dry ? 'DRY' : 'PATCH'}]`);

const byFile = new Map();
for (const op of ops) {
  if (!op.f) {
    console.log('ERR op missing f:', JSON.stringify(op).slice(0, 100));
    process.exit(1);
  }
  if (!byFile.has(op.f)) byFile.set(op.f, []);
  byFile.get(op.f).push(op);
}

let applied = 0;
let already = 0;
let errors = 0;
let filesChanged = 0;

for (const [file, fileOps] of byFile) {
  let src;
  try {
    src = fs.readFileSync(file, 'utf8');
  } catch (e) {
    errors++;
    console.log(`ERR cannot read ${file}: ${e.message}`);
    continue;
  }
  let dirty = false;
  for (const op of fileOps) {
    const n = op.n || 1;
    const findCount = src.split(op.find).length - 1;
    const repCount = src.split(op.rep).length - 1;
    // Idempotency: ops whose rep CONTAINS find (insert/append style) keep matching
    // after application; if rep is already present the op must NOT run again.
    if (findCount === n && !(repCount >= n && op.rep.includes(op.find))) {
      src = src.split(op.find).join(op.rep);
      applied++;
      dirty = true;
    } else if (findCount === 0 && repCount >= n) {
      already++;
    } else if (findCount === n && repCount >= n && op.rep.includes(op.find)) {
      already++;
    } else {
      errors++;
      console.log(`ERR ${file}: find x${findCount} expect ${n}: ${JSON.stringify(op.find.slice(0, 90))}`);
    }
  }
  if (patch && dirty) {
    for (const op of fileOps) {
      const n = op.n || 1;
      if (src.split(op.find).length - 1 > 0 && src.split(op.rep).length - 1 < n) {
        console.log(`WARN ${file}: post-check find remains: ${JSON.stringify(op.find.slice(0, 60))}`);
      }
    }
    fs.writeFileSync(file, src);
    filesChanged++;
  }
}

console.log(`\nfiles: ${byFile.size}, ops applied: ${applied}, already-applied: ${already}, errors: ${errors}`);
if (patch) console.log(`files written: ${filesChanged}`);
if (errors > 0) {
  console.log('ABORT: errors present, fix ops before patching.');
  process.exit(1);
}
console.log(dry ? 'DRY OK' : 'PATCH DONE');
