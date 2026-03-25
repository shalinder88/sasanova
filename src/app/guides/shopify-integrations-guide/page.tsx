import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Shopify Integrations: Essential Apps and Their Real Cost",
  description:
    "Shopify Basic ($39/mo) plus essential apps can double your bill. Email (Brevo free vs Mailchimp $13/mo), analytics (Plausible $9/mo vs PostHog free), CRM (HubSpot free), and the apps worth paying for.",
};

export default function ShopifyIntegrationsGuide() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Shopify Integrations Guide</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Integration Guide</span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Shopify Integrations: Essential Apps and Their Real Cost
          </h1>
          <p className="text-lg text-muted">
            Shopify Basic costs $39/mo. But most stores spend $80&ndash;$200/mo once they add essential apps for email, analytics, reviews, and shipping. Here&apos;s what you actually need, what each costs, and where you can save by choosing the right integration.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Shopify Base Costs ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Shopify Plan Prices (What You Start With)</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li><strong className="text-foreground">Basic:</strong> $39/mo &mdash; 2 staff, basic reports, 77% shipping discount</li>
              <li><strong className="text-foreground">Shopify:</strong> $105/mo &mdash; 5 staff, professional reports, 88% shipping discount</li>
              <li><strong className="text-foreground">Advanced:</strong> $399/mo &mdash; 15 staff, advanced reports, custom pricing</li>
              <li><strong className="text-foreground">Plus:</strong> $2,300/mo &mdash; enterprise, unlimited staff, checkout customization</li>
            </ul>
          </div>

          {/* ── Email Marketing ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email Marketing: The Most Important Integration</h2>
          <p className="text-muted mb-4">
            Shopify Email (built-in) gives you 10,000 free emails/month, then $1 per 1,000 after that. It&apos;s basic but works for simple campaigns. For automation and segmentation, you need a third-party app:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Email Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Shopify Integration</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Shopify Email</td>
                  <td className="px-4 py-2.5 text-muted">Free (10K emails/mo)</td>
                  <td className="px-4 py-2.5 text-muted">Built-in</td>
                  <td className="px-4 py-2.5 text-muted">Simple campaigns, starting out</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Brevo</td>
                  <td className="px-4 py-2.5 text-muted">Free (300 emails/day) or $9/mo Starter</td>
                  <td className="px-4 py-2.5 text-muted">Native Shopify app</td>
                  <td className="px-4 py-2.5 text-muted">Budget-conscious, SMS + email</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Mailchimp</td>
                  <td className="px-4 py-2.5 text-muted">Free (250 contacts) or $13/mo Essentials</td>
                  <td className="px-4 py-2.5 text-muted">Native Shopify app</td>
                  <td className="px-4 py-2.5 text-muted">Product recommendations, familiarity</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">ActiveCampaign</td>
                  <td className="px-4 py-2.5 text-muted">$15/mo Starter (1K contacts)</td>
                  <td className="px-4 py-2.5 text-muted">Native Shopify app</td>
                  <td className="px-4 py-2.5 text-muted">Advanced automation, lifecycle marketing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Our take:</strong> Start with Shopify Email (free). Switch to Brevo Starter ($9/mo) when you need automation. Mailchimp gets expensive fast &mdash; Standard is $20/mo at 500 contacts, climbing steeply. ActiveCampaign Starter ($15/mo) offers better automation for a similar price.
          </p>

          {/* ── Analytics ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Analytics: Beyond Shopify&apos;s Built-In Reports</h2>
          <p className="text-muted mb-4">
            Shopify includes basic analytics on all plans. Professional reports require the Shopify plan ($105/mo) or higher. For product analytics beyond sales data:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Analytics Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Integration</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What It Adds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Plausible</td>
                  <td className="px-4 py-2.5 text-muted">$9/mo (10K pageviews)</td>
                  <td className="px-4 py-2.5 text-muted">Script tag (manual)</td>
                  <td className="px-4 py-2.5 text-muted">Privacy-first, no cookies, simple</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">PostHog</td>
                  <td className="px-4 py-2.5 text-muted">Free (1M events/mo)</td>
                  <td className="px-4 py-2.5 text-muted">Script tag (manual)</td>
                  <td className="px-4 py-2.5 text-muted">Product analytics, session replay, funnels</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Google Analytics</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Native (built-in)</td>
                  <td className="px-4 py-2.5 text-muted">Traffic sources, conversions, audiences</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Our take:</strong> PostHog&apos;s free tier (1M analytics events, 5K session replays) is absurdly generous for Shopify stores. You get funnel analysis, session recordings to watch where customers drop off, and product analytics &mdash; all free. Plausible ($9/mo) is better if you just want clean traffic data without the complexity.
          </p>

          {/* ── CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">CRM: HubSpot Is the Obvious Choice</h2>
          <p className="text-muted mb-4">
            HubSpot CRM Free has a native Shopify integration on all tiers. It auto-syncs customers, creates contacts, and tracks revenue. For Shopify stores that need CRM, HubSpot Free is the starting point &mdash; unlimited contacts, deal pipeline, email logging.
          </p>
          <p className="text-muted mb-4">
            If you use Pipedrive ($14&ndash;$99/seat/mo), there&apos;s no native Shopify integration. You need Zapier ($29.99/mo) or Make ($10.59/mo) as middleware. This adds $10.59&ndash;$29.99/mo to your stack.
          </p>

          {/* ── Shipping ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Shipping: Apps That Pay for Themselves</h2>
          <p className="text-muted mb-4">
            Shopify Shipping (built-in) provides discounted USPS, UPS, and DHL rates. It&apos;s free and works well for US-based stores. Third-party shipping apps add value for multi-carrier comparison, international shipping, or high-volume operations. Most charge $0&ndash;$30/mo plus per-label fees.
          </p>

          {/* ── Accounting ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Accounting: QuickBooks or Xero</h2>
          <p className="text-muted mb-4">
            Both QuickBooks (Simple Start $30/mo) and Xero (Starter $15/mo) have native Shopify apps that sync orders, refunds, and payouts automatically. This eliminates manual bookkeeping. The accounting tool cost is separate from Shopify &mdash; budget $15&ndash;$30/mo for this.
          </p>

          {/* ── Real Cost Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Real Monthly Cost: Three Shopify Stacks</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Component</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Minimal</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Growth</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Professional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Shopify</td>
                  <td className="px-4 py-2.5 text-muted">Basic $39</td>
                  <td className="px-4 py-2.5 text-muted">Basic $39</td>
                  <td className="px-4 py-2.5 text-muted">Shopify $105</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Email</td>
                  <td className="px-4 py-2.5 text-muted">Shopify Email $0</td>
                  <td className="px-4 py-2.5 text-muted">Brevo Starter $9</td>
                  <td className="px-4 py-2.5 text-muted">ActiveCampaign $15</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Analytics</td>
                  <td className="px-4 py-2.5 text-muted">GA Free $0</td>
                  <td className="px-4 py-2.5 text-muted">PostHog Free $0</td>
                  <td className="px-4 py-2.5 text-muted">Plausible $9</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">CRM</td>
                  <td className="px-4 py-2.5 text-muted">None $0</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot Free $0</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot Starter $20</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Accounting</td>
                  <td className="px-4 py-2.5 text-muted">None $0</td>
                  <td className="px-4 py-2.5 text-muted">Xero $15</td>
                  <td className="px-4 py-2.5 text-muted">QuickBooks $30</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 text-foreground font-bold">Total</td>
                  <td className="px-4 py-2.5 text-foreground font-bold">$39/mo</td>
                  <td className="px-4 py-2.5 text-foreground font-bold">$63/mo</td>
                  <td className="px-4 py-2.5 text-foreground font-bold">$179/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Can I run a Shopify store with no paid apps?</h3>
          <p className="text-muted mb-4">
            Yes. Shopify Basic ($39/mo) includes a store builder, payment processing (Shopify Payments), Shopify Email (10K free/mo), basic analytics, and shipping labels. You can run a functional store for $39/mo flat. Apps become necessary when you need automation, advanced analytics, or CRM.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Is Mailchimp worth it for Shopify?</h3>
          <p className="text-muted mb-4">
            Less so than it used to be. Mailchimp Essentials starts at $13/mo for 500 contacts but scales steeply &mdash; $20/mo Standard at 500 contacts, much more as your list grows. Brevo Starter ($9/mo for 5,000 emails) charges by sends not contacts, which suits e-commerce better. Shopify Email is free for basic needs.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Do I need the $105 Shopify plan?</h3>
          <p className="text-muted mb-4">
            Only for professional reports (sales by traffic source, returning customer rate) and the larger shipping discount (88% vs 77%). Most stores under $50K/year revenue are fine on Basic ($39/mo). The upgrade pays for itself when shipping savings exceed $66/mo.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "email-marketing-ecommerce",
            "ecommerce-stack-solo-creator",
            "hubspot-integrations-guide",
          ]}
          comparisons={["shopify-vs-woocommerce"]}
        />
      </article>
    </>
  );
}
