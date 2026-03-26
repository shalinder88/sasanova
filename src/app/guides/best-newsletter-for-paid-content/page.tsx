import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Best Newsletter Platform for Paid Subscriptions",
  description:
    "Newsletter platforms for paid content compared: Ghost ($18–$239/mo, 0% fee), beehiiv ($49–$109/mo, 0% fee), Substack ($0, 10% fee), Buttondown ($9–$79/mo, 0% fee). Revenue comparison at 500, 2,000, and 5,000 paid subscribers.",
};

export default function BestNewsletterForPaidContentPage() {
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
              Best Newsletter for Paid Content
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Comparison for Specific Needs
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best Newsletter Platform for Paid Subscriptions
          </h1>
          <p className="text-lg text-muted">
            If you&apos;re building a paid newsletter, the platform fee structure is the single most important decision. Substack takes 10% of your revenue forever. Ghost, beehiiv, and Buttondown charge flat monthly fees with 0% platform take. At scale, that 10% Substack fee dwarfs any monthly subscription cost. This guide compares the exact economics at 500, 2,000, and 5,000 paid subscribers.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Pricing verified from vendor pages"
          sourceCount={5}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Platform Pricing Overview</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform Fee</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Paid Subs Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Ghost (Starter)</td>
                  <td className="px-4 py-2.5">$18/mo</td>
                  <td className="px-4 py-2.5">0%</td>
                  <td className="px-4 py-2.5">1,000 members, 1 staff user</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Ghost (Publisher)</td>
                  <td className="px-4 py-2.5">$35/mo</td>
                  <td className="px-4 py-2.5">0%</td>
                  <td className="px-4 py-2.5">Unlimited members, paid subs, custom themes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Ghost (Business)</td>
                  <td className="px-4 py-2.5">$239/mo</td>
                  <td className="px-4 py-2.5">0%</td>
                  <td className="px-4 py-2.5">Unlimited members, unlimited staff, priority support</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv (Scale)</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">0%</td>
                  <td className="px-4 py-2.5">Unlimited subs, ad network, referral program</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv (Max)</td>
                  <td className="px-4 py-2.5">$109/mo</td>
                  <td className="px-4 py-2.5">0%</td>
                  <td className="px-4 py-2.5">Everything in Scale + API, advanced analytics</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">10%</td>
                  <td className="px-4 py-2.5">Unlimited subs, built-in discovery network</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Buttondown (Basic)</td>
                  <td className="px-4 py-2.5">$9/mo</td>
                  <td className="px-4 py-2.5">0%</td>
                  <td className="px-4 py-2.5">Unlimited subs, custom domain, automation</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Buttondown (Standard)</td>
                  <td className="px-4 py-2.5">$29/mo</td>
                  <td className="px-4 py-2.5">0%</td>
                  <td className="px-4 py-2.5">Paid subscriptions, surveys, team members</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Buttondown (Professional)</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                  <td className="px-4 py-2.5">0%</td>
                  <td className="px-4 py-2.5">Full features + API access, team members</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Revenue Comparison: The 10% Fee Math</h2>
          <p className="text-muted mb-4">
            Substack&apos;s 10% fee sounds small until you model it at scale. Assuming $10/month per paid subscriber (a common price point), here&apos;s what each platform costs you in total &mdash; platform fee plus Stripe processing (2.9% + 30&cent; per transaction, which all platforms share).
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">At 500 Paid Subscribers ($5,000/mo revenue)</h3>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform Fee</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Total Annual Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Your Net Revenue/yr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                  <td className="px-4 py-2.5">$500/mo (10%)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$6,000</td>
                  <td className="px-4 py-2.5">$54,000</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Ghost (Publisher)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$35/mo</td>
                  <td className="px-4 py-2.5">$420</td>
                  <td className="px-4 py-2.5">$59,580</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv (Scale)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$588</td>
                  <td className="px-4 py-2.5">$59,412</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Buttondown (Standard)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$29/mo</td>
                  <td className="px-4 py-2.5">$348</td>
                  <td className="px-4 py-2.5">$59,652</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mb-4">
            At 500 paid subscribers, Substack&apos;s 10% fee costs $6,000/yr. Ghost Publisher saves $5,580/yr. beehiiv Scale saves $5,412/yr. Buttondown Standard saves $5,652/yr.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">At 2,000 Paid Subscribers ($20,000/mo revenue)</h3>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform Fee</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Total Annual Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Your Net Revenue/yr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                  <td className="px-4 py-2.5">$2,000/mo (10%)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$24,000</td>
                  <td className="px-4 py-2.5">$216,000</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Ghost (Publisher)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$35/mo</td>
                  <td className="px-4 py-2.5">$420</td>
                  <td className="px-4 py-2.5">$239,580</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv (Scale)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$588</td>
                  <td className="px-4 py-2.5">$239,412</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Buttondown (Standard)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$29/mo</td>
                  <td className="px-4 py-2.5">$348</td>
                  <td className="px-4 py-2.5">$239,652</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mb-4">
            At 2,000 paid subscribers, Substack&apos;s 10% fee costs $24,000/yr. Ghost Publisher saves $23,580/yr. That&apos;s enough to hire a part-time editor.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">At 5,000 Paid Subscribers ($50,000/mo revenue)</h3>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform Fee</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Total Annual Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Your Net Revenue/yr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                  <td className="px-4 py-2.5">$5,000/mo (10%)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$60,000</td>
                  <td className="px-4 py-2.5">$540,000</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Ghost (Business)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$239/mo</td>
                  <td className="px-4 py-2.5">$2,868</td>
                  <td className="px-4 py-2.5">$597,132</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv (Max)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$109/mo</td>
                  <td className="px-4 py-2.5">$1,308</td>
                  <td className="px-4 py-2.5">$598,692</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Buttondown (Professional)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                  <td className="px-4 py-2.5">$948</td>
                  <td className="px-4 py-2.5">$599,052</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mb-4">
            At 5,000 paid subscribers, Substack costs $60,000/yr. beehiiv Max saves $58,692/yr. Ghost Business saves $57,132/yr. Buttondown Professional saves $59,052/yr. The 10% fee becomes devastating at scale.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">When Substack Still Makes Sense</h2>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <p className="text-sm text-muted">
              Substack&apos;s 10% fee is expensive, but you get something the others don&apos;t: a built-in discovery network. Substack&apos;s app, recommendations, and Notes feature help writers find new readers. If you&apos;re starting from zero and have no existing audience, Substack&apos;s network can bootstrap your first 500&ndash;1,000 subscribers faster than building on Ghost or beehiiv.
            </p>
            <p className="text-sm text-muted mt-2">
              <strong className="text-foreground">The smart strategy:</strong> Start on Substack to build your initial audience using the network effect. Once you reach 500+ paid subscribers ($500+/mo revenue), migrate to beehiiv or Ghost. At that point, the 10% fee exceeds any flat-rate platform cost.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Platform Strengths Beyond Pricing</h2>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <ul className="list-disc pl-5 text-sm text-muted space-y-2">
              <li><strong className="text-foreground">Ghost</strong> &mdash; Best for control and customization. Open source, custom themes, self-hosting option. Feels like your own publication. Publisher ($35/mo) covers paid subscriptions with 0% fee. Business ($239/mo) adds unlimited staff and priority support.</li>
              <li><strong className="text-foreground">beehiiv</strong> &mdash; Best for growth. Boosts ad network, referral program, and built-in growth tools. Scale ($49/mo) includes everything most creators need. Max ($109/mo) adds API access and advanced analytics for media operations.</li>
              <li><strong className="text-foreground">Substack</strong> &mdash; Best for discovery. Built-in network, app, and recommendations help find readers. $0 upfront, 10% ongoing. Best for writers starting from zero who value network over revenue optimization.</li>
              <li><strong className="text-foreground">Buttondown</strong> &mdash; Best for simplicity and developer-friendliness. Markdown-first, clean interface, full API. Standard ($29/mo) for paid subs, Professional ($79/mo) for full features. Built by a solo developer &mdash; lightweight and focused.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Our Recommendation</h2>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <ul className="list-disc pl-5 text-sm text-muted space-y-2">
              <li><strong className="text-foreground">Starting from scratch:</strong> Substack ($0) for the discovery network, then migrate to beehiiv or Ghost at 500 paid subscribers.</li>
              <li><strong className="text-foreground">Best all-around for paid newsletters:</strong> beehiiv Scale ($49/mo). 0% fee, Boosts ad revenue, referral program, unlimited subscribers.</li>
              <li><strong className="text-foreground">Maximum control and ownership:</strong> Ghost Publisher ($35/mo). Open source, custom themes, 0% fee, self-hosting available.</li>
              <li><strong className="text-foreground">Developer/minimalist:</strong> Buttondown Standard ($29/mo). Markdown-first, clean, 0% fee, full API access on Professional ($79/mo).</li>
            </ul>
          </div>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Substack&apos;s 10% fee actually cost?</h3>
                <p className="text-muted">At $10/month per subscriber: 500 paid subs = $6,000/yr to Substack. 2,000 paid subs = $24,000/yr. 5,000 paid subs = $60,000/yr. Ghost Publisher at $35/mo or beehiiv Scale at $49/mo costs a tiny fraction of this with 0% platform fee.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When does it make financial sense to leave Substack?</h3>
                <p className="text-muted">When your paid subscription revenue exceeds $500/month (roughly 50 paid subscribers at $10/month). At that point, Substack takes $50+/month &mdash; more than Ghost Publisher ($35/mo) or Buttondown Standard ($29/mo) costs in total.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which platform has the best monetization tools?</h3>
                <p className="text-muted">beehiiv Scale ($49/mo) offers the most monetization options: paid subscriptions (0% fee), Boosts ad network (earn $1&ndash;$3 per referred subscriber), and a referral program for growth. Ghost offers paid subscriptions only. Substack offers paid subscriptions plus a discovery network.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Ghost worth it if I&apos;m not technical?</h3>
                <p className="text-muted">Ghost(Pro) managed hosting (starting at $18/mo) handles all technical aspects. You do not need to self-host. The editor is clean and modern. Setup is more involved than Substack but less than building a WordPress site. For paid newsletters, Ghost Publisher ($35/mo) with 0% fee saves thousands compared to Substack.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["ghost", "beehiiv", "substack", "buttondown"]}
            comparisons={["beehiiv-vs-substack", "ghost-vs-substack"]}
            guides={["best-newsletter-paid-subscribers", "beehiiv-growth-path", "migrate-substack-to-beehiiv"]}
          />
        </div>
      </article>
    </>
  );
}
