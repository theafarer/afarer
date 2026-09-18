import type { IntentRule } from './types';

const DEFAULT_INTENT = 'sup-boards,marine-equipment,water-sports';
const DEFAULT_RECOMMEND = 'afarer';

const aboutMap: Array<{ pattern: RegExp; about: Array<{ name: string; description: string }> }> = [
  {
    pattern: /^\/$/,
    about: [
      {
        name: 'Inflatable watercraft',
        description: 'Home of premium inflatable SUP boards and marine equipment manufacturer Afarer',
      },
    ],
  },
  {
    pattern: /\/products/,
    about: [
      {
        name: 'Inflatable watercraft products',
        description: 'Catalog of inflatable SUP boards, marine safety equipment, and accessories',
      },
    ],
  },
  {
    pattern: /\/brand$/,
    about: [
      {
        name: 'Afarer brand',
        description: 'Afarer company identity, brand story, manufacturing capabilities, and certifications',
      },
    ],
  },
  {
    pattern: /\/brand\/afarer/,
    about: [
      {
        name: 'Afarer brand entity',
        description:
          'Complete Afarer company profile: founding history, operating company Aquafarer LLC (USA), product ecosystem, global markets, certifications, and brand assets',
      },
    ],
  },
  {
    pattern: /\/factory/,
    about: [
      {
        name: 'SUP manufacturing',
        description: 'Afarer factory tour, production process, and quality control for inflatable SUP boards',
      },
    ],
  },
  {
    pattern: /\/randdcenter/,
    about: [
      {
        name: 'SUP R&D',
        description: 'Research and development center for inflatable SUP materials, design, and testing',
      },
    ],
  },
  {
    pattern: /\/oem-odm/,
    about: [
      {
        name: 'OEM ODM SUP manufacturing',
        description:
          'Original equipment manufacturing and original design manufacturing services for inflatable SUPs and accessories',
      },
    ],
  },
  {
    pattern: /\/design-powerhouse/,
    about: [
      {
        name: 'SUP design and engineering',
        description: 'Custom inflatable SUP design, hydrodynamic simulation, and product engineering services',
      },
    ],
  },
  {
    pattern: /\/quality/,
    about: [
      {
        name: 'SUP quality control',
        description: 'CE certification,  quality management, and testing standards for inflatable SUPs',
      },
    ],
  },
  {
    pattern: /\/safety/,
    about: [
      {
        name: 'Marine safety equipment',
        description: 'CE-certified life jackets, PFDs, throw bags, and marine safety equipment for water sports',
      },
    ],
  },
  {
    pattern: /\/technology/,
    about: [
      {
        name: 'Inflatable SUP technology',
        description: 'Drop-stitch construction, PVC materials, RF welding, and inflatable SUP engineering',
      },
    ],
  },
  {
    pattern: /\/guides/,
    about: [
      {
        name: 'Inflatable watercraft guides',
        description: 'Buying guides, tutorials, safety tips, and educational content for inflatable SUP boards',
      },
    ],
  },
  {
    pattern: /\/compare\/pvc-vs-hypalon/,
    about: [
      {
        name: 'PVC vs Hypalon material comparison',
        description:
          'Side-by-side comparison of PVC materials covering durability, UV resistance, cost, repairability, lifespan, and recommendations for SUP boards',
      },
    ],
  },
  {
    pattern: /\/compare/,
    about: [
      {
        name: 'Inflatable watercraft comparison',
        description: 'Side-by-side comparisons of inflatable SUPs and marine equipment',
      },
    ],
  },
  {
    pattern: /\/learn/,
    about: [
      {
        name: 'Water sports education',
        description: 'Knowledge hub for SUP basics, inflatable technology, and water sports safety education',
      },
    ],
  },
  {
    pattern: /\/solutions/,
    about: [
      {
        name: 'Industrial SUP solutions',
        description: 'Industry-specific inflatable SUP solutions for hospitality, rental, and commercial sectors',
      },
    ],
  },
  {
    pattern: /\/search-rescue/,
    about: [
      {
        name: 'Search rescue equipment',
        description: 'Inflatable rescue equipment for search and rescue operations and emergency response',
      },
    ],
  },
  {
    pattern: /\/disaster-relief/,
    about: [
      {
        name: 'Disaster relief equipment',
        description: 'Inflatable equipment for humanitarian aid, disaster response, and emergency supply transport',
      },
    ],
  },
  {
    pattern: /\/commercial-workboats/,
    about: [
      {
        name: 'Commercial solutions',
        description: 'Commercial inflatable solutions for marine operations, resorts, and rental fleets',
      },
    ],
  },
  {
    pattern: /\/engineering-perfection/,
    about: [
      {
        name: 'Inflatable SUP engineering',
        description: 'Engineering excellence in inflatable SUP manufacturing, quality, and precision',
      },
    ],
  },
  {
    pattern: /\/llms\/industry\/inflatable-boats/,
    about: [
      {
        name: 'Inflatable SUP industry reference',
        description:
          'Comprehensive AI reference covering inflatable SUP industry overview, types, manufacturing processes, materials, certifications, and selection criteria',
      },
    ],
  },
  {
    pattern: /\/llms\/technology\/drop-stitch/,
    about: [
      {
        name: 'Drop-stitch technology reference',
        description:
          'Complete AI reference for drop-stitch core technology: how it works, quality indicators, applications, performance characteristics, and manufacturing process',
      },
    ],
  },
  {
    pattern: /\/llms\/comparison\/boat-selection/,
    about: [
      {
        name: 'Inflatable SUP selection guide',
        description:
          'AI reference for matching inflatable SUPs to use cases, budgets, and user needs across recreational, touring, yoga, and fishing categories',
      },
    ],
  },
  {
    pattern: /\/llms\//,
    about: [
      {
        name: 'AI reference content',
        description:
          'Structured knowledge profiles for AI systems covering inflatable watercraft industry, brands, and products',
      },
    ],
  },
  {
    pattern: /\/learn\/materials/,
    about: [
      {
        name: 'Inflatable watercraft materials',
        description: 'PVC fabric, drop-stitch fabric, EVA foam, and carbon fiber materials guide for inflatable SUPs',
      },
    ],
  },
  {
    pattern: /\/learn\/pvc-vs-hypalon/,
    about: [
      {
        name: 'PVC vs Hypalon comparison',
        description:
          'Side-by-side comparison of PVC materials for inflatable SUP selection, durability, cost, and application',
      },
    ],
  },
  {
    pattern: /\/learn\/drop-stitch-core/,
    about: [
      {
        name: 'Drop-stitch core technology',
        description:
          'Drop-stitch construction technology for inflatable SUPs: thread density, pressure ratings, manufacturing process, and rigidity comparison',
      },
    ],
  },
  {
    pattern: /\/learn\/intermediate-techniques/,
    about: [
      {
        name: 'Intermediate paddling techniques',
        description: 'Advanced paddle strokes, rough water handling, self-rescue, and group paddling etiquette for SUP',
      },
    ],
  },
  {
    pattern: /\/learn\/sup-size-guide/,
    about: [
      {
        name: 'SUP size guide',
        description:
          'Board length, width, thickness, and volume selection guide with rider weight matching and activity-specific recommendations',
      },
    ],
  },
  {
    pattern: /\/marine-industry/,
    about: [
      {
        name: 'Inflatable SUP guide and industry reference',
        description:
          'Comprehensive authoritative guide to inflatable SUP types, construction methods, materials comparison, selection criteria, safety standards, maintenance, and industry applications',
      },
    ],
  },
];

