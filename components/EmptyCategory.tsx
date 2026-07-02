"use client";

import { useLang } from "@/components/LanguageContext";

export default function EmptyCategory() {
  const { lang } = useLang();
  return (
    <div
      style={{
        background: "var(--color-surface-alt)",
        border: "1px solid var(--color-border)",
        borderRadius: 10,
        padding: 40,
        textAlign: "center",
      }}
    >
      <p style={{ color: "var(--color-text-muted)" }}>
        {lang === "zh"
          ? "攻略即将推出。内容将在GTA VI信息公布后逐步添加。"
          : "Guides coming soon. Content will be added as GTA VI information becomes available."}
      </p>
    </div>
  );
}
