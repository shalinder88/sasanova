import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "HubSpot Lock-In Analysis: What Exports, What Doesn't, and the Real Exit Cost",
  description:
    "Complete HubSpot vendor lock-in analysis. What data you can export, what you lose, exit timeline, and exact alternative pricing for Pipedrive, Salesforce, and ActiveCampaign.",
};

export default function HubSpotLockInAnalysisPage() {
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
              HubSpot Lock-In Analysis
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Vendor Lock-In Analysis
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            HubSpot Lock-In Analysis: What Exports, What Doesn&apos;t, and the Real Exit Cost
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            HubSpot&apos;s free tier gets you in. The ecosystem keeps you there. This guide
            maps exactly what data you can take with you, what you lose, how long migration
            takes, and what the alternatives cost.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* What Exports */}
          <section>
            <h2 className="text-xl font-bold mb-3">What You Can Export From HubSpot</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Data</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Export Method</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Contacts</td>
                    <td className="px-4 py-2.5 text-muted">CSV export, API</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Full export</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Companies</td>
                    <td className="px-4 py-2.5 text-muted">CSV export, API</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Full export</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Deals</td>
                    <td className="px-4 py-2.5 text-muted">CSV export, API</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Full export</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email history</td>
                    <td className="px-4 py-2.5 text-muted">API (limited), manual</td>
                    <td className="px-4 py-2.5 text-yellow-600 font-semibold">Partial</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Workflow automations</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Lost</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email templates</td>
                    <td className="px-4 py-2.5 text-muted">Manual copy only</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Rebuild needed</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Reports/dashboards</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Lost</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Landing pages</td>
                    <td className="px-4 py-2.5 text-muted">HTML copy (manual)</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Rebuild needed</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Custom properties</td>
                    <td className="px-4 py-2.5 text-muted">CSV includes data, not schema</td>
                    <td className="px-4 py-2.5 text-yellow-600 font-semibold">Manual recreation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* What Locks You In */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Real Lock-In Points</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Workflow Automations</p>
                <p className="text-sm text-muted">
                  HubSpot workflows cannot be exported. Every automation sequence, lead scoring
                  rule, and trigger must be manually rebuilt in the new platform. Complex setups
                  with 20+ workflows can take 40&ndash;80 hours to recreate.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">HubSpot Ecosystem Integrations</p>
                <p className="text-sm text-muted">
                  If you use HubSpot&apos;s native integrations (Gmail sync, Ads, social, etc.),
                  each one needs to be reconnected or replaced in the new system. The more
                  HubSpot Hubs you use, the deeper the lock-in.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">$3,000 Onboarding Sunk Cost</p>
                <p className="text-sm text-muted">
                  HubSpot Professional requires a mandatory $3,000 onboarding fee. This is a
                  sunk cost that psychologically anchors teams to the platform even when switching
                  would save money long-term.
                </p>
              </div>
            </div>
          </section>

          {/* Alternative Pricing */}
          <section>
            <h2 className="text-xl font-bold mb-3">Alternative Platform Pricing</h2>
            <p className="text-muted leading-relaxed mb-4">
              If you leave HubSpot, here are the exact costs for equivalent functionality:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Replacement</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Replaces</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Growth</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">$39/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">CRM + sales pipeline</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">$100/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Full CRM + enterprise features</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign Plus</td>
                    <td className="px-4 py-2.5 text-muted">Plus</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo (1K contacts)</td>
                    <td className="px-4 py-2.5 text-muted">Email + automation + CRM</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo Standard</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">Email marketing + automation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Exit Timeline */}
          <section>
            <h2 className="text-xl font-bold mb-3">Realistic Exit Timeline</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Task</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Time Estimate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Export contacts, companies, deals (CSV)</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Set up new CRM and import data</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;8 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Rebuild workflows and automations</td>
                    <td className="px-4 py-2.5 text-muted">20&ndash;80 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Rebuild email templates</td>
                    <td className="px-4 py-2.5 text-muted">8&ndash;20 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Reconnect integrations</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;16 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Team training and parallel run</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;4 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Total estimated timeline</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">4&ndash;8 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I export HubSpot workflows to another platform?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  No. HubSpot workflows have no export format. You must document each workflow
                  manually and rebuild it in the new platform. This is the single biggest lock-in
                  factor and the primary reason migration takes weeks, not days.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What happens to my HubSpot tracking code and forms?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Your HubSpot tracking code and embedded forms stop working when you cancel.
                  You&apos;ll need to replace them with new form tools (Tally, Typeform) and
                  analytics (Google Analytics, Plausible) before deactivating HubSpot.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is HubSpot Free worth using if I&apos;m worried about lock-in?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  HubSpot Free is low-risk because you haven&apos;t invested in workflows or
                  templates. Lock-in accelerates dramatically at the Starter and Professional tiers
                  where you build automations and integrations. Use Free cautiously and be ready
                  to switch before you invest heavily in workflows.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce"]}
            guides={["when-hubspot-stops-being-cheap", "who-should-not-use-hubspot", "crm-cost-over-3-years"]}
          />
        </div>
      </article>
    </>
  );
}
