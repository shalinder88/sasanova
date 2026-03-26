import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The SaaS Audit Checklist: Review Your Stack in 30 Minutes",
  description:
    "A 20-point checklist to audit your SaaS stack. Find unused seats, redundant tools, wrong tiers, and unnecessary add-ons. Exact pricing from real tools.",
};

export default function SaasAuditChecklistPage() {
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
              SaaS Audit Checklist
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Checklist
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The SaaS Audit Checklist: Review Your Stack in 30 Minutes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Most teams overspend on software by 20&ndash;40%. Unused seats, redundant tools,
            wrong tiers, and forgotten subscriptions add up quietly. This 20-point checklist
            helps you audit your entire SaaS stack in 30 minutes &mdash; with exact pricing
            so you can calculate real savings.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Why Audit Your SaaS Stack?</h2>
            <p className="text-muted leading-relaxed mb-4">
              The average small team pays for 3&ndash;5 tools they barely use. A single
              unused Salesforce seat at $100/user/month costs $1,200/year. An unnecessary
              HubSpot Professional upgrade at $890/month costs $10,680/year. The audit pays
              for itself in the first 10 minutes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Part 1: Seat and Usage Audit (5 minutes)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Count active seats vs. paid seats for every tool.</p>
                  <p className="text-muted text-sm mt-1">Check your CRM: Pipedrive Lite is $14/seat/month. If 3 of your 10 seats haven&apos;t logged in this month, that&apos;s $504/year wasted. Salesforce Pro Suite at $100/seat/month makes unused seats a $1,200/year problem each.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Check last login dates for each team member.</p>
                  <p className="text-muted text-sm mt-1">Most SaaS admin panels show last active date. If someone hasn&apos;t logged into your $8.75/user/month Slack Pro or $13.49/user/month Asana Starter in 30+ days, they probably don&apos;t need it.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">3.</span>
                <div>
                  <p className="text-foreground font-medium">Review automation task/operation counts vs. plan limits.</p>
                  <p className="text-muted text-sm mt-1">If you&apos;re on Zapier Professional ($29.99/month for 750 tasks) but only using 200 tasks, the free tier (100 tasks) won&apos;t work but Make Core ($10.59/month for 10,000 ops) saves $233/year.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">4.</span>
                <div>
                  <p className="text-foreground font-medium">Check email subscriber count vs. plan tier.</p>
                  <p className="text-muted text-sm mt-1">Mailchimp Standard at $20/month covers 500 contacts. If you&apos;re paying for 2,500 contacts but 40% are inactive or unsubscribed (Mailchimp still counts them), you&apos;re overpaying. Clean your list first.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">5.</span>
                <div>
                  <p className="text-foreground font-medium">Identify tools that overlap in functionality.</p>
                  <p className="text-muted text-sm mt-1">Paying for both Notion Plus ($12/user/month) and ClickUp Unlimited ($10/member/month) for project management? Pick one. Both tools have docs, tasks, and databases. Duplication costs $264/user/year.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Part 2: Tier and Plan Audit (5 minutes)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">6.</span>
                <div>
                  <p className="text-foreground font-medium">Are you on a tier higher than you need?</p>
                  <p className="text-muted text-sm mt-1">HubSpot Professional ($890/month) vs. Starter ($20/seat/month) is a 4,350% jump. If you&apos;re not using custom reporting, ABM, or advanced automation, Starter is enough.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">7.</span>
                <div>
                  <p className="text-foreground font-medium">Are you paying monthly when annual saves 15&ndash;30%?</p>
                  <p className="text-muted text-sm mt-1">Pipedrive Growth: $39/seat monthly vs. $29/seat annual saves $120/seat/year. Make Core: $10.59/month vs. $9/month annual saves $19/year. Small savings compound across your stack.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">8.</span>
                <div>
                  <p className="text-foreground font-medium">Are you paying for add-ons you don&apos;t use?</p>
                  <p className="text-muted text-sm mt-1">Notion AI is $10/user/month add-on. ClickUp Brain is $7/member/month. If your team tried it once and stopped, that&apos;s $84&ndash;$120/user/year in unused add-ons.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">9.</span>
                <div>
                  <p className="text-foreground font-medium">Could a free tier handle your current usage?</p>
                  <p className="text-muted text-sm mt-1">Kit (ConvertKit) Newsletter is free for up to 10,000 subscribers. beehiiv Launch is free for 2,500. If you&apos;re on a paid plan with fewer subscribers, you might be paying for nothing. Brevo Free gives 300 emails/day with unlimited contacts.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">10.</span>
                <div>
                  <p className="text-foreground font-medium">Are you on the wrong billing model for your usage?</p>
                  <p className="text-muted text-sm mt-1">Per-seat pricing (Pipedrive, Salesforce) punishes growing teams. Per-contact pricing (Mailchimp) punishes big lists. Usage-based pricing (Zapier tasks) punishes high-volume automators. Match your model to your growth pattern.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Part 3: Redundancy Check (5 minutes)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">11.</span>
                <div>
                  <p className="text-foreground font-medium">Do you have a CRM AND a separate contact management tool?</p>
                  <p className="text-muted text-sm mt-1">HubSpot Free gives you unlimited contacts with basic CRM. If you&apos;re also paying for a separate contact database or spreadsheet add-on, consolidate.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">12.</span>
                <div>
                  <p className="text-foreground font-medium">Do you have overlapping automation tools?</p>
                  <p className="text-muted text-sm mt-1">Teams often run Zapier ($29.99/month) AND HubSpot workflows AND Make. Audit which workflows run where. Consolidating to one tool can save $360&ndash;$600/year.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">13.</span>
                <div>
                  <p className="text-foreground font-medium">Are you paying for scheduling + CRM scheduling?</p>
                  <p className="text-muted text-sm mt-1">HubSpot Starter includes meeting scheduling. If you&apos;re also paying for Calendly Standard ($12/user/month), you may have an overlap. Check if your CRM&apos;s built-in scheduler covers your needs.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">14.</span>
                <div>
                  <p className="text-foreground font-medium">Multiple analytics tools covering the same data?</p>
                  <p className="text-muted text-sm mt-1">Running both Hotjar ($40/month) for heatmaps and PostHog Free (1M events, includes session replay)? PostHog might cover both needs at $0/month.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">15.</span>
                <div>
                  <p className="text-foreground font-medium">Paying for cloud storage across multiple providers?</p>
                  <p className="text-muted text-sm mt-1">Google Workspace Business Starter ($7/user/month) includes 30GB Drive storage. If you&apos;re also paying for Dropbox Plus ($11.99/month), consolidate or pick one.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Part 4: Contract and Renewal Check (5 minutes)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">16.</span>
                <div>
                  <p className="text-foreground font-medium">When does each annual contract renew?</p>
                  <p className="text-muted text-sm mt-1">Auto-renewal catches people off guard. Mark renewal dates for every tool &mdash; especially annual contracts for Salesforce, HubSpot Professional, and Semrush ($139.95/month).</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">17.</span>
                <div>
                  <p className="text-foreground font-medium">Will renewal pricing be different from current pricing?</p>
                  <p className="text-muted text-sm mt-1">Salesforce just raised prices approximately 6% across the board. Your next renewal may cost more. Check if your contract has price escalation clauses.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">18.</span>
                <div>
                  <p className="text-foreground font-medium">Are there cancellation penalties?</p>
                  <p className="text-muted text-sm mt-1">HubSpot Professional requires a 12-month commitment. Salesforce contracts typically lock you in annually. Cancelling mid-contract may forfeit the remaining balance. Know your exit costs.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">19.</span>
                <div>
                  <p className="text-foreground font-medium">Have any tools changed pricing since you signed up?</p>
                  <p className="text-muted text-sm mt-1">Bardeen jumped from ~$10/month to $99/month (890% increase). Ghost restructured from ~$9 to $18/month entry. If you&apos;re grandfathered, stay. If not, evaluate alternatives.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">20.</span>
                <div>
                  <p className="text-foreground font-medium">Can you negotiate a better rate at renewal?</p>
                  <p className="text-muted text-sm mt-1">Annual contracts with Salesforce, HubSpot, and enterprise tools are negotiable. Mention competitor pricing: &ldquo;Pipedrive Lite at $14/seat does what we need&rdquo; gives your Salesforce rep a reason to offer a discount.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Quick Wins: Common Savings by Category</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Overpaying Signal</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Potential Annual Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">3+ unused seats on Pipedrive Growth ($39/seat)</td>
                    <td className="px-4 py-2.5 text-muted">$1,404/year</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                    <td className="px-4 py-2.5 text-muted">Mailchimp Standard with 40% inactive contacts</td>
                    <td className="px-4 py-2.5 text-muted">$240&ndash;$600/year by cleaning list</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Zapier Professional using &lt;200 tasks</td>
                    <td className="px-4 py-2.5 text-muted">$233/year switching to Make Core</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">PM Tool</td>
                    <td className="px-4 py-2.5 text-muted">Asana Starter for a 2-person team</td>
                    <td className="px-4 py-2.5 text-muted">$324/year (free tier covers 2 users)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Scheduling</td>
                    <td className="px-4 py-2.5 text-muted">Calendly Standard for 1 event type</td>
                    <td className="px-4 py-2.5 text-muted">$144/year (free tier or TidyCal $29 lifetime)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How often should I audit my SaaS stack?</h3>
                <p className="text-muted">Quarterly is ideal. Set a recurring calendar event. At minimum, audit before every annual renewal and when team size changes by more than 20%.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s the fastest way to find unused seats?</h3>
                <p className="text-muted">Check admin panels for &ldquo;last active&rdquo; dates. Most tools (HubSpot, Pipedrive, Slack, Notion) show this in user management. Anyone inactive for 30+ days is a candidate for removal.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I downgrade tiers or switch tools?</h3>
                <p className="text-muted">Downgrade first &mdash; it takes 5 minutes and has zero risk. Switching tools involves data migration, retraining, and 2&ndash;4 weeks of productivity loss. Only switch if the savings exceed $500/year AND you are not locked into an annual contract.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "mailchimp", "zapier", "make", "notion", "clickup", "calendly"]}
            comparisons={["zapier-vs-make", "mailchimp-vs-beehiiv", "hubspot-crm-vs-pipedrive"]}
            guides={[
              "how-much-should-software-cost",
              "cheapest-saas-stack-2026",
              "saas-pricing-changes-2026",
              "when-to-switch-software",
            ]}
          />
        </div>
      </article>
    </>
  );
}
