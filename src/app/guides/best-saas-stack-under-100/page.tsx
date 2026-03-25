import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Best SaaS Stack Under $100/Month: Every Tool Itemized (2026)",
  description:
    "A complete CRM + Email + Automation + PM + Analytics stack for under $100/month using verified prices from Freshsales Growth, Brevo Starter, Make Core, ClickUp Unlimited, and Plausible Starter.",
  alternates: { canonical: "https://sasanova.com/guides/best-saas-stack-under-100" },
};

export default function BestSaasStackUnder100Page() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Best SaaS Stack Under $100/Mo</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Stack Building
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best SaaS Stack Under $100/Month: Every Tool Itemized
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            $100/month buys you a serious software stack with real automation, proper CRM, professional
            email marketing, and analytics. Every price below comes from verified vendor pricing pages.
            No guessing, no outdated numbers.
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
            <h2 className="text-xl font-bold mb-3">The $97.59/Month Stack (3 Seats)</h2>
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
                    <td className="px-4 py-2.5 text-muted">Growth (3 seats)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$33.00</td>
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
                    <td className="px-4 py-2.5 text-muted">Core</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$10.59</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Project Management</td>
                    <td className="px-4 py-2.5 text-muted">ClickUp</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited (3 seats)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$30.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5 text-muted">PostHog</td>
                    <td className="px-4 py-2.5 text-muted">Free (1M events)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0.00</td>
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
                    <td className="px-4 py-2.5 text-muted">Free (unlimited)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0.00</td>
                  </tr>
                  <tr className="bg-surface-alt hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-bold text-foreground" colSpan={3}>Total</td>
                    <td className="px-4 py-2.5 text-accent font-bold">$91.59/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              This stack gives you: AI-powered CRM with sequences, marketing automation with A/B testing,
              10,000 automation operations/month, unlimited project management with Gantt charts, 1M analytics
              events, unlimited scheduling, and unlimited forms. All for $91.59/month.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Alternative: Solo Founder Stack at $47.59/Month</h2>
            <p className="text-muted leading-relaxed mb-4">
              If you&apos;re a solo founder and don&apos;t need 3 CRM or PM seats, the same quality stack costs far less:
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
                    <td className="px-4 py-2.5 text-muted">Freshsales Growth (1 seat)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$11.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                    <td className="px-4 py-2.5 text-muted">Brevo Starter</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$9.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Make Core</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$10.59</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">PM</td>
                    <td className="px-4 py-2.5 text-muted">ClickUp Unlimited (1 seat)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$10.00</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5 text-muted">Plausible Starter</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$9.00</td>
                  </tr>
                  <tr className="bg-surface-alt hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-bold text-foreground" colSpan={2}>Total</td>
                    <td className="px-4 py-2.5 text-accent font-bold">$49.59/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="space-y-3 text-muted leading-relaxed">
              <li><strong className="text-foreground">Starting with HubSpot Starter ($20/seat) instead of Freshsales Growth ($11/seat).</strong> HubSpot&apos;s Starter plan gives you less functionality at nearly double the per-seat price. The only reason to choose HubSpot Starter is if you plan to invest heavily in the HubSpot ecosystem long-term.</li>
              <li><strong className="text-foreground">Paying for analytics before you need it.</strong> PostHog&apos;s free tier includes 1M events. Mixpanel&apos;s free tier includes 1M events. Most businesses under $100/month in software don&apos;t need paid analytics yet.</li>
              <li><strong className="text-foreground">Picking Zapier over Make.</strong> Zapier Professional ($29.99/month) gives you 750 tasks. Make Core ($10.59/month) gives you 10,000 operations. That&apos;s $19.40/month saved that can go toward other tools.</li>
              <li><strong className="text-foreground">Ignoring annual billing discounts.</strong> With annual billing, this stack drops from $91.59/month to approximately $75&ndash;80/month, saving $140&ndash;200/year.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why Freshsales over Pipedrive for the CRM slot?</h3>
                <p className="text-muted">Freshsales Growth at $11/seat includes AI contact scoring, sequences, and built-in phone. Pipedrive Lite at $14/seat does not include AI or phone features. For a budget stack, Freshsales delivers more per dollar.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I swap Brevo for Mailchimp?</h3>
                <p className="text-muted">You can, but it costs more. Mailchimp Standard ($20/month for 500 contacts) costs more than Brevo Standard ($18/month for unlimited contacts). Brevo&apos;s per-send model is better value for most small businesses.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What about adding a help desk?</h3>
                <p className="text-muted">Freshdesk Free (2 agents, email ticketing) keeps you under $100. If you need more, Freshdesk Growth at $15/agent/month adds automations and dashboards, pushing a 3-seat stack to about $106/month.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["freshsales", "brevo", "make", "clickup", "posthog", "plausible"]}
            comparisons={["zapier-vs-make", "freshsales-vs-hubspot-crm"]}
            guides={[
              "complete-free-saas-stack-guide",
              "best-saas-stack-under-200",
              "cheapest-saas-stack-2026",
              "best-crm-under-25-per-seat",
            ]}
          />
        </div>
      </article>
    </>
  );
}
