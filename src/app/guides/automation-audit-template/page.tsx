import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Automation Audit Template: Find Wasted Tasks in 30 Minutes",
  description:
    "A step-by-step automation audit template to identify unused Zaps and scenarios, calculate wasted spend, and optimize your Zapier or Make account. Includes a cost savings calculator.",
};

export default function AutomationAuditTemplatePage() {
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
              Automation Audit Template
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Workflow Template
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Automation Audit Template: Find Wasted Tasks in 30 Minutes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Most teams have automations running that nobody uses, duplicate workflows that
            burn double the tasks, and multi-step Zaps that could be simplified. This 30-minute
            audit template helps you identify wasted spend and optimize your Zapier or Make
            account.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>11 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Step 1: Inventory */}
          <section>
            <h2 className="text-xl font-bold mb-3">Step 1: Take Inventory (5 Minutes)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Start by listing every active automation in your account. Both Zapier and Make
              show this in the dashboard, but most people have never reviewed the full list.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Zapier:</strong> Go to &quot;Zaps&quot; and filter
                by Status: On. Note the total count and sort by &quot;Last Run&quot; date.
              </li>
              <li>
                <strong className="text-foreground">Make:</strong> Go to &quot;Scenarios&quot; and filter
                by Active. Note the total count and sort by last execution date.
              </li>
              <li>
                <strong className="text-foreground">Write down:</strong> Total active automations,
                total tasks/operations used last month, current plan limit, and current monthly cost.
              </li>
            </ul>
          </section>

          {/* Step 2: Find Zombies */}
          <section>
            <h2 className="text-xl font-bold mb-3">Step 2: Identify Zombie Automations (10 Minutes)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Zombie automations are workflows that are &quot;on&quot; but have not triggered in
              30+ days. They are either broken, obsolete, or connected to workflows nobody uses
              anymore.
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-muted mb-4">
              <li>
                <strong className="text-foreground">Sort by last run date.</strong> Any automation that
                has not run in 30+ days is a candidate for removal.
              </li>
              <li>
                <strong className="text-foreground">Check for broken triggers.</strong> A Zap connected
                to a form that no longer exists, or a scenario connected to a deleted spreadsheet,
                is wasting capacity even if it does not consume tasks.
              </li>
              <li>
                <strong className="text-foreground">Turn off zombies immediately.</strong> Do not delete
                them yet &mdash; just turn them off. If nobody notices in 30 days, delete them.
              </li>
            </ol>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">Typical finding</p>
              <p className="text-sm text-muted">
                Most teams find that 20&ndash;30% of their active automations are zombies. On
                Zapier Professional ($29.99/mo, 750 tasks), turning off zombies typically frees
                up 100&ndash;200 tasks per month. On Make Core ($10.59/mo, 10,000 ops), the
                operation savings are proportionally similar.
              </p>
            </div>
          </section>

          {/* Step 3: Find Duplicates */}
          <section>
            <h2 className="text-xl font-bold mb-3">Step 3: Find Duplicate Workflows (10 Minutes)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Duplicates happen when someone creates a new automation instead of modifying the
              existing one, or when multiple team members build the same workflow independently.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Group by trigger app.</strong> If you have three
                Zaps triggered by Typeform, check if they are doing similar things. Often two can
                be consolidated into one multi-step Zap.
              </li>
              <li>
                <strong className="text-foreground">Group by action app.</strong> If you have five
                automations that all write to Google Sheets, check if some are writing to the same
                sheet from different triggers. These can often be merged.
              </li>
              <li>
                <strong className="text-foreground">Look for test automations.</strong> Zaps or scenarios
                with names like &quot;Test&quot;, &quot;Copy of&quot;, or &quot;V2&quot; are often
                duplicates left over from testing.
              </li>
            </ul>
          </section>

          {/* Step 4: Optimize Multi-Step */}
          <section>
            <h2 className="text-xl font-bold mb-3">Step 4: Optimize Multi-Step Workflows (5 Minutes)</h2>
            <p className="text-muted leading-relaxed mb-3">
              On Zapier, each step costs a task. Reducing a 5-step Zap to 3 steps saves 40%
              of the tasks consumed per run. Here is how:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Replace Zapier steps with native integrations.</strong> If
                HubSpot can natively send a Slack notification when a deal closes, remove the Zapier
                step. That is one less task per run.
              </li>
              <li>
                <strong className="text-foreground">Move filters to triggers.</strong> Zapier trigger
                filters do not count as tasks. If you have a filter step mid-Zap, see if the same
                condition can be applied at the trigger level.
              </li>
              <li>
                <strong className="text-foreground">Combine formatting steps.</strong> If you have
                multiple Formatter steps in a row, see if the same transformation can be done in
                one step using Formatter utilities.
              </li>
            </ul>
          </section>

          {/* Cost Savings Calculator */}
          <section>
            <h2 className="text-xl font-bold mb-3">Cost Savings Calculator</h2>
            <p className="text-muted leading-relaxed mb-3">
              After completing the audit, calculate your potential savings:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Action</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Typical Savings (Zapier)</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Typical Savings (Make)</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Turn off zombie automations</td>
                    <td className="px-4 py-3">100&ndash;200 tasks/mo</td>
                    <td className="px-4 py-3">500&ndash;2,000 ops/mo</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Consolidate duplicates</td>
                    <td className="px-4 py-3">50&ndash;150 tasks/mo</td>
                    <td className="px-4 py-3">200&ndash;1,000 ops/mo</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Optimize multi-step workflows</td>
                    <td className="px-4 py-3">100&ndash;300 tasks/mo</td>
                    <td className="px-4 py-3">500&ndash;2,000 ops/mo</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="px-4 py-3 text-foreground">Total potential savings</td>
                    <td className="px-4 py-3 text-foreground">250&ndash;650 tasks/mo</td>
                    <td className="px-4 py-3 text-foreground">1,200&ndash;5,000 ops/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              On Zapier Professional (750 tasks/mo at $29.99/mo), saving 250&ndash;650 tasks could
              mean the difference between staying on Professional or downgrading. On Make Core
              (10,000 ops/mo at $10.59/mo), the ops savings may let you stay on Core instead of
              upgrading to Pro ($18.82/mo), saving roughly $99/year.
            </p>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How often should I audit my automations?</h3>
                <p className="text-muted">Quarterly. Task consumption creeps up as you add new automations without removing old ones. A quarterly 30-minute audit prevents the slow climb toward the next pricing tier.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I delete old automations or just turn them off?</h3>
                <p className="text-muted">Turn them off first. Wait 30 days. If nobody asks about them, delete. This prevents accidentally breaking a workflow someone depends on that you did not know about.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can this audit save me money immediately?</h3>
                <p className="text-muted">If you are near your task/ops limit and about to upgrade, yes. Cutting 30&ndash;40% of wasted tasks can delay an upgrade by months. On Zapier, that means avoiding the jump from Professional ($29.99/mo) to Team ($103.50/mo), saving $882/year.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does this audit apply to n8n (self-hosted)?</h3>
                <p className="text-muted">The zombie and duplicate identification steps apply to any automation platform. The cost savings are most relevant for Zapier and Make because they charge by task/operation volume. n8n self-hosted has no per-task cost but still benefits from reduced complexity.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            comparisons={["zapier-vs-make"]}
            guides={["zapier-hidden-costs", "multi-step-automation-cost-trap", "when-zapier-costs-more-than-make"]}
          />
        </div>
      </article>
    </>
  );
}
