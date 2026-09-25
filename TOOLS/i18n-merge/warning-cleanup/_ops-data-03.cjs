// Shard 03 — factory.yaml ws1 (Tube Welding) + equipment EN-leak names (43 ops)
// ws1: collapse double spaces + insert ISO 6185; equipment: translate EN-leak names/specs
module.exports = [
  // === ws1: Tube Welding & Heat Sealing ===
  // EN: two double-space token deletions
  {
    f: 'src/data/pages/factory.yaml',
    find: 'heat sealing machines  and RF dielectric presses',
    rep: 'heat sealing machines and RF dielectric presses',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: 'exceed  requirements',
    rep: 'exceed ISO 6185 requirements',
  },
  // fr: insert ISO 6185
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: 'qui dépassent les exigences.',
    rep: 'qui dépassent les exigences ISO 6185.',
  },
  // de: dbl-space + ISO 6185
  {
    f: 'src/data/pages/de/factory.yaml',
    find: 'Heißsiegelmaschinen  und',
    rep: 'Heißsiegelmaschinen und',
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: 'die die  Anforderungen übertreffen',
    rep: 'die die ISO 6185-Anforderungen übertreffen',
  },
  // es: insert ISO 6185
  {
    f: 'src/data/pages/es/factory.yaml',
    find: 'que superan los requisitos.',
    rep: 'que superan los requisitos ISO 6185.',
  },
  // pt: dbl-space + " ." scar + ISO 6185
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: 'selagem térmica  e',
    rep: 'selagem térmica e',
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: 'excedem os requisitos .',
    rep: 'excedem os requisitos ISO 6185.',
  },
  // ar: EN-leak "presses" + ISO 6185
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: 'وpresses RF',
    rep: 'ومكابس RF',
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: 'تتجاوز المتطلبات.',
    rep: 'تتجاوز متطلبات ISO 6185.',
  },
  // it: dbl-space + " ." scar + ISO 6185
  {
    f: 'src/data/pages/it/factory.yaml',
    find: 'termosaldatrici  e',
    rep: 'termosaldatrici e',
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: 'superano i requisiti .',
    rep: 'superano i requisiti ISO 6185.',
  },
  // ja: stray spaces + ISO 6185
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: '熱シール機 とRF誘電プレス',
    rep: '熱シール機とRF誘電プレス',
  },
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: 'RF溶着は 要件を超える',
    rep: 'RF溶着はISO 6185要件を超える',
  },
  // ko: insert ISO 6185
  {
    f: 'src/data/pages/ko/factory.yaml',
    find: 'RF 용접은 요구 사항을 초과하는',
    rep: 'RF 용접은 ISO 6185 요구 사항을 초과하는',
  },
  // ru: dbl-space + " ." scar + ISO 6185
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: 'термосварки  и RF-прессами',
    rep: 'термосварки и RF-прессами',
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: 'превышающие требования .',
    rep: 'превышающие требования ISO 6185.',
  },
  // pl: dbl-space + " ." scar + ISO 6185
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: 'uszczelniania termicznego  i',
    rep: 'uszczelniania termicznego i',
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: 'przekraczające wymagania .',
    rep: 'przekraczające wymagania ISO 6185.',
  },
  // nl: two dbl-spaces + ISO 6185
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: 'heatseal-machines  en',
    rep: 'heatseal-machines en',
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: 'die de  vereisten overtreffen',
    rep: 'die de ISO 6185-vereisten overtreffen',
  },
  // sv: insert ISO 6185
  {
    f: 'src/data/pages/sv/factory.yaml',
    find: 'som överträffar kraven.',
    rep: 'som överträffar ISO 6185-kraven.',
  },
  // no: insert ISO 6185
  {
    f: 'src/data/pages/no/factory.yaml',
    find: 'som overgår kravene.',
    rep: 'som overgår ISO 6185-kravene.',
  },
  // el: truncated desc — restore second sentence
  {
    f: 'src/data/pages/el/factory.yaml',
    find: 'και πρέσες RF.',
    rep: 'και πρέσες RF. Οι θερμοσφραγίδες θερμού αέρα ενώνουν και συγχωνεύουν τους θαλάμους των σωλήνων PVC, ενώ οι συγκολλήσεις RF παράγουν αεροστεγείς και υψηλής αντοχής ραφές που υπερβαίνουν τις απαιτήσεις ISO 6185.',
  },
  // cs: insert ISO 6185
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: 'překračují požadavky.',
    rep: 'překračují požadavky ISO 6185.',
  },
  // da: dbl-space + ISO 6185
  {
    f: 'src/data/pages/da/factory.yaml',
    find: 'varmeforseglingsmaskiner  og',
    rep: 'varmeforseglingsmaskiner og',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: 'overgår  kravene.',
    rep: 'overgår ISO 6185-kravene.',
  },
  // ro: insert ISO 6185
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: 'depășesc cerințele.',
    rep: 'depășesc cerințele ISO 6185.',
  },
  // th: insert ISO 6185
  {
    f: 'src/data/pages/th/factory.yaml',
    find: 'ซึ่งเกินข้อกำหนดที่กำหนดไว้',
    rep: 'ซึ่งเกินข้อกำหนด ISO 6185',
  },
  // === equipment: EN-leak names ===
  // cs
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: 'name: Heat Sealing Machine',
    rep: 'name: Stroj na tepelné svařování',
  },
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: 'name: Digital Printer',
    rep: 'name: Digitální tiskárna',
  },
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: 'name: Screen Printing Machine',
    rep: 'name: Sítotiskový stroj',
  },
  // da
  {
    f: 'src/data/pages/da/factory.yaml',
    find: 'name: Heat Sealing Machine',
    rep: 'name: Varmeforseglingsmaskine',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: 'name: Digital Printer',
    rep: 'name: Digital printer',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: 'name: Screen Printing Machine',
    rep: 'name: Serigrafimaskine',
  },
  // ro
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: 'name: Heat Sealing Machine',
    rep: 'name: Mașină de etanșare termică',
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: 'name: Digital Printer',
    rep: 'name: Imprimantă digitală',
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: 'name: Screen Printing Machine',
    rep: 'name: Mașină de serigrafie',
  },
  // th
  {
    f: 'src/data/pages/th/factory.yaml',
    find: 'name: Heat Sealing Machine',
    rep: 'name: เครื่องซีลความร้อน',
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: 'name: Digital Printer',
    rep: 'name: เครื่องพิมพ์ดิจิทัล',
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: 'name: Screen Printing Machine',
    rep: 'name: เครื่องพิมพ์สกรีน',
  },
  // ar: EN-leak "Press" + EN-leak spec
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: 'Press لحام RF',
    rep: 'مكبس لحام RF',
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: 'SUP hulls up to 6 m',
    rep: 'هياكل SUP حتى 6 م',
  },
  // fr: EN-leak spec
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: 'SUP cores up to 14 ft',
    rep: 'Cœurs SUP jusqu’à 14 ft',
  },
];
