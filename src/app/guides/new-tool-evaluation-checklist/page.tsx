import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "How to Evaluate Any SaaS Tool in 15 Minutes",
  description:
    "A 10-point evaluation framework for any SaaS tool: pricing transparency, free tier quality, data export, API, integrations, support, billing model, hidden costs, switching difficulty, vendor trajectory.",
};

export default function NewToolEvaluationChecklistPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">New Tool Evaluation Checklist</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Checklist
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How to Evaluate Any SaaS Tool in 15 Minutes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Stop spending hours comparing feature lists. This 10-point framework lets you
            evaluate any SaaS tool in 15 minutes by focusing on what actually matters:
            pricing transparency, data portability, and long-term cost trajectory. Works
            for CRMs, email tools, automation platforms, and everything else.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The 10-Point SaaS Evaluation Framework</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Pricing Transparency: Can you see all prices without talking to sales?</p>
                  <p className="text-muted text-sm mt-1"><strong>Green flag:</strong> Pipedrive, Make, Todoist &mdash; all plan prices published. <strong>Yellow flag:</strong> HubSpot, Zapier &mdash; some tiers published, Enterprise hidden. <strong>Red flag:</strong> Workato, Tray.io &mdash; no prices published at all. If you can&apos;t see the price, you&apos;ll overpay.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Free Tier Quality: Is the free tier functional or just a demo?</p>
                  <p className="text-muted text-sm mt-1"><strong>Functional:</strong> Kit free (10,000 subscribers), HubSpot Free (unlimited contacts), ClickUp Free (unlimited tasks). <strong>Demo-tier:</strong> Mailchimp Free (250 contacts), Zapier Free (100 tasks, two-step only), Typeform Free (10 responses/month).</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">3.</span>
                <div>
                  <p className="text-foreground font-medium">Data Export: Can you get your data out easily?</p>
                  <p className="text-muted text-sm mt-1"><strong>Good:</strong> Full CSV/JSON export of all data (Pipedrive, Kit, Notion). <strong>Partial:</strong> Contacts export but automations/templates don&apos;t (HubSpot, Mailchimp). <strong>Bad:</strong> Proprietary formats, no bulk export, or API-only extraction (Salesforce custom objects).</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">4.</span>
                <div>
                  <p className="text-foreground font-medium">API Availability: Is there a well-documented API?</p>
                  <p className="text-muted text-sm mt-1">APIs future-proof your investment. HubSpot, Pipedrive, Notion, Make, and Zapier all have robust APIs. Tools without APIs (Carrd, TidyCal free tier) limit what you can build. Check if the API is available on your pricing tier &mdash; some vendors gate API access behind paid plans.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">5.</span>
                <div>
                  <p className="text-foreground font-medium">Integrations: Does it connect to your existing stack?</p>
                  <p className="text-muted text-sm mt-1">Check native integrations first (free, reliable). Then Zapier/Make compatibility (adds $10&ndash;$30/month middleware cost). Zapier supports 7,000+ apps. Make supports 1,800+. If your critical tool isn&apos;t on either, it&apos;s a deal-breaker.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">6.</span>
                <div>
                  <p className="text-foreground font-medium">Support Quality: Can you reach a human when things break?</p>
                  <p className="text-muted text-sm mt-1">Free tiers usually get community forums only. Mailchimp Essentials ($13/month) gets email and chat. HubSpot Starter ($20/seat/month) gets email and chat. Salesforce charges extra for phone support (included only at Unlimited tier, $350/seat/month). Check support options for YOUR tier.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">7.</span>
                <div>
                  <p className="text-foreground font-medium">Billing Model: Per-seat, per-contact, usage-based, or flat?</p>
                  <p className="text-muted text-sm mt-1">Per-seat (Pipedrive $14&ndash;$99/seat) punishes growing teams. Per-contact (Mailchimp, ActiveCampaign) punishes big lists. Usage-based (Zapier tasks) punishes high volume. Flat-rate (beehiiv $49/month, Basecamp $349/month) is predictable. Pick the model that matches your growth pattern.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">8.</span>
                <div>
                  <p className="text-foreground font-medium">Hidden Costs: What costs extra beyond the listed price?</p>
                  <p className="text-muted text-sm mt-1">HubSpot Professional requires a $3,000 onboarding fee. Salesforce needs $10,000&ndash;$50,000 for implementation consultants. Shopify charges 2% transaction fees on the Basic plan unless you use Shopify Payments. Notion AI is $10/user/month add-on. Always ask: what&apos;s NOT included?</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">9.</span>
                <div>
                  <p className="text-foreground font-medium">Switching Difficulty: How hard is it to leave?</p>
                  <p className="text-muted text-sm mt-1"><strong>Easy to leave:</strong> Calendly, Carrd, Buffer &mdash; simple data, few dependencies. <strong>Medium:</strong> Mailchimp, Kit &mdash; subscriber export works but automations don&apos;t transfer. <strong>Hard:</strong> Salesforce, HubSpot Professional &mdash; deep workflows, custom objects, team retraining.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">10.</span>
                <div>
                  <p className="text-foreground font-medium">Vendor Trajectory: Is the tool getting better or more expensive?</p>
                  <p className="text-muted text-sm mt-1"><strong>Getting better:</strong> beehiiv (adding features at same price), Linear (improving rapidly). <strong>Getting expensive:</strong> Mailchimp (free tier shrunk from 2,000 to 250 contacts), Bardeen (890% price increase). <strong>Acquired recently:</strong> Watch for Intuit-style price increases post-acquisition.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The 15-Minute Evaluation Routine</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Minutes 1&ndash;3:</strong> Check the pricing page. Can you see all prices? What billing model (per-seat, per-contact, usage, flat)? Is there a free tier?
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Minutes 4&ndash;7:</strong> Check data portability. Go to Settings/Account and look for Export. Check if there&apos;s a documented API. Search &ldquo;[tool name] data export&rdquo; for gotchas.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Minutes 8&ndash;11:</strong> Check integrations. Search for your critical tools in their integrations directory. Check Zapier/Make availability as a backup.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Minutes 12&ndash;15:</strong> Check vendor trajectory. Search &ldquo;[tool name] pricing changes&rdquo; and &ldquo;[tool name] review 2026.&rdquo; Look for patterns: shrinking free tiers, increasing prices, or recent acquisitions.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which factor matters most?</h3>
                <p className="text-muted">Data export and switching difficulty. Features and pricing can change, but if you can&apos;t get your data out, you&apos;re trapped. Prioritize tools that make it easy to leave.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I always pick the cheapest option?</h3>
                <p className="text-muted">No. The cheapest option that meets your needs is the right answer. Freshsales Growth at $11/seat/month is cheaper than Pipedrive Lite at $14/seat/month, but Pipedrive&apos;s UX is better for visual pipeline management. The $36/year per-seat difference is worth it if your team actually uses the CRM.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I score a tool that doesn&apos;t publish prices?</h3>
                <p className="text-muted">Automatic red flag. Tools that hide pricing (Workato, Tray.io, enterprise tiers of most platforms) are typically 2&ndash;5x more expensive than published alternatives. If you need a sales call to learn the price, budget at minimum $500/month.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "mailchimp", "zapier", "make", "notion"]}
            comparisons={[]}
            guides={[
              "saas-pricing-models-explained",
              "software-switching-cost-guide",
              "saas-audit-checklist",
              "when-to-switch-software",
              "tools-with-transparent-pricing-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
