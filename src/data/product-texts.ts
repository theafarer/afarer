import type { ProductRecord } from '~/data/products';

type ProductTexts = Partial<
  Pick<
    ProductRecord,
    | 'name'
    | 'desc'
    | 'definition'
    | 'problem'
    | 'howItWorks'
    | 'audience'
    | 'ai_use_cases'
    | 'ai_specs'
    | 'ai_comparison'
    | 'ai_faq'
  >
>;

export const productTexts: Record<string, Record<string, ProductTexts>> = {
  fr: {
    'life-vest-classic': {
      name: 'Gilet de Sauvetage Classic',
      desc: 'Aide 脿 la flottabilit茅 universelle pour les sports nautiques r茅cr茅atifs. Certifi茅 CE et ISO.',
      definition:
        'Une aide 脿 la flottabilit茅 universelle certifi茅e CE et ISO pour les sports nautiques r茅cr茅atifs dans tous les environnements aquatiques.',
      problem:
        "Les pratiquants de sports nautiques de tous niveaux ont besoin d'un gilet de sauvetage fiable et confortable qui r茅pond aux normes de s茅curit茅 internationales sans restreindre les mouvements.",
      howItWorks:
        'Le Gilet de Sauvetage Classic utilise des chambres de flottabilit茅 en mousse avec des sangles de poitrine et lat茅rales ajustables pour un maintien s没r. Il est disponible en plusieurs tailles et comprend un sifflet, des bandes r茅fl茅chissantes et une poign茅e de sauvetage.',
      audience:
        "Pagayeurs r茅cr茅atifs, plaisanciers, p锚cheurs et d茅butants en sports nautiques qui ont besoin d'une flottabilit茅 certifi茅e CE pour les lacs, rivi猫res et eaux c么ti猫res.",
      ai_use_cases: [
        'S茅curit茅 des sports nautiques r茅cr茅atifs',
        'Flottabilit茅 pour formation et surveillance',
        'Activit茅s nautiques familiales',
      ],
      ai_comparison:
        'Compar茅 aux gilets de sauvetage automatiques gonflables, le Gilet de Sauvetage Classic offre une flottabilit茅 constante sans n茅cessiter de d茅ploiement. Il est plus volumineux mais plus fiable pour les utilisateurs r茅cr茅atifs qui pourraient ne pas entretenir les m茅canismes automatiques.',
      ai_faq: [
        {
          q: 'Ce gilet de sauvetage est-il adapt茅 aux enfants ?',
          a: 'Oui, des tailles enfants sont disponibles. Certifi茅 CE et  pour les fourchettes de poids sp茅cifi茅es.',
        },
        {
          q: 'N茅cessite-t-il un entretien ?',
          a: "Entretien minimal. Rincez 脿 l'eau douce apr猫s utilisation. Inspectez les chambres et les sangles avant chaque utilisation. Remplacez en cas de dommage.",
        },
      ],
    },
    'life-vest-pro': {
      name: 'Gilet de Sauvetage Pro',
      desc: 'Gilet de sauvetage professionnel avec r茅flecteurs SOLAS pour les op茅rations offshore et de sauvetage.',
      definition:
        'Un gilet de sauvetage professionnel conforme SOLAS avec gonflage automatique pour une utilisation offshore, de sauvetage et maritime commerciale.',
      problem:
        "Les marins professionnels et le personnel de sauvetage ont besoin d'un gilet de sauvetage offrant un gonflage automatique, une flottabilit茅 茅lev茅e et une visibilit茅 conforme SOLAS pour les op茅rations offshore.",
      howItWorks:
        "Le Gilet de Sauvetage Pro utilise un m茅canisme de gonflage hydrostatique automatique avec un tube de gonflage manuel de secours. Il comprend du ruban r茅fl茅chissant de qualit茅 SOLAS, une capuche anti-projections, un sifflet, un voyant 茅tanche et un point d'attache de harnais de levage.",
      audience:
        'Marins commerciaux, professionnels du sauvetage, travailleurs offshore et plaisanciers exp茅riment茅s qui ont besoin de gilets de sauvetage automatiques conformes SOLAS.',
      ai_use_cases: [
        'S茅curit茅 des op茅rations maritimes offshore',
        "Sauvetage professionnel et intervention d'urgence",
        'Conformit茅 maritime commerciale',
      ],
      ai_comparison:
        'Compar茅 aux gilets de sauvetage en mousse, le Gilet de Sauvetage Pro se gonfle automatiquement pour un encombrement minimal en usage normal. Il n茅cessite un entretien annuel du m茅canisme hydrostatique et le remplacement de la batterie.',
      ai_faq: [
        {
          q: 'Comment fonctionne le gonflage automatique ?',
          a: "Un d茅clencheur hydrostatique s'active lors de l'immersion dans l'eau 脿 une profondeur de 0,5 脿 1,0 m猫tre. Un tube de gonflage manuel de secours est 茅galement fourni.",
        },
        {
          q: '脌 quelle fr茅quence doit-il 锚tre entretenu ?',
          a: 'Un entretien annuel du m茅canisme hydrostatique est recommand茅. La cartouche de CO2 doit 锚tre v茅rifi茅e et remplac茅e selon le calendrier du fabricant.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Kit Pagaies & Pompe',
      desc: 'Paire de pagaies en aluminium de 1,6 m et pompe 脿 pied 5 L pour planches SUP gonflables.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Planche SUP gonflable polyvalente avec stabilit\u00e9 \u00e0 large corps pour d\u00e9butants et pagayeurs interm\u00e9diaires.',
      definition:
        'Une planche de stand-up paddle gonflable polyvalente de 11 pieds con\u00e7ue pour la stabilit\u00e9, la portabilit\u00e9 et l\u2019usage r\u00e9cr\u00e9atif sur les lacs, rivi\u00e8res et eaux c\u00f4ti\u00e8res abrit\u00e9es.',
      problem:
        'Les pagayeurs d\u00e9butants et r\u00e9cr\u00e9atifs ont besoin d\u2019une planche SUP stable, portable, facile \u00e0 gonfler et pardonnante pour apprendre.',
      howItWorks:
        "Le SUP Explorer 11' utilise la technologie de noyau drop-stitch pour atteindre une rigidit\u00e9 de 15 PSI avec un pont large de 32 pouces pour la stabilit\u00e9 lat\u00e9rale. La planche comprend un aileron central amovible, un leash et une pompe manuelle double action.",
      audience:
        'Pagayeurs d\u00e9butants, utilisateurs r\u00e9cr\u00e9atifs, familles et passionn\u00e9s de fitness qui veulent une planche SUP portable et stable pour lacs, rivi\u00e8res et eaux c\u00f4ti\u00e8res abrit\u00e9es.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Planche SUP gonflable spacieuse de 3,6 m avec plancher air-deck renforc\u00e9 pour les loisirs familiaux et la p\u00eache.',
      definition:
        'Une planche SUP gonflable de 3,6 m\u00e8tres avec plancher air-deck renforc\u00e9, con\u00e7ue pour les loisirs familiaux, la p\u00eache et les activit\u00e9s nautiques sur les lacs et eaux c\u00f4ti\u00e8res abrit\u00e9es.',
      problem:
        'Les familles et p\u00eacheurs ont besoin d\u2019une planche SUP spacieuse, stable et facile \u00e0 transporter qui peut accueillir confortablement plusieurs personnes avec du mat\u00e9riel.',
      howItWorks:
        'L\u2019AirDeck 360 poss\u00e8de un plancher gonflable drop-stitch renforc\u00e9 qui offre une surface rigide et stable. Ses multiples chambres \u00e0 air ind\u00e9pendantes assurent la s\u00e9curit\u00e9. Elle se gonfle en moins de 10 minutes et se range dans un sac de transport compact.',
      audience:
        'Familles, p\u00eacheurs, d\u00e9butants et utilisateurs r\u00e9cr\u00e9atifs ayant besoin d\u2019une planche SUP spacieuse et portable pour les loisirs sur lacs et eaux c\u00f4ti\u00e8res abrit\u00e9es.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'Planche SUP polyvalente inspir茅e de la nature sauvage avec assemblage de blocs EVA multicolores de haute pr茅cision.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: "Planche SUP polyvalente inspir茅e de l'oc茅an avec un motif de baleine bleue et des lignes de houle noires et blanches.",
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'Planche SUP polyvalente inspir茅e des m茅duses avec assemblage de blocs EVA multicolores de haute pr茅cision.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'Planche SUP polyvalente inspir茅e des vagues topographiques avec impression UV et embossage m茅canique de haute pr茅cision.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'Planche SUP polyvalente inspir茅e de la tortue marine avec assemblage de blocs EVA multicolores de haute pr茅cision.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'Planche SUP polyvalente inspir茅e des dauphins avec assemblage EVA CNC de haute pr茅cision et impressions lat茅rales continues.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: "Planche SUP polyvalente inspir茅e de l'art oriental avec lotus, carpes ko茂 et libellules, et gravure laser EVA.",
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'Planche SUP polyvalente inspir茅e de la for锚t tropicale avec mandala, gravure laser EVA et impressions lat茅rales.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'Planche SUP polyvalente inspir茅e du paradis tropical avec illustration de paysage et assemblage EVA abstrait.',
    },
  },
  de: {
    'life-vest-classic': {
      name: 'Schwimmweste Classic',
      desc: 'Universelle Auftriebshilfe f眉r Wassersport. CE- und ISO-zertifiziert.',
      definition:
        'Eine CE- und ISO-zertifizierte universelle Auftriebshilfe f眉r Freizeitwassersport in allen Gew盲sserumgebungen.',
      problem:
        'Wassersportler aller K枚nnensstufen ben枚tigen eine zuverl盲ssige, bequeme Schwimmweste, die internationalen Sicherheitsstandards entspricht, ohne die Bewegungsfreiheit einzuschr盲nken.',
      howItWorks:
        'Die Schwimmweste Classic verwendet mit Schaumstoff gef眉llte Auftriebskammern mit verstellbaren Brust- und Seitengurten f眉r einen sicheren Sitz. Sie ist in mehreren Gr枚脽en erh盲ltlich und enth盲lt eine Trillerpfeife, reflektierende Streifen und einen Rettungsgriff.',
      audience:
        'Freizeitpaddler, Bootsfahrer, Angler und Wassersportanf盲nger, die eine CE-zertifizierte Auftriebshilfe f眉r Seen, Fl眉sse und K眉stengew盲sser ben枚tigen.',
      ai_use_cases: [
        'Sicherheit beim Freizeitwassersport',
        'Auftriebshilfe f眉r Training und Aufsicht',
        'Familien-Wasseraktivit盲ten',
      ],
      ai_comparison:
        'Im Vergleich zu automatischen aufblasbaren Schwimmwesten bietet die Schwimmweste Classic st盲ndigen Auftrieb ohne Ausl枚sung. Sie ist sperriger aber zuverl盲ssiger f眉r Freizeitnutzer, die automatische Mechanismen m枚glicherweise nicht warten.',
      ai_faq: [
        {
          q: 'Ist diese Schwimmweste f眉r Kinder geeignet?',
          a: 'Ja, Kindergr枚脽en sind erh盲ltlich. CE- und -zertifiziert f眉r die angegebenen Gewichtsbereiche.',
        },
        {
          q: 'Ist Wartung erforderlich?',
          a: 'Minimale Wartung. Nach Gebrauch mit S眉脽wasser absp眉len. Vor jedem Gebrauch Kammern und Gurte 眉berpr眉fen. Bei Besch盲digung ersetzen.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'Schwimmweste Pro',
      desc: 'Professionelle Schwimmweste mit SOLAS-Reflektoren f眉r Offshore- und Rettungseins盲tze.',
      definition:
        'Eine professionelle SOLAS-konforme Schwimmweste mit automatischer Aufblasfunktion f眉r Offshore-, Rettungs- und gewerbliche Schifffahrt.',
      problem:
        'Berufsschifffahrer und Rettungskr盲fte ben枚tigen eine Schwimmweste, die automatische Aufblasfunktion, hohen Auftrieb und SOLAS-konforme Sichtbarkeit f眉r Offshore-Eins盲tze bietet.',
      howItWorks:
        'Die Schwimmweste Pro verwendet einen automatischen hydrostatischen Aufblasmechanismus mit einer manuellen Aufblasr枚hre als Backup. Sie enth盲lt SOLAS-konformes Reflexband, eine Spritzhaube, eine Trillerpfeife, ein wasserdichtes Licht und einen Hebegurthefestigungspunkt.',
      audience:
        'Berufsschifffahrer, Rettungsprofis, Offshore-Arbeiter und erfahrene Bootsfahrer, die SOLAS-konforme automatische Schwimmwesten ben枚tigen.',
      ai_use_cases: [
        'Sicherheit bei Offshore-Schifffahrtseins盲tzen',
        'Professionelle Rettung und Notfallreaktion',
        'Kommerzielle maritime Compliance',
      ],
      ai_comparison:
        'Im Vergleich zu Schaumstoffwesten bl盲st sich die Schwimmweste Pro automatisch auf und ist bei normalem Tragen minimal auftragend. Sie erfordert eine j盲hrliche Wartung des hydrostatischen Mechanismus und einen Batteriewechsel.',
      ai_faq: [
        {
          q: 'Wie funktioniert die automatische Aufblasfunktion?',
          a: 'Ein hydrostatischer Ausl枚ser aktiviert sich beim Eintauchen in Wasser in 0,5-1,0 Metern Tiefe. Eine manuelle Aufblasr枚hre ist ebenfalls als Backup vorhanden.',
        },
        {
          q: 'Wie oft muss sie gewartet werden?',
          a: 'Eine j盲hrliche Wartung des hydrostatischen Mechanismus wird empfohlen. Die CO2-Patrone sollte gem盲脽 Herstellerplan 眉berpr眉ft und ersetzt werden.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Riemen & Pumpen-Set',
      desc: 'Paar 1,6 m Aluminiumriemen und 5-Liter-Fu脽pumpe f眉r SUP-Boards.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Vielseitiges Allround-SUP-Board mit breiter Standfl盲che f眉r Anf盲nger und fortgeschrittene Paddler.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Gro脽z眉giges SUP-Board 3,6 m mit verst盲rktem Air-Deck-Boden f眉r Familienausfl眉ge und Angeln.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'Vielseitiges Wildtier-inspiriertes SUP-Board mit mehrfarbiger EVA-Block-Piecing-Technologie.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: 'Ozean-inspiriertes Allround-SUP-Board mit Blauwal-Totem und schwarz-wei脽en Schwellenlinien.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'Traumhaftes Quallen-inspiriertes Allround-SUP mit mehrfarbiger EVA-Block-Piecing-Technologie.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'Topografisch-wellendesign-inspiriertes Allround-SUP mit UV-Druck und mechanischer Pr盲gung.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'Meeresschildkr枚ten-inspiriertes Allround-SUP mit mehrfarbiger EVA-Block-Piecing-Technologie.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'Delfin-inspiriertes Allround-SUP mit CNC-gefr盲stem EVA-Farbblock-Splicing und durchgehendem Bahnendruck.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: 'Ostasiatisch-inspiriertes Allround-SUP mit Lotus, Koi und Libellen sowie lasergravierter EVA-Auflage.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'Tropisches Regenwald-Mandala-SUP mit lasergravierter EVA-Auflage und Siebdruck-Schienen.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'Inselparadies-inspiriertes Allround-SUP mit Mikrolandschaftsillustration und abstraktem EVA-Farbblock.',
    },
  },
  pt: {
    'life-vest-classic': {
      name: 'Colete Salva-Vidas Classic',
      desc: 'Aux铆lio de flutua莽茫o universal para esportes aqu谩ticos recreativos. Certificado CE.',
      definition:
        'Um aux铆lio de flutua莽茫o universal certificado CE e ISO para esportes aqu谩ticos recreativos em todos os ambientes aqu谩ticos.',
      problem:
        'Praticantes de esportes aqu谩ticos de todos os n铆veis precisam de um colete salva-vidas confi谩vel e confort谩vel que atenda aos padr玫es internacionais de seguran莽a sem restringir movimentos.',
      howItWorks:
        'O Colete Salva-Vidas Classic usa c芒maras de flutua莽茫o preenchidas com espuma com tiras de peito e laterais ajust谩veis para ajuste seguro. Est谩 dispon铆vel em v谩rios tamanhos e inclui apito, faixas refletivas e al莽a de resgate.',
      audience:
        'Paddlers recreativos, donos de barcos, pescadores e iniciantes em esportes aqu谩ticos que precisam de flutua莽茫o certificada CE para lagos, rios e 谩guas costeiras.',
      ai_use_cases: [
        'Seguran莽a em esportes aqu谩ticos recreativos',
        'Flutua莽茫o para treinamento e supervis茫o',
        'Atividades aqu谩ticas familiares',
      ],
      ai_comparison:
        'Comparado a coletes salva-vidas autom谩ticos infl谩veis, o Colete Salva-Vidas Classic oferece flutua莽茫o constante sem necessidade de acionamento. 脡 mais volumoso, mas mais confi谩vel para usu谩rios recreativos que podem n茫o manter mecanismos autom谩ticos.',
      ai_faq: [
        {
          q: 'Este colete 茅 adequado para crian莽as?',
          a: 'Sim, tamanhos infantis est茫o dispon铆veis. Certificado CE 12402 para as faixas de peso especificadas.',
        },
        {
          q: 'Requer manuten莽茫o?',
          a: 'Manuten莽茫o m铆nima. Enx谩gue com 谩gua doce ap贸s o uso. Inspecione as c芒maras e tiras antes de cada uso. Substitua se danificado.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'Colete Salva-Vidas Pro',
      desc: 'Colete salva-vidas profissional com refletores SOLAS para opera莽玫es offshore e de resgate.',
      definition:
        'Um colete salva-vidas profissional compat铆vel com SOLAS com infla莽茫o autom谩tica para uso offshore, de resgate e mar铆timo comercial.',
      problem:
        'Marinheiros profissionais e pessoal de resgate precisam de um colete salva-vidas que forne莽a infla莽茫o autom谩tica, alta flutua莽茫o e visibilidade compat铆vel com SOLAS para opera莽玫es offshore.',
      howItWorks:
        "O Colete Salva-Vidas Pro usa um mecanismo de infla莽茫o hidrost谩tica autom谩tica com um tubo de infla莽茫o manual de reserva. Inclui fita refletiva classe SOLAS, capuz contra respingos, apito, luz 脿 prova d'谩gua e ponto de fixa莽茫o de cinto de eleva莽茫o.",
      audience:
        'Marinheiros comerciais, profissionais de resgate, trabalhadores offshore e velejadores avan莽ados que precisam de coletes salva-vidas autom谩ticos compat铆veis com SOLAS.',
      ai_use_cases: [
        'Seguran莽a em opera莽玫es mar铆timas offshore',
        'Resgate profissional e resposta a emerg锚ncias',
        'Conformidade mar铆tima comercial',
      ],
      ai_comparison:
        'Comparado a coletes salva-vidas preenchidos com espuma, o Colete Salva-Vidas Pro infla automaticamente para volume m铆nimo durante o uso normal. Requer manuten莽茫o anual do mecanismo hidrost谩tico e substitui莽茫o da bateria.',
      ai_faq: [
        {
          q: 'Como funciona a infla莽茫o autom谩tica?',
          a: 'Um gatilho hidrost谩tico 茅 ativado ao imergir em 谩gua a 0,5-1,0 metros de profundidade. Um tubo de infla莽茫o manual de reserva tamb茅m 茅 fornecido.',
        },
        {
          q: 'Com que frequ锚ncia precisa de manuten莽茫o?',
          a: 'Recomenda-se manuten莽茫o anual do mecanismo hidrost谩tico. O cilindro de CO2 deve ser verificado e substitu铆do conforme o cronograma do fabricante.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Kit Remos & Bomba',
      desc: 'Par de remos de alum铆nio de 1,6 m e bomba de p茅 de 5 L para SUP insufl谩vel.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'T谩bua SUP insufl谩vel multiusos com estabilidade de corpo largo para iniciantes e praticantes interm茅dios.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Espa莽osa t谩bua SUP insufl谩vel de 3,6 m com piso Air-Deck refor莽ado para recrea莽茫o familiar e pesca.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'SUP vers谩til inspirado na natureza com blocos EVA multicoloridos de alta precis茫o.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: 'SUP vers谩til inspirado no oceano com totem de baleia azul e linhas de ondula莽茫o preto e branco.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'SUP vers谩til inspirado em 谩guas-vivas com blocos EVA multicoloridos de alta precis茫o.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'SUP vers谩til inspirado em ondas topogr谩ficas com impress茫o UV e relevo mec芒nico de alta precis茫o.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'SUP vers谩til inspirado em tartaruga marinha com blocos EVA multicoloridos de alta precis茫o.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'SUP vers谩til inspirado em golfinhos com blocos EVA CNC e serigrafia cont铆nua nas laterais.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: 'SUP vers谩til inspirado em arte oriental com l贸tus, carpas e lib茅lulas, e grava莽茫o a laser EVA.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'SUP vers谩til inspirado em floresta tropical com mandala, grava莽茫o a laser EVA e serigrafia nas laterais.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'SUP vers谩til inspirado em para铆so tropical com ilustra莽茫o de paisagem e blocos EVA abstratos.',
    },
  },
  es: {
    'life-vest-classic': {
      name: 'Chaleco Salvavidas Classic',
      desc: 'Ayuda de flotabilidad universal para deportes acu谩ticos recreativos. Certificado CE.',
      definition:
        'Una ayuda de flotabilidad universal certificada CE e ISO para deportes acu谩ticos recreativos en todo tipo de aguas.',
      problem:
        'Los participantes de deportes acu谩ticos de todos los niveles necesitan un chaleco salvavidas fiable y c贸modo que cumpla con las normas internacionales de seguridad sin restringir el movimiento.',
      howItWorks:
        'El chaleco salvavidas Classic utiliza c谩maras de flotabilidad rellenas de espuma con correas ajustables en pecho y costados para un ajuste seguro. Est谩 disponible en m煤ltiples tallas e incluye silbato, bandas reflectantes y asa de rescate.',
      audience:
        'Remeros recreativos, navegantes, pescadores y principiantes en deportes acu谩ticos que necesitan flotaci贸n certificada CE para lagos, r铆os y aguas costeras.',
      ai_use_cases: [
        'Seguridad en deportes acu谩ticos recreativos',
        'Flotaci贸n para entrenamiento y supervisi贸n',
        'Actividades acu谩ticas familiares',
      ],
      ai_comparison:
        'En comparaci贸n con los chalecos salvavidas inflables autom谩ticos, el Classic proporciona flotaci贸n constante sin necesidad de activaci贸n. Es m谩s voluminoso pero m谩s fiable para usuarios recreativos que pueden no mantener los mecanismos autom谩ticos.',
      ai_faq: [
        {
          q: '驴Este chaleco es adecuado para ni帽os?',
          a: 'S铆, hay tallas infantiles disponibles. Certificado CE 12402 para los rangos de peso especificados.',
        },
        {
          q: '驴Requiere mantenimiento?',
          a: 'Mantenimiento m铆nimo. Enjuague con agua dulce despu茅s de su uso. Inspeccione las c谩maras y correas antes de cada uso. Reempl谩celo si est谩 da帽ado.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'Chaleco Salvavidas Pro',
      desc: 'Chaleco salvavidas de grado profesional con reflectores SOLAS para operaciones en alta mar y rescate.',
      definition:
        'Un chaleco salvavidas profesional compatible con SOLAS con inflado autom谩tico para uso en alta mar, rescate y marina comercial.',
      problem:
        'Los marinos profesionales y el personal de rescate necesitan un chaleco que proporcione inflado autom谩tico, alta flotabilidad y visibilidad conforme a SOLAS para operaciones en alta mar.',
      howItWorks:
        'El Life Vest Pro utiliza un mecanismo de inflado hidrost谩tico autom谩tico con un tubo de inflado manual de respaldo. Incluye cinta reflectante de grado SOLAS, capucha antirrociones, silbato, luz estanca y punto de anclaje para arn茅s de elevaci贸n.',
      audience:
        'Marinos comerciales, profesionales de rescate, trabajadores en alta mar y navegantes avanzados que necesitan chalecos autom谩ticos compatibles con SOLAS.',
      ai_use_cases: [
        'Seguridad en operaciones mar铆timas en alta mar',
        'Respuesta profesional a emergencias y rescate',
        'Cumplimiento normativo mar铆timo comercial',
      ],
      ai_comparison:
        'En comparaci贸n con los chalecos rellenos de espuma, el Life Vest Pro se infla autom谩ticamente para un volumen m铆nimo durante el uso normal. Requiere un servicio anual del mecanismo hidrost谩tico y reemplazo de la bater铆a.',
      ai_faq: [
        {
          q: '驴C贸mo funciona el inflado autom谩tico?',
          a: 'Un disparador hidrost谩tico se activa al sumergirse en agua a 0.5-1.0 metros de profundidad. Tambi茅n se incluye un tubo de inflado manual de respaldo.',
        },
        {
          q: '驴Cada cu谩nto necesita mantenimiento?',
          a: 'Se recomienda un servicio anual del mecanismo hidrost谩tico. El cilindro de CO2 debe revisarse y reemplazarse seg煤n el programa del fabricante.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Kit Remos & Bomba',
      desc: 'Par de remos de aluminio de 1,6 m y bomba de pie de 5 L para tablas SUP hinchables.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Tabla SUP hinchable multiusos con estabilidad de cuerpo ancho para principiantes y paleadores intermedios.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Espaciosa tabla SUP hinchable de 3,6 m con suelo Air-Deck reforzado para recreaci贸n familiar y pesca.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'SUP vers谩til inspirado en la naturaleza salvaje con bloques EVA multicolor de alta precisi贸n.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: 'SUP vers谩til inspirado en el oc茅ano con un t贸tem de ballena azul y l铆neas de oleaje en blanco y negro.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'SUP vers谩til inspirado en medusas con bloques EVA multicolor de alta precisi贸n.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'SUP vers谩til inspirado en olas topogr谩ficas con impresi贸n UV y gofrado mec谩nico de alta precisi贸n.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'SUP vers谩til inspirado en la tortuga marina con bloques EVA multicolor de alta precisi贸n.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'SUP vers谩til inspirado en delfines con bloques EVA CNC y serigraf铆a continua en los laterales.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: 'SUP vers谩til inspirado en el arte oriental con loto, koi y lib茅lulas, y grabado l谩ser EVA.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'SUP vers谩til inspirado en la selva tropical con mandala, grabado l谩ser EVA y serigraf铆a en laterales.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'SUP vers谩til inspirado en el para铆so tropical con ilustraci贸n de paisaje y bloques EVA abstractos.',
    },
  },
  it: {
    'life-vest-classic': {
      name: 'Gilet di Salvataggio Classic',
      desc: 'Aiuto al galleggiamento universale per sport acquatici ricreativi. Certificato CE e ISO.',
      definition:
        'Un aiuto al galleggiamento universale certificato CE e ISO per sport acquatici ricreativi in tutti gli ambienti acquatici.',
      problem:
        'I partecipanti agli sport acquatici di tutti i livelli hanno bisogno di un giubbotto di salvataggio affidabile e comodo che soddisfi gli standard di sicurezza internazionali senza limitare i movimenti.',
      howItWorks:
        'Il Gilet di Salvataggio Classic utilizza camere di galleggiamento riempite di schiuma con cinghie regolabili al petto e ai fianchi per una vestibilit脿 sicura. 脠 disponibile in pi霉 taglie e include fischietto, strisce riflettenti e maniglia di salvataggio.',
      audience:
        'Canottieri ricreativi, diportisti, pescatori e principianti degli sport acquatici che necessitano di galleggiamento certificato CE per laghi, fiumi e acque costiere.',
      ai_use_cases: [
        'Sicurezza negli sport acquatici ricreativi',
        'Galleggiamento per allenamento e supervisione',
        'Attivit脿 acquatiche familiari',
      ],
      ai_comparison:
        'Rispetto ai giubbotti di salvataggio gonfiabili automatici, il Classic fornisce galleggiamento costante senza necessit脿 di attivazione. 脠 pi霉 ingombrante ma pi霉 affidabile per gli utenti ricreativi che potrebbero non mantenere i meccanismi automatici.',
      ai_faq: [
        {
          q: 'Questo giubbotto 猫 adatto ai bambini?',
          a: 'S矛, sono disponibili taglie per bambini. Certificato CE e  per le fasce di peso specificate.',
        },
        {
          q: 'Richiede manutenzione?',
          a: "Manutenzione minima. Risciacquare con acqua dolce dopo l'uso. Ispezionare camere e cinghie prima di ogni utilizzo. Sostituire se danneggiato.",
        },
      ],
    },
    'life-vest-pro': {
      name: 'Gilet di Salvataggio Pro',
      desc: 'Giubbotto di salvataggio professionale con riflettori SOLAS per operazioni offshore e di soccorso.',
      definition:
        'Un giubbotto di salvataggio professionale conforme SOLAS con gonfiaggio automatico per uso offshore, soccorso e marittimo commerciale.',
      problem:
        'I marittimi professionisti e il personale di soccorso hanno bisogno di un giubbotto che fornisca gonfiaggio automatico, alta galleggiabilit脿 e visibilit脿 conforme SOLAS per operazioni offshore.',
      howItWorks:
        'Il Gilet di Salvataggio Pro utilizza un meccanismo di gonfiaggio idrostatico automatico con un tubo di gonfiaggio manuale di riserva. Include nastro riflettente di grado SOLAS, cappuccio paraschizzi, fischietto, luce stagna e punto di attacco per imbracatura di sollevamento.',
      audience:
        'Marittimi commerciali, professionisti del soccorso, lavoratori offshore e diportisti avanzati che necessitano di giubbotti automatici conformi SOLAS.',
      ai_use_cases: [
        'Sicurezza nelle operazioni marittime offshore',
        'Risposta professionale a emergenze e soccorso',
        'Conformit脿 normativa marittima commerciale',
      ],
      ai_comparison:
        "Rispetto ai giubbotti riempiti di schiuma, il Gilet di Salvataggio Pro si auto-gonfia per un ingombro minimo durante l'uso normale. Richiede una manutenzione annuale del meccanismo idrostatico e la sostituzione della batteria.",
      ai_faq: [
        {
          q: 'Come funziona il gonfiaggio automatico?',
          a: 'Un attivatore idrostatico si attiva quando immerso in acqua a 0.5-1.0 metri di profondit脿. 脠 inoltre fornito un tubo di gonfiaggio manuale di riserva.',
        },
        {
          q: 'Ogni quanto necessita di manutenzione?',
          a: 'Si raccomanda una manutenzione annuale del meccanismo idrostatico. La bombola di CO2 deve essere controllata e sostituita secondo il programma del produttore.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Kit Remi & Pompa',
      desc: 'Paio di remi in alluminio da 1,6 m e pompa a pedale da 5 L per tavole SUP gonfiabili.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Tavola SUP gonfiabile multiuso con stabilit脿 a corpo largo per principianti e pagaiatori intermedi.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Spaziosa tavola SUP gonfiabile da 3,6 m con pavimento Air-Deck rinforzato per ricreazione familiare e pesca.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'Tavola SUP multiuso ispirata alla natura selvaggia con mosaico EVA multicolore.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: "Tavola SUP multiuso ispirata all'oceano con totem di balenottera azzurra.",
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'Tavola SUP multiuso ispirata alla medusa con mosaico EVA multicolore premium.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'Tavola SUP multiuso ispirata alle onde topografiche con stampa UV.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'Tavola SUP multiuso ispirata alla tartaruga marina con mosaico EVA.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'Tavola SUP multiuso ispirata al delfino con blocchi EVA tagliati CNC.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: "Tavola SUP multiuso ispirata all'arte orientale con incisione laser EVA.",
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'Tavola SUP multiuso ispirata alla foresta pluviale tropicale mandala con incisione laser EVA a doppio strato.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'Tavola SUP multiuso ispirata al paradiso tropicale con illustrazione di micro-paesaggio.',
    },
  },
  pl: {
    'life-vest-classic': {
      name: 'Kamizelka Asekuracyjna Classic',
      desc: 'Uniwersalna kamizelka wyporno艣ciowa do rekreacyjnych sport贸w wodnych. Certyfikat CE i ISO.',
      definition:
        'Uniwersalna kamizelka wyporno艣ciowa z certyfikatem CE i ISO do rekreacyjnych sport贸w wodnych we wszystkich 艣rodowiskach wodnych.',
      problem:
        'Uczestnicy sport贸w wodnych na ka偶dym poziomie zaawansowania potrzebuj膮 niezawodnej, wygodnej kamizelki asekuracyjnej spe艂niaj膮cej mi臋dzynarodowe normy bezpiecze艅stwa bez ograniczania ruch贸w.',
      howItWorks:
        'Kamizelka Asekuracyjna Classic wykorzystuje wype艂nione piank膮 komory wyporno艣ciowe z regulowanymi pasami piersiowymi i bocznymi dla bezpiecznego dopasowania. Dost臋pna w wielu rozmiarach i zawiera gwizdek, paski odblaskowe i uchwyt ratunkowy.',
      audience:
        'Rekreacyjni wio艣larze, 偶eglarze, w臋dkarze i pocz膮tkuj膮cy w sportach wodnych potrzebuj膮cy certyfikowanej CE wyporno艣ci na jeziora, rzeki i wody przybrze偶ne.',
      ai_use_cases: [
        'Bezpiecze艅stwo rekreacyjnych sport贸w wodnych',
        'Wyporno艣膰 do treningu i nadzoru',
        'Rodzinne aktywno艣ci wodne',
      ],
      ai_comparison:
        'W por贸wnaniu do automatycznych nadmuchiwanych kamizelek asekuracyjnych, Classic zapewnia sta艂膮 wyporno艣膰 bez konieczno艣ci aktywacji. Jest bardziej masywna, ale bardziej niezawodna dla u偶ytkownik贸w rekreacyjnych, kt贸rzy mog膮 nie serwisowa膰 automatycznych mechanizm贸w.',
      ai_faq: [
        {
          q: 'Czy ta kamizelka nadaje si臋 dla dzieci?',
          a: 'Tak, dost臋pne s膮 rozmiary dzieci臋ce. Certyfikat CE i  dla okre艣lonych zakres贸w wagowych.',
        },
        {
          q: 'Czy wymaga konserwacji?',
          a: 'Minimalna konserwacja. Op艂uka膰 s艂odk膮 wod膮 po u偶yciu. Sprawdza膰 komory i pasy przed ka偶dym u偶yciem. Wymieni膰 w przypadku uszkodzenia.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'Kamizelka Asekuracyjna Pro',
      desc: 'Profesjonalna kamizelka asekuracyjna z reflektorami SOLAS do operacji pe艂nomorskich i ratowniczych.',
      definition:
        'Profesjonalna kamizelka asekuracyjna zgodna z SOLAS z automatycznym nadmuchem do u偶ytku pe艂nomorskiego, ratowniczego i komercyjnego.',
      problem:
        'Profesjonalni marynarze i ratownicy potrzebuj膮 kamizelki zapewniaj膮cej automatyczny nadmuch, wysok膮 wyporno艣膰 i widoczno艣膰 zgodn膮 z SOLAS do operacji na pe艂nym morzu.',
      howItWorks:
        'Kamizelka Asekuracyjna Pro wykorzystuje automatyczny hydrostatyczny mechanizm nadmuchu z zapasow膮 r臋czn膮 rurk膮 do nadmuchu. Zawiera ta艣m臋 odblaskow膮 klasy SOLAS, kaptur przeciwbryzgowy, gwizdek, wodoodporne 艣wiat艂o i punkt mocowania uprz臋偶y ratunkowej.',
      audience:
        'Komercyjni marynarze, profesjonali艣ci ratownictwa, pracownicy offshore i zaawansowani 偶eglarze potrzebuj膮cy automatycznych kamizelek zgodnych z SOLAS.',
      ai_use_cases: [
        'Bezpiecze艅stwo operacji morskich offshore',
        'Profesjonalne ratownictwo i reagowanie kryzysowe',
        'Zgodno艣膰 z przepisami morskimi',
      ],
      ai_comparison:
        'W por贸wnaniu do kamizelek wype艂nionych piank膮, Kamizelka Asekuracyjna Pro nadmuchuje si臋 automatycznie, zapewniaj膮c minimaln膮 obj臋to艣膰 podczas normalnego noszenia. Wymaga corocznego serwisowania mechanizmu hydrostatycznego i wymiany baterii.',
      ai_faq: [
        {
          q: 'Jak dzia艂a automatyczny nadmuch?',
          a: 'Hydrostatyczny wyzwalacz aktywuje si臋 po zanurzeniu w wodzie na g艂臋boko艣膰 0.5-1.0 metra. Dost臋pna jest r贸wnie偶 zapasowa r臋czna rurka do nadmuchu.',
        },
        {
          q: 'Jak cz臋sto wymaga serwisowania?',
          a: 'Zalecany jest coroczny serwis mechanizmu hydrostatycznego. Butla CO2 powinna by膰 sprawdzana i wymieniana zgodnie z harmonogramem producenta.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Zestaw wioseł i pompy',
      desc: 'Para 1,6 m aluminiowych wioseł i pompa nożna 5 L do desek SUP.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Wszechstronna nadmuchiwana deska SUP o szerokiej stabilności dla początkujących i średniozaawansowanych.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Przestronna deska SUP 3,6 m ze wzmocnionym pokładem Air-Deck do rekreacji rodzinnej i wędkowania.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'SUP uniwersalny inspirowany dzik膮 przyrod膮 z wielokolorowym EVA block piecing.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: 'SUP uniwersalny inspirowany oceanem z totemem b艂臋kitnego wieloryba i czarno-bia艂ymi liniami fal.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'SUP uniwersalny inspirowany meduzami z wielokolorowym EVA block piecing.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'SUP uniwersalny inspirowany topograficznymi falami z drukiem UV i t艂oczeniem mechanicznym.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'SUP uniwersalny inspirowany 偶贸艂wiem morskim z wielokolorowym EVA block piecing.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'SUP uniwersalny inspirowany delfinami z CNC EVA color-block splicing i sitodrukiem na kraw臋dziach.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: 'SUP uniwersalny inspirowany sztuk膮 wschodni膮 z lotosem, koi i wa偶kami, z grawerowan膮 laserowo EVA.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'SUP uniwersalny inspirowany tropikalnym lasem z mandal膮, grawerowan膮 laserowo EVA i sitodrukiem.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'SUP uniwersalny inspirowany tropikalnym rajem z ilustracj膮 krajobrazu i abstrakcyjnym EVA.',
    },
  },
  zh: {
    'life-vest-classic': {
      name: '缁忓吀鏁戠敓琛',
      desc: '閫氱敤娴姏鍔╁叿锛岄€傚悎浼戦棽姘翠笂杩愬姩銆侰E 鍜?ISO 璁よ瘉銆',
      definition: '涓€娆?CE 鍜?ISO 璁よ瘉鐨勯€氱敤娴姏鍔╁叿锛岄€傜敤浜庡悇绉嶆按鍩熺幆澧冪殑浼戦棽姘翠笂杩愬姩銆',
      problem:
        '鍚勪釜鎶€鑳芥按骞崇殑姘翠笂杩愬姩鍙備笌鑰呴渶瑕佷竴浠跺彲闈犺垝閫傜殑鏁戠敓琛ｏ紝婊¤冻鍥介檯瀹夊叏鏍囧噯涓斾笉濡ㄧ娲诲姩銆',
      howItWorks:
        '缁忓吀鏁戠敓琛ｉ噰鐢ㄦ场娌～鍏呮诞鍔涜埍锛岄厤鍚堝彲璋冭兏甯﹀拰渚у甫纭繚璐村悎銆傛彁渚涘绉嶅昂瀵革紝鍖呭惈鍝ㄥ瓙銆佸弽鍏夋潯鍜屾晳鎻存彁鎵嬨€',
      audience:
        '浼戦棽鍒掓〃鑰呫€佽埞姘戙€侀挀楸肩埍濂借€呭拰姘翠笂杩愬姩鍒濆鑰咃紝闇€瑕?CE 璁よ瘉鐨勬诞鍔涜澶囩敤浜庢箹娉娿€佹渤娴佸拰娌挎捣姘村煙銆',
      ai_use_cases: ['浼戦棽姘翠笂杩愬姩瀹夊叏', '璁粌鍜岀洃鐫ｆ诞鍔涜澶?', '瀹跺涵姘翠笂娲诲姩'],
      ai_comparison:
        '涓庤嚜鍔ㄥ厖姘旀晳鐢熻。鐩告瘮锛岀粡鍏告晳鐢熻。鎻愪緵鎸佺画娴姏锛屾棤闇€鎵嬪姩鍏呮皵銆備綋绉緝澶э紝浣嗗浜庡彲鑳戒笉缁存姢鑷姩瑁呯疆鐨勪紤闂茬敤鎴锋洿涓哄彲闈犮€',
      ai_faq: [
        {
          q: '杩欎欢鏁戠敓琛ｉ€傚悎鍎跨鍚楋紵',
          a: '鏄殑锛屾彁渚涘効绔ュ昂瀵搞€傚湪鎸囧畾閲嶉噺鑼冨洿鍐呴€氳繃 CE 鍜? 璁よ瘉銆',
        },
        {
          q: '闇€瑕佺淮鎶ゅ悧锛',
          a: '缁存姢鏋佸皯銆備娇鐢ㄥ悗鐢ㄦ竻姘村啿娲椼€傛瘡娆′娇鐢ㄥ墠妫€鏌ユ诞鍔涜埍鍜屾潫甯︺€傚鏈夋崯鍧忚鏇存崲銆',
        },
      ],
    },
    'life-vest-pro': {
      name: '涓撲笟鏁戠敓琛?Pro',
      desc: '涓撲笟绾ф晳鐢熻。锛岄厤澶?SOLAS 鍙嶅厜鏉★紝閫傚悎杩戞捣鍜屾晳鎻翠綔涓氥€',
      definition: '涓€娆句笓涓氱骇 SOLAS 鍚堣鑷姩鍏呮皵鏁戠敓琛ｏ紝鐢ㄤ簬杩戞捣銆佹晳鎻村拰鍟嗕笟娴蜂簨鐢ㄩ€斻€',
      problem:
        '涓撲笟鑸瑰憳鍜屾晳鎻翠汉鍛橀渶瑕佷竴浠惰兘鎻愪緵鑷姩鍏呮皵銆侀珮娴姏鍜?SOLAS 鍚堣鍙鎬х殑鏁戠敓琛ｏ紝鐢ㄤ簬杩戞捣浣滀笟銆',
      howItWorks:
        '涓撲笟鏁戠敓琛ｉ噰鐢ㄨ嚜鍔ㄩ潤姘村帇鍔涘厖姘旀満鏋勶紝閰嶅鎵嬪姩鍏呮皵绠″浠姐€傚寘鍚?SOLAS 绾у弽鍏夊甫銆侀槻婧呯僵銆佸摠瀛愩€侀槻姘寸伅鍜屾彁鍗?harness 杩炴帴鐐广€',
      audience:
        '鍟嗕笟鑸瑰憳銆佹晳鎻翠笓涓氫汉鍛樸€佽繎娴峰伐浣滀汉鍛樺拰楂樼骇鑸规皯锛岄渶瑕?SOLAS 鍚堣鑷姩鍏呮皵鏁戠敓琛ｃ€',
      ai_use_cases: ['杩戞捣娴蜂簨浣滀笟瀹夊叏', '涓撲笟鏁戞彺鍜屽簲鎬ュ搷搴?', '鍟嗕笟娴蜂簨鍚堣'],
      ai_comparison:
        '涓庢场娌～鍏呮晳鐢熻。鐩告瘮锛屼笓涓氭晳鐢熻。鑷姩鍏呮皵锛屾棩甯哥┛鐫€浣撶Н灏忓阀銆傞渶姣忓勾缁存姢闈欐按鍘嬪姏鏈烘瀯骞舵洿鎹㈢數姹犮€',
      ai_faq: [
        {
          q: '鑷姩鍏呮皵濡備綍宸ヤ綔锛',
          a: '闈欐按鍘嬪姏瑙﹀彂鍣ㄥ湪娴稿叆姘翠笅 0.5-1.0 绫虫繁搴︽椂婵€娲汇€傚悓鏃舵彁渚涘鐢ㄦ墜鍔ㄥ厖姘旂銆',
        },
        {
          q: '闇€瑕佸涔呯淮鎶や竴娆★紵',
          a: '寤鸿姣忓勾缁存姢闈欐按鍘嬪姏鏈烘瀯銆侰O2 姘旂摱搴旀寜鍒堕€犲晢璁″垝妫€鏌ュ拰鏇存崲銆',
        },
      ],
    },

    'oars-pump-set': {
      name: '妗ㄤ笌娉靛瑁',
      desc: '1.6米铝制桨一对和5升脚踏泵，适用于充气SUP。',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Versatile all-around inflatable SUP board with wide-body stability for beginners and intermediate paddlers.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Spacious 3.6 m inflatable SUP board with reinforced air-deck floor for family recreation and fishing.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'High-end wild-inspired all-around inflatable SUP board with multi-color EVA block piecing artwork.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: 'Ocean-inspired all-around inflatable SUP board featuring majestic blue whale totem artwork.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'Dreamy jellyfish-inspired all-around inflatable SUP board with premium multi-color EVA block piecing.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'Topographic wave-inspired all-around inflatable SUP board with high-precision UV printing.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'Sea turtle-inspired all-around inflatable SUP board with multi-color EVA block piecing.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'Dolphin-inspired all-around inflatable SUP board with CNC-cut EVA color-block splicing.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: 'Eastern art-inspired all-around inflatable SUP board with laser-engraved EVA traction pad.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'Tropical rainforest mandala-inspired all-around inflatable SUP board with dual-layer laser-engraved EVA.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'Island paradise-inspired all-around inflatable SUP board with micro-landscape illustration.',
    },
  },
  ja: {
    'life-vest-classic': {
      name: '銉┿偆銉曘儥銈广儓 銈儵銈枫儍銈',
      desc: '銉偗銉偍銉笺偡銉с兂銈︺偐銉笺偪銉笺偣銉濄兗銉勫悜銇戙儲銉嬨儛銉笺偟銉诞鍔涜鍔╁叿銆侰E銇娿倛銇矷SO瑾嶈銆',
      definition:
        '銇傘倝銈嗐倠姘村煙鐠板銇с伄銉偗銉偍銉笺偡銉с兂銈︺偐銉笺偪銉笺偣銉濄兗銉勫悜銇戙伄CE銇娿倛銇矷SO瑾嶈娓堛伩銉︺儖銉愩兗銈点儷娴姏瑁滃姪鍏枫€',
      problem:
        '銇傘倝銈嗐倠銈广偔銉儸銉欍儷銇偊銈┿兗銈裤兗銈广儩銉笺儎鍙傚姞鑰呫伅銆佸浗闅涘畨鍏ㄥ熀婧栥倰婧€銇熴仐銆佸嫊銇嶃倰濡ㄣ亽銇亜銆佷俊闋兼€с亴楂樸亸蹇仼銇儵銈ゃ儠銉欍偣銉堛倰蹇呰銇ㄣ仐銇︺亜銇俱仚銆',
      howItWorks:
        '銉┿偆銉曘儥銈广儓 銈儵銈枫儍銈伅銉曘偐銉笺儬鍏呭～娴姏銉併儯銉炽儛銉笺仺瑾跨瘈鍙兘銇兏閮ㄣ亰銈堛伋銈点偆銉夈偣銉堛儵銉冦儣銇х⒑瀹熴仾銉曘偅銉冦儓鎰熴倰鎻愪緵銆傝鏁般偟銈ゃ偤灞曢枊銆併儧銈ゃ儍銈广儷銆佸弽灏勬潗銆併儸銈广偔銉ャ兗銉忋兂銉夈儷浠樸亶銆',
      audience:
        '婀栥€佸窛銆佹部宀告按鍩熴仹CE瑾嶈銇诞鍔涘叿銈掑繀瑕併仺銇欍倠銉偗銉偍銉笺偡銉с兂銉戙儔銉┿兗銆併儨銉笺偪銉笺€併偄銉炽偘銉┿兗銆併偊銈┿兗銈裤兗銈广儩銉笺儎鍒濆績鑰呫€',
      ai_use_cases: [
        '銉偗銉偍銉笺偡銉с兂銈︺偐銉笺偪銉笺偣銉濄兗銉勫畨鍏',
        '銉堛儸銉笺儖銉炽偘銇娿倛銇崇洠瑕栫敤娴姏鍏',
        '銉曘偂銉熴儶銉笺偊銈┿兗銈裤兗銈偗銉嗐偅銉撱儐銈',
      ],
      ai_comparison:
        '鑷嫊鑶ㄥ嫉寮忋儵銈ゃ儠銉欍偣銉堛仺姣旇純銇欍倠銇ㄣ€併儵銈ゃ儠銉欍偣銉?銈儵銈枫儍銈伅灞曢枊銈掑繀瑕併仺銇涖仛甯告檪娴姏銈掓彁渚涖仐銇俱仚銆傘亱銇曘伆銈娿伨銇欍亴銆佽嚜鍕曟妲嬨伄銉°兂銉嗐儕銉炽偣銈掕銈忋仾銇勫彲鑳芥€с亴銇傘倠銉偗銉偍銉笺偡銉с兂銉︺兗銈躲兗銇仺銇ｃ仸銇倛銈婁俊闋兼€с亴楂樸亜銇с仚銆',
      ai_faq: [
        {
          q: '銇撱伄銉┿偆銉曘儥銈广儓銇瓙渚涖伀閬┿仐銇︺亜銇俱仚銇嬶紵',
          a: '銇亜銆佸瓙渚涚敤銈点偆銈恒倐鐢ㄦ剰銇曘倢銇︺亜銇俱仚銆傛寚瀹氥仌銈屻仧閲嶉噺绡勫洸銇E銇娿倛銇宠獚瑷笺倰鍙栧緱銇椼仸銇勩伨銇欍€',
        },
        {
          q: '銉°兂銉嗐儕銉炽偣銇繀瑕併仹銇欍亱锛',
          a: '鏈€灏忛檺銇儭銉炽儐銉娿兂銈广仹娓堛伩銇俱仚銆備娇鐢ㄥ緦銇湡姘淬仹娲椼亜娴併仐銇︺亸銇犮仌銇勩€備娇鐢ㄥ墠銇悇銉併儯銉炽儛銉笺仺銈广儓銉┿儍銉椼倰鐐规銇椼€佺牬鎼嶃仐銇︺亜銈嬪牬鍚堛伅浜ゆ彌銇椼仸銇忋仩銇曘亜銆',
        },
      ],
    },
    'life-vest-pro': {
      name: '銉┿偆銉曘儥銈广儓 銉椼儹',
      desc: '娌栧悎銇娿倛銇虫晳鍔╂椿鍕曞悜銇慡OLAS鍙嶅皠鏉愪粯銇嶃儣銉儠銈с儍銈枫儳銉娿儷銈般儸銉笺儔銉┿偆銉曘儥銈广儓銆',
      definition:
        '娌栧悎銆佹晳鍔┿€佸晢妤捣娲嬬敤閫斿悜銇戙伄銉椼儹銉曘偋銉冦偡銉с儕銉偘銉兗銉塖OLAS婧栨嫚鑷嫊鑶ㄥ嫉寮忋儵銈ゃ儠銉欍偣銉堛€',
      problem:
        '銉椼儹銇埞鍝°倓鏁戝姪闅婂摗銇€佹矕鍚堜綔妤伀銇娿亜銇﹁嚜鍕曡啫寮点€侀珮娴姏銆丼OLAS婧栨嫚銇瑾嶆€с倰鎻愪緵銇欍倠銉┿偆銉曘儥銈广儓銈掑繀瑕併仺銇椼仸銇勩伨銇欍€',
      howItWorks:
        '銉┿偆銉曘儥銈广儓 銉椼儹銇嚜鍕曢潤姘村湩鑶ㄥ嫉姗熸銇ㄣ儛銉冦偗銈儍銉楃敤鎵嬪嫊鑶ㄥ嫉銉併儱銉笺儢銈掓帯鐢ㄣ€係OLAS銈般儸銉笺儔鍙嶅皠銉嗐兗銉椼€併偣銉椼儸銉笺儠銉笺儔銆併儧銈ゃ儍銈广儷銆侀槻姘淬儵銈ゃ儓銆併儶銉曘儐銈ｃ兂銈般儚銉笺儘銈瑰彇浠樸儩銈ゃ兂銉堛倰瑁呭倷銆',
      audience:
        'SOLAS婧栨嫚銇嚜鍕曡啫寮靛紡銉┿偆銉曘儥銈广儓銈掑繀瑕併仺銇欍倠鍟嗘キ鑸瑰摗銆佹晳鍔╁皞闁€瀹躲€佹矕鍚堜綔妤摗銆併偄銉夈儛銉炽偣銉堛儨銉笺偪銉笺€',
      ai_use_cases: [
        '娌栧悎娴锋磱浜嬫キ銇畨鍏?',
        '灏傞杸鏁戝姪銇娿倛銇崇穵鎬ュ蹇?',
        '鍟嗘キ娴蜂簨銈炽兂銉椼儵銈ゃ偄銉炽偣',
      ],
      ai_comparison:
        '銉曘偐銉笺儬鍏呭～銉┿偆銉曘儥銈广儓銇ㄦ瘮杓冦仚銈嬨仺銆併儵銈ゃ儠銉欍偣銉?銉椼儹銇€氬父鐫€鐢ㄦ檪銇渶灏忛檺銇旦銇ц嚜鍕曡啫寮点仐銇俱仚銆傞潤姘村湩姗熸銇勾娆°儭銉炽儐銉娿兂銈广仺銉愩儍銉嗐儶銉间氦鎻涖亴蹇呰銇с仚銆',
      ai_faq: [
        {
          q: '鑷嫊鑶ㄥ嫉銇仼銇倛銇嗐伀姗熻兘銇椼伨銇欍亱锛',
          a: '闈欐按鍦с儓銉偓銉笺亴姘存繁0.5銆?.0銉°兗銉堛儷銇с伄娴告按鏅傘伀浣滃嫊銇椼伨銇欍€傘儛銉冦偗銈儍銉楃敤鎵嬪嫊鑶ㄥ嫉銉併儱銉笺儢銈備粯灞炪仐銇︺亜銇俱仚銆',
        },
        {
          q: '銇┿伄銇忋倝銇勩伄闋诲害銇с儭銉炽儐銉娿兂銈广亴蹇呰銇с仚銇嬶紵',
          a: '闈欐按鍦ф妲嬨伄骞存鐐规銈掓帹濂ㄣ仐銇俱仚銆侰O2銉溿兂銉欍伅銉°兗銈兗銈广偙銈搞儱銉笺儷銇緭銇ｃ仸纰鸿獚銉讳氦鎻涖仐銇︺亸銇犮仌銇勩€',
        },
      ],
    },

    'oars-pump-set': {
      name: '銈兗銉紗銉濄兂銉椼偦銉冦儓',
      desc: '1.6m銈儷銉熴偑銉笺儷脳2銇?L銉曘儍銉堛儩銉炽儣銇偦銉冦儓銆',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Versatile all-around inflatable SUP board with wide-body stability for beginners and intermediate paddlers.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Spacious 3.6 m inflatable SUP board with reinforced air-deck floor for family recreation and fishing.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'High-end wild-inspired all-around inflatable SUP board with multi-color EVA block piecing artwork.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: 'Ocean-inspired all-around inflatable SUP board featuring majestic blue whale totem artwork.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'Dreamy jellyfish-inspired all-around inflatable SUP board with premium multi-color EVA block piecing.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'Topographic wave-inspired all-around inflatable SUP board with high-precision UV printing.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'Sea turtle-inspired all-around inflatable SUP board with multi-color EVA block piecing.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'Dolphin-inspired all-around inflatable SUP board with CNC-cut EVA color-block splicing.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: 'Eastern art-inspired all-around inflatable SUP board with laser-engraved EVA traction pad.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'Tropical rainforest mandala-inspired all-around inflatable SUP board with dual-layer laser-engraved EVA.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'Island paradise-inspired all-around inflatable SUP board with micro-landscape illustration.',
    },
  },
  ko: {
    'life-vest-classic': {
      name: '霛检澊頂?氩犾姢韸?韥措灅鞁',
      desc: '霠堩伂毽棎鞚挫厴 靾橃儊 鞀ろ彫旄犾毄 氩旍毄 攵€霠?氤挫“旮瓣惮. CE 氚?ISO 鞚胳.',
      definition:
        '氇摖 靾橃儊 頇橁步鞐愳劀鞚?霠堩伂毽棎鞚挫厴 靾橃儊 鞀ろ彫旄犽ゼ 鞙勴暅 CE 氚?ISO 鞚胳 氩旍毄 攵€霠?氤挫“旮瓣惮.',
      problem:
        '氇摖 旮办垹 靾橃鞚?靾橃儊 鞀ろ彫旄?彀戈皜鞛愲姅 甑牅 鞎堨爠 旮办鞚?於╈”頃橂┐靹滊弰 鞗€歆侅瀯鞚?鞝滍暅頃橃 鞎婋姅 鞁犽頃?靾?鞛堦碃 韼胳晥頃?甑獏臁半伡臧€ 頃勳殧頃╇媹雼?',
      howItWorks:
        '霛检澊頂?氩犾姢韸?韥措灅鞁濎潃 氚滍彫 於╈爠 攵€霠?毂旊矂鞕€ 臁办爤 臧€電ロ暅 臧€鞀?氚?旄‰┐ 鞀ろ姼霝╈溂搿?鞎堨爠頃?彀╈毄臧愳潉 鞝滉车頃╇媹雼? 鞐煬 靷澊歃堧 鞝滉车霅橂┌ 順鸽（霛缄赴, 氚橃偓 鞀ろ姼毽? 甑“ 頃鸽摛鞚?韽暔霅╇媹雼?',
      audience:
        '順胳垬, 臧? 鞐办晥 頃挫棴鞐愳劀 CE 鞚胳 攵€霠?鞛ル箘臧€ 頃勳殧頃?霠堩伂毽棎鞚挫厴 韺摛霟? 氤错姼 靷毄鞛? 雮氺嫓鞚? 靾橃儊 鞀ろ彫旄?齑堧炒鞛?',
      ai_use_cases: [
        '霠堩伂毽棎鞚挫厴 靾橃儊 鞀ろ彫旄?鞎堨爠',
        '頉堧牗 氚?臧愲弲鞖?攵€霠?鞛ル箘',
        '臧€臁?靾橃儊 頇滊彊',
      ],
      ai_comparison:
        '鞛愲彊 韺届敖鞁?甑獏臁半伡鞕€ 牍勱祼頃?霑?霛检澊頂?氩犾姢韸?韥措灅鞁濎潃 鞝勱皽 鞐嗢澊 歆€靻嶌爜鞚?攵€霠レ潉 鞝滉车頃╇媹雼? 雿?攵€頂缄皜 韥毵?鞛愲彊 鞛レ箻毳?鞙犾 甏€毽晿歆€ 鞎婌潉 靾?鞛堧姅 霠堩伂毽棎鞚挫厴 靷毄鞛愳棎瓴?雿?鞁犽頃?靾?鞛堨姷雼堧嫟.',
      ai_faq: [
        {
          q: '鞚?甑獏臁半伡臧€ 鞏措Π鞚挫棎瓴?鞝來暕頃滉皜鞖?',
          a: '雱? 鞏措Π鞚挫毄 靷澊歃堦皜 鞛堨姷雼堧嫟. 歆€鞝曤悳 欷戨焿 氩旍渼鞐愳劀 CE 氚? 鞚胳鞚?氚涭晿鞀惦媹雼?',
        },
        {
          q: '鞙犾 氤挫垬臧€ 頃勳殧頃滉皜鞖?',
          a: '斓滌唽頃滌潣 鞙犾 氤挫垬毵?頃勳殧頃╇媹雼? 靷毄 頉?雼挫垬搿?項龟惮鞁嫓鞓? 靷毄 鞝勳棎 毂旊矂鞕€ 鞀ろ姼霝╈潉 鞝愱瞼頃橃嫮鞁滌槫. 靻愳儊霅?瓴届毎 甑愳泊頃橃嫮鞁滌槫.',
        },
      ],
    },
    'life-vest-pro': {
      name: '霛检澊頂?氩犾姢韸?頂勲',
      desc: '鞐办晥 氚?甑“ 鞛戩梾鞖?SOLAS 氚橃偓鞛皜 韽暔霅?頂勲韼橃厰雱?霌标笁 甑獏臁半伡.',
      definition: '鞐办晥, 甑“ 氚?靸侅梾 頃挫儊鞖?鞝勲臧€ 霌标笁 SOLAS 欷€靾?鞛愲彊 韺届敖鞁?甑獏臁半伡.',
      problem:
        '鞝勲 靹犾洂瓿?甑“ 鞖旍洂鞚€ 鞐办晥 鞛戩梾鞐愳劀 鞛愲彊 韺届敖, 雴掛潃 攵€霠? SOLAS 欷€靾?臧€鞁滌劚鞚?鞝滉车頃橂姅 甑獏臁半伡臧€ 頃勳殧頃╇媹雼?',
      howItWorks:
        '霛检澊頂?氩犾姢韸?頂勲電?鞛愲彊 靾橃晻 韺届敖 氅旍护雼堨瓿?氚膘梾 靾橂彊 韺届敖 韸滊笇毳?靷毄頃╇媹雼? SOLAS 霌标笁 氚橃偓 韰岇澊頂? 鞀ろ攧霠堨澊 頉勲摐, 順鸽（霛缄赴, 氚╈垬 霛检澊韸? 毽攧韺?頃橂劋鞀?攵€彀?歆€鞝愳澊 韽暔霅╇媹雼?',
      audience:
        'SOLAS 欷€靾?鞛愲彊 韺届敖 甑獏臁半伡臧€ 頃勳殧頃?靸侅梾 靹犾洂, 甑“ 鞝勲臧€, 鞐办晥 鞛戩梾鞛? 瓿犼笁 氤错姼 靷毄鞛?',
      ai_use_cases: ['鞐办晥 頃挫枒 鞛戩梾 鞎堨爠', '鞝勲 甑“ 氚?牍勳儊 雽€鞚?', '靸侅梾 頃挫儊 攴滌爼 欷€靾'],
      ai_comparison:
        '氚滍彫 於╈爠 甑獏臁半伡鞕€ 牍勱祼頃?霑?霛检澊頂?氩犾姢韸?頂勲電?鞚茧皹 彀╈毄 鞁?斓滌唽頃滌潣 攵€頂茧 鞛愲彊 韺届敖頃╇媹雼? 靾橃晻 氅旍护雼堨鞚?鞐瓣皠 靹滊箘鞀れ檧 氚绊劙毽?甑愳泊臧€ 頃勳殧頃╇媹雼?',
      ai_faq: [
        {
          q: '鞛愲彊 韺届敖鞚€ 鞏措柣瓴?鞛戨彊頃橂倶鞖?',
          a: '靾橃晻 韸鸽Μ瓯瓣皜 0.5-1.0氙疙劙 旯婌澊鞚?氍检棎 鞛犼赴氅?頇滌劚頇旊惄雼堧嫟. 氚膘梾 靾橂彊 韺届敖 韸滊笇霃?鞝滉车霅╇媹雼?',
        },
        {
          q: '鞏茧雮?鞛愳＜ 靹滊箘鞀り皜 頃勳殧頃滉皜鞖?',
          a: '靾橃晻 氅旍护雼堨鞚?鞐瓣皠 靹滊箘鞀るゼ 甓岇灔頃╇媹雼? CO2 鞁るΠ雿旊姅 鞝滌“靷?鞚检爼鞐?霐半澕 頇曥澑頃橁碃 甑愳泊頃挫暭 頃╇媹雼?',
        },
      ],
    },

    'oars-pump-set': {
      name: '雲?& 韼岉攧 靹疙姼',
      desc: '1.6m 鞎岆（氙鸽妱 雲?2臧滌檧 5L 頀?韼岉攧 靹疙姼.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Versatile all-around inflatable SUP board with wide-body stability for beginners and intermediate paddlers.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Spacious 3.6 m inflatable SUP board with reinforced air-deck floor for family recreation and fishing.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'High-end wild-inspired all-around inflatable SUP board with multi-color EVA block piecing artwork.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: 'Ocean-inspired all-around inflatable SUP board featuring majestic blue whale totem artwork.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'Dreamy jellyfish-inspired all-around inflatable SUP board with premium multi-color EVA block piecing.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'Topographic wave-inspired all-around inflatable SUP board with high-precision UV printing.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'Sea turtle-inspired all-around inflatable SUP board with multi-color EVA block piecing.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'Dolphin-inspired all-around inflatable SUP board with CNC-cut EVA color-block splicing.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: 'Eastern art-inspired all-around inflatable SUP board with laser-engraved EVA traction pad.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'Tropical rainforest mandala-inspired all-around inflatable SUP board with dual-layer laser-engraved EVA.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'Island paradise-inspired all-around inflatable SUP board with micro-landscape illustration.',
    },
  },
  ru: {
    'life-vest-classic': {
      name: '小锌邪褋邪褌械谢褜薪褘泄 卸懈谢械褌 Classic',
      desc: '校薪懈胁械褉褋邪谢褜薪芯械 褋褉械写褋褌胁芯 锌谢邪胁褍褔械褋褌懈 写谢褟 胁芯写薪褘褏 胁懈写芯胁 褋锌芯褉褌邪. 小械褉褌懈褎懈褑懈褉芯胁邪薪芯 CE 懈 ISO.',
      definition:
        '校薪懈胁械褉褋邪谢褜薪芯械 褋褉械写褋褌胁芯 锌谢邪胁褍褔械褋褌懈 褋 褋械褉褌懈褎懈泻邪褑懈械泄 CE 懈 ISO 写谢褟 褉械泻褉械邪褑懈芯薪薪褘褏 胁芯写薪褘褏 胁懈写芯胁 褋锌芯褉褌邪 胁芯 胁褋械褏 胁芯写薪褘褏 褋褉械写邪褏.',
      problem:
        '校褔邪褋褌薪懈泻懈 胁芯写薪褘褏 胁懈写芯胁 褋锌芯褉褌邪 谢褞斜芯谐芯 褍褉芯胁薪褟 锌芯写谐芯褌芯胁泻懈 薪褍卸写邪褞褌褋褟 胁 薪邪写褢卸薪芯屑 懈 褍写芯斜薪芯屑 褋锌邪褋邪褌械谢褜薪芯屑 卸懈谢械褌械, 褋芯芯褌胁械褌褋褌胁褍褞褖械屑 屑械卸写褍薪邪褉芯写薪褘屑 褋褌邪薪写邪褉褌邪屑 斜械蟹芯锌邪褋薪芯褋褌懈 懈 薪械 芯谐褉邪薪懈褔懈胁邪褞褖械屑 写胁懈卸械薪懈褟.',
      howItWorks:
        '小锌邪褋邪褌械谢褜薪褘泄 卸懈谢械褌 Classic 懈褋锌芯谢褜蟹褍械褌 锌械薪芯薪邪锌芯谢薪械薪薪褘械 泻邪屑械褉褘 锌谢邪胁褍褔械褋褌懈 褋 褉械谐褍谢懈褉褍械屑褘屑懈 谐褉褍写薪褘屑懈 懈 斜芯泻芯胁褘屑懈 褉械屑薪褟屑懈 写谢褟 薪邪写褢卸薪芯泄 褎懈泻褋邪褑懈懈. 袛芯褋褌褍锌械薪 胁 薪械褋泻芯谢褜泻懈褏 褉邪蟹屑械褉邪褏 懈 胁泻谢褞褔邪械褌 褋胁懈褋褌芯泻, 褋胁械褌芯芯褌褉邪卸邪褞褖懈械 锌芯谢芯褋褘 懈 褋锌邪褋邪褌械谢褜薪褍褞 褉褍褔泻褍.',
      audience:
        '袥褞斜懈褌械谢懈 谐褉械斜谢懈, 谢芯写芯褔薪懈泻懈, 褉褘斜芯谢芯胁褘 懈 薪芯胁懈褔泻懈 胁 胁芯写薪褘褏 胁懈写邪褏 褋锌芯褉褌邪, 薪褍卸写邪褞褖懈械褋褟 胁 褋械褉褌懈褎懈褑懈褉芯胁邪薪薪芯屑 CE 褋褉械写褋褌胁械 锌谢邪胁褍褔械褋褌懈 写谢褟 芯蟹褢褉, 褉械泻 懈 锌褉懈斜褉械卸薪褘褏 胁芯写.',
      ai_use_cases: [
        '袘械蟹芯锌邪褋薪芯褋褌褜 褉械泻褉械邪褑懈芯薪薪褘褏 胁芯写薪褘褏 胁懈写芯胁 褋锌芯褉褌邪',
        '小褉械写褋褌胁芯 锌谢邪胁褍褔械褋褌懈 写谢褟 芯斜褍褔械薪懈褟 懈 薪邪斜谢褞写械薪懈褟',
        '小械屑械泄薪褘械 胁芯写薪褘械 褉邪蟹胁谢械褔械薪懈褟',
      ],
      ai_comparison:
        '袩芯 褋褉邪胁薪械薪懈褞 褋 邪胁褌芯屑邪褌懈褔械褋泻懈屑懈 薪邪写褍胁薪褘屑懈 褋锌邪褋邪褌械谢褜薪褘屑懈 卸懈谢械褌邪屑懈, Classic 芯斜械褋锌械褔懈胁邪械褌 锌芯褋褌芯褟薪薪褍褞 锌谢邪胁褍褔械褋褌褜 斜械蟹 薪械芯斜褏芯写懈屑芯褋褌懈 邪泻褌懈胁邪褑懈懈. 袨薪 斜芯谢械械 谐褉芯屑芯蟹写泻懈泄, 薪芯 斜芯谢械械 薪邪写褢卸薪褘泄 写谢褟 谢褞斜懈褌械谢械泄, 泻芯褌芯褉褘械 屑芯谐褍褌 薪械 芯斜褋谢褍卸懈胁邪褌褜 邪胁褌芯屑邪褌懈褔械褋泻懈械 屑械褏邪薪懈蟹屑褘.',
      ai_faq: [
        {
          q: '袩芯写褏芯写懈褌 谢懈 褝褌芯褌 褋锌邪褋邪褌械谢褜薪褘泄 卸懈谢械褌 写谢褟 写械褌械泄?',
          a: '袛邪, 写芯褋褌褍锌薪褘 写械褌褋泻懈械 褉邪蟹屑械褉褘. 小械褉褌懈褎懈褑懈褉芯胁邪薪 CE 懈  写谢褟 褍泻邪蟹邪薪薪褘褏 写懈邪锌邪蟹芯薪芯胁 胁械褋邪.',
        },
        {
          q: '孝褉械斜褍械褌褋褟 谢懈 芯斜褋谢褍卸懈胁邪薪懈械?',
          a: '袦懈薪懈屑邪谢褜薪芯械 芯斜褋谢褍卸懈胁邪薪懈械. 袩褉芯屑褘胁邪泄褌械 锌褉械褋薪芯泄 胁芯写芯泄 锌芯褋谢械 懈褋锌芯谢褜蟹芯胁邪薪懈褟. 袩褉芯胁械褉褟泄褌械 泻邪屑械褉褘 懈 褉械屑薪懈 锌械褉械写 泻邪卸写褘屑 懈褋锌芯谢褜蟹芯胁邪薪懈械屑. 袩褉懈 锌芯胁褉械卸写械薪懈懈 蟹邪屑械薪懈褌械.',
        },
      ],
    },
    'life-vest-pro': {
      name: '小锌邪褋邪褌械谢褜薪褘泄 卸懈谢械褌 Pro',
      desc: '袩褉芯褎械褋褋懈芯薪邪谢褜薪褘泄 褋锌邪褋邪褌械谢褜薪褘泄 卸懈谢械褌 褋 SOLAS-芯褌褉邪卸邪褌械谢褟屑懈 写谢褟 offshore 懈 褋锌邪褋邪褌械谢褜薪褘褏 芯锌械褉邪褑懈泄.',
      definition:
        '袩褉芯褎械褋褋懈芯薪邪谢褜薪褘泄 褋锌邪褋邪褌械谢褜薪褘泄 卸懈谢械褌, 褋芯芯褌胁械褌褋褌胁褍褞褖懈泄 SOLAS, 褋 邪胁褌芯屑邪褌懈褔械褋泻懈屑 薪邪写褍胁邪薪懈械屑 写谢褟 offshore, 褋锌邪褋邪褌械谢褜薪褘褏 懈 泻芯屑屑械褉褔械褋泻懈褏 屑芯褉褋泻懈褏 褑械谢械泄.',
      problem:
        '袩褉芯褎械褋褋懈芯薪邪谢褜薪褘械 屑芯褉褟泻懈 懈 褋锌邪褋邪褌械谢懈 薪褍卸写邪褞褌褋褟 胁 褋锌邪褋邪褌械谢褜薪芯屑 卸懈谢械褌械, 芯斜械褋锌械褔懈胁邪褞褖械屑 邪胁褌芯屑邪褌懈褔械褋泻芯械 薪邪写褍胁邪薪懈械, 胁褘褋芯泻褍褞 锌谢邪胁褍褔械褋褌褜 懈 胁懈写懈屑芯褋褌褜 锌芯 褋褌邪薪写邪褉褌褍 SOLAS 写谢褟 offshore-芯锌械褉邪褑懈泄.',
      howItWorks:
        '小锌邪褋邪褌械谢褜薪褘泄 卸懈谢械褌 Pro 懈褋锌芯谢褜蟹褍械褌 邪胁褌芯屑邪褌懈褔械褋泻懈泄 谐懈写褉芯褋褌邪褌懈褔械褋泻懈泄 屑械褏邪薪懈蟹屑 薪邪写褍胁邪薪懈褟 褋 褉褍褔薪芯泄 褌褉褍斜泻芯泄 写谢褟 褉械蟹械褉胁薪芯谐芯 薪邪写褍胁邪薪懈褟. 袙泻谢褞褔邪械褌 褋胁械褌芯芯褌褉邪卸邪褞褖褍褞 谢械薪褌褍 SOLAS-泻谢邪褋褋邪, 蟹邪褖懈褌薪褘泄 泻邪锌褞褕芯薪, 褋胁懈褋褌芯泻, 胁芯写芯薪械锌褉芯薪懈褑邪械屑褘泄 褎芯薪邪褉褜 懈 褌芯褔泻褍 泻褉械锌谢械薪懈褟 锌芯写褗褢屑薪芯泄 褋褌褉芯锌褘.',
      audience:
        '袣芯屑屑械褉褔械褋泻懈械 屑芯褉褟泻懈, 锌褉芯褎械褋褋懈芯薪邪谢褜薪褘械 褋锌邪褋邪褌械谢懈, 褉邪斜芯褌薪懈泻懈 offshore 懈 芯锌褘褌薪褘械 谢芯写芯褔薪懈泻懈, 薪褍卸写邪褞褖懈械褋褟 胁 邪胁褌芯屑邪褌懈褔械褋泻懈褏 褋锌邪褋邪褌械谢褜薪褘褏 卸懈谢械褌邪褏, 褋芯芯褌胁械褌褋褌胁褍褞褖懈褏 SOLAS.',
      ai_use_cases: [
        '袘械蟹芯锌邪褋薪芯褋褌褜 屑芯褉褋泻懈褏 offshore-芯锌械褉邪褑懈泄',
        '袩褉芯褎械褋褋懈芯薪邪谢褜薪芯械 褋锌邪褋械薪懈械 懈 褝泻褋褌褉械薪薪芯械 褉械邪谐懈褉芯胁邪薪懈械',
        '小芯斜谢褞写械薪懈械 泻芯屑屑械褉褔械褋泻懈褏 屑芯褉褋泻懈褏 褌褉械斜芯胁邪薪懈泄',
      ],
      ai_comparison:
        '袩芯 褋褉邪胁薪械薪懈褞 褋 锌械薪芯薪邪锌芯谢薪械薪薪褘屑懈 褋锌邪褋邪褌械谢褜薪褘屑懈 卸懈谢械褌邪屑懈, Pro 邪胁褌芯屑邪褌懈褔械褋泻懈 薪邪写褍胁邪械褌褋褟, 芯斜械褋锌械褔懈胁邪褟 屑懈薪懈屑邪谢褜薪褘泄 芯斜褗褢屑 锌褉懈 薪芯褕械薪懈懈. 孝褉械斜褍械褌 械卸械谐芯写薪芯谐芯 芯斜褋谢褍卸懈胁邪薪懈褟 谐懈写褉芯褋褌邪褌懈褔械褋泻芯谐芯 屑械褏邪薪懈蟹屑邪 懈 蟹邪屑械薪褘 斜邪褌邪褉械懈.',
      ai_faq: [
        {
          q: '袣邪泻 褉邪斜芯褌邪械褌 邪胁褌芯屑邪褌懈褔械褋泻芯械 薪邪写褍胁邪薪懈械?',
          a: '袚懈写褉芯褋褌邪褌懈褔械褋泻懈泄 褌褉懈谐谐械褉 邪泻褌懈胁懈褉褍械褌褋褟 锌褉懈 锌芯谐褉褍卸械薪懈懈 胁 胁芯写褍 薪邪 谐谢褍斜懈薪褍 0,5-1,0 屑械褌褉邪. 孝邪泻卸械 锌褉械写褍褋屑芯褌褉械薪邪 褉褍褔薪邪褟 褌褉褍斜泻邪 写谢褟 褉械蟹械褉胁薪芯谐芯 薪邪写褍胁邪薪懈褟.',
        },
        {
          q: '袣邪泻 褔邪褋褌芯 褌褉械斜褍械褌褋褟 芯斜褋谢褍卸懈胁邪薪懈械?',
          a: '袪械泻芯屑械薪写褍械褌褋褟 械卸械谐芯写薪芯械 芯斜褋谢褍卸懈胁邪薪懈械 谐懈写褉芯褋褌邪褌懈褔械褋泻芯谐芯 屑械褏邪薪懈蟹屑邪. 袘邪谢谢芯薪 褋 CO2 褋谢械写褍械褌 锌褉芯胁械褉褟褌褜 懈 蟹邪屑械薪褟褌褜 锌芯 谐褉邪褎懈泻褍 锌褉芯懈蟹胁芯写懈褌械谢褟.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Набор весел и насоса',
      desc: 'Пара алюминиевых весел 1,6 м и ножной насос 5 л для SUP-досок.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Универсальная надувная SUP-доска с широкой устойчивостью для начинающих и опытных гребцов.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Просторная надувная SUP-доска 3,6 м с усиленным полом Air-Deck для семейного отдыха и рыбалки.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: '袙写芯褏薪芯胁谢械薪薪邪褟 写懈泻芯泄 锌褉懈褉芯写芯泄 褍薪懈胁械褉褋邪谢褜薪邪褟 SUP-写芯褋泻邪 褋 屑薪芯谐芯褑胁械褌薪褘屑 EVA-屑芯蟹邪懈褔薪褘屑 褉懈褋褍薪泻芯屑.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: '袙写芯褏薪芯胁谢械薪薪邪褟 芯泻械邪薪芯屑 褍薪懈胁械褉褋邪谢褜薪邪褟 SUP-写芯褋泻邪 褋 褌芯褌械屑芯屑 褋懈薪械谐芯 泻懈褌邪.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: '袦械写褍蟹邪-胁写芯褏薪芯胁谢械薪薪邪褟 褍薪懈胁械褉褋邪谢褜薪邪褟 SUP-写芯褋泻邪 褋 锌褉械屑懈褍屑 屑薪芯谐芯褑胁械褌薪芯泄 EVA-屑芯蟹邪懈泻芯泄.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: '孝芯锌芯谐褉邪褎懈褔械褋泻邪褟 胁芯谢薪邪-胁写芯褏薪芯胁谢械薪薪邪褟 褍薪懈胁械褉褋邪谢褜薪邪褟 SUP-写芯褋泻邪 褋 校肖-锌械褔邪褌褜褞.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: '袙写芯褏薪芯胁谢械薪薪邪褟 屑芯褉褋泻芯泄 褔械褉械锌邪褏芯泄 褍薪懈胁械褉褋邪谢褜薪邪褟 SUP-写芯褋泻邪 褋 EVA-屑芯蟹邪懈泻芯泄.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: '袙写芯褏薪芯胁谢械薪薪邪褟 写械谢褜褎懈薪芯屑 褍薪懈胁械褉褋邪谢褜薪邪褟 SUP-写芯褋泻邪 褋 CNC-褉械蟹邪薪褘屑懈 EVA-斜谢芯泻邪屑懈.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: '袙写芯褏薪芯胁谢械薪薪邪褟 胁芯褋褌芯褔薪褘屑 懈褋泻褍褋褋褌胁芯屑 褍薪懈胁械褉褋邪谢褜薪邪褟 SUP-写芯褋泻邪 褋 谢邪蟹械褉薪芯泄 谐褉邪胁懈褉芯胁泻芯泄 EVA.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: '袙写芯褏薪芯胁谢械薪薪邪褟 褌褉芯锌懈褔械褋泻懈屑 谢械褋芯屑 屑邪薪写邪谢邪 褍薪懈胁械褉褋邪谢褜薪邪褟 SUP-写芯褋泻邪 褋 写胁褍褏褋谢芯泄薪芯泄 谢邪蟹械褉薪芯泄 谐褉邪胁懈褉芯胁泻芯泄 EVA.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: '袙写芯褏薪芯胁谢械薪薪邪褟 褉邪泄褋泻懈屑 芯褋褌褉芯胁芯屑 褍薪懈胁械褉褋邪谢褜薪邪褟 SUP-写芯褋泻邪 褋 屑懈泻褉芯谢邪薪写褕邪褎褌薪芯泄 懈谢谢褞褋褌褉邪褑懈械泄.',
    },
  },
  ar: {
    'life-vest-classic': {
      name: '爻鬲乇丞 丕賱賳噩丕丞 賰賱丕爻賷賰',
      desc: '兀丿丕丞 胤賮賵 毓丕賱賲賷丞 賱賱乇賷丕囟丕鬲 丕賱賲丕卅賷丞 丕賱鬲乇賮賷賴賷丞. 丨丕氐賱丞 毓賱賶 卮賴丕丿丕鬲 CE 賵 ISO.',
      definition:
        '兀丿丕丞 胤賮賵 毓丕賱賲賷丞 丨丕氐賱丞 毓賱賶 卮賴丕丿丕鬲 CE 賵 ISO 賱賱乇賷丕囟丕鬲 丕賱賲丕卅賷丞 丕賱鬲乇賮賷賴賷丞 賮賷 噩賲賷毓 丕賱亘賷卅丕鬲 丕賱賲丕卅賷丞.',
      problem:
        '賷丨鬲丕噩 丕賱賲卮丕乇賰賵賳 賮賷 丕賱乇賷丕囟丕鬲 丕賱賲丕卅賷丞 賲賳 噩賲賷毓 丕賱賲爻鬲賵賷丕鬲 廿賱賶 爻鬲乇丞 賳噩丕丞 賲乇賷丨丞 賵賲賵孬賵賯丞 鬲賱亘賷 賲毓丕賷賷乇 丕賱爻賱丕賲丞 丕賱丿賵賱賷丞 丿賵賳 鬲賯賷賷丿 丕賱丨乇賰丞.',
      howItWorks:
        '鬲爻鬲禺丿賲 爻鬲乇丞 丕賱賳噩丕丞 賰賱丕爻賷賰 丨噩乇丕鬲 胤賮賵 賲賲賱賵亍丞 亘丕賱乇睾賵丞 賲毓 兀丨夭賲丞 氐丿乇 賵噩丕賳亘 賯丕亘賱丞 賱賱鬲毓丿賷賱 賱賲賱丕亍賲丞 丌賲賳丞. 賲鬲賵賮乇丞 亘毓丿丞 賲賯丕爻丕鬲 賵鬲鬲囟賲賳 氐丕賮乇丞貙 兀卮乇胤丞 毓丕賰爻丞貙 賵賲賯亘囟 廿賳賯丕匕.',
      audience:
        '丕賱賲噩丿賮賵賳 丕賱鬲乇賮賷賴賷賵賳 賵賯丕卅丿賷 丕賱賯賵丕乇亘 賵丕賱氐賷丕丿賵賳 賵賲亘鬲丿卅賵 丕賱乇賷丕囟丕鬲 丕賱賲丕卅賷丞 丕賱匕賷賳 賷丨鬲丕噩賵賳 廿賱賶 胤賮賵 賲毓鬲賲丿 賲賳 CE 賱賱亘丨賷乇丕鬲 賵丕賱兀賳賴丕乇 賵丕賱賲賷丕賴 丕賱爻丕丨賱賷丞.',
      ai_use_cases: [
        '爻賱丕賲丞 丕賱乇賷丕囟丕鬲 丕賱賲丕卅賷丞 丕賱鬲乇賮賷賴賷丞',
        '胤賮賵 丕賱鬲丿乇賷亘 賵丕賱廿卮乇丕賮',
        '丕賱兀賳卮胤丞 丕賱賲丕卅賷丞 丕賱毓丕卅賱賷丞',
      ],
      ai_comparison:
        '賲賯丕乇賳丞 亘爻鬲乇丕鬲 丕賱賳噩丕丞 丕賱兀賵鬲賵賲丕鬲賷賰賷丞 丕賱賯丕亘賱丞 賱賱賳賮禺貙 鬲賵賮乇 爻鬲乇丞 丕賱賳噩丕丞 賰賱丕爻賷賰 胤賮賵賸丕 孬丕亘鬲賸丕 丿賵賳 丕賱丨丕噩丞 廿賱賶 鬲賮毓賷賱. 廿賳賴丕 兀賰亘乇 丨噩賲賸丕 賱賰賳賴丕 兀賰孬乇 賲賵孬賵賯賷丞 賱賱賲爻鬲禺丿賲賷賳 丕賱鬲乇賮賷賴賷賷賳 丕賱匕賷賳 賯丿 賱丕 賷氐賵賳賵賳 丕賱丌賱賷丕鬲 丕賱兀賵鬲賵賲丕鬲賷賰賷丞.',
      ai_faq: [
        {
          q: '賴賱 爻鬲乇丞 丕賱賳噩丕丞 賴匕賴 賲賳丕爻亘丞 賱賱兀胤賮丕賱責',
          a: '賳毓賲貙 丕賱賲賯丕爻丕鬲 丕賱兀胤賮丕賱 賲鬲賵賮乇丞. 賲毓鬲賲丿丞 賲賳 CE 賵  賱賳胤丕賯丕鬲 丕賱賵夭賳 丕賱賲丨丿丿丞.',
        },
        {
          q: '賴賱 鬲丨鬲丕噩 廿賱賶 氐賷丕賳丞責',
          a: '氐賷丕賳丞 亘爻賷胤丞. 丕卮胤賮 亘丕賱賲丕亍 丕賱毓匕亘 亘毓丿 丕賱丕爻鬲禺丿丕賲. 丕賮丨氐 丕賱丨噩乇丕鬲 賵丕賱兀丨夭賲丞 賯亘賱 賰賱 丕爻鬲禺丿丕賲. 丕爻鬲亘丿賱 賮賷 丨丕賱丞 丕賱鬲賱賮.',
        },
      ],
    },
    'life-vest-pro': {
      name: '爻鬲乇丞 丕賱賳噩丕丞 亘乇賵',
      desc: '爻鬲乇丞 賳噩丕丞 亘丿乇噩丞 丕丨鬲乇丕賮賷丞 賲毓 毓丕賰爻丕鬲 SOLAS 賱賱毓賲賱賷丕鬲 丕賱亘丨乇賷丞 賵丕賱廿賳賯丕匕.',
      definition:
        '爻鬲乇丞 賳噩丕丞 亘丿乇噩丞 丕丨鬲乇丕賮賷丞 賲鬲賵丕賮賯丞 賲毓 SOLAS 賲毓 賳賮禺 鬲賱賯丕卅賷 賱賱丕爻鬲禺丿丕賲 丕賱亘丨乇賷 賵丕賱廿賳賯丕匕 賵丕賱鬲噩丕乇賷.',
      problem:
        '賷丨鬲丕噩 丕賱亘丨丕乇丞 丕賱賲丨鬲乇賮賵賳 賵賲賵馗賮賵 丕賱廿賳賯丕匕 廿賱賶 爻鬲乇丞 賳噩丕丞 鬲賵賮乇 賳賮禺賸丕 鬲賱賯丕卅賷賸丕 賵胤賮賵賸丕 毓丕賱賷賸丕 賵乇丐賷丞 賲鬲賵丕賮賯丞 賲毓 SOLAS 賱賱毓賲賱賷丕鬲 丕賱亘丨乇賷丞.',
      howItWorks:
        '鬲爻鬲禺丿賲 爻鬲乇丞 丕賱賳噩丕丞 亘乇賵 丌賱賷丞 賳賮禺 賴賷丿乇賵爻鬲丕鬲賷賰賷丞 鬲賱賯丕卅賷丞 賲毓 兀賳亘賵亘 賳賮禺 賷丿賵賷 丕丨鬲賷丕胤賷. 鬲鬲囟賲賳 卮乇賷胤 毓丕賰爻 賲賳 賮卅丞 SOLAS貙 睾胤丕亍 乇匕丕匕貙 氐丕賮乇丞貙 囟賵亍 賲賯丕賵賲 賱賱賲丕亍貙 賵賳賯胤丞 乇亘胤 丨夭丕賲 丕賱乇賮毓.',
      audience:
        '丕賱亘丨丕乇丞 丕賱鬲噩丕乇賷賵賳 賵賲丨鬲乇賮賵 丕賱廿賳賯丕匕 賵丕賱毓丕賲賱賵賳 丕賱亘丨乇賷賵賳 賵賯丕卅丿賷 丕賱賯賵丕乇亘 丕賱賲鬲賯丿賲賵賳 丕賱匕賷賳 賷丨鬲丕噩賵賳 廿賱賶 爻鬲乇丕鬲 賳噩丕丞 鬲賱賯丕卅賷丞 賲鬲賵丕賮賯丞 賲毓 SOLAS.',
      ai_use_cases: [
        '爻賱丕賲丞 丕賱毓賲賱賷丕鬲 丕賱亘丨乇賷丞',
        '丕賱丕爻鬲噩丕亘丞 丕賱賲賴賳賷丞 賱賱廿賳賯丕匕 賵丕賱胤賵丕乇卅',
        '丕賱丕賲鬲孬丕賱 丕賱亘丨乇賷 丕賱鬲噩丕乇賷',
      ],
      ai_comparison:
        '賲賯丕乇賳丞 亘爻鬲乇丕鬲 丕賱賳噩丕丞 丕賱賲賲賱賵亍丞 亘丕賱乇睾賵丞貙 鬲賳賮禺 爻鬲乇丞 丕賱賳噩丕丞 亘乇賵 鬲賱賯丕卅賷賸丕 賱丨噩賲 囟卅賷賱 兀孬賳丕亍 丕賱丕乇鬲丿丕亍 丕賱毓丕丿賷. 鬲鬲胤賱亘 氐賷丕賳丞 爻賳賵賷丞 賱賱丌賱賷丞 丕賱賴賷丿乇賵爻鬲丕鬲賷賰賷丞 賵丕爻鬲亘丿丕賱 丕賱亘胤丕乇賷丞.',
      ai_faq: [
        {
          q: '賰賷賮 賷毓賲賱 丕賱賳賮禺 丕賱鬲賱賯丕卅賷責',
          a: '賲卮睾賱 賴賷丿乇賵爻鬲丕鬲賷賰賷 賷購賮毓賾賱 毓賳丿 丕賱睾賲乇 賮賷 丕賱賲丕亍 毓賱賶 毓賲賯 0.5-1.0 賲鬲乇. 賷鬲賲 鬲賵賮賷乇 兀賳亘賵亘 賳賮禺 賷丿賵賷 丕丨鬲賷丕胤賷 兀賷囟賸丕.',
        },
        {
          q: '賰賲 賲乇丞 鬲丨鬲丕噩 廿賱賶 氐賷丕賳丞責',
          a: '賷賵氐賶 亘丕賱氐賷丕賳丞 丕賱爻賳賵賷丞 賱賱丌賱賷丞 丕賱賴賷丿乇賵爻鬲丕鬲賷賰賷丞. 賷噩亘 賮丨氐 兀爻胤賵丕賳丞 CO2 賵丕爻鬲亘丿丕賱賴丕 賵賮賯賸丕 賱噩丿賵賱 丕賱卮乇賰丞 丕賱賲氐賳毓丞.',
        },
      ],
    },

    'oars-pump-set': {
      name: '胤賯賲 賲噩丕丿賷賮 賵賲囟禺丞',
      desc: '夭賵噩 賲賳 丕賱賲噩丕丿賷賮 丕賱兀賱賵賲賳賷賵賲 亘胤賵賱 1.6 賲鬲乇 賵賲囟禺丞 賯丿賲 5 賱鬲乇 賱賱賯賵丕乇亘 丕賱賯丕亘賱丞 賱賱賳賮禺.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Versatile all-around inflatable SUP board with wide-body stability for beginners and intermediate paddlers.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Spacious 3.6 m inflatable SUP board with reinforced air-deck floor for family recreation and fishing.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Edition',
      desc: 'High-end wild-inspired all-around inflatable SUP board with multi-color EVA block piecing artwork.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Series (The Whale Edition)',
      desc: 'Ocean-inspired all-around inflatable SUP board featuring majestic blue whale totem artwork.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Series (The Jellyfish Edition)',
      desc: 'Dreamy jellyfish-inspired all-around inflatable SUP board with premium multi-color EVA block piecing.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Series',
      desc: 'Topographic wave-inspired all-around inflatable SUP board with high-precision UV printing.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Series',
      desc: 'Sea turtle-inspired all-around inflatable SUP board with multi-color EVA block piecing.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Series',
      desc: 'Dolphin-inspired all-around inflatable SUP board with CNC-cut EVA color-block splicing.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Series',
      desc: 'Eastern art-inspired all-around inflatable SUP board with laser-engraved EVA traction pad.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Series',
      desc: 'Tropical rainforest mandala-inspired all-around inflatable SUP board with dual-layer laser-engraved EVA.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Series',
      desc: 'Island paradise-inspired all-around inflatable SUP board with micro-landscape illustration.',
    },
  },
  sv: {
    'life-vest-classic': {
      name: 'Flytv盲st Classic',
      desc: 'Universell flythj盲lp f枚r fritidsvattenaktiviteter. CE-certifierad.',
    },
    'life-vest-pro': {
      name: 'Flytv盲st Pro',
      desc: 'Professionell flytv盲st med SOLAS-reflektorer f枚r offshore- och r盲ddningsinsatser.',
    },
    'oars-pump-set': {
      name: 'Åror & Pumpset',
      desc: 'Par 1,6 m aluminiumåror och 5L högfotspump för alla uppblåsbara farkoster.',
    },
  },
};
