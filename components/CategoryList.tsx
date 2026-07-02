"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageContext";
import type { GuideArticle } from "@/lib/content";

interface CategoryListProps {
  categorySlug: string;
  articles: GuideArticle[];
}

export default function CategoryList({ categorySlug, articles }: CategoryListProps) {
  const { lang } = useLang();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/gta6/${categorySlug}/${article.slug}`}
          style={{ textDecoration: "none" }}
        >
          <article
            style={{
              background: "var(--color-surface-alt)",
              border: "1px solid var(--color-border)",
              borderRadius: 10,
              padding: 20,
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: 4,
                color: "var(--color-text-primary)",
              }}
            >
              {lang === "zh" ? article.titleZh : article.title}
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
              }}
            >
              {lang === "zh" ? article.excerptZh : article.excerpt}
            </p>
          </article>
        </Link>
      ))}
    </div>
  );
}
