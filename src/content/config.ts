import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
    }),
});

export const collections = {
    posts: postCollection,
};
