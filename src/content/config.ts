// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(), // Potrzebne do filtrów na stronie narzędzi
    type: z.string(),
    shortdesc: z.string(),
    scriptPath: z.string().optional(), // Ścieżka do dynamicznego JS, jeśli potrzebny
  }),
});

export const collections = {
  'pages': pagesCollection,
  'tools': toolsCollection,
};