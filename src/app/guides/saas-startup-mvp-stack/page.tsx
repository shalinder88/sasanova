import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Launch Your SaaS MVP: The Exact Tools and Monthly Cost",
  description:
    "The complete SaaS MVP stack for under $11/month: Carrd Pro Standard ($19/yr), beehiiv Launch (free), Lemon Squeezy (5% + $0.50/txn), Plausible Starter ($9/mo), Crisp Free, HubSpot Free CRM. Every price verified.",
  openGraph: {
    title: "Launch Your SaaS MVP: The Exact Tools and Monthly Cost",
    description:
      "Landing page, email, payments, analytics, support, and CRM for under $11/month. Every tool priced to the penny.",
  },
};

const stackTools = [
  {
    category: "Landing Page",
    tool: "Carrd Pro Standard",
    slug: "carrd",
    price: "$19/year ($1.58/mo)",
    why: "One-page sites with custom domains, forms, embeds, analytics, and Stripe/PayPal payments. 10 sites included. Built by a solo developer, so the pricing stays honest.",
    limits: "One-page only. No blog, no multi-page sites. Perfect for an MVP landing page, not a marketing site.",
    toolPage: "/tools/carrd",
  },
  {
    category: "Email Collection & Nurture",
    tool: "beehiiv Launch (Free)",
    slug: "beehiiv",
    price: "$0/mo",
    why: "2,500 subscribers, unlimited sends, custom domain, and a built-in website. No credit card required. When you outgrow it, Scale is $49/mo for unlimited subscribers and the ad network.",
    limits: "beehiiv branding on free tier. No referral program, no A/B testing, no polls until Scale ($49/mo).",
    toolPage: "/tools/beehiiv",
  },
  {
    category: "Payments & Subscriptions",
    tool: "Lemon Squeezy (Fresh plan)",
    slug: "lemonsqueezy",
    price: "5% + $0.50 per transaction",
    why: "Merchant of record handles global tax compliance, fraud protection, and subscription billing. No monthly fee. Acquired by Stripe in 2024, so infrastructure is solid.",
    limits: "5% fee is higher than Stripe direct (2.9% + $0.30), but you skip building tax compliance, dunning, and a checkout flow. Worth it pre-PMF.",
    toolPage: "/tools/lemonsqueezy",
  },
  {
    category: "Analytics",
    tool: "Plausible Starter",
    slug: "plausible",
    price: "$9/mo ($108/yr annual)",
    why: "Privacy-friendly, GDPR compliant without cookie banners, sub-1KB script. One dashboard with pageviews, referrers, goals, and UTM tracking. No complexity.",
    limits: "1 site, 10K pageviews/month on Starter. Growth ($14/mo) adds 3 sites and team members. No funnels until Business ($19/mo).",
    toolPage: "/tools/plausible",
  },
  {
    category: "Customer Support",
    tool: "Crisp Free",
    slug: "crisp",
    price: "$0/mo",
    why: "2 seats, website chat widget, shared inbox, and unlimited messages. Flat-rate pricing (per workspace, not per seat) when you upgrade. Mini is $45/mo for 4 seats.",
    limits: "No chatbot, no knowledge base, no omnichannel on free. Essentials ($95/mo) adds those.",
    toolPage: "/tools/crisp",
  },
  {
    category: "CRM",
    tool: "HubSpot Free CRM",
    slug: "hubspot-crm",
    price: "$0/mo",
    why: "Unlimited contacts, basic pipeline, email tracking, meeting scheduling, live chat, and forms. The free tier is genuinely generous for an MVP stage.",
    limits: "HubSpot branding, 2,000 email sends/month, no automation workflows. Starter is $20/seat/mo. Professional jumps to $890/mo flat.",
    toolPage: "/tools/hubspot-crm",
  },
];

const monthlyBreakdown = [
  { item: "Carrd Pro Standard", monthly: "$1.58", annual: "$19/yr", note: "Custom domain landing page" },
  { item: "beehiiv Launch", monthly: "$0", annual: "$0", note: "2,500 subscribers, unlimited sends" },
  { item: "Lemon Squeezy", monthly: "$0 base", annual: "$0 base", note: "5% + $0.50 per transaction" },
  { item: "Plausible Starter", monthly: "$9.00", annual: "$108/yr", note: "Privacy-first analytics" },
  { item: "Crisp Free", monthly: "$0", annual: "$0", note: "Live chat + shared inbox" },
  { item: "HubSpot Free CRM", monthly: "$0", annual: "$0", note: "Unlimited contacts, pipeline" },
];

