import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'retail-private-label': {
    client: 'Eiropas brīvdabas preču mazumtirgotājs',
    product: 'Privātā zīmola SUP līnija',
    industry: 'Mazumtirdzniecība',
    challenge:
      'Eiropas brīvdabas preču mazumtirgotājam bija nepieciešama privātā zīmola SUP līnija ar unikāliem klāja grafiskajiem dizainiem, videi draudzīgu PVC un mazumtirdzniecībai gatavu iepakojumu — viss jānogādā 60 dienu laikā.',
    solution:
      'Izstrādājām pielāgotus digitālās drukas failus, iepirkām REACH atbilstošu PVC un samazinājām paraugu izstrādes raundus no 3 uz 1, izvietojot dizaina komandu mūsu rūpnīcā Cindao.',
    result:
      '55 dienas no parakstīta pasūtījuma līdz FOB. 2 400 vienības 4 SKU klāstā. Atkārtots pasūtījums izdarīts pirms pirmā konteinera ierašanās.',
    outcomeMetrics: [
      {
        label: 'Izgatavošanas laiks',
        value: '55 dienas',
      },
      {
        label: 'Vienības',
        value: '2,400',
      },
      {
        label: 'SKU',
        value: '4',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'ASV ūdenssporta jaunuzņēmums',
    product: 'Pielāgota SUP līnija',
    industry: 'Jaunuzņēmums / Mazumtirdzniecība',
    challenge:
      'ASV ūdenssporta jaunuzņēmumam bija nepieciešams augstas veiktspējas drop-stitch SUP ar pielāgotu klāja dizainu, kopīga zīmola iepakojumu un BSCI sertifikāciju mazumtirdzniecības pozīciju iegūšanai.',
    solution:
      'Pielāgojām esošo SUP veidni ar mainītu rocker profilu, izstrādājām kopīga zīmola iepakojuma dizainu un sniedzām pilnu BSCI audita dokumentāciju.',
    result:
      'Veiksmīgi iekļauts 3 lielajos ASV brīvdabas preču tīklos. Vairāk nekā 5 000 vienību pirmajā gadā ar 98% realizācijas līmeni.',
    outcomeMetrics: [
      {
        label: 'Mazumtirdzniecības tīkli',
        value: '3',
      },
      {
        label: 'Vienības pirmajā gadā',
        value: '5,000+',
      },
      {
        label: 'Realizācijas līmenis',
        value: '98%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Austrālijas izplatītājs',
    product: 'CE sertificēts SUP klāsts',
    industry: 'Jūras / Mazumtirdzniecība',
    challenge:
      'Austrālijas izplatītājam bija vajadzīgs CE sertificēts SUP klāsts ar pielāgotām klāja krāsām, uzlabotu PVC versiju un atbilstību Austrālijas standartam AS 1799.',
    solution:
      'Izgatavojām priekšražošanas paraugus 4 krāsu variantos, iepirkām militārā līmeņa PVC un koordinējām neatkarīgu AS 1799 atbilstības testēšanu.',
    result:
      '3 modeļu SUP klāsts palaists Austrālijas / Jaunzēlandes tirgū. Tam sekoja mazumtirdzniecības tīkla līgums 12 veikaliem.',
    outcomeMetrics: [
      {
        label: 'Palaisti modeļi',
        value: '3',
      },
      {
        label: 'Mazumtirdzniecības veikali',
        value: '12',
      },
      {
        label: 'Atbilstība',
        value: 'AS 1799',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karību luksusa kūrortu grupa',
    product: 'Kūrorta flote — SUP dēļi',
    industry: 'Viesmīlība / Tūrisms',
    challenge:
      'Piecu kūrortu grupai bija nepieciešama vienota ūdenssporta inventāra noma — SUP dēļi — ar vienotu zīmolradu, UV izturīgiem materiāliem tropu saulei un 5 gadu nomaiņas plānu.',
    solution:
      'Izstrādājām pielāgotu 3 modeļu SUP flotes paketi ar UV stabilizētu PVC, kūrorta zīmola klāja grafiku un pakāpenisku piegādes grafiku. Nodrošinājām personāla apmācību un atsevišķu rezerves daļu komplektu katram kūrortam.',
    result:
      '180 vienības nogādātas 5 kūrortos. Atkārtots pasūtījums 2 jauniem objektiem. Par 40% zemākas izmaksas par vienību salīdzinājumā ar iepriekšējiem piegādātājiem.',
    outcomeMetrics: [
      {
        label: 'Nogādātās vienības',
        value: '180',
      },
      {
        label: 'Kūrorti',
        value: '5',
      },
      {
        label: 'Izmaksu samazinājums',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Gada dēļu nomaiņas izmaksas',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Flotes dīkstāve (dienas/gadā)',
        before: '45',
        after: '8',
      },
      {
        label: 'Viesu apmierinātības vērtējums',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Dienvidaustrumāzijas jūras aģentūra',
    product: 'Patrulēšanas un glābšanas SUP flote',
    industry: 'Valdība / Jūras drošība',
    challenge:
      'Valsts jūras aģentūrai bija nepieciešami 20 patrulēšanas un glābšanas SUP ar augstas redzamības klājiem, integrētiem sakaru stiprinājumiem un CE sertificētu konstrukciju.',
    solution:
      'Izgatavojām 20 SUP ar militārā līmeņa PVC konstrukciju, izturīgiem D-gredzeniem un iepriekš uzstādītām navigācijas gaismu sistēmām. Rūpnīcas inspekcijas komanda piedalījās jūras izmēģinājumos. Sniedzām pilnu atbilstības dokumentācijas paketi.',
    result:
      'Līgums izpildīts 4 mēnešos. Flote izvietota robežpatrulēšanai, meklēšanas un glābšanas darbībām un katastrofu seku likvidēšanai 3 reģionālajās bāzēs.',
    outcomeMetrics: [
      {
        label: 'Patrulēšanas SUP',
        value: '20',
      },
      {
        label: 'Piegāde',
        value: '4 mēneši',
      },
      {
        label: 'Bāzes',
        value: '3',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Eiropas DTC ūdenssporta zīmols',
    product: 'Zīmola SUP + piederumu līnija',
    industry: 'E-komercija / Mazumtirdzniecība',
    challenge:
      'Strauji augošam DTC ūdenssporta zīmolam bija nepieciešama pilnīga SUP komplekta (dēlis, sūknis, airis, drošības saite, soma) premium iepakojuma piegāde e-komercijai — tieši patērētājam ar DHL/FedEx bez bojājumiem.',
    solution:
      'Izstrādājām kopīga zīmola produktu līniju ar pielāgotu EPS kodola formēšanu, patentētu drop-stitch tehnoloģiju augstākam spiedienam un mazumtirdzniecībai gatavus divslāņu gofrētā kartona iepakojumus ar ieliktņiem. Integrējām QR koda balstītu autentiskuma un garantijas reģistrāciju.',
    result:
      '3 modeļu SUP līnija palaista 75 dienās. Vairāk nekā 15 000 vienību pirmajos 12 mēnešos. 4.8★ vidējais vērtējums vairāk nekā 2 000 atsauksmēs. 0.3% bojājumu līmenis transportēšanas laikā.',
    outcomeMetrics: [
      {
        label: 'Modeļi',
        value: '3',
      },
      {
        label: 'Vienības',
        value: '15,000+',
      },
      {
        label: 'Vidējais vērtējums',
        value: '4.8★',
      },
      {
        label: 'Bojājumu līmenis',
        value: '0.3%',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Vidusjūras pludmales kūrortu ķēde',
    product: 'Kūrorta flote — SUP dēļi + piederumi',
    industry: 'Viesmīlība / Tūrisms',
    challenge:
      'Trīs objektu Vidusjūras kūrortu ķēde vēlējās palaist vienotu ūdens aktivitāšu programmu savās pludmales viesnīcās, kas prasīja 120 SUP ar pielāgotu zīmolradu, daudzvalodu drošības instrukcijām un apkopes rotācijas sistēmu.',
    solution:
      'Izstrādājām kūrortam pielāgotu flotes paketi ar jūras līmeņa UV izturīgu PVC, viesnīcas zīmola klāja grafiku 3 krāsu shēmās un krāsu kodētu apkopes marķēšanas sistēmu. Iekļāvām personāla apmācību un ceturkšņa rezerves daļu papildināšanu.',
    result:
      'Flote izvietota 3 kūrortos. Ūdens aktivitāšu ieņēmumi pirmajā sezonā pieauga par 210%. Viesu apmierinātības vērtējums par ērtībām pieauga no 4.1 līdz 4.7/5.',
    outcomeMetrics: [
      {
        label: 'Nogādātie SUP dēļi',
        value: '120',
      },
      {
        label: 'Kūrorti',
        value: '3',
      },
      {
        label: 'Ieņēmumu pieaugums',
        value: '210%',
      },
      {
        label: 'Viesu vērtējums',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Ūdens aktivitāšu ieņēmumi (gadā)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Inventāra nomaiņas līmenis',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Viesu apmierinātība (ērtības)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'australian-paddle-club': {
    client: 'Austrālijas airēšanas klubu apvienība',
    product: 'Klubu flote — SUP dēļi + drošības aprīkojums',
    industry: 'Atpūta / Izglītība',
    challenge:
      '15 klubu apvienībai bija jāvienmērīgo inventārs starp biedru klubiem ar izturīgiem, iesācējiem draudzīgiem SUP dēļiem, CE sertificētām glābšanas vestēm un centralizētu iepirkuma modeli izmaksu samazināšanai.',
    solution:
      'Standartizējām 3 līmeņu klubu floti (iesācējs, vidējais līmenis, instruktors). Izstrādājām klubu krāsu klāja grafiku ar klubu logotipiem. Ieviesām centrālo noliktavu ar ceturkšņa izplatīšanu klubiem.',
    result:
      '350 vienības 15 klubos. Par 28% zemākas izmaksas, apvienojot iepirkumus. 92% biedru apmierinātība ar inventāra kvalitāti.',
    outcomeMetrics: [
      {
        label: 'Aprīkotie klubi',
        value: '15',
      },
      {
        label: 'Nogādātās vienības',
        value: '350',
      },
      {
        label: 'Izmaksu samazinājums',
        value: '28%',
      },
      {
        label: 'Biedru apmierinātība',
        value: '92%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Eiropas ezera kūrorta un nomas operators',
    product: 'Nomas flote — SUP dēļi, glābšanas vestes, piederumi',
    industry: 'Noma / Tūrisms',
    challenge:
      'Ezera kūrorta operatoram ar 6 nomas stacijām bija nepieciešama augstas izturības nomas SUP flote ar ātras žāvēšanas sistēmām, bojājumizturīgu konstrukciju un prognozējamu vairāku gadu nomaiņas grafiku.',
    solution:
      'Piegādājām komerciālā līmeņa nomas SUP ar pastiprinātām sānu joslām, ātri žūstošiem EVA klājiem un UV stabilizētu PVC. Izstrādājām krāsu kodētu nolietojuma izsekošanas sistēmu ar ikgadējiem stāvokļa pārskatiem.',
    result:
      '200 SUP izvietoti 6 stacijās. Gada apkopes izmaksas samazinātas par 55%. Inventāra kalpošanas laiks pagarināts no 2 līdz 4 gadiem.',
    outcomeMetrics: [
      {
        label: 'Nomas stacijas',
        value: '6',
      },
      {
        label: 'Izvietotie SUP dēļi',
        value: '200',
      },
      {
        label: 'Apkopes izmaksas',
        value: '-55%',
      },
      {
        label: 'Kalpošanas laiks',
        value: '4 gadi',
      },
    ],
    beforeAfter: [
      {
        label: 'Vidējais dēļa kalpošanas laiks',
        before: '2 gadi',
        after: '4 gadi',
      },
      {
        label: 'Gada apkope uz dēli',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Nomas ieņēmumi uz dēli/sezonu',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanādas brīvdabas preču mazumtirdzniecības ķēde',
    product: 'Privātā zīmola SUP + piederumu līnija',
    industry: 'Mazumtirdzniecība',
    challenge:
      '25 veikalu Kanādas brīvdabas preču mazumtirgotājam bija nepieciešams ekskluzīvs privātā zīmola SUP klāsts ar franču/angļu divvalodu iepakojumu, aukstumizturīgu materiālu specifikācijām un atbilstību Kanādas kuģošanas noteikumiem.',
    solution:
      'Izstrādājām 4 SUP modeļus ar aukstumizturīgu PVC savienojumu līdz -15°C. Izgatavojām divvalodu mazumtirdzniecības iepakojumu ar Kanādas regulatīvo marķējumu. Nodrošinājām izstāžu statīvus un personāla apmācības materiālus.',
    result:
      'Ekskluzīvā līnija palaista 25 veikalos. 3 800 vienības pārdotas pirmajā sezonā. Mazumtirgotājs atjaunoja 3 gadu līgumu ar paplašinātu SKU skaitu.',
    outcomeMetrics: [
      {
        label: 'Veikali',
        value: '25',
      },
      {
        label: 'Vienības pirmajā sezonā',
        value: '3,800',
      },
      {
        label: 'Līgums',
        value: '3 gadu atjaunošana',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Tuvo Austrumu ūdenssporta izplatītājs',
    product: 'Pilnā produktu līnija — SUP dēļi un piederumi',
    industry: 'Izplatīšana / Jūras',
    challenge:
      'GCC bāzētam izplatītājam bija vajadzīgas ekskluzīvas tiesības pārstāvēt pilno afarer produktu līniju 6 Persijas līča valstīs, ar pielāgotu arābu iepakojumu, karstumizturīgu materiālu specifikācijām un šarīai atbilstošiem garantijas nosacījumiem.',
    solution:
      'Noslēdzām ekskluzīvu izplatīšanas līgumu. Izstrādājām arābu iepakojumu un mārketinga materiālus. Validējām materiālu specifikācijas 50°C vides temperatūrā. Pielāgojām garantijas nosacījumus reģionālajai atbilstībai.',
    result:
      '12 konteineru pasūtījumi pirmajos 18 mēnešos. Izveidots 15 dīleru/apakšizplatītāju tīkls. Tirgus daļa novērtēta 18% GCC piepūšamo SUP segmentā.',
    outcomeMetrics: [
      {
        label: 'Konteineri',
        value: '12',
      },
      {
        label: 'Dīleru tīkls',
        value: '15',
      },
      {
        label: 'Tirgus daļa',
        value: '18%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japānas dzīvesveida zīmols',
    product: 'Kopīga zīmola SUP līnija',
    industry: 'OEM / Zīmols',
    challenge:
      'Premium Japānas dzīvesveida zīmols vēlējās ieiet ūdenssporta tirgū ar kopīga zīmola SUP līniju, uzsverot minimālisma dizainu, videi draudzīgus materiālus un precīzu ražošanu prasīgajam Japānas patērētājam.',
    solution:
      'Izveidojām pielāgotas veidnes ar slaidāku sānu profilu. Iepirkām FSC sertificēta bambusa klāja ieliktņus un pārstrādāta PVC variantus. Izstrādājām premium iepakojuma atklāšanas pieredzi ar japāņu valodas QR koda apkopes instrukcijām.',
    result:
      '3 modeļu kopīga zīmola līnija palaista Tokijas jūras izstādē. 2 800 vienības pārdotas iepriekš pirms publiskās laišanas tirdzniecībā. Publicēts 5 Japānas dzīvesveida izdevumos.',
    outcomeMetrics: [
      {
        label: 'Modeļi',
        value: '3',
      },
      {
        label: 'Iepriekš pārdotās vienības',
        value: '2,800',
      },
      {
        label: 'Publikācijas',
        value: '5',
      },
    ],
  },
  'us-custom-mold': {
    client: 'ASV ūdenssporta aprīkojuma zīmols',
    product: 'Pielāgota veidne — tūrisma SUP',
    industry: 'OEM / Ražošana',
    challenge:
      'ASV zīmolam bija nepieciešama pilnīgi jauna SUP veidne ar 14 pēdu tūrisma formu, integrētiem zivju meklētāja stiprinājuma kanāliem, pastiprinātu stāvēšanas platformu un 400 mārciņu svarcelšanas spēju — paredzēta makšķerēšanas SUP tirgum.',
    solution:
      'Izstrādājām jaunu 14 pēdu drop-stitch veidni ar pastiprinātu drop-stitch kodola blīvumu, iebūvētiem piederumu sliedes ieliktņiem un militārā līmeņa PVC apakšējo slāni berzes izturībai. Izgatavojām 3 prototipa iterācijas pirms veidnes galīgā apstiprinājuma.',
    result:
      'Jauna veidne izgatavota 14 nedēļās. 3 500 vienības saražotas pirmajā ražošanas ciklā. Produkts atzīts par "Labāko makšķerēšanas SUP 2025" (Outdoor Gear Lab).',
    outcomeMetrics: [
      {
        label: 'Veidnes izgatavošanas laiks',
        value: '14 nedēļas',
      },
      {
        label: 'Pirmais ražošanas cikls',
        value: '3,500 vienības',
      },
      {
        label: 'Apbalvojums',
        value: 'Labākais makšķerēšanas SUP 2025',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globāla tehnoloģiju korporācija',
    product: 'Korporatīvā labsajūta — SUP flote',
    industry: 'Korporatīvais / Labsajūta',
    challenge:
      'Fortune 500 tehnoloģiju uzņēmums vēlējās palaist ūdens aktivitāšu labsajūtas programmu darbiniekiem 4 globālās pilsētiņās pie ezeriem, kas prasīja 60 SUP ar korporatīvo zīmolradu, glabāšanas risinājumiem un instruktoru apmācību.',
    solution:
      'Piegādājām stabilu universālo SUP floti ar korporatīvā logotipa klāja grafiku. Izstrādājām laikapstākļu izturīgus glabāšanas statīvus. Sertificējām 12 iekšējos instruktorus caur afarer apmācības programmu.',
    result:
      'Programma palaista 4 pilsētiņās. Vairāk nekā 2 400 darbinieku dalību pirmajā gadā. 94% darbinieku apmierinātības vērtējums. Iekļauta uzņēmuma ilgtspējas pārskatā.',
    outcomeMetrics: [
      {
        label: 'Pilsētiņas',
        value: '4',
      },
      {
        label: 'Dalībnieki',
        value: '2,400+',
      },
      {
        label: 'Apmierinātība',
        value: '94%',
      },
    ],
  },
  'university-club-program': {
    client: 'Lielbritānijas universitātes sporta savienība',
    product: 'Studentu klubu flote — SUP dēļi + drošība',
    industry: 'Izglītība',
    challenge:
      'Lielbritānijas universitātei ar aktīvu ūdenssporta klubu bija jāaizstāj novecojusī flote ar moderniem piepūšamajiem SUP, ko var glabāt ierobežotā pilsētiņas telpā, izmantot dažāda prasmju līmeņa studentiem un kas atbilst BUCS sacensību standartiem.',
    solution:
      'Piegādājām 25 universālos SUP ar kompakttām glabāšanas somām, 10 tūrisma SUP sacensību treniņiem un pilnu drošības aprīkojuma paketi. Nodrošinājām kluba vadības apmācību un apkopes darbnīcas.',
    result:
      'Flote palaista pirmkursu studentu gadatirgū. Kluba biedru skaits pieauga par 140%. Universitāte pirmo reizi 5 gados rīkoja starpuniversitāšu SUP sacensības.',
    outcomeMetrics: [
      {
        label: 'Piegādātie SUP dēļi',
        value: '35',
      },
      {
        label: 'Biedru pieaugums',
        value: '140%',
      },
      {
        label: 'Rīkotās sacensības',
        value: '1',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Karību kruīza līnijas operators',
    product: 'Kuģa aktivitāšu flote — SUP dēļi',
    industry: 'Viesmīlība / Kruīzi',
    challenge:
      'Lielai kruīza līnijai bija vēlme piedāvāt SUP kā krasta ekskursiju aktivitāti 7 kuģiem, kas piestāj privāto salu ostās. Nepieciešama kompakta glabāšana uz kuģa, ātri piepūšanas/atlaišanas cikli un flotes līmeņa zīmola vienotība.',
    solution:
      'Izstrādājām kruīziem pielāgotu SUP paketi ar ātras piepūšanas vārstu sistēmām, kompakttu somu glabāšanu un kuģa zīmola klāja grafiku. Nodrošinājām krasta komandas apmācību un rezerves daļu glabātavas 3 salu ostās.',
    result:
      'Programma palaista 7 kuģos. Vairāk nekā 15 000 viesu dalību pirmajā sezonā. 4.6★ vidējais ekskursiju vērtējums. Otrajā gadā paplašināta uz 3 papildu kuģiem.',
    outcomeMetrics: [
      {
        label: 'Kuģi',
        value: '7',
      },
      {
        label: 'Viesu dalības',
        value: '15,000+',
      },
      {
        label: 'Vērtējums',
        value: '4.6★',
      },
      {
        label: 'Otrā gada paplašināšana',
        value: '+3 kuģi',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridas makšķerēšanas čartera uzņēmums',
    product: 'Pielāgota makšķerēšanas SUP flote',
    industry: 'Makšķerēšana / Čarters',
    challenge:
      'Floridā bāzētam makšķerēšanas čartera operatoram bija vēlme papildināt piedāvājumu ar SUP makšķerēšanas tūrēm, kas prasīja stabilas platformas ar integrētiem dzesētāju stiprinājumiem, makšķeru turētāju sliedēm un zivju meklētāja transducera savietojamību.',
    solution:
      'Pielāgojām esošo stabilo SUP platformu ar 4 iebūvētiem makšķeru turētājiem, noņemamu dzesētāja stiprinājuma sistēmu un ūdensnecaurlaidīgu transducera stiprinājumu. Nodrošinājām flotes cenas un sezonas nomaiņas programmu.',
    result:
      'SUP makšķerēšanas tūras palaistas kā jauns ieņēmumu avots. 45% esošo čartera klientu rezervēja SUP tūras. Flote paplašināta no 8 līdz 20 dēļiem 2 sezonās.',
    outcomeMetrics: [
      {
        label: 'Sākotnējā flote',
        value: '8',
      },
      {
        label: 'Flote 2. gadā',
        value: '20',
      },
      {
        label: 'Čartera krustpārdošana',
        value: '45%',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'ASV ezera krasta dzīvojamā kopiena',
    product: 'Kopienas ērtība — SUP flote',
    industry: 'Nekustamais īpašums / Kopiena',
    challenge:
      'Luksusa ezera krasta dzīvojamā kopiena vēlējās piedāvāt SUP dēļus kā iedzīvotāju ērtību, kas prasīja zemas apkopes floti, drošu glabāšanu pie ezera un pašapkalpošanās izsniegšanas sistēmu vairāk nekā 200 mājām.',
    solution:
      'Piegādājām 15 komerciālā līmeņa SUP ar laikapstākļu izturīgu glabāšanas skapju sistēmu. Izstrādājām QR koda pašapkalpošanās izsniegšanu ar digitālu atrunu integrāciju. Nodrošinājām sezonas apkopes servisu.',
    result:
      '85% mājsaimniecību izmantoja SUP ērtību pirmajā sezonā. Nekustamā īpašuma vērtība ezera krasta daļā pieauga par 7%. Kopiena ieguva "Labākā dzīve pie ezera" apbalvojumu.',
    outcomeMetrics: [
      {
        label: 'SUP dēļi',
        value: '15',
      },
      {
        label: 'Mājsaimniecību lietojums',
        value: '85%',
      },
      {
        label: 'Nekustamā īpašuma vērtības ietekme',
        value: '+7%',
      },
      {
        label: 'Apbalvojums',
        value: 'Labākā dzīve pie ezera',
      },
    ],
  },
};
