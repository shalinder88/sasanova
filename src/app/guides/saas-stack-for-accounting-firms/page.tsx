import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Stack for Accounting Firms: CRM, Client Portal, Docs, and Communication",
  description:
    "The complete software stack for small accounting firms. HubSpot CRM Free for client management, Notion Free for docs, Slack Free for communication, and QuickBooks Online starting at $38/mo.",
};

export default function SaasStackForAccountingFirms() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Stack for Accounting Firms</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Industry Stack
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Stack for Accounting Firms: CRM, Client Portal, Docs, and Communication
          </h1>
          <p className="text-lg text-muted">
            Accounting firms juggle client relationships, document management, deadlines, and team communication. Here&apos;s the exact SaaS stack for small practices &mdash; from a $0 starter setup to a professional stack under $200/month with verified pricing from every tool.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">Recommended Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Need</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">Client CRM</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot CRM</td>
                  <td className="px-4 py-2.5">Free Tools</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Accounting Software</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">QuickBooks Online</td>
                  <td className="px-4 py-2.5">Simple Start</td>
                  <td className="px-4 py-2.5">$38/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Docs &amp; Knowledge Base</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Scheduling</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Calendly</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Communication</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Slack</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Email Marketing</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-semibold text-foreground" colSpan={3}>Total (solo practitioner)</td>
                  <td className="px-4 py-2.5 font-semibold text-foreground">$38/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Why These Tools</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">HubSpot CRM Free ($0) for Client Management</h3>
          <p className="text-muted mb-4">
            HubSpot CRM Free gives you unlimited contacts, a deal pipeline, email tracking, and meeting scheduling. For accounting firms, the pipeline tracks clients through: prospect &rarr; onboarding &rarr; active client &rarr; tax season &rarr; year-round advisory. The free tier includes 2,000 email sends/month. Alternative: Zoho CRM Free ($0) for up to 3 users with 5,000 records, or Freshsales Free ($0) for up to 3 users with built-in phone.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">QuickBooks Online Simple Start ($38/mo) for Firm Accounting</h3>
          <p className="text-muted mb-4">
            Most accountants already know QuickBooks. Simple Start covers 1 user, basic invoicing, expense tracking, and mileage tracking. Essentials at $65/mo adds 3 users and bill management. For international firms, Xero Starter at $29/mo offers better multi-currency support. For the tightest budget, Wave Starter ($0) handles basic invoicing and accounting for free.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Notion Free ($0) for Internal Knowledge</h3>
          <p className="text-muted mb-4">
            Build your firm&apos;s procedures, tax checklists, client onboarding templates, and engagement letter templates in Notion. The database feature works well for tracking deadlines by client. Free gives unlimited pages with 7-day history.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Brevo Free ($0) for Client Communication</h3>
          <p className="text-muted mb-4">
            Send tax deadline reminders, quarterly newsletters, and document request emails. Brevo Free supports up to 100,000 contacts and 300 emails/day. That&apos;s more than enough for most accounting practices. Starter at $9/mo removes the daily send limit.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Budget Tiers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stack Changes</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$0 Starter</td>
                  <td className="px-4 py-2.5 text-muted">All free tiers + Wave instead of QuickBooks</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Solo Practitioner</td>
                  <td className="px-4 py-2.5 text-muted">QuickBooks Simple Start + all free tools</td>
                  <td className="px-4 py-2.5">$38/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Small Firm (3&ndash;5 people)</td>
                  <td className="px-4 py-2.5 text-muted">QuickBooks Essentials ($65) + Pipedrive Lite ($42 for 3 seats) + Calendly Standard ($36) + Notion Free + Slack Free</td>
                  <td className="px-4 py-2.5">$143/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Tax Season Workflow</h2>
          <p className="text-muted mb-4">
            During tax season, accounting firms handle hundreds of client interactions. Set up a Zapier automation (Free: 100 tasks/mo) or Make automation (Free: 1,000 ops/mo) to connect these tools: new Calendly booking &rarr; create HubSpot contact &rarr; send Brevo welcome email with document checklist. This saves hours of manual data entry during your busiest months.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Should I use Xero instead of QuickBooks?</h3>
          <p className="text-muted mb-4">
            If your firm handles international clients, yes. Xero Standard at $46/mo includes unlimited invoices, unlimited users, and multi-currency. QuickBooks Simple Start limits you to 1 user and charges extra for multi-currency. In the US, QuickBooks has better accountant familiarity and tax integration.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What about a client portal for document sharing?</h3>
          <p className="text-muted mb-4">
            Google Workspace ($7/user/mo) provides shared drives with access controls. For a dedicated client portal, consider tools like TaxDome or Canopy, but these are specialized accounting tools outside our comparison scope. Notion Plus ($12/user/mo) supports guest access for client collaboration.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">How do I handle document requests during tax season?</h3>
          <p className="text-muted mb-4">
            Use Brevo to send templated document request emails with checklists. Track responses in HubSpot CRM. For file collection, Google Forms (free) or Tally (free) with file upload fields work well as lightweight intake forms.
          </p>
        </div>

        <RelatedLinks
          tools={["hubspot-crm", "quickbooks-online", "notion", "brevo", "calendly"]}
          comparisons={[]}
          guides={[
            "accounting-freelancers",
            "crm-for-service-businesses",
            "best-tools-for-consultants",
          ]}
        />
      </article>
    </>
  );
}
