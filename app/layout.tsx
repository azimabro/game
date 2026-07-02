import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Game Guide Hub — In-Depth Bilingual Game Guides",
    template: "%s | Game Guide Hub",
  },
  description:
    "Comprehensive bilingual (English + 中文) game guides. Deep walkthroughs, collectible locations, best builds, and hidden secrets for the biggest games.",
  metadataBase: new URL("https://gameguidehub.com"),
  openGraph: {
    title: "Game Guide Hub — Bilingual Game Guides",
    description:
      "Deep, clean, fast game guides in English and Chinese. No ads bombardment, just answers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Guide Hub",
    description:
      "Deep, clean, fast game guides in English and Chinese.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
