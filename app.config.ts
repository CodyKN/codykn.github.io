import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    server: {
        baseURL: "/",
        static: true,
        prerender: {
            failOnError: true,
            routes: ["/"],
            crawlLinks: true,
        },
    },
});
