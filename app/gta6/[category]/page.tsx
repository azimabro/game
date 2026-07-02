import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CategoryList from "@/components/CategoryList";
import CategoryHeader from "@/components/CategoryHeader";
import EmptyCategory from "@/components/EmptyCategory";
import { GTA6_CATEGORIES, GTA6_ARTICLES, GuideCategory } from "@/lib/content";

export function generateStaticParams() {
  return GTA6_CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category: GuideCategory | undefined = GTA6_CATEGORIES.find(
    (c) => c.slug === categorySlug
  );
  if (!category) {
    return (
      <>
        <Nav />
        <main style={{ flex: 1, padding: "80px 24px", textAlign: "center" }}>
          <h1>Category not found</h1>
          <Link href="/gta6">← Back to GTA VI Guides</Link>
        </main>
        <Footer />
      </>
    );
  }

  const articles = GTA6_ARTICLES.filter((a) => a.category === categorySlug);

  return (
    <>
      <Nav />
      <main style={{ flex: 1 }}>
        <CategoryHeader
          icon={category.icon}
          title={category.title}
          titleZh={category.titleZh}
          description={category.description}
          descriptionZh={category.descriptionZh}
        />

        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {articles.length === 0 ? (
            <EmptyCategory />
          ) : (
            <CategoryList categorySlug={categorySlug} articles={articles} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
