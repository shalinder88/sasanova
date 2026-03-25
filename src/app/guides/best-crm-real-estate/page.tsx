import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Best CRM for Real Estate Agents (Skip the Enterprise Tools)",
  description:
    "Follow Up Boss vs Pipedrive vs HubSpot Free vs Folk compared for real estate agents. Lead source tracking, mobile app quality, contact-to-deal workflows, and pricing for solo agents vs teams.",
};

export default function BestCrmRealEstate() {
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
              Best CRM for Real Estate Agents
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Real Estate
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best CRM for Real Estate Agents (Skip the Enterprise Tools)
          </h1>
          <p className="text-lg text-muted">
            Salesforce is overkill. kvCORE charges $500/month. Most brokerage-provided CRMs are terrible. Real estate agents need a CRM that tracks leads by source, reminds them to follow up, and works on their phone between showings. Here&apos;s how Follow Up Boss, Pipedrive, HubSpot Free, and Folk compare for actual agent workflows &mdash; with honest pricing for solo agents and small teams.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Why Real Estate CRM Is Different ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Why Real Estate Agents Need a Different Kind of CRM</h2>
          <p className="text-muted mb-4">
            General-purpose CRMs are built for SaaS sales teams with 30-day cycles. Real estate has unique requirements that most CRMs handle poorly.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Lead source attribution matters more.</strong> Agents pay for leads from Zillow ($20&ndash;$60 per lead), Realtor.com, Facebook ads, open houses, and referrals. Knowing which source actually closes deals determines where you spend next month&apos;s marketing budget.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Follow-up speed determines conversion.</strong> Responding to an online lead within 5 minutes increases conversion 21x compared to 30 minutes. Your CRM needs to ping your phone instantly, not sit in a dashboard you check twice a day.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Long nurture cycles are the norm.</strong> The average buyer searches for 2&ndash;6 months before purchasing. An agent&apos;s CRM needs to manage hundreds of contacts at different stages &mdash; some actively looking, some 6 months away, some past clients who might refer.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mobile-first is non-negotiable.</strong> Agents live in their cars and at showings. A CRM that requires a laptop to be useful is a CRM that won&apos;t get used.
          </p>

          {/* ── The Four Contenders ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Four CRMs Worth Considering</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Follow Up Boss</strong> is the real-estate-specific option. Built for agents and teams with native lead routing from Zillow, Realtor.com, and 200+ sources. The most popular dedicated real estate CRM for independent agents and small brokerages.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Pipedrive</strong> is a general-purpose sales CRM that adapts well to real estate. The visual pipeline makes it easy to see deals at a glance. No real-estate-specific features, but the core deal tracking and activity reminders are excellent.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot Free</strong> is the zero-cost option with a clear growth path. Unlimited contacts, basic pipeline, and email logging for free. The limitation is automation &mdash; you need Sales Hub Starter ($20/mo) for sequences and the jump to Professional ($100/mo/seat) is steep.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Folk</strong> is the relationship-first CRM. If your business is built on referrals and personal network rather than online leads, Folk&apos;s group-based contact management and LinkedIn import are powerful. No real estate features, but the mental model fits referral-heavy agents.
          </p>

          {/* ── Head-to-Head Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Head-to-Head: Feature Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Follow Up Boss</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Free</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Folk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Built for real estate</td>
                  <td className="px-4 py-2.5 text-green-400">Yes, purpose-built</td>
                  <td className="px-4 py-2.5 text-red-400">No (general sales)</td>
                  <td className="px-4 py-2.5 text-red-400">No (general CRM)</td>
                  <td className="px-4 py-2.5 text-red-400">No (relationship CRM)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lead source tracking</td>
                  <td className="px-4 py-2.5 text-green-400">Native (Zillow, Realtor.com, etc.)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Custom fields</td>
                  <td className="px-4 py-2.5 text-yellow-400">Custom properties</td>
                  <td className="px-4 py-2.5 text-yellow-400">Tags and groups</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Auto lead routing</td>
                  <td className="px-4 py-2.5 text-green-400">Round-robin, rules-based</td>
                  <td className="px-4 py-2.5 text-yellow-400">Via automation (Advanced)</td>
                  <td className="px-4 py-2.5 text-red-400">Manual only (free)</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Speed-to-lead alerts</td>
                  <td className="px-4 py-2.5 text-green-400">Instant push + text</td>
                  <td className="px-4 py-2.5 text-yellow-400">Push notifications</td>
                  <td className="px-4 py-2.5 text-yellow-400">Email notifications</td>
                  <td className="px-4 py-2.5 text-yellow-400">Email notifications</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email + SMS sequences</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in (action plans)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Email only (Advanced+)</td>
                  <td className="px-4 py-2.5 text-red-400">Not on free</td>
                  <td className="px-4 py-2.5 text-yellow-400">Email only (Standard)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Built-in calling</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (with recording)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Add-on ($5/seat/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not on free</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipeline view</td>
                  <td className="px-4 py-2.5 text-green-400">Kanban + list</td>
                  <td className="px-4 py-2.5 text-green-400">Best visual pipeline</td>
                  <td className="px-4 py-2.5 text-green-400">Kanban view</td>
                  <td className="px-4 py-2.5 text-yellow-400">List + groups</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">IDX website integration</td>
                  <td className="px-4 py-2.5 text-green-400">Native</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mobile app quality</td>
                  <td className="px-4 py-2.5 text-green-400">Excellent (4.7 stars)</td>
                  <td className="px-4 py-2.5 text-green-400">Excellent (4.5 stars)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Good (4.2 stars)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Decent (4.0 stars)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Setup time</td>
                  <td className="px-4 py-2.5">1&ndash;2 hours</td>
                  <td className="px-4 py-2.5">30 minutes</td>
                  <td className="px-4 py-2.5">30 minutes</td>
                  <td className="px-4 py-2.5">20 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Contact-to-Deal Workflow ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Contact-to-Deal Workflow for Agents</h2>
          <p className="text-muted mb-4">
            A real estate deal workflow is different from standard sales. Here&apos;s how the typical agent pipeline maps to each CRM.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Follow Up Boss Workflow</h3>
              <p className="text-sm text-muted mb-2">
                Lead arrives from Zillow/Realtor.com &rarr; auto-tagged by source &rarr; instant push notification &rarr; auto-enrolled in action plan (drip sequence) &rarr; agent calls/texts from app &rarr; moves to &quot;Active Buyer&quot; or &quot;Active Seller&quot; stage &rarr; appointment set &rarr; showing &rarr; under contract &rarr; closed.
              </p>
              <p className="text-sm text-muted">
                <strong className="text-foreground">Strength:</strong> The entire flow is pre-configured for real estate. Minimal customization needed.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Pipedrive Workflow</h3>
              <p className="text-sm text-muted mb-2">
                Create a custom pipeline: New Lead &rarr; Contacted &rarr; Showing Scheduled &rarr; Offer Made &rarr; Under Contract &rarr; Closed. Leads come in via web form or Zapier integration from lead sources. Activity reminders keep follow-ups on track.
              </p>
              <p className="text-sm text-muted">
                <strong className="text-foreground">Strength:</strong> The visual pipeline is the best for seeing deal status at a glance. Requires more initial setup but is highly customizable.
              </p>
            </div>
          </div>

          {/* ── Lead Source Tracking ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Lead Source Tracking: Know Where Your Deals Come From</h2>
          <p className="text-muted mb-4">
            Real estate agents spend $500&ndash;$5,000/month on lead generation. Without source tracking, you&apos;re guessing which channels work.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Follow Up Boss</strong> auto-tags lead sources from 200+ integrations. When a Zillow lead arrives, it&apos;s automatically tagged &quot;Zillow&quot; with the property of interest, price range, and timeline. You can run reports showing close rate by source &mdash; essential for budget allocation.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Pipedrive</strong> uses custom fields. You create a &quot;Lead Source&quot; dropdown with your sources and track it per deal. Reporting works but requires manual tagging or Zapier automations to auto-tag. More effort, same outcome.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot Free</strong> tracks &quot;Original Source&quot; automatically for web traffic (organic, paid, social, direct) but doesn&apos;t natively integrate with Zillow or Realtor.com. You can build this with custom properties and Zapier but it&apos;s not out-of-the-box.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Folk</strong> tracks contacts by groups and tags. You&apos;d create a group per source (Zillow Leads, Open House Leads, Referrals). It works for organization but lacks reporting on conversion rate by source without exporting to a spreadsheet.
          </p>

          {/* ── Mobile App Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mobile App Quality: The Make-or-Break Factor</h2>
          <p className="text-muted mb-4">
            If the mobile app is bad, agents won&apos;t use the CRM. Period. Here&apos;s how each one performs in the field.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Follow Up Boss</strong> has the best mobile experience for agents. One-tap calling, SMS from the app (with your business number), lead details visible before answering, and instant access to action plans. The app is clearly designed by people who understand how agents work.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Pipedrive</strong> has an excellent general sales mobile app. Quick access to deals, activities, and contact info. You can log calls, send emails, and update deal stages on the go. Not real-estate-specific, but the core CRM experience is smooth.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot</strong> mobile app is functional but heavy. Loads slowly on older phones. Contact lookup and deal tracking work well. The free tier shows ads for paid features, which is distracting.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Folk</strong> has a basic mobile app. You can view and edit contacts, but the full power of groups and enrichment is better on desktop. Adequate for quick lookups, not for running your business from your phone.
          </p>

          {/* ── Pricing ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Monthly Cost: Solo Agent vs. Small Team (3 Agents)</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Follow Up Boss</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Folk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Solo agent (basic)</td>
                  <td className="px-4 py-2.5">$58/mo (Grow)</td>
                  <td className="px-4 py-2.5">$14/mo (Essential)</td>
                  <td className="px-4 py-2.5">$0 (Free)</td>
                  <td className="px-4 py-2.5">$20/mo (Standard)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Solo agent + sequences</td>
                  <td className="px-4 py-2.5">$58/mo (included)</td>
                  <td className="px-4 py-2.5">$39/mo (Advanced)</td>
                  <td className="px-4 py-2.5">$20/mo (Sales Starter)</td>
                  <td className="px-4 py-2.5">$20/mo (included)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Team of 3 (basic)</td>
                  <td className="px-4 py-2.5">$174/mo ($58 x 3)</td>
                  <td className="px-4 py-2.5">$42/mo ($14 x 3)</td>
                  <td className="px-4 py-2.5">$0 (Free, 5 users)</td>
                  <td className="px-4 py-2.5">$60/mo ($20 x 3)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Team of 3 + lead routing</td>
                  <td className="px-4 py-2.5">$174/mo (included)</td>
                  <td className="px-4 py-2.5">$117/mo ($39 x 3)</td>
                  <td className="px-4 py-2.5">$300/mo (Professional)</td>
                  <td className="px-4 py-2.5">Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Annual cost (solo + seq.)</td>
                  <td className="px-4 py-2.5">$696/yr</td>
                  <td className="px-4 py-2.5">$468/yr</td>
                  <td className="px-4 py-2.5">$240/yr</td>
                  <td className="px-4 py-2.5">$240/yr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mb-4">
            Prices as of March 2026, billed monthly unless noted. HubSpot Professional is per seat. Follow Up Boss pricing includes all real estate features at every tier.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The value calculation:</strong> If Follow Up Boss helps you close one additional deal per year from better lead response time, the $696 annual cost pays for itself 10&ndash;50x over. The tool cost is not the question &mdash; the question is whether you&apos;ll actually use it.
          </p>

          {/* ── Who Should NOT ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Use These Tools</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Large brokerages (20+ agents):</strong> You need enterprise real estate platforms like kvCORE, BoomTown, or Sierra Interactive with IDX websites, team-level reporting, and brokerage-wide lead distribution. The tools in this guide are for individuals and small teams.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Commercial real estate agents:</strong> CRE has different workflow requirements &mdash; property databases, tenant tracking, lease management. Look at ClientLook, AscendixRE, or RealNex. These residential-focused tools don&apos;t fit.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Agents who get fewer than 5 leads per month:</strong> You don&apos;t need a CRM yet. Use your phone&apos;s contacts app with a reminder system. A CRM adds value when you can&apos;t keep track of who to call next from memory.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Agents looking for an IDX website:</strong> Only Follow Up Boss integrates with IDX websites. If your primary need is a property search website that captures leads, look at kvCORE, Ylopo, or Luxury Presence. Then connect that to your CRM.
          </p>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Real Estate Agents Make with CRMs</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Using the brokerage-provided CRM and expecting it to work.</strong> Most brokerage CRMs are white-labeled enterprise platforms configured for the lowest common denominator. They often lack mobile quality, speed-to-lead features, and the integrations agents actually need. Test your brokerage CRM honestly &mdash; if you don&apos;t open it daily, it&apos;s not working.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Over-spending on a CRM before you have consistent leads.</strong> A $500/month CRM for an agent getting 10 leads/month is $50 per lead in CRM costs alone. Start cheap, upgrade when volume justifies it.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Setting up elaborate automation sequences instead of picking up the phone.</strong> Drip campaigns nurture leads. Phone calls close deals. The best agents use their CRM to remind them who to call, not to replace calling with automated emails.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Not tracking lead source from day one.</strong> By the time you realize you need source tracking, you&apos;ve lost months of data. Tag every lead with its source the moment it enters your CRM. This is the most important habit to build.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Importing your entire sphere into the CRM without segmenting.</strong> Your mom, your college roommate, and a hot buyer from Zillow need different treatment. Create groups: Active Buyers, Active Sellers, Sphere (past clients + referral sources), and Cold Leads. Apply different follow-up cadences to each.
          </p>

          {/* ── Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Opinionated Verdict</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Agents getting 20+ online leads per month:</strong> Follow Up Boss at $58/month. The speed-to-lead alerts, native Zillow/Realtor.com integration, and built-in calling pay for themselves with one extra conversion per quarter.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Agents who prefer a visual pipeline and don&apos;t need real-estate-specific features:</strong> Pipedrive at $14/month. Customize the pipeline stages for your workflow, connect via Zapier to your lead sources, and use the excellent mobile app between showings.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Referral-heavy agents (sphere of influence model):</strong> Folk at $20/month. If 80% of your business comes from relationships and referrals, Folk&apos;s contact management, LinkedIn import, and group-based organization match how you actually work.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">New agents watching every dollar:</strong> HubSpot Free. Unlimited contacts, basic pipeline, email logging. Upgrade to Sales Starter ($20/mo) when you need sequences. Move to Follow Up Boss when you have enough lead volume to justify the cost.
            </p>
          </div>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best CRM for real estate agents?</h3>
                <p className="text-muted">Follow Up Boss ($58/month) is the best purpose-built CRM for real estate agents who receive online leads. It offers native integration with Zillow, Realtor.com, and 200+ lead sources, plus built-in calling and SMS. For budget-conscious agents, Pipedrive ($14/month) is the best general-purpose CRM adapted for real estate.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Follow Up Boss worth $58/month for a solo agent?</h3>
                <p className="text-muted">If you receive 15+ online leads per month and your average commission is $5,000+, yes. The speed-to-lead features and automated follow-up sequences increase conversion rates enough that one additional closed deal per year covers 10x the annual cost. If you get fewer than 10 leads per month, start with Pipedrive or HubSpot Free.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use HubSpot Free for real estate?</h3>
                <p className="text-muted">Yes, with limitations. HubSpot Free handles contact management, basic pipeline tracking, and email logging. It lacks native Zillow/Realtor.com integration, speed-to-lead alerts, and real-estate-specific fields. You&apos;ll need to set up custom properties and potentially use Zapier for lead source automation.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use my brokerage&apos;s CRM or buy my own?</h3>
                <p className="text-muted">Test the brokerage CRM first. If you find yourself not opening it daily after two weeks, it&apos;s not the right fit. Many brokerage CRMs are configured for team reporting rather than individual agent productivity. The advantage of your own CRM is portability &mdash; your contact data moves with you if you change brokerages.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/best-crm-freelancers-consultants"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM for Freelancers &amp; Consultants</span>
                <span className="block text-xs text-muted mt-1">Folk vs Pipedrive vs HubSpot Free for solo operators</span>
              </Link>
              <Link
                href="/guides/best-crm-sales-teams"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM for Sales Teams</span>
                <span className="block text-xs text-muted mt-1">HubSpot vs Pipedrive vs Close for teams of 5-25</span>
              </Link>
              <Link
                href="/guides/crm-solo-founder"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM for Solo Founders</span>
                <span className="block text-xs text-muted mt-1">The best setup for founders who hate CRMs</span>
              </Link>
              <Link
                href="/guides/hubspot-pricing-reality"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">HubSpot Pricing Reality</span>
                <span className="block text-xs text-muted mt-1">What it actually costs vs what the website says</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "close-crm", "zoho-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive", "pipedrive-vs-zoho-crm", "zoho-crm-vs-hubspot-crm"]}
            guides={[
              "best-crm-freelancers-consultants",
              "crm-solo-founder",
              "crm-annual-cost-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
