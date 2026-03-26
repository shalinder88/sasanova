import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title:
    "Per-Seat vs Per-Contact vs Flat Rate: Which Billing Model Saves You Money?",
  description:
    "Deep analysis of SaaS billing models across CRM, email, and automation. Three scenarios: solo, 5-person team, 25-person team. Exact prices from Pipedrive, HubSpot, ActiveCampaign, beehiiv, Zapier, and Make.",
  openGraph: {
    title:
      "Per-Seat vs Per-Contact vs Flat Rate: Which Billing Model Saves You Money?",
    description:
      "Which SaaS billing model wins at solo, team, and enterprise scale. Exact cost math with verified prices.",
  },
};

const scenarios = [
  {
    label: "Solo Operator (1 user, 2,000 contacts, 500 automations/mo)",
    color: "text-green-400",
    tools: [
      {
        category: "CRM",
        perSeat: { tool: "Pipedrive Lite", price: "$14/mo", model: "Per-seat", math: "1 seat x $14" },
        flatRate: { tool: "HubSpot Free", price: "$0/mo", model: "Flat (free)", math: "Unlimited contacts" },
        winner: "HubSpot Free ($0)",
      },
      {
        category: "Email",
        perSeat: null,
        flatRate: { tool: "beehiiv Launch", price: "$0/mo", model: "Flat (free)", math: "2,500 subscribers" },
        perContact: { tool: "ActiveCampaign Starter", price: "$15/mo", model: "Per-contact", math: "1,000 contacts (need Plus at $49/mo for 2,000)" },
        winner: "beehiiv Launch ($0)",
      },
      {
        category: "Automation",
        perSeat: null,
        flatRate: { tool: "Make Core", price: "$10.59/mo", model: "Flat", math: "10,000 ops included" },
        usage: { tool: "Zapier Professional", price: "$29.99/mo", model: "Usage-based", math: "750 tasks/mo" },
        winner: "Make Core ($10.59)",
      },
    ],
    totalBest: "$10.59/mo",
  },
  {
    label: "Growing Team (5 users, 10,000 contacts, 5,000 automations/mo)",
    color: "text-amber-400",
    tools: [
      {
        category: "CRM",
        perSeat: { tool: "Pipedrive Growth", price: "$195/mo", model: "Per-seat", math: "5 seats x $39" },
        flatRate: { tool: "HubSpot Starter", price: "$100/mo", model: "Per-seat", math: "5 seats x $20" },
        winner: "HubSpot Starter ($100)",
      },
      {
        category: "Email",
        perSeat: null,
        flatRate: { tool: "beehiiv Scale", price: "$49/mo", model: "Flat", math: "Unlimited subscribers" },
        perContact: { tool: "ActiveCampaign Plus", price: "$49/mo", model: "Per-contact", math: "1,000 contacts. 10K contacts: ~$159/mo" },
        winner: "beehiiv Scale ($49)",
      },
      {
        category: "Automation",
        perSeat: null,
        flatRate: { tool: "Make Core", price: "$10.59/mo", model: "Flat", math: "10,000 ops (may need Pro at $18.82 for 5K+ complex automations)" },
        usage: { tool: "Zapier Team", price: "$103.50/mo", model: "Usage-based", math: "2,000 tasks/mo" },
        winner: "Make Core/Pro ($10.59-$18.82)",
      },
    ],
    totalBest: "$159.59-$167.82/mo",
  },
  {
    label: "Scale Team (25 users, 50,000 contacts, 25,000 automations/mo)",
    color: "text-purple-400",
    tools: [
      {
        category: "CRM",
        perSeat: { tool: "Pipedrive Growth", price: "$975/mo", model: "Per-seat", math: "25 seats x $39" },
        flatRate: { tool: "HubSpot Professional", price: "$890/mo", model: "Flat (with seats)", math: "$890/mo flat + seats ($50/additional seat)" },
        winner: "HubSpot Professional ($890 + seats)",
      },
      {
        category: "Email",
        perSeat: null,
        flatRate: { tool: "beehiiv Scale", price: "$49/mo", model: "Flat", math: "Same price at any volume" },
        perContact: { tool: "ActiveCampaign Plus", price: "~$329/mo", model: "Per-contact", math: "50,000 contacts tier" },
        winner: "beehiiv Scale ($49) at 6.7x less",
      },
      {
        category: "Automation",
        perSeat: null,
        flatRate: { tool: "Make Teams", price: "$34.12/mo", model: "Flat", math: "10,000 ops included, buy more ops as needed" },
        usage: { tool: "Zapier Enterprise", price: "Contact Sales", model: "Usage-based", math: "Custom task volume" },
        winner: "Make Teams ($34.12)",
      },
    ],
    totalBest: "$973.12+/mo",
  },
];

