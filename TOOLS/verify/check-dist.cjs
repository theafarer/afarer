#!/usr/bin/env node
/**
 * check-dist.cjs — dist 产物批量内容核查（全语言）
 *
 * 用于模块增删/修改后的回归验证：指定必须"存在"或"不存在"的字符串，
 * 脚本遍历 dist/{lang}/... 全部语言页面逐一断言并汇总。
 *
 * 用法（仓库根目录执行，需已构建 dist/）:
 *   # 删除模块后验证全语言无残留（例如 Brand Partners logo）:
 *   node TOOLS/verify/check-dist.cjs --page index.html --absent wavefella foida-logo
 *   # 新增/修改后验证全语言均已生效（例如语言菜单 4 列）:
 *   node TOOLS/verify/check-dist.cjs --page index.html --present "grid-cols-4 gap-1"
 *   # 不带 --page 则扫描每种语言目录下的全部 html
 *   node TOOLS/verify/check-dist.cjs --absent some-removed-string
 *
 * 输出: 每种语言的 PASS/FAIL 汇总；退出码 0=全部通过, 1=有失败。
 * 注意: --absent 匹配的是"子串"，若关键词可能出现在其它合法文案中（如
 * "brand partners" 同时出现在质保条款句子里），请用足够特异的关键词，
 * 并人工复核失败项是否为假阳性。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

if (!fs.existsSync(DIST)) {
  console.error('ERROR: dist/ 不存在，请先 npm run build');
  process.exit(1);
}

const args = process.argv.slice(2);
let page = null;
const absent = [];
const present = [];
let mode = null;
for (const a of args) {
  if (a === '--page' || a === '--absent' || a === '--present') {
    mode = a;
    continue;
  }
  if (mode === '--page') {
    page = a;
    mode = null;
  } else if (mode === '--absent') absent.push(a);
  else if (mode === '--present') present.push(a);
}
if (!absent.length && !present.length) {
  console.error(
    '用法: node TOOLS/verify/check-dist.cjs [--page dist相对路径] [--absent s1 s2 ...] [--present s1 s2 ...]'
  );
  process.exit(1);
}

const langYaml = fs.readFileSync(path.join(ROOT, 'src/data/site/languages.yaml'), 'utf8');
const locales = [...langYaml.matchAll(/locale:\s*(\S+)/g)].map((m) => m[1]);

function htmlFilesUnder(dir) {
  const out = [];
  function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.isDirectory()) walk(path.join(d, e.name));
      else if (e.name.endsWith('.html')) out.push(path.join(d, e.name));
    }
  }
  walk(dir);
  return out;
}

let failed = 0;
for (const l of locales) {
  const targets = page ? [path.join(DIST, l, page)] : htmlFilesUnder(path.join(DIST, l));
  let pass = true;
  const detail = [];
  for (const t of targets) {
    if (!fs.existsSync(t)) {
      pass = false;
      detail.push(`MISSING FILE ${path.relative(DIST, t)}`);
      continue;
    }
    const c = fs.readFileSync(t, 'utf8');
    for (const s of absent)
      if (c.includes(s)) {
        pass = false;
        detail.push(`RESIDUAL "${s}" in ${path.relative(DIST, t)}`);
      }
    for (const s of present)
      if (!c.includes(s)) {
        pass = false;
        detail.push(`NOT FOUND "${s}" in ${path.relative(DIST, t)}`);
      }
  }
  console.log(
    `${pass ? 'PASS' : 'FAIL'}  /${l}/${page || '(all html)'}${detail.length ? '  <= ' + detail.slice(0, 5).join(' ; ') : ''}`
  );
  if (!pass) failed++;
}
console.log(failed === 0 ? `ALL PASS (${locales.length} languages)` : `${failed}/${locales.length} languages FAILED`);
process.exit(failed === 0 ? 0 : 1);
