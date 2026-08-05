import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('For parents'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // cover styling (on-brand illustrated cover)
    coverColor: z.string().default('#CDDBF9'),
    coverIcon: z.string().default('birds'),
    draft: z.boolean().default(false),
  }),
});

// Simple content pages Tina can edit or create in the visual editor.
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, pages };
