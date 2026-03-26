import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Is Shopify Worth $39/Month? (For Physical Products, Yes)",
  description:
    "Shopify Basic at $39/mo is worth it for physical product e-commerce. For digital products, Gumroad (10% fee) or Lemon Squeezy (5% fee) are cheaper. The real cost is $39 + apps + transaction fees.",
};

export default function IsShopifyWorth39PerMonthPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Is Shopify Worth $39/Month?</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Quick Answer</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Is Shopify Worth $39/Month?</h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">Yes, if you sell physical products and need a complete e-commerce
            platform.</strong> Shopify Basic at $39/month gives you an online store, payment
            processing (Shopify Payments), inventory management, and shipping labels. No free
            tier (just a 3-day trial, then $1/month for 3 months). For digital products, Gumroad
            or Lemon Squeezy are simpler and have no monthly fee.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>8 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">What $39/Month Actually Gets You</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>Full online store with themes and checkout</li>
              <li>Shopify Payments (no transaction fee; 2.9% + $0.30 credit card processing)</li>
              <li>2 staff accounts, basic reports</li>
              <li>Up to 77% shipping discount</li>
              <li>Abandoned cart recovery emails</li>
              <li>Access to 8,000+ app marketplace</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">The Real Monthly Cost</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost Item</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Typical Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2.5 text-foreground">Shopify Basic plan</td><td className="px-4 py-2.5 text-muted">$39/mo</td></tr>
                  <tr><td className="px-4 py-2.5 text-foreground">Essential apps (email, reviews, SEO)</td><td className="px-4 py-2.5 text-muted">$20-$80/mo</td></tr>
                  <tr><td className="px-4 py-2.5 text-foreground">Premium theme (one-time)</td><td className="px-4 py-2.5 text-muted">$180-$350</td></tr>
                  <tr><td className="px-4 py-2.5 text-foreground">Transaction fees (non-Shopify Payments)</td><td className="px-4 py-2.5 text-muted">2% per transaction</td></tr>
                  <tr className="bg-surface"><td className="px-4 py-2.5 text-foreground font-semibold">Realistic total</td><td className="px-4 py-2.5 text-accent font-semibold">$60-$120/mo</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">The Caveat</h2>
            <p className="text-muted leading-relaxed">
              The $39/month is the floor, not the ceiling. Most stores spend $60-$120/month
              after adding essential apps. The Shopify plan ($105/month) and Advanced ($399/month)
              add more staff accounts, better reports, and lower transaction fees. If you sell
              fewer than 10 products or only sell digital products, Shopify is overkill. Use
              Carrd ($19/year) plus Gumroad or Lemon Squeezy instead.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is WooCommerce cheaper than Shopify?</h3>
                <p className="text-sm text-muted">WooCommerce plugin is free, but hosting ($7-$40/month), themes, and extensions bring total cost to $30-$100/month. Similar total cost, more technical management.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Should I use Shopify Payments?</h3>
                <p className="text-sm text-muted">Yes. Using third-party payment gateways adds a 2% transaction fee on Basic (on top of the gateway own fees). Shopify Payments eliminates this.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["shopify"]}
            comparisons={["shopify-vs-woocommerce"]}
            guides={["shopify-pricing-explained", "who-should-not-use-shopify", "shopify-vs-woocommerce-detailed", "best-tools-for-ecommerce-startups"]}
          />
        </div>
      </article>
    </>
  );
}
