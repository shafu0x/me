"use client";

import { sendDiscordNotification } from "@/lib/discord";
import { shareBlurb } from "@/lib/site";
import { useEffect, useState } from "react";

export function CopyBlurbButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareBlurb.join("\n\n"));
      setCopied(true);
      void sendDiscordNotification("copied blurb");
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className="cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-[length:inherit] text-[#0000ee] underline hover:text-black"
      onClick={() => void handleCopy()}
    >
      {copied ? "Copied!" : "Copy blurb"}
    </button>
  );
}
