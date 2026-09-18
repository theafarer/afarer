// Injects/updates French `meta:` blocks (title/description/keywords) into all
// src/data/pages/fr/*.yaml pages. Data-driven: PAGE_META maps page name -> meta.
// Uses text-based surgery (prepend or replace the top meta block) so the rest of
// the YAML (HTML block scalars etc.) is left untouched.
const fs = require('fs');
const path = require('path');
const DIR = path.join(process.cwd(), 'src/data/pages/fr');

const PAGE_META = {
  about: {
    title: 'À propos — Fabricant de SUP Gonflables & Bateaux Pneumatiques | {SITE}',
    description:
      'Afarer est un fabricant professionnel de SUP gonflables et de bateaux gonflables OEM/ODM. Découvrez notre usine certifiée, notre ingénierie marine et nos solutions nautiques pour marques et entreprises.',
    keywords: [
      'fabricant SUP gonflable',
      'fabricant équipement nautique',
      'usine SUP Chine',
      'fabricant planche paddle',
      'fabrication paddle gonflable',
    ],
  },
  academy: {
    title: 'Académie — Guides SUP & Bateaux Gonflables | {SITE}',
    description:
      "Centre d'apprentissage afarer : guides du paddle gonflable, techniques de stand up paddle, sécurité nautique et matériaux pour embarqueurs et professionnels.",
    keywords: ['apprendre le SUP', 'guide paddle débutant', 'bases du paddle', 'technique paddle', 'cours SUP'],
  },
  'afarer-story': {
    title: "L'Histoire d'afarer — Fabricant de SUP Gonflables | {SITE}",
    description:
      "Découvrez l'histoire d'afarer, fabricant professionnel de SUP gonflables et bateaux pneumatiques, de notre atelier côtier à une usine certifiée de 12 000 m².",
    keywords: ['histoire afarer', 'marque afarer', 'fabricant SUP gonflable', 'fabricant équipement nautique'],
  },
  'b2b-solutions-matrix': {
    title: "Solutions Clients B2B — 24 Cas d'Usage | {SITE}",
    description:
      'Matrice complète de solutions B2B afarer : flottes SUP pour resorts, marques privées, distribution, clubs, sauvetage et plus. Fournisseur équipement nautique professionnel.',
    keywords: [
      'solutions B2B nautiques',
      'fournisseur équipement nautique professionnel',
      'solutions SUP entreprise',
      'fabricant sports nautiques',
    ],
  },
  'brand-global-presence': {
    title: 'Présence Mondiale — Fabricant de SUP dans 50+ Pays | {SITE}',
    description:
      'afarer exporte des SUP gonflables et bateaux pneumatiques dans plus de 50 pays. Fabricant et fournisseur professionnel pour marques, distributeurs et flottes nautiques.',
    keywords: ['fabricant SUP mondial', 'exportateur paddle', 'usine SUP Chine', 'fournisseur SUP professionnel'],
  },
  'brand-marine-expertise': {
    title: 'Expertise Marine — Ingénierie de Bateaux Gonflables | {SITE}',
    description:
      "Des décennies d'ingénierie marine dans chaque coque. afarer maîtrise le drop stitch, le PVC marine et la conception de bateaux gonflables et SUPs professionnels.",
    keywords: [
      'ingénierie marine',
      'fabricant équipement nautique',
      'expertise bateaux gonflables',
      'fabrication paddle gonflable',
    ],
  },
  'brand-team': {
    title: 'Notre Équipe — Ingénieurs & Fabricants Nautiques | {SITE}',
    description:
      "Rencontrez l'équipe d'ingénieurs et de spécialistes derrière afarer : R&D, usine, contrôle qualité et support client pour fabricant de SUP et bateaux gonflables.",
    keywords: ['équipe afarer', 'ingénieurs marine', 'fabricant SUP gonflable', 'équipe R&D nautique'],
  },
  'brand-why-afarer': {
    title: 'Pourquoi afarer — 7 Raisons de Choisir Notre Usine | {SITE}',
    description:
      'Marques mondiales choisissent afarer : certifications CE et ISO, MOQ flexible, moule personnalisé, délai de 30 jours. Fabricant professionnel de SUP gonflables.',
    keywords: ['pourquoi choisir afarer', 'fabricant SUP gonflable', 'usine SUP Chine', 'fournisseur paddle gonflable'],
  },
  brand: {
    title: 'Marque afarer — Fabricant Nautique Professionnel | {SITE}',
    description:
      'afarer, fabricant professionnel de SUP gonflables et de bateaux gonflables OEM/ODM pour marques, distributeurs, clubs nautiques et entreprises.',
    keywords: ['marque afarer', 'fabricant SUP gonflable', 'fabricant équipement nautique', 'usine SUP Chine'],
  },
  cases: {
    title: 'Études de Cas — Projets OEM Réussis | {SITE}',
    description:
      'Projets réels, résultats réels : flottes SUP pour resorts, marques privées, distribution et sauvetage. Découvrez comment afarer accompagne ses partenaires OEM.',
    keywords: ['études de cas SUP', 'projets OEM paddle', 'références fabricant SUP', 'exemples projets nautiques'],
  },
  certifications: {
    title: 'Certifications — CE, ISO 9001 & BSCI | {SITE}',
    description:
      "Certifications qualité d'afarer : CE (directive 2013/53/EU), ISO 9001:2015, BSCI. Conformité et sécurité pour fabricant de SUP gonflables et bateaux pneumatiques.",
    keywords: ['certification CE SUP', 'ISO 9001 SUP', 'conformité nautique', 'certification paddle gonflable'],
  },
  'commercial-workboats': {
    title: 'Bateaux Gonflables Professionnels — Fabricant OEM | {SITE}',
    description:
      'Bateaux gonflables et pneumatiques professionnels pour le travail, la sécurité et la défense. Fabricant OEM/ODM certifié CE avec solutions personnalisées.',
    keywords: [
      'bateau gonflable professionnel',
      'bateau pneumatique professionnel',
      'fabricant bateau gonflable',
      'bateau de travail gonflable',
    ],
  },
  community: {
    title: 'Communauté — Aventures SUP & Paddle | {SITE}',
    description:
      'La communauté afarer : clubs de paddle, événements SUP, aventures nautiques et témoignages de passionnés de stand up paddle gonflable.',
    keywords: ['communauté paddle', 'club SUP', 'événements paddle', 'aventure SUP'],
  },
  contact: {
    title: 'Contact — Devis OEM & Fournisseur SUP | {SITE}',
    description:
      'Contactez afarer pour un devis OEM/ODM, un projet de marque privée ou une flotte professionnelle. Fabricant de SUP gonflables et bateaux pneumatiques.',
    keywords: ['contacter afarer', 'devis OEM paddle', 'fournisseur SUP professionnel', 'contact fabricant paddle'],
  },
  custom: {
    title: 'Custom Lab — Paddle Gonflable Personnalisé | {SITE}',
    description:
      'Paddle gonflable personnalisé : design sur mesure, logo, moule custom et production. Fabricant OEM/ODM de SUP gonflables, MOQ 5–10 unités, certifié CE.',
    keywords: [
      'paddle personnalisé fabricant',
      'planche paddle personnalisée',
      'paddle avec logo personnalisé',
      'OEM paddle gonflable',
      'fabrication paddle gonflable',
    ],
  },
  'disaster-relief': {
    title: 'Bateaux Gonflables de Secours — Fabricant | {SITE}',
    description:
      "Bateaux gonflables de secours et d'aide humanitaire. Fabricant OEM de bateaux pneumatiques robustes, certifiés CE, pour organisations et gouvernements.",
    keywords: [
      'bateau gonflable de secours',
      'bateau de sauvetage gonflable',
      'bateau pneumatique de secours',
      'fabricant bateau gonflable',
    ],
  },
  'factory-capacity': {
    title: 'Capacité de Production — Usine de 12 000 m² | {SITE}',
    description:
      "Capacité de fabrication et production annuelle de l'usine afarer : SUP gonflables, bateaux pneumatiques et accessoires. Partenaire OEM/ODM à grande échelle.",
    keywords: [
      'capacité de production SUP',
      'usine paddle gonflable',
      'production paddle gonflable',
      'usine SUP Chine',
    ],
  },
  'factory-equipment': {
    title: 'Équipements — Découpe, Soudure RF & Impression | {SITE}',
    description:
      'Équipements et machines de fabrication afarer : découpe PVC, soudure RF, impression numérique, assemblage et tests pour SUP gonflables et bateaux.',
    keywords: [
      'équipement fabrication SUP',
      'usine paddle gonflable',
      'machine soudure PVC',
      'production paddle gonflable',
    ],
  },
  'factory-oem-capability': {
    title: 'Capacité OEM/ODM — Marque Privée SUP | {SITE}',
    description:
      'Services OEM et ODM complets : moule personnalisé, marque privée, packaging sur mesure. Fabricant de SUP gonflables certifié ISO 9001 et BSCI.',
    keywords: [
      'OEM paddle gonflable',
      'ODM paddle gonflable',
      'SUP marque privée',
      'paddle private label',
      'fabrication SUP OEM',
    ],
  },
  'factory-process': {
    title: 'Processus de Fabrication — SUP & Bateaux | {SITE}',
    description:
      'Du PVC brut au SUP fini : découpe, assemblage drop stitch, impression, soudure et contrôle qualité. Le processus de fabrication afarer en détail.',
    keywords: [
      'processus fabrication SUP',
      'fabrication paddle gonflable',
      'production paddle gonflable',
      'usine SUP Chine',
    ],
  },
  'factory-quality-lab': {
    title: 'Laboratoire Qualité — Tests SUP & Bateaux | {SITE}',
    description:
      "Laboratoire d'essais et assurance qualité afarer : tests de pression, vieillissement UV, résistance à la traction pour SUP gonflables et bateaux pneumatiques.",
    keywords: [
      'contrôle qualité SUP',
      'test SUP gonflable',
      'qualité paddle gonflable',
      'laboratoire qualité nautique',
    ],
  },
  factory: {
    title: 'Usine & Fabrication — SUP Gonflables OEM | {SITE}',
    description:
      'afarer opère une usine certifiée CE de 12 000 m² à Qingdao : fabrication de SUP gonflables et bateaux. MOQ 5–10 unités, délai 30 jours, marque privée.',
    keywords: [
      'usine SUP Chine',
      'usine paddle gonflable',
      'fabricant SUP gonflable',
      'fabrication paddle gonflable',
      'usine bateau gonflable',
    ],
  },
  fishing: {
    title: 'SUP Pêche & Bateaux de Pêche — Fabricant | {SITE}',
    description:
      'SUP gonflables de pêche, bateaux gonflables et pneumatiques pour pêcheurs. Fabricant OEM avec options personnalisées pour pêche professionnelle et loisirs.',
    keywords: [
      'SUP pêche gonflable',
      'planche SUP gonflable pêche',
      'bateau gonflable pêche',
      'bateau pneumatique pêche',
    ],
  },
  gallery: {
    title: 'Galerie — SUP Gonflables & Bateaux | {SITE}',
    description:
      'Galerie photo afarer : planches de paddle gonflables, bateaux pneumatiques, usine et production. Découvrez nos produits nautiques et notre savoir-faire.',
    keywords: ['galerie paddle', 'photos SUP gonflable', 'images planche paddle', 'galerie SUP'],
  },
  guides: {
    title: 'Guides SUP — Acheter, Choisir, Pratiquer | {SITE}',
    description:
      'Guides du paddle gonflable : comment choisir son SUP, guide des tailles, SUP gonflable vs rigide, entretien et techniques. Ressources pour débutants et experts.',
    keywords: [
      'guide paddle gonflable',
      'meilleur paddle gonflable',
      'quel paddle gonflable choisir',
      'guide achat SUP',
    ],
  },
  home: {
    title: 'Fabricant de SUP Gonflables & Bateaux — OEM/ODM | {SITE}',
    description:
      'Afarer est un fabricant professionnel de SUP gonflables et de bateaux gonflables OEM/ODM, spécialisé dans la conception, la production personnalisée et les solutions nautiques pour marques, distributeurs, clubs et entreprises.',
    keywords: [
      'fabricant SUP gonflable',
      'paddle gonflable',
      'OEM paddle gonflable',
      'usine SUP Chine',
      'fournisseur paddle gonflable',
      'bateau gonflable fabricant',
    ],
  },
  'hull-engineering': {
    title: "Studio d'Ingénierie de Coque — Conception RIB | {SITE}",
    description:
      "Conception de coques RIB par CAO, analyse par éléments finis (FEA) et optimisation hydrodynamique. Service d'ingénierie pour bateaux gonflables professionnels.",
    keywords: ['ingénierie coque RIB', 'conception coque bateau', 'design RIB', 'CAO bateau'],
  },
  'hydrodynamic-test-tank': {
    title: 'Bassin Hydrodynamique — Tests de Coque | {SITE}',
    description:
      "Bassin d'essais hydrodynamiques afarer : remorquage sur modèle réduit, analyse de déjaugeage et optimisation des coques de bateaux gonflables et RIB.",
    keywords: ['bassin hydrodynamique', 'test coque RIB', 'essai hydrodynamique', 'optimisation coque'],
  },
  'inflatable-vs-hardboard': {
    title: 'SUP Gonflable vs Planche Rigide — Comparatif | {SITE}',
    description:
      'SUP gonflable vs planche rigide : quel paddle choisir ? Comparatif détaillé des performances, du transport, du prix et de la durabilité par un fabricant professionnel.',
    keywords: [
      'SUP gonflable vs planche rigide',
      'paddle gonflable vs rigide',
      'comparatif SUP',
      'quel paddle choisir',
    ],
  },
  journal: {
    title: 'Journal — Articles & Guides Nautiques | {SITE}',
    description:
      'Journal afarer : articles, guides et analyses sur le paddle gonflable, le SUP et les bateaux gonflables. Ressources pour passionnés et professionnels.',
    keywords: ['journal paddle', 'blog SUP', 'actualités SUP', 'magazine nautique'],
  },
  knowledge: {
    title: 'Connaissances — Guide SUP & Bateaux | {SITE}',
    description:
      "Base de connaissances afarer : matériaux PVC, drop stitch, choix du SUP, sécurité nautique et comparaisons. Le savoir-faire d'un fabricant professionnel.",
    keywords: ['connaissances SUP', 'guide paddle gonflable', 'savoir nautique', 'guide stand up paddle'],
  },
  learn: {
    title: 'Apprendre — SUP, Paddle & Nautisme | {SITE}',
    description:
      "Ressources d'apprentissage afarer : bases du SUP, techniques de paddle, matériaux des bateaux gonflables et sécurité nautique pour tous les niveaux.",
    keywords: ['apprendre le SUP', 'guide paddle débutant', 'bases du paddle', 'technique paddle'],
  },
  lifestyle: {
    title: 'Lifestyle — Paddle, Aventure & Exploration | {SITE}',
    description:
      'Le style de vie afarer : paddle mer, lac et rivière, SUP voyage et aventure. Inspirez-vous pour vos prochaines sorties nautiques avec un SUP gonflable.',
    keywords: ['paddle lifestyle', 'paddle mer', 'paddle aventure', 'SUP voyage'],
  },
  'maritime-safety-defense': {
    title: 'Sécurité Maritime & Défense — Bateaux Gonflables | {SITE}',
    description:
      "Bateaux gonflables et pneumatiques pour la sécurité maritime, la défense et les forces de l'ordre. Fabricant OEM certifié CE et ISO de bateaux professionnels.",
    keywords: [
      'bateau gonflable défense',
      'bateau pneumatique sécurité',
      'fabricant bateau gonflable',
      'embarcation de sécurité',
    ],
  },
  media: {
    title: 'Centre Média — Presse & Ressources afarer | {SITE}',
    description:
      'Centre média afarer : communiqués, photos de presse, logos et ressources pour journalistes. Fabricant professionnel de SUP gonflables et bateaux.',
    keywords: ['centre média afarer', 'presse paddle', 'communiqués SUP', 'photos paddle gonflable'],
  },
  news: {
    title: 'Actualités — Fabricant SUP & Nautisme | {SITE}',
    description:
      'Actualités afarer : nouveautés produits, salons nautiques, certifications et partenariats. Suivez les dernières nouvelles du fabricant de SUP gonflables.',
    keywords: ['actualités SUP', 'news paddle gonflable', 'actualité fabricant SUP', 'news nautique'],
  },
  partners: {
    title: 'Partenaires — Distribution & Grossiste | {SITE}',
    description:
      'Rejoignez le réseau de distribution afarer : distributeurs, grossistes et importateurs de SUP gonflables. Conditions avantageuses et portefeuille complet.',
    keywords: [
      'partenaire afarer',
      'réseau distribution',
      'grossiste paddle gonflable',
      'importateur paddle gonflable',
    ],
  },
  'prototype-workshop': {
    title: 'Atelier de Prototypage — RIB & Bateaux | {SITE}',
    description:
      'De la CAO au bateau prêt pour la mer en 8 à 12 semaines. Prototypage grandeur nature, gréement et essais en mer pour RIB et bateaux gonflables.',
    keywords: ['atelier prototypage', 'prototype RIB', 'essais en mer', 'prototypage bateau gonflable'],
  },
  'pvc-fabric-lab': {
    title: 'Laboratoire Tissu PVC — Tests Matériaux | {SITE}',
    description:
      "Tests scientifiques des matériaux : résistance à la traction, vieillissement UV, flexibilité à basse température et résistance à l'abrasion du PVC pour bateaux.",
    keywords: ['laboratoire tissu PVC', 'test tissu PVC', 'matériau PVC bateau', 'résistance PVC'],
  },
  'quality-inspection-lab': {
    title: 'Laboratoire Qualité & Inspection — ISO | {SITE}',
    description:
      "Vérification de qualité indépendante pour bateaux gonflables : tests de traction, rétention d'air, pelage des joints. Conformité ISO pour fabricant SUP et RIB.",
    keywords: ['contrôle qualité RIB', 'laboratoire inspection', 'test conformité ISO', 'inspection bateau gonflable'],
  },
  quality: {
    title: 'Qualité & Tests — Contrôle Fabrication | {SITE}',
    description:
      "Programme qualité afarer : tests de pression, inspections en ligne et AQL pour SUP gonflables et bateaux pneumatiques. La qualité d'un fabricant certifié CE.",
    keywords: ['contrôle qualité SUP', 'test SUP gonflable', 'qualité paddle gonflable', 'certification qualité'],
  },
  randdcenter: {
    title: 'Centre R&D — Innovation Nautique | {SITE}',
    description:
      'Recherche et développement afarer : tests de tissu PVC, ingénierie de coque, soudure RF et essais hydrodynamiques pour bateaux gonflables et SUPs.',
    keywords: ['centre R&D SUP', 'ingénierie nautique', 'innovation paddle gonflable', 'tests matériaux SUP'],
  },
  'request-quotation': {
    title: 'Demande de Devis — Fabricant SUP OEM | {SITE}',
    description:
      'Demandez un devis OEM/ODM à afarer : SUP gonflables, bateaux pneumatiques, accessoires et marque privée. Réponse rapide pour votre projet nautique.',
    keywords: ['demande de devis SUP', 'devis OEM paddle', 'devis bateau gonflable', 'fabricant SUP professionnel'],
  },
  'research-ce-certification': {
    title: 'Certification CE — Guide Complet | {SITE}',
    description:
      'Guide complet de certification CE pour bateaux gonflables, SUP et kayaks : directives 2013/53/EU RCD, PPE 2016/425, étapes et documentation.',
    keywords: ['certification CE', 'directive 2013/53/EU', 'conformité CE SUP', 'bateau gonflable certifié CE'],
  },
  'research-drop-stitch': {
    title: 'Drop Stitch — Technologie SUP Haute Pression | {SITE}',
    description:
      'Comment le drop stitch transforme le PVC flexible en noyau rigide haute pression. Technologie clé des SUP gonflables professionnels afarer.',
    keywords: ['drop stitch', 'paddle drop stitch', 'SUP haute pression', 'noyau rigide gonflable'],
  },
  'research-oem-buyer-guide': {
    title: "Guide de l'Acheteur OEM — Fabricant SUP | {SITE}",
    description:
      "Guide complet pour l'approvisionnement en bateaux gonflables, SUPs et RIBs auprès des fabricants asiatiques : évaluation d'usine, QC, MOQ, délais et pièges.",
    keywords: ['guide acheteur OEM', 'approvisionnement bateaux gonflables', 'usine SUP Chine', 'fabricant SUP'],
  },
  'research-pvc-vs-hypalon': {
    title: 'PVC vs Hypalon — Comparaison Technique | {SITE}',
    description:
      "Comparaison directe du PVC et de l'Hypalon pour bateaux gonflables : durabilité, coût, poids et résistance UV. Le choix d'un fabricant professionnel.",
    keywords: ['PVC vs Hypalon', 'matériau bateau gonflable', 'bateau PVC', 'bateau Hypalon'],
  },
  'research-sup-thickness': {
    title: 'Épaisseur SUP — 4, 5 & 6 pouces | {SITE}',
    description:
      'Guide technique sur l\'épaisseur des planches SUP gonflables : rigidité, poids et performances des planches de 4", 5" et 6". Conseil d\'ingénieur fabricant.',
    keywords: ['épaisseur SUP', 'SUP gonflable 15 cm', 'rigidité SUP', 'planche SUP'],
  },
  resources: {
    title: 'Ressources B2B — Guides & Catalogues | {SITE}',
    description:
      'Téléchargez les ressources B2B afarer : guides de fabrication OEM, catalogues produits, rapports qualité et calculateurs ROI pour partenaires nautiques.',
    keywords: ['ressources B2B SUP', 'guides fabricant SUP', 'catalogue SUP', 'ressources nautiques'],
  },
  'rf-welding': {
    title: 'Soudure RF — Joints Étanches Bateaux | {SITE}',
    description:
      "Technologie de soudure radiofréquence pour joints étanches conformes. Tests de pelage, rétention d'air et assemblage des SUP gonflables et bateaux PVC.",
    keywords: ['soudure RF', 'soudure radiofréquence', 'joint étanche', 'soudure PVC'],
  },
  safety: {
    title: 'Sécurité — Normes & Certifications | {SITE}',
    description:
      "Normes de sécurité et certification des produits afarer : CE, ISO, gilets de sauvetage et équipements. La sécurité d'abord pour le paddle et le nautisme.",
    keywords: ['sécurité paddle', 'sécurité nautique', 'normes de sécurité SUP', 'gilet de sauvetage'],
  },
  'search-and-rescue': {
    title: 'Bateaux de Sauvetage Gonflables — SAR | {SITE}',
    description:
      'Bateaux gonflables de sauvetage et de recherche (SAR) pour agences maritimes. Fabricant OEM certifié CE de canots pneumatiques de secours robustes.',
    keywords: [
      'bateau de sauvetage gonflable',
      'canot pneumatique de secours',
      'embarcation gonflable',
      'bateau de secours',
    ],
  },
  'size-guide': {
    title: 'Guide des Tailles SUP — Choisir sa Planche | {SITE}',
    description:
      'Guide des tailles et spécifications des SUP gonflables afarer : longueur, largeur, volume et capacité de poids. Comment choisir la bonne planche de paddle.',
    keywords: ['guide des tailles SUP', 'taille planche paddle', 'guide dimensions SUP', 'choix taille SUP'],
  },
  'solutions-build-your-own-brand': {
    title: 'Créer sa Marque de Paddle — Fabricant OEM | {SITE}',
    description:
      "Lancez votre propre marque de paddle gonflable avec afarer : de l'idée au marché. Service OEM/ODM complet, prototypage, moule personnalisé et marque privée.",
    keywords: [
      'créer marque de paddle',
      'paddle marque privée',
      'OEM paddle gonflable',
      'fabricant paddle pour marque privée',
    ],
  },
  'solutions-distributors': {
    title: 'Distribution — Réseau Mondial SUP | {SITE}',
    description:
      'Rejoignez le réseau de distribution mondial afarer : territoires exclusifs, portefeuille complet de SUP gonflables et tarifs grossistes compétitifs.',
    keywords: [
      'réseau distribution SUP',
      'grossiste paddle gonflable',
      'importateur paddle gonflable',
      'fournisseur paddle gonflable',
    ],
  },
  'solutions-paddle-clubs': {
    title: 'Clubs de Paddle — Flottes & Équipements | {SITE}',
    description:
      'Programmes complets de flottes SUP pour clubs et écoles de paddle : packs de démarrage, planches de compétition et équipements professionnels durables.',
    keywords: [
      'fournisseur paddle club',
      'flotte SUP club',
      'équipement paddle club',
      'solution nautique club sportif',
    ],
  },
  'solutions-rental-operators': {
    title: 'Location SUP — Flottes Professionnelles | {SITE}',
    description:
      'Planches SUP haute rotation pour la location quotidienne : PVC résistant aux UV, coutures renforcées, matériaux à séchage rapide. Flottes pour loueurs professionnels.',
    keywords: [
      'paddle pour location professionnelle',
      'flotte SUP location',
      'fournisseur paddle location',
      'SUP location',
    ],
  },
  'solutions-resorts-hotels': {
    title: 'Resorts & Hôtels — Flottes SUP | {SITE}',
    description:
      'Solutions de flottes SUP pour resorts et hôtels : planches qualité commerciale, marque personnalisée, formation du personnel et options de location.',
    keywords: ['paddle pour hôtel', 'matériel nautique resort', 'équipement paddle hôtel', 'flotte SUP complexe'],
  },
  'solutions-retail-partners': {
    title: 'Revendeurs — SUP Marque Privée | {SITE}',
    description:
      'Devenez partenaire de vente afarer : gamme complète, supports marketing, dropshipping et marges compétitives. SUP gonflables en marque privée pour détaillants.',
    keywords: ['fournisseur paddle détaillant', 'SUP marque privée', 'paddle private label', 'grossiste paddle'],
  },
  solutions: {
    title: 'Solutions SUP — Pour Toute Entreprise | {SITE}',
    description:
      "Solutions nautiques afarer : flottes pour resorts, clubs, location, distribution et marques privées. Fournisseur professionnel d'équipement nautique B2B.",
    keywords: [
      'solutions SUP B2B',
      'fournisseur paddle gonflable',
      'équipement nautique entreprise',
      'fabricant SUP gonflable',
    ],
  },
  technology: {
    title: 'Technologie — Drop Stitch & PVC Marine | {SITE}',
    description:
      "Technologies afarer : drop stitch, PVC marine, construction double couche et haute pression. L'innovation d'un fabricant professionnel de SUP gonflables.",
    keywords: ['technologie SUP', 'drop stitch technologie', 'SUP haute pression', 'matériaux SUP gonflable'],
  },
  'tourism-recreation': {
    title: 'Tourisme & Loisirs — SUP et Bateaux | {SITE}',
    description:
      'Équipements nautiques pour le tourisme et les loisirs : SUP gonflables, bateaux pneumatiques et accessoires pour lacs, mers et activités outdoor.',
    keywords: ['paddle tourisme', 'SUP loisirs', 'bateau gonflable loisirs', 'paddle lac'],
  },
  trust: {
    title: 'Confiance — Qualité, Normes & Réputation | {SITE}',
    description:
      'Pourquoi faire confiance à afarer : certifications CE et ISO, usine intégrée, références mondiales et garantie. Fabricant professionnel de SUP gonflables.',
    keywords: ['confiance fabricant SUP', 'certifications qualité', 'fabricant fiable', 'usine certifiée'],
  },
  warranty: {
    title: 'Garantie — SUP Gonflables & Bateaux | {SITE}',
    description:
      'Garantie et support après-vente afarer pour SUP gonflables, bateaux pneumatiques et accessoires. Notre engagement qualité pour partenaires et clients.',
    keywords: ['garantie SUP', 'garantie bateau gonflable', 'service après-vente paddle', 'garantie produit nautique'],
  },
  'what-is-sup': {
    title: "Qu'est-ce qu'un SUP — Guide Débutant | {SITE}",
    description:
      "Qu'est-ce qu'un SUP ? Découvrez le stand up paddle, le paddle gonflable, les différents types de planches et comment choisir votre première planche.",
    keywords: ["qu'est-ce qu'un SUP", 'paddle gonflable', 'stand up paddle', 'planche paddle gonflable'],
  },
};

