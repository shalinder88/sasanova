import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Which SaaS Tools Are Likely to Raise Prices Next?",
  description:
    "Data-informed predictions on which SaaS tools may raise prices next, based on free tier reductions, recent acquisitions, reduced limits, and competitor consolidation.",
};

export default function SaasToolsGoingUpInPricePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Tools Likely to Raise Prices</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Intelligence
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Which SaaS Tools Are Likely to Raise Prices Next?
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Price increases don&apos;t come out of nowhere. They follow patterns: free tier
            reductions, feature gating, plan restructures, and post-acquisition changes.
            This guide identifies tools showing early warning signs based on documented
            patterns, so you can plan ahead.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-accent font-semibold">Speculative &mdash; data-informed</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <p className="text-muted leading-relaxed mb-4 italic">
              Disclaimer: These are educated predictions based on observable patterns. We do not have
              inside knowledge of any vendor&apos;s pricing plans. Use this to inform your planning,
              not as certainty.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The 5 Warning Signs of an Upcoming Price Increase</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">1. Free tier reduction.</strong> When a vendor shrinks their free tier (Mailchimp: 2,000 &rarr; 500 &rarr; 250 contacts), paid plan increases usually follow within 6&ndash;12 months.</li>
              <li><strong className="text-foreground">2. Plan restructure with new names.</strong> Renaming plans (Pipedrive&apos;s Essential &rarr; Lite, Advanced &rarr; Growth) often reshuffles features between tiers, effectively raising prices for some users.</li>
              <li><strong className="text-foreground">3. AI feature add-ons.</strong> When a tool adds AI as a separate paid add-on (Notion AI $10/user, ClickUp Brain $7/member), it signals willingness to monetize existing users more aggressively.</li>
              <li><strong className="text-foreground">4. Recent acquisition.</strong> Acquirers need to justify the purchase price. Intuit bought Mailchimp for $12B &mdash; free tier cuts followed. Watch any recently acquired tool.</li>
              <li><strong className="text-foreground">5. Competitor consolidation.</strong> When competitors merge or shut down, remaining tools have less pricing pressure. Fewer alternatives = higher prices.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Tools Showing Warning Signs</h2>

            <h3 className="text-lg font-semibold mt-6 mb-2">Mailchimp: Continued Squeeze Likely</h3>
            <p className="text-muted leading-relaxed mb-4">
              Mailchimp has been on a multi-year price increase trajectory since the Intuit
              acquisition. Free tier went from 2,000 contacts (2019) to 250 (2024). Essentials
              starts at $13/month for just 500 contacts. The pattern suggests further free tier
              restrictions or entry-plan price increases. Current alternative: Kit free (10,000
              subscribers), beehiiv free (2,500 subscribers), Brevo free (unlimited contacts,
              300 emails/day).
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Notion: AI Monetization Pressure</h3>
            <p className="text-muted leading-relaxed mb-4">
              Notion AI at $10/user/month add-on shows willingness to charge existing users
              more. The generous free tier (unlimited pages) is currently intact, but Notion
              has investors who need returns. If the free tier adds limits, it would affect
              millions of users. Current price: Plus at $12/user/month, Business at
              $24/user/month. Lock in annual pricing ($10/user/month for Plus) if you&apos;re
              committed.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Zapier: Task Limits May Tighten Further</h3>
            <p className="text-muted leading-relaxed mb-4">
              Zapier has already raised prices multiple times and reduced free tier limits.
              Current free tier: 100 tasks/month, two-step only. Professional: $29.99/month
              for 750 tasks. The multi-step task counting model is inherently inflationary &mdash;
              as users build more complex Zaps, they burn through tasks faster. Expect task
              limits to stay tight or tighten further. Alternative: Make Core at $10.59/month
              for 10,000 operations.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">ClickUp: Feature Gating Risk</h3>
            <p className="text-muted leading-relaxed mb-4">
              ClickUp Free is exceptionally generous (unlimited tasks, unlimited members). This
              is a growth-stage strategy that may not persist as the company matures. ClickUp
              Brain ($7/member/month add-on) already shows monetization of existing features.
              Current Unlimited: $10/member/month. Watch for free tier storage limits tightening
              (currently 100MB) or feature restrictions.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2">Tools Currently Safe (Low Risk)</h3>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Open-source tools</strong> (n8n, Cal.com, Ghost
              self-hosted) can&apos;t raise prices on self-hosted users. <strong className="text-foreground">
              beehiiv</strong> is in growth mode, adding features at current prices.
              <strong className="text-foreground">Basecamp</strong> has held $349/month flat for
              years. <strong className="text-foreground">Brevo</strong> has maintained generous
              free tier and competitive pricing consistently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">How to Protect Yourself</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Lock in annual pricing now</strong> for tools you&apos;re confident about. Annual contracts protect you from mid-year increases for the contract duration.</li>
              <li><strong className="text-foreground">Keep your data portable.</strong> Export contacts, content, and configurations regularly. The easier it is to leave, the less a price increase hurts you.</li>
              <li><strong className="text-foreground">Monitor vendor announcements.</strong> Follow tool changelogs and pricing pages. Most price increases are announced 30&ndash;90 days before taking effect.</li>
              <li><strong className="text-foreground">Have a backup plan.</strong> Know which alternative you&apos;d switch to for each critical tool. If Zapier raises prices, Make Core at $10.59/month is your fallback. If Mailchimp raises again, beehiiv Scale at $49/month.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How accurate are these predictions?</h3>
                <p className="text-muted">The patterns are well-established (free tier reductions precede price increases; post-acquisition prices rise). Specific timing is unpredictable. Use this to prepare, not to panic. Having alternatives identified saves you weeks of research when a price increase is announced.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I switch tools preemptively?</h3>
                <p className="text-muted">No. Switching has real costs (time, migration, retraining). Only switch when a price increase actually happens AND the savings exceed switching costs. Lock in annual pricing and keep alternatives identified, but don&apos;t switch based on speculation.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "notion", "zapier", "clickup", "make", "beehiiv"]}
            comparisons={["zapier-vs-make", "mailchimp-vs-beehiiv"]}
            guides={[
              "saas-pricing-changes-2026",
              "saas-tools-that-raised-prices-recently",
              "mailchimp-pricing-history",
              "zapier-pricing-history",
              "software-switching-cost-guide",
            ]}
          />
        </div>
      </article>
    </>
  );
}
