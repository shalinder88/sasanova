import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateArticleSchema } from "@/lib/article-schema";
import { canonicalUrl } from "@/lib/seo";

const guideMeta: Record<string, { title: string; category: string }> = {
  "how-to-choose-email-platform": {
    title:
      "How to Choose an Email Marketing Platform in 2026: A Decision Framework",
    category: "Decision Framework",
  },
  "how-to-choose-crm": {
    title: "How to Choose a CRM Without Overthinking It",
    category: "Decision Framework",
  },
  "how-to-choose-automation-tool": {
    title:
      "Zapier vs Make vs n8n: A Decision Framework (Not a Feature List)",
    category: "Decision Framework",
  },
  "how-much-should-software-cost": {
    title:
      "How Much Should Your Software Stack Cost? Benchmarks by Business Stage",
    category: "Decision Framework",
  },
  "when-to-switch-software": {
    title: "When to Switch Software (And When to Just Live With It)",
    category: "Decision Framework",
  },
  "creator-toolkit": {
    title: "The Creator's Complete Software Toolkit: Every Tool You Need in 2026",
    category: "Scenario Hub",
  },
  "solo-founder-stack": {
    title: "The Solo Founder's Operating System: Software Stack for Under $200/Month",
    category: "Scenario Hub",
  },
  "agency-operations-stack": {
    title: "Agency Operations Stack: Managing 10+ Clients Without Burning Out",
    category: "Scenario Hub",
  },
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
  "salesforce-hidden-costs": {
    title: "Salesforce Pricing: The Real Number Is 3-5x What You See",
    category: "Hidden Costs",
  },
  "switch-from-hubspot-to-pipedrive": {
    title: "Switching from HubSpot to Pipedrive: A Smaller CRM That Gets Used",
    category: "Migration Guide",
  },
  "best-automation-marketing-teams": {
    title: "Marketing Automation on a Budget: What Actually Moves the Needle",
    category: "Persona Guide",
  },
  "switch-from-mailchimp-to-activecampaign": {
    title: "Mailchimp to ActiveCampaign: When You Need Real Automation",
    category: "Migration Guide",
  },
  "switch-from-pipedrive-to-hubspot": {
    title: "Pipedrive to HubSpot: When You Need Marketing + Sales Together",
    category: "Migration Guide",
  },
  "switch-from-kit-to-beehiiv": {
    title: "Kit to beehiiv: The Creator Newsletter Migration",
    category: "Email Migration",
  },
  "switch-from-make-to-zapier": {
    title: "Going Back to Zapier from Make: When Simplicity Wins",
    category: "Migration Guide",
  },
  "switch-from-notion-to-clickup": {
    title: "Notion to ClickUp: When You Need a Real Project Manager",
    category: "Migration Guide",
  },
  "hubspot-crm-setup-guide": {
    title: "HubSpot CRM Setup in 30 Minutes: The No-Nonsense Guide",
    category: "Implementation Guide",
  },
  "beehiiv-setup-guide": {
    title: "beehiiv Setup Guide: From Zero to First Newsletter in 60 Minutes",
    category: "Implementation Guide",
  },
  "zapier-setup-guide": {
    title: "Your First 5 Zapier Automations: A Practical Setup Guide",
    category: "Implementation Guide",
  },
  "pipedrive-setup-guide": {
    title: "Pipedrive Setup for Sales Teams: Pipeline to First Deal",
    category: "Implementation Guide",
  },
  "make-setup-guide": {
    title: "Make (Integromat) Setup: Your First Automation Without the Confusion",
    category: "Implementation Guide",
  },
  "best-newsletter-paid-subscribers": {
    title: "Building a Paid Newsletter: Platform Comparison for Monetization",
    category: "Newsletter Monetization",
  },
  "best-tools-saas-startup": {
    title: "The Complete SaaS Startup Stack Under $500/Month",
    category: "Stack Building",
  },
  "best-crm-agencies": {
    title: "CRM for Agencies: Managing 20+ Clients Without Losing Your Mind",
    category: "Agency Operations",
  },
  "email-deliverability-compared": {
    title: "Email Deliverability: Which Platforms Actually Land in the Inbox",
    category: "Email Marketing",
  },
  "crm-integrations-that-matter": {
    title: "CRM Integrations That Actually Matter (And Ones That Don't)",
    category: "CRM",
  },
  "hubspot-vs-activecampaign-full-comparison": {
    title: "HubSpot vs ActiveCampaign: CRM + Email Marketing in One or Separate?",
    category: "Cross-Platform Comparison",
  },
  "mailchimp-vs-hubspot-marketing": {
    title: "Mailchimp vs HubSpot Marketing Hub: When Free Isn't Really Free",
    category: "Cross-Platform Comparison",
  },
  "notion-vs-clickup-vs-asana": {
    title: "Notion vs ClickUp vs Asana: The Three-Way Comparison Nobody Gets Right",
    category: "Cross-Platform Comparison",
  },
  "zapier-vs-hubspot-workflows": {
    title: "Zapier vs HubSpot Workflows: Do You Need Both?",
    category: "Cross-Platform Comparison",
  },
  "beehiiv-vs-kit-vs-mailchimp-for-creators": {
    title: "beehiiv vs Kit vs Mailchimp for Creators: The Definitive 2026 Comparison",
    category: "Cross-Platform Comparison",
  },
  "mailchimp-pricing-history": {
    title: "Mailchimp Pricing Changes: A Timeline of Every Increase Since 2019",
    category: "Pricing History",
  },
  "zapier-pricing-history": {
    title: "Zapier Pricing Changes: Why Your Bill Keeps Going Up",
    category: "Pricing History",
  },
  "hubspot-pricing-history": {
    title: "HubSpot Pricing Evolution: From Startup-Friendly to Enterprise-Priced",
    category: "Pricing History",
  },
  "who-should-not-use-hubspot": {
    title: "Who Should NOT Use HubSpot (And What to Use Instead)",
    category: "Anti-Recommendation",
  },
  "who-should-not-use-mailchimp": {
    title: "Who Should NOT Use Mailchimp in 2026",
    category: "Anti-Recommendation",
  },
  "who-should-not-use-zapier": {
    title: "Who Should NOT Use Zapier (Even Though Everyone Does)",
    category: "Anti-Recommendation",
  },
  "who-should-not-use-notion": {
    title: "Who Should NOT Use Notion (Despite What Twitter Says)",
    category: "Anti-Recommendation",
  },
  "who-should-not-use-salesforce": {
    title: "Who Should NOT Use Salesforce (Save Yourself $50K/Year)",
    category: "Anti-Recommendation",
  },
  "mailchimp-hidden-costs": {
    title: "The Real Cost of Mailchimp: What the Pricing Page Doesn't Show",
    category: "Hidden Costs",
  },
  "zapier-hidden-costs": {
    title: "Zapier's Hidden Costs: Why Your $20/Month Plan Becomes $100",
    category: "Hidden Costs",
  },
  "best-email-tool-ecommerce": {
    title: "Best Email Marketing Tool for E-commerce (Not Mailchimp)",
    category: "Persona Guide",
  },
  "best-crm-real-estate": {
    title: "Best CRM for Real Estate Agents (Skip the Enterprise Tools)",
    category: "Persona Guide",
  },
  "email-marketing-annual-cost-2026": {
    title: "Email Marketing Costs in 2026: What You'll Actually Pay",
    category: "Annual Cost Comparison",
  },
  "crm-annual-cost-2026": {
    title: "CRM Costs in 2026: Per-Seat Math That Changes Everything",
    category: "Annual Cost Comparison",
  },
  "automation-annual-cost-2026": {
    title: "Automation Tool Costs in 2026: Task Counting Changes Everything",
    category: "Annual Cost Comparison",
  },
  "email-automation-sequences-compared": {
    title: "Email Automation Sequences: Which Platform Does It Best?",
    category: "Email Marketing",
  },
  "crm-reporting-compared": {
    title: "CRM Reporting: What You Actually Get vs What Vendors Promise",
    category: "CRM",
  },
  "automation-error-handling": {
    title: "Automation Error Handling: The Feature That Separates Amateurs from Pros",
    category: "Automation",
  },
  "email-list-health-guide": {
    title: "Email List Health: The Metrics Nobody Talks About Until Deliverability Tanks",
    category: "Email Marketing",
  },
  "crm-data-migration-checklist": {
    title: "CRM Data Migration Checklist: What to Clean Before You Move",
    category: "CRM Migration",
  },
  "best-free-crm-2026": {
    title: "Best Free CRM in 2026: What You Actually Get for $0",
    category: "Pricing Deep Dive",
  },
  "best-free-email-tool-2026": {
    title: "Best Free Email Marketing Tool in 2026: The Real Limits",
    category: "Pricing Deep Dive",
  },
  "cheapest-automation-tool-2026": {
    title: "Cheapest Automation Tool in 2026: Real Cost at Every Volume",
    category: "Pricing Deep Dive",
  },
  "best-crm-under-20-per-user": {
    title: "Best CRM Under $20/User/Month: Real Options for Budget Teams",
    category: "Pricing Deep Dive",
  },
  "best-email-tool-under-50-per-month": {
    title: "Best Email Tool Under $50/Month: Where the Value Actually Is",
    category: "Pricing Deep Dive",
  },
  "email-marketing-faq": {
    title: "Email Marketing Questions Answered: 30 Things Buyers Actually Ask",
    category: "FAQ",
  },
  "crm-faq": {
    title: "CRM Questions Answered: 25 Things Small Teams Actually Ask",
    category: "FAQ",
  },
  "automation-faq": {
    title: "Automation Questions Answered: 20 Things Buyers Actually Ask",
    category: "FAQ",
  },
  "when-hubspot-stops-being-cheap": {
    title: "When HubSpot Stops Being Cheap: The Exact Thresholds",
    category: "Cost Threshold",
  },
  "when-mailchimp-becomes-expensive": {
    title: "The Exact Subscriber Count Where Mailchimp Becomes a Bad Deal",
    category: "Cost Threshold",
  },
  "when-zapier-costs-more-than-make": {
    title: "The Exact Task Volume Where Zapier Stops Making Sense",
    category: "Cost Threshold",
  },
  "when-free-crm-costs-more": {
    title: "When Free CRM Plans Actually Cost You Money",
    category: "Cost Threshold",
  },
  "saas-pricing-traps-2026": {
    title: "7 SaaS Pricing Traps That Cost Founders Thousands in 2026",
    category: "Cost Threshold",
  },
  "mailchimp-counts-unsubscribed-contacts": {
    title: "Mailchimp Counts Unsubscribed Contacts: What It Costs You",
    category: "Pricing Gotcha",
  },
  "zapier-multi-step-task-counting": {
    title:
      "How Zapier Counts Multi-Step Tasks (And Why Your Bill Is Higher)",
    category: "Pricing Gotcha",
  },
  "hubspot-onboarding-fee-explained": {
    title:
      "HubSpot's $3,000 Onboarding Fee: What You Get and Whether It's Worth It",
    category: "Pricing Gotcha",
  },
  "salesforce-annual-contract-trap": {
    title:
      "Salesforce Annual Contracts: What Happens When You Want Out",
    category: "Pricing Gotcha",
  },
  "per-seat-pricing-trap-explained": {
    title:
      "The Per-Seat Pricing Trap: How $14/Seat Becomes $14,000/Year",
    category: "Pricing Gotcha",
  },
  "email-welcome-sequence-template": {
    title: "Welcome Email Sequence Template: 5 Emails That Convert",
    category: "Workflow Template",
  },
  "crm-pipeline-template": {
    title: "CRM Pipeline Template: 5 Stages That Actually Work",
    category: "Workflow Template",
  },
  "automation-audit-template": {
    title:
      "Automation Audit Template: Find Wasted Tasks in 30 Minutes",
    category: "Workflow Template",
  },
  "saas-vendor-comparison-template": {
    title:
      "SaaS Vendor Comparison Template: Evaluate Any Tool in 10 Minutes",
    category: "Workflow Template",
  },
  "monthly-saas-review-template": {
    title: "Monthly SaaS Review Template: Keep Your Stack Lean",
    category: "Workflow Template",
  },
  "saas-costs-for-1-person-business": {
    title: "SaaS Costs for a 1-Person Business: Complete Stack Breakdown",
    category: "Team Size Scaling",
  },
  "saas-costs-for-5-person-team": {
    title: "SaaS Costs for a 5-Person Team: Per-Seat Math Across Every Category",
    category: "Team Size Scaling",
  },
  "saas-costs-for-10-person-team": {
    title: "SaaS Costs for a 10-Person Team: Where Pricing Tiers Jump",
    category: "Team Size Scaling",
  },
  "saas-costs-for-25-person-team": {
    title: "SaaS Costs for a 25-Person Team: When Enterprise Tier Pressure Starts",
    category: "Team Size Scaling",
  },
  "saas-costs-for-50-person-team": {
    title: "SaaS Costs for a 50-Person Team: When Enterprise Plans Become Necessary",
    category: "Team Size Scaling",
  },
  "what-you-get-for-free-in-crm": {
    title: "What You Get for Free in CRM: Every Free Tier Mapped",
    category: "Feature Availability",
  },
  "what-you-get-for-free-in-email": {
    title: "What You Get for Free in Email Marketing: Every Free Tier Mapped",
    category: "Feature Availability",
  },
  "what-you-get-for-free-in-automation": {
    title: "What You Get for Free in Automation: Every Free Tier Mapped",
    category: "Feature Availability",
  },
  "what-you-get-for-free-in-pm": {
    title: "What You Get for Free in Project Management: Every Free Tier Mapped",
    category: "Feature Availability",
  },
  "what-20-dollars-gets-you-in-saas": {
    title: "What $20/Month Gets You in SaaS: The Definitive Budget Guide",
    category: "Feature Availability",
  },
  "set-up-lead-capture-in-30-minutes": {
    title: "Set Up Lead Capture in 30 Minutes: Form + CRM + Automation",
    category: "Practical Workflow",
  },
  "set-up-newsletter-in-30-minutes": {
    title: "Set Up a Newsletter in 30 Minutes: From Zero to First Send",
    category: "Practical Workflow",
  },
  "set-up-crm-pipeline-in-30-minutes": {
    title: "Set Up a CRM Pipeline in 30 Minutes: Pipedrive or HubSpot",
    category: "Practical Workflow",
  },
  "set-up-social-scheduling-in-30-minutes": {
    title: "Set Up Social Media Scheduling in 30 Minutes: Buffer Free",
    category: "Practical Workflow",
  },
  "set-up-analytics-in-30-minutes": {
    title: "Set Up Website Analytics in 30 Minutes: Plausible or PostHog",
    category: "Practical Workflow",
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

  const articleSchema = generateArticleSchema({
    title: guide.title,
    description: `Read the full guide: ${guide.title}. Practical, tool-agnostic advice from the Sasanova editorial team.`,
    url: canonicalUrl(`/guides/${slug}`),
    datePublished: "2026-03-18",
    dateModified: "2026-03-26",
  });

  /* Guide content not yet published — return 404 instead of a stub page */
  // When guide content is published, uncomment below and remove notFound():
  // return (
  //   <>
  //     <script
  //       type="application/ld+json"
  //       dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
  //     />
  //     {/* guide content here */}
  //   </>
  // );

  void articleSchema; // ensure no unused-variable warning
  notFound();
}
