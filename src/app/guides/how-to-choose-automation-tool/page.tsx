import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title:
    "Zapier vs Make vs n8n: A Decision Framework (Not a Feature List)",
  description:
    "A structured decision framework for choosing between Zapier, Make, and n8n. Based on simplicity vs cost vs control, technical comfort, volume breakpoints, and switching costs.",
  openGraph: {
    title:
      "Zapier vs Make vs n8n: A Decision Framework (Not a Feature List)",
    description:
      "The real decision axis is simplicity vs cost vs control. Assess your technical comfort, check volume breakpoints, and stop comparing feature lists.",
  },
};

const volumeBreakpoints = [
  {
    volume: "Under 100 tasks/month",
    winner: "Zapier Free",
    cost: "$0",
    reasoning:
      "Zapier Free gives you 100 tasks/month with 5 single-step Zaps. This covers basic automations like form-to-CRM or new-subscriber-to-Slack. Do not pay for automation at this volume.",
  },
  {
    volume: "100-750 tasks/month",
    winner: "Zapier Starter ($29.99/mo) or Make Free (1,000 ops)",
    cost: "$0-30",
    reasoning:
      "Make Free gives you 1,000 operations/month for $0 — but you need the technical comfort to use it. If you are non-technical, Zapier Starter at $29.99/mo is the tax you pay for simplicity.",
  },
  {
    volume: "750-10,000 tasks/month",
    winner: "Make Core ($10.59/mo for 10,000 ops)",
    cost: "$10.59",
    reasoning:
      "This is where Make pulls ahead decisively. Zapier Professional at this volume is $73.50/mo. Make Core is $10.59/mo for the same throughput. The 7x price difference is real.",
  },
  {
    volume: "10,000-50,000 tasks/month",
    winner: "Make Pro ($18.82/mo for 40,000 ops) or n8n self-hosted",
    cost: "$5-19",
    reasoning:
      "Make Pro covers 40,000 operations for $18.82/mo. Zapier at this volume is $300+/mo. n8n self-hosted on a $5-10/mo VPS gives you unlimited executions if you can manage the server.",
  },
  {
    volume: "50,000+ tasks/month",
    winner: "n8n self-hosted or Make Teams ($34.12/mo for 100K ops)",
    cost: "$5-35",
    reasoning:
      "At high volume, self-hosting n8n is the cheapest option ($5-20/mo for a VPS). Make Teams handles 100,000 operations for $34.12/mo. Zapier at this volume exceeds $500/mo.",
  },
];

const switchingTriggers = [
  {
    from: "Zapier",
    to: "Make",
    when: "Your Zapier bill exceeds $50/month and you are comfortable learning a new interface. The payback period is typically 1-2 months.",
    guide: "/guides/migrate-zapier-to-make",
    guideLabel: "Zapier to Make migration guide",
  },
  {
    from: "Zapier",
    to: "n8n",
    when: "You are a developer or have one on your team, your automation volume exceeds 10,000 tasks/month, and you want full control over data flow and hosting.",
    guide: "/guides/migrate-zapier-to-n8n",
    guideLabel: "Zapier to n8n migration guide",
  },
  {
    from: "Make",
    to: "Zapier",
    when: "You need an integration that Make does not support (Zapier has 7,000+ apps vs Make's 1,800+), or your team cannot handle Make's learning curve.",
    guide: "/guides/switch-from-make-to-zapier",
    guideLabel: "Make to Zapier migration guide",
  },
  {
    from: "Any",
    to: "Stay put",
    when: "Switching cost (rebuild time + retraining + risk of broken automations) exceeds 6 months of savings. If you save $30/month but spend 20 hours rebuilding, stay put.",
    guide: "/guides/when-to-switch-software",
    guideLabel: "When to switch software guide",
  },
];

