import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "What Changed in Email Marketing This Quarter (Q1 2026)",
  description:
    "Every significant email marketing change in Q1 2026: Mailchimp free tier at 250 contacts, Ghost restructured to 3 tiers, Kit raised Creator to $39/mo. What changed, who it affects, and what to do.",
};

export default function EmailPlatformChangesQ12026Page() {
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
              Email Platform Changes Q1 2026
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Competitive Intelligence
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            What Changed in Email Marketing This Quarter (Q1 2026)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Email marketing platforms changed more in Q1 2026 than most users noticed. Free tiers
            tightened, pricing restructured, and feature sets shifted between plans. Here is
            everything that changed and what it means for your bill.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-accent font-semibold">Quarterly update</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Q1 2026 Changes at a Glance</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What Changed</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2.5 text-muted">Mailchimp</td><td className="px-4 py-2.5 text-muted">Free tier now 250 contacts, 500 sends/mo</td><td className="px-4 py-2.5 text-muted">Free tier is effectively a demo</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Ghost</td><td className="px-4 py-2.5 text-muted">Restructured to Starter ($18), Publisher ($35), Business ($239)</td><td className="px-4 py-2.5 text-muted">Clearer tiers but higher entry price</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Kit (ConvertKit)</td><td className="px-4 py-2.5 text-muted">Creator plan at $39/mo, Creator Pro at $79/mo</td><td className="px-4 py-2.5 text-muted">Paid plans positioned higher</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">beehiiv</td><td className="px-4 py-2.5 text-muted">Stable: Launch free, Scale $49/mo, Max $109/mo</td><td className="px-4 py-2.5 text-muted">No changes (rare in this market)</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">ActiveCampaign</td><td className="px-4 py-2.5 text-muted">Starter at $15/mo, Plus at $49/mo, Pro at $79/mo</td><td className="px-4 py-2.5 text-muted">Current pricing stable</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Brevo</td><td className="px-4 py-2.5 text-muted">Stable: Free (300/day), Starter $9/mo, Standard $18/mo</td><td className="px-4 py-2.5 text-muted">No changes</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Mailchimp: The Free Tier Is Now a Demo</h2>
            <p className="text-muted leading-relaxed mb-4">
              Mailchimp&apos;s free tier trajectory has been one-directional since the Intuit
              acquisition in 2021. The current state: 250 contacts and 500 emails/month. For
              context, in 2019, Mailchimp Free included 2,000 contacts and 10,000 sends/month.
              That is an 87.5% reduction in contacts and 95% reduction in sends.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The Essentials plan ($13/month for 500 contacts, 5,000 sends) is now the practical
              starting point. Standard ($20/month) adds advanced automations. Premium ($350/month)
              is enterprise territory at 10,000 contacts and 150,000 sends.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do:</strong> If you are on Mailchimp
              Free, consider switching to Kit Free (10,000 subscribers, unlimited sends) or
              beehiiv Launch (2,500 subscribers, unlimited sends). Both offer dramatically more
              than Mailchimp Free at the same price: $0.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Ghost: Restructured Pricing, Higher Entry Point</h2>
            <p className="text-muted leading-relaxed mb-4">
              Ghost restructured its managed hosting (Ghost Pro) into three clear tiers: Starter
              at $18/month (1,000 members, 1 staff user), Publisher at $35/month (unlimited
              members, 3 staff, paid subscriptions), and Business at $239/month (unlimited
              everything, priority support).
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The self-hosted version remains free and open source. For creators who want Ghost
              without the managed hosting cost, self-hosting on a $5&ndash;$10/month VPS is still
              an option &mdash; but requires technical skills for setup and maintenance.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Who it affects:</strong> New Ghost users deciding
              between managed and self-hosted. The $18/month Starter tier is reasonable for
              individual publishers, but the jump to Publisher ($35/month) for paid subscriptions
              is a consideration. beehiiv Scale ($49/month) includes similar features plus a
              built-in ad network and referral program.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Kit (ConvertKit): Paid Plans Positioned Higher</h2>
            <p className="text-muted leading-relaxed mb-4">
              Kit&apos;s free Newsletter plan remains generous at 10,000 subscribers with unlimited
              sends but no advanced automations. The paid Creator plan is $39/month (1,000
              subscribers) with automations and integrations. Creator Pro is $79/month with
              advanced reporting, subscriber scoring, and newsletter referrals.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The value question:</strong> Kit Creator at
              $39/month for 1,000 subscribers competes with ActiveCampaign Starter at $15/month
              for 1,000 contacts. ActiveCampaign is cheaper and more powerful for automation.
              Kit wins on simplicity and creator-specific features like the sponsor network and
              commerce tools.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do:</strong> If you need Kit for its
              creator ecosystem (commerce, sponsor network), the pricing is fair. If you just
              need email automation at scale, ActiveCampaign or beehiiv may offer better value.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Platforms That Did Not Change (And Why That Matters)</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">beehiiv:</strong> Launch (free, 2,500 subscribers),
              Scale ($49/month), Max ($109/month). No changes. beehiiv is still in growth mode,
              acquiring users, which historically means stable pricing. Enjoy it while it lasts.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Brevo:</strong> Free (100,000 contacts, 300
              emails/day), Starter ($9/month), Standard ($18/month). Brevo&apos;s contact-based
              pricing model (pay by sends, not contacts) remains the most generous for large lists.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">ActiveCampaign:</strong> Starter ($15/month),
              Plus ($49/month), Pro ($79/month), Enterprise ($145/month). All for 1,000 contacts.
              Prices scale with contact count. Current pricing has been stable through Q1 2026.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Trend: Free Tiers Are Shrinking</h2>
            <p className="text-muted leading-relaxed mb-4">
              The pattern across Q1 2026 is clear: established platforms are tightening free
              tiers (Mailchimp) while newer platforms maintain generous free offerings (beehiiv,
              Kit, Brevo). This is the standard SaaS growth cycle: attract users with free,
              build market share, then monetize.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Prediction:</strong> Platforms currently
              offering generous free tiers (beehiiv, Kit) will likely tighten them within
              12&ndash;24 months as growth-stage economics shift to profitability-stage economics.
              If you are choosing a platform, factor in the likely future pricing trajectory,
              not just today&apos;s pricing.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Mailchimp still worth using in 2026?</h3>
                <p className="text-muted">For e-commerce with Shopify integration, yes &mdash; Mailchimp has the deepest product recommendation engine. For newsletters, no. beehiiv and Kit both offer better free tiers and more growth-focused features.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which email platform has the most stable pricing?</h3>
                <p className="text-muted">Ghost self-hosted (free forever, open source) and Brevo (no changes in over a year). Cloud-hosted platforms all adjust pricing periodically. beehiiv and Kit have been stable but are growth-stage companies that will likely adjust in the future.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I switch from Mailchimp to a cheaper platform?</h3>
                <p className="text-muted">If you are on Mailchimp Free (250 contacts), switching to beehiiv Launch or Kit Free costs nothing and gives you 10x&ndash;40x more capacity. If you are on a paid Mailchimp plan with complex automations, calculate the switching cost (data migration, automation rebuild) before deciding.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "beehiiv", "convertkit", "ghost", "activecampaign", "brevo"]}
            comparisons={["mailchimp-vs-beehiiv", "beehiiv-vs-convertkit"]}
            guides={[
              "mailchimp-pricing-history",
              "saas-pricing-changes-2026",
              "saas-free-tier-changes-2026",
              "how-to-choose-email-platform",
              "best-free-email-tool-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
