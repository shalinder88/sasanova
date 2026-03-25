import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title:
    "The Solo Founder's Operating System: Software Stack for Under $200/Month",
  description:
    "CRM, email, automation, project management, support, and analytics for solo founders. Complete stack at $0, $100, and $200/month with comparisons, guides, and migration paths.",
  openGraph: {
    title:
      "The Solo Founder's Operating System: Software Stack for Under $200/Month",
    description:
      "Six tool categories for solo founders. Every recommendation links to detailed comparisons, pricing breakdowns, and setup guides.",
  },
};

const categories = [
  {
    icon: "👥",
    name: "CRM",
    why: "You have 20 conversations happening at once — leads, partners, investors, customers. Without a system, deals slip through the cracks.",
    recommended: "HubSpot Free CRM",
    recommendedSlug: "hubspot-crm",
    alternateRec: "Pipedrive Essential ($14/seat/mo)",
    alternateSlug: "pipedrive",
    monthly: "$0 – $14",
    toolPage: "/tools/hubspot-crm",
    alternatePage: "/tools/pipedrive",
    comparison: "/compare/hubspot-crm-vs-pipedrive",
    comparisonLabel: "HubSpot vs Pipedrive",
    guides: [
      {
        href: "/guides/crm-solo-founder",
        label: "Best CRM Setup for Solo Founders",
      },
      {
        href: "/guides/best-crm-freelancers-consultants",
        label: "Best CRM for Freelancers & Consultants",
      },
      {
        href: "/guides/hubspot-crm-setup-guide",
        label: "HubSpot CRM Setup in 30 Minutes",
      },
      {
        href: "/guides/pipedrive-setup-guide",
        label: "Pipedrive Setup Guide",
      },
      {
        href: "/guides/hubspot-pricing-reality",
        label: "HubSpot Pricing Reality Check",
      },
      {
        href: "/guides/migrate-spreadsheet-to-crm",
        label: "Migrate from Spreadsheet to CRM",
      },
    ],
    decision:
      "Start with HubSpot Free CRM. It handles unlimited contacts, a basic pipeline, email logging, and meeting scheduling for $0. If you close deals through a visual pipeline and want something laser-focused on sales, Pipedrive Essential ($14/seat/mo) is simpler and faster. Switch to Pipedrive when HubSpot feels bloated; switch to HubSpot Starter ($20/mo) when you need email sequences.",
  },
  {
    icon: "📧",
    name: "Email & Newsletter",
    why: "Whether you send product updates, a weekly newsletter, or nurture sequences — email is where the money is.",
    recommended: "Kit Free",
    recommendedSlug: "convertkit",
    alternateRec: "beehiiv Launch (free)",
    alternateSlug: "beehiiv",
    monthly: "$0 – $39",
    toolPage: "/tools/convertkit",
    alternatePage: "/tools/beehiiv",
    comparison: "/compare/beehiiv-vs-convertkit",
    comparisonLabel: "beehiiv vs Kit",
    guides: [
      {
        href: "/guides/best-email-tool-creators",
        label: "Best Email Platform for Creators",
      },
      {
        href: "/guides/beehiiv-vs-kit-vs-mailchimp-for-creators",
        label: "beehiiv vs Kit vs Mailchimp",
      },
      {
        href: "/guides/beehiiv-setup-guide",
        label: "beehiiv Setup Guide",
      },
      {
        href: "/guides/newsletter-stack",
        label: "Newsletter Stack Under $150/mo",
      },
      {
        href: "/guides/email-deliverability-compared",
        label: "Email Deliverability Compared",
      },
    ],
    decision:
      "Kit Free supports up to 10,000 subscribers with landing pages and forms — the best free tier for founders who need email alongside product building. beehiiv Launch (free, 2,500 subs) is better if newsletters are your primary growth channel and you want referral programs and a hosted website. For advanced automation, Kit Creator ($29/mo) or beehiiv Scale ($39/mo).",
  },
  {
    icon: "⚡",
    name: "Automation",
    why: "You are one person. Every manual task you automate buys you an hour. Automate lead capture, onboarding emails, and data sync first.",
    recommended: "Make",
    recommendedSlug: "make",
    alternateRec: "Zapier ($0 – $29.99/mo)",
    alternateSlug: "zapier",
    monthly: "$0 – $10.59",
    toolPage: "/tools/make",
    alternatePage: "/tools/zapier",
    comparison: "/compare/zapier-vs-make",
    comparisonLabel: "Zapier vs Make",
    guides: [
      {
        href: "/guides/automation-zapier-vs-make-vs-n8n",
        label: "Zapier vs Make vs n8n",
      },
      {
        href: "/guides/best-automation-tool-solopreneurs",
        label: "Automation for Solopreneurs",
      },
      {
        href: "/guides/automation-pricing-compared",
        label: "Automation Pricing Compared",
      },
      {
        href: "/guides/automate-lead-capture",
        label: "Automate Lead Capture",
      },
      {
        href: "/guides/make-setup-guide",
        label: "Make Setup Guide",
      },
      {
        href: "/guides/zapier-setup-guide",
        label: "Zapier Setup Guide",
      },
      {
        href: "/guides/migrate-zapier-to-make",
        label: "Migrate Zapier to Make",
      },
    ],
    decision:
      "Make Free gives you 1,000 operations/month. That covers 5-10 basic automations running daily. Make Core ($10.59/mo) gives you 10,000 ops — enough for a serious solo operation. Zapier is easier to learn but charges $29.99/mo for only 750 tasks. Choose Zapier if its broader integration library (7,000+ apps vs Make's 1,800+) covers a tool you depend on.",
  },
  {
    icon: "📋",
    name: "Project Management",
    why: "Product roadmap, content calendar, client projects — you need one place to track everything without context-switching.",
    recommended: "Notion",
    recommendedSlug: "notion",
    alternateRec: "ClickUp Free",
    alternateSlug: "clickup",
    monthly: "$0 – $12",
    toolPage: "/tools/notion",
    alternatePage: "/tools/clickup",
    comparison: "/compare/notion-vs-clickup",
    comparisonLabel: "Notion vs ClickUp",
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
        href: "/guides/notion-vs-obsidian-decision",
        label: "Notion vs Obsidian",
      },
      {
        href: "/guides/switch-from-notion-to-clickup",
        label: "Migrate Notion to ClickUp",
      },
      {
        href: "/guides/building-knowledge-base",
        label: "Building a Knowledge Base",
      },
    ],
    decision:
      "Notion Free gives you unlimited pages, databases, and multiple views (board, table, calendar) — perfect for a solo founder managing everything in one workspace. ClickUp Free is better if you need native time tracking, Gantt charts, or dependencies. Switch from Notion to ClickUp when you hire and need structured task assignment and automation rules.",
  },
  {
    icon: "💬",
    name: "Customer Support",
    why: "You don't need Zendesk. You need a way to not lose customer messages as your inbox grows.",
    recommended: "Crisp Free",
    recommendedSlug: "crisp",
    alternateRec: "Freshdesk Free (2 agents)",
    alternateSlug: "freshdesk",
    monthly: "$0",
    toolPage: "/tools/crisp",
    alternatePage: "/tools/freshdesk",
    comparison: "/compare/freshdesk-vs-zendesk",
    comparisonLabel: "Freshdesk vs Zendesk",
    guides: [
      {
        href: "/guides/customer-support-stack",
        label: "Support Stack for Small Teams",
      },
    ],
    decision:
      "Crisp Free gives you 2 seats with live chat widget, shared inbox, and a basic knowledge base — everything a solo founder needs. Freshdesk Free adds ticketing structure and SLA tracking for 2 agents if you prefer a more traditional help desk. Only upgrade when ticket volume exceeds 50/week or you need chatbot automation.",
  },
  {
    icon: "📊",
    name: "Analytics",
    why: "Know what works. Track signups, activation, and where users drop off — without drowning in dashboards.",
    recommended: "PostHog Free",
    recommendedSlug: "posthog",
    alternateRec: "Plausible ($9/mo for simple web analytics)",
    alternateSlug: "plausible",
    monthly: "$0",
    toolPage: "/tools/posthog",
    alternatePage: "/tools/plausible",
    comparison: "/compare/plausible-vs-posthog",
    comparisonLabel: "Plausible vs PostHog",
    guides: [
      {
        href: "/guides/choosing-analytics-tool",
        label: "How to Choose an Analytics Tool",
      },
    ],
    decision:
      "PostHog Free includes product analytics (1M events/month), session replays (5K/month), and feature flags — a full product analytics suite for $0. If you only need simple web analytics (pageviews, referrers, top pages), Plausible at $9/mo is lighter and privacy-first with no cookie banner needed.",
  },
];

