import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The 3-Year Cost of Email Marketing: Mailchimp vs Kit vs beehiiv",
  description:
    "Year-by-year cost projection for email marketing as your subscriber list grows from 1K to 5K to 15K. Exact plan prices for Mailchimp, Kit (ConvertKit), and beehiiv with cumulative 3-year totals.",
};

export default function EmailMarketingCostOver3YearsPage() {
  return (
    <>
      {/* Breadcrumb */}
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
              3-Year Email Marketing Cost
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Year-Over-Year Cost
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The 3-Year Cost of Email Marketing: Mailchimp vs Kit vs beehiiv
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Most founders compare email tools at their current subscriber count.
            That is a mistake. Your list will grow, and your costs will grow
            faster. This guide projects the real cost of Mailchimp, Kit, and
            beehiiv over three years as your list scales from 1,000 to 15,000
            subscribers &mdash; using exact plan prices.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Growth Scenario */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Growth Scenario</h2>
            <p className="text-muted leading-relaxed mb-3">
              We model a realistic newsletter or email marketing trajectory for a growing
              business or creator:
            </p>
            <div className="rounded-lg border border-border bg-surface p-5">
              <ul className="text-sm text-muted space-y-2">
                <li><strong className="text-foreground">Year 1:</strong> 1,000 subscribers. Just getting started, building your list with lead magnets and content. You need basic email campaigns and simple automations.</li>
                <li><strong className="text-foreground">Year 2:</strong> 5,000 subscribers. Your list is growing through consistent marketing. You need audience segmentation, A/B testing, and more automations.</li>
                <li><strong className="text-foreground">Year 3:</strong> 15,000 subscribers. You have a real audience. You need advanced automations, deliverability tools, and possibly multiple audiences or segments.</li>
              </ul>
            </div>
            <p className="text-sm text-muted mt-3">
              All prices use monthly billing rates from published pricing pages as of March 2026.
              We select the cheapest plan at each platform that supports the subscriber count
              with standard email marketing features (automations, segmentation).
            </p>
          </section>

          {/* Year-by-Year Cost Table */}
          <section>
            <h2 className="text-xl font-bold mb-4">Year-by-Year Cost Comparison</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Kit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Year 1</td>
                    <td className="px-4 py-2.5 text-muted">1,000</td>
                    <td className="px-4 py-2.5 text-muted">$240/yr<br /><span className="text-xs">Standard @ $20/mo</span></td>
                    <td className="px-4 py-2.5 text-muted">$468/yr<br /><span className="text-xs">Creator @ $39/mo</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/yr<br /><span className="text-xs font-normal text-muted">Launch (free to 2,500)</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Year 2</td>
                    <td className="px-4 py-2.5 text-muted">5,000</td>
                    <td className="px-4 py-2.5 text-muted">$828/yr<br /><span className="text-xs">Standard (5K tier)</span></td>
                    <td className="px-4 py-2.5 text-muted">$588/yr<br /><span className="text-xs">Creator (5K tier)</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$588/yr<br /><span className="text-xs font-normal text-muted">Scale @ $49/mo</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Year 3</td>
                    <td className="px-4 py-2.5 text-muted">15,000</td>
                    <td className="px-4 py-2.5 text-muted">$2,100/yr<br /><span className="text-xs">Standard (15K tier)</span></td>
                    <td className="px-4 py-2.5 text-muted">$1,428/yr<br /><span className="text-xs">Creator (15K tier)</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$588/yr<br /><span className="text-xs font-normal text-muted">Scale (unlimited subs)</span></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-surface-alt font-semibold">
                    <td className="px-4 py-2.5 text-foreground" colSpan={2}>3-Year Total</td>
                    <td className="px-4 py-2.5 text-foreground">$3,168</td>
                    <td className="px-4 py-2.5 text-foreground">$2,484</td>
                    <td className="px-4 py-2.5 text-accent">$1,176</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="text-xs text-muted">
              Mailchimp Standard starts at $20/mo for 500 contacts, scaling by subscriber tier.
              Kit Creator starts at $39/mo for 1,000 subscribers. beehiiv Scale is $49/mo for
              unlimited subscribers &mdash; the price does not increase as your list grows.
            </p>
          </section>

          {/* Cumulative Cost Chart Description */}
          <section>
            <h2 className="text-xl font-bold mb-4">The Divergence Pattern</h2>
            <p className="text-muted leading-relaxed mb-3">
              The key insight is how costs diverge over time. In Year 1, the spread is modest:
              beehiiv is free, Mailchimp is $240, and Kit is $468. By Year 3, the gap is dramatic.
            </p>

            <div className="rounded-lg border border-border bg-surface p-5 space-y-3">
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Mailchimp&apos;s 3-Year Premium</p>
                <p className="text-sm text-muted">
                  You pay <strong className="text-foreground">$3,168 over 3 years</strong>. Mailchimp
                  scales by both plan tier and subscriber count. At 15,000 subscribers, Standard costs
                  roughly $175/mo. The per-contact cost actually increases as your list grows because
                  higher tiers bundle features you may not need.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Kit&apos;s Middle Ground</p>
                <p className="text-sm text-muted">
                  You pay <strong className="text-foreground">$2,484 over 3 years</strong>. Kit
                  (ConvertKit) scales more gently. Creator plan at $39/mo for 1,000 subs grows to about
                  $119/mo at 15,000 subs. The subscriber-centric model means you get the same features
                  regardless of tier &mdash; you just pay for list size.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">beehiiv&apos;s Flat Advantage</p>
                <p className="text-sm text-muted">
                  You pay <strong className="text-foreground">$1,176 over 3 years</strong>. beehiiv Scale
                  is $49/mo with unlimited subscribers. Whether you have 5,000 or 50,000 subscribers,
                  the price stays the same. This is the most predictable cost model for growing lists.
                </p>
              </div>
            </div>
          </section>

          {/* Savings Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-4">3-Year Savings: beehiiv vs Alternatives</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Comparison</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">3-Year Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Savings vs Mailchimp</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Savings vs Kit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp Standard</td>
                    <td className="px-4 py-2.5 text-muted">$3,168</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit Creator</td>
                    <td className="px-4 py-2.5 text-muted">$2,484</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$684</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$1,176</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$1,992</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$1,308</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              Over 3 years, beehiiv saves $1,992 vs Mailchimp and $1,308 vs Kit. The savings
              accelerate in Year 3 because beehiiv&apos;s price stays flat while competitors scale
              with your subscriber count.
            </p>
          </section>

          {/* When Each Makes Sense */}
          <section>
            <h2 className="text-xl font-bold mb-4">When Each Platform Makes Sense Despite the Cost</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Choose Mailchimp if:</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; You need the broadest integration ecosystem (Shopify, WooCommerce, Intuit)</li>
                  <li>&bull; You need e-commerce product recommendations and purchase tracking</li>
                  <li>&bull; Your team is already trained on Mailchimp and switching cost exceeds 3-year savings</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Choose Kit if:</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; You are a creator selling digital products (courses, ebooks, templates)</li>
                  <li>&bull; You want the best visual automation builder for sequences</li>
                  <li>&bull; You need the Kit Sponsor Network for monetization</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-2">Choose beehiiv if:</p>
                <ul className="text-sm text-muted space-y-1.5">
                  <li>&bull; Newsletter growth is your primary goal (referral program, recommendations)</li>
                  <li>&bull; You want predictable costs as your list scales to 10K, 50K, or 100K</li>
                  <li>&bull; You want built-in monetization (Boosts ad network, paid subscriptions)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Migration Cost Factor */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Migration Cost Factor</h2>
            <p className="text-muted leading-relaxed mb-3">
              If you are already on Mailchimp or Kit, factor in the one-time migration cost
              before switching:
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span><strong className="text-foreground">Contact export/import:</strong> 1&ndash;2 hours. All three platforms support CSV export. Tags and segments may need manual recreation.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span><strong className="text-foreground">Automation rebuilding:</strong> 4&ndash;20 hours depending on complexity. Simple welcome sequences take an afternoon. Complex multi-branch customer journeys take a week.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span><strong className="text-foreground">Domain re-verification:</strong> 30 minutes. DNS changes for DKIM/SPF authentication propagate within 24&ndash;48 hours.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span><strong className="text-foreground">Deliverability warm-up:</strong> 2&ndash;4 weeks. New sending domains need gradual ramp-up. Expect slightly lower open rates during the warm-up period.</span>
              </li>
            </ul>
            <p className="text-sm text-muted mt-3">
              At a $50/hour value for your time, a typical migration costs $250&ndash;$1,000 in
              effort. If your 3-year savings exceed $1,500, the switch pays for itself.
            </p>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does beehiiv really not charge more as your list grows?</h3>
                <p className="text-sm text-muted">Correct. beehiiv Scale is $49/mo (or $43/mo billed annually) for unlimited subscribers. The price stays flat whether you have 5,000 or 500,000 subscribers. This is the core pricing advantage of beehiiv for growing lists.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is Kit more expensive than Mailchimp in Year 1?</h3>
                <p className="text-sm text-muted">Kit Creator starts at $39/mo for 1,000 subscribers, while Mailchimp Standard starts at $20/mo for 500 contacts. At 1,000 contacts, Mailchimp Standard is roughly $20/mo. Kit&apos;s base price is higher, but it includes visual automations and integrations that Mailchimp locks behind higher tiers.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What about annual billing discounts?</h3>
                <p className="text-sm text-muted">Annual billing reduces costs by 15&ndash;22% across all three platforms. With annual billing, the 3-year totals would be approximately: Mailchimp $2,680, Kit $2,100, beehiiv $1,032. The relative ranking does not change.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I start on beehiiv free and upgrade later?</h3>
                <p className="text-sm text-muted">Yes. beehiiv Launch is free for up to 2,500 subscribers with unlimited sends. You can stay on Launch until you need Scale features (ad network, referral program, A/B testing, polls) or exceed 2,500 subscribers. There is no penalty for upgrading mid-cycle.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv"]}
            comparisons={["mailchimp-vs-beehiiv", "beehiiv-vs-convertkit"]}
            guides={[
              "email-marketing-annual-cost-2026",
              "when-mailchimp-becomes-expensive",
              "when-beehiiv-scale-beats-launch",
              "migrate-from-mailchimp",
            ]}
          />
        </div>
      </article>
    </>
  );
}
