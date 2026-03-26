import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM Data Migration Checklist: What to Clean Before You Move",
  description:
    "Pre-migration data audit, field mapping between HubSpot, Pipedrive, Salesforce, and Zoho, what transfers cleanly vs what breaks, timeline estimates by CRM size, and the 3 things everyone forgets.",
};

export default function CrmDataMigrationChecklist() {
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
              CRM Data Migration Checklist
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              CRM Migration
            </span>
            <span className="text-[11px] text-muted">19 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM Data Migration Checklist: What to Clean Before You Move
          </h1>
          <p className="text-lg text-muted">
            Moving CRMs is 20% data transfer and 80% data cleanup. Most teams spend weeks configuring their new CRM, import their data, and immediately discover that 30% of their contacts are duplicates, 15% have no email address, and half the custom fields mapped to the wrong place. This checklist covers everything you should clean before you export a single record.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Pre-Migration Data Audit ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Pre-Migration Data Audit</h2>
          <p className="text-muted mb-4">
            Before you touch the new CRM, audit your existing data. Every hour spent cleaning data before migration saves 3 hours of cleanup after migration. The audit has four parts.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">1. Duplicate Detection</h3>
          <p className="text-muted mb-4">
            CRMs accumulate duplicates over time. Different reps create contacts for the same person. Imports create new records instead of updating existing ones. Web forms create new contacts when someone uses a different email address. Before migrating, run a duplicate check.
          </p>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">How to find duplicates</h3>
              <p className="text-sm text-muted"><strong className="text-foreground">HubSpot:</strong> Built-in duplicate management tool (Settings &rarr; Data Management &rarr; Duplicates). Free on all plans. Identifies likely duplicates by name and email. Merge with one click. <strong className="text-foreground">Pipedrive:</strong> Merge Duplicates tool (Settings &rarr; General &rarr; Merge Duplicates). Scans contacts and organizations for exact and fuzzy matches. <strong className="text-foreground">Salesforce:</strong> Duplicate Rules + third-party tools like Cloudingo ($10/mo) or DemandTools. Native duplicate management requires Enterprise edition. <strong className="text-foreground">Zoho:</strong> Find and Merge Duplicates feature (Setup &rarr; Data Administration). Available on all paid plans.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Expected duplicate rate</h3>
              <p className="text-sm text-muted">Most CRMs have 10&ndash;30% duplicate records after 2+ years of use. A 10,000-contact CRM typically contains 1,000&ndash;3,000 duplicates. If you have never run a deduplication process, expect the higher end. Merge duplicates before exporting &mdash; importing duplicates into your new CRM doubles the cleanup work.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-3">2. Incomplete Records</h3>
          <p className="text-muted mb-4">
            Export your contacts and check for missing critical fields. At minimum, every contact should have: a name, an email address, a company (for B2B), and a source/origin field. Contacts missing all of these are dead weight.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Field</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">If missing, what to do</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Typical missing rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email address</td>
                  <td className="px-4 py-2.5">Decide if the contact is worth keeping. No email = no outreach capability</td>
                  <td className="px-4 py-2.5">5&ndash;15%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Company name</td>
                  <td className="px-4 py-2.5">Enrich from email domain or LinkedIn. Or mark as &ldquo;Unknown&rdquo;</td>
                  <td className="px-4 py-2.5">10&ndash;25%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Phone number</td>
                  <td className="px-4 py-2.5">Not critical unless your sales process is phone-heavy</td>
                  <td className="px-4 py-2.5">30&ndash;50%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Deal stage / lifecycle</td>
                  <td className="px-4 py-2.5">Map to your new CRM&apos;s stages before import. Don&apos;t import unmapped stages</td>
                  <td className="px-4 py-2.5">10&ndash;20% (for unqualified leads)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Last activity date</td>
                  <td className="px-4 py-2.5">Contacts with no activity in 12+ months should be archived, not migrated</td>
                  <td className="px-4 py-2.5">N/A (check age)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mt-8 mb-3">3. Dead Contacts</h3>
          <p className="text-muted mb-4">
            Contacts that should not be migrated: bounced email addresses, contacts who unsubscribed, contacts with no activity in 12+ months (unless they represent active accounts), and known competitors or spam entries. In most CRMs, 15&ndash;25% of records fall into this category.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">4. Custom Field Audit</h3>
          <p className="text-muted mb-4">
            Export a list of all custom fields in your current CRM. For each field, ask: is this field used in more than 20% of records? Is anyone using this data for decisions? If the answer to both is no, don&apos;t migrate it. Most CRMs accumulate custom fields that someone created for a one-time project and never used again. A typical 3-year-old CRM has 40&ndash;80 custom fields. You probably need 10&ndash;15.
          </p>

          {/* ── Field Mapping ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Field Mapping Between Platforms</h2>
          <p className="text-muted mb-4">
            Every CRM uses different names for the same concepts. &ldquo;Contacts&rdquo; in HubSpot are &ldquo;People&rdquo; in Pipedrive. &ldquo;Companies&rdquo; in HubSpot are &ldquo;Organizations&rdquo; in Pipedrive and &ldquo;Accounts&rdquo; in Salesforce. Mapping these correctly before import prevents data from landing in the wrong place.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Concept</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Salesforce</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Zoho CRM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Person</td>
                  <td className="px-4 py-2.5">Contact</td>
                  <td className="px-4 py-2.5">Person</td>
                  <td className="px-4 py-2.5">Contact (or Lead)</td>
                  <td className="px-4 py-2.5">Contact (or Lead)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Company</td>
                  <td className="px-4 py-2.5">Company</td>
                  <td className="px-4 py-2.5">Organization</td>
                  <td className="px-4 py-2.5">Account</td>
                  <td className="px-4 py-2.5">Account</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Opportunity</td>
                  <td className="px-4 py-2.5">Deal</td>
                  <td className="px-4 py-2.5">Deal</td>
                  <td className="px-4 py-2.5">Opportunity</td>
                  <td className="px-4 py-2.5">Deal</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Task/Action</td>
                  <td className="px-4 py-2.5">Task</td>
                  <td className="px-4 py-2.5">Activity</td>
                  <td className="px-4 py-2.5">Task / Event</td>
                  <td className="px-4 py-2.5">Task / Event</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Note</td>
                  <td className="px-4 py-2.5">Note (on timeline)</td>
                  <td className="px-4 py-2.5">Note</td>
                  <td className="px-4 py-2.5">Note (on Chatter)</td>
                  <td className="px-4 py-2.5">Note</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipeline stage</td>
                  <td className="px-4 py-2.5">Deal Stage</td>
                  <td className="px-4 py-2.5">Pipeline Stage</td>
                  <td className="px-4 py-2.5">Opportunity Stage</td>
                  <td className="px-4 py-2.5">Stage</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lead status</td>
                  <td className="px-4 py-2.5">Lifecycle Stage</td>
                  <td className="px-4 py-2.5">Lead Label</td>
                  <td className="px-4 py-2.5">Lead Status</td>
                  <td className="px-4 py-2.5">Lead Status</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The Salesforce Lead vs Contact distinction:</strong> Salesforce separates Leads (not yet qualified) from Contacts (qualified, associated with an Account). HubSpot, Pipedrive, and Zoho treat all people as Contacts. When migrating from Salesforce, you need to decide whether to convert all Leads to Contacts in the destination CRM or maintain a &ldquo;lead&rdquo; status field. When migrating to Salesforce, you need to decide which existing contacts become Leads and which become Contacts.
          </p>

          {/* ── What Transfers vs What Breaks ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What Transfers Cleanly vs What Breaks</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Data type</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Transfer difficulty</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Contact records (name, email, phone)</td>
                  <td className="px-4 py-2.5 text-green-400">Easy &mdash; CSV export/import</td>
                  <td className="px-4 py-2.5">Standard fields map cleanly across all CRMs</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Company/organization records</td>
                  <td className="px-4 py-2.5 text-green-400">Easy &mdash; CSV export/import</td>
                  <td className="px-4 py-2.5">Map to the correct object name in destination</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Deal/opportunity data</td>
                  <td className="px-4 py-2.5 text-yellow-400">Moderate &mdash; stage mapping required</td>
                  <td className="px-4 py-2.5">Pipeline stages need manual mapping. Amount and close dates transfer cleanly</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Custom fields</td>
                  <td className="px-4 py-2.5 text-yellow-400">Moderate &mdash; create fields first, then map</td>
                  <td className="px-4 py-2.5">Create custom fields in destination before import. Data types must match</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Notes and activity logs</td>
                  <td className="px-4 py-2.5 text-yellow-400">Moderate to Hard</td>
                  <td className="px-4 py-2.5">Notes export as text but lose formatting. Activity timestamps may shift. Some platforms don&apos;t support bulk note import</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email history</td>
                  <td className="px-4 py-2.5 text-red-400">Hard &mdash; rarely transfers</td>
                  <td className="px-4 py-2.5">Logged emails are typically platform-specific. Export as CSV reference but don&apos;t expect thread reconstruction</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automations/workflows</td>
                  <td className="px-4 py-2.5 text-red-400">Does not transfer &mdash; rebuild from scratch</td>
                  <td className="px-4 py-2.5">No CRM supports automation import. Document all workflows before migration</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email templates</td>
                  <td className="px-4 py-2.5 text-red-400">Does not transfer &mdash; rebuild from scratch</td>
                  <td className="px-4 py-2.5">Copy template content manually. Formatting will need adjustment for the new platform&apos;s template editor</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">File attachments</td>
                  <td className="px-4 py-2.5 text-red-400">Hard &mdash; often lost</td>
                  <td className="px-4 py-2.5">Files attached to records don&apos;t export via CSV. Use API for bulk file migration or download manually</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Reporting/dashboards</td>
                  <td className="px-4 py-2.5 text-red-400">Does not transfer &mdash; rebuild from scratch</td>
                  <td className="px-4 py-2.5">Screenshot your existing dashboards as reference. No cross-platform report migration exists</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Timeline by CRM Size ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Migration Timeline by CRM Size</h2>
          <p className="text-muted mb-4">
            These timelines include data cleanup, field mapping, test imports, and post-migration validation. They do not include the time to set up automations, templates, and dashboards in the new CRM (add 1&ndash;4 weeks for that).
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">CRM size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Data cleanup</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Field mapping + test import</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Full migration + validation</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Total time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">100 contacts</td>
                  <td className="px-4 py-2.5">1&ndash;2 hours</td>
                  <td className="px-4 py-2.5">1 hour</td>
                  <td className="px-4 py-2.5">1 hour</td>
                  <td className="px-4 py-2.5">3&ndash;4 hours (1 day)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1,000 contacts</td>
                  <td className="px-4 py-2.5">4&ndash;8 hours</td>
                  <td className="px-4 py-2.5">2&ndash;4 hours</td>
                  <td className="px-4 py-2.5">2&ndash;4 hours</td>
                  <td className="px-4 py-2.5">1&ndash;2 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000 contacts</td>
                  <td className="px-4 py-2.5">2&ndash;3 days</td>
                  <td className="px-4 py-2.5">1&ndash;2 days</td>
                  <td className="px-4 py-2.5">1&ndash;2 days</td>
                  <td className="px-4 py-2.5">1&ndash;2 weeks</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50,000 contacts</td>
                  <td className="px-4 py-2.5">1&ndash;2 weeks</td>
                  <td className="px-4 py-2.5">3&ndash;5 days</td>
                  <td className="px-4 py-2.5">3&ndash;5 days</td>
                  <td className="px-4 py-2.5">3&ndash;4 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The 50,000+ contact migration:</strong> At this scale, CSV import often hits platform limits (Mailchimp caps imports at 500,000 rows, Pipedrive at 50,000 per file, HubSpot at 1,000,000). Use the CRM&apos;s API or a migration tool like Import2 or Trujay for large datasets. API-based migrations are more reliable for large volumes but require technical knowledge or a consultant ($1,000&ndash;$5,000 for a migration specialist).
          </p>

          {/* ── Post-Migration Validation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Post-Migration Validation Steps</h2>
          <p className="text-muted mb-4">
            After importing data into your new CRM, validate before your team starts using it. A flawed migration that goes undetected for a week creates problems that take months to untangle.
          </p>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Record count verification</h3>
              <p className="text-sm text-muted">Compare total contacts, companies, and deals in the new CRM against your pre-migration count (after cleanup). If the numbers don&apos;t match within 1&ndash;2%, investigate which records were dropped. Common causes: duplicate email addresses merged during import, contacts without email addresses skipped, or records exceeding field length limits.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Spot-check 20 records</h3>
              <p className="text-sm text-muted">Pick 20 contacts at random and verify: correct name, email, company association, deal stage, custom field values, and notes. This catches field mapping errors that bulk count verification misses. If 2+ of 20 records have issues, your field mapping needs review before the team starts working in the new CRM.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Association verification</h3>
              <p className="text-sm text-muted">Check that contacts are associated with the correct companies and deals. This is the most common migration failure &mdash; contacts import correctly but their company or deal associations break. Most CSV imports don&apos;t handle multi-object associations well. You may need to import contacts, companies, and deals separately and then link them via a matching field (usually email or company ID).</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Pipeline stage validation</h3>
              <p className="text-sm text-muted">Verify that deals landed in the correct pipeline stages. If your old CRM had stages named &ldquo;Qualified Lead &rarr; Demo Scheduled &rarr; Proposal &rarr; Negotiation &rarr; Closed Won&rdquo; and your new CRM uses &ldquo;New &rarr; Discovery &rarr; Proposal &rarr; Closing &rarr; Won&rdquo;, confirm the stage mapping worked correctly. Mismatched stages make your pipeline report meaningless on day one.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Integration reconnection</h3>
              <p className="text-sm text-muted">Reconnect email sync (Gmail/Outlook), calendar sync, form integrations, and any automation tools (Zapier, Make). Test each integration with a dummy record before going live. Reconnecting integrations typically takes 1&ndash;2 hours.</p>
            </div>
          </div>

          {/* ── The 3 Things Everyone Forgets ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The 3 Things Everyone Forgets</h2>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">1. Automations Don&apos;t Transfer</h3>
              <p className="text-sm text-muted">Every workflow, automation, and trigger in your old CRM needs to be rebuilt from scratch in the new CRM. There is no export/import for automations on any platform. Before migrating, document every active automation: what triggers it, what it does, which records it affects. A typical CRM has 5&ndash;15 active automations. Rebuilding them takes 1&ndash;4 hours each depending on complexity. Budget 1&ndash;3 days for automation reconstruction.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">2. Email Templates Need Rebuilding</h3>
              <p className="text-sm text-muted">Sales email templates, sequence templates, and marketing email templates don&apos;t transfer between CRMs. You can copy the text content, but the formatting, merge fields (&#123;&#123;first_name&#125;&#125;, &#123;&#123;company&#125;&#125;), and template structure need rebuilding in the new platform&apos;s template editor. If your team uses 10&ndash;20 email templates daily, budget half a day to recreate them. Missing this means your team has no templates on day one, which slows everything down.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">3. Custom Properties Need Pre-Creation</h3>
              <p className="text-sm text-muted">CSV imports into a new CRM only map to fields that already exist. If you have 15 custom fields in your old CRM, you need to create those 15 fields in the new CRM before importing. The field types must match: a dropdown field in the old CRM should be a dropdown in the new CRM with the same options, or data won&apos;t import correctly. A text field importing into a number field will fail silently or create garbage data. Budget 30&ndash;60 minutes to set up custom fields before your first import.</p>
            </div>
          </div>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>
              <strong className="text-foreground">Migrating all data without cleaning first.</strong> Importing 50,000 contacts including 15,000 duplicates and 10,000 dead leads into your new CRM defeats the purpose of switching. Clean before you move. The new CRM is a fresh start &mdash; treat it like one.
            </li>
            <li>
              <strong className="text-foreground">Not doing a test import.</strong> Import 50&ndash;100 records first. Verify field mapping, associations, and data integrity. Fix issues on the small batch before committing the full dataset. Every CRM handles CSV import slightly differently (date formats, phone number formatting, multi-select fields).
            </li>
            <li>
              <strong className="text-foreground">Running both CRMs simultaneously for too long.</strong> A 1&ndash;2 week overlap where both CRMs are active is reasonable for validation. More than 2 weeks and your team starts entering data in both systems, which creates sync nightmares. Set a hard cutoff date and enforce it.
            </li>
            <li>
              <strong className="text-foreground">Forgetting to cancel the old CRM subscription.</strong> After migration and validation, cancel the old CRM within 30 days. Many teams pay for both CRMs for months because no one remembers to cancel. Put a calendar reminder for 30 days post-migration to cancel the old subscription. Export a final backup first.
            </li>
            <li>
              <strong className="text-foreground">Not training the team on the new CRM before the switch.</strong> A CRM migration is also a workflow change. Schedule 1&ndash;2 hours of team training before go-live. Focus on the differences from the old CRM, not a full product tour. Your team knows how CRMs work &mdash; they need to know where things are in the new one.
            </li>
          </ul>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long does a CRM migration take?</h3>
                <p className="text-muted">For a small CRM (under 1,000 contacts), 1&ndash;2 days including cleanup. For a mid-size CRM (1,000&ndash;10,000 contacts), 1&ndash;2 weeks. For a large CRM (10,000&ndash;50,000 contacts), 3&ndash;4 weeks. Add 1&ndash;4 weeks for automation rebuilding, template recreation, and team training. The data transfer itself takes hours. Everything around it takes weeks.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate automations between CRMs?</h3>
                <p className="text-muted">No. No CRM supports automation export/import. Document your automations in a spreadsheet (trigger, conditions, actions, affected records) before migrating, then rebuild them in the new platform. This is the single most underestimated part of CRM migration. Teams budget for data transfer and forget about the 20+ hours needed to reconstruct automations.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use a migration tool or do it manually?</h3>
                <p className="text-muted">For under 5,000 contacts with standard fields, manual CSV export/import works fine. For 5,000&ndash;50,000 contacts with complex associations (deals linked to contacts linked to companies), consider a migration tool like Import2 ($50&ndash;$300) or Trujay. For 50,000+ contacts or enterprise CRMs with complex custom objects, hire a migration consultant ($2,000&ndash;$10,000).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Will I lose my email history when migrating?</h3>
                <p className="text-muted">Logged email conversations in your old CRM generally don&apos;t transfer to the new CRM. You can export them as CSV for reference. Once you reconnect your email (Gmail/Outlook) to the new CRM, new emails sync automatically. Old email threads stay in your email client &mdash; they&apos;re not deleted, just not visible in the new CRM&apos;s activity timeline.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s the biggest risk in CRM migration?</h3>
                <p className="text-muted">Broken associations. Contacts import correctly but lose their connection to companies, deals, and activities. This makes your pipeline report inaccurate and your team can&apos;t see deal context. Validate associations for at least 20 records after import. If associations are broken, you&apos;ll need to re-link them using a shared identifier (email address or company ID) via the CRM&apos;s import tool or API.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce", "zoho-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive", "salesforce-vs-hubspot-crm", "pipedrive-vs-zoho-crm"]}
            guides={[
              "migrate-salesforce-to-hubspot",
              "migrate-spreadsheet-to-crm",
              "crm-integrations-that-matter",
              "crm-annual-cost-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
