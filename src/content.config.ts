import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean(),
    lang: z.enum(['en', 'vi']),
    translationKey: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).min(1),
    coverImage: z.string().optional(),
    github: z.string().url().optional(),
    series: z.string().optional(),
  }),
});

export const collections = { blog };
