// SEO & AEO helpers for Sasanova

const SITE_URL = "https://sasanova.com";

/**
 * Generate a BreadcrumbList JSON-LD object.
 * Pass an array of {name, path} items from root to current page.
 * Paths should be relative (e.g. "/tools" or "/tools/notion").
 */
export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Build a canonical URL from a relative path. */
export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
