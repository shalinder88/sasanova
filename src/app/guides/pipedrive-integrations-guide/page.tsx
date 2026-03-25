import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Pipedrive Integrations: Building Your Sales Stack",
  description:
    "Pipedrive Lite ($14/seat) has basic email sync. Growth ($39/seat) unlocks automation. Here's what connects natively, what needs the marketplace, and what requires Zapier ($29.99/mo) or Make ($10.59/mo).",
};

export default function PipedriveIntegrationsGuide() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Pipedrive Integrations Guide</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Integration Guide</span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Pipedrive Integrations: Building Your Sales Stack
          </h1>
          <p className="text-lg text-muted">
            Pipedrive is a focused CRM &mdash; it does deals and pipeline well, but it&apos;s not an all-in-one platform like HubSpot. That means integrations are critical. Here&apos;s what&apos;s native, what needs the Pipedrive Marketplace, and what requires Zapier ($29.99/mo) or Make ($10.59/mo).
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Tier-Based Integration Access ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What Unlocks at Each Tier</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li><strong className="text-foreground">Lite ($14/seat/mo):</strong> Basic email sync, Google/Microsoft calendar sync, Slack. Limited marketplace apps.</li>
              <li><strong className="text-foreground">Growth ($39/seat/mo):</strong> Full email sync, automation triggers, Scheduler, Web Forms, group emailing. Full marketplace access.</li>
              <li><strong className="text-foreground">Premium ($49/seat/mo):</strong> Advanced reporting, revenue forecasts, e-signatures, Projects add-on.</li>
              <li><strong className="text-foreground">Ultimate ($99/seat/mo):</strong> Unlimited everything, security alerts, implementation support.</li>
            </ul>
          </div>

          {/* ── Email ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email: Gmail and Outlook</h2>
          <p className="text-muted mb-4">
            Pipedrive Lite ($14/seat/mo) includes basic email sync &mdash; it logs sent/received emails to contacts. But <strong className="text-foreground">full two-way email sync</strong> (send from Pipedrive, email templates, tracking) requires Growth ($39/seat/mo). This is a 179% price jump for email features that HubSpot includes for free.
          </p>
          <p className="text-muted mb-4">
            If you primarily need email tracking and templates, consider whether Growth&apos;s $39/seat justifies it versus using Pipedrive Lite ($14/seat) plus a standalone email tool like ActiveCampaign Starter ($15/mo) connected via Make ($10.59/mo) &mdash; total $39.59/mo for one seat, roughly the same cost but with more powerful email automation.
          </p>

          {/* ── Calendar ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Calendar: Native Sync (All Tiers)</h2>
          <p className="text-muted mb-4">
            Pipedrive syncs with Google Calendar and Microsoft Outlook calendar natively on all tiers including Lite ($14/seat/mo). Activities and meetings appear in both places. The Scheduler feature (creating booking links like Calendly) requires Growth ($39/seat/mo) &mdash; potentially saving you Calendly Standard&apos;s $12/user/mo.
          </p>

          {/* ── Forms ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Forms: Web Forms on Growth+</h2>
          <p className="text-muted mb-4">
            Pipedrive Web Forms are included on Growth ($39/seat/mo) and above. They create leads/deals automatically. On Lite ($14/seat/mo), you need an external form tool. Tally (free, unlimited forms) connected via Zapier ($29.99/mo) or Make ($10.59/mo) is the cheapest alternative, adding $10.59&ndash;$29.99/mo.
          </p>

          {/* ── Accounting ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Accounting: QuickBooks and Xero</h2>
          <p className="text-muted mb-4">
            Pipedrive has native marketplace integrations with QuickBooks and Xero. These sync contacts and create invoices from closed deals. Available on all tiers. The integrations are free to install &mdash; you only pay for your accounting tool (QuickBooks Simple Start $30/mo, Xero Starter $15/mo).
          </p>

          {/* ── Automation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation: Native vs Middleware</h2>
          <p className="text-muted mb-4">
            Pipedrive Growth ($39/seat/mo) includes workflow automations &mdash; triggers based on deal stages, new activities, or field changes. These are limited to Pipedrive-internal actions. For cross-app automation:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Need</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Native?</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Middleware Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Move deal &rarr; update activity</td>
                  <td className="px-4 py-2.5 text-muted">Yes (Growth+)</td>
                  <td className="px-4 py-2.5 text-muted">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">New deal &rarr; Slack notification</td>
                  <td className="px-4 py-2.5 text-muted">Yes (Slack integration)</td>
                  <td className="px-4 py-2.5 text-muted">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Won deal &rarr; Create invoice</td>
                  <td className="px-4 py-2.5 text-muted">Via QuickBooks/Xero</td>
                  <td className="px-4 py-2.5 text-muted">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">New deal &rarr; Add to email sequence</td>
                  <td className="px-4 py-2.5 text-muted">No</td>
                  <td className="px-4 py-2.5 text-muted">Make $10.59/mo or Zapier $29.99/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Form submission &rarr; Create deal</td>
                  <td className="px-4 py-2.5 text-muted">Yes (Growth+)</td>
                  <td className="px-4 py-2.5 text-muted">$0 (or $10.59+ on Lite)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">New deal &rarr; Create ClickUp task</td>
                  <td className="px-4 py-2.5 text-muted">No</td>
                  <td className="px-4 py-2.5 text-muted">Make $10.59/mo or Zapier $29.99/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Pipedrive Add-ons ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Pipedrive Add-On Costs</h2>
          <p className="text-muted mb-4">
            Pipedrive sells several add-ons on top of base plan pricing. These are worth knowing because they can significantly increase your per-seat cost:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">LeadBooster:</strong> $32.50/mo/company &mdash; chatbot, live chat, prospector, web forms. Overlaps with Growth&apos;s web forms.</li>
            <li><strong className="text-foreground">Smart Docs:</strong> $32.50/mo/company &mdash; document templates with auto-fill, tracking, e-signatures.</li>
            <li><strong className="text-foreground">Campaigns:</strong> $13.33/mo/company &mdash; basic email campaigns. Limited compared to ActiveCampaign Starter ($15/mo) or beehiiv Launch (free).</li>
            <li><strong className="text-foreground">Projects:</strong> $6.70/mo/company &mdash; basic project management. Limited compared to Asana Personal (free) or ClickUp Free Forever.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Add-On Trap</p>
            <p className="text-sm text-muted">
              Pipedrive Lite ($14/seat/mo) + LeadBooster ($32.50) + Campaigns ($13.33) + Smart Docs ($32.50) = $92.33/mo for one seat. At that point, HubSpot Starter ($20/seat/mo) includes forms, email marketing, and document tracking for 78% less. Stack add-ons carefully.
            </p>
          </div>

          {/* ── Best Stack Combos ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Recommended Pipedrive Stacks</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost (1 seat)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Pipedrive Lite + Make Core</td>
                  <td className="px-4 py-2.5 text-muted">$24.59/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Pipedrive Growth (standalone)</td>
                  <td className="px-4 py-2.5 text-muted">$39/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Pipedrive Lite + ActiveCampaign Starter + Make</td>
                  <td className="px-4 py-2.5 text-muted">$39.59/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Pipedrive Growth + ActiveCampaign Plus + Make</td>
                  <td className="px-4 py-2.5 text-muted">$98.59/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Is Pipedrive Lite enough for a solo founder?</h3>
          <p className="text-muted mb-4">
            For pure deal tracking, yes. Lite ($14/seat/mo) handles contacts, deals, and basic email. But you lose web forms, automation, and full email sync. Add Make Core ($10.59/mo) for external integrations, and your total is $24.59/mo &mdash; still cheaper than most alternatives.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Should I use Pipedrive&apos;s Campaigns add-on or a separate email tool?</h3>
          <p className="text-muted mb-4">
            Separate tool. Pipedrive Campaigns ($13.33/mo) is basic &mdash; no automation builder, limited templates, no segmentation beyond Pipedrive filters. ActiveCampaign Starter ($15/mo) or beehiiv Launch (free) offer far more for roughly the same price. Connect via Make ($10.59/mo).
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Does Pipedrive integrate with Shopify?</h3>
          <p className="text-muted mb-4">
            Not natively. You need Zapier ($29.99/mo) or Make ($10.59/mo) to sync Shopify orders to Pipedrive deals. HubSpot has a native Shopify integration on all tiers including Free. If e-commerce is central to your business, factor middleware cost into your CRM decision.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "when-pipedrive-needs-upgrade",
            "switch-from-hubspot-to-pipedrive",
            "zapier-vs-native-integrations",
          ]}
          comparisons={["hubspot-crm-vs-pipedrive"]}
        />
      </article>
    </>
  );
}
