import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Software for Nonprofits: Free and Discounted Options",
  description:
    "Free and discounted software for nonprofits. CRM (HubSpot Free, unlimited contacts), email (Mailchimp free 250 contacts or Kit free 10K), PM (Notion free or ClickUp free). Many tools offer nonprofit discounts. Verified pricing.",
  openGraph: {
    title: "Software for Nonprofits: Free and Discounted Options",
    description:
      "The complete nonprofit software stack at $0/month using verified free tiers. Plus nonprofit discount programs from major vendors.",
  },
};

export default function BestToolsForNonprofit() {
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
              Best Tools for Nonprofits
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
            Software for Nonprofits: Free and Discounted Options
          </h1>
          <p className="text-lg text-muted">
            Nonprofits operate on tight budgets, but that doesn&apos;t mean settling for bad tools. Many SaaS companies offer genuinely generous free tiers that work perfectly for organizations under 50 people. Here&apos;s a complete stack at $0/month using verified free plans &mdash; plus information on nonprofit discount programs.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The $0/Month Nonprofit Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier Limits</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/hubspot-crm" className="text-accent hover:underline">HubSpot CRM</Link></td>
                  <td className="px-4 py-2.5 text-muted">Unlimited contacts, basic pipeline, 2,000 emails/mo</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/convertkit" className="text-accent hover:underline">Kit (ConvertKit)</Link></td>
                  <td className="px-4 py-2.5 text-muted">10,000 subscribers, unlimited sends</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email (alt)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/mailchimp" className="text-accent hover:underline">Mailchimp</Link></td>
                  <td className="px-4 py-2.5 text-muted">250 contacts, 500 sends/mo</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Project Management</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/notion" className="text-accent hover:underline">Notion</Link></td>
                  <td className="px-4 py-2.5 text-muted">Unlimited pages, 7-day history, 10 guests</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">PM (alt)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/clickup" className="text-accent hover:underline">ClickUp</Link></td>
                  <td className="px-4 py-2.5 text-muted">Unlimited tasks, unlimited members, 100MB storage</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Forms</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/tally" className="text-accent hover:underline">Tally</Link></td>
                  <td className="px-4 py-2.5 text-muted">Unlimited forms, unlimited submissions</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Communication</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/discord" className="text-accent hover:underline">Discord</Link></td>
                  <td className="px-4 py-2.5 text-muted">Unlimited messages, voice/video</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Total Monthly Cost</td>
                  <td className="px-4 py-2.5 font-semibold text-green-400">$0/mo</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ── CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">CRM: HubSpot Free (Unlimited Contacts)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot Free CRM</strong> is the strongest free CRM for nonprofits. You get unlimited contacts, a basic deal pipeline, email logging, live chat, and forms. The 2,000 emails/month limit with HubSpot branding is the main constraint. HubSpot also offers a 40% nonprofit discount on paid plans through their Nonprofits program.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When to upgrade:</strong> HubSpot Starter at $20/seat/mo removes branding and adds email health reporting. The jump to Professional ($890/mo) is almost never justified for nonprofits. If you need automations, pair HubSpot Free with Zapier Free or Make Free instead.
          </p>

          {/* ── Email ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email: Kit Free or Mailchimp Free</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit Newsletter (Free)</strong> gives 10,000 subscribers with unlimited sends. This is the better choice for nonprofits building a donor or supporter list. Kit was built for creators, but the subscriber-first model works well for nonprofits running newsletters about their mission.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mailchimp Free</strong> limits you to 250 contacts and 500 sends/month. Mailchimp does offer a 15% nonprofit discount on paid plans. If your list is under 250 people, Mailchimp&apos;s templates and drag-and-drop builder may be easier to use than Kit.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> Kit Free if your list exceeds 250 contacts (or will soon). Mailchimp Free if you have a tiny list and prefer visual email building.
          </p>

          {/* ── PM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Project Management: Notion Free or ClickUp Free</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Notion Free</strong> gives unlimited pages for individuals with 7-day page history and 10 guest collaborators. Use it as a wiki, project tracker, and document hub. Notion also offers a free Plus plan for nonprofits and educators &mdash; apply through their credit programs.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ClickUp Free</strong> gives unlimited tasks and unlimited members with 100MB storage. Better for structured project management with task assignments, due dates, and status tracking. ClickUp Unlimited ($10/member/mo) is the first upgrade when you need unlimited storage and integrations.
          </p>

          {/* ── Nonprofit Discount Programs ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Nonprofit Discount Programs Worth Knowing</h2>
          <div className="bg-surface-alt rounded-lg border border-border p-5 mb-6">
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li><strong className="text-foreground">HubSpot for Nonprofits:</strong> 40% discount on paid plans</li>
              <li><strong className="text-foreground">Mailchimp:</strong> 15% discount for verified nonprofits</li>
              <li><strong className="text-foreground">Notion:</strong> Free Plus plan for nonprofits (apply via credits program)</li>
              <li><strong className="text-foreground">Canva:</strong> Canva for Nonprofits offers free Pro access for verified organizations</li>
              <li><strong className="text-foreground">Google Workspace:</strong> Google for Nonprofits provides free Business Standard accounts</li>
              <li><strong className="text-foreground">Slack:</strong> Slack for Nonprofits offers 85% discount on Pro and Business+ plans</li>
              <li><strong className="text-foreground">Asana:</strong> 50% discount for verified nonprofits</li>
            </ul>
          </div>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Salesforce Nonprofit Cloud:</strong> Salesforce offers 10 free licenses for nonprofits, but implementation complexity is extreme. Most small nonprofits abandon Salesforce within 6 months. HubSpot Free is simpler and requires no consultant.</li>
            <li><strong className="text-foreground">Dedicated nonprofit CRMs (Bloomerang, Little Green Light):</strong> These start at $99&ndash;$199/mo. HubSpot Free does donor tracking with custom properties for $0. Consider dedicated tools only when managing 5,000+ donor relationships.</li>
            <li><strong className="text-foreground">Paid analytics:</strong> Google Analytics is free and sufficient for nonprofit websites. Plausible ($9/mo) is better but harder to justify when budgets are tight.</li>
            <li><strong className="text-foreground">Paid form tools:</strong> Tally gives unlimited forms and submissions free. Typeform and Jotform have strict free-tier limits. Google Forms is also free but less polished.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Nonprofits Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Accepting Salesforce free licenses without implementation resources.</strong> Salesforce is powerful but requires a trained admin. Budget $0 for software but $5K+ for setup consulting &mdash; or just use HubSpot Free.</li>
            <li><strong className="text-foreground">Using personal email for organizational communication.</strong> Google for Nonprofits provides free Google Workspace. Use it for professional email, shared drives, and calendar.</li>
            <li><strong className="text-foreground">Not applying for nonprofit discounts.</strong> Many vendors offer 15&ndash;85% discounts but don&apos;t advertise them prominently. Check TechSoup and each vendor&apos;s nonprofit page.</li>
            <li><strong className="text-foreground">Paying for Mailchimp when Kit Free is better.</strong> Mailchimp Free caps at 250 contacts. Kit Free gives 10,000 subscribers. For nonprofits growing their supporter list, Kit is the clear winner.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Is HubSpot Free really enough for a nonprofit?</h3>
          <p className="text-muted mb-4">
            For organizations under 50 people managing fewer than 5,000 contacts, yes. You get unlimited contacts, a deal pipeline (repurpose as a donation pipeline), email logging, and forms. The main limitation is 2,000 email sends/month with HubSpot branding.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">How do I track donations in HubSpot Free?</h3>
          <p className="text-muted mb-4">
            Create a custom pipeline called &ldquo;Donations&rdquo; with stages like &ldquo;Prospect,&rdquo; &ldquo;Solicited,&rdquo; &ldquo;Pledged,&rdquo; and &ldquo;Received.&rdquo; Use custom properties for donation amount, date, and campaign. It&apos;s not a dedicated donation CRM, but it works.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Should we use Discord or Slack?</h3>
          <p className="text-muted mb-4">
            Discord Free gives unlimited message history and voice channels. Slack Free limits you to 90 days of message history and 10 integrations. Slack offers an 85% nonprofit discount on Pro ($8.75/user/mo becomes ~$1.31/user/mo). If your team prefers Slack&apos;s interface, the discounted Pro plan is excellent value.
          </p>
        </div>

        <RelatedLinks
          tools={["hubspot-crm", "convertkit", "mailchimp", "notion", "clickup", "tally", "discord"]}
          guides={[
            "best-free-tools-startups",
            "how-to-choose-crm",
            "best-free-crm-2026",
            "building-knowledge-base",
            "remote-team-communication",
            "best-free-email-tool-2026",
          ]}
        />
      </article>
    </>
  );
}
