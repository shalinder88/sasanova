import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title:
    "How to Choose an Email Marketing Platform in 2026: A Decision Framework",
  description:
    "A structured decision framework for choosing the right email marketing platform. Decision trees, budget matrices, feature prioritization, and vendor pricing red flags.",
  openGraph: {
    title:
      "How to Choose an Email Marketing Platform in 2026: A Decision Framework",
    description:
      "Stop comparing 50 features. Answer 3 questions, follow the decision tree, and pick the right email platform in 15 minutes.",
  },
};

const budgetMatrix = [
  {
    tier: "$0/month",
    label: "Just Starting",
    color: "text-green-400",
    options: [
      {
        tool: "Kit Free",
        contacts: "Up to 10,000 subscribers",
        bestFor: "Creators who need landing pages + forms",
        limitation: "No automation sequences",
      },
      {
        tool: "beehiiv Launch",
        contacts: "Up to 2,500 subscribers",
        bestFor: "Newsletter-first creators wanting referral tools",
        limitation: "Limited customization, beehiiv branding",
      },
      {
        tool: "Brevo Free",
        contacts: "Unlimited contacts, 300 emails/day",
        bestFor: "Small businesses who send infrequently",
        limitation: "Daily send cap, Brevo branding",
      },
      {
        tool: "Mailchimp Free",
        contacts: "Up to 500 contacts",
        bestFor: "Almost nobody in 2026",
        limitation: "250 contacts was the limit, now 500 but still tiny",
      },
    ],
  },
  {
    tier: "~$50/month",
    label: "Growing Business",
    color: "text-amber-400",
    options: [
      {
        tool: "Kit Creator ($29/mo)",
        contacts: "Up to 1,000 subscribers",
        bestFor: "Creators needing automation sequences",
        limitation: "Price scales fast above 1K subs",
      },
      {
        tool: "beehiiv Scale ($39/mo)",
        contacts: "Up to 1,000 subscribers",
        bestFor: "Newsletter monetization (ads, paid subs, boosts)",
        limitation: "Limited automation compared to Kit",
      },
      {
        tool: "ActiveCampaign Starter ($15/mo)",
        contacts: "Up to 1,000 contacts",
        bestFor: "Marketing automation + basic CRM",
        limitation: "UI learning curve",
      },
      {
        tool: "Brevo Business ($18/mo)",
        contacts: "Unlimited contacts, 5,000 emails/mo",
        bestFor: "Transactional + marketing email in one",
        limitation: "Weaker automation builder",
      },
    ],
  },
  {
    tier: "~$200/month",
    label: "Scaling Operation",
    color: "text-purple-400",
    options: [
      {
        tool: "ActiveCampaign Plus ($49/mo for 1K)",
        contacts: "Scales to 25K+ contacts",
        bestFor: "Complex automation, lead scoring, CRM integration",
        limitation: "Per-contact cost adds up at scale",
      },
      {
        tool: "Klaviyo ($150/mo for 10K)",
        contacts: "10,000 profiles",
        bestFor: "E-commerce with revenue attribution",
        limitation: "Expensive outside e-commerce",
      },
      {
        tool: "Kit Creator ($100/mo for 10K)",
        contacts: "10,000 subscribers",
        bestFor: "Creators at scale with automation",
        limitation: "Limited reporting vs ActiveCampaign",
      },
      {
        tool: "Mailchimp Standard ($135/mo for 10K)",
        contacts: "10,000 contacts",
        bestFor: "Teams already embedded in Mailchimp",
        limitation: "Expensive for what you get in 2026",
      },
    ],
  },
];

