import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "HubSpot's $3,000 Onboarding Fee: What You Get and Whether It's Worth It",
  description:
    "HubSpot's mandatory Professional onboarding fee is $3,000. What's included, what's not, when to pay it, and when to hire a freelancer instead. Exact pricing at every HubSpot tier.",
};

export default function HubSpotOnboardingFeeExplainedPage() {
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
              HubSpot Onboarding Fee
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Gotcha
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            HubSpot&apos;s $3,000 Onboarding Fee: What You Get and Whether It&apos;s Worth It
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            When you sign up for HubSpot Professional ($890/mo), you will be required to pay
            a one-time onboarding fee. For Marketing Hub Professional, that fee is $3,000. This
            guide explains exactly what the fee covers, what it does not, and whether you should
            pay HubSpot directly or hire a freelancer to do it cheaper.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* HubSpot Tiers */}
          <section>
            <h2 className="text-xl font-bold mb-3">HubSpot CRM Pricing Overview</h2>
            <p className="text-muted leading-relaxed mb-3">
              Before diving into the onboarding fee, here is HubSpot&apos;s current pricing structure:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Monthly Price</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Annual Price</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Billing Model</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Free Tools</td>
                    <td className="px-4 py-3">$0/mo</td>
                    <td className="px-4 py-3">$0/yr</td>
                    <td className="px-4 py-3">Flat</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Starter</td>
                    <td className="px-4 py-3">$20/seat/mo</td>
                    <td className="px-4 py-3">$216/seat/yr</td>
                    <td className="px-4 py-3">Per seat</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Professional</td>
                    <td className="px-4 py-3">$890/mo</td>
                    <td className="px-4 py-3">$10,680/yr</td>
                    <td className="px-4 py-3">Flat (+ onboarding fee)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Enterprise</td>
                    <td className="px-4 py-3">$3,600/mo</td>
                    <td className="px-4 py-3">$43,200/yr</td>
                    <td className="px-4 py-3">Flat (+ onboarding fee)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              The jump from Starter ($20/seat/mo) to Professional ($890/mo flat) is a 4,350% increase.
              Then the onboarding fee adds $3,000 on top of that first-month cost.
            </p>
          </section>

          {/* What's Included */}
          <section>
            <h2 className="text-xl font-bold mb-3">What the $3,000 Onboarding Fee Includes</h2>
            <p className="text-muted leading-relaxed mb-3">
              HubSpot&apos;s onboarding for Marketing Hub Professional typically includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Guided setup calls.</strong> Usually 4&ndash;6 sessions
                with a HubSpot onboarding specialist over 60&ndash;90 days. They walk you through
                portal configuration, not strategy.
              </li>
              <li>
                <strong className="text-foreground">Technical configuration.</strong> Domain connection,
                email authentication (DKIM, SPF), tracking code installation, and form setup.
              </li>
              <li>
                <strong className="text-foreground">Data import assistance.</strong> Guidance on importing
                contacts, companies, and deals from your previous CRM or spreadsheets.
              </li>
              <li>
                <strong className="text-foreground">Basic workflow setup.</strong> Help creating 1&ndash;2
                example automation workflows to demonstrate the platform.
              </li>
              <li>
                <strong className="text-foreground">Access to HubSpot Academy.</strong> You already get this
                free regardless of whether you pay the onboarding fee.
              </li>
            </ul>
          </section>

          {/* What's Not Included */}
          <section>
            <h2 className="text-xl font-bold mb-3">What the Fee Does NOT Include</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Strategy development.</strong> HubSpot teaches you how
                to use buttons, not how to design your marketing strategy. You need to come with a plan.
              </li>
              <li>
                <strong className="text-foreground">Custom template design.</strong> Email templates,
                landing pages, and website themes are not created for you.
              </li>
              <li>
                <strong className="text-foreground">Full automation buildout.</strong> You get 1&ndash;2
                example workflows. Building your complete automation library is on you.
              </li>
              <li>
                <strong className="text-foreground">Data cleanup or migration execution.</strong> They
                guide the import process but do not clean your data or map complex fields.
              </li>
              <li>
                <strong className="text-foreground">Ongoing support.</strong> The onboarding period is
                typically 90 days. After that, you are on standard support.
              </li>
            </ul>
          </section>

          {/* Freelancer Alternative */}
          <section>
            <h2 className="text-xl font-bold mb-3">When to Hire a Freelancer Instead</h2>
            <p className="text-muted leading-relaxed mb-3">
              HubSpot-certified freelancers on platforms like Upwork typically charge $75&ndash;$150/hour
              for implementation work. A full Professional setup usually takes 15&ndash;25 hours,
              putting the cost at $1,125&ndash;$3,750.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">The freelancer advantage</p>
              <p className="text-sm text-muted">
                A good freelancer will actually build your workflows, design your templates, clean
                and migrate your data, and configure your portal to match your specific business
                process. HubSpot&apos;s onboarding teaches you to do these things yourself. If you
                have the time to learn, pay HubSpot. If you need it done, hire a freelancer.
              </p>
            </div>
            <p className="text-muted leading-relaxed mb-3">
              Some HubSpot Solutions Partners can waive the onboarding fee if you purchase through
              them. The trade-off is that you may pay their implementation fee instead, which can
              range from $2,000 to $10,000+ depending on scope.
            </p>
          </section>

          {/* Total First-Year Cost */}
          <section>
            <h2 className="text-xl font-bold mb-3">Total First-Year Cost Reality</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Cost Component</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Professional (annual)</td>
                    <td className="px-4 py-3">$10,680</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Mandatory onboarding fee</td>
                    <td className="px-4 py-3">$3,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Additional marketing contacts (if needed)</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                  <tr className="border-b border-border font-semibold">
                    <td className="px-4 py-3 text-foreground">Year 1 minimum</td>
                    <td className="px-4 py-3 text-foreground">$13,680</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Compare this to Pipedrive Growth at $39/seat/mo ($468/seat/yr) with no onboarding
              fee, or ActiveCampaign Plus at $49/mo ($588/yr) with no onboarding fee. The
              alternatives are not identical products, but the price gap is enormous for small
              teams.
            </p>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is the HubSpot onboarding fee mandatory?</h3>
                <p className="text-muted">Yes, for Professional and Enterprise tiers. You cannot skip it when purchasing directly from HubSpot. Some Solutions Partners can waive it if you purchase through them.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I negotiate the onboarding fee?</h3>
                <p className="text-muted">HubSpot occasionally offers reduced onboarding fees during promotional periods or at end of quarter. You can also ask about deferred payment. But the fee itself is rarely fully waived.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does HubSpot Starter require onboarding?</h3>
                <p className="text-muted">No. The Free Tools and Starter plans ($20/seat/mo) have no mandatory onboarding fee. The fee only applies to Professional ($890/mo) and Enterprise ($3,600/mo).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What if I already know HubSpot?</h3>
                <p className="text-muted">You still pay the fee. Even experienced HubSpot users must pay the onboarding fee when setting up a new Professional or Enterprise portal. HubSpot positions it as a success guarantee, not a training requirement.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "activecampaign"]}
            comparisons={["hubspot-crm-vs-pipedrive", "hubspot-crm-vs-salesforce"]}
            guides={["when-hubspot-stops-being-cheap", "hubspot-pricing-reality", "hubspot-lock-in-analysis"]}
          />
        </div>
      </article>
    </>
  );
}
