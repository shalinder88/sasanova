import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Zapier vs Make vs n8n Pricing: The Honest Math Nobody Shows You",
  description:
    "Side-by-side pricing at every tier, how tasks vs operations vs executions actually count, hidden costs, and break-even analysis for self-hosting n8n.",
};

export default function AutomationPricingComparedPage() {
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
              Automation Pricing Compared
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Zapier vs Make vs n8n Pricing: The Honest Math Nobody Shows You
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Every automation platform&apos;s pricing page is designed to make you think it
            is cheap. The real cost depends on how they count usage, what they charge extra
            for, and how your specific workflows interact with their billing model. This
            guide does the math that their pricing pages avoid.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* How They Count Differently */}
          <section>
            <h2 className="text-xl font-bold mb-3">Tasks vs Operations vs Executions: They Count Differently</h2>
            <p className="text-muted leading-relaxed mb-3">
              This is the single most important thing to understand before comparing prices.
              A 5-step workflow running once per day for 30 days costs radically different
              amounts depending on the platform.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Unit Name</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What Counts as 1 Unit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5-Step Workflow, 1 Run</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Task</td>
                    <td className="px-4 py-2.5 text-muted">Each action step that executes</td>
                    <td className="px-4 py-2.5 text-muted">= 5 tasks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Operation</td>
                    <td className="px-4 py-2.5 text-muted">Each module that processes data</td>
                    <td className="px-4 py-2.5 text-muted">= 5 operations</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n</td>
                    <td className="px-4 py-2.5 text-muted">Execution</td>
                    <td className="px-4 py-2.5 text-muted">One complete workflow run</td>
                    <td className="px-4 py-2.5 text-muted">= 1 execution</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">Credit</td>
                    <td className="px-4 py-2.5 text-muted">Each step that executes (like Zapier)</td>
                    <td className="px-4 py-2.5 text-muted">= 5 credits</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Bardeen</td>
                    <td className="px-4 py-2.5 text-muted">Credit</td>
                    <td className="px-4 py-2.5 text-muted">Each premium action (non-premium are free)</td>
                    <td className="px-4 py-2.5 text-muted">Varies (0&ndash;5 credits)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed mb-3">
              Notice the critical difference: <strong className="text-foreground">n8n counts per workflow run</strong>,
              while Zapier, Make, and Pipedream count per step. A 10-step workflow running
              100 times a month consumes 1,000 operations in Make but only 100 executions in
              n8n. For complex workflows, this makes n8n up to 10x cheaper per billing unit.
            </p>
            <p className="text-muted leading-relaxed">
              Zapier&apos;s trigger step does not count as a task (only action steps count).
              Make counts the trigger module as an operation. So a 1-trigger + 4-action
              workflow = 4 Zapier tasks but 5 Make operations. This partially offsets
              Make&apos;s price advantage for simple workflows.
            </p>
          </section>

          {/* Side-by-Side Pricing */}
          <section>
            <h2 className="text-xl font-bold mb-4">Side-by-Side Pricing at Every Tier</h2>

            <h3 className="text-base font-semibold text-foreground mb-3">Zapier Plans (Monthly Billing)</h3>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tasks/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">100</td>
                    <td className="px-4 py-2.5 text-muted">5 Zaps, single-step only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$29.99</td>
                    <td className="px-4 py-2.5 text-muted">$19.99</td>
                    <td className="px-4 py-2.5 text-muted">750</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited Zaps, multi-step, webhooks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Team</td>
                    <td className="px-4 py-2.5 text-muted">$103.50</td>
                    <td className="px-4 py-2.5 text-muted">$69</td>
                    <td className="px-4 py-2.5 text-muted">2,000</td>
                    <td className="px-4 py-2.5 text-muted">Shared workspaces, premier support, premium apps</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                    <td className="px-4 py-2.5 text-muted">SSO, SAML, audit logs, admin controls</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-semibold text-foreground mb-3">Make Plans (Monthly Billing)</h3>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Ops/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">1,000</td>
                    <td className="px-4 py-2.5 text-muted">2 active scenarios, 15-min interval</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Core</td>
                    <td className="px-4 py-2.5 text-muted">$10.59</td>
                    <td className="px-4 py-2.5 text-muted">$10.59</td>
                    <td className="px-4 py-2.5 text-muted">10,000</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited scenarios, 1-min interval</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                    <td className="px-4 py-2.5 text-muted">$18.82</td>
                    <td className="px-4 py-2.5 text-muted">$18.82</td>
                    <td className="px-4 py-2.5 text-muted">10,000</td>
                    <td className="px-4 py-2.5 text-muted">Custom functions, full-text logs, priority</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Teams</td>
                    <td className="px-4 py-2.5 text-muted">$34.12</td>
                    <td className="px-4 py-2.5 text-muted">$34.12</td>
                    <td className="px-4 py-2.5 text-muted">10,000</td>
                    <td className="px-4 py-2.5 text-muted">Team features, high-priority execution</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-semibold text-foreground mb-3">n8n Plans</h3>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Executions/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Community (self-hosted)</td>
                    <td className="px-4 py-2.5 text-muted">$0 (+ server cost)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Self-managed infrastructure</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20</td>
                    <td className="px-4 py-2.5 text-muted">2,500</td>
                    <td className="px-4 py-2.5 text-muted">5 active workflows</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                    <td className="px-4 py-2.5 text-muted">$50</td>
                    <td className="px-4 py-2.5 text-muted">10,000</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited workflows, global regions</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">SSO, audit logs, dedicated support</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-semibold text-foreground mb-3">Pipedream Plans</h3>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Credits/Day</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">100</td>
                    <td className="px-4 py-2.5 text-muted">3 workflows, 30-sec timeout</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basic</td>
                    <td className="px-4 py-2.5 text-muted">$29</td>
                    <td className="px-4 py-2.5 text-muted">$19</td>
                    <td className="px-4 py-2.5 text-muted">2,000</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited workflows, 15-sec timeout</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Advanced</td>
                    <td className="px-4 py-2.5 text-muted">$75</td>
                    <td className="px-4 py-2.5 text-muted">$49</td>
                    <td className="px-4 py-2.5 text-muted">10,000</td>
                    <td className="px-4 py-2.5 text-muted">5-min timeout, priority support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Hidden Costs */}
          <section>
            <h2 className="text-xl font-bold mb-3">Hidden Costs: What the Pricing Pages Do Not Tell You</h2>

            <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Zapier Hidden Costs</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Premium apps require Team plan.</strong>{" "}
                  Salesforce, Shopify, HubSpot CRM, and other popular integrations are classified
                  as &ldquo;premium&rdquo; and require the Team plan ($103.50/month minimum). The
                  Professional plan page does not make this obvious until you try to enable the
                  integration.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Multi-step task multiplication.</strong>{" "}
                  A 5-step Zap running 200 times = 1,000 tasks, not 200. Beginners consistently
                  underestimate task consumption because they think in workflow runs, not steps.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Task add-on packs are expensive per unit.</strong>{" "}
                  If you exceed your plan&apos;s task limit, Zapier auto-pauses your Zaps until
                  the next billing cycle. You can buy task add-ons, but they cost more per task
                  than upgrading your plan in many cases.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Team seats add up.</strong>{" "}
                  The Team plan includes unlimited users, but the Professional plan is single-user.
                  If two people need to edit Zaps, you are forced into the Team plan even if your
                  task volume fits Professional.
                </span>
              </li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Make Hidden Costs</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Trigger modules count as operations.</strong>{" "}
                  Unlike Zapier where trigger steps are free, Make counts the Watch module as an
                  operation. This adds ~20% to your operation count compared to an equivalent Zapier
                  workflow (measured in steps, not cost).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Data transfer limits.</strong>{" "}
                  Make plans include data transfer caps (e.g., 1 GB on Core). If your workflows
                  process large files (PDFs, images, CSVs), you may hit this limit before your
                  operation limit.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Pro features behind higher tiers.</strong>{" "}
                  Custom functions, full-text log search, and priority execution require the Pro
                  plan ($18.82/month). The Core plan is deliberately limited to push power users up.
                </span>
              </li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-5 mb-2">n8n Hidden Costs</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Self-hosted maintenance time.</strong>{" "}
                  The software is free. Your time is not. Budget 2&ndash;5 hours per month for
                  updates, monitoring, and debugging. At $75/hour, that is $150&ndash;$375 per month
                  in opportunity cost.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Cloud Starter plan caps active workflows.</strong>{" "}
                  The $20/month Starter plan limits you to 5 active workflows. If you need 6+, you
                  jump to Pro at $50/month &mdash; a 150% price increase.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">No built-in error alerting (self-hosted).</strong>{" "}
                  You need to build your own error notification system. The time to set this up
                  properly (error workflows, Slack notifications, health checks) is 2&ndash;4 hours.
                </span>
              </li>
            </ul>
          </section>

          {/* Cost Calculator Scenarios */}
          <section>
            <h2 className="text-xl font-bold mb-4">Cost Calculator: Four Scenarios</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Self-Hosted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-foreground">
                      <strong>Light User</strong>
                      <br />
                      <span className="text-xs text-muted">3 workflows, 500 tasks/mo, 2-step avg</span>
                    </td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo<br /><span className="text-xs">Professional</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/mo<br /><span className="text-xs font-normal text-muted">Free (1,000 ops)</span></td>
                    <td className="px-4 py-2.5 text-muted">$20/mo<br /><span className="text-xs">Starter</span></td>
                    <td className="px-4 py-2.5 text-muted">$6/mo<br /><span className="text-xs">+ time</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-foreground">
                      <strong>Medium User</strong>
                      <br />
                      <span className="text-xs text-muted">8 workflows, 5,000 tasks/mo, 4-step avg</span>
                    </td>
                    <td className="px-4 py-2.5 text-muted">~$183/mo<br /><span className="text-xs">Team + add-ons</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$10.59/mo<br /><span className="text-xs font-normal text-muted">Core</span></td>
                    <td className="px-4 py-2.5 text-muted">$50/mo<br /><span className="text-xs">Pro</span></td>
                    <td className="px-4 py-2.5 text-muted">$12/mo<br /><span className="text-xs">+ time</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-foreground">
                      <strong>Heavy User</strong>
                      <br />
                      <span className="text-xs text-muted">20 workflows, 30,000 tasks/mo, 5-step avg</span>
                    </td>
                    <td className="px-4 py-2.5 text-muted">~$500+/mo<br /><span className="text-xs">Team + heavy add-ons</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$35/mo<br /><span className="text-xs font-normal text-muted">Core + ops add-on</span></td>
                    <td className="px-4 py-2.5 text-muted">$50/mo<br /><span className="text-xs">Pro (6,000 exec.)</span></td>
                    <td className="px-4 py-2.5 text-muted">$15/mo<br /><span className="text-xs">+ 3&ndash;5 hrs/mo</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-foreground">
                      <strong>Agency</strong>
                      <br />
                      <span className="text-xs text-muted">10 clients, 50 workflows, 100,000 tasks/mo</span>
                    </td>
                    <td className="px-4 py-2.5 text-muted">$1,200+/mo<br /><span className="text-xs">Enterprise territory</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$85/mo<br /><span className="text-xs font-normal text-muted">Teams + ops add-ons</span></td>
                    <td className="px-4 py-2.5 text-muted">Custom<br /><span className="text-xs">Enterprise</span></td>
                    <td className="px-4 py-2.5 text-muted">$25/mo<br /><span className="text-xs">+ 5&ndash;8 hrs/mo</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              Zapier costs assume monthly billing. Make and n8n costs based on published pricing as of March 2026. n8n self-hosted
              cost is server infrastructure only &mdash; does not include the value of maintenance time.
            </p>
          </section>

          {/* Break-Even: Self-Hosting n8n */}
          <section>
            <h2 className="text-xl font-bold mb-3">Break-Even Analysis: When Self-Hosting n8n Saves Money</h2>
            <p className="text-muted leading-relaxed mb-3">
              Self-hosted n8n costs $6&ndash;$25/month in infrastructure. The variable is your
              time. At different hourly rates, the break-even point against Zapier and Make shifts
              dramatically.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Your Hourly Rate</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Maint. Cost (3 hrs)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Total n8n Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Beats Zapier When...</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Beats Make When...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$0 (hobby/learning)</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">$10/mo</td>
                    <td className="px-4 py-2.5 text-muted">Always</td>
                    <td className="px-4 py-2.5 text-muted">Always (marginal)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$50/hr</td>
                    <td className="px-4 py-2.5 text-muted">$150</td>
                    <td className="px-4 py-2.5 text-muted">$160/mo</td>
                    <td className="px-4 py-2.5 text-muted">Zapier bill &gt; $160/mo</td>
                    <td className="px-4 py-2.5 text-muted">Rarely (Make is $10&ndash;85/mo)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$100/hr</td>
                    <td className="px-4 py-2.5 text-muted">$300</td>
                    <td className="px-4 py-2.5 text-muted">$310/mo</td>
                    <td className="px-4 py-2.5 text-muted">Zapier bill &gt; $310/mo</td>
                    <td className="px-4 py-2.5 text-muted">Never (Make is always cheaper)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$150/hr</td>
                    <td className="px-4 py-2.5 text-muted">$450</td>
                    <td className="px-4 py-2.5 text-muted">$460/mo</td>
                    <td className="px-4 py-2.5 text-muted">Zapier bill &gt; $460/mo</td>
                    <td className="px-4 py-2.5 text-muted">Never</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              The takeaway: self-hosted n8n beats Zapier for developers whose time has low
              opportunity cost (employed with spare hours, learning, or already managing servers).
              It almost never beats Make on pure cost unless your time is free. The reasons to
              choose self-hosted n8n over Make are data sovereignty, custom code capabilities,
              and zero-marginal-cost scaling &mdash; not raw pricing.
            </p>
          </section>

          {/* Annual vs Monthly */}
          <section>
            <h2 className="text-xl font-bold mb-3">Annual vs Monthly Billing: The Traps</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Zapier:</strong>{" "}
                  Annual billing saves ~33% (Professional drops from $29.99 to $19.99/month).
                  Significant savings. But Zapier does not prorate refunds if you downgrade or
                  cancel mid-term. If you are unsure about your volume, pay monthly for 3 months
                  first.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Make:</strong>{" "}
                  Annual and monthly prices are currently the same on published pricing. This may
                  change, but as of March 2026, there is no annual billing discount on Make&apos;s
                  standard plans. Less risk of lock-in.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">n8n Cloud:</strong>{" "}
                  Annual pricing is available with modest savings. The Starter plan is $20/month
                  either way; Pro at $50/month may have annual discounts available upon request.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Pipedream:</strong>{" "}
                  Annual billing saves ~34% (Basic drops from $29 to $19/month). Same caveat as
                  Zapier: commit only after you know your credit consumption rate.
                </span>
              </li>
            </ul>
          </section>

          {/* Who Should NOT */}
          <section>
            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-2">Who Should NOT Optimize Automation Pricing</p>
              <ul className="text-sm text-muted space-y-1.5">
                <li>&bull; Teams spending under $50/month total on automation (the time to research, migrate, and test costs more than the savings)</li>
                <li>&bull; Anyone who would sacrifice reliability for a $20/month cost reduction (a broken automation that loses a lead costs more than a year of Zapier Professional)</li>
                <li>&bull; People who change tools every 6 months chasing the cheapest option (migration costs compound; pick one and commit for at least a year)</li>
              </ul>
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">1.</span>
                <span>
                  <strong className="text-foreground">Comparing headline prices without adjusting for counting differences.</strong>{" "}
                  Zapier Professional at $30/month for 750 tasks vs n8n Starter at $20/month
                  for 2,500 executions looks like a small gap. But 750 Zapier tasks with 4-step
                  workflows = 187 workflow runs. n8n&apos;s 2,500 executions = 2,500 workflow
                  runs. The effective difference is 13x, not 1.5x.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">2.</span>
                <span>
                  <strong className="text-foreground">Forgetting premium app requirements on Zapier.</strong>{" "}
                  You budget for Professional at $30/month, then discover your CRM integration
                  requires Team at $103.50/month. Always check whether your critical apps are
                  classified as premium before choosing a plan.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">3.</span>
                <span>
                  <strong className="text-foreground">Ignoring Make&apos;s data transfer limits.</strong>{" "}
                  If your workflows process large files, you can hit Make&apos;s data transfer
                  cap before your operation cap. Check both limits when estimating costs.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">4.</span>
                <span>
                  <strong className="text-foreground">Treating n8n self-hosted as free.</strong>{" "}
                  Server cost is $6&ndash;25/month. But 3 hours of monthly maintenance at any
                  reasonable hourly rate makes it the most expensive option for non-developers.
                  Only count n8n as cheap if your time genuinely has low opportunity cost.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">5.</span>
                <span>
                  <strong className="text-foreground">Not projecting 6-month growth.</strong>{" "}
                  Your current volume is 2,000 tasks/month. If you are growing 20% monthly,
                  you will need 5,000+ in 6 months. Pick a platform whose pricing curve
                  favors your trajectory, not your current snapshot.
                </span>
              </li>
            </ul>
          </section>

          {/* Bottom Line */}
          <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-3">Bottom Line</h2>
            <p className="text-muted leading-relaxed mb-3">
              Make is the best value for 90% of users once you account for the counting
              differences. At $10.59/month for 10,000 operations, it undercuts Zapier by
              5&ndash;10x at most volumes. The learning curve is the real cost, and it is
              a one-time investment.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              Zapier is worth paying for when you need its integration breadth, team simplicity,
              or premium app access. Do not feel bad about the premium &mdash; it buys real
              convenience. Just know what you are paying for and verify you actually need it.
            </p>
            <p className="text-muted leading-relaxed">
              n8n Cloud is underrated for teams with complex workflows (many steps per run),
              where the per-execution model saves significant money. Self-hosted n8n is a
              developer tool &mdash; evaluate it on data control and code flexibility, not
              on sticker price.
            </p>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make really cheaper than Zapier?</h3>
                <p className="text-sm text-muted">Yes, significantly. Make&apos;s Core plan gives 10,000 operations for $10.59/month. Zapier&apos;s Team plan gives 2,000 tasks for $103.50/month. Even accounting for Make counting trigger modules as operations (Zapier does not count triggers), Make is 3&ndash;7x cheaper at equivalent volumes.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do Zapier tasks compare to Make operations?</h3>
                <p className="text-sm text-muted">Both count each step that processes data. The difference: Zapier does not count the trigger step as a task, while Make counts the Watch module as an operation. For a 1-trigger + 4-action workflow running once, Zapier uses 4 tasks and Make uses 5 operations. The per-unit cost of Make operations is still dramatically lower.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why are n8n executions cheaper than Zapier tasks?</h3>
                <p className="text-sm text-muted">Because n8n counts one execution per workflow run regardless of steps. A 10-step workflow uses 1 n8n execution but 10 Zapier tasks. For complex workflows, this difference is massive. The tradeoff is that n8n has far fewer pre-built integrations (400 vs 7,000+).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which automation tool has the best free tier?</h3>
                <p className="text-sm text-muted">Make&apos;s free tier (1,000 operations/month, 2 scenarios) is the most practical for running real workflows. Zapier&apos;s free tier (100 tasks, single-step only) is essentially a demo. Bardeen offers unlimited non-premium automations for free, but only for browser-based tasks. n8n&apos;s self-hosted Community edition is entirely free with no limits.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n", "pipedream"]}
            comparisons={["zapier-vs-make", "make-vs-n8n", "zapier-vs-n8n"]}
            guides={["zapier-hidden-costs", "migrate-zapier-to-make"]}
          />
        </div>
      </article>
    </>
  );
}
