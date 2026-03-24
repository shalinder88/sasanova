import type { Metadata } from "next";
import { notFound } from "next/navigation";

const guideMeta: Record<string, { title: string; category: string }> = {
  "newsletter-stack": {
    title: "The Newsletter Stack for a One-Person Creator Under $150/Month",
    category: "Stack Building",
  },
  "ai-research-workflow": {
    title: "How to Build an AI Research Workflow That Actually Saves Time",
    category: "Workflow",
  },
  "automate-lead-capture": {
    title: "How to Automate Lead Capture Without Spending $500/Month on HubSpot",
    category: "Automation",
  },
  "crm-solo-founder": {
    title: "The Best CRM Setup for a Solo Founder Who Hates CRMs",
    category: "CRM",
  },
  "project-management-small-team": {
    title: "Choosing Project Management Software Without Losing Your Mind",
    category: "Project Management",
  },
  "email-marketing-ecommerce": {
    title: "Email Marketing for E-Commerce: Stop Paying Mailchimp Prices",
    category: "E-Commerce",
  },
  "automation-zapier-vs-make-vs-n8n": {
    title: "Zapier vs Make vs n8n: Which Automation Tool Fits Your Budget and Brain",
    category: "Automation",
  },
  "meeting-recording-comparison": {
    title: "AI Meeting Assistants: What Actually Works and What's Marketing Hype",
    category: "Productivity",
  },
  "notion-vs-obsidian-decision": {
    title: "Notion vs Obsidian: The Decision That Reveals How You Think",
    category: "Knowledge Management",
  },
  "scheduling-tool-comparison": {
    title: "Calendly vs Cal.com: Pay $192/Year or Self-Host for Free",
    category: "Scheduling",
  },
  "best-free-tools-startups": {
    title: "The $0 Startup Stack: Every Free Tool That's Actually Worth Using",
    category: "Stack Building",
  },
  "saas-affiliate-playbook": {
    title: "How SaaS Affiliate Programs Actually Work: A Realistic Guide for Content Sites",
    category: "Monetization",
  },
  "migrate-from-mailchimp": {
    title: "How to Leave Mailchimp Without Losing Your List: A Step-by-Step Migration Guide",
    category: "Email Migration",
  },
  "migrate-mailchimp-to-kit": {
    title: "How to Migrate from Mailchimp to Kit (ConvertKit) Without Losing Subscribers",
    category: "Email Migration",
  },
  "migrate-mailchimp-to-beehiiv": {
    title: "Leaving Mailchimp for beehiiv: The Complete Migration Playbook",
    category: "Email Migration",
  },
  "migrate-substack-to-beehiiv": {
    title: "Substack to beehiiv: Why Creators Switch and How to Do It",
    category: "Email Migration",
  },
  "best-email-tool-creators": {
    title: "The Best Email Platform for Creators in 2026 (Not What You Think)",
    category: "Creator Tools",
  },
  "best-email-tool-agencies": {
    title: "Email Marketing Tools for Agencies: Managing 10+ Client Accounts",
    category: "Agency Tools",
  },
  "building-knowledge-base": {
    title: "Building a Knowledge Base That Your Team Actually Uses",
    category: "Knowledge Management",
  },
  "customer-support-stack": {
    title: "Customer Support Software for Teams Under 20: What You Actually Need",
    category: "Support",
  },
  "ecommerce-stack-solo-creator": {
    title: "The Complete E-commerce Stack for Solo Creators Under $100/Month",
    category: "E-Commerce",
  },
  "choosing-analytics-tool": {
    title: "How to Choose an Analytics Tool Without Drowning in Data",
    category: "Analytics",
  },
  "remote-team-communication": {
    title: "Setting Up Communication Tools for a Remote Team of 5-50",
    category: "Remote Work",
  },
  "design-tools-non-designers": {
    title: "Design Tools for People Who Can't Design: A Practical Guide",
    category: "Design",
  },
  "accounting-freelancers": {
    title: "Accounting Software for Freelancers: Stop Overpaying",
    category: "Finance",
  },
  "hr-payroll-small-business": {
    title: "HR and Payroll Software for Small Businesses: The Honest Comparison",
    category: "HR & Payroll",
  },
  "video-podcast-recording": {
    title: "Recording Setup for Remote Podcasts and Video: What Actually Works",
    category: "Content Creation",
  },
  "social-media-management-stack": {
    title: "Social Media Management Without the $300/Month Bill",
    category: "Social Media",
  },
  "website-builder-for-business": {
    title: "Choosing a Website Builder in 2026: Beyond the Marketing Pages",
    category: "Web Development",
  },
  "cloud-storage-teams": {
    title: "Cloud Storage for Teams: Dropbox vs Google Workspace vs Box",
    category: "Infrastructure",
  },
  "best-webinar-platform": {
    title: "Choosing a Webinar Platform Without Overpaying",
    category: "Webinars",
  },
  "landing-page-builder-comparison": {
    title: "Landing Page Builders: When to Pay $99/Month and When $0 Works",
    category: "Conversion",
  },
  "seo-tools-for-small-sites": {
    title: "SEO Tools for Sites Under 10K Monthly Visitors",
    category: "SEO",
  },
  "proposal-software-freelancers": {
    title: "Stop Sending PDFs: Proposal Software That Actually Closes Deals",
    category: "Sales",
  },
  "customer-success-tools": {
    title: "Customer Success Tools: When Spreadsheets Stop Working",
    category: "Customer Success",
  },
  "migrate-salesforce-to-hubspot": {
    title: "Migrating from Salesforce to HubSpot: What Actually Happens",
    category: "CRM Migration",
  },
  "migrate-spreadsheet-to-crm": {
    title: "Your Spreadsheet CRM is Costing You Deals: When and How to Switch",
    category: "CRM Migration",
  },
  "best-crm-freelancers-consultants": {
    title: "Best CRM for Freelancers and Consultants (You Don't Need Salesforce)",
    category: "CRM",
  },
  "best-crm-sales-teams": {
    title: "CRM for Sales Teams of 5-25: HubSpot vs Pipedrive vs Close",
    category: "CRM",
  },
  "hubspot-pricing-reality": {
    title: "HubSpot Pricing: What It Actually Costs (Not What the Website Says)",
    category: "CRM",
  },
  "migrate-zapier-to-make": {
    title: "Switching from Zapier to Make: The Real Savings and The Real Pain",
    category: "Migration Guide",
  },
  "migrate-zapier-to-n8n": {
    title: "Self-Hosting Your Automations: Zapier to n8n Migration Guide",
    category: "Migration Guide",
  },
  "best-automation-tool-agencies": {
    title: "Automation Tools for Agencies: Managing Client Workflows at Scale",
    category: "Agency Operations",
  },
  "best-automation-tool-solopreneurs": {
    title: "Automation for One-Person Businesses: What's Worth Paying For",
    category: "Solopreneur",
  },
  "automation-pricing-compared": {
    title: "Zapier vs Make vs n8n Pricing: The Honest Math Nobody Shows You",
    category: "Pricing Deep Dive",
  },
};

export function generateStaticParams() {
  return Object.keys(guideMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideMeta[slug];
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: guide.title,
    description: `Read the full guide: ${guide.title}. Practical, tool-agnostic advice from the Sasanova editorial team.`,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guideMeta[slug];

  if (!guide) {
    notFound();
  }

  /* Guide content not yet published — return 404 instead of a stub page */
  notFound();
}
