import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'retail-private-label': {
    client: 'Europski maloprodajni lanac opreme za aktivnosti u prirodi',
    product: 'Linija SUP-ova pod privatnom markom',
    industry: 'Maloprodaja',
    challenge:
      'Europskom trgovcu na malo bila je potrebna linija SUP-ova pod privatnom markom s jedinstvenom grafikom palube, ekološki prihvatljivim PVC-om i ambalažom spremnom za maloprodaju — sve isporučeno u roku od 60 dana.',
    solution:
      'Razvili smo prilagođene datoteke za digitalni tisak, osigurali PVC u skladu s REACH-om i smanjili uzorkovanje sa 3 runde na 1 smještanjem dizajnerskog tima u našoj tvornici u Qingdaou.',
    result:
      '55 dana od potpisane narudžbe (PO) do FOB-a. 2.400 jedinica u 4 SKU-a. Ponovna narudžba zaprimljena prije dolaska prvog kontejnera.',
    outcomeMetrics: [
      {
        label: 'Rok isporuke',
        value: '55 dana',
      },
      {
        label: 'Jedinice',
        value: '2.400',
      },
      {
        label: 'SKU-ovi',
        value: '4',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Američki startup za vodene sportove',
    product: 'Prilagođena linija SUP-ova',
    industry: 'Startup / Maloprodaja',
    challenge:
      'Američkom startupu za vodene sportove bio je potreban visokoučinkoviti drop-stitch SUP s prilagođenim dizajnom palube, ambalažom s dvojnim brendiranjem i BSCI certifikatom za plasman u maloprodaju.',
    solution:
      'Prilagodili smo postojeći kalup SUP-a izmijenjenim rocker profilom, razvili dizajn ambalaže s dvojnim brendiranjem i dostavili kompletnu dokumentaciju BSCI revizije.',
    result:
      'Uspješno uvršteno u ponudu 3 velika američka lanca opreme za aktivnosti u prirodi. Više od 5.000 jedinica u prvoj godini uz 98-postotnu prodaju zaliha.',
    outcomeMetrics: [
      {
        label: 'Maloprodajni lanci',
        value: '3',
      },
      {
        label: 'Jedinice u prvoj godini',
        value: '5.000+',
      },
      {
        label: 'Prodaja zaliha',
        value: '98 %',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Australski distributer',
    product: 'Asortiman SUP-ova s CE certifikatom',
    industry: 'Pomorstvo / Maloprodaja',
    challenge:
      'Australskom distributeru bio je potreban asortiman SUP-ova s CE certifikatom, prilagođenim bojama palube, poboljšanom PVC opcijom i sukladnošću s australskim standardom AS 1799.',
    solution:
      'Izradili smo predserijske uzorke u 4 varijante boja, osigurali vojnički gradivni PVC i koordinirali neovisnim ispitivanjem sukladnosti s AS 1799.',
    result:
      'Asortiman od 3 modela SUP-ova lansiran na tržištu Australije i Novog Zelanda. Uslijedio je ugovor s maloprodajnim lancem za 12 trgovina.',
    outcomeMetrics: [
      {
        label: 'Lansirani modeli',
        value: '3',
      },
      {
        label: 'Maloprodajne trgovine',
        value: '12',
      },
      {
        label: 'Sukladnost',
        value: 'AS 1799',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karipska grupacija luksuznih odmarališta',
    product: 'Flota odmarališta — SUP-ovi',
    industry: 'Ugostiteljstvo / Turizam',
    challenge:
      'Grupacija od 5 odmarališta trebala je jedinstvenu flotu opreme za najam vodenih sportova — SUP daske — s dosljednim brendiranjem, materijalima otpornima na UV zrake zbog tropskog sunca i planom zamjene na pet godina.',
    solution:
      'Dizajnirali smo prilagođeni paket flote od 3 modela SUP-ova s UV-stabiliziranim PVC-om, grafikom palube s brendom odmarališta i faziranim rasporedom isporuke. Osigurali smo obuku osoblja i namjenski komplet rezervnih dijelova za svako odmaralište.',
    result:
      'Isporučeno 180 jedinica u 5 odmarališta. Uslijedila je ponovna narudžba za 2 nova objekta. Trošak po jedinici smanjen za 40 % u odnosu na prethodne dobavljače.',
    outcomeMetrics: [
      {
        label: 'Isporučene jedinice',
        value: '180',
      },
      {
        label: 'Odmarališta',
        value: '5',
      },
      {
        label: 'Smanjenje troškova',
        value: '40 %',
      },
    ],
    beforeAfter: [
      {
        label: 'Godišnji trošak zamjene dasaka',
        before: '28.000 USD',
        after: '12.000 USD',
      },
      {
        label: 'Zastoj flote (dana/godina)',
        before: '45',
        after: '8',
      },
      {
        label: 'Ocjena zadovoljstva gostiju',
        before: '3,8/5',
        after: '4,6/5',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Jugoistočnoazijska pomorska agencija',
    product: 'Flota SUP-ova za patrolu i spašavanje',
    industry: 'Vladin sektor / Pomorska sigurnost',
    challenge:
      'Vladinoj pomorskoj agenciji bilo je potrebno 20 patrolnih i spašilačkih SUP-ova s visoko vidljivim palubama, ugrađenim nosačima komunikacijske opreme i konstrukcijom s CE certifikatom.',
    solution:
      'Proizveli smo 20 SUP-ova s konstrukcijom od vojnog PVC-a, izdržljivim D-prstenovima i unaprijed ugrađenim kompletima navigacijskih svjetala. Tvornički inspekcijski tim prisustvovao je morskim ispitivanjima. Isporučen je kompletan paket dokumentacije o sukladnosti.',
    result:
      'Ugovor realiziran u 4 mjeseca. Flota je raspoređena za graničnu patrolu, potragu i spašavanje te odziv na katastrofe na 3 regionalne baze.',
    outcomeMetrics: [
      {
        label: 'Patrolni SUP-ovi',
        value: '20',
      },
      {
        label: 'Isporuka',
        value: '4 mjeseca',
      },
      {
        label: 'Baze',
        value: '3',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Europski DTC brend vodenih sportova',
    product: 'Brendirana linija SUP-ova + pribor',
    industry: 'E-trgovina / Maloprodaja',
    challenge:
      'Brzo rastućem DTC brendu vodenih sportova bio je potreban cjelovit SUP paket (daska, pumpa, veslo, povez, torba) s premium ambalažom namijenjenom ispunjavanju narudžbi u e-trgovini — izravno potrošačima putem DHL/FedExa, bez oštećenja.',
    solution:
      'Razvili smo liniju proizvoda s dvojnim brendiranjem, prilagođenim oblikovanjem EPS jezgre, vlasničkom drop-stitch tehnologijom za viši tlak te maloprodajnim kutijama od dvoslojnog valovitog kartona s zaštitnim umetcima. Integrirali smo provjeru autentičnosti i registraciju jamstva putem QR koda.',
    result:
      'Linija od 3 modela SUP-ova lansirana u 75 dana. Više od 15.000 jedinica u prvih 12 mjeseci. Prosječna ocjena 4,8★ na temelju više od 2.000 recenzija. Stopa oštećenja u prijevozu 0,3 %.',
    outcomeMetrics: [
      {
        label: 'Modeli',
        value: '3',
      },
      {
        label: 'Jedinice',
        value: '15.000+',
      },
      {
        label: 'Prosječna ocjena',
        value: '4,8★',
      },
      {
        label: 'Stopa oštećenja',
        value: '0,3 %',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Lanac mediteranskih odmarališta uz plažu',
    product: 'Flota odmarališta — SUP-ovi + pribor',
    industry: 'Ugostiteljstvo / Turizam',
    challenge:
      'Lanac od 3 mediteranska odmarališta želio je pokrenuti jedinstveni program vodenih aktivnosti u svojim hotelima uz plažu, uz 120 SUP-ova s prilagođenim brendiranjem, višejezične kartice sigurnosti i sustav rotacije održavanja.',
    solution:
      'Dizajnirali smo paket flote prilagođen odmaralištima s pomorskim PVC-om otpornim na UV zrake, grafikom palube s brendom hotela u 3 sheme boja i sustavom označavanja održavanja bojama. Uključeni su obuka osoblja i tromjesečna dopuna rezervnih dijelova.',
    result:
      'Flota je raspoređena u 3 odmarališta. Prihod od vodenih aktivnosti porastao je 210 % u prvoj sezoni. Ocjene zadovoljstva gostiju sadržajima porasle su s 4,1 na 4,7/5.',
    outcomeMetrics: [
      {
        label: 'Isporučeni SUP-ovi',
        value: '120',
      },
      {
        label: 'Odmarališta',
        value: '3',
      },
      {
        label: 'Rast prihoda',
        value: '210 %',
      },
      {
        label: 'Ocjena gostiju',
        value: '4,7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Prihod od vodenih aktivnosti (godišnje)',
        before: '45.000 USD',
        after: '140.000 USD',
      },
      {
        label: 'Stopa zamjene opreme',
        before: '35 %',
        after: '8 %',
      },
      {
        label: 'Zadovoljstvo gostiju (sadržaji)',
        before: '4,1/5',
        after: '4,7/5',
      },
    ],
  },
  'australian-paddle-club': {
    client: 'Australska udruga veslačkih klubova',
    product: 'Klupska flota — SUP-ovi + sigurnosna oprema',
    industry: 'Rekreacija / Obrazovanje',
    challenge:
      'Udruga od 15 klubova trebala je ujednačiti opremu među članicama klubovima izdržljivim SUP daskama pogodnim za početnike, prslucima za spašavanje s CE certifikatom i centraliziranim modelom nabave radi smanjenja troškova po klubu.',
    solution:
      'Ujednačili smo klupsku flotu u 3 razine (početna, napredna, instruktorska). Dizajnirali smo grafiku palube u bojama klubova s klupskim logotipima. Uveli smo središnje skladištenje s tromjesečnom distribucijom na razini klubova.',
    result:
      '350 jedinica u 15 klubova. Smanjenje troškova za 28 % objedinjenom nabavom. Zadovoljstvo 92 % članova kvalitetom opreme.',
    outcomeMetrics: [
      {
        label: 'Opremljeni klubovi',
        value: '15',
      },
      {
        label: 'Isporučene jedinice',
        value: '350',
      },
      {
        label: 'Smanjenje troškova',
        value: '28 %',
      },
      {
        label: 'Zadovoljstvo članova',
        value: '92 %',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Europski operater najma i odmarališta uz jezero',
    product: 'Flota za najam — SUP-ovi, prsluci za spašavanje, pribor',
    industry: 'Najam / Turizam',
    challenge:
      'Operateru odmarališta uz jezero sa 6 postaja najma bila je potrebna vrlo izdržljiva flota SUP-ova za najam sa sustavima brzog sušenja, konstrukcijom otpornom na oštećenja i predvidivim višegodišnjim planom zamjene.',
    solution:
      'Isporučili smo komercijalne SUP-ove za najam s ojačanim rubnim vrpcama, EVA palubama koje se brzo suše i UV-stabiliziranim PVC-om. Razvili smo sustav praćenja habanja označavanjem bojama uz godišnja izvješća o stanju.',
    result:
      '200 SUP-ova raspoređeno na 6 postaja. Godišnji trošak održavanja smanjen za 55 %. Vijek trajanja opreme produljen sa 2 na 4 godine.',
    outcomeMetrics: [
      {
        label: 'Postaje najma',
        value: '6',
      },
      {
        label: 'Raspoređeni SUP-ovi',
        value: '200',
      },
      {
        label: 'Trošak održavanja',
        value: '-55 %',
      },
      {
        label: 'Vijek trajanja',
        value: '4 godine',
      },
    ],
    beforeAfter: [
      {
        label: 'Prosječan vijek trajanja daske',
        before: '2 godine',
        after: '4 godine',
      },
      {
        label: 'Godišnje održavanje po dasci',
        before: '85 USD',
        after: '38 USD',
      },
      {
        label: 'Prihod od najma po dasci/sezonu',
        before: '1.200 USD',
        after: '1.850 USD',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanadski maloprodajni lanac opreme za aktivnosti u prirodi',
    product: 'SUP-ovi i pribor pod privatnom markom',
    industry: 'Maloprodaja',
    challenge:
      'Kanadskom trgovcu na malo sa 25 trgovina bio je potreban ekskluzivni asortiman SUP-ova pod privatnom markom s dvojezičnom ambalažom na francuskom i engleskom, specifikacijama materijala za hladne vremenske uvjete i sukladnošću s kanadskim propisima o plovidbi.',
    solution:
      'Razvili smo 4 modela SUP-ova s PVC mješavinom otpornom na hladnoću, ocijenjenom do -15 °C. Izradili smo dvojezičnu maloprodajnu ambalažu s kanadskim regulatornim oznakama. Isporučili smo stalke za izlaganje i materijale za obuku osoblja.',
    result:
      'Ekskluzivna linija lansirana u 25 trgovina. 3.800 jedinica prodano u prvoj sezoni. Trgovac je obnovio trogodišnji ugovor s povećanim brojem artikala.',
    outcomeMetrics: [
      {
        label: 'Trgovine',
        value: '25',
      },
      {
        label: 'Jedinice u prvoj sezoni',
        value: '3.800',
      },
      {
        label: 'Ugovor',
        value: 'Obnova na 3 godine',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distributer vodenih sportova s Bliskog istoka',
    product: 'Cjelovita linija proizvoda — SUP-ovi i pribor',
    industry: 'Distribucija / Pomorstvo',
    challenge:
      'Distributer sa sjedištem u GCC-u želio je ekskluzivna prava zastupanja cjelokupne afarer linije proizvoda u 6 zemalja Zaljeva, s prilagođenom ambalažom na arapskom jeziku, specifikacijama materijala otpornih na vrućinu i uvjetima jamstva u skladu sa šerijatom.',
    solution:
      'Sklopili smo ekskluzivni distribucijski ugovor. Razvili smo ambalažu i marketinške materijale na arapskom jeziku. Potvrdili smo specifikacije materijala pri okolnoj temperaturi od 50 °C. Prilagodili smo uvjete jamstva regionalnim propisima.',
    result:
      '12 narudžbi u kontejnerima u prvih 18 mjeseci. Uspostavljena mreža od 15 dilerâ i poddistributera. Procijenjeni tržišni udio od 18 % u GCC segmentu napuhivih SUP-ova.',
    outcomeMetrics: [
      {
        label: 'Kontejneri',
        value: '12',
      },
      {
        label: 'Dilerska mreža',
        value: '15',
      },
      {
        label: 'Tržišni udio',
        value: '18 %',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japanski lifestyle brend',
    product: 'Linija SUP-ova s dvojnim brendiranjem',
    industry: 'OEM / Brend',
    challenge:
      'Premium japanski lifestyle brend želio je ući na tržište vodenih sportova linijom SUP-ova s dvojnim brendiranjem, uz naglasak na minimalistički dizajn, ekološki prihvatljive materijale i preciznu proizvodnju primjerenu zahtjevnim japanskim potrošačima.',
    solution:
      'Izradili smo prilagođene kalupe s profinjenijim profilom ruba. Osigurali smo umetke za palubu od bambusa s FSC certifikatom i opcije recikliranog PVC-a. Razvili smo premium doživljaj raspakiravanja s uputama za njegu na japanskom jeziku dostupnima putem QR koda.',
    result:
      'Linija od 3 modela s dvojnim brendiranjem lansirana na sajmu Tokyo Marine Show. 2.800 jedinica prodano unaprijed prije javnog predstavljanja. Istaknuto u 5 japanskih publikacija o stilu života.',
    outcomeMetrics: [
      {
        label: 'Modeli',
        value: '3',
      },
      {
        label: 'Unaprijed prodane jedinice',
        value: '2.800',
      },
      {
        label: 'Medijski prikazi',
        value: '5',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Američki brend opreme za vodene sportove',
    product: 'Prilagođeni kalup — touring SUP',
    industry: 'OEM / Proizvodnja',
    challenge:
      "Američkom brendu bio je potreban potpuno novi kalup za SUP u touring obliku od 14', s ugrađenim kanalima za nosač uređaja za pronalaženje ribe, ojačanom platformom za stajanje i nosivosti od 400 lbs — namijenjen tržištu SUP-ova za ribolov.",
    solution:
      "Konstruirali smo novi drop-stitch kalup od 14' s povećanom gustoćom drop-stitch jezgre, ugrađenim umetcima za tračnice pribora i donjim slojem od vojnog PVC-a zbog otpornosti na habanje. Izradili smo 3 iteracije prototipa prije završetka alata.",
    result:
      'Novi kalup izrađen u 14 tjedana. 3.500 jedinica proizvedeno u prvoj proizvodnoj seriji. Proizvod je u časopisu Outdoor Gear Lab proglašen „Best Fishing SUP 2025”.',
    outcomeMetrics: [
      {
        label: 'Vrijeme izrade kalupa',
        value: '14 tjedana',
      },
      {
        label: 'Prva serija',
        value: '3.500 jedinica',
      },
      {
        label: 'Nagrada',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globalna tehnološka korporacija',
    product: 'Korporativni program dobrobiti — Flota SUP-ova',
    industry: 'Korporativni sektor / Wellness',
    challenge:
      'Tehnološka tvrtka s liste Fortune 500 željela je pokrenuti vodeni program dobrobiti za zaposlenike na 4 globalna kampusa uz jezera, s 60 SUP-ova s korporativnim brendiranjem, rješenjima za skladištenje i obukom instruktora.',
    solution:
      'Isporučili smo flotu stabilnih all-round SUP-ova s grafikom palube s korporativnim logotipom. Dizajnirali smo stalke za skladištenje na lokaciji, otporne na vremenske uvjete. Certificirali smo 12 internih instruktora kroz afarer program obuke.',
    result:
      'Program pokrenut na 4 kampusa. Više od 2.400 sudjelovanja zaposlenika u prvoj godini. Ocjena zadovoljstva zaposlenika 94 %. Istaknuto u izvješću tvrtke o održivosti.',
    outcomeMetrics: [
      {
        label: 'Kampusi',
        value: '4',
      },
      {
        label: 'Sudionici',
        value: '2.400+',
      },
      {
        label: 'Zadovoljstvo',
        value: '94 %',
      },
    ],
  },
  'university-club-program': {
    client: 'Sportski savez britanskog sveučilišta',
    product: 'Flota studentskog kluba — SUP-ovi + sigurnost',
    industry: 'Obrazovanje',
    challenge:
      'Britanskom sveučilištu s aktivnim klubom vodenih sportova bilo je potrebno zamijeniti zastarjelu flotu modernim napuhivim SUP-ovima koji se mogu skladištiti u ograničenom prostoru kampusa, primjereni su studentima svih razina vještine i usklađeni su sa natjecateljskim standardima BUCS-a.',
    solution:
      'Isporučili smo 25 all-round SUP-ova sa kompaktnim ruksacima za skladištenje, 10 touring SUP-ova za natjecateljske treninge i cjelovit paket sigurnosne opreme. Osigurali smo obuku čelnika kluba i radionice održavanja.',
    result:
      'Flota predstavljena na sveučilišnom sajmu brucoša. Članstvo kluba poraslo je za 140 %. Sveučilište je prvi put nakon 5 godina bilo domaćin međusveučilišnog SUP natjecanja.',
    outcomeMetrics: [
      {
        label: 'Isporučeni SUP-ovi',
        value: '35',
      },
      {
        label: 'Rast članstva',
        value: '140 %',
      },
      {
        label: 'Domaćinstvo natjecanja',
        value: '1',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Operater karipske linije za krstarenja',
    product: 'Flota za aktivnosti na brodu — SUP-ovi',
    industry: 'Ugostiteljstvo / Krstarenja',
    challenge:
      'Veliki operater linije za krstarenja želio je nuditi SUP kao obalnu izletnu aktivnost na 7 brodova koji pristaju u lukama privatnih otoka. Bili su potrebni kompaktni smještaj na brodu, brzi ciklusi napuhivanja i ispuhivanja te dosljedan brend na razini cijele flote.',
    solution:
      'Razvili smo SUP paket prilagođen krstarenjima s ventilskim sustavima za brzo napuhivanje, kompaktnim skladištenjem u ruksacima i grafikom palube s brendom broda. Osigurali smo obuku namjenske obalne ekipe i ormare s rezervnim dijelovima u 3 otočne luke.',
    result:
      'Program pokrenut na 7 brodova. Više od 15.000 sudjelovanja gostiju u prvoj sezoni. Prosječna ocjena izleta 4,6★. Prošireno na 3 dodatna broda u drugoj godini.',
    outcomeMetrics: [
      {
        label: 'Brodovi',
        value: '7',
      },
      {
        label: 'Sudjelovanja gostiju',
        value: '15.000+',
      },
      {
        label: 'Ocjena',
        value: '4,6★',
      },
      {
        label: 'Proširenje u 2. godini',
        value: '+3 broda',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridska tvrtka za ribolovne izlete',
    product: 'Prilagođena flota ribolovnih SUP-ova',
    industry: 'Ribolov / Čarter',
    challenge:
      'Floridski operater ribolovnih izleta želio je svojoj ponudi dodati SUP ribolovne ture, uz stabilne platforme s ugrađenim nosačima hladnjaka, tračnicama za držače štapova i kompatibilnošću s pretvaračem sonde za ribolov.',
    solution:
      'Prilagodili smo postojeću stabilnu SUP platformu s 4 ugrađena držača štapova, uklonjivim sustavom nosača za hladnjak i vodonepropusnim nosačem sonde u scupper otvoru. Osigurali smo cijene za flotu i program sezonskih zamjena.',
    result:
      'SUP ribolovne ture pokrenute kao novi izvor prihoda. 45 % postojećih kupaca čartera rezerviralo je SUP ture. Flota proširena sa 8 na 20 dasaka u 2 sezone.',
    outcomeMetrics: [
      {
        label: 'Početna flota',
        value: '8',
      },
      {
        label: 'Flota u 2. godini',
        value: '20',
      },
      {
        label: 'Unakrsna prodaja',
        value: '45 %',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Američka stambena zajednica uz jezero',
    product: 'Sadržaj zajednice — Flota SUP-ova',
    industry: 'Nekretnine / Zajednica',
    challenge:
      'Luksuzna stambena zajednica uz jezero željela je stanarima ponuditi SUP daske kao sadržaj, uz flotu koja zahtijeva malo održavanja, sigurno skladište uz obalu jezera i sustav samostalne posudbe za više od 200 kućanstava.',
    solution:
      'Isporučili smo 15 komercijalnih SUP-ova sa sustavom vodootpornih ormara za skladištenje. Dizajnirali smo samostalnu posudbu putem QR koda s integriranim digitalnim odricanjem odgovornosti. Osigurali smo sezonski servis održavanja.',
    result:
      '85 % kućanstava koristilo je SUP sadržaj u prvoj sezoni. Vrijednost nekretnina u dijelu uz jezero porasla je za 7 %. Zajednica je osvojila nagradu „Best Lakeside Living”.',
    outcomeMetrics: [
      {
        label: 'SUP-ovi',
        value: '15',
      },
      {
        label: 'Korištenje kućanstava',
        value: '85 %',
      },
      {
        label: 'Utjecaj na vrijednost nekretnina',
        value: '+7 %',
      },
      {
        label: 'Nagrada',
        value: 'Best Lakeside Living',
      },
    ],
  },
};
