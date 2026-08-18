export const LOCALIZED_ROUTES = new Set([
  '/disclaimer',
  '/privacy',
  '/terms',
  '/products',
  '/guides',
  '/v2',
  '/use-cases',
  '/compare',
  '/compare/inflatable-vs-hardboard',
  '/llms/brand/afarer',
  '/llms/compare/sup-types',
  '/llms/industry/inflatable-water-sports',
  '/learn',
  '/journal',
  '/news',
  '/about',
  '/buyer-center',
  '/brand/team',
  '/solutions/resorts-hotels',
  '/solutions/paddle-clubs',
  '/solutions/rental-operators',
  '/solutions/retail-partners',
  '/solutions/distributors',
  '/solutions/build-your-own-brand',
  '/contact',
  '/factory',
  '/academy',
  '/custom',
  '/media',
  '/use-cases/search-and-rescue',
  '/use-cases/disaster-relief',
  '/use-cases/commercial-workboats',
  '/solutions/by-industry',
  '/solutions/by-use-case',
  '/design-powerhouse',
  '/oem-odm-manufacturer',
  '/lifestyle',
  '/gallery',
  '/learn/sup',

  '/learn/water-safety',
  '/learn/materials',
  '/compare/afarer-vs-traditional-manufacturers',
  '/factory/capacity',
  '/factory/quality-lab',
  '/factory/oem-capability',
  '/fabricant-sup-gonflable',
  '/oem-paddle',
  '/bateau-gonflable-fabricant',
  '/fournisseur-nautique',
]);

export const NON_LOCALIZED_ROUTES = new Set(['/products/compare']);

export function localizeHref(href: string | URL | undefined | null, locale: string): string {
  const str = typeof href === 'string' ? href : href?.toString() || '';
  if (!str || !str.startsWith('/') || str.startsWith('//')) return str || '';
  const base = str.split('?')[0].split('#')[0];
  if (base === '/' || NON_LOCALIZED_ROUTES.has(base)) return str;
  if ([...LOCALIZED_ROUTES].some((r) => base === r || base.startsWith(r + '/'))) {
    return '/' + locale + str;
  }
  return str;
}

export function entityForHref(href?: string): string {
  if (!href) return 'page';
  const path = href.replace(/^\/+/g, '');
  if (path === '' || path === 'home') return 'brand';
  if (path.startsWith('products/compare') || path.startsWith('products/bundles') || path.startsWith('size-guide'))
    return 'product';
  if (path.startsWith('products') && !path.includes('/compare') && !path.includes('/bundles')) return 'product';
  if (path.startsWith('technology') || path.startsWith('randdcenter')) return 'technology';
  if (path.startsWith('safety')) return 'safety';
  if (path.startsWith('guides')) return 'guide';
  if (path.startsWith('news') || path.startsWith('blog')) return 'article';
  if (path.startsWith('about')) return 'brand';
  if (path.startsWith('services') || path.startsWith('pricing') || path.startsWith('contact')) return 'service';
  return 'page';
}
