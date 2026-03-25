import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Make Pricing Explained: Operations, Not Tasks",
  description:
    "Make pricing decoded: Free (1,000 ops, 2 scenarios), Core $10.59/mo, Pro $18.82/mo, Teams $34.12/mo. How operations count vs Zapier tasks, and when Make saves real money.",
};

export default function MakePricingExplainedPage() {
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
              Make Pricing Explained
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Make Pricing Explained: Operations, Not Tasks
          </h1>
          <p className="text-lg text-muted">
            Make counts operations, not tasks. That distinction changes everything about how you compare it to Zapier. A 5-step Zapier Zap burns 5 tasks per run but only 5 Make operations per run &mdash; the difference is that Zapier&apos;s multi-step pricing multiplies faster. This guide breaks down Make&apos;s pricing, operation counting, and the exact scenarios where Make saves serious money.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Every Tier at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Ops/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">1,000</td>
                  <td className="px-4 py-2.5">2 active scenarios, 15-min interval</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Core</td>
                  <td className="px-4 py-2.5">$10.59</td>
                  <td className="px-4 py-2.5">$9</td>
                  <td className="px-4 py-2.5">10,000</td>
                  <td className="px-4 py-2.5">Unlimited scenarios, 5-min interval</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                  <td className="px-4 py-2.5">$18.82</td>
                  <td className="px-4 py-2.5">$16</td>
                  <td className="px-4 py-2.5">10,000</td>
                  <td className="px-4 py-2.5">Custom functions, priority execution, 1-min interval</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Teams</td>
                  <td className="px-4 py-2.5">$34.12</td>
                  <td className="px-4 py-2.5">$29</td>
                  <td className="px-4 py-2.5">10,000</td>
                  <td className="px-4 py-2.5">Team features, high-priority execution, roles</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            All paid plans start with 10,000 operations/month. You can purchase additional operation packs as needed. The primary difference between Core, Pro, and Teams is execution speed, debugging tools, and team collaboration features &mdash; not operation volume.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">How Operations Are Counted vs Zapier Tasks</h2>
          <p className="text-muted mb-4">
            This is the single most important thing to understand about Make&apos;s pricing:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Concept</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Make</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Zapier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Unit of measurement</td>
                  <td className="px-4 py-2.5">Operations</td>
                  <td className="px-4 py-2.5">Tasks</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">What counts as 1 unit</td>
                  <td className="px-4 py-2.5">Each module execution (trigger + each action)</td>
                  <td className="px-4 py-2.5">Each action step (multi-step Zaps burn multiple tasks)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5-step workflow, 1 run</td>
                  <td className="px-4 py-2.5">5 operations</td>
                  <td className="px-4 py-2.5">5 tasks (on multi-step plans)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Filters/routers</td>
                  <td className="px-4 py-2.5">Count as operations</td>
                  <td className="px-4 py-2.5">Filters count as tasks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The practical difference:</strong> Make and Zapier count similarly for simple workflows. But Make&apos;s pricing is dramatically cheaper per unit. Make Core gives you 10,000 operations for $10.59/month. Zapier Professional gives you 750 tasks for $29.99/month. Even accounting for multi-step counting, Make delivers roughly 10&ndash;20x more automation volume per dollar.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Each Tier Adds</h2>
          <h3 className="text-lg font-semibold mt-6 mb-3">Free &mdash; Enough to Test</h3>
          <p className="text-muted mb-4">
            1,000 operations, 2 active scenarios, and a 15-minute minimum interval between checks. Enough to build a couple of simple automations and understand Make&apos;s visual builder. Not enough for production use.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Core ($10.59/mo) &mdash; The Sweet Spot</h3>
          <p className="text-muted mb-4">
            10,000 operations, unlimited active scenarios, and a 5-minute polling interval. This is where most solopreneurs and small teams live. The 5-minute interval means your automations check for new data every 5 minutes, which is fast enough for most business workflows.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Pro ($18.82/mo) &mdash; Speed and Debugging</h3>
          <p className="text-muted mb-4">
            Pro adds custom functions (JavaScript), priority execution (your scenarios run before Core users&apos; scenarios), a 1-minute polling interval, and full-text log search. The 1-minute interval matters for time-sensitive workflows like customer support ticket routing or real-time data syncing.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Teams ($34.12/mo) &mdash; Collaboration</h3>
          <p className="text-muted mb-4">
            Teams adds high-priority execution, team roles and permissions, shared scenarios, and organizational features. For teams of 3+ people building and managing automations collaboratively.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Operations consumed by errors and retries.</strong> If a scenario fails and retries, the retry consumes additional operations. Poorly built scenarios with frequent errors can burn through operations faster than expected.</li>
            <li><strong className="text-foreground">Data transfer limits.</strong> Each plan has a data transfer limit (e.g., 1GB on Core). Moving large files between apps consumes this allowance. If you automate file-heavy workflows, you may need to purchase additional data transfer.</li>
            <li><strong className="text-foreground">Additional operations aren&apos;t cheap at small volumes.</strong> If you exhaust your 10,000 monthly operations, additional packs start at ~$9 for 10,000 more. This isn&apos;t expensive, but it can surprise users who expected the flat monthly fee to be the total cost.</li>
            <li><strong className="text-foreground">Steeper learning curve = hidden time cost.</strong> Make&apos;s visual builder is more powerful than Zapier but harder to learn. The initial setup time for complex scenarios is 2&ndash;5x longer than Zapier. Factor in learning time as a real cost.</li>
            <li><strong className="text-foreground">Fewer pre-built templates than Zapier.</strong> Zapier has more one-click templates. Make requires more manual scenario building, which takes more time.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Free</strong> &mdash; Testing Make, building your first scenarios, or running very light automation (under 1,000 ops/month with 2 scenarios).
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Core ($10.59/mo)</strong> &mdash; The right tier for 80% of users. 10,000 operations, unlimited scenarios, and a 5-minute interval cover most business automation needs. Start here.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Pro ($18.82/mo)</strong> &mdash; Worth it if you need 1-minute polling intervals, custom JavaScript functions, or better debugging tools. Typically for power users running 10+ scenarios with time-sensitive triggers.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Teams ($34.12/mo)</strong> &mdash; Required when 3+ people collaborate on building and managing automations. The team roles and shared scenarios features prevent stepping on each other&apos;s work.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Make vs Zapier: The Cost Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Volume</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Make (Core)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Zapier (Professional)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">750 ops/tasks</td>
                  <td className="px-4 py-2.5">$10.59</td>
                  <td className="px-4 py-2.5">$29.99</td>
                  <td className="px-4 py-2.5 text-green-400">$19.40/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">2,000 ops/tasks</td>
                  <td className="px-4 py-2.5">$10.59</td>
                  <td className="px-4 py-2.5">$49.99</td>
                  <td className="px-4 py-2.5 text-green-400">$39.40/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000 ops/tasks</td>
                  <td className="px-4 py-2.5">$10.59</td>
                  <td className="px-4 py-2.5">$99.99+</td>
                  <td className="px-4 py-2.5 text-green-400">$89.40/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">n8n self-hosted</strong> is free with unlimited operations if you host it yourself. A $5&ndash;$10/month VPS handles n8n for most use cases. The tradeoff: you need technical ability to set up and maintain the server. n8n Cloud starts at ~$22/month for similar features to Make Core.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Pipedream</strong> offers a generous free tier (10,000 invocations/month) targeted at developers. If you&apos;re comfortable writing code (Node.js, Python), Pipedream can handle complex automations at lower cost. For no-code users, Make remains the better option.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Make cost?</h3>
                <p className="text-muted">Free (1,000 ops, 2 scenarios), Core $10.59/mo (10,000 ops, unlimited scenarios), Pro $18.82/mo (10,000 ops, 1-min intervals), Teams $34.12/mo (10,000 ops, team features). Additional operations can be purchased as needed.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make cheaper than Zapier?</h3>
                <p className="text-muted">Yes, significantly. Make Core at $10.59/month gives you 10,000 operations. Zapier Professional at $29.99/month gives you 750 tasks. At equivalent volumes, Make costs roughly 60&ndash;80% less. The savings grow larger at higher volumes.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is a Make operation?</h3>
                <p className="text-muted">A Make operation is each module (step) that executes within a scenario. A scenario with a trigger, a filter, and 3 actions consumes 5 operations per run. Errors and retries also consume operations. The counting is similar to Zapier&apos;s multi-step task counting.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make Core enough for most users?</h3>
                <p className="text-muted">Yes. Core at $10.59/month with 10,000 operations and unlimited scenarios handles most small business automation needs. Most solopreneurs and small teams never exhaust 10,000 monthly operations. Upgrade to Pro only if you need 1-minute polling or custom JavaScript functions.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["make", "zapier", "n8n"]}
            comparisons={["zapier-vs-make"]}
            guides={["when-make-core-isnt-enough", "migrate-zapier-to-make"]}
          />
        </div>
      </article>
    </>
  );
}
