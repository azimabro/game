"use client";

import { useLang } from "@/components/LanguageContext";
import { markdownToHtml } from "@/lib/markdown";

interface ArticleContentProps {
  title: string;
  titleZh: string;
  excerpt: string;
  excerptZh: string;
  contentEn: string;
  contentZh: string;
}

export default function ArticleContent({
  title,
  titleZh,
  excerpt,
  excerptZh,
  contentEn,
  contentZh,
}: ArticleContentProps) {
  const { lang } = useLang();

  const displayTitle = lang === "zh" ? titleZh : title;
  const displayExcerpt = lang === "zh" ? excerptZh : excerpt;
  const displayContent = lang === "zh" ? contentZh : contentEn;

  return (
    <>
      {/* Article Header */}
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: 700,
          marginBottom: 8,
          lineHeight: 1.3,
          letterSpacing: "-0.02em",
        }}
      >
        {displayTitle}
      </h1>
      <p
        style={{
          color: "var(--color-text-muted)",
          marginBottom: 48,
          fontSize: "1.05rem",
        }}
      >
        {displayExcerpt}
      </p>

      {/* Article Body */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(displayContent),
        }}
      />
    </>
  );
}
