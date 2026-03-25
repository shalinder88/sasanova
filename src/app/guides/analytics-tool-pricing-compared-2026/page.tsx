import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Analytics Tool Pricing Compared 2026: All Tools by Event Volume",
  description:
    "Side-by-side pricing for PostHog, Mixpanel, Amplitude, Hotjar, and Plausible by event volume. Free tiers, usage-based costs, and break-even points.",
};

export default function AnalyticsToolPricingCompared2026Page() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Analytics Pricing 2026</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Industry Pricing Report
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Analytics Tool Pricing Compared by Event Volume (2026)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Analytics tools use wildly different pricing models: events, sessions, pageviews, or
            flat rates. This report normalizes costs so you can compare PostHog, Mixpanel,
            Amplitude, Hotjar, and Plausible at the same usage levels.
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
            <h2 className="text-xl font-bold mb-4">Free Tier Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Pricing Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">PostHog</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">1M events + 5K replays + 1M feature flags</td>
                    <td className="px-3 py-2.5 text-muted">Pay-per-event beyond free tier</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Mixpanel</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">1M events/mo, unlimited reports</td>
                    <td className="px-3 py-2.5 text-muted">Usage-based (~$0.00028/event)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Amplitude</td>
                    <td className="px-3 py-2.5 text-muted">10K MTUs or 10M events</td>
                    <td className="px-3 py-2.5 text-muted">Plus starts at $49/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Hotjar</td>
                    <td className="px-3 py-2.5 text-muted">20K sessions/mo, unlimited heatmaps</td>
                    <td className="px-3 py-2.5 text-muted">Growth: $49/mo flat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Plausible</td>
                    <td className="px-3 py-2.5 text-muted">No free tier (trial only)</td>
                    <td className="px-3 py-2.5 text-muted">Starter: $9/mo (10K pageviews)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Monthly Cost at Different Volumes</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Volume</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">PostHog</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Mixpanel</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Amplitude</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Plausible</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Under 1M events</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-3 py-2.5 text-muted">$0*</td>
                    <td className="px-3 py-2.5 text-muted">$9&ndash;$14</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">5M events</td>
                    <td className="px-3 py-2.5 text-muted">~$200/mo</td>
                    <td className="px-3 py-2.5 text-muted">~$1,120/mo</td>
                    <td className="px-3 py-2.5 text-muted">$49+/mo</td>
                    <td className="px-3 py-2.5 text-muted">N/A (pageview-based)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">20M events</td>
                    <td className="px-3 py-2.5 text-muted">~$950/mo</td>
                    <td className="px-3 py-2.5 text-muted">~$5,320/mo</td>
                    <td className="px-3 py-2.5 text-muted">Custom</td>
                    <td className="px-3 py-2.5 text-muted">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              *Amplitude Starter is free for 10K MTUs or 10M events. Plausible tracks pageviews, not events &mdash; different metric.
              Hotjar is session-based ($49/mo flat for Growth) and not directly comparable to event-based tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Key Pricing Insights</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-foreground">PostHog is cheapest at scale.</strong> At 5M events, PostHog costs ~$200/mo vs Mixpanel&apos;s ~$1,120/mo. PostHog&apos;s pricing is roughly 5x cheaper per event.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-foreground">Mixpanel and PostHog both offer 1M free events.</strong> For early-stage startups, either tool costs $0/mo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-foreground">Plausible is for web analytics, not product analytics.</strong> At $9/mo for 10K pageviews, it is the privacy-friendly Google Analytics alternative &mdash; not comparable to Mixpanel or PostHog.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-foreground">Hotjar fills a different niche.</strong> At $49/mo (Growth) for heatmaps and recordings, it complements event-based analytics rather than replacing it.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Do I need both PostHog and Hotjar?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  PostHog now includes session replay and heatmaps. If you use PostHog, you likely
                  do not need Hotjar. Hotjar is only worth adding if you specifically need its
                  user-friendly interface for non-technical team members.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Which analytics tool is best for a startup under 1M events?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  PostHog Free. It gives you 1M events, 5K session replays, feature flags, and surveys
                  for $0/mo. No other tool matches this combination at the free tier.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["posthog", "mixpanel", "amplitude", "hotjar", "plausible"]}
            comparisons={["posthog-vs-mixpanel"]}
            guides={["choosing-analytics-tool"]}
          />
        </div>
      </article>
    </>
  );
}
