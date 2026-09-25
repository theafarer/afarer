# TOOLS — afarer 网站编辑脚本 / 工具说明

本目录集中存放本项目（afarer 多语言 B2B 官网）在内容编辑与国际化（i18n）批处理中使用过的脚本与工具。大部分脚本为**一次性编辑辅助工具**，不参与 `npm run build` 构建链（构建链脚本仍在 `scripts/`，由 `package.json` 调度）。复制或运行前请先阅读各脚本头部注释。

> 注意：`scripts/_*.cjs` 中仅以下 8 个属于构建链、必须保留在 `scripts/`：`_gen-pages.cjs`、`_gen-seo-meta.cjs`、`_gen-uiall.cjs`、`_check-yaml-images.cjs`、`_find-yaml-context.cjs`、`_fix-image-paths.cjs`、`_fix-import.cjs`、`_patch-pages.cjs`。

---

## 目录结构

```
TOOLS/
├── tool_instrction.md      # 本文档：工具用途清单
├── verify/                 # 构建后 dist 多语言验证工具（回归检查）
│   ├── verify-langs.cjs        # 六项整站验证：zh 下线 / EN 回退 / hreflang / RTL / 切换器 / CJK 泄漏
│   ├── check-dist.cjs          # 通用内容核查：--present/--absent 关键词 × 全语言批量断言
│   ├── scan-en-leak.cjs        # 已翻译语言页面英文残留扫描（启发式）
│   └── check-solutions-page.cjs# B2B solutions 详情页翻译逐项断言（数据驱动）
├── i18n-manage/            # i18n-config.json UI 键批量管理
│   ├── ui-keys.cjs             # UI 键 count/missing/remove/add/set（全语言）
│   ├── scan-cjk.cjs            # 源码/产物 CJK（中文）泄漏扫描
│   └── sync-footer-from-header.cjs # navigation*.yaml 页脚 links 同步为 header.links 结构
├── meta-inject/            # SEO meta 批量注入工具 + 各语言 meta 数据源
│   ├── _inject-meta.cjs        # 通用注入器（读 _meta-{lang}.cjs → 写入 {lang}/*.yaml）
│   ├── _inject-en-meta.cjs     # 英文页 meta 注入（PAGE_META 数据驱动）
│   ├── _inject-fr-meta.cjs     # 法语页 meta 注入/更新
│   ├── _inject-home-meta.cjs   # 主页 meta 注入（多语言 hard-coded 数据）
│   ├── _en-meta-source.json    # 英文 meta 源数据（供翻译参考）
│   └── _meta-{lang}.cjs ×21    # 各语言 meta 数据（ar/cs/da/de/el/es/fi/fr/it/ja/ko/nl/no/pl/pt/ro/ru/sv/th/tr/zh）
├── i18n-merge/             # i18n-config.json 的多语言 UI 字符串合并工具
│   ├── _merge-langs.cjs        # 合并器：node _merge-langs.cjs de nl ...
│   ├── _dump-missing.cjs       # 导出某语言缺失 UI 键及英文源文到 _missing-en.json
│   ├── _verify-langs.cjs       # 合并前校验 _lang-{lang}.cjs（覆盖 dump 全部键/空值/markup/CJK）
│   ├── _patch-exitintent.cjs   # exitIntent.* 8 键批次：--en 写入 EN 键 / --patch 追加译文到 _lang 文件
│   ├── product-texts-patch/    # product-texts.ts 产品文案翻译批次（补缺失条目 + 修 EN 占位 name/desc）
│   │   ├── _patch-product-texts.cjs  # 补丁器：--dry 报告 / --patch 应用（幂等；按 _pt-data-*.cjs 分片驱动）
│   │   └── _pt-data-{lang|major}.cjs ×14  # 翻译表分片：{ lang: { productId: { name?, desc? } } }，lang 不跨分片
│   ├── _missing-en.json        # 缺失键英文底稿（_dump-missing.cjs 输出，按批次重新生成）
│   └── _lang-{lang}.cjs ×20    # 各语言 UI 字符串键值数据（累积式，随批次增长）
├── i18n-merge/warning-cleanup/  # check:i18n 存量 warning 批量清零（150 → 0）
│   ├── _patch-warnings.cjs     # 补丁器：--dry 试跑 / --patch 应用（幂等；rep 已存在即跳过，含 rep⊃find 的插入式 op）
│   └── _ops-data-01..23.cjs    # 646 个修复 op 分片：EN 令牌删除恢复、fi/quality 等整文件乱码、icon_bg 误译、FAQ 复制粘贴答案、卡片旧文案/EN 泄漏、机械疤痕/令牌恢复/品牌拼写/列表分隔符等债务清理
├── eslint/                 # 代码规范批量清理工具
│   └── strip-explicit-any.cjs  # 批量移除 .astro 回调参数冗余 `: any` 注解（支持 --dry 试跑）
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

| 文件                    | 用途                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 用法                                                                                                                                    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `_merge-langs.cjs`      | 将 `_lang-{lang}.cjs` 提供的键值并入 `i18n-config.json`（仅当目标键 `undefined` 或 `''` 时才写入，避免覆盖现有翻译）。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `node TOOLS/i18n-merge/_merge-langs.cjs de nl`（可传多个语言码）                                                                        |
| `_lang-{lang}.cjs`      | 各语言 UI 字符串键值数据（扁平 `"path.to.key": "译文"`）。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 被 `_merge-langs.cjs` 按 `TOOLS/i18n-merge/_lang-{lang}.cjs` 读取。                                                                     |
| `_dump-missing.cjs`     | 导出某语言相对英文 SSOT 缺失的 UI 键及其英文源文到 `_missing-en.json`（键序与 en 一致，作为翻译底稿）。**每批次开始时重新生成**，内容随批次变化。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `node TOOLS/i18n-merge/_dump-missing.cjs`（输出到本目录 `_missing-en.json`）                                                            |
| `_verify-langs.cjs`     | 校验 `_lang-{lang}.cjs`：必须**覆盖** `_missing-en.json` 全部键（子集校验，`_lang` 文件是累积式、含历史批次键，多余键仅提示不算失败）、无空值、markup 计数（`<strong>`/`<br />`/`→`）与英文一致、非 ja 语言无 CJK 字符。合并前必跑。                                                                                                                                                                                                                                                                                                                                                                                                                                              | `node TOOLS/i18n-merge/_verify-langs.cjs pt it ja ...`（可传多个语言码）                                                                |
| `_patch-exitintent.cjs` | ExitIntentPopup 文案 UI 化批次（exitIntent.* 8 键 × 21 语言）。`--en` 把 EN 键写入 i18n-config.json；`--patch` 把译文追加到 `_lang-{lang}.cjs`（幂等，缺文件自动新建，fr 即由此创建）。内嵌翻译表，可作后续批次的模板。                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `node TOOLS/i18n-merge/_patch-exitintent.cjs --en` / `--dry` / `--patch`                                                                |
| `product-texts-patch/`  | product-texts.ts 产品文案翻译批次。`_pt-data-*.cjs` 分片提供 `{ lang: { productId: { name?, desc? } } }`（一个语言不跨分片），`_patch-product-texts.cjs` 据此对 src/data/product-texts.ts：已有条目替换指定字段、缺失条目在语言段末尾插入 `{ name, desc }`。幂等（值相同即跳过）；值含 `'` 自动改双引号输出。已完成：9 系列 name 占位（fr/de/pt/es/it/pl/ru）、ja/ko/ar 系列 name+desc 旧版英文残留 + explorer-11 desc、sv 10 条 + 9 语言 ×13 条缺失条目。**保留不译**：`SUP Explorer 11'`、`RHEO`、`Horizon Lines` 等拉丁品牌/型号名，及 de/sv/nl/no/tr/cs/da/th 的 `Touring Cruiser SUP`/`Utility & Lure Skiff SUP`（各语言统一惯例，参照 fr/es/it 的 "SUP Touring Cruiser"）。 | `node TOOLS/i18n-merge/product-texts-patch/_patch-product-texts.cjs` / `--patch`，改后 `npx prettier --write src/data/product-texts.ts` |

**注意事项：** 合并完成后必须重新生成 `public/data/i18n-config.json` 与 `src/i18n/generated/ui-all.ts`：在仓库根执行 `node scripts/generate-data-json.mjs && node scripts/_gen-uiall.cjs`（或直接 `npm run build`）。若含中文等 CJK，写入时用 UTF-8 无 BOM（本项目脚本均为 `utf8`）。

### 3. i18n-fix/ — i18n-config.json 修复

| 文件                   | 用途                                                                                                                                                                 | 用法                                       |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `_fix-i18n.cjs`        | 修复 `i18n-config.json` 中损坏的英文 `compare.afarerVsTraditional.*` 值（从 astro fallback 源恢复）；同时处理 BOM、UTF-8 编码问题。                                  | `node TOOLS/i18n-fix/_fix-i18n.cjs`        |
| `_fix-i18n-ranges.cjs` | 修复 en 值中范围/数字/符号格式（如 `300–1,000` 等会被 YAML 流式解析破坏的写法），自动备份到 `%TEMP%\opencode\i18n-config.json.bak`。                                 | `node TOOLS/i18n-fix/_fix-i18n-ranges.cjs` |
| `_fix-i18n-arrows.cjs` | 修复各语言 UI 字符串中被压成右箭头 `→` 的破折号：行内 `→` → 破折号 `— `、`compare.backToProducts` 前导 `→` → `← `、数字区间 `→` → 短破折号 `– `；保留 CTA 末尾箭头。 | `node TOOLS/i18n-fix/_fix-i18n-arrows.cjs` |

### 4. one-off/ — 一次性定点工具

针对特定内容问题的定点修复脚本，通常可安全重跑（幂等）。

| 文件                       | 用途                                                                                                                                                                                                      | 用法                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `set-logo.cjs`             | 遍历 `src/config*.yaml`（en 根 + 21 语言），把 `branding.logo_image` 设为 `/android-chrome-192x192.png`、`branding.logo_alt` 设为 `Afarer_Logo`、`organization.logo` 设为 `/android-chrome-512x512.png`。 | 在仓库根 `node TOOLS/one-off/set-logo.cjs`；改路径只需编辑文件内两处字符串 |
| `fix-moq-quote.cjs`        | 修复全部 `distributor-program.yaml`（en + 21 语言）中 `300–1,000` 缺失引号、会被 YAML 解析成 flow 序列的问题：替换为 `'300–1,000'`。                                                                      | 在仓库根 `node TOOLS/one-off/fix-moq-quote.cjs`                            |
| `add-home-distributor.cjs` | 批量给主页（en + 21 语言 `home.yaml`）追加国家分销商 CTA 文案/链接，并注册导航项。注意：该脚本按当时 (2026) 页面结构编写，重跑前请先 diff 复核。                                                          | **谨慎使用**，先 `git diff` 预览                                           |

### 5. verify/ — 构建后 dist 多语言验证（回归检查）

多语言站点一次改动会产出 34 种语言的页面，人工逐页检查不现实。**每次模块增删/内容修改并 `npm run build` 之后，务必用本节脚本做回归验证。**

| 文件                       | 用途                                                                                                                                                                        | 用法（仓库根，需先构建 dist）                                                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `verify-langs.cjs`         | 六项整站验证：① dist/zh 不存在 ② 未翻译语言 EN 回退 ③ hreflang 交替链接 ④ RTL 语言 dir=rtl ⑤ 语言切换器链接齐全 ⑥ 非 ja/ko 页面无 CJK 泄漏（自动跳过 llms*.txt 聚合文件）。 | `node TOOLS/verify/verify-langs.cjs`                                                                                                                                     |
| `check-dist.cjs`           | **通用内容核查**：对全部 34 种语言的指定页面断言关键词必须存在（`--present`）或必须不存在（`--absent`）。删除模块后查残留、新增功能后查生效都靠它。退出码非 0 = 有失败。    | `node TOOLS/verify/check-dist.cjs --page index.html --absent wavefella foida-logo`<br>`node TOOLS/verify/check-dist.cjs --page index.html --present "grid-cols-4 gap-1"` |
| `scan-en-leak.cjs`         | 已翻译语言（fr/es/de 等）页面英文残留扫描：剥离标签后按"高 ASCII 比例 + 无重音字符 + 含英文虚词"启发式判定，结果需人工复核。                                                | `node TOOLS/verify/scan-en-leak.cjs fr es`<br>`node TOOLS/verify/scan-en-leak.cjs fr --page about/index.html`                                                            |
| `check-solutions-page.cjs` | B2B solutions 详情页（`/[lang]/solutions/[slug]`）翻译逐项断言。期望译文子串维护在脚本内 `EXPECTED` 表，新翻译一页就补一组条目。                                            | `node TOOLS/verify/check-solutions-page.cjs corporate-sup-event-package fr es`                                                                                           |

**多语言模块增删标准流程（重要）：**

```
删除模块（以首页 Brand Partners 为例）:
  1. 在 src/pages/[lang]/index.astro 删除该模块代码块（单文件生成全部语言）
  2. node TOOLS/i18n-manage/ui-keys.cjs remove home.resources.brandPartners ...   # 清死键
  3. npm run build
  4. node TOOLS/verify/check-dist.cjs --page index.html --absent <模块特异关键词>  # 全语言查残留
  5. node TOOLS/verify/verify-langs.cjs                                            # 整站六项
