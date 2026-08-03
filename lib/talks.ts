export type Talk = {
  href: string;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
};

export const TALKS = [
  {
    href: "https://www.youtube.com/watch?v=vVmyBfGqM7Q&t=3s",
    img: "https://i.ytimg.com/vi/vVmyBfGqM7Q/hqdefault.jpg",
    alt: "Autonomous Agentic Commerce: Micropayments, AgentCash, x402 & MPP",
    title: "Autonomous Agentic Commerce: Micropayments, AgentCash, x402 & MPP",
    subtitle: "Shoal Signal",
  },
  {
    href: "https://www.youtube.com/watch?v=KQG-ouMf-ho",
    img: "https://i.ytimg.com/vi/KQG-ouMf-ho/sddefault.jpg",
    alt: "x402scan: The discovery layer for x402",
    title: "x402scan: The discovery layer for x402",
    subtitle: "Agentic Zero keynote",
  },
  {
    href: "https://www.youtube.com/watch?v=ATkN_eHjehM",
    img: "https://i.ytimg.com/vi/ATkN_eHjehM/maxresdefault.jpg",
    alt: "x402, ERC-8004 and Co",
    title: "x402, ERC-8004 and Co",
    subtitle: "Agents Unleashed Buenos Aires",
  },
  {
    href: "https://www.youtube.com/watch?v=p3-xWjJ3qZ8",
    img: "https://i.ytimg.com/vi/p3-xWjJ3qZ8/sddefault.jpg",
    alt: "The Signal Podcast",
    title: "The Signal Podcast: x402 Scan MCP",
    subtitle: "Edge & Node",
  },
  {
    href: "https://www.youtube.com/watch?v=ByBjY05Xl6U",
    img: "https://i.ytimg.com/vi/ByBjY05Xl6U/sddefault.jpg",
    alt: "Agentic payments are the new normal",
    title: "Agentic payments are the new normal",
    subtitle: "Openfort",
  },
  {
    href: "https://www.youtube.com/watch?v=zW2u-fRo_ek",
    img: "https://i.ytimg.com/vi/zW2u-fRo_ek/sddefault.jpg",
    alt: "x402 explained (payments unlock agents)",
    title: "x402 explained: payments unlock agents",
    subtitle: "Keeping Up with the Builders",
  },
  {
    href: "https://x.com/cryptosmiff/status/2039446564784263651",
    img: "/cryptosmiff.png",
    alt: "Agentic payments might be bigger than DeFi",
    title: "Agentic payments might be bigger than DeFi",
    subtitle: "cryptosmiff",
  },
  {
    href: "https://slop.computer/shafu0x",
    img: "/slop-computer-shafu0x.png",
    alt: "Slop Computer episode with shafu0x",
    title: "shafu0x",
    subtitle: "Slop Computer",
  },
] as const satisfies readonly Talk[];
