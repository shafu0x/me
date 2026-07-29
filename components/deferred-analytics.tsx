"use client";

import dynamic from "next/dynamic";

export const DeferredAnalytics = dynamic(
  () => import("@vercel/analytics/next").then((m) => m.Analytics),
  { ssr: false },
);
