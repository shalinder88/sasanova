import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Costs for a 10-Person Team: Where Pricing Tiers Jump",
  description:
    "Complete stack costs at 10 seats. Where CRM, PM, and communication pricing tiers jump. Exact per-seat math across every category with verified vendor prices.",
};

export default function SaaSCosts10PersonPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Costs for 10-Person Team</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Team Size Scaling
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Costs for a 10-Person Team: Where Pricing Tiers Jump
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Ten seats is where many free tiers become unusable and per-seat costs start
            compounding. Jira Free maxes at 10 users. Slack Free becomes painful with
            90-day message limits. CRM at 10 seats ranges from $110/month (Freshsales Growth)
            to $250/month (Salesforce Starter Suite). Every tier jump mapped below.
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
            <h2 className="text-xl font-bold mb-3">CRM at 10 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per Seat</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10 Seats/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales Growth</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">$11/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$110</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Lite</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$140</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$200</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zoho CRM</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$200</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Starter Suite</td>
                    <td className="px-4 py-2.5 text-muted">$25/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Project Management at 10 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per Seat</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10 Seats/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello Standard</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$6/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$60</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Linear Standard</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$8/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$80</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Jira Standard</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$8.15/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$81.50</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$10/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$100</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                    <td className="px-4 py-2.5 text-muted">Plus</td>
                    <td className="px-4 py-2.5 text-muted">$12/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$120</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monday.com Standard</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$140</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              <strong>Key threshold:</strong> Jira Free maxes at 10 users. At 11 users you must
              move to Jira Standard at $8.15/seat/mo. Asana Free is only 2 users &mdash; already
              exceeded. ClickUp Free has unlimited members but 100MB storage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Communication at 10 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10 Users/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Discord</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Microsoft Teams</td>
                    <td className="px-4 py-2.5 text-muted">Essentials</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$40</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Slack</td>
                    <td className="px-4 py-2.5 text-muted">Pro</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$87.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The 10-Person Budget Stack</h2>
            <p className="text-muted leading-relaxed mb-4">
              Cheapest viable stack: Freshsales Growth ($110) + Trello Standard ($60) +
              Discord Free ($0) + Brevo Starter ($9) + Make Core ($10.59) = <strong>$189.59/month</strong>.
              That covers CRM, PM, communication, email marketing, and automation for 10 people.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Where do free tiers break at 10 users?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Jira Free maxes at 10 users (you&apos;re at the limit). Asana Free is 2 users (broken since user 3).
                  Monday.com Free is 2 seats. Zoho CRM Free is 3 users. Most PM and CRM tools force paid plans well before 10 people.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Should we get Slack or stay on Discord?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Discord Free is unlimited messages and voice for $0. Slack Pro at 10 users is $87.50/month.
                  Switch to Slack when you need enterprise integrations, compliance exports, or your team is
                  uncomfortable with Discord&apos;s gaming-origin UX.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "saas-costs-for-5-person-team",
              "saas-costs-for-25-person-team",
              "per-seat-pricing-trap-explained",
              "remote-team-communication",
            ]}
          />
        </div>
      </article>
    </>
  );
}
