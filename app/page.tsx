import { DeferredDownloadPdfButton } from "@/components/deferred-download-pdf-button";
import { preconnect, prefetchDNS, preload } from "react-dom";

const TALKS = [
  {
    href: "https://www.youtube.com/watch?v=vVmyBfGqM7Q&t=3s",
    img: "https://i.ytimg.com/vi/vVmyBfGqM7Q/hqdefault.jpg",
    alt: "Autonomous Agentic Commerce: Micropayments, AgentCash, x402 & MPP",
    title:
      "Autonomous Agentic Commerce: Micropayments, AgentCash, x402 & MPP (Shoal Signal)",
  },
  {
    href: "https://www.youtube.com/watch?v=KQG-ouMf-ho",
    img: "https://i.ytimg.com/vi/KQG-ouMf-ho/sddefault.jpg",
    alt: "x402scan: The discovery layer for x402",
    title: "x402scan: The discovery layer for x402 (Agentic Zero keynote)",
  },
  {
    href: "https://www.youtube.com/watch?v=ATkN_eHjehM",
    img: "https://i.ytimg.com/vi/ATkN_eHjehM/maxresdefault.jpg",
    alt: "x402, ERC-8004 and Co",
    title: "x402, ERC-8004 and Co (Agents Unleashed Buenos Aires)",
  },
  {
    href: "https://www.youtube.com/watch?v=p3-xWjJ3qZ8",
    img: "https://i.ytimg.com/vi/p3-xWjJ3qZ8/sddefault.jpg",
    alt: "The Signal Podcast",
    title: "The Signal Podcast: x402 Scan MCP (Edge & Node)",
  },
  {
    href: "https://www.youtube.com/watch?v=ByBjY05Xl6U",
    img: "https://i.ytimg.com/vi/ByBjY05Xl6U/sddefault.jpg",
    alt: "Agentic payments are the new normal",
    title: "Agentic payments are the new normal (Openfort)",
  },
  {
    href: "https://www.youtube.com/watch?v=zW2u-fRo_ek",
    img: "https://i.ytimg.com/vi/zW2u-fRo_ek/sddefault.jpg",
    alt: "x402 explained (payments unlock agents)",
    title:
      "x402 explained: payments unlock agents (Keeping Up with the Builders)",
  },
  {
    href: "https://x.com/cryptosmiff/status/2039446564784263651",
    img: "/cryptosmiff.png",
    alt: "Agentic payments might be bigger than DeFi",
    title: "Agentic payments might be bigger than DeFi (cryptosmiff)",
  },
  {
    href: "https://slop.computer/shafu0x",
    img: "/slop-computer-shafu0x.png",
    alt: "Slop Computer episode with shafu0x",
    title: "Slop Computer: shafu0x",
  },
] as const;