export default function BillingModelComparison() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Billing Model Comparison</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Per-Seat vs Per-Contact vs Flat Rate: Which Billing Model Saves You Money?
          </h1>
          <p className="text-lg text-muted">
            SaaS tools use three billing models: per-seat (CRMs), per-contact (email platforms), and flat-rate (automation tools). Each model favors a different team size. Here&apos;s the exact cost math at solo, 5-person, and 25-person scale using real tools and verified prices.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="All pricing verified against vendor pages. Scenarios use monthly billing rates."
          sourceCount={8}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Billing Model Overview */}
          <h2 className="text-xl font-bold mt-10 mb-4">Three Billing Models Explained</h2>
          <div className="grid gap-4 mb-10">
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">Per-Seat</p>
              <p className="text-sm text-muted">You pay for each user/agent. Cost scales linearly with team size. Examples: Pipedrive ($14-$99/seat), Slack ($8.75/user), Notion ($12/user). Best for small teams. Painful at 25+ seats.</p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">Per-Contact / Per-Usage</p>
              <p className="text-sm text-muted">You pay based on contacts stored or tasks executed. Cost scales with your audience/volume, not team size. Examples: ActiveCampaign ($15-$145/mo by contact count), Zapier ($29.99/mo for 750 tasks). Cheap at low volume. Expensive at scale.</p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">Flat Rate</p>
              <p className="text-sm text-muted">One price regardless of users or contacts. Cost is fixed and predictable. Examples: beehiiv Scale ($49/mo unlimited subscribers), Make Core ($10.59/mo for 10K ops), HubSpot Professional ($890/mo flat). Best value at scale. Can be expensive for solo users.</p>
            </div>
          </div>

          {/* Scenario Comparisons */}
          {scenarios.map((scenario) => (
            <section key={scenario.label} className="mb-12">
              <h2 className="text-xl font-bold mt-10 mb-4">
                <span className={scenario.color}>{scenario.label}</span>
              </h2>
              <div className="overflow-x-auto rounded-lg border border-border mt-3 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Option A</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Option B</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Winner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {scenario.tools.map((row) => (
                      <tr key={row.category}>
                        <td className="px-4 py-2.5 font-medium text-foreground">{row.category}</td>
                        <td className="px-4 py-2.5 text-muted">
                          {row.perSeat ? (
                            <span>{row.perSeat.tool} ({row.perSeat.price})<br /><span className="text-xs">{row.perSeat.math}</span></span>
                          ) : row.perContact ? (
                            <span>{row.perContact.tool} ({row.perContact.price})<br /><span className="text-xs">{row.perContact.math}</span></span>
                          ) : row.usage ? (
                            <span>{row.usage.tool} ({row.usage.price})<br /><span className="text-xs">{row.usage.math}</span></span>
                          ) : null}
                        </td>
                        <td className="px-4 py-2.5 text-muted">
                          {row.flatRate ? (
                            <span>{row.flatRate.tool} ({row.flatRate.price})<br /><span className="text-xs">{row.flatRate.math}</span></span>
                          ) : row.usage ? (
                            <span>{row.usage.tool} ({row.usage.price})<br /><span className="text-xs">{row.usage.math}</span></span>
                          ) : null}
                        </td>
                        <td className="px-4 py-2.5 text-green-400 font-semibold">{row.winner}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-surface-alt">
                      <td className="px-4 py-2.5 font-bold text-foreground" colSpan={3}>Best possible total</td>
                      <td className={`px-4 py-2.5 font-bold ${scenario.color}`}>{scenario.totalBest}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>
          ))}

          {/* Key Insight */}
          <h2 className="text-xl font-bold mt-14 mb-4">The Pattern</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p><strong className="text-foreground">Solo:</strong> Free tiers and flat-rate tools win. Per-seat is fine because you have 1 seat. Per-contact is cheap at low volumes.</p>
            <p><strong className="text-foreground">5-person team:</strong> Per-seat costs multiply 5x. Flat-rate tools (beehiiv, Make) become the clear value play. Per-contact tools like ActiveCampaign start getting expensive as your list grows.</p>
            <p><strong className="text-foreground">25-person team:</strong> Per-seat CRMs cost $500-$1,000/mo. Flat-rate email (beehiiv Scale at $49/mo) saves thousands vs per-contact email. The billing model matters more than the sticker price.</p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Which billing model is most predictable?</h3>
              <p className="text-sm text-muted">
                Flat rate. beehiiv Scale is $49/mo whether you have 5,000 or 500,000 subscribers. Make Core is $10.59/mo for 10,000 operations. Per-seat and per-contact costs change every time your team or list grows.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why does ActiveCampaign get expensive at scale?</h3>
              <p className="text-sm text-muted">
                ActiveCampaign uses per-contact pricing. Starter starts at $15/mo for 1,000 contacts but scales to $79+/mo at 10,000 contacts and $329+/mo at 50,000 contacts. beehiiv Scale is $49/mo at any subscriber count. The per-contact model punishes growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Is there a billing model that works at every scale?</h3>
              <p className="text-sm text-muted">
                No single model wins at every scale. The best strategy: use free tiers at solo stage, flat-rate tools as your team grows, and negotiate enterprise pricing when per-seat costs exceed $1,000/mo. Review your billing models quarterly.
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["pipedrive", "hubspot-crm", "activecampaign", "beehiiv", "zapier", "make"]}
          comparisons={["hubspot-crm-vs-pipedrive", "zapier-vs-make", "beehiiv-vs-convertkit"]}
          guides={[
            "saas-pricing-models-explained",
            "saas-pricing-traps-2026",
            "annual-vs-monthly-billing-analysis",
            "how-much-should-software-cost",
            "hidden-add-on-costs",
            "enterprise-pricing-trap",
          ]}
        />
      </article>
    </>
  );
}
