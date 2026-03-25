import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Every Major SaaS Pricing Change in 2026 (Running List)",
  description:
    "A running list of every significant SaaS pricing change in 2026. Mailchimp, Ghost, Bardeen, Salesforce, Pipedrive, Close CRM, and more. What changed, who it affects, and what to do instead.",
};

export default function SasPricingChanges2026Page() {
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
              SaaS Pricing Changes 2026
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Intelligence
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Every Major SaaS Pricing Change in 2026 (Running List)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            SaaS vendors change pricing constantly. Most users find out when the bill arrives.
            This page tracks every significant pricing change across the tools we cover &mdash;
            plan restructures, price increases, free tier reductions, and rebranding that hides
            price hikes. Updated as changes happen.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-accent font-semibold">Living document</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Pattern: Why 2026 Is a Big Year for Price Changes</h2>
            <p className="text-muted leading-relaxed mb-4">
              Three forces are driving SaaS pricing changes in 2026. First, AI compute costs are
              being passed to customers through new &ldquo;AI add-on&rdquo; tiers and feature
              gating. Second, post-pandemic growth has slowed, pushing vendors to extract more
              revenue per user. Third, free tier economics have shifted &mdash; tools that acquired
              millions of free users are now under pressure to convert or cut them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Master Changelog</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Date</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What Changed</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Q1 2026</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">Bardeen</td>
                    <td className="px-4 py-2.5 text-muted">Starter plan increased from ~$10/mo to $99/mo (890% increase)</td>
                    <td className="px-4 py-2.5 text-muted">Massive &mdash; budget automation users priced out</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Q1 2026</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">Ghost</td>
                    <td className="px-4 py-2.5 text-muted">Plan restructure: Starter from ~$9 to $18/mo, renamed tiers</td>
                    <td className="px-4 py-2.5 text-muted">Moderate &mdash; existing users grandfathered, new users pay more</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Q1 2026</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Approximately 6% across-the-board price increase on Sales Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Moderate &mdash; small per-seat, large in total for big teams</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Q1 2026</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Plan rebranding: Essential &rarr; Lite, Advanced &rarr; Growth, Professional &rarr; Premium, Power &rarr; Ultimate</td>
                    <td className="px-4 py-2.5 text-muted">Low &mdash; new names, similar pricing, some feature reshuffling</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Q1 2026</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">Close CRM</td>
                    <td className="px-4 py-2.5 text-muted">Restructured from Startup/Professional/Enterprise to Essentials/Growth/Scale</td>
                    <td className="px-4 py-2.5 text-muted">Moderate &mdash; Essentials starts at $49/seat (up from previous entry points)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">2024&ndash;2025</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">Free tier reduced from 2,000 contacts (2019) to 500 (2023) to 250 (2024)</td>
                    <td className="px-4 py-2.5 text-muted">Severe &mdash; free tier is now effectively a demo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Bardeen ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Bardeen: The 890% Price Jump Nobody Saw Coming</h2>
            <p className="text-muted leading-relaxed mb-4">
              Bardeen&apos;s paid plan went from approximately $10/month to $99/month &mdash; a
              roughly 10x increase. The free tier (100 credits/month) remains but is barely
              functional for real automation work. The Starter plan at $99/month includes 15,000
              credits per year (approximately 1,250/month).
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Who it affects:</strong> Budget-conscious users
              who were paying $10/month for browser automation. The jump from $10 to $99 puts
              Bardeen in the same price range as Zapier Team ($103.50/month) while offering far
              fewer integrations and requiring an open browser to run.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do instead:</strong> For browser-based
              automation at lower cost, evaluate Make Core at $10.59/month with 10,000 operations.
              For simple web scraping, Apify has a free tier. For general automation, Zapier
              Professional at $29.99/month offers multi-step workflows across 7,000+ apps.
            </p>
          </section>

          {/* ── Ghost ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Ghost: Plan Restructure Doubles Entry Price</h2>
            <p className="text-muted leading-relaxed mb-4">
              Ghost restructured its pricing tiers. The new Starter plan is $18/month (monthly
              billing), up from approximately $9/month for the previous lowest tier. The Publisher
              plan at $35/month replaces the old mid-tier. Business jumped to $239/month.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Who it affects:</strong> New Ghost users and
              anyone renewing. Existing users on older plans are typically grandfathered for some
              period. The self-hosted version remains free and open source, so technical users are
              unaffected.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do instead:</strong> If the price increase
              matters, beehiiv Launch (free, 2,500 subscribers) or beehiiv Scale ($49/month,
              unlimited subscribers) covers most of what Ghost Pro offers with built-in monetization
              tools Ghost lacks. For self-hosters, Ghost remains one of the best value publishing
              platforms at $0 plus server costs.
            </p>
          </section>

          {/* ── Salesforce ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Salesforce: The Quiet 6% That Compounds</h2>
            <p className="text-muted leading-relaxed mb-4">
              Salesforce raised prices approximately 6% across Sales Cloud tiers. Starter Suite
              is now $25/user/month, Pro Suite is $100/user/month, Enterprise is $175/user/month,
              and Unlimited is $350/user/month. This is Salesforce&apos;s second price increase
              in recent years.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Who it affects:</strong> Everyone on Salesforce,
              but it hits large teams hardest. A 25-person team on Enterprise was paying roughly
              $4,125/month. A 6% increase adds approximately $247/month &mdash; nearly $3,000/year
              &mdash; for the same features.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do instead:</strong> For teams under 25
              users, HubSpot CRM or Pipedrive offer similar core CRM at a fraction of the cost.
              Pipedrive Lite at $14/user/month delivers pipeline management at 92% less per seat
              than Salesforce Enterprise. For teams deeply invested in the Salesforce ecosystem,
              switching costs are high enough that most will absorb the increase.
            </p>
          </section>

          {/* ── Pipedrive ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Pipedrive: New Names, Similar Prices, Watch the Features</h2>
            <p className="text-muted leading-relaxed mb-4">
              Pipedrive rebranded its plan tiers: Essential became Lite ($14/user/month), Advanced
              became Growth ($39/user/month), Professional became Premium ($49/user/month), and
              Power became Ultimate ($79/user/month). Pricing stayed largely the same, but some
              features were reshuffled between tiers.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Who it affects:</strong> Existing users may find
              features they relied on moved to a different tier. The rebranding also makes it harder
              to compare against old reviews and pricing references. Check which features are
              included in your specific tier under the new naming.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do:</strong> Review the new tier feature
              lists against your current usage. If a feature you use moved to a higher tier, you
              either upgrade or find a workaround. The pricing itself did not change significantly,
              so this is more of a feature audit than a cost concern.
            </p>
          </section>

          {/* ── Close ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Close CRM: Plan Restructure Raises Entry Price</h2>
            <p className="text-muted leading-relaxed mb-4">
              Close restructured from Startup/Professional/Enterprise to Essentials/Growth/Scale.
              The new Essentials plan is $49/user/month, Growth is $109/user/month, and Scale is
              $149/user/month. The previous Startup plan had a lower entry point.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Who it affects:</strong> New Close users and
              small teams evaluating Close against competitors. At $49/user/month for the base plan,
              Close is now positioned as a premium inside-sales CRM rather than a startup-friendly option.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do instead:</strong> For inside sales
              teams on a tighter budget, Pipedrive Lite ($14/user/month) with a separate calling
              tool may be cheaper. HubSpot Starter ($20/user/month) offers basic CRM with email
              tracking. Close remains excellent if you need built-in dialing and SMS &mdash; just
              at a higher entry point.
            </p>
          </section>

          {/* ── Mailchimp ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">Mailchimp: Death of the Free Tier (A Timeline)</h2>
            <p className="text-muted leading-relaxed mb-4">
              Mailchimp&apos;s free tier has been shrinking for years. The trajectory tells the story:
            </p>
            <ul className="list-disc list-inside text-muted mb-4 space-y-2">
              <li><strong className="text-foreground">2019:</strong> Free plan included 2,000 contacts, 10,000 sends/month</li>
              <li><strong className="text-foreground">2021:</strong> Intuit acquires Mailchimp for $12 billion</li>
              <li><strong className="text-foreground">2023:</strong> Free reduced to 500 contacts, 1,000 sends/month</li>
              <li><strong className="text-foreground">2024:</strong> Free reduced to 250 contacts, 500 sends/month</li>
            </ul>
            <p className="text-muted leading-relaxed mb-4">
              At 250 contacts and 500 sends/month, the free tier is no longer a functional
              email marketing tool. It is a demo. The Essentials plan at $13/month for 500
              contacts is where real usage begins.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do instead:</strong> Kit Free offers
              10,000 subscribers with unlimited sends. beehiiv Free offers 2,500 subscribers with
              unlimited sends. Brevo Free offers 100,000 contacts with 300 emails/day. All three
              are dramatically more generous than Mailchimp Free.
            </p>
          </section>

          {/* ── Trends ── */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Trends to Watch for the Rest of 2026</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">AI surcharges are coming.</strong> Multiple
              vendors are gating AI features behind premium tiers or add-on fees. Watch for
              &ldquo;AI credits&rdquo; and &ldquo;AI operations&rdquo; as new billing dimensions.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Per-seat pricing is under pressure.</strong> Tools
              like Basecamp ($349/month flat for unlimited users) and beehiiv (flat pricing, not
              per-seat) are challenging the per-seat model. Expect more vendors to experiment with
              usage-based or flat-rate alternatives.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Free tiers will continue shrinking.</strong> The
              2019&ndash;2024 Mailchimp trajectory is the template. Vendors acquire free users, then
              gradually restrict free tiers to force conversion. Tools currently generous on free
              (Kit, beehiiv, Cal.com) may follow the same path once growth slows.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Not checking your renewal terms.</strong> Many SaaS contracts auto-renew at current (not original) pricing. Your $20/user/month plan may renew at $25/user/month if there was a price increase during your contract term. Check before renewal.</li>
              <li><strong className="text-foreground">Assuming grandfathering lasts forever.</strong> Vendors typically grandfather existing users for 1&ndash;2 renewal cycles, then migrate everyone to new pricing. Ghost and Pipedrive both follow this pattern.</li>
              <li><strong className="text-foreground">Reacting to a price increase by switching immediately.</strong> Switching costs are real. A 6% Salesforce increase on a 25-person team costs $3,000/year. Migrating 25 users to a new CRM costs 100+ hours of setup, training, and data migration. Calculate both sides before deciding.</li>
              <li><strong className="text-foreground">Ignoring plan restructures that move features.</strong> Pipedrive&apos;s rebranding is a case study: same prices, different feature distribution. A feature you use on your current plan may move to a higher tier under new naming. Always audit feature access after a restructure.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How often do SaaS tools raise prices?</h3>
                <p className="text-muted">Most major SaaS vendors adjust pricing every 12&ndash;18 months. Enterprise tools like Salesforce often include annual price escalation clauses in contracts (typically 3&ndash;7%). Smaller tools may go 2&ndash;3 years between changes, then make larger adjustments.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I stay on old pricing if I don&apos;t cancel?</h3>
                <p className="text-muted">Usually for 1&ndash;2 renewal cycles. Most vendors honor existing pricing through the current billing period, then migrate to new pricing at the next renewal. Some vendors (like Salesforce) may offer locked-in pricing for multi-year contracts.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which SaaS categories have the most stable pricing?</h3>
                <p className="text-muted">Open-source tools with cloud options (n8n, Cal.com, Ghost self-hosted) have the most stable pricing because you can always self-host for free. Tools in highly competitive categories (email marketing, project management) tend to have stable pricing because competitors keep each other in check.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Bardeen&apos;s $99/month price justified?</h3>
                <p className="text-muted">For most users, no. At $99/month, Bardeen costs more than Zapier Professional ($29.99/month) and Make Pro ($18.82/month), both of which offer broader integration libraries and do not require a browser to run. Bardeen&apos;s browser-native scraping is unique, but the price puts it in enterprise territory.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "salesforce", "pipedrive", "close-crm", "bardeen", "ghost", "beehiiv", "make"]}
            comparisons={["mailchimp-vs-beehiiv", "salesforce-vs-hubspot-crm", "pipedrive-vs-close-crm"]}
            guides={[
              "mailchimp-pricing-history",
              "zapier-pricing-history",
              "hubspot-pricing-history",
              "saas-pricing-models-explained",
              "software-switching-cost-guide",
              "best-free-saas-tools-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
