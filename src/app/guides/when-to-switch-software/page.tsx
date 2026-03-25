import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "When to Switch Software (And When to Just Live With It)",
  description:
    "A decision framework for when switching software is worth the pain and when staying put is the smarter move. Switching triggers, switching cost calculator, parallel run strategy, and 12-month cost comparison.",
  openGraph: {
    title: "When to Switch Software (And When to Just Live With It)",
    description:
      "5 triggers that justify switching. 5 situations where switching wastes time. Plus a switching cost calculator and the parallel run strategy.",
  },
};

const switchingTriggers = [
  {
    trigger: "The tool cannot do something your business needs to survive",
    example:
      "Your email tool has no automation and you are losing sales because follow-ups are manual. Your CRM has no mobile app and your field sales team cannot log activities. This is a hard blocker — not a nice-to-have.",
    test: "Ask: is this limitation directly reducing revenue or causing customer churn? If yes, switch.",
  },
  {
    trigger: "The cost has become irrational relative to the value",
    example:
      "Mailchimp charges $270/month for 30,000 contacts. Kit charges $79/month for the same list size with better automation. You are paying a $191/month premium for inertia. Over 12 months, that is $2,292.",
    test: "Calculate: (current annual cost) - (alternative annual cost) = annual savings. If savings exceed switching cost (see calculator below), switch.",
  },
  {
    trigger: "The vendor is moving in a direction hostile to your use case",
    example:
      "Mailchimp cut its free tier from 2,000 to 500 contacts. Zapier raised prices while reducing task counts. When a vendor is systematically making your tier worse, the next price increase is coming.",
    test: "Check the vendor's pricing history over 2-3 years. See our pricing history guides for Mailchimp, Zapier, and HubSpot. Consistent degradation means switch before the next change.",
  },
  {
    trigger: "Your team refuses to use it",
    example:
      "You bought Salesforce. Your sales team logs deals in spreadsheets anyway because Salesforce takes too long. A CRM with 0% adoption is worth $0 regardless of its features. Pipedrive at $14/seat with 90% adoption beats Salesforce at $100/seat with 20% adoption.",
    test: "Check actual usage data (not what people say in meetings). If fewer than 50% of intended users log in weekly, the tool has failed.",
  },
  {
    trigger: "Integration requirements changed fundamentally",
    example:
      "You adopted a new core system (switched CRMs, changed e-commerce platforms, moved to a new billing system) and your current tool does not integrate with it. Duct-taping integrations through Zapier adds cost and fragility.",
    test: "If you need 3+ automations just to connect two tools that should talk natively, the architecture is wrong.",
  },
];

const stayingSituations = [
  {
    situation: "You are annoyed by the UI but it works",
    reasoning:
      "Ugly tools that get the job done beat beautiful tools you have to learn from scratch. UI frustration is not a switching trigger unless it measurably slows down daily work by 30+ minutes across your team.",
  },
  {
    situation: "A competitor launched a flashy new feature",
    reasoning:
      "New features are marketing. They take 6-12 months to mature. Switching to get one feature means accepting that tool's limitations in everything else. Wait until the feature is proven and your current tool still cannot match it.",
  },
  {
    situation: "You could save $20-30/month by switching",
    reasoning:
      "A $20/month saving is $240/year. If switching takes 10 hours (conservative for most tools), you are valuing your time at $24/hour. Unless your time is literally worth less than that, the savings do not justify the disruption.",
  },
  {
    situation: "Someone on your team prefers a different tool",
    reasoning:
      "Personal preference is not a business reason to switch. Unless the preference is shared by the majority of the team AND backed by a measurable improvement (speed, output, cost), keep what works.",
  },
  {
    situation: "You just signed an annual contract",
    reasoning:
      "Switching mid-contract means paying for two tools simultaneously. Unless the current tool is actively harmful (data loss, security issues, blocking revenue), wait until renewal to switch. Use the remaining months to evaluate alternatives properly.",
  },
];

