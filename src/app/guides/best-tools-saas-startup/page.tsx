import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The Complete SaaS Startup Stack Under $500/Month",
  description:
    "CRM, email, automation, support, and analytics tools for SaaS startups at every budget. Full stack costs at $0, $100, $300, and $500/month with upgrade triggers and what to skip until 10+ customers.",
};

export default function BestToolsSaasStartup() {
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
              SaaS Startup Stack Under $500/mo
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
            <span className="text-[11px] text-muted">19 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Complete SaaS Startup Stack Under $500/Month
          </h1>
          <p className="text-lg text-muted">
            Most SaaS startups spend too much on tools too early. You don&apos;t need HubSpot Professional at $890/month when you have 3 customers. You don&apos;t need Intercom at $74/seat when your support volume is 10 tickets a week. Here&apos;s every tool tier from $0 to $500/month &mdash; with specific upgrade triggers so you spend money only when the free version is actually holding you back.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Five Tool Categories ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Five Tool Categories Every SaaS Startup Needs</h2>
          <p className="text-muted mb-4">
            CRM, email, automation, support, and analytics. That&apos;s it. Everything else is optional until you have product-market fit and at least 10 paying customers. Project management, design tools, documentation platforms &mdash; those matter, but they don&apos;t directly drive revenue. This guide focuses on the revenue stack.
          </p>

          {/* ── CRM Tier ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">CRM Tier: From Spreadsheet to Pipeline</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Best for</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Upgrade when</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Free CRM</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5">0&ndash;50 contacts, basic pipeline</td>
                  <td className="px-4 py-2.5">Need email sequences or more than 5 templates</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Essential</td>
                  <td className="px-4 py-2.5">$14/seat/mo</td>
                  <td className="px-4 py-2.5">Deal-focused teams, visual pipeline</td>
                  <td className="px-4 py-2.5">Need workflow automation (Advanced at $39/seat)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Starter</td>
                  <td className="px-4 py-2.5">$20/mo (2 users)</td>
                  <td className="px-4 py-2.5">Growth path, marketing + sales</td>
                  <td className="px-4 py-2.5">Need reporting or custom objects (Professional at $890/mo)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Start with HubSpot Free.</strong> It handles unlimited contacts, a basic pipeline, and email logging for $0. The first real decision point is email sequences &mdash; if you&apos;re doing outbound and need automated follow-up, either upgrade to HubSpot Starter ($20/month) or switch to Pipedrive Essential ($14/seat). Pipedrive is more focused on deal management. HubSpot is better if you plan to add marketing later.
          </p>

          {/* ── Email Tier ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email Tier: Newsletters and Product Updates</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Best for</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Upgrade when</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Kit Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0 (10K subs)</td>
                  <td className="px-4 py-2.5">Product updates, changelog emails</td>
                  <td className="px-4 py-2.5">Need automation sequences</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                  <td className="px-4 py-2.5">$39/mo</td>
                  <td className="px-4 py-2.5">Newsletter-driven growth, content marketing</td>
                  <td className="px-4 py-2.5">Need referral program or paid subscriptions</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0 (300 emails/day)</td>
                  <td className="px-4 py-2.5">Transactional + marketing in one</td>
                  <td className="px-4 py-2.5">Daily send limit becomes a bottleneck</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The SaaS-specific angle:</strong> most SaaS startups need transactional email (password resets, billing notifications) and marketing email (product updates, onboarding sequences). Brevo is the only platform here that handles both in one tool on the free plan. Kit and beehiiv are better for content-driven growth but you&apos;ll still need a separate transactional email provider (Resend, Postmark, or AWS SES).
          </p>

          {/* ── Automation Tier ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation Tier: Connecting the Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Upgrade when</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Make Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5">1,000 operations/mo, 2 active scenarios</td>
                  <td className="px-4 py-2.5">Hit operation limit or need 3+ scenarios</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zapier Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5">100 tasks/mo, 5 single-step Zaps</td>
                  <td className="px-4 py-2.5">Need multi-step Zaps or more tasks</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zapier Starter</td>
                  <td className="px-4 py-2.5">$19.99/mo</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                  <td className="px-4 py-2.5">Need filters, paths, or formatting steps</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Make Core</td>
                  <td className="px-4 py-2.5">$9/mo</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                  <td className="px-4 py-2.5">Need more than 10K operations/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Start with Make Free.</strong> 1,000 operations per month is enough for a startup with under 50 customers. A typical &ldquo;new signup &rarr; add to CRM &rarr; send Slack notification&rdquo; automation uses 3 operations per trigger. At 10 signups per day, that&apos;s 900 operations/month. Switch to Make Core at $9/month when you need the headroom.
          </p>

          {/* ── Support Tier ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Support Tier: Handling Customer Questions</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Best for</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Upgrade when</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Crisp Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0 (2 seats)</td>
                  <td className="px-4 py-2.5">Live chat + basic inbox</td>
                  <td className="px-4 py-2.5">Need chatbot, knowledge base, or 3+ agents</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0 (2 agents)</td>
                  <td className="px-4 py-2.5">Ticket management, email support</td>
                  <td className="px-4 py-2.5">Need SLA tracking or collision detection</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Crisp Pro</td>
                  <td className="px-4 py-2.5">$25/mo/workspace</td>
                  <td className="px-4 py-2.5">Chat + knowledge base + basic CRM</td>
                  <td className="px-4 py-2.5">Need automated routing or advanced analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Crisp Free is the default for early-stage SaaS.</strong> Live chat widget, shared inbox for 2 team members, and it looks professional. Most startups with under 50 customers handle all support through Crisp Free or just a shared email inbox. Don&apos;t buy Intercom at $74/seat/month until your support volume justifies it (100+ conversations per month).
          </p>

          {/* ── Analytics Tier ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Analytics Tier: Understanding What Users Do</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Best for</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Upgrade when</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">PostHog Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0 (1M events/mo)</td>
                  <td className="px-4 py-2.5">Product analytics, funnels, session replay</td>
                  <td className="px-4 py-2.5">Exceed 1M events or need group analytics</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Plausible</td>
                  <td className="px-4 py-2.5">$9/mo</td>
                  <td className="px-4 py-2.5">Privacy-first web analytics</td>
                  <td className="px-4 py-2.5">Need product analytics (funnels, cohorts)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mixpanel Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0 (20M events/mo)</td>
                  <td className="px-4 py-2.5">Event-based product analytics</td>
                  <td className="px-4 py-2.5">Need advanced user segmentation or data governance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">PostHog Free is the best starting point for SaaS.</strong> 1 million events per month covers most startups through their first 1,000 users. It includes product analytics, session recording, feature flags, and A/B testing. Add Plausible at $9/month for marketing site analytics if you want something cleaner than Google Analytics and care about visitor privacy.
          </p>

          {/* ── Full Stack Cost Breakdown ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Full Stack Costs: $0 to $500/Month</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">$0 Stack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">$100/mo Stack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">$300/mo Stack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">$500/mo Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                  <td className="px-4 py-2.5">HubSpot Free ($0)</td>
                  <td className="px-4 py-2.5">Pipedrive Essential ($14)</td>
                  <td className="px-4 py-2.5">Pipedrive Advanced ($39)</td>
                  <td className="px-4 py-2.5">HubSpot Starter ($20) + 3 seats</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                  <td className="px-4 py-2.5">Kit Free ($0)</td>
                  <td className="px-4 py-2.5">beehiiv Scale ($39)</td>
                  <td className="px-4 py-2.5">beehiiv Scale ($39)</td>
                  <td className="px-4 py-2.5">beehiiv Max ($99)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                  <td className="px-4 py-2.5">Make Free ($0)</td>
                  <td className="px-4 py-2.5">Make Core ($9)</td>
                  <td className="px-4 py-2.5">Zapier Starter ($19.99)</td>
                  <td className="px-4 py-2.5">Zapier Professional ($49)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Support</td>
                  <td className="px-4 py-2.5">Crisp Free ($0)</td>
                  <td className="px-4 py-2.5">Crisp Free ($0)</td>
                  <td className="px-4 py-2.5">Crisp Pro ($25)</td>
                  <td className="px-4 py-2.5">Freshdesk Growth ($15/agent &times; 3)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                  <td className="px-4 py-2.5">PostHog Free ($0)</td>
                  <td className="px-4 py-2.5">PostHog Free + Plausible ($9)</td>
                  <td className="px-4 py-2.5">PostHog Free + Plausible ($9)</td>
                  <td className="px-4 py-2.5">PostHog Free + Plausible ($9)</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-bold text-foreground">Total</td>
                  <td className="px-4 py-2.5 font-bold text-green-400">$0/mo</td>
                  <td className="px-4 py-2.5 font-bold">$71/mo</td>
                  <td className="px-4 py-2.5 font-bold">$132/mo</td>
                  <td className="px-4 py-2.5 font-bold">$282/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The $0 stack is genuinely usable.</strong> HubSpot Free CRM + Kit Free email + Make Free automation + Crisp Free chat + PostHog Free analytics. It covers every essential function for a SaaS startup with under 50 customers. The $100/month stack upgrades the tools that matter most (CRM pipeline management and email for growth). The $300/month stack adds automation depth and proper support tooling.
          </p>

          {/* ── What to Skip Until 10+ Customers ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip Until You Have 10+ Customers</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Intercom or Zendesk.</strong> $74/seat/month for Intercom. $55/agent/month for Zendesk. Both are built for teams with dedicated support staff. Until you&apos;re handling 100+ conversations per month, Crisp Free or a shared inbox works.</li>
            <li><strong className="text-foreground">HubSpot Marketing Hub Professional.</strong> $890/month is indefensible before product-market fit. The free CRM plus a separate email tool gives you 90% of the value at 5% of the cost.</li>
            <li><strong className="text-foreground">Salesforce (any edition).</strong> $25&ndash;$300/user/month. Requires an admin. Implementation takes weeks. Zero value until you have a sales team of 5+ with complex pipeline reporting needs.</li>
            <li><strong className="text-foreground">Amplitude or Mixpanel paid plans.</strong> PostHog Free gives you 1 million events. Mixpanel Free gives 20 million events. You won&apos;t need paid product analytics until you have thousands of active users generating complex behavioral patterns.</li>
            <li><strong className="text-foreground">Dedicated customer success platforms.</strong> Gainsight, Vitally, Totango &mdash; none of these are relevant until you have 50+ accounts with dedicated CSMs. A spreadsheet tracking account health scores works until then.</li>
          </ul>

          {/* ── When to Upgrade (Trigger Signals) ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">When to Upgrade Each Tool: Specific Triggers</h2>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">CRM: Upgrade from HubSpot Free when...</h3>
              <p className="text-sm text-muted">You need email sequences for outbound sales (more than manual follow-ups), you have 2+ people needing CRM access with different permission levels, or you&apos;re managing more than 3 active deal pipelines.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Email: Upgrade from Kit Free when...</h3>
              <p className="text-sm text-muted">You need automated welcome sequences, your email list is growing and you want segmentation beyond basic tags, or you need A/B testing on subject lines to improve open rates.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Automation: Upgrade from Make Free when...</h3>
              <p className="text-sm text-muted">You&apos;re hitting the 1,000 operations/month limit, you need more than 2 active scenarios, or you need scheduling intervals shorter than 15 minutes.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Support: Upgrade from Crisp Free when...</h3>
              <p className="text-sm text-muted">You need a third team member in the inbox, you want a chatbot for common questions, or you need a public knowledge base to deflect repetitive tickets.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">Analytics: Upgrade from PostHog Free when...</h3>
              <p className="text-sm text-muted">You exceed 1 million events/month, you need group-level analytics (company accounts, not just individual users), or you need SQL access to raw event data.</p>
            </div>
          </div>

          {/* ── Who Should NOT Use This Guide ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Use This Guide</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Enterprise SaaS selling to Fortune 500.</strong> You need Salesforce, a dedicated Marketo or HubSpot Enterprise instance, and your tooling budget is a rounding error on your revenue. This guide is for startups where $500/month matters.</li>
            <li><strong className="text-foreground">Funded startups with dedicated ops teams.</strong> If you have a RevOps hire, they should be building your stack based on your specific GTM motion. This guide is for founders doing it themselves.</li>
            <li><strong className="text-foreground">Product-led growth SaaS with complex onboarding.</strong> PLG requires in-app messaging (Appcues, Userflow), advanced product analytics (Amplitude), and often a dedicated data warehouse. This guide covers the basics, not the PLG-specific stack.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>
              <strong className="text-foreground">Buying annual plans before product-market fit.</strong> Annual plans save 15&ndash;20% but lock you in for 12 months. If you pivot (and most startups do), you&apos;re paying for tools that no longer fit. Stay monthly until your stack is stable for 3+ months.
            </li>
            <li>
              <strong className="text-foreground">Choosing tools for the team you plan to have, not the team you have.</strong> A 2-person startup doesn&apos;t need per-seat pricing optimized for 10 people. Buy for today, plan for 6 months out. Not 2 years.
            </li>
            <li>
              <strong className="text-foreground">Using the CRM as your email tool.</strong> HubSpot and Pipedrive both offer email features, but their email marketing is mediocre compared to dedicated email platforms. Use the CRM for contact and deal management. Use a real email platform for newsletters and sequences.
            </li>
            <li>
              <strong className="text-foreground">Building complex automations before building the process.</strong> Run the process manually 20 times before automating it. You&apos;ll discover edge cases that would break your automation. A broken automation is worse than no automation.
            </li>
            <li>
              <strong className="text-foreground">Adding analytics before knowing what to measure.</strong> PostHog Free is generous, but instrumenting 50 events before you know which metrics matter creates data noise. Start with 5 key events: signup, activation, feature usage (core), upgrade, and churn.</li>
          </ul>

          {/* ── The Bottom Line ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Bottom Line</h2>
          <p className="text-muted mb-6">
            A $0/month stack of HubSpot Free + Kit Free + Make Free + Crisp Free + PostHog Free covers every essential SaaS startup function. Upgrade incrementally as specific bottlenecks appear, not because a vendor told you to. The $100/month stack handles most startups through their first 100 customers. The $300/month stack adds the automation and support depth needed for 100&ndash;500 customers. You rarely need to spend $500/month on tools before you&apos;re generating $10K+ MRR.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What tools does a SaaS startup actually need?</h3>
                <p className="text-muted">Five categories: CRM (contact and deal management), email (newsletters and product updates), automation (connecting tools), support (customer questions), and analytics (user behavior). Everything else is optional until you have product-market fit.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot Free really free?</h3>
                <p className="text-muted">Yes, HubSpot Free CRM is genuinely free with unlimited contacts and basic pipeline management. The limitations that matter: only 5 email templates, no email sequences, no custom reporting, and HubSpot branding on forms and chat. For most startups with under 50 customers, these limits are not blockers.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use Zapier or Make for a startup?</h3>
                <p className="text-muted">Start with Make Free (1,000 operations/month). It&apos;s more cost-effective than Zapier at every tier and handles complex multi-step automations better. Switch to Zapier only if you need a specific integration that Make doesn&apos;t support (Zapier has 6,000+ integrations vs Make&apos;s 1,500+).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should a startup switch from free tools to paid?</h3>
                <p className="text-muted">When a free tier limitation is directly costing you revenue or time worth more than the paid plan. If you&apos;re spending 2 hours/week on manual tasks that a $20/month tool automates, pay for the tool. If the free tier works, there&apos;s no reason to upgrade.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/best-free-tools-startups"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">The $0 Startup Stack</span>
                <span className="block text-xs text-muted mt-1">Every free tool worth using</span>
              </Link>
              <Link
                href="/guides/automation-zapier-vs-make-vs-n8n"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Zapier vs Make vs n8n</span>
                <span className="block text-xs text-muted mt-1">Full automation tool comparison</span>
              </Link>
              <Link
                href="/guides/choosing-analytics-tool"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Choosing an Analytics Tool</span>
                <span className="block text-xs text-muted mt-1">PostHog vs Mixpanel vs Amplitude deep dive</span>
              </Link>
              <Link
                href="/guides/hubspot-pricing-reality"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">HubSpot Pricing Reality</span>
                <span className="block text-xs text-muted mt-1">What it actually costs beyond the free tier</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["hubspot-crm", "notion", "zapier", "intercom", "posthog"]}
            comparisons={["hubspot-crm-vs-pipedrive", "zapier-vs-make", "posthog-vs-mixpanel"]}
            guides={[
              "best-free-tools-startups",
              "crm-solo-founder",
              "automate-lead-capture",
            ]}
          />
        </div>
      </article>
    </>
  );
}
