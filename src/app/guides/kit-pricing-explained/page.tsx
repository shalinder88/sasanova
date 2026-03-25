import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Kit (ConvertKit) Pricing Explained: Free for 10K, Then What?",
  description:
    "Kit pricing decoded: Newsletter free (10,000 subs), Creator $39/mo, Creator Pro $79/mo. What free walls off, automation limits, and when paid tiers justify the cost.",
};

export default function KitPricingExplainedPage() {
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
              Kit (ConvertKit) Pricing Explained
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Kit (ConvertKit) Pricing Explained: Free for 10K, Then What?
          </h1>
          <p className="text-lg text-muted">
            Kit (formerly ConvertKit) offers a free tier that supports up to 10,000 subscribers &mdash; more than any competitor. But that generosity comes with walls around automations, integrations, and sequences. This guide breaks down what free actually gives you, what it walls off, and when paying $39 or $79/month is worth it.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Every Tier at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Newsletter (Free)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">10,000 subscribers, unlimited sends, landing pages, limited automations</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Creator</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                  <td className="px-4 py-2.5">Full automations, integrations, live chat support, email sequences</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Creator Pro</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                  <td className="px-4 py-2.5">Advanced reporting, subscriber scoring, newsletter referrals</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            All prices above are at 1,000 subscribers on paid tiers. Like ActiveCampaign, Kit&apos;s paid tier prices scale with subscriber count. The free tier&apos;s 10,000-subscriber cap is the highest free limit in email marketing.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Free Walls Off</h2>
          <p className="text-muted mb-4">
            Kit&apos;s free tier is generous on subscriber count but restrictive on features. Here is exactly what you cannot do on free:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">No visual automations.</strong> Kit&apos;s visual automation builder &mdash; the feature many creators choose Kit for &mdash; is locked behind Creator. Free users can send broadcasts but cannot build automated workflows.</li>
            <li><strong className="text-foreground">No email sequences.</strong> Multi-email automated sequences (welcome series, onboarding drips, course delivery) require Creator. Free gives you one-off broadcasts only.</li>
            <li><strong className="text-foreground">No third-party integrations.</strong> Zapier, Stripe, WordPress, and other integrations require Creator. Free users are limited to Kit&apos;s built-in features.</li>
            <li><strong className="text-foreground">No live chat support.</strong> Free users get email support only. Creator adds live chat during business hours.</li>
            <li><strong className="text-foreground">No advanced subscriber management.</strong> Bulk actions, import tags, and custom subscriber fields beyond basics require Creator.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The key trade-off</p>
            <p className="text-sm text-muted">
              Kit Free gives you the biggest free audience (10,000 subscribers) but the weakest free toolset (no automations, no sequences, no integrations). beehiiv Free gives you only 2,500 subscribers but includes a website builder and custom domain. Mailchimp Free gives you only 250 contacts but includes basic automations. Choose based on what matters more: list size or feature access.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">How Prices Scale With Subscribers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Newsletter (Free)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Creator</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Creator Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Up to 1,000</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Up to 3,000</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$99/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Up to 5,000</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                  <td className="px-4 py-2.5">$111/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Up to 10,000</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$119/mo</td>
                  <td className="px-4 py-2.5">$167/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Up to 25,000</td>
                  <td className="px-4 py-2.5">Over limit</td>
                  <td className="px-4 py-2.5">$199/mo</td>
                  <td className="px-4 py-2.5">$279/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Up to 55,000</td>
                  <td className="px-4 py-2.5">Over limit</td>
                  <td className="px-4 py-2.5">$379/mo</td>
                  <td className="px-4 py-2.5">$519/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The scaling reality:</strong> At 10,000 subscribers, Creator costs $119/month &mdash; 3x the 1,000-subscriber price. Meanwhile, beehiiv Scale stays at $49/month regardless of subscriber count. For pure newsletters at scale, beehiiv is significantly cheaper. Kit&apos;s advantage is its creator commerce features (digital products, paid newsletters) and visual automation builder.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Free is a newsletter-only tool.</strong> Without automations, sequences, or integrations, Kit Free is a broadcast email sender with a landing page builder. It&apos;s not an email marketing platform on the free tier.</li>
            <li><strong className="text-foreground">Subscriber-based pricing scales steeply.</strong> Creator at 10,000 subscribers ($119/mo) costs more than ActiveCampaign Starter at the same count ($119/mo) while offering less automation depth. At 25,000 subscribers, Creator hits $199/month.</li>
            <li><strong className="text-foreground">Commerce fees.</strong> Kit charges transaction fees on digital product sales and paid subscriptions facilitated through the platform, on top of Stripe&apos;s processing fees.</li>
            <li><strong className="text-foreground">No CRM.</strong> Unlike ActiveCampaign, Kit has no CRM or deal pipeline. If you need sales pipeline management alongside email, you&apos;ll need a separate CRM tool.</li>
            <li><strong className="text-foreground">Limited reporting on free and Creator.</strong> Advanced reporting (subscriber engagement scoring, deliverability metrics, referral tracking) requires Creator Pro at $79/month.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Newsletter (Free)</strong> &mdash; You&apos;re building an audience, sending broadcast emails, and don&apos;t need automations yet. The 10,000-subscriber cap gives you plenty of runway.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Creator ($39/mo)</strong> &mdash; You need visual automations, email sequences, and third-party integrations. The right tier for creators selling digital products, running courses, or building multi-step welcome series.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Creator Pro ($79/mo)</strong> &mdash; You need subscriber scoring, newsletter referral programs, or advanced deliverability reporting. Typically makes sense for established creators with 5,000+ subscribers who actively monetize.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">beehiiv Scale at $49/month</strong> with unlimited subscribers is dramatically cheaper than Kit Creator at scale. At 10,000 subscribers, Kit Creator costs $119/month vs beehiiv Scale at $49/month. beehiiv also includes an ad network and referral program. The tradeoff: beehiiv lacks Kit&apos;s visual automation builder and digital product commerce features.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo</strong> charges by emails sent, not subscribers stored. You can have 100,000 contacts for free and pay $9/month for 5,000 emails. For creators with large lists who send infrequently, Brevo can cost a fraction of Kit.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Kit (ConvertKit) free really free?</h3>
                <p className="text-muted">Yes. Kit Newsletter gives you up to 10,000 subscribers with unlimited emails at $0, indefinitely. The limitations: no automations, no sequences, no third-party integrations, and email-only support. It&apos;s a broadcast email tool on the free tier, not a marketing automation platform.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Kit cost for 10,000 subscribers?</h3>
                <p className="text-muted">Newsletter (free) supports 10,000 subscribers at $0 but without automations. Creator costs $119/month at 10,000 subscribers. Creator Pro costs $167/month at 10,000 subscribers. Annual billing offers discounts.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Kit vs beehiiv: which is better for newsletters?</h3>
                <p className="text-muted">beehiiv is better for pure newsletter businesses (ad network, referral program, unlimited subscribers at $49/month). Kit is better for creators who sell digital products, courses, and paid newsletters alongside email marketing. Choose based on your revenue model.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why did ConvertKit rebrand to Kit?</h3>
                <p className="text-muted">ConvertKit rebranded to Kit in 2024 as part of a broader platform evolution beyond email-only marketing. The product, pricing, and features remain the same. Old links redirect to kit.com.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["convertkit", "beehiiv", "mailchimp"]}
            comparisons={["beehiiv-vs-convertkit", "convertkit-vs-activecampaign"]}
            guides={["switch-from-kit-to-beehiiv", "migrate-mailchimp-to-kit"]}
          />
        </div>
      </article>
    </>
  );
}
