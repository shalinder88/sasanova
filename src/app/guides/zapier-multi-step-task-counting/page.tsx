import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "How Zapier Counts Multi-Step Tasks (And Why Your Bill Is Higher)",
  description:
    "A 5-step Zap uses 5 tasks per run. 100 free tasks = only 20 runs of a 5-step Zap. Exact pricing at every Zapier tier and how to reduce task consumption.",
};

export default function ZapierMultiStepTaskCountingPage() {
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
              Zapier Multi-Step Task Counting
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Gotcha
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How Zapier Counts Multi-Step Tasks (And Why Your Bill Is Higher)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Zapier charges per task, not per Zap run. A 5-step Zap consumes 5 tasks every time
            it triggers. Your 100 free monthly tasks? That&apos;s only 20 runs of a 5-step
            workflow. Here&apos;s the exact math at every tier, plus strategies to cut your
            task consumption in half.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
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

          {/* The Mechanic */}
          <section>
            <h2 className="text-xl font-bold mb-3">How Zapier Counts Tasks</h2>
            <p className="text-muted leading-relaxed mb-3">
              Every action step in a Zap counts as one task. The trigger step is free &mdash; it
              does not consume a task. But every action after the trigger does. Here is what this
              means in practice:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">2-step Zap (trigger + 1 action):</strong> 1 task
                per run. This is what the Free plan allows &mdash; single trigger, single action.
              </li>
              <li>
                <strong className="text-foreground">3-step Zap (trigger + 2 actions):</strong> 2 tasks
                per run. Requires Professional plan ($29.99/mo).
              </li>
              <li>
                <strong className="text-foreground">5-step Zap (trigger + 4 actions):</strong> 4 tasks
                per run. Your 750 Professional tasks cover only 187 runs.
              </li>
              <li>
                <strong className="text-foreground">10-step Zap (trigger + 9 actions):</strong> 9 tasks
                per run. Your 750 Professional tasks cover only 83 runs.
              </li>
            </ul>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">Filter and path steps also count</p>
              <p className="text-sm text-muted">
                Zapier&apos;s Filter and Paths steps count as tasks when they execute &mdash; even if the
                filter stops the Zap from continuing. A filter that blocks an action still consumes a
                task. This catches users who add filters thinking they are free logic gates.
              </p>
            </div>
          </section>

          {/* Tier Pricing */}
          <section>
            <h2 className="text-xl font-bold mb-3">Exact Pricing at Every Zapier Tier</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Monthly Price</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Annual Price</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Tasks/Mo</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Cost per Task</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Free</td>
                    <td className="px-4 py-3">$0</td>
                    <td className="px-4 py-3">$0</td>
                    <td className="px-4 py-3">100</td>
                    <td className="px-4 py-3">$0 (two-step only)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Professional</td>
                    <td className="px-4 py-3">$29.99/mo</td>
                    <td className="px-4 py-3">$239.88/yr</td>
                    <td className="px-4 py-3">750</td>
                    <td className="px-4 py-3">$0.040</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Team</td>
                    <td className="px-4 py-3">$103.50/mo</td>
                    <td className="px-4 py-3">$828/yr</td>
                    <td className="px-4 py-3">2,000</td>
                    <td className="px-4 py-3">$0.052</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Enterprise</td>
                    <td className="px-4 py-3">Custom</td>
                    <td className="px-4 py-3">Custom</td>
                    <td className="px-4 py-3">Custom</td>
                    <td className="px-4 py-3">Negotiable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Real-World Example */}
          <section>
            <h2 className="text-xl font-bold mb-3">Real-World Example: Lead Capture Workflow</h2>
            <p className="text-muted leading-relaxed mb-3">
              A common lead capture Zap has these steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
              <li><strong className="text-foreground">Trigger:</strong> New form submission (free, does not count)</li>
              <li><strong className="text-foreground">Action 1:</strong> Create contact in HubSpot CRM (1 task)</li>
              <li><strong className="text-foreground">Action 2:</strong> Send welcome email via Mailchimp (1 task)</li>
              <li><strong className="text-foreground">Action 3:</strong> Post notification to Slack (1 task)</li>
              <li><strong className="text-foreground">Action 4:</strong> Add row to Google Sheet (1 task)</li>
              <li><strong className="text-foreground">Action 5:</strong> Create follow-up task in Asana (1 task)</li>
            </ol>
            <p className="text-muted leading-relaxed mb-3">
              That is 5 tasks per form submission. If you get 50 leads per month, that is 250 tasks
              just for this one workflow. On Professional (750 tasks), this single Zap consumes
              one-third of your monthly allocation. Add two or three more multi-step Zaps, and you
              are hitting your limit mid-month.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">The free plan reality</p>
              <p className="text-sm text-muted">
                With 100 free tasks and two-step-only Zaps, you get 100 runs per month. That
                sounds reasonable until you realize you cannot build any multi-step workflow.
                The moment you need a 3-step Zap, you must upgrade to Professional at
                $29.99/mo ($239.88/yr annual).
              </p>
            </div>
          </section>

          {/* How to Reduce */}
          <section>
            <h2 className="text-xl font-bold mb-3">5 Ways to Cut Your Task Count</h2>
            <ol className="list-decimal pl-5 space-y-3 text-muted mb-4">
              <li>
                <strong className="text-foreground">Consolidate steps with Zapier Formatter.</strong> Instead
                of separate formatting and action steps, use Formatter to transform data in a single step
                before the action.
              </li>
              <li>
                <strong className="text-foreground">Use native integrations first.</strong> If HubSpot can
                natively send an email when a contact is created, skip the Zapier step. Every native
                integration you use is one fewer task consumed.
              </li>
              <li>
                <strong className="text-foreground">Move filters to the trigger.</strong> Configure trigger
                filters instead of adding Filter steps in the middle of your Zap. Trigger filters do not
                count as tasks.
              </li>
              <li>
                <strong className="text-foreground">Batch with Looping.</strong> If processing multiple records,
                use Zapier&apos;s Looping feature instead of separate Zaps for each record.
              </li>
              <li>
                <strong className="text-foreground">Consider Make for high-volume workflows.</strong> Make
                charges by operations, and an operation roughly equals a Zapier task, but Make Core gives
                you 10,000 ops/mo for $10.59/mo versus Zapier&apos;s 750 tasks for $29.99/mo. That is
                13x more volume at one-third the price.
              </li>
            </ol>
          </section>

          {/* Make Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-3">Zapier vs Make: The Task Volume Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Monthly Volume</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Zapier Cost</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Make Cost</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Savings</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">750 tasks/ops</td>
                    <td className="px-4 py-3">$29.99/mo (Professional)</td>
                    <td className="px-4 py-3">$10.59/mo (Core, 10,000 ops)</td>
                    <td className="px-4 py-3">$233/yr</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">2,000 tasks/ops</td>
                    <td className="px-4 py-3">$103.50/mo (Team)</td>
                    <td className="px-4 py-3">$10.59/mo (Core, 10,000 ops)</td>
                    <td className="px-4 py-3">$1,115/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">10,000 tasks/ops</td>
                    <td className="px-4 py-3">$103.50+/mo (Team + overages)</td>
                    <td className="px-4 py-3">$10.59/mo (Core)</td>
                    <td className="px-4 py-3">$1,100+/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do Zapier filter steps count as tasks?</h3>
                <p className="text-muted">Yes. Every step that executes in a Zap counts as one task, including Filter and Paths steps. Even if a filter blocks the rest of the workflow, it still consumes a task.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What happens when I exceed my task limit?</h3>
                <p className="text-muted">Zapier pauses your Zaps for the rest of the billing cycle or prompts you to upgrade. You can purchase additional task packs, but the per-task cost is higher than upgrading to the next tier.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Zapier Free for multi-step Zaps?</h3>
                <p className="text-muted">No. The Free plan is limited to two-step Zaps (one trigger + one action). Multi-step workflows require Professional at $29.99/mo or higher.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I check my current task usage?</h3>
                <p className="text-muted">Go to Settings &rarr; Usage in your Zapier dashboard. It shows total tasks used this billing cycle, broken down by Zap. This is the first place to look when optimizing task consumption.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            comparisons={["zapier-vs-make"]}
            guides={["when-zapier-costs-more-than-make", "zapier-hidden-costs", "multi-step-automation-cost-trap"]}
          />
        </div>
      </article>
    </>
  );
}
