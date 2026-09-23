#!/usr/bin/env node
/**
 * ui-keys.cjs — i18n-config.json UI 键批量管理（增/删/查，全语言）
 *
 * i18n UI 字符串 SSOT: src/data/site/i18n-config.json（扁平 "path.to.key" 结构，
 * 每个语言一个顶层对象，缺失键运行时回退 en：`map[lang][key] || map.en[key]`）。
 *
 * 用法（仓库根目录执行）:
 *   node TOOLS/i18n-manage/ui-keys.cjs count                 # 每种语言的键数统计
 *   node TOOLS/i18n-manage/ui-keys.cjs missing [lang]        # 各语言相对 en 缺失的键（不带 lang = 全部语言）
 *   node TOOLS/i18n-manage/ui-keys.cjs remove <key> [key...] # 从所有语言删除指定键（模块下线后清死键）
 *   node TOOLS/i18n-manage/ui-keys.cjs add <key> <en-value>  # 新增键（写入 en；其余语言运行时回退 en）
 *   node TOOLS/i18n-manage/ui-keys.cjs set <lang> <key> <value> # 为指定语言写入某键译文
 *
 * ⚠ 修改后必须重新构建以同步生成物（public/data/i18n-config.json 与
 *   src/i18n/generated/ui-all.ts）: 在仓库根执行
 *   node scripts/generate-data-json.mjs && node scripts/_gen-uiall.cjs
 *   （或直接 npm run build）。
 * ⚠ 不要为某语言写入空对象/空串来"注册"语言——空值会破坏 `|| map.en` 回退。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const FILE = path.join(ROOT, 'src/data/site/i18n-config.json');

if (!fs.existsSync(FILE)) {
  console.error('ERROR: 未找到 src/data/site/i18n-config.json（请在仓库根执行）');
  process.exit(1);
}

const [cmd, ...rest] = process.argv.slice(2);
const cfg = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const langs = Object.keys(cfg);
const enKeys = Object.keys(cfg.en);

switch (cmd) {
  case 'count':
    for (const l of langs) console.log(`${l}: ${Object.keys(cfg[l]).length} keys`);
    console.log(`(en baseline: ${enKeys.length})`);
    break;

  case 'missing': {
    const target = rest[0];
    for (const l of langs) {
      if (l === 'en') continue;
      if (target && l !== target) continue;
      const miss = enKeys.filter((k) => !(k in cfg[l]));
      if (miss.length) console.log(`${l}: ${miss.length} missing => ${miss.slice(0, 8).join(', ')}${miss.length > 8 ? ' ...' : ''}`);
      else console.log(`${l}: 0 missing (complete)`);
    }
    break;
  }

  case 'remove': {
    if (!rest.length) { console.error('用法: ui-keys.cjs remove <key> [key...]'); process.exit(1); }
    let removed = 0;
    for (const l of langs) for (const k of rest) if (k in cfg[l]) { delete cfg[l][k]; removed++; }
    save();
    console.log(`removed ${removed} keys across ${langs.length} langs; en now ${Object.keys(cfg.en).length} keys`);
    break;
  }

  case 'add': {
    const [key, ...val] = rest;
    if (!key || !val.length) { console.error('用法: ui-keys.cjs add <key> <en-value>'); process.exit(1); }
    const value = val.join(' ');
    if (key in cfg.en) { console.error(`ABORT: key "${key}" already exists in en`); process.exit(1); }
    cfg.en[key] = value;
    save();
    console.log(`added "${key}" to en (other langs fall back to en at runtime)`);
    break;
  }

  case 'set': {
    const [l, key, ...val] = rest;
    if (!l || !key || !val.length) { console.error('用法: ui-keys.cjs set <lang> <key> <value>'); process.exit(1); }
    if (!cfg[l]) { console.error(`ABORT: lang "${l}" not in i18n-config.json (do NOT create empty sections — see header warning)`); process.exit(1); }
    if (!(key in cfg.en)) { console.error(`ABORT: key "${key}" not in en baseline; run "add" first`); process.exit(1); }
    cfg[l][key] = val.join(' ');
    save();
    console.log(`set ${l}["${key}"]`);
    break;
  }

  default:
    console.error('用法: ui-keys.cjs <count|missing|remove|add|set> ...（详见文件头部注释）');
    process.exit(1);
}

function save() {
  fs.writeFileSync(FILE, JSON.stringify(cfg, null, 2) + '\n', 'utf8');
}
