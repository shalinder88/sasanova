import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title:
    "The SaaS Founder's Tool Stack: What to Use at Each Stage",
  description:
    "Pre-launch to scale: the exact software stack for SaaS founders at $0, $100-200, $300-500, and $1,000+/month. beehiiv, HubSpot, Kit, Pipedrive, Make, Zapier, ActiveCampaign, PostHog, and more with stage-specific recommendations.",
  openGraph: {
    title:
      "The SaaS Founder's Tool Stack: What to Use at Each Stage",
    description:
      "Four growth stages. Specific tools and plans at each. What to skip, what to invest in, and the single most important integration at every stage.",
  },
};

const stages = [
  {
    name: "Pre-Launch",
    budget: "$0/month",
    color: "text-green-400",
    description:
      "You have an idea, maybe a landing page, maybe a waitlist. Every dollar should go to building, not tooling.",
    tools: [
      {
        name: "beehiiv Launch",
        cost: "$0",
        category: "Newsletter / Waitlist",
        note: "2,500 subscribers, custom domain, referral program",
        slug: "beehiiv",
      },
      {
        name: "HubSpot Free CRM",
        cost: "$0",
        category: "CRM",
        note: "Unlimited contacts, basic pipeline, meeting scheduler",
        slug: "hubspot-crm",
      },
      {
        name: "Notion Free",
        cost: "$0",
        category: "Project Management / Docs",
        note: "Unlimited pages, databases, and views",
        slug: "notion",
      },
      {
        name: "Cal.com Free",
        cost: "$0",
        category: "Scheduling",
        note: "Unlimited event types, calendar integrations",
        slug: "cal-com",
      },
      {
        name: "Plausible",
        cost: "$9",
        category: "Analytics",
        note: "Privacy-first, no cookie banner, lightweight",
        slug: "plausible",
      },
    ],
    total: "$9/month",
    keyIntegration:
      "beehiiv to HubSpot CRM: every waitlist signup automatically becomes a CRM contact. You build your pipeline before you have a product.",
    keyIntegrationLink: "/guides/automate-lead-capture",
    whatToSkip: [
      "Paid CRM tiers -- HubSpot Free handles unlimited contacts",
      "Automation platforms -- you don't have enough processes to automate yet",
      "Paid analytics -- Plausible at $9/mo is the only justified spend, skip PostHog until you ship",
      "Project management upgrades -- Notion Free is more than enough for a solo founder",
      "Customer support tools -- your inbox is fine until you have 20+ paying customers",
    ],
  },
  {
    name: "Post-Launch",
    budget: "$100-200/month",
    color: "text-amber-400",
    description:
      "You have paying customers. You need email sequences, a real pipeline, and basic automation to stop doing everything manually.",
    tools: [
      {
        name: "Kit Creator",
        cost: "$29",
        category: "Email Marketing",
        note: "Automation sequences, 1,000 subscribers included",
        slug: "convertkit",
      },
      {
        name: "Pipedrive Essential",
        cost: "$14",
        category: "CRM",
        note: "Visual pipeline, deal tracking, email integration",
        slug: "pipedrive",
      },
      {
        name: "Make Core",
        cost: "$10.59",
        category: "Automation",
        note: "10,000 ops/month, webhook triggers",
        slug: "make",
      },
      {
        name: "Crisp Free",
        cost: "$0",
        category: "Customer Support",
        note: "2 seats, live chat, shared inbox",
        slug: "crisp",
      },
      {
        name: "Notion Free",
        cost: "$0",
        category: "Project Management",
        note: "Still free, still enough",
        slug: "notion",
      },
      {
        name: "Plausible",
        cost: "$9",
        category: "Analytics",
        note: "Landing page and marketing analytics",
        slug: "plausible",
      },
    ],
    total: "$62.59/month",
    keyIntegration:
      "Kit to Pipedrive via Make: new trial signups trigger an email welcome sequence AND create a deal in your pipeline. You never manually track a lead again.",
    keyIntegrationLink: "/guides/automate-lead-capture",
    whatToSkip: [
      "HubSpot Professional -- the $890/mo jump is not justified under 200 customers",
      "Zapier at this stage -- Make Core is 3-5x cheaper for the same automation volume",
      "Dedicated analytics suites -- Plausible for web, your product's built-in analytics for product metrics",
      "Proposal tools -- you're closing deals over email, not sending formal proposals",
      "Team communication tools -- Slack/Teams are premature until you hire",
    ],
  },
  {
    name: "Growth",
    budget: "$300-500/month",
    color: "text-purple-400",
    description:
      "You have product-market fit. Revenue is growing, you may have hired your first person, and you need tools that scale with you.",
    tools: [
      {
        name: "ActiveCampaign Plus",
        cost: "$49",
        category: "Email + CRM",
        note: "Advanced automation, lead scoring, landing pages",
        slug: "activecampaign",
      },
      {
        name: "HubSpot Starter",
        cost: "$20",
        category: "CRM + Marketing",
        note: "Email sequences, meeting scheduler, forms",
        slug: "hubspot-crm",
      },
      {
        name: "Zapier Professional",
        cost: "$29.99",
        category: "Automation",
        note: "2,000 tasks/month, multi-step zaps, 7,000+ apps",
        slug: "zapier",
      },
      {
        name: "PostHog Free",
        cost: "$0",
        category: "Product Analytics",
        note: "1M events/month, session replays, feature flags",
        slug: "posthog",
      },
      {
        name: "ClickUp Unlimited",
        cost: "$10",
        category: "Project Management",
        note: "Per seat, Gantt charts, time tracking, automations",
        slug: "clickup",
      },
      {
        name: "Crisp Essentials",
        cost: "$95",
        category: "Customer Support",
        note: "10 seats, chatbot, knowledge base, ticketing",
        slug: "crisp",
      },
    ],
    total: "$203.99/month",
    keyIntegration:
      "PostHog to ActiveCampaign: product usage data triggers email campaigns. Users who activate get upsell sequences. Users who stall get re-engagement flows. This is the integration that separates growing SaaS from stalling SaaS.",
    keyIntegrationLink: "/guides/email-automation-sequences-compared",
    whatToSkip: [
      "Enterprise CRM tiers -- HubSpot Starter + ActiveCampaign Plus covers everything until 500+ customers",
      "Dedicated ABM tools -- your CRM handles account-based workflows at this scale",
      "Multiple analytics tools -- PostHog Free replaces Google Analytics, Mixpanel, and Hotjar in one tool",
      "Paid scheduling tools -- Cal.com is still free for individual use",
      "Complex BI dashboards -- PostHog and your CRM reporting handles this stage",
    ],
  },
  {
    name: "Scale",
    budget: "$1,000+/month",
    color: "text-blue-400",
    description:
      "Revenue justifies enterprise features. You have a team, established processes, and need dedicated support and advanced reporting.",
    tools: [
      {
        name: "HubSpot Professional",
        cost: "$890",
        category: "CRM + Marketing Hub",
        note: "Custom objects, workflows, attribution reporting",
        slug: "hubspot-crm",
      },
      {
        name: "ActiveCampaign Pro",
        cost: "$79",
        category: "Marketing Automation",
        note: "25K contacts, predictive sending, CRM + lead scoring",
        slug: "activecampaign",
      },
      {
        name: "Make Teams",
        cost: "$36.17",
        category: "Automation",
        note: "Shared scenarios, team access, 40K+ ops/month",
        slug: "make",
      },
      {
        name: "ClickUp Business",
        cost: "$19",
        category: "Project Management",
        note: "Per seat, advanced automations, time estimates, goals",
        slug: "clickup",
      },
      {
        name: "PostHog",
        cost: "$0-450",
        category: "Product Analytics",
        note: "Usage-based above free tier, full suite",
        slug: "posthog",
      },
      {
        name: "Intercom Starter",
        cost: "$74",
        category: "Customer Support",
        note: "AI-first support, product tours, in-app messaging",
        slug: "intercom",
      },
    ],
    total: "$1,098-1,548/month",
    keyIntegration:
      "HubSpot Professional to ActiveCampaign Pro: HubSpot handles your sales pipeline and attribution reporting while ActiveCampaign handles complex email automation and lead scoring. The CRM owns the deal; the email tool owns the nurture. This split avoids the $3,600/mo Marketing Hub Professional trap.",
    keyIntegrationLink: "/guides/hubspot-vs-activecampaign-full-comparison",
    whatToSkip: [
      "HubSpot Marketing Hub Professional ($800+/mo) -- ActiveCampaign Pro does 90% of it for $79/mo",
      "Salesforce -- unless you have 50+ sales reps, HubSpot Professional is cheaper and faster to implement",
      "Multiple point solutions -- consolidate where possible at this stage",
      "Custom-built internal tools -- buy before you build unless it is core IP",
    ],
  },
];

