import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Cost by List Size: What You'll Pay at 1K, 5K, 10K, 25K, 50K, 100K Subscribers",
  description:
    "Giant comparison table: every email tool at every subscriber tier. Exact base prices with notes on how contact-tier pricing scales.",
};

export default function EmailListSizeCostCalculatorPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Email Cost by List Size</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Email Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Cost by List Size: What You&apos;ll Pay at Every Subscriber Tier
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Base prices are misleading. Here is what each platform actually costs as your list grows from 1,000 to 100,000 subscribers.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-10">

          <section>
            <h2 className="text-xl font-bold mb-3">How to Read This Table</h2>
            <p className="text-sm text-muted leading-relaxed">
              Prices shown are monthly costs on each platform&apos;s most popular paid tier (the tier most users land on). Mailchimp uses Standard, Kit uses Creator, beehiiv uses Scale, ActiveCampaign uses Plus, and Brevo uses Standard. Brevo prices by emails sent (not contacts), so costs depend on send frequency. Brevo figures assume 4 sends/month per subscriber.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Monthly Cost by Subscriber Count</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Subscribers</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Mailchimp Standard</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Kit Creator</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">beehiiv Scale</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">ActiveCampaign Plus</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Brevo Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">500</td>
                    <td className="px-3 py-2.5 text-muted">$20/mo</td>
                    <td className="px-3 py-2.5 text-muted">$39/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">Free (Launch)</td>
                    <td className="px-3 py-2.5 text-muted">$49/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$18/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">1,000</td>
                    <td className="px-3 py-2.5 text-muted">$35/mo</td>
                    <td className="px-3 py-2.5 text-muted">$39/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">Free (Launch)</td>
                    <td className="px-3 py-2.5 text-muted">$49/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$18/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">2,500</td>
                    <td className="px-3 py-2.5 text-muted">$60/mo</td>
                    <td className="px-3 py-2.5 text-muted">$59/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">Free (Launch)</td>
                    <td className="px-3 py-2.5 text-muted">$99/mo</td>
                    <td className="px-3 py-2.5 text-muted">$29/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors bg-surface-alt">
                    <td className="px-3 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-3 py-2.5 text-muted">$100/mo</td>
                    <td className="px-3 py-2.5 text-muted">$79/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$49/mo</td>
                    <td className="px-3 py-2.5 text-muted">$149/mo</td>
                    <td className="px-3 py-2.5 text-muted">$39/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-3 py-2.5 text-muted">$150/mo</td>
                    <td className="px-3 py-2.5 text-muted">$119/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$49/mo</td>
                    <td className="px-3 py-2.5 text-muted">$229/mo</td>
                    <td className="px-3 py-2.5 text-muted">$59/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors bg-surface-alt">
                    <td className="px-3 py-2.5 font-medium text-foreground">25,000</td>
                    <td className="px-3 py-2.5 text-muted">$270/mo</td>
                    <td className="px-3 py-2.5 text-muted">$199/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$49/mo</td>
                    <td className="px-3 py-2.5 text-muted">$389/mo</td>
                    <td className="px-3 py-2.5 text-muted">$99/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-3 py-2.5 text-muted">$410/mo</td>
                    <td className="px-3 py-2.5 text-muted">$329/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$49/mo</td>
                    <td className="px-3 py-2.5 text-muted">$489/mo</td>
                    <td className="px-3 py-2.5 text-muted">$169/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors bg-surface-alt">
                    <td className="px-3 py-2.5 font-medium text-foreground">100,000</td>
                    <td className="px-3 py-2.5 text-muted">$800/mo+</td>
                    <td className="px-3 py-2.5 text-muted">$599/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$49/mo</td>
                    <td className="px-3 py-2.5 text-muted">$700/mo+</td>
                    <td className="px-3 py-2.5 text-muted">$499/mo*</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">*Brevo prices by emails sent, not contacts. Estimates assume 4 emails/month per subscriber and the corresponding volume tier. Brevo allows unlimited contacts on all plans.</p>
            <p className="text-xs text-muted mt-1">Mailchimp, Kit, and ActiveCampaign prices scale by contact tiers and are approximate &mdash; check vendor pricing pages for exact figures at your count. beehiiv Scale is flat $49/mo regardless of subscriber count.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Key Takeaways by List Size</h2>
            <div className="space-y-4 text-sm text-muted">
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">Under 2,500 subscribers</p>
                <p>beehiiv Launch (Free) and Kit Newsletter (Free, up to 10K) are the clear winners. Mailchimp Free only covers 250 contacts. Brevo Free gives 300 emails/day with unlimited contacts.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">2,500 to 10,000 subscribers</p>
                <p>beehiiv Scale ($49/mo flat) becomes the best value. Mailchimp Standard starts climbing steeply ($60&ndash;$150/mo). Brevo Standard stays affordable at $18&ndash;$59/mo depending on send volume.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">10,000 to 50,000 subscribers</p>
                <p>beehiiv&apos;s flat $49/mo becomes dramatically cheaper. At 50K subscribers, Mailchimp costs $410/mo (8.4x more). ActiveCampaign costs $489/mo (10x more). Kit at $329/mo is 6.7x more.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">100,000+ subscribers</p>
                <p>beehiiv at $49/mo is still flat. Every other platform is $500&ndash;$800+/mo. The annual savings on beehiiv vs Mailchimp at 100K subscribers is approximately $9,000/year.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">The Contact Counting Trap</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Mailchimp counts unsubscribed contacts.</strong> If someone unsubscribes, they still count toward your contact limit unless you manually archive or delete them. This can inflate your bill by 20&ndash;40%.</p>
              <p><strong className="text-foreground">ActiveCampaign counts all contacts.</strong> Every contact in your account counts, including unsubscribed. Clean your list regularly.</p>
              <p><strong className="text-foreground">Kit counts active subscribers only.</strong> Unsubscribed and cold subscribers are excluded from your plan limit.</p>
              <p><strong className="text-foreground">beehiiv counts subscribers on Scale.</strong> But since Scale is flat pricing with unlimited subscribers, it does not matter.</p>
              <p><strong className="text-foreground">Brevo does not count contacts at all.</strong> You pay by emails sent. Even Free allows 100,000 contacts.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Annual Cost Comparison (Popular Paid Tier)</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Subscribers</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Mailchimp</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Kit</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">beehiiv</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">ActiveCampaign</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-3 py-2.5 text-muted">$1,200/yr</td>
                    <td className="px-3 py-2.5 text-muted">$948/yr</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$516/yr</td>
                    <td className="px-3 py-2.5 text-muted">$1,788/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">25,000</td>
                    <td className="px-3 py-2.5 text-muted">$3,240/yr</td>
                    <td className="px-3 py-2.5 text-muted">$2,388/yr</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$516/yr</td>
                    <td className="px-3 py-2.5 text-muted">$4,668/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-3 py-2.5 text-muted">$4,920/yr</td>
                    <td className="px-3 py-2.5 text-muted">$3,948/yr</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$516/yr</td>
                    <td className="px-3 py-2.5 text-muted">$5,868/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">Annual prices assume annual billing where available. beehiiv Scale annual is $516/yr ($43/mo).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Why is beehiiv so much cheaper at scale?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  beehiiv Scale uses flat pricing: $49/mo (or $43/mo annual) regardless of subscriber count. Every other platform uses per-contact or per-send pricing that scales with your list. beehiiv&apos;s business model is built around monetization features (Boosts, paid subs) rather than charging by list size.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is Brevo really cheaper than Mailchimp at all sizes?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Generally yes, because Brevo charges by emails sent rather than contacts stored. However, if you send daily emails to a large list, Brevo&apos;s costs can approach or exceed Mailchimp. At 4 sends/month (typical for most businesses), Brevo is consistently cheaper.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What about Substack?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Substack is free to use with no subscriber limits. The cost is 10% of paid subscription revenue + Stripe fees. If you are not running paid subscriptions, Substack costs $0. If you are earning $5,000/mo from paid subs, Substack costs $500/mo &mdash; far more than any platform on this list.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "activecampaign", "brevo"]}
            guides={["email-marketing-annual-cost-2026", "when-mailchimp-becomes-expensive", "email-platform-feature-tiers-explained"]}
          />
        </div>
      </article>
    </>
  );
}
