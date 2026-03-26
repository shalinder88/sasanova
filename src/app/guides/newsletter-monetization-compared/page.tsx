import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Newsletter Monetization: beehiiv Boosts vs Kit Commerce vs Substack Paid",
  description:
    "Revenue models compared: beehiiv Boosts + ad network + paid subs (0% platform cut), Kit digital products + paid newsletter, Substack 10% cut. Exact pricing data.",
};

export default function NewsletterMonetizationComparedPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Newsletter Monetization Compared</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Email Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Newsletter Monetization: beehiiv Boosts vs Kit Commerce vs Substack Paid
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Three platforms, three fundamentally different monetization models. Here is how each makes money for creators, with exact platform cuts and pricing.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-10">

          <section>
            <h2 className="text-xl font-bold mb-3">The Three Models at a Glance</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Revenue Streams</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform Cut</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Required Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">Boosts (ad network) + Paid subscriptions + Sponsorships</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">0% on paid subs (Stripe fees only)</td>
                    <td className="px-4 py-2.5 text-muted">Scale $49/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit)</td>
                    <td className="px-4 py-2.5 text-muted">Digital products (courses, ebooks) + Paid newsletter + Sponsor network</td>
                    <td className="px-4 py-2.5 text-muted">3.5% + $0.30 per transaction (Kit fee on top of Stripe)</td>
                    <td className="px-4 py-2.5 text-muted">Creator $39/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                    <td className="px-4 py-2.5 text-muted">Paid subscriptions only</td>
                    <td className="px-4 py-2.5 text-muted">10% of subscription revenue (+ Stripe fees)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free (all features included)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">beehiiv: The Multi-Revenue Model</h2>
            <div className="space-y-4 text-sm text-muted">
              <p><strong className="text-foreground">Boosts (Ad Network):</strong> beehiiv&apos;s built-in ad network lets you earn money by recommending other newsletters to your subscribers. You get paid per recommendation (typically $0.50&ndash;$3 per subscriber who opts in). This is available on Scale ($49/mo) and above.</p>
              <p><strong className="text-foreground">Paid Subscriptions:</strong> Offer premium content behind a paywall. beehiiv takes 0% platform cut &mdash; you only pay Stripe processing fees (approximately 2.9% + $0.30). Available on Scale ($49/mo).</p>
              <p><strong className="text-foreground">Sponsorships:</strong> Sell ad placements directly in your newsletter. beehiiv provides analytics and sponsor management tools on Scale and above.</p>
              <p><strong className="text-foreground">Referral Program:</strong> Built-in referral program (Scale $49/mo) lets subscribers earn rewards for referring others, reducing your acquisition cost to near zero.</p>
            </div>
            <div className="mt-4 border border-border rounded-lg p-4 bg-surface">
              <p className="text-sm text-foreground font-semibold mb-1">Revenue Example: 10,000 subscribers on beehiiv Scale ($49/mo)</p>
              <p className="text-sm text-muted">Boosts: 200 recommendations/mo at $1.50 avg = $300/mo. Paid subs: 200 paid at $10/mo = $2,000/mo (minus ~$87 Stripe fees). Total: ~$2,213/mo revenue minus $49/mo platform cost = $2,164/mo net.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Kit: The Digital Products Model</h2>
            <div className="space-y-4 text-sm text-muted">
              <p><strong className="text-foreground">Digital Products (Commerce):</strong> Sell ebooks, courses, presets, templates, and other digital products directly through Kit. Kit charges 3.5% + $0.30 per transaction on top of Stripe fees. Available on Creator ($39/mo) and above.</p>
              <p><strong className="text-foreground">Paid Newsletter:</strong> Offer a paid newsletter subscription. Same 3.5% + $0.30 Kit fee applies on top of Stripe processing. Available on Creator ($39/mo).</p>
              <p><strong className="text-foreground">Sponsor Network:</strong> Kit connects creators with sponsors for newsletter ad placements. Available on Creator Pro ($79/mo).</p>
              <p><strong className="text-foreground">Newsletter Referral Program:</strong> SparkLoop-style referral program is available on Creator Pro ($79/mo) only.</p>
            </div>
            <div className="mt-4 border border-border rounded-lg p-4 bg-surface">
              <p className="text-sm text-foreground font-semibold mb-1">Revenue Example: 10,000 subscribers on Kit Creator ($39/mo)</p>
              <p className="text-sm text-muted">Digital product: 50 sales/mo at $29 = $1,450/mo (minus ~$72 Kit fee, minus ~$57 Stripe fees). Paid newsletter: 100 paid at $8/mo = $800/mo (minus ~$40 Kit fee, minus ~$35 Stripe fees). Total: ~$2,046/mo net after fees and platform cost.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Substack: The Simplest Model (But the Most Expensive Cut)</h2>
            <div className="space-y-4 text-sm text-muted">
              <p><strong className="text-foreground">Paid Subscriptions:</strong> The only monetization method. Readers pay $5&ndash;$50+/month or annual equivalents. Substack takes 10% of all subscription revenue, plus Stripe fees (~2.9% + $0.30).</p>
              <p><strong className="text-foreground">No Platform Fee:</strong> Substack has no monthly subscription cost. You pay nothing until you earn. The trade-off is the 10% perpetual revenue share.</p>
              <p><strong className="text-foreground">Network Discovery:</strong> Substack&apos;s recommendations network and mobile app provide built-in discovery that beehiiv and Kit do not match. This has real value for growing a paid audience.</p>
              <p><strong className="text-foreground">No Ad Network:</strong> No built-in Boosts or sponsor tools. No digital product sales. No referral program.</p>
            </div>
            <div className="mt-4 border border-border rounded-lg p-4 bg-surface">
              <p className="text-sm text-foreground font-semibold mb-1">Revenue Example: 10,000 subscribers on Substack (Free)</p>
              <p className="text-sm text-muted">Paid subs: 500 paid at $10/mo = $5,000/mo. Substack cut: $500/mo (10%). Stripe fees: ~$175/mo. Total: ~$4,325/mo net. No platform cost but 10% revenue share in perpetuity.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">The Crossover Math: When Substack&apos;s 10% Costs More Than a Platform Fee</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Break-even vs beehiiv Scale ($49/mo):</strong> Once your paid subscription revenue exceeds $490/mo, Substack&apos;s 10% cut costs more than beehiiv&apos;s flat $49/mo fee. That is roughly 50 subscribers at $10/mo.</p>
              <p><strong className="text-foreground">Break-even vs Kit Creator ($39/mo):</strong> Kit&apos;s 3.5% + $0.30 per transaction is cheaper than Substack&apos;s 10% from the first dollar. However, Kit charges a monthly fee. At approximately $600/mo in revenue, Kit&apos;s total cost ($39/mo + transaction fees) exceeds Substack&apos;s 10% cut. Below that, Substack is cheaper because there is no monthly fee.</p>
              <p><strong className="text-foreground">The real question:</strong> If you will earn more than $500/mo from your newsletter, beehiiv&apos;s 0% platform cut saves you money. If you earn less than $500/mo, Substack&apos;s zero monthly cost and network discovery may be worth the 10%.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Which Model Fits Which Creator?</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Choose beehiiv if:</strong> You want multiple revenue streams (ads + subscriptions + sponsorships), plan to earn over $500/mo, and value keeping 100% of subscription revenue. Requires Scale at $49/mo.</p>
              <p><strong className="text-foreground">Choose Kit if:</strong> You sell digital products (courses, ebooks, templates) alongside your newsletter. The commerce features are Kit&apos;s strongest differentiator. Creator at $39/mo.</p>
              <p><strong className="text-foreground">Choose Substack if:</strong> You are starting from zero, value the built-in network for discovery, want the simplest possible setup, and are willing to pay 10% forever. Best for writers who prioritize audience growth over revenue optimization.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I use Boosts on beehiiv and still have paid subscriptions?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. Boosts, paid subscriptions, and sponsorships all work together on beehiiv Scale ($49/mo). Many creators stack all three for maximum revenue per subscriber.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Does Substack really take 10% forever?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. Substack&apos;s 10% cut is a permanent revenue share on all paid subscription revenue. It does not decrease as you grow. At $10,000/mo in revenue, that is $1,000/mo to Substack &mdash; compared to $49/mo for beehiiv Scale with 0% cut.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  How much do beehiiv Boosts actually pay?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Boost payouts vary by niche and advertiser, typically ranging from $0.50 to $3.00 per recommendation (per subscriber who opts in to the recommended newsletter). Finance and business niches tend to pay higher rates. Payouts depend on your audience quality and engagement.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["beehiiv", "convertkit", "substack"]}
            comparisons={["beehiiv-vs-convertkit"]}
            guides={["best-newsletter-paid-subscribers", "when-beehiiv-scale-beats-launch", "email-platform-feature-tiers-explained"]}
          />
        </div>
      </article>
    </>
  );
}
