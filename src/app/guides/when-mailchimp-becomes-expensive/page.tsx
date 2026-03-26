import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "The Exact Subscriber Count Where Mailchimp Becomes a Bad Deal",
  description:
    "Mailchimp pricing compared to beehiiv and Kit at every subscriber tier from 500 to 50,000. Exact dollar savings, the contact counting trap, and when to switch.",
};

export default function WhenMailchimpBecomesExpensive() {
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
              When Mailchimp Becomes Expensive
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
            The Exact Subscriber Count Where Mailchimp Becomes a Bad Deal
          </h1>
          <p className="text-lg text-muted">
            Mailchimp&apos;s pricing scales with your subscriber count. So do alternatives like beehiiv and Kit &mdash; but at wildly different rates. This guide shows the exact subscriber thresholds where Mailchimp stops being competitive, with dollar-for-dollar comparisons at every tier.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from Mailchimp, beehiiv, and Kit vendor pages"
          sourceCount={4}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Under 500 Subscribers: Free Tier Comparison</h2>
          <p className="text-muted mb-4">
            At the smallest scale, every platform offers a free plan. But they&apos;re not equal:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier Limit</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Email Sends</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Limitation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp Free</td>
                  <td className="px-4 py-2.5">250 contacts</td>
                  <td className="px-4 py-2.5">500 emails/mo</td>
                  <td className="px-4 py-2.5">Mailchimp branding, no scheduling</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Kit Free</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">10,000 subscribers</td>
                  <td className="px-4 py-2.5">Unlimited broadcasts</td>
                  <td className="px-4 py-2.5">No visual automation builder</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Free</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">2,500 subscribers</td>
                  <td className="px-4 py-2.5">Unlimited sends</td>
                  <td className="px-4 py-2.5">beehiiv branding, no custom domain email</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Verdict at &lt;500 subscribers</p>
            <p className="text-sm text-muted">
              Mailchimp Free caps at 250 contacts &mdash; you&apos;ll outgrow it almost immediately. Kit Free supports 10,000 subscribers with unlimited broadcasts. beehiiv Free supports 2,500 subscribers. Both are strictly better at this tier. Mailchimp&apos;s free plan was gutted in 2023 and is no longer competitive.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Exact Thresholds: Mailchimp vs. beehiiv at Every Tier</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Standard</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Savings</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">2,500</td>
                  <td className="px-4 py-2.5">$20/mo</td>
                  <td className="px-4 py-2.5">Free ($0/mo)</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$20/mo</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$240/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                  <td className="px-4 py-2.5">$55/mo</td>
                  <td className="px-4 py-2.5">Scale $49/mo</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$6/mo</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$72/yr</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                  <td className="px-4 py-2.5">$100/mo</td>
                  <td className="px-4 py-2.5">Scale $49/mo</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$51/mo</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$612/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                  <td className="px-4 py-2.5">$230/mo</td>
                  <td className="px-4 py-2.5">Scale $49/mo</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$181/mo</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$2,172/yr</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                  <td className="px-4 py-2.5">$385/mo</td>
                  <td className="px-4 py-2.5">Max $109/mo</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$276/mo</td>
                  <td className="px-4 py-2.5 text-green-400 font-bold">$3,312/yr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            The gap widens as you grow. At 10,000 subscribers, beehiiv saves $612/year. At 50,000 subscribers, the savings hit <strong className="text-foreground">$3,312/year</strong>. Mailchimp&apos;s pricing scales linearly with your list. beehiiv&apos;s pricing has flat tiers that absorb growth.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Contact Counting Trap</h2>
          <p className="text-muted mb-4">
            Mailchimp counts contacts differently from most email platforms, and this is where hidden costs appear:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Unsubscribed contacts count toward your limit.</strong> If someone unsubscribes, Mailchimp keeps them in your audience and charges you for them. You have to manually archive or delete unsubscribed contacts to stop paying for them.</li>
            <li><strong className="text-foreground">Non-subscribed contacts count too.</strong> Contacts who were added via e-commerce integrations or API but never opted in still count toward your contact tier.</li>
            <li><strong className="text-foreground">Duplicates across audiences count multiple times.</strong> If the same email exists in two different audiences, Mailchimp counts them as two contacts.</li>
            <li><strong className="text-foreground">Archived contacts don&apos;t count</strong> &mdash; but archiving them removes all their data (tags, activity, custom fields). You can&apos;t just &ldquo;pause&rdquo; a contact.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Real-world impact</p>
            <p className="text-sm text-muted">
              A newsletter with 10,000 subscribers might have 12,000&ndash;15,000 total contacts in Mailchimp after accounting for unsubscribes and non-subscribed contacts. That pushes you from the $100/mo tier into the $150&ndash;$170/mo tier. On beehiiv, you pay based on active subscribers only. The contact counting difference alone can add 20&ndash;40% to your real Mailchimp bill.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When Mailchimp Still Wins</h2>
          <p className="text-muted mb-4">
            Mailchimp is not always the wrong choice. It&apos;s still competitive when:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">You need e-commerce integrations.</strong> Mailchimp&apos;s Shopify, WooCommerce, and BigCommerce integrations are mature. Product recommendations, abandoned cart emails, and purchase-based segmentation work out of the box.</li>
            <li><strong className="text-foreground">You need a visual automation builder (and don&apos;t want to pay for beehiiv Max).</strong> Mailchimp&apos;s automation builder on Standard ($20/mo+) is more capable than beehiiv Scale&apos;s automation features.</li>
            <li><strong className="text-foreground">Your team already knows Mailchimp.</strong> Switching cost is real. If your team is productive on Mailchimp and your list is under 5,000, the savings from switching may not justify the retraining time.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">What to Do Instead</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Decision framework by subscriber count:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li><strong className="text-foreground">Under 2,500 subscribers:</strong> Use beehiiv Free or Kit Free. Both are superior to Mailchimp Free (which caps at 250 contacts). Zero reason to start on Mailchimp in 2026.</li>
              <li><strong className="text-foreground">2,500&ndash;10,000 subscribers:</strong> beehiiv Scale ($49/mo) matches or beats Mailchimp Standard at every contact tier. Kit Creator ($25/mo for up to 1,000 subs, scaling up) is also competitive.</li>
              <li><strong className="text-foreground">10,000&ndash;50,000 subscribers:</strong> beehiiv Scale at $49/mo saves $612&ndash;$3,312/year vs. Mailchimp Standard. This is the range where switching pays for itself within 1&ndash;2 months.</li>
              <li><strong className="text-foreground">50,000+ subscribers:</strong> beehiiv Max ($109/mo) vs. Mailchimp Standard ($385/mo). Annual savings of $3,312. At this scale, the migration effort is a rounding error compared to the cost difference.</li>
            </ul>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Before you switch:</strong> Export your full subscriber list from Mailchimp (Audience &rarr; All contacts &rarr; Export), including tags and custom fields. Clean the list first &mdash; remove unsubscribed contacts, bounces, and anyone who hasn&apos;t opened an email in 6+ months. A clean migration is worth more than a fast one.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Mailchimp really count unsubscribed contacts?</h3>
                <p className="text-muted">Yes. Unsubscribed contacts remain in your audience and count toward your contact tier unless you manually archive or permanently delete them. This is Mailchimp&apos;s most criticized pricing policy. Other platforms like beehiiv and Kit only count active subscribers.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is beehiiv really $49/mo for up to 25,000 subscribers?</h3>
                <p className="text-muted">Yes. beehiiv Scale is $49/month and supports up to 100,000 subscribers on the current pricing page. The price does not increase with subscriber count within the tier. beehiiv Max at $109/month adds custom email domains, priority support, and advanced analytics.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What about Kit (ConvertKit) pricing?</h3>
                <p className="text-muted">Kit Free supports up to 10,000 subscribers with unlimited broadcasts but no visual automation builder. Kit Creator starts at $25/month for up to 1,000 subscribers and scales based on subscriber count. At 10,000 subscribers Kit Creator is roughly $100/month &mdash; similar to Mailchimp Standard but with better creator-focused features.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How hard is it to migrate from Mailchimp?</h3>
                <p className="text-muted">Subscriber list migration takes 1&ndash;2 hours (export CSV, clean it, import to new platform). The harder parts are rebuilding automations (1&ndash;3 days), updating signup forms on your website, and warming your new sending domain (1&ndash;2 weeks of gradually increasing sends). Total realistic timeline: 2&ndash;3 weeks for a clean migration.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "beehiiv", "kit"]}
            comparisons={["mailchimp-vs-beehiiv", "mailchimp-vs-convertkit"]}
            guides={["mailchimp-hidden-costs", "migrate-mailchimp-to-beehiiv", "saas-pricing-traps-2026"]}
          />
        </div>
      </article>
    </>
  );
}
