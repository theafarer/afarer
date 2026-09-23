#!/usr/bin/env node
/**
 * verify-langs.cjs — 构建后 dist 多语言六项整站验证
 *
 * 检查项:
 *   1) dist/zh 不存在（中文版本已下线，出现即为回归）
 *   2) 未翻译语言页面 EN 回退正常（以 hr/about 为样本）
 *   3) hreflang 交替链接齐全（含新增语言，不含 zh）
 *   4) RTL 语言（he/ar）页面 dir="rtl"
 *   5) 语言切换器包含全部语言链接（以 en/about 为样本）
 *   6) 非 ja/ko 页面无 CJK（中文）泄漏（白名单: 日本語/한국语言标签）
 *
 * 用法（仓库根目录执行，需先 npm run build）:
 *   node TOOLS/verify/verify-langs.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('ERROR: dist/ 不存在或未构建，请先在仓库根执行 npm run build');
  process.exit(1);
}

// 语言列表从 SSOT languages.yaml 动态读取
const langYaml = fs.readFileSync(path.join(ROOT, 'src/data/site/languages.yaml'), 'utf8');
const locales = [...langYaml.matchAll(/locale:\s*(\S+)/g)].map((m) => m[1]);
console.log(`languages from languages.yaml (${locales.length}): ${locales.join(',')}\n`);

// 1. zh pages must be gone
console.log('1. dist/zh exists:', fs.existsSync(path.join(DIST, 'zh')), '(must be false)');

// 2. 未翻译语言 EN fallback（hr 无专属翻译，应回退英文）
const hr = fs.readFileSync(path.join(DIST, 'hr/about/index.html'), 'utf8');
console.log('2. /hr/about renders EN fallback:', /About/.test(hr));

// 3. hreflang alternates on /hr/about
const alt = [...hr.matchAll(/hreflang="([^"]+)"/g)].map((m) => m[1]).sort();
const newLangs = ['hr', 'he', 'tl'];
console.log(
  '3. hreflang count:', alt.length,
  '| has hr,he,tl:', newLangs.every((l) => alt.includes(l)),
  '| has zh:', alt.includes('zh'), '(must be false)'
);

// 4. RTL
for (const l of ['he', 'ar']) {
  const html = fs.readFileSync(path.join(DIST, `${l}/index.html`), 'utf8');
  console.log(`4. /${l}/ dir=rtl:`, /<html[^>]*dir="rtl"/.test(html));
}

// 5. language switcher — links are page-relative: /xx/about
const en = fs.readFileSync(path.join(DIST, 'en/about/index.html'), 'utf8');
const missing = locales.filter((l) => !en.includes(`href="/${l}/about"`));
console.log('5. switcher: locales missing from /en/about:', missing.length ? missing.join(',') : `none (all ${locales.length} present)`);

// 6. CJK scan on non-ja/ko dist HTML（日本語/한국어 为切换器标签白名单）
const CJK = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
const WHITELIST = new Set(['日本語', '한국어', '中文']);
const badHits = new Map();
function walkDir(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (e.name === 'ja' || e.name === 'ko' || e.name === '_astro') continue;
      walkDir(path.join(dir, e.name), out);
    } else if (/\.(html|txt|xml|json)$/.test(e.name)) {
      out.push(path.join(dir, e.name));
    }
  }
  return out;
}
const files = walkDir(DIST, []);
// llms.txt / llms-full.txt 聚合了全部语言页面（含 ja/ko 标题），其中 CJK 属合法内容
const scanFiles = files.filter((f) => !/llms[^/]*\.txt$/.test(path.basename(f)));
let scanned = 0;
for (const f of scanFiles) {
  scanned++;
  const rel = path.relative(DIST, f).replace(/\\/g, '/');
  let c;
  try { c = fs.readFileSync(f, 'utf8'); } catch { continue; }
  if (!CJK.test(c)) continue;
  const strs = c.match(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]{1,20}/g) || [];
  const filtered = [...new Set(strs)].filter(
    (s) => !WHITELIST.has(s) && ![...s].every((ch) => [...WHITELIST].some((w) => w.includes(ch)))
  );
  if (filtered.length) badHits.set(rel, filtered.slice(0, 4).join(' | '));
}
console.log(`6. dist files scanned: ${scanned} | files with unexpected CJK: ${badHits.size}`);
let i = 0;
for (const [f, s] of badHits) {
  if (i++ < 15) console.log('   ', f, '=>', String(s).substring(0, 100));
}
console.log('DONE');
