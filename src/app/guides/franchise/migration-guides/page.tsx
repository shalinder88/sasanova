import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import { generateArticleSchema } from "@/lib/article-schema";

export const metadata: Metadata = {
  title: "Migration & Switching Guides: The Complete Series — Sasanova",
  description:
    "Step-by-step migration and switching guides for SaaS tools. Move from Mailchimp, HubSpot, Zapier, Salesforce, and more — with cost comparisons and what you lose.",
};

const migrations = [
  {
    slug: "migrate-from-mailchimp",
    title: "How to Leave Mailchimp",
    summary: "Step-by-step guide to move to beehiiv, Kit, or Brevo without losing subscribers.",
  },
  {
    slug: "migrate-mailchimp-to-kit",
    title: "Mailchimp to Kit (ConvertKit)",
    summary: "What transfers, what breaks, timeline estimates, and mistakes that cost subscribers.",
  },
  {
    slug: "migrate-mailchimp-to-beehiiv",
    title: "Mailchimp to beehiiv",
    summary: "Export process, subscriber import, true cost comparison at 1K to 25K subscribers.",
  },
  {
    slug: "migrate-substack-to-beehiiv",
    title: "Substack to beehiiv",
    summary: "The 10% revenue cut math, content export, custom domain setup, and monetization comparison.",
  },
  {
    slug: "migrate-salesforce-to-hubspot",
    title: "Salesforce to HubSpot",
    summary: "Real cost, timeline, and tradeoffs. Data mapping and true cost comparison at 10-100 users.",
  },
  {
    slug: "migrate-spreadsheet-to-crm",
    title: "Spreadsheet to CRM",
    summary: "The exact moment spreadsheets break and 30-minute setup guides for Folk/Pipedrive/HubSpot.",
  },
  {
    slug: "migrate-zapier-to-make",
    title: "Zapier to Make",
    summary: "The real savings and the real pain. What transfers (nothing auto-migrates) and rebuild costs.",
  },
  {
    slug: "migrate-zapier-to-n8n",
    title: "Zapier to n8n (Self-Hosted)",
    summary: "True cost of self-hosting, Docker setup, which Zap patterns translate, and the hybrid approach.",
  },
  {
    slug: "switch-from-hubspot-to-pipedrive",
    title: "HubSpot to Pipedrive",
    summary: "Why teams leave, what you gain and lose, data migration steps, and cost savings math.",
  },
  {
    slug: "switch-from-mailchimp-to-activecampaign",
    title: "Mailchimp to ActiveCampaign",
    summary: "When you need real automation: visual builder, CRM, conditional logic. Cost comparison at 1K to 25K contacts.",
  },
  {
    slug: "switch-from-pipedrive-to-hubspot",
    title: "Pipedrive to HubSpot",
    summary: "When you need marketing + sales together. The pricing cliff reality at $890/mo.",
  },
  {
    slug: "switch-from-kit-to-beehiiv",
    title: "Kit to beehiiv",
    summary: "Monetization, referral programs, ad network. Revenue comparison at 5K to 25K subscribers.",
  },
  {
    slug: "switch-from-make-to-zapier",
    title: "Make to Zapier",
    summary: "When simplicity beats savings: team familiarity, app library, and support quality.",
  },
  {
    slug: "switch-from-notion-to-clickup",
    title: "Notion to ClickUp",
    summary: "When docs-first PM hits limits. What ClickUp adds and what you lose in the move.",
  },
  {
    slug: "switch-from-asana-to-clickup",
    title: "Asana to ClickUp",
    summary: "Why teams leave Asana for ClickUp, what you gain (views, docs, free tier), what you lose.",
  },
  {
    slug: "switch-from-trello-to-notion",
    title: "Trello to Notion",
    summary: "Why teams outgrow Trello. What Notion adds (docs, wikis, databases) and what you lose.",
  },
  {
    slug: "switch-from-zoho-to-pipedrive",
    title: "Zoho CRM to Pipedrive",
    summary: "When simplicity beats features. Focused pipeline UX vs 50+ app ecosystem.",
  },
  {
    slug: "switch-from-freshdesk-to-intercom",
    title: "Freshdesk to Intercom",
    summary: "When ticket-based support is not enough. The price jump from $15/agent to $39/seat.",
  },
  {
    slug: "switch-from-mailchimp-to-brevo",
    title: "Mailchimp to Brevo",
    summary: "The pay-per-send alternative. Unlimited contacts vs contact-based pricing.",
  },
  {
    slug: "switch-from-squarespace-to-webflow",
    title: "Squarespace to Webflow",
    summary: "When templates are not enough. Full CSS control, CMS, interactions, and the learning curve.",
  },
  {
    slug: "switch-from-hootsuite-to-buffer",
    title: "Hootsuite to Buffer",
    summary: "Enterprise pricing ($149/mo) vs simplicity ($6/channel). What you gain and lose.",
  },
  {
    slug: "switch-from-jira-to-linear",
    title: "Jira to Linear",
    summary: "When Jira becomes too heavy. Speed, keyboard-first UX vs custom workflows and roadmaps.",
  },
  {
    slug: "switch-from-monday-to-asana",
    title: "Monday.com to Asana",
    summary: "When structure matters more than flash. Clean UX vs colorful boards.",
  },
  {
    slug: "switch-from-grammarly-to-chatgpt",
    title: "Grammarly to ChatGPT",
    summary: "ChatGPT Plus at $20/mo can replace Grammarly Pro at $30/mo for many users.",
  },
];

const articleSchema = generateArticleSchema({
  title: "Migration & Switching Guides: The Complete Series",
  description:
    "Step-by-step migration and switching guides for SaaS tools. Move from Mailchimp, HubSpot, Zapier, Salesforce, and more — with cost comparisons and what you lose.",
  url: "https://sasanova.com/guides/franchise/migration-guides",
  datePublished: "2026-03-18",
  dateModified: "2026-03-26",
});

export default function MigrationGuidesHub() {
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
            <span className="text-foreground font-medium">Migration Guides</span>
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
            Migration &amp; Switching Guides: The Complete Series
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Switching SaaS tools is painful — but sometimes necessary. Each
            guide in this series covers exactly what transfers, what breaks,
            the real timeline, and honest cost comparisons. No vendor spin,
            just the migration playbook you need.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-4">
            Platform Migration Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {migrations
              .filter((e) => e.slug.startsWith("migrate-"))
              .map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/guides/${entry.slug}`}
                  className="group border border-border rounded-xl p-6 hover-glow hover:border-accent/30 transition-all bg-background"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    Migration Guide
                  </p>
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">
                    {entry.summary}
                  </p>
                </Link>
              ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Tool Switching Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {migrations
              .filter((e) => e.slug.startsWith("switch-"))
              .map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/guides/${entry.slug}`}
                  className="group border border-border rounded-xl p-6 hover-glow hover:border-accent/30 transition-all bg-background"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    Switching Guide
                  </p>
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors mb-2">
                    {entry.title}
                  </h3>
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
              "franchise/cost-thresholds",
              "franchise/decision-frameworks",
            ]}
          />
        </div>
      </section>
    </>
  );
}