export default function HowToChooseAutomationTool() {
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
              How to Choose an Automation Tool
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
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Zapier vs Make vs n8n: A Decision Framework (Not a Feature List)
          </h1>
          <p className="text-lg text-muted">
            You do not need a side-by-side feature comparison. The three
            mainstream automation platforms serve different people at different
            price points. The decision comes down to three axes: simplicity,
            cost, and control. This framework maps your situation to the right
            tool.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Free and paid tiers of Zapier, Make, and n8n"
          sourceCount={15}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* The Real Decision Axis */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            The Real Decision Axis: Simplicity vs Cost vs Control
          </h2>
          <p className="text-muted mb-6">
            Every automation platform makes tradeoffs between three things. You
            cannot optimize for all three. Pick the one that matters most to
            you.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-2">
                Simplicity
              </p>
              <p className="text-3xl font-bold text-accent mb-2">Zapier</p>
              <p className="text-xs text-muted mb-3">
                Easiest to learn. Most integrations (7,000+ apps). If-this-then-that logic that anyone can understand. You pay a premium for not needing to think about technical details.
              </p>
              <p className="text-xs font-mono text-amber-400">
                $29.99/mo for 750 tasks
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-2">
                Cost Efficiency
              </p>
              <p className="text-3xl font-bold text-accent mb-2">Make</p>
              <p className="text-xs text-muted mb-3">
                5-10x cheaper than Zapier at the same volume. Visual scenario builder with branching, loops, and error handling. Moderate learning curve. 1,800+ integrations.
              </p>
              <p className="text-xs font-mono text-green-400">
                $10.59/mo for 10,000 ops
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-2">
                Full Control
              </p>
              <p className="text-3xl font-bold text-accent mb-2">n8n</p>
              <p className="text-xs text-muted mb-3">
                Open source, self-hosted or cloud. Unlimited executions on self-hosted. Write custom code nodes. Full data ownership. Requires technical ability to deploy and maintain.
              </p>
              <p className="text-xs font-mono text-green-400">
                $5-20/mo (self-hosted VPS)
              </p>
            </div>
          </div>

          {/* Technical Comfort Assessment */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Technical Comfort Assessment
          </h2>
          <p className="text-muted mb-6">
            Be honest with yourself. Picking a tool above your technical
            comfort level means automations that break and nobody can fix.
          </p>

          <div className="space-y-4 mb-8">
            <div className="border border-accent/30 bg-accent/5 rounded-xl p-5">
              <p className="text-sm font-bold text-foreground mb-1">
                Level 1: Non-technical
              </p>
              <p className="text-sm text-muted mb-2">
                You cannot explain what an API is. You have never used a command
                line. You want automation to work like a recipe: pick trigger,
                pick action, done.
              </p>
              <p className="text-sm text-foreground">
                <strong>Your tool:</strong>{" "}
                <Link
                  href="/tools/zapier"
                  className="text-accent hover:underline"
                >
                  Zapier
                </Link>
                . The simplicity premium is worth it. Do not fight it.
              </p>
            </div>

            <div className="border border-accent/30 bg-accent/5 rounded-xl p-5">
              <p className="text-sm font-bold text-foreground mb-1">
                Level 2: Tech-comfortable
              </p>
              <p className="text-sm text-muted mb-2">
                You understand what an API does (even if you cannot write one).
                You can read JSON data and figure out field mapping. You are
                comfortable with a visual builder that has more complexity than
                a straight line.
              </p>
              <p className="text-sm text-foreground">
                <strong>Your tool:</strong>{" "}
                <Link
                  href="/tools/make"
                  className="text-accent hover:underline"
                >
                  Make
                </Link>
                . You save 5-10x on cost and gain branching/error handling that
                Zapier gates behind expensive tiers.
              </p>
            </div>

            <div className="border border-accent/30 bg-accent/5 rounded-xl p-5">
              <p className="text-sm font-bold text-foreground mb-1">
                Level 3: Developer or has developer access
              </p>
              <p className="text-sm text-muted mb-2">
                You can spin up a Docker container, manage a VPS, write
                JavaScript/Python, and debug webhooks. Or someone on your team
                can.
              </p>
              <p className="text-sm text-foreground">
                <strong>Your tool:</strong>{" "}
                <Link
                  href="/tools/n8n"
                  className="text-accent hover:underline"
                >
                  n8n (self-hosted)
                </Link>
                . Unlimited executions, full code access, complete data
                ownership. The cost is your time maintaining the server.
              </p>
            </div>
          </div>

          {/* Volume-Based Decision Tree */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Volume-Based Decision Tree with Exact Breakpoints
          </h2>
          <p className="text-muted mb-6">
            Cost differences between platforms only matter at scale. Here are
            the exact volume tiers where the math changes.
          </p>

          <div className="space-y-4 mb-8">
            {volumeBreakpoints.map((tier) => (
              <div
                key={tier.volume}
                className="border border-border rounded-xl p-5 bg-surface"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-sm font-bold text-foreground">
                    {tier.volume}
                  </p>
                  <span className="text-sm font-mono text-green-400 whitespace-nowrap">
                    {tier.cost}/mo
                  </span>
                </div>
                <p className="text-xs text-accent font-semibold mb-1">
                  Winner: {tier.winner}
                </p>
                <p className="text-xs text-muted">{tier.reasoning}</p>
              </div>
            ))}
          </div>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-foreground mb-1">
              Important: tasks vs operations vs executions
            </p>
            <p className="text-sm text-muted">
              Zapier counts each action as a task. Make counts each module
              execution as an operation. n8n counts each workflow run as an
              execution. A 5-step Zapier Zap uses 5 tasks. The same workflow in
              Make uses 5 operations. In n8n, it is 1 execution. This
              difference means direct price comparisons require normalization.
              See{" "}
              <Link
                href="/guides/automation-pricing-compared"
                className="text-accent hover:underline"
              >
                the honest pricing math
              </Link>
              .
            </p>
          </div>

          {/* Just Start with Zapier Free */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The &quot;Just Start with Zapier Free&quot; Argument
          </h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-4 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">When it is valid:</strong>{" "}
              You have never used an automation tool. You want to understand
              what automation can do for your business before committing time or
              money. Zapier Free (100 tasks/month, 5 single-step Zaps) is the
              lowest-friction way to start.
            </p>
            <p>
              <strong className="text-foreground">When it is a trap:</strong>{" "}
              You already know you need multi-step automations (Zapier Free is
              single-step only). You know your volume will exceed 100 tasks
              quickly. In these cases, starting on Make Free (1,000 ops, no step
              limit) saves you from learning one tool just to switch to another.
            </p>
            <p>
              <strong className="text-foreground">The honest advice:</strong>{" "}
              If you are non-technical and have never automated anything, start
              with Zapier Free. Learn the concepts. When you hit the free tier
              limit, evaluate whether to upgrade Zapier or switch to Make. That
              evaluation is easier when you understand what automation does for
              you.
            </p>
          </div>

          {/* When to Switch */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            When to Switch Platforms (And When Switching Costs More Than
            Staying)
          </h2>
          <p className="text-muted mb-6">
            Switching automation platforms means rebuilding every workflow from
            scratch. Nothing auto-migrates. Factor in the rebuild cost before
            deciding.
          </p>

          <div className="space-y-4 mb-8">
            {switchingTriggers.map((trigger) => (
              <div
                key={`${trigger.from}-${trigger.to}`}
                className="border border-border rounded-xl p-5 bg-surface"
              >
                <p className="text-sm font-bold text-foreground mb-1">
                  {trigger.from} → {trigger.to}
                </p>
                <p className="text-sm text-muted mb-2">{trigger.when}</p>
                <Link
                  href={trigger.guide}
                  className="text-xs text-accent hover:underline"
                >
                  {trigger.guideLabel} →
                </Link>
              </div>
            ))}
          </div>

          <div className="border border-red-500/20 bg-red-500/5 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-foreground mb-1">
              The switching cost formula
            </p>
            <p className="text-sm text-muted">
              (Number of active automations x 1-3 hours rebuild time each) +
              (Team retraining time) + (2-4 weeks of parallel running both
              platforms) = Total switching cost. If this exceeds 6 months of
              savings, stay on your current platform.
            </p>
          </div>

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold mt-14 mb-4">Common Mistakes</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">
                Choosing n8n to save money without developer time budgeted.
              </strong>{" "}
              n8n self-hosted costs $5-20/month for the server. But if it goes
              down at 2am and nobody can fix it, your automations stop. The
              server cost is low; the maintenance time cost is the real expense.
            </p>
            <p>
              <strong className="text-foreground">
                Counting Zapier tasks wrong.
              </strong>{" "}
              A 5-step Zap that runs once uses 5 tasks, not 1. A Zap that
              filters 100 records processes 100 tasks even if 95 are filtered
              out. This catches most people upgrading from Free to Starter. See{" "}
              <Link
                href="/guides/zapier-hidden-costs"
                className="text-accent hover:underline"
              >
                Zapier hidden costs
              </Link>
              .
            </p>
            <p>
              <strong className="text-foreground">
                Building complex automations before simple ones work.
              </strong>{" "}
              Start with 3-5 basic automations (form to CRM, new subscriber to
              Slack, weekly digest). Prove value. Then build complexity.
              Overengineering on day one creates fragile automations nobody
              maintains.
            </p>
            <p>
              <strong className="text-foreground">
                Ignoring error handling.
              </strong>{" "}
              Automations break. APIs change, rate limits hit, data formats
              shift. Make has built-in error routes. Zapier has basic retry.
              n8n gives you try/catch nodes. If you do not build error handling,
              you discover broken automations when a customer complains. See{" "}
              <Link
                href="/guides/automation-error-handling"
                className="text-accent hover:underline"
              >
                automation error handling compared
              </Link>
              .
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-8">
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Can I use multiple automation tools together?
              </p>
              <p className="text-sm text-muted">
                Yes, and many teams do. A common pattern: Zapier for simple
                integrations that need broad app coverage, Make for
                high-volume workflows where cost matters. This hybrid approach
                optimizes for both simplicity and cost.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Is n8n cloud worth it vs self-hosting?
              </p>
              <p className="text-sm text-muted">
                n8n Cloud starts at $24/mo for 2,500 executions. At that price,
                Make Core ($10.59/mo for 10,000 ops) is cheaper with less
                maintenance. n8n&apos;s value proposition is primarily
                self-hosting for unlimited executions and data control. If you
                do not want to self-host, Make is usually the better choice.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                What about Pipedream, Activepieces, or other alternatives?
              </p>
              <p className="text-sm text-muted">
                Pipedream is excellent for developers (code-first, generous
                free tier). Activepieces is an n8n alternative with a simpler
                interface. But for most buyers, the Zapier/Make/n8n decision
                covers 95% of use cases. Evaluate alternatives only if all
                three mainstream options fail your requirements.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Do I need an automation tool if I already use HubSpot?
              </p>
              <p className="text-sm text-muted">
                HubSpot workflows handle HubSpot-to-HubSpot automation well.
                You need Zapier/Make when you need to connect HubSpot to
                external tools (Slack, Google Sheets, accounting software). See{" "}
                <Link
                  href="/guides/zapier-vs-hubspot-workflows"
                  className="text-accent hover:underline"
                >
                  Zapier vs HubSpot Workflows
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={["zapier", "make", "n8n"]}
          comparisons={["zapier-vs-make", "make-vs-n8n", "zapier-vs-n8n"]}
          guides={[
            "automation-pricing-compared",
            "automation-zapier-vs-make-vs-n8n",
            "best-automation-tool-solopreneurs",
            "best-automation-tool-agencies",
            "zapier-hidden-costs",
            "automation-error-handling",
            "migrate-zapier-to-make",
            "migrate-zapier-to-n8n",
            "automation-faq",
            "how-to-choose-email-platform",
            "how-to-choose-crm",
            "how-much-should-software-cost",
          ]}
        />
      </article>
    </>
  );
}
