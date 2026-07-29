export const siteName = "shafu";

export const fullName = "Sharif Elfouly";

export const jobTitle = "Smart Contract Engineer";

export const siteDescription =
  "Sharif Elfouly (shafu) — smart contract engineer and founding engineer at Merit Systems. Built smart contracts securing $1B+. x402, agentic commerce, open source.";

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
