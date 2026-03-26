import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Stack for Law Firms: CRM, Scheduling, Docs, and Billing",
  description:
    "The complete software stack for small law practices. Pipedrive Lite at $14/seat/mo for client management, Calendly Standard at $12/user/mo for scheduling, Notion Free for docs, and FreshBooks Plus at $43/mo for billing.",
};

export default function SaasStackForLawFirms() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Stack for Law Firms</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Industry Stack
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Stack for Law Firms: CRM, Scheduling, Docs, and Billing
          </h1>
          <p className="text-lg text-muted">
            Small law practices need client relationship management, scheduling, document organization, and time-based billing. Here&apos;s the exact stack with verified pricing &mdash; from a $0 starter setup to a full practice management stack under $150/month.
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
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                  <td className="px-4 py-2.5">Lite</td>
                  <td className="px-4 py-2.5">$14/seat/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Scheduling</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Calendly</td>
                  <td className="px-4 py-2.5">Standard</td>
                  <td className="px-4 py-2.5">$12/user/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Docs &amp; Knowledge</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Billing &amp; Time Tracking</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">FreshBooks</td>
                  <td className="px-4 py-2.5">Plus</td>
                  <td className="px-4 py-2.5">$43/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Communication</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Slack</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-semibold text-foreground" colSpan={3}>Total (solo attorney)</td>
                  <td className="px-4 py-2.5 font-semibold text-foreground">$69/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Why These Tools</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Pipedrive Lite ($14/seat/mo) for Client Management</h3>
          <p className="text-muted mb-4">
            Law firms track clients through stages: consultation, engagement, active matter, closed. Pipedrive&apos;s visual pipeline maps perfectly to this workflow. Lite includes 3,000 deals, 30 custom fields, and lead/deal management. For firms needing email sync and automations, Growth is $39/seat/mo. Alternative: HubSpot CRM Free ($0) if you need unlimited contacts and don&apos;t need pipeline customization.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Calendly Standard ($12/user/mo) for Client Scheduling</h3>
          <p className="text-muted mb-4">
            Client consultations are the lifeblood of a law practice. Calendly Standard gives unlimited event types, reminders, and workflows. The free tier limits you to 1 event type. Alternative: Cal.com (free, open source) if you want unlimited event types without paying.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Notion Free ($0) for Document Organization</h3>
          <p className="text-muted mb-4">
            Notion&apos;s databases and pages work well for case notes, legal research, templates, and internal procedures. Free gives unlimited pages with 7-day history. For teams needing longer history and file uploads, Plus is $12/user/mo. Note: Notion is not a practice management system &mdash; it handles internal docs, not privileged client communications.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">FreshBooks Plus ($43/mo) for Billing</h3>
          <p className="text-muted mb-4">
            FreshBooks excels at time-based billing, which is core to legal practice. Plus supports 50 billable clients, time tracking, proposals, recurring invoices, and accounting reports. For fewer clients, Lite at $23/mo covers 5 billable clients. Alternative: Wave Starter ($0) for basic invoicing if you have simple billing needs.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Budget Tiers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$0 Starter</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot CRM Free + Calendly Free + Notion Free + Wave Starter Free + Slack Free</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Solo Attorney</td>
                  <td className="px-4 py-2.5 text-muted">Pipedrive Lite + Calendly Standard + Notion Free + FreshBooks Lite + Slack Free</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Small Firm (3 attorneys)</td>
                  <td className="px-4 py-2.5 text-muted">Pipedrive Lite ($42) + Calendly Standard ($36) + Notion Free + FreshBooks Plus ($43) + Slack Free</td>
                  <td className="px-4 py-2.5">$121/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Compliance Considerations</h2>
          <p className="text-muted mb-4">
            Law firms handle sensitive client data. Key compliance points: Pipedrive is SOC 2 and GDPR compliant. Notion offers HIPAA on Enterprise plans. FreshBooks is SOC 2 and PCI DSS compliant. For firms handling health-related legal matters, verify HIPAA compliance on each tool&apos;s enterprise tier. None of these tools replace dedicated legal practice management software for privileged communications.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Why not use a dedicated legal practice management tool?</h3>
          <p className="text-muted mb-4">
            Tools like Clio and MyCase are purpose-built for law firms but cost $49&ndash;$89/user/mo each. For solo practitioners and small firms handling general practice, the stack above covers 80% of needs at a fraction of the cost. Upgrade to dedicated legal software when your practice grows beyond 5 attorneys or handles complex litigation.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Should I use Zoho CRM instead of Pipedrive?</h3>
          <p className="text-muted mb-4">
            Zoho CRM Free supports up to 3 users with 5,000 records. It&apos;s a good alternative if cost is the primary concern. But Pipedrive&apos;s visual pipeline is more intuitive for client intake workflows, and most attorneys prefer its cleaner interface.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What about document signing?</h3>
          <p className="text-muted mb-4">
            Add DocuSign or PandaDoc for e-signatures. PandaDoc has a free plan for unlimited e-signatures. This keeps your total stack cost low while covering engagement letters and contract execution.
          </p>
        </div>

        <RelatedLinks
          tools={["pipedrive", "calendly", "notion", "freshbooks"]}
          comparisons={["pipedrive-vs-hubspot"]}
          guides={[
            "crm-for-service-businesses",
            "best-crm-freelancers-consultants",
            "accounting-freelancers",
          ]}
        />
      </article>
    </>
  );
}
