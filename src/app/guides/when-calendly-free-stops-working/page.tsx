import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Calendly Free to Standard: The Exact Moment You Need to Pay",
  description:
    "Calendly Free gives you 1 event type and basic integrations. Standard is $12/user/mo for unlimited event types. Cal.com gives you unlimited event types free. Here's when to upgrade and when to switch.",
};

export default function WhenCalendlyFreeStopsWorking() {
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
              Calendly Free to Standard
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
            <span className="text-[11px] text-muted">9 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Calendly Free to Standard: The Exact Moment You Need to Pay
          </h1>
          <p className="text-lg text-muted">
            Calendly Free gives you exactly 1 event type. The moment you need a second &mdash; a &ldquo;30-min intro&rdquo; and a &ldquo;60-min deep dive,&rdquo; for example &mdash; you need Standard at $12/user/mo. Or you switch to Cal.com, which offers unlimited event types for free. This guide maps the decision.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from Calendly and Cal.com vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">What Calendly Free Actually Gives You</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">1 event type.</strong> You can create exactly one scheduling link (e.g., &ldquo;30-minute meeting&rdquo;). Not one active &mdash; one total.</li>
            <li><strong className="text-foreground">1 calendar connection.</strong> Connect one Google Calendar or Outlook calendar.</li>
            <li><strong className="text-foreground">Basic integrations.</strong> Google Meet and Zoom video conferencing. No CRM integrations.</li>
            <li><strong className="text-foreground">No email reminders.</strong> No automated confirmation or reminder emails to attendees.</li>
            <li><strong className="text-foreground">No workflows.</strong> No automated follow-up actions after a meeting is booked.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">When to Stay on Calendly Free</p>
            <p className="text-sm text-muted">
              You only need one type of meeting (e.g., a standard 30-minute call). You don&apos;t need automated reminders, follow-ups, or CRM integration. You&apos;re fine with a single calendar connection. For the simplest possible scheduling use case, Free works.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Calendly&apos;s Paid Tiers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5">1 event type, basic integrations</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Standard</td>
                  <td className="px-4 py-2.5">$12/user/mo</td>
                  <td className="px-4 py-2.5">$120/user/yr</td>
                  <td className="px-4 py-2.5">Unlimited event types, group events, workflows</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Teams</td>
                  <td className="px-4 py-2.5">$20/user/mo</td>
                  <td className="px-4 py-2.5">$192/user/yr</td>
                  <td className="px-4 py-2.5">Round robin, Salesforce integration, admin controls</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">SSO, SCIM, audit logs, custom SLA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Exact Triggers for Upgrading</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade to Standard ($12/user/mo) when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li><strong className="text-foreground">You need a second event type.</strong> The moment you want both a &ldquo;15-min intro&rdquo; and a &ldquo;60-min consultation,&rdquo; Free can&apos;t do it.</li>
              <li><strong className="text-foreground">You need automated reminders.</strong> Standard sends confirmation and reminder emails automatically, reducing no-shows.</li>
              <li><strong className="text-foreground">You need workflows.</strong> Automated actions after booking &mdash; sending a follow-up email, adding to a CRM, etc.</li>
              <li><strong className="text-foreground">You need group events.</strong> Allow multiple people to book the same time slot (webinars, classes).</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade to Teams ($20/user/mo) when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li>You need round-robin scheduling to distribute meetings across a sales team.</li>
              <li>You need Salesforce CRM integration (not available on Standard).</li>
              <li>You need admin controls and centralized team management.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Per-Seat Math</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Standard Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Standard Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Teams Monthly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1 user</td>
                  <td className="px-4 py-2.5">$12/mo</td>
                  <td className="px-4 py-2.5">$120/yr</td>
                  <td className="px-4 py-2.5">$20/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 users</td>
                  <td className="px-4 py-2.5">$60/mo</td>
                  <td className="px-4 py-2.5">$600/yr</td>
                  <td className="px-4 py-2.5">$100/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 users</td>
                  <td className="px-4 py-2.5">$120/mo</td>
                  <td className="px-4 py-2.5">$1,200/yr</td>
                  <td className="px-4 py-2.5 text-yellow-400">$200/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: Cal.com Free</h2>
          <p className="text-muted mb-4">
            Cal.com is the open-source alternative to Calendly, and its free tier gives you what Calendly charges $12/user/mo for:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Calendly Free</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cal.com Free</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Event types</td>
                  <td className="px-4 py-2.5 text-red-400">1</td>
                  <td className="px-4 py-2.5 text-green-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Bookings</td>
                  <td className="px-4 py-2.5">Unlimited</td>
                  <td className="px-4 py-2.5 text-green-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Users</td>
                  <td className="px-4 py-2.5">1</td>
                  <td className="px-4 py-2.5">1</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Self-hosting</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes (open source)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Team features</td>
                  <td className="px-4 py-2.5">$20/user/mo (Teams)</td>
                  <td className="px-4 py-2.5">$15/user/mo (Team)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Cal.com Free gives you unlimited event types and unlimited bookings for 1 user at $0. Cal.com Team at $15/user/mo ($144/user/yr annually) adds round-robin, collective bookings, and team scheduling. That&apos;s $5/user/mo cheaper than Calendly Teams ($20/user/mo).
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The tradeoff:</strong> Calendly has broader name recognition (clients expect Calendly links), deeper CRM integrations out of the box, and a more polished consumer UX. Cal.com is more customizable and developer-friendly.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I really only have 1 event type on Calendly Free?</h3>
                <p className="text-muted">Yes. Calendly Free allows exactly 1 active event type. You cannot create a second. This is the single biggest limitation of the free tier and the most common reason people upgrade to Standard ($12/user/mo).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Cal.com a reliable alternative to Calendly?</h3>
                <p className="text-muted">Yes. Cal.com is a well-funded, rapidly growing platform used by thousands of companies. It&apos;s open source, which means you can self-host for complete data control. The cloud-hosted version is SOC 2 compliant. For scheduling, it&apos;s a mature product.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Calendly Standard include CRM integrations?</h3>
                <p className="text-muted">Standard includes basic integrations (HubSpot, Zapier, Google Analytics). Salesforce integration requires Teams ($20/user/mo). If you need Salesforce + scheduling, you&apos;re looking at $240/user/yr minimum.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is $12/user/mo too much for a scheduling tool?</h3>
                <p className="text-muted">That depends on how many meetings you book. If scheduling saves you 10 minutes per meeting and you book 20 meetings/month, that&apos;s 200 minutes (3.3 hours) saved. At any professional rate, $12/mo is a clear win. For fewer than 5 meetings per month, Cal.com Free with unlimited event types might be the smarter choice.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["calendly", "cal-com"]}
            comparisons={["calendly-vs-cal-com"]}
            guides={["scheduling-tool-comparison", "saas-pricing-traps-2026"]}
          />
        </div>
      </article>
    </>
  );
}
