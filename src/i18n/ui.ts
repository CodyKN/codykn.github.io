export default {
    "site.title": {
        text: "Astro Theme Cody"
    },
    "site.description": {
        text: "A minimalist blog theme built with Astro. A quick and easy starter build for anyone who wants to start their own blog."
    },
    "profile.description": {
        text: "your bio description"
    },
    "blog.lastUpdated": {
        text: "Last updated:"
    },
    "sidebar.tableOfContents": {
        text: "Table of Contents"
    },
    "project.platform": {
        text: "PLATFORM"
    },
    "project.stack": {
        text: "STACK"
    },
    "project.website": {
        text: "WEBSITE"
    }
} as const satisfies Record<string, UIEntry>;

export type UIEntry = { text: string };