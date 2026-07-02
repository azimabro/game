// Shared markdown-to-HTML converter (no external deps — works with static export)
export function markdownToHtml(md: string): string {
  let html = md
    // Headings
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Unordered lists
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    // Images
    .replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" style="max-width:100%;border-radius:8px;margin:16px 0">'
    )
    // Horizontal rule
    .replace(/^---$/gm, "<hr>")
    // Paragraphs (double newlines)
    .replace(/\n\n/g, "</p><p>")
    // Wrap in paragraph
    .replace(/^(.+)$/gm, (line) => {
      if (
        line.startsWith("<h") ||
        line.startsWith("<li") ||
        line.startsWith("<hr") ||
        line.startsWith("</p>") ||
        line.startsWith("<p>")
      ) {
        return line;
      }
      return line;
    });

  html = "<p>" + html + "</p>";

  // Fix broken paragraphs around headings and list items
  html = html
    .replace(/<p><h/g, "<h")
    .replace(/<\/h(\d)><\/p>/g, "</h$1>")
    .replace(/<p><li>/g, "<ul><li>")
    .replace(/<\/li><\/p>/g, "</li></ul>")
    .replace(/<li>(.+)<\/li>/g, (_, content) => {
      return `<li>${content}</li>`;
    })
    .replace(/<\/li>\s*<li>/g, "</li><li>")
    .replace(/<li>/g, "</p><ul><li>")
    .replace(/<\/li>(?!\s*<li>|\s*<\/ul>)/g, "</li></ul><p>")
    .replace(/<hr>/g, "</p><hr><p>");

  return html;
}
