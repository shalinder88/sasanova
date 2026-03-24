import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Real Cost of Mailchimp: What the Pricing Page Doesn't Show",
  description:
    "Mailchimp's hidden costs decoded: contact counting traps, overage charges, template limitations, transactional email add-ons, the Standard plan jump at 500+ contacts, and annual vs monthly math.",
};

export default function MailchimpHiddenCostsPage() {
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
              Mailchimp Hidden Costs
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Real Cost of Mailchimp: What the Pricing Page Doesn&apos;t Show
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Mailchimp&apos;s pricing page shows plans starting at $13/month. What it doesn&apos;t
            show is how contacts are counted, what happens when you exceed limits, or why
            that $20/month Standard plan becomes $100+ within a few months. This guide
            breaks down every hidden cost so you know the real number before you commit.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Contact Counting */}
          <section>
            <h2 className="text-xl font-bold mb-3">Contact Counting: The Biggest Hidden Cost</h2>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp counts contacts differently than most email platforms, and this is
              where the majority of unexpected charges come from.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Unsubscribed contacts still count.</strong> If
                someone unsubscribes, they remain in your audience and count toward your contact
                limit. You must manually archive or permanently delete them to stop paying. Most
                users don&apos;t know this and overpay for months.
              </li>
              <li>
                <strong className="text-foreground">Non-subscribed contacts count.</strong> People who
                interacted with your store but never opted in (e.g., abandoned cart captures) are
                &quot;non-subscribed&quot; contacts. They count toward your total.
              </li>
              <li>
                <strong className="text-foreground">Duplicate contacts across audiences count twice.</strong> If
                you have the same email address in two different audiences, Mailchimp counts
                them as two contacts. This catches e-commerce stores with separate audiences for
                different product lines.
              </li>
              <li>
                <strong className="text-foreground">Cleaned contacts still count.</strong> Addresses that
                bounced and were marked &quot;cleaned&quot; remain in your audience by default.
                They can&apos;t receive email, but you still pay for them.
              </li>
            </ul>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">The real impact</p>
              <p className="text-sm text-muted">
                A typical list of 2,000 &quot;active&quot; subscribers often has 2,800&ndash;3,500
                total contacts when you count unsubscribed, cleaned, and non-subscribed records.
                That&apos;s the difference between a $20/month plan and a $45/month plan. Over a
                year, you&apos;re paying $300 extra for contacts who will never receive an email.
              </p>
            </div>
          </section>

          {/* Overage Charges */}
          <section>
            <h2 className="text-xl font-bold mb-3">Overage Charges That Hit Without Warning</h2>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp handles overages differently depending on whether you exceed your
              contact limit or your send limit.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Contact overages auto-upgrade your plan.</strong> If you
                cross a contact tier mid-cycle, Mailchimp automatically bumps you to the next
                tier and charges the prorated difference. You don&apos;t get a warning before the
                charge. You can&apos;t opt out. The upgrade is immediate.
              </li>
              <li>
                <strong className="text-foreground">Send overages on paid plans.</strong> Essentials allows
                10x your contact limit in monthly sends. Standard allows 12x. If you exceed
                these, Mailchimp pauses your campaign until the next billing cycle or you buy
                additional send credits.
              </li>
              <li>
                <strong className="text-foreground">Free plan hard caps.</strong> At 500 sends/month and
                250 contacts, the free plan gives you almost no room. A weekly newsletter to
                250 people uses your entire monthly allocation in a single month.
              </li>
            </ul>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Contact Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Essentials</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Standard</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">500</td>
                    <td className="px-4 py-2.5 text-muted">$13/mo</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">$350/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">1,500</td>
                    <td className="px-4 py-2.5 text-muted">$30/mo</td>
                    <td className="px-4 py-2.5 text-muted">$45/mo</td>
                    <td className="px-4 py-2.5 text-muted">$350/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">2,500</td>
                    <td className="px-4 py-2.5 text-muted">$40/mo</td>
                    <td className="px-4 py-2.5 text-muted">$60/mo</td>
                    <td className="px-4 py-2.5 text-muted">$350/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-4 py-2.5 text-muted">$75/mo</td>
                    <td className="px-4 py-2.5 text-muted">$100/mo</td>
                    <td className="px-4 py-2.5 text-muted">$350/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-4 py-2.5 text-muted">$110/mo</td>
                    <td className="px-4 py-2.5 text-muted">$140/mo</td>
                    <td className="px-4 py-2.5 text-muted">$350/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                    <td className="px-4 py-2.5 text-muted">$260/mo</td>
                    <td className="px-4 py-2.5 text-muted">$310/mo</td>
                    <td className="px-4 py-2.5 text-muted">$410/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-4 py-2.5 text-muted">$385/mo</td>
                    <td className="px-4 py-2.5 text-muted">$450/mo</td>
                    <td className="px-4 py-2.5 text-muted">$620/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Notice how Standard at 5,000 contacts ($100/month) is 5x what you signed up for at
              500 contacts ($20/month). This progression catches most growing businesses within
              6&ndash;12 months.
            </p>
          </section>

          {/* Template Limitations */}
          <section>
            <h2 className="text-xl font-bold mb-3">Template Limitations on the Free Plan</h2>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp&apos;s free plan has quietly restricted its template library over the
              past two years. Here is what you actually get:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Only basic templates.</strong> Free plan users get
                access to a handful of basic, single-column layouts. The branded, multi-column,
                e-commerce-ready templates require Essentials or higher.
              </li>
              <li>
                <strong className="text-foreground">No saved templates on Free.</strong> You cannot save
                email templates for reuse on the Free plan. Every campaign starts from scratch or
                from a basic layout. This alone wastes hours per month for regular senders.
              </li>
              <li>
                <strong className="text-foreground">Mailchimp branding.</strong> Every email sent from the
                Free plan includes a Mailchimp badge in the footer. Removing it requires
                Essentials ($13/month minimum).
              </li>
              <li>
                <strong className="text-foreground">No email scheduling on Free.</strong> You cannot
                schedule emails for future delivery. You must send immediately, which means
                you can&apos;t optimize for time zones or send during business hours unless
                you&apos;re online at that moment.
              </li>
            </ul>
          </section>

          {/* Transactional Email */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Transactional Email Add-On</h2>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp&apos;s transactional email service (formerly Mandrill) is a separate
              product with separate pricing. It is not included in any plan.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Blocks of 25,000 emails for $20.</strong> Transactional
                emails (order confirmations, password resets, shipping notifications) cost
                $20 per 25,000-email block. That&apos;s $0.80 per 1,000 emails.
              </li>
              <li>
                <strong className="text-foreground">Requires a paid Mailchimp plan.</strong> You cannot
                use transactional email on the Free plan. You need at least Essentials ($13/month)
                plus the transactional add-on.
              </li>
              <li>
                <strong className="text-foreground">Dedicated IP costs extra.</strong> If you need a
                dedicated IP for transactional email deliverability, that&apos;s an additional
                $29.95/month per IP address.
              </li>
            </ul>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">The alternative math</p>
              <p className="text-sm text-muted">
                Brevo (formerly Sendinblue) includes transactional email in all plans, including
                free. Postmark charges $1.25 per 1,000 transactional emails with better
                deliverability. If you send 10,000 transactional emails per month, Mailchimp costs
                $20/month for the block plus your marketing plan. Brevo includes it at $0 extra.
              </p>
            </div>
          </section>

          {/* The Standard Plan Trap */}
          <section>
            <h2 className="text-xl font-bold mb-3">The &quot;Standard&quot; Plan Trap at 500+ Contacts</h2>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp&apos;s Standard plan is marketed as the &quot;recommended&quot; option.
              It starts at $20/month for 500 contacts. Here is why the real cost is much higher:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">500 contacts is nothing.</strong> A single lead magnet
                or product launch can generate 500 email addresses in a week. You&apos;ll cross
                this threshold almost immediately if you&apos;re doing any active marketing.
              </li>
              <li>
                <strong className="text-foreground">The jump from 500 to 2,500 contacts.</strong> Standard
                goes from $20/month (500 contacts) to $60/month (2,500 contacts). That&apos;s a 3x
                increase for 5x the contacts. By the time you hit 5,000 contacts, you&apos;re at
                $100/month.
              </li>
              <li>
                <strong className="text-foreground">Standard features you may not need.</strong> Standard
                includes send-time optimization, behavioral targeting, and custom templates. These
                are useful, but if you primarily send newsletters, Essentials covers what you need
                at a lower base price. Mailchimp defaults new signups to Standard because the
                margin is higher.
              </li>
              <li>
                <strong className="text-foreground">The automation gap.</strong> Standard includes
                &quot;pre-built automations&quot; and the customer journey builder. But complex
                multi-step automations and branching logic are limited compared to what ActiveCampaign
                or Kit offer at similar price points.
              </li>
            </ul>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Contacts</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Standard</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Kit Creator</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Brevo Starter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">500</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">$33/mo</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">2,500</td>
                    <td className="px-4 py-2.5 text-muted">$60/mo</td>
                    <td className="px-4 py-2.5 text-muted">$50/mo</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-4 py-2.5 text-muted">$100/mo</td>
                    <td className="px-4 py-2.5 text-muted">$66/mo</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-4 py-2.5 text-muted">$140/mo</td>
                    <td className="px-4 py-2.5 text-muted">$100/mo</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                    <td className="px-4 py-2.5 text-muted">$310/mo</td>
                    <td className="px-4 py-2.5 text-muted">$190/mo</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed text-sm">
              Note: Brevo prices by email sends (5,000/mo on Starter), not contacts. If you send
              infrequently, Brevo is dramatically cheaper. Kit prices by subscribers but includes
              unlimited sends on paid plans.
            </p>
          </section>

          {/* Annual vs Monthly */}
          <section>
            <h2 className="text-xl font-bold mb-3">Annual vs. Monthly: The Savings Math</h2>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp offers a discount for paying annually. Here is the actual math and why
              it&apos;s not always a good deal:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan (500 contacts)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Total</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Essentials</td>
                    <td className="px-4 py-2.5 text-muted">$13/mo ($156/yr)</td>
                    <td className="px-4 py-2.5 text-muted">$13/mo</td>
                    <td className="px-4 py-2.5 text-muted">$156/yr</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo ($240/yr)</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">$240/yr</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Premium</td>
                    <td className="px-4 py-2.5 text-muted">$350/mo ($4,200/yr)</td>
                    <td className="px-4 py-2.5 text-muted">$350/mo</td>
                    <td className="px-4 py-2.5 text-muted">$4,200/yr</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp&apos;s current published pricing shows the same effective rates monthly
              and annually at the base tiers. The &quot;savings&quot; from annual billing
              primarily comes from locking in a contact tier. If your list grows mid-year on a
              monthly plan, your bill increases incrementally each month. On annual, you prepay
              for a fixed contact tier.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">The annual trap</p>
              <p className="text-sm text-muted">
                If you sign an annual plan at 500 contacts and your list grows to 5,000 within
                6 months, you still get charged the overage. Annual billing doesn&apos;t protect
                you from contact tier jumps. It just removes the option to cancel monthly if
                you decide Mailchimp isn&apos;t right. Start monthly until your list size
                stabilizes.
              </p>
            </div>
          </section>

          {/* Who Should NOT Use This Guide */}
          <section>
            <h2 className="text-xl font-bold mb-3">Who Should NOT Use This Guide</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Enterprise companies on negotiated contracts.</strong> If
                you&apos;re sending millions of emails monthly, Mailchimp offers custom pricing
                that doesn&apos;t follow the published tiers. This guide covers standard
                published pricing.
              </li>
              <li>
                <strong className="text-foreground">Shopify stores using Mailchimp&apos;s e-commerce
                integration deeply.</strong> If your entire marketing stack is built around
                Mailchimp + Shopify product recommendations, the switching cost may outweigh the
                savings. Evaluate the integration depth before deciding.
              </li>
              <li>
                <strong className="text-foreground">Teams who only send a monthly newsletter.</strong> If
                you send one email per month to under 500 people, Mailchimp Free or Essentials
                is genuinely fine. The hidden costs primarily affect growing lists and frequent
                senders.
              </li>
            </ul>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Not archiving unsubscribed contacts.</strong> This is
                the single most common overpayment. Go to Audience &rarr; All Contacts &rarr;
                filter by Unsubscribed &rarr; select all &rarr; Archive. Do this monthly.
              </li>
              <li>
                <strong className="text-foreground">Using multiple audiences instead of tags.</strong> Every
                duplicate contact costs money. Use one audience with tags and segments instead of
                separate audiences for different products or campaigns.
              </li>
              <li>
                <strong className="text-foreground">Choosing Standard when Essentials is enough.</strong> Mailchimp
                recommends Standard by default. If you don&apos;t need behavioral targeting,
                send-time optimization, or the customer journey builder, Essentials saves
                $7&ndash;$70+ per month depending on list size.
              </li>
              <li>
                <strong className="text-foreground">Not comparing at your actual list size.</strong> Mailchimp
                looks competitive at 500 contacts. At 10,000 contacts, Kit, Brevo, and beehiiv
                are significantly cheaper. Always compare at the list size you expect to reach
                in 12 months, not your current size.
              </li>
              <li>
                <strong className="text-foreground">Ignoring the transactional email cost.</strong> If
                you need order confirmations, password resets, or shipping notifications,
                factor in the Mandrill/transactional add-on cost from day one. It&apos;s not
                optional for e-commerce.
              </li>
            </ul>
          </section>

          {/* The Bottom Line */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp is not overpriced at small scale. At 500 contacts on Essentials, $13/month
              is fair for what you get. The problem is the growth curve. Mailchimp&apos;s pricing
              scales faster than almost any competitor, and the contact counting methodology
              inflates your bill with people who will never receive an email.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              If your list is growing, run the numbers at 5,000, 10,000, and 25,000 contacts. Compare
              those numbers against Kit, Brevo, and beehiiv. In most cases, Mailchimp is the most
              expensive option at every tier above 2,500 contacts. The only reason to stay is if
              you&apos;re deeply integrated with Mailchimp&apos;s e-commerce features or your
              team is too invested in the interface to switch.
            </p>
            <p className="text-muted leading-relaxed">
              If you decide to leave, archive your unsubscribed contacts first, export your list
              with tags intact, and test deliverability on the new platform before fully cutting
              over. The migration is not hard &mdash; the decision to start is the hard part.
            </p>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do unsubscribed contacts really count toward my bill?</h3>
                <p className="text-muted">Yes. Unsubscribed contacts remain in your audience and count toward your contact limit unless you manually archive or permanently delete them. This is Mailchimp&apos;s most commonly missed billing detail. Check your audience for unsubscribed contacts monthly.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Mailchimp actually cost at 10,000 subscribers?</h3>
                <p className="text-muted">On Standard, $140/month ($1,680/year). On Essentials, $110/month ($1,320/year). Add transactional email if needed ($20 per 25,000 block). The real cost also depends on how many non-active contacts inflate your total count beyond your subscriber count.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Mailchimp still worth it for small lists?</h3>
                <p className="text-muted">Under 500 active contacts with simple newsletter needs, Mailchimp Essentials at $13/month is reasonable. But Kit offers a free plan for up to 10,000 subscribers with limited features, and beehiiv&apos;s free tier supports 2,500 subscribers. For pure newsletters, there are cheaper options at every size.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the cheapest way to use Mailchimp?</h3>
                <p className="text-muted">Use one audience (not multiple). Archive unsubscribed and cleaned contacts monthly. Use Essentials instead of Standard unless you specifically need behavioral targeting. Avoid the transactional email add-on if you can use a separate service like Postmark or Brevo for transactional sends.</p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
