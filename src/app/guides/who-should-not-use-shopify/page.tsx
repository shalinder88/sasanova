import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Shopify (And What to Use Instead)",
  description:
    "Shopify starts at $39/month with no free tier. Here are 4 situations where Shopify is the wrong choice — with cheaper, simpler alternatives for digital products, small catalogs, and courses.",
};

export default function WhoShouldNotUseShopify() {
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
              Who Should NOT Use Shopify
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Anti-Recommendation
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use Shopify (And What to Use Instead)
          </h1>
          <p className="text-lg text-muted">
            Shopify is the default e-commerce platform for a reason &mdash; it&apos;s powerful, reliable, and easy to use. It also starts at $39/month with no free tier, charges transaction fees if you don&apos;t use Shopify Payments, and adds up fast with apps and themes. Here&apos;s when to skip it.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Decision Box ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Quick Version</p>
            <p className="text-sm text-muted">
              Shopify is built for businesses selling physical products who want an all-in-one store with payments, shipping, and inventory. If you&apos;re selling digital products, have fewer than 10 products, or are building courses, Shopify adds cost and complexity you don&apos;t need. The Basic plan starts at $39/month with a 2% transaction fee if not using Shopify Payments.
            </p>
          </div>

          {/* ── Case 1: Digital Products ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Selling Digital Products (PDFs, Templates, Downloads)</h2>
          <p className="text-muted mb-4">
            Shopify Basic at $39/month is designed for physical product stores with shipping, inventory, and fulfillment features. If you&apos;re selling a $29 PDF template or a $99 design kit, you&apos;re paying $468/year in platform fees before you sell a single unit. Plus potential transaction fees of 2% on Basic if not using Shopify Payments.
          </p>
          <p className="text-muted mb-4">
            Gumroad charges $0/month and takes 10% + $0.50 per sale (plus payment processing). Lemon Squeezy charges $0/month and takes 5% + $0.50 per sale. Both handle global tax compliance, delivery, and checkout without monthly fees. You only pay when you sell.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Gumroad</strong> &mdash; $0/month. 10% + $0.50 per sale (+ ~2.9% + $0.30 payment processing). Instant delivery, pay-what-you-want, memberships. Simplest possible digital storefront. <Link href="/tools/gumroad" className="text-accent hover:underline">See Gumroad review</Link></li>
              <li><strong className="text-foreground">Lemon Squeezy</strong> &mdash; $0/month (Fresh plan). 5% + $0.50 per transaction. Handles global tax as merchant of record. Built specifically for software and digital products. Acquired by Stripe. <Link href="/tools/lemonsqueezy" className="text-accent hover:underline">See Lemon Squeezy review</Link></li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Fee</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Per-Sale Fee</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tax Handling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Shopify Basic</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                  <td className="px-4 py-2.5">2% (or 0% with Shopify Payments)</td>
                  <td className="px-4 py-2.5">Manual / app required</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Gumroad</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">10% + $0.50 + processing</td>
                  <td className="px-4 py-2.5">Automatic (included)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lemon Squeezy</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">5% + $0.50</td>
                  <td className="px-4 py-2.5">Automatic (merchant of record)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Case 2: Small Catalog ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Selling Fewer Than 10 Products</h2>
          <p className="text-muted mb-4">
            If you have 3&ndash;10 products &mdash; a few physical items, some merch, or a small collection &mdash; Shopify&apos;s inventory management, shipping calculators, and multi-channel selling are features you&apos;ll barely use. You&apos;re paying $39/month for infrastructure designed for stores with hundreds of SKUs.
          </p>
          <p className="text-muted mb-4">
            Carrd Pro Standard at $19/year ($1.58/month) lets you build a one-page site with embedded Stripe payment buttons. That&apos;s a 96% cost reduction compared to Shopify. You lose the full storefront experience but gain simplicity and savings that make sense for a tiny catalog.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Carrd Pro Standard</strong> &mdash; $19/year ($1.58/month). Custom domain, forms, embeds, payments via Stripe. Perfect for a small product catalog on a single page. <Link href="/tools/carrd" className="text-accent hover:underline">See Carrd review</Link></li>
              <li><strong className="text-foreground">Squarespace Core</strong> &mdash; $36/month ($24/month annual). Beautiful templates, unlimited products, 0% transaction fee. A full website builder with built-in commerce. <Link href="/tools/squarespace" className="text-accent hover:underline">See Squarespace review</Link></li>
            </ul>
          </div>

          {/* ── Case 3: Course Creators ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Course Creators and Membership Sellers</h2>
          <p className="text-muted mb-4">
            Shopify was built for product commerce, not content commerce. Selling online courses on Shopify requires third-party apps (like Thinkific or Teachable integrations), each adding $30&ndash;$100/month on top of your Shopify subscription. The total stack cost for course selling on Shopify can easily hit $100&ndash;$200/month.
          </p>
          <p className="text-muted mb-4">
            Dedicated course platforms like Teachable and Kajabi include course hosting, student management, payment processing, and community features in one package. Gumroad handles course-like products (video bundles, membership access) with zero monthly fees. The tools built for this use case are cheaper and better than bolting course features onto Shopify.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Gumroad</strong> &mdash; $0/month. Sell digital products, memberships, and subscription access. 10% + $0.50 per sale. No course-specific features, but handles content delivery for digital bundles. <Link href="/tools/gumroad" className="text-accent hover:underline">See Gumroad review</Link></li>
              <li><strong className="text-foreground">Lemon Squeezy</strong> &mdash; $0/month. 5% + $0.50 per transaction. License key management, subscription billing, and digital delivery built-in. Better for SaaS-style access models. <Link href="/tools/lemonsqueezy" className="text-accent hover:underline">See Lemon Squeezy review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: Cost Sensitivity ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Bootstrapped Sellers Watching Every Dollar</h2>
          <p className="text-muted mb-4">
            Shopify&apos;s real cost isn&apos;t just $39/month. Paid apps average $20&ndash;$50/month each (most stores use 3&ndash;6 apps). Premium themes cost $180&ndash;$350 one-time. Transaction fees add 2% on the Basic plan if you&apos;re not using Shopify Payments. A realistic first-year cost is $800&ndash;$2,000+ depending on apps and theme choices.
          </p>
          <p className="text-muted mb-4">
            Squarespace Basic at $25/month ($16/month annual) includes a website builder, unlimited bandwidth and storage, and basic commerce with a 2% transaction fee. No app marketplace to drain your wallet. WooCommerce (free plugin) on a $7&ndash;$15/month host gives you maximum control with lower ongoing costs, though setup is more complex.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Squarespace Basic</strong> &mdash; $25/month ($16/month annual). Beautiful templates, unlimited bandwidth, built-in commerce. No app marketplace means no surprise costs. <Link href="/tools/squarespace" className="text-accent hover:underline">See Squarespace review</Link></li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Shopify IS the Right Choice</h2>
          <p className="text-muted mb-4">
            Shopify is the right choice for <strong className="text-foreground">businesses selling physical products who need a scalable, all-in-one e-commerce platform with payment processing, shipping, inventory management, and multi-channel selling.</strong>
          </p>
          <p className="text-muted mb-4">
            If you&apos;re shipping physical goods, need inventory tracking across channels (Amazon, Instagram, retail POS), and want a platform that scales from 10 products to 10,000, Shopify&apos;s ecosystem is unmatched. The 8,000+ app marketplace, Shopify Payments (removing transaction fees), and shipping discounts up to 77% on the Basic plan make it genuinely the best platform for serious e-commerce operations.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Shopify have a free tier?</h3>
                <p className="text-muted">No. Shopify offers a 3-day free trial, then $1/month for the first 3 months. After that, Basic is $39/month, Shopify is $105/month, and Advanced is $399/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What are Shopify&apos;s transaction fees?</h3>
                <p className="text-muted">If you use Shopify Payments: 0% transaction fee (just standard credit card processing). If you use a third-party payment gateway: 2% on Basic, 1% on Shopify, 0.6% on Advanced. This is on top of your payment processor&apos;s fees.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I sell digital products on Shopify?</h3>
                <p className="text-muted">Yes, with apps like Digital Downloads (free from Shopify) or third-party apps. But the experience is bolted on, not native. Gumroad and Lemon Squeezy are built specifically for digital product delivery and are cheaper.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much do Shopify apps really cost?</h3>
                <p className="text-muted">Most stores use 3&ndash;6 paid apps. Common apps (reviews, email, upsells, SEO) range from $10&ndash;$50/month each. App costs of $50&ndash;$200/month on top of the platform fee are typical for established stores.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["shopify", "gumroad", "lemonsqueezy", "squarespace", "carrd"]}
          comparisons={["shopify-vs-squarespace", "shopify-vs-woocommerce"]}
          guides={["ecommerce-stack-solo-creator", "website-builder-for-business"]}
        />
      </article>
    </>
  );
}
