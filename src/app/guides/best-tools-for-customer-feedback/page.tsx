import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Customer Feedback Stack: Forms + Analytics + Action",
  description:
    "Collect customer feedback with Typeform or Tally, understand behavior with PostHog or Hotjar, and act on it with Intercom or Crisp. Exact pricing from verified sources.",
};

export default function BestToolsForCustomerFeedbackPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Customer Feedback Stack</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Best For Use Case
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Customer Feedback Stack: Forms + Analytics + Action
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Collecting feedback without acting on it is worse than not collecting it at all. This
            three-layer stack captures what customers say, shows what they do, and gives you a
            channel to respond &mdash; all with verified pricing.
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

          {/* Layer 1: Surveys */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 1: Surveys &amp; Forms &mdash; Typeform vs Tally</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Typeform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tally</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free tier</td>
                    <td className="px-4 py-2.5 text-muted">10 responses/mo, 10 questions/form</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited forms &amp; submissions</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Paid plan</td>
                    <td className="px-4 py-2.5 text-muted">Basic: $39/mo (100 responses)<br />Plus: $79/mo (1,000 responses)</td>
                    <td className="px-4 py-2.5 text-muted">Pro: $29/mo (custom domain, remove branding)<br />Business: $89/mo (team features)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Annual pricing</td>
                    <td className="px-4 py-2.5 text-muted">Basic: $26/mo ($312/yr)<br />Plus: $52.67/mo ($632/yr)</td>
                    <td className="px-4 py-2.5 text-muted">Pro: $25/mo ($300/yr)<br />Business: $79/mo ($948/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Form style</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Conversational (one-at-a-time)</td>
                    <td className="px-4 py-2.5 text-muted">Notion-like (traditional + modern)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Logic jumps</td>
                    <td className="px-4 py-2.5 text-muted">Yes (all plans)</td>
                    <td className="px-4 py-2.5 text-muted">Yes (free tier)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Verdict:</strong> Choose <strong>Tally Free</strong> if you need unlimited responses on a budget.
                Choose <strong>Typeform</strong> if conversion rate matters and you are willing to pay for the
                one-question-at-a-time UX.
              </p>
            </div>
          </section>

          {/* Layer 2: Behavior Analytics */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 2: Behavior Analytics &mdash; PostHog vs Hotjar</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">PostHog</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Hotjar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free tier</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">1M events, 5K session replays, 1M feature flag requests</td>
                    <td className="px-4 py-2.5 text-muted">20K monthly sessions, unlimited heatmaps, 1-month retention</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Paid plan</td>
                    <td className="px-4 py-2.5 text-muted">Pay-as-you-go: ~$0.00005/event beyond free tier</td>
                    <td className="px-4 py-2.5 text-muted">Growth: $49/mo ($40/mo annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Session recordings</td>
                    <td className="px-4 py-2.5 text-muted">5K free, then pay-per-recording</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Included on all plans</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Heatmaps</td>
                    <td className="px-4 py-2.5 text-muted">Available (included)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Core feature, unlimited on free</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Product analytics</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Full: funnels, retention, paths, cohorts</td>
                    <td className="px-4 py-2.5 text-muted">Basic funnels only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Built-in surveys</td>
                    <td className="px-4 py-2.5 text-muted">1,500 surveys/mo free</td>
                    <td className="px-4 py-2.5 text-muted">Included on all plans</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Self-hosted option</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Yes (open source)</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Verdict:</strong> Choose <strong>PostHog</strong> if you want product analytics + behavior tracking
                in one tool (especially with the generous 1M events free tier). Choose <strong>Hotjar</strong> if
                you primarily need visual heatmaps and session recordings with minimal setup.
              </p>
            </div>
          </section>

          {/* Layer 3: In-App Messaging */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 3: In-App Communication &mdash; Intercom vs Crisp</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Intercom</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Crisp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free tier</td>
                    <td className="px-4 py-2.5 text-muted">No (14-day trial only)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Yes: 2 seats, chat widget, shared inbox</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Entry plan</td>
                    <td className="px-4 py-2.5 text-muted">Essential: $39/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Mini: $45/mo flat (4 seats)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mid-tier plan</td>
                    <td className="px-4 py-2.5 text-muted">Advanced: $99/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Essentials: $95/mo flat (10 seats)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pricing model</td>
                    <td className="px-4 py-2.5 text-muted">Per-seat + AI resolution fees ($0.99/resolution)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Flat-rate per workspace (not per seat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Cost at 5 agents</td>
                    <td className="px-4 py-2.5 text-muted">$195/mo (Essential) + AI costs</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$95/mo (Essentials, includes 10 seats)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">AI chatbot</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Fin AI Agent (best in class)</td>
                    <td className="px-4 py-2.5 text-muted">AI chatbot (Essentials+)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Knowledge base</td>
                    <td className="px-4 py-2.5 text-muted">Included on all plans</td>
                    <td className="px-4 py-2.5 text-muted">Included on Essentials+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Verdict:</strong> Choose <strong>Crisp</strong> for budget-friendly flat-rate pricing (especially
                if you have 3&ndash;10 agents). Choose <strong>Intercom</strong> if you need the most advanced AI-powered
                support and can absorb per-seat and per-resolution costs.
              </p>
            </div>
          </section>

          {/* Total Cost */}
          <section>
            <h2 className="text-xl font-bold mb-4">Total Feedback Stack Cost</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Budget Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Stack</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$0 Stack</td>
                    <td className="px-4 py-2.5 text-muted">Tally Free + PostHog Free + Crisp Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Growth Stack</td>
                    <td className="px-4 py-2.5 text-muted">Tally Free + Hotjar Growth + Crisp Essentials</td>
                    <td className="px-4 py-2.5 text-muted">$144/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Premium Stack</td>
                    <td className="px-4 py-2.5 text-muted">Typeform Basic + PostHog + Intercom Essential (3 seats)</td>
                    <td className="px-4 py-2.5 text-muted">$156/mo + usage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can PostHog replace both Hotjar and a survey tool?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Partially. PostHog includes session replay, heatmaps, and built-in surveys (1,500/mo free).
                  If you need basic feedback collection and behavior analytics, PostHog alone may be sufficient.
                  Typeform and Tally are better for complex, branded survey experiences.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is Crisp Free good enough for a startup?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes, for early-stage startups. Crisp Free gives you 2 seats, a chat widget, and a
                  shared inbox with unlimited messages. Upgrade to Essentials ($95/mo flat for 10 seats)
                  when you need the AI chatbot or knowledge base.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["typeform", "tally", "posthog", "hotjar", "intercom", "crisp"]}
            comparisons={["typeform-vs-tally", "posthog-vs-hotjar", "intercom-vs-crisp"]}
            guides={["choosing-analytics-tool", "customer-support-stack"]}
          />
        </div>
      </article>
    </>
  );
}
