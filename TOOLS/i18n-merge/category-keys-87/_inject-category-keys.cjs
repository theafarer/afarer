const fs = require('fs');

const P = 'src/data/site/i18n-config.json';
const j = JSON.parse(fs.readFileSync(P, 'utf8'));

const KEYS = {
  'category.all': {
    en: 'All',
    ar: 'الكل',
    cs: 'Vše',
    da: 'Alle',
    de: 'Alle',
    el: 'Όλα',
    es: 'Todo',
    fi: 'Kaikki',
    fr: 'Tout',
    it: 'Tutto',
    ja: 'すべて',
    ko: '전체',
    nl: 'Alles',
    no: 'Alle',
    pl: 'Wszystko',
    pt: 'Tudo',
    ro: 'Toate',
    ru: 'Все',
    sv: 'Alla',
    th: 'ทั้งหมด',
    tr: 'Tümü',
  },
  'category.premium': {
    en: 'Premium',
    ar: 'فاخر',
    cs: 'Prémiové',
    da: 'Premium',
    de: 'Premium',
    el: 'Premium',
    es: 'Premium',
    fi: 'Premium',
    fr: 'Premium',
    it: 'Premium',
    ja: 'プレミアム',
    ko: '프리미엄',
    nl: 'Premium',
    no: 'Premium',
    pl: 'Premium',
    pt: 'Premium',
    ro: 'Premium',
    ru: 'Премиум',
    sv: 'Premium',
    th: 'พรีเมียม',
    tr: 'Premium',
  },
  'category.metaDesc': {
    en: 'Browse Afarer {category} products.',
    ar: 'تصفح منتجات Afarer {category}.',
    cs: 'Procházejte produkty Afarer {category}.',
    da: 'Gennemse Afarer {category}-produkter.',
    de: 'Entdecken Sie Afarer {category}-Produkte.',
    el: 'Εξερευνήστε τα προϊόντα Afarer {category}.',
    es: 'Explora los productos {category} de Afarer.',
    fi: 'Selaa Afarerin {category}-tuotteita.',
    fr: 'Parcourez les produits {category} Afarer.',
    it: 'Sfoglia i prodotti {category} Afarer.',
    ja: 'Afarerの{category}製品をご覧ください。',
    ko: 'Afarer {category} 제품을 둘러보세요.',
    nl: 'Bekijk Afarer {category}-producten.',
    no: 'Utforsk Afarer {category}-produkter.',
    pl: 'Przeglądaj produkty Afarer {category}.',
    pt: 'Explore os produtos {category} da Afarer.',
    ro: 'Răsfoiți produsele Afarer {category}.',
    ru: 'Просмотрите товары Afarer {category}.',
    sv: 'Utforska Afarers {category}-produkter.',
    th: 'สำรวจผลิตภัณฑ์ {category} ของ Afarer',
    tr: 'Afarer {category} ürünlerine göz atın.',
  },
};

const locales = Object.keys(j).filter((k) => typeof j[k] === 'object' && k !== 'en');
let added = 0;
for (const [key, vals] of Object.entries(KEYS)) {
  for (const l of locales) {
    if (j[l][key] === undefined) {
      j[l][key] = vals[l];
      added++;
    } else console.log('SKIP exists: ' + l + '.' + key);
  }
  if (j.en[key] === undefined) j.en[key] = vals.en;
}
fs.writeFileSync(P, JSON.stringify(j, null, 2) + '\n');
console.log('added ' + added + ' entries; locales: ' + locales.length);
