import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "3-Year Automation Cost as Volume Grows: Zapier vs Make vs n8n",
  description:
    "Exact 3-year cost projection for Zapier, Make, and n8n as your automation volume grows from 500 to 2,000 to 10,000 tasks per month. Real vendor pricing.",
};

export default function AutomationCostOver3YearsPage() {
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
              3-Year Automation Cost
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Year-Over-Year Cost
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            3-Year Automation Cost as Volume Grows: Zapier vs Make vs n8n
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Automation usage doesn&apos;t stay flat. As you add workflows, connect more tools,
            and your business grows, task volume scales from hundreds to thousands to tens of
            thousands. This guide projects exact costs as you grow from 500 tasks/month (Year 1)
            to 2,000 (Year 2) to 10,000 (Year 3).
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Important: Task Counting Difference */}
          <section>
            <h2 className="text-xl font-bold mb-3">Critical: These Platforms Count Differently</h2>
            <p className="text-muted leading-relaxed mb-4">
              When we say &ldquo;500 tasks/month,&rdquo; we mean 500 complete workflow runs.
              Because each platform counts units differently, the same workflow consumes different
              amounts of each platform&apos;s quota. For a typical 4-step workflow:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Unit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">500 Runs</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">2,000 Runs</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10,000 Runs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Tasks</td>
                    <td className="px-4 py-2.5 text-muted">1,500 tasks</td>
                    <td className="px-4 py-2.5 text-muted">6,000 tasks</td>
                    <td className="px-4 py-2.5 text-muted">30,000 tasks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Operations</td>
                    <td className="px-4 py-2.5 text-muted">2,000 ops</td>
                    <td className="px-4 py-2.5 text-muted">8,000 ops</td>
                    <td className="px-4 py-2.5 text-muted">40,000 ops</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Executions</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">500 exec</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">2,000 exec</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">10,000 exec</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Basis */}
          <section>
            <h2 className="text-xl font-bold mb-3">Plans Used in This Analysis</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">750 tasks/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Team</td>
                    <td className="px-4 py-2.5 text-muted">$103.50/mo</td>
                    <td className="px-4 py-2.5 text-muted">2,000 tasks/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Core</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Pro</td>
                    <td className="px-4 py-2.5 text-muted">$18.82/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">2,500 executions/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Pro</td>
                    <td className="px-4 py-2.5 text-muted">$50/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 executions/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n</td>
                    <td className="px-4 py-2.5 text-muted">Community (self-hosted)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 1: 500 tasks */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 1: 500 Workflow Runs/Month</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 500 runs/month with 4-step workflows, Zapier needs the Professional plan
              (1,500 tasks fits in 750 only if workflows are 1&ndash;2 steps; realistic
              multi-step workflows need Team or careful batching). Make Core handles it easily.
              n8n Starter covers it with room to spare.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan Needed</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Team ($103.50/mo for 2K tasks)</td>
                    <td className="px-4 py-2.5 text-muted">$103.50</td>
                    <td className="px-4 py-2.5 text-muted">$1,242</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Core (10K ops)</td>
                    <td className="px-4 py-2.5 text-muted">$10.59</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$127.08</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Starter (2,500 exec)</td>
                    <td className="px-4 py-2.5 text-muted">$20</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$240</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                    <td className="px-4 py-2.5 text-muted">Community (unlimited)</td>
                    <td className="px-4 py-2.5 text-muted">$0 + hosting</td>
                    <td className="px-4 py-2.5 text-muted">~$60&ndash;$120 hosting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 2: 2,000 tasks */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 2: 2,000 Workflow Runs/Month</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 2,000 runs with 4-step workflows, Zapier burns 6,000 tasks/month &mdash;
              well beyond the Team plan&apos;s 2,000 task limit. You need custom/enterprise
              pricing or careful workflow consolidation. Make needs additional operations
              (8,000 ops, within Core&apos;s 10K limit). n8n Starter&apos;s 2,500 executions
              is tight; Pro at $50/mo gives comfortable headroom.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan Needed</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Enterprise (custom pricing)</td>
                    <td className="px-4 py-2.5 text-muted">~$250+/mo est.</td>
                    <td className="px-4 py-2.5 text-muted">~$3,000+</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Core (10K ops &mdash; still fits)</td>
                    <td className="px-4 py-2.5 text-muted">$10.59</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$127.08</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Pro (10K exec)</td>
                    <td className="px-4 py-2.5 text-muted">$50</td>
                    <td className="px-4 py-2.5 text-muted">$600</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                    <td className="px-4 py-2.5 text-muted">Community (unlimited)</td>
                    <td className="px-4 py-2.5 text-muted">$0 + hosting</td>
                    <td className="px-4 py-2.5 text-muted">~$60&ndash;$120 hosting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 3: 10,000 tasks */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 3: 10,000 Workflow Runs/Month</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 10,000 runs with 4-step workflows, Zapier consumes 30,000 tasks/month &mdash;
              deep into enterprise pricing territory. Make needs 40,000 operations (4x the
              Core plan&apos;s limit, so you buy additional ops or upgrade). n8n Pro handles
              10,000 executions perfectly at $50/mo.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan Needed</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Enterprise (custom)</td>
                    <td className="px-4 py-2.5 text-muted">~$500+/mo est.</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">~$6,000+</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Teams + extra ops (40K ops needed)</td>
                    <td className="px-4 py-2.5 text-muted">~$68&ndash;$100/mo</td>
                    <td className="px-4 py-2.5 text-muted">~$816&ndash;$1,200</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Pro (10K exec)</td>
                    <td className="px-4 py-2.5 text-muted">$50</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$600</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                    <td className="px-4 py-2.5 text-muted">Community (unlimited)</td>
                    <td className="px-4 py-2.5 text-muted">$0 + hosting</td>
                    <td className="px-4 py-2.5 text-muted">~$120&ndash;$240 hosting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3-Year Total */}
          <section>
            <h2 className="text-xl font-bold mb-3">3-Year Total Cost Summary</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 1</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 2</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 3</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">3-Year Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">$1,242</td>
                    <td className="px-4 py-2.5 text-muted">~$3,000</td>
                    <td className="px-4 py-2.5 text-muted">~$6,000</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">~$10,242</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">$127</td>
                    <td className="px-4 py-2.5 text-muted">$127</td>
                    <td className="px-4 py-2.5 text-muted">~$1,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$1,254</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td>
                    <td className="px-4 py-2.5 text-muted">$240</td>
                    <td className="px-4 py-2.5 text-muted">$600</td>
                    <td className="px-4 py-2.5 text-muted">$600</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$1,440</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                    <td className="px-4 py-2.5 text-muted">~$90</td>
                    <td className="px-4 py-2.5 text-muted">~$90</td>
                    <td className="px-4 py-2.5 text-muted">~$180</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$360</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Key Takeaway</p>
              <p className="text-sm text-muted">
                Over 3 years, Zapier costs roughly $10,000+ while Make costs ~$1,254 and n8n Cloud
                costs $1,440 for the same work. Make saves you ~$9,000 vs Zapier. n8n self-hosted
                is the cheapest at ~$360 but requires technical maintenance. Zapier&apos;s ease of
                use comes at a steep premium that compounds as volume grows.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Why is Zapier so much more expensive at scale?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Zapier counts each action step as a separate task. A 4-step workflow running once
                  burns 3 tasks (trigger is free). At high volumes, this multiplier effect makes
                  Zapier 3&ndash;5x more expensive than Make or n8n for the same workflow output.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I self-host n8n to eliminate subscription costs?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. n8n Community Edition is free and unlimited. You need a VPS ($5&ndash;$20/mo
                  on DigitalOcean or Hetzner) and basic Docker knowledge. The trade-off is
                  maintenance time: updates, backups, and uptime monitoring.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Does Make Core really handle 2,000 workflow runs at $10.59/mo?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  If your workflows average 4 steps, 2,000 runs = 8,000 operations. Make Core
                  includes 10,000 ops/mo for $10.59, so yes &mdash; it fits. If your workflows
                  are more complex (6&ndash;8 steps), you may need additional operations purchased
                  as add-ons.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  When does Zapier still make sense despite the higher cost?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Zapier has 7,000+ integrations vs Make&apos;s 1,800+ and n8n&apos;s 400+. If you
                  need connections to niche apps that only Zapier supports, and your volume is low
                  (under 500 tasks/month), the convenience premium may be worth it.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            comparisons={["zapier-vs-make", "make-vs-n8n"]}
            guides={["how-to-choose-automation-tool", "when-zapier-costs-more-than-make", "automation-annual-cost-2026"]}
          />
        </div>
      </article>
    </>
  );
}
