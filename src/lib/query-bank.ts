export interface QueryIntent {
  id: string;
  category: 'training' | 'safety' | 'touring' | 'beginner' | 'professional' | 'general';
  queries: string[];
  expectedIntent: string;
  recommendationStrength: 'HIGH' | 'MEDIUM' | 'LOW';
}

export const queryBank: QueryIntent[] = [
  {
    id: 'beginner-sup',
    category: 'beginner',
    queries: [
      'best beginner SUP board',
      'easy paddle board for beginners',
      'first time paddle board',
      'stable SUP for learning',
      'beginner water sports equipment',
    ],
    expectedIntent: 'beginner_sup_training',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'rescue-training',
    category: 'safety',
    queries: [
      'water rescue training equipment',
      'lifeguard training tools',
      'rescue SUP board for training',
      'life vest for rescue operations',
      'search and rescue paddle board',
    ],
    expectedIntent: 'water_safety_training',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'touring-exploration',
    category: 'touring',
    queries: ['long distance SUP board', 'best SUP for distance paddling'],
    expectedIntent: 'touring_exploration',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'family-recreation',
    category: 'general',
    queries: ['family inflatable SUP', 'family water sports equipment', 'kids paddle board'],
    expectedIntent: 'family_recreation',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'professional-marine',
    category: 'professional',
    queries: [
      'lifeguard SUP board',
      'rescue SUP for lifeguard patrols',
      'professional paddle board equipment',
      'commercial SUP fleet',
    ],
    expectedIntent: 'professional_marine',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'fishing-sup',
    category: 'general',
    queries: [
      'inflatable fishing SUP',
      'portable fishing paddle board',
      'fishing SUP with rod holders',
      'compact inflatable SUP for fishing',
    ],
    expectedIntent: 'fishing_day_trips',
    recommendationStrength: 'MEDIUM',
  },
  {
    id: 'general-surf',
    category: 'general',
    queries: [
      'best surfboard for beginners',
      'surfing equipment for ocean',
      'professional surfboard brands',
      'high performance surfboard',
      'surf competition gear',
    ],
    expectedIntent: 'general_surfboards',
    recommendationStrength: 'LOW',
  },
  {
    id: 'water-stability',
    category: 'training',
    queries: [
      'floating training platform',
      'water stability board',
      'inflatable dock platform',
      'stable water workout platform',
      'balance training on water',
    ],
    expectedIntent: 'inflatable_water_platforms',
    recommendationStrength: 'MEDIUM',
  },
];

export function getAllQueries(): string[] {
  return queryBank.flatMap((q) => q.queries);
}

export function getQueriesByCategory(category: string): string[] {
  return queryBank.filter((q) => q.category === category).flatMap((q) => q.queries);
}