const faqItems = [
  {
    q: "Should I start with HubSpot or Pipedrive?",
    a: "Start with HubSpot Free CRM at pre-launch for the free tier. Switch to Pipedrive Essential ($14/seat/mo) post-launch when you need a visual pipeline focused on deal closing. Switch back to HubSpot Starter ($20/mo) when you need email sequences alongside CRM.",
  },
  {
    q: "When should I switch from beehiiv to Kit (or vice versa)?",
    a: "beehiiv for audience growth (referral programs, ad network, SEO). Kit for product businesses (automation sequences, commerce features, tagging). If your SaaS uses content marketing as the primary channel, start beehiiv. If you sell to an email list, Kit.",
  },
  {
    q: "Make or Zapier for a SaaS founder?",
    a: "Make at pre-launch and post-launch -- it is 3-5x cheaper. Zapier at the growth stage IF you need integrations Make does not support (Zapier has 7,000+ apps vs Make's 1,800+). At scale, Make Teams is cheaper again for high-volume automation.",
  },
  {
    q: "Do I really need ActiveCampaign AND HubSpot at scale?",
    a: "Yes. HubSpot Professional excels at CRM, pipeline reporting, and attribution. ActiveCampaign Pro excels at email automation, lead scoring, and behavioral triggers. Using both avoids paying $3,600/mo for HubSpot Marketing Hub Professional.",
  },
  {
    q: "When does PostHog replace Plausible?",
    a: "At the growth stage. Plausible is web analytics (pageviews, referrers, conversions). PostHog is product analytics (user behavior, funnels, session replays, feature flags). Switch when you ship your product and need to track what users do inside it.",
  },
  {
    q: "What is the single biggest waste of money for early SaaS founders?",
    a: "HubSpot Professional before you have 200 paying customers. The jump from $20/mo to $890/mo is the steepest cliff in SaaS tooling. Most features it unlocks are not useful until you have complex sales processes and a dedicated marketing team.",
  },
];

