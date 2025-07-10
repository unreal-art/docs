import { defineDocumentType, defineNestedType } from 'fumadocs-mdx/schema';
import { makeSource } from 'fumadocs-mdx';

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    published: { type: 'boolean', default: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => {
        const path = doc._raw.flattenedPath.replace(/^docs\//, '');
        return path === 'index' ? '/docs' : `/docs/${path}`;
      },
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^docs\//, ''),
    },
  },
}));

export const docsSchema = makeSource({
  contentPath: 'content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
