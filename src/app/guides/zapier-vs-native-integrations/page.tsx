import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Zapier vs Native Integrations: When to Pay for Middleware",
  description:
    "5 common workflows compared: native integrations vs Zapier ($29.99/mo) vs Make ($10.59/mo). When middleware is unnecessary, when it saves you from a $890/mo HubSpot upgrade, and the exact cost per workflow.",
};

export default function ZapierVsNativeIntegrations() {
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
              Zapier vs Native Integrations
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Integration Guide
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Zapier vs Native Integrations: When to Pay for Middleware
          </h1>
          <p className="text-lg text-muted">
            Every SaaS tool now advertises &ldquo;native integrations.&rdquo;
            But native doesn&apos;t mean complete. Here are 5 real workflows
            where we compare native connections against Zapier Professional
            ($29.99/mo for 750 tasks) and Make Core ($10.59/mo for 10,000
            ops) to show exactly when middleware is worth paying for.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── The Cost Baseline ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              Middleware Price Reference
            </p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li><strong className="text-foreground">Zapier Free:</strong> 100 tasks/mo, 2-step only (single trigger + single action)</li>
              <li><strong className="text-foreground">Zapier Professional:</strong> $29.99/mo for 750 tasks, multi-step</li>
              <li><strong className="text-foreground">Zapier Team:</strong> $103.50/mo for 2,000 tasks, shared workspaces</li>
              <li><strong className="text-foreground">Make Free:</strong> 1,000 ops/mo, 2 active scenarios</li>
              <li><strong className="text-foreground">Make Core:</strong> $10.59/mo for 10,000 ops, unlimited scenarios</li>
              <li><strong className="text-foreground">n8n Community:</strong> Free, self-hosted, unlimited executions</li>
              <li><strong className="text-foreground">n8n Starter:</strong> $20/mo cloud for 2,500 executions</li>
            </ul>
          </div>

          {/* ── Workflow 1: CRM to Email ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Workflow 1: New CRM Contact &rarr; Email Sequence
          </h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The need:</strong> When a new contact enters your CRM, automatically add them to an email nurture sequence.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Native option:</strong> HubSpot Professional ($890/mo) includes workflows that trigger email sequences automatically. ActiveCampaign Plus ($49/mo at 1,000 contacts) has built-in CRM-to-email automation. Pipedrive Growth ($39/seat/mo) does not &mdash; it handles deals and email separately.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">With middleware:</strong> Pipedrive Lite ($14/seat/mo) + ActiveCampaign Starter ($15/mo) + Zapier Professional ($29.99/mo) = $58.99/mo total. Versus HubSpot Professional&apos;s $890/mo for the same result. Make Core ($10.59/mo) instead of Zapier drops that to $39.59/mo.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Verdict: Middleware Wins</p>
            <p className="text-sm text-muted">Saving $831/mo by using Pipedrive + ActiveCampaign + Make instead of HubSpot Professional. The integration takes 15 minutes to set up.</p>
          </div>

          {/* ── Workflow 2: Form to CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Workflow 2: Form Submission &rarr; CRM Contact
          </h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Native option:</strong> HubSpot forms (all tiers including Free) auto-create contacts. Pipedrive has Web Forms on Growth ($39/seat/mo) and above. Most CRMs have some form solution.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">With middleware:</strong> Use Tally (free, unlimited forms) connected to any CRM via Zapier. But this workflow is so common that Zapier Free&apos;s 100 tasks/mo handles it for most small businesses &mdash; no paid middleware needed.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Verdict: Native Is Enough</p>
            <p className="text-sm text-muted">HubSpot Free does this natively. For other CRMs, Zapier Free (100 tasks/mo) covers small volumes. Only pay for middleware if you get 100+ form submissions per month.</p>
          </div>

          {/* ── Workflow 3: Slack Notifications ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Workflow 3: Deal Stage Change &rarr; Slack Notification
          </h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Native option:</strong> HubSpot, Pipedrive, and most CRMs have native Slack integrations. HubSpot&apos;s is particularly good &mdash; customizable notifications by deal stage, pipeline, and amount. Pipedrive&apos;s sends basic deal update notifications.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">With middleware:</strong> Unnecessary for simple notifications. Only worth adding Zapier/Make if you need conditional routing (e.g., deals over $10K go to #big-deals, under $10K to #standard-deals). That level of logic isn&apos;t available in native integrations.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Verdict: Native Is Enough (Usually)</p>
            <p className="text-sm text-muted">Skip middleware unless you need conditional routing. Save $10.59&ndash;$29.99/mo.</p>
          </div>

          {/* ── Workflow 4: E-commerce to CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Workflow 4: Shopify Order &rarr; CRM Contact + Deal
          </h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Native option:</strong> HubSpot has a native Shopify integration on all tiers that syncs customers and creates contacts. Pipedrive does not have a native Shopify integration &mdash; this is a common gap.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">With middleware:</strong> Shopify (Basic $39/mo) + Pipedrive Lite ($14/seat/mo) + Make Core ($10.59/mo) = $63.59/mo. The Make scenario creates a Pipedrive contact and deal for every Shopify order. Multi-step, so Zapier Free won&apos;t work &mdash; you need Professional ($29.99/mo) minimum, making that route $82.99/mo.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Verdict: Middleware Required (for Non-HubSpot CRMs)</p>
            <p className="text-sm text-muted">Make Core ($10.59/mo) saves $19.40/mo over Zapier Professional for this exact workflow. HubSpot users get this free natively.</p>
          </div>

          {/* ── Workflow 5: Calendar to CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Workflow 5: Calendly Booking &rarr; CRM Contact + Activity
          </h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Native option:</strong> Calendly ($12/user/mo Standard) has native integrations with HubSpot and Salesforce. These create contacts and log activities automatically. Cal.com (free, open-source) also integrates natively with HubSpot.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">With middleware:</strong> For Pipedrive or other CRMs without native Calendly support, you need Zapier or Make. Calendly Standard ($12/user/mo) + Pipedrive Lite ($14/seat/mo) + Make Core ($10.59/mo) = $36.59/mo.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Verdict: Depends on Your CRM</p>
            <p className="text-sm text-muted">HubSpot and Salesforce users get this free natively. Everyone else needs $10.59&ndash;$29.99/mo in middleware.</p>
          </div>

          {/* ── Summary Table ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Decision Summary: When to Pay for Middleware
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Workflow</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Native Enough?</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Middleware Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">CRM &rarr; Email</td>
                  <td className="px-4 py-2.5 text-muted">Only with $49+/mo all-in-one tools</td>
                  <td className="px-4 py-2.5 text-muted">Make $10.59/mo (saves $831 vs HubSpot Pro)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Form &rarr; CRM</td>
                  <td className="px-4 py-2.5 text-muted">Yes (HubSpot Free, most CRMs)</td>
                  <td className="px-4 py-2.5 text-muted">$0 (Zapier Free covers small volume)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Deal &rarr; Slack</td>
                  <td className="px-4 py-2.5 text-muted">Yes (most CRMs)</td>
                  <td className="px-4 py-2.5 text-muted">$0 unless conditional routing needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Shopify &rarr; CRM</td>
                  <td className="px-4 py-2.5 text-muted">Only HubSpot</td>
                  <td className="px-4 py-2.5 text-muted">Make $10.59/mo or Zapier $29.99/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Calendly &rarr; CRM</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot/Salesforce only</td>
                  <td className="px-4 py-2.5 text-muted">Make $10.59/mo or Zapier $29.99/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Should I always pick Make over Zapier?</h3>
          <p className="text-muted mb-4">
            Not always. Make Core ($10.59/mo) is cheaper at scale &mdash; 10,000 ops vs Zapier&apos;s 750 tasks at $29.99/mo. But Zapier is faster to set up and has 7,000+ integrations vs Make&apos;s 1,800+. If you have 1-2 simple automations and value your time, Zapier&apos;s simplicity may be worth $19.40/mo more.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Can n8n replace both?</h3>
          <p className="text-muted mb-4">
            If you&apos;re technical, yes. n8n Community Edition is free and self-hosted with unlimited executions. Cloud starts at $20/mo for 2,500 executions. The tradeoff: you manage infrastructure (or pay for cloud) and build workflows with a steeper learning curve.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">What&apos;s the real cost difference between Zapier tasks and Make operations?</h3>
          <p className="text-muted mb-4">
            A 5-step Zap on Zapier consumes 5 tasks per run. A 5-step scenario on Make consumes 5 operations per run. But Zapier Professional gives you 750 tasks/mo ($29.99), while Make Core gives you 10,000 ops/mo ($10.59). That means Make handles roughly 13x the volume for 65% less money.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "when-zapier-costs-more-than-make",
            "automation-pricing-compared",
            "hubspot-integrations-guide",
          ]}
          comparisons={["zapier-vs-make"]}
        />
      </article>
    </>
  );
}
