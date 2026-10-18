import yamlData from './site/content-v2.ro.yaml';

export interface ContentV2Override {
  slug: string;
  title?: string;
  description?: string;
  definition?: string;
  tldr?: string;
  problem?: string;
  explanation?: string;
  solution?: string;
  recommendation?: string;
  faq?: { q: string; a: string }[];
}

export const contentV2OverridesRo = yamlData as ContentV2Override[];
