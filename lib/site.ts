export const siteName = "shafu";

export const fullName = "Sharif Elfouly";

export const jobTitle = "Software Engineer";

type BlurbLink = { text: string; href: string };
type BlurbPart = string | BlurbLink;
type BlurbContent = string | readonly BlurbPart[];

export type ShareBlurbEntry = {
  content: BlurbContent;
  shownOnWebsite: boolean;
};

const paragraphToPlainText = (content: BlurbContent): string =>
  typeof content === "string"
    ? content
    : content
        .map((part) => (typeof part === "string" ? part : part.text))
        .join("");

export const shareBlurb: readonly ShareBlurbEntry[] = [
  {
    content:
      "Sharif Elfouly (shafu) is a software engineer based in New York, building at the intersection of AI, agents, crypto, and payments.",
    shownOnWebsite: true,
  },
  {
    content: [
      "He was founding engineer at ",
      { text: "Merit Systems", href: "https://merit.systems" },
      ", smart contract engineer at ",
      { text: "Venice AI", href: "https://x.com/AskVenice" },
      " and ",
      { text: "DYAD", href: "https://defillama.com/protocol/dyad" },
      ", co-founded a fintech startup in Germany, and worked as a machine learning engineer at ",
      { text: "EnBW", href: "https://en.wikipedia.org/wiki/EnBW" },
      " and ",
      { text: "vialytics", href: "https://www.vialytics.com/" },
      ".",
    ],
    shownOnWebsite: true,
  },
  {
    content:
      "His smart contracts have secured over $1 billion onchain, he hosts Push & Pop (60+ episodes on protocol deep-dives), and speaks regularly on AI agents, crypto, and payments.",
    shownOnWebsite: true,
  },
  {
    content: "You can find more about him at shafu.me",
    shownOnWebsite: false,
  },
] as const;

export const shareBlurbText = shareBlurb
  .filter((entry) => entry.shownOnWebsite)
  .map((entry) => paragraphToPlainText(entry.content))
  .join(" ");

export const shareBlurbCopyText = shareBlurb
  .map((entry) => paragraphToPlainText(entry.content))
  .join("\n\n");

export const shareBlurbLeadText = paragraphToPlainText(
  shareBlurb.find((entry) => entry.shownOnWebsite)!.content,
);

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
