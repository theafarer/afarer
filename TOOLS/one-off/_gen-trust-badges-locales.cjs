/**
 * _gen-trust-badges-locales.cjs — trust-badges.yaml 18 locale 变体生成器（2026-10 分片 72）
 *
 * 背景：`src/data/site/trust-badges.yaml`（EN）+ 既有 .de/.fr 变体，其余 18 locale 无变体 →
 * TrustBadges.astro 在 locale 页渲染 EN badge 标题/描述。本脚本按内嵌翻译表生成 18 个
 * `trust-badges.{lang}.yaml`（结构/icon/variant 与 EN 完全一致，仅 title/desc 本地化）。
 *
 * 用法（仓库根）：
 *   node TOOLS/one-off/_gen-trust-badges-locales.cjs --dry    # 预览将写入的文件
 *   node TOOLS/one-off/_gen-trust-badges-locales.cjs --write  # 实际写入（幂等，覆盖同名）
 *
 * 约束：品牌 afarer 不译；后置属格位小写 afarer（ru/ar/nl/sv/pl/el/da/no/fi 连写按各语规则）；
 * 生成后必须 `npx prettier --check`（CI 四合一含 prettier）。
 */
const fs = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const OUT_DIR = path.resolve(__dirname, '../../src/data/site');

// 6 badges：icon / variant 与 EN 源文件一致，title/desc 按语言表提供
const ICONS = ['\\u2B50', '\\u2B50', '\\u2B50', '\\u2B50', '\\u2714', '\\u2714'];
const VARIANTS = ['cert', 'material', 'standard', 'warranty', 'cert', 'cert'];

