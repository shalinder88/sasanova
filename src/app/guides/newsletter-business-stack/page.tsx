import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Build a Newsletter Business: Tools, Costs, and Revenue Math",
  description:
    "The newsletter business stack: beehiiv free to Scale ($49/mo), Carrd Pro Standard ($19/yr), Canva Free, Plausible Starter ($9/mo). Revenue projections at 1K, 5K, and 10K paid subscribers. Every price verified.",
  openGraph: {
    title: "Build a Newsletter Business: Tools, Costs, and Revenue Math",
    description:
      "Platform, website, design, and analytics for a newsletter business. Plus revenue math at every subscriber milestone.",
  },
};

const growthStages = [
  {
    stage: "Launch (0-2,500 subscribers)",
    color: "text-green-400",
    tools: [
      { name: "beehiiv Launch", cost: "$0", note: "2,500 subs, unlimited sends, custom domain" },
      { name: "Carrd Pro Standard", cost: "$1.58", note: "$19/yr for landing page with custom domain" },
      { name: "Canva Free", cost: "$0", note: "2M+ templates, basic design" },
      { name: "Plausible Starter", cost: "$9", note: "Website analytics, no cookie banner" },
    ],
    total: "$10.58/mo",
    revenue: "$0",
    note: "Focus: grow your list. Don't spend on tools until you have traction.",
  },
  {
    stage: "Growth (2,500-10,000 subscribers)",
    color: "text-amber-400",
    tools: [
      { name: "beehiiv Scale", cost: "$49", note: "Unlimited subs, referral program, ad network, A/B testing" },
      { name: "Carrd Pro Standard", cost: "$1.58", note: "Same landing page" },
      { name: "Canva Free", cost: "$0", note: "Still sufficient for most newsletters" },
      { name: "Plausible Starter", cost: "$9", note: "Same plan" },
    ],
    total: "$59.58/mo",
    revenue: "$250-$1,500/mo (ad network + Boosts)",
    note: "beehiiv's ad network and Boost program can cover the $49/mo Scale upgrade.",
  },
  {
    stage: "Monetization (10,000+ subscribers)",
    color: "text-purple-400",
    tools: [
      { name: "beehiiv Scale", cost: "$49", note: "Paid subscriptions, premium content" },
      { name: "Carrd Pro Standard", cost: "$1.58", note: "Landing page" },
      { name: "Canva Pro", cost: "$15", note: "140M+ premium assets, Brand Kit, 1TB storage" },
      { name: "Plausible Growth", cost: "$14", note: "3 sites, team members, shared links" },
    ],
    total: "$79.58/mo",
    revenue: "$2,000-$10,000+/mo (paid subs + ads + Boosts)",
    note: "Profit margin: 92-99% — newsletters are one of the highest-margin digital businesses.",
  },
];

const revenueProjections = [
  {
    subs: "1,000 paid ($5/mo)",
    adRevenue: "$200-$500/mo",
    subRevenue: "$5,000/mo",
    boosts: "$100-$300/mo",
    total: "$5,300-$5,800/mo",
    toolCost: "$59.58/mo",
    profit: "$5,240-$5,740/mo",
  },
  {
    subs: "5,000 paid ($5/mo)",
    adRevenue: "$1,000-$2,500/mo",
    subRevenue: "$25,000/mo",
    boosts: "$500-$1,500/mo",
    total: "$26,500-$29,000/mo",
    toolCost: "$79.58/mo",
    profit: "$26,420-$28,920/mo",
  },
  {
    subs: "10,000 paid ($5/mo)",
    adRevenue: "$2,000-$5,000/mo",
    subRevenue: "$50,000/mo",
    boosts: "$1,000-$3,000/mo",
    total: "$53,000-$58,000/mo",
    toolCost: "$79.58/mo",
    profit: "$52,920-$57,920/mo",
  },
];

