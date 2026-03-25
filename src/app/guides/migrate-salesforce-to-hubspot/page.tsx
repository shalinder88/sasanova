import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Migrating from Salesforce to HubSpot: What Actually Happens",
  description:
    "The real cost, timeline, and tradeoffs of moving from Salesforce to HubSpot. Data mapping, what you lose, true cost comparison at 10-100 users, and when Salesforce is actually worth the price.",
};

export default function MigrateSalesforceToHubspot() {
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
              Migrate Salesforce to HubSpot
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
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Migrating from Salesforce to HubSpot: What Actually Happens
          </h1>
          <p className="text-lg text-muted">
            Every year, thousands of companies decide Salesforce costs too much and HubSpot looks simpler. Some of those migrations go smoothly. Many don&apos;t. This guide covers what actually happens when you move &mdash; the data mapping, the hidden costs, the features you lose, and the honest timeline. Because the worst migration is the one you start without knowing what you&apos;re getting into.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">Why Companies Leave Salesforce</h2>
          <p className="text-muted mb-4">
            The reasons are consistent across almost every company we&apos;ve talked to. They boil down to four triggers.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Cost.</strong> Salesforce Pro Suite is $100/user/month. Enterprise is $165/user/month. A 25-person sales team on Pro Suite pays $30,000/year before add-ons. Factor in a Salesforce admin ($70K&ndash;$110K salary), AppExchange subscriptions (typically $5K&ndash;$20K/year), and implementation consulting ($15K&ndash;$50K for mid-market), and the total cost of ownership is 3&ndash;5x the license fees.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Complexity.</strong> Every Salesforce org accumulates technical debt. Custom objects, Apex triggers, validation rules, flows that nobody remembers building. After 2&ndash;3 years, most mid-market Salesforce instances need a certified admin to make changes. Small teams don&apos;t have that person. They have a marketing manager who learned SFDC basics on YouTube.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Admin burden.</strong> Salesforce requires ongoing maintenance. User provisioning, permission sets, page layouts, flow debugging, data cleanup. In organizations under 50 people, this falls on someone who already has a full-time job. The CRM becomes a chore instead of a tool.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Adoption failure.</strong> Salesforce is powerful but dense. If reps aren&apos;t filling it in, the reporting is worthless. Many teams find that 40&ndash;60% of their Salesforce data is incomplete or outdated because reps view it as busywork.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Data Mapping: What Transfers and How</h2>
          <p className="text-muted mb-4">
            The core migration involves mapping Salesforce objects to HubSpot objects. Here&apos;s the reality of each.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Salesforce Object</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Equivalent</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Migration Difficulty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Leads &amp; Contacts</td>
                  <td className="px-4 py-2.5">Contacts</td>
                  <td className="px-4 py-2.5">Straightforward. HubSpot merges leads and contacts into one object. Map fields 1:1 for standard fields.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Accounts</td>
                  <td className="px-4 py-2.5">Companies</td>
                  <td className="px-4 py-2.5">Direct mapping. Custom fields need manual recreation in HubSpot.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Opportunities</td>
                  <td className="px-4 py-2.5">Deals</td>
                  <td className="px-4 py-2.5">Pipeline stages need remapping. Deal amounts, close dates, and owners transfer cleanly.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Custom Objects</td>
                  <td className="px-4 py-2.5">Custom Objects (Enterprise only)</td>
                  <td className="px-4 py-2.5">Painful. HubSpot custom objects require Enterprise tier ($3,600/mo). Limited to 10 custom objects.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Tasks &amp; Activities</td>
                  <td className="px-4 py-2.5">Activities (calls, emails, tasks)</td>
                  <td className="px-4 py-2.5">Historical activities migrate as notes or logged activities. Some fidelity loss.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Apex Triggers / Flows</td>
                  <td className="px-4 py-2.5">Workflows / Sequences</td>
                  <td className="px-4 py-2.5">No automated migration. Rebuild manually. Complex flows may not have HubSpot equivalents.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Reports &amp; Dashboards</td>
                  <td className="px-4 py-2.5">Reports &amp; Dashboards</td>
                  <td className="px-4 py-2.5">Rebuild from scratch. HubSpot reporting is less flexible, especially on lower tiers.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted mb-4">
            <strong className="text-foreground">Custom fields:</strong> Export your Salesforce field list (Setup &rarr; Object Manager &rarr; Fields &amp; Relationships). Count them. A typical mid-market Salesforce org has 50&ndash;200 custom fields across objects. Each one needs to be recreated in HubSpot as a custom property. On Professional tier, HubSpot gives you 1,000 custom properties &mdash; usually enough, but the manual recreation is where the hours go.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Automations:</strong> This is where migrations stall. Salesforce Flows and Apex triggers don&apos;t have a translation layer to HubSpot workflows. You need to document every automation in Salesforce, determine whether HubSpot can replicate it, and rebuild from scratch. Some won&apos;t be possible without HubSpot Professional ($890/mo) or Enterprise.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What You Lose Moving to HubSpot</h2>
          <p className="text-muted mb-4">
            HubSpot is a strong CRM. It is not Salesforce. Here&apos;s what you give up:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Advanced reporting.</strong> Salesforce reporting with cross-object formulas, bucket fields, and joined reports is significantly more powerful than HubSpot&apos;s. HubSpot&apos;s custom report builder (Professional+) covers 70% of use cases. The other 30% requires workarounds or third-party BI tools.</li>
            <li><strong className="text-foreground">AppExchange depth.</strong> Salesforce has 7,000+ apps on AppExchange. HubSpot&apos;s marketplace has ~1,500. If you depend on niche integrations (CPQ, territory planning, commission tracking), check HubSpot&apos;s marketplace before committing.</li>
            <li><strong className="text-foreground">Granular permissions.</strong> Salesforce&apos;s permission model (profiles, permission sets, field-level security, record-level sharing rules) is more granular than HubSpot&apos;s. If you have complex data access requirements, HubSpot may not satisfy compliance or security needs without Enterprise.</li>
            <li><strong className="text-foreground">Multi-currency and territory management.</strong> Native in Salesforce Pro Suite. HubSpot requires Enterprise ($3,600/mo) for full territory support.</li>
            <li><strong className="text-foreground">Custom object flexibility.</strong> Salesforce lets you create unlimited custom objects on any paid tier. HubSpot limits custom objects to Enterprise and caps them at 10.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Realistic Timeline</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Salesforce Complexity</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Migration Timeline</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Budget for Migration Help</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1&ndash;10 users</td>
                  <td className="px-4 py-2.5">Low (basic pipeline, few custom fields)</td>
                  <td className="px-4 py-2.5">1&ndash;2 weeks</td>
                  <td className="px-4 py-2.5">$0&ndash;$2,000 (DIY possible)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10&ndash;25 users</td>
                  <td className="px-4 py-2.5">Medium (custom objects, automations)</td>
                  <td className="px-4 py-2.5">4&ndash;8 weeks</td>
                  <td className="px-4 py-2.5">$5,000&ndash;$15,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25&ndash;50 users</td>
                  <td className="px-4 py-2.5">High (Apex, integrations, complex flows)</td>
                  <td className="px-4 py-2.5">2&ndash;3 months</td>
                  <td className="px-4 py-2.5">$15,000&ndash;$40,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50&ndash;100 users</td>
                  <td className="px-4 py-2.5">Very high (multiple business units)</td>
                  <td className="px-4 py-2.5">3&ndash;6 months</td>
                  <td className="px-4 py-2.5">$40,000&ndash;$100,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            These timelines assume you&apos;ve already decided. Add 2&ndash;4 weeks for stakeholder alignment and vendor evaluation if you&apos;re still comparing options.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">True Cost Comparison</h2>
          <p className="text-muted mb-4">
            This is the comparison people actually need. License cost plus real-world add-ons, calculated annually.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Salesforce (Professional)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Sales Hub Pro</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Sales Hub Starter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 users</td>
                  <td className="px-4 py-2.5">$12,000/yr licenses + ~$5K admin/consulting = ~$17,000/yr</td>
                  <td className="px-4 py-2.5">$10,680/yr (platform) + $600/yr (extra seats at $20/mo each) = ~$11,280/yr</td>
                  <td className="px-4 py-2.5">$2,400/yr (10 seats at $20/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                  <td className="px-4 py-2.5">$24,000/yr + ~$10K admin = ~$34,000/yr</td>
                  <td className="px-4 py-2.5">$10,680/yr + $5,400/yr (extra seats) = ~$16,080/yr</td>
                  <td className="px-4 py-2.5">$6,000/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50 users</td>
                  <td className="px-4 py-2.5">$48,000/yr + ~$15K admin = ~$63,000/yr</td>
                  <td className="px-4 py-2.5">$10,680/yr + $11,400/yr (extra seats) = ~$22,080/yr</td>
                  <td className="px-4 py-2.5">$12,000/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">100 users</td>
                  <td className="px-4 py-2.5">$96,000/yr + ~$25K admin = ~$121,000/yr</td>
                  <td className="px-4 py-2.5">$10,680/yr + $23,400/yr (extra seats) = ~$34,080/yr</td>
                  <td className="px-4 py-2.5">$24,000/yr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The catch with HubSpot Pro:</strong> That $890/month base fee includes 5 seats. Additional seats are $20/month each. But the $890/mo also includes only 2,000 marketing contacts. If you use Marketing Hub alongside Sales Hub, contact tier pricing adds up fast &mdash; 10,000 marketing contacts bumps the bill by roughly $225/month.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The catch with HubSpot Starter:</strong> At $20/seat/month it looks like a bargain. But Starter lacks workflow automation, custom reporting, and sequences beyond basic templates. Teams that need automation (most sales teams do) end up on Professional within 6 months.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">When Salesforce Is Actually Worth the Price</h2>
          <p className="text-muted mb-4">
            Not everyone should leave. Salesforce earns its cost when:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">You have complex, multi-stage sales processes</strong> with territory management, quote-to-cash workflows, or revenue operations that span departments. HubSpot&apos;s pipeline is simpler by design.</li>
            <li><strong className="text-foreground">You depend on AppExchange integrations</strong> that don&apos;t exist in HubSpot&apos;s ecosystem. CPQ tools, industry-specific apps, ERP connectors &mdash; check before you move.</li>
            <li><strong className="text-foreground">You have a dedicated Salesforce admin</strong> and your org is well-maintained. The value of Salesforce scales with how well it&apos;s configured. A clean, optimized Salesforce org is genuinely hard to beat.</li>
            <li><strong className="text-foreground">Compliance requires granular data access controls.</strong> Financial services, healthcare, government &mdash; if you need field-level encryption, sharing rules by record type, or audit trails on every object, Salesforce is built for this.</li>
            <li><strong className="text-foreground">Your team has 50+ reps.</strong> At this scale, Salesforce&apos;s forecasting, territory assignment, and reporting start to justify the premium. HubSpot works for large teams, but the power gap widens above 50 users.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Migrate</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Teams with heavy Apex customization.</strong> If you have custom Apex classes running business logic, there&apos;s no HubSpot equivalent. You&apos;d need to rebuild that logic with HubSpot workflows (limited) or external services (expensive).</li>
            <li><strong className="text-foreground">Companies mid-implementation.</strong> If you just finished a Salesforce deployment in the last 12 months, the sunk cost is real. Give it time to prove or disprove its value before migrating again.</li>
            <li><strong className="text-foreground">Organizations that need Salesforce-specific certifications for compliance.</strong> Some regulated industries require CRM platforms with specific certifications (FedRAMP, HIPAA BAA) that HubSpot may not offer at equivalent levels.</li>
            <li><strong className="text-foreground">Teams where the real problem is adoption, not the tool.</strong> If reps aren&apos;t filling in Salesforce, they won&apos;t fill in HubSpot either. Fix the process before swapping platforms.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>
              <strong className="text-foreground">Migrating everything.</strong> Don&apos;t import 7 years of closed-lost deals and contacts who left their companies in 2019. Clean before you move. Import active deals, contacts from the last 18 months, and open pipeline only.
            </li>
            <li>
              <strong className="text-foreground">Underestimating the automation rebuild.</strong> A typical Salesforce org has 15&ndash;40 automation rules (flows, process builders, workflow rules). Each takes 1&ndash;4 hours to rebuild in HubSpot. That&apos;s 30&ndash;160 hours of work people forget to budget for.
            </li>
            <li>
              <strong className="text-foreground">Assuming HubSpot Free or Starter is enough.</strong> Teams come from Salesforce expecting automation, custom reporting, and sequences. Those features live on HubSpot Professional ($890/mo). Starter is a contact database with basic pipeline &mdash; not a Salesforce replacement.
            </li>
            <li>
              <strong className="text-foreground">Running both platforms in parallel for too long.</strong> Two weeks of overlap is healthy. Two months means nobody commits to the new system. Set a hard cutoff date and enforce it.
            </li>
            <li>
              <strong className="text-foreground">Ignoring training.</strong> HubSpot is easier than Salesforce, but it&apos;s still new software. Budget 2&ndash;3 hours of training per user. HubSpot Academy is free and genuinely good &mdash; assign the relevant certifications.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">The Migration Playbook (Step-by-Step)</h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Audit your Salesforce org.</strong> List every custom object, custom field, automation, integration, and report. This inventory determines your migration scope and timeline.</li>
            <li><strong className="text-foreground">Choose your HubSpot tier.</strong> Map Salesforce features to HubSpot tiers. Be honest about what you need on day one vs. what you can add later.</li>
            <li><strong className="text-foreground">Clean your Salesforce data.</strong> Deduplicate contacts, archive stale records, standardize field values. Moving dirty data into a clean system defeats the purpose.</li>
            <li><strong className="text-foreground">Set up HubSpot properties and pipeline.</strong> Create custom properties to match your Salesforce fields. Build your deal pipeline stages. Configure lifecycle stages.</li>
            <li><strong className="text-foreground">Migrate data in stages.</strong> Companies and contacts first. Then deals. Then activities and notes. Test after each stage. Use HubSpot&apos;s native Salesforce import tool or a third-party tool like Import2 or Trujay for complex migrations.</li>
            <li><strong className="text-foreground">Rebuild automations.</strong> Prioritize by business impact. Revenue-critical automations first, nice-to-have notifications last.</li>
            <li><strong className="text-foreground">Reconnect integrations.</strong> Every tool connected to Salesforce needs to be pointed at HubSpot. Email, calendar, Slack, billing, support tools &mdash; test each one.</li>
            <li><strong className="text-foreground">Train the team.</strong> Assign HubSpot Academy courses. Run a live walkthrough of the new pipeline. Get buy-in from at least one sales rep as a champion.</li>
            <li><strong className="text-foreground">Run parallel for 1&ndash;2 weeks.</strong> Both systems active, but all new data goes into HubSpot. Verify nothing falls through the cracks.</li>
            <li><strong className="text-foreground">Cut over.</strong> Disable Salesforce logins. Archive your Salesforce data export. Cancel the subscription after the billing cycle.</li>
          </ol>

          <h2 className="text-xl font-bold mt-10 mb-4">The Bottom Line</h2>
          <p className="text-muted mb-4">
            Moving from Salesforce to HubSpot saves most mid-market companies 40&ndash;60% on CRM costs annually. But the migration itself costs $5K&ndash;$50K in time, consulting, and productivity loss depending on complexity. For teams under 25 with straightforward pipelines, the payback period is usually 3&ndash;6 months. For larger, more complex orgs, it&apos;s 6&ndash;12 months.
          </p>
          <p className="text-muted mb-6">
            The companies that succeed treat it as a process redesign, not just a data move. You&apos;re not replicating Salesforce in HubSpot. You&apos;re building a simpler system that your team will actually use. If you approach it that way, the migration works. If you try to recreate every Salesforce feature in HubSpot, you&apos;ll end up frustrated and over budget.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long does it take to migrate from Salesforce to HubSpot?</h3>
                <p className="text-muted">For small teams (under 10 users) with basic Salesforce setups, expect 1&ndash;2 weeks. Mid-market companies with custom objects and automations typically need 4&ndash;8 weeks. Enterprise migrations with complex Apex customizations can take 3&ndash;6 months. The automation rebuild, not the data transfer, is what takes the most time.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot really cheaper than Salesforce?</h3>
                <p className="text-muted">For most teams under 50 users, yes. HubSpot Sales Hub Professional at $890/month plus $20/seat is significantly cheaper than Salesforce Pro Suite at $100/seat. But you need to account for HubSpot&apos;s contact tier pricing if using Marketing Hub, and the fact that HubSpot Starter ($20/seat) lacks the automation features most Salesforce users expect.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate Salesforce custom objects to HubSpot?</h3>
                <p className="text-muted">Yes, but only on HubSpot Enterprise ($3,600/month), which supports up to 10 custom objects. If your Salesforce org relies heavily on custom objects, this is a significant cost consideration. Many teams restructure their data model during migration to work within HubSpot&apos;s standard objects instead.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What happens to my Salesforce reports and dashboards?</h3>
                <p className="text-muted">They don&apos;t transfer. You rebuild them in HubSpot from scratch. HubSpot&apos;s reporting on Professional tier covers most standard sales reporting needs. For complex cross-object reports, joined reports, or advanced formula fields, you may need HubSpot Enterprise or a third-party BI tool like Databox or Looker.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["salesforce", "hubspot-crm"]}
          comparisons={["hubspot-crm-vs-salesforce"]}
          guides={["salesforce-hidden-costs", "hubspot-pricing-reality"]}
        />
      </article>
    </>
  );
}
