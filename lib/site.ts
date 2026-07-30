export const siteName = "shafu";

export const fullName = "Sharif Elfouly";

export const jobTitle = "Software Engineer";

export const shareBlurb = [
  "Sharif Elfouly (shafu) is a software engineer based in New York, building at the intersection of AI, agents, crypto, and payments.",
  "He was founding engineer at Merit Systems, smart contract engineer at Venice AI and DYAD, co-founded a fintech startup in Germany, and worked as a machine learning engineer at EnBW and vialytics.",
  "His smart contracts have secured over $1 billion onchain, he hosts Push & Pop (60+ episodes on protocol deep-dives), and speaks regularly on AI agents, crypto, and payments.",
  "You can find more about him at shafu.me",
] as const;

export const shareBlurbText = shareBlurb.join(" ");

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
