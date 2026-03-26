import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Pipedrive Growth Path: Lite → Growth → Premium → Ultimate",
  description:
    "What each Pipedrive tier adds and when each upgrade pays for itself. Lite $14/seat, Growth $39/seat, Premium $49/seat, Ultimate $99/seat. Exact trigger signals and ROI math.",
};

export default function PipedriveGrowthPathPage() {
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
              Pipedrive Growth Path
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Tool Maturity
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Pipedrive Growth Path: Lite &rarr; Growth &rarr; Premium &rarr; Ultimate
          </h1>
          <p className="text-lg text-muted">
            Pipedrive keeps its tier jumps small compared to HubSpot &mdash; $14 to $39 to $49 to $99 per seat per month. No surprise $890/mo flat fees. But each tier gates specific features that matter at different stages. This guide maps the $14&rarr;$39&rarr;$49&rarr;$99/seat journey so you upgrade only when it pays for itself.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Pricing verified from Pipedrive vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">The Four Tiers at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Additions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lite</td>
                  <td className="px-4 py-2.5">$14/seat/mo</td>
                  <td className="px-4 py-2.5">$168/seat/yr</td>
                  <td className="px-4 py-2.5">3,000 deals, 30 custom fields, lead/deal management</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Growth</td>
                  <td className="px-4 py-2.5">$39/seat/mo</td>
                  <td className="px-4 py-2.5">$348/seat/yr</td>
                  <td className="px-4 py-2.5">Automations, full email sync, meeting scheduler</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Premium</td>
                  <td className="px-4 py-2.5">$49/seat/mo</td>
                  <td className="px-4 py-2.5">$588/seat/yr</td>
                  <td className="px-4 py-2.5">Advanced reporting, revenue forecasts, e-signatures</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Ultimate</td>
                  <td className="px-4 py-2.5">$99/seat/mo</td>
                  <td className="px-4 py-2.5">$948/seat/yr</td>
                  <td className="px-4 py-2.5">Unlimited everything, security alerts, implementation support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 1: Lite ($14/seat/mo) &mdash; Pipeline Basics</h2>
          <p className="text-muted mb-4">
            Lite gives you the core Pipedrive experience: visual pipeline, deal management, activity tracking, and basic email integration. At $14/seat/mo, it&apos;s the cheapest entry point in the mid-tier CRM market.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Lite Limits That Matter</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>3,000 open deals &mdash; plenty for most small teams, but fast-growing outbound teams can hit this</li>
              <li>30 custom fields &mdash; enough for basic CRM, tight for complex qualification criteria</li>
              <li>No automations &mdash; every stage change, follow-up reminder, and assignment is manual</li>
              <li>No full email sync &mdash; you see email activity but can&apos;t send/receive from within Pipedrive</li>
              <li>No meeting scheduler &mdash; you need Calendly or Cal.com separately</li>
            </ul>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Growth</p>
            <p className="text-sm text-muted">When you spend 30+ minutes/day on manual CRM tasks that automation could handle: assigning deals, moving stages, sending follow-up emails. Or when you need full email sync to stop switching between Gmail/Outlook and Pipedrive. The $25/seat jump saves hours weekly.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 2: Growth ($39/seat/mo) &mdash; Where Most Teams Land</h2>
          <p className="text-muted mb-4">
            Growth is Pipedrive&apos;s most popular tier for a reason. It adds workflow automations, full two-way email sync, and the meeting scheduler. For sales teams of 3&ndash;15, this is the sweet spot.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">What Growth Adds</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>Workflow automations &mdash; auto-assign deals, trigger emails on stage changes, create activities</li>
              <li>Full two-way email sync &mdash; send and receive email inside Pipedrive</li>
              <li>Meeting scheduler &mdash; let prospects book directly</li>
              <li>Unlimited custom fields</li>
              <li>Products catalog</li>
            </ul>
          </div>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">ROI Math</h3>
            <p className="text-sm text-muted">
              The $25/seat jump from Lite to Growth ($14&rarr;$39) costs $300/seat/yr. If automation saves each rep 30 minutes/day on manual CRM tasks, that&apos;s ~125 hours/year. At $30/hr loaded cost, that&apos;s $3,750 saved per rep. The upgrade pays for itself 12x over.
            </p>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Premium</p>
            <p className="text-sm text-muted">When you need revenue forecasting for board meetings or investor reporting, advanced custom reporting beyond default dashboards, or e-signatures to close deals faster. Typically happens at 10+ deals/month per rep or when leadership demands pipeline visibility.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 3: Premium ($49/seat/mo) &mdash; Reporting and Forecasting</h2>
          <p className="text-muted mb-4">
            Premium adds $10/seat over Growth for advanced reporting, revenue forecasts, and e-signatures. The jump is small, but the features are only valuable if you actually use reporting and forecasting.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">What Premium Adds</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>Advanced reporting &mdash; custom reports, recurring revenue tracking</li>
              <li>Revenue forecasts &mdash; weighted pipeline projections</li>
              <li>E-signatures &mdash; send contracts directly from deals (saves DocuSign cost)</li>
              <li>Multiple email accounts per user</li>
              <li>Smart Docs with auto-fill from deal data</li>
            </ul>
          </div>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">E-Signature Savings</h3>
            <p className="text-sm text-muted">
              DocuSign Personal costs $15/mo. If each seat was also paying for DocuSign, Premium&apos;s $10/seat jump actually saves $5/seat by bundling e-signatures. This single feature can make Premium cheaper than Growth + a separate e-signature tool.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 4: Ultimate ($99/seat/mo) &mdash; When You Need Everything</h2>
          <p className="text-muted mb-4">
            Ultimate doubles the per-seat cost from Premium for unlimited everything, security alerts, and implementation support. Unless you need security features for compliance or you&apos;re hitting limits on the other plans, Ultimate is rarely justified for teams under 25.
          </p>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">When Ultimate Makes Sense</p>
            <p className="text-sm text-muted">Enterprise security requirements (security alerts, enhanced user permissions), dedicated implementation support for complex migrations, or when you genuinely need unlimited everything. At $99/seat for a 25-person team, that&apos;s $29,700/yr &mdash; approaching HubSpot Professional territory.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cost Comparison by Team Size</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Lite</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Growth</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Premium</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Ultimate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">3 seats</td>
                  <td className="px-4 py-2.5">$42/mo</td>
                  <td className="px-4 py-2.5">$117/mo</td>
                  <td className="px-4 py-2.5">$147/mo</td>
                  <td className="px-4 py-2.5">$297/mo</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">10 seats</td>
                  <td className="px-4 py-2.5">$140/mo</td>
                  <td className="px-4 py-2.5">$390/mo</td>
                  <td className="px-4 py-2.5">$490/mo</td>
                  <td className="px-4 py-2.5">$990/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 seats</td>
                  <td className="px-4 py-2.5">$350/mo</td>
                  <td className="px-4 py-2.5">$975/mo</td>
                  <td className="px-4 py-2.5">$1,225/mo</td>
                  <td className="px-4 py-2.5">$2,475/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I start with Pipedrive Lite or Growth?</h3>
                <p className="text-muted">Start with Lite ($14/seat/mo) if you have a small team and want to test Pipedrive&apos;s pipeline management. Move to Growth ($39/seat/mo) when you need email sync and automations &mdash; most teams upgrade within 2&ndash;3 months.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Pipedrive Growth worth the $25/seat jump from Lite?</h3>
                <p className="text-muted">Yes for any team doing more than 5 deals/month. Automation alone saves 30+ minutes per rep per day. Full email sync eliminates tab-switching. The $25/seat/mo cost is recovered in saved labor within the first week.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When does Pipedrive become more expensive than HubSpot?</h3>
                <p className="text-muted">At 23+ seats on Pipedrive Growth ($39/seat = $897/mo), you pass HubSpot Professional ($890/mo flat). But HubSpot Professional includes marketing automation that Pipedrive doesn&apos;t. For pure sales CRM, Pipedrive stays cheaper per feature at every team size.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Pipedrive have a free tier?</h3>
                <p className="text-muted">No. Pipedrive has a 14-day free trial but no permanent free plan. If you need a free CRM, HubSpot Free ($0) or Freshsales Free ($0 for up to 3 users) are better starting points.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["pipedrive", "hubspot-crm", "close-crm"]}
            comparisons={["hubspot-vs-pipedrive", "pipedrive-vs-close"]}
            guides={["best-crm-under-20-per-user", "switch-from-hubspot-to-pipedrive", "pipedrive-setup-guide"]}
          />
        </div>
      </article>
    </>
  );
}
