import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title:
    "Agency Operations Stack: Managing 10+ Clients Without Burning Out",
  description:
    "CRM, email marketing, automation, project management, communication, and proposals for agencies. Per-client cost modeling at 10, 20, and 50 clients with links to every guide and comparison.",
  openGraph: {
    title:
      "Agency Operations Stack: Managing 10+ Clients Without Burning Out",
    description:
      "Six tool categories for agencies with per-client cost modeling at 10, 20, and 50 clients.",
  },
};

const categories = [
  {
    icon: "👥",
    name: "CRM",
    why: "Multiple clients, multiple contacts per client, different deal stages. Your CRM is the single source of truth for every client relationship.",
    recommended: "HubSpot CRM",
    recommendedSlug: "hubspot-crm",
    alternateRec: "Pipedrive Growth ($39/seat/mo)",
    alternateSlug: "pipedrive",
    monthly: "$0 – $890",
    toolPage: "/tools/hubspot-crm",
    alternatePage: "/tools/pipedrive",
    comparison: "/compare/hubspot-crm-vs-pipedrive",
    comparisonLabel: "HubSpot vs Pipedrive",
    guides: [
      {
        href: "/guides/best-crm-agencies",
        label: "CRM for Agencies: 20+ Clients",
      },
      {
        href: "/guides/best-crm-sales-teams",
        label: "CRM for Sales Teams of 5-25",
      },
      {
        href: "/guides/hubspot-pricing-reality",
        label: "HubSpot Pricing Reality",
      },
      {
        href: "/guides/hubspot-crm-setup-guide",
        label: "HubSpot CRM Setup Guide",
      },
      {
        href: "/guides/pipedrive-setup-guide",
        label: "Pipedrive Setup Guide",
      },
      {
        href: "/guides/switch-from-pipedrive-to-hubspot",
        label: "Pipedrive to HubSpot Migration",
      },
      {
        href: "/guides/switch-from-hubspot-to-pipedrive",
        label: "HubSpot to Pipedrive Migration",
      },
    ],
    decision:
      "Start with HubSpot Free for under 10 clients. The free CRM handles unlimited contacts with basic pipeline. When you need multi-pipeline management (one per service line) and email sequences, HubSpot Starter ($20/mo) covers small agencies. For agencies doing complex deal tracking across 20+ clients, Pipedrive Growth ($39/seat/mo) gives you workflow automation, better pipeline visibility, and costs less per seat than HubSpot Professional ($890/mo).",
    clientScaling:
      "HubSpot Free: $0 regardless of client count. Pipedrive Growth: $39/seat, so 3 account managers = $117/mo. HubSpot Professional: $890/mo flat + $50/additional seat — only justified above 20 clients with complex automation needs.",
  },
  {
    icon: "📧",
    name: "Email Marketing",
    why: "Client campaigns, onboarding sequences, retention emails — often managed across multiple accounts. You need multi-client management, not just a newsletter tool.",
    recommended: "ActiveCampaign",
    recommendedSlug: "activecampaign",
    alternateRec: "Brevo (send-based pricing)",
    alternateSlug: "brevo",
    monthly: "$15 – $145",
    toolPage: "/tools/activecampaign",
    alternatePage: "/tools/brevo",
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
      {
        href: "/guides/email-marketing-annual-cost-2026",
        label: "Email Marketing Costs in 2026",
      },
    ],
    decision:
      "ActiveCampaign has the deepest automation builder with CRM integration, starting at $15/mo (1,000 contacts). For agencies managing 10+ client email programs, its visual automation builder with conditional logic, split testing, and lead scoring is unmatched. Brevo is the budget alternative — it charges per emails sent (not contacts), which can save money if you manage large, low-frequency lists.",
    clientScaling:
      "ActiveCampaign Lite at 10K contacts: ~$79/mo. At 25K contacts: ~$145/mo. Brevo Business at 20K emails/mo: $18/mo — dramatically cheaper if send volume is low relative to list size.",
  },
  {
    icon: "⚡",
    name: "Automation",
    why: "Client onboarding workflows, reporting automation, data sync between tools, recurring task creation — agencies live and die by operational efficiency.",
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
        href: "/guides/automation-zapier-vs-make-vs-n8n",
        label: "Zapier vs Make vs n8n",
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
        href: "/guides/make-setup-guide",
        label: "Make Setup Guide",
      },
      {
        href: "/guides/zapier-hidden-costs",
        label: "Zapier Hidden Costs",
      },
    ],
    decision:
      "Make is the agency choice. Make Teams ($18.82/mo, shared across team) gives you 10K ops/month with team collaboration features. At agency volume (50K+ ops/month), Make Pro ($36.17/mo) is 3-5x cheaper than equivalent Zapier usage. Zapier Teams ($103.50/mo) makes sense only if you need its 7,000+ app library for client-specific integrations Make doesn't support.",
    clientScaling:
      "Make Core at 10K ops handles ~10 clients with moderate automation. Make Pro at 40K ops handles ~20-30 clients. At 50 clients, Make Teams at $36.17/mo + additional ops packs ($10/10K ops) keeps costs under $100/mo. Equivalent Zapier usage: $300-500/mo.",
  },
  {
    icon: "📋",
    name: "Project Management",
    why: "Client deliverables, internal tasks, timelines, resource allocation. The tool that prevents balls from being dropped.",
    recommended: "ClickUp",
    recommendedSlug: "clickup",
    alternateRec: "Asana Business ($30.49/seat/mo)",
    alternateSlug: "asana",
    monthly: "$10 – $19",
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
      "ClickUp Unlimited ($10/seat/mo) gives agencies Gantt charts, time tracking, custom fields, automations, and unlimited integrations — more features per dollar than any competitor. Asana Business ($30.49/seat/mo) is the premium alternative with a cleaner interface, better portfolio views, and superior workflow rules. Choose ClickUp for value; choose Asana for teams that value simplicity over feature density.",
    clientScaling:
      "ClickUp Unlimited: $10/seat/mo. 5-person agency = $50/mo. 10-person = $100/mo. Asana equivalent: $152.45/mo and $304.90/mo respectively. ClickUp saves agencies 67% on PM tooling.",
  },
  {
    icon: "💬",
    name: "Communication",
    why: "Client communication channels, internal team chat, async updates. You need separation between client-facing and internal conversations.",
    recommended: "Slack",
    recommendedSlug: "slack",
    alternateRec: "Microsoft Teams (with M365)",
    alternateSlug: "microsoft-teams",
    monthly: "$0 – $8.75/seat",
    toolPage: "/tools/slack",
    alternatePage: "/tools/microsoft-teams",
    comparison: "/compare/slack-vs-microsoft-teams",
    comparisonLabel: "Slack vs Teams",
    guides: [
      {
        href: "/guides/remote-team-communication",
        label: "Remote Team Communication",
      },
    ],
    decision:
      "Slack Pro ($8.75/seat/mo) is the agency standard. Slack Connect lets you create shared channels with clients — one for each client, keeping conversations organized and searchable. Microsoft Teams is cheaper (often free with Microsoft 365) but Slack Connect is unmatched for multi-org client communication. Use Slack for client work; Teams for internal-only agencies already on Microsoft 365.",
    clientScaling:
      "Slack Pro: $8.75/seat. 5 team members = $43.75/mo regardless of client count. Slack Connect channels are free on Pro. Teams: $4/seat/mo or free with M365 ($12.50/user/mo Business Basic).",
  },
  {
    icon: "📄",
    name: "Proposals & Contracts",
    why: "Win rates go up when proposals look professional and tracking tells you when to follow up. Stop sending PDFs.",
    recommended: "PandaDoc",
    recommendedSlug: "pandadoc",
    alternateRec: "Proposify ($49/seat/mo)",
    alternateSlug: "proposify",
    monthly: "$35 – $65",
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
      "PandaDoc Essentials ($35/seat/mo) includes templates, e-signatures, proposal tracking, and CRM integration. Proposify ($49/seat/mo) has better design controls and proposal analytics for agencies that send complex, custom proposals. Both dramatically beat email PDFs for win rates and follow-up timing. PandaDoc wins on CRM integration depth; Proposify wins on proposal design flexibility.",
    clientScaling:
      "PandaDoc: $35/seat for the proposal sender. 2 account managers = $70/mo regardless of client count. Proposify: $49/seat, so $98/mo for 2 seats. Cost is per team member, not per client.",
  },
];

