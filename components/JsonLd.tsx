export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Generate BreadcrumbList JSON-LD for article pages */
export function articleBreadcrumbLd(category: string, categoryName: string, articleTitle: string, articleUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Game Guide Hub",
        item: "https://kamekong.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "GTA VI Guides",
        item: "https://kamekong.com/gta6",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: `https://kamekong.com/gta6/${category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: articleTitle,
        item: articleUrl,
      },
    ],
  };
}

/** Generate Article JSON-LD for rich results */
export function articleLd(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  category: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Organization",
      name: "Game Guide Hub",
      url: "https://kamekong.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Game Guide Hub",
      url: "https://kamekong.com/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    about: {
      "@type": "VideoGame",
      name: "Grand Theft Auto VI",
    },
    articleSection: category,
    inLanguage: ["en", "zh"],
  };
}

/** WebSite schema for homepage */
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Game Guide Hub",
    url: "https://kamekong.com/",
    description: "Comprehensive bilingual (English + 中文) GTA VI game guides. Walkthroughs, collectibles, vehicles, and secrets.",
    inLanguage: ["en", "zh"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://kamekong.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}
