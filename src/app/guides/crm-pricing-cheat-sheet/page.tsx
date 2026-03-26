import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM Pricing Cheat Sheet: Every Plan at a Glance",
  description:
    "All CRM tools, all tiers, all prices in one table. HubSpot, Pipedrive, Salesforce, Zoho, Freshsales, Close, and Attio — the definitive CRM pricing reference.",
};

export default function CrmPricingCheatSheetGuide() {
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
            <span className="text-foreground font-medium truncate">CRM Pricing Cheat Sheet</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Quick Reference
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          CRM Pricing Cheat Sheet: Every Plan at a Glance
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 6 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Every CRM plan, every price, one page. All prices are monthly rates (annual billing is
            typically 10&ndash;25% cheaper). All per-seat prices are per user per month.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">HubSpot CRM</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Billing</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Free Tools</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">Free</td><td className="px-4 py-2">Unlimited contacts, basic CRM, 2,000 emails/mo, HubSpot branding</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Starter</td><td className="px-4 py-2">$20/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">1,000 marketing contacts, remove branding, email health reporting</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Professional</td><td className="px-4 py-2">$890/mo</td><td className="px-4 py-2">Flat</td><td className="px-4 py-2">2,000 marketing contacts, automation, custom reporting, ABM</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Enterprise</td><td className="px-4 py-2">$3,600/mo</td><td className="px-4 py-2">Flat</td><td className="px-4 py-2">10,000 marketing contacts, custom objects, hierarchical teams</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Pipedrive</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Billing</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Lite</td><td className="px-4 py-2">$14/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">3,000 deals, 30 custom fields, lead/deal management</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Growth</td><td className="px-4 py-2">$39/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Automations, email sync, scheduler</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Premium</td><td className="px-4 py-2">$49/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Advanced reporting, revenue forecasts, e-signatures</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Ultimate</td><td className="px-4 py-2">$99/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Unlimited everything, security alerts, implementation support</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Salesforce</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Billing</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Starter Suite</td><td className="px-4 py-2">$25/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Basic CRM, lead/contact management, email integration</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Pro Suite</td><td className="px-4 py-2">$100/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Complete CRM, forecasting, quotes, custom dashboards</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Enterprise</td><td className="px-4 py-2">$175/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Advanced customization, workflow automation, API access</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Unlimited</td><td className="px-4 py-2">$350/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Unlimited customization, 24/7 support, sandbox, Einstein AI</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Zoho CRM</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Billing</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Free</td><td className="px-4 py-2">$0</td><td className="px-4 py-2">Free</td><td className="px-4 py-2">3 users, 5,000 records, basic modules</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Standard</td><td className="px-4 py-2">$20/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Scoring rules, workflows, 100K records</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Professional</td><td className="px-4 py-2">$35/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">SalesSignals, blueprints, inventory management</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Enterprise</td><td className="px-4 py-2">$50/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Zia AI, custom modules, multi-user portals, sandbox</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Ultimate</td><td className="px-4 py-2">$65/seat/mo</td><td className="px-4 py-2">Per seat</td><td className="px-4 py-2">Advanced BI, enhanced storage</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Freshsales, Close &amp; Attio</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Freshsales</td><td className="px-4 py-2">Free</td><td className="px-4 py-2">$0 (3 users)</td><td className="px-4 py-2">Contact management, built-in chat/email/phone</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Freshsales</td><td className="px-4 py-2">Growth</td><td className="px-4 py-2">$11/seat/mo</td><td className="px-4 py-2">AI scoring, sequences, 2,000 bot sessions/mo</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Freshsales</td><td className="px-4 py-2">Pro</td><td className="px-4 py-2">$47/seat/mo</td><td className="px-4 py-2">Multiple pipelines, AI deal insights, territory management</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Freshsales</td><td className="px-4 py-2">Enterprise</td><td className="px-4 py-2">$71/seat/mo</td><td className="px-4 py-2">Custom modules, AI forecasting, audit logs</td></tr>
                  <tr className="border-t-2 border-border"><td className="px-4 py-2 font-medium text-foreground">Close</td><td className="px-4 py-2">Solo</td><td className="px-4 py-2">$19/seat/mo</td><td className="px-4 py-2">1 user only, basic CRM</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Close</td><td className="px-4 py-2">Essentials</td><td className="px-4 py-2">$49/seat/mo</td><td className="px-4 py-2">Power Dialer, email sync (3 users max)</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Close</td><td className="px-4 py-2">Growth</td><td className="px-4 py-2">$109/seat/mo</td><td className="px-4 py-2">Multiple pipelines, workflows, call recording</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Close</td><td className="px-4 py-2">Scale</td><td className="px-4 py-2">$149/seat/mo</td><td className="px-4 py-2">Predictive Dialer, custom objects, call coaching</td></tr>
                  <tr className="border-t-2 border-border"><td className="px-4 py-2 font-medium text-foreground">Attio</td><td className="px-4 py-2">Free</td><td className="px-4 py-2">$0 (3 seats)</td><td className="px-4 py-2">50,000 records, core CRM</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Attio</td><td className="px-4 py-2">Plus</td><td className="px-4 py-2">$34/seat/mo</td><td className="px-4 py-2">Unlimited records, advanced reporting, automations</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Attio</td><td className="px-4 py-2">Pro</td><td className="px-4 py-2">$69/seat/mo</td><td className="px-4 py-2">Advanced automations, AI, custom objects, API</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5-User Annual Cost Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Entry Plan (5 users/yr)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mid Plan (5 users/yr)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2 font-medium text-foreground">Freshsales</td><td className="px-4 py-2">$660/yr (Growth)</td><td className="px-4 py-2">$2,820/yr (Pro)</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Pipedrive</td><td className="px-4 py-2">$840/yr (Lite)</td><td className="px-4 py-2">$2,340/yr (Growth)</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Zoho CRM</td><td className="px-4 py-2">$1,200/yr (Standard)</td><td className="px-4 py-2">$2,100/yr (Professional)</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">HubSpot</td><td className="px-4 py-2">$1,200/yr (Starter)</td><td className="px-4 py-2">$10,680/yr (Professional)</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Close</td><td className="px-4 py-2">$2,940/yr (Essentials)</td><td className="px-4 py-2">$6,540/yr (Growth)</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Attio</td><td className="px-4 py-2">$2,040/yr (Plus)</td><td className="px-4 py-2">$4,140/yr (Pro)</td></tr>
                  <tr><td className="px-4 py-2 font-medium text-foreground">Salesforce</td><td className="px-4 py-2">$1,500/yr (Starter Suite)</td><td className="px-4 py-2">$6,000/yr (Pro Suite)</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Annual costs calculated at monthly rates. Annual billing saves 10&ndash;25% depending on vendor.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which CRM offers the most value per dollar?</h3>
                <p>Freshsales Growth at $11/seat/month offers AI contact scoring, visual pipeline, sequences, and built-in phone &mdash; the most features per dollar of any CRM. Zoho CRM is also excellent value with its integration into 50+ Zoho apps.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why does HubSpot Professional cost so much more than Starter?</h3>
                <p>HubSpot Starter ($20/seat) is basic CRM with branding removal. Professional ($890/month flat) adds marketing automation, custom reporting, ABM, and content tools. It&apos;s a 4,350% price increase that includes features most small teams never use. Evaluate carefully before upgrading.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Salesforce Starter Suite worth it for small teams?</h3>
                <p>At $25/seat/month, Salesforce Starter Suite is competitively priced. But it&apos;s much more basic than Pro Suite ($100/seat) and lacks the customization that makes Salesforce powerful. Most small teams are better off with Pipedrive or HubSpot unless they plan to grow into Salesforce&apos;s enterprise features.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce", "zoho-crm", "freshsales", "close-crm", "attio"]}
            comparisons={["hubspot-crm-vs-pipedrive", "hubspot-crm-vs-salesforce"]}
            guides={[
              "should-i-pay-for-crm",
              "saas-pricing-cheat-sheet",
              "when-hubspot-stops-being-cheap",
            ]}
          />
        </div>
      </div>
    </>
  );
}
