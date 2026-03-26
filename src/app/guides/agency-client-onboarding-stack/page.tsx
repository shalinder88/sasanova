import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Agency Client Onboarding Stack: CRM to Kickoff in 48 Hours",
  description:
    "The agency onboarding stack: Pipedrive Growth ($39/seat), PandaDoc Essentials ($35/seat), ClickUp Unlimited ($10/seat), Slack Pro ($8.75/user), Notion Plus ($12/user). Exact per-seat costs and the full workflow.",
  openGraph: {
    title: "Agency Client Onboarding Stack: CRM to Kickoff in 48 Hours",
    description:
      "Five tools that take a new agency client from signed proposal to project kickoff in under 48 hours. Exact per-seat pricing.",
  },
};

const onboardingSteps = [
  {
    step: 1,
    name: "Deal Closes in CRM",
    tool: "Pipedrive Growth",
    slug: "pipedrive",
    price: "$39/seat/mo ($29/seat/mo annual)",
    description: "Deal moves to 'Won' in your visual pipeline. Pipedrive Growth includes email sync, automations, and the scheduler. Automations trigger: (1) notify the PM team, (2) create a ClickUp project from template, (3) send the onboarding form.",
    toolPage: "/tools/pipedrive",
  },
  {
    step: 2,
    name: "Proposal & Contract Signed",
    tool: "PandaDoc Essentials",
    slug: "pandadoc",
    price: "$35/seat/mo ($19/seat/mo annual)",
    description: "Drag-and-drop editor for proposals, SOWs, and contracts. E-signatures included. Document analytics show you who viewed what and when. CRM integration pushes signed status back to Pipedrive automatically.",
    toolPage: "/tools/pandadoc",
  },
  {
    step: 3,
    name: "Project Setup & Task Assignment",
    tool: "ClickUp Unlimited",
    slug: "clickup",
    price: "$10/seat/mo ($7/seat/mo annual)",
    description: "Create projects from templates with pre-loaded tasks, milestones, and dependencies. Unlimited storage, integrations, dashboards, and Gantt charts. Automations assign tasks and set due dates based on project start date.",
    toolPage: "/tools/clickup",
  },
  {
    step: 4,
    name: "Client Communication Channel",
    tool: "Slack Pro",
    slug: "slack",
    price: "$8.75/user/mo ($7.25/user/mo annual)",
    description: "Create a dedicated client channel with Slack Connect (external guests). Unlimited message history, unlimited integrations, and group video for 50 participants. ClickUp and Pipedrive integrations push updates to the channel.",
    toolPage: "/tools/slack",
  },
  {
    step: 5,
    name: "Knowledge Base & Client Docs",
    tool: "Notion Plus",
    slug: "notion",
    price: "$12/user/mo ($10/user/mo annual)",
    description: "Client wiki with brand guidelines, login credentials (use a proper password manager for sensitive ones), meeting notes, and project documentation. Unlimited file uploads, 30-day page history, and custom automations.",
    toolPage: "/tools/notion",
  },
];

const teamSizeCosts = [
  {
    size: "Solo (1 seat each)",
    tools: [
      { name: "Pipedrive Growth", cost: "$39" },
      { name: "PandaDoc Essentials", cost: "$35" },
      { name: "ClickUp Unlimited", cost: "$10" },
      { name: "Slack Pro", cost: "$8.75" },
      { name: "Notion Plus", cost: "$12" },
    ],
    total: "$104.75/mo",
  },
  {
    size: "Small Agency (3 seats)",
    tools: [
      { name: "Pipedrive Growth", cost: "$117" },
      { name: "PandaDoc Essentials", cost: "$105" },
      { name: "ClickUp Unlimited", cost: "$30" },
      { name: "Slack Pro", cost: "$26.25" },
      { name: "Notion Plus", cost: "$36" },
    ],
    total: "$314.25/mo",
  },
  {
    size: "Growing Agency (5 seats)",
    tools: [
      { name: "Pipedrive Growth", cost: "$195" },
      { name: "PandaDoc Essentials", cost: "$175" },
      { name: "ClickUp Unlimited", cost: "$50" },
      { name: "Slack Pro", cost: "$43.75" },
      { name: "Notion Plus", cost: "$60" },
    ],
    total: "$523.75/mo",
  },
];

