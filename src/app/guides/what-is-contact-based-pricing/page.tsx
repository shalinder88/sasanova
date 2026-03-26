import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Contact-Based Pricing Explained: Why Your Email Bill Keeps Growing",
  description:
    "How contact-based email pricing works, why Mailchimp counts unsubscribes, cost projections at 1K to 50K contacts, and exact prices for Mailchimp, Kit, ActiveCampaign, Brevo, and beehiiv.",
};

export default function WhatIsContactBasedPricingPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">What Is Contact-Based Pricing</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Explainer
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Contact-Based Pricing Explained: Why Your Email Bill Keeps Growing
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Contact-based pricing means your email marketing bill grows as your audience grows.
            Sounds fair &mdash; until you learn that Mailchimp counts unsubscribed contacts
            toward your bill, and that a 10,000-subscriber list can cost anywhere from $0/month
            (beehiiv) to $100+/month (Mailchimp) depending on which platform you choose.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">How Contact Counting Works (It Varies by Platform)</h2>
            <p className="text-muted leading-relaxed mb-4">
              Not all &ldquo;contacts&rdquo; are counted equally. The definition directly
              affects your bill.
            </p>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Mailchimp:</strong> Counts ALL contacts in your audience, including unsubscribed and non-subscribed contacts. A list of 5,000 with 1,000 unsubscribes? You pay for 5,000. This inflates bills by 20&ndash;40% for most users.</li>
              <li><strong className="text-foreground">Kit (ConvertKit):</strong> Counts active subscribers only. Unsubscribes and bounces do not count toward your limit. Much fairer.</li>
              <li><strong className="text-foreground">ActiveCampaign:</strong> Counts contacts on any list. Contacts on multiple lists count once. Unsubscribes can be excluded by archiving.</li>
              <li><strong className="text-foreground">Brevo:</strong> Does NOT charge by contacts at all. Brevo charges by emails sent. Unlimited contacts on every plan, including Free. This is the most generous model for large lists.</li>
              <li><strong className="text-foreground">beehiiv:</strong> Counts subscribers. Launch (free) caps at 2,500. Scale ($49/month) is unlimited. No contact counting games.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Cost Projections: 1K to 50K Contacts</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform &amp; Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">1K</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5K</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10K</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">25K</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">50K</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp Standard</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">$75/mo</td>
                    <td className="px-4 py-2.5 text-muted">$110/mo</td>
                    <td className="px-4 py-2.5 text-muted">$230/mo</td>
                    <td className="px-4 py-2.5 text-muted">$385/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit Creator</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo</td>
                    <td className="px-4 py-2.5 text-muted">$79/mo</td>
                    <td className="px-4 py-2.5 text-muted">$119/mo</td>
                    <td className="px-4 py-2.5 text-muted">$199/mo</td>
                    <td className="px-4 py-2.5 text-muted">$379/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign Starter</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$79/mo</td>
                    <td className="px-4 py-2.5 text-muted">$145/mo</td>
                    <td className="px-4 py-2.5 text-muted">$259/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo Standard</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm mb-4">
              *Brevo Standard at $18/mo includes 5,000 emails/month. For 50K contacts, you&apos;d
              need higher email volume which increases the plan price. The contact count itself
              is free.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              At 25,000 contacts, Mailchimp Standard costs $230/month ($2,760/year). beehiiv Scale
              costs $49/month ($588/year). That&apos;s $2,172/year in savings &mdash; for unlimited
              subscribers with no contact-counting games.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Mailchimp Contact Counting Trap</h2>
            <p className="text-muted leading-relaxed mb-4">
              Mailchimp counts non-subscribed and unsubscribed contacts in your audience toward
              your billing limit. A typical list has 15&ndash;25% inactive or unsubscribed
              contacts that you can&apos;t send to but still pay for. At 10,000 contacts with
              20% unsubscribes, you&apos;re paying for 2,000 contacts that provide zero value.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The fix:</strong> Regularly archive or delete
              unsubscribed contacts in Mailchimp. Go to Audience &gt; Manage Contacts &gt;
              Unsubscribed and archive them. This directly reduces your bill. Or switch to a
              platform that doesn&apos;t count them (Kit, beehiiv, Brevo).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Alternative: Email-Volume Pricing</h2>
            <p className="text-muted leading-relaxed mb-4">
              Brevo charges by emails sent, not contacts stored. You can have 100,000 contacts
              and pay $0 for storing them. You only pay based on how many emails you actually
              send. Brevo Free gives 300 emails/day (about 9,000/month). Starter at $9/month
              gives 5,000 emails/month. Standard at $18/month gives 5,000 emails/month with
              automation.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              For businesses with large contact lists but low email frequency (agencies,
              consultants, event-based businesses), email-volume pricing saves significantly
              compared to contact-based pricing.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why does Mailchimp count unsubscribes?</h3>
                <p className="text-muted">Revenue. Counting all contacts in the audience (including unsubscribes) inflates the billable count. Mailchimp&apos;s official position is that unsubscribed contacts are still stored and managed. The practical effect is you pay for people you can&apos;t email.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">At what list size does contact-based pricing hurt most?</h3>
                <p className="text-muted">Above 5,000 contacts. Below that, most platforms are under $50/month regardless of model. Above 10,000, the gap between Mailchimp ($110/month) and beehiiv ($49/month) becomes significant. Above 25,000, flat-rate options save $1,000+/year.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Brevo&apos;s email-volume model always cheaper?</h3>
                <p className="text-muted">For large lists with moderate email frequency, yes. If you send daily emails to your entire list (high volume), Brevo&apos;s per-email pricing can catch up. At 50K contacts sending 4x/month = 200K emails, you&apos;d need the Professional tier ($499/month). But for most use cases under 25K contacts, Brevo is cheaper than Mailchimp.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "activecampaign", "brevo"]}
            comparisons={["mailchimp-vs-beehiiv", "mailchimp-vs-convertkit", "mailchimp-vs-brevo"]}
            guides={[
              "email-marketing-annual-cost-2026",
              "when-mailchimp-becomes-expensive",
              "saas-pricing-models-explained",
              "saas-pricing-terms-glossary",
            ]}
          />
        </div>
      </article>
    </>
  );
}
