import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Stack for E-commerce Brands: Store, Email, Analytics, CRM, and Automation",
  description:
    "The complete software stack for e-commerce brands. Shopify Basic at $39/mo for your store, Brevo Starter at $9/mo for email, PostHog Free for analytics, HubSpot CRM Free, and Make Core at $10.59/mo for automation.",
};

export default function SaasStackForEcommerceBrands() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Stack for E-commerce Brands</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Industry Stack
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Stack for E-commerce Brands: Store, Email, Analytics, CRM, and Automation
          </h1>
          <p className="text-lg text-muted">
            E-commerce brands need a store platform, email marketing, analytics, customer management, and automation glue. Here&apos;s the exact stack from $0 to full-scale e-commerce operations &mdash; with verified pricing and honest trade-offs at every tier.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">Recommended Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Need</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">Store Platform</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Shopify</td>
                  <td className="px-4 py-2.5">Basic</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Email Marketing</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                  <td className="px-4 py-2.5">Starter</td>
                  <td className="px-4 py-2.5">$9/mo (5,000 emails/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Analytics</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">PostHog</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0 (1M events/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Customer CRM</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot CRM</td>
                  <td className="px-4 py-2.5">Free Tools</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Automation</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                  <td className="px-4 py-2.5">Core</td>
                  <td className="px-4 py-2.5">$10.59/mo (10,000 ops)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Customer Support</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0 (2 agents)</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-semibold text-foreground" colSpan={3}>Total</td>
                  <td className="px-4 py-2.5 font-semibold text-foreground">$58.59/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Why These Tools</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Shopify Basic ($39/mo) for Your Store</h3>
          <p className="text-muted mb-4">
            Shopify Basic gives you 2 staff accounts, basic reports, and up to 77% shipping discounts. It handles product management, checkout, payments, and inventory out of the box. Transaction fees: 2.9% + $0.30 per transaction with Shopify Payments (2% additional if using a third-party gateway). For digital products only, consider Lemon Squeezy ($0/mo + 5% + $0.50 per transaction) or Gumroad. Alternative: WooCommerce (free plugin, but requires hosting at $7&ndash;$40+/mo).
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Brevo Starter ($9/mo) for Email Marketing</h3>
          <p className="text-muted mb-4">
            Brevo charges by emails sent, not contacts stored &mdash; critical for e-commerce brands with large customer lists. Starter gives 5,000 emails/mo with no daily send limit. Free tier supports 100,000 contacts with 300 emails/day. For comparison, Mailchimp Standard at $20/mo limits you to 500 contacts and 6,000 sends. At 10,000 contacts, Mailchimp charges significantly more while Brevo stays at $9/mo.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">PostHog Free ($0) for Analytics</h3>
          <p className="text-muted mb-4">
            PostHog gives 1M analytics events/mo, 5K session replays, and feature flags &mdash; all free. For e-commerce, session replays show where customers drop off. It&apos;s more powerful than Google Analytics for understanding customer behavior. Alternative: Plausible at $9/mo for simple, privacy-friendly web analytics.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Make Core ($10.59/mo) for Automation</h3>
          <p className="text-muted mb-4">
            Connect Shopify to your email, CRM, and support tools. Key automations: new order &rarr; add to Brevo segment, abandoned cart &rarr; trigger email sequence, support ticket created &rarr; notify Slack. Make Core gives 10,000 operations/month. For simpler needs, Make Free offers 1,000 ops/mo. Zapier Professional at $29.99/mo is an alternative with more pre-built templates.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Budget Tiers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Digital Products Only</td>
                  <td className="px-4 py-2.5 text-muted">Lemon Squeezy Free + Brevo Free + PostHog Free + HubSpot Free + Make Free</td>
                  <td className="px-4 py-2.5">$0/mo (+ transaction fees)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Starting Out</td>
                  <td className="px-4 py-2.5 text-muted">Shopify Basic ($39) + all free tools</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Growing Brand</td>
                  <td className="px-4 py-2.5 text-muted">Full recommended stack above</td>
                  <td className="px-4 py-2.5">$58.59/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Scaling (10K+ orders/mo)</td>
                  <td className="px-4 py-2.5 text-muted">Shopify ($105) + Brevo Standard ($18) + PostHog + HubSpot Starter ($20/seat) + Make Pro ($18.82) + Freshdesk Growth ($15/agent)</td>
                  <td className="px-4 py-2.5">~$177/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Key Automations to Set Up First</h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li><strong className="text-foreground">New customer &rarr; CRM + welcome email.</strong> Shopify new order &rarr; Make &rarr; create HubSpot contact + trigger Brevo welcome sequence.</li>
            <li><strong className="text-foreground">Abandoned cart recovery.</strong> Shopify has built-in abandoned cart emails on all plans. For more advanced sequences, connect to Brevo via Make.</li>
            <li><strong className="text-foreground">Support ticket from order issues.</strong> Shopify order tag &quot;issue&quot; &rarr; Make &rarr; create Freshdesk ticket with order details.</li>
            <li><strong className="text-foreground">Review request post-purchase.</strong> 7 days after delivery &rarr; Make delay &rarr; Brevo review request email.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Why Brevo instead of Mailchimp for e-commerce?</h3>
          <p className="text-muted mb-4">
            Mailchimp charges by contacts stored. E-commerce stores accumulate large customer lists fast. At 10,000 contacts, Mailchimp Standard is $100+/mo while Brevo Starter stays at $9/mo (5,000 emails/mo) regardless of list size. Brevo&apos;s pricing model is fundamentally better for e-commerce.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Should I use Shopify Email instead of Brevo?</h3>
          <p className="text-muted mb-4">
            Shopify Email gives 10,000 free emails/mo, then $1 per 1,000 after that. For basic campaigns, it works. But Brevo offers better automation sequences, A/B testing, and SMS marketing. For serious email marketing, Brevo is worth the $9/mo.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Do I need a separate CRM for e-commerce?</h3>
          <p className="text-muted mb-4">
            Not initially. Shopify tracks customer data, and HubSpot CRM Free gives you a pipeline for wholesale, B2B, or partnership leads. Add a dedicated CRM when you have B2B relationships or complex customer segments that Shopify&apos;s built-in tools can&apos;t handle.
          </p>
        </div>

        <RelatedLinks
          tools={["shopify", "brevo", "posthog", "hubspot-crm", "make", "freshdesk"]}
          comparisons={["shopify-vs-woocommerce"]}
          guides={[
            "email-marketing-ecommerce",
            "ecommerce-stack-solo-creator",
            "best-tools-for-ecommerce-startups",
          ]}
        />
      </article>
    </>
  );
}
