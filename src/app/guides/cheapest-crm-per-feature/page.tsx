import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Cheapest CRM Per Feature: Which Gives Most for Least in 2026",
  description:
    "CRMs ranked by cost-per-feature. HubSpot Free gives the most at $0. Freshsales Growth at $11/seat gives AI scoring. Zoho CRM Standard at $20/seat gives the deepest feature set. Pipedrive Lite at $14/seat focuses on pipeline.",
};

export default function CheapestCrmPerFeature() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Cheapest CRM Per Feature</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Comparison Angle
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Cheapest CRM Per Feature: Which Gives Most for Least in 2026
          </h1>
          <p className="text-lg text-muted">
            Every CRM claims to be affordable. Here&apos;s the honest ranking: which CRM gives you the most features per dollar? We compare free tiers, starter plans, and growth plans across HubSpot, Pipedrive, Freshsales, Zoho CRM, Salesforce, Attio, and Close &mdash; all with exact pricing from our verified database.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">Free Tier Rankings</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Rank</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Free Features</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Limits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot CRM</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5 text-muted">Unlimited contacts, pipeline, email tracking, forms, live chat, 2,000 emails/mo</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot branding, basic reporting</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">2</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5 text-muted">Up to 3 users, contact management, built-in chat/email/phone</td>
                  <td className="px-4 py-2.5 text-muted">3 users, basic features only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">3</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zoho CRM</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5 text-muted">Up to 3 users, basic modules, lead/contact/deal management</td>
                  <td className="px-4 py-2.5 text-muted">3 users, 5,000 records</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">4</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Attio</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5 text-muted">Up to 3 seats, 50,000 records, core CRM, auto-enrichment</td>
                  <td className="px-4 py-2.5 text-muted">3 seats, no advanced reporting</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Verdict: Free Tier</p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">HubSpot CRM Free wins.</strong> Unlimited contacts, a full pipeline, email tracking, forms, and live chat at $0 with no user cap is unmatched. The catch: upgrading to Professional is $890/mo flat &mdash; a massive jump.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheapest Paid Plans Ranked</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Rank</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Standout Features at This Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                  <td className="px-4 py-2.5">Growth</td>
                  <td className="px-4 py-2.5">$11/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">AI contact scoring, visual pipeline, sequences, 2,000 bot sessions/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">2</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                  <td className="px-4 py-2.5">Lite</td>
                  <td className="px-4 py-2.5">$14/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">3,000 deals, 30 custom fields, visual pipeline</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">3</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Close</td>
                  <td className="px-4 py-2.5">Solo</td>
                  <td className="px-4 py-2.5">$19/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Basic CRM, built-in calling (1 user only)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">4</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zoho CRM</td>
                  <td className="px-4 py-2.5">Standard</td>
                  <td className="px-4 py-2.5">$20/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Scoring rules, workflows, custom dashboards, 100K records</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                  <td className="px-4 py-2.5">Starter</td>
                  <td className="px-4 py-2.5">$20/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Remove branding, 1,000 marketing contacts, email health reporting</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">6</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                  <td className="px-4 py-2.5">Starter Suite</td>
                  <td className="px-4 py-2.5">$25/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Lead/contact/opportunity management, email integration</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">7</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Attio</td>
                  <td className="px-4 py-2.5">Plus</td>
                  <td className="px-4 py-2.5">$34/seat/mo</td>
                  <td className="px-4 py-2.5 text-muted">Unlimited records, advanced reporting, automations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Verdict: Best Value Paid CRM</p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Freshsales Growth at $11/seat/mo wins on features-per-dollar.</strong> You get AI scoring, a visual pipeline, email sequences, and bot sessions for less than Pipedrive Lite&apos;s $14/seat. Zoho CRM Standard at $20/seat gives the deepest feature set (workflows, custom dashboards, 100K records) if you can live with its less polished interface.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cost at Scale: 10-User Team</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">10 Users / Month</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">10 Users / Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2.5 text-muted">Freshsales Growth</td><td className="px-4 py-2.5 text-muted">Growth</td><td className="px-4 py-2.5">$110/mo</td><td className="px-4 py-2.5">$1,320/yr</td></tr>
                <tr><td className="px-4 py-2.5 text-muted">Pipedrive Lite</td><td className="px-4 py-2.5 text-muted">Lite</td><td className="px-4 py-2.5">$140/mo</td><td className="px-4 py-2.5">$1,680/yr</td></tr>
                <tr><td className="px-4 py-2.5 text-muted">Zoho CRM Standard</td><td className="px-4 py-2.5 text-muted">Standard</td><td className="px-4 py-2.5">$200/mo</td><td className="px-4 py-2.5">$2,400/yr</td></tr>
                <tr><td className="px-4 py-2.5 text-muted">HubSpot Starter</td><td className="px-4 py-2.5 text-muted">Starter</td><td className="px-4 py-2.5">$200/mo</td><td className="px-4 py-2.5">$2,400/yr</td></tr>
                <tr><td className="px-4 py-2.5 text-muted">Salesforce Starter</td><td className="px-4 py-2.5 text-muted">Starter Suite</td><td className="px-4 py-2.5">$250/mo</td><td className="px-4 py-2.5">$3,000/yr</td></tr>
                <tr><td className="px-4 py-2.5 text-muted">Attio Plus</td><td className="px-4 py-2.5 text-muted">Plus</td><td className="px-4 py-2.5">$340/mo</td><td className="px-4 py-2.5">$4,080/yr</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Hidden Cost Factor</h2>
          <p className="text-muted mb-4">
            Per-seat pricing tells only part of the story. HubSpot Starter at $20/seat looks comparable to Zoho at $20/seat, but HubSpot&apos;s next tier (Professional) jumps to $890/mo flat while Zoho Professional is $35/seat. Salesforce Starter Suite at $25/seat jumps to Pro Suite at $100/seat. Always check the upgrade path, not just the entry price.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Which CRM is cheapest for a 5-person sales team?</h3>
          <p className="text-muted mb-4">
            Freshsales Growth at $11/seat/mo = $55/mo for 5 users with AI scoring and sequences. Next cheapest: Pipedrive Lite at $14/seat = $70/mo. HubSpot CRM Free is $0 but lacks automation features &mdash; Starter at $20/seat = $100/mo.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Should I just use HubSpot Free forever?</h3>
          <p className="text-muted mb-4">
            If you need basic contact management, pipeline tracking, and email tracking, HubSpot Free is genuinely enough. The problem comes when you need automations, custom reporting, or more than basic email marketing. At that point, Pipedrive Lite + ActiveCampaign Starter ($29/mo total) often beats HubSpot Starter ($20/seat).
          </p>
        </div>

        <RelatedLinks
          tools={["hubspot-crm", "freshsales", "pipedrive", "zoho-crm", "salesforce", "attio"]}
          comparisons={["hubspot-vs-salesforce", "freshsales-vs-pipedrive", "freshsales-vs-zoho"]}
          guides={[
            "best-free-crm-2026",
            "crm-pricing-cheat-sheet",
            "when-free-crm-costs-more",
          ]}
        />
      </article>
    </>
  );
}
