import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Running a Business on $0/Month SaaS: Every Free Tool You Need",
  description:
    "A complete business stack using only free tiers. HubSpot CRM (unlimited contacts), beehiiv (2,500 subs), Zapier (100 tasks), Notion (unlimited pages), Canva (2M+ templates). Exact limits for every tool.",
};

export default function RunBusinessZeroBudget() {
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
              $0/Month SaaS Business Stack
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Budget Constraint
            </span>
            <span className="text-[11px] text-muted">20 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Running a Business on $0/Month SaaS: Every Free Tool You Need
          </h1>
          <p className="text-lg text-muted">
            This is not a list of 14-day trials disguised as free tools. Every tool below has a permanent free tier with enough capability to run a real business. Here is the complete stack, organized by function, with exact limits so you know exactly when you will hit a wall.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">CRM: HubSpot Free</h2>
          <p className="text-muted mb-4">
            Unlimited contacts. Deal pipeline. Email logging. Meeting scheduling. Basic reporting. Forms and live chat with HubSpot branding. The limits: 1 pipeline, 5 email templates, 2,000 email sends per month, HubSpot branding on everything. You cannot remove branding or add automation without Starter at $20/seat/month.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Alternative CRM: Zoho CRM Free</h2>
          <p className="text-muted mb-4">
            Up to 3 users. Basic lead, contact, and deal management. 5,000 records. If you need a multi-user CRM on zero budget, Zoho Free covers 3 people with core CRM functionality. HubSpot Free has no user limit but fewer features per user.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Alternative CRM: Freshsales Free</h2>
          <p className="text-muted mb-4">
            Up to 3 users. Contact and account management. Built-in chat, email, and phone. Freshsales Free includes a built-in phone dialer on the free plan &mdash; unique among free CRMs.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Email Marketing: Kit (ConvertKit) Newsletter</h2>
          <p className="text-muted mb-4">
            Free for up to 10,000 subscribers. Unlimited email sends. Landing pages. The limits: no advanced automations, no integrations, no visual automation builder. You can send broadcast newsletters and basic sequences. For a business that just needs to send a weekly email to a growing list, this is the most generous free tier available.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Newsletter Platform: beehiiv Launch</h2>
          <p className="text-muted mb-4">
            Free for up to 2,500 subscribers. Unlimited sends. Custom domain. Website builder. Basic analytics. No advanced automations or A/B testing. If you are building a newsletter-first business with monetization in mind, beehiiv&apos;s free tier gives you more newsletter-specific features than Kit&apos;s free plan, but with a lower subscriber cap.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Email Delivery: Brevo Free</h2>
          <p className="text-muted mb-4">
            Up to 100,000 contacts. 300 emails per day (roughly 9,000/month). Brevo branding on emails. If you need transactional emails or marketing emails to a large list with a low sending frequency, Brevo&apos;s free plan is the most generous for contact storage.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Automation: Zapier Free</h2>
          <p className="text-muted mb-4">
            100 tasks per month. Unlimited Zaps. Two-step only (single trigger + single action). For light automation &mdash; new form submission creates a CRM contact, new subscriber gets a welcome email &mdash; 100 tasks is enough for a low-volume business.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Automation Alternative: Make Free</h2>
          <p className="text-muted mb-4">
            1,000 operations per month. 2 active scenarios. Make Free gives you 10x the volume of Zapier Free but limits you to 2 active workflows. If you have 1&ndash;2 critical automations that run frequently, Make Free is better. If you have many simple automations, Zapier Free&apos;s unlimited Zaps (but 100-task cap) might work better.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Project Management: Notion Free</h2>
          <p className="text-muted mb-4">
            Unlimited pages. Unlimited blocks. Databases, kanban boards, docs, wikis. 10 guest collaborators. The limits: 5MB file uploads, 7-day version history. For a solo founder or small team, Notion Free is a complete project management, documentation, and wiki solution.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Task Management: ClickUp Free</h2>
          <p className="text-muted mb-4">
            Unlimited tasks. Unlimited members. 100MB storage. Multiple views (list, board, calendar). The limits: basic reporting, no Gantt charts, 100 automations per month, 100 custom field uses. For teams that want more structured project management than Notion provides.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Communication: Discord Free</h2>
          <p className="text-muted mb-4">
            Unlimited messages with full history. Voice and video calls for up to 25 people. Screen sharing at 720p. 25MB file uploads. Channels, threads, forums. Unlike Slack Free (90-day history limit, 10 integrations), Discord Free retains everything indefinitely.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Scheduling: Cal.com Free</h2>
          <p className="text-muted mb-4">
            1 user. Unlimited event types. Unlimited bookings. Open source. Cal.com Free gives you more than Calendly Free (which limits you to 1 event type).
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Design: Canva Free</h2>
          <p className="text-muted mb-4">
            2 million+ templates. 5GB storage. Basic AI features. Basic photo editing and collaboration for up to 5 people. The limits: no background remover, no brand kit, no magic resize, smaller asset library. Covers 70% of design needs for social media and marketing materials.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Video Messaging: Loom Starter</h2>
          <p className="text-muted mb-4">
            25 videos per person. 5-minute recording limit. 720p quality. Transcriptions. For quick async updates and walkthroughs, Loom&apos;s free tier replaces many meetings and long email explanations.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The $0 Stack Summary</h2>
          <p className="text-muted mb-4">
            CRM (HubSpot Free) + Email (Kit Newsletter or Brevo Free) + Newsletter (beehiiv Launch) + Automation (Zapier Free or Make Free) + PM (Notion Free or ClickUp Free) + Chat (Discord Free) + Scheduling (Cal.com Free) + Design (Canva Free) + Video (Loom Starter) = $0/month with genuine business capability. This stack supports a solo founder or team of up to 3 through the first 6&ndash;12 months.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can you really run a business on zero SaaS spend?</h3>
                <p>Yes, for early-stage businesses. The free tiers listed above cover CRM, email marketing, automation, project management, communication, scheduling, and design. The tradeoff is time: you will spend more hours working around free tier limits than if you paid $50&ndash;$100/month for upgraded plans.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the first tool you should upgrade from free?</h3>
                <p>Automation. Zapier Free at 100 tasks/month or Make Free at 2 active scenarios runs out fastest. Most businesses should upgrade to Make Core at $10.59/month within the first 2&ndash;3 months when workflow volume picks up.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long can this $0 stack last?</h3>
                <p>For a solo founder: 6&ndash;12 months. For a small team of 3: 3&ndash;6 months. The first walls you hit are typically automation volume (100 tasks runs out fast), email subscriber caps (2,500 on beehiiv, 10,000 on Kit), and CRM pipeline limits (1 pipeline on HubSpot Free).</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "convertkit", "beehiiv", "zapier", "make", "notion", "discord", "canva"]}
            comparisons={["zapier-vs-make", "hubspot-crm-vs-zoho-crm", "beehiiv-vs-convertkit"]}
            guides={[
              "best-free-tools-startups",
              "complete-free-saas-stack-guide",
              "when-to-stop-using-free-tools",
            ]}
          />
        </div>
      </article>
    </>
  );
}
