import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleContent from "@/components/ArticleContent";
import JsonLd, { articleBreadcrumbLd, articleLd } from "@/components/JsonLd";
import { GTA6_ARTICLES, GTA6_CATEGORIES } from "@/lib/content";

export function generateStaticParams() {
  return GTA6_ARTICLES.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = GTA6_ARTICLES.find(
    (a) => a.category === category && a.slug === slug
  );
  if (!article) return { title: "Article Not Found" };

  const cat = GTA6_CATEGORIES.find((c) => c.slug === category);
  const categoryName = cat?.title ?? category;
  const url = `https://kamekong.com/gta6/${category}/${slug}`;

  return {
    title: `${article.title} — GTA VI Guide | Game Guide Hub`,
    description: article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      siteName: "Game Guide Hub",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
    other: {
      "article:section": categoryName,
      "article:tag": "GTA VI",
    },
  };
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
        <main style={{ flex: 1, padding: "80px 24px", textAlign: "center" }}>
          <h1>Article not found</h1>
          <Link href="/gta6">← Back to GTA VI Guides</Link>
        </main>
        <Footer />
      </>
    );
  }

  const cat = GTA6_CATEGORIES.find((c) => c.slug === category);
  const categoryName = cat?.title ?? category;
  const url = `https://kamekong.com/gta6/${category}/${slug}`;

  const breadcrumbLd = articleBreadcrumbLd(category, categoryName, article.title, url);
  const articleSchema = articleLd(
    article.title,
    article.excerpt,
    url,
    "2026-06-30T00:00:00+08:00",
    "2026-07-03T00:00:00+08:00",
    categoryName,
  );

  return (
    <>
      <Nav />
      <main style={{ flex: 1 }}>
        <JsonLd data={breadcrumbLd} />
        <JsonLd data={articleSchema} />

        <article
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "48px 24px 80px",
          }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 8, alignItems: "center" }}>
              <li>
                <Link href="/" style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                  Home
                </Link>
              </li>
              <li style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>/</li>
              <li>
                <Link href="/gta6" style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                  GTA VI Guides
                </Link>
              </li>
              <li style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>/</li>
              <li>
                <Link href={`/gta6/${category}`} style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                  {categoryName}
                </Link>
              </li>
              <li style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>/</li>
              <li>
                <span style={{ color: "var(--color-text-primary)", fontSize: "0.85rem", fontWeight: 500 }}>
                  {article.title}
                </span>
              </li>
            </ol>
          </nav>

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
