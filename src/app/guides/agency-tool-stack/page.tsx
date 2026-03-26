import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title:
    "The Digital Agency Tool Stack: Managing Clients Without Losing Money",
  description:
    "CRM, client communication, project delivery, email marketing, automation, and proposals for digital agencies. Per-client cost modeling at 10, 25, and 50 clients with tool consolidation strategy.",
  openGraph: {
    title:
      "The Digital Agency Tool Stack: Managing Clients Without Losing Money",
    description:
      "Seven tool categories for agencies with per-client cost modeling at 10, 25, and 50 clients. HubSpot, Pipedrive, Slack, ClickUp, ActiveCampaign, Make, PandaDoc, and more.",
  },
};

const categories = [
  {
    icon: "👥",
    name: "Client Management (CRM)",
    subtitle: "HubSpot vs Pipedrive for Agency Pipeline",
    why: "Agencies manage multiple clients, multiple contacts per client, and deals at different stages across service lines. Your CRM is the nervous system of the operation.",
    recommended: "Pipedrive Growth",
    recommendedSlug: "pipedrive",
    alternateRec: "HubSpot Starter ($20/mo)",
    alternateSlug: "hubspot-crm",
    monthly: "$14 – $39/seat",
    toolPage: "/tools/pipedrive",
    alternatePage: "/tools/hubspot-crm",
    comparison: "/compare/hubspot-crm-vs-pipedrive",
    comparisonLabel: "HubSpot vs Pipedrive",
    guides: [
      {
        href: "/guides/best-crm-agencies",
        label: "CRM for Agencies: 20+ Clients",
      },
      {
        href: "/guides/hubspot-pricing-reality",
        label: "HubSpot Pricing Reality Check",
      },
      {
        href: "/guides/pipedrive-setup-guide",
        label: "Pipedrive Setup Guide",
      },
      {
        href: "/guides/switch-from-hubspot-to-pipedrive",
        label: "HubSpot to Pipedrive Migration",
      },
    ],
    decision:
      "Pipedrive wins for most agencies. Multiple pipelines (one per service line), visual deal tracking, and activity-based selling at $14-39/seat/mo. HubSpot Free works under 10 clients, but agencies outgrow it fast because you cannot create multiple pipelines or use email sequences on free. HubSpot Professional ($890/mo) is justified only above 30 clients with complex automation needs.",
    agencyNote:
      "The real question: deal-driven or relationship-driven? Pipedrive is built for closing deals through a visual pipeline. HubSpot is better when you need marketing attribution alongside sales. Most agencies are deal-driven.",
  },
  {
    icon: "💬",
    name: "Client Communication",
    subtitle: "Slack + Loom + Notion Per-Client Workspaces",
    why: "Client communication is the make-or-break for retention. Separate client-facing channels from internal chaos, and make async the default.",
    recommended: "Slack Pro + Loom + Notion",
    recommendedSlug: "slack",
    alternateRec: "Microsoft Teams (with M365)",
    alternateSlug: "microsoft-teams",
    monthly: "$8.75/seat + $12.50/seat + $0",
    toolPage: "/tools/slack",
    alternatePage: "/tools/microsoft-teams",
    comparison: "/compare/slack-vs-microsoft-teams",
    comparisonLabel: "Slack vs Teams",
    guides: [
      {
        href: "/guides/remote-team-communication",
        label: "Remote Team Communication",
      },
      {
        href: "/guides/building-knowledge-base",
        label: "Building a Knowledge Base",
      },
    ],
    decision:
      "Slack Connect creates shared channels between your workspace and each client's — one channel per client, organized and searchable. Add Loom Business ($12.50/creator/mo) for async video updates that replace status meetings. Notion Free gives each client a shared workspace for briefs, assets, and approvals. Microsoft Teams is cheaper but Slack Connect is unmatched for multi-org communication.",
    agencyNote:
      "The trio of Slack (real-time) + Loom (async video) + Notion (shared docs) eliminates 60% of client meetings. Clients see progress without scheduling calls. Your team documents decisions instead of losing them in chat.",
  },
  {
    icon: "📋",
    name: "Project Delivery",
    subtitle: "ClickUp vs Asana for Agency Workflows",
    why: "Client deliverables, internal tasks, resource allocation, and deadlines. The tool that prevents scope creep and missed deadlines.",
    recommended: "ClickUp Unlimited",
    recommendedSlug: "clickup",
    alternateRec: "Asana Business ($30.49/seat/mo)",
    alternateSlug: "asana",
    monthly: "$10/seat",
    toolPage: "/tools/clickup",
    alternatePage: "/tools/asana",
    comparison: "/compare/clickup-vs-asana",
    comparisonLabel: "ClickUp vs Asana",
    guides: [
      {
        href: "/guides/project-management-small-team",
        label: "PM for Small Teams",
      },
      {
        href: "/guides/notion-vs-clickup-vs-asana",
        label: "Notion vs ClickUp vs Asana",
      },
      {
        href: "/guides/switch-from-notion-to-clickup",
        label: "Notion to ClickUp Migration",
      },
    ],
    decision:
      "ClickUp Unlimited ($10/seat/mo) gives agencies Gantt charts, time tracking, custom fields, automations, and client-facing guest access for 67% less than Asana Business ($30.49/seat). Choose Asana for teams that value clean UX over feature density — Asana's portfolio views and workflow rules are more polished. Choose ClickUp for agencies that need time tracking, multiple views, and aggressive pricing.",
    agencyNote:
      "The critical feature for agencies: client guest access. ClickUp lets you invite clients as guests (free) to see task progress without seeing internal notes. Asana requires paid guest seats. This alone saves $30+/client/mo.",
  },
  {
    icon: "📧",
    name: "Email / Marketing for Clients",
    subtitle: "ActiveCampaign vs Mailchimp (Multi-Account)",
    why: "You manage email campaigns for multiple clients. You need multi-account management, strong automation, and deliverability you can trust.",
    recommended: "ActiveCampaign",
    recommendedSlug: "activecampaign",
    alternateRec: "Mailchimp Standard ($20/mo base)",
    alternateSlug: "mailchimp",
    monthly: "$15 – $145",
    toolPage: "/tools/activecampaign",
    alternatePage: "/tools/mailchimp",
    comparison: "/compare/activecampaign-vs-mailchimp",
    comparisonLabel: "ActiveCampaign vs Mailchimp",
    guides: [
      {
        href: "/guides/best-email-tool-agencies",
        label: "Email Tools for Agencies",
      },
      {
        href: "/guides/best-automation-marketing-teams",
        label: "Best Automation for Marketing Teams",
      },
      {
        href: "/guides/switch-from-mailchimp-to-activecampaign",
        label: "Mailchimp to ActiveCampaign Migration",
      },
      {
        href: "/guides/email-deliverability-compared",
        label: "Email Deliverability Compared",
      },
    ],
    decision:
      "ActiveCampaign is the agency standard for email. Its visual automation builder with conditional logic, split testing, and CRM integration is unmatched at the price. For agencies managing client lists, ActiveCampaign allows sub-accounts and custom branding. Mailchimp charges per audience and punishes multi-client setups with separate billing per account. Mailchimp Standard works for agencies with 1-3 clients; beyond that, ActiveCampaign is dramatically cheaper.",
    agencyNote:
      "The hidden cost with Mailchimp for agencies: each client needs a separate account (Mailchimp does not allow multiple brands under one billing). At 10 clients, that is 10 separate invoices. ActiveCampaign handles this with one account and segmented lists.",
  },
  {
    icon: "⚡",
    name: "Automation",
    subtitle: "Make vs Zapier for Client Workflows",
    why: "Client onboarding, reporting, data sync, recurring task creation — agencies that automate well are profitable. Agencies that don't, burn out.",
    recommended: "Make",
    recommendedSlug: "make",
    alternateRec: "Zapier Teams ($103.50/mo)",
    alternateSlug: "zapier",
    monthly: "$10.59 – $36.17",
    toolPage: "/tools/make",
    alternatePage: "/tools/zapier",
    comparison: "/compare/zapier-vs-make",
    comparisonLabel: "Zapier vs Make",
    guides: [
      {
        href: "/guides/best-automation-tool-agencies",
        label: "Automation for Agencies",
      },
      {
        href: "/guides/automation-pricing-compared",
        label: "Automation Pricing Compared",
      },
      {
        href: "/guides/migrate-zapier-to-make",
        label: "Zapier to Make Migration",
      },
      {
        href: "/guides/zapier-hidden-costs",
        label: "Zapier Hidden Costs",
      },
    ],
    decision:
      "Make is the agency automation choice. At agency volume (50K+ ops/month), Make Pro ($36.17/mo) costs 3-5x less than equivalent Zapier usage. Make's visual scenario builder handles complex branching logic better than Zapier's linear steps. Zapier Teams ($103.50/mo) is justified only if you need integrations from its 7,000+ app library that Make does not support.",
    agencyNote:
      "The math is simple: 10 clients with 5 automations each running daily = ~1,500 operations/month. Make Core ($10.59/mo, 10K ops) handles this easily. The same on Zapier: 1,500 tasks on Professional ($29.99/mo, 2K tasks). At 25 clients, you need ~3,750 ops — still within Make Core. On Zapier, you need Teams.",
  },
  {
    icon: "📄",
    name: "Proposals & Contracts",
    subtitle: "PandaDoc vs Proposify",
    why: "Professional proposals with tracking, e-signatures, and CRM integration close deals faster than email PDFs. Knowing when a prospect opens your proposal is worth the cost alone.",
    recommended: "PandaDoc Essentials",
    recommendedSlug: "pandadoc",
    alternateRec: "Proposify ($49/seat/mo)",
    alternateSlug: "proposify",
    monthly: "$35 – $49/seat",
    toolPage: "/tools/pandadoc",
    alternatePage: "/tools/proposify",
    comparison: null,
    comparisonLabel: "PandaDoc vs Proposify",
    guides: [
      {
        href: "/guides/proposal-software-freelancers",
        label: "Proposal Software Comparison",
      },
    ],
    decision:
      "PandaDoc Essentials ($35/seat/mo) includes templates, e-signatures, proposal analytics, and CRM integration with both HubSpot and Pipedrive. Proposify ($49/seat/mo) has better design controls, interactive pricing tables, and superior proposal analytics for agencies sending complex custom proposals. PandaDoc wins on CRM integration depth and e-signature speed. Proposify wins on proposal design flexibility and approval workflows.",
    agencyNote:
      "Both tools pay for themselves within 1-2 closed deals. The proposal tracking alone — knowing when a client opens, how long they spend on pricing, and when to follow up — increases close rates by 15-30% versus emailing PDFs.",
  },
];

