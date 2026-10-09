import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: 'Australische paddleclub-vereniging',
    product: 'Clubvloot — SUP + veiligheidsuitrusting',
    industry: 'Recreatie / Onderwijs',
    challenge:
      "Een vereniging van 15 clubs moest de uitrusting standaardiseren met duurzame, beginnersvriendelijke SUP's, CE-gecertificeerde zwemvesten en gecentraliseerde inkoop om de kosten per club te verlagen.",
    solution:
      "Standaardiseerden een clubvloot in 3 niveaus (beginner, gevorderd, instructeur). Ontwierpen deckgraphics in clubkleuren met clublogo's. Implementeerden centrale opslag met driemaandelijkse distributie per club.",
    result:
      '350 stuks over 15 clubs. 28% kostenreductie door gebundelde inkoop. 92% leden tevreden over de kwaliteit van de apparatuur.',
    outcomeMetrics: [
      {
        label: 'Uitgeruste clubs',
        value: '15',
      },
      {
        label: 'Geleverde stuks',
        value: '350',
      },
      {
        label: 'Kostenreductie',
        value: '28%',
      },
      {
        label: 'Ledentevredenheid',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Australische distributeur',
    product: 'CE-gecertificeerde SUP-range',
    industry: 'Maritiem / Detailhandel',
    challenge:
      'Een Australische distributeur vereiste een CE-gecertificeerde SUP-range met custom dekkleuren, geüpgrade PVC-optie en conformiteit met de Australische norm AS 1799.',
    solution:
      'Produceerden pre-productiesamples in 4 kleurvarianten, selecteerden PVC van militaire kwaliteit en coördineerden onafhankelijke AS 1799-conformiteitstests.',
    result:
      'SUP-reeks van 3 modellen gelanceerd op de AU/NZ-markt. Gevolgd door een contract met een retailketen van 12 winkels.',
    outcomeMetrics: [
      {
        label: 'Gelanceerde modellen',
        value: '3',
      },
      {
        label: 'Detailhandelszaken',
        value: '12',
      },
      {
        label: 'Conformiteit',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Canadese outdoorwinkelketen',
    product: 'Private-label SUP + accessoirelijn',
    industry: 'Detailhandel',
    challenge:
      'Een Canadese detailhandelaar met 25 winkels vereiste een exclusieve private-label SUP-range met tweetalige Frans/Engelse verpakking, specificaties voor koude klimaten en conformiteit met Canadese vaarvoorschriften.',
    solution:
      'Ontwikkelden 4 SUP-modellen met cold-flex PVC-samenstelling tot -15°C. Produceerden tweetalige retailverpakking met Canadese regelgevingsmarkeringen. Leverden displays en trainingsmateriaal voor personeel.',
    result:
      "Exclusieve lijn gelanceerd in 25 winkels. 3,800 stuks verkocht in het eerste seizoen. De retailpartner verlengde het contract met 3 jaar en breidde het aantal SKU's uit.",
    outcomeMetrics: [
      {
        label: 'Winkels',
        value: '25',
      },
      {
        label: 'Stuks eerste seizoen',
        value: '3,800',
      },
      {
        label: 'Overeenkomst',
        value: 'verlenging met 3 jaar',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Caribische luxeresortgroep',
    product: 'Resortvloot — SUP',
    industry: 'Gastvrijheid / Toerisme',
    challenge:
      'Een groep van 5 resorts had een uniforme verhuurvloot van SUP boards nodig met consistente branding, UV-bestendige materialen voor de tropische zon en een vervangingsplan van 5 jaar.',
    solution:
      'Ontwierpen een op maat gemaakt SUP-vlootpakket van 3 modellen met UV-gestabiliseerde PVC, deckgraphics in resortbranding en een gefaseerd leveringsschema. Verleenden personeelstraining en een speciaal reservonderdelenkit per resort.',
    result:
      '180 stuks geleverd aan 5 resorts. Herhalingsorder voor 2 nieuwe vestigingen. 40% kostenreductie per stuk ten opzichte van eerdere leveranciers.',
    outcomeMetrics: [
      {
        label: 'Geleverde stuks',
        value: '180',
      },
      {
        label: 'Resorts',
        value: '5',
      },
      {
        label: 'Kostenreductie',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Jaarlijkse vervangingskosten boards',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Vlootstilstand (dagen/jaar)',
        before: '45',
        after: '8',
      },
      {
        label: 'Gasttevredenheidsscore',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Wereldwijd technologiebedrijf',
    product: 'Bedrijfsfitness — SUP-vloot',
    industry: 'Zakelijk / Wellness',
    challenge:
      "Een Fortune 500 techbedrijf wilde een watergebonden wellnessprogramma lanceren op 4 wereldwijde campussen aan het meer: 60 SUP's met bedrijfsbranding, opslagoplossingen en instructeurstraining.",
    solution:
      "Leverden een vloot stabiele all-around SUP's met deckgraphics in bedrijfslogo. Ontwierpen weersbestendige opslagrekken op locatie. Certificeerden 12 interne instructeurs via het trainingsprogramma van afarer.",
    result:
      'Programma gelanceerd op 4 campussen. 2,400+ personeelsdeelnames in het eerste jaar. 94% tevredenheid onder medewerkers. Opgenomen in het duurzaamheidsrapport van het bedrijf.',
    outcomeMetrics: [
      {
        label: 'Campussen',
        value: '4',
      },
      {
        label: 'Deelnames',
        value: '2,400+',
      },
      {
        label: 'Tevredenheid',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Caribische cruisemaatschappij',
    product: 'Vloot voor boordactiviteiten — SUP',
    industry: 'Gastvrijheid / Cruise',
    challenge:
      'Een grote cruisemaatschappij wilde SUP aanbieden als shore excursion op 7 schepen: compacte opslag aan boord, snelle opblaas-/ledigingscycli en merkvastheid over de hele vloot.',
    solution:
      'Ontwikkelden een cruisespecifiek SUP-pakket met snelflatende ventielsystemen, compacte rugzakopslag en deckgraphics in scheepsbranding. Verleenden training voor het walteam en reservonderdelenkasten op 3 eilandhavens.',
    result:
      'Programma gelanceerd op 7 schepen. 15,000+ gastdeelnames in het eerste seizoen. 4.6★ gemiddelde beoordeling van excursies. Uitgebreid naar 3 extra schepen in jaar 2.',
    outcomeMetrics: [
      {
        label: 'Schepen',
        value: '7',
      },
      {
        label: 'Gastdeelnames',
        value: '15,000+',
      },
      {
        label: 'Beoordeling',
        value: '4.6★',
      },
      {
        label: 'Uitbreiding jaar 2',
        value: '+3 schepen',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Europese DTC-watersportmerk',
    product: 'Merk-SUP + accessoirelijn',
    industry: 'E-commerce / Detailhandel',
    challenge:
      'Een snelgroeiend DTC-watersportmerk had een compleet SUP-pakket nodig (board, pomp, peddel, leash, tas) met premium verpakking voor e-commerce — DHL/FedEx-directe levering zonder schade.',
    solution:
      'Ontwikkelden een co-branded productlijn met op maat gevormde EPS-kern, eigen drop-stitch-technologie voor hogere druk en retail-klare dubbelgolfkartonnen dozen met beschermende inlays. Integreerden op QR-codes gebaseerde authenticatie en garantieregistratie.',
    result:
      'SUP-lijn van 3 modellen gelanceerd in 75 dagen. 15,000+ stuks in de eerste 12 maanden. 4.8★ gemiddelde beoordeling op 2,000+ reviews. 0.3% schade tijdens transport.',
    outcomeMetrics: [
      {
        label: 'Modellen',
        value: '3',
      },
      {
        label: 'Stuks',
        value: '15,000+',
      },
      {
        label: 'Gemiddelde beoordeling',
        value: '4.8★',
      },
      {
        label: 'Schadepercentage',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Europese meerresort- en verhuuroperator',
    product: 'Verhuurvloot — SUP, zwemvesten, accessoires',
    industry: 'Verhuur / Toerisme',
    challenge:
      'Een meerresort-operator met 6 verhuurstations had een zeer duurzame verhuur-SUP-vloot nodig met sneldrogende systemen, beschadigingsbestendige constructie en een voorspelbaar meerjarig vervangingsschema.',
    solution:
      "Leverden verhuur-SUP's van commerciële kwaliteit met versterkte railbanden, snel drogende EVA-decks en UV-gestabiliseerde PVC. Ontwikkelden een kleurgecodeerd slijtagevolgsysteem met jaarlijkse conditierapporten.",
    result:
      "200 SUP's ingezet op 6 stations. Jaarlijkse onderhoudskosten met 55% gedaald. Levensduur van de apparatuur verlengd van 2 naar 4 jaar.",
    outcomeMetrics: [
      {
        label: 'Verhuurstations',
        value: '6',
      },
      {
        label: "Ingezette SUP's",
        value: '200',
      },
      {
        label: 'Onderhoudskosten',
        value: '-55%',
      },
      {
        label: 'Levensduur',
        value: '4 jaar',
      },
    ],
    beforeAfter: [
      {
        label: 'Gemiddelde levensduur board',
        before: '2 jaar',
        after: '4 jaar',
      },
      {
        label: 'Jaarlijks onderhoud per board',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Verhuuromzet per board/seizoen',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Vischarterbedrijf uit Florida',
    product: 'Custom vissers-SUP-vloot',
    industry: 'Visserij / Charter',
    challenge:
      'Een vischarter-operator uit Florida wilde SUP-vistochten toevoegen: stabiele platforms met geïntegreerde coolersteunen, railbevestigingen voor hengelhouders en compatibiliteit met visfinder-transducers.',
    solution:
      'Pasten het bestaande stabiele SUP-platform aan met 4 ingebouwde hengelhouders, een verwijderbaar bevestigingssysteem voor koelboxen en een waterdichte scupperbevestiging voor de transducer. Hanteerden vlootprijzen en een seizoensgebonden vervangingsprogramma.',
    result:
      'SUP-vistochten gelanceerd als nieuwe inkomstenstroom. 45% van de bestaande charterklanten boekte SUP-tours. Vloot uitgebreid van 8 naar 20 boards in 2 seizoenen.',
    outcomeMetrics: [
      {
        label: 'Initiële vloot',
        value: '8',
      },
      {
        label: 'Vloot jaar 2',
        value: '20',
      },
      {
        label: 'Charter-kruisverkoop',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: 'Internationale humanitaire organisatie',
    product: 'Reddings- en hulpboten',
    industry: 'NGO / Humanitaire hulp',
    challenge:
      'Een internationale humanitaire organisatie had 50 robuuste opblaasbare boten nodig voor reddingsoperaties bij overstromingen in Zuidoost-Azië: licht voor helikoptervervoer en ter plaatse te repareren.',
    solution:
      'Produceerden 50 versterkte opblaasboten met zelflozende bodems, redundantie met meerdere compartimenten en grijplijnen langs de rand. Leverden veldreparatiekits met pictograminstructies. Trainden 20 lokale technici.',
    result:
      "50 boten ingezet in 3 overstromingsgevoelige regio's. Gebruikt in 12 grote reddingsoperaties in de eerste 6 maanden. 0 apparatuurstoringen gemeld.",
    outcomeMetrics: [
      {
        label: 'Ingezette boten',
        value: '50',
      },
      {
        label: 'Reddingsoperaties',
        value: '12',
      },
      {
        label: 'Uitvalpercentage',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japans lifestylemerk',
    product: 'Co-branded SUP-lijn',
    industry: 'OEM / Merk',
    challenge:
      'Een premium Japans lifestylemerk wilde de watersportmarkt betreden met een co-branded SUP-lijn met minimalistisch ontwerp, milieuvriendelijke materialen en precisieproductie.',
    solution:
      'Maakten op maat gemaakte mallen met een slanker railprofiel. Selecteerden FSC-gecertificeerde bamboedeck-inlays en gerecyclede PVC-opties. Ontwikkelden een premium unboxing-ervaring met QR-codes naar Japanstalige onderhoudshandleidingen.',
    result:
      'Co-branded lijn van 3 modellen gelanceerd op de Tokyo Marine Show. 2,800 stuks voorverkocht vóór de publieke release. Beschreven in 5 Japanse lifestylepublicaties.',
    outcomeMetrics: [
      {
        label: 'Modellen',
        value: '3',
      },
      {
        label: 'Voorverkochte stuks',
        value: '2,800',
      },
      {
        label: 'Mediapublicaties',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Amerikaanse woongemeenschap aan het meer',
    product: 'Gemeenschapsvoorziening — SUP-vloot',
    industry: 'Vastgoed / Gemeenschap',
    challenge:
      'Een luxe woongemeenschap aan het meer wilde SUP boards aanbieden als voorziening voor bewoners: onderhoudsarme vloot, veilige opslag aan de oever en een zelfbedieningssysteem voor 200+ woningen.',
    solution:
      "Leverden 15 SUP's van commerciële kwaliteit met een weersbestendig opslagsysteem met lockers. Ontwierpen op QR-codes gebaseerde zelfuitgifte met digitale waiver-integratie. Verleenden seizoensgebonden onderhoudsservice.",
    result:
      '85% van de huishoudens gebruikte de SUP-voorziening in het eerste seizoen. Vastgoedwaarden in het deel aan het meer stegen met 7%. De gemeenschap won de «Best Lakeside Living»-prijs.',
    outcomeMetrics: [
      {
        label: "SUP's",
        value: '15',
      },
      {
        label: 'Gebruik door huishoudens',
        value: '85%',
      },
      {
        label: 'Invloed op vastgoedwaarde',
        value: '+7%',
      },
      {
        label: 'Prijs',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Mediterrane strandresortketen',
    product: 'Resortvloot — SUP + accessoires',
    industry: 'Gastvrijheid / Toerisme',
    challenge:
      "Een Mediterrane resortketen met 3 vestigingen wilde een uniform wateractiviteitenprogramma starten met 120 SUP's met custom branding, meertalige veiligheidskaarten en een rotatiesysteem voor onderhoud.",
    solution:
      "Ontwierpen een resortspecifiek vlootpakket met marine-grade UV-bestendige PVC, deckgraphics in hotelbranding in 3 kleurenschema's en een kleurgecodeerd onderhoudslabelsysteem. Inbegrepen: personeelstraining en driemaandelijkse aanvulling van reservonderdelen.",
    result:
      'Vloot ingezet op 3 resorts. Omzet uit wateractiviteiten steeg in het eerste seizoen met 210%. Gasttevredenheid voor voorzieningen ging van 4.1 naar 4.7/5.',
    outcomeMetrics: [
      {
        label: "Geleverde SUP's",
        value: '120',
      },
      {
        label: 'Resorts',
        value: '3',
      },
      {
        label: 'Omzetgroei',
        value: '210%',
      },
      {
        label: 'Gastscore',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Omzet wateractiviteiten (jaarlijks)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Vervangingspercentage apparatuur',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Gasttevredenheid (voorzieningen)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Midden-Oostense watersportdistributeur',
    product: "Volledige productlijn — SUP's, boten, accessoires",
    industry: 'Distributie / Maritiem',
    challenge:
      'Een in de GCC gevestigde distributeur wilde exclusieve rechten op de volledige Afarer-productlijn in 6 Golfstaten, met Arabische verpakking, hittebestendige materiaalspecificaties en sharia-conforme garantiebepalingen.',
    solution:
      'Sloten een exclusieve distributieovereenkomst. Ontwikkelden Arabische verpakkingen en marketingmateriaal. Valideerden materiaalspecificaties bij 50°C omgevingstemperatuur. Pasten garantiebepalingen aan op regionale regelgeving.',
    result:
      "12 containerorders in de eerste 18 maanden. Netwerk van 15 dealers en sub-distributeurs opgezet. Geschat marktaandeel van 18% in het GCC-segment voor opblaasbare SUP's.",
    outcomeMetrics: [
      {
        label: 'Containers',
        value: '12',
      },
      {
        label: 'Dealernetwerk',
        value: '15',
      },
      {
        label: 'Marktaandeel',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: 'Europese outdoorwinkel',
    product: 'Private-label SUP-lijn',
    industry: 'Detailhandel',
    challenge:
      'Een Europese outdoorwinkel had een private-label SUP-lijn nodig met uniek dekgrafisch ontwerp, milieuvriendelijk PVC en verpakking die klaar is voor de winkel — alles geleverd binnen 60 dagen.',
    solution:
      'Ontwikkelden aangepaste digitale printbestanden, selecteerden REACH-conforme PVC en verkortten het samplingproces van 3 naar 1 ronde door het designteam bij onze fabriek in Qingdao onder te brengen.',
    result:
      "55 dagen van ondertekende PO tot FOB. 2,400 stuks in 4 SKU's. Herhalingsorder geplaatst vóór aankomst van de eerste container.",
    outcomeMetrics: [
      {
        label: 'Levertijd',
        value: '55 dagen',
      },
      {
        label: 'Stuks',
        value: '2,400',
      },
      {
        label: "SKU's",
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Maritiem agentschap Zuidoost-Azië',
    product: 'Patrouille- en reddings-SUP-vloot',
    industry: 'Overheid / Maritieme veiligheid',
    challenge:
      "Een overheids-maritiem agentschap vereiste 20 patrouille- en reddings-SUP's met brandwerend Hypalon-doek, geïntegreerde communicatiesteunen en conformiteit met SOLAS hoofdstuk III.",
    solution:
      "Produceerden 20 SUP's met CSM Hypalon-tubes, zware D-ringen en vooraf geïnstalleerde navigatielichtsets. Het inspectieteam van de fabriek was aanwezig bij de zeeproeven. Volledig SOLAS-documentatiepakket geleverd.",
    result:
      'Contract geleverd in 4 maanden. Vloot ingezet voor grensbewaking, zoek-en-redding en rampenrespons op 3 regionale bases.',
    outcomeMetrics: [
      {
        label: "Patrouille-SUP's",
        value: '20',
      },
      {
        label: 'Levering',
        value: '4 maanden',
      },
      {
        label: 'Bases',
        value: '3',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Amerikaanse watersportstartup',
    product: 'Custom SUP-lijn',
    industry: 'Startup / Detailhandel',
    challenge:
      'Een Amerikaanse watersportstartup had een hoogwaardige Drop-Stitch SUP nodig met custom dekdesign, co-branding verpakking en BSCI-certificering voor verkoop in de detailhandel.',
    solution:
      'Pasten de bestaande SUP-mal aan met een gewijzigd rockerprofiel, ontwikkelden co-branded verpakkingsdesign en leverden volledige BSCI-auditdocumentatie.',
    result:
      'Succesvol opgenomen in 3 grote Amerikaanse outdoorketens. 5,000+ stuks in het eerste jaar met een sell-through van 98%.',
    outcomeMetrics: [
      {
        label: 'Retailketens',
        value: '3',
      },
      {
        label: 'Stuks eerste jaar',
        value: '5,000+',
      },
      {
        label: 'Sell-through',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: 'Britse universiteitssportbond',
    product: 'Studentenclubvloot — SUP + veiligheid',
    industry: 'Onderwijs',
    challenge:
      "Een Britse universiteit met een actieve watersportclub moest een verouderde vloot vervangen door moderne opblaasbare SUP's: beperkte opslag op de campus, geschikt voor elk niveau en conform BUCS-competitiestandaarden.",
    solution:
      "Leverden 25 all-around SUP's met compacte opslagrugzakken, 10 touring-SUP's voor competitietraining en een volledig veiligheidspakket. Verleenden training voor bestuursleden en onderhoudsworkshops.",
    result:
      'Vloot gepresenteerd op de introductiemarkt. Het clublidmaatschap groeide met 140%. De universiteit organiseerde de eerste interuniversitaire SUP-competitie in 5 jaar.',
    outcomeMetrics: [
      {
        label: "Geleverde SUP's",
        value: '35',
      },
      {
        label: 'Ledengroei',
        value: '140%',
      },
      {
        label: 'Georganiseerde competities',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Amerikaans watersportuitrustingsmerk',
    product: 'Custom mal — Touring SUP',
    industry: 'OEM / Productie',
    challenge:
      'Een Amerikaans merk vereiste een compleet nieuwe SUP-mal: touringvorm van 14 voet, geïntegreerde kanalen voor een visfinder, versterkt sta-platform en een draagcapaciteit van 400 lbs.',
    solution:
      'Ontwierpen een nieuwe 14-voet drop-stitch-mal met versterkte kerndichtheid, geïntegreerde inserts voor accessoirerails en een PVC-onderlaag van militaire kwaliteit voor slijtvastheid. Produceerden 3 prototype-iteraties vóór definitieve tooling.',
    result:
      'Nieuwe mal gereed in 14 weken. 3,500 stuks geproduceerd in de eerste productierun. Product uitgeroepen tot «Best Fishing SUP 2025» door Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Toolingtijd',
        value: '14 weken',
      },
      {
        label: 'Eerste run',
        value: '3,500 stuks',
      },
      {
        label: 'Prijs',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
