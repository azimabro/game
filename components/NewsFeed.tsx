"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageContext";
import type { GuideArticle } from "@/lib/content";

export default function NewsFeed({ articles }: { articles: GuideArticle[] }) {
  const { lang } = useLang();

  if (articles.length === 0) return null;

  return (
    <section
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "0 24px 48px",
      }}
    >
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "var(--color-text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 20,
          borderBottom: "1px solid var(--color-border)",
          paddingBottom: 12,
        }}
      >
        {lang === "zh" ? "📰 最新资讯" : "📰 Latest News"}
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {articles.map((article) => {
          const displayTitle =
            lang === "zh" ? article.titleZh : article.title;

          return (
            <li
              key={article.slug}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <Link
                href={`/gta6/${article.category}/${article.slug}`}
                style={{
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                {displayTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
