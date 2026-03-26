import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Set Up a Welcome Email Sequence: 4 Platforms Compared",
  description:
    "Build a welcome email sequence on Kit, ActiveCampaign, Mailchimp, or beehiiv. Which tier unlocks automations, exact pricing, and step-by-step setup for each platform.",
};

export default function AutomateWelcomeEmailSequencePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Welcome Email Sequence</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Workflow Recipe
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Set Up a Welcome Email Sequence: 4 Platforms Compared
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            A welcome sequence is the single highest-ROI automation you can build.
            But the tier that unlocks automations varies wildly across platforms.
            Here&apos;s which plan you actually need on Kit, ActiveCampaign, Mailchimp,
            and beehiiv &mdash; and the step-by-step setup for each.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Which Tier Unlocks Automations?</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier Automations?</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier for Sequences</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit)</td>
                    <td className="px-4 py-2.5 text-muted">No &mdash; Newsletter (free) has limited automations</td>
                    <td className="px-4 py-2.5 text-muted">Creator ($39/mo at 1K subs)</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td>
                    <td className="px-4 py-2.5 text-muted">No free tier</td>
                    <td className="px-4 py-2.5 text-muted">Starter ($15/mo at 1K contacts)</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">Limited &mdash; single-step only on Free</td>
                    <td className="px-4 py-2.5 text-muted">Standard ($20/mo at 500 contacts)</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">Limited automation on Launch (free)</td>
                    <td className="px-4 py-2.5 text-muted">Scale ($49/mo)</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong>Cheapest option for a welcome sequence:</strong> ActiveCampaign Starter at $15/mo.
              It includes basic automations from the lowest tier. Kit and beehiiv both require higher-tier plans
              for full automation access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Kit (ConvertKit): Visual Automation Builder</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Go to Automations &rarr; Create Automation &rarr; choose &ldquo;Welcome Sequence&rdquo; template.</p>
                  <p className="text-muted text-sm mt-1">Kit&apos;s visual builder lets you drag-and-drop email steps with delays between them. Requires Creator plan ($39/mo at 1,000 subscribers).</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Set trigger to &ldquo;Subscribes to a form&rdquo; and add 3&ndash;5 email steps with 1&ndash;2 day delays.</p>
                  <p className="text-muted text-sm mt-1">Kit counts by subscribers, not sends. 10,000 subscribers on Newsletter (free) send unlimited emails but without automation. Creator at 1K subscribers = $39/mo; at 5K = $79/mo; at 10K = $119/mo.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">ActiveCampaign: Most Powerful Automation</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Go to Automations &rarr; Create &rarr; Start from scratch or use a recipe.</p>
                  <p className="text-muted text-sm mt-1">ActiveCampaign has the deepest automation builder in this comparison. Starter ($15/mo) includes basic automations. Plus ($49/mo) unlocks CRM, lead scoring, and split paths.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Add conditional splits based on subscriber behavior.</p>
                  <p className="text-muted text-sm mt-1">If subscriber opens email 1, send a follow-up in 1 day. If not, wait 3 days and re-send with different subject. This level of branching is available on Starter &mdash; no upgrade needed.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Mailchimp: Customer Journey Builder</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Go to Automations &rarr; Customer Journeys &rarr; Start from scratch.</p>
                  <p className="text-muted text-sm mt-1">Free plan allows single-step automations only. Multi-step welcome sequences require Standard ($20/mo at 500 contacts). Essentials ($13/mo) unlocks basic automations but not the full journey builder.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Set starting point to &ldquo;Signs up&rdquo; and add email + delay steps.</p>
                  <p className="text-muted text-sm mt-1">Mailchimp&apos;s journey builder is visual but less intuitive than Kit&apos;s. Contact counting is aggressive &mdash; unsubscribed contacts still count toward your limit until archived.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">beehiiv: Newsletter-First Automation</h2>
            <div className="space-y-4">
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">1.</span>
                <div>
                  <p className="text-foreground font-medium">Go to Automations &rarr; Create Automation &rarr; set trigger to &ldquo;New Subscriber.&rdquo;</p>
                  <p className="text-muted text-sm mt-1">beehiiv Launch (free) includes basic automations. Scale ($49/mo) unlocks the full automation builder with conditional branching and A/B testing. Launch supports unlimited subscribers up to 2,500.</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 rounded-lg border border-border bg-surface">
                <span className="text-accent font-bold text-sm mt-0.5">2.</span>
                <div>
                  <p className="text-foreground font-medium">Build 3&ndash;5 step sequence with email + delay actions.</p>
                  <p className="text-muted text-sm mt-1">beehiiv&apos;s automation builder is newer and simpler than ActiveCampaign&apos;s. For a basic welcome sequence, Launch (free) may be sufficient. Scale adds unlimited subscribers + full automation for $49/mo.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which is cheapest for a welcome sequence?</h3>
                <p className="text-muted">ActiveCampaign Starter at $15/mo is the cheapest paid option with full automation. beehiiv Launch (free) offers basic automation at $0 if you have under 2,500 subscribers. Mailchimp Free allows single-step only.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many emails should a welcome sequence have?</h3>
                <p className="text-muted">3&ndash;5 emails over 7&ndash;14 days is the standard. Email 1: immediate welcome and value delivery. Emails 2&ndash;4: your best content or key information. Email 5: soft ask or CTA. More than 7 emails risks fatigue.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Zapier instead of a native automation builder?</h3>
                <p className="text-muted">Not recommended for email sequences. Zapier can trigger a single email, but sequences with delays, branching, and open tracking require a dedicated email platform&apos;s automation builder. Zapier is better for connecting tools, not building email flows.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["convertkit", "activecampaign", "mailchimp", "beehiiv"]}
            comparisons={["mailchimp-vs-convertkit", "mailchimp-vs-activecampaign", "beehiiv-vs-convertkit"]}
            guides={[
              "email-automation-sequences-compared",
              "how-to-choose-email-platform",
              "best-email-tool-creators",
              "when-mailchimp-becomes-expensive",
            ]}
          />
        </div>
      </article>
    </>
  );
}
