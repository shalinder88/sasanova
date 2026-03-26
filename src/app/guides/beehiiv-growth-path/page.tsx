import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "beehiiv Growth Path: Launch → Scale → Max — Revenue-Based Decisions",
  description:
    "beehiiv pricing decoded: Free Launch (2,500 subs), Scale $49/mo (unlimited subs, ad network, referrals), Max $109/mo (API, advanced analytics). When Boosts revenue covers your Scale cost.",
};

export default function BeehiivGrowthPathPage() {
  return (
    <>
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
              beehiiv Growth Path
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Tool Maturity
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            beehiiv Growth Path: Launch &rarr; Scale &rarr; Max &mdash; Revenue-Based Decisions
          </h1>
          <p className="text-lg text-muted">
            beehiiv&apos;s pricing is refreshingly simple: free up to 2,500 subscribers, then $49/mo for unlimited subscribers, then $109/mo for advanced features. The key decision is whether the Boosts ad network and referral program generate enough revenue to cover (or exceed) the Scale plan cost. This guide shows you exactly when each upgrade pays for itself.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Pricing verified from beehiiv vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">The Three Tiers at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Launch</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">2,500 subscribers, unlimited sends, custom domain, website builder</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Scale</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$516/yr ($43/mo)</td>
                  <td className="px-4 py-2.5">Unlimited subscribers, ad network (Boosts), referral program, polls, premium themes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Max</td>
                  <td className="px-4 py-2.5">$109/mo</td>
                  <td className="px-4 py-2.5">$1,152/yr ($96/mo)</td>
                  <td className="px-4 py-2.5">Everything in Scale + priority support, API access, advanced analytics, newsroom</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Dedicated support, custom migrations, SLA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 1: Launch (Free) &mdash; A Genuine Free Tier</h2>
          <p className="text-muted mb-4">
            beehiiv Launch is one of the most generous free tiers in the newsletter space. You get 2,500 subscribers, unlimited email sends, a custom domain, and a website builder. No beehiiv branding on your emails.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Launch Limits That Matter</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>2,500 subscriber cap &mdash; the single biggest constraint</li>
              <li>No ad network access (Boosts) &mdash; no monetization through beehiiv&apos;s built-in ad marketplace</li>
              <li>No referral program &mdash; growth is limited to organic and manual promotion</li>
              <li>No polls or surveys &mdash; limited engagement tools</li>
              <li>Basic analytics only &mdash; no 3D analytics, no advanced segmentation reporting</li>
              <li>beehiiv branding on website (not emails)</li>
            </ul>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Scale</p>
            <p className="text-sm text-muted">When you approach 2,500 subscribers, when you want to monetize via the Boosts ad network, or when you want to accelerate growth with the referral program. The referral program alone can double your growth rate &mdash; if you&apos;re growing at 100 subs/month, the $49/mo to unlock referrals is worth it.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 2: Scale ($49/mo) &mdash; The Monetization Tier</h2>
          <p className="text-muted mb-4">
            Scale removes the subscriber cap and unlocks beehiiv&apos;s two most powerful features: the Boosts ad network and the referral program. At $49/mo ($516/yr billed annually), the question is whether these revenue tools cover the cost.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Boosts Revenue Math</h3>
            <p className="text-sm text-muted">
              Boosts pay newsletter operators $1&ndash;$3 per subscriber who signs up through a recommendation. With 5,000 subscribers sending one Boost recommendation per email, a 1% conversion rate means ~50 Boost signups/month. At $2/signup average, that&apos;s $100/month &mdash; more than covering the $49/mo Scale cost.
            </p>
            <p className="text-sm text-muted mt-2">
              <strong className="text-foreground">Break-even:</strong> You need roughly 25 Boost conversions per month at $2/signup to cover Scale. With a list of 2,500+ and decent engagement, this is achievable within 1&ndash;2 months.
            </p>
          </div>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Referral Program Value</h3>
            <p className="text-sm text-muted">
              The built-in referral program lets readers earn rewards for referring friends. Top beehiiv newsletters report 15&ndash;30% of new subscribers coming from referrals. If you&apos;re growing at 200 subs/month, referrals could add 30&ndash;60 additional subscribers monthly &mdash; growth you&apos;d otherwise need to pay for with ads.
            </p>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Max</p>
            <p className="text-sm text-muted">When you need API access for custom integrations, when you need advanced analytics for advertiser reporting, or when you&apos;re building a media operation that requires the newsroom feature. If you&apos;re a solo creator, Scale is usually sufficient indefinitely.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 3: Max ($109/mo) &mdash; For Media Operations</h2>
          <p className="text-muted mb-4">
            Max adds $60/mo over Scale for priority support, API access, advanced analytics, and the newsroom feature. The jump is only worth it if you&apos;re operating a newsletter as a media business.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">What Max Adds</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>API access &mdash; build custom integrations, sync with your own systems</li>
              <li>Advanced analytics &mdash; detailed engagement metrics, advertiser-ready reporting</li>
              <li>Newsroom feature &mdash; multi-author publishing for media teams</li>
              <li>Priority support &mdash; faster response times</li>
              <li>Custom branding removal on all surfaces</li>
            </ul>
          </div>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">When Max Pays for Itself</h3>
            <p className="text-sm text-muted">
              If you sell direct ad placements (not just Boosts), advanced analytics helps you charge higher CPMs by proving engagement to advertisers. A single direct ad deal at $500+ covers months of Max. If you only use Boosts for monetization, Scale is sufficient.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">vs. Competitors at Each Stage</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stage</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Substack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Ghost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5">2,500 subs, full features</td>
                  <td className="px-4 py-2.5">Unlimited, 10% of paid revenue</td>
                  <td className="px-4 py-2.5">Self-host only (no managed free tier)</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Monetization</td>
                  <td className="px-4 py-2.5">$49/mo, 0% fee, Boosts ad network</td>
                  <td className="px-4 py-2.5">$0, 10% of paid sub revenue forever</td>
                  <td className="px-4 py-2.5">$35/mo (Publisher), 0% fee</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is beehiiv Launch really free?</h3>
                <p className="text-muted">Yes. beehiiv Launch gives you 2,500 subscribers, unlimited sends, a custom domain, and a website builder at $0. No credit card required, no beehiiv branding on emails. It is one of the most generous free newsletter tiers available.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from beehiiv Launch to Scale?</h3>
                <p className="text-muted">When you approach 2,500 subscribers or when you want to monetize through the Boosts ad network. The Boosts revenue typically covers the $49/mo Scale cost at around 2,500&ndash;5,000 engaged subscribers.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is beehiiv Max worth $109/month?</h3>
                <p className="text-muted">Only for media operators who need API access, advanced advertiser reporting, or multi-author newsroom features. Solo creators should stay on Scale ($49/mo) unless they need API integrations for custom workflows.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How does beehiiv compare to Substack for monetization?</h3>
                <p className="text-muted">Substack takes 10% of your paid subscription revenue forever. beehiiv Scale costs $49/mo flat with 0% platform fee. At $500+/mo in paid subscription revenue, beehiiv is cheaper. Plus beehiiv offers the Boosts ad network that Substack doesn&apos;t have.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["beehiiv", "substack", "ghost"]}
            comparisons={["beehiiv-vs-substack", "beehiiv-vs-kit"]}
            guides={["best-newsletter-paid-subscribers", "switch-from-kit-to-beehiiv", "beehiiv-setup-guide"]}
          />
        </div>
      </article>
    </>
  );
}
