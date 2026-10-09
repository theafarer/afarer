import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: 'Australsk padleklubbforbund',
    product: 'Klubbflåte — SUP + sikkerhetsutstyr',
    industry: 'Fritid / Utdanning',
    challenge:
      'Et forbund med 15 klubber måtte standardisere utstyret med holdbare nybegynnervennlige SUP-er, CE-sertifiserte redningsvester og en sentralisert anskaffelsesmodell for lavere kostnader per klubb.',
    solution:
      'Standardiserte en klubbflåte i 3 nivåer (nybegynner, viderekomne, instruktør). Utformet dekkgrafikk i klubbens farger med klubblogoer. Implementerte sentrallager med kvartalsvis distribusjon per klubb.',
    result:
      '350 enheter på tvers av 15 klubber. 28% kostnadsreduksjon gjennom samlet innkjøp. 92% av medlemmene fornøyde med utstyrets kvalitet.',
    outcomeMetrics: [
      {
        label: 'Utrustede klubber',
        value: '15',
      },
      {
        label: 'Leverte enheter',
        value: '350',
      },
      {
        label: 'Kostnadsreduksjon',
        value: '28%',
      },
      {
        label: 'Medlemstilfredshet',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Australsk distributør',
    product: 'CE-sertifisert SUP-serie',
    industry: 'Maritim / Detaljhandel',
    challenge:
      'En australsk distributør krevde en CE-sertifisert SUP-serie med skreddersydde dekkfarger, oppgradert PVC-alternativ og samsvar med australsk standard AS 1799.',
    solution:
      'Produserte forproduksjonsprøver i 4 fargevarianter, fremskaffet PVC i militærkvalitet og koordinerte uavhengige AS 1799-samsvarstester.',
    result:
      'SUP-serie med 3 modeller lansert i AU/NZ-markedet. Fulgt opp av kontrakt med en butikkjede med 12 butikker.',
    outcomeMetrics: [
      {
        label: 'Lanserte modeller',
        value: '3',
      },
      {
        label: 'Butikker',
        value: '12',
      },
      {
        label: 'Samsvar',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanadisk friluftsbutikkjede',
    product: 'SUP med egen merkevare + tilbehørslinje',
    industry: 'Detaljhandel',
    challenge:
      'En kanadisk forhandler med 25 butikker krevde en eksklusiv SUP-serie med egen merkevare med tospråklig fransk/engelsk emballasje, kaldværsspesifikasjoner og kanadiske båtforskrifter.',
    solution:
      'Utviklet 4 SUP-modeller med cold-flex PVC-sammensetning godkjent ned til -15°C. Produserte tospråklig butikkemballasje med kanadiske forskriftsmarkeringer. Leverte displayer og opplæringsmateriell for personalet.',
    result:
      'Eksklusiv linje lansert i 25 butikker. 3,800 enheter solgt første sesong. Forhandleren fornyet avtalen med 3 år med utvidet antall SKU-er.',
    outcomeMetrics: [
      {
        label: 'Butikker',
        value: '25',
      },
      {
        label: 'Enheter første sesong',
        value: '3,800',
      },
      {
        label: 'Avtale',
        value: 'fornyelse på 3 år',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Karibisk luksusresortgruppe',
    product: 'Resortflåte — SUP',
    industry: 'Gjestfrihet / Turisme',
    challenge:
      'En gruppe med 5 resorter trengte en enhetlig flåte av leie-SUP-er med konsekvent branding, UV-bestandige materialer for tropisk sol og en 5-årig utskiftingsplan.',
    solution:
      'Utformet en skreddersydd SUP-flåtepakke med 3 modeller med UV-stabilisert PVC, dekkgrafikk med resortprofil og en fasevis leveringsplan. Ga personalopplæring og et eget reservedelskit per resort.',
    result:
      '180 enheter levert til 5 resorter. Gjentaksordre for 2 nye anlegg. 40% kostnadsreduksjon per enhet sammenlignet med tidligere leverandører.',
    outcomeMetrics: [
      {
        label: 'Leverte enheter',
        value: '180',
      },
      {
        label: 'Resorter',
        value: '5',
      },
      {
        label: 'Kostnadsreduksjon',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Årlig erstatningskostnad for brett',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Flåtestillestand (dager/år)',
        before: '45',
        after: '8',
      },
      {
        label: 'Gjestetilfredshetscore',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globalt teknologiselskap',
    product: 'Bedriftshelse — SUP-flåte',
    industry: 'Bedrift / Helse',
    challenge:
      'Et Fortune 500-teknologiselskap ville lansere et vannbasert helseprogram for ansatte på 4 globale campuser ved sjøer: 60 SUP-er med bedriftsbranding, lagringsløsninger og instruktøropplæring.',
    solution:
      'Leverte en flåte stabile allaround-SUP-er med dekkgrafikk i firmaets logo. Utformet værbestandige lagringsstativer på stedet. Sertifiserte 12 interne instruktører gjennom afarers opplæringsprogram.',
    result:
      'Program lansert på 4 campuser. 2,400+ ansattdeltakelser første året. 94% tilfredshet blant de ansatte. Omtalt i selskapets bærekraftsrapport.',
    outcomeMetrics: [
      {
        label: 'Campuser',
        value: '4',
      },
      {
        label: 'Deltakere',
        value: '2,400+',
      },
      {
        label: 'Tilfredshet',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Karibisk cruiseselskap',
    product: 'Flåte for om bord-aktiviteter — SUP',
    industry: 'Gjestfrihet / Cruise',
    challenge:
      'Et stort cruiseselskap ville tilby SUP som landutflukt på 7 skip: kompakt lagring om bord, raske oppblåsings/tømmingssykluser og enhetlig branding over hele flåten.',
    solution:
      'Utviklet en cruise-spesifikk SUP-pakke med hurtigoppblåsningsventilsystemer, kompakt ryggsekk-lagring og dekkgrafikk med skipets profil. Ga dedikert opplæring for landteamet og reservedelsskap på 3 øyhavner.',
    result:
      'Program lansert på 7 skip. 15,000+ gjestedeltakelser i første sesong. 4.6★ gjennomsnittsvurdering på utflukter. Utvidet til 3 ytterligere skip i år 2.',
    outcomeMetrics: [
      {
        label: 'Skip',
        value: '7',
      },
      {
        label: 'Gjestedeltakelser',
        value: '15,000+',
      },
      {
        label: 'Vurdering',
        value: '4.6★',
      },
      {
        label: 'Utvidelse år 2',
        value: '+3 skip',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Europeisk DTC-vannsportsmerke',
    product: 'Merke-SUP + tilbehørslinje',
    industry: 'E-handel / Detaljhandel',
    challenge:
      'Et raskt voksende DTC-merke trengte et komplett SUP-pakke (brett, pumpe, padleåre, leash, bag) med premiumemballasje for e-handel — DHL/FedEx-levering direkte til kunde uten skader.',
    solution:
      'Utviklet en co-branded produktlinje med tilpasset EPS-kjerneforming, proprietær drop-stitch-teknologi for høyere trykk og butikkklare dobbeltveggede bølgepappesker med beskyttende innlegg. Integrerte QR-kodebasert ekthetsverifisering og garantiregistrering.',
    result:
      'SUP-linje med 3 modeller lansert på 75 dager. 15,000+ enheter de første 12 månedene. 4.8★ gjennomsnittsvurdering på 2,000+ anmeldelser. 0.3% skade under transport.',
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
        label: 'Gjennomsnittsvurdering',
        value: '4.8★',
      },
      {
        label: 'Skaderate',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Europeisk sjøresort- og utleieoperatør',
    product: 'Utleieflåte — SUP, redningsvester, tilbehør',
    industry: 'Utleie / Turisme',
    challenge:
      'En sjøresortoperatør med 6 utleiestasjoner trengte en ekstra holdbar utleie-SUP-flåte med hurtigtørkende systemer, skadebestandig konstruksjon og en forutsigbar flerårig utskiftingsplan.',
    solution:
      'Leverte utleie-SUP-er i kommersiell kvalitet med forsterkede rail-bånd, hurtigtørkende EVA-dekk og UV-stabilisert PVC. Utviklet et fargekodet system for slitasjesporing med årlige tilstandsrapporter.',
    result:
      '200 SUP-er utplassert på 6 stasjoner. Årlige vedlikeholdskostnader redusert med 55%. Utskyrets levetid forlenget fra 2 til 4 år.',
    outcomeMetrics: [
      {
        label: 'Utleiestasjoner',
        value: '6',
      },
      {
        label: 'Utplasserte SUP-er',
        value: '200',
      },
      {
        label: 'Vedlikeholdskostnad',
        value: '-55%',
      },
      {
        label: 'Levetid',
        value: '4 år',
      },
    ],
    beforeAfter: [
      {
        label: 'Gjennomsnittlig levetid per brett',
        before: '2 år',
        after: '4 år',
      },
      {
        label: 'Årlig vedlikehold per brett',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Utleieinntekt per brett/sesong',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Floridansk fiskecharterfirma',
    product: 'Skreddersydd fiske-SUP-flåte',
    industry: 'Fiske / Charter',
    challenge:
      'En fiskecharteroperatør i Florida ville legge til SUP-fisketurer: stabile plattformer med integrerte coolerfester, skinnholdere og kompatibilitet med ekkoloddgivere.',
    solution:
      'Tilpasset den eksisterende stabile SUP-plattformen med 4 innebygde stangholdere, et avtagbart festesystem for kjøleboks og en vanntett scupperfeste for ekkolodd-giver. Tilbud flåtepriser og et sesongbasert erstatningsprogram.',
    result:
      'SUP-fisketurer lansert som en ny inntektskilde. 45% av de eksisterende charterkundene bestilte SUP-turer. Flåten utvidet fra 8 til 20 brett i løpet av 2 sesonger.',
    outcomeMetrics: [
      {
        label: 'Startflåte',
        value: '8',
      },
      {
        label: 'Flåte år 2',
        value: '20',
      },
      {
        label: 'Charter-kryssalg',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: 'Internasjonal humanitær organisasjon',
    product: 'Rednings- og nødhjelpsgummibåter',
    industry: 'NGO / Humanitær hjelp',
    challenge:
      'En internasjonal humanitær organisasjon trengte 50 robuste gummibåter til redningsoperasjoner ved flom i Sørøst-Asia: lette for helikoptertransport og repererbare i felten.',
    solution:
      'Produserte 50 forsterkede oppblåsbare båter med selv-tømmende bunner, redundans med flere kamre og griplinjer langs omkretsen. Leverte feltreparasjonssett med piktograminstruksjoner. Opplærte 20 lokale teknikere.',
    result:
      '50 båter utplassert i 3 oversvømmelsesutsatte regioner. Brukt i 12 store redningsoperasjoner i løpet av de første 6 månedene. 0 rapporterte utstyrsfeil.',
    outcomeMetrics: [
      {
        label: 'Utplasserte båter',
        value: '50',
      },
      {
        label: 'Redningsoperasjoner',
        value: '12',
      },
      {
        label: 'Feilrate',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Japansk livsstilsmerke',
    product: 'Co-branded SUP-linje',
    industry: 'OEM / Merkevare',
    challenge:
      'Et premium japansk livsstilsmerke ville entre vannsportsmarkedet med en co-branded SUP-linje: minimalistisk design, miljøvennlige materialer og presisjonsproduksjon.',
    solution:
      'Laget egendefinerte former med slankere railprofil. Fremskaffet FSC-sertifiserte bambusinnlegg i dekket og resirkulerte PVC-alternativer. Utviklet en premium-pakkeopplevelse med QR-kodede pleieguider på japansk.',
    result:
      'Co-branded linje med 3 modeller lansert på Tokyo Marine Show. 2,800 enheter solgt på forhånd før offentlig lansering. Omtalt i 5 japanske livsstilspublikasjoner.',
    outcomeMetrics: [
      {
        label: 'Modeller',
        value: '3',
      },
      {
        label: 'Forhåndssolgte enheter',
        value: '2,800',
      },
      {
        label: 'Medieomtaler',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Amerikansk boligfellesskap ved sjøen',
    product: 'Felles fasilitet — SUP-flåte',
    industry: 'Eiendom / Fellesskap',
    challenge:
      'Et luksusboligfellesskap ved sjøen ville tilby SUP-er som fasilitet for beboere: vedlikeholdsvennlig flåte, sikker lagring ved stranden og et selvbetjeningsutlånssystem for 200+ hjem.',
    solution:
      'Leverte 15 SUP-er i kommersiell kvalitet med et værbestandig skapsystem for oppbevaring. Utformet QR-kodebasert selvbetjent utlån med digital integrering av ansvarsfraskrivelser. Tilbud sesongbasert vedlikeholdstjeneste.',
    result:
      '85% av husholdningene brukte SUP-fasiliteten i første sesong. Eiendomsverdier i delen ved innsjøen økte med 7%. Fellesskapet vant prisen «Best Lakeside Living».',
    outcomeMetrics: [
      {
        label: 'SUP-er',
        value: '15',
      },
      {
        label: 'Husholdningsbruk',
        value: '85%',
      },
      {
        label: 'Påvirkning på eiendomsverdi',
        value: '+7%',
      },
      {
        label: 'Pris',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Middelhavsresortkjede ved stranden',
    product: 'Resortflåte — SUP + tilbehør',
    industry: 'Gjestfrihet / Turisme',
    challenge:
      'En middelhavsresortkjede med 3 anlegg ville lansere et enhetlig vannaktivitetsprogram med 120 SUP-er med skreddersydd branding, flerspråklige sikkerhetskort og et roterende vedlikeholdssystem.',
    solution:
      'Utformet en resortspesifikk flåtepakke med marin UV-bestandig PVC, dekkgrafikk med hotellprofil i 3 fargeordninger og et fargekodet merkesystem for vedlikehold. Inkluderte personalopplæring og kvartalsvis påfylling av reservedeler.',
    result:
      'Flåte utplassert på 3 resorter. Inntektene fra vannaktiviteter økte med 210% i første sesong. Gjestetilfredshetscoren for fasiliteter steg fra 4.1 til 4.7/5.',
    outcomeMetrics: [
      {
        label: 'Leverte SUP-er',
        value: '120',
      },
      {
        label: 'Resorter',
        value: '3',
      },
      {
        label: 'Inntektsøkning',
        value: '210%',
      },
      {
        label: 'Gjestescore',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Inntekter fra vannaktiviteter (årlig)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Erstatningsrate for utstyr',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Gjestetilfredshet (fasiliteter)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Vannsportsdistributør i Midtøsten',
    product: 'Hele produktlinjen — SUP, båter, tilbehør',
    industry: 'Distribusjon / Maritim',
    challenge:
      'En GCC-basert distributør ønsket eksklusive rettigheter til hele Afarer-produktlinjen i 6 Gulfstater, med arabisk emballasje, varmebestandige materialspesifikasjoner og sharia-kompatible garantivilkår.',
    solution:
      'Etablerte eksklusiv distribusjonsavtale. Utviklet arabisk emballasje og markedsføringsmateriell. Validerte materialespesifikasjoner ved 50°C omgivelsestemperatur. Tilpasset garantivilkår til regional forskriftssamsvar.',
    result:
      '12 containerordrer i løpet av de første 18 månedene. Nettverk med 15 forhandlere og underdistributører etablert. Estimert markedsandel på 18% av GCC-segmentet for oppblåsbare SUP-er.',
    outcomeMetrics: [
      {
        label: 'Containere',
        value: '12',
      },
      {
        label: 'Forhandlernettverk',
        value: '15',
      },
      {
        label: 'Markedsandel',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: 'Europeisk friluftsforhandler',
    product: 'SUP-linje med egen merkevare',
    industry: 'Detaljhandel',
    challenge:
      'En europeisk friluftsforhandler trengte en SUP-linje med egen merkevare med unikt dekkgrafisk design, miljøvennlig PVC og butikkklar emballasje — alt levert på 60 dager.',
    solution:
      'Utviklet egendefinerte digitale utskriftsfiler, fremskaffet REACH-samsvarsrik PVC og reduserte prøvetakingen fra 3 til 1 runde ved å plassere designteamet ved fabrikken vår i Qingdao.',
    result:
      '55 dager fra signert PO til FOB. 2,400 enheter fordelt på 4 SKU-er. Gjentaksordre lagt inn før første container ankom.',
    outcomeMetrics: [
      {
        label: 'Ledetid',
        value: '55 dager',
      },
      {
        label: 'Enheter',
        value: '2,400',
      },
      {
        label: 'SKU-er',
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Maritim etat i Sørøst-Asia',
    product: 'Patrulje- og rednings-SUP-flåte',
    industry: 'Offentlig sektor / Maritim sikkerhet',
    challenge:
      'En statlig maritim etat krevde 20 patrulje- og rednings-SUP-er med brannhemmende Hypalon-stoff, integrerte kommunikasjonsfester og samsvar med SOLAS kapittel III.',
    solution:
      'Produserte 20 SUP-er med CSM Hypalon-rør, kraftige D-ringer og forhåndsinstallerte navigasjonslys-pakker. Fabrikkens inspeksjonsteam var til stede under sjøtesting. Fullstendig SOLAS-dokumentasjonspakke ble levert.',
    result:
      'Kontrakt levert på 4 måneder. Flåte satt inn til grensevakt, søk og redning samt katastrofeberedskap på 3 regionale baser.',
    outcomeMetrics: [
      {
        label: 'Patrulje-SUP-er',
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
    client: 'Amerikansk vannsportsstartup',
    product: 'Skreddersydd SUP-linje',
    industry: 'Oppstart / Detaljhandel',
    challenge:
      'En amerikansk vannsportsstartup trengte en høytytende Drop-Stitch SUP med skreddersydd dekkdesign, co-branding-emballasje og BSCI-sertifisering for butikksalg.',
    solution:
      'Tilpasset eksisterende SUP-form med endret rockerprofil, utviklet co-branded emballasjedesign og leverte fullstendig BSCI-revisjonsdokumentasjon.',
    result:
      'Suksessfullt listet i 3 store amerikanske friluftskjeder. 5,000+ enheter første året med 98% sell-through.',
    outcomeMetrics: [
      {
        label: 'Butikkjeder',
        value: '3',
      },
      {
        label: 'Enheter første år',
        value: '5,000+',
      },
      {
        label: 'Sell-through',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: 'Britisk universitetssportforbund',
    product: 'Studentklubbflåte — SUP + sikkerhet',
    industry: 'Utdanning',
    challenge:
      'Et britisk universitet med en aktiv vannsportsklubb måtte erstatte en aldrende flåte med moderne oppblåsbare SUP-er: begrenset campuslagring, brukervennlighet for alle nivåer og BUCS-standarder.',
    solution:
      'Leverte 25 allaround-SUP-er med kompakte lagringssekker, 10 touring-SUP-er for konkurransetrening og en komplett sikkerhetsutstyrspakke. Ga opplæring for klubbledere og vedlikeholdsverksteder.',
    result:
      'Flåten presentert på fadderukesmessen. Klubbmedlemskapet vokste med 140%. Universitetet arrangerte den første interuniversitets-SUP-konkurransen på 5 år.',
    outcomeMetrics: [
      {
        label: 'Leverte SUP-er',
        value: '35',
      },
      {
        label: 'Medlemsvekst',
        value: '140%',
      },
      {
        label: 'Arrangerte konkurranser',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Amerikansk vannsportsutstyrsmerke',
    product: 'Skreddersydd form — Touring-SUP',
    industry: 'OEM / Produksjon',
    challenge:
      'Et amerikansk merke krevde en helt ny SUP-form: touringform på 14 fot, integrerte kanaler for ekkolodd, forsterket ståplattform og en lastekapasitet på 400 lbs.',
    solution:
      'Konstruerte en ny 14-fots drop-stitch-form med forsterket kjerndensitet, innebygde innlegg for tilbehørsskinner og et PVC-bunnlag i militærkvalitet for slitestyrke. Produserte 3 prototype-iterasjoner før endelig verktøyfremstilling.',
    result:
      'Ny form fremstilt på 14 uker. 3,500 enheter produsert i første produksjonsrunde. Produktet kåret til «Best Fishing SUP 2025» av Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Verktøytid',
        value: '14 uker',
      },
      {
        label: 'Første runde',
        value: '3,500 enheter',
      },
      {
        label: 'Pris',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
