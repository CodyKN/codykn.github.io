import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  tags: z.array(z.string()).default(["others"]),
});

const medical = defineCollection({
  loader: glob({ base: "./src/content/medical", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema,
});

export const collections = { medical };
