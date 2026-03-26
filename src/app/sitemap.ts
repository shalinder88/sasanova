import type { MetadataRoute } from "next";
import { tools, categories, versusPairs } from "@/data/tools";

const BASE = "https://sasanova.com";

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

  /* ── Guides: /guides/[slug] — priority 0.6, monthly ── */

  const guideSlugs = [...new Set([
    // Original guides
    "newsletter-stack", "ai-research-workflow", "automate-lead-capture",
    "crm-solo-founder", "project-management-small-team",
    "email-marketing-ecommerce", "automation-zapier-vs-make-vs-n8n",
    "meeting-recording-comparison", "notion-vs-obsidian-decision",
    "scheduling-tool-comparison", "best-free-tools-startups",
    "saas-affiliate-playbook", "migrate-from-mailchimp",
    "building-knowledge-base", "customer-support-stack",
    "ecommerce-stack-solo-creator", "choosing-analytics-tool",
    "remote-team-communication", "design-tools-non-designers",
    "accounting-freelancers", "hr-payroll-small-business",
    "video-podcast-recording", "social-media-management-stack",
    "website-builder-for-business", "cloud-storage-teams",
    "best-webinar-platform", "landing-page-builder-comparison",
    "seo-tools-for-small-sites", "proposal-software-freelancers",
    "customer-success-tools",
    // Migration guides
    "migrate-mailchimp-to-kit", "migrate-mailchimp-to-beehiiv",
    "migrate-substack-to-beehiiv", "migrate-salesforce-to-hubspot",
    "migrate-spreadsheet-to-crm", "migrate-zapier-to-make",
    "migrate-zapier-to-n8n",
    // Switching guides
    "switch-from-hubspot-to-pipedrive", "switch-from-mailchimp-to-activecampaign",
    "switch-from-pipedrive-to-hubspot", "switch-from-kit-to-beehiiv",
    "switch-from-make-to-zapier", "switch-from-notion-to-clickup",
    // Persona guides
    "best-email-tool-creators", "best-email-tool-agencies",
    "best-email-tool-ecommerce", "best-crm-freelancers-consultants",
    "best-crm-sales-teams", "best-crm-real-estate", "best-crm-agencies",
    "best-automation-tool-agencies", "best-automation-tool-solopreneurs",
    "best-automation-marketing-teams", "best-newsletter-paid-subscribers",
    "best-tools-saas-startup",
    // Setup guides
    "hubspot-crm-setup-guide", "beehiiv-setup-guide",
    "zapier-setup-guide", "pipedrive-setup-guide", "make-setup-guide",
    // Pricing deep dives
    "hubspot-pricing-reality", "automation-pricing-compared",
    "mailchimp-hidden-costs", "zapier-hidden-costs", "salesforce-hidden-costs",
    // Pricing history
    "mailchimp-pricing-history", "zapier-pricing-history", "hubspot-pricing-history",
    // Annual cost analysis
    "email-marketing-annual-cost-2026", "crm-annual-cost-2026",
    "automation-annual-cost-2026",
    // Cross-cluster comparisons
    "mailchimp-vs-hubspot-marketing", "notion-vs-clickup-vs-asana",
    "zapier-vs-hubspot-workflows",
    // Who should NOT use
    "who-should-not-use-hubspot", "who-should-not-use-mailchimp",
    "who-should-not-use-zapier", "who-should-not-use-notion",
    "who-should-not-use-salesforce",
    // Other
    "email-deliverability-compared", "crm-integrations-that-matter",
  ])];

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${BASE}/guides/${slug}`,
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
    ...updatePages,
  ];
}
