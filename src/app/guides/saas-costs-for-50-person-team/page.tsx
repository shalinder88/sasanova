import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Costs for a 50-Person Team: When Enterprise Plans Become Necessary",
  description:
    "Complete stack costs at 50 seats. Where enterprise plans become necessary, flat-rate tools win, and annual contracts matter. Exact verified prices.",
};

export default function SaaSCosts50PersonPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Costs for 50-Person Team</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Team Size Scaling
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Costs for a 50-Person Team: When Enterprise Plans Become Necessary
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            At 50 seats, your SaaS bill is a serious budget line. Slack Pro alone is $437.50/month.
            CRM ranges from $550 (Freshsales Growth) to $5,000+ (Salesforce Pro Suite). Enterprise
            features &mdash; SSO, audit logs, admin controls &mdash; shift from nice-to-have to
            compliance requirements. Flat-rate pricing becomes your best friend.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>22 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">CRM at 50 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per Seat</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">50 Seats/mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">$11/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$550</td>
                    <td className="px-4 py-2.5 text-muted">$6,600</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Lite</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$700</td>
                    <td className="px-4 py-2.5 text-muted">$8,400</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$890/mo flat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$890</td>
                    <td className="px-4 py-2.5 text-muted">$10,680</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zoho CRM</td>
                    <td className="px-4 py-2.5 text-muted">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$35/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$1,750</td>
                    <td className="px-4 py-2.5 text-muted">$21,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Pro Suite</td>
                    <td className="px-4 py-2.5 text-muted">$100/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$5,000</td>
                    <td className="px-4 py-2.5 text-muted">$60,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              <strong>Key insight:</strong> HubSpot Professional at $890/month flat is now
              $17.80/seat effective at 50 people &mdash; cheaper per seat than Zoho Professional.
              Flat-rate pricing wins at scale.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">PM + Communication at 50 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">50 Seats/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basecamp Pro</td>
                    <td className="px-4 py-2.5 text-muted">$349/mo flat (unlimited users)</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$349</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello Standard</td>
                    <td className="px-4 py-2.5 text-muted">$6/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$300</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$10/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$500</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                    <td className="px-4 py-2.5 text-muted">$12/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$600</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Slack Pro</td>
                    <td className="px-4 py-2.5 text-muted">$8.75/user</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$437.50</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Slack Business+</td>
                    <td className="px-4 py-2.5 text-muted">$15/user</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Enterprise Features That Become Required</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">SSO (Single Sign-On)</h3>
                <p className="text-muted text-sm leading-relaxed">
                  At 50 people, managing individual passwords becomes a security risk. SSO typically
                  requires enterprise tiers: Slack Business+ ($15/user), Notion Enterprise (custom),
                  ClickUp Enterprise (custom). This can double your bill for a single feature.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Audit Logs and Compliance</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Audit logs are gated behind Business+ or Enterprise tiers on almost every platform.
                  If your compliance requirements demand them, budget for enterprise pricing across
                  your entire stack.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">What&apos;s the total annual spend for 50 people?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Budget stack (Freshsales Growth + ClickUp Unlimited + Slack Pro + Brevo Standard + Make Core):
                  approximately $1,506/month or $18,072/year. Premium stack (HubSpot Professional + Notion Business +
                  Slack Business+ + ActiveCampaign Pro + Zapier Team): approximately $2,812/month or $33,744/year.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">When do flat-rate tools make sense?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Basecamp Pro ($349/mo unlimited) breaks even with per-seat alternatives at ~25 users.
                  HubSpot Professional ($890/mo flat) breaks even with HubSpot Starter per-seat at ~45 seats.
                  At 50 people, always evaluate flat-rate options first.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "saas-costs-for-25-person-team",
              "enterprise-pricing-trap",
              "salesforce-hidden-costs",
              "negotiate-saas-pricing",
            ]}
          />
        </div>
      </article>
    </>
  );
}
