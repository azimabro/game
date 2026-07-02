"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageContext";

interface CategoryHeaderProps {
  icon: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
}

export default function CategoryHeader({
  icon,
  title,
  titleZh,
  description,
  descriptionZh,
}: CategoryHeaderProps) {
  const { lang } = useLang();

  const displayTitle = lang === "zh" ? titleZh : title;
  const displayDesc = lang === "zh" ? descriptionZh : description;

  return (
    <section
      style={{
        padding: "48px 24px 32px",
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <Link
        href="/gta6"
        style={{
          color: "var(--color-text-muted)",
          fontSize: "0.85rem",
        }}
      >
        ← {lang === "zh" ? "返回 GTA VI 攻略" : "Back to GTA VI Guides"}
      </Link>
      <div style={{ fontSize: "2rem", marginTop: 24, marginBottom: 8 }}>
        {icon}
      </div>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        {displayTitle}
      </h1>
      <p
        style={{
          color: "var(--color-text-muted)",
          fontSize: "1.05rem",
          lineHeight: 1.6,
        }}
      >
        {displayDesc}
      </p>
    </section>
  );
}
