"use client";

import dynamic from "next/dynamic";

export const DeferredDownloadPdfButton = dynamic(
  () =>
    import("@/components/download-pdf-button").then((m) => m.DownloadPdfButton),
  { ssr: false },
);
