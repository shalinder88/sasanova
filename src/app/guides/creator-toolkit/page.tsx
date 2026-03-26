import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title:
    "The Creator's Complete Software Toolkit: Every Tool You Need in 2026",
  description:
    "Newsletter platforms, design tools, scheduling, automation, analytics, and monetization — the full creator software stack at $0, $100, and $300/month with links to every comparison and guide.",
  openGraph: {
    title:
      "The Creator's Complete Software Toolkit: Every Tool You Need in 2026",
    description:
      "Newsletter platforms, design tools, scheduling, automation, analytics, and monetization — the full creator stack at three price tiers.",
  },
};

const categories = [
  {
    icon: "📧",
    name: "Newsletter & Email",
    why: "Your newsletter is the asset you own. Social media algorithms change; your email list stays.",
    recommended: "beehiiv",
    recommendedSlug: "beehiiv",
    monthly: "$0 – $39",
    toolPage: "/tools/beehiiv",
    comparison: "/compare/beehiiv-vs-substack",
    comparisonLabel: "beehiiv vs Substack",
    guides: [
      {
        href: "/guides/best-email-tool-creators",
        label: "Best Email Platform for Creators",
      },
      {
        href: "/guides/best-email-tool-creators",
        label: "Best Email Platform for Creators",
      },
      {
        href: "/compare/beehiiv-vs-convertkit",
        label: "beehiiv vs Kit Comparison",
      },
      {
        href: "/guides/migrate-substack-to-beehiiv",
        label: "Migrate from Substack to beehiiv",
      },
      {
        href: "/guides/migrate-mailchimp-to-beehiiv",
        label: "Migrate from Mailchimp to beehiiv",
      },
      {
        href: "/guides/beehiiv-setup-guide",
        label: "beehiiv Setup Guide",
      },
    ],
    decision:
      "Start with beehiiv Launch (free, 2,500 subscribers). If you need advanced automation sequences, Kit is a better fit. If you want built-in network discovery and simplicity above all, Substack works — but you give up 10% of paid subscriber revenue.",
  },
  {
    icon: "🎨",
    name: "Design",
    why: "Thumbnails, social graphics, and brand assets. You don't need to be a designer — you need the right tool.",
    recommended: "Canva",
    recommendedSlug: "canva",
    monthly: "$0 – $15",
    toolPage: "/tools/canva",
    comparison: "/compare/figma-vs-canva",
    comparisonLabel: "Canva vs Figma",
    guides: [
      {
        href: "/guides/design-tools-non-designers",
        label: "Design Tools for Non-Designers",
      },
    ],
    decision:
      "Canva Free handles 90% of creator design needs: social posts, thumbnails, carousels. Upgrade to Canva Pro ($15/mo) for brand kit, background remover, and content planner. Only consider Figma if you are designing actual UI/product interfaces.",
  },
  {
    icon: "📅",
    name: "Scheduling & Booking",
    why: "Paid consultations, coaching calls, and podcast guest booking. Stop the back-and-forth.",
    recommended: "Cal.com",
    recommendedSlug: "cal-com",
    monthly: "$0",
    toolPage: "/tools/cal-com",
    comparison: "/compare/calendly-vs-cal-com",
    comparisonLabel: "Calendly vs Cal.com",
    guides: [
      {
        href: "/guides/scheduling-tool-comparison",
        label: "Calendly vs Cal.com Deep Dive",
      },
    ],
    decision:
      "Cal.com is free and open source with most features Calendly charges $16/seat/month for. Use Cal.com unless you specifically need Calendly's Salesforce integration or routing forms for large teams.",
  },
  {
    icon: "⚡",
    name: "Automation",
    why: "New subscriber notifications, social cross-posting, CRM updates — automate the repetitive work so you can create.",
    recommended: "Make",
    recommendedSlug: "make",
    monthly: "$0 – $10.59",
    toolPage: "/tools/make",
    comparison: "/compare/zapier-vs-make",
    comparisonLabel: "Zapier vs Make",
    guides: [
      {
        href: "/guides/automation-zapier-vs-make-vs-n8n",
        label: "Zapier vs Make vs n8n Guide",
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
        href: "/guides/make-setup-guide",
        label: "Make Setup Guide",
      },
      {
        href: "/guides/zapier-setup-guide",
        label: "Zapier Setup Guide",
      },
    ],
    decision:
      "Make gives you 1,000 operations/month free — enough for basic automations. At scale, Make Core ($10.59/mo for 10K ops) costs a fraction of Zapier Professional ($29.99/mo for 750 tasks). Choose Zapier only if you need a specific integration Make doesn't have.",
  },
  {
    icon: "📊",
    name: "Analytics",
    why: "Know which content drives subscribers and revenue. Skip vanity metrics.",
    recommended: "Plausible",
    recommendedSlug: "plausible",
    monthly: "$9",
    toolPage: "/tools/plausible",
    comparison: "/compare/plausible-vs-posthog",
    comparisonLabel: "Plausible vs PostHog",
    guides: [
      {
        href: "/guides/choosing-analytics-tool",
        label: "How to Choose an Analytics Tool",
      },
    ],
    decision:
      "Plausible is privacy-first, lightweight (sub-1KB script), and needs no cookie banner. At $9/month, it covers everything a creator needs for web analytics. If you also want session replays and product analytics, PostHog Free (1M events/month) is the better choice.",
  },
  {
    icon: "💰",
    name: "Monetization",
    why: "Paid newsletters, digital products, and sponsorships. The point of the whole stack.",
    recommended: "beehiiv + Gumroad",
    recommendedSlug: "beehiiv",
    monthly: "$0 – $49",
    toolPage: "/tools/beehiiv",
    comparison: "/compare/gumroad-vs-lemonsqueezy",
    comparisonLabel: "Gumroad vs Lemon Squeezy",
    guides: [
      {
        href: "/guides/best-newsletter-paid-subscribers",
        label: "Building a Paid Newsletter",
      },
      {
        href: "/guides/ecommerce-stack-solo-creator",
        label: "E-commerce Stack for Solo Creators",
      },
    ],
    decision:
      "beehiiv handles paid subscriptions with no revenue share (Stripe fees only). For digital products (courses, templates, ebooks), Lemon Squeezy charges 5% vs Gumroad's 10%. Use beehiiv for recurring newsletter revenue and Lemon Squeezy for one-time product sales.",
  },
];

