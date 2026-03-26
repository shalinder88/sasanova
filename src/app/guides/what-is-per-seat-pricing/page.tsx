import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Per-Seat Pricing Explained: Why It Gets Expensive Fast",
  description:
    "How per-seat SaaS pricing works, cost projections at 5/10/25/50 seats with CRM examples. HubSpot, Pipedrive, Salesforce exact prices and when flat-rate is cheaper.",
};

export default function WhatIsPerSeatPricingPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">What Is Per-Seat Pricing</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Explainer
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Per-Seat Pricing Explained: Why It Gets Expensive Fast
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Per-seat pricing looks affordable at 1 user. It gets painful at 10. It can be
            devastating at 50. This guide explains how per-seat pricing works, shows exact
            cost projections for popular CRMs, and reveals when flat-rate pricing is cheaper.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">How Per-Seat Pricing Works</h2>
            <p className="text-muted leading-relaxed mb-4">
              You pay a fixed price for each user who has access to the tool. The price listed on
              the pricing page is per user, per month. Your actual bill = price per seat &times;
              number of seats &times; billing frequency. Most tools offer 15&ndash;30% discounts
              for annual billing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">CRM Cost Projections at Scale</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM &amp; Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per Seat</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5 Seats/mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10 Seats/mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">25 Seats/mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">50 Seats/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales Growth</td>
                    <td className="px-4 py-2.5 text-muted">$11</td>
                    <td className="px-4 py-2.5 text-muted">$55</td>
                    <td className="px-4 py-2.5 text-muted">$110</td>
                    <td className="px-4 py-2.5 text-muted">$275</td>
                    <td className="px-4 py-2.5 text-muted">$550</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Lite</td>
                    <td className="px-4 py-2.5 text-muted">$14</td>
                    <td className="px-4 py-2.5 text-muted">$70</td>
                    <td className="px-4 py-2.5 text-muted">$140</td>
                    <td className="px-4 py-2.5 text-muted">$350</td>
                    <td className="px-4 py-2.5 text-muted">$700</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20</td>
                    <td className="px-4 py-2.5 text-muted">$100</td>
                    <td className="px-4 py-2.5 text-muted">$200</td>
                    <td className="px-4 py-2.5 text-muted">$500</td>
                    <td className="px-4 py-2.5 text-muted">$1,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Growth</td>
                    <td className="px-4 py-2.5 text-muted">$39</td>
                    <td className="px-4 py-2.5 text-muted">$195</td>
                    <td className="px-4 py-2.5 text-muted">$390</td>
                    <td className="px-4 py-2.5 text-muted">$975</td>
                    <td className="px-4 py-2.5 text-muted">$1,950</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Close Essentials</td>
                    <td className="px-4 py-2.5 text-muted">$49</td>
                    <td className="px-4 py-2.5 text-muted">$245</td>
                    <td className="px-4 py-2.5 text-muted">$490</td>
                    <td className="px-4 py-2.5 text-muted">$1,225</td>
                    <td className="px-4 py-2.5 text-muted">$2,450</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">$100</td>
                    <td className="px-4 py-2.5 text-muted">$500</td>
                    <td className="px-4 py-2.5 text-muted">$1,000</td>
                    <td className="px-4 py-2.5 text-muted">$2,500</td>
                    <td className="px-4 py-2.5 text-muted">$5,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Enterprise</td>
                    <td className="px-4 py-2.5 text-muted">$175</td>
                    <td className="px-4 py-2.5 text-muted">$875</td>
                    <td className="px-4 py-2.5 text-muted">$1,750</td>
                    <td className="px-4 py-2.5 text-muted">$4,375</td>
                    <td className="px-4 py-2.5 text-muted">$8,750</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              At 50 seats, Salesforce Enterprise costs $8,750/month ($105,000/year). Freshsales
              Growth at the same scale costs $550/month ($6,600/year). That&apos;s a $98,400/year
              difference for CRM functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">When Flat-Rate Is Cheaper</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Basecamp</strong> charges $349/month for
              unlimited users. At Pipedrive Growth ($39/seat), Basecamp becomes cheaper at
              9+ users. At Asana Starter ($13.49/seat), Basecamp becomes cheaper at 26+ users.
              HubSpot Professional ($890/month flat) is effectively flat-rate for CRM, but
              the price point means it only makes sense for teams that need advanced marketing
              automation.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">beehiiv Scale</strong> at $49/month for
              unlimited subscribers is flat-rate email pricing. Compare to Mailchimp Standard
              which charges $20/month for 500 contacts and scales up. At any list size above
              2,500 subscribers, beehiiv&apos;s flat rate wins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Per-Seat Pricing Traps to Watch For</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Paying for inactive seats.</strong> 3 unused Pipedrive Growth seats = $1,404/year wasted. Audit monthly.</li>
              <li><strong className="text-foreground">Per-seat add-ons that stack.</strong> Notion AI ($10/user/month) on top of Notion Plus ($12/user/month) means $22/user/month total. Slack Pro ($8.75/user) plus Notion Plus ($12/user) plus Asana Starter ($13.49/user) = $34.24/user/month just for PM, docs, and chat.</li>
              <li><strong className="text-foreground">Seat minimums.</strong> Monday.com requires 3 seats minimum on paid plans. A solo user pays for 3 seats ($42/month) even though they only use one.</li>
              <li><strong className="text-foreground">Viewer vs. editor seats.</strong> Some tools (Figma, Linear) offer free viewer seats. Others (Asana, Monday) count every user regardless of role.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why do SaaS companies prefer per-seat pricing?</h3>
                <p className="text-muted">Revenue scales automatically with customer growth. When a customer adds employees, their bill increases without the vendor needing to sell anything. It&apos;s also easy to understand and compare. Vendors love it; growing teams don&apos;t.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I negotiate per-seat discounts for large teams?</h3>
                <p className="text-muted">Yes, for annual contracts above 10&ndash;25 seats. Salesforce, HubSpot, and most enterprise CRMs offer volume discounts. Ask explicitly: &ldquo;What discount for 25 annual seats?&rdquo; Expect 10&ndash;20% off listed price for committed annual deals.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">At what team size does per-seat pricing break?</h3>
                <p className="text-muted">For most CRMs, per-seat pricing becomes painful above 15 users. At 25+ seats, evaluate flat-rate alternatives or negotiate volume discounts. Salesforce at 25 Enterprise seats costs $52,500/year &mdash; that&apos;s worth spending time to optimize.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce", "freshsales", "close-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive", "pipedrive-vs-salesforce", "pipedrive-vs-freshsales"]}
            guides={[
              "saas-pricing-models-explained",
              "saas-pricing-terms-glossary",
              "crm-annual-cost-2026",
              "crm-cost-over-3-years",
            ]}
          />
        </div>
      </article>
    </>
  );
}
