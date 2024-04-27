import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    NetlifyCMS({
        config: {
          backend: import.meta.env.PROD
          ? {
              name: "github",
              repo: "nkd0123/cms1",
            }
          : {
              name: "git-gateway",
            },
          collections: [
            {
              name: 'posts',
              label: 'Blog Posts',
              folder: 'src/content/blog',
              create: true,
              delete: true,
              fields: [
                { name: 'title', widget: 'string', label: ' Title' },
                { name: 'date', widget: 'datetime', label: ' Date', "date_format" : "YYYY-MM-DD" },
                { name: 'body', widget: 'markdown', label: ' Body' },
              ],
            },
        
          ],
        },
      }),
  
  ],
});