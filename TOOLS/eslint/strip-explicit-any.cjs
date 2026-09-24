#!/usr/bin/env node
/**
 * strip-explicit-any.cjs — 批量移除 .astro 页面回调参数中的冗余 `: any` 注解
 *
 * 背景: getPageContent() 返回 any，页面数据回调 (sec: any) => / (g: any, i: any) =>
 * 中的显式 any 触发 @typescript-eslint/no-explicit-any warning。
 * tsconfig 未启用 noImplicitAny（仅 strictNullChecks），去掉注解后参数退化为
 * 隐式 any，行为完全一致，astro check 不受影响。
 *
 * 仅处理两种模式（回调参数场景，不会误伤 as any / any[] / 类型声明）:
 *   ': any)' → ')'
 *   ': any,' → ','
 *
 * 用法（仓库根目录执行）:
 *   node TOOLS/eslint/strip-explicit-any.cjs <file1.astro> [file2.astro ...]
 *   node TOOLS/eslint/strip-explicit-any.cjs --dry <file1.astro> ...   # 只报告不写入
 *
 * 处理后需人工复核:
 *   npx eslint <files>   # 应无 no-explicit-any warning
 *   npx prettier --check <files>
 *   npm run check        # astro check 应 0 错误
 */
const fs = require('fs');

const args = process.argv.slice(2);
let dry = false;
const files = [];
for (const a of args) {
  if (a === '--dry') {
    dry = true;
    continue;
  }
  files.push(a);
}
if (files.length === 0) {
  console.error('用法: node TOOLS/eslint/strip-explicit-any.cjs [--dry] <file.astro> [...]');
  process.exit(1);
}

let changed = 0;
for (const f of files) {
  if (!fs.existsSync(f)) {
    console.error(`ERROR: 文件不存在 ${f}`);
    process.exit(1);
  }
  const src = fs.readFileSync(f, 'utf8');
  const out = src.replace(/: any\)/g, ')').replace(/: any,/g, ',');
  if (out !== src) {
    const n = (src.match(/: any[),]/g) || []).length;
    if (!dry) {
      fs.writeFileSync(f, out);
    }
    console.log(`${dry ? '[dry] ' : ''}${f}: removed ${n} explicit any`);
    changed++;
  } else {
    console.log(`${f}: no match (skipped)`);
  }
}
console.log(`DONE: ${changed}/${files.length} file(s) ${dry ? 'would be ' : ''}modified`);
