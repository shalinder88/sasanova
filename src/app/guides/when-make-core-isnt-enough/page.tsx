import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "When Make Core Needs an Upgrade (And When It Doesn't)",
  description:
    "Make Core is $10.59/mo for 10,000 ops. Pro is $18.82/mo, Teams is $34.12/mo. Most solopreneurs never need to upgrade. Here's when Core is enough and when it isn't.",
};

export default function WhenMakeCoreIsntEnough() {
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
              When Make Core Isn&apos;t Enough
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Cost Threshold
            </span>
            <span className="text-[11px] text-muted">10 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            When Make Core Needs an Upgrade (And When It Doesn&apos;t)
          </h1>
          <p className="text-lg text-muted">
            Make Core at $10.59/mo gives you 10,000 operations and unlimited scenarios. For most solopreneurs, that&apos;s genuinely enough. Pro at $18.82/mo and Teams at $34.12/mo add debugging and collaboration features that matter only in specific situations. This guide maps those exact situations.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from Make vendor page"
          sourceCount={2}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Make&apos;s Complete Pricing Ladder</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Ops/Month</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5">1,000</td>
                  <td className="px-4 py-2.5">2 active scenarios</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Core</td>
                  <td className="px-4 py-2.5">$10.59/mo</td>
                  <td className="px-4 py-2.5">$108/yr</td>
                  <td className="px-4 py-2.5">10,000</td>
                  <td className="px-4 py-2.5">Unlimited scenarios, basic features</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                  <td className="px-4 py-2.5">$18.82/mo</td>
                  <td className="px-4 py-2.5">$192/yr</td>
                  <td className="px-4 py-2.5">10,000</td>
                  <td className="px-4 py-2.5">Custom functions, full-text log search, priority execution</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Teams</td>
                  <td className="px-4 py-2.5">$34.12/mo</td>
                  <td className="px-4 py-2.5">$348/yr</td>
                  <td className="px-4 py-2.5">10,000</td>
                  <td className="px-4 py-2.5">Team management, shared scenarios, high-priority execution</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Notice: all paid plans start with the same 10,000 operations. The price difference is about features, not volume. You can buy additional operations on any plan.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">When Core Is Enough (Most Solopreneurs)</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Stay on Core ($10.59/mo) if:</p>
            <p className="text-sm text-muted">
              You&apos;re a solopreneur or small team running standard automations &mdash; CRM syncs, email triggers, form processing, social media posting. Your scenarios are straightforward (linear flows, not complex branching). You don&apos;t need to debug failed scenarios frequently, and you&apos;re the only person managing automations. Core handles this perfectly.
            </p>
          </div>
          <p className="text-muted mb-4">
            Core gives you unlimited scenarios and 10,000 operations &mdash; enough for roughly 300&ndash;500 automated actions per day. For context, a typical CRM-to-email sync runs 5&ndash;10 operations per trigger. At 50 new leads per day, that&apos;s 250&ndash;500 operations. You have room to spare.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">When Pro Is Worth It ($18.82/mo)</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade to Pro when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li><strong className="text-foreground">You&apos;re debugging complex scenarios.</strong> Pro adds full-text log search so you can find specific execution errors across all scenarios. On Core, you scroll through execution logs manually &mdash; painful with 20+ active scenarios.</li>
              <li><strong className="text-foreground">You need custom variables.</strong> Pro allows custom functions and variables that simplify complex data transformations across scenarios.</li>
              <li><strong className="text-foreground">You need priority execution.</strong> Pro scenarios execute before Core scenarios during high-load periods. If timing matters (e.g., real-time notifications), this prevents delays.</li>
            </ul>
          </div>
          <p className="text-muted mb-4">
            The Pro upgrade costs $8.23/mo more than Core ($18.82 vs $10.59). That&apos;s $98.76/year. If full-text log search saves you even 30 minutes of debugging per month, Pro pays for itself at any reasonable hourly rate.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">When Teams Makes Sense ($34.12/mo)</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade to Teams when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li><strong className="text-foreground">Multiple people manage automations.</strong> Teams adds user roles, shared scenarios, and team management. If two or more people build and maintain scenarios, Core/Pro creates ownership confusion.</li>
              <li><strong className="text-foreground">You need high-priority execution.</strong> Teams scenarios get the highest execution priority &mdash; important for business-critical automations where delays cost money.</li>
              <li><strong className="text-foreground">You need scenario versioning and approval workflows.</strong> Teams adds governance features for when automations affect business processes.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: Make Free (If You&apos;re Starting)</h2>
          <p className="text-muted mb-4">
            Make Free gives you 1,000 operations/month and 2 active scenarios at $0. For testing automations or running very low-volume workflows (under 30 triggers/day), Free is a legitimate option. The limits:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">2 active scenarios.</strong> You can build more, but only 2 run at a time.</li>
            <li><strong className="text-foreground">1,000 operations/month.</strong> That&apos;s roughly 30 automated actions per day.</li>
            <li><strong className="text-foreground">15-minute execution interval.</strong> Scenarios check for triggers every 15 minutes, not in real-time.</li>
          </ul>
          <p className="text-muted mb-4">
            If you outgrow Free but don&apos;t need Pro/Teams features, Core at $10.59/mo is one of the best automation values in SaaS. It&apos;s roughly 10x the operations and unlimited scenarios for about $10/month.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What counts as an operation in Make?</h3>
                <p className="text-muted">Each module execution in a scenario counts as one operation. A scenario with 5 modules that runs once uses 5 operations. This is different from Zapier, where a 5-step Zap burns 5 tasks per run (same concept, different name).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I buy more operations without upgrading plans?</h3>
                <p className="text-muted">Yes. All plans allow purchasing additional operation packs. If you need 50,000 operations but don&apos;t need Pro features, staying on Core and buying extra operations is often cheaper than upgrading.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How does Make compare to Zapier on price?</h3>
                <p className="text-muted">Make Core at $10.59/mo for 10,000 operations is dramatically cheaper than Zapier Professional at $29.99/mo for 2,000 tasks. At equal volume, Make saves 50&ndash;70% depending on the plan and usage. The tradeoff: Make has a steeper learning curve.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make Pro worth it for agencies?</h3>
                <p className="text-muted">For agencies managing client automations, Teams ($34.12/mo) is more appropriate than Pro. Teams adds the collaboration and management features agencies need. Pro is for power users who work alone but need better debugging tools.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["make", "zapier", "n8n"]}
            comparisons={["make-vs-zapier", "make-vs-n8n"]}
            guides={["when-zapier-costs-more-than-make", "saas-pricing-traps-2026"]}
          />
        </div>
      </article>
    </>
  );
}
