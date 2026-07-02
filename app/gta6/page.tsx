import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GTA6Overview from "@/components/GTA6Overview";
import { GTA6_ARTICLES } from "@/lib/content";

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
