import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Best CRM for a 5-Person Team in 2026",
  description:
    "Pipedrive Lite at $14/seat vs Freshsales Growth at $11/seat vs HubSpot Starter at $20/seat. Annual cost comparison, feature trade-offs, and a clear verdict for teams of 5.",
};

export default function BestCrmFor5PersonTeamPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Best CRM for 5-Person Team</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Tool vs Category
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best CRM for a 5-Person Team in 2026
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            At 5 seats, per-seat pricing is the only thing that matters. The difference between
            a $11/seat CRM and a $20/seat CRM is $540/year. That gap only grows if you upgrade
            tiers. Here are the three best CRMs ranked for a 5-person team with exact annual costs.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Annual Cost Comparison at 5 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly/Seat</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Total (5 seats)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$11/seat</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$660/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Lite</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat</td>
                    <td className="px-4 py-2.5 text-muted">$840/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat</td>
                    <td className="px-4 py-2.5 text-muted">$1,200/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">#1: Freshsales Growth ($660/yr for 5 Seats)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Freshsales Growth at $11/seat/month (annual billing) is the cheapest legitimate CRM
              for a 5-person team. You get a visual pipeline, AI-powered contact scoring, built-in
              phone, email sequences, and 2,000 bot sessions per month. The Freshworks ecosystem
              (Freshdesk, Freshchat) is a bonus if you need support tools later.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The free tier supports up to 3 users with basic contact management and built-in
              chat, email, and phone. But at 5 people, Growth is where you need to be for
              pipeline management and automations.
            </p>
            <div className="bg-surface rounded-lg border border-border p-4 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Why #1 for 5-person teams</p>
              <p className="text-sm text-muted">
                Lowest per-seat cost at $11/seat/mo. AI scoring included at this tier. Built-in
                phone saves you a separate calling tool. Total 5-seat annual cost: $660.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">#2: Pipedrive Lite ($840/yr for 5 Seats)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Pipedrive Lite at $14/seat/month is the best pipeline-focused CRM at this price.
              The drag-and-drop visual pipeline is genuinely best-in-class for deal management.
              You get 3,000 deals, 30 custom fields, and basic lead and deal management. No
              email sync or automations at this tier; those require Growth at $39/seat.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The $180/year gap vs Freshsales buys you a cleaner pipeline UX and stronger
              activity tracking. If your team lives in the pipeline view, Pipedrive Lite is
              worth the premium.
            </p>
            <div className="bg-surface rounded-lg border border-border p-4 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Why #2 for 5-person teams</p>
              <p className="text-sm text-muted">
                Best pipeline UX in the sub-$20 range. $840/yr for 5 seats. But no email sync
                or automations at Lite. Upgrade to Growth ($39/seat) costs $2,340/yr.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">#3: HubSpot Starter ($1,200/yr for 5 Seats)</h2>
            <p className="text-muted leading-relaxed mb-3">
              HubSpot Starter at $20/seat/month costs $1,200/year for 5 seats. That buys you
              1,000 marketing contacts, email health reporting, and HubSpot branding removal.
              The free tier includes unlimited contacts, basic CRM, email marketing (2,000/month),
              forms, and live chat. The jump to Starter adds polish but the real value is at
              Professional ($890/month flat), which is out of reach for most 5-person teams.
            </p>
            <div className="bg-surface rounded-lg border border-border p-4 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Why #3 for 5-person teams</p>
              <p className="text-sm text-muted">
                Strongest ecosystem and free tier, but the most expensive paid tier at $20/seat.
                $1,200/yr for 5 seats. The Professional cliff ($890/mo flat) is a concern.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Why Not the Others</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Salesforce Starter Suite ($25/seat)</p>
                <p className="text-sm text-muted">
                  At $25/seat, Salesforce costs $1,500/yr for 5 seats. That is $840 more than
                  Freshsales for a tool designed for enterprises. Implementation complexity is
                  high. Overkill for 5 people.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Zoho CRM Standard ($20/seat)</p>
                <p className="text-sm text-muted">
                  Same price as HubSpot Starter but with a less polished UX. The Zoho ecosystem
                  (50+ apps) is valuable only if you use multiple Zoho products. At $1,200/yr
                  for 5 seats, Freshsales Growth is a better value.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Close Essentials ($49/seat)</p>
                <p className="text-sm text-muted">
                  Close starts at $49/seat for Essentials. That is $2,940/yr for 5 seats.
                  Built-in calling is excellent but the price is 4.5x Freshsales. Only worth
                  it if outbound calling is your primary activity.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Attio Plus ($34/seat)</p>
                <p className="text-sm text-muted">
                  Attio has a generous free tier (3 seats, 50,000 records), but the paid Plus
                  plan at $34/seat costs $2,040/yr for 5 seats. Modern and AI-native, but too
                  expensive for budget-conscious small teams.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Verdict</h2>
            <p className="text-muted leading-relaxed mb-3">
              For a 5-person team, Freshsales Growth at $660/year is the clear winner on value.
              You get AI contact scoring, built-in phone, email sequences, and a visual pipeline
              for the lowest per-seat cost. If pipeline UX matters more than price, Pipedrive Lite
              at $840/year is the runner-up. HubSpot Starter at $1,200/year is only worth it if
              you plan to grow into the HubSpot ecosystem and can stomach the Professional
              cliff later.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I start with HubSpot Free and upgrade later?</h3>
                <p className="text-sm text-muted">
                  Yes. HubSpot Free gives you unlimited contacts and basic CRM for all 5 users.
                  Upgrade to Starter ($20/seat) only when you need to remove branding or need
                  email health reporting. But beware: Professional is $890/month flat.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is Freshsales Free enough for 5 people?</h3>
                <p className="text-sm text-muted">
                  No. Freshsales Free supports up to 3 users only. At 5 people, you need the
                  Growth plan at $11/seat/month.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">When does Pipedrive become expensive?</h3>
                <p className="text-sm text-muted">
                  Pipedrive Lite at $14/seat is affordable. The jump to Growth ($39/seat) for
                  email sync and automations brings 5-seat cost to $2,340/year. That is 3.5x
                  Freshsales Growth.
                </p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["freshsales", "pipedrive", "hubspot-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive", "pipedrive-vs-freshsales"]}
            guides={[
              "best-crm-under-20-per-user",
              "best-crm-freelancers-consultants",
              "best-crm-for-25-person-team",
              "crm-annual-cost-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