export default function Home() {
  preconnect("https://i.ytimg.com");
  prefetchDNS("https://i.ytimg.com");
  preload("/pfp.jpg", { as: "image" });

  return (
    <>
      <DeferredDownloadPdfButton />
      <main id="resume-content">
        <div className="section">
          <div className="profile-images">
            <img
              src="/pfp.jpg"
              alt="shafu"
              width={120}
              height={120}
              crossOrigin="anonymous"
              className="profile-pfp"
            />
            <img
              src="/speaking.png"
              alt="Sharif speaking on stage"
              width={120}
              height={120}
              crossOrigin="anonymous"
              className="profile-photo"
            />
          </div>
        </div>

        <div className="section">
          I&apos;m shafu (Sharif Elfouly). previously founding engineer at{" "}
          <a href="https://merit.systems">Merit Systems</a> and machine learning
          engineer. built Smart Contracts securing $1B+.
        </div>

        <div className="section">
          find me on <a href="https://x.com/shafu0x">twitter</a>,{" "}
          <a href="https://github.com/shafu0x">github</a>,{" "}
          <a href="https://linkedin.com/in/sharif-elfouly-975146142">
            linkedin
          </a>
          , <a href="mailto:shafu0x@gmail.com">shafu0x@gmail.com</a>
        </div>

        <div className="section">
          ---
          <br />
          <b>work</b>
          <br />
          <br />
          <b>Merit Systems</b> - founding engineer (2025-present, NYC)
          <br />
          <b>Venice AI</b> - smart contract engineer
          <br />
          <b>DYAD</b> - smart contract engineer
          <br />
          <b>SMARTeFunding / eProgramming</b> - co-founder (Germany)
          <br />
          <b>EnBW Energie</b> - ML engineer (Karlsruhe)
          <br />
          <b>vialytics</b> - ML engineer (Stuttgart)
          <br />
          <b>IOT GmbH</b> - SAP developer (Gelsenkirchen)
        </div>

        <div className="section">
          ---
          <br />
          <b>talks &amp; podcasts</b>
          <br />
          <br />
          <div className="video-grid">
            {TALKS.map((talk) => (
              <a key={talk.href} href={talk.href}>
                <img
                  src={talk.img}
                  alt={talk.alt}
                  crossOrigin="anonymous"
                />
                {talk.title}
              </a>
            ))}
          </div>
        </div>

        <div className="section">
          ---
          <br />
          <b>Push &amp; Pop</b> - my show on smart contract deep-dives
          <br />
          <a href="https://www.youtube.com/@shafu0x">youtube.com/@shafu0x</a>
          <br />
          <br />
          61+ episodes. protocol internals: Ekubo, Maple, Merit, Sablier V2, and
          more.
        </div>

        <div className="section">
          ---
          <br />
          <b>open source</b>
          <br />
          <br />
          <a href="https://github.com/shafu0x/awesome-smart-contracts">
            awesome-smart-contracts
          </a>{" "}
          - the best smart contracts in one place
          <br />
          <a href="https://github.com/Merit-Systems/x402scan">x402scan</a> -
          x402 ecosystem explorer
          <br />
          <a href="https://github.com/shafu0x/evm-from-scratch-book">
            evm-from-scratch-book
          </a>{" "}
          - build the EVM from scratch &mdash;{" "}
          <a href="https://www.evm-from-scratch.app">evm-from-scratch.app</a>
          <br />
          <a href="https://github.com/shafu0x/MicroStable">MicroStable</a> -
          most simple design of a stablecoin
          <br />
          <a href="https://github.com/shafu0x/vehicle-speed-estimation">
            vehicle-speed-estimation
          </a>{" "}
          - vehicle speed from video using deep learning
          <br />
          <a href="https://github.com/shafu0x/huff-stacker">huff-stacker</a> -
          auto-generate stack comments for Huff macros
        </div>

        <div className="section">
          ---
          <br />
          <b>press</b>
          <br />
          <br />
          <a href="https://www.inverse.com/the-smart-contract-engineer-building-open-sources-financial-future">
            &quot;The Smart Contract Engineer Building Open Source&apos;s
            Financial Future&quot;
          </a>{" "}
          &mdash; Inverse (2025)
          <br />
          <a href="https://www.villagevoice.com/sharif-elfouly-explains-why-tokenization-isnt-a-tech-problem/">
            &quot;Why Tokenization Isn&apos;t a Tech Problem&quot;
          </a>{" "}
          &mdash; Village Voice (2025)
          <br />
          <a href="https://www.devx.com/enterprise-zone/smart-contracts/">
            &quot;Code That Holds Millions: Philosophy for Smart Contracts That
            Survive&quot;
          </a>{" "}
          &mdash; DevX (2025)
        </div>

        <div className="section">
          ---
          <br />
          <b>education</b>
          <br />
          <br />
          University of T&uuml;bingen - Master, Machine Learning (2018-2019,
          dropped out)
          <br />
          Westf&auml;lische Hochschule - B.Sc., Computer Science (2014-2017)
        </div>
      </main>
    </>
  );
}
