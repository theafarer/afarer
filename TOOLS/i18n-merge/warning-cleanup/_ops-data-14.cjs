// Shard 14 — misc pages (39 ops):
//  - about ×6: add missing 2nd keyword 'inflatable boat brand' (ar/ja/ko/no/da/th)
//  - contact ×7: el/ro/th untranslated address (info-card description + map address)
//    + de default_country_code corrupted 'Eins' -> '+1'
//  - solutions-distributors ×12: untranslated country lists (el Europe/Americas/Africa,
//    fi Asia/Americas, cs Americas, da Asia/MiddleEast, ro Americas, th Americas/Africa, ja Oceania)
//  - th/brand-global-presence ×1: untranslated region list
//  - da/factory-capacity ×1: untranslated region list
//  - ja/research-pvc-vs-hypalon ×12: 'very good' EN leak + '? ' mojibake for en dash / m&sup2;
module.exports = [
  // --- about keywords ---
  {
    f: 'src/data/pages/ar/about.yaml',
    find: "  keywords:\n    - 'علامة ألواح SUP القابلة للنفخ'",
    rep: "  keywords:\n    - 'علامة ألواح SUP القابلة للنفخ'\n    - 'علامة قوارب قابلة للنفخ'",
  },
  {
    f: 'src/data/pages/ja/about.yaml',
    find: "  keywords:\n    - 'インフレータブルSUPボードブランド'",
    rep: "  keywords:\n    - 'インフレータブルSUPボードブランド'\n    - 'インフレータブルボートブランド'",
  },
  {
    f: 'src/data/pages/ko/about.yaml',
    find: "  keywords:\n    - '팽창식 SUP 보드 브랜드'",
    rep: "  keywords:\n    - '팽창식 SUP 보드 브랜드'\n    - '팽창식 보트 브랜드'",
  },
  {
    f: 'src/data/pages/no/about.yaml',
    find: "  keywords:\n    - 'inflatable sup merke'",
    rep: "  keywords:\n    - 'inflatable sup merke'\n    - 'inflatable båtmerke'",
  },
  {
    f: 'src/data/pages/da/about.yaml',
    find: "  keywords:\n    - 'inflatable sup brand'",
    rep: "  keywords:\n    - 'inflatable sup brand'\n    - 'inflatable bådbrand'",
  },
  {
    f: 'src/data/pages/th/about.yaml',
    find: "  keywords:\n    - 'แบรนด์บอร์ด SUP แบบเป่าลม'",
    rep: "  keywords:\n    - 'แบรนด์บอร์ด SUP แบบเป่าลม'\n    - 'แบรนด์เรือเป่าลม'",
  },
  // --- contact ---
  {
    f: 'src/data/pages/el/contact.yaml',
    find: 'address: Economic Development Zone, Laixi, Qingdao, China, 266600',
    rep: 'address: Ζώνη Οικονομικής Ανάπτυξης, Laixi, Qingdao, Κίνα, 266600',
  },
  {
    f: 'src/data/pages/ro/contact.yaml',
    find: 'address: Economic Development Zone, Laixi, Qingdao, China, 266600',
    rep: 'address: Zona de Dezvoltare Economică, Laixi, Qingdao, China, 266600',
  },
  {
    f: 'src/data/pages/th/contact.yaml',
    find: 'address: Economic Development Zone, Laixi, Qingdao, China, 266600',
    rep: 'address: เขตพัฒนาเศรษฐกิจ ไล่ซี ชิงเต่า ประเทศจีน 266600',
  },
  {
    f: 'src/data/pages/de/contact.yaml',
    find: 'default_country_code: Eins',
    rep: "default_country_code: '+1'",
  },
  // second EN occurrence of the same address: info-card 'description:'
  // (the ops above fixed only the map 'address:' field)
  {
    f: 'src/data/pages/el/contact.yaml',
    find: 'description: Economic Development Zone, Laixi, Qingdao, China, 266600',
    rep: 'description: Ζώνη Οικονομικής Ανάπτυξης, Laixi, Qingdao, Κίνα, 266600',
  },
  {
    f: 'src/data/pages/ro/contact.yaml',
    find: 'description: Economic Development Zone, Laixi, Qingdao, China, 266600',
    rep: 'description: Zona de Dezvoltare Economică, Laixi, Qingdao, China, 266600',
  },
  {
    f: 'src/data/pages/th/contact.yaml',
    find: 'description: Economic Development Zone, Laixi, Qingdao, China, 266600',
    rep: 'description: เขตพัฒนาเศรษฐกิจ ไล่ซี ชิงเต่า ประเทศจีน 266600',
  },
  // --- solutions-distributors country lists ---
  {
    f: 'src/data/pages/el/solutions-distributors.yaml',
    find: 'countries: France, Germany, UK, Spain, Italy, Netherlands, Sweden, Norway, Poland, Greece',
    rep: 'countries: Γαλλία, Γερμανία, Ηνωμένο Βασίλειο, Ισπανία, Ιταλία, Ολλανδία, Σουηδία, Νορβηγία, Πολωνία, Ελλάδα',
  },
  {
    f: 'src/data/pages/el/solutions-distributors.yaml',
    find: 'countries: USA, Canada, Brazil, Mexico',
    rep: 'countries: ΗΠΑ, Καναδάς, Βραζιλία, Μεξικό',
  },
  {
    f: 'src/data/pages/el/solutions-distributors.yaml',
    find: 'countries: South Africa, Morocco',
    rep: 'countries: Νότια Αφρική, Μαρόκο',
  },
  {
    f: 'src/data/pages/fi/solutions-distributors.yaml',
    find: 'countries: Japan, South Korea, China, Thailand, Singapore',
    rep: 'countries: Japani, Etelä-Korea, Kiina, Thaimaa, Singapore',
  },
  {
    f: 'src/data/pages/fi/solutions-distributors.yaml',
    find: 'countries: USA, Canada, Brazil, Mexico',
    rep: 'countries: USA, Kanada, Brasilia, Meksiko',
  },
  {
    f: 'src/data/pages/cs/solutions-distributors.yaml',
    find: 'countries: USA, Canada, Brazil, Mexico',
    rep: 'countries: USA, Kanada, Brazílie, Mexiko',
  },
  {
    f: 'src/data/pages/da/solutions-distributors.yaml',
    find: 'countries: Japan, South Korea, China, Thailand, Singapore',
    rep: 'countries: Japan, Sydkorea, Kina, Thailand, Singapore',
  },
  {
    f: 'src/data/pages/da/solutions-distributors.yaml',
    find: 'countries: UAE, Saudi Arabia',
    rep: 'countries: UAE, Saudi-Arabien',
  },
  {
    f: 'src/data/pages/ro/solutions-distributors.yaml',
    find: 'countries: USA, Canada, Brazil, Mexico',
    rep: 'countries: SUA, Canada, Brazilia, Mexic',
  },
  {
    f: 'src/data/pages/th/solutions-distributors.yaml',
    find: 'countries: USA, Canada, Brazil, Mexico',
    rep: 'countries: สหรัฐอเมริกา, แคนาดา, บราซิล, เม็กซิโก',
  },
  {
    f: 'src/data/pages/th/solutions-distributors.yaml',
    find: 'countries: South Africa, Morocco',
    rep: 'countries: แอฟริกาใต้, โมร็อกโก',
  },
  {
    f: 'src/data/pages/ja/solutions-distributors.yaml',
    find: 'countries: Australia, New Zealand',
    rep: 'countries: オーストラリア、ニュージーランド',
  },
  // --- th/brand-global-presence ---
  {
    f: 'src/data/pages/th/brand-global-presence.yaml',
    find: 'amount: Europe, Americas, Asia, Middle East, Oceania',
    rep: 'amount: ยุโรป, อเมริกา, เอเชีย, ตะวันออกกลาง, โอเชียเนีย',
  },
  // --- da/factory-capacity ---
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: 'detail: EU, US, AU, Middle East, Asia',
    rep: 'detail: EU, US, AU, Mellemøsten, Asien',
  },
  // --- ja/research-pvc-vs-hypalon ---
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '>very good<',
    rep: '>非常に良い<',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '1,100 ? 1,680 DTEX',
    rep: '1,100 – 1,680 DTEX',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '3,000 ? 5,000 N/5cm',
    rep: '3,000 – 5,000 N/5cm',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '2,500 ? 4,000 N/5cm',
    rep: '2,500 – 4,000 N/5cm',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '1m?あたり',
    rep: '1m&sup2;あたり',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '850 ? 1,200 g',
    rep: '850 – 1,200 g',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '1,100 ? 1,500 g',
    rep: '1,100 – 1,500 g',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '$8 ?$15 / m&sup2;',
    rep: '$8 – $15 / m&sup2;',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '$20 ?$40 / m&sup2;',
    rep: '$20 – $40 / m&sup2;',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '5 ? 8年',
    rep: '5 – 8年',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '10 ? 15年',
    rep: '10 – 15年',
  },
  {
    f: 'src/data/pages/ja/research-pvc-vs-hypalon.yaml',
    find: '15 ? 25%軽量',
    rep: '15 – 25%軽量',
  },
];
