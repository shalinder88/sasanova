import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Zapier (Even Though Everyone Does)",
  description:
    "Zapier is the default automation tool — but it's also the most expensive at scale. Here are 4 situations where Zapier is the wrong choice, with real pricing math and specific alternatives.",
};

export default function WhoShouldNotUseZapier() {
  return (
    <>
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
              Who Should NOT Use Zapier
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Anti-Recommendation
            </span>
            <span className="text-[11px] text-muted">11 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use Zapier (Even Though Everyone Does)
          </h1>
          <p className="text-lg text-muted">
            Zapier has the most integrations, the simplest setup, and the highest prices. For low-volume users, it&apos;s fine. For everyone else, there are tools that do the same thing for 60&ndash;80% less. Here&apos;s when Zapier is the wrong choice.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Context ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Why This Matters</p>
            <p className="text-sm text-muted">
              Zapier&apos;s pricing scales by &ldquo;tasks&rdquo; (each step in a Zap counts as a task). A 5-step Zap running 100 times uses 500 tasks. Zapier Professional at 2,000 tasks/month costs $49.99/month. Make (Integromat) offers 10,000 operations/month for $16.67/month. Same automations, 70% less money.
            </p>
          </div>

          {/* ── Case 1: High Volume ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Teams Running 2,000+ Tasks Per Month</h2>
          <p className="text-muted mb-4">
            Zapier&apos;s task-based pricing punishes volume. Every multi-step Zap multiplies your task count. A 3-step Zap running 1,000 times costs 3,000 tasks. On Zapier, that puts you on the Professional plan at $49.99/month (2,000 tasks) or Team at $69.99/month (unlimited, but requires minimum 2 seats = $139.98/month).
          </p>
          <p className="text-muted mb-4">
            Make counts differently: operations instead of tasks, and their operations count is more generous. 10,000 operations on Make Core costs $16.67/month (annual billing). The same workflows that cost $49.99&ndash;$139.98/month on Zapier cost $16.67/month on Make.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Volume</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Make Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">2,000 tasks</td>
                  <td className="px-4 py-2.5">$49.99/mo (Professional)</td>
                  <td className="px-4 py-2.5">$10.59/mo (Core, 10K ops)</td>
                  <td className="px-4 py-2.5">79%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000 tasks</td>
                  <td className="px-4 py-2.5">$49.99/mo (Professional)</td>
                  <td className="px-4 py-2.5">$10.59/mo (Core, 10K ops)</td>
                  <td className="px-4 py-2.5">79%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">20,000 tasks</td>
                  <td className="px-4 py-2.5">$139.98/mo (Team, 2 seats)</td>
                  <td className="px-4 py-2.5">$29.00/mo (Pro, 10K ops + extra)</td>
                  <td className="px-4 py-2.5">79%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">100,000+ tasks</td>
                  <td className="px-4 py-2.5">Custom ($250+/mo)</td>
                  <td className="px-4 py-2.5">$92.00/mo (Teams)</td>
                  <td className="px-4 py-2.5">63%+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Make</strong> &mdash; Core plan at $10.59/month (annual) for 10,000 operations. Visual scenario builder, more granular control over data flow, and a pricing model that doesn&apos;t punish multi-step workflows. <Link href="/tools/make" className="text-accent hover:underline">See Make review</Link></li>
            </ul>
          </div>

          {/* ── Case 2: Technical Teams ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Technical Teams Comfortable With Self-Hosting</h2>
          <p className="text-muted mb-4">
            If your team has a developer who can manage a Docker container, n8n eliminates the recurring automation bill entirely. n8n is open-source, self-hostable, and functionally comparable to Zapier for most workflows. Self-hosting on a $5&ndash;$20/month VPS gives you unlimited executions.
          </p>
          <p className="text-muted mb-4">
            The trade-off is real: you manage updates, backups, uptime, and debugging yourself. For a team already running infrastructure (web servers, databases, CI/CD), adding n8n is trivial. For a team that doesn&apos;t touch servers, it&apos;s not worth the overhead.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Option</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Executions</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Maintenance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zapier Team</td>
                  <td className="px-4 py-2.5">$69.99/seat/mo</td>
                  <td className="px-4 py-2.5">Unlimited tasks</td>
                  <td className="px-4 py-2.5">None (managed)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud Starter</td>
                  <td className="px-4 py-2.5">$24/mo</td>
                  <td className="px-4 py-2.5">2,500 executions</td>
                  <td className="px-4 py-2.5">None (managed)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">n8n Self-Hosted</td>
                  <td className="px-4 py-2.5">$5&ndash;$20 (VPS only)</td>
                  <td className="px-4 py-2.5">Unlimited</td>
                  <td className="px-4 py-2.5">You manage everything</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">n8n (self-hosted)</strong> &mdash; Free and open-source. Run on any VPS via Docker. Best for teams already managing infrastructure who want unlimited automations at near-zero marginal cost. <Link href="/tools/n8n" className="text-accent hover:underline">See n8n review</Link></li>
              <li><strong className="text-foreground">n8n Cloud</strong> &mdash; From $24/month if you want n8n without the server management. Cheaper than Zapier at comparable volumes.</li>
            </ul>
          </div>

          {/* ── Case 3: Complex Branching ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Anyone With Complex Branching Logic</h2>
          <p className="text-muted mb-4">
            Zapier&apos;s automation model is linear: trigger &rarr; action &rarr; action &rarr; action. You can add Paths (if/else), Filters, and Looping, but the interface was designed for simple A-to-B workflows. Complex branching with multiple conditions, error handling, and parallel paths gets messy fast.
          </p>
          <p className="text-muted mb-4">
            Make&apos;s visual builder treats automation like a flowchart. You can see the entire scenario at once, drag connections between modules, add routers for branching, set up error handlers per module, and build loops natively. For workflows with more than 3 conditional branches, Make&apos;s visual approach saves hours of debugging compared to Zapier&apos;s nested path UI.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Make</strong> &mdash; Visual scenario builder with routers, iterators, error handlers, and parallel branches. You see your entire automation as a visual map. For complex logic, this is objectively better than Zapier&apos;s linear path model. <Link href="/tools/make" className="text-accent hover:underline">See Make review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: Agencies ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Agencies Managing Client Workflows</h2>
          <p className="text-muted mb-4">
            Zapier has no native workspace separation for agencies. Managing automations for 10 clients means either: (a) one Zapier account with everything mixed together, (b) 10 separate Zapier accounts at $49.99+/month each = $500+/month minimum, or (c) Zapier Team at $69.99/seat/month with limited organizational features.
          </p>
          <p className="text-muted mb-4">
            Make offers team workspaces where you can create isolated organizations per client, share scenarios between team members, and manage billing centrally. The Teams plan at $92/month supports multiple workspaces with clear boundaries between client automations.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Make Teams</strong> &mdash; $92/month with workspace isolation, team permissions, and centralized billing. One account manages all client automations with clean separation. <Link href="/tools/make" className="text-accent hover:underline">See Make review</Link></li>
              <li><strong className="text-foreground">n8n (self-hosted)</strong> &mdash; Unlimited workflows on your own infrastructure. Create separate instances or use n8n&apos;s credential sharing to manage client automations with full control.</li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Zapier IS Worth the Premium</h2>
          <p className="text-muted mb-4">
            There are two specific scenarios where Zapier genuinely earns its higher price:
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Scenario 1: You need a specific integration that only Zapier has.</strong> Zapier supports 7,000+ apps. Make supports ~1,800. n8n supports ~900 (plus community nodes). If the niche app your workflow depends on only has a Zapier integration, that&apos;s the deciding factor. Check before you switch: go to make.com/integrations and n8n.io/integrations to verify your tools are supported.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Scenario 2: Your team is non-technical and runs fewer than 750 tasks/month.</strong> Zapier&apos;s Free plan (100 tasks/month) and Starter plan ($19.99/month for 750 tasks) are priced competitively for low-volume users. The interface is genuinely simpler than Make&apos;s for basic trigger-action workflows. If you have 5&ndash;10 simple Zaps and a non-technical team, Zapier&apos;s ease of use justifies the premium.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate my Zaps to Make automatically?</h3>
                <p className="text-muted">No. There is no auto-migration tool. Every Zap must be manually rebuilt in Make as a scenario. The good news: Make&apos;s interface makes it straightforward, and most simple Zaps translate in 10&ndash;15 minutes each.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make really 60&ndash;80% cheaper?</h3>
                <p className="text-muted">Yes, at comparable volumes. Zapier Professional at 2,000 tasks is $49.99/month. Make Core at 10,000 operations is $10.59/month (annual). The percentage savings varies by tier, but 60&ndash;80% is accurate across most plan comparisons.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s the difference between Zapier tasks and Make operations?</h3>
                <p className="text-muted">In Zapier, each step in a Zap counts as a task: trigger (1 task) + action (1 task) + another action (1 task) = 3 tasks per run. In Make, operations count similarly per module, but Make&apos;s plans include more operations per dollar and don&apos;t count certain modules (like routers) against your limit.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is n8n reliable enough for business-critical workflows?</h3>
                <p className="text-muted">n8n Cloud is production-ready with uptime SLAs. Self-hosted n8n reliability depends entirely on your infrastructure. Companies like Delivery Hero, Otto, and Mindstone use n8n in production. For mission-critical workflows, use n8n Cloud or ensure your self-hosted setup has proper monitoring and redundancy.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["zapier", "make", "n8n"]}
          comparisons={["zapier-vs-make", "zapier-vs-n8n", "make-vs-n8n"]}
          guides={["migrate-zapier-to-make", "migrate-zapier-to-n8n", "automation-pricing-compared", "best-automation-tool-solopreneurs"]}
        />
      </article>
    </>
  );
}
