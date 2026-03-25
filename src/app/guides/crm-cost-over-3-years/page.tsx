import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "3-Year CRM Cost as Your Team Grows: HubSpot vs Pipedrive vs Salesforce",
  description:
    "Exact 3-year cost projection for HubSpot, Pipedrive, and Salesforce as your team grows from 3 to 8 to 15 seats. Real pricing from vendor sites, no estimates.",
};

export default function CrmCostOver3YearsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              3-Year CRM Cost
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Year-Over-Year Cost
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            3-Year CRM Cost as Your Team Grows: HubSpot vs Pipedrive vs Salesforce
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Most CRM comparisons show prices at a single team size. Real businesses grow.
            This guide projects exact costs over 3 years as your team scales from 3 seats
            (Year 1) to 8 seats (Year 2) to 15 seats (Year 3) &mdash; covering the growth
            trajectory of a typical startup-to-scaleup journey.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Pricing Basis */}
          <section>
            <h2 className="text-xl font-bold mb-3">Pricing Used in This Analysis</h2>
            <p className="text-muted leading-relaxed mb-4">
              All prices are monthly rates from each vendor&apos;s pricing page as of March 2026.
              We use the mid-tier plan for each &mdash; the tier most growing teams actually need.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Per seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$890/mo flat</td>
                    <td className="px-4 py-2.5 text-muted">Flat rate</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">$39/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Per seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">$100/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Per seat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 1: 3 seats */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 1: 3 Seats &mdash; The Startup Phase</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 3 seats, you&apos;re likely a founding team. HubSpot Starter is the cheapest
              per-seat option. Pipedrive Growth sits in the middle. Salesforce Pro Suite is
              the most expensive but already gives you enterprise-grade features most 3-person
              teams don&apos;t need.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">3 &times; $20 = $60/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$720/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Growth</td>
                    <td className="px-4 py-2.5 text-muted">3 &times; $39 = $117/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,404/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">3 &times; $100 = $300/mo</td>
                    <td className="px-4 py-2.5 text-muted">$3,600/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 2: 8 seats */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 2: 8 Seats &mdash; Growing Sales Team</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 8 seats, many teams start outgrowing HubSpot Starter&apos;s feature limits
              (no custom reporting, limited automation). The decision to jump to HubSpot
              Professional ($890/mo flat) often happens around this size. If you stay on
              Starter, you save significantly &mdash; but you lose automation and custom reporting.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">8 &times; $20 = $160/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,920/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Professional</td>
                    <td className="px-4 py-2.5 text-muted">$890/mo flat</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">$10,680/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Growth</td>
                    <td className="px-4 py-2.5 text-muted">8 &times; $39 = $312/mo</td>
                    <td className="px-4 py-2.5 text-muted">$3,744/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">8 &times; $100 = $800/mo</td>
                    <td className="px-4 py-2.5 text-muted">$9,600/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">The HubSpot cliff:</strong> If your 8-person
              team needs automation and custom reporting, the jump from $160/mo to $890/mo is
              a 456% increase. Pipedrive Growth at $312/mo gives you automations and email sync
              without the cliff.
            </p>
          </section>

          {/* Year 3: 15 seats */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 3: 15 Seats &mdash; Scaling Operations</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 15 seats, Salesforce&apos;s per-seat model adds up fast, but you get enterprise
              features. HubSpot Professional&apos;s flat rate actually becomes more cost-effective
              per seat at this size. Pipedrive remains the most predictable.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per Seat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">15 &times; $20 = $300/mo</td>
                    <td className="px-4 py-2.5 text-muted">$3,600/yr</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Professional</td>
                    <td className="px-4 py-2.5 text-muted">$890/mo flat</td>
                    <td className="px-4 py-2.5 text-muted">$10,680/yr</td>
                    <td className="px-4 py-2.5 text-muted">$59.33/seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Growth</td>
                    <td className="px-4 py-2.5 text-muted">15 &times; $39 = $585/mo</td>
                    <td className="px-4 py-2.5 text-muted">$7,020/yr</td>
                    <td className="px-4 py-2.5 text-muted">$39/seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">15 &times; $100 = $1,500/mo</td>
                    <td className="px-4 py-2.5 text-muted">$18,000/yr</td>
                    <td className="px-4 py-2.5 text-muted">$100/seat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3-Year Total */}
          <section>
            <h2 className="text-xl font-bold mb-3">3-Year Total Cost Summary</h2>
            <p className="text-muted leading-relaxed mb-4">
              Here&apos;s the cumulative spend over 3 years. For HubSpot, we show two scenarios:
              staying on Starter the entire time (if you can live with limited features) and
              upgrading to Professional in Year 2.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM Path</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 1</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 2</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 3</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">3-Year Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot (Starter only)</td>
                    <td className="px-4 py-2.5 text-muted">$720</td>
                    <td className="px-4 py-2.5 text-muted">$1,920</td>
                    <td className="px-4 py-2.5 text-muted">$3,600</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$6,240</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot (Pro from Year 2)</td>
                    <td className="px-4 py-2.5 text-muted">$720</td>
                    <td className="px-4 py-2.5 text-muted">$10,680</td>
                    <td className="px-4 py-2.5 text-muted">$10,680</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">$22,080</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Growth</td>
                    <td className="px-4 py-2.5 text-muted">$1,404</td>
                    <td className="px-4 py-2.5 text-muted">$3,744</td>
                    <td className="px-4 py-2.5 text-muted">$7,020</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$12,168</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">$3,600</td>
                    <td className="px-4 py-2.5 text-muted">$9,600</td>
                    <td className="px-4 py-2.5 text-muted">$18,000</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">$31,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Key Takeaway</p>
              <p className="text-sm text-muted">
                If you stay on HubSpot Starter, it&apos;s the cheapest option at $6,240 over 3 years.
                But the moment you need Professional-tier features (automation, custom reporting, ABM),
                HubSpot jumps to $22,080 &mdash; making Pipedrive Growth at $12,168 the better value
                for growing teams that need automation. Salesforce at $31,200 only makes sense if you
                need enterprise-grade customization.
              </p>
            </div>
          </section>

          {/* Hidden Costs */}
          <section>
            <h2 className="text-xl font-bold mb-3">Hidden Costs Not in the Sticker Price</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">HubSpot Professional Onboarding</p>
                <p className="text-sm text-muted">
                  HubSpot requires a mandatory $3,000 onboarding fee for Professional plans. This
                  adds to your Year 2 cost. Your real HubSpot Pro Year 2 cost is $13,680.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Salesforce Implementation</p>
                <p className="text-sm text-muted">
                  Most Salesforce deployments require a consultant. Budget $5,000&ndash;$15,000 for
                  initial setup, custom objects, and workflow configuration. Ongoing admin often
                  requires a part-time Salesforce admin ($50&ndash;$100/hr).
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Pipedrive Add-Ons</p>
                <p className="text-sm text-muted">
                  Pipedrive&apos;s base plans are clean, but add-ons like LeadBooster ($32.50/mo),
                  Smart Docs ($32.50/mo), and Projects ($6.70/seat) add up. Factor these into your
                  budget if you need them.
                </p>
              </div>
            </div>
          </section>

          {/* Recommendation */}
          <section>
            <h2 className="text-xl font-bold mb-3">Which CRM Path Should You Choose?</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Choose HubSpot Starter if...</p>
                <p className="text-sm text-muted">
                  You want the cheapest entry point and can live without advanced automation and
                  custom reporting. Best for teams that use HubSpot primarily as a contact database
                  with basic deal tracking.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Choose Pipedrive Growth if...</p>
                <p className="text-sm text-muted">
                  You need automation and email sync from Day 1 and want predictable per-seat scaling
                  without cliffs. Best for sales-driven teams that want power features without the
                  HubSpot Professional jump.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Choose Salesforce Pro Suite if...</p>
                <p className="text-sm text-muted">
                  You have complex sales processes, need AppExchange integrations, and plan to
                  build heavily customized workflows. The higher cost buys you maximum flexibility
                  and an ecosystem nothing else matches.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I start on HubSpot Free and upgrade later?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. HubSpot Free is genuinely free with unlimited contacts. The problem is the
                  jump: Free to Starter is $20/seat, but Starter to Professional is $890/mo flat.
                  If you know you&apos;ll need automation, start with Pipedrive Growth at $39/seat instead.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Does Salesforce offer discounts for startups?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Salesforce has a Starter Suite at $25/seat/mo, which is their entry-level offering.
                  They also offer nonprofit and education discounts. But for most growing businesses,
                  Pro Suite at $100/seat/mo is the minimum viable Salesforce plan.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What about annual billing discounts?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  HubSpot Starter annual: $216/seat/yr ($18/seat/mo effective). Pipedrive Growth
                  annual: $348/seat/yr ($29/seat/mo effective). Salesforce Pro Suite annual:
                  $1,200/seat/yr ($100/seat/mo). Annual billing saves 10&ndash;25% but requires
                  upfront commitment.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  At what team size does HubSpot Professional become cheaper per seat than Pipedrive?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  HubSpot Professional is $890/mo flat. Pipedrive Growth is $39/seat. At 23+ seats,
                  HubSpot Pro ($38.70/seat effective) becomes cheaper per seat than Pipedrive Growth.
                  Below 23 seats, Pipedrive Growth wins on per-seat cost.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce"]}
            comparisons={["hubspot-crm-vs-pipedrive", "pipedrive-vs-salesforce"]}
            guides={["how-to-choose-crm", "when-hubspot-stops-being-cheap", "best-crm-under-20-per-user"]}
          />
        </div>
      </article>
    </>
  );
}
