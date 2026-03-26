import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Costs for a 25-Person Team: When Enterprise Tier Pressure Starts",
  description:
    "Complete stack costs at 25 seats. Enterprise tier pressure points for CRM, PM, communication, and more. Per-seat math with exact verified prices.",
};

export default function SaaSCosts25PersonPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Costs for 25-Person Team</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Team Size Scaling
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Costs for a 25-Person Team: When Enterprise Tier Pressure Starts
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            At 25 seats, per-seat pricing becomes your largest line item. Pipedrive Lite alone
            is $350/month. Slack Pro is $218.75/month. Salesforce Starter Suite is $625/month.
            This is where vendors start pushing enterprise tiers, SSO becomes important, and
            flat-rate tools like Basecamp Pro ($349/mo for unlimited users) start looking attractive.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>20 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">CRM at 25 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per Seat</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">25 Seats/mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">$11/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$275</td>
                    <td className="px-4 py-2.5 text-muted">$3,300</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Lite</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$350</td>
                    <td className="px-4 py-2.5 text-muted">$4,200</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$500</td>
                    <td className="px-4 py-2.5 text-muted">$6,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Starter Suite</td>
                    <td className="px-4 py-2.5 text-muted">$25/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$625</td>
                    <td className="px-4 py-2.5 text-muted">$7,500</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">$100/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$2,500</td>
                    <td className="px-4 py-2.5 text-muted">$30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              <strong>Enterprise pressure point:</strong> HubSpot Professional is $890/month flat (not per seat) &mdash;
              at 25 seats it&apos;s $35.60/seat effective, cheaper than HubSpot Starter when you need
              automation and custom reporting. But it&apos;s a 4,350% jump from Starter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">PM + Communication at 25 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">25 Seats/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello Standard</td>
                    <td className="px-4 py-2.5 text-muted">$6/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$150</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$10/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$250</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                    <td className="px-4 py-2.5 text-muted">$12/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$300</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basecamp Pro</td>
                    <td className="px-4 py-2.5 text-muted">$349/mo flat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$349</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Slack Pro</td>
                    <td className="px-4 py-2.5 text-muted">$8.75/user</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$218.75</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Microsoft Teams Essentials</td>
                    <td className="px-4 py-2.5 text-muted">$4/user</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              <strong>Flat-rate wins at 25:</strong> Basecamp Pro at $349/month for unlimited users is
              effectively $13.96/seat at 25 people &mdash; cheaper than Notion Plus ($12/seat) when you add
              the built-in chat, file storage, and scheduling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Total Stack Cost at 25 People</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Budget Stack</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Premium Stack</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">Freshsales Growth: $275</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot Professional: $890</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">PM</td>
                    <td className="px-4 py-2.5 text-muted">ClickUp Unlimited: $250</td>
                    <td className="px-4 py-2.5 text-muted">Notion Business: $600</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Chat</td>
                    <td className="px-4 py-2.5 text-muted">MS Teams Essentials: $100</td>
                    <td className="px-4 py-2.5 text-muted">Slack Pro: $218.75</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                    <td className="px-4 py-2.5 text-muted">Brevo Standard: $18</td>
                    <td className="px-4 py-2.5 text-muted">ActiveCampaign Plus: $49</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Make Core: $10.59</td>
                    <td className="px-4 py-2.5 text-muted">Zapier Team: $103.50</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-surface-alt font-semibold">
                    <td className="px-4 py-2.5 text-foreground">Total</td>
                    <td className="px-4 py-2.5 text-foreground">$653.59/mo</td>
                    <td className="px-4 py-2.5 text-foreground">$1,861.25/mo</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">When does the HubSpot Professional jump make sense?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  At 25 seats, HubSpot Starter is $500/month. Professional is $890/month flat. The extra $390
                  buys automation, custom reporting, ABM tools, and 2,000 marketing contacts. If you need
                  automation, the jump makes sense at 25+ seats because the per-seat effective cost drops.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Should we consider Salesforce at this size?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Salesforce Starter Suite at $625/month (25 seats) is in range. But implementation costs
                  add $10K&ndash;$50K upfront, and you&apos;ll likely need Pro Suite ($100/seat = $2,500/month) for
                  real functionality. Total first-year cost can be $40K+.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "saas-costs-for-10-person-team",
              "saas-costs-for-50-person-team",
              "when-hubspot-stops-being-cheap",
              "salesforce-hidden-costs",
            ]}
          />
        </div>
      </article>
    </>
  );
}
