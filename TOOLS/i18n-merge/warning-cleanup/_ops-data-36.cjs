// shard 36: factory-capacity full repair — EN root boat-version restore
// (RIB workshop + boat intro recovered from \bRIB\b->SUP word-replace corruption)
// + 20 locales: intro retranslate x14, hl1/ws1/ws2 title+desc+output translation,
// SEP/plus normalization, moq repair (236 ops)
module.exports = [
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: '  - value: 12,000 مترمربع\n',
    rep: "  - value: '12,000 م²'\n",
  },
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'القوارب المنتجة سنويًا'\n",
  },
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'إنتاج قوارب RIB'\n",
  },
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: "    description: 'ورشة عمل مخصصة لهياكل الألياف الزجاجية مع 6 محطات قوالب لهياكل SUP التي يصل طولها إلى 7.6 متر. يعالج لحام الأنابيب ومنطقة التجميع 3 - أضلاع في وقت واحد. سعة SUP السنوية: 2000+ قارب.'\n",
    rep: "    description: 'ورشة عمل مخصصة لهياكل الألياف الزجاجية مع 6 محطات قوالب لهياكل القوارب التي يصل طولها إلى 7.6 متر. يعالج لحام الأنابيب ومنطقة التجميع 3–6 قوارب في وقت واحد. سعة RIB السنوية: 2,000+ قارب.'\n",
  },
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2,000+ قارب RIB/السنة'\n",
  },
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'القوارب القابلة للنفخ و SUP'\n",
  },
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 وحدات | قارب: 2–5 وحدات | كاياك/قارب صغير: 10–50 وحدة | قالب مخصص: 200+ وحدة'\n",
  },
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: 'الأضلاع، القوارب، معدات السلامة',
    rep: 'قوارب RIB، القوارب، معدات السلامة',
  },
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: '5000+ وحدة',
    rep: '5,000+ وحدة',
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer provozuje jednu z největší specializovaných továren na výrobu nafukovacích člunů v čínském Qingdao. Naše továrna o rozloze 12 000 m² je rozdělena do šesti specializovaných dílen pracujících paralelně, což nám dává kapacitu vyrábět ročně přes 15 000 člunů v produktových řadách SUP, kajaků, loďek, RIB a bezpečnostního vybavení.\n',
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: '  subtitle: Výrobní areál o rozloze 12,000 m² s produkcí 15,000+ člunů ročně a prostorem pro rozšíření\n',
    rep: "  subtitle: 'Výrobní areál o rozloze 12 000 m² s produkcí 15 000+ člunů ročně a prostorem pro rozšíření'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: '  - value: 12,000 m²\n',
    rep: "  - value: '12 000 m²'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Vyrobené čluny ročně'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP prkna, kajaky, čluny RIB, loďky, bezpečnostní vybavení'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: '    output: 8,000+ SUP/rok\n',
    rep: "    output: '8 000+ SUP/rok'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Výroba člunů RIB'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: "    description: 'Dedikovaná dílna na sklolaminátové trupy se 6 formovacími stanicemi pro SUP trupy do 7,6 m. Oblast svařování a montáže trubek zpracovává 3–6 SUP současně. Roční kapacita SUP: 2 000+ člunů.'\n",
    rep: "    description: 'Specializovaná dílna sklolaminátových trupů se 6 formovacími stanicemi pro trupy lodí do 7,6 m. Oblast svařování a montáže trubek zpracovává 3–6 člunů současně. Roční kapacita RIB: 2 000+ člunů.'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2 000+ RIB/rok'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Nafukovací čluny a SUP'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: '    output: 5 000+ kusů ročně\n',
    rep: "    output: '5 000+ kusů ročně'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 ks | Loď: 2–5 ks | Kajak/Loďka: 10–50 ks | Vlastní forma: 200+ ks'\n",
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: 'kajaky a SUP.',
    rep: 'kajaky a loďky.',
  },
  {
    f: 'src/data/pages/cs/factory-capacity.yaml',
    find: 'Roční kapacita SUP: 8,000+ prken.',
    rep: 'Roční kapacita SUP: 8 000+ prken.',
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer driver et af de største dedikerede produktionsanlæg til oppustelige både i Qingdao i Kina. Vores fabrik på 12.000 m² er organiseret i seks specialiserede værksteder, der kører parallelt, hvilket giver os kapaciteten til at producere over 15.000 både årligt på tværs af linjerne for SUP, kajakker, joller, RIB og sikkerhedsudstyr.\n',
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '  subtitle: Facilitet på 12,000 m², der producerer 15,000+ både om året med plads til at skalere\n',
    rep: "  subtitle: 'Facilitet på 12.000 m², der producerer 15.000+ både om året med plads til at skalere'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '  - value: 12,000 m²\n',
    rep: "  - value: '12.000 m²'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Både produceret årligt'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP boards, kajakker, RIB-både, joller, sikkerhedsudstyr'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Produktion af RIB-både'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '    description: "Dedikeret glasfiber skrogværksted med 6 formstationer til SUP-skrog op til 7,6 m. Rørsvejse- og monteringsområde håndterer 3–6 SUP\'er samtidigt. Årlig SUP-kapacitet: 2.000+ både."\n',
    rep: "    description: 'Dedikeret glasfiberskrogsværksted med 6 formstationer til bådskrog op til 7,6 m. Rørsvejse- og monteringsområde håndterer 3–6 både samtidigt. Årlig RIB-kapacitet: 2.000+ både.'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2.000+ RIB-både/år'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Oppustelige både og SUP'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '    output: 5,000+ enheder/år\n',
    rep: "    output: '5.000+ enheder/år'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '    output: 50,000+ redningsveste/år\n',
    rep: "    output: '50.000+ redningsveste/år'\n",
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: '| SUP: 2–5 enheder',
    rep: '| Båd: 2–5 enheder',
  },
  {
    f: 'src/data/pages/da/factory-capacity.yaml',
    find: 'facility på 12.000 m²',
    rep: 'anlæg på 12.000 m²',
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer betreibt eine der größten spezialisierten Fabriken für aufblasbare Boote in Qingdao, China. Unsere 12.000 m² große Fabrik ist in sechs spezialisierte Werkstätten gegliedert, die parallel arbeiten, was uns die Kapazität gibt, über die Produktlinien SUP, Kajak, Dinghy, RIB und Sicherheitsausrüstung mehr als 15.000 Boote jährlich zu produzieren.\n',
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Jährlich produzierte Boote'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUPs, Kajaks, RIB-Boote, Dinghys, Sicherheitsausrüstung'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '    output: 8.000 SUPs/Jahr\n',
    rep: "    output: '8.000+ SUPs/Jahr'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'RIB-Boot-Produktion'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '    description: Spezialisierte GFK-Rumpfwerkstatt mit 6 Formstationen für SUP-Rümpfe bis 7,6 m\n',
    rep: "    description: 'Spezialisierte GFK-Rumpfwerkstatt mit 6 Formstationen für Bootsrümpfe bis 7,6 m. Bereich für Rohrschweißen und Montage bearbeitet 3–6 Boote gleichzeitig. Jährliche RIB-Kapazität: 2.000+ Boote.'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2.000+ RIBs/Jahr'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Schlauchboote & SUP'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '    description: Mehrzweck-Produktionslinien für Schlauchboote, Kajaks und Dinghys. Heißluftschweißen\n',
    rep: "    description: 'Mehrzweck-Produktionslinien für Schlauchboote, Kajaks und Dinghys. Heißluftschweißstationen, RF-Dielektrikpressen und Montagearbeitsplätze werden je nach Auftragsmix neu konfiguriert. Jährliche Kapazität: 5.000+ Einheiten.'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '    output: 5.000 Einheiten/Jahr\n',
    rep: "    output: '5.000+ Einheiten/Jahr'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '    description: Separater Reinraumbereich für Schwimmwesten und Sicherheitsausrüstung\n',
    rep: "    description: 'Separater Reinraumbereich für Schwimmwesten und Sicherheitsausrüstung. Dedizierte Näh-, Schaumstoffeinlege- und Prüfstationen. Jährliche Kapazität für Schwimmwesten: 50.000+ Einheiten.'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '    output: 50.000 Schwimmwesten/Jahr\n',
    rep: "    output: '50.000+ Schwimmwesten/Jahr'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '| SUP: 2–5 Einheiten',
    rep: '| Boot: 2–5 Einheiten',
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '| Kajak/SUP:',
    rep: '| Kajak/Dinghy:',
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '8.000 Boards',
    rep: '8.000+ Boards',
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  Η afarer διαχειρίζεται μία από τις μεγαλύτερες ειδικές εγκαταστάσεις κατασκευής φουσκωτών σκαφών στο Qingdao της Κίνας. Το εργοστάσιο των 12.000 m² είναι οργανωμένο σε έξι εξειδικευμένα εργαστήρια που λειτουργούν παράλληλα, προσφέροντάς μας την ικανότητα να παράγουμε πάνω από 15.000 σκάφη ετησίως στις γραμμές SUP, καγιάκ, βοηθητικών σκαφών, RIB και εξοπλισμού ασφαλείας.\n',
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: '  subtitle: Εγκαταστάσεις 12,000 m² με παραγωγή άνω των 15,000 σκαφών ετησίως και δυνατότητα επέκτασης\n',
    rep: "  subtitle: 'Εγκαταστάσεις 12.000 m² με παραγωγή άνω των 15.000 σκαφών ετησίως και δυνατότητα επέκτασης'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: '  - value: 12,000 m²\n',
    rep: "  - value: '12.000 m²'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Σκάφη που παράγονται ετησίως'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP, καγιάκ, σκάφη RIB, βοηθητικά σκάφη, εξοπλισμός ασφαλείας'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Παραγωγή σκαφών RIB'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: "    description: 'Εξειδικευμένο εργαστήριο κύτους υαλονήματος με 6 σταθμούς καλουπιών για κύτη SUP έως 7,6 m. Ο χώρος συγκόλλησης σωλήνων και συναρμολόγησης εξυπηρετεί 3–6 SUP ταυτόχρονα. Ετήσια χωρητικότητα SUP: 2.000+ σκάφη.'\n",
    rep: "    description: 'Εξειδικευμένο εργαστήριο κύτους υαλονήματος με 6 σταθμούς καλουπιών για κύτη σκαφών έως 7,6 m. Ο χώρος συγκόλλησης σωλήνων και συναρμολόγησης εξυπηρετεί 3–6 σκάφη ταυτόχρονα. Ετήσια χωρητικότητα RIB: 2.000+ σκάφη.'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2.000+ RIB/έτος'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Φουσκωτά σκάφη & SUP'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: '    output: 5,000+ μονάδες/έτος\n',
    rep: "    output: '5.000+ μονάδες/έτος'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 μονάδες | Σκάφος: 2–5 μονάδες | Καγιάκ/Βοηθητικό σκάφος: 10–50 μονάδες | Προσαρμοσμένο καλούπι: 200+ μονάδες'\n",
  },
  {
    f: 'src/data/pages/el/factory-capacity.yaml',
    find: '8,000+ σανίδες',
    rep: '8.000+ σανίδες',
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer opera una de las mayores instalaciones dedicadas a la fabricación de barcos inflables en Qingdao, China. Nuestra fábrica de 12.000 m² está organizada en seis talleres especializados que operan en paralelo, lo que nos da capacidad para producir más de 15.000 barcos al año en las líneas de SUP, kayaks, botes auxiliares, RIB y equipo de seguridad.\n',
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Barcos producidos anualmente'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP, kayaks, barcos RIB, botes auxiliares, equipo de seguridad'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '    output: 8,000 SUPs/año\n',
    rep: "    output: '8.000+ SUPs/año'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Producción de barcos RIB'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '    description: Taller de cascos de fibra de vidrio con 6 estaciones de moldeo para cascos SUP de hasta 7,6 m\n',
    rep: "    description: 'Taller especializado de cascos de fibra de vidrio con 6 estaciones de moldeo para cascos de barco de hasta 7,6 m. El área de soldadura y montaje de tubos maneja 3–6 barcos simultáneamente. Capacidad anual de RIB: 2.000+ barcos.'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2.000+ RIBs/año'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Botes inflables y SUP'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '    description: Líneas de producción multipropósito para botes inflables, SUPs y SUPs\n',
    rep: "    description: 'Líneas de producción multipropósito para botes inflables, kayaks y botes auxiliares. Las estaciones de soldadura de aire caliente, prensas dieléctricas de RF y puestos de ensamblaje se reconfiguran según la combinación de pedidos. Capacidad anual: 5.000+ unidades.'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '    output: 5,000 unidades/año\n',
    rep: "    output: '5.000+ unidades/año'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '    description: Área de producción en sala limpia para chalecos salvavidas y equipo de seguridad\n',
    rep: "    description: 'Área de producción en sala limpia separada para chalecos salvavidas y equipo de seguridad. Estaciones dedicadas de costura, inserción de espuma y pruebas. Capacidad anual de chalecos salvavidas: 50.000+ unidades.'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '    output: 50,000 chalecos salvavidas/año\n',
    rep: "    output: '50.000+ chalecos salvavidas/año'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '| SUP: 2–5 unidades',
    rep: '| Barco: 2–5 unidades',
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '| SUP/SUP:',
    rep: '| Kayak/Bote auxiliar:',
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: 'Capacidad anual de SUP: 8,000 tablas',
    rep: 'Capacidad anual de SUP: 8.000+ tablas',
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer ylläpitää yhtä Kiinan Qingdaon suurimmista ilmatäytettäviin veneisiin erikoistuneista tuotantolaitoksista. 12 000 m²:n tehtaamme on jaettu kuuteen erikoistuneeseen verstaaseen, jotka toimivat rinnakkain, mikä antaa meille kapasiteetin valmistaa yli 15 000 venettä vuodessa SUP-, kajakki-, jolla-, RIB- ja turvallisuusvarustelinjoilla.\n',
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: '  - value: 12,000 m²\n',
    rep: "  - value: '12 000 m²'\n",
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Vuosittain valmistetut veneet'\n",
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP-laudat, kajakit, RIB-veneet, jollat, turvallisuusvarusteet'\n",
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'RIB-veneiden valmistus'\n",
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: "    description: 'Erillinen lasikuitu runkoverstas, jossa on 6 muottiasemaa SUP-runkoille jopa 7,6 metriin. Putkien hitsaus- ja kokoonpanoalue käsittelee 3–6 SUP-venettä samanaikaisesti. Vuotuinen SUP-kapasiteetti: 2 000+ venettä.'\n",
    rep: "    description: 'Erillinen lasikuiturunkoverstas, jossa on 6 muottiasemaa venerunkoille jopa 7,6 metriin asti. Putkien hitsaus- ja kokoonpanoalue käsittelee 3–6 venettä samanaikaisesti. Vuotuinen RIB-kapasiteetti: 2 000+ venettä.'\n",
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2 000+ RIB-venettä/vuosi'\n",
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Ilmatäytettävät veneet ja SUP'\n",
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: '    output: 5,000+ kpl/vuosi\n',
    rep: "    output: '5 000+ kpl/vuosi'\n",
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: '| SUP: 2–5 yksikköä',
    rep: '| Vene: 2–5 yksikköä',
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: 'painistettaville',
    rep: 'ilmatäytettäville',
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: 'pelastusliivityä',
    rep: 'pelastusliivejä',
  },
  {
    f: 'src/data/pages/fi/factory-capacity.yaml',
    find: 'venettä vuodella',
    rep: 'venettä vuodessa',
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: "intro: afarer exploite l'une des plus grandes installations de fabrication de SUP gonflables dédiées à Qingdao, en Chine. Notre usine de 12 000 m² est organisée en six ateliers spécialisés opérant en parallèle, nous donnant la capacité de produire plus de 15 000 planches par an sur les lignes SUP et équipements de sécurité.\n",
    rep: "intro: afarer exploite l'une des plus grandes installations dédiées à la fabrication de bateaux gonflables à Qingdao, en Chine. Notre usine de 12 000 m² est organisée en six ateliers spécialisés opérant en parallèle, nous donnant la capacité de produire plus de 15 000 bateaux par an sur les lignes SUP, kayak, dériveurs, RIB et équipements de sécurité.\n",
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: '  - title: Production de planches SUP\n    description: Capacité de production élargie pour les planches SUP utilisant des lignes d’assemblage supplémentaires. Le collage des âmes drop-stitch, l’impression numérique et les postes d’assemblage fonctionnent simultanément.\n    output: Capacité SUP étendue\n',
    rep: "  - title: 'Production de bateaux RIB'\n    description: \"Atelier spécialisé de coques en fibre de verre avec 6 stations de moulage pour des coques de bateaux jusqu'à 7,6 m. La zone de soudage et d'assemblage des tubes traite 3–6 bateaux simultanément. Capacité annuelle de RIB : 2 000+ bateaux.\"\n    output: '2 000+ RIB/an'\n",
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: '  - title: Planches SUP et accessoires\n',
    rep: "  - title: 'Bateaux gonflables et SUP'\n",
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: "    description: 'Lignes de production polyvalentes pour planches SUP et accessoires. Postes de soudure à air chaud, presses diélectriques RF et postes d’assemblage sont reconfigurés en fonction du mix de commandes. Capacité annuelle : plus de 5 000 unités.'\n",
    rep: '    description: "Lignes de production polyvalentes pour bateaux gonflables, kayaks et dériveurs. Postes de soudure à air chaud, presses diélectriques RF et postes d\'assemblage sont reconfigurés en fonction du mix de commandes. Capacité annuelle : plus de 5 000 unités."\n',
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: "  moq: 'SUP : 5–10 unités | Moule personnalisé : 200+ unités'\n",
    rep: "  moq: 'SUP : 5–10 unités | Bateau : 2–5 unités | Kayak/Dériveur : 10–50 unités | Moule personnalisé : 200+ unités'\n",
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: 'label: Planches produites chaque année',
    rep: 'label: Bateaux produits chaque année',
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: 'detail: SUP et équipement de sécurité',
    rep: 'detail: SUP, kayaks, RIB, dériveurs et équipements de sécurité',
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: 'produisant 15 000+ unités par an',
    rep: 'produisant 15 000+ bateaux par an',
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: "intro: >-\n  afarer gestisce una delle più grandi strutture dedicate alla produzione di gommoni a Qingdao, in Cina. La nostra fabbrica di 12.000 m² è organizzata in sei officine specializzate che operano in parallelo, dandoci la capacità di produrre oltre 15.000 barche all'anno nelle linee SUP, kayak, tender, RIB e attrezzature di sicurezza.\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Barche prodotte annualmente'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP, kayak, imbarcazioni RIB, tender, attrezzature di sicurezza'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: "    output: 8.000 SUP all'anno\n",
    rep: '    output: "8.000+ SUP all\'anno"\n',
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Produzione di imbarcazioni RIB'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: "    description: 'Dedicated fiberglass hull workshop with 6 mould stations for SUP hulls up to 7.6 m. Tube welding and assembly area handles 3–6 SUPs simultaneously. Annual SUP capacity: 2,000+ boats.'\n",
    rep: '    description: "Officina specializzata di carene in fibra di vetro con 6 stazioni di stampaggio per carene di imbarcazioni fino a 7,6 m. L\'area di saldatura e assemblaggio dei tubi gestisce 3–6 barche contemporaneamente. Capacità annuale di RIB: 2.000+ barche."\n',
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: '    output: "2.000+ RIB all\'anno"\n',
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Gommoni e SUP'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '    output: 5.000 unità/anno\n',
    rep: "    output: '5.000+ unità/anno'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '    output: 50.000 giubbotti di salvataggio/anno\n',
    rep: "    output: '50.000+ giubbotti di salvataggio/anno'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 unità | Barca: 2–5 unità | Kayak/Tender: 10–50 unità | Stampo personalizzato: 200+ unità'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: 'Multi-purpose production lines for inflatable boats, SUPs, and SUPs.',
    rep: 'Linee di produzione multiuso per gommoni, kayak e tender.',
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: 'Capacità annuale di giubbotti di salvataggio: 50.000 unità',
    rep: 'Capacità annuale di giubbotti di salvataggio: 50.000+ unità',
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: 'Capacità annua di SUP: 8.000 tavole',
    rep: 'Capacità annua di SUP: 8.000+ tavole',
  },
  {
    f: 'src/data/pages/ja/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: '年間生産隻数'\n",
  },
  {
    f: 'src/data/pages/ja/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'RIBボート生産'\n",
  },
  {
    f: 'src/data/pages/ja/factory-capacity.yaml',
    find: "    description: '最大 7.6 m の SUP 船体用の 6 つのモールドステーションを備えたグラスファイバー船体専用のワークショップ。 チューブ溶接および組立エリアでは、3 つの SUP を同時に処理します。 年間RIB収容能力: 2,000隻以上。'\n",
    rep: "    description: '最大 7.6 m のボート船体用の 6 つのモールドステーションを備えたグラスファイバー船体専用のワークショップ。チューブ溶接および組立エリアでは、3–6 隻のボートを同時に処理します。年間 RIB 生産能力: 2,000隻以上。'\n",
  },
  {
    f: 'src/data/pages/ja/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '年間2,000隻以上のRIB'\n",
  },
  {
    f: 'src/data/pages/ja/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'ゴムボートとSUP'\n",
  },
  {
    f: 'src/data/pages/ja/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10台 | ボート: 2–5隻 | カヤック/ディンギー: 10–50台 | カスタムモールド: 200+台'\n",
  },
  {
    f: 'src/data/pages/ja/factory-capacity.yaml',
    find: 'ディンギー、SUP、および',
    rep: 'ディンギー、RIB、および',
  },
  {
    f: 'src/data/pages/ja/factory-capacity.yaml',
    find: 'detail: SUP、カヤック、SUP、ディンギー、',
    rep: 'detail: SUP、カヤック、RIB、ディンギー、',
  },
  {
    f: 'src/data/pages/ko/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: '연간 생산 보트 수'\n",
  },
  {
    f: 'src/data/pages/ko/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'RIB 보트 생산'\n",
  },
  {
    f: 'src/data/pages/ko/factory-capacity.yaml',
    find: "    description: '최대 7.6m 길이의 SUP 선체를 위한 6개의 몰드 스테이션을 갖춘 유리섬유 선체 전용 작업장입니다. 튜브 용접 및 조립 영역은 3–6 SUP를 동시에 처리합니다. 연간 SUP 수용력: 2,000척 이상의 보트.'\n",
    rep: "    description: '최대 7.6m 길이의 보트 선체를 위한 6개의 몰드 스테이션을 갖춘 유리섬유 선체 전용 작업장입니다. 튜브 용접 및 조립 영역은 3–6척의 보트를 동시에 처리합니다. 연간 RIB 수용력: 2,000척 이상의 보트.'\n",
  },
  {
    f: 'src/data/pages/ko/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '연간 2,000척 이상 RIB'\n",
  },
  {
    f: 'src/data/pages/ko/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: '풍선 보트 & SUP'\n",
  },
  {
    f: 'src/data/pages/ko/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10대 | 보트: 2–5척 | 카약/딩기: 10–50대 | 맞춤 금형: 200+대'\n",
  },
  {
    f: 'src/data/pages/ko/factory-capacity.yaml',
    find: '딩기, SUP 및',
    rep: '딩기, RIB 및',
  },
  {
    f: 'src/data/pages/ko/factory-capacity.yaml',
    find: 'detail: SUP, 카약, SUP, 소형 보트,',
    rep: 'detail: SUP, 카약, RIB, 소형 보트,',
  },
  {
    f: 'src/data/pages/ko/factory-capacity.yaml',
    find: '교대당 50개 이상의 보드를',
    rep: '교대당 50–80개의 보드를',
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer beheert een van de grootste specifieke productiefaciliteiten voor opblaasbare boten in Qingdao, China. Onze fabriek van 12.000 m² is georganiseerd in zes gespecialiseerde werkplaatsen die parallel werken, wat ons de capaciteit geeft om jaarlijks meer dan 15.000 boten te produceren op de lijnen voor SUP, kajaks, bijboten, RIB en veiligheidsuitrusting.\n',
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Jaarlijks geproduceerde boten'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: '    detail: "SUP\'s, kajaks, RIB-boten, bijboten, veiligheidsuitrusting"\n',
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: "    output: 8.000 SUP's/jaar\n",
    rep: '    output: "8.000+ SUP\'s/jaar"\n',
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Productie van RIB-boten'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '    description: "Speciale glasvezelrompwerkplaats met 6 malstations voor SUP-rompen tot 7,6 m. Las- en montagegebied voor buizen verwerkt 3–6 SUP\'s gelijktijdig. Jaarlijkse SUP-capaciteit: 2.000+ boten."\n',
    rep: "    description: 'Speciale glasvezelrompwerkplaats met 6 malstations voor bootsrompen tot 7,6 m. Las- en montagegebied voor buizen verwerkt 3–6 boten gelijktijdig. Jaarlijkse RIB-capaciteit: 2.000+ boten.'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: '    output: "2.000+ RIB\'s/jaar"\n',
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Opblaasbare boten & SUP'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '    output: 5.000 eenheden/jaar\n',
    rep: "    output: '5.000+ eenheden/jaar'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '    output: 50.000 reddingsvesten per jaar\n',
    rep: "    output: '50.000+ reddingsvesten per jaar'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 stuks | Boot: 2–5 stuks | Kajak/Bijboot: 10–50 stuks | Aangepaste mal: 200+ stuks'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: 'SUP-capaciteit: 8.000 boards',
    rep: 'SUP-capaciteit: 8.000+ boards',
  },
  {
    f: 'src/data/pages/no/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer driver et av de største dedikerte produksjonsanleggene for oppblåsbare båter i Qingdao i Kina. Fabrikken vår på 12 000 m² er organisert i seks spesialiserte verksteder som opererer parallelt, noe som gir oss kapasitet til å produsere over 15 000 båter årlig på tvers av linjene for SUP, kajakk, joller, RIB og sikkerhetsutstyr.\n',
  },
  {
    f: 'src/data/pages/no/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Båter produsert årlig'\n",
  },
  {
    f: 'src/data/pages/no/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP-brett, kajakker, RIB-båter, joller, sikkerhetsutstyr'\n",
  },
  {
    f: 'src/data/pages/no/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Produksjon av RIB-båter'\n",
  },
  {
    f: 'src/data/pages/no/factory-capacity.yaml',
    find: "    description: 'Dedikert glassfiber skrogverksted med 6 formstasjoner for SUP-skrog opp til 7,6 m. Rørsveise- og monteringsområde håndterer 3–6 SUP-er samtidig. Årlig SUP-kapasitet: 2.000+ båter.'\n",
    rep: "    description: 'Dedikert glassfiberskrogverksted med 6 formstasjoner for båtskrog opp til 7,6 m. Rørsveise- og monteringsområde håndterer 3–6 båter samtidig. Årlig RIB-kapasitet: 2 000+ båter.'\n",
  },
  {
    f: 'src/data/pages/no/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2 000+ RIB i året'\n",
  },
  {
    f: 'src/data/pages/no/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Oppblåsbare båter og SUP'\n",
  },
  {
    f: 'src/data/pages/no/factory-capacity.yaml',
    find: '| SUP: 2–5 enheter',
    rep: '| Båt: 2–5 enheter',
  },
  {
    f: 'src/data/pages/no/factory-capacity.yaml',
    find: 'Årlig kapasitet: 5.000+ enheter.',
    rep: 'Årlig kapasitet: 5 000+ enheter.',
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer prowadzi jedną z największych wyspecjalizowanych fabryk łodzi nadmuchiwanych w Qingdao w Chinach. Nasza fabryka o powierzchni 12 000 m² jest zorganizowana w sześć wyspecjalizowanych warsztatów działających równolegle, co daje nam możliwość produkcji ponad 15 000 łodzi rocznie w liniach SUP, kajaków, łodzi pomocniczych, RIB i sprzętu bezpieczeństwa.\n',
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Łodzie produkowane rocznie'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'deski SUP, kajaki, łodzie RIB, łodzie pomocnicze, sprzęt bezpieczeństwa'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '    output: 8 000 SUP rocznie\n',
    rep: "    output: '8 000+ SUP rocznie'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Produkcja łodzi RIB'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: "    description: 'Dedykowany warsztat kadłubów z włókna szklanego z 6 stanowiskami form dla kadłubów SUP do 7,6 m. Obszar spawania i montażu rur obsługuje 3–6 SUP-y jednocześnie. Roczna wydajność SUP: ponad 2 000 łodzi.'\n",
    rep: "    description: 'Dedykowany warsztat kadłubów z włókna szklanego z 6 stanowiskami formierskimi dla kadłubów łodzi do 7,6 m. Obszar spawania i montażu rur obsługuje 3–6 łodzi jednocześnie. Roczna wydajność RIB: ponad 2 000 łodzi.'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2 000+ RIB rocznie'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Łodzie nadmuchiwane i SUP'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '    output: 5 000 jednostek/rok\n',
    rep: "    output: '5 000+ jednostek/rok'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '    output: 50 000 kamizelek ratunkowych/rok\n',
    rep: "    output: '50 000+ kamizelek ratunkowych/rok'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 szt. | Łódź: 2–5 szt. | Kajak/Łódź pomocnicza: 10–50 szt. | Indywidualna forma: 200+ szt.'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: 'kajaków i SUP.',
    rep: 'kajaków i łodzi pomocniczych.',
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: 'Roczna zdolność produkcyjna SUP: 8 000 desek',
    rep: 'Roczna zdolność produkcyjna SUP: 8 000+ desek',
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  A afarer opera uma das maiores instalações dedicadas à fabricação de barcos infláveis em Qingdao, na China. A nossa fábrica de 12.000 m² está organizada em seis oficinas especializadas que operam em paralelo, o que nos dá capacidade para produzir mais de 15.000 barcos por ano nas linhas de SUP, caiaques, dingues, RIB e equipamentos de segurança.\n',
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Barcos produzidos anualmente'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUPs, caiaques, barcos RIB, dingues, equipamento de segurança'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '    output: 8.000 SUPs/ano\n',
    rep: "    output: '8.000+ SUPs/ano'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Produção de Barcos RIB'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '    description: Oficina de cascos de fibra de vidro com 6 estações de molde para cascos SUP até 7,6 m\n',
    rep: "    description: 'Oficina especializada de cascos de fibra de vidro com 6 estações de molde para cascos de barco até 7,6 m. A área de soldadura e montagem de tubos manuseia 3–6 barcos simultaneamente. Capacidade anual de RIB: 2.000+ barcos.'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2.000+ RIBs/ano'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Botes infláveis e SUP'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '    description: Linhas de produção multiuso para botes infláveis, caiaques e dingues\n',
    rep: "    description: 'Linhas de produção multiuso para botes infláveis, caiaques e dingues. As estações de soldadura de ar quente, prensas dielétricas de RF e postos de montagem são reconfigurados conforme o mix de pedidos. Capacidade anual: 5.000+ unidades.'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '    output: 5.000 unidades/ano\n',
    rep: "    output: '5.000+ unidades/ano'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '    description: Área de produção em sala limpa para coletes salva-vidas e equipamentos de segurança\n',
    rep: "    description: 'Área de produção em sala limpa separada para coletes salva-vidas e equipamentos de segurança. Estações dedicadas de costura, inserção de espuma e testes. Capacidade anual de coletes salva-vidas: 50.000+ unidades.'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '    output: 50.000 coletes salva-vidas/ano\n',
    rep: "    output: '50.000+ coletes salva-vidas/ano'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '| SUP: 2–5 unidades',
    rep: '| Barco: 2–5 unidades',
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: 'Capacidade anual de SUP: 8.000 pranchas',
    rep: 'Capacidade anual de SUP: 8.000+ pranchas',
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer operează una dintre cele mai mari fabrici dedicate producției de bărci gonflabile din Qingdao, China. Fabrica noastră de 12.000 m² este organizată în șase ateliere specializate care funcționează în paralel, oferindu-ne capacitatea de a produce peste 15.000 de bărci anual pe liniile SUP, caiace, bărci auxiliare, RIB și echipamente de siguranță.\n',
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: '  subtitle: Facilitate de 12,000 m² care produce 15,000+ ambarcațiuni pe an, cu spațiu pentru extindere\n',
    rep: "  subtitle: 'Facilitate de 12.000 m² care produce 15.000+ ambarcațiuni pe an, cu spațiu pentru extindere'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: '  - value: 12,000 m²\n',
    rep: "  - value: '12.000 m²'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Bărci produse anual'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP, caiace, bărci RIB, bărci auxiliare, echipament de siguranță'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Producția de bărci RIB'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: "    description: 'Atelier dedicat pentru carene din fibră de sticlă cu 6 stații de matrițe pentru carene SUP de până la 7,6 m. Zona de sudare și asamblare a tuburilor manipulă 3–6 SUP-uri simultan. Capacitate anuală SUP: peste 2.000 de ambarcațiuni.'\n",
    rep: "    description: 'Atelier dedicat pentru carene din fibră de sticlă cu 6 stații de matrițe pentru carene de bărci de până la 7,6 m. Zona de sudare și asamblare a tuburilor manipulează 3–6 bărci simultan. Capacitate anuală RIB: peste 2.000 de ambarcațiuni.'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2.000+ RIB/an'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Bărci gonflabile și SUP'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: "    description: 'Linii de producție multi- scop pentru bărci inflabile, caiace și SUP-uri. Stațiile de sudură cu aer cald, presele dielectrice RF și posturile de asamblare sunt reconfigurate în funcție de mixul de comenzi. Capacitate anuală: peste 5.000 de unități.'\n",
    rep: "    description: 'Linii de producție multifuncționale pentru bărci gonflabile, caiace și bărci auxiliare. Stațiile de sudură cu aer cald, presele dielectrice RF și posturile de asamblare sunt reconfigurate în funcție de mixul de comenzi. Capacitate anuală: peste 5.000 de unități.'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: '    output: 5,000+ unități/an\n',
    rep: "    output: '5.000+ unități/an'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: '    output: 50,000+ veste de salvare/an\n',
    rep: "    output: '50.000+ veste de salvare/an'\n",
  },
  {
    f: 'src/data/pages/ro/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 unități | Barcă: 2–5 unități | Caiac/Barcă auxiliară: 10–50 unități | Matriță personalizată: 200+ unități'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer управляет одним из крупнейших специализированных производств надувных лодок в Циндао, Китай. Наша фабрика площадью 12 000 м² разделена на шесть специализированных цехов, работающих параллельно, что даёт нам возможность выпускать более 15 000 лодок в год по направлениям SUP, байдарки, шлюпки, RIB и средства безопасности.\n',
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Лодки, производимые ежегодно'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP-доски, байдарки, лодки RIB, шлюпки, снаряжение безопасности'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '    output: 8 000 SUP в год\n',
    rep: "    output: '8 000+ SUP в год'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Производство лодок RIB'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: "    description: 'Специализированный цех стеклопластиковых корпусов с 6 формовочными станциями для SUP-корпусов до 7,6 м. Участок сварки и сборки труб обрабатывает 3–6 SUP одновременно. Годовая мощность SUP: более 2 000 лодок.'\n",
    rep: "    description: 'Специализированный цех стеклопластиковых корпусов с 6 формовочными станциями для корпусов лодок до 7,6 м. Участок сварки и сборки труб обрабатывает 3–6 лодок одновременно. Годовая мощность RIB: более 2 000 лодок.'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2 000+ RIB в год'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Надувные лодки и SUP'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '    output: 5 000 единиц в год\n',
    rep: "    output: '5 000+ единиц в год'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '    output: 50 000 спасательных жилетов в год\n',
    rep: "    output: '50 000+ спасательных жилетов в год'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 шт. | Лодка: 2–5 шт. | Байдарка/Шлюпка: 10–50 шт. | Индивидуальная форма: 200+ шт.'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: 'Годовая мощность производства SUP: 8 000 досок',
    rep: 'Годовая мощность производства SUP: 8 000+ досок',
  },
  {
    f: 'src/data/pages/sv/factory-capacity.yaml',
    find: 'intro: >-\n  afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, SUP, SUP, SUP, and safety\n  equipment lines.\n',
    rep: 'intro: >-\n  afarer driver ett av de största dedikerade produksionsanläggningarna för uppblåsbara båtar i Qingdao i Kina. Vår fabrik på 12 000 m² är organiserad i sex specialiserade verkstäder som arbetar parallellt, vilket ger oss kapacitet att producera över 15 000 båtar årligt inom linjerna för SUP, kajaker, jollar, RIB och säkerhetsutrustning.\n',
  },
  {
    f: 'src/data/pages/sv/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Båtar tillverkade per år'\n",
  },
  {
    f: 'src/data/pages/sv/factory-capacity.yaml',
    find: '    detail: SUPs, SUPs, RIBs, SUPs, safety gear\n',
    rep: "    detail: 'SUP-brädor, kajaker, RIB-båtar, jollar, säkerhetsutrustning'\n",
  },
  {
    f: 'src/data/pages/sv/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'Produktion av RIB-båtar'\n",
  },
  {
    f: 'src/data/pages/sv/factory-capacity.yaml',
    find: "    description: 'Dedikerad glasfiber skrovverkstad med 6 formstationer för SUP-skrov upp till 7,6 m. Slangsvejsnings- och monteringsområde hanterar 3–6 SUP samtidigt. Årlig SUP-kapacitet: 2 000+ båtar.'\n",
    rep: "    description: 'Dedikerad verkstad för glasfiberskrov med 6 formstationer för båtskrov upp till 7,6 m. Slangsvetsnings- och monteringsområde hanterar 3–6 båtar samtidigt. Årlig RIB-kapacitet: 2 000+ båtar.'\n",
  },
  {
    f: 'src/data/pages/sv/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2 000+ RIB/år'\n",
  },
  {
    f: 'src/data/pages/sv/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Uppblåsbara båtar & SUP'\n",
  },
  {
    f: 'src/data/pages/sv/factory-capacity.yaml',
    find: '    output: 5 000+ enheter/år\n',
    rep: "    output: '5 000+ enheter/år'\n",
  },
  {
    f: 'src/data/pages/sv/factory-capacity.yaml',
    find: '| SUP: 2–5 enheter',
    rep: '| Båt: 2–5 enheter',
  },
  {
    f: 'src/data/pages/th/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'จำนวนเรือที่ผลิตต่อปี'\n",
  },
  {
    f: 'src/data/pages/th/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'การผลิตเรือ RIB'\n",
  },
  {
    f: 'src/data/pages/th/factory-capacity.yaml',
    find: "    description: 'โรงปฏิบัติงานตัวเรือไฟเบอร์กลาสโดยเฉพาะพร้อมสถานีแม่พิมพ์ 6 จุดสำหรับตัวเรือ SUP สูงถึง 7.6 ม. พื้นที่เชื่อมและประกอบท่อรองรับ 3–6 SUPs พร้อมกัน ความจุ SUP ต่อปี: 2,000+ ลำ'\n",
    rep: "    description: 'โรงปฏิบัติการตัวเรือไฟเบอร์กลาสโดยเฉพาะพร้อมสถานีแม่พิมพ์ 6 จุดสำหรับตัวเรือ RIB สูงถึง 7.6 ม. พื้นที่เชื่อมและประกอบท่อรองรับ 3–6 ลำพร้อมกัน ความจุ RIB ต่อปี: 2,000+ ลำ'\n",
  },
  {
    f: 'src/data/pages/th/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: '2,000+ เรือ RIB/ปี'\n",
  },
  {
    f: 'src/data/pages/th/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'เรือเป่าลมและ SUP'\n",
  },
  {
    f: 'src/data/pages/th/factory-capacity.yaml',
    find: '    output: 5,000+ units/year\n',
    rep: "    output: '5,000+ หน่วย/ปี'\n",
  },
  {
    f: 'src/data/pages/th/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 ลำ | เรือ: 2–5 ลำ | เรือคายัค/เรือเล็ก: 10–50 ลำ | แม่พิมพ์แบบกำหนดเอง: 200+ ลำ'\n",
  },
  {
    f: 'src/data/pages/th/factory-capacity.yaml',
    find: 'เรือบด SUP และ',
    rep: 'เรือเล็ก RIB และ',
  },
  {
    f: 'src/data/pages/th/factory-capacity.yaml',
    find: 'detail: SUP, เรือคายัค, SUP, เรือบด,',
    rep: 'detail: SUP, เรือคายัค, RIB, เรือเล็ก,',
  },
  {
    f: 'src/data/pages/tr/factory-capacity.yaml',
    find: '    label: Boats produced annually\n',
    rep: "    label: 'Yılda üretilen tekneler'\n",
  },
  {
    f: 'src/data/pages/tr/factory-capacity.yaml',
    find: '  - title: SUP Boat Production\n',
    rep: "  - title: 'RIB Tekne Üretimi'\n",
  },
  {
    f: 'src/data/pages/tr/factory-capacity.yaml',
    find: "    description: \"7,6 m'ye kadar SUP gövdeler için 6 kalıp istasyonlu özel fiberglas gövde atölyesi. Boru kaynağı ve montaj alanı 3 — SUP'yi aynı anda yönetir. Yıllık SUP kapasitesi: 2.000'den fazla tekne.\"\n",
    rep: '    description: "7,6 m\'ye kadar bot gövdeleri için 6 kalıp istasyonlu özel fiberglas gövde atölyesi. Boru kaynağı ve montaj alanı 3–6 tekneyi aynı anda yönetir. Yıllık RIB kapasitesi: 2.000\'den fazla tekne."\n',
  },
  {
    f: 'src/data/pages/tr/factory-capacity.yaml',
    find: '    output: 2,000+ RIBs/year\n',
    rep: "    output: 'Yılda 2.000+ RIB'\n",
  },
  {
    f: 'src/data/pages/tr/factory-capacity.yaml',
    find: '  - title: Inflatable Boat & SUP\n',
    rep: "  - title: 'Şişme Bot ve SUP'\n",
  },
  {
    f: 'src/data/pages/tr/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | SUP: 2–5 units | SUP/SUP: 10–50 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 adet | Bot: 2–5 adet | Kano/Bot: 10–50 adet | Özel kalıp: 200+ adet'\n",
  },
  {
    f: 'src/data/pages/tr/factory-capacity.yaml',
    find: 'bot, SUP ve',
    rep: 'bot, RIB ve',
  },
  {
    f: 'src/data/pages/tr/factory-capacity.yaml',
    find: "detail: SUP'ler, kanolar, SUP'ler, botlar",
    rep: "detail: SUP'ler, kanolar, RIB'ler, botlar",
  },
  {
    f: 'src/data/pages/factory-capacity.yaml',
    find: 'intro: afarer operates one of the largest dedicated inflatable SUP manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boards annually across SUP and safety equipment lines.\n',
    rep: 'intro: afarer operates one of the largest dedicated inflatable boat manufacturing facilities in Qingdao, China. Our 12,000 m² factory is organized into six specialized workshops operating in parallel, giving us the capacity to produce over 15,000 boats annually across SUP, kayak, dinghy, RIB, and safety equipment lines.\n',
  },
  {
    f: 'src/data/pages/factory-capacity.yaml',
    find: "  - title: SUP Board Production\n    description: 'Expanded production capacity for SUP boards utilizing additional assembly lines. Drop-stitch core bonding, digital printing, and assembly stations run concurrently.'\n    output: 'Expanded SUP capacity'\n",
    rep: "  - title: 'RIB Boat Production'\n    description: 'Specialized fiberglass hull workshop with 6 moulding stations for boat hulls up to 7.6 m. Tube welding and assembly area handles 3–6 boats simultaneously. Annual RIB capacity: 2,000+ boats.'\n    output: '2,000+ RIBs/year'\n",
  },
  {
    f: 'src/data/pages/factory-capacity.yaml',
    find: '  - title: SUP Board & Accessory\n',
    rep: "  - title: 'Inflatable Boat & SUP'\n",
  },
  {
    f: 'src/data/pages/factory-capacity.yaml',
    find: "  moq: 'SUP: 5–10 units | Custom mould: 200+ units'\n",
    rep: "  moq: 'SUP: 5–10 units | Boat: 2–5 units | Kayak/Dinghy: 10–50 units | Custom mould: 200+ units'\n",
  },
  {
    f: 'src/data/pages/factory-capacity.yaml',
    find: 'label: Boards produced annually',
    rep: 'label: Boats produced annually',
  },
  {
    f: 'src/data/pages/factory-capacity.yaml',
    find: 'detail: SUPs and safety gear',
    rep: 'detail: SUPs, kayaks, RIBs, dinghys, safety gear',
  },
  {
    f: 'src/data/pages/factory-capacity.yaml',
    find: 'Multi-purpose production lines for SUP boards and accessories.',
    rep: 'Multi-purpose production lines for inflatable boats, kayaks and dinghies.',
  },
];
