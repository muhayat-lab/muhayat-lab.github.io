import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    cover: z.string().optional(),
  })
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    code: z.string().optional(),
    description: z.string().optional(),
    sessions: z.array(z.object({
      week: z.number(),
      title: z.string(),
      files: z.array(z.object({
        name: z.string(),
        url: z.string(),
        size: z.string().optional()
      })).default([]),
      reading: z.array(z.object({
        title: z.string(),
        url: z.string()
      })).default([])
    })).default([])
  })
});

export const collections = { posts, courses };
