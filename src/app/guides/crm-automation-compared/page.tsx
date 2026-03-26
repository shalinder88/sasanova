import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM Automation: What You Can Automate at Each Price Tier",
  description:
    "HubSpot, Pipedrive, Close, Salesforce, Zoho, and Freshsales CRM automation features compared by tier. Basic deal workflows, email sequences, advanced automations, and exact prices.",
};

export default function CrmAutomationCompared() {
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
              CRM Automation Compared
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              CRM
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM Automation: What You Can Automate at Each Price Tier
          </h1>
          <p className="text-lg text-muted">
            CRM automation ranges from basic task reminders to full workflow engines that rival dedicated automation platforms. The problem: most automation features are locked behind mid-to-high tiers. HubSpot&apos;s best automation requires Professional at $890/mo. Pipedrive gates automations behind Growth at $39/seat. This guide maps exactly what you can automate at each price point.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Automation Tiers ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">CRM Automation by Tier</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Capability</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Close</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Salesforce</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Zoho CRM</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Freshsales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Task reminders</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Lite ($14/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Solo ($19/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($25/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Basic workflow rules</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($20/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($39/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($109/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($25/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Standard ($20/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($11/seat)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email sequences</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($20/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($39/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Essentials ($49/seat)</td>
                  <td className="px-4 py-2.5 text-yellow-400">Pro Suite ($100/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Professional ($35/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($11/seat)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Multi-step workflows</td>
                  <td className="px-4 py-2.5 text-yellow-400">Pro ($890/mo flat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($39/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($109/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Enterprise ($175/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Professional ($35/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Pro ($47/seat)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lead scoring</td>
                  <td className="px-4 py-2.5 text-yellow-400">Pro ($890/mo flat)</td>
                  <td className="px-4 py-2.5 text-red-400">Not native</td>
                  <td className="px-4 py-2.5 text-red-400">Not native</td>
                  <td className="px-4 py-2.5 text-green-400">Enterprise ($175/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Standard ($20/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($11/seat, AI)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Custom automation builder</td>
                  <td className="px-4 py-2.5 text-yellow-400">Pro ($890/mo flat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($39/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Growth ($109/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Enterprise ($175/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Enterprise ($50/seat)</td>
                  <td className="px-4 py-2.5 text-green-400">Pro ($47/seat)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Platform Breakdowns ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">HubSpot: Free Is Basic, Pro Is Expensive</h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s automation story has a massive gap. Free ($0) gives you task reminders and basic deal stage changes. Starter ($20/seat/mo) adds simple sequences and email automations. But full workflow automation &mdash; multi-step sequences, branching logic, lead scoring, custom properties as triggers &mdash; requires Professional at $890/mo flat. That&apos;s a 4,350% price jump from Starter.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Key takeaway:</strong> If you need CRM automation beyond basic sequences, HubSpot Professional&apos;s $890/mo flat fee makes it one of the most expensive options. Pipedrive Growth at $39/seat/mo offers similar workflow automation for a fraction of the price.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Pipedrive: Automation at $39/Seat</h2>
          <p className="text-muted mb-4">
            Pipedrive gates all automation behind Growth ($39/seat/mo). Lite ($14/seat) has zero automation. Growth unlocks workflow automations, email sequences, and webhook triggers. The automation builder is visual and straightforward &mdash; trigger on deal stage change, contact update, or activity completion, then execute actions.
          </p>
          <p className="text-muted mb-4">
            For a 5-person team, Pipedrive Growth costs $195/mo total vs HubSpot Professional at $890/mo. You get comparable automation capabilities at less than a quarter of the price.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Close: Workflows Start at Growth ($109/Seat)</h2>
          <p className="text-muted mb-4">
            Close focuses on outreach automation. Email sequences are available on Essentials ($49/seat/mo). Full workflow automation with custom triggers and multi-step sequences requires Growth ($109/seat/mo). Scale ($149/seat/mo) adds Predictive Dialer and call coaching.
          </p>
          <p className="text-muted mb-4">
            Close&apos;s automation is built around sales outreach: auto-enroll leads in sequences, trigger follow-ups based on email opens/clicks, and automate task creation. It&apos;s not a general-purpose automation platform like HubSpot&apos;s workflow engine.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Freshsales: Best Budget Automation</h2>
          <p className="text-muted mb-4">
            Freshsales offers the most automation at the lowest price. Growth ($11/seat/mo) includes email sequences, workflow rules, and AI-powered contact scoring via Freddy AI. Pro ($47/seat/mo) adds multiple pipelines, AI deal insights, and territory management.
          </p>
          <p className="text-muted mb-4">
            For teams wanting CRM automation without spending $39+/seat, Freshsales Growth is the value leader at $11/seat/mo.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Zoho CRM and Salesforce</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Zoho CRM</strong> offers workflow rules starting at Standard ($20/seat/mo) and blueprints (process management) at Professional ($35/seat/mo). Enterprise ($50/seat/mo) unlocks Zia AI and custom modules. Strong value for process-heavy businesses.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Salesforce</strong> has basic workflow rules on Starter Suite ($25/seat/mo) but meaningful automation requires Enterprise ($175/seat/mo) for Flow Builder. The most powerful CRM automation available &mdash; and the most expensive.
          </p>

          {/* ── Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Opinionated Verdict</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Best automation for the price:</strong> Freshsales Growth at $11/seat/mo. Email sequences, workflows, and AI scoring at the lowest per-seat price in this comparison.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Best mid-range automation:</strong> Pipedrive Growth at $39/seat/mo. Visual workflow builder, email sequences, and webhook triggers. Better value than HubSpot Professional for most SMBs.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Skip HubSpot Professional unless you need the full platform.</strong> At $890/mo flat, HubSpot Pro is only justified if you need marketing automation + CRM + reporting integrated. For CRM automation alone, Pipedrive or Freshsales deliver 80% of the capability at 10&ndash;20% of the cost.
            </p>
          </div>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which CRM has the cheapest automation?</h3>
                <p className="text-muted">Freshsales Growth at $11/seat/mo includes email sequences, workflow automation, and AI contact scoring. Zoho Standard at $20/seat/mo is the next cheapest with workflow rules and scoring.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is HubSpot automation so expensive?</h3>
                <p className="text-muted">HubSpot bundles full marketing automation, custom reporting, and ABM tools into its Professional tier at $890/mo flat. If you only need CRM workflow automation, you are paying for features you may not use. Pipedrive Growth at $39/seat offers CRM-specific automation at a fraction of the cost.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Zapier instead of CRM automation?</h3>
                <p className="text-muted">Yes. Many teams use Zapier ($29.99/mo Professional) or Make ($10.59/mo Core) to automate between their CRM and other tools. This is often cheaper than upgrading CRM tiers just for automation. The trade-off: external automation tools add another subscription and require managing workflows in two places.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/crm-reporting-features-ranked"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM Reporting Features Ranked</span>
                <span className="block text-xs text-muted mt-1">Reporting and analytics across 6 platforms</span>
              </Link>
              <Link
                href="/guides/crm-email-integration-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM Email Integration</span>
                <span className="block text-xs text-muted mt-1">Email sync and tracking across 6 platforms</span>
              </Link>
              <Link
                href="/guides/crm-mobile-app-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM Mobile Apps Ranked</span>
                <span className="block text-xs text-muted mt-1">Which CRMs actually work on your phone</span>
              </Link>
              <Link
                href="/guides/when-hubspot-stops-being-cheap"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">When HubSpot Stops Being Cheap</span>
                <span className="block text-xs text-muted mt-1">The exact thresholds and price jumps</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "close-crm", "salesforce", "zoho-crm", "freshsales"]}
            comparisons={[]}
            guides={[
              "crm-reporting-features-ranked",
              "crm-email-integration-compared",
              "crm-annual-cost-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
