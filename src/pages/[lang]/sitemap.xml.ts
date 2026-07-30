import { generateAll } from '../../lib/geo-v4/generator';
import { languages } from '../../i18n/config';

export const prerender = true;

const base = 'https://afarer.com';

function buildXml(lang: string): string {
  const { guides, useCases, comparisons } = generateAll(lang);
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  const urls: string[] = [];

  urls.push(`${base}${langPrefix}/`);
  urls.push(...guides.map((g) => `${base}${langPrefix}/guides/${g.slug}`));
  urls.push(...useCases.map((u) => `${base}${langPrefix}/use-cases/${u.slug}`));
  urls.push(...comparisons.map((c) => `${base}${langPrefix}/compare/${c.slug}`));

  const staticPages = [
    'products',
    'guides',
    'technology',
    'safety',
    'news',
    'about',
    'contact',
    'brand',
    'brand/team',
    'factory',
    'factory/equipment',
    'factory/process',
    'academy',
    'oem-odm-manufacturer',
    'solutions',
    'solutions/resorts-hotels',
    'solutions/paddle-clubs',
    'solutions/rental-operators',
    'solutions/retail-partners',
    'solutions/distributors',
    'solutions/build-your-own-brand',
    'solutions/by-industry',
    'solutions/by-use-case',
    'use-cases',
    'learn',
    'learn/sup',
    'learn/inflatable-boat',
    'learn/water-safety',
    'learn/materials',
    'compare',
    'design-powerhouse',
  ];

  const seen = new Set<string>();
  for (const p of staticPages) {
    seen.add(p);
  }
  urls.push(...staticPages.map((p) => `${base}${langPrefix}/${p}`));

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const loc of [...new Set(urls)]) {
    xml += `  <url><loc>${loc}</loc></url>\n`;
  }
  xml += `</urlset>\n`;
  return xml;
}

export const GET = async ({ params }: { params: { lang: string } }) => {
  const lang = params.lang || 'en';
  const xml = buildXml(lang);
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

export function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
