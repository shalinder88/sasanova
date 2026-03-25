import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Automation Tool Costs in 2026: Task Counting Changes Everything",
  description:
    "Annual cost comparison of Zapier, Make, n8n, and Pipedream at 500 to 50K tasks/month. Normalized task counting, self-hosting break-even analysis, and best-value verdicts.",
};

export default function AutomationAnnualCost2026Page() {
  return (
    <>
      {/* Breadcrumb */}
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
              Automation Annual Cost 2026
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Annual Cost Comparison
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Automation Tool Costs in 2026: Task Counting Changes Everything
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Zapier counts tasks. Make counts operations. n8n counts executions. Pipedream counts
            credits. These are not the same thing &mdash; and the difference means one platform
            can cost 10x more than another for the exact same workflow. This guide normalizes the
            math so you can compare annual costs honestly.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>17 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Task Counting Normalization */}
          <section>
            <h2 className="text-xl font-bold mb-3">How Each Platform Counts Usage (And Why It Matters)</h2>
            <p className="text-muted leading-relaxed mb-4">
              Before comparing annual costs, you must understand what you are paying for.
              A 5-step workflow running 1,000 times per month costs radically different
              amounts across platforms because of how they count.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Unit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What Counts</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5-Step Workflow x 1,000 Runs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Task</td>
                    <td className="px-4 py-2.5 text-muted">Each action step (trigger excluded)</td>
                    <td className="px-4 py-2.5 text-muted">= 4,000 tasks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Operation</td>
                    <td className="px-4 py-2.5 text-muted">Each module (trigger included)</td>
                    <td className="px-4 py-2.5 text-muted">= 5,000 operations</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Execution</td>
                    <td className="px-4 py-2.5 text-muted">One complete workflow run</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">= 1,000 executions</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">Credit</td>
                    <td className="px-4 py-2.5 text-muted">Each step (like Zapier)</td>
                    <td className="px-4 py-2.5 text-muted">= 5,000 credits</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              The key insight: <strong className="text-foreground">n8n counts 1 unit for the same work
              that costs Zapier 4 units and Make 5 units.</strong> For complex workflows with many
              steps, n8n&apos;s per-execution billing is dramatically cheaper per unit. For simple
              2-step automations, the difference narrows. Your specific workflow complexity determines
              which platform is cheapest.
            </p>
          </section>

          {/* Annual Cost Table — Normalized by Workflow Runs */}
          <section>
            <h2 className="text-xl font-bold mb-4">Annual Cost by Volume (Assuming 4-Step Average Workflow)</h2>
            <p className="text-muted leading-relaxed mb-4">
              To make a fair comparison, we normalize to &ldquo;workflow runs per month&rdquo; using
              a typical 4-step workflow (1 trigger + 3 actions). The Zapier tasks column shows the
              equivalent tasks consumed; Make shows operations; n8n shows executions.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Workflow Runs/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Tasks Used</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pipedream Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">500<br /><span className="text-xs text-muted">(= 1,500 Zapier tasks)</span></td>
                    <td className="px-4 py-2.5 text-muted">1,500</td>
                    <td className="px-4 py-2.5 text-muted">$360/yr<br /><span className="text-xs">Professional</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/yr<br /><span className="text-xs font-normal text-muted">Free (1K ops)</span></td>
                    <td className="px-4 py-2.5 text-muted">$240/yr<br /><span className="text-xs">Starter</span></td>
                    <td className="px-4 py-2.5 text-muted">$0/yr<br /><span className="text-xs">Free (daily limit)</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">2,000<br /><span className="text-xs text-muted">(= 6,000 Zapier tasks)</span></td>
                    <td className="px-4 py-2.5 text-muted">6,000</td>
                    <td className="px-4 py-2.5 text-muted">$1,244/yr<br /><span className="text-xs">Team</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$127/yr<br /><span className="text-xs font-normal text-muted">Core (10K ops)</span></td>
                    <td className="px-4 py-2.5 text-muted">$240/yr<br /><span className="text-xs">Starter (2.5K exec)</span></td>
                    <td className="px-4 py-2.5 text-muted">$228/yr<br /><span className="text-xs">Basic</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000<br /><span className="text-xs text-muted">(= 15,000 Zapier tasks)</span></td>
                    <td className="px-4 py-2.5 text-muted">15,000</td>
                    <td className="px-4 py-2.5 text-muted">$2,196/yr<br /><span className="text-xs">Team (20K tasks)</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$127/yr<br /><span className="text-xs font-normal text-muted">Core (10K ops, buy 15K extra)</span></td>
                    <td className="px-4 py-2.5 text-muted">$600/yr<br /><span className="text-xs">Pro (6K exec)</span></td>
                    <td className="px-4 py-2.5 text-muted">$588/yr<br /><span className="text-xs">Advanced</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000<br /><span className="text-xs text-muted">(= 30,000 Zapier tasks)</span></td>
                    <td className="px-4 py-2.5 text-muted">30,000</td>
                    <td className="px-4 py-2.5 text-muted">$5,988/yr<br /><span className="text-xs">Team (50K tasks)</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$420/yr<br /><span className="text-xs font-normal text-muted">Core + ops add-on</span></td>
                    <td className="px-4 py-2.5 text-muted">$600/yr<br /><span className="text-xs">Pro</span></td>
                    <td className="px-4 py-2.5 text-muted">$948/yr<br /><span className="text-xs">Advanced</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000<br /><span className="text-xs text-muted">(= 150,000 Zapier tasks)</span></td>
                    <td className="px-4 py-2.5 text-muted">150,000</td>
                    <td className="px-4 py-2.5 text-muted">$14,400+/yr<br /><span className="text-xs">Enterprise territory</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$1,020/yr<br /><span className="text-xs font-normal text-muted">Teams + ops add-ons</span></td>
                    <td className="px-4 py-2.5 text-muted">Custom<br /><span className="text-xs">Enterprise</span></td>
                    <td className="px-4 py-2.5 text-muted">Custom<br /><span className="text-xs">Business</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              Zapier costs based on monthly billing (annual billing saves ~33%). Make costs based on
              published pricing as of March 2026. n8n Cloud based on published plan limits. Pipedream
              based on credit-based billing at published rates.
            </p>
          </section>

          {/* Premium App Surcharges */}
          <section>
            <h2 className="text-xl font-bold mb-3">Premium App Surcharges: The Cost Nobody Budgets For</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Zapier:</strong>{" "}
                  Premium apps (Salesforce, Shopify, HubSpot, QuickBooks, and ~50 others) require
                  the Team plan ($103.50/mo minimum). If any single Zap uses a premium app, your
                  entire account needs Team. You cannot have one Zap on Team and others on Professional.
                  This single requirement pushes many users from $360/yr to $1,242/yr.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Make:</strong>{" "}
                  No premium app surcharges. All 1,500+ integrations are available on all paid plans.
                  This is one of Make&apos;s strongest competitive advantages. The catch: some advanced
                  modules within apps require higher plans (e.g., HTTP module customization on Teams plan).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">n8n:</strong>{" "}
                  No premium app surcharges on cloud or self-hosted. All 400+ integrations available
                  on all plans. However, n8n has fewer pre-built integrations (400 vs Zapier&apos;s 7,000+).
                  If your tool is not supported, you build a custom HTTP node &mdash; which requires
                  development knowledge.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Pipedream:</strong>{" "}
                  No premium app concept. All integrations available on all plans. Pipedream&apos;s developer-first
                  model means most integrations are code-based, which gives unlimited flexibility but
                  requires JavaScript/Python knowledge.
                </span>
              </li>
            </ul>
          </section>

          {/* Self-Hosting n8n Break-Even */}
          <section>
            <h2 className="text-xl font-bold mb-3">Self-Hosting n8n: Break-Even Analysis</h2>
            <p className="text-muted leading-relaxed mb-4">
              n8n&apos;s self-hosted Community edition is free with unlimited executions. The real cost
              is infrastructure plus your time. Here is the annual break-even against cloud alternatives
              at different team hourly rates.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Component</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Light (500 runs/mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Medium (5K runs/mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Heavy (50K runs/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">VPS / Cloud server</td>
                    <td className="px-4 py-2.5 text-muted">$72/yr<br /><span className="text-xs">$6/mo DigitalOcean droplet</span></td>
                    <td className="px-4 py-2.5 text-muted">$144/yr<br /><span className="text-xs">$12/mo with more RAM</span></td>
                    <td className="px-4 py-2.5 text-muted">$300/yr<br /><span className="text-xs">$25/mo dedicated resources</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Maintenance time (3 hrs/mo)</td>
                    <td className="px-4 py-2.5 text-muted" colSpan={3}>$0 (hobby) / $1,800/yr ($50/hr) / $3,600/yr ($100/hr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors bg-surface-alt">
                    <td className="px-4 py-2.5 font-bold text-foreground">Total @ $0/hr</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$72/yr</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$144/yr</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$300/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors bg-surface-alt">
                    <td className="px-4 py-2.5 font-bold text-foreground">Total @ $50/hr</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">$1,872/yr</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">$1,944/yr</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">$2,100/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors bg-surface-alt">
                    <td className="px-4 py-2.5 font-bold text-foreground">Total @ $100/hr</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">$3,672/yr</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">$3,744/yr</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">$3,900/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-2">Break-Even Point</p>
              <ul className="text-sm text-muted space-y-1.5">
                <li>&bull; <strong className="text-foreground">At $0/hr (hobby/student):</strong> Self-hosted n8n beats everything at every volume. It is the cheapest option, period.</li>
                <li>&bull; <strong className="text-foreground">At $50/hr:</strong> Self-hosted n8n only beats Zapier when your Zapier bill exceeds ~$155/month ($1,860/yr). That is roughly the Team plan at 5,000+ tasks. Make is still cheaper than self-hosted n8n at this hourly rate.</li>
                <li>&bull; <strong className="text-foreground">At $100/hr:</strong> Self-hosted n8n only beats Zapier when your Zapier bill exceeds ~$310/month. At this rate, Make is almost always cheaper than self-hosting. The only reason to self-host is data sovereignty or unlimited scale.</li>
              </ul>
            </div>
          </section>

          {/* Cheapest at Each Volume */}
          <section>
            <h2 className="text-xl font-bold mb-4">Cheapest Platform at Each Volume</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Volume (Runs/Mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest (Cloud Only)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest (Including Self-Host)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">500</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Make Free / Pipedream Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/yr</td>
                    <td className="px-4 py-2.5 text-muted">n8n Self-Hosted ($72/yr @ $0/hr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">2,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Make Core</td>
                    <td className="px-4 py-2.5 text-muted">$127/yr</td>
                    <td className="px-4 py-2.5 text-muted">n8n Self-Hosted ($72/yr @ $0/hr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Make Core</td>
                    <td className="px-4 py-2.5 text-muted">~$200/yr (with extra ops)</td>
                    <td className="px-4 py-2.5 text-muted">n8n Self-Hosted ($144/yr @ $0/hr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Make Core + Add-On</td>
                    <td className="px-4 py-2.5 text-muted">~$420/yr</td>
                    <td className="px-4 py-2.5 text-muted">n8n Self-Hosted ($144/yr @ $0/hr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Make Teams + Add-Ons</td>
                    <td className="px-4 py-2.5 text-muted">~$1,020/yr</td>
                    <td className="px-4 py-2.5 text-muted">n8n Self-Hosted ($300/yr @ $0/hr)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              Make dominates cloud-only pricing at every tier above the free tier. n8n self-hosted
              is cheapest in absolute dollars but only if your maintenance time is free or very low-cost.
            </p>
          </section>

          {/* Hidden Costs */}
          <section>
            <h2 className="text-xl font-bold mb-4">Hidden Costs: What the Pricing Page Doesn&apos;t Show</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Zapier</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; <strong className="text-foreground">Premium apps force plan upgrades.</strong> If any single Zap uses Salesforce, Shopify, HubSpot, or ~50 other &ldquo;premium&rdquo; apps, you need Team plan ($103.50/mo minimum). This single app classification can triple your bill.</li>
                  <li>&bull; <strong className="text-foreground">Multi-step Zaps consume tasks fast.</strong> A 10-step Zap running 100 times/day uses 1,000 tasks/day = 30,000 tasks/month. That exceeds Professional&apos;s 750-task limit on day one.</li>
                  <li>&bull; <strong className="text-foreground">Paths and filters still count.</strong> Filter steps that stop a Zap still consume a task for every step that ran before the filter. A 5-step Zap that filters out 80% of triggers still uses 1&ndash;3 tasks per filtered run.</li>
                  <li>&bull; <strong className="text-foreground">No rollover.</strong> Unused tasks do not carry over to next month. If you buy 2,000 tasks and use 500, you lose 1,500.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Make</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; <strong className="text-foreground">Data transfer limits.</strong> Make has a separate data transfer cap (1 GB on Free, higher on paid plans). Workflows that process files, images, or large API responses can hit the data cap before the operations cap.</li>
                  <li>&bull; <strong className="text-foreground">Trigger module counts as an operation.</strong> Unlike Zapier (which does not count triggers), Make counts the Watch/trigger module. A 5-module scenario uses 5 operations per run, not 4.</li>
                  <li>&bull; <strong className="text-foreground">Scenario scheduling has minimum intervals.</strong> Free plan scenarios can only run every 15 minutes. Core runs every 1 minute. If you need real-time webhooks on the free plan, you need instant triggers (limited modules support this).</li>
                  <li>&bull; <strong className="text-foreground">Teams plan required for multiple users.</strong> Make Core and Pro are single-user. If your team has 2+ people building scenarios, you need Teams ($29/mo minimum) &mdash; regardless of operation volume.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">n8n</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; <strong className="text-foreground">Self-hosted maintenance is real work.</strong> Docker updates, SSL certificate renewals, database backups, monitoring uptime, debugging failed workflows at 2 AM. Budget 2&ndash;5 hours/month minimum. More during upgrades or outages.</li>
                  <li>&bull; <strong className="text-foreground">Cloud plan limits are per-execution, not per-step</strong> &mdash; which sounds great until you realize sub-workflows each count as separate executions. A main workflow calling 3 sub-workflows uses 4 executions per run.</li>
                  <li>&bull; <strong className="text-foreground">Fewer pre-built integrations.</strong> n8n has ~400 integrations vs Zapier&apos;s 7,000+. If your stack includes niche SaaS tools, you may need to build custom HTTP Request nodes, which requires API knowledge.</li>
                  <li>&bull; <strong className="text-foreground">No native mobile app.</strong> Monitoring and debugging workflows requires a desktop browser. There is no mobile app for quick checks or fixes when you are away from your computer.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Pipedream</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; <strong className="text-foreground">Developer-first = developer-required.</strong> Pipedream workflows are code-based (Node.js, Python). Non-developers cannot build or modify workflows without help. The &ldquo;no-code&rdquo; UI is minimal compared to Zapier or Make.</li>
                  <li>&bull; <strong className="text-foreground">Free tier has daily credit limits.</strong> The free plan offers credits per day, not per month. A burst of webhook activity on a single day can exhaust your daily allocation and queue subsequent events.</li>
                  <li>&bull; <strong className="text-foreground">Credit consumption varies by step type.</strong> Some steps (HTTP requests, data transformations) cost 1 credit. Others (AI/ML steps, large data processing) can cost more. The variable pricing makes budgeting harder.</li>
                  <li>&bull; <strong className="text-foreground">Smaller community and support.</strong> Pipedream&apos;s community is smaller than Zapier or Make. Finding solutions to edge cases requires more self-reliance and documentation reading.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Best Value Verdicts */}
          <section>
            <h2 className="text-xl font-bold mb-4">Best Value Verdict at Each Volume</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Under 500 Workflow Runs/Month</p>
                <p className="text-sm text-muted">
                  <strong className="text-accent">Make Free</strong> is the clear winner for non-developers. You get 1,000 operations/month
                  and 2 active scenarios at no cost. Pipedream Free works for developers who want code-based
                  automation. Zapier&apos;s free tier (100 tasks, single-step only) is essentially useless for
                  real workflows. If you have zero budget and need zero maintenance, start with Make Free.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">2,000 &ndash; 5,000 Workflow Runs/Month</p>
                <p className="text-sm text-muted">
                  <strong className="text-accent">Make Core</strong> at $10.59/month is the best value for most teams. You get 10,000 operations,
                  unlimited active scenarios, and all integrations. Zapier at this volume costs $100+/month
                  (Team plan). n8n Cloud Starter ($20/mo) is competitive and better for complex multi-step
                  workflows where per-execution billing saves money. Zapier is only worth the premium if you
                  need its app breadth (7,000+ vs 1,500).
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">10,000+ Workflow Runs/Month</p>
                <p className="text-sm text-muted">
                  <strong className="text-accent">Make Teams</strong> or <strong className="text-accent">n8n Self-Hosted</strong> depending on your team&apos;s technical
                  capability. Make remains the best cloud option with transparent pricing that scales
                  predictably. n8n self-hosted is the cheapest option for teams with DevOps capability
                  and data sovereignty requirements. Zapier at this volume costs $500&ndash;$1,200+/month
                  and is difficult to justify unless you are deeply embedded in its ecosystem.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">50,000+ Workflow Runs/Month</p>
                <p className="text-sm text-muted">
                  <strong className="text-accent">n8n Self-Hosted</strong> is the only option that scales to this volume without
                  enterprise-level pricing. Make Teams with operation add-ons can work but costs climb
                  into the $1,000+/year range. Zapier is firmly in enterprise territory ($14,400+/year).
                  At this scale, the question is not which is cheapest &mdash; it is whether your team
                  can maintain self-hosted infrastructure reliably.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is Zapier so much more expensive than Make?</h3>
                <p className="text-sm text-muted">Two reasons: per-task pricing (vs Make&apos;s per-operation pricing, which costs less per unit) and the premium app requirement that forces Team plan upgrades. Zapier&apos;s value proposition is convenience, breadth (7,000+ apps), and simplicity. You pay a premium for the lowest learning curve and widest integration coverage. If those matter less than cost, Make or n8n will save you 60&ndash;90%.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I calculate my actual task/operation usage?</h3>
                <p className="text-sm text-muted">Count the number of steps in each workflow, multiply by how many times it runs per month. On Zapier, subtract 1 step (trigger does not count). On Make, count all modules including the trigger. On n8n, just count workflow runs regardless of steps. Most platforms show current usage in their billing dashboard &mdash; check there for real numbers before comparing.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is self-hosting n8n worth it for a non-technical team?</h3>
                <p className="text-sm text-muted">No. If nobody on your team is comfortable with Docker, SSH, Linux server administration, and debugging Node.js applications, self-hosting n8n will cost more in frustration and downtime than it saves in subscription fees. Use n8n Cloud or Make instead. Self-hosting is specifically for teams with existing DevOps capability.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I mix platforms to save money?</h3>
                <p className="text-sm text-muted">Yes, and many teams do. A common pattern: use Zapier for the 2&ndash;3 integrations that only Zapier supports (premium apps), and route everything else through Make. This hybrid approach keeps the Zapier bill low (Professional plan, few tasks) while Make handles the volume. The overhead is managing two platforms, which is manageable for teams with fewer than 20 active workflows.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What happens when I exceed my plan&apos;s task/operation limit?</h3>
                <p className="text-sm text-muted">Zapier pauses all Zaps until the next billing cycle or you upgrade. Make pauses scenario execution. n8n Cloud queues executions and may pause depending on plan. Pipedream queues events until credits refresh (daily on free, monthly on paid). None of them charge overage fees automatically &mdash; they pause instead, which can be worse if it stops a critical business workflow.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n", "pipedream"]}
            comparisons={["zapier-vs-make", "make-vs-n8n", "zapier-vs-n8n"]}
            guides={[
              "automation-pricing-compared",
              "migrate-zapier-to-make",
              "migrate-zapier-to-n8n",
              "best-automation-tool-solopreneurs",
            ]}
          />
        </div>
      </article>
    </>
  );
}
