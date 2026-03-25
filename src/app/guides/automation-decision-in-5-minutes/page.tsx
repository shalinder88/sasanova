import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Choose Your Automation Tool in 5 Minutes: Decision Flowchart",
  description:
    "Answer 5 questions to decide between Zapier, Make, and n8n. Exact pricing, volume breakpoints, and the technical comfort assessment.",
};

export default function AutomationDecisionIn5MinutesPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Automation Decision in 5 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Decision Quick-Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Choose Your Automation Tool in 5 Minutes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Zapier vs Make vs n8n in five questions. No fluff, just decisions.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>5 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 1: How technical is your team?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Non-technical (marketers, ops)</strong> &rarr; <strong className="text-accent">Zapier</strong>. Simplest interface, 7,000+ app integrations, minimal learning curve.</p>
              <p><strong className="text-foreground">Somewhat technical</strong> &rarr; <strong className="text-accent">Make</strong>. Visual flowchart builder, more powerful but steeper learning curve.</p>
              <p><strong className="text-foreground">Developers comfortable with Docker</strong> &rarr; <strong className="text-accent">n8n</strong>. Self-hostable, JavaScript/Python in any node, full data control.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 2: How many automations do you run per month?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Under 100 tasks</strong> &rarr; <strong className="text-accent">Zapier Free</strong> (100 tasks/mo, two-step only). Good enough for most solo founders.</p>
              <p><strong className="text-foreground">100&ndash;2,000 tasks</strong> &rarr; <strong className="text-accent">Make Core at $10.59/mo</strong> (10,000 operations). About 3x cheaper than Zapier Professional at $29.99/mo (750 tasks).</p>
              <p><strong className="text-foreground">2,000+ tasks</strong> &rarr; <strong className="text-accent">Make Core</strong> or <strong className="text-accent">n8n self-hosted (free, unlimited)</strong>. Zapier Team at $103.50/mo only gives 2,000 tasks.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 3: Do you need a specific integration?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Niche/uncommon app</strong> &rarr; Check <strong className="text-accent">Zapier first</strong> (7,000+ apps). If Zapier has it, it probably works. Make has 1,800+ apps; n8n has 400+.</p>
              <p><strong className="text-foreground">All major SaaS tools</strong> &rarr; All three platforms cover mainstream tools. Choose on price and complexity.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 4: Do you need complex branching and error handling?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Simple A &rarr; B workflows</strong> &rarr; <strong className="text-accent">Zapier</strong>. Clean, linear automation is Zapier&apos;s strength.</p>
              <p><strong className="text-foreground">Complex logic with routers and fallbacks</strong> &rarr; <strong className="text-accent">Make</strong>. Visual routers, error handlers, and iterators built in.</p>
              <p><strong className="text-foreground">Custom code and API calls</strong> &rarr; <strong className="text-accent">n8n</strong>. Write JavaScript/Python in any node. Full HTTP/webhook control.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 5: Do you care about data privacy or self-hosting?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Cloud is fine</strong> &rarr; <strong className="text-accent">Zapier</strong> or <strong className="text-accent">Make</strong> (both cloud-only with SOC 2 compliance).</p>
              <p><strong className="text-foreground">Need self-hosted / full data control</strong> &rarr; <strong className="text-accent">n8n Community Edition (free, self-hosted)</strong>. Run on your own server with Docker. Cloud version available from $20/mo if you prefer managed hosting.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Quick Price Reference</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Entry Paid</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Team Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">100 tasks/mo</td>
                    <td className="px-4 py-2.5 text-muted">Professional: $29.99/mo (750 tasks)</td>
                    <td className="px-4 py-2.5 text-muted">Team: $103.50/mo (2K tasks)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">1,000 ops/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Core: $10.59/mo (10K ops)</td>
                    <td className="px-4 py-2.5 text-muted">Teams: $34.12/mo (10K ops)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited (self-hosted)</td>
                    <td className="px-4 py-2.5 text-muted">Starter: $20/mo (2.5K executions)</td>
                    <td className="px-4 py-2.5 text-muted">Pro: $50/mo (10K executions)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Why is Make cheaper than Zapier?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Make counts operations differently. A 5-step workflow in Zapier burns 5 tasks per run.
                  In Make, the same workflow might use 5&ndash;7 operations but you get 10,000 operations
                  for $10.59/mo vs 750 tasks for $29.99/mo on Zapier.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is n8n really free?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  The self-hosted Community Edition is genuinely free with no execution limits. You pay
                  for server hosting ($5&ndash;$20/mo for a VPS). The cloud-hosted version starts at
                  $20/mo with 2,500 executions.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            comparisons={["zapier-vs-make"]}
            guides={["how-to-choose-automation-tool", "automation-pricing-compared", "when-zapier-costs-more-than-make"]}
          />
        </div>
      </article>
    </>
  );
}
