import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Platform Migration Checklist: 12 Steps for Zero Subscriber Loss",
  description:
    "12-step email platform migration checklist: export, clean, import, domain verification, warmup, and test send. Tool-specific for Mailchimp, Kit, and beehiiv.",
};

export default function EmailPlatformMigrationChecklistPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Email Platform Migration Checklist</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Checklist
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Platform Migration Checklist: 12 Steps for Zero Subscriber Loss
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Moving email platforms is nerve-wracking. Your subscriber list is your most
            valuable marketing asset. This 12-step checklist ensures zero subscriber loss,
            no deliverability tanking, and a clean transition between Mailchimp, Kit, beehiiv,
            ActiveCampaign, or Brevo.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Why Migrate? The Cost Math</h2>
            <p className="text-muted leading-relaxed mb-4">
              Mailchimp Standard at 5,000 contacts costs $75/month ($900/year). beehiiv Scale
              at unlimited subscribers costs $49/month ($588/year). Kit Creator at 1,000
              subscribers costs $39/month ($468/year). Brevo Standard at 5,000 emails/month is
              $18/month ($216/year). The savings justify the migration effort for most teams.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The 12-Step Migration Checklist</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Export your complete subscriber list.</p>
                  <p className="text-muted text-sm mt-1"><strong>Mailchimp:</strong> Audience &gt; All contacts &gt; Export Audience (CSV). Includes tags, merge fields, subscription status. <strong>Kit:</strong> Subscribers &gt; Export CSV. Includes tags and custom fields. <strong>Substack:</strong> Settings &gt; Exports &gt; Export email list.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Clean your list before importing.</p>
                  <p className="text-muted text-sm mt-1">Remove bounced emails, unsubscribes, and spam complaints. Mailchimp infamously counts unsubscribed contacts toward your bill. beehiiv and Kit do not &mdash; but importing dirty data to any platform hurts deliverability from day one.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">3.</span>
                <div>
                  <p className="text-foreground font-medium">Set up your new platform account and pick your plan.</p>
                  <p className="text-muted text-sm mt-1">beehiiv Launch: free for 2,500 subscribers. Kit Newsletter: free for 10,000 subscribers. Brevo Free: 300 emails/day, unlimited contacts. ActiveCampaign Starter: $15/month for 1,000 contacts. Start on the free tier if possible and upgrade later.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">4.</span>
                <div>
                  <p className="text-foreground font-medium">Connect and verify your custom domain.</p>
                  <p className="text-muted text-sm mt-1">Add SPF, DKIM, and DMARC records for your sending domain. Every platform requires this for optimal deliverability. Allow 24&ndash;48 hours for DNS propagation. Do not send any emails until domain verification is complete.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">5.</span>
                <div>
                  <p className="text-foreground font-medium">Import subscribers to the new platform.</p>
                  <p className="text-muted text-sm mt-1">Upload your cleaned CSV. Map fields carefully: first name, last name, email, tags, and custom fields. beehiiv and Kit both support tag imports. ActiveCampaign supports list-based import with automation triggers.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">6.</span>
                <div>
                  <p className="text-foreground font-medium">Verify subscriber count matches.</p>
                  <p className="text-muted text-sm mt-1">Compare imported count to your export count minus cleaned records. Any discrepancy means records were rejected (usually duplicate emails or invalid formats). Check import logs for errors.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">7.</span>
                <div>
                  <p className="text-foreground font-medium">Rebuild your automation sequences.</p>
                  <p className="text-muted text-sm mt-1">Welcome sequences, nurture flows, and drip campaigns don&apos;t transfer between platforms. Screenshot your existing automations in Mailchimp or Kit before cancelling. Rebuild the highest-revenue ones first on the new platform.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">8.</span>
                <div>
                  <p className="text-foreground font-medium">Warm up your new sending domain.</p>
                  <p className="text-muted text-sm mt-1">Do not blast your entire list on day one. Send to your most engaged subscribers first (50&ndash;100 openers), then gradually increase volume over 2 weeks. Most deliverability issues come from skipping warmup. beehiiv and Kit handle warmup automatically for small lists.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">9.</span>
                <div>
                  <p className="text-foreground font-medium">Update all signup forms, landing pages, and embedded forms.</p>
                  <p className="text-muted text-sm mt-1">Every form on your website, in your footer, on your landing pages, and in popups needs to point to the new platform. Mailchimp embed codes won&apos;t work with beehiiv. Replace them all before going live.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">10.</span>
                <div>
                  <p className="text-foreground font-medium">Send a test email to yourself and 2&ndash;3 team members.</p>
                  <p className="text-muted text-sm mt-1">Check: subject line, preview text, from name, reply-to address, links, images, unsubscribe link. Test on Gmail, Outlook, and Apple Mail. Check spam folders. Do not skip this step.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">11.</span>
                <div>
                  <p className="text-foreground font-medium">Send your first real email from the new platform.</p>
                  <p className="text-muted text-sm mt-1">Start with your most engaged segment (subscribers who opened in the last 30 days). Monitor open rates and bounce rates closely. If open rates drop below 15% or bounce rates exceed 3%, pause and investigate.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">12.</span>
                <div>
                  <p className="text-foreground font-medium">Cancel the old platform after 2 weeks of stable sends.</p>
                  <p className="text-muted text-sm mt-1">Keep the old platform active for 2 weeks as a safety net. If deliverability tanks on the new platform, you can fall back. After 2 stable weeks, cancel and save. Download a final full export from the old platform before cancelling.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Platform-Specific Notes</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price (Paid Entry)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Export Quality</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Gotcha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">Essentials $13/mo</td>
                    <td className="px-4 py-2.5 text-muted">Good CSV export</td>
                    <td className="px-4 py-2.5 text-muted">Counts unsubscribes toward billing</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit</td>
                    <td className="px-4 py-2.5 text-muted">Creator $39/mo</td>
                    <td className="px-4 py-2.5 text-muted">Good CSV with tags</td>
                    <td className="px-4 py-2.5 text-muted">Free tier walls off automations</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">Scale $49/mo</td>
                    <td className="px-4 py-2.5 text-muted">CSV export available</td>
                    <td className="px-4 py-2.5 text-muted">No visual automation builder</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td>
                    <td className="px-4 py-2.5 text-muted">Starter $15/mo</td>
                    <td className="px-4 py-2.5 text-muted">Good CSV export</td>
                    <td className="px-4 py-2.5 text-muted">No free tier at all</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                    <td className="px-4 py-2.5 text-muted">Starter $9/mo</td>
                    <td className="px-4 py-2.5 text-muted">CSV export</td>
                    <td className="px-4 py-2.5 text-muted">Free tier limited to 300 emails/day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Will I lose subscribers during migration?</h3>
                <p className="text-muted">Not if you follow the checklist. The #1 cause of subscriber loss is importing a dirty list (bounced/invalid emails) that triggers the new platform&apos;s spam protection. Clean your list in Step 2 and you&apos;ll import 100% of valid subscribers.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long does email migration take?</h3>
                <p className="text-muted">The actual migration takes 2&ndash;4 hours. Domain warmup takes 1&ndash;2 weeks. Total timeline from start to old-platform cancellation: 2&ndash;3 weeks.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate Mailchimp automations to beehiiv?</h3>
                <p className="text-muted">No. Automations never transfer between platforms. beehiiv Scale ($49/month) has basic automation sequences, but not the visual builder Mailchimp or Kit offer. Screenshot and rebuild manually.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "activecampaign", "brevo"]}
            comparisons={["mailchimp-vs-beehiiv", "mailchimp-vs-convertkit", "beehiiv-vs-convertkit"]}
            guides={[
              "migrate-from-mailchimp",
              "migrate-mailchimp-to-kit",
              "migrate-mailchimp-to-beehiiv",
              "email-list-health-guide",
            ]}
          />
        </div>
      </article>
    </>
  );
}
