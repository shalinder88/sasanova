import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Coaching Business Stack: Scheduling + CRM + Email Under $30/Month",
  description:
    "The exact coaching business software stack. Scheduling (Calendly free), CRM (HubSpot free), email (Kit free 10K subs), forms (Tally free). Total: $0/mo. Paid upgrade: Calendly Standard $12 + Kit Creator $39 = $51/mo. Verified pricing.",
  openGraph: {
    title: "Coaching Business Stack: Scheduling + CRM + Email Under $30/Month",
    description:
      "Run a coaching business for $0/month with verified free tools. Plus the exact upgrade path when you outgrow free tiers.",
  },
};

export default function BestToolsForCoaches() {
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
              Best Tools for Coaches
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Persona Stack
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Coaching Business Stack: Scheduling + CRM + Email Under $30/Month
          </h1>
          <p className="text-lg text-muted">
            Coaches need exactly four things: a way for clients to book sessions, a place to track client relationships, an email list to nurture prospects, and intake forms. Every single one of these can be free. Here&apos;s the $0/month stack and the upgrade path when your practice grows.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Complete Coaching Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Option</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Paid Upgrade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Scheduling</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/calendly" className="text-accent hover:underline">Calendly Free</Link> &mdash; $0/mo (1 event type)</td>
                  <td className="px-4 py-2.5 text-muted">Calendly Standard &mdash; $12/user/mo (unlimited event types)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/hubspot-crm" className="text-accent hover:underline">HubSpot Free</Link> &mdash; $0/mo (unlimited contacts)</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot Starter &mdash; $20/seat/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/convertkit" className="text-accent hover:underline">Kit Free</Link> &mdash; $0/mo (10,000 subs)</td>
                  <td className="px-4 py-2.5 text-muted">Kit Creator &mdash; $39/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Forms</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/tally" className="text-accent hover:underline">Tally Free</Link> &mdash; $0/mo (unlimited)</td>
                  <td className="px-4 py-2.5 text-muted">Tally Pro &mdash; $29/mo</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-semibold text-foreground">Total</td>
                  <td className="px-4 py-2.5 font-semibold text-green-400">$0/mo</td>
                  <td className="px-4 py-2.5 font-semibold text-muted">$51/mo (Calendly $12 + Kit $39)</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ── Scheduling ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Scheduling: The Core of a Coaching Business</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Calendly Free ($0/mo)</strong> gives you 1 event type and 1 calendar connection. For a new coach, one &ldquo;Book a Session&rdquo; link is enough. Clients see your availability, pick a time, and get automatic calendar invites and reminders.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Calendly Standard ($12/user/mo)</strong> unlocks unlimited event types, group events, and workflows. Create separate booking pages for discovery calls (free, 15 min), individual sessions ($150, 60 min), and package check-ins. The workflows feature auto-sends confirmation and reminder emails.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Alternative:</strong> Cal.com Free gives unlimited event types for $0/mo. If you need multiple booking pages without paying, switch to Cal.com instead of upgrading Calendly.
          </p>

          {/* ── CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">CRM: Track Every Client Relationship</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot Free CRM ($0/mo)</strong> handles unlimited contacts with a basic deal pipeline. Create a pipeline with stages like &ldquo;Inquiry,&rdquo; &ldquo;Discovery Call,&rdquo; &ldquo;Proposal Sent,&rdquo; &ldquo;Active Client,&rdquo; and &ldquo;Alumni.&rdquo; Log notes after each session. Track which clients are due for renewal.
          </p>
          <p className="text-muted mb-4">
            Most coaches don&apos;t need to upgrade. HubSpot Free handles contact management, deal tracking, and basic email logging. Starter ($20/seat/mo) is worth it only when you need email sequences to automate follow-ups with prospects.
          </p>

          {/* ── Email ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email: Nurture Prospects Into Clients</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit Newsletter (Free, $0/mo)</strong> supports 10,000 subscribers with unlimited sends. Send a weekly tip email, share client success stories (with permission), and announce openings for new clients. The subscriber tag system lets you segment between prospects, active clients, and past clients.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit Creator ($39/mo)</strong> unlocks advanced automations and integrations. Build a 5-email welcome sequence that educates prospects about your coaching approach, shares testimonials, and ends with a booking link. This is the single highest-ROI upgrade for coaches &mdash; automated sequences convert prospects while you coach.
          </p>

          {/* ── Forms ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Forms: Client Intake and Applications</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Tally Free ($0/mo)</strong> gives you unlimited forms with unlimited submissions, conditional logic, and file uploads. Build an intake questionnaire that collects goals, challenges, availability, and budget before the discovery call. The Notion-like editor makes form creation intuitive.
          </p>
          <p className="text-muted mb-4">
            Tally Pro ($29/mo) adds custom domains, removes branding, and enables partial submissions. Most coaches never need it &mdash; the free tier is remarkably complete.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Practice management platforms ($49&ndash;$199/mo):</strong> Tools like Practice, CoachAccountable, and Satori combine scheduling + CRM + forms. But at $49&ndash;$199/mo, they cost far more than free alternatives that do the same things. Consider them only when managing 30+ active clients simultaneously.</li>
            <li><strong className="text-foreground">Acuity Scheduling:</strong> Now owned by Squarespace. Unless you already pay for Squarespace, Calendly or Cal.com are better standalone options with stronger integrations.</li>
            <li><strong className="text-foreground">Typeform for intake:</strong> Typeform Free limits you to 10 responses/month. Tally Free gives unlimited responses. The choice is obvious.</li>
            <li><strong className="text-foreground">Kajabi or Teachable (until you sell courses):</strong> Many coaches want to &ldquo;productize&rdquo; their knowledge into courses. Do this after you have 50+ successful 1:1 clients. Until then, the course platform subscription is waste.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Coaches Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Buying software before signing clients.</strong> Your first 5 clients don&apos;t need a CRM. They need a Google Sheet. Move to HubSpot Free when you have 20+ contacts to manage.</li>
            <li><strong className="text-foreground">Not building an email list from day one.</strong> Every person who visits your website, attends a workshop, or follows you on social media should get on your Kit list. The list becomes your most valuable business asset. Kit Free costs nothing.</li>
            <li><strong className="text-foreground">Paying $12/mo for Calendly when Cal.com is free.</strong> If you need multiple event types but not the Calendly brand recognition, Cal.com Free gives unlimited event types for $0.</li>
            <li><strong className="text-foreground">Over-complicating intake forms.</strong> A 5-question Tally form converts better than a 25-question application. Ask name, email, biggest challenge, budget range, and preferred time to talk. Anything more scares off prospects.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Can I really run a coaching business on $0/month?</h3>
          <p className="text-muted mb-4">
            Yes. Calendly Free (1 event type) + HubSpot Free (unlimited contacts) + Kit Free (10K subscribers) + Tally Free (unlimited forms) = $0/mo. The first upgrade that matters is Kit Creator at $39/mo for email automation sequences.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">When should I upgrade from free tools?</h3>
          <p className="text-muted mb-4">
            When you have 10+ active clients and consistent lead flow. The first upgrade: Kit Creator ($39/mo) for automated email sequences. Second: Calendly Standard ($12/mo) for multiple booking pages. Total: $51/mo.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">How do I collect payments?</h3>
          <p className="text-muted mb-4">
            Calendly Standard integrates with Stripe and PayPal for payment collection at booking. Or use a simple Stripe payment link (no monthly fee, 2.9% + $0.30 per charge). No need for a dedicated invoicing tool until you&apos;re managing 20+ client invoices monthly.
          </p>
        </div>

        <RelatedLinks
          tools={["calendly", "cal-com", "hubspot-crm", "convertkit", "tally"]}
          comparisons={["hubspot-crm-vs-pipedrive", "calendly-vs-cal-com"]}
          guides={[
            "scheduling-tool-comparison",
            "best-crm-freelancers-consultants",
            "best-email-tool-creators",
            "when-calendly-free-stops-working",
            "automate-lead-capture",
          ]}
        />
      </article>
    </>
  );
}