export default function SaasFounderToolStack() {
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
              SaaS Founder Tool Stack
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
            <span className="text-[11px] text-muted">22 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The SaaS Founder&apos;s Tool Stack: What to Use at Each Stage
          </h1>
          <p className="text-lg text-muted">
            Four stages. Four budgets. The exact tools, plans, and prices a SaaS
            founder needs from pre-launch waitlist to 1,000+ customers — with
            the single most important integration at each stage and what to skip
            so you stop wasting money.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Free and paid tiers across all tools at each stage"
          sourceCount={26}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Intro */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Why Stage Matters More Than Feature Lists
          </h2>
          <p className="text-muted mb-4">
            The biggest mistake SaaS founders make with tooling is buying for
            the company they want to be instead of the company they are. A
            pre-launch founder does not need HubSpot Professional. A founder
            with 500 paying customers should not be running their CRM on a
            spreadsheet. This guide matches tools to your stage.
          </p>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              The $9 pre-launch stack in one sentence
            </p>
            <p className="text-sm text-muted">
              beehiiv Launch (free) + HubSpot Free CRM + Notion Free + Cal.com
              Free + Plausible ($9/mo). Total: $9/month. Upgrade only when a
              limit blocks revenue.
            </p>
          </div>

          {/* Stage Sections */}
          {stages.map((stage, idx) => (
            <section key={stage.name} className="mb-14">
              <h2 className="text-xl font-bold mt-10 mb-2">
                Stage {idx + 1}: {stage.name}{" "}
                <span className={`text-base font-mono ${stage.color}`}>
                  ({stage.budget})
                </span>
              </h2>
              <p className="text-muted mb-4 text-sm italic">
                {stage.description}
              </p>

              {/* Tools table */}
              <div className="overflow-x-auto rounded-lg border border-border mb-4">
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
                        Category
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {stage.tools.map((t) => (
                      <tr key={t.name}>
                        <td className="px-4 py-2.5 font-medium text-foreground">
                          <Link
                            href={`/tools/${t.slug}`}
                            className="text-accent hover:underline"
                          >
                            {t.name}
                          </Link>
                        </td>
                        <td
                          className={`px-4 py-2.5 ${t.cost === "$0" ? "text-green-400" : ""}`}
                        >
                          {t.cost}
                        </td>
                        <td className="px-4 py-2.5 text-muted">
                          {t.category}
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
                        className={`px-4 py-2.5 font-bold ${stage.color}`}
                      >
                        {stage.total}
                      </td>
                      <td colSpan={2} className="px-4 py-2.5 text-muted text-xs">
                        All prices are monthly, billed monthly
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Key Integration */}
              <div className="border border-accent/30 bg-accent/5 rounded-xl p-4 mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                  Most Important Integration
                </p>
                <p className="text-sm text-muted">
                  {stage.keyIntegration}{" "}
                  <Link
                    href={stage.keyIntegrationLink}
                    className="text-accent hover:underline"
                  >
                    Setup guide →
                  </Link>
                </p>
              </div>

              {/* What to Skip */}
              <div className="border border-border rounded-xl p-4 bg-surface">
                <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
                  What to Skip at This Stage
                </p>
                <ul className="space-y-1.5">
                  {stage.whatToSkip.map((skip, i) => (
                    <li key={i} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">x</span>
                      {skip}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Common Mistakes SaaS Founders Make with Tooling
          </h2>
          <div className="space-y-3 text-sm text-muted mb-8">
            <p>
              <strong className="text-foreground">
                Buying HubSpot Professional at launch.
              </strong>{" "}
              The $890/mo price tag assumes you have a sales team, complex
              workflows, and attribution needs. Pre-launch, that money buys 100
              months of the entire $9 starter stack.{" "}
              <Link
                href="/guides/who-should-not-use-hubspot"
                className="text-accent hover:underline"
              >
                When to skip HubSpot →
              </Link>
            </p>
            <p>
              <strong className="text-foreground">
                Using Mailchimp for SaaS.
              </strong>{" "}
              Mailchimp is built for e-commerce and newsletters, not SaaS
              lifecycle emails. Its contact-based pricing punishes you for
              having free users, and its automation builder is shallow compared
              to Kit or ActiveCampaign.{" "}
              <Link
                href="/guides/who-should-not-use-mailchimp"
                className="text-accent hover:underline"
              >
                When to skip Mailchimp →
              </Link>
            </p>
            <p>
              <strong className="text-foreground">
                Over-automating before you have processes.
              </strong>{" "}
              You cannot automate a workflow that does not exist yet. Do things
              manually until you do them 20+ times, then automate. Premature
              automation creates brittle systems you spend more time fixing than
              they save.
            </p>
            <p>
              <strong className="text-foreground">
                Paying for Zapier when Make is cheaper.
              </strong>{" "}
              Make Core ($10.59/mo for 10K ops) does the same work as Zapier
              Professional ($29.99/mo for 2K tasks). At SaaS volume, this
              difference compounds.{" "}
              <Link
                href="/guides/automation-pricing-compared"
                className="text-accent hover:underline"
              >
                Pricing math →
              </Link>
            </p>
            <p>
              <strong className="text-foreground">
                Skipping product analytics.
              </strong>{" "}
              PostHog Free gives you 1M events/month with session replays and
              feature flags for $0. There is no reason not to add it the day you
              ship.{" "}
              <Link
                href="/guides/choosing-analytics-tool"
                className="text-accent hover:underline"
              >
                Analytics comparison →
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
            "beehiiv",
            "hubspot-crm",
            "convertkit",
            "pipedrive",
            "make",
            "zapier",
            "activecampaign",
            "posthog",
            "plausible",
            "notion",
            "clickup",
            "crisp",
            "cal-com",
            "intercom",
          ]}
          comparisons={[
            "beehiiv-vs-convertkit",
            "hubspot-crm-vs-pipedrive",
            "zapier-vs-make",
            "activecampaign-vs-mailchimp",
            "plausible-vs-posthog",
            "clickup-vs-asana",
            "calendly-vs-cal-com",
          ]}
          guides={[
            "best-tools-saas-startup",
            "best-free-tools-startups",
            "solo-founder-stack",
            "automate-lead-capture",
            "hubspot-pricing-reality",
            "automation-pricing-compared",
            "newsletter-stack",
            "choosing-analytics-tool",
            "email-automation-sequences-compared",
            "crm-solo-founder",
          ]}
        />
      </article>
    </>
  );
}
