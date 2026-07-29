"use client";

import { sendDiscordNotification } from "@/lib/discord";
import { socialLinks } from "@/lib/site";

export function SocialLinks() {
  return (
    <div className="section">
      find me on{" "}
      <a
        href={socialLinks.twitter}
        rel="me"
        onClick={() => {
          void sendDiscordNotification("someone clicked twitter");
        }}
      >
        twitter
      </a>
      ,{" "}
      <a
        href={socialLinks.github}
        rel="me"
        onClick={() => {
          void sendDiscordNotification("someone clicked github");
        }}
      >
        github
      </a>
      ,{" "}
      <a
        href={socialLinks.linkedin}
        rel="me"
        onClick={() => {
          void sendDiscordNotification("someone clicked linkedin");
        }}
      >
        linkedin
      </a>
      ,{" "}
      <a
        href={socialLinks.email}
        onClick={() => {
          void sendDiscordNotification("someone clicked email");
        }}
      >
        shafu0x@gmail.com
      </a>
    </div>
  );
}
