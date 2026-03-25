import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Marketing ROI Calculator: Revenue Per Subscriber vs Platform Cost",
  description:
    "Calculate your email marketing ROI using revenue per subscriber, list size, and exact platform pricing. Break-even for Mailchimp, Kit, beehiiv, and ActiveCampaign.",
};

export default function EmailMarketingRoiCalculatorPage() {
  return (
    <>
      {/* Breadcrumb */}
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
              Email Marketing ROI Calculator
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            ROI Calculator
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Marketing ROI Calculator: Revenue Per Subscriber vs Platform Cost
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Email marketing consistently delivers the highest ROI of any digital channel.
            But how much revenue does your list need to generate to justify the platform cost?
            This guide calculates break-even at every list size.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Formula */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Email Marketing ROI Formula</h2>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm font-mono text-foreground">
                Email ROI = (Subscribers &times; Revenue per subscriber per year) &minus; Platform annual cost
              </p>
              <p className="text-sm text-muted mt-2">
                Break-even revenue per subscriber = Platform annual cost &divide; Subscriber count
              </p>
            </div>
          </section>

          {/* Platform Costs at Different List Sizes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Platform Costs by List Size</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">1,000 subs</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5,000 subs</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">25,000 subs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp Standard</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo ($240/yr)</td>
                    <td className="px-4 py-2.5 text-muted">~$75/mo (~$900/yr)</td>
                    <td className="px-4 py-2.5 text-muted">~$250/mo (~$3,000/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit) Creator</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo ($468/yr)</td>
                    <td className="px-4 py-2.5 text-muted">~$79/mo (~$948/yr)</td>
                    <td className="px-4 py-2.5 text-muted">~$179/mo (~$2,148/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo ($588/yr)</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo ($588/yr)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49/mo ($588/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign Starter</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo ($180/yr)</td>
                    <td className="px-4 py-2.5 text-muted">~$79/mo (~$948/yr)</td>
                    <td className="px-4 py-2.5 text-muted">~$229/mo (~$2,748/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo Standard</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$18/mo ($216/yr)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$18/mo ($216/yr)</td>
                    <td className="px-4 py-2.5 text-muted">~$65/mo (~$780/yr)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted">
              Note: beehiiv Scale has unlimited subscribers at $49/mo flat. Brevo charges by
              email sends (5,000/mo on Standard at $18/mo), not contacts. Prices for Mailchimp,
              Kit, and ActiveCampaign scale with subscriber count.
            </p>
          </section>

          {/* Break-Even Revenue Per Subscriber */}
          <section>
            <h2 className="text-xl font-bold mb-3">Break-Even: Revenue Per Subscriber Needed</h2>
            <p className="text-muted leading-relaxed mb-4">
              How much annual revenue must each subscriber generate to cover the platform cost?
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform (at 5K subs)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Revenue/Sub/Year Needed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo Standard</td>
                    <td className="px-4 py-2.5 text-muted">$216</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0.04/sub</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                    <td className="px-4 py-2.5 text-muted">$588</td>
                    <td className="px-4 py-2.5 text-muted">$0.12/sub</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp Standard</td>
                    <td className="px-4 py-2.5 text-muted">~$900</td>
                    <td className="px-4 py-2.5 text-muted">$0.18/sub</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit Creator</td>
                    <td className="px-4 py-2.5 text-muted">~$948</td>
                    <td className="px-4 py-2.5 text-muted">$0.19/sub</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign Starter</td>
                    <td className="px-4 py-2.5 text-muted">~$948</td>
                    <td className="px-4 py-2.5 text-muted">$0.19/sub</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Key Insight</p>
              <p className="text-sm text-muted">
                At $0.04&ndash;$0.19 per subscriber per year break-even, email marketing is
                profitable for virtually any business that sells anything. A single $50 product
                sale from a 5,000-person list pays for the platform for the entire year on most
                platforms. Email marketing ROI is almost always positive.
              </p>
            </div>
          </section>

          {/* Scenario Table */}
          <section>
            <h2 className="text-xl font-bold mb-3">ROI Scenarios: 5,000 Subscribers</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Revenue/Sub/Year</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Revenue</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Profit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv Profit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Brevo Profit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">$1/sub</td>
                    <td className="px-4 py-2.5 text-muted">$5,000</td>
                    <td className="px-4 py-2.5 text-muted">$4,100</td>
                    <td className="px-4 py-2.5 text-muted">$4,412</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$4,784</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">$5/sub</td>
                    <td className="px-4 py-2.5 text-muted">$25,000</td>
                    <td className="px-4 py-2.5 text-muted">$24,100</td>
                    <td className="px-4 py-2.5 text-muted">$24,412</td>
                    <td className="px-4 py-2.5 text-muted">$24,784</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">$20/sub</td>
                    <td className="px-4 py-2.5 text-muted">$100,000</td>
                    <td className="px-4 py-2.5 text-muted">$99,100</td>
                    <td className="px-4 py-2.5 text-muted">$99,412</td>
                    <td className="px-4 py-2.5 text-muted">$99,784</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What&apos;s a realistic revenue per subscriber?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  It varies widely. Newsletter creators with sponsorships: $0.50&ndash;$5/sub/year.
                  E-commerce: $5&ndash;$50/sub/year. SaaS with high LTV: $10&ndash;$100/sub/year.
                  Course creators: $5&ndash;$30/sub/year. Even conservative estimates show positive
                  ROI for email marketing.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Why is beehiiv the best value at 25,000+ subscribers?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  beehiiv Scale costs $49/mo regardless of subscriber count. At 25,000 subscribers,
                  that&apos;s $0.002/subscriber/month. Mailchimp Standard at 25,000 subscribers
                  costs ~$250/mo &mdash; 5x more. Plus beehiiv&apos;s built-in ad network and
                  referral program can generate revenue that offsets or exceeds the subscription cost.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Should I optimize for the cheapest platform or the highest revenue per subscriber?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Revenue per subscriber matters more than platform cost. ActiveCampaign at $948/yr
                  with advanced automation might generate $10/sub/year through better sequences, while
                  a cheaper platform generates $5/sub/year. The $732 cost difference is dwarfed by
                  $25,000 in additional revenue at 5,000 subscribers.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["mailchimp", "beehiiv", "brevo", "activecampaign"]}
            guides={["how-to-choose-email-platform", "when-mailchimp-becomes-expensive", "email-marketing-ecommerce"]}
          />
        </div>
      </article>
    </>
  );
}
