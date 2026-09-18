# TOOLS — afarer 网站编辑脚本 / 工具说明

本目录集中存放本项目（afarer 多语言 B2B 官网）在内容编辑与国际化（i18n）批处理中使用过的脚本与工具。大部分脚本为**一次性编辑辅助工具**，不参与 `npm run build` 构建链（构建链脚本仍在 `scripts/`，由 `package.json` 调度）。复制或运行前请先阅读各脚本头部注释。

> 注意：`scripts/_*.cjs` 中仅以下 8 个属于构建链、必须保留在 `scripts/`：`_gen-pages.cjs`、`_gen-seo-meta.cjs`、`_gen-uiall.cjs`、`_check-yaml-images.cjs`、`_find-yaml-context.cjs`、`_fix-image-paths.cjs`、`_fix-import.cjs`、`_patch-pages.cjs`。

---

## 目录结构

```
TOOLS/
├── tool_instrction.md      # 本文档：工具用途清单
├── meta-inject/            # SEO meta 批量注入工具 + 各语言 meta 数据源
│   ├── _inject-meta.cjs        # 通用注入器（读 _meta-{lang}.cjs → 写入 {lang}/*.yaml）
│   ├── _inject-en-meta.cjs     # 英文页 meta 注入（PAGE_META 数据驱动）
│   ├── _inject-fr-meta.cjs     # 法语页 meta 注入/更新
│   ├── _inject-home-meta.cjs   # 主页 meta 注入（多语言 hard-coded 数据）
│   ├── _en-meta-source.json    # 英文 meta 源数据（供翻译参考）
│   └── _meta-{lang}.cjs ×21    # 各语言 meta 数据（ar/cs/da/de/el/es/fi/fr/it/ja/ko/nl/no/pl/pt/ro/ru/sv/th/tr/zh）
├── i18n-merge/             # i18n-config.json 的多语言 UI 字符串合并工具
│   ├── _merge-langs.cjs        # 合并器：node _merge-langs.cjs de nl ...
│   └── _lang-{lang}.cjs ×21    # 各语言 UI 字符串键值数据
├── i18n-fix/               # i18n-config.json 修复工具
│   ├── _fix-i18n.cjs          # 恢复损坏的 compare.afarerVsTraditional.* 英文值
│   └── _fix-i18n-ranges.cjs   # 修正常见 en 值范围/数字/符号格式
└── one-off/                # 一次性定点修复工具
    ├── add-home-distributor.cjs   # 首页 CTA 添加国家分销商入口（22 语言）
    ├── fix-moq-quote.cjs          # 修复 distributor-program.yaml 中 '300–1,000' 无引号被流式解析为 flow 序列
    └── set-logo.cjs               # 批量设置 src/config*.yaml 的 branding logo_image/logo_alt 与 organization.logo
```

---

## 工具用途明细

### 1. meta-inject/ — SEO meta 批量注入

页面的 `meta:` 块（title/description/keywords）是 SEO 元数据的来源（构建时由 `scripts/_gen-seo-meta.cjs` 生成 `src/i18n/generated/seo-meta.ts`）。以下工具用于为缺失 meta 的语言页面批量补齐。

| 文件                    | 用途                                                                                                                                                 | 用法                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `_inject-meta.cjs`      | 将 `_meta-{lang}.cjs` 中的翻译 meta 写入 `src/data/pages/{lang}/*.yaml`（仅补缺，已存在则跳过）。**注意**：仅写入 YAML 顶端 `meta:` 块，不改动正文。 | `node TOOLS/meta-inject/_inject-meta.cjs [lang ...]`（不带参数 = 处理全部 21 语言） |
| `_inject-en-meta.cjs`   | 为英文根文件补 meta（PAGE_META 内置数据）。                                                                                                          | `node TOOLS/meta-inject/_inject-en-meta.cjs`                                        |
| `_inject-fr-meta.cjs`   | 注入/更新法语页 meta（数据内置）。                                                                                                                   | `node TOOLS/meta-inject/_inject-fr-meta.cjs`                                        |
| `_inject-home-meta.cjs` | 主页 meta 注入（多语言 hard-coded，含 OEM/ODM 关键词样本）。                                                                                         | `node TOOLS/meta-inject/_inject-home-meta.cjs`                                      |
| `_en-meta-source.json`  | 英文 meta 源数据（页面名 → title/description/keywords），作为翻译与改写的中性基准。                                                                  | 被 `_inject-meta.cjs` 一族引用；也可人工打开对照。                                  |
| `_meta-{lang}.cjs`      | 各语言 meta 数据文件（`module.exports = { page: {title, description, keywords} }`）。                                                                | 被 `_inject-meta.cjs` 按 `TOOLS/meta-inject/_meta-{lang}.cjs` 读取。                |

