import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/monetization-guide", "/compare/shortlist", "/api/", "/tools?*", "/search?*"],
    },
    sitemap: "https://sasanova.com/sitemap.xml",
  };
}