const clientTiers = [
  {
    clients: "10 Clients",
    teamSize: "3-person agency",
    tools: [
      {
        name: "Pipedrive Lite (2 seats)",
        cost: "$28",
        perClient: "$2.80",
        note: "Visual pipeline, deal tracking",
      },
      {
        name: "Slack Pro (3 seats)",
        cost: "$26.25",
        perClient: "$2.63",
        note: "Slack Connect channels",
      },
      {
        name: "Loom Business (2 creators)",
        cost: "$25",
        perClient: "$2.50",
        note: "Async client updates",
      },
      {
        name: "ClickUp Unlimited (3 seats)",
        cost: "$30",
        perClient: "$3.00",
        note: "Gantt, time tracking",
      },
      {
        name: "ActiveCampaign (5K contacts)",
        cost: "$49",
        perClient: "$4.90",
        note: "Visual automation",
      },
      {
        name: "Make Core",
        cost: "$10.59",
        perClient: "$1.06",
        note: "10K ops/month",
      },
      {
        name: "PandaDoc Essentials (1 seat)",
        cost: "$35",
        perClient: "$3.50",
        note: "Proposals + e-sign",
      },
    ],
    total: "$203.84",
    perClient: "$20.38",
  },
  {
    clients: "25 Clients",
    teamSize: "6-person agency",
    tools: [
      {
        name: "Pipedrive Growth (3 seats)",
        cost: "$117",
        perClient: "$4.68",
        note: "Multi-pipeline, workflow automation",
      },
      {
        name: "Slack Pro (6 seats)",
        cost: "$52.50",
        perClient: "$2.10",
        note: "25 Connect channels",
      },
      {
        name: "Loom Business (3 creators)",
        cost: "$37.50",
        perClient: "$1.50",
        note: "Recording + editing",
      },
      {
        name: "ClickUp Unlimited (6 seats)",
        cost: "$60",
        perClient: "$2.40",
        note: "Client guest access",
      },
      {
        name: "ActiveCampaign Plus (10K contacts)",
        cost: "$79",
        perClient: "$3.16",
        note: "CRM + lead scoring",
      },
      {
        name: "Make Pro",
        cost: "$36.17",
        perClient: "$1.45",
        note: "40K ops/month",
      },
      {
        name: "PandaDoc Essentials (2 seats)",
        cost: "$70",
        perClient: "$2.80",
        note: "CRM integration",
      },
    ],
    total: "$452.17",
    perClient: "$18.09",
  },
  {
    clients: "50 Clients",
    teamSize: "12-person agency",
    tools: [
      {
        name: "HubSpot Professional + 5 seats",
        cost: "$1,140",
        perClient: "$22.80",
        note: "Full CRM + marketing automation",
      },
      {
        name: "Slack Business+ (12 seats)",
        cost: "$150",
        perClient: "$3.00",
        note: "SAML SSO, compliance exports",
      },
      {
        name: "Loom Business (6 creators)",
        cost: "$75",
        perClient: "$1.50",
        note: "Custom branding",
      },
      {
        name: "ClickUp Business (12 seats)",
        cost: "$228",
        perClient: "$4.56",
        note: "Advanced automations, goals",
      },
      {
        name: "ActiveCampaign Pro (25K contacts)",
        cost: "$145",
        perClient: "$2.90",
        note: "Predictive sending, attribution",
      },
      {
        name: "Make Teams + ops packs",
        cost: "$96",
        perClient: "$1.92",
        note: "100K ops/month",
      },
      {
        name: "PandaDoc Business (3 seats)",
        cost: "$195",
        perClient: "$3.90",
        note: "Custom branding, approval flows",
      },
    ],
    total: "$2,029",
    perClient: "$40.58",
  },
];