const switchingCostFactors = [
  {
    factor: "Data migration",
    hours: "2-20 hours",
    description:
      "Exporting, cleaning, mapping fields, importing, and verifying data. Simple tools (email list export) take 2 hours. Complex tools (CRM with custom fields, activities, and deal history) take 10-20 hours.",
  },
  {
    factor: "Workflow rebuilding",
    hours: "1-3 hours per workflow",
    description:
      "Every automation, sequence, template, and report must be rebuilt from scratch in the new tool. Nothing auto-migrates between vendors. Count your active workflows and multiply.",
  },
  {
    factor: "Team retraining",
    hours: "2-8 hours per person",
    description:
      "Learning the new interface, understanding the new workflow, building muscle memory. Simple tools (Pipedrive) take 2 hours. Complex tools (HubSpot Professional, Salesforce) take 4-8 hours per person.",
  },
  {
    factor: "Productivity dip",
    hours: "2-4 weeks at 70-80% productivity",
    description:
      "Even after training, your team will be slower for 2-4 weeks as they adapt. This is the most overlooked switching cost. For a 5-person team, a 20% productivity dip for 3 weeks equals 120 hours of lost output.",
  },
  {
    factor: "Integration reconnection",
    hours: "1-5 hours",
    description:
      "Every tool connected to the one you are replacing needs to be reconnected. Zapier automations need new triggers. Webhooks need new endpoints. API keys need updating.",
  },
  {
    factor: "Parallel running",
    hours: "2-4 weeks of dual subscriptions",
    description:
      "Running both the old and new tool simultaneously during transition. This doubles your software cost for that category for 2-4 weeks but is essential for safe migration.",
  },
];

