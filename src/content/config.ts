import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
    }),
});

export const collections = {
    projects: projectsCollection,
};
