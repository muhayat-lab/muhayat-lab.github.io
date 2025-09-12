import { defineCollection, z } from "astro:content";

// Koleksi Courses
const coursesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    code: z.string().optional(),
    description: z.string(),
  }),
});

// Koleksi Articles
const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(), // bisa juga pakai z.date() kalau format ISO
    description: z.string(),
    author: z.string().optional(),
  }),
});

export const collections = {
  courses: coursesCollection,
  articles: articlesCollection,
};
