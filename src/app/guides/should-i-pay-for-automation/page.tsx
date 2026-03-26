import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Should You Pay for Automation? The Break-Even Calculation",
  description:
    "Zapier free (100 tasks) vs Make free (1K ops) vs paid tiers. When automation pays for itself with exact prices and break-even math.",
};

export default function ShouldIPayForAutomationGuide() {
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
            <span className="text-foreground font-medium truncate">Should You Pay for Automation?</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Buying Decision
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Should You Pay for Automation? The Break-Even Calculation
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 12 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Automation tools promise to save hours every week. But the free tiers are surprisingly
            capable, and the paid tiers can get expensive fast. Zapier Professional costs $29.99/month
            for 750 tasks. Make Core costs $10.59/month for 10,000 operations. n8n self-hosted is
            free forever.
          </p>
          <p>
            The question isn&apos;t whether automation is valuable &mdash; it&apos;s whether you&apos;ve
            hit the volume where paying makes mathematical sense.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Free Tier Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Volume</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Counting Method</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limitation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5">100 tasks/month</td>
                    <td className="px-4 py-2.5">Each step = 1 task (5-step Zap = 5 tasks per run)</td>
                    <td className="px-4 py-2.5">Two-step only (single trigger + single action)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5">1,000 ops/month</td>
                    <td className="px-4 py-2.5">Each module execution = 1 operation</td>
                    <td className="px-4 py-2.5">2 active scenarios only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n (self-hosted)</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">N/A &mdash; no task/op limits</td>
                    <td className="px-4 py-2.5">You manage the server</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n (cloud Starter)</td>
                    <td className="px-4 py-2.5">2,500 executions/month</td>
                    <td className="px-4 py-2.5">Each workflow run = 1 execution</td>
                    <td className="px-4 py-2.5">$20/month (not free)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5">100 credits/month</td>
                    <td className="px-4 py-2.5">Credit-based (varies by action)</td>
                    <td className="px-4 py-2.5">3 active workflows only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Bardeen</td>
                    <td className="px-4 py-2.5">100 credits/month</td>
                    <td className="px-4 py-2.5">Credit-based</td>
                    <td className="px-4 py-2.5">Non-premium automations only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When Free Is Enough</h2>
            <div className="rounded-lg border border-border bg-surface p-5 space-y-3">
              <p className="text-foreground font-semibold">Stay on free automation if:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You run fewer than 100 tasks/month (about 3 automation runs per day)</li>
                <li>Your automations are simple two-step workflows (trigger + action)</li>
                <li>Make&apos;s 1,000 free ops/month covers your volume (about 33 runs/day for a 1-module scenario)</li>
                <li>You can self-host n8n (unlimited, free forever)</li>
                <li>You automate manually enough that 100 Zapier tasks suffice</li>
              </ul>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">Critical: Zapier&apos;s task counting trap.</strong> A
              5-step Zap burns 5 tasks per run. At 100 free tasks/month, that&apos;s only 20 workflow
              runs. Make counts operations per module too, but their free tier starts at 1,000 ops &mdash;
              10x Zapier&apos;s free allocation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Break-Even Calculation</h2>
            <p>
              Automation pays for itself when the time it saves exceeds the subscription cost. Here&apos;s
              how to calculate it:
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-4">
              <div>
                <p className="text-foreground font-semibold">Step 1: Calculate time saved per automation</p>
                <p className="mt-1">If an automation replaces 5 minutes of manual work per run, and runs 100 times/month, that&apos;s 500 minutes (8.3 hours) saved per month.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Step 2: Value the time</p>
                <p className="mt-1">At $50/hour, 8.3 hours = $415/month in time value saved.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Step 3: Compare to tool cost</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Zapier Professional at $29.99/month: $415 saved &divide; $29.99 = <strong className="text-foreground">13.8x ROI</strong></li>
                  <li>Make Core at $10.59/month: $415 saved &divide; $10.59 = <strong className="text-foreground">39.2x ROI</strong></li>
                  <li>n8n self-hosted at $0/month: Infinite ROI (but factor in server costs of ~$5&ndash;$20/month)</li>
                </ul>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Volume</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Self-Hosted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">100 tasks/mo</td>
                    <td className="px-4 py-2.5">$0 (free)</td>
                    <td className="px-4 py-2.5">$0 (free)</td>
                    <td className="px-4 py-2.5">$20/mo</td>
                    <td className="px-4 py-2.5">$0 + server</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">750 tasks/mo</td>
                    <td className="px-4 py-2.5">$29.99/mo</td>
                    <td className="px-4 py-2.5">$0 (free, 1K ops)</td>
                    <td className="px-4 py-2.5">$20/mo</td>
                    <td className="px-4 py-2.5">$0 + server</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">2,000 tasks/mo</td>
                    <td className="px-4 py-2.5">$103.50/mo (Team)</td>
                    <td className="px-4 py-2.5">$10.59/mo (Core, 10K ops)</td>
                    <td className="px-4 py-2.5">$20/mo</td>
                    <td className="px-4 py-2.5">$0 + server</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000 tasks/mo</td>
                    <td className="px-4 py-2.5">$103.50/mo+ (Team)</td>
                    <td className="px-4 py-2.5">$10.59/mo (Core)</td>
                    <td className="px-4 py-2.5">$50/mo (Pro)</td>
                    <td className="px-4 py-2.5">$0 + server</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When to Upgrade: The Exact Triggers</h2>
            <div className="rounded-lg border border-border bg-surface p-5 space-y-4">
              <div>
                <p className="text-foreground font-semibold">Upgrade from Zapier Free when:</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>You need multi-step Zaps (free tier is two-step only)</li>
                  <li>You exceed 100 tasks/month (happens fast with multi-step Zaps)</li>
                  <li>Consider switching to Make instead &mdash; Make Core ($10.59/mo) gives 10,000 ops for less than Zapier Professional ($29.99/mo for 750 tasks)</li>
                </ul>
              </div>
              <div>
                <p className="text-foreground font-semibold">Upgrade from Make Free when:</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>You need more than 2 active scenarios</li>
                  <li>You exceed 1,000 ops/month</li>
                  <li>Make Core at $10.59/month is the obvious next step (10,000 ops)</li>
                </ul>
              </div>
              <div>
                <p className="text-foreground font-semibold">Consider n8n self-hosted when:</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>You&apos;re technical enough to manage a Docker container</li>
                  <li>You run 5,000+ tasks/month (savings become significant)</li>
                  <li>Data privacy matters (your data stays on your server)</li>
                  <li>Server cost: $5&ndash;$20/month for a VPS that handles most workloads</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Annual Cost Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform &amp; Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Volume Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier Professional</td>
                    <td className="px-4 py-2.5">$29.99/mo</td>
                    <td className="px-4 py-2.5">$239.88/yr (annual billing)</td>
                    <td className="px-4 py-2.5">750 tasks/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier Team</td>
                    <td className="px-4 py-2.5">$103.50/mo</td>
                    <td className="px-4 py-2.5">$828/yr (annual billing)</td>
                    <td className="px-4 py-2.5">2,000 tasks/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Make Core</td>
                    <td className="px-4 py-2.5">$10.59/mo</td>
                    <td className="px-4 py-2.5">$108/yr (annual billing)</td>
                    <td className="px-4 py-2.5">10,000 ops/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Make Pro</td>
                    <td className="px-4 py-2.5">$18.82/mo</td>
                    <td className="px-4 py-2.5">$192/yr (annual billing)</td>
                    <td className="px-4 py-2.5">10,000 ops/mo + custom functions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud Starter</td>
                    <td className="px-4 py-2.5">$20/mo</td>
                    <td className="px-4 py-2.5">$240/yr</td>
                    <td className="px-4 py-2.5">2,500 executions/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                    <td className="px-4 py-2.5">$0 + ~$10 server</td>
                    <td className="px-4 py-2.5">~$120/yr (server only)</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Zapier&apos;s free tier worth using?</h3>
                <p>For simple two-step automations at low volume, yes. But 100 tasks/month is very limited, especially since multi-step Zaps burn multiple tasks per run. Make&apos;s free tier (1,000 ops) is 10x more generous if you&apos;re willing to learn a slightly different interface.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is Make so much cheaper than Zapier?</h3>
                <p>Make Core gives you 10,000 operations/month for $10.59 vs Zapier Professional at $29.99 for 750 tasks. Make trades breadth (1,800 apps vs Zapier&apos;s 7,000) for price. If Make supports all the apps you need, it&apos;s significantly cheaper at every volume.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is self-hosting n8n practical for non-developers?</h3>
                <p>No. n8n self-hosting requires Docker knowledge, server management, and troubleshooting skills. If you&apos;re not comfortable with a command line, use n8n Cloud ($20/month) or stick with Make/Zapier. The cost savings only matter if your time managing infrastructure is nearly free.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When does automation NOT pay for itself?</h3>
                <p>When you spend more time building and debugging automations than the manual work would take. A 5-minute manual task that happens twice a week (8.7 hours/year) isn&apos;t worth a 4-hour automation build plus ongoing maintenance. Automate high-volume, simple tasks first.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n", "pipedream", "bardeen"]}
            comparisons={["zapier-vs-make", "make-vs-n8n"]}
            guides={[
              "automation-zapier-vs-make-vs-n8n",
              "automation-pricing-compared",
              "when-zapier-costs-more-than-make",
            ]}
          />
        </div>
      </div>
    </>
  );
}
