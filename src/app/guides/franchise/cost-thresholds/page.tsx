import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import { generateArticleSchema } from "@/lib/article-schema";

export const metadata: Metadata = {
  title: "When Tools Stop Being Cheap: The Complete Series — Sasanova",
  description:
    "The exact subscriber counts, task volumes, and seat thresholds where SaaS tools stop being affordable. Real pricing math for HubSpot, Mailchimp, Zapier, Notion, and more.",
};

const costThresholds = [
  {
    slug: "when-hubspot-stops-being-cheap",
    tool: "HubSpot",
    summary: "Free is genuine. Starter is $20/seat. Professional is $890/mo — a 4,350% jump.",
  },
  {
    slug: "when-mailchimp-becomes-expensive",
    tool: "Mailchimp",
    summary: "Dollar-for-dollar comparison at 2,500 to 50,000 subscribers vs beehiiv.",
  },
  {
    slug: "when-zapier-costs-more-than-make",
    tool: "Zapier",
    summary: "At every volume from 100 to 10,000 tasks, Make saves $233 to $1,115/yr.",
  },
  {
    slug: "when-free-crm-costs-more",
    tool: "Free CRMs",
    summary: "2 hours/week of manual CRM work = $5,200/yr. Pipedrive Lite is $168/yr.",
  },
  {
    slug: "when-activecampaign-gets-expensive",
    tool: "ActiveCampaign",
    summary: "Starter $15/mo, Plus $49/mo, Pro $79/mo. Contact-tier trap scales steeply.",
  },
  {
    slug: "when-notion-needs-a-paid-plan",
    tool: "Notion",
    summary: "Free gives unlimited pages but 7-day history, 10 guests, 5MB uploads. Plus is $12/user/mo.",
  },
  {
    slug: "when-clickup-free-hits-limits",
    tool: "ClickUp",
    summary: "Free gives unlimited tasks but only 60MB storage. Unlimited is $10/member/mo.",
  },
  {
    slug: "when-pipedrive-needs-upgrade",
    tool: "Pipedrive",
    summary: "Lite is $14/seat. Growth is $39/seat — a 179% jump for email sync and automations.",
  },
  {
    slug: "when-make-core-isnt-enough",
    tool: "Make",
    summary: "Core is $10.59/mo for 10,000 ops. Most solopreneurs never need to upgrade.",
  },
  {
    slug: "when-beehiiv-scale-beats-launch",
    tool: "beehiiv",
    summary: "Launch is free for 2,500 subscribers. Scale is $49/mo for unlimited subscribers and ad network.",
  },
  {
    slug: "when-slack-free-costs-you",
    tool: "Slack",
    summary: "Free hides messages after 90 days. Pro is $8.75/user/mo. Discord free is better for many.",
  },
  {
    slug: "when-freshsales-growth-isnt-enough",
    tool: "Freshsales",
    summary: "Growth is $11/seat. Pro is $47/seat — a 327% jump for multiple pipelines and AI insights.",
  },
  {
    slug: "when-calendly-free-stops-working",
    tool: "Calendly",
    summary: "Free gives 1 event type. Standard is $12/user/mo. Cal.com is free with unlimited types.",
  },
  {
    slug: "when-grammarly-free-isnt-enough",
    tool: "Grammarly",
    summary: "Free gives basic grammar. Pro is $30/mo for full rewrites and plagiarism detection.",
  },
];

const articleSchema = generateArticleSchema({
  title: "When Tools Stop Being Cheap: The Complete Series",
  description:
    "The exact subscriber counts, task volumes, and seat thresholds where SaaS tools stop being affordable. Real pricing math for HubSpot, Mailchimp, Zapier, Notion, and more.",
  url: "https://sasanova.com/guides/franchise/cost-thresholds",
  datePublished: "2026-03-18",
  dateModified: "2026-03-26",
});

export default function CostThresholdsHub() {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Cost Thresholds</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Content Series
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            When Tools Stop Being Cheap: The Complete Series
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Every SaaS tool has a threshold where the price stops making sense.
            This series identifies the exact subscriber counts, task volumes,
            and seat numbers where each tool gets expensive — with specific
            alternatives and real cost math at every breakpoint.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {costThresholds.map((entry) => (
              <Link
                key={entry.slug}
                href={`/guides/${entry.slug}`}
                className="group border border-border rounded-xl p-6 hover-glow hover:border-accent/30 transition-all bg-background"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                  {entry.tool}
                </p>
                <h2 className="text-lg font-bold group-hover:text-accent transition-colors mb-2">
                  When {entry.tool} Gets Expensive
                </h2>
                <p className="text-sm text-muted line-clamp-2">
                  {entry.summary}
                </p>
              </Link>
            ))}
          </div>

          <RelatedLinks
            guides={[
              "franchise/anti-recommendations",
              "franchise/hidden-costs",
              "franchise/decision-frameworks",
              "franchise/migration-guides",
            ]}
          />
        </div>
      </section>
    </>
  );
}
