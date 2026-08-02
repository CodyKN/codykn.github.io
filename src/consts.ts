export const SITE_TITLE = "Cody Nguyen";
export const SITE_DESCRIPTION =
  "Software engineer building at the intersection of medicine, robotics, ML, and finance.";
export const COPYRIGHT =
  "© " + new Date().getFullYear() + " Cody Nguyen. All rights reserved.";
export const ICP_NUMBER = "";

export const SOCIAL_LINKS = {
  Github: "https://github.com/codykn",
  LinkedIn: "https://www.linkedin.com/in/codykn",
};

export const SEO_CONFIG = {
  ogImage: "/social-card.png",
  keywords:
    "Cody Nguyen, software engineer, medicine, robotics, machine learning, finance",
};

export const NAV_ITEMS = [
  { text: "Home", link: "/" },
  { text: "Projects", link: "/projects" },
  { text: "About", link: "/about" },
];

export const BLOG_CONFIG = {
  locale: "en-us",
  profile: "https://github.com/codykn",
  authorName: "Cody Nguyen",
  email: "mailto:github.sculptor693@passmail.net",
  tags: {
    title: "Tags",
    description: "All the tags used in posts.",
  },
};

export const DOMAINS = [
  {
    name: "Web Products",
    slug: "web",
    description:
      "Focused web products and community platforms built from idea to launch.",
    icon: "web",
  },
  {
    name: "Medicine",
    slug: "medical",
    description:
      "Health-tech tools and platforms — from study aids to clinical decision support.",
    icon: "medical",
  },
] as const;

export const FEATURED_PROJECTS = [
  {
    title: "RecipePractice",
    slug: "recipepractice",
    href: "/projects/recipepractice/",
    url: "https://recipepractice.com/",
    domain: "web",
    status: "In development",
    description:
      "A recipe notebook built for iteration—save recipes, log every cook, compare versions, and turn each attempt into a better dish.",
    overview:
      "RecipePractice treats recipes as living documents. It gives curious cooks one place to keep the original recipe, record what happened during each cook, and carry useful lessons into the next version.",
    highlights: [
      "Recipe version history and cook-by-cook notes",
      "Side-by-side comparisons for ingredients and instructions",
      "Search, smart scaling, and deliberate sharing controls",
    ],
  },
  {
    title: "Heartland Tennis League",
    slug: "heartland-tennis",
    href: "/projects/heartland-tennis/",
    url: "https://heartlandtennis.com/",
    domain: "web",
    status: "Launching soon",
    description:
      "A community tennis platform for the Four States, with challenge ladders, match reporting, league rules, events, and player signups.",
    overview:
      "Heartland Tennis League creates a structured way for adult players in Joplin and the surrounding region to find competitive matches outside traditional league seasons.",
    highlights: [
      "Challenge-based rankings with clear movement rules",
      "Match reporting, events, and player registration",
      "A responsive league hub designed for year-round play",
    ],
  },
] as const;
