import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Should You Pay for Email Marketing? Free vs Paid Analysis",
  description:
    "Kit free (10K subscribers) vs beehiiv free (2.5K) vs paying for ActiveCampaign ($15/mo). When to upgrade with exact prices from every major email platform.",
};

export default function ShouldIPayForEmailMarketingGuide() {
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
            <span className="text-foreground font-medium truncate">Should You Pay for Email Marketing?</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Buying Decision
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Should You Pay for Email Marketing? Free vs Paid Analysis
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 13 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Email marketing has the most generous free tiers in SaaS. Kit gives you 10,000 subscribers
            for free. beehiiv gives you 2,500 with unlimited sends. Brevo lets you store 100,000
            contacts and send 300 emails/day. Mailchimp gives you 250 contacts.
          </p>
          <p>
            With free options this good, paying for email marketing is a real decision. Here&apos;s
            exactly when free is enough and when paid tools earn their cost back.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Every Free Email Tier, Compared Honestly</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Limit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Sends</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What&apos;s Walled Off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit)</td>
                    <td className="px-4 py-2.5">10,000 subscribers</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">Advanced automations, integrations</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5">2,500 subscribers</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">Ad network, referral program, A/B testing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                    <td className="px-4 py-2.5">100,000 contacts</td>
                    <td className="px-4 py-2.5">300/day (9,000/mo)</td>
                    <td className="px-4 py-2.5">Brevo branding, daily send limit, no A/B testing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5">250 contacts</td>
                    <td className="px-4 py-2.5">500/month</td>
                    <td className="px-4 py-2.5">Most automations, A/B testing, advanced reporting</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Buttondown</td>
                    <td className="px-4 py-2.5">100 subscribers</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">Custom domain, automations, paid subscriptions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">10% revenue cut on paid subs, limited design, no custom domain</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When Free Is Genuinely Enough</h2>
            <div className="rounded-lg border border-border bg-surface p-5 space-y-3">
              <p className="text-foreground font-semibold">Stay on free if:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You have fewer than 2,500 subscribers (beehiiv Launch handles this perfectly)</li>
                <li>You&apos;re a creator sending a weekly newsletter without complex automation</li>
                <li>You don&apos;t need advanced segmentation or A/B testing</li>
                <li>You&apos;re not monetizing through ads or referral programs yet</li>
                <li>Kit&apos;s 10,000 subscriber free tier covers your entire list</li>
              </ul>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">The best free strategy:</strong> Start on beehiiv
              Launch (free up to 2,500 subscribers with unlimited sends and a custom domain). If you
              outgrow it before you&apos;re ready to pay, move to Kit Newsletter (free up to 10,000
              subscribers). Between these two, most creators can go years without paying a cent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When to Start Paying (And What to Pay For)</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Trigger</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Best Paid Option</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Need automation sequences</td>
                    <td className="px-4 py-2.5">ActiveCampaign Starter</td>
                    <td className="px-4 py-2.5">$15/mo (1,000 contacts)</td>
                    <td className="px-4 py-2.5">Best automation builder in email marketing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Want to monetize newsletter</td>
                    <td className="px-4 py-2.5">beehiiv Scale</td>
                    <td className="px-4 py-2.5">$49/mo</td>
                    <td className="px-4 py-2.5">Ad network + referral program can pay for the plan</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Outgrew Kit free (10K+)</td>
                    <td className="px-4 py-2.5">Kit Creator</td>
                    <td className="px-4 py-2.5">$39/mo (1,000 subs)</td>
                    <td className="px-4 py-2.5">Unlocks automations, integrations, live chat support</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Large list, low budget</td>
                    <td className="px-4 py-2.5">Brevo Starter</td>
                    <td className="px-4 py-2.5">$9/mo (5,000 emails/mo)</td>
                    <td className="px-4 py-2.5">Store unlimited contacts, pay only for sends</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">E-commerce automation</td>
                    <td className="px-4 py-2.5">Mailchimp Standard</td>
                    <td className="px-4 py-2.5">$20/mo (500 contacts)</td>
                    <td className="px-4 py-2.5">Product recommendations, customer journey builder</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Annual Cost Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Option</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Paid Option</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Creator, 5K subs</td>
                    <td className="px-4 py-2.5">Kit free ($0)</td>
                    <td className="px-4 py-2.5">beehiiv Scale ($49/mo = $588/yr)</td>
                    <td className="px-4 py-2.5">$588/yr for monetization tools</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Business, 1K contacts</td>
                    <td className="px-4 py-2.5">Brevo free ($0)</td>
                    <td className="px-4 py-2.5">ActiveCampaign Starter ($15/mo = $180/yr)</td>
                    <td className="px-4 py-2.5">$180/yr for automation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">E-commerce, 5K contacts</td>
                    <td className="px-4 py-2.5">Mailchimp free (capped at 250)</td>
                    <td className="px-4 py-2.5">Mailchimp Standard ($20/mo = $240/yr at 500)</td>
                    <td className="px-4 py-2.5">$240/yr+ (scales with contacts)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Decision Framework</h2>
            <div className="rounded-lg border border-border bg-surface p-5 space-y-4">
              <div>
                <p className="text-foreground font-semibold">1. Are you a creator or a business?</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li><strong className="text-foreground">Creator:</strong> Start on beehiiv Launch (free). Move to Kit free if you need more than 2,500 subs. Pay for beehiiv Scale ($49/mo) when you want to monetize.</li>
                  <li><strong className="text-foreground">Business:</strong> Start on Brevo free (100K contacts, 300 sends/day). Pay for ActiveCampaign ($15/mo) when you need automation sequences.</li>
                </ul>
              </div>
              <div>
                <p className="text-foreground font-semibold">2. Do you need automation?</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li><strong className="text-foreground">No:</strong> Stay free. Kit and beehiiv free tiers handle basic newsletters perfectly.</li>
                  <li><strong className="text-foreground">Yes:</strong> ActiveCampaign Starter ($15/mo) has the best automation builder. Kit Creator ($39/mo) is simpler but creator-focused.</li>
                </ul>
              </div>
              <div>
                <p className="text-foreground font-semibold">3. What&apos;s the revenue impact?</p>
                <p className="mt-1">If your email list generates $500+/month in revenue (through products, services, or ads), paying $15&ndash;$49/month for better tools is a clear win. If your list doesn&apos;t generate revenue yet, stay free until it does.</p>
              </div>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which email platform has the best free tier?</h3>
                <p>Kit (ConvertKit) has the most generous free tier at 10,000 subscribers with unlimited sends. beehiiv is the best for newsletters specifically, with 2,500 subscribers, custom domain, and unlimited sends. Brevo wins for contact storage (100,000 contacts free) but limits you to 300 sends/day.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is ActiveCampaign worth $15/month?</h3>
                <p>Yes, if you need automation. ActiveCampaign&apos;s automation builder is genuinely the best in the category. For $15/month (Starter, 1,000 contacts), you get email marketing and basic automations. The Plus plan at $49/month adds CRM, landing pages, and lead scoring.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I pay for Mailchimp?</h3>
                <p>Probably not. Mailchimp&apos;s free tier is the worst (250 contacts, 500 sends) and its paid plans are expensive relative to alternatives. Mailchimp Essentials starts at $13/month for 500 contacts. Brevo Starter gives you 5,000 emails/month for $9/month with unlimited contacts. The main reason to pay for Mailchimp is deep e-commerce integration with Shopify.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When does Substack stop being free?</h3>
                <p>Substack is always free to use, but takes a 10% cut of paid subscription revenue plus Stripe fees. If you earn $5,000/month from paid subscribers, Substack takes $500/month. At that scale, beehiiv Scale at $49/month is dramatically cheaper and gives you more control.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["convertkit", "beehiiv", "brevo", "activecampaign", "mailchimp"]}
            comparisons={["convertkit-vs-beehiiv", "mailchimp-vs-brevo"]}
            guides={[
              "best-email-tool-creators",
              "email-pricing-cheat-sheet",
              "when-mailchimp-becomes-expensive",
            ]}
          />
        </div>
      </div>
    </>
  );
}
