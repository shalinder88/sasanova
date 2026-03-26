import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Cheapest Automation Per Task: Cost at 100, 1K, 5K, and 10K Tasks",
  description:
    "Automation tools ranked by cost-per-task. Zapier Professional at $29.99/mo for 750 tasks. Make Core at $10.59/mo for 10,000 ops. n8n Community is free self-hosted. The exact math at every volume.",
};

export default function CheapestAutomationPerTask() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Cheapest Automation Per Task</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Comparison Angle
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Cheapest Automation Per Task: Cost at 100, 1K, 5K, and 10K Tasks
          </h1>
          <p className="text-lg text-muted">
            Automation pricing is confusing because each tool counts differently. Zapier counts &quot;tasks&quot; (each step = 1 task in multi-step Zaps). Make counts &quot;operations.&quot; n8n counts &quot;executions.&quot; Here&apos;s the normalized cost-per-task comparison at every volume.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Critical: How Task Counting Differs</p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Zapier:</strong> A 5-step Zap that runs once = 5 tasks. 100 runs = 500 tasks.
              <br />
              <strong className="text-foreground">Make:</strong> A 5-step scenario that runs once = 5 operations. Similar to Zapier.
              <br />
              <strong className="text-foreground">n8n:</strong> A workflow that runs once = 1 execution, regardless of steps. Much more generous.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Pricing at Each Volume</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Volume</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Zapier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Make</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">n8n Self-Hosted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">100/mo</td>
                  <td className="px-4 py-2.5 text-muted">$0 (Free: 100 tasks)</td>
                  <td className="px-4 py-2.5 text-muted">$0 (Free: 1,000 ops)</td>
                  <td className="px-4 py-2.5 text-muted">$20/mo (Starter: 2,500 exec)</td>
                  <td className="px-4 py-2.5 text-muted">$0 + hosting</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1,000/mo</td>
                  <td className="px-4 py-2.5 text-muted">$29.99 (Pro: 750 tasks)</td>
                  <td className="px-4 py-2.5 text-muted">$0 (Free: 1,000 ops)</td>
                  <td className="px-4 py-2.5 text-muted">$20/mo (Starter: 2,500 exec)</td>
                  <td className="px-4 py-2.5 text-muted">$0 + hosting</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000/mo</td>
                  <td className="px-4 py-2.5 text-muted">$103.50 (Team: 2,000 tasks)</td>
                  <td className="px-4 py-2.5 text-muted">$10.59 (Core: 10,000 ops)</td>
                  <td className="px-4 py-2.5 text-muted">$50/mo (Pro: 10,000 exec)</td>
                  <td className="px-4 py-2.5 text-muted">$0 + hosting (~$10&ndash;20/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000/mo</td>
                  <td className="px-4 py-2.5 text-muted">$103.50+ (Team, may need more)</td>
                  <td className="px-4 py-2.5 text-muted">$10.59 (Core: 10,000 ops)</td>
                  <td className="px-4 py-2.5 text-muted">$50/mo (Pro: 10,000 exec)</td>
                  <td className="px-4 py-2.5 text-muted">$0 + hosting (~$10&ndash;20/mo)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cost Per Task Breakdown</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Included Volume</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost per Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2.5 font-medium text-foreground">n8n</td><td className="px-4 py-2.5">Community (self-hosted)</td><td className="px-4 py-2.5">$0 + hosting</td><td className="px-4 py-2.5">Unlimited</td><td className="px-4 py-2.5">$0.000</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Make</td><td className="px-4 py-2.5">Core</td><td className="px-4 py-2.5">$10.59/mo</td><td className="px-4 py-2.5">10,000 ops</td><td className="px-4 py-2.5">$0.001</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">n8n</td><td className="px-4 py-2.5">Starter (cloud)</td><td className="px-4 py-2.5">$20/mo</td><td className="px-4 py-2.5">2,500 exec</td><td className="px-4 py-2.5">$0.008</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Zapier</td><td className="px-4 py-2.5">Professional</td><td className="px-4 py-2.5">$29.99/mo</td><td className="px-4 py-2.5">750 tasks</td><td className="px-4 py-2.5">$0.040</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Zapier</td><td className="px-4 py-2.5">Team</td><td className="px-4 py-2.5">$103.50/mo</td><td className="px-4 py-2.5">2,000 tasks</td><td className="px-4 py-2.5">$0.052</td></tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Verdict</p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Make Core at $10.59/mo is the best value for cloud-hosted automation.</strong> At $0.001/operation, it&apos;s 40x cheaper than Zapier Professional per unit. n8n self-hosted is the cheapest if you have the technical skills to manage infrastructure. <strong className="text-foreground">Zapier is the most expensive per task at every volume</strong> &mdash; you pay for simplicity and integration breadth.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Multi-Step Trap</h2>
          <p className="text-muted mb-4">
            Zapier&apos;s biggest hidden cost: multi-step Zaps multiply your task consumption. A 5-step Zap that runs 100 times burns 500 tasks. On the Professional plan (750 tasks/mo), that single workflow uses 67% of your monthly allowance. Make has the same per-operation counting, but at $10.59/mo for 10,000 ops, you have 20x the headroom.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Should I self-host n8n to save money?</h3>
          <p className="text-muted mb-4">
            If you&apos;re technical and run 5,000+ automations/month, self-hosting n8n on a $10&ndash;$20/mo VPS gives you unlimited executions. The trade-off: you manage uptime, updates, and debugging yourself. For most non-technical teams, Make Core at $10.59/mo is the better value-for-effort choice.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Why is Zapier still so popular if it&apos;s the most expensive?</h3>
          <p className="text-muted mb-4">
            Integration breadth (7,000+ apps), ease of use, and templates. For low-volume users (under 100 tasks/mo), Zapier Free works fine. The cost problem only hits at scale. If you use fewer than 750 tasks/mo and value simplicity, Zapier Professional at $29.99/mo may still be your best option.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Can I switch from Zapier to Make mid-workflow?</h3>
          <p className="text-muted mb-4">
            Workflows don&apos;t transfer automatically. You&apos;ll rebuild each Zap as a Make scenario. Make has 1,800+ integrations vs Zapier&apos;s 7,000+, so verify your specific apps are supported before switching. The rebuild typically takes 1&ndash;2 hours per complex workflow.
          </p>
        </div>

        <RelatedLinks
          tools={["zapier", "make", "n8n"]}
          comparisons={["zapier-vs-make", "n8n-vs-make"]}
          guides={[
            "automation-pricing-compared",
            "when-zapier-costs-more-than-make",
            "when-make-core-isnt-enough",
          ]}
        />
      </article>
    </>
  );
}
