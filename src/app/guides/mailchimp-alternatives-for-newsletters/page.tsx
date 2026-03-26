import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Mailchimp Alternatives for Newsletter Creators: Real Cost Comparison",
  description:
    "Kit free for 10K subscribers, beehiiv free for 2,500, Substack takes 10%, Brevo free for 100K contacts, Ghost at $18/mo. Real cost at 5K, 10K, and 25K subscribers.",
};

export default function MailchimpAlternativesNewsletters() {
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
              Mailchimp Alternatives for Newsletters
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Alternatives Deep-Dive
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Mailchimp Alternatives for Newsletter Creators: Real Cost Comparison
          </h1>
          <p className="text-lg text-muted">
            Mailchimp&apos;s free tier now covers just 250 contacts and 500 sends per month. For newsletter creators, that&apos;s useless within weeks. Standard starts at $20/month for 500 contacts and scales steeply &mdash; at 10,000 subscribers you&apos;re paying roughly $100/month. Every alternative below is cheaper at scale, and several are free at volumes where Mailchimp already charges.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">The Mailchimp Problem for Newsletter Creators</h2>
          <p className="text-muted mb-4">
            Mailchimp was built for e-commerce email marketing, not newsletters. It charges by contacts stored, counts unsubscribed contacts against your limit, and locks automations behind higher tiers. The free tier gives you 250 contacts and 500 sends/month &mdash; barely enough for a personal mailing list. Essentials starts at $13/month for 500 contacts. For a creator growing a newsletter, these economics make no sense.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Kit (ConvertKit) &mdash; Free Up to 10,000 Subscribers</h2>
          <p className="text-muted mb-4">
            Kit&apos;s Newsletter plan is free for up to 10,000 subscribers with unlimited sends. That alone makes it the most generous free tier for newsletter creators. The catch: no advanced automations, no integrations, and no visual automation builder on the free plan. Creator is $39/month (for 1,000 subscribers, scaling up) with automations and integrations. Creator Pro is $79/month adding subscriber scoring and referral programs.
          </p>
          <p className="text-muted mb-4">
            Kit is built for creators specifically &mdash; bloggers, YouTubers, podcasters. It has a subscriber-centric model (no duplicate counting), a visual automation builder, and built-in digital product sales. If you primarily need to send a weekly newsletter to a growing list, Kit&apos;s free plan lets you reach 10,000 subscribers before you pay anything.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">beehiiv &mdash; Free Up to 2,500 Subscribers</h2>
          <p className="text-muted mb-4">
            beehiiv Launch is free for up to 2,500 subscribers with unlimited sends, custom domains, and a website builder. Scale is $49/month for unlimited subscribers plus the ad network (Boosts), referral program, and A/B testing. Max is $109/month adding priority support and API access.
          </p>
          <p className="text-muted mb-4">
            beehiiv is the newsletter-native platform. It was built specifically for newsletter operators who want to grow, monetize, and manage a newsletter business. The built-in ad network (Boosts) means you can earn revenue from other newsletters recommending yours &mdash; and that revenue can offset or exceed the $49/month Scale plan cost. If you plan to monetize through ads and paid subscriptions, beehiiv gives you the best tooling.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Substack &mdash; Free (10% Revenue Cut)</h2>
          <p className="text-muted mb-4">
            Substack is free for unlimited subscribers and unlimited sends. The platform takes 10% of paid subscription revenue plus Stripe processing fees. If you never charge readers, it costs nothing. Substack provides built-in discovery through its recommendation network and mobile app.
          </p>
          <p className="text-muted mb-4">
            The tradeoff is control. You can&apos;t fully customize your brand, you have limited segmentation, no automation, and the 10% cut grows as revenue grows. At $5,000/month in subscription revenue, Substack takes $500/month. At $10,000/month, that&apos;s $1,000/month. For comparison, beehiiv Scale at $49/month takes zero percent of revenue.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Brevo &mdash; Free for 100,000 Contacts</h2>
          <p className="text-muted mb-4">
            Brevo&apos;s free plan stores up to 100,000 contacts with 300 emails per day (about 9,000/month). Starter is $9/month for 5,000 emails/month without the daily limit. Standard is $18/month adding marketing automation and A/B testing. The key differentiator: Brevo charges by emails sent, not contacts stored. You could have 50,000 subscribers and pay less than Mailchimp charges for 2,000.
          </p>
          <p className="text-muted mb-4">
            The 300 emails/day limit on the free plan is the constraint. For a weekly newsletter to 5,000 subscribers, you&apos;d need to send across multiple days (or upgrade to Starter at $9/month). But for creators building a list who send 1&ndash;2 times per week, the free plan works well up to about 2,000 active subscribers on a weekly cadence.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Ghost &mdash; $18/Month (Self-Hosted Free)</h2>
          <p className="text-muted mb-4">
            Ghost Pro Starter is $18/month for up to 1,000 members and 1 staff user. Publisher is $35/month for unlimited members, 3 staff, paid subscriptions, and custom themes. Self-hosted Ghost is completely free with no limits &mdash; if you run your own server.
          </p>
          <p className="text-muted mb-4">
            Ghost is the professional publisher&apos;s platform. It takes zero percent of subscription revenue (unlike Substack&apos;s 10%). For a creator earning $2,000/month in subscriptions, Ghost Pro at $35/month keeps $1,965 in your pocket, while Substack takes $200. The breakeven against Substack happens at roughly $350/month in subscription revenue.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Cost Comparison at 5K, 10K, and 25K Subscribers</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">At 5,000 subscribers:</strong> Kit is free (Newsletter plan). beehiiv Scale is $49/month. Substack is free (if no paid subscribers). Brevo Starter is $9/month (enough for weekly sends). Ghost Starter is $18/month. Mailchimp Standard is roughly $75/month.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">At 10,000 subscribers:</strong> Kit is free (Newsletter plan, maxes out here). beehiiv Scale is $49/month. Substack is free. Brevo Starter is roughly $18/month (more sends needed). Ghost Publisher is $35/month. Mailchimp Standard is roughly $110/month.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">At 25,000 subscribers:</strong> Kit Creator is roughly $79+/month (paid plan required above 10K). beehiiv Scale is $49/month (unlimited subscribers). Substack is free. Brevo Standard is roughly $35/month. Ghost Publisher is $35/month. Mailchimp Standard is roughly $230/month.
          </p>
          <p className="text-muted mb-4">
            beehiiv Scale at $49/month for unlimited subscribers is the best value at scale. Mailchimp is the most expensive at every subscriber tier.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Decision Framework</h2>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li><strong className="text-foreground">Biggest free tier:</strong> Kit free (10,000 subscribers)</li>
            <li><strong className="text-foreground">Best for monetization:</strong> beehiiv Scale ($49/month, built-in ads and referrals)</li>
            <li><strong className="text-foreground">Simplest setup, built-in audience:</strong> Substack free (but 10% cut on paid)</li>
            <li><strong className="text-foreground">Cheapest at high volume:</strong> Brevo ($9&ndash;$18/month for 5K&ndash;25K)</li>
            <li><strong className="text-foreground">Full ownership, no revenue cut:</strong> Ghost ($18&ndash;$35/month or free self-hosted)</li>
          </ul>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best free Mailchimp alternative for newsletters?</h3>
                <p>Kit (ConvertKit) with its free tier for up to 10,000 subscribers. If you need monetization tools, beehiiv Launch is free for 2,500 subscribers with a built-in ad network on the $49/month Scale plan.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Substack really free?</h3>
                <p>Substack charges nothing upfront. But if you enable paid subscriptions, it takes 10% of your subscription revenue plus Stripe fees. At $5,000/month in revenue, that is $500/month &mdash; more expensive than every other option on this list.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate my Mailchimp list to these alternatives?</h3>
                <p>Yes. All five alternatives accept CSV imports of your subscriber list. beehiiv and Kit also offer migration guides. The main loss is automation workflows &mdash; you will need to rebuild sequences manually.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "substack", "brevo", "ghost"]}
            comparisons={["beehiiv-vs-convertkit", "beehiiv-vs-substack", "mailchimp-vs-convertkit"]}
            guides={[
              "when-mailchimp-becomes-expensive",
              "best-newsletter-paid-subscribers",
              "newsletter-stack",
            ]}
          />
        </div>
      </article>
    </>
  );
}
