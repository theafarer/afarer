#!/usr/bin/env node
/**
 * _normalize-emdash.cjs — 全站 em dash 空格规范化 (2026-09)
 *
 * 背景: 全站自初版提交起存在 "word —word" (em dash 前有空格、后无空格) 的作者风格,
 * 与 " — " 规范排版并存 (~1,532 处, 含 EN 根)。经确认全站统一为 "word — word"。
 * src/i18n/generated/*.json 为生成物, 由 build 链自动再生, 勿手改。
 *
 * 规则:
 *   非 ja/ko (含 th/ar 等):
 *     1. "L—L"  → "L — L"   (两侧均无空格)
 *     2. "L— "  → "L — "    (前无空格后有)
 *     3. "—L"   → "— L"     (后无空格: 覆盖 " —L"、">—L"、行首 "—L"、"\n—L")
 *   ja/ko (CJK 闭合式为标准):
 *     仅 " —L" → " — L"    (前有空格才补后空格; 行首/br 后/L—L 闭合式保留)
 *   en dash (–) 与数字区间一律不动。
 *
 * 用法 (仓库根):
 *   node TOOLS/i18n-merge/warning-cleanup/_normalize-emdash.cjs --dry    # 统计不写盘
 *   node TOOLS/i18n-merge/warning-cleanup/_normalize-emdash.cjs --patch  # 应用
 * 幂等: 二次运行 0 改动。
 */
const fs = require('fs');
const path = require('path');

const dry = process.argv.includes('--dry');
const patch = process.argv.includes('--patch');
if (!dry && !patch) {
  console.log('用法: node _normalize-emdash.cjs --dry | --patch');
  process.exit(1);
}

const SRCDATA = path.resolve(__dirname, '../../../src/data');
const CJK = new Set(['ja', 'ko']);

function normalize(src, isCJK) {
  let out = src;
  let count = 0;
  const tally = (n) => {
    count += n;
    return out;
  };
  if (isCJK) {
    out = out.replace(/ —(\p{L})/gu, (m, l) => {
      count++;
      return ` — ${l}`;
    });
  } else {
    out = out
      .replace(/(\p{L})—(\p{L})/gu, (m, a, b) => {
        count++;
        return `${a} — ${b}`;
      })
      .replace(/(\p{L})—(?=[ \t])/gu, (m, a) => {
        count++;
        return `${a} —`;
      })
      .replace(/—(\p{L})/gu, (m, l) => {
        count++;
        return `— ${l}`;
      });
  }
  return { out, count };
}

// 目标: src/data/pages (页面 YAML, locale 子目录) + src/data/site (站点级, base.<loc>.yaml 后缀式)。
// 其余 src/data 子目录 (biz-solutions/case-use/geo/seo/technology) 无此模式。
const files = [];
const LOCS = [
  'ar',
  'cs',
  'da',
  'de',
  'el',
  'es',
  'fi',
  'fr',
  'it',
  'ja',
  'ko',
  'nl',
  'no',
  'pl',
  'pt',
  'ro',
  'ru',
  'sv',
  'th',
  'tr',
  'zh',
];
for (const f of fs.readdirSync(path.join(SRCDATA, 'pages'))) {
  if (f.endsWith('.yaml')) files.push({ p: path.join(SRCDATA, 'pages', f), loc: 'EN' });
}
for (const loc of fs
  .readdirSync(path.join(SRCDATA, 'pages'))
  .filter((d) => fs.statSync(path.join(SRCDATA, 'pages', d)).isDirectory())
  .sort()) {
  for (const f of fs.readdirSync(path.join(SRCDATA, 'pages', loc))) {
    if (f.endsWith('.yaml')) files.push({ p: path.join(SRCDATA, 'pages', loc, f), loc });
  }
}
for (const f of fs.readdirSync(path.join(SRCDATA, 'site'))) {
  if (!f.endsWith('.yaml')) continue;
  const suffix = f.match(/^(.+)\.([a-z]{2})\.yaml$/);
  if (suffix && LOCS.includes(suffix[2])) {
    files.push({ p: path.join(SRCDATA, 'site', f), loc: suffix[2] });
  } else {
    files.push({ p: path.join(SRCDATA, 'site', f), loc: 'EN' });
  }
}

