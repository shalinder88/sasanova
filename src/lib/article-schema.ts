export function generateArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@type": "Organization",
      name: "Sasanova",
      url: "https://sasanova.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Sasanova",
      url: "https://sasanova.com",
    },
  };
}
