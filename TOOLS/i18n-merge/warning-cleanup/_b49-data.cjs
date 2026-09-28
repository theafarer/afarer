// shard 49 data — solutions-paddle-clubs.yaml translations (TECH.md L39 / 挂账⑧ continuation).
//
// EN root was rewritten (v0 -> v1) with new meta/hero copy and a redistributed packages
// features block; 19 locales still hold pre-repo v0 EN (17 old-EN keys) plus 5 untranslated
// package/training names. This table holds the 23 fresh strings per locale:
//   meta 2 (title/description), hero 3 (tagline/title/subtitle),
//   package names 3 + taglines 3, fresh features 10 (p0f0-f3, p1f0-f3, p2f1, p2f2),
//   training names 2.
// p2f0 ("50+ racing / performance boards") is additionally fresh for 7 locales whose disk
// value lost the "+" (p2f0Old anchors the exact pre-patch disk value for those).
// All other package/training content is REUSED from each locale's own disk data and
// extracted by _gen-ops-49.cjs (launchGuide from pkg0.f3|f4 per launchGuideFrom; CE line,
// replacement-parts program, staff-training line, priority parts / account manager /
// uniforms lines, all training features, cta_text, titles/subtitles, hero.image).
//
// Terminology grounded in each locale's own disk usage (_s49-ground.cjs inventory):
// club (de Paddelclub / da paddleklub / sv paddelklubb / no padleklubb / es club de paddle /
// it club di paddle / pt clube de paddle / ro paddle club / ru паддл-клуб / ja パドルクラブ /
// ko 패들 클럽 / cs paddle klub / el σύλλογος paddle / ar نادي التجديف / th ชมรมแพดเดิล /
// tr kürek kulübü / fi melontakerho / nl paddleclub / pl klub paddle), fleet per pkg.subtitle,
// boards/paddles/vests per training features. all-round + touring kept as loanwords
// (_s49-terms.cjs site precedent). Dashes: cs/sv "-" (en dash U+2013), ja "―" (U+2015), rest "—".
// nl apostrophe: straight ' (disk convention, 143:1 vs curly).