新增模块:
  1. 写代码；新增 UI 文案用 node TOOLS/i18n-manage/ui-keys.cjs add <key> <en文案>
  2. 已翻译语言逐个 set（或写 _lang-{lang}.cjs 后用 i18n-merge/_merge-langs.cjs 批量回填）
  3. npm run build && node TOOLS/verify/check-dist.cjs --page ... --present <新文案>
```

### 6. i18n-manage/ — UI 键批量管理 / CJK 泄漏扫描

UI 字符串 SSOT 为 `src/data/site/i18n-config.json`（扁平键，缺失键运行时回退 en）。修改后必须重建同步生成物（见文末注意事项）。

| 文件                          | 用途                                                                                                                                                                                                                                                                                                                | 用法（仓库根）                                                                                                                                                                                                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ui-keys.cjs`                 | UI 键全语言批量操作：`count`（各语言键数）、`missing`（相对 en 缺失键）、`remove`（模块下线清死键）、`add`（新键先写 en）、`set`（为某语言写译文）。有防呆：重复 add、set 不存在的键/语言均拒绝。                                                                                                                   | `node TOOLS/i18n-manage/ui-keys.cjs count`<br>`node TOOLS/i18n-manage/ui-keys.cjs remove home.resources.brandPartners`<br>`node TOOLS/i18n-manage/ui-keys.cjs add home.newKey "New text"`<br>`node TOOLS/i18n-manage/ui-keys.cjs set fr home.newKey "Nouveau texte"`  |
| `scan-cjk.cjs`                | CJK（中文）泄漏扫描：`src` 模式扫 src/ + public/ 源码，`dist` 模式扫产物（跳过 ja/ko/_astro/llms*.txt）。白名单：切换器语言标签（日本語/한국어/中文）。                                                                                                                                                             | `node TOOLS/i18n-manage/scan-cjk.cjs src`<br>`node TOOLS/i18n-manage/scan-cjk.cjs dist`                                                                                                                                                                               |
| `sync-footer-from-header.cjs` | 将全部 `src/data/site/navigation*.yaml`（EN + 21 语言镜像）的 `footer.links` 整体替换为各自 `header.links` 分组结构，使页脚与导航栏一致（5 组：Products / Explore Afarer / Co-Brand / Country Partners / Support）。分组标题在渲染时经 Footer navTextMap → i18n-config 键翻译。改 header 结构后跑一次即可同步页脚。 | 在仓库根 `node TOOLS/i18n-manage/sync-footer-from-header.cjs`，随后 `npm run build`；如增删分组，需同步维护 Footer.astro 的 navTextMap 与 i18n-config 对应键（用 ui-keys.cjs add/remove）。注意：navigation.{lang}.yaml 是 Keystatic 管理端镜像，构建仅读 EN 根文件。 |

