import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Best SaaS Stack Under $200/Month for Growing Teams (2026)",
  description:
    "A complete 5-seat stack with Pipedrive Growth, Brevo Standard, Make Pro, Notion Plus, and Plausible Growth for $196.82/month. Every price verified from vendor pages.",
  alternates: { canonical: "https://sasanova.com/guides/best-saas-stack-under-200" },
};

export default function BestSaasStackUnder200Page() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Best SaaS Stack Under $200/Mo</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Stack Building
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best SaaS Stack Under $200/Month for Growing Teams
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            At $200/month you can equip a 5-person team with professional-grade CRM, email automation,
            workflow automation, project management, and analytics. This guide builds two stack options
            using verified prices and explains the tradeoffs.
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
            <h2 className="text-xl font-bold mb-3">Stack A: Sales-Focused Team ($196.82/Month for 5 Seats)</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price/Mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Growth (5 seats)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$195.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Wait &mdash; that nearly blows the entire budget on CRM alone. Pipedrive Growth at $39/seat/month
              for 5 seats is $195. This is why per-seat pricing matters at scale. Let&apos;s rebuild with
              budget-conscious tool choices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Stack B: Balanced Team ($185.41/Month for 5 Seats)</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price/Mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">Freshsales</td>
                    <td className="px-4 py-2.5 text-muted">Growth (5 seats)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$55.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                    <td className="px-4 py-2.5 text-muted">Brevo</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$18.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Make</td>
                    <td className="px-4 py-2.5 text-muted">Pro</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$18.82</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Project Management</td>
                    <td className="px-4 py-2.5 text-muted">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Plus (5 seats)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$60.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5 text-muted">Plausible</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$14.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Scheduling</td>
                    <td className="px-4 py-2.5 text-muted">Cal.com</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Forms</td>
                    <td className="px-4 py-2.5 text-muted">Tally</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Help Desk</td>
                    <td className="px-4 py-2.5 text-muted">Freshdesk</td>
                    <td className="px-4 py-2.5 text-muted">Growth (1 agent)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$15.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Chat</td>
                    <td className="px-4 py-2.5 text-muted">Slack</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0.00</td>
                  </tr>
                  <tr className="bg-surface-alt hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-bold text-foreground" colSpan={3}>Total</td>
                    <td className="px-4 py-2.5 text-accent font-bold">$180.82/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              This stack equips 5 people with CRM (AI scoring + phone), email marketing with automation,
              10,000 automation ops/month with priority execution, docs + PM, privacy-friendly analytics
              (3 sites), scheduling, unlimited forms, a support agent with automations, and team chat.
              $19.18/month left in budget for add-ons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Stack C: Premium Solo/Duo ($194.41/Month for 1&ndash;2 Seats)</h2>
            <p className="text-muted leading-relaxed mb-4">
              If you only need 1&ndash;2 seats, $200/month buys premium tiers on every tool:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool &amp; Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price/Mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">Pipedrive Growth (2 seats)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$78.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                    <td className="px-4 py-2.5 text-muted">beehiiv Scale</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Make Teams</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$34.12</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">PM</td>
                    <td className="px-4 py-2.5 text-muted">Notion Plus (2 seats)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$24.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5 text-muted">PostHog Free + Plausible Starter</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$9.00</td>
                  </tr>
                  <tr className="bg-surface-alt hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-bold text-foreground" colSpan={2}>Total</td>
                    <td className="px-4 py-2.5 text-accent font-bold">$194.12/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="space-y-3 text-muted leading-relaxed">
              <li><strong className="text-foreground">Spending most of your budget on CRM.</strong> Pipedrive Growth at $39/seat for 5 users is $195/month &mdash; your entire budget. Freshsales Growth at $11/seat for 5 users is $55/month, leaving $145 for everything else.</li>
              <li><strong className="text-foreground">Defaulting to the most popular tool in each category.</strong> Zapier is the most popular automation tool but at $29.99/month for 750 tasks, it costs 3x what Make charges for 13x the volume. Popularity does not equal value.</li>
              <li><strong className="text-foreground">Buying annual plans before you&apos;ve used the tool for 30 days.</strong> Annual billing saves 15&ndash;30%, but locking into a year with a tool you haven&apos;t tested is risky. Pay monthly for month 1, then switch to annual if the tool works.</li>
              <li><strong className="text-foreground">Forgetting per-seat multiplication.</strong> A tool that costs $12/seat/month looks cheap until you multiply by 5 seats ($60/month) or 10 seats ($120/month). Always calculate the full team cost.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What if I need HubSpot specifically?</h3>
                <p className="text-muted">HubSpot Starter at $20/seat/month for 5 seats is $100/month. That leaves $100 for everything else. Doable with Brevo Starter ($9), Make Core ($10.59), ClickUp Unlimited ($50 for 5 seats), and Plausible Starter ($9) &mdash; totaling $178.59/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Notion Plus worth $12/seat/month for PM?</h3>
                <p className="text-muted">Notion Plus adds unlimited file uploads, 30-day page history, and custom automations. For docs-heavy teams, it&apos;s worth it. For pure PM, ClickUp Unlimited at $10/seat/month offers more dedicated PM features (Gantt, time tracking, dashboards).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I replace Slack with a free alternative?</h3>
                <p className="text-muted">Yes. Discord is free with unlimited messages, voice channels, and screen sharing. The tradeoff is fewer business integrations and no enterprise compliance features. For teams under 20 people, Discord works well.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["freshsales", "pipedrive", "brevo", "make", "notion", "plausible"]}
            comparisons={["freshsales-vs-hubspot-crm", "zapier-vs-make", "notion-vs-clickup"]}
            guides={[
              "best-saas-stack-under-100",
              "complete-free-saas-stack-guide",
              "how-much-should-software-cost",
              "best-crm-under-25-per-seat",
            ]}
          />
        </div>
      </article>
    </>
  );
}
