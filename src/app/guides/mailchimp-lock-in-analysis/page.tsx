import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Mailchimp Lock-In Analysis: Contact Export, Template Loss, and Automation Rebuild Time",
  description:
    "Complete Mailchimp vendor lock-in analysis. What data exports cleanly, template and automation losses, rebuild timeline, and exact alternative pricing for beehiiv, Kit, and Brevo.",
};

export default function MailchimpLockInAnalysisPage() {
  return (
    <>
      {/* Breadcrumb */}
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
              Mailchimp Lock-In Analysis
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Vendor Lock-In Analysis
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Mailchimp Lock-In Analysis: Contact Export, Template Loss, and Automation Rebuild
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Mailchimp&apos;s pricing keeps rising, but switching feels painful. This guide
            details exactly what data you keep, what you lose, how long rebuilding takes,
            and what the alternatives cost at every list size.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* What Exports */}
          <section>
            <h2 className="text-xl font-bold mb-3">What You Can Export From Mailchimp</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Data</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Export Method</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Subscribers (email, name, tags)</td>
                    <td className="px-4 py-2.5 text-muted">CSV export</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Full export</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Subscriber activity</td>
                    <td className="px-4 py-2.5 text-muted">API only (limited)</td>
                    <td className="px-4 py-2.5 text-yellow-600 font-semibold">Partial</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Campaign history</td>
                    <td className="px-4 py-2.5 text-muted">CSV export (stats only)</td>
                    <td className="px-4 py-2.5 text-yellow-600 font-semibold">Stats only, no content</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email templates</td>
                    <td className="px-4 py-2.5 text-muted">HTML export (manual)</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Rebuild needed</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation workflows (Customer Journeys)</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Must rebuild</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Landing pages</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Lost</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Signup forms</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Rebuild needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Lock-In Points */}
          <section>
            <h2 className="text-xl font-bold mb-3">What Actually Locks You In</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Customer Journey Automations</p>
                <p className="text-sm text-muted">
                  Mailchimp&apos;s Customer Journey builder stores complex email sequences with
                  conditional logic. None of this exports. A welcome series with 5 emails, 3
                  branch points, and time delays takes 4&ndash;8 hours to rebuild per sequence.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Email Template Designs</p>
                <p className="text-sm text-muted">
                  Mailchimp templates use proprietary markup. You can copy the HTML, but it won&apos;t
                  render correctly in other platforms. Each template needs to be redesigned in the
                  new platform&apos;s editor. Budget 1&ndash;2 hours per template.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Embedded Forms and Integrations</p>
                <p className="text-sm text-muted">
                  Mailchimp signup forms embedded on your website stop working when you cancel.
                  Every form needs to be replaced with the new platform&apos;s forms. If you
                  have forms on 10+ pages, this adds significant migration work.
                </p>
              </div>
            </div>
          </section>

          {/* Alternative Pricing */}
          <section>
            <h2 className="text-xl font-bold mb-3">Alternative Platform Pricing</h2>
            <p className="text-muted leading-relaxed mb-4">
              Mailchimp Standard costs $20/mo at 500 contacts and scales steeply. Here&apos;s
              what alternatives cost for the same functionality:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Alternative</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                    <td className="px-4 py-2.5 text-muted">Scale</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo (unlimited subscribers)</td>
                    <td className="px-4 py-2.5 text-muted">No per-subscriber pricing</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit) Creator</td>
                    <td className="px-4 py-2.5 text-muted">Creator</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo (1K subscribers)</td>
                    <td className="px-4 py-2.5 text-muted">Simple automations, creator-focused</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo Standard</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo (5K emails/mo)</td>
                    <td className="px-4 py-2.5 text-muted">Pay by sends, not contacts</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign Starter</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo (1K contacts)</td>
                    <td className="px-4 py-2.5 text-muted">Powerful automation builder</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Rebuild Timeline */}
          <section>
            <h2 className="text-xl font-bold mb-3">Realistic Migration Timeline</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Task</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Time Estimate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Export and clean subscriber list</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;3 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Import to new platform</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Rebuild email templates (per template)</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 hours each</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Rebuild automation sequences</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;8 hours per sequence</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Replace embedded forms</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;6 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">DNS/authentication setup (SPF, DKIM)</td>
                    <td className="px-4 py-2.5 text-muted">30&ndash;60 minutes</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Deliverability warm-up period</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;4 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Total estimated timeline</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">2&ndash;4 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Will I lose subscribers when switching from Mailchimp?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  No. Your subscriber list exports cleanly as CSV with email, name, tags, and
                  custom fields. Subscriber data is the easiest part to migrate. What you lose
                  is engagement history (open/click data) and automation sequences.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Does Mailchimp charge unsubscribed contacts?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Mailchimp counts unsubscribed and non-subscribed contacts toward your billing
                  total unless you manually archive them. This contact counting trap inflates
                  bills by 20&ndash;40% for many users. Platforms like Brevo only charge by emails
                  sent, avoiding this entirely.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What about deliverability during migration?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  New platforms require a warm-up period (2&ndash;4 weeks of gradually increasing
                  send volume) to build sender reputation. During this time, send your most engaged
                  subscribers first. Some platforms (beehiiv, Kit) handle warm-up automatically.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["mailchimp", "beehiiv", "brevo"]}
            guides={["migrate-from-mailchimp", "when-mailchimp-becomes-expensive", "who-should-not-use-mailchimp"]}
          />
        </div>
      </article>
    </>
  );
}
