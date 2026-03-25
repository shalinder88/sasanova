import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Guides & Workflows",
  description:
    "Practical guides for building SaaS stacks, automating workflows, and choosing the right tools. Written by the Sasanova editorial team.",
};

const guides = [
  {
    slug: "newsletter-stack",
    title: "The Newsletter Stack for a One-Person Creator Under $150/Month",
    description:
      "Most creators overspend on tools. Here's the exact stack — with plan names, prices, and limits — that works from zero subscribers to 50,000.",
    readingTime: "14 min read",
    category: "Stack Building",
  },
  {
    slug: "ai-research-workflow",
    title: "How to Build an AI Research Workflow That Actually Saves Time",
    description:
      "Most people use AI tools wrong for research. Here's a 3-tool workflow with Claude, Perplexity, and Notion that produces reliable output for $40/month.",
    readingTime: "11 min read",
    category: "Workflow",
  },
  {
    slug: "automate-lead-capture",
    title: "How to Automate Lead Capture Without Spending $500/Month on HubSpot",
    description:
      "HubSpot Professional costs $800+/month. Here's how to get 80% of the value for under $100 using Tally, Zapier, Pipedrive, and beehiiv.",
    readingTime: "13 min read",
    category: "Automation",
  },
  {
    slug: "crm-solo-founder",
    title: "The Best CRM Setup for a Solo Founder Who Hates CRMs",
    description:
      "Most CRMs are built for sales teams, not solo operators. Here's what actually works — Folk for relationship builders, Pipedrive for deal closers.",
    readingTime: "12 min read",
    category: "CRM",
  },
  {
    slug: "project-management-small-team",
    title: "Choosing Project Management Software Without Losing Your Mind",
    description:
      "There are 200+ PM tools. Here's the decision in 5 minutes: a decision tree based on team size, complexity, and budget.",
    readingTime: "13 min read",
    category: "Project Management",
  },
  {
    slug: "email-marketing-ecommerce",
    title: "Email Marketing for E-Commerce: Stop Paying Mailchimp Prices",
    description:
      "Mailchimp charges by contacts. E-commerce stores with big lists get crushed. Here are the alternatives that charge by emails sent, not list size.",
    readingTime: "14 min read",
    category: "E-Commerce",
  },
  {
    slug: "automation-zapier-vs-make-vs-n8n",
    title: "Zapier vs Make vs n8n: Which Automation Tool Fits Your Budget and Brain",
    description:
      "Three automation platforms, three different philosophies. A real pricing comparison and honest assessment of who should use what.",
    readingTime: "13 min read",
    category: "Automation",
  },
  {
    slug: "meeting-recording-comparison",
    title: "AI Meeting Assistants: What Actually Works and What's Marketing Hype",
    description:
      "Every AI meeting tool claims to save hours. Here's what Otter, Fireflies, Fathom, and tl;dv actually deliver — and when AI notes don't help at all.",
    readingTime: "11 min read",
    category: "Productivity",
  },
  {
    slug: "notion-vs-obsidian-decision",
    title: "Notion vs Obsidian: The Decision That Reveals How You Think",
    description:
      "This isn't a feature comparison. It's a philosophy comparison. Cloud-first databases vs local-first linked notes — and why the choice matters.",
    readingTime: "15 min read",
    category: "Knowledge Management",
  },
  {
    slug: "scheduling-tool-comparison",
    title: "Calendly vs Cal.com: Pay $192/Year or Self-Host for Free",
    description:
      "Calendly is the default scheduling tool. Cal.com is the open-source challenger. Here's when each one makes sense and what self-hosting actually costs.",
    readingTime: "12 min read",
    category: "Scheduling",
  },
  {
    slug: "best-free-tools-startups",
    title: "The $0 Startup Stack: Every Free Tool That's Actually Worth Using",
    description:
      "Most \"free tool\" lists include tools that cripple you at scale. Here's what's genuinely free AND genuinely useful — with honest limits, setup costs, and migration warnings.",
    readingTime: "14 min read",
    category: "Stack Building",
  },
  {
    slug: "saas-affiliate-playbook",
    title: "How SaaS Affiliate Programs Actually Work: A Realistic Guide for Content Sites",
    description:
      "Most affiliate guides oversell the income. Here's the honest math, real commission structures, and the actual timeline from zero to meaningful SaaS affiliate revenue.",
    readingTime: "13 min read",
    category: "Monetization",
  },
  {
    slug: "migrate-from-mailchimp",
    title: "How to Leave Mailchimp Without Losing Your List: A Step-by-Step Migration Guide",
    description:
      "Mailchimp's pricing got worse. Here's exactly how to move to beehiiv, ConvertKit, or Brevo without losing subscribers, breaking automations, or tanking deliverability.",
    readingTime: "12 min read",
    category: "Email Migration",
  },
  {
    slug: "migrate-mailchimp-to-kit",
    title: "How to Migrate from Mailchimp to Kit (ConvertKit) Without Losing Subscribers",
    description:
      "Step-by-step migration guide from Mailchimp to Kit. What transfers, what breaks, timeline estimates, and the mistakes that cost creators subscribers.",
    readingTime: "16 min read",
    category: "Email Migration",
  },
  {
    slug: "migrate-mailchimp-to-beehiiv",
    title: "Leaving Mailchimp for beehiiv: The Complete Migration Playbook",
    description:
      "The complete playbook for migrating from Mailchimp to beehiiv. Export process, subscriber import, true cost comparison at 1K to 25K subscribers, and what you lose.",
    readingTime: "15 min read",
    category: "Email Migration",
  },
  {
    slug: "migrate-substack-to-beehiiv",
    title: "Substack to beehiiv: Why Creators Switch and How to Do It",
    description:
      "The 10% revenue cut math, content export, custom domain setup, and monetization comparison. When Substack is actually better and when beehiiv wins.",
    readingTime: "14 min read",
    category: "Email Migration",
  },
  {
    slug: "best-email-tool-creators",
    title: "The Best Email Platform for Creators in 2026 (Not What You Think)",
    description:
      "beehiiv vs Kit vs Substack vs Ghost head-to-head for creators. Revenue modeling at different subscriber counts and the real cost of free platforms.",
    readingTime: "17 min read",
    category: "Creator Tools",
  },
  {
    slug: "best-email-tool-agencies",
    title: "Email Marketing Tools for Agencies: Managing 10+ Client Accounts",
    description:
      "ActiveCampaign vs Mailchimp vs Brevo for agencies. Multi-account management, white-labeling, per-client cost modeling, and what agencies actually need.",
    readingTime: "16 min read",
    category: "Agency Tools",
  },
  {
    slug: "building-knowledge-base",
    title: "Building a Knowledge Base That Your Team Actually Uses",
    description:
      "Most internal wikis die within 3 months. Here's why they fail, which tools work, and the 3 rules that keep a knowledge base alive past launch day.",
    readingTime: "13 min read",
    category: "Knowledge Management",
  },
  {
    slug: "customer-support-stack",
    title: "Customer Support Software for Teams Under 20: What You Actually Need",
    description:
      "Zendesk is overkill for small teams. Here's the right support tool at each growth stage, with real pricing, honest tradeoffs, and a framework for when to upgrade.",
    readingTime: "13 min read",
    category: "Support",
  },
  {
    slug: "ecommerce-stack-solo-creator",
    title: "The Complete E-commerce Stack for Solo Creators Under $100/Month",
    description:
      "Gumroad vs LemonSqueezy vs Shopify for digital products. Real pricing, real fees, and the exact stack you need for email, payments, and analytics.",
    readingTime: "14 min read",
    category: "E-Commerce",
  },
  {
    slug: "choosing-analytics-tool",
    title: "How to Choose an Analytics Tool Without Drowning in Data",
    description:
      "PostHog vs Mixpanel vs Amplitude vs Plausible vs Hotjar. When you need product analytics vs web analytics vs session recording, and the truth about free tiers.",
    readingTime: "13 min read",
    category: "Analytics",
  },
  {
    slug: "remote-team-communication",
    title: "Setting Up Communication Tools for a Remote Team of 5-50",
    description:
      "Slack vs Discord vs Teams for small remote teams. Plus Loom for async video and Notion for docs. Total stack costs at 10, 25, and 50 people.",
    readingTime: "13 min read",
    category: "Remote Work",
  },
  {
    slug: "design-tools-non-designers",
    title: "Design Tools for People Who Can't Design: A Practical Guide",
    description:
      "Canva for quick graphics, Figma for UI, Framer and Webflow for sites. What you actually need vs what looks cool, plus budget options and free tier reality.",
    readingTime: "12 min read",
    category: "Design",
  },
  {
    slug: "accounting-freelancers",
    title: "Accounting Software for Freelancers: Stop Overpaying",
    description:
      "Wave vs FreshBooks vs QuickBooks for freelancers. When you need an accountant vs software, plus tax prep features, invoicing, and expense tracking compared.",
    readingTime: "13 min read",
    category: "Finance",
  },
  {
    slug: "hr-payroll-small-business",
    title: "HR and Payroll Software for Small Businesses: The Honest Comparison",
    description:
      "Gusto vs Rippling vs BambooHR vs Deel compared for small businesses. Real per-employee costs, hidden fees, and when you actually need payroll software vs just an accountant.",
    readingTime: "14 min read",
    category: "HR & Payroll",
  },
  {
    slug: "video-podcast-recording",
    title: "Recording Setup for Remote Podcasts and Video: What Actually Works",
    description:
      "Riverside vs Descript vs StreamYard vs Zoom for remote podcast and video recording. Quality differences, local vs cloud recording, and a budget stack under $50/month.",
    readingTime: "13 min read",
    category: "Content Creation",
  },
  {
    slug: "social-media-management-stack",
    title: "Social Media Management Without the $300/Month Bill",
    description:
      "Buffer vs Hootsuite vs Later vs Sprout Social compared honestly. Why most teams overpay for social media tools, what features actually matter, and when free tools are enough.",
    readingTime: "12 min read",
    category: "Social Media",
  },
  {
    slug: "website-builder-for-business",
    title: "Choosing a Website Builder in 2026: Beyond the Marketing Pages",
    description:
      "Squarespace vs Wix vs Webflow vs Framer vs Carrd vs WordPress compared honestly. Real 12-month costs including domain, hosting, and plugins. Plus migration difficulty between platforms.",
    readingTime: "15 min read",
    category: "Web Development",
  },
  {
    slug: "cloud-storage-teams",
    title: "Cloud Storage for Teams: Dropbox vs Google Workspace vs Box",
    description:
      "Cloud storage compared for teams of 10, 50, and 100 people. Security features, compliance, admin controls, and effective per-user cost at every scale.",
    readingTime: "13 min read",
    category: "Infrastructure",
  },
  {
    slug: "best-webinar-platform",
    title: "Choosing a Webinar Platform Without Overpaying",
    description:
      "Zoom vs Demio vs Livestorm vs Hopin compared at real attendee counts. When Zoom is enough vs when you need dedicated webinar software, with actual pricing.",
    readingTime: "13 min read",
    category: "Webinars",
  },
  {
    slug: "landing-page-builder-comparison",
    title: "Landing Page Builders: When to Pay $99/Month and When $0 Works",
    description:
      "Unbounce vs Instapage vs Leadpages vs Carrd compared with real pricing, conversion rate data, and cost-per-landing-page math. Find out when free is enough.",
    readingTime: "12 min read",
    category: "Conversion",
  },
  {
    slug: "seo-tools-for-small-sites",
    title: "SEO Tools for Sites Under 10K Monthly Visitors",
    description:
      "Why most small sites don't need Ahrefs at $99/mo. Semrush vs Ahrefs vs Mangools vs free alternatives compared. What actually moves rankings for small sites.",
    readingTime: "14 min read",
    category: "SEO",
  },
  {
    slug: "proposal-software-freelancers",
    title: "Stop Sending PDFs: Proposal Software That Actually Closes Deals",
    description:
      "PandaDoc vs Proposify vs Better Proposals compared for freelancers. Win rate data, template quality, e-signature integration, and when a Google Doc is still fine.",
    readingTime: "13 min read",
    category: "Sales",
  },
  {
    slug: "customer-success-tools",
    title: "Customer Success Tools: When Spreadsheets Stop Working",
    description:
      "Gainsight vs Vitally vs Totango compared for growing SaaS teams. When you actually need CS software (hint: 50+ accounts). Health score reality check.",
    readingTime: "14 min read",
    category: "Customer Success",
  },
  {
    slug: "migrate-salesforce-to-hubspot",
    title: "Migrating from Salesforce to HubSpot: What Actually Happens",
    description:
      "The real cost, timeline, and tradeoffs of moving from Salesforce to HubSpot. Data mapping, what you lose, true cost comparison at 10-100 users, and when Salesforce is actually worth the price.",
    readingTime: "16 min read",
    category: "CRM Migration",
  },
  {
    slug: "migrate-spreadsheet-to-crm",
    title: "Your Spreadsheet CRM is Costing You Deals: When and How to Switch",
    description:
      "The exact moment spreadsheets break, which CRM for which stage, 30-minute setup guides for Folk/Pipedrive/HubSpot, and the $0 CRM options that actually work.",
    readingTime: "14 min read",
    category: "CRM Migration",
  },
  {
    slug: "best-crm-freelancers-consultants",
    title: "Best CRM for Freelancers and Consultants (You Don't Need Salesforce)",
    description:
      "Why most CRMs are overkill for solo operators. Folk vs Pipedrive vs HubSpot Free head-to-head, monthly cost at 100-1000 contacts, and the honest case for no CRM at all.",
    readingTime: "13 min read",
    category: "CRM",
  },
  {
    slug: "best-crm-sales-teams",
    title: "CRM for Sales Teams of 5-25: HubSpot vs Pipedrive vs Close",
    description:
      "Per-seat cost modeling with actual plan names, deal pipeline features that matter, email integration depth, reporting reality check, and implementation timeline for mid-size sales teams.",
    readingTime: "15 min read",
    category: "CRM",
  },
  {
    slug: "hubspot-pricing-reality",
    title: "HubSpot Pricing: What It Actually Costs (Not What the Website Says)",
    description:
      "Free tier limits that matter, the Starter-to-Professional cliff, per-seat costs, contact tier traps, Marketing Hub vs Sales Hub, and when HubSpot Free is genuinely enough.",
    readingTime: "14 min read",
    category: "CRM",
  },
  {
    slug: "migrate-zapier-to-make",
    title: "Switching from Zapier to Make: The Real Savings and The Real Pain",
    description:
      "Why people leave Zapier (price at scale), what transfers (nothing auto-migrates), rebuilding top Zaps in Make, and when staying on Zapier is actually cheaper.",
    readingTime: "16 min read",
    category: "Migration Guide",
  },
  {
    slug: "migrate-zapier-to-n8n",
    title: "Self-Hosting Your Automations: Zapier to n8n Migration Guide",
    description:
      "True cost of self-hosting n8n (server, maintenance, your time), Docker setup walkthrough, which Zap patterns translate cleanly, and the hybrid approach.",
    readingTime: "17 min read",
    category: "Migration Guide",
  },
  {
    slug: "best-automation-tool-agencies",
    title: "Automation Tools for Agencies: Managing Client Workflows at Scale",
    description:
      "Per-client workspace costs across Zapier, Make, and n8n. White-labeling options, error handling, and cost modeling at 5, 15, and 30 clients.",
    readingTime: "15 min read",
    category: "Agency Operations",
  },
  {
    slug: "best-automation-tool-solopreneurs",
    title: "Automation for One-Person Businesses: What's Worth Paying For",
    description:
      "The 5 automations every solopreneur should set up first, free tier comparisons, when to upgrade, and the 'just use Make' argument.",
    readingTime: "14 min read",
    category: "Solopreneur",
  },
  {
    slug: "automation-pricing-compared",
    title: "Zapier vs Make vs n8n Pricing: The Honest Math Nobody Shows You",
    description:
      "Side-by-side pricing at every tier, how tasks vs operations vs executions count differently, hidden costs, and break-even analysis for self-hosting.",
    readingTime: "16 min read",
    category: "Pricing Deep Dive",
  },
  {
    slug: "salesforce-hidden-costs",
    title: "Salesforce Pricing: The Real Number Is 3-5x What You See",
    description: "Per-user add-ons, implementation costs, admin salary requirements, data storage overages, and the annual contract lock-in nobody warns you about.",
    readingTime: "15 min read",
    category: "Hidden Costs",
  },
  {
    slug: "switch-from-hubspot-to-pipedrive",
    title: "Switching from HubSpot to Pipedrive: A Smaller CRM That Actually Gets Used",
    description: "Why teams leave HubSpot, what you gain and lose, data migration steps, and cost savings math.",
    readingTime: "14 min read",
    category: "Migration Guide",
  },
  {
    slug: "best-automation-marketing-teams",
    title: "Marketing Automation on a Budget: What Actually Moves the Needle",
    description: "HubSpot Marketing Hub vs ActiveCampaign vs Brevo vs Kit — lead scoring, email sequences, and landing pages compared with real pricing.",
    readingTime: "15 min read",
    category: "Persona Guide",
  },
  {
    slug: "switch-from-mailchimp-to-activecampaign",
    title: "Mailchimp to ActiveCampaign: When You Need Real Automation",
    description:
      "Why teams outgrow Mailchimp, what ActiveCampaign does better (visual automation builder, CRM, conditional logic), data migration steps, and cost comparison at 1K to 25K contacts.",
    readingTime: "16 min read",
    category: "Migration Guide",
  },
  {
    slug: "switch-from-pipedrive-to-hubspot",
    title: "Pipedrive to HubSpot: When You Need Marketing + Sales Together",
    description:
      "Why teams upgrade from Pipedrive, the HubSpot pricing cliff reality (Starter to Professional is $890/mo), what transfers and what breaks, and when Pipedrive plus a separate marketing tool is cheaper.",
    readingTime: "15 min read",
    category: "Migration Guide",
  },
  {
    slug: "switch-from-kit-to-beehiiv",
    title: "Kit to beehiiv: The Creator Newsletter Migration",
    description:
      "Why newsletter creators switch (monetization, referral programs, ad network), what beehiiv does better, what you lose (automation builder, commerce), and revenue comparison at 5K to 25K subscribers.",
    readingTime: "14 min read",
    category: "Email Migration",
  },
  {
    slug: "switch-from-make-to-zapier",
    title: "Going Back to Zapier from Make: When Simplicity Wins",
    description:
      "The contrarian take: sometimes Zapier IS the right choice. When Make's complexity becomes a liability, integration coverage gaps, the rebuild cost, and when to stay on Make.",
    readingTime: "14 min read",
    category: "Migration Guide",
  },
  {
    slug: "switch-from-notion-to-clickup",
    title: "Notion to ClickUp: When You Need a Real Project Manager",
    description:
      "Why teams outgrow Notion for PM (no native Gantt, limited automations, no time tracking), what ClickUp does better, the hybrid approach, and migration steps.",
    readingTime: "15 min read",
    category: "Migration Guide",
  },
  {
    slug: "hubspot-crm-setup-guide",
    title: "HubSpot CRM Setup in 30 Minutes: The No-Nonsense Guide",
    description:
      "Account creation, contact imports, deal pipeline stages, email integration (Gmail/Outlook), and your first automation — with the common mistakes that waste your first week.",
    readingTime: "14 min read",
    category: "Implementation Guide",
  },
  {
    slug: "beehiiv-setup-guide",
    title: "beehiiv Setup Guide: From Zero to First Newsletter in 60 Minutes",
    description:
      "Account creation, custom domain DNS walkthrough, template design, subscriber import from Mailchimp/Substack, monetization setup (Boosts, paid subscriptions), and your first send checklist.",
    readingTime: "16 min read",
    category: "Implementation Guide",
  },
  {
    slug: "zapier-setup-guide",
    title: "Your First 5 Zapier Automations: A Practical Setup Guide",
    description:
      "Account setup, free tier orientation, and 5 step-by-step automations: form to CRM, subscriber to Slack, calendar to notes, blog to social, and weekly digest. Plus task-counting tips to stay on free longer.",
    readingTime: "15 min read",
    category: "Implementation Guide",
  },
  {
    slug: "pipedrive-setup-guide",
    title: "Pipedrive Setup for Sales Teams: Pipeline to First Deal",
    description:
      "Pipeline customization, contact and deal imports, email sync and tracking, activity types, dashboard basics, and when to add integrations vs. keep it simple.",
    readingTime: "15 min read",
    category: "Implementation Guide",
  },
  {
    slug: "make-setup-guide",
    title: "Make (Integromat) Setup: Your First Automation Without the Confusion",
    description:
      "Account creation, understanding scenarios/modules/operations, building your first scenario step-by-step, error handling basics, scheduling, and when to move from free to Core plan.",
    readingTime: "16 min read",
    category: "Implementation Guide",
  },
  {
    slug: "best-newsletter-paid-subscribers",
    title: "Building a Paid Newsletter: Platform Comparison for Monetization",
    description:
      "beehiiv vs Substack vs Ghost vs Buttondown for paid newsletters. Revenue share math, Stripe fees, subscriber management, churn tools, and revenue projections at 500 to 10K paid subscribers.",
    readingTime: "18 min read",
    category: "Newsletter Monetization",
  },
  {
    slug: "best-tools-saas-startup",
    title: "The Complete SaaS Startup Stack Under $500/Month",
    description:
      "CRM, email, automation, support, and analytics tools for SaaS startups at every budget. Full stack costs at $0, $100, $300, and $500/month with upgrade triggers and what to skip until 10+ customers.",
    readingTime: "19 min read",
    category: "Stack Building",
  },
  {
    slug: "best-crm-agencies",
    title: "CRM for Agencies: Managing 20+ Clients Without Losing Your Mind",
    description:
      "HubSpot vs Pipedrive vs Close compared for agency workflows. Multi-pipeline management, white-labeling, per-client cost modeling at 10 to 50 clients, and project management integration.",
    readingTime: "16 min read",
    category: "Agency Operations",
  },
  {
    slug: "email-deliverability-compared",
    title: "Email Deliverability: Which Platforms Actually Land in the Inbox",
    description:
      "Shared IPs vs dedicated IPs, SPF/DKIM/DMARC setup by platform, and why no one can give you a reliable deliverability percentage. What actually affects inbox placement vs vendor marketing claims.",
    readingTime: "15 min read",
    category: "Email Marketing",
  },
  {
    slug: "crm-integrations-that-matter",
    title: "CRM Integrations That Actually Matter (And Ones That Don't)",
    description:
      "Email sync, calendar sync, form capture, automation connectors, and accounting integrations ranked by impact. Plus integrations that sound good but waste time.",
    readingTime: "14 min read",
    category: "CRM",
  },
  {
    slug: "hubspot-vs-activecampaign-full-comparison",
    title: "HubSpot vs ActiveCampaign: CRM + Email Marketing in One or Separate?",
    description:
      "The #1 cross-cluster comparison buyers face. HubSpot as all-in-one vs ActiveCampaign as email+automation specialist. Real pricing at 1K to 25K contacts with CRM seats, and when each wins.",
    readingTime: "18 min read",
    category: "Cross-Platform Comparison",
  },
  {
    slug: "mailchimp-vs-hubspot-marketing",
    title: "Mailchimp vs HubSpot Marketing Hub: When Free Isn't Really Free",
    description:
      "Both have free tiers with radically different upgrade paths. Mailchimp Standard at $20/mo vs HubSpot Professional at $890/mo. Who each is built for and when Mailchimp + Pipedrive beats HubSpot.",
    readingTime: "15 min read",
    category: "Cross-Platform Comparison",
  },
  {
    slug: "notion-vs-clickup-vs-asana",
    title: "Notion vs ClickUp vs Asana: The Three-Way Comparison Nobody Gets Right",
    description:
      "Different philosophies: Notion (everything tool), ClickUp (features tool), Asana (workflow tool). Cost at 5-50 users, team size sweet spots, migration difficulty, and when you need two of them.",
    readingTime: "17 min read",
    category: "Cross-Platform Comparison",
  },
  {
    slug: "zapier-vs-hubspot-workflows",
    title: "Zapier vs HubSpot Workflows: Do You Need Both?",
    description:
      "HubSpot's built-in workflows vs Zapier connecting everything. What each can't do, cost of HubSpot workflows, the hybrid approach most teams use, and when to drop Zapier entirely.",
    readingTime: "14 min read",
    category: "Cross-Platform Comparison",
  },
  {
    slug: "beehiiv-vs-kit-vs-mailchimp-for-creators",
    title: "beehiiv vs Kit vs Mailchimp for Creators: The Definitive 2026 Comparison",
    description:
      "The 3 most common platforms creators evaluate. Monetization, growth tools, automation depth, cost at 2.5K to 50K subscribers, and definitive verdict by creator type.",
    readingTime: "18 min read",
    category: "Cross-Platform Comparison",
  },
  {
    slug: "mailchimp-pricing-history",
    title: "Mailchimp Pricing Changes: A Timeline of Every Increase Since 2019",
    description:
      "Every documented Mailchimp pricing change from 2019 to 2026. Free plan reductions (2,000 contacts to 250), Intuit acquisition effects, and what the trajectory means for your bill.",
    readingTime: "16 min read",
    category: "Pricing History",
  },
  {
    slug: "zapier-pricing-history",
    title: "Zapier Pricing Changes: Why Your Bill Keeps Going Up",
    description:
      "A documented timeline of Zapier pricing changes: free tier reductions, premium app tiers, task-counting changes, and why automation bills grow faster than expected.",
    readingTime: "15 min read",
    category: "Pricing History",
  },
  {
    slug: "hubspot-pricing-history",
    title: "HubSpot Pricing Evolution: From Startup-Friendly to Enterprise-Priced",
    description:
      "How HubSpot went from generous free CRM to $890/month Professional tier. Seat-based pricing, the Starter-Professional gap, and what the trajectory suggests for future pricing.",
    readingTime: "16 min read",
    category: "Pricing History",
  },
];

export default function GuidesHub() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Guides
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Software Guides &amp; Workflows
          </h1>
          <p className="text-muted max-w-2xl">
            Practical, tool-agnostic guides for building stacks, automating workflows, and making better software decisions.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group border border-border rounded-xl p-6 hover:border-accent/30 transition-all bg-background"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full">
                        {guide.category}
                      </span>
                      <span className="text-[11px] text-muted">{guide.readingTime}</span>
                    </div>
                    <h2 className="text-lg font-bold group-hover:text-accent transition-colors mb-1">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-muted line-clamp-2">{guide.description}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted group-hover:text-accent shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
