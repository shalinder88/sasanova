import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Building a Paid Newsletter: Platform Comparison for Monetization",
  description:
    "beehiiv vs Substack vs Ghost vs Buttondown for paid newsletters. Revenue share math, Stripe fees, subscriber management, churn tools, and revenue projections at 500 to 10K paid subscribers.",
};

export default function BestNewsletterPaidSubscribers() {
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
              Paid Newsletter Platform Comparison
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Newsletter Monetization
            </span>
            <span className="text-[11px] text-muted">18 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Building a Paid Newsletter: Platform Comparison for Monetization
          </h1>
          <p className="text-lg text-muted">
            Substack takes 10% of every dollar you earn. beehiiv and Ghost take 0%. Buttondown takes 0%. But the platform fee is only one piece of the math. Stripe takes 2.9% + $0.30 on every transaction regardless of platform, and the real cost differences show up in subscriber management, churn prevention, and growth tools. Here&apos;s the full picture for anyone building a paid newsletter business.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Revenue Share Breakdown ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Revenue Share Reality</h2>
          <p className="text-muted mb-4">
            Every paid newsletter runs through Stripe for payment processing. That means 2.9% + $0.30 per transaction is unavoidable on every platform. The difference is what the platform takes on top.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform Revenue Cut</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stripe Fees</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Total Take on $10/mo Sub</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                  <td className="px-4 py-2.5 text-red-400">10%</td>
                  <td className="px-4 py-2.5">2.9% + $0.30</td>
                  <td className="px-4 py-2.5 text-red-400">$1.59/mo ($1.00 + $0.59)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv (Scale+)</td>
                  <td className="px-4 py-2.5 text-green-400">0%</td>
                  <td className="px-4 py-2.5">2.9% + $0.30</td>
                  <td className="px-4 py-2.5 text-green-400">$0.59/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Ghost</td>
                  <td className="px-4 py-2.5 text-green-400">0%</td>
                  <td className="px-4 py-2.5">2.9% + $0.30</td>
                  <td className="px-4 py-2.5 text-green-400">$0.59/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Buttondown</td>
                  <td className="px-4 py-2.5 text-green-400">0%</td>
                  <td className="px-4 py-2.5">2.9% + $0.30</td>
                  <td className="px-4 py-2.5 text-green-400">$0.59/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            On annual subscriptions the math changes. A $100/year subscription on Substack costs you $10 (Substack) + $3.20 (Stripe) = $13.20 per subscriber per year. The same subscription on beehiiv costs just $3.20. At 500 paid subscribers on annual plans, that gap is $5,000/year going to Substack instead of you.
          </p>

          {/* ── Platform Feature Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Head-to-Head: Paid Newsletter Features</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Substack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Ghost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Buttondown</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Platform fee</td>
                  <td className="px-4 py-2.5">$0 + 10% revenue</td>
                  <td className="px-4 py-2.5">$39&ndash;$99/mo + 0%</td>
                  <td className="px-4 py-2.5">$9&ndash;$199/mo + 0%</td>
                  <td className="px-4 py-2.5">$9&ndash;$29/mo + 0%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Subscriber paywall</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in (Scale+)</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in (all plans)</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in (paid plan)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Gift subscriptions</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free trial support</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Multiple pricing tiers</td>
                  <td className="px-4 py-2.5 text-yellow-400">Founding members only</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Scale+)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (unlimited tiers)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Churn/dunning management</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic (Stripe default)</td>
                  <td className="px-4 py-2.5 text-green-400">Built-in retry logic</td>
                  <td className="px-4 py-2.5 text-green-400">Configurable via Stripe</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic (Stripe default)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Discovery/network effect</td>
                  <td className="px-4 py-2.5 text-green-400">Strong (recommendations)</td>
                  <td className="px-4 py-2.5 text-green-400">Boosts + Recommendations</td>
                  <td className="px-4 py-2.5 text-red-400">None</td>
                  <td className="px-4 py-2.5 text-red-400">None</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Custom domain</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Referral program</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Data portability</td>
                  <td className="px-4 py-2.5 text-yellow-400">CSV export (no tags)</td>
                  <td className="px-4 py-2.5 text-green-400">Full export with tags</td>
                  <td className="px-4 py-2.5 text-green-400">Full export + JSON</td>
                  <td className="px-4 py-2.5 text-green-400">Full export</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Revenue Projections ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Revenue Projections: What You Actually Keep</h2>
          <p className="text-muted mb-4">
            All projections assume $10/month subscription price, monthly billing, and Stripe&apos;s standard 2.9% + $0.30 per charge. Platform costs use the cheapest plan that supports paid subscriptions.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Paid Subs</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Gross/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Net on Substack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Net on beehiiv Scale</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Net on Ghost Creator</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Net on Buttondown</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">500</td>
                  <td className="px-4 py-2.5">$5,000</td>
                  <td className="px-4 py-2.5">$4,205</td>
                  <td className="px-4 py-2.5 text-green-400">$4,666</td>
                  <td className="px-4 py-2.5 text-green-400">$4,680</td>
                  <td className="px-4 py-2.5 text-green-400">$4,696</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">2,000</td>
                  <td className="px-4 py-2.5">$20,000</td>
                  <td className="px-4 py-2.5">$16,820</td>
                  <td className="px-4 py-2.5 text-green-400">$18,721</td>
                  <td className="px-4 py-2.5 text-green-400">$18,771</td>
                  <td className="px-4 py-2.5 text-green-400">$18,791</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                  <td className="px-4 py-2.5">$100,000</td>
                  <td className="px-4 py-2.5">$84,100</td>
                  <td className="px-4 py-2.5 text-green-400">$93,901</td>
                  <td className="px-4 py-2.5 text-green-400">$93,851</td>
                  <td className="px-4 py-2.5 text-green-400">$93,971</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The math is clear at scale.</strong> At 500 paid subscribers, Substack costs you roughly $460 more per month than beehiiv or Ghost. At 2,000 paid subscribers, that gap widens to nearly $1,900/month. At 10,000 paid subscribers, Substack&apos;s 10% cut means you&apos;re giving up almost $9,800/month compared to a zero-cut platform.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">But revenue isn&apos;t the only variable.</strong> Substack&apos;s recommendation network drives real subscriber growth. If Substack&apos;s network brings you 200 extra paid subscribers that you wouldn&apos;t get elsewhere, the 10% cut on all subscribers could still be a net positive. The problem is that growth from the network is impossible to predict before you start.
          </p>

          {/* ── Subscriber Management & Churn ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Subscriber Management and Churn Prevention</h2>
          <p className="text-muted mb-4">
            Paid newsletters lose 5&ndash;10% of subscribers per month to involuntary churn (failed credit cards, expired cards) and voluntary churn (cancellations). The difference between 5% and 10% monthly churn is the difference between a sustainable business and a treadmill.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Involuntary Churn (Failed Payments)</h3>
              <p className="text-sm text-muted mb-2">
                <strong className="text-foreground">beehiiv:</strong> Automated retry logic with configurable dunning emails. Retries failed charges over 7&ndash;14 days with escalating email reminders.
              </p>
              <p className="text-sm text-muted mb-2">
                <strong className="text-foreground">Ghost:</strong> Uses Stripe&apos;s Smart Retries. You configure dunning behavior in Stripe directly. More control, more setup required.
              </p>
              <p className="text-sm text-muted mb-2">
                <strong className="text-foreground">Substack:</strong> Relies on Stripe&apos;s default retry schedule. Limited customization. No built-in dunning email sequences.
              </p>
              <p className="text-sm text-muted">
                <strong className="text-foreground">Buttondown:</strong> Stripe defaults. No custom dunning beyond what Stripe provides.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Voluntary Churn (Cancellations)</h3>
              <p className="text-sm text-muted mb-2">
                <strong className="text-foreground">beehiiv:</strong> Cancellation surveys, pause-instead-of-cancel option, win-back email automation.
              </p>
              <p className="text-sm text-muted mb-2">
                <strong className="text-foreground">Ghost:</strong> Basic cancellation flow. No built-in win-back. You can build it with the API.
              </p>
              <p className="text-sm text-muted mb-2">
                <strong className="text-foreground">Substack:</strong> Minimal cancellation flow. No retention tools. Simple cancel button.
              </p>
              <p className="text-sm text-muted">
                <strong className="text-foreground">Buttondown:</strong> Simple cancellation. No retention mechanics.
              </p>
            </div>
          </div>
          <p className="text-muted mb-4">
            If reducing churn by 2 percentage points saves you 20 paid subscribers per month at $10 each, that&apos;s $200/month in retained revenue &mdash; more than the cost of any platform on this list. beehiiv has the strongest churn-prevention toolkit out of the box. Ghost gives you the most control if you&apos;re willing to build it yourself.
          </p>

          {/* ── When Substack's Network Effect Justifies 10% ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">When Substack&apos;s 10% Cut Is Worth Paying</h2>
          <p className="text-muted mb-4">
            Substack&apos;s recommendation engine is the only real counter-argument to its pricing. When a large Substack writer recommends your newsletter, their subscribers see your publication in their feed. This is distribution you cannot buy on other platforms.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The network effect matters most when:</strong> you write in a category with active Substack communities (politics, culture, finance, tech), you&apos;re starting from zero and need discovery, or you write content that gets shared within the Substack ecosystem (Notes, comments, cross-posting).
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The network effect matters least when:</strong> you have an existing audience from another channel (YouTube, podcast, Twitter/X), you write in a niche with few active Substack publications, or your primary growth channel is SEO (Substack sites rank poorly compared to custom domains on Ghost or beehiiv).
          </p>
          <p className="text-muted mb-4">
            The honest answer: if Substack&apos;s network brings you 15&ndash;20% more paid subscribers than you&apos;d get independently, the 10% cut breaks even. Below that threshold, you&apos;re subsidizing Substack. Above it, the network is earning its cut. The problem is you can&apos;t know this number in advance.
          </p>

          {/* ── The Opinionated Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Opinionated Verdict</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">For newsletter operators who treat this as a business</strong> &mdash; beehiiv Scale at $39/month. Zero revenue cut, referral program, churn tools, ad network for additional revenue, and Boosts for paid growth. The most complete paid newsletter platform in 2026.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">For writers who want maximum ownership and flexibility</strong> &mdash; Ghost at $9&ndash;$25/month (or self-hosted). Zero revenue cut, unlimited membership tiers, full design control, and your content lives on infrastructure you control. Requires more technical comfort than Substack or beehiiv.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">For writers starting from zero who need discovery</strong> &mdash; Substack, with a plan to re-evaluate at $1,000/month revenue. The network effect is real for certain categories. Use it to build your initial audience, then migrate when the 10% cut exceeds what the network delivers.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">For developers and minimalists</strong> &mdash; Buttondown at $9/month. Clean, markdown-native, API-first, zero revenue cut. It won&apos;t help you grow, but it won&apos;t take a cut of what you earn either. The right tool for people who find beehiiv and Substack overbuilt.
            </p>
          </div>

          {/* ── Who Should NOT Charge ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Charge for Newsletters</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Newsletters under 1,000 free subscribers.</strong> You need to prove consistent value and build a habit before asking people to pay. Launching paid too early kills free subscriber growth and gives you a false signal about product-market fit.</li>
            <li><strong className="text-foreground">Newsletters that primarily curate links.</strong> Link curation is useful but hard to charge for when most content is available free elsewhere. Unless your curation adds significant original analysis, the paid model will struggle.</li>
            <li><strong className="text-foreground">People using newsletters to sell something else.</strong> If your newsletter drives consulting clients, course sales, or SaaS signups, keep it free. The newsletter is a marketing channel, not a product. Charging for it shrinks the funnel.</li>
            <li><strong className="text-foreground">Writers who publish inconsistently.</strong> Paid subscribers expect regular delivery. If you can&apos;t commit to at least weekly publishing, don&apos;t charge. Inconsistent publishing drives churn above 15% per month, making the business unsustainable.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>
              <strong className="text-foreground">Ignoring Stripe fees when comparing platforms.</strong> Every platform charges Stripe fees. Comparing &ldquo;Substack is free&rdquo; to &ldquo;beehiiv is $39/month&rdquo; without accounting for the 10% revenue cut is how Substack&apos;s marketing works. Do the math at your projected subscriber count.
            </li>
            <li>
              <strong className="text-foreground">Pricing too low.</strong> $5/month feels &ldquo;accessible&rdquo; but Stripe&apos;s $0.30 fixed fee eats 6% of every transaction. At $10/month, the fixed fee is 3%. At $15/month, it&apos;s 2%. Higher prices mean better unit economics and, counterintuitively, often better retention &mdash; people who pay more tend to engage more.
            </li>
            <li>
              <strong className="text-foreground">Not offering annual plans.</strong> Annual subscriptions reduce churn dramatically (annual churn is typically 30&ndash;40% vs monthly churn of 60&ndash;80% annualized). Offer a 15&ndash;20% discount for annual billing. The upfront cash and reduced churn are worth the discount.
            </li>
            <li>
              <strong className="text-foreground">Gating all content immediately.</strong> The most successful paid newsletters keep 60&ndash;70% of content free and gate the premium analysis, data, or community access. Full paywalls kill organic growth and make it impossible for new readers to evaluate your writing.
            </li>
            <li>
              <strong className="text-foreground">Choosing a platform based on what other writers use.</strong> Substack is popular among writers because writers recommend Substack to other writers. That doesn&apos;t make it the best business decision. Evaluate based on your revenue model, not peer pressure.
            </li>
          </ul>

          {/* ── The Bottom Line ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Bottom Line</h2>
          <p className="text-muted mb-6">
            At 500+ paid subscribers, the platform you choose directly affects your income by hundreds or thousands of dollars per month. Substack&apos;s 10% cut is a significant cost that compounds as you grow. beehiiv and Ghost both offer zero-cut models with strong paid newsletter features. Pick based on whether you want a growth-optimized platform (beehiiv), maximum control (Ghost), network-driven discovery (Substack), or developer-friendly simplicity (Buttondown). Then model the costs at your 12-month projected subscriber count, not today&apos;s.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best platform for a paid newsletter?</h3>
                <p className="text-muted">beehiiv Scale ($39/month) is the strongest all-around choice for paid newsletters in 2026. Zero revenue cut, built-in churn management, referral programs, and ad network revenue. Ghost is better if you want full design control and don&apos;t need growth tools. Substack works if you&apos;re starting from zero and need the discovery network.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Substack actually take?</h3>
                <p className="text-muted">Substack takes 10% of all paid subscription revenue, plus Stripe charges 2.9% + $0.30 per transaction. On a $10/month subscription, that&apos;s $1.59 total per subscriber per month. At 1,000 paid subscribers earning $10/month, Substack&apos;s cut alone is $1,000/month or $12,000/year.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate paid subscribers between platforms?</h3>
                <p className="text-muted">You can export your subscriber list from any platform. The challenge is migrating active Stripe subscriptions. beehiiv and Ghost both support Stripe subscription imports, meaning paid subscribers don&apos;t need to re-enter payment info. Moving from Substack requires re-billing subscribers on the new platform, which causes some churn (typically 10&ndash;20% of paid subscribers).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I start charging for my newsletter?</h3>
                <p className="text-muted">Wait until you have at least 1,000 free subscribers and can publish consistently (weekly minimum). Your free-to-paid conversion rate will typically be 5&ndash;10% of your engaged audience. At 1,000 subscribers with a 5% conversion rate and $10/month pricing, that&apos;s $500/month &mdash; enough to justify the operational overhead of running a paid publication.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/best-email-tool-creators"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Best Email Platform for Creators</span>
                <span className="block text-xs text-muted mt-1">Full comparison beyond just paid newsletters</span>
              </Link>
              <Link
                href="/guides/migrate-substack-to-beehiiv"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Substack to beehiiv Migration</span>
                <span className="block text-xs text-muted mt-1">Step-by-step with revenue math</span>
              </Link>
              <Link
                href="/guides/newsletter-stack"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Newsletter Stack Under $150/Month</span>
                <span className="block text-xs text-muted mt-1">Full stack: email + analytics + automation</span>
              </Link>
              <Link
                href="/guides/beehiiv-setup-guide"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">beehiiv Setup Guide</span>
                <span className="block text-xs text-muted mt-1">Zero to first newsletter in 60 minutes</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["beehiiv", "substack", "ghost", "convertkit"]}
            comparisons={["beehiiv-vs-substack", "ghost-vs-substack", "beehiiv-vs-convertkit"]}
            guides={[
              "newsletter-stack",
              "best-email-tool-creators",
              "beehiiv-setup-guide",
            ]}
          />
        </div>
      </article>
    </>
  );
}
