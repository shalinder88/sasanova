import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Analytics: What You Actually See at Each Price Tier",
  description:
    "Basic opens and clicks, revenue attribution, A/B testing, and comparative analysis across Mailchimp, Kit, beehiiv, ActiveCampaign, and Brevo. Exact prices for every analytics feature.",
};

export default function EmailAnalyticsCompared() {
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
              Email Analytics Compared
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Email Marketing
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Analytics: What You Actually See at Each Price Tier
          </h1>
          <p className="text-lg text-muted">
            Every email platform shows you open rates and click rates. But revenue attribution, A/B testing, comparative benchmarks, and subscriber-level analytics are gated behind paid tiers. This guide maps exactly which analytics features you get at each price point across Mailchimp, Kit, beehiiv, ActiveCampaign, and Brevo.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Analytics Tiers ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What &ldquo;Analytics&rdquo; Actually Means at Each Level</h2>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Basic Metrics (Free on All Platforms)</h3>
              <p className="text-sm text-muted">Open rate, click rate, unsubscribe rate, bounce rate. Every platform in this comparison provides these on free tiers. Keep in mind that Apple Mail Privacy Protection inflates open rates by 15&ndash;30% since 2021 &mdash; click rate is the more reliable metric.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Advanced Reporting ($13&ndash;$49/mo)</h3>
              <p className="text-sm text-muted">Click maps, device/location breakdowns, comparative campaign performance, subscriber engagement scoring. This is where analytics start actually informing decisions beyond vanity metrics.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Revenue Attribution ($20&ndash;$79/mo)</h3>
              <p className="text-sm text-muted">Tracking actual revenue generated per email, per automation, per segment. Only meaningful for e-commerce and SaaS businesses. Mailchimp Standard ($20/mo), ActiveCampaign Plus ($49/mo), and Kit Creator Pro ($79/mo) offer this.</p>
            </div>
          </div>

          {/* ── Comparison Table ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Analytics Features by Platform and Tier</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Kit</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Brevo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Opens/clicks/bounces</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Launch ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($15/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Click maps</td>
                  <td className="px-4 py-2.5 text-green-400">Essentials ($13/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($15/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($9/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">A/B testing</td>
                  <td className="px-4 py-2.5 text-green-400">Essentials ($13/mo)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Creator ($39/mo, subject only)</td>
                  <td className="px-4 py-2.5 text-green-400">Scale ($49/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($15/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Standard ($18/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Comparative reports</td>
                  <td className="px-4 py-2.5 text-green-400">Standard ($20/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-green-400">Scale ($49/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Plus ($49/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Standard ($18/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Revenue attribution</td>
                  <td className="px-4 py-2.5 text-green-400">Standard ($20/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Creator Pro ($79/mo)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Scale ($49/mo, basic)</td>
                  <td className="px-4 py-2.5 text-green-400">Plus ($49/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">3D / advanced analytics</td>
                  <td className="px-4 py-2.5 text-yellow-400">Premium ($350/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-green-400">Max ($109/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Pro ($79/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Subscriber scoring</td>
                  <td className="px-4 py-2.5 text-yellow-400">Standard ($20/mo, basic)</td>
                  <td className="px-4 py-2.5 text-green-400">Creator Pro ($79/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-green-400">Plus ($49/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── A/B Testing Deep Dive ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">A/B Testing: Varies More Than You Think</h2>
          <p className="text-muted mb-4">
            A/B testing sounds simple, but each platform offers different levels of sophistication.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Mailchimp Essentials ($13/mo):</strong> Subject line, from name, content, and send time testing. Auto-sends winner to remaining list.</li>
            <li><strong className="text-foreground">ActiveCampaign Starter ($15/mo):</strong> Subject line and content testing. Split automations available on Pro ($79/mo) for testing entire automation paths.</li>
            <li><strong className="text-foreground">Brevo Standard ($18/mo):</strong> Subject line and content A/B testing with automatic winner selection.</li>
            <li><strong className="text-foreground">Kit Creator ($39/mo):</strong> Subject line testing only. No content or send time variants.</li>
            <li><strong className="text-foreground">beehiiv Scale ($49/mo):</strong> Subject line, content, and send time testing with built-in analytics on each variant.</li>
          </ul>

          {/* ── Revenue Attribution ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Revenue Attribution: Who Offers It and at What Price</h2>
          <p className="text-muted mb-4">
            Revenue attribution connects email campaigns to actual purchases. If you run an e-commerce store or sell products through your email list, this is the metric that matters most.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier required</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                  <td className="px-4 py-2.5">Standard</td>
                  <td className="px-4 py-2.5">$20/mo (500 contacts)</td>
                  <td className="px-4 py-2.5">Shopify/WooCommerce integration required</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td>
                  <td className="px-4 py-2.5">Plus</td>
                  <td className="px-4 py-2.5">$49/mo (1,000 contacts)</td>
                  <td className="px-4 py-2.5">Deep e-commerce integrations, goal tracking</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Kit</td>
                  <td className="px-4 py-2.5">Creator Pro</td>
                  <td className="px-4 py-2.5">$79/mo (1,000 subscribers)</td>
                  <td className="px-4 py-2.5">Primarily for digital product sales via Kit Commerce</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                  <td className="px-4 py-2.5">Scale</td>
                  <td className="px-4 py-2.5">$49/mo (unlimited)</td>
                  <td className="px-4 py-2.5">Boost revenue and paid subscription tracking</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                  <td className="px-4 py-2.5">No native revenue attribution</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── The Opinionated Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Opinionated Verdict</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Best analytics for e-commerce:</strong> Mailchimp Standard ($20/mo) offers the best revenue attribution at the lowest price point when connected to Shopify or WooCommerce. ActiveCampaign Plus ($49/mo) goes deeper with goal tracking and CRM-integrated revenue reporting.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Best analytics for newsletters:</strong> beehiiv Scale ($49/mo) provides 3D analytics, subscriber engagement scoring, and revenue tracking from Boosts and paid subscriptions. Max ($109/mo) adds advanced analytics and API access.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Best A/B testing on a budget:</strong> Mailchimp Essentials ($13/mo) gives you multi-variable A/B testing with automatic winner selection. ActiveCampaign Starter ($15/mo) is close behind.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">If you just need basic metrics:</strong> Every platform&apos;s free tier shows opens, clicks, and bounces. Don&apos;t pay for analytics you won&apos;t act on.
            </p>
          </div>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Are email open rates still reliable?</h3>
                <p className="text-muted">Less than they used to be. Apple Mail Privacy Protection (since iOS 15 in 2021) pre-fetches email pixels, inflating open rates by 15&ndash;30%. Click-through rate and conversion rate are now the more reliable engagement metrics.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which platform has the best A/B testing?</h3>
                <p className="text-muted">Mailchimp Essentials ($13/mo) offers the most complete A/B testing at the lowest price: subject line, content, from name, and send time. ActiveCampaign is best for split-testing entire automation paths on Pro ($79/mo).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need revenue attribution?</h3>
                <p className="text-muted">If you sell products or services through email, yes. It is the only metric that directly ties email activity to business outcomes. If you run a free newsletter without monetization, basic engagement metrics are sufficient.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why does Brevo lack revenue attribution?</h3>
                <p className="text-muted">Brevo focuses on email delivery volume rather than e-commerce integration. It is built for businesses sending high-volume transactional and marketing emails, not for tracking product-level revenue per campaign. For revenue tracking, pair Brevo with a dedicated analytics tool.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/email-template-design-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Email Template Builders</span>
                <span className="block text-xs text-muted mt-1">Which platforms have the best designer</span>
              </Link>
              <Link
                href="/guides/email-segmentation-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Email Segmentation Compared</span>
                <span className="block text-xs text-muted mt-1">What each platform lets you do at each tier</span>
              </Link>
              <Link
                href="/guides/email-deliverability-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Email Deliverability</span>
                <span className="block text-xs text-muted mt-1">Which platforms land in the inbox</span>
              </Link>
              <Link
                href="/guides/email-marketing-annual-cost-2026"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Email Marketing Annual Costs</span>
                <span className="block text-xs text-muted mt-1">What you will actually pay in 2026</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["mailchimp", "activecampaign", "convertkit", "beehiiv", "brevo"]}
            comparisons={["mailchimp-vs-kit-detailed", "beehiiv-vs-kit-vs-mailchimp-for-creators"]}
            guides={[
              "email-segmentation-compared",
              "email-template-design-compared",
              "email-marketing-annual-cost-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
