import { DownloadPdfButton } from "@/components/download-pdf-button";
import { ProfileHeader } from "@/components/profile-header";
import { SocialLinks } from "@/components/social-links";
import { TalkGrid } from "@/components/talk-grid";
import { siteIntro } from "@/lib/site";
import { preconnect, prefetchDNS, preload } from "react-dom";

export default function Home() {
  preconnect("https://i.ytimg.com");
  prefetchDNS("https://i.ytimg.com");
  preload("/pfp.jpg", { as: "image" });

  return (
    <>
      <DownloadPdfButton />
      <main id="resume-content">
        <ProfileHeader />

        <div className="section">
          <h1>Sharif Elfouly (shafu)</h1>
          <br />
          {siteIntro.lead}
          <a href={siteIntro.merit.href}>{siteIntro.merit.label}</a>
          {siteIntro.tail}
        </div>

        <SocialLinks />

        <div className="section">
          ---
          <br />
          <h2>work</h2>
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
          <h2>talks &amp; podcasts</h2>
          <br />
          <br />
          <TalkGrid />
        </div>

        <div className="section">
          ---
          <br />
          <h2>Push &amp; Pop</h2> - my show on smart contract deep-dives
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
          <h2>open source</h2>
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
          <h2>press</h2>
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
          <h2>education</h2>
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
