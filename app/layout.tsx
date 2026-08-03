import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ClickNotifier } from "@/components/click-notifier";
import { PersonJsonLd } from "@/components/person-json-ld";
import { fullName, shareBlurbText, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: shareBlurbText,
  authors: [{ name: fullName, url: siteUrl }],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: siteName,
    description: shareBlurbText,
    url: siteUrl,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: shareBlurbText,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PersonJsonLd />
        {children}
        <ClickNotifier />
        <Analytics />
      </body>
    </html>
  );
}
