import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Best CRM for a 25-Person Team in 2026",
  description:
    "HubSpot Starter at $20/seat vs Pipedrive Growth at $39/seat vs Salesforce Pro Suite at $100/seat. Annual cost comparison at 25 seats with real pricing.",
};

export default function BestCrmFor25PersonTeamPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Best CRM for 25-Person Team</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Tool vs Category
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best CRM for a 25-Person Team in 2026
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            At 25 seats, per-seat pricing turns small differences into thousands of dollars.
            The gap between HubSpot Starter ($20/seat) and Salesforce Pro Suite ($100/seat)
            is $24,000/year. Here are the three best CRMs ranked for a 25-person team.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Annual Cost Comparison at 25 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly/Seat</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Total (25 seats)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$20/seat</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$6,000/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">$39/seat</td>
                    <td className="px-4 py-2.5 text-muted">$11,700/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">$100/seat</td>
                    <td className="px-4 py-2.5 text-muted">$30,000/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">#1: HubSpot Starter ($6,000/yr for 25 Seats)</h2>
            <p className="text-muted leading-relaxed mb-3">
              HubSpot Starter at $20/seat/month is the most cost-effective option for 25-person
              teams that need a full platform. You get CRM, email marketing (1,000 marketing
              contacts), forms, live chat, and basic reporting. The ecosystem is unmatched at
              this price point with native integrations to Gmail, Outlook, Slack, and Zoom.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The caveat is the Professional cliff. If your team needs custom reporting,
              automation workflows, or ABM, Professional is $890/month flat, which is $10,680/year
              regardless of seat count. At 25 seats, that is actually cheaper per-seat ($35.60/seat)
              but the jump from $6,000 to $10,680 is significant.
            </p>
            <div className="bg-surface rounded-lg border border-border p-4 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Why #1 for 25-person teams</p>
              <p className="text-sm text-muted">
                Lowest per-seat cost at $20/seat. Full platform (CRM + marketing + sales).
                Professional at $890/mo flat becomes cost-effective at 25+ seats ($35.60/seat).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">#2: Pipedrive Growth ($11,700/yr for 25 Seats)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Pipedrive Growth at $39/seat/month unlocks automations, email sync, scheduler,
              and group emailing. At 25 seats, the annual cost is $11,700. Pipedrive is
              sales-focused: best-in-class pipeline UX, strong activity tracking, and clean
              reporting. No marketing features though. You will need a separate email marketing
              tool like Brevo Standard ($18/month) or ActiveCampaign Starter ($15/month).
            </p>
            <div className="bg-surface rounded-lg border border-border p-4 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Why #2 for 25-person teams</p>
              <p className="text-sm text-muted">
                Best pipeline UX. Email sync and automations included at Growth. $11,700/yr
                for 25 seats. Premium ($49/seat) adds advanced reporting for $14,700/yr.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">#3: Salesforce Pro Suite ($30,000/yr for 25 Seats)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Salesforce Pro Suite at $100/seat/month gives you complete CRM with forecasting,
              quotes, and custom dashboards. At $30,000/year for 25 seats, this is 5x the cost
              of HubSpot Starter. Salesforce only makes sense if you need deep customization,
              AppExchange marketplace access, and complex sales workflows that simpler CRMs
              cannot handle.
            </p>
            <div className="bg-surface rounded-lg border border-border p-4 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Why #3 for 25-person teams</p>
              <p className="text-sm text-muted">
                Maximum power and customization. AppExchange ecosystem. But $30,000/yr is 5x
                HubSpot Starter. Plus implementation costs ($10K-$50K) and likely admin salary.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Why Not the Others</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Freshsales Growth ($11/seat) = $3,300/yr</p>
                <p className="text-sm text-muted">
                  Cheapest per-seat, but the Freshworks ecosystem is less mature at enterprise
                  scale. AI features are good but the reporting and customization depth cannot
                  match HubSpot or Salesforce at 25 users. Good option if budget is primary concern.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Zoho CRM Professional ($35/seat) = $10,500/yr</p>
                <p className="text-sm text-muted">
                  Comparable cost to Pipedrive Growth. The Zoho 50+ app suite is powerful but
                  the UX feels dated. Good value if you use multiple Zoho products.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Close Growth ($109/seat) = $32,700/yr</p>
                <p className="text-sm text-muted">
                  Close is built for inside sales with built-in calling. At $32,700/yr for 25
                  seats, it is more expensive than Salesforce Pro Suite with less flexibility.
                  Only worth it if outbound calling is your core motion.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Verdict</h2>
            <p className="text-muted leading-relaxed">
              For a 25-person team, HubSpot Starter at $6,000/year is the best starting point.
              If you need automations and email sync, Pipedrive Growth at $11,700/year is the
              sales-focused alternative. Consider HubSpot Professional ($10,680/year flat) if
              you need marketing automation, as the per-seat cost ($35.60) is actually reasonable
              at 25 seats. Only go Salesforce if you have complex enterprise requirements and
              budget for implementation.
            </p>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce"]}
            comparisons={["hubspot-crm-vs-salesforce", "hubspot-crm-vs-pipedrive"]}
            guides={[
              "best-crm-for-5-person-team",
              "best-crm-sales-teams",
              "crm-annual-cost-2026",
              "hubspot-pricing-reality",
              "crm-cost-over-3-years",
            ]}
          />
        </div>
      </article>
    </>
  );
}
