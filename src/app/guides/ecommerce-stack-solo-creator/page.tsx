import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete E-commerce Stack for Solo Creators Under $100/Month",
  description:
    "Gumroad vs LemonSqueezy vs Shopify for digital products. Real pricing, real fees, and the exact stack you need for email, payments, and analytics.",
};

export default function EcommerceStackGuide() {
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
            <span className="text-foreground font-medium truncate">E-commerce Stack</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          E-Commerce
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          The Complete E-commerce Stack for Solo Creators Under $100/Month
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 14 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Here&apos;s what nobody tells you about selling digital products: the platform you pick
            matters less than the fee structure you ignore. I&apos;ve seen creators lose $400/month
            in transaction fees because they never read the pricing page past the monthly cost.
            Gumroad&apos;s flat 10% cut sounds simple until you&apos;re doing $5,000/month and
            handing over $500. That&apos;s not a fee. That&apos;s a co-founder who doesn&apos;t
            do anything.
          </p>
          <p>
            This guide breaks down the three platforms that actually matter for solo creators
            selling digital products &mdash; courses, templates, ebooks, memberships &mdash; and
            gives you the exact stack that keeps your total cost under $100/month, including email
            and analytics.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Platform Showdown: Gumroad vs LemonSqueezy vs Shopify</h2>
            <p>
              Let&apos;s get the big comparison out of the way. These three platforms serve different
              philosophies, and the right one depends on your revenue, product type, and tolerance
              for complexity.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Gumroad</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">LemonSqueezy</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Shopify Basic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Monthly fee</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">$39/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Transaction fee</td>
                    <td className="px-4 py-2.5">10% flat</td>
                    <td className="px-4 py-2.5">5% + payment processing</td>
                    <td className="px-4 py-2.5">2.9% + $0.30 (Shopify Payments)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Payment processing</td>
                    <td className="px-4 py-2.5">Included in 10%</td>
                    <td className="px-4 py-2.5">~2.9% + $0.30 via Stripe</td>
                    <td className="px-4 py-2.5">Included</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Effective total fee</td>
                    <td className="px-4 py-2.5">10%</td>
                    <td className="px-4 py-2.5">~8% on a $30 product</td>
                    <td className="px-4 py-2.5">~3.9% on a $30 product + $39/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">VAT/sales tax handling</td>
                    <td className="px-4 py-2.5">Basic (you handle filings)</td>
                    <td className="px-4 py-2.5">Full Merchant of Record</td>
                    <td className="px-4 py-2.5">Collection only (you file)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Digital product delivery</td>
                    <td className="px-4 py-2.5">Built-in</td>
                    <td className="px-4 py-2.5">Built-in</td>
                    <td className="px-4 py-2.5">Requires app (e.g., SendOwl)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Email marketing</td>
                    <td className="px-4 py-2.5">Basic (Workflows)</td>
                    <td className="px-4 py-2.5">None (use external)</td>
                    <td className="px-4 py-2.5">Shopify Email (10K free/mo)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Affiliate system</td>
                    <td className="px-4 py-2.5">Built-in</td>
                    <td className="px-4 py-2.5">Built-in</td>
                    <td className="px-4 py-2.5">Requires app ($$$)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Memberships/subscriptions</td>
                    <td className="px-4 py-2.5">Yes</td>
                    <td className="px-4 py-2.5">Yes</td>
                    <td className="px-4 py-2.5">Yes (via apps)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Real Cost at Different Revenue Levels</h2>
            <p>
              Monthly fee is a distraction. What matters is total cost of doing business. Here&apos;s
              what you actually pay at each revenue tier.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Revenue</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Gumroad Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">LemonSqueezy Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Shopify Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">$500/mo</td>
                    <td className="px-4 py-2.5">$50</td>
                    <td className="px-4 py-2.5">~$40</td>
                    <td className="px-4 py-2.5">~$58</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">$2,000/mo</td>
                    <td className="px-4 py-2.5">$200</td>
                    <td className="px-4 py-2.5">~$160</td>
                    <td className="px-4 py-2.5">~$117</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">$5,000/mo</td>
                    <td className="px-4 py-2.5">$500</td>
                    <td className="px-4 py-2.5">~$400</td>
                    <td className="px-4 py-2.5">~$234</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">$10,000/mo</td>
                    <td className="px-4 py-2.5">$1,000</td>
                    <td className="px-4 py-2.5">~$800</td>
                    <td className="px-4 py-2.5">~$429</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              LemonSqueezy costs assume ~8% effective rate on $30 average products. Shopify includes
              $39/mo base + 2.9% + $0.30 per transaction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Contrarian Take: Gumroad Is Still Fine Under $1,000/Month</h2>
            <p>
              Everyone loves dunking on Gumroad&apos;s 10% fee, and past $1,000/month in revenue, they&apos;re
              right. But below that? Gumroad is the fastest path from idea to first sale. Zero
              setup, no Stripe configuration, no tax headaches. You paste a link, someone buys,
              money appears.
            </p>
            <p>
              The real cost of switching platforms early isn&apos;t the fee difference &mdash;
              it&apos;s the three days you spend configuring Shopify instead of creating your
              next product. If you&apos;re making under $1,000/month, the 10% is a convenience tax
              you can afford. Start worrying about fees when fees actually cost more than your time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Why LemonSqueezy Wins for Most Solo Creators</h2>
            <p>
              LemonSqueezy is the answer for creators between $1,000 and $10,000/month in digital
              product revenue. Here&apos;s why it edges out the others:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Merchant of Record status.</strong> This is the killer feature nobody talks about enough. LemonSqueezy handles global VAT, sales tax collection, and remittance. You don&apos;t file anything. They take the legal liability. For EU sales, this alone saves you 10+ hours/month and potential fines.</li>
              <li><strong className="text-foreground">Built-in affiliate management.</strong> No third-party app. No extra fee. Set commission rates, generate affiliate links, track payouts. Gumroad has this too, but Shopify charges $20&ndash;$60/month for an affiliate app.</li>
              <li><strong className="text-foreground">License key generation.</strong> Selling software, plugins, or templates with license keys? LemonSqueezy generates and validates them natively. Gumroad can&apos;t do this. Shopify requires a $15/month app.</li>
              <li><strong className="text-foreground">Checkout overlay.</strong> Embed a checkout directly on your site without redirecting to a separate storefront. Your customer never leaves your domain. This measurably improves conversion rates by 10&ndash;15% compared to redirect-based checkouts.</li>
            </ul>
            <p className="mt-3">
              The 5% platform fee on top of payment processing (~8% total) is higher than Shopify&apos;s
              ~3.9%. But you get Merchant of Record, affiliates, and license keys without paying
              for apps. At $3,000/month revenue, you save roughly $40/month vs Shopify when you
              factor in the apps you&apos;d need.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When Shopify Actually Makes Sense</h2>
            <p>
              Shopify wins in exactly two scenarios for solo digital product creators:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">You sell physical AND digital products.</strong> If you have merchandise, print-on-demand, or physical goods alongside digital products, Shopify is the only platform that handles both well. LemonSqueezy and Gumroad are digital-only.</li>
              <li><strong className="text-foreground">You&apos;re above $5,000/month and growing.</strong> At $5,000/month, Shopify&apos;s lower transaction fees save you $166/month vs LemonSqueezy. That gap widens as you scale. If you&apos;re consistently above $5K and climbing, the $39/month base fee is trivial.</li>
            </ul>
            <p>
              But Shopify for digital products requires more setup. You&apos;ll need SendOwl or
              Digital Downloads app ($0&ndash;$19/month) for file delivery, and Shopify&apos;s
              built-in email (10,000 emails free, then $1 per 1,000) is basic compared to dedicated
              email tools. Budget for the ecosystem, not just the base price.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Complete Stack: Payments + Email + Analytics Under $100/Month</h2>
            <p>
              Your e-commerce platform is one piece. Here&apos;s the full stack I recommend for solo
              creators doing $1,000&ndash;$5,000/month in digital product revenue.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Function</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Payments + Storefront</td>
                    <td className="px-4 py-2.5">LemonSqueezy</td>
                    <td className="px-4 py-2.5">Free (5% + processing)</td>
                    <td className="px-4 py-2.5">$0/mo base</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Email Marketing</td>
                    <td className="px-4 py-2.5">Kit (ConvertKit)</td>
                    <td className="px-4 py-2.5">Creator (1K subs)</td>
                    <td className="px-4 py-2.5">$29/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5">Plausible</td>
                    <td className="px-4 py-2.5">Growth</td>
                    <td className="px-4 py-2.5">$9/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Landing Pages</td>
                    <td className="px-4 py-2.5">Carrd</td>
                    <td className="px-4 py-2.5">Pro</td>
                    <td className="px-4 py-2.5">$19/yr (~$1.60/mo)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5">Make</td>
                    <td className="px-4 py-2.5">Core</td>
                    <td className="px-4 py-2.5">$10.59/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Total fixed cost: ~$51/month. Transaction fees on $3,000 revenue: ~$240/month.
              All-in cost: ~$291/month at $3,000 revenue (9.7% effective rate).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Why Kit (ConvertKit) for Email, Not Mailchimp</h2>
            <p>
              Digital product creators need automation sequences that trigger on purchase events.
              Customer buys Product A &rarr; wait 3 days &rarr; upsell Product B &rarr; if no
              purchase after 7 days &rarr; send discount code. Kit&apos;s visual automation builder
              handles this natively.
            </p>
            <p>
              Mailchimp can do this too, but their automation builder is clunkier, and their pricing
              scales by contacts, not features. At 2,500 contacts, Mailchimp Standard is $45.99/month.
              Kit Creator at 1,000 subscribers is $29/month and doesn&apos;t charge extra for tagging
              or segmentation. When you hit 3,000 subscribers, Kit is $59/month vs Mailchimp&apos;s
              $69.99. The gap widens from there.
            </p>
            <p>
              LemonSqueezy integrates with Kit via Zapier or Make. New purchase &rarr; tag subscriber
              &rarr; trigger post-purchase sequence. Set it up once and forget about it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Why Plausible for Analytics, Not Google Analytics</h2>
            <p>
              Google Analytics 4 is free and powerful. It&apos;s also a nightmare to configure correctly,
              and most solo creators never set up conversion tracking properly. They end up with
              a dashboard full of data they don&apos;t understand and can&apos;t act on.
            </p>
            <p>
              Plausible costs $9/month for up to 10K monthly pageviews and gives you one clean dashboard:
              visitors, sources, top pages, and goal completions. No cookie banner required (it&apos;s
              privacy-first). Set up a custom event for &ldquo;checkout initiated&rdquo; and &ldquo;purchase
              completed&rdquo; and you have the only two metrics that matter for a digital product business.
            </p>
            <p>
              If you outgrow Plausible (above 10K pageviews the next tier is $19/month for 50K), you&apos;ll
              have enough revenue to justify the upgrade or a switch to PostHog.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Use This Stack</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Physical product sellers.</strong> This stack is digital-only. If you ship anything, you need Shopify or WooCommerce with proper inventory management, shipping labels, and order tracking.</li>
              <li><strong className="text-foreground">Course creators who need an LMS.</strong> If you need drip content, quizzes, certificates, or student progress tracking, use Teachable ($39/month) or Podia ($39/month) instead of LemonSqueezy. They have built-in course hosting.</li>
              <li><strong className="text-foreground">Anyone doing over $10,000/month.</strong> At that revenue, you should evaluate Shopify Plus or a custom Stripe integration. The percentage-based fees on LemonSqueezy become significant enough to justify the engineering investment.</li>
              <li><strong className="text-foreground">Subscription box businesses.</strong> Recurring physical shipments need Cratejoy or Subbly, not a digital product platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Choosing a platform based on monthly fee instead of total cost.</strong> Gumroad&apos;s $0/month looks great until you calculate 10% of $5,000. Always model your total cost at your projected revenue, not just the sticker price.</li>
              <li><strong className="text-foreground">Ignoring Merchant of Record status.</strong> If you sell to EU customers, you&apos;re legally required to collect and remit VAT. Doing this yourself costs hours and carries compliance risk. LemonSqueezy handles it. Gumroad and Shopify don&apos;t.</li>
              <li><strong className="text-foreground">Building on Shopify before you have product-market fit.</strong> Shopify is the right platform at scale, but setting up a Shopify store for digital products takes 2&ndash;3 days. LemonSqueezy takes 30 minutes. Validate first, optimize later.</li>
              <li><strong className="text-foreground">Skipping email marketing entirely.</strong> Your storefront converts 1&ndash;3% of visitors. A well-written email sequence converts 5&ndash;15% of subscribers. The ROI on email setup is 5x anything else you can do with your time.</li>
              <li><strong className="text-foreground">Paying for analytics tools you don&apos;t check.</strong> If you&apos;re not looking at analytics weekly, you&apos;re wasting money. Start with LemonSqueezy&apos;s built-in dashboard. Only add Plausible when you need traffic source data to make marketing decisions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Bottom Line</h2>
            <p>
              Under $1,000/month: use Gumroad. It&apos;s the fastest way to start selling and the
              10% fee is the price of simplicity. Between $1,000 and $5,000/month: switch to
              LemonSqueezy and add Kit for email. The Merchant of Record feature alone is worth
              the move. Above $5,000/month: evaluate Shopify Basic with a proper app stack.
              The lower transaction fees start to compound.
            </p>
            <p>
              The complete stack &mdash; LemonSqueezy, Kit, Plausible, Carrd, Make &mdash; runs about
              $51/month in fixed costs. That leaves plenty of room under $100/month for the occasional
              tool upgrade or new app. Spend your budget on products, not platforms.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best platform for selling digital products as a solo creator?</h3>
                <p>LemonSqueezy is the best overall choice for solo creators earning $1,000&ndash;$5,000/month. It offers Merchant of Record status (handles global tax compliance), built-in affiliates, and license key generation with no monthly fee. Gumroad is better for beginners under $1,000/month who want zero setup.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Gumroad really cost compared to LemonSqueezy?</h3>
                <p>Gumroad charges a flat 10% on every sale. LemonSqueezy charges 5% plus payment processing (~8% total on a $30 product). At $3,000/month revenue, Gumroad costs $300 in fees vs LemonSqueezy&apos;s ~$240. The gap grows with revenue: at $10,000/month, it&apos;s $1,000 vs ~$800.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need Shopify for digital products?</h3>
                <p>Only if you also sell physical products or consistently earn over $5,000/month in digital sales. Shopify&apos;s lower transaction fees (2.9% + $0.30) save money at scale, but the $39/month base fee and need for additional apps make it more expensive than LemonSqueezy below that threshold.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is Merchant of Record and why does it matter?</h3>
                <p>Merchant of Record means the platform (not you) is the legal seller. They collect and remit VAT, sales tax, and GST worldwide. Without this, you&apos;re personally responsible for tax compliance in every country you sell to. LemonSqueezy and Paddle offer this. Gumroad and Shopify do not.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