const priceTiers = [
  {
    tier: "$0/month",
    label: "Just Starting",
    color: "text-green-400",
    tools: [
      { name: "beehiiv Launch", cost: "$0", note: "2,500 subscribers" },
      { name: "Canva Free", cost: "$0", note: "250K+ templates" },
      { name: "Cal.com Free", cost: "$0", note: "Unlimited event types" },
      { name: "Make Free", cost: "$0", note: "1,000 ops/month" },
      { name: "PostHog Free", cost: "$0", note: "1M events/month" },
      { name: "Gumroad", cost: "$0", note: "10% per transaction" },
    ],
    total: "$0/month",
    note: "Pay transaction fees only when you earn",
  },
  {
    tier: "$100/month",
    label: "Growing (1K–10K subscribers)",
    color: "text-amber-400",
    tools: [
      { name: "beehiiv Scale", cost: "$39", note: "Custom domain, analytics" },
      { name: "Canva Pro", cost: "$15", note: "Brand kit, BG remover" },
      { name: "Cal.com Free", cost: "$0", note: "Still free" },
      { name: "Make Core", cost: "$10.59", note: "10K ops/month" },
      { name: "Plausible", cost: "$9", note: "10K monthly pageviews" },
      {
        name: "Lemon Squeezy",
        cost: "$0",
        note: "5% + Stripe fees per sale",
      },
    ],
    total: "$73.59/month",
    note: "Room for $26 in additional tools or upgrades",
  },
  {
    tier: "$300/month",
    label: "Established (10K–50K subscribers)",
    color: "text-purple-400",
    tools: [
      { name: "beehiiv Max", cost: "$99", note: "Priority support, AI" },
      { name: "Canva Teams", cost: "$30", note: "5 people, brand controls" },
      { name: "Cal.com Team", cost: "$20", note: "Team scheduling" },
      { name: "Make Pro", cost: "$18.82", note: "40K ops/month" },
      { name: "Plausible Growth", cost: "$19", note: "100K pageviews" },
      {
        name: "Lemon Squeezy",
        cost: "$0",
        note: "5% + Stripe fees per sale",
      },
      {
        name: "Kit Creator Pro",
        cost: "$59",
        note: "Advanced automation + commerce",
      },
    ],
    total: "$245.82/month",
    note: "Full-featured stack with room for experiments",
  },
];

