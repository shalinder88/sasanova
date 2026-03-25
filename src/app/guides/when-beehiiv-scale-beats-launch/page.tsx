import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "beehiiv Launch vs Scale: When Free Stops Making Sense",
  description:
    "beehiiv Launch is free for 2,500 subscribers with unlimited sends. Scale is $49/mo for unlimited subscribers, ad network, and referral program. Here's the exact moment to upgrade.",
};

export default function WhenBeehiivScaleBeatsLaunch() {
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
              beehiiv Launch vs Scale
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Cost Threshold
            </span>
            <span className="text-[11px] text-muted">11 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            beehiiv Launch vs Scale: When Free Stops Making Sense
          </h1>
          <p className="text-lg text-muted">
            beehiiv Launch is genuinely free: 2,500 subscribers, unlimited sends, custom domain, and a website builder. Scale at $49/mo unlocks unlimited subscribers, the ad network, referral program, and A/B testing. There are two distinct triggers that make Scale worth it &mdash; and for some creators, Scale pays for itself.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from beehiiv vendor page"
          sourceCount={2}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">What beehiiv Launch Actually Gives You</h2>
          <p className="text-muted mb-4">
            beehiiv Launch (free) is one of the most generous newsletter free tiers available:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">2,500 subscribers.</strong> Hard cap &mdash; you cannot add subscriber #2,501 without upgrading.</li>
            <li><strong className="text-foreground">Unlimited sends.</strong> No cap on emails per month. Send daily if you want.</li>
            <li><strong className="text-foreground">Custom domain.</strong> Use your own domain from day one, free.</li>
            <li><strong className="text-foreground">Website builder.</strong> A built-in website for your newsletter, included.</li>
            <li><strong className="text-foreground">beehiiv branding.</strong> A small beehiiv badge on your emails and website.</li>
            <li><strong className="text-foreground">No ad network access.</strong> You cannot monetize through beehiiv&apos;s Boost network on Launch.</li>
            <li><strong className="text-foreground">No referral program.</strong> No built-in subscriber referral system.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">When to Stay on Launch</p>
            <p className="text-sm text-muted">
              You have fewer than 2,500 subscribers and aren&apos;t ready to monetize yet. You&apos;re focused on growing your list, testing content, and building an audience. Launch is genuinely enough for this phase. Don&apos;t upgrade until you hit a specific wall.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">beehiiv&apos;s Full Pricing</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Launch</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5">2,500 subs, unlimited sends, custom domain, website</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Scale</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$516/yr</td>
                  <td className="px-4 py-2.5">Unlimited subs, ad network, referral program, A/B testing, polls, premium themes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Max</td>
                  <td className="px-4 py-2.5">$109/mo</td>
                  <td className="px-4 py-2.5">$1,152/yr</td>
                  <td className="px-4 py-2.5">Everything in Scale + priority support, API access, advanced analytics, newsroom</td>
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

          <h2 className="text-xl font-bold mt-10 mb-4">Trigger 1: You Hit 2,500 Subscribers</h2>
          <p className="text-muted mb-4">
            This is the most common trigger. Launch has a hard cap at 2,500 subscribers. When you reach it, you must upgrade to Scale ($49/mo) to continue growing. There is no intermediate tier &mdash; you go from $0 to $49/mo.
          </p>
          <p className="text-muted mb-4">
            The math: at 2,500 subscribers, $49/mo means you&apos;re paying roughly $0.02 per subscriber per month. That&apos;s competitive with any email platform at this scale.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Trigger 2: You Want to Monetize</h2>
          <p className="text-muted mb-4">
            Scale unlocks beehiiv&apos;s built-in monetization features &mdash; and this is where the plan can pay for itself:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Ad Network (Boosts).</strong> Other newsletters pay you to recommend them to your subscribers. Earnings vary by niche, but creators with engaged audiences report $1&ndash;$5 per subscriber gained through Boosts.</li>
            <li><strong className="text-foreground">Referral program.</strong> Built-in rewards system where subscribers earn perks for referring new subscribers. This is the growth engine that makes beehiiv newsletters grow faster than competitors.</li>
            <li><strong className="text-foreground">Paid subscriptions.</strong> Charge subscribers for premium content, integrated with Stripe.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The revenue math</p>
            <p className="text-sm text-muted">
              Scale costs $49/mo ($588/yr). If the ad network generates even $50/month in Boost revenue, Scale pays for itself. Many creators with 5,000+ engaged subscribers earn $100&ndash;$500/month through Boosts alone. At that point, Scale is not a cost &mdash; it&apos;s a profit center.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Upgrade to Max ($109/mo)</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Max makes sense when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li>You need API access for custom integrations or advanced workflows.</li>
              <li>You want advanced analytics beyond Scale&apos;s reporting.</li>
              <li>You need priority support for a newsletter that generates significant revenue.</li>
              <li>You&apos;re building a media operation with multiple publications (newsroom feature).</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: Kit Newsletter (Free)</h2>
          <p className="text-muted mb-4">
            If you hit 2,500 subscribers but aren&apos;t ready to pay $49/mo, Kit (ConvertKit) Newsletter is free for up to 10,000 subscribers with unlimited sends. The tradeoffs:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">No ad network.</strong> Kit doesn&apos;t have a built-in Boost-style monetization system.</li>
            <li><strong className="text-foreground">No advanced automations on the free tier.</strong> Kit Free has limited automations compared to beehiiv Scale.</li>
            <li><strong className="text-foreground">No built-in referral program.</strong> You&apos;d need a third-party tool like SparkLoop.</li>
          </ul>
          <p className="text-muted mb-4">
            Kit Free is better if you only need to send newsletters and aren&apos;t monetizing yet. beehiiv Scale is better if you want the full creator toolkit &mdash; ads, referrals, paid subscriptions &mdash; in one platform.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is beehiiv Launch really free forever?</h3>
                <p className="text-muted">Yes. beehiiv Launch does not expire. It includes 2,500 subscribers, unlimited sends, custom domain, and a website builder at $0 indefinitely. The limits are on subscriber count (2,500), monetization features (no ads/referrals), and branding (beehiiv badge).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can beehiiv Scale actually pay for itself?</h3>
                <p className="text-muted">Yes, for many creators. The ad network (Boosts) allows other newsletters to pay you for recommending them. Earnings depend on your niche and audience engagement, but creators with 5,000+ subscribers commonly earn enough through Boosts to cover the $49/mo cost. Some earn significantly more.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What happens if I hit 2,500 subs on Launch?</h3>
                <p className="text-muted">You can continue sending to your existing 2,500 subscribers, but new signups will be blocked until you upgrade to Scale. You won&apos;t lose existing subscribers, but your growth stops.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Max ($109/mo) worth it over Scale ($49/mo)?</h3>
                <p className="text-muted">For most creators, no. Scale includes the ad network, referral program, A/B testing, and paid subscriptions &mdash; the features that drive growth and revenue. Max adds API access, advanced analytics, and priority support. Unless you&apos;re building custom integrations or running a multi-publication media operation, Scale is sufficient.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["beehiiv", "convertkit", "substack"]}
            comparisons={["beehiiv-vs-substack", "beehiiv-vs-convertkit"]}
            guides={["when-mailchimp-becomes-expensive", "saas-pricing-traps-2026"]}
          />
        </div>
      </article>
    </>
  );
}
