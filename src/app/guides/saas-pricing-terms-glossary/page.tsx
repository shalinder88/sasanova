import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Pricing Glossary: 25 Terms You Need to Know",
  description:
    "25 SaaS pricing terms explained with real tool examples and exact prices. Per-seat, per-contact, MAU, MRR, ARR, churn, usage-based, freemium, reverse trial, and more.",
};

export default function SasPricingTermsGlossaryPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Pricing Glossary</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Glossary
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Pricing Glossary: 25 Terms You Need to Know
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            SaaS pricing pages are full of jargon designed to obscure what you&apos;re actually paying.
            This glossary defines 25 common pricing terms with real tool examples and exact prices
            so you can decode any pricing page in minutes.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Billing Model Terms</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Per-Seat Pricing (Per-User Pricing)</h3>
                <p className="text-muted">You pay for each user who has access. Cost scales linearly with team size. <strong className="text-foreground">Examples:</strong> Pipedrive Lite at $14/seat/month, HubSpot Starter at $20/seat/month, Salesforce Pro Suite at $100/seat/month. A 10-person team pays 10x the listed price.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Per-Contact Pricing</h3>
                <p className="text-muted">You pay based on how many contacts or subscribers you store. Cost grows as your audience grows. <strong className="text-foreground">Examples:</strong> Mailchimp Standard starts at $20/month for 500 contacts and scales to $100+/month at 5,000 contacts. ActiveCampaign Starter is $15/month at 1,000 contacts.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Usage-Based Pricing</h3>
                <p className="text-muted">You pay based on consumption: tasks, operations, events, or credits. <strong className="text-foreground">Examples:</strong> Zapier Professional at $29.99/month for 750 tasks. Make Core at $10.59/month for 10,000 operations. Pipedream Basic at $29/month for 2,000 credits.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Flat-Rate Pricing</h3>
                <p className="text-muted">One price regardless of users or usage. Predictable billing. <strong className="text-foreground">Examples:</strong> Basecamp at $349/month for unlimited users. beehiiv Scale at $49/month for unlimited subscribers. Rare and getting rarer as vendors move to per-seat models.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Tiered Pricing</h3>
                <p className="text-muted">Multiple plan levels with increasing features and limits at each tier. The most common SaaS pricing structure. <strong className="text-foreground">Examples:</strong> Pipedrive has 4 tiers from $14 to $99/seat. Notion has 4 tiers from $0 to Enterprise custom pricing.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Hybrid Pricing</h3>
                <p className="text-muted">Combines two models &mdash; typically a base fee plus usage or per-seat charges. <strong className="text-foreground">Examples:</strong> HubSpot Professional charges $890/month flat plus $20/seat for additional users. Intercom charges $39/seat plus $0.99 per AI resolution.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Free Tier and Trial Terms</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Freemium</h3>
                <p className="text-muted">A permanently free tier with limited features, designed to convert users to paid plans. <strong className="text-foreground">Examples:</strong> HubSpot Free (unlimited contacts, limited features), Kit Newsletter (10,000 subscribers, no automations), ClickUp Free (unlimited tasks, 60MB storage).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Free Trial</h3>
                <p className="text-muted">Full access to a paid plan for a limited time (typically 7&ndash;30 days). Requires credit card upfront in many cases. <strong className="text-foreground">Examples:</strong> Pipedrive (14-day trial), ActiveCampaign (14-day trial), Salesforce (30-day trial). NOT the same as a free tier.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Reverse Trial</h3>
                <p className="text-muted">You start on the full paid plan for free, then downgrade to a limited free tier when the trial ends. Designed to show you premium features before restricting access. <strong className="text-foreground">Examples:</strong> Grammarly gives some Pro features before settling on Free (basic grammar, 100 AI prompts/month).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Lifetime Deal (LTD)</h3>
                <p className="text-muted">A one-time payment for permanent access. Common on AppSumo. <strong className="text-foreground">Examples:</strong> TidyCal Individual at $29 one-time (vs. Calendly Standard at $12/user/month = $144/year). Risk: vendor may shut down or degrade the product over time.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Financial Metrics</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">MRR (Monthly Recurring Revenue)</h3>
                <p className="text-muted">The predictable revenue a SaaS company earns each month from subscriptions. Relevant to buyers because high MRR companies are less likely to shut down. Publicly traded SaaS companies report this in earnings.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">ARR (Annual Recurring Revenue)</h3>
                <p className="text-muted">MRR multiplied by 12. The annual version. HubSpot reported over $2.4 billion ARR. Smaller tools may not disclose ARR. Tools with high ARR are generally safer long-term bets.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Churn Rate</h3>
                <p className="text-muted">The percentage of customers who cancel in a given period. High churn signals problems. Average SaaS churn is 5&ndash;7% annually for enterprise, 10&ndash;15% for SMB tools. Not published by most vendors.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">MAU (Monthly Active Users)</h3>
                <p className="text-muted">Some tools charge based on unique visitors or active users rather than contacts or seats. <strong className="text-foreground">Examples:</strong> Mixpanel and Amplitude use event-based pricing. Hotjar Basic is free for 35 sessions/day. This model is common in analytics tools.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Net Revenue Retention (NRR)</h3>
                <p className="text-muted">Measures revenue from existing customers including upgrades, downgrades, and churn. NRR above 100% means existing customers spend more over time. HubSpot and Salesforce both have NRR above 100% because of upselling.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Contract and Billing Terms</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Annual Billing Discount</h3>
                <p className="text-muted">Most SaaS tools offer 15&ndash;30% savings for paying annually vs. monthly. <strong className="text-foreground">Examples:</strong> Pipedrive Growth: $39/seat monthly vs. $29/seat annual (26% savings). Make Core: $10.59 monthly vs. $9/month annual (15% savings).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Auto-Renewal</h3>
                <p className="text-muted">Your subscription automatically renews at the end of the billing period. Most annual contracts auto-renew at current (not original) pricing. Salesforce, HubSpot, and most enterprise tools use auto-renewal by default.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Overage Charges</h3>
                <p className="text-muted">Fees charged when you exceed plan limits. <strong className="text-foreground">Examples:</strong> Mailchimp charges extra for contacts above your tier. Zapier auto-upgrades your plan when you exceed task limits. Some tools (beehiiv Scale) have no overages &mdash; unlimited within the plan.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Grandfathering</h3>
                <p className="text-muted">Existing customers keep old pricing when a vendor raises prices. Typically lasts 1&ndash;2 renewal cycles. Ghost and Pipedrive both grandfathered existing users during recent restructures. Do not assume it lasts forever.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Seat Minimum</h3>
                <p className="text-muted">Some tools require a minimum number of paid seats. <strong className="text-foreground">Examples:</strong> Monday.com requires a 3-seat minimum on paid plans ($14/seat = $42/month minimum). Salesforce sometimes requires annual commitments with seat minimums for volume discounts.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Fair Use Policy</h3>
                <p className="text-muted">An &ldquo;unlimited&rdquo; plan with undisclosed usage caps enforced at the vendor&apos;s discretion. Watch for this on &ldquo;unlimited&rdquo; plans. What &ldquo;unlimited&rdquo; really means: unlimited within reason, as defined by the vendor.</p>
              </div>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which pricing model is cheapest?</h3>
                <p className="text-muted">It depends on your growth pattern. Flat-rate is cheapest for large teams (Basecamp $349/month for unlimited users). Per-seat is cheapest for solo users (Pipedrive Lite $14/month). Usage-based is cheapest at low volume (Make Free 1,000 ops/month).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What does &ldquo;contact&rdquo; mean in per-contact pricing?</h3>
                <p className="text-muted">It varies by platform. Mailchimp counts every contact including unsubscribes and bounces. Kit counts only active subscribers. HubSpot counts marketing contacts separately from CRM contacts. Always check the vendor&apos;s definition &mdash; it directly affects your bill.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "mailchimp", "zapier", "make", "salesforce"]}
            comparisons={[]}
            guides={[
              "saas-pricing-models-explained",
              "what-is-per-seat-pricing",
              "what-is-usage-based-pricing",
              "what-is-contact-based-pricing",
              "saas-pricing-traps-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
