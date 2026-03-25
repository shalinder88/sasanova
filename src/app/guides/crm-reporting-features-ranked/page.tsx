import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM Reporting Ranked: What You Actually Get at Each Price Tier",
  description:
    "HubSpot Free gets basic dashboards. Starter ($20/seat) adds email health. Professional ($890/mo) unlocks custom reports. Pipedrive Lite ($14/seat) has none. Salesforce Starter Suite ($25/seat) gets basic reports. Tier-by-tier breakdown.",
};

export default function CrmReportingFeaturesRanked() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">CRM Reporting Ranked</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Feature Deep-Dive</span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM Reporting Ranked: What You Actually Get at Each Price Tier
          </h1>
          <p className="text-lg text-muted">
            CRM vendors love showing off their reporting dashboards in demos. But what do you actually get at each price tier? The gap between &ldquo;basic reporting&rdquo; and &ldquo;custom reports&rdquo; can be a $870/mo jump on HubSpot. Here&apos;s the honest breakdown.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── HubSpot Reporting ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">HubSpot: The Biggest Reporting Gap in CRM</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Reporting You Get</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Free Tools</td>
                  <td className="px-4 py-2.5 text-muted">$0</td>
                  <td className="px-4 py-2.5 text-muted">Pre-built dashboards only. Deal forecast, activity summary, sales performance. Cannot create custom reports. 1 dashboard.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Starter</td>
                  <td className="px-4 py-2.5 text-muted">$20/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Email health reporting, more pre-built reports, 10 dashboards. Still no custom report builder.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Professional</td>
                  <td className="px-4 py-2.5 text-muted">$890/mo flat</td>
                  <td className="px-4 py-2.5 text-muted">Custom report builder, cross-object reporting, revenue attribution, calculated properties, 25 dashboards.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Enterprise</td>
                  <td className="px-4 py-2.5 text-muted">$3,600/mo flat</td>
                  <td className="px-4 py-2.5 text-muted">Custom behavioral events, predictive lead scoring, multi-touch revenue attribution, 50 dashboards.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The HubSpot Reporting Cliff</p>
            <p className="text-sm text-muted">The jump from Starter ($20/seat/mo) to Professional ($890/mo flat) is a 4,350% increase. The main feature unlocked? Custom reports. If you need to build reports that combine deal data with contact properties or marketing touchpoints, you&apos;re locked into $890/mo. There is no middle tier.</p>
          </div>

          {/* ── Pipedrive Reporting ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Pipedrive: Reporting Grows Gradually</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Reporting You Get</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Lite</td>
                  <td className="px-4 py-2.5 text-muted">$14/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Deals dashboard, activity reports, pipeline overview. Basic but functional. No custom reports.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Growth</td>
                  <td className="px-4 py-2.5 text-muted">$39/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">All Lite reports plus email open/click stats, recurring revenue reports, more dashboard customization.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Premium</td>
                  <td className="px-4 py-2.5 text-muted">$49/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Advanced reporting: custom fields in reports, revenue forecasts, deal duration analysis, multiple dashboards.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Ultimate</td>
                  <td className="px-4 py-2.5 text-muted">$99/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Everything in Premium plus unlimited reports, security dashboards, implementation support.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Pipedrive&apos;s advantage: the jump from Lite ($14) to Premium ($49) is $35/seat &mdash; a 250% increase, but you get custom fields in reports and revenue forecasting. Compare that to HubSpot&apos;s $870/mo jump for custom reports. For a 5-person team, Pipedrive Premium costs $245/mo vs HubSpot Professional at $890/mo.
          </p>

          {/* ── Salesforce Reporting ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Salesforce: Reporting at Every Tier (But Complex)</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Reporting You Get</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Starter Suite</td>
                  <td className="px-4 py-2.5 text-muted">$25/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Pre-built reports and dashboards, basic customization. Limited to standard objects.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Pro Suite</td>
                  <td className="px-4 py-2.5 text-muted">$100/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Custom dashboards, forecasting, quotes, report builder with cross-object joins.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Enterprise</td>
                  <td className="px-4 py-2.5 text-muted">$175/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Advanced reporting, custom report types, collaborative forecasting, Territory Management.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Unlimited</td>
                  <td className="px-4 py-2.5 text-muted">$350/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Einstein Analytics (AI), unlimited custom report types, data model adjustments.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Salesforce gives you more reporting flexibility at lower tiers than HubSpot. Pro Suite ($100/seat) has custom report builder access that HubSpot locks behind $890/mo. But Salesforce reports are complex to build &mdash; many teams need a Salesforce admin ($60-120K/year salary) to create and maintain them.
          </p>

          {/* ── What Actually Matters ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Reports That Actually Matter</h2>
          <p className="text-muted mb-4">
            Most sales teams need exactly 5 reports. Everything else is nice-to-have:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Pipeline value by stage:</strong> Available on all CRM free/entry tiers.</li>
            <li><strong className="text-foreground">Sales rep activity (calls, emails, meetings):</strong> HubSpot Free, Pipedrive Lite ($14/seat), Salesforce Starter Suite ($25/seat).</li>
            <li><strong className="text-foreground">Deal velocity (time in each stage):</strong> Pipedrive Premium ($49/seat), HubSpot Professional ($890/mo), Salesforce Pro Suite ($100/seat).</li>
            <li><strong className="text-foreground">Revenue forecast:</strong> Pipedrive Premium ($49/seat), HubSpot Professional ($890/mo), Salesforce Pro Suite ($100/seat).</li>
            <li><strong className="text-foreground">Lead source attribution:</strong> HubSpot Professional ($890/mo) only with marketing contacts. Salesforce Pro Suite ($100/seat) with campaign tracking.</li>
          </ol>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Reporting Reality</p>
            <p className="text-sm text-muted">Reports #1 and #2 are free or near-free on every CRM. Reports #3 and #4 require mid-tier plans ($49&ndash;$100/seat). Report #5 (attribution) is the expensive one &mdash; $890/mo on HubSpot. If attribution is what you need, Salesforce Pro Suite ($100/seat) for a 5-person team is $500/mo vs $890/mo for HubSpot.</p>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Is HubSpot Free reporting good enough for a small team?</h3>
          <p className="text-muted mb-4">
            For teams under 5 people tracking basic deal flow, yes. You get pipeline dashboards, activity tracking, and deal forecasts. You cannot build custom reports or combine data across objects. Most teams outgrow Free reporting within 6-12 months.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Why is Pipedrive Premium ($49/seat) better value than HubSpot Professional ($890/mo) for reporting?</h3>
          <p className="text-muted mb-4">
            For a 5-person sales team: Pipedrive Premium is $245/mo total and includes custom field reporting, revenue forecasts, and deal duration analysis. HubSpot Professional is $890/mo flat plus $20/seat for each additional user. Pipedrive&apos;s reporting is less powerful overall, but the value-for-money on pure sales reporting is significantly better.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Can I export CRM data and build reports in a spreadsheet instead?</h3>
          <p className="text-muted mb-4">
            Yes, and many small teams do exactly this. All three CRMs offer CSV export on all tiers. If your reporting needs are simple and you&apos;re comfortable with Google Sheets or Excel, this avoids paying for premium reporting tiers. The tradeoff: no real-time dashboards and manual data refresh.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "hubspot-pricing-reality",
            "salesforce-hidden-costs",
            "when-pipedrive-needs-upgrade",
          ]}
          comparisons={["hubspot-crm-vs-salesforce"]}
        />
      </article>
    </>
  );
}
