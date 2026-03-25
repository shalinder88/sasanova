import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The 7 Biggest Automation Tool Mistakes",
  description:
    "Mistake #1: Staying on Zapier Professional ($29.99/mo) when Make Core ($10.59/mo) handles 13x more tasks. The multi-step task burn trap, self-hosting myths, and automation overkill — with exact pricing.",
};

export default function BiggestAutomationMistakes() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Biggest Automation Mistakes</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Buyer Mistakes</span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The 7 Biggest Automation Tool Mistakes
          </h1>
          <p className="text-lg text-muted">
            Automation tools promise to save hours. They can also burn hundreds of dollars on tasks that don&apos;t need automating, platforms that charge too much, and complexity that creates more work than it eliminates. Here are the 7 mistakes &mdash; with exact numbers.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Mistake 1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 1: Not Understanding the Multi-Step Task Burn on Zapier</h2>
          <p className="text-muted mb-4">
            A 5-step Zap on Zapier consumes 5 tasks per run. If that Zap triggers 10 times/day, you burn 50 tasks/day or 1,500/month. Zapier Professional ($29.99/mo) includes only 750 tasks &mdash; you&apos;d need Team ($103.50/mo) for 2,000 tasks. The same workflow on Make Core ($10.59/mo) uses 5 operations per run but has 10,000 ops/mo &mdash; handling 2,000 runs before hitting the limit.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Before building, calculate: (steps per workflow) &times; (daily triggers) &times; 30. If the result exceeds 750, Zapier Professional isn&apos;t enough. Make Core ($10.59/mo) handles the same volume for 65% less.</p>
          </div>

          {/* ── Mistake 2 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 2: Automating Tasks That Take 2 Minutes</h2>
          <p className="text-muted mb-4">
            Building a Zap takes 15&ndash;45 minutes. Maintaining it (error handling, updates when apps change) takes 10&ndash;30 minutes per quarter. If the manual task takes 2 minutes and happens 10 times/month, you spend 20 minutes/month doing it manually. The automation pays for itself in setup time after 3&ndash;6 months, then you&apos;re still paying $29.99/mo for Zapier. Total cost: $180&ndash;$360/year for something that saves 20 minutes/month.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Only automate tasks that are: (a) frequent (10+/day), (b) multi-step, and (c) time-sensitive. A new lead notification? Worth automating. Copying data between two tools once a week? Just do it manually.</p>
          </div>

          {/* ── Mistake 3 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 3: Paying for Zapier When Native Integrations Exist</h2>
          <p className="text-muted mb-4">
            HubSpot natively connects to Gmail, Outlook, Slack, Zoom, and 1,700+ marketplace apps for free. Pipedrive connects to Slack, Google Calendar, and accounting tools natively. Using Zapier ($29.99/mo) to connect tools that already have native integrations wastes $360/year.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Before adding middleware, check: (1) Does the app have a native integration? (2) Does the CRM/tool marketplace have an app? (3) Can the API handle it with a simple webhook? Only add Zapier/Make when native options genuinely don&apos;t exist.</p>
          </div>

          {/* ── Mistake 4 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 4: Self-Hosting n8n Before You&apos;re Ready</h2>
          <p className="text-muted mb-4">
            n8n Community is free and self-hosted. But &ldquo;free&rdquo; ignores server costs ($5&ndash;$20/mo for a VPS), maintenance time (updates, SSL certs, backups), and the learning curve. If you value your time at $50/hr and spend 2 hours/month on maintenance, the real cost is $105&ndash;$120/mo &mdash; more than Make Pro ($18.82/mo) or Zapier Professional ($29.99/mo).
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Self-host n8n only if: (a) you already manage servers, (b) you need data residency/compliance, or (c) you have 10,000+ monthly executions where cloud costs would exceed $50/mo. Otherwise, n8n Cloud ($20/mo Starter) or Make Core ($10.59/mo) is a better value.</p>
          </div>

          {/* ── Mistake 5 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 5: Building Complex Automations Without Error Handling</h2>
          <p className="text-muted mb-4">
            A broken Zap that silently fails loses leads. If your lead-to-CRM automation fails 5% of the time and you get 200 leads/month, that&apos;s 10 lost leads/month. At $500 average deal value, that&apos;s $5,000/month in potential revenue lost to a broken automation. Zapier Professional shows error logs. Make Core ($10.59/mo) has built-in error handling routes. n8n has try/catch nodes.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Every automation needs: (1) error notification (email or Slack alert on failure), (2) retry logic for transient failures, (3) a fallback route for persistent errors. Make and n8n handle this natively. Zapier requires a separate error-handling Zap.</p>
          </div>

          {/* ── Mistake 6 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 6: Not Comparing Task Counting Models</h2>
          <p className="text-muted mb-4">
            Zapier counts tasks (each step = 1 task). Make counts operations (each module = 1 op). n8n counts executions (each workflow run = 1 execution regardless of steps). A 5-step workflow running 100 times costs: Zapier: 500 tasks. Make: 500 operations. n8n: 100 executions. n8n is 5x more efficient for multi-step workflows.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Entry Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">5-Step Workflow &times; 100 Runs</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">% of Allowance Used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Zapier Professional</td>
                  <td className="px-4 py-2.5 text-muted">$29.99/mo (750 tasks)</td>
                  <td className="px-4 py-2.5 text-muted">500 tasks</td>
                  <td className="px-4 py-2.5 text-muted">67%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Make Core</td>
                  <td className="px-4 py-2.5 text-muted">$10.59/mo (10,000 ops)</td>
                  <td className="px-4 py-2.5 text-muted">500 ops</td>
                  <td className="px-4 py-2.5 text-muted">5%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">n8n Starter</td>
                  <td className="px-4 py-2.5 text-muted">$20/mo (2,500 executions)</td>
                  <td className="px-4 py-2.5 text-muted">100 executions</td>
                  <td className="px-4 py-2.5 text-muted">4%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Calculate your actual consumption model before choosing. For multi-step workflows at any volume, Make ($10.59/mo) or n8n ($20/mo cloud, free self-hosted) is dramatically cheaper than Zapier ($29.99/mo).</p>
          </div>

          {/* ── Mistake 7 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 7: Ignoring HubSpot/ActiveCampaign&apos;s Built-In Automation</h2>
          <p className="text-muted mb-4">
            Teams on HubSpot Professional ($890/mo) or ActiveCampaign Plus ($49/mo) sometimes also pay for Zapier ($29.99/mo) to handle automations that the platform already supports natively. HubSpot Professional includes 300+ workflow actions. ActiveCampaign Plus includes the visual automation builder. Check what&apos;s built in before adding middleware.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Audit your Zaps. If 3+ Zaps connect tools that your main platform already integrates with natively, kill them. Save $29.99/mo in Zapier fees and reduce points of failure.</p>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">What&apos;s the most common automation mistake?</h3>
          <p className="text-muted mb-4">
            Overpaying for Zapier. Most teams using Zapier Professional ($29.99/mo) would save 50&ndash;65% on Make Core ($10.59/mo) with the same functionality. The switching cost is rebuilding workflows &mdash; typically 1&ndash;2 hours for 5 Zaps.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">When should I upgrade from Zapier Free?</h3>
          <p className="text-muted mb-4">
            When you need multi-step workflows (3+ steps) or exceed 100 tasks/month. But don&apos;t upgrade to Zapier Professional &mdash; switch to Make Core ($10.59/mo) for 10,000 ops. Only stay on Zapier if you need a specific integration Make doesn&apos;t support.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "when-zapier-costs-more-than-make",
            "automation-pricing-compared",
            "zapier-vs-native-integrations",
            "how-to-choose-automation-tool",
          ]}
        />
      </article>
    </>
  );
}
