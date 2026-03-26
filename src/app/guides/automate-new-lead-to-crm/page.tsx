import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Automate New Leads into Your CRM: 3 Methods Compared",
  description:
    "Step-by-step recipes for routing form submissions from Typeform or Tally into Pipedrive or HubSpot CRM using Zapier, Make, or native integrations. Exact pricing and step counts.",
};

export default function AutomateNewLeadToCrmPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Automate New Lead to CRM</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Workflow Recipe
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Automate New Leads into Your CRM: 3 Methods Compared
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Every lead that sits in a form response spreadsheet for more than 10 minutes
            is a lead going cold. Here are three ways to route form submissions from
            Typeform or Tally into Pipedrive or HubSpot CRM &mdash; with exact pricing,
            step counts, and the tradeoffs of each method.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Tools and Their Prices</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Paid From</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Tally</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited forms &amp; submissions</td>
                    <td className="px-4 py-2.5 text-muted">$29/mo (Pro)</td>
                    <td className="px-4 py-2.5 text-muted">Form capture</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Typeform</td>
                    <td className="px-4 py-2.5 text-muted">10 responses/mo</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo (Basic, 100 responses)</td>
                    <td className="px-4 py-2.5 text-muted">Form capture</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">None</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat/mo (Lite)</td>
                    <td className="px-4 py-2.5 text-muted">CRM</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot CRM</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited contacts</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat/mo (Starter)</td>
                    <td className="px-4 py-2.5 text-muted">CRM</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">100 tasks/mo, 2-step only</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo (Professional)</td>
                    <td className="px-4 py-2.5 text-muted">Automation</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">1,000 ops/mo, 2 scenarios</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo (Core)</td>
                    <td className="px-4 py-2.5 text-muted">Automation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Method 1: Zapier (Easiest, Most Expensive)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Create your Tally or Typeform lead capture form.</p>
                  <p className="text-muted text-sm mt-1">Tally is free with unlimited submissions. Typeform Free caps at 10 responses/month &mdash; you&apos;ll need Basic ($39/mo) for any real volume.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Create a Zap: trigger is &ldquo;New Submission&rdquo; in Tally/Typeform.</p>
                  <p className="text-muted text-sm mt-1">This is a 2-step Zap (trigger + action), so it works on Zapier Free (100 tasks/month). Each form submission = 1 task.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">3.</span>
                <div>
                  <p className="text-foreground font-medium">Action: &ldquo;Create Contact&rdquo; or &ldquo;Create Deal&rdquo; in Pipedrive/HubSpot.</p>
                  <p className="text-muted text-sm mt-1">Map form fields to CRM fields. For Pipedrive: name, email, phone, deal value. For HubSpot: contact properties plus lifecycle stage. Total setup: 10&ndash;15 minutes.</p>
                </div>
              </div>
            </div>
            <p className="text-muted leading-relaxed mt-4">
              <strong>Cost:</strong> Tally (free) + Pipedrive Lite ($14/seat/mo) + Zapier Free (if under 100 leads/mo) = <strong>$14/mo total</strong>.
              With Typeform + HubSpot Free + Zapier Professional = <strong>$69.99/mo</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Method 2: Make (Cheaper, Slightly More Setup)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Create a Make scenario with a webhook trigger or Tally/Typeform module.</p>
                  <p className="text-muted text-sm mt-1">Make has native modules for both Tally and Typeform. The visual builder takes 5 more minutes to learn than Zapier&apos;s linear interface, but the cost savings are significant.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Add a Pipedrive or HubSpot module as the action.</p>
                  <p className="text-muted text-sm mt-1">Map the same fields. Make gives you 1,000 operations/month on free (each form &rarr; CRM counts as 2 operations: 1 trigger + 1 action). That&apos;s 500 leads/month on free.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">3.</span>
                <div>
                  <p className="text-foreground font-medium">Optional: add a router for conditional logic.</p>
                  <p className="text-muted text-sm mt-1">Route leads to different CRM pipelines based on form answers (e.g., budget range or company size). This would require Zapier Paths (Professional plan at $29.99/mo) but is free in Make.</p>
                </div>
              </div>
            </div>
            <p className="text-muted leading-relaxed mt-4">
              <strong>Cost:</strong> Tally (free) + Pipedrive Lite ($14/seat/mo) + Make Free (up to 500 leads/mo) = <strong>$14/mo total</strong>.
              With Typeform Basic + HubSpot Free + Make Core = <strong>$49.59/mo</strong> &mdash; saving $20.40/mo vs. Zapier.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Method 3: Native Integration (No Middle Tool)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Use HubSpot&apos;s built-in forms or Tally&apos;s webhook.</p>
                  <p className="text-muted text-sm mt-1">HubSpot Free includes forms that create contacts automatically &mdash; zero automation tool needed. Tally supports webhooks (free) that can push data directly to HubSpot or Pipedrive via their APIs.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">For Typeform: use the native HubSpot integration.</p>
                  <p className="text-muted text-sm mt-1">Typeform has a native HubSpot integration on all paid plans ($39/mo+). It pushes responses directly into HubSpot contacts without Zapier or Make. Pipedrive requires Zapier/Make &mdash; no native Typeform integration.</p>
                </div>
              </div>
            </div>
            <p className="text-muted leading-relaxed mt-4">
              <strong>Cost:</strong> HubSpot forms (free) + HubSpot CRM (free) = <strong>$0/mo</strong>.
              Tally (free) + Pipedrive Lite ($14/seat/mo) via webhook = <strong>$14/mo</strong> (requires minor technical setup).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Which Method to Choose</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Method</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Setup Time</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost (Min)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">10&ndash;15 min</td>
                    <td className="px-4 py-2.5 text-muted">$14 (with free tiers)</td>
                    <td className="px-4 py-2.5 text-muted">Non-technical, low volume</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">15&ndash;25 min</td>
                    <td className="px-4 py-2.5 text-muted">$14 (with free tiers)</td>
                    <td className="px-4 py-2.5 text-muted">Cost-conscious, conditional routing</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Native</td>
                    <td className="px-4 py-2.5 text-muted">5&ndash;20 min</td>
                    <td className="px-4 py-2.5 text-muted">$0 (HubSpot forms)</td>
                    <td className="px-4 py-2.5 text-muted">Simplest, HubSpot users</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Zapier Free for this?</h3>
                <p className="text-muted">Yes, if you get fewer than 100 form submissions per month and only need a simple 2-step flow (form &rarr; CRM contact). Any conditional logic or extra steps require Professional at $29.99/mo.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Tally really free for unlimited submissions?</h3>
                <p className="text-muted">Yes. Tally Free includes unlimited forms and unlimited submissions with conditional logic included. Pro ($29/mo) adds custom domains and branding removal. For lead capture, Free is genuinely enough.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What if I need to enrich leads before they hit the CRM?</h3>
                <p className="text-muted">Add a Clearbit or Clay step between form and CRM. This requires a multi-step Zap (Zapier Professional, $29.99/mo) or Make scenario (free if under 1,000 ops). The enrichment tool is an additional cost.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "pipedrive", "hubspot-crm", "tally", "typeform"]}
            comparisons={["zapier-vs-make", "hubspot-crm-vs-pipedrive"]}
            guides={[
              "automate-lead-capture",
              "crm-solo-founder",
              "how-to-choose-crm",
              "how-to-choose-automation-tool",
            ]}
          />
        </div>
      </article>
    </>
  );
}
