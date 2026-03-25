import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Substack to beehiiv: Why Creators Switch and How to Do It",
  description:
    "The 10% revenue cut math, content export, custom domain setup, and monetization comparison. When Substack is actually better and when beehiiv wins.",
};

export default function MigrateSubstackToBeehiiv() {
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
              Migrate Substack to beehiiv
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Email Migration
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Substack to beehiiv: Why Creators Switch and How to Do It
          </h1>
          <p className="text-lg text-muted">
            Substack takes 10% of your paid subscription revenue. Plus Stripe&apos;s ~3%. That&apos;s 13% gone before you see a dollar. At $10,000/month in subscription revenue, you&apos;re handing Substack $1,000/month &mdash; $12,000/year &mdash; for an email editor and a recommendation algorithm. beehiiv takes 0%. The math is simple. The migration is where it gets nuanced.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The 10% Revenue Cut Math ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The 10% Revenue Cut Math</h2>
          <p className="text-muted mb-4">
            Substack&apos;s model is clear: they take 10% of your paid newsletter revenue. Stripe takes an additional ~2.9% + 30 cents per transaction. Let&apos;s see what that actually costs at different revenue levels.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Revenue</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Substack Cut (10%)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stripe Fees (~3%)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">You Keep</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv Max Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv You Keep</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$500/mo</td>
                  <td className="px-4 py-2.5">$50</td>
                  <td className="px-4 py-2.5">~$15</td>
                  <td className="px-4 py-2.5">$435</td>
                  <td className="px-4 py-2.5">$99/mo + Stripe ~$15</td>
                  <td className="px-4 py-2.5">$386</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$1,000/mo</td>
                  <td className="px-4 py-2.5">$100</td>
                  <td className="px-4 py-2.5">~$30</td>
                  <td className="px-4 py-2.5">$870</td>
                  <td className="px-4 py-2.5">$99/mo + Stripe ~$30</td>
                  <td className="px-4 py-2.5">$871</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$2,500/mo</td>
                  <td className="px-4 py-2.5">$250</td>
                  <td className="px-4 py-2.5">~$75</td>
                  <td className="px-4 py-2.5">$2,175</td>
                  <td className="px-4 py-2.5">$99/mo + Stripe ~$75</td>
                  <td className="px-4 py-2.5 text-green-400">$2,326 (+$151)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$5,000/mo</td>
                  <td className="px-4 py-2.5">$500</td>
                  <td className="px-4 py-2.5">~$150</td>
                  <td className="px-4 py-2.5">$4,350</td>
                  <td className="px-4 py-2.5">$99/mo + Stripe ~$150</td>
                  <td className="px-4 py-2.5 text-green-400">$4,751 (+$401)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$10,000/mo</td>
                  <td className="px-4 py-2.5">$1,000</td>
                  <td className="px-4 py-2.5">~$300</td>
                  <td className="px-4 py-2.5">$8,700</td>
                  <td className="px-4 py-2.5">$99/mo + Stripe ~$300</td>
                  <td className="px-4 py-2.5 text-green-400">$9,601 (+$901)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The breakeven point is around $1,000/month in revenue.</strong> Below that, Substack&apos;s free platform costs less than beehiiv Max at $99/month. Above $1,000/month, every dollar of growth means more money going to Substack. At $5,000/month you&apos;re saving $400/month by switching. At $10,000/month, the savings hit $900/month &mdash; over $10,000/year.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The counterargument:</strong> Substack&apos;s 10% buys you their recommendation network, which sends you free subscribers. If the Substack network drives 20% of your subscriber growth, that 10% cut is essentially a customer acquisition cost. You need to calculate your actual growth attribution before deciding.
          </p>

          {/* ── What Substack Gives You That beehiiv Doesn't (and Vice Versa) ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Monetization Feature Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Substack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Paid subscriptions</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (10% cut)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (0% cut, Scale plan+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Platform revenue cut</td>
                  <td className="px-4 py-2.5 text-red-400">10%</td>
                  <td className="px-4 py-2.5 text-green-400">0%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Built-in discovery network</td>
                  <td className="px-4 py-2.5 text-green-400">Strong (Substack app, recommendations)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Growing (recommendation network + Boosts)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Ad network</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (beehiiv Ad Network)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Referral program</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Scale+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Boosts (paid cross-promotion)</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes &mdash; earn per subscriber</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Custom domain</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Podcast hosting</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (built-in)</td>
                  <td className="px-4 py-2.5 text-red-400">No (use external host)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Substack Notes / social feed</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email design flexibility</td>
                  <td className="px-4 py-2.5 text-yellow-400">Limited (intentionally simple)</td>
                  <td className="px-4 py-2.5 text-green-400">Full (drag-and-drop + custom HTML)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">A/B testing</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Scale+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Custom automations</td>
                  <td className="px-4 py-2.5 text-red-400">No (welcome email only)</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Scale+)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Content Export and Import ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Content Export and Import</h2>
          <p className="text-muted mb-4">
            Substack actually makes export easy &mdash; they deserve credit for this. Go to Settings &rarr; Exports &rarr; Create new export. You get a ZIP file containing:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-1">
            <li>A CSV of all subscribers (email, name, subscription type, active/inactive status)</li>
            <li>All posts as individual HTML files</li>
            <li>Images embedded in posts</li>
          </ul>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Importing subscribers into beehiiv:</strong> Upload the subscriber CSV to beehiiv (Settings &rarr; Subscribers &rarr; Import). Map the email column. Mark paid subscribers with a tag so you can set up their paid access in beehiiv. Do not enable double opt-in for imported subscribers.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Importing content:</strong> beehiiv does not have a one-click Substack content import. You have two options. Option A: manually copy/paste each post into beehiiv&apos;s editor. This works for small archives (under 50 posts) and takes 1&ndash;2 minutes per post. Option B: for larger archives, use beehiiv&apos;s API to programmatically import posts. This requires basic technical skill or a developer. Some creators use tools like Substack2beehiiv (community scripts) to automate this, but test thoroughly &mdash; formatting often breaks.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Images:</strong> Substack exports include images, but URLs point to Substack&apos;s CDN. If you cancel Substack, those image URLs may eventually break. Re-upload images to beehiiv or your own hosting. For a 100-post archive, budget 2&ndash;4 hours for this manual work.
          </p>

          {/* ── Custom Domain Setup ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Custom Domain Setup</h2>
          <p className="text-muted mb-4">
            If you were using a custom domain on Substack (yourname.com instead of yourname.substack.com), you need to redirect it to beehiiv. This is a DNS change &mdash; update the CNAME record to point to beehiiv instead of Substack. beehiiv provides the exact CNAME value in Settings &rarr; Publication &rarr; Custom Domain.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Critical timing:</strong> Change DNS after you&apos;ve imported all content and tested your beehiiv publication. Once DNS switches, your domain points to beehiiv. If beehiiv isn&apos;t ready, your domain leads to an empty publication. DNS propagation takes 15 minutes to 48 hours depending on your registrar and TTL settings.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">SEO consideration:</strong> If your Substack posts ranked in Google under your custom domain, you need URL parity on beehiiv. Substack uses /p/post-slug URL structure. beehiiv uses /p/post-slug by default. This is helpful &mdash; if your slug names match, Google should handle the transition without significant ranking loss. Verify this post-migration by checking Google Search Console for 404 errors.
          </p>

          {/* ── When Substack Is Actually Better ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">When Substack Is Actually Better</h2>
          <p className="text-muted mb-4">
            Here&apos;s the section no beehiiv migration guide includes. Substack is the better choice in specific scenarios, and switching despite these would be a mistake.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">You&apos;re under $1,000/month in paid subscriptions.</strong> Below this threshold, Substack&apos;s free platform costs less than beehiiv Scale ($39/mo) or Max ($99/mo). The 10% cut on $500/month is $50 &mdash; cheaper than beehiiv Max. If you&apos;re growing fast, switching early makes sense. If revenue is stable at $500&ndash;$800/month, stay on Substack until the math changes.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The Substack network drives significant growth.</strong> Substack&apos;s recommendation engine, the Substack app, Notes, and Substack Reads surface your newsletter to potential subscribers. If 20&ndash;40% of your new subscribers come through these Substack channels, the 10% cut is effectively a customer acquisition cost &mdash; and likely cheaper than what you&apos;d spend on paid growth elsewhere. Track your attribution before deciding.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">You use podcast hosting on Substack.</strong> Substack includes free podcast hosting with its platform. beehiiv doesn&apos;t have podcast hosting. You&apos;d need to move your podcast to a separate host (Spotify for Podcasters, Transistor, Buzzsprout) &mdash; an additional migration and potential cost.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">You value simplicity above all else.</strong> Substack&apos;s intentionally limited feature set means less decision fatigue. Write, publish, send. No automation builder, no referral program, no A/B testing to configure. If you just want to write and don&apos;t care about growth optimization, Substack&apos;s simplicity is a feature, not a limitation.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Community features matter to you.</strong> Substack&apos;s comment sections, chat threads, and Notes create a social layer around your newsletter. beehiiv has basic comments but nothing comparable to Substack&apos;s community features. If subscriber community interaction is part of your value proposition, Substack is stronger.
          </p>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes When Leaving Substack</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Not notifying paid subscribers about the switch.</strong> Paid subscribers will need to be migrated to a new payment system (beehiiv uses Stripe Connect). Some will need to re-enter payment info. Send advance notice 2 weeks before the switch. Some paid subscribers will churn during migration &mdash; expect 5&ndash;15% loss. Plan for it.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Expecting all subscribers to follow you.</strong> Some Substack subscribers found you through the Substack app and follow you there specifically. They may not open emails from beehiiv. Expect 10&ndash;20% lower engagement for the first few months as these platform-dependent subscribers drop off.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Not migrating the archive before switching DNS.</strong> If your custom domain starts pointing to beehiiv before your posts are imported, readers clicking links to old posts hit 404 errors. Import all content first, verify URLs, then switch DNS.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Ignoring image hosting.</strong> Substack-hosted images may break after you cancel. Re-host every image referenced in your archive. This is tedious but prevents broken posts months later.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Skipping sender warm-up.</strong> Even though your subscribers opted in on Substack, beehiiv sends from different servers. Warm up gradually: send to engaged subscribers first, then expand over 2&ndash;3 weeks. The same deliverability rules apply as any platform migration.
          </p>

          {/* ── Who Should NOT Switch ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Leave Substack</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Writers earning under $1,000/month from paid subscriptions.</strong> The math favors Substack below this threshold. beehiiv Max costs $99/month; Substack costs 10% of revenue. Below $1,000, Substack is cheaper.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Writers who depend on Substack discovery.</strong> If 30%+ of your growth comes from Substack recommendations and the Substack app, you&apos;re paying 10% for a growth channel. Calculate what that growth would cost you to replace with paid ads, SEO, or social media effort before leaving.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Non-technical writers who want zero operational overhead.</strong> beehiiv has more features than Substack. That means more settings, more decisions, and more things to configure. If you want to write and literally nothing else, Substack&apos;s constraints are your friend.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Writers who use Substack&apos;s community features heavily.</strong> If your paid subscribers engage through Substack comments, chat, and Notes, losing that community layer could devalue the subscription itself. Make sure your content alone justifies the paid subscription before removing the community features.
          </p>

          {/* ── The Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Verdict</h2>
          <p className="text-muted mb-4">
            Substack to beehiiv makes clear financial sense above $1,000/month in paid subscription revenue. The 10% savings accelerate as revenue grows, and beehiiv&apos;s growth tools (Boosts, referral programs, ad network) give you additional revenue streams Substack doesn&apos;t offer.
          </p>
          <p className="text-muted mb-4">
            Below $1,000/month, the decision is about control, not cost. beehiiv gives you more design flexibility, A/B testing, automations, and full ownership of your subscriber relationships. Substack gives you a discovery network and radical simplicity. The right answer depends on whether you want to optimize your newsletter as a business or keep it as a writing practice.
          </p>
          <p className="text-muted mb-4">
            The migration itself is moderate difficulty: subscriber import is easy, content import is manual but doable, and the main risk is paid subscriber churn during the payment migration. Budget 2&ndash;4 weeks and plan for 5&ndash;15% paid subscriber loss.
          </p>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/best-email-tool-creators"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Best Email Tool for Creators in 2026</span>
                <span className="block text-xs text-muted mt-1">beehiiv vs Kit vs Substack vs Ghost compared</span>
              </Link>
              <Link
                href="/guides/migrate-mailchimp-to-beehiiv"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Mailchimp to beehiiv Migration</span>
                <span className="block text-xs text-muted mt-1">The other common beehiiv migration path</span>
              </Link>
              <Link
                href="/guides/newsletter-stack"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Newsletter Stack Under $150/Month</span>
                <span className="block text-xs text-muted mt-1">Full stack guide for one-person creator businesses</span>
              </Link>
              <Link
                href="/guides/migrate-from-mailchimp"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Leave Mailchimp: Complete Guide</span>
                <span className="block text-xs text-muted mt-1">All Mailchimp migration paths compared</span>
              </Link>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["substack", "beehiiv"]}
          comparisons={["beehiiv-vs-substack"]}
          guides={["best-newsletter-paid-subscribers"]}
        />
      </article>
    </>
  );
}