const priceTiers = [
  {
    tier: "$0/month",
    label: "Pre-Revenue",
    color: "text-green-400",
    tools: [
      { name: "HubSpot Free CRM", cost: "$0", note: "Unlimited contacts" },
      { name: "Kit Free", cost: "$0", note: "Up to 10K subscribers" },
      { name: "Make Free", cost: "$0", note: "1,000 ops/month" },
      { name: "Notion Free", cost: "$0", note: "Unlimited pages" },
      { name: "Crisp Free", cost: "$0", note: "Live chat + inbox" },
      { name: "PostHog Free", cost: "$0", note: "1M events/month" },
    ],
    total: "$0/month",
    note: "Genuinely free — no credit card, no trial expiration",
  },
  {
    tier: "$100/month",
    label: "First Revenue (10–50 customers)",
    color: "text-amber-400",
    tools: [
      {
        name: "Pipedrive Essential",
        cost: "$14",
        note: "Visual pipeline CRM",
      },
      { name: "Kit Creator", cost: "$29", note: "Automation sequences" },
      { name: "Make Core", cost: "$10.59", note: "10K ops/month" },
      { name: "Notion Free", cost: "$0", note: "Still free" },
      { name: "Crisp Free", cost: "$0", note: "Still free" },
      { name: "PostHog Free", cost: "$0", note: "Still free" },
    ],
    total: "$53.59/month",
    note: "Under budget — reinvest the remaining $46 in growth",
  },
  {
    tier: "$200/month",
    label: "Scaling (50–200 customers)",
    color: "text-purple-400",
    tools: [
      {
        name: "Pipedrive Advanced",
        cost: "$39",
        note: "Workflow automation",
      },
      {
        name: "beehiiv Scale",
        cost: "$39",
        note: "Full newsletter + monetization",
      },
      { name: "Make Pro", cost: "$18.82", note: "40K ops/month" },
      { name: "Notion Plus", cost: "$12", note: "Unlimited file uploads" },
      { name: "Crisp Essentials", cost: "$95", note: "10 seats, chatbot" },
      { name: "PostHog Free", cost: "$0", note: "Still under 1M events" },
    ],
    total: "$203.82/month",
    note: "Full operating system — support your first hires",
  },
];

