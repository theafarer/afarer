// Shard 07 — fi/factory.yaml repair part 1: intro/stats/cards (L15-57, 15 ops)
// "?" mojibake → ä/ö; icon_bg enums; cards aligned to new EN (SUP line)
module.exports = [
  // intro[0] line 1: mojibake
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Qingdao Vatrad Group Co., Ltd.:n tehdasbr?ndin? afarer hallitsee jokaista tuotannon vaihetta — raaka-PVC:n ja lasikuitumateriaalien saapumisesta valmiin veneen lopulliseen esitarkastukseen. Tuotantolaitoksemme Qingdaon talouskehitysalueella kattaa 12 000 neli?metri? ja sis?lt?? erilliset ty?pajat',
    rep: 'Qingdao Vatrad Group Co., Ltd.:n tehdasbrändinä afarer hallitsee jokaista tuotannon vaihetta — raaka-PVC:n ja lasikuitumateriaalien saapumisesta valmiin veneen lopulliseen esitarkastukseen. Tuotantolaitoksemme Qingdaon talouskehitysalueella kattaa 12 000 neliömetriä ja sisältää erilliset työpajat',
  },
  // intro[1] line 1
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Yhdist?m?ll? suunnittelun, insin??rity?n, prototyyppauksen, valmistuksen ja testauksen saman katon alle eliminoimme sopimusvalmistuksen tehottomuudet ja s?ilyt?mme suoran hallinnan rakennuslaadussa, materiaalivalinnassa ja toimitusaikatauluissa. Jokainen ty?pajaltamme l?htev? vene on rakennettu',
    rep: 'Yhdistämällä suunnittelun, insinöörityön, prototyyppauksen, valmistuksen ja testauksen saman katon alle eliminoimme sopimusvalmistuksen tehottomuudet ja säilytämme suoran hallinnan rakennuslaadussa, materiaalivalinnassa ja toimitusaikatauluissa. Jokainen ty?pajaltamme lähtevä vene on rakennettu',
  },
  // intro[1] line 2
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'meid?n ihmistemme toimesta, meid?n laitteillamme, meid?n standardeillamme.',
    rep: 'meidän ihmistemme toimesta, meidän laitteillamme, meidän standardeillamme.',
  },
  // stats labels
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'label: Ammattitaitoiset ty?ntekij?t',
    rep: 'label: Ammattitaitoiset työntekijät',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'label: Veneit? valmistetaan vuosittain',
    rep: 'label: Veneitä valmistetaan vuosittain',
  },
  // stats[3] null → ISO 9001
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: '  - value: null\n    label: Laatusertifioitu',
    rep: '  - value: ISO 9001\n    label: Laatusertifioitu',
  },
  // icon_bg enums
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'icon_bg: sininen',
    rep: 'icon_bg: blue',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'icon_bg: vihreä',
    rep: 'icon_bg: green',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'icon_bg: violetti',
    rep: 'icon_bg: purple',
  },
  // card1: EN-leak desc → new EN (SUP line) in fi
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: 'desc: 12 000 m² tuotantolaitos, joka valmistaa yli 15 000 SUP-lautaa vuodessa SUP-lauta- ja turvallisuusvarustelinjoilla. Yli 200 työntekijää, 2 vuoroa.',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: "value: 'SUP: 5-10 / SUP: 2-5'",
    rep: "value: 'SUP: 5–10'",
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'value: 30-45 days',
    rep: 'value: 30–45 päivää',
  },
  // card2 title typo
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'title: Laatorialabo ja testaus',
    rep: 'title: Laatulaboratorio ja testaus',
  },
  // card3 title typo
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'title: OEM/ODM-kyvykkys',
    rep: 'title: OEM/ODM-kyvykkyydet',
  },
  // card3: EN-leak desc (old EN w/ Hypalon) → new EN in fi
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: "desc: 'End-to-end OEM/ODM services: custom mould design, private-label packaging, custom tube colors, deck graphics (digital & screen printing), Hypalon upgrade option, and drop-ship logistics.'",
    rep: "desc: 'Kattavat OEM/ODM-palvelut: räätälöity muottisuunnittelu, oman tuotemerkin pakkaukset, räätälöidyt laudan värit, kansigrafiikat (digitaali- ja silkkipainatus) sekä suoratoimituslogistiikka.'",
  },
];
