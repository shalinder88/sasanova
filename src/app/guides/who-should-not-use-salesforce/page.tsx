import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Salesforce (Save Yourself $50K/Year)",
  description:
    "Salesforce is the most powerful CRM on the market — and the easiest to waste money on. Here are 5 situations where Salesforce is the wrong choice, with real cost breakdowns and specific alternatives.",
};

export default function WhoShouldNotUseSalesforce() {
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
              Who Should NOT Use Salesforce
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Anti-Recommendation
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use Salesforce (Save Yourself $50K/Year)
          </h1>
          <p className="text-lg text-muted">
            Salesforce is the most powerful CRM ever built. It&apos;s also the most expensive, the most complex, and the most likely to sit unused after a painful implementation. Here&apos;s who should avoid it &mdash; and what actually works better for each situation.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Implementation Cost Nobody Mentions ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Implementation Cost Nobody Mentions</p>
            <p className="text-sm text-muted mb-2">
              Salesforce&apos;s pricing page says $25/user/month (Starter Suite). What actually happens:
            </p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>Licenses: $25&ndash;$330/user/month depending on edition</li>
              <li>Implementation consultant: $10,000&ndash;$50,000+ for initial setup</li>
              <li>Dedicated admin salary: $60,000&ndash;$100,000/year (you will need one)</li>
              <li>AppExchange add-ons: $5&ndash;$100/user/month per add-on</li>
              <li>Data storage overages: $125/month per additional GB after 10GB</li>
              <li>Annual contract (no monthly option on most plans)</li>
            </ul>
            <p className="text-sm text-muted mt-2">
              A 20-person team on Professional Edition ($80/user/month) with implementation and one part-time admin: ~$50,000/year. That&apos;s before any add-ons or customization.
            </p>
          </div>

          {/* ── Case 1: Under 20 People ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Companies Under 20 People</h2>
          <p className="text-muted mb-4">
            Salesforce was designed for enterprise. The interface reflects this: it&apos;s powerful but dense, with a learning curve measured in weeks, not hours. For a company of 5&ndash;15 people, you&apos;ll spend more time configuring Salesforce than actually selling. The administrative overhead alone &mdash; managing users, custom fields, page layouts, automation rules, and reports &mdash; requires dedicated time that small teams don&apos;t have.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">10 Users/Year</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Setup Time</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Admin Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Salesforce Professional</td>
                  <td className="px-4 py-2.5">$9,600/yr + $10K&ndash;$30K impl.</td>
                  <td className="px-4 py-2.5">4&ndash;12 weeks</td>
                  <td className="px-4 py-2.5">Yes (part-time minimum)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Professional</td>
                  <td className="px-4 py-2.5">$10,680/yr + $3K onboarding</td>
                  <td className="px-4 py-2.5">1&ndash;2 weeks</td>
                  <td className="px-4 py-2.5">No (self-service)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Advanced</td>
                  <td className="px-4 py-2.5">$3,480/yr</td>
                  <td className="px-4 py-2.5">1&ndash;2 days</td>
                  <td className="px-4 py-2.5">No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">HubSpot</strong> &mdash; Free CRM with optional Sales Hub ($20&ndash;$890/month). Self-service setup, no implementation consultant needed, and a gentler learning curve. Best for marketing-led B2B companies. <Link href="/tools/hubspot-crm" className="text-accent hover:underline">See HubSpot review</Link></li>
              <li><strong className="text-foreground">Pipedrive</strong> &mdash; $14&ndash;$99/seat/month. Purpose-built for sales teams. Setup takes hours, not weeks. Visual pipeline, email sync, and automation included. Best for sales-focused teams under 20. <Link href="/tools/pipedrive" className="text-accent hover:underline">See Pipedrive review</Link></li>
            </ul>
          </div>

          {/* ── Case 2: No Dedicated Admin ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Teams Without a Dedicated Admin</h2>
          <p className="text-muted mb-4">
            Salesforce is not a &ldquo;set it and forget it&rdquo; CRM. It requires ongoing administration: managing user accounts, updating page layouts, maintaining automation rules (Flows), fixing broken integrations, building reports, and handling data quality. Without a dedicated admin (or at minimum, someone spending 10+ hours/week on Salesforce maintenance), the system degrades.
          </p>
          <p className="text-muted mb-4">
            The Salesforce admin job market exists for a reason. Salesforce Certified Administrators command $60,000&ndash;$100,000+ in salary because the product is complex enough to require a full-time caretaker. If your budget doesn&apos;t include this role, Salesforce will become an expensive contact list within 6 months.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Hidden Admin Cost</p>
            <p className="text-sm text-muted">
              Even fractional Salesforce admin services (outsourced) cost $2,000&ndash;$5,000/month for 10&ndash;20 hours of maintenance. Add this to your total cost of ownership when evaluating Salesforce.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">HubSpot</strong> &mdash; Designed for self-service administration. Most configuration is point-and-click with no code required. Your team can manage HubSpot without a specialist. <Link href="/tools/hubspot-crm" className="text-accent hover:underline">See HubSpot review</Link></li>
              <li><strong className="text-foreground">Pipedrive</strong> &mdash; Minimal admin overhead. Pipeline stages, custom fields, and automations are configured by any team member in minutes, not days. <Link href="/tools/pipedrive" className="text-accent hover:underline">See Pipedrive review</Link></li>
            </ul>
          </div>

          {/* ── Case 3: No Complex Sales Process ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Startups Without Complex Sales Processes Yet</h2>
          <p className="text-muted mb-4">
            Salesforce shines when you have a defined, multi-stage sales process with territory management, lead scoring, opportunity splits, quote-to-cash workflows, and cross-object automation. If your sales process is &ldquo;someone fills out a form, we email them, maybe we hop on a call,&rdquo; Salesforce is a fighter jet for a trip to the grocery store.
          </p>
          <p className="text-muted mb-4">
            Startups need to discover their sales process before they automate it. Salesforce is built to optimize and scale a known process. Using it to figure out your process is like writing a textbook before taking the class.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Pipedrive</strong> &mdash; Flexible enough to adapt as you figure out your process. Visual pipeline that you can restructure in minutes. Upgrade to Salesforce later when you genuinely need it. <Link href="/tools/pipedrive" className="text-accent hover:underline">See Pipedrive review</Link></li>
              <li><strong className="text-foreground">HubSpot Free</strong> &mdash; Start with $0, add features as your process matures. The upgrade path from HubSpot Free to Salesforce is well-documented and commonly traveled. <Link href="/tools/hubspot-crm" className="text-accent hover:underline">See HubSpot review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: Haven't Outgrown HubSpot ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Anyone Who Hasn&apos;t Outgrown HubSpot Professional</h2>
          <p className="text-muted mb-4">
            The most common reason companies move to Salesforce is that they &ldquo;want something more powerful.&rdquo; The most common outcome: they spend $50K+ on migration and implementation only to use 20% of Salesforce&apos;s capabilities &mdash; the same 20% HubSpot already provided.
          </p>
          <p className="text-muted mb-4">
            Before switching to Salesforce, honestly assess: are you hitting HubSpot&apos;s actual limits (custom objects, workflow complexity, API rate limits, reporting depth)? Or do you just feel like you should have Salesforce because you&apos;re &ldquo;big enough&rdquo;? The former is a valid reason to switch. The latter will cost you $50K to learn that HubSpot was fine.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Signs You&apos;ve Actually Outgrown HubSpot</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>You need more than 10 custom objects</li>
              <li>Your workflow logic exceeds HubSpot&apos;s 500-action limit per workflow</li>
              <li>You need CPQ (configure, price, quote) beyond basic quotes</li>
              <li>Territory management for 50+ sales reps</li>
              <li>API rate limits are blocking your integrations</li>
              <li>Multi-entity reporting (across business units) is required</li>
            </ul>
            <p className="text-sm text-muted mt-2">
              If none of these apply, you haven&apos;t outgrown HubSpot. Stay and save the money.
            </p>
          </div>

          {/* ── Case 5: Annual Contract ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">5. The Annual Contract Lock-In</h2>
          <p className="text-muted mb-4">
            Most Salesforce editions require annual contracts with no monthly billing option. Professional Edition ($80/user/month) for 20 users is a $19,200 annual commitment &mdash; paid upfront or in annual installments, but locked in regardless. If you realize after 3 months that Salesforce isn&apos;t working, you&apos;re paying for the remaining 9 months anyway.
          </p>
          <p className="text-muted mb-4">
            Salesforce&apos;s Starter Suite ($25/user/month) does offer monthly billing, but it&apos;s a stripped-down version that lacks the customization, automation, and reporting that make Salesforce worth using. It&apos;s essentially HubSpot Free with a Salesforce logo and a higher price.
          </p>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Salesforce IS Justified</h2>
          <p className="text-muted mb-4">
            Salesforce earns its price in three specific scenarios:
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Scenario 1: 50+ user sales organizations with complex, defined processes.</strong> Territory management, opportunity splits, multi-currency deals, CPQ workflows, and approval chains. When your sales motion has this level of complexity, Salesforce&apos;s customization depth is unmatched. No other CRM handles enterprise sales operations at this scale.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Scenario 2: Regulated industries requiring specific compliance.</strong> Salesforce Shield ($10/user/month add-on) provides platform encryption, event monitoring, and field audit trails. Salesforce Health Cloud and Financial Services Cloud are purpose-built for regulated verticals. If your compliance team requires these certifications, Salesforce (or Microsoft Dynamics) are your only real options.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Scenario 3: Companies that need deep integration with the Salesforce ecosystem.</strong> If your industry has critical AppExchange packages, your partners require Salesforce-to-Salesforce integration, or your data warehouse pipeline depends on Salesforce&apos;s APIs, the switching cost exceeds the cost savings from alternatives. The ecosystem lock-in is real, and sometimes it&apos;s the right call.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What does Salesforce actually cost per year for a real team?</h3>
                <p className="text-muted">For a 20-person team on Professional Edition: ~$19,200/year in licenses + $10,000&ndash;$30,000 for initial implementation + $60,000&ndash;$100,000 for a dedicated admin + $5,000&ndash;$20,000/year in AppExchange add-ons. Realistic all-in cost: $50,000&ndash;$80,000 in year one, $40,000&ndash;$60,000/year ongoing.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Salesforce without a consultant?</h3>
                <p className="text-muted">Technically yes, with Salesforce Starter Suite ($25/user/month). For Professional or Enterprise editions, self-implementation is possible if you have someone on team who is already Salesforce-certified. For most companies without internal Salesforce expertise, a consultant is not optional &mdash; it&apos;s the difference between a working CRM and an expensive spreadsheet.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I switch from HubSpot to Salesforce?</h3>
                <p className="text-muted">When you&apos;ve genuinely hit HubSpot&apos;s limits: you need more than 10 custom objects, your sales process requires territory management or CPQ, your team exceeds 50 users, or compliance requirements mandate Salesforce-specific features. If you&apos;re switching because Salesforce sounds more &ldquo;enterprise,&rdquo; you&apos;re not ready.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I try Salesforce before committing?</h3>
                <p className="text-muted">Salesforce offers a 30-day free trial. That&apos;s enough to test the UI but not enough to properly configure and evaluate it. Real Salesforce evaluation takes 2&ndash;3 months, which means you&apos;ll be on a paid annual contract for most of the evaluation period. This is by design.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Salesforce Starter Suite worth it?</h3>
                <p className="text-muted">At $25/user/month with monthly billing, Starter Suite is a reasonable entry point. But it lacks most of what makes Salesforce powerful: custom objects, advanced automation (Flows), approval processes, and deep reporting. It&apos;s essentially a contact manager with the Salesforce name. HubSpot Free or Pipedrive Essential offer more functionality at a lower (or zero) price.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["salesforce", "hubspot-crm", "pipedrive"]}
          comparisons={["hubspot-crm-vs-salesforce", "hubspot-crm-vs-pipedrive", "pipedrive-vs-salesforce"]}
          guides={["salesforce-hidden-costs", "migrate-salesforce-to-hubspot", "best-crm-sales-teams", "hubspot-pricing-reality"]}
        />
      </article>
    </>
  );
}