export default function SoloFounderStackHub() {
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
              Solo Founder Stack
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
            <span className="text-[11px] text-muted">20 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Solo Founder&apos;s Operating System: Software Stack for Under
            $200/Month
          </h1>
          <p className="text-lg text-muted">
            You wear every hat. Your software stack should multiply your
            output, not drain your budget. Here&apos;s the exact stack — CRM,
            email, automation, PM, support, and analytics — at three price
            tiers with specific upgrade triggers and links to every comparison
            on Sasanova.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Free and paid tiers across all tools"
          sourceCount={22}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Decision Flow */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            The Solo Founder Decision Framework
          </h2>
          <p className="text-muted mb-4">
            Most solo founders make one of two mistakes: (1) spending too much on
            enterprise tools they don&apos;t need, or (2) stitching together so
            many free tools that nothing talks to anything else. This guide
            solves both by giving you one recommended tool per category with a
            clear upgrade path.
          </p>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              The $0 stack in one sentence
            </p>
            <p className="text-sm text-muted">
              HubSpot Free CRM + Kit Free + Make Free + Notion Free + Crisp Free
              + PostHog Free. Total: $0/month. Upgrade only when a free tier
              limit blocks real revenue.
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
                      Primary Pick
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {cat.recommended}
                    </p>
                    <p className="text-xs text-muted mt-0.5">
                      Alternative: {cat.alternateRec}
                    </p>
                  </div>
                  <span className="text-sm font-mono text-green-400 whitespace-nowrap">
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
                  <Link
                    href={cat.comparison}
                    className="inline-block text-xs font-medium bg-background border border-border text-accent rounded-full px-3 py-1 hover:border-accent/40 transition-colors"
                  >
                    {cat.comparisonLabel} →
                  </Link>
                </div>
                <p className="text-sm text-muted">{cat.decision}</p>
              </div>

              {/* Related guides */}
              {cat.guides.length > 0 && (
                <div className="ml-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Go Deeper
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

          {/* Cost Tables */}
          <h2 className="text-xl font-bold mt-14 mb-6">
            Total Stack Cost at Three Tiers
          </h2>

          {priceTiers.map((tier) => (
            <div key={tier.tier} className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-1">
                {tier.tier}{" "}
                <span className="text-sm font-normal text-muted">
                  — {tier.label}
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
                        Cost
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
                        <td
                          className={`px-4 py-2.5 ${t.cost === "$0" ? "text-green-400" : ""}`}
                        >
                          {t.cost}
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
                      <td
                        className={`px-4 py-2.5 font-bold ${tier.color}`}
                      >
                        {tier.total}
                      </td>
                      <td className="px-4 py-2.5 text-muted text-xs">
                        {tier.note}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          ))}

          {/* Upgrade Triggers */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            When to Upgrade: The Trigger Points
          </h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">CRM:</strong> Switch from
              HubSpot Free to Pipedrive Essential when you have 20+ active deals
              and need a visual pipeline. Switch to HubSpot Starter when you need
              email sequences.{" "}
              <Link
                href="/guides/switch-from-hubspot-to-pipedrive"
                className="text-accent hover:underline"
              >
                HubSpot → Pipedrive guide
              </Link>
            </p>
            <p>
              <strong className="text-foreground">Email:</strong> Upgrade Kit to
              Creator ($29/mo) when you need automated sequences. Or switch to
              beehiiv Scale ($39/mo) when newsletter growth is your primary
              channel.{" "}
              <Link
                href="/guides/switch-from-kit-to-beehiiv"
                className="text-accent hover:underline"
              >
                Kit → beehiiv guide
              </Link>
            </p>
            <p>
              <strong className="text-foreground">Automation:</strong> Upgrade
              Make to Core ($10.59/mo) when you exceed 1,000 ops/month — usually
              around 10+ active automations.{" "}
              <Link
                href="/guides/automation-pricing-compared"
                className="text-accent hover:underline"
              >
                Pricing math
              </Link>
            </p>
            <p>
              <strong className="text-foreground">PM:</strong> Upgrade Notion to
              Plus ($12/seat/mo) when you hit the 5MB file upload limit. Switch
              to ClickUp when you hire and need task assignment with
              dependencies.{" "}
              <Link
                href="/guides/switch-from-notion-to-clickup"
                className="text-accent hover:underline"
              >
                Notion → ClickUp guide
              </Link>
            </p>
            <p>
              <strong className="text-foreground">Support:</strong> Upgrade Crisp
              to Essentials ($95/mo) when ticket volume exceeds 50/week and you
              need chatbot automation.
            </p>
          </div>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={[
            "hubspot-crm",
            "pipedrive",
            "convertkit",
            "beehiiv",
            "make",
            "zapier",
            "notion",
            "clickup",
            "crisp",
            "freshdesk",
            "posthog",
            "plausible",
          ]}
          comparisons={[
            "hubspot-crm-vs-pipedrive",
            "beehiiv-vs-convertkit",
            "zapier-vs-make",
            "notion-vs-clickup",
            "freshdesk-vs-zendesk",
            "plausible-vs-posthog",
          ]}
          guides={[
            "crm-solo-founder",
            "best-crm-freelancers-consultants",
            "newsletter-stack",
            "best-automation-tool-solopreneurs",
            "automate-lead-capture",
            "project-management-small-team",
            "customer-support-stack",
            "choosing-analytics-tool",
            "best-free-tools-startups",
          ]}
        />
      </article>
    </>
  );
}
