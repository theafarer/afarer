/**
 * scan-jsonld-dead.cjs — 源码侧 JsonLd 死调用扫描（回归检查）
 *
 * 扫描 src 下全部 .astro 文件中的 <JsonLd ...> 调用，按 type → 结构化 prop 映射分类：
 *   - DEAD(no prop, no data)  ：type=Article/BreadcrumbList/... 但既无对应 prop 也无 data= → 组件不渲染（渲染守卫
 *                               Object.keys(schema).length > 2 挡掉空 schema），为真死调用
 *   - DATA-FALLBACK(no prop, has data=)：无 prop 但传了 data= → 2026-10 起组件各分支支持 data 后备，正常渲染
 *
 * 背景：2026-10 修复前 294 处调用中 126 处为死调用（data= 被组件完全忽略）；修复后死调用应为 0。
 * 本脚本用于防止新增页面再写出死调用。
 *
 * 用法（仓库根）：
 *   node TOOLS/verify/scan-jsonld-dead.cjs            # 扫描 + 分类输出
 *   node TOOLS/verify/scan-jsonld-dead.cjs --strict   # 存在 DEAD 时 exit 1（CI/回归用）
 */
const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '../../src');
const STRICT = process.argv.includes('--strict');
const MAP = {
  BreadcrumbList: 'breadcrumbs',
  Product: 'product',
  FAQPage: 'faqs',
  Article: 'article',
  HowTo: 'howto',
  ImageObject: 'image',
  VideoObject: 'video',
  Service: 'service',
  ItemList: 'itemList',
};

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.astro')) out.push(p);
  }
  return out;
}

const files = walk(SRC, []);
let total = 0;
const dead = [];
const dataFallback = [];
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  const re = /<JsonLd\b[\s\S]*?\/>/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    total++;
    const tag = m[0];
    const line = text.slice(0, m.index).split('\n').length;
    const typeM = tag.match(/type=(?:"([^"]+)"|\{[^}]*'([^']+)'\})/);
    const type = typeM ? typeM[1] || typeM[2] : '(none)';
    const hasData = /(^|[\s{])data\s*=\s*\{/.test(tag);
    const needed = MAP[type];
    const hasNeeded = needed ? new RegExp('(^|[\\s{])' + needed + '\\s*=\\s*\\{').test(tag) : true;
    const rel = path.relative(path.resolve(__dirname, '../..'), f).replace(/\\/g, '/');
    if (needed && !hasNeeded) {
      const entry = `${rel}:${line} type=${type}`;
      if (hasData) dataFallback.push(entry + ' [data= fallback]');
      else dead.push(entry + ` DEAD(no ${needed}, no data)`);
    }
  }
}
console.log('total JsonLd usages:', total);
console.log('\n=== data= fallback calls (render via data, OK):', dataFallback.length);
dataFallback.forEach((c) => console.log(' ', c));
console.log('\n=== DEAD calls (no prop, no data, never rendered):', dead.length);
dead.forEach((c) => console.log(' ', c));
if (STRICT && dead.length) {
  console.error(`\nFAIL: ${dead.length} dead JsonLd call(s) — pass the structured prop or data=`);
  process.exit(1);
}