export default function SaasStartupMvpStack() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS MVP Stack</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Real-World Stack
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Launch Your SaaS MVP: The Exact Tools and Monthly Cost
          </h1>
          <p className="text-lg text-muted">
            You need a landing page, email collection, payment processing, analytics, support, and a CRM. Not in theory &mdash; literally those six things. Here&apos;s the exact stack, priced to the penny, that gets you from idea to paying customers for under $11/month.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="All free tiers and paid plans verified against vendor pricing pages"
          sourceCount={6}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Total Cost Summary */}
          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              Total monthly cost: ~$10.58/mo
            </p>
            <p className="text-sm text-muted">
              Carrd Pro Standard ($1.58/mo) + Plausible Starter ($9/mo) + everything else free. Lemon Squeezy charges 5% + $0.50 per transaction &mdash; no monthly fee until you choose the Growth plan ($24/mo).
            </p>
          </div>

          {/* Stack Breakdown */}
          {stackTools.map((tool, idx) => (
            <section key={tool.slug} className="mb-10">
              <h2 className="text-xl font-bold mt-10 mb-2">
                {idx + 1}. {tool.category}: {tool.tool}
              </h2>
              <div className="border border-border rounded-xl p-5 bg-surface mb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-lg font-bold text-foreground">{tool.tool}</p>
                    <p className="text-xs text-muted mt-0.5">
                      <Link href={tool.toolPage} className="text-accent hover:underline">
                        Full review and pricing breakdown &rarr;
                      </Link>
                    </p>
                  </div>
                  <span className="text-sm font-mono text-green-400 whitespace-nowrap">
                    {tool.price}
                  </span>
                </div>
                <p className="text-sm text-muted mb-2">{tool.why}</p>
                <p className="text-xs text-muted/70 italic">{tool.limits}</p>
              </div>
            </section>
          ))}

          {/* Monthly Cost Table */}
          <h2 className="text-xl font-bold mt-14 mb-4">The Complete Bill: Month by Month</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-3 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {monthlyBreakdown.map((row) => (
                  <tr key={row.item}>
                    <td className="px-4 py-2.5 font-medium text-foreground">{row.item}</td>
                    <td className={`px-4 py-2.5 ${row.monthly === "$0" || row.monthly === "$0 base" ? "text-green-400" : ""}`}>
                      {row.monthly}
                    </td>
                    <td className="px-4 py-2.5">{row.annual}</td>
                    <td className="px-4 py-2.5 text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-bold text-foreground">Total (fixed costs)</td>
                  <td className="px-4 py-2.5 font-bold text-green-400">$10.58/mo</td>
                  <td className="px-4 py-2.5 font-bold">$127/yr</td>
                  <td className="px-4 py-2.5 text-muted text-xs">Plus 5% + $0.50 per Lemon Squeezy transaction</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* When to Upgrade */}
          <h2 className="text-xl font-bold mt-14 mb-4">When to Upgrade Each Tool</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">Landing Page:</strong> Switch from Carrd to Framer or Webflow when you need multi-page marketing sites, a blog, or CMS functionality. Carrd is one-page only.
            </p>
            <p>
              <strong className="text-foreground">Email:</strong> Upgrade beehiiv to Scale ($49/mo) when you pass 2,500 subscribers or want the referral program and ad network.{" "}
              <Link href="/guides/when-beehiiv-scale-beats-launch" className="text-accent hover:underline">
                beehiiv upgrade math
              </Link>
            </p>
            <p>
              <strong className="text-foreground">Payments:</strong> Switch from Lemon Squeezy to Stripe direct when your transaction volume makes the 5% fee more expensive than building your own tax compliance. Rough break-even: ~$50K ARR.
            </p>
            <p>
              <strong className="text-foreground">Analytics:</strong> Upgrade Plausible to Growth ($14/mo) when you need multiple sites or team access. Switch to PostHog (free, 1M events) if you need product analytics (funnels, cohorts, session replays).
            </p>
            <p>
              <strong className="text-foreground">Support:</strong> Upgrade Crisp to Mini ($45/mo) when you exceed 2 support agents. Move to Essentials ($95/mo) for chatbot automation.{" "}
              <Link href="/guides/customer-support-stack" className="text-accent hover:underline">
                Support stack guide
              </Link>
            </p>
            <p>
              <strong className="text-foreground">CRM:</strong> Upgrade HubSpot to Starter ($20/seat/mo) when you need email sequences and branding removal. Consider Pipedrive Growth ($39/seat/mo) if you want a pipeline-focused alternative.{" "}
              <Link href="/guides/when-hubspot-stops-being-cheap" className="text-accent hover:underline">
                HubSpot pricing thresholds
              </Link>
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why Carrd instead of a full website builder?</h3>
              <p className="text-sm text-muted">
                At the MVP stage, you need one page that explains what you do and captures emails or payments. Carrd Pro Standard does that for $19/year. Webflow starts at $168/year, Squarespace at $192/year. Spend the savings on getting your first 10 customers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why Lemon Squeezy over Stripe direct?</h3>
              <p className="text-sm text-muted">
                Lemon Squeezy is a merchant of record &mdash; it handles global sales tax, VAT, fraud protection, and subscription dunning. Stripe makes you build all of that yourself. The 5% + $0.50 fee is higher than Stripe&apos;s 2.9% + $0.30, but you skip weeks of tax compliance engineering.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why not just use Google Analytics (free)?</h3>
              <p className="text-sm text-muted">
                You can. Google Analytics is free and more powerful. Plausible costs $9/mo but requires no cookie banner (GDPR compliant by default), loads a sub-1KB script, and gives you a single clean dashboard. If budget is truly zero, GA is fine.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">What&apos;s the total first-year cost?</h3>
              <p className="text-sm text-muted">
                Fixed costs: $127/year ($19 Carrd + $108 Plausible). Everything else is free or transaction-based. If you process $10,000 in revenue through Lemon Squeezy, that&apos;s ~$500 in fees + $0.50 per transaction. Total year-one cost for a $10K-revenue MVP: roughly $650&ndash;$700.
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["carrd", "beehiiv", "lemonsqueezy", "plausible", "crisp", "hubspot-crm"]}
          comparisons={["beehiiv-vs-convertkit", "hubspot-crm-vs-pipedrive", "plausible-vs-posthog"]}
          guides={[
            "best-free-tools-startups",
            "best-tools-saas-startup",
            "when-beehiiv-scale-beats-launch",
            "when-hubspot-stops-being-cheap",
            "solo-founder-stack",
            "ecommerce-stack-solo-creator",
          ]}
        />
      </article>
    </>
  );
}
