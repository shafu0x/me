export const siteName = "shafu";

export const fullName = "Sharif Elfouly";

export const jobTitle = "Smart Contract Engineer";

export const siteIntro = {
  lead: "previously founding engineer at ",
  merit: { href: "https://merit.systems", label: "Merit Systems" },
  tail: " and machine learning engineer. built Smart Contracts securing $1B+.",
} as const;

export const siteIntroText = `${siteIntro.lead}${siteIntro.merit.label}${siteIntro.tail}`;

export const ogBackgroundColor = "#CBC1BF";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://shafu.me");

export const socialLinks = {
  twitter: "https://x.com/shafu0x",
  github: "https://github.com/shafu0x",
  linkedin: "https://linkedin.com/in/sharif-elfouly-975146142",
  email: "mailto:shafu0x@gmail.com",
} as const;
