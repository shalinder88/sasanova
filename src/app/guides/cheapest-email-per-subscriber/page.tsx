import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Cheapest Email Marketing Per Subscriber: Cost at 1K, 5K, 10K, and 25K",
  description:
    "Cost-per-subscriber comparison across Mailchimp, Kit, Brevo, ActiveCampaign, and beehiiv at every list size. Brevo wins on raw cost. Kit wins for creators. The math that matters.",
};

export default function CheapestEmailPerSubscriber() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Cheapest Email Per Subscriber</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Comparison Angle
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Cheapest Email Marketing Per Subscriber: Cost at 1K, 5K, 10K, and 25K
          </h1>
          <p className="text-lg text-muted">
            Email marketing pricing is confusing because every tool charges differently: some by contacts, some by emails sent, some flat rate. Here&apos;s the cost-per-subscriber math at every common list size, using exact pricing from Mailchimp, Kit, Brevo, ActiveCampaign, and beehiiv.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Key Insight</p>
            <p className="text-sm text-muted">
              Brevo charges by <strong className="text-foreground">emails sent</strong>, not contacts stored. Everyone else charges by <strong className="text-foreground">contacts</strong>. This means Brevo stays cheap at any list size as long as you don&apos;t send daily. Kit Newsletter is free up to <strong className="text-foreground">10,000 subscribers</strong>. beehiiv Launch is free up to <strong className="text-foreground">2,500 subscribers</strong>.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">At 1,000 Subscribers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost per Subscriber</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Kit</td><td className="px-4 py-2.5">Newsletter (Free)</td><td className="px-4 py-2.5">$0</td><td className="px-4 py-2.5">$0.000</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td><td className="px-4 py-2.5">Launch (Free)</td><td className="px-4 py-2.5">$0</td><td className="px-4 py-2.5">$0.000</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Brevo</td><td className="px-4 py-2.5">Free</td><td className="px-4 py-2.5">$0</td><td className="px-4 py-2.5">$0.000</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td><td className="px-4 py-2.5">Essentials</td><td className="px-4 py-2.5">$13/mo</td><td className="px-4 py-2.5">$0.013</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td><td className="px-4 py-2.5">Starter</td><td className="px-4 py-2.5">$15/mo</td><td className="px-4 py-2.5">$0.015</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">At 5,000 Subscribers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost per Subscriber</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Kit</td><td className="px-4 py-2.5">Newsletter (Free)</td><td className="px-4 py-2.5">$0</td><td className="px-4 py-2.5">$0.000</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Brevo</td><td className="px-4 py-2.5">Starter</td><td className="px-4 py-2.5">$9/mo</td><td className="px-4 py-2.5">$0.002</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td><td className="px-4 py-2.5">Scale</td><td className="px-4 py-2.5">$49/mo</td><td className="px-4 py-2.5">$0.010</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td><td className="px-4 py-2.5">Starter</td><td className="px-4 py-2.5">~$49/mo</td><td className="px-4 py-2.5">~$0.010</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td><td className="px-4 py-2.5">Standard</td><td className="px-4 py-2.5">~$75/mo</td><td className="px-4 py-2.5">~$0.015</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">At 10,000 Subscribers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost per Subscriber</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Kit</td><td className="px-4 py-2.5">Newsletter (Free)</td><td className="px-4 py-2.5">$0</td><td className="px-4 py-2.5">$0.000</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Brevo</td><td className="px-4 py-2.5">Starter</td><td className="px-4 py-2.5">$9/mo</td><td className="px-4 py-2.5">$0.001</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td><td className="px-4 py-2.5">Scale</td><td className="px-4 py-2.5">$49/mo</td><td className="px-4 py-2.5">$0.005</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td><td className="px-4 py-2.5">Plus</td><td className="px-4 py-2.5">~$100/mo</td><td className="px-4 py-2.5">~$0.010</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td><td className="px-4 py-2.5">Standard</td><td className="px-4 py-2.5">~$135/mo</td><td className="px-4 py-2.5">~$0.014</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">At 25,000 Subscribers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost per Subscriber</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Brevo</td><td className="px-4 py-2.5">Standard</td><td className="px-4 py-2.5">$18/mo</td><td className="px-4 py-2.5">$0.001</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td><td className="px-4 py-2.5">Scale</td><td className="px-4 py-2.5">$49/mo</td><td className="px-4 py-2.5">$0.002</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Kit</td><td className="px-4 py-2.5">Creator</td><td className="px-4 py-2.5">~$79/mo</td><td className="px-4 py-2.5">~$0.003</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td><td className="px-4 py-2.5">Plus</td><td className="px-4 py-2.5">~$180/mo</td><td className="px-4 py-2.5">~$0.007</td></tr>
                <tr><td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td><td className="px-4 py-2.5">Standard</td><td className="px-4 py-2.5">~$270/mo</td><td className="px-4 py-2.5">~$0.011</td></tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Verdict</p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Brevo is cheapest at every list size</strong> because it charges by emails sent, not contacts. Kit Newsletter (free up to 10,000 subscribers) is the cheapest for creators who don&apos;t need advanced automations. <strong className="text-foreground">Mailchimp is the most expensive at every tier</strong> and gets dramatically worse as your list grows.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Pricing Model Matters More Than the Price</h2>
          <p className="text-muted mb-4">
            Brevo charges by emails sent (5,000/mo on Starter, regardless of list size). Mailchimp charges by contacts stored (and counts unsubscribed contacts). Kit charges by active subscribers. beehiiv charges a flat rate with subscriber tiers. Understanding the model matters more than comparing headline prices, because your cost trajectory depends on how your list and send frequency grow.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Why is Mailchimp so much more expensive?</h3>
          <p className="text-muted mb-4">
            Mailchimp charges by contacts and counts unsubscribed contacts toward your bill. It also has aggressive tier-based pricing that scales steeply. At 25,000 contacts, you&apos;re paying 15x what Brevo charges. Mailchimp&apos;s advantage is template variety and name recognition, not pricing.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Is Kit really free for 10,000 subscribers?</h3>
          <p className="text-muted mb-4">
            Yes. Kit Newsletter (free tier) supports up to 10,000 subscribers with unlimited sends. The limitation: no advanced automations and no integrations. For creators who just need to send newsletters, it&apos;s genuinely free at scale. Creator plan at $39/mo (for 1,000 subscribers) adds automations.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What does Brevo&apos;s email limit mean in practice?</h3>
          <p className="text-muted mb-4">
            Brevo Starter at $9/mo gives 5,000 emails/mo. If you have 5,000 contacts and send weekly, that&apos;s 20,000 emails/mo &mdash; you&apos;d need Standard at $18/mo (5,000 emails/mo base, can upgrade volume). The key: with 100,000 contacts and 1 send/month, Brevo Starter still works at $9/mo. Contact-based tools would charge $200+/mo.
          </p>
        </div>

        <RelatedLinks
          tools={["mailchimp", "convertkit", "brevo", "activecampaign", "beehiiv"]}
          comparisons={["mailchimp-vs-kit", "brevo-vs-mailchimp", "activecampaign-vs-kit"]}
          guides={[
            "email-pricing-cheat-sheet",
            "email-list-size-cost-calculator",
            "when-mailchimp-becomes-expensive",
          ]}
        />
      </article>
    </>
  );
}
