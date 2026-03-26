import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "How Much Do Companies Spend on SaaS? 2026 Benchmarks",
  description:
    "SaaS spending benchmarks by business stage: solo founder $0-100/mo, small team $100-500/mo, growing team $500-2K/mo, enterprise $2K+/mo. Backed by verified tool pricing data.",
};

export default function SaasSpendingBenchmarks2026Page() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Spending Benchmarks 2026</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Industry Benchmark
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How Much Do Companies Spend on SaaS? 2026 Benchmarks
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Every founder asks the same question: am I spending too much on software?
            Here are realistic SaaS spending ranges by business stage, backed by the
            actual tool prices in our database &mdash; not inflated vendor surveys.
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
            <h2 className="text-xl font-bold mb-3">SaaS Spending by Business Stage</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Stage</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Range</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Range</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Typical Stack</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Solo Founder</td>
                    <td className="px-4 py-2.5 text-muted">$0&ndash;100/mo</td>
                    <td className="px-4 py-2.5 text-muted">$0&ndash;1,200/yr</td>
                    <td className="px-4 py-2.5 text-muted">Free CRM + free email + 1 paid tool</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Small Team (2&ndash;5)</td>
                    <td className="px-4 py-2.5 text-muted">$100&ndash;500/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,200&ndash;6,000/yr</td>
                    <td className="px-4 py-2.5 text-muted">Paid CRM + email + PM + automation</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Growing Team (6&ndash;20)</td>
                    <td className="px-4 py-2.5 text-muted">$500&ndash;2,000/mo</td>
                    <td className="px-4 py-2.5 text-muted">$6,000&ndash;24,000/yr</td>
                    <td className="px-4 py-2.5 text-muted">Multi-seat CRM + marketing + support + analytics</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Enterprise (20+)</td>
                    <td className="px-4 py-2.5 text-muted">$2,000+/mo</td>
                    <td className="px-4 py-2.5 text-muted">$24,000+/yr</td>
                    <td className="px-4 py-2.5 text-muted">Enterprise tiers, dedicated support, compliance tools</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Solo Founder: $0&ndash;100/Month</h2>
            <p className="text-muted leading-relaxed mb-4">
              The $0 stack is genuinely viable in 2026. HubSpot CRM Free (unlimited contacts), beehiiv Launch
              (free, 2,500 subscribers), Make Free (1,000 ops/month), and Notion Free (unlimited pages) give
              you CRM + email + automation + docs for literally nothing.
            </p>
            <p className="text-muted leading-relaxed">
              The realistic solo founder spends $30&ndash;80/month on 1&ndash;2 paid tools: Pipedrive Lite ($14/seat),
              Kit Creator ($39/mo), or a PM tool like ClickUp Unlimited ($10/member). Everything else can stay free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Small Team: $100&ndash;500/Month</h2>
            <p className="text-muted leading-relaxed mb-4">
              Per-seat pricing is the biggest driver at this stage. A 5-person team on Pipedrive Growth
              ($39/seat) = $195/month just for CRM. Add Asana Starter ($13.49/seat &times; 5 = $67.45),
              Zapier Professional ($29.99), and Mailchimp Standard ($20) and you&apos;re at $312/month.
            </p>
            <p className="text-muted leading-relaxed">
              The budget-conscious alternative: HubSpot Free ($0) + ClickUp Free ($0) + Make Core ($10.59) +
              beehiiv Launch ($0) = $10.59/month. The quality tradeoff is real, but the savings are dramatic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Growing Team: $500&ndash;2,000/Month</h2>
            <p className="text-muted leading-relaxed mb-4">
              This is where SaaS costs compound. A 15-person team on HubSpot Starter ($20/seat &times; 15 = $300) +
              Asana Advanced ($30.49/seat &times; 15 = $457) + Slack Pro ($8.75/user &times; 15 = $131) +
              ActiveCampaign Plus ($49/mo base) = $937/month before automation, analytics, or support tools.
            </p>
            <p className="text-muted leading-relaxed">
              The HubSpot Professional cliff is the biggest danger at this stage: upgrading from Starter
              ($20/seat) to Professional ($890/month flat) is a 4,350% jump. Many teams hit this wall when
              they need workflow automation or custom reporting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Tool Creep Problem</h2>
            <p className="text-muted leading-relaxed">
              Most teams accumulate 3&ndash;5 redundant tools over time. The quarterly audit framework:
              export your credit card statements, list every SaaS charge, and ask three questions per tool.
              (1) Did anyone use this in the last 30 days? (2) Could another tool we already pay for do this?
              (3) What happens if we cancel tomorrow? If nobody notices it&apos;s gone, cancel it.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What percentage of revenue should go to SaaS?</h3>
                <p className="text-muted">For early-stage companies, 5&ndash;10% of revenue is typical. But percentages are misleading &mdash; a solo founder earning $5K/month should not spend $500 on software. Spend the minimum that removes bottlenecks, and audit quarterly.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I move from free tiers to paid?</h3>
                <p className="text-muted">When a free tier limit directly costs you revenue or more than 2 hours/week of manual work. HubSpot Free is genuinely useful for months. Zapier Free (100 tasks) runs out faster than most expect. beehiiv Launch (2,500 subscribers) is generous for early-stage newsletters.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Are annual plans worth it?</h3>
                <p className="text-muted">Annual billing typically saves 15&ndash;25%. Lock in annual only for tools you&apos;ve used for 3+ months and expect to keep. Never go annual on a tool you just started &mdash; switching costs compound when you&apos;re locked into a 12-month contract.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "beehiiv", "zapier", "make", "clickup"]}
            comparisons={[]}
            guides={[
              "how-much-should-software-cost",
              "best-saas-stack-under-100",
              "best-saas-stack-under-200",
              "solo-founder-stack",
              "saas-pricing-traps-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
