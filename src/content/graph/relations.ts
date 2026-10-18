export interface GraphRelation {
  id: string;
  source: string;
  target: string;
  type: 'is-used-for' | 'is-compatible-with' | 'compares-to' | 'improves-on' | 'requires' | 'enhances';
  label: Record<string, string>;
}

export const relations: GraphRelation[] = [
  {
    id: 'sup-is-used-for-touring',
    source: 'inflatable-sup',
    target: 'touring',
    type: 'is-used-for',
    label: { en: 'SUP boards are used for touring and distance paddling' },
  },
  {
    id: 'sup-is-used-for-beginner',
    source: 'inflatable-sup',
    target: 'beginner',
    type: 'is-used-for',
    label: { en: 'Inflatable SUPs are ideal for beginners due to stability' },
  },
  {
    id: 'sup-is-used-for-river',
    source: 'inflatable-sup',
    target: 'river-touring',
    type: 'is-used-for',
    label: { en: 'Inflatable SUPs excel on river touring' },
  },
  {
    id: 'sup-is-used-for-fishing',
    source: 'inflatable-sup',
    target: 'fishing',
    type: 'is-used-for',
    label: { en: 'SUP boards are commonly used for fishing' },
  },
  {
    id: 'sup-is-used-for-family',
    source: 'inflatable-sup',
    target: 'family-recreation',
    type: 'is-used-for',
    label: { en: 'SUP boards are ideal for family recreation' },
  },

  {
    id: 'sup-is-used-for-rescue',
    source: 'inflatable-sup',
    target: 'rescue',
    type: 'is-used-for',
    label: { en: 'SUP boards are deployed for search and rescue missions' },
  },
  {
    id: 'safety-used-for-all',
    source: 'safety-equipment',
    target: 'beginner',
    type: 'is-used-for',
    label: { en: 'Safety equipment is essential for all water activities' },
  },
  {
    id: 'drop-stitch-compatible-sup',
    source: 'drop-stitch-core',
    target: 'inflatable-sup',
    type: 'is-compatible-with',
    label: { en: 'Drop-stitch core is the primary construction method for rigid SUPs' },
  },
  {
    id: 'eva-compatible-sup',
    source: 'eva-deck',
    target: 'inflatable-sup',
    type: 'is-compatible-with',
    label: { en: 'EVA foam deck pads provide traction on SUP boards' },
  },
  {
    id: 'pump-compatible-sup',
    source: 'dual-action-pump',
    target: 'inflatable-sup',
    type: 'is-compatible-with',
    label: { en: 'Dual-action pumps are the standard inflation tool for SUPs' },
  },
  {
    id: 'hypalon-compatible-sup',
    source: 'hypalon-fabric',
    target: 'military-grade-pvc',
    type: 'is-compatible-with',
    label: {
      en: 'Hypalon fabric offers superior UV and chemical resistance for marine applications',
    },
  },
  {
    id: 'carbon-paddle-compatible-touring',
    source: 'carbon-paddle',
    target: 'touring',
    type: 'is-compatible-with',
    label: { en: 'Carbon fiber paddles reduce fatigue on long touring sessions' },
  },
  {
    id: 'drop-stitch-improves-rigidity',
    source: 'drop-stitch-core',
    target: 'air-deck',
    type: 'improves-on',
    label: {
      en: 'Drop-stitch construction provides superior rigidity compared to traditional air deck floors',
    },
  },
  {
    id: 'carbon-paddle-improves-aluminum',
    source: 'carbon-paddle',
    target: 'paddle',
    type: 'improves-on',
    label: {
      en: 'Carbon fiber paddles are lighter and stiffer than standard aluminum paddles',
    },
  },
  {
    id: 'hypalon-improves-pvc',
    source: 'hypalon-fabric',
    target: 'military-grade-pvc',
    type: 'improves-on',
    label: { en: 'Hypalon offers superior UV and chemical resistance compared to PVC' },
  },
];
