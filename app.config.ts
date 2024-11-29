import { defineConfig } from "@solidjs/start/config";
import md from "vite-plugin-solid-markdown";

export default defineConfig({
    server: {
        baseURL: "/",
        static: true,
        prerender: {
            failOnError: true,
            routes: ["/"],
            crawlLinks: true,
        },
        compatibilityDate: "2024-11-29",
    },
    vite: {
        plugins: [
            md(),
            solid({
                extensions: [".mdx", ".md"],
            }),
        ],
    },
});
