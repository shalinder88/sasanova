import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing Automation on a Budget: What Actually Moves the Needle",
  description:
    "HubSpot Marketing Hub vs ActiveCampaign vs Brevo vs Kit compared for marketing teams. Lead scoring, email sequences, landing page builders, and real pricing at 1K-25K contacts.",
};

export default function BestAutomationMarketingTeams() {
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
              Marketing Automation on a Budget
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Marketing Automation
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Marketing Automation on a Budget: What Actually Moves the Needle
          </h1>
          <p className="text-lg text-muted">
            HubSpot Marketing Hub Professional costs $890/month. Most marketing teams don&apos;t need it. The features that actually drive revenue &mdash; email sequences, basic lead scoring, and landing pages &mdash; are available at a fraction of the price. Here&apos;s what works, what&apos;s a waste, and the real cost of HubSpot vs ActiveCampaign vs Brevo vs Kit for marketing teams of 1&ndash;10.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── What Marketing Automation Actually Means ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What Marketing Automation Actually Means (vs. What Vendors Sell)</h2>
          <p className="text-muted mb-4">
            Vendors sell &quot;marketing automation&quot; as a category that includes everything from email to social media to ad management. In practice, the features that move the needle for most teams are narrow and specific.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Email sequences that nurture leads.</strong> A welcome series, a lead nurture sequence, and a re-engagement flow. These three automations handle 80% of what &quot;marketing automation&quot; means for teams under 10.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Lead scoring that tells sales who to call.</strong> Assigning points based on actions (opened email, visited pricing page, downloaded whitepaper) and properties (job title, company size). Simple lead scoring works. Elaborate AI scoring usually doesn&apos;t &mdash; more on that below.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Landing pages that convert traffic.</strong> Dedicated pages for campaigns, webinars, and content offers. Some platforms include a landing page builder. Others require a third-party tool. The cost difference matters.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Reporting that connects marketing to revenue.</strong> Which campaigns generated leads that became customers? This attribution question is the hardest problem in marketing, and most tools answer it poorly. Set expectations accordingly.
          </p>

          {/* ── Lead Scoring Reality ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Lead Scoring That Works vs. Lead Scoring That Wastes Time</h2>
          <p className="text-muted mb-4">
            Lead scoring sounds essential. In practice, it&apos;s the most over-engineered feature in marketing automation. Here&apos;s when it helps and when it hurts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Lead Scoring That Works</h3>
              <ul className="text-sm text-muted space-y-1.5">
                <li>&bull; Simple rules: visited pricing page = +20 points, downloaded case study = +10</li>
                <li>&bull; Threshold-based alerts: score hits 50, notify sales rep</li>
                <li>&bull; 5&ndash;10 scoring rules maximum</li>
                <li>&bull; Updated quarterly based on what actually converts</li>
                <li>&bull; Works with 500+ leads per month</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Lead Scoring That Wastes Time</h3>
              <ul className="text-sm text-muted space-y-1.5">
                <li>&bull; 50+ scoring rules that nobody audits</li>
                <li>&bull; AI/predictive scoring with insufficient data (&lt;200 conversions)</li>
                <li>&bull; Scores that sales ignores because they don&apos;t trust them</li>
                <li>&bull; Scoring demographics you can&apos;t verify (self-reported titles)</li>
                <li>&bull; Set-and-forget models never validated against outcomes</li>
              </ul>
            </div>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ActiveCampaign</strong> has the best lead scoring for the price. You can create multiple scoring models, weight actions differently, and trigger automations at score thresholds. It&apos;s available on the Plus plan ($49/mo for 1K contacts).
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot</strong> includes lead scoring on Marketing Hub Professional ($890/mo) or Sales Hub Professional ($100/seat/mo). The predictive scoring feature uses AI and works well &mdash; if you have enough conversion data (500+ closed deals). For most small teams, the manual scoring is sufficient and available on Starter plans.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo</strong> offers lead scoring on the Business plan ($18/mo). It&apos;s basic &mdash; point values assigned to page visits, email opens, and link clicks. Functional, not sophisticated.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit</strong> does not have traditional lead scoring. You can use tags and segments to approximate scoring behavior (tag subscribers who click pricing links, segment by engagement), but there&apos;s no numeric score system.
          </p>

          {/* ── Head-to-Head ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Marketing Hub</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Brevo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Kit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Best for</td>
                  <td className="px-4 py-2.5">Full-stack marketing</td>
                  <td className="px-4 py-2.5">Automation depth</td>
                  <td className="px-4 py-2.5">Budget multi-channel</td>
                  <td className="px-4 py-2.5">Creator-led marketing</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email sequences</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Starter+)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (all plans)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Business+)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Creator+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lead scoring</td>
                  <td className="px-4 py-2.5 text-green-400">Manual + AI (Pro+)</td>
                  <td className="px-4 py-2.5 text-green-400">Manual (Plus+)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic (Business+)</td>
                  <td className="px-4 py-2.5 text-red-400">Tags only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automation builder</td>
                  <td className="px-4 py-2.5 text-green-400">Visual, powerful</td>
                  <td className="px-4 py-2.5 text-green-400">Best in class</td>
                  <td className="px-4 py-2.5 text-yellow-400">Visual, moderate</td>
                  <td className="px-4 py-2.5 text-yellow-400">Visual, simple</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Landing page builder</td>
                  <td className="px-4 py-2.5 text-green-400">Included (Starter+)</td>
                  <td className="px-4 py-2.5 text-green-400">Included (Plus+)</td>
                  <td className="px-4 py-2.5 text-red-400">Not included</td>
                  <td className="px-4 py-2.5 text-green-400">Included (all plans)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM included</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (free CRM)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Plus+)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (basic)</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">SMS marketing</td>
                  <td className="px-4 py-2.5 text-yellow-400">Add-on</td>
                  <td className="px-4 py-2.5 text-yellow-400">Add-on</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">A/B testing</td>
                  <td className="px-4 py-2.5 text-green-400">Subject lines + content</td>
                  <td className="px-4 py-2.5 text-green-400">Subject lines + automations</td>
                  <td className="px-4 py-2.5 text-green-400">Subject lines</td>
                  <td className="px-4 py-2.5 text-yellow-400">Subject lines only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Reporting depth</td>
                  <td className="px-4 py-2.5 text-green-400">Deep (Pro+)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Good</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free tier</td>
                  <td className="px-4 py-2.5">Free tools (limited)</td>
                  <td className="px-4 py-2.5">14-day trial</td>
                  <td className="px-4 py-2.5">300 emails/day free</td>
                  <td className="px-4 py-2.5">10K subs (limited)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Email Sequence Builders ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email Sequence Builders Compared</h2>
          <p className="text-muted mb-4">
            The sequence builder is where you spend most of your time in a marketing automation tool. Here&apos;s how they differ in practice.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ActiveCampaign</strong> has the most powerful visual automation builder. You can split paths by any contact data, trigger automations from other automations, use wait conditions (wait until score reaches X), and A/B test entire automation paths. If you need conditional logic like &quot;if opened email 2 but didn&apos;t click, send variant B after 3 days,&quot; ActiveCampaign handles it natively.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot</strong> (Marketing Hub Starter, $20/mo) provides a solid visual workflow builder. It handles if/then branching, delays, and enrollment triggers well. The Professional plan ($890/mo) adds goal-based nurturing, where contacts exit a sequence when they take a desired action. The Starter-to-Professional gap is the biggest pricing cliff in the industry.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo</strong> has a visual automation builder that covers the basics: triggers, conditions, delays, email sends. It lacks the depth of ActiveCampaign&apos;s conditional splits and doesn&apos;t support automation-to-automation triggers. Fine for linear sequences, limiting for complex branching.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit</strong> has a visual automation builder designed for creators, not marketers. It handles linear sequences well: subscriber signs up &rarr; wait 1 day &rarr; send email 1 &rarr; wait 3 days &rarr; send email 2. Conditional logic is limited to tag-based and segment-based splits. If your sequences are straightforward, Kit works. If you need multi-branch nurture paths, you&apos;ll hit walls.
          </p>

          {/* ── Landing Pages ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Landing Page Builders: Included vs. Add-On</h2>
          <p className="text-muted mb-4">
            Landing pages are essential for campaigns. Some platforms include them, others require a separate tool like Unbounce ($99/mo) or Leadpages ($49/mo). This hidden cost changes the total bill significantly.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot</strong> includes landing pages on all paid plans. The drag-and-drop builder is competent, templates are professional, and form data flows directly into the CRM. For most marketing teams, this eliminates the need for a separate landing page tool.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ActiveCampaign</strong> includes landing pages on Plus and above. The builder is functional but less polished than HubSpot&apos;s. Templates are adequate. Most teams use it for simple lead capture pages and turn to dedicated tools for high-stakes campaign pages.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit</strong> includes landing pages on all plans, including free. The templates are clean and conversion-focused. Limited design customization but fast to set up. Ideal for lead magnets and newsletter signups.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo does not include landing pages.</strong> You&apos;ll need a separate tool. Budget $49&ndash;$99/month for a dedicated landing page builder, or use Carrd ($19/year) for simple pages. This gap adds $600&ndash;$1,200/year to Brevo&apos;s real cost.
          </p>

          {/* ── Pricing ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Real Pricing at 1K, 5K, and 25K Contacts</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Contact Count</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Starter</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Professional</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign Plus</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Brevo Business</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Kit Creator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1,000 contacts</td>
                  <td className="px-4 py-2.5">$20/mo</td>
                  <td className="px-4 py-2.5">$890/mo</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$18/mo*</td>
                  <td className="px-4 py-2.5">$29/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000 contacts</td>
                  <td className="px-4 py-2.5">$50/mo</td>
                  <td className="px-4 py-2.5">$890/mo</td>
                  <td className="px-4 py-2.5">$99/mo</td>
                  <td className="px-4 py-2.5">$35/mo*</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25,000 contacts</td>
                  <td className="px-4 py-2.5">$250/mo</td>
                  <td className="px-4 py-2.5">$1,190/mo</td>
                  <td className="px-4 py-2.5">$259/mo</td>
                  <td className="px-4 py-2.5">$65/mo*</td>
                  <td className="px-4 py-2.5">$199/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lead scoring</td>
                  <td className="px-4 py-2.5 text-red-400">Not included</td>
                  <td className="px-4 py-2.5 text-green-400">Included</td>
                  <td className="px-4 py-2.5 text-green-400">Included</td>
                  <td className="px-4 py-2.5 text-green-400">Basic</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Landing pages</td>
                  <td className="px-4 py-2.5 text-green-400">Included</td>
                  <td className="px-4 py-2.5 text-green-400">Included</td>
                  <td className="px-4 py-2.5 text-green-400">Included</td>
                  <td className="px-4 py-2.5 text-red-400">Add $49&ndash;99/mo</td>
                  <td className="px-4 py-2.5 text-green-400">Included</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Annual cost (5K contacts)</td>
                  <td className="px-4 py-2.5">$600/yr</td>
                  <td className="px-4 py-2.5">$10,680/yr</td>
                  <td className="px-4 py-2.5">$1,188/yr</td>
                  <td className="px-4 py-2.5">$420/yr + LP tool</td>
                  <td className="px-4 py-2.5">$948/yr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mb-4">
            *Brevo charges by emails sent (5K&ndash;60K/mo), not contacts. Prices shown for moderate sending. HubSpot Professional includes 2K marketing contacts; additional contacts billed separately. All prices as of March 2026.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The HubSpot cliff is real.</strong> Starter at $20&ndash;$50/month is reasonable. Professional at $890/month is a 18&ndash;45x jump. Most teams either stay on Starter and supplement with other tools, or skip HubSpot entirely for ActiveCampaign.
          </p>

          {/* ── Who Should NOT ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Use These Tools</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">E-commerce stores:</strong> Marketing automation for e-commerce requires product catalogs, cart abandonment, and purchase-triggered flows. Use Klaviyo, Mailchimp, or Drip instead. The tools in this guide are built for lead-based businesses, not product-based.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Solo content creators:</strong> If you&apos;re one person writing a newsletter, these are overkill. Kit on its free plan or beehiiv handles everything a solo creator needs. Marketing automation tools are for teams with multiple campaigns running simultaneously.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Enterprises with 100K+ contacts:</strong> At enterprise scale, you need dedicated infrastructure: Marketo, Pardot, or Eloqua. The tools in this guide cap out or become expensive above 100K contacts.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Teams that don&apos;t produce content:</strong> Marketing automation without a content engine is an empty pipe. If you don&apos;t have blog posts, lead magnets, or content offers to drive traffic, a marketing automation tool has nothing to automate. Fix the content problem first.
          </p>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Marketing Teams Make with Automation</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Buying HubSpot Professional before exhausting HubSpot Starter.</strong> Most teams don&apos;t need the Professional features until they have 10K+ contacts and 5+ active campaigns. HubSpot Starter plus a landing page tool like Carrd often covers everything at 1/10th the cost.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Building 30 lead scoring rules before validating any of them.</strong> Start with 3&ndash;5 high-signal actions: visited pricing page, requested demo, opened 5+ emails in 30 days. Run that for 90 days. Then check if high-scoring leads actually converted at a higher rate. If not, your scoring model is noise.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Choosing a tool for its reporting and never looking at the reports.</strong> HubSpot&apos;s attribution reporting is excellent. It&apos;s also useless if nobody on your team reviews it weekly. Buy the reporting tier that matches your team&apos;s actual analysis habits, not your aspirations.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Automating before understanding the manual process.</strong> Run your sequences manually (via individual emails) for 2&ndash;4 weeks first. You&apos;ll learn what messages resonate, what timing works, and where leads drop off. Then automate the proven process. Automating guesses at scale just burns leads faster.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Ignoring deliverability setup.</strong> SPF, DKIM, DMARC, and a custom sending domain aren&apos;t optional. Every platform supports them. If your team hasn&apos;t configured these, you&apos;re sending marketing emails that land in spam. This is the first task, not the last.
          </p>

          {/* ── The Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Opinionated Verdict</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Marketing teams that need the deepest automation:</strong> ActiveCampaign Plus at $49&ndash;$99/month. Best automation builder, included lead scoring, included landing pages, and a built-in CRM. The clear winner for teams that prioritize workflow sophistication over ecosystem breadth.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Teams committed to the HubSpot ecosystem:</strong> HubSpot Marketing Hub Starter at $20&ndash;$50/month is a strong value. Stay on Starter as long as possible. Only upgrade to Professional when you genuinely need revenue attribution reporting or advanced workflows with branching logic that Starter can&apos;t handle.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Maximum savings, multi-channel needs:</strong> Brevo Business at $18&ndash;$65/month. Best price, built-in SMS and WhatsApp, unlimited contacts. Budget $49&ndash;$99/month extra for a landing page tool. Total cost is still well under ActiveCampaign for basic automation needs.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Content-led businesses with simple funnels:</strong> Kit Creator at $29&ndash;$79/month. Clean automation builder, included landing pages, designed for content-driven marketing. Not for complex B2B nurture paths, but ideal for webinar funnels, lead magnet sequences, and newsletter-first marketing.
            </p>
          </div>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot Marketing Hub worth $890/month?</h3>
                <p className="text-muted">For teams with 10K+ contacts, 5+ active campaigns, and a need for multi-touch attribution reporting, yes. For teams under 5K contacts or with fewer than 3 active campaigns, HubSpot Starter or ActiveCampaign Plus delivers 90% of the value at 5&ndash;10% of the cost.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s the cheapest marketing automation that actually works?</h3>
                <p className="text-muted">Brevo Business at $18/month with a Carrd landing page ($19/year) gives you email sequences, basic lead scoring, and landing pages for under $25/month. It lacks the automation depth of ActiveCampaign but handles straightforward nurture sequences at a fraction of the cost.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need lead scoring for a small marketing team?</h3>
                <p className="text-muted">Only if you have 500+ leads per month and a sales team that needs to prioritize. Below that volume, manual review of lead activity (who visited the pricing page? who opened 5 emails?) works fine. Lead scoring adds value at scale but creates false confidence at low volume.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can Kit replace ActiveCampaign for B2B marketing?</h3>
                <p className="text-muted">For simple content marketing funnels, yes. For complex B2B nurture paths with conditional branching, lead scoring, and CRM integration, no. Kit is built for creators and content businesses, not enterprise lead nurturing. ActiveCampaign is the better B2B choice.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/hubspot-pricing-reality"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">HubSpot Pricing Reality</span>
                <span className="block text-xs text-muted mt-1">What it actually costs vs what the website says</span>
              </Link>
              <Link
                href="/guides/automate-lead-capture"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Automate Lead Capture</span>
                <span className="block text-xs text-muted mt-1">Get 80% of HubSpot value for under $100</span>
              </Link>
              <Link
                href="/guides/landing-page-builder-comparison"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Landing Page Builder Comparison</span>
                <span className="block text-xs text-muted mt-1">When to pay $99/mo and when $0 works</span>
              </Link>
              <Link
                href="/guides/best-email-tool-creators"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Best Email Tool for Creators</span>
                <span className="block text-xs text-muted mt-1">beehiiv vs Kit vs Substack vs Ghost</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
