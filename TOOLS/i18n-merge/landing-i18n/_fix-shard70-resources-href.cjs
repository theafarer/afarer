#!/usr/bin/env node
/**
 * Shard 70 — 挂账修复 C1a:brand-why-afarer.yaml 18 locale 裸 /resources 404 href
 *
 * 背景:18 个 locale 的 hero CTA "Download product catalog" 链到 /resources(根级不存在,
 * dist 无 /resources/index.html → 404)。EN/fr 正确写法为 /resources/download-catalog。
 *
 * 修复:所有 locale brand-why-afarer.yaml 中 `href: /resources`(行尾裸)→ `href: /resources/download-catalog`。
 * 用法: node TOOLS/i18n-merge/landing-i18n/_fix-shard70-resources-href.cjs [--dry]
 */
const fs = require('fs');
const path = require('path');

const PAGES = path.resolve(__dirname, '..', '..', '..', 'src', 'data', 'pages');
const DRY = process.argv.includes('--dry');
const BARE = /(\s*href:\s+)\/resources(\s*)$/;

let files = 0;
let lines = 0;
for (const entry of fs.readdirSync(PAGES, { withFileTypes: true })) {
  const f = entry.isFile()
    ? path.join(PAGES, 'brand-why-afarer.yaml')
    : path.join(PAGES, entry.name, 'brand-why-afarer.yaml');
  if (!fs.existsSync(f)) continue;
  const raw = fs.readFileSync(f, 'utf8');
  const out = raw.split('\n').map((l) => {
    if (BARE.test(l)) {
      lines++;
      return l.replace(BARE, '$1/resources/download-catalog$2');
    }
    return l;
  });
  if (out.join('\n') !== raw) {
    files++;
    console.log(`fixed: ${path.relative(PAGES, f).replace(/\\/g, '/')}`);
    if (!DRY) fs.writeFileSync(f, out.join('\n'), 'utf8');
  }
}
console.log(`\n=== ${files} file(s), ${lines} line(s) ${DRY ? '(DRY)' : '(written)'} ===`);
if (lines !== 18) {
  console.error(`FATAL: expected 18 bare /resources hrefs, found ${lines}`);
  process.exit(1);
}
