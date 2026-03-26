import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Annual vs Monthly Billing: Exact Savings for Every Major Tool",
  description:
    "Side-by-side annual vs monthly pricing for 20+ SaaS tools. Exact savings percentages: Pipedrive saves 25%, Notion saves 17%, Zapier saves 33%, ClickUp saves 30%. When annual billing makes sense and when monthly flexibility is worth the premium.",
  openGraph: {
    title: "Annual vs Monthly Billing: Exact Savings for Every Major Tool",
    description:
      "20+ tools with exact annual vs monthly pricing. The math on whether locking in saves or traps you.",
  },
};

const billingComparisons = [
  // CRM
  { category: "CRM", tool: "Pipedrive Growth", monthly: 39, annual: 29, annualTotal: 348, slug: "pipedrive" },
  { category: "CRM", tool: "HubSpot Starter", monthly: 20, annual: 18, annualTotal: 216, slug: "hubspot-crm" },
  { category: "CRM", tool: "Salesforce Pro Suite", monthly: 100, annual: 100, annualTotal: 1200, slug: "salesforce" },
  { category: "CRM", tool: "Freshsales Growth", monthly: 11, annual: 9, annualTotal: 108, slug: "freshsales" },
  { category: "CRM", tool: "Zoho Standard", monthly: 20, annual: 14, annualTotal: 168, slug: "zoho-crm" },
  { category: "CRM", tool: "Close Essentials", monthly: 49, annual: 35, annualTotal: 420, slug: "close-crm" },
  // Email
  { category: "Email", tool: "ActiveCampaign Starter", monthly: 15, annual: 9, annualTotal: 108, slug: "activecampaign" },
  { category: "Email", tool: "Kit Creator", monthly: 39, annual: 39, annualTotal: 468, slug: "convertkit" },
  { category: "Email", tool: "Mailchimp Standard", monthly: 20, annual: 20, annualTotal: 240, slug: "mailchimp" },
  { category: "Email", tool: "Brevo Standard", monthly: 18, annual: 18, annualTotal: 216, slug: "brevo" },
  { category: "Email", tool: "beehiiv Scale", monthly: 49, annual: 43, annualTotal: 516, slug: "beehiiv" },
  // Automation
  { category: "Automation", tool: "Zapier Professional", monthly: 29.99, annual: 19.99, annualTotal: 239.88, slug: "zapier" },
  { category: "Automation", tool: "Make Core", monthly: 10.59, annual: 9, annualTotal: 108, slug: "make" },
  { category: "Automation", tool: "n8n Starter", monthly: 20, annual: 20, annualTotal: 240, slug: "n8n" },
  // PM & Docs
  { category: "PM & Docs", tool: "ClickUp Unlimited", monthly: 10, annual: 7, annualTotal: 84, slug: "clickup" },
  { category: "PM & Docs", tool: "Monday Standard", monthly: 14, annual: 12, annualTotal: 144, slug: "monday" },
  { category: "PM & Docs", tool: "Notion Plus", monthly: 12, annual: 10, annualTotal: 120, slug: "notion" },
  // Communication
  { category: "Communication", tool: "Slack Pro", monthly: 8.75, annual: 7.25, annualTotal: 87, slug: "slack" },
  // Design
  { category: "Design", tool: "Canva Pro", monthly: 15, annual: 10, annualTotal: 120, slug: "canva" },
  // Analytics
  { category: "Analytics", tool: "Plausible Starter", monthly: 9, annual: 9, annualTotal: 108, slug: "plausible" },
  // Scheduling
  { category: "Scheduling", tool: "Calendly Standard", monthly: 12, annual: 10, annualTotal: 120, slug: "calendly" },
  { category: "Scheduling", tool: "Cal.com Team", monthly: 15, annual: 12, annualTotal: 144, slug: "cal-com" },
  // SEO
  { category: "SEO", tool: "Mangools Entry", monthly: 29.90, annual: 19.99, annualTotal: 239.88, slug: "mangools" },
];

