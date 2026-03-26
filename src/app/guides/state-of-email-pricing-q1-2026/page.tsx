import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "State of Email Marketing Pricing, Q1 2026 — Quarterly Report",
  description:
    "Which email platforms raised prices, which held steady, and which offer the best value at every subscriber tier from 1K to 100K. Price transparency rankings, biggest changes, and predictions for Q2 2026.",
};

export default function StateOfEmailPricingQ12026Page() {
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
            <Link href="/guides" className="hover:text-accent transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              State of Email Marketing Pricing, Q1 2026
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Quarterly Pricing Report
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            State of Email Marketing Pricing, Q1 2026
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Every quarter, we audit the pricing pages of every major email marketing
            platform and document what changed. This report covers January through March
            2026 &mdash; price increases, free tier changes, best-value picks at every
            subscriber tier, and where the market is heading.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>20 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Published March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Q1 2026 Edition</span>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4 mt-6">
            <p className="text-xs text-muted">
              <strong className="text-foreground">Methodology:</strong> All pricing
              data was collected directly from vendor pricing pages between March 10&ndash;20,
              2026. Where plans offer monthly and annual billing, we report monthly billing
              rates unless noted. Prices are in USD. &ldquo;Free tier&rdquo; means no credit
              card required. Historical pricing changes are sourced from Sasanova&apos;s
              archived snapshots, vendor blog announcements, and documented community reports.
            </p>
          </div>
          <div className="rounded-lg border border-accent/30 bg-accent-light p-4 mt-4">
            <p className="text-xs text-foreground">
              <strong>Source citation:</strong> Pricing verified from vendor pages, March 2026.
              If you cite this report, link to{" "}
              <strong>sasanova.com/guides/state-of-email-pricing-q1-2026</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Key Takeaways */}
          <section>
            <h2 className="text-xl font-bold mb-3">Key Takeaways</h2>
            <div className="rounded-lg border border-border bg-surface p-5">
              <ul className="text-sm text-muted space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">Mailchimp continued tightening its free tier</strong> &mdash; the free plan now covers just 250 contacts (down from 500 in early 2025 and 2,000 in 2019). Paid plans saw no list-price increase this quarter, but the practical cost of using Mailchimp rose as lower-tier features were further gated.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">Kit and ActiveCampaign held pricing steady</strong> through Q1. Kit&apos;s Creator plan remains $29/mo at 1K subscribers. ActiveCampaign&apos;s Starter remains $15/mo for 1K contacts.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">Ghost restructured pricing significantly</strong> &mdash; from $9/$25/$50 tiers to $15/$29/$199. The entry point nearly doubled and the top tier quadrupled, pricing out many small publishers.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">beehiiv remains the cheapest verified option</strong> at every tier above 2,500 subscribers when accounting for features included in the base price.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold shrink-0">&bull;</span>
                  <span><strong className="text-foreground">Mailchimp is the most expensive per-subscriber at scale</strong> &mdash; at 100K contacts, Mailchimp Standard costs roughly 4&ndash;7x more than beehiiv or Brevo.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Who Raised Prices */}
          <section>
            <h2 className="text-xl font-bold mb-3">Platforms That Raised Prices or Tightened Tiers</h2>

            <div className="space-y-4">
              <div className="border-l-2 border-red-400/60 pl-5">
                <p className="text-sm font-semibold text-foreground mb-1">Mailchimp</p>
                <p className="text-sm text-muted leading-relaxed">
                  No headline price increase in Q1 2026, but the free tier continued shrinking.
                  The 250-contact free plan is now functionally a trial &mdash; it lacks automations,
                  A/B testing, and custom send-time optimization. Mailchimp also tightened the
                  Essentials plan by removing some segmentation features that were previously included,
                  pushing users toward the $20+/mo Standard tier earlier in their growth.
                </p>
              </div>

              <div className="border-l-2 border-red-400/60 pl-5">
                <p className="text-sm font-semibold text-foreground mb-1">Ghost</p>
                <p className="text-sm text-muted leading-relaxed">
                  The biggest pricing change in email this quarter. Ghost restructured from its
                  longstanding $9/$25/$50 tier system to $15/$29/$199. The Starter plan went from
                  $9 to $15/mo (67% increase). The Creator plan moved from $25 to $29/mo (modest).
                  The Business plan jumped from $50 to $199/mo (298% increase). Ghost remains a
                  strong choice for independent publishers, but the new Business tier prices out
                  most small teams who previously used it for membership sites.
                </p>
              </div>
            </div>
          </section>

          {/* Who Held Steady */}
          <section>
            <h2 className="text-xl font-bold mb-3">Platforms That Held Pricing Steady</h2>

            <div className="space-y-4">
              <div className="border-l-2 border-green-400/60 pl-5">
                <p className="text-sm font-semibold text-foreground mb-1">Kit (ConvertKit)</p>
                <p className="text-sm text-muted leading-relaxed">
                  No pricing changes in Q1 2026. Free plan still supports up to 10,000 subscribers
                  (with limited features). Creator remains $29/mo at 1K, Creator Pro at $59/mo at 1K.
                  Kit has been the most pricing-stable platform in this category for the past 18 months.
                </p>
              </div>

              <div className="border-l-2 border-green-400/60 pl-5">
                <p className="text-sm font-semibold text-foreground mb-1">ActiveCampaign</p>
                <p className="text-sm text-muted leading-relaxed">
                  No changes. Starter $15/mo (1K contacts), Plus $49/mo, Professional $79/mo,
                  Enterprise $145/mo. ActiveCampaign has not changed list prices since mid-2025.
                </p>
              </div>

              <div className="border-l-2 border-green-400/60 pl-5">
                <p className="text-sm font-semibold text-foreground mb-1">beehiiv</p>
                <p className="text-sm text-muted leading-relaxed">
                  No changes. Free (2,500 subscribers), Scale $42/mo, Max $84/mo, Enterprise custom.
                  beehiiv&apos;s pricing has been stable since launch, with the free tier remaining
                  the most generous in the newsletter category.
                </p>
              </div>

              <div className="border-l-2 border-green-400/60 pl-5">
                <p className="text-sm font-semibold text-foreground mb-1">Brevo</p>
                <p className="text-sm text-muted leading-relaxed">
                  No changes. Free (300 emails/day), Starter $25/mo (20K emails/mo), Business
                  $65/mo (unlimited contacts). Brevo&apos;s email-based pricing model continues
                  to make it the cost leader at high contact counts.
                </p>
              </div>
            </div>
          </section>

          {/* Best Value Table */}
          <section>
            <h2 className="text-xl font-bold mb-4">Best Value at Each Subscriber Tier</h2>
            <p className="text-muted leading-relaxed mb-4">
              Monthly cost of the cheapest plan that supports the stated subscriber count with
              standard email marketing features (automations, segmentation, analytics). Monthly
              billing rates. Verified March 2026.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Kit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Brevo</th>
                    <th className="px-4 py-2.5 font-semibold text-accent">Best Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">1,000</td>
                    <td className="px-4 py-2.5 text-muted">$13/mo</td>
                    <td className="px-4 py-2.5 text-muted">$29/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo</td>
                    <td className="px-4 py-2.5 text-muted">Free*</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">beehiiv / Brevo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-4 py-2.5 text-muted">$75/mo</td>
                    <td className="px-4 py-2.5 text-muted">$79/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$42/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$25/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Brevo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-4 py-2.5 text-muted">$110/mo</td>
                    <td className="px-4 py-2.5 text-muted">$100/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$42/mo</td>
                    <td className="px-4 py-2.5 text-muted">$79/mo</td>
                    <td className="px-4 py-2.5 text-muted">$25/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Brevo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                    <td className="px-4 py-2.5 text-muted">$260/mo</td>
                    <td className="px-4 py-2.5 text-muted">$166/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$84/mo</td>
                    <td className="px-4 py-2.5 text-muted">$145/mo</td>
                    <td className="px-4 py-2.5 text-muted">$65/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Brevo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-4 py-2.5 text-muted">$385/mo</td>
                    <td className="px-4 py-2.5 text-muted">$266/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$84/mo</td>
                    <td className="px-4 py-2.5 text-muted">$209/mo</td>
                    <td className="px-4 py-2.5 text-muted">$65/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Brevo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">100,000</td>
                    <td className="px-4 py-2.5 text-muted">$775/mo</td>
                    <td className="px-4 py-2.5 text-muted">$466/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$159/mo</td>
                    <td className="px-4 py-2.5 text-muted">$375/mo</td>
                    <td className="px-4 py-2.5 text-muted">$115/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Brevo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              *Brevo Free limits to 300 emails/day with Brevo branding. Brevo&apos;s paid plans charge
              by email volume, not contacts &mdash; a critical advantage at scale. beehiiv caps
              subscribers per tier but includes growth tools (referrals, ad network) that can offset
              cost. Mailchimp remains the most expensive per-contact at every tier above 5K.
            </p>
          </section>

          {/* Price Transparency Ranking */}
          <section>
            <h2 className="text-xl font-bold mb-4">Price Transparency Ranking</h2>
            <p className="text-muted leading-relaxed mb-4">
              How easy is it to find the actual price you&apos;ll pay? We rank each platform
              on whether all plan prices are publicly listed, whether enterprise pricing
              requires a sales call, and whether overage fees are clearly documented.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Rank</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">All Plans Public?</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Overage Fees Documented?</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Transparency Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">1</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">Yes (all tiers listed)</td>
                    <td className="px-4 py-2.5 text-muted">Yes (pauses new subs at cap)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">A</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">2</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit</td>
                    <td className="px-4 py-2.5 text-muted">Yes (slider for all tiers)</td>
                    <td className="px-4 py-2.5 text-muted">Partial (grace period, then auto-upgrade)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">A&minus;</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">3</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                    <td className="px-4 py-2.5 text-muted">Yes (all tiers listed)</td>
                    <td className="px-4 py-2.5 text-muted">Yes (stops sending at limit)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">A&minus;</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">4</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td>
                    <td className="px-4 py-2.5 text-muted">Mostly (Enterprise requires contact)</td>
                    <td className="px-4 py-2.5 text-muted">Partial (auto-upgrades without clear docs)</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">B</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">Yes (but confusing tier structure)</td>
                    <td className="px-4 py-2.5 text-muted">No (auto-upgrades without confirmation)</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">B&minus;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              beehiiv earns the top spot for transparent pricing with no surprise charges: when you
              hit the cap, new subscribers pause rather than triggering an auto-upgrade. Mailchimp
              ranks last because its auto-upgrade on contact overages has been the single largest
              source of unexpected billing complaints in our research.
            </p>
          </section>

          {/* Biggest Change Deep Dive */}
          <section>
            <h2 className="text-xl font-bold mb-3">Biggest Pricing Change: Ghost&apos;s Restructure</h2>
            <p className="text-muted leading-relaxed mb-4">
              Ghost&apos;s move from $9/$25/$50 to $15/$29/$199 is the most significant email
              platform pricing change in Q1 2026. Here is the breakdown:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Old Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">New Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo</td>
                    <td className="px-4 py-2.5 text-red-400 font-semibold">+67%</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Creator</td>
                    <td className="px-4 py-2.5 text-muted">$25/mo</td>
                    <td className="px-4 py-2.5 text-muted">$29/mo</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">+16%</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                    <td className="px-4 py-2.5 text-muted">$50/mo</td>
                    <td className="px-4 py-2.5 text-muted">$199/mo</td>
                    <td className="px-4 py-2.5 text-red-400 font-semibold">+298%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              The Business tier increase is the steepest single-plan price jump we have recorded in
              email marketing tooling. Ghost remains open-source and self-hostable, which provides
              an escape valve that proprietary platforms do not. For publishers currently on
              Ghost&apos;s Business plan, self-hosting on a $20&ndash;40/mo VPS may now make
              financial sense.
            </p>
          </section>

          {/* Most Expensive at Scale */}
          <section>
            <h2 className="text-xl font-bold mb-3">Most Expensive Per-Subscriber: Mailchimp at Scale</h2>
            <p className="text-muted leading-relaxed mb-4">
              Mailchimp&apos;s per-contact cost increases faster than any other platform as you scale.
              At 100,000 contacts on the Standard plan, Mailchimp charges approximately $775/mo. The
              same contact count on beehiiv Max costs $159/mo and on Brevo Business costs $115/mo
              (assuming moderate send volume). That means Mailchimp at scale costs 5&ndash;7x more
              than the cheapest alternatives for equivalent functionality.
            </p>
            <p className="text-muted leading-relaxed">
              The gap widens further when you factor in Mailchimp&apos;s contact counting: unsubscribed
              contacts still count toward your plan limit unless you manually archive them. A list of
              100K contacts might include 15&ndash;25% dead weight, inflating the effective per-subscriber
              cost by an additional 20&ndash;30%.
            </p>
          </section>

          {/* Cheapest Verified */}
          <section>
            <h2 className="text-xl font-bold mb-3">Cheapest Verified: beehiiv Above 2,500 Subscribers</h2>
            <p className="text-muted leading-relaxed mb-4">
              When comparing platforms on features-included-per-dollar (not just raw price),
              beehiiv offers the best value at every tier above 2,500 subscribers. beehiiv&apos;s
              Scale plan at $42/mo includes custom domains, advanced analytics, referral programs,
              and ad network access &mdash; features that require $100+/mo plans on competing
              platforms. Below 2,500 subscribers, beehiiv&apos;s free plan is also the most
              generous newsletter-focused option.
            </p>
            <p className="text-muted leading-relaxed">
              Brevo is technically cheaper at high volumes if you only measure price-per-email-sent,
              but Brevo lacks the creator-focused growth tools (referral system, Boosts, built-in
              ad network) that make beehiiv&apos;s total value proposition stronger for
              newsletter operators.
            </p>
          </section>

          {/* Predictions */}
          <section>
            <h2 className="text-xl font-bold mb-3">Predictions: Where Email Pricing Is Heading</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Mailchimp will raise list prices in 2026</p>
                <p className="text-sm text-muted">
                  Mailchimp has not raised headline prices recently, but the pattern of free tier
                  shrinkage and feature gating suggests a formal price increase is coming. Under
                  Intuit ownership, revenue-per-user growth is an explicit priority. We expect a
                  5&ndash;10% increase on Standard and Premium tiers by Q3 2026.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Free tiers will continue shrinking everywhere</p>
                <p className="text-sm text-muted">
                  beehiiv and Kit are the last platforms with genuinely useful free tiers. As
                  investor-backed platforms face pressure to increase ARPU, expect free tiers to
                  either shrink in contact limits or lose features. beehiiv&apos;s ad-supported
                  model may let it maintain free longer than Kit.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">AI features will become the new pricing lever</p>
                <p className="text-sm text-muted">
                  Every email platform is adding AI subject line generation, send-time optimization,
                  and content suggestions. These features are being placed on mid-tier and premium
                  plans. AI will be the justification for the next round of tier restructuring,
                  similar to how automation was used to justify price increases in 2020&ndash;2023.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Brevo will gain market share on price alone</p>
                <p className="text-sm text-muted">
                  Brevo&apos;s email-volume pricing model becomes more attractive as other platforms
                  raise per-contact rates. For teams with large but lightly-emailed lists, the cost
                  differential is now large enough to justify migration. We expect Brevo to be the
                  top migration destination for Mailchimp users in 2026.
                </p>
              </div>
            </div>
          </section>

          {/* Methodology Note */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold mb-3">Methodology</h2>
            <p className="text-muted text-sm leading-relaxed mb-3">
              This report is compiled quarterly by the Sasanova editorial team. Data collection
              follows a consistent process:
            </p>
            <ul className="text-sm text-muted space-y-1.5 mb-3">
              <li>&bull; All pricing is captured directly from vendor pricing pages during a defined collection window (March 10&ndash;20, 2026 for this edition).</li>
              <li>&bull; Historical pricing changes are sourced from Sasanova&apos;s archived snapshots, vendor blog announcements, and documented community reports.</li>
              <li>&bull; &ldquo;Best value&rdquo; assessments consider features included at each price point, not just raw monthly cost.</li>
              <li>&bull; Transparency rankings are based on public availability of pricing, clarity of overage policies, and absence of surprise charges.</li>
              <li>&bull; Predictions are editorial assessments based on observable pricing trends, not insider information.</li>
            </ul>
            <p className="text-muted text-sm leading-relaxed">
              If you identify a pricing error or a change we missed, contact us at{" "}
              <Link href="/contact" className="text-accent hover:underline">sasanova.com/contact</Link>.
              We correct verified errors within 48 hours.
            </p>
          </section>

          <RelatedLinks
            tools={["mailchimp", "kit", "beehiiv", "activecampaign", "brevo"]}
            comparisons={["mailchimp-vs-beehiiv", "beehiiv-vs-convertkit", "mailchimp-vs-activecampaign"]}
            guides={[
              "email-marketing-annual-cost-2026",
              "mailchimp-pricing-history",
              "best-email-tool-creators",
              "best-free-email-tool-2026",
              "state-of-crm-pricing-q1-2026",
              "state-of-automation-pricing-q1-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
