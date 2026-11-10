import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'retail-private-label': {
    client: 'Evropski trgovec z outdoor opremo',
    product: 'Linija SUP desk z zasebno blagovno znamko',
    industry: 'Maloprodaja',
    challenge:
      'Evropski trgovec z outdoor opremo je potreboval linijo SUP desk z zasebno blagovno znamko, z edinstveno grafiko krovov, okolju prijazen PVC in maloprodajno pripravljeno embalažo — vse dobavljeno v 60 dneh.',
    solution:
      'Razvili smo datoteke za digitalni tisk po meri, pridobili PVC v skladu z REACH in skrajšali vzorčenje s 3 krogov na 1 z umestitvijo oblikovalne ekipe v naši tovarni v Qingdau.',
    result:
      '55 dni od podpisanega nabavnega naročila do FOB. 2,400 enot v 4 različicah SKU. Ponovno naročilo je bilo oddano pred prihodom prvega kontejnerja.',
    outcomeMetrics: [
      {
        label: 'Rok dobave',
        value: '55 dni',
      },
      {
        label: 'Enote',
        value: '2,400',
      },
      {
        label: 'Različice SKU',
        value: '4',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Ameriško zagonsko podjetje za vodne športe',
    product: 'Linija SUP desk po meri',
    industry: 'Zagonsko podjetje / Maloprodaja',
    challenge:
      'Ameriško zagonsko podjetje za vodne športe je potrebovalo visoko zmogljivo SUP desko s drop-stitch tehnologijo, krovnim dizajnom po meri, embalažo z dvojno znamko in certifikatom BSCI za uvrstitev v maloprodajo.',
    solution:
      'Prilagodili smo obstoječi kalup za SUP s spremenjenim profilom rocker, razvili grafično podobo embalaže z dvojno znamko in zagotovili popolno dokumentacijo za revizijo BSCI.',
    result:
      'Uspešno uvrščeno v 3 velike ameriške outdoor verige. Več kot 5,000 enot v prvem letu z 98-odstotno stopnjo izprodaje.',
    outcomeMetrics: [
      {
        label: 'Maloprodajne verige',
        value: '3',
      },
      {
        label: 'Enote v prvem letu',
        value: '5,000+',
      },
      {
        label: 'Stopnja izprodaje',
        value: '98%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Avstralski distributer',
    product: 'Paleta SUP desk s certifikatom CE',
    industry: 'Pomorstvo / Maloprodaja',
    challenge:
      'Avstralski distributer je zahteval paleto SUP desk s certifikatom CE, z barvami krovov po meri, nadgrajeno različico PVC in skladnostjo z avstralskim standardom AS 1799.',
    solution:
      'Izdelali smo predproizvodne vzorce v 4 barvnih različicah, pridobili vojaški PVC in usklajevali preizkuse skladnosti AS 1799 pri neodvisni tretji strani.',
    result:
      'Paleta SUP desk s 3 modeli je bila predstavljena na trgu AU/NZ. Sledila je pogodba z maloprodajno verigo za 12 trgovin.',
    outcomeMetrics: [
      {
        label: 'Predstavljeni modeli',
        value: '3',
      },
      {
        label: 'Maloprodajne trgovine',
        value: '12',
      },
      {
        label: 'Skladnost',
        value: 'AS 1799',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karibska skupina luksuznih letovišč',
    product: 'Flota letovišča — SUP deske',
    industry: 'Gostinstvo / Turizem',
    challenge:
      'Skupina 5 letovišč je potrebovala poenoteno floto opreme za najem vodnih športov — SUP deske — z doslednim blagovnim označevanjem, materiali, odpornimi na UV-žarke za tropsko sonce, in 5-letnim načrtom zamenjave.',
    solution:
      'Oblikovali smo paket flote SUP desk po meri s 3 modeli, s PVC, stabiliziranim proti UV-žarkom, grafiko krovov z znamko letovišča in postopnim razporedom dobav. Zagotovili smo usposabljanje osebja in namenski komplet rezervnih delov za vsako letovišče.',
    result:
      '180 enot dobavljenih v 5 letovišč. Ponovno naročilo za 2 novi objekta. 40-odstotno znižanje stroška na enoto v primerjavi s prejšnjimi dobavitelji.',
    outcomeMetrics: [
      {
        label: 'Dobavljene enote',
        value: '180',
      },
      {
        label: 'Letovišča',
        value: '5',
      },
      {
        label: 'Znižanje stroškov',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Letni strošek zamenjave desk',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Nedejavnost flote (dni/leto)',
        before: '45',
        after: '8',
      },
      {
        label: 'Ocena zadovoljstva gostov',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Pomorska agencija jugovzhodne Azije',
    product: 'Patruljna in reševalna flota SUP desk',
    industry: 'Vlada / Pomorska varnost',
    challenge:
      'Vladna pomorska agencija je zahtevala 20 patruljnih in reševalnih SUP desk z visoko vidnimi krovi, vgrajenimi nosilci za komunikacijsko opremo in gradnjo s certifikatom CE.',
    solution:
      'Izdelali smo 20 SUP desk iz vojaškega PVC z ojačenimi D-obroči in predhodno vgrajenimi navigacijskimi lučmi. Inšpekcijska ekipa je spremljala preizkuse na morju. Zagotovili smo popoln paket dokumentacije o skladnosti.',
    result:
      'Pogodba je bila izvedena v 4 mesecih. Flota je razporejena za patruljiranje na meji, iskanje in reševanje ter odzivanje na nesreče na 3 regionalnih bazah.',
    outcomeMetrics: [
      {
        label: 'Patruljne SUP deske',
        value: '20',
      },
      {
        label: 'Dobava',
        value: '4 meseci',
      },
      {
        label: 'Baze',
        value: '3',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Evropska znamka za vodne športe z neposredno prodajo',
    product: 'Linija SUP desk in dodatkov z znamko',
    industry: 'E-trgovina / Maloprodaja',
    challenge:
      'Hitro rastoča znamka za vodne športe z neposredno prodajo je potrebovala popoln paket SUP (deska, črpalka, veslo, varnostni povodec, torba) z vrhunsko embalažo, zasnovano za izpolnjevanje naročil v e-trgovini — neposredno potrošnikom prek DHL/FedEx brez poškodb.',
    solution:
      'Razvili smo produktno linijo z dvojno znamko, z jedrom EPS po meri, lastno drop-stitch tehnologijo za višji tlak in maloprodajno pripravljenimi dvojno stenanimi valovitimi škatlami z vložki. Integrirali smo preverjanje pristnosti in registracijo garancije s QR-kodo.',
    result:
      'Linija SUP desk s 3 modeli je bila predstavljena v 75 dneh. Več kot 15,000 enot v prvih 12 mesecih. Povprečna ocena 4.8★ pri več kot 2,000 mnenjih. 0.3% stopnja poškodb v prevozu.',
    outcomeMetrics: [
      {
        label: 'Modeli',
        value: '3',
      },
      {
        label: 'Enote',
        value: '15,000+',
      },
      {
        label: 'Povprečna ocena',
        value: '4.8★',
      },
      {
        label: 'Stopnja poškodb',
        value: '0.3%',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Veriga sredozemskih plažnih letovišč',
    product: 'Flota letovišča — SUP deske + dodatki',
    industry: 'Gostinstvo / Turizem',
    challenge:
      'Veriga sredozemskih letovišč s 3 objekti je želela uvesti poenoten program vodnih aktivnosti v svojih hotelskih objektih ob plaži, s 120 SUP deskami z označevanjem po meri, večjezičnimi varnostnimi karticami in sistemom rotacijskega vzdrževanja.',
    solution:
      'Oblikovali smo paket flote, prilagojen letoviščem, z morskim UV-odpornim PVC, grafiko krovov z znamko hotela v 3 barvnih shemah in barvno kodiranim sistemom označevanja za vzdrževanje. Vključno z usposabljanjem osebja in četrtletnim dopolnjevanjem rezervnih delov.',
    result:
      'Flota je razporejena v 3 letoviščih. Prihodki vodnih aktivnosti so se v prvi sezoni povečali za 210%. Ocena zadovoljstva gostov s storitvami se je dvignila s 4.1 na 4.7/5.',
    outcomeMetrics: [
      {
        label: 'Dobavljene SUP deske',
        value: '120',
      },
      {
        label: 'Letovišča',
        value: '3',
      },
      {
        label: 'Povečanje prihodkov',
        value: '210%',
      },
      {
        label: 'Ocena gostov',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Letni prihodki vodnih aktivnosti',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Stopnja zamenjave opreme',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Zadovoljstvo gostov (storitve)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'australian-paddle-club': {
    client: 'Avstralska zveza veslaških klubov',
    product: 'Klubska flota — SUP deske + varnostna oprema',
    industry: 'Rekreacija / Izobraževanje',
    challenge:
      'Zveza 15 klubov je morala poenotiti opremo članskih klubov z obstojnimi, za začetnike prijaznimi SUP deskami, rešilnimi jopiči s certifikatom CE in centraliziranim modelom naročanja za znižanje stroškov na klub.',
    solution:
      'Poenotili smo klubo floto v 3 ravneh (začetniki, srednja raven, inštruktorji). Oblikovali smo grafiko krovov v klubskih barvah s klubskimi logotipi. Uvedli smo centralno skladiščenje s četrtletno distribucijo na ravni klubov.',
    result:
      '350 enot v 15 klubih. 28-odstotno znižanje stroškov z združenim nabavnim sistemom. 92-odstotno zadovoljstvo članov s kakovostjo opreme.',
    outcomeMetrics: [
      {
        label: 'Opremljeni klubi',
        value: '15',
      },
      {
        label: 'Dobavljene enote',
        value: '350',
      },
      {
        label: 'Znižanje stroškov',
        value: '28%',
      },
      {
        label: 'Zadovoljstvo članov',
        value: '92%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Evropski ponudnik letovišča in najema ob jezeru',
    product: 'Najemna flota — SUP deske, rešilni jopiči, dodatki',
    industry: 'Najem / Turizem',
    challenge:
      'Upravljavec letovišča ob jezeru s 6 najemnimi postajami je potreboval zelo obstojno najemno floto SUP desk s sistemi hitrega sušenja, gradnjo, odporno na poškodbe, in predvidljivim večletnim razporedom zamenjave.',
    solution:
      'Dobavili smo komercialne najemne SUP deske z ojačenimi robovi, hitro se suščimi EVA krovi in UV-stabiliziranim PVC. Razvili smo barvno kodiran sistem sledenja obrabi z letnimi poročili o stanju.',
    result:
      '200 SUP desk razporejenih na 6 postaj. Letni stroški vzdrževanja so se znižali za 55%. Življenjska doba opreme je podaljšana z 2 na 4 leta.',
    outcomeMetrics: [
      {
        label: 'Najemne postaje',
        value: '6',
      },
      {
        label: 'Razporejene SUP deske',
        value: '200',
      },
      {
        label: 'Stroški vzdrževanja',
        value: '-55%',
      },
      {
        label: 'Življenjska doba',
        value: '4 leta',
      },
    ],
    beforeAfter: [
      {
        label: 'Povprečna življenjska doba desk',
        before: '2 leti',
        after: '4 leta',
      },
      {
        label: 'Letno vzdrževanje na desko',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Najemni prihodek na desko/sezono',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanadska maloprodajna veriga outdoor opreme',
    product: 'Linija SUP desk z zasebno znamko + dodatki',
    industry: 'Maloprodaja',
    challenge:
      'Kanadski maloprodajalec outdoor opreme s 25 trgovinami je zahteval ekskluzivno paleto SUP desk z zasebno znamko, z dvojezično embalažo v francoščini/angleščini, specifikacijami materialov za mrzlo vreme in skladnostjo s kanadskimi predpisi za plovila.',
    solution:
      'Razvili smo 4 modele SUP desk s PVC zmesjo, prožno do -15°C. Izdelali smo dvojezično maloprodajno embalažo s kanadskimi predpisanimi označbami. Zagotovili smo stojala za razstavljanje in gradiva za usposabljanje osebja.',
    result:
      'Ekskluzivna linija je bila predstavljena v 25 trgovinah. 3,800 enot prodanih v prvi sezoni. Trgovec je obnovil 3-letno pogodbo z razširjenim številom različic SKU.',
    outcomeMetrics: [
      {
        label: 'Trgovine',
        value: '25',
      },
      {
        label: 'Enote v prvi sezoni',
        value: '3,800',
      },
      {
        label: 'Pogodba',
        value: 'obnovitev na 3 leta',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distributer vodnih športov na Bližnjem vzhodu',
    product: 'Celotna produktova linija — SUP deske in dodatki',
    industry: 'Distribucija / Pomorstvo',
    challenge:
      'Distributer s sedežem v Svetu za sodelovanje v Perzijskem zalivu (GCC) je želel ekskluzivne pravice za zastopanje celotne afarer produktne linije v 6 državah Zaliva, z embalažo v arabščini po meri, specifikacijami materialov, odpornih na vročino, in garancijskimi pogoji v skladu s šarijo.',
    solution:
      'Sklenili smo ekskluzivno distribucijsko pogodbo. Razvili smo arabsko embalažo in tržno gradivo. Potrdili smo specifikacije materialov pri okoljski temperaturi 50°C. Prilagodili smo garancijske pogoje za regionalno skladnost.',
    result:
      '12 naročil kontejnerjev v prvih 18 mesecih. Vzpostavljena mreža 15 prodajalcev/poddistributerjev. Ocenjeni tržni delež 18% v segmentu napihljivih SUP desk v GCC.',
    outcomeMetrics: [
      {
        label: 'Kontejnerji',
        value: '12',
      },
      {
        label: 'Mreža prodajalcev',
        value: '15',
      },
      {
        label: 'Tržni delež',
        value: '18%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japonska znamka življenjskega sloga',
    product: 'Linija SUP desk z dvojno znamko',
    industry: 'OEM / Blagovna znamka',
    challenge:
      'Vrhunska japonska znamka življenjskega sloga je želela vstopiti na trg vodnih športov z linijo SUP desk z dvojno znamko, ki poudarja minimalističen dizajn, okolju prijazne materiale in natančno izdelavo, primerno za zahtevnega japonskega potrošnika.',
    solution:
      'Izdelali smo kalupe po meri z bolj elegantnim profilom robov. Pridobili smo obloge krovov iz bambusa s certifikatom FSC in možnosti recikliranega PVC. Razvili smo vrhunsko izkušnjo odpiranja embalaže z navodili za nego v japonščini s QR-kodami.',
    result:
      'Linija s 3 modeli z dvojno znamko je bila predstavljena na pomorskem sejmu v Tokiu. 2,800 enot je bilo prodanih v prednaročilu pred javno izdajo. Predstavljeno v 5 japonskih publikacijah o življenjskem slogu.',
    outcomeMetrics: [
      {
        label: 'Modeli',
        value: '3',
      },
      {
        label: 'Prednaročene enote',
        value: '2,800',
      },
      {
        label: 'Medijske objave',
        value: '5',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Ameriška znamka opreme za vodne športe',
    product: 'Kalup po meri — turistična SUP deska',
    industry: 'OEM / Proizvodnja',
    challenge:
      'Ameriška znamka je zahtevala povsem nov kalup za SUP desko v turistični obliki dolžine 14 čevljev, z vgrajenimi kanali za pritrditev eholota, ojačano stojišče in nosilnostjo 400 funtov — zasnovan za trg ribiških SUP desk.',
    solution:
      'Konstruirali smo nov 14-čevljast drop-stitch kalup z ojačano gostoto jedra, vgrajenimi vložki za dodatno opremo in spodnjim slojem iz vojaškega PVC za odpornost proti obrabi. Izdelali smo 3 ponovitve prototipa pred zaključkom izdelave orodja.',
    result:
      'Nov kalup je bil izdelan v 14 tednih. 3,500 enot izdelanih v prvi proizvodni seriji. Izdelek je bil razglašen za "Best Fishing SUP 2025" s strani Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Čas izdelave orodja',
        value: '14 tednov',
      },
      {
        label: 'Prva serija',
        value: '3,500 enot',
      },
      {
        label: 'Nagrada',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globalna tehnološka korporacija',
    product: 'Korporativno dobro počutje — flota SUP desk',
    industry: 'Podjetja / Dobro počutje',
    challenge:
      'Tehnološko podjetje s seznama Fortune 500 je želelo uvesti vodni program dobrega počutja za zaposlene na 4 globalnih kampusih ob jezerih, s 60 SUP deskami s korporativnim označevanjem, rešitvami za shranjevanje in usposabljanjem inštruktorjev.',
    solution:
      'Dobavili smo floto stabilnih vsestranskih SUP desk z grafiko krovov s korporativnim logotipom. Oblikovali smo vremensko odporne stojala za shranjevanje na lokaciji. Potrdili smo 12 internih inštruktorjev prek afarer programa usposabljanja.',
    result:
      'Program je bil uveden na 4 kampusih. Več kot 2,400 sodelovanj zaposlenih v prvem letu. 94-odstotna ocena zadovoljstva zaposlenih. Predstavljeno v poročilu podjetja o trajnostnosti.',
    outcomeMetrics: [
      {
        label: 'Kampusi',
        value: '4',
      },
      {
        label: 'Udeleženci',
        value: '2,400+',
      },
      {
        label: 'Zadovoljstvo',
        value: '94%',
      },
    ],
  },
  'university-club-program': {
    client: 'Športna zveza britanske univerze',
    product: 'Flota študentskega kluba — SUP deske + varnost',
    industry: 'Izobraževanje',
    challenge:
      'Britanska univerza z dejavnim klubom vodnih športov je morala zamenjati zastarelo floto z modernimi napihljivimi SUP deskami, ki jih je mogoče shraniti v omejenem prostoru kampus, uporabljati za študente vseh ravni znanja in ki so skladne s tekmovalnimi standardi BUCS.',
    solution:
      'Dobavili smo 25 vsestranskih SUP desk s kompaktnimi nahrbtniki za shranjevanje, 10 turističnih SUP desk za trening tekmovanj in popoln paket varnostne opreme. Zagotovili smo usposabljanje funkcionarjev kluba in delavnice o vzdrževanju.',
    result:
      'Flota je bila predstavljena na sejmu prvih letnikov. Članstvo kluba se je povečalo za 140%. Univerza je po 5 letih gostila prvo meduniverzitetno tekmovanje v SUP.',
    outcomeMetrics: [
      {
        label: 'Dobavljene SUP deske',
        value: '35',
      },
      {
        label: 'Rast članstva',
        value: '140%',
      },
      {
        label: 'Gostovana tekmovanja',
        value: '1',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Upravljavec karibske križarske linije',
    product: 'Flota aktivnosti na krovu — SUP deske',
    industry: 'Gostinstvo / Križarjenja',
    challenge:
      'Večja križarska linija je želela ponuditi SUP kot izletniško aktivnost na kopnem na 7 ladjah, ki pristajajo v pristaniščih zasebnih otokov. Zahtevali so kompaktno shranjevanje na krovu, hitre cikle napihovanja/izpuščanja in doslednost znamke na ravni flote.',
    solution:
      'Razvili smo paket SUP, prilagojen križarkam, s sistemi ventilov za hitro napihovanje, kompaktnim shranjevanjem v nahrbtnikih in grafiko krovov z znamko ladje. Zagotovili smo usposabljanje namenske ekipe na kopnem in omare z rezervnimi deli v 3 pristaniščih na otokih.',
    result:
      'Program je bil uveden na 7 ladjah. Več kot 15,000 sodelovanj gostov v prvi sezoni. Povprečna ocena izletov 4.6★. V 2. letu razširjeno na 3 dodatne ladje.',
    outcomeMetrics: [
      {
        label: 'Ladje',
        value: '7',
      },
      {
        label: 'Sodelovanja gostov',
        value: '15,000+',
      },
      {
        label: 'Ocena',
        value: '4.6★',
      },
      {
        label: 'Razširitev v 2. letu',
        value: '+3 ladje',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridsko podjetje za ribiške čarterje',
    product: 'Flota ribiških SUP desk po meri',
    industry: 'Ribolov / Čarterji',
    challenge:
      'Floridski ponudnik ribiških čarterjev je želel svojo ponudbo razširiti z ribiškimi turami na SUP deskah, s stabilnimi platformami z vgrajenimi nosilci hladilnih torb, vodili za držala palic in združljivostjo s pretvorniki eholotov.',
    solution:
      'Prilagodili smo obstoječo stabilno platformo SUP s 4 vgrajenimi držali palic, odstranljivim sistemom pritrditve hladilne torbe in vodotesno pritrditvijo pretvornika v odtočni odprtini. Zagotovili smo cene za floto in sezonski program zamenjav.',
    result:
      'Ribiške ture na SUP deskah so uvedene kot nov vir prihodkov. 45% obstoječih strank čarterjev je rezerviralo SUP ture. Flota je v 2 sezonah zrasla z 8 na 20 desk.',
    outcomeMetrics: [
      {
        label: 'Začetna flota',
        value: '8',
      },
      {
        label: 'Flota v 2. letu',
        value: '20',
      },
      {
        label: 'Križna prodaja čarterjem',
        value: '45%',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Ameriško stanovanjsko naselje ob jezeru',
    product: 'Ponudba za prebivalce — flota SUP desk',
    industry: 'Nepremičnine / Skupnost',
    challenge:
      'Luksuzno stanovanjsko naselje ob jezeru je želelo prebivalcem ponuditi SUP deske kot del svoje ponudbe, s floto, ki ne zahteva veliko vzdrževanja, varnim shranjevanjem ob jezerski obali in sistemom samostrežnje izposoje za več kot 200 domov.',
    solution:
      'Dobavili smo 15 komercialnih SUP desk s sistemom vremensko odpornih omar za shranjevanje. Oblikovali smo samostrežno izposojo s QR-kodo in integracijo digitalne izjave o omejitvi odgovornosti. Zagotovili smo sezonski servis vzdrževanja.',
    result:
      '85% gospodinjstev je v prvi sezoni uporabilo ponudbo SUP. Vrednosti nepremičnin v delu ob jezeru so se povečale za 7%. Skupnost je prejela nagrado "Best Lakeside Living".',
    outcomeMetrics: [
      {
        label: 'SUP deske',
        value: '15',
      },
      {
        label: 'Uporaba gospodinjstev',
        value: '85%',
      },
      {
        label: 'Vpliv na vrednost nepremičnin',
        value: '+7%',
      },
      {
        label: 'Nagrada',
        value: 'Best Lakeside Living',
      },
    ],
  },
};
