// Shard 13 — FAQ BSCI q1 answer repair (19 ops) + el lead-time/FOB full rewrites (2 ops)
// db928cfa dropped the "ISO 9001" token and left " / ." scars in q1 answers
// ("Wir besitzen auch  für Qualitätsmanagement...CE-Zertifizierung .").
// ru/el answers were heavily truncated — full rewrites per EN reference.
// MUST run after shards 11/12 (dup fixes): BSCI fragments appear twice in dup langs pre-fix.
module.exports = [
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: 'Nous détenons également la certification pour la gestion',
    rep: 'Nous détenons également la certification ISO 9001 pour la gestion',
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: 'Wir besitzen auch  für Qualitätsmanagement und alle Produkte tragen die CE-Zertifizierung .',
    rep: 'Wir besitzen auch ISO 9001 für Qualitätsmanagement und alle Produkte tragen die CE-Zertifizierung.',
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: 'También contamos con la certificación de gestión de calidad',
    rep: 'También contamos con la certificación ISO 9001 de gestión de calidad',
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: 'Também possuímos  para gestão da qualidade e todos os produtos possuem certificação CE .',
    rep: 'Também possuímos ISO 9001 para gestão da qualidade e todos os produtos possuem certificação CE.',
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: 'كما نحمل شهادة لإدارة الجودة',
    rep: 'كما نحمل شهادة ISO 9001 لإدارة الجودة',
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: 'Deteniamo anche  per la gestione qualità e tutti i prodotti portano la certificazione CE .',
    rep: 'Deteniamo anche ISO 9001 per la gestione qualità e tutti i prodotti portano la certificazione CE.',
  },
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: '品質管理のための およびすべての製品はCE 認証を保持しています',
    rep: '品質管理のためのISO 9001およびすべての製品はCE認証を保持しています',
  },
  {
    f: 'src/data/pages/ko/factory.yaml',
    find: '품질 경영을 위한 인증과',
    rep: '품질 경영을 위한 ISO 9001 인증과',
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: 'Да. Наша фабрика имеет действующую сертификацию BSCI. Мы также имеем  для управления качеством, и все продукты имеют сертификацию CE .',
    rep: 'Да. Наша фабрика поддерживает действующую сертификацию BSCI по социальной ответственности (отчет аудита доступен по запросу). Мы также имеем сертификацию ISO 9001 для управления качеством, и все продукты имеют сертификацию CE. Документация соответствия REACH и RoHS предоставляется с каждой OEM-партией.',
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: 'Posiadamy również  do zarządzania jakością, a wszystkie produkty posiadają certyfikat CE .',
    rep: 'Posiadamy również ISO 9001 do zarządzania jakością, a wszystkie produkty posiadają certyfikat CE.',
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: 'We hebben ook  voor kwaliteitsmanagement en alle producten hebben CE -certificering.',
    rep: 'We hebben ook ISO 9001 voor kwaliteitsmanagement en alle producten hebben CE-certificering.',
  },
  {
    f: 'src/data/pages/sv/factory.yaml',
    find: 'Vi är även certifierade för kvalitetsledning',
    rep: 'Vi är även certifierade enligt ISO 9001 för kvalitetsledning',
  },
  {
    f: 'src/data/pages/no/factory.yaml',
    find: 'Vi har også sertifisert kvalitetsstyring',
    rep: 'Vi har også ISO 9001-sertifisert kvalitetsstyring',
  },
  {
    f: 'src/data/pages/el/factory.yaml',
    find: 'Ναι. Το εργοστάσιό μας διατηρεί έγκυρη πιστοποίηση BSCI.',
    rep: 'Ναι. Το εργοστάσιό μας διατηρεί έγκυρη πιστοποίηση κοινωνικής συμμόρφωσης BSCI (έκθεση ελέγχου διαθέσιμη κατόπιν αιτήματος). Κατέχουμε επίσης πιστοποίηση ISO 9001 για τη διαχείριση ποιότητας και όλα τα προϊόντα φέρουν πιστοποίηση CE. Τεκμηρίωση συμμόρφωσης REACH και RoHS παρέχεται με κάθε αποστολή OEM.',
  },
  {
    f: 'src/data/pages/tr/factory.yaml',
    find: 'tüm ürünler CE CE  sertifikasına sahiptir',
    rep: 'tüm ürünler CE sertifikasına sahiptir',
  },
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: 'Držíme také  pro řízení kvality a všechny produkty nesou certifikaci CE  .',
    rep: 'Držíme také ISO 9001 pro řízení kvality a všechny produkty nesou certifikaci CE.',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: 'Vi har desuden  til kvalitetsstyring, og alle produkter bærer CE- certificering.',
    rep: 'Vi har desuden ISO 9001 til kvalitetsstyring, og alle produkter bærer CE-certificering.',
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: 'De asemenea, deținem  pentru managementul calității, iar toate produsele sunt livrate cu certificare CE .',
    rep: 'De asemenea, deținem ISO 9001 pentru managementul calității, iar toate produsele sunt livrate cu certificare CE.',
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: 'เรายังถือ  สำหรับการจัดการคุณภาพ และสินค้าทั้งหมดมีการรับรอง CE  เอกสาร',
    rep: 'เรายังถือ ISO 9001 สำหรับการจัดการคุณภาพ และสินค้าทั้งหมดมีการรับรอง CE เอกสาร',
  },
  {
    f: 'src/data/pages/el/factory.yaml',
    find: '      a: 30–45 ημέρες από επιβεβαίωση PO.',
    rep: '      a: Ο τυπικός χρόνος παράδοσης είναι 30–45 ημέρες από την επιβεβαιωμένη παραγγελία και την προκαταβολή για μαζική παραγωγή OEM. Η ανάπτυξη προσαρμοσμένων καλουπιών προσθέτει 15–20 ημέρες για την κατασκευή εργαλείων. Επιταχυνόμενη παραγωγή είναι διαθέσιμη για επείγουσες παραγγελίες και εποχικές αιχμές. Δείγματα πρωτοτύπου αποστέλλονται συνήθως εντός 15–20 ημερών.',
  },
  {
    f: 'src/data/pages/el/factory.yaml',
    find: '      a: Ναι. Αποστέλλουμε FOB Qingdao, CIF και DDP.',
    rep: '      a: Ναι. Αποστέλλουμε FOB Qingdao, CIF σε μεγάλους παγκόσμιους λιμένες και DDP για επιλεγμένους συνεργάτες. Η ομάδα logistics μας διαχειρίζεται την κράτηση κοντέινερ, την εξαγωγική τεκμηρίωση και το τελωνειακό καθαρισμό. Αποστέλλουμε σε 50+ χώρες σε αγορές ΕΕ, ΗΠΑ, Αυστραλίας και Ασίας.',
  },
];
