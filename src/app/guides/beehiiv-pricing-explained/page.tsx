import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "beehiiv Pricing Explained: Launch vs Scale vs Max",
  description:
    "beehiiv pricing decoded: Launch free (2,500 subs), Scale $49/mo (unlimited subs), Max $109/mo (everything). When each tier pays for itself through monetization.",
};

export default function BeehiivPricingExplainedPage() {
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
              beehiiv Pricing Explained
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            beehiiv Pricing Explained: Launch vs Scale vs Max
          </h1>
          <p className="text-lg text-muted">
            beehiiv&apos;s pricing is refreshingly simple compared to Mailchimp or ActiveCampaign &mdash; three main tiers, no per-subscriber pricing on paid plans. But the gap between free and paid is about monetization access, not just features. This guide breaks down when each tier pays for itself.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Every Tier at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Launch (Free)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">2,500 subscribers, unlimited sends, website, custom domain</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Scale</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$43/mo</td>
                  <td className="px-4 py-2.5">Unlimited subscribers, ad network, referral program, polls, A/B testing</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Max</td>
                  <td className="px-4 py-2.5">$109/mo</td>
                  <td className="px-4 py-2.5">$96/mo</td>
                  <td className="px-4 py-2.5">Priority support, API access, advanced analytics, newsroom</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Dedicated support, custom migrations, SLA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            beehiiv does not charge by subscriber count on paid plans. Scale and Max both support unlimited subscribers. This is a massive advantage over Mailchimp and ActiveCampaign, where costs scale with your list size. Once you&apos;re on Scale, your bill stays at $49/month whether you have 5,000 or 500,000 subscribers.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Each Tier Unlocks</h2>
          <h3 className="text-lg font-semibold mt-6 mb-3">Launch (Free) &mdash; Genuinely Generous</h3>
          <p className="text-muted mb-4">
            Launch gives you up to 2,500 subscribers, unlimited email sends, a website builder, custom domain support, and basic analytics. You can publish a real newsletter and build a website at $0. No other newsletter platform matches this combination of features on a free tier.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">What Launch walls off:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">No ad network access (Boosts).</strong> beehiiv&apos;s Boost network lets you earn money by recommending other newsletters. This is locked behind Scale.</li>
            <li><strong className="text-foreground">No referral program.</strong> The ability to incentivize subscribers to share your newsletter requires Scale.</li>
            <li><strong className="text-foreground">No A/B testing.</strong> Subject line and content testing requires Scale.</li>
            <li><strong className="text-foreground">beehiiv branding.</strong> Launch includes a &quot;Powered by beehiiv&quot; badge. Removing it requires Scale.</li>
            <li><strong className="text-foreground">2,500 subscriber cap.</strong> The growth ceiling. Once you pass 2,500 subscribers, you must upgrade.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Scale ($49/mo) &mdash; The Monetization Tier</h3>
          <p className="text-muted mb-4">
            Scale removes the subscriber cap (unlimited), unlocks the ad network (Boosts), adds the referral program, enables A/B testing, removes beehiiv branding, and adds premium themes and polls. This is where beehiiv becomes a monetization platform, not just an email tool.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The revenue math:</strong> beehiiv Boosts pay newsletter operators for recommending other newsletters. Payouts vary but commonly range from $1&ndash;$5 per subscriber action. A newsletter with 5,000+ subscribers running Boosts can realistically earn $100&ndash;$500/month &mdash; potentially covering the $49/month Scale fee entirely.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Max ($109/mo) &mdash; Everything Unlocked</h3>
          <p className="text-muted mb-4">
            Max adds priority support, API access, advanced analytics (subscriber source tracking, revenue attribution), newsroom feature, and enhanced automation tools. The $60 jump from Scale is primarily about analytics depth and API access.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When it&apos;s worth it:</strong> If you&apos;re running a newsletter as a serious business with multiple revenue streams (ads, paid subscriptions, sponsorships) and need detailed attribution data. Or if you need API access for custom integrations. Most creators under 25,000 subscribers don&apos;t need Max.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">When Each Tier Pays for Itself</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Launch ($0)</strong> &mdash; Pays for itself immediately. Build your audience up to 2,500 subscribers at zero cost. Switch to Scale only when you hit the subscriber cap OR want monetization features.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Scale ($49/mo)</strong> &mdash; Pays for itself when Boost revenue exceeds $49/month. With 5,000+ subscribers and active Boost placements, most operators cover the plan cost within 1&ndash;2 months. If you&apos;re not monetizing yet, Scale&apos;s value is in removing the subscriber cap and branding.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Max ($109/mo)</strong> &mdash; Pays for itself when you need analytics to optimize multiple revenue streams, or when API access saves you enough time to justify $60/month over Scale. Typically at 25,000+ subscribers with active monetization.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">2,500 subscriber ceiling on free.</strong> Launch is generous but the 2,500 cap means fast-growing newsletters hit the paywall quickly. If you&apos;re growing 500+ subscribers per month, you&apos;ll need Scale within 5 months.</li>
            <li><strong className="text-foreground">No automation on Launch.</strong> Advanced automation sequences (welcome series, drip campaigns beyond basics) require Scale. Launch offers basic sending but limited workflow automation.</li>
            <li><strong className="text-foreground">Paid subscriptions take a cut.</strong> If you use beehiiv&apos;s premium subscription feature to charge readers, beehiiv takes a percentage of revenue on top of payment processor fees. This varies by plan.</li>
            <li><strong className="text-foreground">Minimal integrations on Launch.</strong> Direct integrations with third-party tools are limited on Launch. Scale adds Zapier and webhook support for connecting to your broader stack.</li>
            <li><strong className="text-foreground">Annual billing saves ~12%.</strong> Scale drops from $49 to $43/month and Max from $109 to $96/month on annual billing. Not as dramatic as some tools, but still meaningful.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Launch (Free)</strong> &mdash; Just starting out, under 2,500 subscribers, not ready to monetize. Test the platform, build your audience, and upgrade when you hit the ceiling.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Scale ($49/mo)</strong> &mdash; You&apos;ve passed 2,500 subscribers, want to remove branding, or want to start monetizing through Boosts and referrals. The right tier for 90% of serious newsletter operators.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Max ($109/mo)</strong> &mdash; Your newsletter is a business generating revenue from multiple sources. You need advanced analytics, API access, or priority support. Typically for operators with 25,000+ subscribers.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit (ConvertKit) Newsletter free tier</strong> gives you up to 10,000 subscribers at $0 &mdash; 4x beehiiv&apos;s free limit. If you don&apos;t need beehiiv&apos;s ad network or referral program, Kit Free supports a larger audience for longer at no cost.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Substack</strong> is free with unlimited subscribers. The tradeoff: Substack takes a 10% cut of paid subscription revenue. If you monetize through paid newsletters, Substack&apos;s cut can exceed beehiiv Scale&apos;s flat $49/month at relatively low revenue levels.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does beehiiv cost?</h3>
                <p className="text-muted">Launch is free for up to 2,500 subscribers. Scale is $49/month for unlimited subscribers. Max is $109/month with advanced analytics and API access. Enterprise pricing is custom. Paid plans do not charge based on subscriber count.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is beehiiv free tier really free?</h3>
                <p className="text-muted">Yes. Launch gives you 2,500 subscribers, unlimited sends, a website builder, and a custom domain at $0 with no time limit. The limitations are beehiiv branding, no ad network, no referral program, and no A/B testing.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can beehiiv Scale pay for itself?</h3>
                <p className="text-muted">Yes. beehiiv&apos;s Boost network pays you for recommending other newsletters. With 5,000+ subscribers and active Boost placements, operators commonly earn $100&ndash;$500/month, covering or exceeding the $49/month Scale fee. Results vary based on audience size and engagement.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">beehiiv vs Substack: which is cheaper?</h3>
                <p className="text-muted">beehiiv is cheaper if you monetize through paid subscriptions. Substack takes 10% of paid revenue &mdash; at $490/month in subscription revenue, Substack&apos;s cut equals beehiiv Scale&apos;s flat $49/month. Above that, beehiiv saves money. Below that, Substack&apos;s $0 base cost wins.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["beehiiv", "convertkit", "substack"]}
            comparisons={["beehiiv-vs-substack", "beehiiv-vs-convertkit"]}
            guides={["when-beehiiv-scale-beats-launch", "migrate-substack-to-beehiiv"]}
          />
        </div>
      </article>
    </>
  );
}