### 7. eslint/ — 代码规范批量清理

清理 `@typescript-eslint/no-explicit-any` 等 lint warning 的批量工具。

| 文件                     | 用途                                                                                                                                                                                                                                                                                           | 用法（仓库根）                                                                                                                 |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `strip-explicit-any.cjs` | 批量移除 `.astro` 文件回调参数中的冗余 `: any` 注解（仅匹配 `: any)` 与 `: any,` 两种回调参数模式，不会误伤 `as any`/`any[]`/类型声明）。前提：`getPageContent()` 返回 any 且 tsconfig 未启用 noImplicitAny，删除注解后参数退化为隐式 any，行为不变。`as any`/`any[]` 等非回调模式需手工处理。 | `node TOOLS/eslint/strip-explicit-any.cjs --dry <files...>`（先试跑）<br>`node TOOLS/eslint/strip-explicit-any.cjs <files...>` |

处理后校验：`npx eslint <files>` 应无 warning，`npm run check`（astro check 须 0 错误）、`npm run build` 回归。

### 8. i18n-merge/warning-cleanup/ — check:i18n 存量 warning 批量清零

一次性清零 `npm run check:i18n` 的 150 条存量 warning（结构 81 + 未翻译 69），修复 db928cfa/05bc52de 两轮 AI 翻译损坏链遗留的系统性内容问题。475 个 op 按 18 个分片组织；后续债务清理批次追加 19–23（171 op，共 646）。引擎按分片号加载、按文件分组、按数组顺序在内存应用（`--dry` 同样模拟完整应用链，因此 op 间有依赖时结果与 `--patch` 一致）。

