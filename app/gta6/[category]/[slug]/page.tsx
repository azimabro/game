import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleContent from "@/components/ArticleContent";
import { GTA6_ARTICLES } from "@/lib/content";

export function generateStaticParams() {
  return GTA6_ARTICLES.map((a) => ({ category: a.category, slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const article = GTA6_ARTICLES.find(
    (a) => a.category === category && a.slug === slug
  );

  if (!article) {
    return (
      <>
        <Nav />
        <main
          style={{ flex: 1, padding: "80px 24px", textAlign: "center" }}
        >
          <h1>Article not found</h1>
          <Link href="/gta6">← Back to GTA VI Guides</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main style={{ flex: 1 }}>
        <article
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "48px 24px 80px",
          }}
        >
          {/* Breadcrumb */}
          <div style={{ marginBottom: 32 }}>
            <Link
              href="/gta6"
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.85rem",
              }}
            >
              GTA VI Guides
            </Link>
            <span style={{ color: "var(--color-text-muted)", margin: "0 8px" }}>
              /
            </span>
            <Link
              href={`/gta6/${category}`}
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.85rem",
              }}
            >
              {category}
            </Link>
          </div>

          {/* Language-aware article content */}
          <ArticleContent
            title={article.title}
            titleZh={article.titleZh}
            excerpt={article.excerpt}
            excerptZh={article.excerptZh}
            contentEn={article.contentEn}
            contentZh={article.contentZh}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