let total = 0;
let filesChanged = 0;
const perFile = [];
for (const { p, loc } of files) {
  const src = fs.readFileSync(p, 'utf8');
  const { out, count } = normalize(src, CJK.has(loc));
  if (count > 0) {
    total += count;
    filesChanged++;
    perFile.push(`${count}\t${path.relative(SRCDATA, p)}`);
    if (patch) fs.writeFileSync(p, out, 'utf8');
  }
}

// ---- Phase 2: src 全域 + public 静态 JSON (TS/astro/mdx/config/内容数据) ----
// 排除: generated/ (build 再生)、public/data/ (git-ignore, build 复制)、phase-1 已处理的
// src/data/pages/** 与 src/data/site/*.yaml、node_modules、dist、.git。
// 规则 (CJK 守卫版, 适用于混合语言文件):
//   1. L—L → L — L, 但任一侧为 CJK 字符 (Han/Hiragana/Katakana/Hangul) 时跳过 (ja/ko 闭合式保留)
//   2. L—(空格) → L — (同上守卫)
//   3. 非字母后 —L → — L (恒适用; 与 ja/ko " —L"→" — L" 一致)
const REPO = path.resolve(__dirname, '../../..');
const CJKCHAR = /[\u1100-\u11ff\u3040-\u30ff\u3130-\u318f\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/;
const isCJKChar = (ch) => ch && CJKCHAR.test(ch);

function normalizeMixed(src) {
  let count = 0;
  const out = src
    .replace(/(\p{L})—(\p{L})/gu, (m, a, b) => {
      if (isCJKChar(a) || isCJKChar(b)) return m;
      count++;
      return `${a} — ${b}`;
    })
    .replace(/(\p{L})—(?=[ \t])/gu, (m, a) => {
      if (isCJKChar(a)) return m;
      count++;
      return `${a} —`;
    })
    .replace(/(?<![\p{L}\p{N}])—(\p{L})/gu, (m, l) => {
      count++;
      return `— ${l}`;
    });
  return { out, count };
}

const EXT = /\.(ts|astro|md|mdx|ya?ml|json|mjs|cjs|html)$/;
const SKIP_DIR = /node_modules|\.git(\/|$)|dist|generated/i;
const SKIP_FILE = (rel) =>
  rel.startsWith('src/data/pages/') ||
  /^src\/data\/site\/[^/]+\.ya?ml$/.test(rel) ||
  rel.startsWith('public/data/') ||
  rel.includes('package-lock') ||
  rel.startsWith('TOOLS/') ||
  rel.startsWith('scripts/');

const phase2 = [];
for (const root of ['src', 'public']) {
  (function walk(d) {
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f);
      const rel = path.relative(REPO, p).replace(/\\/g, '/');
      if (fs.statSync(p).isDirectory()) {
        if (!SKIP_DIR.test(rel)) walk(p);
      } else if (EXT.test(f) && !SKIP_DIR.test(rel) && !SKIP_FILE(rel)) {
        phase2.push(p);
      }
    }
  })(path.join(REPO, root));
}

let total2 = 0;
let changed2 = 0;
const perFile2 = [];
for (const p of phase2) {
  const src = fs.readFileSync(p, 'utf8');
  const { out, count } = normalizeMixed(src);
  if (count > 0) {
    total2 += count;
    changed2++;
    perFile2.push(`${count}\t${path.relative(REPO, p).replace(/\\/g, '/')}`);
    if (patch) fs.writeFileSync(p, out, 'utf8');
  }
}
perFile2.sort((a, b) => parseInt(b) - parseInt(a));
console.log(perFile2.slice(0, 25).join('\n'));
console.log(
  `\n[PHASE2 ${dry ? 'DRY' : 'PATCH'}] replacements: ${total2}, files changed: ${changed2} / ${phase2.length}`
);
