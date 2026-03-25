import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The $0 Startup Stack: Every Free Tool That's Actually Worth Using",
  description:
    "Most free tool lists include tools that cripple you at scale. Here's what's genuinely free AND genuinely useful — with honest limits, setup costs, and migration warnings.",
};

export default function BestFreeToolsStartups() {
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
              The $0 Startup Stack
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Stack Building
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The $0 Startup Stack: Every Free Tool That&apos;s Actually Worth Using
          </h1>
          <p className="text-lg text-muted">
            Most &ldquo;best free tools&rdquo; lists are marketing funnels disguised as editorial. Half the picks are free for 14 days, then $49/month. The other half are genuinely free but cap you at 100 records or 3 users. Here&apos;s a different list. Every tool below has a free tier that you can actually run a startup on for months &mdash; sometimes years &mdash; without hitting a paywall that breaks your workflow.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">The Ground Rules for This List</h2>
          <p className="text-muted mb-4">
            To make this list, a tool had to pass three filters. First: the free tier can&apos;t be a glorified trial. If it expires in 30 days, it&apos;s not free. Second: it has to do something useful at the free level, not just tease you with a dashboard and lock every feature behind an upgrade prompt. Third: you need to be able to export your data when you leave. Tools that hold your work hostage aren&apos;t free &mdash; they&apos;re traps with a delayed invoice.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The $0 Stack, Tool by Tool</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">Notion Free &mdash; Your Operating System</h3>
          <p className="text-muted mb-4">
            Unlimited pages, unlimited blocks, up to 10 guest collaborators. You get databases, kanban boards, docs, and wikis. The limits that matter: file uploads cap at 5MB per file, and you lose version history beyond 7 days. For a team of 1&ndash;3, that&apos;s fine. Notion becomes your wiki, your project tracker, your meeting notes hub, and your internal docs &mdash; all without spending a dollar. The Plus plan starts at $10/user/month when you need unlimited guests or larger file uploads.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">ClickUp Free &mdash; Task Management</h3>
          <p className="text-muted mb-4">
            Unlimited tasks, unlimited members, 100MB storage. You get multiple views (list, board, calendar), time tracking, and basic automations. The catch: you&apos;re limited to 100 automations per month and 100 uses of custom fields. For a small team tracking tasks and sprints, that&apos;s plenty. Where it gets tight: reporting is basic on Free, and you can&apos;t do custom dashboards. Upgrade trigger: when you need Gantt charts or portfolio views, the Unlimited plan is $7/member/month.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">beehiiv Launch &mdash; Newsletter Platform</h3>
          <p className="text-muted mb-4">
            Up to 2,500 subscribers for free. You get custom domains, landing pages, a referral program, and basic analytics. No beehiiv branding on emails. That last part is unusual &mdash; most free newsletter tools slap their logo on everything. The limit: you can&apos;t use automations or A/B testing on Launch. But for getting a newsletter off the ground and growing to your first 2,500 readers? It&apos;s the best free option available. The Scale plan at $39/month unlocks automations and removes the subscriber cap (up to 10K).
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">HubSpot Free CRM &mdash; Contact Management</h3>
          <p className="text-muted mb-4">
            Up to 1,000,000 contacts. Not a typo. One million. You get deal tracking, a pipeline, email logging, meeting scheduling, and basic reporting. The catch is everywhere else: you&apos;re limited to 5 email templates, 1 pipeline, and HubSpot branding on all forms and landing pages. The real constraint? The free CRM is designed to get you hooked on the ecosystem. Starter is $20/month, but Professional jumps to $800+/month. Know that pricing cliff before you build 200 workflows around HubSpot&apos;s automation.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Cal.com (Self-Hosted) &mdash; Scheduling</h3>
          <p className="text-muted mb-4">
            Unlimited event types, unlimited bookings, unlimited calendars. The catch: you host it yourself. That means a VPS ($5&ndash;10/month on Railway, Render, or a DigitalOcean droplet), Docker setup, and occasional maintenance. Cal.com&apos;s cloud-hosted free tier gives you one event type and one calendar &mdash; which is usable but limiting. Self-hosting removes all limits. If you know Docker or have someone who does, this replaces Calendly&apos;s $16/month plan entirely. If Docker makes you nervous, use the cloud free tier and upgrade to Teams at $15/user/month when you need more.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Canva Free &mdash; Design</h3>
          <p className="text-muted mb-4">
            Access to 250,000+ templates, basic photo editing, and collaboration for up to 5 people. The limits are real: no background remover, no brand kit, no magic resize, and a smaller asset library. For social media graphics, basic presentations, and simple marketing materials, Free handles 70% of what a startup needs. The remaining 30% &mdash; brand consistency tools, premium stock photos, resizing across formats &mdash; requires Pro at $13/month. Most startups can stay on Free for 6+ months.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Plausible Community Edition &mdash; Analytics</h3>
          <p className="text-muted mb-4">
            Self-hosted, privacy-focused web analytics. No visitor limits, no data caps. The script is under 1KB (Google Analytics is 45KB+), it&apos;s GDPR-compliant without cookie banners, and the dashboard is genuinely pleasant to use. Setup cost: a server ($5&ndash;10/month), Docker, and about 30 minutes. The cloud-hosted version starts at $9/month for up to 10K pageviews. If you don&apos;t need funnel analysis, cohort tracking, or session recordings, Plausible replaces Google Analytics cleanly.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">PostHog &mdash; Product Analytics</h3>
          <p className="text-muted mb-4">
            1 million events per month free on the cloud-hosted plan. You get event tracking, funnels, session recordings (5,000/month free), feature flags, and A/B testing. This is a serious product analytics tool &mdash; not a watered-down demo. The free tier is generous enough for most startups through their first year. PostHog charges $0.00031 per event beyond 1M. At 5 million events, that&apos;s roughly $124/month. Know your event volume before it catches you off guard.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Supabase Free Tier &mdash; Backend/Database</h3>
          <p className="text-muted mb-4">
            500MB database storage, 1GB file storage, 50,000 monthly active users, and edge functions. You get a full Postgres database with real-time subscriptions, authentication, and auto-generated APIs. The limit that bites first: 500MB of database storage sounds like a lot, but if you&apos;re storing files in the database (don&apos;t), you&apos;ll hit it fast. Use the file storage for files. The Pro plan at $25/month bumps you to 8GB and removes the project pause policy (free projects pause after 1 week of inactivity).
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">n8n Community Edition &mdash; Automation</h3>
          <p className="text-muted mb-4">
            Self-hosted, unlimited workflows, unlimited executions. This is the open-source alternative to Zapier and Make. No per-task pricing, no workflow limits. The tradeoff: you host and maintain it. Some integrations require API keys you configure yourself rather than OAuth click-through. Setup is Docker-based, runs fine on a $5/month VPS. The cloud version starts at $20/month for 2,500 executions. For anyone comfortable with self-hosting, n8n gives you Zapier Professional ($69/month) level automation for the cost of a cheap server.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What &ldquo;Free&rdquo; Actually Costs</h2>
          <p className="text-muted mb-4">
            Free tools have three hidden costs, and ignoring them will burn you.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Setup time.</strong> Self-hosted tools (Cal.com, Plausible, n8n, PostHog) need 1&ndash;4 hours each to configure. Cloud-free tools (Notion, ClickUp, beehiiv) take 15&ndash;30 minutes. Budget a full day to set up this entire stack.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Feature limits that slow you down.</strong> Canva Free means manually resizing every graphic. HubSpot Free means one pipeline, period. ClickUp Free means basic reporting. These aren&apos;t dealbreakers at the start, but they accumulate. By month 6, you might spend 3&ndash;5 hours per week working around free tier constraints.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Migration pain.</strong> The longer you use a tool, the harder it is to leave. Notion exports to Markdown but loses database relations. HubSpot lets you export contacts but not workflow logic. beehiiv exports subscriber lists but not automation sequences. Plan your exit path before you get comfortable.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Traps to Avoid</h2>
          <p className="text-muted mb-4">
            Some free tools aren&apos;t on this list for a reason. <strong className="text-foreground">Airtable</strong> gives you 1,000 records per base on Free &mdash; that sounds fine until you realize a CRM with 1,000 contacts and a project tracker with 1,000 tasks fills two bases and you&apos;re done. <strong className="text-foreground">Trello</strong> caps you at 10 boards and one Power-Up per board. <strong className="text-foreground">Slack Free</strong> now hides messages after 90 days &mdash; your team knowledge disappears quarterly. <strong className="text-foreground">Mailchimp</strong> removed its free tier for new users and the cheapest plan starts at $13/month for 500 contacts.
          </p>
          <p className="text-muted mb-4">
            Watch for tools that are free but charge for export. If you can&apos;t get your data out in a standard format (CSV, JSON, Markdown), you don&apos;t own your data &mdash; you&apos;re renting access to it.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Start Paying</h2>
          <p className="text-muted mb-4">
            Every tool has a trigger point where the free tier stops making sense. Here&apos;s the cheat sheet:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li><strong className="text-foreground">Notion:</strong> When you exceed 10 collaborators or need admin controls</li>
            <li><strong className="text-foreground">ClickUp:</strong> When you need custom dashboards or Gantt views</li>
            <li><strong className="text-foreground">beehiiv:</strong> When you pass 2,500 subscribers or need automations</li>
            <li><strong className="text-foreground">HubSpot:</strong> When you need more than 1 pipeline or want to remove branding</li>
            <li><strong className="text-foreground">Cal.com:</strong> When you need team scheduling or routing (if on cloud free)</li>
            <li><strong className="text-foreground">Canva:</strong> When brand consistency matters or you&apos;re resizing constantly</li>
            <li><strong className="text-foreground">Plausible:</strong> When you want cloud hosting over self-managed ($9/month)</li>
            <li><strong className="text-foreground">PostHog:</strong> When you exceed 1M events/month consistently</li>
            <li><strong className="text-foreground">Supabase:</strong> When you hit 500MB storage or need uptime guarantees</li>
            <li><strong className="text-foreground">n8n:</strong> When you want managed hosting or OAuth integrations ($20/month)</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Use This Stack</h2>
          <p className="text-muted mb-4">
            If you have funding and your time is worth more than $50/hour, pay for tools. The hours you spend configuring self-hosted n8n or working around Canva Free limitations have a real cost. A funded startup with 10 employees should be spending $200&ndash;500/month on software, not zero.
          </p>
          <p className="text-muted mb-4">
            If you need enterprise security, SSO, audit logs, or compliance certifications, free tiers won&apos;t have them. Period.
          </p>
          <p className="text-muted mb-6">
            This stack is for bootstrapped founders, solo operators, and pre-revenue teams who need to move fast without burning cash on software subscriptions. For that audience, these 10 tools cover project management, CRM, email, design, analytics, automation, scheduling, and backend infrastructure &mdash; all at $0/month plus a few hours of setup.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What free tools do startups actually need?</h3>
                <p>At minimum: a project management tool (ClickUp or Notion free tier), a CRM (HubSpot free), email marketing (beehiiv or Kit free tier), analytics (Plausible or PostHog free tier), and automation (Zapier or Make free tier). This covers the essentials at $0/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Are free tool tiers good enough for real businesses?</h3>
                <p>Yes, for early-stage businesses. Free tiers cover the fundamentals until you hit specific limits. The trap is upgrading too early. Stay on free tiers until you hit a concrete wall &mdash; subscriber caps, task limits, or missing features that block a specific workflow.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should a startup start paying for software?</h3>
                <p>Pay when a free tier limit directly blocks revenue or growth. Common triggers: exceeding email subscriber caps, needing team collaboration features, or requiring integrations that are paid-only. For most startups, the first paid tool upgrade happens around $1K&ndash;5K monthly revenue.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "notion", "zapier", "beehiiv", "cal-com"]}
            comparisons={["hubspot-crm-vs-pipedrive", "zapier-vs-make", "calendly-vs-cal-com"]}
            guides={[
              "best-tools-saas-startup",
              "crm-solo-founder",
              "newsletter-stack",
            ]}
          />
        </div>
      </article>
    </>
  );
}
