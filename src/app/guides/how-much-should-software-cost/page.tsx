import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title:
    "How Much Should Your Software Stack Cost? Benchmarks by Business Stage",
  description:
    "Software cost benchmarks for solo founders, small teams, and growing businesses. Specific tool allocations, the tool creep problem, and when free tools cost more than paid ones.",
  openGraph: {
    title:
      "How Much Should Your Software Stack Cost? Benchmarks by Business Stage",
    description:
      "Solo founder: $0-100/mo. Small team: $100-500/mo. Growing team: $500-2,000/mo. Specific tool allocations and the hidden tax of free tools.",
  },
};

const stages = [
  {
    stage: "Solo Founder",
    range: "$0-100/month",
    color: "text-green-400",
    description:
      "You are pre-revenue or early revenue. Every dollar matters. Your stack should cost less than a nice dinner.",
    allocations: [
      { category: "CRM", budget: "$0-14", percentage: "0-14%", tool: "HubSpot Free or Pipedrive Lite ($14/seat)", toolSlug: "hubspot-crm" },
      { category: "Email Marketing", budget: "$0-29", percentage: "0-29%", tool: "Kit Free or beehiiv Launch (free), Kit Creator ($29/mo) if you need automation", toolSlug: "convertkit" },
      { category: "Automation", budget: "$0-11", percentage: "0-11%", tool: "Make Free or Make Core ($10.59/mo)", toolSlug: "make" },
      { category: "Project Management", budget: "$0", percentage: "0%", tool: "Notion Free or ClickUp Free", toolSlug: "notion" },
      { category: "Analytics", budget: "$0", percentage: "0%", tool: "PostHog Free (1M events/mo) or Plausible ($9/mo)", toolSlug: "posthog" },
      { category: "Support", budget: "$0", percentage: "0%", tool: "Crisp Free or just email", toolSlug: "crisp" },
    ],
    totalRecommended: "$0-54/month",
    keyInsight:
      "Most solo founders can operate on $0/month for the first 6-12 months. Upgrade only when a free tier limit blocks revenue — not convenience.",
  },
  {
    stage: "Small Team (2-5 people)",
    range: "$100-500/month",
    color: "text-amber-400",
    description:
      "You have customers and revenue. Coordination costs start to matter. Tools need to support collaboration, not just individual productivity.",
    allocations: [
      { category: "CRM", budget: "$28-100", percentage: "15-25%", tool: "Pipedrive Lite ($14/seat x 2-5) or HubSpot Starter ($20/mo + $20/seat)", toolSlug: "pipedrive" },
      { category: "Email Marketing", budget: "$29-49", percentage: "10-15%", tool: "Kit Creator ($29/mo) or ActiveCampaign Starter ($15-49/mo)", toolSlug: "activecampaign" },
      { category: "Automation", budget: "$11-19", percentage: "5-10%", tool: "Make Core ($10.59/mo) or Make Pro ($18.82/mo)", toolSlug: "make" },
      { category: "Project Management", budget: "$0-60", percentage: "0-15%", tool: "Notion Free (still works) or ClickUp Business ($12/seat)", toolSlug: "clickup" },
      { category: "Communication", budget: "$0-50", percentage: "0-12%", tool: "Slack Free or Slack Pro ($8.75/seat)", toolSlug: "slack" },
      { category: "Support", budget: "$0-95", percentage: "0-20%", tool: "Crisp Free or Crisp Essentials ($95/mo for 10 seats)", toolSlug: "crisp" },
    ],
    totalRecommended: "$68-373/month",
    keyInsight:
      "The biggest jump at this stage is per-seat costs. A $14/seat CRM for 5 people is $70/month. Factor seat count into every tool evaluation. Some tools (Notion, Crisp) have generous free tiers that still work at this size.",
  },
  {
    stage: "Growing Team (5-25 people)",
    range: "$500-2,000/month",
    color: "text-purple-400",
    description:
      "You need real reporting, automation, and process. Individual tools need to talk to each other. Integration quality matters more than individual tool features.",
    allocations: [
      { category: "CRM", budget: "$100-500", percentage: "20-30%", tool: "HubSpot Professional ($100/mo + $50/seat) or Pipedrive Growth ($39/seat)", toolSlug: "hubspot-crm" },
      { category: "Email Marketing", budget: "$49-200", percentage: "10-15%", tool: "ActiveCampaign Plus ($49-149/mo) or Klaviyo ($45-150/mo for e-commerce)", toolSlug: "activecampaign" },
      { category: "Automation", budget: "$19-100", percentage: "5-10%", tool: "Make Pro ($18.82/mo) or Make Teams ($34.12/mo)", toolSlug: "make" },
      { category: "Project Management", budget: "$60-300", percentage: "10-15%", tool: "ClickUp Business ($12/seat) or Asana Business ($30.49/seat)", toolSlug: "clickup" },
      { category: "Communication", budget: "$44-220", percentage: "8-12%", tool: "Slack Pro ($8.75/seat) or Slack Business+ ($12.50/seat)", toolSlug: "slack" },
      { category: "Support", budget: "$95-300", percentage: "10-15%", tool: "Crisp Essentials or Freshdesk Growth ($18/agent)", toolSlug: "freshdesk" },
      { category: "Analytics", budget: "$0-50", percentage: "0-5%", tool: "PostHog Free (often still sufficient) or Mixpanel Growth", toolSlug: "posthog" },
    ],
    totalRecommended: "$367-1,670/month",
    keyInsight:
      "At this stage, the CRM and communication tools dominate your budget. Per-seat costs compound fast: 15 people on Slack Pro + Pipedrive Growth + ClickUp Business = $876/month just for those three. Audit seat counts quarterly.",
  },
];

