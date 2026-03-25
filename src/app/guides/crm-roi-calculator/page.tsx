import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM ROI Calculator: Revenue Per Deal vs CRM Cost — Break-Even Analysis",
  description:
    "Calculate your CRM ROI using revenue per deal, deals per month, and exact CRM pricing. Break-even analysis for HubSpot, Pipedrive, and Salesforce.",
};

export default function CrmRoiCalculatorPage() {
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
              CRM ROI Calculator
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            ROI Calculator
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM ROI Calculator: Does Your CRM Pay for Itself?
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            A CRM is only worth its cost if it helps you close more deals or close them faster.
            This guide provides the exact math: revenue per deal &times; deals per month vs. CRM
            subscription cost. How many additional deals does your CRM need to generate to
            break even?
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>11 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Formula */}
          <section>
            <h2 className="text-xl font-bold mb-3">The CRM ROI Formula</h2>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm font-mono text-foreground">
                CRM ROI = (Additional deals closed &times; Average deal value) &minus; CRM annual cost
              </p>
              <p className="text-sm text-muted mt-2">
                Break-even = CRM annual cost &divide; Average deal value = Deals needed per year
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              A CRM doesn&apos;t directly close deals. It reduces the chance of losing deals
              through forgotten follow-ups, disorganized pipelines, and missed opportunities.
              Industry benchmarks suggest a well-implemented CRM increases close rates by
              10&ndash;30%.
            </p>
          </section>

          {/* CRM Costs */}
          <section>
            <h2 className="text-xl font-bold mb-3">Exact CRM Costs (5-Person Sales Team)</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (5 seats)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Free</td>
                    <td className="px-4 py-2.5 text-muted">Free Tools</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">5 &times; $20 = $100/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,200/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Growth</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">5 &times; $39 = $195/mo</td>
                    <td className="px-4 py-2.5 text-muted">$2,340/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">5 &times; $100 = $500/mo</td>
                    <td className="px-4 py-2.5 text-muted">$6,000/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Break-Even Table */}
          <section>
            <h2 className="text-xl font-bold mb-3">Break-Even: Deals Needed Per Year by Deal Size</h2>
            <p className="text-muted leading-relaxed mb-4">
              How many additional deals must your CRM help you close to pay for itself?
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Avg Deal Value</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Starter ($1,200/yr)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive Growth ($2,340/yr)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Salesforce Pro ($6,000/yr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$500</td>
                    <td className="px-4 py-2.5 text-muted">2.4 deals</td>
                    <td className="px-4 py-2.5 text-muted">4.7 deals</td>
                    <td className="px-4 py-2.5 text-muted">12 deals</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$2,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.6 deals</td>
                    <td className="px-4 py-2.5 text-muted">1.2 deals</td>
                    <td className="px-4 py-2.5 text-muted">3 deals</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$5,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.24 deals</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.47 deals</td>
                    <td className="px-4 py-2.5 text-muted">1.2 deals</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$10,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.12 deals</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.23 deals</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.6 deals</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$25,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.05 deals</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.09 deals</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.24 deals</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Key Insight</p>
              <p className="text-sm text-muted">
                If your average deal is $2,000+, even Salesforce pays for itself with just 3
                additional deals per year. For $5,000+ deals, every CRM on this list is a
                no-brainer ROI. The real question for high-value deals isn&apos;t &ldquo;can I
                afford a CRM?&rdquo; &mdash; it&apos;s &ldquo;can I afford not to have one?&rdquo;
              </p>
            </div>
          </section>

          {/* When CRM Doesn't Pay Off */}
          <section>
            <h2 className="text-xl font-bold mb-3">When a Paid CRM Doesn&apos;t Make Sense</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Low deal volume (&lt;5 deals/month)</p>
                <p className="text-sm text-muted">
                  If you close fewer than 5 deals per month, a spreadsheet or HubSpot Free ($0)
                  may be sufficient. The overhead of learning and maintaining a paid CRM may not
                  be worth it.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Very low deal values (&lt;$200)</p>
                <p className="text-sm text-muted">
                  At $200/deal, you need 12 extra deals/year just to cover Pipedrive Growth.
                  High-volume, low-value businesses may get better ROI from marketing automation
                  than CRM.
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
                  How do I measure the additional deals my CRM generates?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Track your close rate before and after CRM implementation. If your close rate
                  was 20% and increases to 25%, that 5-point improvement on 100 opportunities/month
                  = 5 additional deals/month. Multiply by deal value for monthly CRM revenue.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Should I start with HubSpot Free or pay for Pipedrive?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Start with HubSpot Free if you have fewer than 5 deals/month and want to test
                  CRM value. Move to Pipedrive Growth ($39/seat) when you need automation, email
                  sync, and serious pipeline management. The $39/seat investment pays for itself
                  with one additional $500 deal per seat per year.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Does Salesforce ROI justify the $100/seat price?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  For enterprise sales with $10,000+ deal values, yes. Salesforce&apos;s advanced
                  features (territory management, CPQ, Einstein AI) add value that simpler CRMs
                  lack. At $25,000/deal, you need less than 1 extra deal per year to justify
                  Salesforce for a 5-person team.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce"]}
            guides={["how-to-choose-crm", "crm-cost-over-3-years", "best-crm-under-20-per-user"]}
          />
        </div>
      </article>
    </>
  );
}
