import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email List Health: The Metrics Nobody Talks About Until Deliverability Tanks",
  description:
    "Open rate benchmarks by platform, bounce rate management, sunset policies for inactive subscribers, re-engagement sequences, platform-specific list hygiene tools, and the real cost of a dirty list.",
};

export default function EmailListHealthGuide() {
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
              Email List Health Guide
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Email Marketing
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email List Health: The Metrics Nobody Talks About Until Deliverability Tanks
          </h1>
          <p className="text-lg text-muted">
            A 50,000-subscriber list where 30,000 people haven&apos;t opened an email in 6 months isn&apos;t a 50,000-subscriber list. It&apos;s a 20,000-subscriber list with a deliverability anchor attached to it. And on platforms that charge by subscriber count, it&apos;s also a billing problem. This guide covers the metrics that actually indicate list health, how each platform measures them differently, and when to start removing subscribers.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Open Rates by Platform ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Open Rate Benchmarks: They Count Differently</h2>
          <p className="text-muted mb-4">
            Open rates are the most-cited email metric and the least reliable. Every platform reports them, but the numbers aren&apos;t directly comparable because of how Apple Mail Privacy Protection (MPP) changed tracking since September 2021.
          </p>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">The Apple Mail Problem</h3>
              <p className="text-sm text-muted">Apple Mail Privacy Protection pre-loads tracking pixels for all emails, making every Apple Mail user appear as an opener regardless of whether they actually read the email. Approximately 50&ndash;60% of email is opened on Apple Mail. This means your open rates are artificially inflated by 30&ndash;50% compared to pre-2021 numbers. A reported 55% open rate might reflect 35% actual opens.</p>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">How opens are counted</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Apple MPP handling</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Reported avg open rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                  <td className="px-4 py-2.5">Tracking pixel + link click inference</td>
                  <td className="px-4 py-2.5 text-yellow-400">Flags MPP opens but still counts them</td>
                  <td className="px-4 py-2.5">35&ndash;45% (inflated)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td>
                  <td className="px-4 py-2.5">Tracking pixel</td>
                  <td className="px-4 py-2.5 text-green-400">Can filter MPP opens in reports</td>
                  <td className="px-4 py-2.5">25&ndash;35% (with MPP filtered)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Kit</td>
                  <td className="px-4 py-2.5">Tracking pixel + engagement scoring</td>
                  <td className="px-4 py-2.5 text-yellow-400">Counts MPP opens, uses engagement score as supplement</td>
                  <td className="px-4 py-2.5">40&ndash;55% (inflated for creators)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                  <td className="px-4 py-2.5">Tracking pixel</td>
                  <td className="px-4 py-2.5 text-yellow-400">Reports MPP opens in overall rate</td>
                  <td className="px-4 py-2.5">40&ndash;55% (inflated)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                  <td className="px-4 py-2.5">Tracking pixel</td>
                  <td className="px-4 py-2.5 text-yellow-400">No MPP-specific filtering</td>
                  <td className="px-4 py-2.5">25&ndash;40%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">What this means for you:</strong> Stop comparing your open rates to published benchmarks. They&apos;re inflated by MPP. Instead, track your own open rate trend over time. A declining trend means list health is degrading, regardless of the absolute number. Click rates are now a more reliable engagement signal because MPP doesn&apos;t affect clicks.
          </p>

          {/* ── Bounce Rate Management ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Bounce Rate Management</h2>
          <p className="text-muted mb-4">
            Bounces come in two types. Hard bounces mean the address doesn&apos;t exist (permanent). Soft bounces mean a temporary issue &mdash; inbox full, server down, message too large. How each platform handles bounces directly affects your sender reputation.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Hard bounce handling</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Soft bounce handling</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Acceptable bounce rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                  <td className="px-4 py-2.5 text-green-400">Auto-removed after 1 hard bounce</td>
                  <td className="px-4 py-2.5 text-green-400">Auto-removed after 7 consecutive soft bounces</td>
                  <td className="px-4 py-2.5">&lt; 2% per campaign</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td>
                  <td className="px-4 py-2.5 text-green-400">Auto-unsubscribed after 1 hard bounce</td>
                  <td className="px-4 py-2.5 text-green-400">Auto-unsubscribed after 3 soft bounces</td>
                  <td className="px-4 py-2.5">&lt; 3% per campaign</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Kit</td>
                  <td className="px-4 py-2.5 text-green-400">Auto-marked as bounced, excluded from sends</td>
                  <td className="px-4 py-2.5 text-green-400">Retried 3 times, then marked inactive</td>
                  <td className="px-4 py-2.5">&lt; 2% per broadcast</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                  <td className="px-4 py-2.5 text-green-400">Auto-removed from active list</td>
                  <td className="px-4 py-2.5 text-green-400">Retried, then suppressed</td>
                  <td className="px-4 py-2.5">&lt; 2% per send</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                  <td className="px-4 py-2.5 text-green-400">Auto-blacklisted after 1 hard bounce</td>
                  <td className="px-4 py-2.5 text-green-400">Auto-blacklisted after 5 soft bounces</td>
                  <td className="px-4 py-2.5">&lt; 3% per campaign</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">All five platforms handle hard bounces automatically.</strong> The difference is in soft bounce thresholds and how quickly they remove problematic addresses. Mailchimp is the most aggressive (7 consecutive soft bounces), while Brevo gives the most leeway (5 soft bounces). If your bounce rate exceeds 5% on any single send, investigate immediately &mdash; you likely have a list hygiene problem or imported unverified addresses.
          </p>

          {/* ── Sunset Policies ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Sunset Policies: When to Remove Inactive Subscribers</h2>
          <p className="text-muted mb-4">
            A sunset policy defines when you stop emailing inactive subscribers. It&apos;s the most important list health practice and the one most people skip because removing subscribers feels like going backward.
          </p>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">The 90-Day Rule</h3>
              <p className="text-sm text-muted">If a subscriber hasn&apos;t opened or clicked any email in 90 days, they should enter a re-engagement sequence. If they don&apos;t engage with the re-engagement emails, remove them at the 120-day mark. This is aggressive but it&apos;s the standard recommendation from deliverability experts. Your list gets smaller and your metrics get better.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">The 180-Day Rule (Conservative)</h3>
              <p className="text-sm text-muted">For newsletters with infrequent sends (weekly or less), 90 days may be too aggressive. If you only send 2&ndash;4 emails per month, a subscriber might not open in 90 days simply because your cadence is low. Use 180 days for re-engagement trigger and 210 days for removal. This gives subscribers more time to re-engage naturally.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">The Billing Impact</h3>
              <p className="text-sm text-muted">On platforms that charge by subscriber count (Mailchimp, Kit, ActiveCampaign), inactive subscribers cost money. A 10,000-subscriber list where 4,000 are inactive means you&apos;re paying for 4,000 people who will never buy from you. On Mailchimp Standard at 10,000 contacts, you pay $100/mo. At 6,000 contacts (after removing inactive), you&apos;d pay $75/mo. That&apos;s $300/yr in savings. At 50,000 contacts, the savings are $1,800+/yr.</p>
            </div>
          </div>

          {/* ── Re-engagement Sequences ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Re-engagement Sequences That Work vs Ones That Waste Sends</h2>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">What works: The 3-email re-engagement sequence</h3>
              <p className="text-sm text-muted"><strong className="text-foreground">Email 1 (Day 0):</strong> Subject line that acknowledges inactivity. Something direct, not cutesy. Provide a clear value proposition &mdash; remind them what they signed up for and what they&apos;re missing. Include a single CTA to confirm they want to stay subscribed. <strong className="text-foreground">Email 2 (Day 5):</strong> If they didn&apos;t open email 1, send a follow-up with a different subject line and your best-performing content from the last 30 days. The goal: give them a reason to re-engage. <strong className="text-foreground">Email 3 (Day 10):</strong> Final notice. Tell them you&apos;re removing them from the list in 7 days unless they click to stay. This creates urgency without being manipulative.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">What doesn&apos;t work: The guilt trip</h3>
              <p className="text-sm text-muted">Emails that say &ldquo;we miss you&rdquo; or &ldquo;don&apos;t go&rdquo; or &ldquo;we noticed you haven&apos;t been around&rdquo; perform poorly because they provide no value. They&apos;re about you, not the subscriber. The subscriber stopped engaging because your content wasn&apos;t valuable enough. Reminding them that they stopped engaging doesn&apos;t change the value equation. Give them something worth opening &mdash; an exclusive piece of content, a discount, your best article from the quarter.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Expected results</h3>
              <p className="text-sm text-muted">A well-executed re-engagement sequence recovers 5&ndash;15% of inactive subscribers. The other 85&ndash;95% should be removed. This is normal and healthy. If you recover 10% of 4,000 inactive subscribers, you save 400 real subscribers and remove 3,600 dead weight. Your engagement metrics improve immediately on the next send.</p>
            </div>
          </div>

          {/* ── Platform-specific Hygiene Tools ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Platform-Specific List Hygiene Tools</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Kit</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Brevo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Inactive segment</td>
                  <td className="px-4 py-2.5 text-green-400">Pre-built inactive filter</td>
                  <td className="px-4 py-2.5 text-green-400">Engagement-based segments</td>
                  <td className="px-4 py-2.5 text-green-400">&ldquo;Cold subscribers&rdquo; tag</td>
                  <td className="px-4 py-2.5 text-green-400">Engagement score filtering</td>
                  <td className="px-4 py-2.5 text-yellow-400">Manual segment creation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Engagement scoring</td>
                  <td className="px-4 py-2.5 text-yellow-400">Predicted demographics (limited)</td>
                  <td className="px-4 py-2.5 text-green-400">Contact scoring (1&ndash;5 stars)</td>
                  <td className="px-4 py-2.5 text-green-400">Subscriber engagement rating</td>
                  <td className="px-4 py-2.5 text-green-400">Activity-based scoring</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic engagement tracking</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Bulk cleanup</td>
                  <td className="px-4 py-2.5 text-green-400">Archive inactive contacts</td>
                  <td className="px-4 py-2.5 text-green-400">Bulk delete/unsubscribe</td>
                  <td className="px-4 py-2.5 text-green-400">Bulk remove cold subscribers</td>
                  <td className="px-4 py-2.5 text-yellow-400">Manual segment + delete</td>
                  <td className="px-4 py-2.5 text-green-400">Blacklist management</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Double opt-in</td>
                  <td className="px-4 py-2.5 text-green-400">Available, not default</td>
                  <td className="px-4 py-2.5 text-green-400">Available per form</td>
                  <td className="px-4 py-2.5 text-green-400">Available per form</td>
                  <td className="px-4 py-2.5 text-green-400">Available</td>
                  <td className="px-4 py-2.5 text-green-400">Available, recommended</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Spam complaint tracking</td>
                  <td className="px-4 py-2.5 text-green-400">Abuse complaint dashboard</td>
                  <td className="px-4 py-2.5 text-green-400">Per-campaign complaint rate</td>
                  <td className="px-4 py-2.5 text-green-400">Complaint monitoring</td>
                  <td className="px-4 py-2.5 text-green-400">Basic complaint metrics</td>
                  <td className="px-4 py-2.5 text-green-400">Complaint tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ActiveCampaign and Kit lead on hygiene tooling.</strong> ActiveCampaign&apos;s 5-star contact scoring system makes it easy to identify and segment inactive subscribers without manual effort. Kit&apos;s &ldquo;cold subscriber&rdquo; feature auto-tags subscribers who haven&apos;t engaged, making cleanup a one-click operation. Mailchimp&apos;s archiving feature is useful but doesn&apos;t reduce your contact count for billing purposes &mdash; archived contacts still count toward your plan limit.
          </p>

          {/* ── The Real Cost of a Dirty List ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Real Cost of a Dirty List</h2>
          <p className="text-muted mb-4">
            A dirty list costs you in two ways: direct billing costs (paying for inactive subscribers) and indirect deliverability costs (lower inbox placement rates that affect your engaged subscribers too).
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">List size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Inactive % (typical)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Wasted monthly cost (Mailchimp)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Wasted annual cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000 contacts</td>
                  <td className="px-4 py-2.5">30% (1,500 inactive)</td>
                  <td className="px-4 py-2.5">~$13/mo in overpayment</td>
                  <td className="px-4 py-2.5">$156/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000 contacts</td>
                  <td className="px-4 py-2.5">35% (3,500 inactive)</td>
                  <td className="px-4 py-2.5">~$25/mo in overpayment</td>
                  <td className="px-4 py-2.5">$300/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25,000 contacts</td>
                  <td className="px-4 py-2.5">40% (10,000 inactive)</td>
                  <td className="px-4 py-2.5">~$80/mo in overpayment</td>
                  <td className="px-4 py-2.5">$960/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50,000 contacts</td>
                  <td className="px-4 py-2.5">40&ndash;50% (20K&ndash;25K inactive)</td>
                  <td className="px-4 py-2.5">~$150&ndash;200/mo in overpayment</td>
                  <td className="px-4 py-2.5">$1,800&ndash;$2,400/yr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The deliverability impact is harder to quantify but potentially more damaging.</strong> Sending to inactive subscribers lowers your overall engagement rate. Gmail and Outlook use engagement signals to decide inbox vs spam placement. A list with 40% inactive subscribers drags down your engagement metrics, which means even your engaged subscribers are more likely to land in the Promotions tab or spam. Cleaning your list doesn&apos;t just save money &mdash; it improves inbox placement for the subscribers who actually want your email.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo is the exception on billing.</strong> Brevo charges by emails sent, not by contact list size. You can have 100,000 contacts and only pay for the emails you actually send. This eliminates the direct billing cost of inactive subscribers, though the deliverability impact still applies if you send to inactive addresses.
          </p>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>
              <strong className="text-foreground">Never cleaning your list because &ldquo;more subscribers = better.&rdquo;</strong> A large list with low engagement is worse than a small list with high engagement. Email providers penalize low engagement. Clean quarterly at minimum. Your engaged subscribers will see better inbox placement immediately.
            </li>
            <li>
              <strong className="text-foreground">Relying on open rates as your primary health metric.</strong> Apple Mail Privacy Protection makes open rates unreliable. Track click rates, reply rates, and unsubscribe rates instead. A declining click rate is a much stronger signal of list health problems than a declining open rate.
            </li>
            <li>
              <strong className="text-foreground">Not using double opt-in.</strong> Single opt-in lets anyone enter any email address. This leads to fake signups, spam traps, and typo addresses that hard bounce. Double opt-in reduces your signup rate by 20&ndash;30% but dramatically improves list quality. The smaller list outperforms the larger one in every metric that matters.
            </li>
            <li>
              <strong className="text-foreground">Archiving contacts on Mailchimp and thinking it reduces your bill.</strong> Archived contacts on Mailchimp still count toward your contact limit. You need to permanently delete them (Audience &rarr; All Contacts &rarr; Select &rarr; Delete) to reduce your contact count. This catches many Mailchimp users who think they&apos;ve cleaned their list when they&apos;ve only hidden it.
            </li>
            <li>
              <strong className="text-foreground">Running re-engagement campaigns without a plan for non-responders.</strong> If you send a re-engagement sequence and 90% of recipients don&apos;t respond, you need to actually remove them. Many teams run re-engagement campaigns, see the low response rate, and then do nothing because they&apos;re afraid to lose subscribers. The whole point is to remove the non-responders.
            </li>
          </ul>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How often should I clean my email list?</h3>
                <p className="text-muted">Quarterly is the minimum. Monthly is better for high-volume senders (10,000+ subscribers with daily or weekly sends). Run a re-engagement sequence for subscribers inactive for 90+ days, then remove non-responders after 120 days. Set this up as an automated workflow so it runs continuously without manual intervention.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s a healthy open rate in 2026?</h3>
                <p className="text-muted">With Apple Mail Privacy Protection inflating numbers, a reported open rate of 40&ndash;55% for newsletters is normal. More reliable metrics: click-through rate above 2.5%, unsubscribe rate below 0.3% per send, and spam complaint rate below 0.1%. If your click rate drops below 1%, your list health needs attention regardless of open rates.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use double opt-in?</h3>
                <p className="text-muted">Yes, with one caveat: if you&apos;re running paid acquisition (ads to lead magnets), double opt-in reduces your conversion rate by 20&ndash;30%, which increases your cost per subscriber significantly. In that case, use single opt-in but verify the list with a third-party email verification service (NeverBounce, ZeroBounce) within 48 hours of signup. For organic signup forms, always use double opt-in.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does removing inactive subscribers hurt my list?</h3>
                <p className="text-muted">The opposite. Removing inactive subscribers improves deliverability for your remaining active subscribers, reduces your platform costs on subscriber-based pricing, and gives you accurate engagement metrics. The vanity metric of &ldquo;total subscribers&rdquo; goes down. Every metric that matters goes up.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which platform makes list cleanup easiest?</h3>
                <p className="text-muted">Kit. Its cold subscriber tagging automatically identifies inactive subscribers, and you can bulk-remove them in one action. ActiveCampaign&apos;s 5-star scoring is similarly useful but requires you to set up the segment manually. Mailchimp&apos;s archived contacts still count for billing, which makes cleanup misleading. beehiiv and Brevo require more manual work to identify and remove inactive subscribers.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "activecampaign", "convertkit", "beehiiv", "brevo"]}
            comparisons={["activecampaign-vs-mailchimp", "beehiiv-vs-convertkit", "mailchimp-vs-brevo"]}
            guides={[
              "email-deliverability-compared",
              "email-automation-sequences-compared",
              "email-marketing-annual-cost-2026",
              "migrate-from-mailchimp",
            ]}
          />
        </div>
      </article>
    </>
  );
}
