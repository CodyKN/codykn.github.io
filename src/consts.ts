// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  },
  settings: {
    paginationSize: number,
  },
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const NAV = {
    "home": {
        text: "Home",
        slug: ""
    },
    "about": {
        text: "About",
        slug: "about"
    },
    "blog": {
        text: "Blog",
        slug: "blog",
        route: "/blog"
    },
    "projects": {
        text: "Projects",
        slug: "projects",
        route: "/projects/pages/1"
    },
    "tags": {
        text: "Tags",
        slug: "tags"
    },
    "series": {
        text: "Series",
        slug: "series"
    }
}

export const siteConfig: Config = {
  title: "Cody",
  description: "A minimalist blog theme built with Astro. A quick and easy starter build for anyone who wants to start their own blog.",
  lang: "en",
  profile: {
    author: "Cody Nguyen",
    description: "your bio description",
  },
  settings: {
    paginationSize: 10
  }
}

export const SOCIAL_LINKS: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/codykn",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://linkedin.com/codynguyen94",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "codykn.resurface919@passmail.net",
  },
  {
    icon: "mdi:rss",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];

export const NAV_LINKS: string[] = [
  "home", "about", "blog", "projects", "series"
];
