#!/usr/bin/env node
/**
 * scan-cjk.cjs — 源码/产物 CJK（中文）泄漏扫描
 *
 * 全站除 ja/ko 页面与语言切换器标签（日本語/한국어/中文）外不允许出现 CJK。
 * 用于中文化清理后的回归检查，或排查 mojibake（GBK 误解码产生的乱码汉字）。
 *
 * 用法（仓库根目录执行）:
 *   node TOOLS/i18n-manage/scan-cjk.cjs src     # 扫描 src/ 与 public/ 源码
 *   node TOOLS/i18n-manage/scan-cjk.cjs dist    # 扫描 dist/ 产物（跳过 ja/ko/_astro）
 *
 * 白名单（切换器语言标签）: 日本語、한국어、中文
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const mode = process.argv[2];
if (mode !== 'src' && mode !== 'dist') {
  console.error('用法: node TOOLS/i18n-manage/scan-cjk.cjs src|dist');
  process.exit(1);
}

const CJK = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
const HANGUL = /[\uac00-\ud7af]/;
const WHITELIST = new Set(['日本語', '한국어', '中文']);

const targets = mode === 'src'
  ? [path.join(ROOT, 'src'), path.join(ROOT, 'public')]
  : [path.join(ROOT, 'dist')];

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '_astro', 'ja', 'ko', 'build', '.astro']);
const EXT = mode === 'src' ? /\.(astro|ts|tsx|js|cjs|mjs|json|yaml|yml|md|mdx|txt|html)$/ : /\.(html|txt|xml|json)$/;

const hits = new Map();
function walk(dir) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      walk(full);
    } else if (EXT.test(e.name)) {
      // llms*.txt 聚合全部语言页面（含 ja/ko 标题），两种模式均跳过
      if (/^llms.*\.txt$/.test(e.name)) continue;
      let c;
      try { c = fs.readFileSync(full, 'utf8'); } catch { continue; }
      const strs = c.match(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]{1,20}/g) || [];
      const filtered = [...new Set(strs)].filter(
        (s) => !WHITELIST.has(s) && ![...s].every((ch) => [...WHITELIST].some((w) => w.includes(ch)))
      );
      if (filtered.length && (CJK.test(strs.join('')) || mode === 'src')) {
        // src 模式连韩文白名单外的 hangul 也报；dist 模式 ko 目录已跳过
        hits.set(path.relative(ROOT, full).replace(/\\/g, '/'), filtered.slice(0, 5).join(' | '));
      }
    }
  }
}
for (const t of targets) walk(t);

console.log(`scanned ${mode === 'src' ? 'src/ + public/' : 'dist/'} | files with unexpected CJK: ${hits.size}`);
let i = 0;
for (const [f, s] of hits) {
  if (i++ < 30) console.log('  ', f, '=>', String(s).substring(0, 120));
}
if (hits.size > 30) console.log(`  ... and ${hits.size - 30} more`);
console.log(hits.size === 0 ? 'CLEAN' : 'REVIEW NEEDED (确认是否为合法 ja/ko 内容或文档)');
