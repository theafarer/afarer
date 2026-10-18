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
      desc: 'Aide à la flottabilité universelle pour les sports nautiques récréatifs. Certifié CE et ISO.',
      definition:
        'Une aide à la flottabilité universelle certifiée CE et ISO pour les sports nautiques récréatifs dans tous les environnements aquatiques.',
      problem:
        "Les pratiquants de sports nautiques de tous niveaux ont besoin d'un gilet de sauvetage fiable et confortable qui répond aux normes de sécurité internationales sans restreindre les mouvements.",
      howItWorks:
        'Le Gilet de Sauvetage Classic utilise des chambres de flottabilité en mousse avec des sangles de poitrine et latérales ajustables pour un maintien sûr. Il est disponible en plusieurs tailles et comprend un sifflet, des bandes réfléchissantes et une poignée de sauvetage.',
      audience:
        "Pagayeurs récréatifs, plaisanciers, pêcheurs et débutants en sports nautiques qui ont besoin d'une flottabilité certifiée CE pour les lacs, rivières et eaux côtières.",
      ai_use_cases: [
        'Sécurité des sports nautiques récréatifs',
        'Flottabilité pour formation et surveillance',
        'Activités nautiques familiales',
      ],
      ai_comparison:
        'Comparé aux gilets de sauvetage automatiques gonflables, le Gilet de Sauvetage Classic offre une flottabilité constante sans nécessiter de déploiement. Il est plus volumineux mais plus fiable pour les utilisateurs récréatifs qui pourraient ne pas entretenir les mécanismes automatiques.',
      ai_faq: [
        {
          q: 'Ce gilet de sauvetage est-il adapté aux enfants ?',
          a: 'Oui, des tailles enfants sont disponibles. Certifié CE et  pour les fourchettes de poids spécifiées.',
        },
        {
          q: 'Nécessite-t-il un entretien ?',
          a: "Entretien minimal. Rincez à l'eau douce après utilisation. Inspectez les chambres et les sangles avant chaque utilisation. Remplacez en cas de dommage.",
        },
      ],
    },
    'life-vest-pro': {
      name: 'Gilet de Sauvetage Pro',
      desc: 'Gilet de sauvetage professionnel avec réflecteurs SOLAS pour les opérations offshore et de sauvetage.',
      definition:
        'Un gilet de sauvetage professionnel conforme SOLAS avec gonflage automatique pour une utilisation offshore, de sauvetage et maritime commerciale.',
      problem:
        "Les marins professionnels et le personnel de sauvetage ont besoin d'un gilet de sauvetage offrant un gonflage automatique, une flottabilité élevée et une visibilité conforme SOLAS pour les opérations offshore.",
      howItWorks:
        "Le Gilet de Sauvetage Pro utilise un mécanisme de gonflage hydrostatique automatique avec un tube de gonflage manuel de secours. Il comprend du ruban réfléchissant de qualité SOLAS, une capuche anti-projections, un sifflet, un voyant étanche et un point d'attache de harnais de levage.",
      audience:
        'Marins commerciaux, professionnels du sauvetage, travailleurs offshore et plaisanciers expérimentés qui ont besoin de gilets de sauvetage automatiques conformes SOLAS.',
      ai_use_cases: [
        'Sécurité des opérations maritimes offshore',
        "Sauvetage professionnel et intervention d'urgence",
        'Conformité maritime commerciale',
      ],
      ai_comparison:
        'Comparé aux gilets de sauvetage en mousse, le Gilet de Sauvetage Pro se gonfle automatiquement pour un encombrement minimal en usage normal. Il nécessite un entretien annuel du mécanisme hydrostatique et le remplacement de la batterie.',
      ai_faq: [
        {
          q: 'Comment fonctionne le gonflage automatique ?',
          a: "Un déclencheur hydrostatique s'active lors de l'immersion dans l'eau à une profondeur de 0,5 à 1,0 mètre. Un tube de gonflage manuel de secours est également fourni.",
        },
        {
          q: 'À quelle fréquence doit-il être entretenu ?',
          a: 'Un entretien annuel du mécanisme hydrostatique est recommandé. La cartouche de CO2 doit être vérifiée et remplacée selon le calendrier du fabricant.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Kit Pagaies & Pompe',
      desc: 'Paire de pagaies en aluminium de 1,6 m et pompe à pied 5 L pour planches SUP gonflables.',
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
      name: 'Édition Cheetah Surge',
      desc: 'Planche SUP polyvalente inspirée de la nature sauvage avec assemblage de blocs EVA multicolores de haute précision.',
    },
    'sup-leviathan-wake': {
      name: 'Série Leviathan Wake (Édition Baleine)',
      desc: "Planche SUP polyvalente inspirée de l'océan avec un motif de baleine bleue et des lignes de houle noires et blanches.",
    },
    'sup-medusa-glow': {
      name: 'Série Medusa Glow (Édition Méduse)',
      desc: 'Planche SUP polyvalente inspirée des méduses avec assemblage de blocs EVA multicolores de haute précision.',
    },
    'sup-ocean-pulse': {
      name: 'Série Ocean Pulse',
      desc: 'Planche SUP polyvalente inspirée des vagues topographiques avec impression UV et embossage mécanique de haute précision.',
    },
    'sup-ocean-voyager': {
      name: 'Série Ocean Voyager',
      desc: 'Planche SUP polyvalente inspirée de la tortue marine avec assemblage de blocs EVA multicolores de haute précision.',
    },
    'sup-dolphin-wave': {
      name: 'Série Dolphin Wave',
      desc: 'Planche SUP polyvalente inspirée des dauphins avec assemblage EVA CNC de haute précision et impressions latérales continues.',
    },
    'sup-flowing-lotus': {
      name: 'Série Flowing Lotus',
      desc: "Planche SUP polyvalente inspirée de l'art oriental avec lotus, carpes koï et libellules, et gravure laser EVA.",
    },
    'sup-jungle-mandala': {
      name: 'Série Jungle Mandala',
      desc: 'Planche SUP polyvalente inspirée de la forêt tropicale avec mandala, gravure laser EVA et impressions latérales.',
    },
    'sup-tropical-breeze': {
      name: 'Série Tropical Breeze Island Escape',
      desc: 'Planche SUP polyvalente inspirée du paradis tropical avec illustration de paysage et assemblage EVA abstrait.',
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
      desc: 'Universelle Auftriebshilfe für Wassersport. CE- und ISO-zertifiziert.',
      definition:
        'Eine CE- und ISO-zertifizierte universelle Auftriebshilfe für Freizeitwassersport in allen Gewässerumgebungen.',
      problem:
        'Wassersportler aller Könnensstufen benötigen eine zuverlässige, bequeme Schwimmweste, die internationalen Sicherheitsstandards entspricht, ohne die Bewegungsfreiheit einzuschränken.',
      howItWorks:
        'Die Schwimmweste Classic verwendet mit Schaumstoff gefüllte Auftriebskammern mit verstellbaren Brust- und Seitengurten für einen sicheren Sitz. Sie ist in mehreren Größen erhältlich und enthält eine Trillerpfeife, reflektierende Streifen und einen Rettungsgriff.',
      audience:
        'Freizeitpaddler, Bootsfahrer, Angler und Wassersportanfänger, die eine CE-zertifizierte Auftriebshilfe für Seen, Flüsse und Küstengewässer benötigen.',
      ai_use_cases: [
        'Sicherheit beim Freizeitwassersport',
        'Auftriebshilfe für Training und Aufsicht',
        'Familien-Wasseraktivitäten',
      ],
      ai_comparison:
        'Im Vergleich zu automatischen aufblasbaren Schwimmwesten bietet die Schwimmweste Classic ständigen Auftrieb ohne Auslösung. Sie ist sperriger aber zuverlässiger für Freizeitnutzer, die automatische Mechanismen möglicherweise nicht warten.',
      ai_faq: [
        {
          q: 'Ist diese Schwimmweste für Kinder geeignet?',
          a: 'Ja, Kindergrößen sind erhältlich. CE- und -zertifiziert für die angegebenen Gewichtsbereiche.',
        },
        {
          q: 'Ist Wartung erforderlich?',
          a: 'Minimale Wartung. Nach Gebrauch mit Süßwasser abspülen. Vor jedem Gebrauch Kammern und Gurte überprüfen. Bei Beschädigung ersetzen.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'Schwimmweste Pro',
      desc: 'Professionelle Schwimmweste mit SOLAS-Reflektoren für Offshore- und Rettungseinsätze.',
      definition:
        'Eine professionelle SOLAS-konforme Schwimmweste mit automatischer Aufblasfunktion für Offshore-, Rettungs- und gewerbliche Schifffahrt.',
      problem:
        'Berufsschifffahrer und Rettungskräfte benötigen eine Schwimmweste, die automatische Aufblasfunktion, hohen Auftrieb und SOLAS-konforme Sichtbarkeit für Offshore-Einsätze bietet.',
      howItWorks:
        'Die Schwimmweste Pro verwendet einen automatischen hydrostatischen Aufblasmechanismus mit einer manuellen Aufblasröhre als Backup. Sie enthält SOLAS-konformes Reflexband, eine Spritzhaube, eine Trillerpfeife, ein wasserdichtes Licht und einen Hebegurthefestigungspunkt.',
      audience:
        'Berufsschifffahrer, Rettungsprofis, Offshore-Arbeiter und erfahrene Bootsfahrer, die SOLAS-konforme automatische Schwimmwesten benötigen.',
      ai_use_cases: [
        'Sicherheit bei Offshore-Schifffahrtseinsätzen',
        'Professionelle Rettung und Notfallreaktion',
        'Kommerzielle maritime Compliance',
      ],
      ai_comparison:
        'Im Vergleich zu Schaumstoffwesten bläst sich die Schwimmweste Pro automatisch auf und ist bei normalem Tragen minimal auftragend. Sie erfordert eine jährliche Wartung des hydrostatischen Mechanismus und einen Batteriewechsel.',
      ai_faq: [
        {
          q: 'Wie funktioniert die automatische Aufblasfunktion?',
          a: 'Ein hydrostatischer Auslöser aktiviert sich beim Eintauchen in Wasser in 0,5-1,0 Metern Tiefe. Eine manuelle Aufblasröhre ist ebenfalls als Backup vorhanden.',
        },
        {
          q: 'Wie oft muss sie gewartet werden?',
          a: 'Eine jährliche Wartung des hydrostatischen Mechanismus wird empfohlen. Die CO2-Patrone sollte gemäß Herstellerplan überprüft und ersetzt werden.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Riemen & Pumpen-Set',
      desc: 'Paar 1,6 m Aluminiumriemen und 5-Liter-Fußpumpe für SUP-Boards.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Vielseitiges Allround-SUP-Board mit breiter Standfläche für Anfänger und fortgeschrittene Paddler.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Großzügiges SUP-Board 3,6 m mit verstärktem Air-Deck-Boden für Familienausflüge und Angeln.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Sonderedition',
      desc: 'Vielseitiges Wildtier-inspiriertes SUP-Board mit mehrfarbiger EVA-Block-Piecing-Technologie.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Serie (Wal-Edition)',
      desc: 'Ozean-inspiriertes Allround-SUP-Board mit Blauwal-Totem und schwarz-weißen Schwellenlinien.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Serie (Quallen-Edition)',
      desc: 'Traumhaftes Quallen-inspiriertes Allround-SUP mit mehrfarbiger EVA-Block-Piecing-Technologie.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Serie',
      desc: 'Topografisch-wellendesign-inspiriertes Allround-SUP mit UV-Druck und mechanischer Prägung.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Serie',
      desc: 'Meeresschildkröten-inspiriertes Allround-SUP mit mehrfarbiger EVA-Block-Piecing-Technologie.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Serie',
      desc: 'Delfin-inspiriertes Allround-SUP mit CNC-gefrästem EVA-Farbblock-Splicing und durchgehendem Bahnendruck.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Serie',
      desc: 'Ostasiatisch-inspiriertes Allround-SUP mit Lotus, Koi und Libellen sowie lasergravierter EVA-Auflage.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Serie',
      desc: 'Tropisches Regenwald-Mandala-SUP mit lasergravierter EVA-Auflage und Siebdruck-Schienen.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Serie',
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
      desc: 'Auxílio de flutuação universal para esportes aquáticos recreativos. Certificado CE.',
      definition:
        'Um auxílio de flutuação universal certificado CE e ISO para esportes aquáticos recreativos em todos os ambientes aquáticos.',
      problem:
        'Praticantes de esportes aquáticos de todos os níveis precisam de um colete salva-vidas confiável e confortável que atenda aos padrões internacionais de segurança sem restringir movimentos.',
      howItWorks:
        'O Colete Salva-Vidas Classic usa câmaras de flutuação preenchidas com espuma com tiras de peito e laterais ajustáveis para ajuste seguro. Está disponível em vários tamanhos e inclui apito, faixas refletivas e alça de resgate.',
      audience:
        'Paddlers recreativos, donos de barcos, pescadores e iniciantes em esportes aquáticos que precisam de flutuação certificada CE para lagos, rios e águas costeiras.',
      ai_use_cases: [
        'Segurança em esportes aquáticos recreativos',
        'Flutuação para treinamento e supervisão',
        'Atividades aquáticas familiares',
      ],
      ai_comparison:
        'Comparado a coletes salva-vidas automáticos infláveis, o Colete Salva-Vidas Classic oferece flutuação constante sem necessidade de acionamento. É mais volumoso, mas mais confiável para usuários recreativos que podem não manter mecanismos automáticos.',
      ai_faq: [
        {
          q: 'Este colete é adequado para crianças?',
          a: 'Sim, tamanhos infantis estão disponíveis. Certificado CE 12402 para as faixas de peso especificadas.',
        },
        {
          q: 'Requer manutenção?',
          a: 'Manutenção mínima. Enxágue com água doce após o uso. Inspecione as câmaras e tiras antes de cada uso. Substitua se danificado.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'Colete Salva-Vidas Pro',
      desc: 'Colete salva-vidas profissional com refletores SOLAS para operações offshore e de resgate.',
      definition:
        'Um colete salva-vidas profissional compatível com SOLAS com inflação automática para uso offshore, de resgate e marítimo comercial.',
      problem:
        'Marinheiros profissionais e pessoal de resgate precisam de um colete salva-vidas que forneça inflação automática, alta flutuação e visibilidade compatível com SOLAS para operações offshore.',
      howItWorks:
        "O Colete Salva-Vidas Pro usa um mecanismo de inflação hidrostática automática com um tubo de inflação manual de reserva. Inclui fita refletiva classe SOLAS, capuz contra respingos, apito, luz à prova d'água e ponto de fixação de cinto de elevação.",
      audience:
        'Marinheiros comerciais, profissionais de resgate, trabalhadores offshore e velejadores avançados que precisam de coletes salva-vidas automáticos compatíveis com SOLAS.',
      ai_use_cases: [
        'Segurança em operações marítimas offshore',
        'Resgate profissional e resposta a emergências',
        'Conformidade marítima comercial',
      ],
      ai_comparison:
        'Comparado a coletes salva-vidas preenchidos com espuma, o Colete Salva-Vidas Pro infla automaticamente para volume mínimo durante o uso normal. Requer manutenção anual do mecanismo hidrostático e substituição da bateria.',
      ai_faq: [
        {
          q: 'Como funciona a inflação automática?',
          a: 'Um gatilho hidrostático é ativado ao imergir em água a 0,5-1,0 metros de profundidade. Um tubo de inflação manual de reserva também é fornecido.',
        },
        {
          q: 'Com que frequência precisa de manutenção?',
          a: 'Recomenda-se manutenção anual do mecanismo hidrostático. O cilindro de CO2 deve ser verificado e substituído conforme o cronograma do fabricante.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'Kit Remos & Bomba',
      desc: 'Par de remos de alumínio de 1,6 m e bomba de pé de 5 L para SUP insuflável.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Tábua SUP insuflável multiusos com estabilidade de corpo largo para iniciantes e praticantes intermédios.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Espaçosa tábua SUP insuflável de 3,6 m com piso Air-Deck reforçado para recreação familiar e pesca.',
    },
    'sup-cheetah-surge': {
      name: 'Edição Cheetah Surge',
      desc: 'SUP versátil inspirado na natureza com blocos EVA multicoloridos de alta precisão.',
    },
    'sup-leviathan-wake': {
      name: 'Série Leviathan Wake (Edição Baleia)',
      desc: 'SUP versátil inspirado no oceano com totem de baleia azul e linhas de ondulação preto e branco.',
    },
    'sup-medusa-glow': {
      name: 'Série Medusa Glow (Edição Água-Viva)',
      desc: 'SUP versátil inspirado em águas-vivas com blocos EVA multicoloridos de alta precisão.',
    },
    'sup-ocean-pulse': {
      name: 'Série Ocean Pulse',
      desc: 'SUP versátil inspirado em ondas topográficas com impressão UV e relevo mecânico de alta precisão.',
    },
    'sup-ocean-voyager': {
      name: 'Série Ocean Voyager',
      desc: 'SUP versátil inspirado em tartaruga marinha com blocos EVA multicoloridos de alta precisão.',
    },
    'sup-dolphin-wave': {
      name: 'Série Dolphin Wave',
      desc: 'SUP versátil inspirado em golfinhos com blocos EVA CNC e serigrafia contínua nas laterais.',
    },
    'sup-flowing-lotus': {
      name: 'Série Flowing Lotus',
      desc: 'SUP versátil inspirado em arte oriental com lótus, carpas e libélulas, e gravação a laser EVA.',
    },
    'sup-jungle-mandala': {
      name: 'Série Jungle Mandala',
      desc: 'SUP versátil inspirado em floresta tropical com mandala, gravação a laser EVA e serigrafia nas laterais.',
    },
    'sup-tropical-breeze': {
      name: 'Série Tropical Breeze Island Escape',
      desc: 'SUP versátil inspirado em paraíso tropical com ilustração de paisagem e blocos EVA abstratos.',
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
      desc: 'Ayuda de flotabilidad universal para deportes acuáticos recreativos. Certificado CE.',
      definition:
        'Una ayuda de flotabilidad universal certificada CE e ISO para deportes acuáticos recreativos en todo tipo de aguas.',
      problem:
        'Los participantes de deportes acuáticos de todos los niveles necesitan un chaleco salvavidas fiable y cómodo que cumpla con las normas internacionales de seguridad sin restringir el movimiento.',
      howItWorks:
        'El chaleco salvavidas Classic utiliza cámaras de flotabilidad rellenas de espuma con correas ajustables en pecho y costados para un ajuste seguro. Está disponible en múltiples tallas e incluye silbato, bandas reflectantes y asa de rescate.',
      audience:
        'Remeros recreativos, navegantes, pescadores y principiantes en deportes acuáticos que necesitan flotación certificada CE para lagos, ríos y aguas costeras.',
      ai_use_cases: [
        'Seguridad en deportes acuáticos recreativos',
        'Flotación para entrenamiento y supervisión',
        'Actividades acuáticas familiares',
      ],
      ai_comparison:
        'En comparación con los chalecos salvavidas inflables automáticos, el Classic proporciona flotación constante sin necesidad de activación. Es más voluminoso pero más fiable para usuarios recreativos que pueden no mantener los mecanismos automáticos.',
      ai_faq: [
        {
          q: '¿Este chaleco es adecuado para niños?',
          a: 'Sí, hay tallas infantiles disponibles. Certificado CE 12402 para los rangos de peso especificados.',
        },
        {
          q: '¿Requiere mantenimiento?',
          a: 'Mantenimiento mínimo. Enjuague con agua dulce después de su uso. Inspeccione las cámaras y correas antes de cada uso. Reemplácelo si está dañado.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'Chaleco Salvavidas Pro',
      desc: 'Chaleco salvavidas de grado profesional con reflectores SOLAS para operaciones en alta mar y rescate.',
      definition:
        'Un chaleco salvavidas profesional compatible con SOLAS con inflado automático para uso en alta mar, rescate y marina comercial.',
      problem:
        'Los marinos profesionales y el personal de rescate necesitan un chaleco que proporcione inflado automático, alta flotabilidad y visibilidad conforme a SOLAS para operaciones en alta mar.',
      howItWorks:
        'El Life Vest Pro utiliza un mecanismo de inflado hidrostático automático con un tubo de inflado manual de respaldo. Incluye cinta reflectante de grado SOLAS, capucha antirrociones, silbato, luz estanca y punto de anclaje para arnés de elevación.',
      audience:
        'Marinos comerciales, profesionales de rescate, trabajadores en alta mar y navegantes avanzados que necesitan chalecos automáticos compatibles con SOLAS.',
      ai_use_cases: [
        'Seguridad en operaciones marítimas en alta mar',
        'Respuesta profesional a emergencias y rescate',
        'Cumplimiento normativo marítimo comercial',
      ],
      ai_comparison:
        'En comparación con los chalecos rellenos de espuma, el Life Vest Pro se infla automáticamente para un volumen mínimo durante el uso normal. Requiere un servicio anual del mecanismo hidrostático y reemplazo de la batería.',
      ai_faq: [
        {
          q: '¿Cómo funciona el inflado automático?',
          a: 'Un disparador hidrostático se activa al sumergirse en agua a 0.5-1.0 metros de profundidad. También se incluye un tubo de inflado manual de respaldo.',
        },
        {
          q: '¿Cada cuánto necesita mantenimiento?',
          a: 'Se recomienda un servicio anual del mecanismo hidrostático. El cilindro de CO2 debe revisarse y reemplazarse según el programa del fabricante.',
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
      desc: 'Espaciosa tabla SUP hinchable de 3,6 m con suelo Air-Deck reforzado para recreación familiar y pesca.',
    },
    'sup-cheetah-surge': {
      name: 'Edición Cheetah Surge',
      desc: 'SUP versátil inspirado en la naturaleza salvaje con bloques EVA multicolor de alta precisión.',
    },
    'sup-leviathan-wake': {
      name: 'Serie Leviathan Wake (Edición Ballena)',
      desc: 'SUP versátil inspirado en el océano con un tótem de ballena azul y líneas de oleaje en blanco y negro.',
    },
    'sup-medusa-glow': {
      name: 'Serie Medusa Glow (Edición Medusa)',
      desc: 'SUP versátil inspirado en medusas con bloques EVA multicolor de alta precisión.',
    },
    'sup-ocean-pulse': {
      name: 'Serie Ocean Pulse',
      desc: 'SUP versátil inspirado en olas topográficas con impresión UV y gofrado mecánico de alta precisión.',
    },
    'sup-ocean-voyager': {
      name: 'Serie Ocean Voyager',
      desc: 'SUP versátil inspirado en la tortuga marina con bloques EVA multicolor de alta precisión.',
    },
    'sup-dolphin-wave': {
      name: 'Serie Dolphin Wave',
      desc: 'SUP versátil inspirado en delfines con bloques EVA CNC y serigrafía continua en los laterales.',
    },
    'sup-flowing-lotus': {
      name: 'Serie Flowing Lotus',
      desc: 'SUP versátil inspirado en el arte oriental con loto, koi y libélulas, y grabado láser EVA.',
    },
    'sup-jungle-mandala': {
      name: 'Serie Jungle Mandala',
      desc: 'SUP versátil inspirado en la selva tropical con mandala, grabado láser EVA y serigrafía en laterales.',
    },
    'sup-tropical-breeze': {
      name: 'Serie Tropical Breeze Island Escape',
      desc: 'SUP versátil inspirado en el paraíso tropical con ilustración de paisaje y bloques EVA abstractos.',
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
        'Il Gilet di Salvataggio Classic utilizza camere di galleggiamento riempite di schiuma con cinghie regolabili al petto e ai fianchi per una vestibilità sicura. È disponibile in più taglie e include fischietto, strisce riflettenti e maniglia di salvataggio.',
      audience:
        'Canottieri ricreativi, diportisti, pescatori e principianti degli sport acquatici che necessitano di galleggiamento certificato CE per laghi, fiumi e acque costiere.',
      ai_use_cases: [
        'Sicurezza negli sport acquatici ricreativi',
        'Galleggiamento per allenamento e supervisione',
        'Attività acquatiche familiari',
      ],
      ai_comparison:
        'Rispetto ai giubbotti di salvataggio gonfiabili automatici, il Classic fornisce galleggiamento costante senza necessità di attivazione. È più ingombrante ma più affidabile per gli utenti ricreativi che potrebbero non mantenere i meccanismi automatici.',
      ai_faq: [
        {
          q: 'Questo giubbotto è adatto ai bambini?',
          a: 'Sì, sono disponibili taglie per bambini. Certificato CE e  per le fasce di peso specificate.',
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
        'I marittimi professionisti e il personale di soccorso hanno bisogno di un giubbotto che fornisca gonfiaggio automatico, alta galleggiabilità e visibilità conforme SOLAS per operazioni offshore.',
      howItWorks:
        'Il Gilet di Salvataggio Pro utilizza un meccanismo di gonfiaggio idrostatico automatico con un tubo di gonfiaggio manuale di riserva. Include nastro riflettente di grado SOLAS, cappuccio paraschizzi, fischietto, luce stagna e punto di attacco per imbracatura di sollevamento.',
      audience:
        'Marittimi commerciali, professionisti del soccorso, lavoratori offshore e diportisti avanzati che necessitano di giubbotti automatici conformi SOLAS.',
      ai_use_cases: [
        'Sicurezza nelle operazioni marittime offshore',
        'Risposta professionale a emergenze e soccorso',
        'Conformità normativa marittima commerciale',
      ],
      ai_comparison:
        "Rispetto ai giubbotti riempiti di schiuma, il Gilet di Salvataggio Pro si auto-gonfia per un ingombro minimo durante l'uso normale. Richiede una manutenzione annuale del meccanismo idrostatico e la sostituzione della batteria.",
      ai_faq: [
        {
          q: 'Come funziona il gonfiaggio automatico?',
          a: 'Un attivatore idrostatico si attiva quando immerso in acqua a 0.5-1.0 metri di profondità. È inoltre fornito un tubo di gonfiaggio manuale di riserva.',
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
      desc: 'Tavola SUP gonfiabile multiuso con stabilità a corpo largo per principianti e pagaiatori intermedi.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Spaziosa tavola SUP gonfiabile da 3,6 m con pavimento Air-Deck rinforzato per ricreazione familiare e pesca.',
    },
    'sup-cheetah-surge': {
      name: 'Edizione Cheetah Surge',
      desc: 'Tavola SUP multiuso ispirata alla natura selvaggia con mosaico EVA multicolore.',
    },
    'sup-leviathan-wake': {
      name: 'Serie Leviathan Wake (Edizione Balena)',
      desc: "Tavola SUP multiuso ispirata all'oceano con totem di balenottera azzurra.",
    },
    'sup-medusa-glow': {
      name: 'Serie Medusa Glow (Edizione Medusa)',
      desc: 'Tavola SUP multiuso ispirata alla medusa con mosaico EVA multicolore premium.',
    },
    'sup-ocean-pulse': {
      name: 'Serie Ocean Pulse',
      desc: 'Tavola SUP multiuso ispirata alle onde topografiche con stampa UV.',
    },
    'sup-ocean-voyager': {
      name: 'Serie Ocean Voyager',
      desc: 'Tavola SUP multiuso ispirata alla tartaruga marina con mosaico EVA.',
    },
    'sup-dolphin-wave': {
      name: 'Serie Dolphin Wave',
      desc: 'Tavola SUP multiuso ispirata al delfino con blocchi EVA tagliati CNC.',
    },
    'sup-flowing-lotus': {
      name: 'Serie Flowing Lotus',
      desc: "Tavola SUP multiuso ispirata all'arte orientale con incisione laser EVA.",
    },
    'sup-jungle-mandala': {
      name: 'Serie Jungle Mandala',
      desc: 'Tavola SUP multiuso ispirata alla foresta pluviale tropicale mandala con incisione laser EVA a doppio strato.',
    },
    'sup-tropical-breeze': {
      name: 'Serie Tropical Breeze Island Escape',
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
      desc: 'Uniwersalna kamizelka wypornościowa do rekreacyjnych sportów wodnych. Certyfikat CE i ISO.',
      definition:
        'Uniwersalna kamizelka wypornościowa z certyfikatem CE i ISO do rekreacyjnych sportów wodnych we wszystkich środowiskach wodnych.',
      problem:
        'Uczestnicy sportów wodnych na każdym poziomie zaawansowania potrzebują niezawodnej, wygodnej kamizelki asekuracyjnej spełniającej międzynarodowe normy bezpieczeństwa bez ograniczania ruchów.',
      howItWorks:
        'Kamizelka Asekuracyjna Classic wykorzystuje wypełnione pianką komory wypornościowe z regulowanymi pasami piersiowymi i bocznymi dla bezpiecznego dopasowania. Dostępna w wielu rozmiarach i zawiera gwizdek, paski odblaskowe i uchwyt ratunkowy.',
      audience:
        'Rekreacyjni wioślarze, żeglarze, wędkarze i początkujący w sportach wodnych potrzebujący certyfikowanej CE wyporności na jeziora, rzeki i wody przybrzeżne.',
      ai_use_cases: [
        'Bezpieczeństwo rekreacyjnych sportów wodnych',
        'Wyporność do treningu i nadzoru',
        'Rodzinne aktywności wodne',
      ],
      ai_comparison:
        'W porównaniu do automatycznych nadmuchiwanych kamizelek asekuracyjnych, Classic zapewnia stałą wyporność bez konieczności aktywacji. Jest bardziej masywna, ale bardziej niezawodna dla użytkowników rekreacyjnych, którzy mogą nie serwisować automatycznych mechanizmów.',
      ai_faq: [
        {
          q: 'Czy ta kamizelka nadaje się dla dzieci?',
          a: 'Tak, dostępne są rozmiary dziecięce. Certyfikat CE i  dla określonych zakresów wagowych.',
        },
        {
          q: 'Czy wymaga konserwacji?',
          a: 'Minimalna konserwacja. Opłukać słodką wodą po użyciu. Sprawdzać komory i pasy przed każdym użyciem. Wymienić w przypadku uszkodzenia.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'Kamizelka Asekuracyjna Pro',
      desc: 'Profesjonalna kamizelka asekuracyjna z reflektorami SOLAS do operacji pełnomorskich i ratowniczych.',
      definition:
        'Profesjonalna kamizelka asekuracyjna zgodna z SOLAS z automatycznym nadmuchem do użytku pełnomorskiego, ratowniczego i komercyjnego.',
      problem:
        'Profesjonalni marynarze i ratownicy potrzebują kamizelki zapewniającej automatyczny nadmuch, wysoką wyporność i widoczność zgodną z SOLAS do operacji na pełnym morzu.',
      howItWorks:
        'Kamizelka Asekuracyjna Pro wykorzystuje automatyczny hydrostatyczny mechanizm nadmuchu z zapasową ręczną rurką do nadmuchu. Zawiera taśmę odblaskową klasy SOLAS, kaptur przeciwbryzgowy, gwizdek, wodoodporne światło i punkt mocowania uprzęży ratunkowej.',
      audience:
        'Komercyjni marynarze, profesjonaliści ratownictwa, pracownicy offshore i zaawansowani żeglarze potrzebujący automatycznych kamizelek zgodnych z SOLAS.',
      ai_use_cases: [
        'Bezpieczeństwo operacji morskich offshore',
        'Profesjonalne ratownictwo i reagowanie kryzysowe',
        'Zgodność z przepisami morskimi',
      ],
      ai_comparison:
        'W porównaniu do kamizelek wypełnionych pianką, Kamizelka Asekuracyjna Pro nadmuchuje się automatycznie, zapewniając minimalną objętość podczas normalnego noszenia. Wymaga corocznego serwisowania mechanizmu hydrostatycznego i wymiany baterii.',
      ai_faq: [
        {
          q: 'Jak działa automatyczny nadmuch?',
          a: 'Hydrostatyczny wyzwalacz aktywuje się po zanurzeniu w wodzie na głębokość 0.5-1.0 metra. Dostępna jest również zapasowa ręczna rurka do nadmuchu.',
        },
        {
          q: 'Jak często wymaga serwisowania?',
          a: 'Zalecany jest coroczny serwis mechanizmu hydrostatycznego. Butla CO2 powinna być sprawdzana i wymieniana zgodnie z harmonogramem producenta.',
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
      name: 'Edycja Cheetah Surge',
      desc: 'SUP uniwersalny inspirowany dziką przyrodą z wielokolorowym EVA block piecing.',
    },
    'sup-leviathan-wake': {
      name: 'Seria Leviathan Wake (Edycja Wieloryb)',
      desc: 'SUP uniwersalny inspirowany oceanem z totemem błękitnego wieloryba i czarno-białymi liniami fal.',
    },
    'sup-medusa-glow': {
      name: 'Seria Medusa Glow (Edycja Meduza)',
      desc: 'SUP uniwersalny inspirowany meduzami z wielokolorowym EVA block piecing.',
    },
    'sup-ocean-pulse': {
      name: 'Seria Ocean Pulse',
      desc: 'SUP uniwersalny inspirowany topograficznymi falami z drukiem UV i tłoczeniem mechanicznym.',
    },
    'sup-ocean-voyager': {
      name: 'Seria Ocean Voyager',
      desc: 'SUP uniwersalny inspirowany żółwiem morskim z wielokolorowym EVA block piecing.',
    },
    'sup-dolphin-wave': {
      name: 'Seria Dolphin Wave',
      desc: 'SUP uniwersalny inspirowany delfinami z CNC EVA color-block splicing i sitodrukiem na krawędziach.',
    },
    'sup-flowing-lotus': {
      name: 'Seria Flowing Lotus',
      desc: 'SUP uniwersalny inspirowany sztuką wschodnią z lotosem, koi i ważkami, z grawerowaną laserowo EVA.',
    },
    'sup-jungle-mandala': {
      name: 'Seria Jungle Mandala',
      desc: 'SUP uniwersalny inspirowany tropikalnym lasem z mandalą, grawerowaną laserowo EVA i sitodrukiem.',
    },
    'sup-tropical-breeze': {
      name: 'Seria Tropical Breeze Island Escape',
      desc: 'SUP uniwersalny inspirowany tropikalnym rajem z ilustracją krajobrazu i abstrakcyjnym EVA.',
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
  ru: {
    'life-vest-classic': {
      name: 'Спасательный жилет Classic',
      desc: 'Универсальное средство плавучести для водных видов спорта. Сертифицировано CE и ISO.',
      definition:
        'Универсальное средство плавучести с сертификацией CE и ISO для рекреационных водных видов спорта во всех водных средах.',
      problem:
        'Участники водных видов спорта любого уровня подготовки нуждаются в надёжном и удобном спасательном жилете, соответствующем международным стандартам безопасности и не ограничивающем движения.',
      howItWorks:
        'Спасательный жилет Classic использует пенонаполненные камеры плавучести с регулируемыми грудными и боковыми ремнями для надёжной фиксации. Доступен в нескольких размерах и включает свисток, светоотражающие полосы и спасательную ручку.',
      audience:
        'Любители гребли, лодочники, рыболовы и новички в водных видах спорта, нуждающиеся в сертифицированном CE средстве плавучести для озёр, рек и прибрежных вод.',
      ai_use_cases: [
        'Безопасность рекреационных водных видов спорта',
        'Средство плавучести для обучения и наблюдения',
        'Семейные водные развлечения',
      ],
      ai_comparison:
        'По сравнению с автоматическими надувными спасательными жилетами, Classic обеспечивает постоянную плавучесть без необходимости активации. Он более громоздкий, но более надёжный для любителей, которые могут не обслуживать автоматические механизмы.',
      ai_faq: [
        {
          q: 'Подходит ли этот спасательный жилет для детей?',
          a: 'Да, доступны детские размеры. Сертифицирован CE и  для указанных диапазонов веса.',
        },
        {
          q: 'Требуется ли обслуживание?',
          a: 'Минимальное обслуживание. Промывайте пресной водой после использования. Проверяйте камеры и ремни перед каждым использованием. При повреждении замените.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'Спасательный жилет Pro',
      desc: 'Профессиональный спасательный жилет с SOLAS-отражателями для offshore и спасательных операций.',
      definition:
        'Профессиональный спасательный жилет, соответствующий SOLAS, с автоматическим надуванием для offshore, спасательных и коммерческих морских целей.',
      problem:
        'Профессиональные моряки и спасатели нуждаются в спасательном жилете, обеспечивающем автоматическое надувание, высокую плавучесть и видимость по стандарту SOLAS для offshore-операций.',
      howItWorks:
        'Спасательный жилет Pro использует автоматический гидростатический механизм надувания с ручной трубкой для резервного надувания. Включает светоотражающую ленту SOLAS-класса, защитный капюшон, свисток, водонепроницаемый фонарь и точку крепления подъёмной стропы.',
      audience:
        'Коммерческие моряки, профессиональные спасатели, работники offshore и опытные лодочники, нуждающиеся в автоматических спасательных жилетах, соответствующих SOLAS.',
      ai_use_cases: [
        'Безопасность морских offshore-операций',
        'Профессиональное спасение и экстренное реагирование',
        'Соблюдение коммерческих морских требований',
      ],
      ai_comparison:
        'По сравнению с пенонаполненными спасательными жилетами, Pro автоматически надувается, обеспечивая минимальный объём при ношении. Требует ежегодного обслуживания гидростатического механизма и замены батареи.',
      ai_faq: [
        {
          q: 'Как работает автоматическое надувание?',
          a: 'Гидростатический триггер активируется при погружении в воду на глубину 0,5-1,0 метра. Также предусмотрена ручная трубка для резервного надувания.',
        },
        {
          q: 'Как часто требуется обслуживание?',
          a: 'Рекомендуется ежегодное обслуживание гидростатического механизма. Баллон с CO2 следует проверять и заменять по графику производителя.',
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
      name: 'Издание Cheetah Surge',
      desc: 'Вдохновленная дикой природой универсальная SUP-доска с многоцветным EVA-мозаичным рисунком.',
    },
    'sup-leviathan-wake': {
      name: 'Серия Leviathan Wake (издание Кит)',
      desc: 'Вдохновленная океаном универсальная SUP-доска с тотемом синего кита.',
    },
    'sup-medusa-glow': {
      name: 'Серия Medusa Glow (издание Медуза)',
      desc: 'Медуза-вдохновленная универсальная SUP-доска с премиум многоцветной EVA-мозаикой.',
    },
    'sup-ocean-pulse': {
      name: 'Серия Ocean Pulse',
      desc: 'Топографическая волна-вдохновленная универсальная SUP-доска с УФ-печатью.',
    },
    'sup-ocean-voyager': {
      name: 'Серия Ocean Voyager',
      desc: 'Вдохновленная морской черепахой универсальная SUP-доска с EVA-мозаикой.',
    },
    'sup-dolphin-wave': {
      name: 'Серия Dolphin Wave',
      desc: 'Вдохновленная дельфином универсальная SUP-доска с CNC-резаными EVA-блоками.',
    },
    'sup-flowing-lotus': {
      name: 'Серия Flowing Lotus',
      desc: 'Вдохновленная восточным искусством универсальная SUP-доска с лазерной гравировкой EVA.',
    },
    'sup-jungle-mandala': {
      name: 'Серия Jungle Mandala',
      desc: 'Вдохновленная тропическим лесом мандала универсальная SUP-доска с двухслойной лазерной гравировкой EVA.',
    },
    'sup-tropical-breeze': {
      name: 'Серия Tropical Breeze Island Escape',
      desc: 'Вдохновленная райским островом универсальная SUP-доска с микроландшафтной иллюстрацией.',
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
      name: 'سترة النجاة كلاسيك',
      desc: 'أداة طفو عالمية للرياضات المائية الترفيهية. حاصلة على شهادات CE و ISO.',
      definition: 'أداة طفو عالمية حاصلة على شهادات CE و ISO للرياضات المائية الترفيهية في جميع البيئات المائية.',
      problem:
        'يحتاج المشاركون في الرياضات المائية من جميع المستويات إلى سترة نجاة مريحة وموثوقة تلبي معايير السلامة الدولية دون تقييد الحركة.',
      howItWorks:
        'تستخدم سترة النجاة كلاسيك حجرات طفو مملوءة بالرغوة مع أحزمة صدر وجانب قابلة للتعديل لملاءمة آمنة. متوفرة بعدة مقاسات وتتضمن صافرة، أشرطة عاكسة، ومقبض إنقاذ.',
      audience:
        'المجدفون الترفيهيون وقائدي القوارب والصيادون ومبتدئو الرياضات المائية الذين يحتاجون إلى طفو معتمد من CE للبحيرات والأنهار والمياه الساحلية.',
      ai_use_cases: ['سلامة الرياضات المائية الترفيهية', 'طفو التدريب والإشراف', 'الأنشطة المائية العائلية'],
      ai_comparison:
        'مقارنة بسترات النجاة الأوتوماتيكية القابلة للنفخ، توفر سترة النجاة كلاسيك طفوًا ثابتًا دون الحاجة إلى تفعيل. إنها أكبر حجمًا لكنها أكثر موثوقية للمستخدمين الترفيهيين الذين قد لا يصونون الآليات الأوتوماتيكية.',
      ai_faq: [
        {
          q: 'هل سترة النجاة هذه مناسبة للأطفال؟',
          a: 'نعم، المقاسات الأطفال متوفرة. معتمدة من CE و  لنطاقات الوزن المحددة.',
        },
        {
          q: 'هل تحتاج إلى صيانة؟',
          a: 'صيانة بسيطة. اشطف بالماء العذب بعد الاستخدام. افحص الحجرات والأحزمة قبل كل استخدام. استبدل في حالة التلف.',
        },
      ],
    },
    'life-vest-pro': {
      name: 'سترة النجاة برو',
      desc: 'سترة نجاة بدرجة احترافية مع عاكسات SOLAS للعمليات البحرية والإنقاذ.',
      definition: 'سترة نجاة بدرجة احترافية متوافقة مع SOLAS مع نفخ تلقائي للاستخدام البحري والإنقاذ والتجاري.',
      problem:
        'يحتاج البحارة المحترفون وموظفو الإنقاذ إلى سترة نجاة توفر نفخًا تلقائيًا وطفوًا عاليًا ورؤية متوافقة مع SOLAS للعمليات البحرية.',
      howItWorks:
        'تستخدم سترة النجاة برو آلية نفخ هيدروستاتيكية تلقائية مع أنبوب نفخ يدوي احتياطي. تتضمن شريط عاكس من فئة SOLAS، غطاء رذاذ، صافرة، ضوء مقاوم للماء، ونقطة ربط حزام الرفع.',
      audience:
        'البحارة التجاريون ومحترفو الإنقاذ والعاملون البحريون وقائدي القوارب المتقدمون الذين يحتاجون إلى سترات نجاة تلقائية متوافقة مع SOLAS.',
      ai_use_cases: ['سلامة العمليات البحرية', 'الاستجابة المهنية للإنقاذ والطوارئ', 'الامتثال البحري التجاري'],
      ai_comparison:
        'مقارنة بسترات النجاة المملوءة بالرغوة، تنفخ سترة النجاة برو تلقائيًا لحجم ضئيل أثناء الارتداء العادي. تتطلب صيانة سنوية للآلية الهيدروستاتيكية واستبدال البطارية.',
      ai_faq: [
        {
          q: 'كيف يعمل النفخ التلقائي؟',
          a: 'مشغل هيدروستاتيكي يُفعّل عند الغمر في الماء على عمق 0.5-1.0 متر. يتم توفير أنبوب نفخ يدوي احتياطي أيضًا.',
        },
        {
          q: 'كم مرة تحتاج إلى صيانة؟',
          a: 'يوصى بالصيانة السنوية للآلية الهيدروستاتيكية. يجب فحص أسطوانة CO2 واستبدالها وفقًا لجدول الشركة المصنعة.',
        },
      ],
    },

    'oars-pump-set': {
      name: 'طقم مجاديف ومضخة',
      desc: 'زوج من المجاديف الألومنيوم بطول 1.6 متر ومضخة قدم 5 لتر للقوارب القابلة للنفخ.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'لوح SUP قابل للنفخ متعدد الاستخدامات مع ثبات الجسم العريض للمبتدئين والتجديفين متوسطي المستوى.',
    },
    'airdeck-360': {
      name: 'AirDeck 360',
      desc: 'Spacious 3.6 m inflatable SUP board with reinforced air-deck floor for family recreation and fishing.',
    },
    'sup-cheetah-surge': {
      name: 'إصدار شيتاه سيرج',
      desc: 'لوح SUP متعدد الاستخدامات مستوحى من الطبيعة البرية مع تركيب مقاطع EVA متعددة الألوان فائقة الجودة بزخرفة الفهد باللون الوردي الباستيل والأزرق المخضر والمرجاني.',
    },
    'sup-leviathan-wake': {
      name: 'سلسلة ليفياثان ويك (إصدار الحوت)',
      desc: 'لوح SUP متعدد الاستخدامات مستوحى من المحيط يضم رمز الحوت الأزرق المهيب بأنماط هندسية وقبلية مع خطوط تمدد بالأبيض والأسود.',
    },
    'sup-medusa-glow': {
      name: 'سلسلة ميدوزا غلو (إصدار قنديل البحر)',
      desc: 'لوح SUP متعدد الاستخدامات حالم مستوحى من قنديل البحر مع تركيب مقاطع EVA متعددة الألوان فائقة الجودة ونجوم البحر وفن الشعاب المرجانية بالأخضر النعناعي المنعش.',
    },
    'sup-ocean-pulse': {
      name: 'سلسلة أوشن بلس',
      desc: 'لوح SUP متعدد الاستخدامات مستوحى من الأمواج الطبوغرافية بحدود بلون تيفاني بلو ونقش ميكانيكي عالي الدقة وطقم إكسسوارات جمالي موحد.',
    },
    'sup-ocean-voyager': {
      name: 'سلسلة أوشن فوياجر',
      desc: 'لوح SUP متعدد الاستخدامات مستوحى من السلاحف البحرية مع تركيب مقاطع EVA متعددة الألوان فائقة الجودة بالأزرق المخضر العميق والفيروزي والبرتقالي المرجاني.',
    },
    'sup-dolphin-wave': {
      name: 'سلسلة دولفين ويف',
      desc: 'لوح SUP متعدد الاستخدامات مستوحى من الدلافين بأمواج زرقاء من العصور الوسطى وتركيب مقاطع ألوان EVA عالي الدقة وجماليات الحافة البحرية بزاوية 360 درجة.',
    },
    'sup-flowing-lotus': {
      name: 'سلسلة فلوينج لوتس',
      desc: 'لوح SUP متعدد الاستخدامات مستوحى من الفن الشرقي بزخارف اللوتس والكوي ويعسوب، مع وسادة ثبات محفورة بالليزر وفن تدفق المياه المتدرج.',
    },
    'sup-jungle-mandala': {
      name: 'سلسلة جنجل ماندالا',
      desc: 'لوح SUP متعدد الاستخدامات مستوحى من الغابة المطيرة والماندالا بزهور الكركديه وطيور الطنان ورموز هندسية متناظرة باللونين تيفاني بلو والبرتقالي المرجاني.',
    },
    'sup-tropical-breeze': {
      name: 'سلسلة تروبيكال بريز آيلاند إسكيب',
      desc: 'لوح SUP متعدد الاستخدامات مستوحى من جنة الجزيرة بلوحة كاملة لعطلة الجزيرة مع أشعة الشمس وبساتين جوز الهند ومشاهد الشاطئ.',
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
      name: 'Flytväst Classic',
      desc: 'Universell flythjälp för fritidsvattenaktiviteter. CE-certifierad.',
    },
    'life-vest-pro': {
      name: 'Flytväst Pro',
      desc: 'Professionell flytväst med SOLAS-reflektorer för offshore- och räddningsinsatser.',
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
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Mångsidigt uppblåsbart allround-SUP med bred kroppsstabilitet för nybörjare och medelavancerade paddlare.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge-utgåvan',
      desc: 'Vildmarksinspirerat allround-SUP med premiummonterade flersfärgade EVA-block och gepardmotiv i pastellrosa, blågrönt och korall.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake-serien (Val-utgåvan)',
      desc: 'Havsinspirerat allround-SUP med majestätiskt blåvalstotem i geometriska och tribala mönster, kombinerat med svartvita svallinjer.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow-serien (Manet-utgåvan)',
      desc: 'Drömskt manetinspirerat allround-SUP med premiummonterade flersfärgade EVA-block, sjöstjärnor och korallrevskonst i frisk myntgrön.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse-serien',
      desc: 'Topografiskt våginspirerat allround-SUP med Tiffany Blue-konturer, högprecisionsembossning och enhetligt estetiskt tillbehörskit.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager-serien',
      desc: 'Havssköldpaddsinspirerat allround-SUP med premiummonterade flersfärgade EVA-block i djup blågrön, turkos och korallorange.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave-serien',
      desc: 'Delfininspirerat allround-SUP med medeltida blå vågor, högpreciserad EVA-färgblocksmontering och 360-graders marina rail-estetik.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus-serien',
      desc: 'Österländskt konstinspirerat allround-SUP med lotos-, koi- och trollsländemotiv, lasergraverad tractionpad och gradient vattenflödeskonst.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala-serien',
      desc: 'Tropiskt regnskogs- och mandalainspirerat allround-SUP med hibiskus, kolibrier och symmetriska geometriska totem i Tiffany Blue och korallorange.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape-serien',
      desc: 'Paradisöinspirerat allround-SUP med en komplett ösemester-canvas med solsken, kokoslundar och badstränder.',
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
    'life-vest-classic': {
      name: 'Reddingsvest Classic',
      desc: 'Universeel drijfvermogen voor recreatieve watersport. CE-gecertificeerd.',
    },
    'life-vest-pro': {
      name: 'Reddingsvest Pro',
      desc: 'Professioneel reddingsvest met SOLAS-reflectoren voor offshore- en reddingsoperaties.',
    },
    'oars-pump-set': {
      name: 'Roeiriemen & Pomp Set',
      desc: 'Set van twee aluminium roeiriemen van 1,6 m en een 5L voetpomp met hoog debiet voor opblaasbare watersport.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Veelzijdig opblaasbaar allround-SUP met brede romp voor stabiliteit, voor beginners en middelgevorderde paddelaars.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge-editie',
      desc: 'Door de wilde natuur geïnspireerd allround-SUP met premium meerkleurige EVA-blokvormgeving en cheetahmotief in pastelroze, teal en koraal.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake-serie (Wal-editie)',
      desc: 'Door de oceaan geïnspireerd allround-SUP met majestueus blauwe walvistotem, geometrische en tribale patronen, gecombineerd met zwart-witte deininglijnen.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow-serie (Kwal-editie)',
      desc: 'Dromerig door kwallen geïnspireerd allround-SUP met premium meerkleurige EVA-blokvormgeving, zeesterren en koraalrifkunst in verfrissend mintgroen.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse-serie',
      desc: 'Door topografische golven geïnspireerd allround-SUP met Tiffany Blue contouren, hoogwaardige mechanische embossing en een uniform esthetisch accessoirekit.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager-serie',
      desc: 'Door zeeschildpadden geïnspireerd allround-SUP met premium meerkleurige EVA-blokvormgeving in diep teal, turquoise en koraaloranje.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave-serie',
      desc: 'Door dolfijnen geïnspireerd allround-SUP met middeleeuwse blauwe golven, hoogprecieze EVA-kleurblokvormgeving en 360-graden maritieme rail-esthetiek.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus-serie',
      desc: 'Door oosterse kunst geïnspireerd allround-SUP met lotus-, koi- en libellemotieven, laser gegraveerd tractionpad en gradiënt waterstromingskunst.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala-serie',
      desc: 'Door tropisch regenwoud en mandala geïnspireerd allround-SUP met hibiscus, kolibries en symmetrische geometrische totems in Tiffany Blue en koraaloranje.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape-serie',
      desc: 'Door eilandparadijzen geïnspireerd allround-SUP met een compleet eilandvakantie-canvas met zonneschijn, kokosplantages en strandtaferelen.',
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
    'life-vest-classic': {
      name: 'Redningsvest Classic',
      desc: 'Universell flytehjelp for rekreasjonell vannsport. CE-sertifisert.',
    },
    'life-vest-pro': {
      name: 'Redningsvest Pro',
      desc: 'Profesjonell redningsvest med SOLAS-reflektorer for offshore- og redningsoperasjoner.',
    },
    'oars-pump-set': {
      name: 'Årer & Pompesett',
      desc: 'Et par 1,6 m aluminiumsårer og en 5L fotpumpe med høy kapasitet for oppblåsbar vannsport.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Allsidig oppblåsbar allround-SUP med bred kroppsstabilitet for nybegynnere og mellomnivå padlere.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge-utgaven',
      desc: 'Villmarksinspirert allround-SUP med premium flerfarget EVA-blokksammensetting og gepardmotiv i pastellrosa, petroleumsblå og korall.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake-serien (Hval-utgaven)',
      desc: 'Havinspirert allround-SUP med majestetisk blåhval-totem i geometriske og tribale mønstre, kombinert med sort-hvite bølgelinjer.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow-serien (Manet-utgaven)',
      desc: 'Drømmeaktig manetinspirert allround-SUP med premium flerfarget EVA-blokksammensetting, sjøstjerner og korallrev-kunst i forfriskende myntgrønn.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse-serien',
      desc: 'Topografisk bølgeinspirert allround-SUP med Tiffany Blue-konturer, mekanisk preging med høy presisjon og enhetlig estetisk tilbehørspakke.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager-serien',
      desc: 'Havskilpaddeinspirert allround-SUP med premium flerfarget EVA-blokksammensetting i dyp petrol, turkis og koralloransje.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave-serien',
      desc: 'Delfininspirert allround-SUP med middelalderske blå bølger, EVA-fargeblokksammensetting med høy presisjon og 360-graders maritim rail-estetikk.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus-serien',
      desc: 'Østlig kunstinspirert allround-SUP med lotus-, koi- og libellemotiver, lasergravert grippute og gradient vannstrømskunst.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala-serien',
      desc: 'Tropisk regnskog- og mandalainspirert allround-SUP med hibiskus, kolibrier og symmetriske geometriske totemer i Tiffany Blue og koralloransje.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape-serien',
      desc: 'Øyparadisinspirert allround-SUP med et komplett øyferie-canvas med solskinn, kokospalmer og strandscener.',
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
    'life-vest-classic': {
      name: 'Σωσίβιο Classic',
      desc: 'Καθολική βοήθηση πλευστότητας για ψυχαγωγικά θαλάσσια σπορ. Πιστοποιημένο CE.',
    },
    'life-vest-pro': {
      name: 'Σωσίβιο Pro',
      desc: 'Επαγγελματικό σωσίβιο με ανακλαστικά SOLAS για επιχειρήσεις ανοιχτής θάλασσας και διάσωσης.',
    },
    'oars-pump-set': {
      name: 'Σετ Κουπιά & Αντλία',
      desc: 'Ζεύγος αλουμινένιων κουπιών 1,6 μ. και αντλία ποδιού 5L υψηλής ροής για φουσκωτά θαλάσσια σπορ.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Εύκαμπτο φουσκωτό SUP all-around με σταθερότητα πλατιάς κατασκευής για αρχάριους και μεσαίου επιπέδου κωπηλάτες.',
    },
    'sup-cheetah-surge': {
      name: 'Έκδοση Cheetah Surge',
      desc: 'SUP all-around εμπνευσμένο από την άγρια φύση με premium πολύχρωμο μωσαϊκό μπλοκ EVA και μοτίβο γατόπαρδος σε παστελ ροζ, τιρκουάζ και κοράλλι.',
    },
    'sup-leviathan-wake': {
      name: 'Σειρά Leviathan Wake (Έκδοση Φάλαινα)',
      desc: 'SUP all-around εμπνευσμένο από τον ωκεανό με μεγαλόπρεπο τοτέμ γαλάζιας φάλαινας με γεωμετρικά και τοπικά μοτίβα, μαζί με μαύρο-λευκές γραμμές κυματισμού.',
    },
    'sup-medusa-glow': {
      name: 'Σειρά Medusa Glow (Έκδοση Τσούχτρα)',
      desc: 'Ονειρικό SUP all-around εμπνευσμένο από τσούχτρα με premium πολύχρωμο μωσαϊκό μπλοκ EVA, αστερίες και τέχνη κοραλλιογενούς υφάλου σε δροσερό μέντα πράσινο.',
    },
    'sup-ocean-pulse': {
      name: 'Σειρά Ocean Pulse',
      desc: 'SUP all-around εμπνευσμένο από τοπογραφικά κύματα με περιγράμματα Tiffany Blue, μηχανική εμβάθυνση υψηλής ακρίβειας και ενιαίο αισθητικό κιτ αξεσουάρ.',
    },
    'sup-ocean-voyager': {
      name: 'Σειρά Ocean Voyager',
      desc: 'SUP all-around εμπνευσμένο από θαλάσσια χελώνα με premium πολύχρωμο μωσαϊκό μπλοκ EVA σε βαθύ τιρκουάζ, τυρκουάζ και πορτοκαλί κοραλλιού.',
    },
    'sup-dolphin-wave': {
      name: 'Σειρά Dolphin Wave',
      desc: 'SUP all-around εμπνευσμένο από δελφίνι με μεσαιωνικά γαλάζια κύματα, συναρμολόγηση χρωματιστών μπλοκ EVA υψηλής ακρίβειας και αισθητική θαλάσσιας τρόπιδας 360 μοιρών.',
    },
    'sup-flowing-lotus': {
      name: 'Σειρά Flowing Lotus',
      desc: 'SUP all-around εμπνευσμένο από ανατολική τέχνη με μοτίβα λωτού, koi και λιβελούλης, με pad πρόσφυσης χαραγμένο με λέιζερ και τέχνη διαβαθμισμένης ροής νερού.',
    },
    'sup-jungle-mandala': {
      name: 'Σειρά Jungle Mandala',
      desc: 'SUP all-around εμπνευσμένο από τροπικό δάσος και μάνταλα με ιβίσκο, κολιμπρί και συμμετρικά γεωμετρικά τοτέμ σε Tiffany Blue και πορτοκαλί κοραλλιού.',
    },
    'sup-tropical-breeze': {
      name: 'Σειρά Tropical Breeze Island Escape',
      desc: 'SUP all-around εμπνευσμένο από νησιωτικό παράδεισο με έναν ολοκληρωμένο καμβά νησιωτικών διακοπών με ηλιοφάνεια, κοκοφοίνικες και σκηνές παραλίας.',
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
    'life-vest-classic': {
      name: 'Can Yeleği Classic',
      desc: 'Rekreasyonel su sporları için evrensel yüzdürme yardımı. CE sertifikalı.',
    },
    'life-vest-pro': {
      name: 'Can Yeleği Pro',
      desc: 'Açık deniz ve kurtarma operasyonları için SOLAS yansıtıcılara sahip profesyonel can yeleği.',
    },
    'oars-pump-set': {
      name: 'Kürek & Pompa Seti',
      desc: 'Şişme su sporları için 1,6 m alüminyum kürek çifti ve 5L yüksek akışlı ayak pompası.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Yeni başlayanlar ve orta seviye kürekçiler için geniş gövde stabilitesine sahip çok amaçlı şişme all-around SUP.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge Sürümü',
      desc: 'Pastel pembe, turkuaz ve mercan renklerinde çita desenli, premium çok renkli EVA blok işlemeli, doğadan ilham alan all-around SUP.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake Serisi (Balina Sürümü)',
      desc: 'Geometrik ve kabile desenleriyle birlikte görkemli mavi balina totemi ve siyah-beyaz dalga çizgileri eşliğinde okyanustan ilham alan all-around SUP.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow Serisi (Denizanası Sürümü)',
      desc: 'Premium çok renkli EVA blok işlemesi, deniz yıldızları ve mercan resifi sanatıyla renklendirilen, denizanasından ilham alan rüya gibi all-around SUP.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse Serisi',
      desc: 'Tiffany Blue konturlar, yüksek hassasiyetli mekanik kabartma ve birleşik estetik aksesuar kitine sahip, topografik dalgalardan ilham alan all-around SUP.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager Serisi',
      desc: 'Derin turkuaz, cam göbeği ve mercan turuncusu renklerinde premium çok renkli EVA blok işlemeli, deniz kaplumbağasından ilham alan all-around SUP.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave Serisi',
      desc: 'Orta çağ mavi dalgaları, yüksek hassasiyetli EVA renk bloğu birleştirme ve 360 derece deniz kenarı estetiğine sahip, yunustan ilham alan all-around SUP.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus Serisi',
      desc: 'Nilüfer, koi ve kızböceği motifleriyle birlikte lazer kazımalı kaymaz ped ve degrade su akışı sanatına sahip, doğu sanatından ilham alan all-around SUP.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala Serisi',
      desc: 'Hibiskus, sinek kuşları ve simetrik geometrik totemlerle Tiffany Blue ve Mercan Turuncusu renklerinde, tropik yağmur ormanı ve mandaladan ilham alan all-around SUP.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape Serisi',
      desc: 'Güneş ışığı, hindistan cevizi ağaçları ve plaj sahneleri içeren eksiksiz bir ada tatili tuvaliyle ada cennetinden ilham alan all-around SUP.',
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
    'life-vest-classic': {
      name: 'Pelastusliivi Classic',
      desc: 'Yleiskäyttöinen kelluke vapaa-ajan vesilajeihin. CE-sertifioitu.',
    },
    'life-vest-pro': {
      name: 'Pelastusliivi Pro',
      desc: 'Ammattilaistason pelastusliivi SOLAS-heijastimilla avomeri- ja pelastustehtäviin.',
    },
    'oars-pump-set': {
      name: 'Airo- ja pumppusetti',
      desc: 'Pari 1,6 m alumiuniairoa ja 5L suurivirtauksen jalkapumppu täytettäviin vesilajeihin.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Monipuolinen täytettävä all-around-SUP leveällä rungolla vakauteen aloittelijoille ja keskitason melojille.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge -painos',
      desc: 'Luonnosta inspiroitu all-around-SUP premium-monivärisellä EVA-palikkayhdistelmällä ja gepardikuviolla pastellinpinkissä, sinivihreässä ja koraalissa.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake -sarja (Valas-painos)',
      desc: 'Valtamerestä inspiroitu all-around-SUP majesteettisella sinivalastoteemilla geometrisin ja heimokuvioin sekä mustavalkoisin aaltolinjoin.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow -sarja (Meduusa-painos)',
      desc: 'Unenomaisen meduusasta inspiroitu all-around-SUP premium-monivärisellä EVA-palikkayhdistelmällä, meritähdillä ja koralliriuttataiteella raikkaassa mintunvihreässä.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse -sarja',
      desc: 'Topografisista aalloista inspiroitu all-around-SUP Tiffany Blue -ääriviivoilla, erittäin tarkalla mekaanisella kohokuvioinnilla ja yhtenäisellä esteettisellä tarvikesarjalla.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager -sarja',
      desc: 'Merikilpikonnasta inspiroitu all-around-SUP premium-monivärisellä EVA-palikkayhdistelmällä syvässä sinivihreässä, turkoosissa ja koraalinoranssissa.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave -sarja',
      desc: 'Delfiinistä inspiroitu all-around-SUP keskiaikaisilla sinisillä aalloilla, erittäin tarkalla EVA-väripalikkayhdistelmällä ja 360-asteisen merellisen reuna-estetiikalla.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus -sarja',
      desc: 'Itämaisesta taiteesta inspiroitu all-around-SUP lootus-, koi- ja sudenkorentomotiiveilla, laserkaiverretulla pitoalustalla ja liukuvärjätyllä vesivirtausgrafiikalla.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala -sarja',
      desc: 'Trooppisesta sademetsästä ja mandalasta inspiroitu all-around-SUP hibiskuksilla, kolibreilla ja symmetrisillä geometrisilla totemeilla Tiffany Bluessä ja koraalinoranssissa.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape -sarja',
      desc: 'Saaparatiisista inspiroitu all-around-SUP täydellisellä lomasaaren kankaalla: aurinkoa, kookospalmuja ja rantamaisemia.',
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
    'life-vest-classic': {
      name: 'Záchranná vesta Classic',
      desc: 'Univerzální plovací pomůcka pro rekreační vodní sporty. Certifikováno CE.',
    },
    'life-vest-pro': {
      name: 'Záchranná vesta Pro',
      desc: 'Profesionální záchranná vesta s reflexními prvky SOLAS pro offshore operace a záchranářské akce.',
    },
    'oars-pump-set': {
      name: 'Sada pádel a pumpy',
      desc: 'Pár 1,6m hliníkových pádel a 5L nožní pumpa s vysokým průtokem pro nafukovací vodní sporty.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Univerzální nafukovací all-around SUP se stabilitou širokého těla pro začátečníky a mírně pokročilé pádlující.',
    },
    'sup-cheetah-surge': {
      name: 'Edice Cheetah Surge',
      desc: 'All-around SUP inspirovaný divokou přírodou s prémiovou vícebarevnou EVA blokovou mozaikou a gepardím motivem v pastelově růžové, tyrkysové a korálové.',
    },
    'sup-leviathan-wake': {
      name: 'Řada Leviathan Wake (Edice Velryba)',
      desc: 'All-around SUP inspirovaný oceánem s majestátním totemem modré velryby s geometrickými a kmenovými vzory, doplněný černo-bílými vlnovými liniemi.',
    },
    'sup-medusa-glow': {
      name: 'Řada Medusa Glow (Edice Medúza)',
      desc: 'Snový all-around SUP inspirovaný medúzou s prémiovou vícebarevnou EVA blokovou mozaikou, hvězdicemi a uměleckým zobrazením korálového útesu v osvěžující mátové zelené.',
    },
    'sup-ocean-pulse': {
      name: 'Řada Ocean Pulse',
      desc: 'All-around SUP inspirovaný topografickými vlnami s konturami Tiffany Blue, vysoce přesnou mechanickou ražbou a jednotnou estetickou sadou příslušenství.',
    },
    'sup-ocean-voyager': {
      name: 'Řada Ocean Voyager',
      desc: 'All-around SUP inspirovaný mořskou želvou s prémiovou vícebarevnou EVA blokovou mozaikou v hluboké petrolejové, tyrkysové a korálově oranžové.',
    },
    'sup-dolphin-wave': {
      name: 'Řada Dolphin Wave',
      desc: 'All-around SUP inspirovaný delfínem se středověkými modrými vlnami, vysoce přesným spojováním barevných EVA bloků a 360° námořskou estetikou bočních hran.',
    },
    'sup-flowing-lotus': {
      name: 'Řada Flowing Lotus',
      desc: 'All-around SUP inspirovaný východním uměním s motivy lotosu, kaprů koi a vážek, s laserově rytou protiskluzovou podložkou a uměleckým gradientním průtokem vody.',
    },
    'sup-jungle-mandala': {
      name: 'Řada Jungle Mandala',
      desc: 'All-around SUP inspirovaný tropickým deštným pralesem a mandalou s ibišky, kolibříky a symetrickými geometrickými totemy v Tiffany Blue a korálově oranžové.',
    },
    'sup-tropical-breeze': {
      name: 'Řada Tropical Breeze Island Escape',
      desc: 'All-around SUP inspirovaný ostrovním rájem s kompletním plátnem ostrovní dovolené se sluncem, kokosovými háji a plážovými scénami.',
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
    'life-vest-classic': {
      name: 'Redningsvest Classic',
      desc: 'Universel flydehjælp til rekreative vandsport. CE-certificeret.',
    },
    'life-vest-pro': {
      name: 'Redningsvest Pro',
      desc: 'Professionel redningsvest med SOLAS-refleks til offshore- og redningsoperationer.',
    },
    'oars-pump-set': {
      name: 'Årer & Pompesæt',
      desc: 'Par 1,6 m aluminiumsårer og 5L fodpumpe med høj kapacitet til oppustelig vandsport.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'Alsides oppustelig allround-SUP med bred kropsstabilitet til begyndere og mellemøvede padlere.',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge-udgaven',
      desc: 'Vildmarksinspireret allround-SUP med premium flerfarvet EVA-bloksammensætning og gepardmotiv i pastelrosa, petrol og koral.',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake-serien (Hval-udgaven)',
      desc: 'Havinspireret allround-SUP med majestætisk blåhval-totem i geometriske og stammemønstre kombineret med sort-hvide svallinjer.',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow-serien (Vandmand-udgaven)',
      desc: 'Drømmeagtigt vandmandsinspireret allround-SUP med premium flerfarvet EVA-bloksammensætning, søstjerner og koralrevs-kunst i forfriskende mintgrøn.',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse-serien',
      desc: 'Topografisk bølgeinspireret allround-SUP med Tiffany Blue-konturer, mekanisk prægning med høj præcision og samlet æstetisk tilbehørssæt.',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager-serien',
      desc: 'Havskildpasseinspireret allround-SUP med premium flerfarvet EVA-bloksammensætning i dyb petrol, turkis og koralorange.',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave-serien',
      desc: 'Delfininspireret allround-SUP med middelalderlige blå bølger, EVA-farvebloksammensætning med høj præcision og 360-graders maritim rails-æstetik.',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus-serien',
      desc: 'Østlig kunstinspireret allround-SUP med lotus-, koi- og guldsmedemotiver, lasergraveret grippedæk og gradient vandstrøms-kunst.',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala-serien',
      desc: 'Tropisk regnskove- og mandalainspireret allround-SUP med hibiscus, kolibrier og symmetriske geometriske totemer i Tiffany Blue og koralorange.',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape-serien',
      desc: 'Øparadisinspireret allround-SUP med et komplet øferie-canvas med solskin, kokoslunde og strandscener.',
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
    'life-vest-classic': {
      name: 'Vestă de salvare Classic',
      desc: 'Ajutor universal de flotabilitate pentru sporturi nautice recreative. Certificat CE.',
    },
    'life-vest-pro': {
      name: 'Vestă de salvare Pro',
      desc: 'Vestă de salvare de clasă profesională cu reflectoare SOLAS pentru operațiuni offshore și de salvare.',
    },
    'oars-pump-set': {
      name: 'Set vâsle & pompă',
      desc: 'Pereche de vâsle din aluminiu de 1,6 m și pompă de picior de 5L cu debit ridicat pentru sporturi nautice gonflabile.',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'SUP gonflabil all-around versatil cu stabilitate de corp larg pentru începători și paddleri de nivel intermediar.',
    },
    'sup-cheetah-surge': {
      name: 'Ediția Cheetah Surge',
      desc: 'SUP all-around inspirat de natura sălbatică cu mozaic premium din blocuri EVA multicolore și motiv de ghepard în roz pastel, turcoaz și coral.',
    },
    'sup-leviathan-wake': {
      name: 'Seriile Leviathan Wake (Ediția Balenă)',
      desc: 'SUP all-around inspirat de ocean cu totem majestuos de balenă albastră cu modele geometrice și tribale, împreună cu linii de hulă alb-negre.',
    },
    'sup-medusa-glow': {
      name: 'Seriile Medusa Glow (Ediția Meduza)',
      desc: 'SUP all-around visător inspirat de meduze cu mozaic premium din blocuri EVA multicolore, stele de mare și artă de recif de coral în verde mentă răcoritor.',
    },
    'sup-ocean-pulse': {
      name: 'Seriile Ocean Pulse',
      desc: 'SUP all-around inspirat de valuri topografice cu contururi Tiffany Blue, embosare mecanică de înaltă precizie și kit estetic unificat de accesorii.',
    },
    'sup-ocean-voyager': {
      name: 'Seriile Ocean Voyager',
      desc: 'SUP all-around inspirat de țestoase marine cu mozaic premium din blocuri EVA multicolore în turcoaz închis, turcoaz și portocaliu coral.',
    },
    'sup-dolphin-wave': {
      name: 'Seriile Dolphin Wave',
      desc: 'SUP all-around inspirat de delfini cu valuri albastre medievale, îmbinare de blocuri colorate EVA de înaltă precizie și estetică marină a bordurilor de 360 de grade.',
    },
    'sup-flowing-lotus': {
      name: 'Seriile Flowing Lotus',
      desc: 'SUP all-around inspirat de arta orientală cu motive de lotus, koi și libelule, cu pad de tracțiune gravat cu laser și artă gradata a curgerii apei.',
    },
    'sup-jungle-mandala': {
      name: 'Seriile Jungle Mandala',
      desc: 'SUP all-around inspirat de pădurea tropicală și mandala cu hibiscus, colibri și toteme geometrice simetrice în Tiffany Blue și portocaliu coral.',
    },
    'sup-tropical-breeze': {
      name: 'Seriile Tropical Breeze Island Escape',
      desc: 'SUP all-around inspirat de paradisul insular cu o pânză completă de vacanță insulară cu soare, crânguri de nuci de cocos și scene de plajă.',
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
    'life-vest-classic': {
      name: 'เสื้อชูชีพ Classic',
      desc: 'อุปกรณ์ช่วยลอยตัวสำหรับกีฬาทางน้ำเพื่อการพักผ่อน ได้รับการรับรอง CE',
    },
    'life-vest-pro': {
      name: 'เสื้อชูชีพ Pro',
      desc: 'เสื้อชูชีพระดับมืออาชีพพร้อมแถบสะท้อนแสง SOLAS สำหรับปฏิบัติการนอกชายฝั่งและงานกู้ภัย',
    },
    'oars-pump-set': {
      name: 'ชุดไม้พายและปั๊ม',
      desc: 'ไม้พายอะลูมิเนียมคู่ ยาว 1.6 ม. พร้อมปั๊มเท้า 5L แรงดันสูงสำหรับกีฬาทางน้ำแบบพองลม',
    },
    'sup-explorer-11': {
      name: "SUP Explorer 11'",
      desc: 'SUP พองลมหลากหลายการใช้งาน พร้อมความมั่นคงจากทรงลำตัวกว้างสำหรับมือใหม่และผู้พายระดับกลาง',
    },
    'sup-cheetah-surge': {
      name: 'Cheetah Surge เอดิชัน',
      desc: 'SUP หลากหลายการใช้งานสไตล์ธรรมชาติป่า พร้อมงานต่อบล็อก EVA หลากสีพรีเมียมลวดลายเสือชีตาห์ในโทนพาสเทลชมพู เขียวหัวเป็ด และส้มโคราล',
    },
    'sup-leviathan-wake': {
      name: 'Leviathan Wake ซีรีส์ (ฉบับวาฬ)',
      desc: 'SUP หลากหลายการใช้งานสไตล์มหาสมุทร พร้อมลายโทเท็มวาฬสีน้ำเงินอันงดงามในลวดลายเรขาคณิตและชนเผ่า ตัดด้วยเส้นคลื่นสีขาวดำ',
    },
    'sup-medusa-glow': {
      name: 'Medusa Glow ซีรีส์ (ฉบับแมงกะพรุน)',
      desc: 'SUP หลากหลายการใช้งานสไตล์แมงกะพรุนแสนฝัน พร้อมงานต่อบล็อก EVA หลากสีพรีเมียม ดาวทะเล และงานศิลป์แนวปะการังในโทนเขียวมินต์สดชื่น',
    },
    'sup-ocean-pulse': {
      name: 'Ocean Pulse ซีรีส์',
      desc: 'SUP หลากหลายการใช้งานสไตล์คลื่นภูมิประเทศ พร้อมเส้นขอบสีทิฟฟานีบลู งานประทับลายเชิงกลไกความละเอียดสูง และชุดอุปกรณ์เสริมดีไซน์เอกภาพ',
    },
    'sup-ocean-voyager': {
      name: 'Ocean Voyager ซีรีส์',
      desc: 'SUP หลากหลายการใช้งานสไตล์เต่าทะเล พร้อมงานต่อบล็อก EVA หลากสีพรีเมียมในโทนเขียวหัวเป็ดเข้ม เขียวมรกต และส้มโคราล',
    },
    'sup-dolphin-wave': {
      name: 'Dolphin Wave ซีรีส์',
      desc: 'SUP หลากหลายการใช้งานสไตล์โลมา พร้อมคลื่นสีน้ำเงินสไตล์ยุคกลาง งานต่อบล็อกสี EVA ความละเอียดสูง และดีไซน์แนวรางทะเลรอบด้าน 360 องศา',
    },
    'sup-flowing-lotus': {
      name: 'Flowing Lotus ซีรีส์',
      desc: 'SUP หลากหลายการใช้งานสไตล์ศิลปะตะวันออก พร้อมลวดลายดอกบัว ปลาคาร์ปคอย และแมลงปอ แผ่นยึดเกาะแกะลายด้วยเลเซอร์ และงานศิลป์ไล่เฉดการไหลของน้ำ',
    },
    'sup-jungle-mandala': {
      name: 'Jungle Mandala ซีรีส์',
      desc: 'SUP หลากหลายการใช้งานสไตล์ป่าฝนเขตร้อนและมันดาลา พร้อมลายดอกชบา นกฮัมมิงเบิร์ด และโทเท็มเรขาคณิตสมมาตรในโทนทิฟฟานีบลูและส้มโคราล',
    },
    'sup-tropical-breeze': {
      name: 'Tropical Breeze Island Escape ซีรีส์',
      desc: 'SUP หลากหลายการใช้งานสไตล์เกาะสวรรค์ พร้อมผืนผ้าใบบันทึกวันพักผ่อนบนเกาะที่ครบครันด้วยแสงแดด สวนมะพร้าว และบรรยากาศชายหาด',
    },
  },
};
