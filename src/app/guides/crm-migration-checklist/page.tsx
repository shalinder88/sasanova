import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM Migration Checklist: 15 Steps to Switch Without Losing Data",
  description:
    "A 15-step CRM migration checklist covering pre-migration audit, data export, field mapping, import, testing, and go-live. Tool-specific notes for HubSpot, Pipedrive, and Salesforce.",
};

export default function CrmMigrationChecklistPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">CRM Migration Checklist</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Checklist
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM Migration Checklist: 15 Steps to Switch Without Losing Data
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Switching CRMs is one of the most stressful software migrations. Contacts, deals,
            activities, automations, and integrations all need to transfer cleanly. This 15-step
            checklist walks you through the process from pre-migration audit to go-live, with
            tool-specific notes for HubSpot, Pipedrive, and Salesforce.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Before You Start: Cost of Getting It Wrong</h2>
            <p className="text-muted leading-relaxed mb-4">
              A botched CRM migration costs more than the subscription difference. Lost deal
              history, broken automations, and confused sales reps can cost weeks of productivity.
              Salesforce to HubSpot migrations typically take 4&ndash;8 weeks. HubSpot to
              Pipedrive is 2&ndash;4 weeks. Plan accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Phase 1: Pre-Migration Audit (Steps 1&ndash;5)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Document everything in your current CRM.</p>
                  <p className="text-muted text-sm mt-1">Custom fields, deal stages, pipelines, automations, email templates, reports, and integrations. HubSpot exports contacts/deals as CSV but workflows don&apos;t export. Salesforce custom objects require Data Loader. Pipedrive exports everything via CSV.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Clean your data before export.</p>
                  <p className="text-muted text-sm mt-1">Remove duplicates, merge incomplete records, archive stale contacts. Migrating dirty data to a new CRM creates the same problems at a higher price. A clean Pipedrive Lite ($14/seat/month) dataset beats a messy Salesforce Enterprise ($175/seat/month) one.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">3.</span>
                <div>
                  <p className="text-foreground font-medium">Map fields between old and new CRM.</p>
                  <p className="text-muted text-sm mt-1">Create a spreadsheet: old field name, new field name, data type, required/optional. HubSpot has 100+ default properties. Pipedrive has fewer but more flexible custom fields. Salesforce requires custom object mapping for complex setups.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">4.</span>
                <div>
                  <p className="text-foreground font-medium">Confirm your new CRM&apos;s tier handles your data volume.</p>
                  <p className="text-muted text-sm mt-1">HubSpot Free: unlimited contacts. Pipedrive Lite: 3,000 open deals. Freshsales Growth ($11/seat/month): unlimited records. Zoho Free: 5,000 records max. Make sure your plan can hold everything before you start.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">5.</span>
                <div>
                  <p className="text-foreground font-medium">Identify integrations that need reconnecting.</p>
                  <p className="text-muted text-sm mt-1">Every Zapier Zap ($29.99/month for Professional) or Make scenario ($10.59/month for Core) pointing to your old CRM needs updating. Email sync (Gmail, Outlook), calendar, and form integrations all need re-mapping.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Phase 2: Export and Import (Steps 6&ndash;10)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">6.</span>
                <div>
                  <p className="text-foreground font-medium">Export contacts, companies, and deals as CSV.</p>
                  <p className="text-muted text-sm mt-1"><strong>HubSpot:</strong> Export from Contacts &gt; Import &amp; Export. Includes all properties. <strong>Pipedrive:</strong> Export from list views. Includes custom fields. <strong>Salesforce:</strong> Use Data Loader for large volumes or Reports export for smaller sets.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">7.</span>
                <div>
                  <p className="text-foreground font-medium">Export activity history and notes.</p>
                  <p className="text-muted text-sm mt-1">This is where migrations break. HubSpot exports activity logs via API only. Pipedrive includes notes in CSV exports. Salesforce requires Data Loader or connected app for task/event history. Budget 2&ndash;4 hours for this step.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">8.</span>
                <div>
                  <p className="text-foreground font-medium">Transform data to match new CRM format.</p>
                  <p className="text-muted text-sm mt-1">Deal stages won&apos;t match 1:1. Date formats differ. Multi-select fields may need splitting. Use a spreadsheet or import tool to reformat before importing.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">9.</span>
                <div>
                  <p className="text-foreground font-medium">Run a test import with 50&ndash;100 records first.</p>
                  <p className="text-muted text-sm mt-1">Never import your entire database on the first try. Import a small batch, verify field mapping, check for data loss, and confirm relationships (contacts linked to correct deals/companies) before the full import.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">10.</span>
                <div>
                  <p className="text-foreground font-medium">Import the full dataset.</p>
                  <p className="text-muted text-sm mt-1">Import in order: Companies first, then Contacts, then Deals. This preserves relationships. HubSpot supports association imports. Pipedrive links via company name matching. Salesforce uses external IDs for relationships.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Phase 3: Testing and Go-Live (Steps 11&ndash;15)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">11.</span>
                <div>
                  <p className="text-foreground font-medium">Verify record counts match.</p>
                  <p className="text-muted text-sm mt-1">Compare total contacts, companies, and deals between old and new CRM. Any discrepancy means records were dropped during import. Check import logs for errors.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">12.</span>
                <div>
                  <p className="text-foreground font-medium">Rebuild automations in the new CRM.</p>
                  <p className="text-muted text-sm mt-1">Automations never migrate. HubSpot workflows must be rebuilt from scratch in Pipedrive or vice versa. Prioritize revenue-impacting automations first (deal stage changes, follow-up sequences). Budget 1&ndash;2 hours per complex workflow.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">13.</span>
                <div>
                  <p className="text-foreground font-medium">Reconnect integrations.</p>
                  <p className="text-muted text-sm mt-1">Update every Zapier Zap, Make scenario, email sync, calendar connection, and form integration to point to the new CRM. Test each integration with a real record.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">14.</span>
                <div>
                  <p className="text-foreground font-medium">Run both CRMs in parallel for 1&ndash;2 weeks.</p>
                  <p className="text-muted text-sm mt-1">Don&apos;t cancel the old CRM immediately. Run both in parallel to catch missing data, broken workflows, and team adoption issues. This costs an extra billing cycle but prevents disasters.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">15.</span>
                <div>
                  <p className="text-foreground font-medium">Train the team and officially cut over.</p>
                  <p className="text-muted text-sm mt-1">Record a 15-minute walkthrough of the new CRM setup. Share it with the team. Set a hard cutover date. After cutover, make the old CRM read-only for 30 days as a safety net, then cancel.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Tool-Specific Migration Notes</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Starting Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Export Quality</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Migration Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Free / Starter $20/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Good (CSV). Workflows don&apos;t export.</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;4 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Lite $14/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Good (CSV with custom fields)</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;3 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Starter Suite $25/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Complex (Data Loader required)</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;8 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                    <td className="px-4 py-2.5 text-muted">Free / Growth $11/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Good (CSV export)</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zoho CRM</td>
                    <td className="px-4 py-2.5 text-muted">Free / Standard $20/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Good (CSV/XLS, REST API)</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;4 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate CRM automations?</h3>
                <p className="text-muted">No. Automations/workflows must be manually rebuilt in every CRM. HubSpot workflows, Pipedrive automations, and Salesforce Flows are all proprietary. Budget 1&ndash;2 hours per complex automation.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Will I lose email conversation history?</h3>
                <p className="text-muted">Usually yes for in-CRM email logs. HubSpot email tracking history stays in HubSpot. Pipedrive email threads stay in Pipedrive. Your actual email inbox (Gmail/Outlook) retains everything regardless of CRM changes.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does a professional CRM migration cost?</h3>
                <p className="text-muted">Third-party migration services charge $2,000&ndash;$15,000 for Salesforce migrations and $500&ndash;$3,000 for simpler HubSpot/Pipedrive migrations. For small teams under 10 users, DIY is feasible with this checklist.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce", "freshsales", "zoho-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive", "hubspot-crm-vs-salesforce", "pipedrive-vs-freshsales"]}
            guides={[
              "crm-data-migration-checklist",
              "migrate-salesforce-to-hubspot",
              "switch-from-hubspot-to-pipedrive",
              "software-switching-cost-guide",
            ]}
          />
        </div>
      </article>
    </>
  );
}
