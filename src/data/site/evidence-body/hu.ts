import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'retail-private-label': {
    client: 'Európai outdoor kiskereskedő',
    product: 'Saját márkás SUP-termékcsalád',
    industry: 'Kiskereskedelem',
    challenge:
      'Az európai outdoor kiskereskedőnek saját márkás SUP-termékcsaládra volt szüksége egyedi fedélzeti grafikával, környezetbarát PVC-vel és kereskedelmi forgalomra kész csomagolással — mindezt 60 nap alatt leszállítva.',
    solution:
      'Egyedi digitális nyomdai fájlokat készítettünk, REACH-megfelelő PVC-t szereztünk be, és a tervezőcsapat qingdaói gyárunkba helyezésével a mintázást 3 körből 1 körre csökkentettük.',
    result:
      '55 nap a megrendelés aláírásától az FOB-szállításig. 2,400 darab 4 SKU-ban. Az ismételt megrendelést még az első konténer megérkezése előtt leadták.',
    outcomeMetrics: [
      {
        label: 'Átfutási idő',
        value: '55 nap',
      },
      {
        label: 'Darabszám',
        value: '2,400',
      },
      {
        label: 'SKU-k',
        value: '4',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Amerikai vízisport-startup',
    product: 'Egyedi SUP-termékcsalád',
    industry: 'Startup / Kiskereskedelem',
    challenge:
      'Az amerikai vízisport-startupnak nagy teljesítményű drop-stitch SUP-ra volt szüksége egyedi fedélzeti kialakítással, közös márkájú csomagolással és BSCI-tanúsítással a kiskereskedelmi értékesítéshez.',
    solution:
      'A meglévő SUP-formát módosított rocker-profíllal alkalmaztuk, közös márkájú csomagolástervet dolgoztunk ki, és a teljes BSCI-auditdokumentációt biztosítottuk.',
    result:
      'Sikeresen bekerült 3 nagy amerikai outdoor láncba. 5,000+ darab az első évben, 98%-os értékesítési aránnyal.',
    outcomeMetrics: [
      {
        label: 'Kiskereskedelmi láncok',
        value: '3',
      },
      {
        label: 'Első évi darabszám',
        value: '5,000+',
      },
      {
        label: 'Értékesítési arány',
        value: '98%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Ausztrál forgalmazó',
    product: 'CE-tanúsított SUP-termékcsalád',
    industry: 'Tengeri / Kiskereskedelem',
    challenge:
      'Az ausztrál forgalmazó CE-tanúsított SUP-termékcsaládot igényelt egyedi fedélzeti színekkel, korszerűsített PVC-opcióval és az ausztrál AS 1799 szabványnak való megfeleléssel.',
    solution:
      'Gyártás előtti mintákat készítettünk 4 színvariánssal, katonai minőségű PVC-t szereztünk be, és összehangoltuk az AS 1799 szerinti, harmadik fél általi megfelelőségi vizsgálatokat.',
    result:
      '3 modellből álló SUP-termékcsalád debütált az ausztrál/új-zélandi piacon. Ezt 12 üzletre kiterjedő kiskereskedelmi láncszerződés követte.',
    outcomeMetrics: [
      {
        label: 'Bemutatott modellek',
        value: '3',
      },
      {
        label: 'Kiskereskedelmi üzletek',
        value: '12',
      },
      {
        label: 'Megfelelőség',
        value: 'AS 1799',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karibi luxusüdülő-csoport',
    product: 'Üdülőflotta — SUP-ok',
    industry: 'Vendéglátás / Turizmus',
    challenge:
      'Egy 5 üdülőből álló csoportnak egységes, bérelhető vízisport-felszerelés-flottára — SUP-táblákra — volt szüksége egységes márkázással, a trópusi napsütésnek ellenálló, UV-álló anyagokkal és 5 éves csereprogrammal.',
    solution:
      'Egyedi, 3 modellből álló SUP-flottacsomagot terveztünk UV-stabilizált PVC-vel, az üdülő márkáját viselő fedélzeti grafikával és ütemezett szállítási tervvel. Munkatárs-képzést és üdülőnként dedikált alkatrészcsomagot biztosítottunk.',
    result:
      '180 darabot szállítottunk le 5 üdülő számára. Ismételt megrendelés 2 új létesítményre. 40%-os egységenkénti költségcsökkenés a korábbi beszállítókhoz képest.',
    outcomeMetrics: [
      {
        label: 'Leszállított darabszám',
        value: '180',
      },
      {
        label: 'Üdülők',
        value: '5',
      },
      {
        label: 'Költségcsökkenés',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Éves táblacsere-költség',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Flotta üzemkimaradása (nap/év)',
        before: '45',
        after: '8',
      },
      {
        label: 'Vendégelégedettségi pontszám',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Délkelet-ázsiai tengerészeti ügynökség',
    product: 'Járőr- és mentő SUP-flotta',
    industry: 'Kormányzat / Tengerbiztonság',
    challenge:
      'Egy kormányzati tengerészeti ügynökség 20 járőr- és mentő SUP-ot igényelt nagy láthatóságú fedélzettel, integrált kommunikációs rögzítésekkel és CE-tanúsított kivitelezéssel.',
    solution:
      '20 SUP-ot gyártottunk katonai minőségű PVC kivitelezéssel, megerősített D-gyűrűkkel és előre szerelt navigációs lámpacsomagokkal. A gyári ellenőrző csapat jelen volt a tengeri próbákon. A teljes megfelelőségi dokumentációs csomagot biztosítottuk.',
    result:
      'A szerződést 4 hónap alatt teljesítettük. A flottát határjárőrözésre, kutatás-mentésre és katasztrófaelhárításra telepítettük 3 regionális bázison.',
    outcomeMetrics: [
      {
        label: 'Járőr SUP-ok',
        value: '20',
      },
      {
        label: 'Szállítás',
        value: '4 hónap',
      },
      {
        label: 'Bázisok',
        value: '3',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Európai DTC vízisportmárka',
    product: 'Márkás SUP + kiegészítő termékcsalád',
    industry: 'E-kereskedelem / Kiskereskedelem',
    challenge:
      'Egy gyorsan növekvő DTC vízisportmárkának teljes SUP-csomagra volt szüksége (tábla, pumpa, evező, biztonsági kötél, táska) prémium, az e-kereskedelmi kiszolgálásra tervezett csomagolással — DHL/FedEx útján, közvetlenül a fogyasztónak, sérülés nélkül.',
    solution:
      'Közös márkájú termékcsaládot fejlesztettünk egyedi EPS-magformázással, saját fejlesztésű drop-stitch technológiával magasabb nyomáshoz, valamint kiskereskedelmi, duplafalú hullámkarton dobozokkal védőbetéttel. QR-kódos hitelesség-ellenőrzést és garanciaregisztrációt integráltunk.',
    result:
      'A 3 modellből álló SUP-termékcsalád 75 nap alatt debütált. 15,000+ darab az első 12 hónapban. 4.8★ átlagos értékelés 2,000+ vélemény alapján. 0.3% szállítási sérülési arány.',
    outcomeMetrics: [
      {
        label: 'Modellek',
        value: '3',
      },
      {
        label: 'Darabszám',
        value: '15,000+',
      },
      {
        label: 'Átlagos értékelés',
        value: '4.8★',
      },
      {
        label: 'Sérülési arány',
        value: '0.3%',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Földközi-tengeri tengerparti üdülőlánc',
    product: 'Üdülőflotta — SUP-ok + kiegészítők',
    industry: 'Vendéglátás / Turizmus',
    challenge:
      'Egy 3 létesítményből álló földközi-tengeri üdülőlánc egységes vízi programot kívánt indítani tengerparti szállodáiban, amihez 120 SUP-ra volt szükség egyedi márkázással, többnyelvű biztonsági kártyákkal és karbantartási rotációs rendszerrel.',
    solution:
      'Üdülőspecifikus flottacsomagot terveztünk tengeri minőségű, UV-álló PVC-vel, a szálloda márkáját viselő fedélzeti grafikával 3 színvilágban, valamint színkódos karbantartási jelölőrendszerrel. Munkatárs-képzést és negyedéves alkatrész-utánpótlást is tartalmazott.',
    result:
      'A flotta 3 üdülőben állt üzembe. A vízi program bevétel az első szezonban 210%-kal nőtt. A szolgáltatások vendégelégedettségi pontszáma 4.1-ről 4.7/5-re emelkedett.',
    outcomeMetrics: [
      {
        label: 'Leszállított SUP-ok',
        value: '120',
      },
      {
        label: 'Üdülők',
        value: '3',
      },
      {
        label: 'Bevételnövekedés',
        value: '210%',
      },
      {
        label: 'Vendégpontszám',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Vízi program bevétel (éves)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Felszereléscsere-arány',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Vendégelégedettség (szolgáltatások)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'australian-paddle-club': {
    client: 'Ausztrál paddle-klubszövetség',
    product: 'Klubflotta — SUP-ok + biztonsági felszerelés',
    industry: 'Szabadidő / Oktatás',
    challenge:
      'Egy 15 klubot tömörítő szövetségnek egységesítenie kellett a felszerelést a tagsági klubokban, tartós, kezdőknek alkalmas SUP-táblákkal, CE-tanúsított mentőmellényekkel és központosított beszerzési modellel a klubonkénti költségek csökkentése érdekében.',
    solution:
      '3 szintű klubflottát szabványosítottunk (kezdő, haladó, oktató). Klubszínű fedélzeti grafikákat terveztünk klublogókkal. Központi raktározást vezettünk be negyedéves, klubszintű elosztással.',
    result:
      '350 darab 15 klubban. 28%-os költségcsökkenés az összesített beszerzés révén. 92%-os tagsági elégedettség a felszerelés minőségével.',
    outcomeMetrics: [
      {
        label: 'Felszerelt klubok',
        value: '15',
      },
      {
        label: 'Leszállított darabszám',
        value: '350',
      },
      {
        label: 'Költségcsökkenés',
        value: '28%',
      },
      {
        label: 'Tagsági elégedettség',
        value: '92%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Európai tavi üdülő- és kölcsönzőüzemeltető',
    product: 'Kölcsönzőflotta — SUP-ok, mentőmellények, kiegészítők',
    industry: 'Kölcsönzés / Turizmus',
    challenge:
      'Egy 6 kölcsönzőállomást üzemeltető tavi üdülő nagy tartósságú kölcsönző SUP-flottát igényelt gyors szárítást lehetővé tevő rendszerekkel, sérülésálló kivitelezéssel és kiszámítható, többéves csereütemtervvel.',
    solution:
      'Kereskedelmi minőségű kölcsönző SUP-okat szállítottunk megerősített oldalpántokkal, gyorsan száradó EVA-fedélzettel és UV-stabilizált PVC-vel. Színkódos kopáskövető rendszert fejlesztettünk éves állapotjelentésekkel.',
    result:
      '200 SUP került telepítésre 6 állomáson. Az éves karbantartási költség 55%-kal csökkent. A felszerelés élettartama 2 évről 4 évre nőtt.',
    outcomeMetrics: [
      {
        label: 'Kölcsönzőállomások',
        value: '6',
      },
      {
        label: 'Telepített SUP-ok',
        value: '200',
      },
      {
        label: 'Karbantartási költség',
        value: '-55%',
      },
      {
        label: 'Élettartam',
        value: '4 év',
      },
    ],
    beforeAfter: [
      {
        label: 'Átlagos táblaélettartam',
        before: '2 év',
        after: '4 év',
      },
      {
        label: 'Éves karbantartás táblánként',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Kölcsönzési bevétel táblánként/szezon',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanadai outdoor kiskereskedelmi lánc',
    product: 'Saját márkás SUP + kiegészítő termékcsalád',
    industry: 'Kiskereskedelem',
    challenge:
      'Egy 25 üzlettel rendelkező kanadai outdoor kiskereskedő kizárólagos, saját márkás SUP-termékcsaládot igényelt francia/angol kétnyelvű csomagolással, hideg időjárási anyagspecifikációkkal és a kanadai hajózási előírásoknak való megfeleléssel.',
    solution:
      '4 SUP-modellt fejlesztettünk -15°C-ig hajlékony (cold-flex) PVC-keverékkel. Kétnyelvű kiskereskedelmi csomagolást készítettünk kanadai szabályozási jelölésekkel. Bemutatóállványokat és munkatárs-képzési anyagokat biztosítottunk.',
    result:
      'A kizárólagos termékcsalád 25 üzletben debütált. 3,800 darab kelt el az első szezonban. A kiskereskedő 3 éves megállapodást újított meg bővített SKU-számmal.',
    outcomeMetrics: [
      {
        label: 'Üzletek',
        value: '25',
      },
      {
        label: 'Első szezonbeli darabszám',
        value: '3,800',
      },
      {
        label: 'Megállapodás',
        value: '3 éves megújítás',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Közel-keleti vízisport-forgalmazó',
    product: 'Teljes termékcsalád — SUP-ok és kiegészítők',
    industry: 'Disztribúció / Tengeri',
    challenge:
      'Egy GCC-székhelyű forgalmazó kizárólagos jogokat kért a teljes afarer termékcsalád képviseletére 6 öböl-menti országban, egyedi arab nyelvű csomagolással, hőálló anyagspecifikációkkal és a saríának megfelelő garanciális feltételekkel.',
    solution:
      'Kizárólagos forgalmazási megállapodást kötöttünk. Arab nyelvű csomagolást és marketinganyagokat fejlesztettünk. Az anyagspecifikációkat 50°C környezeti hőmérsékleten validáltuk. A garanciális feltételeket a regionális előírásokhoz igazítottuk.',
    result:
      '12 konténermegrendelés az első 18 hónapban. 15 fő kereskedőből/al-forgalmazóból álló hálózat épült ki. A becsült piaci részesedés a GCC felfújható SUP-szegmensének 18%-a.',
    outcomeMetrics: [
      {
        label: 'Konténerek',
        value: '12',
      },
      {
        label: 'Kereskedői hálózat',
        value: '15',
      },
      {
        label: 'Piaci részesedés',
        value: '18%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japán lifestyle márka',
    product: 'Közös márkájú SUP-termékcsalád',
    industry: 'OEM / Márka',
    challenge:
      'Egy prémium japán lifestyle márka a vízisportpiacra kívánt belépni egy közös márkájú SUP-termékcsaláddal, amely minimalista dizájnt, környezetbarát anyagokat és az igényes japán fogyasztó számára elvárható precizitású gyártást helyezett előtérbe.',
    solution:
      'Egyedi formákat készítettünk karcsúbb oldalprofíllal. FSC-tanúsítású bambusz fedélzeti betéteket és újrahasznosított PVC-opciókat biztosítottunk. Prémium kicsomagolási élményt fejlesztettünk japán nyelvű, QR-kódos kezelési útmutatókkal.',
    result:
      'A 3 modellből álló közös márkájú termékcsalád a Tokiói Tengeri Kiállításon debütált. 2,800 darabot előrendeltek a nyilvános megjelenés előtt. 5 japán lifestyle szaklapban szerepelt.',
    outcomeMetrics: [
      {
        label: 'Modellek',
        value: '3',
      },
      {
        label: 'Előrendelt darabszám',
        value: '2,800',
      },
      {
        label: 'Média megjelenések',
        value: '5',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Amerikai vízisportfelszerelés-márka',
    product: 'Egyedi forma — túra SUP',
    industry: 'OEM / Gyártás',
    challenge:
      'Egy amerikai márka teljesen új SUP-formát igényelt 14 láb hosszú túrakialakítással, integrált haltaláló-szerelési csatornákkal, megerősített állófelülettel és 400 lbs teherbírással — a horgász SUP-piacra tervezve.',
    solution:
      'Új, 14 lábos drop-stitch formát terveztünk megerősített drop-stitch magsűrűséggel, beépített kiegészítősín-betétekkel és katonai minőségű PVC alsó réteggel a kopásállóságért. A szerszám véglegesítése előtt 3 prototípus-iterációt készítettünk.',
    result:
      'Az új szerszám 14 hét alatt elkészült. 3,500 darab készült az első gyártási sorozatban. A terméket az Outdoor Gear Lab a 2025 legjobb horgász SUP-jának nevezte.',
    outcomeMetrics: [
      {
        label: 'Szerszámozási idő',
        value: '14 hét',
      },
      {
        label: 'Első gyártási sorozat',
        value: '3,500 darab',
      },
      {
        label: 'Díj',
        value: 'Legjobb horgász SUP 2025',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globális technológiai vállalat',
    product: 'Vállalati wellness — SUP-flotta',
    industry: 'Vállalati / Wellness',
    challenge:
      'Egy Fortune 500 technológiai vállalat vízalapú wellness-programot kívánt indítani munkatársai számára 4, tóparti fekvésű globális campusán, amihez 60 SUP-ra volt szüksége vállalati márkázással, tárolási megoldásokkal és oktatóképzéssel.',
    solution:
      'Stabil, univerzális SUP-okból álló flottát szállítottunk a vállalat logóját viselő fedélzeti grafikával. Időjárásálló, helyszíni tárolóállványokat terveztünk. 12 házi oktatót képeztünk ki az afarer képzési programján.',
    result:
      'A program 4 campuson indult el. 2,400+ munkatársi részvétel az első évben. 94%-os munkatársi elégedettség. A vállalat fenntarthatósági jelentésében is szerepelt.',
    outcomeMetrics: [
      {
        label: 'Campusok',
        value: '4',
      },
      {
        label: 'Résztvevők',
        value: '2,400+',
      },
      {
        label: 'Elégedettség',
        value: '94%',
      },
    ],
  },
  'university-club-program': {
    client: 'Brit egyetemi sportszövetség',
    product: 'Diákklub-flotta — SUP-ok + biztonsági felszerelés',
    industry: 'Oktatás',
    challenge:
      'Egy aktív vízisportklubbal működő brit egyetemnek elavult flottáját kellett lecserélnie modern felfújható SUP-okra, amelyek korlátozott campusi tárhelyen tárolhatók, minden szintű hallgató által használhatók és megfelelnek a BUCS versenyszabványoknak.',
    solution:
      '25 univerzális SUP-ot szállítottunk kompakt tároló hátizsákokkal, 10 túra SUP-ot versenyedzéshez és teljes biztonsági felszereléscsomagot. Klubvezető-képzést és karbantartási műhelyfoglalkozásokat tartottunk.',
    result:
      'A flotta a gólyabemutatón debütált. A klub tagsága 140%-kal nőtt. Az egyetem 5 év óta először rendezett egyetemek közötti SUP-versenyt.',
    outcomeMetrics: [
      {
        label: 'Szállított SUP-ok',
        value: '35',
      },
      {
        label: 'Tagságnövekedés',
        value: '140%',
      },
      {
        label: 'Megrendezett verseny',
        value: '1',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Karibi tengerjáró-társaság',
    product: 'Fedélzeti programflotta — SUP-ok',
    industry: 'Vendéglátás / Tengerjáró',
    challenge:
      'Egy nagy tengerjáró-társaság SUP-ot kívánt kínálni parti kirándulásként 7, magánszigeti kikötőkben forduló hajóján. Szükség volt kompakt fedélzeti tárolásra, gyors felfújási/leeresztési ciklusokra és flottaszintű márkakonzisztenciára.',
    solution:
      'Hajóspecifikus SUP-csomagot fejlesztettünk gyorsfelfújós szeleprendszerrel, kompakt hátizsák-tárolással és a hajó márkáját viselő fedélzeti grafikával. Dedikált parti csapatképzést és alkatrész-szekrényeket biztosítottunk 3 szigeti kikötőben.',
    result:
      'A program 7 hajón indult el. 15,000+ vendégrészvétel az első szezonban. 4.6★ átlagos kirándulási értékelés. A 2. évben 3 további hajóval bővült.',
    outcomeMetrics: [
      {
        label: 'Hajók',
        value: '7',
      },
      {
        label: 'Vendégrészvételek',
        value: '15,000+',
      },
      {
        label: 'Értékelés',
        value: '4.6★',
      },
      {
        label: '2. évi bővítés',
        value: '+3 hajó',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridai horgászcharter-vállalat',
    product: 'Egyedi horgász SUP-flotta',
    industry: 'Horgászat / Charter',
    challenge:
      'Egy floridai horgászcharter-üzemeltető SUP-horgásztúrákkal kívánt bővíteni kínálatát, ehhez stabil platformokra volt szüksége integrált hűtőtartó-szerelésekkel, botlaváló sínekkel és haltaláló-átalakító kompatibilitással.',
    solution:
      'A meglévő stabil SUP-platformot szabdaltuk testre 4 beépített botlaválóval, eltávolítható hűtőtartó-rendszerrel és vízálló átalakító-scupper szereléssel. Flottaárazást és szezonális csereprogramot biztosítottunk.',
    result:
      'A SUP-horgásztúrák új bevételi forrásként indultak el. A meglévő charterügyfelek 45%-a foglalt SUP-túrát. A flotta 2 szezon alatt 8-ról 20 táblára bővült.',
    outcomeMetrics: [
      {
        label: 'Kezdeti flotta',
        value: '8',
      },
      {
        label: '2. éves flotta',
        value: '20',
      },
      {
        label: 'Charter keresztértékesítés',
        value: '45%',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Amerikai tóparti lakóközösség',
    product: 'Közösségi szolgáltatás — SUP-flotta',
    industry: 'Ingatlan / Közösség',
    challenge:
      'Egy luxus tóparti lakóközösség SUP-táblákat kívánt lakossági szolgáltatásként biztosítani, amihez alacsony karbantartású flotta, biztonságos tóparti tárolás és önkiszolgáló kivételi rendszer kellett 200+ otthon számára.',
    solution:
      '15 kereskedelmi minőségű SUP-ot szállítottunk időjárásálló tárolószekrény-rendszerrel. QR-kódos önkiszolgáló kivételt terveztünk digitális felelősségvállalási nyilatkozattal. Szezonális karbantartási szolgáltatást nyújtottunk.',
    result:
      'A háztartások 85%-a használta a SUP-szolgáltatást az első szezonban. A tóparti szekció ingatlanértéke 7%-kal nőtt. A közösség elnyerte a Legjobb tóparti élet díjat.',
    outcomeMetrics: [
      {
        label: 'SUP-ok',
        value: '15',
      },
      {
        label: 'Háztartási használat',
        value: '85%',
      },
      {
        label: 'Ingatlanérték-hatás',
        value: '+7%',
      },
      {
        label: 'Díj',
        value: 'Legjobb tóparti élet',
      },
    ],
  },
};
