// Shard 12 — FAQ dup fix B (7 ops): tr/cs/da/ro/th (q1==q2) + ar/no (q0==q2)
// q2 (lead time) answer was copy-pasted (BSCI answer for tr/cs/da/ro/th, MOQ answer for ar/no)
// — replace with proper lead-time answer. Find includes the q2 question line for disambiguation.
module.exports = [
  {
    f: 'src/data/pages/tr/factory.yaml',
    find: '    - q: Bir OEM siparişi için tipik teslim süresi nedir?\n      a: Evet. Fabrikamız geçerli BSCI sosyal uyumluluk sertifikasına sahiptir (denetim raporu talep üzerine mevcuttur). Ayrıca kalite yönetimi için ISO 9001 ve tüm ürünler CE CE  sertifikasına sahiptir. Her OEM sevkiyatıyla birlikte REACH ve RoHS uyumluluk belgeleri sağlanır.',
    rep: '    - q: Bir OEM siparişi için tipik teslim süresi nedir?\n      a: Standart teslim süresi, toplu OEM üretimi için onaylı sipariş ve depozitodan itibaren 30–45 gündür. Özel kalıp geliştirme, kalıp yapımı için 15–20 gün ekler. Acil siparişler ve sezon yoğunlukları için hızlandırılmış üretim mevcuttur. Prototip numuneler genellikle 15–20 gün içinde sevk edilir.',
  },
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: '    - q: Jaká je typická dodací lhůta objednávky OEM?\n      a: Ano. Naše továrna udržuje platnou certifikaci sociální shody BSCI (protokol z auditu je k dispozici na vyžádání). Držíme také  pro řízení kvality a všechny produkty nesou certifikaci CE  . Dokumentace o souladu s REACH a RoHS je přiložena ke každé zásilce OEM.',
    rep: '    - q: Jaká je typická dodací lhůta objednávky OEM?\n      a: Standardní dodací lhůta je 30–45 dnů od potvrzené objednávky a zálohy u hromadné výroby OEM. Vývoj vlastních forem přidává 15–20 dnů na výrobu nástrojů. Urychlená výroba je k dispozici pro naléhavé zakázky a sezónní špičky. Prototypové vzorky se obvykle odesílají do 15–20 dnů.',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: '    - q: Hvad er den typiske leveringstid for en OEM-ordre?\n      a: Ja. Vores fabrik har en gyldig BSCI-certificering for social overholdelse (auditrapport kan udleveres på forespørgsel). Vi har desuden  til kvalitetsstyring, og alle produkter bærer CE- certificering. Dokumentation for REACH- og RoHS-overholdelse medfølger ved hver OEM-forsendelse.',
    rep: '    - q: Hvad er den typiske leveringstid for en OEM-ordre?\n      a: Standardleveringstiden er 30–45 dage fra bekræftet ordre og depositum ved OEM-serieproduktion. Udvikling af specialforme tilføjer 15–20 dage til værktøjsfremstilling. Fremskyndet produktion er tilgængelig for hastende ordrer og sæsonspidser. Prototypeprøver sendes typisk inden for 15–20 dage.',
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: '    - q: Care este termenul de livrare tipic pentru o comandă OEM?\n      a: >-\n        Da. Fabrica noastră deține o certificare BSCI valabilă de conformitate socială (raportul de audit este disponibil la cerere). De asemenea, deținem  pentru managementul calității, iar toate produsele sunt livrate cu certificare CE . Documentația de conformitate REACH și RoHS este furnizată cu\n        fiecare expediere OEM.',
    rep: '    - q: Care este termenul de livrare tipic pentru o comandă OEM?\n      a: >-\n        Termenul de livrare standard este de 30–45 de zile de la comanda confirmată și avans pentru producția OEM în serie. Dezvoltarea mucelelor personalizate adaugă 15–20 de zile pentru realizarea sculelor. Producția accelerată este disponibilă pentru comenzi urgente și vârfuri sezoniere.\n        Eșantioanele de prototip sunt de obicei expediate în 15–20 de zile.',
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: '    - q: โดยทั่วไปคำสั่งซื้อแบบ OEM ใช้เวลาผลิตรอรับสินค้านานเท่าใด?\n      a: ใช่ โรงงานของเรามีใบรับรองการปฏิบัติตามมาตรฐานสังคม BSCI ที่ยังมีผลบังคับใช้ (รายงานการตรวจประเมินพร้อมให้ตามคำขอ) เรายังถือ  สำหรับการจัดการคุณภาพ และสินค้าทั้งหมดมีการรับรอง CE  เอกสารการปฏิบัติตามข้อกำหนด REACH และ RoHS จัดส่งให้พร้อมกับสินค้า OEM ทุกชุด',
    rep: '    - q: โดยทั่วไปคำสั่งซื้อแบบ OEM ใช้เวลาผลิตรอรับสินค้านานเท่าใด?\n      a: ระยะเวลาผลิตมาตรฐานคือ 30–45 วันนับจากการยืนยันคำสั่งซื้อและการชำระเงินมัดจำสำหรับการผลิต OEM แบบจำนวนมาก การพัฒนาแม่พิมพ์เฉพาะเพิ่มเวลา 15–20 วันสำหรับการขึ้นรูป มีบริการผลิตด่วนสำหรับคำสั่งซื้อเร่งด่วนและช่วงความต้องการสูงตามฤดูกาล ตัวอย่างต้นแบบโดยทั่วไปจัดส่งภายใน 15–20 วัน',
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: '    - q: ما هي المدة القياسية للتسليم لأمر OEM؟\n      a: تبدأ الكمية الدنيا للطلب من 5–10 وحدات للطرازات القياسية OEM. وتتطلب القوالب المخصصة والمشاريع الخاصة بعلامة تجارية حداً أدنى من 200 وحدة حسب التعقيد. ويتوفر طلبات تجريبية ودفعات عينات لإطلاق العلامات التجارية الجديدة.',
    rep: '    - q: ما هي المدة القياسية للتسليم لأمر OEM؟\n      a: مدة التسليم القياسية هي 30–45 يوماً من تأكيد أمر الشراء ودفع العربون لإنتاج OEM بالجملة. ويضيف تطوير القوالب المخصصة 15–20 يوماً لأعمال أدوات القوالب. ويتوفر إنتاج معجّل للطلبات العاجلة وذروات المواسم الموسمية. وتُشحن عينات النماذج الأولية عادةً خلال 15–20 يوماً.',
  },
  {
    f: 'src/data/pages/no/factory.yaml',
    find: '    - q: Hva er typisk leveringstid for en OEM-bestilling?\n      a: MOQ starter på 5–10 enheter for standard OEM-modeller. Tilpassede former og private-label-prosjekter krever minimum 200 enheter avhengig av kompleksitet. Prøvebestillinger og testserier er tilgjengelige for nye merkelanseringer.',
    rep: '    - q: Hva er typisk leveringstid for en OEM-bestilling?\n      a: Standard leveringstid er 30–45 dager fra bekreftet bestilling og depositum for OEM-serieproduksjon. Utvikling av tilpassede former legger til 15–20 dager for verktøyfremstilling. Akselerert produksjon er tilgjengelig for hastende ordrer og sesongtopper. Prototypprøver sendes vanligvis innen 15–20 dager.',
  },
];
