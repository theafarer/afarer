// shard 55 data — page-layer EN residue clearing, dict part (TECH.md L45):
//   1 new UI-dict key x21 locales:
//     b2bSolutionsMatrix.coreNeed — table header of the B2B client solutions matrix page
//     (b2b-solutions-matrix.astro renders EN literals with stray quotes 'Core Need'/'Solution';
//      the page is wired in the same shard to t('b2bSolutionsMatrix.coreNeed') and
//      t('home.useCases.solution') — the latter key already exists x21).
//   Grounding: "Core Need" = the primary customer-segment need each matrix row solves.
//   Per-locale terms follow each locale's business vocab already present in the dict
//   (Bedarf/потребность/behov/behoefte/tarve/potřeba/potrzeba/ihtiyaç/ανάγκη families).
module.exports = {
  LOCALES: [
    'en',
    'de',
    'pt',
    'fr',
    'es',
    'it',
    'ja',
    'ko',
    'ru',
    'pl',
    'ar',
    'nl',
    'sv',
    'no',
    'el',
    'tr',
    'fi',
    'cs',
    'da',
    'ro',
    'th',
  ],
  CORE_NEED: {
    en: 'Core Need',
    de: 'Kernbedarf',
    pt: 'Necessidade principal',
    fr: 'Besoin principal',
    es: 'Necesidad principal',
    it: 'Esigenza principale',
    ja: '核心ニーズ',
    ko: '핵심 니즈',
    ru: 'Ключевая потребность',
    pl: 'Kluczowa potrzeba',
    ar: 'الاحتياج الأساسي',
    nl: 'Kernbehoefte',
    sv: 'Kärnbehov',
    no: 'Kjernebehov',
    el: 'Βασική ανάγκη',
    tr: 'Temel ihtiyaç',
    fi: 'Ydintarve',
    cs: 'Klíčová potřeba',
    da: 'Kernebehov',
    ro: 'Nevoia principală',
    th: 'ความต้องการหลัก',
  },
};
