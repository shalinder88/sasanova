import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "The 'Contact Sales' Trap: What Enterprise Pricing Actually Costs",
  description:
    "What 'Contact Sales' really means at Salesforce, HubSpot, Zendesk, Intercom, and Monday. Annual contracts, seat minimums, implementation fees, and the visible tier prices you can verify before the call.",
  openGraph: {
    title: "The 'Contact Sales' Trap: What Enterprise Pricing Actually Costs",
    description:
      "Five major SaaS tools with hidden enterprise pricing. What their visible tiers cost, and what happens when you click 'Contact Sales.'",
  },
};

const enterpriseTools = [
  {
    name: "Salesforce",
    slug: "salesforce",
    visibleTiers: [
      { tier: "Starter Suite", price: "$25/seat/mo", annual: "$300/seat/yr" },
      { tier: "Pro Suite", price: "$100/seat/mo", annual: "$1,200/seat/yr" },
      { tier: "Enterprise", price: "$175/seat/mo", annual: "$2,100/seat/yr" },
      { tier: "Unlimited", price: "$350/seat/mo", annual: "$4,200/seat/yr" },
    ],
    contactSalesMeans: "Annual contracts are mandatory on all plans. No monthly billing. Implementation typically requires a certified Salesforce consultant ($150-300/hr). Expect $5,000-$50,000+ in implementation costs depending on complexity. Seat minimums may apply on Enterprise+ plans.",
    realCostExample: "A 10-seat Enterprise deployment: $175/seat/mo x 10 = $1,750/mo ($21,000/yr) in licensing alone. Add $15,000 average implementation. Year-one total: ~$36,000. Ongoing: $21,000/yr + admin costs.",
    toolPage: "/tools/salesforce",
  },
  {
    name: "HubSpot (Professional+)",
    slug: "hubspot-crm",
    visibleTiers: [
      { tier: "Free Tools", price: "$0", annual: "$0" },
      { tier: "Starter", price: "$20/seat/mo", annual: "$216/seat/yr" },
      { tier: "Professional", price: "$890/mo flat", annual: "$10,680/yr" },
      { tier: "Enterprise", price: "$3,600/mo flat", annual: "$43,200/yr" },
    ],
    contactSalesMeans: "Professional and Enterprise require annual commitment. Professional includes a mandatory $3,000 onboarding fee. Marketing Hub, Sales Hub, and Service Hub are priced separately. Enterprise includes a mandatory onboarding fee that varies. Adding Marketing Hub Professional to Sales Hub Professional roughly doubles your bill.",
    realCostExample: "Sales Hub Professional: $890/mo ($10,680/yr) + $3,000 onboarding = $13,680 year one. Add Marketing Hub Professional: another $890/mo + $3,000 onboarding. Combined year one: ~$27,360. That is a 4,350% jump from Starter at $20/seat/mo.",
    toolPage: "/tools/hubspot-crm",
  },
  {
    name: "Zendesk",
    slug: "zendesk",
    visibleTiers: [
      { tier: "Support Team", price: "$25/agent/mo", annual: "$19/agent/mo" },
      { tier: "Suite Team", price: "$69/agent/mo", annual: "$55/agent/mo" },
      { tier: "Suite Professional", price: "$149/agent/mo", annual: "$115/agent/mo" },
      { tier: "Suite Enterprise", price: "Contact Sales", annual: "$169/agent/mo (annual only)" },
    ],
    contactSalesMeans: "Suite Enterprise is only available on annual contracts, listed at $169/agent/mo billed annually ($2,028/agent/yr). The Advanced AI add-on ($50/agent/mo) is practically required for enterprise use but priced separately. Support Team is a standalone product without Suite features like messaging and help center.",
    realCostExample: "10-agent Suite Enterprise: $169/agent/mo x 10 = $1,690/mo ($20,280/yr). Add Advanced AI for all agents: $500/mo. Total: $2,190/mo ($26,280/yr). Many enterprises start on Suite Team ($69/agent) thinking it will be enough, then realize they need Professional ($149/agent) for custom analytics.",
    toolPage: "/tools/zendesk",
  },
  {
    name: "Intercom",
    slug: "intercom",
    visibleTiers: [
      { tier: "Essential", price: "$39/seat/mo", annual: "$29/seat/mo" },
      { tier: "Advanced", price: "$99/seat/mo", annual: "$85/seat/mo" },
      { tier: "Expert", price: "$139/seat/mo", annual: "$132/seat/mo" },
    ],
    contactSalesMeans: "All tiers are visible, but the real cost trap is Fin AI Agent: $0.99 per AI resolution on top of seat pricing. High-volume support teams can see AI costs exceed their seat costs. There is no cap on AI resolution charges. At 5,000 AI resolutions/month, that is $4,950/mo on top of seat fees.",
    realCostExample: "5-seat Advanced + 2,000 Fin AI resolutions/mo: $99 x 5 = $495/mo seats + $1,980/mo AI = $2,475/mo ($29,700/yr). The AI cost is 4x the seat cost. Intercom does not publish tiered AI pricing, so there is no volume discount visible on their pricing page.",
    toolPage: "/tools/intercom",
  },
  {
    name: "Monday.com",
    slug: "monday",
    visibleTiers: [
      { tier: "Free", price: "$0", annual: "$0" },
      { tier: "Basic", price: "$12/seat/mo", annual: "$9/seat/mo" },
      { tier: "Standard", price: "$14/seat/mo", annual: "$12/seat/mo" },
      { tier: "Pro", price: "$27/seat/mo", annual: "$19/seat/mo" },
      { tier: "Enterprise", price: "Contact Sales", annual: "Contact Sales" },
    ],
    contactSalesMeans: "Enterprise pricing is not published. Requires annual contract. Includes enterprise reporting, multi-level permissions, HIPAA compliance, and 250K automations/month. Minimum seat counts may apply. Monday also sells separate products (CRM, Dev, Service) with their own Enterprise tiers.",
    realCostExample: "25-seat Pro plan: $27 x 25 = $675/mo ($8,100/yr). Enterprise pricing is typically 50-100% higher than Pro per seat, so estimate $40-$55/seat. 25-seat Enterprise estimate: $1,000-$1,375/mo ($12,000-$16,500/yr). Exact pricing requires a sales call.",
    toolPage: "/tools/monday",
  },
];

