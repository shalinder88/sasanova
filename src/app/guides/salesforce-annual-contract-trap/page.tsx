import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Salesforce Annual Contracts: What Happens When You Want Out",
  description:
    "Salesforce has no monthly billing. All plans require annual contracts with early termination penalties. Exact tier prices, negotiation strategies, and what to do when you're stuck.",
};

export default function SalesforceAnnualContractTrapPage() {
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
              Salesforce Annual Contract Trap
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
            Salesforce Annual Contracts: What Happens When You Want Out
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Salesforce does not offer monthly billing. Every plan &mdash; from Starter Suite
            at $25/seat/mo to Unlimited at $350/seat/mo &mdash; requires an annual contract.
            If you want to cancel mid-year, you owe the remainder. Here is what the contract
            actually says, how to negotiate, and what your options are if you need out.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
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

          {/* Pricing Overview */}
          <section>
            <h2 className="text-xl font-bold mb-3">Salesforce Pricing: All Annual, No Monthly</h2>
            <p className="text-muted leading-relaxed mb-3">
              Unlike most SaaS tools that offer monthly billing (often at a premium), Salesforce
              exclusively sells annual contracts. The prices shown as &quot;per month&quot; on
              their website are annual commitments divided by 12.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Per Seat/Mo</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Per Seat/Yr</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">5-Seat Annual</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">25-Seat Annual</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Starter Suite</td>
                    <td className="px-4 py-3">$25</td>
                    <td className="px-4 py-3">$300</td>
                    <td className="px-4 py-3">$1,500</td>
                    <td className="px-4 py-3">$7,500</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Pro Suite</td>
                    <td className="px-4 py-3">$100</td>
                    <td className="px-4 py-3">$1,200</td>
                    <td className="px-4 py-3">$6,000</td>
                    <td className="px-4 py-3">$30,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Enterprise</td>
                    <td className="px-4 py-3">$175</td>
                    <td className="px-4 py-3">$2,100</td>
                    <td className="px-4 py-3">$10,500</td>
                    <td className="px-4 py-3">$52,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Unlimited</td>
                    <td className="px-4 py-3">$350</td>
                    <td className="px-4 py-3">$4,200</td>
                    <td className="px-4 py-3">$21,000</td>
                    <td className="px-4 py-3">$105,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* What Happens When You Cancel */}
          <section>
            <h2 className="text-xl font-bold mb-3">What Happens When You Try to Cancel</h2>
            <p className="text-muted leading-relaxed mb-3">
              Salesforce&apos;s standard terms do not allow early termination without penalty.
              Here is what typically happens:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">You owe the full annual amount.</strong> If you
                signed a Pro Suite contract for 10 seats ($12,000/year) and want to cancel after
                6 months, you still owe the remaining $6,000. Salesforce will invoice you for it.
              </li>
              <li>
                <strong className="text-foreground">No partial refunds by default.</strong> Salesforce
                does not prorate refunds for unused months. The contract is the contract.
              </li>
              <li>
                <strong className="text-foreground">Auto-renewal is on by default.</strong> Your
                contract auto-renews 30&ndash;60 days before expiration. You must send written
                cancellation notice before the renewal window or you are locked in for another year.
              </li>
              <li>
                <strong className="text-foreground">Seat reduction requires notice too.</strong> Even
                if you just want to reduce seats (not cancel entirely), you typically need to
                request this 30+ days before renewal.
              </li>
            </ul>
          </section>

          {/* How to Negotiate */}
          <section>
            <h2 className="text-xl font-bold mb-3">How to Negotiate a Salesforce Contract</h2>
            <ol className="list-decimal pl-5 space-y-3 text-muted mb-4">
              <li>
                <strong className="text-foreground">Negotiate before signing.</strong> Everything is
                negotiable before you sign. After you sign, you have almost no leverage. Ask for a
                shorter initial term (6 months) or an exit clause after 90 days.
              </li>
              <li>
                <strong className="text-foreground">Time your purchase to quarter-end.</strong> Salesforce
                sales reps have quarterly quotas. End of January, April, July, and October
                are the best times to negotiate discounts of 10&ndash;30%.
              </li>
              <li>
                <strong className="text-foreground">Ask for price caps on renewal.</strong> Salesforce
                commonly raises prices 5&ndash;10% at renewal. Request a multi-year price lock or a
                cap on annual increases.
              </li>
              <li>
                <strong className="text-foreground">Start with fewer seats than you need.</strong> Adding
                seats mid-contract is easy. Removing seats is not. Start conservatively and add as
                needed.
              </li>
              <li>
                <strong className="text-foreground">Get the cancellation window in writing.</strong> Confirm
                the exact date by which you must give notice to prevent auto-renewal. Put a calendar
                reminder 90 days before that date.
              </li>
            </ol>
          </section>

          {/* Alternatives with Monthly Billing */}
          <section>
            <h2 className="text-xl font-bold mb-3">CRM Alternatives with Monthly Billing</h2>
            <p className="text-muted leading-relaxed mb-3">
              If the annual commitment is a dealbreaker, these CRMs offer genuine month-to-month billing:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Pipedrive:</strong> $14/seat/mo (Lite) to
                $99/seat/mo (Ultimate). Monthly billing available, cancel anytime. Annual billing
                saves roughly 15%.
              </li>
              <li>
                <strong className="text-foreground">HubSpot CRM:</strong> Free tools are genuinely free.
                Starter is $20/seat/mo with monthly billing. Professional ($890/mo) requires annual
                commitment plus $3,000 onboarding fee.
              </li>
              <li>
                <strong className="text-foreground">Freshsales:</strong> Free for up to 3 users.
                Growth is $11/seat/mo, Pro is $47/seat/mo. Monthly billing available on all tiers.
              </li>
              <li>
                <strong className="text-foreground">Close:</strong> $19/seat/mo (Solo) to $149/seat/mo
                (Scale). Monthly billing available. No mandatory annual contracts.
              </li>
              <li>
                <strong className="text-foreground">Zoho CRM:</strong> Free for up to 3 users.
                Standard is $20/seat/mo, Professional is $35/seat/mo. Monthly billing available.
              </li>
            </ul>
          </section>

          {/* What to Do If Stuck */}
          <section>
            <h2 className="text-xl font-bold mb-3">Already Stuck in a Contract? Your Options</h2>
            <ol className="list-decimal pl-5 space-y-3 text-muted mb-4">
              <li>
                <strong className="text-foreground">Ride it out and prepare.</strong> Use the remaining
                contract months to migrate your data and train your team on the replacement CRM. Go
                live on the new platform the day your Salesforce contract expires.
              </li>
              <li>
                <strong className="text-foreground">Negotiate a buyout.</strong> Contact your account
                executive and ask about early termination options. If Salesforce believes you will
                not renew regardless, they sometimes agree to a reduced buyout.
              </li>
              <li>
                <strong className="text-foreground">Reduce seats at renewal.</strong> You cannot reduce
                seats mid-contract, but you can reduce at renewal. Drop to the minimum seat count
                needed and use the savings to fund the alternative.
              </li>
              <li>
                <strong className="text-foreground">Downgrade at renewal.</strong> Move from Enterprise
                ($175/seat) to Starter Suite ($25/seat) at renewal to dramatically cut costs while
                you transition off the platform.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Salesforce offer monthly billing?</h3>
                <p className="text-muted">No. All Salesforce plans require annual contracts. The &quot;per month&quot; prices on their website are annual commitments divided by 12. There is no pay-month-to-month option.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I cancel a Salesforce contract early?</h3>
                <p className="text-muted">Technically yes, but you owe the remaining balance. Salesforce does not prorate refunds by default. Some negotiation is possible, but expect to pay at least 50&ndash;75% of the remaining contract value.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When does Salesforce auto-renew?</h3>
                <p className="text-muted">Typically 30&ndash;60 days before your contract expiration date. You must submit written cancellation notice before this window or you are automatically locked in for another year at the renewal price.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Salesforce Starter Suite worth it for small teams?</h3>
                <p className="text-muted">At $25/seat/mo ($300/seat/yr) with annual commitment, Salesforce Starter Suite is competitive with Pipedrive Lite ($14/seat/mo monthly, $168/seat/yr annual). But Pipedrive offers monthly billing flexibility that Salesforce does not.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["salesforce", "pipedrive", "hubspot-crm", "freshsales"]}
            comparisons={["hubspot-crm-vs-salesforce", "pipedrive-vs-salesforce"]}
            guides={["salesforce-hidden-costs", "salesforce-lock-in-analysis", "is-salesforce-worth-it-for-small-business"]}
          />
        </div>
      </article>
    </>
  );
}
