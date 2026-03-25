import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Leaving Mailchimp for beehiiv: The Complete Migration Playbook",
  description:
    "The complete playbook for migrating from Mailchimp to beehiiv. Export process, subscriber import, true cost comparison at 1K to 25K subscribers, and what you lose in the switch.",
};

export default function MigrateMailchimpToBeehiiv() {
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
              Migrate Mailchimp to beehiiv
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
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Leaving Mailchimp for beehiiv: The Complete Migration Playbook
          </h1>
          <p className="text-lg text-muted">
            Mailchimp charges by contacts. beehiiv charges by subscribers on reasonable tiers with growth tools baked in. If you run a newsletter &mdash; not an e-commerce store, not a SaaS marketing team &mdash; beehiiv is likely cheaper, faster to use, and better designed for how you actually work. Here&apos;s exactly how to make the switch without losing people or breaking things.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Why beehiiv Instead of Mailchimp ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Why beehiiv Instead of Mailchimp</h2>
          <p className="text-muted mb-4">
            Mailchimp was built for small business email marketing in 2001. beehiiv was built for newsletter operators in 2021. That 20-year gap shows up in every part of the product. beehiiv has built-in referral programs, recommendation networks, ad monetization (Ad Network), and subscriber analytics designed for content publishers. Mailchimp has none of these &mdash; it has CRM features, social media scheduling, and website building that newsletter creators don&apos;t use.
          </p>
          <p className="text-muted mb-4">
            The pricing model is the biggest practical difference. Mailchimp counts every contact &mdash; including unsubscribed, bounced, and inactive contacts unless you manually archive them. A creator with 10,000 &ldquo;contacts&rdquo; where only 6,000 are active subscribers is paying the 10,000-contact rate. beehiiv counts active subscribers only.
          </p>
          <p className="text-muted mb-4">
            beehiiv also gives you a free hosted website (yourbrand.beehiiv.com or your custom domain), SEO-indexed archives, and a built-in recommendation exchange that drives subscriber growth. Mailchimp can&apos;t match any of this without third-party tools.
          </p>

          {/* ── True Cost Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">True Cost Comparison at Every Scale</h2>
          <p className="text-muted mb-4">
            This is the table Mailchimp doesn&apos;t want you to see. Prices are for monthly billing as of March 2026.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Standard</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1,000</td>
                  <td className="px-4 py-2.5">$20/mo</td>
                  <td className="px-4 py-2.5">Launch (free)</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                  <td className="px-4 py-2.5 text-green-400">$240/yr saved</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">2,500</td>
                  <td className="px-4 py-2.5">$45/mo</td>
                  <td className="px-4 py-2.5">Launch (free)</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                  <td className="px-4 py-2.5 text-green-400">$540/yr saved</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                  <td className="px-4 py-2.5">$75/mo</td>
                  <td className="px-4 py-2.5">Scale</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                  <td className="px-4 py-2.5 text-green-400">$432/yr saved</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                  <td className="px-4 py-2.5">$110/mo</td>
                  <td className="px-4 py-2.5">Scale</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                  <td className="px-4 py-2.5 text-green-400">$852/yr saved</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                  <td className="px-4 py-2.5">$270/mo</td>
                  <td className="px-4 py-2.5">Max</td>
                  <td className="px-4 py-2.5">$99/mo</td>
                  <td className="px-4 py-2.5 text-green-400">$2,052/yr saved</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                  <td className="px-4 py-2.5">$385/mo</td>
                  <td className="px-4 py-2.5">Max</td>
                  <td className="px-4 py-2.5">$99/mo</td>
                  <td className="px-4 py-2.5 text-green-400">$3,432/yr saved</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The numbers don&apos;t lie at scale.</strong> At 25,000 subscribers, beehiiv saves you over $2,000/year compared to Mailchimp Standard. At 50,000, the gap is nearly $3,500/year. And beehiiv Max includes features Mailchimp charges extra for: custom HTML emails, priority support, and advanced automations.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">But the free tier is the real killer.</strong> beehiiv Launch supports up to 2,500 subscribers at $0. Mailchimp eliminated its free tier for new users. If you have under 2,500 subscribers, beehiiv is literally free and Mailchimp costs $20&ndash;$45/month. That&apos;s the clearest switching trigger in email marketing.
          </p>

          {/* ── Revenue and Monetization Differences ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Revenue and Monetization Differences</h2>
          <p className="text-muted mb-4">
            This is where beehiiv pulls away from Mailchimp for newsletter creators. Mailchimp is a sending tool. beehiiv is a newsletter business platform.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monetization Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Paid subscriptions</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Scale plan+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Built-in ad network</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (beehiiv Ad Network)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Referral program</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (Scale plan+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Boosts (paid recommendations)</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes &mdash; earn money per subscriber</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Recommendation network</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes &mdash; cross-promote with other newsletters</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">E-commerce integration</td>
                  <td className="px-4 py-2.5 text-green-400">Deep (Shopify, WooCommerce)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Basic (via Zapier)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            beehiiv Boosts alone can generate meaningful revenue. You get paid when other newsletters recommend yours and new subscribers sign up through the recommendation. Rates vary ($1&ndash;$5 per subscriber depending on niche), but a newsletter with 10,000 subscribers can earn $500&ndash;$2,000/month from Boosts alone &mdash; more than covering the platform cost.
          </p>

          {/* ── The Export Process ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Export Process: What to Take From Mailchimp</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Step 1: Clean first.</strong> In Mailchimp, go to Audience &rarr; Manage contacts &rarr; View contacts. Filter for contacts who never opened in the last 12 months. Archive or unsubscribe them. This reduces your list size (lowering beehiiv costs) and improves deliverability when you warm up your new sender.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Step 2: Export subscribers.</strong> Audience &rarr; All contacts &rarr; Export Audience. Download the CSV. It includes email addresses, first/last names, tags, groups, signup date, and subscription status. Only import active, subscribed contacts into beehiiv.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Step 3: Export campaign reports.</strong> Go to Campaigns, select each campaign, and download the report. Mailchimp will not retain your data after you cancel. If you want historical open/click rates, get them now.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Step 4: Screenshot automations.</strong> Open every automation workflow. Document the trigger (what starts it), the sequence of emails, the delay between each, and any conditional branching. Screenshot or write it down. beehiiv&apos;s automation builder is different; you&apos;ll rebuild these from scratch.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Step 5: Export templates.</strong> Go to Email &rarr; Templates and export the HTML of any template you want to reference. beehiiv&apos;s email editor is different from Mailchimp&apos;s, so you won&apos;t import templates directly, but having the HTML lets you replicate the design.
          </p>

          {/* ── Import Into beehiiv ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Importing Into beehiiv</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Create your beehiiv account</strong> and set up your publication first. Choose your custom domain (Settings &rarr; Publication &rarr; Custom Domain) and configure DNS. This requires CNAME records and can take up to 48 hours to propagate. Start here.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Import subscribers:</strong> Go to Settings &rarr; Subscribers &rarr; Import. Upload your Mailchimp CSV. Map columns: email (required), first name, last name, and any custom fields. Assign tags during import. beehiiv auto-deduplicates, so don&apos;t worry about overlaps.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Do not enable double opt-in for imported contacts.</strong> These subscribers already opted in on Mailchimp. Forcing re-confirmation will cost you 30&ndash;60% of your list. beehiiv lets you skip confirmation for imports &mdash; make sure this setting is correct.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Tag imported subscribers</strong> with something like &ldquo;mailchimp-migration&rdquo; so you can track their engagement separately from organic beehiiv signups. This helps you measure deliverability during warm-up.
          </p>

          {/* ── What You Lose ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What You Lose in the Switch</h2>
          <p className="text-muted mb-4">
            Every migration has costs. Here&apos;s what goes away and how much it matters.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mailchimp templates.</strong> beehiiv&apos;s email editor is more modern but different. You can build visually rich emails in beehiiv, but Mailchimp&apos;s drag-and-drop template library is larger. If you have heavily branded templates, budget 2&ndash;4 hours to recreate them.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Complex automation branching.</strong> Mailchimp&apos;s automation builder supports complex conditional logic: if subscriber clicked link X and has tag Y, send email Z. beehiiv&apos;s automations are powerful for sequences and basic triggers but don&apos;t match Mailchimp&apos;s branching depth. If you run 10+ branching automations, this is a real downgrade.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">E-commerce integrations.</strong> Mailchimp connects directly to Shopify, WooCommerce, BigCommerce, and other platforms for abandoned cart, product recommendations, and purchase-triggered emails. beehiiv doesn&apos;t have native e-commerce integrations &mdash; you&apos;d need Zapier or custom webhooks. For newsletter creators, this doesn&apos;t matter. For e-commerce businesses, it&apos;s a dealbreaker.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Campaign history.</strong> Your open rates, click rates, and historical performance data stay in Mailchimp. Export reports before canceling. beehiiv analytics start fresh from the day you send your first email.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Subscriber engagement scores.</strong> Mailchimp tracks engagement over time. beehiiv resets this to zero. Your new platform won&apos;t know who your superfans are until they engage with beehiiv emails.
          </p>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Migration Mistakes</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Importing dirty lists.</strong> Don&apos;t move 15,000 contacts when only 8,000 are active subscribers. Dirty imports hurt deliverability and inflate your beehiiv plan cost. Clean in Mailchimp first, then export only active subscribers.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Sending to everyone on day one.</strong> Warm up your beehiiv sender reputation over 2&ndash;3 weeks. Week 1: send only to subscribers who opened in the last 30 days. Week 2: expand to 90-day openers. Week 3: full list. Skip this and your first emails land in spam.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Not replacing embedded forms.</strong> Every Mailchimp form on your website, landing page, and link-in-bio is still collecting subscribers into Mailchimp after you move. Replace all of them with beehiiv embed code before you send your first beehiiv email.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Skipping DNS configuration.</strong> Set up SPF, DKIM, and DMARC for your custom domain on beehiiv. Without this, inbox providers flag your emails as suspicious. beehiiv&apos;s onboarding walks you through it, but many people skip steps and wonder why deliverability is poor.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Canceling Mailchimp immediately.</strong> Keep Mailchimp active (downgrade to the cheapest plan) for 30 days post-migration. You&apos;ll need it if you discover a missed form, a broken integration, or need to re-export data.
          </p>

          {/* ── Who Should NOT Switch ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Switch to beehiiv</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">E-commerce businesses.</strong> If abandoned cart emails, product recommendation sequences, and Shopify/WooCommerce integration drive revenue, stay on Mailchimp or switch to ActiveCampaign. beehiiv is a newsletter platform, not an e-commerce marketing tool.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Agencies managing multiple clients.</strong> beehiiv doesn&apos;t support multi-account management or white-labeling. Each publication is a separate account. If you manage 10 client newsletters, you need 10 beehiiv accounts with 10 logins. That&apos;s unworkable for agencies.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Teams that need complex conditional automations.</strong> beehiiv&apos;s automation builder handles sequences and basic triggers well. If you need &ldquo;if subscriber opened email A but not B, and has purchased product C, then send email D after 3 days unless they clicked link E&rdquo; &mdash; you need ActiveCampaign or Mailchimp.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Senders under 500 subscribers who are happy with Mailchimp.</strong> The migration effort isn&apos;t worth it if your list is tiny and Mailchimp works fine. Wait until you have a specific reason: cost pressure, need for growth tools, or frustration with the Mailchimp interface.
          </p>

          {/* ── The Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Verdict</h2>
          <p className="text-muted mb-4">
            Mailchimp to beehiiv is the clearest upgrade path for newsletter creators. The cost savings are substantial at every tier (especially above 5,000 subscribers), the growth tools are built in rather than bolted on, and the product is designed for the one thing you actually do: write and send a newsletter.
          </p>
          <p className="text-muted mb-4">
            The migration takes 1&ndash;3 weeks depending on how many automations and integrations you have. The subscriber import itself is painless. The work is in rebuilding automations, replacing forms, and warming up your sender reputation. Don&apos;t rush the warm-up.
          </p>
          <p className="text-muted mb-4">
            If you sell physical products, run an e-commerce store, or need enterprise-grade automation branching, beehiiv is the wrong tool. For everyone else writing newsletters, it&apos;s a straightforward upgrade.
          </p>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/migrate-from-mailchimp"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Leave Mailchimp: The Complete Guide</span>
                <span className="block text-xs text-muted mt-1">All migration paths compared: beehiiv, Kit, and Brevo</span>
              </Link>
              <Link
                href="/guides/migrate-substack-to-beehiiv"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Substack to beehiiv Migration</span>
                <span className="block text-xs text-muted mt-1">The other common beehiiv migration path</span>
              </Link>
              <Link
                href="/guides/migrate-mailchimp-to-kit"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Mailchimp to Kit Migration</span>
                <span className="block text-xs text-muted mt-1">The alternative if beehiiv isn&apos;t right for you</span>
              </Link>
              <Link
                href="/guides/best-email-tool-creators"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Best Email Tool for Creators</span>
                <span className="block text-xs text-muted mt-1">Full comparison: beehiiv vs Kit vs Substack vs Ghost</span>
              </Link>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["mailchimp", "beehiiv"]}
          comparisons={["mailchimp-vs-beehiiv"]}
          guides={["mailchimp-hidden-costs", "best-email-tool-creators"]}
        />
      </article>
    </>
  );
}
