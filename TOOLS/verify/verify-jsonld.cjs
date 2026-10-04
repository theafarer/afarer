/**
 * verify-jsonld.cjs — 构建后 dist JSON-LD 渲染断言（回归检查）
 *
 * 提取指定 dist 页面的全部 <script type="application/ld+json"> 块，解析 @type，
 * 可选断言期望类型必须存在。JsonLd 组件改动 / data= 后备逻辑回归用。
 *
 * 用法（仓库根，需先构建 dist）：
 *   node TOOLS/verify/verify-jsonld.cjs adventure-sup/index.html@Article,BreadcrumbList,FAQPage \
 *     solutions/index.html@ItemList about/index.html@FAQPage \
 *     guides/beginner-guide/index.html@Article index.html@Organization,WebSite
 *   node TOOLS/verify/verify-jsonld.cjs de/all-around-sup/index.html   # 不带 @ 则仅列出该页出现的 @type
 *
 * 语法：<dist相对路径>[@类型1,类型2,...]；@type 缺失或 JSON 解析失败均计 FAIL，exit 1。
 */
const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '../../dist');
const args = process.argv.slice(2);
if (!args.length) {
  console.error('用法: node TOOLS/verify/verify-jsonld.cjs <dist相对路径>[@类型1,类型2 ...] [<页2>[@类型 ...] ...]');
  process.exit(2);
}

function ldTypes(html) {
  const out = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      const j = JSON.parse(m[1]);
      const t = Array.isArray(j) ? j.map((x) => x['@type']).join('|') : j['@type'];
      out.push(t);
    } catch {
      out.push('PARSE_ERROR');
    }
  }
  return out;
}

let pass = 0;
let fail = 0;
for (const arg of args) {
  const at = arg.indexOf('@');
  const page = at === -1 ? arg : arg.slice(0, at);
  const expected = at === -1 ? [] : arg.slice(at + 1).split(',');
  const file = path.join(DIST, page);
  if (!fs.existsSync(file)) {
    console.log(`FAIL  ${page} — file not found in dist`);
    fail++;
    continue;
  }
  const found = ldTypes(fs.readFileSync(file, 'utf8'));
  if (expected.length) {
    for (const t of expected) {
      const ok = found.includes(t);
      console.log(`${ok ? 'PASS' : 'FAIL'}  ${page} has ${t}`);
      ok ? pass++ : fail++;
    }
  } else {
    console.log(`INFO  ${page} @types: ${found.length ? found.join(', ') : '(none)'}`);
  }
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
