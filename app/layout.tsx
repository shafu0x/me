import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
