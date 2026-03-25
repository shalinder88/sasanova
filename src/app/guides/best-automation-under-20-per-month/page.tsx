import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Best Automation Tool Under $20/Month (2026)",
  description:
    "Make Core at $10.59/mo beats every competitor under $20. n8n Starter at ~$22/mo (EUR pricing) is just over budget. Pipedream Basic at $29/mo is out. Exact prices and what each plan includes.",
  alternates: { canonical: "https://sasanova.com/guides/best-automation-under-20-per-month" },
};

export default function BestAutomationUnder20Page() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Best Automation Under $20/Mo</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best Automation Tool Under $20/Month
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            The $20/month price point is a hard filter for automation tools. Only one major platform
            has a paid plan clearly under $20: Make Core at $10.59/month. n8n Starter sits at &euro;20/month
            (~$22), technically over budget. Zapier Professional is $29.99/month, Pipedream Basic is $29/month.
            This guide covers what you get at each price point and why Make dominates this range.
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
            <h2 className="text-xl font-bold mb-3">Paid Automation Plans Near the $20/Month Mark</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Under $20?</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What You Get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Core</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Yes</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo, unlimited scenarios</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Pro</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$18.82/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Yes</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo, custom functions, priority execution</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n</td>
                    <td className="px-4 py-2.5 text-muted">Starter (cloud)</td>
                    <td className="px-4 py-2.5 text-muted">~$22/mo (€20)</td>
                    <td className="px-4 py-2.5 text-muted">No (EUR pricing)</td>
                    <td className="px-4 py-2.5 text-muted">2,500 executions, cloud-hosted</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">Basic</td>
                    <td className="px-4 py-2.5 text-muted">$29/mo</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited workflows, 2,000 credits/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">750 tasks/mo, multi-step Zaps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Make Core ($10.59/mo) &mdash; Clear Winner Under $20</h2>
            <p className="text-muted leading-relaxed mb-4">
              Make Core at $10.59/month gives you 10,000 operations and unlimited scenarios. Compare that to
              Zapier Professional at $29.99/month for 750 tasks. Make delivers over 13x the volume at one-third
              the price. For budget-conscious automation, Make is the obvious choice.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The Pro plan at $18.82/month adds custom functions and priority execution while staying under $20.
              If you need faster execution or custom JavaScript functions in your scenarios, Pro is still
              significantly cheaper than Zapier or Pipedream.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">n8n Starter (~$22/mo) &mdash; Just Over Budget</h2>
            <p className="text-muted leading-relaxed mb-4">
              n8n&apos;s cloud Starter plan is priced at &euro;20/month, which converts to approximately $22 USD
              depending on exchange rates. It&apos;s technically over the $20 budget but worth mentioning because
              n8n allows custom code (JavaScript/Python) in every node, which neither Make nor Zapier offer
              at comparable price points. You get 2,500 executions on the cloud-hosted version.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Alternative:</strong> Self-host n8n Community edition for $0
              in software cost (plus $5&ndash;20/month for a VPS). This gives you unlimited everything and custom
              code, well under the $20 budget.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="space-y-3 text-muted leading-relaxed">
              <li><strong className="text-foreground">Defaulting to Zapier because it&apos;s familiar.</strong> Zapier Professional at $29.99/month gives you 750 tasks. Make Core at $10.59/month gives you 10,000 operations. Unless you specifically need a Zapier integration that Make lacks, Make saves $19.40/month with 13x the volume.</li>
              <li><strong className="text-foreground">Ignoring Make&apos;s learning curve.</strong> Make is more powerful but harder to learn than Zapier. Budget 2&ndash;4 hours for your first complex scenario. The time investment pays off in lower monthly costs.</li>
              <li><strong className="text-foreground">Not comparing annual pricing.</strong> Make Core drops from $10.59/month to $9/month with annual billing ($108/year). That&apos;s $127.08 in annual savings vs Zapier Professional at $239.88/year.</li>
              <li><strong className="text-foreground">Overlooking n8n self-hosted as a budget option.</strong> If you or your team can manage Docker, n8n Community + a $5/month VPS gives you the most powerful automation platform for under $10/month total.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make really that much cheaper than Zapier?</h3>
                <p className="text-muted">Yes. Make Core ($10.59/month) gives you 10,000 operations. Zapier Professional ($29.99/month) gives you 750 tasks. Make is roughly 3x cheaper and provides 13x more volume. The tradeoff is a steeper learning curve.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What if I need more than 10,000 operations on Make?</h3>
                <p className="text-muted">Make allows purchasing additional operations. You can also upgrade to the Teams plan at $34.12/month for team features while keeping the same 10,000 base operations. For very high volume, the per-operation cost on Make remains lower than Zapier at every tier.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I self-host n8n or pay for Make?</h3>
                <p className="text-muted">If you&apos;re comfortable with Docker and server management, self-hosted n8n offers unlimited power. If you want zero infrastructure responsibility, Make Core at $10.59/month is the simplest path to affordable automation. Most non-technical teams should choose Make.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["make", "n8n", "zapier", "pipedream"]}
            comparisons={["zapier-vs-make", "n8n-vs-zapier"]}
            guides={[
              "best-free-automation-tool-2026",
              "cheapest-automation-tool-2026",
              "automation-pricing-compared",
              "best-saas-stack-under-100",
            ]}
          />
        </div>
      </article>
    </>
  );
}
