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
  ogImage: "/hero-img.png",
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
    url: "https://recipepractice.com/",
    domain: "web",
    status: "In development",
    description:
      "A recipe notebook built for iteration—save recipes, log every cook, compare versions, and turn each attempt into a better dish.",
  },
  {
    title: "Heartland Tennis League",
    url: "https://heartlandtennis.com/",
    domain: "web",
    status: "Launching soon",
    description:
      "A community tennis platform for the Four States, with challenge ladders, match reporting, league rules, events, and player signups.",
  },
] as const;
