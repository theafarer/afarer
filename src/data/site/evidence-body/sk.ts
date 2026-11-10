import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'retail-private-label': {
    client: 'Európsky maloobchodník s outdoorovým tovarom',
    product: 'Rad SUP dosiek pod vlastnou značkou',
    industry: 'Maloobchod',
    challenge:
      'Európsky maloobchodník s outdoorovým tovarom potreboval rad SUP dosiek pod vlastnou značkou s jedinečnou grafikou paluby, ekologickým PVC a obalom pripraveným pre maloobchod — všetko dodané do 60 dní.',
    solution:
      'Vyvinuli sme vlastné súbory pre digitálnu tlač, obstarali sme PVC v súlade s nariadením REACH a skrátili sme vzorkovanie z 3 kôl na 1 spoluumiestnením dizajnového tímu v našej továrni v Qingdao.',
    result:
      '55 dní od podpísania objednávky PO po dodanie FOB. 2,400 ks v 4 variantoch SKU. Opakovaná objednávka bola podaná ešte pred príchodom prvého kontajnera.',
    outcomeMetrics: [
      {
        label: 'Dodacia lehota',
        value: '55 dní',
      },
      {
        label: 'Kusy',
        value: '2,400',
      },
      {
        label: 'Varianty SKU',
        value: '4',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Americký startup v oblasti vodných športov',
    product: 'Rad SUP dosiek na mieru',
    industry: 'Startup / Maloobchod',
    challenge:
      'Americký startup v oblasti vodných športov potreboval vysokovýkonnú SUP dosku s technológiou drop-stitch, vlastným dizajnom paluby, balením so spoločnou značkou a certifikáciou BSCI pre umiestnenie v maloobchode.',
    solution:
      'Prispôsobili sme existujúcu formu SUP so zmeneným rocker profilom, vyvinuli sme grafiku balenia so spoločnou značkou a poskytli sme kompletnú dokumentáciu pre audit BSCI.',
    result:
      'Úspešne uvedené v 3 významných amerických outdoorových reťazcoch. Viac ako 5,000 ks v prvom roku s 98% mierou predaja (sell-through).',
    outcomeMetrics: [
      {
        label: 'Maloobchodné reťazce',
        value: '3',
      },
      {
        label: 'Kusy v prvom roku',
        value: '5,000+',
      },
      {
        label: 'Miera predaja',
        value: '98%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Austrálsky distribútor',
    product: 'Rad SUP dosiek s certifikáciou CE',
    industry: 'Námorníctvo / Maloobchod',
    challenge:
      'Austrálsky distribútor požadoval rad SUP dosiek s certifikáciou CE, s vlastnými farbami paluby, vylepšenou variantou PVC a súladom s austrálskou normou AS 1799.',
    solution:
      'Vyrobili sme predvýrobné vzorky v 4 farebných variantoch, obstarali sme PVC vojenskej kvality a zabezpečili sme testovanie súladu s AS 1799 nezávislou treťou stranou.',
    result:
      'Rad 3 modelov SUP bol uvedený na trh AU/NZ. Následne nasledovala zmluva s maloobchodným reťazcom na 12 predajní.',
    outcomeMetrics: [
      {
        label: 'Uvedené modely',
        value: '3',
      },
      {
        label: 'Maloobchodné predajne',
        value: '12',
      },
      {
        label: 'Súlad',
        value: 'AS 1799',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karibská skupina luxusných resortov',
    product: 'Flotila pre resort — SUP dosky',
    industry: 'Hotelierstvo / Cestovný ruch',
    challenge:
      'Skupina 5 resortov potrebovala jednotnú flotilu prenájmového vybavenia pre vodné športy — SUP dosky — s konzistentnou prezentáciou značky, UV-odolnými materiálmi pre tropické slnko a 5-ročným plánom obmeny.',
    solution:
      'Navrhli sme balík flotily SUP na mieru s 3 modelmi, UV-stabilizovaným PVC, grafikou paluby so značkou resortu a postupným plánom dodania. Poskytli sme školenie personálu a vyhradenú súpravu náhradných dielov pre každý resort.',
    result:
      '180 ks dodaných do 5 resortov. Opakovaná objednávka pre 2 nové objekty. 40% zníženie nákladov na kus oproti predchádzajúcim dodávateľom.',
    outcomeMetrics: [
      {
        label: 'Dodané kusy',
        value: '180',
      },
      {
        label: 'Resorty',
        value: '5',
      },
      {
        label: 'Zníženie nákladov',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Ročné náklady na výmenu dosiek',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Nečinnosť flotily (dni/rok)',
        before: '45',
        after: '8',
      },
      {
        label: 'Skóre spokojnosti hostí',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Námorná agentúra juhovýchodnej Ázie',
    product: 'Flotila SUP na hliadkovanie a záchranu',
    industry: 'Vláda / Námorná bezpečnosť',
    challenge:
      'Vládna námorná agentúra požadovala 20 hliadkovacích a záchranných SUP dosiek s vysoko viditeľnými palubami, integrovanými držiakmi na komunikačné zariadenia a konštrukciou s certifikáciou CE.',
    solution:
      'Vyrobili sme 20 SUP dosiek s konštrukciou z PVC vojenskej kvality, pevnými D-krúžkami a predinštalovanými navigačnými svetlami. Inšpekčný tím bol prítomný pri skúškach na mori. Bol poskytnutý kompletný balík dokumentácie o súhlade.',
    result:
      'Zmluva bola realizovaná za 4 mesiace. Flotila bola nasadená na hliadkovanie na hraniciach, pátranie a záchranné akcie a pri živelných pohromách na 3 regionálnych základniach.',
    outcomeMetrics: [
      {
        label: 'Hliadkové SUP dosky',
        value: '20',
      },
      {
        label: 'Dodanie',
        value: '4 mesiace',
      },
      {
        label: 'Základne',
        value: '3',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Európska DTC značka vodných športov',
    product: 'Značkové SUP + rad príslušenstva',
    industry: 'Elektronický obchod / Maloobchod',
    challenge:
      'Rýchlo rastúca DTC značka vodných športov potrebovala kompletné SUP balenie (doska, pumpa, pádlo, bezpečnostná šnúra, taška) s prémiovým obalom navrhnutým pre e-commerce logistiku — priame dodanie spotrebiteľom prostredníctvom DHL/FedEx bez poškodenia.',
    solution:
      'Vyvinuli sme produktovú líniu so spoločnou značkou s vlastným tvarovaním EPS jadra, vlastníckou technológiou drop-stitch pre vyšší tlak a maloobchodnými dvojstennými vlnitými kartónmi s vnútorným vystelením. Integrovali sme overenie pravosti a registráciu záruky pomocou QR kódu.',
    result:
      'Rad 3 modelov SUP bol uvedený za 75 dní. Viac ako 15,000 ks v prvých 12 mesiacoch. Priemerné hodnotenie 4.8★ pri viac ako 2,000 recenziách. 0.3% miera poškodenia pri preprave.',
    outcomeMetrics: [
      {
        label: 'Modely',
        value: '3',
      },
      {
        label: 'Kusy',
        value: '15,000+',
      },
      {
        label: 'Priemerné hodnotenie',
        value: '4.8★',
      },
      {
        label: 'Miera poškodenia',
        value: '0.3%',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Reťazec stredomorských plážových resortov',
    product: 'Flotila pre resort — SUP dosky + príslušenstvo',
    industry: 'Hotelierstvo / Cestovný ruch',
    challenge:
      'Stredomorský reťazec resortov s 3 objektmi chcel zaviesť jednotný program vodných aktivít vo svojich hoteloch pri pláži, pričom potreboval 120 SUP dosiek s vlastnou značkou, viacjazyčné bezpečnostné karty a systém rotácie údržby.',
    solution:
      'Navrhli sme balík flotily špecifický pre resorty s UV-odolným PVC morskej kvality, grafikou paluby so značkou hotela v 3 farebných schémach a farebne kódovaným systémom označovania pre údržbu. Zahrnuli sme školenie personálu a štvrťročné dopĺňanie náhradných dielov.',
    result:
      'Flotila bola nasadená v 3 resortoch. Príjmy z vodných aktivít sa v prvej sezóne zvýšili o 210%. Skóre spokojnosti hostí so zariadeniami vzrástlo z 4.1 na 4.7/5.',
    outcomeMetrics: [
      {
        label: 'Dodané SUP dosky',
        value: '120',
      },
      {
        label: 'Resorty',
        value: '3',
      },
      {
        label: 'Rast príjmov',
        value: '210%',
      },
      {
        label: 'Skóre hostí',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Ročné príjmy z vodných aktivít',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Miera výmeny vybavenia',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Spokojnosť hostí (zariadenia)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'australian-paddle-club': {
    client: 'Austrálska asociácia pádlových klubov',
    product: 'Klubová flotila — SUP dosky + bezpečnostné vybavenie',
    industry: 'Rekreácia / Vzdelávanie',
    challenge:
      'Asociácia 15 klubov potrebovala štandardizovať vybavenie v členských kluboch s odolnými SUP doskami vhodnými pre začiatočníkov, záchrannými vestami s certifikáciou CE a centralizovaným modelom obstarávania na zníženie nákladov jednotlivých klubov.',
    solution:
      'Štandardizovali sme klubovú flotilu v 3 úrovniach (začiatočnícka, stredne pokročilá, inštruktorská). Navrhli sme grafiku paluby v klubových farbách s logami klubov. Zaviedli sme centrálne skladovanie so štvrťročným rozdeľovaním na úrovni klubov.',
    result:
      '350 ks v 15 kluboch. 28% zníženie nákladov vďaka konsolidovanému nákupu. 92% spokojnosť členov s kvalitou vybavenia.',
    outcomeMetrics: [
      {
        label: 'Vybavené kluby',
        value: '15',
      },
      {
        label: 'Dodané kusy',
        value: '350',
      },
      {
        label: 'Zníženie nákladov',
        value: '28%',
      },
      {
        label: 'Spokojnosť členov',
        value: '92%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Európsky prevádzkovateľ jazerského resortu a prenájmu',
    product: 'Prenájomová flotila — SUP dosky, záchranné vesty, príslušenstvo',
    industry: 'Prenájom / Cestovný ruch',
    challenge:
      'Prevádzkovateľ jazerského resortu s 6 prenájomovými stanicami potreboval vysoko odolnú prenájomovú flotilu SUP dosiek so systémami rýchleho sušenia, konštrukciou odolnou voči poškodeniu a predvídateľným viacročným plánom výmeny.',
    solution:
      'Dodali sme prenájomové SUP dosky komerčnej kvality so zosilnenými bočnými pásmi, rýchloschnúcimi EVA palubami a UV-stabilizovaným PVC. Vyvinuli sme farebne kódovaný systém sledovania opotrebenia s ročnými správami o stave.',
    result:
      '200 SUP dosiek nasadených v 6 staniciach. Ročné náklady na údržbu znížené o 55%. Životnosť vybavenia predĺžená z 2 na 4 roky.',
    outcomeMetrics: [
      {
        label: 'Prenájomové stanice',
        value: '6',
      },
      {
        label: 'Nasadené SUP dosky',
        value: '200',
      },
      {
        label: 'Náklady na údržbu',
        value: '-55%',
      },
      {
        label: 'Životnosť',
        value: '4 roky',
      },
    ],
    beforeAfter: [
      {
        label: 'Priemerná životnosť dosky',
        before: '2 roky',
        after: '4 roky',
      },
      {
        label: 'Ročná údržba na dosku',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Prenájomové príjmy na dosku/sezónu',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanadský maloobchodný reťazec s outdoorovým tovarom',
    product: 'SUP pod vlastnou značkou + rad príslušenstva',
    industry: 'Maloobchod',
    challenge:
      'Kanadský maloobchodník s outdoorovým tovarom s 25 predajňami požadoval exkluzívny rad SUP dosiek pod vlastnou značkou s dvojjazyčným obalom v francúzštine a angličtine, materiálovými špecifikáciami pre studené počasie a súladom s kanadskými predpismi pre plavidlá.',
    solution:
      'Vyvinuli sme 4 modely SUP so zmesou PVC odolnou voči mrazu do -15 °C. Vyrobili sme dvojjazyčné maloobchodné balenie s kanadskými regulačnými označeniami. Poskytli sme propagačné stojany a školiace materiály pre personál.',
    result:
      'Exkluzívna línia bola uvedená v 25 predajniach. 3,800 ks predaných v prvej sezóne. Maloobchodník obnovil 3-ročnú zmluvu s rozšíreným počtom variantov SKU.',
    outcomeMetrics: [
      {
        label: 'Predajne',
        value: '25',
      },
      {
        label: 'Kusy v prvej sezóne',
        value: '3,800',
      },
      {
        label: 'Zmluva',
        value: '3-ročné predĺženie',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distribútor vodných športov na Strednom východe',
    product: 'Kompletná produktová línia — SUP dosky a príslušenstvo',
    industry: 'Distribúcia / Námorníctvo',
    challenge:
      'Distribútor pôsobiaci v GCC chcel výhradné práva na zastupovanie kompletnej produktovej línie afarer v 6 krajinách Perzského zálivu, s vlastným arabským balením, špecifikáciami materiálov odolných voči teplu a záručnými podmienkami v súlade so šaríou.',
    solution:
      'Uzavreli sme exkluzívnu distribučnú zmluvu. Vyvinuli sme arabské balenie a marketingové materiály. Overili sme špecifikácie materiálov pri teplote okolia 50 °C. Prispôsobili sme záručné podmienky regionálnym predpisom.',
    result:
      '12 kontajnerových objednávok za prvých 18 mesiacov. Vybudovaná sieť 15 predajcov a subdistribútorov. Odhadovaný podiel na trhu 18% segmentu nafukovacích SUP v GCC.',
    outcomeMetrics: [
      {
        label: 'Kontajnery',
        value: '12',
      },
      {
        label: 'Sieť predajcov',
        value: '15',
      },
      {
        label: 'Podiel na trhu',
        value: '18%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japonská lifestyle značka',
    product: 'Rad SUP dosiek so spoločnou značkou',
    industry: 'OEM / Značka',
    challenge:
      'Prémiová japonská lifestyle značka chcela vstúpiť na trh vodných športov s radom SUP dosiek so spoločnou značkou, ktorý kladie dôraz na minimalistický dizajn, ekologické materiály a precíznu výrobu vhodnú pre náročného japonského spotrebiteľa.',
    solution:
      'Vytvorili sme formy na mieru so štíhlejším bočným profilom. Obstarali sme vložky paluby z bambusu s certifikáciou FSC a varianty z recyklovaného PVC. Vyvinuli sme prémiový zážitok z rozbalenia s QR kódmi s návodmi na starostlivosť v japončine.',
    result:
      'Rad 3 modelov so spoločnou značkou bol uvedený na výstave Tokyo Marine Show. 2,800 ks predpredaných ešte pred verejným uvedením. Predstavené v 5 japonských lifestyle publikáciách.',
    outcomeMetrics: [
      {
        label: 'Modely',
        value: '3',
      },
      {
        label: 'Predpredané kusy',
        value: '2,800',
      },
      {
        label: 'Vystúpenia v médiách',
        value: '5',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Americká značka vybavenia pre vodné športy',
    product: 'Forma na mieru — touringová SUP doska',
    industry: 'OEM / Výroba',
    challenge:
      "Americká značka potrebovala úplne novú formu SUP s touringovým tvarom s dĺžkou 14 stôp (14'), integrovanými drážkami na upevnenie echolotu, zosilnenou stojacou plochou a nosnosťou 400 lbs — navrhnutú pre trh rybárskych SUP dosiek.",
    solution:
      "Skonštruovali sme novú 14' formu s technológiou drop-stitch so zosilnenou hustotou drop-stitch jadra, zabudovanými vložkami pre lišty príslušenstva a spodnou vrstvou z PVC vojenskej kvality pre odolnosť voči oderu. Pred finálnym dokončením nástrojov sme vyrobili 3 iteračné prototypy.",
    result:
      'Nová forma bola vyrobená za 14 týždňov. 3,500 ks vyrobených v prvej výrobnej sérii. Produkt bol vyhlásený za „Best Fishing SUP 2025“ časopisom Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Čas výroby nástroja',
        value: '14 týždňov',
      },
      {
        label: 'Prvá séria',
        value: '3,500 ks',
      },
      {
        label: 'Ocenenie',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globálna technologická korporácia',
    product: 'Firemný wellness — flotila SUP dosiek',
    industry: 'Korporátny sektor / Wellness',
    challenge:
      'Technologická spoločnosť z rebríčka Fortune 500 chcela spustiť vodný wellness program pre zamestnancov na 4 globálnych areáloch pri jazerách, pričom potrebovala 60 SUP dosiek s firemnou značkou, riešenia na uskladnenie a školenie inštruktorov.',
    solution:
      'Dodali sme flotilu stabilných univerzálnych SUP dosiek s grafikou paluby s firemným logom. Navrhli sme nepremokavé skladovacie stojany priamo na mieste. Certifikovali sme 12 interných inštruktorov prostredníctvom tréningového programu afarer.',
    result:
      'Program bol spustený na 4 areáloch. Viac ako 2,400 účastí zamestnancov v prvom roku. 94% spokojnosť zamestnancov. Predstavené v správe spoločnosti o udržateľnosti.',
    outcomeMetrics: [
      {
        label: 'Areály',
        value: '4',
      },
      {
        label: 'Účastníci',
        value: '2,400+',
      },
      {
        label: 'Spokojnosť',
        value: '94%',
      },
    ],
  },
  'university-club-program': {
    client: 'Športová únia britskej univerzity',
    product: 'Flotila študentského klubu — SUP dosky + bezpečnosť',
    industry: 'Vzdelávanie',
    challenge:
      'Britská univerzita s aktívnym klubom vodných športov potrebovala nahradiť zastaralú flotilu modernými nafukovacími SUP doskami, ktoré možno uskladniť v obmedzenom priestore areálu, ktoré môžu používať študenti všetkých úrovní zručností a ktoré spĺňajú súťažné štandardy BUCS.',
    solution:
      'Dodali sme 25 univerzálnych SUP dosiek s kompaktnými batohmi na uskladnenie, 10 touringových SUP dosiek na prípravu na súťaže a kompletné bezpečnostné vybavenie. Poskytli sme školenie funkcionárov klubu a workshopy o údržbe.',
    result:
      "Flotila bola predstavená na veľtrhu prvákov (Freshers' Fair). Členstvo klubu vzrástlo o 140%. Univerzita usporiadala prvú medziuniverzitnú súťaž v SUP za posledných 5 rokov.",
    outcomeMetrics: [
      {
        label: 'Dodané SUP dosky',
        value: '35',
      },
      {
        label: 'Rast členstva',
        value: '140%',
      },
      {
        label: 'Usporiadané súťaže',
        value: '1',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Prevádzkovateľ karibských výletných lodí',
    product: 'Palubná flotila aktivít — SUP dosky',
    industry: 'Hotelierstvo / Výletné plavby',
    challenge:
      'Významný operátor výletných lodí chcel ponúkať SUP ako aktivitu výletov na breh na 7 lodiach pristávajúcich v súkromných ostrovných prístavoch. Bolo potrebné kompaktné skladovanie na palube, rýchle cykly nafúknutia a vypustenia a jednotnú značku na úrovni celej flotily.',
    solution:
      'Vyvinuli sme balík SUP špecifický pre výletné lode so systémom ventilov na rýchle nafúknutie, kompaktným skladovaním v batohoch a grafikou paluby so značkou lode. Poskytli sme školenie vyhradeného brehového tímu a skrinky s náhradnými dielmi v 3 ostrovných prístavoch.',
    result:
      'Program bol spustený na 7 lodiach. Viac ako 15,000 účastí hostí v prvej sezóne. Priemerné hodnotenie výletov 4.6★. V druhom roku rozšírené o 3 ďalšie lode.',
    outcomeMetrics: [
      {
        label: 'Lode',
        value: '7',
      },
      {
        label: 'Účasti hostí',
        value: '15,000+',
      },
      {
        label: 'Hodnotenie',
        value: '4.6★',
      },
      {
        label: 'Rozšírenie v 2. roku',
        value: '+3 lode',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridská charterová spoločnosť pre rybolov',
    product: 'Flotila rybárskych SUP dosiek na mieru',
    industry: 'Rybolov / Charter',
    challenge:
      'Floridský prevádzkovateľ rybárskych charterov chcel rozšíriť svoju ponuku o rybárske túry na SUP doskách, pričom potreboval stabilné platformy s integrovanými držiakmi chladiacich boxov, lištami na držiaky prútov a kompatibilitou s transducérom echolotu.',
    solution:
      'Prispôsobili sme existujúcu stabilnú platformu SUP o 4 zabudované držiaky prútov, odnímateľný systém upevnenia chladiaceho boxu a vodotesné upevnenie transducera do scupper otvoru. Poskytli sme ceny pre flotilu a sezónny program výmeny.',
    result:
      'Rybárske túry na SUP boli spustené ako nový zdroj príjmov. 45% existujúcich zákazníkov charterov si rezervovalo SUP túry. Flotila sa za 2 sezóny rozšírila z 8 na 20 dosiek.',
    outcomeMetrics: [
      {
        label: 'Počiatočná flotila',
        value: '8',
      },
      {
        label: 'Flotila v 2. roku',
        value: '20',
      },
      {
        label: 'Cross-sell charterov',
        value: '45%',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Americká obytná štvrť pri jazere',
    product: 'Vybavenie komunity — flotila SUP dosiek',
    industry: 'Nehnuteľnosti / Komunita',
    challenge:
      'Luxusná obytná štvrť pri jazere chcela poskytovať SUP dosky ako vybavenie pre obyvateľov, pričom potrebovala flotilu s nízkymi nárokmi na údržbu, bezpečné uskladnenie pri brehu jazera a samoobslužný systém výpožičiek pre viac ako 200 domácností.',
    solution:
      'Dodali sme 15 SUP dosiek komerčnej kvality so systémom nepremokavých skriniek na uskladnenie. Navrhli sme samoobslužné vypožičiavanie pomocou QR kódov s integráciou digitálneho zrieknutia sa zodpovednosti. Poskytli sme sezónnu údržbársku službu.',
    result:
      '85% domácností využilo SUP vybavenie v prvej sezóne. Hodnoty nehnuteľností v časti pri jazere vzrástli o 7%. Komunita získala ocenenie „Best Lakeside Living“.',
    outcomeMetrics: [
      {
        label: 'SUP dosky',
        value: '15',
      },
      {
        label: 'Využitie domácnosťami',
        value: '85%',
      },
      {
        label: 'Vplyv na hodnotu nehnuteľností',
        value: '+7%',
      },
      {
        label: 'Ocenenie',
        value: 'Best Lakeside Living',
      },
    ],
  },
};