export default function CreatorToolkitHub() {
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
              Creator Toolkit
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
            The Creator&apos;s Complete Software Toolkit: Every Tool You Need in
            2026
          </h1>
          <p className="text-lg text-muted">
            Six categories. One decision per category. A full software stack from
            $0 to $300/month that scales from your first subscriber to 50,000.
            Every recommendation links to a detailed comparison, pricing
            breakdown, and setup guide on Sasanova.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Free and paid tiers across all tools"
          sourceCount={18}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Decision Flow Overview */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            How This Guide Works
          </h2>
          <p className="text-muted mb-4">
            This is not a list of tools. It&apos;s a decision surface. For each
            category you need as a creator, we give you:
          </p>
          <ol className="text-muted mb-6 space-y-1 list-decimal list-inside">
            <li>
              <strong className="text-foreground">The recommended tool</strong>{" "}
              and what it costs
            </li>
            <li>
              <strong className="text-foreground">When to pick something else</strong>{" "}
              with a link to the full comparison
            </li>
            <li>
              <strong className="text-foreground">
                Setup guides and migration paths
              </strong>{" "}
              if you&apos;re switching
            </li>
            <li>
              <strong className="text-foreground">Total stack cost</strong> at
              three budget tiers
            </li>
          </ol>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              Quick decision
            </p>
            <p className="text-sm text-muted">
              If you want a single answer: beehiiv (free) + Canva (free) +
              Cal.com (free) + Make (free) + PostHog (free). Total cost: $0/month. Upgrade
              individual tools only when you hit their free tier limits.
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
                      Recommended
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {cat.recommended}
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
                    Tool Page →
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
                    Related Guides
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
          <p className="text-muted mb-6">
            Every tool is linked to its Sasanova page where you can check
            current pricing, read the full review, and see alternatives.
          </p>

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

          {/* Decision Tree Summary */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The Decision Tree
          </h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">
                Just launched, no revenue yet?
              </strong>{" "}
              → Use the $0 tier. Every tool here has a genuine free plan.
            </p>
            <p>
              <strong className="text-foreground">
                Getting traction (1K–10K subscribers)?
              </strong>{" "}
              → Upgrade beehiiv to Scale ($39/mo) and add Canva Pro ($15/mo).
              Keep everything else free.
            </p>
            <p>
              <strong className="text-foreground">
                Established (10K+ subscribers)?
              </strong>{" "}
              → The $300 tier gives you premium features across the board. Consider adding Kit Creator Pro alongside beehiiv if you sell courses or digital products.
            </p>
            <p>
              <strong className="text-foreground">
                Switching from another stack?
              </strong>{" "}
              → Check our migration guides:{" "}
              <Link
                href="/guides/migrate-substack-to-beehiiv"
                className="text-accent hover:underline"
              >
                Substack → beehiiv
              </Link>
              ,{" "}
              <Link
                href="/guides/migrate-mailchimp-to-beehiiv"
                className="text-accent hover:underline"
              >
                Mailchimp → beehiiv
              </Link>
              ,{" "}
              <Link
                href="/guides/switch-from-kit-to-beehiiv"
                className="text-accent hover:underline"
              >
                Kit → beehiiv
              </Link>
              ,{" "}
              <Link
                href="/guides/migrate-zapier-to-make"
                className="text-accent hover:underline"
              >
                Zapier → Make
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={[
            "beehiiv",
            "canva",
            "cal-com",
            "make",
            "plausible",
            "posthog",
            "convertkit",
            "substack",
            "zapier",
            "figma",
            "calendly",
            "gumroad",
            "lemonsqueezy",
          ]}
          comparisons={[
            "beehiiv-vs-substack",
            "beehiiv-vs-convertkit",
            "figma-vs-canva",
            "calendly-vs-cal-com",
            "zapier-vs-make",
            "plausible-vs-posthog",
            "gumroad-vs-lemonsqueezy",
          ]}
          guides={[
            "newsletter-stack",
            "best-email-tool-creators",
            "best-automation-tool-solopreneurs",
            "scheduling-tool-comparison",
            "choosing-analytics-tool",
            "best-newsletter-paid-subscribers",
            "ecommerce-stack-solo-creator",
            "design-tools-non-designers",
            "best-free-tools-startups",
          ]}
        />
      </article>
    </>
  );
}
