import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: 'Australsk padleklubforbund',
    product: 'Klubflåde — SUP + sikkerhedsudstyr',
    industry: 'Fritid / Uddannelse',
    challenge:
      "Et forbund med 15 klubber skulle standardisere udstyret med holdbare SUP'er velegnede til begyndere, CE-certificerede redningsveste og en centraliseret indkøbsmodel for lavere omkostninger pr. klub.",
    solution:
      'Standardiserede en klubflåde i 3 niveauer (begynder, øvet, instruktør). Designede dækgrafik i klubfarver med klublogoer. Implementerede centrallager med kvartalsvis distribution pr. klub.',
    result:
      '350 enheder på tværs af 15 klubber. 28% kostreduktion gennem samlede indkøb. 92% af medlemmerne tilfredse med udstyrets kvalitet.',
    outcomeMetrics: [
      {
        label: 'Udstyrede klubber',
        value: '15',
      },
      {
        label: 'Leverede enheder',
        value: '350',
      },
      {
        label: 'Kostreduktion',
        value: '28%',
      },
      {
        label: 'Medlemstilfredshed',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Australsk distributør',
    product: 'CE-certificeret SUP-serie',
    industry: 'Maritim / Detailhandel',
    challenge:
      'En australsk distributør krævede en CE-certificeret SUP-serie med skræddersyede dækfarver, opgraderet PVC-mulighed og overensstemmelse med australsk standard AS 1799.',
    solution:
      'Fremstillede forproduktionsprøver i 4 farvevarianter, indkøbte PVC i militærkvalitet og koordinerede uafhængige AS 1799-overholdelsestests.',
    result:
      'SUP-serie med 3 modeller lanceret på AU/NZ-markedet. Fulgt op af kontrakt med en butikskæde med 12 butikker.',
    outcomeMetrics: [
      {
        label: 'Lancerede modeller',
        value: '3',
      },
      {
        label: 'Butikker',
        value: '12',
      },
      {
        label: 'Overholdelse',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Canadisk outdoorbutikskæde',
    product: 'SUP med eget brand + tilbehørslinje',
    industry: 'Detailhandel',
    challenge:
      'En canadisk forhandler med 25 butikker krævede en eksklusiv SUP-serie med eget brand med tosproget fransk/engelsk emballage, koldvejrsspecifikationer og canadiske bådforskrifter.',
    solution:
      'Udviklede 4 SUP-modeller med cold-flex PVC-sammensætning godkendt ned til -15°C. Fremstillede tosproget butiksemballage med canadiske reguleringsmarkeringer. Leverede displays og træningsmateriale til personalet.',
    result:
      "Eksklusiv linje lanceret i 25 butikker. 3,800 enheder solgt i første sæson. Forhandleren fornyede aftalen med 3 år med udvidet antal SKU'er.",
    outcomeMetrics: [
      {
        label: 'Butikker',
        value: '25',
      },
      {
        label: 'Enheder første sæson',
        value: '3,800',
      },
      {
        label: 'Aftale',
        value: 'fornyelse i 3 år',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karibisk luksusresortgruppe',
    product: 'Resortflåde — SUP',
    industry: 'Gæstfrihed / Turisme',
    challenge:
      "En gruppe med 5 resorter havde brug for en samlet flåde af leje-SUP'er med ensartet branding, UV-bestandige materialer til tropisk sol og en 5-årig udskiftningsplan.",
    solution:
      'Designede en skræddersyet SUP-flådepakke med 3 modeller med UV-stabiliseret PVC, dækgrafik med resort-branding og en faseinddelt leveringsplan. Gav personaletræning og et dedikeret reservedelessæt pr. resort.',
    result:
      '180 enheder leveret til 5 resorter. Gentagelsesordre for 2 nye ejendomme. 40% kostreduktion pr. enhed sammenlignet med tidligere leverandører.',
    outcomeMetrics: [
      {
        label: 'Leverede enheder',
        value: '180',
      },
      {
        label: 'Resorter',
        value: '5',
      },
      {
        label: 'Kostreduktion',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Årlig udskiftningsomkostning for boards',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Flåtestilstand (dage/år)',
        before: '45',
        after: '8',
      },
      {
        label: 'Gæstetilfredshedsscore',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globalt teknologiselskab',
    product: 'Virksomhedssundhed — SUP-flåde',
    industry: 'Erhverv / Wellness',
    challenge:
      "En Fortune 500-techvirksomhed ville lancere et vandbaseret sundhedsprogram for medarbejdere på 4 globale campuser ved søer: 60 SUP'er med virksomhedsbranding, lagringsløsninger og instruktørtræning.",
    solution:
      "Leverede en flåde af stabile all-around-SUP'er med dækgrafik i firmaets logo. Designede vejrbestandige opbevaringsstativer på stedet. Certificerede 12 interne instruktører gennem afarers træningsprogram.",
    result:
      'Program lanceret på 4 campuser. 2,400+ medarbejderdeltagelser i det første år. 94% tilfredshed blandt medarbejderne. Omtalt i virksomhedens bæredygtighedsrapport.',
    outcomeMetrics: [
      {
        label: 'Campuser',
        value: '4',
      },
      {
        label: 'Deltagere',
        value: '2,400+',
      },
      {
        label: 'Tilfredshed',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Karibisk krydstogtselskab',
    product: 'Flåde til ombordaktiviteter — SUP',
    industry: 'Gæstfrihed / Krydstogt',
    challenge:
      'Et stort krydstogtselskab ville tilbyde SUP som landudflugt på 7 skibe: kompakt lagring om bord, hurtige oppustnings-/tømningscyklusser og ensartet branding i hele flåden.',
    solution:
      'Udviklede en krydstogtsspecifik SUP-pakke med hurtigopblæsningsventilsystemer, kompakt rygsækopbevaring og dækgrafik med skibsbranding. Gav dedikeret træning af landteamet og reservedelsskabe på 3 øhavne.',
    result:
      'Program lanceret på 7 skibe. 15,000+ gæstedeltagelser i første sæson. 4.6★ gennemsnitsbedømmelse af udflugter. Udvidet til 3 yderligere skibe i år 2.',
    outcomeMetrics: [
      {
        label: 'Skibe',
        value: '7',
      },
      {
        label: 'Gæstedeltagelser',
        value: '15,000+',
      },
      {
        label: 'Bedømmelse',
        value: '4.6★',
      },
      {
        label: 'Udvidelse år 2',
        value: '+3 skibe',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Europæisk DTC-vandsportsbrand',
    product: 'Brand-SUP + tilbehørslinje',
    industry: 'E-handel / Detailhandel',
    challenge:
      'En hurtigt voksende DTC-vandsportsbrand havde brug for en komplet SUP-pakke (bræt, pumpe, pagaj, leash, taske) med premiumemballage til e-handel — DHL/FedEx-levering direkte til kunden uden skader.',
    solution:
      'Udviklede en co-branded produktlinje med tilpasset EPS-kerneformning, proprietær drop-stitch-teknologi til højere tryk og butiksklare dobbeltvæggede bølgepapkasser med beskyttende indlæg. Integrerede QR-kodebaseret ægthedsgodkendelse og garantiregistrering.',
    result:
      'SUP-linje med 3 modeller lanceret på 75 dage. 15,000+ enheder i de første 12 måneder. 4.8★ gennemsnitsbedømmelse på 2,000+ anmeldelser. 0.3% skadesrate under transport.',
    outcomeMetrics: [
      {
        label: 'Modeller',
        value: '3',
      },
      {
        label: 'Enheder',
        value: '15,000+',
      },
      {
        label: 'Gennemsnitsbedømmelse',
        value: '4.8★',
      },
      {
        label: 'Skadesrate',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Europæisk søresort- og udlejningsoperatør',
    product: 'Udlejningsflåde — SUP, redningsveste, tilbehør',
    industry: 'Udlejning / Turisme',
    challenge:
      'En søresortoperatør med 6 udlejningsstationer havde brug for en ekstra holdbar udlejnings-SUP-flåde med hurtigtørrende systemer, skadesbestandig konstruktion og en forudsigelig flerårig udskiftningsplan.',
    solution:
      "Leverede udlejnings-SUP'er i kommerciel kvalitet med forstærkede rail-bånd, hurtigtørrende EVA-dæk og UV-stabiliseret PVC. Udviklede et farvekodet slitageovervågningssystem med årlige tilstandsrapporter.",
    result:
      "200 SUP'er udrullet på 6 stationer. Årlige vedligeholdelsesomkostninger reduceret med 55%. Udstyrets levetid forlænget fra 2 til 4 år.",
    outcomeMetrics: [
      {
        label: 'Udlejningsstationer',
        value: '6',
      },
      {
        label: "Udrullede SUP'er",
        value: '200',
      },
      {
        label: 'Vedligeholdelsesomkostning',
        value: '-55%',
      },
      {
        label: 'Levetid',
        value: '4 år',
      },
    ],
    beforeAfter: [
      {
        label: 'Gennemsnitlig levetid pr. board',
        before: '2 år',
        after: '4 år',
      },
      {
        label: 'Årlig vedligeholdelse pr. board',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Udlejningsindtægt pr. board/sæson',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridansk fiskechartervirksomhed',
    product: 'Skræddersyet fiske-SUP-flåde',
    industry: 'Fiskeri / Charter',
    challenge:
      'En fiskecharteroperatør i Florida ville tilføje SUP-fisketure: stabile platforme med integrerede kølerbeslag, skinner til stangeholdere og kompatibilitet med fiskefinder-givere.',
    solution:
      'Tilpassede den eksisterende stabile SUP-platform med 4 indbyggede stangholdere, et aftageligt monteringssystem til kølebokse og en vandtæt scupper-montering til ekkoloddsender. Anvendte flådepriser og et sæsonbaseret udskiftningsprogram.',
    result:
      'SUP-fisketure lanceret som en ny indtægtskilde. 45% af de eksisterende charterkunder bookede SUP-ture. Flåden udvidet fra 8 til 20 boards i løbet af 2 sæsoner.',
    outcomeMetrics: [
      {
        label: 'Startflåde',
        value: '8',
      },
      {
        label: 'Flåde år 2',
        value: '20',
      },
      {
        label: 'Charter-krydssalg',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: 'International humanitær organisation',
    product: 'Rednings- og nødhjælpsgummibåde',
    industry: 'NGO / Humanitær bistand',
    challenge:
      'En international humanitær organisation havde brug for 50 robuste gummibåde til redningsoperationer ved oversvømmelser i Sydøstasien: lette til helikoptertransport og reparerbare i felten.',
    solution:
      'Fremstillede 50 forstærkede oppustelige både med selv-tømmende bunde, redundans med flere kamre og griblinjer langs omkredsen. Leverede feltreparationskits med piktogram-instruktioner. Trænede 20 lokale teknikere.',
    result:
      '50 både udrullet i 3 oversvømmelsestruede regioner. Anvendt i 12 større redningsoperationer i de første 6 måneder. 0 rapporterede udstyrsfejl.',
    outcomeMetrics: [
      {
        label: 'Udrullede både',
        value: '50',
      },
      {
        label: 'Redningsoperationer',
        value: '12',
      },
      {
        label: 'Fejlrate',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japansk lifestylebrand',
    product: 'Co-branded SUP-linje',
    industry: 'OEM / Mærke',
    challenge:
      'Et premium japansk lifestylebrand ønskede at indtræde på vandsportsmarkedet med en co-branded SUP-linje: minimalistisk design, miljøvenlige materialer og præcisionsproduktion.',
    solution:
      'Fremstillede tilpassede forme med en slankere railprofil. Indkøbte FSC-certificerede bambusindlæg i dækket og genanvendte PVC-muligheder. Udviklede en premium-pakkeåbningsoplevelse med QR-kodede plejeguider på japansk.',
    result:
      'Co-branded linje med 3 modeller lanceret på Tokyo Marine Show. 2,800 enheder forsolgt før den offentlige udgivelse. Omtalt i 5 japanske livsstilspublikationer.',
    outcomeMetrics: [
      {
        label: 'Modeller',
        value: '3',
      },
      {
        label: 'Forsolgte enheder',
        value: '2,800',
      },
      {
        label: 'Medieomtaler',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Amerikansk boligfællesskab ved søen',
    product: 'Fælles facilitet — SUP-flåde',
    industry: 'Ejendomme / Fællesskab',
    challenge:
      "Et luksusboligfællesskab ved søen ville tilbyde SUP'er som facilitet for beboere: vedligeholdelsesvenlig flåde, sikker lagring ved stranden og et selvbetjeningsudlånssystem til 200+ hjem.",
    solution:
      "Leverede 15 SUP'er i kommerciel kvalitet med et vejrbestandigt skabsystem til opbevaring. Designede QR-kodebaseret selvbetjening med digital integrering af ansvarsfraskrivelser. Tilbud sæsonbaseret vedligeholdelsesservice.",
    result:
      '85% af husstandene brugte SUP-faciliteten i første sæson. Ejendomsværdier i delen ved søen steg med 7%. Fællesskabet vandt prisen «Best Lakeside Living».',
    outcomeMetrics: [
      {
        label: "SUP'er",
        value: '15',
      },
      {
        label: 'Husholdningsbrug',
        value: '85%',
      },
      {
        label: 'Påvirkning af ejendomsværdi',
        value: '+7%',
      },
      {
        label: 'Pris',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Middelhavsresortkæde ved stranden',
    product: 'Resortflåde — SUP + tilbehør',
    industry: 'Gæstfrihed / Turisme',
    challenge:
      "En middelhavsresortkæde med 3 steder ville lancere et samlet vandaktivitetsprogram med 120 SUP'er med skræddersyet branding, flersprogede sikkerhedskort og et roterende vedligeholdelsessystem.",
    solution:
      'Designede en resortspecifik flådepakke med marin UV-bestandig PVC, dækgrafik med hotel-branding i 3 farveskemaer og et farvekodet vedligeholdelsesmærkningssystem. Inkluderede personaletræning og kvartalsvis genopfyldning af reservedele.',
    result:
      'Flåde udrullet på 3 resorter. Indtægterne fra vandaktiviteter steg med 210% i første sæson. Gæstetilfredshedsscoren for faciliteter steg fra 4.1 til 4.7/5.',
    outcomeMetrics: [
      {
        label: "Leverede SUP'er",
        value: '120',
      },
      {
        label: 'Resorter',
        value: '3',
      },
      {
        label: 'Indtægtsstigning',
        value: '210%',
      },
      {
        label: 'Gæstescore',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Indtægter fra vandaktiviteter (årligt)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Udskiftningsrate for udstyr',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Gæstetilfredshed (faciliteter)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Vandsportsdistributør i Mellemøsten',
    product: 'Hele produktlinjen — SUP, både, tilbehør',
    industry: 'Distribution / Maritim',
    challenge:
      'En GCC-baseret distributør ønskede eksklusive rettigheder til hele Afarer-produktlinjen i 6 Golfstater med arabisk emballage, varmebestandige materialspecifikationer og sharia-kompatible garantibetingelser.',
    solution:
      'Etablerede eksklusiv distributionsaftale. Udviklede arabisk emballage og markedsføringsmateriale. Validerede materialespecifikationer ved 50°C omgivelsestemperatur. Tilpassede garantibetingelser til regional overholdelse.',
    result:
      "12 containerordrer i de første 18 måneder. Netværk med 15 forhandlere og underdistributører etableret. Estimeret markedsandel på 18% af GCC-segmentet for oppustelige SUP'er.",
    outcomeMetrics: [
      {
        label: 'Containere',
        value: '12',
      },
      {
        label: 'Forhandlernetværk',
        value: '15',
      },
      {
        label: 'Markedsandel',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: 'Europæisk outdoorforhandler',
    product: 'SUP-linje med eget brand',
    industry: 'Detailhandel',
    challenge:
      'En europæisk outdoorforhandler havde brug for en SUP-linje med eget brand med unikt dækgrafisk design, miljøvenlig PVC og butiksklar emballage — alt leveret på 60 dage.',
    solution:
      'Udviklede tilpassede digitale printfiler, indkøbte REACH-overholdende PVC og forkortede prøveprocessen fra 3 til 1 runde ved at placere designteamet hos vores fabrik i Qingdao.',
    result:
      "55 dage fra underskrevet PO til FOB. 2,400 enheder på tværs af 4 SKU'er. Gentagelsesordre afgivet før første container ankom.",
    outcomeMetrics: [
      {
        label: 'Leveringstid',
        value: '55 dage',
      },
      {
        label: 'Enheder',
        value: '2,400',
      },
      {
        label: "SKU'er",
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Maritim myndighed i Sydøstasien',
    product: 'Patrulje- og rednings-SUP-flåde',
    industry: 'Offentlig sektor / Maritim sikkerhed',
    challenge:
      "En offentlig maritim myndighed krævede 20 patrulje- og rednings-SUP'er med brandsikkert Hypalon-stof, integrerede kommunikationsbeslag og overensstemmelse med SOLAS kapitel III.",
    solution:
      "Fremstillede 20 SUP'er med CSM Hypalon-rør, kraftige D-ringe og forudinstallerede navigationslyspakker. Fabrikkens inspektionsteam overværede søprøver. Fuldstændig SOLAS-dokumentationspakke blev leveret.",
    result:
      'Kontrakt leveret på 4 måneder. Flåde indsat til grænsepatrulje, søgning og redning samt katastrofeberedskab på 3 regionale baser.',
    outcomeMetrics: [
      {
        label: "Patrulje-SUP'er",
        value: '20',
      },
      {
        label: 'Levering',
        value: '4 måneder',
      },
      {
        label: 'Baser',
        value: '3',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Amerikansk vandsportsstartup',
    product: 'Skræddersyet SUP-linje',
    industry: 'Startup / Detailhandel',
    challenge:
      'En amerikansk vandsportsstartup havde brug for en højtydende Drop-Stitch SUP med skræddersyet dækdesign, co-branding-emballage og BSCI-certificering til butikssalg.',
    solution:
      'Tilpassede eksisterende SUP-form med ændret rockerprofil, udviklede co-branded emballagedesign og leverede fuldstændig BSCI-revisionsdokumentation.',
    result: 'Listet i 3 store amerikanske outdoor-kæder. 5,000+ enheder i det første år med 98% sell-through.',
    outcomeMetrics: [
      {
        label: 'Butikskæder',
        value: '3',
      },
      {
        label: 'Enheder første år',
        value: '5,000+',
      },
      {
        label: 'Sell-through',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: 'Britisk universitetssportsforbund',
    product: 'Studenterklubflåde — SUP + sikkerhed',
    industry: 'Uddannelse',
    challenge:
      "Et britisk universitet med en aktiv vandsportsklub skulle udskifte en aldrende flåde med moderne oppustelige SUP'er: begrænset campuslagring, brugervenlighed for alle niveauer og BUCS-standarder.",
    solution:
      "Leverede 25 all-around-SUP'er med kompakte opbevaringsrygsække, 10 touring-SUP'er til konkurrencetræning og en komplet sikkerhedsudstyrspakke. Gav træning af klubledere og vedligeholdelsesworkshops.",
    result:
      'Flåde præsenteret på rusfesten. Klubbens medlemsantal voksede med 140%. Universitetet afholdt den første interuniversitets-SUP-konkurrence i 5 år.',
    outcomeMetrics: [
      {
        label: "Leverede SUP'er",
        value: '35',
      },
      {
        label: 'Medlemsvækst',
        value: '140%',
      },
      {
        label: 'Afholdte konkurrencer',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Amerikansk vandsportsudstyrsbrand',
    product: 'Skræddersyet form — Touring-SUP',
    industry: 'OEM / Produktion',
    challenge:
      'Et amerikansk brand krævede en helt ny SUP-form: touringform på 14 fod, integrerede kanaler til fiskefinder, forstærket ståplatform og en belastningskapacitet på 400 lbs.',
    solution:
      'Konstruerede en ny 14-fods drop-stitch-form med forstærket kerndensitet, indbyggede indlæg til tilbehørsskinner og et PVC-bundlag i militærkvalitet til slidstyrke. Fremstillede 3 prototype-iterationer før endelig værktøjsfremstilling.',
    result:
      'Ny form fremstillet på 14 uger. 3,500 enheder produceret i første produktionsrunde. Produktet kåret til «Best Fishing SUP 2025» af Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Værktøjstid',
        value: '14 uger',
      },
      {
        label: 'Første runde',
        value: '3,500 enheder',
      },
      {
        label: 'Pris',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
