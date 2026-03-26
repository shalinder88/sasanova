import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "What You Get for Free in CRM: Every Free Tier Mapped",
  description:
    "HubSpot Free vs Zoho Free vs Freshsales Free vs Attio Free: exact features, exact limits, what's walled off behind paid plans. Verified March 2026.",
};

export default function FreeInCRMPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Free CRM Tiers</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Feature Availability
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            What You Get for Free in CRM: Every Free Tier Mapped
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Four CRM platforms offer genuine free tiers &mdash; not trials, not 14-day demos.
            But each walls off different features behind paid plans. This guide maps exactly
            what you get at $0 and what each vendor holds back to nudge you toward paying.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Free Tier Comparison Table</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zoho CRM Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Freshsales Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Attio Free</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Contacts</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">5,000 records</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">50,000 records</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Users</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited (5 with full features)</td>
                    <td className="px-4 py-2.5 text-muted">3 users</td>
                    <td className="px-4 py-2.5 text-muted">3 users</td>
                    <td className="px-4 py-2.5 text-muted">3 seats</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Deal Pipeline</td>
                    <td className="px-4 py-2.5 text-muted">1 pipeline</td>
                    <td className="px-4 py-2.5 text-muted">1 pipeline</td>
                    <td className="px-4 py-2.5 text-muted">1 pipeline</td>
                    <td className="px-4 py-2.5 text-muted">Yes (core CRM)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email Marketing</td>
                    <td className="px-4 py-2.5 text-muted">2,000 sends/mo, HubSpot branding</td>
                    <td className="px-4 py-2.5 text-muted">Not included</td>
                    <td className="px-4 py-2.5 text-muted">Built-in email</td>
                    <td className="px-4 py-2.5 text-muted">Email integration</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">None (requires Starter $20/seat)</td>
                    <td className="px-4 py-2.5 text-muted">5 workflow rules</td>
                    <td className="px-4 py-2.5 text-muted">None (requires Growth $11/seat)</td>
                    <td className="px-4 py-2.5 text-muted">None (requires Plus $34/seat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Built-in Phone</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">Yes (built-in chat/email/phone)</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Reporting</td>
                    <td className="px-4 py-2.5 text-muted">Basic dashboards</td>
                    <td className="px-4 py-2.5 text-muted">Standard reports</td>
                    <td className="px-4 py-2.5 text-muted">Basic reports</td>
                    <td className="px-4 py-2.5 text-muted">Basic reporting</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">First Paid Tier</td>
                    <td className="px-4 py-2.5 text-muted">Starter $20/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Standard $20/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Growth $11/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Plus $34/seat/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">What Each Free Tier Walls Off</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">HubSpot Free</h3>
                <p className="text-muted text-sm leading-relaxed">
                  <strong>Walled off:</strong> Automation, remove branding, custom reporting, multiple pipelines,
                  email health reporting. The jump to Starter ($20/seat) is manageable. The jump to
                  Professional ($890/mo flat) is where it gets expensive &mdash; that&apos;s a 4,350% increase.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Zoho CRM Free</h3>
                <p className="text-muted text-sm leading-relaxed">
                  <strong>Walled off:</strong> More than 3 users, more than 5,000 records, scoring rules,
                  custom dashboards. Standard tier at $20/seat adds 100K records and custom dashboards.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Freshsales Free</h3>
                <p className="text-muted text-sm leading-relaxed">
                  <strong>Walled off:</strong> AI contact scoring, sequences, visual pipeline customization.
                  Growth at $11/seat is the cheapest paid CRM upgrade &mdash; and includes AI scoring.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Attio Free</h3>
                <p className="text-muted text-sm leading-relaxed">
                  <strong>Walled off:</strong> Unlimited records, advanced reporting, automations, API access.
                  Plus at $34/seat is the most expensive first paid tier among free CRMs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Which free CRM is best for solo founders?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  HubSpot Free if you want the broadest feature set and unlimited contacts.
                  Freshsales Free if you want built-in phone and chat. Attio Free if you want
                  automatic contact enrichment from email.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Which free CRM lasts longest before needing to upgrade?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  HubSpot Free &mdash; unlimited contacts and unlimited users means you can run it
                  indefinitely if you don&apos;t need automation or custom reporting.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "best-free-crm-2026",
              "when-free-crm-costs-more",
              "what-you-get-for-free-in-email",
              "set-up-crm-pipeline-in-30-minutes",
            ]}
          />
        </div>
      </article>
    </>
  );
}
