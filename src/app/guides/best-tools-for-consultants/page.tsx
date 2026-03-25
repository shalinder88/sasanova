import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The Consultant's Software Stack: CRM + Scheduling + Invoicing",
  description:
    "The exact software stack for independent consultants under $33/month. CRM (Pipedrive Lite $14/seat or HubSpot Free), scheduling (Calendly free or Cal.com free), invoicing (Wave free or FreshBooks $23/mo). Verified pricing from real vendor pages.",
  openGraph: {
    title: "The Consultant's Software Stack: CRM + Scheduling + Invoicing",
    description:
      "Build a complete consulting business stack for $0-37/month. Every price verified against vendor pages. Includes CRM, scheduling, invoicing, and upgrade triggers.",
  },
};

export default function BestToolsForConsultants() {
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
              Best Tools for Consultants
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Persona Stack
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Consultant&apos;s Software Stack: CRM + Scheduling + Invoicing
          </h1>
          <p className="text-lg text-muted">
            Independent consultants need exactly three things from software: a way to track clients and prospects, a way to let them book time, and a way to send invoices. Everything else is optional. Here&apos;s the complete stack for $0&ndash;$37/month &mdash; every price verified against the actual vendor pricing pages.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack at a Glance ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Complete Consultant Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Budget Pick</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Upgrade Pick</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/hubspot-crm" className="text-accent hover:underline">HubSpot Free</Link> &mdash; $0/mo (unlimited contacts)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/pipedrive" className="text-accent hover:underline">Pipedrive Lite</Link> &mdash; $14/seat/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Scheduling</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/calendly" className="text-accent hover:underline">Calendly Free</Link> &mdash; $0/mo (1 event type)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/cal-com" className="text-accent hover:underline">Cal.com Free</Link> &mdash; $0/mo (unlimited event types)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Invoicing</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/wave" className="text-accent hover:underline">Wave Starter</Link> &mdash; $0/mo (unlimited invoicing)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/freshbooks" className="text-accent hover:underline">FreshBooks Lite</Link> &mdash; $23/mo (5 clients)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Budget Scenarios ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Monthly Cost Breakdown</h2>
          <div className="bg-surface-alt rounded-lg border border-border p-5 mb-6">
            <p className="text-muted mb-3"><strong className="text-foreground">$0/month stack:</strong> HubSpot Free CRM + Calendly Free (1 event type) + Wave Starter (free invoicing) = <strong className="text-green-400">$0/mo</strong></p>
            <p className="text-muted mb-3"><strong className="text-foreground">$14/month stack:</strong> Pipedrive Lite ($14/seat) + Cal.com Free + Wave Starter = <strong className="text-green-400">$14/mo</strong></p>
            <p className="text-muted mb-0"><strong className="text-foreground">$37/month stack:</strong> Pipedrive Lite ($14/seat) + Calendly Free + FreshBooks Lite ($23/mo) = <strong className="text-green-400">$37/mo</strong></p>
          </div>

          {/* ── CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">CRM: Where Your Client Relationships Live</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot Free CRM ($0/mo)</strong> gives you unlimited contacts, a basic deal pipeline, email logging, and meeting scheduling. The free tier is genuinely generous &mdash; no time limit, no contact cap. The catch: email sequences require Starter at $20/seat/mo, and the jump to Professional is $890/mo flat.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Pipedrive Lite ($14/seat/mo)</strong> is purpose-built for deal tracking. The visual pipeline makes it easy to see every prospect at a glance. You get 3,000 deals, 30 custom fields, and lead/deal management. It lacks a free tier but is simpler and faster than HubSpot for pure sales workflows.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> If you manage fewer than 50 active relationships and want $0/mo, start with HubSpot Free. If you close deals through a visual pipeline and want something focused, Pipedrive Lite at $14/seat/mo is worth every penny.
          </p>

          {/* ── Scheduling ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Scheduling: Stop the Email Ping-Pong</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Calendly Free ($0/mo)</strong> gives you 1 event type and 1 calendar connection. For most consultants starting out, one &ldquo;30-minute discovery call&rdquo; event type is enough. Calendly Standard ($12/user/mo) unlocks unlimited event types, group events, and workflows.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Cal.com Free ($0/mo)</strong> gives you unlimited event types and unlimited bookings for free. It&apos;s open source, so you can even self-host. The trade-off is a slightly less polished UX than Calendly, but the value at $0 is hard to beat.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> If you need one event type and want the most recognized brand, Calendly Free works. If you need multiple event types (discovery call, strategy session, check-in) without paying, Cal.com Free is the clear winner.
          </p>

          {/* ── Invoicing ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Invoicing: Get Paid Without Overpaying for Software</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Wave Starter ($0/mo)</strong> offers unlimited invoicing and basic accounting for free. Manual bank entry only on the free plan &mdash; automatic bank imports require Wave Pro at $16/mo. Payment processing is 2.9% + $0.60 per credit card transaction. For consultants who send fewer than 20 invoices a month, Wave is genuinely free and genuinely useful.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">FreshBooks Lite ($23/mo)</strong> is invoicing-first accounting with time tracking, expense tracking, and a client portal. Limited to 5 billable clients on Lite. If you need to track billable hours and send polished proposals, FreshBooks justifies the $23/mo. FreshBooks Plus ($43/mo) raises the limit to 50 clients.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> Wave if you invoice monthly and want $0/mo. FreshBooks if you bill hourly and need time tracking integrated with invoicing.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Salesforce:</strong> Built for 50-person sales teams, not solo consultants. Minimum $25/user/mo, realistically $75+/user with add-ons. Overkill by a factor of 10.</li>
            <li><strong className="text-foreground">QuickBooks Online:</strong> Starts at $30/mo. Unless you have inventory or need payroll, Wave does what consultants need for free.</li>
            <li><strong className="text-foreground">HubSpot Professional ($890/mo):</strong> Consultants who hit HubSpot Free&apos;s limits should upgrade to Pipedrive Lite ($14/seat) or HubSpot Starter ($20/seat), not jump to Professional.</li>
            <li><strong className="text-foreground">Acuity Scheduling:</strong> Now bundled with Squarespace. Unless you already pay for Squarespace, Calendly or Cal.com are better standalone options.</li>
            <li><strong className="text-foreground">Project management tools (at first):</strong> A shared Google Doc or Notion free page is enough until you have 5+ concurrent clients.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Consultants Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Buying a CRM before having clients.</strong> Use a spreadsheet until you have 20+ contacts worth tracking. Then move to HubSpot Free.</li>
            <li><strong className="text-foreground">Paying for scheduling before needing it.</strong> Cal.com gives unlimited event types free. Test demand before paying for Calendly Standard ($12/mo).</li>
            <li><strong className="text-foreground">Choosing FreshBooks when Wave is enough.</strong> If you bill project-based (not hourly), Wave&apos;s free invoicing is all you need. FreshBooks time tracking only matters for hourly billing.</li>
            <li><strong className="text-foreground">Over-investing in automation too early.</strong> Zapier and Make are powerful, but consultants with fewer than 10 clients don&apos;t need workflow automation. The time spent setting it up exceeds the time it saves.</li>
            <li><strong className="text-foreground">Upgrading HubSpot instead of switching.</strong> The path from HubSpot Free to Starter ($20/seat) is reasonable. The path to Professional ($890/mo) is not. Switch to Pipedrive + ActiveCampaign before spending $890/mo.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Do I need a CRM if I only have 5 clients?</h3>
          <p className="text-muted mb-4">
            Probably not. A spreadsheet works until you have 20+ contacts at various stages. But HubSpot Free costs $0, so there&apos;s no financial reason not to start early &mdash; just don&apos;t spend hours customizing it before you have deal flow.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Can I use Calendly Free long-term?</h3>
          <p className="text-muted mb-4">
            Yes, if 1 event type is enough. Most consultants eventually want separate booking links for discovery calls, paid sessions, and check-ins &mdash; which requires Standard ($12/user/mo) or a free switch to Cal.com.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Is Wave really free?</h3>
          <p className="text-muted mb-4">
            Wave Starter is genuinely free for invoicing and basic accounting. They make money on payment processing (2.9% + $0.60 per transaction) and the optional Pro plan ($16/mo) for automatic bank imports. The free plan requires manual bank entry.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">When should I switch from Wave to FreshBooks?</h3>
          <p className="text-muted mb-4">
            When you bill hourly and need integrated time tracking, or when you want a client portal for project collaboration. FreshBooks Lite at $23/mo is specifically designed for service businesses that track time.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">What about proposal software?</h3>
          <p className="text-muted mb-4">
            For most consultants, a well-formatted Google Doc or Notion page works fine. If you send 10+ proposals monthly, PandaDoc or Better Proposals can improve close rates &mdash; but that&apos;s a later optimization, not a starting need.
          </p>
        </div>

        <RelatedLinks
          tools={["hubspot-crm", "pipedrive", "calendly", "cal-com", "wave", "freshbooks"]}
          comparisons={["hubspot-crm-vs-pipedrive", "calendly-vs-cal-com"]}
          guides={[
            "best-crm-freelancers-consultants",
            "scheduling-tool-comparison",
            "accounting-freelancers",
            "crm-solo-founder",
            "automate-lead-capture",
          ]}
        />
      </article>
    </>
  );
}
