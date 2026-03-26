import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Marketing Costs in 2026: What You'll Actually Pay",
  description:
    "Annual cost comparison of Mailchimp, Kit, beehiiv, ActiveCampaign, and Brevo at every subscriber tier from 1K to 100K. Real plan names, hidden fees, and best-value verdicts.",
};

export default function EmailMarketingAnnualCost2026Page() {
  return (
    <>
      {/* Breadcrumb */}
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
              Email Marketing Annual Cost 2026
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Annual Cost Comparison
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Marketing Costs in 2026: What You&apos;ll Actually Pay
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Pricing pages show monthly rates at the smallest tier. Reality hits when you have
            10,000+ contacts and need automations. This guide calculates the true annual cost
            of five major email platforms at every subscriber tier &mdash; including the fees
            their pricing pages bury in footnotes.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* How We Calculated */}
          <section>
            <h2 className="text-xl font-bold mb-3">How We Calculated These Numbers</h2>
            <p className="text-muted leading-relaxed mb-3">
              Every price below is the <strong className="text-foreground">annual total</strong> based
              on the cheapest plan that supports the stated subscriber count with standard email
              marketing features (automations, segmentation, A/B testing). We used published pricing
              as of March 2026. Where annual billing offers a discount, we show both figures.
            </p>
            <p className="text-muted leading-relaxed">
              &ldquo;Subscribers&rdquo; means contacts in your list, whether or not they opened an
              email recently. Mailchimp, Kit, and ActiveCampaign charge by total contacts.
              beehiiv charges by subscribers. Brevo charges by emails sent, not contacts &mdash; a
              critical distinction we factor into the comparison.
            </p>
          </section>

          {/* Annual Cost Table — Monthly Billing */}
          <section>
            <h2 className="text-xl font-bold mb-4">Annual Cost by Subscriber Tier (Monthly Billing)</h2>
            <p className="text-muted leading-relaxed mb-4">
              What you pay per year if you choose month-to-month billing. This is the most
              common scenario and the most expensive way to pay.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Kit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Brevo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">1,000</td>
                    <td className="px-4 py-2.5 text-muted">$156/yr<br /><span className="text-xs">Standard</span></td>
                    <td className="px-4 py-2.5 text-muted">$348/yr<br /><span className="text-xs">Creator</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/yr<br /><span className="text-xs font-normal text-muted">Launch (free)</span></td>
                    <td className="px-4 py-2.5 text-muted">$348/yr<br /><span className="text-xs">Starter</span></td>
                    <td className="px-4 py-2.5 text-muted">$0/yr<br /><span className="text-xs">Free (300 emails/day)</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">2,500</td>
                    <td className="px-4 py-2.5 text-muted">$468/yr<br /><span className="text-xs">Standard</span></td>
                    <td className="px-4 py-2.5 text-muted">$468/yr<br /><span className="text-xs">Creator</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/yr<br /><span className="text-xs font-normal text-muted">Launch (free to 2.5K)</span></td>
                    <td className="px-4 py-2.5 text-muted">$468/yr<br /><span className="text-xs">Starter</span></td>
                    <td className="px-4 py-2.5 text-muted">$300/yr<br /><span className="text-xs">Starter (20K emails/mo)</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-4 py-2.5 text-muted">$828/yr<br /><span className="text-xs">Standard</span></td>
                    <td className="px-4 py-2.5 text-muted">$588/yr<br /><span className="text-xs">Creator</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$504/yr<br /><span className="text-xs font-normal text-muted">Scale</span></td>
                    <td className="px-4 py-2.5 text-muted">$588/yr<br /><span className="text-xs">Starter</span></td>
                    <td className="px-4 py-2.5 text-muted">$300/yr<br /><span className="text-xs">Starter (20K emails/mo)</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-4 py-2.5 text-muted">$1,560/yr<br /><span className="text-xs">Standard</span></td>
                    <td className="px-4 py-2.5 text-muted">$1,068/yr<br /><span className="text-xs">Creator</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$504/yr<br /><span className="text-xs font-normal text-muted">Scale</span></td>
                    <td className="px-4 py-2.5 text-muted">$1,068/yr<br /><span className="text-xs">Lite</span></td>
                    <td className="px-4 py-2.5 text-muted">$540/yr<br /><span className="text-xs">Business (no contact limit)</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                    <td className="px-4 py-2.5 text-muted">$3,060/yr<br /><span className="text-xs">Standard</span></td>
                    <td className="px-4 py-2.5 text-muted">$2,268/yr<br /><span className="text-xs">Creator</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$1,188/yr<br /><span className="text-xs font-normal text-muted">Scale</span></td>
                    <td className="px-4 py-2.5 text-muted">$2,268/yr<br /><span className="text-xs">Plus</span></td>
                    <td className="px-4 py-2.5 text-muted">$540/yr<br /><span className="text-xs">Business</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-4 py-2.5 text-muted">$4,860/yr<br /><span className="text-xs">Standard</span></td>
                    <td className="px-4 py-2.5 text-muted">$4,068/yr<br /><span className="text-xs">Creator Pro</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$2,388/yr<br /><span className="text-xs font-normal text-muted">Scale</span></td>
                    <td className="px-4 py-2.5 text-muted">$3,828/yr<br /><span className="text-xs">Plus</span></td>
                    <td className="px-4 py-2.5 text-muted">$780/yr<br /><span className="text-xs">Business</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">100,000</td>
                    <td className="px-4 py-2.5 text-muted">$9,300/yr<br /><span className="text-xs">Standard</span></td>
                    <td className="px-4 py-2.5 text-muted">$7,668/yr<br /><span className="text-xs">Creator Pro</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$4,788/yr<br /><span className="text-xs font-normal text-muted">Scale</span></td>
                    <td className="px-4 py-2.5 text-muted">$6,588/yr<br /><span className="text-xs">Pro</span></td>
                    <td className="px-4 py-2.5 text-muted">$1,380/yr<br /><span className="text-xs">Business</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              All prices based on published rates as of March 2026. Brevo pricing is per emails sent (not contacts),
              so list size does not directly affect the bill &mdash; send volume does. The Brevo figures assume
              one email per contact per week.
            </p>
          </section>

          {/* Annual vs Monthly Savings */}
          <section>
            <h2 className="text-xl font-bold mb-4">Annual vs Monthly Billing: How Much You Save</h2>
            <p className="text-muted leading-relaxed mb-4">
              Most platforms offer 15&ndash;20% off for annual billing. Here is the annual billing
              total at selected tiers alongside the monthly billing total so you can see the real
              dollar savings.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform @ 10K</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Billing (Annual Total)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Billing (Annual Total)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">You Save</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp Standard</td>
                    <td className="px-4 py-2.5 text-muted">$1,560/yr</td>
                    <td className="px-4 py-2.5 text-muted">$1,320/yr</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$240 (15%)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit Creator</td>
                    <td className="px-4 py-2.5 text-muted">$1,068/yr</td>
                    <td className="px-4 py-2.5 text-muted">$828/yr</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$240 (22%)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                    <td className="px-4 py-2.5 text-muted">$504/yr</td>
                    <td className="px-4 py-2.5 text-muted">$420/yr</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$84 (17%)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign Lite</td>
                    <td className="px-4 py-2.5 text-muted">$1,068/yr</td>
                    <td className="px-4 py-2.5 text-muted">$876/yr</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$192 (18%)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo Business</td>
                    <td className="px-4 py-2.5 text-muted">$540/yr</td>
                    <td className="px-4 py-2.5 text-muted">$468/yr</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$72 (13%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              Kit offers the largest discount for annual billing (roughly 22% off). Brevo&apos;s annual discount is
              modest, but its base price is already among the lowest.
            </p>
          </section>

          {/* Cheapest at Each Tier */}
          <section>
            <h2 className="text-xl font-bold mb-4">Cheapest Platform at Each Tier</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Subscriber Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest (Monthly Billing)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Runner-Up</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">1,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">beehiiv Launch / Brevo Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/yr</td>
                    <td className="px-4 py-2.5 text-muted">Mailchimp Standard ($156/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">2,500</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">beehiiv Launch</td>
                    <td className="px-4 py-2.5 text-muted">$0/yr</td>
                    <td className="px-4 py-2.5 text-muted">Brevo Starter ($300/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Brevo Starter</td>
                    <td className="px-4 py-2.5 text-muted">$300/yr</td>
                    <td className="px-4 py-2.5 text-muted">beehiiv Scale ($504/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">beehiiv Scale</td>
                    <td className="px-4 py-2.5 text-muted">$504/yr</td>
                    <td className="px-4 py-2.5 text-muted">Brevo Business ($540/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Brevo Business</td>
                    <td className="px-4 py-2.5 text-muted">$540/yr</td>
                    <td className="px-4 py-2.5 text-muted">beehiiv Scale ($1,188/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Brevo Business</td>
                    <td className="px-4 py-2.5 text-muted">$780/yr</td>
                    <td className="px-4 py-2.5 text-muted">beehiiv Scale ($2,388/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">100,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Brevo Business</td>
                    <td className="px-4 py-2.5 text-muted">$1,380/yr</td>
                    <td className="px-4 py-2.5 text-muted">beehiiv Scale ($4,788/yr)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              Brevo dominates on raw price at high volumes because it charges by emails sent, not
              contacts. If you have a large list but send infrequently, Brevo is dramatically cheaper.
              If you send daily to your entire list, the math shifts.
            </p>
          </section>

          {/* Hidden Costs */}
          <section>
            <h2 className="text-xl font-bold mb-4">Hidden Costs: What the Pricing Page Doesn&apos;t Show</h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Mailchimp</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; <strong className="text-foreground">Unsubscribed contacts still count.</strong> Mailchimp charges for contacts who unsubscribed but remain in your audience. You must manually archive them or pay for dead weight.</li>
                  <li>&bull; <strong className="text-foreground">Send limits tighten above Standard.</strong> Standard gives 12x your contact limit in sends per month. Premium gives 15x. Exceed it and you cannot send until next billing cycle or upgrade.</li>
                  <li>&bull; <strong className="text-foreground">Advanced automations require Standard or higher.</strong> The Essentials plan has limited automation triggers. Multi-step journeys require Standard ($20+/mo at 500 contacts).</li>
                  <li>&bull; <strong className="text-foreground">SMS is an add-on.</strong> If you want SMS marketing alongside email, Mailchimp charges separately per credit pack. This can add $20&ndash;50/month for light usage.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Kit (ConvertKit)</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; <strong className="text-foreground">Free plan has no automations.</strong> The Newsletter (free) plan does not include visual automation sequences. You need Creator ($29/mo at 1K) for automated email sequences.</li>
                  <li>&bull; <strong className="text-foreground">Creator Pro features cost 50%+ more.</strong> Subscriber scoring, advanced reporting, and referral programs require Creator Pro, which is roughly 50% above Creator pricing at every tier.</li>
                  <li>&bull; <strong className="text-foreground">No native A/B testing on broadcasts below Creator.</strong> Subject-line testing is available, but proper A/B content testing requires the Creator plan.</li>
                  <li>&bull; <strong className="text-foreground">Commerce fees.</strong> Kit Commerce (digital product sales) takes 3.5% + Stripe fees on every transaction. This adds up fast for course creators.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">beehiiv</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; <strong className="text-foreground">Free plan caps at 2,500 subscribers.</strong> After that, you jump to Scale at $42/month. There is no intermediate plan between free and paid.</li>
                  <li>&bull; <strong className="text-foreground">Custom domains require Scale or above.</strong> If you want to send from your own domain (not yourname.beehiiv.com), you need Scale.</li>
                  <li>&bull; <strong className="text-foreground">Automation is basic.</strong> beehiiv&apos;s automation sequences are less sophisticated than ActiveCampaign or Kit. If you need complex conditional logic, beehiiv may not be sufficient.</li>
                  <li>&bull; <strong className="text-foreground">Ad network revenue share.</strong> beehiiv Boost and ad network monetization takes a percentage. The platform is free or cheap because ad monetization is built in.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">ActiveCampaign</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; <strong className="text-foreground">CRM is a paid add-on.</strong> ActiveCampaign&apos;s email plans do not include CRM. The Plus plan (CRM included) starts at $49/mo for 1K contacts. Most people comparing it to HubSpot miss this.</li>
                  <li>&bull; <strong className="text-foreground">Onboarding fees on higher plans.</strong> Enterprise and some Plus plans include mandatory onboarding fees of $500&ndash;$2,500. These are one-time but rarely shown on the pricing page.</li>
                  <li>&bull; <strong className="text-foreground">Transactional email is separate.</strong> If you need order confirmations or password resets alongside marketing emails, you pay for Postmark (acquired by ActiveCampaign) separately.</li>
                  <li>&bull; <strong className="text-foreground">Annual contracts are hard to exit.</strong> ActiveCampaign does not offer pro-rated refunds on annual plans. If you realize it is not right 3 months in, you eat the remaining 9 months.</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Brevo (formerly Sendinblue)</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; <strong className="text-foreground">Free plan has Brevo branding.</strong> Every email sent on the free plan includes a Brevo logo in the footer. Removing it requires the Starter plan ($25/mo).</li>
                  <li>&bull; <strong className="text-foreground">Send-per-month model can spike.</strong> Brevo charges by emails sent. If you run a flash sale and send 3x your normal volume, that single month could cost 3x your usual bill.</li>
                  <li>&bull; <strong className="text-foreground">Marketing automation limited on Starter.</strong> Advanced automation workflows (lead scoring, predictive sending) require Business at $65/mo. Starter only offers basic automation.</li>
                  <li>&bull; <strong className="text-foreground">Dedicated IP is extra.</strong> Shared IP deliverability varies. A dedicated IP (recommended above 50K contacts) costs an additional $250+/year.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Best Value Verdicts */}
          <section>
            <h2 className="text-xl font-bold mb-4">Best Value Verdict at Each Tier</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Under 2,500 Subscribers</p>
                <p className="text-sm text-muted">
                  <strong className="text-accent">beehiiv Launch</strong> is the clear winner. You get a functional newsletter
                  platform with subscriber management, analytics, and a referral system for $0. Brevo Free is
                  also $0 but limits you to 300 emails/day and includes branding. If you need automations from
                  day one, Kit Creator ($29/mo) is worth the premium &mdash; beehiiv&apos;s automation is too basic
                  for complex sequences.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">2,500 &ndash; 10,000 Subscribers</p>
                <p className="text-sm text-muted">
                  <strong className="text-accent">beehiiv Scale</strong> at $42/month offers the best balance of features and price.
                  Brevo is technically cheaper per dollar, but beehiiv&apos;s growth tools (Boosts, referral programs,
                  ad network) can generate revenue that offsets the cost. ActiveCampaign wins if you need deep
                  automation workflows, but expect to pay 2&ndash;3x more.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">10,000 &ndash; 50,000 Subscribers</p>
                <p className="text-sm text-muted">
                  <strong className="text-accent">Brevo Business</strong> becomes the cost leader. At $65/month with unlimited contacts, it
                  undercuts every competitor by $50&ndash;200/month at these sizes. The tradeoff: Brevo&apos;s
                  template editor and automation builder are less polished than ActiveCampaign or Kit. If
                  design quality and automation complexity matter more than raw cost, ActiveCampaign Plus is
                  worth the premium.
                </p>
              </div>
              <div className="rounded-lg border border-border p-5">
                <p className="text-sm font-semibold text-foreground mb-1">50,000+ Subscribers</p>
                <p className="text-sm text-muted">
                  <strong className="text-accent">Brevo Business</strong> continues to dominate on price. At 100K contacts, Mailchimp
                  charges $9,300/year while Brevo charges $1,380/year &mdash; a $7,920 difference.
                  The only reason to choose Mailchimp at this scale is if you are deeply integrated
                  into its ecosystem (landing pages, social posting, Intuit accounting) and migration
                  cost exceeds the annual savings. For most teams, it does not.
                </p>
              </div>
            </div>
          </section>

          {/* Overage Risks */}
          <section>
            <h2 className="text-xl font-bold mb-3">Overage Risks: What Happens When You Go Over</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Mailchimp:</strong>{" "}
                  Auto-upgrades you to the next contact tier. No warning, no confirmation. A viral
                  lead magnet can push you from the 5K to the 10K tier overnight, doubling your bill.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Kit:</strong>{" "}
                  Notifies you and gives a grace period, but auto-upgrades if you do not act. Less aggressive
                  than Mailchimp, but the contact tiers jump in large increments ($29 to $49 to $79).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">beehiiv:</strong>{" "}
                  Does not auto-upgrade. When you hit your plan&apos;s subscriber limit, new subscribers are
                  paused until you upgrade. Less financially risky but you can miss new signups.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">ActiveCampaign:</strong>{" "}
                  Auto-upgrades to the next contact tier and charges the pro-rated difference. On an annual
                  plan, this mid-cycle upgrade can create a confusing invoice.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Brevo:</strong>{" "}
                  Stops sending when you hit your monthly email limit. You must purchase additional credits
                  or wait until next month. Predictable but can disrupt campaigns mid-flight.
                </span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is Brevo so much cheaper than Mailchimp?</h3>
                <p className="text-sm text-muted">Because Brevo charges by emails sent, not contacts stored. If you have 50,000 contacts but only email 10,000 of them per week, Brevo is dramatically cheaper. Mailchimp charges for all 50,000 regardless of activity. The billing model difference, not a quality difference, drives the price gap.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is beehiiv really free up to 2,500 subscribers?</h3>
                <p className="text-sm text-muted">Yes. beehiiv&apos;s Launch plan is genuinely free with no credit card required. The limitations are no custom domain, limited automations, and beehiiv branding on your publication. For newsletter-focused creators who are just starting, these tradeoffs are very reasonable.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which platform has the best automation for the price?</h3>
                <p className="text-sm text-muted">ActiveCampaign, by a wide margin. Its visual automation builder supports conditional branching, lead scoring, goal tracking, and CRM integration. The cost is 2&ndash;3x higher than beehiiv or Brevo, but if automation drives revenue for your business, the ROI is clear. Kit is a solid middle ground for creators who need sequences but not enterprise automation.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I switch from Mailchimp to save money?</h3>
                <p className="text-sm text-muted">If you have over 10,000 contacts and are on Mailchimp Standard or Premium, you are likely overpaying by $500&ndash;$5,000/year compared to beehiiv or Brevo. The migration cost (rebuilding automations, re-verifying your domain, potential short-term deliverability dip) is a one-time event. The savings recur every year. For most teams above 10K, switching pays for itself within 3&ndash;6 months.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do these prices include transactional emails?</h3>
                <p className="text-sm text-muted">No. These are marketing email costs only. Transactional emails (order confirmations, password resets) are separate on every platform listed here. Brevo does bundle transactional email in its plans, which is an additional cost advantage if you need both marketing and transactional.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "activecampaign", "brevo"]}
            comparisons={["mailchimp-vs-beehiiv", "beehiiv-vs-convertkit", "mailchimp-vs-activecampaign"]}
            guides={[
              "migrate-from-mailchimp",
              "best-email-tool-creators",
              "email-deliverability-compared",
              "mailchimp-pricing-history",
            ]}
          />
        </div>
      </article>
    </>
  );
}
