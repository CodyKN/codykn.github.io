import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  tags: z.array(z.string()).default(["others"]),
});

const business = defineCollection({
  loader: glob({ base: "./src/content/business", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema,
});

const finance = defineCollection({
  loader: glob({ base: "./src/content/finance", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema,
});

const ml = defineCollection({
  loader: glob({ base: "./src/content/ml", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema,
});

const medical = defineCollection({
  loader: glob({ base: "./src/content/medical", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema,
});

const robotics = defineCollection({
  loader: glob({ base: "./src/content/robotics", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema,
});

export const collections = { business, finance, ml, medical, robotics };
