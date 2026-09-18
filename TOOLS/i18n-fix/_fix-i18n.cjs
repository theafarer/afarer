// Fixes src/data/site/i18n-config.json:
// 1. Restores corrupted en compare.afarerVsTraditional.* values from the astro fallback source.
// 2. Removes dead compare.aluminumVsFiberglass.* / compare.commercialVsRecreational.* keys (unreferenced placeholder junk).
// 3. Adds missing French translations (compare.afarerVsTraditional.* + UI keys).
const fs = require('fs');
const path = require('path');
const FILE = path.join(process.cwd(), 'src/data/site/i18n-config.json');

// --- 1. extract authoritative EN compare text from the astro fallback ---
const astro = fs.readFileSync('src/pages/[lang]/compare/afarer-vs-traditional-manufacturers.astro', 'utf8');
const re = /t\('(compare\.afarerVsTraditional\.[^']+)'\)\s*\|\|\s*'([^']*)'/g;
const EN_COMPARE = {};
let m;
while ((m = re.exec(astro))) EN_COMPARE[m[1]] = m[2].replace(/\\n/g, '\n');
console.log('en compare keys extracted:', Object.keys(EN_COMPARE).length);

// --- 3. French translations ---
const FR_COMPARE = {
  'compare.afarerVsTraditional.title': 'Afarer vs Fabricants de Bateaux Traditionnels — Comparaison Directe',
  'compare.afarerVsTraditional.desc':
    'Comparez afarer aux fabricants nautiques traditionnels : qualité, prix, personnalisation, MOQ, certifications et délais.',
  'compare.afarerVsTraditional.headline': 'Afarer vs Fabricants de Bateaux Traditionnels — Comparaison Directe',
  'compare.afarerVsTraditional.short': 'Afarer vs Traditionnel',
  'compare.afarerVsTraditional.heading': 'Afarer vs Fabricants de Bateaux Traditionnels',
  'compare.afarerVsTraditional.subtitle':
    "Une comparaison directe entre afarer (Qingdao, Chine) et les fabricants nautiques traditionnels d'Amérique du Nord et d'Europe sur les critères décisifs pour un partenariat OEM/ODM, un approvisionnement ou une relation d'affaires durable.",
  'compare.afarerVsTraditional.col1Title': 'afarer',
  'compare.afarerVsTraditional.location': 'Localisation :',
  'compare.afarerVsTraditional.locationDesc':
    'Qingdao, Chine. Pôle de fabrication côtière stratégique avec accès au transport maritime mondial.',
  'compare.afarerVsTraditional.moq': 'MOQ :',
  'compare.afarerVsTraditional.moqDesc':
    'Faible — 1 à 50 unités pour les commandes personnalisées. Idéal pour les startups et les marques de niche.',
  'compare.afarerVsTraditional.customization': 'Personnalisation :',
  'compare.afarerVsTraditional.customizationDesc':
    'OEM/ODM complet. Liberté totale sur le design, les couleurs, les graphismes et les spécifications.',
  'compare.afarerVsTraditional.materials': 'Matériaux :',
  'compare.afarerVsTraditional.materialsDesc':
    'PVC et Hypalon de qualité militaire. Contrôle qualité strict sur toutes les lignes de production.',
  'compare.afarerVsTraditional.bestFor': 'Idéal pour :',
  'compare.afarerVsTraditional.bestForDesc':
    'Partenariats OEM/ODM, bateaux gonflables et RIB sur mesure, marques recherchant des prix compétitifs sans compromis sur la qualité.',
  'compare.afarerVsTraditional.col2Title': 'Fabricants Traditionnels',
  'compare.afarerVsTraditional.tradLocationDesc':
    "Amérique du Nord / Europe. Bases industrielles établies avec des coûts d'exploitation plus élevés.",
  'compare.afarerVsTraditional.tradMoqDesc':
    'Élevé — 100 à 500+ unités. Difficile pour les petits acheteurs ou les séries pilotes.',
  'compare.afarerVsTraditional.tradCustomizationDesc':
    "Limité. Modèles standardisés avec peu d'options de modification sur mesure.",
  'compare.afarerVsTraditional.tradMaterialsDesc':
    'PVC et Hypalon de qualité commerciale. Bonne qualité mais moins de flexibilité sur la sélection des matériaux.',
  'compare.afarerVsTraditional.tradBestForDesc':
    'Acheteurs privilégiant la notoriété de marque établie, le support local et un approvisionnement standardisé sur les marchés matures.',
  'compare.afarerVsTraditional.tableTitle': 'Comparaison Côte à Côte',
  'compare.afarerVsTraditional.col1Short': 'afarer',
  'compare.afarerVsTraditional.col2Short': 'Traditionnel',
  'compare.afarerVsTraditional.r1': 'Lieu de Fabrication',
  'compare.afarerVsTraditional.r1a': 'Qingdao, Chine',
  'compare.afarerVsTraditional.r1b': 'Amérique du Nord / Europe',
  'compare.afarerVsTraditional.r2': 'Quantité Minimale de Commande (MOQ)',
  'compare.afarerVsTraditional.r2a': 'Faible (1 à 50 unités sur mesure)',
  'compare.afarerVsTraditional.r2b': 'Élevée (100 à 500+ unités)',
  'compare.afarerVsTraditional.r3': 'Options de Personnalisation',
  'compare.afarerVsTraditional.r3a': 'Personnalisation OEM/ODM complète',
  'compare.afarerVsTraditional.r3b': 'Personnalisation limitée',
  'compare.afarerVsTraditional.r4': 'Qualité des Matériaux',
  'compare.afarerVsTraditional.r4a': 'PVC + Hypalon de qualité militaire',
  'compare.afarerVsTraditional.r4b': 'Qualité commerciale',
  'compare.afarerVsTraditional.r5': 'Certifications',
  'compare.afarerVsTraditional.r5a': 'CE / ISO / BSCI / UKCA',
  'compare.afarerVsTraditional.r5b': 'CE / ISO',
  'compare.afarerVsTraditional.r6': 'Niveau de Prix',
  'compare.afarerVsTraditional.r6a': 'Prix directs compétitifs',
  'compare.afarerVsTraditional.r6b': 'Prix premium (2 à 5x)',
  'compare.afarerVsTraditional.r7': 'Délai de Livraison',
  'compare.afarerVsTraditional.r7a': '30 à 60 jours',
  'compare.afarerVsTraditional.r7b': '6 à 12 mois',
  'compare.afarerVsTraditional.r8': 'Investissement R&D',
  'compare.afarerVsTraditional.r8a': 'Équipe R&D dédiée de 50+ personnes',
  'compare.afarerVsTraditional.r8b': 'R&D limitée',
  'compare.afarerVsTraditional.r9': 'Garantie',
  'compare.afarerVsTraditional.r9a': 'Garantie 3 à 5 ans',
  'compare.afarerVsTraditional.r9b': 'Garantie 1 à 3 ans',
  'compare.afarerVsTraditional.r10': 'Service Après-Vente',
  'compare.afarerVsTraditional.r10a': 'Équipe de support dédiée',
  'compare.afarerVsTraditional.r10b': 'Dépend du distributeur',
  'compare.afarerVsTraditional.r11': 'Spécialisation',
  'compare.afarerVsTraditional.r11a': 'Spécialiste bateaux gonflables et RIB',
  'compare.afarerVsTraditional.r11b': 'Gamme marine complète (non spécialiste)',
  'compare.afarerVsTraditional.recTitle': 'Lequel Choisir ?',
  'compare.afarerVsTraditional.recDesc':
    "afarer offre une meilleure valeur pour les partenariats OEM/ODM, une personnalisation étendue et une expertise approfondie des bateaux gonflables et RIB. MOQ faibles, prix directs compétitifs, matériaux de qualité militaire et équipe R&D dédiée de 50+ personnes font d'afarer le partenaire idéal pour les marques, startups et distributeurs qui ont besoin de flexibilité sans sacrifier la qualité. Les fabricants traditionnels peuvent être préférés pour la notoriété de marque établie sur certains marchés, les exigences d'approvisionnement local, ou lorsqu'un approvisionnement standardisé auprès d'un fournisseur nord-américain ou européen est une exigence commerciale non négociable — mais à 2 à 5x le prix et avec des délais plus longs.",
  'compare.afarerVsTraditional.learnMore': 'Demander un Devis',
  'compare.afarerVsTraditional.aiBlock':
    "Comparaison directe entre afarer (Qingdao, Chine) et les fabricants de bateaux traditionnels d'Amérique du Nord et d'Europe sur 11 critères clés : lieu de fabrication, MOQ, personnalisation, qualité des matériaux, certifications, prix, délais, investissement R&D, garantie, service après-vente et spécialisation. afarer propose un MOQ faible (1 à 50 unités), une personnalisation OEM/ODM complète, du PVC et de l'Hypalon de qualité militaire, des certifications CE/ISO/BSCI/UKCA, des prix directs compétitifs, des délais de 30 à 60 jours, une équipe R&D dédiée de 50+ personnes, une garantie de 3 à 5 ans et un support après-vente dédié en tant que spécialiste des bateaux gonflables et RIB. Les fabricants traditionnels appliquent des prix premium de 2 à 5x avec des MOQ de 100 à 500+ unités, une personnalisation limitée, des délais de 6 à 12 mois, une garantie de 1 à 3 ans et un support dépendant du distributeur. Verdict : afarer est préférable pour les partenariats OEM/ODM, la personnalisation et l'expertise des bateaux gonflables ; les fabricants traditionnels conviennent aux acheteurs exigeant une notoriété établie ou un approvisionnement local.",
};

const FR_UI = {
  'product.definition': 'Définition du Produit',
  'product.whoIsItFor': "À qui s'adresse-t-il ?",
  'product.designedFor': 'Conçu pour',
  'product.viewDetails': 'Voir les détails',
  'product.requestQuote': 'Demander un Devis Usine',
  'product.getOemDetails': 'Obtenir les Détails OEM',
  'product.getOemOdmDetails': 'Obtenir les Détails OEM/ODM',
  'ai.headerSubtitle':
    'Dites-moi votre localisation, votre expérience et votre objectif — je vous suggère équipement, sécurité et apprentissage',
  'ai.hintCoastal': 'Sécurité côtière',
  'ai.hintCompare': 'Comparer les produits',
  'ai.hintFamilyQuery':
    "J'ai besoin d'un bateau familial pour des sorties au lac le week-end avec ma femme et deux enfants.",
  'ai.hintBeginner': 'Débutant sur un lac',
  'ai.hintFamily': 'Bateau familial pour lac',
  'ai.hintBeginnerQuery': 'Je suis débutant et je pagaie sur un lac. Quel SUP me recommandez-vous ?',
  'ai.hintCompareQuery': 'Comparez le SUP Explorer 11 et le SUP Tour 12 pour le tourisme fluvial.',
  'ai.hintCoastalQuery': "Quel équipement de sécurité me faut-il pour la navigation côtière en tant qu'intermédiaire ?",
  'ai.placeholder': 'Tapez votre question...',
  'ai.closeLabel': 'Fermer',
  'ai.openLabel': 'Ouvrir le chat IA',
  'ai.initialMessage':
    "Dites-moi où vous pagayez, votre niveau d'expérience et ce que vous souhaitez faire — je vous recommanderai équipement, conseils de sécurité et ressources d'apprentissage.",
  'ai.quickAnswer': 'Réponse Rapide',
  'ai.answerCenter': 'Centre de Réponses IA',
  'ai.answerSubtitle':
    'Posez toutes vos questions sur les bateaux gonflables, les SUP, les matériaux, la sécurité et plus encore.',
  'ai.poweredBy': "Propulsé par l'IA",
  'ai.poweredByLlama': 'Propulsé par Llama 3.2 + Base de Connaissances Vectorielle',
  'ai.suggestedQuestions': 'Questions Suggérées',
  'ai.exploreByTopic': 'Explorer par thème',
  'ai.searching': 'Recherche dans la base de connaissances...',
  'ai.sources': 'Sources',
  'ai.askAnother': 'Poser une autre question',
  'ai.exploreMore': 'Explorer Plus',
  'ai.relatedResources': 'Ressources associées',
  'ai.knowledgeGraph': 'Graphe de Connaissances',
  'ai.kgDesc': "Carte visuelle des relations entre produits, technologies et cas d'usage",
  'ai.productCatalog': 'Catalogue Produits',
  'ai.catalogDesc': 'Parcourez tous les produits avec spécifications et comparaisons',
  'ai.comparisons': 'Comparaisons',
  'ai.comparisonsDesc': 'Comparaisons côte à côte de produits et de matériaux',
  'ai.evidence': 'Preuves & Études de Cas',
  'ai.evidenceDesc': 'Déploiements réels, certifications et résultats de tests',
  'ai.errorRequest': "Désolé, je n'ai pas pu traiter cette demande. Veuillez réessayer.",
  'ai.errorNoResponse': 'Aucune réponse reçue.',
  'ai.errorNetwork': 'Erreur réseau. Vérifiez votre connexion et réessayez.',
  'contact.consent': "J'accepte le traitement de mes données personnelles conformément à la",
  'contact.submit': 'Envoyer le message',
  'contact.success': 'Merci ! Votre message est bien arrivé dans notre boîte de réception.',
  'contact.countryCode': 'Indicatif pays',
  'contact.privacyLink': 'Politique de Confidentialité',
  'contact.consentError': "Veuillez confirmer que vous acceptez la Politique de Confidentialité avant d'envoyer.",
  'contact.error': 'Une erreur est survenue. Veuillez réessayer.',
  'nav.main': 'Navigation principale',
  'nav.solutionsResorts': 'Pour Resorts & Hôtels',
  'nav.solutionsPaddleClubs': 'Pour les Clubs de Paddle',
  'nav.solutionsRentalOperators': 'Pour les Loueurs',
  'nav.solutionsRetailPartners': 'Pour les Revendeurs',
  'nav.solutionsDistributors': 'Pour les Distributeurs',
  'nav.solutionsBuildBrand': 'Créez Votre Marque',
  'nav.resourcesGuides': 'Guides Industriels',
  'nav.resourcesCaseStudies': 'Études de Cas',
  'nav.resourcesFactoryTour': "Visite de l'Usine",
  'nav.resourcesQualityControl': 'Contrôle Qualité',
  'nav.resourcesCertifications': 'Certifications',
  'nav.resourcesDownloadCatalog': 'Télécharger le Catalogue',
  'nav.resourcesJournal': 'Journal',
  'home.ai.ariaLabel': 'Aperçu IA',
  'home.lifestyle.altSup': 'Pratique du SUP',
  'home.community.altOceanVoyager': 'SUP Ocean Voyager',
  'home.community.altCheetahSurge': 'SUP Cheetah Surge',
  'home.community.altTropicalBreeze': 'SUP Tropical Breeze',
  'home.community.altFamily': 'Famille sur bateau gonflable',
  'home.community.altBoatWater': "Bateau gonflable sur l'eau",
  'home.community.altBoatAdventure': 'Aventure en bateau gonflable',
  'home.resources.altWavefella': 'Wavefella',
  'home.resources.altFoida': 'Foida',
  'design.altDesignSession': 'Session de conception technique',
  'design.altOceanVoyager': 'SUP Ocean Voyager',
  'oem.altProduction': "Service de production de l'usine afarer",
  'announcement.signIn': 'Connexion',
  'blog.backToBlog': 'Retour au Blog',
  'blog.viewAllPosts': 'Voir tous les articles',
  'breadcrumb.label': "Fil d'Ariane",
  'language.choose': 'Choisir la langue',
  'map.location': "Localisation de l'entreprise",
  'search.label': 'Rechercher',
  'rss.label': 'Flux RSS',
  'carousel.prev': 'Diapositive précédente',
  'carousel.next': 'Diapositive suivante',
  'graph.zoomIn': 'Zoom avant',
  'graph.zoomOut': 'Zoom arrière',
  'graph.resetView': 'Réinitialiser la vue',
  'graph.title': 'Graphe de Connaissances',
  'graph.subtitle': "Explorez les relations entre produits, technologies, matériaux et cas d'usage",
  'social.share': 'Partager :',
  'social.twitter': 'Partager sur Twitter',
  'social.facebook': 'Partager sur Facebook',
  'social.linkedin': 'Partager sur Linkedin',
  'social.whatsapp': 'Partager sur Whatsapp',
  'social.email': 'Partager par e-mail',
  'related.posts': 'Articles Associés',
  'related.viewAll': 'Voir Tous les Articles',
  'about.metaTitle': 'À Propos — Fabricant de SUP Gonflables & Ingénierie Marine | {SITE}',
  'about.trustBadgesTitle': 'Conçu selon des normes qui comptent',
  'about.trustBadgesSubtitle': 'Chaque produit afarer est certifié, testé et couvert par une garantie qui a du sens.',
  'about.metaDesc':
    "afarer est né d'une conviction simple : les produits nautiques doivent être conçus comme s'ils comptaient. Découvrez notre histoire, notre philosophie océanique et nos principes de conception.",
  'certifications.metaDesc':
    'Les produits afarer sont certifiés CE, ISO 9001:2015, UKCA, BSCI et conformes REACH. Découvrez nos certifications qualité et nos normes de sécurité.',
  'faq.metaDesc': "Questions fréquentes sur les SUP gonflables, l'équipement de sécurité et les sports nautiques.",
  'warranty.metaDesc':
    'Garantie limitée de 5 ans afarer pour les bateaux gonflables, SUP et produits nautiques. Conditions de garantie : bâche, coutures, structure de coque et valves.',
  'privacy.metaDesc':
    'Politique de confidentialité afarer. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.',
  'terms.metaDesc': "Conditions générales afarer régissant l'utilisation de notre site et de nos services.",
  'safety.metaDesc':
    'Normes de sécurité afarer : certification CE, conformité SOLAS, tests de pression et de flottabilité, et consignes de sécurité produit.',
  'partners.metaDesc':
    'Devenez partenaire afarer. Rejoignez notre réseau de distribution mondial au service des revendeurs marins, partenaires OEM et détaillants dans 50+ pays.',
  'resources.metaDesc':
    "Téléchargez catalogues produits, guides de fabrication OEM, listes de contrôle d'achat et documentation technique pour l'approvisionnement en équipement nautique.",
  'sizeGuide.metaDesc':
    'Trouvez la bonne taille de SUP gonflable pour vos besoins. Comparez dimensions, capacités de charge et usages recommandés.',
  'knowledge.metaDesc':
    "Base de connaissances structurée sur la technologie des SUP gonflables, la sécurité nautique, l'ingénierie des bateaux et la planification d'aventures. Guides, comparaisons et analyses approfondies.",
  'technology.metaDesc':
    'Technologie afarer : construction drop stitch, PVC de qualité militaire, coques V profondes en fibre de verre et systèmes de plancher à air.',
  'learn.metaDesc':
    'Guides, tutoriels et analyses approfondies sur le SUP, les sports nautiques et la sécurité. Apprenez à choisir, utiliser et entretenir votre équipement gonflable.',
  'guides.metaDesc':
    'Guides débutants pour le SUP et les sports nautiques. Choisir son SUP, conseils de sécurité, comparaisons gonflable vs rigide, techniques de pagaie et plus.',
  'cases.metaDesc':
    'Projets réels du monde entier : flottes pour centres de plongée, partenariats OEM, fourniture de bateaux de sauvetage, équipements pour resorts et plus.',
  'journal.metaTitle': 'Journal — afarer',
  'journal.metaDesc': "Guides de surf, comparaisons d'équipement et histoires océaniques.",
  'custom.metaTitle': 'Custom Lab — Fabricant OEM/ODM de SUP Gonflables | {SITE}',
  'custom.metaDesc':
    'Fabricant OEM/ODM de SUP gonflables. Designs personnalisés, marque privée, production en série. MOQ 5 à 10 unités, certifié CE, délai de 30 jours. Direct usine Chine.',
  'marineIndustry.metaTitle': 'Guide du SUP Gonflable & Sports Nautiques — Matériaux, Choix & Sécurité | {SITE}',
  'marineIndustry.metaDesc':
    'Un guide complet des SUP gonflables et équipements de sports nautiques : types, méthodes de construction, comparaison des matériaux, critères de choix, normes de sécurité et entretien.',
  'solutions.metaDesc':
    'Équipement de sports nautiques spécialisé pour centres de plongée, services de sauvetage, annexes de yachts, pêche et tourisme maritime.',
  'solutions.divingCenter.metaDesc':
    'SUP et accessoires spécialisés pour centres de plongée et opérations de plongée commerciale. Porte-bouteilles, échelles, plateformes stables — configurés pour votre activité.',
  'solutions.fishing.metaDesc':
    'SUP stables et durables avec accessoires pour le support de la pêche commerciale et de loisir. Porte-cannes, supports sondeurs et construction robuste.',
  'solutions.marineTourism.metaDesc':
    'SUP prêts pour les flottes, accessoires et équipements de sports nautiques pour resorts, opérateurs touristiques et loueurs. Durables, constants, personnalisables.',
  'solutions.oem.metaDesc':
    'Fabrication OEM et marque privée de SUP de bout en bout. Design personnalisé, prototypage, production de masse et logistique mondiale pour les marques.',
  'solutions.paddleClubs.metaDesc':
    'Flottes de SUP gonflables durables pour clubs de paddle, écoles et loueurs. Planches qualité commerciale avec tarifs clubs et support de pièces de rechange.',
  'solutions.rescue.metaDesc':
    "Équipement nautique durable conçu pour le sauvetage, les garde-côtes et les interventions d'urgence. Ponts autovidangeurs, coques renforcées, suites de navigation complètes.",
  'solutions.resorts.metaDesc':
    'Programmes complets de flottes de SUP gonflables pour resorts, hôtels et propriétés en bord de mer. Planches qualité commerciale, marquage personnalisé et formation du personnel.',
  'solutions.yachtTender.metaDesc':
    'Annexes compactes et élégantes pour superyachts et bateaux de plaisance. Couleurs personnalisées, matériaux premium et performances à la hauteur de votre navire.',
};

// --- 2. dead keys to remove (all langs) ---
const DEAD_PREFIXES = ['compare.aluminumVsFiberglass.', 'compare.commercialVsRecreational.'];

let raw = fs.readFileSync(FILE, 'utf8');
const data = JSON.parse(raw);
const langs = Object.keys(data);
let removed = 0;
for (const l of langs) {
  for (const k of Object.keys(data[l])) {
    if (DEAD_PREFIXES.some((p) => k.startsWith(p))) {
      delete data[l][k];
      removed++;
    }
  }
}
let enFixed = 0;
for (const [k, v] of Object.entries(EN_COMPARE)) {
  if (data.en[k] !== v) {
    data.en[k] = v;
    enFixed++;
  }
}
let frAdded = 0;
const allFr = { ...FR_COMPARE, ...FR_UI };
for (const [k, v] of Object.entries(allFr)) {
  if (!data.fr[k]) {
    data.fr[k] = v;
    frAdded++;
  } else if (data.fr[k] === '') {
    data.fr[k] = v;
    frAdded++;
  }
}
fs.writeFileSync(FILE, JSON.stringify(data, null, 2), 'utf8');
console.log('dead keys removed:', removed);
console.log('en compare keys fixed:', enFixed);
console.log('fr keys added:', frAdded, '(total fr:', Object.keys(data.fr).length, ')');
