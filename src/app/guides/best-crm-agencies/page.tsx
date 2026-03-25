import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM for Agencies: Managing 20+ Clients Without Losing Your Mind",
  description:
    "HubSpot vs Pipedrive vs Close compared for agency workflows. Multi-pipeline management, white-labeling, per-client cost modeling at 10 to 50 clients, and project management integration.",
};

export default function BestCrmAgencies() {
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
              CRM for Agencies
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Agency Operations
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM for Agencies: Managing 20+ Clients Without Losing Your Mind
          </h1>
          <p className="text-lg text-muted">
            Agency CRM is different from startup CRM. You&apos;re not tracking one pipeline &mdash; you&apos;re tracking new business development, active client projects, and renewals simultaneously. You need your account managers to see their clients while the founder sees everything. And the per-seat pricing model that works for a 3-person startup becomes painful when you have 8 people who need CRM access. Here&apos;s how HubSpot, Pipedrive, and Close compare for real agency workflows.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Why Agency CRM Is Different ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Why Agencies Need a Different CRM Approach</h2>
          <p className="text-muted mb-4">
            Most CRM guides assume one sales pipeline selling one product to one type of customer. Agencies juggle three distinct workflows: acquiring new clients (sales), managing existing clients (delivery), and retaining clients (renewals/upsells). A CRM that handles all three without becoming a tangled mess is rare.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">New Business Pipeline</h3>
              <p className="text-sm text-muted">
                Leads, proposals, negotiations, closed-won. Standard sales pipeline. Most CRMs handle this well.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Client Delivery</h3>
              <p className="text-sm text-muted">
                Onboarding, active projects, health scores, escalations. This is where most CRMs fail agencies. It&apos;s not a &ldquo;deal&rdquo; &mdash; it&apos;s an ongoing relationship.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Renewals &amp; Upsells</h3>
              <p className="text-sm text-muted">
                Contract renewals, scope expansions, new service proposals to existing clients. Needs separate tracking from new business.
              </p>
            </div>
          </div>

          {/* ── Head-to-Head Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">HubSpot vs Pipedrive vs Close for Agencies</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Close</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Starting price (per seat)</td>
                  <td className="px-4 py-2.5">$0 (Free) / $20 (Starter)</td>
                  <td className="px-4 py-2.5">$14 (Essential)</td>
                  <td className="px-4 py-2.5">$49 (Startup)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Multiple pipelines</td>
                  <td className="px-4 py-2.5 text-yellow-400">1 on Free / unlimited on Starter+</td>
                  <td className="px-4 py-2.5 text-green-400">Unlimited (all plans)</td>
                  <td className="px-4 py-2.5 text-green-400">Unlimited (all plans)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email sequences</td>
                  <td className="px-4 py-2.5">Starter ($20/mo)</td>
                  <td className="px-4 py-2.5">Advanced ($39/mo)</td>
                  <td className="px-4 py-2.5">All plans (built-in)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Built-in calling</td>
                  <td className="px-4 py-2.5 text-yellow-400">Limited (Starter+)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Add-on</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in (all plans)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">White-label / client portal</td>
                  <td className="px-4 py-2.5 text-yellow-400">HubSpot-branded (free) / custom (Starter+)</td>
                  <td className="px-4 py-2.5 text-red-400">No native client portal</td>
                  <td className="px-4 py-2.5 text-red-400">No client portal</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Team permissions</td>
                  <td className="px-4 py-2.5 text-green-400">Granular (Professional+)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic (visibility sets on Professional)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic role-based</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Reporting depth</td>
                  <td className="px-4 py-2.5 text-green-400">Strong (custom dashboards on Professional)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Moderate (Insights on Professional)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Moderate (built-in reports)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">PM tool integration</td>
                  <td className="px-4 py-2.5 text-green-400">Native ClickUp, Asana, Monday</td>
                  <td className="px-4 py-2.5 text-green-400">Native Asana, Trello; Zapier/Make for rest</td>
                  <td className="px-4 py-2.5 text-yellow-400">Zapier/Make only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">API quality</td>
                  <td className="px-4 py-2.5 text-green-400">Excellent</td>
                  <td className="px-4 py-2.5 text-green-400">Excellent</td>
                  <td className="px-4 py-2.5 text-green-400">Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Multi-Pipeline Strategy ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Multi-Pipeline Management: One Per Client vs. Shared</h2>
          <p className="text-muted mb-4">
            Agencies make one of two structural choices. Both work, but they create very different experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Shared Pipelines (Recommended)</h3>
              <p className="text-sm text-muted mb-2">
                One &ldquo;New Business&rdquo; pipeline, one &ldquo;Active Clients&rdquo; pipeline, one &ldquo;Renewals&rdquo; pipeline. Filter by client using custom fields or tags.
              </p>
              <p className="text-sm text-muted">
                <strong className="text-foreground">Pros:</strong> Simpler reporting, easier to see agency-wide metrics, scales cleanly to 50+ clients.<br />
                <strong className="text-foreground">Cons:</strong> Requires discipline in tagging. Account managers see other clients unless you set up visibility rules.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Per-Client Pipelines</h3>
              <p className="text-sm text-muted mb-2">
                Create a separate pipeline for each major client&apos;s projects. Use for agencies where each client has multiple ongoing workstreams.
              </p>
              <p className="text-sm text-muted">
                <strong className="text-foreground">Pros:</strong> Clean separation, easy client-specific reporting.<br />
                <strong className="text-foreground">Cons:</strong> Becomes unmanageable above 15&ndash;20 clients. Cross-client reporting requires custom dashboards. Pipeline sprawl is real.
              </p>
            </div>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The practical recommendation:</strong> Use 3&ndash;5 shared pipelines with client tags, not per-client pipelines. This scales to 50+ clients without administrative overhead. Both Pipedrive and HubSpot handle this well. Close&apos;s pipeline management is simpler but less flexible for complex multi-stage workflows.
          </p>

          {/* ── Per-Client Cost Modeling ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Per-Client Cost at 10, 20, and 50 Clients</h2>
          <p className="text-muted mb-4">
            CRM cost for agencies scales by seats (people who need access), not by client count. Here&apos;s the real math assuming a typical agency team: 1 founder/sales lead, 2 account managers at 10 clients, growing to 5 AMs at 50 clients.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Clients</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Seats needed</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Starter</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive Lite</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Close Essentials</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 clients</td>
                  <td className="px-4 py-2.5">3 seats</td>
                  <td className="px-4 py-2.5">$20/mo (includes 2)</td>
                  <td className="px-4 py-2.5">$42/mo ($14 &times; 3)</td>
                  <td className="px-4 py-2.5">$147/mo ($49 &times; 3)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">20 clients</td>
                  <td className="px-4 py-2.5">5 seats</td>
                  <td className="px-4 py-2.5">$80/mo ($20 + 3 extra at $20)</td>
                  <td className="px-4 py-2.5">$70/mo ($14 &times; 5)</td>
                  <td className="px-4 py-2.5">$245/mo ($49 &times; 5)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50 clients</td>
                  <td className="px-4 py-2.5">8 seats</td>
                  <td className="px-4 py-2.5">$140/mo ($20 + 6 extra at $20)</td>
                  <td className="px-4 py-2.5 text-green-400">$112/mo ($14 &times; 8)</td>
                  <td className="px-4 py-2.5">$392/mo ($49 &times; 8)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Pipedrive is the cheapest per-seat at scale.</strong> At 8 seats, Pipedrive Lite costs $112/month vs HubSpot Starter at $140/month vs Close at $392/month. But if you need email sequences, Pipedrive Growth at $39/seat ($312/month for 8 seats) closes the gap with HubSpot Sales Hub Professional, which starts at $100/seat ($800/month for 8 seats). Close includes sequences on all plans, making it the better value for outbound-heavy agencies despite the higher per-seat base price.
          </p>

          {/* ── White-Labeling and Client-Facing Portals ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">White-Labeling and Client-Facing Portals</h2>
          <p className="text-muted mb-4">
            Some agencies want to show clients a branded portal with project status, reports, or communications. The CRM options here are limited.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot</strong> is the only CRM in this comparison with a native client-facing capability. The customer portal (available on Service Hub Professional, $100/seat/month) lets clients view tickets and knowledge base articles. For most agencies, this is overkill. A cheaper approach: use HubSpot&apos;s reporting dashboards and share view-only links with clients.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Pipedrive and Close</strong> have no native client portals. If you need client-facing project visibility, pair your CRM with a project management tool that has client access &mdash; ClickUp (guest access on Business plan), Asana (guest access on Premium), or Notion (guest access on Plus).
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The honest take:</strong> Most agency clients don&apos;t want to log into your CRM. They want an email update or a Loom video. Don&apos;t pay for white-labeled portals until clients are explicitly asking for self-service access.
          </p>

          {/* ── Reporting: Owner vs AM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Reporting: Agency Owner vs Account Manager</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Agency Owner Needs</h3>
              <ul className="text-sm text-muted space-y-1.5">
                <li>&bull; Revenue pipeline by stage (what&apos;s closing this month)</li>
                <li>&bull; Client churn rate (retention over time)</li>
                <li>&bull; Average deal size and sales cycle length</li>
                <li>&bull; Revenue per account manager</li>
                <li>&bull; New business vs renewal split</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Account Manager Needs</h3>
              <ul className="text-sm text-muted space-y-1.5">
                <li>&bull; My clients and their current status</li>
                <li>&bull; Upcoming renewals and deadlines</li>
                <li>&bull; Activity log (calls, emails, meetings)</li>
                <li>&bull; Tasks and follow-up reminders</li>
                <li>&bull; Client contact details and notes</li>
              </ul>
            </div>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot Professional</strong> handles both views well with custom dashboards and filtered views. The catch: Professional costs $100/seat/month. <strong className="text-foreground">Pipedrive Premium</strong> ($49/seat) offers Insights dashboards that cover most owner-level metrics. <strong className="text-foreground">Close</strong> has solid built-in reports for sales activity but weaker custom reporting for client delivery metrics.
          </p>

          {/* ── PM Tool Integration ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Integration with Project Management</h2>
          <p className="text-muted mb-4">
            The CRM tracks the relationship. The PM tool tracks the work. Keeping them in sync is the operational challenge every agency faces.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">CRM &rarr; PM Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Integration method</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What syncs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot &rarr; ClickUp</td>
                  <td className="px-4 py-2.5">Native integration</td>
                  <td className="px-4 py-2.5">Contacts, deals, tasks. Auto-create ClickUp tasks from deals.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot &rarr; Asana</td>
                  <td className="px-4 py-2.5">Native integration</td>
                  <td className="px-4 py-2.5">Deal-to-project automation, task sync.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive &rarr; Asana</td>
                  <td className="px-4 py-2.5">Native + Zapier/Make</td>
                  <td className="px-4 py-2.5">Basic native sync. Deeper workflows via automation tools.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive &rarr; ClickUp</td>
                  <td className="px-4 py-2.5">Zapier/Make</td>
                  <td className="px-4 py-2.5">Deal won &rarr; create project. Contact sync.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Close &rarr; any PM</td>
                  <td className="px-4 py-2.5">Zapier/Make only</td>
                  <td className="px-4 py-2.5">Custom automations. No native PM integrations.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            The most common agency workflow: when a deal is marked &ldquo;Closed Won&rdquo; in the CRM, automatically create a project in ClickUp/Asana with the client&apos;s details. HubSpot handles this natively. Pipedrive and Close require Zapier or Make to set it up, but it works reliably once configured.
          </p>

          {/* ── The Opinionated Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Opinionated Verdict</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">For agencies under 20 clients focused on cost efficiency</strong> &mdash; Pipedrive Lite at $14/seat. The visual pipeline, unlimited pipelines on all plans, and low per-seat cost make it the default. Upgrade to Advanced ($39/seat) when you need email sequences and workflow automation.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">For agencies that also run marketing for clients</strong> &mdash; HubSpot. The Sales + Marketing Hub combination is unmatched if you need both CRM and marketing automation in one platform. Start with Starter ($20/month for 2 seats), but budget for the Professional jump ($100/seat) when reporting needs grow.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">For outbound-heavy agencies (cold email, cold calling)</strong> &mdash; Close at $49/seat. Built-in calling, email sequences on every plan, and a UI designed for high-volume outreach. It&apos;s expensive but purpose-built for agencies where new business comes from outbound activity.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">For agencies under 10 clients with no sales team</strong> &mdash; HubSpot Free. It handles basic pipeline and contact management at $0. Upgrade when you need sequences, permissions, or reporting beyond the free tier&apos;s basics.
            </p>
          </div>

          {/* ── Who Should NOT Use These ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Use This Guide</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Solo consultants with 3&ndash;5 clients.</strong> You don&apos;t need multi-pipeline management or team permissions. Use Folk ($20/month) or Pipedrive Lite ($14/month) for simple contact tracking. See our freelancer CRM guide instead.</li>
            <li><strong className="text-foreground">Agencies with 100+ clients and dedicated ops teams.</strong> At this scale you need Salesforce or HubSpot Enterprise with custom objects, advanced workflows, and dedicated admin support. The tools in this guide are built for the 10&ndash;50 client range.</li>
            <li><strong className="text-foreground">Agencies where the CRM is the PM tool.</strong> If you want to manage project delivery inside your CRM, none of these are the right choice. Use ClickUp or Monday.com with CRM features, or accept that CRM and PM are separate tools connected by automation.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>
              <strong className="text-foreground">Creating a pipeline for every client.</strong> At 5 clients, per-client pipelines feel organized. At 25 clients, they&apos;re unmanageable. Use shared pipelines with client tags from day one.
            </li>
            <li>
              <strong className="text-foreground">Giving every team member admin access.</strong> Account managers should see their clients, not edit pipeline structures or delete contacts. Set up role-based permissions before your third hire, not after someone accidentally deletes a pipeline stage.
            </li>
            <li>
              <strong className="text-foreground">Not tracking client health in the CRM.</strong> Your CRM should tell you which clients are at risk of churning. Add a custom field for client health (green/yellow/red) and review it weekly. Agencies that track health retain 20&ndash;30% more clients.
            </li>
            <li>
              <strong className="text-foreground">Choosing HubSpot Professional too early.</strong> The jump from Starter ($20/month) to Professional ($100/seat/month) is massive. At 5 seats, that&apos;s $500/month. Most agencies don&apos;t need custom reporting or advanced automation until they have 30+ clients and a dedicated ops person.
            </li>
            <li>
              <strong className="text-foreground">Ignoring the CRM-to-PM handoff.</strong> The moment a deal closes, there should be an automated workflow creating a project in your PM tool with the client&apos;s details. Manual handoffs mean dropped balls. Set up this automation in week one.
            </li>
          </ul>

          {/* ── The Bottom Line ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Bottom Line</h2>
          <p className="text-muted mb-6">
            Pipedrive Lite at $14/seat is the default agency CRM for cost-conscious teams managing 10&ndash;50 clients. HubSpot is the growth path for agencies that need marketing + sales in one platform. Close is the pick for outbound-heavy new business development. Whichever you choose, use shared pipelines with client tags, set up role-based permissions early, and automate the CRM-to-PM handoff from day one.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best CRM for a marketing agency?</h3>
                <p className="text-muted">Pipedrive Lite ($14/seat) for agencies focused on client management and deal tracking. HubSpot for agencies that also run marketing campaigns and need the CRM + marketing automation in one platform. Close ($49/seat) for agencies where new business comes primarily from cold outreach.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should agencies use one pipeline or multiple pipelines?</h3>
                <p className="text-muted">Use 3&ndash;5 shared pipelines (New Business, Active Clients, Renewals) with client tags for filtering. Avoid creating per-client pipelines &mdash; they become unmanageable above 15 clients and make cross-client reporting difficult.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does a CRM cost for an 8-person agency?</h3>
                <p className="text-muted">Pipedrive Lite: $112/month (8 seats &times; $14). HubSpot Starter: approximately $140/month. Close Essentials: $392/month (8 seats &times; $49). Per-seat pricing means agency CRM costs scale linearly with team size, not client count.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use HubSpot Free for an agency?</h3>
                <p className="text-muted">HubSpot Free works for agencies with under 10 clients and 2&ndash;3 team members. The limitations that matter for agencies: only 1 pipeline, no email sequences, no team permissions beyond basic access, and limited reporting. Most agencies outgrow Free within 6 months.</p>
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
                <span className="block text-xs text-muted mt-1">Simpler CRM for solo operators</span>
              </Link>
              <Link
                href="/guides/best-crm-sales-teams"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM for Sales Teams of 5&ndash;25</span>
                <span className="block text-xs text-muted mt-1">HubSpot vs Pipedrive vs Close deep dive</span>
              </Link>
              <Link
                href="/guides/best-automation-tool-agencies"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Automation Tools for Agencies</span>
                <span className="block text-xs text-muted mt-1">Per-client workspace costs at scale</span>
              </Link>
              <Link
                href="/guides/hubspot-pricing-reality"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">HubSpot Pricing Reality</span>
                <span className="block text-xs text-muted mt-1">The Starter-to-Professional cliff explained</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "close-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive", "hubspot-crm-vs-close-crm", "close-crm-vs-pipedrive"]}
            guides={[
              "best-crm-sales-teams",
              "crm-annual-cost-2026",
              "hubspot-pricing-reality",
            ]}
          />
        </div>
      </article>
    </>
  );
}
