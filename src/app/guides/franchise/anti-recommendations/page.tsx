import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import { generateArticleSchema } from "@/lib/article-schema";

export const metadata: Metadata = {
  title: "Who Should NOT Use: The Complete Series — Sasanova",
  description:
    "Honest anti-recommendations for 15 popular SaaS tools. Find out when HubSpot, Mailchimp, Zapier, Notion, Salesforce, and more are the wrong choice — with specific alternatives.",
};

const antiRecs = [
  {
    slug: "who-should-not-use-hubspot",
    tool: "HubSpot",
    summary: "5 situations where HubSpot is the wrong choice, with specific alternatives and real pricing.",
  },
  {
    slug: "who-should-not-use-mailchimp",
    tool: "Mailchimp",
    summary: "4 situations where Mailchimp is the wrong choice as free tier shrinks and pricing climbs.",
  },
  {
    slug: "who-should-not-use-zapier",
    tool: "Zapier",
    summary: "4 situations where Zapier is the wrong choice, with real pricing math for alternatives.",
  },
  {
    slug: "who-should-not-use-notion",
    tool: "Notion",
    summary: "4 common use cases where Notion is genuinely the wrong tool, with specific alternatives.",
  },
  {
    slug: "who-should-not-use-salesforce",
    tool: "Salesforce",
    summary: "5 situations where Salesforce wastes money, with real cost breakdowns for alternatives.",
  },
  {
    slug: "who-should-not-use-clickup",
    tool: "ClickUp",
    summary: "4 situations where ClickUp overwhelms — solo users, tiny teams, and simplicity seekers.",
  },
  {
    slug: "who-should-not-use-activecampaign",
    tool: "ActiveCampaign",
    summary: "Skip it if you just need a newsletter, have under 1,000 contacts, or don't need CRM.",
  },
  {
    slug: "who-should-not-use-asana",
    tool: "Asana",
    summary: "Free tier caps at 2 users, paid starts at $13.49/seat. Skip if solo or budget-conscious.",
  },
  {
    slug: "who-should-not-use-slack",
    tool: "Slack",
    summary: "Free tier hides messages after 90 days. Discord is free with unlimited history.",
  },
  {
    slug: "who-should-not-use-shopify",
    tool: "Shopify",
    summary: "Starts at $39/month. Skip for digital products, few products, or courses.",
  },
  {
    slug: "who-should-not-use-webflow",
    tool: "Webflow",
    summary: "Most powerful no-code builder with the steepest learning curve. Skip if non-technical.",
  },
  {
    slug: "who-should-not-use-figma",
    tool: "Figma",
    summary: "Industry standard for UI/UX — wrong tool for social graphics, marketing sites, or presentations.",
  },
  {
    slug: "who-should-not-use-monday",
    tool: "Monday.com",
    summary: "3-seat minimum on paid plans. Skip if solo, need docs+PM, or need a real CRM.",
  },
  {
    slug: "who-should-not-use-intercom",
    tool: "Intercom",
    summary: "Starts at $39/seat plus $0.99 per AI resolution. Skip for small teams or predictable pricing.",
  },
  {
    slug: "who-should-not-use-semrush",
    tool: "Semrush",
    summary: "Pro is $139.95/month. Skip if under 5K visitors or only need keyword research.",
  },
];

const articleSchema = generateArticleSchema({
  title: "Who Should NOT Use: The Complete Series",
  description:
    "Honest anti-recommendations for 15 popular SaaS tools. Find out when HubSpot, Mailchimp, Zapier, Notion, Salesforce, and more are the wrong choice — with specific alternatives.",
  url: "https://sasanova.com/guides/franchise/anti-recommendations",
  datePublished: "2026-03-18",
  dateModified: "2026-03-26",
});

export default function AntiRecommendationsHub() {
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
            <span className="text-foreground font-medium">Anti-Recommendations</span>
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
            Who Should NOT Use: The Complete Series
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Every popular tool is great for someone and terrible for someone
            else. This series identifies the specific situations where each tool
            is the wrong choice — with concrete alternatives and real pricing
            for each case.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {antiRecs.map((entry) => (
              <Link
                key={entry.slug}
                href={`/guides/${entry.slug}`}
                className="group border border-border rounded-xl p-6 hover-glow hover:border-accent/30 transition-all bg-background"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                  Anti-Recommendation
                </p>
                <h2 className="text-lg font-bold group-hover:text-accent transition-colors mb-2">
                  Who Should NOT Use {entry.tool}
                </h2>
                <p className="text-sm text-muted line-clamp-2">
                  {entry.summary}
                </p>
              </Link>
            ))}
          </div>

          <RelatedLinks
            guides={[
              "franchise/hidden-costs",
              "franchise/cost-thresholds",
              "franchise/decision-frameworks",
              "franchise/migration-guides",
            ]}
          />
        </div>
      </section>
    </>
  );
}
