import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Migrate from Mailchimp to Kit (ConvertKit) Without Losing Subscribers",
  description:
    "Step-by-step migration guide from Mailchimp to Kit (ConvertKit). What transfers, what breaks, timeline estimates, and the mistakes that cost creators subscribers.",
};

export default function MigrateMailchimpToKit() {
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
              Migrate Mailchimp to Kit
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
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How to Migrate from Mailchimp to Kit (ConvertKit) Without Losing Subscribers
          </h1>
          <p className="text-lg text-muted">
            Kit &mdash; formerly ConvertKit &mdash; is the destination for creators leaving Mailchimp. The tag-based system is cleaner, the automation builder is more intuitive for course creators and digital product sellers, and the pricing is more predictable. But the migration has real traps. This guide walks through every step, with exact timelines and the mistakes that cost people subscribers.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Why Mailchimp-to-Kit Is the Most Common Creator Migration ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Why Mailchimp-to-Kit Is the Most Common Creator Migration</h2>
          <p className="text-muted mb-4">
            Mailchimp was built for small businesses sending promotional campaigns. Kit was built for creators selling knowledge products. That fundamental difference shows up everywhere: how subscribers are organized (lists vs. tags), how automations work (campaign-centric vs. subscriber-centric), and how commerce integrates (Mailchimp bolted on a store; Kit built commerce into the email layer).
          </p>
          <p className="text-muted mb-4">
            The typical trigger is cost-plus-frustration. Mailchimp Standard at 5,000 contacts runs ~$75/month. Kit Creator at 5,000 subscribers costs $79/month. The price difference is negligible &mdash; the real reason people switch is that Mailchimp&apos;s interface got bloated after the Intuit acquisition, and creators don&apos;t need CRM features, social posting, or website builders jammed into their email tool.
          </p>
          <p className="text-muted mb-4">
            Kit&apos;s tag-based architecture also eliminates Mailchimp&apos;s biggest headache: paying for the same subscriber on multiple lists. In Mailchimp, if someone is on your &ldquo;Newsletter&rdquo; list and your &ldquo;Product Launch&rdquo; list, you pay for them twice. Kit counts each unique email address once.
          </p>

          {/* ── The Real Cost Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Real Cost Comparison</h2>
          <p className="text-muted mb-4">
            Stop comparing sticker prices. Compare what you actually pay at your subscriber count, including the features you need.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Subscribers</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Standard</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Kit Creator</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Kit Creator Pro</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1,000</td>
                  <td className="px-4 py-2.5">$20/mo</td>
                  <td className="px-4 py-2.5">$29/mo</td>
                  <td className="px-4 py-2.5">$59/mo</td>
                  <td className="px-4 py-2.5 text-red-400">Kit costs $9&ndash;$39 more</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                  <td className="px-4 py-2.5">$75/mo</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                  <td className="px-4 py-2.5">$111/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">Roughly equal (Creator)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                  <td className="px-4 py-2.5">$110/mo</td>
                  <td className="px-4 py-2.5">$119/mo</td>
                  <td className="px-4 py-2.5">$167/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">Kit slightly more</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                  <td className="px-4 py-2.5">$270/mo</td>
                  <td className="px-4 py-2.5">$199/mo</td>
                  <td className="px-4 py-2.5">$279/mo</td>
                  <td className="px-4 py-2.5 text-green-400">Kit Creator saves $71/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                  <td className="px-4 py-2.5">$385/mo</td>
                  <td className="px-4 py-2.5">$379/mo</td>
                  <td className="px-4 py-2.5">$519/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">Near identical (Creator)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The hidden Mailchimp cost:</strong> These Mailchimp prices assume you&apos;ve cleaned your list. Mailchimp counts unsubscribed contacts, non-subscribed contacts, and cleaned contacts toward your total unless you manually archive them. A 5,000-contact list with 1,200 inactive addresses means you&apos;re paying for 6,200. Kit only counts active, opted-in subscribers.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit&apos;s free tier:</strong> Kit Newsletter (free plan) supports up to 10,000 subscribers with unlimited landing pages and forms. You lose automations, sequences, and integrations, but it&apos;s a legitimate free tier &mdash; far more generous than Mailchimp&apos;s removed free plan.
          </p>

          {/* ── What Transfers and What Doesn't ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What Transfers and What Doesn&apos;t</h2>
          <p className="text-muted mb-4">
            This is where most guides lie by omission. They say &ldquo;import your subscribers&rdquo; as if that&apos;s the whole story. Here&apos;s the complete picture.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Asset</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Transfers?</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Subscriber emails &amp; names</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5">Via Kit&apos;s Mailchimp migration tool or CSV</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Tags</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                  <td className="px-4 py-2.5">Mailchimp tags map to Kit tags. Groups become tags too.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Subscriber engagement data</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5">Open rates, click history, engagement scores reset to zero</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email templates</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5">Kit uses plain-text-first design; Mailchimp templates don&apos;t convert</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automations &amp; workflows</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5">Must rebuild manually. Document every workflow before switching.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Landing pages</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5">Recreate in Kit&apos;s landing page builder. Different design approach.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Campaign history &amp; reports</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5">Export reports as CSV from Mailchimp before canceling</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Signup forms &amp; embeds</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5">Every form on your site must be replaced with Kit embed code</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Integrations (Zapier, Shopify, etc.)</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5">Reconnect every integration. Test each one individually.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            The pattern is clear: subscriber data transfers, everything else gets rebuilt. If you have 2 automations and 1 landing page, that&apos;s a weekend project. If you have 15 automations, 8 landing pages, and deep Shopify integration, you&apos;re looking at 20&ndash;40 hours of work.
          </p>

          {/* ── Step-by-Step Migration Process ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step-by-Step Migration Process</h2>
          <p className="text-muted mb-4">
            Budget 2&ndash;3 weeks. Not because the import takes that long &mdash; the import itself takes 10 minutes. The rest is rebuilding, testing, and warming up your sender reputation.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3 text-foreground">Week 1: Preparation</h3>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 1&ndash;2: Clean your Mailchimp list.</strong> Go to Audience &rarr; Manage contacts &rarr; View contacts. Filter by &ldquo;Did not open&rdquo; in the last 12 months. Archive or unsubscribe these contacts. There&apos;s no reason to pay Kit for subscribers who haven&apos;t opened an email in a year. This step alone often reduces list size by 15&ndash;30%.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 2&ndash;3: Export everything.</strong> Go to Audience &rarr; All contacts &rarr; Export Audience. Download the CSV. Then export every email template you want to reference later (Email &rarr; Templates &rarr; Export HTML). Export campaign reports (Campaigns &rarr; select campaign &rarr; View Report &rarr; Download). Screenshot every automation workflow &mdash; you&apos;ll need the trigger conditions, delay times, and email content.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 3: Inventory every integration and form.</strong> Open a spreadsheet. List every place a Mailchimp form lives: your website header, footer, popup, blog sidebar, link-in-bio page, WordPress plugin, Shopify integration, Zapier connections, Gumroad post-purchase triggers. Miss one and you&apos;ll leak new subscribers into the old system.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 4&ndash;5: Set up your Kit account.</strong> Create your account. Set up your sending domain (Settings &rarr; Email &rarr; Add domain). Configure SPF, DKIM, and DMARC records. This requires DNS changes that can take up to 48 hours to propagate. Start this before you import subscribers.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3 text-foreground">Week 2: Migration and Rebuild</h3>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 6: Import subscribers.</strong> Kit offers two paths. Option A: use Kit&apos;s direct Mailchimp migration tool (Subscribers &rarr; Import &rarr; Mailchimp). Authorize the connection and Kit pulls subscribers, tags, and groups automatically. This is the easiest path. Option B: upload the CSV you exported. Map email, first name, last name, and any custom fields. Assign appropriate tags during import.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Critical: do not enable double opt-in for imported subscribers.</strong> These people already opted into your list. Forcing them to re-confirm will lose you 30&ndash;60% of your list. Kit lets you skip confirmation for imported contacts &mdash; make sure this is toggled correctly.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 7&ndash;8: Rebuild automations.</strong> Start with your welcome sequence &mdash; it&apos;s the most important and will be triggered immediately by new subscribers. In Kit, go to Automations &rarr; Visual Automations or Sequences. Kit&apos;s visual automation builder is more intuitive than Mailchimp&apos;s for linear sequences. For branching logic, use Kit&apos;s conditional steps based on tags, custom fields, or link clicks.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 9&ndash;10: Replace every form and integration.</strong> Swap Mailchimp embeds with Kit form code on your website. Update WordPress plugins (Kit has a native WordPress plugin). Reconnect Zapier automations. Update Shopify, Gumroad, Teachable, or whatever else was feeding subscribers to Mailchimp.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3 text-foreground">Week 3: Warm-Up and Verification</h3>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 11&ndash;12: Send a warm-up campaign.</strong> Do not blast your entire list on day one. Send your first Kit email only to subscribers who opened a Mailchimp email in the last 30 days. Tag these as &ldquo;engaged-30d&rdquo; before import to make this easy. This tells Gmail, Outlook, and Yahoo that your new sending domain/IP belongs to a legitimate sender.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 13&ndash;14: Expand to 90-day openers.</strong> Send your next email to the broader engaged segment. Monitor bounce rates and spam complaints in Kit&apos;s dashboard. If bounce rates stay below 2% and spam complaints below 0.1%, you&apos;re clear.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Day 15+: Send to full list.</strong> Now you can email everyone. Keep monitoring for the first month. Tag and remove anyone who bounces.
          </p>

          {/* ── Timeline and Effort Estimate ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Timeline and Effort Estimate</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Time</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Hours of Work</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Simple newsletter, &lt;5K subs, 1&ndash;2 automations</td>
                  <td className="px-4 py-2.5">1 week</td>
                  <td className="px-4 py-2.5">4&ndash;6 hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Creator with products, 5&ndash;25K subs, 5+ automations</td>
                  <td className="px-4 py-2.5">2&ndash;3 weeks</td>
                  <td className="px-4 py-2.5">12&ndash;20 hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Complex setup, e-commerce integrations, 25K+ subs</td>
                  <td className="px-4 py-2.5">3&ndash;4 weeks</td>
                  <td className="px-4 py-2.5">25&ndash;40 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            The calendar time is longer than the actual work because of DNS propagation and sender warm-up. You can&apos;t compress the warm-up period without risking deliverability.
          </p>

          {/* ── Common Migration Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Migration Mistakes</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mistake 1: Enabling double opt-in for imported subscribers.</strong> This is the number-one killer. You will lose 30&ndash;60% of your list if you force existing subscribers to re-confirm. Kit defaults to single opt-in for CSV imports, but verify this in your import settings. If you use the direct Mailchimp migration tool, it respects the original opt-in status.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mistake 2: Blasting the full list on day one.</strong> New sending domain + new IP + 25,000 emails = spam folder. Warm up gradually over 2&ndash;3 weeks. This feels slow. It protects your deliverability for months.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mistake 3: Forgetting to update embedded forms.</strong> Your old Mailchimp forms will keep working &mdash; collecting subscribers into your soon-to-be-canceled Mailchimp account. New signups vanish. Set a reminder to check every page where you have a form 48 hours after migration.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mistake 4: Not mapping Mailchimp lists to Kit tags.</strong> Mailchimp uses multiple lists. Kit uses one subscriber pool with tags. If you had a &ldquo;Newsletter&rdquo; list and a &ldquo;Course Buyers&rdquo; list, you need to import them with the right tags. Just dumping everything into Kit with no tags means you can&apos;t segment anymore.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mistake 5: Canceling Mailchimp before verifying everything works.</strong> Keep your Mailchimp account active (downgrade to the cheapest plan) for at least 30 days after migration. You&apos;ll need it if you forgot to export something, or if you discover a form still pointing to Mailchimp.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Mistake 6: Expecting Mailchimp-style templates in Kit.</strong> Kit&apos;s design philosophy is plain-text-first. Their email editor produces clean, simple emails &mdash; not the drag-and-drop visual layouts Mailchimp is known for. If heavily designed emails are core to your brand, Kit is the wrong destination. Consider beehiiv or staying on Mailchimp.
          </p>

          {/* ── When to NOT Switch to Kit ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Switch to Kit</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">E-commerce sellers with deep Shopify integration.</strong> Mailchimp&apos;s e-commerce features &mdash; abandoned cart, browse abandonment, product recommendations &mdash; are more mature than Kit&apos;s. Kit added Shopify integration but it&apos;s not as deep. If product email automation drives significant revenue, think carefully before switching.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brands that rely on heavily designed email templates.</strong> Kit&apos;s emails look like they come from a person, not a brand. That&apos;s intentional &mdash; personal emails get higher engagement. But if your brand requires multi-column layouts, product grids, and heavy visual design, Kit will frustrate you. Mailchimp, beehiiv, or ActiveCampaign are better for design-heavy emails.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Teams that need multi-user collaboration.</strong> Kit&apos;s team features are minimal compared to Mailchimp. If you have 3+ people managing email campaigns, Mailchimp&apos;s role-based access and approval workflows are significantly more developed.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Anyone under 1,000 subscribers with no cost pressure.</strong> At small list sizes, the cost difference between Mailchimp and Kit is $10&ndash;$30/month. If Mailchimp is working fine for you, the migration effort isn&apos;t worth it. Switch when you have a functional reason, not just because someone on Twitter told you Mailchimp is bad.
          </p>

          {/* ── The Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Verdict</h2>
          <p className="text-muted mb-4">
            Mailchimp to Kit is the right migration for solo creators and small teams who sell digital products, courses, or memberships. Kit&apos;s tag-based system is genuinely better for managing subscriber segments when you have multiple products and lead magnets. The commerce features (tip jars, paid newsletters, digital product sales) are built in rather than bolted on.
          </p>
          <p className="text-muted mb-4">
            It&apos;s the wrong migration if you need heavy visual email design, deep e-commerce automation, or multi-user collaboration. For those use cases, look at beehiiv (newsletter-first with growth tools), ActiveCampaign (automation powerhouse), or just stay on Mailchimp.
          </p>
          <p className="text-muted mb-4">
            The migration itself is straightforward &mdash; Kit&apos;s direct Mailchimp import tool handles the hard part. Budget 1&ndash;3 weeks depending on complexity, and don&apos;t skip the sender warm-up. The subscribers you lose to impatience on day one take months to recover.
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
                <span className="block text-xs text-muted mt-1">Compare all three migration paths: beehiiv, Kit, and Brevo</span>
              </Link>
              <Link
                href="/guides/best-email-tool-creators"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Best Email Tool for Creators in 2026</span>
                <span className="block text-xs text-muted mt-1">Head-to-head: beehiiv vs Kit vs Substack vs Ghost</span>
              </Link>
              <Link
                href="/guides/newsletter-stack"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">The Newsletter Stack Under $150/Month</span>
                <span className="block text-xs text-muted mt-1">Full stack guide for one-person creator businesses</span>
              </Link>
              <Link
                href="/guides/migrate-mailchimp-to-beehiiv"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Mailchimp to beehiiv Migration</span>
                <span className="block text-xs text-muted mt-1">The alternative path if Kit isn&apos;t right for you</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