| 文件                   | 用途                                                                                                                                                                                                                                                                                       | 用法（仓库根）                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `_patch-warnings.cjs`  | 补丁器：加载全部 `_ops-data-\d+.cjs` 分片，对 `{ f, find, rep, n? }` 执行全文替换。幂等规则：`rep` 已存在（含 `rep ⊃ find` 的插入式 op）即视为已应用并跳过。                                                                                                                               | `node TOOLS/i18n-merge/warning-cleanup/_patch-warnings.cjs --dry` 试跑 / `--patch` 应用 |
| `_ops-data-01..18.cjs` | 修复 op 分片（475 个）：01-06 EN 令牌/双空格/空括号疤痕与设备名泄漏；07-10 fi 整文件乱码；11-12 FAQ 复制粘贴答案；13 BSCI/交期；14 杂项（关键词/地址/国家列表/ja mojibake）；15 icon_bg 误译；16-18 factory 卡片文案/MOQ/交期。                                                            | 数据文件，勿直接运行                                                                    |
| `_ops-data-19..23.cjs` | 债务清理批次（171 op）：19 机械疤痕（EN 源头 ISO 9001/UKCA,FCC 令牌恢复、rf-welding 空括号、`''` 疤、factory role 列表 3 空格→" + "）；20 双空格折叠（factory-process/tourism 数字印刷）；21 各语言令牌恢复 + ar "?²"→"م²"；22 ar أكوافارير→أفارير（73 处）；23 solutions 套餐列表分隔符。 | 数据文件，勿直接运行                                                                    |

