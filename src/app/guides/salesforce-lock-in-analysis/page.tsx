import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Salesforce Lock-In Analysis: AppExchange Dependencies, Custom Code, and Exit Timeline",
  description:
    "Complete Salesforce vendor lock-in analysis. AppExchange dependencies, Apex custom code, data export limitations, exit timeline, and exact alternative pricing.",
};

export default function SalesforceLockInAnalysisPage() {
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
              Salesforce Lock-In Analysis
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
            Salesforce Lock-In Analysis: AppExchange, Custom Code, and the Exit Timeline
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Salesforce is the most powerful CRM and the hardest to leave. Years of custom
            objects, Apex code, AppExchange apps, and Flows create deep technical debt.
            This guide quantifies exactly what locks you in and what leaving actually costs.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
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
            <h2 className="text-xl font-bold mb-3">What You Can Export From Salesforce</h2>
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
                    <td className="px-4 py-2.5 font-medium text-foreground">Standard objects (Leads, Contacts, Accounts, Opportunities)</td>
                    <td className="px-4 py-2.5 text-muted">Data Loader, CSV export, REST/SOAP API</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Full export</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Custom objects</td>
                    <td className="px-4 py-2.5 text-muted">Data Loader, API (data only)</td>
                    <td className="px-4 py-2.5 text-yellow-600 font-semibold">Data exports, schema doesn&apos;t</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Apex code</td>
                    <td className="px-4 py-2.5 text-muted">Manual download</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Salesforce-only language</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Flows and Process Builder</td>
                    <td className="px-4 py-2.5 text-muted">No usable export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Must rebuild</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Reports and dashboards</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Lost</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">AppExchange app data</td>
                    <td className="px-4 py-2.5 text-muted">Varies by app</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Often lost</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email templates</td>
                    <td className="px-4 py-2.5 text-muted">Manual copy</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Rebuild needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Lock-In Points */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Deep Lock-In Points</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Apex Custom Code</p>
                <p className="text-sm text-muted">
                  Apex is Salesforce&apos;s proprietary programming language. Code written in Apex
                  runs only on Salesforce. If you have custom triggers, classes, or batch jobs,
                  they must be completely rewritten in the new platform&apos;s language. A typical
                  mid-size deployment has 5,000&ndash;50,000 lines of Apex code.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">AppExchange Dependencies</p>
                <p className="text-sm text-muted">
                  The average Salesforce org uses 5&ndash;15 AppExchange apps. These apps store
                  data in Salesforce and rely on Salesforce APIs. When you leave, you lose access
                  to these apps and their data. Finding equivalents for each one adds weeks to
                  migration.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Custom Objects and Relationships</p>
                <p className="text-sm text-muted">
                  Salesforce&apos;s custom object model lets you create complex data structures
                  with relationships, validation rules, and triggers. Recreating this schema in a
                  simpler CRM means either losing functionality or building custom solutions.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Institutional Knowledge</p>
                <p className="text-sm text-muted">
                  Years of Salesforce admin training, custom field definitions, and team workflows
                  create institutional knowledge that&apos;s expensive to rebuild. Most companies
                  need Salesforce-certified consultants ($150&ndash;$300/hr) just to understand
                  their own configuration before migrating.
                </p>
              </div>
            </div>
          </section>

          {/* Alternative Pricing */}
          <section>
            <h2 className="text-xl font-bold mb-3">Alternative Platform Pricing</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Alternative</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Teams wanting simpler CRM + marketing</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Growth</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">$39/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Sales-focused teams</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Premium</td>
                    <td className="px-4 py-2.5 text-muted">Premium</td>
                    <td className="px-4 py-2.5 text-muted">$49/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Teams needing advanced reporting</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Cost savings at 15 seats</p>
              <p className="text-sm text-muted">
                Salesforce Pro Suite: 15 &times; $100 = $1,500/mo ($18,000/yr).
                Pipedrive Growth: 15 &times; $39 = $585/mo ($7,020/yr).
                Annual savings: $10,980/yr &mdash; but factor in $10,000&ndash;$50,000+ in
                one-time migration costs depending on customization depth.
              </p>
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
                    <th className="px-4 py-2.5 font-semibold text-foreground">Simple Org</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Complex Org</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Audit current configuration</td>
                    <td className="px-4 py-2.5 text-muted">1 week</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;4 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Export and clean data</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 days</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Set up new CRM</td>
                    <td className="px-4 py-2.5 text-muted">1 week</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;4 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Rebuild automations and custom logic</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 weeks</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;12 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Replace AppExchange apps</td>
                    <td className="px-4 py-2.5 text-muted">1 week</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;6 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Team training and parallel run</td>
                    <td className="px-4 py-2.5 text-muted">2 weeks</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;8 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Total timeline</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">6&ndash;8 weeks</td>
                    <td className="px-4 py-2.5 font-medium text-red-500">3&ndash;6 months</td>
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
                  Can I use Salesforce Data Loader to export everything?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Data Loader exports record data (contacts, accounts, opportunities, custom object
                  records) effectively. But it cannot export Apex code, Flows, Process Builder
                  automations, reports, or dashboards. Data is the easy part; logic is the hard part.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  How much does a Salesforce migration consultant cost?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Salesforce-certified consultants charge $150&ndash;$300/hr. A simple migration
                  might cost $5,000&ndash;$15,000. A complex org with custom Apex, multiple
                  AppExchange apps, and deep integrations can cost $50,000&ndash;$100,000+ to
                  migrate properly.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is it ever worth staying on Salesforce despite the cost?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes, if your migration cost exceeds 2&ndash;3 years of savings from a cheaper
                  platform. A complex org spending $50,000 to migrate to save $11,000/yr in
                  licensing takes 4.5 years to break even. In that case, optimizing your Salesforce
                  usage (downgrading seats, removing unused apps) may be smarter.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["salesforce", "hubspot-crm", "pipedrive"]}
            guides={["who-should-not-use-salesforce", "migrate-salesforce-to-hubspot", "crm-cost-over-3-years"]}
          />
        </div>
      </article>
    </>
  );
}
