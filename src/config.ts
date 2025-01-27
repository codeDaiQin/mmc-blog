import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://mmszb.cn/", // replace this with your deployed domain
  author: "caterpillar",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "mmc's blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/codeDaiQin",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:daiqin1046@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@caterpillarinstudy",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/codeDaiQin",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
  {
    name: "bilibili",
    href: "https://space.bilibili.com/3494353410460030",
    linkTitle: `${SITE.title} on bilibili`,
    active: true,
  },
];
