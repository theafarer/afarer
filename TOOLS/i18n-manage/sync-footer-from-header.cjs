#!/usr/bin/env node
/**
 * sync-footer-from-header.cjs — 页脚链接组与导航栏保持一致（全语言批量）
 *
 * 目的: 页脚布局参照导航栏。读取 src/data/site/navigation.yaml（EN 渲染 SSOT）
 * 及全部 src/data/site/navigation.{lang}.yaml（Keystatic 管理端镜像），
 * 将每个文件的 footer.links 替换为同文件 header.links 的结构：
 *   每个导航组 {text, links[]} → 页脚组 {title: text, links: [...]（深拷贝）}
 * footer.secondaryLinks / socialLinks / footNote 保持不变。
 *
 * 用法（仓库根执行）:
 *   node TOOLS/i18n-manage/sync-footer-from-header.cjs            # 全部 navigation*.yaml
 *   node TOOLS/i18n-manage/sync-footer-from-header.cjs fr de      # 仅指定语言
 *
 * 注意: 脚本会整体重写 YAML（yaml 库再序列化，缩进/引号风格可能与原文件略有差异），
 * 运行后请 git diff 复核。页脚渲染使用的标题翻译依赖 Footer.astro navTextMap
 * 与 i18n-config.json 的 nav.* 键（缺失语言回退 EN，与导航栏行为一致）。
 */
const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const ROOT = process.cwd();
const DIR = path.join(ROOT, 'src/data/site');
const onlyLangs = process.argv.slice(2);

const files = fs
  .readdirSync(DIR)
  .filter((f) => /^navigation(?:\.[a-z]{2})?\.yaml$/.test(f))
  .filter((f) => {
    if (!onlyLangs.length) return true;
    if (f === 'navigation.yaml') return onlyLangs.includes('en');
    return onlyLangs.includes(f.match(/^navigation\.([a-z]{2})\.yaml$/)[1]);
  });

if (!files.length) {
  console.error('未找到匹配的 navigation*.yaml 文件（请在仓库根执行）');
  process.exit(1);
}

let changed = 0;
for (const f of files) {
  const full = path.join(DIR, f);
  const doc = YAML.parse(fs.readFileSync(full, 'utf8'));
  if (!doc?.header?.links || !doc?.footer) {
    console.log(`SKIP ${f}: 缺少 header.links 或 footer 段`);
    continue;
  }
  const before = JSON.stringify(doc.footer.links);
  doc.footer.links = doc.header.links.map((g) => ({
    title: g.text,
    links: (g.links || []).map((l) => ({ text: l.text, href: l.href })),
  }));
  const after = JSON.stringify(doc.footer.links);
  fs.writeFileSync(full, YAML.stringify(doc, { lineWidth: 0 }), 'utf8');
  const isSame = before === after;
  if (!isSame) changed++;
  console.log(
    `${isSame ? 'nochange' : 'UPDATED '} ${f}: ${doc.footer.links.length} groups (${doc.footer.links.map((g) => g.title).join(' / ')})`
  );
}
console.log(`\n${changed}/${files.length} files updated`);
