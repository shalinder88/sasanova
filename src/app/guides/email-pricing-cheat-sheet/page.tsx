import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Marketing Pricing Cheat Sheet: Every Plan at a Glance",
  description:
    "All email marketing and newsletter tools, all tiers, all prices. Mailchimp, Kit, Brevo, ActiveCampaign, beehiiv, Ghost, Substack, and Buttondown in one table.",
};

export default function EmailPricingCheatSheetGuide() {
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
            <span className="text-foreground font-medium truncate">Email Pricing Cheat Sheet</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Quick Reference
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Email Marketing Pricing Cheat Sheet: Every Plan at a Glance
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 6 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Every email marketing and newsletter platform plan, side by side. All prices are monthly
            rates. Annual billing saves 10&ndash;30% depending on the vendor. Prices verified March 2026.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Mailchimp</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Free</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">250 contacts, 500 sends/mo, limited automations</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Essentials</td><td className="px-4 py-2">$13/mo</td><td className="px-4 py-2">$156/yr</td><td className="px-4 py-2">500 contacts, 5,000 sends/mo, email + chat support</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Standard</td><td className="px-4 py-2">$20/mo</td><td className="px-4 py-2">$240/yr</td><td className="px-4 py-2">500 contacts, 6,000 sends/mo, advanced automations</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Premium</td><td className="px-4 py-2">$350/mo</td><td className="px-4 py-2">$4,200/yr</td><td className="px-4 py-2">10,000 contacts, 150,000 sends/mo, phone support</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Kit (ConvertKit)</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Newsletter</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">10,000 subscribers, unlimited sends, no automations</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Creator</td><td className="px-4 py-2">$39/mo</td><td className="px-4 py-2">$468/yr</td><td className="px-4 py-2">1,000 subs (base), automations, integrations, live chat</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Creator Pro</td><td className="px-4 py-2">$79/mo</td><td className="px-4 py-2">$948/yr</td><td className="px-4 py-2">1,000 subs (base), advanced reporting, subscriber scoring, referrals</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Brevo (Sendinblue)</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Free</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">100,000 contacts, 300 emails/day, Brevo branding</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Starter</td><td className="px-4 py-2">$9/mo</td><td className="px-4 py-2">$108/yr</td><td className="px-4 py-2">5,000 emails/mo, no daily limit, basic reporting</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Standard</td><td className="px-4 py-2">$18/mo</td><td className="px-4 py-2">$216/yr</td><td className="px-4 py-2">5,000 emails/mo, automation, A/B testing, advanced stats</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Professional</td><td className="px-4 py-2">$499/mo</td><td className="px-4 py-2">$5,988/yr</td><td className="px-4 py-2">150,000+ emails, dedicated IP</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">ActiveCampaign</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Starter</td><td className="px-4 py-2">$15/mo</td><td className="px-4 py-2">$108/yr</td><td className="px-4 py-2">1,000 contacts, email marketing, basic automations</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Plus</td><td className="px-4 py-2">$49/mo</td><td className="px-4 py-2">$348/yr</td><td className="px-4 py-2">1,000 contacts, CRM, landing pages, lead scoring</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Pro</td><td className="px-4 py-2">$79/mo</td><td className="px-4 py-2">$588/yr</td><td className="px-4 py-2">1,000 contacts, predictive sending, split automations</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Enterprise</td><td className="px-4 py-2">$145/mo</td><td className="px-4 py-2">$1,068/yr</td><td className="px-4 py-2">1,000 contacts, custom objects, HIPAA, dedicated rep</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-muted">All ActiveCampaign prices shown at 1,000 contacts. Prices scale with contact count.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">beehiiv, Ghost, Substack &amp; Buttondown</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">beehiiv</td><td className="px-4 py-2">Launch</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">2,500 subs, unlimited sends, custom domain</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">beehiiv</td><td className="px-4 py-2">Scale</td><td className="px-4 py-2">$49/mo</td><td className="px-4 py-2">Unlimited subs, ad network, referral program, A/B</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">beehiiv</td><td className="px-4 py-2">Max</td><td className="px-4 py-2">$109/mo</td><td className="px-4 py-2">Priority support, API, advanced analytics, newsroom</td></tr>
                  <tr className="border-t-2 border-border"><td className="px-4 py-2 font-medium text-foreground">Ghost</td><td className="px-4 py-2">Starter</td><td className="px-4 py-2">$18/mo</td><td className="px-4 py-2">1,000 members, 1 staff user</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Ghost</td><td className="px-4 py-2">Publisher</td><td className="px-4 py-2">$35/mo</td><td className="px-4 py-2">Unlimited members, 3 staff, paid subscriptions</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Ghost</td><td className="px-4 py-2">Business</td><td className="px-4 py-2">$239/mo</td><td className="px-4 py-2">Unlimited everything, priority support</td></tr>
                  <tr className="border-t-2 border-border"><td className="px-4 py-2 font-medium text-foreground">Substack</td><td className="px-4 py-2">Free</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">Unlimited subs, 10% of paid revenue + Stripe fees</td></tr>
                  <tr className="border-t-2 border-border"><td className="px-4 py-2 font-medium text-foreground">Buttondown</td><td className="px-4 py-2">Free</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">100 subscribers</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Buttondown</td><td className="px-4 py-2">Basic</td><td className="px-4 py-2">$9/mo</td><td className="px-4 py-2">Unlimited subs, custom domain, automation</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Buttondown</td><td className="px-4 py-2">Standard</td><td className="px-4 py-2">$29/mo</td><td className="px-4 py-2">Paid subscriptions, surveys, team members</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Buttondown</td><td className="px-4 py-2">Professional</td><td className="px-4 py-2">$79/mo</td><td className="px-4 py-2">API access, all features</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Key Pricing Differences</h2>
            <div className="rounded-lg border border-border bg-surface p-5 space-y-3">
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-foreground">Mailchimp bills by contacts.</strong> Your bill grows as your list grows. Unsubscribed contacts still count toward your limit.</li>
                <li><strong className="text-foreground">Brevo bills by emails sent.</strong> Store unlimited contacts for free. You only pay when you send. Best model for large lists with low send frequency.</li>
                <li><strong className="text-foreground">ActiveCampaign bills by contacts.</strong> Base prices are for 1,000 contacts. At 10,000 contacts, Starter jumps to ~$39/month.</li>
                <li><strong className="text-foreground">beehiiv bills flat.</strong> Scale is $49/month for unlimited subscribers. Simple and predictable.</li>
                <li><strong className="text-foreground">Ghost bills flat per tier.</strong> No per-subscriber pricing. Publisher at $35/month handles unlimited members.</li>
                <li><strong className="text-foreground">Substack takes a revenue cut.</strong> Free to use, but 10% of all paid subscription revenue goes to Substack (plus Stripe fees).</li>
              </ul>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which email platform is cheapest for 10,000 subscribers?</h3>
                <p>Kit is free up to 10,000 subscribers (Newsletter plan). beehiiv Scale at $49/month handles unlimited subscribers. Brevo Starter at $9/month lets you store unlimited contacts but limits you to 5,000 emails/month. Mailchimp Standard at 10,000 contacts costs around $100/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why do ActiveCampaign prices seem low but get expensive?</h3>
                <p>All ActiveCampaign plans start at 1,000 contacts. As your list grows, prices jump significantly. Starter at 10,000 contacts costs ~$39/month. At 50,000 contacts, you&apos;re looking at $200+/month on Starter alone. The per-contact scaling is the steepest in the market after Mailchimp.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Ghost worth $35/month vs free Substack?</h3>
                <p>If you earn over $350/month from paid subscriptions, Ghost Publisher at $35/month is cheaper than Substack&apos;s 10% cut. Ghost also gives you a custom domain, custom themes, and no Substack branding. Below $350/month in subscription revenue, Substack is financially better.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "convertkit", "brevo", "activecampaign", "beehiiv", "ghost", "substack", "buttondown"]}
            comparisons={["convertkit-vs-beehiiv", "mailchimp-vs-brevo"]}
            guides={[
              "should-i-pay-for-email-marketing",
              "saas-pricing-cheat-sheet",
              "when-mailchimp-becomes-expensive",
            ]}
          />
        </div>
      </div>
    </>
  );
}
