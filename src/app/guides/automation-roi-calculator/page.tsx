import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Automation ROI Calculator: Hours Saved vs Subscription Cost",
  description:
    "Calculate your automation ROI using hours saved per workflow, hourly rate, and exact Zapier, Make, and n8n pricing. Break-even analysis for every volume level.",
};

export default function AutomationRoiCalculatorPage() {
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
              Automation ROI Calculator
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
            Automation ROI Calculator: Hours Saved vs Subscription Cost
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Every automated workflow replaces manual work. This guide calculates the exact
            break-even: how many hours of manual work must each automation replace to justify
            the platform cost at Zapier, Make, and n8n pricing?
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>11 min read</span>
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
            <h2 className="text-xl font-bold mb-3">The Automation ROI Formula</h2>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm font-mono text-foreground">
                Automation ROI = (Hours saved per month &times; Hourly rate &times; 12) &minus; Platform annual cost
              </p>
              <p className="text-sm text-muted mt-2">
                Break-even hours/month = Platform monthly cost &divide; Your hourly rate
              </p>
            </div>
          </section>

          {/* Platform Costs */}
          <section>
            <h2 className="text-xl font-bold mb-3">Exact Platform Costs</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier Professional</td>
                    <td className="px-4 py-2.5 text-muted">750 tasks/mo</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">$359.88/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier Team</td>
                    <td className="px-4 py-2.5 text-muted">2,000 tasks/mo</td>
                    <td className="px-4 py-2.5 text-muted">$103.50/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,242/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make Core</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">$127.08/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud Starter</td>
                    <td className="px-4 py-2.5 text-muted">2,500 exec/mo</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">$240/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$10/mo hosting</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$120/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Break-Even Hours */}
          <section>
            <h2 className="text-xl font-bold mb-3">Break-Even: Hours Saved Per Month Needed</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Your Hourly Rate</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Pro ($29.99)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make Core ($10.59)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud ($20)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$25/hr</td>
                    <td className="px-4 py-2.5 text-muted">1.2 hours/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.4 hours/mo</td>
                    <td className="px-4 py-2.5 text-muted">0.8 hours/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$50/hr</td>
                    <td className="px-4 py-2.5 text-muted">0.6 hours/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.2 hours/mo</td>
                    <td className="px-4 py-2.5 text-muted">0.4 hours/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$100/hr</td>
                    <td className="px-4 py-2.5 text-muted">0.3 hours/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.1 hours/mo</td>
                    <td className="px-4 py-2.5 text-muted">0.2 hours/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$150/hr</td>
                    <td className="px-4 py-2.5 text-muted">0.2 hours/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0.07 hours/mo</td>
                    <td className="px-4 py-2.5 text-muted">0.13 hours/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Key Insight</p>
              <p className="text-sm text-muted">
                At $50/hr, Make Core pays for itself if it saves just 12 minutes per month.
                Even Zapier Professional breaks even at 36 minutes/month. A single automated
                workflow that saves 5 minutes per day (like auto-forwarding leads to your CRM)
                saves ~2.5 hours/month &mdash; delivering 4&ndash;25x ROI depending on the
                platform.
              </p>
            </div>
          </section>

          {/* Real World Examples */}
          <section>
            <h2 className="text-xl font-bold mb-3">Real-World Automation ROI Examples</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Automation</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Manual Time Saved</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Savings @ $50/hr</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Form submission &rarr; CRM + email + Slack</td>
                    <td className="px-4 py-2.5 text-muted">3 min/lead &times; 100 leads</td>
                    <td className="px-4 py-2.5 text-muted">$250/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Invoice creation from deal won</td>
                    <td className="px-4 py-2.5 text-muted">10 min/invoice &times; 20 deals</td>
                    <td className="px-4 py-2.5 text-muted">$167/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Weekly report compilation</td>
                    <td className="px-4 py-2.5 text-muted">2 hours/week</td>
                    <td className="px-4 py-2.5 text-muted">$400/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Social media cross-posting</td>
                    <td className="px-4 py-2.5 text-muted">15 min/post &times; 20 posts</td>
                    <td className="px-4 py-2.5 text-muted">$250/mo</td>
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
                  Should I factor in setup time?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. A Zapier workflow takes 15&ndash;30 minutes to set up. A Make scenario
                  takes 30&ndash;60 minutes. n8n workflows take 30&ndash;90 minutes. Factor setup
                  time as a one-time cost. Most workflows pay back their setup time within the
                  first month of operation.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What about the value of reduced errors?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Manual processes introduce errors: wrong data entry, forgotten follow-ups, missed
                  deadlines. These errors have real costs (lost deals, customer churn, rework time).
                  While hard to quantify, error reduction often doubles the effective ROI of automation.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  When does n8n self-hosting make more sense than cloud?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Self-hosting makes sense when: you have technical skill to maintain it, you need
                  unlimited executions, or you need data to stay on your own servers. At high
                  volumes (10,000+ executions/month), self-hosting at ~$10/mo vs n8n Cloud Pro at
                  $50/mo saves $480/year.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            guides={["automation-cost-over-3-years", "how-to-choose-automation-tool", "automation-zapier-vs-make-vs-n8n"]}
          />
        </div>
      </article>
    </>
  );
}
