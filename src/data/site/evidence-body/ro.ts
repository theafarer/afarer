import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: 'Asociația australiană a cluburilor de paddle',
    product: 'Flotă de club — SUP + echipament de siguranță',
    industry: 'Recreere / Educație',
    challenge:
      'O asociație de 15 cluburi trebuia să standardizeze echipamentul cu SUP-uri durabile prietenoase începătorilor, veste de salvare certificate CE și un model centralizat de achiziții pentru reducerea costurilor.',
    solution:
      'Am standardizat o flotilă de club pe 3 niveluri (începător, intermediar, instructor). Am proiectat grafică de punte în culorile clubului cu logourile clubului. Am implementat depozitare centralizată cu distribuție trimestrială la nivel de club.',
    result:
      '350 de unități în 15 cluburi. Reducere de 28% a costurilor prin achiziții consolidate. 92% satisfacție a membrilor privind calitatea echipamentelor.',
    outcomeMetrics: [
      {
        label: 'Cluburi echipate',
        value: '15',
      },
      {
        label: 'Unități livrate',
        value: '350',
      },
      {
        label: 'Reducere de costuri',
        value: '28%',
      },
      {
        label: 'Satisfacția membrilor',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Distribuitor australian',
    product: 'Gamă SUP cu certificare CE',
    industry: 'Maritim / Comerț cu amănuntul',
    challenge:
      'Un distribuitor australian solicita o gamă SUP cu certificare CE, cu culori personalizate ale punții, opțiune PVC îmbunătățită și conformitate cu standardul australian AS 1799.',
    solution:
      'Am produs mostre pre-producție în 4 variante de culoare, am achiziționat PVC de clasă militară și am coordonat testări de conformitate AS 1799 cu o terță parte.',
    result: 'Gama SUP cu 3 modele lansată pe piața AU/NZ. Urmată de un contract cu un lanț de retail de 12 magazine.',
    outcomeMetrics: [
      {
        label: 'Modele lansate',
        value: '3',
      },
      {
        label: 'Magazine',
        value: '12',
      },
      {
        label: 'Conformitate',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Lanț canadian de magazine outdoor',
    product: 'Linie SUP cu marcă proprie + accesorii',
    industry: 'Comerț cu amănuntul',
    challenge:
      'Un retailer canadian cu 25 de magazine solicita o gamă SUP exclusivă cu marcă proprie, cu ambalaj bilingv franceză/engleză, specificații pentru climă rece și conformitate cu reglementările nautice canadiene.',
    solution:
      'Am dezvoltat 4 modele SUP cu compus PVC cold-flex rezistent până la -15°C. Am produs ambalaje de retail bilingve cu marcaje regulatorii canadiene. Am furnizat standuri de expunere și materiale de instruire pentru personal.',
    result:
      'Linie exclusivă lansată în 25 de magazine. 3,800 de unități vândute în primul sezon. Retailerul a reînnoit acordul pe 3 ani cu un număr extins de SKU-uri.',
    outcomeMetrics: [
      {
        label: 'Magazine',
        value: '25',
      },
      {
        label: 'Unități în primul sezon',
        value: '3,800',
      },
      {
        label: 'Acord',
        value: 'reînnoire pe 3 ani',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Grup de stațiuni de lux din Caraibe',
    product: 'Flotă de stațiune — SUP',
    industry: 'Hotelier / Turism',
    challenge:
      'Un grup de 5 stațiuni avea nevoie de o flotă unificată de SUP de închiriat, cu branding consecvent, materiale rezistente la UV pentru soarele tropical și un plan de înlocuire pe 5 ani.',
    solution:
      'Am proiectat un pachet personalizat de flotilă SUP cu 3 modele din PVC stabilizat UV, grafică de punte cu brandingul resortului și un calendar de livrare etapizat. Am furnizat instruire pentru personal și un kit dedicat de piese de schimb pentru fiecare resort.',
    result:
      '180 de unități livrate în 5 resorturi. Comandă repetată pentru 2 proprietăți noi. Reducere de 40% a costului per unitate față de furnizorii anteriori.',
    outcomeMetrics: [
      {
        label: 'Unități livrate',
        value: '180',
      },
      {
        label: 'Resorturi',
        value: '5',
      },
      {
        label: 'Reducere de costuri',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Cost anual de înlocuire a boardurilor',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Indisponibilitatea flotilei (zile/an)',
        before: '45',
        after: '8',
      },
      {
        label: 'Scor de satisfacție a oaspeților',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Corporație tehnologică globală',
    product: 'Wellness corporativ — Flotă SUP',
    industry: 'Corporativ / Wellness',
    challenge:
      'O companie tech din Fortune 500 dorea să lanseze un program de wellness pe apă pentru angajați pe 4 campusuri globale lângă lacuri: 60 de SUP-uri cu branding corporativ, soluții de depozitare și instruire.',
    solution:
      'Am furnizat o flotilă de SUP-uri all-around stabile cu grafică de punte cu logo corporativ. Am proiectat standuri de depozitare rezistente la intemperii pe loc. Am certificat 12 instructori interni prin programul de formare afarer.',
    result:
      'Program lansat în 4 campusuri. 2,400+ participări ale angajaților în primul an. Rating de satisfacție a angajaților de 94%. Prezentat în raportul de sustenabilitate al companiei.',
    outcomeMetrics: [
      {
        label: 'Campusuri',
        value: '4',
      },
      {
        label: 'Participanți',
        value: '2,400+',
      },
      {
        label: 'Satisfacție',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Operator de croaziere din Caraibe',
    product: 'Flotă pentru activități la bord — SUP',
    industry: 'Hotelier / Croaziere',
    challenge:
      'O mare companie de croaziere dorea să ofere SUP ca excursie la mal pe 7 nave: depozitare compactă la bord, cicluri rapide de umflare/golire și consecvență de brand la nivelul întregii flote.',
    solution:
      'Am dezvoltat un pachet SUP dedicat croazierelor cu sisteme de supape cu umflare rapidă, depozitare compactă în rucsac și grafică de punte cu brandingul navei. Am furnizat instruire dedicată pentru echipa de la țărm și dulapuri cu piese de schimb în 3 porturi insulare.',
    result:
      'Program lansat pe 7 nave. 15,000+ participări ale oaspeților în primul sezon. Rating mediu de 4.6★ pentru excursii. Extins la 3 nave suplimentare în anul 2.',
    outcomeMetrics: [
      {
        label: 'Nave',
        value: '7',
      },
      {
        label: 'Participări ale oaspeților',
        value: '15,000+',
      },
      {
        label: 'Evaluare',
        value: '4.6★',
      },
      {
        label: 'Extindere în anul 2',
        value: '+3 nave',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Brand european DTC de sporturi nautice',
    product: 'Linie SUP de brand + accesorii',
    industry: 'E-commerce / Comerț cu amănuntul',
    challenge:
      'Un brand DTC în creștere rapidă avea nevoie de un pachet SUP complet (placă, pompă, vâslă, leash, geantă) cu ambalaj premium pentru e-commerce — livrare DHL/FedEx direct către client fără deteriorări.',
    solution:
      'Am dezvoltat o linie de produse co-branded cu modelare personalizată a nucleului EPS, tehnologie proprietară drop-stitch pentru presiune mai ridicată și cutii duble din carton ondulat, gata de raft, cu protecții interioare. Am integrat verificarea autenticității și înregistrarea garanției prin coduri QR.',
    result:
      'Linia SUP cu 3 modele lansată în 75 de zile. 15,000+ unități în primele 12 luni. Rating mediu 4.8★ la 2,000+ recenzii. Rată de deteriorare de 0.3% în transport.',
    outcomeMetrics: [
      {
        label: 'Modele',
        value: '3',
      },
      {
        label: 'Unități',
        value: '15,000+',
      },
      {
        label: 'Rating mediu',
        value: '4.8★',
      },
      {
        label: 'Rată de deteriorare',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Operator european de stațiune lacustră și închirieri',
    product: 'Flotă de închiriat — SUP, veste, accesorii',
    industry: 'Închirieri / Turism',
    challenge:
      'Un operator cu 6 puncte de închiriere avea nevoie de o flotă SUP de închiriat de durabilitate ridicată, cu sisteme de uscare rapidă, construcție rezistentă la deteriorări și un program de înlocuire previzibil pe mai mulți ani.',
    solution:
      'Am furnizat SUP-uri de închiriere de clasă comercială cu benzi laterale întărite, punți EVA cu uscare rapidă și PVC stabilizat UV. Am dezvoltat un sistem colorat de urmărire a uzurii cu rapoarte anuale de stare.',
    result:
      '200 de SUP-uri implementate în 6 stații. Costul anual de întreținere redus cu 55%. Durata de viață a echipamentelor extinsă de la 2 la 4 ani.',
    outcomeMetrics: [
      {
        label: 'Stații de închiriere',
        value: '6',
      },
      {
        label: 'SUP-uri implementate',
        value: '200',
      },
      {
        label: 'Costuri de întreținere',
        value: '-55%',
      },
      {
        label: 'Durată de viață',
        value: '4 ani',
      },
    ],
    beforeAfter: [
      {
        label: 'Durata medie de viață a boardului',
        before: '2 ani',
        after: '4 ani',
      },
      {
        label: 'Întreținere anuală per board',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Venituri din închiriere per board/sezon',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Companie de charter de pescuit din Florida',
    product: 'Flotă SUP de pescuit personalizată',
    industry: 'Pescuit / Charter',
    challenge:
      'Un operator de charter de pescuit din Florida dorea să adauge tururi de pescuit cu SUP: platforme stabile cu suporturi pentru coolere, șine pentru suporturi de undițe și compatibilitate cu transducătoare de sonar.',
    solution:
      'Am personalizat platforma SUP stabilă existentă cu 4 suporturi incorporate pentru lansete, un sistem demontabil de montare a lăzilor frigorifice și o montură etanșă pentru transductor în scupper. Am furnizat prețuri de flotilă și un program sezonier de înlocuire.',
    result:
      'Tururile de pescuit cu SUP lansate ca nouă sursă de venituri. 45% dintre clienții existenți ai charterului au rezervat tururi cu SUP. Flotila extinsă de la 8 la 20 de boarduri în 2 sezoane.',
    outcomeMetrics: [
      {
        label: 'Flotilă inițială',
        value: '8',
      },
      {
        label: 'Flotilă în anul 2',
        value: '20',
      },
      {
        label: 'Vânzări încrucișate charter',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: 'Organizație umanitară internațională',
    product: 'Bărci gonflabile de salvare și ajutor',
    industry: 'ONG / Umanitar',
    challenge:
      'O organizație umanitară internațională avea nevoie de 50 de bărci gonflabile robuste pentru operațiuni de salvare la inundații în Asia de Sud-Est: ușoare pentru transport cu elicopterul și reparabile pe teren.',
    solution:
      'Am fabricat 50 de ambarcațiuni umflabile întărite cu pardoseli auto-evacuante, redundanță multicameră și perimetre de linii de prindere. Am furnizat truse de reparații de teren cu instrucțiuni ilustrate. Am instruit 20 de tehnicieni locali.',
    result:
      '50 de ambarcațiuni implementate în 3 regiuni expuse inundațiilor. Utilizate în 12 operațiuni majore de salvare în primele 6 luni. 0 defecțiuni de echipamente raportate.',
    outcomeMetrics: [
      {
        label: 'Ambarcațiuni implementate',
        value: '50',
      },
      {
        label: 'Operațiuni de salvare',
        value: '12',
      },
      {
        label: 'Rată de defecțiuni',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Brand japonez de lifestyle',
    product: 'Linie SUP co-branding',
    industry: 'OEM / Marcă',
    challenge:
      'Un brand japonez premium de lifestyle a intrat pe piața sporturilor nautice cu o linie SUP co-branding: design minimalist, materiale ecologice și producție de precizie pentru consumatorii japonezi exigenți.',
    solution:
      'Am creat matrițe personalizate cu un profil al benzii laterale mai suplu. Am achiziționat inserții de punte din bambus certificat FSC și opțiuni de PVC reciclat. Am dezvoltat o experiență premium de despachetare cu ghiduri de îngrijire cu coduri QR în limba japoneză.',
    result:
      'Linia co-branded cu 3 modele lansată la Tokyo Marine Show. 2,800 de unități prevândute înainte de lansarea publică. Prezentată în 5 publicații japoneze de lifestyle.',
    outcomeMetrics: [
      {
        label: 'Modele',
        value: '3',
      },
      {
        label: 'Unități prevândute',
        value: '2,800',
      },
      {
        label: 'Apariții în media',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Comunitate rezidențială americană la lac',
    product: 'Facilitate comunitară — Flotă SUP',
    industry: 'Imobiliare / Comunitate',
    challenge:
      'O comunitate rezidențială de lux la lac dorea să ofere SUP-uri ca facilitate pentru rezidenți: flotă cu întreținere redusă, depozitare sigură pe mal și un sistem de împrumut self-service pentru 200+ locuințe.',
    solution:
      'Am furnizat 15 SUP-uri de clasă comercială cu un sistem de dulapuri de depozitare rezistente la intemperii. Am proiectat un sistem de checkout self-service bazat pe coduri QR cu integrarea renunțărilor digitale. Am furnizat serviciu de întreținere sezonieră.',
    result:
      '85% dintre gospodării au folosit facilitățile SUP în primul sezon. Valorile proprietăților din zona de pe malul lacului au crescut cu 7%. Comunitatea a câștigat premiul «Best Lakeside Living».',
    outcomeMetrics: [
      {
        label: 'SUP-uri',
        value: '15',
      },
      {
        label: 'Utilizare de gospodării',
        value: '85%',
      },
      {
        label: 'Impact asupra valorii imobilelor',
        value: '+7%',
      },
      {
        label: 'Premiu',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Lanț de stațiuni de plajă din Mediterana',
    product: 'Flotă de stațiune — SUP + accesorii',
    industry: 'Hotelier / Turism',
    challenge:
      'Un lanț mediteranean de 3 stațiuni dorea să lanseze un program unificat de activități nautice cu 120 de SUP-uri cu branding personalizat, carduri de siguranță multilingve și un sistem de întreținere prin rotație.',
    solution:
      'Am proiectat un pachet de flotilă dedicat resorturilor din PVC de clasă marină rezistent la UV, grafică de punte cu brandingul hotelului în 3 scheme cromatice și un sistem de etichetare colorată pentru întreținere. Am inclus instruirea personalului și reînnoirea trimestrială a pieselor de schimb.',
    result:
      'Flotila implementată în 3 resorturi. Veniturile din activități acvatice au crescut cu 210% în primul sezon. Scorurile de satisfacție a oaspeților pentru facilități au urcat de la 4.1 la 4.7/5.',
    outcomeMetrics: [
      {
        label: 'SUP-uri livrate',
        value: '120',
      },
      {
        label: 'Resorturi',
        value: '3',
      },
      {
        label: 'Creștere venituri',
        value: '210%',
      },
      {
        label: 'Scor oaspeți',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Venituri din activități acvatice (anual)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Rată de înlocuire a echipamentelor',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Satisfacția oaspeților (facilități)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distribuitor de sporturi nautice din Orientul Mijlociu',
    product: 'Gamă completă de produse — SUP, bărci, accesorii',
    industry: 'Distribuție / Maritim',
    challenge:
      'Un distribuitor din GCC dorea drepturi exclusive pentru întreaga gamă Afarer în 6 țări din Golf, cu ambalaj în arabă, specificații de materiale rezistente la căldură și condiții de garanție conforme sharia.',
    solution:
      'Am stabilit un acord de distribuție exclusivă. Am dezvoltat ambalaje și materiale de marketing în arabă. Am validat specificațiile materialelor la temperatură ambiantă de 50°C. Am adaptat termenii garanției pentru conformitate regională.',
    result:
      '12 comenzi de containere în primele 18 luni. Rețea de 15 dealeri/sub-distribuitori stabilită. Cotă de piață estimată la 18% din segmentul SUP umflabile din GCC.',
    outcomeMetrics: [
      {
        label: 'Containere',
        value: '12',
      },
      {
        label: 'Rețea de dealeri',
        value: '15',
      },
      {
        label: 'Cotă de piață',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: 'Retailer european de articole outdoor',
    product: 'Linie SUP cu marcă proprie',
    industry: 'Comerț cu amănuntul',
    challenge:
      'Un retailer european de articole outdoor avea nevoie de o linie SUP cu marcă proprie, cu grafică unică a punții, PVC ecologic și ambalaj gata de vânzare — totul livrat în 60 de zile.',
    solution:
      'Am dezvoltat fișiere personalizate de tipar digital, am achiziționat PVC conform REACH și am comprimat probarea de la 3 runde la 1, plasând echipa de design la fabrica noastră din Qingdao.',
    result:
      '55 de zile de la PO semnat până la FOB. 2,400 de unități în 4 SKU-uri. Comanda repetată plasată înainte de sosirea primului container.',
    outcomeMetrics: [
      {
        label: 'Termen de livrare',
        value: '55 de zile',
      },
      {
        label: 'Unități',
        value: '2,400',
      },
      {
        label: 'SKUs',
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Agenție maritimă din Asia de Sud-Est',
    product: 'Flotă SUP de patrulă și salvare',
    industry: 'Guvernamental / Securitate maritimă',
    challenge:
      'O agenție maritimă guvernamentală solicita 20 de SUP-uri de patrulă și salvare cu țesătură Hypalon rezistentă la foc, suporturi integrate pentru comunicații și conformitate cu SOLAS capitolul III.',
    solution:
      'Am fabricat 20 de SUP-uri cu tuburi din CSM Hypalon, inele D rezistente și pachete de lumini de navigație preinstalate. Echipa de inspecție a fabricii a asistat la încercările pe mare. Pachetul complet de documentație SOLAS a fost furnizat.',
    result:
      'Contract livrat în 4 luni. Flotila implementată pentru patrulare de frontieră, căutare și salvare și răspuns la dezastre pe 3 baze regionale.',
    outcomeMetrics: [
      {
        label: 'SUP-uri de patrulă',
        value: '20',
      },
      {
        label: 'Livrare',
        value: '4 luni',
      },
      {
        label: 'Baze',
        value: '3',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Startup american de sporturi nautice',
    product: 'Linie SUP personalizată',
    industry: 'Startup / Comerț cu amănuntul',
    challenge:
      'Un startup american de sporturi nautice avea nevoie de un SUP de înaltă performanță Drop-Stitch cu design personalizat al punții, ambalaj co-branding și certificare BSCI pentru vânzarea cu amănuntul.',
    solution:
      'Am adaptat matrița SUP existentă cu profil de rocker modificat, am dezvoltat grafică de ambalaj co-branded și am furnizat documentația completă de audit BSCI.',
    result:
      'Listat cu succes în 3 mari lanțuri outdoor din SUA. 5,000+ unități în primul an cu rată de sell-through de 98%.',
    outcomeMetrics: [
      {
        label: 'Lanțuri de retail',
        value: '3',
      },
      {
        label: 'Unități în primul an',
        value: '5,000+',
      },
      {
        label: 'Sell-through',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: 'Uniunea sportivă universitară britanică',
    product: 'Flotă de club studențesc — SUP + siguranță',
    industry: 'Educație',
    challenge:
      'O universitate britanică cu un club activ de sporturi nautice trebuia să înlocuiască o flotă îmbătrânită cu SUP-uri gonflabile moderne: depozitare compactă, utilizare la orice nivel și standarde de competiție BUCS.',
    solution:
      'Am furnizat 25 de SUP-uri all-around cu rucsacuri compacte de depozitare, 10 SUP-uri de turism pentru antrenament competițional și un pachet complet de echipamente de siguranță. Am furnizat instruire pentru oficialii clubului și ateliere de întreținere.',
    result:
      'Flotila lansată la Târgul Bobocilor. Numărul de membri ai clubului a crescut cu 140%. Universitatea a găzduit prima competiție SUP interuniversitară din ultimii 5 ani.',
    outcomeMetrics: [
      {
        label: 'SUP-uri furnizate',
        value: '35',
      },
      {
        label: 'Creșterea numărului de membri',
        value: '140%',
      },
      {
        label: 'Competiții găzduite',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Brand american de echipamente nautice',
    product: 'Matrită personalizată — SUP de tură',
    industry: 'OEM / Producție',
    challenge:
      'Un brand american solicita o matriță SUP complet nouă: formă de tură de 14 picioare, canale integrate pentru sonar de pescuit, platformă de stație consolidată și capacitate de încărcare de 400 lbs.',
    solution:
      'Am proiectat o nouă matriță drop-stitch de 14 picioare cu densitate întărită a nucleului drop-stitch, inserții incorporate pentru șine de accesorii și un strat inferior de PVC de clasă militară pentru rezistență la abraziune. Am produs 3 iterații de prototip înainte de finalizarea sculelor.',
    result:
      'Noua matriță executată în 14 săptămâni. 3,500 de unități produse în prima serie. Produsul a primit distincția «Best Fishing SUP 2025» din partea Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Timp de execuție a matriței',
        value: '14 săptămâni',
      },
      {
        label: 'Prima serie',
        value: '3,500 de unități',
      },
      {
        label: 'Premiu',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
