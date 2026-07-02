export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-surface-alt)",
        borderTop: "1px solid var(--color-border)",
        padding: "24px",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} Game Guide Hub. All guides written by players, for players.
      </p>
    </footer>
  );
}
