import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "State of Automation Tool Pricing, Q1 2026 — Quarterly Report",
  description:
    "Task counting differences explained, cost rankings at 500 to 50K tasks/month, Bardeen's 890% price jump, self-hosting economics, and free tier comparisons. Verified March 2026.",
};

export default function StateOfAutomationPricingQ12026Page() {
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
              State of Automation Tool Pricing, Q1 2026
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Quarterly Pricing Report
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            State of Automation Tool Pricing, Q1 2026
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Automation tool pricing is the most confusing category in SaaS. Every platform
            counts &ldquo;tasks&rdquo; differently, free tiers vary 10x, and the actual cost
            per automation run is nearly impossible to compare without normalization. This
            quarterly report cuts through the confusion with verified pricing, standardized
            comparisons, and an honest assessment of where the market stands.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>20 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Published March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Q1 2026 Edition</span>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4 mt-6">
            <p className="text-xs text-muted">
              <strong className="text-foreground">Methodology:</strong> All pricing data was
              collected directly from vendor pricing pages between March 10&ndash;20, 2026.
              Task/operation counts were normalized to a common unit (&ldquo;one workflow
              execution producing one output&rdquo;) to enable cross-platform comparison. Where
              platforms count individual steps, we note the multiplier. Prices are in USD at
              monthly billing unless noted. Self-hosting cost estimates assume a single
              dedicated VPS at current market rates.
            </p>
          </div>
          <div className="rounded-lg border border-accent/30 bg-accent-light p-4 mt-4">
            <p className="text-xs text-foreground">
              <strong>Source citation:</strong> Pricing verified from vendor pages, March 2026.
              If you cite this report, link to{" "}
              <strong>sasanova.com/guides/state-of-automation-pricing-q1-2026</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Key Takeaways */}
          <section>
            <h2 className="text-xl font-bold mb-3">Key Takeaways</h2>
            <div className="rounded-lg border border-border bg-surface p-5">
              <ul className="text-sm text-muted space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">Task counting differences are the #1 source of pricing confusion.</strong> A 5-step Zapier Zap burns 5 tasks per run. The same workflow on Make uses 5 operations. On n8n, it is 1 execution. Comparing &ldquo;tasks&rdquo; across platforms without normalization is meaningless.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">Bardeen went from $10/mo to $99/mo</strong> &mdash; a 890% increase and the largest single pricing jump in automation tooling this quarter. Bardeen repositioned from consumer-friendly to professional-tier.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">Make remains the best value for most users</strong> at every volume tier. Its operations-based counting is more predictable than Zapier&apos;s task counting, and its pricing is 40&ndash;70% lower at equivalent volumes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">Zapier remains the simplest but most expensive.</strong> Its per-task pricing, combined with multi-step task multiplication, makes it 2&ndash;5x more expensive than Make at scale.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">n8n self-hosting saves money above 5,000 executions/month</strong> but requires DevOps capacity. Below that threshold, Make&apos;s hosted pricing is cheaper than running infrastructure.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Task Counting Differences */}
          <section>
            <h2 className="text-xl font-bold mb-3">Task/Operation/Execution Counting: The Biggest Source of Confusion</h2>
            <p className="text-muted leading-relaxed mb-4">
              Every automation platform uses a different unit for billing, and these units
              are not interchangeable. Understanding the counting model is essential before
              any pricing comparison makes sense.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Billing Unit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">How It Counts</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5-Step Workflow Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Tasks</td>
                    <td className="px-4 py-2.5 text-muted">Each step in a Zap = 1 task</td>
                    <td className="px-4 py-2.5 text-red-400 font-semibold">5 tasks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Operations</td>
                    <td className="px-4 py-2.5 text-muted">Each module execution = 1 operation</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">5 operations</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n (cloud)</td>
                    <td className="px-4 py-2.5 text-muted">Executions</td>
                    <td className="px-4 py-2.5 text-muted">Each workflow run = 1 execution (regardless of steps)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">1 execution</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n (self-hosted)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">No per-execution billing</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0 (infra cost only)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">Credits</td>
                    <td className="px-4 py-2.5 text-muted">Each step = 1 credit (+ compute time credits)</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">5+ credits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              The critical insight: a workflow that &ldquo;costs&rdquo; 5 tasks on Zapier costs
              only 1 execution on n8n cloud. At 1,000 workflow runs per month, Zapier consumes
              5,000 tasks while n8n cloud consumes 1,000 executions. This 5x multiplier on
              multi-step workflows is why Zapier bills are consistently higher than expected.
            </p>
          </section>

          {/* Cost Ranking Table */}
          <section>
            <h2 className="text-xl font-bold mb-4">Cost Ranking by Monthly Volume</h2>
            <p className="text-muted leading-relaxed mb-4">
              Monthly cost at each volume tier, using the cheapest plan that supports the stated
              volume. For Zapier, volumes assume an average 3-step Zap (so 1,000 workflow runs =
              3,000 tasks). For Make, 1,000 runs = 3,000 operations. For n8n cloud, 1,000 runs =
              1,000 executions. Monthly billing. Verified March 2026.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Workflow Runs/mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Self-Hosted</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pipedream</th>
                    <th className="px-4 py-2.5 font-semibold text-accent">Best Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">500</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">$24/mo</td>
                    <td className="px-4 py-2.5 text-muted">~$20/mo (VPS)</td>
                    <td className="px-4 py-2.5 text-muted">Free*</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Make</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">2,000</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$16/mo</td>
                    <td className="px-4 py-2.5 text-muted">$24/mo</td>
                    <td className="px-4 py-2.5 text-muted">~$20/mo (VPS)</td>
                    <td className="px-4 py-2.5 text-muted">$19/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Make</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-4 py-2.5 text-muted">$99/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$29/mo</td>
                    <td className="px-4 py-2.5 text-muted">$50/mo</td>
                    <td className="px-4 py-2.5 text-muted">~$20/mo (VPS)</td>
                    <td className="px-4 py-2.5 text-muted">$19/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">n8n Self-Hosted / Make</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-4 py-2.5 text-muted">$199/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$59/mo</td>
                    <td className="px-4 py-2.5 text-muted">$50/mo</td>
                    <td className="px-4 py-2.5 text-muted">~$40/mo (VPS)</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">n8n Self-Hosted</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-4 py-2.5 text-muted">$599/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$159/mo</td>
                    <td className="px-4 py-2.5 text-muted">$120/mo</td>
                    <td className="px-4 py-2.5 text-muted">~$80/mo (VPS)</td>
                    <td className="px-4 py-2.5 text-muted">$249/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">n8n Self-Hosted</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              *Pipedream Free includes 100 credits/day. Zapier&apos;s costs assume 3 steps per
              workflow on average. n8n self-hosted VPS costs assume Hetzner/DigitalOcean-class
              pricing; AWS/GCP will be 2&ndash;3x higher. Make&apos;s operations count includes
              every module execution, so a branching workflow may use more operations than a
              linear one.
            </p>
          </section>

          {/* Biggest Pricing Change: Bardeen */}
          <section>
            <h2 className="text-xl font-bold mb-3">Biggest Pricing Change: Bardeen&apos;s 890% Increase</h2>
            <p className="text-muted leading-relaxed mb-4">
              Bardeen&apos;s jump from $10/mo to $99/mo is the largest single price increase in
              automation tooling this quarter &mdash; and one of the largest in SaaS pricing
              history for an existing product. The move reflects a strategic pivot from
              consumer-friendly browser automation to professional-tier AI-powered workflows.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Bardeen Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Old Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">New Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-muted">Free (limited runs)</td>
                    <td className="px-4 py-2.5 text-muted">Free (very limited)</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">Reduced features</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$10/mo</td>
                    <td className="px-4 py-2.5 text-muted">$99/mo</td>
                    <td className="px-4 py-2.5 text-red-400 font-semibold">+890%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Bardeen added AI-powered scraping and natural language workflow creation to justify
              the increase, but the magnitude of the jump effectively replaced the user base.
              Users who signed up for a $10/mo browser automation tool are now being asked to
              pay $99/mo for an AI platform. Most consumer-tier users will migrate to Make or
              Zapier at significantly lower cost for comparable (non-AI) functionality.
            </p>
          </section>

          {/* Self-Hosting Economics */}
          <section>
            <h2 className="text-xl font-bold mb-3">Self-Hosting Economics: When n8n Saves Money vs Costs More</h2>
            <p className="text-muted leading-relaxed mb-4">
              n8n is the only major automation tool that can be self-hosted for free (under a
              fair-use license for individuals and small businesses). But self-hosting has real
              costs that go beyond the VPS bill.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost Factor</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Self-Hosted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monthly software cost</td>
                    <td className="px-4 py-2.5 text-muted">$24&ndash;$120/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Infrastructure (VPS)</td>
                    <td className="px-4 py-2.5 text-muted">Included</td>
                    <td className="px-4 py-2.5 text-muted">$20&ndash;$80/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Maintenance time</td>
                    <td className="px-4 py-2.5 text-muted">None</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;4 hrs/mo (updates, monitoring)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Execution limits</td>
                    <td className="px-4 py-2.5 text-muted">Plan-dependent</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Uptime responsibility</td>
                    <td className="px-4 py-2.5 text-muted">n8n&apos;s SLA</td>
                    <td className="px-4 py-2.5 text-muted">Your responsibility</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Self-hosting saves money when:</p>
                <ul className="text-sm text-muted space-y-1">
                  <li>&bull; Volume exceeds 5,000 executions/month (n8n Cloud jumps to $50/mo; a VPS costs $20)</li>
                  <li>&bull; You have existing DevOps capacity or infrastructure</li>
                  <li>&bull; Workflows are mission-critical and you want full control over uptime</li>
                  <li>&bull; You need to run on-premise for data residency requirements</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Self-hosting costs more when:</p>
                <ul className="text-sm text-muted space-y-1">
                  <li>&bull; Volume is under 2,000 executions/month (Make at $16/mo is cheaper than any VPS)</li>
                  <li>&bull; You have no DevOps experience (time cost of learning and maintaining exceeds savings)</li>
                  <li>&bull; You value managed updates and zero-downtime deploys</li>
                  <li>&bull; You use AWS/GCP instead of budget hosting (infrastructure costs 2&ndash;3x higher)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Make as Best Value */}
          <section>
            <h2 className="text-xl font-bold mb-3">Make: Best Value for Most Users at Every Volume</h2>
            <p className="text-muted leading-relaxed mb-4">
              Make (formerly Integromat) holds the best overall value position in automation
              tooling for the third consecutive quarter. Its pricing advantage comes from three
              factors: lower per-operation cost than Zapier at every tier, a more generous free
              plan (1,000 operations vs Zapier&apos;s 100 tasks), and a visual builder that
              handles complex branching logic without per-branch cost increases.
            </p>
            <p className="text-muted leading-relaxed">
              At 5,000 workflow runs per month (assuming 3-step workflows), Make costs $29/mo
              while Zapier costs $99/mo &mdash; a 70% savings. At 10,000 runs, the gap widens:
              Make at $59/mo vs Zapier at $199/mo. The only volume at which Zapier is competitive
              is under 100 tasks/month (Zapier&apos;s free tier), and even there Make offers
              10x more free operations.
            </p>
          </section>

          {/* Zapier: Simplest but Most Expensive */}
          <section>
            <h2 className="text-xl font-bold mb-3">Zapier: Simplest but Most Expensive</h2>
            <p className="text-muted leading-relaxed mb-4">
              Zapier&apos;s value proposition is simplicity, not price. Its no-code interface
              is the most approachable in the category, its app directory is the largest (7,000+
              integrations), and its reliability is best-in-class. For teams that value ease of
              setup over cost optimization, Zapier remains the default choice.
            </p>
            <p className="text-muted leading-relaxed">
              The cost penalty is real, though. Zapier&apos;s multi-step task counting means a
              single workflow with 5 steps burns 5 tasks per execution. At 1,000 daily workflow
              runs with 5 steps each, that is 150,000 tasks/month &mdash; requiring Zapier&apos;s
              Company plan at $599+/mo. The same workload on Make uses 150,000 operations,
              costing approximately $159/mo. On n8n self-hosted, it costs $0 in software plus
              $40&ndash;80/mo in infrastructure.
            </p>
          </section>

          {/* Free Tier Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-4">Free Tier Comparison</h2>
            <p className="text-muted leading-relaxed mb-4">
              Free tiers vary dramatically in generosity. Here is exactly what each platform
              offers for $0.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Allowance</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Equivalent Workflow Runs*</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limitations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">100 tasks/mo</td>
                    <td className="px-4 py-2.5 text-muted">~33 runs (3-step avg)</td>
                    <td className="px-4 py-2.5 text-muted">Single-step Zaps only, 15-min polling</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">1,000 ops/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~333 runs (3-step avg)</td>
                    <td className="px-4 py-2.5 text-muted">2 active scenarios, 15-min polling</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">No free tier</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">Starts at $24/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Requires VPS (~$20/mo), fair-use license</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">100 credits/day</td>
                    <td className="px-4 py-2.5 text-muted">~1,000 runs/mo (simple workflows)</td>
                    <td className="px-4 py-2.5 text-muted">Daily cap resets, code-first interface</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              *Equivalent runs assume a 3-step workflow average. Make&apos;s free tier offers 10x
              the effective runs of Zapier&apos;s free tier. Pipedream&apos;s daily credit model
              is generous but resets daily, meaning unused credits do not roll over. n8n has no
              free cloud tier but self-hosting is functionally free (license allows personal and
              small business use).
            </p>
          </section>

          {/* Predictions */}
          <section>
            <h2 className="text-xl font-bold mb-3">Predictions: Where Automation Pricing Is Heading</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">AI-powered automation will create a new premium tier everywhere</p>
                <p className="text-sm text-muted">
                  Zapier (with AI actions), Make (with AI modules), and n8n (with LangChain nodes)
                  are all adding AI capabilities. These will be gated behind higher-priced plans
                  or charged per-execution at premium rates. Expect &ldquo;AI credits&rdquo; to
                  become a new billing axis alongside tasks/operations in 2026.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Zapier will restructure to remain competitive on price</p>
                <p className="text-sm text-muted">
                  Zapier&apos;s task-counting model is under increasing pressure from Make&apos;s
                  lower pricing and n8n&apos;s execution-based counting. We expect Zapier to
                  either reduce multi-step task multiplication or introduce a new mid-tier plan
                  by H2 2026 to reduce churn to Make.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Self-hosting will become easier and more common</p>
                <p className="text-sm text-muted">
                  n8n&apos;s Docker-based deployment is already straightforward, but one-click
                  hosting options (Railway, Render, Coolify) are making self-hosting accessible
                  to non-DevOps teams. As hosted plan prices rise, the self-hosting crossover
                  point will move to lower volumes.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">More niche tools will follow Bardeen&apos;s playbook</p>
                <p className="text-sm text-muted">
                  Bardeen&apos;s 890% price increase reflects a broader trend: consumer-priced
                  automation tools repositioning as professional/enterprise products. Expect other
                  small automation tools to follow this pattern as VC-backed companies face
                  pressure to increase revenue per user.
                </p>
              </div>
            </div>
          </section>

          {/* Methodology */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold mb-3">Methodology</h2>
            <p className="text-muted text-sm leading-relaxed mb-3">
              This report is compiled quarterly by the Sasanova editorial team.
            </p>
            <ul className="text-sm text-muted space-y-1.5 mb-3">
              <li>&bull; All pricing is captured from vendor pricing pages during March 10&ndash;20, 2026.</li>
              <li>&bull; Task/operation/execution counts were normalized using a standard 3-step workflow benchmark to enable cross-platform comparison.</li>
              <li>&bull; Self-hosting infrastructure costs are based on Hetzner CX31 and DigitalOcean Droplet pricing as of March 2026.</li>
              <li>&bull; Free tier assessments reflect actual limits tested on active free accounts.</li>
              <li>&bull; &ldquo;Best value&rdquo; considers both raw cost and the volume of work achieved per dollar, not just the lowest number.</li>
              <li>&bull; Predictions are editorial assessments based on observable pricing trends.</li>
            </ul>
            <p className="text-muted text-sm leading-relaxed">
              Report corrections:{" "}
              <Link href="/contact" className="text-accent hover:underline">sasanova.com/contact</Link>.
              Verified errors are corrected within 48 hours.
            </p>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n", "pipedream"]}
            comparisons={["zapier-vs-make", "make-vs-n8n", "zapier-vs-n8n"]}
            guides={[
              "automation-annual-cost-2026",
              "zapier-pricing-history",
              "zapier-hidden-costs",
              "cheapest-automation-tool-2026",
              "state-of-email-pricing-q1-2026",
              "state-of-crm-pricing-q1-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
