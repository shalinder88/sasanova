import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Tools That Raised Prices in 2025-2026",
  description:
    "Documented SaaS price increases: Bardeen 890%, Ghost restructure, Salesforce 6%, Typeform increases, Mailchimp free tier death. Exact old vs new prices and alternatives.",
};

export default function SaasToolsThatRaisedPricesRecentlyPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Price Increases 2025&ndash;2026</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Intelligence
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Tools That Raised Prices in 2025&ndash;2026
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            SaaS price increases happen more frequently than most buyers realize. This page
            documents every significant price change we&apos;ve tracked from 2025 through
            early 2026, with exact old vs. new prices and alternatives for each.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Major Price Increases at a Glance</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Old Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">New Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Increase</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Alternative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Bardeen Starter</td>
                    <td className="px-4 py-2.5 text-muted">~$10/mo</td>
                    <td className="px-4 py-2.5 text-muted">$99/mo</td>
                    <td className="px-4 py-2.5 text-muted">~890%</td>
                    <td className="px-4 py-2.5 text-muted">Make Core $10.59/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Ghost Starter</td>
                    <td className="px-4 py-2.5 text-muted">~$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">~100%</td>
                    <td className="px-4 py-2.5 text-muted">beehiiv Launch (free)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce (all tiers)</td>
                    <td className="px-4 py-2.5 text-muted">~$94/seat</td>
                    <td className="px-4 py-2.5 text-muted">$100/seat</td>
                    <td className="px-4 py-2.5 text-muted">~6%</td>
                    <td className="px-4 py-2.5 text-muted">Pipedrive Lite $14/seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Typeform Basic</td>
                    <td className="px-4 py-2.5 text-muted">~$25/mo</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo</td>
                    <td className="px-4 py-2.5 text-muted">~56%</td>
                    <td className="px-4 py-2.5 text-muted">Tally (free, unlimited)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp Free</td>
                    <td className="px-4 py-2.5 text-muted">2,000 contacts (2019)</td>
                    <td className="px-4 py-2.5 text-muted">250 contacts (2024)</td>
                    <td className="px-4 py-2.5 text-muted">87.5% reduction</td>
                    <td className="px-4 py-2.5 text-muted">Kit free (10K subs)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Close CRM entry</td>
                    <td className="px-4 py-2.5 text-muted">~$25/seat (Startup)</td>
                    <td className="px-4 py-2.5 text-muted">$49/seat (Essentials)</td>
                    <td className="px-4 py-2.5 text-muted">~96%</td>
                    <td className="px-4 py-2.5 text-muted">Pipedrive Lite $14/seat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Bardeen: The Most Dramatic Increase</h2>
            <p className="text-muted leading-relaxed mb-4">
              Bardeen&apos;s paid plan went from approximately $10/month to $99/month &mdash;
              putting it in the same price range as enterprise automation tools with a fraction
              of the capability. The free tier remains (100 credits/month) but is barely
              functional. At $99/month, Bardeen now costs more than Zapier Professional
              ($29.99/month) and almost 10x more than Make Core ($10.59/month).
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do:</strong> Switch to Make Core
              ($10.59/month for 10,000 operations) for general automation. For browser-specific
              automation, evaluate free browser extension alternatives before paying $99/month.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Ghost: Entry Price Doubled</h2>
            <p className="text-muted leading-relaxed mb-4">
              Ghost restructured its pricing. The new Starter plan is $18/month, up from ~$9
              for the previous entry tier. Publisher is $35/month. Business jumped to $239/month.
              Existing users are typically grandfathered for 1&ndash;2 renewal cycles. The
              self-hosted version remains free.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do:</strong> If you&apos;re technical,
              self-host Ghost for $0 plus ~$5&ndash;10/month server costs. If not, beehiiv
              Launch (free, 2,500 subscribers) or beehiiv Scale ($49/month, unlimited) covers
              most newsletter use cases with built-in monetization tools Ghost lacks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Pattern Behind Price Increases</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Post-acquisition increases:</strong> Mailchimp&apos;s decline started after Intuit acquired it for $12 billion in 2021. Expect similar patterns with any newly acquired tool.</li>
              <li><strong className="text-foreground">AI cost pass-throughs:</strong> Tools adding AI features (Notion AI at $10/user/month, ClickUp Brain at $7/member/month) are passing compute costs to customers through add-ons.</li>
              <li><strong className="text-foreground">Growth slowdown pressure:</strong> When SaaS companies can&apos;t grow fast enough through new customers, they extract more revenue from existing ones through price increases and feature gating.</li>
              <li><strong className="text-foreground">Free tier economics:</strong> Free tiers cost vendors real money. As investor pressure increases, free tiers shrink. Mailchimp went from 2,000 free contacts (2019) to 250 (2024).</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How can I protect against future price increases?</h3>
                <p className="text-muted">Lock in annual billing at current prices. Choose tools with published pricing and competitive markets (email marketing, PM tools). Consider open-source alternatives (n8n, Cal.com, Ghost self-hosted) that can&apos;t raise prices on you.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I switch immediately after a price increase?</h3>
                <p className="text-muted">Not always. Calculate the annual cost difference AND the switching cost (time, migration, retraining). If the price increase costs you $300/year but switching costs 20 hours of work, the math may not justify switching until your next contract renewal.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["bardeen", "ghost", "salesforce", "mailchimp", "close-crm", "typeform"]}
            comparisons={[]}
            guides={[
              "saas-pricing-changes-2026",
              "mailchimp-pricing-history",
              "hubspot-pricing-history",
              "zapier-pricing-history",
              "software-switching-cost-guide",
            ]}
          />
        </div>
      </article>
    </>
  );
}
