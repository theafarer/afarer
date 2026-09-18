const fs = require('fs');
const yaml = require('yaml');

const BLOCKS = {
  ar: {
    tagline: 'برنامج الشركاء العالمي',
    title: 'بع afarer في سوقك',
    subtitle: 'برنامج دولة واحدة – موزّع واحد مع حصرية إقليمية، وأسعار موزعين، ودعم تسويقي، وبرنامج نجاح موزعين مخصص.',
    benefits: [
      {
        title: 'الحصرية الإقليمية',
        description: 'موزّع معتمد واحد لكل دولة أو منطقة — لا منافسة داخلية، لا تضارب بين القنوات.',
      },
      {
        title: 'هوامش المصنع المباشرة',
        description: 'قوائم أسعار للموزعين ورخصًا سنوية على الكميات الملتزم بها، شحن FOB تشينغداو.',
      },
      {
        title: 'دعم التسويق والتدريب',
        description: 'مواد العلامات المشتركة، مواد نقاط البيع للتجار، تدريب على المنتجات، وحملات إطلاق.',
      },
      { title: 'فريق حسابات مخصص', description: 'مدير موزعين شخصي مع دعم الإعداد وتوقعات الطلب وإعادة الطلب.' },
    ],
    actions: [
      { variant: 'primary', text: 'كن موزعًا', href: '/distributor-program' },
      { text: 'اطلب قائمة أسعار الموزعين', href: '/contact?subject=Dealer Price List' },
      { text: 'قدّم طلب شراكة دولة', href: '/contact?subject=Country Partnership Application' },
      { text: 'حمّل برنامج الموزعين', href: '/distributor-program' },
    ],
    note: 'الحد الأدنى للطلب الأول 100–300 وحدة للموزعين على مستوى الدولة/المنطقة. الطلبات التجريبية من 10–30 وحدة.',
  },
  cs: {
    tagline: 'Globální partnerský program',
    title: 'Prodávejte afarer na svém trhu',
    subtitle:
      'Program jeden stát – jeden distributor s územní exkluzivitou, dealerskými cenami, marketingovou podporou a vyhrazeným Distributor Success Program.',
    benefits: [
      {
        title: 'Územní exkluzivita',
        description:
          'Jeden autorizovaný distributor pro každou zemi nebo region — žádná vnitřní konkurence, žádný kanálový konflikt.',
      },
      {
        title: 'Marže přímo z továrny',
        description: 'Distributorské ceníky a roční rabaty za závazné objemy, doprava FOB Čching-tao.',
      },
      {
        title: 'Marketingová a školicí podpora',
        description: 'Co-branded materiály, POS materiály pro dealery, produktové školení a launch kampaně.',
      },
      {
        title: 'Vyhrazený tým pro účty',
        description: 'Osobní distributor manager plus podpora onboardingu, prognóz a opakovaných objednávek.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Staňte se distributorem', href: '/distributor-program' },
      { text: 'Vyžádat dealerský ceník', href: '/contact?subject=Dealer Price List' },
      { text: 'Požádat o partnerskou zemi', href: '/contact?subject=Country Partnership Application' },
      { text: 'Stáhnout distribuční program', href: '/distributor-program' },
    ],
    note: 'Minimální první objednávka 100–300 kusů pro zemské/regionální distributory. Zkušební objednávky od 10–30 kusů.',
  },
  da: {
    tagline: 'Globalt partnerprogram',
    title: 'Sælg afarer på dit marked',
    subtitle:
      'Ét program med én distributør pr. land, territorie-eksklusivitet, forhandlerpriser, marketingstøtte og et dedikeret Distributor Success Program.',
    benefits: [
      {
        title: 'Territorie-eksklusivitet',
        description:
          'Én autoriseret distributør pr. land eller region — ingen intern konkurrence, ingen kanalkonflikter.',
      },
      {
        title: 'Direkte fabriksmargener',
        description: 'Distributørprislister og årlige rabatter på aftalte volumener, afsendt FOB Qingdao.',
      },
      {
        title: 'Marketing- og træningssupport',
        description: 'Co-brandede aktiver, POS-materialer til forhandlere, produkttræning og launch-kampagner.',
      },
      {
        title: 'Dedikeret account team',
        description: 'En personlig distributørmanger samt onboarding-, prognose- og genbestillingssupport.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Bliv distributør', href: '/distributor-program' },
      { text: 'Anmod om forhandlerprisliste', href: '/contact?subject=Dealer Price List' },
      { text: 'Ansøg om landepartnerskab', href: '/contact?subject=Country Partnership Application' },
      { text: 'Download distributørprogrammet', href: '/distributor-program' },
    ],
    note: 'Minimum første ordre på 100–300 enheder for lands-/regionale distributører. Prøveordrer fra 10–30 enheder.',
  },
  de: {
    tagline: 'Globales Partnerprogramm',
    title: 'Verkaufen Sie afarer in Ihrem Markt',
    subtitle:
      'Ein Programm mit einem autorisierten Distributor pro Land, Gebietsexklusivität, Händlerpreisen, Marketing-Support und einem dedizierten Distributor Success Program.',
    benefits: [
      {
        title: 'Gebietsexklusivität',
        description:
          'Ein autorisierter Distributor pro Land oder Region — kein interner Wettbewerb, keine Kanal-Konflikte.',
      },
      {
        title: 'Margen direkt ab Werk',
        description:
          'Distributoren-Preislisten und jährliche Rückvergütungen auf vereinbarte Mengen, versendet FOB Qingdao.',
      },
      {
        title: 'Marketing- & Trainings-Support',
        description: 'Co-Branding-Assets, Dealer-POS-Materialien, Produktschulungen und Launch-Kampagnen.',
      },
      {
        title: 'Dediziertes Account-Team',
        description: 'Ein persönlicher Distributor-Manager plus Onboarding-, Forecast- und Nachbestellungs-Support.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Distributor werden', href: '/distributor-program' },
      { text: 'Händlerpreisliste anfordern', href: '/contact?subject=Dealer Price List' },
      { text: 'Landespartnerschaft beantragen', href: '/contact?subject=Country Partnership Application' },
      { text: 'Distributorprogramm herunterladen', href: '/distributor-program' },
    ],
    note: 'Mindestbestellung von 100–300 Einheiten für Länder-/Regionaldistributoren. Probebestellungen ab 10–30 Einheiten.',
  },
  el: {
    tagline: 'Παγκόσμιο Πρόγραμμα Συνεργατών',
    title: 'Πουλήστε το afarer στην αγορά σας',
    subtitle:
      'Ένα πρόγραμμα με έναν διανομέα ανά χώρα, αποκλειστικότητα περιοχής, τιμές αντιπροσώπου, υποστήριξη μάρκετινγκ και ένα εξειδικευμένο Πρόγραμμα Επιτυχίας Διανομέα.',
    benefits: [
      {
        title: 'Αποκλειστικότητα Περιοχής',
        description:
          'Ένας εξουσιοδοτημένος διανομέας ανά χώρα ή περιοχή — χωρίς εσωτερικό ανταγωνισμό, χωρίς συγκρούσεις καναλιών.',
      },
      {
        title: 'Άμεσα Περιθώρια Εργοστασίου',
        description: 'Λίστες τιμών διανομέα και ετήσιες εκπτώσεις για δεσμευμένους όγκους, αποστολή FOB Qingdao.',
      },
      {
        title: 'Υποστήριξη Μάρκετινγκ & Εκπαίδευσης',
        description: 'Co-branded υλικά, POS υλικά αντιπροσώπου, εκπαίδευση προϊόντος και καμπάνιες λανσαρίσματος.',
      },
      {
        title: 'Αφιερωμένη Ομάδα Λογαριασμού',
        description: 'Προσωπικός διαχειριστής διανομέα συν υποστήριξη ενσωμάτωσης, προβλέψεων και επαναπαραγγελιών.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Γίνετε Διανομέας', href: '/distributor-program' },
      { text: 'Ζητήστε Τιμοκατάλογο Αντιπροσώπου', href: '/contact?subject=Dealer Price List' },
      { text: 'Υποβάλετε Αίτηση Συνεργασίας Χώρας', href: '/contact?subject=Country Partnership Application' },
      { text: 'Κατεβάστε το Πρόγραμμα Διανομέων', href: '/distributor-program' },
    ],
    note: 'Ελάχιστη πρώτη παραγγελία 100–300 μονάδων για Εθνικούς/Περιφερειακούς διανομείς. Δοκιμαστικές παραγγελίες από 10–30 μονάδες.',
  },
  es: {
    tagline: 'Programa Global de Socios',
    title: 'Vende afarer en tu mercado',
    subtitle:
      'Un programa de un distribuidor por país con exclusividad territorial, precios de distribuidor, soporte de marketing y un Distributor Success Program dedicado.',
    benefits: [
      {
        title: 'Exclusividad Territorial',
        description: 'Un distribuidor autorizado por país o región — sin competencia interna ni conflicto de canal.',
      },
      {
        title: 'Márgenes Directos de Fábrica',
        description:
          'Listas de precios de distribuidor y rebates anuales por volumen comprometido, enviados FOB Qingdao.',
      },
      {
        title: 'Soporte de Marketing y Capacitación',
        description:
          'Materiales de marca compartida, material POS para dealers, capacitación de producto y campañas de lanzamiento.',
      },
      {
        title: 'Equipo de Cuenta Dedicado',
        description: 'Un gestor personal de distribuidores más soporte de incorporación, previsión y reposición.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Conviértete en Distribuidor', href: '/distributor-program' },
      { text: 'Solicitar Lista de Precios de Distribuidor', href: '/contact?subject=Dealer Price List' },
      { text: 'Solicitar Colaboración de País', href: '/contact?subject=Country Partnership Application' },
      { text: 'Descargar el Programa de Distribuidores', href: '/distributor-program' },
    ],
    note: 'Pedido mínimo inicial de 100–300 unidades para Distribuidores de País/Región. Pedidos de prueba desde 10–30 unidades.',
  },
  fi: {
    tagline: 'Globaali kumppaniohjelma',
    title: 'Myy afarer markkinallasi',
    subtitle:
      'Yksi maa, yksi jälleenmyyjä -ohjelma, johon sisältyy alueellinen yksinoikeus, jälleenmyyntihinnat, markkinointituki ja oma Distributor Success Program.',
    benefits: [
      {
        title: 'Alueellinen yksinoikeus',
        description:
          'Yksi valtuutettu jälleenmyyjä maata tai aluetta kohti — ei sisäistä kilpailua, ei kanavaristiriitoja.',
      },
      {
        title: 'Suorat tehdasmarginaalit',
        description: 'Jälleenmyyjälistahinnat ja vuosialennukset sitoutuneista volyymeista, toimitettuna FOB Qingdao.',
      },
      {
        title: 'Markkinointi- ja koulutustuki',
        description: 'Yhteisbrändättyjä materiaaleja, myyntipisteaineistoja, tuotekoulutusta ja lanseerauskampanjoita.',
      },
      {
        title: 'Oma asiakastimi',
        description: 'Henkilökohtainen jälleenmyyntipäällikkö sekä perehdytys-, ennuste- ja jälkitilaustukea.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Ryhdy jälleenmyyjäksi', href: '/distributor-program' },
      { text: 'Pyydä jälleenmyyjähinnasto', href: '/contact?subject=Dealer Price List' },
      { text: 'Hae maakumppanuutta', href: '/contact?subject=Country Partnership Application' },
      { text: 'Lataa jälleenmyyjäohjelma', href: '/distributor-program' },
    ],
    note: 'Vähimmäisensimmäinen tilaus 100–300 kappaletta maa-/aluejälleenmyyjille. Kokeilutilaukset 10–30 kappaletta.',
  },
  fr: {
    tagline: 'Programme Partenaires Global',
    title: 'Vendez Afarer sur votre marché',
    subtitle:
      'Un programme avec un distributeur par pays, incluant exclusivité territoriale, tarifs revendeur, support marketing et un programme de réussite distributeur dédié.',
    benefits: [
      {
        title: 'Exclusivité Territoriale',
        description: 'Un distributeur agréé par pays ou région — aucune concurrence interne, aucun conflit de canal.',
      },
      {
        title: 'Marges Directes Usine',
        description: 'Listes de prix distributeur et remises annuelles sur volumes engagés, expédiés FOB Qingdao.',
      },
      {
        title: 'Support Marketing & Formation',
        description: 'Supports co-marqués, matériel POS revendeur, formations produit et campagnes de lancement.',
      },
      {
        title: 'Équipe Compte Dédiée',
        description:
          'Un responsable distributeur personnel plus un support d’intégration, de prévision et de réapprovisionnement.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Devenir Distributeur', href: '/distributor-program' },
      { text: 'Demander la Liste de Prix Revendeur', href: '/contact?subject=Dealer Price List' },
      { text: 'Postuler pour un Partenariat Pays', href: '/contact?subject=Country Partnership Application' },
      { text: 'Télécharger le Programme Distributeur', href: '/distributor-program' },
    ],
    note: 'Commande initiale minimale de 100–300 unités pour les distributeurs Pays/Région. Commandes d’essai à partir de 10–30 unités.',
  },
  it: {
    tagline: 'Programma Partner Globali',
    title: 'Vendi afarer nel tuo mercato',
    subtitle:
      'Un programma con un distributore per paese: esclusività territoriale, prezzi da dealer, supporto marketing e un Distribution Success Program dedicato.',
    benefits: [
      {
        title: 'Esclusività Territoriale',
        description:
          'Un distributore autorizzato per paese o regione — nessuna concorrenza interna, nessun conflitto di canale.',
      },
      {
        title: 'Margini Diretti di Fabbrica',
        description: 'Listini distributore e rebate annuali su volumi impegnati, spedizione FOB Qingdao.',
      },
      {
        title: 'Supporto Marketing e Formazione',
        description: 'Materiali co-branded, materiale POS per dealer, formazione prodotto e campagne di lancio.',
      },
      {
        title: 'Team di Account Dedicato',
        description: 'Un distributor manager personale più onboarding, forecasting e supporto ai riordini.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Diventa un Distributore', href: '/distributor-program' },
      { text: 'Richiedi il Listino Prezzi Rivenditore', href: '/contact?subject=Dealer Price List' },
      { text: 'Candidati per la Partnership di Paese', href: '/contact?subject=Country Partnership Application' },
      { text: 'Scarica il Programma Distributori', href: '/distributor-program' },
    ],
    note: 'Ordine minimo iniziale di 100–300 unità per distributori Paese/Regione. Ordini di prova da 10–30 unità.',
  },
  ja: {
    tagline: 'グローバルパートナープログラム',
    title: 'afarerをあなたの市場で販売',
    subtitle:
      '1つの国につき1つの販売代理店を設けるプログラムです。地域独占権、代理店価格、マーケティング支援、専任のDistributor Success Programをご用意しています。',
    benefits: [
      {
        title: '地域独占権',
        description: '国または地域ごとに認定販売代理店は1社のみ — 内部競争なし、チャネル間の競合もありません。',
      },
      {
        title: '工場直販のマージン',
        description: '代理店価格表と年間リベートを約定数量に対して提供、FOB青島で出荷します。',
      },
      {
        title: 'マーケティング・研修サポート',
        description: 'コブランド資産、販売店向けPOS資料、製品研修、ローンチキャンペーンを提供します。',
      },
      {
        title: '専任アカウントチーム',
        description: '専任の代理店マネージャーが、オンボーディング、需要予測、再発注をサポートします。',
      },
    ],
    actions: [
      { variant: 'primary', text: '販売代理店になる', href: '/distributor-program' },
      { text: '代理店価格表を問い合わせる', href: '/contact?subject=Dealer Price List' },
      { text: '国別パートナーシップを申請する', href: '/contact?subject=Country Partnership Application' },
      { text: 'ディストリビュータープログラムをダウンロード', href: '/distributor-program' },
    ],
    note: '国/地域代理店の初回注文は100～300台以上。お試し注文は10～30台から承ります。',
  },
  ko: {
    tagline: '글로벌 파트너 프로그램',
    title: '귀하의 시장에서 afarer 판매',
    subtitle:
      '국가당 하나의 유통업자를 통해 지역 독점권, 대리점 가격, 마케팅 지원, 전담 유통업자 성공 프로그램을 제공합니다.',
    benefits: [
      { title: '지역 독점권', description: '국가 또는 지역당 공인 유통업자 1곳 — 내부 경쟁 없음, 채널 갈등 없음.' },
      { title: '공장 직판 마진', description: '유통업자 가격표와 약정 수량에 대한 연간 리베이트, FOB 칭다오 선적.' },
      {
        title: '마케팅 및 교육 지원',
        description: '공동 브랜드 자산, 딜러 POS 자료, 제품 교육, 출시 캠페인을 제공합니다.',
      },
      { title: '전담 계정 팀', description: '전담 유통 매니저와 함께 온보딩, 수요 예측, 재주문을 지원합니다.' },
    ],
    actions: [
      { variant: 'primary', text: '유통업자 되기', href: '/distributor-program' },
      { text: '딜러 가격표 요청', href: '/contact?subject=Dealer Price List' },
      { text: '국가 파트너십 신청', href: '/contact?subject=Country Partnership Application' },
      { text: '유통업자 프로그램 다운로드', href: '/distributor-program' },
    ],
    note: '국가/지역 유통업자 최소 첫 주문 100–300대. 시험 주문은 10–30대부터.',
  },
  nl: {
    tagline: 'Wereldwijd Partnerprogramma',
    title: 'Verkoop afarer in uw markt',
    subtitle:
      'Een programma met één distributeur per land, met gebiedsexclusiviteit, dealerprijzen, marketingsupport en een toegewijd Distributor Success Program.',
    benefits: [
      {
        title: 'Gebiedsexclusiviteit',
        description:
          'Eén geautoriseerde distributeur per land of regio — geen interne concurrentie, geen kanaalconflicten.',
      },
      {
        title: 'Directe Fabrieksmarges',
        description:
          'Distributeursprijslijsten en jaarlijkse kortingen op gecommitteerde volumes, verzonden FOB Qingdao.',
      },
      {
        title: 'Marketing- & Training Support',
        description: 'Co-branded materialen, POS-materialen voor dealers, producttraining en lanceercampagnes.',
      },
      {
        title: 'Toegewijd Accountteam',
        description: 'Een persoonlijke distributiemanager plus onboarding-, prognose- en nabestellingsondersteuning.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Word distributeur', href: '/distributor-program' },
      { text: 'Dealerprijslijst aanvragen', href: '/contact?subject=Dealer Price List' },
      { text: 'Landenpartnerschap aanvragen', href: '/contact?subject=Country Partnership Application' },
      { text: 'Distributieprogramma downloaden', href: '/distributor-program' },
    ],
    note: 'Minimale eerste bestelling van 100–300 stuks voor land-/regionale distributeurs. Proefbestellingen vanaf 10–30 stuks.',
  },
  no: {
    tagline: 'Globalt partnerprogram',
    title: 'Selg afarer i ditt marked',
    subtitle:
      'Et program med én distributør per land, med territoriell eksklusivitet, forhandlerpriser, markedsføringsstøtte og et dedikert Distributor Success Program.',
    benefits: [
      {
        title: 'Territoriell eksklusivitet',
        description:
          'Én autorisert distributør per land eller region — ingen intern konkurranse, ingen kanalkonflikter.',
      },
      {
        title: 'Direkte fabrikkmarginer',
        description: 'Distributørprislister og årlige rabatter på avtalte volumer, sendt FOB Qingdao.',
      },
      {
        title: 'Markedsførings- og opplæringsstøtte',
        description: 'Co-brandede eiendeler, POS-materiell for forhandlere, produktopplæring og lanseringskampanjer.',
      },
      {
        title: 'Dedikert konto-team',
        description: 'En personlig distributørleder pluss onboarding-, prognose- og bestillingsstøtte.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Bli distributør', href: '/distributor-program' },
      { text: 'Be om forhandlerprisliste', href: '/contact?subject=Dealer Price List' },
      { text: 'Søk om landspartnerskap', href: '/contact?subject=Country Partnership Application' },
      { text: 'Last ned distributørprogrammet', href: '/distributor-program' },
    ],
    note: 'Minimum første ordre på 100–300 enheter for lands-/regionale distributører. Prøveordrer fra 10–30 enheter.',
  },
  pl: {
    tagline: 'Globalny Program Partnerski',
    title: 'Sprzedawaj afarer na swoim rynku',
    subtitle:
      'Program jeden dystrybutor na kraj z ekskluzywnością terytorialną, cenami dealerskimi, wsparciem marketingowym i dedykowanym Programem Sukcesu Dystrybutora.',
    benefits: [
      {
        title: 'Ekskluzywność Terytorialna',
        description:
          'Jeden autoryzowany dystrybutor na kraj lub region — zero wewnętrznej konkurencji, zero konfliktów kanałowych.',
      },
      {
        title: 'Bezpośrednie Marże Fabryczne',
        description: 'Cenniki dystrybutorskie i roczne rabaty za zaangażowane wolumeny, wysyłka FOB Qingdao.',
      },
      {
        title: 'Wsparcie Marketingowe i Szkoleniowe',
        description: 'Materiały co-branded, POS dla dealerów, szkolenia produktowe i kampanie premierowe.',
      },
      {
        title: 'Dedykowany Zespół Kont',
        description: 'Osobisty opiekun dystrybutora plus wsparcie onboardingu, prognoz i zamówień ponownych.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Zostań Dystrybutorem', href: '/distributor-program' },
      { text: 'Poproś o Cennik Dealerski', href: '/contact?subject=Dealer Price List' },
      { text: 'Aplikuj o Partnerstwo Krajowe', href: '/contact?subject=Country Partnership Application' },
      { text: 'Pobierz Program Dystrybutorów', href: '/distributor-program' },
    ],
    note: 'Minimalne pierwsze zamówienie 100–300 sztuk dla dystrybutorów krajowych/regionalnych. Zamówienia próbne od 10–30 sztuk.',
  },
  pt: {
    tagline: 'Programa Global de Parceiros',
    title: 'Venda afarer no seu mercado',
    subtitle:
      'Um programa de um distribuidor por país, com exclusividade territorial, preços de revenda, suporte de marketing e um Distributor Success Program dedicado.',
    benefits: [
      {
        title: 'Exclusividade Territorial',
        description: 'Um distribuidor autorizado por país ou região — sem concorrência interna, sem conflito de canal.',
      },
      {
        title: 'Margens Diretas de Fábrica',
        description:
          'Listas de preços de distribuidor e rebates anuais por volume comprometido, embarcados FOB Qingdao.',
      },
      {
        title: 'Suporte de Marketing e Treinamento',
        description:
          'Materiais co-branded, materiais POS para revendedores, treinamento de produto e campanhas de lançamento.',
      },
      {
        title: 'Equipe de Conta Dedicada',
        description: 'Um gestor pessoal de distribuidores além de suporte de onboarding, previsão e reabastecimento.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Torne-se Distribuidor', href: '/distributor-program' },
      { text: 'Solicitar Lista de Preços de Revenda', href: '/contact?subject=Dealer Price List' },
      { text: 'Candidatar-se à Parceria de País', href: '/contact?subject=Country Partnership Application' },
      { text: 'Baixar o Programa de Distribuidores', href: '/distributor-program' },
    ],
    note: 'Pedido inicial mínimo de 100–300 unidades para Distribuidores de País/Região. Pedidos de teste a partir de 10–30 unidades.',
  },
  ro: {
    tagline: 'Program Global de Parteneri',
    title: 'Vindeți afarer pe piața dumneavoastră',
    subtitle:
      'Un program cu un distribuitor per țară, cu exclusivitate teritorială, prețuri de dealer, suport de marketing și un Program de Succes al Distribuitorului dedicat.',
    benefits: [
      {
        title: 'Exclusivitate Teritorială',
        description:
          'Un distribuitor autorizat per țară sau regiune — fără concurență internă, fără conflicte de canal.',
      },
      {
        title: 'Marje Directe de Fabrică',
        description:
          'Liste de prețuri de distribuitor și rabaturi anuale pentru volume angajate, expediate FOB Qingdao.',
      },
      {
        title: 'Suport de Marketing și Formare',
        description: 'Materiale co-brandate, materiale POS pentru dealeri, instruire de produs și campanii de lansare.',
      },
      {
        title: 'Echipă de Cont Dedicată',
        description: 'Un manager personal de distribuitori plus suport pentru onboarding, prognoză și recomenzi.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Deveniți Distribuitor', href: '/distributor-program' },
      { text: 'Solicitați Lista de Prețuri Dealer', href: '/contact?subject=Dealer Price List' },
      { text: 'Aplicați pentru Parteneriat de Țară', href: '/contact?subject=Country Partnership Application' },
      { text: 'Descărcați Programul de Distribuție', href: '/distributor-program' },
    ],
    note: 'Comandă minimă inițială de 100–300 unități pentru distribuitori de Țară/Regiune. Comenzi de test de la 10–30 unități.',
  },
  ru: {
    tagline: 'Глобальная Партнерская Программа',
    title: 'Продавайте afarer на вашем рынке',
    subtitle:
      'Программа «один дистрибьютор на страну» с территориальной эксклюзивностью, дилерскими ценами, маркетинговой поддержкой и выделенной Программой успеха дистрибьютора.',
    benefits: [
      {
        title: 'Территориальная Эксклюзивность',
        description:
          'Один авторизованный дистрибьютор на страну или регион — никакой внутренней конкуренции, никаких конфликтов каналов.',
      },
      {
        title: 'Прямые Заводские Маржи',
        description: 'Дилерские прайс-листы и ежегодные скидки на согласованные объемы, отгрузка FOB Циндао.',
      },
      {
        title: 'Маркетинговая и Обучающая Поддержка',
        description: 'Co-branded материалы, POS-материалы для дилеров, обучение продукту и кампании запуска.',
      },
      {
        title: 'Выделенная Команда Аккаунта',
        description: 'Личный менеджер дистрибьютора плюс поддержка онбординга, прогнозирования и повторных заказов.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Стать Дистрибьютором', href: '/distributor-program' },
      { text: 'Запросить Дилерский Прайс-Лист', href: '/contact?subject=Dealer Price List' },
      { text: 'Подать Заявку на Партнерство по Стране', href: '/contact?subject=Country Partnership Application' },
      { text: 'Скачать Дилерскую Программу', href: '/distributor-program' },
    ],
    note: 'Минимальный первый заказ 100–300 единиц для страновых/региональных дистрибьюторов. Пробные заказы от 10–30 единиц.',
  },
  sv: {
    tagline: 'Globalt partnerskapsprogram',
    title: 'Sälj afarer på din marknad',
    subtitle:
      'Ett program med en distributör per land, med territoriell exklusivitet, återförsäljarpriser, marknadsföringsstöd och ett dedikerat Distributor Success Program.',
    benefits: [
      {
        title: 'Territoriell exklusivitet',
        description:
          'En auktoriserad distributör per land eller region — ingen intern konkurrens, inga kanalkonflikter.',
      },
      {
        title: 'Direkta fabriksmarginaler',
        description: 'Distributörslistor och årliga rabatter på avtalade volymer, skeppade FOB Qingdao.',
      },
      {
        title: 'Marknads- och utbildningsstöd',
        description: 'Co-brandade tillgångar, POS-material för återförsäljare, produktträning och lanseringskampanjer.',
      },
      {
        title: 'Dedikerat kontoteam',
        description: 'En personlig distributörsansvarig samt onboarding-, prognos- och ombeställningsstöd.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Bli distributör', href: '/distributor-program' },
      { text: 'Begär prislista för återförsäljare', href: '/contact?subject=Dealer Price List' },
      { text: 'Ansök om landspartnerskap', href: '/contact?subject=Country Partnership Application' },
      { text: 'Ladda ner distributörsprogrammet', href: '/distributor-program' },
    ],
    note: 'Minsta första beställning på 100–300 enheter för lands-/regiondistributörer. Provbeställningar från 10–30 enheter.',
  },
  th: {
    tagline: 'โปรแกรมพันธมิตรทั่วโลก',
    title: 'จำหน่าย afarer ในตลาดของคุณ',
    subtitle:
      'โปรแกรมหนึ่งประเทศหนึ่งตัวแทนจำหน่าย พร้อมความเป็นเอกสิทธิ์ในเขตพื้นที่ ราคาตัวแทนจำหน่าย การสนับสนุนการตลาด และ Distributor Success Program เฉพาะทีม',
    benefits: [
      {
        title: 'ความเป็นเอกสิทธิ์ในเขตพื้นที่',
        description:
          'ตัวแทนจำหน่ายที่ได้รับอนุญาตหนึ่งรายต่อประเทศหรือภูมิภาค — ไม่มีการแข่งขันภายใน ไม่มีความขัดแย้งของช่องทาง',
      },
      {
        title: 'มาร์จิ้นจากโรงงานโดยตรง',
        description: 'ลิสต์ราคาตัวแทนจำหน่าย และส่วนลดประจำปีตามปริมาณที่ตกลงกัน จัดส่ง FOB ชิงเต่า',
      },
      {
        title: 'การสนับสนุนการตลาดและการฝึกอบรม',
        description: 'วัสดุแบรนด์ร่วม สื่อ ณ จุดขายสำหรับตัวแทน การฝึกอบรมสินค้า และแคมเปญเปิดตัว',
      },
      {
        title: 'ทีมบัญชีเฉพาะ',
        description: 'ผู้จัดการตัวแทนจำหน่ายส่วนตัว พร้อมช่วยเหลือการเริ่มต้น การคาดการณ์ และการสั่งซื้อซ้ำ',
      },
    ],
    actions: [
      { variant: 'primary', text: 'เป็นตัวแทนจำหน่าย', href: '/distributor-program' },
      { text: 'ขอลิสต์ราคาตัวแทนจำหน่าย', href: '/contact?subject=Dealer Price List' },
      { text: 'สมัครพันธมิตรประเทศ', href: '/contact?subject=Country Partnership Application' },
      { text: 'ดาวน์โหลดโปรแกรมตัวแทนจำหน่าย', href: '/distributor-program' },
    ],
    note: 'คำสั่งซื้อแรกขั้นต่ำ 100–300 ชิ้น สำหรับตัวแทนจำหน่ายระดับประเทศ/ภูมิภาค คำสั่งซื้อทดลอง 10–30 ชิ้น',
  },
  tr: {
    tagline: 'Küresel Ortak Programı',
    title: 'afarer’i kendi pazarınızda satın',
    subtitle:
      'Ülke başına tek dağıtıcı programı; bölgesel münhasırlık, bayi fiyatları, pazarlama desteği ve özel bir Distribütör Başarı Programı.',
    benefits: [
      {
        title: 'Bölgesel Münhasırlık',
        description: 'Ülke veya bölge başına tek yetkili dağıtıcı — iç rekabet yok, kanal çakışması yok.',
      },
      {
        title: 'Doğrudan Fabrika Marjları',
        description: 'Dağıtıcı fiyat listeleri ve taahhüt edilen hacimler için yıllık iskonto, FOB Qingdao teslimat.',
      },
      {
        title: 'Pazarlama ve Eğitim Desteği',
        description: 'Ortak markalı varlıklar, bayi POS materyalleri, ürün eğitimi ve lansman kampanyaları.',
      },
      {
        title: 'Özel Hesap Ekibi',
        description: 'Kişisel dağıtıcı yöneticisi ile oryantasyon, tahmin ve yeniden sipariş desteği.',
      },
    ],
    actions: [
      { variant: 'primary', text: 'Dağıtıcı Olun', href: '/distributor-program' },
      { text: 'Bayi Fiyat Listesi Talep Edin', href: '/contact?subject=Dealer Price List' },
      { text: 'Ülke Ortaklığı Başvurusu Yapın', href: '/contact?subject=Country Partnership Application' },
      { text: 'Dağıtıcı Programını İndirin', href: '/distributor-program' },
    ],
    note: 'Ülke/Bölge dağıtıcıları için minimum ilk sipariş 100–300 adet. Deneme siparişleri 10–30 adetten başlar.',
  },
};

