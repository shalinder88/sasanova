import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Pipedrive Lite to Growth: When the Upgrade Is Worth It",
  description:
    "Pipedrive Lite is $14/seat/mo with basic pipeline and limited reports. Growth is $39/seat — a 179% jump. Premium is $49/seat. Here's when each upgrade pays for itself.",
};

export default function WhenPipedriveNeedsUpgrade() {
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
              When Pipedrive Needs an Upgrade
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Cost Threshold
            </span>
            <span className="text-[11px] text-muted">10 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Pipedrive Lite to Growth: When the Upgrade Is Worth It
          </h1>
          <p className="text-lg text-muted">
            Pipedrive Lite at $14/seat/mo is one of the most affordable CRMs on the market. But it&apos;s deliberately limited &mdash; no email automation, no workflow builder, and basic reporting. Growth at $39/seat unlocks the features most sales teams actually need. Here&apos;s exactly when the 179% price jump is worth it.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from Pipedrive and Freshsales vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">What Pipedrive Lite Actually Gives You</h2>
          <p className="text-muted mb-4">
            Pipedrive Lite at $14/seat/mo ($168/seat/yr annually) is a functional CRM for basic pipeline management:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Lead and deal management.</strong> Visual pipeline with drag-and-drop deal stages.</li>
            <li><strong className="text-foreground">3,000 deals.</strong> Open deal limit &mdash; enough for most solo sellers and small teams.</li>
            <li><strong className="text-foreground">30 custom fields.</strong> Customize your CRM data structure, within limits.</li>
            <li><strong className="text-foreground">Basic reporting.</strong> Pre-built reports but no custom report builder.</li>
            <li><strong className="text-foreground">No automations.</strong> No workflow builder, no email sequences, no triggered actions.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">When to Stay on Lite</p>
            <p className="text-sm text-muted">
              You&apos;re a solo founder or 1&ndash;2 person sales team. Your sales process is simple: track deals in a pipeline, log activities, and move deals through stages manually. You don&apos;t need email automation, workflow triggers, or advanced reporting. Lite at $14/seat is genuinely enough for basic pipeline tracking.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Growth at $39/seat: What You Actually Get</h2>
          <p className="text-muted mb-4">
            Growth at $39/seat/mo ($348/seat/yr annually) unlocks the features that make Pipedrive a real sales platform:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Full email sync.</strong> Two-way email sync with Gmail or Outlook &mdash; every email automatically linked to the right deal and contact.</li>
            <li><strong className="text-foreground">Workflow automations.</strong> Trigger actions based on deal stage changes, activity completion, or field updates.</li>
            <li><strong className="text-foreground">Group emailing.</strong> Send emails to multiple contacts at once with tracking.</li>
            <li><strong className="text-foreground">Scheduler.</strong> Built-in meeting scheduling (like Calendly, inside Pipedrive).</li>
            <li><strong className="text-foreground">Better reporting.</strong> Custom reports and dashboards beyond Lite&apos;s pre-built set.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">The Price Jump: Lite vs Growth vs Premium</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Feature Unlock</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lite</td>
                  <td className="px-4 py-2.5">$14/seat/mo</td>
                  <td className="px-4 py-2.5">$168/seat/yr</td>
                  <td className="px-4 py-2.5">Basic pipeline, 3,000 deals, 30 custom fields</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Growth</td>
                  <td className="px-4 py-2.5">$39/seat/mo</td>
                  <td className="px-4 py-2.5">$348/seat/yr</td>
                  <td className="px-4 py-2.5">Automations, email sync, scheduler, group email</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Premium</td>
                  <td className="px-4 py-2.5">$49/seat/mo</td>
                  <td className="px-4 py-2.5">$588/seat/yr</td>
                  <td className="px-4 py-2.5">Advanced reporting, revenue forecasts, e-signatures</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Ultimate</td>
                  <td className="px-4 py-2.5">$99/seat/mo</td>
                  <td className="px-4 py-2.5">$948/seat/yr</td>
                  <td className="px-4 py-2.5">Unlimited everything, security alerts, implementation support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Upgrade: The Exact Triggers</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade from Lite to Growth ($39/seat) when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li>You need email automation &mdash; automated follow-ups when a deal moves stages or goes stale.</li>
              <li>You want full email sync so every conversation is automatically logged to the right contact.</li>
              <li>You&apos;re sending emails to groups of contacts (newsletters to prospects, updates to pipeline).</li>
              <li>You need a scheduler to let prospects book meetings directly.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade from Growth to Premium ($49/seat) when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li>Your team needs advanced reporting with revenue forecasts and custom dashboards.</li>
              <li>You want built-in e-signatures to close deals without switching to DocuSign.</li>
              <li>You&apos;re managing multiple sales teams and need team-level performance reporting.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Team Cost Math</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Lite Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Growth Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1 seat</td>
                  <td className="px-4 py-2.5">$14/mo</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">+$25/mo ($300/yr)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">3 seats</td>
                  <td className="px-4 py-2.5">$42/mo</td>
                  <td className="px-4 py-2.5">$117/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">+$75/mo ($900/yr)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 seats</td>
                  <td className="px-4 py-2.5">$70/mo</td>
                  <td className="px-4 py-2.5">$195/mo</td>
                  <td className="px-4 py-2.5 text-red-400">+$125/mo ($1,500/yr)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 seats</td>
                  <td className="px-4 py-2.5">$140/mo</td>
                  <td className="px-4 py-2.5">$390/mo</td>
                  <td className="px-4 py-2.5 text-red-400">+$250/mo ($3,000/yr)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: Freshsales Growth</h2>
          <p className="text-muted mb-4">
            If Pipedrive Growth at $39/seat feels steep, Freshsales Growth at $11/seat/mo ($108/seat/yr annually) offers a similar feature set:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Visual pipeline + AI contact scoring</strong> (Freddy AI).</li>
            <li><strong className="text-foreground">Email sequences</strong> and basic automation workflows.</li>
            <li><strong className="text-foreground">Built-in phone</strong> &mdash; something Pipedrive charges extra for.</li>
            <li><strong className="text-foreground">2,000 bot sessions/month</strong> for chat automation.</li>
          </ul>
          <p className="text-muted mb-4">
            At $11/seat vs $39/seat, Freshsales Growth is 72% cheaper than Pipedrive Growth. For a 5-person team, that&apos;s $55/mo vs $195/mo &mdash; a $1,680/year difference. The tradeoff: Pipedrive has a more polished UX and a broader integration ecosystem.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Pipedrive have a free plan?</h3>
                <p className="text-muted">No. Pipedrive does not offer a free tier. The cheapest plan is Lite at $14/seat/mo. There is a 14-day free trial for all plans.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is the Lite to Growth jump worth it for a solo founder?</h3>
                <p className="text-muted">Only if you need email automation or full email sync. If you manually manage 10&ndash;20 deals and use Gmail separately, Lite at $14/mo is fine. Once you hit 30+ active deals and need automated follow-ups, Growth pays for itself in time saved.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Premium ($49/seat) worth it over Growth ($39/seat)?</h3>
                <p className="text-muted">For most teams, no. The $10/seat premium gets you advanced reporting, revenue forecasts, and e-signatures. Unless your sales process specifically needs revenue forecasting or you&apos;re spending money on a separate e-signature tool, Growth covers 90% of sales team needs.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How does Pipedrive compare to HubSpot for small teams?</h3>
                <p className="text-muted">HubSpot Free CRM is free but limited. HubSpot Starter is $20/seat. Pipedrive Lite ($14/seat) is cheaper for basic CRM. But HubSpot&apos;s free tier includes marketing tools that Pipedrive doesn&apos;t offer at any price. For pure sales pipeline management, Pipedrive wins on UX and focus.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["pipedrive", "freshsales", "hubspot-crm"]}
            comparisons={["pipedrive-vs-hubspot-crm", "pipedrive-vs-freshsales"]}
            guides={["when-hubspot-stops-being-cheap", "when-freshsales-growth-isnt-enough"]}
          />
        </div>
      </article>
    </>
  );
}
