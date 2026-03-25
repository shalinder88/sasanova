import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Support Tool ROI Calculator: Ticket Volume x Resolution Time vs Agent + Tool Cost",
  description:
    "Calculate your support tool ROI using ticket volume, resolution time, agent costs, and exact Zendesk, Freshdesk, and Intercom pricing. Break-even analysis.",
};

export default function SupportToolRoiCalculatorPage() {
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
              Support Tool ROI Calculator
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
            Support Tool ROI Calculator: Ticket Volume &times; Resolution Time vs Tool Cost
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            A support tool&apos;s ROI comes from reducing resolution time, enabling self-service,
            and preventing agent burnout. This guide calculates the exact value of faster
            resolution and self-service deflection against Zendesk, Freshdesk, and Intercom costs.
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

          {/* The Formula */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Support Tool ROI Formula</h2>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm font-mono text-foreground">
                Support ROI = (Time saved per ticket &times; Tickets/month &times; Agent hourly rate &times; 12)
                &minus; (Tool annual cost + Agent annual cost)
              </p>
              <p className="text-sm text-muted mt-2">
                Time saved = (Old resolution time &minus; New resolution time) per ticket.
                Self-service deflection saves 100% of agent time per deflected ticket.
              </p>
            </div>
          </section>

          {/* Tool + Agent Costs */}
          <section>
            <h2 className="text-xl font-bold mb-3">Total Cost: Tool + Agents (5-Agent Team)</h2>
            <p className="text-muted leading-relaxed mb-4">
              Support tool cost is just one part. Agent salary is the dominant cost. A support
              agent at $20/hr fully loaded costs ~$41,600/year. The tool cost is a small fraction.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool Cost (5 agents/yr)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Agent Cost (5 agents/yr)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Total Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zendesk Suite Team ($69/agent)</td>
                    <td className="px-4 py-2.5 text-muted">$4,140</td>
                    <td className="px-4 py-2.5 text-muted">$208,000</td>
                    <td className="px-4 py-2.5 text-muted">$212,140</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk Growth ($15/agent)</td>
                    <td className="px-4 py-2.5 text-muted">$900</td>
                    <td className="px-4 py-2.5 text-muted">$208,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$208,900</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Intercom Essential ($39/seat)</td>
                    <td className="px-4 py-2.5 text-muted">$2,340 + AI costs</td>
                    <td className="px-4 py-2.5 text-muted">$208,000</td>
                    <td className="px-4 py-2.5 text-muted">$210,340+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Perspective</p>
              <p className="text-sm text-muted">
                Agent costs dwarf tool costs. Even Zendesk at $4,140/year is only 2% of total
                support costs. The real ROI question isn&apos;t tool price &mdash; it&apos;s
                whether the tool makes your agents more productive.
              </p>
            </div>
          </section>

          {/* Resolution Time ROI */}
          <section>
            <h2 className="text-xl font-bold mb-3">ROI From Faster Resolution Time</h2>
            <p className="text-muted leading-relaxed mb-4">
              If a support tool reduces average resolution time by even 5 minutes per ticket,
              the savings compound across hundreds of tickets per month.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tickets/Month</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Time Saved/Ticket</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Hours Saved/Month</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Value @ $20/hr</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">500</td>
                    <td className="px-4 py-2.5 text-muted">5 minutes</td>
                    <td className="px-4 py-2.5 text-muted">41.7 hours</td>
                    <td className="px-4 py-2.5 text-muted">$10,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">500</td>
                    <td className="px-4 py-2.5 text-muted">10 minutes</td>
                    <td className="px-4 py-2.5 text-muted">83.3 hours</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$20,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">1,000</td>
                    <td className="px-4 py-2.5 text-muted">5 minutes</td>
                    <td className="px-4 py-2.5 text-muted">83.3 hours</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$20,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">2,000</td>
                    <td className="px-4 py-2.5 text-muted">5 minutes</td>
                    <td className="px-4 py-2.5 text-muted">166.7 hours</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$40,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Self-Service Deflection */}
          <section>
            <h2 className="text-xl font-bold mb-3">ROI From Self-Service Ticket Deflection</h2>
            <p className="text-muted leading-relaxed mb-4">
              A knowledge base or AI chatbot that deflects tickets entirely saves the full
              resolution time per ticket. Industry benchmarks suggest a good knowledge base
              deflects 20&ndash;40% of incoming tickets.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tickets/Month</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Deflection Rate</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tickets Deflected</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Savings (@ 15 min/ticket, $20/hr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">500</td>
                    <td className="px-4 py-2.5 text-muted">20%</td>
                    <td className="px-4 py-2.5 text-muted">100/mo</td>
                    <td className="px-4 py-2.5 text-muted">$6,000/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">500</td>
                    <td className="px-4 py-2.5 text-muted">40%</td>
                    <td className="px-4 py-2.5 text-muted">200/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$12,000/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">1,000</td>
                    <td className="px-4 py-2.5 text-muted">30%</td>
                    <td className="px-4 py-2.5 text-muted">300/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$18,000/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Intercom Fin AI Consideration</p>
              <p className="text-sm text-muted">
                Intercom&apos;s Fin AI costs $0.99/resolution. If Fin resolves 300 tickets/month,
                that&apos;s $297/month ($3,564/year). But the 300 deflected tickets save 75 agent-hours
                ($1,500/month, $18,000/year). Net ROI: $14,436/year. Fin AI pays for itself 5x over
                if it achieves a reasonable deflection rate.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  How do I measure time saved per ticket?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Track average handle time (AHT) before and after implementing the tool. Most
                  helpdesk platforms report AHT. Features like canned responses, knowledge base
                  suggestions, and macros typically reduce AHT by 5&ndash;15 minutes per ticket.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is Freshdesk Growth good enough, or do I need Zendesk?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Freshdesk Growth at $15/agent delivers ticketing, automations, and dashboards
                  that cover 80% of what most teams need. Zendesk at $69/agent adds omnichannel
                  messaging, a larger app marketplace, and more mature analytics. The $54/agent
                  premium is worth it only if you need those specific capabilities.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What about the ROI from reduced customer churn?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Faster, better support reduces churn. If your average customer is worth
                  $1,000/year and better support reduces churn by 2% on a 1,000-customer base,
                  that&apos;s $20,000/year in retained revenue &mdash; far exceeding any support
                  tool cost. This is the hidden ROI that most calculators miss.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["zendesk", "freshdesk", "intercom"]}
            guides={["support-tool-cost-over-3-years", "customer-support-stack", "customer-success-tools"]}
          />
        </div>
      </article>
    </>
  );
}
