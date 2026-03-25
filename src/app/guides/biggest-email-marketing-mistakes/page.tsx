import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The 7 Biggest Email Marketing Platform Mistakes",
  description:
    "Mistake #1: Paying Mailchimp Standard ($20/mo at 500 contacts) when beehiiv Launch is free for 2,500 subscribers. Real prices from every major platform, real savings math, and what to do instead.",
};

export default function BiggestEmailMarketingMistakes() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Biggest Email Marketing Mistakes</span>
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
            The 7 Biggest Email Marketing Platform Mistakes
          </h1>
          <p className="text-lg text-muted">
            Email marketing is the highest-ROI channel for most businesses. It&apos;s also where the most money gets wasted on platform fees. Here are 7 mistakes that cost real dollars &mdash; with exact prices to prove it.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Mistake 1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 1: Defaulting to Mailchimp Because It&apos;s Familiar</h2>
          <p className="text-muted mb-4">
            Mailchimp Free caps at 250 contacts and 500 sends/mo. Essentials starts at $13/mo for 500 contacts. Standard is $20/mo for 500 contacts. Meanwhile, Kit Newsletter is free for 10,000 subscribers with unlimited sends. beehiiv Launch is free for 2,500 subscribers with unlimited sends. At 5,000 contacts, Mailchimp Standard costs $75/mo. Kit Newsletter is still free. That&apos;s <strong className="text-foreground">$900/year saved</strong>.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">If you send newsletters: beehiiv Launch (free) or Kit Newsletter (free). If you need automation: ActiveCampaign Starter ($15/mo) or Kit Creator ($39/mo). Mailchimp only makes sense if you need its e-commerce integrations and product recommendation engine.</p>
          </div>

          {/* ── Mistake 2 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 2: Paying for Contacts You Don&apos;t Email</h2>
          <p className="text-muted mb-4">
            Mailchimp and ActiveCampaign charge by contact count, including unsubscribed and inactive contacts. If 20% of your Mailchimp list is inactive, you&apos;re paying 20% more than you should. At 10,000 contacts on Mailchimp Standard ($115/mo), 2,000 inactive contacts cost you ~$23/mo or <strong className="text-foreground">$276/year for people who will never open your emails</strong>.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Clean your list quarterly. Remove contacts who haven&apos;t opened an email in 6 months. Or switch to Brevo, which charges by emails sent ($9/mo Starter for 5,000 emails/mo) not contacts stored (unlimited contacts on all plans).</p>
          </div>

          {/* ── Mistake 3 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 3: Buying Automation Before You Have a List</h2>
          <p className="text-muted mb-4">
            ActiveCampaign Plus ($49/mo) has an amazing automation builder. But if you have 200 subscribers, you don&apos;t need conditional branching, lead scoring, or split automations. You need to grow your list first. Kit Newsletter (free, 10,000 subscribers) or beehiiv Launch (free, 2,500 subscribers) costs $0/mo while you build your audience.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Start with a free plan. Build to 1,000+ subscribers. Then evaluate if you need automation (most creators don&apos;t until 5,000+). Save $49&ndash;$79/mo in the months that matter most &mdash; when revenue is zero.</p>
          </div>

          {/* ── Mistake 4 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 4: Ignoring Deliverability Until It&apos;s Too Late</h2>
          <p className="text-muted mb-4">
            Free and low-tier plans often share IP addresses with thousands of other senders. If those senders have poor habits, your deliverability suffers. Mailchimp Free and Essentials use shared IPs. Brevo Professional ($499/mo) includes a dedicated IP. ActiveCampaign Enterprise ($145/mo at 1K contacts) includes dedicated sending infrastructure.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">You don&apos;t need a dedicated IP until 50K+ subscribers. But you do need to warm your domain, set up DKIM/SPF/DMARC, and monitor bounce rates from day one. These are free to set up on every platform. Don&apos;t pay $499/mo for a dedicated IP &mdash; pay attention to authentication.</p>
          </div>

          {/* ── Mistake 5 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 5: Choosing a Newsletter Platform When You Need Marketing Automation</h2>
          <p className="text-muted mb-4">
            beehiiv ($49/mo Scale) and Kit ($39/mo Creator) are built for newsletters &mdash; broadcasts, growth tools, monetization. They are not marketing automation platforms. If you need abandoned cart emails, lead scoring, or behavior-triggered sequences, you need ActiveCampaign (from $15/mo) or HubSpot (from $20/seat/mo), not a newsletter tool.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Define your primary use case. Newsletter/audience building? Use beehiiv or Kit. E-commerce lifecycle marketing? Use ActiveCampaign ($15&ndash;$79/mo) or Brevo ($9&ndash;$18/mo). CRM + email combo? Use HubSpot ($20/seat/mo Starter). Don&apos;t force a newsletter tool to do automation.</p>
          </div>

          {/* ── Mistake 6 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 6: Annual Billing Before You&apos;ve Validated</h2>
          <p className="text-muted mb-4">
            Most email tools offer 15&ndash;30% discounts for annual billing. ActiveCampaign Starter drops from $15/mo to $9/mo annual. Kit Creator drops from $39/mo to $39/mo (no discount). Mailchimp Standard drops from $20/mo to $20/mo (no discount). But if you switch platforms at month 3, that annual payment is gone. At ActiveCampaign Plus annual ($348/yr), switching at month 3 wastes $261.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Pay monthly for the first 3&ndash;6 months. Validate that the tool fits your workflow. Only switch to annual billing after you&apos;re confident you&apos;re staying. The 15&ndash;30% discount isn&apos;t worth the lock-in risk.</p>
          </div>

          {/* ── Mistake 7 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 7: Underestimating Contact Tier Scaling</h2>
          <p className="text-muted mb-4">
            Mailchimp Standard at 500 contacts: $20/mo. At 5,000: $75/mo. At 25,000: $270/mo. At 50,000: $410/mo. The price more than doubles every time you 5x your list. beehiiv Scale stays at $49/mo for unlimited subscribers. Kit Creator at 10,000 subscribers is $119/mo. At 25,000: $199/mo. The cost trajectories diverge dramatically as you grow.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Before choosing a platform, calculate your cost at 3x your current list size. If Mailchimp at 15,000 contacts ($230/mo) is too much, don&apos;t start with Mailchimp at 1,000 contacts ($13/mo) &mdash; you&apos;ll face a painful migration later. Choose platforms with flat pricing (beehiiv) or send-based pricing (Brevo) if you plan to grow aggressively.</p>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">What&apos;s the cheapest email marketing platform that&apos;s still good?</h3>
          <p className="text-muted mb-4">
            For newsletters: beehiiv Launch ($0) or Kit Newsletter ($0). For basic automation: Brevo Starter ($9/mo). For advanced automation: ActiveCampaign Starter ($15/mo). All three are genuinely good tools, not crippled free tiers.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Should I pay for Mailchimp Premium ($350/mo)?</h3>
          <p className="text-muted mb-4">
            Almost never. Premium&apos;s main feature is phone support and comparative reporting. At $350/mo, ActiveCampaign Enterprise ($145/mo) provides better automation, HIPAA compliance, and dedicated support for less money. The only case for Mailchimp Premium is if you&apos;re deeply embedded in their e-commerce ecosystem.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "when-mailchimp-becomes-expensive",
            "how-to-choose-email-platform",
            "migrate-from-mailchimp",
            "best-email-tool-creators",
          ]}
        />
      </article>
    </>
  );
}
