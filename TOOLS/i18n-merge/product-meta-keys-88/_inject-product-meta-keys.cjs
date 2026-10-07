const fs = require('fs');

const P = 'src/data/site/i18n-config.json';
const j = JSON.parse(fs.readFileSync(P, 'utf8'));

const KEYS = {
  'products.metaTitle': {
    en: 'Inflatable Boat & SUP Products',
    ar: 'قوارب وألواح SUP قابلة للنفخ',
    cs: 'Nafukovací čluny a SUP prkna',
    da: 'Oppustelige både og SUP-boards',
    de: 'Aufblasbare Boote & SUP-Boards',
    el: 'Φουσκωτές Βάρκες & SUP',
    es: 'Botes inflables y tablas de SUP',
    fi: 'Ilmatäytettävät veneet ja SUP-laudat',
    fr: 'Bateaux gonflables et planches de SUP',
    it: 'Barche gonfiabili e tavole SUP',
    ja: 'インフレータブルボート＆SUPボード製品',
    ko: '인플래터블 보트 & SUP 보드 제품',
    nl: 'Opblaasbare boten & SUP-boards',
    no: 'Oppustelige båter og SUP-brett',
    pl: 'Łodzie dmuchane i deski SUP',
    pt: 'Botes infláveis e pranchas de SUP',
    ro: 'Bărci gonflabile și plăci SUP',
    ru: 'Надувные лодки и SUP-доски',
    sv: 'Uppblåsbara båtar och SUP-brädor',
    th: 'เรือเป่าลมและบอร์ด SUP',
    tr: 'Şişirme Bot ve SUP Tahtaları',
  },
  'products.metaDesc': {
    en: 'Browse the full Afarer product catalog — inflatable SUP boards, kayaks, dinghies, RIBs, and accessories. Country distribution and co-branding for qualified water-sports partners.',
    ar: 'تصفح كتالوج منتجات Afarer الكامل — ألواح SUP قابلة للنفخ، قوارب كاياك، قوارب صغيرة، وقوارب RIB، والملحقات. توزيع حصري حسب الدولة وعلامات مشتركة للشركاء المؤهلين في الرياضات المائية.',
    cs: 'Procházejte kompletní katalog Afarer — nafukovací SUP prkna, kajaky, čluny, RIB a příslušenství. Exkluzivní distribuce v zemích a ko-branding pro kvalifikované partnery ve vodních sportech.',
    da: 'Gennemse hele Afarer-produktkataloget — oppustelige SUP-boards, kajakker, joller, RIB-både og tilbehør. Landedistribution og co-branding til kvalificerede vandsportspartnere.',
    de: 'Entdecken Sie den gesamten Afarer-Produktkatalog — aufblasbare SUP-Boards, Kajaks, Beiboote, RIBs und Zubehör. Ländervetrtriebspartnerschaften und Co-Branding für qualifizierte Wassersport-Partner.',
    el: 'Εξερευνήστε πλήρη κατάλογο προϊόντων Afarer — φουσκωτές SUP, καγιάκ, σκάφη, RIB και αξεσουάρ. Ανά χώρα διανομή και συν-πνευματική μάρκα για καταρτισμένους συνεργάτες υδροαθλητισμού.',
    es: 'Explora el catálogo completo de productos Afarer — tablas de SUP inflables, kayaks, botes neumáticos, RIB y accesorios. Distribución por país y co-branding para socios cualificados de deportes acuáticos.',
    fi: 'Selaa Afarerin täydellinen tuotevalikoima — ilmatäytettävät SUP-laudat, kajakit, veneet, RIB-veneet ja tarvikkeet. Maakohtainen jakelu ja yhteisbrändäys vaatimusten täyttäville vesiturvallisuuskumppaneille.',
    fr: 'Parcourez le catalogue complet Afarer — planches de SUP gonflables, kayaks, annexes, RIB et accessoires. Distribution exclusive par pays et co-branding pour les partenaires nautiques qualifiés.',
    it: 'Sfoglia il catalogo completo Afarer — tavole SUP gonfiabili, kayak, gommoni, RIB e accessori. Distribuzione per paese e co-branding per partner qualificati di sport acquatici.',
    ja: 'Afarerの製品カタログ全商品 — インフレータブルSUPボード、カヤック、ディンギー、RIB、アクセサリー。認定パートナー向けの各国独占販売とコーブランディング。',
    ko: 'Afarer 전체 제품 카탈로그를 둘러보세요 — 인플래터블 SUP 보드, 카약, 딩기, RIB, 액세서리. 공인 워터스포츠 파트너를 위한 국가별 독점 유통 및 공동 브랜딩.',
    nl: "Bekijk de volledige Afarer-productcatalogus — opblaasbare SUP-boards, kajaks, bijboten, RIB's en accessoires. Landendistributie en co-branding voor gekwalificeerde watersportpartners.",
    no: 'Utforsk hele Afarer-produktkatalogen — oppustelige SUP-brett, kajakker, joller, RIB-båter og tilbehør. Landfordeling og co-branding for kvalifiserte vannsportspartnere.',
    pl: 'Przeglądaj pełny katalog produktów Afarer — dmuchane deski SUP, kajaki, łodzie, RIB i akcesoria. Dystrybucja krajowa i ko-branding dla kwalifikowanych partnerów sportów wodnych.',
    pt: 'Explore o catálogo completo de produtos Afarer — pranchas de SUP infláveis, caiaques, botes, RIB e acessórios. Distribuição por país e co-branding para parceiros qualificados de esportes aquáticos.',
    ro: 'Răsfoiți catalogul complet de produse Afarer — plăci SUP gonflabile, caiace, bărci, RIB și accesorii. Distribuție pe țări și co-branding pentru parteneri calificați de sporturi nautice.',
    ru: 'Просмотрите полный каталог Afarer — надувные SUP-доски, каяки, лодки, RIB и аксессуары. Распределение по странам и совместные бренды для квалифицированных партнёров по водному спорту.',
    sv: 'Utforska Afarers fullständiga produktkatalog — uppblåsbara SUP-brädor, kajaker, jollar, RIB-båtar och tillbehör. Landsdistribution och varumärkespartnerskap för kvalificerade vattensportspartner.',
    th: 'สำรวจแคตตาล็อกผลิตภัณฑ์ Afarer ทั้งหมด — บอร์ด SUP แบบเป่าลม คายัค เรือท้องแบน RIB และอุปกรณ์เสริม การจัดจำหน่ายแบบผูกขาดรายประเทศและโคแบรนด์สำหรับพาร์ตเนอร์กีฬาทางน้ำที่ผ่านการรับรอง',
    tr: "Afarer ürün kataloğunun tamamını keşfedin — şişme SUP tahtaları, kayıklar, botlar, RIB'ler ve aksesuarlar. Nitelikli su sporları ortakları için ülke dağıtımı ve ortak markalaşma.",
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
