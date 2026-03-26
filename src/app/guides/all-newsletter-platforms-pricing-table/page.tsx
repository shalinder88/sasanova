import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Every Newsletter Platform Pricing at a Glance",
  description:
    "Mailchimp, Kit, beehiiv, Substack, Ghost, and Buttondown pricing compared in one table. All tiers, subscriber limits, monetization features, and cost at 1K to 25K subscribers.",
};

export default function AllNewsletterPlatformsPricingTablePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">All Newsletter Platforms Pricing</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Comparison Matrix
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Every Newsletter Platform Pricing at a Glance
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Six platforms for newsletter creators, six different pricing models. Flat-rate,
            subscriber-based, revenue-share, and open-source. Here&apos;s every tier, every
            price, and cost projections at real subscriber counts.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">All Plans at a Glance</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier 1</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier 2</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier 3</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">250 contacts</td>
                    <td className="px-4 py-2.5 text-muted">Essentials $13/mo</td>
                    <td className="px-4 py-2.5 text-muted">Standard $20/mo</td>
                    <td className="px-4 py-2.5 text-muted">Premium $350/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit</td>
                    <td className="px-4 py-2.5 text-muted">10K subs</td>
                    <td className="px-4 py-2.5 text-muted">Creator $39/mo</td>
                    <td className="px-4 py-2.5 text-muted">Creator Pro $79/mo</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">2,500 subs</td>
                    <td className="px-4 py-2.5 text-muted">Scale $49/mo</td>
                    <td className="px-4 py-2.5 text-muted">Max $109/mo</td>
                    <td className="px-4 py-2.5 text-muted">Enterprise (custom)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited (10% rev share)</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Ghost</td>
                    <td className="px-4 py-2.5 text-muted">Self-hosted (free)</td>
                    <td className="px-4 py-2.5 text-muted">Starter $18/mo</td>
                    <td className="px-4 py-2.5 text-muted">Publisher $35/mo</td>
                    <td className="px-4 py-2.5 text-muted">Business $239/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Buttondown</td>
                    <td className="px-4 py-2.5 text-muted">100 subs</td>
                    <td className="px-4 py-2.5 text-muted">Basic $9/mo</td>
                    <td className="px-4 py-2.5 text-muted">Standard $29/mo</td>
                    <td className="px-4 py-2.5 text-muted">Professional $79/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Cost at Real Subscriber Counts</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">At 1K Subs</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">At 5K Subs</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">At 10K Subs</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">At 25K Subs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp Standard</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">$75/mo</td>
                    <td className="px-4 py-2.5 text-muted">$110/mo</td>
                    <td className="px-4 py-2.5 text-muted">$270/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit Creator</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo</td>
                    <td className="px-4 py-2.5 text-muted">$79/mo</td>
                    <td className="px-4 py-2.5 text-muted">$119/mo</td>
                    <td className="px-4 py-2.5 text-muted">$199/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                    <td className="px-4 py-2.5 text-muted">$0 (free sends)</td>
                    <td className="px-4 py-2.5 text-muted">$0 (free sends)</td>
                    <td className="px-4 py-2.5 text-muted">$0 (free sends)</td>
                    <td className="px-4 py-2.5 text-muted">$0 (10% of paid rev)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Ghost Publisher</td>
                    <td className="px-4 py-2.5 text-muted">$35/mo</td>
                    <td className="px-4 py-2.5 text-muted">$35/mo</td>
                    <td className="px-4 py-2.5 text-muted">$35/mo</td>
                    <td className="px-4 py-2.5 text-muted">$35/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Buttondown Basic</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong>Key insight:</strong> beehiiv Scale ($49/mo), Ghost Publisher ($35/mo), and Buttondown Basic ($9/mo)
              all offer unlimited subscribers at flat rates. Mailchimp and Kit scale with your list, making them
              progressively more expensive. At 25K subscribers, beehiiv saves $221/month vs. Mailchimp Standard.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Monetization Features Compared</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Paid Subs</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Ad Network</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Referral Program</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Revenue Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">Scale+ (via Stripe)</td>
                    <td className="px-4 py-2.5 text-muted">Yes (Boosts, Scale+)</td>
                    <td className="px-4 py-2.5 text-muted">Yes (Scale+)</td>
                    <td className="px-4 py-2.5 text-muted">None</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                    <td className="px-4 py-2.5 text-muted">Built-in</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">10% of paid subs + Stripe fees</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Ghost</td>
                    <td className="px-4 py-2.5 text-muted">Native (Publisher+)</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">None (0% cut)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit</td>
                    <td className="px-4 py-2.5 text-muted">Creator Pro</td>
                    <td className="px-4 py-2.5 text-muted">Sponsor network</td>
                    <td className="px-4 py-2.5 text-muted">Creator Pro</td>
                    <td className="px-4 py-2.5 text-muted">None</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Buttondown</td>
                    <td className="px-4 py-2.5 text-muted">Standard ($29/mo)</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">None</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">No native paid subs</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which platform is best for monetization?</h3>
                <p className="text-muted">beehiiv Scale ($49/mo) offers the most monetization options: paid subscriptions, built-in ad network (Boosts), and referral programs. Substack has the simplest paid subscription model but takes 10% of revenue. Ghost takes 0% but requires more setup.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which is cheapest at scale?</h3>
                <p className="text-muted">Buttondown Basic at $9/month with unlimited subscribers is the absolute cheapest. beehiiv Scale at $49/month offers significantly more features (ad network, referrals, A/B testing) while still being flat-rate. Ghost Publisher at $35/mo is the cheapest with paid subscription support and 0% revenue share.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is Mailchimp on this list?</h3>
                <p className="text-muted">Many newsletter creators start on Mailchimp before discovering newsletter-specific platforms. Including Mailchimp shows why it becomes expensive at scale compared to flat-rate alternatives. At 25K subscribers, Mailchimp Standard costs $270/mo vs. beehiiv&apos;s $49/mo.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "substack", "ghost", "buttondown"]}
            comparisons={["beehiiv-vs-convertkit", "beehiiv-vs-substack", "beehiiv-vs-ghost"]}
            guides={[
              "best-email-tool-creators",
              "best-newsletter-paid-subscribers",
              "newsletter-stack",
              "when-mailchimp-becomes-expensive",
            ]}
          />
        </div>
      </article>
    </>
  );
}
