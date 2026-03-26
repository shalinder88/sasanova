import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Automation Migration Checklist: Rebuild Your Workflows Without Breaking Things",
  description:
    "Automation platform migration checklist: audit existing flows, map to new platform, rebuild in priority order, test, and parallel run. Zapier to Make specific steps with exact pricing.",
};

export default function AutomationMigrationChecklistPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Automation Migration Checklist</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Checklist
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Automation Migration Checklist: Rebuild Your Workflows Without Breaking Things
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Automation workflows are the hardest software to migrate. Nothing auto-transfers.
            Every Zap, scenario, or workflow must be manually rebuilt on the new platform.
            This checklist gives you the exact process for migrating from Zapier to Make
            (or any automation platform), in priority order so nothing breaks.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Savings That Justify the Pain</h2>
            <p className="text-muted leading-relaxed mb-4">
              Zapier Professional costs $29.99/month for 750 tasks. Make Core costs $10.59/month
              for 10,000 operations &mdash; that&apos;s 13x more capacity for 65% less money. Annual
              savings: $233/year at the cheapest tiers. At higher volumes, Zapier Team ($103.50/month)
              vs. Make Core ($10.59/month) saves $1,115/year.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Phase 1: Audit Existing Automations</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">List every active automation with its trigger and actions.</p>
                  <p className="text-muted text-sm mt-1">In Zapier: go to Zaps &gt; filter by &ldquo;On&rdquo; status. Note the trigger app, action apps, and how many steps each Zap has. A 5-step Zap burns 5 tasks per execution &mdash; this matters for volume planning on the new platform.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Categorize automations by business criticality.</p>
                  <p className="text-muted text-sm mt-1"><strong>Critical:</strong> Lead capture to CRM, payment notifications, customer onboarding. <strong>Important:</strong> Internal notifications, reporting. <strong>Nice-to-have:</strong> Social media cross-posting, spreadsheet syncing. Rebuild in this order.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">3.</span>
                <div>
                  <p className="text-foreground font-medium">Check integration availability on the new platform.</p>
                  <p className="text-muted text-sm mt-1">Zapier has 7,000+ integrations. Make has 1,800+. n8n has 400+ built-in nodes. If a critical app isn&apos;t available natively on Make, check if it supports webhooks or has an API you can call via Make&apos;s HTTP module.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">4.</span>
                <div>
                  <p className="text-foreground font-medium">Calculate your actual task/operation volume.</p>
                  <p className="text-muted text-sm mt-1">Zapier counts each step as a task. Make counts each module execution as an operation. A 5-step Zap running 100 times/month = 500 Zapier tasks. The equivalent Make scenario = 500 operations (same count, but Make gives you 10,000 on Core vs. Zapier&apos;s 750).</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Phase 2: Rebuild on the New Platform</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">5.</span>
                <div>
                  <p className="text-foreground font-medium">Start with one critical automation and rebuild it completely.</p>
                  <p className="text-muted text-sm mt-1">Pick your most important workflow. Build it on Make (or your target platform), test with real data, and verify the output matches what Zapier was producing. Budget 30&ndash;60 minutes for a simple workflow, 2&ndash;3 hours for complex ones with routers and filters.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">6.</span>
                <div>
                  <p className="text-foreground font-medium">Rebuild remaining critical automations.</p>
                  <p className="text-muted text-sm mt-1">Work through your critical list. Make&apos;s visual builder requires a different mental model than Zapier&apos;s linear steps. Use routers for conditional logic (Zapier Paths equivalent). Use error handlers &mdash; Make&apos;s error handling is more granular than Zapier&apos;s.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">7.</span>
                <div>
                  <p className="text-foreground font-medium">Set up error notifications on every automation.</p>
                  <p className="text-muted text-sm mt-1">Make: add an error handler route that sends a Slack notification or email on failure. n8n: use the error trigger node. This is the single most important step people skip. Silent failures in automation cost more than the subscription.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Phase 3: Test and Cut Over</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">8.</span>
                <div>
                  <p className="text-foreground font-medium">Run both platforms in parallel for 1 week.</p>
                  <p className="text-muted text-sm mt-1">Keep Zapier active while the new platform runs the same workflows. Compare outputs. This costs one extra week of Zapier billing ($7.50 for Professional weekly) but catches edge cases you won&apos;t find in testing.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">9.</span>
                <div>
                  <p className="text-foreground font-medium">Turn off Zapier automations one by one.</p>
                  <p className="text-muted text-sm mt-1">Disable Zaps in the same priority order you rebuilt them. Critical first. Wait 24 hours between each batch. If something breaks, you can re-enable the Zapier version instantly.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">10.</span>
                <div>
                  <p className="text-foreground font-medium">Cancel the old platform after 2 stable weeks.</p>
                  <p className="text-muted text-sm mt-1">Once all automations run successfully on the new platform for 2 full weeks with zero errors, cancel Zapier (or the old tool). Download any Zap configurations for reference before cancelling.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Platform Comparison for Migration</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Volume</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Rebuild Time (10 Zaps)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier Professional</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">750 tasks/mo</td>
                    <td className="px-4 py-2.5 text-muted">N/A (source)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make Core</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo</td>
                    <td className="px-4 py-2.5 text-muted">8&ndash;15 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo (EUR)</td>
                    <td className="px-4 py-2.5 text-muted">2,500 executions/mo</td>
                    <td className="px-4 py-2.5 text-muted">10&ndash;20 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream Basic</td>
                    <td className="px-4 py-2.5 text-muted">$29/mo</td>
                    <td className="px-4 py-2.5 text-muted">2,000 credits/mo</td>
                    <td className="px-4 py-2.5 text-muted">12&ndash;25 hours (code-heavy)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I export Zapier Zaps to Make?</h3>
                <p className="text-muted">No. There is no automatic migration between any automation platforms. Every workflow must be manually rebuilt. Make&apos;s visual builder is different from Zapier&apos;s linear approach, so you&apos;re redesigning, not copying.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long does a full Zapier to Make migration take?</h3>
                <p className="text-muted">For 10 Zaps: 8&ndash;15 hours of rebuild time spread over 1&ndash;2 weeks, plus 1&ndash;2 weeks of parallel running. Total timeline: 3&ndash;4 weeks from start to Zapier cancellation.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What if Make doesn&apos;t have an integration I need?</h3>
                <p className="text-muted">Make&apos;s HTTP/Webhook module can connect to any app with an API. For apps without APIs, keep a single Zapier Zap for that specific workflow (Zapier Free handles 100 tasks/month for two-step Zaps) and run everything else on Make.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n", "pipedream"]}
            comparisons={["zapier-vs-make", "zapier-vs-n8n", "make-vs-n8n"]}
            guides={[
              "migrate-zapier-to-make",
              "migrate-zapier-to-n8n",
              "automation-pricing-compared",
              "automation-error-handling",
            ]}
          />
        </div>
      </article>
    </>
  );
}
