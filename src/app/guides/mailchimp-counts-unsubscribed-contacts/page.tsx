import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Mailchimp Counts Unsubscribed Contacts: What It Costs You",
  description:
    "Mailchimp bills you for unsubscribed, cleaned, and non-subscribed contacts. Learn the exact mechanic, how it inflates your bill by 20-40%, and how to clean your list to stop overpaying.",
};

export default function MailchimpCountsUnsubscribedContactsPage() {
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
              Mailchimp Counts Unsubscribed Contacts
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Gotcha
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Mailchimp Counts Unsubscribed Contacts: What It Costs You
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Mailchimp bills you for every contact in your audience &mdash; including people
            who unsubscribed, bounced, or never opted in. This single mechanic inflates the
            average Mailchimp bill by 20&ndash;40%. Here&apos;s exactly how it works, what it
            costs at every tier, and how to clean your list in under 10 minutes.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>11 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Mechanic */}
          <section>
            <h2 className="text-xl font-bold mb-3">How Mailchimp Counts Contacts</h2>
            <p className="text-muted leading-relaxed mb-3">
              Most email platforms count &quot;active subscribers&quot; &mdash; the people who can
              actually receive your emails. Mailchimp counts total audience contacts. That includes
              four categories of people who will never see your next campaign:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Unsubscribed contacts.</strong> Someone clicked
                &quot;unsubscribe&quot; but remains in your audience. They count toward your contact
                limit and your bill. Mailchimp does not auto-archive them.
              </li>
              <li>
                <strong className="text-foreground">Cleaned (bounced) contacts.</strong> Addresses that
                hard-bounced and were marked &quot;cleaned.&quot; They cannot receive email, but they
                remain in your audience count by default.
              </li>
              <li>
                <strong className="text-foreground">Non-subscribed contacts.</strong> People who interacted
                with your Shopify store or landing page but never opted in. Mailchimp imports them as
                &quot;non-subscribed&quot; and bills you for them.
              </li>
              <li>
                <strong className="text-foreground">Duplicate contacts across audiences.</strong> The same
                email in two audiences counts as two contacts. E-commerce stores with multiple audiences
                get hit hardest.
              </li>
            </ul>
          </section>

          {/* Cost Impact */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Exact Cost at Every Tier</h2>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp&apos;s pricing scales with contact count. Here&apos;s what the contact
              inflation actually costs you at each plan level:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Base Price (500 contacts)</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">At 2,500 contacts</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">At 10,000 contacts</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Free</td>
                    <td className="px-4 py-3">$0/mo (250 contacts max)</td>
                    <td className="px-4 py-3">Not available</td>
                    <td className="px-4 py-3">Not available</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Essentials</td>
                    <td className="px-4 py-3">$13/mo</td>
                    <td className="px-4 py-3">$45/mo</td>
                    <td className="px-4 py-3">$110/mo</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Standard</td>
                    <td className="px-4 py-3">$20/mo</td>
                    <td className="px-4 py-3">$60/mo</td>
                    <td className="px-4 py-3">$140/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Premium</td>
                    <td className="px-4 py-3">$350/mo (10,000 contacts)</td>
                    <td className="px-4 py-3">$350/mo</td>
                    <td className="px-4 py-3">$350/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">The inflation math</p>
              <p className="text-sm text-muted">
                If you have 2,000 active subscribers but 2,800 total contacts (including 500
                unsubscribed + 300 cleaned), you&apos;re paying for the 2,500+ tier instead of
                the 2,000 tier. On Standard, that&apos;s $60/mo instead of $45/mo &mdash; an
                extra $180/year for contacts who will never receive your emails.
              </p>
            </div>
          </section>

          {/* How to Clean */}
          <section>
            <h2 className="text-xl font-bold mb-3">How to Clean Your List in 10 Minutes</h2>
            <p className="text-muted leading-relaxed mb-3">
              Removing these phantom contacts is straightforward, but Mailchimp does not make it
              obvious. Here is the step-by-step process:
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-muted mb-4">
              <li>
                <strong className="text-foreground">Archive unsubscribed contacts.</strong> Go to
                Audience &rarr; All Contacts &rarr; filter by Status: Unsubscribed. Select all,
                then click Actions &rarr; Archive. This removes them from your contact count
                immediately.
              </li>
              <li>
                <strong className="text-foreground">Archive cleaned contacts.</strong> Same process:
                filter by Status: Cleaned. Select all and archive. These addresses already bounced,
                so there is zero downside.
              </li>
              <li>
                <strong className="text-foreground">Review non-subscribed contacts.</strong> Filter by
                Status: Non-subscribed. These are people who interacted with your store but never
                opted in. Archive anyone you do not intend to re-engage.
              </li>
              <li>
                <strong className="text-foreground">Consolidate audiences.</strong> If you have multiple
                audiences with overlapping contacts, merge them into one audience using tags to
                differentiate segments. This eliminates duplicate billing.
              </li>
              <li>
                <strong className="text-foreground">Set a monthly reminder.</strong> Contact inflation
                creeps back every month as new people unsubscribe or bounce. Schedule a monthly
                cleanup to keep your bill accurate.
              </li>
            </ol>
          </section>

          {/* Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-3">How Other Platforms Handle This</h2>
            <p className="text-muted leading-relaxed mb-3">
              Not every email platform counts contacts this way. Here is how the alternatives compare:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Brevo:</strong> Charges by emails sent, not contacts
                stored. You can have 100,000 contacts on the free plan. Unsubscribed contacts cost you
                nothing. Starter is $9/mo for 5,000 emails/mo.
              </li>
              <li>
                <strong className="text-foreground">Kit (ConvertKit):</strong> Only counts active
                subscribers. Unsubscribed contacts are automatically excluded from billing. Free for
                up to 10,000 subscribers (limited features); Creator at $39/mo for 1,000 subscribers.
              </li>
              <li>
                <strong className="text-foreground">beehiiv:</strong> Counts subscribers, not total
                contacts. Unsubscribes do not count. Free Launch plan supports 2,500 subscribers;
                Scale is $49/mo for unlimited subscribers.
              </li>
              <li>
                <strong className="text-foreground">ActiveCampaign:</strong> Counts active contacts only.
                Unsubscribes and bounces are excluded from billing. Starter at $15/mo for 1,000
                contacts; Plus at $49/mo.
              </li>
            </ul>
          </section>

          {/* When to Leave */}
          <section>
            <h2 className="text-xl font-bold mb-3">When This Should Make You Switch</h2>
            <p className="text-muted leading-relaxed mb-3">
              If more than 20% of your Mailchimp audience consists of unsubscribed, cleaned, or
              non-subscribed contacts, you are paying a meaningful premium for a billing model that
              penalizes you for normal list churn. At 5,000+ total contacts where 30% are inactive,
              the overpayment on Mailchimp Standard becomes $20&ndash;$40/mo compared to platforms
              that only count active subscribers.
            </p>
            <p className="text-muted leading-relaxed">
              The contact counting mechanic is not a bug &mdash; it is how Mailchimp&apos;s revenue
              model works. If you are disciplined about monthly cleanup, the impact is manageable.
              If you are not, switching to a platform with fairer counting (Brevo, Kit, or beehiiv)
              will save you hundreds per year.
            </p>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does archiving contacts in Mailchimp delete their data?</h3>
                <p className="text-muted">No. Archiving removes them from your active audience and contact count, but Mailchimp retains their data. You can re-import archived contacts later if needed. Permanent deletion is separate and irreversible.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How often should I clean my Mailchimp audience?</h3>
                <p className="text-muted">Monthly. Every month, unsubscribes and bounces accumulate. A monthly cleanup keeps your contact count accurate and prevents surprise charges when you cross a pricing tier threshold.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What does Mailchimp Free actually include?</h3>
                <p className="text-muted">Mailchimp Free supports up to 250 contacts and 500 sends per month with limited automations and basic templates. Once you exceed 250 contacts (including unsubscribed ones), you must upgrade to Essentials at $13/mo.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I prevent non-subscribed contacts from being added?</h3>
                <p className="text-muted">If you use Mailchimp&apos;s e-commerce integrations (like Shopify), non-subscribed contacts are added automatically. You can disable this in the integration settings, but it limits your ability to send targeted product emails to those customers.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "brevo", "convertkit", "beehiiv"]}
            comparisons={["mailchimp-vs-convertkit", "mailchimp-vs-brevo", "mailchimp-vs-beehiiv"]}
            guides={["mailchimp-hidden-costs", "when-mailchimp-becomes-expensive", "migrate-from-mailchimp"]}
          />
        </div>
      </article>
    </>
  );
}