**运行前置条件：** Node.js ≥ 22，项目根目录（`process.cwd()` 为仓库根）下执行；需已安装 `yaml` 依赖（`npm i yaml` 或复用项目 node_modules 时用 `npx` 在仓库根跑）。

### 2. i18n-merge/ — UI 字符串合并

站点 UI 字符串的 SSOT 是 `src/data/site/i18n-config.json`。当某语言键缺失或为空时，用翻译好的键值文件回填。

| 文件               | 用途                                                                                                                   | 用法                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `_merge-langs.cjs` | 将 `_lang-{lang}.cjs` 提供的键值并入 `i18n-config.json`（仅当目标键 `undefined` 或 `''` 时才写入，避免覆盖现有翻译）。 | `node TOOLS/i18n-merge/_merge-langs.cjs de nl`（可传多个语言码）    |
| `_lang-{lang}.cjs` | 各语言 UI 字符串键值数据（扁平 `"path.to.key": "译文"`）。                                                             | 被 `_merge-langs.cjs` 按 `TOOLS/i18n-merge/_lang-{lang}.cjs` 读取。 |

**注意事项：** 合并完成后必须重新生成 `public/data/i18n-config.json` 与 `src/i18n/generated/ui-all.ts`：在仓库根执行 `node scripts/generate-data-json.mjs && node scripts/_gen-uiall.cjs`（或直接 `npm run build`）。若含中文等 CJK，写入时用 UTF-8 无 BOM（本项目脚本均为 `utf8`）。

### 3. i18n-fix/ — i18n-config.json 修复

| 文件                   | 用途                                                                                                                                 | 用法                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `_fix-i18n.cjs`        | 修复 `i18n-config.json` 中损坏的英文 `compare.afarerVsTraditional.*` 值（从 astro fallback 源恢复）；同时处理 BOM、UTF-8 编码问题。  | `node TOOLS/i18n-fix/_fix-i18n.cjs`        |
| `_fix-i18n-ranges.cjs` | 修复 en 值中范围/数字/符号格式（如 `300–1,000` 等会被 YAML 流式解析破坏的写法），自动备份到 `%TEMP%\opencode\i18n-config.json.bak`。 | `node TOOLS/i18n-fix/_fix-i18n-ranges.cjs` |

### 4. one-off/ — 一次性定点工具

针对特定内容问题的定点修复脚本，通常可安全重跑（幂等）。

| 文件                       | 用途                                                                                                                                                                                                      | 用法                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `set-logo.cjs`             | 遍历 `src/config*.yaml`（en 根 + 21 语言），把 `branding.logo_image` 设为 `/android-chrome-192x192.png`、`branding.logo_alt` 设为 `Afarer_Logo`、`organization.logo` 设为 `/android-chrome-512x512.png`。 | 在仓库根 `node TOOLS/one-off/set-logo.cjs`；改路径只需编辑文件内两处字符串 |
| `fix-moq-quote.cjs`        | 修复全部 `distributor-program.yaml`（en + 21 语言）中 `300–1,000` 缺失引号、会被 YAML 解析成 flow 序列的问题：替换为 `'300–1,000'`。                                                                      | 在仓库根 `node TOOLS/one-off/fix-moq-quote.cjs`                            |
| `add-home-distributor.cjs` | 批量给主页（en + 21 语言 `home.yaml`）追加国家分销商 CTA 文案/链接，并注册导航项。注意：该脚本按当时 (2026) 页面结构编写，重跑前请先 diff 复核。                                                          | **谨慎使用**，先 `git diff` 预览                                           |

---

## 通用规则（编码 / 编码安全 — 必读）

1. **PowerShell 中文乱码问题：** 在中文 Windows（codepage 936）下，`Get-Content`/`Set-Content` 默认 GBK/ANSI；读写 UTF-8 翻译文件必须显式 `-Encoding UTF8`。Node 脚本读取/写入一律用 `utf8`（本项目所有 JS/JSON/YAML 均为 UTF-8 无 BOM）。
2. **永不手工编辑生成文件：** `src/i18n/generated/**`、`public/data/*.json`、`src/components/ui/icon-*.ts` 为构建产物，均由构建链重新生成；内容改动后跑 `npm run build`（或在仓库根手动跑生成链）。
3. **改动后校验：** `npm run check`（astro + eslint + prettier + i18n 四段）与 `npm run build`。
4. **YAML 引号：** 含 `–`（en dash）、`,`、`,` 等易被 YAML flow 解析的字符串必须加引号（见 `fix-moq-quote.cjs` 的教训）。

---

## 关联文档

- 构建链 & 文件架构：`README.md`、`TECH.md`
- 代理规则 & 编码铁则：`AGENTS.md`
- 页面内容 SSOT：`src/data/pages/`（EN 根 + 21 语言目录），`src/data/site/i18n-config.json`（UI 字符串）
