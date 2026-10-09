import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: 'Australská asociace paddle klubů',
    product: 'klubová flotila — SUP + bezpečnostní vybavení',
    industry: 'Rekreace / Vzdělávání',
    challenge:
      'Asociace 15 klubů potřebovala sjednotit vybavení: odolná SUP prkna vhodná pro začátečníky, záchranné vesty s certifikací CE a centralizovaný nákupní model pro snížení nákladů na klub.',
    solution:
      'Standardizovali klubovou flotilu ve 3 úrovních (začátečníci, pokročilí, instruktoři). Navrhli grafiku palub v barvách klubu s klubovými logy. Zavedli centrální sklad s čtvrtletní distribucí pro jednotlivé kluby.',
    result:
      '350 kusů v 15 klubech. 28% snížení nákladů díky sdruženým nákupům. 92% členů spokojeno s kvalitou vybavení.',
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
        label: 'Snížení nákladů',
        value: '28%',
      },
      {
        label: 'Spokojenost členů',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Australský distributor',
    product: 'řada SUP s certifikací CE',
    industry: 'Námořní / Maloobchod',
    challenge:
      'Australský distributor vyžadoval řadu SUP s certifikací CE s zakázkovými barvami paluby, vylepšenou variantou PVC a souladem s australskou normou AS 1799.',
    solution:
      'Vyrobili předprodukční vzorky ve 4 barevných variantách, obstarali PVC vojenské kvality a zkoordinovali nezávislé testy shody s AS 1799.',
    result:
      'Série SUP o 3 modelech uvedena na trh AU/NZ. Následovala smlouva s maloobchodním řetězcem o 12 prodejnách.',
    outcomeMetrics: [
      {
        label: 'Uvedené modely',
        value: '3',
      },
      {
        label: 'Prodejny',
        value: '12',
      },
      {
        label: 'Shoda',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanadský řetězec outdoorových obchodů',
    product: 'řada SUP s vlastní značkou + příslušenství',
    industry: 'Maloobchod',
    challenge:
      'Kanadský retailer s 25 prodejnami vyžadoval exkluzivní řadu SUP s vlastní značkou s dvojjazyčným obalem francouzština/angličtina, specifikacemi pro chladné počasí a souladem s kanadskými předpisy.',
    solution:
      'Vyvinuli 4 modely SUP s cold-flex PVC sloučeninou odolnou do -15°C. Vyrobili dvojjazyčné maloobchodní obaly s kanadskými regulačními označeními. Dodali stojany a školicí materiály pro personál.',
    result:
      'Exkluzivní řada uvedena v 25 prodejnách. 3,800 kusů prodáno v první sezoně. Maloobchodník prodloužil smlouvu o 3 roky s rozšířeným počtem SKU.',
    outcomeMetrics: [
      {
        label: 'Prodejny',
        value: '25',
      },
      {
        label: 'Kusy za první sezonu',
        value: '3,800',
      },
      {
        label: 'Smlouva',
        value: 'prodloužení o 3 roky',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karibská skupina luxusních resortů',
    product: 'flotila pro resort — SUP',
    industry: 'Hotelnictví / Cestovní ruch',
    challenge:
      'Skupina pěti resortů potřebovala jednotnou flotilu pronájmu SUP s konzistentním brandingem, UV odolnými materiály pro tropické slunce a plánem výměny na 5 let.',
    solution:
      'Navrhli balíček SUP flotily na míru o 3 modelech s UV stabilizovaným PVC, grafikou palub s brandingem resortu a postupným plánem dodávek. Poskytli školení personálu a vybavenou sadu náhradních dílů pro každý resort.',
    result:
      '180 kusů dodáno do 5 resortů. Opakovaná objednávka pro 2 nové objekty. 40% snížení nákladů na kus oproti předchozím dodavatelům.',
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
        label: 'Snížení nákladů',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Roční náklady na výměnu prken',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Prostoje flotily (dní/rok)',
        before: '45',
        after: '8',
      },
      {
        label: 'Skóre spokojenosti hostů',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globální technologická korporace',
    product: 'firemní wellness — flotila SUP',
    industry: 'Firemní / Wellness',
    challenge:
      'Technologická společnost z žebříčku Fortune 500 chtěla spustit vodní wellness program pro zaměstnance na 4 globálních areálech u jezer: 60 SUP s firemním brandingem, skladováním a školením instruktorů.',
    solution:
      'Dodali flotilu stabilních all-around SUP s grafikou palub s logem firmy. Navrhli povětrnostně odolné stojany na skladování na místě. Certifikovali 12 interních instruktorů prostřednictvím školicího programu afarer.',
    result:
      'Program spuštěn na 4 kampusích. 2,400+ účastí zaměstnanců v prvním roce. 94% spokojenost zaměstnanců. Uvedeno ve zprávě o udržitelnosti společnosti.',
    outcomeMetrics: [
      {
        label: 'Kampusy',
        value: '4',
      },
      {
        label: 'Účastníci',
        value: '2,400+',
      },
      {
        label: 'Spokojenost',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Karibský operátor výletních lodí',
    product: 'flotila pro palubní aktivity — SUP',
    industry: 'Hotelnictví / Cruise',
    challenge:
      'Velká výletní loď chtěla nabízet SUP jako břehovou aktivitu na 7 lodích: kompaktní skladování na palubě, rychlé cykly nafouknutí/vypuštění a jednotný branding celé flotily.',
    solution:
      'Vyvinuli cruise balíček SUP s rychlonafukovacími ventily, kompaktním uskladněním v batohu a grafikou palub s brandingem lodi. Poskytli vyhrazené školení pobřežního týmu a skříně náhradních dílů ve 3 přístavech.',
    result:
      'Program spuštěn na 7 lodích. 15,000+ účastí hostů v první sezoně. 4.6★ průměrné hodnocení výletů. Rozšířeno o 3 další lodě ve 2. roce.',
    outcomeMetrics: [
      {
        label: 'Lodě',
        value: '7',
      },
      {
        label: 'Účasti hostů',
        value: '15,000+',
      },
      {
        label: 'Hodnocení',
        value: '4.6★',
      },
      {
        label: 'Rozšíření ve 2. roce',
        value: '+3 lodě',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Evropská DTC značka vodních sportů',
    product: 'značková řada SUP + příslušenství',
    industry: 'E-commerce / Maloobchod',
    challenge:
      'Rychle rostoucí DTC značka potřebovala kompletní SUP sadu (prkno, pumpu, pádlo, leash, tašku) s prémiovým obalem pro e-commerce — doprava DHL/FedEx přímo k zákazníkovi bez poškození.',
    solution:
      'Vyvinuli ko-branded produktovou řadu s vlastním tvarováním EPS jádra, proprietární drop-stitch technologií pro vyšší tlak a prodejně připravenými dvouvrstvými vlnitými kartóny s ochrannými výplněmi. Integrovali ověřování pravosti a registraci záruky prostřednictvím QR kódů.',
    result:
      'Řada SUP o 3 modelech uvedena za 75 dní. 15,000+ kusů za prvních 12 měsíců. 4.8★ průměrné hodnocení na 2,000+ recenzích. 0.3% míra poškození při přepravě.',
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
        label: 'Průměrné hodnocení',
        value: '4.8★',
      },
      {
        label: 'Míra poškození',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Evropský provozovatel jezerních resortů a půjčoven',
    product: 'půjčovací flotila — SUP, vesty, příslušenství',
    industry: 'Půjčovna / Cestovní ruch',
    challenge:
      'Provozovatel se 6 půjčovnami potřeboval vysoce odolnou flotilu půjčovních SUP se systémy rychlého sušení, konstrukcí odolnou proti poškození a předvídatelným víceletým plánem výměny.',
    solution:
      'Dodali půjčovní SUP komerční kvality se zesílenými bočními pásy, rychleschnoucími EVA palubami a UV stabilizovaným PVC. Vyvinuli barevně kódovaný systém sledování opotřebení s ročními zprávami o stavu.',
    result:
      '200 SUP nasazeno na 6 stanicích. Roční náklady na údržbu sníženy o 55%. Životnost vybavení prodloužena ze 2 na 4 roky.',
    outcomeMetrics: [
      {
        label: 'Půjčovní stanice',
        value: '6',
      },
      {
        label: 'Nasazená SUP',
        value: '200',
      },
      {
        label: 'Náklady na údržbu',
        value: '-55%',
      },
      {
        label: 'Životnost',
        value: '4 roky',
      },
    ],
    beforeAfter: [
      {
        label: 'Průměrná životnost prkna',
        before: '2 roky',
        after: '4 roky',
      },
      {
        label: 'Roční údržba na prkno',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Půjčovní příjmy na prkno/sezonu',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridská společnost rybářských charterů',
    product: 'zakázková flotila rybářských SUP',
    industry: 'Rybolov / Charter',
    challenge:
      'Floridský provozovatel rybářských charterů chtěl přidat SUP rybolovné výlety: stabilní platformy s držáky chladičů, lištami pro držáky prutů a kompatibilitou s sonary.',
    solution:
      'Upravili existující stabilní SUP platformu o 4 vestavěné držáky prutů, odnímatelný systém uchycení chladicího boxu a vodotěsné uchycení sondy v odtokovém otvoru. Nabídli ceny pro flotilu a sezonní program výměny.',
    result:
      'Rybářské výlety na SUP spuštěny jako nový zdroj příjmů. 45% stávajících zákazníků charteru si rezervovalo výlety na SUP. Flotila rozšířena z 8 na 20 prken za 2 sezony.',
    outcomeMetrics: [
      {
        label: 'Počáteční flotila',
        value: '8',
      },
      {
        label: 'Flotila ve 2. roce',
        value: '20',
      },
      {
        label: 'Křížový prodej charteru',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: 'Mezinárodní humanitární organizace',
    product: 'záchranné a pomocné nafukovací čluny',
    industry: 'NGO / Humanitární pomoc',
    challenge:
      'Mezinárodní humanitární organizace potřebovala 50 robustních nafukovacích člunů pro záchranné operace při povodních v jihovýchodní Asii: lehké pro přepravu helikoptérou a opravitelné v terénu.',
    solution:
      'Vyrobili 50 zesílených nafukovacích člunů se samoodtokovými dny, redundancí více komor a úchytovými lany po obvodu. Dodali polní opravárenské sady s piktrogramovými instrukcemi. Vytrénovali 20 místních techniků.',
    result:
      '50 člunů nasazeno ve 3 regionech ohrožených záplavami. Použito při 12 velkých záchranných operacích v prvních 6 měsících. 0 hlášených poruch vybavení.',
    outcomeMetrics: [
      {
        label: 'Nasazené čluny',
        value: '50',
      },
      {
        label: 'Záchranné operace',
        value: '12',
      },
      {
        label: 'Míra poruch',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japonská lifestyle značka',
    product: 'co-brandingová řada SUP',
    industry: 'OEM / Značka',
    challenge:
      'Prémiová japonská lifestyle značka vstoupila na trh vodních sportů s co-brandingovou řadou SUP: minimalistický design, ekologické materiály a precizní výroba pro náročné japonské spotřebitele.',
    solution:
      'Vytvořili vlastní formy s elegantnějším profilem bočnic. Obstarali FSC certifikované bambusové vložky palub a varianty z recyklovaného PVC. Vyvinuli prémiový zážitek rozbalení s QR kódy vedoucími na japonské návody k péči.',
    result:
      'Ko-branded řada o 3 modelech uvedena na veletrhu Tokyo Marine Show. 2,800 kusů předprodáno před veřejným uvedením. Popsáno v 5 japonských lifestyle magazínech.',
    outcomeMetrics: [
      {
        label: 'Modely',
        value: '3',
      },
      {
        label: 'Předprodané kusy',
        value: '2,800',
      },
      {
        label: 'Mediální zmínky',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Americké rezidenční společenství u jezera',
    product: 'vybavenost pro komunitu — flotila SUP',
    industry: 'Nemovitosti / Komunita',
    challenge:
      'Luxusní rezidenční společenství u jezera chtělo nabídnout SUP prkna jako vybavenost pro obyvatele: flotila s minimální údržbou, bezpečné uskladnění u břehu a samoobslužný výpůjční systém pro 200+ domácností.',
    solution:
      'Dodali 15 SUP komerční kvality s povětrnostně odolným systémem skříní na uskladnění. Navrhli samoobslužné vypůjčování pomocí QR kódů s integrací digitálních prohlášení. Poskytli sezonní servis údržby.',
    result:
      '85% domácností využilo SUP vybavení v první sezoně. Hodnoty nemovitostí v části u jezera vzrostly o 7%. Komunita získala cenu «Best Lakeside Living».',
    outcomeMetrics: [
      {
        label: 'SUP',
        value: '15',
      },
      {
        label: 'Využití domácnostmi',
        value: '85%',
      },
      {
        label: 'Dopad na hodnotu nemovitostí',
        value: '+7%',
      },
      {
        label: 'Cena',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Středozemní řetězec plážových resortů',
    product: 'flotila pro resort — SUP + příslušenství',
    industry: 'Hotelnictví / Cestovní ruch',
    challenge:
      'Středozemní řetězec tří resortů chtěl spustit jednotný program vodních aktivit s 120 SUP s zakázkovým brandingem, vícejazyčnými bezpečnostními kartami a systémem rotace údržby.',
    solution:
      'Navrhli resortový balíček flotily s námořním UV odolným PVC, grafikou palub s brandingem hotelu ve 3 barevných schématech a barevně kódovaným systémem označování pro údržbu. Zahrnuli školení personálu a čtvrtletní doplňování náhradních dílů.',
    result:
      'Flotila nasazena v 3 resotech. Příjmy z vodních aktivit vzrostly v první sezoně o 210%. Spokojenost hostů s vybavením vzrostla z 4.1 na 4.7/5.',
    outcomeMetrics: [
      {
        label: 'Dodaná SUP',
        value: '120',
      },
      {
        label: 'Resorty',
        value: '3',
      },
      {
        label: 'Růst příjmů',
        value: '210%',
      },
      {
        label: 'Skóre hostů',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Příjmy z vodních aktivit (ročně)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Míra výměny vybavení',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Spokojenost hostů (zařízení)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distributor vodních sportů na Blízkém východě',
    product: 'kompletní produktová řada — SUP, čluny, příslušenství',
    industry: 'Distribuce / Námořní',
    challenge:
      'Distributor se sídlem v GCC usiloval o výhradní práva na kompletní produktovou řadu Afarer v 6 zemích Perského zálivu s arabským obalem, materiály odolnými proti teplu a zárukou v souladu se šaríou.',
    solution:
      'Uzavřeli exkluzivní distribuční smlouvu. Vyvinuli arabské obaly a marketingové materiály. Ověřili specifikace materiálů při okolní teplotě 50°C. Přizpůsobili záruční podmínky regionálním předpisům.',
    result:
      '12 objednávek kontejnerů za prvních 18 měsíců. Vybudována síť 15 dealerů a subdistributorů. Odhadovaný podíl na trhu 18% segmentu nafukovacích SUP v zemích GCC.',
    outcomeMetrics: [
      {
        label: 'Kontejnery',
        value: '12',
      },
      {
        label: 'Dealerská síť',
        value: '15',
      },
      {
        label: 'Podíl na trhu',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: 'Evropský outdoorový retailer',
    product: 'řada SUP s vlastní značkou',
    industry: 'Maloobchod',
    challenge:
      'Evropský outdoorový retailer potřeboval řadu SUP s vlastní značkou s jedinečnou grafikou paluby, ekologickým PVC a obalem připraveným pro prodejnu — vše dodáno za 60 dní.',
    solution:
      'Vyvinuli vlastní digitální tiskové soubory, obstarali PVC splňující REACH a zkrátili vzorkování ze 3 kol na 1 umístěním designového týmu přímo v naší továrně v Qingdau.',
    result:
      '55 dní od podepsané objednávky PO po FOB. 2,400 kusů ve 4 variantách SKU. Opakovaná objednávka podána před příjezdem prvního kontejneru.',
    outcomeMetrics: [
      {
        label: 'Dodací lhůta',
        value: '55 dní',
      },
      {
        label: 'Kusy',
        value: '2,400',
      },
      {
        label: 'SKU',
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Námořní agentura jihovýchodní Asie',
    product: 'flotila hlídkových a záchranných SUP',
    industry: 'Veřejný sektor / Námořní bezpečnost',
    challenge:
      'Vládní námořní agentura vyžadovala 20 hlídkových a záchranných SUP s ohnivzdornou látkou Hypalon, integrovanými držáky komunikace a souladem se standardy SOLAS kapitola III.',
    solution:
      'Vyrobili 20 SUP s trubkami z CSM Hypalonu, těžkými D-kruhy a předinstalovanými sestavami navigačních světel. Inspekční tým továrny byl přítomen při námořních zkouškách. Byl dodán kompletní balíček dokumentace SOLAS.',
    result:
      'Smlouva dodána za 4 měsíce. Flotila nasazena k hlídkování hranic, pátrání a záchranye a pomoci při katastrofách na 3 regionálních základnách.',
    outcomeMetrics: [
      {
        label: 'Hlídkové SUP',
        value: '20',
      },
      {
        label: 'Dodání',
        value: '4 měsíce',
      },
      {
        label: 'Základny',
        value: '3',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Americký startup vodních sportů',
    product: 'zakázková řada SUP',
    industry: 'Startup / Maloobchod',
    challenge:
      'Americký startup vodních sportů potřeboval vysoce výkonný Drop-Stitch SUP s zakázkovým designem paluby, co-brandingovým obalem a certifikací BSCI pro umístění v maloobchodě.',
    solution:
      'Upravili existující SUP formu s modifikovaným rockerovým profilem, vyvinuli design ko-branded obalu a dodali kompletní dokumentaci auditu BSCI.',
    result:
      'Úspěšně zařazeno do 3 velkých amerických řetězců outdoorového zboží. 5,000+ kusů v prvním roce s 98% sell-through.',
    outcomeMetrics: [
      {
        label: 'Maloobchodní řetězce',
        value: '3',
      },
      {
        label: 'Kusy za první rok',
        value: '5,000+',
      },
      {
        label: 'Sell-through',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: 'Britská univerzitní sportovní unie',
    product: 'studentská klubová flotila — SUP + bezpečnost',
    industry: 'Vzdělávání',
    challenge:
      'Britská univerzita s aktivním klubem vodních sportů musela nahradit stárnoucí flotilu moderními nafukovacími SUP: skladování v omezeném prostoru kampusu, použití pro všechny úrovně a standardy soutěží BUCS.',
    solution:
      'Dodali 25 all-around SUP s kompaktními batohy na uskladnění, 10 touring SUP pro závodní trénink a kompletní sadu bezpečnostního vybavení. Poskytli školení funkcionářů klubu a workshopy údržby.',
    result:
      'Flotila představena na veletrhu prváků. Členství v klubu vzrostlo o 140%. Univerzita hostila první mezivysokoškolskou soutěž SUP za 5 let.',
    outcomeMetrics: [
      {
        label: 'Dodaná SUP',
        value: '35',
      },
      {
        label: 'Růst členství',
        value: '140%',
      },
      {
        label: 'Pořádané soutěže',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Americká značka vybavení pro vodní sporty',
    product: 'zakázková forma — touringové SUP',
    industry: 'OEM / Výroba',
    challenge:
      'Americká značka potřebovala zcela novou SUP formu: touringový tvar o délce 14 stop, integrované kanály pro rybí sonar, zpevněnou stojací plochu a nosnost 400 lbs.',
    solution:
      'Zkonstruovali novou 14stopou drop-stitch formu se zesílenou hustotou jádra, vestavěnými vložkami pro lišty příslušenství a spodní vrstvou z PVC vojenské kvality pro odolnost proti oděru. Vyrobili 3 iterace prototypů před dokončením nástroje.',
    result:
      'Nová forma zhotovena za 14 týdnů. 3,500 kusů vyrobeno v první výrobní sérii. Produkt vyhlášen «Best Fishing SUP 2025» časopisem Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Čas výroby nástroje',
        value: '14 týdnů',
      },
      {
        label: 'První série',
        value: '3,500 kusů',
      },
      {
        label: 'Cena',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
