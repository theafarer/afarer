// Shard 18 — factory card3 (OEM/ODM Capability) desc (18 ops)
// Old pre-rename EN text (custom TUBE colors + Hypalon upgrade option) either left
// untranslated (13 langs) or translated with the removed content (de/es/pt/nl/el).
// New EN ref: 'End-to-end OEM/ODM services: custom mould design, private-label packaging,
// custom board colors, deck graphics (digital & screen printing), and drop-ship logistics.'
// (fi fixed in shard 07; fr current.)
module.exports = [
  {
    f: 'src/data/pages/de/factory.yaml',
    find: "    desc: 'End-to-End-OEM/ODM-Services: kundenspezifisches Formendesign, Private-Label-Verpackung, individuelle Schlauchfarben, Deckgrafiken (Digital- & Siebdruck), Hypalon-Upgrade und Drop-Ship-Logistik.'",
    rep: "    desc: 'End-to-End-OEM/ODM-Services: kundenspezifisches Formendesign, Private-Label-Verpackung, individuelle Boardfarben, Deckgrafiken (Digital- & Siebdruck) und Drop-Ship-Logistik.'",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: "    desc: 'Servicios OEM/ODM completos: diseño de molde personalizado, empaque de marca blanca, colores personalizados, gráficos de cubierta, opción Hypalon, logística drop-ship.'",
    rep: "    desc: 'Servicios OEM/ODM completos: diseño de molde personalizado, empaque de marca blanca, colores de tabla personalizados, gráficos de cubierta (impresión digital y serigrafía) y logística drop-ship.'",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: "    desc: 'Serviços OEM/ODM completos: design de molde personalizado, embalagem de marca própria, cores personalizadas, gráficos de convés, opção Hypalon, logística drop-ship.'",
    rep: "    desc: 'Serviços OEM/ODM completos: design de molde personalizado, embalagem de marca própria, cores de prancha personalizadas, gráficos de convés (impressão digital e serigrafia) e logística drop-ship.'",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM-diensten: aangepaste malontwerp, private-label verpakking, aangepaste buiskleuren, dek graphics (digitaal & zeefdruk), Hypalon-upgradeoptie en drop-ship logistiek.'",
    rep: "    desc: 'End-to-end OEM/ODM-diensten: aangepaste malontwerp, private-label verpakking, aangepaste boardkleuren, dekgraphics (digitaal & zeefdruk) en drop-ship logistiek.'",
  },
  {
    f: 'src/data/pages/el/factory.yaml',
    find: "    desc: 'Υπηρεσίες OEM/ODM από άκρο σε άκρο: προσαρμοσμένος σχεδιασμός καλουπιού, συσκευασία ιδιωτικής ετικέτας, προσαρμοσμένα χρώματα σωλήνων, γραφικά καταστρώματος (ψηφιακή & μεταξοτυπία), επιλογή αναβάθμισης Hypalon και logistics απευθείας αποστολής.'",
    rep: "    desc: 'Υπηρεσίες OEM/ODM από άκρο σε άκρο: προσαρμοσμένος σχεδιασμός καλουπιού, συσκευασία ιδιωτικής ετικέτας, προσαρμοσμένα χρώματα πλακών, γραφικά καταστρώματος (ψηφιακή & μεταξοτυπία) και logistics απευθείας αποστολής.'",
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'خدمات OEM/ODM شاملة: تصميم قوالب مخصصة، تغليف بعلامة خاصة، ألوان مخصصة للألواح، رسومات على سطح اللوح (طباعة رقمية وشاشية)، وخدمات الشحن المباشر.'",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'Servizi OEM/ODM completi: progettazione di stampi personalizzati, confezionamento a marca privata, colori personalizzati delle tavole, grafiche del ponte (stampa digitale e serigrafica) e logistica drop-ship.'",
  },
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'エンドツーエンドのOEM/ODMサービス：カスタム金型設計、プライベートラベルパッケージング、カスタムボードカラー、デッキグラフィック（デジタル＆スクリーン印刷）、ドロップシップ物流。'",
  },
  {
    f: 'src/data/pages/ko/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: '엔드투엔드 OEM/ODM 서비스: 맞춤 금형 설계, 프라이빗 라벨 포장, 맞춤 보드 색상, 데크 그래픽(디지털 및 스크린 인쇄), 드롭십 물류.'",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'Полный цикл OEM/ODM-услуг: разработка индивидуальных форм, упаковка под частной маркой, индивидуальные цвета досок, графика деки (цифровая и шелкографическая печать) и дроп-шип-логистика.'",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'Kompleksowe usługi OEM/ODM: projektowanie niestandardowych form, opakowania private label, niestandardowe kolory desek, grafika pokładu (druk cyfrowy i sitodruk) oraz logistyka drop-ship.'",
  },
  {
    f: 'src/data/pages/sv/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'OEM/ODM-tjänster hela vägen: design av kundanpassade formar, private label-förpackning, kundanpassade brädfärger, däckgrafik (digitaltryck och sikttryck) samt drop ship-logistik.'",
  },
  {
    f: 'src/data/pages/no/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'OEM/ODM-tjenester fra ende til ende: design av tilpassede former, emballasje med privat merke, tilpassede brettfarger, dekkgrafikk (digital- og silketrykk) og drop shipping-logistikk.'",
  },
  {
    f: 'src/data/pages/tr/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'Uçtan uca OEM/ODM hizmetleri: özel kalıp tasarımı, özel etiketli ambalaj, özel board renkleri, güverte grafikleri (dijital ve serigrafi baskı) ve drop-ship lojistiği.'",
  },
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'Služby OEM/ODM od začátku do konce: návrh vlastních forem, obaly private label, vlastní barvy prken, grafika paluby (digitální tisk a sítotisk) a drop-ship logistika.'",
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'Komplette OEM/ODM-services: design af specialformer, private label-emballage, specialfarver på boards, dækgrafik (digital- og silketryk) samt drop ship-logistik.'",
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'Servicii OEM/ODM complete: proiectare matrițe personalizate, ambalare sub marcă privată, culori personalizate ale plăcilor, grafica punții (imprimare digitală și serigrafie) și logistică drop-ship.'",
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: "    desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "    desc: 'บริการ OEM/ODM ครบวงจร: ออกแบบแม่พิมพ์เฉพาะ บรรจุภัณฑ์แบรนด์ส่วนตัว สีบอร์ดเฉพาะ กราฟิกดาดฟ้า (พิมพ์ดิจิทัลและสกรีน) และโลจิสติกส์ drop-ship'",
  },
];
