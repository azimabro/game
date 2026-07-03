import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GTA6Overview from "@/components/GTA6Overview";
import { GTA6_ARTICLES } from "@/lib/content";

export const metadata: Metadata = {
  title: "GTA VI Complete Guide — Missions, Collectibles, Vehicles & Secrets | Game Guide Hub",
  description:
    "Complete GTA VI walkthrough hub: main missions, side quests, collectible locations, best vehicles & weapons rankings, money-making guides, and hidden secrets. English + 中文 bilingual guides.",
  alternates: {
    canonical: "https://kamekong.com/gta6",
  },
  openGraph: {
    title: "GTA VI Complete Guide — All Missions, Collectibles & Secrets",
    description:
      "Your one-stop GTA VI resource — bilingual guides covering every mission, collectible, vehicle, weapon, and hidden secret in Vice City.",
    url: "https://kamekong.com/gta6",
    type: "website",
    siteName: "Game Guide Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA VI Complete Guide | Game Guide Hub",
    description:
      "Bilingual GTA VI guides — missions, collectibles, vehicles, money, secrets.",
  },
  keywords: [
    "GTA VI guide",
    "GTA 6 walkthrough",
    "GTA6 攻略",
    "GTA VI missions",
    "GTA VI collectibles",
    "GTA VI vehicles",
    "GTA VI money guide",
    "GTA6 赚钱",
    "bilingual game guide",
  ],
};

export default function GTA6Home() {
  const newsArticles = GTA6_ARTICLES.filter((a) => a.isNews);

  return (
    <>
      <Nav />
      <GTA6Overview newsArticles={newsArticles} />
      <Footer />
    </>
  );
}