module.exports = {
  // ---- de ----
  de: {
    metaTitle: 'SUP-Ausrüstung & Flottenlösungen für Paddelclubs | {SITE}',
    metaDesc:
      'Komplette SUP-Flottenprogramme für Paddelclubs und Schulen. Start-up-Pakete, professionelle Flotten, Wettkampf-Boards, Trainingscenter-Kits und Ersatzteil-Support.',
    heroTagline: 'Paddelclubs & Schulen',
    heroTitle: 'Starten, betreiben und vergrößern Sie Ihren Paddelclub<br />mit SUP-Flotten in kommerzieller Qualität',
    heroSubtitle:
      'SUP-Ausrüster für Paddelclubs und SUP-Schulen weltweit — langlebige kommerzielle Boards, Mengenpreise für Clubs, individuelles Branding und schnelle Ersatzteile, damit Sie sich auf das Wachstum Ihrer Community konzentrieren können.',
    p0Name: 'Start-Up-Paket',
    p0Tag: 'Für neue Clubs, bis zu 30 Mitglieder',
    p1Name: 'Professionelle Flotte',
    p1Tag: 'Für etablierte Clubs, 50-100 Mitglieder',
    p2Name: 'Wettbewerbsflotte',
    p2Tag: 'Für Rennclubs, Events und Wettkämpfe',
    p0f0: '10 SUP-Boards (Allround- + Touring-Mix)',
    p0f1: '10 Paddel + 10 Schwimmwesten',
    p0f2: '2 Doppelhubpumpen + Reparaturkit',
    p0f3: 'Club-Branding auf den Boards (Logo-Druck)',
    p1f0: '30 SUP-Boards (3 Größenoptionen)',
    p1f1: '30 Paddel + 30 Schwimmwesten',
    p1f2: '5 Pumpen + 2 Reparaturkits + Boardständer',
    p1f3: 'Individuelle Clubfarben + Logo auf den Boards',
    p2f0: '50+ Renn- / Performance-Boards',
    p2f0Old: '50 Renn- / Performance-Boards',
    p2f1: 'Komplettes Zubehör-Set (Paddel, Westen, Pumpen)',
    p2f2: 'Event-Support-Kit (Startbojen, Markierungen)',
    tr0Name: 'Starterpaket für Instruktoren',
    tr1Name: 'Komplettset für Schulen',
  },

  // ---- es ----
  es: {
    metaTitle: 'Equipamiento SUP y soluciones de flota para clubes de paddle | {SITE}',
    metaDesc:
      'Programas completos de flotas SUP para clubes y escuelas de paddle. Paquetes de inicio, flotas profesionales, tablas de competición, kits para centros de entrenamiento y soporte de piezas de repuesto.',
    heroTagline: 'Clubes y Escuelas de Paddle',
    heroTitle: 'Lanza, gestiona y haz crecer tu club de paddle<br />con flotas SUP de calidad comercial',
    heroSubtitle:
      'Proveedor de equipamiento SUP para clubes de paddle y escuelas de SUP en todo el mundo — tablas comerciales duraderas, precios de club por volumen, personalización de marca y piezas de repuesto rápidas, para que puedas centrarte en hacer crecer tu comunidad.',
    p0Name: 'Paquete de Inicio',
    p0Tag: 'Para clubes nuevos, hasta 30 miembros',
    p1Name: 'Flota Profesional',
    p1Tag: 'Para clubes consolidados, 50-100 miembros',
    p2Name: 'Flota de Competición',
    p2Tag: 'Para clubes de carreras, eventos, competiciones',
    p0f0: '10 tablas SUP (mezcla all-round + touring)',
    p0f1: '10 remos + 10 chalecos salvavidas',
    p0f2: '2 bombas de doble acción + kit de reparación',
    p0f3: 'Branding del club en las tablas (impresión de logo)',
    p1f0: '30 tablas SUP (3 opciones de tamaño)',
    p1f1: '30 remos + 30 chalecos salvavidas',
    p1f2: '5 bombas + 2 kits de reparación + soporte de almacenamiento',
    p1f3: 'Colores personalizados del club + logo en las tablas',
    p2f0: '50+ tablas de carrera / rendimiento',
    p2f0Old: '50 tableros de carrera / rendimiento',
    p2f1: 'Set completo de accesorios (remos, chalecos, bombas)',
    p2f2: 'Kit de apoyo para eventos (boyas de salida, marcadores)',
    tr0Name: 'Kit de Inicio para Instructores',
    tr1Name: 'Set Completo para Escuelas',
  },

  // ---- it ----
  it: {
    metaTitle: 'Attrezzatura SUP e soluzioni di flotta per club di paddle | {SITE}',
    metaDesc:
      'Programmi completi di flotte SUP per club e scuole di paddle. Pacchetti di avvio, flotte professionali, tavole da competizione, kit per centri di formazione e supporto pezzi di ricambio.',
    heroTagline: 'Club e Scuole di Paddle',
    heroTitle: 'Lancia, gestisci e fai crescere il tuo club di paddle<br />con flotte SUP di qualità commerciale',
    heroSubtitle:
      'Fornitore di attrezzatura SUP per club di paddle e scuole di SUP in tutto il mondo — tavole commerciali durevoli, prezzi club per grandi volumi, personalizzazione del marchio e pezzi di ricambio rapidi, così puoi concentrarti sulla crescita della tua community.',
    p0Name: 'Pacchetto di Avvio',
    p0Tag: 'Per nuovi club, fino a 30 membri',
    p1Name: 'Flotta Professionale',
    p1Tag: 'Per club affermati, 50-100 membri',
    p2Name: 'Flotta per Competizioni',
    p2Tag: 'Per club di regate, eventi, competizioni',
    p0f0: '10 tavole SUP (mix all-round + touring)',
    p0f1: '10 pagaie + 10 giubbotti di salvataggio',
    p0f2: '2 pompe a doppia azione + kit di riparazione',
    p0f3: 'Branding del club sulle tavole (stampa logo)',
    p1f0: '30 tavole SUP (3 opzioni di taglia)',
    p1f1: '30 pagaie + 30 giubbotti di salvataggio',
    p1f2: '5 pompe + 2 kit di riparazione + rastrelliera',
    p1f3: 'Colori personalizzati del club + logo sulle tavole',
    p2f0: '50+ tavole da corsa / performance',
    p2f0Old: '50 schede da corsa / prestazioni',
    p2f1: 'Set completo di accessori (pagaie, giubbotti, pompe)',
    p2f2: 'Kit di supporto per eventi (boe di partenza, segnalatori)',
    tr0Name: 'Kit Iniziale per Istruttori',
    tr1Name: 'Set Completo per Scuole',
  },

  // ---- pt ----
  pt: {
    metaTitle: 'Equipamentos SUP e soluções de frota para clubes de paddle | {SITE}',
    metaDesc:
      'Programas completos de frotas SUP para clubes e escolas de paddle. Pacotes de início, frotas profissionais, pranchas de competição, kits para centros de treinamento e suporte de peças de reposição.',
    heroTagline: 'Clubes e Escolas de Paddle',
    heroTitle: 'Lance, gerencie e expanda seu clube de paddle<br />com frotas SUP de qualidade comercial',
    heroSubtitle:
      'Fornecedor de equipamentos SUP para clubes de paddle e escolas de SUP no mundo todo — pranchas comerciais duráveis, preços de clube por volume, personalização de marca e peças de reposição rápidas, para que você possa se concentrar em expandir sua comunidade.',
    p0Name: 'Pacote de Início',
    p0Tag: 'Para clubes novos, até 30 membros',
    p1Name: 'Frota Profissional',
    p1Tag: 'Para clubes estabelecidos, 50-100 membros',
    p2Name: 'Frota de Competição',
    p2Tag: 'Para clubes de corrida, eventos, competições',
    p0f0: '10 pranchas SUP (mistura all-round + touring)',
    p0f1: '10 remos + 10 coletes salva-vidas',
    p0f2: '2 bombas de ação dupla + kit de reparo',
    p0f3: 'Branding do clube nas pranchas (impressão de logo)',
    p1f0: '30 pranchas SUP (3 opções de tamanho)',
    p1f1: '30 remos + 30 coletes salva-vidas',
    p1f2: '5 bombas + 2 kits de reparo + suporte de armazenamento',
    p1f3: 'Cores personalizadas do clube + logo nas pranchas',
    p2f0: '50+ pranchas de corrida / alto desempenho',
    p2f0Old: '50 pranchas de corrida / alto desempenho',
    p2f1: 'Conjunto completo de acessórios (remos, coletes, bombas)',
    p2f2: 'Kit de apoio para eventos (boias de largada, marcadores)',
    tr0Name: 'Kit Inicial para Instrutores',
    tr1Name: 'Conjunto Completo para Escolas',
  },

  // ---- nl ----
  nl: {
    metaTitle: 'SUP-uitrusting en vlootoplossingen voor paddleclubs | {SITE}',
    metaDesc:
      "Complete SUP-vlootprogramma's voor paddleclubs en scholen. Startpakketten, professionele vloot, wedstrijdborden, kits voor trainingscentra en ondersteuning met vervangingsonderdelen.",
    heroTagline: 'Paddleclubs en Scholen',
    heroTitle: 'Start, run en groei je paddleclub<br />met SUP-vloten van commerciële kwaliteit',
    heroSubtitle:
      'SUP-uitruster voor paddleclubs en SUP-scholen wereldwijd — duurzame commerciële borden, volumeprijzen voor clubs, merkpersonalisatie en snelle vervangingsonderdelen, zodat je je kunt richten op de groei van je community.',
    p0Name: 'Startpakket',
    p0Tag: 'Voor nieuwe clubs, tot 30 leden',
    p1Name: 'Professionele Vloot',
    p1Tag: 'Voor gevestigde clubs, 50-100 leden',
    p2Name: 'Wedstrijdvloot',
    p2Tag: 'Voor raceclubs, evenementen, competities',
    p0f0: '10 SUP-borden (mix all-round + touring)',
    p0f1: '10 peddels + 10 reddingsvesten',
    p0f2: '2 dubbelwerkende pompen + reparatiekit',
    p0f3: 'Clubbranding op de borden (logodruk)',
    p1f0: '30 SUP-borden (3 maatopties)',
    p1f1: '30 peddels + 30 reddingsvesten',
    p1f2: '5 pompen + 2 reparatiekits + opslagrek',
    p1f3: 'Aangepaste clubkleuren + logo op de borden',
    p2f0: '50+ race- / prestatieborden',
    p2f0Old: '50 race- / prestatieborden',
    p2f1: 'Complete accessoire-set (peddels, vesten, pompen)',
    p2f2: 'Ondersteuningskit voor evenementen (startboeien, markeringen)',
    tr0Name: 'Starterset voor instructeurs',
    tr1Name: 'Complete set voor scholen',
  },

  // ---- da ----
  da: {
    metaTitle: 'SUP-udstyr og flådeløsninger til paddleklubber | {SITE}',
    metaDesc:
      'Komplette SUP-flådeprogrammer til paddleklubber og skoler. Startpakker, professionelle flåder, konkurrencebræt, kits til træningscentre og reservedels-support.',
    heroTagline: 'Paddleklubber og Skoler',
    heroTitle: 'Start, driv og udvikl din paddleklub<br />med SUP-flåder i kommerciel kvalitet',
    heroSubtitle:
      'SUP-udstyrsleverandør til paddleklubber og SUP-skoler i hele verden — holdbare kommercielle bræt, klubpriser ved storkøb, skræddersyet branding og hurtige reservedele, så du kan fokusere på at få din community til at vokse.',
    p0Name: 'Startpakke',
    p0Tag: 'Til nye klubber, op til 30 medlemmer',
    p1Name: 'Professionel Flåde',
    p1Tag: 'Til etablerede klubber, 50-100 medlemmer',
    p2Name: 'Konkurrenceflåde',
    p2Tag: 'Til racerklubber, events, konkurrencer',
    p0f0: '10 SUP-bræt (mix af all-round + touring)',
    p0f1: '10 pagajer + 10 redningsveste',
    p0f2: '2 dobbeltvirkende pumper + reparationskit',
    p0f3: 'Klubbranding på brætterne (logotryk)',
    p1f0: '30 SUP-bræt (3 størrelsesvalg)',
    p1f1: '30 pagajer + 30 redningsveste',
    p1f2: '5 pumper + 2 reparationskits + boardstativ',
    p1f3: 'Klubbens egne farver + logo på brætterne',
    p2f1: 'Komplet tilbehørssæt (pagajer, veste, pumper)',
    p2f2: 'Event-supportkit (startbøjer, markeringer)',
    tr0Name: 'Instruktør-startpakke',
    tr1Name: 'Komplet sæt til skoler',
  },

  // ---- sv ----
  sv: {
    metaTitle: 'SUP-utrustning och flottiljelösningar för paddelklubbar | {SITE}',
    metaDesc:
      'Kompletta SUP-flottprogram för paddelklubbar och skolor. Startpaket, professionella flottor, tävlingstavlor, kit för träningscenter och reservdelsstöd.',
    heroTagline: 'Paddelklubbar och Skolor',
    heroTitle: 'Starta, driv och utveckla din paddelklubb<br />med SUP-flottor i kommersiell kvalitet',
    heroSubtitle:
      'SUP-utrustningsleverantör för paddelklubbar och SUP-skolor världen över – hållbara kommersiella tavlor, klubbpriser vid volymköp, skräddarsydd varumärkesprofil och snabba reservdelar, så att du kan fokusera på att få din community att växa.',
    p0Name: 'Startpaket',
    p0Tag: 'För nya klubbar, upp till 30 medlemmar',
    p1Name: 'Professionell Flotta',
    p1Tag: 'För etablerade klubbar, 50-100 medlemmar',
    p2Name: 'Tävlingsflotta',
    p2Tag: 'För racingklubbar, event, tävlingar',
    p0f0: '10 SUP-tavlor (mix av all-round + touring)',
    p0f1: '10 paddlar + 10 flytvästar',
    p0f2: '2 dubbelverkande pumpar + reparationskit',
    p0f3: 'Klubbbranding på tavlor (logotryck)',
    p1f0: '30 SUP-tavlor (3 storleksval)',
    p1f1: '30 paddlar + 30 flytvästar',
    p1f2: '5 pumpar + 2 reparationskit + förvaringsställ',
    p1f3: 'Klubbens egna färger + logo på tavlor',
    p2f1: 'Komplett tillbehörssats (paddlar, västar, pumpar)',
    p2f2: 'Eventsupportkit (startbojar, markeringar)',
    tr0Name: 'Startpaket för instruktörer',
    tr1Name: 'Komplett set för skolor',
  },

  // ---- no ----
  no: {
    metaTitle: 'SUP-utstyr og flåteløsninger for padleklubber | {SITE}',
    metaDesc:
      'Komplette SUP-flåteprogrammer for padleklubber og skoler. Startpakker, profesjonelle flåter, konkurransebrett, sett til treningssentre og reservedelsstøtte.',
    heroTagline: 'Padleklubber og Skoler',
    heroTitle: 'Start, driv og utvikle padleklubben din<br />med SUP-flåter i kommersiell kvalitet',
    heroSubtitle:
      'SUP-utstyrsleverandør for padleklubber og SUP-skoler over hele verden — holdbare kommersielle brett, klubbpriser ved volumkjøp, skreddersydd merkevareprofil og raske reservedeler, slik at du kan fokusere på å få fellesskapet ditt til å vokse.',
    p0Name: 'Startpakke',
    p0Tag: 'For nye klubber, opptil 30 medlemmer',
    p1Name: 'Profesjonell Flåte',
    p1Tag: 'For etablerte klubber, 50-100 medlemmer',
    p2Name: 'Konkurranseflåte',
    p2Tag: 'For racerklubber, events, konkurranser',
    p0f0: '10 SUP-brett (miks av all-round + touring)',
    p0f1: '10 padleårer + 10 redningsvester',
    p0f2: '2 dobbeltvirkende pumper + reperasjonssett',
    p0f3: 'Klubbbranding på brettene (logotrykk)',
    p1f0: '30 SUP-brett (3 størrelsesvalg)',
    p1f1: '30 padleårer + 30 redningsvester',
    p1f2: '5 pumper + 2 reperasjonssett + oppbevaringsstativ',
    p1f3: 'Klubbens egne farger + logo på brettene',
    p2f1: 'Komplett tilbehørssett (padleårer, vester, pumper)',
    p2f2: 'Eventstøttesett (startbøyer, markeringer)',
    tr0Name: 'Startpakke for instruktører',
    tr1Name: 'Komplett sett for skoler',
  },

  // ---- fi ----
  fi: {
    metaTitle: 'SUP-varusteet ja kalustoratkaisut melontakerhoille | {SITE}',
    metaDesc:
      'Kattavat SUP-kalusto-ohjelmat melonta- ja paddelkerhoille ja -kouluille. Aloituspackaget, ammattilaiskalusto, kilpalaudat, koulutuskeskussetit ja varaosatuki.',
    heroTagline: 'Melonta- ja Paddelkerhot ja -koulut',
    heroTitle: 'Käynnistä, aja ja kasvata melontakerhoasi<br />kaupallisen laatuisilla SUP-kalustoilla',
    heroSubtitle:
      'SUP-varusteiden toimittaja melonta- ja paddelkerhoille ja SUP-kouluille ympäri maailmaa — kestävät kaupalliset laudat, kerhojen volyymihinnat, räätälöity brändäys ja nopeat varaosat, jotta voit keskittyä yhteisösi kasvattamiseen.',
    p0Name: 'Aloituspaketti',
    p0Tag: 'Uusille kerhoille, enintään 30 jäsentä',
    p1Name: 'Ammattilaiskalusto',
    p1Tag: 'Vakiintuneille kerhoille, 50-100 jäsentä',
    p2Name: 'Kilpailukalusto',
    p2Tag: 'Kilpakerhoille, tapahtumille, kisoille',
    p0f0: '10 SUP-lautaa (all-round- ja touring-mix)',
    p0f1: '10 melaa + 10 pelastusliivit',
    p0f2: '2 kaksitoimista pumppua + korjaussetti',
    p0f3: 'Kerhon brändäys laudoilla (logotulostus)',
    p1f0: '30 SUP-lautaa (3 kokovaihtoehtoa)',
    p1f1: '30 melaa + 30 pelastusliivit',
    p1f2: '5 pumppua + 2 korjaussettiä + säilytysteline',
    p1f3: 'Kerhon omat värit + logo laudoilla',
    p2f1: 'Täydellinen lisävarustesarja (melat, liivit, pumput)',
    p2f2: 'Tapahtumatukisetti (lähtöpoijut, merkkilaitteet)',
    tr0Name: 'Ohjaajan aloitussarja',
    tr1Name: 'Täydellinen setti kouluille',
  },

  // ---- cs ----
  cs: {
    metaTitle: 'SUP vybavení a řešení pro flotily paddle klubů | {SITE}',
    metaDesc:
      'Kompletní programy SUP flotil pro paddle kluby a školy. Startovací balíčky, profesionální flotily, závodní desky, sady pro tréninková centra a podpora náhradních dílů.',
    heroTagline: 'Paddle kluby a školy',
    heroTitle: 'Rozjeďte, provozujte a rozvíjejte svůj paddle klub<br />se SUP flotilami komerční kvality',
    heroSubtitle:
      'Dodavatel SUP vybavení pro paddle kluby a SUP školy po celém světě – odolné komerční desky, klubové velkoobchodní ceny, přizpůsobená brandová identita a rychlé náhradní díly, abyste se mohli soustředit na růst své komunity.',
    p0Name: 'Startovací balíček',
    p0Tag: 'Pro nové kluby, až 30 členů',
    p1Name: 'Profesionální flotila',
    p1Tag: 'Pro zavedené kluby, 50-100 členů',
    p2Name: 'Závodní flotila',
    p2Tag: 'Pro závodní kluby, akce, závody',
    p0f0: '10 SUP desek (mix all-round + touring)',
    p0f1: '10 pádel + 10 záchranných vest',
    p0f2: '2 pumpy s dvojím účinkem + opravná sada',
    p0f3: 'Branding klubu na deskách (tisk loga)',
    p1f0: '30 SUP desek (3 volby velikosti)',
    p1f1: '30 pádel + 30 záchranných vest',
    p1f2: '5 pump + 2 opravné sady + stojan na desky',
    p1f3: 'Vlastní barvy klubu + logo na deskách',
    p2f1: 'Kompletní sada příslušenství (pádla, vesty, pumpy)',
    p2f2: 'Sada podpory pro akce (startovní bóje, značení)',
    tr0Name: 'Startovací sada pro instruktory',
    tr1Name: 'Kompletní sada pro školy',
  },

  // ---- pl ----
  pl: {
    metaTitle: 'Sprzęt SUP i rozwiązania flotowe dla klubów paddle | {SITE}',
    metaDesc:
      'Kompletne programy flot SUP dla klubów i szkół paddle. Pakiety startowe, profesjonalne floty, deski competition, zestawy dla centrów szkoleniowych i wsparcie części zamiennych.',
    heroTagline: 'Kluby i Szkoły Paddle',
    heroTitle: 'Uruchom, prowadź i rozwijaj swój klub paddle<br />z flotami SUP klasy komercyjnej',
    heroSubtitle:
      'Dostawca sprzętu SUP dla klubów paddle i szkół SUP na całym świecie — trwałe deski komercyjne, klubowe ceny hurtowe, spersonalizowany branding i szybkie części zamienne, abyś mógł skupić się na rozwoju swojej społeczności.',
    p0Name: 'Pakiet Startowy',
    p0Tag: 'Dla nowych klubów, do 30 członków',
    p1Name: 'Profesjonalna Flota',
    p1Tag: 'Dla ugruntowanych klubów, 50-100 członków',
    p2Name: 'Flota Competition',
    p2Tag: 'Dla klubów wyścigowych, wydarzeń, zawodów',
    p0f0: '10 desek SUP (mix all-round + touring)',
    p0f1: '10 wioseł + 10 kamizelek ratunkowych',
    p0f2: '2 pompy podwójnego działania + zestaw naprawczy',
    p0f3: 'Branding klubu na deskach (druk logo)',
    p1f0: '30 desek SUP (3 opcje rozmiaru)',
    p1f1: '30 wioseł + 30 kamizelek ratunkowych',
    p1f2: '5 pomp + 2 zestawy naprawcze + stojak magazynowy',
    p1f3: 'Niestandardowe kolory klubu + logo na deskach',
    p2f0: '50+ desek wyścigowych / sportowych',
    p2f0Old: '50 desek wyścigowych / sportowych',
    p2f1: 'Kompletny zestaw akcesoriów (wiosła, kamizelki, pompy)',
    p2f2: 'Zestaw wsparcia eventowego (boje startowe, oznaczenia)',
    tr0Name: 'Zestaw startowy dla instruktorów',
    tr1Name: 'Kompletny zestaw dla szkół',
  },

  // ---- ru ----
  ru: {
    metaTitle: 'Снаряжение SUP и флотские решения для паддл-клубов | {SITE}',
    metaDesc:
      'Полные программы SUP-флотов для паддл-клубов и школ. Стартовые пакеты, профессиональные флоты, гоночные доски, комплекты для тренировочных центров и поддержка запчастей.',
    heroTagline: 'Паддл-клубы и школы',
    heroTitle: 'Запустите, управляйте и развивайте свой паддл-клуб<br />с SUP-флотами коммерческого класса',
    heroSubtitle:
      'Поставщик SUP-снаряжения для паддл-клубов и SUP-школ по всему миру — прочные коммерческие доски, клубные оптовые цены, индивидуальный брендинг и быстрые запчасти, чтобы вы могли сосредоточиться на развитии своего сообщества.',
    p0Name: 'Стартовый пакет',
    p0Tag: 'Для новых клубов, до 30 участников',
    p1Name: 'Профессиональный флот',
    p1Tag: 'Для сложившихся клубов, 50-100 участников',
    p2Name: 'Гоночный флот',
    p2Tag: 'Для гоночных клубов, событий, соревнований',
    p0f0: '10 SUP-досок (микс all-round + touring)',
    p0f1: '10 весел + 10 спасательных жилетов',
    p0f2: '2 помпы двойного действия + ремкомплект',
    p0f3: 'Брендинг клуба на досках (печать логотипа)',
    p1f0: '30 SUP-досок (3 варианта размера)',
    p1f1: '30 весел + 30 спасательных жилетов',
    p1f2: '5 помп + 2 ремкомплекта + стойка для хранения',
    p1f3: 'Индивидуальные цвета клуба + логотип на досках',
    p2f0: '50+ гоночных / производительных плат',
    p2f0Old: '50 гоночных / производительных плат',
    p2f1: 'Полный комплект аксессуаров (весла, жилеты, помпы)',
    p2f2: 'Комплект поддержки мероприятий (стартовые буи, разметка)',
    tr0Name: 'Стартовый комплект для инструкторов',
    tr1Name: 'Полный комплект для школ',
  },

  // ---- tr ----
  tr: {
    metaTitle: 'SUP ekipmanları ve kürek kulüpleri için filo çözümleri | {SITE}',
    metaDesc:
      'Kürek kulüpleri ve okulları için eksiksiz SUP filo programları. Başlangıç paketleri, profesyonel filolar, yarış tahtaları, eğitim merkezi setleri ve yedek parça desteği.',
    heroTagline: 'Kürek Kulüpleri ve Okulları',
    heroTitle: 'Kürek kulübünüzü başlatın, yönetin ve büyütün<br />ticari kalitede SUP filolarıyla',
    heroSubtitle:
      'Dünya genelinde kürek kulüpleri ve SUP okulları için SUP ekipmanları tedarikçisi — dayanıklı ticari tahtalar, kulüpler için toplu fiyatlar, marka özelleştirmesi ve hızlı yedek parçalar, böylece topluluğunuzun büyümesine odaklanabilirsiniz.',
    p0Name: 'Başlangıç Paketi',
    p0Tag: 'Yeni kulüpler için, 30 üyeye kadar',
    p1Name: 'Profesyonel Filo',
    p1Tag: 'Kurulu kulüpler için, 50-100 üye',
    p2Name: 'Yarış Filosu',
    p2Tag: 'Yarış kulüpleri, etkinlikler, müsabakalar için',
    p0f0: '10 SUP tahtası (all-round + touring karışımı)',
    p0f1: '10 kürek + 10 can yeleği',
    p0f2: '2 çift etkili pompa + tamir kiti',
    p0f3: 'Tahtalarda kulüp markası (logo baskısı)',
    p1f0: '30 SUP tahtası (3 boyut seçeneği)',
    p1f1: '30 kürek + 30 can yeleği',
    p1f2: '5 pompa + 2 tamir kiti + saklama rafı',
    p1f3: 'Özel kulüp renkleri + tahtalarda logo',
    p2f1: 'Eksiksiz aksesuar seti (kürekler, yelekler, pompalar)',
    p2f2: 'Etkinlik destek kiti (start şamandıraları, işaretler)',
    tr0Name: 'Eğitmen Başlangıç Seti',
    tr1Name: 'Okullar İçin Eksiksiz Set',
  },

  // ---- ar ----
  ar: {
    metaTitle: 'معدات SUP وحلول الأساطيل لأندية التجديف | {SITE}',
    metaDesc:
      'برامج أساطيل SUP كاملة لأندية ومدارس التجديف. حزم البدء، الأساطيل الاحترافية، ألواح المنافسات، مجموعات لمراكز التدريب ودعم قطع الغيار.',
    heroTagline: 'أندية ومدارس التجديف',
    heroTitle: 'أطلق نادي التجديف الخاص بك وأدره ونمِّه<br />بأساطيل SUP بجودة تجارية',
    heroSubtitle:
      'مورّد معدات SUP لأندية التجديف ومدارس SUP حول العالم — ألواح تجارية متينة، أسعار جماعية للأندية، هوية علامة مخصصة وقطع غيار سريعة، لتتفرغ لتنمية مجتمعك.',
    p0Name: 'حزمة البدء',
    p0Tag: 'للأندية الجديدة، حتى 30 عضوًا',
    p1Name: 'الأسطول الاحترافي',
    p1Tag: 'للأندية الراسخة، 50-100 عضو',
    p2Name: 'أسطول المنافسات',
    p2Tag: 'لأندية السباقات، الفعاليات، المنافسات',
    p0f0: '10 ألواح SUP (مزيج all-round + touring)',
    p0f1: '10 مجاديف + 10 سترات نجاة',
    p0f2: '2 مضخة مزدوجة الحركة + طقم إصلاح',
    p0f3: 'هوية النادي على الألواح (طباعة الشعار)',
    p1f0: '30 لوح SUP (3 خيارات للحجم)',
    p1f1: '30 مجدافًا + 30 سترة نجاة',
    p1f2: '5 مضخات + 2 طقم إصلاح + حامل تخزين',
    p1f3: 'ألوان النادي المخصصة + الشعار على الألواح',
    p2f1: 'طقم ملحقات كامل (مجاديف، سترات، مضخات)',
    p2f2: 'طقم دعم الفعاليات (عوامات البداية، علامات التحديد)',
    tr0Name: 'حزمة بدء المدربين',
    tr1Name: 'الطقم الكامل للمدارس',
  },

  // ---- el ----
  el: {
    metaTitle: 'Εξοπλισμός SUP και λύσεις στόλου για συλλόγους paddle | {SITE}',
    metaDesc:
      'Πλήρη προγράμματα στόλων SUP για συλλόγους και σχολεία paddle. Πακέτα εκκίνησης, επαγγελματικοί στόλοι, πίνακες αγώνων, σετ για κέντρα εκπαίδευσης και υποστήριξη ανταλλακτικών.',
    heroTagline: 'Σύλλογοι paddle και Σχολεία',
    heroTitle: 'Ξεκινήστε, λειτουργήστε και αναπτύξτε τον σύλλογο paddle σας<br />με στόλους SUP εμπορικής ποιότητας',
    heroSubtitle:
      'Προμηθευτής εξοπλισμού SUP για συλλόγους paddle και σχολεία SUP παγκοσμίως — ανθεκτικοί εμπορικοί πίνακες, ομαδικές τιμές για συλλόγους, προσαρμοσμένη ταυτότητα μάρκας και γρήγορα ανταλλακτικά, για να επικεντρωθείτε στην ανάπτυξη της κοινότητάς σας.',
    p0Name: 'Πακέτο Εκκίνησης',
    p0Tag: 'Για νέους συλλόγους, έως 30 μέλη',
    p1Name: 'Επαγγελματικός Στόλος',
    p1Tag: 'Για καθιερωμένους συλλόγους, 50-100 μέλη',
    p2Name: 'Στόλος Αγώνων',
    p2Tag: 'Για συλλόγους αγώνων, εκδηλώσεις, διαγωνισμούς',
    p0f0: '10 πίνακες SUP (μείγμα all-round + touring)',
    p0f1: '10 κουπιά + 10 γιλέκα διάσωσης',
    p0f2: '2 αντλίες διπλής δράσης + κιτ επισκευής',
    p0f3: 'Branding συλλόγου στους πίνακες (εκτύπωση λογκό)',
    p1f0: '30 πίνακες SUP (3 επιλογές μεγέθους)',
    p1f1: '30 κουπιά + 30 γιλέκα διάσωσης',
    p1f2: '5 αντλίες + 2 κιτ επισκευής + βάση αποθήκευσης',
    p1f3: 'Προσαρμοσμένα χρώματα συλλόγου + λογκό στους πίνακες',
    p2f1: 'Πλήρες σετ αξεσουάρ (κουπιά, γιλέκα, αντλίες)',
    p2f2: 'Κιτ υποστήριξης εκδηλώσεων (σημαδούρες εκκίνησης, σημάνσεις)',
    tr0Name: 'Σετ Εκκίνησης για Εκπαιδευτές',
    tr1Name: 'Πλήρες Σετ για Σχολεία',
  },

  // ---- ro ----
  ro: {
    metaTitle: 'Echipamente SUP și soluții de flotă pentru paddle cluburi | {SITE}',
    metaDesc:
      'Programe complete de flote SUP pentru paddle cluburi și școli. Pachete de start, flote profesionale, table de competiție, seturi pentru centre de instruire și suport pentru piese de schimb.',
    heroTagline: 'Paddle Cluburi și Școli',
    heroTitle: 'Pornește, administrează și dezvoltă paddle clubul tău<br />cu flote SUP de calitate comercială',
    heroSubtitle:
      'Furnizor de echipamente SUP pentru paddle cluburi și școli de SUP din întreaga lume — table comerciale durabile, prețuri de grup pentru cluburi, personalizare a mărcii și piese de schimb rapide, ca să te poți concentra pe creșterea comunității tale.',
    p0Name: 'Pachet de Start',
    p0Tag: 'Pentru cluburi noi, până la 30 de membri',
    p1Name: 'Flotă Profesională',
    p1Tag: 'Pentru cluburi consolidate, 50-100 de membri',
    p2Name: 'Flotă de Competiție',
    p2Tag: 'Pentru cluburi de curse, evenimente, competiții',
    p0f0: '10 table SUP (mix all-round + touring)',
    p0f1: '10 vâsle + 10 veste de salvare',
    p0f2: '2 pompe cu acțiune dublă + kit de reparații',
    p0f3: 'Brandingul clubului pe table (imprimare logo)',
    p1f0: '30 de table SUP (3 opțiuni de dimensiune)',
    p1f1: '30 de vâsle + 30 de veste de salvare',
    p1f2: '5 pompe + 2 kituri de reparații + suport de stocare',
    p1f3: 'Culori personalizate ale clubului + logo pe table',
    p2f1: 'Set complet de accesorii (vâsle, veste, pompe)',
    p2f2: 'Kit de suport pentru evenimente (balize de start, marcaje)',
    tr0Name: 'Set de start pentru instructori',
    tr1Name: 'Set complet pentru școli',
  },

  // ---- ja ----
  ja: {
    metaTitle: 'パドルクラブ向けSUP器材とフリートソリューション | {SITE}',
    metaDesc:
      'パドルクラブとスクール向けのSUPフリートプログラム。スタートアップパッケージ、プロフェッショナルフリート、競技用ボード、トレーニングセンター向けキット、交換パーツサポート。',
    heroTagline: 'パドルクラブとスクール',
    heroTitle: '商用グレードのSUPフリートで<br />パドルクラブを立ち上げ、運営し、成長させる',
    heroSubtitle:
      '世界中のパドルクラブとSUPスクールに器材を供給するafarer ― 耐久性の高い商用ボード、クラブ向けの大量注文価格、オリジナルブランド刻印、迅速な交換パーツ供給で、コミュニティの成長に集中できます。',
    p0Name: 'スタートアップパッケージ',
    p0Tag: '新規クラブ向け、30名まで',
    p1Name: 'プロフェッショナルフリート',
    p1Tag: '定着したクラブ向け、50〜100名',
    p2Name: 'コンペティションフリート',
    p2Tag: 'レースクラブ、イベント、競技会向け',
    p0f0: 'SUPボード10台(オールラウンド+ツーリングのミックス)',
    p0f1: 'パドル10本+ライフジャケット10枚',
    p0f2: '2WAYポンプ2台+リペアキット1式',
    p0f3: 'ボードへのクラブブランド刻印(ロゴプリント)',
    p1f0: 'SUPボード30台(3サイズ展開)',
    p1f1: 'パドル30本+ライフジャケット30枚',
    p1f2: 'ポンプ5台+リペアキット2式+収納ラック',
    p1f3: 'クラブのオリジナルカラー+ボードへのロゴ',
    p2f1: 'フルアクセサリーセット(パドル、ライフジャケット、ポンプ)',
    p2f2: 'イベントサポートキット(スタートブイ、マーキング)',
    tr0Name: 'インストラクター向けスターターキット',
    tr1Name: 'スクール向けフルセット',
  },

  // ---- ko ----
  ko: {
    metaTitle: '패들 클럽용 SUP 장비 및 플릿 솔루션 | {SITE}',
    metaDesc:
      '패들 클럽과 학교를 위한 완전한 SUP 플릿 프로그램. 스타트업 패키지, 전문 플릿, 경기용 보드, 트레이닝 센터 키트, 교체 부품 지원.',
    heroTagline: '패들 클럽과 학교',
    heroTitle: '상업용 급 SUP 플릿으로<br />패들 클럽을 시작하고 운영하고 성장시키세요',
    heroSubtitle:
      '전 세계 패들 클럽과 SUP 학교를 위한 SUP 장비 공급업체 afarer — 내구성 높은 상업용 보드, 클럽 대량 구매 가격, 맞춤 브랜딩, 신속한 교체 부품으로 커뮤니티 성장에 집중할 수 있습니다.',
    p0Name: '스타트업 패키지',
    p0Tag: '신설 클럽용, 최대 30명',
    p1Name: '프로페셔널 플릿',
    p1Tag: '안정적으로 운영 중인 클럽용, 50~100명',
    p2Name: '컴피티션 플릿',
    p2Tag: '레이스 클럽, 대회, 경기용',
    p0f0: 'SUP 보드 10장(올라운드+투어링 혼합)',
    p0f1: '패들 10개+구명조끼 10벌',
    p0f2: '2WAY 펌프 2대+수리 키트 1세트',
    p0f3: '보드에 클럽 브랜딩(로고 인쇄)',
    p1f0: 'SUP 보드 30장(3가지 사이즈)',
    p1f1: '패들 30개+구명조끼 30벌',
    p1f2: '펌프 5대+수리 키트 2세트+보관 랙',
    p1f3: '클럽 맞춤 색상+보드에 로고',
    p2f1: '풀 액세서리 세트(패들, 구명조끼, 펌프)',
    p2f2: '이벤트 지원 키트(출발 부이, 마킹)',
    tr0Name: '강사용 스타터 키트',
    tr1Name: '학교용 풀 세트',
  },

  // ---- th ----
  th: {
    metaTitle: 'อุปกรณ์ SUP และโซลูชันกองเรือสำหรับชมรมแพดเดิล | {SITE}',
    metaDesc:
      'โปรแกรมกองเรือ SUP แบบครบวงจรสำหรับชมรมและโรงเรียนแพดเดิล แพ็กเกจเริ่มต้น กองเรือระดับมืออาชีพ บอร์ดแข่งขัน ชุดอุปกรณ์สำหรับศูนย์ฝึกอบรม และการสนับสนุนอะไหล่',
    heroTagline: 'ชมรมและโรงเรียนแพดเดิล',
    heroTitle: 'เปิด บริหาร และขยายชมรมแพดเดิลของคุณ<br />ด้วยกองเรือ SUP ระดับเชิงพาณิชย์',
    heroSubtitle:
      'ผู้ผลิตอุปกรณ์ SUP สำหรับชมรมแพดเดิลและโรงเรียน SUP ทั่วโลก — บอร์ดเชิงพาณิชย์ที่ทนทาน ราคาส่งสำหรับชมรม การปั๊มแบรนด์ของคุณเอง และอะไหล่ที่รวดเร็ว เพื่อให้คุณโฟกัสการเติบโตของชุมชนได้เต็มที่',
    p0Name: 'แพ็กเกจเริ่มต้น',
    p0Tag: 'สำหรับชมรมใหม่ สูงสุด 30 สมาชิก',
    p1Name: 'กองเรือมืออาชีพ',
    p1Tag: 'สำหรับชมรมที่มั่นคง 50-100 สมาชิก',
    p2Name: 'กองเรือแข่งขัน',
    p2Tag: 'สำหรับชมรมแข่ง งานอีเวนต์ การแข่งขัน',
    p0f0: 'บอร์ด SUP 10 บอร์ด (ผสม all-round + touring)',
    p0f1: 'ไม้พาย 10 คัน + เสื้อชูชีพ 10 ตัว',
    p0f2: 'ปั๊มลมดับเบิลแอ็กชัน 2 เครื่อง + ชุดซ่อมแซม',
    p0f3: 'แบรนด์ชมรมบนบอร์ด (พิมพ์โลโก้)',
    p1f0: 'บอร์ด SUP 30 บอร์ด (3 ขนาดให้เลือก)',
    p1f1: 'ไม้พาย 30 คัน + เสื้อชูชีพ 30 ตัว',
    p1f2: 'ปั๊ม 5 เครื่อง + ชุดซ่อมแซม 2 ชุด + ชั้นวางเก็บบอร์ด',
    p1f3: 'สีประจำชมรมแบบกำหนดเอง + โลโก้บนบอร์ด',
    p2f1: 'ชุดอุปกรณ์เสริมครบชุด (ไม้พาย เสื้อชูชีพ ปั๊ม)',
    p2f2: 'ชุดสนับสนุนงานอีเวนต์ (ทุ่นเริ่มต้น ป้ายทำเครื่องหมาย)',
    tr0Name: 'ชุดเริ่มต้นสำหรับผู้สอน',
    tr1Name: 'ชุดครบวงจรสำหรับโรงเรียน',
  },

  // fr: hero.subtitle only — the single untranslated line in the otherwise-translated fr file.
  frSubtitle:
    'Fournisseur d’équipements SUP pour clubs de paddle et écoles de SUP dans le monde entier — planches durables de qualité commerciale, tarifs de groupe pour les clubs, personnalisation de marque et pièces de rechange rapides, pour que vous puissiez vous concentrer sur le développement de votre communauté.',
  // Pre-patch disk value of the fr hero.subtitle (find-anchor for the fr line op).
  frOldSubtitle:
    'afarer équipe les clubs de paddle et écoles SUP du monde entier avec des planches durables, des prix de gros, une marque personnalisée et des pièces de rechange rapides.',

  // Which of pkg0 features 3|4 (0-based) carries the launch-guide string per locale.
  launchGuideFrom: { fi: 3, nl: 3, th: 3 }, // default 4
};