export default function NewsletterBusinessStack() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Newsletter Business Stack</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Real-World Stack
            </span>
            <span className="text-[11px] text-muted">18 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Build a Newsletter Business: Tools, Costs, and Revenue Math
          </h1>
          <p className="text-lg text-muted">
            A newsletter business has four tool categories: platform, website, design, and analytics. That&apos;s it. Here&apos;s the exact stack at three growth stages with real revenue projections at 1K, 5K, and 10K paid subscribers.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="beehiiv, Carrd, Canva, and Plausible pricing verified against vendor pages"
          sourceCount={4}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Summary */}
          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              Start at $10.58/mo. Scale to $79.58/mo. Revenue potential: $50K+/mo at 10K paid subs.
            </p>
            <p className="text-sm text-muted">
              beehiiv Launch (free) + Carrd Pro Standard ($19/yr) + Canva Free + Plausible Starter ($9/mo). Upgrade beehiiv to Scale ($49/mo) when you pass 2,500 subscribers or want the ad network.
            </p>
          </div>

          {/* Growth Stages */}
          <h2 className="text-xl font-bold mt-10 mb-4">Your Stack at Three Growth Stages</h2>
          {growthStages.map((stage) => (
            <div key={stage.stage} className="mb-8">
              <h3 className="text-lg font-bold mb-2">
                <span className={stage.color}>{stage.stage}</span>
              </h3>
              <div className="overflow-x-auto rounded-lg border border-border mt-3">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Cost/mo</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {stage.tools.map((t) => (
                      <tr key={t.name}>
                        <td className="px-4 py-2.5 font-medium text-foreground">{t.name}</td>
                        <td className={`px-4 py-2.5 ${t.cost === "$0" ? "text-green-400" : ""}`}>{t.cost}</td>
                        <td className="px-4 py-2.5 text-muted">{t.note}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-surface-alt">
                      <td className="px-4 py-2.5 font-bold text-foreground">Total</td>
                      <td className={`px-4 py-2.5 font-bold ${stage.color}`}>{stage.total}</td>
                      <td className="px-4 py-2.5 text-muted text-xs">Est. revenue: {stage.revenue}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <p className="text-xs text-muted mt-2 italic">{stage.note}</p>
            </div>
          ))}

          {/* Revenue Projections */}
          <h2 className="text-xl font-bold mt-14 mb-4">Revenue Math: What a Newsletter Business Actually Makes</h2>
          <p className="text-muted mb-4 text-sm">
            Revenue comes from three sources on beehiiv Scale ($49/mo): paid subscriptions, the beehiiv ad network, and Boost recommendations. Here&apos;s the math at three milestones, assuming a $5/month subscription price:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-3 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Milestone</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Subscriptions</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Ads</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Boosts</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Net Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {revenueProjections.map((row) => (
                  <tr key={row.subs}>
                    <td className="px-4 py-2.5 font-medium text-foreground">{row.subs}</td>
                    <td className="px-4 py-2.5">{row.subRevenue}</td>
                    <td className="px-4 py-2.5">{row.adRevenue}</td>
                    <td className="px-4 py-2.5">{row.boosts}</td>
                    <td className="px-4 py-2.5 text-red-400">{row.toolCost}</td>
                    <td className="px-4 py-2.5 text-green-400 font-bold">{row.profit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mb-8 italic">
            Subscription revenue assumes $5/mo with ~5% monthly churn. Ad revenue varies by niche &mdash; B2B newsletters earn 3-5x more per subscriber than lifestyle content. Boost payouts depend on beehiiv&apos;s marketplace demand.
          </p>

          {/* beehiiv Free vs Scale */}
          <h2 className="text-xl font-bold mt-14 mb-4">beehiiv Launch (Free) vs Scale ($49/mo): When to Upgrade</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">Stay on Launch (free) when:</strong> You have fewer than 2,500 subscribers, don&apos;t need A/B testing, and aren&apos;t monetizing yet. Launch includes unlimited sends, custom domain, and a website builder.
            </p>
            <p>
              <strong className="text-foreground">Upgrade to Scale ($49/mo) when:</strong> You pass 2,500 subscribers, want the ad network and Boost referral program, need A/B testing for subject lines, or want to offer paid subscriptions. The ad network alone can cover the $49/mo cost at ~5,000+ subscribers.{" "}
              <Link href="/guides/when-beehiiv-scale-beats-launch" className="text-accent hover:underline">
                Detailed beehiiv upgrade math &rarr;
              </Link>
            </p>
            <p>
              <strong className="text-foreground">Consider Max ($109/mo) when:</strong> You need priority support, API access, advanced analytics, or the newsroom feature. Most newsletter businesses stay on Scale indefinitely.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why beehiiv over Substack or Kit?</h3>
              <p className="text-sm text-muted">
                Substack takes 10% of paid subscription revenue forever. beehiiv takes 0%. At 1,000 paid subscribers ($5/mo), that&apos;s $500/month you keep. Kit (ConvertKit) is great for email marketing but doesn&apos;t have a built-in ad network or referral program for newsletter monetization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why Carrd for a newsletter website?</h3>
              <p className="text-sm text-muted">
                beehiiv includes a built-in website, but Carrd Pro Standard ($19/year) gives you a dedicated landing page with custom design, forms, and Stripe payments. Use Carrd for your marketing page and beehiiv&apos;s site for your newsletter archive.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Do I need Canva Pro?</h3>
              <p className="text-sm text-muted">
                Not until you reach the monetization stage. Canva Free includes 2M+ templates and basic design tools. Pro ($15/mo, or $10/mo annual at $120/yr) adds 140M+ premium assets, Brand Kit, and background remover. Worth it when your newsletter design becomes part of your brand.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">What&apos;s the realistic timeline to profitability?</h3>
              <p className="text-sm text-muted">
                At $10.58/mo in tool costs, you&apos;re profitable from your first ad network payout or Boost recommendation. Most newsletter creators see their first beehiiv ad revenue at 1,000-2,000 free subscribers. The $49/mo Scale plan pays for itself at roughly 5,000 subscribers through ads alone.
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["beehiiv", "carrd", "canva", "plausible"]}
          comparisons={["beehiiv-vs-convertkit", "plausible-vs-posthog"]}
          guides={[
            "newsletter-stack",
            "when-beehiiv-scale-beats-launch",
            "best-email-tool-creators",
            "best-newsletter-paid-subscribers",
            "creator-toolkit",
          ]}
        />
      </article>
    </>
  );
}
