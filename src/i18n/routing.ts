export const LOCALIZED_ROUTES = new Set([
  '/co-brand',
  '/distributor-program',
  '/request-quotation',
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
  '/fournisseur-nautique',
  '/inflatable-sup',
  '/all-around-sup',
  '/touring-sup',
  '/yoga-sup',
  '/kids-sup',
  '/fishing-sup',
  '/whitewater-sup',
  '/ultra-stable-sup',
  '/sup-accessories',
  '/surf-sup',
  '/giant-sup',
  '/dock-platform',
]);

export const NON_LOCALIZED_ROUTES = new Set(['/products/compare']);

const FILE_PATH_RE = /\/[^/]*\.[a-z0-9]+$/i;

// Live (Cloudflare Pages) serves page URLs in directory form ("/en/about/");
// the slashless form 308-redirects. Normalize emitted internal links so they
// resolve 200 directly instead of burning a redirect on every click.
export function withTrailingSlash(href: string): string {
  if (!href || !href.startsWith('/') || href.startsWith('//')) return href;
  const base = href.split('?')[0].split('#')[0];
  if (base === '' || base === '/' || base.endsWith('/') || FILE_PATH_RE.test(base)) return href;
  return base + '/' + href.slice(base.length);
}

export function localizeHref(href: string | URL | undefined | null, locale: string): string {
  const str = typeof href === 'string' ? href : href?.toString() || '';
  if (!str || !str.startsWith('/') || str.startsWith('//')) return str || '';
  const base = str.split('?')[0].split('#')[0];
  if (base === '/') return str;
  if (NON_LOCALIZED_ROUTES.has(base)) return withTrailingSlash(str);
  if ([...LOCALIZED_ROUTES].some((r) => base === r || base.startsWith(r + '/'))) {
    return withTrailingSlash('/' + locale + str);
  }
  return withTrailingSlash(str);
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
