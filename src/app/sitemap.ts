import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { tools, categories, versusPairs } from "@/data/tools";

const BASE = "https://sasanova.com";

/** Dynamically discover all guide pages from the filesystem */
function getGuideSlugs(): string[] {
  const guidesDir = join(process.cwd(), "src/app/guides");
  return readdirSync(guidesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "[slug]" && d.name !== "franchise")
    .map((d) => d.name);
}

/** Dynamically discover all franchise guide pages */
function getFranchiseSlugs(): string[] {
  const franchiseDir = join(process.cwd(), "src/app/guides/franchise");
  return readdirSync(franchiseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const guidesLastMod = new Date("2026-03-01");

  /* ── Static pages ── */

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Core hubs
    { url: `${BASE}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Secondary hubs
    { url: `${BASE}/best`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/alternatives`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Content hubs
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/updates`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/vault`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/calculate`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/embed`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Product & feature pages
    { url: `${BASE}/audit`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/alerts`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/recommend`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/playground`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/migrate`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/trends`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/data`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/pro`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/vendors`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },

    // About pages
    { url: `${BASE}/about/editorial-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/about/source-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/about/methodology`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },

    // Legal / policy pages
    { url: `${BASE}/disclosure`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  /* ── Tools: /tools/[slug] — priority 0.8, weekly ── */

  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  /* ── Comparisons: /compare/[pair] — priority 0.8, weekly ── */

  const comparePages: MetadataRoute.Sitemap = versusPairs.map((pair) => ({
    url: `${BASE}/compare/${pair.slugA}-vs-${pair.slugB}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  /* ── Best-of: /best/[category] — priority 0.7, weekly ── */

  const bestPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE}/best/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* ── Alternatives: /alternatives/[slug] — priority 0.7, weekly ── */

  const alternativesPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE}/alternatives/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* ── Pricing: /pricing/[slug] — priority 0.7, weekly ── */

  const pricingPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE}/pricing/${tool.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* ── Categories: /category/[slug] — priority 0.6, monthly ── */

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  /* ── Guides: /guides/[slug] — priority 0.6, monthly (dynamically discovered) ── */

  const guidePages: MetadataRoute.Sitemap = getGuideSlugs().map((slug) => ({
    url: `${BASE}/guides/${slug}`,
    lastModified: guidesLastMod,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  /* ── Franchise guides: /guides/franchise/[slug] — priority 0.6, monthly ── */

  const franchiseGuidePages: MetadataRoute.Sitemap = getFranchiseSlugs().map((slug) => ({
    url: `${BASE}/guides/franchise/${slug}`,
    lastModified: guidesLastMod,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  /* ── Updates: /updates/[slug] — priority 0.5, monthly ── */

  // Map digest slugs to approximate dates based on week number
  const weeklyDigests: { slug: string; date: string }[] = [
    { slug: "week-12-march-2026", date: "2026-03-16" },
    { slug: "week-13-march-2026", date: "2026-03-23" },
    { slug: "week-14-march-2026", date: "2026-03-30" },
    { slug: "week-15-march-2026", date: "2026-04-06" },
  ];

  const updatePages: MetadataRoute.Sitemap = weeklyDigests.map(({ slug, date }) => ({
    url: `${BASE}/updates/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  /* ── Combine all sections ── */

  return [
    ...staticPages,
    ...toolPages,
    ...comparePages,
    ...bestPages,
    ...alternativesPages,
    ...pricingPages,
    ...categoryPages,
    ...guidePages,
    ...franchiseGuidePages,
    ...updatePages,
  ];
}
