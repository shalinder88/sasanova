import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Help Desk Pricing Compared 2026: All Support Tools at 3/5/10 Agents",
  description:
    "Side-by-side pricing for Zendesk, Intercom, Freshdesk, Help Scout, and Crisp at 3, 5, and 10 agents. Exact plan names, per-agent costs, and hidden fees.",
};

export default function HelpDeskPricingCompared2026Page() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Help Desk Pricing 2026</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Industry Pricing Report
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Help Desk Pricing Compared: Every Tool at 3/5/10 Agents (2026)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Help desk pricing ranges from $0 to $149/agent/month. This report calculates the
            real monthly cost at three common team sizes, including per-seat pricing, flat-rate
            alternatives, and AI add-on costs.
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
            <h2 className="text-xl font-bold mb-4">Monthly Cost by Team Size (Recommended Plans)</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool (Plan)</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">3 agents</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">5 agents</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">10 agents</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Zendesk Suite Team<br /><span className="text-xs text-muted">$69/agent/mo</span></td>
                    <td className="px-3 py-2.5 text-muted text-right">$207</td>
                    <td className="px-3 py-2.5 text-muted text-right">$345</td>
                    <td className="px-3 py-2.5 text-muted text-right">$690</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Intercom Essential<br /><span className="text-xs text-muted">$39/seat/mo + AI costs</span></td>
                    <td className="px-3 py-2.5 text-muted text-right">$117+</td>
                    <td className="px-3 py-2.5 text-muted text-right">$195+</td>
                    <td className="px-3 py-2.5 text-muted text-right">$390+</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Freshdesk Growth<br /><span className="text-xs text-muted">$15/agent/mo</span></td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$45</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$75</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$150</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Help Scout Standard<br /><span className="text-xs text-muted">$55/mo flat (unlimited users)</span></td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$55</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$55</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$55</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Crisp Essentials<br /><span className="text-xs text-muted">$95/mo flat (up to 10 seats)</span></td>
                    <td className="px-3 py-2.5 text-muted text-right">$95</td>
                    <td className="px-3 py-2.5 text-muted text-right">$95</td>
                    <td className="px-3 py-2.5 text-muted text-right">$95</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Free Tiers */}
          <section>
            <h2 className="text-xl font-bold mb-4">Free Tier Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zendesk</td>
                    <td className="px-4 py-2.5 text-muted">No free tier (Support Team starts at $25/agent/mo)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Intercom</td>
                    <td className="px-4 py-2.5 text-muted">No free tier (14-day trial)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free: 2 agents, email ticketing, knowledge base</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Help Scout</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free: 50 contacts/mo, unlimited users, shared inbox</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Crisp</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free: 2 seats, chat widget, shared inbox</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Insights */}
          <section>
            <h2 className="text-xl font-bold mb-4">Key Pricing Insights</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-foreground">Help Scout wins at every team size</strong> with flat-rate pricing at $55/mo for unlimited users. The caveat: it limits contacts/month (100 on Standard), so high-volume teams pay more.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-foreground">Freshdesk Growth is the cheapest per-agent</strong> at $15/agent/mo. At 10 agents, it costs $150/mo vs Zendesk&apos;s $690/mo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-foreground">Intercom&apos;s AI costs are unpredictable.</strong> Fin AI resolutions cost $0.99 each. A team resolving 500 tickets/mo via AI adds $495/mo on top of seat costs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-foreground">Crisp&apos;s flat-rate model</strong> ($95/mo for 10 seats) beats per-seat pricing above 3 agents for most competitors.</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Which help desk has the best free plan?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Freshdesk Free gives 2 agents with email ticketing and a knowledge base. Help Scout Free
                  gives unlimited users but limits you to 50 contacts/month. For very small teams,
                  Freshdesk Free is more practical.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  When does Zendesk make sense?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Zendesk makes sense at 20+ agents when you need its 1,500+ app marketplace, advanced
                  routing, and enterprise compliance (HIPAA on Suite Professional). For teams under 10,
                  Freshdesk or Crisp deliver similar value at a fraction of the cost.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["zendesk", "intercom", "freshdesk", "help-scout", "crisp"]}
            comparisons={["zendesk-vs-freshdesk", "intercom-vs-crisp", "freshdesk-vs-help-scout"]}
            guides={["customer-support-stack"]}
          />
        </div>
      </article>
    </>
  );
}
