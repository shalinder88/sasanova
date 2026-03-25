import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Shopify Pricing Explained: The Real Cost Beyond $39/Month",
  description:
    "Shopify pricing decoded: Basic $39/mo, Shopify $105/mo, Advanced $399/mo, Plus $2,300/mo. Transaction fees per tier, theme costs, app costs, and the real monthly total.",
};

export default function ShopifyPricingExplainedPage() {
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
              Shopify Pricing Explained
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Shopify Pricing Explained: The Real Cost Beyond $39/Month
          </h1>
          <p className="text-lg text-muted">
            Shopify&apos;s pricing page says &quot;Basic starts at $39/month.&quot; But by the time you add transaction fees, a premium theme, essential apps, and a payment processor, the real monthly cost is $100&ndash;$300+ for most stores. This guide breaks down every tier, every hidden fee, and what a realistic Shopify bill actually looks like.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Every Tier at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Staff Accounts</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Third-Party Transaction Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Basic</td>
                  <td className="px-4 py-2.5">$39</td>
                  <td className="px-4 py-2.5">$29</td>
                  <td className="px-4 py-2.5">2</td>
                  <td className="px-4 py-2.5">2.0%</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Shopify</td>
                  <td className="px-4 py-2.5">$105</td>
                  <td className="px-4 py-2.5">$79</td>
                  <td className="px-4 py-2.5">5</td>
                  <td className="px-4 py-2.5">1.0%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Advanced</td>
                  <td className="px-4 py-2.5">$399</td>
                  <td className="px-4 py-2.5">$299</td>
                  <td className="px-4 py-2.5">15</td>
                  <td className="px-4 py-2.5">0.6%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Plus</td>
                  <td className="px-4 py-2.5">$2,300</td>
                  <td className="px-4 py-2.5">$2,300</td>
                  <td className="px-4 py-2.5">Unlimited</td>
                  <td className="px-4 py-2.5">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Shopify has no free tier. There&apos;s a 3-day free trial, then a promotional $1/month for the first 3 months on some plans. After that, full pricing applies. The third-party transaction fee is charged on top of payment processor fees if you don&apos;t use Shopify Payments. Using Shopify Payments eliminates this fee.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Transaction Fees: The Cost Nobody Budgets For</h2>
          <p className="text-muted mb-4">
            Shopify charges two types of transaction fees:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Fee Type</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Basic</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Shopify</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Advanced</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Shopify Payments (online)</td>
                  <td className="px-4 py-2.5">2.9% + $0.30</td>
                  <td className="px-4 py-2.5">2.7% + $0.30</td>
                  <td className="px-4 py-2.5">2.5% + $0.30</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Third-party gateway</td>
                  <td className="px-4 py-2.5">2.0% + gateway fees</td>
                  <td className="px-4 py-2.5">1.0% + gateway fees</td>
                  <td className="px-4 py-2.5">0.6% + gateway fees</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">In-person (Shopify POS)</td>
                  <td className="px-4 py-2.5">2.6% + $0.10</td>
                  <td className="px-4 py-2.5">2.5% + $0.10</td>
                  <td className="px-4 py-2.5">2.4% + $0.10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The critical insight:</strong> If you don&apos;t use Shopify Payments, you pay the third-party transaction fee ON TOP of your payment processor&apos;s fees. On Basic, that&apos;s 2% of every sale + whatever Stripe/PayPal charges. On $10,000/month in sales, that&apos;s $200/month in extra fees just for using a non-Shopify payment processor.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When to upgrade based on transaction fees:</strong> If you process $20,000+/month and use a third-party gateway, upgrading from Basic (2% fee) to Shopify (1% fee) saves $200/month in transaction fees alone &mdash; more than the $66/month difference in plan cost.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Real Monthly Cost: Theme + Apps + Fees</h2>
          <p className="text-muted mb-4">
            Shopify&apos;s pricing page shows the platform fee. Here&apos;s what a realistic monthly bill looks like:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">New Store</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Growing Store</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Established Store</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Shopify plan</td>
                  <td className="px-4 py-2.5">$39 (Basic)</td>
                  <td className="px-4 py-2.5">$105 (Shopify)</td>
                  <td className="px-4 py-2.5">$399 (Advanced)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Theme</td>
                  <td className="px-4 py-2.5">$0 (free theme)</td>
                  <td className="px-4 py-2.5">$15/mo amortized ($180 theme)</td>
                  <td className="px-4 py-2.5">$29/mo amortized ($350 theme)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Apps (3&ndash;8 typical)</td>
                  <td className="px-4 py-2.5">$30&ndash;$50/mo</td>
                  <td className="px-4 py-2.5">$80&ndash;$150/mo</td>
                  <td className="px-4 py-2.5">$150&ndash;$400/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Transaction fees (on $10K/mo)</td>
                  <td className="px-4 py-2.5">$320 (Shopify Payments)</td>
                  <td className="px-4 py-2.5">$300</td>
                  <td className="px-4 py-2.5">$280</td>
                </tr>
                <tr className="bg-surface-alt/50 font-semibold">
                  <td className="px-4 py-2.5 font-bold text-foreground">Realistic Total</td>
                  <td className="px-4 py-2.5 font-bold">$389&ndash;$409/mo</td>
                  <td className="px-4 py-2.5 font-bold">$500&ndash;$570/mo</td>
                  <td className="px-4 py-2.5 font-bold">$858&ndash;$1,108/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The gap:</strong> Shopify advertises &quot;starting at $39/month&quot; but a new store doing $10,000/month in revenue realistically spends $389&ndash;$409/month when you include payment processing and a few essential apps. That&apos;s 10x the advertised price.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Transaction fees if not using Shopify Payments.</strong> 2% on Basic, 1% on Shopify, 0.6% on Advanced &mdash; on top of your gateway&apos;s fees. This is by far the biggest hidden cost. Use Shopify Payments to avoid it.</li>
            <li><strong className="text-foreground">Paid apps average $20&ndash;$50/month each.</strong> Most stores need 3&ndash;8 apps for reviews, email marketing, upsells, SEO, and shipping. At $20&ndash;$50 each, that&apos;s $60&ndash;$400/month in app costs alone.</li>
            <li><strong className="text-foreground">Premium themes cost $180&ndash;$350.</strong> Shopify&apos;s free themes are functional but basic. Premium themes from the theme store are one-time purchases but still represent meaningful upfront cost.</li>
            <li><strong className="text-foreground">POS Pro add-on: $89/month per location.</strong> If you sell in physical stores, Shopify POS Lite is included but limited. POS Pro with staff permissions, smart inventory, and unlimited registers costs $89/month per retail location.</li>
            <li><strong className="text-foreground">No free tier.</strong> Unlike many SaaS tools, Shopify has no permanent free plan. The 3-day trial and $1/month promo period are temporary. You&apos;re paying $39+/month from month 4.</li>
            <li><strong className="text-foreground">Shopify Payments availability.</strong> Shopify Payments isn&apos;t available in all countries. If you&apos;re in an unsupported country, you&apos;re forced to use a third-party gateway and pay the additional transaction fee.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Basic ($39/mo)</strong> &mdash; Starting a new store, under $10,000/month in revenue, 1&ndash;2 people managing the store. Basic covers all essential e-commerce features. Most new stores should start here.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Shopify ($105/mo)</strong> &mdash; Growing stores doing $10,000&ndash;$50,000/month. The lower transaction fees (1% vs 2% on third-party gateways) and professional reports justify the upgrade at this volume. Need 5 staff accounts.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Advanced ($399/mo)</strong> &mdash; Established stores doing $50,000+/month, selling internationally (duties and import taxes), or needing advanced reporting and custom pricing. The 0.6% transaction fee and 15 staff accounts suit mid-market operations.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Plus ($2,300/mo)</strong> &mdash; Enterprise e-commerce with custom checkout, unlimited staff, Shopify Functions, and dedicated support. Typically for stores doing $500,000+/month or brands needing checkout customization.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Upgrade: The Transaction Fee Break-Even</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Revenue</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Basic + 2% fee</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Shopify + 1% fee</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Savings on Shopify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$5,000</td>
                  <td className="px-4 py-2.5">$39 + $100 = $139</td>
                  <td className="px-4 py-2.5">$105 + $50 = $155</td>
                  <td className="px-4 py-2.5 text-red-400">-$16 (Basic wins)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$10,000</td>
                  <td className="px-4 py-2.5">$39 + $200 = $239</td>
                  <td className="px-4 py-2.5">$105 + $100 = $205</td>
                  <td className="px-4 py-2.5 text-green-400">$34 (Shopify wins)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$25,000</td>
                  <td className="px-4 py-2.5">$39 + $500 = $539</td>
                  <td className="px-4 py-2.5">$105 + $250 = $355</td>
                  <td className="px-4 py-2.5 text-green-400">$184 (Shopify wins)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$50,000</td>
                  <td className="px-4 py-2.5">$39 + $1,000 = $1,039</td>
                  <td className="px-4 py-2.5">$105 + $500 = $605</td>
                  <td className="px-4 py-2.5 text-green-400">$434 (Shopify wins)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Break-even point:</strong> At roughly $6,600/month in sales using a third-party gateway, upgrading from Basic to Shopify saves money. If you use Shopify Payments (no third-party fee), the upgrade decision is based on features and staff accounts, not fees.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">WooCommerce</strong> is free (open-source) and runs on WordPress. Hosting costs $7&ndash;$40/month, and you avoid Shopify&apos;s platform fees entirely. The tradeoff: you need technical knowledge to set up, maintain, and secure a WooCommerce store. Plugin costs ($50&ndash;$300/year each) and developer time can add up. For technically capable teams, WooCommerce is significantly cheaper at scale.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">For digital products only:</strong> Gumroad charges 10% per sale with no monthly fee, and Lemon Squeezy charges 5% + $0.50 per sale. If you sell digital products exclusively, these platforms are dramatically simpler and cheaper than Shopify for low-volume sellers.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Shopify actually cost per month?</h3>
                <p className="text-muted">Platform fee: Basic $39, Shopify $105, Advanced $399, Plus $2,300. But the real monthly cost includes transaction fees, apps ($60&ndash;$400/mo), and themes. A typical new store on Basic doing $10,000/month in revenue pays $389&ndash;$409/month total.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Shopify have a free plan?</h3>
                <p className="text-muted">No. Shopify offers a 3-day free trial and sometimes a $1/month promotional rate for the first 3 months. After that, Basic starts at $39/month. There is no permanent free tier.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What are Shopify transaction fees?</h3>
                <p className="text-muted">If you use Shopify Payments: 2.9% + $0.30 (Basic), 2.7% + $0.30 (Shopify), 2.5% + $0.30 (Advanced) per online transaction. If you use a third-party gateway (Stripe, PayPal): add an extra 2% (Basic), 1% (Shopify), or 0.6% (Advanced) on top of your gateway&apos;s fees. Using Shopify Payments avoids the extra fee.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from Shopify Basic?</h3>
                <p className="text-muted">Upgrade to Shopify ($105/mo) when you exceed $6,600/month in sales using a third-party gateway (the fee savings pay for the upgrade), need more than 2 staff accounts, or need professional reports. Upgrade to Advanced ($399/mo) when you sell internationally or exceed $50,000/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Shopify vs WooCommerce: which is cheaper?</h3>
                <p className="text-muted">WooCommerce has no platform fee (it&apos;s open-source). Hosting costs $7&ndash;$40/month. At low volumes, WooCommerce is cheaper. At scale, WooCommerce saves significantly on platform and transaction fees but costs more in developer time and plugin management. Shopify wins on simplicity; WooCommerce wins on total cost for technical teams.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["shopify", "woocommerce", "bigcommerce"]}
            comparisons={["shopify-vs-woocommerce", "shopify-vs-bigcommerce"]}
            guides={["ecommerce-stack-solo-creator", "who-should-not-use-shopify"]}
          />
        </div>
      </article>
    </>
  );
}
