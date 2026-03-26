import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Hidden Costs: The Complete Series — Sasanova",
  description:
    "What SaaS pricing pages don't show. Hidden costs, pricing reality checks, and detailed breakdowns for Mailchimp, Zapier, Salesforce, HubSpot, and more.",
};

const hiddenCostEntries = [
  {
    slug: "mailchimp-hidden-costs",
    tool: "Mailchimp",
    summary: "Contact counting traps, overage charges, template limitations, and the Standard plan pricing cliff.",
  },
  {
    slug: "zapier-hidden-costs",
    tool: "Zapier",
    summary: "Multi-step task counting, premium app pricing, the 750-task reality, and when Make saves money.",
  },
  {
    slug: "salesforce-hidden-costs",
    tool: "Salesforce",
    summary: "Per-user add-ons, implementation costs, admin salary requirements, and annual contract lock-in.",
  },
  {
    slug: "hubspot-pricing-reality",
    tool: "HubSpot",
    summary: "Free tier limits, the Starter-to-Professional cliff, per-seat costs, and contact tier traps.",
  },
  {
    slug: "saas-pricing-traps-2026",
    tool: "Industry-Wide",
    summary: "7 pricing traps: per-seat cliffs, contact counting tricks, task multipliers, annual lock-ins, and more.",
  },
  {
    slug: "mailchimp-pricing-history",
    tool: "Mailchimp",
    summary: "How Mailchimp pricing evolved from generous free tiers to today's contact-based model.",
  },
  {
    slug: "zapier-pricing-history",
    tool: "Zapier",
    summary: "Zapier's pricing trajectory and how task counting changed over time.",
  },
  {
    slug: "hubspot-pricing-history",
    tool: "HubSpot",
    summary: "HubSpot's pricing evolution from inbound marketing pioneer to enterprise CRM platform.",
  },
  {
    slug: "mailchimp-lock-in-analysis",
    tool: "Mailchimp",
    summary: "Switching costs, data portability, and what keeps teams on Mailchimp despite rising prices.",
  },
  {
    slug: "zapier-lock-in-analysis",
    tool: "Zapier",
    summary: "Why Zapier is hard to leave: workflow dependencies, team familiarity, and rebuild costs.",
  },
  {
    slug: "hubspot-lock-in-analysis",
    tool: "HubSpot",
    summary: "The real cost of leaving HubSpot: data migration, workflow rebuilds, and ecosystem dependency.",
  },
  {
    slug: "salesforce-lock-in-analysis",
    tool: "Salesforce",
    summary: "Enterprise lock-in at its most complex: custom objects, Apex code, and ecosystem switching costs.",
  },
  {
    slug: "notion-lock-in-analysis",
    tool: "Notion",
    summary: "Notion's proprietary blocks, export limitations, and what you actually lose when switching.",
  },
];

export default function HiddenCostsHub() {
  return (
    <>
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
            <span className="text-foreground font-medium">Hidden Costs</span>
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
            Hidden Costs: The Complete Series
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            SaaS pricing pages show you the starting price. This series reveals
            what they leave out: contact counting traps, task multipliers,
            per-seat cliffs, lock-in costs, and the real total cost of
            ownership. Every claim backed by exact numbers.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hiddenCostEntries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/guides/${entry.slug}`}
                className="group border border-border rounded-xl p-6 hover-glow hover:border-accent/30 transition-all bg-background"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                  {entry.tool}
                </p>
                <h2 className="text-lg font-bold group-hover:text-accent transition-colors mb-2">
                  {entry.tool === "Industry-Wide"
                    ? "SaaS Pricing Traps 2026"
                    : `${entry.tool} Hidden Costs`}
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
