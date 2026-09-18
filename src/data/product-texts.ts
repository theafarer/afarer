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
    'sup-horizon-lines': {
      name: 'Série Horizon Lines',
      desc: 'SUP gonflable tout-terrain premium de 11 pieds avec construction en stratifié fusion, pad antidérapant façon peau de reptile et trois ailerons clips amovibles pour toutes les conditions.',
      definition:
        'Un SUP gonflable premium tout-terrain de 11 pieds avec renforts en stratifié fusion légers, un pad antidérapant façon peau de reptile avec soutien de voûte plantaire, et un système triple ailerons clips pour les lacs, rivières et eaux côtières abritées.',
      problem:
        'Les pagayeurs polyvalents veulent une seule planche qui gère aussi bien la croisière en eau plate que les conditions côtières hachées, tout en restant assez légère pour voyager et assez rigide pour un ressenti de coque dure.',
      howItWorks:
        'La série Horizon Lines associe des couches de renfort en stratifié fusion à une construction drop-stitch PVC homologuée 15 PSI. Trois ailerons clips entièrement amovibles avec angle de dérive optimisé permettent d’ajuster la tenue de cap et la maniabilité, et une pompe double action ou une pompe électrique 12V optionnelle atteint la pression maximale rapidement.',
      audience:
        'Acheteurs débutants, croisiéristes en eau plate, amateurs de manœuvres avancées et voyageurs qui veulent un SUP gonflable tout-terrain portable avec un pack complet optionnel.',
      ai_use_cases: [
        'Paddle tout-terrain en eau plate et côtière',
        'Pratique de manœuvres avancées et touring',
        'Aventures SUP portables prêtes à voyager',
      ],
      ai_comparison:
        'Comparé aux SUP tout-terrain standard, la Horizon Lines se distingue par ses renforts en stratifié fusion et un système triple ailerons qui permet d’ajuster la tenue de cap et la maniabilité pour tout, des lacs paisibles aux eaux côtières hachées.',
      ai_faq: [
        {
          q: 'Peut-on personnaliser les ailerons selon les conditions ?',
          a: 'Oui. Les trois ailerons clips sont entièrement amovibles avec un angle de dérive optimisé, ce qui permet d’ajuster la configuration pour la tenue de cap en eau plate, les courants de rivière ou les conditions côtières hachées.',
        },
        {
          q: 'Quelles options de gonflage sont incluses ?',
          a: 'Une pompe double action haute pression/haut débit gonfle sur les deux temps, et la planche est compatible avec une pompe électrique 12VDC 20PSI optionnelle qui atteint 15 PSI en environ 9 minutes.',
        },
      ],
    },
    'sup-rheo': {
      name: 'Série RHEO',
      desc: 'SUP gonflable de course professionnel de 14 pieds avec construction hybride carbone, nez déplaçant les vagues et tenue de cap d’élite pour les sprints et les courses longue distance.',
      definition:
        'Un SUP gonflable de course professionnel de 14 pieds avec une matrice hybride carbone sans flex, un nez déplaçant les vagues, et un pont étroit de 26 pouces conçu pour les sprints, les chronos et l’entraînement à haute cadence.',
      problem:
        'Les compétiteurs ont besoin d’une rigidité de planche dure et d’une tenue de cap irréprochable sur un modèle gonflable, sans flex, sans traînée ni esthétique industrielle terne des SUP de course traditionnels.',
      howItWorks:
        'La série RHEO utilise une construction gonflable hybride carbone qui élimine le flex pour une plateforme d’une rigidité absolue. Son nez déplaçant les vagues fend le clapot avec un minimum de traînée, tandis que la largeur de 26 pouces réduit la surface mouillée et l’aileron 2+1 maintient la tenue de cap à grande vitesse tout en facilitant les virages rapides.',
      audience:
        'Compétiteurs cherchant à battre leur record, amateurs de vitesse et pagayeurs avancés qui veulent les performances d’une planche dure avec la portabilité gonflable, ainsi que les acheteurs OEM/ODM.',
      ai_use_cases: [
        'Course SUP compétitive et entraînement sprint',
        'Fitness haute intensité et intervalles',
        'Courses techniques en voies étroites',
      ],
      ai_comparison:
        'Comparé aux SUP de course traditionnels, la RHEO offre une construction gonflable hybride carbone sans flex et un nez déplaçant les vagues pour une pénétration exceptionnelle dans le clapot de face, tout en se rangeant pour le voyage.',
      ai_faq: [
        {
          q: 'La RHEO est-elle stable pour les débutants ?',
          a: 'Elle est conçue pour les compétiteurs et les pagayeurs avancés ; la largeur de 26 pouces privilégie la vitesse, les débutants devraient donc commencer sur une planche tout-terrain plus large.',
        },
        {
          q: 'À quoi sert l’aileron 2+1 ?',
          a: 'L’aileron central maintient une excellente tenue de cap à grande vitesse, tandis que les ailerons latéraux apportent la stabilité latérale lors des virages rapides larges sur bouées.',
        },
      ],
    },
    'sup-fishing': {
      name: 'SUP de Pêche Gonflable',
      desc: 'SUP de pêche gonflable stable type catamaran avec chambres à air latérales, supports de cannes et règle de mesure intégrée pour pêcher debout en lançant et ramenant.',
      definition:
        'Un SUP de pêche gonflable de 11,5 pieds avec chambres à air latérales pour une stabilité secondaire de niveau catamaran, des supports de cannes, une règle de mesure sur le pont et une coque inspirée du kayak pour lancer, ramener et naviguer debout.',
      problem:
        'Les pêcheurs ont besoin d’une plateforme stable pour pêcher debout qui ne vacille ni ne chavire lorsqu’on ramène une prise ou qu’on évolue dans des eaux hachées, tout en restant assez portable pour rejoindre des spots éloignés.',
      howItWorks:
        'Le SUP de pêche gonflable utilise d’épaisses chambres à air latérales qui confèrent une stabilité secondaire exceptionnelle proche d’un catamaran ou d’un outrigger. Une pointe et une poupe effilées conservent la largeur du pont avec une tenue de cap de kayak, et le noyau drop-stitch PVC est homologué 15 PSI pour une plateforme rigide et fiable.',
      audience:
        'Pêcheurs aux leurres et au bar, pêcheurs à la mouche et en kayak, et excursionnistes qui transportent glacières, sièges de camp et épuisettes, ainsi que les acheteurs OEM/ODM.',
      ai_use_cases: [
        'Pêche aux leurres debout',
        'Pêche à la mouche depuis une plateforme gonflable',
        'Excursions de pêche multi-jours avec chargement',
      ],
      ai_comparison:
        'Contrairement aux paddles standard, ce SUP de pêche ajoute des chambres à air latérales type catamaran qui augmentent fortement la stabilité latérale debout, au lancer et à la remontée, avec supports de cannes et règle de mesure intégrés.',
      ai_faq: [
        {
          q: 'La planche reste-t-elle stable en combattant un poisson ?',
          a: 'Oui. Les chambres à air latérales offrent une stabilité secondaire de type catamaran qui évite les vacillements et le chavirement lorsqu’on pêche debout, qu’on lance ou qu’on ramène une prise.',
        },
        {
          q: 'Peut-on y monter un sondeur ?',
          a: 'Oui. Deux supports professionnels en plastique noir devant le pad antidérapant peuvent accueillir des supports de cannes, des sondeurs ou du matériel de pêche essentiel.',
        },
      ],
    },
    'sup-mini': {
      name: 'Série Mini SUP',
      desc: 'Mini SUP gonflable ultra-polyvalent qui fait office de paddle compact, de planche de surf gonflable et de bodyboard pour enfants, adultes et animaux.',
      definition:
        'Un mini SUP gonflable ultra-polyvalent de 7 pieds qui hybride paddle compact, planche de surf gonflable et bodyboard, avec un profil court, large et très stable pour les enfants, les adultes et les animaux sur les vagues, lacs, piscines et baies calmes.',
      problem:
        'Les familles et les riders polyvalents veulent une seule plateforme gonflable compacte qui serve de paddle enfant, de surf ou bodyboard adulte, et de plateforme flottante pour animaux.',
      howItWorks:
        'La série Mini SUP utilise un profil court, large et très stable avec un rapport volume/longueur optimisé pour une flottabilité maximale. Sa ligne de rocker et son bord réactifs attrapent les petites vagues, et un pont résistant aux perforations supporte les pattes de chien tout en restant léger et rapide à gonfler.',
      audience:
        'Les parents qui initient les enfants au paddle, les adultes qui veulent un surf ou bodyboard portable, et les propriétaires d’animaux qui emmènent leur chien sur l’eau, ainsi que les acheteurs OEM/ODM.',
      ai_use_cases: [
        'Initiation paddle et surf des enfants',
        'Bodyboard adulte et surf de shorebreak',
        'Jeux en lac, piscine et baie calme avec animaux',
      ],
      ai_comparison:
        'Contrairement aux SUP standard, la Mini en plus d’être ultra-portable, cumule paddle, planche de surf gonflable et bodyboard en un seul produit, avec un pont résistant conçu pour les animaux et plusieurs coloris.',
      ai_faq: [
        {
          q: 'Les adultes peuvent-ils utiliser la Mini SUP ?',
          a: 'Oui. Le rapport volume/longueur optimisé supporte aussi bien les enfants que les adultes, que ce soit en paddle debout, en bodyboard ou en attrapant de petites vagues.',
        },
        {
          q: 'Le pont est-il adapté aux chiens ?',
          a: 'Oui. Le pont utilise des matériaux résistants aux perforations conçus pour supporter les griffes et les pattes des chiens.',
        },
      ],
    },
    'sup-giant': {
      name: 'SUP Géant Multi-Personnes',
      desc: 'Géant SUP gonflable multi-personnes de 16,5 pieds homologué 650 kg avec gonflage à double valve, coque de 8 pouces, multiples poignées et dérives multi-ailerons.',
      definition:
        'Un SUP gonflable géant multi-personnes de 16,5 pieds avec coque de 8 pouces, gonflage à double valve, configuration multi-poignées, dérive multi-ailerons et double systèmes de bungees de chargement pour le paddle en groupe, la location et les événements.',
      problem:
        'Les groupes, les opérateurs de location et les organisateurs d’événements ont besoin d’une seule grande planche gonflable qui transporte plusieurs riders en toute sécurité et reste rigide sous des charges concentrées.',
      howItWorks:
        'Le SUP géant multi-personnes utilise un PVC drop-stitch renforcé homologué 15 PSI avec un système à double valve pour que deux personnes puissent gonfler le grand volume d’air en même temps. Huit à douze poignées renforcées le long des bords plus les poignées de nez et de poupe facilitent le portage et la remontée à bord, tandis qu’une configuration 4+1 ou tri-aileron garde la planche sur son cap.',
      audience:
        'Opérateurs de location, clubs de sports nautiques, organisateurs d’événements de team building, grandes familles et aventuriers en groupe, ainsi que les acheteurs OEM/ODM.',
      ai_use_cases: [
        'Team building en entreprise et en groupe',
        'Flottes de location et sorties de club',
        'Sorties lacustres en famille ou multi-rides',
      ],
      ai_comparison:
        'Contrairement aux SUP standard, le SUP géant transporte jusqu’à 650 kg avec une coque de 8 pouces et un gonflage à double valve, grâce à un design multi-poignées et multi-ailerons qui permet des embarquements en groupe sûrs.',
      ai_faq: [
        {
          q: 'Combien de personnes peut-il transporter ?',
          a: 'La plateforme de 59 pouces est homologuée pour une charge massive d’environ 650 kg, accueillant confortablement plusieurs riders, glacières et équipements de sécurité.',
        },
        {
          q: 'Comment gonfler une si grande planche ?',
          a: 'Un système à double valve permet à deux personnes de gonfler le volume d’air interne en même temps, pour atteindre une plage de pression de travail de 11 à 15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'SUP Lure Skiff Utilitaire',
      desc: 'SUP utilitaire ultra-large de 47 pouces type ponton avec une capacité de 880 lb, une hublot de vision central et un montage double thruster pour la pêche aux leurres et les moteurs électriques.',
      definition:
        'Un SUP utilitaire et lure skiff de 11,5 pieds au profil de 47 pouces type ponton, avec une capacité de 880 lb, un hublot de vision central, des supports d’action et une poupe en queue d’aronde avec montage double thruster pour la pêche aux leurres, le transport et un usage utilitaire.',
      problem:
        'Les pêcheurs aux leurres et les utilisateurs utilitaires ont besoin d’une plateforme gonflable quasi impossible à retourner avec une énorme capacité de charge pour le pêcheur, les glacières, les batteries et même un moteur électrique de pêche.',
      howItWorks:
        'Le SUP Lure Skiff utilitaire utilise un profil de 47 pouces, trapu et ponton, quasi impossible à retourner en lançant ou en combattant un gros poisson. Sa construction drop-stitch renforcée est homologuée 880 lb, et la poupe en queue d’aronde offre un espace de montage préconfiguré pour les systèmes de propulsion.',
      audience:
        'Pêcheurs aux leurres et à la mouche, pêcheurs sous-marins, observateurs des hauts-fonds et pêcheurs qui utilisent un moteur électrique sur une plateforme gonflable, ainsi que les acheteurs OEM/ODM.',
      ai_use_cases: [
        'Pêche aux leurres et à la mouche debout ou assis',
        'Reconnaissance sous-marine et pêche sous-marine',
        'Transport lourd et usage utilitaire stable',
      ],
      ai_comparison:
        'Contrairement aux SUP de pêche standard, le Lure Skiff est une plateforme utilitaire de la largeur d’un ponton, homologuée 880 lb, avec un hublot central de vision, un montage double thruster préconfiguré et une stabilité de marche totale.',
      ai_faq: [
        {
          q: 'Peut-il supporter un moteur de pêche ?',
          a: 'Oui. La poupe en queue d’aronde comprend un espace de montage préconfiguré pour les systèmes de propulsion, et la planche transporte le moteur et les batteries dans sa capacité de 880 lb.',
        },
        {
          q: 'À quoi sert le hublot central ?',
          a: 'Il permet d’observer les hauts-fonds pour repérer les structures et les déplacements de poissons, idéal pour la pêche sous-marine et l’observation des eaux peu profondes.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'SUP Touring Cruiser',
      desc: 'SUP gonflable de touring longue distance de 12,5 pieds avec boîtier de dérive US bas profil, dérive premium de 9 pouces et noyau drop-stitch pour une croisière efficace.',
      definition:
        'Un SUP gonflable de touring de 12,5 pieds avec boîtier de dérive US bas profil, une dérive premium de 9 pouces de course/touring, et une construction drop-stitch rigide pour la croisière longue distance, l’exploration en eau plate et le paddle de performance personnalisable.',
      problem:
        'Les pagayeurs qui parcourent de longues distances ont besoin d’une planche aux bords rigides qui ne s’affaissent pas, d’une tenue de cap prévisible et d’un système de dérives réglables selon les conditions.',
      howItWorks:
        'La Touring Cruiser combine un noyau drop-stitch PVC homologué 15 PSI avec une rigidité des bords qui évite l’affaissement au centre. Un boîtier de dérive US bas profil accepte la dérive de 9 pouces incluse ou des dérives tierces, permettant de régler la tenue de cap et la vitesse selon les conditions.',
      audience:
        'Pagayeurs de touring longue distance, explorateurs d’eau plate, croisiéristes d’endurance et pagayeurs qui veulent des performances réglables, ainsi que les acheteurs OEM/ODM.',
      ai_use_cases: [
        'Touring longue distance et croisière côtière',
        'Exploration en eau plate et paddle d’endurance',
        'Paddle de performance réglable avec dérives US',
      ],
      ai_comparison:
        'Contrairement aux planches tout-terrain standard, la Touring Cruiser ajoute une coque de 12,5 pieds aux bords rigides et un boîtier de dérive US, qui maintient le cap sur les longues distances avec moins d’effort et de lacet.',
      ai_faq: [
        {
          q: 'Puis-je utiliser mes propres dérives ?',
          a: 'Oui. Le boîtier de dérive US bas profil est compatible avec l’après-marché, vous pouvez donc monter vos dérives d’eau plate ou de course favorites pour régler les performances.',
        },
        {
          q: 'Comment atteindre la pression maximale ?',
          a: 'La pompe à main double cylindre incluse déplace un grand volume rapidement et atteint des pressions élevées avec moins d’effort, et la planche est compatible avec la pompe électrique afarer 12VDC optionnelle.',
        },
      ],
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
    'sup-horizon-lines': {
      name: 'Horizon Lines Serie',
      desc: 'Praktisches Allround-SUP von 11 Fuß mit Fusion-Laminat, Reptilhaut-Traction-Pad und drei abnehmbaren Click-Finnen für jedes Gewässer.',
      definition:
        'Ein praktisches Premium-Allround-SUP von 11 Fuß mit leichten Fusion-Laminat-Verstärkungen, einem konturierten Reptilhaut-Traction-Pad mit Fußgewölbestütze und einem Triple-Click-Finnensystem für Seen, Flüsse und geschützte Küstengewässer.',
      problem:
        'Vielseitige Paddler wollen ein einziges Board, das von ruhiger See bis zu rauem Küstenwasser alles kann und trotzdem leicht genug für Reisen und steif genug für ein Hardshell-Gefühl bleibt.',
      howItWorks:
        'Die Horizon Lines Serie kombiniert spezielle Fusion-Laminat-Verstärkungsschichten mit einer Drop-Stitch-PVC-Konstruktion mit 15 PSI. Drei vollständig abnehmbare Click-Finnen mit optimiertem Toe-in ermöglichen die Anpassung von Spur und Wendigkeit, und eine Doppelhub- oder optionale 12VDC-Elektropumpe erreicht den vollen Druck schnell.',
      audience:
        'Einsteiger, Flachwasserkreuzer, fortgeschrittene Manöverfans und Reisende, die ein tragbares Allround-SUP mit optionalem Komplettpaket wünschen.',
      ai_use_cases: [
        'Allround-Paddeln auf Flachwasser und Küste',
        'Fortgeschrittene Manöver und Touren',
        'Reisefreundliche SUP-Abenteuer',
      ],
      ai_comparison:
        'Im Vergleich zu Standard-Allround-SUP bietet die Horizon Lines Fusion-Laminat-Verstärkungen und ein Triple-Finnensystem, mit dem Sie Spur und Wendigkeit für alles von ruhigen Seen bis zu rauem Küstenwasser einstellen können.',
      ai_faq: [
        {
          q: 'Können die Finnen an die Bedingungen angepasst werden?',
          a: 'Ja. Alle drei Click-Finnen sind vollständig abnehmbar und haben einen optimierten Toe-in, sodass Sie das Setup für Flachwasser, Flussströmungen oder raue Küstenbedingungen einstellen können.',
        },
        {
          q: 'Welche Aufblasoptionen sind enthalten?',
          a: 'Eine Doppelhub-Hochdruck-/Hochvolumenpumpe pumpt in beiden Hüben, und das Board ist kompatibel mit einer optionalen 12VDC-20PSI-Elektropumpe, die 15 PSI in etwa 9 Minuten erreicht.',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO Serie',
      desc: 'Professionelles 14-Fuß-Renn-SUP mit Carbon-Hybrid-Konstruktion, wellendurchschneidender Verdrängernase und Elite-Tracking für Sprints und Langstreckenrennen.',
      definition:
        'Ein professionelles 14-Fuß-Renn-SUP mit Carbon-Hybrid-Matrix ohne Flex, einer wellendurchschneidenden Verdrängernase und einem schmalen 26-Zoll-Deck für Sprints, Zeitfahren und Training mit hoher Kadenz.',
      problem:
        'Wettkampfpaddler brauchen die Steifigkeit eines Hardboards und perfektes Tracking von einem aufblasbaren Board – ohne Flex, ohne Widerstand und ohne den langweiligen Industrielook traditioneller Renn-SUP.',
      howItWorks:
        'Die RHEO Serie nutzt eine Carbon-Hybrid-Aufblaskonstruktion, die Flex vollständig eliminiert. Ihre wellendurchschneidende Nase durchtrennt das Wasser mit minimalem Widerstand, während die 26-Zoll-Breite die benetzte Fläche reduziert und das 2+1-Finnensetup die Spur hält und schnelle Richtungswechsel unterstützt.',
      audience:
        'Wettkampfpaddler auf Rekordjagd, Geschwindigkeitsfans und fortgeschrittene Paddler, die Rennleistung mit aufblasbarer Portabilität kombinieren möchten, sowie OEM/ODM-Käufer.',
      ai_use_cases: [
        'SUP-Rennsport und Sprinttraining',
        'High-Intensity-Fitness und Intervalle',
        'Technische Kurse und enge Gewässer',
      ],
      ai_comparison:
        'Im Vergleich zu traditionellen Renn-SUP bietet die RHEO eine Carbon-Hybrid-Aufblaskonstruktion ohne Flex und eine wellendurchschneidende Nase für außergewöhnliche Penetration im Gegenwasser – verpackbar für Reisen.',
      ai_faq: [
        {
          q: 'Ist die RHEO stabil genug für Anfänger?',
          a: 'Sie ist für Wettkämpfer und fortgeschrittene Paddler konzipiert; die 26-Zoll-Breite priorisiert Geschwindigkeit, Anfänger sollten auf einem breiteren Allround-Board beginnen.',
        },
        {
          q: 'Wozu dient das 2+1-Finnensetup?',
          a: 'Die Mittelfinne hält die Spur bei hoher Geschwindigkeit, während die Seitenfinnen bei schnellen, weiten Bojenkurven für laterale Stabilität sorgen.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Aufblasbares Angel-SUP',
      desc: 'Stabiles katamaranartiges Angel-SUP mit doppelten Luftkammern, Rutenhaltern und integriertem Fischmaß zum Stehangeln.',
      definition:
        'Ein aufblasbares 11,5-Fuß-Angel-SUP mit doppelten Luftkammern für katamaranartige Sekundärstabilität, Rutenhaltern, einem Fischmaß auf dem Deck und einer kajakähnlichen Rumpfform für Steh-Angeln, Einholen und Touring.',
      problem:
        'Angler brauchen eine stabile Stehplattform, die beim Einholen eines Fangs oder in rauem Wasser nicht wackelt oder kentert, aber dennoch tragbar genug für entfernte Angelplätze ist.',
      howItWorks:
        'Das aufblasbare Angel-SUP nutzt dicke doppelseitige Luftkammern für außergewöhnliche Sekundärstabilität wie bei einem Katamaran. Eine spitze Nase und ein spitzen Tail erhalten die Deckbreite mit kajakartigem Tracking, und der Drop-Stitch-PVC-Kern ist mit 15 PSI für eine starre, zuverlässige Plattform ausgelegt.',
      audience:
        'Kunstköder- und Barschangler, Fliegen- und Kajakangler sowie Ausflügler, die Kühlboxen, Campstühle und Kescher transportieren, sowie OEM/ODM-Käufer.',
      ai_use_cases: [
        'Stehendes Kunstköder- und Barschangeln',
        'Fliegen- und Kajakangeln von einer aufblasbaren Plattform',
        'Mehrtägige Angelausflüge mit Ausrüstung',
      ],
      ai_comparison:
        'Im Vergleich zu Standard-SUP-Boards bietet dieses Angel-SUP doppelseitige katamaranartige Luftkammern, die die laterale Stabilität beim Stehen, Werfen und Einholen drastisch erhöhen, mit integrierten Rutenhaltern und Fischmaß.',
      ai_faq: [
        {
          q: 'Bleibt das Board beim Drill eines Fisches stabil?',
          a: 'Ja. Die doppelten Luftkammern bieten katamaranartige Sekundärstabilität, die Wackeln und Kentern beim Stehangeln, Werfen und Einholen verhindert.',
        },
        {
          q: 'Kann ein Echolot montiert werden?',
          a: 'Ja. Zwei professionelle schwarze Halterungen vor dem Traction-Pad können Rutenhalter, Echolote oder wichtige Angelausrüstung aufnehmen.',
        },
      ],
    },
    'sup-mini': {
      name: 'Mini SUP Serie',
      desc: 'Ultra-vielseitiges Mini-SUP, das als kompaktes Paddleboard, aufblasbares Surfbrett und Bodyboard für Kinder, Erwachsene und Haustiere fungiert.',
      definition:
        'Ein 7-Fuß ultra-vielseitiges Mini-SUP, das kompaktes Paddleboard, aufblasbares Surfbrett und Bodyboard in einem hybriden Design vereint, mit kurzem, breitem und stabilem Profil für Kinder, Erwachsene und Haustiere auf Wellen, Seen, Pools und ruhigen Buchten.',
      problem:
        'Familien und vielseitige Rider brauchen eine kompakte aufblasbare Plattform, die als Kinderpaddle, Erwachsenen-Surf- oder Bodyboard und hundefreundliche Schwimminsel dient.',
      howItWorks:
        'Die Mini SUP Serie nutzt ein kurzes, breites, sehr stabiles Profil mit optimiertem Volumen-zu-Längen-Verhältnis für maximale Auftriebskraft. Eine responsive Rocker- und Raillinie fängt kleine Wellen, und ein robustes, durchstichfestes Deck hält Hundepfoten stand, bleibt aber leicht und schnell aufblasbar.',
      audience:
        'Eltern, die Kinder ans Paddeln heranführen, Erwachsene, die ein tragbares Surf- oder Bodyboard-Hybrid wollen, und Haustierbesitzer, die ihre Hunde mit aufs Wasser nehmen, sowie OEM/ODM-Käufer.',
      ai_use_cases: [
        'Kinder-SUP- und Surfortschritt',
        'Erwachsenen-Bodyboarding und Shorebreak-Surfen',
        'Haustierfreundliches Spielen auf See, Pool und Bucht',
      ],
      ai_comparison:
        'Im Gegensatz zu Standard-SUP ist das Mini ein echtes Mehrzweck-Hybrid – Paddleboard, aufblasbares Surfbrett und Bodyboard in einem ultra-tragbaren Format – mit durchstichfestem, haustierfreundlichem Deck.',
      ai_faq: [
        {
          q: 'Können Erwachsene das Mini SUP nutzen?',
          a: 'Ja. Das optimierte Volumen-zu-Längen-Verhältnis unterstützt Kinder und volljährige Erwachsene – beim Stehpaddeln, Bodyboarding oder Wellenreiten.',
        },
        {
          q: 'Ist das Deck sicher für Hunde?',
          a: 'Ja. Das Deck besteht aus durchstichfesten Materialien, die für die Krallen und Pfoten von Hunden ausgelegt sind.',
        },
      ],
    },
    'sup-giant': {
      name: 'Multi-Personen-Giant-SUP',
      desc: 'Riesiges 16,5-Fuß-Multi-Personen-SUP für 650 kg mit Doppelventil-Aufblasung, 8-Zoll-Rumpf, mehreren Griffen und Multi-Finnen-Tracking.',
      definition:
        'Ein 16,5-Fuß-Multi-Personen-SUP mit 8-Zoll-Rumpf, Doppelventil-Aufblasung, mehreren Griffen, Multi-Finnen-Tracking und doppelten Bungee-Netzen für Gruppenpaddeln, Verleih und Events.',
      problem:
        'Gruppen, Verleihbetreiber und Eventveranstalter brauchen ein einziges großes aufblasbares Board, das mehrere Rider sicher trägt und unter konzentrierten Lasten steif bleibt.',
      howItWorks:
        'Das Multi-Personen-Giant-SUP nutzt verstärktes Drop-Stitch-PVC mit 15 PSI und ein Doppelventilsystem, damit zwei Personen das große Luftvolumen gleichzeitig aufblasen können. Acht bis zwölf verstärkte Griffe an beiden Rails plus Bug- und Heckgriffe erleichtern Tragen und Wieder-Einsteigen, während ein 4+1- oder Tri-Finnen-Setup das breite Board auf Kurs hält.',
      audience:
        'Verleihbetreiber, Wassersportclubs, Eventveranstalter für Teambuilding, große Familien und Gruppenabenteurer sowie OEM/ODM-Käufer.',
      ai_use_cases: [
        'Teambuilding für Unternehmen und Gruppen',
        'Verleihflotten und Clubausflüge',
        'Große Familien- und Seeausflüge mit mehreren Fahrern',
      ],
      ai_comparison:
        'Im Vergleich zu Standard-SUP trägt das Giant-SUP bis zu 650 kg mit 8-Zoll-Rumpf und Doppelventil-Aufblasung und ermöglicht dank Multi-Griff- und Multi-Finnen-Design sichere Gruppenfahrten.',
      ai_faq: [
        {
          q: 'Wie viele Personen können mitfahren?',
          a: 'Die 59-Zoll-Plattform ist für eine massive Last von etwa 650 kg ausgelegt und befördert bequem mehrere Rider, Kühlboxen und Sicherheitsausrüstung.',
        },
        {
          q: 'Wie bläst man ein so großes Board auf?',
          a: 'Ein Doppelventilsystem ermöglicht es zwei Personen, das große Innenvolumen gleichzeitig aufzublasen und den Arbeitsdruckbereich von 11–15 PSI zu erreichen.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Utility & Lure Skiff SUP',
      desc: 'Pontonbreites 47-Zoll-Utility-SUP mit 880-lb-Tragkraft, zentralem Sichtfenster und Dual-Thruster-Montage für Kunstköderangeln und Trolling-Motoren.',
      definition:
        'Ein 11,5-Fuß-pontonbreites Utility- und Lure-Skiff-SUP mit 47-Zoll-Profil, 880-lb-Tragkraft, zentralem Sichtfenster, Action-Mounts und einem Schwalbenschwanz-Heck mit Dual-Thruster-Montage für Kunstköderangeln, Transport und Utility-Nutzung.',
      problem:
        'Kunstköderangler und Utility-Nutzer brauchen eine nahezu unkippbare aufblasbare Plattform mit enormer Tragkraft für Angler, Kühlboxen, Batterien und sogar einen elektrischen Trolling-Motor.',
      howItWorks:
        'Das Utility & Lure Skiff SUP nutzt ein stämmiges, pontonartiges 47-Zoll-Profil, das beim Werfen oder Drillen großer Fische praktisch unkippbar ist. Die verstärkte Drop-Stitch-Konstruktion ist für 880 lb ausgelegt, und das Schwalbenschwanz-Heck bietet vorkonfigurierten Montageraum für Antriebssysteme.',
      audience:
        'Kunstköder- und Fliegenangler, Speerfischer, Beobachter von Flachwasser und Angler mit Trolling-Motor auf aufblasbarer Plattform sowie OEM/ODM-Käufer.',
      ai_use_cases: [
        'Kunstköder- und Fliegenangeln stehend oder sitzend',
        'Unterwasseraufklärung und Speerfischen',
        'Schwerlast-Transport und stabile Utility-Nutzung',
      ],
      ai_comparison:
        'Im Gegensatz zu Standard-Angel-SUP ist das Lure Skiff eine pontonbreite Utility-Plattform mit 880 lb Tragkraft, zentralem Sichtfenster, vorkonfigurierter Dual-Thruster-Montage und solider Gehstabilität.',
      ai_faq: [
        {
          q: 'Kann es einen Trolling-Motor tragen?',
          a: 'Ja. Das Schwalbenschwanz-Heck bietet vorkonfigurierten Montageraum für Antriebssysteme, und das Board trägt Motor und Batterien innerhalb der 880-lb-Tragkraft.',
        },
        {
          q: 'Wofür ist das zentrale Sichtfenster?',
          a: 'Es ermöglicht das Beobachten des Flachwassers für Strukturen und Köderbewegungen – ideal für Speerfischen und Flachwasserbeobachtung.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Touring Cruiser SUP',
      desc: 'Langstrecken-Touring-SUP von 12,5 Fuß mit Low-Profile-US-Finnenbox, Premium-9-Zoll-Touring-Finne und Drop-Stitch-Kern für effiziente Cruising.',
      definition:
        'Ein 12,5-Fuß-Touring-SUP mit Low-Profile-US-Finnenbox, einer Premium-9-Zoll-Renn-/Touring-Finne und starrer Drop-Stitch-Konstruktion für Langstrecken-Cruising, Flachwassererkundung und anpassbares Performance-Paddeln.',
      problem:
        'Touring-Paddler auf langen Strecken brauchen ein Board mit steifen Rails ohne Durchhängen, vorhersehbarem Tracking und einem Finensystem, das sie an Bedingungen anpassen können.',
      howItWorks:
        'Die Touring Cruiser kombiniert einen Drop-Stitch-PVC-Kern mit 15 PSI mit steifen Rails, um ein Durchhängen auf halber Länge zu verhindern. Eine Low-Profile-US-Finnenbox nimmt die enthaltene 9-Zoll-Renn-/Touring-Finne oder Aftermarket-Finnen auf, um Tracking und Geschwindigkeit anzupassen.',
      audience:
        'Touring-Paddler auf langen Strecken, Flachwasserforscher, Ausdauercruiser und Paddler, die anpassbare Leistung wollen, sowie OEM/ODM-Käufer.',
      ai_use_cases: [
        'Langstrecken-Touring und Küsten-Cruising',
        'Flachwassererkundung und Ausdauerpaddeln',
        'Anpassbares Performance-Paddeln mit US-Finnen',
      ],
      ai_comparison:
        'Im Vergleich zu Standard-Allround-Boards fügt die Touring Cruiser einen 12,5-Fuß-Rumpf mit steifen Rails und ein US-Finnenbox-System hinzu, das über lange Distanzen mit weniger Gierbewegung und Mühe auf Kurs hält.',
      ai_faq: [
        {
          q: 'Kann ich meine eigenen Finnen verwenden?',
          a: 'Ja. Die Low-Profile-US-Finnenbox ist aftermarket-kompatibel, sodass Sie Ihre Lieblings-Flachwasser- oder Rennfinnen einsetzen können.',
        },
        {
          q: 'Wie erreiche ich den vollen Druck?',
          a: 'Die enthaltene Doppelzylinder-Handpumpe bewegt schnell großes Volumen und erreicht höhere Drücke mit weniger Aufwand; kompatibel mit der optionalen afarer 12VDC-Elektropumpe.',
        },
      ],
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
    'sup-horizon-lines': {
      name: 'Série Horizon Lines',
      desc: 'SUP inflável premium 11 pés com laminado de fusão, pad antiderrapante pele de réptil e três aletas clicáveis removíveis para qualquer condição.',
      definition:
        'Um SUP inflável premium todo-terreno de 11 pés com reforços de laminado de fusão leve, pad antiderrapante contornado pele de réptil com suporte de arco e sistema de três aletas clicáveis para lagos, rios e águas costeiras abrigadas.',
      problem:
        'Paddlers versáteis querem uma única prancha que lide com tudo, de águas calmas a condições costeiras picadas, permanecendo leve para viagens e rígida com sensação de casco rígido.',
      howItWorks:
        'A série Horizon Lines combina camadas de reforço de laminado de fusão com construção em drop-stitch PVC a 15 PSI. Três aletas clicáveis totalmente removíveis com ângulo de toe-in otimizado permitem ajustar tracking e manobrabilidade, e uma bomba de dupla ação ou elétrica opcional 12VDC atinge a pressão máxima rapidamente.',
      audience:
        'Compradores iniciantes, cruzeiristas de águas calmas, entusiastas de manobras avançadas e viajantes que querem um SUP inflável todo-terreno portátil com pacote completo opcional.',
      ai_use_cases: [
        'Paddle todo-terreno em águas calmas e costeiras',
        'Prática de manobras avançadas e touring',
        'Aventuras de SUP portáteis para viagem',
      ],
      ai_comparison:
        'Comparada a SUPs todo-terreno padrão, a Horizon Lines traz reforços de laminado de fusão e um sistema de três aletas que permite ajustar tracking e manobrabilidade para tudo, de lagos calmos a águas costeiras picadas.',
      ai_faq: [
        {
          q: 'As aletas podem ser ajustadas às condições?',
          a: 'Sim. As três aletas clicáveis são totalmente removíveis com ângulo de toe-in otimizado, permitindo configurar o setup para águas calmas, correntes de rio ou condições costeiras picadas.',
        },
        {
          q: 'Quais opções de inflação estão incluídas?',
          a: 'Uma bomba de dupla ação de alta pressão/alto volume infla nos dois tempos, e a prancha é compatível com uma bomba elétrica opcional 12VDC 20PSI que atinge 15 PSI em cerca de 9 minutos.',
        },
      ],
    },
    'sup-rheo': {
      name: 'Série RHEO',
      desc: 'SUP inflável de corrida profissional de 14 pés com construção híbrida em carbono, nariz de deslocamento que corta ondas e tracking de elite para sprints e corridas de longa distância.',
      definition:
        'Um SUP inflável de corrida profissional de 14 pés com matriz híbrida em carbono sem flex, nariz de deslocamento que corta ondas e deck estreito de 26 polegadas para sprints, contra-relógio e treino de alta cadência.',
      problem:
        'Competidores precisam de rigidez de prancha dura e tracking impecável em uma prancha inflável, sem flex, sem arrasto e sem o visual industrial monótono dos SUPs de corrida tradicionais.',
      howItWorks:
        'A série RHEO usa construção inflável híbrida em carbono que elimina o flex para uma plataforma absolutamente rígida. Seu nariz de deslocamento corta a água com arrasto mínimo, enquanto a largura de 26 polegadas reduz a área molhada e o setup de aletas 2+1 mantém o tracking em velocidade alta e auxilia curvas rápidas.',
      audience:
        'Competidores em busca de recordes pessoais, entusiastas de velocidade e paddlers avançados que querem desempenho de prancha dura com portabilidade inflável, além de compradores OEM/ODM.',
      ai_use_cases: [
        'Corridas competitivas de SUP e treino de sprint',
        'Fitness de alta intensidade e intervalos',
        'Percurso técnico em águas estreitas',
      ],
      ai_comparison:
        'Comparado a SUPs de corrida tradicionais, a RHEO oferece construção inflável híbrida em carbono sem flex e nariz de deslocamento para penetração excepcional em águas picadas, mantendo a portabilidade para viagens.',
      ai_faq: [
        {
          q: 'A RHEO é estável para iniciantes?',
          a: 'Ela é projetada para competidores e paddlers avançados; a largura de 26 polegadas prioriza velocidade, então iniciantes devem começar em uma prancha todo-terreno mais larga.',
        },
        {
          q: 'Para que serve a aleta 2+1?',
          a: 'A aleta central mantém excelente tracking em alta velocidade, enquanto as aletas laterais oferecem estabilidade lateral em curvas rápidas e abertas.',
        },
      ],
    },
    'sup-fishing': {
      name: 'SUP de Pesca Inflável',
      desc: 'SUP de pesca inflável estável estilo catamarã com câmaras de ar duplas, suportes de vara e régua de pesca no deck para pescar em pé.',
      definition:
        'Um SUP de pesca inflável de 11,5 pés com câmaras de ar duplas para estabilidade secundária de nível catamarã, suportes de vara, régua de pesca no deck e casco inspirado em caiaque para lançar, recolher e navegar em pé.',
      problem:
        'Pescadores precisam de uma plataforma estável para pescar em pé que não balance nem vire ao recolher uma captura ou navegar em águas picadas, mas que continue portátil para spots remotos.',
      howItWorks:
        'O SUP de pesca inflável usa câmaras de ar duplas espessas que proporcionam estabilidade secundária excepcional, semelhante a um catamarã. Um nariz e popa afilados mantêm a largura do deck com tracking de caiaque, e o núcleo drop-stitch PVC é classificado a 15 PSI para uma plataforma rígida e confiável.',
      audience:
        'Pescadores de iscas artificiais e robalo, pescadores de mosca e caiaque, e excursionistas que transportam coolers, cadeiras de acampamento e redes, além de compradores OEM/ODM.',
      ai_use_cases: [
        'Pesca em pé com iscas artificiais e robalo',
        'Pesca de mosca e caiaque em plataforma inflável',
        'Excursões de pesca de vários dias com carga',
      ],
      ai_comparison:
        'Em comparação com pranchas padrão, este SUP de pesca adiciona câmaras de ar duplas estilo catamarã que aumentam drasticamente a estabilidade lateral em pé, ao lançar e recolher, com suportes de vara e régua integrados.',
      ai_faq: [
        {
          q: 'A prancha permanece estável ao puxar um peixe?',
          a: 'Sim. As câmaras de ar duplas oferecem estabilidade secundária tipo catamarã que evita balanços e viradas ao pescar em pé, lançar ou recolher uma captura.',
        },
        {
          q: 'Dá para montar um sonar?',
          a: 'Sim. Dois suportes profissionais pretos antes do pad podem acomodar suportes de vara, sonares ou equipamentos essenciais de pesca.',
        },
      ],
    },
    'sup-mini': {
      name: 'Série Mini SUP',
      desc: 'Mini SUP inflável ultraversátil que funciona como paddleboard compacto, prancha de surf inflável e bodyboard para crianças, adultos e pets.',
      definition:
        'Um mini SUP inflável ultraversátil de 7 pés que hibridiza paddleboard compacto, prancha de surf inflável e bodyboard, com perfil curto, largo e estável para crianças, adultos e pets em ondas, lagos, piscinas e baías calmas.',
      problem:
        'Famílias e riders versáteis precisam de uma plataforma inflável compacta que funcione como paddle para crianças, surf ou bodyboard para adultos e deck flutuante para pets.',
      howItWorks:
        'A série Mini SUP usa perfil curto, largo e muito estável com razão volume-comprimento otimizada para flutuabilidade máxima. Linha de rocker e borda responsivas pegam ondas pequenas, e um deck resistente a perfurações suporta patas de cachorro permanecendo leve e rápido de inflar.',
      audience:
        'Pais que apresentam crianças ao paddle, adultos que querem um híbrido de surf ou bodyboard portátil e donos de pets que levam cães para a água, além de compradores OEM/ODM.',
      ai_use_cases: [
        'Progressão de paddle e surf infantil',
        'Bodyboard adulto e surf de shorebreak',
        'Diversão pet-friendly em lago, piscina e baía',
      ],
      ai_comparison:
        'Em comparação com SUPs padrão, o Mini é um híbrido multiuso de verdade — paddleboard, prancha de surf inflável e bodyboard em um formato ultraportátil — com deck resistente a pets.',
      ai_faq: [
        {
          q: 'Adultos podem usar o Mini SUP?',
          a: 'Sim. A razão volume-comprimento otimizada suporta crianças e adultos, seja em pé, deitado ou pegando ondas pequenas.',
        },
        {
          q: 'O deck é seguro para cães?',
          a: 'Sim. O deck usa materiais resistentes a perfurações projetados para suportar as garras e patas de cães.',
        },
      ],
    },
    'sup-giant': {
      name: 'SUP Gigante Multi-Pessoas',
      desc: 'SUP inflável gigante multi-pessoas de 16,5 pés classificado para 650 kg com inflação de dupla válvula, casco de 8 polegadas, múltiplas alças e tracking multi-aletas.',
      definition:
        'Um SUP inflável gigante multi-pessoas de 16,5 pés com casco de 8 polegadas, inflação de dupla válvula, configuração multi-alças, tracking multi-aletas e duplos sistemas bungee para paddle em grupo, aluguel e eventos.',
      problem:
        'Grupos, operadores de aluguel e organizadores de eventos precisam de uma única prancha inflável grande que carregue vários riders com segurança e permaneça rígida sob cargas concentradas.',
      howItWorks:
        'O SUP gigante multi-pessoas usa PVC drop-stitch reforçado a 15 PSI com sistema de dupla válvula para que duas pessoas inflem o grande volume de ar ao mesmo tempo. Oito a doze alças reforçadas nas laterais mais alças de proa e popa facilitam carregar e reembarcar, enquanto um setup 4+1 ou tri-aleta mantém a prancha larga no tracking.',
      audience:
        'Operadores de aluguel, clubes de esportes aquáticos, organizadores de eventos de team building, grandes famílias e aventureiros em grupo, além de compradores OEM/ODM.',
      ai_use_cases: [
        'Team building corporativo e em grupo',
        'Frotas de aluguel e expedições de clubes',
        'Reuniões familiares grandes em lagos',
      ],
      ai_comparison:
        'Em comparação com SUPs padrão, o SUP gigante carrega até 650 kg com casco de 8 polegadas e inflação de dupla válvula, com design multi-alças e multi-aletas para passeios em grupo seguros.',
      ai_faq: [
        {
          q: 'Quantas pessoas ele pode carregar?',
          a: 'A plataforma de 59 polegadas suporta uma carga massiva de cerca de 650 kg, acomodando confortavelmente vários riders, coolers e equipamentos de segurança.',
        },
        {
          q: 'Como inflar uma prancha tão grande?',
          a: 'Um sistema de dupla válvula permite que duas pessoas inflem o grande volume de ar ao mesmo tempo, atingindo a faixa de pressão de 11 a 15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'SUP Lure Skiff Utilitário',
      desc: 'SUP utilitário de 47 polegadas estilo pontão com capacidade de 880 lb, janela de visão central e montagem dupla thruster para pesca com iscas e motores elétricos.',
      definition:
        'Um SUP utilitário e lure skiff de 11,5 pés com perfil de 47 polegadas estilo pontão, capacidade de 880 lb, janela de visão central, action mounts e popa em rabo de andorinha com montagem dupla thruster para pesca com iscas, transporte e uso utilitário.',
      problem:
        'Pescadores de iscas e usuários utilitários precisam de uma plataforma inflável praticamente impossível de virar, com enorme capacidade de carga para o pescador, coolers, baterias e até um motor elétrico de trolley.',
      howItWorks:
        'O SUP Lure Skiff utilitário usa um perfil de 47 polegadas, atarracado e estilo pontão, praticamente impossível de virar ao lançar ou brigar com peixes grandes. Sua construção drop-stitch reforçada é classificada para 880 lb, e a popa em rabo de andorinha oferece espaço de montagem pré-configurado para sistemas de propulsão.',
      audience:
        'Pescadores de iscas e mosca, pescadores subaquáticos, observadores de águas rasas e pescadores com motor elétrico em plataforma inflável, além de compradores OEM/ODM.',
      ai_use_cases: [
        'Pesca de iscas e mosca em pé ou sentado',
        'Reconhecimento subaquático e pesca subaquática',
        'Transporte pesado e uso utilitário estável',
      ],
      ai_comparison:
        'Em comparação com SUPs de pesca padrão, o Lure Skiff é uma plataforma utilitária larga como pontão, classificada para 880 lb, com janela central, montagem dupla thruster pré-configurada e estabilidade total ao andar.',
      ai_faq: [
        {
          q: 'Ele suporta um motor de trolley?',
          a: 'Sim. A popa em rabo de andorinha inclui espaço de montagem pré-configurado para sistemas de propulsão, e a prancha carrega motor e baterias dentro da capacidade de 880 lb.',
        },
        {
          q: 'Para que serve a janela central?',
          a: 'Ela permite observar águas rasas em busca de estruturas e movimentação de peixes, ideal para pesca subaquática e observação.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'SUP Touring Cruiser',
      desc: 'SUP inflável de touring de longa distância de 12,5 pés com caixa de aleta US low-profile, aleta premium de 9 polegadas e núcleo drop-stitch para cruzeiro eficiente.',
      definition:
        'Um SUP de touring de 12,5 pés com caixa de aleta US low-profile, uma aleta premium de 9 polegadas racing/touring e construção drop-stitch rígida para cruzeiro de longa distância, exploração de águas calmas e paddle de performance ajustável.',
      problem:
        'Paddlers de longa distância precisam de uma prancha com bordas rígidas que não cedam, tracking previsível e um sistema de aletas ajustável às condições.',
      howItWorks:
        'A Touring Cruiser combina núcleo drop-stitch PVC a 15 PSI com rigidez de borda que evita o afundamento no meio. Uma caixa de aleta US low-profile aceita a aleta de 9 polegadas incluída ou aletas aftermarket, permitindo ajustar tracking e velocidade.',
      audience:
        'Paddlers de touring de longa distância, exploradores de águas calmas, cruzeiristas de resistência e paddlers que querem performance ajustável, além de compradores OEM/ODM.',
      ai_use_cases: [
        'Touring de longa distância e cruzeiro costeiro',
        'Exploração de águas calmas e paddle de resistência',
        'Performance ajustável com aletas US',
      ],
      ai_comparison:
        'Em comparação com pranchas todo-terreno padrão, a Touring Cruiser adiciona casco de 12,5 pés com bordas rígidas e sistema de caixa US, mantendo o curso em longas distâncias com menos esforço e deriva.',
      ai_faq: [
        {
          q: 'Posso usar minhas próprias aletas?',
          a: 'Sim. A caixa US low-profile é compatível com aftermarket, então você pode colocar suas aletas favoritas de águas calmas ou corrida.',
        },
        {
          q: 'Como atingir a pressão máxima?',
          a: 'A bomba manual de cilindro duplo incluída move grande volume rapidamente e atinge altas pressões com menos esforço; compatível com a bomba elétrica afarer 12VDC opcional.',
        },
      ],
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
    'sup-horizon-lines': {
      name: 'Serie Horizon Lines',
      desc: 'SUP hinchable premium multiusos de 11 pies con laminado de fusión, pad antideslizante de piel de reptil y tres aletas clic removibles para cualquier condición.',
      definition:
        'Un SUP hinchable premium multiusos de 11 pies con refuerzos de laminado de fusión ligero, pad antideslizante contorneado de piel de reptil con soporte de arco y sistema de tres aletas clic para lagos, ríos y aguas costeras protegidas.',
      problem:
        'Los palistas versátiles quieren una sola tabla que maneje desde aguas planas calmadas hasta condiciones costeras con chop, manteniéndose ligera para viajar y rígida con sensación de casco duro.',
      howItWorks:
        'La serie Horizon Lines combina capas de refuerzo de laminado de fusión con construcción drop-stitch PVC de 15 PSI. Tres aletas clic totalmente removibles con ángulo de toe-in optimizado permiten ajustar el rumbo y la maniobrabilidad, y una bomba de doble acción o eléctrica opcional de 12VDC alcanza la presión máxima rápido.',
      audience:
        'Compradores principiantes, cruceristas de aguas planas, entusiastas de maniobras avanzadas y viajeros que quieren un SUP hinchable multiusos portable con paquete completo opcional.',
      ai_use_cases: [
        'Paddle multiusos en aguas planas y costeras',
        'Maniobras avanzadas y touring',
        'Aventuras de SUP portátiles para viajar',
      ],
      ai_comparison:
        'En comparación con los SUPs multiusos estándar, la Horizon Lines ofrece refuerzos de laminado de fusión y un sistema de tres aletas que permite ajustar rumbo y maniobrabilidad para todo, desde lagos calmados hasta aguas costeras con chop.',
      ai_faq: [
        {
          q: '¿Se pueden ajustar las aletas a las condiciones?',
          a: 'Sí. Las tres aletas clic son totalmente removibles con ángulo de toe-in optimizado, permitiendo configurar el setup para aguas planas, corrientes de río o condiciones costeras.',
        },
        {
          q: '¿Qué opciones de inflado están incluidas?',
          a: 'Una bomba de doble acción de alta presión/alto volumen infla en ambos golpes, y la tabla es compatible con una bomba eléctrica opcional de 12VDC 20PSI que alcanza 15 PSI en unos 9 minutos.',
        },
      ],
    },
    'sup-rheo': {
      name: 'Serie RHEO',
      desc: 'SUP hinchable de carrera profesional de 14 pies con construcción híbrida de carbono, proa de desplazamiento que corta olas y rumbo de élite para sprints y largas distancias.',
      definition:
        'Un SUP hinchable de carrera profesional de 14 pies con matriz híbrida de carbono sin flex, proa de desplazamiento que corta olas y cubierta estrecha de 26 pulgadas para sprints, contrarreloj y entrenamiento de alta cadencia.',
      problem:
        'Los competidores necesitan rigidez de tabla dura y rumbo impecable en un modelo hinchable, sin flex, sin resistencia ni la estética industrial apagada de los SUPs de carrera tradicionales.',
      howItWorks:
        'La serie RHEO usa construcción hinchable híbrida de carbono que elimina el flex para una plataforma absolutamente rígida. Su proa de desplazamiento corta el agua con mínima resistencia, mientras la anchura de 26 pulgadas reduce la superficie mojada y el setup de aletas 2+1 mantiene el rumbo a alta velocidad y facilita giros rápidos.',
      audience:
        'Competidores que buscan récords personales, entusiastas de la velocidad y palistas avanzados que quieren rendimiento de tabla dura con portabilidad hinchable, además de compradores OEM/ODM.',
      ai_use_cases: [
        'Carreras competitivas de SUP y sprints',
        'Fitness de alta intensidad e intervalos',
        'Recorridos técnicos en canales estrechos',
      ],
      ai_comparison:
        'En comparación con los SUPs de carrera tradicionales, la RHEO ofrece construcción hinchable híbrida de carbono sin flex y proa de desplazamiento para penetración excepcional en chop, manteniendo la portabilidad.',
      ai_faq: [
        {
          q: '¿La RHEO es estable para principiantes?',
          a: 'Está diseñada para competidores y palistas avanzados; la anchura de 26 pulgadas prioriza la velocidad, así que los principiantes deberían empezar en una tabla multiusos más ancha.',
        },
        {
          q: '¿Para qué sirve la aleta 2+1?',
          a: 'La aleta central mantiene un excelente rumbo a alta velocidad, mientras que las aletas laterales aportan estabilidad lateral en giros rápidos y amplios.',
        },
      ],
    },
    'sup-fishing': {
      name: 'SUP de Pesca Hinchable',
      desc: 'SUP de pesca hinchable estable tipo catamarán con cámaras de aire dobles, soportes de caña y regla de pesca en cubierta para pescar de pie.',
      definition:
        'Un SUP de pesca hinchable de 11,5 pies con cámaras de aire dobles para estabilidad secundaria de nivel catamarán, soportes de caña, regla de pesca en cubierta y casco inspirado en kayak para lanzar, recoger y navegar de pie.',
      problem:
        'Los pescadores necesitan una plataforma estable para pescar de pie que no se tambalee ni vuelque al recoger una captura o navegar en aguas con chop, manteniéndose portable para lugares remotos.',
      howItWorks:
        'El SUP de pesca hinchable usa cámaras de aire dobles y gruesas que aportan estabilidad secundaria excepcional similar a un catamarán. Una proa y popa afiladas mantienen la anchura de cubierta con rumbo de kayak, y el núcleo drop-stitch PVC está clasificado a 15 PSI para una plataforma rígida y fiable.',
      audience:
        'Pescadores de señuelos y lubina, pescadores de mosca y kayak, y excursionistas que transportan neveras, sillas plegables y redes, además de compradores OEM/ODM.',
      ai_use_cases: [
        'Pesca de pie con señuelos y lubina',
        'Pesca de mosca y kayak desde plataforma hinchable',
        'Excursiones de pesca de varios días con carga',
      ],
      ai_comparison:
        'En comparación con las tablas estándar, este SUP de pesca añade cámaras de aire dobles tipo catamarán que aumentan drásticamente la estabilidad lateral de pie, al lanzar y recoger, con soportes de caña y regla integrados.',
      ai_faq: [
        {
          q: '¿La tabla se mantiene estable al pelear un pez?',
          a: 'Sí. Las cámaras de aire dobles ofrecen estabilidad secundaria tipo catamarán que evita balanceos y vuelcos al pescar de pie, lanzar o recoger una captura.',
        },
        {
          q: '¿Se puede montar una sonda?',
          a: 'Sí. Dos soportes profesionales negros antes del pad pueden alojar soportes de caña, sondas o equipo esencial de pesca.',
        },
      ],
    },
    'sup-mini': {
      name: 'Serie Mini SUP',
      desc: 'Mini SUP hinchable ultraversátil que funciona como paddle compacto, tabla de surf hinchable y bodyboard para niños, adultos y mascotas.',
      definition:
        'Un mini SUP hinchable ultraversátil de 7 pies que hibrida paddle compacto, tabla de surf hinchable y bodyboard, con perfil corto, ancho y muy estable para niños, adultos y mascotas en olas, lagos, piscinas y bahías calmadas.',
      problem:
        'Las familias y riders versátiles necesitan una plataforma hinchable compacta que funcione como paddle infantil, surf o bodyboard para adultos y plataforma flotante para mascotas.',
      howItWorks:
        'La serie Mini SUP usa un perfil corto, ancho y muy estable con relación volumen-longitud optimizada para máxima flotabilidad. Su línea de rocker y perfil de bordes reactivos atrapan olas pequeñas, y una cubierta resistente a perforaciones soporta las patas de los perros manteniéndose ligera y rápida de inflar.',
      audience:
        'Padres que inician a los niños en el paddle, adultos que quieren un híbrido de surf o bodyboard portable y dueños de mascotas que llevan a sus perros al agua, además de compradores OEM/ODM.',
      ai_use_cases: [
        'Progresión de paddle y surf infantil',
        'Bodyboard adulto y surf de shorebreak',
        'Diversión pet-friendly en lago, piscina y bahía',
      ],
      ai_comparison:
        'En comparación con los SUPs estándar, el Mini es un verdadero híbrido multiuso — paddle, tabla de surf hinchable y bodyboard en un formato ultraportable — con cubierta resistente para mascotas.',
      ai_faq: [
        {
          q: '¿Los adultos pueden usar el Mini SUP?',
          a: 'Sí. La relación volumen-longitud optimizada soporta a niños y adultos, ya sea de pie, a tumba o atrapando olas pequeñas.',
        },
        {
          q: '¿La cubierta es segura para perros?',
          a: 'Sí. La cubierta usa materiales resistentes a perforaciones diseñados para soportar garras y patas de perros.',
        },
      ],
    },
    'sup-giant': {
      name: 'SUP Gigante Multi-Personas',
      desc: 'Gigante SUP hinchable multi-personas de 16,5 pies clasificado para 650 kg con inflado de doble válvula, casco de 8 pulgadas, múltiples asas y rumbo multi-aletas.',
      definition:
        'Un SUP hinchable gigante multi-personas de 16,5 pies con casco de 8 pulgadas, inflado de doble válvula, configuración de múltiples asas, rumbo multi-aletas y dobles sistemas bungee para paddle en grupo, alquileres y eventos.',
      problem:
        'Los grupos, operadores de alquiler y organizadores de eventos necesitan una sola tabla hinchable grande que transporte varios riders con seguridad y permanezca rígida bajo cargas concentradas.',
      howItWorks:
        'El SUP gigante multi-personas usa PVC drop-stitch reforzado a 15 PSI con sistema de doble válvula para que dos personas inflen el gran volumen de aire a la vez. De ocho a doce asas reforzadas en ambos bordes más asas de proa y popa facilitan cargar y reembarcar, mientras un setup 4+1 o tri-aleta mantiene la tabla ancha en rumbo.',
      audience:
        'Operadores de alquiler, clubes de deportes acuáticos, organizadores de team building, grandes familias y aventureros en grupo, además de compradores OEM/ODM.',
      ai_use_cases: [
        'Team building corporativo y en grupo',
        'Flotas de alquiler y excursiones de clubes',
        'Reuniones familiares grandes y salidas en grupo',
      ],
      ai_comparison:
        'En comparación con los SUPs estándar, el SUP gigante transporta hasta 650 kg con casco de 8 pulgadas e inflado de doble válvula, con diseño multi-asas y multi-aletas para paseos en grupo seguros.',
      ai_faq: [
        {
          q: '¿Cuántas personas puede transportar?',
          a: 'La plataforma de 59 pulgadas soporta una carga masiva de unos 650 kg, acomodando cómodamente a varios riders, neveras y equipo de seguridad.',
        },
        {
          q: '¿Cómo se infla una tabla tan grande?',
          a: 'Un sistema de doble válvula permite que dos personas inflen el gran volumen de aire a la vez, alcanzando el rango de presión de 11 a 15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'SUP Lure Skiff Utilitario',
      desc: 'SUP utilitario de 47 pulgadas estilo pontón con capacidad de 880 lb, ventana de visión central y montaje doble thruster para pesca con señuelos y motores eléctricos.',
      definition:
        'Un SUP utilitario y lure skiff de 11,5 pies con perfil de 47 pulgadas estilo pontón, capacidad de 880 lb, ventana de visión central, action mounts y popa de cola de golondrina con montaje doble thruster para pesca con señuelos, transporte y uso utilitario.',
      problem:
        'Los pescadores de señuelos y usuarios utilitarios necesitan una plataforma hinchable casi imposible de volcar con enorme capacidad de carga para el pescador, neveras, baterías e incluso un motor eléctrico de pesca.',
      howItWorks:
        'El SUP Lure Skiff utilitario usa un perfil de 47 pulgadas, robusto y estilo pontón, prácticamente imposible de volcar al lanzar o pelear con peces grandes. Su construcción drop-stitch reforzada está clasificada para 880 lb, y la popa de cola de golondrina ofrece espacio de montaje preconfigurado para sistemas de propulsión.',
      audience:
        'Pescadores de señuelos y mosca, pescadores submarinos, observadores de aguas someras y pescadores que usan motores eléctricos en plataforma hinchable, además de compradores OEM/ODM.',
      ai_use_cases: [
        'Pesca de señuelos y mosca de pie o sentado',
        'Reconocimiento subacuático y pesca submarina',
        'Transporte pesado y uso utilitario estable',
      ],
      ai_comparison:
        'En comparación con los SUPs de pesca estándar, el Lure Skiff es una plataforma utilitaria ancha como pontón, clasificada para 880 lb, con ventana central, montaje doble thruster preconfigurado y estabilidad total al caminar.',
      ai_faq: [
        {
          q: '¿Puede soportar un motor de pesca?',
          a: 'Sí. La popa de cola de golondrina incluye espacio de montaje preconfigurado para sistemas de propulsión, y la tabla carga motor y baterías dentro de su capacidad de 880 lb.',
        },
        {
          q: '¿Para qué sirve la ventana central?',
          a: 'Permite observar aguas someras para buscar estructuras y movimiento de peces, ideal para pesca submarina y observación.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'SUP Touring Cruiser',
      desc: 'SUP hinchable de touring de larga distancia de 12,5 pies con caja de aleta US low-profile, aleta premium de 9 pulgadas y núcleo drop-stitch para crucero eficiente.',
      definition:
        'Un SUP de touring de 12,5 pies con caja de aleta US low-profile, una aleta premium de 9 pulgadas racing/touring y construcción drop-stitch rígida para crucero de larga distancia, exploración de aguas planas y paddle de rendimiento ajustable.',
      problem:
        'Los palistas de larga distancia necesitan una tabla con bordes rígidos que no se hundan, rumbo predecible y un sistema de aletas ajustable a las condiciones.',
      howItWorks:
        'La Touring Cruiser combina núcleo drop-stitch PVC a 15 PSI con rigidez de bordes que evita el hundimiento central. Una caja de aleta US low-profile acepta la aleta de 9 pulgadas incluida o aletas aftermarket, permitiendo ajustar rumbo y velocidad.',
      audience:
        'Palistas de touring de larga distancia, exploradores de aguas planas, cruceristas de resistencia y palistas que quieren rendimiento ajustable, además de compradores OEM/ODM.',
      ai_use_cases: [
        'Touring de larga distancia y crucero costero',
        'Exploración de aguas planas y paddle de resistencia',
        'Rendimiento ajustable con aletas US',
      ],
      ai_comparison:
        'En comparación con las tablas multiusos estándar, la Touring Cruiser añade un casco de 12,5 pies con bordes rígidos y sistema de caja US, que mantiene el rumbo en largas distancias con menos esfuerzo y deriva.',
      ai_faq: [
        {
          q: '¿Puedo usar mis propias aletas?',
          a: 'Sí. La caja US low-profile es compatible con aftermarket, así que puedes montar tus aletas favoritas de aguas planas o carrera.',
        },
        {
          q: '¿Cómo alcanzo la presión máxima?',
          a: 'La bomba manual de doble cilindro incluida mueve gran volumen rápido y alcanza altas presiones con menos esfuerzo; compatible con la bomba eléctrica afarer 12VDC opcional.',
        },
      ],
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
    'sup-horizon-lines': {
      name: 'Serie Horizon Lines',
      desc: 'SUP gonfiabile premium multiuso da 11 piedi con costruzione in laminato a fusione, pad antiscivolo effetto pelle di rettile e tre pinne click removibili per ogni condizione.',
      definition:
        'Un SUP gonfiabile premium multiuso da 11 piedi con rinforzi in laminato a fusione leggero, pad antiscivolo sagomato effetto pelle di rettile con supporto per l’arco del piede e configurazione a tre pinne click per laghi, fiumi e acque costiere riparate.',
      problem:
        'I paddleisti versatili vogliono un’unica tavola in grado di gestire qualsiasi condizione, dalla crociera in acque calme alle acque costiere mosse, restando abbastanza leggera da viaggiare e abbastanza rigida da offrire la sensazione di una tavola rigida.',
      howItWorks:
        'La serie Horizon Lines unisce strati di rinforzo in laminato a fusione a una costruzione drop-stitch in PVC con pressione fino a 15 PSI. Tre pinne click completamente rimovibili con angolo di convergenza ottimizzato permettono di regolare direzionalità e manovrabilità, mentre una pompa a doppia azione o l’elettropompa 12VDC opzionale raggiunge rapidamente la pressione massima.',
      audience:
        'Acquirenti alle prime armi, crocieristi in acque calme, appassionati di manovre avanzate e viaggiatori che cercano un SUP gonfiabile multiuso portatile con pacchetto completo opzionale.',
      ai_use_cases: [
        'Paddle multiuso in acque calme e costiere',
        'Allenamento di manovre avanzate e touring',
        'Avventure SUP compatte per viaggiare',
      ],
      ai_comparison:
        'Rispetto ai SUP multiuso standard, la Horizon Lines offre rinforzi in laminato a fusione e un sistema a tre pinne che permette di personalizzare direzionalità e manovrabilità per qualsiasi situazione, dai laghi calmi alle acque costiere mosse.',
      ai_faq: [
        {
          q: 'Le pinne possono essere personalizzate in base alle condizioni?',
          a: 'Sì. Tutte e tre le pinne click sono completamente rimovibili con un angolo di convergenza ottimizzato, così puoi regolare la configurazione per la direzionalità in acque calme, le correnti fluviali o le condizioni costiere mosse.',
        },
        {
          q: 'Quali opzioni di gonfiaggio sono incluse?',
          a: 'Una pompa a doppia azione ad alta pressione e alto volume gonfia a ogni colpo, e la tavola è compatibile con l’elettropompa opzionale 12VDC 20PSI che raggiunge 15 PSI in circa 9 minuti.',
        },
      ],
    },
    'sup-rheo': {
      name: 'Serie RHEO',
      desc: 'SUP gonfiabile da gara professionale da 14 piedi con costruzione ibrida in carbonio, prua a dislocamento che taglia le onde e direzionalità d’élite per sprint e gare su lunga distanza.',
      definition:
        'Un SUP gonfiabile da gara professionale da 14 piedi con matrice ibrida in carbonio senza flessione, prua a dislocamento che taglia le onde e deck stretto da 26 pollici progettato per sprint, prove a cronometro e allenamenti ad alta cadenza.',
      problem:
        'I racer competitivi hanno bisogno di una rigidità da tavola rigida e di una direzionalità perfetta da una tavola gonfiabile, senza flessione, senza resistenza e senza l’estetica industriale spenta delle tradizionali tavole SUP da gara.',
      howItWorks:
        'La serie RHEO usa una costruzione gonfiabile ibrida in carbonio che elimina la flessione per una piattaforma assolutamente stabile. La prua a dislocamento fende l’onda con resistenza minima, mentre la larghezza di 26 pollici riduce la superficie bagnata e la configurazione di pinne 2+1 mantiene la direzionalità ad alta velocità e agevola le virate rapide.',
      audience:
        'Racer competitivi a caccia del primato personale, appassionati di velocità e paddleisti avanzati che vogliono prestazioni da tavola rigida con la praticità di una gonfiabile, più acquirenti OEM/ODM.',
      ai_use_cases: [
        'Gare SUP competitive e sprint training',
        'Fitness ad alta intensità e interval training',
        'Campionati su percorsi tecnici e corsi d’acqua stretti',
      ],
      ai_comparison:
        'Rispetto alle tradizionali tavole SUP da gara, la RHEO offre una costruzione gonfiabile ibrida in carbonio senza flessione e una prua a dislocamento per una penetrazione eccezionale tra le onde, in una tavola che si riduce comunque per il viaggio.',
      ai_faq: [
        {
          q: 'La RHEO è abbastanza stabile per i principianti?',
          a: 'È progettata per paddleisti competitivi e avanzati; la larghezza di 26 pollici privilegia velocità ed efficienza, quindi i principianti dovrebbero iniziare su una tavola multiuso più larga.',
        },
        {
          q: 'A cosa serve la configurazione di pinne 2+1?',
          a: 'La pinna centrale mantiene un’eccellente direzionalità ad alta velocità, mentre le pinne laterali garantiscono stabilità laterale durante le virate rapide e ampie intorno alle boe.',
        },
      ],
    },
    'sup-fishing': {
      name: 'SUP da Pesca Gonfiabile',
      desc: 'SUP da pesca gonfiabile stabile stile catamarano con doppie camere d’aria, supporti per canne e righello per pesci a bordo per pescare in piedi.',
      definition:
        'Un SUP da pesca gonfiabile da 11,5 piedi con doppie camere d’aria laterali per una stabilità secondaria da catamarano, supporti per canne, righello per pesci sul deck e scafo ispirato al kayak per lanciare, recuperare e fare touring restando in piedi.',
      problem:
        'I pescatori hanno bisogno di una piattaforma stabile per pescare in piedi che non ondeggi né si capovolga quando si recupera una preda o si naviga in acque mosse, restando abbastanza portatile da raggiungere punti di pesca remoti.',
      howItWorks:
        'Il SUP da pesca gonfiabile usa spesse doppie camere d’aria che offrono una stabilità secondaria eccezionale simile a un catamarano o a un outrigger. Punta e poppa affusolate conservano la larghezza del deck con una direzionalità da kayak, e il nucleo drop-stitch in PVC è omologato a 15 PSI per una piattaforma rigida e affidabile.',
      audience:
        'Pescatori a esche artificiali e a spigola, pescatori a mosca e in kayak, e appassionati di escursioni che trasportano borse frigo, sedie da campo e retini, più acquirenti OEM/ODM.',
      ai_use_cases: [
        'Pesca a esche artificiali in piedi',
        'Pesca a mosca e in kayak da una piattaforma gonfiabile',
        'Escursioni di pesca plurigiornaliere con carico',
      ],
      ai_comparison:
        'Rispetto alle tavole standard, questo SUP da pesca aggiunge doppie camere d’aria in stile catamarano che aumentano notevolmente la stabilità laterale in piedi, durante il lancio e il recupero, con supporti per canne e righello integrati.',
      ai_faq: [
        {
          q: 'La tavola resta stabile mentre combatto un pesce?',
          a: 'Sì. Le doppie camere d’aria offrono una stabilità secondaria tipo catamarano che evita ondeggiamenti e capovolgimenti in piedi, durante il lancio o il recupero di una preda.',
        },
        {
          q: 'C’è spazio per montare un ecoscandaglio?',
          a: 'Sì. Due supporti professionali in plastica nera davanti al pad antiscivolo possono fissare supporti per canne, ecoscandagli o l’attrezzatura da pesca essenziale.',
        },
      ],
    },
    'sup-mini': {
      name: 'Serie Mini SUP',
      desc: 'Mini SUP gonfiabile ultra versatile che funziona come paddleboard compatto, tavola da surf gonfiabile e bodyboard per bambini, adulti e animali domestici.',
      definition:
        'Un mini SUP gonfiabile ultra versatile da 7 piedi che fonde paddleboard compatto, tavola da surf gonfiabile e bodyboard, con un profilo corto, largo e stabile per bambini, adulti e animali su onde, laghi, piscine e baie calme.',
      problem:
        'Le famiglie e i rider versatili hanno bisogno di un’unica piattaforma gonfiabile compatta che funzioni come paddleboard per bambini, surf o bodyboard per adulti e una piattaforma galleggiante adatta agli animali.',
      howItWorks:
        'La serie Mini SUP usa un profilo corto, largo e molto stabile con un rapporto volume/lunghezza ottimizzato per la massima galleggiabilità. La linea di rocker e il profilo reattivi catturano le piccole onde, e un deck resistente alle forature sopporta le zampe dei cani restando leggero e rapido da gonfiare.',
      audience:
        'Genitori che avviano i bambini al paddle, adulti che vogliono un ibrido portatile tra surf e bodyboard, e proprietari che portano i cani in acqua, più acquirenti OEM/ODM.',
      ai_use_cases: [
        'Progressione di paddle e surf per bambini',
        'Bodyboard per adulti e surf in shorebreak',
        'Divertimento pet-friendly in laghi, piscine e baie calme',
      ],
      ai_comparison:
        'Rispetto ai SUP standard, il Mini SUP è un vero ibrido multiuso: paddleboard, tavola da surf gonfiabile e bodyboard in un formato ultra portatile, con deck resistente alle forature e adatto agli animali.',
      ai_faq: [
        {
          q: 'Gli adulti possono usare il Mini SUP?',
          a: 'Sì. Il rapporto volume/lunghezza ottimizzato supporta tutti, dai bambini agli adulti, sia in paddle stand-up, in bodyboard prono o catturando piccole onde.',
        },
        {
          q: 'Il deck è sicuro per i cani?',
          a: 'Sì. Il deck usa materiali resistenti alle forature progettati per sopportare artigli e zampe dei cani.',
        },
      ],
    },
    'sup-giant': {
      name: 'SUP Gigante Multi-Persona',
      desc: 'Gigantesco SUP gonfiabile multi-persona da 16,5 piedi omologato per 650 kg con gonfiaggio a doppia valvola, scafo da 8 pollici, maniglie multiple e direzionalità multi-pinna.',
      definition:
        'Un SUP gonfiabile gigante multi-persona da 16,5 piedi con scafo da 8 pollici, gonfiaggio a doppia valvola, configurazione a più maniglie, direzionalità multi-pinna e doppi sistemi bungee per il carico per il paddle di gruppo, il noleggio e gli eventi di squadra.',
      problem:
        'Gruppi, operatori di noleggio e organizzatori di eventi hanno bisogno di un’unica grande tavola gonfiabile che trasporti più rider in sicurezza e resti rigida sotto carichi concentrati.',
      howItWorks:
        'Il SUP gigante multi-persona usa un drop-stitch in PVC resistente omologato a 15 PSI con un sistema a doppia valvola, così due persone possono gonfiare contemporaneamente il grande volume d’aria. Da otto a dodici maniglie resistenti lungo entrambi i lati, più maniglie di prua e poppa, facilitano trasporto e risalita, mentre una configurazione 4+1 o tri-pinna mantiene dritta l’ampia tavola.',
      audience:
        'Operatori di noleggio, club di sport acquatici, organizzatori di eventi di team building, grandi famiglie e gruppi di avventura, più acquirenti OEM/ODM.',
      ai_use_cases: [
        'Sessioni di team building aziendale e di gruppo',
        'Flotte per noleggio commerciale ed escursioni da club',
        'Grandi uscite in famiglia e multi-rider sul lago',
      ],
      ai_comparison:
        'Rispetto ai SUP standard, il SUP gigante trasporta fino a 650 kg con uno scafo da 8 pollici e il gonfiaggio a doppia valvola, grazie a un design a più maniglie e multi-pinna per cui interi equipaggi possono pagaiare, trasportare e risalire in sicurezza.',
      ai_faq: [
        {
          q: 'Quante persone possono salirci?',
          a: 'La piattaforma larga 59 pollici è omologata per un carico massimo di circa 650 kg, sostenendo comodamente più rider, borse frigo e dotazioni di sicurezza.',
        },
        {
          q: 'Come si gonfia una tavola così grande?',
          a: 'Un sistema a doppia valvola permette a due persone di gonfiare contemporaneamente l’enorme volume d’aria interno, raggiungendo un intervallo operativo di 11–15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'SUP Skiff Utility e da Esche',
      desc: 'SUP utility largo quanto un pontone da 47 pollici con portata di 880 lb, vetro di osservazione centrale e ancoraggio a doppia propulsione per la pesca a esche e motori elettrici.',
      definition:
        'Un SUP skiff utility e da esche da 11,5 piedi con profilo largo 47 pollici tipo pontone, portata di 880 lb, vetro di osservazione centrale, supporti da azione e poppa a coda di rondine con ancoraggio a doppia propulsione per la pesca a esche, il trasporto e l’uso utility.',
      problem:
        'I pescatori a esche e gli utenti utility hanno bisogno di una piattaforma gonfiabile praticamente impossibile da capovolgere, con un’enorme capacità di carico per il pescatore, borse frigo, batterie e persino un motore elettrico da traina.',
      howItWorks:
        'Il SUP skiff utility e da esche usa un profilo basso tipo pontone da 47 pollici praticamente impossibile da capovolgere durante il lancio o il combattimento con pesci di grandi dimensioni. La costruzione drop-stitch rinforzata è omologata per 880 lb, e la poppa a coda di rondine offre uno spazio di montaggio preconfigurato per i sistemi di propulsione.',
      audience:
        'Pescatori a esche artificiali e a mosca, pescatori subacquei, osservatori di acque basse e pescatori che usano motori da traina su una piattaforma gonfiabile, più acquirenti OEM/ODM.',
      ai_use_cases: [
        'Pesca a esche e a mosca in piedi o seduti',
        'Ricognizione subacquea e pesca subacquea',
        'Trasporto pesante e uso utility stabile',
      ],
      ai_comparison:
        'Rispetto ai SUP da pesca standard, lo Skiff è una piattaforma utility larga quanto un pontone, omologata per 880 lb, con vetro di osservazione centrale, ancoraggio a doppia propulsione preconfigurato e stabilità totale per camminare, ideale per la pesca a esche e a mosca.',
      ai_faq: [
        {
          q: 'Può sostenere un motore da traina?',
          a: 'Sì. La poppa a coda di rondine include uno spazio di montaggio preconfigurato per i sistemi di propulsione, e la tavola trasporta motore e batterie entro la sua capacità di 880 lb.',
        },
        {
          q: 'A cosa serve il vetro di osservazione centrale?',
          a: 'Il vetro permette di scrutare i fondali bassi per individuare strutture e movimenti delle esche, ideale per la pesca subacquea e l’osservazione in acque basse.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'SUP Touring Cruiser',
      desc: 'SUP gonfiabile da touring di lunga distanza da 12,5 piedi con scatola pinna US a profilo basso, pinna premium da 9 pollici e nucleo drop-stitch per una crociera efficiente.',
      definition:
        'Un SUP gonfiabile da touring da 12,5 piedi con scatola pinna US a profilo basso, una pinna premium da 9 pollici per gara e touring, e una costruzione drop-stitch rigida per la crociera a lunga distanza, l’esplorazione in acque calme e il paddle da prestazione configurabile.',
      problem:
        'I paddleisti da touring che coprono lunghe distanze hanno bisogno di una tavola con i bordi rigidi che impediscano cedimenti, una direzionalità prevedibile e un sistema di pinne configurabile per le diverse condizioni dell’acqua.',
      howItWorks:
        'La Touring Cruiser combina un nucleo drop-stitch in PVC omologato a 15 PSI con la rigidità dei bordi per evitare cedimenti a metà corsa. Una scatola pinna US a profilo basso accetta la pinna da 9 pollici inclusa o pinne aftermarket, permettendo di regolare direzionalità e velocità per condizioni specifiche.',
      audience:
        'Paddleisti da touring su lunghe distanze, esploratori di acque calme, crocieristi resistenti e paddleisti che vogliono prestazioni configurabili, più acquirenti OEM/ODM.',
      ai_use_cases: [
        'Touring a lunga distanza e crociera costiera',
        'Esplorazione in acque calme e paddle di resistenza',
        'Paddle da prestazione personalizzato con pinne US',
      ],
      ai_comparison:
        'Rispetto alle tavole multiuso standard, la Touring Cruiser aggiunge uno scafo da 12,5 piedi con i bordi rigidi e un sistema a scatola pinna US, mantenendoti dritto sulla rotta per lunghe distanze con meno sbandamento e sforzo.',
      ai_faq: [
        {
          q: 'Posso usare le mie pinne?',
          a: 'Sì. La scatola pinna US a profilo basso è compatibile con il mercato aftermarket, così puoi sostituirle con le tue pinne preferite per acque calme o da gara.',
        },
        {
          q: 'Come raggiungo la pressione massima?',
          a: 'La pompa a mano a doppio cilindro inclusa sposta rapidamente un grande volume e raggiunge pressioni più elevate con meno sforzo, e la tavola è compatibile con l’elettropompa afarer 12VDC opzionale.',
        },
      ],
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
    'sup-horizon-lines': {
      name: 'Seria Horizon Lines',
      desc: 'Premium 11-stopowa nadmuchiwana deska SUP all-round z laminatem fuzyjnym, antypoślizgowym pokładem o fakturze skóry gada i trzema zdejmowanymi pletwami click do każdego rodzaju wody.',
      definition:
        'Premium 11-stopowa nadmuchiwana deska SUP all-round z lekkimi wzmocnieniami z laminatu fuzyjnego, profilowanym antypoślizgowym pokładem o fakturze skóry gada ze wsparciem łuku stopy oraz układem trzech pletw click do jezior, rzek i osłoniętych wód przybrzeżnych.',
      problem:
        'Wszechstronni wioślarze chcą jednej deski, która poradzi sobie od spokojnej wody po wzburzone warunki przybrzeżne, pozostając na tyle lekką, by podróżować, i na tyle sztywną, by dawać odczucie twardej deski.',
      howItWorks:
        'Seria Horizon Lines łączy specjalne warstwy wzmocnienia z laminatu fuzyjnego z konstrukcją drop-stitch PVC o ciśnieniu 15 PSI. Trzy w pełni zdejmowane pletwy click z zoptymalizowanym kątem toe-in pozwalają dostroić trzymanie kursu i zwrotność, a pompka dwusuwowa lub opcjonalna elektryczna 12VDC szybko osiąga pełne ciśnienie.',
      audience:
        'Początkujący kupujący, wioślarze rekreacyjni po płaskiej wodzie, zaawansowani miłośnicy manewrów oraz podróżnicy szukający jednej przenośnej deski SUP all-round z opcjonalnym pełnym zestawem.',
      ai_use_cases: [
        'Wiosłowanie all-round po płaskiej wodzie i przy brzegu',
        'Zaawansowane manewry i touring',
        'Kompaktowe przygody SUP gotowe do podróży',
      ],
      ai_comparison:
        'W porównaniu ze standardowymi deskami SUP all-round, Horizon Lines ma wzmocnienia z laminatu fuzyjnego i układ trzech pletw, dzięki którym można dopasować trzymanie kursu i zwrotność do wszystkiego, od spokojnych jezior po wzburzone wody przybrzeżne.',
      ai_faq: [
        {
          q: 'Czy pletwy można dostosować do warunków?',
          a: 'Tak. Wszystkie trzy pletwy click są w pełni zdejmowane z zoptymalizowanym kątem toe-in, więc możesz ustawić konfigurację pod płaską wodę, prądy rzeczne lub wzburzone warunki przybrzeżne.',
        },
        {
          q: 'Jakie opcje pompowania są w zestawie?',
          a: 'Pompka dwusuwowa wysokociśnieniowa i wysokoprzepływowa pompuje na obu suwach, a deska jest kompatybilna z opcjonalną elektryczną pompką 12VDC 20PSI, która osiąga 15 PSI w około 9 minut.',
        },
      ],
    },
    'sup-rheo': {
      name: 'Seria RHEO',
      desc: 'Profesjonalna 14-stopowa wyścigowa nadmuchiwana deska SUP z hybrydową konstrukcją węglową, przecinającą fale dziobówką wypornościową i elitarnym trzymaniem kursu do sprintów i wyścigów długodystansowych.',
      definition:
        'Profesjonalna 14-stopowa wyścigowa nadmuchiwana deska SUP z hybrydową matrycą węglową bez gięcia, przecinającą fale dziobówką wypornościową i wąskim pokładem 26 cali zaprojektowanym do sprintów, jazdy na czas i treningów o wysokiej kadencji.',
      problem:
        'Wyczynowi zawodnicy potrzebują sztywności twardej deski i idealnego trzymania kursu od deski nadmuchiwanej, bez gięcia, bez oporu i bez przytłaczającej przemysłowej estetyki tradycyjnych wyścigowych desek SUP.',
      howItWorks:
        'Seria RHEO wykorzystuje hybrydową nadmuchiwaną konstrukcję węglową, która eliminuje gięcie, dając kamiennie stabilną platformę. Przecinająca fale dziobówka wypornościowa tnie wodę z minimalnym oporem, szerokość 26 cali zmniejsza tarcie powierzchni zwilżonej, a układ pletw 2+1 utrzymuje kurs przy prędkości i wspiera szybkie zamiatania.',
      audience:
        'Wyczynowi zawodnicy goniący rekordy życiowe, entuzjaści prędkości i zaawansowani wioślarze, którzy chcą sztywnych osiągów wyścigowych z przenośnością nadmuchiwaną, a także kupcy OEM/ODM.',
      ai_use_cases: [
        'Wyścigi SUP i trening sprinterski',
        'Fitness o wysokiej intensywności i interwały',
        'Wyścigi na trasach technicznych i ciasnych kanałach',
      ],
      ai_comparison:
        'W porównaniu z tradycyjnymi wyścigowymi deskami SUP, RHEO oferuje hybrydową nadmuchiwaną konstrukcję węglową bez gięcia i przecinającą fale dziobówkę do wyjątkowej penetracji w czołowej fali, w desce, którą wciąż można spakować do podróży.',
      ai_faq: [
        {
          q: 'Czy RHEO jest wystarczająco stabilna dla początkujących?',
          a: 'Została zaprojektowana dla zawodników i zaawansowanych wioślarzy; szerokość 26 cali stawia na prędkość i efektywność, więc początkujący powinni zacząć na szerszej desce all-round.',
        },
        {
          q: 'Do czego służy układ pletw 2+1?',
          a: 'Główna pletwa utrzymuje doskonałe trzymanie kursu przy wysokich prędkościach, a pletwy boczne zapewniają stabilność boczną podczas szybkich, szerokich nawrotów wokół boi.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Nadmuchiwane SUP Wędkarskie',
      desc: 'Stabilne nadmuchiwane SUP wędkarskie w stylu katamaranu z podwójnymi komorami powietrznymi, uchwytami na wędki i wbudowaną miarką ryb do łowienia na stojąco.',
      definition:
        '11,5-stopowe nadmuchiwane SUP wędkarskie z podwójnymi bocznymi komorami powietrznymi zapewniającymi stabilność wtórną na poziomie katamaranu, uchwytami na wędki, miarką ryb na pokładzie i kadłubem inspirowanym kajakiem do rzucania, ściągania i touringu na stojąco.',
      problem:
        'Wędkarze potrzebują stabilnej platformy do łowienia na stojąco, która nie będzie się chwiać ani przewracać podczas holowania ryby czy pływania po wzburzonej wodzie, pozostając wystarczająco przenośną, by dotrzeć do odległych łowisk.',
      howItWorks:
        'Nadmuchiwane SUP wędkarskie wykorzystuje grube podwójne komory powietrzne, które zapewniają wyjątkową stabilność wtórną podobną do katamaranu lub outriggera. Szpiczasta dziobówka i rufa zachowują szerokość pokładu z trzymaniem kursu jak kajak, a rdzeń drop-stitch PVC jest przystosowany do 15 PSI, dając sztywną i niezawodną platformę.',
      audience:
        'Wędkarze łowiący na woblery i okonie, wędkarze muchowi i kajakowi oraz wioślarze ekspedycyjni wożący lodówki, krzesła biwakowe i podbieraki, a także kupcy OEM/ODM.',
      ai_use_cases: [
        'Łowienie na woblery i okonie na stojąco',
        'Wędkarstwo muchowe i kajakowe z nadmuchiwanej platformy',
        'Wielodniowe wyprawy wędkarskie z ładunkiem',
      ],
      ai_comparison:
        'W porównaniu ze standardowymi deskami SUP, to SUP wędkarskie dodaje podwójne komory w stylu katamaranu, które dramatycznie zwiększają stabilność boczną na stojąco, podczas rzutu i ściągania, z wbudowanymi uchwytami na wędki i miarką ryb.',
      ai_faq: [
        {
          q: 'Czy deska pozostanie stabilna podczas holowania ryby?',
          a: 'Tak. Podwójne komory powietrzne zapewniają stabilność wtórną jak katamaran, zapobiegając chwianiu i przewracaniu podczas łowienia na stojąco, rzucania i ściągania ryby.',
        },
        {
          q: 'Czy jest miejsce na montaż echosondy?',
          a: 'Tak. Dwa profesjonalne czarne mocowania przed antypoślizgowym pokładem mogą przytrzymać uchwyty na wędki, echosondy lub niezbędny sprzęt wędkarski.',
        },
      ],
    },
    'sup-mini': {
      name: 'Seria Mini SUP',
      desc: 'Ultrawszechstronne mini SUP, które działa jak kompaktowa deska paddle, nadmuchiwana deska surfingowa i bodyboard dla dzieci, dorosłych i zwierząt.',
      definition:
        '7-stopowe ultrawszechstronne mini SUP łączące kompaktową deskę paddle, nadmuchiwaną deskę surfingową i bodyboard, z krótkim, szerokim i stabilnym profilem dla dzieci, dorosłych i zwierząt na falach, jeziorach, basenach i cichych zatokach.',
      problem:
        'Rodziny i wszechstronni riderzy potrzebują jednej kompaktowej, przenośnej platformy nadmuchiwanej, która sprawdzi się jako dziecięca deska paddle, dorosła deska surf lub bodyboard oraz zwierzęca platforma pływająca.',
      howItWorks:
        'Seria Mini SUP wykorzystuje krótki, szeroki i bardzo stabilny profil ze zoptymalizowanym stosunkiem objętości do długości, zapewniającym maksymalną wyporność. Reaktywna linia rockera i profil dziobu łapią małe fale, a wytrzymały pokład odporny na przebicia znosi psi pazur, pozostając lekki i szybki w pompowaniu.',
      audience:
        'Rodzice wprowadzający dzieci w wiosłowanie, dorośli szukający przenośnego hybrydowego surfu lub bodyboardu oraz właściciele zwierząt zabierający psy na wodę, a także kupcy OEM/ODM.',
      ai_use_cases: [
        'Nauka paddle i surfu dla dzieci',
        'Bodyboard dla dorosłych i surfing w strefie rwącej fali',
        'Zabawy pet-friendly na jeziorze, basenie i w zatoce',
      ],
      ai_comparison:
        'W porównaniu ze standardowymi deskami SUP, Mini to prawdziwy wielofunkcyjny hybryd, czyli deska paddle, nadmuchiwana deska surfingowa i bodyboard w jednym ultraprzenośnym formacie, z pokładem odpornym na przebicia i przyjaznym zwierzętom.',
      ai_faq: [
        {
          q: 'Czy dorośli mogą korzystać z Mini SUP?',
          a: 'Tak. Zoptymalizowany stosunek objętości do długości wspiera wszystkich, od dzieci po w pełni dorosłych, przy wiosłowaniu na stojąco, bodyboardzie na brzuchu i łapaniu małych fal.',
        },
        {
          q: 'Czy pokład jest bezpieczny dla psów?',
          a: 'Tak. Pokład wykorzystuje wytrzymałe materiały odporne na przebicia, zaprojektowane, by wytrzymać pazury i łapy psów.',
        },
      ],
    },
    'sup-giant': {
      name: 'Gigantyczne SUP Multi-Osobowe',
      desc: 'Ogromne 16,5-stopowe nadmuchiwane SUP dla wielu osób, homologowane na 650 kg, z podwójnym zaworem, kadłubem 8 cali, licznymi uchwytami i trzymaniem kursu dzięki wielu pletwom.',
      definition:
        '16,5-stopowe gigantyczne nadmuchiwane SUP dla wielu osób z kadłubem 8 cali, pompowaniem podwójnym zaworem, wieloma uchwytami, trzymaniem kursu dzięki wielu pletwom i podwójnymi systemami bungee na ładunek do wspólnego wiosłowania, wynajmu i imprez zespołowych.',
      problem:
        'Grupy, operatorzy wypożyczalni i organizatorzy wydarzeń potrzebują jednej ogromnej nadmuchiwanej deski, która bezpiecznie uniesie wielu riderów i pozostanie sztywna pod skoncentrowanym obciążeniem.',
      howItWorks:
        'Gigantyczne SUP multi-osobowe wykorzystuje wytrzymały drop-stitch PVC o ciśnieniu 15 PSI z systemem podwójnego zaworu, dzięki któremu dwie osoby mogą pompować ogromną objętość powietrza jednocześnie. Od ośmiu do dwunastu wytrzymałych uchwytów na obu burtach oraz uchwyty z przodu i z tyłu ułatwiają przenoszenie i ponowne wejście, a układ 4+1 lub z trzema pletwami utrzymuje szeroką deskę na kursie.',
      audience:
        'Operatorzy wypożyczalni, kluby sportów wodnych, organizatorzy programów team building, duże rodziny i grupowe przygody, a także kupcy OEM/ODM.',
      ai_use_cases: [
        'Team building firmowy i grupowy',
        'Komercyjne floty wypożyczalni i wyprawy klubowe',
        'Duże rodzinne i wieloosobowe wyprawy po jeziorze',
      ],
      ai_comparison:
        'W porównaniu ze standardowymi deskami SUP, gigantyczne SUP unosi do 650 kg z kadłubem 8 cali i pompowaniem podwójnym zaworem, a dzięki wielu uchwytom i pletwom całe załogi mogą bezpiecznie wiosłować, przenosić i wchodzić na pokład.',
      ai_faq: [
        {
          q: 'Ile osób może na nim pływać?',
          a: 'Platforma o szerokości 59 cali jest homologowana na ogromne obciążenie około 650 kg, wygodnie mieszcząc wielu riderów, lodówki i sprzęt bezpieczeństwa.',
        },
        {
          q: 'Jak napompować tak dużą deskę?',
          a: 'System podwójnego zaworu pozwala dwóm osobom pompować ogromną objętość wewnętrzną jednocześnie, osiągając zakres roboczy 11–15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'SUP Łódź Użytkowa i na Woblery',
      desc: 'Szerokie jak ponton 47-calowe SUP użytkowe o udźwigu 880 lb z centralnym oknem obserwacyjnym i mocowaniem podwójnego napędu do łowienia na woblery i silników trollingowych.',
      definition:
        '11,5-stopowe użytkowe i woblerowe SUP typu skiff o profilu szerokości 47 cali, ładowności 880 lb, centralnym oknie obserwacyjnym, mocowaniach akcji i rufie w kształcie jaskółczego ogona z mocowaniem podwójnego napędu do łowienia na woblery, transportu i zastosowań użytkowych.',
      problem:
        'Wędkarze na woblery i użytkownicy potrzebują niemal nie do przewrócenia nadmuchiwanej platformy o ogromnej ładowności na wędkarza, lodówki, akumulatory, a nawet elektryczny silnik trollingowy.',
      howItWorks:
        'Użytkowe SUP Skiff wykorzystuje przysadzisty, pontonowy profil 47 cali, praktycznie niemożliwy do przewrócenia podczas rzutu lub holowania dużych ryb. Wzmocniona konstrukcja drop-stitch jest przystosowana do 880 lb, a rufa w kształcie jaskółczego ogona oferuje wstępnie skonfigurowaną przestrzeń montażową dla systemów napędowych.',
      audience:
        'Wędkarze na woblery i muchowi, spearfisherzy, obserwatorzy płycizn i wędkarze używający silników trollingowych na nadmuchiwanej platformie, a także kupcy OEM/ODM.',
      ai_use_cases: [
        'Łowienie na woblery i muchowo na stojąco lub siedząco',
        'Podwodna obserwacja i spearfishing',
        'Transport ciężkich ładunków i stabilna praca użytkowa',
      ],
      ai_comparison:
        'W porównaniu ze standardowymi SUP wędkarskimi, Skiff to szeroka jak ponton platforma użytkowa o ładowności 880 lb, z centralnym oknem obserwacyjnym, wstępnie skonfigurowanym mocowaniem podwójnego napędu i stabilnością pozwalającą swobodnie chodzić, idealna do łowienia na woblery i muchowo.',
      ai_faq: [
        {
          q: 'Czy udźwignie silnik trollingowy?',
          a: 'Tak. Rufa w kształcie jaskółczego ogona zawiera wstępnie skonfigurowaną przestrzeń montażową dla systemów napędowych i deska unosi silnik oraz akumulatory w granicach swojej ładowności 880 lb.',
        },
        {
          q: 'Do czego służy centralne okno obserwacyjne?',
          a: 'Okno pozwala przepatrywać płycizny w poszukiwaniu struktur i ruchów przynęty, idealne do spearfishingu i obserwacji płytkiej wody.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'SUP Touring Cruiser',
      desc: 'Długodystansowe 12,5-stopowe nadmuchiwane SUP touringowe z niskoprofilową skrzynką pletwy US, premium 9-calową pletwą touringową i rdzeniem drop-stitch do wydajnego wiosłowania.',
      definition:
        '12,5-stopowa nadmuchiwana deska SUP touringowa z niskoprofilową skrzynką pletwy US, premium 9-calową pletwą wyścigową i touringową oraz sztywną konstrukcją drop-stitch do długodystansowego wiosłowania, eksploracji płaskiej wody i strojenia osiągów.',
      problem:
        'Wioślarze touringowi pokonujący długie dystanse potrzebują deski ze sztywnymi burtami zapobiegającymi uginaniu, przewidywalnym trzymaniem kursu i systemem pletw, który można dostroić do różnych warunków wodnych.',
      howItWorks:
        'Touring Cruiser łączy rdzeń drop-stitch PVC o ciśnieniu 15 PSI ze sztywnością burt zapobiegającą uginaniu na środku. Niskoprofilowa skrzynka pletwy US przyjmuje dołączoną 9-calową pletwę wyścigową i touringową lub pletwy aftermarket, pozwalając dostroić trzymanie kursu i prędkość do konkretnych warunków.',
      audience:
        'Wioślarze touringowi na długich dystansach, odkrywcy płaskiej wody, wytrwali cruizerzy i wioślarze szukający regulowanych osiągów, a także kupcy OEM/ODM.',
      ai_use_cases: [
        'Długodystansowy touring i przybrzeżne wiosłowanie',
        'Eksploracja płaskiej wody i wiosłowanie wytrzymałościowe',
        'Spersonalizowane wiosłowanie z pletwami US',
      ],
      ai_comparison:
        'W porównaniu ze standardowymi deskami all-round, Touring Cruiser dodaje kadłub 12,5 stopy ze sztywnymi burtami i system skrzynki pletwy US, dzięki czemu trzymasz kurs na długich dystansach z mniejszym zbaczaniem i wysiłkiem.',
      ai_faq: [
        {
          q: 'Czy mogę używać własnych pletw?',
          a: 'Tak. Niskoprofilowa skrzynka pletwy US jest gotowa na aftermarket, więc możesz wsunąć ulubione pletwy do płaskiej wody lub wyścigowe, by dostroić osiągi.',
        },
        {
          q: 'Jak osiągnąć pełne ciśnienie?',
          a: 'Dołączona ręczna pompka dwucylindrowa szybko tłoczy dużą objętość i osiąga wyższe ciśnienia mniejszym wysiłkiem, a deska jest kompatybilna z opcjonalną elektryczną pompką afarer 12VDC.',
        },
      ],
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
    'sup-horizon-lines': {
      name: '地平线系列',
      desc: '11英尺高级全能充气SUP桨板，采用熔合层压结构、仿爬行动物皮防滑垫和三个可拆卸卡扣尾鳍，适用各种水域条件。',
      definition:
        '一块11英尺高级全能充气SUP桨板，带有轻质熔合层压加固、带足弓支撑的弧形仿爬行动物皮防滑垫，以及用于湖泊、河流和近岸避风水域的三卡扣尾鳍系统。',
      problem:
        '全能型划手想要一块板子就能应对从平水巡航到波涛近岸的一切情况，同时足够轻便便于旅行携带，又足够坚固带来硬板般的感觉。',
      howItWorks:
        '地平线系列将专用熔合层压加固层与额定15 PSI的降落伞针法PVC结构相结合。三个完全可拆卸、带优化内倾角的卡扣尾鳍让划手可以调校循迹与操控性，双作用泵或可选装12VDC电动泵可快速达到满压。',
      audience: '首次购买者、平水巡航者、进阶操控爱好者和旅行者，想要一块便于携带的全能充气SUP桨板，可选配全套装备包。',
      ai_use_cases: ['全能平水与近岸划行', '进阶操控练习与长途巡航', '适合旅行的紧凑SUP冒险'],
      ai_comparison:
        '与标准全能SUP桨板相比，地平线系列采用熔合层压加固和三角尾鳍系统，让你针对从平静湖泊到澎湃近岸水域的任何情况，自定义循迹与操控性。',
      ai_faq: [
        {
          q: '尾鳍可以根据条件定制吗？',
          a: '可以。三个卡扣尾鳍都完全可拆卸，带有优化内倾角，你可以针对平水循迹、河流水流或澎湃近岸条件进行配置。',
        },
        {
          q: '包含哪些充气方式？',
          a: '双作用高压/大流量泵在推拉两个行程都能充气，桨板还兼容可选装12VDC 20PSI电动泵，约9分钟即可达到15 PSI。',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO系列',
      desc: '14英尺专业竞速充气SUP桨板，采用碳纤维混合结构、破浪式排水鼻头，为冲刺和长距离竞速提供精英级循迹。',
      definition:
        '一块14英尺专业竞速充气SUP桨板，采用零弯折的碳纤维混合基体、破浪式排水鼻头，以及为冲刺赛、计时赛和高频训练打造的26英寸窄甲板。',
      problem: '竞技选手需要充气桨板拥有硬板般的刚性和笔直循迹，同时摒弃传统竞速SUP的弯折、阻力与沉闷的工业外观。',
      howItWorks:
        'RHEO系列采用碳纤维混合充气结构，消除弯折，提供磐石般稳固的平台。其破浪式排水鼻头以最小阻力切开波浪，26英寸宽度减少浸湿表面摩擦，2+1尾鳍配置在高速下保持循迹并助力快速扫尾转弯。',
      audience:
        '追求个人最好成绩的竞技选手、速度爱好者，以及想要充气便携与硬板竞速性能兼得的进阶划手，还有采购竞速充气SUP桨板的OEM/ODM买家。',
      ai_use_cases: ['竞技SUP竞速与冲刺训练', '高强度健身与间歇划行', '技术赛道与狭窄水道竞速'],
      ai_comparison:
        '与传统竞速SUP桨板相比，RHEO提供零弯折的碳纤维混合充气结构和破浪式鼻头，在迎头波浪中获得出色的穿透力，同时仍可收纳打包旅行。',
      ai_faq: [
        {
          q: 'RHEO对初学者来说足够稳定吗？',
          a: '它专为竞技和进阶划手设计；26英寸宽度优先考虑速度与效率，初学者应从更宽的全能板上开始。',
        },
        {
          q: '2+1尾鳍配置是做什么用的？',
          a: '中央尾鳍在高速下保持出色的直线循迹，而侧鳍在快速横扫浮标转弯时提供横向稳定性。',
        },
      ],
    },
    'sup-fishing': {
      name: '充气钓鱼SUP',
      desc: '稳定双体船式充气钓鱼SUP桨板，带双面气室、鱼竿支架和甲板鱼尺，可站立抛投与收线。',
      definition:
        '一块11.5英尺充气钓鱼SUP，带双面气室，提供双体船级别的次级稳定性，配有鱼竿支架、甲板鱼尺和皮划艇灵感船体，可站立抛投、收线与长途巡航。',
      problem:
        '垂钓者需要一个稳定的站立抛投平台，在收大鱼或穿越澎湃水面时不会摇晃或倾覆，同时足够便携，能抵达偏远钓点。',
      howItWorks:
        '充气钓鱼SUP采用厚实双面气室，带来类似双体船或舷外支架船的出色次级稳定性。尖头尖尾保留甲板宽度并具有皮划艇般的循迹，降落伞针法PVC核心额定15 PSI，构成坚固可靠平台。',
      audience:
        '诱饵和鲈鱼垂钓者、飞钓和皮划艇垂钓者，以及携带冷藏箱、露营椅和抄网的远足划手，还有采购充气钓鱼SUP的OEM/ODM买家。',
      ai_use_cases: ['站立诱饵与鲈鱼垂钓', '从充气平台上飞钓与皮划艇垂钓', '带物资的多日钓鱼远足'],
      ai_comparison:
        '与标准桨板相比，这款钓鱼SUP增加了双体船式双面气室，显著提升站立、抛投与收线时的横向稳定性，并内置鱼竿支架与一体化鱼尺。',
      ai_faq: [
        {
          q: '对抗大鱼时桨板会保持稳定吗？',
          a: '会。双面气室提供双体船般的次级稳定性，站立抛投或收线时防止摇晃与倾覆。',
        },
        {
          q: '有地方安装探鱼器吗？',
          a: '有。防滑垫前方两个专业级黑色支架可以固定鱼竿支架、探鱼器或必要钓具。',
        },
      ],
    },
    'sup-mini': {
      name: '迷你SUP系列',
      desc: '超多用途迷你充气SUP，可兼作紧凑型桨板、充气冲浪板和趴板，适合儿童、成人和宠物。',
      definition:
        '一块7英尺超多用途迷你充气SUP，融合紧凑型桨板、充气冲浪板和趴板，采用短而宽且稳定的轮廓，适合儿童、成人在海浪、湖泊、泳池和风平浪静的湾内使用。',
      problem:
        '家庭和多用途划手需要一块紧凑、便携的充气平台，既能当儿童桨板、成人冲浪板或趴板，也是适合宠物的漂浮甲板。',
      howItWorks:
        '迷你SUP系列采用短而宽、极其稳定的轮廓，并以优化的容积与长度比提供最大浮力。灵敏的翘度和舷缘捕捉小浪，耐穿刺甲板可承受狗爪，同时保持轻量并快速完成充气。',
      audience:
        '带儿童接触桨类运动的家长、想要便携冲浪或趴板二合一产品的成人，以及带狗下水的宠物主人，还有采购迷你充气SUP的OEM/ODM买家。',
      ai_use_cases: ['儿童SUP与冲浪进阶', '成人趴板与离岸拍岸浪冲浪', '宠物友好的湖泊、泳池与静湾玩水'],
      ai_comparison:
        '与标准SUP桨板相比，迷你SUP是真正的多用途二合一产品——桨板、充气冲浪板和趴板集于一个超便携的尺寸中——并带有耐穿刺、宠物友好的甲板。',
      ai_faq: [
        {
          q: '成人可以使用迷你SUP吗？',
          a: '可以。优化的容积与长度比支持从儿童到完全成人的所有人，无论站立划行、俯卧趴板还是捕捉小浪。',
        },
        {
          q: '甲板对狗安全吗？',
          a: '安全。甲板采用耐穿刺的坚固材料，专为承受狗的利爪与足掌而设计。',
        },
      ],
    },
    'sup-giant': {
      name: '多人巨型SUP',
      desc: '16.5英尺多人充气巨型SUP桨板，承重650公斤，带双阀充气、8英寸船体、多个把手和多鳍循迹。',
      definition:
        '一块16.5英尺多人巨型充气SUP，带8英寸船体、双阀充气、多把手配置、多鳍循迹和双置物弹力绳系统，面向团体划行、租赁和团队活动。',
      problem: '团体、租赁运营方和活动组织者需要一块能安全承载多名划手、并在集中负荷下保持坚固的巨型充气板。',
      howItWorks:
        '多人巨型SUP采用额定15 PSI的重型降落伞针法PVC，配双阀系统，两人可同时为庞大的气量充气。两侧舷缘共8至12个重型把手，加上船头和船尾把手，搬运与重新上板都很方便，4+1或三鳍配置则让宽阔板体笔直循迹。',
      audience:
        '租赁运营商、水上运动俱乐部、举办团队建设项目的活动组织者、大家庭和团体探险者，还有采购多人巨型充气SUP的OEM/ODM买家。',
      ai_use_cases: ['企业与团体团队建设活动', '商业租赁船队与俱乐部远足', '大家庭与多划手湖上出游'],
      ai_comparison:
        '与标准SUP桨板相比，巨型SUP可承载多达650公斤，配有8英寸船体和双阀充气，并采用多把手、多鳍设计，让整个团队都能安全划行、搬运和重新上板。',
      ai_faq: [
        {
          q: '能坐多少人？',
          a: '59英寸宽的平台额定承载约650公斤的重量，可轻松容纳多名划手、冷藏箱和救生装备。',
        },
        {
          q: '如何给这么大的板充气？',
          a: '双阀系统让两个人可以同时为巨大内部气量充气，达到11–15 PSI的工作区间。',
        },
      ],
    },
    'sup-lure-skiff': {
      name: '工具与诱饵小艇SUP',
      desc: '47英寸驳船级超宽工具SUP，承重880磅，带中央观察窗和双推进器安装位，供诱饵垂钓和电动推进器配置。',
      definition:
        '一块11.5英尺驳船级宽体工具与诱饵小艇SUP，47英寸轮廓，880磅承重，中央观察窗、动作安装座和带双推进器安装位的燕尾舷尾，供诱饵垂钓、载运和工具用途。',
      problem:
        '诱饵垂钓者和工具用户需要一块几乎不可能翻覆的充气平台，拥有巨大的载重能力，装下垂钓者、冷藏箱、蓄电池甚至电动推进器。',
      howItWorks:
        '工具与诱饵小艇SUP采用矮胖驳船式47英寸轮廓，在抛投或搏大鱼时几乎不可能翻覆。加固的重型降落伞针法结构额定880磅，燕尾舷尾为动力推进系统提供了预配置安装空间。',
      audience:
        '诱饵与飞钓者、潜水捕鱼者、浅水观察者，以及从充气平台上使用电动推进器的垂钓者，还有采购多功能诱饵小艇SUP的OEM/ODM买家。',
      ai_use_cases: ['站立或坐姿下的诱饵与飞钓', '水下侦察与潜水捕鱼', '重载运输与稳定工具用途'],
      ai_comparison:
        '与标准钓鱼SUP桨板相比，诱饵小艇是驳船级宽度的工具平台，额定880磅，带中央观察窗、预配置双推进器安装位，以及可供站立移动的稳定性，适合诱饵与飞钓。',
      ai_faq: [
        {
          q: '它能承受电动推进器吗？',
          a: '可以。燕尾舷尾包含为动力推进系统预配置的安装空间，桨板可在880磅载重内承载电机和蓄电池。',
        },
        {
          q: '中央观察窗是做什么用的？',
          a: '窗口让你观察浅滩中的结构与饵鱼动向，非常适合潜水捕鱼和浅水观察。',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: '长途巡航SUP',
      desc: '12.5英尺长距离充气巡航SUP，采用低剖面US尾鳍盒、高级9英寸巡航尾鳍和降落伞针法核心，带来高效巡航。',
      definition:
        '一块12.5英尺充气巡航SUP桨板，配低剖面US尾鳍盒、高级9英寸竞速/巡航尾鳍和坚固的降落伞针法结构，用于长距离巡航、平水探索和可调校的竞速划行。',
      problem: '长距离巡航划手需要一块舷缘坚固、不会中段下垂的板子，循迹可预期，并且尾鳍系统能针对不同水域条件调校。',
      howItWorks:
        '长途巡航SUP将额定15 PSI的降落伞针法PVC核心与坚固舷缘结合，防止中段下垂。低剖面US尾鳍盒可容纳随附的9英寸竞速/巡航尾鳍或改装尾鳍，让划手针对具体条件调校循迹与速度。',
      audience: '长距离巡航划手、平水探索者、耐力巡航者，以及想要可调校表现的划手，还有采购充气巡航SUP的OEM/ODM买家。',
      ai_use_cases: ['长距离巡航与近岸划行', '平水探索与耐力划行', '使用US尾鳍升级的个性化竞速划行'],
      ai_comparison:
        '与标准全能板相比，长途巡航SUP增加了12.5英尺船体、坚固舷缘和US尾鳍盒系统，让你在长距离上以更少的偏航和费力保持航线。',
      ai_faq: [
        {
          q: '我可以用自己的尾鳍吗？',
          a: '可以。低剖面US尾鳍盒兼容改装市场，你可以换入喜爱的平水或竞速尾鳍来调校性能。',
        },
        {
          q: '如何达到满压？',
          a: '随附的双缸手泵可快速输送大流量并轻松达到更高压力，桨板还兼容可选装的afarer 12VDC电动泵。',
        },
      ],
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
    'sup-horizon-lines': {
      name: 'ホライゾンラインシリーズ',
      desc: 'フュージョンラミネート構造、爬虫類の肌を模したグリップパッド、3枚の脱着式クリックフィンを備えた、あらゆるコンディションに対応する11フィートのプレミアム万能膨張式SUP。',
      definition:
        '軽量なフュージョンラミネート補強、足裏のアーチを支える立体的な爬虫類肌グリップパッド、湖・川・穏やかな沿岸域向けのトリプルクリックフィン装備を備えた11フィートのプレミアム万能膨張式SUPボード。',
      problem:
        '万能型のパドラーは、凪からうねりのある沿岸域まで対応しつつ、持ち運びに十分軽く、ハードボードのような剛性感も備えた1枚のボードを求めています。',
      howItWorks:
        'ホライゾンラインシリーズは、専用のフュージョンラミネート補強層と15PSIに対応するドロップステッチPVC構造を組み合わせています。最適化されたトーイン角を持つ3枚の完全脱着式クリックフィンでトラッキングと操縦性を調整でき、ダブルアクションポンプまたは任意の12VDC電動ポンプで素早く満圧に到達します。',
      audience:
        '初めての購入者、凪のクルージング愛好家、上級マニューバ愛好家、そして任意のフルパッケージ付きで持ち運べる万能膨張式SUPを求める旅行者。',
      ai_use_cases: [
        '万能型の凪・沿岸パドリング',
        '上級マニューバ練習とツーリング',
        '旅行に適したコンパクトSUPアドベンチャー',
      ],
      ai_comparison:
        '標準的な万能SUPボードと比べ、ホライゾンラインはフュージョンラミネート補強とトリプルフィンシステムを備え、穏やかな湖からうねりのある沿岸まで、状況に応じてトラッキングと操縦性をカスタマイズできます。',
      ai_faq: [
        {
          q: 'フィンはコンディションに合わせて調整できますか？',
          a: 'できます。3枚のクリックフィンはすべて最適化されたトーイン角で完全に脱着可能なため、凪のトラッキング、川の流れ、うねりのある沿岸などにセットアップを調整できます。',
        },
        {
          q: '含まれる空気入れのオプションは？',
          a: 'ダブルアクションの高圧・大容量ポンプが往復両方のストロークで空気を入れられ、約9分で15PSIに達する任意の12VDC 20PSI電動ポンプにも対応しています。',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEOシリーズ',
      desc: 'カーボンハイブリッド構造、波を切り裂くディスプレースメントノーズ、エリート級のトラッキングを備えた、スプリントと長距離レース向け14フィートのプロフェッショナルレース用膨張式SUP。',
      definition:
        'フレックスゼロのカーボンハイブリッドマトリックス、波を切り裂くディスプレースメントノーズ、スプリント・タイムトライアル・高ケイデンストレーニング向けに設計された26インチの狭いデッキを備えた14フィートのプロフェッショナルレース膨張式SUPボード。',
      problem:
        '競技レーサーには、従来レースSUPのフレックスや抵抗、退屈な工業的デザインを排除しながら、膨張式ボードにハードボード並みの剛性と直線的なトラッキングが求められます。',
      howItWorks:
        'RHEOシリーズはフレックスを完全に排除するカーボンハイブリッド膨張構造で、盤石なプラットフォームを実現。波を切り裂くディスプレースメントノーズが抵抗を最小限にうねりを貫き、26インチ幅が濡れた表面の摩擦を減らし、2+1フィンセットアップが高速時のトラッキングを維持しつつ素早い巻き込みターンを助けます。',
      audience:
        '自己ベストを追う競技レーサー、スピード愛好家、そして膨張式の携帯性で硬質レース性能を求める上級パドラー。加えてレース用膨張式SUPの調達を検討するOEM/ODMバイヤー。',
      ai_use_cases: [
        '競技SUPレースとスプリントトレーニング',
        '高強度フィットネスとインターバルパドリング',
        'テクニカルコースと狭い水路でのレース',
      ],
      ai_comparison:
        '従来のレースSUPボードと比べ、RHEOはフレックスゼロのカーボンハイブリッド膨張構造と波切りノーズを備え、うねりの中でも優れた推進力を発揮しつつ、旅行用にコンパクトに収納できます。',
      ai_faq: [
        {
          q: 'RHEOは初心者にも十分安定していますか？',
          a: '競技者と上級パドラー向けに設計されています。26インチ幅はスピードと効率を優先するため、初心者はより幅広い万能ボードから始めるべきです。',
        },
        {
          q: '2+1フィンセットアップは何のため？',
          a: '中央フィンが高速時の優れた直線トラッキングを維持し、サイドフィンが速いブイの巻き込みターンで横方向の安定性を提供します。',
        },
      ],
    },
    'sup-fishing': {
      name: 'インフレータブルフィッシングSUP',
      desc: '両面エアチャンバー、ロッドホルダーマウント、デッキ上のフィッシュルーラーを備えた、直立キャスティングとリーリングができる安定したカタマラン方式の膨張式フィッシングSUP。',
      definition:
        'カタマランレベルの二次安定性を実現する両面エアチャンバー、ロッドホルダーマウント、デッキ上のフィッシュルーラー、カヤック風の船体を備え、立ちながらキャスト・リーリング・ツーリングができる11.5フィートの膨張式フィッシングSUP。',
      problem:
        'アングラーには、魚をリーリングしたりうねりのある水を航行したりする際にぐらついたり転覆したりしない安定した立ちキャストプラットフォームが必要ですが、遠くの釣り場に持ち運べる携帯性も欠かせません。',
      howItWorks:
        'インフレータブルフィッシングSUPは、カタマランやアウトリガーに似た優れた二次安定性を生む厚い両面エアチャンバーを採用。尖ったノーズとテールがカヤックのようなトラッキングでデッキ幅を維持し、ドロップステッチPVCコアは15PSIに対応し、剛性の高い頼れるプラットフォームを提供します。',
      audience:
        'ルアー・バスフィッシングアングラー、フライ・カヤックフィッシャーマン、クーラー・キャンプチェア・ランディングネットを積む遠征パドラー。加えて膨張式フィッシングSUPの調達を検討するOEM/ODMバイヤー。',
      ai_use_cases: [
        '立ちながらのルアー・バスフィッシング',
        '膨張式プラットフォームからのフライ・カヤックフィッシング',
        '荷物を積んだ多日数の釣り遠征',
      ],
      ai_comparison:
        '標準的なパドルボードと比べ、このフィッシングSUPはカタマラン式の両面エアチャンバーを追加し、立つ・キャストする・リーリングする際の横方向の安定性を劇的に向上。ロッドマウントと一体型フィッシュルーラーも内蔵しています。',
      ai_faq: [
        {
          q: '魚と格闘中もボードは安定していますか？',
          a: 'はい。両面エアチャンバーがカタマラン級の二次安定性を提供し、立ちキャストやリーリング時のぐらつきや転覆を防ぎます。',
        },
        {
          q: '魚群探知機を取り付ける場所はありますか？',
          a: 'はい。グリップパッド前方の業務用黒色マウント2基に、ロッドホルダー、魚群探知機、必須釣具を固定できます。',
        },
      ],
    },
    'sup-mini': {
      name: 'ミニSUPシリーズ',
      desc: 'コンパクトパドルボード、サーフィン用膨張式ボード、ボディボードを1台に兼ねる超多用途ミニ膨張式SUP。子供・大人・ペットに対応。',
      definition:
        'コンパクトパドルボード、サーフィン用膨張式ボード、ボディボードを融合した7フィートの超多用途ミニ膨張式SUP。波、湖、プール、穏やかな入り江での子供・大人・ペット向けに、短く幅広で安定したプロファイルを持つ。',
      problem:
        '家族や多用途のライダーには、子供用パドルボード、大人向けサーフボードやボディボード、ペット対応の浮遊デッキとして使える、持ち運びやすいコンパクトな膨張式プラットフォームが1台必要です。',
      howItWorks:
        'ミニSUPシリーズは、最大浮力を生む最適化された体積対長さ比を持つ、短く幅広で非常に安定したプロファイルを採用。レスポンスの良いロッカーラインとレールプロファイルが小さな波をキャッチし、耐パンク性のデッキは犬の足を支えつつ、軽量ですぐに膨張できます。',
      audience:
        '子供をパドルスポーツに導く親、持ち運びできるサーフ・ボディボードハイブリッドを求める大人、愛犬を水辺に連れていくペットオーナー。加えてミニ膨張式SUPの調達を検討するOEM/ODMバイヤー。',
      ai_use_cases: [
        '子供のSUP・サーフの上達',
        '大人のボディボードと岸波サーフィン',
        'ペットと楽しむ湖・プール・穏やかな入り江',
      ],
      ai_comparison:
        '標準的なSUPボードと比べ、ミニは真の多目的ハイブリッドです。パドルボード、サーフィン用膨張式ボード、ボディボードを超携帯フットプリントに集約し、耐パンク性でペットにも優しいデッキを備えています。',
      ai_faq: [
        {
          q: '大人もミニSUPに乗れますか？',
          a: 'はい。最適化された体積対長さ比が、立ちパドリング、うつ伏せボディボード、小さな波のキャッチまで、子供から成人まで全員を支えます。',
        },
        {
          q: 'デッキは犬にとって安全ですか？',
          a: 'はい。デッキは犬の爪や足を支えるよう設計された、耐久性のある耐パンク性素材を使用しています。',
        },
      ],
    },
    'sup-giant': {
      name: '多人数ジャイアントSUP',
      desc: '650kg対応の16.5フィート多人数用膨張式SUP。デュアルバルブの空気入れ、8インチ船体、多数のハンドル、マルチフィントラッキングを備える。',
      definition:
        '8インチ船体、デュアルバルブ空気入れ、多ハンドル構成、マルチフィントラッキング、ダブルカーゴバンジーシステムを備えた、グループパドリング・レンタル・チームイベント向けの16.5フィート多人数用ジャイアント膨張式SUP。',
      problem:
        'グループ、レンタル事業者、イベント主催者は、複数のライダーを安全に運び、集中荷重下でも剛性を保つ1枚の巨大な膨張式ボードを必要としています。',
      howItWorks:
        '多人数用ジャイアントSUPは、2人が同時に大きな空気容積を入れられるデュアルバルブシステムを備えた15PSI対応のヘビーデューティ・ドロップステッチPVCを採用。両レール沿いの8〜12本のヘビーデューティハンドルとノーズ・テールハンドルで持ち運びと再乗り込みが容易になり、4+1またはトリフィンセットアップが幅広のボードを直線的に保ちます。',
      audience:
        'レンタル事業者、ウォータースポーツクラブ、チームビルディングを実施するイベント主催者、大家族、グループ冒険者。加えて多人数用ジャイアント膨張式SUPの調達を検討するOEM/ODMバイヤー。',
      ai_use_cases: [
        '企業・グループのチームビルディングセッション',
        '商業レンタル船団とクラブ遠征',
        '大家族・多人数での湖へのお出かけ',
      ],
      ai_comparison:
        '標準的なSUPボードと比べ、ジャイアントSUPは8インチ船体とデュアルバルブ空気入れで最大650kgを運べます。多ハンドル・多フィン設計により、チーム全員が安全にパドル・運搬・再乗り込みできます。',
      ai_faq: [
        {
          q: '何人乗れますか？',
          a: '59インチ幅のプラットフォームは約650kgの重量に耐える設計で、複数のライダー、クーラー、安全装備を快適に支えます。',
        },
        {
          q: 'こんなに大きなボードはどうやって空気を入れますか？',
          a: 'デュアルバルブシステムにより、2人で同時に巨大な内部空気容積を入れられ、11〜15PSIの動作域に到達できます。',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'ユーティリティ＆ルアースキフSUP',
      desc: 'ポンツーン並みの幅47インチ、880lbの積載能力、中央観察窓、デュアルスラスターマウントを備えた、ルアーフィッシングとトローリングモーター用のユーティリティSUP。',
      definition:
        '47インチのポンツーン級プロファイル、880lbの積載能力、中央観察窓、アクションマウント、デュアルスラスターマウント付きのツバメ尾ステルンを備えた、ルアーフィッシング・運搬・ユーティリティ用途向けの11.5フィート・ポンツーン級ユーティリティ＆ルアースキフSUP。',
      problem:
        'ルアーアングラーやユーティリティユーザーには、アングラー本人、クーラー、バッテリー、さらには電動トローリングモーターまで載せられる膨大な積載能力を持つ、ほぼ転覆しない膨張式プラットフォームが必要です。',
      howItWorks:
        'ユーティリティ＆ルアースキフSUPは、キャスト中や大型魚との格闘中に実質的に転覆不可能な、ずんぐりしたポンツーン状の47インチ・アウトラインを採用。強化されたヘビーデューティ・ドロップステッチ構造は880lbに耐え、ツバメ尾ステルンは推進システム用の事前構成済みマウントスペースを提供します。',
      audience:
        'ルアー・フライアングラー、スピアフィッシャー、浅瀬の観察者、膨張式プラットフォームからトローリングモーターを使うアングラー。加えて多目的ルアースキフSUPの調達を検討するOEM/ODMバイヤー。',
      ai_use_cases: [
        '立位・座位でのルアー・フライフィッシング',
        '水中偵察とスピアフィッシング',
        '重量物の運搬と安定したユーティリティ用途',
      ],
      ai_comparison:
        '標準的なフィッシングSUPボードと比べ、ルアースキフは880lb対応のポンツーン級ユーティリティプラットフォームで、中央観察窓、事前構成済みデュアルスラスターマウント、ルアー・フライフィッシング向けの歩行可能な安定性を備えています。',
      ai_faq: [
        {
          q: 'トローリングモーターを支えられますか？',
          a: 'はい。ツバメ尾ステルンに動力推進システム用の事前構成済みマウントスペースが含まれ、ボードは880lbの積載能力内でモーターとバッテリーを運べます。',
        },
        {
          q: '中央観察窓は何のため？',
          a: '構造物やベイトの動きを求めて浅瀬を観察できる窓で、スピアフィッシングや浅瀬の観察に最適です。',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'ツーリングクルーザーSUP',
      desc: '薄型USフィンボックス、プレミアム9インチツーリングフィン、ドロップステッチコアを備えた、効率的なクルージングのための12.5フィート長距離ツーリング用膨張式SUP。',
      definition:
        '薄型USフィンボックス、プレミアム9インチレース/ツーリングフィン、長距離クルージング・フラットウォーター探検・調整可能なパフォーマンスパドリングに適する剛性のあるドロップステッチ構造を備えた12.5フィートのツーリング膨張式SUPボード。',
      problem:
        '長距離を漕ぐツーリングパドラーには、たわみを防ぐ剛性レール、予測しやすい直線トラッキング、異なる水況に合わせて調整できるフィンシステムを備えたボードが必要です。',
      howItWorks:
        'ツーリングクルーザーは15PSI対応のドロップステッチPVCコアと、スパン中央のたわみを防ぐレール剛性を組み合わせています。薄型USフィンボックスが同梱の9インチレース/ツーリングフィンまたはアフターマーケットフィンに対応し、特定のコンディションに合わせてトラッキングとスピードを調整できます。',
      audience:
        '長距離ツーリングパドラー、フラットウォーター探検者、持久力クルーザー、調整可能なパフォーマンスを求めるパドラー。加えてツーリング用膨張式SUPボードの調達を検討するOEM/ODMバイヤー。',
      ai_use_cases: [
        '長距離ツーリングと沿岸クルージング',
        'フラットウォーター探検と持久力パドリング',
        'USフィンアップグレードによるカスタムパフォーマンスパドリング',
      ],
      ai_comparison:
        '標準的な万能ボードと比べ、ツーリングクルーザーは剛性レールとUSフィンボックスシステムを備えた12.5フィート船体を追加し、長距離でもヨーと労力を少なくしてコースを維持します。',
      ai_faq: [
        {
          q: '自分のフィンを使えますか？',
          a: 'はい。薄型USフィンボックスはアフターマーケット対応なので、お好みのフラットウォーター用やレース用フィンに交換して性能を調整できます。',
        },
        {
          q: '満圧にするには？',
          a: '同梱のデュアルシリンダーハンドポンプが素早く大量の空気を送り、より少ない労力で高圧に達します。任意のafarer 12VDC電動ポンプにも対応しています。',
        },
      ],
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
    'sup-horizon-lines': {
      name: '호라이즌 라인 시리즈',
      desc: '퓨전 라미네이트 구조, 파충류 피부 질감 그립 패드, 탈착식 클릭 핀 3개를 갖춘 모든 수상 조건에 대응하는 11피트 프리미엄 올라운드 인플레이터블 SUP.',
      definition:
        '가벼운 퓨전 라미네이트 보강, 발 아치를 지지하는 곡선형 파충류 피부 질감 그립 패드, 호수·강·보호된 연안 수역용 트리플 클릭 핀 시스템을 갖춘 11피트 프리미엄 올라운드 인플레이터블 SUP 보드.',
      problem:
        '다재다능한 패들러는 잔잔한 물 크루징에서 파도치는 해안 조건까지 모두 처리하면서도, 여행에 충분히 가볍고 하드쉘 느낌의 강성을 갖춘 보드 하나를 원합니다.',
      howItWorks:
        '호라이즌 라인 시리즈는 전문 퓨전 라미네이트 보강층과 15PSI 정격의 드롭스티치 PVC 구조를 결합합니다. 최적화된 토인 각도의 완전 탈착식 클릭 핀 3개로 글라이딩과 조종성을 조절할 수 있고, 더블액션 펌프 또는 옵션 12VDC 전동 펌프로 빠르게 최대 압력에 도달합니다.',
      audience:
        '첫 구매자, 잔잔한 물 크루저, 고급 기동 연습 애호가, 옵션 풀 패키지가 포함된 휴대용 올라운드 인플레이터블 SUP 보드를 원하는 여행자.',
      ai_use_cases: ['평수 및 연안 올라운드 패들링', '고급 기동 연습과 투어링', '여행에 적합한 컴팩트한 SUP 어드벤처'],
      ai_comparison:
        '표준 올라운드 SUP 보드와 비교해 호라이즌 라인은 퓨전 라미네이트 보강과 트리플 핀 시스템을 갖춰, 잔잔한 호수부터 파도치는 연안 물까지 모든 상황에 맞춰 글라이딩과 조종성을 사용자 지정할 수 있습니다.',
      ai_faq: [
        {
          q: '핀을 조건에 맞게 조정할 수 있나요?',
          a: '네. 클릭 핀 3개 모두 최적화된 토인 각도로 완전히 탈착 가능해, 평수 글라이딩, 하천 흐름, 파도치는 연안 조건에 맞게 설정을 조절할 수 있습니다.',
        },
        {
          q: '포함된 공기 주입 옵션은 무엇인가요?',
          a: '더블액션 고압·대용량 펌프가 양 스트로크 모두에서 공기를 주입하며, 보드는 약 9분 만에 15PSI에 도달하는 옵션 12VDC 20PSI 전동 펌프와도 호환됩니다.',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO 시리즈',
      desc: '카본 하이브리드 구조, 파도를 가르는 배수형 노즈, 스프린트와 장거리 레이싱을 위한 엘리트급 트래킹을 갖춘 14피트 프로페셔널 레이스 인플레이터블 SUP.',
      definition:
        '플렉스 제로의 카본 하이브리드 매트릭스, 파도를 가르는 배수형 노즈, 스프린트·타임트라이얼·고케이던스 트레이닝용 26인치 좁은 데크를 갖춘 14피트 프로페셔널 레이스 인플레이터블 SUP 보드.',
      problem:
        '경쟁 레이서들은 플렉스, 저항, 전통 레이스 SUP 보드의 칙칙한 산업적 디자인 없이, 인플레이터블 보드에서 하드보드급 강성과 직선 트래킹이 필요합니다.',
      howItWorks:
        'RHEO 시리즈는 플렉스를 완전히 제거해 반석처럼 단단한 플랫폼을 만드는 카본 하이브리드 인플레이터블 구조를 사용합니다. 파도를 가르는 배수형 노즈가 최소한의 저항으로 촙을 가르고, 26인치 폭이 젖은 표면 마찰을 줄이며, 2+1 핀 세팅이 고속에서 트래킹을 유지하고 빠른 스위핑 턴을 돕습니다.',
      audience:
        '개인 최고 기록을 노리는 경쟁 레이서, 속도 애호가, 인플레이터블 휴대성과 강성 레이스 성능을 모두 원하는 고급 패들러, 그리고 레이스 인플레이터블 SUP 보드를 조달하는 OEM/ODM 바이어.',
      ai_use_cases: [
        '경쟁 SUP 레이싱과 스프린트 트레이닝',
        '고강도 피트니스와 인터벌 패들링',
        '기술 코스와 좁은 수로 레이싱',
      ],
      ai_comparison:
        '전통 레이스 SUP 보드와 비교해 RHEO는 플렉스 제로의 카본 하이브리드 인플레이터블 구조와 파도 가르는 노즈를 갖춰 정면 촙에서 뛰어난 침투력을 발휘하면서도, 여행을 위해 접어 보관할 수 있습니다.',
      ai_faq: [
        {
          q: 'RHEO는 초보자에게 충분히 안정적인가요?',
          a: '경쟁 및 고급 패들러를 위해 설계되었습니다. 26인치 폭은 속도와 효율을 우선시하므로 초보자는 더 넓은 올라운드 보드에서 시작해야 합니다.',
        },
        {
          q: '2+1 핀 세팅은 무엇을 위한 것인가요?',
          a: '중앙 핀은 고속에서 뛰어난 직선 트래킹을 유지하고, 측면 핀은 빠르고 넓은 부표 턴 동안 측면 안정성을 제공합니다.',
        },
      ],
    },
    'sup-fishing': {
      name: '인플레이터블 낚시 SUP',
      desc: '양면 에어 챔버, 로드 홀더 마운트, 온데크 피쉬 룰러를 갖춘 안정적인 카타마란 스타일 인플레이터블 낚시 SUP.',
      definition:
        '카타마란급 이차 안정성을 위한 양면 에어 챔버, 로드 홀더 마운트, 온데크 피쉬 룰러, 카약에서 영감을 받은 선체를 갖춰 서서 캐스팅·릴링·투어링이 가능한 11.5피트 인플레이터블 낚시 SUP.',
      problem:
        '낚시꾼들은 물고기를 릴링하거나 파도치는 물을 항해할 때 흔들리거나 뒤집히지 않는 안정적인 서서 캐스팅 플랫폼이 필요하며, 먼 곳의 낚시터로 이동할 수 있을 만큼 휴대하기 쉬워야 합니다.',
      howItWorks:
        '인플레이터블 낚시 SUP는 카타마란이나 아웃리거와 유사한 뛰어난 이차 안정성을 제공하는 두꺼운 양면 에어 챔버를 사용합니다. 뾰족한 노즈와 테일이 카약 같은 트래킹으로 데크 폭을 유지하고, 드롭스티치 PVC 코어는 15PSI 정격으로 단단하고 믿을 수 있는 플랫폼을 제공합니다.',
      audience:
        '루어·배스 낚시꾼, 플라이·카약 낚시꾼, 쿨러와 캠핑 의자, 착지 그물을 싣는 원정 패들러. 그리고 인플레이터블 낚시 SUP 보드를 조달하는 OEM/ODM 바이어.',
      ai_use_cases: [
        '서서 하는 루어·배스 낚시',
        '인플레이터블 플랫폼에서의 플라이·카약 낚시',
        '짐을 실은 다일 낚시 원정',
      ],
      ai_comparison:
        '표준 패들 보드와 비교해 이 낚시 SUP는 카타마란식 양면 에어 챔버를 추가해 서거나, 캐스팅하거나, 릴링할 때 측면 안정성을 크게 높이며, 로드 마운트와 통합 피쉬 룰러를 내장합니다.',
      ai_faq: [
        {
          q: '물고기와 싸울 때 보드가 안정적으로 유지되나요?',
          a: '네. 양면 에어 챔버가 카타마란 같은 이차 안정성을 제공해 서서 캐스팅하거나 물고기를 릴링할 때 흔들림과 전복을 방지합니다.',
        },
        {
          q: '어군 탐지기를 장착할 곳이 있나요?',
          a: '네. 그립 패드 앞쪽의 전문가용 검정 마운트 2개에 로드 홀더, 어군 탐지기, 필수 낚시 장비를 고정할 수 있습니다.',
        },
      ],
    },
    'sup-mini': {
      name: '미니 SUP 시리즈',
      desc: '컴팩트 패들 보드, 인플레이터블 서프보드, 바디보드를 하나로 겸하는 초다용도 미니 인플레이터블 SUP. 어린이·성인·반려동물용.',
      definition:
        '컴팩트 패들 보드, 인플레이터블 서프보드, 바디보드를 하이브리드화한 7피트 초다용도 미니 인플레이터블 SUP로, 파도·호수·수영장·잔잔한 만에서 어린이·성인·반려동물을 위한 짧고 넓으며 안정적인 프로필을 갖습니다.',
      problem:
        '가족과 다재다능한 라이더는 어린이용 패들 보드, 성인용 서프·바디보드, 반려동물 친화적 부유 데크로 모두 작동하는 컴팩트하고 휴대하기 쉬운 인플레이터블 플랫폼 하나가 필요합니다.',
      howItWorks:
        '미니 SUP 시리즈는 최대 부력을 위한 최적화된 부피-길이 비율로 짧고 넓으며 매우 안정적인 프로필을 사용합니다. 반응성 좋은 로커 라인과 레일 프로필이 작은 파도를 포착하고, 내구성 있는 내천공 데크가 강아지 발을 견디면서도 가볍고 빠르게 공기를 넣을 수 있습니다.',
      audience:
        '아이들을 패들 스포츠에 입문시키는 부모, 휴대용 서프·바디보드 하이브리드를 원하는 성인, 반려견을 물에 데려가는 반려동물 주인. 그리고 미니 인플레이터블 SUP를 조달하는 OEM/ODM 바이어.',
      ai_use_cases: [
        '어린이 SUP·서핑 발달',
        '성인 바디보딩과 쇼어브레이크 서핑',
        '반려동물 친화적 호수·수영장·잔잔한 만 놀이',
      ],
      ai_comparison:
        '표준 SUP 보드와 비교해 미니는 진정한 다목적 하이브리드입니다. 패들 보드, 인플레이터블 서프보드, 바디보드를 초휴대 폼팩터 하나에 담았으며, 내천공 및 반려동물 친화적 데크를 갖췄습니다.',
      ai_faq: [
        {
          q: '성인도 미니 SUP를 탈 수 있나요?',
          a: '네. 최적화된 부피-길이 비율이 서서 패들링하든, 엎드려 바디보딩하든, 작은 파도를 잡든 어린이부터 완전한 성인까지 모두를 지지합니다.',
        },
        {
          q: '데크는 강아지에게 안전한가요?',
          a: '네. 데크는 강아지의 발톱과 발을 견디도록 설계된 견고한 내천공 소재를 사용합니다.',
        },
      ],
    },
    'sup-giant': {
      name: '다인승 자이언트 SUP',
      desc: '650kg 정격의 16.5피트 다인승 인플레이터블 SUP. 이중 밸브 공기 주입, 8인치 선체, 다중 핸들, 멀티 핀 트래킹을 갖췄습니다.',
      definition:
        '8인치 선체, 이중 밸브 공기 주입, 다중 핸들 구성, 멀티 핀 트래킹, 이중 화물 번지 시스템을 갖춘 그룹 패들링·렌탈·팀 이벤트용 16.5피트 다인승 자이언트 인플레이터블 SUP.',
      problem:
        '그룹, 렌탈 사업자, 이벤트 주최자는 여러 라이더를 안전하게 태우고 집중 하중에서도 강성을 유지하는 단 한 개의 거대한 인플레이터블 보드가 필요합니다.',
      howItWorks:
        '다인승 자이언트 SUP는 두 사람이 동시에 큰 공기 용적을 주입할 수 있는 이중 밸브 시스템을 갖춘 15PSI 정격의 헤비듀티 드롭스티치 PVC를 사용합니다. 양쪽 레일을 따라 8~12개의 헤비듀티 핸들에 노즈·테일 핸들까지 더해 운반과 재승선이 쉬우며, 4+1 또는 트리 핀 세팅이 넓은 보드를 직선으로 유지합니다.',
      audience:
        '렌탈 사업자, 워터스포츠 클럽, 팀 빌딩 프로그램을 운영하는 이벤트 주최자, 대가족, 그룹 모험가. 그리고 거대한 다인승 인플레이터블 SUP를 조달하는 OEM/ODM 바이어.',
      ai_use_cases: ['기업 및 그룹 팀 빌딩 세션', '상업용 렌탈 함대와 클럽 원정', '대가족·다라이더 호수 나들이'],
      ai_comparison:
        '표준 SUP 보드와 비교해 자이언트 SUP는 8인치 선체와 이중 밸브 공기 주입으로 최대 650kg을 실을 수 있으며, 다중 핸들·멀티 핀 디자인으로 온 팀이 안전하게 패들링하고 운반하고 재승선할 수 있습니다.',
      ai_faq: [
        {
          q: '몇 명이 탈 수 있나요?',
          a: '59인치 폭 플랫폼은 약 650kg의 막대한 하중을 견디도록 설계되어 여러 라이더, 쿨러, 안전 장비를 편안하게 수용합니다.',
        },
        {
          q: '이렇게 큰 보드는 어떻게 공기를 넣나요?',
          a: '이중 밸브 시스템으로 두 사람이 동시에 거대한 내부 공기 용적을 주입하여 11~15PSI 작동 범위에 도달할 수 있습니다.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: '유틸리티 앤 루어 스키프 SUP',
      desc: '880lb 적재 정격, 중앙 관찰창, 이중 스러스터 마운트를 갖춘 폰툰급 폭 47인치 유틸리티 SUP. 루어 낚시와 트롤링 모터 세팅용.',
      definition:
        '47인치 폰툰급 프로필, 880lb 적재 정격, 중앙 관찰창, 액션 마운트, 이중 스러스터 마운트가 있는 제비꼬리 선미를 갖춘 루어 낚시·운반·유틸리티 용도의 11.5피트 폰툰급 유틸리티 앤 루어 스키프 SUP.',
      problem:
        '루어 낚시꾼과 유틸리티 사용자는 낚시꾼, 쿨러, 배터리, 심지어 전동 트롤링 모터까지 실을 수 있는 엄청난 적재 용량을 갖춘, 사실상 뒤집힐 수 없는 인플레이터블 플랫폼이 필요합니다.',
      howItWorks:
        '유틸리티 앤 루어 스키프 SUP는 캐스팅하거나 큰 물고기와 싸우는 동안 사실상 뒤집을 수 없는, 통통한 폰툰형 47인치 아웃라인을 사용합니다. 강화된 헤비듀티 드롭스티치 구조는 880lb를 견디도록 제작되었으며, 제비꼬리 선미는 동력 추진 시스템을 위한 사전 구성 마운트 공간을 제공합니다.',
      audience:
        '루어·플라이 낚시꾼, 스피어피셔, 얕은 물 관찰자, 인플레이터블 플랫폼에서 트롤링 모터를 운용하는 낚시꾼. 그리고 다목적 루어 스키프 SUP를 조달하는 OEM/ODM 바이어.',
      ai_use_cases: [
        '서거나 앉아서 하는 루어·플라이 낚시',
        '수중 정찰과 스피어피싱',
        '대형 운반과 안정적인 유틸리티 용도',
      ],
      ai_comparison:
        '표준 낚시 SUP 보드와 비교해 루어 스키프는 폰툰 폭의 유틸리티 플랫폼으로, 880lb 정격, 중앙 관찰창, 사전 구성 이중 스러스터 마운트, 루어·플라이 낚시를 위한 걷기 편한 안정성을 갖췄습니다.',
      ai_faq: [
        {
          q: '트롤링 모터를 지탱할 수 있나요?',
          a: '네. 제비꼬리 선미에 동력 추진 시스템용 사전 구성 마운트 공간이 포함되어 있으며, 보드는 880lb 적재 용량 내에서 모터와 배터리를 실을 수 있습니다.',
        },
        {
          q: '중앙 관찰창은 무엇을 위한 것인가요?',
          a: '구조물과 미끼 움직임을 찾아 얕은 물을 살펴볼 수 있는 창으로, 스피어피싱과 얕은 물 관찰에 이상적입니다.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: '투어링 크루저 SUP',
      desc: '로우프로파일 US 핀 박스, 프리미엄 9인치 투어링 핀, 드롭스티치 코어를 갖춘 효율적인 크루징을 위한 12.5피트 장거리 투어링 인플레이터블 SUP.',
      definition:
        '로우프로파일 US 핀 박스, 프리미엄 9인치 레이싱/투어링 핀, 장거리 크루징·평수 탐험·튜너블 퍼포먼스 패들링을 위한 강성 드롭스티치 구조를 갖춘 12.5피트 투어링 인플레이터블 SUP 보드.',
      problem:
        '장거리를 주파하는 투어링 패들러는 처짐을 방지하는 강성 레일, 예측 가능한 직선 트래킹, 다양한 수상 조건에 맞게 조절할 수 있는 핀 시스템을 갖춘 보드가 필요합니다.',
      howItWorks:
        '투어링 크루저는 15PSI 정격 드롭스티치 PVC 코어와 레일 강성을 결합해 스팬 중간의 처짐을 방지합니다. 로우프로파일 US 핀 박스가 포함된 9인치 레이싱/투어링 핀 또는 애프터마켓 핀을 수용하여, 특정 조건에 맞게 트래킹과 속도를 조절할 수 있습니다.',
      audience:
        '장거리 투어링 패들러, 평수 탐험가, 지구력 크루저, 튜너블 퍼포먼스를 원하는 패들러. 그리고 투어링 인플레이터블 SUP 보드를 조달하는 OEM/ODM 바이어.',
      ai_use_cases: [
        '장거리 투어링과 연안 크루징',
        '평수 탐험과 지구력 패들링',
        'US 핀 업그레이드를 이용한 맞춤 퍼포먼스 패들링',
      ],
      ai_comparison:
        '표준 올라운드 보드와 비교해 투어링 크루저는 강성 레일과 US 핀 박스 시스템을 갖춘 12.5피트 선체를 추가해, 장거리에서 요잉과 노력을 줄이며 코스를 유지합니다.',
      ai_faq: [
        {
          q: '내 핀을 사용할 수 있나요?',
          a: '네. 로우프로파일 US 핀 박스가 애프터마켓 호환이라, 좋아하는 평수 또는 레이싱 핀으로 교체해 성능을 조절할 수 있습니다.',
        },
        {
          q: '최대 압력까지 어떻게 채우나요?',
          a: '포함된 듀얼 실린더 핸드 펌프가 큰 용적을 빠르게 이동시키고 더 적은 힘으로 더 높은 압력에 도달하며, 옵션 afarer 12VDC 전동 펌프와도 호환됩니다.',
        },
      ],
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
    'sup-horizon-lines': {
      name: 'Серия Horizon Lines',
      desc: 'Премиальная 11-футовая надувная универсальная SUP-доска с конструкцией из сплавного ламината, противоскользящим покрытием под кожу рептилии и тремя съёмными клик-плавниками для любых условий.',
      definition:
        'Премиальная 11-футовая надувная универсальная SUP-доска с лёгким усилением из сплавного ламината, контурным противоскользящим покрытием под кожу рептилии с поддержкой свода стопы и системой из трёх клик-плавников для озёр, рек и защищённых прибрежных вод.',
      problem:
        'Универсальным гребцам нужна одна доска, которая справляется от спокойной воды до волнения у берега, оставаясь достаточно лёгкой для путешествий и достаточно жёсткой для ощущения твёрдого корпуса.',
      howItWorks:
        'Серия Horizon Lines сочетает специальные усиливающие слои из сплавного ламината с конструкцией drop-stitch из ПВХ, рассчитанной на 15 PSI. Три полностью съёмных клик-плавника с оптимизированным углом toe-in позволяют настроить курсовую устойчивость и манёвренность, а насос двойного действия или опциональный электрический 12VDC быстро достигает полного давления.',
      audience:
        'Покупатели впервые, крейсеры по спокойной воде, любители продвинутых манёвров и путешественники, которым нужна одна портативная универсальная надувная SUP-доска с опциональным полным комплектом.',
      ai_use_cases: [
        'Универсальная гребля в спокойной и прибрежной воде',
        'Практика продвинутых манёвров и туринг',
        'Компактные приключения на SUP для путешествий',
      ],
      ai_comparison:
        'По сравнению со стандартными универсальными SUP-досками, Horizon Lines имеет усиление из сплавного ламината и систему из трёх плавников, позволяющую настраивать курсовую устойчивость и манёвренность для любых условий — от спокойных озёр до волнения у берега.',
      ai_faq: [
        {
          q: 'Можно ли настроить плавники под условия?',
          a: 'Да. Все три клик-плавника полностью съёмные с оптимизированным углом toe-in, поэтому вы можете настроить конфигурацию под спокойную воду, речные течения или волнение у берега.',
        },
        {
          q: 'Какие варианты надувания входят в комплект?',
          a: 'Насос двойного действия высокого давления и высокого объёма надувает на обоих ходах, а доска совместима с опциональным электрическим насосом 12VDC 20PSI, который достигает 15 PSI примерно за 9 минут.',
        },
      ],
    },
    'sup-rheo': {
      name: 'Серия RHEO',
      desc: 'Профессиональная 14-футовая гоночная надувная SUP-доска с гибридной карбоновой конструкцией, волнорежущим носом водоизмещающего типа и элитной курсовой устойчивостью для спринтов и гонок на длинные дистанции.',
      definition:
        'Профессиональная 14-футовая гоночная надувная SUP-доска с гибридной карбоновой матрицей без изгиба, волнорежущим носом водоизмещающего типа и узкой 26-дюймовой декой для спринтов, гонок на время и тренировок с высокой частотой гребков.',
      problem:
        'Соревнующимся гонщикам нужна жёсткость твёрдой доски и идеальная курсовая устойчивость от надувной доски, без изгиба, сопротивления и унылой индустриальной эстетики традиционных гоночных SUP-досок.',
      howItWorks:
        'Серия RHEO использует гибридную карбоновую надувную конструкцию, которая полностью исключает изгиб и даёт каменно-устойчивую платформу. Волнорежущий нос водоизмещающего типа рассекает волну с минимальным сопротивлением, ширина 26 дюймов снижает трение смоченной поверхности, а конфигурация плавников 2+1 удерживает курс на скорости и помогает в быстрых огибающих поворотах.',
      audience:
        'Соревнующиеся гонщики за личными рекордами, любители скорости и продвинутые гребцы, которые хотят жёсткие гоночные характеристики с портативностью надувной доски, а также OEM/ODM-покупатели.',
      ai_use_cases: [
        'Соревновательные SUP-гонки и спринт-тренировки',
        'Фитнес высокой интенсивности и интервальная гребля',
        'Гонки на техничных трассах и узких акваториях',
      ],
      ai_comparison:
        'По сравнению с традиционными гоночными SUP-досками, RHEO предлагает гибридную карбоновую надувную конструкцию без изгиба и волнорежущий нос для исключительного прохождения встречной волны, при этом доска складывается для путешествий.',
      ai_faq: [
        {
          q: 'Достаточно ли устойчива RHEO для новичков?',
          a: 'Она разработана для соревнующихся и продвинутых гребцов; ширина 26 дюймов приоритетна для скорости и эффективности, поэтому новичкам стоит начинать на более широкой универсальной доске.',
        },
        {
          q: 'Для чего нужна конфигурация плавников 2+1?',
          a: 'Центральный плавник сохраняет отличную курсовую устойчивость на высокой скорости, а боковые плавники обеспечивают боковую стабильность при быстрых широких огибаниях буйков.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Надувное рыболовное SUP',
      desc: 'Устойчивое надувное рыболовное SUP в стиле катамарана с двусторонними воздушными камерами, креплениями для удилищ и линейкой для рыбы на палубе для ловли стоя.',
      definition:
        '11,5-футовое надувное рыболовное SUP с двусторонними воздушными камерами для вторичной устойчивости уровня катамарана, креплениями для удилищ, линейкой для рыбы на палубе и корпусом, вдохновлённым каяком, для заброса, подмотки и туринга стоя.',
      problem:
        'Рыболовам нужна устойчивая платформа для ловли стоя, которая не раскачивается и не переворачивается при подмотке улова или движении по волнам, оставаясь достаточно портативной для дальних водоёмов.',
      howItWorks:
        'Надувное рыболовное SUP использует толстые двусторонние воздушные камеры, обеспечивающие исключительную вторичную устойчивость, схожую с катамараном или аутригером. Заострённые нос и корма сохраняют ширину палубы с каячной курсовой устойчивостью, а сердечник drop-stitch из ПВХ рассчитан на 15 PSI для жёсткой и надёжной платформы.',
      audience:
        'Рыболовы на приманки и окуня, нахлыстовики и рыбаки на каяках, а также гребцы-экспедиционники, перевозящие кулеры, походные стулья и подсачеки, плюс OEM/ODM-покупатели.',
      ai_use_cases: [
        'Ловля на приманки стоя',
        'Нахлыст и рыбалка с каяка с надувной платформы',
        'Многодневные рыболовные экспедиции с грузом',
      ],
      ai_comparison:
        'По сравнению со стандартными падл-досками, это рыболовное SUP добавляет двусторонние воздушные камеры в стиле катамарана, которые кардинально повышают боковую устойчивость стоя, при забросе и подмотке, со встроенными креплениями для удилищ и линейкой для рыбы.',
      ai_faq: [
        {
          q: 'Останется ли доска устойчивой при вываживании рыбы?',
          a: 'Да. Двусторонние воздушные камеры обеспечивают вторичную устойчивость как у катамарана, предотвращая раскачивание и опрокидывание при ловле стоя, забросе и подмотке улова.',
        },
        {
          q: 'Есть ли место для установки эхолота?',
          a: 'Да. Два профессиональных чёрных крепления перед противоскользящим покрытием могут зафиксировать держатели удилищ, эхолоты или необходимое рыболовное снаряжение.',
        },
      ],
    },
    'sup-mini': {
      name: 'Серия Mini SUP',
      desc: 'Сверхмногофункциональное мини-надувное SUP, которое работает как компактная падл-доска, надувная сёрф-доска и бодиборд для детей, взрослых и питомцев.',
      definition:
        '7-футовое сверхмногофункциональное мини-надувное SUP, объединяющее компактную падл-доску, надувную сёрф-доску и бодиборд, с коротким, широким и устойчивым профилем для детей, взрослых и питомцев на волнах, озёрах, в бассейнах и спокойных бухтах.',
      problem:
        'Семьям и универсальным райдерам нужна одна компактная портативная надувная платформа, которая работает как детская падл-доска, взрослая сёрф- или бодиборд и дружелюбная к питомцам плавучая палуба.',
      howItWorks:
        'Серия Mini SUP использует короткий, широкий и очень устойчивый профиль с оптимизированным соотношением объёма и длины для максимальной плавучести. Отзывчивая линия рокера и профиль борта ловят небольшие волны, а прочная стойкая к проколам палуба выдерживает собачьи лапы, оставаясь лёгкой и быстрой в надувании.',
      audience:
        'Родители, приобщающие детей к гребле, взрослые, желающие портативный гибрид сёрф- и бодиборда, и владельцы питомцев, берущие собак на воду, плюс OEM/ODM-покупатели.',
      ai_use_cases: [
        'Развитие SUP и сёрфинга у детей',
        'Бодибординг для взрослых и серфинг в прибойной волне',
        'Игры с питомцами на озере, в бассейне и спокойной бухте',
      ],
      ai_comparison:
        'По сравнению со стандартными SUP-досками, Mini — это настоящий многоцелевой гибрид: падл-доска, надувная сёрф-доска и бодиборд в одном сверхкомпактном форм-факторе, со стойкой к проколам и дружелюбной к питомцам палубой.',
      ai_faq: [
        {
          q: 'Могут ли взрослые кататься на Mini SUP?',
          a: 'Да. Оптимизированное соотношение объёма и длины поддерживает всех — от детей до взрослых — при гребле стоя, лёжа или ловле небольших волн.',
        },
        {
          q: 'Безопасна ли палуба для собак?',
          a: 'Да. Палуба использует прочные стойкие к проколам материалы, рассчитанные на когти и лапы собак.',
        },
      ],
    },
    'sup-giant': {
      name: 'Многоместное гигантское SUP',
      desc: 'Огромное 16,5-футовое многоместное надувное SUP на 650 кг с надуванием через два клапана, 8-дюймовым корпусом, множеством ручек и мультиплавниковой курсовой устойчивостью.',
      definition:
        '16,5-футовое многоместное гигантское надувное SUP с 8-дюймовым корпусом, надуванием через два клапана, конфигурацией со множеством ручек, мультиплавниковой курсовой устойчивостью и двойными грузовыми стропами для групповой гребли, проката и командных мероприятий.',
      problem:
        'Группам, операторам проката и организаторам мероприятий нужна одна огромная надувная доска, которая безопасно держит нескольких райдеров и остаётся жёсткой под сосредоточенными нагрузками.',
      howItWorks:
        'Многоместное гигантское SUP использует усиленный drop-stitch из ПВХ на 15 PSI с системой двух клапанов, чтобы два человека могли надувать большой объём воздуха одновременно. От восьми до двенадцати усиленных ручек вдоль обоих бортов плюс ручки на носу и корме облегчают переноску и повторную посадку, а конфигурация 4+1 или с тремя плавниками держит широкую доску на курсе.',
      audience:
        'Операторы проката, клубы водных видов спорта, организаторы ивентов по тимбилдингу, большие семьи и групповые искатели приключений, плюс OEM/ODM-покупатели.',
      ai_use_cases: [
        'Корпоративный и групповой тимбилдинг',
        'Коммерческие прокатные флоты и клубные экспедиции',
        'Большие семейные и многоместные выезды на озеро',
      ],
      ai_comparison:
        'По сравнению со стандартными SUP-досками, гигантское SUP перевозит до 650 кг с 8-дюймовым корпусом и надуванием через два клапана, а конструкция со множеством ручек и плавников позволяет целым экипажам безопасно грести, переносить и садиться на доску.',
      ai_faq: [
        {
          q: 'Сколько человек может на нём кататься?',
          a: 'Платформа шириной 59 дюймов рассчитана на огромную нагрузку около 650 кг и с комфортом вмещает нескольких райдеров, кулеры и средства безопасности.',
        },
        {
          q: 'Как надувать такую большую доску?',
          a: 'Система двух клапанов позволяет двум людям одновременно надувать огромный внутренний объём воздуха, достигая рабочего диапазона 11–15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Утилитарное SUP для ловли на приманки',
      desc: 'Широкое как понтон 47-дюймовое утилитарное SUP с грузоподъёмностью 880 фунтов, центральным смотровым окном и креплением для двух двигателей для ловли на приманки и троллинговых моторов.',
      definition:
        '11,5-футовое утилитарное SUP с профилем шириной как у понтона 47 дюймов, грузоподъёмностью 880 фунтов, центральным смотровым окном, монтажными площадками и кормой «ласточкин хвост» с креплением для двух двигателей для ловли на приманки, перевозки грузов и утилитарного использования.',
      problem:
        'Рыболовам на приманки и утилитарным пользователям нужна практически непереворачиваемая надувная платформа с огромной грузоподъёмностью под рыболова, кулеры, аккумуляторы и даже электрический троллинговый мотор.',
      howItWorks:
        'Утилитарное SUP Skiff использует приземистый понтонообразный профиль шириной 47 дюймов, который практически невозможно перевернуть при забросе или вываживании крупной рыбы. Усиленная конструкция drop-stitch рассчитана на 880 фунтов, а корма «ласточкин хвост» предоставляет заранее сконфигурированное монтажное пространство для силовых установок.',
      audience:
        'Рыболовы на приманки и нахлыстовики, подводные охотники, наблюдатели на мелководье и рыболовы, использующие троллинговые моторы на надувной платформе, плюс OEM/ODM-покупатели.',
      ai_use_cases: [
        'Ловля на приманки и нахлыст стоя или сидя',
        'Подводная разведка и подводная охота',
        'Тяжёлые перевозки и устойчивое утилитарное использование',
      ],
      ai_comparison:
        'По сравнению со стандартными рыболовными SUP-досками, Skiff — это широкая как понтон утилитарная платформа на 880 фунтов с центральным смотровым окном, заранее сконфигурированным креплением для двух двигателей и устойчивостью для свободной ходьбы при ловле на приманки и нахлыст.',
      ai_faq: [
        {
          q: 'Выдержит ли он троллинговый мотор?',
          a: 'Да. Корма «ласточкин хвост» включает заранее сконфигурированное монтажное пространство для силовых установок, а доска перевозит мотор и аккумуляторы в пределах своей грузоподъёмности 880 фунтов.',
        },
        {
          q: 'Для чего нужно центральное смотровое окно?',
          a: 'Окно позволяет рассматривать мелководье в поисках структур и движения приманок, идеально для подводной охоты и наблюдения за мелководьем.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Туринговое SUP Cruiser',
      desc: '12,5-футовое надувное туринговое SUP для длинных дистанций с низкопрофильной US-пластиной для плавника, премиальным 9-дюймовым туринговым плавником и сердечником drop-stitch для эффективного круиза.',
      definition:
        '12,5-футовая надувная туринговая SUP-доска с низкопрофильной US-пластиной для плавника, премиальным 9-дюймовым гоночно-туринговым плавником и жёсткой конструкцией drop-stitch для круиза на длинные дистанции, исследования спокойной воды и настраиваемой гребле.',
      problem:
        'Туринговым гребцам на длинных дистанциях нужна доска с жёсткими бортами, не допускающими провисания, предсказуемой курсовой устойчивостью и системой плавников, которую можно настраивать под разные условия воды.',
      howItWorks:
        'Touring Cruiser сочетает сердечник drop-stitch из ПВХ на 15 PSI с жёсткостью бортов, чтобы исключить провисание в средней части. Низкопрофильная US-пластина принимает входящий в комплект 9-дюймовый гоночно-туринговый плавник или плавники с вторичного рынка, позволяя настраивать курсовую устойчивость и скорость под конкретные условия.',
      audience:
        'Туринговые гребцы на длинных дистанциях, исследователи спокойной воды, выносливые круизеры и гребцы, желающие настраиваемые характеристики, плюс OEM/ODM-покупатели.',
      ai_use_cases: [
        'Туринг на длинные дистанции и прибрежный круиз',
        'Исследование спокойной воды и гребля на выносливость',
        'Кастомизированная гребля с US-плавниками',
      ],
      ai_comparison:
        'По сравнению со стандартными универсальными досками, Touring Cruiser добавляет 12,5-футовый корпус с жёсткими бортами и системой US-пластины, удерживая вас на курсе на длинных дистанциях с меньшим рысканием и усилием.',
      ai_faq: [
        {
          q: 'Могу ли я использовать свои плавники?',
          a: 'Да. Низкопрофильная US-пластина совместима с вторичным рынком, поэтому вы можете поставить свои любимые плавники для спокойной воды или гонок, чтобы настроить характеристики.',
        },
        {
          q: 'Как достичь полного давления?',
          a: 'Входящий в комплект ручной насос с двумя цилиндрами быстро перемещает большой объём и достигает более высокого давления с меньшим усилием, а доска совместима с опциональным электрическим насосом afarer 12VDC.',
        },
      ],
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
    'sup-horizon-lines': {
      name: 'سلسلة هورايزن لاينز',
      desc: 'لوح SUP نفخ احترافي متعدد الاستخدامات بطول 11 قدمًا مع هيكل مغلف بدمج الطبقات، ووسادة قبضة على شكل جلد الزواحف، وثلاث زعانف قابلة للفك للظروف المائية المختلفة.',
      definition:
        'لوح SUP نفخ احترافي متعدد الاستخدامات بطول 11 قدمًا مع تعزيزات خفيفة من اللامينيت المدمج، ووسادة قبضة محددة الشكل على شكل جلد الزواحف تدعم قوس القدم، ونظام ثلاث زعانف قابلة للتثبيت للبحيرات والأنهار والمياه الساحلية المحمية.',
      problem:
        'يريد المجدفون متعددو الاستخدامات لوحًا واحدًا يتحمل كل شيء من النزهة في المياه الهادئة إلى الظروف الساحلية المتقلبة، مع بقائه خفيفًا بدرجة تكفي للسفر وصلبًا بما يعطي إحساس اللوح الصلب.',
      howItWorks:
        'تجمع سلسلة هورايزن لاينز بين طبقات تقوية خاصة من اللامينيت المدمج وهيكل PVC من نوع drop-stitch بقدرة 15 رطلًا لكل بوصة مربعة. تتيح ثلاث زعانف قابلة للفك بالكامل بزاوية toe-in محسّنة ضبط الانسياب وقابلية المناورة، بينما تصل مضخة مزدوجة الحركة أو مضخة كهربائية اختيارية 12VDC إلى أقصى ضغط بسرعة.',
      audience:
        'المشترون لأول مرة، وممارسو النزهات في المياه الهادئة، وعشاق المناورات المتقدمة، والمسافرون الذين يريدون لوح SUP نفخ متعدد الاستخدامات قابلًا للحمل مع حزمة كاملة اختيارية.',
      ai_use_cases: [
        'تجديف متعدد الاستخدامات في المياه الهادئة والساحلية',
        'ممارسة المناورات المتقدمة والتجديف الطويل',
        'مغامرات SUP مدمجة جاهزة للسفر',
      ],
      ai_comparison:
        'مقارنةً بلوحات SUP متعددة الاستخدامات القياسية، تتميز هورايزن لاينز بتعزيز اللامينيت المدمج ونظام الزعانف الثلاثية الذي يتيح تخصيص الانسياب مقابل المناورة لكل شيء من البحيرات الهادئة إلى المياه الساحلية المتقلبة.',
      ai_faq: [
        {
          q: 'هل يمكن تخصيص الزعانف حسب الحالة؟',
          a: 'نعم. الزعانف الثلاث قابلة للفك بالكامل بزاوية toe-in محسّنة، لذا يمكنك ضبط الإعداد لتحسين الانسياب في المياه الهادئة أو التيارات النهرية أو الظروف الساحلية المتقلبة.',
        },
        {
          q: 'ما خيارات النفخ المشمولة؟',
          a: 'مضخة مزدوجة الحركة عالية الضغط والحجم تنفخ في الشوطين، واللوح متوافق مع مضخة كهربائية اختيارية 12VDC 20PSI تصل إلى 15 رطلًا لكل بوصة مربعة في نحو 9 دقائق.',
        },
      ],
    },
    'sup-rheo': {
      name: 'سلسلة RHEO',
      desc: 'لوح SUP نفخ احترافي للسباق بطول 14 قدمًا مع هيكل هجين من الكربون، وواجهة إزاحة تقطع الأمواج، وانسياب من الطراز الأول للسباقات السريعة والطويلة.',
      definition:
        'لوح SUP نفخ احترافي للسباق بطول 14 قدمًا مع مصفوفة هجينة من الكربون بلا انثناء، وواجهة إزاحة تقطع الأمواج، وسطح ضيق بعرض 26 بوصة مصمم للسباقات السريعة وسباقات التوقيت والتدريب العالي الإيقاع.',
      problem:
        'يحتاج المتسابقون التنافسيون إلى صلابة اللوح الصلب وانسياب في خط مستقيم من لوح نفخ، دون انثناء أو مقاومة أو مظهر صناعي باهت للوحات السباق التقليدية.',
      howItWorks:
        'تستخدم سلسلة RHEO هيكلًا نفخًا هجينًا من الكربون يلغي الانثناء تمامًا لمنصة صلبة كالصخر. تقطع واجهة الإزاحة الأمواج بأقل مقاومة، بينما يقلل عرض 26 بوصة من احتكاك السطح المبلل، ويحافظ إعداد الزعانف 2+1 على الانسياب عند السرعة ويساعد في المنعطفات السريعة الواسعة.',
      audience:
        'المتسابقون التنافسيون الذين يطاردون أفضل أرقامهم الشخصية، وعشاق السرعة، والمجدفون المتقدمون الذين يرغبون في أداء سباق صلب مع قابلية النقل النفخ، إضافة إلى مشتري OEM/ODM.',
      ai_use_cases: [
        'سباقات SUP التنافسية والتدريب السريع',
        'لياقة عالية الكثافة وتجديف فتراتي',
        'السباقات في المسارات التقنية والممرات المائية الضيقة',
      ],
      ai_comparison:
        'مقارنةً بلوحات السباق التقليدية، تقدم RHEO هيكلًا نفخًا هجينًا من الكربون بلا انثناء وواجهة تقطع الأمواج لاختراق استثنائي في الأمواج المقابلة، مع بقائها قابلة للطي للسفر.',
      ai_faq: [
        {
          q: 'هل RHEO مستقرة بما يكفي للمبتدئين؟',
          a: 'إنها مصممة للمجدفين التنافسيين والمتقدمين؛ فالعرض 26 بوصة يعطي الأولوية للسرعة والكفاءة، لذا يجب أن يبدأ المبتدئون على لوح متعدد الاستخدامات أعرض.',
        },
        {
          q: 'ما فائدة إعداد الزعانف 2+1؟',
          a: 'تحافظ الزعنفة المركزية على انسياب ممتاز في خط مستقيم عند السرعات العالية، بينما توفر الزعانف الجانبية ثباتًا جانبيًا أثناء المنعطفات السريعة الواسعة حول العوامات.',
        },
      ],
    },
    'sup-fishing': {
      name: 'SUP صيد قابل للنفخ',
      desc: 'لوح SUP صيد مستقر على الطراز القطامراني مع غرف هواء مزدوجة الجوانب وتركيبات حاملات الصيد ومسطرة أسماك على السطح للرمي والشَد أثناء الوقوف.',
      definition:
        'لوح SUP نفخ للصيد بطول 11.5 قدم مع غرف هواء مزدوجة الجوانب لثبات ثانوي من مستوى قارب القطامران، وتركيبات لحاملات الصيادين، ومسطرة أسماك على السطح، وهيكل مستوحى من الكاياك للرمي والسحب والتجديف الطويل واقفًا.',
      problem:
        'يحتاج الصيادون إلى منصة ثابتة للوقوف والرمي لا تتمايل ولا تنقلب عند سحب الصيد أو الإبحار في مياه متقلبة، مع بقائها قابلة للنقل بدرجة تكفي للوصول إلى أماكن الصيد البعيدة.',
      howItWorks:
        'يستخدم لوح SUP الصيد القابل للنفخ غرف هواء مزدوجة الجوانب سميكة توفر ثباتًا ثانويًا استثنائيًا شبيهًا بالقطامران أو الخشبة الجانبية. يحافظ الأنف والذيل المدببان على عرض السطح مع انسياب يشبه الكاياك، ونواة drop-stitch من PVC مصممة لضغط 15 رطلًا لكل بوصة مربعة لمنصة صلبة وموثوقة.',
      audience:
        'صيادو الطعوم والقاروص، وصيادو الذبابة والكاياك، والمجدفون الرحّالة الذين يحملون الثلاجات وكراسي التخييم وشبكات الصيد، إضافة إلى مشتري OEM/ODM.',
      ai_use_cases: [
        'الصيد بالطعوم والسيروف واقفًا',
        'صيد الذبابة والكاياك من منصة قابلة للنفخ',
        'رحلات صيد متعددة الأيام مع حمولة',
      ],
      ai_comparison:
        'مقارنةً باللوحات القياسية، يضيف هذا اللوح غرف هواء مزدوجة الجوانب على الطراز القطامراني تزيد بشكل كبير من الثبات الجانبي أثناء الوقوف والرمي وسحب الصيد، مع تثبيتات حاملات ومسطرة أسماك مدمجة.',
      ai_faq: [
        {
          q: 'هل يبقى اللوح مستقرًا عند مقاومة سمكة؟',
          a: 'نعم. توفر الغرف الهوائية المزدوجة الجوانب ثباتًا ثانويًا يشبه القطامران يمنع التمايل والانقلاب أثناء الوقوف والرمي أو سحب الصيد.',
        },
        {
          q: 'هل يوجد مكان لتثبيت مسبار الأسماك؟',
          a: 'نعم. يمكن لتركيبتين احترافيتين من البلاستيك الأسود أمام وسادة القبضة تثبيت حاملات الصيادين أو مسابير الأسماك أو أدوات الصيد الأساسية.',
        },
      ],
    },
    'sup-mini': {
      name: 'سلسلة ميني SUP',
      desc: 'لوح SUP نفخ مصغر فائق التعدد يصلح كلوح تجديف مدمج ولوح سيرف نفخ ولوح ركوب الأمواج المنبطح للأطفال والكبار والحيوانات الأليفة.',
      definition:
        'لوح SUP نفخ مصغر فائق التعدد بطول 7 أقدام يجمع بين لوح تجديف مدمج ولوح سيرف نفخ ولوح ركوب الأمواج المنبطح، بمحيط قصير وعريض ومستقر للأطفال والكبار والحيوانات على الأمواج والبحيرات والبرك والخلجان الهادئة.',
      problem:
        'تحتاج العائلات والمجدفون متعددو الاستخدامات إلى منصة نفخ واحدة مدمجة وقابلة للنقل تعمل كلوح تجديف للأطفال ولوح سيرف أو ركوب منبطح للكبار وسطحًا طافيًا صديقًا للحيوانات الأليفة.',
      howItWorks:
        'تستخدم سلسلة ميني SUP محيطًا قصيرًا وعريضًا ومستقرًا للغاية مع نسبة حجم إلى طول محسّنة لأقصى طفو. يلتقط خط الروكر وحافة الجانب الاستجابيان الأمواج الصغيرة، ويكون السطح المقاوم للثقوب قادرًا على تحمل أقدام الكلاب مع بقائه خفيفًا وسريع النفخ.',
      audience:
        'الآباء الذين يعرّفون أطفالهم على رياضة التجديف، والكبار الذين يرغبون في هجين سيرف أو ركوب منبطح قابل للحمل، وأصحاب الحيوانات الأليفة الذين يأخذون كلابهم إلى الماء، إضافة إلى مشتري OEM/ODM.',
      ai_use_cases: [
        'تطوير SUP والسيرف لدى الأطفال',
        'الركوب المنبطح للكبار والسيرف في الأمواج القريبة من الشاطئ',
        'اللعب الصديق للحيوانات في البحيرات والبرك والخلجان الهادئة',
      ],
      ai_comparison:
        'مقارنةً بلوحات SUP القياسية، فإن ميني SUP هجين متعدد الأغراض حقيقي — لوح تجديف ولوح سيرف نفخ ولوح ركوب منبطح في بصمة فائقة الصغر — مع سطح مقاوم للثقوب وصديق للحيوانات الأليفة.',
      ai_faq: [
        {
          q: 'هل يمكن للكبار ركوب ميني SUP؟',
          a: 'نعم. النسبة المحسّنة بين الحجم والطول تدعم الجميع من الأطفال إلى الكبار كاملي النمو، سواء بالتجديف وقوفًا أو بالركوب المنبطح أو باصطياد الأمواج الصغيرة.',
        },
        {
          q: 'هل السطح آمن للكلاب؟',
          a: 'نعم. يستخدم السطح مواد مقاومة للثقوب مصممة لتحمل مخالب وأقدام الكلاب.',
        },
      ],
    },
    'sup-giant': {
      name: 'SUP عملاق متعدد الأشخاص',
      desc: 'لوح SUP نفخ ضخم بطول 16.5 قدم لعدة أشخاص ومصنف لوزن 650 كجم مع نفخ بصمامين وهيكل 8 بوصات ومقابض متعددة وانسياب متعدد الزعانف.',
      definition:
        'لوح SUP نفخ عملاق متعدد الأشخاص بطول 16.5 قدم مع هيكل بسماكة 8 بوصات ونفخ بصمامين وتكوين متعدد المقابض وانسياب متعدد الزعانف وأنظمة حبال تخزين مزدوجة للتجديف الجماعي والاستئجار والأنشطة الجماعية.',
      problem:
        'تحتاج المجموعات ومشغلو التأجير ومنظمو الأحداث إلى لوح نفخ عملاق واحد يحمل عدة راكبين بأمان ويظل صلبًا تحت الأحمال المركزة.',
      howItWorks:
        'يستخدم SUP العملاق متعدد الأشخاص مادة PVC من نوع drop-stitch المقوى بمعدل 15 رطلًا لكل بوصة مربعة مع نظام صمامين حتى يتمكن شخصان من نفخ الحجم الهوائي الكبير في وقت واحد. تسهل ثمانية إلى اثني عشر مقبضًا شديد التحمل على طول الجانبين بالإضافة إلى مقابض الأنف والذيل الحمل وإعادة الصعود، بينما يحافظ إعداد 4+1 أو ثلاثي الزعانف على استقامة اللوح العريض.',
      audience:
        'مشغلو التأجير وأندية الرياضات المائية ومنظمو برامج بناء الفريق والعائلات الكبيرة والمغامرون الجماعيون، إضافة إلى مشتري OEM/ODM.',
      ai_use_cases: [
        'جلسات بناء الفريق للشركات والمجموعات',
        'أساطيل التأجير التجارية ورحلات الأندية',
        'نزهات عائلية كبيرة ومتعددة الراكبين على البحيرة',
      ],
      ai_comparison:
        'مقارنةً بلوحات SUP القياسية، يحمل SUP العملاق حتى 650 كجم بهيكل 8 بوصات ونفخ بصمامين، وبفضل تصميم المقابض المتعددة والزعانف المتعددة يستطيع أطقم كاملة التجديف والحمل والصعود بأمان.',
      ai_faq: [
        {
          q: 'كم عدد الأشخاص الذين يمكنهم ركوبه؟',
          a: 'المنصة ذات العرض 59 بوصة مصممة لتحمل وزن هائل يبلغ نحو 650 كجم، ما يتسع بشكل مريح لعدة راكبين وثلاجات ومعدات السلامة.',
        },
        {
          q: 'كيف يتم نفخ لوح بهذا الحجم؟',
          a: 'يتيح نظام الصمامين لشخصين نفخ الحجم الهوائي الداخلي الضخم في الوقت نفسه، للوصول إلى نطاق التشغيل 11–15 رطلًا لكل بوصة مربعة.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'SUP زورق المنفعة والطعوم',
      desc: 'لوح SUP منفعة بعرض 47 بوصة شبيه بالطوافة، بقدرة تحميل 880 رطلًا ونافذة عرض مركزية وتركيبات دفع مزدوجة لصيد الطعوم ومحركات التصيد.',
      definition:
        'لوح SUP للمنفعة ولطُعم الأسماك بطول 11.5 قدم بعرض 47 بوصة شبيه بالطوافة، بقدرة تحميل 880 رطلًا ونافذة عرض مركزية وتركيبات تحميل وذيل على شكل ذيل السنونو مع تركيبات دفع مزدوجة لصيد الطعوم والنقل والاستخدامات المنفعية.',
      problem:
        'يحتاج صيادو الطعوم والمستخدمون المنفعيون إلى منصة قابلة للنفخ يكاد يكون من المستحيل قلبها مع سعة تحميل هائلة للصياد والثلاجات والبطاريات وحتى محرك تصيد كهربائي.',
      howItWorks:
        'يستخدم لوح SUP زورق المنفعة والطعوم محيطًا قائمًا بطول 47 بوصة شبيهًا بالطوافة يكاد يكون من المستحيل قلبه أثناء الرمي أو مقاومة الأسماك الكبيرة. يُصنف بناؤه المقوى بتقنية drop-stitch لـ 880 رطلًا، ويوفر الذيل على شكل ذيل السنونو مساحة تثبيت مسبقة التكوين لأنظمة الدفع.',
      audience:
        'صيادو الطعوم والذبابة وصيادو الرمح ومراقبو المياه الضحلة والصيادون الذين يشغلون محركات التصيد من منصة قابلة للنفخ، إضافة إلى مشتري OEM/ODM.',
      ai_use_cases: [
        'صيد الطعوم والذبابة وقوفًا أو جلوسًا',
        'الاستطلاع تحت الماء والصيد بالرمح',
        'نقل الأحمال الثقيلة والاستخدامات المنفعية المستقرة',
      ],
      ai_comparison:
        'مقارنةً بلوحات صيد SUP القياسية، فإن زورق الطُعم منصة منفعية بعرض الطوافة مصنفة لـ 880 رطلًا، مع نافذة عرض مركزية وتركيب دفع مزدوج مسبق التكوين وثبات يمكّنك من التحرك بحرية لصيد الطعوم والذبابة.',
      ai_faq: [
        {
          q: 'هل يمكنه تحمل محرك تصيد؟',
          a: 'نعم. يتضمن الذيل على شكل ذيل السنونو مساحة تركيب مسبقة التكوين لأنظمة القوة، ويتحمل اللوح المحرك والبطاريات في حدود قدرته البالغة 880 رطلًا.',
        },
        {
          q: 'ما فائدة نافذة العرض المركزية؟',
          a: 'تتيح النافذة مشاهدة المياه الضحلة بحثًا عن البنى وحركة الطعم — مثالية لصيد الرمح ومراقبة المياه الضحلة.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'SUP الرحلات الطويلة كروزر',
      desc: 'لوح SUP نفخ للرحلات الطويلة بطول 12.5 قدم مع صندوق زعنفة US منخفض الارتفاع وزعنفة رحلات احترافية بطول 9 بوصات ونواة drop-stitch لإبحار فعّال.',
      definition:
        'لوح SUP نفخ للرحلات الطويلة بطول 12.5 قدم مع صندوق زعنفة US منخفض الارتفاع وزعنفة رحلات/سباق احترافية بطول 9 بوصات وبناء drop-stitch صلب للإبحار لمسافات طويلة واستكشاف المياه الهادئة والتجديف عالي الأداء القابل للضبط.',
      problem:
        'يحتاج متنزهو الرحلات الطويلة إلى لوح بجوانب صلبة تمنع الترهل وانسياب في خط مستقيم يمكن توقعه ونظام زعانف يمكن ضبطه حسب ظروف المياه المختلفة.',
      howItWorks:
        'يجمع كروزر الرحلات الطويلة بين نواة drop-stitch من PVC بمعدل 15 رطلًا لكل بوصة مربعة وصلابة الجوانب لمنع الترهل في منتصف المدى. يقبل صندوق الزعنفة US منخفض الارتفاع الزعنفة الاحترافية 9 بوصات المرفقة أو زعانف السوق الثانوي، ما يسمح للمجدفين بضبط الانسياب والسرعة حسب الظروف المحددة.',
      audience:
        'المتنزهون لمسافات طويلة ومستكشفو المياه الهادئة وممارسو الإبحار التحمل ومن يرغبون في أداء قابل للضبط، إضافة إلى مشتري OEM/ODM.',
      ai_use_cases: ['رحلات طويلة وإبحار ساحلي', 'استكشاف المياه الهادئة وتجديف التحمل', 'تجديف أداء مخصص مع زعانف US'],
      ai_comparison:
        'مقارنةً باللوحات متعددة الاستخدامات القياسية، يضيف كروزر الرحلات هيكلًا بطول 12.5 قدم بجوانب صلبة ونظام صندوق زعنفة US، مما يبقيك على المسار لمسافات طويلة بانحراف ومجهود أقل.',
      ai_faq: [
        {
          q: 'هل يمكنني استخدام زعانفي الخاصة؟',
          a: 'نعم. صندوق الزعنفة US منخفض الارتفاع متوافق مع سوق التعديل، لذا يمكنك تركيب زعانف المياه الهادئة أو السباق المفضلة لديك لضبط الأداء.',
        },
        {
          q: 'كيف أصل إلى الضغط الكامل؟',
          a: 'تنقل المضخة اليدوية ثنائية الأسطوانة المرفقة حجمًا كبيرًا بسرعة وتصل إلى ضغوط أعلى بمجهود أقل، واللوح متوافق مع مضخة afarer الكهربائية 12VDC الاختيارية.',
        },
      ],
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
    'sup-horizon-lines': {
      name: 'Horizon Lines-serien',
      desc: 'Premium allround-SUP på 11 fot med fusion-laminatkonstruktion, reptilhuds-tractionpad och tre avtagbara click-fenor för alla förhållanden.',
      definition:
        'En premium allround-SUP på 11 fot med lätt fusion-laminatförstärkning, konturformad reptilhuds-tractionpad med stöd för fotvalvet och ett trippel-click-fensystem för sjöar, floder och skyddade kustvatten.',
      problem:
        'Versatila paddlare vill ha en enda bräda som klarar allt från lugnvattenkryssning till gropiga kustförhållanden, samtidigt som den är lätt nog att resa med och styv nog att kännas som en hård bräda.',
      howItWorks:
        'Horizon Lines-serien kombinerar specialiserade fusion-laminatförstärkningslager med drop-stitch-PVC-konstruktion för 15 PSI. Tre helt avtagbara click-fenor med optimerad toe-in-vinkel ger dig möjlighet att finjustera spårning och manövrerbarhet, och en dubbelverkande eller valfri 12VDC elektrisk pump når snabbt fullt tryck.',
      audience:
        'Förstagångsköpare, lugna vattenkryssare, avancerade manöverentusiaster och resenärer som vill ha en portabel allround-uppblåsbar SUP-bräda med valfritt komplett paket.',
      ai_use_cases: [
        'Allround-paddling på lugnt och kustnära vatten',
        'Avancerad manöverträning och touring',
        'Resvänliga kompakta SUP-äventyr',
      ],
      ai_comparison:
        'Jämfört med standard allround-SUP-brädor har Horizon Lines fusion-laminatförstärkning och ett trippelfensystem som låter dig anpassa spårning kontra manövrerbarhet för allt från lugna sjöar till gropigt kustvatten.',
      ai_faq: [
        {
          q: 'Kan fenorna anpassas efter förhållandena?',
          a: 'Ja. Alla tre click-fenor är helt avtagbara med en optimerad toe-in-vinkel, så du kan ställa in brädan för lugnt vatten, flodströmmar eller gropiga kustförhållanden.',
        },
        {
          q: 'Vilka pumpalternativ ingår?',
          a: 'En dubbelverkande högtrycks-/högvolymspump pumpar på båda slagen, och brädan är kompatibel med en valfri 12VDC 20PSI elektrisk pump som når 15 PSI på ungefär 9 minuter.',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO-serien',
      desc: 'Professionell tävlings-SUP på 14 fot med kolfiberhybridkonstruktion, vågskärande displacementnos och elitklassad spårning för spurter och långdistanslopp.',
      definition:
        'En professionell tävlings-SUP på 14 fot med kolfiberhybrid-matris utan flex, en vågskärande displacementnos och ett smalt 26-tumsdäck byggt för spurter, tempolopp och träning med hög kadens.',
      problem:
        'Tävlingspaddlare behöver hårdbräde-liknande styvhet och rak spårning från en uppblåsbar bräda, utan flex, motstånd eller den trista industriella estetiken hos traditionella tävlings-SUP-brädor.',
      howItWorks:
        'RHEO-serien använder en kolfiberhybrid-uppblåsbar konstruktion som eliminerar flex för en stabilt fast plattform. Den vågskärande displacementnosen skär genom gropigt vatten med minimalt motstånd, medan 26-tumsbredden minskar friktionen i den våta ytan och 2+1-fenuppsättningen håller spårning i hög fart och stödjer snabba svepande svängar.',
      audience:
        'Tävlingspaddlare som jagar personbästa, hastighetsentusiaster och avancerade paddlare som vill ha styv tävlingsprestanda med uppblåsbar portabilitet, plus OEM/ODM-köpare.',
      ai_use_cases: [
        'Tävlings-SUP och sprintträning',
        'Högintensiv träning och intervallpaddling',
        'Tekniska banor och tävling i trånga vattenvägar',
      ],
      ai_comparison:
        'Jämfört med traditionella tävlings-SUP-brädor ger RHEO en kolfiberhybrid-uppblåsbar konstruktion utan flex och en vågskärande nos för exceptionell framkomlighet i mötande gropigt vatten, i en bräda som fortfarande packas ned för resa.',
      ai_faq: [
        {
          q: 'Är RHEO tillräckligt stabil för nybörjare?',
          a: 'Den är designad för tävlings- och avancerade paddlare; 26-tumsbredden prioriterar hastighet och effektivitet, så nybörjare bör börja på en bredare allround-bräda.',
        },
        {
          q: 'Vad är 2+1-fenuppsättningen till för?',
          a: 'Den centrala fenan upprätthåller utmärkt rak spårning i höga hastigheter, medan sidofenorna ger sidostabilitet vid snabba, vida svängar runt bojar.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Uppblåsbart fiske-SUP',
      desc: 'Stabilt katamaraninspirerat uppblåsbart fiske-SUP med dubbelsidiga luftkammare, spöhållarfästen och en fiskmätning på däck för kast och vevning stående.',
      definition:
        'Ett uppblåsbart fiske-SUP på 11,5 fot med dubbelsidiga luftkammare för katamarannivå av sekundärstabilitet, spöhållarfästen, en fiskmätning på däck och en kajakinspirerad skrovform för stående kast, vevning och touring.',
      problem:
        'Sportfiskare behöver en stabil kastplattform för stående fiske som inte vinglar eller kapsejsar när man vevar in en fångst eller paddlar genom gropigt vatten, samtidigt som den är portabel nog att ta med till avlägsna fiskeplatser.',
      howItWorks:
        'Det uppblåsbara fiske-SUP:et använder tjocka dubbelsidiga luftkammare som ger exceptionell sekundärstabilitet liknande en katamaran eller utriggare. Spetsig nos och akter behåller däckbredden med kajakliknande spårning, och drop-stitch-PVC-kärnan är klassad för 15 PSI för en styv och pålitlig plattform.',
      audience:
        'Bete- och basfiskare, flug- och kajakfiskare samt utflyktspaddlare som tar med kylboxar, campingstolar och landningshåvar, plus OEM/ODM-köpare.',
      ai_use_cases: [
        'Stående bete- och basfiske',
        'Flug- och kajakfiske från en uppblåsbar plattform',
        'Flerdagars fiskeutflykter med last',
      ],
      ai_comparison:
        'Jämfört med standardpaddelbrädor lägger detta fiske-SUP till dubbelsidiga katamaranliknande luftkammare som dramatiskt ökar sidostabiliteten vid stående, kast och vevning, med spöhållare och integrerad fiskmätning inbyggd.',
      ai_faq: [
        {
          q: 'Förblir brädan stabil när man kämpar med en fisk?',
          a: 'Ja. De dubbelsidiga luftkamrarna ger katamaranliknande sekundärstabilitet som förhindrar vingling och kapsejsning när du står, kastar eller vevar in en fångst.',
        },
        {
          q: 'Finns det plats för ett fiskfinder-fäste?',
          a: 'Ja. Två professionella svarta fästen framför traction-paden kan säkra spöhållare, fiskfinders eller viktig fiskutrustning.',
        },
      ],
    },
    'sup-mini': {
      name: 'Mini SUP-serien',
      desc: 'Ultraversatilt mini-SUP som fungerar som kompakt paddelbräda, uppblåsbar surfbräda och bodyboard för barn, vuxna och husdjur.',
      definition:
        'Ett ultraversatilt mini-SUP på 7 fot som hybridiserar kompakt paddelbräda, uppblåsbar surfbräda och bodyboard, med kort, brett och stabilt utförande för barn, vuxna och husdjur på vågor, sjöar, pooler och lugna vikar.',
      problem:
        'Familjer och versatila riders behöver en kompakt portabel uppblåsbar plattform som fungerar som barns paddelbräda, vuxnas surf- eller bodyboard och en husdjursvänlig flytande däck.',
      howItWorks:
        'Mini SUP-serien använder ett kort, brett, mycket stabilt utförande med optimerat förhållande mellan volym och längd för maximal flytkraft. Responsiva rocker- och skena-linjer fångar små vågor, och ett slitstarkt stöttåligt däck tål hundtassar samtidigt som det förblir lätt och snabbt att pumpa upp.',
      audience:
        'Föräldrar som introducerar barn i paddling, vuxna som vill ha en portabel surf- eller bodyboard-hybrid och husdjursägare som tar med sina hundar på vattnet, plus OEM/ODM-köpare.',
      ai_use_cases: [
        'Barns SUP- och surfframsteg',
        'Vuxen-bodyboarding och shorebreak-surfing',
        'Husdjursvänligt lek i sjö, pool och lugn vik',
      ],
      ai_comparison:
        'Jämfört med standard-SUP-brädor är Mini en äkta mångfunktionshybrid — paddelbräda, uppblåsbar surfbräda och bodyboard i ett ultraportabelt fotavtryck — med ett stöttåligt, husdjursvänligt däck.',
      ai_faq: [
        {
          q: 'Kan vuxna åka Mini SUP?',
          a: 'Ja. Det optimerade förhållandet mellan volym och längd stödjer alla från barn till fullvuxna, vare sig man paddlar stående, bodyboardar liggande eller fångar små vågor.',
        },
        {
          q: 'Är däcket säkert för hundar?',
          a: 'Ja. Däcket använder robusta, stöttåliga material konstruerade för att tåla hundars klor och tassar.',
        },
      ],
    },
    'sup-giant': {
      name: 'Flersitsiga Giant SUP',
      desc: 'Jättestort flersitsigt uppblåsbart SUP på 16,5 fot, klassat för 650 kg med dubbelventilspumpning, 8-tums skrov, flera handtag och multifenspårning.',
      definition:
        'Ett flersitsigt jätte-SUP på 16,5 fot med 8-tums skrov, dubbelventilspumpning, multifattat handtagskonfiguration, multifenspårning och dubbla lastbungeesystem för grupp-paddling, uthyrning och teamevenemang.',
      problem:
        'Grupper, uthyrningsoperatörer och evenemangsarrangörer behöver en enda stor uppblåsbar bräda som bär flera riders säkert och förblir styv under koncentrerade laster.',
      howItWorks:
        'Flersitsiga Giant SUP använder kraftigt drop-stitch-PVC klassat för 15 PSI med ett dubbelventilsystem så att två personer kan pumpa den stora luftvolymen samtidigt. Åtta till tolv kraftiga handtag längs båda skenorna plus nos- och akterhandtag gör bärning och återpåkryssning enkel, medan ett 4+1- eller trefensuppställning håller den breda brädan rak.',
      audience:
        'Uthyrningsoperatörer, vattensportklubbar, evenemangsarrangörer som driver teambuildingprogram, stora familjer och gruppäventyrerare, plus OEM/ODM-köpare.',
      ai_use_cases: [
        'Företags- och gruppteambuilding-sessioner',
        'Kommersiella uthyrningsflottor och klubevenemang',
        'Stora familje- och flerridsutflykter på sjön',
      ],
      ai_comparison:
        'Jämfört med standard-SUP-brädor bär Giant SUP upp till 650 kg med 8-tums skrov och dubbelventilspumpning, med en multifattad, multifenkonstruktion så att hela besättningar kan paddla, bära och kliva ombord säkert.',
      ai_faq: [
        {
          q: 'Hur många personer kan åka på den?',
          a: 'Den 59 tum breda plattformen är klassad för en massiv last på cirka 650 kg och stödjer bekvämt flera riders, kylboxar och säkerhetsutrustning.',
        },
        {
          q: 'Hur pumpar man upp en så stor bräda?',
          a: 'Ett dubbelventilsystem gör att två personer kan pumpa den stora inre luftvolymen samtidigt och nå ett arbetsområde på 11–15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Utility & Lure Skiff SUP',
      desc: 'Pontonbrett 47-tums utility-SUP med 880 lb lastkapacitet, centralt utsiktsfönster och dubbla motorfästen för betesfiske och trollingmotoruppsättningar.',
      definition:
        'Ett pontonbrett utility- och betesskiff-SUP på 11,5 fot med 47-tumsprofil, 880 lb lastkapacitet, centralt utsiktsfönster, actionfästen och en svalstjärtformad akter med dubbla motorfästen för betesfiske, lastning och utilityanvändning.',
      problem:
        'Bete-fiskare och utilityanvändare behöver en nästan otippbar uppblåsbar plattform med enorm lastkapacitet för fiskaren, kylboxar, batterier och till och med en elektrisk trollingmotor.',
      howItWorks:
        'Utility & Lure Skiff SUP använder en knubbig, pontonliknande 47-tumsprofil som är praktiskt taget omöjlig att tippa vid kast eller kamp med stora fiskar. Den förstärkta drop-stitch-konstruktionen är klassad för 880 lb, och den svalstjärtformade aktern ger förkonfigurerat monteringsutrymme för kraftsystem.',
      audience:
        'Bete- och flugfiskare, spjutfiskare, observationsextusiasm i grunt vatten och fiskare som kör trollingmotorer från en uppblåsbar plattform, plus OEM/ODM-köpare.',
      ai_use_cases: [
        'Bete- och flugfiske stående eller sittande',
        'Undervattensrekognosering och spjutfiske',
        'Tung lastning och stabil utilityanvändning',
      ],
      ai_comparison:
        'Jämfört med standardfiske-SUP-brädor är Lure Skiff en pontonbred utilityplattform klassad för 880 lb med centralt utsiktsfönster, förkonfigurerade dubbla motorfästen och gångstabil för bete- och flugfiske.',
      ai_faq: [
        {
          q: 'Kan den hantera en trollingmotor?',
          a: 'Ja. Den svalstjärtformade aktern har förkonfigurerat monteringsutrymme för kraftsystem, och brädan bär motorn plus batterier inom sin kapacitet på 880 lb.',
        },
        {
          q: 'Vad är det centrala utsiktsfönstret till för?',
          a: 'Fönstret låter dig speja efter strukturer och betesrörelser i grunt vatten — idealiskt för spjutfiske och observation i grunt vatten.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Touring Cruiser SUP',
      desc: 'Långdistans touring-SUP på 12,5 fot med lågprofil US-finbox, premium 9-tums touringfena och drop-stitch-kärna för effektiv kryssning.',
      definition:
        'En touring-SUP på 12,5 fot med lågprofil US-finbox, en premium 9-tums racing-/touringfena och styv drop-stitch-konstruktion för långdistanskryssning, utforskning av lugnt vatten och justerbar prestanda-paddling.',
      problem:
        'Touringpaddlare som täcker långa avstånd behöver en bräda med styva skenor som förhindrar hängande, förutsägbar rak spårning och ett fensystem som de kan ställa in för olika vattenförhållanden.',
      howItWorks:
        'Touring Cruiser kombinerar en drop-stitch-PVC-kärna klassad för 15 PSI med skenstyvhet för att förhindra hängande i mitten. En lågprofil US-finbox rymmer den medföljande 9-tums racing-/touringfenan eller aftermarket-fenor, så paddlare kan ställa in spårning och hastighet för specifika förhållanden.',
      audience:
        'Långdistans touringpaddlare, utforskare av lugnt vatten, uthållighetskryssare och paddlare som vill ha justerbar prestanda, plus OEM/ODM-köpare.',
      ai_use_cases: [
        'Långdistans touring och kustkryssning',
        'Utforskning av lugnt vatten och uthållighetspaddling',
        'Anpassad prestandapaddling med US-fenor',
      ],
      ai_comparison:
        'Jämfört med standard allround-brädor lägger Touring Cruiser till ett skrov på 12,5 fot med styva skenor och ett US-finboxsystem som håller dig på kurs över långa avstånd med mindre gir och ansträngning.',
      ai_faq: [
        {
          q: 'Kan jag använda egna fenor?',
          a: 'Ja. Den lågprofiliga US-finboxen är aftermarket-redo, så du kan byta till dina favoritfenor för lugnt vatten eller racing för att finställa prestandan.',
        },
        {
          q: 'Hur når jag fullt tryck?',
          a: 'Den medföljande dubbelcylindriga handpumpen flyttar snabbt stor volym och når högre tryck med mindre ansträngning, och brädan är kompatibel med den valfria afarer 12VDC elektriska pumpen.',
        },
      ],
    },
  },
  nl: {
    'sup-horizon-lines': {
      name: 'Horizon Lines-serie',
      desc: 'Premium allround-opblaasbaar SUP van 11 voet met fusielaminaatstructuur, antislip-grip pad met reptielenhuidmotief en drie verwijderbare clicvinnen voor elke waterconditie.',
      definition:
        'Een premium allround-opblaasbaar SUP van 11 voet met lichte fusielaminaatversterking, een gebogen grip pad met reptielenhuidmotief en voetboogondersteuning en een systeem met drie clicvinnen voor meren, rivieren en beschutte kustwateren.',
      problem:
        'Veelzijdige peddelaars willen één board dat alles aankan, van rustig water tot woelige kustomstandigheden, terwijl het licht genoeg blijft om te reizen en stijf genoeg voor een harde plank.',
      howItWorks:
        'De Horizon Lines-serie combineert gespecialiseerde fusielaminaatversterkingslagen met drop-stitch PVC-constructie tot 15 PSI. Drie volledig verwijderbare clicvinnen met een geoptimaliseerde toe-in-hoek laten je de tracking en wendbaarheid afstellen, en een dubbelwerkende of optionele 12VDC elektrische pomp bereikt snel de volledige druk.',
      audience:
        'Eerstekopers, rustigevaar-, gevorderde manoeuvreliefhebbers en reizigers die één draagbaar allround-opblaasbaar SUP board willen met een optioneel compleet pakket.',
      ai_use_cases: [
        'Allround varen op rustig en kustwater',
        'Gevorderde manoeuvretraining en touring',
        'Reisklare compacte SUP-avonturen',
      ],
      ai_comparison:
        'Vergeleken met standaard allround-SUP boards biedt de Horizon Lines fusielaminaatversterking en een drievinnensysteem waarmee je de tracking versus wendbaarheid kunt afstellen voor alles, van rustige meren tot woelig kustwater.',
      ai_faq: [
        {
          q: 'Kunnen de vinnen worden aangepast aan de omstandigheden?',
          a: 'Ja. Alle drie de clicvinnen zijn volledig verwijderbaar met een geoptimaliseerde toe-in-hoek, zodat je de setup kunt afstellen voor rustig water, rivierstroming of woelige kustomstandigheden.',
        },
        {
          q: 'Welke opblaasopties zijn inbegrepen?',
          a: 'Een dubbelwerkende hogedruk-/volume-pomp pompt op beide slagen, en het board is compatibel met een optionele 12VDC 20PSI elektrische pomp die in ongeveer 9 minuten 15 PSI bereikt.',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO-serie',
      desc: 'Professioneel race-opblaasbaar SUP van 14 voet met hybride koolstofconstructie, golfdoorsnijdende displacement neus en elitair tracken voor sprints en langeafstandsraces.',
      definition:
        'Een professioneel race-opblaasbaar SUP van 14 voet met een hybride koolstofmatrix zonder flex, een golfdoorsnijdende displacement neus en een smal dek van 26 inch voor sprints, tijdritten en training met hoge cadans.',
      problem:
        'Competitieve racers hebben hardboard-achtige stijfheid en rechte tracking nodig van een opblaasbaar board, zonder de flex, weerstand of saaie industriële uitstraling van traditionele race-SUP boards.',
      howItWorks:
        'De RHEO-serie gebruikt een hybride koolstof opblaasconstructie die flex volledig elimineert voor een rotsvast platform. De golfdoorsnijdende displacement neus snijdt door golving met minimale weerstand, terwijl de breedte van 26 inch de wrijving van het natte oppervlak vermindert en de 2+1-vinnenopstelling de tracking op snelheid behoudt en snelle, wijde bochten ondersteunt.',
      audience:
        'Competitieve racers op zoek naar persoonlijke records, snelheidsfanaten en gevorderde peddelaars die stijve raceprestaties willen met de draagbaarheid van opblaasbaar, plus OEM/ODM-kopers.',
      ai_use_cases: [
        'Competitief SUP-racen en sprinttraining',
        'High-intensity fitness en intervalvaarten',
        'Technische banen en racen op krappe waterwegen',
      ],
      ai_comparison:
        'Vergeleken met traditionele race-SUP boards biedt de RHEO een hybride koolstof opblaasconstructie zonder flex en een golfdoorsnijdende neus voor uitzonderlijke penetratie in deining, in een board dat nog steeds opvouwt voor reizen.',
      ai_faq: [
        {
          q: 'Is de RHEO stabiel genoeg voor beginners?',
          a: 'Hij is ontworpen voor competitieve en gevorderde peddelaars; de breedte van 26 inch geeft prioriteit aan snelheid en efficiëntie, dus beginners moeten op een breder allround board beginnen.',
        },
        {
          q: 'Waar dient de 2+1-vinnenopstelling voor?',
          a: 'De centrale vin houdt uitstekende rechte tracking op hoge snelheid, terwijl de zijdelingse vinnen laterale stabiliteit bieden bij snelle, wijde bochten rond boeien.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Opblaasbaar Vis-SUP',
      desc: 'Stabiel opblaasbaar catamaran-stijl vis-SUP met dubbelzijdige luchtkamers, hengelhouders en een visliniaal op het deck voor staand werpen en binnenhalen.',
      definition:
        'Een opblaasbaar vis-SUP van 11,5 voet met dubbelzijdige luchtkamers voor secundaire stabiliteit op catamaran-niveau, hengelhouders, een visliniaal op het deck en een kajakgeïnspireerd ontwerp om staand te werpen, binnen te halen en te tourn.',
      problem:
        'Sportvissers hebben een stabiel werpplatform nodig dat niet wiebelt of kapseist bij het binnenhalen van een vangst of het varen over woelig water, terwijl het draagbaar genoeg blijft om afgelegen visplekken te bereiken.',
      howItWorks:
        'Het opblaasbare vis-SUP gebruikt dikke dubbelzijdige luchtkamers die uitzonderlijke secundaire stabiliteit bieden, vergelijkbaar met een catamaran of uitrigger. Een puntige neus en spiegel houden de dekbreedte met kajakachtige tracking, en de drop-stitch PVC-kern is geschikt tot 15 PSI voor een stijf en betrouwbaar platform.',
      audience:
        'Kunstaas- en baarsvissers, vlieg- en kajakvissers en expeditiepeddelaars die koelboxen, campingstoelen en schepnetten meenemen, plus OEM/ODM-kopers.',
      ai_use_cases: [
        'Staand kunstaas- en baarsvissen',
        'Vlieg- en kajakvissen vanaf een opblaasbaar platform',
        'Meerdaagse vis-expedities met lading',
      ],
      ai_comparison:
        'Vergeleken met standaard paddle boards voegt dit vis-SUP dubbelzijdige catamaran-achtige luchtkamers toe die de laterale stabiliteit tijdens het staan, werpen en binnenhalen enorm verhogen, met ingebouwde hengelhouders en een geïntegreerde visliniaal.',
      ai_faq: [
        {
          q: 'Blijft het board stabiel tijdens het vissen met een grote vis?',
          a: 'Ja. De dubbelzijdige luchtkamers bieden catamaran-achtige secundaire stabiliteit die wiebelen en kapseizen voorkomt tijdens het staan, werpen of binnenhalen van een vangst.',
        },
        {
          q: 'Is er een plek om een visvinder te monteren?',
          a: 'Ja. Twee professionele zwarte bevestigingen vóór het grip pad kunnen hengelhouders, visvinders of essentiële visuitrusting vasthouden.',
        },
      ],
    },
    'sup-mini': {
      name: 'Mini SUP-serie',
      desc: 'Ultraveelzijdige mini-opblaasbare SUP die werkt als compact paddle board, opblaasbare surfplank en bodyboard voor kinderen, volwassenen en huisdieren.',
      definition:
        'Een 7-voet ultraveelzijdig mini-opblaasbaar SUP dat een compact paddle board, opblaasbare surfplank en bodyboard combineert, met een kort, breed en stabiel profiel voor kinderen, volwassenen en huisdieren op golven, meren, zwembaden en rustige baaien.',
      problem:
        'Gezinnen en veelzijdige riders hebben één compact, draagbaar opblaasbaar platform nodig dat werkt als kinder-paddle board, volwassen surf- of bodyboard en een huisdier-vriendelijk drijvend dek.',
      howItWorks:
        'De Mini SUP-serie gebruikt een kort, breed en zeer stabiel profiel met een geoptimaliseerde volume-lengteverhouding voor maximaal drijfvermogen. De responsieve rocker-lijn en rail-profielen vangen kleine golven, en een duurzaam, stootvast dek weerstaat hondenpoten terwijl het licht en snel opblaasbaar blijft.',
      audience:
        'Ouders die kinderen kennis laten maken met peddelsporten, volwassenen die een draagbare surf- of bodyboard-hybride willen en huisdiereigenaren die hun honden meenemen op het water, plus OEM/ODM-kopers.',
      ai_use_cases: [
        'Kinder SUP- en surfontwikkeling',
        'Bodyboarding en shorebreak-surfen voor volwassenen',
        'Huisdier-vriendelijke pret op meer, zwembad en rustige baai',
      ],
      ai_comparison:
        'Vergeleken met standaard-SUP boards is de Mini een echte multifunctionele hybride — paddle board, opblaasbare surfplank en bodyboard in één ultraportabele footprint — met een stootvast, huisdier-vriendelijk dek.',
      ai_faq: [
        {
          q: 'Kunnen volwassenen de Mini SUP gebruiken?',
          a: 'Ja. De geoptimaliseerde volume-lengteverhouding ondersteunt iedereen, van kinderen tot volwassenen, of je nu staand peddelt, liggend bodyboardt of kleine golven vangt.',
        },
        {
          q: 'Is het dek veilig voor honden?',
          a: 'Ja. Het dek gebruikt robuuste, stootvaste materialen die speciaal zijn ontworpen om de klauwen en poten van honden te weerstaan.',
        },
      ],
    },
    'sup-giant': {
      name: 'Multi-persoons Giant SUP',
      desc: 'Enorm opblaasbaar multi-persoons SUP van 16,5 voet, geschikt voor 650 kg, met dual-valve opblazen, 8-inch romp, meerdere handvatten en multi-fin tracking.',
      definition:
        'Een multi-persoons giant opblaasbaar SUP van 16,5 voet met een 8-inch romp, dual-valve opblazen, een configuratie met meerdere handvatten, multi-fin tracking en dubbele bagage-bungee-systemen voor groepspeddelen, verhuur en teamevenementen.',
      problem:
        'Groepen, verhuurbedrijven en evenementenorganisatoren hebben één groot opblaasbaar board nodig dat meerdere riders veilig draagt en stijf blijft onder geconcentreerde belastingen.',
      howItWorks:
        'Het multi-persoons Giant SUP gebruikt zwaar drop-stitch PVC tot 15 PSI met een dual-valve systeem, zodat twee mensen tegelijk het grote luchtvolume kunnen opblazen. Acht tot twaalf zware handvatten langs beide randen, plus neus- en spiegelhandvatten, maken dragen en weer aan boord gaan eenvoudig, terwijl een 4+1- of tril-vinopstelling het brede board recht houdt.',
      audience:
        'Verhuurders, watersportclubs, evenementenorganisatoren van teambuilding-programma’s, grote gezinnen en groepsavonturiers, plus OEM/ODM-kopers.',
      ai_use_cases: [
        'Corporate en groeps-teambuilding-sessies',
        'Commerciële verhuurvloten en clubuitstapjes',
        'Grote familie- en multi-rider uitstapjes op het meer',
      ],
      ai_comparison:
        'Vergeleken met standaard-SUP boards draagt het Giant SUP tot 650 kg met een 8-inch romp en dual-valve opblazen, dankzij een ontwerp met meerdere handvatten en vinnen, zodat hele bemanningen veilig kunnen peddelen, dragen en aan boord gaan.',
      ai_faq: [
        {
          q: 'Hoeveel personen kunnen erop?',
          a: 'Het 59-inch brede platform is geschikt voor een enorme last van ongeveer 650 kg en biedt comfortabel plaats aan meerdere riders, koelboxen en veiligheidsuitrusting.',
        },
        {
          q: 'Hoe blaas je zo’n groot board op?',
          a: 'Een dual-valve systeem laat twee mensen tegelijk het enorme interne luchtvolume opblazen, waarmee een werkbereik van 11–15 PSI wordt bereikt.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Utility & Lure Skiff SUP',
      desc: 'Pontonbreed 47-inch utility SUP met 880 lb laadvermogen, centraal kijkvenster en dubbele thruster-bevestiging voor kunstaasvissen en trolling motor-opstellingen.',
      definition:
        'Een pontonbreed utility- en lure-skiff SUP van 11,5 voet met een 47-inch profiel, 880 lb laadvermogen, centraal kijkvenster, action mounts en een zwaluwstaartspiegel met dubbele thruster-bevestiging voor kunstaasvissen, transport en utility-gebruik.',
      problem:
        'Lure-vissers en utility-gebruikers hebben een vrijwel niet-omkeerbaar opblaasbaar platform nodig met een enorm laadvermogen voor de visser, koelboxen, accu’s en zelfs een elektrische trolling motor.',
      howItWorks:
        'Het Utility & Lure Skiff SUP gebruikt een compact, pontonachtig 47-inch profiel dat vrijwel onmogelijk om te gooien is tijdens het werpen of vechten met grote vissen. De versterkte drop-stitch constructie is geschikt voor 880 lb, en de zwaluwstaartspiegel biedt voorgeconfigureerde montageruimte voor aandrijfsystemen.',
      audience:
        'Lure- en vliegvissers, speervissers, observanten van ondiep water en vissers die trolling motors gebruiken vanaf een opblaasbaar platform, plus OEM/ODM-kopers.',
      ai_use_cases: [
        'Lure- en vliegvissen staand of zittend',
        'Onderwaterverkenning en speervissen',
        'Zwaar transport en stabiel utility-gebruik',
      ],
      ai_comparison:
        'Vergeleken met standaard vis-SUP boards is de Lure Skiff een pontonbreed utility platform, geschikt voor 880 lb, met een centraal kijkvenster, voorgeconfigureerde dubbele thruster-bevestiging en loopstabiliteit voor lure- en vliegvissen.',
      ai_faq: [
        {
          q: 'Kan hij een trolling motor dragen?',
          a: 'Ja. De zwaluwstaartspiegel bevat voorgeconfigureerde montageruimte voor aandrijfsystemen, en het board draagt de motor plus accu’s binnen zijn vermogen van 880 lb.',
        },
        {
          q: 'Waar dient het centrale kijkvenster voor?',
          a: 'Het venster laat je de ondieptes afspeuren op structuren en aasbewegingen, ideaal voor speervissen en het observeren van ondiep water.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Touring Cruiser SUP',
      desc: 'Langeafstand-opblaasbaar touring SUP van 12,5 voet met een laagprofiel US-finbox, premium 9-inch touring-vin en drop-stitch kern voor efficiënt toeren.',
      definition:
        'Een touring-opblaasbaar SUP van 12,5 voet met een laagprofiel US-finbox, een premium 9-inch race-/touring-vin en stijve drop-stitch constructie voor langeafstandstochten, verkenning van rustig water en afstelbaar prestaties-peddelen.',
      problem:
        'Touring-peddelaars die lange afstanden afleggen, hebben een board nodig met stijve randen die doorbuiging voorkomen, voorspelbare rechte tracking en een vinsysteem dat ze kunnen afstellen voor verschillende wateromstandigheden.',
      howItWorks:
        'De Touring Cruiser combineert een drop-stitch PVC-kern tot 15 PSI met randstijfheid om doorbuiging in het midden te voorkomen. Een laagprofiel US-finbox accepteert de meegeleverde 9-inch race-/touring-vin of aftermarket-vinnen, zodat peddelaars tracking en snelheid kunnen afstellen op specifieke omstandigheden.',
      audience:
        'Touring-peddelaars op lange afstanden, verkenners van rustig water, endurance-cruisers en peddelaars die afstelbare prestaties willen, plus OEM/ODM-kopers.',
      ai_use_cases: [
        'Langeafstand-touring en kusttochten',
        'Verkenning van rustig water en duurpeddelen',
        'Aangepast prestaties-peddelen met US-vinnen',
      ],
      ai_comparison:
        'Vergeleken met standaard allround boards voegt de Touring Cruiser een romp van 12,5 voet toe met stijve randen en een US-finbox systeem, zodat je over lange afstanden op koers blijft met minder gieren en inspanning.',
      ai_faq: [
        {
          q: 'Kan ik mijn eigen vinnen gebruiken?',
          a: 'Ja. De laagprofiel US-finbox is klaar voor aftermarket, dus je kunt je favoriete vinnen voor rustig water of racen inwisselen om de prestaties af te stellen.',
        },
        {
          q: 'Hoe bereik ik de volledige druk?',
          a: 'De meegeleverde dubbelcilinder handpomp verplaatst snel een groot volume en bereikt hogere drukken met minder moeite, en het board is compatibel met de optionele afarer 12VDC elektrische pomp.',
        },
      ],
    },
  },
  no: {
    'sup-horizon-lines': {
      name: 'Horizon Lines-serien',
      desc: 'Premium allround-oppblåsbart SUP på 11 fot med fusjonslaminatkonstruksjon, reptilhud-greppad og tre avtakbare klikkfinner for alle forhold.',
      definition:
        'Et premium allround-oppblåsbart SUP på 11 fot med lett fusjonslaminatforsterkning, konturformet reptilhud-greppad med støtte for fotbuen og et trippel-klikkfinnesystem for innsjøer, elver og beskyttede kystfarvann.',
      problem:
        'Allsidige padlere vil ha ett brett som håndterer alt fra roligvannstur til urolige kystforhold, samtidig som det er lett nok til å reise med og stivt nok til å føles som et hardt brett.',
      howItWorks:
        'Horizon Lines-serien kombinerer spesialiserte fusjonslaminatforsterkningslag med drop-stitch-PVC-konstruksjon klassifisert for 15 PSI. Tre helt avtakbare klikkfinner med optimalisert toe-in-vinkel lar deg justere spor og manøvrerbarhet, og en dobbeltvirkende eller valgfri 12VDC elektrisk pumpe når fullt trykk raskt.',
      audience:
        'Førstegangskjøpere, roligvannskryssere, entusiaster for avanserte manøvrer og reisende som vil ha ett bærbart allround-oppblåsbart SUP-brett med valgfri komplett pakke.',
      ai_use_cases: [
        'Allround-padling på rolig og kystnært vann',
        'Avansert manøvertrening og touring',
        'Reiseklare kompakte SUP-eventyr',
      ],
      ai_comparison:
        'Sammenlignet med vanlige allround-SUP-brett har Horizon Lines fusjonslaminatforsterkning og et trippelfinnesystem som lar deg tilpasse spor kontra manøvrerbarhet for alt fra rolige innsjøer til urolig kystvann.',
      ai_faq: [
        {
          q: 'Kan finnene justeres etter forholdene?',
          a: 'Ja. Alle tre klikkfinnene er helt avtakbare med optimalisert toe-in-vinkel, så du kan stille inn oppsettet for rolig vann, elvestrømmer eller urolige kystforhold.',
        },
        {
          q: 'Hvilke oppblåsingsalternativer følger med?',
          a: 'En dobbeltvirkende høytrykks-/storvolum-pumpe pumper på begge slagene, og brettet er kompatibelt med en valgfri 12VDC 20PSI elektrisk pumpe som når 15 PSI på omtrent 9 minutter.',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO-serien',
      desc: 'Profesjonelt 14 fots race-oppblåsbart SUP med karbonhybridkonstruksjon, bølgeskjærende deplasementsnese og elit-sporing for spurter og langdistanseløp.',
      definition:
        'Et profesjonelt 14 fots race-oppblåsbart SUP-brett med karbonhybridmatrise uten fleks, en bølgeskjærende deplasementsnese og et smalt 26-tommers dekk bygget for spurter, temporitt og høy kadans-trening.',
      problem:
        'Konkurransepadlere trenger hardbrett-aktig stivhet og rett spor fra et oppblåsbart brett, uten fleks, motstand eller den kjedelige industrielle estetikken til tradisjonelle race-SUP-brett.',
      howItWorks:
        'RHEO-serien bruker en karbonhybrid oppblåsingskonstruksjon som eliminerer fleks for en klippestødig plattform. Den bølgeskjærende deplasementsnesen skjærer gjennom sjø med minimal motstand, mens 26-tommers bredde reduserer friksjonen i den våte overflaten og 2+1-finneoppsettet holder sporet i fart og støtter raske, sveipende svinger.',
      audience:
        'Konkurrerende padlere som jakter personlige rekorder, fartsentusiaster og avanserte padlere som vil ha stiv konkurranseytelse med oppblåsbar portabilitet, pluss OEM/ODM-kjøpere.',
      ai_use_cases: [
        'Konkurranse-SUP-racing og sprinttrening',
        'Høyintensitets-fitness og intervallpadling',
        'Tekniske løp og racing på trange vannveier',
      ],
      ai_comparison:
        'Sammenlignet med tradisjonelle race-SUP-brett gir RHEO en karbonhybrid oppblåsingskonstruksjon uten fleks og en bølgeskjærende nese for eksepsjonell penetrasjon i motvindssjø, i et brett som fortsatt pakkes ned for reise.',
      ai_faq: [
        {
          q: 'Er RHEO stabil nok for nybegynnere?',
          a: 'Den er designet for konkurranse- og avanserte padlere; 26-tommers bredde prioriterer fart og effektivitet, så nybegynnere bør starte på et bredere allround-brett.',
        },
        {
          q: 'Hva er 2+1-finneoppsettet til?',
          a: 'Den sentrale finnen opprettholder utmerket rett spor i høye hastigheter, mens sidefinnene gir sideveis stabilitet under raske, vide svinger rundt bøyer.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Oppblåsbart fiske-SUP',
      desc: 'Stabilt katamaraninspirert oppblåsbart fiske-SUP med dobbeltsidige luftkamre, stangholdere og en fiskelinjal på dekket for stående kasting og haspeling.',
      definition:
        'Et oppblåsbart fiske-SUP på 11,5 fot med dobbeltsidige luftkamre for katamaran-nivå sekundærstabilitet, stangholdere, en fiskelinjal på dekket og et kajakkinspirert skrog for stående kasting, haspeling og touring.',
      problem:
        'Sportsfiskere trenger en stabil ståplattform som ikke vipper eller kantrer når de haspler inn en fangst eller padler i urolig vann, samtidig som den er bærbar nok til å nå avsidesliggende fiskeplasser.',
      howItWorks:
        'Det oppblåsbare fiske-SUP-et bruker tykke dobbeltsidige luftkamre som gir eksepsjonell sekundærstabilitet som ligner på en katamaran eller utrigger. Spiss nese og akter beholder dekkbredden med kajakklignende spor, og drop-stitch-PVC-kjernen er klassifisert for 15 PSI for en stiv og pålitelig plattform.',
      audience:
        'Sluk- og bassfiskere, flue- og kajakkfiskere og ekskursjonspadlere som tar med kjølebokser, campingstoler og håver, pluss OEM/ODM-kjøpere.',
      ai_use_cases: [
        'Stående sluk- og bassfiske',
        'Flue- og kajakkfiske fra en oppblåsbar plattform',
        'Flerdagers fiskeutflukter med last',
      ],
      ai_comparison:
        'Sammenlignet med vanlige padlebrett legger dette fiske-SUP-et til dobbeltsidige katamaranaktige luftkamre som dramatisk øker sideveis stabilitet ved stående, kasting og haspeling, med innebygde stangholdere og en integrert fiskelinjal.',
      ai_faq: [
        {
          q: 'Forblir brettet stabilt mens man kjemper med en fisk?',
          a: 'Ja. De dobbeltsidige luftkamrene gir katamaranaktig sekundærstabilitet som hindrer vipping og kantring ved stående, kasting eller haspeling av en fangst.',
        },
        {
          q: 'Er det plass til en fiskefinder?',
          a: 'Ja. To profesjonelle svarte fester foran gripe-paden kan feste stangholdere, fiskefindere eller viktig fiskeutstyr.',
        },
      ],
    },
    'sup-mini': {
      name: 'Mini SUP-serien',
      desc: 'Ultra-allsidig mini-oppblåsbart SUP som fungerer som kompakt padlebrett, oppblåsbart surfebrett og kroppsbrett for barn, voksne og kjæledyr.',
      definition:
        'Et 7 fots ultra-allsidig mini-oppblåsbart SUP som hybridiserer kompakt padlebrett, oppblåsbart surfebrett og kroppsbrett, med kort, bredt og stabilt profil for barn, voksne og kjæledyr på bølger, innsjøer, bassenger og rolige bukter.',
      problem:
        'Familier og allsidige ryttere trenger én kompakt, bærbar oppblåsbar plattform som fungerer som barnepadlebrett, voksent surfebrett eller kroppsbrett og et kjæledyrvennlig flytende dekk.',
      howItWorks:
        'Mini SUP-serien bruker et kort, bredt, svært stabilt profil med optimalisert volum-til-lengde-forhold for maksimalt oppdrift. Responsive rocker-linjer og kant-profiler fanger små bølger, og et slitesterkt punkteringssikkert dekk tåler hundepoter mens det forblir lett og raskt å blåse opp.',
      audience:
        'Foreldre som introduserer barn for padlesport, voksne som vil ha en bærbar surf- eller kroppsbrett-hybrid og kjæledyrseiere som tar hundene sine på vannet, pluss OEM/ODM-kjøpere.',
      ai_use_cases: [
        'Barnas SUP- og surffremgang',
        'Voksen-kroppsbrett og shorebreak-surfing',
        'Kjæledyrvennlig lek i innsjø, basseng og rolig bukt',
      ],
      ai_comparison:
        'Sammenlignet med vanlige SUP-brett er Mini en ekte flerbruks-hybrid, padlebrett, oppblåsbart surfebrett og kroppsbrett i ett ultraportabelt fotavtrykk, med et punkteringssikkert, kjæledyrvennlig dekk.',
      ai_faq: [
        {
          q: 'Kan voksne bruke Mini SUP?',
          a: 'Ja. Det optimaliserte volum-til-lengde-forholdet støtter alle fra barn til fullvoksne, enten du står og padler, ligger på kroppsbrett eller fanger små bølger.',
        },
        {
          q: 'Er dekket trygt for hunder?',
          a: 'Ja. Dekket bruker robuste, punkteringssikre materialer konstruert for å tåle klørne og potene til hunder.',
        },
      ],
    },
    'sup-giant': {
      name: 'Flerseters Giant SUP',
      desc: 'Kjempestort oppblåsbart flerseters SUP på 16,5 fot, klassifisert for 650 kg, med dual-valve oppblåsing, 8-tommers skrog, flere håndtak og multi-finne-sporing.',
      definition:
        'Et flerseters gigant-oppblåsbart SUP på 16,5 fot med 8-tommers skrog, dual-valve oppblåsing, konfigurasjon med flere håndtak, multi-finne-sporing og doble bagasje-bungee-systemer for gruppepadling, utleie og teambegivenheter.',
      problem:
        'Grupper, utleieoperatører og arrangører trenger ett enkelt gigantisk oppblåsbart brett som bærer flere ryttere trygt og forblir stivt under konsentrerte belastninger.',
      howItWorks:
        'Det flerseters Giant SUP bruker heavy-duty drop-stitch-PVC klassifisert for 15 PSI med et dual-valve system slik at to personer kan blåse opp det store luftvolumet samtidig. Åtte til tolv robuste håndtak langs begge railene pluss nese- og akterhåndtak gjør bæring og ombordstigning enkel, mens en 4+1- eller tri-finne-oppstilling holder det brede brettet rett.',
      audience:
        'Utleieoperatører, vannsportklubber, arrangementsarrangører som driver teambygging, store familier og gruppeeventyrere, pluss OEM/ODM-kjøpere.',
      ai_use_cases: [
        'Bedrifts- og gruppeteambygging',
        'Kommersielle utleieflåter og klubbturer',
        'Store familie- og flerrytter-turer på innsjøen',
      ],
      ai_comparison:
        'Sammenlignet med vanlige SUP-brett bærer Giant SUP opptil 650 kg med 8-tommers skrog og dual-valve oppblåsing, med et flerhåndtak- og flerfinne-design slik at hele mannskaper trygt kan padle, bære og gå om bord.',
      ai_faq: [
        {
          q: 'Hvor mange personer kan ri på den?',
          a: 'Den 59-tommers brede plattformen er klassifisert for en massiv last på rundt 650 kg og rommer komfortabelt flere ryttere, kjølebokser og sikkerhetsutstyr.',
        },
        {
          q: 'Hvordan blåser man opp et så stort brett?',
          a: 'Et dual-valve system lar to personer blåse opp det enorme indre luftvolumet samtidig, og nå et arbeidsområde på 11–15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Utility og Lure Skiff SUP',
      desc: 'Pontongbredt 47-tommers utility-SUP med 880 lb lastekapasitet, sentralt kikkvindu og dual-thruster-feste for slukfiske og trollingmotor-oppsett.',
      definition:
        'Et pontongbredt utility- og lure-skiff SUP på 11,5 fot med 47-tommers profil, 880 lb lastekapasitet, sentralt kikkvindu, action-fester og en svalehale-akter med dual-thruster-feste for slukfiske, transport og utility-bruk.',
      problem:
        'Slukfiskere og utility-brukere trenger en nesten umulig å velte oppblåsbar plattform med enorm lastekapasitet for fiskeren, kjølebokser, batterier og til og med en elektrisk trollingmotor.',
      howItWorks:
        'Utility og Lure Skiff SUP bruker en stubby, pontongliknende 47-tommers kontur som er praktisk talt umulig å velte under kasting eller kamp med store fisker. Den forsterkede drop-stitch-konstruksjonen er klassifisert for 880 lb, og svalehale-akteren gir forhåndskonfigurert monteringsplass for kraftsystemer.',
      audience:
        'Sluk- og fluefiskere, spydfiskere, observatører av grunt vann og fiskere som bruker trollingmotorer fra en oppblåsbar plattform, pluss OEM/ODM-kjøpere.',
      ai_use_cases: [
        'Sluk- og fluefiske stående eller sittende',
        'Undervannsrekognosering og spydfiske',
        'Tung transport og stabil utility-bruk',
      ],
      ai_comparison:
        'Sammenlignet med vanlige fiske-SUP-brett er Lure Skiff en pontongbred utility-plattform klassifisert for 880 lb med sentralt kikkvindu, forhåndskonfigurert dual-thruster-feste og gåstabil for sluk- og fluefiske.',
      ai_faq: [
        {
          q: 'Kan den bære en trollingmotor?',
          a: 'Ja. Svalehale-akteren inkluderer forhåndskonfigurert monteringsplass for kraftsystemer, og brettet bærer motoren pluss batterier innenfor sin kapasitet på 880 lb.',
        },
        {
          q: 'Hva er det sentrale kikkvinduet til?',
          a: 'Vinduet lar deg speide på grunt vann etter strukturer og agnbevegelser, ideelt for spydfiske og observasjon av grunt vann.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Touring Cruiser SUP',
      desc: 'Langdistanse-oppblåsbart touring-SUP på 12,5 fot med lavprofil US-finneboks, premium 9-tommers touring-finne og drop-stitch-kjerne for effektiv cruising.',
      definition:
        'Et touring-oppblåsbart SUP på 12,5 fot med lavprofil US-finneboks, en premium 9-tommers racing-/touring-finne og stiv drop-stitch-konstruksjon for langdistansecruising, utforskning av rolig vann og justerbar ytelses-padling.',
      problem:
        'Touring-padlere som dekker lange avstander trenger et brett med stive skrogkanter som hindrer synking, forutsigbar rett spor og et finnesystem de kan justere for ulike vannforhold.',
      howItWorks:
        'Touring Cruiser kombinerer en drop-stitch-PVC-kjerne klassifisert for 15 PSI med kantstivhet for å hindre synking midt i spennet. En lavprofil US-finneboks godtar den medfølgende 9-tommers racing-/touring-finnen eller ettermarkedsfinner, slik at padlere kan stille inn spor og fart for spesifikke forhold.',
      audience:
        'Touring-padlere på lange avstander, utforskere av rolig vann, utholdenhets-cruisere og padlere som ønsker justerbar ytelse, pluss OEM/ODM-kjøpere.',
      ai_use_cases: [
        'Langdistanse-touring og kystcruising',
        'Utforskning av rolig vann og utholdenhetspadling',
        'Tilpasset ytelses-padling med US-finneoppgraderinger',
      ],
      ai_comparison:
        'Sammenlignet med vanlige allround-brett legger Touring Cruiser til et skrog på 12,5 fot med stive kanter og et US-finneboks-system som holder deg på kurs over lange avstander med mindre giring og innsats.',
      ai_faq: [
        {
          q: 'Kan jeg bruke egne finner?',
          a: 'Ja. Lavprofil US-finneboksen er klargjort for ettermarkedet, så du kan bytte inn favorittfinner for rolig vann eller racing for å stille inn ytelsen.',
        },
        {
          q: 'Hvordan når jeg fullt trykk?',
          a: 'Den medfølgende dobbeltsylindrede håndpumpen flytter raskt stort volum og når høyere trykk med mindre innsats, og brettet er kompatibelt med den valgfrie afarer 12VDC-elektriske pumpen.',
        },
      ],
    },
  },
  el: {
    'sup-horizon-lines': {
      name: 'Σειρά Horizon Lines',
      desc: 'Πρεμιουμ αντλητό SUP 11 ποδών για κάθε χρήση, με ενισχυτική δομή ελασματοποιημένης σύντηξης, αντιολισθητική επιφάνεια με μοτίβο δέρματος ερπετού και τρία αφαιρούμενα πτερύγια κλικ για κάθε συνθήκη νερού.',
      definition:
        'Ένα πρεμιουμ αντλητό SUP 11 ποδών για κάθε χρήση, με ελαφριά ενίσχυση από ελασματοποιημένη σύντηξη, σχεδιασμένο αντιολισθητικό επίστρωμα με μοτίβο δέρματος ερπετού και υποστήριξη της καμάρας του ποδιού, καθώς και σύστημα τριών πτερυγίων κλικ για λίμνες, ποτάμια και προστατευμένα παράκτια ύδατα.',
      problem:
        'Οι ευέλικτοι κωπηλάτες θέλουν μία σανίδα που αντεπεξέρχεται σε όλα, από ήρεμα νερά έως άστατες παράκτιες συνθήκες, παραμένοντας αρκετά ελαφριά για ταξίδια και αρκετά άκαμπτη για αίσθηση σκληρού κελύφους.',
      howItWorks:
        'Η σειρά Horizon Lines συνδυάζει ειδικά ενισχυτικά στρώματα ελασματοποιημένης σύντηξης με δομή PVC drop-stitch έως 15 PSI. Τρία πλήρως αφαιρούμενα πτερύγια κλικ με βελτιστοποιημένη γωνία toe-in επιτρέπουν την προσαρμογή της γραμμής πορείας και της ευελιξίας, ενώ μια διπλά δραστική ή προαιρετική ηλεκτρική αντλία 12VDC φτάνει γρήγορα στη μέγιστη πίεση.',
      audience:
        'Πρώτοι αγοραστές, λάτρεις των ήρεμων νερών, των προηγμένων ελιγμών και οι ταξιδιώτες που θέλουν ένα φορητό αντλητό SUP για κάθε χρήση με προαιρετικό πλήρες πακέτο.',
      ai_use_cases: [
        'Κωπηλασία κάθε χρήσης σε ήρεμα και παράκτια ύδατα',
        'Πρακτική προηγμένων ελιγμών και τουρίνγκ',
        'Συμπαγείς περιπέτειες SUP έτοιμες για ταξίδι',
      ],
      ai_comparison:
        'Σε σύγκριση με τα τυπικά SUP για κάθε χρήση, το Horizon Lines προσφέρει ενίσχυση ελασματοποιημένης σύντηξης και σύστημα τριών πτερυγίων που σας επιτρέπει να προσαρμόζετε τη γραμμή πορείας σε σχέση με την ευελιξία, από ήρεμες λίμνες έως άστατα παράκτια νερά.',
      ai_faq: [
        {
          q: 'Μπορούν τα πτερύγια να προσαρμοστούν στις συνθήκες;',
          a: 'Ναι. Και τα τρία πτερύγια κλικ είναι πλήρως αφαιρούμενα με βελτιστοποιημένη γωνία toe-in, ώστε να ρυθμίζετε τη διάταξη για ήρεμα νερά, ρεύματα ποταμών ή άστατες παράκτιες συνθήκες.',
        },
        {
          q: 'Ποιες επιλογές φουσκώματος περιλαμβάνονται;',
          a: 'Μια διπλά δραστική αντλία υψηλής πίεσης/μεγάλου όγκου φουσκώνει και στους δύο κτύπους, και η σανίδα είναι συμβατή με προαιρετική ηλεκτρική αντλία 12VDC 20PSI που φτάνει τα 15 PSI σε περίπου 9 λεπτά.',
        },
      ],
    },
    'sup-rheo': {
      name: 'Σειρά RHEO',
      desc: 'Επαγγελματικό αγωνιστικό αντλητό SUP 14 ποδών με υβριδική δομή άνθρακα, μύτη εκτόπισης που κόβει τα κύματα και κορυφαία γραμμή πορείας για σπριντ και αγώνες μεγάλων αποστάσεων.',
      definition:
        'Ένα επαγγελματικό αγωνιστικό αντλητό SUP 14 ποδών με υβριδική μήτρα άνθρακα χωρίς κάμψη, μύτη εκτόπισης που κόβει τα κύματα και στενό κατάστρωμα 26 ιντσών για σπριντ, αγώνες χρόνου και προπόνηση υψηλού ρυθμού.',
      problem:
        'Οι αγωνιζόμενοι χρειάζονται ακαμψία σκληρής σανίδας και ίσια γραμμή πορείας από ένα αντλητό SUP, χωρίς κάμψη, οπισθέλκουσα ή την ωχρή βιομηχανική αισθητική των παραδοσιακών αγωνιστικών SUP.',
      howItWorks:
        'Η σειρά RHEO χρησιμοποιεί υβριδική αντλητή δομή άνθρακα που εξαλείφει την κάμψη για μια βραχώδη σταθερή πλατφόρμα. Η μύτη εκτόπισης κόβει τα κύματα με ελάχιστη αντίσταση, ενώ το πλάτος των 26 ιντσών μειώνει την τριβή της βρεγμένης επιφάνειας και η διάταξη πτερυγίων 2+1 διατηρεί τη γραμμή πορείας στην ταχύτητα και βοηθά στις γρήγορες στροφές σάρωσης.',
      audience:
        'Ανταγωνιστικοί κωπηλάτες που κυνηγούν ατομικά ρεκόρ, λάτρεις της ταχύτητας και προχωρημένοι κωπηλάτες που θέλουν άκαμπτη αγωνιστική απόδοση με φορητότητα αντλητού, καθώς και αγοραστές OEM/ODM.',
      ai_use_cases: [
        'Ανταγωνιστικοί αγώνες SUP και προπόνηση σπριντ',
        'Υψηλής έντασης γυμναστική και διαλειμματική κωπηλασία',
        'Τεχνικές διαδρομές και αγώνες σε στενά νερά',
      ],
      ai_comparison:
        'Σε σύγκριση με τα παραδοσιακά αγωνιστικά SUP, το RHEO προσφέρει υβριδική αντλητή δομή άνθρακα χωρίς κάμψη και μύτη που κόβει τα κύματα για εξαιρετική διείσδυση στα αντίθετα κύματα, σε σανίδα που διπλώνει για ταξίδι.',
      ai_faq: [
        {
          q: 'Είναι το RHEO αρκετά σταθερό για αρχάριους;',
          a: 'Έχει σχεδιαστεί για ανταγωνιστικούς και προχωρημένους κωπηλάτες· το πλάτος των 26 ιντσών δίνει προτεραιότητα στην ταχύτητα, οπότε οι αρχάριοι θα πρέπει να ξεκινήσουν σε μια πιο φαρδιά σανίδα κάθε χρήσης.',
        },
        {
          q: 'Σε τι εξυπηρετεί η διάταξη πτερυγίων 2+1;',
          a: 'Το κεντρικό πτερύγιο διατηρεί εξαιρετική ίσια γραμμή πορείας σε υψηλές ταχύτητες, ενώ τα πλευρικά πτερύγια παρέχουν πλευρική σταθερότητα κατά τις γρήγορες, φαρδιές στροφές γύρω από σημαδούρες.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Αντλητό SUP για Ψάρεμα',
      desc: 'Σταθερό αντλητό SUP ψαρέματος τύπου καταμαράν με διπλούς πλευρικούς αεροθαλάμους, βάσεις καλαμιών και μέτρο ψαριών στο κατάστρωμα για ψάρεμα όρθιου.',
      definition:
        'Αντλητό SUP ψαρέματος 11,5 ποδών με διπλούς πλευρικούς αεροθαλάμους για δευτερεύουσα σταθερότητα επιπέδου καταμαράν, βάσεις καλαμιών, μέτρο ψαριών στο κατάστρωμα και γάστρα εμπνευσμένη από καγιάκ για ρίψη, ανέλκυση και τουρίνγκ όρθιου.',
      problem:
        'Οι ψαράδες χρειάζονται μια σταθερή πλατφόρμα όρθιου ψαρέματος που δεν ταλαντεύεται ούτε ανατρέπεται κατά την ανέλκυση αλιεύματος ή την πορεία σε άστατα νερά, παραμένοντας αρκετά φορητή για απόμακρα σημεία ψαρέματος.',
      howItWorks:
        'Το αντλητό SUP ψαρέματος χρησιμοποιεί χοντρούς διπλούς πλευρικούς αεροθαλάμους που παρέχουν εξαιρετική δευτερεύουσα σταθερότητα, παρόμοια με καταμαράν ή πλαϊνό πλωτήρα. Μυτερή μύτη και πρύμνη διατηρούν το πλάτος του καταστρώματος με γραμμή πορείας σαν καγιάκ, και ο πυρήνας drop-stitch PVC είναι πιστοποιημένος για 15 PSI για άκαμπτη και αξιόπιστη πλατφόρμα.',
      audience:
        'Ψαράδες με δολώματα και λαυράκια, ιπτάμενου ψαρέματος και καγιάκ, και κωπηλάτες εκδρομών που μεταφέρουν ψυγεία, καρέκλες κατασκήνωσης και απόχες, καθώς και αγοραστές OEM/ODM.',
      ai_use_cases: [
        'Όρθιο ψάρεμα με δολώματα και λαυράκια',
        'Ιπτάμενο ψάρεμα και καγιάκ από αντλητή πλατφόρμα',
        'Πολυήμερες εκδρομές ψαρέματος με φορτίο',
      ],
      ai_comparison:
        'Σε σύγκριση με τις τυπικές σανίδες κωπηλασίας, αυτό το SUP ψαρέματος προσθέτει διπλούς πλευρικούς αεροθαλάμους τύπου καταμαράν που αυξάνουν δραματικά την πλευρική σταθερότητα όρθιου, στη ρίψη και στην ανέλκυση, με ενσωματωμένες βάσεις καλαμιών και μέτρο ψαριών.',
      ai_faq: [
        {
          q: 'Παραμένει η σανίδα σταθερή όταν παλεύεις με ένα ψάρι;',
          a: 'Ναι. Οι διπλοί πλευρικοί αεροθάλαμοι προσφέρουν δευτερεύουσα σταθερότητα σαν καταμαράν που αποτρέπει την ταλάντωση και την ανατροπή όρθιου, στη ρίψη ή στην ανέλκυση αλιεύματος.',
        },
        {
          q: 'Υπάρχει θέση για την τοποθέτηση ανιχνευτή ψαριών;',
          a: 'Ναι. Δύο επαγγελματικές μαύρες βάσεις μπροστά από την αντιολισθητική επιφάνεια μπορούν να συγκρατήσουν βάσεις καλαμιών, ανιχνευτές ψαριών ή βασικό εξοπλισμό ψαρέματος.',
        },
      ],
    },
    'sup-mini': {
      name: 'Σειρά Mini SUP',
      desc: 'Εξαιρετικά ευέλικτο αντλητό mini-SUP που λειτουργεί ως συμπαγής σανίδα κωπηλασίας, αντλητή σανίδα σερφ και σανίδα σώματος για παιδιά, ενήλικες και κατοικίδια.',
      definition:
        'Αντλητό mini-SUP 7 ποδών εξαιρετικά ευέλικτο που συνδυάζει συμπαγή σανίδα κωπηλασίας, αντλητή σανίδα σερφ και σανίδα σώματος, με κοντό, φαρδύ και σταθερό προφίλ για παιδιά, ενήλικες και κατοικίδια σε κύματα, λίμνες, πισίνες και ήρεμους κόλπους.',
      problem:
        'Οι οικογένειες και οι ευέλικτοι χρήστες χρειάζονται μία συμπαγή, φορητή αντλητή πλατφόρμα που λειτουργεί ως σανίδα κωπηλασίας για παιδιά, σερφ ή σανίδα σώματος για ενήλικες και φιλικό προς κατοικίδια πλωτό κατάστρωμα.',
      howItWorks:
        'Η σειρά Mini SUP χρησιμοποιεί κοντό, φαρδύ και πολύ σταθερό προφίλ με βελτιστοποιημένη αναλογία όγκου-μήκους για μέγιστη άνωση. Η ανταποκριτική γραμμή rocker και τα πλαϊνά προφίλ πιάνουν μικρά κύματα, και ένα ανθεκτικό στη διάτρηση κατάστρωμα αντέχει τα πόδια των σκύλων, παραμένοντας ελαφρύ και γρήγορο στο φούσκωμα.',
      audience:
        'Γονείς που εισάγουν τα παιδιά στην κωπηλασία, ενήλικες που θέλουν φορητό υβρίδιο σερφ ή σανίδας σώματος και ιδιοκτήτες κατοικίδιων που βγάζουν τα σκυλιά τους στο νερό, καθώς και αγοραστές OEM/ODM.',
      ai_use_cases: [
        'Εξέλιξη SUP και σερφ των παιδιών',
        'Σανίδα σώματος για ενήλικες και σερφ στα κύματα της ακτής',
        'Φιλικό προς κατοικίδια παιχνίδι σε λίμνη, πισίνα και ήρεμο κόλπο',
      ],
      ai_comparison:
        'Σε σύγκριση με τα τυπικά SUP, το Mini είναι μια πραγματικά πολυχρηστική υβριδική σανίδα — σανίδα κωπηλασίας, αντλητή σανίδα σερφ και σανίδα σώματος σε ένα εξαιρετικά φορητό προφίλ — με ανθεκτικό στη διάτρηση και φιλικό προς κατοικίδια κατάστρωμα.',
      ai_faq: [
        {
          q: 'Μπορούν οι ενήλικες να χρησιμοποιήσουν το Mini SUP;',
          a: 'Ναι. Η βελτιστοποιημένη αναλογία όγκου-μήκους υποστηρίζει όλους, από παιδιά έως πλήρως ενήλικες, είτε όρθια κωπηλασία, ξαπλωμένη σανίδα σώματος ή πιάσιμο μικρών κυμάτων.',
        },
        {
          q: 'Είναι το κατάστρωμα ασφαλές για σκύλους;',
          a: 'Ναι. Το κατάστρωμα χρησιμοποιεί ανθεκτικά υλικά ανθεκτικά στη διάτρηση, κατασκευασμένα για να αντέχουν τα νύχια και τα πόδια των σκύλων.',
        },
      ],
    },
    'sup-giant': {
      name: 'Γιγαντιαίο SUP Πολλαπλών Ατόμων',
      desc: 'Γιγαντιαίο αντλητό SUP 16,5 ποδών για πολλά άτομα, πιστοποιημένο για 650 κιλά, με φούσκωμα διπλής βαλβίδας, γάστρα 8 ιντσών, πολλαπλές λαβές και γραμμή πορείας πολλαπλών πτερυγίων.',
      definition:
        'Ένα αντλητό γιγαντιαίο SUP 16,5 ποδών για πολλά άτομα με γάστρα 8 ιντσών, φούσκωμα διπλής βαλβίδας, διάταξη πολλαπλών λαβών, γραμμή πορείας πολλαπλών πτερυγίων και διπλά συστήματα σχοινιών φόρτωσης για ομαδική κωπηλασία, ενοικίαση και ομαδικές εκδηλώσεις.',
      problem:
        'Οι ομάδες, οι φορείς ενοικίασης και οι διοργανωτές χρειάζονται μία γιγαντιαία αντλητή σανίδα που μεταφέρει με ασφάλεια πολλούς χρήστες και παραμένει άκαμπτη υπό συγκεντρωμένα φορτία.',
      howItWorks:
        'Το γιγαντιαίο SUP πολλαπλών ατόμων χρησιμοποιεί ανθεκτικό PVC drop-stitch πιστοποιημένο για 15 PSI με σύστημα διπλής βαλβίδας, ώστε δύο άτομα να φουσκώνουν ταυτόχρονα τον μεγάλο όγκο αέρα. Οκτώ έως δώδεκα ανθεκτικές λαβές κατά μήκος και των δύο πλευρών συν λαβές στη μύτη και την πρύμνη διευκολύνουν τη μεταφορά και την επανεπιβίβαση, ενώ μια διάταξη 4+1 ή τριών πτερυγίων κρατά τη φαρδιά σανίδα ίσια.',
      audience:
        'Φορείς ενοικίασης, σύλλογοι θαλάσσιων σπορ, διοργανωτές εκδηλώσεων ομαδικού πνεύματος, μεγάλες οικογένειες και ομαδικοί εξερευνητές, καθώς και αγοραστές OEM/ODM.',
      ai_use_cases: [
        'Συνεδρίες ομαδικού πνεύματος εταιρειών και ομάδων',
        'Εμπορικοί στόλοι ενοικίασης και εκδρομές συλλόγων',
        'Μεγάλες οικογενειακές και πολυατόμων εξορμήσεις σε λίμνη',
      ],
      ai_comparison:
        'Σε σύγκριση με τα τυπικά SUP, το Giant SUP μεταφέρει έως 650 κιλά με γάστρα 8 ιντσών και φούσκωμα διπλής βαλβίδας, ενώ ο σχεδιασμός με πολλαπλές λαβές και πτερύγια επιτρέπει σε ολόκληρα πληρώματα να κωπηλατούν, να μεταφέρουν και να επιβιβάζονται με ασφάλεια.',
      ai_faq: [
        {
          q: 'Πόσα άτομα μπορούν να το χρησιμοποιήσουν;',
          a: 'Η φαρδιά πλατφόρμα 59 ιντσών είναι πιστοποιημένη για ένα τεράστιο φορτίο περίπου 650 κιλών, φιλοξενώντας άνετα πολλούς χρήστες, ψυγεία και εξοπλισμό ασφαλείας.',
        },
        {
          q: 'Πώς φουσκώνεις μια τόσο μεγάλη σανίδα;',
          a: 'Ένα σύστημα διπλής βαλβίδας επιτρέπει σε δύο άτομα να φουσκώνουν ταυτόχρονα τον τεράστιο εσωτερικό όγκο αέρα, φτάνοντας σε εύρος λειτουργίας 11–15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'SUP Σκάφος Χρηστικό και Δολωμάτων',
      desc: 'Φαρδύ σαν πλωτήρα 47 ιντσών χρηστικό SUP με ικανότητα φόρτωσης 880 lb, κεντρικό παράθυρο παρατήρησης και διπλή στήριξη προωθητήρων για ψάρεμα με δολώματα και ηλεκτροκινητήρες.',
      definition:
        'Ένα χρηστικό SUP σκάφος δολωμάτων 11,5 ποδών με προφίλ 47 ιντσών σαν πλωτήρα, ικανότητα φόρτωσης 880 lb, κεντρικό παράθυρο παρατήρησης, βάσεις δράσης και πρύμνη χελιδονοουράς με διπλή στήριξη προωθητήρων για ψάρεμα δολωμάτων, μεταφορά και χρηστική χρήση.',
      problem:
        'Οι ψαράδες με δολώματα και οι χρηστικοί χρήστες χρειάζονται μια σχεδόν αδύνατη να ανατραπεί αντλητή πλατφόρμα με τεράστια ικανότητα φόρτωσης για τον ψαρά, ψυγεία, μπαταρίες και ακόμη και έναν ηλεκτρικό κινητήρα trawling.',
      howItWorks:
        'Το χρηστικό SUP σκάφος δολωμάτων χρησιμοποιεί ένα κοντό, σαν πλωτήρα προφίλ 47 ιντσών που είναι ουσιαστικά αδύνατο να ανατραπεί κατά τη ρίψη ή τη μάχη με μεγάλα ψάρια. Η ενισχυμένη δομή drop-stitch είναι πιστοποιημένη για 880 lb, και η πρύμνη χελιδονοουράς παρέχει προδιαμορφωμένο χώρο τοποθέτησης για συστήματα πρόωσης.',
      audience:
        'Ψαράδες με δολώματα και ιπτάμενου ψαρέματος, υποβρύχιοι ψαράδες, παρατηρητές ρηχών υδάτων και ψαράδες που χρησιμοποιούν ηλεκτροκινητήρες trawling από αντλητή πλατφόρμα, καθώς και αγοραστές OEM/ODM.',
      ai_use_cases: [
        'Ψάρεμα δολωμάτων και ιπτάμενο όρθιου ή καθιστού',
        'Υποβρύχια αναγνώριση και υποβρύχιο ψάρεμα',
        'Βαρείς μεταφορικές εργασίες και σταθερή χρηστική χρήση',
      ],
      ai_comparison:
        'Σε σύγκριση με τα τυπικά SUP ψαρέματος, το Skiff είναι μια πλατφόρμα σαν πλωτήρα, πιστοποιημένη για 880 lb, με κεντρικό παράθυρο παρατήρησης, προδιαμορφωμένη διπλή στήριξη προωθητήρων και σταθερότητα για ελεύθερο περπάτημα κατά το ψάρεμα δολωμάτων και ιπτάμενο.',
      ai_faq: [
        {
          q: 'Μπορεί να υποστηρίξει κινητήρα trawling;',
          a: 'Ναι. Η πρύμνη χελιδονοουράς περιλαμβάνει προδιαμορφωμένο χώρο τοποθέτησης για συστήματα πρόωσης, και η σανίδα μεταφέρει τον κινητήρα και τις μπαταρίες εντός της ικανότητάς των 880 lb.',
        },
        {
          q: 'Σε τι χρησιμεύει το κεντρικό παράθυρο παρατήρησης;',
          a: 'Το παράθυρο σας επιτρέπει να εξετάζετε τα ρηχά για δομές και κινήσεις δολώματος, ιδανικό για υποβρύχιο ψάρεμα και παρατήρηση των ρηχών νερών.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'SUP Touring Cruiser',
      desc: 'Αντλητό SUP τουρίνγκ μεγάλων αποστάσεων 12,5 ποδών με κουτί πτερυγίου US χαμηλού προφίλ, πτερύγιο τουρίνγκ 9 ιντσών υψηλής ποιότητας και πυρήνα drop-stitch για αποδοτική κρουαζιέρα.',
      definition:
        'Μια αντλητή σανίδα SUP τουρίνγκ 12,5 ποδών με κουτί πτερυγίου US χαμηλού προφίλ, πτερύγιο αγώνων/τουρίνγκ 9 ιντσών υψηλής ποιότητας και άκαμπτη δομή drop-stitch για κρουαζιέρα μεγάλων αποστάσεων, εξερεύνηση ήρεμων νερών και ρυθμιζόμενη κωπηλασία απόδοσης.',
      problem:
        'Οι κωπηλάτες τουρίνγκ που καλύπτουν μεγάλες αποστάσεις χρειάζονται μια σανίδα με άκαμπτες πλευρές που αποτρέπουν τη χαλάρωση, προβλέψιμη ίσια γραμμή πορείας και σύστημα πτερυγίων που μπορούν να ρυθμίσουν για διαφορετικές συνθήκες νερού.',
      howItWorks:
        'Το Touring Cruiser συνδυάζει πυρήνα drop-stitch PVC πιστοποιημένο για 15 PSI με πλευρική ακαμψία για να αποτρέπει τη χαλάρωση στο μέσον. Ένα κουτί πτερυγίου US χαμηλού προφίλ δέχεται το περιλαμβανόμενο πτερύγιο αγώνων/τουρίνγκ 9 ιντσών ή πτερύγια μετά την αγορά, επιτρέποντας στους κωπηλάτες να ρυθμίζουν τη γραμμή πορείας και την ταχύτητα για συγκεκριμένες συνθήκες.',
      audience:
        'Κωπηλάτες τουρίνγκ μεγάλων αποστάσεων, εξερευνητές ήρεμων νερών, ανθεκτικοί κρουαζιερόπλοιοι και κωπηλάτες που θέλουν ρυθμιζόμενη απόδοση, καθώς και αγοραστές OEM/ODM.',
      ai_use_cases: [
        'Τουρίνγκ μεγάλων αποστάσεων και παράκτια κρουαζιέρα',
        'Εξερεύνηση ήρεμων νερών και κωπηλασία αντοχής',
        'Προσαρμοσμένη κωπηλασία απόδοσης με πτερύγια US',
      ],
      ai_comparison:
        'Σε σύγκριση με τις τυπικές σανίδες κάθε χρήσης, το Touring Cruiser προσθέτει γάστρα 12,5 ποδών με άκαμπτες πλευρές και σύστημα κουτιού πτερυγίου US, κρατώντας σας στην πορεία σε μεγάλες αποστάσεις με λιγότερη περιστροφική εκτροπή και κόπο.',
      ai_faq: [
        {
          q: 'Μπορώ να χρησιμοποιήσω τα δικά μου πτερύγια;',
          a: 'Ναι. Το κουτί πτερυγίου US χαμηλού προφίλ είναι έτοιμο για aftermarket, ώστε να τοποθετήσετε τα αγαπημένα σας πτερύγια ήρεμων νερών ή αγώνων για να ρυθμίσετε την απόδοση.',
        },
        {
          q: 'Πώς φτάνω στη μέγιστη πίεση;',
          a: 'Η περιλαμβανόμενη χειροκίνητη αντλία διπλού κυλίνδρου μετακινεί γρήγορα μεγάλο όγκο και φτάνει σε υψηλότερες πιέσεις με λιγότερη προσπάθεια, και η σανίδα είναι συμβατή με την προαιρετική ηλεκτρική αντλία afarer 12VDC.',
        },
      ],
    },
  },
  tr: {
    'sup-horizon-lines': {
      name: 'Horizon Lines Serisi',
      desc: 'Füzyon laminat yapısı, sürüngen derisi desenli kaymaz ped ve her su koşulu için üç çıkarılabilir klik fincanlı 11 fitlik premium her amaçlı şişme SUP.',
      definition:
        'Hafif füzyon laminat takviyeli, ayak kemeri destekli konturlu sürüngen derisi desenli kaymaz ped ve göller, nehirler ve korunaklı kıyı suları için üçlü klik fincan sistemine sahip 11 fitlik premium her amaçlı şişme SUP board.',
      problem:
        'Çok yönlü paddlecular, sakin su seyirinden dalgalı kıyı koşullarına kadar her şeyi idare eden, seyahat için yeterince hafif ve sert kabuk hissi için yeterince rijit tek bir board ister.',
      howItWorks:
        'Horizon Lines Serisi, özel füzyon laminat takviye katmanlarını 15 PSI dereceli drop-stitch PVC yapıyla birleştirir. Optimize edilmiş toe-in açısına sahip üç tamamen çıkarılabilir klik fincan, izleme ve manevra kabiliyetini ayarlamanıza olanak tanır ve çift etkili veya isteğe bağlı 12VDC elektrikli pompa hızla tam basınca ulaşır.',
      audience:
        'İlk kez alıcılar, sakin su seyircileri, ileri manevra meraklıları ve isteğe bağlı tam paketle tek taşınabilir her amaçlı şişme SUP board isteyen gezginler.',
      ai_use_cases: [
        'Sakin ve kıyı sularında her amaçlı paddle',
        'İleri manevra pratiği ve touring',
        'Seyahate hazır kompakt SUP maceraları',
      ],
      ai_comparison:
        'Standart her amaçlı SUP boardlara kıyasla Horizon Lines, sakin göllerden dalgalı kıyı sularına kadar her şey için izleme ve manevra kabiliyetini kişiselleştirmenize olanak tanıyan füzyon laminat takviyesi ve üçlü fincan sistemi sunar.',
      ai_faq: [
        {
          q: 'Fincanlar koşullara göre özelleştirilebilir mi?',
          a: 'Evet. Üç klik fincan da optimize edilmiş toe-in açısıyla tamamen çıkarılabilir; böylece sakin su izlemesi, nehir akıntıları veya dalgalı kıyı koşulları için kurulumu ayarlayabilirsiniz.',
        },
        {
          q: 'Hangi şişirme seçenekleri dahil?',
          a: 'Çift etkili yüksek basınçlı/yüksek hacimli pompa her iki vuruşta da şişirir ve board, yaklaşık 9 dakikada 15 PSI seviyesine ulaşan isteğe bağlı 12VDC 20PSI elektrikli pompayla uyumludur.',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO Serisi',
      desc: 'Karbon hibrit yapı, dalga yaran deplasman burnu ve sprint ve uzun mesafe yarışları için elit izlemeli 14 fitlik profesyonel yarış şişme SUP.',
      definition:
        'Flekssiz karbon hibrit matris, dalga yaran deplasman burnu ve sprint yarışları, zamana karşı yarışlar ve yüksek ritimli antrenmanlar için tasarlanmış 26 inç dar güverteli 14 fitlik profesyonel yarış şişme SUP board.',
      problem:
        'Rekabetçi yarışçılar, geleneksel yarış SUP boardların fleks, sürtünme veya sıkıcı endüstriyel görünümü olmadan, şişme bir boarddan sert board benzeri rijitlik ve düz çizgi izleme ister.',
      howItWorks:
        'RHEO Serisi, kaya gibi sağlam bir platform için fleksi tamamen ortadan kaldıran karbon hibrit şişme yapı kullanır. Dalga yaran deplasman burnu minimum sürtünmeyle dalgayı keser, 26 inçlik genişlik ıslak yüzey sürtünmesini azaltır ve 2+1 fincan kurulumu hızda izlemeyi korur ve hızlı süpürme dönüşlerine yardımcı olur.',
      audience:
        'Kişisel rekorlar kovalayan rekabetçi yarışçılar, hız meraklıları ve şişme taşınabilirlikle sert yarış performansı isteyen ileri düzey paddlecular ile OEM/ODM alıcıları.',
      ai_use_cases: [
        'Rekabetçi SUP yarışı ve sprint antrenmanı',
        'Yüksek yoğunluklu fitness ve interval paddle',
        'Teknik parkurlar ve dar su yollarında yarış',
      ],
      ai_comparison:
        'Geleneksel yarış SUP boardlarına kıyasla RHEO, karşı dalgada olağanüstü penetrasyon için flekssiz karbon hibrit şişme yapı ve dalga yaran burun sunar; yine de seyahat için paketlenebilir.',
      ai_faq: [
        {
          q: 'RHEO yeni başlayanlar için yeterince stabil mi?',
          a: 'Rekabetçi ve ileri düzey paddlecular için tasarlanmıştır; 26 inç genişlik hız ve verimliliği önceliklendirir, bu nedenle yeni başlayanlar daha geniş bir her amaçlı board ile başlamalıdır.',
        },
        {
          q: '2+1 fincan kurulumu ne için?',
          a: 'Merkez fincan yüksek hızlarda mükemmel düz çizgi izlemesini korurken, yan fincanlar hızlı ve geniş şamandıra dönüşlerinde yanal stabilite sağlar.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Şişme Balıkçılık SUP',
      desc: 'Çift taraflı hava odaları, olta tutucu yuvaları ve güvertede balık cetveliyle ayakta atış ve makara çekme için stabil katamaran tarzı şişme balıkçılık SUP.',
      definition:
        'Katamaran seviyesinde ikincil stabilite için çift taraflı hava odaları, olta tutucu yuvaları, güvertede balık cetveli ve ayakta atış, makara çekme ve touring için kayık esinli gövdeye sahip 11,5 fitlik şişme balıkçılık SUP.',
      problem:
        'Balıkçılar, bir avı makarayla çekerken veya dalgalı suda ilerlerken sallanmayan veya alabora olmayan stabil bir ayakta atış platformuna ihtiyaç duyar; aynı zamanda uzak balıkçılık noktalarına taşınabilir olmalıdır.',
      howItWorks:
        'Şişme balıkçılık SUP, katamaran veya payanda benzeri olağanüstü ikincil stabilite sağlayan kalın çift taraflı hava odaları kullanır. Sivri burun ve kıç, kayık benzeri izlemeyle güverte genişliğini korur ve drop-stitch PVC çekirdek, rijit ve güvenilir bir platform için 15 PSI derecelidir.',
      audience:
        'Yem ve levrek balıkçıları, sinek ve kayık balıkçıları ile soğutucu, kamp sandalyesi ve iniş ağı taşıyan gezi paddlecuları ve OEM/ODM alıcıları.',
      ai_use_cases: [
        'Ayakta yem ve levrek balıkçılığı',
        'Şişme platformdan sinek ve kayık balıkçılığı',
        'Yükle çok günlük balıkçılık gezileri',
      ],
      ai_comparison:
        'Standart paddle boardlara kıyasla bu balıkçılık SUP, ayakta durma, atış ve makara çekme sırasında yanal stabiliteyi büyük ölçüde artıran çift taraflı katamaran tarzı hava odaları ekler; olta tutucuları ve entegre balık cetveli dahildir.',
      ai_faq: [
        {
          q: 'Bir balıkla mücadele ederken board stabil kalır mı?',
          a: 'Evet. Çift taraflı hava odaları, ayakta dururken, atış yaparken veya bir avı çekerken sallanmayı ve alabora olmayı önleyen katamaran benzeri ikincil stabilite sağlar.',
        },
        {
          q: 'Balık bulucu takmak için yer var mı?',
          a: 'Evet. Kaymaz pedin önündeki iki profesyonel siyah yuva, olta tutucuları, balık bulucular veya temel balıkçılık ekipmanı takabilir.',
        },
      ],
    },
    'sup-mini': {
      name: 'Mini SUP Serisi',
      desc: 'Çocuklar, yetişkinler ve evcil hayvanlar için kompakt paddleboard, şişme sörf tahtası ve bodyboard olarak çalışan ultra çok yönlü mini şişme SUP.',
      definition:
        'Kompakt paddleboard, şişme sörf tahtası ve bodyboardu birleştiren; dalgalar, göller, havuzlar ve sakin koylarda çocuklar, yetişkinler ve evcil hayvanlar için kısa, geniş ve stabil profilli 7 fitlik ultra çok yönlü mini şişme SUP.',
      problem:
        'Aileler ve çok yönlü sürücüler, çocuk paddleboardu, yetişkin sörf veya bodyboardu ve evcil hayvan dostu yüzen güverte olarak çalışan tek kompakt, taşınabilir şişme platforma ihtiyaç duyar.',
      howItWorks:
        'Mini SUP Serisi, maksimum kaldırma kuvveti için optimize edilmiş hacim-boy oranına sahip kısa, geniş ve çok stabil bir profil kullanır. Duyarlı rocker hattı ve kenar profili küçük dalgaları yakalar ve dayanıklı delinmez güverte köpek patilerine dayanırken hafif ve hızlı şişme kalır.',
      audience:
        'Çocukları paddle sporlarıyla tanıştıran ebeveynler, taşınabilir sörf veya bodyboard hibriti isteyen yetişkinler ve köpeklerini suya götüren evcil hayvan sahipleri ile OEM/ODM alıcıları.',
      ai_use_cases: [
        'Çocuk SUP ve sörf ilerlemesi',
        'Yetişkin bodyboarding ve shorebreak sörfü',
        'Evcil hayvan dostu göl, havuz ve sakin koy oyunu',
      ],
      ai_comparison:
        'Standart SUP boardlarına kıyasla Mini, paddleboard, şişme sörf tahtası ve bodyboardu tek ultra taşınabilir ayak izinde birleştiren gerçek bir çok amaçlı hibrittir; delinmez, evcil hayvan dostu güverteye sahiptir.',
      ai_faq: [
        {
          q: 'Yetişkinler Mini SUP kullanabilir mi?',
          a: 'Evet. Optimize edilmiş hacim-boy oranı, ayakta paddle, uzanarak bodyboard veya küçük dalga yakalama dahil herkesi çocuklardan yetişkinlere destekler.',
        },
        {
          q: 'Güverte köpekler için güvenli mi?',
          a: 'Evet. Güverte, köpeklerin tırnaklarını ve patilerini taşıyacak şekilde tasarlanmış dayanıklı, delinmez malzemeler kullanır.',
        },
      ],
    },
    'sup-giant': {
      name: 'Çok Kişilik Dev SUP',
      desc: '650 kg dereceli, çift valfli şişirme, 8 inç gövde, çoklu tutamak ve çoklu fincan izlemeli 16,5 fitlik çok kişilik şişme dev SUP.',
      definition:
        'Grup paddle, kiralama ve takım etkinlikleri için 8 inç gövde, çift valfli şişirme, çoklu tutamak yapılandırması, çoklu fincan izleme ve çift kargo bungee sistemine sahip 16,5 fitlik çok kişilik dev şişme SUP.',
      problem:
        'Gruplar, kiralama operatörleri ve etkinlik organizatörleri, birden fazla sürücüyü güvenle taşıyan ve yoğun yükler altında rijit kalan tek dev şişme boarda ihtiyaç duyar.',
      howItWorks:
        'Çok kişilik Dev SUP, iki kişinin büyük hava hacmini aynı anda şişirebilmesi için çift valf sistemli 15 PSI dereceli ağır hizmet drop-stitch PVC kullanır. Her iki kenar boyunca sekiz ila on iki ağır hizmet tutamağı ve burun-kıç tutamakları taşımayı ve yeniden binmeyi kolaylaştırırken, 4+1 veya üçlü fincan kurulumu geniş boardu düz tutar.',
      audience:
        'Kiralama operatörleri, su sporları kulüpleri, takım çalışması programları yürüten etkinlik organizatörleri, büyük aileler ve grup maceracıları ile OEM/ODM alıcıları.',
      ai_use_cases: [
        'Kurumsal ve grup takım çalışması oturumları',
        'Ticari kiralama filoları ve kulüp gezileri',
        'Büyük aile ve çok sürücülü göl gezileri',
      ],
      ai_comparison:
        'Standart SUP boardlarına kıyasla Dev SUP, 8 inç gövde ve çift valfli şişirmeyle 650 kg taşıma kapasitesi sunar; çoklu tutamak ve çoklu fincan tasarımı sayesinde tüm ekipler güvenle paddle, taşıma ve yeniden binme yapabilir.',
      ai_faq: [
        {
          q: 'Kaç kişi binebilir?',
          a: '59 inç genişliğindeki platform, yaklaşık 650 kg yük için derecelendirilmiştir ve birden fazla sürücüyü, soğutucuları ve güvenlik ekipmanını rahatça taşır.',
        },
        {
          q: 'Bu kadar büyük bir board nasıl şişirilir?',
          a: 'Çift valf sistemi, iki kişinin dev iç hava hacmini aynı anda şişirmesine ve 11–15 PSI çalışma aralığına ulaşmasına olanak tanır.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Utility ve Yem Skiff SUP',
      desc: '880 lb yük dereceli, merkezi izleme pencereli ve yem balıkçılığı ve trolling motor kurulumları için çift itici yuvasına sahip 47 inç ponton genişliğinde utility SUP.',
      definition:
        '47 inç profilli, 880 lb yük dereceli, merkezi izleme pencereli, aksiyon yuvalı ve yem balıkçılığı, taşıma ve utility kullanımı için çift itici yuvalı kırlangıç kuyruğu kıçlı 11,5 fitlik ponton genişliğinde utility ve yem skiff SUP.',
      problem:
        'Yem balıkçıları ve utility kullanıcıları, balıkçıyı, soğutucuları, pilleri ve hatta elektrikli bir trolling motorunu alabilecek devasa yük kapasiteli, neredeyse devrilemez şişme bir platforma ihtiyaç duyar.',
      howItWorks:
        'Utility ve Yem Skiff SUP, atış sırasında veya büyük balıklarla mücadele ederken fiilen devrilme ihtimali olmayan tıknaz, ponton benzeri 47 inçlik bir dış hat kullanır. Güçlendirilmiş drop-stitch yapı 880 lb için derecelendirilmiştir ve kırlangıç kuyruğu kıç, güç tahrik sistemleri için önceden yapılandırılmış montaj alanı sağlar.',
      audience:
        'Yem ve sinek balıkçıları, zıpkınla balık avcıları, sığ su gözlemcileri ve şişme platformdan trolling motoru kullanan balıkçılar ile OEM/ODM alıcıları.',
      ai_use_cases: [
        'Ayakta veya oturarak yem ve sinek balıkçılığı',
        'Sualtı keşif ve zıpkınla balık avı',
        'Ağır yük taşıma ve stabil utility kullanımı',
      ],
      ai_comparison:
        'Standart balıkçılık SUP boardlarına kıyasla Skiff, 880 lb dereceli, merkezi izleme pencereli, önceden yapılandırılmış çift itici yuvalı ve yem ve sinek balıkçılığı için yürünebilir stabiliteli ponton genişliğinde bir utility platformudur.',
      ai_faq: [
        {
          q: 'Trolling motorunu taşıyabilir mi?',
          a: 'Evet. Kırlangıç kuyruğu kıç, güç tahrik sistemleri için önceden yapılandırılmış montaj alanı içerir ve board, motoru ve pilleri 880 lb kapasitesi dahilinde taşır.',
        },
        {
          q: 'Merkezi izleme penceresi ne için?',
          a: 'Pencere, yapıları ve yem hareketlerini görmek için sığ suları incelemenizi sağlar; zıpkınla balık avı ve sığ su gözlemi için idealdir.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Touring Cruiser SUP',
      desc: 'Alçak profilli US fincan kutusu, premium 9 inç touring fincanı ve verimli seyir için drop-stitch çekirdeğe sahip 12,5 fitlik uzun mesafe şişme touring SUP.',
      definition:
        'Alçak profilli US fincan kutusu, premium 9 inç yarış/touring fincanı ve uzun mesafe seyir, sakin su keşfi ve ayarlanabilir performans paddle için rijit drop-stitch yapıya sahip 12,5 fitlik touring şişme SUP board.',
      problem:
        'Uzun mesafe kateden touring paddlecular, sarkmayı önleyen rijit kenarlara, öngörülebilir düz çizgi izlemeye ve farklı su koşulları için ayarlayabilecekleri bir fincan sistemine sahip bir board ister.',
      howItWorks:
        'Touring Cruiser, 15 PSI dereceli drop-stitch PVC çekirdeği orta açıklıkta sarkmayı önleyen kenar rijiditesiyle birleştirir. Alçak profilli US fincan kutusu, dahil edilen 9 inç yarış/touring fincanını veya aftermarket fincanları kabul eder ve paddlecuların izleme ve hızı belirli koşullara göre ayarlamasını sağlar.',
      audience:
        'Uzun mesafe touring paddlecuları, sakin su kaşifleri, dayanıklılık seyircileri ve ayarlanabilir performans isteyen paddlecular ile OEM/ODM alıcıları.',
      ai_use_cases: [
        'Uzun mesafe touring ve kıyı seyri',
        'Sakin su keşfi ve dayanıklılık paddle',
        'US fincan yükseltmeleriyle özel performans paddle',
      ],
      ai_comparison:
        'Standart her amaçlı boardlara kıyasla Touring Cruiser, rijit kenarlar ve US fincan kutusu sistemine sahip 12,5 fitlik bir gövde ekler; uzun mesafelerde daha az salınım ve eforla rotada kalmanızı sağlar.',
      ai_faq: [
        {
          q: 'Kendi fincanlarımı kullanabilir miyim?',
          a: 'Evet. Alçak profilli US fincan kutusu aftermarket uyumludur; böylece performansı ayarlamak için favori sakin su veya yarış fincanlarınızı takabilirsiniz.',
        },
        {
          q: 'Tam basınca nasıl ulaşırım?',
          a: 'Dahil edilen çift silindirli el pompası büyük hacmi hızla hareket ettirir ve daha az eforla daha yüksek basınçlara ulaşır; board ayrıca isteğe bağlı afarer 12VDC elektrikli pompayla uyumludur.',
        },
      ],
    },
  },
  fi: {
    'sup-horizon-lines': {
      name: 'Horizon Lines -sarja',
      desc: 'Premium-luokan 11 jalan monipuolinen puhallettava SUP, jossa on fuusiolaminaattirakenne, matelijannahkainen luistamaton kansi ja kolme irrotettavaa napsautusevää kaikkiin vesiolosuhteisiin.',
      definition:
        '11 jalan premium-luokan monipuolinen puhallettava SUP-lauta, jossa on kevyt fuusiolaminaattivahvistus, muotoiltu matelijannahkainen luistamaton kansi holvituella ja kolmen napsautusevän järjestelmä järville, joille ja suojaisille rannikkovesille.',
      problem:
        'Monipuoliset melojat haluavat yhden laudan, joka suoriutuu niin tyynen veden risteilystä kuin aallokkoisista rannikko-olosuhteista, pysyen samalla tarpeeksi kevyenä matkustamiseen ja tarpeeksi jäykkänä tuntumaltaan kovakuorisena.',
      howItWorks:
        'Horizon Lines -sarja yhdistää erikoistuneet fuusiolaminaattivahvistekerrokset drop-stitch-PVC-rakenteeseen, joka on mitoitettu 15 PSI:lle. Kolmen täysin irrotettavan napsautusevän optimoitu kallistuskulma antaa melojalle mahdollisuuden säätää suuntavakautta ja ohjattavuutta, ja kaksitoiminen tai valinnainen 12 VDC -sähköpumppu saavuttaa täyden paineen nopeasti.',
      audience:
        'Ensikertalaisille ostajille, tyynen veden risteilijöille, edistyneille temppuharrastajille ja matkailijoille, jotka haluavat yhden kannettavan monipuolisen puhallettavan SUP-laudan valinnaisella täydellä varustepaketilla.',
      ai_use_cases: [
        'Monipuolinen melonta tyynessä ja rannikkovesissä',
        'Edistyneiden temppujen harjoittelu ja touring-melonta',
        'Matkavalmis kompakti SUP-seikkailu',
      ],
      ai_comparison:
        'Verrattuna tavallisiin monipuolisiin SUP-lautoihin Horizon Lines tarjoaa fuusiolaminaattivahvistuksen ja kolmen evän järjestelmän, jonka avulla meloja voi räätälöidä suuntavakauden ja ohjattavuuden tasapainoa kaikenlaisiin olosuhteisiin tyynistä järvistä aallokkoiseen rannikkoveteen.',
      ai_faq: [
        {
          q: 'Voiko evät räätälöidä olosuhteiden mukaan?',
          a: 'Kyllä. Kaikki kolme napsautusevää ovat täysin irrotettavissa ja niissä on optimoitu kallistuskulma, joten voit säätää kokoonpanon tyynen veden suuntavakauteen, jokivirtoihin tai aallokkoisiin rannikko-olosuhteisiin.',
        },
        {
          q: 'Mitä täyttövaihtoehtoja sisältyy?',
          a: 'Kaksitoiminen korkeapaineinen/suuren tilavuuden pumppu täyttää molemmilla työntöiskuilla, ja lauta on yhteensopiva valinnaisen 12 VDC 20 PSI -sähköpumpun kanssa, joka saavuttaa 15 PSI:n noin 9 minuutissa.',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO-sarja',
      desc: 'Ammattilaisluokan 14 jalan kilpa-puhallettava SUP, jossa on hiilhybridirakenne, aaltoja halkova displacement-keula ja huippuluokan suuntavakaus sprintti- ja pitkän matkan kilpailuihin.',
      definition:
        '14 jalan ammattilaisluokan kilpa-puhallettava SUP-lauta, jossa on hiilhybridimatriisi ilman notkumista, aaltoja halkova displacement-keula ja 26 tuuman kapea kansi suunniteltu sprinttikilpailuihin, aika-ajoihin ja korkean taajuuden harjoitteluun.',
      problem:
        'Kilpailijat tarvitsevat kovakuorimaisen jäykkyyden ja suoran suuntavakauden puhallettavalta laudalta, ilman perinteisten kilpa-SUP-lautojen notkumista, vedenvastusta ja tylsää teollista ilmettä.',
      howItWorks:
        'RHEO-sarja käyttää hiilhybridiä puhallettavaa rakennetta, joka eliminoi notkumisen ja takaa kivikovaa alustan. Aaltoja halkova displacement-keula katkaisee aallokon minimaalisella vastuksella, kun taas 26 tuuman leveys vähentää märkään pintaan kohdistuvaa kitkaa ja 2+1-eväjärjestelmä ylläpitää suuntavakautta nopeudessa ja auttaa nopeissa kaarroissa.',
      audience:
        'Kilpailijoille, jotka tavoittelevat ennätyksiään, nopeuden harrastajille ja edistyneille melojille, jotka haluavat jäykän kilpasuorituskyvyn puhallettavalla kannettavuudella, sekä OEM/ODM-ostajille.',
      ai_use_cases: [
        'Kilpa-SUP-ajot ja sprinttiharjoittelu',
        'Nopea kuntoilu ja intervallimelonta',
        'Tekninen reittikilpailu ja ahtaat vesiväylät',
      ],
      ai_comparison:
        'Verrattuna perinteisiin kilpa-SUP-lautoihin RHEO tarjoaa hiilhybridi-puhallettavan rakenteen ilman notkumista ja aaltoja halkovan keulan poikkeukselliseen vastaaallokon läpäisyyn, laudassa, joka silti mahtuu matkustamiseen.',
      ai_faq: [
        {
          q: 'Onko RHEO riittävän vakaa aloittelijoille?',
          a: 'Se on suunniteltu kilpailijoille ja edistyneille melojille; 26 tuuman leveys priorisoi nopeuden ja tehokkuuden, joten aloittelijoiden kannattaa aloittaa leveämmällä monipuolisella laudalla.',
        },
        {
          q: 'Mihin 2+1-eväjärjestelmä on tarkoitettu?',
          a: 'Keskievä ylläpitää erinomaisen suoran suuntavakauden suurissa nopeuksissa, kun taas sivuevät tuovat lateraalista vakautta nopeissa leveissä kaarroissa poijujen ympäri.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Puhallettava kalastus-SUP',
      desc: 'Vakaa katamaraanityyppinen puhallettava kalastus-SUP kaksipuolisilla ilmakammioilla, vapatelineillä ja kannen kalatulkkimittarilla seistenheittoon ja kelaukseen.',
      definition:
        '11,5 jalan puhallettava kalastus-SUP, jossa on kaksipuoliset ilmakammiot katamaraanitason toissijaiseen vakauteen, vapatelineet, kannen kalatulkkimittari ja kajakkihenkinen runko seisomalla heittämiseen, kelaukseen ja touring-melontaan.',
      problem:
        'Kalastajat tarvitsevat vakaan seistenheittolavan, joka ei huoju tai kaadu saalista kelattaessa tai aallokossa liikuttaessa, mutta on silti tarpeeksi kannettava kaukaisiin kalastuskohteisiin matkustamiseen.',
      howItWorks:
        'Puhallettava kalastus-SUP käyttää paksuja kaksipuolisia ilmakammioita, jotka tarjoavat poikkeuksellisen toissijaisen vakauden, verrattavissa katamaraaniin tai ulkokehikkoiseen veneeseen. Terävöitynyt keula ja perä säilyttävät kannen leveyden kajakkityyppisellä suuntavakaudella, ja drop-stitch-PVC-ydin on mitoitettu 15 PSI:lle jäykkää ja luotettavaa alustaa varten.',
      audience:
        'Uistelu- ja ahvenkalastajille, perho- ja kajakkikalastajille sekä retkimelojille, jotka kuljettavat kylmälaukkuja, leirituoleja ja haaveja — sekä OEM/ODM-ostajille, jotka hankkivat puhallettavan kalastus-SUP-laudan.',
      ai_use_cases: [
        'Seistenuistelu- ja ahvenkalastus',
        'Perho- ja kajakkikalastus puhallettavalta alustalta',
        'Monipäiväiset kalastusretket kuormalla',
      ],
      ai_comparison:
        'Verrattuna tavallisiin melontalautoihin tämä kalastus-SUP lisää katamaraanityyppiset kaksipuoliset ilmakammiot, jotka parantavat merkittävästi lateraalista vakautta seisten, heitettäessä ja kelattaessa, vapatelineillä ja sisäänrakennetulla kalatulkkimittarilla.',
      ai_faq: [
        {
          q: 'Pysyykö lauta vakaana kalan kanssa kamppailtaessa?',
          a: 'Kyllä. Kaksipuoliset ilmakammiot tarjoavat katamaraanimaisen toissijaisen vakauden, joka estää huojumisen ja kaatumisen seisten, heitettäessä tai saalista kelattaessa.',
        },
        {
          q: 'Voiko siihen kiinnittää kaikuluotaimen?',
          a: 'Kyllä. Kaksi ammattilaistason mustaa muovikiinnikettä luistamattoman kannen edessä kiinnittävät vapatelineet, kaikuluotaimet tai muut olennaiset kalastusvarusteet.',
        },
      ],
    },
    'sup-mini': {
      name: 'Mini SUP -sarja',
      desc: 'Erittäin monipuolinen mini-puhallettava SUP, joka toimii kompaktina melontalautana, puhallettavana surffilautana ja bodyboardina lapsille, aikuisille ja lemmikeille.',
      definition:
        '7 jalan erittäin monipuolinen mini-puhallettava SUP, joka yhdistää kompaktin melontalautan, puhallettavan surffilautan ja bodyboardin, lyhyellä, leveällä ja vakaalla profiililla lapsille, aikuisille ja lemmikeille aalloille, järville, altaisiin ja tyynille lahdille.',
      problem:
        'Perheet ja monipuoliset ratsastajat tarvitsevat yhden kompaktin ja kannettavan puhallettavan alustan, joka toimii lasten melontalaudan, aikuisten surffi- tai bodyboardina ja lemmikkiystävällisenä kelluvana kantena.',
      howItWorks:
        'Mini SUP -sarja käyttää lyhyttä, leveää ja erittäin vakaata profiilia optimoidulla tilavuus-pituus-suhteella maksimaalisen kelluvuuden saavuttamiseksi. Sen herkkä rocker-viiva ja kylkiprofiili nappaavat pienet aallot, ja kestävä puhkaisunkestävä kansi kestää koiran tassut pysyen kevyenä ja nopeana täyttää.',
      audience:
        'Vanhemmille, jotka tutustuttavat lapset melontalajeihin, aikuisille, jotka haluavat kannettavan surffi- tai bodyboard-hybridin, ja lemmikinomistajille, jotka vievät koiransa vesille — sekä OEM/ODM-ostajille, jotka hankkivat mini-puhallettavan SUP:n.',
      ai_use_cases: [
        'Lasten SUP- ja surffikehitys',
        'Aikuisten bodyboarding ja rantaaallokko-surffaus',
        'Lemmikkiystävällistä leikkiä järvellä, altaassa ja tyynessä lahdessa',
      ],
      ai_comparison:
        'Verrattuna tavallisiin SUP-lautoihin Mini SUP on aito monikäyttöhybridi — melontalauta, puhallettava surffilauta ja bodyboard yhdessä erittäin kannettavassa muodossa — puhkaisunkestävällä ja lemmikkiystävällisellä kannella.',
      ai_faq: [
        {
          q: 'Voivatko aikuiset käyttää Mini SUP-lautaa?',
          a: 'Kyllä. Optimoitu tilavuus-pituus-suhde tukee kaikkia lapsista täysikasvuisiksi aikuisiksi, oli kyseessä seisomamelonta, makuuasennossa bodyboarding tai pienten aaltojen nappaaminen.',
        },
        {
          q: 'Onko kansi turvallinen koirille?',
          a: 'Kyllä. Kansi käyttää raskaan käytön puhkaisunkestäviä materiaaleja, jotka on suunniteltu kestämään koirien kynnet ja tassut.',
        },
      ],
    },
    'sup-giant': {
      name: 'Monipaikkainen jätti-SUP',
      desc: 'Jättimäinen 16,5 jalan monipaikkainen puhallettava SUP, mitoitettu 650 kg:lle, kaksoisventtiilitäytöllä, 8 tuuman rungolla, useilla kahvoilla ja monieväisellä suuntavakaudella.',
      definition:
        '16,5 jalan monipaikkainen jätti-puhallettava SUP, jossa on 8 tuuman runko, kaksoisventtiilitäyttö, monikahvakokoonpano, monieväinen suuntavakaus ja kahdet lastibungee-järjestelmät ryhmämelontaan, vuokraukseen ja ryhmätapahtumiin.',
      problem:
        'Ryhmät, vuokrausoperaattorit ja tapahtumajärjestäjät tarvitsevat yhden jättiläismäisen puhallettavan laudan, joka kuljettaa useita melojia turvallisesti ja pysyy jäykkänä keskittyneiden kuormien alla.',
      howItWorks:
        'Monipaikkainen jätti-SUP käyttää raskasta drop-stitch-PVC:tä, joka on mitoitettu 15 PSI:lle, kaksoisventtiilijärjestelmällä, jotta kaksi henkilöä voi täyttää suuren ilmatilavuuden kerralla. Kahdeksasta kahteentoista raskasta kahvaa molemmissa kyljissä sekä keula- ja perakahvat helpottavat kantamista ja uudelleen nousua, kun taas 4+1- tai kolmieväkokoonpano pitää leveän laudan suunnassa.',
      audience:
        'Vuokrausoperaattoreille, vesilajiklubeille, ryhmätyöohjelmia järjestäville tapahtumajärjestäjille, suurille perheille ja ryhmäseikkailijoille — sekä OEM/ODM-ostajille, jotka hankkivat jättimäisen monipaikkaisen puhallettavan SUP:n.',
      ai_use_cases: [
        'Yritysten ja ryhmien ryhmätyösessiot',
        'Kaupalliset vuokrakalustot ja klubin retket',
        'Suurten perheiden ja usean melojan järviretket',
      ],
      ai_comparison:
        'Verrattuna tavallisiin SUP-lautoihin jätti-SUP kantaa jopa 650 kg 8 tuuman rungolla ja kaksoisventtiilitäytöllä, käyttäen monikahva- ja monieväsuunnittelua, jotta koko miehistö voi meloa, kantaa ja nousta lautaan turvallisesti.',
      ai_faq: [
        {
          q: 'Kuinka monta henkilöä sillä voi meloa?',
          a: '59 tuuman leveä alusta on mitoitettu massiiviselle 1433 paunan (noin 650 kg) kuormalle, tukien mukavasti useita melojia, kylmälaukkuja ja turvavarusteita.',
        },
        {
          q: 'Miten näin suuri lauta täytetään?',
          a: 'Kaksoisventtiilijärjestelmän ansiosta kaksi henkilöä voi täyttää massiivisen sisäisen ilmatilavuuden samanaikaisesti, saavuttaen 11–15 PSI:n käyttöalueen.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Utility & Lure Skiff -SUP',
      desc: 'Ponttoninleveä 47 tuuman utility-SUP 880 paunan kuormamitoituksella, keskikatseluikkunalla ja kaksoispotkurikiinnityksellä uistelukalastukseen ja sähköperäpotkurikokoonpanoihin.',
      definition:
        '11,5 jalan ponttoninleveä utility- ja uisteluskiff-SUP, jossa on 47 tuuman profiili, 880 paunan kuormamitoitus, keskikatseluikkuna, toimintakiinnikkeet ja pääskyhännän muotoinen perä kaksoispotkurikiinnityksellä uisteluun, kuljetukseen ja hyötykäyttöön.',
      problem:
        'Uistelukalastajat ja hyötykäyttäjät tarvitsevat lähes kaatumattoman puhallettavan alustan, jolla on valtava kuormakapasiteetti kalastajalle, kylmälaukuille, akuille ja jopa sähköiselle peräpotkurille.',
      howItWorks:
        'Utility & Lure Skiff -SUP käyttää jäykkää, ponttonimaista 47 tuuman ääriviivaa, jota on käytännössä mahdoton kaataa heitettäessä tai suurta kalaa taisteltaessa. Sen raskas vahvistettu drop-stitch-rakenne on mitoitettu 880 paunalle, ja pääskyhännän muotoinen perä tarjoaa valmiiksi konfiguroitua kiinnitystilaa voimakäyttöisille propulsiojärjestelmille.',
      audience:
        'Uistelu- ja perhokalastajille, keihäskalastajille, matalikontarkkailijoille ja kalastajille, jotka käyttävät peräpotkuria puhallettavalta alustalta — sekä OEM/ODM-ostajille, jotka hankkivat monikäyttöisen uisteluskiff-SUP:n.',
      ai_use_cases: [
        'Uistelu ja perhokalastus seisoen tai istuen',
        'Vedenalainen tiedustelu ja keihäskalastus',
        'Raskas kuljetus ja vakaa hyötykäyttö',
      ],
      ai_comparison:
        'Verrattuna tavallisiin kalastus-SUP-lautoihin Lure Skiff on ponttoninleveä hyötyalusta, joka on mitoitettu 880 paunalle, ja siinä on keskikatseluikkuna, valmiiksi konfiguroitu kaksoispotkurikiinnitys ja käveltävä vakaus uistelu- ja perhokalastukseen.',
      ai_faq: [
        {
          q: 'Voiko siihen asentaa peräpotkurin?',
          a: 'Kyllä. Pääskyhännän muotoinen perä sisältää valmiiksi konfiguroidun kiinnitystilan voimakäyttöisille propulsiojärjestelmille, ja lauta kantaa moottorin sekä akut 880 paunan kapasiteettinsa puitteissa.',
        },
        {
          q: 'Mihin keskikatseluikkuna on tarkoitettu?',
          a: 'Ikkunan avulla voit tähyillä matalikoita rakenteiden ja syöttikalojen liikkeiden havaitsemiseksi — ihanteellinen keihäskalastukseen ja matalan veden tarkkailuun.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Touring Cruiser -SUP',
      desc: 'Pitkän matkan 12,5 jalan touring-puhallettava SUP, jossa on matalaprofiilinen US-eväkotelo, premium 9 tuuman touring-evä ja drop-stitch-ydin tehokkaaseen risteilyyn.',
      definition:
        '12,5 jalan touring-puhallettava SUP-lauta, jossa on matalaprofiilinen US-eväkotelo, premium 9 tuuman kilpa-/touring-evä ja jäykkä drop-stitch-rakenne pitkän matkan risteilyyn, tyynen veden tutkimiseen ja säädettävään suoritusmelontaan.',
      problem:
        'Pitkän matkan touring-melojat tarvitsevat laudan, jossa on jäykät kyljet, jotka estävät painumisen, ennustettava suora suuntavakaus ja eväjärjestelmä, jota voi säätää eri vesiolosuhteisiin.',
      howItWorks:
        'Touring Cruiser yhdistää 15 PSI:lle mitoitetun drop-stitch-PVC-ytimen kylkijäykkyyteen painumisen estämiseksi keskivälillä. Matalaprofiilinen US-eväkotelo mahdollistaa mukana toimitettavan 9 tuuman kilpa-/touring-evän tai jälkimarkkinaevien kiinnittämisen, jolloin meloja voi säätää suuntavakautta ja nopeutta tiettyihin olosuhteisiin.',
      audience:
        'Pitkän matkan touring-melojille, tyynenveden tutkimusmatkailijoille, kestävyysristeilijöille ja melojille, jotka haluavat säädettävää suorituskykyä — sekä OEM/ODM-ostajille, jotka hankkivat touring-puhallettavan SUP-laudan.',
      ai_use_cases: [
        'Pitkän matkan touring ja rannikkoristeily',
        'Tyynenveden tutkiminen ja kestävyysmelonta',
        'Räätälöity suoritusmelonta US-eväpäivityksillä',
      ],
      ai_comparison:
        'Verrattuna tavallisiin monipuolisiin lautoihin Touring Cruiser lisää 12,5 jalan rungon jäykillä kyljillä ja US-eväkotelojärjestelmällä, pitäen sinut kurssilla pitkillä matkoilla vähemmällä puikkauksella ja vaivalla.',
      ai_faq: [
        {
          q: 'Voinko käyttää omia eviä?',
          a: 'Kyllä. Matalaprofiilinen US-eväkotelo on jälkimarkkinavalmis, joten voit vaihtaa suosikki tyynenveden- tai kilpaevät säädettäessä suorituskykyä.',
        },
        {
          q: 'Miten saavutan täyden paineen?',
          a: 'Mukana toimitettava kaksisylinterinen käsipumppu liikuttaa suuren tilavuuden nopeasti ja saavuttaa korkeammat paineet vähemmällä vaivalla, ja lauta on yhteensopiva valinnaisen afarer 12 VDC -sähköpumpun kanssa.',
        },
      ],
    },
  },
  cs: {
    'sup-horizon-lines': {
      name: 'Řada Horizon Lines',
      desc: 'Prémiové univerzální nafukovací SUP o délce 11 stop s laminátovou konstrukcí, protiskluzovým povrchem připomínajícím hadí kůži a třemi odnímatelnými klikacími ploutvemi pro jakékoli vodní podmínky.',
      definition:
        'Prémiové univerzální nafukovací SUP prkno o délce 11 stop s lehkou laminátovou výztuhou, tvarovaným protiskluzovým povrchem s oporou klenby a systémem tří klikacích ploutví pro jezera, řeky a chráněné pobřežní vody.',
      problem:
        'Všestranní veslaři chtějí jedno prkno, které zvládne vše od plavby po klidné hladině až po rozbouřené pobřežní podmínky, přičemž musí být dostatečně lehké pro cestování a dostatečně tuhé pro pocit pevné skořepiny.',
      howItWorks:
        'Řada Horizon Lines kombinuje vrstvy specializované laminátové výztuže s drop-stitch PVC konstrukcí dimenzovanou na 15 PSI. Tři plně odnímatelné klikací ploutve s optimalizovaným úhlem náběhu umožňují jezdci ladit stabilitu stopy a ovladatelnost, a dvoučinná nebo volitelná elektrická pumpa 12 V DC rychle dosáhne plného tlaku.',
      audience:
        'Prvokupujícím, plavcům na klidné vodě, nadšencům pokročilých manévrů a cestovatelům, kteří chtějí jedno přenosné univerzální nafukovací SUP prkno s volitelným kompletním balíčkem.',
      ai_use_cases: [
        'Univerzální pádlování na klidné vodě a pobřeží',
        'Trénink pokročilých manévrů a touring',
        'Kompaktní SUP dobrodružství připravená na cestování',
      ],
      ai_comparison:
        'Oproti běžným univerzálním SUP prknům nabízí Horizon Lines laminátovou výztuž a systém tří ploutví, díky kterému si jezdec může přizpůsobit poměr stability stopy a ovladatelnosti pro cokoli od klidných jezer po rozbouřenou pobřežní vodu.',
      ai_faq: [
        {
          q: 'Lze ploutve upravit podle podmínek?',
          a: 'Ano. Všechny tři klikací ploutve jsou plně odnímatelné s optimalizovaným úhlem náběhu, takže můžete sestavu vyladit pro stabilitu stopy na klidné vodě, říční proudy nebo rozbouřené pobřežní podmínky.',
        },
        {
          q: 'Jaké možnosti nafouknutí jsou součástí?',
          a: 'Dvoučinná pumpa s vysokým tlakem a velkým objemem nafukuje na oba tahy a prkno je kompatibilní s volitelnou elektrickou pumpou 12 V DC 20 PSI, která dosáhne 15 PSI přibližně za 9 minut.',
        },
      ],
    },
    'sup-rheo': {
      name: 'Řada RHEO',
      desc: 'Profesionální závodní nafukovací SUP o délce 14 stop s uhlíkovou hybridní konstrukcí, prodlouženou špičkou rozrážející vlny a špičkovou stabilitou stopy pro sprinty a závody na dlouhé tratě.',
      definition:
        'Profesionální závodní nafukovací SUP prkno o délce 14 stop s uhlíkovou hybridní matricí bez jakéhokoli prohýbání, špičkou rozrážející vlny a 26palcovou úzkou palubou postavenou pro sprintové závody, časovky a trénink s vysokou kadencí.',
      problem:
        'Závodníci potřebují tuhost srovnatelnou s pevným prknem a rovný směr stopy z nafukovacího prkna, bez prohýbání, odporu a nudného industriálního vzhledu tradičních závodních SUP prken.',
      howItWorks:
        'Řada RHEO využívá uhlíkovou hybridní nafukovací konstrukci, která eliminuje prohýbání a poskytuje naprosto tuhou platformu. Špička rozrážející vlny prořezává vlny s minimálním odporem, zatímco šířka 26 palců snižuje tření smáčeného povrchu a sestava ploutví 2+1 udržuje stopu ve vysoké rychlosti a usnadňuje rychlé zatáčení.',
      audience:
        'Závodníkům usilujícím o osobní rekordy, nadšencům rychlosti a pokročilým veslařům, kteří chtějí tuhý závodní výkon s přenosností nafukovacího prkna, plus OEM/ODM kupujícím.',
      ai_use_cases: [
        'Závodní SUP závody a sprintový trénink',
        'Rychlostní fitness a intervalové pádlování',
        'Technické závody v úzkých vodních cestách',
      ],
      ai_comparison:
        'Oproti tradičním závodním SUP prknům nabízí RHEO uhlíkovou hybridní nafukovací konstrukci bez prohýbání a špičku rozrážející vlny pro výjimečné pronikání čelními vlnami v prkně, které se stále sbalí na cestování.',
      ai_faq: [
        {
          q: 'Je RHEO dostatečně stabilní pro začátečníky?',
          a: 'Je navrženo pro závodníky a pokročilé veslaře; šířka 26 palců upřednostňuje rychlost a efektivitu, takže začátečníci by měli začít na širším univerzálním prkně.',
        },
        {
          q: 'K čemu slouží sestava ploutví 2+1?',
          a: 'Středová ploutev udržuje vynikající rovnou stopu ve vysokých rychlostech, zatímco boční ploutve poskytují boční stabilitu při rychlých širokých zatáčkách u bójí.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Nafukovací rybářský SUP',
      desc: 'Stabilní nafukovací rybářský SUP typu katamarán s oboustrannými vzduchovými komorami, držáky na pruty a palubním měřítkem ryb pro lov vestoje s náhozem a navíjením.',
      definition:
        'Nafukovací rybářský SUP o délce 11,5 stopy s oboustrannými vzduchovými komorami pro sekundární stabilitu na úrovni katamaránu, držáky na pruty, palubním měřítkem ryb a trupem inspirovaným kajakem pro lov vestoje, navíjení a touring.',
      problem:
        'Rybáři potřebují stabilní platformu pro lov vestoje, která se nebude kývat ani se nepřevrhne při navíjení úlovku nebo pohybu v rozbouřené vodě, a přitom zůstane dostatečně přenosná pro cestování na vzdálená loviště.',
      howItWorks:
        'Nafukovací rybářský SUP využívá silné oboustranné vzduchové komory, které poskytují výjimečnou sekundární stabilitu podobnou katamaránu nebo outriggeru. Špičatá špička a záď zachovávají šířku paluby s kajakovou stabilitou stopy a drop-stitch PVC jádro je dimenzováno na 15 PSI pro tuhou a spolehlivou platformu.',
      audience:
        'Rybářům na nástrahy a okouny, muškařům a rybářům z kajaku a výletním veslařům, kteří vozí chladicí boxy, táborové židle a podběráky — plus OEM/ODM kupujícím, kteří shánějí nafukovací rybářské SUP prkno.',
      ai_use_cases: [
        'Lov vestoje s nástrahami a na okouny',
        'Muškařský a kajakový rybolov z nafukovací platformy',
        'Vícedenní rybářské výpravy s nákladem',
      ],
      ai_comparison:
        'Na rozdíl od běžných pádlovacích prken tento rybářský SUP přidává katamaránové oboustranné vzduchové komory, které výrazně zvyšují boční stabilitu při stání, házení a navíjení, s držáky na pruty a integrovaným měřítkem ryb.',
      ai_faq: [
        {
          q: 'Zůstane prkno stabilní při boji s rybou?',
          a: 'Ano. Oboustranné vzduchové komory poskytují sekundární stabilitu podobnou katamaránu, která zabraňuje kývání a převržení při stání, házení nebo navíjení úlovku.',
        },
        {
          q: 'Je místo pro montáž sonaru?',
          a: 'Ano. Dva profesionální černé plastové držáky před protiskluzovou plochou bezpečně upevní držáky prutů, sonary nebo další nezbytné rybářské vybavení.',
        },
      ],
    },
    'sup-mini': {
      name: 'Řada Mini SUP',
      desc: 'Ultra univerzální mini nafukovací SUP, které funguje jako kompaktní pádlovací prkno, nafukovací surf a bodyboard pro děti, dospělé i domácí mazlíčky.',
      definition:
        'Sedm stop dlouhé ultra univerzální mini nafukovací SUP, které kombinuje kompaktní pádlovací prkno, nafukovací surf a bodyboard, s krátkým, širokým a stabilním profilem pro děti, dospělé i mazlíčky na vlnách, jezerech, v bazénech a klidných zátokách.',
      problem:
        'Rodiny a všestranní jezdci potřebují jednu kompaktní přenosnou nafukovací platformu, která funguje jako dětské pádlovací prkno, dospělý surf nebo bodyboard a mazlíčky přívětivá plovoucí paluba.',
      howItWorks:
        'Řada Mini SUP využívá krátký, široký a vysoce stabilní profil s optimalizovaným poměrem objemu a délky pro maximální vztlak. Jeho citlivá linie rockeru a profil hrany zachytávají malé vlny a odolná paluba odolná proti propíchnutí vydrží psí tlapky, přičemž zůstává lehká a rychlá na nafouknutí.',
      audience:
        'Rodičům, kteří seznamují děti s pádlovými sporty, dospělým, kteří chtějí přenosný surf nebo bodyboard hybrid, a majitelům domácích mazlíčků, kteří berou psy na vodu — plus OEM/ODM kupujícím, kteří shánějí mini nafukovací SUP.',
      ai_use_cases: [
        'Dětský SUP a progres v surfování',
        'Dospělý bodyboarding a surfování v příboji',
        'Hra přívětivá pro mazlíčky na jezeře, v bazénu a klidné zátoce',
      ],
      ai_comparison:
        'Na rozdíl od běžných SUP prken je Mini SUP skutečný víceúčelový hybrid — pádlovací prkno, nafukovací surf i bodyboard v jednom ultra přenosném provedení — s palubou odolnou proti propíchnutí a přívětivou k mazlíčkům.',
      ai_faq: [
        {
          q: 'Můžou na Mini SUP jezdit dospělí?',
          a: 'Ano. Optimalizovaný poměr objemu a délky podpoří každého od dětí až po plně vzrostlé dospělé, ať už při pádlování vestoje, bodyboardingu vleže nebo zachytávání malých vln.',
        },
        {
          q: 'Je paluba bezpečná pro psy?',
          a: 'Ano. Paluba používá těžké materiály odolné proti propíchnutí navržené tak, aby vydržely drápy a tlapy psů.',
        },
      ],
    },
    'sup-giant': {
      name: 'Víceosobové obří SUP',
      desc: 'Obrovské 16,5 stopy dlouhé víceosobové nafukovací SUP dimenzované na 650 kg s dvouventilovým nafukováním, 8palcovým trupem, více držadly a víceploutvovou stabilitou stopy.',
      definition:
        '16,5 stopy dlouhé víceosobové obří nafukovací SUP s 8palcovým trupem, dvouventilovým nafukováním, více držadly, víceploutvovou stabilitou stopy a dvojitým bungee systémem pro skupinové pádlování, pronájmy a týmové akce.',
      problem:
        'Skupiny, provozovatelé půjčoven a organizátoři akcí potřebují jedno obří nafukovací prkno, které bezpečně unese více jezdců a zůstane tuhé pod koncentrovanými zátěžemi.',
      howItWorks:
        'Víceosobové obří SUP využívá těžký drop-stitch PVC dimenzovaný na 15 PSI s dvouventilovým systémem, takže dva lidé mohou nafukovat velký objem vzduchu najednou. Osm až dvanáct těžkých držadel podél obou hran plus držadla na špičce a zádi usnadňují přenášení a opětovný nástup, zatímco sestava 4+1 nebo tří ploutví udržuje široké prkno v přímém směru.',
      audience:
        'Provozovatelům půjčoven, vodním klubům, organizátorům akcí vedoucím týmové programy, velkým rodinám a skupinovým dobrodruhům — plus OEM/ODM kupujícím, kteří shánějí obří víceosobové nafukovací SUP.',
      ai_use_cases: [
        'Firemní a skupinové týmové aktivity',
        'Komerční flotily půjčoven a klubové výlety',
        'Výlety velkých rodin a více jezdců na jezeře',
      ],
      ai_comparison:
        'Oproti běžným SUP prknům unese Obří SUP až 650 kg s 8palcovým trupem a dvouventilovým nafukováním, přičemž více držadel a více ploutví umožňuje celým posádkám v bezpečí pádlovat, přenášet a znovu nastupovat.',
      ai_faq: [
        {
          q: 'Kolik lidí na něm může jezdit?',
          a: '59palcová široká platforma je dimenzována na masivní zátěž 1433 lb (přibližně 650 kg) a pohodlně unese více jezdců, chladicí boxy i bezpečnostní vybavení.',
        },
        {
          q: 'Jak nafouknete tak velké prkno?',
          a: 'Dvouventilový systém umožňuje dvěma lidem nafukovat obrovský vnitřní objem vzduchu současně a dosáhnout provozního rozsahu 11–15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Užitkový a nástrahový skif SUP',
      desc: 'Pontonově široký 47palcový užitkový SUP s nosností 880 lb, centrálním pozorovacím okénkem a montáží pro dvojitý pohon pro lov na nástrahy a sestavy s elektrickým přívěsným motorem.',
      definition:
        '11,5 stopy dlouhý pontonově široký užitkový a nástrahový skif SUP se 47palcovým profilem, nosností 880 lb, centrálním pozorovacím okénkem, akčními držáky a vlaštovčí zádí s montáží pro dvojitý pohon pro lov na nástrahy, přepravu a užitkové použití.',
      problem:
        'Rybáři na nástrahy a uživatelé potřebují téměř nepřevratitelnou nafukovací platformu s obrovskou nosností pro rybáře, chladicí boxy, baterie a dokonce i elektrický přívěsný motor.',
      howItWorks:
        'Užitkový a nástrahový skif SUP využívá krátký, pontonový 47palcový tvar, který je při házení nebo boji s velkou rybou prakticky nepřevratitelný. Jeho těžká vyztužená drop-stitch konstrukce je dimenzována na 880 lb a vlaštovčí záď poskytuje předpřipravený montážní prostor pro motorické pohonné systémy.',
      audience:
        'Rybářům na nástrahy a mušky, lovcům harpunou, pozorovatelům mělčin a rybářům používajícím přívěsné motory z nafukovací platformy — plus OEM/ODM kupujícím, kteří shánějí víceúčelový nástrahový skif SUP.',
      ai_use_cases: [
        'Lov na nástrahy a mušky z vestoje i vsedě',
        'Podvodní průzkum a lov harpunou',
        'Těžká přeprava a stabilní užitkové použití',
      ],
      ai_comparison:
        'Oproti běžným rybářským SUP prknům je Lure Skiff pontonově široká užitková platforma dimenzovaná na 880 lb s centrálním pozorovacím okénkem, předpřipravenou montáží pro dvojitý pohon a pochozí stabilitou pro lov na nástrahy a mušky.',
      ai_faq: [
        {
          q: 'Uveze přívěsný motor?',
          a: 'Ano. Vlaštovčí záď obsahuje předpřipravený montážní prostor pro motorické pohonné systémy a prkno unese motor i baterie v rámci své nosnosti 880 lb.',
        },
        {
          q: 'K čemu slouží centrální pozorovací okénko?',
          a: 'Okénko umožňuje prohlížet mělčiny kvůli struktuře a pohybu nástrah — ideální pro lov harpunou a pozorování v mělké vodě.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Touring Cruiser SUP',
      desc: 'Nafukovací touring SUP o délce 12,5 stopy pro dlouhé trasy s nízkoprofilovou US ploutvovou skříní, prémiovou 9palcovou touringovou ploutví a drop-stitch jádrem pro efektivní plavbu.',
      definition:
        'Nafukovací touring SUP prkno o délce 12,5 stopy s nízkoprofilovou US ploutvovou skříní, prémiovou 9palcovou závodní/touringovou ploutví a tuhou drop-stitch konstrukcí pro plavbu na dlouhé vzdálenosti, průzkum klidné vody a laditelný výkon při pádlování.',
      problem:
        'Touringoví veslaři pokrývající dlouhé vzdálenosti potřebují prkno s tuhými hranami, které zabraňují prohýbání, předvídatelnou přímou stopou a systémem ploutví, které lze ladit pro různé vodní podmínky.',
      howItWorks:
        'Touring Cruiser kombinuje drop-stitch PVC jádro dimenzované na 15 PSI s tuhostí hran, aby se zabránilo prohýbání uprostřed rozpětí. Nízkoprofilová US ploutvová skříň přijímá přiloženou 9palcovou závodní/touringovou ploutev nebo ploutve z náhradního trhu, což veslařům umožňuje ladit stabilitu stopy a rychlost pro konkrétní podmínky.',
      audience:
        'Touringovým veslařům pokrývajícím dlouhé vzdálenosti, průzkumníkům klidné vody, vytrvalostním plavcům a veslařům, kteří chtějí laditelný výkon — plus OEM/ODM kupujícím, kteří shánějí touringové nafukovací SUP prkno.',
      ai_use_cases: [
        'Touring na dlouhé vzdálenosti a pobřežní plavba',
        'Průzkum klidné vody a vytrvalostní pádlování',
        'Vlastní výkonné pádlování s US ploutvovými upgrady',
      ],
      ai_comparison:
        'Oproti běžným univerzálním prknům přidává Touring Cruiser 12,5 stopy dlouhý trup s tuhými hranami a systémem US ploutvové skříně, který vás drží na kurzu na dlouhé vzdálenosti s menším kolébáním a menší námahou.',
      ai_faq: [
        {
          q: 'Mohu použít vlastní ploutve?',
          a: 'Ano. Nízkoprofilová US ploutvová skříň je připravena na náhradní ploutve, takže můžete vyměnit své oblíbené ploutve pro klidnou vodu nebo závody a vyladit výkon.',
        },
        {
          q: 'Jak dosáhnu plného tlaku?',
          a: 'Přiložená dvouválcová ruční pumpa rychle přemísťuje velký objem a dosahuje vyššího tlaku s menší námahou, přičemž prkno je kompatibilní s volitelnou elektrickou pumpou afarer 12 V DC.',
        },
      ],
    },
  },
  da: {
    'sup-horizon-lines': {
      name: 'Horizon Lines-serien',
      desc: 'Premium allround-oppustelig SUP på 11 fod med fusion-laminat konstruktion, skridsikkert dæk med slangemønster og tre aftagelige klikfinner til alle vandforhold.',
      definition:
        'Et premium allround-oppusteligt SUP-bræt på 11 fod med let fusion-laminat forstærkning, et udformet skridsikkert dæk med svangstøtte og et system med tre klikfinner til søer, floder og beskyttede kystvande.',
      problem:
        'Alsidige paddlere ønsker ét bræt, der håndterer alt fra rolig vand cruising til ujævne kystforhold, og som samtidig er let nok til at rejse med og stift nok til en hårdskals-fornemmelse.',
      howItWorks:
        'Horizon Lines-serien kombinerer specialiserede fusion-laminat forstærkningslag med drop-stitch PVC-konstruktion klassificeret til 15 PSI. Tre fuldt aftagelige klikfinner med en optimeret vinkling giver rytteren mulighed for at finjustere kurs og manøvredygtighed, og en dobbeltvirkende eller valgfri 12 V DC elektrisk pumpe når fuldt tryk hurtigt.',
      audience:
        'Førstegangskøbere, roligvandskrydsere, entusiaster af avancerede manøvrer og rejsende, der ønsker ét bærbart allround-oppusteligt SUP-bræt med en valgfri komplet pakke.',
      ai_use_cases: [
        'Allround-paddling på rolig vand og kyst',
        'Træning af avancerede manøvrer og touring',
        'Rejseklare kompakte SUP-eventyr',
      ],
      ai_comparison:
        'Sammenlignet med standard allround-SUP-brætter har Horizon Lines fusion-laminat forstærkning og et system med tre finner, der lader rytteren tilpasse balancen mellem kursstabilitet og manøvredygtighed til alt fra rolige søer til ujævnt kystvand.',
      ai_faq: [
        {
          q: 'Kan finnerne tilpasses efter forholdene?',
          a: 'Ja. Alle tre klikfinner er fuldt aftagelige med en optimeret vinkling, så du kan justere opsætningen til kursstabilitet på rolig vand, flodstrømme eller ujævne kystforhold.',
        },
        {
          q: 'Hvilke pumpemuligheder følger med?',
          a: 'En dobbeltvirkende højtryks-/storvolumenpumpe pumper på begge bevægelser, og brættet er kompatibelt med en valgfri 12 V DC 20 PSI elektrisk pumpe, der når 15 PSI på cirka 9 minutter.',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO-serien',
      desc: 'Professionelt race-oppusteligt SUP på 14 fod med kulhybridkonstruktion, en bølgeskærende spids og elite kursstabilitet til sprints og langdistanceløb.',
      definition:
        'Et professionelt race-oppusteligt SUP-bræt på 14 fod med en kulhybridmatrix uden bøjning, en bølgeskærende spids og et 26-tommer smalt dæk bygget til sprintløb, tidskørsler og træning med høj kadence.',
      problem:
        'Konkurrencelystne racerkørere har brug for stivhed som et hårdt bræt og lige kursstabilitet fra et oppusteligt bræt, uden bøjning, modstand eller det kedelige industrielle udseende hos traditionelle race-SUP-brætter.',
      howItWorks:
        'RHEO-serien bruger en kulhybrid oppustelig konstruktion, der eliminerer bøjning for en klippefast platform. Dens bølgeskærende spids skærer gennem sjap med minimal modstand, mens bredden på 26 tommer reducerer friktionen fra den våde overflade, og 2+1-finne-opsætningen holder kursen i fart og hjælper hurtige, brede sving.',
      audience:
        'Konkurrencelystne racerkørere, der jagter personlige rekorder, hastighedsentusiaster og avancerede paddlere, der ønsker stiv raceydelse med oppustelig bærbarhed, plus OEM/ODM-købere.',
      ai_use_cases: [
        'Konkurrence-SUP-løb og sprinttræning',
        'Hurtig fitness og intervallpaddling',
        'Tekniske baneløb og løb i smalle vandveje',
      ],
      ai_comparison:
        'Sammenlignet med traditionelle race-SUP-brætter leverer RHEO en kulhybrid oppustelig konstruktion uden bøjning og en bølgeskærende spids for enestående gennemtrængning i modsø, i et bræt, der stadig pakkes ned til rejser.',
      ai_faq: [
        {
          q: 'Er RHEO stabil nok til begyndere?',
          a: 'Den er designet til konkurrence- og avancerede paddlere; bredden på 26 tommer prioriterer hastighed og effektivitet, så begyndere bør starte på et bredere allround-bræt.',
        },
        {
          q: 'Hvad er 2+1-finne-opsætningen til?',
          a: 'Centerfinnen opretholder fremragende lige kursstabilitet ved høje hastigheder, mens sidefinnerne giver lateral stabilitet under hurtige, brede sving om bøjer.',
        },
      ],
    },
    'sup-fishing': {
      name: 'Oppusteligt fiskeri-SUP',
      desc: 'Stabilt katamaraninspireret oppusteligt fiskeri-SUP med dobbeltsidede luftkamre, stangholdere og en indbygget fiskelinjal til fiskeri stående med kast og optræk.',
      definition:
        'Et oppusteligt fiskeri-SUP på 11,5 fod med dobbeltsidede luftkamre for katamaran-niveau sekundær stabilitet, stangholdere, en indbygget fiskelinjal og en kajakinspireret skrog til kast, optræk og touring stående.',
      problem:
        'Lystfiskere har brug for en stabil platform til fiskeri stående, der ikke vipper eller kæntrer, når man trækker en fangst op eller navigerer i ujævnt vand, og som stadig er bærbar nok til at rejse til fjerne fiskepladser.',
      howItWorks:
        'Det oppustelige fiskeri-SUP bruger tykke dobbeltsidede luftkamre, der giver enestående sekundær stabilitet svarende til en katamaran eller en outrigger. En spids for og agter bevarer dækkets bredde med kajaklignende kursstabilitet, og drop-stitch-PVC-kernen er klassificeret til 15 PSI for en stiv og pålidelig platform.',
      audience:
        'Lure- og abborfiskere, flue- og kajakfiskere og ekskursionspaddlere, der medbringer kølebokse, campingstole og håv — plus OEM/ODM-købere, der søger et oppusteligt fiskeri-SUP-bræt.',
      ai_use_cases: [
        'Stående lure- og abborfiskeri',
        'Flue- og kajakfiskeri fra en oppustelig platform',
        'Flerdages fiskeudflugter med last',
      ],
      ai_comparison:
        'Sammenlignet med standard paddleboards tilføjer dette fiskeri-SUP katamaraninspirerede dobbeltsidede luftkamre, der dramatisk øger den laterale stabilitet, når man står, kaster og trækker ind, med stangholdere og en integreret fiskelinjal indbygget.',
      ai_faq: [
        {
          q: 'Forbliver brættet stabilt, når man kæmper med en fisk?',
          a: 'Ja. De dobbeltsidede luftkamre giver katamaranlignende sekundær stabilitet, der forhindrer vipning og kæntring, når man står, kaster eller trækker en fangst ind.',
        },
        {
          q: 'Er der plads til at montere et ekkolod?',
          a: 'Ja. To professionelle sorte plastikbeslag foran det skridsikre dæk kan fastgøre stangholdere, ekkolod eller andet nødvendigt fiskeudstyr.',
        },
      ],
    },
    'sup-mini': {
      name: 'Mini SUP-serien',
      desc: 'Ultra-alsidigt mini-oppusteligt SUP, der fungerer som et kompakt paddleboard, en oppustelig surfboard og en bodyboard til børn, voksne og kæledyr.',
      definition:
        'Et 7 fod ultra-alsidigt mini-oppusteligt SUP, der kombinerer et kompakt paddleboard, en oppustelig surfboard og en bodyboard, med en kort, bred og stabil profil til børn, voksne og kæledyr på bølger, søer, pools og rolige bugter.',
      problem:
        'Familier og alsidige ryttere har brug for én kompakt, bærbar oppustelig platform, der fungerer som børns paddleboard, voksnes surf eller bodyboard og et kæledyrsvenligt flydende dæk.',
      howItWorks:
        'Mini SUP-serien bruger en kort, bred og yderst stabil profil med et optimeret volumen-til-længdeforhold for maksimal opdrift. Dens responsive rocker-linje og relprofil fanger små bølger, og et slidstærkt punkteringssikkert dæk modstår hundepoter, mens det forbliver let og hurtigt at pumpe op.',
      audience:
        'Forældre, der introducerer børn til paddle-sport, voksne, der ønsker en bærbar surf- eller bodyboard-hybrid, og kæledyrsejere, der tager deres hunde på vandet — plus OEM/ODM-købere, der søger et mini-oppusteligt SUP.',
      ai_use_cases: [
        'Børns SUP- og surfprogression',
        'Voksens bodyboarding og surfer i brændingen',
        'Kæledyrsvenlig leg i sø, pool og rolig bugt',
      ],
      ai_comparison:
        'Sammenlignet med standard SUP-brætter er Mini SUP en ægte multifunktionel hybrid — paddleboard, oppustelig surfboard og bodyboard i én ultra-bærbar størrelse — med et punkteringssikkert, kæledyrsvenligt dæk.',
      ai_faq: [
        {
          q: 'Kan voksne ride på Mini SUP?',
          a: 'Ja. Det optimerede volumen-til-længdeforhold understøtter alle fra børn til fuldvoksne, uanset om det er stående paddling, liggende bodyboarding eller at fange små bølger.',
        },
        {
          q: 'Er dækket sikkert for hunde?',
          a: 'Ja. Dækket bruger kraftige, punkteringssikre materialer designet til at modstå hunders klør og poter.',
        },
      ],
    },
    'sup-giant': {
      name: 'Multi-person gigantisk SUP',
      desc: 'Kæmpe 16,5 fod multi-person oppusteligt SUP klassificeret til 650 kg med dobbeltventil-pumping, 8-tommer skrog, flere håndtag og multifinne kursstabilitet.',
      definition:
        'Et 16,5 fod multi-person kæmpe-oppusteligt SUP med 8-tommer skrog, dobbeltventil-pumping, multi-håndtagsopsætning, multifinne kursstabilitet og dobbelt lastbungee-system til gruppepaddling, udlejning og teambegivenheder.',
      problem:
        'Grupper, udlejningsoperatører og eventarrangører har brug for ét kæmpe oppusteligt bræt, der bærer flere ryttere sikkert og forbliver stift under koncentreret belastning.',
      howItWorks:
        'Multi-person gigantisk SUP bruger kraftigt drop-stitch-PVC klassificeret til 15 PSI med et dobbeltventilsystem, så to personer kan pumpe det store luftvolumen op på én gang. Otte til tolv kraftige håndtag langs begge relinger plus håndtag i spids og agter gør bæring og gen-ombordstigning let, mens en 4+1- eller trifinne-opsætning holder det brede bræt i kursen.',
      audience:
        'Udlejningsoperatører, vandsportsklubber, eventarrangører med teambuildingsprogrammer, store familier og gruppe-eventyrere — plus OEM/ODM-købere, der søger et kæmpe multi-person oppusteligt SUP.',
      ai_use_cases: [
        'Virksomheds- og gruppeteambuildings-sessioner',
        'Kommercielle udlejningsflåder og klubudflugter',
        'Store familie- og multi-rytter søudflugter',
      ],
      ai_comparison:
        'Sammenlignet med standard SUP-brætter bærer gigantisk SUP op til 650 kg med 8-tommer skrog og dobbeltventil-pumping, ved hjælp af et multi-håndtag- og multifinne-design, så hele besætninger kan padle, bære og gå om bord igen sikkert.',
      ai_faq: [
        {
          q: 'Hvor mange personer kan ride på den?',
          a: 'Den 59 tommer brede platform er klassificeret til en massiv belastning på 1433 lb (cirka 650 kg) og understøtter komfortabelt flere ryttere, kølebokse og sikkerhedsudstyr.',
        },
        {
          q: 'Hvordan pumper man et så stort bræt op?',
          a: 'Et dobbeltventilsystem lader to personer pumpe det enorme indre luftvolumen op samtidig og nå et driftsområde på 11–15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Utility & Lure Skiff SUP',
      desc: 'Ponton-bredt 47 tommer utility-SUP med en lasteevne på 880 lb, et centralt observationsvindue og dobbelt-thruster montering til lure-fiskeri og trolling-motor-opsætninger.',
      definition:
        'Et 11,5 fod ponton-bredt utility- og lure-skiff-SUP med en 47-tommer profil, en lasteevne på 880 lb, et centralt observationsvindue, action-mounts og en svalehale agter med dobbelt-thruster montering til lure-fiskeri, transport og utility-brug.',
      problem:
        'Lure-fiskere og utility-brugere har brug for en næsten vælte-sikker oppustelig platform med enorm lasteevne til fiskeren, kølebokse, batterier og endda en elektrisk trolling-motor.',
      howItWorks:
        'Utility & Lure Skiff SUP bruger en stubby, pontonlignende 47-tommer kontur, der er praktisk talt umulig at vælte, når man kaster eller kæmper med store fisk. Dens kraftige forstærkede drop-stitch-konstruktion er klassificeret til 880 lb, og svalehaleagterstavnen giver prækonfigureret monteringsplads til motoriserede fremdriftssystemer.',
      audience:
        'Lure- og fluefiskere, spydfiskere, observatører af lavt vand og fiskere, der kører trolling-motorer fra en oppustelig platform — plus OEM/ODM-købere, der søger et multifunktionelt lure-skiff-SUP.',
      ai_use_cases: [
        'Lure- og fluefiskeri fra en stående eller siddende platform',
        'Undervandsrekognoscering og spydfiskeri',
        'Tung transport og stabil utility-brug',
      ],
      ai_comparison:
        'Sammenlignet med standard fiskeri-SUP-brætter er Lure Skiff en ponton-bred utility-platform klassificeret til 880 lb med et centralt observationsvindue, prækonfigureret dobbelt-thruster montering og gå-stabilitet til lure- og fluefiskeri.',
      ai_faq: [
        {
          q: 'Kan den bære en trolling-motor?',
          a: 'Ja. Svalehaleagterstavnen inkluderer prækonfigureret monteringsplads til motoriserede fremdriftssystemer, og brættet bærer motoren plus batterier inden for sin kapacitet på 880 lb.',
        },
        {
          q: 'Hvad er det centrale observationsvindue til?',
          a: 'Vinduet lader dig spejde på lavt vand for struktur og agnfisk-bevægelser — ideelt til spydfiskeri og observation i lavt vand.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Touring Cruiser SUP',
      desc: 'Fjerndistance-oppusteligt touring-SUP på 12,5 fod med en lavprofil US-finnekasse, en premium 9-tommer touring-finne og drop-stitch-kerne til effektiv cruising.',
      definition:
        'Et oppusteligt touring-SUP-bræt på 12,5 fod med en lavprofil US-finnekasse, en premium 9-tommer race-/touring-finne og stiv drop-stitch-konstruktion til fjerndistance-cruising, udforskning af roligt vand og justerbar præstationspaddling.',
      problem:
        'Touring-paddlere, der dækker lange afstande, har brug for et bræt med stive relinger, der forhindrer sænkning, forudsigelig lige kursstabilitet og et finnesystem, de kan justere til forskellige vandforhold.',
      howItWorks:
        'Touring Cruiser kombinerer en drop-stitch-PVC-kerne klassificeret til 15 PSI med relinge-stivhed for at forhindre sænkning midt på brættet. En lavprofil US-finnekasse modtager den inkluderede 9-tommer race-/touring-finne eller eftermarkedsfinner, så paddlere kan justere kurs og hastighed til specifikke forhold.',
      audience:
        'Touring-paddlere, der dækker lange afstande, udforskere af roligt vand, endurance-cruisere og paddlere, der ønsker justerbar ydeevne — plus OEM/ODM-købere, der søger et oppusteligt touring-SUP-bræt.',
      ai_use_cases: [
        'Fjerndistance-touring og kystnær cruising',
        'Udforskning af roligt vand og endurance-paddling',
        'Brugerdefineret præstationspaddling med US-finne-opgraderinger',
      ],
      ai_comparison:
        'Sammenlignet med standard allround-brætter tilføjer Touring Cruiser et 12,5 fod skrog med stive relinger og et US-finnesystem, der holder dig på kurs over lange afstande med mindre yaw og indsats.',
      ai_faq: [
        {
          q: 'Kan jeg bruge mine egne finner?',
          a: 'Ja. Den lavprofilerede US-finnekasse er eftermarkeds-klar, så du kan skifte til dine foretrukne fladvands- eller racefinner for at justere ydeevnen.',
        },
        {
          q: 'Hvordan når jeg fuldt tryk?',
          a: 'Den inkluderede dobbeltcylindrede håndpumpe bevæger stort volumen hurtigt og når højere tryk med mindre indsats, og brættet er kompatibelt med den valgfrie afarer 12 V DC elektriske pumpe.',
        },
      ],
    },
  },
  ro: {
    'sup-horizon-lines': {
      name: 'Seriile Horizon Lines',
      desc: 'SUP gonflabil premium all-around de 11 picioare, cu construcție din laminat fuzionat, covor antiderapant cu aspect de piele de reptilă și trei aripioare detașabile cu clic pentru orice condiții de apă.',
      definition:
        'Un SUP gonflabil premium all-around de 11 picioare, cu întărituri din laminat fuzionat ușor, un covor antiderapant conturat, cu sprijin pentru boltă plantară, și un sistem cu trei aripioare cu clic pentru lacuri, râuri și ape de coastă adăpostite.',
      problem:
        'Paddlerii versatili își doresc o singură placă care să facă față de la croaziera pe apă calmă până la condițiile agitate de coastă, rămânând în același timp suficient de ușoară pentru călătorii și suficient de rigidă pentru o senzație de carcasă dură.',
      howItWorks:
        'Seriile Horizon Lines asociază straturi specializate de întărire din laminat fuzionat cu o construcție drop-stitch din PVC clasificată la 15 PSI. Trei aripioare cu clic complet detașabile, cu un unghi optimizat de toe-in, permit sportivului să regleze fermitatea direcției și manevrabilitatea, iar o pompă cu dublă acțiune sau o pompă electrică opțională de 12 V CC atinge rapid presiunea maximă.',
      audience:
        'Cumpărători începători, croazieri pe apă calmă, pasionați de manevre avansate și călători care își doresc un singur SUP gonflabil all-around portabil, cu un pachet complet opțional.',
      ai_use_cases: [
        'Paddling all-around pe apă calmă și de coastă',
        'Practicarea manevrelor avansate și touring',
        'Aventuri SUP compacte gata de călătorie',
      ],
      ai_comparison:
        'Comparat cu placile SUP all-around standard, Horizon Lines se remarcă prin întăririle din laminat fuzionat și un sistem cu trei aripioare care permite sportivilor să personalizeze echilibrul dintre fermitatea direcției și manevrabilitate pentru orice, de la lacuri liniștite la apă agitată de coastă.',
      ai_faq: [
        {
          q: 'Pot fi personalizate aripioarele în funcție de condiții?',
          a: 'Da. Toate cele trei aripioare cu clic sunt complet detașabile, cu un unghi optimizat de toe-in, astfel încât poți regla configurația pentru fermitatea direcției pe apă calmă, curenții de râu sau condițiile agitate de coastă.',
        },
        {
          q: 'Ce opțiuni de umflare sunt incluse?',
          a: 'O pompă cu dublă acțiune, de mare presiune și volum mare, umflă pe ambele lovituri, iar placa este compatibilă cu o pompă electrică opțională de 12 V CC 20 PSI care atinge 15 PSI în aproximativ 9 minute.',
        },
      ],
    },
    'sup-rheo': {
      name: 'Seriile RHEO',
      desc: 'SUP gonflabil de cursă profesional de 14 picioare, cu construcție hibridă din carbon, vârf care taie valurile și fermitate de direcție de elită pentru sprinturi și curse pe distanțe lungi.',
      definition:
        'Un SUP gonflabil de cursă profesional de 14 picioare, cu o matrice hibridă din carbon fără deformare, un vârf care taie valurile și o punte îngustă de 26 de inci construită pentru curse de sprint, contra cronometru și antrenament la cadență ridicată.',
      problem:
        'Concurenții au nevoie de rigiditate comparabilă cu placa dură și de fermitate a direcției în linie dreaptă de la o placă gonflabilă, fără deformare, tragere sau estetica industrială ternă a placilor tradiționale de cursă.',
      howItWorks:
        'Seriile RHEO utilizează o construcție gonflabilă hibridă din carbon care elimină deformarea pentru o platformă extrem de solidă. Vârful care taie valurile străpunge apa agitată cu rezistență minimă, în timp ce lățimea de 26 de inci reduce frecarea suprafeței umede, iar configurația de aripioare 2+1 menține direcția la viteză și facilitează virajele largi rapide.',
      audience:
        'Concurenți care urmăresc recorduri personale, pasionați de viteză și paddleri avansați care își doresc performanță rigidă de cursă cu portabilitate gonflabilă, plus cumpărători OEM/ODM.',
      ai_use_cases: [
        'Curse SUP competitive și antrenament de sprint',
        'Fitness de viteză și paddling pe intervale',
        'Curse tehnice și curse pe căi navigabile înguste',
      ],
      ai_comparison:
        'Comparat cu placile tradiționale de cursă SUP, RHEO oferă o construcție gonflabilă hibridă din carbon fără deformare și un vârf care taie valurile pentru o pătrundere excepțională în apa agitată frontală, într-o placă care totuși se strânge pentru călătorii.',
      ai_faq: [
        {
          q: 'Este RHEO suficient de stabilă pentru începători?',
          a: 'Este proiectată pentru concurenți și paddleri avansați; lățimea de 26 de inci prioritizează viteza și eficiența, astfel încât începătorii ar trebui să înceapă pe o placă all-around mai lată.',
        },
        {
          q: 'Pentru ce este configurația de aripioare 2+1?',
          a: 'Aripioara centrală menține o fermitate excelentă a direcției în linie dreaptă la viteze mari, în timp ce aripioarele laterale oferă stabilitate laterală în timpul virajelor largi rapide la balize.',
        },
      ],
    },
    'sup-fishing': {
      name: 'SUP de pescuit gonflabil',
      desc: 'SUP de pescuit gonflabil stabil, tip catamaran, cu camere de aer duble, suporturi pentru lansete și o riglă de măsurare a peștelui pe punte, pentru aruncarea și recuperarea nadei în picioare.',
      definition:
        'Un SUP de pescuit gonflabil de 11,5 picioare, cu camere de aer pe ambele părți pentru stabilitate secundară de nivel catamaran, suporturi pentru lansete, o riglă de măsurare a peștelui pe punte și o carenă inspirată din kayak pentru aruncare, recuperare și touring în picioare.',
      problem:
        'Pescarilor le trebuie o platformă stabilă pentru pescuitul în picioare, care să nu se balanseze și să nu se răstoarne la recuperarea unei prăzi sau navigând în apă agitată, rămânând însă suficient de portabilă pentru a ajunge la zone de pescuit îndepărtate.',
      howItWorks:
        'SUP-ul de pescuit gonflabil folosește camere de aer laterale groase pe ambele părți, care oferă o stabilitate secundară excepțională, similară unui catamaran sau unei ambarcațiuni cu susținere laterală. Un vârf și o pupă ascuțite păstrează lățimea punții cu fermitatea direcției specifică unui kayak, iar miezul drop-stitch din PVC este clasificat la 15 PSI pentru o platformă rigidă și de încredere.',
      audience:
        'Pescar de aruncare a nadei și de bibani, pescari cu muscă și din kayak, și paddleri de excursii care transportă răcitoare, scaune de camp și năvoade — plus cumpărători OEM/ODM care caută un SUP de pescuit gonflabil.',
      ai_use_cases: [
        'Pescuit cu nadă aruncată în picioare și de biban',
        'Pescuit cu muscă și din kayak de pe o platformă gonflabilă',
        'Expediții de pescuit de mai multe zile cu încărcătură',
      ],
      ai_comparison:
        'Comparat cu placile standard de paddle, acest SUP de pescuit adaugă camere de aer tip catamaran pe ambele părți, care cresc dramatic stabilitatea laterală în picioare, la aruncare și la recuperare, cu suporturi pentru lansete și o riglă integrată de măsurare a peștelui.',
      ai_faq: [
        {
          q: 'Va rămâne placa stabilă în timp ce lupt cu un pește?',
          a: 'Da. Camerele de aer de pe ambele părți oferă o stabilitate secundară asemănătoare catamaranului, care previne balansarea și răsturnarea în timp ce stai în picioare, arunci sau recuperezi o prăză.',
        },
        {
          q: 'Există loc pentru montarea unui sonar?',
          a: 'Da. Două suporturi profesionale din plastic negru, înainte de covorul antiderapant, pot fixa suporturi pentru lansete, sonare sau echipament esențial de pescuit.',
        },
      ],
    },
    'sup-mini': {
      name: 'Seriile Mini SUP',
      desc: 'Mini SUP gonflabil ultra-versatil care funcționează ca o placă de paddle compactă, o placă de surf gonflabilă și o bodyboard pentru copii, adulți și animale de companie.',
      definition:
        'Un mini SUP gonflabil ultra-versatil de 7 picioare, care îmbină o placă de paddle compactă, o placă de surf gonflabilă și o bodyboard, cu un profil scurt, lat și stabil pentru copii, adulți și animale de companie, pe valuri, lacuri, piscine și golfuri liniștite.',
      problem:
        'Familiile și sportivii versatili au nevoie de o singură platformă compactă, portabilă și gonflabilă, care să funcționeze ca placă de paddle pentru copii, surf sau bodyboard pentru adulți și punte plutitoare prietenoasă cu animalele.',
      howItWorks:
        'Seriile Mini SUP folosesc un profil scurt, lat și extrem de stabil, cu un raport optimizat volum-lungime pentru flotabilitate maximă. Linia de rocker și profilul bordurii, receptive, prind valurile mici, iar o punte durabilă, rezistentă la perforare, suportă labele câinilor, rămânând ușoară și rapid de umflat.',
      audience:
        'Părinți care introduc copiii în sporturile cu paddle, adulți care își doresc un hibrid de surf sau bodyboard portabil și proprietari de animale care își duc câinii pe apă — plus cumpărători OEM/ODM care caută un mini SUP gonflabil.',
      ai_use_cases: [
        'Progresie SUP și surf pentru copii',
        'Bodyboarding pentru adulți și surf în valurile de țărm',
        'Joacă prietenoasă cu animalele la lac, piscină și golf liniștit',
      ],
      ai_comparison:
        'Comparat cu placile SUP standard, Mini SUP este un adevărat hibrid multifuncțional — placă de paddle, placă de surf gonflabilă și bodyboard într-o singură amprentă ultra-portabilă — cu punte rezistentă la perforare și prietenoasă cu animalele.',
      ai_faq: [
        {
          q: 'Pot folosi adulții Mini SUP?',
          a: 'Da. Raportul optimizat volum-lungime susține pe toată lumea, de la copii la adulți pe deplin dezvoltați, fie că este vorba de paddling în picioare, bodyboarding culcat sau prinderea valurilor mici.',
        },
        {
          q: 'Este puntea sigură pentru câini?',
          a: 'Da. Puntea folosește materiale robuste, rezistente la perforare, proiectate să suporte ghearele și labele câinilor.',
        },
      ],
    },
    'sup-giant': {
      name: 'SUP gigant pentru mai multe persoane',
      desc: 'SUP gonflabil gigant de 16,5 picioare pentru mai multe persoane, rating 650 kg, cu umflare cu dublă supapă, carenă de 8 inci, mânere multiple și fermitate a direcției cu aripioare multiple.',
      definition:
        'Un SUP gonflabil gigant de 16,5 picioare pentru mai multe persoane, cu carenă de 8 inci, umflare cu dublă supapă, configurație cu mânere multiple, fermitate a direcției cu aripioare multiple și sisteme duble cu corzi elastice pentru paddling de grup, închiriere și evenimente de echipă.',
      problem:
        'Grupurile, operatorii de închiriere și organizatorii de evenimente au nevoie de o singură placă gonflabilă gigantă care să transporte mai mulți sportivi în siguranță și să rămână rigidă sub sarcini concentrate.',
      howItWorks:
        'SUP-ul gigant pentru mai multe persoane folosește drop-stitch din PVC robust, clasificat la 15 PSI, cu un sistem cu dublă supapă, astfel încât două persoane pot umfla volumul mare de aer simultan. Opt până la douăsprezece mânere robuste de-a lungul ambelor bordaje, plus mânere la vârf și pupă, fac transportul și reîmbarcarea ușoare, în timp ce o configurație 4+1 sau cu trei aripioare menține placa largă pe direcție.',
      audience:
        'Operatori de închiriere, cluburi de sporturi nautice, organizatori de evenimente care desfășoară programe de team-building, familii numeroase și aventurieri de grup — plus cumpărători OEM/ODM care caută un SUP gonflabil gigant pentru mai multe persoane.',
      ai_use_cases: [
        'Sesiuni de team-building corporative și de grup',
        'Flote comerciale de închiriere și excursii de club',
        'Ieșiri pe lac cu familii mari și mai mulți sportivi',
      ],
      ai_comparison:
        'Comparat cu placile SUP standard, SUP-ul gigant transportă până la 650 kg cu o carenă de 8 inci și umflare cu dublă supapă, folosind un design cu mânere multiple și aripioare multiple, astfel încât echipaje întregi pot vâsli, transporta și reîmbarca în siguranță.',
      ai_faq: [
        {
          q: 'Câte persoane pot merge pe el?',
          a: 'Platforma lată de 59 de inci este clasificată pentru o sarcină masivă de 1433 lb (aproximativ 650 kg), susținând confortabil mai mulți sportivi, răcitoare și echipament de siguranță.',
        },
        {
          q: 'Cum umfli o placă atât de mare?',
          a: 'Un sistem cu dublă supapă permite două persoane să umfle simultan volumul intern masiv de aer, atingând un interval de operare de 11–15 PSI.',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'SUP utilitar și skiff pentru nadă',
      desc: 'SUP utilitar lat de 47 de inci, tip pontoane, cu un rating de sarcină de 880 lb, fereastră centrală de observare și montare pentru dublu motor, pentru pescuit cu nadă și configurații cu motor de trolling electric.',
      definition:
        'Un SUP utilitar și skiff pentru nadă de 11,5 picioare, cu profil lat de 47 de inci, rating de sarcină de 880 lb, fereastră centrală de observare, suporturi de acțiune și o pupă tip coadă de rândunică, cu montare pentru dublu motor, pentru pescuit cu nadă, transport și utilitate.',
      problem:
        'Pescarilor cu nadă și utilizatorilor utilitari le trebuie o platformă gonflabilă aproape imposibil de răsturnat, cu capacitate enormă de sarcină pentru pescar, răcitoare, baterii și chiar un motor electric de trolling.',
      howItWorks:
        'SUP utilitar și skiff pentru nadă folosește un contur scurt, de 47 de inci, tip pontoane, practic imposibil de răsturnat în timpul aruncării sau luptei cu pești mari. Construcția sa din drop-stitch robustă și întărită este clasificată la 880 lb, iar pupa tip coadă de rândunică oferă spațiu de montare preconfigurat pentru sisteme de propulsie motorizate.',
      audience:
        'Pescari cu nadă și muscă, pescari cu harponul, observatori ai apelor puțin adânci și pescari care folosesc motoare de trolling de pe o platformă gonflabilă — plus cumpărători OEM/ODM care caută un SUP de tip skiff pentru nadă, multifuncțional.',
      ai_use_cases: [
        'Pescuit cu nadă și muscă de pe o platformă în picioare sau șezând',
        'Recunoaștere subacvatică și pescuit cu harponul',
        'Transport greu și utilizare utilitară stabilă',
      ],
      ai_comparison:
        'Comparat cu placile standard de pescuit SUP, Lure Skiff este o platformă utilitară tip pontoane, clasificată la 880 lb, cu fereastră centrală de observare, montare preconfigurată pentru dublu motor și stabilitate care permite mersul, pentru pescuit cu nadă și muscă.',
      ai_faq: [
        {
          q: 'Poate susține un motor de trolling?',
          a: 'Da. Pupa tip coadă de rândunică include spațiu de montare preconfigurat pentru sisteme de propulsie motorizate, iar placa transportă motorul plus bateriile în limita capacității sale de 880 lb.',
        },
        {
          q: 'Pentru ce este fereastra centrală de observare?',
          a: 'Fereastra îți permite să observi apele puțin adânci pentru structuri și mișcarea peștilor-nadă — ideală pentru pescuitul cu harponul și observarea apei puțin adânci.',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Cruiser de touring SUP',
      desc: 'SUP gonflabil de touring de 12,5 picioare pentru distanțe lungi, cu cutie de aripioare US cu profil redus, aripioară premium de touring de 9 inci și miez drop-stitch pentru croazieră eficientă.',
      definition:
        'Un SUP gonflabil de touring de 12,5 picioare, cu o cutie de aripioare US cu profil redus, o aripioară premium de 9 inci pentru curse/touring și o construcție rigidă drop-stitch pentru croazieră pe distanțe lungi, explorarea apelor calme și paddling de performanță reglabil.',
      problem:
        'Paddlerii de touring care acoperă distanțe lungi au nevoie de o placă cu bordaje rigide care previn lăsarea, fermitate previzibilă a direcției în linie dreaptă și un sistem de aripioare pe care să-l regleze în funcție de condițiile apei.',
      howItWorks:
        'Cruiserul de touring combină un miez drop-stitch din PVC clasificat la 15 PSI cu rigiditatea bordajelor pentru a preveni lăsarea la mijloc. O cutie de aripioare US cu profil redus acceptă aripioara inclusă de 9 inci pentru curse/touring sau aripioare de pe piață, permițând paddlerilor să regleze fermitatea direcției și viteza pentru condiții specifice.',
      audience:
        'Paddleri de touring care acoperă distanțe lungi, exploratori ai apelor calme, croazieri de anduranță și paddleri care își doresc performanță reglabilă — plus cumpărători OEM/ODM care caută un SUP gonflabil de touring.',
      ai_use_cases: [
        'Touring pe distanțe lungi și croazieră de coastă',
        'Explorarea apelor calme și paddling de anduranță',
        'Paddling personalizat de performanță cu upgrade-uri de aripioare US',
      ],
      ai_comparison:
        'Comparat cu placile standard all-around, Cruiserul de touring adaugă o carenă de 12,5 picioare cu bordaje rigide și un sistem de cutie de aripioare US, păstrându-te pe curs pe distanțe lungi, cu mai puțină deviere și efort.',
      ai_faq: [
        {
          q: 'Pot folosi propriile aripioare?',
          a: 'Da. Cutia de aripioare US cu profil redus este gata pentru piața de accesorii, astfel încât poți monta aripioarele tale preferate pentru ape calme sau curse pentru a regla performanța.',
        },
        {
          q: 'Cum ating presiunea maximă?',
          a: 'Pompa de mână cu dublu cilindru inclusă mișcă rapid un volum mare și atinge presiuni mai mari cu mai puțin efort, iar placa este compatibilă cu pompa electrică opțională afarer de 12 V CC.',
        },
      ],
    },
  },
  th: {
    'sup-horizon-lines': {
      name: 'Horizon Lines ซีรีส์',
      desc: 'SUP ปั๊มลมเอนกประสงค์ระดับพรีเมียมยาว 11 ฟุต โครงสร้างฟิวชันลามิเนต แผ่นกันลื่นแบบหนังสัตว์เลื้อยคลาน และครีบคลิกปลดได้ 3 ชิ้น รองรับทุกสภาพน้ำ',
      definition:
        'บอร์ด SUP ปั๊มลมเอนกประสงค์ระดับพรีเมียมยาว 11 ฟุต พร้อมการเสริมแรงฟิวชันลามิเนตน้ำหนักเบา แผ่นกันลื่นแบบหนังสัตว์เลื้อยคลานพร้อมรองรับอุ้งเท้า และระบบครีบคลิก 3 ชิ้น สำหรับทะเลสาบ แม่น้ำ และน้ำชายฝั่งที่สงบ',
      problem:
        'นักพายที่ต้องการความหลากหลายต้องการบอร์ดเพียงแผ่นเดียวที่รับมือได้ทุกอย่างตั้งแต่การล่องน้ำนิ่งไปจนถึงสภาพน้ำชายฝั่งที่มีคลื่นลม ขณะที่เบาพอสำหรับการเดินทางและแข็งเกร็งพอให้ความรู้สึกเหมือนบอร์ดเปลือกแข็ง',
      howItWorks:
        'Horizon Lines ซีรีส์ผสานชั้นเสริมแรงฟิวชันลามิเนตเฉพาะเข้ากับโครงสร้าง PVC แบบ drop-stitch ที่รองรับแรงดัน 15 PSI ครีบคลิกปลดได้ 3 ชิ้นพร้อมมุมบังคับทิศทางที่ปรับแต่งมาแล้ว ช่วยให้ผู้ปั่นปรับการทรงตัวและความคล่องตัวได้ และปั๊มแบบสองจังหวะหรือปั๊มไฟฟ้า 12VDC (อุปกรณ์เสริม) ทำความดันเต็มได้อย่างรวดเร็ว',
      audience:
        'ผู้ซื้อครั้งแรก นักล่องน้ำนิ่ง ผู้ที่ชื่นชอบการพายท่าทางขั้นสูง และนักเดินทางที่ต้องการบอร์ด SUP ปั๊มลมเอนกประสงค์พกพาใต้หนึ่งเดียว พร้อมแพ็กเกจครบชุด (อุปกรณ์เสริม)',
      ai_use_cases: [
        'พายเอนกประสงค์บนน้ำนิ่งและชายฝั่ง',
        'ฝึกท่าทางขั้นสูงและการทัวริง',
        'ผจญภัย SUP กระทัดรัดพร้อมเดินทาง',
      ],
      ai_comparison:
        'เมื่อเทียบกับบอร์ด SUP เอนกประสงค์มาตรฐาน Horizon Lines มาพร้อมการเสริมแรงฟิวชันลามิเนตและระบบครีบ 3 ชิ้นที่ให้ผู้ปั่นปรับสมดุลระหว่างการทรงตัวตรงและความคล่องตัวได้ สำหรับทุกสภาพน้ำตั้งแต่ทะเลสาบสงบไปจนถึงน้ำชายฝั่งที่มีคลื่นลม',
      ai_faq: [
        {
          q: 'ปรับแต่งครีบตามสภาพน้ำได้ไหม?',
          a: 'ได้ ครีบคลิกทั้ง 3 ชิ้นถอดออกได้ทั้งหมดพร้อมมุมบังคับทิศทางที่ปรับแต่งมาแล้ว คุณจึงปรับชุดครีบได้ทั้งการทรงตัวตรงบนน้ำนิ่ง กระแสน้ำในแม่น้ำ หรือสภาพน้ำชายฝั่งที่มีคลื่นลม',
        },
        {
          q: 'มีตัวเลือกการเป่าลมอะไรบ้าง?',
          a: 'ปั๊มสองจังหวะแรงดันสูง/ปริมาณมากเป่าลมทั้งจังหวะขึ้นลง และบอร์ดรองรับปั๊มไฟฟ้า 12VDC 20PSI (อุปกรณ์เสริม) ที่ทำความดัน 15 PSI ได้ในเวลาประมาณ 9 นาที',
        },
      ],
    },
    'sup-rheo': {
      name: 'RHEO ซีรีส์',
      desc: 'SUP แข่งมืออาชีพปั๊มลมยาว 14 ฟุต โครงสร้างไฮบริดคาร์บอน หัวตัดคลื่น และการทรงตัวตรงระดับมืออาชีพสำหรับการวิ่งแข่งระยะสั้นและระยะไกล',
      definition:
        'บอร์ด SUP แข่งมืออาชีพปั๊มลมยาว 14 ฟุต พร้อมเมทริกซ์ไฮบริดคาร์บอนที่ไร้การโก่งตัว หัวตัดคลื่น และดาดฟ้าแคบ 26 นิ้ว ออกแบบสำหรับการแข่งวิ่งระยะสั้น ไทม์ไทรอัล และการฝึกความถี่สูง',
      problem:
        'นักแข่งต้องการความแข็งเกร็งแบบบอร์ดเปลือกแข็งและการทรงตัวตรงเป็นเส้นตรงจากบอร์ดปั๊มลม โดยไม่มีการโก่งตัว แรงต้าน หรือดีไซน์อุตสาหกรรมที่ดูจืดชืดเหมือนบอร์ดแข่ง SUP แบบดั้งเดิม',
      howItWorks:
        'RHEO ซีรีส์ใช้โครงสร้างปั๊มลมไฮบริดคาร์บอนที่ขจัดการโก่งตัวให้แท่นบอร์ดแข็งแกร่งสุดขีด หัวตัดคลื่นเฉือนผ่านคลื่นลมด้วยแรงต้านน้อยที่สุด ขณะที่ความกว้าง 26 นิ้วลดแรงเสียดทานบนผิวน้ำ และชุดครีบ 2+1 ยึดการทรงตัวตรงที่ความเร็วสูงพร้อมช่วยการเลี้ยวโค้งกว้างที่รวดเร็ว',
      audience:
        'นักแข่งที่ไล่ล่าสถิติส่วนตัว ผู้ชื่นชอบความเร็ว และนักพายขั้นสูงที่ต้องการสมรรถนะการแข่งที่แข็งเกร็งพร้อมความพกพาแบบปั๊มลม รวมถึงผู้ซื้อ OEM/ODM',
      ai_use_cases: [
        'การแข่ง SUP และการฝึกวิ่งระยะสั้น',
        'ออกกำลังกายความเร็วสูงและการพายแบบอินเทอร์วัล',
        'การแข่งเส้นทางเทคนิคและทางน้ำแคบ',
      ],
      ai_comparison:
        'เมื่อเทียบกับบอร์ดแข่ง SUP แบบดั้งเดิม RHEO ให้โครงสร้างปั๊มลมไฮบริดคาร์บอนที่ไร้การโก่งตัวและหัวตัดคลื่นเพื่อทะลุคลื่นหัวเรือได้อย่างยอดเยี่ยม ในบอร์ดที่ยังเก็บพับเพื่อการเดินทางได้',
      ai_faq: [
        {
          q: 'RHEO เสถียรพอสำหรับมือใหม่ไหม?',
          a: 'บอร์ดนี้ออกแบบสำหรับนักแข่งและนักพายขั้นสูง ความกว้าง 26 นิ้วให้ความสำคัญกับความเร็วและประสิทธิภาพ มือใหม่จึงควรเริ่มจากบอร์ดเอนกประสงค์ที่กว้างกว่า',
        },
        {
          q: 'ชุดครีบ 2+1 ใช้ทำอะไร?',
          a: 'ครีบกลางช่วยรักษาการทรงตัวตรงที่ยอดเยี่ยมที่ความเร็วสูง ขณะที่ครีบข้างให้ความเสถียรด้านข้างระหว่างการเลี้ยวโค้งกว้างรอบทุ่นอย่างรวดเร็ว',
        },
      ],
    },
    'sup-fishing': {
      name: 'SUP ตกปลาปั๊มลม',
      desc: 'SUP ตกปลาปั๊มลมทรงคาตามารันที่เสถียร ห้องอากาศสองข้าง ที่วางคันเบ็ด และไม้บรรทัดวัดปลาบนดาดฟ้า สำหรับยืนเหวี่ยงและรอก',
      definition:
        'SUP ตกปลาปั๊มลมยาว 11.5 ฟุต พร้อมห้องอากาศสองข้างเพื่อความเสถียรรองรับระดับคาตามารัน ที่วางคันเบ็ด ไม้บรรทัดวัดปลาบนดาดฟ้า และตัวเรือที่ได้แรงบันดาลใจจากเรือคายัค สำหรับการยืนเหวี่ยง รอก และทัวริง',
      problem:
        'นักตกปลาต้องการแท่นยืนเหวี่ยงที่เสถียร ไม่โยกเยกหรือคว่ำเมื่อรอกปลาเข้าหรือเดินเรือในน้ำที่มีคลื่นลม ขณะที่ยังพกพาได้พอสำหรับเดินทางไปยังจุดตกปลาที่ห่างไกล',
      howItWorks:
        'SUP ตกปลาปั๊มลมใช้ห้องอากาศหนาสองข้างที่ให้ความเสถียรรองรับที่ยอดเยี่ยมคล้ายคาตามารันหรือเรือกรรเชียงหัวท้าย หัวและท้ายเรือแหลมรักษาความกว้างดาดฟ้าพร้อมการทรงตัวตรงแบบคายัค และแกน PVC แบบ drop-stitch รองรับแรงดัน 15 PSI เพื่อแท่นบอร์ดที่แข็งเกร็งและน่าเชื่อถือ',
      audience:
        'นักตกปลาด้วยเหยื่อล่อและปลากะพง นักตกปลาแมลงวันและจากคายัค และนักพายทัวร์ที่ขนถังแช่เย็น เก้าอี้แคมป์ปิ้ง และสวิงตักปลา รวมถึงผู้ซื้อ OEM/ODM ที่ต้องการบอร์ด SUP ตกปลาปั๊มลม',
      ai_use_cases: [
        'การยืนตกปลาด้วยเหยื่อล่อและปลากะพง',
        'การตกปลาแมลงวันและจากคายัคบนแท่นปั๊มลม',
        'การตกปลาหลายวันพร้อมของบรรทุก',
      ],
      ai_comparison:
        'เมื่อเทียบกับบอร์ดแพดเดิลมาตรฐาน SUP ตกปลานี้เพิ่มห้องอากาศทรงคาตามารันสองข้างที่เพิ่มความเสถียรด้านข้างอย่างมากขณะยืน เหวี่ยง และรอก พร้อมที่วางคันเบ็ดและไม้บรรทัดวัดปลาในตัว',
      ai_faq: [
        {
          q: 'บอร์ดจะเสถียรขณะต่อสู้กับปลาไหม?',
          a: 'ได้ ห้องอากาศสองข้างให้ความเสถียรรองรับแบบคาตามารันที่ป้องกันการโยกเยกและการคว่ำขณะยืน เหวี่ยง หรือรอกปลาเข้าหา',
        },
        {
          q: 'มีที่ติดตั้งเครื่องหาปลาไหม?',
          a: 'ได้ ฐานพลาสติกดำระดับมืออาชีพ 2 จุดด้านหน้าแผ่นกันลื่นสามารถยึดที่วางคันเบ็ด เครื่องหาปลา หรืออุปกรณ์ตกปลาจำเป็นอื่นๆ',
        },
      ],
    },
    'sup-mini': {
      name: 'Mini SUP ซีรีส์',
      desc: 'SUP ปั๊มลมมินิสุดอเนกประสงค์ที่ใช้ได้ทั้งบอร์ดแพดเดิลกระทัดรัด บอร์ดเซิร์ฟปั๊มลม และบอดี้บอร์ด สำหรับเด็ก ผู้ใหญ่ และสัตว์เลี้ยง',
      definition:
        'SUP ปั๊มลมมินิสุดอเนกประสงค์ยาว 7 ฟุตที่ผสานบอร์ดแพดเดิลกระทัดรัด บอร์ดเซิร์ฟปั๊มลม และบอดี้บอร์ดเข้าด้วยกัน ด้วยโครงที่สั้น กว้าง และเสถียรมาก สำหรับเด็ก ผู้ใหญ่ และสัตว์เลี้ยง บนคลื่น ทะเลสาบ สระว่ายน้ำ และอ่าวสงบ',
      problem:
        'ครอบครัวและนักปั่นที่หลากหลายต้องการแท่นปั๊มลมกระทัดรัดพกพาเพียงหนึ่งเดียวที่ใช้ได้ทั้งบอร์ดแพดเดิลเด็ก เซิร์ฟหรือบอดี้บอร์ดสำหรับผู้ใหญ่ และดาดฟ้าลอยน้ำที่เป็นมิตรกับสัตว์เลี้ยง',
      howItWorks:
        'Mini SUP ซีรีส์ใช้โครงที่สั้น กว้าง และเสถียรสูง พร้อมอัตราส่วนปริมาตรต่อความยาวที่ปรับแต่งเพื่อการลอยตัวสูงสุด เส้นร็อกเกอร์และโครงขอบที่ตอบสนองดีรับคลื่นเล็ก และดาดฟ้าทนทานกันทะลุรองรับอุ้งเท้าสุนัข พร้อมทั้งยังเบาและเป่าลมได้เร็ว',
      audience:
        'พ่อแม่ที่พาเด็กๆ เข้าสู่กีฬาพาย บอร์ดเซิร์ฟหรือบอดี้บอร์ดไฮบริดพกพาสำหรับผู้ใหญ่ และเจ้าของสัตว์เลี้ยงที่พาสุนัขลงน้ำ รวมถึงผู้ซื้อ OEM/ODM ที่ต้องการ Mini SUP ปั๊มลม',
      ai_use_cases: [
        'การพัฒนาการพายและเซิร์ฟของเด็ก',
        'บอดี้บอร์ดผู้ใหญ่และเซิร์ฟคลื่นชายฝั่ง',
        'การเล่นที่เป็นมิตรกับสัตว์เลี้ยงที่ทะเลสาบ สระ และอ่าวสงบ',
      ],
      ai_comparison:
        'เมื่อเทียบกับบอร์ด SUP มาตรฐาน Mini SUP เป็นไฮบริดมัลติฟังก์ชันอย่างแท้จริง — บอร์ดแพดเดิล บอร์ดเซิร์ฟปั๊มลม และบอดี้บอร์ด ในพื้นที่ขนาดกะทัดรัดสุดๆ หนึ่งเดียว — พร้อมดาดฟ้ากันทะลุที่เป็นมิตรกับสัตว์เลี้ยง',
      ai_faq: [
        {
          q: 'ผู้ใหญ่ขี่ Mini SUP ได้ไหม?',
          a: 'ได้ อัตราส่วนปริมาตรต่อความยาวที่ปรับแต่งรองรับทุกคนตั้งแต่เด็กจนถึงผู้ใหญ่เต็มวัย ทั้งการยืนพาย นอนเล่นบอดี้บอร์ด หรือรับคลื่นเล็ก',
        },
        {
          q: 'ดาดฟ้าปลอดภัยสำหรับสุนัขไหม?',
          a: 'ได้ ดาดฟ้าใช้วัสดุหนากันทะลุที่ออกแบบมาให้ทนเล็บและอุ้งเท้าของสุนัข',
        },
      ],
    },
    'sup-giant': {
      name: 'SUP ยักษ์หลายคน',
      desc: 'SUP ปั๊มลมหลายคนยักษ์ยาว 16.5 ฟุต รองรับน้ำหนัก 650 กก. เป่าลมสองวาล์ว ตัวเรือ 8 นิ้ว ด้ามจับหลายจุด และครีบหลายชิ้นเพื่อการทรงตัวตรง',
      definition:
        'SUP ปั๊มลมยักษ์หลายคนยาว 16.5 ฟุต พร้อมตัวเรือ 8 นิ้ว ระบบเป่าลมสองวาล์ว ชุดด้ามจับหลายจุด ครีบหลายชิ้นช่วยการทรงตัวตรง และระบบเชือกรั้งสินค้าสองชุด สำหรับการพายกลุ่ม เช่า และกิจกรรมทีม',
      problem:
        'กลุ่ม นักให้เช่า และผู้จัดงานต้องการบอร์ดปั๊มลมยักษ์เพียงแผ่นเดียวที่บรรทุกผู้ปั่นหลายคนได้อย่างปลอดภัยและคงความแข็งเกร็งภายใต้น้ำหนักที่กระจุกตัว',
      howItWorks:
        'SUP ยักษ์หลายคนใช้ PVC แบบ drop-stitch หนา รองรับแรงดัน 15 PSI พร้อมระบบสองวาล์วที่ให้คนสองคนเป่าลมปริมาณมากพร้อมกันได้ ด้ามจับหนา 8–12 จุดตลอดสองข้างเรือบวกด้ามจับที่หัวและท้ายช่วยให้ยกและกลับขึ้นบอร์ดได้ง่าย ขณะที่ชุดครีบ 4+1 หรือ 3 ชิ้นทำให้บอร์ดกว้างทรงตรง',
      audience:
        'นักให้เช่า สโมสรกีฬาทางน้ำ ผู้จัดกิจกรรมทีมบิลดิ้ง ครอบครัวใหญ่ และนักผจญภัยกลุ่ม รวมถึงผู้ซื้อ OEM/ODM ที่ต้องการ SUP ปั๊มลมยักษ์หลายคน',
      ai_use_cases: [
        'กิจกรรมทีมบิลดิ้งองค์กรและกลุ่ม',
        'กองเรือเช่าเชิงพาณิชย์และทริปสโมสร',
        'ทริปทะเลสาบของครอบครัวใหญ่และผู้ปั่นหลายคน',
      ],
      ai_comparison:
        'เมื่อเทียบกับบอร์ด SUP มาตรฐาน SUP ยักษ์รองรับน้ำหนักได้ถึง 650 กก. ด้วยตัวเรือ 8 นิ้วและการเป่าลมสองวาล์ว ใช้ดีไซน์ด้ามจับหลายจุดและครีบหลายชิ้นเพื่อให้ทั้งทีมพาย ยก และกลับขึ้นบอร์ดได้อย่างปลอดภัย',
      ai_faq: [
        {
          q: 'ขี่ได้กี่คน?',
          a: 'แท่นกว้าง 59 นิ้วรองรับน้ำหนักมหาศาล 1433 ปอนด์ (ประมาณ 650 กก.) รับผู้ปั่นหลายคน ถังแช่เย็น และอุปกรณ์นิรภัยได้อย่างสบาย',
        },
        {
          q: 'เป่าลมบอร์ดใหญ่ขนาดนี้ยังไง?',
          a: 'ระบบสองวาล์วให้คนสองคนเป่าปริมาณอากาศภายในมหาศาลพร้อมกันได้ ถึงช่วงแรงดันใช้งาน 11–15 PSI',
        },
      ],
    },
    'sup-lure-skiff': {
      name: 'Utility & Lure Skiff SUP',
      desc: 'SUP อเนกประสงค์กว้างทรงโป๊ะ 47 นิ้ว รองรับน้ำหนัก 880 ปอนด์ หน้าต่างมองใต้น้ำตรงกลาง และจุดติดตั้งมอเตอร์คู่ สำหรับการตกปลาด้วยเหยื่อล่อและชุดมอเตอร์ทอลลิ่ง',
      definition:
        'เรือล่องเหยื่อล่อ/SUP อเนกประสงค์กว้างทรงโป๊ะยาว 11.5 ฟุต โครงกว้าง 47 นิ้ว รองรับน้ำหนัก 880 ปอนด์ หน้าต่างมองใต้น้ำตรงกลาง จุดติดตั้งอุปกรณ์ และท้ายเรือทรงหางนกนางแอ่นพร้อมจุดติดตั้งมอเตอร์คู่ สำหรับการตกปลาด้วยเหยื่อล่อ การขนของ และการใช้งานอเนกประสงค์',
      problem:
        'นักตกปลาด้วยเหยื่อล่อและผู้ใช้งานอเนกประสงค์ต้องการแท่นปั๊มลมที่แทบพลิกคว่ำไม่ได้ พร้อมความจุน้ำหนักมหาศาลสำหรับนักตกปลา ถังแช่เย็น แบตเตอรี่ และแม้แต่มอเตอร์ทอลลิ่งไฟฟ้า',
      howItWorks:
        'Utility & Lure Skiff SUP ใช้กรอบรูปทรงโป๊ะสั้นกว้าง 47 นิ้วที่แทบเป็นไปไม่ได้ที่จะพลิกคว่ำขณะเหวี่ยงหรือต่อสู้กับปลาตัวใหญ่ โครงสร้าง drop-stitch เสริมแรงหนารองรับน้ำหนัก 880 ปอนด์ และท้ายเรือทรงหางนกนางแอ่นให้พื้นที่ติดตั้งที่เตรียมไว้แล้วสำหรับระบบขับเคลื่อนด้วยมอเตอร์',
      audience:
        'นักตกปลาด้วยเหยื่อล่อและแมลงวัน นักดำน้ำหาปลา นักดูน้ำตื้น และนักตกปลาที่ใช้มอเตอร์ทอลลิ่งจากแท่นปั๊มลม รวมถึงผู้ซื้อ OEM/ODM ที่ต้องการ SUP ทรงเรือล่องเหยื่อล่ออเนกประสงค์',
      ai_use_cases: [
        'การตกปลาด้วยเหยื่อล่อและแมลงวันทั้งยืนและนั่ง',
        'การสำรวจใต้น้ำและการดำน้ำหาปลา',
        'การขนของหนักและการใช้งานอเนกประสงค์ที่เสถียร',
      ],
      ai_comparison:
        'เมื่อเทียบกับบอร์ด SUP ตกปลามาตรฐาน Lure Skiff คือแท่นอเนกประสงค์ทรงโป๊ะที่รองรับน้ำหนัก 880 ปอนด์ พร้อมหน้าต่างมองใต้น้ำตรงกลาง จุดติดตั้งมอเตอร์คู่ที่เตรียมไว้แล้ว และความเสถียรที่เดินได้ สำหรับการตกปลาด้วยเหยื่อล่อและแมลงวัน',
      ai_faq: [
        {
          q: 'รองรับมอเตอร์ทอลลิ่งได้ไหม?',
          a: 'ได้ ท้ายเรือทรงหางนกนางแอ่นมีพื้นที่ติดตั้งที่เตรียมไว้แล้วสำหรับระบบขับเคลื่อนด้วยมอเตอร์ และบอร์ดบรรทุกมอเตอร์พร้อมแบตเตอรี่ภายในความจุ 880 ปอนด์ได้',
        },
        {
          q: 'หน้าต่างมองใต้น้ำตรงกลางใช้ทำอะไร?',
          a: 'หน้าต่างให้คุณมองน้ำตื้นเพื่อหาซากโครงสร้างและความเคลื่อนไหวของเหยื่อ — เหมาะสำหรับการดำน้ำหาปลาและการสังเกตน้ำตื้น',
        },
      ],
    },
    'sup-touring-cruiser': {
      name: 'Touring Cruiser SUP',
      desc: 'SUP ปั๊มลมทัวริงระยะไกลยาว 12.5 ฟุต พร้อมกล่องครีบ US แนวเตี้ย ครีบทัวริงพรีเมียม 9 นิ้ว และแกน drop-stitch เพื่อการล่องอย่างมีประสิทธิภาพ',
      definition:
        'บอร์ด SUP ปั๊มลมทัวริงยาว 12.5 ฟุต พร้อมกล่องครีบ US แนวเตี้ย ครีบแข่ง/ทัวริงพรีเมียม 9 นิ้ว และโครงสร้าง drop-stitch แข็งเกร็ง สำหรับการล่องระยะไกล การสำรวจน้ำนิ่ง และการพายที่ปรับสมรรถนะได้',
      problem:
        'นักพายทัวริงระยะไกลต้องการบอร์ดที่มีขอบแข็งเกร็งป้องกันการแอ่นตัว การทรงตัวตรงที่คาดเดาได้ และระบบครีบที่ปรับได้ตามสภาพน้ำต่างๆ',
      howItWorks:
        'Touring Cruiser ผสานแกน PVC แบบ drop-stitch รองรับแรงดัน 15 PSI เข้ากับความแข็งเกร็งขอบบอร์ดเพื่อป้องกันการแอ่นตัวกลางบอร์ด กล่องครีบ US แนวเตี้ยรองรับครีบแข่ง/ทัวริง 9 นิ้วที่ให้มาหรือครีบเสริมจากภายนอก ช่วยให้นักพายปรับการทรงตัวตรงและความเร็วตามสภาพที่ต้องการ',
      audience:
        'นักพายทัวริงระยะไกล นักสำรวจน้ำนิ่ง นักล่องระยะยาว และนักพายที่ต้องการสมรรถนะที่ปรับได้ รวมถึงผู้ซื้อ OEM/ODM ที่ต้องการบอร์ด SUP ทัวริงปั๊มลม',
      ai_use_cases: [
        'การทัวริงระยะไกลและการล่องชายฝั่ง',
        'การสำรวจน้ำนิ่งและการพายระยะยาว',
        'การพายสมรรถนะเฉพาะบุคคลด้วยครีบ US อัปเกรด',
      ],
      ai_comparison:
        'เมื่อเทียบกับบอร์ดเอนกประสงค์มาตรฐาน Touring Cruiser เพิ่มตัวเรือ 12.5 ฟุตพร้อมขอบแข็งเกร็งและระบบกล่องครีบ US ให้คุณอยู่ในเส้นทางข้ามระยะทางไกลโดยเบี่ยงและออกแรงน้อยลง',
      ai_faq: [
        {
          q: 'ใช้ครีบของตัวเองได้ไหม?',
          a: 'ได้ กล่องครีบ US แนวเตี้ยพร้อมรองรับครีบเสริมจากภายนอก คุณจึงเปลี่ยนครีบน้ำนิ่งหรือครีบแข่งที่ชอบเพื่อปรับสมรรถนะได้',
        },
        {
          q: 'ทำความดันเต็มยังไง?',
          a: 'ปั๊มมือสูบคู่ที่ให้มาเคลื่อนปริมาณอากาศมากได้เร็วและถึงแรงดันสูงด้วยแรงน้อยลง และบอร์ดรองรับปั๊มไฟฟ้า afarer 12VDC (อุปกรณ์เสริม)',
        },
      ],
    },
  },
};
