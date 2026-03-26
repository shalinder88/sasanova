import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Sync Meeting Notes to CRM Automatically",
  description:
    "Push meeting transcripts and action items from Grain, Fathom, or Otter.ai into Pipedrive or HubSpot CRM via Zapier, Make, or native integrations. Exact pricing and integration availability.",
};

export default function AutomateMeetingNotesToCrmPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Meeting Notes to CRM</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Workflow Recipe
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Sync Meeting Notes to CRM Automatically
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Sales teams lose context when meeting notes live in one tool and deal records
            live in another. Here&apos;s how to automatically push meeting summaries from
            Grain, Fathom, or Otter.ai into Pipedrive or HubSpot &mdash; with the exact
            plan you need on each tool and which integrations are native vs. requiring Zapier/Make.
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
            <h2 className="text-xl font-bold mb-3">Meeting Tool Pricing and CRM Integration</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier for CRM Sync</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Native CRM Integrations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Grain</td>
                    <td className="px-4 py-2.5 text-muted">Free: unlimited meetings, ~20 recordings</td>
                    <td className="px-4 py-2.5 text-muted">Starter $15/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot, Salesforce (Starter+)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Fathom</td>
                    <td className="px-4 py-2.5 text-muted">Free: 5 AI summaries/mo</td>
                    <td className="px-4 py-2.5 text-muted">Business $25/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot, Salesforce (Business)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Otter.ai</td>
                    <td className="px-4 py-2.5 text-muted">Free: 300 min/mo, 30 min/conversation</td>
                    <td className="px-4 py-2.5 text-muted">Business $30/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot, Salesforce (Business)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong>Key finding:</strong> All three tools offer native HubSpot and Salesforce integrations
              on their paid CRM tiers. None have native Pipedrive integration &mdash; you need Zapier or Make
              for Pipedrive.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Recipe 1: Grain &rarr; HubSpot (Native, No Automation Tool)</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Upgrade Grain to Starter ($15/seat/mo) for CRM integrations.</p>
                  <p className="text-muted text-sm mt-1">Grain Free includes unlimited meetings and AI notes but no CRM sync. Starter unlocks HubSpot and Salesforce integration plus unlimited storage.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Connect HubSpot in Grain settings &rarr; Integrations.</p>
                  <p className="text-muted text-sm mt-1">Grain automatically matches meeting participants to HubSpot contacts and logs meeting summaries, highlights, and action items to the contact timeline. Zero Zapier/Make needed.</p>
                </div>
              </div>
            </div>
            <p className="text-muted leading-relaxed mt-4">
              <strong>Cost:</strong> Grain Starter ($15/seat) + HubSpot Free ($0) = <strong>$15/seat/mo</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Recipe 2: Fathom &rarr; Pipedrive via Zapier</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Use Fathom Free or Premium ($20/mo flat) for meeting notes.</p>
                  <p className="text-muted text-sm mt-1">Fathom Free gives unlimited recording and transcription with 5 AI summaries/month. Premium ($20/mo) is flat-rate (not per seat), unlocking unlimited AI summaries and search.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Create a Zapier Zap: Fathom &ldquo;New Meeting Summary&rdquo; &rarr; Pipedrive &ldquo;Create Note.&rdquo;</p>
                  <p className="text-muted text-sm mt-1">This is a 2-step Zap, working on Zapier Free (100 tasks/month). Each meeting = 1 task. If you have 20 meetings/week, that&apos;s ~80/month &mdash; within Free&apos;s limit.</p>
                </div>
              </div>
            </div>
            <p className="text-muted leading-relaxed mt-4">
              <strong>Cost:</strong> Fathom Free ($0) + Pipedrive Lite ($14/seat) + Zapier Free ($0) = <strong>$14/seat/mo</strong>.
              With Fathom Premium: <strong>$34/mo</strong> total (Fathom $20 flat + Pipedrive $14/seat).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Recipe 3: Otter.ai &rarr; HubSpot via Make</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Otter.ai Business ($30/seat/mo) includes native HubSpot sync.</p>
                  <p className="text-muted text-sm mt-1">If you use HubSpot, Otter Business syncs directly without Zapier/Make. Pro ($17/mo flat) includes 1,200 min/month but no CRM sync. The jump to Business adds CRM + admin controls.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Alternative: Otter Pro ($17/mo) + Make for Pipedrive.</p>
                  <p className="text-muted text-sm mt-1">Use Otter&apos;s webhook or Zapier integration on Pro, connect to Make (free, 1,000 ops/month) to push summaries to Pipedrive as notes. This avoids the Business tier jump to $30/seat.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Cheapest Stack for Each CRM</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest Meeting &rarr; CRM Stack</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Grain Starter + HubSpot Free (native sync)</td>
                    <td className="px-4 py-2.5 text-muted">$15/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Fathom Free + Pipedrive Lite + Zapier Free</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Grain Starter + Salesforce Starter Suite</td>
                    <td className="px-4 py-2.5 text-muted">$40/seat/mo ($15 + $25)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which meeting tool has the best CRM integration?</h3>
                <p className="text-muted">Grain has the deepest native CRM integration &mdash; it matches participants to CRM contacts, logs highlights and action items to the deal timeline, and supports topic tracking. Fathom and Otter offer CRM sync but with less granularity.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use the free tier of any meeting tool with CRM sync?</h3>
                <p className="text-muted">Not natively. All three tools gate CRM integrations behind paid plans. The workaround is Fathom Free + Zapier Free for basic meeting-to-CRM note pushing, but you lose automatic contact matching.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Fathom really charge a flat rate, not per seat?</h3>
                <p className="text-muted">Fathom Premium is $20/mo flat (not per seat) for unlimited AI summaries. Team ($19/seat/mo) and Business ($25/seat/mo) are per-seat plans that add shared recordings and CRM integrations.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["grain", "fathom", "otter-ai", "pipedrive", "hubspot-crm", "zapier", "make"]}
            comparisons={["pipedrive-vs-hubspot"]}
            guides={[
              "meeting-recording-comparison",
              "automate-new-lead-to-crm",
              "crm-integrations-that-matter",
              "how-to-choose-crm",
            ]}
          />
        </div>
      </article>
    </>
  );
}
