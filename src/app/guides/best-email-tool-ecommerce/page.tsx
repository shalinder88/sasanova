import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Best Email Marketing Tool for E-commerce (Not Mailchimp)",
  description:
    "Klaviyo vs Mailchimp vs ActiveCampaign vs Brevo compared for e-commerce. Revenue attribution, product recommendations, cart abandonment flows, and real pricing at 5K-50K contacts.",
};

export default function BestEmailToolEcommerce() {
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
              Best Email Tool for E-commerce
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              E-Commerce
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best Email Marketing Tool for E-commerce (Not Mailchimp)
          </h1>
          <p className="text-lg text-muted">
            Mailchimp charges by contacts stored, not emails sent. For e-commerce stores with large lists of one-time buyers, that pricing model is a trap. Klaviyo is the default answer, but it&apos;s expensive too. Here&apos;s what actually matters for e-commerce email &mdash; revenue attribution, product recommendations, cart abandonment &mdash; and which tool delivers the best ROI at your list size.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Why E-commerce Email Is Different ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Why E-commerce Email Is Different from Everything Else</h2>
          <p className="text-muted mb-4">
            Creator email tools (beehiiv, Kit, Substack) are built around content and subscriptions. E-commerce email is built around purchases. The features that matter are completely different.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Revenue attribution</strong> tracks which emails directly generated sales. This isn&apos;t vanity &mdash; it&apos;s how you decide which campaigns to scale. A tool without revenue attribution is flying blind.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Product recommendation engines</strong> dynamically insert products based on browse history, purchase history, and predicted interests. Manual product selection doesn&apos;t scale past 50 SKUs.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Cart abandonment flows</strong> recover 5&ndash;15% of abandoned carts on average. The difference between platforms is timing, personalization depth, and the number of touchpoints you can configure.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Deep e-commerce integrations</strong> mean real-time sync with Shopify, WooCommerce, or BigCommerce &mdash; not just contact import. Product catalogs, order history, customer lifetime value, and predicted next purchase date all need to flow into your email platform.
          </p>

          {/* ── The Four Contenders ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Four Contenders for E-commerce Email</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Klaviyo</strong> is the default choice for Shopify stores. Purpose-built for e-commerce with the deepest Shopify integration. Expensive, but the revenue attribution and predictive analytics are best-in-class.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mailchimp</strong> is the name everyone knows. Decent e-commerce features since the Intuit acquisition, but the per-contact pricing punishes stores with large inactive lists. The Standard plan ($20/mo for 500 contacts) includes product recommendations and automations.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ActiveCampaign</strong> is the automation powerhouse. Its conditional workflow builder is the most sophisticated of the four. E-commerce integrations exist but aren&apos;t as native as Klaviyo. Best for stores that need complex lifecycle marketing beyond just abandoned carts.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo (formerly Sendinblue)</strong> charges by emails sent, not contacts stored. For stores with 50K contacts but moderate send volume, this pricing model saves thousands per year. E-commerce features are competent but not as deep as Klaviyo.
          </p>

          {/* ── Head-to-Head Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Klaviyo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Brevo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Best for</td>
                  <td className="px-4 py-2.5">Shopify-first stores</td>
                  <td className="px-4 py-2.5">Multi-channel retailers</td>
                  <td className="px-4 py-2.5">Complex lifecycle marketing</td>
                  <td className="px-4 py-2.5">Budget-conscious stores</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pricing model</td>
                  <td className="px-4 py-2.5">Per contact</td>
                  <td className="px-4 py-2.5">Per contact</td>
                  <td className="px-4 py-2.5">Per contact</td>
                  <td className="px-4 py-2.5">Per email sent</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Revenue attribution</td>
                  <td className="px-4 py-2.5 text-green-400">Native, multi-touch</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic (last-click)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic (with CRM)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Product recommendations</td>
                  <td className="px-4 py-2.5 text-green-400">AI-powered, dynamic</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Standard+)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Via integrations</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Cart abandonment</td>
                  <td className="px-4 py-2.5 text-green-400">Multi-step, dynamic</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Standard+)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Plus+)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Shopify integration</td>
                  <td className="px-4 py-2.5 text-green-400">Native, deep</td>
                  <td className="px-4 py-2.5 text-yellow-400">Good (rebuilt post-breakup)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Via connector</td>
                  <td className="px-4 py-2.5 text-yellow-400">Plugin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">WooCommerce integration</td>
                  <td className="px-4 py-2.5 text-green-400">Native</td>
                  <td className="px-4 py-2.5 text-green-400">Native</td>
                  <td className="px-4 py-2.5 text-green-400">Native (Deep Data)</td>
                  <td className="px-4 py-2.5 text-green-400">Native</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">SMS marketing</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic (US only)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Add-on</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Predictive analytics</td>
                  <td className="px-4 py-2.5 text-green-400">CLV, churn risk, next order</td>
                  <td className="px-4 py-2.5 text-yellow-400">Purchase likelihood</td>
                  <td className="px-4 py-2.5 text-yellow-400">Win probability</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automation builder</td>
                  <td className="px-4 py-2.5">Visual, e-commerce focused</td>
                  <td className="px-4 py-2.5">Visual, moderate</td>
                  <td className="px-4 py-2.5 text-green-400">Most powerful</td>
                  <td className="px-4 py-2.5">Visual, basic</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free tier</td>
                  <td className="px-4 py-2.5">250 contacts, 500 emails</td>
                  <td className="px-4 py-2.5">250 contacts, 500 emails</td>
                  <td className="px-4 py-2.5">14-day trial only</td>
                  <td className="px-4 py-2.5">Unlimited contacts, 300 emails/day</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Cart Abandonment ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Cart Abandonment Flow Comparison</h2>
          <p className="text-muted mb-4">
            Cart abandonment is the highest-ROI automation in e-commerce email. The average recovery rate is 5&ndash;15% of abandoned carts, but execution matters. Here&apos;s how each platform handles it.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Klaviyo</strong> provides pre-built abandonment flows with dynamic product blocks, conditional splits by cart value, and multi-step sequences (email + SMS). You can trigger different flows for first-time vs. repeat customers. The abandoned cart block auto-populates with exact products, images, and prices.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mailchimp</strong> (Standard plan and above) offers cart abandonment with product recommendations. The builder is visual but less flexible than Klaviyo. You get one abandonment flow unless you create custom automations, which requires the Premium plan ($350/mo for 10K contacts).
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ActiveCampaign</strong> (Plus plan, $49/mo) provides abandonment automations through its Deep Data integration with Shopify or WooCommerce. The automation builder is more powerful for conditional logic, but the e-commerce-specific templates are fewer. You build more, configure less.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo</strong> provides a cart abandonment workflow on the Business plan ($18/mo for 5K emails). It works, but the product blocks are less dynamic and the segmentation options are more limited. Good enough for stores under $500K annual revenue, but you&apos;ll feel the ceiling above that.
          </p>

          {/* ── Revenue Attribution ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Revenue Attribution: Why It Matters More Than Open Rates</h2>
          <p className="text-muted mb-4">
            Open rates tell you who looked. Revenue attribution tells you who bought. For e-commerce, the second metric is the only one that matters for budgeting decisions.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Klaviyo&apos;s multi-touch attribution</strong> tracks the customer journey across multiple emails and touchpoints. You see which welcome series email, which product update, and which abandoned cart reminder contributed to a purchase. This data feeds back into Klaviyo&apos;s predictive models for CLV and churn risk.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mailchimp uses last-click attribution</strong> &mdash; whichever email the customer clicked before purchasing gets 100% of the credit. Simple to understand but misleading for multi-touch journeys. A customer might open 5 emails before the one they click to buy, and Mailchimp credits only the final one.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ActiveCampaign and Brevo</strong> offer basic revenue tracking tied to deals (ActiveCampaign) or e-commerce events (Brevo). Neither provides the depth of Klaviyo&apos;s attribution. If revenue attribution is your primary decision factor, Klaviyo is the clear winner.
          </p>

          {/* ── Product Recommendation Automation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Product Recommendation Automation</h2>
          <p className="text-muted mb-4">
            Manually curating product selections in emails works for stores with 20 products. It breaks at 200. Automated product recommendations use browsing behavior, purchase history, and collaborative filtering to show each customer relevant products.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Klaviyo</strong> leads here with AI-driven recommendations that improve over time. Recommendation types include best sellers, frequently bought together, recently viewed, and predicted next purchase. You drag a recommendation block into any email or flow.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mailchimp</strong> (Standard and above) includes product recommendation blocks based on purchase history and popular products. Less sophisticated than Klaviyo&apos;s AI but functional for most stores.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ActiveCampaign</strong> doesn&apos;t have native product recommendation blocks. You&apos;d integrate with a third-party tool like Nosto or use conditional content blocks with manual rules. Workable but significantly more setup.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo</strong> has basic product blocks that pull from your catalog. No AI recommendations, no collaborative filtering. You can show recently viewed or popular products, but not personalized suggestions.
          </p>

          {/* ── Pricing Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Real Pricing at 5K, 15K, and 50K Contacts</h2>
          <p className="text-muted mb-4">
            Pricing is where the decision gets real. E-commerce stores typically have large contact lists relative to active buyers. A store with 50K email contacts might have 5K active purchasers &mdash; and 45K contacts inflating the bill on per-contact platforms.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Contact Count</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Klaviyo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Standard</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign Plus</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Brevo Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000 contacts</td>
                  <td className="px-4 py-2.5">$100/mo</td>
                  <td className="px-4 py-2.5">$100/mo</td>
                  <td className="px-4 py-2.5">$99/mo (3 users)</td>
                  <td className="px-4 py-2.5">$18/mo (5K emails/mo)*</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">15,000 contacts</td>
                  <td className="px-4 py-2.5">$350/mo</td>
                  <td className="px-4 py-2.5">$285/mo</td>
                  <td className="px-4 py-2.5">$189/mo (3 users)</td>
                  <td className="px-4 py-2.5">$35/mo (20K emails/mo)*</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50,000 contacts</td>
                  <td className="px-4 py-2.5">$1,000/mo</td>
                  <td className="px-4 py-2.5">$605/mo</td>
                  <td className="px-4 py-2.5">$389/mo (3 users)</td>
                  <td className="px-4 py-2.5">$65/mo (60K emails/mo)*</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">With SMS (5K msgs)</td>
                  <td className="px-4 py-2.5">+$50/mo</td>
                  <td className="px-4 py-2.5">+$20/mo (limited)</td>
                  <td className="px-4 py-2.5">Third-party add-on</td>
                  <td className="px-4 py-2.5">+usage-based</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mb-4">
            *Brevo charges by emails sent, not contacts. Costs shown assume moderate sending volume (1&ndash;1.5x monthly emails per contact). Heavy senders will pay more. Prices as of March 2026, billed monthly.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The pricing gap is dramatic.</strong> At 50K contacts, Klaviyo costs $1,000/month while Brevo costs $65/month for the same number of contacts. The question is whether Klaviyo&apos;s superior revenue attribution and product recommendations generate enough additional revenue to justify the 15x price difference.
          </p>
          <p className="text-muted mb-4">
            For stores doing over $1M in annual revenue, Klaviyo&apos;s predictive analytics and deeper attribution typically pay for themselves. For stores under $500K, Brevo or ActiveCampaign offers 80% of the functionality at a fraction of the cost.
          </p>

          {/* ── Who Should NOT ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Use These Tools</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Content creators and newsletter writers:</strong> None of these are built for you. Klaviyo, Mailchimp, ActiveCampaign, and Brevo are marketing platforms, not creator platforms. Use beehiiv, Kit, or Substack instead.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Stores with under 500 contacts:</strong> You don&apos;t need a dedicated e-commerce email tool yet. Your Shopify built-in email or a free Mailchimp account handles everything at this scale. Come back when you have enough data for segmentation to matter.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">B2B companies:</strong> These tools optimize for product purchases, not lead nurturing. If you&apos;re selling services or high-ticket B2B products, HubSpot or ActiveCampaign (without e-commerce focus) is a better fit.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Enterprise with custom CDP needs:</strong> If you&apos;re managing multiple brands, complex data models, and need a customer data platform, you&apos;re looking at Braze, Iterable, or Salesforce Marketing Cloud &mdash; not the tools in this guide.
          </p>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes E-commerce Stores Make with Email</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Paying for 50K contacts when only 10K are active.</strong> Most e-commerce lists are 60&ndash;70% inactive (no open or click in 90+ days). Clean your list quarterly. On per-contact platforms, removing 30K inactive contacts saves $200&ndash;$600/month.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Using the same tool for transactional and marketing email.</strong> Order confirmations, shipping updates, and password resets should go through a transactional email service (Postmark, Amazon SES, or Brevo&apos;s transactional tier). Mixing transactional and marketing email through the same sending domain hurts deliverability for both.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Choosing Klaviyo by default without validating the ROI.</strong> Klaviyo is excellent but expensive. If you&apos;re a store doing $200K/year in revenue, spending $4,000&ndash;$12,000/year on email is hard to justify. Run a 3-month test on a cheaper platform first and measure actual revenue difference.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Ignoring SMS as a channel.</strong> SMS abandoned cart messages have 2&ndash;3x the recovery rate of email alone. If your platform supports SMS (Klaviyo and Brevo do natively), test it before dismissing it as spam.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Building 20 automations on day one.</strong> Start with three flows: welcome series, cart abandonment, and post-purchase. These generate 80% of automated email revenue. Add browse abandonment and win-back flows after the first three are performing.
          </p>

          {/* ── The Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Opinionated Verdict</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Shopify stores doing $1M+ annual revenue:</strong> Klaviyo. The revenue attribution, predictive CLV, and native Shopify integration justify the price. Budget $100&ndash;$350/month for 5K&ndash;15K active profiles.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Growing stores ($200K&ndash;$1M revenue):</strong> ActiveCampaign Plus at $99&ndash;$189/month. The automation builder is the best in class, the e-commerce integrations are solid, and you save 30&ndash;60% over Klaviyo.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Budget-conscious stores or large inactive lists:</strong> Brevo Business. Pay for what you send, not what you store. A store with 50K contacts and moderate send volume pays $65/month vs. $1,000/month on Klaviyo. The feature gap is real but the price gap is enormous.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Stores already invested in Mailchimp:</strong> Stay unless pricing is killing you. Mailchimp&apos;s e-commerce features have improved significantly. Migration costs (rebuilding automations, re-verifying domains, list re-engagement) often exceed 6 months of savings.
            </p>
          </div>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Klaviyo worth the price for e-commerce?</h3>
                <p className="text-muted">Klaviyo is worth it for Shopify stores doing over $1M in annual revenue where the predictive analytics and multi-touch revenue attribution generate measurable ROI. Below that threshold, ActiveCampaign or Brevo offers 80% of the functionality at 30&ndash;70% less cost.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why not just use Shopify Email?</h3>
                <p className="text-muted">Shopify Email works for basic campaigns and is cheap (free for 10K emails/month, then $1 per 1,000). But it lacks advanced automation, segmentation, product recommendation engines, and revenue attribution. It&apos;s a starting point, not a growth tool.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Brevo for e-commerce at scale?</h3>
                <p className="text-muted">Yes, up to a point. Brevo handles cart abandonment, basic segmentation, and transactional email well. The ceiling appears around $1M+ revenue where you need deeper predictive analytics and AI-driven product recommendations that Brevo doesn&apos;t offer.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use the same platform for email and SMS?</h3>
                <p className="text-muted">Yes, if your platform supports it well. Unified email + SMS means better coordination (don&apos;t send an SMS and email about the same abandoned cart within minutes). Klaviyo and Brevo both handle this natively. ActiveCampaign requires a third-party SMS integration.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/email-marketing-ecommerce"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">E-commerce Email Marketing Overview</span>
                <span className="block text-xs text-muted mt-1">Stop paying Mailchimp prices for e-commerce email</span>
              </Link>
              <Link
                href="/guides/migrate-from-mailchimp"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Leaving Mailchimp Migration Guide</span>
                <span className="block text-xs text-muted mt-1">Step-by-step without losing your list</span>
              </Link>
              <Link
                href="/guides/best-email-tool-creators"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Best Email Tool for Creators</span>
                <span className="block text-xs text-muted mt-1">beehiiv vs Kit vs Substack vs Ghost</span>
              </Link>
              <Link
                href="/guides/automation-pricing-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Automation Pricing Compared</span>
                <span className="block text-xs text-muted mt-1">The honest math on Zapier vs Make vs n8n</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["mailchimp", "activecampaign", "brevo", "convertkit"]}
            comparisons={["activecampaign-vs-mailchimp", "mailchimp-vs-brevo", "activecampaign-vs-brevo"]}
            guides={[
              "email-marketing-ecommerce",
              "email-marketing-annual-cost-2026",
              "mailchimp-hidden-costs",
            ]}
          />
        </div>
      </article>
    </>
  );
}
