import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The Multi-Step Automation Cost Trap: Why Your 5-Step Zap Uses 5x Your Budget",
  description:
    "Detailed breakdown of how Zapier counts multi-step tasks with real examples and math. Make's different counting model and n8n's execution model. Exact prices and task volumes.",
};

export default function MultiStepAutomationCostTrapPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Multi-Step Automation Cost Trap</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Automation Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Multi-Step Automation Cost Trap: Why Your 5-Step Zap Uses 5x Your Budget
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Zapier counts every step as a task. A 5-step Zap that runs once uses 5 tasks. At 750 tasks/month on Professional, you get 150 runs &mdash; not 750. Here is the exact math and how Make and n8n handle it differently.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-10">

          <section>
            <h2 className="text-xl font-bold mb-3">How Zapier Counts Tasks</h2>
            <div className="space-y-3 text-sm text-muted">
              <p>Every action step in a Zap counts as one task. The trigger does not count. So a Zap with 1 trigger + 4 actions = 4 tasks per run.</p>
              <div className="border border-border rounded-lg p-4 bg-surface">
                <p className="font-semibold text-foreground mb-2">Example: Lead Capture Zap</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Trigger: New Typeform submission (0 tasks)</li>
                  <li>Action: Create contact in HubSpot (1 task)</li>
                  <li>Action: Add subscriber to Mailchimp (1 task)</li>
                  <li>Action: Send Slack notification (1 task)</li>
                  <li>Action: Create row in Google Sheets (1 task)</li>
                </ol>
                <p className="mt-2 font-semibold text-foreground">Total: 4 tasks per form submission</p>
              </div>
              <p>If you get 100 form submissions/month, this Zap uses <strong className="text-foreground">400 tasks</strong>. On Zapier Professional (750 tasks/mo, $29.99/mo), that is 53% of your monthly allowance from a single automation.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Zapier Plan Limits: What You Actually Get</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Task Limit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Runs of a 5-step Zap</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost per Run</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">100 tasks/mo</td>
                    <td className="px-4 py-2.5 text-muted">N/A (two-step only)</td>
                    <td className="px-4 py-2.5 text-muted">N/A</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">750 tasks/mo</td>
                    <td className="px-4 py-2.5 text-muted">150 runs</td>
                    <td className="px-4 py-2.5 text-muted">$0.20/run</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Team</td>
                    <td className="px-4 py-2.5 text-muted">$103.50/mo</td>
                    <td className="px-4 py-2.5 text-muted">2,000 tasks/mo</td>
                    <td className="px-4 py-2.5 text-muted">400 runs</td>
                    <td className="px-4 py-2.5 text-muted">$0.26/run</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted mt-3">
              <strong className="text-foreground">The trap:</strong> Zapier Free only allows two-step Zaps (1 trigger + 1 action). The moment you need a multi-step Zap, you must upgrade to Professional at $29.99/mo. And your 750 tasks disappear fast with multi-step workflows.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">How Make Counts Operations (Differently)</h2>
            <div className="space-y-3 text-sm text-muted">
              <p>Make also counts each module (step) as one operation. So a 5-module scenario uses 5 operations per run &mdash; similar to Zapier. The critical difference is in the volume you get per dollar:</p>
              <div className="overflow-x-auto rounded-lg border border-border mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Operation Limit</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Runs of a 5-step Scenario</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Cost per Run</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                      <td className="px-4 py-2.5 text-muted">$0</td>
                      <td className="px-4 py-2.5 text-muted">1,000 ops/mo</td>
                      <td className="px-4 py-2.5 text-muted">200 runs</td>
                      <td className="px-4 py-2.5 text-muted">$0</td>
                    </tr>
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-4 py-2.5 font-medium text-foreground">Core</td>
                      <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                      <td className="px-4 py-2.5 text-muted">10,000 ops/mo</td>
                      <td className="px-4 py-2.5 text-accent font-semibold">2,000 runs</td>
                      <td className="px-4 py-2.5 text-accent font-semibold">$0.005/run</td>
                    </tr>
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                      <td className="px-4 py-2.5 text-muted">$18.82/mo</td>
                      <td className="px-4 py-2.5 text-muted">10,000 ops/mo</td>
                      <td className="px-4 py-2.5 text-muted">2,000 runs</td>
                      <td className="px-4 py-2.5 text-muted">$0.009/run</td>
                    </tr>
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-4 py-2.5 font-medium text-foreground">Teams</td>
                      <td className="px-4 py-2.5 text-muted">$34.12/mo</td>
                      <td className="px-4 py-2.5 text-muted">10,000 ops/mo</td>
                      <td className="px-4 py-2.5 text-muted">2,000 runs</td>
                      <td className="px-4 py-2.5 text-muted">$0.017/run</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3"><strong className="text-foreground">The math:</strong> Make Core gives you 10,000 ops for $10.59/mo. Zapier Professional gives you 750 tasks for $29.99/mo. For 5-step workflows, Make delivers <strong className="text-foreground">13.3x more runs at 65% less cost</strong>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">How n8n Counts Executions (Completely Different)</h2>
            <div className="space-y-3 text-sm text-muted">
              <p>n8n counts workflow executions, not individual steps. A 5-node workflow that runs once = 1 execution, regardless of how many steps it contains.</p>
              <div className="border border-border rounded-lg p-4 bg-surface mt-3">
                <p className="font-semibold text-foreground mb-2">Same Lead Capture Flow on n8n</p>
                <p>1 trigger + 4 actions = <strong className="text-accent">1 execution</strong> (not 4 or 5)</p>
              </div>
              <div className="overflow-x-auto rounded-lg border border-border mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Executions</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Cost per 5-Step Run</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-4 py-2.5 font-medium text-foreground">Community (self-hosted)</td>
                      <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                      <td className="px-4 py-2.5 text-accent font-semibold">Unlimited</td>
                      <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    </tr>
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-4 py-2.5 font-medium text-foreground">Starter (cloud)</td>
                      <td className="px-4 py-2.5 text-muted">$20/mo</td>
                      <td className="px-4 py-2.5 text-muted">2,500 executions</td>
                      <td className="px-4 py-2.5 text-muted">$0.008/run</td>
                    </tr>
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-4 py-2.5 font-medium text-foreground">Pro (cloud)</td>
                      <td className="px-4 py-2.5 text-muted">$50/mo</td>
                      <td className="px-4 py-2.5 text-muted">10,000 executions</td>
                      <td className="px-4 py-2.5 text-muted">$0.005/run</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3"><strong className="text-foreground">The advantage:</strong> For complex workflows (5&ndash;10+ steps), n8n is dramatically cheaper because step count does not affect the cost. The trade-off is technical complexity &mdash; n8n requires more setup than Zapier or Make.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Real-World Cost Comparison: 500 Runs of a 5-Step Workflow</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan Needed</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Team (2,500 tasks needed, 2,000 included)</td>
                    <td className="px-4 py-2.5 text-muted">$103.50/mo</td>
                    <td className="px-4 py-2.5 text-muted">$828/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Core (2,500 ops, within 10,000 limit)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$108/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Starter (500 executions, within 2,500 limit)</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">$240/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                    <td className="px-4 py-2.5 text-muted">Community + VPS ($5&ndash;10/mo)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$7/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$84/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted mt-3">
              <strong className="text-foreground">For 500 runs of a 5-step workflow:</strong> Zapier costs $828/yr. Make costs $108/yr. n8n self-hosted costs ~$84/yr. That is a $720/yr difference between Zapier and Make, or $744/yr between Zapier and n8n self-hosted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">How to Reduce Your Zapier Bill</h2>
            <div className="space-y-3 text-sm text-muted">
              <p>If you are staying on Zapier, here are ways to reduce task consumption:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-foreground">Consolidate steps.</strong> Use Zapier&apos;s built-in Formatter or Code steps to handle multiple transformations in one task instead of chaining individual actions.</li>
                <li><strong className="text-foreground">Use Filters early.</strong> A Filter that stops a Zap does not count as a task (Zapier does not charge for filtered-out runs). Place filters before expensive multi-step chains.</li>
                <li><strong className="text-foreground">Use Paths wisely.</strong> Each Path branch counts as a task when executed. Avoid unnecessary paths.</li>
                <li><strong className="text-foreground">Move high-volume flows to Make.</strong> Keep simple two-step Zaps on Zapier (where it is still convenient) and move complex multi-step flows to Make.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Does Zapier charge for the trigger step?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  No. Zapier does not count the trigger as a task. Only action steps count. A Zap with 1 trigger + 1 action = 1 task per run. A Zap with 1 trigger + 5 actions = 5 tasks per run.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Does Make count the trigger module?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. Make counts every module including the trigger as an operation. A scenario with 1 trigger + 4 actions = 5 operations. However, with 10,000 operations on Core ($10.59/mo) versus Zapier&apos;s 750 tasks on Professional ($29.99/mo), Make is still far more cost-effective.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  When does Zapier still make sense despite higher cost?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Zapier makes sense when: (1) you have very low volume (under 100 tasks/mo fits Free), (2) you need integrations only Zapier has (7,000+ vs Make&apos;s 1,800+), (3) your team is non-technical and values Zapier&apos;s simpler interface, or (4) you only use simple two-step Zaps where the multi-step cost trap does not apply.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            comparisons={["zapier-vs-make"]}
            guides={["when-zapier-costs-more-than-make", "automation-for-email-marketing", "automation-error-monitoring-setup"]}
          />
        </div>
      </article>
    </>
  );
}
