"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/components/LanguageContext";

export default function Nav() {
  const pathname = usePathname();
  const { lang, toggleLang } = useLang();

  const linkStyle = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")
      ? { color: "var(--color-accent)", fontWeight: 600 as const }
      : { color: "var(--color-text-muted)" };

  return (
    <nav
      style={{
        background: "var(--color-surface-alt)",
        borderBottom: "1px solid var(--color-border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <Link
            href="/"
            style={{
              fontWeight: 700,
              fontSize: "1.125rem",
              color: "var(--color-accent)",
              textDecoration: "none",
            }}
          >
            GameGuideHub
          </Link>
          <div style={{ display: "flex", gap: 20, fontSize: "0.9rem" }}>
            <Link href="/gta6" style={linkStyle("/gta6")}>
              GTA VI
            </Link>
          </div>
        </div>
        <button
          onClick={toggleLang}
          style={{
            background: "var(--color-surface-raised)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-primary)",
            padding: "4px 12px",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          {lang === "en" ? "🇨🇳 中文" : "🇬🇧 English"}
        </button>
      </div>
    </nav>
  );
}
