import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "What Is SaaS Lock-In? How It Works and How to Avoid It",
  description:
    "SaaS vendor lock-in explained: 5 types with real examples from HubSpot, Salesforce, Zapier, and Notion. Exact switching costs and strategies to stay portable.",
};

export default function WhatIsSaasLockInPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">What Is SaaS Lock-In</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Explainer
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            What Is SaaS Lock-In? How It Works and How to Avoid It
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Vendor lock-in is when the cost of switching away from a tool becomes so high that
            you stay even when better or cheaper options exist. It&apos;s the #1 reason teams
            overpay for software. This guide explains how lock-in works, shows 5 types with
            real examples, and gives you strategies to stay portable.
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
            <h2 className="text-xl font-bold mb-3">The 5 Types of SaaS Lock-In</h2>

            <h3 className="text-lg font-semibold mt-6 mb-2">1. Data Lock-In</h3>
            <p className="text-muted leading-relaxed mb-4">
              Your data is trapped in a format that doesn&apos;t transfer cleanly. Salesforce
              custom objects and Apex code are proprietary. Notion database relations export
              as flat CSV (losing linked structure). HubSpot workflows and email templates
              don&apos;t export at all. The data is technically yours, but extracting it in a
              usable form costs significant time.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">2. Workflow Lock-In</h3>
            <p className="text-muted leading-relaxed mb-4">
              Your business processes are built around tool-specific features. A team with 50
              Zapier Zaps ($103.50/month for Team plan) would need 50&ndash;150 hours to rebuild
              them on Make. HubSpot Professional ($890/month) users with complex workflow automations
              face weeks of rebuilding on any alternative.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">3. Integration Lock-In</h3>
            <p className="text-muted leading-relaxed mb-4">
              Your tech stack is connected through one central tool. Salesforce with 20+ AppExchange
              apps creates deep integration dependencies. HubSpot as the hub connecting marketing,
              sales, and service means switching one Hub requires rewiring everything. Zapier connecting
              7,000+ apps means every downstream tool is affected by a platform change.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">4. Knowledge Lock-In</h3>
            <p className="text-muted leading-relaxed mb-4">
              Your team knows how to use the current tool and doesn&apos;t want to learn a new one.
              Salesforce has an entire certification ecosystem. Teams that spent months mastering
              Notion&apos;s database system resist switching to ClickUp. This is the most underestimated
              form of lock-in &mdash; retraining costs real productivity for 2&ndash;4 weeks.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">5. Contract Lock-In</h3>
            <p className="text-muted leading-relaxed mb-4">
              You&apos;re locked into an annual or multi-year contract. HubSpot Professional requires
              a 12-month commitment ($10,680/year). Salesforce typically locks you into annual
              contracts with early termination penalties. Cancelling mid-contract forfeits the
              remaining balance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Real Switching Costs by Tool</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Lock-In Level</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Estimated Switching Time</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Estimated Switching Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Very High</td>
                    <td className="px-4 py-2.5 text-muted">6 weeks &ndash; 6 months</td>
                    <td className="px-4 py-2.5 text-muted">$10,000&ndash;$50,000+ (consultants)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Professional</td>
                    <td className="px-4 py-2.5 text-muted">High</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;8 weeks</td>
                    <td className="px-4 py-2.5 text-muted">$2,000&ndash;$10,000 (time + consultants)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier (50+ Zaps)</td>
                    <td className="px-4 py-2.5 text-muted">High</td>
                    <td className="px-4 py-2.5 text-muted">3&ndash;6 weeks</td>
                    <td className="px-4 py-2.5 text-muted">50&ndash;150 hours of rebuild</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Medium</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;6 weeks</td>
                    <td className="px-4 py-2.5 text-muted">20&ndash;60 hours (data restructuring)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">Low&ndash;Medium</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;4 weeks</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;8 hours (list + automations)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Calendly</td>
                    <td className="px-4 py-2.5 text-muted">Low</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 hours</td>
                    <td className="px-4 py-2.5 text-muted">Near zero (update booking links)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">How to Minimize Lock-In</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Choose tools with good data export.</strong> CSV/JSON export of all data. Full API access. Notion, Pipedrive, and Kit score well. Salesforce custom objects score poorly.</li>
              <li><strong className="text-foreground">Prefer open-source alternatives when possible.</strong> n8n (automation), Cal.com (scheduling), Ghost (publishing) can all be self-hosted. You own the data and can never be priced out.</li>
              <li><strong className="text-foreground">Avoid annual contracts until you&apos;re committed.</strong> Pay monthly for the first 3&ndash;6 months. Only switch to annual billing (Pipedrive Growth: saves $120/seat/year) once you&apos;re confident you&apos;ll stay.</li>
              <li><strong className="text-foreground">Document your workflows externally.</strong> Keep a spreadsheet of all automations, integrations, and custom configurations. This reduces rebuild time by 50% when you do switch.</li>
              <li><strong className="text-foreground">Avoid building on proprietary features.</strong> Salesforce Apex code and HubSpot custom objects lock you in. Use standard features and third-party integrations (Zapier/Make) to stay portable.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is some lock-in inevitable?</h3>
                <p className="text-muted">Yes. Any tool you use for more than 6 months creates some switching cost. The goal isn&apos;t zero lock-in &mdash; it&apos;s manageable lock-in. Keep switching costs under $5,000 and timeline under 4 weeks for any single tool.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does HubSpot Free create lock-in?</h3>
                <p className="text-muted">Moderate. HubSpot Free CRM data (contacts, deals) exports cleanly as CSV. But the more you use HubSpot features (forms, email templates, meeting links), the harder it gets to leave. The lock-in accelerates dramatically at Professional ($890/month) with custom workflows.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which tools have the lowest lock-in?</h3>
                <p className="text-muted">Scheduling tools (Calendly, Cal.com, TidyCal) have near-zero lock-in. Email tools have low-medium lock-in (subscriber lists export, automations don&apos;t). CRMs and automation platforms have the highest lock-in.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "salesforce", "zapier", "notion", "pipedrive"]}
            comparisons={["hubspot-crm-vs-salesforce", "zapier-vs-make"]}
            guides={[
              "hubspot-lock-in-analysis",
              "salesforce-lock-in-analysis",
              "zapier-lock-in-analysis",
              "notion-lock-in-analysis",
              "software-switching-cost-guide",
            ]}
          />
        </div>
      </article>
    </>
  );
}
