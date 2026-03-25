import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Switching from HubSpot to Pipedrive: A Smaller CRM That Actually Gets Used",
  description:
    "Why teams leave HubSpot for Pipedrive: complexity, cost at Professional tier, what you gain (simplicity, deal-focused UI), what you lose (marketing automation), data migration steps, and cost savings math.",
};

export default function SwitchHubspotToPipedrivePage() {
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
              Switch from HubSpot to Pipedrive
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Migration Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Switching from HubSpot to Pipedrive: A Smaller CRM That Actually Gets Used
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            HubSpot is a platform. Pipedrive is a CRM. That distinction matters when your
            team uses 20% of HubSpot&apos;s features and pays 100% of the price. This guide
            covers why teams switch, what transfers, what breaks, and whether the savings
            justify the migration.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Why Teams Leave */}
          <section>
            <h2 className="text-xl font-bold mb-3">Why Teams Leave HubSpot</h2>
            <p className="text-muted leading-relaxed mb-3">
              The three most common reasons teams migrate from HubSpot to Pipedrive, based on
              patterns across hundreds of discussions in sales communities and CRM review sites:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Cost at the Professional tier.</strong> HubSpot Sales
                Hub Professional costs $890/month (includes 5 seats). That&apos;s $10,680/year
                before additional seats or contact tier overages. For a 10-person sales team,
                effective cost is $990/month ($890 base + $100 for 5 extra seats at $20 each).
                Pipedrive Premium for the same 10 users: $490/month ($49/user). The annual
                savings: $6,000.
              </li>
              <li>
                <strong className="text-foreground">Complexity that kills adoption.</strong> HubSpot&apos;s
                navigation has grown to include Marketing Hub, Sales Hub, Service Hub, CMS Hub,
                Operations Hub, and Commerce Hub. Teams that only need pipeline management spend
                time navigating around features they don&apos;t use. Sales reps &mdash;
                especially those who resist CRM adoption in the first place &mdash; are more
                likely to actually use a focused tool like Pipedrive.
              </li>
              <li>
                <strong className="text-foreground">The Starter-to-Professional cliff.</strong> Many
                teams start on HubSpot Free or Starter ($20/seat), hit automation or reporting
                limits, and face a jump to $890/month. At that decision point, switching to
                Pipedrive at $14&ndash;$49/seat is often cheaper than upgrading within HubSpot.
              </li>
            </ul>
          </section>

          {/* What You Gain */}
          <section>
            <h2 className="text-xl font-bold mb-3">What You Gain with Pipedrive</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">A deal-focused interface.</strong> Pipedrive was built
                around the visual pipeline. Every feature is oriented toward moving deals forward.
                The drag-and-drop pipeline view is cleaner and faster than HubSpot&apos;s deal
                board.
              </li>
              <li>
                <strong className="text-foreground">Simpler automations at lower tiers.</strong> Pipedrive
                Advanced ($39/user) includes workflow automation, email sync, and a scheduler.
                These features require HubSpot Professional ($890/month flat). Pipedrive gives
                you automation at a fraction of the price.
              </li>
              <li>
                <strong className="text-foreground">No contact tier pricing.</strong> Pipedrive charges
                per seat, not per contact. You can have 100,000 contacts and pay the same per-user
                price. HubSpot&apos;s Marketing Hub adds cost based on marketing contacts.
              </li>
              <li>
                <strong className="text-foreground">Faster onboarding.</strong> New sales reps can learn
                Pipedrive in 30&ndash;60 minutes. HubSpot onboarding typically takes 2&ndash;4
                hours for sales features alone, more if Marketing Hub is involved.
              </li>
              <li>
                <strong className="text-foreground">Revenue forecasting on Professional.</strong> Pipedrive
                Professional ($49/user) includes revenue forecasting and advanced reporting.
                HubSpot requires Professional ($890/month) for comparable forecasting features.
              </li>
            </ul>
          </section>

          {/* What You Lose */}
          <section>
            <h2 className="text-xl font-bold mb-3">What You Lose (Be Honest About This)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Switching to Pipedrive means giving up HubSpot&apos;s platform features. If your
              team uses these, the switch may cost more than it saves:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Marketing automation.</strong> HubSpot&apos;s workflow
                engine, email sequences, lead scoring, and lifecycle stage automation have no
                equivalent in Pipedrive. Pipedrive has basic automation (move deals, send emails
                on triggers) but nothing close to HubSpot&apos;s marketing capabilities. If you
                run marketing automation through HubSpot, you need a replacement (ActiveCampaign,
                Kit, or Brevo).
              </li>
              <li>
                <strong className="text-foreground">Content and CMS tools.</strong> HubSpot&apos;s blog,
                landing pages, and content management don&apos;t exist in Pipedrive. If your
                marketing team creates content in HubSpot, they need an alternative (WordPress,
                Webflow, or a standalone landing page builder).
              </li>
              <li>
                <strong className="text-foreground">Service/ticketing.</strong> HubSpot Service Hub
                provides ticketing, knowledge base, and customer portal. Pipedrive has no
                built-in support features. You&apos;d need a separate tool (Zendesk, Freshdesk,
                or Intercom).
              </li>
              <li>
                <strong className="text-foreground">Deep reporting on the free tier.</strong> HubSpot&apos;s
                free dashboards and reporting are better than Pipedrive&apos;s Essential tier
                reports. Pipedrive&apos;s good reporting starts at Professional ($49/user).
              </li>
              <li>
                <strong className="text-foreground">The HubSpot ecosystem.</strong> HubSpot has a massive
                integration marketplace, partner network, and community. Pipedrive&apos;s
                ecosystem is smaller. Check that your critical integrations exist in Pipedrive
                before committing.
              </li>
            </ul>
          </section>

          {/* Cost Savings Math */}
          <section>
            <h2 className="text-xl font-bold mb-3">Cost Savings Math</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Sales Pro</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive Growth</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive Premium</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Savings (vs HubSpot)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">5 users</td>
                    <td className="px-4 py-2.5 text-muted">$890/mo</td>
                    <td className="px-4 py-2.5 text-muted">$195/mo</td>
                    <td className="px-4 py-2.5 text-muted">$245/mo</td>
                    <td className="px-4 py-2.5 text-muted">$7,740&ndash;$8,340/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">10 users</td>
                    <td className="px-4 py-2.5 text-muted">$990/mo</td>
                    <td className="px-4 py-2.5 text-muted">$390/mo</td>
                    <td className="px-4 py-2.5 text-muted">$490/mo</td>
                    <td className="px-4 py-2.5 text-muted">$6,000&ndash;$7,200/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">15 users</td>
                    <td className="px-4 py-2.5 text-muted">$1,090/mo</td>
                    <td className="px-4 py-2.5 text-muted">$585/mo</td>
                    <td className="px-4 py-2.5 text-muted">$735/mo</td>
                    <td className="px-4 py-2.5 text-muted">$4,260&ndash;$6,060/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                    <td className="px-4 py-2.5 text-muted">$1,290/mo</td>
                    <td className="px-4 py-2.5 text-muted">$975/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,225/mo</td>
                    <td className="px-4 py-2.5 text-muted">$780&ndash;$3,780/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-3">
              The savings are most dramatic at small team sizes (5&ndash;10 users) where
              HubSpot&apos;s $890 flat fee is spread across fewer seats. At 25 users,
              HubSpot&apos;s effective per-seat cost drops and the gap narrows. If you also
              need to replace HubSpot&apos;s marketing automation with a separate tool, factor
              that cost into the comparison.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">If you also need marketing automation</p>
              <p className="text-sm text-muted">
                Pipedrive Premium ($49/user) + ActiveCampaign Starter ($15/mo for 1,000
                contacts) = $505/month for 10 users. Still cheaper than HubSpot Professional at
                $990/month, and you get better email automation from ActiveCampaign than from
                HubSpot&apos;s Sales Hub alone.
              </p>
            </div>
          </section>

          {/* Data Migration */}
          <section>
            <h2 className="text-xl font-bold mb-3">Data Migration Steps</h2>
            <p className="text-muted leading-relaxed mb-3">
              Pipedrive offers a built-in HubSpot import tool. Here is the process and what
              to watch for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Step 1: Export from HubSpot.</strong> Go to Contacts
                &rarr; select all &rarr; Export &rarr; CSV. Repeat for Companies and Deals.
                HubSpot exports include all standard and custom properties. Download the files
                and review them before importing.
              </li>
              <li>
                <strong className="text-foreground">Step 2: Map fields in Pipedrive.</strong> Create
                custom fields in Pipedrive that match your HubSpot custom properties before
                importing. Pipedrive&apos;s import wizard lets you map CSV columns to Pipedrive
                fields. Take time to map correctly &mdash; fixing bad mappings after import is
                tedious.
              </li>
              <li>
                <strong className="text-foreground">Step 3: Import contacts and companies first.</strong> Import
                organizations (companies) first, then persons (contacts) linked to those
                organizations. This preserves the company-contact relationship.
              </li>
              <li>
                <strong className="text-foreground">Step 4: Import deals.</strong> Deals require a linked
                contact and organization. Make sure those are imported first. Map HubSpot deal
                stages to Pipedrive pipeline stages before importing.
              </li>
              <li>
                <strong className="text-foreground">Step 5: Verify and clean.</strong> After import, spot-check
                50&ndash;100 records for correct field mapping, organization links, and deal stage
                accuracy. Common issues: date formats, currency formatting, and multi-select field
                values.
              </li>
            </ul>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">What does NOT migrate</p>
              <p className="text-sm text-muted">
                Email conversation history, activity timeline, workflow automations, meeting
                notes attached to contacts, task history, and call recordings stay in HubSpot.
                You can maintain read-only HubSpot access (free tier) to reference historical
                data during the transition.
              </p>
            </div>
          </section>

          {/* Who Should NOT Switch */}
          <section>
            <h2 className="text-xl font-bold mb-3">Who Should NOT Switch</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Teams using HubSpot Marketing Hub heavily.</strong> If
                you run email sequences, lead scoring, lifecycle stage automation, and content
                marketing through HubSpot, the cost of replacing those features with separate
                tools may exceed the CRM savings.
              </li>
              <li>
                <strong className="text-foreground">Organizations that need CRM + support in one
                platform.</strong> If your sales and support teams share HubSpot data (deals tied
                to tickets, customer health scores), splitting them across Pipedrive and a
                separate support tool creates data silos.
              </li>
              <li>
                <strong className="text-foreground">Teams with complex HubSpot workflows.</strong> If
                you have 20+ active workflows with branching logic, enrollment criteria, and
                cross-object triggers, rebuilding them in Pipedrive&apos;s simpler automation
                engine may not be possible. Audit your workflows before deciding.
              </li>
              <li>
                <strong className="text-foreground">Companies planning to scale past 50 users.</strong> Pipedrive
                works well for teams of 5&ndash;30. At 50+ users, HubSpot&apos;s team management,
                permissions, and reporting capabilities justify the premium.
              </li>
            </ul>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Not auditing HubSpot feature usage before
                switching.</strong> Go to HubSpot Settings &rarr; Account &rarr; Usage. Check which
                features your team actually uses. If 80% of usage is contacts, deals, and email
                tracking, Pipedrive is a clean fit. If automations and reporting are heavily used,
                plan their replacement first.
              </li>
              <li>
                <strong className="text-foreground">Skipping the parallel run period.</strong> Run both
                CRMs for 2&ndash;4 weeks. Have your team enter new deals in Pipedrive while
                maintaining HubSpot for existing deals. This catches missing integrations and
                workflow gaps before you fully commit.
              </li>
              <li>
                <strong className="text-foreground">Importing dirty data.</strong> HubSpot accumulates
                stale contacts, duplicate companies, and abandoned deals. Clean your data before
                importing. Delete contacts with no activity in 12+ months, merge duplicate
                companies, and close dead deals. Start Pipedrive with clean data.
              </li>
              <li>
                <strong className="text-foreground">Choosing Pipedrive Lite when you need
                Advanced.</strong> Essential ($14/user) lacks email sync, workflow automation, and
                the scheduler. Most teams switching from HubSpot need Advanced ($39/user) minimum.
                Don&apos;t choose the cheapest tier and then complain about missing features.
              </li>
              <li>
                <strong className="text-foreground">Forgetting to cancel HubSpot&apos;s annual
                contract.</strong> HubSpot Professional requires annual commitment. Check your
                contract renewal date and set a cancellation reminder 90 days out. Migrating to
                Pipedrive while still paying for HubSpot doubles your cost during the overlap.
              </li>
            </ul>
          </section>

          {/* Bottom Line */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
            <p className="text-muted leading-relaxed mb-3">
              Pipedrive is a better CRM for teams that primarily need pipeline management,
              deal tracking, and sales activity logging. HubSpot is a better platform for
              teams that need CRM + marketing automation + content + support in one place.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              If you&apos;re on HubSpot Professional because you needed automation and
              reporting, but your team mostly uses the deal pipeline, you are overpaying.
              Pipedrive Growth or Professional gives you the CRM features at 40&ndash;80%
              less cost.
            </p>
            <p className="text-muted leading-relaxed">
              If you&apos;re on HubSpot because you need the full platform &mdash; marketing,
              sales, and service in one system &mdash; stay. The value of a unified platform
              is real, even if the price is high. The switch to Pipedrive makes sense when
              you&apos;re paying for the platform but only using the CRM.
            </p>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long does the HubSpot to Pipedrive migration take?</h3>
                <p className="text-muted">For a team of 5&ndash;15 with a clean dataset (under 50,000 contacts), the migration takes 1&ndash;2 weeks including data export, import, field mapping, and verification. Add 1&ndash;2 weeks for parallel running and team training. Total: 2&ndash;4 weeks from start to full cutover.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I keep HubSpot Free for marketing while using Pipedrive for CRM?</h3>
                <p className="text-muted">Yes, this is a common approach. Use HubSpot Free for forms, basic email marketing (2,000 sends/month), and landing pages. Use Pipedrive for deal management, sales pipeline, and sales automations. Sync contacts between them using Zapier or Make. This gives you the best of both platforms at a fraction of the cost.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Pipedrive have email sequences like HubSpot?</h3>
                <p className="text-muted">Pipedrive Growth ($39/user) includes email sync and basic automation. For full email sequences comparable to HubSpot&apos;s, you need Pipedrive&apos;s Campaigns add-on or a separate email tool. Pipedrive&apos;s built-in email features are more basic than HubSpot&apos;s Sales Hub sequences.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What Pipedrive plan should I choose coming from HubSpot Professional?</h3>
                <p className="text-muted">Pipedrive Growth ($39/user) for most teams. It includes automation, email sync, scheduler, and workflow automation. Choose Professional ($49/user) if you need revenue forecasting, e-signatures, or advanced custom reporting. Essential ($14/user) is too limited for teams accustomed to HubSpot Professional features.</p>
              </div>
            </div>
          </section>

        </div>

        <RelatedLinks
          tools={["hubspot-crm", "pipedrive"]}
          comparisons={["hubspot-crm-vs-pipedrive"]}
          guides={["hubspot-pricing-reality", "best-crm-sales-teams"]}
        />
      </article>
    </>
  );
}
