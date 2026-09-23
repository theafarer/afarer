#!/usr/bin/env node
/**
 * scan-en-leak.cjs — 检测已翻译语言页面中残留的英文句子
 *
 * 原理: 剥离 script/style/标签后，按行取文本；命中
 *   "ASCII 占比 > 0.85 且无 fr/es 等重音字符 且含常见英文虚词"
 * 即视为疑似英文残留（启发式，结果需人工复核）。
 *
 * 用法（仓库根目录执行，需已构建 dist/）:
 *   node TOOLS/verify/scan-en-leak.cjs fr es                      # 扫描 fr/es 首页
 *   node TOOLS/verify/scan-en-leak.cjs fr --page about/index.html
 *   node TOOLS/verify/scan-en-leak.cjs de fr es --page solutions/corporate-sup-event-package/index.html
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

const args = process.argv.slice(2);
let page = 'index.html';
const langs = [];
for (const a of args) {
  if (a === '--page') continue;
  // --page 的下一个参数是路径
  if (args.indexOf(a) > 0 && args[args.indexOf(a) - 1] === '--page') { page = a; continue; }
  langs.push(a);
}
if (!langs.length) {
  console.error('用法: node TOOLS/verify/scan-en-leak.cjs <lang> [lang ...] [--page dist相对路径]');
  process.exit(1);
}

for (const l of langs) {
  const p = path.join(DIST, l, page);
  if (!fs.existsSync(p)) {
    console.log(`=== ${l} ${page}: FILE NOT FOUND, skip ===`);
    continue;
  }
  const c = fs.readFileSync(p, 'utf8');
  const body = c.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const text = body
    .replace(/<[^>]*>/g, '\n')
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s.length > 25);
  const eng = text.filter((s) => {
    const ascii = (s.match(/[a-zA-Z]/g) || []).length / s.length;
    const hasAccent = /[àâäéèêëîïôöùûüçñáéíóú¿¡]/i.test(s);
    const engWords = /\b(the|and|with|for|your|our|from|are|was|have|this|that|will)\b/i.test(s);
    return ascii > 0.85 && !hasAccent && engWords;
  });
  console.log(`=== ${l} ${page} English-looking lines: ${eng.length} ===`);
  [...new Set(eng)].slice(0, 12).forEach((s) => console.log('  ' + s.substring(0, 110)));
}