const consolidationSteps = [
  {
    from: "15 Tools",
    to: "8 Tools",
    description: "The typical agency bloat-to-efficiency path",
    eliminations: [
      "Mailchimp + Constant Contact → ActiveCampaign (one platform, all clients)",
      "Google Sheets + Airtable tracking → Pipedrive/HubSpot CRM (pipeline is the source of truth)",
      "Calendly + Doodle → Cal.com (free, unlimited scheduling)",
      "Trello + Monday.com → ClickUp (one PM tool for everything)",
      "Slack + WhatsApp + email threads → Slack Connect (one channel per client)",
      "Zapier + IFTTT + manual sync → Make (one automation platform)",
      "Google Docs proposals → PandaDoc (templates, tracking, e-sign)",
    ],
  },
];

const faqItems = [
  {
    q: "HubSpot or Pipedrive for an agency?",
    a: "Pipedrive for agencies under 30 clients focused on deal closing. HubSpot for agencies that also handle marketing for clients and need attribution reporting. Pipedrive Growth ($39/seat) gives you multi-pipeline and workflow automation. HubSpot Professional ($890/mo) adds marketing automation, custom objects, and reporting — but costs 5-10x more.",
  },
  {
    q: "How do I manage email marketing for multiple clients?",
    a: "ActiveCampaign with segmented lists under one account. Mailchimp requires separate accounts per client (separate billing, separate logins). ActiveCampaign lets you segment by client, use custom fields for client tagging, and build automations that run per-client without separate billing.",
  },
  {
    q: "Make or Zapier for agency automation?",
    a: "Make for 90% of agencies. At 25 clients with moderate automation, Make Pro ($36.17/mo, 40K ops) handles everything. Zapier Teams ($103.50/mo, 2K tasks/mo) is the equivalent tier — nearly 3x the cost. Zapier wins only when a client uses a niche tool that Make does not integrate with.",
  },
  {
    q: "When does tool consolidation actually save money?",
    a: "Around 15 clients. Below that, tool sprawl is annoying but cheap. Above 15, the overhead of managing separate logins, billing, and data sync across 15+ tools costs more in labor than the tools themselves. Budget one full day to audit and consolidate.",
  },
  {
    q: "What should my per-client tooling cost be?",
    a: "Under $25/client/month at 10-25 clients. Under $45/client/month at 50 clients. If tooling exceeds 5% of your average client retainer, you are overspending. Most agencies charge $3,000-10,000/client/month, so $20-40 in tooling is a rounding error.",
  },
  {
    q: "PandaDoc or Proposify for agency proposals?",
    a: "PandaDoc for agencies that want CRM integration and fast e-signatures. Proposify for agencies that send design-heavy custom proposals with interactive pricing tables. Both cost $35-49/seat/mo. PandaDoc is more popular; Proposify has better design flexibility.",
  },
];