const toolCreepSigns = [
  {
    sign: "You have 3+ tools that overlap in functionality",
    example:
      "Notion for notes, ClickUp for tasks, Asana for project tracking. Pick one and commit. Two tools doing 50% each is worse than one tool doing 80%.",
  },
  {
    sign: "Nobody knows which tool to check for what",
    example:
      "Client updates in Slack, email, CRM, and a shared doc. If your team asks where something lives more than once a week, you have too many tools.",
  },
  {
    sign: "Monthly software spend increased but team size did not",
    example:
      "Your stack went from $200 to $400/month without adding a person. This usually means plan upgrades you did not notice or tools nobody canceled.",
  },
  {
    sign: "You built automations to sync tools that should be one tool",
    example:
      "If you need 5 Zapier automations to keep your CRM, email tool, and project manager in sync, you have the wrong tools. The integration cost (time + money) sometimes exceeds just using one platform.",
  },
  {
    sign: "Free trials converted to paid without a conscious decision",
    example:
      "Check your credit card statement. Most teams are paying for 1-3 tools someone tried once and forgot to cancel. Do a quarterly audit.",
  },
];

const quarterlyAudit = [
  "List every tool with a recurring charge. Include annual subscriptions (divide by 12).",
  "For each tool, ask: did anyone on the team use this in the last 30 days? If no, cancel it.",
  "For each tool, ask: could another tool we already pay for do this? If yes, consolidate.",
  "Check seat counts. Are you paying for people who left or no longer need access?",
  "Check plan tiers. Are you on a plan designed for a team size you have not reached yet?",
  "Calculate your per-employee software cost. If it exceeds $100/person/month for a team under 10, you are likely overspending.",
];

const freeToolHiddenCosts = [
  {
    cost: "Time spent working around limitations",
    example:
      "Mailchimp Free limits you to 500 contacts and 1,000 sends/month. When you hit that limit mid-campaign, you scramble to upgrade or wait. The interruption costs more than the $13/month Standard plan would have.",
  },
  {
    cost: "Data export restrictions when you outgrow it",
    example:
      "Some free tools limit CSV exports, API access, or automation triggers. When you finally upgrade or switch, you discover your data is harder to extract than expected. This adds 5-10 hours to migration.",
  },
  {
    cost: "Feature gaps filled by additional tools",
    example:
      "HubSpot Free CRM lacks email sequences. So you add Kit for email. Then you need Make to sync them. Three free/cheap tools cost more in complexity than one $50/month tool that does both.",
  },
  {
    cost: "Reduced productivity from inferior UX",
    example:
      "Free tiers often have slower performance, more ads, limited support, and fewer keyboard shortcuts. A 10-minute daily productivity loss across 5 people is 21 hours/month. What is that time worth?",
  },
  {
    cost: "Upgrade pressure at the worst time",
    example:
      "Free tiers run out during growth spurts — exactly when you are busiest and least able to evaluate alternatives. This forces rushed upgrade decisions at full price.",
  },
];

