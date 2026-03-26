import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Realistic CRM Implementation Timeline by Tool",
  description:
    "How long it actually takes to implement each CRM: HubSpot Free in 30 minutes, Pipedrive Lite in 1 hour, Zoho CRM in 1-2 weeks, Salesforce Pro Suite in 2-3 months. Exact prices and what slows you down.",
};

export default function CrmImplementationTimelinePage() {
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
              CRM Implementation Timeline
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Implementation Pitfall
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Realistic CRM Implementation Timeline by Tool
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Vendor websites say &ldquo;get started in minutes.&rdquo; Some actually deliver on
            that. Others require weeks or months of configuration, data migration, and training.
            Here is the real timeline for each major CRM, based on actual implementation
            patterns &mdash; not marketing promises.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Implementation Timeline Matrix</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM &amp; Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Time to First Use</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Time to Full Setup</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Consultant Needed?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2.5 text-muted">HubSpot Free</td><td className="px-4 py-2.5 text-muted">$0</td><td className="px-4 py-2.5 text-muted">30 min</td><td className="px-4 py-2.5 text-muted">1&ndash;2 days</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">HubSpot Starter</td><td className="px-4 py-2.5 text-muted">$20/seat/mo</td><td className="px-4 py-2.5 text-muted">1 hour</td><td className="px-4 py-2.5 text-muted">3&ndash;5 days</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">HubSpot Professional</td><td className="px-4 py-2.5 text-muted">$890/mo flat</td><td className="px-4 py-2.5 text-muted">1&ndash;2 weeks</td><td className="px-4 py-2.5 text-muted">4&ndash;8 weeks</td><td className="px-4 py-2.5 text-muted">Recommended</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Pipedrive Lite</td><td className="px-4 py-2.5 text-muted">$14/seat/mo</td><td className="px-4 py-2.5 text-muted">1 hour</td><td className="px-4 py-2.5 text-muted">1&ndash;3 days</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Pipedrive Growth</td><td className="px-4 py-2.5 text-muted">$39/seat/mo</td><td className="px-4 py-2.5 text-muted">1&ndash;2 hours</td><td className="px-4 py-2.5 text-muted">3&ndash;7 days</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Close Essentials</td><td className="px-4 py-2.5 text-muted">$49/seat/mo</td><td className="px-4 py-2.5 text-muted">1&ndash;2 hours</td><td className="px-4 py-2.5 text-muted">3&ndash;5 days</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Freshsales Growth</td><td className="px-4 py-2.5 text-muted">$11/seat/mo</td><td className="px-4 py-2.5 text-muted">1 hour</td><td className="px-4 py-2.5 text-muted">2&ndash;5 days</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Zoho CRM Standard</td><td className="px-4 py-2.5 text-muted">$20/seat/mo</td><td className="px-4 py-2.5 text-muted">2&ndash;3 hours</td><td className="px-4 py-2.5 text-muted">1&ndash;2 weeks</td><td className="px-4 py-2.5 text-muted">Helpful</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Attio Plus</td><td className="px-4 py-2.5 text-muted">$34/seat/mo</td><td className="px-4 py-2.5 text-muted">30 min</td><td className="px-4 py-2.5 text-muted">1&ndash;3 days</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Salesforce Starter Suite</td><td className="px-4 py-2.5 text-muted">$25/seat/mo</td><td className="px-4 py-2.5 text-muted">2&ndash;4 hours</td><td className="px-4 py-2.5 text-muted">1&ndash;2 weeks</td><td className="px-4 py-2.5 text-muted">Helpful</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Salesforce Pro Suite</td><td className="px-4 py-2.5 text-muted">$100/seat/mo</td><td className="px-4 py-2.5 text-muted">1&ndash;2 weeks</td><td className="px-4 py-2.5 text-muted">2&ndash;3 months</td><td className="px-4 py-2.5 text-muted">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Salesforce Enterprise</td><td className="px-4 py-2.5 text-muted">$175/seat/mo</td><td className="px-4 py-2.5 text-muted">2&ndash;4 weeks</td><td className="px-4 py-2.5 text-muted">3&ndash;6 months</td><td className="px-4 py-2.5 text-muted">Yes</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Tier 1: Under 1 Hour (Sign Up and Go)</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">HubSpot Free ($0):</strong> Create account,
              connect Gmail or Outlook, import a CSV of contacts. Done. The pipeline comes with
              default stages that work for most teams. You can add deals by the 30-minute mark.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Pipedrive Lite ($14/seat/month):</strong> Create
              account, customize pipeline stages, import contacts. Pipedrive&apos;s setup wizard
              is sales-focused and fast. You are adding deals within an hour. The limitation is
              3,000 deals and 30 custom fields on Lite.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Attio Free ($0, up to 3 seats):</strong> Connect
              email, and Attio auto-enriches contacts from your inbox history. This is the fastest
              CRM setup because data population is automatic. Within 30 minutes, you have a
              populated CRM without importing anything.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Tier 2: Days (Configure and Customize)</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Close Essentials ($49/seat/month):</strong> Setup
              takes 1&ndash;2 hours to first call, but full configuration &mdash; call routing,
              email sequences, Smart Views &mdash; takes 3&ndash;5 days. The built-in dialer
              adds complexity that pure CRMs do not have.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Freshsales Growth ($11/seat/month):</strong> Fast
              initial setup with built-in phone and chat. Full setup takes 2&ndash;5 days to
              configure Freddy AI scoring, sequences, and the visual pipeline. The Freshworks
              suite integration (Freshdesk, Freshchat) adds days if you use multiple products.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Zoho CRM Standard ($20/seat/month):</strong> The
              depth of Zoho CRM means setup takes 1&ndash;2 weeks even on lower tiers. Modules
              are configurable but numerous. The payoff is Salesforce-like power at a fraction
              of the cost.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Tier 3: Weeks to Months (Enterprise CRM)</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Salesforce Pro Suite ($100/seat/month):</strong> Plan
              for 2&ndash;3 months from purchase to productive use. Week 1&ndash;2: requirements
              gathering. Week 3&ndash;6: configuration, custom objects, flows. Week 7&ndash;10:
              data migration and testing. Week 11&ndash;12: training and go-live. Budget
              $10,000&ndash;$30,000 for implementation.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Salesforce Enterprise ($175/seat/month):</strong> Plan
              for 3&ndash;6 months. The additional customization options (Apex code, custom objects,
              advanced security) add complexity. Implementations over 50 users routinely take 6
              months. Budget $30,000&ndash;$100,000+ for implementation.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">HubSpot Professional ($890/month flat):</strong> Despite
              HubSpot&apos;s reputation for ease, Professional takes 4&ndash;8 weeks to implement
              properly. The mandatory $3,000 onboarding covers basics, but custom reporting, workflow
              automation, and ABM setup require additional weeks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">What Actually Slows Implementation Down</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Data migration.</strong> Moving contacts from spreadsheets or another CRM is the #1 bottleneck. Clean data migrates in hours. Dirty data (duplicates, missing fields, inconsistent formats) takes weeks to clean before migration.</li>
              <li><strong className="text-foreground">Custom fields and objects.</strong> Every custom field requires a decision about type, required status, and where it appears. 50 custom fields means 50 decisions. This is where over-building happens.</li>
              <li><strong className="text-foreground">Integrations.</strong> Connecting email, calendar, and 2&ndash;3 other tools is straightforward. Connecting 10+ tools with bidirectional sync requires careful mapping and testing.</li>
              <li><strong className="text-foreground">Team training.</strong> The CRM is only as good as the data people put in. Budget 2&ndash;5 hours of training per user, plus 1&ndash;2 weeks of hand-holding after launch.</li>
              <li><strong className="text-foreground">Stakeholder approval.</strong> In larger organizations, getting sign-off on pipeline stages, field definitions, and permission sets can take longer than the technical setup itself.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which CRM has the fastest implementation?</h3>
                <p className="text-muted">HubSpot Free and Attio Free are the fastest. HubSpot Free takes about 30 minutes to first use with imported contacts. Attio is even faster because it auto-populates contacts from your email &mdash; no import needed.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I hire a consultant for CRM implementation?</h3>
                <p className="text-muted">For HubSpot Free/Starter, Pipedrive, Close, Freshsales, and Attio: no. For Zoho CRM Enterprise, HubSpot Professional, and any Salesforce edition above Starter Suite: yes. The break-even on consultant cost is usually 2&ndash;3 months of avoided rework.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long should I budget for data migration?</h3>
                <p className="text-muted">Clean data from one CRM to another: 1&ndash;3 days. Spreadsheet data with inconsistencies: 1&ndash;2 weeks. Multiple source systems with deduplication needs: 2&ndash;4 weeks. Data cleaning always takes longer than expected.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce", "close-crm", "freshsales", "zoho-crm", "attio"]}
            comparisons={["hubspot-crm-vs-pipedrive", "salesforce-vs-hubspot-crm"]}
            guides={[
              "hubspot-implementation-mistakes",
              "salesforce-implementation-mistakes",
              "crm-data-migration-checklist",
              "hubspot-crm-setup-guide",
              "pipedrive-setup-guide",
              "best-crm-under-20-per-user",
            ]}
          />
        </div>
      </article>
    </>
  );
}
