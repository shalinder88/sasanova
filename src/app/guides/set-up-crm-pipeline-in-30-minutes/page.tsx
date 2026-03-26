import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Set Up a CRM Pipeline in 30 Minutes: Pipedrive or HubSpot",
  description:
    "Build a working CRM pipeline in 30 minutes using Pipedrive Lite ($14/seat) or HubSpot Free ($0). Pipeline stages, contact import, and email sync. Step by step.",
};

export default function SetUpCRMPipelinePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">CRM Pipeline in 30 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Practical Workflow
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Set Up a CRM Pipeline in 30 Minutes: Pipedrive or HubSpot
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            A CRM pipeline shouldn&apos;t take a week to configure. Whether you choose Pipedrive
            Lite ($14/seat/month) for its visual pipeline focus or HubSpot Free ($0) for its
            generous free tier, you can go from zero to a working pipeline in 30 minutes.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Choose Your CRM</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive Lite</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Free</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Price</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat/month</td>
                    <td className="px-4 py-2.5 text-muted">$0/month</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipelines</td>
                    <td className="px-4 py-2.5 text-muted">1 pipeline (Lite)</td>
                    <td className="px-4 py-2.5 text-muted">1 pipeline (Free)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Deals</td>
                    <td className="px-4 py-2.5 text-muted">3,000 deals</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email Sync</td>
                    <td className="px-4 py-2.5 text-muted">Requires Growth ($39/seat)</td>
                    <td className="px-4 py-2.5 text-muted">Yes (free)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Requires Growth ($39/seat)</td>
                    <td className="px-4 py-2.5 text-muted">Requires Starter ($20/seat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Best For</td>
                    <td className="px-4 py-2.5 text-muted">Sales-focused teams closing deals</td>
                    <td className="px-4 py-2.5 text-muted">General purpose, marketing + sales</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Step-by-Step: Pipeline Setup (30 Minutes)</h2>
            <div className="space-y-4">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 1&ndash;5: Account and Pipeline Stages</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Sign up for Pipedrive (14-day free trial, then $14/seat/mo) or HubSpot (free forever).
                  Set up 5 pipeline stages: New Lead, Contacted, Meeting Booked, Proposal Sent, Won/Lost.
                  Remove any default stages you don&apos;t need.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 5&ndash;15: Custom Fields and Properties</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Add custom fields for your business: deal value, source (referral, website, cold email),
                  expected close date, industry. Pipedrive Lite allows 30 custom fields. HubSpot Free
                  allows custom properties.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 15&ndash;25: Import Contacts</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Export your existing contacts to CSV. Both Pipedrive and HubSpot accept CSV imports.
                  Map columns to CRM fields. Start with your top 50 contacts &mdash; don&apos;t try to import
                  everything at once.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 25&ndash;30: Connect Email</h3>
                <p className="text-muted text-sm leading-relaxed">
                  HubSpot Free: connect Gmail or Outlook for email tracking and logging.
                  Pipedrive Lite: email sync requires Growth ($39/seat) &mdash; use the free email
                  tracking Chrome extension as a workaround.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Should I start with free or paid?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Start with HubSpot Free if you&apos;re unsure. It&apos;s genuinely free forever with unlimited
                  contacts. Switch to Pipedrive Lite ($14/seat) if you prefer a sales-focused UX
                  and don&apos;t need marketing features.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">How many pipeline stages do I need?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Start with 4&ndash;5 stages. More than 7 creates friction. Less than 3 loses visibility.
                  You can always add stages later as your sales process matures.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "pipedrive-setup-guide",
              "hubspot-crm-setup-guide",
              "set-up-lead-capture-in-30-minutes",
              "what-you-get-for-free-in-crm",
            ]}
          />
        </div>
      </article>
    </>
  );
}
