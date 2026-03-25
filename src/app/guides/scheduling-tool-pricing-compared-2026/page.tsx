import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Scheduling Tool Pricing Compared 2026: Calendly, Cal.com, SavvyCal, TidyCal",
  description:
    "Side-by-side pricing for all scheduling tools at 1, 5, and 10 users. Free tiers, annual costs, and the lifetime deal that beats everything.",
};

export default function SchedulingToolPricingCompared2026Page() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Scheduling Tool Pricing 2026</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Industry Pricing Report
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Scheduling Tool Pricing Compared (2026)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Most people default to Calendly without checking alternatives. Here is what every
            major scheduling tool actually costs &mdash; including a $29 lifetime deal that
            eliminates monthly fees entirely.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>11 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-4">Monthly Cost Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Solo Plan</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Team Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Calendly</td>
                    <td className="px-3 py-2.5 text-muted">1 event type</td>
                    <td className="px-3 py-2.5 text-muted">Standard: $12/user/mo</td>
                    <td className="px-3 py-2.5 text-muted">Teams: $20/user/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Cal.com</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">Unlimited event types &amp; bookings</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">Free (1 user)</td>
                    <td className="px-3 py-2.5 text-muted">Team: $15/user/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">SavvyCal</td>
                    <td className="px-3 py-2.5 text-muted">1 scheduling link</td>
                    <td className="px-3 py-2.5 text-muted">Basic: $12/user/mo</td>
                    <td className="px-3 py-2.5 text-muted">Premium: $20/user/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">TidyCal</td>
                    <td className="px-3 py-2.5 text-muted">10 bookings/mo</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$29 one-time (lifetime)</td>
                    <td className="px-3 py-2.5 text-muted">$79 one-time (Agency lifetime)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Annual Cost at Different Team Sizes</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool (Plan)</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">1 user/yr</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">5 users/yr</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">10 users/yr</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Calendly Standard</td>
                    <td className="px-3 py-2.5 text-muted text-right">$144/yr</td>
                    <td className="px-3 py-2.5 text-muted text-right">$720/yr</td>
                    <td className="px-3 py-2.5 text-muted text-right">$1,440/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Cal.com (Free/Team)</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$0/yr</td>
                    <td className="px-3 py-2.5 text-muted text-right">$900/yr</td>
                    <td className="px-3 py-2.5 text-muted text-right">$1,800/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">SavvyCal Basic</td>
                    <td className="px-3 py-2.5 text-muted text-right">$144/yr</td>
                    <td className="px-3 py-2.5 text-muted text-right">$720/yr</td>
                    <td className="px-3 py-2.5 text-muted text-right">$1,440/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">TidyCal Individual</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$29 total</td>
                    <td className="px-3 py-2.5 text-muted text-right">$145 total*</td>
                    <td className="px-3 py-2.5 text-muted text-right">$290 total*</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">*TidyCal is one-time payment, not annual. Total cost is a one-time investment.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Key Pricing Insights</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-foreground">Cal.com Free beats Calendly Free</strong> with unlimited event types and bookings vs Calendly&apos;s 1 event type limit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-foreground">TidyCal pays for itself in 3 months.</strong> At $29 one-time vs Calendly Standard at $144/year, the ROI is immediate.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-foreground">Calendly is the most expensive</strong> for individual users but offers the deepest CRM integrations (Salesforce, HubSpot native).</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is TidyCal reliable as a lifetime deal?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  TidyCal is owned by AppSumo (Sumo Group), a well-funded company. It has been operating
                  since 2021 with consistent updates. The risk is lower than typical lifetime deals, but
                  it lacks the feature depth of Calendly or Cal.com.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I self-host Cal.com?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. Cal.com is fully open source and can be self-hosted via Docker. Self-hosting
                  eliminates all subscription costs but requires server maintenance ($5&ndash;$20/mo
                  for a VPS).
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["calendly", "cal-com", "savvycal", "tidycal"]}
            comparisons={["calendly-vs-calcom"]}
            guides={["scheduling-tool-comparison", "when-calendly-free-stops-working"]}
          />
        </div>
      </article>
    </>
  );
}
