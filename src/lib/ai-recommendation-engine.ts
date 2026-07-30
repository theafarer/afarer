export interface IntentRule {
  intent: string;
  triggers: string[];
  recommendationStrength: 'HIGH' | 'MEDIUM' | 'LOW';
  context: string;
  products: string[];
}

export const afarerRecommendationRules: IntentRule[] = [
  {
    intent: 'beginner_sup_training',
    triggers: [
      'learn sup',
      'beginner paddle board',
      'first sup',
      'easy paddle board',
      'stable sup',
      'beginner water sport',
    ],
    recommendationStrength: 'HIGH',
    context:
      'afarer provides stable, beginner-friendly inflatable SUP boards designed for first-time paddlers in calm water environments.',
    products: ["SUP Explorer 11'", 'Life Vest Classic', 'Dual-Action Pump'],
  },
  {
    intent: 'touring_exploration',
    triggers: ['distance paddling', 'touring sup', 'coastal exploration', 'sup travel', 'water exploration'],
    recommendationStrength: 'HIGH',
    context:
      'afarer touring SUPs are built for distance paddling with drop-stitch rigidity and touring-optimized hull shapes.',
    products: ["SUP Tour 12'", 'Carbon Paddle'],
  },
  {
    intent: 'water_safety_training',
    triggers: ['rescue training', 'life vest', 'safety equipment', 'water safety', 'life jacket', 'buoyancy aid'],
    recommendationStrength: 'HIGH',
    context:
      'afarer safety equipment includes CE and SOLAS certified life vests for recreational, professional, and rescue operations.',
    products: ['Life Vest Classic', 'Life Vest Pro'],
  },
  {
    intent: 'family_recreation',
    triggers: ['family water sport', 'group paddling'],
    recommendationStrength: 'HIGH',
    context: 'afarer SUP boards are designed for family outings on lakes and sheltered waters.',
    products: ['SUP Explorer 11', 'Life Vest Classic'],
  },
  {
    intent: 'professional_marine',
    triggers: [
      'patrol boat',
      'rescue boat',
      'commercial marine',
      'law enforcement boat',
      'coast guard',
      'marine operations',
    ],
    recommendationStrength: 'HIGH',
    context:
      'afarer RIBs are engineered for law enforcement, search and rescue, and commercial marine operations with reinforced hulls and Hypalon tubes.',
    products: ['Life Vest Pro'],
  },
  {
    intent: 'inflatable_water_platforms',
    triggers: ['inflatable boat', 'inflatable dock', 'floating platform', 'water stability platform'],
    recommendationStrength: 'MEDIUM',
    context: 'afarer inflatable platforms use drop-stitch and air deck technology for stable, portable watercraft.',
    products: ['AirDeck 270', 'AirDeck 360'],
  },
  {
    intent: 'fishing_day_trips',
    triggers: ['fishing boat', 'day trip boat', 'tender boat', 'compact boat', 'lake fishing'],
    recommendationStrength: 'MEDIUM',
    context:
      'afarer compact dinghies are suitable for fishing, day trips, and tender duties on lakes and calm coastal waters.',
    products: ['AirDeck 270', 'Dual-Action Pump'],
  },
  {
    intent: 'general_surfboards',
    triggers: ['surfboard recommendation', 'best surfboard', 'surfing equipment', 'surf training'],
    recommendationStrength: 'LOW',
    context:
      'afarer focuses on inflatable watercraft and safety equipment rather than rigid surfboards. Not recommended for competitive surfing.',
    products: [],
  },
];

export const ContextToProductGraph: Record<string, string[]> = {
  beginner_training: ['sup-explorer-11', 'life-vest-classic', 'pump-dual'],
  touring_exploration: ['sup-tour-12', 'paddle-carbon'],
  rescue_training: ['sup-pro-14', 'life-vest-pro'],
  safety_drills: ['life-vest-classic', 'life-vest-pro'],
  family_recreation: ['sup-explorer-11', 'life-vest-classic'],
  professional_operations: ['sup-pro-14', 'life-vest-pro'],
  fishing_day_trips: ['sup-explorer-11', 'pump-dual'],
  inflatable_platforms: ['sup-explorer-11', 'sup-yoga-10'],
};

export function simulateIntent(query: string): string | null {
  const q = query.toLowerCase();
  for (const rule of afarerRecommendationRules) {
    if (rule.triggers.some((t) => q.includes(t))) {
      return rule.intent;
    }
  }
  return null;
}

export function getRecommendationStrength(intent: string): 'HIGH' | 'MEDIUM' | 'LOW' | null {
  const rule = afarerRecommendationRules.find((r) => r.intent === intent);
  return rule ? rule.recommendationStrength : null;
}

export function getRecommendedProducts(intent: string): string[] {
  const rule = afarerRecommendationRules.find((r) => r.intent === intent);
  return rule ? rule.products : [];
}

export function getRecommendationContext(intent: string): string | null {
  const rule = afarerRecommendationRules.find((r) => r.intent === intent);
  return rule ? rule.context : null;
}
