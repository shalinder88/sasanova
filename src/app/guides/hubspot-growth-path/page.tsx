import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "HubSpot Growth Path: Free → Starter → Professional — When to Move Up",
  description:
    "Exact upgrade triggers for every HubSpot tier. Free CRM limits that matter, Starter at $20/seat, Professional at $890/mo flat. The math behind each jump and when each tier pays for itself.",
};

export default function HubSpotGrowthPathPage() {
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
              HubSpot Growth Path
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Tool Maturity
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            HubSpot Growth Path: Free &rarr; Starter &rarr; Professional &mdash; When to Move Up
          </h1>
          <p className="text-lg text-muted">
            HubSpot&apos;s free CRM is genuinely free &mdash; unlimited contacts, basic email marketing, forms, and live chat. But the jump from Starter ($20/seat/mo) to Professional ($890/mo flat) is a 4,350% increase. This guide maps the exact trigger signals for each upgrade so you never pay before you need to &mdash; and never stay too long on a plan that&apos;s costing you deals.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Pricing verified from HubSpot vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">The Three Tiers at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Billing</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free Tools</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Flat</td>
                  <td className="px-4 py-2.5">Unlimited contacts, 2,000 email sends/mo, HubSpot branding, basic CRM</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                  <td className="px-4 py-2.5">$20/seat/mo</td>
                  <td className="px-4 py-2.5">Per seat ($216/yr annual)</td>
                  <td className="px-4 py-2.5">1,000 marketing contacts, remove branding, email health reporting</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Professional</td>
                  <td className="px-4 py-2.5">$890/mo flat</td>
                  <td className="px-4 py-2.5">Flat ($10,680/yr annual)</td>
                  <td className="px-4 py-2.5">2,000 marketing contacts, automation, custom reporting, ABM</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">$3,600/mo flat</td>
                  <td className="px-4 py-2.5">Flat ($43,200/yr annual)</td>
                  <td className="px-4 py-2.5">10,000 marketing contacts, revenue attribution, custom objects, hierarchical teams</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 1: Free &mdash; Where Most Should Start</h2>
          <p className="text-muted mb-4">
            HubSpot Free gives you unlimited contacts, a basic CRM, 2,000 email sends per month, forms, live chat, and a deal pipeline. For a solo founder or team of 2&ndash;3, this is genuinely enough for the first 6&ndash;12 months.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Free Limits That Actually Matter</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>2,000 email sends/month &mdash; fine for a list under 1,000, not fine if you send twice weekly to 2,000+</li>
              <li>HubSpot branding on all emails, forms, and live chat &mdash; unprofessional for client-facing businesses</li>
              <li>No automation workflows &mdash; every follow-up is manual</li>
              <li>No email sequences (requires Sales Hub Starter) &mdash; sales outreach stays manual</li>
              <li>Limited reporting &mdash; no custom dashboards or attribution</li>
              <li>5 active lists &mdash; segmentation is extremely limited</li>
            </ul>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Starter</p>
            <p className="text-sm text-muted">When HubSpot branding becomes embarrassing, when you need email sequences for sales outreach, or when you exceed 2,000 email sends/month. Typically happens at 1,000+ contacts or when you hire your first salesperson.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 2: Starter ($20/seat/mo) &mdash; The Sweet Spot</h2>
          <p className="text-muted mb-4">
            Starter removes branding, adds email health reporting, and increases your marketing contacts to 1,000. At $20/seat/mo ($216/yr billed annually), it&apos;s one of the most affordable paid CRM + email combos available.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">What Starter Adds</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>Branding removal on forms, emails, and chat</li>
              <li>Email health reporting (bounce/spam tracking)</li>
              <li>1,000 marketing contacts included (additional contacts cost extra)</li>
              <li>Simple email automation (not full workflows)</li>
              <li>Meeting scheduling with HubSpot branding removed</li>
              <li>10 active lists (up from 5)</li>
            </ul>
          </div>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Value Math</h3>
            <p className="text-sm text-muted">
              A 3-person team on Starter: $60/mo ($720/yr). You get CRM + email marketing + basic sequences + forms + meeting scheduling. Comparable to Pipedrive Growth ($39/seat = $117/mo) plus a separate email tool. HubSpot Starter is genuinely good value at this stage.
            </p>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Professional</p>
            <p className="text-sm text-muted">When you need workflow automation (if-then sequences beyond simple email), custom reporting beyond default dashboards, ABM tools, or when marketing contact limits are costing you extra fees. Typically happens when you have 5+ salespeople or 5,000+ marketing contacts.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 3: Professional ($890/mo) &mdash; The Big Jump</h2>
          <p className="text-muted mb-4">
            This is where HubSpot stops being cheap. Professional is $890/mo flat ($10,680/yr) &mdash; a 4,350% jump from a single Starter seat. It also requires a one-time $3,000 onboarding fee.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">What Professional Adds</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>Full workflow automation (the main reason people upgrade)</li>
              <li>Custom reporting and dashboards</li>
              <li>ABM (Account-Based Marketing) tools</li>
              <li>2,000 marketing contacts included</li>
              <li>A/B testing for emails</li>
              <li>Teams and content partitioning</li>
              <li>Campaign management</li>
            </ul>
          </div>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Justification Math</h3>
            <p className="text-sm text-muted">
              Professional costs $890/mo = $10,680/yr + $3,000 onboarding = $13,680 first year. To justify this, the automation and reporting needs to generate at least $1,140/month in additional revenue or saved labor. For a team closing $5K+ deals, one extra deal per month from better automation covers the cost.
            </p>
            <p className="text-sm text-muted mt-2">
              <strong className="text-foreground">Alternative math:</strong> If you can replace Professional with Pipedrive Growth ($39/seat) + ActiveCampaign Plus ($49/mo) + Zapier Professional ($29.99/mo), your 5-person team costs $274/mo vs $890/mo &mdash; saving $7,392/year. Professional only makes sense when you need everything in one platform.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Stop Climbing</h2>
          <p className="text-muted mb-4">
            Enterprise ($3,600/mo) is rarely justified for teams under 50 people. Unless you need custom objects, hierarchical teams, revenue attribution reporting, or advanced permissions, Professional is the ceiling for most businesses.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">The Real Growth Path for Most Teams</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li><strong className="text-foreground">Months 1&ndash;12:</strong> Free &mdash; validate product-market fit, build your initial contact list</li>
              <li><strong className="text-foreground">Months 6&ndash;18:</strong> Starter ($20/seat) &mdash; remove branding, add email health, start light sequences</li>
              <li><strong className="text-foreground">Year 2+:</strong> Either jump to Professional ($890/mo) if you need full automation, or switch to Pipedrive + a dedicated email tool if the cost is too steep</li>
            </ul>
          </div>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from HubSpot Free to Starter?</h3>
                <p className="text-muted">When you hit 2,000 email sends/month, need to remove HubSpot branding from client-facing materials, or want email sequences for sales outreach. Starter at $20/seat/mo is excellent value for teams of 1&ndash;5.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot Professional worth $890/month?</h3>
                <p className="text-muted">Only if workflow automation will generate more than $890/mo in additional revenue or saved labor. For teams closing $5K+ deals, one extra deal per month from better nurture sequences justifies the cost. If you close smaller deals, consider Pipedrive Growth ($39/seat) + a separate automation tool instead.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I skip Starter and go straight to Professional?</h3>
                <p className="text-muted">Technically yes, but the $890/mo + $3,000 onboarding is hard to justify if you haven&apos;t validated that your sales process benefits from automation. Start Free, move to Starter when branding or limits matter, and only jump to Professional when you can prove the ROI math.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s the cheapest alternative to HubSpot Professional?</h3>
                <p className="text-muted">Pipedrive Growth ($39/seat/mo) for CRM + ActiveCampaign Plus ($49/mo) for email automation + Zapier Professional ($29.99/mo) for workflow connections. For a 5-person team: ~$274/mo vs $890/mo. You lose the all-in-one dashboard but save $7,392/year.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive"]}
            comparisons={["hubspot-crm-vs-pipedrive"]}
            guides={["when-hubspot-stops-being-cheap", "hubspot-pricing-reality", "hubspot-onboarding-fee-explained"]}
          />
        </div>
      </article>
    </>
  );
}
