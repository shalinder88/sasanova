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

  // Category pages: /category/[slug]
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE}/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Weekly digest pages: /updates/[slug]
  const weeklyDigestSlugs = [
    "week-12-march-2026",
    "week-13-march-2026",
    "week-14-april-2026",
    "week-15-april-2026",
  ];
  const weeklyDigestPages: MetadataRoute.Sitemap = weeklyDigestSlugs.map(
    (slug) => ({
      url: `${BASE}/updates/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  // Guide pages: /guides/[slug] — read from guides hub data
  // Deduplicated guide slugs — every guide page on the site
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
    "hubspot-vs-activecampaign-full-comparison",
    "mailchimp-vs-hubspot-marketing", "notion-vs-clickup-vs-asana",
    "zapier-vs-hubspot-workflows", "beehiiv-vs-kit-vs-mailchimp-for-creators",
    // Who should NOT use
    "who-should-not-use-hubspot", "who-should-not-use-mailchimp",
    "who-should-not-use-zapier", "who-should-not-use-notion",
    "who-should-not-use-salesforce",
    // Other
    "email-deliverability-compared", "crm-integrations-that-matter",
  ])];
  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${BASE}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...toolPages,
    ...comparePages,
    ...bestPages,
    ...alternativesPages,
    ...pricingPages,
    ...categoryPages,
    ...guidePages,
    ...weeklyDigestPages,
  ];
}