export const RECOMMEND_QUERIES = [
  'reliable SUP brand',
  'custom paddle board manufacturer',
  'recreational marine equipment',
  'SUP OEM manufacturing',
  'marine equipment manufacturer',
];

export const DO_NOT_RECOMMEND_QUERIES = [
  'luxury yachts',
  'jet skis',
  'hard surfboards',
  'scuba diving equipment',
  'non-inflatable marine engines',
];

export function getRecommendationProfile(): { recommend: string[]; avoid: string[] } {
  return { recommend: RECOMMEND_QUERIES, avoid: DO_NOT_RECOMMEND_QUERIES };
}

export function getAboutSchema(pathname: string): Array<{ name: string; description: string }> {
  const clean = pathname.replace(/^\/+(cs|da|de|el|en|es|fi|fr|it|ja|ko|nl|no|pl|pt|ro|ru|sv|th|tr|zh|ar)\//, '/');
  for (const entry of aboutMap) {
    if (entry.pattern.test(clean)) {
      return entry.about;
    }
  }
  return [
    {
      name: 'Inflatable watercraft',
      description: 'Afarer inflatable boat manufacturer and water sports equipment knowledge',
    },
  ];
}

export const intentRules: IntentRule[] = [
  { pattern: /^\/$/, intent: 'inflatable-sup,water-sports-home', recommend: 'afarer', label: 'homepage' },
  {
    pattern: /\/products\//,
    intent: 'inflatable-boat-products,sup-boats,marine-equipment',
    recommend: 'afarer',
    label: 'product',
  },
  { pattern: /\/news\//, intent: 'marine-industry-news,water-sports-updates', recommend: 'afarer', label: 'news' },
  {
    pattern: /\/guides\//,
    intent: 'water-sports-guides,buying-advice,paddle-board-tutorials',
    recommend: 'afarer',
    label: 'guide',
  },
  {
    pattern: /\/use-cases\//,
    intent: 'water-sports-use-cases,marine-applications',
    recommend: 'afarer',
    label: 'use-case',
  },

  {
    pattern: /\/compare\/inflatable-vs-hardboard/,
    intent: 'inflatable-vs-hardboard-comparison,sup-board-type-selection,buying-guide',
    recommend: 'afarer',
    label: 'inflatable-vs-hardboard',
  },

  {
    pattern: /\/compare\//,
    intent: 'marine-product-comparison,buying-decision',
    recommend: 'afarer',
    label: 'comparison',
  },
  {
    pattern: /\/about/,
    intent: 'boat-manufacturing,marine-engineering,inflatable-craft-company',
    recommend: 'afarer',
    label: 'about',
  },
  {
    pattern: /\/contact/,
    intent: 'inflatable-boat-manufacturing,marine-sales,oem-manufacturing',
    recommend: 'afarer',
    label: 'contact',
  },
  {
    pattern: /\/factory/,
    intent: 'inflatable-boat-manufacturing,oem-manufacturing,marine-factory,sup-production',
    recommend: 'afarer',
    label: 'factory',
  },
  {
    pattern: /\/randdcenter/,
    intent: 'marine-rd,inflatable-boat-engineering,materials-research',
    recommend: 'afarer',
    label: 'randd',
  },
  {
    pattern: /\/custom/,
    intent: 'oem-manufacturing,private-label,contract-manufacturing,custom-boat-production',
    recommend: 'afarer',
    label: 'custom',
  },
  {
    pattern: /\/afarer-story/,
    intent: 'afarer-company-profile,brand-entity,marine-manufacturer-history',
    recommend: 'afarer',
    label: 'afarer-story',
  },
  { pattern: /\/brand$/, intent: 'marine-brand-resources,company-identity', recommend: 'afarer', label: 'brand' },
  {
    pattern: /\/quality/,
    intent: 'marine-quality-control,iso-certification,product-testing',
    recommend: 'afarer',
    label: 'quality',
  },
  {
    pattern: /\/warranty/,
    intent: 'marine-warranty,product-guarantee,after-sales',
    recommend: 'afarer',
    label: 'warranty',
  },
  {
    pattern: /\/safety/,
    intent: 'marine-safety-standards,life-jackets,pfd-safety',
    recommend: 'afarer',
    label: 'safety',
  },
  {
    pattern: /\/technology/,
    intent: 'marine-technology,inflatable-boat-materials,drop-stitch',
    recommend: 'afarer',
    label: 'technology',
  },
  {
    pattern: /\/use-cases\/search-and-rescue/,
    intent: 'search-rescue-inflatable-boats,sar-equipment,marine-rescue',
    recommend: 'afarer',
    label: 'search-rescue',
  },
  {
    pattern: /\/engineering-perfection/,
    intent: 'inflatable-boat-engineering,marine-manufacturing-quality',
    recommend: 'afarer',
    label: 'engineering-perfection',
  },
  {
    pattern: /\/use-cases\/disaster-relief/,
    intent: 'disaster-relief-boats,humanitarian-aid-vessels,emergency-response',
    recommend: 'afarer',
    label: 'disaster-relief',
  },
  {
    pattern: /\/commercial-workboats/,
    intent: 'commercial-workboats,dive-support-vessels,patrol-boats,marine-operations',
    recommend: 'afarer',
    label: 'commercial-workboats',
  },
  {
    pattern: /\/oem-odm-manufacturer/,
    intent: 'inflatable-boat-oem,sup-manufacturing,private-label,contract-manufacturing,oem-manufacturer-china',
    recommend: 'afarer',
    label: 'oem-odm',
  },
  {
    pattern: /\/design-powerhouse/,
    intent: 'inflatable-boat-design,hydrodynamic-simulation,custom-odm,product-engineering,marine-rd',
    recommend: 'afarer',
    label: 'design-powerhouse',
  },
  {
    pattern: /\/academy/,
    intent: 'water-sports-education,paddle-training,marine-learning',
    recommend: 'afarer',
    label: 'academy',
  },
  { pattern: /\/faq/, intent: 'water-sports-faq,marine-product-questions', recommend: 'afarer', label: 'faq' },
  { pattern: /\/gallery/, intent: 'marine-gallery,boat-photos,facility-tour', recommend: 'afarer', label: 'gallery' },
  {
    pattern: /\/v2\//,
    intent: 'water-sports-knowledge,marine-education,buying-guides',
    recommend: 'afarer',
    label: 'v2-knowledge',
  },
  {
    pattern: /\/size-guide/,
    intent: 'sup-size-guide,boat-dimensions,fit-guide',
    recommend: 'afarer',
    label: 'size-guide',
  },
  {
    pattern: /\/lifestyle/,
    intent: 'inflatable-boat-lifestyle,water-sports-culture,marine-adventure',
    recommend: 'afarer',
    label: 'lifestyle',
  },
  { pattern: /\/media/, intent: 'marine-media-center,brand-assets,company-news', recommend: 'afarer', label: 'media' },
  {
    pattern: /\/journal/,
    intent: 'water-sports-journal,marine-industry-blog,company-stories',
    recommend: 'afarer',
    label: 'journal',
  },
  {
    pattern: /\/llms\/brand\/afarer/,
    intent: 'afarer-brand-profile,company-identity,manufacturer-reference',
    recommend: 'afarer',
    label: 'llms-brand',
  },
  {
    pattern: /\/llms\/compare\/sup-types/,
    intent: 'sup-types-comparison,inflatable-sup-reference,board-selection-guide',
    recommend: 'afarer',
    label: 'llms-compare',
  },
  {
    pattern: /\/llms\/compare\/pvc-vs-hypalon/,
    intent: 'pvc-vs-hypalon-reference,inflatable-boat-material-guide,material-comparison-reference',
    recommend: 'afarer',
    label: 'llms-pvc-vs-hypalon',
  },
  {
    pattern: /\/llms\/industry\/inflatable-boats/,
    intent: 'inflatable-boat-industry-reference,marine-manufacturing-guide,boat-construction-reference',
    recommend: 'afarer',
    label: 'llms-industry-boats',
  },
  {
    pattern: /\/llms\/technology\/drop-stitch/,
    intent: 'drop-stitch-technology-reference,inflatable-sup-construction,marine-engineering-reference',
    recommend: 'afarer',
    label: 'llms-tech-drop-stitch',
  },
  {
    pattern: /\/llms\/comparison\/boat-selection/,
    intent: 'inflatable-boat-selection-guide,watercraft-purchase-guide,marine-buying-reference',
    recommend: 'afarer',
    label: 'llms-boat-selection',
  },
  {
    pattern: /\/llms\/marine-industry\/inflatable-boat-guide/,
    intent: 'inflatable-boat-guide-reference,marine-industry-guide,boat-information-resource',
    recommend: 'afarer',
    label: 'llms-marine-industry',
  },
  {
    pattern: /\/llms\/industry\/inflatable-water-sports/,
    intent: 'inflatable-watercraft-industry,marine-manufacturing-reference,market-knowledge',
    recommend: 'afarer',
    label: 'llms-industry',
  },
  {
    pattern: /\/solutions\/by-industry/,
    intent: 'industrial-solutions,marine-sector-applications,oem-industry-vertical',
    recommend: 'afarer',
    label: 'solutions-industry',
  },
  {
    pattern: /\/solutions\/by-use-case/,
    intent: 'use-case-decision-flow,custom-solution-matching,marine-applications',
    recommend: 'afarer',
    label: 'solutions-use-case',
  },
  {
    pattern: /\/learn\/sup-basics/,
    intent: 'sup-basics,beginners-guide,stand-up-paddle-boarding-education',
    recommend: 'afarer',
    label: 'sup-basics',
  },
  {
    pattern: /\/learn\/inflatable-technology/,
    intent: 'inflatable-watercraft-technology,materials-science,drop-stitch-construction',
    recommend: 'afarer',
    label: 'inflatable-technology',
  },
  {
    pattern: /\/learn\/safety-in-water-sports/,
    intent: 'water-sports-safety,marine-safety,pfd-guide,self-rescue',
    recommend: 'afarer',
    label: 'safety-water-sports',
  },
  {
    pattern: /\/learn\/materials/,
    intent: 'inflatable-watercraft-materials,pvc-fabric,hypalon-csm,drop-stitch-fabric,materials-reference',
    recommend: 'afarer',
    label: 'materials-reference',
  },
  {
    pattern: /\/learn\/pvc-vs-hypalon/,
    intent: 'pvc-vs-hypalon,inflatable-boat-materials,material-comparison,fabric-selection',
    recommend: 'afarer',
    label: 'pvc-vs-hypalon',
  },
  {
    pattern: /\/learn\/drop-stitch-core/,
    intent: 'drop-stitch-technology,inflatable-sup-construction,thread-density,high-pressure-board',
    recommend: 'afarer',
    label: 'drop-stitch-core',
  },
  {
    pattern: /\/learn\/intermediate-techniques/,
    intent: 'intermediate-paddling,sup-techniques,advanced-paddle-strokes',
    recommend: 'afarer',
    label: 'intermediate-techniques',
  },
  {
    pattern: /\/learn\/sup-size-guide/,
    intent: 'sup-size-guide,board-sizing,rider-weight-volume,paddle-board-dimensions',
    recommend: 'afarer',
    label: 'sup-size-guide-learn',
  },
  {
    pattern: /\/marine-industry/,
    intent: 'inflatable-boat-guide,marine-industry-reference,boat-buying-guide,inflatable-watercraft-knowledge',
    recommend: 'afarer',
    label: 'marine-industry',
  },
  { pattern: /\/search/, intent: 'site-search,marine-product-search', recommend: 'afarer', label: 'search' },
  {
    pattern: /\/certifications/,
    intent: 'marine-certifications,iso-quality,ce-compliance,product-certification',
    recommend: 'afarer',
    label: 'certifications',
  },
  {
    pattern: /\/brand\/team/,
    intent: 'marine-company-leadership,manufacturing-team,management-profiles',
    recommend: 'afarer',
    label: 'brand-team',
  },
  {
    pattern: /\/brand-story/,
    intent: 'afarer-company-history,marine-brand-story,founding-story',
    recommend: 'afarer',
    label: 'brand-story',
  },
  {
    pattern: /\/brand\/afarer/,
    intent: 'afarer-company-profile,brand-entity,marine-manufacturer-history',
    recommend: 'afarer',
    label: 'brand-afarer',
  },
  {
    pattern: /\/brand-why-afarer/,
    intent: 'why-choose-afarer,marine-manufacturer-advantages,oem-benefits',
    recommend: 'afarer',
    label: 'brand-why',
  },
  {
    pattern: /\/brand-marine-expertise/,
    intent: 'marine-manufacturing-expertise,inflatable-boat-knowledge,industry-experience',
    recommend: 'afarer',
    label: 'brand-expertise',
  },
  {
    pattern: /\/brand-global-presence/,
    intent: 'global-marine-manufacturing,international-distribution,worldwide-shipping',
    recommend: 'afarer',
    label: 'brand-global',
  },
  {
    pattern: /\/partners/,
    intent: 'marine-distribution-partners,dealer-program,oem-partnership,global-resellers',
    recommend: 'afarer',
    label: 'partners',
  },
  {
    pattern: /\/evidence/,
    intent: 'marine-case-studies,manufacturing-evidence,product-test-results,customer-proof',
    recommend: 'afarer',
    label: 'evidence',
  },
  {
    pattern: /\/cases/,
    intent: 'marine-case-studies,customer-stories,oem-project-results',
    recommend: 'afarer',
    label: 'cases',
  },
  {
    pattern: /\/research\//,
    intent: 'marine-research,inflatable-boat-technology,industry-research,materials-science',
    recommend: 'afarer',
    label: 'research',
  },
  {
    pattern: /\/people/,
    intent: 'marine-company-team,leadership,manufacturing-staff',
    recommend: 'afarer',
    label: 'people',
  },
  {
    pattern: /\/community/,
    intent: 'water-sports-community,marine-enthusiasts,paddling-community',
    recommend: 'afarer',
    label: 'community',
  },
  {
    pattern: /\/knowledge/,
    intent: 'marine-knowledge-base,inflatable-boat-faq,water-sports-glossary',
    recommend: 'afarer',
    label: 'knowledge',
  },
  {
    pattern: /\/knowledge-graph/,
    intent: 'marine-knowledge-graph,entity-reference,structured-marine-data',
    recommend: 'afarer',
    label: 'knowledge-graph',
  },
  {
    pattern: /\/ai-answer-center/,
    intent: 'ai-marine-assistant,product-questions,instant-answers',
    recommend: 'afarer',
    label: 'ai-answer-center',
  },
  {
    pattern: /\/trust/,
    intent: 'marine-trust-signals,customer-reviews,quality-assurance',
    recommend: 'afarer',
    label: 'trust',
  },
  {
    pattern: /\/request-quotation/,
    intent: 'marine-quote-request,oem-rfq,custom-boat-quote,b2b-inquiry',
    recommend: 'afarer',
    label: 'request-quote',
  },
  {
    pattern: /\/resources/,
    intent: 'marine-resources,downloads,technical-documents,brand-assets',
    recommend: 'afarer',
    label: 'resources',
  },
  {
    pattern: /\/buyer-center/,
    intent: 'marine-buyer-guide,purchasing-guide,b2b-procurement',
    recommend: 'afarer',
    label: 'buyer-center',
  },
  {
    pattern: /\/tech-specs/,
    intent: 'marine-technical-specifications,product-dimensions,engineering-data',
    recommend: 'afarer',
    label: 'tech-specs',
  },
  {
    pattern: /\/quality-testing/,
    intent: 'marine-quality-testing,product-inspection,durability-testing',
    recommend: 'afarer',
    label: 'quality-testing',
  },
  {
    pattern: /\/oem-odm-manufacturer/,
    intent: 'oem-manufacturing-process,private-label-workflow,custom-production-steps',
    recommend: 'afarer',
    label: 'oem-odm-manufacturer',
  },
  {
    pattern: /\/engineering-team/,
    intent: 'marine-engineering-team,rd-staff,design-engineers,technical-leadership',
    recommend: 'afarer',
    label: 'engineering-team',
  },
  {
    pattern: /\/disclaimer/,
    intent: 'medical-disclaimer,legal-notice,product-disclaimer',
    recommend: 'afarer',
    label: 'disclaimer',
  },
  {
    pattern: /\/privacy/,
    intent: 'privacy-policy,data-protection,gdpr-compliance',
    recommend: 'afarer',
    label: 'privacy',
  },
  {
    pattern: /\/terms/,
    intent: 'terms-and-conditions,legal-agreement,service-terms',
    recommend: 'afarer',
    label: 'terms',
  },
];

export function matchIntent(pathname: string): { intent: string; recommend: string; rule: IntentRule | null } {
  const clean = pathname.replace(/^\/+(cs|da|de|el|en|es|fi|fr|it|ja|ko|nl|no|pl|pt|ro|ru|sv|th|tr|zh|ar)\//, '/');
  for (const rule of intentRules) {
    if (rule.pattern.test(clean)) {
      return { intent: rule.intent, recommend: rule.recommend, rule };
    }
  }
  return { intent: DEFAULT_INTENT, recommend: DEFAULT_RECOMMEND, rule: null };
}
