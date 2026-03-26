import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Zapier Growth Path: Free → Professional → Team — Volume-Based Decisions",
  description:
    "Zapier pricing by volume: Free (100 tasks/mo), Professional $29.99/mo (750 tasks), Team $103.50/mo (2,000 tasks). When you hit free limits, when Pro makes sense, and when Team is needed.",
};

export default function ZapierGrowthPathPage() {
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
              Zapier Growth Path
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Tool Maturity
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Zapier Growth Path: Free &rarr; Professional &rarr; Team &mdash; Volume-Based Decisions
          </h1>
          <p className="text-lg text-muted">
            Zapier&apos;s pricing is volume-based: 100 tasks/mo free, 750 tasks at $29.99/mo, 2,000 tasks at $103.50/mo. The catch is multi-step Zaps &mdash; a 5-step Zap uses 5 tasks per run, burning through your allocation 5x faster than you expect. This guide shows exactly when you&apos;ll hit each limit and whether upgrading or switching to Make saves more money.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Pricing verified from Zapier vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">The Three Main Tiers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tasks/Month</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">100</td>
                  <td className="px-4 py-2.5">Two-step Zaps only (single trigger + single action)</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Professional</td>
                  <td className="px-4 py-2.5">$29.99/mo</td>
                  <td className="px-4 py-2.5">$239.88/yr ($19.99/mo)</td>
                  <td className="px-4 py-2.5">750</td>
                  <td className="px-4 py-2.5">Multi-step Zaps, paths, webhooks</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Team</td>
                  <td className="px-4 py-2.5">$103.50/mo</td>
                  <td className="px-4 py-2.5">$828/yr ($69/mo)</td>
                  <td className="px-4 py-2.5">2,000</td>
                  <td className="px-4 py-2.5">Shared workspaces, premier support</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Admin controls, SAML SSO, audit logs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 1: Free (100 Tasks/mo) &mdash; Testing Only</h2>
          <p className="text-muted mb-4">
            Zapier&apos;s free tier gives you unlimited Zaps but only 100 tasks/month and restricts you to two-step Zaps (one trigger, one action). This is enough to test 2&ndash;3 simple automations, but not enough for production use.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Free Limits That Matter</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>100 tasks/month &mdash; a single Zap running 4x/day uses all 100 tasks in 25 days</li>
              <li>Two-step only &mdash; no multi-step workflows, no conditional paths, no filters</li>
              <li>15-minute polling interval &mdash; triggers check for new data every 15 minutes (paid plans: as fast as 1 minute)</li>
              <li>No webhooks &mdash; only scheduled polling triggers</li>
            </ul>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Professional</p>
            <p className="text-sm text-muted">When any of these happen: you need multi-step Zaps (trigger &rarr; format data &rarr; create record &rarr; send notification), you exceed 100 tasks/month, or you need faster than 15-minute polling. Most teams outgrow Free within the first month of real usage.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 2: Professional ($29.99/mo) &mdash; The Practical Tier</h2>
          <p className="text-muted mb-4">
            Professional unlocks multi-step Zaps, conditional paths, webhooks, and increases your limit to 750 tasks/month. This is where Zapier becomes genuinely useful.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">The Multi-Step Task Trap</h3>
            <p className="text-sm text-muted">
              A critical pricing detail: each step in a multi-step Zap counts as one task. A 5-step Zap running once uses 5 tasks. If that Zap runs 10 times/day, it consumes 1,500 tasks/month &mdash; double your 750 Professional limit.
            </p>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-muted"><strong className="text-foreground">Example:</strong> &ldquo;New form submission &rarr; Create CRM contact &rarr; Add to email list &rarr; Send Slack notification &rarr; Log to Google Sheet&rdquo; = 5 tasks per run.</p>
              <p className="text-sm text-muted">10 form submissions/day &times; 5 steps = 50 tasks/day = 1,500 tasks/month</p>
              <p className="text-sm text-muted">That single Zap exceeds Professional&apos;s 750-task limit.</p>
            </div>
          </div>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Volume Planning</h3>
            <p className="text-sm text-muted">
              With 750 tasks/month on Professional: if your average Zap has 3 steps, you can run ~250 executions/month total across all Zaps. That&apos;s ~8 executions/day. Enough for a solo founder with light automation, tight for a team of 5.
            </p>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Team</p>
            <p className="text-sm text-muted">When you consistently exceed 750 tasks/month (check your Zapier dashboard usage page), when multiple team members need to edit Zaps (shared workspaces), or when you need premier support for mission-critical automations.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 3: Team ($103.50/mo) &mdash; Shared Workspaces</h2>
          <p className="text-muted mb-4">
            Team increases your limit to 2,000 tasks/month and adds shared workspaces and premier support. At $103.50/mo ($828/yr annual), the cost per task drops significantly.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Cost Per Task Comparison</h3>
            <div className="space-y-1">
              <p className="text-sm text-muted"><strong className="text-foreground">Professional:</strong> $29.99/mo &divide; 750 tasks = $0.040/task</p>
              <p className="text-sm text-muted"><strong className="text-foreground">Team:</strong> $103.50/mo &divide; 2,000 tasks = $0.052/task</p>
              <p className="text-sm text-muted"><strong className="text-foreground">Make Core:</strong> $10.59/mo &divide; 10,000 ops = $0.001/op</p>
            </div>
            <p className="text-sm text-muted mt-2">
              Even at Team tier, Zapier costs ~50x more per operation than Make. The simplicity premium is real &mdash; but at Team volumes, it&apos;s worth evaluating whether Make saves enough to justify the learning curve.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Switch Instead of Upgrade</h2>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Make as an Alternative</h3>
            <p className="text-sm text-muted">
              Make Core costs $10.59/mo for 10,000 operations/month. Zapier Professional costs $29.99/mo for 750 tasks. At the same budget, Make gives you 13x more executions. The tradeoff: Make has a steeper learning curve and ~1,800 integrations vs Zapier&apos;s 7,000+.
            </p>
            <p className="text-sm text-muted mt-2">
              <strong className="text-foreground">Switch to Make when:</strong> you&apos;re spending $50+/mo on Zapier, you have complex multi-step workflows, and your team can handle a visual flowchart builder. Stay with Zapier when simplicity matters more than cost.
            </p>
          </div>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How quickly will I outgrow Zapier Free?</h3>
                <p className="text-muted">Most teams outgrow the 100-task free limit within 2&ndash;4 weeks of real usage. A single Zap running 4 times/day uses all 100 tasks in 25 days. Free is for testing, not production.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How does Zapier count multi-step tasks?</h3>
                <p className="text-muted">Each step in a Zap counts as one task. A 5-step Zap running once uses 5 tasks. This means a modest 3-step Zap running 10 times/day consumes 900 tasks/month &mdash; exceeding Professional&apos;s 750 limit.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Zapier Professional worth $29.99/month?</h3>
                <p className="text-muted">Yes if you need multi-step Zaps and your volume stays under 750 tasks/month. No if you have high-volume workflows &mdash; Make Core at $10.59/mo gives you 10,000 operations for a third of the price.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I switch from Zapier to Make?</h3>
                <p className="text-muted">When you&apos;re consistently exceeding 750 tasks/month or spending $50+/mo. Make Core ($10.59/mo) provides 10,000 operations. The switch saves $233+/year. The tradeoff is a steeper learning curve and fewer pre-built integrations (1,800 vs 7,000+).</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            comparisons={["zapier-vs-make", "zapier-vs-n8n"]}
            guides={["when-zapier-costs-more-than-make", "zapier-multi-step-task-counting", "migrate-zapier-to-make"]}
          />
        </div>
      </article>
    </>
  );
}