export default function EnterprisePricingTrap() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Enterprise Pricing Trap</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">17 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The &ldquo;Contact Sales&rdquo; Trap: What Enterprise Pricing Actually Costs
          </h1>
          <p className="text-lg text-muted">
            When a SaaS pricing page says &ldquo;Contact Sales,&rdquo; it means three things: annual contracts, seat minimums, and implementation fees that can exceed the software cost. Here&apos;s what five major tools actually charge &mdash; with every visible tier price verified.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Visible tier pricing verified against vendor pages. Enterprise estimates based on published data and industry benchmarks."
          sourceCount={5}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* What Contact Sales Means */}
          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              What &ldquo;Contact Sales&rdquo; actually means
            </p>
            <p className="text-sm text-muted">
              (1) Annual contracts only &mdash; no monthly flexibility. (2) Seat minimums &mdash; you cannot buy just 2 Enterprise seats. (3) Implementation fees &mdash; often $3,000 to $50,000+. (4) Separate pricing for each product module. (5) Price increases locked behind renewal negotiations.
            </p>
          </div>

          {/* Tool Breakdowns */}
          {enterpriseTools.map((tool) => (
            <section key={tool.slug} className="mb-12">
              <h2 className="text-xl font-bold mt-10 mb-4">{tool.name}</h2>

              {/* Visible Tiers */}
              <div className="overflow-x-auto rounded-lg border border-border mt-3 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {tool.visibleTiers.map((tier) => (
                      <tr key={tier.tier}>
                        <td className="px-4 py-2.5 font-medium text-foreground">{tier.tier}</td>
                        <td className="px-4 py-2.5">{tier.price}</td>
                        <td className="px-4 py-2.5">{tier.annual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border border-border rounded-xl p-5 bg-surface mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
                  What &ldquo;Contact Sales&rdquo; means here
                </p>
                <p className="text-sm text-muted mb-3">{tool.contactSalesMeans}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                  Real cost example
                </p>
                <p className="text-sm text-muted">{tool.realCostExample}</p>
                <p className="text-xs text-muted mt-3">
                  <Link href={tool.toolPage} className="text-accent hover:underline">
                    Full {tool.name} pricing breakdown &rarr;
                  </Link>
                </p>
              </div>
            </section>
          ))}

          {/* Protection Tactics */}
          <h2 className="text-xl font-bold mt-14 mb-4">How to Protect Yourself on Enterprise Sales Calls</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p><strong className="text-foreground">1. Get the annual total in writing.</strong> Ask for the all-in year-one cost including implementation, training, and any required add-ons. Do not accept per-seat-per-month framing without the total.</p>
            <p><strong className="text-foreground">2. Ask about seat minimums.</strong> Some Enterprise plans require 10, 25, or 50+ seats. You may be paying for seats nobody uses.</p>
            <p><strong className="text-foreground">3. Negotiate the implementation fee.</strong> Onboarding fees ($3,000-$50,000) are often negotiable, especially at end of quarter. Ask for it to be waived or reduced.</p>
            <p><strong className="text-foreground">4. Ask about renewal pricing.</strong> Year-one deals often include discounts that disappear at renewal. Get price-lock guarantees in your contract.</p>
            <p><strong className="text-foreground">5. Request a monthly billing option.</strong> Even if the sales rep says annual only, some vendors offer monthly billing at a 20-30% premium. Worth it for flexibility.</p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why do enterprise SaaS tools hide their pricing?</h3>
              <p className="text-sm text-muted">
                Two reasons: (1) price discrimination &mdash; they charge different amounts based on company size, budget, and negotiation skill. (2) Deal complexity &mdash; enterprise deployments genuinely vary in scope. The charitable reading is customization; the cynical reading is opacity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Can I negotiate enterprise SaaS pricing?</h3>
              <p className="text-sm text-muted">
                Yes. Enterprise pricing is almost always negotiable. The listed price is the starting point, not the final price. End-of-quarter timing, multi-year commitments, and competitor quotes give you leverage.{" "}
                <Link href="/guides/saas-contract-negotiation-tips" className="text-accent hover:underline">
                  Negotiation tactics guide &rarr;
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Are there transparent alternatives to these enterprise tools?</h3>
              <p className="text-sm text-muted">
                Yes. Pipedrive ($14-$99/seat, all tiers visible), Cal.com (open source), n8n (self-hosted free), Plausible ($9-$19/mo), and ClickUp ($0-$19/seat) all publish every tier price with no &ldquo;Contact Sales&rdquo; gatekeeping.
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["salesforce", "hubspot-crm", "zendesk", "intercom", "monday"]}
          comparisons={["hubspot-crm-vs-pipedrive", "hubspot-crm-vs-salesforce"]}
          guides={[
            "saas-pricing-traps-2026",
            "saas-contract-negotiation-tips",
            "salesforce-hidden-costs",
            "when-hubspot-stops-being-cheap",
            "hubspot-pricing-reality",
            "saas-pricing-models-explained",
          ]}
        />
      </article>
    </>
  );
}
