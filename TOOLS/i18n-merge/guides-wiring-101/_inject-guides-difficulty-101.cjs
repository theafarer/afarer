const fs = require('fs');

const P = 'src/data/site/i18n-config.json';
const j = JSON.parse(fs.readFileSync(P, 'utf8'));

const KEYS = {
  'guides.difficulty.beginner': {
    en: 'Beginner',
    de: 'Anfänger',
    pt: 'Iniciante',
    fr: 'Débutant',
    es: 'Principiante',
    it: 'Principiante',
    ja: '初心者',
    ko: '초보자',
    ru: 'Начинающий',
    pl: 'Początkujący',
    ar: 'مبتدئ',
    nl: 'Beginner',
    sv: 'Nybörjare',
    no: 'Nybegynner',
    el: 'Αρχάριος',
    tr: 'Başlangıç',
    fi: 'Aloittelija',
    cs: 'Začátečník',
    da: 'Begynder',
    ro: 'Începător',
    th: 'มือใหม่',
  },
  'guides.difficulty.intermediate': {
    en: 'Intermediate',
    de: 'Fortgeschritten',
    pt: 'Intermediário',
    fr: 'Intermédiaire',
    es: 'Intermedio',
    it: 'Intermedio',
    ja: '中級者',
    ko: '중급자',
    ru: 'Средний',
    pl: 'Średniozaawansowany',
    ar: 'متوسط',
    nl: 'Gevorderd',
    sv: 'Medel',
    no: 'Middels',
    el: 'Μεσαίο επίπεδο',
    tr: 'Orta seviye',
    fi: 'Keskitaso',
    cs: 'Středně pokročilý',
    da: 'Øvet',
    ro: 'Intermediar',
    th: 'ระดับกลาง',
  },
  'guides.difficulty.advanced': {
    en: 'Advanced',
    de: 'Experte',
    pt: 'Avançado',
    fr: 'Avancé',
    es: 'Avanzado',
    it: 'Avanzato',
    ja: '上級者',
    ko: '상급자',
    ru: 'Продвинутый',
    pl: 'Zaawansowany',
    ar: 'متقدم',
    nl: 'Expert',
    sv: 'Avancerad',
    no: 'Avansert',
    el: 'Προχωρημένος',
    tr: 'İleri seviye',
    fi: 'Edistynyt',
    cs: 'Pokročilý',
    da: 'Avanceret',
    ro: 'Avansat',
    th: 'ขั้นสูง',
  },
  'guides.category.comparison': {
    en: 'Comparisons',
    de: 'Vergleiche',
    pt: 'Comparativos',
    fr: 'Comparatifs',
    es: 'Comparativas',
    it: 'Confronti',
    ja: '比較',
    ko: '비교',
    ru: 'Сравнения',
    pl: 'Porównania',
    ar: 'المقارنات',
    nl: 'Vergelijkingen',
    sv: 'Jämförelser',
    no: 'Sammenligninger',
    el: 'Συγκρίσεις',
    tr: 'Karşılaştırmalar',
    fi: 'Vertailut',
    cs: 'Porovnání',
    da: 'Sammenligninger',
    ro: 'Comparații',
    th: 'การเปรียบเทียบ',
  },
};

let injected = 0;
let skipped = 0;
for (const key of Object.keys(KEYS)) {
  for (const loc of Object.keys(KEYS[key])) {
    if (j[loc] && j[loc][key] !== undefined) {
      console.log('SKIP ' + loc + '.' + key + ' (exists)');
      skipped++;
      continue;
    }
    j[loc][key] = KEYS[key][loc];
    injected++;
  }
}
fs.writeFileSync(P, JSON.stringify(j, null, 2) + '\n', 'utf8');
console.log('injected=' + injected + ' skipped=' + skipped);