export default function AgencyClientOnboardingStack() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Agency Onboarding Stack</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Real-World Stack
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Agency Client Onboarding Stack: CRM to Kickoff in 48 Hours
          </h1>
          <p className="text-lg text-muted">
            Every new client should go from signed proposal to active project in 48 hours or less. Here&apos;s the five-tool stack that makes that happen &mdash; with exact per-seat costs at 1, 3, and 5 team members.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="All pricing verified against vendor pages. Per-seat costs calculated at monthly billing."
          sourceCount={5}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Summary */}
          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              Solo: $104.75/mo. 3-person team: $314.25/mo. 5-person team: $523.75/mo.
            </p>
            <p className="text-sm text-muted">
              Pipedrive Growth ($39/seat) + PandaDoc Essentials ($35/seat) + ClickUp Unlimited ($10/seat) + Slack Pro ($8.75/user) + Notion Plus ($12/user). Every tool is per-seat, so costs scale linearly.
            </p>
          </div>

          {/* Onboarding Steps */}
          <h2 className="text-xl font-bold mt-10 mb-4">The 48-Hour Onboarding Workflow</h2>
          {onboardingSteps.map((step) => (
            <section key={step.step} className="mb-10">
              <h2 className="text-xl font-bold mt-10 mb-2">
                Step {step.step}: {step.name}
              </h2>
              <div className="border border-border rounded-xl p-5 bg-surface mb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-lg font-bold text-foreground">{step.tool}</p>
                    <p className="text-xs text-muted mt-0.5">
                      <Link href={step.toolPage} className="text-accent hover:underline">
                        Full review and pricing &rarr;
                      </Link>
                    </p>
                  </div>
                  <span className="text-sm font-mono text-amber-400 whitespace-nowrap">
                    {step.price}
                  </span>
                </div>
                <p className="text-sm text-muted">{step.description}</p>
              </div>
            </section>
          ))}

          {/* Cost by Team Size */}
          <h2 className="text-xl font-bold mt-14 mb-4">Cost by Team Size (Monthly Billing)</h2>
          {teamSizeCosts.map((tier) => (
            <div key={tier.size} className="mb-8">
              <h3 className="text-lg font-bold mb-2">{tier.size}</h3>
              <div className="overflow-x-auto rounded-lg border border-border mt-3">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {tier.tools.map((t) => (
                      <tr key={t.name}>
                        <td className="px-4 py-2.5 font-medium text-foreground">{t.name}</td>
                        <td className="px-4 py-2.5">{t.cost}/mo</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-surface-alt">
                      <td className="px-4 py-2.5 font-bold text-foreground">Total</td>
                      <td className="px-4 py-2.5 font-bold text-amber-400">{tier.total}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          ))}

          <p className="text-sm text-muted mb-4 italic">
            Annual billing saves 15-25% across these tools. At 5 seats, annual billing brings the total from $523.75/mo to roughly $400-$430/mo.
          </p>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why Pipedrive over HubSpot for agencies?</h3>
              <p className="text-sm text-muted">
                HubSpot Free CRM works for agencies that only need basic contact management. But for deal-driven agencies with a visual pipeline, Pipedrive Growth ($39/seat) is more intuitive and focused than HubSpot Starter ($20/seat). HubSpot Professional ($890/mo flat) is where things get expensive fast.{" "}
                <Link href="/compare/hubspot-crm-vs-pipedrive" className="text-accent hover:underline">
                  Full comparison &rarr;
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Can I use PandaDoc Free eSign instead?</h3>
              <p className="text-sm text-muted">
                PandaDoc Free eSign gives you unlimited e-signatures but no document editor, no templates, and no analytics. For simple contracts, it works. For branded proposals with pricing tables and analytics, you need Essentials ($35/seat/mo) or Business ($65/seat/mo).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why ClickUp Unlimited instead of Asana or Monday?</h3>
              <p className="text-sm text-muted">
                ClickUp Unlimited ($10/seat/mo) includes unlimited storage, integrations, dashboards, and Gantt charts. Monday Standard ($14/seat/mo) costs 40% more. Asana Premium ($13.49/user/mo) costs 35% more. ClickUp packs the most features at the lowest per-seat price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Do clients need paid Slack seats?</h3>
              <p className="text-sm text-muted">
                No. Use Slack Connect to invite external clients to specific channels. Clients don&apos;t need their own paid Slack workspace. Only your internal team needs Pro seats ($8.75/user/mo).
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["pipedrive", "pandadoc", "clickup", "slack", "notion"]}
          comparisons={["hubspot-crm-vs-pipedrive", "notion-vs-clickup"]}
          guides={[
            "agency-operations-stack",
            "best-crm-agencies",
            "best-automation-tool-agencies",
            "project-management-small-team",
            "remote-team-communication",
            "proposal-software-freelancers",
          ]}
        />
      </article>
    </>
  );
}
