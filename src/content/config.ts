import { z, defineCollection } from "astro:content";


const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

const notesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
});

const tagsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.nativeEnum(ProjectStatus),
  }),
});

export const collections = {
  blog: blogCollection,
  notes: notesCollection,
  tags: tagsCollection,
  projects: projectsCollection,
};