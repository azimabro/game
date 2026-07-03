import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import JsonLd, { websiteLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Game Guide Hub — GTA VI Bilingual Walkthrough & Guide",
  description:
    "The most complete GTA VI guide site — English + 中文 bilingual walkthroughs, collectible locations, best vehicles & weapons, money guides, and hidden secrets. Updated daily.",
  alternates: {
    canonical: "https://kamekong.com/",
  },
  openGraph: {
    title: "Game Guide Hub — GTA VI Bilingual Walkthrough",
    description:
      "Complete GTA VI guides in English and Chinese. Missions, collectibles, money, secrets — everything you need.",
    url: "https://kamekong.com/",
    type: "website",
    siteName: "Game Guide Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Guide Hub — GTA VI Guides",
    description:
      "Bilingual GTA VI walkthroughs, collectibles, best vehicles, money guides.",
  },
  keywords: [
    "GTA VI",
    "GTA 6",
    "Grand Theft Auto VI",
    "game guide",
    "walkthrough",
    "攻略",
    "GTA6 攻略",
    "bilingual",
    "collectibles",
    "money guide",
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteLd()} />
      <Nav />
      <HomeContent />
      <Footer />
    </>
  );
}
