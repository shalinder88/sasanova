import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Zapier Lock-In Analysis: Zap Rebuild Effort, Integration Dependencies, and Exit Costs",
  description:
    "Complete Zapier vendor lock-in analysis. Zap rebuild effort, integration dependencies, exit timeline, and exact Make and n8n pricing as alternatives.",
};

export default function ZapierLockInAnalysisPage() {
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
              Zapier Lock-In Analysis
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Vendor Lock-In Analysis
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Zapier Lock-In Analysis: Zap Rebuild Effort and Integration Dependencies
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Zapier&apos;s ease of use creates a different kind of lock-in: dozens of Zaps
            that nobody documented, connected to apps that may or may not exist on other
            platforms. This guide maps the real effort to migrate from Zapier to Make or n8n.
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

          {/* What Exports */}
          <section>
            <h2 className="text-xl font-bold mb-3">What You Can Export From Zapier</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Data</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Export Method</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zap configurations</td>
                    <td className="px-4 py-2.5 text-muted">Zap export (JSON-like)</td>
                    <td className="px-4 py-2.5 text-yellow-600 font-semibold">Readable but not importable elsewhere</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Task history</td>
                    <td className="px-4 py-2.5 text-muted">Limited API access</td>
                    <td className="px-4 py-2.5 text-yellow-600 font-semibold">Recent history only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Tables data</td>
                    <td className="px-4 py-2.5 text-muted">CSV export</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Full export</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Connected app credentials</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Must reconnect each app</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Interfaces (forms/pages)</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Must rebuild</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Lock-In Points */}
          <section>
            <h2 className="text-xl font-bold mb-3">What Actually Locks You In</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Zap Rebuild Effort</p>
                <p className="text-sm text-muted">
                  Each Zap must be manually recreated in the new platform. A simple 2-step Zap
                  takes 15&ndash;30 minutes to rebuild. A complex multi-step Zap with Paths
                  (conditional logic), Formatter steps, and error handling takes 1&ndash;3 hours.
                  If you have 20 Zaps, budget 20&ndash;60 hours of rebuild work.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Integration Availability</p>
                <p className="text-sm text-muted">
                  Zapier supports 7,000+ apps. Make supports 1,800+. n8n supports 400+ built-in
                  nodes. If your Zaps use niche apps only available on Zapier, you need webhook
                  workarounds or custom API connections on the new platform.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Zapier Tables and Interfaces</p>
                <p className="text-sm text-muted">
                  If you use Zapier Tables (database) and Interfaces (forms/pages), these are
                  Zapier-only features with no direct equivalent on Make or n8n. Tables data can
                  be exported as CSV, but Interfaces must be completely rebuilt using other tools.
                </p>
              </div>
            </div>
          </section>

          {/* Alternative Pricing */}
          <section>
            <h2 className="text-xl font-bold mb-3">Alternative Platform Pricing</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make Core</td>
                    <td className="px-4 py-2.5 text-muted">Core</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo, unlimited scenarios</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make Pro</td>
                    <td className="px-4 py-2.5 text-muted">Pro</td>
                    <td className="px-4 py-2.5 text-muted">$18.82/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo, custom functions, priority</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud Starter</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">2,500 executions/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud Pro</td>
                    <td className="px-4 py-2.5 text-muted">Pro</td>
                    <td className="px-4 py-2.5 text-muted">$50/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 executions/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                    <td className="px-4 py-2.5 text-muted">Community</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited (+ hosting costs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Annual savings comparison</p>
              <p className="text-sm text-muted">
                Zapier Team at $103.50/mo = $1,242/yr. Make Core at $10.59/mo = $127.08/yr.
                Annual savings: $1,114.92. n8n self-hosted: saves even more at ~$60&ndash;$120/yr
                for VPS hosting only.
              </p>
            </div>
          </section>

          {/* Rebuild Effort Calculator */}
          <section>
            <h2 className="text-xl font-bold mb-3">Zap Rebuild Effort Estimator</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zap Complexity</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Rebuild Time</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Simple (2 steps)</td>
                    <td className="px-4 py-2.5 text-muted">15&ndash;30 minutes</td>
                    <td className="px-4 py-2.5 text-muted">New form submission &rarr; Slack notification</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Medium (3&ndash;5 steps)</td>
                    <td className="px-4 py-2.5 text-muted">30&ndash;90 minutes</td>
                    <td className="px-4 py-2.5 text-muted">New lead &rarr; enrich &rarr; CRM &rarr; email &rarr; Slack</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Complex (6+ steps with Paths)</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;3 hours</td>
                    <td className="px-4 py-2.5 text-muted">Multi-branch logic with error handling</td>
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
                  Can I run Zapier and Make in parallel during migration?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes, and this is recommended. Keep your Zapier Zaps running while you rebuild on
                  Make or n8n. Once the new workflows are tested, disable the Zapier Zaps one by one.
                  Budget 1&ndash;2 months of overlap. Your Zapier costs double during this period.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What if an app I use only exists on Zapier?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Make and n8n both support webhooks and custom HTTP requests. If the app has an
                  API, you can connect it manually without a pre-built integration. This takes more
                  setup (30&ndash;60 minutes per app) but is always possible.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is the learning curve for Make or n8n steep?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Make has a visual flowchart interface that takes 2&ndash;5 hours to learn for
                  someone comfortable with Zapier. n8n is more technical and takes 5&ndash;10 hours
                  for comfortable proficiency. Both are harder than Zapier but more powerful once
                  learned.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            comparisons={["zapier-vs-make", "make-vs-n8n"]}
            guides={["when-zapier-costs-more-than-make", "who-should-not-use-zapier", "migrate-zapier-to-make"]}
          />
        </div>
      </article>
    </>
  );
}
