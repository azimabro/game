"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageContext";
import { GTA6_CATEGORIES } from "@/lib/content";
import type { GuideArticle } from "@/lib/content";
import NewsFeed from "@/components/NewsFeed";

export default function GTA6Overview({
  newsArticles,
}: {
  newsArticles: GuideArticle[];
}) {
  const { lang } = useLang();

  const t = {
    label:
      lang === "zh" ? "Grand Theft Auto VI" : "Grand Theft Auto VI",
    heading:
      lang === "zh" ? "GTA VI 完整攻略" : "GTA VI Complete Guide",
    description:
      lang === "zh"
        ? "GTA VI一站式攻略中心。双语攻略——英文 + 中文——覆盖罪城及周边的每一个任务、收集品、载具和秘密。"
        : "Your one-stop resource for everything in Grand Theft Auto VI. Bilingual guides — English + 中文 — covering every mission, collectible, vehicle, and secret in Vice City and beyond.",
    sectionTitle:
      lang === "zh" ? "攻略分类" : "Guide Categories",
  };

  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section
        style={{
          padding: "64px 24px 48px",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "var(--color-accent)",
            fontSize: "0.85rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 8,
          }}
        >
          {t.label}
        </p>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: 12,
            letterSpacing: "-0.02em",
          }}
        >
          {t.heading}
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
          }}
        >
          {t.description}
        </p>
      </section>

      {/* Latest News — inline full content */}
      <NewsFeed articles={newsArticles} />

      {/* Category Grid */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 24,
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: 12,
          }}
        >
          {t.sectionTitle}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {GTA6_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/gta6/${cat.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "var(--color-surface-alt)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 10,
                  padding: 20,
                  height: "100%",
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: 6,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {lang === "zh" ? cat.titleZh : cat.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {lang === "zh" ? cat.descriptionZh : cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
