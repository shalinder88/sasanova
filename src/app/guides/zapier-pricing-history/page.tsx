import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Zapier Pricing Changes: Why Your Bill Keeps Going Up",
  description:
    "A documented timeline of Zapier pricing changes: free tier reductions, premium app tiers, task-counting changes, multi-step Zap pricing, and what the trajectory means for automation budgets.",
};

export default function ZapierPricingHistoryPage() {
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
              Zapier Pricing History
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing History
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Zapier Pricing Changes: Why Your Bill Keeps Going Up
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            If you&apos;ve been on Zapier for more than a year, your bill has probably gone up
            &mdash; even if you&apos;re running the same automations. That&apos;s not a coincidence.
            Zapier has restructured pricing multiple times, introduced premium app tiers,
            changed how tasks are counted, and reduced what the free plan includes. This page
            documents the full history so you can see the pattern and plan accordingly.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4 mt-6">
            <p className="text-xs text-muted">
              <strong className="text-foreground">Methodology note:</strong> This timeline is
              based on available public records including Zapier&apos;s pricing page archives,
              official blog posts, and documented user reports. Approximate timeline based on
              documented changes. Where exact historical prices are uncertain, we describe the
              trend direction rather than fabricate specific dollar amounts.
            </p>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Timeline */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Complete Pricing Timeline</h2>

            <div className="space-y-6">
              {/* Early Free Tier */}
              <div className="border-l-2 border-accent/40 pl-5">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Pre-2020 &mdash; The Generous Era</p>
                <h3 className="text-base font-bold text-foreground mb-2">Free plan: 100 tasks/month, 5 Zaps</h3>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  Zapier&apos;s early free plan offered 100 tasks per month and up to 5 active Zaps
                  (automations). Single-step Zaps only on the free tier, but 100 tasks was enough
                  for light automation use &mdash; a form submission to a spreadsheet, a new lead
                  to Slack, basic webhook triggers.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Paid plans started at approximately $20/month for the Starter tier, with
                  multi-step Zaps available from the Professional tier. The pricing model was
                  straightforward: you paid for a task allocation and could run any supported
                  app within that limit.
                </p>
              </div>

              {/* Premium Apps */}
              <div className="border-l-2 border-accent/40 pl-5">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">2020&ndash;2021 &mdash; Premium App Introduction</p>
                <h3 className="text-base font-bold text-foreground mb-2">Premium apps require paid plans; tier restructuring begins</h3>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  Zapier introduced the concept of &quot;premium apps&quot; &mdash; integrations
                  that required a paid plan regardless of task volume. This was significant because
                  it meant some automations that previously worked on free no longer did. Apps like
                  Salesforce, HubSpot, and various database connectors were categorized as premium.
                </p>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  The paid plan structure also shifted. Based on available documentation, multi-step
                  Zaps were moved from the highest tier down to lower paid tiers, but the entry
                  price for multi-step capability increased. The net effect was: more features
                  available at mid-tier, but mid-tier became more expensive.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  <strong className="text-foreground">Impact:</strong> Users who had been running
                  premium app integrations on free were forced to upgrade. The &quot;all apps are
                  equal&quot; model was over.
                </p>
              </div>

              {/* Multi-step Changes */}
              <div className="border-l-2 border-accent/40 pl-5">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">2022 &mdash; Multi-step and Task Counting Changes</p>
                <h3 className="text-base font-bold text-foreground mb-2">How tasks are counted becomes more consequential</h3>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  Zapier refined how tasks were counted in multi-step Zaps. Each step in a
                  multi-step Zap that successfully executes counts as a separate task. A 5-step
                  Zap that runs once uses 5 tasks. This was always the case, but as Zapier pushed
                  users toward more complex automations, the task consumption rate accelerated.
                </p>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  Zapier also introduced &quot;Paths&quot; (conditional logic) and &quot;Filters&quot;
                  more prominently. While filters that stop a Zap don&apos;t count as tasks,
                  paths that branch into multiple execution flows multiply task usage significantly.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  <strong className="text-foreground">Impact:</strong> Users building more sophisticated
                  automations found their task usage growing much faster than expected. A workflow
                  that seemed like it would use 200 tasks/month might actually consume 800&ndash;1,000
                  due to multi-step counting.
                </p>
              </div>

              {/* Tier Restructuring */}
              <div className="border-l-2 border-accent/40 pl-5">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">2023 &mdash; Major Tier Restructuring</p>
                <h3 className="text-base font-bold text-foreground mb-2">New tier names, adjusted task allocations, price increases</h3>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  Zapier restructured its plan tiers, renaming and reorganizing them. Based on
                  documented changes, the free plan was reduced to 100 tasks per month with
                  increasingly limited functionality. The Starter tier (or equivalent) saw price
                  increases while the task allocation at each tier was adjusted.
                </p>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  A notable change was the introduction of more granular task-based pricing
                  tiers. Rather than large jumps between plans (e.g., 750 tasks to 2,000 tasks),
                  Zapier offered more intermediate options. This sounds user-friendly, but in
                  practice it meant users were paying more per task at lower tiers.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  <strong className="text-foreground">Impact:</strong> Existing users on legacy
                  pricing were migrated to new plans. In many documented cases, this resulted
                  in higher monthly costs for the same task allocation.
                </p>
              </div>

              {/* Recent Changes */}
              <div className="border-l-2 border-accent/40 pl-5">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">2024&ndash;2025 &mdash; Continued Upward Pressure</p>
                <h3 className="text-base font-bold text-foreground mb-2">Free tier further limited, AI features added as premium upsell</h3>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  Zapier continued to adjust pricing upward. The free plan was further constrained
                  &mdash; based on available records, limits were set at 100 tasks per month with
                  single-step Zaps only and a reduced number of active Zaps. AI-powered features
                  (natural language Zap creation, AI-assisted troubleshooting) were introduced as
                  premium features, adding another upsell layer.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  <strong className="text-foreground">Impact:</strong> The value of the free tier
                  continued to decrease. Users who stayed on free had fewer active Zaps, fewer
                  tasks, and no access to new AI features.
                </p>
              </div>

              {/* Current State */}
              <div className="border-l-2 border-accent/40 pl-5">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">2026 &mdash; Current State</p>
                <h3 className="text-base font-bold text-foreground mb-2">Task-based pricing with steep per-task costs at lower tiers</h3>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  As of early 2026, Zapier&apos;s free plan offers 100 tasks per month with limited
                  Zaps (single-step only). Paid plans start at approximately $20/month for a
                  Professional-level plan. The per-task cost decreases at higher tiers but remains
                  significantly more expensive per-automation than alternatives like Make or n8n.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Zapier&apos;s integration library remains its strongest advantage &mdash; with
                  7,000+ app connections, it still covers more tools than any competitor. But
                  for users whose automation needs are cost-sensitive, the pricing trajectory
                  has pushed many toward alternatives.
                </p>
              </div>
            </div>
          </section>

          {/* Price Trajectory Tables */}
          <section>
            <h2 className="text-xl font-bold mb-3">Price Trajectory: Cost at 750 and 2,000 Tasks/Month</h2>
            <p className="text-muted leading-relaxed mb-4">
              These tables show approximate monthly costs at two common automation volumes.
              Based on available public records and pricing page documentation. Exact historical
              amounts may vary.
            </p>

            <p className="text-sm font-semibold text-foreground mb-2">At 750 tasks/month</p>
            <div className="overflow-x-auto rounded-lg border border-border mt-2 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Period</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Approx. $/month</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pre-2022</td>
                    <td className="px-4 py-2.5 text-muted">~$50&ndash;$70</td>
                    <td className="px-4 py-2.5 text-muted">Starter/Professional tier</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">2022&ndash;2023</td>
                    <td className="px-4 py-2.5 text-muted">~$70&ndash;$100</td>
                    <td className="px-4 py-2.5 text-muted">Tier restructuring, price increases</td>
                  </tr>
                  <tr className="bg-surface-alt/50">
                    <td className="px-4 py-2.5 font-medium text-foreground">2024&ndash;2026</td>
                    <td className="px-4 py-2.5 text-muted">~$100+</td>
                    <td className="px-4 py-2.5 text-muted">Current pricing structure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm font-semibold text-foreground mb-2">At 2,000 tasks/month</p>
            <div className="overflow-x-auto rounded-lg border border-border mt-2 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Period</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Approx. $/month</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pre-2022</td>
                    <td className="px-4 py-2.5 text-muted">~$75&ndash;$100</td>
                    <td className="px-4 py-2.5 text-muted">Professional tier</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">2022&ndash;2023</td>
                    <td className="px-4 py-2.5 text-muted">~$100&ndash;$150</td>
                    <td className="px-4 py-2.5 text-muted">Restructured tiers</td>
                  </tr>
                  <tr className="bg-surface-alt/50">
                    <td className="px-4 py-2.5 font-medium text-foreground">2024&ndash;2026</td>
                    <td className="px-4 py-2.5 text-muted">~$150&ndash;$200+</td>
                    <td className="px-4 py-2.5 text-muted">Current pricing structure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <p className="text-xs text-muted">
                <strong className="text-foreground">Note:</strong> These ranges are approximate
                based on documented pricing. Zapier&apos;s actual pricing varies by billing
                frequency and plan tier. The multi-step task counting change means many users
                consume 2&ndash;5x more tasks than they expect, which pushes them into higher
                tiers faster than these base numbers suggest.
              </p>
            </div>
          </section>

          {/* Task Counting */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Task-Counting Changes That Affect Your Bill</h2>
            <p className="text-muted leading-relaxed mb-3">
              Understanding how Zapier counts tasks is essential to understanding why bills
              grow faster than expected. These counting rules have evolved over time, generally
              in ways that increase consumption:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Every step counts.</strong> In a 5-step Zap,
                each successful step is one task. One trigger plus four actions equals five tasks
                per run. This has always been the case but catches new users off guard.
              </li>
              <li>
                <strong className="text-foreground">Paths multiply consumption.</strong> If a Zap
                uses conditional paths and both branches execute, each branch&apos;s steps are
                counted separately. A branching Zap can use 10+ tasks per trigger.
              </li>
              <li>
                <strong className="text-foreground">Filters that stop don&apos;t count; filters that pass do.</strong> If
                a filter stops a Zap, no task is consumed for that run. But if the filter
                passes and the Zap continues, the filter step itself counts as a task.
              </li>
              <li>
                <strong className="text-foreground">Looping actions multiply by iteration.</strong> If
                a Zap processes a list (e.g., &quot;for each row in spreadsheet&quot;), each iteration
                of the loop counts as separate tasks. Processing 50 rows through a 3-step
                loop uses 150 tasks.
              </li>
              <li>
                <strong className="text-foreground">Error retries count.</strong> If a step fails
                and Zapier retries it, the retry counts as a new task. Intermittent API failures
                can consume tasks without producing useful results.
              </li>
            </ul>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">Real-world example</p>
              <p className="text-sm text-muted">
                A common automation: &quot;When a form is submitted, look up the contact in
                CRM, create if not found, add to a list, send a Slack notification, and log
                to a spreadsheet.&quot; That&apos;s 5&ndash;6 steps per submission. At 100 form
                submissions per month, you&apos;re using 500&ndash;600 tasks &mdash; well past
                the free tier and possibly past a lower paid tier depending on your plan.
              </p>
            </div>
          </section>

          {/* Alternatives */}
          <section>
            <h2 className="text-xl font-bold mb-3">Alternatives That Have Stayed Cheaper</h2>
            <p className="text-muted leading-relaxed mb-3">
              While Zapier&apos;s prices have risen, several alternatives have maintained more
              competitive pricing. The tradeoff is usually fewer integrations, a steeper
              learning curve, or both.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Approx. cost at ~2,000 operations/mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key tradeoff</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Make (Integromat)</td>
                    <td className="px-4 py-2.5 text-muted">~$10&ndash;$20/month</td>
                    <td className="px-4 py-2.5 text-muted">Steeper learning curve, counts operations differently</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n (self-hosted)</td>
                    <td className="px-4 py-2.5 text-muted">~$5&ndash;$15/month (server costs)</td>
                    <td className="px-4 py-2.5 text-muted">Requires technical setup, self-maintenance</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">~$20&ndash;$50/month</td>
                    <td className="px-4 py-2.5 text-muted">Fewer integrations than Zapier</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">Free up to 10,000 invocations/day</td>
                    <td className="px-4 py-2.5 text-muted">Developer-oriented, requires code comfort</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              The most common migration path is Zapier to Make, which typically saves
              50&ndash;80% at equivalent automation volumes. The rebuild effort is real (nothing
              auto-migrates), but for teams spending $100+/month on Zapier, the savings usually
              pay back the migration time within 2&ndash;4 months.
            </p>
          </section>

          {/* What This Means For You */}
          <section>
            <h2 className="text-xl font-bold mb-3">What This Means for You</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">If you&apos;re on the free plan:</strong> 100
                tasks is enough for 1&ndash;2 simple single-step automations. If you need more,
                the jump to paid is significant. Check whether Make&apos;s free tier (1,000
                operations/month) covers your needs before paying for Zapier.
              </li>
              <li>
                <strong className="text-foreground">If you&apos;re paying $50&ndash;$100/month:</strong> This
                is the range where the Zapier vs Make comparison becomes most compelling. Run your
                actual task numbers through Make&apos;s pricing calculator. Many users in this range
                can move to Make&apos;s $10&ndash;$20/month tier.
              </li>
              <li>
                <strong className="text-foreground">If you&apos;re paying $150+/month:</strong> Unless
                you depend on Zapier-exclusive integrations (check first &mdash; Make covers
                most popular apps), you are almost certainly overpaying. At this spend level,
                even a self-hosted n8n instance with the time cost of maintenance is financially
                rational.
              </li>
            </ul>
          </section>

          {/* When to Switch */}
          <section>
            <h2 className="text-xl font-bold mb-3">When to Switch Based on Pricing Trajectory</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Switch now if...</p>
                <ul className="list-disc pl-5 space-y-1 text-muted text-sm">
                  <li>You&apos;re spending $100+/month and don&apos;t use Zapier-exclusive integrations</li>
                  <li>Your task usage has grown due to multi-step Zaps and you keep hitting tier limits</li>
                  <li>You&apos;re comfortable with a slightly more technical interface (Make) or have developer resources (n8n)</li>
                  <li>Your automations are mostly standard patterns (form to CRM, notification to Slack, data sync)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Consider switching within 6 months if...</p>
                <ul className="list-disc pl-5 space-y-1 text-muted text-sm">
                  <li>You&apos;re at $50&ndash;$100/month and growing</li>
                  <li>Your team has built many Zaps and the rebuild effort is the main blocker</li>
                  <li>You want to evaluate Make or n8n but haven&apos;t tested them yet</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Stay on Zapier if...</p>
                <ul className="list-disc pl-5 space-y-1 text-muted text-sm">
                  <li>You depend on niche integrations that only Zapier supports (check before assuming)</li>
                  <li>Your team is non-technical and Zapier&apos;s interface simplicity is essential</li>
                  <li>You&apos;re on the free plan and 100 tasks/month genuinely covers your needs</li>
                  <li>You have complex Zaps with Tables, Interfaces, or Chatbots that don&apos;t have equivalents elsewhere</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why do Zapier bills grow faster than expected?</h3>
                <p className="text-muted text-sm">The main culprit is multi-step task counting. Each step in a Zap counts as a separate task. A 5-step Zap running 100 times uses 500 tasks, not 100. As users build more complex automations with paths, loops, and multiple actions, task consumption grows much faster than the number of trigger events.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Make count operations the same way?</h3>
                <p className="text-muted text-sm">No. Make counts operations differently. A module (step) that executes counts as one operation, but Make&apos;s pricing is significantly cheaper per operation. At equivalent automation volumes, Make typically costs 50&ndash;80% less than Zapier. However, Make&apos;s visual builder has a steeper learning curve.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate my Zaps to Make automatically?</h3>
                <p className="text-muted text-sm">No. There is no automatic migration tool between Zapier and Make (or any other platform). You need to rebuild each automation manually. For simple Zaps this takes 10&ndash;30 minutes each. For complex multi-step Zaps with conditional logic, expect 1&ndash;3 hours per Zap. See our migration guide for a detailed walkthrough.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Has Zapier ever reduced prices?</h3>
                <p className="text-muted text-sm">Zapier has occasionally restructured tiers in ways that included more features at certain price points, but the overall trajectory of list prices has been upward. There is no documented instance of Zapier broadly reducing prices for existing customers at equivalent task volumes.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is n8n really free?</h3>
                <p className="text-muted text-sm">n8n is open-source and free to self-host. You pay for the server (typically $5&ndash;$15/month on DigitalOcean or similar), but there are no per-task or per-automation charges. n8n Cloud (the hosted version) has usage-based pricing starting around $20/month. The self-hosted version requires Docker familiarity and ongoing maintenance.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            comparisons={["zapier-vs-make", "make-vs-n8n"]}
            guides={[
              "zapier-hidden-costs",
              "migrate-zapier-to-make",
              "migrate-zapier-to-n8n",
              "automation-pricing-compared",
              "automation-zapier-vs-make-vs-n8n",
            ]}
          />
        </div>
      </article>
    </>
  );
}
