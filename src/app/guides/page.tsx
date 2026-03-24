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
