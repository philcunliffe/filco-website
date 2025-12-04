import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gardenCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/garden',
    // Exclude templates, excalidraw files, articles, journal, and tag directories
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string().optional(),
    planted: z.coerce.date().optional(),
    modified: z.coerce.date().optional(),
    stage: z.enum(['seedling', 'budding', 'evergreen']).optional(),
    publish: z.boolean().optional().default(false),
    'note-type': z.enum(['note', 'essay', 'highlight', 'journal']).optional(),
    note_type: z.enum(['note', 'essay', 'highlight', 'journal']).optional(),
    medium: z.string().optional(),
    cover_url: z.string().optional(),
    last_highlighted_date: z.coerce.date().optional(),
    author: z.string().optional(),
    aliases: z.union([z.array(z.string()), z.string(), z.null()]).optional(),
    reviewed: z.boolean().optional(),
    tags: z.union([z.array(z.string()), z.string(), z.null()]).optional(),
    id: z.string().optional(),
  }).passthrough(),
});

export const collections = {
  garden: gardenCollection,
};
