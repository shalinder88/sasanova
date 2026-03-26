import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "How Many Automations Does a Typical Business Run?",
  description:
    "Automation task volume benchmarks by business stage: solo 5-20 tasks/week, small team 100-500, growing 1K-5K. Which automation tier you need at each level with exact Zapier, Make, and n8n pricing.",
};

export default function AutomationTaskVolumeBenchmarksPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Automation Task Volume Benchmarks</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Industry Benchmark
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How Many Automations Does a Typical Business Run?
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Automation platforms price by volume: tasks (Zapier), operations (Make), or
            executions (n8n). But how much volume does a typical business actually use?
            Here are benchmarks by stage, so you pick the right tier from day one instead
            of upgrading after an overage charge.
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
            <h2 className="text-xl font-bold mb-3">Task Volume by Business Stage</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Stage</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Weekly Volume</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Volume</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Typical Automations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Solo Founder</td>
                    <td className="px-4 py-2.5 text-muted">5&ndash;20 tasks</td>
                    <td className="px-4 py-2.5 text-muted">20&ndash;80 tasks</td>
                    <td className="px-4 py-2.5 text-muted">Form &rarr; CRM, email notifications, social posting</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Small Team (2&ndash;5)</td>
                    <td className="px-4 py-2.5 text-muted">100&ndash;500 tasks</td>
                    <td className="px-4 py-2.5 text-muted">400&ndash;2,000 tasks</td>
                    <td className="px-4 py-2.5 text-muted">Lead routing, deal notifications, reporting syncs</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Growing Team (6&ndash;20)</td>
                    <td className="px-4 py-2.5 text-muted">1,000&ndash;5,000 tasks</td>
                    <td className="px-4 py-2.5 text-muted">4,000&ndash;20,000 tasks</td>
                    <td className="px-4 py-2.5 text-muted">Multi-step workflows, data syncs, customer onboarding</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Enterprise (20+)</td>
                    <td className="px-4 py-2.5 text-muted">5,000+ tasks</td>
                    <td className="px-4 py-2.5 text-muted">20,000+ tasks</td>
                    <td className="px-4 py-2.5 text-muted">Cross-system data pipelines, compliance, provisioning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Which Tier You Need at Each Level</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Volume</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Under 100</td>
                    <td className="px-4 py-2.5 text-muted">Free ($0)</td>
                    <td className="px-4 py-2.5 text-muted">Free ($0)</td>
                    <td className="px-4 py-2.5 text-muted">Community (self-hosted, $0)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">100&ndash;750</td>
                    <td className="px-4 py-2.5 text-muted">Professional ($29.99/mo)</td>
                    <td className="px-4 py-2.5 text-muted">Free ($0) &mdash; up to 1,000 ops</td>
                    <td className="px-4 py-2.5 text-muted">Starter ($20/mo, 2,500 exec.)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">750&ndash;2,000</td>
                    <td className="px-4 py-2.5 text-muted">Team ($103.50/mo)</td>
                    <td className="px-4 py-2.5 text-muted">Core ($10.59/mo) &mdash; 10,000 ops</td>
                    <td className="px-4 py-2.5 text-muted">Starter ($20/mo, 2,500 exec.)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">2,000&ndash;10,000</td>
                    <td className="px-4 py-2.5 text-muted">Team ($103.50/mo) or Enterprise</td>
                    <td className="px-4 py-2.5 text-muted">Core ($10.59/mo) &mdash; 10,000 ops</td>
                    <td className="px-4 py-2.5 text-muted">Pro ($50/mo, 10,000 exec.)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000+</td>
                    <td className="px-4 py-2.5 text-muted">Enterprise (custom)</td>
                    <td className="px-4 py-2.5 text-muted">Pro ($18.82/mo) or Teams ($34.12/mo)</td>
                    <td className="px-4 py-2.5 text-muted">Enterprise (custom)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong>Key insight:</strong> Make Core ($10.59/mo) covers the 100&ndash;10,000 range that costs
              $29.99&ndash;$103.50/mo on Zapier. For growing teams, Make saves $233&ndash;$1,115/year
              at the same volume levels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Multi-Step Trap</h2>
            <p className="text-muted leading-relaxed">
              Zapier counts each step as a separate task. A 5-step Zap running once = 5 tasks consumed.
              Run that Zap 100 times/month = 500 tasks &mdash; already 67% of Professional&apos;s 750-task limit.
              Make counts operations similarly (each module = 1 operation), but gives you 10,000 on the $10.59/mo
              Core plan vs. Zapier&apos;s 750 on the $29.99/mo Professional plan. n8n counts by workflow execution,
              not steps &mdash; a 5-step workflow running once = 1 execution.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I stay on free tiers as a solo founder?</h3>
                <p className="text-muted">Usually yes. Zapier Free (100 tasks/month for 2-step Zaps) covers most solo founder needs. Make Free (1,000 ops/month) is even more generous. Most solo founders use 20&ndash;80 tasks/month, well within free limits.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When does self-hosting n8n make sense?</h3>
                <p className="text-muted">When you exceed 10,000 executions/month and have someone comfortable with Docker and server maintenance. Self-hosted n8n is completely free with unlimited executions. Budget $5&ndash;20/month for hosting on Railway, Render, or a VPS.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I estimate my task volume before signing up?</h3>
                <p className="text-muted">Count your current manual processes: form submissions per month, deals closed, emails sent, reports generated. Each manual process you automate becomes a set of tasks. Start conservative and upgrade when you hit 80% of a tier&apos;s limit.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n", "pipedream"]}
            comparisons={["zapier-vs-make", "zapier-vs-n8n", "make-vs-n8n"]}
            guides={[
              "automation-pricing-compared",
              "when-zapier-costs-more-than-make",
              "how-to-choose-automation-tool",
              "best-automation-tool-solopreneurs",
            ]}
          />
        </div>
      </article>
    </>
  );
}
