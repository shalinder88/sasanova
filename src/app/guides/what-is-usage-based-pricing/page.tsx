import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Usage-Based Pricing Explained: Tasks, Operations, Events, Credits",
  description:
    "How usage-based SaaS pricing works: Zapier tasks vs Make operations vs n8n executions vs Pipedream credits. Exact counting differences, costs, and when flat-rate wins.",
};

export default function WhatIsUsageBasedPricingPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">What Is Usage-Based Pricing</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Explainer
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Usage-Based Pricing Explained: Tasks, Operations, Events, Credits
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Usage-based pricing sounds fair: pay only for what you use. In practice,
            every platform counts &ldquo;usage&rdquo; differently. A 5-step Zapier workflow
            burns 5 tasks per run. The same workflow on Make burns 5 operations. But Zapier
            gives you 750 tasks and Make gives you 10,000 operations for less money. This
            guide explains exactly how each platform counts.
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
            <h2 className="text-xl font-bold mb-3">How Each Platform Counts Usage</h2>

            <h3 className="text-lg font-semibold mt-6 mb-2">Zapier: Tasks</h3>
            <p className="text-muted leading-relaxed mb-4">
              Every action step in a Zap counts as one task. A trigger does NOT count.
              A 5-step Zap (1 trigger + 4 actions) running once burns 4 tasks. Running it 100
              times/month = 400 tasks. Zapier Professional gives you 750 tasks/month for
              $29.99/month. Team gives 2,000 tasks for $103.50/month. Multi-step Zaps are
              where costs escalate because each step multiplies the count.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Make: Operations</h3>
            <p className="text-muted leading-relaxed mb-4">
              Every module execution counts as one operation. This includes the trigger module.
              A 5-module scenario running once = 5 operations. Running it 100 times/month = 500
              operations. Make Core gives you 10,000 operations/month for $10.59/month. Pro gives
              10,000 operations for $18.82/month with priority execution. The key difference:
              Make gives you 13x more capacity than Zapier for 65% less money.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">n8n: Executions</h3>
            <p className="text-muted leading-relaxed mb-4">
              n8n counts workflow executions, not individual steps. A 5-node workflow running
              once = 1 execution (not 5). Running it 100 times/month = 100 executions. n8n
              Starter gives 2,500 executions/month for $20/month (EUR). Self-hosted community
              edition is unlimited and free. This counting method is the most generous for
              complex workflows.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Pipedream: Credits</h3>
            <p className="text-muted leading-relaxed mb-4">
              Pipedream uses credits. Each invocation costs 1 credit for the first 30 seconds
              of compute, then additional credits for longer executions. Basic plan gives 2,000
              credits/month for $29/month. Free plan gives 100 credits/month. Credits also
              vary by compute intensity &mdash; an HTTP request costs less than an AI-heavy
              workflow.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Side-by-Side Cost Comparison</h2>
            <p className="text-muted leading-relaxed mb-4">
              Scenario: A 5-step workflow that runs 200 times per month.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Usage Consumed</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">% of Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">800 tasks (4 actions &times; 200 runs)</td>
                    <td className="px-4 py-2.5 text-muted">107% &mdash; over limit</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Core</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">1,000 ops (5 modules &times; 200 runs)</td>
                    <td className="px-4 py-2.5 text-muted">10% of limit</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">200 executions</td>
                    <td className="px-4 py-2.5 text-muted">8% of limit</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">Basic</td>
                    <td className="px-4 py-2.5 text-muted">$29/mo</td>
                    <td className="px-4 py-2.5 text-muted">~200 credits</td>
                    <td className="px-4 py-2.5 text-muted">10% of limit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Zapier exceeds its Professional limit with this single workflow. The same workflow
              uses just 10% of Make Core&apos;s capacity. This is why teams with multi-step
              workflows consistently save money switching from Zapier to Make.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Multi-Step Task Trap</h2>
            <p className="text-muted leading-relaxed mb-4">
              Zapier&apos;s task counting makes multi-step Zaps disproportionately expensive.
              A simple 2-step Zap (trigger + 1 action) running 750 times/month fits in
              Professional (750 tasks). But add 4 more action steps and the same 750
              runs burn 3,750 tasks &mdash; requiring the Team plan ($103.50/month).
              Your workflow didn&apos;t change meaningfully, but your bill tripled.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              On Make Core ($10.59/month), 750 runs of a 5-step scenario = 3,750 operations.
              You&apos;re still within the 10,000 operation limit with 62% headroom.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">When Usage-Based Pricing Makes Sense</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Low volume:</strong> Under 100 tasks/month, Zapier Free (100 tasks, two-step) or Make Free (1,000 ops, 2 scenarios) costs $0.</li>
              <li><strong className="text-foreground">Variable volume:</strong> If your automation volume fluctuates seasonally, usage-based avoids paying for capacity you don&apos;t use in quiet months.</li>
              <li><strong className="text-foreground">Testing phase:</strong> Start on usage-based free tiers while validating your workflows, then switch to paid plans once you know your actual volume.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What happens when I exceed my task/operation limit?</h3>
                <p className="text-muted">Zapier auto-pauses your Zaps and prompts an upgrade. Make pauses scenario execution until the next billing cycle. n8n Cloud pauses executions. Pipedream holds events in a queue. None charge overage fees automatically &mdash; they just stop working.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is n8n&apos;s execution-based counting always cheapest?</h3>
                <p className="text-muted">For complex workflows, yes. A 20-step workflow costs 1 execution on n8n but 19 tasks on Zapier and 20 operations on Make. For simple 2-step workflows, the counting method matters less and Make&apos;s 10,000 ops at $10.59/month is the best value.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I predict my usage before committing?</h3>
                <p className="text-muted">Yes. Start on free tiers for 1&ndash;2 months and track actual consumption. Zapier shows task usage in your dashboard. Make shows operation counts per scenario. Use this data to pick the right paid tier.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n", "pipedream"]}
            comparisons={["zapier-vs-make", "zapier-vs-n8n", "make-vs-n8n"]}
            guides={[
              "automation-pricing-compared",
              "saas-pricing-models-explained",
              "saas-pricing-terms-glossary",
              "when-zapier-costs-more-than-make",
            ]}
          />
        </div>
      </article>
    </>
  );
}
