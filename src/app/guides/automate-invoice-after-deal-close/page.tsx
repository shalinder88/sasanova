import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Auto-Send Invoices When Deals Close: CRM + Accounting",
  description:
    "Step-by-step recipe for triggering invoices in QuickBooks, FreshBooks, or Wave when a deal closes in Pipedrive or HubSpot. Exact pricing for every tool and automation layer.",
};

export default function AutomateInvoiceAfterDealClosePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Auto-Invoice After Deal Close</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Workflow Recipe
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Auto-Send Invoices When Deals Close: CRM + Accounting
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            A deal moves to &ldquo;Won&rdquo; in your CRM. An invoice should appear in your
            accounting tool within seconds, not when you remember to create it three days
            later. Here&apos;s how to wire Pipedrive or HubSpot to QuickBooks, FreshBooks, or
            Wave &mdash; with exact costs at every layer.
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
            <h2 className="text-xl font-bold mb-3">Pricing: CRM + Accounting + Automation</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest Paid Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Option</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Lite $14/seat/mo &mdash; but automations require Growth at $39/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">No free tier</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot CRM</td>
                    <td className="px-4 py-2.5 text-muted">Starter $20/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Free: unlimited contacts, basic CRM</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">QuickBooks Online</td>
                    <td className="px-4 py-2.5 text-muted">Simple Start $38/mo</td>
                    <td className="px-4 py-2.5 text-muted">No free tier (30-day trial)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">FreshBooks</td>
                    <td className="px-4 py-2.5 text-muted">Lite $23/mo (5 clients)</td>
                    <td className="px-4 py-2.5 text-muted">No free tier (30-day trial)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Wave</td>
                    <td className="px-4 py-2.5 text-muted">Pro $16/mo</td>
                    <td className="px-4 py-2.5 text-muted">Starter: free invoicing, manual bank entry</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Professional $29.99/mo (750 tasks, multi-step)</td>
                    <td className="px-4 py-2.5 text-muted">Free: 100 tasks, 2-step only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">Core $10.59/mo (10,000 ops)</td>
                    <td className="px-4 py-2.5 text-muted">Free: 1,000 ops, 2 scenarios</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Recipe: Pipedrive &rarr; QuickBooks via Zapier</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Trigger: Pipedrive &ldquo;Updated Deal Stage&rdquo; &rarr; filter for &ldquo;Won&rdquo; stage.</p>
                  <p className="text-muted text-sm mt-1">This requires a 3-step Zap (trigger + filter + action), so you need Zapier Professional at $29.99/mo. Each won deal = 3 tasks consumed.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Action: QuickBooks &ldquo;Create Invoice&rdquo; with mapped deal fields.</p>
                  <p className="text-muted text-sm mt-1">Map Pipedrive deal value &rarr; invoice amount, contact name &rarr; customer name, email &rarr; send-to address. QuickBooks creates the invoice and optionally emails it immediately.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">3.</span>
                <div>
                  <p className="text-foreground font-medium">Optional: add a Slack notification step.</p>
                  <p className="text-muted text-sm mt-1">4-step Zap now. Each won deal = 4 tasks. At 50 deals/month, that&apos;s 200 tasks &mdash; well within Professional&apos;s 750.</p>
                </div>
              </div>
            </div>
            <p className="text-muted leading-relaxed mt-4">
              <strong>Total cost:</strong> Pipedrive Growth ($39/seat) + QuickBooks Simple Start ($38/mo) + Zapier Professional ($29.99/mo) = <strong>$106.99/mo</strong> for a solo founder.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Budget Alternative: HubSpot Free + Wave Free + Make Free</h2>
            <p className="text-muted leading-relaxed mb-4">
              HubSpot CRM Free (deal pipeline) + Wave Starter (free invoicing) + Make Free (1,000 ops/month).
              This gives you deal tracking, automatic invoicing, and zero monthly cost if you close fewer than
              ~166 deals/month (each flow = ~6 operations in Make). The tradeoff: HubSpot Free has limited
              automation, Wave has no auto bank imports on Starter, and Make Free limits you to 2 active scenarios.
            </p>
            <p className="text-muted leading-relaxed">
              <strong>Total cost: $0/mo</strong> for low-volume businesses. Upgrade to Make Core ($10.59/mo) when you need more scenarios.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Pipedrive have a native QuickBooks integration?</h3>
                <p className="text-muted">Pipedrive has a QuickBooks integration via the Marketplace, but it&apos;s for syncing invoices back into Pipedrive, not for auto-creating invoices on deal close. You still need Zapier or Make for the trigger logic.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can HubSpot trigger invoices natively?</h3>
                <p className="text-muted">HubSpot Professional ($890/mo) includes workflow automation that can trigger QuickBooks actions. On Free or Starter, you need an external automation tool. For most small businesses, $890/mo is not justified for invoice automation alone.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Wave good enough for real accounting?</h3>
                <p className="text-muted">Wave Starter is genuinely free for invoicing and basic accounting. Pro ($16/mo) adds automatic bank imports. For freelancers and solopreneurs, it covers most needs. For complex inventory or multi-entity accounting, QuickBooks ($38+/mo) or FreshBooks ($23+/mo) is better.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["pipedrive", "hubspot-crm", "quickbooks-online", "freshbooks", "wave", "zapier", "make"]}
            comparisons={["pipedrive-vs-hubspot", "zapier-vs-make"]}
            guides={[
              "automate-new-lead-to-crm",
              "accounting-freelancers",
              "how-to-choose-crm",
              "automation-pricing-compared",
            ]}
          />
        </div>
      </article>
    </>
  );
}
