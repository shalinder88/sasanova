import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "How to Monitor Your Automations: Error Alerts for Zapier, Make, and n8n",
  description:
    "Built-in monitoring per platform, what each tier offers, when to add external monitoring. Exact prices for Zapier, Make, and n8n error handling features.",
};

export default function AutomationErrorMonitoringSetupPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Automation Error Monitoring</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Automation Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How to Monitor Your Automations: Error Alerts for Zapier, Make, and n8n
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Automations fail silently. A broken Zap can run for weeks before anyone notices. Here is how to set up monitoring on each platform so you catch errors before they cost you deals, subscribers, or data.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-10">

          <section>
            <h2 className="text-xl font-bold mb-3">Why Automations Fail (And How Often)</h2>
            <p className="text-sm text-muted leading-relaxed">
              API rate limits, expired tokens, schema changes, timeout errors, and data format mismatches are the top causes of automation failures. Even well-built automations fail 2&ndash;5% of the time on average. At 1,000 tasks/month, that is 20&ndash;50 failed executions you might never see without proper monitoring.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Built-In Monitoring by Platform</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Error notifications</td>
                    <td className="px-4 py-2.5 text-muted">Email alerts on all plans (Free+)</td>
                    <td className="px-4 py-2.5 text-muted">Email alerts on all plans (Free+)</td>
                    <td className="px-4 py-2.5 text-muted">Email alerts (cloud Starter $20/mo+). Self-hosted: configure manually.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Error logs / history</td>
                    <td className="px-4 py-2.5 text-muted">Task history: Free 7 days, Pro $29.99/mo+ 30+ days</td>
                    <td className="px-4 py-2.5 text-muted">Execution log: Free 5 days, Core $10.59/mo 30 days, Pro $18.82/mo 60 days</td>
                    <td className="px-4 py-2.5 text-muted">Full execution log. Self-hosted: unlimited retention. Cloud: varies by plan.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Auto-retry</td>
                    <td className="px-4 py-2.5 text-muted">Automatic retries on errors (all plans)</td>
                    <td className="px-4 py-2.5 text-muted">Configurable retry per scenario (all plans)</td>
                    <td className="px-4 py-2.5 text-muted">Retry node available (all plans). Configurable attempts and delays.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Error routing</td>
                    <td className="px-4 py-2.5 text-muted">Paths with error conditions (Pro $29.99/mo+)</td>
                    <td className="px-4 py-2.5 text-muted">Error handler routes (all plans)</td>
                    <td className="px-4 py-2.5 text-muted">Error workflow node (all plans)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Webhook/Slack alerts</td>
                    <td className="px-4 py-2.5 text-muted">Build a monitoring Zap (uses tasks)</td>
                    <td className="px-4 py-2.5 text-muted">Error handler &rarr; Slack/webhook (built-in)</td>
                    <td className="px-4 py-2.5 text-muted">Error workflow &rarr; Slack/webhook (built-in)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Zapier: Error Monitoring Setup</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Step 1: Enable email notifications.</strong> Go to Settings &rarr; Notifications. Ensure &quot;Zap errors&quot; is enabled. Zapier sends email alerts when a Zap fails. Available on all plans including Free.</p>
              <p><strong className="text-foreground">Step 2: Check Task History regularly.</strong> Go to Zap History to see all executions. Free plans retain 7 days. Professional ($29.99/mo) and above retain 30+ days.</p>
              <p><strong className="text-foreground">Step 3: Build a monitoring Zap (advanced).</strong> Create a Zap that triggers on errors and sends a Slack message or webhook. Note: this uses tasks from your plan quota. On Professional (750 tasks/mo), a monitoring Zap that fires frequently can eat into your allowance.</p>
              <p><strong className="text-foreground">Limitation:</strong> Zapier does not have dedicated error routing on Free. Paths (conditional logic including error handling) require Professional at $29.99/mo. On Free (100 tasks/mo), you get email alerts only.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Make: Error Monitoring Setup</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Step 1: Enable email notifications.</strong> Each scenario has notification settings. Enable error alerts per scenario. Available on all plans including Free.</p>
              <p><strong className="text-foreground">Step 2: Add Error Handler routes.</strong> Make&apos;s error handling is a standout feature. You can add an error handler to any module that catches failures and routes them to a Slack notification, email, or data store. This works on all plans, including Free (1,000 ops/mo, 2 active scenarios).</p>
              <p><strong className="text-foreground">Step 3: Use the Incomplete Executions feature.</strong> Make stores failed executions and lets you replay them after fixing the issue. This is far more powerful than Zapier&apos;s replay, which only retries the same data.</p>
              <p><strong className="text-foreground">Execution log retention:</strong> Free: 5 days. Core ($10.59/mo): 30 days. Pro ($18.82/mo): 60 days. Teams ($34.12/mo): 60 days.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">n8n: Error Monitoring Setup</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Step 1: Set up Error Workflows.</strong> n8n has a dedicated Error Workflow feature. When any workflow fails, it triggers a separate error workflow. Use this to send Slack messages, emails, or POST to a monitoring webhook. Available on all plans including Community (self-hosted, free).</p>
              <p><strong className="text-foreground">Step 2: Use the Retry node.</strong> n8n&apos;s Error Trigger node captures errors with full execution data. The Wait node can add delays between retries. You have complete control over retry logic.</p>
              <p><strong className="text-foreground">Step 3: Self-hosted monitoring.</strong> If you self-host n8n (Community edition, free), pair it with Uptime Kuma or similar for infrastructure-level monitoring. n8n cloud (Starter $20/mo, Pro $50/mo) handles infrastructure monitoring for you.</p>
              <p><strong className="text-foreground">Advantage:</strong> n8n gives you the most control. Because you can write JavaScript/Python in any node, you can build sophisticated error handling that checks error types, escalates based on severity, and integrates with any monitoring tool via HTTP.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">When to Add External Monitoring</h2>
            <div className="space-y-3 text-sm text-muted">
              <p>Built-in monitoring is enough for most teams. Consider external monitoring when:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>You have 20+ active automations across platforms</li>
                <li>You need a centralized dashboard for all automation health</li>
                <li>You need to track automation SLAs (e.g., lead must be processed within 5 minutes)</li>
                <li>You self-host n8n and need infrastructure monitoring</li>
              </ul>
              <p className="mt-3"><strong className="text-foreground">Free options:</strong> Uptime Kuma (self-hosted, free), Healthchecks.io (free tier: 20 checks). <strong className="text-foreground">Paid options:</strong> Better Stack (from $29/mo), Datadog (enterprise).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Which platform has the best built-in error handling?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Make. Its error handler routes, incomplete execution storage, and replay capability work on all plans including Free. n8n is equally powerful but requires more technical setup. Zapier&apos;s error handling is the weakest &mdash; meaningful error routing requires Professional ($29.99/mo).
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Do error handling operations count toward my Make plan limits?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. Error handler modules in Make consume operations from your plan. On Core ($10.59/mo, 10,000 ops), an error handler that triggers frequently can add up. However, the cost is trivial compared to the value of catching failures.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Should I build a monitoring Zap to watch my other Zaps?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Only if you are on a plan with enough tasks to absorb it. On Professional (750 tasks/mo), a monitoring Zap that fires on every error can consume 5&ndash;10% of your tasks. On Team (2,000 tasks/mo), it is more practical. The simplest approach is to rely on Zapier&apos;s built-in email notifications and check Task History weekly.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            guides={["automation-error-handling", "how-to-choose-automation-tool", "multi-step-automation-cost-trap"]}
          />
        </div>
      </article>
    </>
  );
}
