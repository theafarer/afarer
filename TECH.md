# afarer 缃戠珯鎶€鏈灦鏋勬枃妗?

> 鏈€鍚庢洿鏂? 2026-07-26 (B2B 鍝佺墝閲嶅畾浣? SUP/閰嶄欢鍙? + 瑙ｅ喅鏂规椤甸潰)
> 椤圭洰璺緞: `E:\github\afarer`
> 鍦ㄧ嚎缃戝潃: https://afarer.com (Cloudflare Pages)
> 鏋勫缓鍛戒护: `npm run build` 鈫?杈撳嚭鍒?`dist/` 鐩綍 (7564 椤?
> 閮ㄧ讲鍛戒护: `npx wrangler pages deploy dist/ --project-name afarer`

---

## 鐩綍

1. [鎶€鏈爤](#1-鎶€鏈爤)
2. [椤圭洰缁撴瀯](#2-椤圭洰缁撴瀯)
3. [鏋勫缓娴佺▼](#3-鏋勫缓娴佺▼)
4. [鍥介檯鍖?(i18n) 绯荤粺](#4-鍥介檯鍖?i18n-绯荤粺)
5. [浜у搧椤甸潰绯荤粺](#5-浜у搧椤甸潰绯荤粺)
6. [鏁版嵁娴佷笌娓叉煋绠＄嚎](#6-鏁版嵁娴佷笌娓叉煋绠＄嚎)
7. [Cloudflare Workers](#7-cloudflare-workers)
8. [Cloudflare Pages Functions](#8-cloudflare-pages-functions)
9. [R2 瀛樺偍](#9-r2-瀛樺偍)
10. [閮ㄧ讲鏋舵瀯涓庨檺鍒禲(#10-閮ㄧ讲鏋舵瀯涓庨檺鍒?
11. [甯歌閿欒鍙婇伩鍏嶆柟娉昡(#11-甯歌閿欒鍙婇伩鍏嶆柟娉?
12. [缂栬緫鎸囧崡涓庣孩绾縘(#12-缂栬緫鎸囧崡涓庣孩绾?
13. [闄勫綍: 鍏抽敭鏂囦欢寮曠敤](#13-闄勫綍-鍏抽敭鏂囦欢寮曠敤)
14. [鍚庡彴绠＄悊绯荤粺鏋舵瀯](#14-鍚庡彴绠＄悊绯荤粺鏋舵瀯)

---

## 1. 鎶€鏈爤

| 灞?| 鎶€鏈?|
|---|---|
| 妗嗘灦 | **Astro 6** (v6.4.2), `output: 'static'` |
| 璇█ | TypeScript (v5.9.3) |
| 鏍峰紡 | Tailwind CSS v4 + `@tailwindcss/postcss` |
| 鍖呯鐞?| Yarn 4.16.0 (闆跺畨瑁? `.yarn/`) |
| Node | >= 22.12.0 |
| 涓绘満 | **Cloudflare Pages** (闈欐€佹枃浠? + **Cloudflare Workers** (API) |
| 瀛樺偍 | **Cloudflare R2** (afarer-assets, afarer-data) |
| CMS | Keystatic (鏈湴 CMS, 鍦?`/keystatic` 璺敱) |
| 鎻掍欢 | `@astrojs/sitemap`, `@astrojs/mdx`, `astro-icon`, `astro-seo` |
| 浜у搧鏁版嵁 | `src/data/products.ts` (TypeScript 鏁扮粍) |
| 澶氳瑷€ | 22 绉嶈瑷€, 鑷缓 i18n 绯荤粺 (`src/i18n/`) |

**娉ㄦ剰**: 椤圭洰涓嶄娇鐢?`@astrojs/cloudflare` 閫傞厤鍣? 鑰屾槸鏋勫缓涓虹函闈欐€佽緭鍑哄悗閮ㄧ讲鍒?Cloudflare Pages銆侾ages 鑷甫鐨?Functions (`functions/_middleware.ts`) 澶勭悊璇█閲嶅畾鍚戝拰 R2 璧勬簮璺宠浆銆?

---

## 2. 椤圭洰缁撴瀯

```
C:\official\
鈹溾攢鈹€ astro.config.ts          # Astro 閰嶇疆 (output: 'static', 鎻掍欢, alias)
鈹溾攢鈹€ package.json             # 鑴氭湰: dev/build/deploy/check
鈹溾攢鈹€ wrangler.toml            # 鏍?wrangler (浠呭０鏄?R2 bucket)
鈹溾攢鈹€ tsconfig.json
鈹溾攢鈹€ keystatic.config.ts      # Keystatic CMS 閰嶇疆
鈹溾攢鈹€ src/
鈹?  鈹溾攢鈹€ config.yaml          # 涓婚厤缃?(astrowind 涓婚)
鈹?  鈹溾攢鈹€ config.*.yaml        # 鍚勮瑷€瑕嗙洊閰嶇疆 (zh, fr, de...)
鈹?  鈹溾攢鈹€ i18n/
鈹?  鈹?  鈹溾攢鈹€ config.ts        # 璇█鍒楄〃, setLang() 鈥?鍏变韩鍙彉 _ui (涓嶅啀鐩存帴浣跨敤)
鈹?  鈹?  鈹溾攢鈹€ utils.ts         # getLangFromUrl, removeLang, localizePath
鈹?  鈹?  鈹溾攢鈹€ page-content.ts  # getPageContent(lang, page) 鈥?椤甸潰鍐呭缂撳瓨
鈹?  鈹?  鈹溾攢鈹€ data-registry.ts # 鏁版嵁娉ㄥ唽琛?(浜у搧/鎸囧崡/鍐呭)
鈹?  鈹?  鈹斺攢鈹€ generated/
鈹?  鈹?      鈹溾攢鈹€ ui-all.ts    # getUiForLang(lang) 鈥?缈昏瘧鍏ュ彛
鈹?  鈹?      鈹溾攢鈹€ ui/en.ts     # 鑻辫缈昏瘧閿€煎 (鑷姩鐢熸垚)
鈹?  鈹?      鈹溾攢鈹€ ui/zh.ts     # 涓枃缈昏瘧 (22 绉嶈瑷€)
鈹?  鈹?      鈹溾攢鈹€ lang/*.ts    # 璇█鍖?(姣忎釜璇█涓€涓枃浠?
鈹?  鈹?      鈹斺攢鈹€ pages/       # 椤甸潰鍐呭鏁版嵁
鈹?  鈹溾攢鈹€ data/
鈹?  鈹?  鈹溾攢鈹€ products.ts      # ProductRecord[] 鈥?浜у搧瀹氫箟
鈹?  鈹?  鈹溾攢鈹€ product-texts.ts # 浜у搧澶氳瑷€缈昏瘧鏂囨湰
鈹?  鈹?  鈹溾攢鈹€ content-v2.ts    # 鍐呭 v2 璁板綍
鈹?  鈹?  鈹溾攢鈹€ faq.ts           # FAQ 鏁版嵁
鈹?  鈹?  鈹斺攢鈹€ guides.ts        # 鎸囧崡鏁版嵁
鈹?  鈹溾攢鈹€ layouts/
鈹?  鈹?  鈹溾攢鈹€ Layout.astro     # 涓诲竷灞€ (璋冪敤 setLang)
鈹?  鈹?  鈹溾攢鈹€ PageLayout.astro # 椤甸潰甯冨眬
鈹?  鈹?  鈹溾攢鈹€ ProductLayout.astro
鈹?  鈹?  鈹斺攢鈹€ ...
鈹?  鈹溾攢鈹€ pages/
鈹?  鈹?  鈹溾攢鈹€ [lang]/          # 澶氳瑷€璺敱 (22 绉嶈瑷€ 脳 椤甸潰鏁?= ~8000 椤甸潰)
鈹?  鈹?  鈹?  鈹溾攢鈹€ index.astro       # 棣栭〉 (姣忕璇█)
鈹?  鈹?  鈹?  鈹溾攢鈹€ products/
鈹?  鈹?  鈹?  鈹?  鈹溾攢鈹€ index.astro   # 浜у搧鍒楄〃
鈹?  鈹?  鈹?  鈹?  鈹溾攢鈹€ [slug].astro  # 浜у搧璇︽儏
鈹?  鈹?  鈹?  鈹?  鈹斺攢鈹€ compare.astro # 浜у搧瀵规瘮
鈹?  鈹?  鈹?  鈹溾攢鈹€ factory/
鈹?  鈹?  鈹?  鈹?  鈹溾攢鈹€ index.astro       # 宸ュ巶鎬昏
鈹?  鈹?  鈹?  鈹?  鈹溾攢鈹€ capacity.astro    # 鐢熶骇鑳藉姏
鈹?  鈹?  鈹?  鈹?  鈹溾攢鈹€ process.astro     # 鐢熶骇娴佺▼
鈹?  鈹?  鈹?  鈹?  鈹溾攢鈹€ quality-lab.astro # 璐ㄩ噺瀹為獙瀹?
鈹?  鈹?  鈹?  鈹?  鈹溾攢鈹€ equipment.astro   # 璁惧涓庢満姊?
鈹?  鈹?  鈹?  鈹?  鈹斺攢鈹€ oem-capability.astro # OEM/ODM 鑳藉姏
鈹?  鈹?  鈹?  鈹斺攢鈹€ ...
鈹?  鈹?  鈹溾攢鈹€ products/        # 鑻辫鐩磋繛浜у搧椤甸潰
鈹?  鈹?  鈹?  鈹溾攢鈹€ [slug].astro # 浜у搧璇︽儏 (鑻辫, 鏃犺瑷€鍓嶇紑)
鈹?  鈹?  鈹?  鈹溾攢鈹€ index.astro
鈹?  鈹?  鈹?  鈹斺攢鈹€ compare.astro
鈹?  鈹?  鈹斺攢鈹€ ...
鈹?  鈹溾攢鈹€ components/
鈹?  鈹?  鈹溾攢鈹€ widgets/
鈹?  鈹?  鈹?  鈹溾攢鈹€ Header.astro # 瀵艰埅鏍?(浣跨敤 getUiForLang)
鈹?  鈹?  鈹?  鈹斺攢鈹€ Footer.astro # 椤佃剼 (浣跨敤 getUiForLang)
鈹?  鈹?  鈹斺攢鈹€ ...
鈹?  鈹溾攢鈹€ middleware.ts        # Astro 涓棿浠?(璁剧疆 locals.lang)
鈹?  鈹溾攢鈹€ content.config.ts    # Astro Content Collections 瀹氫箟
鈹?  鈹斺攢鈹€ utils/
鈹?      鈹斺攢鈹€ products.ts      # 浜у搧宸ュ叿鍑芥暟
鈹溾攢鈹€ workers/                 # Cloudflare Workers (5 涓?
鈹?  鈹溾攢鈹€ admin-worker/
鈹?  鈹溾攢鈹€ ai-worker/
鈹?  鈹溾攢鈹€ automation-worker/
鈹?  鈹溾攢鈹€ contact-worker/
鈹?  鈹斺攢鈹€ seo-worker/
鈹溾攢鈹€ functions/
鈹?  鈹斺攢鈹€ _middleware.ts       # Cloudflare Pages Functions 涓棿浠?
鈹溾攢鈹€ scripts/                 # 鏋勫缓/閮ㄧ讲/宸ュ叿鑴氭湰 (~42 涓?
鈹斺攢鈹€ dist/                    # 鏋勫缓杈撳嚭 (闈欐€佹枃浠?
```

---

## 3. 鏋勫缓娴佺▼

`npm run build` 鎵ц浠ヤ笅鑴氭湰:

```
node scripts/geo-build.mjs              # 1. 鏋勫缓鍦扮悊鏁版嵁
  && node scripts/generate-data-json.mjs # 2. 鐢熸垚 data JSON + 椤甸潰鍐呭 JSON
  && npx tsx scripts/generate-geo-files.ts # 3. 鐢熸垚鍦扮悊鏂囦欢
  && node scripts/_gen-uiall.cjs         # 4. 鐢熸垚 ui-all.ts (鍚堝苟 22 璇█缈昏瘧)
  && node scripts/_gen-pages.cjs         # 5. 浠?JSON 鐢熸垚 pages/*.ts 妯″潡 (54 涓〉闈?
  && node scripts/gen-icon-svgs.cjs      # 6. 鐢熸垚鍥炬爣 SVG
  && astro build                         # 7. Astro 鏋勫缓 (鐢熸垚 ~7564 椤甸潰)
  && node scripts/clean-public-assets.mjs # 8. 娓呯悊鍏叡璧勬簮
```

鏋勫缓缁撴灉: 绾?**7564 涓〉闈?*, 杈撳嚭鍒?`dist/` 鐩綍銆?

---

## 4. 鍥介檯鍖?(i18n) 绯荤粺

### 4.1 姒傝堪

缃戠珯鏀寔 **22 绉嶈瑷€**:

```
en: English   zh: 涓枃    fr: Fran莽ais   de: Deutsch
es: Espa帽ol   pt: Portugu锚s  ar: 丕賱毓乇亘賷丞  it: Italiano
ja: 鏃ユ湰瑾?   ko: 頃滉淡鞏?   ru: 袪褍褋褋泻懈泄   pl: Polski
nl: Nederlands  sv: Svenska  no: Norsk    el: 螘位位畏谓喂魏维
tr: T眉rk莽e    fi: Suomi    cs: 膶e拧tina   da: Dansk
ro: Rom芒n膬    th: 喙勦笚喔?
```

### 4.2 缈昏瘧鏁版嵁閾?(鍏抽敭璺緞)

```
ui/*.ts (鑷姩鐢熸垚鐨勭炕璇戦敭鍊煎鏂囦欢)
  鈫?
ui-all.ts (getUiForLang(lang) 鍑芥暟)
  鈫?
Header.astro / Footer.astro / 鍚勯〉闈?
  (閫氳繃 getUiForLang(locale) 鐩存帴鑾峰彇缈昏瘧)
```

**鏍稿績鍑芥暟璋冪敤鍏崇郴:**

1. **`getUiForLang(lang)`** (`src/i18n/generated/ui-all.ts:50`)
   - 浠?22 涓潤鎬佸鍏ョ殑璇█妯″潡 `ui/*.ts` 涓煡鎵?
   - 杩斿洖: `(lang && map[lang]) || map.en || {}`
   - 杩欐槸**鎵€鏈夐〉闈㈣幏鍙栫炕璇戠殑鍞竴姝ｇ‘鍏ュ彛**

2. **`setLang(lang)`** (`src/i18n/config.ts:38`)
   - 灏嗘寚瀹氳瑷€鐨勭炕璇戞暟鎹?*鍘熷湴鍙樺紓**鍒板叡浜璞?`_ui` 涓?
   - 鐢?`Layout.astro:52` 璋冪敤
   - **鈿狅笍 瀛樺湪绔炴€侀棶棰?*: 鐢变簬 `_ui` 鏄ā鍧楃骇鍙彉瀵硅薄, 鍦?Astro 闈欐€佹瀯寤虹殑骞惰娓叉煋涓?(`output: 'static'`, 8000+ 椤甸潰), 涓€涓〉闈㈢殑 `setLang()` 鍙兘瑕嗙洊鍙︿竴涓〉闈㈢殑鏁版嵁

3. **`getPageContent(lang, page)`** (`src/i18n/page-content.ts:13`)
   - 浠庣紦瀛樹腑鑾峰彇椤甸潰鍐呭鏁版嵁 (鐢辨瀯寤鸿剼鏈敓鎴?
   - 鐢ㄤ簬椤甸潰绾у唴瀹?(about, commercial-workboats 绛?

4. **`getLangFromUrl(url)`** (`src/i18n/utils.ts:3`)
   - 浠?URL 璺緞涓彁鍙栬瑷€浠ｇ爜

### 4.3 淇鍚庣殑缈昏瘧鑾峰彇鏂瑰紡

**鉁?姝ｇ‘鏂瑰紡 (鎵€鏈夊凡淇鐨勯〉闈?:**
```astro
import { getUiForLang } from '~/i18n/generated/ui-all';
const t = (key: string) => getUiForLang(locale)?.[key] || key;
// 鐩存帴浣跨敤 getUiForLang, 涓嶄緷璧栧叡浜?_ui 瀵硅薄
```

**鉂?閿欒鏂瑰紡 (宸插叏閮ㄦ浛鎹?:**
```astro
import { ui } from '~/i18n/config';
// 浣跨敤 (ui as any)[key] 鈥?渚濊禆鍏变韩鍙彉瀵硅薄, 浼氫骇鐢熺珵鎬?
```

### 4.4 璇█妫€娴嬫祦绋?(杩愯鏃?

1. Cloudflare Pages Functions `_middleware.ts` 澶勭悊璇锋眰:
   - 妫€娴?URL 鏄惁鏈夎瑷€鍓嶇紑
   - 濡傛灉娌℃湁, 閫氳繃 cookie 鈫?cf-ipcountry 鈫?Accept-Language 妫€娴嬭瑷€
   - 闈炶嫳璇敤鎴烽噸瀹氬悜鍒板搴旇瑷€ (302)
   - 鑻辫 `/en/` 閲嶅畾鍚戝埌 `/` (308)
2. Astro 涓棿浠?`src/middleware.ts` 璁剧疆 `context.locals.lang`
3. 甯冨眬 `Layout.astro` 璋冪敤 `setLang(currentLang)` 璁剧疆 UI 鏁版嵁

### 4.5 瀵艰埅缈昏瘧绯荤粺 (navTextMap + i18n-config.json + routing.ts)

瀵艰埅鐨勭炕璇戜笌鍏朵粬鍐呭涓嶅悓锛氱郴缁?*鍙姞杞借嫳鏂?* `navigation.yaml`锛岀劧鍚庨€氳繃 `t()` 鍑芥暟瀹炴椂缈昏瘧銆?

**娓叉煋娴佺▼:**
```
navigation.yaml (鑻辨枃 text 鍊?
  鈫?
Header.astro / Footer.astro 鐨?t() 鍑芥暟
  鈫?
navTextMap: 灏嗚嫳鏂?text 鏄犲皠鍒扮炕璇戦敭 (濡?"Buyer Center" 鈫?"nav.buyerCenter")
  鈫?
i18n-config.json: 灏嗙炕璇戦敭鏄犲皠鍒板悇璇█鏂囨湰 (濡?"nav.buyerCenter" 鈫?"涔板涓績")
  鈫?
localizeHref() (src/i18n/routing.ts): 鍖归厤 LOCALIZED_ROUTES 鈫?娣诲姞 /{lang} 鍓嶇紑
  鈫?
鏄剧ず缈昏瘧鍚庣殑鏂囨湰
```

**鍏变韩璺敱妯″潡** `src/i18n/routing.ts`:
- 鍘熸湰 `LOCALIZED_ROUTES` 鍦?Header.astro 鍜?Footer.astro 涓悇瀹氫箟涓€浠斤紙~200 琛岄噸澶嶏級
- 鐜板凡鎻愬彇鍒板叡浜ā鍧楋紝涓や釜缁勪欢鍚勫噺灏?101 琛?
- 鎻愪緵 `localizeHref()`銆乣entityForHref()` 绛夊伐鍏峰嚱鏁?
- 鏂板宸ュ巶椤甸潰鏃堕渶鍦ㄦ娉ㄥ唽璺敱

**鈿狅笍 閲嶈: 娣诲姞鏂板鑸」鏃跺繀椤诲悓姝ユ洿鏂板洓澶?**

1. **`src/data/site/navigation.yaml`** 鈥?娣诲姞瀵艰埅缁撴瀯 (鑻辨枃 text + href)
2. **`src/components/widgets/Header.astro` 鍜?`Footer.astro` 鐨?`navTextMap`** 鈥?娣诲姞鑻辨枃 text 鈫?缈昏瘧閿殑鏄犲皠
3. **`src/data/site/i18n-config.json`** 鈥?涓烘墍鏈?22 绉嶈瑷€娣诲姞缈昏瘧閿拰瀵瑰簲鐨勭炕璇戞枃鏈?
4. **`src/i18n/routing.ts` 鐨?`LOCALIZED_ROUTES`** 鈥?濡傛灉鏂伴〉闈㈤渶瑕佽瑷€鍓嶇紑锛屾敞鍐岃矾鐢?

**鍏蜂綋姝ラ:**
```bash
# 1. 缂栬緫 navigation.yaml 娣诲姞鏂伴」
# 2. 缂栬緫 Header.astro 鍜?Footer.astro锛屽湪 navTextMap 涓坊鍔犳槧灏?
#    'New Nav Text': 'nav.newKey',
# 3. 缂栧啓鑴氭湰鎴栨墜鍔ㄧ紪杈?i18n-config.json锛屼负鎵€鏈?22 璇█娣诲姞:
#    "nav.newKey": "缈昏瘧鏂囨湰"
# 4. 濡傛灉鏂伴〉闈㈠湪 [lang]/ 璺敱涓嬶紝鍦?routing.ts 鐨?LOCALIZED_ROUTES 涓坊鍔犺矾寰?
```

**鉂?甯歌閿欒锛堟湰娆′慨澶嶇殑闂锛?**
- 鍙慨鏀逛簡 `navigation.yaml` 鍜?`navigation.zh.yaml` 绛夋湰鍦板寲 YAML 鏂囦欢
- 蹇樿鏇存柊 `navTextMap` 鍜?`i18n-config.json`
- **缁撴灉**: 瀵艰埅鏄剧ず鑻辨枃鍘熸枃锛屽洜涓?`t()` 鎵句笉鍒版槧灏勯敭锛岃繑鍥炶嫳鏂?text 浣滀负 fallback

**鉁?姝ｇ‘鍋氭硶:**
- 鏈湴鍖?YAML 鏂囦欢 (`navigation.zh.yaml` 绛? **浠呬緵 Keystatic CMS 缂栬緫鍙傝€?*锛屼笉浼氬奖鍝嶆覆鏌?
- 瀹為檯鐨勭炕璇戞暟鎹湪 `i18n-config.json` 涓?
- 娣诲姞鏂板鑸」鍚庯紝鍔″繀妫€鏌?`navTextMap` 鍜?`i18n-config.json` 鏄惁鍚屾鏇存柊

### 4.6 缈昏瘧閿懡鍚嶇害瀹?

缈昏瘧閿娇鐢ㄧ偣鍙峰垎闅旂殑灞傜骇鍛藉悕:
```
nav.products       鈫?"Products" / "Productos" / "Produkte" ...
nav.ribBoats       鈫?"RIB Boats" / "Barcos RIB" ...
home.resources.buyersCenter 鈫?"Buyers Center"
product.pageDesc   鈫?(鎵€鏈夎瑷€鏂囦欢涓己澶? 浠庢湭琚彁鍙栬剼鏈敓鎴?
```

---

## 5. 浜у搧椤甸潰绯荤粺

### 5.1 鏁版嵁婧?

浜у搧鏁版嵁鏈変袱灞?

**A. 缁撴瀯鍖栨暟鎹?* (`src/data/products.ts`):
- TypeScript 鏁扮粍 `ProductRecord[]`
- 鍖呭惈 ~40 涓骇鍝?(RIB, 鍏呮皵鑸? SUP, 閰嶄欢)
- 瀛楁: `id`, `name`, `category`, `desc`, `definition`, `specs`, `faq` 绛?
- 鎵€鏈夊瓧娈典负**鑻辫**, 鏃犵炕璇?

**B. 澶氳瑷€缈昏瘧鏂囨湰** (`src/data/product-texts.ts`):
- 鎸夎瑷€ 脳 浜у搧 ID 缁勭粐鐨勭炕璇戝瓧鍏?
- 瑕嗙洊瀛楁: `name`, `desc`, `definition`, `problem`, `howItWorks`, `audience`, `ai_use_cases`, `ai_comparison`, `ai_faq`
- **娉ㄦ剰**: `product.pageDesc` 鍦ㄦ墍鏈夎瑷€鐨?UI 鐢熸垚鏂囦欢涓潎**缂哄け** (鎻愬彇鑴氭湰鏈寘鍚閿?

**C. 鍐呭闆嗗悎** (`src/content.config.ts`):
- Astro `defineCollection` 浠?`src/content/product/` 鍔犺浇
- 鍖呭惈 `title`, `summary`, `description`, `image`, `gallery`, `specs`, `tags` 绛?

### 5.2 浜у搧椤甸潰璺緞

浜у搧椤甸潰鏈変袱绉嶈矾寰?

1. **澶氳瑷€鐗堟湰**: `/[lang]/products/[slug].astro` (22 绉嶈瑷€ 脳 浜у搧鏁?
2. **鑻辫鐩磋繛**: `/products/[slug].astro` (鏃犺瑷€鍓嶇紑, 浠呰嫳璇?

**浜у搧鍒楄〃椤?*:
- `/[lang]/products/index.astro` 鈥?姣忕璇█鐢熸垚涓€涓垪琛?
- `/products/index.astro` 鈥?鑻辫鍒楄〃

**浜у搧瀵规瘮椤?*:
- `/[lang]/products/compare.astro` 鈥?澶氳瑷€瀵规瘮
- `/products/compare.astro` 鈥?鑻辫瀵规瘮

### 5.3 浜у搧璇︽儏椤垫覆鏌撴祦绋?

```
/content/product/*.md(x)  (鍐呭闆嗗悎)
  鈫? Astro Content Collections + getNormalizedProduct()
products 鏁扮粍 (鍖呭惈 title, summary, description, specs, tags...)
  鈫?
[slug].astro:
  1. 浠?products 鏁扮粍鎵惧埌瀵瑰簲浜у搧
  2. 浠?productRecords (products.ts) 鑾峰彇缁撴瀯鍖栨暟鎹?
  3. 鐢熸垚 JSON-LD Schema
  4. 娓叉煋 ProductLayout
```

### 5.4 浜у搧 Tags 娓叉煋娉ㄦ剰浜嬮」

Tags 鏉ヨ嚜鍐呭闆嗗悎, 姝ｅ父鍖栦负 `{slug, title}` 瀵硅薄鏍煎紡:
- 娓叉煋鏃朵娇鐢? `String((tag as any)?.title || (tag as any)?.slug || tag || '').trim()`
- **涓嶈鐩存帴浣跨敤 `{tag}`**, 鍚﹀垯鏄剧ず `[object Object]`

### 5.5 浜у搧缈昏瘧缂栬緫绯荤粺 (22璇█)

#### 5.5.1 姒傝堪

绠＄悊鍚庡彴鏀寔瀵?22 绉嶈瑷€鐨勪骇鍝佺炕璇戣繘琛屽彲瑙嗗寲缂栬緫銆傜炕璇戞暟鎹瓨鍌ㄤ负姣忎骇鍝佹瘡璇█鐨?YAML 鏂囦欢 (`src/data/product-texts/{locale}/{product.id}.yaml`)锛屽湪鏋勫缓鏃剁敱 `localizeProduct()` 鑷姩鍚堝苟鍒颁骇鍝佽褰曚腑銆?

缈昏瘧瀛楁闄愬畾涓虹函鏂囨湰鍐呭 (鍚嶇О銆佹弿杩般€佸畾涔夈€丗AQ 绛?锛岀粨鏋勫寲鏁版嵁 (瑙勬牸鍙傛暟銆佺幆澧冦€佹妧鑳芥按骞崇瓑) 淇濇寔鍦ㄨ嫳鏂?MDX 涓€?

#### 5.5.2 鏁版嵁婧愬眰绾?

```
MDX Frontmatter (English, src/content/products/*.mdx)
  鈹斺攢 缁撴瀯鍖栧瓧娈? title, summary, description, gallery, specs, sku, price, tags, environment, water_condition, skill, definition, problem, howItWorks, audience, ai_use_cases, ai_comparison, ai_faq, ai_specs
       鈫?
products.ts (ProductRecord[], src/data/products.ts)
  鈹斺攢 鎵€鏈夊瓧娈典负鑻辨枃, 鍖呭惈: id, name, desc, definition, problem, howItWorks, audience, skill, environment, water_condition, safety_rules, safety_level, region, ai_use_cases, ai_specs, ai_comparison, ai_faq
       鈫?
product-texts.ts (src/data/product-texts.ts, 4096 琛?TS 妯″潡)
  鈹斺攢 21 绉嶈瑷€鐨勭炕璇戝瓧鍏? { locale: { productId: { name, desc, definition, ... } } }
       鈫?
YAML 鏂囦欢 (src/data/product-texts/{locale}/{product.id}.yaml) 鈫?鏂板
  鈹斺攢 姣忎骇鍝佹瘡璇█鐨?YAML 鏂囦欢, 閫氳繃鍚庡彴绠＄悊闈㈡澘缂栬緫, 浼樺厛浜?TS 妯″潡
```

**鍥為€€閾?(Fallback Chain)**:
1. YAML 鏂囦欢瀛樺湪 鈫?`yaml.load()` 璇诲彇, 鍚堝苟鍒?`ProductRecord`
2. YAML 涓嶅瓨鍦?鈫?浠?`product-texts.ts` TS 妯″潡鑾峰彇缈昏瘧
3. 閮戒笉瀛樺湪 鈫?浣跨敤鑻辨枃鍘熸枃

#### 5.5.3 缈昏瘧瀛楁娓呭崟

| YAML Key | 琛ㄥ崟 Input | 鏄犲皠鏂瑰紡 | 璇存槑 |
|----------|-----------|---------|------|
| `name` | `title` | `data-fm-path="name"` | 浜у搧鍚嶇О |
| `summary` | `summary` | name 鍖归厤 | 涓€鍙ヨ瘽绠€浠?|
| `desc` | `description` | `data-fm-path="desc"` | 璇︾粏鎻忚堪 |
| `definition` | `definition` | name 鍖归厤 | 浜у搧瀹氫箟 |
| `problem` | `problem` | name 鍖归厤 | 瑙ｅ喅鐨勯棶棰?|
| `howItWorks` | `howItWorks` | name 鍖归厤 | 宸ヤ綔鍘熺悊 |
| `audience` | `audience` | name 鍖归厤 | 鐩爣鍙椾紬 |
| `ai_use_cases` | `ai_use_cases[]` | repeater | 浣跨敤鍦烘櫙鏁扮粍 |
| `ai_comparison` | `ai_comparison` | name 鍖归厤 | 绔炲搧瀵规瘮 |
| `ai_faq` | `ai_faq_q` / `ai_faq_a` | repeater | 甯歌闂鏁扮粍 |

#### 5.5.4 娓叉煋娴佺▼ (Public Page)

```
[lang]/products/[slug].astro
  鈫?
productRecords.find((p) => p.id === product.slug) 鈫?recRaw
  鈫?
localizeProduct(recRaw, lang)  (src/utils/product-i18n.ts)
  鈹溾攢 1. fs.existsSync('src/data/product-texts/{locale}/{id}.yaml')
  鈹?    鈹斺攢 鏄?鈫?yaml.load() 鈫?merge into ProductRecord
  鈹溾攢 2. 鍚?鈫?productTexts[locale]?.[id] 鈫?merge into ProductRecord
  鈹斺攢 3. 閮芥棤 鈫?杩斿洖鍘熷 ProductRecord (鑻辨枃)
  鈫?
rec (鏈湴鍖?ProductRecord) 鈫?椤甸潰鍚?section 娓叉煋
```

#### 5.5.5 绠＄悊鍚庡彴缂栬緫娴佺▼

##### 璇诲彇 (Load)

```
椤甸潰鍔犺浇 (locale='en'):
  FormDataLoader.astro 鑷姩鎵ц:
  1. fetch GET /api/admin/read?format=frontmatter&path=src/content/products/{slug}.mdx
  2. Worker 瑙ｆ瀽 MDX frontmatter 鈫?杩斿洖 { parsed: frontmatter, body }
  3. fillFields(data) 濉厖鎵€鏈夎〃鍗曞瓧娈?
  4. fillRepeater() 濉厖 gallery, specs, ai_faq 绛夐噸澶嶅尯鍩?

鍒囨崲璇█ (locale='zh', 鐢ㄦ埛閫夋嫨):
  ProductForm.astro inline script 鎵ц:
  1. updateLangUI() 闅愯棌闈炵炕璇戝瓧娈靛尯鍩?(gallery, specs, environment, body, SEO 绛?
  2. 鏄剧ず鎻愮ず "Editing translation 鈥?only text fields shown"
  3. FormDataLoaderFn() 鎵ц:
     a. fetch GET /api/admin/read?format=yaml&path=src/data/product-texts/zh/{slug}.yaml
     b. Worker: yaml.load(decoded) 鈫?杩斿洖 { parsed: { name, desc, ... } }
     c. 浠呭～鍏?TRANSLATABLE_FIELDS 涓殑杈撳叆
     d. 濉厖 ai_use_cases 鍜?ai_faq 閲嶅鍖哄煙
```

##### 淇濆瓨 (Save)

```
鐢ㄦ埛鐐瑰嚮 "Save Draft":
  save(branch) 鍑芥暟妫€鏌?locale:

  鑻辫 (locale === 'en'):
  鈹溾攢 collectFrontmatter(data):
  鈹?  鈹溾攢 title, publishDate, draft, inStock, featured
  鈹?  鈹溾攢 sku, summary, description, image, category
  鈹?  鈹溾攢 gallery[], specs[], tags[], environment[], water_condition[]
  鈹?  鈹溾攢 definition, problem, howItWorks, audience, skill
  鈹?  鈹溾攢 ai_use_cases[], ai_comparison, ai_faq[], ai_specs{}
  鈹?  鈹溾攢 price{}, metadata{} (SEO)
  鈹?  鈹斺啋 杩斿洖 frontmatter 瀵硅薄
  鈹溾攢 serializeFrontmatter(fm) 鈫?"---\n...\n---"
  鈹溾攢 content = frontmatter + body
  鈹斺攢 POST /api/admin/update { content, sha, message }

  缈昏瘧 (locale !== 'en'):
  鈹溾攢 collectTranslatable(data):
  鈹?  鈹溾攢 name, summary, desc, definition, problem
  鈹?  鈹溾攢 howItWorks, audience, ai_comparison
  鈹?  鈹溾攢 ai_use_cases[], ai_faq[]{q, a}
  鈹?  鈹斺啋 杩斿洖 { name, summary, desc, ... }
  鈹溾攢 浣跨敤 form.dataset.sha (YAML 鏂囦欢 SHA, 闈?MDX _sha)
  鈹斺攢 POST /api/admin/update { format: 'yaml', data: { ... }, sha }
      鈹斺攢 Worker: yaml.dump(data, { lineWidth: -1 }) 鈫?b64encode 鈫?GitHub PUT
```

#### 5.5.6 鍏抽敭鏂囦欢

| 鏂囦欢 | 浣滅敤 |
|------|------|
| `src/components/admin/ProductForm.astro` | 浜у搧缂栬緫琛ㄥ崟: 22 璇█閫夋嫨鍣ㄣ€佸瓧娈靛垎缁勩€佽瑷€鍒囨崲 JS (show/hide/reload) |
| `src/components/admin/FormDataLoader.astro` | 閫氱敤鏁版嵁鍔犺浇鍣? 浠?GitHub 璇诲彇 frontmatter/YAML 骞跺～鍏呰〃鍗?|
| `src/pages/keystatic/products/[slug].astro` | 鍚庡彴浜у搧缂栬緫椤甸潰: collectFrontmatter(), collectTranslatable(), save() |
| `src/utils/product-i18n.ts` | 鏋勫缓鏃剁炕璇戝悎骞? YAML 浼樺厛 鈫?TS 妯″潡鍥為€€ 鈫?鑻辨枃榛樿 |
| `src/data/product-texts.ts` | 缈昏瘧瀛楀吀: 21 璇█ 脳 ~40 浜у搧鐨?TS 妯″潡 (4096 琛? |
| `src/data/products.ts` | 浜у搧缁撴瀯鍖栨暟鎹? ProductRecord[] (52 浜у搧) |
| `workers/admin-worker/index.ts` | Worker API: `/api/admin/read` (frontmatter+yaml), `/api/admin/update` (鏀寔 format:yaml) |

#### 5.5.7 閲嶈娉ㄦ剰浜嬮」

1. **瀛楁鍚嶆槧灏?*: YAML 浣跨敤 `name` (闈?`title`) 鍜?`desc` (闈?`description`)銆傝〃鍗曡緭鍏ラ€氳繃 `data-fm-path` 灞炴€ц繘琛屾槧灏勶細
   - `title` input 鈫?`data-fm-path="name"`
   - `description` textarea 鈫?`data-fm-path="desc"`
   - 鍏朵粬瀛楁 input name 涓?YAML key 涓€鑷?

2. **SHA 鐙珛绠＄悊**: YAML 鏂囦欢鐨?SHA 瀛樺偍鍦?`form.dataset.sha` 涓紝涓?MDX 鏂囦欢鐨?`_sha` hidden input 瀹屽叏鐙珛銆傞娆′繚瀛樻柊缈昏瘧 (鏂囦欢涓嶅瓨鍦? 鏃朵笉甯?SHA锛屽悗缁洿鏂颁娇鐢?`form.dataset.sha`銆?

3. **UTF-8 缂栫爜**: admin-worker 蹇呴』浣跨敤 `b64encode()` (鍩轰簬 `TextEncoder`) 鑰岄潪 `btoa()` 杩涜 Base64 缂栫爜銆俙btoa()` 鏃犳硶澶勭悊澶氬瓧鑺?UTF-8 瀛楃 (涓枃銆佹硶璇噸闊崇瓑)锛屼細瀵艰嚧涔辩爜銆傝瑙?搂11.8 缂栫爜閾佸緥銆?

4. **涓嶅彲缈昏瘧瀛楁**: `environment`, `water_condition`, `skill`, `safety_rules`, `safety_level`, `region` 绛夊瓧娈靛湪鑻辨枃 `ProductRecord` 涓畾涔夛紝涓嶅弬涓庣炕璇戙€傚垏鎹㈣瑷€鏃惰繖浜涘瓧娈电殑缂栬緫鍖哄煙浼氳闅愯棌銆?

5. **鏋勫缓鏃朵緷璧?*: `product-i18n.ts` 浣跨敤 `fs.existsSync` + `fs.readFileSync` 鍦?Node.js 鏋勫缓鐜涓嬭鍙?YAML 鏂囦欢銆俌AML 鏂囦欢蹇呴』閫氳繃 `git push` 瀛樺湪浜庝粨搴撲腑鎵嶈兘琚瀯寤轰娇鐢ㄣ€?

6. **鏂板缓缈昏瘧鏂囦欢**: 褰撴煇璇█鐨勬煇涓骇鍝侀娆′繚瀛樻椂锛宍save()` 涓嶄紶 SHA 鈫?Worker 鐨?`/api/admin/update` 瑙嗕负鍒涘缓鏂版枃浠躲€俌AML 鏂囦欢鍐欏叆 draft 鍒嗘敮锛屽彂甯冨悗鍚堝苟鍒?main銆?

---



## 6. 鏁版嵁娴佷笌娓叉煋绠＄嚎

### 6.1 鏁版嵁娴佸悜

```
                       鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
                       鈹? scripts/ 鏋勫缓鑴氭湰     鈹?
                       鈹? (geo-build / _gen-*) 鈹?
                       鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
                                鈫?
  鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
  鈹? 鐢熸垚鏁版嵁:                                   鈹?
  鈹? src/i18n/generated/ui/*.ts  (22 璇█缈昏瘧)   鈹?
  鈹? src/i18n/generated/ui-all.ts (鍚堝苟鍏ュ彛)     鈹?
  鈹? src/i18n/generated/pages/*  (椤甸潰鍐呭)      鈹?
  鈹? src/i18n/generated/data.ts  (鏁版嵁娉ㄥ唽)      鈹?
  鈹? src/i18n/generated/i18n-config.json        鈹?
  鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
                                鈫?
  鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
  鈹? Astro 闈欐€佹瀯寤?(output: 'static')           鈹?
  鈹? 骞惰娓叉煋 ~8000 涓〉闈?                      鈹?
  鈹? 姣忎釜椤甸潰鐙珛杩愯 frontmatter script         鈹?
  鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
                                鈫?
  鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
  鈹? dist/ 闈欐€佹枃浠?                             鈹?
  鈹? Cloudflare Pages 閮ㄧ讲                       鈹?
  鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
```

### 6.2 鍏抽敭娉ㄦ剰浜嬮」

- **Astro `output: 'static'`**: 鎵€鏈夐〉闈㈠湪鏋勫缓鏃堕娓叉煋, 鏃?SSR
- **骞惰娓叉煋绔炴€?*: 8000+ 椤甸潰鍚屾椂娓叉煋, `setLang()` 淇敼妯″潡绾?`_ui` 瀵硅薄浼氬鑷存暟鎹珵浜?
- **瑙ｅ喅鏂规**: 鎵€鏈夌粍浠朵娇鐢?`getUiForLang(locale)` 鐩存帴鑾峰彇缈昏瘧, 涓嶄緷璧?`_ui`
- **`setLang()` 淇濈暀**: `Layout.astro` 浠嶈皟鐢?`setLang()`, 浣嗕粎涓轰簡鍚戝悗鍏煎 (鑰佷唬鐮佸彲鑳戒粛寮曠敤 `ui`)

---

## 7. Cloudflare Workers

椤圭洰鏈?**5 涓嫭绔嬬殑 Cloudflare Workers**:

| Worker | 鍚嶇О | 璺敱 | 瀛樺偍 | 鐢ㄩ€?|
|---|---|---|---|---|
| Admin | `afarer-admin` | `/api/admin/*`, `/api/auth/*` | 鈥?| 绠＄悊鍚庡彴 API, 璁よ瘉 |
| AI | `afarer-ai` | `/api/chat*`, `/api/ask*`, `/api/search*`, `/api/embed*`, `/api/ai/*` | Vectorize, R2 (data) | AI 鑱婂ぉ/鎼滅储/宓屽叆 |
| Automation | `afarer-automation` | `/api/automation/*` | R2 (data) | 瀹氭椂浠诲姟 (cron: 姣忓ぉ 2AM) |
| Contact | `afarer-contact` | `/api/contact*` | 鈥?| 鑱旂郴琛ㄥ崟 |
| SEO | `afarer-seo` | `/api/search`, `/api/geo-score`, `/api/page-inspect`, `/api/seo/*` | R2 (data) | SEO 宸ュ叿 |

### 7.1 3MB Worker 闄愬埗

**姣忎釜 Worker 鐨勭紪璇戝悗 JS 蹇呴』 < 3MB** (Cloudflare Workers 鐨勯檺鍒?銆?

濡傛灉鍦?Worker 涓亣鍒?`Error: Your worker size is 3.1 MB which exceeds the 3 MB limit`, 璇存槑寮曞叆浜嗚繃澶х殑渚濊禆銆?

**瑙ｅ喅鎬濊矾**:
- 妫€鏌?`import` 鏄惁寮曞叆浜嗗ぇ鍨嬪簱
- 浣跨敤 `patch-worker.mjs` 鑴氭湰杩涜鍚庡鐞嗕紭鍖?
- 鑰冭檻灏嗗ぇ閫昏緫鎷嗗垎涓哄涓?Worker
- 閬垮厤鍦?Worker 涓?`import` 鏁翠釜 Astro 椤圭洰鐨?`src/` 鏂囦欢

### 7.2 Worker 鏋勫缓鍜岄儴缃?

```bash
# 閮ㄧ讲鍗曚釜 Worker
npm run deploy:worker-contact
npm run deploy:worker-seo
npm run deploy:worker-ai
npm run deploy:worker-admin
npm run deploy:worker-automation

# 閮ㄧ讲鎵€鏈?Worker
npm run deploy:workers
```

### 7.3 绠＄悊鍛樿璇侀厤缃?

绠＄悊鍛樼櫥褰?(`/keystatic`, `/admin`) 楠岃瘉 `ADMIN_USERNAME` 鍜?`ADMIN_PASSWORD_HASH` 涓や釜鍙橀噺锛?

| 鍙橀噺 | 鏉ユ簮 | 璇存槑 |
|------|------|------|
| `ADMIN_USERNAME` | `workers/admin-worker/wrangler.toml` 鐨?`[vars]` | 榛樿 `admin`锛屽彲鍦?toml 涓慨鏀?|
| `ADMIN_PASSWORD_HASH` | **蹇呴』閫氳繃 `wrangler secret put` 璁剧疆** | 涓嶈鍐欏湪 toml 涓?|

**璁剧疆瀵嗙爜鍛戒护锛?*
```bash
npx wrangler secret put ADMIN_PASSWORD_HASH --name afarer-admin
```

> 娉ㄦ剰锛歚ADMIN_USERNAME` 鍦?`wrangler.toml` 涓互鏄庢枃瀛樺偍锛堜粎鍖呭惈榛樿鍊硷級锛屽闇€鏇存敼璇风洿鎺ョ紪杈?`workers/admin-worker/wrangler.toml` 鐨?`[vars]` 閮ㄥ垎骞堕噸鏂伴儴缃层€傚瘑鐮佸繀椤讳綔涓?secret 鍗曠嫭璁剧疆锛屼笉鍙啓鍏ラ厤缃枃浠躲€?

**鐧诲綍瀛楁瀵瑰簲鍏崇郴锛?*
- 琛ㄥ崟杈撳叆妗嗗悕绉颁负 `email`锛屽墠绔疄闄呭彂閫?`username` 瀛楁
- 鏈嶅姟鍣ㄨ鍙?`username` 鍜?`password` 杩涜姣斿
- 榛樿鍑嵁锛堟棤鑷畾涔?secret 鏃讹級锛歚admin` / `admin`

---

## 8. Cloudflare Pages Functions

### 8.1 `functions/_middleware.ts`

Cloudflare Pages 鑷甫鐨勪腑闂翠欢, 鍦ㄨ姹傚埌杈鹃潤鎬佹枃浠朵箣鍓嶆墽琛?

**涓昏鍔熻兘**:
1. **R2 璧勬簮璺宠浆**: 灏?`/images/*` 鍜?`/files/*` 璇锋眰 301 閲嶅畾鍚戝埌 `https://assets.afarer.com`
2. **鍥介檯鍖栨娴?*: 妫€娴嬬敤鎴疯瑷€, 闈炶嫳璇敤鎴?302 閲嶅畾鍚戝埌瀵瑰簲璇█鐗堟湰
3. **绠＄悊鍛橀〉闈繚鎶?*: `/keystatic`, `/admin` 璺緞鐨勮闂帶鍒?

**璇█妫€娴嬩紭鍏堢骇**:
1. Cookie `x-user-locale`
2. `cf-ipcountry` (Cloudflare 鍦扮悊 IP)
3. `Accept-Language` 璇锋眰澶?
4. 榛樿鑻辫 (`en`)

**娉ㄦ剰**: 姝ゆ枃浠舵槸 Cloudflare Pages Functions, **涓嶆槸 Astro 涓棿浠?*, 杩愯鍦ㄨ竟缂樼幆澧冦€傚畠涓嶅叡浜?Node.js 妯″潡, 浣跨敤鐙珛鐨勮繍琛屾椂銆?

### 8.2 `I18N_EXCLUDED` 鈥?鍥介檯鍖栨帓闄よ矾寰?

**鐢ㄩ€?*: 涓棿浠朵腑鐨?`I18N_EXCLUDED` 鍒楄〃瀹氫箟浜嗗摢浜涜矾寰勪笉闇€瑕佹墽琛岃瑷€妫€娴嬪拰閲嶅畾鍚戙€?

**鏍圭骇璺緞 vs 鏈湴鍖栬矾寰?*:

| 璺緞 | 琛屼负 |
|------|------|
| `/solutions-diving-center-boats/` | 鍦?`I18N_EXCLUDED` 涓?鈫?鐩存帴杩斿洖鏍圭骇 Astro 椤甸潰 |
| `/en/solutions-diving-center-boats/` | **涓嶅湪** `I18N_EXCLUDED` 涓?鈫?闇€瑕佸搴?`[lang]/solutions-diving-center-boats.astro` 椤甸潰 |

**甯歌闂 鈥?404 璺敱闂**:

瀵艰埅閾炬帴浣跨敤 `/{lang}/solutions-fishing-boat-solutions`锛堝甫璇█鍓嶇紑锛夛紝浣嗗鏋?`[lang]/` 涓嬫病鏈夊搴旂殑 Astro 椤甸潰璺敱锛孋loudflare Pages 浼氳繑鍥?404銆?

**瑙ｅ喅妯″紡**:
1. 鍦?`src/pages/` 涓嬪垱寤烘牴绾?`.astro` 椤甸潰锛堣嫳璇洿鎺ュ睍绀猴紝鍔犲叆 `I18N_EXCLUDED`锛?
2. 鍦?`src/pages/[lang]/` 涓嬪垱寤哄悓鍚嶇殑 Astro 椤甸潰锛岄噸瀹氬悜鍒板疄闄呯殑鏈湴鍖栭〉闈㈣矾寰?
3. 閲嶅畾鍚?HTML 浣跨敤 `<meta http-equiv="refresh">` + `<link rel="canonical">`锛屾悳绱㈠紩鎿庤兘姝ｇ‘绱㈠紩鐩爣椤甸潰

**绀轰緥** 鈥?`/en/solutions-fishing-boat-solutions` 鈫?`/en/solutions/fishing-boat-solutions`:
```astro
---
const lang = Astro.params.lang || 'en';
const target = `/${lang}/solutions/fishing-boat-solutions`;
---
<!doctype html>
<title>Redirecting to: {target}</title>
<meta http-equiv="refresh" content={`0;url=${target}`}>
<meta name="robots" content="noindex">
<link rel="canonical" href={`https://afarer.com${target}`}>
<body>
  <a href={target}>Redirecting to {target}</a>
</body>
```

---

## 9. R2 瀛樺偍

### 9.1 Bucket 閰嶇疆

| Bucket 鍚嶇О | 缁戝畾鍚?| 鐢ㄩ€?|
|---|---|---|
| `afarer-assets` | `ASSETS_R2` | 闈欐€佽祫浜?(鍥剧墖, 鏂囦欢) |
| `afarer-data` | `DATA_BUCKET` | 鏁版嵁 (AI 绱㈠紩, 鑷姩鍖栦换鍔? |

### 9.2 璧勪骇涓婁紶

```bash
npm run build:r2   # 鎴?node scripts/fast-upload-r2.mjs
```

涓婁紶鍚庣殑璧勪骇閫氳繃 `https://assets.afarer.com/...` 璁块棶銆?

### 9.3 URL 閲嶅啓

闈欐€佹枃浠朵腑鐨勫浘鐗?URL 浼氳閲嶅啓:
- 鍘熷: `/images/product/foo.jpg`
- 閲嶅啓鍚? `https://assets.afarer.com/images/product/foo.jpg`

鐢?`functions/_middleware.ts` 澶勭悊: 鍖归厤 `/images/*` 鍜?`/files/*` 鈫?301 閲嶅畾鍚戝埌 `ASSETS_BASE`銆?

---

### 10.4 GitHub Actions CI/CD

> **鐩墠鐘舵€?*: 椤圭洰灏氭湭閰嶇疆 GitHub Actions 宸ヤ綔娴併€傞儴缃蹭负鎵嬪姩鎵ц銆?

**璁″垝涓殑 CI/CD 娴佺▼** (鍙傝€?`TROUBLESHOOTING.md 搂1`):

```yaml
# .github/workflows/actions.yaml (寰呭垱寤?
push to main 鈫?
  Job 1: check-astro (astro check)
  Job 2: build-and-deploy (濡傛灉 Job 1 閫氳繃)
    鈫?npm run build
    鈫?娉ㄥ叆 VECTORIZE + AI bindings 鍒?wrangler.ci.json
    鈫?纭繚 Vectorize index + KV namespace 瀛樺湪
    鈫?娉ㄥ叆 KV namespace ID
    鈫?npx wrangler pages deploy dist/
    鈫?npm run deploy:workers
```

### 10.5 蹇呴渶鐨?GitHub Secrets

濡傛灉閰嶇疆 CI/CD锛岄渶瑕佸湪 GitHub 浠撳簱 Settings 鈫?Secrets and variables 鈫?Actions 涓缃互涓?secrets:

| Secret 鍚嶇О | 鐢ㄩ€?| 鏉ユ簮 |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | 鐢ㄤ簬 `wrangler deploy` 鐨?Cloudflare API 浠ょ墝 | Cloudflare Dashboard 鈫?My Profile 鈫?API Tokens |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 璐︽埛 ID | Cloudflare Dashboard 鍙充晶 |
| `VECTORIZE_API_KEY` | Vectorize 绱㈠紩鐨?API 瀵嗛挜 | 鐢?automation-worker 鑷姩绠＄悊 |
| `SESSION_SECRET` | 绠＄悊鍛樹細璇濆瘑閽?| 闅忔満鐢熸垚 (openssl rand -hex 32) |
| `AI_GATEWAY_TOKEN` | (鍙€? AI Gateway 浠ょ墝 | Cloudflare AI Gateway 璁剧疆 |

> **娉ㄦ剰**: 褰撳墠閮ㄧ讲娴佺▼瀹屽叏鎵嬪姩杩愯:
> ```bash
> npm run build                          # 鏋勫缓
> npx wrangler pages deploy dist/        # 閮ㄧ讲 Pages
> npm run deploy:workers                 # 閮ㄧ讲 Workers
> node scripts/fast-upload-r2.mjs        # 涓婁紶 R2 璧勪骇
> ```

---

## 10. 閮ㄧ讲鏋舵瀯涓庨檺鍒?

### 10.1 閮ㄧ讲鏋舵瀯鍥?

```
鐢ㄦ埛璇锋眰
  鈫?
Cloudflare CDN (鍏ㄧ悆杈圭紭缃戠粶)
  鈹溾攢 Pages Functions (_middleware.ts) 鈫?璇█妫€娴?/ 閲嶅畾鍚?
  鈹斺攢 闈欐€佹枃浠?(dist/)
       鈹溾攢 / 鈫?index.html (鑻辫棣栭〉)
       鈹溾攢 /zh/ 鈫?涓枃椤甸潰
       鈹溾攢 /fr/ 鈫?娉曡椤甸潰
       鈹溾攢 /products/ 鈫?鑻辫浜у搧椤?
       鈹斺攢 ...
  鈫?
API 璇锋眰 (/api/*)
  鈹溾攢 ai-worker 鈫?Vectorize + R2
  鈹溾攢 admin-worker 鈫?璁よ瘉 + 绠＄悊
  鈹溾攢 contact-worker 鈫?鑱旂郴琛ㄥ崟
  鈹溾攢 seo-worker 鈫?SEO 宸ュ叿
  鈹斺攢 automation-worker 鈫?R2 (瀹氭椂浠诲姟)
```

### 10.2 鍏抽敭闄愬埗

| 闄愬埗椤?| 鍊?| 璇存槑 |
|---|---|---|
| **Workers 缂栬瘧澶у皬** | **< 3 MB** | 姣忎釜 Worker 鐨?JS 蹇呴』灏忎簬 3MB |
| **Pages 閮ㄧ讲** | `npx wrangler pages deploy dist/` | 绾潤鎬? 鏃?SSR |
| **椤甸潰鏁伴噺** | ~8,027 椤?| 22 绉嶈瑷€ 脳 椤甸潰鏁?|
| **鏋勫缓鏃堕棿** | ~1-2 鍒嗛挓 | 骞惰鏋勫缓 |
| **Node 鐗堟湰** | >= 22.12.0 | 椤圭洰寮哄埗瑕佹眰 |
| **鍖呯鐞?* | Yarn 4.16 | 闆跺畨瑁?(Zero Install) |
| **闈欐€佽緭鍑?* | `dist/` | `output: 'static'`, 鏃犻€傞厤鍣?|

### 10.3 閮ㄧ讲鍛戒护

```bash
# 瀹屾暣閮ㄧ讲 (鏋勫缓 + 閮ㄧ讲 Pages + 閮ㄧ讲 Workers)
npm run deploy:all

# 鎴栧垎姝?
npm run build                          # 鏋勫缓
npx wrangler pages deploy dist/        # 閮ㄧ讲 Pages
npm run deploy:workers                 # 閮ㄧ讲 Workers
node scripts/fast-upload-r2.mjs        # 涓婁紶 R2 璧勪骇
```

---

## 11. 甯歌閿欒鍙婇伩鍏嶆柟娉?

### 11.1 `[object Object]` 鏄剧ず鍦ㄩ〉闈笂

**鍘熷洜**: 鐩存帴娓叉煋瀵硅薄鑰屾病鏈夎皟鐢?`.title` 鎴?`.slug` 绛夊睘鎬с€?

**甯歌鍦烘櫙**: Tags 娓叉煋銆?

**淇鏂规硶**:
```astro
<!-- 鉂?閿欒 -->
<span>{tag}</span>

<!-- 鉁?姝ｇ‘ -->
<span>{String((tag as any)?.title || (tag as any)?.slug || tag || '').trim()}</span>
```

### 11.2 瀵艰埅/椤佃剼鏄剧ず閿欒璇█

**鍘熷洜**: 浣跨敤浜?`(ui as any)[key]` 浠庡叡浜彲鍙?`_ui` 瀵硅薄璇诲彇缈昏瘧, 浣?`_ui` 琚叾浠栧苟琛屾覆鏌撶殑椤甸潰瑕嗙洊銆?

**淇鏂规硶**:
```astro
<!-- 鉂?閿欒 (渚濊禆鍏变韩 _ui) -->
import { ui } from '~/i18n/config';
<span>{(ui as any)['nav.products']}</span>

<!-- 鉁?姝ｇ‘ (鐩存帴鑾峰彇) -->
import { getUiForLang } from '~/i18n/generated/ui-all';
const t = (key: string) => getUiForLang(locale)?.[key] || key;
<span>{t('nav.products')}</span>
```

**娉ㄦ剰**: 鎵€鏈変粠 `~/i18n/config` 瀵煎叆 `ui` 鎴栦娇鐢?`(ui as any)` 鐨勪唬鐮侀兘搴旇琚浛鎹€?

### 11.3 椤甸潰鏄剧ず涔辩爜 (garbled Chinese text)

**鍘熷洜**: 鏂囦欢缂栫爜闂, 闈?ASCII 瀛楃鍦ㄤ繚瀛樻椂琚敊璇紪鐮併€?

**淇鏂规硶**:
- 纭繚鎵€鏈?`.astro`, `.ts`, `.json` 鏂囦欢浣跨敤 **UTF-8 without BOM** 缂栫爜
- 妫€鏌ヨ剼鏈? `python scripts/find-garbled.py` 鎴?`python scripts/check-encoding.py`
- 淇鑴氭湰: `python scripts/fix-garbled.py`
- 閬垮厤鍦ㄦ簮鏂囦欢涓娇鐢ㄩ潪鏍囧噯 Unicode 瀛楃

### 11.4 缂哄け缈昏瘧閿鑷撮〉闈㈡樉绀洪敭鍚?

**鍘熷洜**: UI 鐢熸垚鑴氭湰鏈彁鍙栨煇缈昏瘧閿? 鎵€鏈?22 绉嶈瑷€鐨?`ui/*.ts` 鏂囦欢涓兘缂哄け銆?

**绀轰緥**: `product.pageDesc` 鍦ㄦ墍鏈?`ui/*.ts` 鏂囦欢涓己澶便€?

**淇鏂规硶**:
1. 鍦?UI 鎻愬彇鑴氭湰 `scripts/_gen-uiall.cjs` 涓坊鍔犳柊閿?
2. 閲嶆柊杩愯 `npm run build` 閲嶆柊鐢熸垚 `ui/*.ts`
3. 鎴栬€呭湪鍚勮瑷€椤甸潰涓洿鎺ヤ娇鐢?`productTexts` 鏁版嵁 (`src/data/product-texts.ts`)

### 11.5 鏋勫缓鏃剁被鍨嬮敊璇?(astro check)

**棰勭煡**: `astro check` 鎶ュ憡绾?350 涓敊璇? 鍧囦负**棰勫厛瀛樺湪**鐨勫凡鐭ラ敊璇?
- `src/pages/_keystatic/` 鈥?缂栫爜闂 (UTF-8 BOM/闈炴爣鍑嗗瓧绗?
- `workers/` 鈥?Cloudflare Workers 绫诲瀷闂
- 鍏朵粬灏戦噺宸茬煡绫诲瀷闂

**鍑嗗垯**:
- 淇敼浠ｇ爜鍓嶅厛杩愯 `astro check` 璁板綍鍩虹嚎
- 纭繚**浣犵殑淇敼涓嶅鍔犳柊閿欒**
- 濡傛灉涓嶇‘瀹? 瀵规瘮淇敼鍓嶅悗鐨勯敊璇暟閲忓拰鍐呭

### 11.6 PowerShell 缂栫爜闂 (TROUBLESHOOTING.md 搂5.2)

PowerShell 5.1 榛樿浣跨敤 ANSI 缂栫爜锛屼細鐮村潖 UTF-8 澶氬瓧鑺傚瓧绗︺€?

```powershell
# 鉂?閿欒 鈥?鐮村潖 UTF-8
Set-Content -Path file.astro -Value $newContent

# 鉁?姝ｇ‘ 鈥?淇濈暀 UTF-8
[System.IO.File]::WriteAllText($Path, $content, [System.Text.UTF8Encoding]::new($false))
```

### 11.7 `&rarr;` HTML 瀹炰綋姹℃煋 (TROUBLESHOOTING.md 搂5.5)

涓嶈鍦ㄦ簮鏂囦欢涓娇鐢?HTML 瀹炰綋 `&rarr;`锛屼娇鐢ㄥ瓧闈?Unicode 绠ご `鈫抈銆傚湪 Astro 妯℃澘銆乊AML 鏂囦欢鎴栫粍浠?props 涓紝`&rarr;` 缁忓父琚弻閲嶈浆涔変负 `&amp;rarr;`銆?

### 11.8 缂栫爜閾佸緥 (TROUBLESHOOTING.md 搂3.3)

| # | 瑙勫垯 | 鍘熷洜 |
|---|------|------|
| 1 | **UTF-8 鏃?BOM** | BOM 瀵艰嚧 YAML 瑙ｆ瀽閿欒 |
| 2 | **鍙敤鐩爣璇█** | 涓嶈鍦ㄦ娲茶瑷€鏂囦欢涓寘鍚腑鏂?鏃ユ枃/闊╂枃 |
| 3 | **涓嶈涓浆缈昏瘧** | 鑻辫鈫掓硶璇?鐩存帴缈昏瘧锛屼笉瑕?鑻辫鈫掍腑鏂団啋娉曡 |
| 4 | **姝ｇ‘ Unicode** | 浣跨敤姝ｇ‘鐨?Unicode 鐮佺偣锛屼笉瑕佸弻閲嶇紪鐮?|
| 5 | **CJK 鏂囦欢** | 纭繚鍖呭惈鏈夋晥鐨勫師鐢熷瓧绗?|
| 6 | **涓嶈 AI 閲嶇紪鐮?* | 楠岃瘉 AI 杈撳嚭鏄纭殑 UTF-8 |
| 7 | **淇敼鍚庨獙璇?* | 杩愯 `node i18n-tool.cjs check` |
| 8 | **YAML 鏈夋晥鎬?* | 纭繚寮曞彿闂悎銆佺缉杩涗竴鑷?|
| 9 | **榛樿鑻辫** | 鍏堝啓鑻辫鍐呭锛屽啀缈昏瘧 |
| 10 | **涓嶈 .bak 鏂囦欢** | 鎻愪氦鍓嶆竻鐞嗗浠芥枃浠?|

### 11.9 瀵艰埅椤规樉绀鸿嫳鏂囪€岄潪缈昏瘧鏂囨湰

**鍘熷洜**: 鏂板鑸」娣诲姞鍒颁簡 `navigation.yaml`锛屼絾:
1. `Header.astro` / `Footer.astro` 鐨?`navTextMap` 涓己灏戣嫳鏂?text 鈫?缈昏瘧閿殑鏄犲皠
2. `i18n-config.json` 涓己灏戝搴旂炕璇戦敭鐨?22 璇█缈昏瘧

**淇鏂规硶**:
```astro
// 1. 鍦?Header.astro / Footer.astro 鐨?navTextMap 涓坊鍔?
'Buyer Center': 'nav.buyerCenter',
'afarer Story': 'nav.afarerStory',
```

```json
// 2. 鍦?i18n-config.json 涓负鎵€鏈?22 璇█娣诲姞缈昏瘧:
"nav.buyerCenter": "Buyer Center",     // en
"nav.buyerCenter": "涔板涓績",          // zh
// ... 鍏朵粬璇█
```

**閬垮厤鏂规硶**:
- 娣诲姞鏂板鑸」鍚庤繍琛?`grep` 妫€鏌?`navTextMap` 鏄惁鍖呭惈鏂?text 鍊?
- 妫€鏌?`i18n-config.json` 鏄惁鍖呭惈鏂扮炕璇戦敭
- 鍦ㄦ湰鍦版垨 staging 鐜楠岃瘉涓枃/鏃ユ枃绛夐潪鑻辫椤甸潰瀵艰埅鏄剧ず

### 11.11 椤甸潰 404 鈥?鏍圭骇椤甸潰瀛樺湪浣?`/{lang}/` 璺敱缂哄け

**鍦烘櫙**: 鏍圭骇椤甸潰 `/solutions-fishing-boat-solutions` 姝ｅ父璁块棶 (200)锛屼絾瀵艰埅鎸囧悜 `/{lang}/solutions-fishing-boat-solutions` 杩斿洖 404銆?

**鏍瑰洜**: 涓ゅ眰璺敱缂哄け锛?

| 灞傜骇 | 闂 | 璇存槑 |
|------|------|------|
| 1. 鏍圭骇 `.astro` 鏂囦欢 | 4 涓В鍐虫柟妗堥〉闈紙fishing, marine-tourism, rescue, yacht-tender锛夌己灏?`src/pages/solutions-*.astro` 鏂囦欢 | 鍙湁 diving 椤甸潰瀛樺湪鏍圭骇鏂囦欢 |
| 2. 鏈湴鍖栭噸瀹氬悜椤甸潰 | 5 涓В鍐虫柟妗堥〉闈㈠潎缂哄皯 `src/pages/[lang]/solutions-*.astro` 鏂囦欢 | 瀵艰埅鐢熸垚 `/{lang}/solutions-*` 閾炬帴锛屼絾鏈湴鍖栧唴瀹瑰湪 `[lang]/solutions/*` 璺緞锛堟棤 `solutions-` 鍓嶇紑锛?|

**淇鏂规硶**:
1. 鍒涘缓鏍圭骇 `.astro` 椤甸潰锛堝姞鍏?`functions/_middleware.ts` 鐨?`I18N_EXCLUDED` 鍒楄〃锛?
2. 鍒涘缓 `[lang]/solutions-*.astro` 椤甸潰锛屼娇鐢?`<meta http-equiv="refresh">` 閲嶅畾鍚戝埌瀹為檯鐨?`[lang]/solutions/*` 椤甸潰
3. 鏋勫缓楠岃瘉锛歚npm run build` 鍚庢鏌?`dist/` 涓槸鍚︾敓鎴愬搴旂殑 `index.html`

**楠岃瘉鍛戒护**:
```bash
curl -sL -o /dev/null -w "%{http_code}" https://afarer.com/en/solutions-fishing-boat-solutions/
# 鏈熸湜: 200 (璺熼殢閲嶅畾鍚戝埌 /en/solutions/fishing-boat-solutions/)
```

**閬垮厤鏂规硶**:
- 鏂板缓椤甸潰鏃跺悓姝ュ垱寤烘牴绾ч〉闈㈠拰 `[lang]/` 涓嬬殑閲嶅畾鍚戦〉闈?
- 淇敼瀵艰埅閾炬帴璺緞鏃剁‘璁ゅ搴旂殑 Astro 璺敱鏄惁瀛樺湪
- 鏋勫缓鍚庢鏌?`dist/` 鐩綍涓嬫槸鍚﹀寘鍚墍鏈夐鏈熺殑璺緞

### 11.13 涔辩爜闂 (U+FFFD / garbled text)

**鐜拌薄**: 椤甸潰鏄剧ず `锟絗 (U+FFFD 鏇挎崲瀛楃) 鎴栦腑鏂?鐗规畩瀛楃鏄剧ず涓轰贡鐮併€?

**鍘熷洜**:
1. Keystatic/GitHub 鍐呭婧愭枃浠剁殑 UTF-8 缂栫爜鍦ㄤ紶杈撴垨瀛樺偍杩囩▼涓崯鍧?
2. Powershell 鐨?`Set-Content` 榛樿浣跨敤 ANSI 缂栫爜锛岀牬鍧?UTF-8 澶氬瓧鑺傚瓧绗?
3. 杩囦簬婵€杩涚殑娓呯悊鑴氭湰锛堝 `replace(/[^\x00-\x7F]/g, '')` 鎴?`replace(/\(\s*\)/g, '')`锛夎鍒犲悎娉曚唬鐮?

**淇鏂规硶锛堥澏鍚戜慨澶嶏紝涓嶈涓€鍒€鍒囷級**:

```bash
# 鉁?姝ｇ‘锛氬彧鏇挎崲 U+FFFD 鏇挎崲瀛楃
node -e "fs.writeFileSync('file.astro', fs.readFileSync('file.astro','utf8').replace(/\uFFFD/g,' '), 'utf8')"
```

```bash
# 鉂?閿欒锛氬垹闄ゆ墍鏈夐潪 ASCII 瀛楃 鈥?浼氱牬鍧忥細
#   - 漏 路 鈫?脳 鈿狅笍 馃攳  绛夊悎娉曠鍙?
#   - 茅 莽 帽 锚 绛夋硶璇?瑗跨彮鐗欒閲嶉煶瀛楃
#   - 涓枃 UI 鎻忚堪锛圕MS 闈㈡澘鍙岃鏍囩锛?
#   - 鏂规硶璋冪敤濡?.toString() .trim() 涓殑 ()
```

**闇€瑕佷繚鐣欑殑鍚堟硶闈?ASCII 鍐呭**:
| 绫诲埆 | 绀轰緥 | 鎵€鍦ㄦ枃浠?|
|------|------|---------|
| 鐗堟潈/鍟嗘爣 | `漏`, `庐`, `鈩 | branding.astro |
| 鏍囩偣绗﹀彿 | `路`, `鈫抈, `脳` | branding, navigation, link-refactor |
| 璀﹀憡绗﹀彿 | `鈿狅笍` | navigation.astro |
| Emoji | `馃攳` | index.astro |
| 閲嶉煶瀛楃 | `茅`, `莽`, `帽`, `锚` | countries.astro (Fran莽ais, Espa帽ol) |
| 涓枃 UI 鏍囩 | `缂栬緫绔欑偣鍚嶇О`銆乣鍝佺墝` | branding.astro, seo.astro (鍙岃 CMS) |

**閬垮厤鏂规硶**:
- 濮嬬粓浣跨敤 `[System.IO.File]::WriteAllText($path, $content, [System.Text.UTF8Encoding]::new($false))` 鑰屼笉鏄?`Set-Content`
- 娓呯悊鑴氭湰涓彧瀵?`\uFFFD` 鍋氭浛鎹紝涓嶇鍏朵粬瀛楃
- 淇敼鍚庤繍琛?`git diff` 妫€鏌ユ槸鍚︽湁鎰忓鍒犻櫎鐨勪唬鐮佽
- 鍦?CI 涓繍琛?`astro check` 纭繚 0 閿欒

### 11.14 readTokenFromCookies 瑙ｅ瘑澶辫触瀵艰嚧 Bad credentials

**鐜拌薄**: 鍦ㄥ悗鍙版垚鍔熶繚瀛?GitHub Token 鍚庯紝椤甸潰浠嶇劧鏄剧ず `Failed to read: Bad credentials`銆?

**鍘熷洜**: Worker (`/api/admin/save-token`) 灏?token 浠?*鏄庢枃**锛圲RL-encoded锛夊瓨鍏?cookie `ks-gh-token`锛屼絾 Astro 鍓嶇鐨?`readTokenFromCookies()` 濮嬬粓灏濊瘯鐢?AES-256-GCM `decryptToken()` 瑙ｅ瘑銆傝В瀵嗗け璐ヨ繑鍥?`null` 鈫?`GitHubClient('')` 鍙戦€佺┖ token 鈫?GitHub 杩斿洖 "Bad credentials"銆?

**淇**: `readTokenFromCookies` 鍏堝皾璇曡В瀵嗭紝澶辫触鍒欏洖閫€璇诲彇鍘熷鍊硷細

```ts
export function readTokenFromCookies(cookies): string | null {
  const raw = cookies.get('ks-gh-token')?.value;
  if (!raw) return null;
  const decrypted = decryptToken(raw);   // 灏濊瘯瑙ｅ瘑锛圢ode.js saveTokenCookie 瀛樼殑鏄姞瀵嗘牸寮忥級
  if (decrypted) return decrypted;
  try { return decodeURIComponent(raw); } catch { return raw; }  // 鍥為€€鍘熷鍊硷紙Worker 瀛樼殑鏄槑鏂囷級
}
```

**閬垮厤鏂规硶**:
- 纭繚 Worker 鍜?Astro 鍓嶇浣跨敤涓€鑷寸殑 token 瀛樺偍鏍煎紡
- 濡傛灉浣跨敤涓ょ瀛樺偍璺緞锛圵orker 瀛樻槑鏂囥€丯ode.js 瀛樺姞瀵嗭級锛宍readTokenFromCookies` 蹇呴』鍏煎涓ょ鏍煎紡

### 11.15 esbuild Unexpected "t" 鈥?import/export 椤哄簭

**鐜拌薄**: 鏋勫缓鏃?`esbuild` 鎶ラ敊 `Unexpected "t"`锛屾寚鍚?`export const prerender = true;`銆?

**鍘熷洜**: esbuild 瑕佹眰闈欐€?`import` 澹版槑蹇呴』鍑虹幇鍦ㄤ换浣?`export` 涔嬪墠銆侹eystatic 椤甸潰灏?`export const prerender` 鏀惧湪浜?`import` 涔嬪墠銆?

```astro
---
<!-- 鉂?閿欒锛歟xport 鍦?import 涔嬪墠 -->
export const prerender = true;
import AdminLayout from '~/layouts/AdminLayout.astro';

<!-- 鉁?姝ｇ‘锛歩mport 蹇呴』鍦?export 涔嬪墠 -->
import AdminLayout from '~/layouts/AdminLayout.astro';
export const prerender = true;
---
```

**淇**: 灏?42 涓?keystatic 椤甸潰鐨?`import` 璇彞绉诲埌 `export` 涔嬪墠銆?

**閬垮厤鏂规硶**:
- Astro frontmatter 涓缁堝厛鍐?`import`锛屽啀鍐?`export`
- 鎻愪氦鍓嶈繍琛?`astro build` 鎴?`astro check` 楠岃瘉

### 11.16 鐧诲綍閲嶅畾鍚戝惊鐜?

**鐜拌薄**: 鐧诲綍鎴愬姛鍚庤烦杞埌 `/keystatic` 椤甸潰绔嬪嵆鍙堣烦鍥?`/login`銆?

**鍘熷洜**:
1. 鎵€鏈?42 涓?admin 椤甸潰鐨?frontmatter 璋冪敤 `Astro.redirect('/login')`锛屾瀯寤烘椂 `Astro.cookies.get()` 杩斿洖 `undefined` 鈫?session 涓?`null` 鈫?瑙﹀彂閲嶅畾鍚戯紙鏋勫缓鏃舵棤鎰忎箟锛屼絾杩愯鏃堕€昏緫閿欒锛?
2. `ks-admin-session` cookie 璁剧疆浜?`HttpOnly`锛屽墠绔?`document.cookie` 鏃犳硶璇诲彇

**淇**:
1. 绉婚櫎鎵€鏈?admin 椤甸潰鐨?`Astro.redirect('/login')`锛屾敼鐢?`AdminLayout` 鐨?client-side 鑴氭湰妫€鏌?
2. Worker 鐧诲綍鏃堕澶栬缃竴涓潪 HttpOnly 鐨?companion cookie `ks-auth=1`
3. `AdminLayout.astro` 鐨?`<script is:inline>` 妫€鏌?`document.cookie.indexOf('ks-auth=')`锛?

```js
(function() {
  if (document.cookie.indexOf('ks-auth=') === -1 && window.location.pathname !== '/login') {
    window.location.replace('/login');
  }
})();
```

**閬垮厤鏂规硶**:
- Admin 椤甸潰涓嶈浣跨敤 `Astro.redirect('/login')`锛堟瀯寤烘椂杩愯锛宑ookie 涓嶅彲鐢級
- 浣跨敤 client-side cookie 妫€鏌?+ companion cookie 鏂规
- 鐧诲綍 cookie 鍚屾椂璁剧疆 HttpOnly锛堝畨鍏級鍜岄潪 HttpOnly锛堝墠绔彲鐢級涓や釜鐗堟湰

### 11.12 浠锋牸淇℃伅鎰忓鏄剧ず

**瑕佹眰**: 浜у搧椤甸潰涓婁笉鍏佽鏄剧ず浠锋牸 (B2B 瑕佹眰)銆?

**宸茬Щ闄?*:
- 鎵€鏈変骇鍝佽鎯呴〉鐨勪环鏍兼樉绀?
- 鎵€鏈変骇鍝佸姣旈〉鐨?浠锋牸"姣旇緝琛?
- 浜у搧鍗＄墖涓婄殑浠锋牸寰界珷
- AI 瀵硅瘽涓殑浠锋牸寮曠敤鏂囨湰
- JSON-LD Schema 涓殑 `offers.price` 瀛楁

**濡傛灉灏嗘潵瑕佹坊鍔犱环鏍兼樉绀?*: 闇€瑕佸湪 `src/data/products.ts` 娣诲姞浠锋牸瀛楁, 骞跺湪浜у搧椤甸潰妯℃澘涓搴旀覆鏌撱€?

---

## 12. 缂栬緫鎸囧崡涓庣孩绾?

### 12.1 缈昏瘧鐩稿叧

- **鉁?浣跨敤**: `getUiForLang(lang)` 浠?`~/i18n/generated/ui-all` 瀵煎叆
- **鉂?绂佹**: 浠?`~/i18n/config` 瀵煎叆 `ui` 骞朵娇鐢?`(ui as any)`
- **鉂?绂佹**: 浣跨敤 `(ui as any)[key]` 鎴?`(ui)[key]` 妯″紡
- **鉁?鎺ㄨ崘妯″紡**: `const t = (key: string) => getUiForLang(locale)?.[key] || key;`

### 12.2 浜у搧鐩稿叧

- 浜у搧缁撴瀯鍖栨暟鎹湪 `src/data/products.ts` 淇敼
- 浜у搧澶氳瑷€鏂囨湰鍦?`src/data/product-texts.ts` 淇敼
- Tags 娓叉煋蹇呴』浣跨敤瀹夊叏灞曞紑, 涓嶈兘鐩存帴娓叉煋瀵硅薄
- 涓嶈鍦ㄤ骇鍝侀〉闈笂娣诲姞浠锋牸淇℃伅

### 12.3 瀵艰埅椤逛慨鏀圭孩绾?

娣诲姞鎴栦慨鏀瑰鑸」鏃讹紝蹇呴』鍚屾鏇存柊浠ヤ笅**鍥涘**:

| # | 鏂囦欢 | 淇敼鍐呭 |
|---|------|---------|
| 1 | `src/data/site/navigation.yaml` | 娣诲姞/淇敼瀵艰埅缁撴瀯鍜岃嫳鏂?text |
| 2 | `src/components/widgets/Header.astro` | 鍦?`navTextMap` 娣诲姞 text 鈫?缈昏瘧閿槧灏?|
| 3 | `src/components/widgets/Footer.astro` | 鍚屼笂锛屽湪 `navTextMap` 娣诲姞鏄犲皠 |
| 4 | `src/data/site/i18n-config.json` | 涓烘墍鏈?22 璇█娣诲姞缈昏瘧閿拰缈昏瘧鏂囨湰 |
| 5 | `src/i18n/routing.ts` | 濡傛灉鏂伴〉闈㈠湪 `[lang]/` 涓嬶紝娣诲姞鍒?`LOCALIZED_ROUTES` |

**鉂?涓嶈**鍙慨鏀?`navigation.yaml` 鎴栨湰鍦板寲 YAML 鏂囦欢锛堝 `navigation.zh.yaml`锛夆€斺€旀覆鏌撶郴缁熶笉浣跨敤瀹冧滑杩涜缈昏瘧銆?

**鉁?楠岃瘉鏂规硶**: `git grep 'New Text'` 妫€鏌ユ槸鍚﹀湪鎵€鏈夊繀瑕佹枃浠朵腑鍑虹幇銆?

### 12.4 鏂囦欢缂栫爜

- 鎵€鏈夋簮鏂囦欢蹇呴』浣跨敤 **UTF-8 without BOM**
- 淇敼鍖呭惈涓枃/闈?ASCII 瀛楃鐨勬枃浠跺悗, 杩愯 `python scripts/check-encoding.py`
- 濡傛灉鍙戠幇涔辩爜, 杩愯 `python scripts/fix-garbled.py`

### 12.4 Worker 闄愬埗

- 姣忎釜 Worker 鐨?JS 缂栬瘧鍚庡繀椤?**< 3 MB**
- 涓嶈鍦?Worker 涓?`import` Astro 椤圭洰 `src/` 鐩綍鐨勬枃浠?
- Worker 浣跨敤鐙珛鐨?`wrangler.toml` 閰嶇疆

### 12.5 R2 璧勪骇

- 闈欐€佸浘鐗?鏂囦欢涓婁紶鍒?R2 鍚? 閫氳繃 `https://assets.afarer.com/...` 璁块棶
- 涓婁紶鍛戒护: `node scripts/fast-upload-r2.mjs`
- `functions/_middleware.ts` 鑷姩灏?`/images/*` 鍜?`/files/*` 閲嶅畾鍚戝埌 R2

### 12.6 鏋勫缓涓庨儴缃?

- 淇敼鍓嶅姟蹇呰繍琛?`npm run build` 纭鏋勫缓鎴愬姛
- 鏋勫缓鎴愬姛鍚庨儴缃? `npx wrangler pages deploy dist/`
- 濡傛灉淇敼浜?Worker, 鍗曠嫭閮ㄧ讲: `npm run deploy:worker-<name>`
- 濡傛灉淇敼浜嗚祫浜ф枃浠? 涓婁紶 R2: `node scripts/fast-upload-r2.mjs`

### 12.7 淇敼鍚庨獙璇佹竻鍗?(鍙傝€?TROUBLESHOOTING.md 搂6)

姣忔淇敼鍚庯紝濮嬬粓楠岃瘉锛?

1. `node i18n-tool.cjs check` 閫氳繃
2. `npx esbuild src/i18n/config.ts --bundle --format=esm --outfile=NUL` 閫氳繃
3. `node scripts/geo-build.mjs` 閫氳繃
4. `npm run build` 鏋勫缓鎴愬姛
5. 瑙嗚妫€鏌ワ細涓婚〉銆佸崥瀹€佹殫妯″紡銆佺Щ鍔ㄨ彍鍗曘€佽仈绯昏〃鍗?

### 12.8 娣诲姞鏂板唴瀹规竻鍗?(鍙傝€?TROUBLESHOOTING.md 搂8)

**鏂颁骇鍝?**
1. 鍦?`src/data/products.ts` 娣诲姞浜у搧鏁版嵁
2. 鍦?`src/content/products/{slug}.mdx` 鍒涘缓 MDX
3. 鍦?`src/data/product-texts.ts` 娣诲姞缈昏瘧
4. 鈫?鑷姩鐢熸垚锛氫骇鍝侀〉闈€乣/llms/products/{slug}`銆丣SON-LD銆乴lms.txt

**鏂版湰鍦板寲椤甸潰 (22璇█):**
1. 鍦?`src/pages/[lang]/{slug}.astro` 鍒涘缓椤甸潰
2. 鍦?`src/i18n/config.ts` 娣诲姞缈昏瘧閿?
3. 鍦?`src/data/site/sections.ts` 娣诲姞鏉＄洰
4. 鍦?`src/lib/geo-seo/intent.ts` 娣诲姞鎰忓浘瑙勫垯
5. 鈫?鑷姩鐢熸垚锛欻TML 椤甸潰銆乴lms.txt銆乴lms-full.txt銆佺珯鐐瑰湴鍥?

**鏂?B2B 椤甸潰:**
1. 鍦?`src/pages/{slug}.astro` 鍒涘缓椤甸潰锛堟牴绾э紝鑻辫锛?
2. 鍦?`src/data/standalone-pages.ts` 娣诲姞鍏冩暟鎹?
3. 鍦?`src/data/site/sections.ts` 娣诲姞鏉＄洰
4. 鈫?鑷姩鐢熸垚锛欻TML 椤甸潰銆乣/llms/pages/{slug}`銆乴lms.txt銆佺珯鐐瑰湴鍥?

**鏂?Solutions 椤甸潰 (甯﹀璇█):**
1. 鍦?`src/pages/solutions-{slug}.astro` 鍒涘缓鏍圭骇椤甸潰锛堣嫳璇紝纭紪鐮佸唴瀹癸級
2. 鍦?`src/pages/[lang]/solutions-{slug}.astro` 鍒涘缓閲嶅畾鍚戦〉闈?鈫?`/{lang}/solutions/{slug}`
3. 鍦?`functions/_middleware.ts` 鐨?`I18N_EXCLUDED` 涓坊鍔犳牴绾ц矾寰?
4. 鍦?`src/data/site/sections.ts` 娣诲姞鑿滃崟鏉＄洰
5. 鍦?`src/pages/[lang]/solutions/{slug}.astro` 鍒涘缓瀹為檯鏈湴鍖栧睍绀洪〉闈紙浣跨敤 YAML 鏁版嵁锛?
6. 鍒涘缓 `src/data/pages/{locale}/solutions-{slug}.yaml` 缈昏瘧鏂囦欢
7. 鈫?鑷姩鐢熸垚锛氭牴绾ц嫳璇〉闈?+ 21 璇█閲嶅畾鍚戦〉闈?+ 21 璇█瀹為檯椤甸潰

### 12.9 浠ｇ爜妫€鏌?

```bash
npm run check          # 鍏ㄩ儴妫€鏌?(astro + eslint + prettier + i18n)
npm run check:astro    # 浠?astro check
npm run check:eslint   # 浠?eslint
npm run check:prettier # 浠?prettier
npm run check:i18n     # 浠?i18n 缈昏瘧妫€鏌?
```

---

## 13. 闄勫綍: 鍏抽敭鏂囦欢寮曠敤

| 鏂囦欢 | 鐢ㄩ€?|
|---|---|
| `src/i18n/generated/ui-all.ts` | `getUiForLang()` 鍑芥暟 (缈昏瘧鍏ュ彛) |
| `src/i18n/config.ts` | `setLang()`, `defaultLang`, 璇█鍒楄〃 |
| `src/i18n/utils.ts` | `getLangFromUrl()`, 璺緞澶勭悊 |
| `src/i18n/page-content.ts` | `getPageContent()` 椤甸潰鍐呭 |
| `src/data/products.ts` | 浜у搧缁撴瀯鍖栨暟鎹?|
| `src/data/product-texts.ts` | 浜у搧澶氳瑷€鏂囨湰 |
| `src/layouts/Layout.astro` | 涓诲竷灞€ (璋冪敤 setLang) |
| `src/components/widgets/Header.astro` | 瀵艰埅鏍?(getUiForLang) |
| `src/components/widgets/Footer.astro` | 椤佃剼 (getUiForLang) |
| `src/pages/[lang]/products/[slug].astro` | 澶氳瑷€浜у搧璇︽儏 |
| `src/pages/products/[slug].astro` | 鑻辫浜у搧璇︽儏 |
| `functions/_middleware.ts` | Pages Functions 涓棿浠?|
| `src/middleware.ts` | Astro 涓棿浠?|
| `wrangler.toml` | R2 bucket 澹版槑 |
| `src/i18n/routing.ts` | 鍏变韩璺敱妯″潡 (`LOCALIZED_ROUTES`, `localizeHref()`, `entityForHref()`) |
| `src/utils/images.ts` | 鍥剧墖澶勭悊 (`adaptOpenGraphImages()` 鈥?杩滅▼ URL 璺宠繃 `getImage()`) |
| `scripts/_gen-uiall.cjs` | UI 缈昏瘧鐢熸垚鑴氭湰 |
| `scripts/_gen-pages.cjs` | 椤甸潰鍐呭 TS 妯″潡鐢熸垚鑴氭湰 |
| `scripts/check-translations.mjs` | 缈昏瘧妫€鏌ヨ剼鏈?|
| `src/lib/token-store.ts` | GitHub Token 鐨?cookie 鍔犲瘑/瑙ｅ瘑/璇诲彇 |
| `src/lib/auth.ts` | `verifySessionToken()` HMAC 浼氳瘽鏍￠獙 |
| `src/lib/github.ts` | `GitHubClient` 灏佽 GitHub REST API |
| `src/layouts/AdminLayout.astro` | 鍚庡彴甯冨眬锛氫晶杈规爮瀵艰埅 + client-side 鐧诲綍妫€鏌?|
| `workers/admin-worker/index.ts` | 鍚庡彴 Worker锛氳璇併€丟itHub 浠ｇ悊銆乀oken 淇濆瓨 |
| `src/pages/keystatic/` | 42 涓?CMS 缂栬緫椤甸潰 |
| `src/data/admin-auth.json` | 鈿狅笍 纭紪鐮佸嚟鎹紙寤鸿鏀圭敤鐜鍙橀噺锛?|

---

## 14. 鍚庡彴绠＄悊绯荤粺鏋舵瀯

### 14.1 姒傝堪

鍚庡彴绠＄悊绯荤粺浣嶄簬 `/keystatic/*` 璺敱锛屾彁渚?CMS 鍔熻兘锛堢紪杈戜骇鍝併€佹枃绔犮€侀〉闈€佸鑸瓑锛夈€傜郴缁熼噰鐢?**闈欐€佹瀯寤?+ Worker API** 鐨勬贩鍚堟灦鏋勶細

- **鍓嶇**: Astro 闈欐€侀〉闈?(`output: 'static'`)锛屾墍鏈?admin 椤甸潰鍦ㄦ瀯寤烘椂棰勬覆鏌?
- **API**: Cloudflare Worker (`afarer-admin`) 澶勭悊鐧诲綍銆丟itHub 璇诲啓鎿嶄綔
- **瀛樺偍**: 鍐呭鐩存帴璇诲啓 GitHub 浠撳簱锛堥€氳繃 GitHub REST API锛夛紝鏃犳暟鎹簱

### 14.2 绯荤粺鏋舵瀯鍥?

```
鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
鈹?                  娴忚鍣?(Browser)                        鈹?
鈹?  /keystatic/*   鈫? Astro 闈欐€侀〉闈?(棰勬覆鏌?              鈹?
鈹?  /login         鈫? 鐧诲綍椤甸潰                              鈹?
鈹?  /api/admin/*   鈫? fetch 鈫?Worker API                   鈹?
鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
                       鈹?
          鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹粹攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
          鈹?                        鈹?
          鈻?                        鈻?
鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?   鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
鈹? Cloudflare Pages 鈹?   鈹? Cloudflare Worker       鈹?
鈹? dist/ (闈欐€佹枃浠?  鈹?   鈹? afarer-admin         鈹?
鈹?                  鈹?   鈹?                         鈹?
鈹? /keystatic/*     鈹?   鈹? /api/auth/login         鈹?
鈹? /login           鈹?   鈹? /api/auth/logout        鈹?
鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?   鈹? /api/admin/list          鈹?
                         鈹? /api/admin/read          鈹?
                         鈹? /api/admin/update        鈹?
                         鈹? /api/admin/save-token    鈹?
                         鈹? /api/admin/publish       鈹?
                         鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
                                     鈹?
                                     鈻?
                        鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
                        鈹? GitHub REST API        鈹?
                        鈹? api.github.com         鈹?
                        鈹? 鈹€鈹€鈹€                    鈹?
                        鈹? GET /repos/{owner}/{repo}/contents/...
                        鈹? PUT /repos/{owner}/{repo}/contents/...
                        鈹? POST /repos/{owner}/{repo}/merges
                        鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?
```

### 14.3 璁よ瘉娴佺▼

#### 14.3.1 鐧诲綍

```
鐢ㄦ埛鎻愪氦琛ㄥ崟 鈫?POST /api/auth/login
  鈹?
  鈻?
Worker 楠岃瘉璐﹀彿瀵嗙爜 (ADMIN_USERNAME / ADMIN_PASSWORD_HASH)
  鈹?
  鈹溾攢 鎴愬姛:
  鈹?  鐢熸垚 HMAC session token (username|expiresAt|signature)
  鈹?  鐢熸垚 JWT token (澶囩敤)
  鈹?  璁剧疆 3 涓?cookie:
  鈹?    鈥?ks-admin-session (HttpOnly, Secure, SameSite=Lax) 鈥?HMAC 鏍煎紡
  鈹?    鈥?ks-auth=1        (闈?HttpOnly) 鈥?鍓嶇鍙锛屾寚绀哄凡鐧诲綍
  鈹?    鈥?JWT token (澶囩敤锛岄€氳繃鍝嶅簲浣撹繑鍥炵粰鍓嶇)
  鈹?  杩斿洖 { token, user, success: true }
  鈹?
  鈹斺攢 澶辫触: 杩斿洖 401 { error: 'Invalid credentials' }
```

#### 14.3.2 璁よ瘉妫€鏌?

- **鏋勫缓鏃?*: `Astro.cookies.get('ks-admin-session')?.value` 杩斿洖 `undefined` 鈫?session 濮嬬粓涓?`null`
- **杩愯鏃?(娴忚鍣?**:
  - `AdminLayout.astro` 鐨?inline script 妫€鏌?`document.cookie.indexOf('ks-auth=')`锛?
    - 涓嶅瓨鍦?鈫?绔嬪嵆 `window.location.replace('/login')`
    - 瀛樺湪 鈫?娓叉煋椤甸潰鍐呭
  - Worker API 璇锋眰浣跨敤 cookie 璁よ瘉锛歚authenticate()` 鍏堝皾璇?`Authorization: Bearer`锛屽け璐ュ垯璇诲彇 `ks-admin-session` cookie 鍋?HMAC 楠岃瘉

#### 14.3.3 鐧诲嚭

```
GET /api/auth/logout
  鈹?
  鈻?
Worker 娓呴櫎 2 涓?cookie:
  鈥?ks-admin-session (Max-Age=0)
  鈥?ks-auth (Max-Age=0)
```

### 14.4 GitHub Token 绠＄悊

#### 14.4.1 Token 淇濆瓨娴佺▼

```
鐢ㄦ埛鍦?/keystatic/github-token 杈撳叆 PAT 鈫?鎻愪氦
  鈹?
  鈹溾攢 1. POST /api/admin/save-token { token }
  鈹?    Worker 楠岃瘉鏍煎紡 (ghp_ 鎴?github_pat_ 寮€澶?
  鈹?    Worker 璁剧疆 cookie: ks-gh-token={encodeURIComponent(token)}
  鈹?    杩斿洖 { success: true }
  鈹?
  鈹溾攢 2. 鍓嶇 JS 棰濆淇濆瓨鍒?localStorage: ks-gh-token
  鈹?
  鈹斺攢 3. 椤甸潰閲嶅畾鍚戝埌 /keystatic
```

#### 14.4.2 Token 璇诲彇娴佺▼

```
Astro 椤甸潰 frontmatter 鈫?readTokenFromCookies(Astro.cookies)
  鈹?
  鈹溾攢 1. 璇诲彇 cookie 'ks-gh-token' 鐨勫師濮嬪€?
  鈹溾攢 2. 灏濊瘯 AES-256-GCM 瑙ｅ瘑锛堝吋瀹?Node.js saveTokenCookie 鍔犲瘑鏍煎紡锛?
  鈹溾攢 3. 瑙ｅ瘑澶辫触 鈫?灏濊瘯 decodeURIComponent锛堝吋瀹?Worker 鏄庢枃鏍煎紡锛?
  鈹斺攢 4. 杩斿洖 token 瀛楃涓?鎴?null
```

#### 14.4.3 涓ゅ瀛樺偍璺緞

| 璺緞 | 璁剧疆鏂瑰紡 | 鏍煎紡 | 閫傜敤鍦烘櫙 |
|------|---------|------|---------|
| **Worker API** | `POST /api/admin/save-token` | 鏄庢枃 + `encodeURIComponent` | 娴忚鍣ㄧ鎿嶄綔 |
| **Node.js** | `saveTokenCookie()` in `token-store.ts` | AES-256-GCM 鍔犲瘑 + base64url | 鏋勫缓鏃?SSR锛堟湭浣跨敤锛?|

> 鈿狅笍 `readTokenFromCookies()` 蹇呴』鍏煎涓ょ鏍煎紡銆?

### 14.5 GitHub API 璋冪敤

`GitHubClient` (`src/lib/github.ts`) 灏佽鎵€鏈?GitHub REST API 璋冪敤锛?

```
GitHubClient(token)
  鈹?
  鈹溾攢 verifyToken()        鈫?GET /user               (楠岃瘉 token 鏈夋晥鎬?
  鈹溾攢 listFiles(dirPath)   鈫?GET /repos/*/contents/*  (鍒楀嚭鐩綍鏂囦欢)
  鈹溾攢 readFile(filePath)   鈫?GET /repos/*/contents/*  (璇诲彇鏂囦欢鍐呭)
  鈹溾攢 createFile(...)      鈫?PUT /repos/*/contents/*  (鍒涘缓鏂囦欢)
  鈹溾攢 updateFile(...)      鈫?PUT /repos/*/contents/*  (鏇存柊鏂囦欢)
  鈹溾攢 deleteFile(...)      鈫?DELETE /repos/*/contents/* (鍒犻櫎鏂囦欢)
  鈹斺攢 getRecursiveTree()   鈫?GET /repos/*/git/trees/* (鑾峰彇瀹屾暣鐩綍鏍?
```

**宸ヤ綔鍘熺悊**:
- 姣忎釜 admin 椤甸潰鍦?frontmatter 涓垱寤?`GitHubClient(token)` 瀹炰緥
- 椤甸潰浣跨敤 `readFile()` 浠?GitHub 鍔犺浇褰撳墠鍐呭
- 鐢ㄦ埛缂栬緫鍚庯紝琛ㄥ崟閫氳繃 fetch POST 鍒?Worker `/api/admin/update`
- Worker 浣跨敤 `GITHUB_TOKEN` (鐜鍙橀噺) 灏嗘洿鏂版彁浜ゅ埌 GitHub

### 14.6 椤甸潰缁撴瀯

#### 14.6.1 Admin 椤甸潰鍒楄〃 (47 涓〉闈?

```
src/pages/keystatic/
鈹溾攢鈹€ index.astro                     # Dashboard
鈹溾攢鈹€ about.astro                     # About 椤甸潰鍐呭 (22 璇█)
鈹溾攢鈹€ branding.astro                  # 鍝佺墝/Logo/鑱旂郴淇℃伅 (22 璇█)
鈹溾攢鈹€ categories.astro                # 浜у搧鍒嗙被 (22 璇█)
鈹溾攢鈹€ contact-form-text.astro         # 鑱旂郴琛ㄥ崟鏂囧瓧閰嶇疆 (22 璇█)
鈹溾攢鈹€ contact-submissions.astro       # 鑱旂郴琛ㄥ崟鎻愪氦璁板綍
鈹溾攢鈹€ content-v2.astro                # 鍐呭 V2 搴?(22 璇█)
鈹溾攢鈹€ countries.astro                 # 鍥藉/鍦板尯閰嶇疆 (22 璇█)
鈹溾攢鈹€ evidence.astro                  # 妗堜緥璇佹嵁 (22 璇█)
鈹溾攢鈹€ faqs.astro                      # FAQ (22 璇█)
鈹溾攢鈹€ github-token.astro              # GitHub Token 绠＄悊
鈹溾攢鈹€ hero-images.astro               # Hero 鍥剧墖 (22 璇█)
鈹溾攢鈹€ languages.astro                 # 璇█绠＄悊
鈹溾攢鈹€ learning-center.astro           # 瀛︿範涓績 (22 璇█)
鈹溾攢鈹€ link-refactor.astro             # 閾炬帴閲嶆瀯宸ュ叿
鈹溾攢鈹€ navigation.astro                # 瀵艰埅绠＄悊 (22 璇█)
鈹溾攢鈹€ product-visuals.astro           # 浜у搧鍥剧墖鏄犲皠 (22 璇█)
鈹溾攢鈹€ proof-points.astro              # 钀ラ攢鏁版嵁鐐?(22 璇█)
鈹溾攢鈹€ research.astro                  # 鐮旂┒鍐呭 (22 璇█)
鈹溾攢鈹€ seo.astro                       # SEO 璁剧疆 (22 璇█)
鈹溾攢鈹€ tech-cards.astro                # 鎶€鏈崱鐗?(22 璇█)
鈹溾攢鈹€ testimonials.astro              # 瀹㈡埛鎺ㄨ崘 (22 璇█)
鈹溾攢鈹€ top-guides.astro                # 椤堕儴鎸囧崡 (22 璇█)
鈹溾攢鈹€ trust-badges.astro              # 淇′换寰界珷 (22 璇█)
鈹溾攢鈹€ trust-bar.astro                 # 淇′换鏍?(22 璇█)
鈹溾攢鈹€ use-cases.astro                 # 鐢ㄤ緥 (22 璇█)
鈹溾攢鈹€ validate-links.astro            # 閾炬帴楠岃瘉
鈹?
鈹溾攢鈹€ posts/
鈹?  鈹溾攢鈹€ index.astro                 # 鏂囩珷鍒楄〃
鈹?  鈹溾攢鈹€ new.astro                   # 鏂板缓鏂囩珷
鈹?  鈹斺攢鈹€ [slug].astro                # 缂栬緫鏂囩珷 (22 璇█)
鈹溾攢鈹€ products/
鈹?  鈹溾攢鈹€ index.astro                 # 浜у搧鍒楄〃
鈹?  鈹溾攢鈹€ new.astro                   # 鏂板缓浜у搧
鈹?  鈹斺攢鈹€ [slug].astro                # 缂栬緫浜у搧 (22 璇█, ProductForm 鍐呭祵璇█閫夋嫨)
鈹溾攢鈹€ pages/
鈹?  鈹溾攢鈹€ index.astro                 # 椤甸潰鍒楄〃
鈹?  鈹溾攢鈹€ new.astro                   # 鏂板缓椤甸潰
鈹?  鈹斺攢鈹€ [slug].astro                # 缂栬緫椤甸潰 (22 璇█)
鈹溾攢鈹€ case-use/
鈹?  鈹溾攢鈹€ index.astro                 # 妗堜緥鍒楄〃
鈹?  鈹溾攢鈹€ new.astro                   # 鏂板缓妗堜緥
鈹?  鈹斺攢鈹€ [slug].astro                # 缂栬緫妗堜緥 (22 璇█)
鈹溾攢鈹€ technology/
鈹?  鈹溾攢鈹€ index.astro                 # 鎶€鏈枃绔犲垪琛?
鈹?  鈹溾攢鈹€ new.astro                   # 鏂板缓鎶€鏈枃绔?
鈹?  鈹斺攢鈹€ [slug].astro                # 缂栬緫鎶€鏈枃绔?(22 璇█)
```

> 鏍囪 `(22 璇█)` 鐨勯〉闈㈡敮鎸佸叏 22 绉嶈瑷€鐨勭炕璇戠紪杈戙€傝瑷€閫氳繃 `?locale=` 鏌ヨ鍙傛暟鍒囨崲銆?

#### 14.6.2 i18n-admin 宸ュ叿搴?

`src/lib/i18n-admin.ts` 鎻愪緵澶氳瑷€缂栬緫鎵€闇€鐨勫父閲忓拰璺緞宸ュ叿锛?

```typescript
export const ADMIN_LOCALES: Record<string, string> = {
  en: 'English', zh: '涓枃', fr: 'Fran莽ais', de: 'Deutsch',
  es: 'Espa帽ol', pt: 'Portugu锚s', ar: '丕賱毓乇亘賷丞', it: 'Italiano',
  ja: '鏃ユ湰瑾?, ko: '頃滉淡鞏?, ru: '袪褍褋褋泻懈泄', pl: 'Polski',
  nl: 'Nederlands', sv: 'Svenska', no: 'Norsk', el: '螘位位畏谓喂魏维',
  tr: 'T眉rk莽e', fi: 'Suomi', cs: '膶e拧tina', da: 'Dansk', ro: 'Rom芒n膬', th: '喙勦笚喔?,
};
export const ADMIN_LOCALE_CODES = Object.keys(ADMIN_LOCALES);
export function siteFileForLocale(basePath: string, locale: string): string
export function pageFileForLocale(slug: string, file: string, locale: string): string
export function contentFileForLocale(basePath: string, locale: string): string
```

**鏂囦欢鍛藉悕绾﹀畾锛?*
- 绔欑偣鍐呭锛歚about.yaml` 鈫?`about.zh.yaml` (鍚庣紑寮?
- 闆嗗悎鏉＄洰锛歚foo.md` 鈫?`foo.zh.md` (鍚庣紑寮?
- 闈欐€侀〉闈細`privacy.yaml` 鈫?`zh/privacy.yaml` (瀛愮洰褰曞紡)

#### 14.6.3 姣忎釜椤甸潰鐨勬爣鍑嗙粨鏋?(22 璇█鐗?

```astro
---
// 1. import
import AdminLayout from '~/layouts/AdminLayout.astro';
import { ADMIN_LOCALES, ADMIN_LOCALE_CODES, siteFileForLocale } from '~/lib/i18n-admin';
import { verifySessionToken } from '~/lib/auth';
import { readTokenFromCookies } from '~/lib/token-store';
import { GitHubClient, getRepoInfo } from '~/lib/github';
export const prerender = true;

// 2. 鍖哄煙璁剧疆妫€娴?
const locale = (Astro.url.searchParams.get('locale') || 'en').toLowerCase();
const isDefault = locale === 'en';
const file = siteFileForLocale('src/data/site/about.yaml', locale);

// 3. 鍔犺浇鍐呭锛堝惈鑻辨枃鍥為€€锛?
const session = Astro.cookies.get('ks-admin-session')?.value;
const verified = session ? verifySessionToken(session) : null;
const token = readTokenFromCookies(Astro.cookies);
let data = {};
let sha = '';
if (token) {
  try {
    const client = new GitHubClient(token);
    let f;
    try { f = await client.readFile(file, 'draft'); }
    catch { try { f = await client.readFile(file); }
    catch { if (!isDefault) { f = await client.readFile('src/data/site/about.yaml'); } } }
    if (f) { data = load(f.content); sha = f.sha; }
  } catch (err) { loadError = err.message; }
}
---

<AdminLayout title="..." active="...">
  <!-- 4. 璇█鍒囨崲鍣?+ 鏂囦欢璺緞 -->
  <div class="flex items-center justify-between gap-4 flex-wrap">
    <h1 class="text-2xl font-semibold">...</h1>
    <select id="locale-select">
      {ADMIN_LOCALE_CODES.map((l) => (
        <option value={l} selected={l === locale}>{ADMIN_LOCALES[l]}</option>
      ))}
    </select>
  </div>

  <!-- 5. 缂栬緫琛ㄥ崟 -->
  <form data-locale={locale}>...</form>

  <script is:inline>
    // 6. 璇█鍒囨崲瀵艰埅
    document.getElementById('locale-select')?.addEventListener('change', function() {
      var loc = this.value;
      var base = window.location.pathname;
      window.location.href = loc === 'en' ? base : base + '?locale=' + loc;
    });
    // 7. 琛ㄥ崟鎻愪氦閫昏緫
  </script>
</AdminLayout>
```

> 鍖哄煙璁剧疆鏂囦欢鍔犺浇浼樺厛绾э細`draft` 鍒嗘敮 鈫?`main` 鍒嗘敮 鈫?鑻辨枃婧愭枃浠讹紙浠呴潪鑻辨枃鍖哄煙璁剧疆鍥為€€锛?

### 14.7 Worker API 绔偣鎬昏

| 绔偣 | 鏂规硶 | 璁よ瘉 | 鐢ㄩ€?|
|------|------|------|------|
| `/api/auth/login` | POST | 鏃狅紙璐﹀彿+瀵嗙爜锛?| 鐧诲綍 |
| `/api/auth/logout` | GET | 鏃?| 鐧诲嚭 |
| `/api/auth/change-password` | POST | Bearer | 鏀瑰瘑锛堣繑鍥為敊璇細闇€ wrangler secret锛?|
| `/api/admin/list` | GET | Bearer/Cookie | 鍒楀嚭鐩綍鏂囦欢 |
| `/api/admin/read` | GET | Bearer/Cookie | 璇诲彇鏂囦欢 |
| `/api/admin/create` | POST | Bearer/Cookie | 鍒涘缓鏂囦欢 |
| `/api/admin/update` | POST | Bearer/Cookie | 鏇存柊鏂囦欢锛堟敮鎸?YAML 鏍煎紡锛?|
| `/api/admin/delete` | POST | Bearer/Cookie | 鍒犻櫎鏂囦欢 |
| `/api/admin/publish` | POST | Bearer/Cookie | 鍚堝苟 draft 鈫?main |
| `/api/admin/save-token` | POST | Bearer/Cookie | 淇濆瓨 GitHub Token 鍒?cookie |

### 14.8 Cookie 娓呭崟

| Cookie 鍚?| HttpOnly | 鐢ㄩ€?| 璁剧疆鑰?| 杩囨湡 |
|-----------|----------|------|--------|------|
| `ks-admin-session` | 鉁?鏄?| HMAC 浼氳瘽 token (Worker API 璁よ瘉) | Worker | 24h |
| `ks-auth` | 鉂?鍚?| 鍓嶇鍙鐨勭櫥褰曟爣璁?| Worker | 24h |
| `ks-gh-token` | 鉂?鍚?| GitHub Personal Access Token | Worker | 30澶?|

### 14.9 鍏抽敭渚濊禆鍏崇郴

```
src/lib/token-store.ts
  鈹溾攢 node:crypto (createHash, createCipheriv, createDecipheriv) 鈥?AES-256-GCM
  鈹溾攢 SESSION_SECRET / KEYSTATIC_SECRET 鈥?鍔犲瘑瀵嗛挜
  鈹斺攢 琚墍鏈?keystatic/*.astro 椤甸潰寮曠敤

src/lib/auth.ts
  鈹溾攢 createSessionToken() 鈥?HMAC-SHA256 绛惧悕
  鈹溾攢 verifySessionToken() 鈥?HMAC 楠岃瘉
  鈹斺攢 涓?Worker (workers/admin-worker/index.ts) 鍏变韩閫昏緫

workers/admin-worker/index.ts
  鈹溾攢 authenticate() 鈥?Bearer JWT 鈫?Cookie HMAC
  鈹溾攢 createSessionToken() 鈥?涓?src/lib/auth.ts 鐩稿悓鐨?HMAC 閫昏緫
  鈹溾攢 verifySessionCookie() 鈥?Web Crypto API 瀹炵幇
  鈹斺攢 handleAdmin() 鈥?鎵€鏈?/api/admin/* 璺敱

src/layouts/AdminLayout.astro
  鈹溾攢 渚ц竟鏍忓鑸?(27 涓叆鍙?
  鈹溾攢 ks-auth client-side 妫€鏌?
  鈹溾攢 鏆楁ā寮?/ 绉诲姩绔敮鎸?
  鈹斺攢 Toast 閫氱煡绯荤粺
```

### 14.10 鍏紬绔欑偣鍖哄煙璁剧疆鍐呭鍔犺浇

鍏紬绔欑偣鐨勯潪鑻辨枃椤甸潰锛坄[lang]/*.astro`锛夐€氳繃鏋勫缓鏃剁敓鎴愮殑 JSON 鍔犺浇鍖哄煙璁剧疆鎰熺煡鐨勫唴瀹癸細

**椤甸潰鍐呭**锛坄src/data/pages/{locale}/{page}.yaml`锛夛細
- 鏋勫缓鏃剁敱 `scripts/generate-data-json.mjs` 澶勭悊 鈫?`page-content.json`
- 姣忛〉瀵煎叆 `generated/pages/{name}.ts` 鈫?`getPageContent(lang, 'page')`
- 鍖哄煙璁剧疆鏂囦欢涓嶅瓨鍦ㄦ椂璺宠繃锛堜笉闄嶇骇鍒拌嫳鏂囷級

**绔欑偣鍐呭**锛坄src/data/site/*.yaml`锛夛細
- 鏋勫缓鏃跺悓鏍风敱 `generate-data-json.mjs` 澶勭悊锛岄敭涓?`{lang}/site-{name}`
- 椤甸潰閫氳繃 `import { pageContentData } from '~/i18n/generated/data'` 璁块棶
- 璁块棶妯″紡锛歚pageContentData[\`${lang}/site-about\`] || pageContentData['en/site-about'] || {}`
- 鍖哄煙璁剧疆鏂囦欢涓嶅瓨鍦ㄦ椂鑷姩闄嶇骇鍒拌嫳鏂?

**鏋勫缓绠＄嚎锛?*
```
generate-data-json.mjs
  鈹溾攢 generateI18nConfig()   鈫?i18n-config.json (UI 瀛楃涓? 22 璇█)
  鈹溾攢 generatePageContent()   鈫?page-content.json (椤甸潰 + 绔欑偣鍐呭)
  鈹?   鈹溾攢 src/data/pages/{locale}/{page}.yaml    鈫?{lang}/{page}
  鈹?   鈹斺攢 src/data/site/{name}.{locale}.yaml      鈫?{lang}/site-{name}
  鈹斺攢 writeDataTs()           鈫?data.ts
         鈫?
_gen-pages.cjs 鈫?generated/pages/{name}.ts (姣忛〉涓€涓垎鐗?
_patch-pages.cjs 鈫?鑷姩娉ㄥ叆 import/setter 鍒?[lang]/ 椤甸潰
```

**鍥為€€琛屼负锛?* 褰?`{lang}/site-about` 鍦?page-content.json 涓笉瀛樺湪鏃讹細
1. 妫€鏌?`en/site-about`锛堣嫳鏂囨簮鏂囦欢锛?
2. 濡傛灉涔熶笉瀛樺湪锛岃繑鍥?`{}`锛堢┖瀵硅薄锛?
