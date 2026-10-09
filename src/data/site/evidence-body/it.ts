import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: 'Associazione australiana di club di paddle',
    product: 'Flotta per club — SUP + attrezzatura di sicurezza',
    industry: 'Tempo libero / Educazione',
    challenge:
      "Un'associazione di 15 club doveva standardizzare l'attrezzatura con SUP durevoli adatti ai principianti, giubbotti salvagente certificati CE e un modello di acquisto centralizzato per ridurre i costi.",
    solution:
      'Abbiamo standardizzato una flotta del club a 3 livelli (principianti, livello intermedio, istruttori), progettato grafiche del deck nei colori del club con logotipi dedicati e implementato un magazzino centralizzato con distribuzione trimestrale per club.',
    result:
      '350 unità in 15 club. Riduzione dei costi del 28% grazie agli acquisti consolidati. Soddisfazione del 92% dei soci per la qualità delle attrezzature.',
    outcomeMetrics: [
      {
        label: 'Club equipaggiati',
        value: '15',
      },
      {
        label: 'Unità consegnate',
        value: '350',
      },
      {
        label: 'Riduzione dei costi',
        value: '28%',
      },
      {
        label: 'Soddisfazione dei soci',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Distributore australiano',
    product: 'Gamma SUP certificata CE',
    industry: 'Nautica / Commercio al dettaglio',
    challenge:
      'Un distributore australiano richiedeva una gamma SUP certificata CE, con colori del deck personalizzati, opzione PVC potenziato e conformità alla norma australiana AS 1799.',
    solution:
      'Abbiamo prodotto campioni di pre-produzione in 4 varianti colore, reperito PVC di grado militare e coordinato i test di conformità AS 1799 di terze parti.',
    result:
      'Gamma di 3 modelli SUP lanciata sul mercato australiano e neozelandese. Seguita da un contratto con una catena retail di 12 negozi.',
    outcomeMetrics: [
      {
        label: 'Modelli lanciati',
        value: '3',
      },
      {
        label: 'Negozi retail',
        value: '12',
      },
      {
        label: 'Conformità',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Catena canadese di negozi outdoor',
    product: 'Linea SUP a marchio privato + accessori',
    industry: 'Commercio al dettaglio',
    challenge:
      'Un rivenditore canadese con 25 negozi richiedeva una gamma SUP esclusiva a marchio privato con confezioni bilingue francese/inglese, specifiche per il clima freddo e conformità alle normative nautiche canadesi.',
    solution:
      'Abbiamo sviluppato 4 modelli SUP con composto PVC cold-flex classificato fino a -15°C, prodotto confezioni retail bilingue con marcature normative canadesi e fornito espositori e materiali di formazione per il personale.',
    result:
      "Linea in esclusiva lanciata in 25 negozi. 3,800 unità vendute nella prima stagione. Il rivenditore ha rinnovato l'accordo di 3 anni ampliando il numero di SKU.",
    outcomeMetrics: [
      {
        label: 'Negozi',
        value: '25',
      },
      {
        label: 'Unità prima stagione',
        value: '3,800',
      },
      {
        label: 'Accordo',
        value: 'rinnovo di 3 anni',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Gruppo di resort di lusso dei Caraibi',
    product: 'Flotta per resort — SUP',
    industry: 'Ospitalità / Turismo',
    challenge:
      'Un gruppo con 5 resort necessitava di una flotta unificata di SUP per il noleggio, con branding coerente, materiali resistenti ai raggi UV del sole tropicale e un piano di sostituzione quinquennale.',
    solution:
      'Abbiamo progettato un pacchetto flotta SUP su misura di 3 modelli con PVC stabilizzato ai raggi UV, grafiche del deck con il marchio del resort e consegne scaglionate. Abbiamo fornito formazione al personale e un kit di ricambi dedicato per ogni resort.',
    result:
      '180 unità consegnate in 5 resort. Riordino per 2 nuove strutture. Riduzione del 40% del costo per unità rispetto ai fornitori precedenti.',
    outcomeMetrics: [
      {
        label: 'Unità consegnate',
        value: '180',
      },
      {
        label: 'Resort',
        value: '5',
      },
      {
        label: 'Riduzione dei costi',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Costo annuale di sostituzione delle tavole',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Fermi della flotta (giorni/anno)',
        before: '45',
        after: '8',
      },
      {
        label: 'Punteggio di soddisfazione degli ospiti',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Corporation tecnologica globale',
    product: 'Benessere aziendale — Flotta SUP',
    industry: 'Aziendale / Benessere',
    challenge:
      "Un'azienda tech della Fortune 500 voleva lanciare un programma di benessere acquatico per i dipendenti in 4 campus globali affacciati sul lago: 60 SUP con branding aziendale, soluzioni di stoccaggio e formazione.",
    solution:
      'Abbiamo fornito una flotta di SUP all-around stabili con grafiche del deck personalizzate con il logo aziendale, progettato rastrelliere di deposito resistenti alle intemperie in loco e certificato 12 istruttori interni tramite il programma di formazione afarer.',
    result:
      "Programma avviato in 4 campus. Oltre 2,400 partecipazioni dei dipendenti nel primo anno. Valutazione di soddisfazione dei dipendenti del 94%. Incluso nel rapporto di sostenibilità dell'azienda.",
    outcomeMetrics: [
      {
        label: 'Campus',
        value: '4',
      },
      {
        label: 'Partecipazioni',
        value: '2,400+',
      },
      {
        label: 'Soddisfazione',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Operatore di crociere dei Caraibi',
    product: 'Flotta per attività di bordo — SUP',
    industry: 'Ospitalità / Crociere',
    challenge:
      'Una grande compagnia di crociere voleva offrire il SUP come escursione a terra su 7 navi: stoccaggio compatto a bordo, cicli rapidi di gonfiaggio/sgonfiaggio e coerenza di marca su tutta la flotta.',
    solution:
      'Abbiamo sviluppato un pacchetto SUP specifico per crociere con sistemi di valvole a gonfiaggio rapido, deposito compatto in zaino e grafiche del deck con il marchio della nave, fornendo formazione dedicata alla squadra a terra e armadi di ricambi in 3 porti insulari.',
    result:
      'Programma avviato su 7 navi. Oltre 15,000 partecipazioni degli ospiti nella prima stagione. Valutazione media delle escursioni di 4.6★. Esteso a 3 navi aggiuntive nel secondo anno.',
    outcomeMetrics: [
      {
        label: 'Navi',
        value: '7',
      },
      {
        label: 'Partecipazioni ospiti',
        value: '15,000+',
      },
      {
        label: 'Valutazione',
        value: '4.6★',
      },
      {
        label: 'Espansione anno 2',
        value: '+3 navi',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Brand europeo DTC di sport acquatici',
    product: 'Linea SUP a brand + accessori',
    industry: 'E-commerce / Commercio al dettaglio',
    challenge:
      "Un brand DTC in rapida crescita necessitava di un set SUP completo (tavola, pompa, pagaia, leash, borsa) con confezionamento premium per l'e-commerce — spedizione DHL/FedEx diretta al consumatore senza danni.",
    solution:
      "Abbiamo sviluppato una linea in co-branding con sagomatura personalizzata del nucleo in EPS, tecnologia drop-stitch proprietaria per pressioni più elevate e confezioni in cartone ondulato a doppia parete pronte per il retail con inserti protettivi. Abbiamo integrato l'autenticazione tramite codice QR e la registrazione della garanzia.",
    result:
      'Linea di 3 modelli SUP lanciata in 75 giorni. Oltre 15,000 unità nei primi 12 mesi. Valutazione media di 4.8★ su oltre 2,000 recensioni. Tasso di danneggiamento in transito dello 0.3%.',
    outcomeMetrics: [
      {
        label: 'Modelli',
        value: '3',
      },
      {
        label: 'Unità',
        value: '15,000+',
      },
      {
        label: 'Valutazione media',
        value: '4.8★',
      },
      {
        label: 'Tasso di danneggiamento',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Operatore europeo di resort lacustri e noleggio',
    product: 'Flotta per noleggio — SUP, salvagenti, accessori',
    industry: 'Noleggio / Turismo',
    challenge:
      'Un operatore con 6 stazioni di noleggio necessitava di una flotta SUP ad alta durabilità con sistemi di asciugatura rapida, costruzione resistente ai danni e un piano pluriennale di sostituzione prevedibile.',
    solution:
      "Abbiamo fornito SUP da noleggio di livello commerciale con bande del rail rinforzate, deck in EVA a rapida asciugatura e PVC stabilizzato ai raggi UV, e sviluppato un sistema di tracciamento dell'usura a codice colore con rapporti annuali sulle condizioni.",
    result:
      '200 SUP schierati in 6 stazioni. Costo annuale di manutenzione ridotto del 55%. Durata delle attrezzature estesa da 2 a 4 anni.',
    outcomeMetrics: [
      {
        label: 'Stazioni di noleggio',
        value: '6',
      },
      {
        label: 'SUP schierati',
        value: '200',
      },
      {
        label: 'Costo di manutenzione',
        value: '-55%',
      },
      {
        label: 'Durata',
        value: '4 anni',
      },
    ],
    beforeAfter: [
      {
        label: 'Durata media delle tavole',
        before: '2 anni',
        after: '4 anni',
      },
      {
        label: 'Manutenzione annuale per tavola',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Ricavi di noleggio per tavola/stagione',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Società di charter di pesca della Florida',
    product: 'Flotta SUP da pesca personalizzata',
    industry: 'Pesca / Charter',
    challenge:
      'Un operatore di charter di pesca della Florida voleva aggiungere tour di pesca in SUP: piattaforme stabili con supporti per cooler, binari per porta canne e compatibilità con trasduttori per fishfinder.',
    solution:
      'Abbiamo personalizzato la piattaforma SUP stabile esistente con 4 portacanne integrati, sistema di aggancio rimovibile per il cooler e alloggiamento impermeabile per il transduttore nello scupper, offrendo prezzi per flotta e un programma di sostituzione stagionale.',
    result:
      'Tour di pesca in SUP avviati come nuova fonte di ricavi. Il 45% dei clienti charter esistenti ha prenotato tour in SUP. Flotta ampliata da 8 a 20 tavole in 2 stagioni.',
    outcomeMetrics: [
      {
        label: 'Flotta iniziale',
        value: '8',
      },
      {
        label: 'Flotta anno 2',
        value: '20',
      },
      {
        label: 'Vendite incrociate charter',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: 'Organizzazione umanitaria internazionale',
    product: 'Barche gonfiabili di soccorso e assistenza',
    industry: 'NGO / Aiuto umanitario',
    challenge:
      "Un'organizzazione umanitaria internazionale necessitava di 50 barche gonfiabili robuste per operazioni di soccorso durante le inondazioni nel Sud-est asiatico: leggere per il trasporto in elicottero e riparabili sul campo.",
    solution:
      'Abbiamo prodotto 50 imbarcazioni gonfiabili rinforzate con fondo ad autosvuotamento, ridondanza multicomparto e sagole di presa perimetrali, fornito kit di riparazione da campo con istruzioni illustrate e addestrato 20 tecnici locali.',
    result:
      '50 imbarcazioni schierate in 3 regioni a rischio alluvioni. Utilizzate in 12 grandi operazioni di soccorso nei primi 6 mesi. 0 guasti alle attrezzature segnalati.',
    outcomeMetrics: [
      {
        label: 'Imbarcazioni schierate',
        value: '50',
      },
      {
        label: 'Operazioni di soccorso',
        value: '12',
      },
      {
        label: 'Tasso di guasto',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Brand lifestyle giapponese',
    product: 'Linea SUP co-branding',
    industry: 'OEM / Marchio',
    challenge:
      'Un brand lifestyle giapponese premium puntava a entrare nel mercato degli sport acquatici con una linea SUP co-branding: design minimalista, materiali ecologici e produzione di precisione.',
    solution:
      "Abbiamo creato stampi personalizzati con un profilo del rail più slanciato, reperito inserti del deck in bambù certificato FSC e opzioni in PVC riciclato e sviluppato un'esperienza di unboxing premium con guide di cura in giapponese accessibili tramite codice QR.",
    result:
      'Linea co-branding di 3 modelli presentata al Tokyo Marine Show. 2,800 unità vendute in prenotazione prima del lancio pubblico. Segnalata in 5 riviste giapponesi di lifestyle.',
    outcomeMetrics: [
      {
        label: 'Modelli',
        value: '3',
      },
      {
        label: 'Unità in prenotazione',
        value: '2,800',
      },
      {
        label: 'Coperture mediatiche',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Comunità residenziale americana fronte lago',
    product: 'Servizio per la comunità — Flotta SUP',
    industry: 'Immobiliare / Comunità',
    challenge:
      'Una comunità residenziale di lusso fronte lago voleva offrire SUP come servizio per i residenti: flotta a bassa manutenzione, stoccaggio sicuro sulla riva e sistema di prestito self-service per oltre 200 abitazioni.',
    solution:
      'Abbiamo fornito 15 SUP di livello commerciale con sistema di armadietti resistenti alle intemperie, progettato un prelievo self-service tramite codice QR con integrazione delle liberatorie digitali e offerto un servizio di manutenzione stagionale.',
    result:
      "L'85% delle famiglie ha utilizzato il servizio SUP nella prima stagione. Il valore degli immobili nella zona fronte lago è aumentato del 7%. La comunità ha vinto il premio «Best Lakeside Living».",
    outcomeMetrics: [
      {
        label: 'SUP',
        value: '15',
      },
      {
        label: 'Utilizzo delle famiglie',
        value: '85%',
      },
      {
        label: 'Impatto sul valore immobiliare',
        value: '+7%',
      },
      {
        label: 'Premio',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Catena di resort balneari del Mediterraneo',
    product: 'Flotta per resort — SUP + accessori',
    industry: 'Ospitalità / Turismo',
    challenge:
      'Una catena mediterranea di 3 resort voleva lanciare un programma unificato di attività acquatiche con 120 SUP a branding personalizzato, schede di sicurezza multilingue e sistema di manutenzione a rotazione.',
    solution:
      "Abbiamo progettato un pacchetto flotta specifico per resort con PVC marino resistente ai raggi UV, grafiche del deck con il marchio dell'hotel in 3 schemi colore e un sistema di etichettatura colorata per la manutenzione. Sono inclusi formazione del personale e rifornimento trimestrale dei ricambi.",
    result:
      'Flotta schierata in 3 resort. I ricavi delle attività acquatiche sono aumentati del 210% nella prima stagione. I punteggi di soddisfazione degli ospiti per i servizi sono passati da 4.1 a 4.7/5.',
    outcomeMetrics: [
      {
        label: 'SUP consegnati',
        value: '120',
      },
      {
        label: 'Resort',
        value: '3',
      },
      {
        label: 'Aumento dei ricavi',
        value: '210%',
      },
      {
        label: 'Punteggio ospiti',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Ricavi attività acquatiche (annuali)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Tasso di sostituzione attrezzatura',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Soddisfazione degli ospiti (servizi)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distributore di sport acquatici del Medio Oriente',
    product: 'Linea completa — SUP, barche, accessori',
    industry: 'Distribuzione / Nautica',
    challenge:
      "Un distributore con sede nel GCC desiderava i diritti esclusivi sull'intera linea Afarer in 6 paesi del Golfo, con packaging in arabo, specifiche di materiali resistenti al calore e garanzia conforme alla sharia.",
    solution:
      'Abbiamo stipulato un accordo di distribuzione in esclusiva, sviluppato confezioni e materiali di marketing in arabo, validato le specifiche dei materiali a 50°C di temperatura ambiente e adattato i termini di garanzia alla normativa regionale.',
    result:
      '12 ordini di container nei primi 18 mesi. Rete di 15 rivenditori e sub-distributori costituita. Quota di mercato stimata al 18% del segmento SUP gonfiabili nel GCC.',
    outcomeMetrics: [
      {
        label: 'Container',
        value: '12',
      },
      {
        label: 'Rete di rivenditori',
        value: '15',
      },
      {
        label: 'Quota di mercato',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: 'Rivenditore europeo di outdoor',
    product: 'Linea SUP a marchio privato',
    industry: 'Commercio al dettaglio',
    challenge:
      'Un rivenditore europeo di articoli outdoor necessitava di una linea SUP a marchio privato con grafiche del deck esclusive, PVC ecologico e confezionamento pronto per la vendita — il tutto consegnato in 60 giorni.',
    solution:
      'Abbiamo sviluppato file di stampa digitale personalizzati, reperito PVC conforme al REACH e compresso il campionamento da 3 cicli a 1, collocando il team di design nella nostra fabbrica di Qingdao.',
    result:
      "55 giorni dalla PO firmata al FOB. 2,400 unità in 4 SKU. Riordino effettuato prima dell'arrivo del primo container.",
    outcomeMetrics: [
      {
        label: 'Tempi di consegna',
        value: '55 giorni',
      },
      {
        label: 'Unità',
        value: '2,400',
      },
      {
        label: 'SKU',
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Agenzia marittima del Sud-est asiatico',
    product: 'Flotta SUP di pattugliamento e soccorso',
    industry: 'Pubblico / Sicurezza marittima',
    challenge:
      "Un'agenzia marittima governativa richiedeva 20 SUP di pattugliamento e soccorso con tessuto Hypalon antincendio, supporti per comunicazioni integrati e conformità agli standard SOLAS capitolo III.",
    solution:
      'Abbiamo prodotto 20 SUP con tubi in CSM Hypalon, D-ring ad alta resistenza e pacchetti di luci di navigazione preinstallati. Il team di ispezione della fabbrica ha assistito alle prove in mare. È stato fornito il pacchetto completo di documentazione SOLAS.',
    result:
      'Contratto consegnato in 4 mesi. Flotta schierata per pattugliamento di frontiera, ricerca e soccorso e risposta ai disastri su 3 basi regionali.',
    outcomeMetrics: [
      {
        label: 'SUP di pattugliamento',
        value: '20',
      },
      {
        label: 'Consegna',
        value: '4 mesi',
      },
      {
        label: 'Basi',
        value: '3',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Startup statunitense di sport acquatici',
    product: 'Linea SUP personalizzata',
    industry: 'Startup / Commercio al dettaglio',
    challenge:
      'Una startup statunitense di sport acquatici necessitava di un SUP ad alte prestazioni in Drop-Stitch con design del deck personalizzato, packaging co-branding e certificazione BSCI per la grande distribuzione.',
    solution:
      'Abbiamo adattato lo stampo SUP esistente con un profilo rocker modificato, sviluppato la grafica della confezione in co-branding e fornito la documentazione completa di audit BSCI.',
    result:
      'Inserito con successo in 3 grandi catene outdoor statunitensi. Oltre 5,000 unità nel primo anno con un tasso di sell-through del 98%.',
    outcomeMetrics: [
      {
        label: 'Catene retail',
        value: '3',
      },
      {
        label: 'Unità primo anno',
        value: '5,000+',
      },
      {
        label: 'Sell-through',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: 'Unione sportiva universitaria britannica',
    product: 'Flotta per club studenteschi — SUP + sicurezza',
    industry: 'Educazione',
    challenge:
      "Un'università britannica con un attivo club di sport acquatici doveva sostituire una flotta datata con SUP gonfiabili moderni: stoccaggio in spazi limitati, uso per tutti i livelli e standard agonistici BUCS.",
    solution:
      "Abbiamo fornito 25 SUP all-around con zaini compatti per il trasporto, 10 SUP da touring per l'allenamento agonistico e un pacchetto completo di attrezzature di sicurezza, oltre a formazione per i responsabili del club e workshop di manutenzione.",
    result:
      "Flotta presentata alla Fiera delle Matricole. Il numero di iscritti al club è cresciuto del 140%. L'università ha ospitato la prima competizione universitaria di SUP in 5 anni.",
    outcomeMetrics: [
      {
        label: 'SUP forniti',
        value: '35',
      },
      {
        label: 'Crescita degli iscritti',
        value: '140%',
      },
      {
        label: 'Competizioni ospitate',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Brand statunitense di attrezzature per sport acquatici',
    product: 'Stampo su misura — SUP da touring',
    industry: 'OEM / Produzione',
    challenge:
      'Un brand statunitense richiedeva uno stampo SUP completamente nuovo: forma touring da 14 piedi, canali per il fishfinder, piattaforma rinforzata e capacità di carico di 400 lbs.',
    solution:
      "Abbiamo progettato un nuovo stampo drop-stitch da 14 piedi con densità del nucleo rinforzata, inserti integrati per binari accessori e strato inferiore in PVC di grado militare per la resistenza all'abrasione, producendo 3 iterazioni di prototipo prima della finalizzazione dello stampo.",
    result:
      'Nuovo stampo realizzato in 14 settimane. 3,500 unità prodotte nella prima tiratura. Prodotto nominato «Best Fishing SUP 2025» da Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Tempo di stampaggio',
        value: '14 settimane',
      },
      {
        label: 'Prima tiratura',
        value: '3,500 unità',
      },
      {
        label: 'Premio',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
