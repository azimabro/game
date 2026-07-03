"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageContext";

export default function HomeContent() {
  const { lang } = useLang();

  const t = {
    heroTitle: "Game Guide Hub",
    heroDesc:
      lang === "zh"
        ? "深度双语游戏攻略 — 英文 + 中文。"
        : "In-depth bilingual game guides — English + 中文.",
    heroSub:
      lang === "zh"
        ? "无广告轰炸，只有答案。"
        : "No ads bombardment. Just answers.",
    gta6Cta: lang === "zh" ? "GTA VI 攻略 →" : "GTA VI Guides →",
    sectionTitle: lang === "zh" ? "按游戏浏览" : "Guides by Game",
    gta6Title: "Grand Theft Auto VI",
    gta6Desc:
      lang === "zh"
        ? "完整攻略、收集品位置、最佳载具、赚钱指南与隐藏秘密。"
        : "Complete walkthroughs, collectible locations, best vehicles, money-making guides, and hidden secrets.",
    comingSoonTitle: lang === "zh" ? "即将推出" : "Coming Soon",
    comingSoonDesc:
      lang === "zh"
        ? "更多游戏将在扩展后添加。"
        : "More games will be added here as we expand.",
    guidesLabel: lang === "zh" ? "篇攻略" : " guides",
  };

  return (
    <main style={{ flex: 1 }}>
      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 64px",
          textAlign: "center",
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          {t.heroTitle}
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          {t.heroDesc}
          <br />
          {t.heroSub}
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/gta6"
            style={{
              background: "var(--color-accent)",
              color: "#1f2937",
              fontWeight: 600,
              padding: "10px 24px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            {t.gta6Cta}
          </Link>
        </div>
      </section>

      {/* Games index */}
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
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {/* GTA VI Card */}
          <Link href="/gta6" style={{ textDecoration: "none" }}>
            <div
              style={{
                background: "var(--color-surface-alt)",
                border: "1px solid var(--color-border)",
                borderRadius: 10,
                padding: 24,
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {t.gta6Title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  marginBottom: 12,
                }}
              >
                {t.gta6Desc}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                }}
              >
                <span>25 {t.guidesLabel}</span>
              </div>
            </div>
          </Link>

          {/* Coming Soon Card */}
          <div
            style={{
              background: "var(--color-surface-alt)",
              border: "1px solid var(--color-border)",
              borderRadius: 10,
              padding: 24,
              opacity: 0.5,
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              {t.comingSoonTitle}
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
                marginBottom: 12,
              }}
            >
              {t.comingSoonDesc}
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
              }}
            >
              <span>0 {t.guidesLabel}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
