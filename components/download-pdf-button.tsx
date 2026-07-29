"use client";

import { useState, useTransition } from "react";

function preloadPdfLib() {
  void import("html2pdf.js");
}

export function DownloadPdfButton() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleDownload() {
    const element = document.getElementById("resume-content");
    if (!element) {
      setError("Could not find page content.");
      return;
    }

    setError(null);

    startTransition(async () => {
      try {
        const html2pdf = (await import("html2pdf.js")).default;

        await html2pdf()
          .set({
            margin: 0.5,
            filename: "shafu.pdf",
            image: { type: "jpeg", quality: 0.95 },
            html2canvas: { scale: 2, useCORS: true, logging: false },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
          })
          .from(element)
          .save();
      } catch {
        setError("Failed to generate PDF. Please try again.");
      }
    });
  }

  return (
    <div className="section">
      <button
        type="button"
        className="cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-[length:inherit] text-[#0000ee] underline hover:text-black disabled:cursor-wait disabled:text-[#666]"
        onMouseEnter={preloadPdfLib}
        onFocus={preloadPdfLib}
        onClick={handleDownload}
        disabled={isPending}
      >
        Download PDF
      </button>
      {error ? <span className="text-[#c00]"> {error}</span> : null}
    </div>
  );
}
