export interface ProductGraphNode {
  type: string;
  bestFor: string[];
  avoid: string[];
  userLevel: string;
  intent: string;
  description: string;
}

export const productGraph: Record<string, ProductGraphNode> = {
  SUP: {
    intent: 'balance + stability',
    bestFor: ['lake', 'calm sea', 'sheltered coastal'],
    avoid: ['strong river current', 'open rough sea', 'heavy wind'],
    userLevel: 'beginner-intermediate',
    type: 'stability + balance',
    description:
      'Stand-up paddle boards designed for stability on flat water. Ideal for recreation, fitness, and exploration.',
  },
  ACCESSORY: {
    intent: 'equipment support',
    bestFor: ['all environments'],
    avoid: [],
    userLevel: 'all',
    type: 'equipment',
    description: 'Paddles, pumps, life vests, bags, and essential gear for maintenance and customization.',
  },
};