const T = {
  da: [
    ['ISO- og CE-certificeret', 'Alle produkter opfylder internationale sikkerheds- og kvalitetsstandarder.'],
    ['Materialer i topklasse', 'Premium PVC- og Hypalon-stoffer testet for UV, slid og ekstreme temperaturer.'],
    ['Grundig testning', 'Hvert fartøj gennemgår tryk-, opdrifts- og belastningstests før forsendelse.'],
    ['2 års garanti', 'Alle afarer-produkter er dækket af en omfattende producentgaranti.'],
    ['BSCI-certificeret', 'Verificeret overensstemmelsesaudit — etisk produktion for europæiske købere.'],
    ['REACH-overholdelse', 'Alle materialer overholder EU’s kemikalie sikkerhedsregler.'],
  ],
  sv: [
    ['ISO- och CE-certifierad', 'Alla produkter uppfyller internationella standarder för säkerhet och kvalitet.'],
    ['Material i toppklass', 'Premium-PVC- och Hypalon-tyger testade för UV, nötning och extrema temperaturer.'],
    ['Noggranna tester', 'Varje farkost genomgår tryck-, flyt- och belastningstester före leverans.'],
    ['2 års garanti', 'Alla afarer-produkter täcks av en omfattande tillverkargaranti.'],
    ['BSCI-certifierad', 'Verifierad social revidering — etisk tillverkning för europeiska köpare.'],
    ['REACH-efterlevnad', 'Alla material följer EU:s regler för kemikaliesäkerhet.'],
  ],
  no: [
    ['ISO- og CE-sertifisert', 'Alle produkter oppfyller internasjonale standarder for sikkerhet og kvalitet.'],
    [
      'Materialer i toppklasse',
      'PVC- og Hypalon-stoff i premiumkvalitet, testet for UV, slitasje og ekstreme temperaturer.',
    ],
    ['Grundig testing', 'Hvert fartøy gjennomgår trykk-, oppdrifts- og belastningstester før forsendelse.'],
    ['2 års garanti', 'Alle afarer-produkter dekkes av en omfattende produsentgaranti.'],
    ['BSCI-sertifisert', 'Verifisert samsvarsrevisjon — etisk produksjon for europeiske kjøpere.'],
    ['REACH-samsvar', 'Alle materialer følger EUs regler for kjemikalsikkerhet.'],
  ],
  nl: [
    ['ISO- en CE-gecertificeerd', 'Elk product voldoet aan internationale veiligheids- en kwaliteitsnormen.'],
    ['Materiaalexcellentie', 'Premium PVC- en Hypalon-doek, getest op UV, slijtage en extreme temperaturen.'],
    ['Streng testen', 'Elk vaartuig ondergaat druk-, drijf- en belastingstests vóór verzending.'],
    ['2 jaar garantie', 'Alle afarer-producten worden gedekt door een uitgebreide fabrikantgarantie.'],
    ['BSCI-gecertificeerd', 'Geverifieerde sociale compliance-audit — ethische productie voor Europese kopers.'],
    ['REACH-conform', 'Alle materialen voldoen aan de EU-regelgeving voor chemische veiligheid.'],
  ],
  es: [
    ['Certificación ISO y CE', 'Cada producto cumple las normas internacionales de seguridad y calidad.'],
    [
      'Excelencia en materiales',
      'Tejidos premium de PVC y Hypalon probados contra UV, abrasión y temperaturas extremas.',
    ],
    ['Pruebas rigurosas', 'Cada embarcación se somete a pruebas de presión, flotabilidad y carga antes del envío.'],
    ['Garantía de 2 años', 'Todos los productos afarer están respaldados por una garantía completa del fabricante.'],
    [
      'Certificación BSCI',
      'Auditoría de cumplimiento social verificada — fabricación ética para compradores europeos.',
    ],
    ['Cumplimiento REACH', 'Todos los materiales cumplen la normativa de la UE sobre seguridad química.'],
  ],
  pt: [
    ['Certificação ISO e CE', 'Cada produto cumpre as normas internacionais de segurança e qualidade.'],
    [
      'Excelência em materiais',
      'Tecidos premium de PVC e Hypalon testados quanto a UV, abrasão e temperaturas extremas.',
    ],
    ['Testes rigorosos', 'Cada embarcação é submetida a testes de pressão, flutuação e carga antes do envio.'],
    ['Garantia de 2 anos', 'Todos os produtos afarer são cobertos por uma garantia abrangente do fabricante.'],
    ['Certificação BSCI', 'Auditoria de conformidade social verificada — fabricação ética para compradores europeus.'],
    ['Conformidade REACH', 'Todos os materiais cumprem os regulamentos da UE sobre segurança química.'],
  ],
  it: [
    ['Certificazione ISO e CE', 'Ogni prodotto rispetta gli standard internazionali di sicurezza e qualità.'],
    [
      'Eccellenza dei materiali',
      'Tessuti in PVC e Hypalon di livello premium testati per UV, abrasione e temperature estreme.',
    ],
    [
      'Test rigorosi',
      'Ogni imbarcazione è sottoposta a test di pressione, galleggiabilità e carico prima della spedizione.',
    ],
    ['Garanzia di 2 anni', 'Tutti i prodotti afarer sono coperti da una garanzia completa del produttore.'],
    ['Certificazione BSCI', 'Audit di conformità sociale verificato — produzione etica per gli acquirenti europei.'],
    ['Conformità REACH', 'Tutti i materiali rispettano i regolamenti UE sulla sicurezza chimica.'],
  ],
  pl: [
    ['Certyfikacja ISO i CE', 'Każdy produkt spełnia międzynarodowe normy bezpieczeństwa i jakości.'],
    [
      'Doskonałość materiałowa',
      'Premium tkaniny PVC i Hypalon testowane pod kątem UV, ścierania i ekstremalnych temperatur.',
    ],
    ['Rygorystyczne testy', 'Każda jednostka przechodzi testy ciśnienia, wyporności i obciążenia przed wysyłką.'],
    ['2 lata gwarancji', 'Wszystkie produkty afarer objęte są kompleksową gwarancją producenta.'],
    ['Certyfikacja BSCI', 'Zweryfikowany audyt zgodności społecznej — etyczna produkcja dla europejskich nabywców.'],
    ['Zgodność z REACH', 'Wszystkie materiały są zgodne z unijnymi przepisami o bezpieczeństwie chemicznym.'],
  ],
  cs: [
    ['Certifikace ISO a CE', 'Každý produkt splňuje mezinárodní normy bezpečnosti a kvality.'],
    ['Excelence materiálů', 'Prémiové látky PVC a Hypalon testované na UV, oděr a extrémní teploty.'],
    ['Přísné testování', 'Každé plavidlo projde před odesláním testy tlaku, vztlaku a zatížení.'],
    ['2letá záruka', 'Všechny produkty afarer jsou kryty komplexní zárukou výrobce.'],
    ['Certifikace BSCI', 'Ověřený audit sociální shody — etická výroba pro evropské kupující.'],
    ['Shoda s REACH', 'Všechny materiály splňují nařízení EU o chemické bezpečnosti.'],
  ],
  ro: [
    ['Certificare ISO și CE', 'Fiecare produs respectă standardele internaționale de siguranță și calitate.'],
    ['Excelența materialelor', 'Țesături premium din PVC și Hypalon, testate la UV, abraziune și temperaturi extreme.'],
    [
      'Teste riguroase',
      'Fiecare ambarcațiune trece prin teste de presiune, flotabilitate și sarcină înainte de expediere.',
    ],
    ['Garanție de 2 ani', 'Toate produsele afarer sunt acoperite de o garanție completă a producătorului.'],
    ['Certificare BSCI', 'Audit de conformitate socială verificat — producție etică pentru cumpărătorii europeni.'],
    ['Conformitate REACH', 'Toate materialele respectă reglementările UE privind securitatea chimică.'],
  ],
  ru: [
    ['Сертификация ISO и CE', 'Каждый продукт соответствует международным стандартам безопасности и качества.'],
    ['Отличные материалы', 'Премиальные ткани ПВХ и Hypalon, испытанные на УФ, истирание и экстремальные температуры.'],
    ['Строгие испытания', 'Каждое судно проходит испытания давлением, плавучестью и нагрузкой перед отгрузкой.'],
    ['Гарантия 2 года', 'Все продукты afarer обеспечены полной гарантией производителя.'],
    [
      'Сертификация BSCI',
      'Проверенный аудит социальной ответственности — этичное производство для европейских покупателей.',
    ],
    ['Соответствие REACH', 'Все материалы соответствуют регламенту ЕС по химической безопасности.'],
  ],
  el: [
    ['Πιστοποίηση ISO και CE', 'Κάθε προϊόν πληροί τα διεθνή πρότυπα ασφάλειας και ποιότητας.'],
    ['Αριστεία υλικών', 'Υφάσματα PVC και Hypalon premium δοκιμασμένα για UV, τριβή και ακραίες θερμοκρασίες.'],
    ['Αυστηρές δοκιμές', 'Κάθε σκάφος υποβάλλεται σε δοκιμές πίεσης, άντωσης και φορτίου πριν την αποστολή.'],
    ['Εγγύηση 2 ετών', 'Όλα τα προϊόντα afarer καλύπτονται από ολοκληρωμένη εγγύηση κατασκευαστή.'],
    ['Πιστοποίηση BSCI', 'Επαληθευμένος έλεγχος κοινωνικής συμμόρφωσης — ηθική παραγωγή για Ευρωπαίους αγοραστές.'],
    ['Συμμόρφωση REACH', 'Όλα τα υλικά συμμορφώνονται με τους κανονισμούς ΕΕ για τη χημική ασφάλεια.'],
  ],
  tr: [
    ['ISO ve CE Sertifikalı', 'Her ürün uluslararası güvenlik ve kalite standartlarını karşılar.'],
    ['Malzeme Mükemmelliği', 'UV, aşınma ve aşırı sıcaklıklara karşı test edilmiş premium PVC ve Hypalon kumaşlar.'],
    ['Titiz Testler', 'Her tekne sevkiyattan önce basınç, yüzdürme ve yük testlerinden geçer.'],
    ['2 Yıl Garanti', 'Tüm afarer ürünler kapsamlı üretici garantisiyle desteklenir.'],
    ['BSCI Sertifikalı', 'Doğrulanmış sosyal uygunluk denetimi — Avrupa’daki alıcılar için etik üretim.'],
    ['REACH Uyumlu', 'Tüm malzemeler AB kimyasal güvenlik yönetmeliklerine uygundur.'],
  ],
  fi: [
    ['ISO- ja CE-sertifioitu', 'Jokainen tuote täyttää kansainväliset turvallisuus- ja laatuvaatimukset.'],
    [
      'Materiaalien huippulaatu',
      'Premium-PVC- ja Hypalon-kankaat, testattu UV-, kulutus- ja äärilämpötilakestävyydelle.',
    ],
    ['Perusteellinen testaus', 'Jokainen alus läpikäy paine-, kelluvuus- ja kuormituskokeet ennen toimitusta.'],
    ['2 vuoden takuu', 'Kaikilla afarer-tuotteilla on kattava valmistajan takuu.'],
    ['BSCI-sertifioitu', 'Varmennettu yhteiskuntavastautarkistus — eettinen valmistus eurooppalaisille ostajille.'],
    ['REACH-vaatimustenmukaisuus', 'Kaikki materiaalit täyttävät EU:n kemikaaliturvallisuusmääräykset.'],
  ],
  ja: [
    ['ISO・CE認証取得', 'すべての製品が国際的な安全・品質基準を満たしています。'],
    ['究極のマテリアル', 'プレミアムPVC・ハイパロン生地をUV・摩耗・極端な温度に対して試験済み。'],
    ['厳格なテスト', '各艇は出荷前に圧力・浮力・耐荷重テストを実施しています。'],
    ['2年間保証', 'すべてのafarer製品に包括的なメーカー保証が付きます。'],
    ['BSCI認証', '第三者による社会的コンプライアンス監査を通過 — 欧州バイヤーのための倫理的製造。'],
    ['REACH準拠', 'すべての材料がEUの化学物質安全規制に準拠しています。'],
  ],
  ko: [
    ['ISO·CE 인증', '모든 제품이 국제 안전 및 품질 기준을 충족합니다.'],
    ['최고의 소재', 'UV, 마모, 극한 온도에 대해 시험된 프리미엄 PVC 및 하이팔론 원단.'],
    ['철저한 테스트', '각 보트는 출하 전에 압력, 부력, 하중 테스트를 거칩니다.'],
    ['2년 보증', '모든 afarer 제품은 포괄적인 제조사 보증이 적용됩니다.'],
    ['BSCI 인증', '검증된 사회적 컴플라이언스 감사 — 유럽 바이어를 위한 윤리적 제조.'],
    ['REACH 준수', '모든 소재가 EU 화학물질 안전 규정을 준수합니다.'],
  ],
  th: [
    ['รับรอง ISO และ CE', 'ทุกผลิตภัณฑ์เป็นไปตามมาตรฐานความปลอดภัยและคุณภาพระดับสากล'],
    ['วัสดุคุณภาพสูง', 'ผ้า PVC และ Hypalon ระดับพรีเมียม ผ่านการทดสอบ UV การสึกหรอ และอุณหภูมิสูงสุด'],
    ['การทดสอบอย่างเข้มงวด', 'ทุกลำผ่านการทดสอบแรงดัน การลอยตัว และการรับน้ำหนักก่อนจัดส่ง'],
    ['รับประกัน 2 ปี', 'ผลิตภัณฑ์ afarer ทุกรายการได้รับการรับประกันจากผู้ผลิตอย่างครบครัน'],
    ['รับรอง BSCI', 'ผ่านการตรวจสอบการปฏิบัติตามด้านสังคม — การผลิตอย่างมีจริยธรรมสำหรับผู้ซื้อในยุโรป'],
    ['ปฏิบัติตาม REACH', 'วัสดุทั้งหมดเป็นไปตามข้อบังคับด้านความปลอดภัยทางเคมีของสหภาพยุโรป'],
  ],
  ar: [
    ['شهادات ISO وCE', 'كل منتجاتنا تلبي معايير السلامة والجودة الدولية.'],
    [
      'تميّز في المواد',
      'أقمشة PVC وHypalon فائقة الجودة مختبرة ضد الأشعة فوق البنفسجية والاحتكاك ودرجات الحرارة القاسية.',
    ],
    ['اختبارات صارمة', 'تخضع كل سفينة لاختبارات الضغط والطفو والحمل قبل الشحن.'],
    ['ضمان لمدة عامين', 'جميع منتجات afarer مدعومة بضمان شامل من الشركة المصنعة.'],
    ['شهادة BSCI', 'تدقيق مُوثّق للامتثال الاجتماعي — تصنيع أخلاقي للمشترين الأوروبيين.'],
    ['مطابقة REACH', 'جميع المواد مطابقة لأنظمة الاتحاد الأوروبي للسلامة الكيميائية.'],
  ],
};

