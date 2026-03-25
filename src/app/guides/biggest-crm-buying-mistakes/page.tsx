import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The 7 Biggest CRM Buying Mistakes (And How to Avoid Them)",
  description:
    "Mistake #1: Starting with HubSpot Professional ($890/mo) when Starter ($20/seat) is enough. Mistake #2: Ignoring Pipedrive ($14/seat) because it's not 'enterprise.' Real prices, real math, real alternatives.",
};

export default function BiggestCrmBuyingMistakes() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Biggest CRM Buying Mistakes</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Buyer Mistakes</span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The 7 Biggest CRM Buying Mistakes (And How to Avoid Them)
          </h1>
          <p className="text-lg text-muted">
            CRM is the tool with the highest regret rate. Teams pick too early, pay too much, and switch too late. Here are the 7 mistakes that cost real money &mdash; with exact prices showing why each one hurts.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Mistake 1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 1: Starting with HubSpot Professional When Starter Is Enough</h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s sales team will push Professional ($890/mo flat) for the automation and custom reporting. Most teams under 10 people need neither. HubSpot Starter ($20/seat/mo) handles contacts, deals, email tracking, forms, and basic reporting. For a 5-person team, that&apos;s $100/mo vs $890/mo &mdash; a $790/mo difference, or <strong className="text-foreground">$9,480/year wasted</strong>.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Start with HubSpot Free or Starter. Add Zapier ($29.99/mo) or Make ($10.59/mo) for the 2&ndash;3 automations you actually need. Total: $130/mo vs $890/mo. Upgrade to Professional only when you need 10+ automations with complex branching.</p>
          </div>

          {/* ── Mistake 2 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 2: Choosing Salesforce for a 5-Person Team</h2>
          <p className="text-muted mb-4">
            Salesforce Pro Suite is $100/seat/mo. For 5 people, that&apos;s $500/mo &mdash; and that&apos;s before implementation. Most Salesforce deployments require a consultant ($150&ndash;$300/hr) or admin ($60&ndash;120K/year). The true first-year cost for a 5-person team is often $10,000&ndash;$20,000 when you include setup, training, and customization.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Pipedrive Growth ($39/seat/mo &times; 5 = $195/mo) or HubSpot Starter ($20/seat/mo &times; 5 = $100/mo) handles everything a 5-person sales team needs. Save Salesforce for when you have 50+ users with complex, multi-department workflows.</p>
          </div>

          {/* ── Mistake 3 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 3: Picking a CRM for Its Marketing Features</h2>
          <p className="text-muted mb-4">
            HubSpot Marketing Hub Professional ($890/mo) is powerful but expensive. Teams often pick HubSpot for marketing automation when they really need a CRM ($20/seat/mo) plus a separate email tool. Pipedrive Lite ($14/seat/mo) + ActiveCampaign Plus ($49/mo for CRM + email automation) = $63/mo for one seat &mdash; 93% cheaper than HubSpot Professional for comparable automation.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Buy your CRM for CRM features (pipeline, contacts, deals). Buy your email tool for email features (automation, sequences, deliverability). Connect them with Make ($10.59/mo). Total: under $100/mo. Don&apos;t pay $890/mo for a bundle.</p>
          </div>

          {/* ── Mistake 4 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 4: Ignoring the Switching Cost Trap</h2>
          <p className="text-muted mb-4">
            Every month you use a CRM, you&apos;re building switching costs: custom fields, automation workflows, team training, integrations. After 12 months on HubSpot Professional ($890/mo), you&apos;ve spent $10,680 and built significant lock-in. Switching to Pipedrive takes 2&ndash;4 weeks of migration work plus retraining &mdash; teams often stay just because switching is painful, not because the tool is right.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Start small, upgrade intentionally. Use HubSpot Free or Pipedrive Lite ($14/seat/mo) for 3 months. Validate the workflow before committing to expensive tiers. The cost of starting over from a cheap CRM is minimal; starting over from an expensive one is painful.</p>
          </div>

          {/* ── Mistake 5 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 5: Paying for CRM Features Nobody Uses</h2>
          <p className="text-muted mb-4">
            Pipedrive Ultimate ($99/seat/mo) includes security alerts and implementation support. Most 5-person teams never touch either. HubSpot Enterprise ($3,600/mo) includes custom objects, hierarchical teams, and predictive lead scoring &mdash; features designed for 100+ user organizations. Paying for Enterprise features at Starter-sized companies wastes $1,000&ndash;$3,000/mo.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Audit feature usage quarterly. Most CRMs show login frequency and feature adoption in admin settings. If your team uses pipeline, email, and basic reporting, you need Pipedrive Lite ($14/seat) or HubSpot Starter ($20/seat), not Premium or Professional.</p>
          </div>

          {/* ── Mistake 6 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 6: Using a Spreadsheet Too Long</h2>
          <p className="text-muted mb-4">
            The opposite mistake: staying on Google Sheets past the point where it costs you deals. Manual CRM work averages 2 hours/week for a salesperson. At $50/hr, that&apos;s $5,200/year in lost productivity. Pipedrive Lite ($14/seat/mo = $168/year) pays for itself in 2 weeks of time savings.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Switch to a real CRM when you have 50+ contacts or close 2+ deals per month. HubSpot Free costs $0. Pipedrive Lite costs $14/seat/mo. Both are cheaper than the time you waste maintaining spreadsheets.</p>
          </div>

          {/* ── Mistake 7 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 7: Not Testing the Mobile App</h2>
          <p className="text-muted mb-4">
            Sales teams live on their phones. If your CRM&apos;s mobile app is bad, adoption drops to zero. Salesforce mobile is functional but complex. HubSpot mobile is polished. Pipedrive mobile is excellent for pipeline management. Test the mobile app with your actual workflow before committing &mdash; especially at Salesforce prices ($100&ndash;$350/seat/mo). A CRM nobody opens is a CRM you wasted money on.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">During your trial period, use the mobile app exclusively for one full day. Log a call, create a deal, check your pipeline, send a follow-up. If any of those feel painful, the CRM won&apos;t get used regardless of price.</p>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">What&apos;s the most common CRM mistake?</h3>
          <p className="text-muted mb-4">
            Overpaying. Teams routinely pay $500&ndash;$900/mo for CRM features they use 20% of. Start with the cheapest tier that handles your core workflow (contacts, deals, email). Upgrade only when a specific limit blocks a specific need.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Should I start with HubSpot Free or Pipedrive Lite?</h3>
          <p className="text-muted mb-4">
            HubSpot Free if you want email marketing (2,000 sends/mo included), forms, and live chat alongside CRM. Pipedrive Lite ($14/seat/mo) if you want better pipeline visualization and don&apos;t need marketing features. Both are excellent starting points.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">When is Salesforce actually worth it?</h3>
          <p className="text-muted mb-4">
            When you have 50+ users, complex approval workflows, multiple departments sharing data, and the budget for an admin. Below 50 users, HubSpot Professional ($890/mo) or Pipedrive Premium ($49/seat &times; users) almost always provides better value.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "how-to-choose-crm",
            "hubspot-pricing-reality",
            "when-free-crm-costs-more",
            "salesforce-hidden-costs",
          ]}
        />
      </article>
    </>
  );
}