function yamlQuote(v) {
  return `'${v.replace(/'/g, "''")}'`;
}

const locales = Object.keys(BLOCKS);
let ok = true;
for (const loc of locales) {
  const file = `src/data/pages/${loc}/home.yaml`;
  const parsed = yaml.parse(fs.readFileSync(file, 'utf8'));
  if (parsed.distributor) {
    console.log(`${loc}: ALREADY has distributor, skipping`);
    continue;
  }
  const b = BLOCKS[loc];
  const lines = [];
  lines.push('distributor:');
  lines.push(`  tagline: ${yamlQuote(b.tagline)}`);
  lines.push(`  title: ${yamlQuote(b.title)}`);
  lines.push(`  subtitle: ${yamlQuote(b.subtitle)}`);
  lines.push('  benefits:');
  for (const ben of b.benefits) {
    lines.push(`    - title: ${yamlQuote(ben.title)}`);
    lines.push(`      description: ${yamlQuote(ben.description)}`);
  }
  lines.push('  actions:');
  for (let i = 0; i < b.actions.length; i++) {
    const a = b.actions[i];
    const prefix = i === 0 && a.variant ? '    - variant: primary\n' + '      text: ' : '    - text: ';
    if (i === 0 && a.variant) {
      lines.push('    - variant: primary');
      lines.push(`      text: ${yamlQuote(a.text)}`);
    } else {
      lines.push(`    - text: ${yamlQuote(a.text)}`);
    }
    lines.push(`      href: ${a.href}`);
  }
  lines.push(`  note: ${yamlQuote(b.note)}`);
  const original = fs.readFileSync(file, 'utf8');
  const trimmed = original.replace(/\r?\n$/, '');
  const out = trimmed + '\n' + lines.join('\n') + '\n';
  // validate
  const test = yaml.parse(out);
  if (!test || !test.distributor) {
    ok = false;
    console.log(`${loc}: INVALID after generation`);
    continue;
  }
  fs.writeFileSync(file, out, 'utf8');
  console.log(`${loc}: added distributor block`);
}
console.log(ok ? 'ALL DONE' : 'ERRORS');
