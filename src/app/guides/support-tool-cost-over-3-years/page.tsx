import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "3-Year Support Tool Cost as Your Team Grows: Zendesk vs Freshdesk vs Intercom",
  description:
    "Exact 3-year cost projection for Zendesk, Freshdesk, and Intercom as your support team grows from 2 to 5 to 10 agents. Real vendor pricing, no estimates.",
};

export default function SupportToolCostOver3YearsPage() {
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
              3-Year Support Tool Cost
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
            3-Year Support Tool Cost as Your Team Grows: Zendesk vs Freshdesk vs Intercom
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Support tools charge per agent. As your team grows from 2 agents (Year 1)
            to 5 (Year 2) to 10 (Year 3), the cost difference between platforms becomes
            thousands of dollars. Plus Intercom&apos;s AI resolution pricing adds an
            unpredictable variable.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
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
            <h2 className="text-xl font-bold mb-3">Plans Used in This Analysis</h2>
            <p className="text-muted leading-relaxed mb-4">
              We compare the entry-to-mid tier for each &mdash; the plans most growing
              support teams start on. Zendesk has two product lines: standalone Support
              and full Suite.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zendesk</td>
                    <td className="px-4 py-2.5 text-muted">Suite Team</td>
                    <td className="px-4 py-2.5 text-muted">$69/agent/mo</td>
                    <td className="px-4 py-2.5 text-muted">Omnichannel, help center, AI agents</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">$15/agent/mo</td>
                    <td className="px-4 py-2.5 text-muted">Automations, dashboards, branded portal</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Intercom</td>
                    <td className="px-4 py-2.5 text-muted">Essential</td>
                    <td className="px-4 py-2.5 text-muted">$39/seat/mo + $0.99/AI resolution</td>
                    <td className="px-4 py-2.5 text-muted">Fin AI, Messenger, shared inbox, ticketing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 1: 2 agents */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 1: 2 Agents</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 2 agents, Freshdesk Free (up to 2 agents with email ticketing and knowledge
              base) is actually free. If you need more than basic email ticketing, Growth at
              $15/agent is still remarkably cheap. Zendesk and Intercom have no free tiers.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zendesk Suite Team</td>
                    <td className="px-4 py-2.5 text-muted">2 &times; $69 = $138/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,656/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk Growth</td>
                    <td className="px-4 py-2.5 text-muted">2 &times; $15 = $30/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$360/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Intercom Essential</td>
                    <td className="px-4 py-2.5 text-muted">2 &times; $39 = $78/mo + AI costs</td>
                    <td className="px-4 py-2.5 text-muted">$936/yr + AI resolution fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 2: 5 agents */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 2: 5 Agents</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 5 agents, Freshdesk Free no longer works (limited to 2 agents). Growth at
              $15/agent is still the cheapest paid option by far. Intercom&apos;s Fin AI
              resolution costs add a variable element &mdash; if AI handles 500 tickets/month,
              that&apos;s an additional $495/month.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (seats only)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual (seats only)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zendesk Suite Team</td>
                    <td className="px-4 py-2.5 text-muted">5 &times; $69 = $345/mo</td>
                    <td className="px-4 py-2.5 text-muted">$4,140/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk Growth</td>
                    <td className="px-4 py-2.5 text-muted">5 &times; $15 = $75/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$900/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Intercom Essential</td>
                    <td className="px-4 py-2.5 text-muted">5 &times; $39 = $195/mo + AI</td>
                    <td className="px-4 py-2.5 text-muted">$2,340/yr + AI costs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 3: 10 agents */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 3: 10 Agents</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 10 agents, Zendesk Suite Team costs $8,280/year just for seats. Many teams
              at this size also consider upgrading to Suite Professional ($149/agent) for
              skills-based routing and custom analytics &mdash; pushing the annual cost
              to $17,880/year.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (seats)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual (seats)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zendesk Suite Team</td>
                    <td className="px-4 py-2.5 text-muted">10 &times; $69 = $690/mo</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">$8,280/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk Growth</td>
                    <td className="px-4 py-2.5 text-muted">10 &times; $15 = $150/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$1,800/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk Pro</td>
                    <td className="px-4 py-2.5 text-muted">10 &times; $59 = $590/mo</td>
                    <td className="px-4 py-2.5 text-muted">$7,080/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Intercom Essential</td>
                    <td className="px-4 py-2.5 text-muted">10 &times; $39 = $390/mo + AI</td>
                    <td className="px-4 py-2.5 text-muted">$4,680/yr + AI costs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3-Year Total */}
          <section>
            <h2 className="text-xl font-bold mb-3">3-Year Total Cost Summary</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 1</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 2</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 3</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">3-Year Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zendesk Suite Team</td>
                    <td className="px-4 py-2.5 text-muted">$1,656</td>
                    <td className="px-4 py-2.5 text-muted">$4,140</td>
                    <td className="px-4 py-2.5 text-muted">$8,280</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">$14,076</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk (Free &rarr; Growth)</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">$900</td>
                    <td className="px-4 py-2.5 text-muted">$1,800</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$2,700</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Intercom Essential</td>
                    <td className="px-4 py-2.5 text-muted">$936</td>
                    <td className="px-4 py-2.5 text-muted">$2,340</td>
                    <td className="px-4 py-2.5 text-muted">$4,680</td>
                    <td className="px-4 py-2.5 text-muted">$7,956 + AI fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Key Takeaway</p>
              <p className="text-sm text-muted">
                Freshdesk saves $11,376 vs Zendesk and $5,256+ vs Intercom over 3 years.
                Zendesk&apos;s $69/agent pricing makes it 4.6x more expensive than Freshdesk
                Growth&apos;s $15/agent. Intercom sits in between on seat costs but AI resolution
                fees ($0.99/resolution) make total costs unpredictable.
              </p>
            </div>
          </section>

          {/* Intercom AI Warning */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Intercom AI Cost Variable</h2>
            <p className="text-muted leading-relaxed mb-4">
              Intercom&apos;s Fin AI Agent charges $0.99 per resolution. If Fin handles
              500 resolutions/month, that&apos;s $495/month or $5,940/year on top of seat costs.
              At 1,000 resolutions/month, it&apos;s $990/month or $11,880/year. This can make
              Intercom the most expensive option despite lower per-seat prices.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">AI Resolutions/Month</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly AI Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual AI Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">+ 10 Seats Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">100</td>
                    <td className="px-4 py-2.5 text-muted">$99</td>
                    <td className="px-4 py-2.5 text-muted">$1,188</td>
                    <td className="px-4 py-2.5 text-muted">$5,868</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">500</td>
                    <td className="px-4 py-2.5 text-muted">$495</td>
                    <td className="px-4 py-2.5 text-muted">$5,940</td>
                    <td className="px-4 py-2.5 text-muted">$10,620</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">1,000</td>
                    <td className="px-4 py-2.5 text-muted">$990</td>
                    <td className="px-4 py-2.5 text-muted">$11,880</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">$16,560</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can Freshdesk Free really support a 2-person team?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. Freshdesk Free includes email ticketing, knowledge base, and basic reporting
                  for up to 2 agents. It&apos;s genuinely usable for a small support operation.
                  The main limitation is no automations or branded portal.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  When does Zendesk justify its premium over Freshdesk?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Zendesk&apos;s ecosystem (1,500+ marketplace apps), mature analytics, and
                  enterprise compliance (FedRAMP, HIPAA) justify the cost for companies with
                  complex support operations, regulatory requirements, or deep integration needs.
                  For straightforward support, Freshdesk delivers 80% of the value at 22% of the cost.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is Intercom&apos;s AI worth the per-resolution cost?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  If Fin AI resolves tickets that would otherwise require agent time, and your
                  agents cost $25+/hour, then $0.99/resolution is excellent value for straightforward
                  queries. The risk is unpredictable costs &mdash; monitor Fin&apos;s resolution
                  volume closely and set spending caps.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["zendesk", "freshdesk", "intercom"]}
            comparisons={["zendesk-vs-freshdesk", "zendesk-vs-intercom"]}
            guides={["customer-support-stack", "customer-success-tools"]}
          />
        </div>
      </article>
    </>
  );
}
