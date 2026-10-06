import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import astrowind from './vendor/integration';
import yaml from '@rollup/plugin-yaml';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const locale = process.env.SITE_LOCALE || 'en';

const configFile = locale === 'en' ? './src/config.yaml' : `./src/config.${locale}.yaml`;

// --- sitemap filter helpers -------------------------------------------------
// Keep in sync with enabled codes in src/data/site/languages.yaml
const SITEMAP_LOCALES = new Set([
  'en',
  'fr',
  'de',
  'es',
  'pt',
  'ar',
  'it',
  'ja',
  'ko',
  'ru',
  'pl',
  'nl',
  'sv',
  'no',
  'el',
  'tr',
  'fi',
  'cs',
  'da',
  'ro',
  'th',
  'hr',
  'hu',
  'sk',
  'bg',
  'sl',
  'sr',
  'id',
  'he',
  'ms',
  'lt',
  'lv',
  'et',
  'tl',
]);
// Keep in sync with I18N_EXCLUDED in functions/_middleware.ts — root paths that
// are served directly at root. Any OTHER root URL is a middleware shadow of its
// /en/* equivalent (live canonical points at /en/*), so it must not appear in
// the sitemap.
const ROOT_SERVED_PATHS = [
  '/api',
  '/keystatic',
  '/admin',
  '/login',
  '/internal',
  '/images',
  '/assets',
  '/favicon',
  '/llms',
  '/solutions-diving-center-boats',
  '/solutions-fishing-boat-solutions',
  '/solutions-marine-tourism-equipment',
  '/solutions-rescue-watercraft',
  '/solutions-yacht-tender-solutions',
  '/adventure-sup',
  '/all-around-sup',
  '/beginner-sup',
  '/fishing-sup',
  '/inflatable-sup',
  '/kids-sup',
  '/lightweight-sup',
  '/performance-sup',
  '/private-label-sup',
  '/sup-accessories',
  '/sup-manufacturer',
  '/touring-sup',
  '/travel-sup',
  '/ultra-stable-sup',
  '/whitewater-sup',
  '/yoga-sup',
  '/odm-sup-board',
  '/oem-sup-board',
  '/ai-context',
  '/about/afarer-brand',
  '/bundles',
  '/compare/pvc-vs-hypalon',
  '/guides/kayak-techniques',
  '/resources/download-catalog',
  '/solutions/diving-center-boats',
  '/solutions/fishing-boat-solutions',
  '/solutions/marine-tourism-equipment',
  '/solutions/oem-brands',
  '/solutions/rescue-watercraft',
  '/solutions/yacht-tender-solutions',
  '/research/board-hull-design',
  '/research/eva-foam-technology',
  '/research/fin-systems-guide',
  '/research/fusion-lamination-vs-glue',
  '/research/military-grade-pvc-specs',
  '/research/quality-testing-standards',
  '/research/sup-manufacturing-process',
  '/research/sup-paddle-technology',
  '/research/sup-valve-types',
  '/research/uv-printing-vs-eva-block',
];
// Locale-stripped paths excluded from the sitemap in EVERY locale: infra pages
// and noindex alias pages whose canonical points at a different primary page.
// NOTE: exact-path matching — '/commercial-workboats' must NOT swallow the
// primary '/use-cases/commercial-workboats' (substring regex previously did).
const SITEMAP_EXCLUDED_PATHS = new Set([
  '/keystatic',
  '/admin',
  '/login',
  '/internal',
  '/geo-report',
  '/404',
  '/500',
  '/about/afarer',
  '/aquafarer',
  '/brand-story',
  '/commercial-workboats',
  '/disaster-relief-humanitarian-aid',
  '/oem-process',
  '/oem-odm',
  '/quality-testing',
  '/search',
  '/search-rescue-operations',
  '/solutions-diving-center-boats',
  '/solutions-fishing-boat-solutions',
  '/solutions-marine-tourism-equipment',
  '/solutions-rescue-watercraft',
  '/solutions-yacht-tender-solutions',
]);

const matchesPath = (route: string, prefix: string): boolean => route === prefix || route.startsWith(prefix + '/');

export default defineConfig({
  output: 'static',

  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        const segments = pathname.split('/').filter(Boolean);
        const isLocale = segments.length > 0 && SITEMAP_LOCALES.has(segments[0]);
        const route = '/' + (isLocale ? segments.slice(1) : segments).join('/');
        // /brand/* alias family is excluded EXCEPT /brand/team*
        if (route.startsWith('/brand/team')) return true;
        if (route === '/brand' || route.startsWith('/brand/')) return false;
        if ([...SITEMAP_EXCLUDED_PATHS].some((p) => matchesPath(route, p))) return false;
        if (route === '/news/tag' || route.startsWith('/news/tag/')) return false;
        if (!isLocale && !ROOT_SERVED_PATHS.some((p) => matchesPath(route, p))) return false;
        return true;
      },
    }),
    mdx(),

    astrowind({
      config: configFile,
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
  },

  vite: {
    plugins: [yaml()],

    optimizeDeps: {
      exclude: ['@keystatic/core'],
    },

    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        ...(locale !== 'en'
          ? {
              '~/data/site/navigation.yaml': path.resolve(__dirname, `./src/data/site/navigation.${locale}.yaml`),
            }
          : {}),
      },
    },
  },
});
