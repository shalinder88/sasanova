import type { MetadataRoute } from "next";
import { tools, categories, versusPairs } from "@/data/tools";

const BASE = "https://sasanova.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Homepage
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Core hubs
    { url: `${BASE}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Secondary hubs
    { url: `${BASE}/best`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/alternatives`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Content pages
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/updates`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/vault`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },

    // Legal / policy pages
    { url: `${BASE}/disclosure`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/about/editorial-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/about/source-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/about/methodology`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  // Tool profile pages: /tools/[slug]
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE}/tools/${tool.slug}`,
    lastModified: new Date(tool.lastVerified),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Comparison pages: /compare/[slugA]-vs-[slugB]
  const comparePages: MetadataRoute.Sitemap = versusPairs.map((pair) => ({
    url: `${BASE}/compare/${pair.slugA}-vs-${pair.slugB}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Best-of category pages: /best/[category]
  const bestPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE}/best/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Alternatives pages: /alternatives/[slug]
  const alternativesPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE}/alternatives/${tool.slug}`,
    lastModified: new Date(tool.lastVerified),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Pricing pages: /pricing/[slug]
  const pricingPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE}/pricing/${tool.slug}`,
    lastModified: new Date(tool.lastVerified),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...toolPages,
    ...comparePages,
    ...bestPages,
    ...alternativesPages,
    ...pricingPages,
  ];
}
