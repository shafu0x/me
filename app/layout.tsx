import type { Metadata } from "next";
import { DeferredAnalytics } from "@/components/deferred-analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "shafu",
  description: "Sharif Elfouly - smart contract engineer, founding engineer at Merit Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
