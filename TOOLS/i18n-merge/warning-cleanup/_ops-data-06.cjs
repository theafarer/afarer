// Shard 06 — it factory ''-scars + misc leaks/typos (28 ops)
// it: literal double apostrophes in unquoted values; misc: ja listing leak, ko brand/arrow, th BSCI,
// custom.yaml sqm/?²/Двести/н.э. highlights + dbl-spaces, b2b_moq "SUP/SUP" garbage x5
module.exports = [
  // === it factory: '' → ' (8 spots) ===
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "all''imbarcazione finita",
    rep: "all'imbarcazione finita",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "all''imbarcazione pronta",
    rep: "all'imbarcazione pronta",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "dall''arrivo",
    rep: "dall'arrivo",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "L''annidamento",
    rep: "L'annidamento",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "dell''ispezione",
    rep: "dell'ispezione",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "dall''ordine",
    rep: "dall'ordine",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "dell''arrivo",
    rep: "dell'arrivo",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "d''appalto",
    rep: "d'appalto",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "d''ordine (MOQ)",
    rep: "d'ordine (MOQ)",
  },
  // === misc in-plan leaks/typos ===
  // ja: EN-leak "listing" in OEM case result
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: 'で listing に成功',
    rep: 'での取扱開始に成功',
  },
  // ko: trailing em-dash should be arrow (EN: "Full OEM services →")
  {
    f: 'src/data/pages/ko/factory.yaml',
    find: '완전한 OEM 서비스 —',
    rep: '완전한 OEM 서비스 →',
  },
  // ko: brand typo "afar" → "afarer"
  {
    f: 'src/data/pages/ko/factory.yaml',
    find: 'afar 공장을',
    rep: 'afarer 공장을',
  },
  // th: BSCI missing C
  {
    f: 'src/data/pages/th/factory.yaml',
    find: 'การตรวจสอบ BSI ครบชุด',
    rep: 'การตรวจสอบ BSCI ครบชุด',
  },
  // EN custom: sqm → m² (text + highlight) + dbl-space
  {
    f: 'src/data/pages/custom.yaml',
    find: 'text: 12,000 sqm integrated',
    rep: 'text: 12,000 m² integrated',
  },
  {
    f: 'src/data/pages/custom.yaml',
    find: 'highlight: 12,000 sqm',
    rep: 'highlight: 12,000 m²',
  },
  {
    f: 'src/data/pages/custom.yaml',
    find: 'enters our  production line',
    rep: 'enters our production line',
  },
  // cs custom: EN-leak highlight + dbl-space
  {
    f: 'src/data/pages/cs/custom.yaml',
    find: 'highlight: 12,000 sqm',
    rep: 'highlight: 12 000 m²',
  },
  {
    f: 'src/data/pages/cs/custom.yaml',
    find: 'naší  výrobní linky',
    rep: 'naší výrobní linky',
  },
  // da custom: EN-leak highlight + dbl-space
  {
    f: 'src/data/pages/da/custom.yaml',
    find: 'highlight: 12,000 sqm',
    rep: 'highlight: 12.000 kvm',
  },
  {
    f: 'src/data/pages/da/custom.yaml',
    find: 'vores  produktionslinje',
    rep: 'vores produktionslinje',
  },
  // ar custom: mojibake ?² → م²
  {
    f: 'src/data/pages/ar/custom.yaml',
    find: 'highlight: 12,000 ?²',
    rep: 'highlight: 12,000 م²',
  },
  // ru custom: reversed mistranslations (Двести→200+, н. э.→CE)
  {
    f: 'src/data/pages/ru/custom.yaml',
    find: 'highlight: Двести',
    rep: 'highlight: 200+',
  },
  {
    f: 'src/data/pages/ru/custom.yaml',
    find: 'highlight: н. э.',
    rep: 'highlight: CE',
  },
  // b2b_moq: "SUP/SUP" leftover from category rename (46c0e86e)
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: '(SUP/SUP/',
    rep: '(SUP/',
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '(SUP/SUP/',
    rep: '(SUP/',
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '(SUP/SUP/',
    rep: '(SUP/',
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '(SUP/SUP/',
    rep: '(SUP/',
  },
  {
    f: 'src/data/pages/tr/factory.yaml',
    find: '(SUP/SUP/',
    rep: '(SUP/',
  },
];
