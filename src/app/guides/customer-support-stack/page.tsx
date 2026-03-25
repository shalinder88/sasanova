import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Customer Support Software for Teams Under 20: What You Actually Need",
  description:
    "Zendesk is overkill for small teams. Here's the right support tool at each growth stage, with real pricing, honest tradeoffs, and a framework for when to upgrade.",
};

export default function CustomerSupportStack() {
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
              Customer Support Stack
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Support
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Customer Support Software for Teams Under 20: What You Actually Need
          </h1>
          <p className="text-lg text-muted">
            The support software market wants you to buy Zendesk or Intercom on day one. Sales reps will tell you it&apos;s an investment in customer experience. What they won&apos;t tell you: a team of 3 people will use 15% of Zendesk&apos;s features while paying for 100% of them. Here&apos;s what actually makes sense at each stage, from your first support email to your 20th support hire.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">Stage 1: Just You and Maybe One Other Person (1&ndash;3 People)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The stack:</strong> Shared Gmail inbox + Notion page for FAQs. Total cost: $0.
          </p>
          <p className="text-muted mb-4">
            This sounds primitive. It works for longer than you&apos;d think. A shared inbox (support@yourcompany.com) with Gmail&apos;s built-in labels, stars, and assignments handles up to 50&ndash;80 tickets per week for a team of 2&ndash;3. Create a label system: &ldquo;New,&rdquo; &ldquo;In Progress,&rdquo; &ldquo;Waiting on Customer,&rdquo; &ldquo;Resolved.&rdquo; Use Gmail&apos;s collaborative inbox features (assign conversations, add internal notes).
          </p>
          <p className="text-muted mb-4">
            Build a FAQ page in Notion and link to it in your email signatures and on your website. A well-written FAQ page with 15&ndash;20 questions deflects 30&ndash;40% of support volume. That&apos;s not a guess &mdash; it&apos;s a consistent pattern across small SaaS companies.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When to upgrade:</strong> When you can&apos;t tell who&apos;s working on what ticket, when emails fall through cracks more than once per week, or when you&apos;re spending 30+ minutes per day on support queue management (not answering tickets, just managing the queue). That&apos;s usually around 80&ndash;100 tickets per week.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 2: A Small Dedicated Team (3&ndash;10 People)</h2>
          <p className="text-muted mb-4">
            Now you need a real helpdesk. Two options make sense at this stage.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Help Scout &mdash; $20/user/month (Standard).</strong> Clean interface that feels like email, not enterprise software. You get shared inboxes, collision detection (see when someone else is replying), saved replies, basic reporting, and a knowledge base (Docs). The knowledge base alone is worth it &mdash; Help Scout Docs gives you a public-facing help center without a separate tool. At 5 agents, you&apos;re paying $100/month for a helpdesk that handles multi-channel support (email + chat widget) with genuine simplicity.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Freshdesk Free &mdash; $0 for up to 2 agents.</strong> If you&apos;re budget-constrained, Freshdesk offers a free tier with email ticketing, basic knowledge base, and ticket dispatch for 2 agents. The Growth plan at $15/agent/month adds automations, SLA management, and collision detection. At 5 agents on Growth, you&apos;re paying $75/month. The interface is more cluttered than Help Scout, and the free tier pushes upgrades aggressively, but the value is real.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why not Zendesk here?</strong> Zendesk Suite Team starts at $55/agent/month. For 5 agents, that&apos;s $275/month. You get more features than you need (AI bots, advanced routing, marketplace apps) and an admin interface that takes weeks to configure properly. The setup cost alone &mdash; 20&ndash;40 hours to configure views, automations, macros, and routing rules &mdash; isn&apos;t justified when Help Scout takes 2 hours.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why not Intercom here?</strong> Intercom starts at $74/seat/month on the Essential plan. For 5 seats, that&apos;s $370/month. Intercom is a product with powerful live chat, but it mixes sales engagement with support features. The messenger is excellent. The ticketing is mediocre compared to dedicated helpdesks. If your primary support channel is live chat and you want proactive messaging, Intercom makes sense. If your primary channel is email, Help Scout is better and cheaper.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 3: Scaling Up (10&ndash;20 People)</h2>
          <p className="text-muted mb-4">
            At this stage, you likely need advanced routing, SLA tracking, customer self-service portals, reporting dashboards, and integrations with your CRM and engineering tools. Two platforms handle this well.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Intercom &mdash; $74/seat/month (Essential) to $132/seat/month (Expert).</strong> At 15 agents on Essential, you&apos;re paying $1,110/month. Intercom shines here because the Fin AI agent can deflect 20&ndash;40% of tickets automatically using your help center content. The ROI math works at scale: if Fin handles 30% of 500 weekly tickets, that&apos;s 150 fewer tickets for human agents. Intercom also offers strong product tours, in-app messaging, and customer data platforms. The downside: pricing is opaque, and add-ons for advanced features stack up fast.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Zendesk Suite Team ($55/agent) or Professional ($115/agent).</strong> At 15 agents on Suite Team, you&apos;re at $825/month. Zendesk&apos;s strength at this scale is its marketplace of 1,200+ integrations, mature routing engine, and deep reporting. If you need to connect support data to Salesforce, pipe tickets to Jira, and build custom SLA workflows, Zendesk has more flexibility than anyone else. The cost of that flexibility: a dedicated admin to manage it. Budget 10&ndash;20 hours per month for Zendesk administration at this team size.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Decision Framework</h2>
          <p className="text-muted mb-4">
            Three variables determine your support tool: ticket volume, channel mix, and self-service needs.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Ticket volume under 100/week:</strong> Gmail + Notion or Freshdesk Free. Don&apos;t overthink it.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Ticket volume 100&ndash;500/week:</strong> Help Scout or Freshdesk Growth. You need collision detection, saved replies, and basic reporting. You don&apos;t need AI routing or advanced SLAs yet.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Ticket volume 500+/week:</strong> Intercom or Zendesk. At this volume, automation, self-service, and AI deflection pay for themselves.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Primary channel is live chat:</strong> Intercom, regardless of volume. Their messenger is the best in the market.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Primary channel is email:</strong> Help Scout at small scale, Zendesk at large scale.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">You need a help center / knowledge base:</strong> Help Scout Docs is the easiest to set up. Zendesk Guide is the most powerful. Intercom Articles sits in between.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Hidden Cost of Cheap Support Tools</h2>
          <p className="text-muted mb-4">
            Free and cheap helpdesks save money upfront but cost you in ways that are harder to measure.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">No analytics means flying blind.</strong> If you can&apos;t measure first response time, resolution time, and customer satisfaction, you can&apos;t improve. You won&apos;t know if your support is good or bad &mdash; only whether customers are angry enough to churn.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">No automation means wasted time.</strong> Without auto-routing, ticket tagging, and saved replies, every agent spends 20&ndash;30% of their time on admin tasks instead of helping customers. At 5 agents making $25/hour, that&apos;s $5,000&ndash;7,500/month in wasted labor &mdash; more than any helpdesk subscription.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">No self-service means unnecessary tickets.</strong> Without a knowledge base, customers email you questions that a help article could answer. Industry benchmarks suggest a good knowledge base deflects 20&ndash;40% of ticket volume. At 300 tickets/week, that&apos;s 60&ndash;120 fewer tickets.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Integration Requirements</h2>
          <p className="text-muted mb-4">
            Your support tool doesn&apos;t exist in isolation. Check these integration points before committing.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">CRM connection.</strong> Help Scout integrates with HubSpot and Salesforce. Freshdesk integrates with HubSpot and Freshsales (native). Intercom has its own customer data platform but also connects to Salesforce. Zendesk connects to everything through its marketplace.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Engineering tools.</strong> When support finds a bug, can they create a Jira or Linear ticket from the helpdesk? Help Scout does this through Zapier. Freshdesk, Intercom, and Zendesk have native Jira integrations.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Slack notifications.</strong> All four platforms integrate with Slack for ticket notifications. Help Scout&apos;s is the simplest. Zendesk&apos;s is the most configurable.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Read This Guide</h2>
          <p className="text-muted mb-4">
            If you&apos;re a B2C company handling 1,000+ tickets per day, you&apos;re beyond the scope of this guide. You need enterprise support operations, not a tool recommendation. Look at Zendesk Enterprise, Salesforce Service Cloud, or build a dedicated support engineering team.
          </p>
          <p className="text-muted mb-4">
            If you&apos;re running an e-commerce store, your support needs are different. You need order lookup, return management, and shipping integration. Gorgias ($10/month + $0.40/ticket) or Richpanel are purpose-built for e-commerce support and will serve you better than any general helpdesk.
          </p>
          <p className="text-muted mb-6">
            If you have zero customers yet, stop reading and go get customers. Your first 50 support conversations should happen in your personal inbox so you feel every complaint directly. That pain teaches you what your product needs to fix. A helpdesk can&apos;t do that.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best customer support tool for small teams?</h3>
                <p>For teams under 20 people, Freshdesk or Crisp are the strongest options. Freshdesk offers a generous free tier with ticketing and a knowledge base. Crisp combines live chat, helpdesk, and CRM features in one affordable package. Zendesk is typically overkill and overpriced for small teams.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need a helpdesk if I have fewer than 100 customers?</h3>
                <p>No. Handle support from your personal inbox until you regularly lose track of conversations or miss follow-ups. A shared inbox (like Google Groups or a team email) bridges the gap before you need a real helpdesk. Invest in proper support software when ticket volume exceeds what one person can track mentally.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Zendesk worth it for small businesses?</h3>
                <p>Usually not. Zendesk&apos;s pricing starts at $19/agent/month and quickly climbs. Small teams rarely use the advanced features that justify the cost. Freshdesk, Crisp, or Help Scout deliver 80% of Zendesk&apos;s functionality at a fraction of the price. Reserve Zendesk for when you have 10+ support agents.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zendesk", "intercom", "freshdesk", "help-scout", "crisp"]}
            comparisons={["zendesk-vs-intercom", "freshdesk-vs-zendesk", "help-scout-vs-intercom", "help-scout-vs-freshdesk"]}
            guides={[
              "customer-success-tools",
              "remote-team-communication",
              "best-tools-saas-startup",
            ]}
          />
        </div>
      </article>
    </>
  );
}
