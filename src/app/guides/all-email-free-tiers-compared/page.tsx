import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Every Email Platform Free Tier in One Table",
  description:
    "Mailchimp, Kit, beehiiv, Brevo, Buttondown, and Substack free tier limits compared. Subscriber limits, send limits, automation availability, and upgrade triggers in one definitive table.",
};

export default function AllEmailFreetiersComparedPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">All Email Free Tiers Compared</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Comparison Matrix
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Every Email Platform Free Tier in One Table
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Six email platforms offer free plans, but the limits vary wildly &mdash; from
            Mailchimp&apos;s cramped 250 contacts to Kit&apos;s generous 10,000 subscribers.
            Here&apos;s every limit, every catch, and every upgrade trigger in one place.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>11 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Definitive Email Free Tier Table</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Sends</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Automations</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">250 contacts</td>
                    <td className="px-4 py-2.5 text-muted">500/mo</td>
                    <td className="px-4 py-2.5 text-muted">Single-step only</td>
                    <td className="px-4 py-2.5 text-muted">1 audience, limited reporting</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit)</td>
                    <td className="px-4 py-2.5 text-muted">10,000 subscribers</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Limited (no visual builder)</td>
                    <td className="px-4 py-2.5 text-muted">No integrations, no sequences</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">2,500 subscribers</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Basic automation</td>
                    <td className="px-4 py-2.5 text-muted">beehiiv branding, no ad network</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                    <td className="px-4 py-2.5 text-muted">100,000 contacts</td>
                    <td className="px-4 py-2.5 text-muted">300/day (~9,000/mo)</td>
                    <td className="px-4 py-2.5 text-muted">No (Standard $18/mo)</td>
                    <td className="px-4 py-2.5 text-muted">Brevo branding, daily send limit</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Buttondown</td>
                    <td className="px-4 py-2.5 text-muted">100 subscribers</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">No (Basic $9/mo)</td>
                    <td className="px-4 py-2.5 text-muted">Very limited features</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">None</td>
                    <td className="px-4 py-2.5 text-muted">10% of paid sub revenue, no custom domain</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Cheapest Paid Upgrade from Each</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest Paid Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What It Unlocks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">Essentials</td>
                    <td className="px-4 py-2.5 text-muted">$13/mo (500 contacts)</td>
                    <td className="px-4 py-2.5 text-muted">Support, A/B testing, 5K sends</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit</td>
                    <td className="px-4 py-2.5 text-muted">Creator</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo (1K subs)</td>
                    <td className="px-4 py-2.5 text-muted">Visual automations, integrations</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">Scale</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited subs, ad network, referrals</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo (5K emails)</td>
                    <td className="px-4 py-2.5 text-muted">No daily limit, basic reporting</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Buttondown</td>
                    <td className="px-4 py-2.5 text-muted">Basic</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited subs, custom domain, automation</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                    <td className="px-4 py-2.5 text-muted">N/A (all free)</td>
                    <td className="px-4 py-2.5 text-muted">$0 (10% rev share)</td>
                    <td className="px-4 py-2.5 text-muted">All features included, revenue share model</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Which Free Tier to Choose</h2>
            <p className="text-muted leading-relaxed mb-3">
              <strong>For creators and newsletters:</strong> beehiiv Launch (2,500 free subscribers, unlimited sends, custom domain) is the best starting point. If you just want to write without thinking about tools, Substack is simpler but takes 10% of paid subscriptions.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              <strong>For e-commerce and transactional email:</strong> Brevo Free (100,000 contacts, 300 sends/day) offers the most contacts by far. The daily send limit is the catch.
            </p>
            <p className="text-muted leading-relaxed">
              <strong>For simple newsletters on a budget:</strong> Kit Newsletter (10,000 subscribers, unlimited sends) is the most generous subscriber count, but lacks automations and integrations until Creator at $39/mo.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which free tier lasts the longest?</h3>
                <p className="text-muted">Kit Newsletter (10,000 subscribers) and Brevo Free (100,000 contacts) last the longest by raw numbers. beehiiv Launch (2,500 subscribers) is the sweet spot of features + limits for most creators. Mailchimp Free (250 contacts) is nearly useless &mdash; you&apos;ll outgrow it in weeks.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Mailchimp count unsubscribed contacts?</h3>
                <p className="text-muted">Yes. Mailchimp counts unsubscribed and non-subscribed contacts toward your contact limit until you manually archive them. This is the contact counting trap that inflates your bill by 20&ndash;40%. beehiiv, Kit, and Buttondown do not count unsubscribes.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "brevo", "buttondown", "substack"]}
            comparisons={["mailchimp-vs-convertkit", "beehiiv-vs-convertkit", "beehiiv-vs-substack"]}
            guides={[
              "best-free-email-tool-2026",
              "how-to-choose-email-platform",
              "when-mailchimp-becomes-expensive",
              "when-beehiiv-scale-beats-launch",
            ]}
          />
        </div>
      </article>
    </>
  );
}