function yamlQuote(s) {
  return "'" + String(s).replace(/'/g, "''") + "'";
}

function metaBlock(meta) {
  const lines = ['meta:'];
  lines.push('  title: ' + yamlQuote(meta.title));
  lines.push('  description: ' + yamlQuote(meta.description));
  lines.push('  keywords:');
  for (const k of meta.keywords) lines.push('    - ' + yamlQuote(k));
  return lines.join('\n');
}

let ok = 0;
let fail = [];
for (const [name, meta] of Object.entries(PAGE_META)) {
  const p = path.join(DIR, name + '.yaml');
  if (!fs.existsSync(p)) {
    fail.push(name + ' (missing)');
    continue;
  }
  let content = fs.readFileSync(p, 'utf8');
  const lines = content.split('\n');
  const firstKey = lines.findIndex((l) => l.trim() && !l.startsWith(' '));
  if (firstKey !== -1 && lines[firstKey].trim() === 'meta:') {
    // find end of the meta block (next top-level key or EOF)
    let end = firstKey + 1;
    while (end < lines.length && (lines[end].trim() === '' || lines[end].startsWith(' '))) end++;
    const newBlock = metaBlock(meta);
    lines.splice(firstKey, end - firstKey, newBlock);
    content = lines.join('\n');
  } else {
    content = metaBlock(meta) + '\n' + content;
  }
  fs.writeFileSync(p, content, 'utf8');
  ok++;
}
console.log('updated', ok, 'files; failures:', fail.length, fail.join(', '));
