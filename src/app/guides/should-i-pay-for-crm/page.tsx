import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Should You Pay for a CRM? A Framework for the Decision",
  description:
    "When free is enough, when $14/seat makes sense, when $100/seat is justified. A framework with exact prices from HubSpot, Pipedrive, Salesforce, Zoho, Freshsales, Close, and Attio.",
};

export default function ShouldIPayForCrmGuide() {
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
            <span className="text-foreground font-medium truncate">Should You Pay for a CRM?</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Buying Decision
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Should You Pay for a CRM? A Framework for the Decision
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 14 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            The CRM market wants you to believe that managing relationships without paid software
            is reckless. In reality, plenty of businesses under 500 contacts do fine with a
            spreadsheet. The question isn&apos;t whether CRMs are useful &mdash; it&apos;s whether
            the specific thing you&apos;d pay for is worth more than the cash and time it costs.
          </p>
          <p>
            This guide gives you a framework based on exact prices from every major CRM, so you
            can make the decision in 10 minutes instead of researching for a week.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Three Tiers of CRM Spending</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price Range</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tools</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">You Get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5">$0/mo</td>
                    <td className="px-4 py-2.5">HubSpot Free, Zoho Free (3 users), Freshsales Free (3 users), Attio Free (3 seats)</td>
                    <td className="px-4 py-2.5">Basic contact management, simple pipeline, limited reporting</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Mid-range</td>
                    <td className="px-4 py-2.5">$11&ndash;$39/seat/mo</td>
                    <td className="px-4 py-2.5">Pipedrive Lite ($14/seat), Freshsales Growth ($11/seat), Zoho Standard ($20/seat), HubSpot Starter ($20/seat), Close Solo ($19/seat), Attio Plus ($34/seat)</td>
                    <td className="px-4 py-2.5">Automations, email sync, better reporting, integrations</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                    <td className="px-4 py-2.5">$49&ndash;$350/seat/mo</td>
                    <td className="px-4 py-2.5">Pipedrive Premium ($49/seat), Salesforce Pro Suite ($100/seat), HubSpot Professional ($890/mo flat), Close Scale ($149/seat)</td>
                    <td className="px-4 py-2.5">Advanced forecasting, custom objects, AI features, territory management</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When Free Is Enough</h2>
            <p>
              Free CRM tiers are genuinely useful in specific situations. HubSpot Free gives you unlimited
              contacts, a basic pipeline, and 2,000 email sends/month. Zoho Free and Freshsales Free each
              support up to 3 users with core contact management. Attio Free offers 3 seats with 50,000 records.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <p className="text-foreground font-semibold">Free CRM is enough when:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You have fewer than 500 active contacts</li>
                <li>You&apos;re a solo operator or team of 2&ndash;3</li>
                <li>Your sales process is simple (fewer than 5 pipeline stages)</li>
                <li>You don&apos;t need email automation or sequences</li>
                <li>Manual data entry for 15 minutes/day is acceptable</li>
              </ul>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">The catch with free tiers:</strong> HubSpot Free
              includes HubSpot branding on everything. Zoho Free limits you to 5,000 records. Freshsales
              Free has no automation. These limits are manageable at small scale but become painful
              around 500&ndash;1,000 contacts or when you need to automate follow-ups.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When $14/Seat Makes Sense</h2>
            <p>
              The $11&ndash;$39/seat range is where most small sales teams land. Pipedrive Lite at
              $14/seat/month is the cheapest purpose-built sales CRM. Freshsales Growth at $11/seat/month
              is even cheaper and includes AI contact scoring. HubSpot Starter at $20/seat/month
              removes branding and adds email health reporting.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <p className="text-foreground font-semibold">Pay $11&ndash;$39/seat when:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You&apos;re closing more than 5 deals/month and need pipeline visibility</li>
                <li>Email follow-ups are falling through the cracks</li>
                <li>You need email sync (so CRM logs your Gmail/Outlook automatically)</li>
                <li>You have 3+ salespeople who need shared pipeline access</li>
                <li>Manual work costs more than the software (2+ hours/week on CRM tasks = $5,200/year at $50/hr)</li>
              </ul>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Entry Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost (5 users/yr)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Differentiator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                    <td className="px-4 py-2.5">Growth $11/seat/mo</td>
                    <td className="px-4 py-2.5">$660/yr</td>
                    <td className="px-4 py-2.5">AI scoring, built-in phone, cheapest paid CRM</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5">Lite $14/seat/mo</td>
                    <td className="px-4 py-2.5">$840/yr</td>
                    <td className="px-4 py-2.5">Best visual pipeline, sales-focused simplicity</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5">Starter $20/seat/mo</td>
                    <td className="px-4 py-2.5">$1,200/yr</td>
                    <td className="px-4 py-2.5">Marketing + CRM in one, best free-to-paid upgrade path</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Zoho CRM</td>
                    <td className="px-4 py-2.5">Standard $20/seat/mo</td>
                    <td className="px-4 py-2.5">$1,200/yr</td>
                    <td className="px-4 py-2.5">Part of 50+ Zoho apps, most features per dollar</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Attio</td>
                    <td className="px-4 py-2.5">Plus $34/seat/mo</td>
                    <td className="px-4 py-2.5">$2,040/yr</td>
                    <td className="px-4 py-2.5">Auto-enrichment from email, modern Notion-like data model</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When $100/Seat Is Justified</h2>
            <p>
              Enterprise CRM pricing starts at Salesforce Pro Suite ($100/seat/month), Close Growth
              ($109/seat/month), or HubSpot Professional ($890/month flat for the entire team). These
              tiers are justified only when the features directly generate revenue or prevent lost deals.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <p className="text-foreground font-semibold">Pay $100+/seat when:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You need sales forecasting that feeds into business planning</li>
                <li>You have 10+ reps who need territory management</li>
                <li>Deal complexity requires custom objects (Salesforce, HubSpot Enterprise)</li>
                <li>You need audit logs and compliance features (SOC 2, HIPAA)</li>
                <li>Average deal value exceeds $10K (the CRM cost is noise at this deal size)</li>
              </ul>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">The HubSpot cliff:</strong> HubSpot&apos;s jump
              from Starter ($20/seat) to Professional ($890/month flat) is a 4,350% increase. This
              is the single biggest pricing surprise in the CRM market. For a 5-person team, that&apos;s
              $890/month vs $100/month. Make sure you genuinely need automation, custom reporting, and
              ABM before crossing this line.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Break-Even Math</h2>
            <p>
              CRM software pays for itself when it either closes deals you&apos;d otherwise lose or
              saves enough time to justify the cost. Here&apos;s the math:
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <p className="text-foreground font-semibold">Time savings calculation:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Manual CRM work (spreadsheet updates, email searching, follow-up reminders): ~2 hours/week</li>
                <li>At $50/hour effective rate: $5,200/year in lost productive time</li>
                <li>Pipedrive Lite for 1 user: $168/year ($14/seat/mo billed annually)</li>
                <li>Freshsales Growth for 1 user: $132/year ($11/seat/mo billed annually)</li>
                <li><strong className="text-foreground">ROI: 30&ndash;40x return on CRM cost in time savings alone</strong></li>
              </ul>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">Revenue impact calculation:</strong> If a CRM&apos;s
              automation prevents even one $1,000 deal from falling through the cracks per quarter,
              that&apos;s $4,000/year in recovered revenue against $168&ndash;$1,200/year in CRM cost.
              The math works for almost any paid plan at the mid-range tier.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Decision Flowchart</h2>
            <div className="rounded-lg border border-border bg-surface p-5 space-y-4">
              <div>
                <p className="text-foreground font-semibold">1. How many active contacts do you manage?</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Under 200: A spreadsheet or free CRM is fine</li>
                  <li>200&ndash;1,000: Free CRM (HubSpot Free, Freshsales Free)</li>
                  <li>1,000+: Paid CRM is almost always worth it</li>
                </ul>
              </div>
              <div>
                <p className="text-foreground font-semibold">2. How many people need access?</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Just you: Free CRM or cheapest paid ($11&ndash;$14/seat)</li>
                  <li>2&ndash;5 people: Mid-range paid ($14&ndash;$39/seat)</li>
                  <li>6+ people: Mid-range to enterprise, depending on deal complexity</li>
                </ul>
              </div>
              <div>
                <p className="text-foreground font-semibold">3. What&apos;s your average deal value?</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Under $500: Free or cheapest paid. CRM is a nice-to-have.</li>
                  <li>$500&ndash;$5,000: Mid-range paid. One recovered deal/quarter covers the annual CRM cost.</li>
                  <li>Over $5,000: Invest in the CRM that your team will actually use. The cost is irrelevant compared to deal size.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot CRM really free?</h3>
                <p>Yes. HubSpot Free gives you unlimited contacts, a basic deal pipeline, email marketing (2,000 sends/month), forms, and live chat. The limitations are HubSpot branding on everything and no automation. It&apos;s genuinely usable for small teams.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the cheapest paid CRM?</h3>
                <p>Freshsales Growth at $11/seat/month is the cheapest paid CRM with meaningful features (AI scoring, visual pipeline, sequences). Pipedrive Lite at $14/seat/month is the cheapest sales-focused CRM with a visual pipeline.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from a free CRM?</h3>
                <p>When you need email sync, automations, or better reporting. The most common trigger is when follow-ups start falling through the cracks because you can&apos;t automate reminders or sequences on the free tier.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Salesforce worth $100/seat for a small team?</h3>
                <p>Almost never for teams under 10 people. Salesforce Pro Suite costs $100/seat/month and requires implementation expertise. A 5-person team pays $6,000/year before consulting fees. Pipedrive or HubSpot deliver 80% of the value at 14&ndash;20% of the cost.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "freshsales", "zoho-crm", "salesforce", "attio", "close-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive", "hubspot-crm-vs-salesforce"]}
            guides={[
              "best-crm-freelancers-consultants",
              "crm-pricing-cheat-sheet",
              "when-hubspot-stops-being-cheap",
            ]}
          />
        </div>
      </div>
    </>
  );
}
