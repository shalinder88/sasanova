import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "E-commerce Startup Stack Under $100/Month",
  description:
    "The exact e-commerce startup software stack under $100/month. Shopify Basic $39/mo, Brevo Starter $9/mo, Plausible $9/mo, Make Core $10.59/mo. Total: $67.59/mo. All prices verified against vendor pages.",
  openGraph: {
    title: "E-commerce Startup Stack Under $100/Month",
    description:
      "Store, email, analytics, and automation for e-commerce startups at $67.59/month total. Every price verified.",
  },
};

export default function BestToolsForEcommerceStartups() {
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
              Best Tools for E-commerce Startups
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Persona Stack
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            E-commerce Startup Stack Under $100/Month
          </h1>
          <p className="text-lg text-muted">
            You need a store, email marketing, analytics, and automation to launch an e-commerce brand. Most startups overspend on each category. Here&apos;s a complete stack for $67.59/month that covers everything you need from launch through your first $50K in revenue &mdash; every price verified against actual vendor pages.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Complete E-commerce Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Store</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/shopify" className="text-accent hover:underline">Shopify</Link></td>
                  <td className="px-4 py-2.5 text-muted">Basic</td>
                  <td className="px-4 py-2.5 text-muted">$39/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email Marketing</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/brevo" className="text-accent hover:underline">Brevo</Link></td>
                  <td className="px-4 py-2.5 text-muted">Starter</td>
                  <td className="px-4 py-2.5 text-muted">$9/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/plausible" className="text-accent hover:underline">Plausible</Link></td>
                  <td className="px-4 py-2.5 text-muted">Starter</td>
                  <td className="px-4 py-2.5 text-muted">$9/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/make" className="text-accent hover:underline">Make</Link></td>
                  <td className="px-4 py-2.5 text-muted">Core</td>
                  <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Total Monthly Cost</td>
                  <td className="px-4 py-2.5 font-semibold text-green-400">$67.59/mo</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ── Store ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Store: Shopify Basic ($39/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Shopify Basic at $39/mo</strong> gives you a full online store, 2 staff accounts, basic reports, and up to 77% shipping discounts. Shopify Payments eliminates the 2% transaction fee &mdash; use it unless you have a specific reason for another processor.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Hidden costs to watch:</strong> Paid apps average $20&ndash;$50/mo each. Premium themes run $180&ndash;$350 one-time. Start with a free theme and zero paid apps. Add apps only when you can measure their impact on revenue.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why not WooCommerce?</strong> WooCommerce is free to install, but hosting ($7&ndash;$40+/mo), security patches, plugin conflicts, and maintenance time add up. For a startup focused on selling &mdash; not managing infrastructure &mdash; Shopify&apos;s managed experience is worth $39/mo.
          </p>

          {/* ── Email ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email Marketing: Brevo Starter ($9/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo Starter at $9/mo</strong> gives you 5,000 emails/month with no daily limit and basic reporting. The key advantage: Brevo charges by emails sent, not contacts stored. You can have 100,000 contacts on the free plan. Starter removes the 300 emails/day cap.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why not Mailchimp?</strong> Mailchimp Free limits you to 250 contacts and 500 sends/month. Mailchimp Essentials ($13/mo at 500 contacts) gets expensive fast as your list grows because Mailchimp charges per contact. Brevo&apos;s contact-unlimited model is fundamentally better for e-commerce stores building large customer lists.
          </p>

          {/* ── Analytics ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Analytics: Plausible Starter ($9/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Plausible Starter at $9/mo</strong> gives you privacy-friendly analytics for 1 site with 10K pageviews/month, 3-year data retention, and email/Slack reports. The script is under 1KB &mdash; it won&apos;t slow your store. No cookies means no consent banner needed for GDPR compliance.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why not Google Analytics?</strong> GA4 is free but complex to set up correctly, requires a cookie consent banner, and the interface is overwhelming for e-commerce founders who need quick answers. Plausible gives you traffic sources, top pages, and conversion tracking in a single dashboard.
          </p>

          {/* ── Automation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation: Make Core ($10.59/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Make Core at $10.59/mo</strong> gives you 10,000 operations/month with unlimited scenarios. Use it to sync new Shopify orders to Brevo, auto-tag customers by product type, send review requests 14 days post-purchase, and update inventory in Google Sheets.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why Make over Zapier?</strong> Zapier Professional costs $29.99/mo for only 750 tasks. Make Core gives you 10,000 operations for $10.59/mo &mdash; roughly 13x more volume per dollar. The visual builder takes slightly longer to learn, but the cost savings compound monthly.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Klaviyo:</strong> The gold standard for e-commerce email, but starts at $45/mo for 1,001+ contacts. Brevo at $9/mo handles 80% of what startups need. Switch to Klaviyo when your email revenue justifies the premium.</li>
            <li><strong className="text-foreground">Shopify apps (most of them):</strong> The average Shopify store uses 6 paid apps at $20&ndash;$50/mo each. Start with zero. Add apps one at a time, measure revenue impact for 30 days, and remove any that don&apos;t pay for themselves.</li>
            <li><strong className="text-foreground">Hotjar/Heatmaps:</strong> Interesting but not actionable until you have 1,000+ monthly visitors. Focus on traffic first, optimization second.</li>
            <li><strong className="text-foreground">Paid social media tools:</strong> Post manually until you consistently publish 5+ times per week. Buffer Essentials ($6/channel/mo) is the first upgrade worth making.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes E-commerce Startups Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Installing 10 Shopify apps on day one.</strong> Each app adds cost ($20&ndash;$50/mo), potential conflicts, and page load time. Start with zero apps. Shopify&apos;s built-in features cover more than you think.</li>
            <li><strong className="text-foreground">Choosing Mailchimp because it&apos;s familiar.</strong> Mailchimp charges per contact. E-commerce stores build large customer lists fast. Brevo charges per email sent, which is fundamentally cheaper for stores with big lists and moderate send frequency.</li>
            <li><strong className="text-foreground">Skipping email marketing entirely.</strong> Abandoned cart emails alone recover 5&ndash;15% of lost sales. At $9/mo, Brevo Starter is the highest-ROI tool in this entire stack.</li>
            <li><strong className="text-foreground">Paying for Shopify ($105/mo) before needing it.</strong> Basic ($39/mo) handles up to 77% shipping discounts and 2 staff accounts. Upgrade to Shopify plan only when you need 5 staff accounts or better shipping rates.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Can I start even cheaper?</h3>
          <p className="text-muted mb-4">
            Yes. Use Brevo Free (300 emails/day, Brevo branding), Plausible&apos;s 30-day trial, and Make Free (1,000 ops, 2 scenarios). That drops fixed costs to $39/mo (Shopify only). But you&apos;ll outgrow the free tiers quickly once orders start flowing.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Why Shopify and not WooCommerce or BigCommerce?</h3>
          <p className="text-muted mb-4">
            Shopify gives startups the fastest path to a working store with the least technical overhead. WooCommerce requires managing WordPress hosting. BigCommerce has revenue-based mandatory plan upgrades ($50K, $180K thresholds). For a startup, Shopify Basic&apos;s simplicity is worth the $39/mo.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">When should I switch from Brevo to Klaviyo?</h3>
          <p className="text-muted mb-4">
            When email generates 20%+ of your revenue and you need advanced product recommendation emails, predictive analytics, and deep Shopify integration. That typically happens around $10K&ndash;$20K/mo in revenue.
          </p>
        </div>

        <RelatedLinks
          tools={["shopify", "brevo", "plausible", "make"]}
          comparisons={["shopify-vs-woocommerce", "make-vs-zapier"]}
          guides={[
            "email-marketing-ecommerce",
            "ecommerce-stack-solo-creator",
            "choosing-analytics-tool",
            "automation-zapier-vs-make-vs-n8n",
            "when-zapier-costs-more-than-make",
          ]}
        />
      </article>
    </>
  );
}
