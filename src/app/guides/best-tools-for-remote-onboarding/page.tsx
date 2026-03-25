import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Remote Employee Onboarding Stack: HR + Docs + Communication",
  description:
    "Build a remote onboarding system with BambooHR or Gusto for HR, Notion for docs/wiki, Slack or Discord for chat, and Loom for async video. Exact pricing from verified sources.",
};

export default function BestToolsForRemoteOnboardingPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Remote Onboarding Stack</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Best For Use Case
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Remote Employee Onboarding Stack: HR + Docs + Communication
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Remote onboarding fails when new hires have to piece together information from five
            different Slack DMs. This guide builds a four-tool stack that handles HR paperwork,
            documentation, team communication, and async walkthroughs &mdash; with exact pricing
            at every tier.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Stack */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Four-Layer Onboarding Stack</h2>
            <p className="text-muted leading-relaxed mb-3">
              Every remote onboarding system needs four layers: <strong className="text-foreground">HR management</strong> (paperwork,
              payroll, compliance), <strong className="text-foreground">documentation</strong> (wiki, SOPs, handbooks),
              <strong className="text-foreground"> real-time communication</strong> (chat, channels, huddles), and
              <strong className="text-foreground"> async video</strong> (walkthroughs, intros, training). Here are the
              best tools for each layer with verified pricing.
            </p>
          </section>

          {/* Layer 1: HR */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 1: HR Management &mdash; BambooHR vs Gusto</h2>
            <p className="text-muted leading-relaxed mb-4">
              Your HR tool handles offer letters, I-9 forms, benefits enrollment, and the
              compliance paperwork that makes remote hiring legally sound. Both BambooHR and Gusto
              handle onboarding well, but they approach it differently.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">BambooHR</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Gusto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pricing model</td>
                    <td className="px-4 py-2.5 text-muted">~$10/employee/mo (Core)<br />~$17/employee/mo (Pro)</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo base + $6/person/mo (Simple)<br />$80/mo base + $12/person/mo (Plus)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Cost at 10 employees</td>
                    <td className="px-4 py-2.5 text-muted">~$100&ndash;$170/mo</td>
                    <td className="px-4 py-2.5 text-muted">$109&ndash;$200/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Cost at 25 employees</td>
                    <td className="px-4 py-2.5 text-muted">~$250/mo flat rate (25 or fewer)</td>
                    <td className="px-4 py-2.5 text-muted">$199&ndash;$380/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Built-in payroll</td>
                    <td className="px-4 py-2.5 text-muted">Add-on (separate cost)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Included on all plans</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Onboarding features</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Strong: checklists, e-signatures, new-hire portal</td>
                    <td className="px-4 py-2.5 text-muted">Good: offer letters, checklists, self-service</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Performance mgmt</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Pro plan and above</td>
                    <td className="px-4 py-2.5 text-muted">Add-on ($3/person/mo)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Best for</td>
                    <td className="px-4 py-2.5 text-muted">HR-focused teams (25&ndash;350 employees)</td>
                    <td className="px-4 py-2.5 text-muted">Small businesses needing payroll + HR together</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Verdict:</strong> Choose <strong>Gusto</strong> if payroll is your primary need and you have under 25 employees.
                Choose <strong>BambooHR</strong> if onboarding workflows and performance management matter more than payroll.
              </p>
            </div>
          </section>

          {/* Layer 2: Docs */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 2: Documentation &mdash; Notion</h2>
            <p className="text-muted leading-relaxed mb-4">
              New hires need a single place to find the employee handbook, SOPs, team wiki,
              and role-specific documentation. Notion handles all of this in one workspace.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key for Onboarding</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited pages, 7-day history, 10 guests</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Plus</td>
                    <td className="px-4 py-2.5 text-muted">$12/user/mo (monthly) &bull; $10/user/mo (annual)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited uploads, 30-day history, custom automations</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                    <td className="px-4 py-2.5 text-muted">$24/user/mo (monthly) &bull; $20/user/mo (annual)</td>
                    <td className="px-4 py-2.5 text-muted">90-day history, advanced permissions, bulk PDF export</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              For onboarding, Notion Plus at <strong className="text-foreground">$12/user/mo</strong> is the sweet spot.
              The 30-day page history and custom automations let you build onboarding checklists
              that auto-assign when new team members are added.
            </p>
          </section>

          {/* Layer 3: Communication */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 3: Real-Time Communication &mdash; Slack vs Discord</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Slack</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Discord</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free tier</td>
                    <td className="px-4 py-2.5 text-muted">90-day message history, 10 integrations</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited history, unlimited integrations</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Paid plan</td>
                    <td className="px-4 py-2.5 text-muted">Pro: $8.75/user/mo</td>
                    <td className="px-4 py-2.5 text-muted">Nitro: $9.99/mo (per-user, optional)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Cost at 10 users</td>
                    <td className="px-4 py-2.5 text-muted">$87.50/mo (Pro)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/mo (free is sufficient)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Cost at 25 users</td>
                    <td className="px-4 py-2.5 text-muted">$218.75/mo (Pro)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Business integrations</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">2,600+ apps, deep SaaS connections</td>
                    <td className="px-4 py-2.5 text-muted">Limited business integrations, custom bots</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Compliance</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">SOC 2, GDPR, HIPAA (Enterprise)</td>
                    <td className="px-4 py-2.5 text-muted">GDPR only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Voice channels</td>
                    <td className="px-4 py-2.5 text-muted">Huddles (ad-hoc audio/video)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Always-on voice rooms (great for remote teams)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Verdict:</strong> Choose <strong>Slack Pro</strong> ($8.75/user/mo) if you need business-grade
                integrations and compliance. Choose <strong>Discord</strong> (free) if budget matters more than
                enterprise features and you want always-on voice channels for team presence.
              </p>
            </div>
          </section>

          {/* Layer 4: Async Video */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 4: Async Video &mdash; Loom</h2>
            <p className="text-muted leading-relaxed mb-4">
              New hires retain more from a 3-minute screen recording than a 10-page document.
              Loom lets you record walkthroughs, tool demos, and team introductions that new
              employees can watch on their own schedule.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Starter (Free)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">25 videos/person, 5-min recordings, 720p</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                    <td className="px-4 py-2.5 text-muted">$18/user/mo (monthly) &bull; $15/user/mo (annual)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited videos, unlimited recording, 4K</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Business + AI</td>
                    <td className="px-4 py-2.5 text-muted">$24/user/mo (monthly) &bull; $20/user/mo (annual)</td>
                    <td className="px-4 py-2.5 text-muted">Auto-enhancement, filler word removal, meeting recaps</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              For onboarding, Loom Starter (free) is enough if each team member records under 25
              videos. For building a reusable onboarding library, Loom Business at
              <strong className="text-foreground"> $18/user/mo</strong> removes all limits.
            </p>
          </section>

          {/* Total Stack Cost */}
          <section>
            <h2 className="text-xl font-bold mb-4">Total Stack Cost by Team Size</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Stack Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10 employees</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">25 employees</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Budget Stack</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$109/mo<br /><span className="text-xs font-normal text-muted">Gusto Simple + Notion Free + Discord + Loom Free</span></td>
                    <td className="px-4 py-2.5 text-accent font-semibold">~$199/mo<br /><span className="text-xs font-normal text-muted">Gusto Simple + Notion Free + Discord + Loom Free</span></td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Standard Stack</td>
                    <td className="px-4 py-2.5 text-muted">~$397/mo<br /><span className="text-xs">BambooHR Core + Notion Plus + Slack Pro + Loom Business</span></td>
                    <td className="px-4 py-2.5 text-muted">~$868/mo<br /><span className="text-xs">BambooHR flat + Notion Plus + Slack Pro + Loom Business</span></td>
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
                  Can I use just Notion for everything including HR?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Notion handles docs and wikis well, but it cannot process payroll, file taxes,
                  manage benefits, or handle I-9 compliance. You need a dedicated HR tool for legal
                  and financial onboarding requirements.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is Discord professional enough for a business?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Many startups and tech companies use Discord successfully. The lack of enterprise
                  compliance (no SSO, limited audit logs) is the main limitation. If you need SOC 2
                  compliance or HIPAA, choose Slack.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Do I need Loom if I already have Slack?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Slack has Clips for short video messages, but Loom provides a permanent, searchable
                  video library with transcriptions. For onboarding, having rewatchable training videos
                  is far more valuable than ephemeral Slack clips.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["bamboohr", "gusto", "notion", "slack", "discord", "loom"]}
            comparisons={["bamboohr-vs-gusto", "slack-vs-discord"]}
            guides={["hr-payroll-small-business", "remote-team-communication", "building-knowledge-base"]}
          />
        </div>
      </article>
    </>
  );
}
