import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Software Stack for Real Estate Agents Under $50/Month",
  description:
    "The exact software stack for real estate agents under $50/month. CRM (Pipedrive Lite $14/seat or HubSpot Free), scheduling (Calendly free), email (Kit free for 10K subs), automation (Zapier free). All prices verified.",
  openGraph: {
    title: "Software Stack for Real Estate Agents Under $50/Month",
    description:
      "CRM, scheduling, email marketing, and automation for real estate agents. Complete stack from $0 to $14/month with verified pricing.",
  },
};

export default function BestToolsForRealEstateAgents() {
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
              Best Tools for Real Estate Agents
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
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Software Stack for Real Estate Agents Under $50/Month
          </h1>
          <p className="text-lg text-muted">
            Most real estate CRMs charge $300&ndash;$500/month and lock you into annual contracts. You don&apos;t need them. A solo agent or small team can run client tracking, scheduling, email nurturing, and lead automation for under $50/month &mdash; or $0 if you&apos;re just starting out.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Complete Real Estate Agent Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/hubspot-crm" className="text-accent hover:underline">HubSpot CRM</Link></td>
                  <td className="px-4 py-2.5 text-muted">Free Tools</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM (alt)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/pipedrive" className="text-accent hover:underline">Pipedrive</Link></td>
                  <td className="px-4 py-2.5 text-muted">Lite</td>
                  <td className="px-4 py-2.5 text-muted">$14/seat</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Scheduling</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/calendly" className="text-accent hover:underline">Calendly</Link></td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/convertkit" className="text-accent hover:underline">Kit (ConvertKit)</Link></td>
                  <td className="px-4 py-2.5 text-muted">Newsletter (Free)</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/zapier" className="text-accent hover:underline">Zapier</Link></td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Total (budget stack)</td>
                  <td className="px-4 py-2.5 font-semibold text-green-400">$0/mo</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Total (with Pipedrive)</td>
                  <td className="px-4 py-2.5 font-semibold text-muted">$14/mo</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ── CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">CRM: Track Leads by Source</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot Free ($0/mo)</strong> gives you unlimited contacts, a basic deal pipeline, email logging, and meeting scheduling. Custom properties let you track lead source (Zillow, open house, referral). The free plan includes 2,000 email sends/month with HubSpot branding.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Pipedrive Lite ($14/seat/mo)</strong> is a better fit if you think visually about your pipeline. Drag deals from &ldquo;Initial Contact&rdquo; to &ldquo;Showing Scheduled&rdquo; to &ldquo;Offer Made&rdquo; to &ldquo;Closed.&rdquo; You get 3,000 deals and 30 custom fields on Lite. Growth ($39/seat) adds email sync and automations.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why not a real estate CRM?</strong> Follow Up Boss starts around $69/user/mo. kvCORE is $500+/mo. These are excellent for teams of 5+ agents with heavy online lead volume, but a solo agent or 2-person team gets better value from Pipedrive + Zapier at a fraction of the cost.
          </p>

          {/* ── Scheduling ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Scheduling: Let Clients Book Showings</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Calendly Free ($0/mo)</strong> gives you 1 event type and basic calendar integration. Use it for &ldquo;Schedule a Consultation&rdquo; on your website. Upgrade to Standard ($12/user/mo) when you need separate booking pages for buyer consultations, seller listings, and open house follow-ups.
          </p>

          {/* ── Email ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email: Nurture Leads Over Months</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit Newsletter (Free, $0/mo)</strong> supports up to 10,000 subscribers with unlimited sends. This is more than enough for most agents&apos; email lists. Send market updates, new listings, and neighborhood insights. The free plan lacks advanced automations &mdash; Kit Creator ($39/mo) unlocks those.
          </p>

          {/* ── Automation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation: Connect Everything</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Zapier Free ($0/mo)</strong> gives you 100 tasks/month with two-step Zaps. Use it to automatically add Calendly bookings to HubSpot, or send a Kit welcome email when a new lead appears. Professional ($29.99/mo) unlocks multi-step Zaps and 750 tasks/month when you need more.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Follow Up Boss ($69+/user/mo):</strong> Excellent for teams of 5+ with online lead sources, but overkill for solo agents who can replicate 80% of the value with Pipedrive + Zapier.</li>
            <li><strong className="text-foreground">kvCORE ($500+/mo):</strong> Enterprise-level platform designed for brokerages. Not a fit for individual agents on a budget.</li>
            <li><strong className="text-foreground">Mailchimp for email:</strong> Free tier limits you to 250 contacts and 500 sends/month. Kit&apos;s free plan gives 10,000 subscribers with unlimited sends &mdash; dramatically better for real estate agents building a local list.</li>
            <li><strong className="text-foreground">Social media scheduling tools (at first):</strong> Posting manually on Instagram and Facebook takes 10 minutes a day. Buffer Essentials ($6/channel/mo) makes sense once you manage 4+ channels consistently.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Real Estate Agents Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Signing annual contracts for expensive CRMs.</strong> Start free. Upgrade only when you can measure the revenue each tool generates.</li>
            <li><strong className="text-foreground">Not tracking lead sources.</strong> If you don&apos;t know which leads come from Zillow vs. open houses vs. referrals, you can&apos;t optimize your marketing spend. Set up custom fields in HubSpot or Pipedrive from day one.</li>
            <li><strong className="text-foreground">Ignoring email nurturing.</strong> Real estate has long sales cycles (2&ndash;6 months). A monthly newsletter to your contact list keeps you top-of-mind. Kit&apos;s free plan makes this cost nothing.</li>
            <li><strong className="text-foreground">Paying for automation before having volume.</strong> Zapier Free (100 tasks/mo) is enough until you&apos;re generating 50+ leads per month.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Can I really run a real estate business on free tools?</h3>
          <p className="text-muted mb-4">
            Yes, for a solo agent doing under 20 transactions a year. HubSpot Free CRM + Calendly Free + Kit Free + Zapier Free costs $0/mo and covers contact tracking, scheduling, email, and basic automation.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">When should I upgrade to Pipedrive?</h3>
          <p className="text-muted mb-4">
            When you find yourself losing track of deals in HubSpot or wanting a visual pipeline. Pipedrive Lite ($14/seat/mo) is built for deal-focused workflows where you need to see every opportunity at a glance.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">What if I have a team of 3 agents?</h3>
          <p className="text-muted mb-4">
            Pipedrive Lite at $14/seat means $42/mo for 3 agents with shared pipeline. Add Calendly Standard ($12/user x 3 = $36/mo) for individual booking pages. Total: $78/mo for the team. Still far cheaper than Follow Up Boss or kvCORE.
          </p>
        </div>

        <RelatedLinks
          tools={["hubspot-crm", "pipedrive", "calendly", "convertkit", "zapier"]}
          comparisons={["hubspot-crm-vs-pipedrive"]}
          guides={[
            "best-crm-real-estate",
            "how-to-choose-crm",
            "scheduling-tool-comparison",
            "when-hubspot-stops-being-cheap",
            "automate-lead-capture",
          ]}
        />
      </article>
    </>
  );
}
