import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Pricing Models Explained: Per-Seat, Per-Contact, Usage-Based, and Why It Matters",
  description:
    "Per-seat, per-contact, per-usage, flat rate, and freemium pricing models explained with real examples from HubSpot, Mailchimp, Zapier, Pipedrive, Salesforce, and beehiiv. Which model is cheapest at each scale.",
};

export default function SasPricingModelsExplainedPage() {
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
              SaaS Pricing Models Explained
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Decision Framework
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Pricing Models Explained: Per-Seat, Per-Contact, Usage-Based, and Why It Matters
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            The same CRM can cost $168/year or $10,680/year depending on the pricing model and
            how your usage scales. Understanding the pricing model is more important than
            understanding the price. A $14/user tool can be cheaper or more expensive than a
            $890/month platform depending entirely on your team size and usage patterns.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>17 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Five Pricing Models You&apos;ll Encounter</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Model</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">You Pay Based On</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Real Examples</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost Scales With</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Per-Seat</td>
                    <td className="px-4 py-2.5 text-muted">Number of users/seats</td>
                    <td className="px-4 py-2.5 text-muted">Pipedrive, Salesforce, HubSpot Starter, Asana, Calendly</td>
                    <td className="px-4 py-2.5 text-muted">Team size</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Per-Contact</td>
                    <td className="px-4 py-2.5 text-muted">Number of contacts/subscribers</td>
                    <td className="px-4 py-2.5 text-muted">Mailchimp, ActiveCampaign, Kit (paid tiers)</td>
                    <td className="px-4 py-2.5 text-muted">List/audience size</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Per-Usage</td>
                    <td className="px-4 py-2.5 text-muted">Volume of operations/tasks/events</td>
                    <td className="px-4 py-2.5 text-muted">Zapier (tasks), Make (operations), PostHog (events)</td>
                    <td className="px-4 py-2.5 text-muted">Automation volume / traffic</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Flat Rate</td>
                    <td className="px-4 py-2.5 text-muted">Fixed monthly fee regardless of usage</td>
                    <td className="px-4 py-2.5 text-muted">Basecamp ($349/mo), beehiiv Scale ($49/mo), HubSpot Professional ($890/mo)</td>
                    <td className="px-4 py-2.5 text-muted">Does not scale (fixed)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freemium + Upsell</td>
                    <td className="px-4 py-2.5 text-muted">Free tier with feature/limit gates to paid</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot CRM Free, beehiiv Launch, ClickUp Free, Notion Free</td>
                    <td className="px-4 py-2.5 text-muted">Feature needs and growth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Per-Seat ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Per-Seat Pricing: Predictable Until Your Team Grows</h2>
            <p className="text-muted leading-relaxed mb-4">
              Per-seat pricing means you pay a fixed amount per user per month. It is the dominant
              model in CRM and project management software. The appeal is predictability &mdash;
              your bill is team size x price per seat. The problem is that costs scale linearly
              with headcount, which punishes growing companies.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool &amp; Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per Seat/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5 Users</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10 Users</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">25 Users</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">50 Users</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Lite</td>
                    <td className="px-4 py-2.5 text-muted">$14</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$70</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$140</td>
                    <td className="px-4 py-2.5 text-muted">$350</td>
                    <td className="px-4 py-2.5 text-muted">$700</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20</td>
                    <td className="px-4 py-2.5 text-muted">$100</td>
                    <td className="px-4 py-2.5 text-muted">$200</td>
                    <td className="px-4 py-2.5 text-muted">$500</td>
                    <td className="px-4 py-2.5 text-muted">$1,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">$100</td>
                    <td className="px-4 py-2.5 text-muted">$500</td>
                    <td className="px-4 py-2.5 text-muted">$1,000</td>
                    <td className="px-4 py-2.5 text-muted">$2,500</td>
                    <td className="px-4 py-2.5 text-muted">$5,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Enterprise</td>
                    <td className="px-4 py-2.5 text-muted">$175</td>
                    <td className="px-4 py-2.5 text-muted">$875</td>
                    <td className="px-4 py-2.5 text-muted">$1,750</td>
                    <td className="px-4 py-2.5 text-muted">$4,375</td>
                    <td className="px-4 py-2.5 text-muted">$8,750</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Professional</td>
                    <td className="px-4 py-2.5 text-muted">$890 flat</td>
                    <td className="px-4 py-2.5 text-muted">$890*</td>
                    <td className="px-4 py-2.5 text-muted">$890*</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$890*</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$890*</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted italic mb-4">
              *HubSpot Professional is flat-rate ($890/month) regardless of seats for Marketing Hub.
              Sales Hub Professional adds per-seat costs. The flat rate becomes better value as team size
              grows beyond 5&ndash;10 users.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The key insight:</strong> At 5 users, Pipedrive
              Lite ($70/mo) is 92% cheaper than HubSpot Professional ($890/mo). At 50 users,
              Pipedrive Lite ($700/mo) is 21% cheaper than HubSpot Professional ($890/mo).
              HubSpot&apos;s flat rate becomes competitive only at scale. Per-seat pricing always
              favors small teams.
            </p>
          </section>

          {/* ── Per-Contact ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Per-Contact Pricing: The Model That Punishes Growth</h2>
            <p className="text-muted leading-relaxed mb-4">
              Per-contact pricing charges based on the number of subscribers or contacts in your
              database. This is the dominant model in email marketing. The danger: your costs
              increase as your audience grows, which is exactly when you should be investing
              revenue in marketing &mdash; not handing it back to the email platform.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Standard</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign Starter</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Kit Creator</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv Scale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">1,000</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49/mo (flat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-4 py-2.5 text-muted">$75/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$79/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49/mo (flat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-4 py-2.5 text-muted">$115/mo</td>
                    <td className="px-4 py-2.5 text-muted">$79/mo</td>
                    <td className="px-4 py-2.5 text-muted">$100/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49/mo (flat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                    <td className="px-4 py-2.5 text-muted">$270/mo</td>
                    <td className="px-4 py-2.5 text-muted">$149/mo</td>
                    <td className="px-4 py-2.5 text-muted">$166/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49/mo (flat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-4 py-2.5 text-muted">$410/mo</td>
                    <td className="px-4 py-2.5 text-muted">$259/mo</td>
                    <td className="px-4 py-2.5 text-muted">$283/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49/mo (flat)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The key insight:</strong> beehiiv Scale at $49/month
              is the same price whether you have 1,000 or 50,000 subscribers. At 50,000 subscribers,
              Mailchimp costs $410/month &mdash; 8.4x more &mdash; for fundamentally the same service.
              Per-contact pricing is the most expensive model at scale for the buyer.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The contact counting trap:</strong> Mailchimp
              counts unsubscribed contacts toward your limit unless you manually archive them.
              ActiveCampaign counts duplicate emails across lists. Kit counts unique subscribers.
              The same 10,000-person list can generate different contact counts on different
              platforms, changing your bill.
            </p>
          </section>

          {/* ── Per-Usage ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Per-Usage Pricing: Cheap at Low Volume, Expensive at High Volume</h2>
            <p className="text-muted leading-relaxed mb-4">
              Usage-based pricing charges by the number of operations, tasks, events, or API calls
              you consume. The pricing model rewards low usage and punishes high usage &mdash; the
              exact opposite of what scaling businesses need.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Unit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">How They Count</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Effective Cost per Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Task</td>
                    <td className="px-4 py-2.5 text-muted">Each action step (trigger not counted)</td>
                    <td className="px-4 py-2.5 text-muted">$0.014&ndash;$0.04 per task</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Operation</td>
                    <td className="px-4 py-2.5 text-muted">Each module including trigger</td>
                    <td className="px-4 py-2.5 text-muted">$0.001&ndash;$0.003 per op</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Execution</td>
                    <td className="px-4 py-2.5 text-muted">One complete workflow run</td>
                    <td className="px-4 py-2.5 text-muted">$0.005&ndash;$0.01 per execution</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">PostHog</td>
                    <td className="px-4 py-2.5 text-muted">Event</td>
                    <td className="px-4 py-2.5 text-muted">Each tracked user action</td>
                    <td className="px-4 py-2.5 text-muted">Free under 1M, then $0.000248/event</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The key insight:</strong> A 5-step workflow
              running 1,000 times costs 4,000 Zapier tasks but only 1,000 n8n executions. The
              same workload, different pricing units, vastly different bills. When evaluating
              usage-based tools, always normalize to your actual workflow complexity.
            </p>
          </section>

          {/* ── Flat Rate ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Flat Rate Pricing: Expensive at First, Cheap at Scale</h2>
            <p className="text-muted leading-relaxed mb-4">
              Flat rate means you pay one price regardless of users, contacts, or usage. This
              model is rare but powerful at scale. The downside: it often feels expensive for
              small teams or solo users.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Basecamp</strong> charges $349/month for unlimited
              users. For a 3-person team, that is $116/user &mdash; expensive. For a 30-person team,
              that is $11.63/user &mdash; cheaper than any per-seat competitor.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">beehiiv Scale</strong> charges $49/month for
              unlimited subscribers. At 1,000 subscribers, this feels expensive compared to
              free alternatives. At 50,000 subscribers, it saves $361/month vs Mailchimp Standard.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">HubSpot Professional</strong> (Marketing Hub) is
              $890/month flat. For a 3-person marketing team, it is astronomical. For a 20-person
              team with 50,000 contacts, the per-user-per-contact cost is competitive with
              ActiveCampaign + a separate CRM.
            </p>
          </section>

          {/* ── Freemium ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Freemium with Upsell: Free Until It Isn&apos;t</h2>
            <p className="text-muted leading-relaxed mb-4">
              Freemium tools give you a permanent free tier with restrictions designed to nudge
              you toward paying. The model works well for buyers when the free tier is genuinely
              useful (beehiiv, Notion, Cal.com) and poorly when the free tier is a glorified demo
              (Mailchimp, Calendly).
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier Quality</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Upgrade Trigger</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price Jump</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot CRM</td>
                    <td className="px-4 py-2.5 text-accent">Strong</td>
                    <td className="px-4 py-2.5 text-muted">Need automation or branding removal</td>
                    <td className="px-4 py-2.5 text-muted">$0 &rarr; $20/user/mo (Starter) &rarr; $890/mo (Professional)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-accent">Strong</td>
                    <td className="px-4 py-2.5 text-muted">Want monetization or 2,500+ subs</td>
                    <td className="px-4 py-2.5 text-muted">$0 &rarr; $49/mo (Scale)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-accent">Strong</td>
                    <td className="px-4 py-2.5 text-muted">Need storage (&gt;60MB) or integrations</td>
                    <td className="px-4 py-2.5 text-muted">$0 &rarr; $10/user/mo (Unlimited)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Excellent</td>
                    <td className="px-4 py-2.5 text-muted">Need 30-day history or team features</td>
                    <td className="px-4 py-2.5 text-muted">$0 &rarr; $12/user/mo (Plus)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">Weak (250 contacts)</td>
                    <td className="px-4 py-2.5 text-muted">Hit 251 contacts (immediately)</td>
                    <td className="px-4 py-2.5 text-muted">$0 &rarr; $13/mo (Essentials)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Calendly</td>
                    <td className="px-4 py-2.5 text-muted">Weak (1 event type)</td>
                    <td className="px-4 py-2.5 text-muted">Need 2+ event types (immediately)</td>
                    <td className="px-4 py-2.5 text-muted">$0 &rarr; $12/user/mo (Standard)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Which is cheapest ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Which Pricing Model Is Cheapest at Each Scale</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Your Scale</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest Model</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Solo / 1&ndash;2 people</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Freemium or Per-Seat</td>
                    <td className="px-4 py-2.5 text-muted">Free tiers cover most needs. Per-seat is cheap at 1&ndash;2 users.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Small team (3&ndash;10)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Per-Seat (budget CRM)</td>
                    <td className="px-4 py-2.5 text-muted">Pipedrive at $14/seat beats flat-rate tools that cost $300+/mo.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Growing team (10&ndash;50)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Flat Rate</td>
                    <td className="px-4 py-2.5 text-muted">Flat rate tools like Basecamp ($349/mo) beat per-seat at 25+ users.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Large list (10K+ contacts)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Flat Rate (beehiiv)</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo flat beats per-contact pricing that reaches $100&ndash;400/mo.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">High automation volume</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Self-Hosted (n8n)</td>
                    <td className="px-4 py-2.5 text-muted">$10/mo VPS for unlimited executions beats any usage-based tool.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Secretly expensive ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Pricing Model That&apos;s Secretly Most Expensive</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Per-contact pricing is the most expensive model
              for the buyer over time.</strong> It uniquely penalizes growth &mdash; the thing every
              business wants. Your email list growing from 5,000 to 50,000 subscribers should be
              a sign of success. On Mailchimp, it means your bill grows from $75/month to $410/month.
              On beehiiv (flat rate), your bill stays at $49/month.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Per-seat pricing is the second most expensive for growing companies, but at least you
              can control headcount. You cannot control your contact list growing organically without
              actively deleting contacts, which defeats the purpose of email marketing.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The cheapest long-term strategy:</strong> Choose
              flat-rate or usage-based tools with generous tiers early. Lock in flat-rate email
              (beehiiv) and flat-rate PM (Basecamp or Notion) before your usage scales. Switch
              to flat-rate or self-hosted automation before you hit 5,000+ tasks/month on Zapier.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Comparing monthly prices without comparing pricing models.</strong> A $49/month flat-rate tool and a $20/month per-contact tool are not comparable until you project costs at your expected scale in 12 months.</li>
              <li><strong className="text-foreground">Ignoring how the tool counts usage.</strong> Zapier tasks, Make operations, and n8n executions are different units. A 5-step workflow generates 4 Zapier tasks, 5 Make operations, or 1 n8n execution per run. Always normalize before comparing.</li>
              <li><strong className="text-foreground">Choosing per-contact tools for growing lists.</strong> If you expect your email list to grow 5x in the next year, per-contact pricing means your bill grows 3&ndash;5x too. Flat-rate tools eliminate this scaling tax.</li>
              <li><strong className="text-foreground">Ignoring the first paid tier jump.</strong> HubSpot goes from $0 to $20/seat (reasonable) to $890/month (shocking). The pricing model appears per-seat but transitions to flat-rate at the Professional tier. Always map the full pricing curve, not just the entry point.</li>
              <li><strong className="text-foreground">Assuming annual contracts save money.</strong> Annual billing saves 15&ndash;25%, but locks you in for 12 months. If you switch tools at month 6, you lose 6 months of prepaid subscription. Only commit annually after 2+ months of confirmed fit.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which pricing model is best for startups?</h3>
                <p className="text-muted">Freemium to start, then flat rate or low per-seat as you grow. Use free tiers for months 1&ndash;6, then switch to the cheapest per-seat (Pipedrive at $14/user) or flat rate (beehiiv at $49/mo) when you outgrow free. Avoid per-contact tools until you know your list will stay small.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why do email tools charge per contact instead of per email?</h3>
                <p className="text-muted">Because it generates more revenue. Per-email pricing (like Brevo) charges for what you use. Per-contact pricing charges for your potential usage. A 50,000-contact list costs the same on Mailchimp whether you send 1 email or 50 emails per month. The vendor profits from unused capacity.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is per-seat pricing going away?</h3>
                <p className="text-muted">Not entirely, but it is under pressure. Basecamp, beehiiv, and some newer tools have challenged it with flat-rate models. AI features are introducing usage-based components (AI credits) into previously per-seat tools. Expect hybrid models (per-seat base + usage-based AI) to become common.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I calculate true cost of a SaaS tool?</h3>
                <p className="text-muted">Multiply the per-unit cost by your projected usage in 12 months, not today. For per-seat: seats x price x 12. For per-contact: projected list size in 12 months x monthly rate at that tier x 12. For per-usage: projected monthly volume x unit cost x 12. Always project forward, not at current usage.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce", "mailchimp", "beehiiv", "zapier", "make", "n8n"]}
            comparisons={["hubspot-crm-vs-pipedrive", "mailchimp-vs-beehiiv", "zapier-vs-make"]}
            guides={[
              "saas-pricing-changes-2026",
              "cheapest-saas-stack-2026",
              "saas-pricing-traps-2026",
              "software-switching-cost-guide",
              "automation-pricing-compared",
              "email-marketing-annual-cost-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