export default function AgencyToolStack() {
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
              Agency Tool Stack
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Scenario Hub
            </span>
            <span className="text-[11px] text-muted">26 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Digital Agency Tool Stack: Managing Clients Without Losing Money
          </h1>
          <p className="text-lg text-muted">
            Seven tool categories for agencies at 10, 25, and 50 clients.
            Per-client cost modeling, head-to-head comparisons for each
            category, the tool consolidation problem, and links to every
            relevant guide on Sasanova.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Agency pricing tiers and multi-client workflows"
          sourceCount={28}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Intro */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            How to Use This Guide
          </h2>
          <p className="text-muted mb-4">
            This guide is built for agency owners who want to stop guessing at
            tools and start modeling actual costs. For each category:
          </p>
          <ol className="text-muted mb-6 space-y-1 list-decimal list-inside">
            <li>
              <strong className="text-foreground">Head-to-head comparison</strong>{" "}
              of the two best options for agencies
            </li>
            <li>
              <strong className="text-foreground">Agency-specific advice</strong>{" "}
              that generic tool reviews miss
            </li>
            <li>
              <strong className="text-foreground">Per-client cost tables</strong>{" "}
              at 10, 25, and 50 clients
            </li>
            <li>
              <strong className="text-foreground">Tool consolidation strategy</strong>{" "}
              for when 15 tools becomes 8
            </li>
          </ol>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              The key metric for agencies
            </p>
            <p className="text-sm text-muted">
              Per-client tooling cost. At 10 clients: under $25/client/month.
              At 25 clients: under $20/client. At 50 clients: under $45/client.
              If tooling exceeds 5% of average client retainer, audit your
              stack.
            </p>
          </div>

          {/* Category Sections */}
          {categories.map((cat, idx) => (
            <section key={cat.name} className="mb-12">
              <h2 className="text-xl font-bold mt-10 mb-1">
                {idx + 1}. {cat.icon} {cat.name}
              </h2>
              <p className="text-sm font-medium text-accent mb-2">
                {cat.subtitle}
              </p>
              <p className="text-muted mb-4 text-sm italic">{cat.why}</p>

              {/* Recommendation card */}
              <div className="border border-border rounded-xl p-5 bg-surface mb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                      Agency Pick
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {cat.recommended}
                    </p>
                    <p className="text-xs text-muted mt-0.5">
                      Alternative: {cat.alternateRec}
                    </p>
                  </div>
                  <span className="text-sm font-mono text-muted whitespace-nowrap">
                    {cat.monthly}/mo
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Link
                    href={cat.toolPage}
                    className="inline-block text-xs font-medium bg-background border border-border text-accent rounded-full px-3 py-1 hover:border-accent/40 transition-colors"
                  >
                    {cat.recommended.split(" + ")[0]} →
                  </Link>
                  <Link
                    href={cat.alternatePage}
                    className="inline-block text-xs font-medium bg-background border border-border text-accent rounded-full px-3 py-1 hover:border-accent/40 transition-colors"
                  >
                    {cat.alternateRec.split(" (")[0]} →
                  </Link>
                  {cat.comparison && (
                    <Link
                      href={cat.comparison}
                      className="inline-block text-xs font-medium bg-background border border-border text-accent rounded-full px-3 py-1 hover:border-accent/40 transition-colors"
                    >
                      {cat.comparisonLabel} →
                    </Link>
                  )}
                </div>
                <p className="text-sm text-muted mb-3">{cat.decision}</p>
                <div className="border-t border-border pt-3 mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                    Agency-Specific Insight
                  </p>
                  <p className="text-sm text-muted">{cat.agencyNote}</p>
                </div>
              </div>

              {/* Related guides */}
              {cat.guides.length > 0 && (
                <div className="ml-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Agency Guides
                  </p>
                  <ul className="space-y-1">
                    {cat.guides.map((g) => (
                      <li key={g.href}>
                        <Link
                          href={g.href}
                          className="text-sm text-accent hover:underline"
                        >
                          {g.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Per-Client Cost Tables */}
          <h2 className="text-xl font-bold mt-14 mb-6">
            Total Stack Cost by Client Count
          </h2>
          <p className="text-muted mb-6">
            The full operations stack at three agency sizes. The per-client
            column helps you model whether your retainer pricing supports your
            tooling.
          </p>

          {clientTiers.map((tier) => (
            <div key={tier.clients} className="mb-10">
              <h3 className="text-lg font-bold text-foreground mb-1">
                {tier.clients}{" "}
                <span className="text-sm font-normal text-muted">
                  — {tier.teamSize}
                </span>
              </h3>
              <div className="overflow-x-auto rounded-lg border border-border mt-3">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Tool
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Monthly
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Per Client
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {tier.tools.map((t) => (
                      <tr key={t.name}>
                        <td className="px-4 py-2.5 font-medium text-foreground">
                          {t.name}
                        </td>
                        <td className="px-4 py-2.5">{t.cost}</td>
                        <td className="px-4 py-2.5 text-accent">
                          {t.perClient}
                        </td>
                        <td className="px-4 py-2.5 text-muted">{t.note}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-surface-alt">
                      <td className="px-4 py-2.5 font-bold text-foreground">
                        Total
                      </td>
                      <td className="px-4 py-2.5 font-bold text-amber-400">
                        {tier.total}/mo
                      </td>
                      <td className="px-4 py-2.5 font-bold text-accent">
                        {tier.perClient}/client
                      </td>
                      <td className="px-4 py-2.5 text-muted text-xs">
                        Full operations stack
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          ))}

          {/* Tool Consolidation */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The Tool Consolidation Problem: When 15 Tools Becomes 8
          </h2>
          <p className="text-muted mb-6">
            Every agency starts lean. Then you add a tool for a client need,
            another for a team preference, and suddenly you have 15 tools with
            overlapping features and no data flowing between them. Here is the
            standard consolidation path.
          </p>

          {consolidationSteps.map((step) => (
            <div key={step.from} className="border border-border rounded-xl p-5 bg-surface mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-red-400">
                  {step.from}
                </span>
                <span className="text-muted">→</span>
                <span className="text-lg font-bold text-green-400">
                  {step.to}
                </span>
                <span className="text-sm text-muted ml-2">
                  {step.description}
                </span>
              </div>
              <ul className="space-y-2">
                {step.eliminations.map((item, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              The consolidation rule
            </p>
            <p className="text-sm text-muted">
              If two tools overlap by 70% in features and one integrates with
              your CRM while the other does not, eliminate the one without CRM
              integration. Your CRM is the center of your agency; everything
              else orbits it.
            </p>
          </div>

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Common Mistakes Agencies Make
          </h2>
          <div className="space-y-3 text-sm text-muted mb-8">
            <p>
              <strong className="text-foreground">
                Buying HubSpot Professional too early.
              </strong>{" "}
              The jump from $20/mo to $890/mo is the biggest cliff in SaaS.
              Most agencies under 25 clients do not need it. Pipedrive Growth
              at $39/seat covers everything until then.{" "}
              <Link
                href="/guides/who-should-not-use-hubspot"
                className="text-accent hover:underline"
              >
                When to skip HubSpot →
              </Link>
            </p>
            <p>
              <strong className="text-foreground">
                Using Zapier at agency volume.
              </strong>{" "}
              Zapier&apos;s per-task pricing crushes agencies running 50+
              automations across clients. Make saves 60-80% at the same
              volume.{" "}
              <Link
                href="/guides/zapier-hidden-costs"
                className="text-accent hover:underline"
              >
                Zapier hidden costs →
              </Link>
            </p>
            <p>
              <strong className="text-foreground">
                Separate Mailchimp accounts per client.
              </strong>{" "}
              10 clients = 10 Mailchimp logins, 10 invoices, and no shared
              templates. ActiveCampaign handles all clients under one account
              with proper segmentation.{" "}
              <Link
                href="/guides/best-email-tool-agencies"
                className="text-accent hover:underline"
              >
                Agency email tools →
              </Link>
            </p>
            <p>
              <strong className="text-foreground">
                No single source of truth.
              </strong>{" "}
              If client data lives in your CRM, your PM tool, your email tool,
              and a spreadsheet — none of them are accurate. Pick one (your
              CRM) and sync everything else to it.{" "}
              <Link
                href="/guides/crm-integrations-that-matter"
                className="text-accent hover:underline"
              >
                CRM integrations guide →
              </Link>
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-10">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-border rounded-xl p-5 bg-surface">
                <h3 className="text-sm font-bold text-foreground mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={[
            "pipedrive",
            "hubspot-crm",
            "slack",
            "microsoft-teams",
            "clickup",
            "asana",
            "activecampaign",
            "mailchimp",
            "make",
            "zapier",
            "pandadoc",
            "proposify",
            "notion",
            "crisp",
          ]}
          comparisons={[
            "hubspot-crm-vs-pipedrive",
            "slack-vs-microsoft-teams",
            "clickup-vs-asana",
            "activecampaign-vs-mailchimp",
            "zapier-vs-make",
            "salesforce-vs-hubspot-crm",
          ]}
          guides={[
            "best-crm-agencies",
            "best-email-tool-agencies",
            "best-automation-tool-agencies",
            "agency-operations-stack",
            "proposal-software-freelancers",
            "remote-team-communication",
            "automation-pricing-compared",
            "hubspot-pricing-reality",
            "crm-integrations-that-matter",
            "project-management-small-team",
          ]}
        />
      </article>
    </>
  );
}
