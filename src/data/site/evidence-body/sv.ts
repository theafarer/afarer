import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: 'Australisk paddelklubbsförening',
    product: 'Klubbflotta — SUP + säkerhetsutrustning',
    industry: 'Fritid / Utbildning',
    challenge:
      'En förening med 15 klubbar behövde standardisera utrustningen med hållbara nybörjarvänliga SUP:er, CE-certifierade flytvästar och en centraliserad upphandlingsmodell för lägre kostnader per klubb.',
    solution:
      'Standardiserade en klubbflotta i 3 nivåer (nybörjare, fortsättning, instruktör). Designade däckgrafik i klubbfärger med klubblogotyper. Implementerade centrallager med kvartalsvis distribution per klubb.',
    result:
      '350 enheter över 15 klubbar. 28% kostnadsminskning genom samordnade inköp. 92% av medlemmarna nöjda med utrustningens kvalitet.',
    outcomeMetrics: [
      {
        label: 'Utrustade klubbar',
        value: '15',
      },
      {
        label: 'Levererade enheter',
        value: '350',
      },
      {
        label: 'Kostnadsminskning',
        value: '28%',
      },
      {
        label: 'Medlemsnöjdhet',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Australisk distributör',
    product: 'CE-certifierad SUP-serie',
    industry: 'Marin / Detaljhandel',
    challenge:
      'En australisk distributör krävde en CE-certifierad SUP-serie med skräddarsydda däckfärger, uppgraderad PVC-option och överensstämmelse med australisk standard AS 1799.',
    solution:
      'Tillverkade förproduktionsprover i 4 färgvarianter, anskaffade militärkvalitets-PVC och samordnade oberoende AS 1799-efterlevnadstester.',
    result: 'SUP-serie med 3 modeller lanserad på AU/NZ-marknaden. Följdes av avtal med en butikskedja med 12 butiker.',
    outcomeMetrics: [
      {
        label: 'Lanserade modeller',
        value: '3',
      },
      {
        label: 'Butiker',
        value: '12',
      },
      {
        label: 'Efterlevnad',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanadensisk outdoorbutikskedja',
    product: 'SUP med eget varumärke + tillbehörslinje',
    industry: 'Detaljhandel',
    challenge:
      'En kanadensisk återförsäljare med 25 butiker krävde en exklusiv SUP-serie med eget varumärke med tvåspråkig fransk/engelsk förpackning, kallspecifikationer och kanadensiska båtföreskrifter.',
    solution:
      'Utvecklade 4 SUP-modeller med cold-flex PVC-förening godkänd till -15°C. Tillverkade tvåspråkig butiksförpackning med kanadensiska regelmärkningar. Tillhandahöll displayer och utbildningsmaterial för personalen.',
    result:
      'Exklusiv linje lanserad i 25 butiker. 3,800 enheter sålda under första säsongen. Återförsäljaren förnyade avtalet med 3 år med utökat antal SKU:er.',
    outcomeMetrics: [
      {
        label: 'Butiker',
        value: '25',
      },
      {
        label: 'Enheter första säsongen',
        value: '3,800',
      },
      {
        label: 'Avtal',
        value: 'förnyelse i 3 år',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karibisk lyxresortgrupp',
    product: 'Resortflotta — SUP',
    industry: 'Gästfrihet / Turism',
    challenge:
      'En grupp med 5 resorter behövde en enhetlig flotta av hyr-SUP:er med konsekvent branding, UV-tåliga material för tropisk sol och en 5-årig ersättningsplan.',
    solution:
      'Konstruerade ett skräddarsytt SUP-flottprogram med 3 modeller med UV-stabiliserad PVC, däckgrafik med resortprofil och stegvis leveransplan. Tillhandahöll personalutbildning och ett dedikerat reservdelskit per resort.',
    result:
      '180 enheter levererade till 5 resorter. Repeterorder för 2 nya anläggningar. 40% lägre kostnad per enhet jämfört med tidigare leverantörer.',
    outcomeMetrics: [
      {
        label: 'Levererade enheter',
        value: '180',
      },
      {
        label: 'Resorter',
        value: '5',
      },
      {
        label: 'Kostnadsminskning',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Årlig brädcersättningskostnad',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Flottstillestånd (dagar/år)',
        before: '45',
        after: '8',
      },
      {
        label: 'Gästnöjdhetspoäng',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globalt teknikföretag',
    product: 'Företagshälsa — SUP-flotta',
    industry: 'Företag / Hälsa',
    challenge:
      'Ett Fortune 500-teknikföretag ville lansera ett vattenbaserat hälsoprogram för anställda på 4 globala campus vid sjöar: 60 SUP:er med företagsbranding, lagringslösningar och instruktörsutbildning.',
    solution:
      'Levererade en flotta stabila all-around-SUP:ar med däckgrafik i företagets logotyp. Konstruerade väderskyddade förvaringsställ på plats. Certifierade 12 interna instruktörer via afarers utbildningsprogram.',
    result:
      'Program lanserat på 4 campus. 2,400+ medarbetardeltaganden under första året. 94% medarbetarnöjdhet. Upptaget i företagets hållbarhetsrapport.',
    outcomeMetrics: [
      {
        label: 'Campus',
        value: '4',
      },
      {
        label: 'Deltaganden',
        value: '2,400+',
      },
      {
        label: 'Nöjdhet',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Karibisk kryssningslinje',
    product: 'Ombordaktivitetsflotta — SUP',
    industry: 'Gästfrihet / Kryssning',
    challenge:
      'En stor kryssningslinje ville erbjuda SUP som landutflykt på 7 fartyg: kompakt ombordförvaring, snabba upp- och tömningscykler samt enhetlig branding över hela flottan.',
    solution:
      'Utvecklade ett kryssningsspecifikt SUP-paket med snabbinflationsventilsystem, kompakt ryggsäcksförvaring och däckgrafik med fartygsprofil. Tillhandahöll dedikerad utbildning för landteamet och reservdelsskåp i 3 hamnar.',
    result:
      'Program lanserat på 7 fartyg. 15,000+ gästdeltaganden under första säsongen. 4.6★ genomsnittsbetyg på utflykter. Utökat till 3 ytterligare fartyg under år 2.',
    outcomeMetrics: [
      {
        label: 'Fartyg',
        value: '7',
      },
      {
        label: 'Gästdeltaganden',
        value: '15,000+',
      },
      {
        label: 'Betyg',
        value: '4.6★',
      },
      {
        label: 'Utbyggnad år 2',
        value: '+3 fartyg',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Europeiskt DTC-vattensportsvarumärke',
    product: 'Varumärkes-SUP + tillbehörslinje',
    industry: 'E-handel / Detaljhandel',
    challenge:
      'Ett snabbväxande DTC-varumärke behövde ett komplett SUP-paket (bräda, pump, paddel, leash, väska) med premiumförpackning för e-handel — DHL/FedEx-leverans direkt till kunden utan skador.',
    solution:
      'Utvecklade en co-branded produktlinje med anpassad EPS-kärnutformning, proprietär drop-stitch-teknik för högre tryck och butiksklara dubbelväggo wellpappkartonger med skyddsinlägg. Integrerade QR-kodbaserad äkthetsverifiering och garantiregistrering.',
    result:
      'SUP-linje med 3 modeller lanserad på 75 dagar. 15,000+ enheter de första 12 månaderna. 4.8★ genomsnittsbetyg på 2,000+ recensioner. 0.3% transportskador.',
    outcomeMetrics: [
      {
        label: 'Modeller',
        value: '3',
      },
      {
        label: 'Enheter',
        value: '15,000+',
      },
      {
        label: 'Genomsnittsbetyg',
        value: '4.8★',
      },
      {
        label: 'Skadegrad',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Europeisk sjöresort- och uthyrningsoperatör',
    product: 'Hyrflotta — SUP, flytvästar, tillbehör',
    industry: 'Uthyrning / Turism',
    challenge:
      'En sjöresortoperatör med 6 uthyrningsstationer behövde en extra hållbar hyr-SUP-flotta med snabbtorkande system, skadetålig konstruktion och ett förutsägbart flerårigt ersättningsschema.',
    solution:
      'Levererade hyr-SUP:ar i kommersiell kvalitet med förstärkta railband, snabbtorkande EVA-däck och UV-stabiliserad PVC. Utvecklade ett färgkodat slitageövervakningssystem med årliga konditionsrapporter.',
    result:
      '200 SUP:ar utplacerade på 6 stationer. Årliga underhållskostnader minskade med 55%. Utrustningens livslängd förlängd från 2 till 4 år.',
    outcomeMetrics: [
      {
        label: 'Hyrbestationer',
        value: '6',
      },
      {
        label: 'Utplacerade SUP:ar',
        value: '200',
      },
      {
        label: 'Underhållskostnad',
        value: '-55%',
      },
      {
        label: 'Livslängd',
        value: '4 år',
      },
    ],
    beforeAfter: [
      {
        label: 'Genomsnittlig brädlivslängd',
        before: '2 år',
        after: '4 år',
      },
      {
        label: 'Årligt underhåll per bräda',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Hyrintäkt per bräda/säsong',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridanskt fiskecharterföretag',
    product: 'Skräddarsydd fiske-SUP-flotta',
    industry: 'Fiske / Charter',
    challenge:
      'En fiskecharteroperatör i Florida ville lägga till SUP-fisketurer: stabila plattformar med integrerade coolerfästen, spöhållarräls och kompatibilitet med ekolodsgivare.',
    solution:
      'Anpassade den befintliga stabila SUP-plattformen med 4 inbyggda spöhållare, ett avtagbart monteringssystem för kylbox och ett vattentätt scupperfäste för ekolodsgivare. Tillämpade flottpriser och ett säsongsbundet ersättningsprogram.',
    result:
      'SUP-fisketurer lanserade som en ny intäktskälla. 45% av de befintliga charterkunderna bokade SUP-turer. Flottan utökad från 8 till 20 brädor på 2 säsonger.',
    outcomeMetrics: [
      {
        label: 'Initial flotta',
        value: '8',
      },
      {
        label: 'Flotta år 2',
        value: '20',
      },
      {
        label: 'Charter-korsförsäljning',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: 'Internationell humanitär organisation',
    product: 'Räddnings- och hjälpgummibåtar',
    industry: 'NGO / Humanitär hjälp',
    challenge:
      'En internationell humanitär organisation behövde 50 robusta gummibåtar för räddningsinsatser vid översvämningar i Sydostasien: lätta för helikoptertransport och reparerbara på fältet.',
    solution:
      'Tillverkade 50 förstärkta uppblåsbara båtar med självtömmande bottnar, redundans med flera kammar och grepliner runt omkretsen. Levererade fältreparationskit med piktograminstruktioner. Utbildade 20 lokala tekniker.',
    result:
      '50 båtar utplacerade i 3 översvämningsbenägna regioner. Använda i 12 större räddningsinsatser under de första 6 månaderna. 0 rapporterade utrustningsfel.',
    outcomeMetrics: [
      {
        label: 'Utplacerade båtar',
        value: '50',
      },
      {
        label: 'Räddningsinsatser',
        value: '12',
      },
      {
        label: 'Felfrekvens',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japanskt livsstilsvarumärke',
    product: 'Co-branded SUP-linje',
    industry: 'OEM / Varumärke',
    challenge:
      'Ett premium-japanskt livsstilsvarumärke ville ta sig in på vattensportsmarknaden med en co-branded SUP-linje: minimalistisk design, miljövänliga material och precisionstillverkning.',
    solution:
      'Skapade specialanpassade formar med slankare railprofil. Anskaffade FSC-certifierade bambuinlägg på däcket och återvunna PVC-alternativ. Utvecklade en premium-uppackningsupplevelse med QR-kodade skötselguider på japanska.',
    result:
      'Co-branded linje med 3 modeller lanserad på Tokyo Marine Show. 2,800 enheter sålda i förhand före den publika lanseringen. Omnämnda i 5 japanska livsstilspublikationer.',
    outcomeMetrics: [
      {
        label: 'Modeller',
        value: '3',
      },
      {
        label: 'Sålda i förhand',
        value: '2,800',
      },
      {
        label: 'Medieomnämningar',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Amerikansk bostadsförening vid sjön',
    product: 'Samhällsanläggning — SUP-flotta',
    industry: 'Fastigheter / Samhälle',
    challenge:
      'En lyxbostadsförening vid sjön ville erbjuda SUP:er som bekvämlighet för boende: underhållsfri flotta, säker förvaring vid stranden och ett självbetjäningsutlåningssystem för 200+ hem.',
    solution:
      'Levererade 15 SUP:ar i kommersiell kvalitet med ett väderskyddat förvaringssystem med skåp. Utformade QR-kodbaserad självutlåning med digital integrering av ansvarsfriskrivningar. Tillhandahöll säsongsbundet underhåll.',
    result:
      '85% av hushållen använde SUP-anläggningen under första säsongen. Fastighetsvärden i delen vid sjön ökade med 7%. Samhället vann priset «Best Lakeside Living».',
    outcomeMetrics: [
      {
        label: 'SUP:ar',
        value: '15',
      },
      {
        label: 'Hushållsanvändning',
        value: '85%',
      },
      {
        label: 'Påverkan på fastighetsvärde',
        value: '+7%',
      },
      {
        label: 'Pris',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Medelhavsresortkedja vid stranden',
    product: 'Resortflotta — SUP + tillbehör',
    industry: 'Gästfrihet / Turism',
    challenge:
      'En medelhavsresortkedja med 3 anläggningar ville lansera ett enhetligt vattenaktivitetsprogram med 120 SUP:er med skräddarsydd branding, flerspråkiga säkerhetskort och ett roterande underhållssystem.',
    solution:
      'Konstruerade ett resortspecifikt flottprogram med marin-grade UV-beständig PVC, däckgrafik med hotellprofil i 3 färgscheman och ett färgkodat underhållsmärkningssystem. Inkluderade personalutbildning och kvartalsvis påfyllning av reservdelar.',
    result:
      'Flotta utplacerad på 3 resorter. Intäkterna från vattenaktiviteter ökade med 210% under första säsongen. Gästnöjdhetspoängen för faciliteter steg från 4.1 till 4.7/5.',
    outcomeMetrics: [
      {
        label: 'Levererade SUP:ar',
        value: '120',
      },
      {
        label: 'Resorter',
        value: '3',
      },
      {
        label: 'Intäktstillväxt',
        value: '210%',
      },
      {
        label: 'Gästpoäng',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Intäkter vattenaktiviteter (årligen)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Utrustningsersättningsgrad',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Gästnöjdhet (faciliteter)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Vattensportsdistributör i Mellanöstern',
    product: 'Hela produktlinjen — SUP, båtar, tillbehör',
    industry: 'Distribution / Marin',
    challenge:
      'En GCC-baserad distributör ville ha exklusiva rättigheter till hela Afarers produktlinje i 6 Gulfstater, med arabisk förpackning, värmétåliga materialspecifikationer och sharia-kompatibla garantivillkor.',
    solution:
      'Etablerade exklusivt distributionsavtal. Utvecklade arabisk förpackning och marknadsföringsmaterial. Validerade materialspecifikationer vid 50°C omgivningstemperatur. Anpassade garantivillkor till regional efterlevnad.',
    result:
      '12 containerorder under de första 18 månaderna. Nätverk med 15 återförsäljare och underdistributörer etablerat. Uppskattad marknadsandel på 18% av GCC-segmentet för uppblåsbara SUP:ar.',
    outcomeMetrics: [
      {
        label: 'Containrar',
        value: '12',
      },
      {
        label: 'Återförsäljarnätverk',
        value: '15',
      },
      {
        label: 'Marknadsandel',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: 'Europeisk outdooråterförsäljare',
    product: 'SUP-linje med eget varumärke',
    industry: 'Detaljhandel',
    challenge:
      'En europeisk outdooråterförsäljare behövde en SUP-linje med eget varumärke med unika däckgrafik, miljövänlig PVC och butiksfärdig förpackning — allt levererat på 60 dagar.',
    solution:
      'Utvecklade anpassade digitala utskriftsfiler, anskaffade REACH-godkänd PVC och kortade provtagningen från 3 till 1 omgång genom att placera designteamet hos vår fabrik i Qingdao.',
    result:
      '55 dagar från signerad PO till FOB. 2,400 enheter i 4 SKU:er. Repeterorder lagd innan första containern anlände.',
    outcomeMetrics: [
      {
        label: 'Ledtid',
        value: '55 dagar',
      },
      {
        label: 'Enheter',
        value: '2,400',
      },
      {
        label: 'SKU:er',
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Maritim myndighet i Sydostasien',
    product: 'Patrull- och räddnings-SUP-flotta',
    industry: 'Offentlig sektor / Maritim säkerhet',
    challenge:
      'En statlig maritim myndighet krävde 20 patrull- och räddnings-SUP:er med brandbeständigt Hypalon-tyg, integrerade kommunikationsfästen och överensstämmelse med SOLAS kapitel III.',
    solution:
      'Tillverkade 20 SUP:ar med CSM Hypalon-rör, tunga D-ringar och förinstallerade navigationsljuspaket. Fabrikens inspektionsteam bevittnade sjötester. Fullständigt SOLAS-dokumentationspaket tillhandahölls.',
    result:
      'Kontrakt levererat på 4 månader. Flotta sattes in för gränsbevakning, sök och räddning samt katastrofberedskap på 3 regionala baser.',
    outcomeMetrics: [
      {
        label: 'Patrull-SUP:ar',
        value: '20',
      },
      {
        label: 'Leverans',
        value: '4 månader',
      },
      {
        label: 'Baser',
        value: '3',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Amerikansk vattensportstartup',
    product: 'Skräddarsydd SUP-linje',
    industry: 'Startup / Detaljhandel',
    challenge:
      'En amerikansk vattensportstartup behövde en högpresterande Drop-Stitch SUP med skräddarsydd däckdesign, co-branding-förpackning och BSCI-certifiering för butiksförsäljning.',
    solution:
      'Anpassade befintlig SUP-form med modifierad rockerprofil, utvecklade co-branded förpackningsdesign och tillhandahöll fullständig BSCI-revisionsdokumentation.',
    result:
      'Framgångsrikt listade i 3 stora amerikanska friluftskedjor. 5,000+ enheter första året med 98% sell-through.',
    outcomeMetrics: [
      {
        label: 'Butikskedjor',
        value: '3',
      },
      {
        label: 'Enheter första året',
        value: '5,000+',
      },
      {
        label: 'Sell-through',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: 'Brittisk universitetssportförbund',
    product: 'Studentklubbsflotta — SUP + säkerhet',
    industry: 'Utbildning',
    challenge:
      'Ett brittiskt universitet med en aktiv vattensportsklubb behövde ersätta en åldrande flotta med moderna uppblåsbara SUP:er: begränsad campusförvaring, användarvänlighet för alla nivåer och BUCS-standarder.',
    solution:
      'Levererade 25 all-around-SUP:ar med kompakta förvaringsryggsäckar, 10 touring-SUP:ar för tävlingsträning och ett komplett säkerhetsutrustningspaket. Tillhandahöll utbildning för klubbfunktionärer och underhållsworkshops.',
    result:
      'Flotta visades upp på mottagningsmässan. Klubbmedlemskapet växte med 140%. Universitetet arrangerade den första interuniversitets-SUP-tävlingen på 5 år.',
    outcomeMetrics: [
      {
        label: 'Levererade SUP:ar',
        value: '35',
      },
      {
        label: 'Medlemstillväxt',
        value: '140%',
      },
      {
        label: 'Arrangerade tävlingar',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Amerikanskt vattensportutrustningsvarumärke',
    product: 'Skräddarsydd form — Touring-SUP',
    industry: 'OEM / Tillverkning',
    challenge:
      'Ett amerikanskt varumärke krävde en helt ny SUP-form: touringform på 14 fot, integrerade kanaler för ekolod, förstärkt ståplattform och en lastkapacitet på 400 lbs.',
    solution:
      'Konstruerade en ny 14-fots drop-stitch-form med förstärkt kärndensitet, inbäddade inserts för tillbehörsrailar och ett PVC-bottenlager i militärkvalitet för slitstyrka. Tillverkade 3 prototypiterationer före slutgiltig verktygsframställning.',
    result:
      'Ny form framställd på 14 veckor. 3,500 enheter producerade i den första produktionssvängen. Produkten utsedd till «Best Fishing SUP 2025» av Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Verktygstid',
        value: '14 veckor',
      },
      {
        label: 'Första svängen',
        value: '3,500 enheter',
      },
      {
        label: 'Pris',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