const featuresThatMatter = [
  {
    feature: "Automation sequences",
    why: "Welcome series, abandoned cart, re-engagement sequences drive revenue on autopilot. If your platform gates this behind a paid tier, know the real cost.",
  },
  {
    feature: "Deliverability infrastructure",
    why: "Open rates vary 10-20% between platforms on the same list. Shared IP reputation, authentication setup (SPF/DKIM/DMARC), and bounce handling matter more than any feature.",
  },
  {
    feature: "Segmentation and tagging",
    why: "Sending the same email to everyone is a guaranteed way to tank engagement. Tag-based segmentation (Kit, ActiveCampaign) vs list-based (Mailchimp) changes your entire workflow.",
  },
  {
    feature: "Integration with your revenue tool",
    why: "Email connected to your CRM or e-commerce platform creates closed-loop reporting. Without it, you are guessing which emails drive revenue.",
  },
  {
    feature: "Migration path (import/export)",
    why: "Can you export your full subscriber list with tags and engagement history? Platforms that make leaving hard are telling you something about their confidence in retention.",
  },
];

const featuresThatDont = [
  "AI subject line generators",
  "500+ email templates",
  "Social media posting",
  "Website builder (unless it is your only site)",
  "Survey tools (use Tally or Typeform)",
  "SMS marketing (evaluate separately)",
  "Advanced A/B testing (you need 1,000+ opens per variant for significance)",
  "Custom HTML editor (unless you have a developer)",
  "Predictive send-time optimization",
  "Multi-language campaign management",
];

const pricingRedFlags = [
  {
    flag: "Contact counting across all lists",
    explanation:
      "Mailchimp counts the same person on 3 lists as 3 contacts. A 5,000-person list can show as 15,000 contacts. This is the single biggest hidden cost in email marketing.",
  },
  {
    flag: "Overage charges without warning",
    explanation:
      "Some platforms auto-upgrade your plan or charge overage fees when you exceed your contact limit. ActiveCampaign and Mailchimp both do this. Check the terms before your list grows past a tier boundary.",
  },
  {
    flag: "Feature gating on \"Premium\" or \"Enterprise\" tiers",
    explanation:
      "If the feature you need (like automation or A/B testing) is only on a plan that costs 5x more, the advertised starting price is irrelevant to you.",
  },
  {
    flag: "Annual-only pricing for the best rate",
    explanation:
      "A 20% discount for annual billing sounds good until you want to switch 4 months in. Calculate both monthly and annual costs, and remember: annual locks you in.",
  },
  {
    flag: "\"Unlimited\" with fair use clauses",
    explanation:
      "Unlimited contacts or sends often have fair use policies buried in terms of service. Brevo's unlimited contacts still cap daily sends. Read the asterisks.",
  },
];

