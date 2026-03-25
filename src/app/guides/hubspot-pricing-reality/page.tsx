import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "HubSpot Pricing: What It Actually Costs (Not What the Website Says)",
  description:
    "HubSpot's real pricing decoded: free tier limits, the Starter to Professional jump, per-seat costs, contact tier traps, Marketing Hub vs Sales Hub, and when free is genuinely enough.",
};

export default function HubspotPricingReality() {
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
              HubSpot Pricing Reality
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              CRM
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            HubSpot Pricing: What It Actually Costs (Not What the Website Says)
          </h1>
          <p className="text-lg text-muted">
            HubSpot&apos;s pricing page shows &quot;Free&quot; in big letters and &quot;$890/mo&quot; in smaller ones. Between those two numbers is a pricing structure that confuses even experienced buyers. This guide breaks down every tier, every trap, and every hidden cost &mdash; so you know exactly what you&apos;re committing to before you sign.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Free Tier Limitations That Actually Matter</h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s free CRM is real. Unlimited contacts, a deal pipeline, email tracking, meeting scheduling, and live chat at $0. That part is genuine. The limitations are strategically placed to create upgrade pressure:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">5 email templates.</strong> You&apos;ll burn through these in the first week if you do any outbound sales. Starter lifts this to 5,000.</li>
            <li><strong className="text-foreground">200 email tracking notifications per month.</strong> If you send more than 200 tracked emails monthly, you stop getting open/click notifications. That&apos;s roughly 10 emails per business day.</li>
            <li><strong className="text-foreground">No email sequences.</strong> You cannot set up automated multi-step email follow-ups on free. This is the single biggest limitation for sales teams. Starter adds basic sequences.</li>
            <li><strong className="text-foreground">No workflow automation.</strong> No automated actions on deal stage changes, form submissions, or lifecycle stage transitions. This is Professional only ($890/month).</li>
            <li><strong className="text-foreground">HubSpot branding on everything.</strong> Forms, live chat widget, meeting scheduler, and email signatures all show HubSpot branding. Removing it requires Starter.</li>
            <li><strong className="text-foreground">1 deal pipeline.</strong> If you have more than one revenue stream (e.g., services and product sales), you can&apos;t track them separately.</li>
            <li><strong className="text-foreground">No custom reporting.</strong> You get pre-built dashboards that show what HubSpot wants you to see. Custom reports require Professional.</li>
            <li><strong className="text-foreground">2,000 emails per month.</strong> HubSpot&apos;s email marketing tool on free is capped at 2,000 sends per calendar month. Not per day &mdash; per month.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Is HubSpot Free genuinely enough?</p>
            <p className="text-sm text-muted">
              Yes, if you use it as a contact database with basic pipeline tracking. For a solo founder or early-stage startup that mostly handles inbound leads through email, HubSpot Free is functional. The moment you need automation, sequences, or custom reporting &mdash; which most growing teams do within 3&ndash;6 months &mdash; you hit the paywall.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Starter to Professional Jump</h2>
          <p className="text-muted mb-4">
            This is the pricing cliff that catches people. HubSpot&apos;s pricing tiers go:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Sales Hub</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Marketing Hub</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Service Hub</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                  <td className="px-4 py-2.5">$20/seat/mo</td>
                  <td className="px-4 py-2.5">$20/seat/mo (1,000 marketing contacts)</td>
                  <td className="px-4 py-2.5">$20/seat/mo</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Professional</td>
                  <td className="px-4 py-2.5">$890/mo (includes 5 seats, +$20/extra seat)</td>
                  <td className="px-4 py-2.5">$890/mo (includes 2,000 marketing contacts)</td>
                  <td className="px-4 py-2.5">$890/mo (includes 5 seats)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">$3,600/mo (includes 10 seats)</td>
                  <td className="px-4 py-2.5">$3,600/mo (includes 10,000 marketing contacts)</td>
                  <td className="px-4 py-2.5">$3,600/mo (includes 10 seats)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            That jump from $20/seat/month (Starter) to $890/month flat fee (Professional) is a 4,350% increase for a single user. Even at 5 users, it goes from $100/month total to $890/month &mdash; a 790% jump. There is no intermediate tier. You either live with Starter&apos;s constraints or make the leap.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">What Professional adds over Starter:</strong> Workflow automation, sequences with enrollment goals, custom reporting, calculated properties, A/B testing, revenue forecasting, lead scoring, teams and permissions. These aren&apos;t nice-to-haves for most growing companies &mdash; they&apos;re necessities.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The uncomfortable truth:</strong> Most teams that start on HubSpot Free or Starter end up needing Professional within 6&ndash;12 months. HubSpot is designed this way. The free and Starter tiers are lead generation for the Professional tier. That&apos;s not cynical &mdash; it&apos;s HubSpot&apos;s business model.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Per-Seat Costs That Aren&apos;t Obvious</h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s seat model changed in 2024. Here&apos;s the current structure and its hidden implications:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Free and Starter:</strong> Simple per-seat pricing. Every user who needs paid features pays $20/month.</li>
            <li><strong className="text-foreground">Professional:</strong> Base fee of $890/month includes 5 seats. Additional seats are $20/month each. This means the effective per-seat cost drops as you add users: 5 users = $178/seat, 10 users = $99/seat, 25 users = $52/seat.</li>
            <li><strong className="text-foreground">Enterprise:</strong> $3,600/month includes 10 seats. Additional seats are $75/month each. More expensive seats, but Enterprise unlocks custom objects, hierarchical teams, and advanced permissions.</li>
          </ul>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The seat type distinction:</strong> HubSpot has &quot;core seats&quot; (users who actively use Sales/Service/Marketing Hub features) and &quot;view-only seats&quot; (free, for people who just need to see data). Make sure non-sales staff (finance, executives who just view dashboards) are assigned view-only seats. Companies routinely overpay by assigning full seats to users who only view reports.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Contact Tier Pricing Traps</h2>
          <p className="text-muted mb-4">
            This is the most misunderstood part of HubSpot pricing &mdash; especially for Marketing Hub.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">CRM contacts vs. marketing contacts:</strong> HubSpot distinguishes between contacts stored in your CRM (unlimited on all plans) and &quot;marketing contacts&quot; (contacts you actively market to). You only pay for marketing contacts &mdash; the ones you send marketing emails to, target with ads, or use in workflows.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Marketing Contacts</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Starter Additional Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Professional Additional Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Included</td>
                  <td className="px-4 py-2.5">1,000 contacts</td>
                  <td className="px-4 py-2.5">2,000 contacts</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                  <td className="px-4 py-2.5">+$60/mo</td>
                  <td className="px-4 py-2.5">+$225/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                  <td className="px-4 py-2.5">+$135/mo</td>
                  <td className="px-4 py-2.5">+$225/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                  <td className="px-4 py-2.5">+$360/mo</td>
                  <td className="px-4 py-2.5">+$675/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                  <td className="px-4 py-2.5">+$810/mo</td>
                  <td className="px-4 py-2.5">+$1,125/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">100,000</td>
                  <td className="px-4 py-2.5">+$1,685/mo</td>
                  <td className="px-4 py-2.5">+$2,025/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The trap:</strong> At 50,000 marketing contacts on Professional, your Marketing Hub bill alone is $890 + $1,125 = $2,015/month. Add Sales Hub Professional ($890/month) and you&apos;re at $2,905/month before extra seats or add-ons. That&apos;s $34,860/year. Many mid-market companies hit this number within 18 months and are shocked by it.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">How to manage contact costs:</strong> Regularly audit your marketing contacts. Set contacts to &quot;non-marketing&quot; if you&apos;re not actively emailing them. HubSpot lets you reclassify contacts once per month. Archive unengaged contacts (no opens in 6+ months). Every contact you keep as &quot;marketing&quot; costs money.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Marketing Hub vs. Sales Hub vs. Both</h2>
          <p className="text-muted mb-4">
            HubSpot sells separate Hubs. You can buy them individually or bundle them. Here&apos;s what each one does and when you need it:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Hub</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What It Does</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Who Needs It</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Professional Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Sales Hub</td>
                  <td className="px-4 py-2.5">Pipeline, sequences, forecasting, deal automation</td>
                  <td className="px-4 py-2.5">Sales teams managing deals</td>
                  <td className="px-4 py-2.5">$890/mo + $20/extra seat</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Marketing Hub</td>
                  <td className="px-4 py-2.5">Email campaigns, landing pages, lead scoring, SEO, social</td>
                  <td className="px-4 py-2.5">Marketing teams generating and nurturing leads</td>
                  <td className="px-4 py-2.5">$890/mo + contact tier costs</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Service Hub</td>
                  <td className="px-4 py-2.5">Tickets, knowledge base, customer portal, feedback surveys</td>
                  <td className="px-4 py-2.5">Support teams managing customer issues</td>
                  <td className="px-4 py-2.5">$890/mo + $20/extra seat</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM Suite (all Hubs)</td>
                  <td className="px-4 py-2.5">Everything above in one package</td>
                  <td className="px-4 py-2.5">Companies wanting the full platform</td>
                  <td className="px-4 py-2.5">Custom pricing (typically $1,600&ndash;$2,500/mo at Professional)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The bundle trap:</strong> HubSpot offers CRM Suite bundles at a discount. But the discount locks you into an annual contract with all Hubs. If you only need Sales Hub, don&apos;t buy the bundle just because the per-Hub price looks lower. Buy what you need. Add Hubs later when you have a specific use case.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Start with one Hub.</strong> Most companies should start with either Sales Hub (if you&apos;re sales-led) or Marketing Hub (if you&apos;re marketing-led). Add the second Hub when the first is fully adopted and you have a clear need.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs and Add-Ons</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Onboarding fee.</strong> HubSpot charges a mandatory one-time onboarding fee for Professional ($3,000) and Enterprise ($6,000) tier purchases. This is non-negotiable for new customers. You can use a HubSpot Solutions Partner instead (often $2K&ndash;$5K, but you choose the scope).</li>
            <li><strong className="text-foreground">API call limits.</strong> Free/Starter: 100 calls per 10 seconds. Professional: 150. Enterprise: 200. If you have custom integrations making heavy API use, you may hit limits that require Engineering workarounds.</li>
            <li><strong className="text-foreground">Calling minutes.</strong> Sales Hub includes limited calling minutes. Additional minutes are billed per-minute. Heavy callers may need a dedicated VoIP tool instead of relying on HubSpot calling.</li>
            <li><strong className="text-foreground">Add-on: Ads (included but limited).</strong> HubSpot&apos;s ad management connects to Google and Facebook ads. But serious ad management requires Professional tier. Starter only tracks ad ROI at a basic level.</li>
            <li><strong className="text-foreground">Add-on: Reporting.</strong> Professional includes 100 custom reports and 25 dashboards. Enterprise increases these limits. If you need more, you pay for add-on reporting packs or use external BI tools.</li>
            <li><strong className="text-foreground">Annual contracts.</strong> Professional and Enterprise are annual commitments by default. Monthly billing is available but costs 10&ndash;20% more. Canceling mid-contract means paying the remaining months.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">When HubSpot Free Is Genuinely Enough</h2>
          <p className="text-muted mb-4">
            HubSpot Free works well and isn&apos;t just a bait-and-switch if you fit these criteria:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>You have 1&ndash;5 users who need CRM access</li>
            <li>You manage inbound leads (people come to you, not outbound)</li>
            <li>Your sales process is simple: contact comes in, you respond, deal closes or doesn&apos;t</li>
            <li>You don&apos;t need automated follow-up sequences</li>
            <li>You can tolerate HubSpot branding on forms and live chat</li>
            <li>Your email volume is under 2,000 marketing emails per month</li>
            <li>You don&apos;t need custom reports (pre-built dashboards are sufficient)</li>
          </ul>
          <p className="text-muted mb-4">
            Companies that stay on HubSpot Free successfully tend to be early-stage startups, solopreneurs testing product-market fit, or small businesses with low-volume, relationship-based sales. The moment you hire a dedicated salesperson or need to scale outreach, you&apos;ll outgrow Free.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">When You Should Pay (And What Tier)</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Stay on Free</strong> if you&apos;re pre-revenue, under 5 people, handling inbound only, and your monthly email sends stay under 2,000.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Buy Starter ($20/seat/mo)</strong> if you need to remove HubSpot branding, want more email templates, need basic email health reporting, and have a simple sales process. Starter is fine for teams of 2&ndash;5 with low automation needs.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Buy Professional ($890/mo)</strong> if you need workflow automation, email sequences, custom reporting, lead scoring, or have 10+ sales reps. This is the tier where HubSpot becomes a real sales and marketing platform. Don&apos;t buy it for a team of 3 &mdash; the effective per-seat cost doesn&apos;t justify it.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Buy Enterprise ($3,600/mo)</strong> only if you need custom objects (more than HubSpot&apos;s standard ones), hierarchical teams, calculated properties, or advanced permissions. Most companies under 100 employees don&apos;t need Enterprise.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When You Shouldn&apos;t Pay for HubSpot at All</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">If you only need a CRM (no marketing automation).</strong> Pipedrive at $14&ndash;$49/seat does everything HubSpot Sales Hub does for pipeline management, at a fraction of the cost. HubSpot&apos;s value is the platform &mdash; if you don&apos;t want the platform, you&apos;re overpaying for a CRM.</li>
            <li><strong className="text-foreground">If you&apos;re cost-sensitive at small scale.</strong> HubSpot Professional at 5 seats costs $890/month. Pipedrive Professional for 5 seats costs $245/month. Close Startup for 3 seats costs $177/month. The HubSpot premium only makes sense if you&apos;ll use the marketing and automation features.</li>
            <li><strong className="text-foreground">If you need deep customization.</strong> HubSpot is opinionated about its data model. Custom objects require Enterprise. Complex conditional logic in workflows has limits. If you need Salesforce-level customization, HubSpot will frustrate you regardless of tier.</li>
            <li><strong className="text-foreground">If you&apos;re buying it because it&apos;s &quot;industry standard.&quot;</strong> HubSpot is popular. That doesn&apos;t mean it fits your workflow. Evaluate based on what you need, not what other companies use.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Use This Guide</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Enterprise companies with 100+ users.</strong> At this scale, negotiate custom pricing directly with HubSpot. List prices don&apos;t apply &mdash; you&apos;ll get volume discounts and custom terms.</li>
            <li><strong className="text-foreground">Agencies managing multiple client portals.</strong> HubSpot has agency-specific pricing and partner programs that fundamentally change the cost structure. This guide covers standard business pricing.</li>
            <li><strong className="text-foreground">Companies evaluating HubSpot CMS Hub.</strong> Content management is a different product with different pricing. This guide covers Sales Hub and Marketing Hub.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>
              <strong className="text-foreground">Buying Professional for a team of 2&ndash;3.</strong> At $890/month for 2 users, you&apos;re paying $445/seat. At that price, almost any other CRM gives you more value. Professional makes financial sense at 10+ seats.
            </li>
            <li>
              <strong className="text-foreground">Letting marketing contacts grow unchecked.</strong> Every contact set to &quot;marketing&quot; costs money. Review monthly. Flip unengaged contacts to &quot;non-marketing.&quot; Implement automatic re-classification rules.
            </li>
            <li>
              <strong className="text-foreground">Buying the CRM Suite bundle without needing all Hubs.</strong> The bundle looks cheaper per-Hub, but if you only use Sales and Marketing, you&apos;re paying for Service Hub features you&apos;ll never touch. Buy individual Hubs unless you genuinely need three or more.
            </li>
            <li>
              <strong className="text-foreground">Signing an annual contract on your first purchase.</strong> Start monthly if possible. Yes, it costs 10&ndash;20% more. But you&apos;ll know within 3 months whether HubSpot fits your workflow. An annual contract on a tool you abandon is far more expensive than a 3-month monthly trial.
            </li>
            <li>
              <strong className="text-foreground">Assigning core seats to view-only users.</strong> Every person who just needs to see dashboards or look up contacts should get a free view-only seat, not a paid core seat. Audit seat assignments quarterly.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">The Bottom Line</h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s pricing is designed to get you in for free and scale your bill as you grow. That&apos;s not inherently bad &mdash; the product delivers genuine value at each tier. But the jumps between tiers are steep, the contact pricing adds up fast, and the gap between Starter and Professional catches more companies than any other pricing trap in SaaS.
          </p>
          <p className="text-muted mb-6">
            Know what tier you&apos;ll need before you start. If the answer is Professional, budget $890/month from day one and plan for it. If the answer is Free or Starter, set clear criteria for when you&apos;d upgrade so you&apos;re not surprised by the jump. And if you only need a CRM without the marketing platform, look at Pipedrive or Close first &mdash; you might never need HubSpot at all.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does HubSpot actually cost per month?</h3>
                <p className="text-muted">Free for basic CRM. Starter is $20 per user per month. Professional is $890/month flat (includes 5 seats) plus $20 per additional user. Enterprise is $3,600/month (includes 10 seats) plus $75 per additional user. Marketing Hub adds contact tier costs on top &mdash; 10,000 marketing contacts on Professional adds roughly $225/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot Free actually free?</h3>
                <p className="text-muted">Yes, genuinely. You get unlimited CRM contacts, a deal pipeline, email tracking (200 notifications/month), meeting scheduling, and live chat at $0 with no time limit. The limitations are 5 email templates, no sequences, no automation, HubSpot branding, and 2,000 marketing emails per month. For basic contact management, it works indefinitely.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is there such a big jump from Starter to Professional?</h3>
                <p className="text-muted">Professional is where HubSpot&apos;s automation, custom reporting, and advanced sales features live. Starter is a contact database with email tools. Professional is a marketing and sales automation platform. They&apos;re fundamentally different products at different price points. HubSpot has no intermediate tier because Professional&apos;s infrastructure costs (automation engine, custom reporting) are expensive to operate.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What are HubSpot marketing contacts and why do they cost extra?</h3>
                <p className="text-muted">Marketing contacts are contacts you actively market to (email campaigns, ad targeting, workflow enrollment). CRM contacts are just stored data and are free. You pay extra for marketing contacts because HubSpot charges for the infrastructure to deliver emails, track engagement, and process automation for each marketed contact. Tip: regularly set unengaged contacts to &quot;non-marketing&quot; to control costs.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["hubspot-crm", "pipedrive"]}
            comparisons={["hubspot-crm-vs-pipedrive", "hubspot-crm-vs-salesforce"]}
            guides={["migrate-salesforce-to-hubspot", "switch-from-hubspot-to-pipedrive"]}
          />
        </div>
      </article>
    </>
  );
}
