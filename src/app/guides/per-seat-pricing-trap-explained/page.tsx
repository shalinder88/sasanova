import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "The Per-Seat Pricing Trap: How $14/Seat Becomes $14,000/Year",
  description:
    "Per-seat pricing compounds fast. See the exact math at 5, 10, 25, 50, and 100 seats for Pipedrive, Salesforce, HubSpot, Freshsales, Close, and Zoho CRM.",
};

export default function PerSeatPricingTrapExplainedPage() {
  return (
    <>
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
              Per-Seat Pricing Trap Explained
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Gotcha
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Per-Seat Pricing Trap: How $14/Seat Becomes $14,000/Year
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Per-seat pricing looks cheap at 2&ndash;3 users. Then your team grows and the math
            stops making sense. This guide shows the exact annual cost of the most popular CRMs
            at 5, 10, 25, 50, and 100 seats &mdash; and which tools compound fastest.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={6}
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Problem */}
          <section>
            <h2 className="text-xl font-bold mb-3">Why Per-Seat Pricing Is a Trap</h2>
            <p className="text-muted leading-relaxed mb-3">
              Per-seat pricing is the most common SaaS billing model for CRMs and productivity
              tools. The problem is not the model itself &mdash; it is that founders evaluate
              tools at their current team size and do not project forward. A tool that costs
              $14/seat/mo feels trivial for a 3-person team ($504/year). At 100 seats, the same
              tool is $16,800/year. If you chose a higher tier at $49/seat, you are looking at
              $58,800/year.
            </p>
          </section>

          {/* Pipedrive Math */}
          <section>
            <h2 className="text-xl font-bold mb-3">Pipedrive: Per-Seat Scaling</h2>
            <p className="text-muted leading-relaxed mb-3">
              Pipedrive bills per seat on all plans: Lite ($14/seat/mo), Growth ($39/seat/mo),
              Premium ($49/seat/mo), Ultimate ($99/seat/mo).
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Team Size</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Lite ($14/seat)</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Growth ($39/seat)</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Premium ($49/seat)</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Ultimate ($99/seat)</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">5 seats</td>
                    <td className="px-4 py-3">$840/yr</td>
                    <td className="px-4 py-3">$2,340/yr</td>
                    <td className="px-4 py-3">$2,940/yr</td>
                    <td className="px-4 py-3">$5,940/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">10 seats</td>
                    <td className="px-4 py-3">$1,680/yr</td>
                    <td className="px-4 py-3">$4,680/yr</td>
                    <td className="px-4 py-3">$5,880/yr</td>
                    <td className="px-4 py-3">$11,880/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">25 seats</td>
                    <td className="px-4 py-3">$4,200/yr</td>
                    <td className="px-4 py-3">$11,700/yr</td>
                    <td className="px-4 py-3">$14,700/yr</td>
                    <td className="px-4 py-3">$29,700/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">50 seats</td>
                    <td className="px-4 py-3">$8,400/yr</td>
                    <td className="px-4 py-3">$23,400/yr</td>
                    <td className="px-4 py-3">$29,400/yr</td>
                    <td className="px-4 py-3">$59,400/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">100 seats</td>
                    <td className="px-4 py-3">$16,800/yr</td>
                    <td className="px-4 py-3">$46,800/yr</td>
                    <td className="px-4 py-3">$58,800/yr</td>
                    <td className="px-4 py-3">$118,800/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Salesforce Math */}
          <section>
            <h2 className="text-xl font-bold mb-3">Salesforce: The Steepest Climb</h2>
            <p className="text-muted leading-relaxed mb-3">
              Salesforce compounds fastest because its per-seat prices are highest: Starter Suite
              ($25/seat/mo), Pro Suite ($100/seat/mo), Enterprise ($175/seat/mo), Unlimited
              ($350/seat/mo). All require annual contracts.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Team Size</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Starter ($25)</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Pro Suite ($100)</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Enterprise ($175)</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Unlimited ($350)</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">5 seats</td>
                    <td className="px-4 py-3">$1,500/yr</td>
                    <td className="px-4 py-3">$6,000/yr</td>
                    <td className="px-4 py-3">$10,500/yr</td>
                    <td className="px-4 py-3">$21,000/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">10 seats</td>
                    <td className="px-4 py-3">$3,000/yr</td>
                    <td className="px-4 py-3">$12,000/yr</td>
                    <td className="px-4 py-3">$21,000/yr</td>
                    <td className="px-4 py-3">$42,000/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">25 seats</td>
                    <td className="px-4 py-3">$7,500/yr</td>
                    <td className="px-4 py-3">$30,000/yr</td>
                    <td className="px-4 py-3">$52,500/yr</td>
                    <td className="px-4 py-3">$105,000/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">50 seats</td>
                    <td className="px-4 py-3">$15,000/yr</td>
                    <td className="px-4 py-3">$60,000/yr</td>
                    <td className="px-4 py-3">$105,000/yr</td>
                    <td className="px-4 py-3">$210,000/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">100 seats</td>
                    <td className="px-4 py-3">$30,000/yr</td>
                    <td className="px-4 py-3">$120,000/yr</td>
                    <td className="px-4 py-3">$210,000/yr</td>
                    <td className="px-4 py-3">$420,000/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Freshsales & Zoho as Alternatives */}
          <section>
            <h2 className="text-xl font-bold mb-3">Budget-Friendly Per-Seat Alternatives</h2>
            <p className="text-muted leading-relaxed mb-3">
              Not all per-seat CRMs scale the same way. Here is the annual cost comparison at
              25 seats across the most popular mid-tier plans:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">CRM</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Popular Plan</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Per Seat/Mo</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">25 Seats/Year</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Freshsales Growth</td>
                    <td className="px-4 py-3">Growth</td>
                    <td className="px-4 py-3">$11/seat/mo</td>
                    <td className="px-4 py-3">$3,300/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Zoho CRM Standard</td>
                    <td className="px-4 py-3">Standard</td>
                    <td className="px-4 py-3">$20/seat/mo</td>
                    <td className="px-4 py-3">$6,000/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Pipedrive Growth</td>
                    <td className="px-4 py-3">Growth</td>
                    <td className="px-4 py-3">$39/seat/mo</td>
                    <td className="px-4 py-3">$11,700/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Close Growth</td>
                    <td className="px-4 py-3">Growth</td>
                    <td className="px-4 py-3">$109/seat/mo</td>
                    <td className="px-4 py-3">$32,700/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Salesforce Pro Suite</td>
                    <td className="px-4 py-3">Pro Suite</td>
                    <td className="px-4 py-3">$100/seat/mo</td>
                    <td className="px-4 py-3">$30,000/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">The flat-rate alternative</p>
              <p className="text-sm text-muted">
                HubSpot Professional ($890/mo flat) includes unlimited seats for core CRM features.
                At 25+ users, this can be cheaper than per-seat alternatives. However, HubSpot&apos;s
                $3,000 onboarding fee and $10,680/yr base cost make it expensive for smaller teams.
                The break-even point depends on team size and which features you need.
              </p>
            </div>
          </section>

          {/* How to Protect Yourself */}
          <section>
            <h2 className="text-xl font-bold mb-3">How to Protect Against Per-Seat Creep</h2>
            <ol className="list-decimal pl-5 space-y-3 text-muted mb-4">
              <li>
                <strong className="text-foreground">Project your team size at 12 and 24 months.</strong> Before
                choosing a tool, calculate the annual cost at your projected team size, not your current one.
              </li>
              <li>
                <strong className="text-foreground">Audit active seats quarterly.</strong> Most companies
                pay for seats that are rarely used. Remove inactive users every quarter.
              </li>
              <li>
                <strong className="text-foreground">Ask about volume discounts.</strong> Many CRMs offer
                10&ndash;30% discounts at 25+ or 50+ seats. You have to ask; it is rarely automatic.
              </li>
              <li>
                <strong className="text-foreground">Consider role-based access.</strong> Not every employee
                needs a full CRM seat. Some tools offer read-only or limited seats at lower cost.
              </li>
              <li>
                <strong className="text-foreground">Evaluate flat-rate alternatives early.</strong> If you
                know you will grow past 20 seats, flat-rate or tiered pricing may save you thousands
                over per-seat models.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which CRM has the cheapest per-seat pricing?</h3>
                <p className="text-muted">Freshsales Growth at $11/seat/mo is the cheapest paid per-seat CRM with meaningful features (pipeline, AI scoring, sequences). Zoho CRM Standard at $20/seat/mo is next. Both offer free tiers for very small teams.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">At what team size does per-seat become a bad deal?</h3>
                <p className="text-muted">It depends on the per-seat price. At $14/seat (Pipedrive Lite), 100 seats is $16,800/yr, which is competitive. At $100/seat (Salesforce Pro Suite), 25 seats is already $30,000/yr, which pushes many teams toward flat-rate alternatives.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does HubSpot charge per seat?</h3>
                <p className="text-muted">HubSpot Starter charges $20/seat/mo. Professional ($890/mo) and Enterprise ($3,600/mo) are flat-rate and include core CRM seats. Additional paid seats for Sales Hub or Service Hub extras may still apply.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I get volume discounts on CRM seats?</h3>
                <p className="text-muted">Yes, most CRMs offer volume discounts at 25+ or 50+ seats. Salesforce almost always negotiates pricing. Pipedrive and Zoho sometimes offer discounts for annual commitments. You need to ask your sales rep directly.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["pipedrive", "salesforce", "freshsales", "zoho-crm", "hubspot-crm"]}
            comparisons={["pipedrive-vs-salesforce", "hubspot-crm-vs-salesforce", "freshsales-vs-pipedrive"]}
            guides={["what-is-per-seat-pricing", "salesforce-annual-contract-trap", "when-hubspot-stops-being-cheap"]}
          />
        </div>
      </article>
    </>
  );
}