export default function HowMuchShouldSoftwareCost() {
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
            <Link
              href="/guides"
              className="hover:text-accent transition-colors"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              How Much Should Software Cost
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Decision Framework
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How Much Should Your Software Stack Cost? Benchmarks by Business
            Stage
          </h1>
          <p className="text-lg text-muted">
            There is no universal answer, but there are reasonable benchmarks.
            This guide breaks down what businesses actually spend at each stage,
            with specific tool allocations, the tool creep problem, and honest
            guidance on when free tools cost more than paid ones.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Pricing verified across 30+ tools"
          sourceCount={24}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Stage Breakdowns */}
          {stages.map((stage, stageIdx) => (
            <section key={stage.stage} className="mb-14">
              <h2 className="text-xl font-bold mt-10 mb-2">
                {stageIdx + 1}. {stage.stage}:{" "}
                <span className={stage.color}>{stage.range}</span>
              </h2>
              <p className="text-muted mb-6">{stage.description}</p>

              <div className="overflow-x-auto rounded-lg border border-border mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Category
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Budget
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        % of Stack
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Recommended Tool
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {stage.allocations.map((alloc) => (
                      <tr key={alloc.category}>
                        <td className="px-4 py-2.5 font-medium text-foreground whitespace-nowrap">
                          {alloc.category}
                        </td>
                        <td className="px-4 py-2.5 text-muted font-mono text-xs">
                          {alloc.budget}
                        </td>
                        <td className="px-4 py-2.5 text-muted">
                          {alloc.percentage}
                        </td>
                        <td className="px-4 py-2.5 text-muted text-xs">
                          {alloc.tool}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-surface-alt">
                      <td className="px-4 py-2.5 font-bold text-foreground">
                        Total
                      </td>
                      <td
                        className={`px-4 py-2.5 font-bold ${stage.color}`}
                        colSpan={3}
                      >
                        {stage.totalRecommended}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="border border-accent/30 bg-accent/5 rounded-xl p-5">
                <p className="text-sm font-bold text-foreground mb-1">
                  Key insight
                </p>
                <p className="text-sm text-muted">{stage.keyInsight}</p>
              </div>
            </section>
          ))}

          {/* Tool Creep */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The Tool Creep Problem
          </h2>
          <p className="text-muted mb-6">
            Tool creep is the gradual accumulation of software subscriptions
            that individually seem small but collectively drain your budget and
            fragment your workflows. Here are the warning signs.
          </p>

          <div className="space-y-4 mb-8">
            {toolCreepSigns.map((item) => (
              <div
                key={item.sign}
                className="border border-red-500/20 bg-red-500/5 rounded-xl p-5"
              >
                <p className="text-sm font-bold text-foreground mb-1">
                  {item.sign}
                </p>
                <p className="text-sm text-muted">{item.example}</p>
              </div>
            ))}
          </div>

          {/* Quarterly Audit */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The Quarterly Software Audit (6 Questions)
          </h2>
          <p className="text-muted mb-6">
            Run this audit every quarter. It takes 30 minutes and typically
            saves $50-200/month.
          </p>

          <div className="border border-border rounded-xl p-5 bg-surface mb-8">
            <ol className="space-y-3">
              {quarterlyAudit.map((step, idx) => (
                <li key={idx} className="text-sm text-muted flex gap-3">
                  <span className="text-accent font-bold shrink-0">
                    {idx + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* When Free Costs More */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            When Free Tools Cost More Than Paid Ones
          </h2>
          <p className="text-muted mb-6">
            Free is not always cheaper. Here are five hidden taxes of free-tier
            software that most teams do not account for.
          </p>

          <div className="space-y-4 mb-8">
            {freeToolHiddenCosts.map((item) => (
              <div
                key={item.cost}
                className="border border-border rounded-xl p-5 bg-surface"
              >
                <p className="text-sm font-bold text-foreground mb-1">
                  {item.cost}
                </p>
                <p className="text-sm text-muted">{item.example}</p>
              </div>
            ))}
          </div>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-foreground mb-1">
              The rule of thumb
            </p>
            <p className="text-sm text-muted">
              Free tiers are right for solo founders testing tools and teams
              with under $5,000/month in revenue. Once you are past that
              threshold, calculate whether the free tier limitations cost you
              more in time, complexity, and workarounds than the paid plan would.
              Usually, they do.
            </p>
          </div>

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold mt-14 mb-4">Common Mistakes</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">
                Buying annual plans for tools you have not tested for 2+
                months.
              </strong>{" "}
              The 20% annual discount is not worth it if you switch tools in
              month 4. Test monthly for 2-3 months before committing to annual
              billing.
            </p>
            <p>
              <strong className="text-foreground">
                Comparing price without comparing value-per-dollar.
              </strong>{" "}
              ActiveCampaign at $49/month that drives $5,000 in email revenue is
              a better deal than a $0 tool that drives $500. Cost matters, but
              return on cost matters more.
            </p>
            <p>
              <strong className="text-foreground">
                Not accounting for per-seat cost scaling.
              </strong>{" "}
              A $14/seat CRM is $14/month for you. When you hire 5 salespeople,
              it is $84/month. When you add the marketing team, it is $168/month.
              Model per-seat costs at your 12-month headcount, not today.
            </p>
            <p>
              <strong className="text-foreground">
                Treating software budget as overhead instead of investment.
              </strong>{" "}
              The right CRM closes more deals. The right email tool increases
              revenue per subscriber. The right automation saves hours per week.
              Cut tools that do not demonstrably improve output, but do not
              starve tools that do.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-8">
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                What percentage of revenue should go to software?
              </p>
              <p className="text-sm text-muted">
                For small businesses, 2-5% of revenue is typical. A business
                making $10,000/month spending $200-500 on software is in the
                normal range. If your software spend exceeds 10% of revenue and
                you are not a software company, audit your stack.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Should I use an all-in-one platform or best-of-breed tools?
              </p>
              <p className="text-sm text-muted">
                Under 10 people: best-of-breed (cheaper, each tool does one
                thing well). Over 10 people: the integration cost of
                best-of-breed starts to exceed the feature compromises of
                all-in-one. HubSpot, for example, becomes more attractive at 10+
                people even though each individual Hub is not best-in-class.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                How do I negotiate software pricing?
              </p>
              <p className="text-sm text-muted">
                Most SaaS tools will negotiate on annual plans, especially for
                5+ seats. Ask for a discount at renewal time (not mid-contract).
                Mention a competitor by name. Ask if startup/nonprofit pricing
                exists. Many tools have unadvertised discounts for annual
                commitments over certain seat counts.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Is it worth paying for premium support tiers?
              </p>
              <p className="text-sm text-muted">
                Almost never for teams under 25 people. Premium support costs
                $50-200/month extra and typically reduces response time from 24
                hours to 4 hours. Unless a 20-hour delay costs you significant
                revenue, standard support is fine.
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={[
            "hubspot-crm",
            "pipedrive",
            "convertkit",
            "beehiiv",
            "activecampaign",
            "make",
            "zapier",
            "notion",
            "clickup",
          ]}
          comparisons={[
            "hubspot-crm-vs-pipedrive",
            "zapier-vs-make",
            "beehiiv-vs-convertkit",
          ]}
          guides={[
            "solo-founder-stack",
            "best-free-tools-startups",
            "email-marketing-annual-cost-2026",
            "crm-annual-cost-2026",
            "automation-annual-cost-2026",
            "how-to-choose-email-platform",
            "how-to-choose-crm",
            "how-to-choose-automation-tool",
            "when-to-switch-software",
          ]}
        />
      </article>
    </>
  );
}
