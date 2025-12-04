import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { remarkWikiLinks } from './src/utils/remark-wiki-links';

export default defineConfig({
  site: 'https://www.philcunliffe.dev',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
    remarkPlugins: [remarkWikiLinks],
  },
});
