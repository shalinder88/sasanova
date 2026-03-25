import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Pipedrive Pricing Explained: Every Tier, Every Add-On",
  description:
    "Pipedrive pricing decoded: Lite $14/seat, Growth $39/seat, Premium $49/seat, Ultimate $99/seat. Add-ons, hidden costs, and when each tier makes sense.",
};

export default function PipedrivePricingExplainedPage() {
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
              Pipedrive Pricing Explained
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Pipedrive Pricing Explained: Every Tier, Every Add-On
          </h1>
          <p className="text-lg text-muted">
            Pipedrive keeps its pricing simpler than most CRMs &mdash; four tiers, all per-seat, no contact-based billing. But the gap between Lite and Growth is steeper than it looks, and the add-ons can quietly double your bill. This guide breaks down exactly what each tier includes, what the add-ons cost, and when upgrading actually pays for itself.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Every Tier at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (per seat)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per seat/mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Additions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lite</td>
                  <td className="px-4 py-2.5">$14</td>
                  <td className="px-4 py-2.5">$14</td>
                  <td className="px-4 py-2.5">3,000 deals, 30 custom fields, lead/deal management</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Growth</td>
                  <td className="px-4 py-2.5">$39</td>
                  <td className="px-4 py-2.5">$29</td>
                  <td className="px-4 py-2.5">Automations, email sync, scheduler</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Premium</td>
                  <td className="px-4 py-2.5">$49</td>
                  <td className="px-4 py-2.5">$49</td>
                  <td className="px-4 py-2.5">Advanced reporting, revenue forecasts, e-signatures</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Ultimate</td>
                  <td className="px-4 py-2.5">$99</td>
                  <td className="px-4 py-2.5">$79</td>
                  <td className="px-4 py-2.5">Unlimited everything, security alerts, implementation support</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            All prices are per seat per month. Pipedrive has no free tier &mdash; every user pays. There&apos;s no contact-based billing, which means your bill scales with your team size, not your database size. That&apos;s a significant advantage over HubSpot or ActiveCampaign for companies with large contact lists.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Each Tier Actually Adds</h2>
          <h3 className="text-lg font-semibold mt-6 mb-3">Lite ($14/seat/mo) &mdash; The Basics</h3>
          <p className="text-muted mb-4">
            Lite gives you the core Pipedrive experience: visual pipeline, deal tracking, contact management, activity scheduling, and a mobile app. You get 3,000 open deals, 30 custom fields, and basic reporting. For a solo salesperson or a founder managing a handful of deals, Lite is functional.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The catch:</strong> No email sync, no automations, no scheduling link, and limited reporting. You&apos;re manually tracking everything. For most teams, Lite is a starting point, not a long-term plan.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Growth ($39/seat/mo) &mdash; Where Most Teams Land</h3>
          <p className="text-muted mb-4">
            Growth adds email sync (two-way with Gmail/Outlook), workflow automations, a scheduling link (like Calendly built-in), group emailing, and email templates. It also lifts the deal limit to 10,000 and custom fields to 100.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why this is the sweet spot:</strong> Email sync and automations are the two features that save measurable time. Without them, your CRM is a manual data entry tool. Growth turns Pipedrive into an actual productivity tool.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Premium ($49/seat/mo) &mdash; Reporting and Forecasting</h3>
          <p className="text-muted mb-4">
            Premium adds advanced reporting (custom dashboards, revenue projections), e-signatures, auto-assignment rules, and additional security features. The jump from Growth ($39) to Premium ($49) is only $10/seat &mdash; much more reasonable than the Lite-to-Growth gap.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When it&apos;s worth it:</strong> If your sales manager needs revenue forecasting or you want built-in e-signatures instead of paying for a DocuSign subscription, Premium justifies the extra $10.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Ultimate ($99/seat/mo) &mdash; Unlimited Everything</h3>
          <p className="text-muted mb-4">
            Ultimate removes all limits: unlimited deals, custom fields, reports, and automations. Adds security alerts, phone support priority, and implementation assistance. At $99/seat, it&apos;s 2.5x the price of Growth.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Who needs this:</strong> Larger sales teams (20+) that have hit limits on Premium, or companies that need enhanced security features. Most teams under 15 seats never need Ultimate.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Add-Ons That Change the Bill</h2>
          <p className="text-muted mb-4">
            Pipedrive&apos;s base pricing is straightforward, but add-ons can significantly increase your monthly cost:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Add-On</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What It Does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">LeadBooster</td>
                  <td className="px-4 py-2.5">$32.50/company/mo</td>
                  <td className="px-4 py-2.5">Chatbot, live chat, web forms, Prospector tool</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Web Visitors</td>
                  <td className="px-4 py-2.5">$41/company/mo</td>
                  <td className="px-4 py-2.5">Identify which companies visit your website</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Smart Docs</td>
                  <td className="px-4 py-2.5">$32.50/company/mo (free on Premium+)</td>
                  <td className="px-4 py-2.5">Proposal templates, e-signatures, autofill from CRM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Projects</td>
                  <td className="px-4 py-2.5">$6.70/user/mo</td>
                  <td className="px-4 py-2.5">Kanban boards and task management post-sale</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Campaigns</td>
                  <td className="px-4 py-2.5">$13.33/company/mo</td>
                  <td className="px-4 py-2.5">Email marketing campaigns from within Pipedrive</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The real math:</strong> A 5-person team on Growth ($39/seat) pays $195/month. Add LeadBooster ($32.50) and Web Visitors ($41), and you&apos;re at $268.50/month &mdash; a 38% increase over the base. The add-ons are per-company, not per-seat, which helps at scale but still adds up.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">No free tier.</strong> Unlike HubSpot, Zoho, or Freshsales, Pipedrive has no free plan. You pay from day one. There&apos;s a 14-day trial, then you&apos;re on the clock.</li>
            <li><strong className="text-foreground">Lite is too limited for most teams.</strong> Without email sync or automations, Lite feels like half a product. Most teams upgrade to Growth within 1&ndash;2 months, making the effective starting price $39/seat, not $14.</li>
            <li><strong className="text-foreground">Add-on stacking.</strong> LeadBooster, Web Visitors, Smart Docs, and Campaigns are all separate costs. A team that needs lead generation + website tracking + email marketing could pay more in add-ons than in base seats.</li>
            <li><strong className="text-foreground">Annual billing savings vary by tier.</strong> Growth drops from $39 to $29/seat on annual billing (26% savings). But you&apos;re locked in for 12 months. If you cancel mid-contract, you lose the remaining months.</li>
            <li><strong className="text-foreground">No marketing automation.</strong> Pipedrive is a sales CRM, not a marketing platform. If you need email marketing, landing pages, or lead nurturing, you&apos;ll need a separate tool (ActiveCampaign, Mailchimp, beehiiv) which adds to your total stack cost.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Lite ($14/seat)</strong> &mdash; Solo founder who manages under 20 deals at a time, doesn&apos;t need email sync, and primarily uses Pipedrive as a digital Rolodex. Rare in practice.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Growth ($39/seat)</strong> &mdash; The right tier for 80% of teams. You need email sync, automations, and scheduling. A team of 3&ndash;10 salespeople should start here.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Premium ($49/seat)</strong> &mdash; Sales managers who need revenue forecasting and custom reporting. Also worth it if you&apos;d otherwise pay for a separate e-signature tool.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Ultimate ($99/seat)</strong> &mdash; Large sales orgs (20+ seats) that hit limits on Premium, or companies needing enhanced security controls. Most teams never need this.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Per-Seat Math at Team Scale</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Lite/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Growth/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Premium/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Ultimate/mo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">3 seats</td>
                  <td className="px-4 py-2.5">$42</td>
                  <td className="px-4 py-2.5">$117</td>
                  <td className="px-4 py-2.5">$147</td>
                  <td className="px-4 py-2.5">$297</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 seats</td>
                  <td className="px-4 py-2.5">$70</td>
                  <td className="px-4 py-2.5">$195</td>
                  <td className="px-4 py-2.5">$245</td>
                  <td className="px-4 py-2.5">$495</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 seats</td>
                  <td className="px-4 py-2.5">$140</td>
                  <td className="px-4 py-2.5">$390</td>
                  <td className="px-4 py-2.5">$490</td>
                  <td className="px-4 py-2.5">$990</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 seats</td>
                  <td className="px-4 py-2.5">$350</td>
                  <td className="px-4 py-2.5">$975</td>
                  <td className="px-4 py-2.5">$1,225</td>
                  <td className="px-4 py-2.5">$2,475</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Freshsales Growth at $11/seat/mo</strong> is the most direct competitor. It includes built-in phone, AI lead scoring (Freddy), and email sync at a lower per-seat cost. The tradeoff: Freshsales doesn&apos;t match Pipedrive&apos;s visual pipeline UX or marketplace breadth (400+ integrations vs Freshsales&apos; smaller ecosystem).
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot Free</strong> gives you unlimited contacts, a deal pipeline, and email tracking at $0. If you can live without automations and email sequences, HubSpot Free costs nothing vs Pipedrive&apos;s minimum $14/seat. But the moment you need automation, HubSpot jumps to $890/month (Professional) &mdash; making Pipedrive Growth at $39/seat dramatically cheaper for teams under 20.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Pipedrive cost per month?</h3>
                <p className="text-muted">Pipedrive costs $14/seat/mo (Lite), $39/seat/mo (Growth), $49/seat/mo (Premium), or $99/seat/mo (Ultimate). All prices are per user. There is no free tier. Annual billing offers discounts on Growth and Ultimate.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Pipedrive have a free plan?</h3>
                <p className="text-muted">No. Pipedrive offers a 14-day free trial but no permanent free tier. The cheapest option is Lite at $14/seat/mo. If you need a free CRM, HubSpot Free or Zoho Free are alternatives, though they come with their own limitations.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Pipedrive Lite worth it?</h3>
                <p className="text-muted">For most teams, no. Lite lacks email sync, automations, and scheduling &mdash; the features that make a CRM productive. Most users upgrade to Growth within the first month or two. Lite works for solo operators who only need a visual pipeline tracker.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much do Pipedrive add-ons cost?</h3>
                <p className="text-muted">LeadBooster is $32.50/company/mo, Web Visitors is $41/company/mo, Smart Docs is $32.50/company/mo (free on Premium+), Projects is $6.70/user/mo, and Campaigns is $13.33/company/mo. Add-ons are billed per company, not per seat (except Projects).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Pipedrive vs HubSpot: which is cheaper?</h3>
                <p className="text-muted">Pipedrive is cheaper for sales-focused teams. A 5-person team on Pipedrive Growth costs $195/mo. HubSpot Starter for 5 seats is $100/mo, but HubSpot Professional (where you get automations comparable to Pipedrive Growth) is $890/mo flat. For pure CRM, Pipedrive wins on price. For combined CRM + marketing, HubSpot&apos;s all-in-one model may justify the premium.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["pipedrive", "hubspot-crm", "freshsales"]}
            comparisons={["hubspot-crm-vs-pipedrive", "pipedrive-vs-zoho-crm"]}
            guides={["when-pipedrive-needs-upgrade", "switch-from-hubspot-to-pipedrive"]}
          />
        </div>
      </article>
    </>
  );
}