export default function WhenToSwitchSoftware() {
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
              When to Switch Software
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
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            When to Switch Software (And When to Just Live With It)
          </h1>
          <p className="text-lg text-muted">
            Switching software is painful. It costs time, money, productivity,
            and team morale. Sometimes it is absolutely necessary. Sometimes it
            is a waste of energy disguised as progress. This framework helps
            you tell the difference.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Migration analysis across 12 tool categories"
          sourceCount={16}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* 5 Switching Triggers */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            The 5 Switching Triggers That Justify the Pain
          </h2>
          <p className="text-muted mb-6">
            Switch only when one of these conditions is true. If none apply,
            you are probably better off staying put and optimizing what you
            have.
          </p>

          <div className="space-y-4 mb-8">
            {switchingTriggers.map((item, idx) => (
              <div
                key={item.trigger}
                className="border border-accent/30 bg-accent/5 rounded-xl p-5"
              >
                <p className="text-sm font-bold text-foreground mb-1">
                  {idx + 1}. {item.trigger}
                </p>
                <p className="text-sm text-muted mb-2">{item.example}</p>
                <p className="text-xs text-accent">{item.test}</p>
              </div>
            ))}
          </div>

          {/* 5 Situations to Stay */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The 5 Situations Where Switching Is a Waste of Time
          </h2>
          <p className="text-muted mb-6">
            These feel like reasons to switch but they are not. Switching in
            these situations costs more than it saves.
          </p>

          <div className="space-y-4 mb-8">
            {stayingSituations.map((item, idx) => (
              <div
                key={item.situation}
                className="border border-border rounded-xl p-5 bg-surface"
              >
                <p className="text-sm font-bold text-foreground mb-1">
                  {idx + 1}. {item.situation}
                </p>
                <p className="text-sm text-muted">{item.reasoning}</p>
              </div>
            ))}
          </div>

          {/* Switching Cost Calculator */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Switching Cost Calculator Framework
          </h2>
          <p className="text-muted mb-6">
            Before you switch, estimate the true cost. Most people underestimate
            switching cost by 2-3x because they only count the subscription
            difference.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Cost Factor
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Time Estimate
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {switchingCostFactors.map((item) => (
                  <tr key={item.factor}>
                    <td className="px-4 py-2.5 font-medium text-foreground whitespace-nowrap">
                      {item.factor}
                    </td>
                    <td className="px-4 py-2.5 text-amber-400 font-mono text-xs whitespace-nowrap">
                      {item.hours}
                    </td>
                    <td className="px-4 py-2.5 text-muted text-xs">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-foreground mb-2">
              How to calculate your switching cost
            </p>
            <div className="space-y-2 text-sm text-muted">
              <p>
                <strong className="text-foreground">Step 1:</strong> Estimate
                total hours for migration (data + workflows + retraining +
                integration reconnection).
              </p>
              <p>
                <strong className="text-foreground">Step 2:</strong> Multiply
                hours by your effective hourly rate (salary / 2,000 hours/year,
                or your freelance rate).
              </p>
              <p>
                <strong className="text-foreground">Step 3:</strong> Add the
                cost of dual subscriptions during the parallel run period.
              </p>
              <p>
                <strong className="text-foreground">Step 4:</strong> Add the
                productivity dip cost (team size x hours x hourly rate x 0.2
                efficiency loss).
              </p>
              <p>
                <strong className="text-foreground">Step 5:</strong> Compare
                total switching cost to 12-month savings on the new tool.
              </p>
              <p className="text-xs border-t border-border pt-2 mt-2">
                <strong className="text-foreground">Example:</strong> Switching
                from Mailchimp ($135/mo) to Kit ($79/mo) saves $56/month =
                $672/year. Switching cost: 8 hours migration at $75/hr ($600) +
                1 month dual subscription ($79) = $679. Payback: 12 months.
                Borderline — but factor in that Kit pricing scales better, so
                savings grow as your list grows.
              </p>
            </div>
          </div>

          {/* Parallel Run Strategy */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The Parallel Run Strategy for Safe Transitions
          </h2>
          <p className="text-muted mb-6">
            Never do a hard cutover. Run both tools simultaneously for 2-4
            weeks. This is the single best practice for safe software
            transitions.
          </p>

          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-4 text-sm text-muted">
            <div>
              <p className="font-bold text-foreground mb-1">Week 1: Setup and seed data</p>
              <p>
                Set up the new tool. Import your data. Rebuild your top 3-5
                workflows. Do not redirect any live traffic or processes yet.
                Test with sample data.
              </p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">
                Week 2: Shadow running
              </p>
              <p>
                Run the new tool alongside the old one. New data enters both
                systems (use Zapier/Make to duplicate). Compare outputs. Catch
                errors in the new tool before they affect customers.
              </p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">
                Week 3: Gradual cutover
              </p>
              <p>
                Move one process at a time to the new tool. Start with
                low-stakes workflows (internal notifications, reporting). Then
                move customer-facing workflows (email sequences, CRM pipeline).
              </p>
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">
                Week 4: Full transition and cleanup
              </p>
              <p>
                All workflows on the new tool. Old tool is read-only (keep
                it accessible for historical data). Cancel the old subscription
                at the end of the billing cycle. Export a final backup.
              </p>
            </div>
          </div>

          {/* 12-Month Comparison */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            How to Evaluate Switching Cost vs Staying Cost Over 12 Months
          </h2>
          <p className="text-muted mb-6">
            The correct comparison is not this month&apos;s bill. It is the
            total 12-month cost of ownership including all hidden costs.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-3">
                Cost of Staying (12 months)
              </p>
              <ul className="space-y-2 text-xs text-muted">
                <li>Current subscription x 12 months</li>
                <li>+ Expected price increases (check pricing history)</li>
                <li>+ Cost of workarounds for missing features</li>
                <li>+ Automation/integration costs to compensate</li>
                <li>+ Team frustration and slower workflows</li>
                <li className="font-bold text-foreground border-t border-border pt-2">
                  = Total 12-month staying cost
                </li>
              </ul>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-3">
                Cost of Switching (12 months)
              </p>
              <ul className="space-y-2 text-xs text-muted">
                <li>New subscription x 12 months</li>
                <li>+ One-time migration cost (from calculator above)</li>
                <li>+ Dual subscription during parallel run</li>
                <li>+ Productivity dip for 2-4 weeks</li>
                <li>+ New integration/automation costs</li>
                <li className="font-bold text-foreground border-t border-border pt-2">
                  = Total 12-month switching cost
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-foreground mb-1">
              The decision rule
            </p>
            <p className="text-sm text-muted">
              If the 12-month switching cost is less than the 12-month staying
              cost, switch. If it is within 20%, lean toward staying (switching
              always has unforeseen costs). If staying is cheaper, optimize your
              current tool instead — change your workflow, not your software.
            </p>
          </div>

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold mt-14 mb-4">Common Mistakes</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">
                Switching to avoid learning your current tool.
              </strong>{" "}
              If you have not used 60% of your current tool&apos;s features, the
              problem might be training, not the tool. Spend 2 hours exploring
              your current tool&apos;s settings before evaluating alternatives.
            </p>
            <p>
              <strong className="text-foreground">
                Switching multiple tools at once.
              </strong>{" "}
              Changing your CRM, email tool, and automation platform
              simultaneously is a recipe for chaos. Switch one tool at a time
              with 4-6 weeks between transitions. Your team can only absorb so
              much change.
            </p>
            <p>
              <strong className="text-foreground">
                Not exporting data before canceling.
              </strong>{" "}
              Cancel the old tool after confirming the new tool works and after
              exporting a final data backup. Once you cancel, most vendors
              delete your data within 30-90 days. There is no undo.
            </p>
            <p>
              <strong className="text-foreground">
                Making the decision based on a demo instead of a trial.
              </strong>{" "}
              Demos show best-case scenarios. Trials reveal daily friction. Do a
              14-30 day trial with your actual data and workflows before
              committing to a switch. Most tools offer free trials.
            </p>
            <p>
              <strong className="text-foreground">
                Forgetting about annual contract timing.
              </strong>{" "}
              If you are on an annual plan, check the auto-renewal date and
              cancellation window. Most enterprise tools require 30-60 days
              notice before renewal. Missing this window locks you in for
              another year.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-8">
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                How often should I re-evaluate my software stack?
              </p>
              <p className="text-sm text-muted">
                Quarterly audits (30 minutes to check usage and costs). Full
                re-evaluation annually or when your team size doubles. Do not
                evaluate continuously — that is a productivity trap disguised as
                optimization.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Should I migrate my data or start fresh in the new tool?
              </p>
              <p className="text-sm text-muted">
                It depends on the data. Active contacts and deals: always
                migrate. Historical email campaign data: rarely worth migrating
                (it does not transfer meaningfully between platforms). Old
                automation workflows: rebuild from scratch (they never transfer
                cleanly). See our{" "}
                <Link
                  href="/guides/crm-data-migration-checklist"
                  className="text-accent hover:underline"
                >
                  CRM data migration checklist
                </Link>{" "}
                for specifics.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                What if my team resists the switch?
              </p>
              <p className="text-sm text-muted">
                Resistance is often rational. Ask why. If the resistance is
                about learning curve, invest in training and give a 4-week
                adaptation period. If the resistance is because the new tool is
                genuinely worse for their workflow, listen — they might be
                right.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Can I negotiate a deal with a new vendor if I am switching from
                a competitor?
              </p>
              <p className="text-sm text-muted">
                Often yes. Many SaaS vendors offer migration credits, extended
                free trials, or discounted first-year pricing for switchers.
                ActiveCampaign, HubSpot, and Pipedrive all have migration
                assistance programs. Ask before you sign up.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                What is the safest order to switch tools?
              </p>
              <p className="text-sm text-muted">
                Switch in order of dependency, starting with the least
                connected. Typical safe order: (1) project management, (2)
                analytics, (3) automation, (4) email marketing, (5) CRM. Switch
                the CRM last because everything connects to it.
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
            "mailchimp",
            "zapier",
            "make",
          ]}
          comparisons={[
            "hubspot-crm-vs-pipedrive",
            "zapier-vs-make",
            "beehiiv-vs-convertkit",
            "mailchimp-vs-activecampaign",
          ]}
          guides={[
            "migrate-from-mailchimp",
            "migrate-zapier-to-make",
            "migrate-salesforce-to-hubspot",
            "migrate-spreadsheet-to-crm",
            "switch-from-hubspot-to-pipedrive",
            "crm-data-migration-checklist",
            "how-to-choose-email-platform",
            "how-to-choose-crm",
            "how-to-choose-automation-tool",
            "how-much-should-software-cost",
          ]}
        />
      </article>
    </>
  );
}
