import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Marketing for E-Commerce: Stop Paying Mailchimp Prices",
  description:
    "Mailchimp charges by contacts. E-commerce stores with big lists get crushed. Here are the alternatives that charge by emails sent, not list size.",
};

export default function EmailMarketingEcommercePage() {
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
              Email Marketing for E-Commerce
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            E-Commerce
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Marketing for E-Commerce: Stop Paying Mailchimp Prices
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Your Mailchimp bill keeps climbing because their pricing model punishes list growth.
            That&apos;s a structural problem, not a feature gap. Here&apos;s how to fix it.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Problem */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Pricing Model That Punishes Growth</h2>
            <p className="text-muted leading-relaxed mb-3">
              Mailchimp charges by the number of contacts in your account. Not active contacts.
              Not contacts you actually email. Total contacts. So the customer who bought once in
              2019 and never opened another email? You&apos;re paying to store them.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              At 10,000 contacts, Mailchimp Standard runs $100/month. At 25,000, it&apos;s about
              $230/month. At 50,000 contacts, you&apos;re looking at roughly $350/month. And
              that&apos;s Standard &mdash; not their Premium tier.
            </p>
            <p className="text-muted leading-relaxed">
              For an e-commerce store doing $30K&ndash;$50K/month, spending $3,000&ndash;$4,000
              annually on email marketing feels absurd when the tool is essentially sending
              abandoned cart sequences and weekly promos. The math doesn&apos;t work, and
              Mailchimp knows it. They bet on switching costs keeping you around.
            </p>
          </section>

          {/* Brevo */}
          <section>
            <h2 className="text-xl font-bold mb-3">Brevo: Pay for Sends, Not Subscribers</h2>
            <p className="text-muted leading-relaxed mb-3">
              Brevo (formerly Sendinblue) flips the model entirely. You pay based on how many
              emails you send per month, regardless of how many contacts sit in your database.
              Their Starter plan is $25/month for 20,000 emails. Their Business plan is $65/month
              for 20,000 emails with marketing automation, A/B testing, and advanced stats.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              For a store with 40,000 contacts that emails its list twice a week (roughly 320,000
              emails/month), Brevo Business costs about $169/month. On Mailchimp, that same list
              would run $300+ before you even count overages.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The automation builder is solid but not spectacular. If you&apos;re coming from
              Klaviyo&apos;s pre-built flows, you&apos;ll need to rebuild everything manually. Brevo
              has templates, but the e-commerce-specific ones lag behind dedicated Shopify tools.
            </p>

            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Who should NOT use Brevo</p>
              <p className="text-sm text-muted">
                Shopify stores that rely heavily on pre-built product recommendation blocks and
                predictive analytics. Brevo&apos;s e-commerce integrations work, but they require
                more manual setup than Klaviyo. If your competitive advantage is hyper-personalized
                product emails, the migration cost in time and lost sophistication is real.
              </p>
            </div>
          </section>

          {/* ActiveCampaign */}
          <section>
            <h2 className="text-xl font-bold mb-3">ActiveCampaign: Automation Powerhouse, Steep Scaling</h2>
            <p className="text-muted leading-relaxed mb-3">
              ActiveCampaign starts at $29/month for 1,000 contacts. That sounds reasonable until
              you see the curve: 10,000 contacts jumps to $174/month on the Plus plan. At 50,000,
              you&apos;re approaching $500/month.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              So why does anyone use it? Because the automation engine is genuinely excellent.
              Conditional branching, lead scoring, site tracking, CRM integration, goal-based
              automations &mdash; ActiveCampaign lets you build sequences that would take three
              Zapier integrations and a custom webhook on other platforms.
            </p>
            <p className="text-muted leading-relaxed">
              If your e-commerce operation depends on complex post-purchase flows (upsells based
              on purchase history, win-back campaigns triggered by engagement scoring, VIP
              segmentation based on lifetime value), ActiveCampaign earns its price. For everyone
              else, it&apos;s overkill that costs more than Mailchimp by the time you hit 25K contacts.
            </p>
          </section>

          {/* Klaviyo */}
          <section>
            <h2 className="text-xl font-bold mb-3">Klaviyo: The Shopify Default Tax</h2>
            <p className="text-muted leading-relaxed mb-3">
              Klaviyo is what Shopify recommends. It&apos;s deeply integrated, has pre-built
              flows for every e-commerce scenario, and the product recommendation engine is
              legitimately good. At $20/month for up to 500 contacts, it seems affordable.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              Then your store grows. At 10,000 contacts: $150/month. At 30,000: $450/month.
              At 50,000: $720/month. Those are real numbers from their pricing page, and they
              don&apos;t include SMS credits.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              Here&apos;s the honest assessment: Klaviyo is the best tool for Shopify-native
              e-commerce email marketing. The flows, the analytics, the product feed integration
              &mdash; nothing else matches it feature-for-feature. But you pay a premium for
              that polish, and the premium gets brutal at scale.
            </p>

            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">The Klaviyo decision matrix</p>
              <p className="text-sm text-muted">
                If email revenue exceeds 30% of your store&apos;s total revenue, Klaviyo probably
                pays for itself through better segmentation and flows. If email is under 15% of
                revenue, you&apos;re paying for capabilities you&apos;re not extracting value from.
                Switch to Brevo and pocket the difference.
              </p>
            </div>
          </section>

          {/* Cost Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-4">Real Cost Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Contacts</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Std</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Brevo Biz</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Klaviyo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign Plus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                    <td className="px-4 py-2.5 text-muted">$75/mo</td>
                    <td className="px-4 py-2.5 text-muted">$25/mo*</td>
                    <td className="px-4 py-2.5 text-muted">$100/mo</td>
                    <td className="px-4 py-2.5 text-muted">$99/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                    <td className="px-4 py-2.5 text-muted">$100/mo</td>
                    <td className="px-4 py-2.5 text-muted">$25/mo*</td>
                    <td className="px-4 py-2.5 text-muted">$150/mo</td>
                    <td className="px-4 py-2.5 text-muted">$174/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                    <td className="px-4 py-2.5 text-muted">$230/mo</td>
                    <td className="px-4 py-2.5 text-muted">$65/mo*</td>
                    <td className="px-4 py-2.5 text-muted">$375/mo</td>
                    <td className="px-4 py-2.5 text-muted">$286/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                    <td className="px-4 py-2.5 text-muted">$350/mo</td>
                    <td className="px-4 py-2.5 text-muted">$169/mo*</td>
                    <td className="px-4 py-2.5 text-muted">$720/mo</td>
                    <td className="px-4 py-2.5 text-muted">~$500/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              *Brevo pricing based on email volume (Business plan, 20K&ndash;150K emails/mo), not contact count.
              Assumes 2 sends per week to full list. Prices approximate; check each provider for current rates.
            </p>
          </section>

          {/* Decision Framework */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Decision Framework</h2>
            <p className="text-muted leading-relaxed mb-3">
              Multiply three numbers: your list size, your weekly send frequency, and your
              automation complexity (rate it 1&ndash;3). The result tells you where to look.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Large list + low frequency + simple automations:</strong>{" "}
                  Brevo wins outright. You&apos;re paying for storage on every other platform.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Any size + high frequency + complex automations:</strong>{" "}
                  ActiveCampaign if you need the CRM; Klaviyo if you&apos;re on Shopify.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Under 5K contacts + any complexity:</strong>{" "}
                  Honestly, Mailchimp is fine. The pricing only gets painful at scale.
                </span>
              </li>
            </ul>
          </section>

          {/* Migration Checklist */}
          <section>
            <h2 className="text-xl font-bold mb-3">Migration Checklist: What You Lose Leaving Mailchimp</h2>
            <p className="text-muted leading-relaxed mb-3">
              Switching email platforms is a bigger project than most founders expect. Before you
              migrate, understand what transfers and what doesn&apos;t.
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Transfers cleanly</p>
                <p className="text-sm text-muted">
                  Contact lists (CSV export), basic segments, email templates (with reformatting),
                  historical campaign data (as reports/exports).
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Requires rebuilding</p>
                <p className="text-sm text-muted">
                  Automations and flows (every platform structures these differently), signup
                  forms and landing pages, integrations with your store/CRM, A/B test history
                  and optimization data.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Lost permanently</p>
                <p className="text-sm text-muted">
                  Engagement scoring history, send-time optimization data, Mailchimp-specific
                  analytics (click maps, comparative reports), any Mailchimp-hosted landing pages
                  (URLs will break).
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">1.</span>
                <span>
                  <strong className="text-foreground">Migrating without cleaning your list first.</strong>{" "}
                  If you&apos;re leaving Mailchimp because of list size pricing, export your
                  list, remove anyone who hasn&apos;t opened in 6+ months, then import to the
                  new platform. Start clean.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">2.</span>
                <span>
                  <strong className="text-foreground">Switching mid-campaign season.</strong>{" "}
                  Migrate during a slow period. Your deliverability on a new platform needs
                  time to warm up. Switching the week before Black Friday is how you tank your
                  Q4 revenue.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">3.</span>
                <span>
                  <strong className="text-foreground">Ignoring deliverability warm-up.</strong>{" "}
                  New sending domains need to build reputation. Start by sending to your most
                  engaged segment (openers from the last 30 days), then gradually expand over
                  2&ndash;3 weeks.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">4.</span>
                <span>
                  <strong className="text-foreground">Choosing based on current list size only.</strong>{" "}
                  Project where you&apos;ll be in 12 months. A platform that&apos;s cheaper today
                  might be more expensive at 3x your current contacts.
                </span>
              </li>
            </ul>
          </section>

          {/* Bottom Line */}
          <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-3">Bottom Line</h2>
            <p className="text-muted leading-relaxed">
              Mailchimp built its pricing model for newsletters and small businesses. E-commerce
              stores outgrow that model fast. If your monthly email bill exceeds $150 and you
              aren&apos;t using advanced automations that justify the cost, switch to Brevo and
              save 50&ndash;70%. If you need Shopify-native intelligence and your email channel
              drives serious revenue, Klaviyo is worth the premium. ActiveCampaign fits the gap
              between those two &mdash; powerful automations without the Shopify-specific lock-in.
              There&apos;s no universal right answer, but there is almost certainly a cheaper one
              than what you&apos;re paying now.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best Mailchimp alternative for e-commerce?</h3>
                <p>For most e-commerce stores, Brevo (formerly Sendinblue) is the best Mailchimp alternative because it charges by emails sent rather than list size. Klaviyo is better for Shopify-native stores that need deep product analytics and purchase-triggered automations.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is Mailchimp so expensive for e-commerce stores?</h3>
                <p>Mailchimp charges based on your total contact list size, including inactive subscribers. E-commerce stores often have large lists from one-time buyers, which inflates costs significantly. Platforms like Brevo avoid this by charging per email sent instead.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Klaviyo worth the higher price for Shopify stores?</h3>
                <p>Klaviyo is worth it if your email channel generates measurable revenue and you rely on purchase-triggered flows, product recommendations, and attribution reporting. For stores spending under $200/month on email, Brevo or ActiveCampaign deliver similar results at lower cost.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I migrate from Mailchimp to Brevo without losing subscribers?</h3>
                <p>Export your Mailchimp audience as a CSV, clean inactive contacts (6+ months without opening), then import into Brevo. Re-authenticate your sending domain with SPF/DKIM records. The migration typically takes under an hour for lists up to 50,000 contacts.</p>
              </div>
            </div>
          </section>


          <RelatedLinks
            tools={["mailchimp", "activecampaign", "brevo", "convertkit"]}
            comparisons={["activecampaign-vs-mailchimp", "mailchimp-vs-brevo", "activecampaign-vs-brevo"]}
            guides={[
              "best-email-tool-ecommerce",
              "email-marketing-annual-cost-2026",
              "ecommerce-stack-solo-creator",
            ]}
          />
        </div>
      </article>
    </>
  );
}
