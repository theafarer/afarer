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

export default defineConfig({
  output: 'static',

  integrations: [
    sitemap({
      filter: (page) => {
        const exclude =
          /\/(?:keystatic|admin|login|internal|404|500|about\/afarer|aquafarer|brand(?!\/team)|brand-story|commercial-workboats|disaster-relief-humanitarian-aid|oem-process|quality-testing|search-rescue-operations|solutions-(?:diving-center-boats|fishing-boat-solutions|marine-tourism-equipment|rescue-watercraft|yacht-tender-solutions))(?:\/|$)/;
        return !exclude.test(page);
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
