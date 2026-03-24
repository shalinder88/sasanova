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

  // Guide pages: /guides/[slug] — read from guides hub data
  const guideSlugs = [
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
    "customer-success-tools", "migrate-mailchimp-to-kit",
    "migrate-mailchimp-to-beehiiv", "migrate-substack-to-beehiiv",
    "best-email-tool-creators", "best-email-tool-agencies",
    "migrate-salesforce-to-hubspot", "migrate-spreadsheet-to-crm",
    "best-crm-freelancers-consultants", "best-crm-sales-teams",
    "hubspot-pricing-reality", "migrate-zapier-to-make",
    "migrate-zapier-to-n8n", "best-automation-tool-agencies",
    "best-automation-tool-solopreneurs", "automation-pricing-compared",
    "mailchimp-hidden-costs", "zapier-hidden-costs",
    "best-crm-real-estate", "best-email-tool-ecommerce",
    "salesforce-hidden-costs", "switch-from-hubspot-to-pipedrive",
    "best-automation-marketing-teams",
    "switch-from-mailchimp-to-activecampaign", "hubspot-crm-setup-guide",
    "switch-from-pipedrive-to-hubspot", "switch-from-kit-to-beehiiv",
    "switch-from-make-to-zapier", "switch-from-notion-to-clickup",
  ];
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
  ];
}
