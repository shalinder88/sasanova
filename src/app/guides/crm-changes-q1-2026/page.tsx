import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "What Changed in CRM This Quarter (Q1 2026)",
  description:
    "Every significant CRM pricing change in Q1 2026: Salesforce annual increases, Pipedrive rebranded tiers, Close restructured plans. Exact old vs new prices and what to do about each change.",
};

export default function CrmChangesQ12026Page() {
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
              CRM Changes Q1 2026
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Competitive Intelligence
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            What Changed in CRM This Quarter (Q1 2026)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            CRM pricing moves slower than email or automation tools, but Q1 2026 brought
            meaningful changes. Salesforce continued its annual price creep, Pipedrive rebranded
            its tier structure, and Close restructured from 3 plans to 4 with new price points.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-accent font-semibold">Quarterly update</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Q1 2026 CRM Changes Summary</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What Changed</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Current Pricing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2.5 text-muted">Salesforce</td><td className="px-4 py-2.5 text-muted">~6% annual price increases on renewals</td><td className="px-4 py-2.5 text-muted">$25&ndash;$350/seat/mo</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Pipedrive</td><td className="px-4 py-2.5 text-muted">Rebranded: Essential&rarr;Lite, Advanced&rarr;Growth, Professional&rarr;Premium, Power&rarr;Ultimate</td><td className="px-4 py-2.5 text-muted">$14&ndash;$99/seat/mo</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Close</td><td className="px-4 py-2.5 text-muted">Restructured to Solo/Essentials/Growth/Scale</td><td className="px-4 py-2.5 text-muted">$19&ndash;$149/seat/mo</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">HubSpot</td><td className="px-4 py-2.5 text-muted">No significant changes</td><td className="px-4 py-2.5 text-muted">$0&ndash;$3,600/mo</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Zoho CRM</td><td className="px-4 py-2.5 text-muted">No significant changes</td><td className="px-4 py-2.5 text-muted">$0&ndash;$65/seat/mo</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Attio</td><td className="px-4 py-2.5 text-muted">No significant changes</td><td className="px-4 py-2.5 text-muted">$0&ndash;$69/seat/mo</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Freshsales</td><td className="px-4 py-2.5 text-muted">No significant changes</td><td className="px-4 py-2.5 text-muted">$0&ndash;$71/seat/mo</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Salesforce: The Quiet Annual Increase</h2>
            <p className="text-muted leading-relaxed mb-4">
              Salesforce does not announce price increases with press releases. It builds them
              into renewal contracts. Most Salesforce agreements include a 3&ndash;7% annual
              escalation clause. For Q1 2026, many teams renewing saw approximately 6% increases
              on their per-seat costs.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Current list prices:</strong> Starter Suite
              $25/seat/month, Pro Suite $100/seat/month, Enterprise $175/seat/month, Unlimited
              $350/seat/month. These are list prices &mdash; many enterprise customers negotiate
              lower rates on multi-year contracts.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The real impact:</strong> A 25-person team on
              Enterprise ($175/seat/month = $4,375/month) seeing a 6% increase pays an additional
              $262.50/month ($3,150/year). Over a 3-year contract, that compounds. Teams locked
              into Salesforce often find switching costs exceed the price increase, making them
              captive to annual hikes.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do:</strong> If you are renewing,
              negotiate. Ask for a multi-year lock at current pricing. If the increase is
              significant, evaluate whether a CRM like Zoho CRM Enterprise ($50/seat/month)
              or HubSpot Professional ($890/month flat) could serve your needs at lower total cost.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Pipedrive: Rebranded Tiers, Similar Prices</h2>
            <p className="text-muted leading-relaxed mb-4">
              Pipedrive rebranded its tier structure: Essential became Lite ($14/seat/month),
              Advanced became Growth ($39/seat/month), Professional became Premium ($49/seat/month),
              and Power became Ultimate ($99/seat/month). The pricing numbers stayed largely
              the same, but some features shifted between tiers.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What actually changed:</strong> The tier names
              and feature distribution. Some features that were on Advanced are now on Growth.
              Some Professional features moved to Premium. The net effect for most users is
              minimal, but if you relied on a specific feature, verify it is still in your tier.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do:</strong> Review the new feature
              list for your current tier. If a feature you use moved up, you either upgrade or
              find a workaround. The pricing itself did not change significantly, so this is a
              feature audit rather than a cost concern.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Close: New Plan Structure with Higher Entry</h2>
            <p className="text-muted leading-relaxed mb-4">
              Close restructured from Startup/Professional/Enterprise to four tiers: Solo
              ($19/seat/month, 1 user only), Essentials ($49/seat/month), Growth ($109/seat/month),
              and Scale ($149/seat/month). The previous Startup plan had a lower entry point for
              small teams.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Who it affects:</strong> New Close customers
              and small teams. The Solo plan ($19/month) is limited to a single user. Teams of
              2+ start at Essentials ($49/seat/month). At $98/month for 2 users, Close is now a
              premium inside-sales CRM rather than a startup-friendly option.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do:</strong> For solo users, Close Solo
              at $19/month is competitive. For teams, compare Close Essentials ($49/seat) against
              Pipedrive Growth ($39/seat) or HubSpot Starter ($20/seat). Close&apos;s built-in
              dialer and SMS justify the premium only if you do high-volume outbound calling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The CRMs That Did Not Change</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">HubSpot:</strong> Free ($0), Starter ($20/seat/month),
              Professional ($890/month flat), Enterprise ($3,600/month flat). No changes in Q1 2026.
              The Starter-to-Professional gap ($20 to $890) remains the most dramatic price jump
              in the CRM market.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Zoho CRM:</strong> Free (3 users), Standard
              ($20/seat/month), Professional ($35/seat/month), Enterprise ($50/seat/month), Ultimate
              ($65/seat/month). Stable pricing and remains the best value for feature depth. Zoho
              rarely changes pricing due to its self-funded business model.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Freshsales:</strong> Free (3 users), Growth
              ($11/seat/month), Pro ($47/seat/month), Enterprise ($71/seat/month). Among the
              most affordable CRMs with AI features (Freddy AI). No changes in Q1 2026.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Attio:</strong> Free (3 seats), Plus ($34/seat/month),
              Pro ($69/seat/month). The next-gen CRM market remains stable as these tools focus on
              user acquisition rather than revenue optimization.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Salesforce always increase prices at renewal?</h3>
                <p className="text-muted">Most Salesforce contracts include an annual escalation clause of 3&ndash;7%. You can negotiate this out on multi-year deals, but it requires leverage (willing to switch, volume commitment, or timing the negotiation at quarter-end).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Will Pipedrive&apos;s rebrand change my bill?</h3>
                <p className="text-muted">No. The pricing amounts did not change significantly. The tier names changed and some features shifted. Check that features you rely on are still in your current tier under the new naming.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Close still worth it at the new prices?</h3>
                <p className="text-muted">For solo users doing outbound calling, the Solo plan at $19/month is excellent value with built-in dialing. For teams, Close at $49/seat is expensive compared to Pipedrive Growth ($39/seat) or HubSpot Starter ($20/seat), but the built-in phone system justifies the premium for high-volume inside sales teams.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["salesforce", "pipedrive", "close-crm", "hubspot-crm", "zoho-crm", "freshsales", "attio"]}
            comparisons={["salesforce-vs-hubspot-crm", "hubspot-crm-vs-pipedrive", "pipedrive-vs-close-crm"]}
            guides={[
              "saas-pricing-changes-2026",
              "hubspot-pricing-history",
              "salesforce-implementation-mistakes",
              "how-to-choose-crm",
              "best-crm-under-20-per-user",
            ]}
          />
        </div>
      </article>
    </>
  );
}
