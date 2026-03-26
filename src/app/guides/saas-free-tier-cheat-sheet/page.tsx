import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Every SaaS Free Tier at a Glance",
  description:
    "All tools with free tiers, exact limits, and what's walled off. One table covering every free SaaS plan we track in 2026.",
};

export default function SaasFreeTierCheatSheetGuide() {
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
            <span className="text-foreground font-medium truncate">Every SaaS Free Tier</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Quick Reference
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Every SaaS Free Tier at a Glance
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 7 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Not all free tiers are created equal. Some are genuinely usable forever (HubSpot CRM, Kit).
            Some are glorified trials that push you to pay within weeks (Mailchimp at 250 contacts).
            This page lists every free SaaS tier we track, with exact limits and what&apos;s behind the paywall.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Email &amp; Newsletter Free Tiers</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Limit</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">What&apos;s Walled Off</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Kit (ConvertKit)</td><td className="px-3 py-2">10,000 subs, unlimited sends</td><td className="px-3 py-2">Advanced automations, integrations</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Brevo</td><td className="px-3 py-2">100,000 contacts, 300 sends/day</td><td className="px-3 py-2">Daily send limit, branding, no A/B</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">beehiiv</td><td className="px-3 py-2">2,500 subs, unlimited sends</td><td className="px-3 py-2">Ad network, referral program, A/B</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Substack</td><td className="px-3 py-2">Unlimited subs, unlimited sends</td><td className="px-3 py-2">10% revenue cut, limited design, no custom domain</td><td className="px-3 py-2 text-yellow-600 font-medium">Good (with catch)</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Mailchimp</td><td className="px-3 py-2">250 contacts, 500 sends/mo</td><td className="px-3 py-2">Most automations, A/B, reporting</td><td className="px-3 py-2 text-red-600 font-medium">Very limited</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Buttondown</td><td className="px-3 py-2">100 subscribers</td><td className="px-3 py-2">Custom domain, automations</td><td className="px-3 py-2 text-red-600 font-medium">Very limited</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">CRM Free Tiers</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Limit</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">What&apos;s Walled Off</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">HubSpot CRM</td><td className="px-3 py-2">Unlimited contacts, basic CRM</td><td className="px-3 py-2">Branding, no automation, basic reporting</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Zoho CRM</td><td className="px-3 py-2">3 users, 5,000 records</td><td className="px-3 py-2">Workflows, custom dashboards</td><td className="px-3 py-2 text-yellow-600 font-medium">Good</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Freshsales</td><td className="px-3 py-2">3 users, basic CRM + phone/chat</td><td className="px-3 py-2">AI scoring, sequences, pipelines</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Attio</td><td className="px-3 py-2">3 seats, 50,000 records</td><td className="px-3 py-2">Advanced reporting, automations, AI</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Automation Free Tiers</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Limit</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">What&apos;s Walled Off</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">n8n (self-hosted)</td><td className="px-3 py-2">Unlimited everything</td><td className="px-3 py-2">Cloud hosting, support</td><td className="px-3 py-2 text-green-600 font-medium">Best (if technical)</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Make</td><td className="px-3 py-2">1,000 ops/mo, 2 scenarios</td><td className="px-3 py-2">More scenarios, custom functions</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Zapier</td><td className="px-3 py-2">100 tasks/mo, 2-step only</td><td className="px-3 py-2">Multi-step, volume, paths</td><td className="px-3 py-2 text-yellow-600 font-medium">Limited</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Pipedream</td><td className="px-3 py-2">100 credits/mo, 3 workflows</td><td className="px-3 py-2">More workflows, credits, timeout</td><td className="px-3 py-2 text-yellow-600 font-medium">Limited</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Bardeen</td><td className="px-3 py-2">100 credits/mo, basic automations</td><td className="px-3 py-2">Premium automations</td><td className="px-3 py-2 text-yellow-600 font-medium">Limited</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Project Management &amp; Productivity Free Tiers</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Limit</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">What&apos;s Walled Off</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Notion</td><td className="px-3 py-2">Unlimited pages, 7-day history</td><td className="px-3 py-2">Longer history, file uploads, automations</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">ClickUp</td><td className="px-3 py-2">Unlimited tasks + members, 100MB</td><td className="px-3 py-2">Storage, integrations, dashboards</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Trello</td><td className="px-3 py-2">Unlimited boards</td><td className="px-3 py-2">Advanced views, automations, storage</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Jira</td><td className="px-3 py-2">10 users</td><td className="px-3 py-2">Advanced roadmaps, audit logs</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Linear</td><td className="px-3 py-2">250 issues</td><td className="px-3 py-2">Unlimited issues, advanced features</td><td className="px-3 py-2 text-yellow-600 font-medium">Good</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Asana</td><td className="px-3 py-2">2 users</td><td className="px-3 py-2">Timeline, forms, dashboards</td><td className="px-3 py-2 text-yellow-600 font-medium">Very limited</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Monday.com</td><td className="px-3 py-2">2 seats</td><td className="px-3 py-2">Timeline, integrations, automations</td><td className="px-3 py-2 text-yellow-600 font-medium">Very limited</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">AI, Communication, Design &amp; Other Free Tiers</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Limit</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">ChatGPT</td><td className="px-3 py-2">AI</td><td className="px-3 py-2">GPT-4o mini, limited GPT-4o</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Claude</td><td className="px-3 py-2">AI</td><td className="px-3 py-2">Sonnet, limited daily messages</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Grammarly</td><td className="px-3 py-2">AI Writing</td><td className="px-3 py-2">Basic grammar, 100 AI prompts/mo</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Slack</td><td className="px-3 py-2">Communication</td><td className="px-3 py-2">90-day history, 10 integrations</td><td className="px-3 py-2 text-yellow-600 font-medium">Limited</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Discord</td><td className="px-3 py-2">Communication</td><td className="px-3 py-2">Unlimited history, unlimited users</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Figma</td><td className="px-3 py-2">Design</td><td className="px-3 py-2">3 Figma + 3 FigJam files</td><td className="px-3 py-2 text-yellow-600 font-medium">Good</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Canva</td><td className="px-3 py-2">Design</td><td className="px-3 py-2">Basic templates, limited assets</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Supabase</td><td className="px-3 py-2">Developer</td><td className="px-3 py-2">500MB DB, pauses after 7 days</td><td className="px-3 py-2 text-yellow-600 font-medium">Good (with catch)</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Vercel</td><td className="px-3 py-2">Developer</td><td className="px-3 py-2">Hobby projects, 100GB bandwidth</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Calendly</td><td className="px-3 py-2">Scheduling</td><td className="px-3 py-2">1 event type</td><td className="px-3 py-2 text-red-600 font-medium">Very limited</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Cal.com</td><td className="px-3 py-2">Scheduling</td><td className="px-3 py-2">Unlimited event types, 1 user</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Freshdesk</td><td className="px-3 py-2">Help Desk</td><td className="px-3 py-2">Up to 2 agents, basic ticketing</td><td className="px-3 py-2 text-yellow-600 font-medium">Good</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Fathom</td><td className="px-3 py-2">Meeting</td><td className="px-3 py-2">Unlimited recordings (limited features)</td><td className="px-3 py-2 text-green-600 font-medium">Great</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">tl;dv</td><td className="px-3 py-2">Meeting</td><td className="px-3 py-2">Unlimited recordings + transcription</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Tally</td><td className="px-3 py-2">Forms</td><td className="px-3 py-2">Unlimited forms + responses</td><td className="px-3 py-2 text-green-600 font-medium">Excellent</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which free tiers are actually usable long-term?</h3>
                <p>HubSpot CRM (unlimited contacts), Kit (10K subscribers), Notion (unlimited pages), ClickUp (unlimited tasks), Cal.com (unlimited events), Tally (unlimited forms), and Discord (unlimited everything) are genuinely usable indefinitely without hitting painful walls.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which free tiers are basically trials?</h3>
                <p>Mailchimp (250 contacts), Buttondown (100 subscribers), Asana (2 users), Monday.com (2 seats), and Calendly (1 event type) are so limited that most users outgrow them within weeks. They&apos;re effectively trials with no end date.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I build a complete business stack for $0?</h3>
                <p>Yes. HubSpot CRM (free) + Kit Newsletter (free, 10K subs) + Make (free, 1K ops) + ClickUp (free, unlimited tasks) + Cal.com (free, unlimited scheduling) + Tally (free forms) gives you CRM, email, automation, project management, scheduling, and forms for $0/month. Each tool has limitations, but it&apos;s genuinely functional.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={[]}
            comparisons={[]}
            guides={[
              "saas-pricing-cheat-sheet",
              "best-free-tools-startups",
              "best-free-crm-2026",
              "best-free-email-tool-2026",
            ]}
          />
        </div>
      </div>
    </>
  );
}