处理后校验：`node TOOLS/i18n-merge/warning-cleanup/_patch-warnings.cjs --dry` 应为 `applied: 0, already-applied: 646, errors: 0`；`npm run check:i18n` 应 0 issue/0 warning；`npm run build` 回归（页面 YAML 改动会重新生成 `src/i18n/generated/pages/*`）。

教训（已修入引擎）：早期版本对 `rep ⊃ find` 的插入式 op（如 `keywords:\n - A` → 追加 `- B`）二次运行会重复插入；`it icon_bg: blu → blue` 这类 find 是 rep 前缀的 op 会把 `blue` 再改成 `bluee`。现引擎先查 `rep` 是否已存在再决定应用，`--dry` 全绿后 `--patch` 安全。

---

1. **PowerShell 中文乱码问题：** 在中文 Windows（codepage 936）下，`Get-Content`/`Set-Content` 默认 GBK/ANSI；读写 UTF-8 翻译文件必须显式 `-Encoding UTF8`。Node 脚本读取/写入一律用 `utf8`（本项目所有 JS/JSON/YAML 均为 UTF-8 无 BOM）。
2. **永不手工编辑生成文件：** `src/i18n/generated/**`、`public/data/*.json`、`src/components/ui/icon-*.ts` 为构建产物，均由构建链重新生成；内容改动后跑 `npm run build`（或在仓库根手动跑生成链）。
3. **改动后校验：** `npm run check`（astro + eslint + prettier + i18n 四段）与 `npm run build`。
4. **YAML 引号：** 含 `–`（en dash）、`,`、`,` 等易被 YAML flow 解析的字符串必须加引号（见 `fix-moq-quote.cjs` 的教训）。

---

## 关联文档

- 构建链 & 文件架构：`README.md`、`TECH.md`
- 代理规则 & 编码铁则：`AGENTS.md`
- 页面内容 SSOT：`src/data/pages/`（EN 根 + 21 语言目录），`src/data/site/i18n-config.json`（UI 字符串）