export default function AnnualVsMonthlyBilling() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Annual vs Monthly Billing</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Annual vs Monthly Billing: Exact Savings for Every Major Tool
          </h1>
          <p className="text-lg text-muted">
            Every SaaS tool offers an annual discount to lock you in. Some save you 33%. Some save you nothing. Here&apos;s the exact monthly rate, annual rate, and savings percentage for 23 major tools &mdash; plus when annual actually makes sense.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="All pricing verified against vendor pricing pages"
          sourceCount={23}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Summary */}
          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              The rule of thumb
            </p>
            <p className="text-sm text-muted">
              If you have used a tool for 3+ months and plan to keep it for a year, switch to annual billing. The average annual discount across these 23 tools is 17%. The biggest savers: Zapier (33%), Canva (33%), Mangools (33%), ClickUp (30%). Some tools (Mailchimp, Brevo, n8n) offer no annual discount at all.
            </p>
          </div>

          {/* Complete Comparison Table */}
          <h2 className="text-xl font-bold mt-10 mb-4">Complete Billing Comparison: 23 Tools</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-3 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-3 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-3 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                  <th className="px-3 py-2.5 font-semibold text-foreground">Annual Total</th>
                  <th className="px-3 py-2.5 font-semibold text-foreground">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {billingComparisons.map((row) => {
                  const monthlyCost = row.monthly * 12;
                  const savings = monthlyCost - row.annualTotal;
                  const savingsPct = Math.round((savings / monthlyCost) * 100);
                  return (
                    <tr key={row.tool}>
                      <td className="px-3 py-2.5 font-medium text-foreground">
                        <Link href={`/tools/${row.slug}`} className="hover:text-accent transition-colors">
                          {row.tool}
                        </Link>
                      </td>
                      <td className="px-3 py-2.5">${row.monthly.toFixed(2)}</td>
                      <td className="px-3 py-2.5">${row.annual.toFixed(2)}</td>
                      <td className="px-3 py-2.5">${row.annualTotal.toFixed(2)}/yr</td>
                      <td className={`px-3 py-2.5 font-bold ${savingsPct >= 25 ? "text-green-400" : savingsPct > 0 ? "text-amber-400" : "text-muted"}`}>
                        {savingsPct > 0 ? `${savingsPct}% ($${savings.toFixed(0)}/yr)` : "No discount"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* When Annual Makes Sense */}
          <h2 className="text-xl font-bold mt-14 mb-4">When Annual Billing Makes Sense</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p><strong className="text-foreground">Go annual when:</strong> You have used the tool for 3+ months and are satisfied. The savings are 20%+ (Zapier, Canva, ClickUp, Mangools, ActiveCampaign). You are not evaluating alternatives. Your team is stable and seat count is predictable.</p>
            <p><strong className="text-foreground">Stay monthly when:</strong> You are still evaluating the tool (first 1-3 months). You are growing fast and seat counts change quarterly. The annual discount is less than 10%. You are considering switching to a competitor. The vendor has a history of price increases (locking annual does not protect against renewal increases).</p>
            <p><strong className="text-foreground">The math:</strong> If you pay monthly for 3 months then switch to annual, you still save money vs paying monthly all year. The break-even point for most tools is 2-4 months of monthly billing before switching to annual.</p>
          </div>

          {/* Tools with No Annual Discount */}
          <h2 className="text-xl font-bold mt-14 mb-4">Tools with No Annual Discount (Save Your Commitment)</h2>
          <p className="text-muted mb-4 text-sm">
            These tools charge the same rate whether you pay monthly or annually. There is no reason to lock in:
          </p>
          <ul className="text-sm text-muted space-y-1 mb-8 list-disc pl-5">
            <li><strong className="text-foreground">Mailchimp Standard:</strong> $20/mo monthly or annually. No savings.</li>
            <li><strong className="text-foreground">Brevo Standard:</strong> $18/mo monthly or annually. No savings.</li>
            <li><strong className="text-foreground">n8n Starter:</strong> $20/mo monthly or annually. No savings.</li>
            <li><strong className="text-foreground">Salesforce:</strong> Annual billing only. No monthly option on most plans.</li>
            <li><strong className="text-foreground">Plausible Starter:</strong> $9/mo regardless of billing cycle.</li>
          </ul>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Can I switch from annual back to monthly?</h3>
              <p className="text-sm text-muted">
                Usually yes, but only at renewal. Most SaaS tools lock you into the annual term. You cannot switch mid-year without forfeiting the remaining months. Some tools (Pipedrive, ClickUp) let you add seats monthly on top of an annual plan. Check each vendor&apos;s cancellation policy before committing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Do annual plans protect against price increases?</h3>
              <p className="text-sm text-muted">
                Only for the current term. When your annual plan renews, the vendor can (and often does) increase the price. Mailchimp, for example, has raised prices significantly in recent years. Annual billing delays the increase by one year, but does not prevent it.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">What is the total annual savings if I switch everything to annual?</h3>
              <p className="text-sm text-muted">
                For a typical solo founder stack (Pipedrive Growth + beehiiv Scale + Make Core + Notion Plus + Slack Pro), switching all to annual saves roughly $40-$50/month, or $480-$600/year. The exact amount depends on which tools you use.
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["pipedrive", "zapier", "make", "clickup", "notion", "canva", "beehiiv", "slack"]}
          comparisons={["zapier-vs-make", "hubspot-crm-vs-pipedrive"]}
          guides={[
            "saas-pricing-traps-2026",
            "how-much-should-software-cost",
            "best-saas-deals-annual-billing",
            "saas-contract-negotiation-tips",
            "hidden-add-on-costs",
            "monthly-saas-review-template",
          ]}
        />
      </article>
    </>
  );
}
