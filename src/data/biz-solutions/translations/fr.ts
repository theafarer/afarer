export type SolutionOverride = {
  clientType?: string;
  brandName?: string;
  meta?: { title: string; description: string };
  hero?: {
    tagline?: string;
    title?: string;
    subtitle?: string;
    image?: { src?: string; alt?: string };
  };
  challenge?: {
    title?: string;
    problems?: { title: string; description: string }[];
  };
  solutions?: {
    title?: string;
    items?: { title: string; description: string; features?: string[] }[];
  };
  caseStudy?: {
    title?: string;
    customer?: { location?: string; background?: string; goal?: string };
    steps?: { title: string; detail: string }[];
    results?: string[];
    moreCaseStudies?: {
      title: string;
      customer: { location?: string; background?: string; goal?: string };
      steps: { title: string; detail: string }[];
      results: string[];
    }[];
  };
  whyAfarer?: {
    title?: string;
    items?: { title: string; description: string }[];
  };
  faqs?: { question: string; answer: string }[];
  cta?: {
    title?: string;
    subtitle?: string;
    primaryAction?: { text: string };
    secondaryAction?: { text: string };
  };
};

const overrides: Record<string, SolutionOverride> = {
  'commercial-sup-fleet': {
    meta: {
      title: "Fabricant de flottes de SUP commerciales | Fournisseur d'équipements location & école | {SITE}",
      description:
        '{SITE} fournit des solutions de flottes de SUP commerciales pour les clubs de paddle, les loueurs et les écoles de SUP. Paddle boards gonflables durables à construction PVC renforcée, accessoires professionnels et soutien de fabrication OEM en volume.',
    },
  },
  'commercial-water-park-sup-fleet': {
    meta: {
      title: 'Fournisseur de flottes SUP pour parcs aquatiques commerciaux | {SITE}',
      description:
        'Afarer fournit des solutions de flottes SUP commerciales pour les parcs aquatiques et parcs à thème. Paddle boards très durables, designs adaptés aux débutants, construction axée sur la sécurité et approvisionnement OEM à grande échelle.',
    },
  },
  'complete-beach-activity-equipment-solutions': {
    meta: {
      title: "Fournisseur d'équipements SUP commerciaux | Solutions de flottes de location pour plages | {SITE}",
      description:
        "Afarer fournit des solutions de flottes SUP commerciales pour les entreprises de loisirs de plage et centres nautiques. Paddle boards de location durables, packs d'équipements complets, support de pièces de rechange et personnalisation OEM.",
    },
  },
  'create-fishing-sup-brand': {
    meta: {
      title: 'Fabricant de SUP de pêche | Paddle boards de pêche gonflables personnalisés | {SITE}',
      description:
        "Afarer aide les marques d'articles de pêche à créer des produits SUP de pêche personnalisés avec des designs très stables, des supports de cannes, des fixations de glacières, des accessoires D-ring et des solutions de fabrication en marque blanche.",
    },
  },
  'creator-influencer-sup-brand': {
    meta: {
      title: 'Fabricant de marques SUP pour créateurs | Produits SUP personnalisés pour influenceurs | {SITE}',
      description:
        '{SITE} aide les créateurs YouTube, TikTok, Instagram et les marques Kickstarter à lancer des produits SUP personnalisés avec prototypes rapides, fabrication à faible MOQ, éditions limitées et solutions en marque blanche.',
    },
  },
  'destination-water-sports-package': {
    meta: {
      title: "Fournisseur d'équipements nautiques pour destinations touristiques | {SITE}",
      description:
        'Afarer fournit des solutions nautiques pour destinations aux offices de tourisme, parcs publics et projets riverains. Flottes SUP commerciales, équipements écologiques, soutien aux projets gouvernementaux et approvisionnement OEM à grande échelle.',
    },
  },
  'durable-sup-rental-fleet': {
    meta: {
      title: "Fabricant d'équipements de location SUP | Paddle boards commerciaux durables | {SITE}",
      description:
        '{SITE} fournit des solutions durables de flottes SUP de location pour les plages, lacs, resorts et opérateurs nautiques. Paddle boards gonflables commerciaux à construction renforcée, entretien facile et approvisionnement OEM en volume.',
    },
  },
  'eco-research-monitoring-sup-platform': {
    meta: {
      title: 'Fabricant de plateformes SUP pour recherche écologique | {SITE}',
      description:
        "Afarer fournit des plateformes SUP écologiques pour la recherche aux ONG de conservation marine, universités et organismes de surveillance environnementale. Plateformes flottantes stables, systèmes de montage d'équipement et solutions OEM personnalisées.",
    },
  },
  'ecommerce-sup-brand-development': {
    meta: {
      title: 'Fournisseur de marques SUP pour Amazon | Fabricant de SUP gonflables personnalisés | {SITE}',
      description:
        "Afarer aide les vendeurs Amazon, Walmart et Shopify à créer des marques de SUP différenciées avec des paddle boards gonflables personnalisés, une fabrication en marque blanche, des graphismes uniques, une chaîne d'approvisionnement rapide et un support produit e-commerce.",
    },
  },
  'expand-outdoor-brand-water-sports': {
    meta: {
      title: 'Développez votre marque outdoor vers les sports nautiques | Fabricant OEM de SUP | {SITE}',
      description:
        'Afarer aide les marques outdoor établies à se développer dans les sports nautiques avec fabrication de SUP personnalisés, technologie Drop Stitch, expertise PVC, paddle boards en marque blanche et solutions complètes de développement produit.',
    },
  },
  'expand-your-water-sports-portfolio': {
    meta: {
      title: 'Fabricant OEM de SUP gonflables pour marques de sports nautiques | {SITE}',
      description:
        'Afarer aide les marques de kayak, canoë, voile et plongée à se développer dans les SUP gonflables avec la technologie Drop Stitch professionnelle, la fabrication OEM et des solutions complètes de produits nautiques.',
    },
  },
  'inflatable-technology-for-surf-business': {
    meta: {
      title: 'Solutions de SUP gonflables pour les surf shops | Fabricant en marque blanche | {SITE}',
      description:
        "Afarer aide les surf shops et marques lifestyle nautique à se développer avec des SUP gonflables en marque blanche, des kayaks gonflables et des produits nautiques personnalisés. Réduisez vos coûts d'expédition, de stockage et d'inventaire grâce à une technologie gonflable avancée.",
    },
  },
  'kids-exploration-sup-program': {
    meta: {
      title: 'Fabricant de SUP pour enfants | {SITE}',
      description:
        "Afarer fournit des solutions SUP sûres pour enfants destinées aux colonies de vacances, écoles et programmes d'aventure pour la jeunesse. Paddle boards pour enfants, équipements Giant SUP, flottes commerciales et solutions OEM personnalisées.",
    },
  },
  'luxury-portable-sup-package': {
    meta: {
      title: 'Fabricant de SUP portables de luxe pour yachts & croisières | {SITE}',
      description:
        "{SITE} fournit des solutions de SUP portables de luxe pour les compagnies de croisière, opérateurs de yachts et marques d'hospitalité marine. Packs SUP gonflables compacts avec composants de qualité marine, marque personnalisée et accessoires premium.",
    },
  },
  'pet-friendly-paddle-board-program': {
    meta: {
      title: 'Fabricant de paddle boards adaptés aux animaux | Fournisseur OEM de SUP pour chiens | {SITE}',
      description:
        "Afarer crée des paddle boards personnalisés adaptés aux animaux pour les marques d'aventure canine et entreprises outdoor animalières. Designs SUP durables anti-rayures, plateformes larges et stables, fabrication OEM et solutions en marque blanche.",
    },
  },
  'premium-custom-sup-collection': {
    meta: {
      title: 'Fabricant de SUP personnalisés de luxe | {SITE}',
      description:
        "Afarer crée des collections SUP premium personnalisées pour îles privées, yacht clubs, resorts de luxe et marques lifestyle d'élite. Designs exclusifs, matériaux luxueux, personnalisation VIP et production OEM haut de gamme.",
    },
  },
  'professional-water-rescue-sup-system': {
    meta: {
      title: 'Fabricant de SUP de sauvetage aquatique | {SITE}',
      description:
        "Afarer fournit des systèmes SUP professionnels de sauvetage aquatique pour les sauveteurs, équipes d'urgence et organisations de sécurité. Boards de sauvetage haute capacité, design multi-poignées, systèmes de remorquage et solutions OEM personnalisées.",
    },
  },
  'regional-oem-supply-chain-partner': {
    meta: {
      title: 'Fournisseur pour distributeurs SUP | Fabricant OEM de paddle boards en volume | {SITE}',
      description:
        "Afarer s'associe aux distributeurs et importateurs de SUP mondiaux via la fabrication OEM en volume, des solutions en marque blanche, un soutien marché régional et une gestion fiable de la chaîne d'approvisionnement.",
    },
  },
  'resort-water-activity-package': {
    meta: {
      title:
        "Fournisseur d'équipements d'activités nautiques pour resorts | Solutions de flottes SUP personnalisées | {SITE}",
      description:
        "{SITE} fournit des solutions d'activités nautiques pour resorts destinées aux hôtels de luxe, resorts insulaires et destinations bien-être. Flottes SUP personnalisées avec systèmes de rangement, formation du personnel et support d'équipements commerciaux.",
    },
  },
  'retail-private-label-program': {
    meta: {
      title: 'Fabricant de SUP en marque blanche | Fournisseur OEM de paddle boards pour la distribution | {SITE}',
      description:
        "Afarer fournit des solutions de fabrication SUP en marque blanche pour les distributeurs outdoor, chaînes d'articles de sport et marques mondiales. Paddle boards personnalisés avec emballage retail, support de conformité et approvisionnement OEM fiable.",
    },
  },
  'sup-academy-equipment-program': {
    meta: {
      title: "Fabricant d'équipements d'académies SUP | Fournisseur de SUP enfants & boards d'entraînement | {SITE}",
      description:
        "{SITE} fournit des solutions d'équipement pour académies SUP destinées aux écoles de sports nautiques, programmes de jeunes et organisations d'éducation outdoor. Paddle boards SUP débutants professionnels, modèles SUP enfants, équipements moniteurs et solutions de flottes commerciales.",
    },
  },
  'sup-brand-startup': {
    meta: {
      title: 'Créez votre marque de SUP | Fabricant OEM de SUP gonflables | {SITE}',
      description:
        'Afarer aide les startups outdoor à créer des marques de SUP sur mesure avec fabrication OEM, paddle boards en marque blanche, production à faible MOQ, design produit, contrôle qualité et soutien logistique mondial.',
    },
  },
  'sup-yoga-wellness-equipment': {
    meta: {
      title: "Fabricant d'équipements de SUP Yoga | Paddle boards de yoga personnalisés | {SITE}",
      description:
        "Afarer propose des solutions d'équipement SUP Yoga personnalisées pour les studios de yoga, les retraites bien-être et les marques fitness. Créez des paddle boards de yoga gonflables premium au design large et stable, avec decks EVA complets et fabrication en marque blanche.",
    },
  },
  'corporate-sup-event-package': {
    clientType: 'Acheteur de projets personnalisés pour entreprises',

    meta: {
      title: 'Planches SUP personnalisées pour événements d’entreprise | Solutions OEM événementielles | {SITE}',
      description:
        'Afarer crée des planches SUP personnalisées pour événements d’entreprise, activités de team building et campagnes marketing. Personnalisation complète du logo, couleurs d’entreprise, prototypage rapide et production OEM en série.',
    },

    hero: {
      tagline: 'Pack SUP Événementiel d’Entreprise™',
      title:
        'Solutions SUP personnalisées pour événements d’entreprise, team building et campagnes de marketing de marque',
      subtitle: 'Transformez les équipements de sports nautiques en une expérience de marque puissante',
      image: { alt: 'Planches SUP personnalisées pour événements d’entreprise' },
    },

    challenge: {
      title: 'Les projets d’entreprise ont des exigences différentes des achats classiques',
      problems: [
        {
          title: 'L’identité de marque doit être parfaitement représentée',
          description:
            'Les clients d’entreprise attachent de l’importance à chaque détail visuel, notamment les couleurs corporatives exactes, la reproduction fidèle du logo et une apparence de marque cohérente. Une petite différence de couleur peut affecter l’image de marque, la qualité marketing et la présentation de l’événement.',
        },
        {
          title: 'La visibilité des grands logos est essentielle',
          description:
            'Contrairement aux produits grand public classiques, l’équipement événementiel doit attirer l’attention. Les entreprises ont besoin d’un placement de logo de grande taille, de graphismes très visibles et d’une apparence professionnelle, car les planches SUP deviennent des plateformes publicitaires flottantes.',
        },
        {
          title: 'Les calendriers événementiels sont extrêmement serrés',
          description:
            'Les événements d’entreprise sont généralement des projets à date fixe, avec des délais d’approbation des produits, des plannings d’événements et des campagnes marketing. Un retard de livraison peut perturber l’événement, faire échouer le marketing et entraîner des pertes financières.',
        },
        {
          title: 'Les projets ponctuels exigent quand même une qualité professionnelle',
          description:
            'Bien que de nombreux projets soient basés sur des événements, les entreprises attendent une apparence premium, des performances fiables et une présentation professionnelle. Des produits promotionnels de faible qualité peuvent nuire à la perception de la marque.',
        },
      ],
    },

    solutions: {
      title: 'Solutions complètes de sports nautiques personnalisées pour les événements de marque',
      items: [
        {
          title: 'Personnalisation complète aux couleurs de l’entreprise',
          description:
            'Afarer prend en charge l’impression de logos sur grande surface, le branding de la surface de la planche, la personnalisation des pagaies et le branding des accessoires, avec correspondance des couleurs d’entreprise selon les références Pantone et les exigences d’identité visuelle.',
          features: [
            'Application du logo d’entreprise',
            'Correspondance des couleurs d’entreprise',
            'Conception graphique personnalisée',
          ],
        },
        {
          title: 'Développement de produits SUP spécifiques aux événements',
          description:
            'Différents événements nécessitent différentes solutions. Afarer propose des packs de team building pour grands groupes de collaborateurs, des packs d’activation de marque pour campagnes marketing et des packs d’expérience VIP pour événements clients haut de gamme.',
          features: ['Pack Team Building', 'Pack Activation de Marque', 'Pack Expérience VIP'],
        },
        {
          title: 'Processus rapide de prototypage et d’approbation',
          description:
            'Afarer assure une confirmation rapide du design avec revue des visuels et ajustement des graphismes, un développement de prototypes pour confirmer les couleurs et le placement du logo, et une planification de la production alignée sur les échéances de l’événement.',
          features: ['Confirmation rapide du design', 'Développement de prototypes', 'Planification de la production'],
        },
        {
          title: 'Capacité de production personnalisée en série',
          description:
            'Afarer prend en charge les commandes d’entreprise, des petits événements de 50 à 100 pièces pour les activités internes, aux projets marketing moyens de 100 à 500 pièces pour les activations de marque, en passant par les grandes campagnes d’entreprise de 500 à 1000+ pièces pour les événements nationaux.',
          features: [
            'Petits événements d’entreprise (50-100 pcs)',
            'Projets marketing moyens (100-500 pcs)',
            'Grandes campagnes d’entreprise (500-1000+ pcs)',
          ],
        },
        {
          title: 'Packs d’équipement événementiel complets',
          description:
            'Afarer fournit des solutions événementielles complètes incluant planches SUP personnalisées, pagaies réglables, pompes, leashes, sacs de transport, kits de réparation, ainsi que des pagaies personnalisées, accessoires d’événement et supports d’exposition en option.',
          features: ['Contenu du pack standard', 'Personnalisation en option', 'Équipement du personnel'],
        },
        {
          title: 'Support pour campagnes marketing',
          description:
            'Les équipements SUP favorisent l’exposition sur les réseaux sociaux grâce à des designs accrocheurs, le contenu généré par les utilisateurs via les photos d’événements et le partage des participants, ainsi que des actifs de marque durables pour les futurs événements collaborateurs et clients.',
          features: [
            'Exposition sur les réseaux sociaux',
            'Contenu généré par les utilisateurs',
            'Actifs de marque durables',
          ],
        },
        {
          title: 'Contrôle qualité pour les projets de marque',
          description:
            'Afarer assure l’inspection qualité de la production pour les matériaux et l’impression, le contrôle de la précision du branding pour la position du logo et la cohérence des couleurs, et l’inspection de livraison pour les quantités, l’emballage et les accessoires.',
          features: [
            'Inspection qualité de production',
            'Contrôle de précision du branding',
            'Inspection de livraison',
          ],
        },
        {
          title: 'Support de livraison pour événements mondiaux',
          description:
            'Pour les multinationales, Afarer prend en charge les projets multi-pays, les événements régionaux et les campagnes mondiales avec une production, un emballage et une préparation d’expédition coordonnés entre les différents sites.',
          features: ['Projets multi-pays', 'Événements régionaux', 'Campagnes mondiales'],
        },
      ],
    },

    caseStudy: {
      title:
        'Comment une marque mondiale de boissons a créé une campagne marketing plage avec des équipements SUP personnalisés',
      customer: {
        location: 'International',
        background:
          'Marque internationale de boissons menant une campagne marketing lifestyle estivale axée sur les activations plage et l’engagement des consommateurs.',
        goal: 'Créer une expérience d’activation plage mémorable avec un fort impact visuel de marque.',
      },
      steps: [
        {
          title: 'Intégration du design de marque',
          detail:
            'Afarer a développé des graphismes de planche personnalisés avec une correspondance exacte des couleurs de marque et un placement de logo de grande taille pour maximiser l’impact visuel sur l’eau.',
        },
        {
          title: 'Approbation du prototype',
          detail:
            'Confirmation du design avec échantillons visuels et approbation de production afin de garantir que chaque détail respecte les exigences strictes de la marque avant la production en série.',
        },
        {
          title: 'Production en série',
          detail:
            'Production d’une flotte événementielle de SUP personnalisés incluant planches, pagaies et accessoires, avec une qualité cohérente sur l’ensemble de la commande.',
        },
        {
          title: 'Livraison de la campagne',
          detail:
            'Les produits ont été livrés à temps pour les événements plage, les activités d’interaction client et la promotion de la marque sur plusieurs sites.',
        },
      ],
      results: [
        'Forte présence visuelle lors des événements d’activation plage',
        'Fort engagement des participants et interaction avec la marque',
        'Exposition accrue sur les réseaux sociaux grâce à du contenu partageable',
        'Présentation professionnelle de la marque renforçant le positionnement premium',
      ],

      moreCaseStudies: [
        {
          title: 'BMW Group Driving Experience — Flotte SUP personnalisée pour 18 événements européens',
          customer: {
            location: 'Munich, Allemagne',
            background:
              'L’équipe Global Brand Experience de BMW Group, dirigée par le directeur Klaus Weber, gère des programmes d’engagement client haut de gamme, notamment la BMW Driving Experience et des événements d’activation de marque partout en Europe. Elle souhaitait créer une expérience de marque nautique complétant le message « Sheer Driving Pleasure » pour le lancement des modèles entièrement électriques BMW i5 et i7. L’équipe de Klaus disposait d’un budget de 850 000 € pour une tournée européenne à l’été 2025 ciblant 6 000 clients VIP, et avait besoin de planches SUP premium entièrement personnalisées capables de supporter plus de 40 jours d’événements sur des sites côtiers et lacustres avec un entretien minimal.',
            goal: 'Déployer 120 planches entièrement personnalisées aux couleurs BMW i à travers 18 événements VIP européens de mai à septembre 2025, offrir plus de 6 000 expériences invités et atteindre des taux de satisfaction de plus de 90 % sans aucun incident de sécurité.',
          },
          steps: [
            {
              title: 'Concept du programme et ingénierie produit personnalisée',
              detail:
                'En novembre 2024, l’équipe de Klaus a rencontré la division Événements d’Entreprise d’Afarer au salon nautique boot Düsseldorf pour examiner le concept. Afarer a proposé une planche de touring personnalisée de 11\'6" aux couleurs de la série i de BMW (Blue Ridge Mountain Metallic, Frozen Pure Grey) avec des accents en fibre de carbone tissée rappelant la garniture intérieure de l’i7. Les ingénieurs d’Afarer ont créé 3 planches prototypes avec supports GoPro intégrés pour la photographie d’action, tapis de pont antidérapants avec surpiqûres inspirées de BMW M et caches de valve personnalisés à l’emblème BMW. BMW a approuvé 120 unités à 895 € par planche avec un système dédié de stockage et de transport utilisant des chariots à roulettes personnalisés.',
            },
            {
              title: 'Intégration de marque et planification logistique des événements',
              detail:
                'L’équipe graphique d’Afarer a développé des autocollants résistants aux UV couvrant toute la planche, avec le branding BMW i, des codes QR pointant vers le configurateur BMW i et des consignes de sécurité en 8 langues. L’équipe logistique a conçu un système de rotation expédiant 40 planches vers chacune de 3 régions (Europe du Sud, Europe centrale, Nordique/Baltique) avec des stations de gonflage mobiles, des gonfleurs sur batterie et des cabines de changement étanches. L’équipe événementielle de BMW a sélectionné 18 sites dont le lac de Côme (Italie), Saint-Tropez (France), le lac de Lucerne (Suisse), le lac de Garde (Italie) et l’archipel proche de Stockholm (Suède), chacun accueillant 300 à 600 invités sur des programmes de 2 à 3 jours.',
            },
            {
              title: 'Activation sur site et conception de l’expérience invité',
              detail:
                'Chaque événement proposait une « BMW i Paddle Experience » avec 40 planches disponibles en sessions guidées de 90 minutes animées par des instructeurs formés par Afarer. Les invités recevaient des rash guards personnalisés BMW i et des pochettes de téléphone étanches. Des photographes professionnels capturaient chaque invité pagayant avec les supports caméra intégrés des planches ; les images étaient retouchées et livrées en moins de 2 heures via un microsite dédié. L’activation était jumelée à des essais de la BMW i7 sur des routes côtières pittoresques, créant une immersion de marque terre-et-mer. Sur les 10 premiers événements, la satisfaction des invités a atteint 4,8/5 et BMW a rapporté que 23 % des participants avaient demandé un essai en concession.',
            },
            {
              title: 'Bilan des performances et extension du programme',
              detail:
                'La tournée complète de 18 événements s’est achevée le 30 septembre 2025 avec 6 840 expériences invités au total (14 % au-dessus de l’objectif). Aucun incident de sécurité n’a été recensé. L’enquête post-événement de BMW a montré que 94 % des participants ont qualifié l’expérience SUP d’« exceptionnelle » et 87 % ont déclaré qu’elle avait influencé positivement leur perception de la marque BMW i. L’équipe de Klaus a collecté plus de 6 500 contenus générés par les utilisateurs partagés sur les réseaux sociaux, générant 3,2 millions d’impressions organiques. BMW a commandé 80 planches supplémentaires pour son programme 2026, étendu à 25 événements dont des activations au Festival de Cannes et au Grand Prix de Monaco.',
            },
          ],
          results: [
            '6 840 expériences invités VIP livrées sur 18 événements européens avec 94 % de satisfaction et zéro incident de sécurité',
            '770 € par planche, coût total incluant branding, logistique et instruction — 14 % sous le budget de 850 000 €, soit 80 000 € d’économies',
            '23 % des participants ont demandé un essai en concession BMW i après l’événement, générant un pipeline de ventes attribuable estimé à 2,1 M€',
            '3,2 millions d’impressions organiques sur les réseaux sociaux grâce à plus de 6 500 contenus générés par les utilisateurs mettant en scène des SUP personnalisés BMW i',
          ],
        },
        {
          title: 'Google Cloud « Paddle into Production » — Programme SUP de team building pour 1 200 ingénieurs',
          customer: {
            location: 'Sunnyvale, Californie, États-Unis',
            background:
              'La directrice de la culture d’ingénierie de Google Cloud, Dr Priya Sharma, était chargée de créer un programme de team building mémorable pour 1 200 ingénieurs logiciels répartis sur 6 bureaux nord-américains. Les séminaires traditionnels en salle et les escape rooms enregistraient des scores d’engagement en baisse (3,1/5 en moyenne). Dr Sharma voulait une activité en plein air favorisant la collaboration, inclusive quel que soit le niveau de forme physique, et renforçant le message « build, connect, scale » de Google Cloud. Elle disposait d’un budget de 400 000 $ pour un programme à l’été 2025 et cherchait une solution clé en main incluant branding, équipement, instruction et gestion de la sécurité.',
            goal: 'Concevoir et exécuter un programme SUP de team building évolutif pour 1 200 ingénieurs Google Cloud sur 6 sites avec plus de 90 % de participation, atteindre un Net Promoter Score supérieur à 4,5/5 et respecter le budget de 400 000 $.',
          },
          steps: [
            {
              title: 'Conception du programme et planification logistique multi-sites',
              detail:
                'L’équipe de Dr Sharma a engagé Afarer en février 2025 pour un programme d’entreprise personnalisé. Afarer a proposé un thème « Paddle into Production » où des équipes de 8 à 10 ingénieurs parcouraient des parcours SUP représentant les étapes du pipeline de déploiement de Google Cloud. Afarer a personnalisé 80 planches aux couleurs de Google Cloud, avec code couleur par équipe et supports techniques étanches pour les appareils mobiles. Le plan logistique couvrait 6 sites : le siège de Sunnyvale, Seattle, New York, Austin, Chicago et Boulder, avec des événements échelonnés toutes les 2 semaines de juin à août 2025. Afarer s’est engagé à hauteur de 320 000 € pour 80 planches, 24 instructeurs, la logistique complète et du matériel personnalisé pour 1 200 participants.',
            },
            {
              title: 'Développement d’activités inclusives et cadre de sécurité',
              detail:
                'L’équipe de programmation d’Afarer a créé 3 niveaux : « Beginner Buoy » (initiation au paddle et jeux d’équilibre), « Production Racer » (courses de relais par équipes) et « Cloud Cluster » (défis de formation en groupe exigeant de la coordination). Chaque niveau incluait des challenges aux couleurs de Google Cloud comme « déployer un conteneur » (équilibrer une balle sur la planche en pagayant) et « scale to zero » (tout le monde doit s’asseoir simultanément). Afarer a recruté 24 instructeurs SUP certifiés sur tous les sites et a élaboré un protocole de sécurité complet : gilets de sauvetage obligatoires, système de binômes, tests de natation et surveillants sur l’eau avec planches de secours.',
            },
            {
              title: 'Intégration, goodies personnalisés et exécution des événements',
              detail:
                'Chaque participant recevait un kit de bienvenue personnalisé incluant un rash guard Google Cloud x Afarer, un baume à lèvres SPF, un sac étanche et un livret d’événement. Les sessions de 2 heures comprenaient 30 minutes d’instruction à terre, 75 minutes d’activités sur l’eau et 15 minutes de récupération avec photo d’équipe au drone. L’équipe événementielle d’Afarer gérait l’installation, le démontage et le nettoyage sur chaque site — les employés de Google n’avaient qu’à se présenter. Le premier événement au Shoreline Lake de Mountain View le 12 juin 2025 a atteint 97 % de présence, avec des équipes rivalisant pour le prix « Highest Availability » basé sur la coordination et la vitesse.',
            },
            {
              title: 'Analyse des résultats et extension en deuxième année',
              detail:
                'Sur 8 semaines, 1 168 ingénieurs Google Cloud ont participé (taux de présence de 97,3 %). Les enquêtes post-événement ont montré un NPS de 4,7/5, 92 % des participants se sont sentis « plus proches de leurs coéquipiers » et 88 % ont jugé l’activité « plus efficace qu’un séminaire traditionnel ». L’équipe de direction de Dr Sharma a rapporté une amélioration de 15 % des métriques de collaboration inter-équipes au trimestre suivant le programme. Google Cloud a commandé 40 planches supplémentaires pour son programme 2026, étendu à 10 sites dont Londres, Zurich et Bangalore, avec un budget de 580 000 $.',
            },
          ],
          results: [
            '1 168 ingénieurs ont participé sur 6 sites avec un taux de présence de 97,3 %, dépassant l’objectif de 90 %',
            'Net Promoter Score de 4,7/5 — le plus élevé de tous les programmes de team building Google Cloud depuis 2 ans',
            '92 % des participants se sont sentis plus proches de leurs coéquipiers inter-équipes après l’événement',
            'Programme livré à 22 $ par participant sous le budget de 400 000 $ (333 $/pers. contre 355 $/pers. visés), soit 26 000 $ d’économies',
          ],
        },
      ],
    },

    whyAfarer: {
      title: 'Pourquoi les entreprises choisissent Afarer',
      items: [
        {
          title: 'Présentation de marque',
          description:
            'Chaque détail représente votre entreprise, du placement du logo à la précision des couleurs et à l’apparence générale du produit.',
        },
        {
          title: 'Exécution rapide des projets',
          description:
            'Les délais comptent. Le processus rationalisé d’Afarer passe du concept à la livraison dans des calendriers d’événement serrés.',
        },
        {
          title: 'Fabrication personnalisée',
          description:
            'Votre marque mérite des produits uniques. Personnalisation complète, des graphismes des planches aux accessoires et à l’emballage.',
        },
        {
          title: 'Livraison fiable',
          description:
            'Les événements ne peuvent pas attendre. Afarer garantit la planification de la production et la coordination de l’expédition pour respecter des dates d’événement fixes.',
        },
        {
          title: 'Impact visuel',
          description:
            'Créer des produits qui suscitent l’attention sur les réseaux sociaux et transforment les participants en ambassadeurs de marque.',
        },
        {
          title: 'Gestion de bout en bout',
          description:
            'Du concept initial et de la validation du design à la production, au contrôle qualité et à la livraison pour des événements dans le monde entier.',
        },
      ],
    },

    faqs: [
      {
        question: 'Pouvez-vous reproduire les couleurs exactes de marque d’entreprise (Pantone) sur les planches SUP ?',
        answer:
          'Oui, Afarer prend en charge la correspondance des couleurs Pantone et les exigences d’identité visuelle d’entreprise avec une reproduction précise des couleurs. Nous fournissons des échantillons prototypes pour validation des couleurs avant la production en série, afin de garantir que le produit final correspond exactement aux normes de votre marque.',
      },
      {
        question: 'Quelle est la quantité minimale de commande pour des planches SUP personnalisées ?',
        answer:
          'Afarer s’adapte à différentes échelles de projets. Les petits événements d’entreprise et activités internes commencent à 50-100 unités. Les campagnes marketing moyennes vont de 100 à 500 unités, et les grands événements nationaux ou multi-sites peuvent atteindre 500-1000+ unités.',
      },
      {
        question: 'Combien de temps prend le processus de prototypage et d’approbation ?',
        answer:
          'Le processus de prototypage est conçu pour la rapidité. Afarer fournit une confirmation rapide du design, une revue des visuels et un développement de prototypes généralement en 1 à 2 semaines. Cela laisse suffisamment de temps pour l’approbation et la production en série avant les échéances de l’événement.',
      },
      {
        question: 'Pouvez-vous livrer vers plusieurs sites pour des événements de campagne mondiaux ?',
        answer:
          'Oui, Afarer prend en charge les campagnes d’événements multi-pays et multi-sites. Nous coordonnons la production, l’emballage et la préparation des expéditions pour garantir une livraison cohérente sur tous les sites d’événements régionaux ou mondiaux.',
      },
      {
        question: 'Quelles options de personnalisation sont disponibles au-delà de l’impression du logo ?',
        answer:
          'Au-delà de l’impression du logo, Afarer propose le branding de toute la surface de la planche, la personnalisation des pagaies, la correspondance des couleurs d’entreprise avec références Pantone, des designs graphiques à thème événementiel, des œuvres en édition limitée et des accessoires personnalisés incluant pagaies, pompes et sacs.',
      },
      {
        question: 'Proposez-vous des packs événementiels complets incluant accessoires et pagaies ?',
        answer:
          'Oui, Afarer fournit des packs d’équipement événementiel complets incluant planches SUP personnalisées, pagaies réglables, pompes, leashes, sacs de transport et kits de réparation. En option : pagaies personnalisées, accessoires d’événement, supports d’exposition et équipement du personnel.',
      },
    ],

    cta: {
      title: 'Créez votre expérience nautique d’entreprise avec Afarer',
      subtitle: 'Votre marque mérite d’être mémorable.',
      primaryAction: { text: 'Lancez votre projet SUP d’entreprise dès aujourd’hui' },
      secondaryAction: { text: 'Découvrez nos options de personnalisation' },
    },
  },
};

export default overrides;
