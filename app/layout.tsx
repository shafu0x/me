import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { PersonJsonLd } from "@/components/person-json-ld";
import {
  fullName,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: siteDescription,
  authors: [{ name: fullName, url: siteUrl }],
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/pfp.jpg",
    apple: "/pfp.jpg",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
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
        <Analytics />
      </body>
    </html>
  );
}