export default function HowToChooseEmailPlatform() {
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
              How to Choose an Email Platform
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
            <span className="text-[11px] text-muted">18 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How to Choose an Email Marketing Platform in 2026: A Decision
            Framework
          </h1>
          <p className="text-lg text-muted">
            There are 50+ email marketing tools. You do not need to evaluate all
            of them. Answer three questions, follow the decision tree, and stop
            second-guessing. This guide gives you a structured way to decide —
            not a feature comparison.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Free and paid tiers across 8 platforms"
          sourceCount={18}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* The 3 Questions */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            The 3 Questions That Actually Matter
          </h2>
          <p className="text-muted mb-6">
            Before you open a single pricing page, answer these three questions.
            They eliminate 80% of options immediately.
          </p>

          <div className="space-y-4 mb-10">
            <div className="border border-accent/30 bg-accent/5 rounded-xl p-5">
              <p className="text-sm font-bold text-foreground mb-1">
                Question 1: What do you sell?
              </p>
              <p className="text-sm text-muted mb-2">
                Physical products (e-commerce), digital products/courses,
                services/consulting, or content (newsletter/media)?
              </p>
              <p className="text-xs text-muted">
                <strong className="text-foreground">Why it matters:</strong>{" "}
                E-commerce needs revenue attribution and cart abandonment
                (Klaviyo). Content creators need growth tools and monetization
                (beehiiv, Substack). Service businesses need CRM integration and
                automation (ActiveCampaign). The answer eliminates entire
                categories of tools.
              </p>
            </div>

            <div className="border border-accent/30 bg-accent/5 rounded-xl p-5">
              <p className="text-sm font-bold text-foreground mb-1">
                Question 2: How big is your list (or will be in 12 months)?
              </p>
              <p className="text-sm text-muted mb-2">
                Under 1,000 | 1,000-10,000 | 10,000-50,000 | 50,000+
              </p>
              <p className="text-xs text-muted">
                <strong className="text-foreground">Why it matters:</strong>{" "}
                Under 1,000 subscribers, almost everything is free. At
                10,000+, pricing differences between platforms become hundreds
                of dollars per month. Choose for the tier you will reach in 12
                months, not where you are today.
              </p>
            </div>

            <div className="border border-accent/30 bg-accent/5 rounded-xl p-5">
              <p className="text-sm font-bold text-foreground mb-1">
                Question 3: Do you need automation beyond basic welcome emails?
              </p>
              <p className="text-sm text-muted mb-2">
                No (just send newsletters) | Basic (welcome + a few sequences) |
                Advanced (branching logic, lead scoring, behavioral triggers)
              </p>
              <p className="text-xs text-muted">
                <strong className="text-foreground">Why it matters:</strong>{" "}
                If you just send newsletters, paying for ActiveCampaign is
                wasting money. If you need complex automation, beehiiv and
                Substack will frustrate you within months.
              </p>
            </div>
          </div>

          {/* Decision Tree */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The Decision Tree: Follow Your Path
          </h2>
          <p className="text-muted mb-6">
            Based on your answers above, follow the branch that matches your
            situation.
          </p>

          {/* Newsletter-first */}
          <div className="border border-border rounded-xl p-5 bg-surface mb-4">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5">📰</span>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">
                  Newsletter-First (Content is the product)
                </p>
                <p className="text-sm text-muted mb-3">
                  You monetize through ads, paid subscriptions, sponsorships, or
                  audience-building. Growth tools and reader experience matter
                  most.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">
                    <strong>Best pick:</strong>{" "}
                    <Link
                      href="/tools/beehiiv"
                      className="text-accent hover:underline"
                    >
                      beehiiv
                    </Link>{" "}
                    — Free to $39/mo. Built-in referral program, ad network,
                    paid subscriptions, and SEO-optimized web hosting.
                  </p>
                  <p className="text-foreground">
                    <strong>Alternative:</strong>{" "}
                    <Link
                      href="/tools/substack"
                      className="text-accent hover:underline"
                    >
                      Substack
                    </Link>{" "}
                    — Free but takes 10% of paid subscription revenue. Zero
                    setup friction, built-in discovery network. Best if you want
                    the simplest possible start.
                  </p>
                  <p className="text-muted text-xs mt-2">
                    Skip if: You need complex automation sequences or deep CRM
                    integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing-first */}
          <div className="border border-border rounded-xl p-5 bg-surface mb-4">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5">📈</span>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">
                  Marketing-First (Email drives your sales pipeline)
                </p>
                <p className="text-sm text-muted mb-3">
                  You sell services, SaaS, or courses. Email nurtures leads
                  through a funnel. Automation, segmentation, and CRM
                  integration matter most.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">
                    <strong>Best pick:</strong>{" "}
                    <Link
                      href="/tools/activecampaign"
                      className="text-accent hover:underline"
                    >
                      ActiveCampaign
                    </Link>{" "}
                    — From $15/mo. The best visual automation builder on the
                    market. Built-in CRM, lead scoring, and conditional logic
                    that actually works.
                  </p>
                  <p className="text-foreground">
                    <strong>Alternative:</strong>{" "}
                    <Link
                      href="/tools/brevo"
                      className="text-accent hover:underline"
                    >
                      Brevo
                    </Link>{" "}
                    — From $18/mo. Unlimited contacts (charges by emails sent).
                    Best value if you have a large list but send infrequently.
                    Also handles transactional email.
                  </p>
                  <p className="text-muted text-xs mt-2">
                    Skip if: You only send a weekly newsletter with no
                    automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* E-commerce */}
          <div className="border border-border rounded-xl p-5 bg-surface mb-4">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5">🛒</span>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">
                  E-Commerce (Revenue attribution is everything)
                </p>
                <p className="text-sm text-muted mb-3">
                  You sell physical or digital products. Cart abandonment,
                  product recommendations, and revenue-per-email tracking matter
                  most.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">
                    <strong>Best pick:</strong>{" "}
                    <Link
                      href="/tools/klaviyo"
                      className="text-accent hover:underline"
                    >
                      Klaviyo
                    </Link>{" "}
                    — Free up to 250 contacts, then from $20/mo. Purpose-built
                    for e-commerce with Shopify/WooCommerce integration, revenue
                    attribution, and pre-built flows for cart abandonment,
                    post-purchase, and win-back.
                  </p>
                  <p className="text-foreground">
                    <strong>Alternative:</strong>{" "}
                    <Link
                      href="/tools/mailchimp"
                      className="text-accent hover:underline"
                    >
                      Mailchimp
                    </Link>{" "}
                    — From $13/mo (Standard). Decent e-commerce integrations and
                    familiar interface. Still works if you are already using it,
                    but Klaviyo&apos;s revenue attribution is significantly
                    better.
                  </p>
                  <p className="text-muted text-xs mt-2">
                    Skip if: You do not sell products online. Klaviyo&apos;s
                    pricing makes no sense outside e-commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Creator/Hybrid */}
          <div className="border border-border rounded-xl p-5 bg-surface mb-8">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5">🎨</span>
              <div>
                <p className="text-sm font-bold text-foreground mb-1">
                  Creator/Hybrid (Content + products + courses)
                </p>
                <p className="text-sm text-muted mb-3">
                  You create content and sell digital products, courses, or
                  services. You need both newsletter tools and automation.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">
                    <strong>Best pick:</strong>{" "}
                    <Link
                      href="/tools/convertkit"
                      className="text-accent hover:underline"
                    >
                      Kit (ConvertKit)
                    </Link>{" "}
                    — Free up to 10,000 subscribers. Visual automation builder,
                    commerce tools (sell digital products directly), and
                    tag-based subscriber management designed for creators.
                  </p>
                  <p className="text-foreground">
                    <strong>Alternative:</strong>{" "}
                    <Link
                      href="/tools/activecampaign"
                      className="text-accent hover:underline"
                    >
                      ActiveCampaign
                    </Link>{" "}
                    — From $15/mo. Better automation depth than Kit, but no
                    built-in commerce. Best if your course/product sales happen
                    through a separate platform (Teachable, Gumroad).
                  </p>
                  <p className="text-muted text-xs mt-2">
                    Skip if: You are purely a newsletter operator with no
                    products — beehiiv is better for that.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Matrix */}
          <h2 className="text-xl font-bold mt-14 mb-6">
            Budget Matrix: What You Get at Each Price Point
          </h2>

          {budgetMatrix.map((tier) => (
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
                        Contacts/Subs
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Best For
                      </th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">
                        Key Limitation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {tier.options.map((opt) => (
                      <tr key={opt.tool}>
                        <td className="px-4 py-2.5 font-medium text-foreground whitespace-nowrap">
                          {opt.tool}
                        </td>
                        <td className="px-4 py-2.5 text-muted">
                          {opt.contacts}
                        </td>
                        <td className="px-4 py-2.5 text-muted">
                          {opt.bestFor}
                        </td>
                        <td className="px-4 py-2.5 text-muted">
                          {opt.limitation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Features That Matter */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The 5 Features That Actually Matter
          </h2>
          <p className="text-muted mb-6">
            When comparing platforms, focus your evaluation on these five
            capabilities. They determine whether a platform works for you in
            practice, not just in a demo.
          </p>

          <div className="space-y-4 mb-8">
            {featuresThatMatter.map((item, idx) => (
              <div
                key={item.feature}
                className="border border-border rounded-xl p-5 bg-surface"
              >
                <p className="text-sm font-bold text-foreground mb-1">
                  {idx + 1}. {item.feature}
                </p>
                <p className="text-sm text-muted">{item.why}</p>
              </div>
            ))}
          </div>

          {/* Features That Don't */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            The 10 Features That Sound Important But Rarely Are
          </h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8">
            <ul className="space-y-2">
              {featuresThatDont.map((feature) => (
                <li key={feature} className="text-sm text-muted flex gap-2">
                  <span className="text-muted/50 shrink-0">-</span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted mt-4 border-t border-border pt-3">
              These features show up on comparison charts and demo calls. They
              rarely influence whether your email marketing succeeds or fails.
              Do not let them drive your decision.
            </p>
          </div>

          {/* Pricing Red Flags */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Red Flags on Vendor Pricing Pages
          </h2>
          <p className="text-muted mb-6">
            Every email platform is incentivized to make pricing look lower than
            what you will actually pay. Watch for these patterns.
          </p>

          <div className="space-y-4 mb-8">
            {pricingRedFlags.map((item) => (
              <div
                key={item.flag}
                className="border border-red-500/20 bg-red-500/5 rounded-xl p-5"
              >
                <p className="text-sm font-bold text-foreground mb-1">
                  {item.flag}
                </p>
                <p className="text-sm text-muted">{item.explanation}</p>
              </div>
            ))}
          </div>

          {/* Decision Shortcut */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Stop Evaluating and Just Pick
          </h2>
          <p className="text-muted mb-6">
            If you have been comparing tools for more than a week, you are
            overthinking it. Here is the shortcut.
          </p>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-6 mb-8">
            <div className="space-y-3 text-sm">
              <p className="text-foreground">
                <strong>Newsletter creator under 2,500 subscribers?</strong>{" "}
                Start with{" "}
                <Link
                  href="/tools/beehiiv"
                  className="text-accent hover:underline"
                >
                  beehiiv Launch (free)
                </Link>
                .
              </p>
              <p className="text-foreground">
                <strong>Creator selling products under 10,000 subs?</strong>{" "}
                Start with{" "}
                <Link
                  href="/tools/convertkit"
                  className="text-accent hover:underline"
                >
                  Kit Free
                </Link>
                .
              </p>
              <p className="text-foreground">
                <strong>Business that needs automation?</strong> Start with{" "}
                <Link
                  href="/tools/activecampaign"
                  className="text-accent hover:underline"
                >
                  ActiveCampaign Starter ($15/mo)
                </Link>
                .
              </p>
              <p className="text-foreground">
                <strong>E-commerce store?</strong> Start with{" "}
                <Link
                  href="/tools/klaviyo"
                  className="text-accent hover:underline"
                >
                  Klaviyo (free up to 250 contacts)
                </Link>
                .
              </p>
              <p className="text-foreground">
                <strong>Genuinely unsure?</strong> Start with{" "}
                <Link
                  href="/tools/convertkit"
                  className="text-accent hover:underline"
                >
                  Kit Free
                </Link>
                . It has the most generous free tier (10,000 subscribers), works
                for both newsletters and product sales, and exporting your list
                later is straightforward.
              </p>
            </div>
            <p className="text-xs text-muted mt-4 border-t border-border pt-3">
              You can switch later. Every platform on this list supports CSV
              export. The cost of starting wrong is 2-4 hours of migration, not
              a permanent commitment.
            </p>
          </div>

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold mt-14 mb-4">Common Mistakes</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">
                Choosing based on current list size.
              </strong>{" "}
              Your list will grow. A platform that is cheap at 500 contacts may
              be the most expensive at 10,000. Model the cost at 12 months out,
              not today.
            </p>
            <p>
              <strong className="text-foreground">
                Paying for automation you will not build.
              </strong>{" "}
              If you do not have time to build sequences, a simple newsletter
              tool (beehiiv, Substack) at $0 beats an automation platform at
              $50/month sitting unused.
            </p>
            <p>
              <strong className="text-foreground">
                Ignoring deliverability.
              </strong>{" "}
              A tool with a 95% inbox rate is worth 2x a tool with 85%. No
              feature list compensates for emails landing in spam. Check{" "}
              <Link
                href="/guides/email-deliverability-compared"
                className="text-accent hover:underline"
              >
                our deliverability comparison
              </Link>
              .
            </p>
            <p>
              <strong className="text-foreground">
                Defaulting to Mailchimp because it is familiar.
              </strong>{" "}
              Mailchimp was the default in 2018. In 2026, its free tier is the
              smallest (500 contacts), its pricing scales aggressively, and
              better alternatives exist for every use case. Check{" "}
              <Link
                href="/guides/who-should-not-use-mailchimp"
                className="text-accent hover:underline"
              >
                who should not use Mailchimp
              </Link>
              .
            </p>
            <p>
              <strong className="text-foreground">
                Comparing 50 features on a spreadsheet.
              </strong>{" "}
              More data does not make a better decision. Five features matter.
              The rest is noise that delays action.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-8">
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Can I switch email platforms later without losing subscribers?
              </p>
              <p className="text-sm text-muted">
                Yes. Every major platform supports CSV export. You will lose
                automation sequences (you rebuild those manually) and engagement
                history (open/click data does not transfer). The actual
                migration takes 2-4 hours for most lists. See our{" "}
                <Link
                  href="/guides/migrate-from-mailchimp"
                  className="text-accent hover:underline"
                >
                  migration guides
                </Link>
                .
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Is it worth paying for email marketing under 1,000 subscribers?
              </p>
              <p className="text-sm text-muted">
                Usually no. Kit Free supports 10,000 subscribers. beehiiv
                Launch is free up to 2,500. Start on a free tier and upgrade
                only when you hit a feature limitation (usually automation) that
                is costing you revenue.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Should I use the same tool for newsletters and marketing
                automation?
              </p>
              <p className="text-sm text-muted">
                It depends. Kit and ActiveCampaign handle both well.
                beehiiv is excellent for newsletters but limited on automation.
                If you need advanced automation AND a newsletter, consider Kit
                Creator ($29/mo) as the single-platform option, or beehiiv +
                ActiveCampaign if budget allows.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                What about HubSpot Marketing Hub for email?
              </p>
              <p className="text-sm text-muted">
                HubSpot&apos;s email marketing is solid but expensive.
                The free tier is limited to 2,000 emails/month. Professional
                starts at $890/month. Only consider HubSpot if you are already
                using HubSpot CRM and need everything in one ecosystem. See{" "}
                <Link
                  href="/guides/hubspot-pricing-reality"
                  className="text-accent hover:underline"
                >
                  HubSpot pricing reality
                </Link>
                .
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Substack or beehiiv for a paid newsletter?
              </p>
              <p className="text-sm text-muted">
                Substack takes 10% of revenue + Stripe fees. beehiiv Scale
                ($39/mo) charges a flat fee with no revenue share. At $500/month
                in subscription revenue, beehiiv is cheaper. Below that,
                Substack&apos;s zero upfront cost wins. See{" "}
                <Link
                  href="/guides/migrate-substack-to-beehiiv"
                  className="text-accent hover:underline"
                >
                  Substack to beehiiv migration guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={[
            "beehiiv",
            "convertkit",
            "activecampaign",
            "mailchimp",
            "brevo",
            "klaviyo",
            "substack",
          ]}
          comparisons={[
            "beehiiv-vs-convertkit",
            "mailchimp-vs-activecampaign",
            "beehiiv-vs-substack",
          ]}
          guides={[
            "best-email-tool-creators",
            "best-email-tool-ecommerce",
            "email-deliverability-compared",
            "email-marketing-annual-cost-2026",
            "best-free-email-tool-2026",
            "migrate-from-mailchimp",
            "email-marketing-faq",
            "how-to-choose-crm",
            "how-to-choose-automation-tool",
            "how-much-should-software-cost",
          ]}
        />
      </article>
    </>
  );
}