const q = (s) => `'${String(s).replace(/'/g, "''")}'`;

function render(lang, rows) {
  const lines = ['badges:'];
  rows.forEach(([title, desc], i) => {
    lines.push(`  - icon: "${ICONS[i]}"`);
    lines.push(`    title: ${q(title)}`);
    lines.push(`    desc: ${q(desc)}`);
    lines.push(`    variant: ${VARIANTS[i]}`);
  });
  return lines.join('\n') + '\n';
}

const langs = Object.keys(T);
let bad = 0;
for (const lang of langs) {
  const rows = T[lang];
  if (rows.length !== 6 || rows.some((r) => r.length !== 2 || !r[0] || !r[1])) {
    console.error(`BAD table for ${lang}`);
    bad++;
    continue;
  }
  const file = path.join(OUT_DIR, `trust-badges.${lang}.yaml`);
  const content = render(lang, rows);
  if (WRITE) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`wrote ${path.relative(path.resolve(__dirname, '../..'), file)} (${content.length} bytes)`);
  } else {
    console.log(`dry: would write trust-badges.${lang}.yaml (${content.length} bytes)`);
  }
}
console.log(`\n${WRITE ? 'written' : 'dry-run'}: ${langs.length - bad}/${langs.length} locale files`);
process.exit(bad ? 1 : 0);