const clientTiers = [
  {
    clients: "10 Clients",
    teamSize: "3-person agency",
    tools: [
      {
        name: "HubSpot Starter CRM",
        cost: "$20",
        perClient: "$2.00",
        note: "2 users included",
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
        name: "ClickUp Unlimited (3 seats)",
        cost: "$30",
        perClient: "$3.00",
        note: "Full PM features",
      },
      {
        name: "Slack Pro (3 seats)",
        cost: "$26.25",
        perClient: "$2.63",
        note: "Slack Connect",
      },
      {
        name: "PandaDoc Essentials (1 seat)",
        cost: "$35",
        perClient: "$3.50",
        note: "Proposals + e-sign",
      },
    ],
    total: "$170.84",
    perClient: "$17.08",
  },
  {
    clients: "20 Clients",
    teamSize: "5-person agency",
    tools: [
      {
        name: "Pipedrive Growth (3 seats)",
        cost: "$117",
        perClient: "$5.85",
        note: "Multi-pipeline",
      },
      {
        name: "ActiveCampaign (10K contacts)",
        cost: "$79",
        perClient: "$3.95",
        note: "CRM + automation",
      },
      {
        name: "Make Pro",
        cost: "$36.17",
        perClient: "$1.81",
        note: "40K ops/month",
      },
      {
        name: "ClickUp Unlimited (5 seats)",
        cost: "$50",
        perClient: "$2.50",
        note: "Time tracking",
      },
      {
        name: "Slack Pro (5 seats)",
        cost: "$43.75",
        perClient: "$2.19",
        note: "20 Connect channels",
      },
      {
        name: "PandaDoc Essentials (2 seats)",
        cost: "$70",
        perClient: "$3.50",
        note: "CRM integration",
      },
    ],
    total: "$395.92",
    perClient: "$19.80",
  },
  {
    clients: "50 Clients",
    teamSize: "10-person agency",
    tools: [
      {
        name: "HubSpot Professional + 5 seats",
        cost: "$1,140",
        perClient: "$22.80",
        note: "Full marketing + sales",
      },
      {
        name: "ActiveCampaign Pro (25K contacts)",
        cost: "$145",
        perClient: "$2.90",
        note: "CRM + lead scoring",
      },
      {
        name: "Make Teams + ops packs",
        cost: "$96",
        perClient: "$1.92",
        note: "100K ops/month",
      },
      {
        name: "ClickUp Business (10 seats)",
        cost: "$190",
        perClient: "$3.80",
        note: "Advanced automations",
      },
      {
        name: "Slack Business+ (10 seats)",
        cost: "$125",
        perClient: "$2.50",
        note: "SAML SSO, compliance",
      },
      {
        name: "PandaDoc Business (3 seats)",
        cost: "$195",
        perClient: "$3.90",
        note: "Custom branding",
      },
    ],
    total: "$1,891",
    perClient: "$37.82",
  },
];

