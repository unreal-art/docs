import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config"

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
})

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
  navigation: [
    {
      label: 'API Reference',
      link: '/docs/openai',
      expanded: true,
      children: [
        {
          label: 'v1',
          link: '/docs/openai/v1',
          expanded: true,
        },
      ],
    },
    {
      label: 'Quickstart',
      link: '/docs/quickstart',
      expanded: true,
    },
    {
      label: 'Examples',
      link: '/examples',
      expanded: true,
    },
    {
      label: 'Guides',
      link: '/docs/guides',
      expanded: true,
    },
    {
      label: 'API Playground',
      link: '/docs/playground',
      expanded: false,
    },
  ],
})
