import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Mailchimp in 2026",
  description:
    "Mailchimp's free tier shrank, pricing climbed, and better alternatives exist for every use case. Here are 4 situations where Mailchimp is the wrong choice — with real pricing and specific alternatives.",
};

export default function WhoShouldNotUseMailchimp() {
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
              Who Should NOT Use Mailchimp
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Anti-Recommendation
            </span>
            <span className="text-[11px] text-muted">11 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use Mailchimp in 2026
          </h1>
          <p className="text-lg text-muted">
            Mailchimp used to be the default email tool. Then Intuit bought it, raised prices, slashed the free tier from 2,000 contacts to 250, and stopped innovating on the features creators actually need. Here&apos;s who should stop using Mailchimp &mdash; and where to go instead.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Free Tier Problem ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Shrinking Free Tier Problem</p>
            <p className="text-sm text-muted mb-2">
              Mailchimp&apos;s free plan in 2020: 2,000 contacts, 10,000 sends/month, basic automation.
            </p>
            <p className="text-sm text-muted mb-2">
              Mailchimp&apos;s free plan in 2026: 250 contacts, 500 sends/month, no automation, single audience only.
            </p>
            <p className="text-sm text-muted">
              That&apos;s an 87% reduction in contacts and a 95% reduction in monthly sends. If you signed up for Mailchimp because of the free tier, the thing you signed up for no longer exists.
            </p>
          </div>

          {/* ── Case 1: Newsletters over 2,500 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Newsletters Over 2,500 Subscribers</h2>
          <p className="text-muted mb-4">
            Mailchimp charges by contacts (not sends). Once you pass 2,500 subscribers, beehiiv is cheaper at every single tier &mdash; and includes features Mailchimp charges extra for.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Standard</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv Scale</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">2,500</td>
                  <td className="px-4 py-2.5">$45/mo</td>
                  <td className="px-4 py-2.5">$39/mo (Scale)</td>
                  <td className="px-4 py-2.5">$72/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                  <td className="px-4 py-2.5">$100/mo</td>
                  <td className="px-4 py-2.5">$39/mo (Scale)</td>
                  <td className="px-4 py-2.5">$732/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                  <td className="px-4 py-2.5">$260/mo</td>
                  <td className="px-4 py-2.5">$99/mo (Scale)</td>
                  <td className="px-4 py-2.5">$1,932/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                  <td className="px-4 py-2.5">$385/mo</td>
                  <td className="px-4 py-2.5">$99/mo (Scale)</td>
                  <td className="px-4 py-2.5">$3,432/yr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-muted mb-4">
            beehiiv Scale includes referral programs, ad network monetization (Boosts), A/B testing, custom domains, and API access. Mailchimp charges for most of these as add-ons or requires Premium ($350/month base).
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">beehiiv</strong> &mdash; Scale plan at $39&ndash;$99/month covers up to 100K subscribers. Built for newsletter businesses with monetization, referral programs, and growth tools included. <Link href="/tools/beehiiv" className="text-accent hover:underline">See beehiiv review</Link></li>
            </ul>
          </div>

          {/* ── Case 2: Creators Wanting Monetization ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Creators Who Want to Monetize Their Newsletter</h2>
          <p className="text-muted mb-4">
            Mailchimp has no native monetization. No paid subscriptions, no ad network, no referral program. If you want to make money from your newsletter, Mailchimp requires you to bolt on third-party tools (Stripe, a paywall plugin, referral software) and maintain integrations yourself.
          </p>
          <p className="text-muted mb-4">
            Substack gives you paid subscriptions out of the box for a 10% revenue cut. beehiiv gives you paid subscriptions, a built-in ad network (Boosts), and a referral program for $39&ndash;$99/month flat &mdash; no revenue share.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Paid Subs</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Ad Network</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Revenue Cut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                  <td className="px-4 py-2.5">No</td>
                  <td className="px-4 py-2.5">No</td>
                  <td className="px-4 py-2.5">N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                  <td className="px-4 py-2.5">Yes</td>
                  <td className="px-4 py-2.5">No</td>
                  <td className="px-4 py-2.5">10% of revenue</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                  <td className="px-4 py-2.5">Yes</td>
                  <td className="px-4 py-2.5">Yes (Boosts)</td>
                  <td className="px-4 py-2.5">0% (flat monthly fee)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Ghost</td>
                  <td className="px-4 py-2.5">Yes</td>
                  <td className="px-4 py-2.5">No</td>
                  <td className="px-4 py-2.5">0% (self-hosted or $25+/mo)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Substack</strong> &mdash; Free to start, 10% cut on paid subscriptions. Best if you want zero upfront cost and are okay with limited design control. <Link href="/tools/substack" className="text-accent hover:underline">See Substack review</Link></li>
              <li><strong className="text-foreground">beehiiv</strong> &mdash; $39&ndash;$99/month, no revenue share. Best for newsletter businesses that want monetization without giving up a percentage of revenue. <Link href="/tools/beehiiv" className="text-accent hover:underline">See beehiiv review</Link></li>
            </ul>
          </div>

          {/* ── Case 3: Advanced Automation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Anyone Needing Advanced Automation</h2>
          <p className="text-muted mb-4">
            Mailchimp&apos;s automation is limited to basic drip sequences. There&apos;s no visual automation builder with conditional branching. No lead scoring. No multi-channel automation (email + SMS + webhooks). The automation features that exist are spread across plan tiers, with the useful ones locked behind Standard ($20/month at 500 contacts) or Premium ($350/month).
          </p>
          <p className="text-muted mb-4">
            ActiveCampaign&apos;s visual automation builder &mdash; available on Plus at $49/month &mdash; handles conditional logic, wait steps, if/else branching, CRM integration, and site tracking in a drag-and-drop interface that Mailchimp doesn&apos;t come close to matching.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">ActiveCampaign</strong> &mdash; Plus plan at $49/month (1,000 contacts). The strongest visual automation builder in email marketing. Conditional branching, lead scoring, CRM, site tracking, and multi-channel automation. <Link href="/tools/activecampaign" className="text-accent hover:underline">See ActiveCampaign review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: E-commerce ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. E-Commerce Businesses</h2>
          <p className="text-muted mb-4">
            Mailchimp added e-commerce features (product recommendations, abandoned cart emails, purchase tracking) but they&apos;re surface-level compared to platforms built specifically for e-commerce. Klaviyo integrates with Shopify at the product variant level, tracks revenue per email, and offers predictive analytics for customer lifetime value. Mailchimp can&apos;t match this depth.
          </p>
          <p className="text-muted mb-4">
            At 10,000 contacts, Mailchimp Standard costs $100/month. Klaviyo costs $150/month but includes SMS, advanced segmentation, and revenue attribution that Mailchimp doesn&apos;t offer at any price. For e-commerce specifically, the extra $50/month pays for itself in better targeting.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Klaviyo</strong> &mdash; Free up to 250 contacts. Paid from $20/month. The default email platform for Shopify stores. Deep product integration, revenue tracking, predictive analytics, and SMS in one platform.</li>
              <li><strong className="text-foreground">Brevo</strong> &mdash; From $18/month (unlimited contacts, charges by email volume). Good for e-commerce teams on tighter budgets who need transactional + marketing email in one tool. <Link href="/tools/brevo" className="text-accent hover:underline">See Brevo review</Link></li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Mailchimp IS Still the Right Choice</h2>
          <p className="text-muted mb-4">
            There is one specific scenario where Mailchimp remains a reasonable pick: <strong className="text-foreground">a small business (not a creator, not e-commerce) with under 2,500 contacts that needs simple email campaigns, basic landing pages, and social media posting in one tool &mdash; and values Mailchimp&apos;s template gallery and brand familiarity.</strong>
          </p>
          <p className="text-muted mb-4">
            Mailchimp&apos;s Standard plan at $20/month for 500 contacts gives you email campaigns, landing pages, social media scheduling, basic automations, A/B testing, and a content studio. It&apos;s the only platform that bundles email + social + landing pages at that price point. If you&apos;re a local business or small B2B that sends a monthly newsletter and occasional campaigns, Mailchimp still works.
          </p>
          <p className="text-muted mb-4">
            The moment you grow past 2,500 contacts, hit automation limits, or want monetization &mdash; it&apos;s time to move.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Mailchimp still free?</h3>
                <p className="text-muted">Technically yes, but the free tier is now limited to 250 contacts and 500 sends/month. That&apos;s enough for a contact form, not a real email list. Most users will need a paid plan within the first month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How hard is it to migrate away from Mailchimp?</h3>
                <p className="text-muted">Moderately easy. Contact export is straightforward (CSV). Email templates don&apos;t transfer natively &mdash; you&apos;ll need to rebuild them. Automation workflows need to be recreated from scratch. The actual subscriber migration takes 30&ndash;60 minutes for most lists.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why did Mailchimp get so expensive?</h3>
                <p className="text-muted">Intuit acquired Mailchimp in 2021 for $12 billion. Since then, pricing has increased while free tier limits have decreased. This is a standard pattern for acquired SaaS products: optimize for revenue extraction from the existing user base.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What about Mailchimp&apos;s deliverability?</h3>
                <p className="text-muted">Mailchimp&apos;s deliverability is average. It uses shared IP pools for most users, meaning your sender reputation is partly dependent on other Mailchimp users on the same IP. ActiveCampaign, beehiiv, and Kit all have comparable or better deliverability at their respective price points.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Mailchimp charge for unsubscribed contacts?</h3>
                <p className="text-muted">Yes. Mailchimp counts all contacts toward your tier &mdash; including unsubscribed and non-subscribed contacts. You need to manually archive or delete them to avoid paying for dead contacts. This is one of the most common complaints and a recurring source of unexpected bills.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["mailchimp", "beehiiv", "activecampaign", "kit", "brevo"]}
          comparisons={["mailchimp-vs-beehiiv", "mailchimp-vs-activecampaign"]}
          guides={["mailchimp-hidden-costs", "mailchimp-pricing-history", "migrate-from-mailchimp", "best-email-tool-creators"]}
        />
      </article>
    </>
  );
}