export default function AgencyOperationsStackHub() {
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
              Agency Operations Stack
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
            <span className="text-[11px] text-muted">24 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Agency Operations Stack: Managing 10+ Clients Without Burning Out
          </h1>
          <p className="text-lg text-muted">
            Agency operations break at 10 clients. The spreadsheet stops
            working, the inbox becomes unmanageable, and things fall through
            cracks. Here&apos;s the exact tool stack for agencies at 10, 20, and
            50 clients — with per-client cost modeling and links to every
            relevant comparison and guide on Sasanova.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Agency pricing tiers and multi-client workflows"
          sourceCount={24}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Decision Flow */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            How to Use This Guide
          </h2>
          <p className="text-muted mb-4">
            This is a decision hub for agency owners. For each operational
            category, we provide:
          </p>
          <ol className="text-muted mb-6 space-y-1 list-decimal list-inside">
            <li>
              <strong className="text-foreground">The recommended tool</strong>{" "}
              and why it works for agencies specifically
            </li>
            <li>
              <strong className="text-foreground">Per-client cost scaling</strong>{" "}
              so you can model your actual economics
            </li>
            <li>
              <strong className="text-foreground">
                Links to comparisons, setup guides, and migration paths
              </strong>
            </li>
            <li>
              <strong className="text-foreground">
                Total stack cost at 10, 20, and 50 clients
              </strong>
            </li>
          </ol>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              The key metric for agencies
            </p>
            <p className="text-sm text-muted">
              Per-client tooling cost. At 10 clients, you should spend under
              $20/client/month on operations software. At 50 clients, that
              number rises to ~$38/client — but your revenue per client should
              far exceed that. If your tool costs exceed 5% of client revenue,
              something is wrong.
            </p>
          </div>

          {/* Category Sections */}
          {categories.map((cat, idx) => (
            <section key={cat.name} className="mb-12">
              <h2 className="text-xl font-bold mt-10 mb-2">
                {idx + 1}. {cat.icon} {cat.name}
              </h2>
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
                    {cat.recommended} →
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
                    Client Scaling Math
                  </p>
                  <p className="text-sm text-muted">{cat.clientScaling}</p>
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
            The table below shows the full operations stack at three agency
            sizes. The per-client column helps you model whether your pricing
            supports your tooling.
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

          {/* Scaling Decision Flow */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The Agency Scaling Decision Flow
          </h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-4 text-sm text-muted">
            <div>
              <p className="font-semibold text-foreground mb-1">
                5-10 clients: Keep it lean
              </p>
              <p>
                HubSpot Free + ActiveCampaign Starter + Make Core + ClickUp Free
                + Slack Free. Total: under $100/mo. Don&apos;t over-invest in
                tools until you have predictable recurring revenue.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                10-20 clients: Professionalize operations
              </p>
              <p>
                This is the pain point. Add Pipedrive or HubSpot Starter for
                pipeline management. Upgrade ClickUp for team features. Add
                PandaDoc for proposals. Budget: $200-400/mo.{" "}
                <Link
                  href="/guides/best-crm-agencies"
                  className="text-accent hover:underline"
                >
                  Agency CRM guide
                </Link>
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                20-50 clients: Systematize everything
              </p>
              <p>
                HubSpot Professional becomes justified ($890/mo) because
                reporting, custom objects, and advanced automation save hours
                weekly. ClickUp Business for advanced permissions. Make Teams for
                shared automation library.{" "}
                <Link
                  href="/guides/hubspot-pricing-reality"
                  className="text-accent hover:underline"
                >
                  HubSpot pricing deep dive
                </Link>
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">
                50+ clients: Consider the enterprise tier or specialized tools
              </p>
              <p>
                At this scale, per-client cost matters less than team efficiency.
                Consider HubSpot Enterprise, dedicated project management (Asana
                Business), and specialized tools for your agency type. Read our
                guides on{" "}
                <Link
                  href="/guides/best-automation-tool-agencies"
                  className="text-accent hover:underline"
                >
                  agency automation
                </Link>{" "}
                and{" "}
                <Link
                  href="/guides/best-email-tool-agencies"
                  className="text-accent hover:underline"
                >
                  agency email tools
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Common Agency Tool Mistakes
          </h2>
          <div className="space-y-3 text-sm text-muted mb-8">
            <p>
              <strong className="text-foreground">
                Buying HubSpot Professional too early.
              </strong>{" "}
              The jump from $20/mo to $890/mo is the biggest cliff in SaaS. Most
              agencies under 20 clients don&apos;t need it.{" "}
              <Link
                href="/guides/who-should-not-use-hubspot"
                className="text-accent hover:underline"
              >
                When to skip HubSpot
              </Link>
            </p>
            <p>
              <strong className="text-foreground">
                Using Zapier at agency volume.
              </strong>{" "}
              Zapier&apos;s per-task pricing crushes agencies running 50+
              automations. Make saves 60-80% at the same volume.{" "}
              <Link
                href="/guides/who-should-not-use-zapier"
                className="text-accent hover:underline"
              >
                When to skip Zapier
              </Link>
            </p>
            <p>
              <strong className="text-foreground">
                Separate tools for every function.
              </strong>{" "}
              If your CRM, email, and automation don&apos;t talk to each other,
              you&apos;re paying for integration overhead.{" "}
              <Link
                href="/guides/crm-integrations-that-matter"
                className="text-accent hover:underline"
              >
                CRM integrations guide
              </Link>
            </p>
          </div>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={[
            "hubspot-crm",
            "pipedrive",
            "activecampaign",
            "brevo",
            "make",
            "zapier",
            "clickup",
            "asana",
            "slack",
            "microsoft-teams",
            "pandadoc",
            "proposify",
          ]}
          comparisons={[
            "hubspot-crm-vs-pipedrive",
            "activecampaign-vs-mailchimp",
            "zapier-vs-make",
            "clickup-vs-asana",
            "slack-vs-microsoft-teams",
            "salesforce-vs-hubspot-crm",
          ]}
          guides={[
            "best-crm-agencies",
            "best-email-tool-agencies",
            "best-automation-tool-agencies",
            "proposal-software-freelancers",
            "remote-team-communication",
            "automation-pricing-compared",
            "hubspot-pricing-reality",
            "crm-integrations-that-matter",
            "best-crm-sales-teams",
          ]}
        />
      </article>
    </>
  );
}
