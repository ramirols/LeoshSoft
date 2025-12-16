import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().transform((val) => new Date(val)),
        author: z.string().default("Ramiro Leonardo"),
        cover: z.string().optional(),
        category: z.string().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};