import type { GraphNode } from '../../content/graph/nodes';
import { localized } from './i18n';

export interface GuideSection {
  h2: string;
  content: string[] | string;
}

export interface GeneratedGuide {
  slug: string;
  title: string;
  description: string;
  sections: GuideSection[];
  faq: Array<{ q: string; a: string }>;
}

export interface GeneratedPage {
  slug: string;
  title: string;
  description: string;
  sections: GuideSection[];
  faq: Array<{ q: string; a: string }>;
}

export type TemplateTranslator = (key: string) => string;

const makeT =
  (tr?: TemplateTranslator) =>
  (key: string, en: string): string =>
    tr ? tr(key) || en : en;

export function guideFromNode(node: GraphNode, lang: string = 'en'): GeneratedGuide | null {
  if (
    node.type !== 'product-category' &&
    node.type !== 'technology' &&
    node.type !== 'material' &&
    node.type !== 'component'
  )
    return null;

  const name = localized(node.name, lang) || localized(node.name, 'en') || '';
  const desc = localized(node.description, lang) || localized(node.description, 'en') || '';
  const features = localized(node.features, lang) || localized(node.features, 'en') || [];
  const useCases = localized(node.useCases, lang) || localized(node.useCases, 'en') || [];
  const faq = localized(node.faq, lang) || localized(node.faq, 'en') || [];

  const sections: GuideSection[] = [{ h2: 'Definition', content: desc }];

  if (features.length) {
    sections.push({ h2: 'Key Features', content: features.map((f) => `- ${f}`) });
  }

  if (useCases.length) {
    sections.push({ h2: 'Use Cases', content: useCases.map((u) => `- ${u}`) });
  }

  const related = (node.related || []).map((id) => `- ${id}`);
  if (related.length) {
    sections.push({ h2: 'Related Components', content: related });
  }

  return {
    slug: (node.slug && node.slug[lang]) || node.id,
    title: `What is ${name}?`,
    description: desc,
    sections,
    faq,
  };
}

export function useCaseFromNode(node: GraphNode, lang: string = 'en', tr?: TemplateTranslator): GeneratedPage | null {
  if (node.type !== 'use-case') return null;

  const T = makeT(tr);
  const name = localized(node.name, lang) || localized(node.name, 'en') || '';
  const desc = localized(node.description, lang) || localized(node.description, 'en') || '';
  const features = localized(node.features, lang) || localized(node.features, 'en') || [];
  const useCases = localized(node.useCases, lang) || localized(node.useCases, 'en') || [];
  const faq = localized(node.faq, lang) || localized(node.faq, 'en') || [];

  const sections: GuideSection[] = [{ h2: T('useCase.whatIs', 'What is this use case?'), content: desc }];

  if (features.length) {
    sections.push({ h2: T('useCase.keyFeatures', 'Key Features'), content: features.map((f) => `- ${f}`) });
  }

  if (useCases.length) {
    sections.push({ h2: T('useCase.scenarios', 'Scenarios'), content: useCases.map((u) => `- ${u}`) });
  }

  const related = (node.related || []).map((id) => `- ${id}`);
  if (related.length) {
    sections.push({
      h2: T('useCase.recommended', 'Recommended Equipment'),
      content: related,
    });
  }

  return {
    slug: (node.slug && node.slug[lang]) || node.id,
    title: name,
    description: desc,
    sections,
    faq,
  };
}

export function compareTemplate(
  a: GraphNode,
  b: GraphNode,
  lang: string = 'en',
  tr?: TemplateTranslator
): GeneratedPage {
  const T = makeT(tr);
  const aName = localized(a.name, lang) || localized(a.name, 'en') || a.id;
  const bName = localized(b.name, lang) || localized(b.name, 'en') || b.id;
  const aDesc = localized(a.description, lang) || localized(a.description, 'en') || '';
  const bDesc = localized(b.description, lang) || localized(b.description, 'en') || '';
  const aFeatures = localized(a.features, lang) || localized(a.features, 'en') || [];
  const bFeatures = localized(b.features, lang) || localized(b.features, 'en') || [];
  const aUseCases = localized(a.useCases, lang) || localized(a.useCases, 'en') || [];
  const bUseCases = localized(b.useCases, lang) || localized(b.useCases, 'en') || [];

  const sections: GuideSection[] = [
    {
      h2: T('compare.overview', 'Comparison Overview'),
      content: [
        T('compare.comparing', 'Comparing {a} vs {b} across key factors.').replace('{a}', aName).replace('{b}', bName),
      ],
    },
    {
      h2: T('compare.table', 'Quick Comparison Table'),
      content: [
        `| ${T('compare.factor', 'Factor')} | ${aName} | ${bName} |`,
        `|---|---|---|`,
        `| ${T('compare.type', 'Type')} | ${a.type} | ${b.type} |`,
        `| ${T('compare.portability', 'Portability')} | ${T('compare.inflatable', 'Inflatable')} | ${T('compare.varies', 'Varies')} |`,
        `| ${T('compare.bestFor', 'Best For')} | ${(aUseCases || []).slice(0, 3).join(', ')} | ${(bUseCases || []).slice(0, 3).join(', ')} |`,
      ],
    },
    {
      h2: T('compare.about', 'About {name}').replace('{name}', aName),
      content: [aDesc],
    },
    {
      h2: T('compare.about', 'About {name}').replace('{name}', bName),
      content: [bDesc],
    },
  ];

  if (aFeatures.length && bFeatures.length) {
    sections.push({
      h2: T('compare.features', 'Feature Comparison'),
      content: [`${aName}: ${aFeatures.slice(0, 4).join(', ')}`, '', `${bName}: ${bFeatures.slice(0, 4).join(', ')}`],
    });
  }

  sections.push({
    h2: T('compare.which', 'Which Should You Choose?'),
    content: [
      T('compare.chooseA', 'Choose {a} if you prioritize {features}.')
        .replace('{a}', aName)
        .replace('{features}', (aFeatures || ['versatility']).slice(0, 2).join(' and ')),
      '',
      T('compare.chooseB', 'Choose {b} if you need {features}.')
        .replace('{b}', bName)
        .replace('{features}', (bFeatures || ['performance']).slice(0, 2).join(' and ')),
    ],
  });

  return {
    slug: `${a.id}-vs-${b.id}`,
    title: `${aName} vs ${bName}: ${T('compare.titleSuffix', 'Comparison Guide')}`,
    description: T('compare.metaDesc', 'Compare {a} and {b} across portability, performance, features, and use cases.')
      .replace('{a}', aName)
      .replace('{b}', bName),
    sections,
    faq: [],
  };
}
