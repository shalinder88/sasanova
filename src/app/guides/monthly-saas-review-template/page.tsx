import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Monthly SaaS Review Template: Keep Your Stack Lean",
  description:
    "A monthly SaaS review checklist to identify unused seats, approaching tier limits, and cheaper alternatives. Includes exact pricing thresholds for Zapier, Mailchimp, HubSpot, and more.",
};

export default function MonthlySaasReviewTemplatePage() {
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
              Monthly SaaS Review Template
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Workflow Template
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Monthly SaaS Review Template: Keep Your Stack Lean
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            SaaS spending creeps up 20&ndash;30% per year without anyone noticing. A monthly
            15-minute review catches unused seats, approaching tier limits, and cheaper
            alternatives before they cost you hundreds. Here is the exact checklist.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>10 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={5}
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Check 1: Unused Seats */}
          <section>
            <h2 className="text-xl font-bold mb-3">Check 1: Unused Seats (3 Minutes)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Per-seat tools are the biggest source of waste. Check every tool that charges per
              user and identify seats that have not been active in 30+ days.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">CRM:</strong> Pipedrive ($14&ndash;$99/seat/mo),
                Salesforce ($25&ndash;$350/seat/mo), HubSpot Starter ($20/seat/mo). One unused
                Salesforce Pro Suite seat costs $1,200/year.
              </li>
              <li>
                <strong className="text-foreground">Project management:</strong> Notion Plus
                ($12/user/mo), ClickUp Unlimited ($10/member/mo), Asana. One unused seat on
                Notion Plus costs $144/year.
              </li>
              <li>
                <strong className="text-foreground">Communication:</strong> Slack Pro ($8.75/user/mo).
                Five unused Slack seats cost $525/year.
              </li>
            </ul>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">Action</p>
              <p className="text-sm text-muted">
                For each tool, check the admin panel for last login dates. Remove or downgrade
                any user who has not logged in within 30 days. If they need access later, you can
                re-add them.
              </p>
            </div>
          </section>

          {/* Check 2: Approaching Tier Limits */}
          <section>
            <h2 className="text-xl font-bold mb-3">Check 2: Approaching Tier Limits (3 Minutes)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Many tools auto-upgrade or charge overage fees when you cross tier thresholds.
              Check your current usage against your plan limits to avoid surprises.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Mailchimp contacts:</strong> Your plan starts at
                500 contacts (Essentials, $13/mo). Crossing 500 bumps you to a higher contact tier.
                Crossing 2,500 contacts on Standard goes from ~$60/mo to higher tiers. Check for
                unsubscribed contacts inflating your count.
              </li>
              <li>
                <strong className="text-foreground">Zapier tasks:</strong> Free is 100 tasks/mo,
                Professional is 750 tasks/mo ($29.99/mo), Team is 2,000 tasks/mo ($103.50/mo).
                Check your current task usage in Settings &rarr; Usage.
              </li>
              <li>
                <strong className="text-foreground">Make operations:</strong> Core is 10,000 ops/mo
                ($10.59/mo). Check your current consumption in Scenarios &rarr; Usage.
              </li>
              <li>
                <strong className="text-foreground">Email sends:</strong> Brevo Free is 300 emails/day.
                Brevo Starter is 5,000 emails/mo ($9/mo). Check if you are near the daily or
                monthly limit.
              </li>
            </ul>
          </section>

          {/* Check 3: Cheaper Alternatives */}
          <section>
            <h2 className="text-xl font-bold mb-3">Check 3: Cheaper Alternatives (5 Minutes)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Once a quarter (every third monthly review), spend 5 extra minutes checking whether
              a cheaper alternative has emerged for your most expensive tools.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Email marketing:</strong> If you are on Mailchimp
                Standard at $60/mo (2,500 contacts), compare Brevo Standard at $18/mo (unlimited
                contacts, 5,000 emails/mo) or Kit Creator at $39/mo (1,000 subscribers).
              </li>
              <li>
                <strong className="text-foreground">Automation:</strong> If you are on Zapier Team at
                $103.50/mo (2,000 tasks), compare Make Core at $10.59/mo (10,000 ops) &mdash;
                a potential savings of $1,115/year.
              </li>
              <li>
                <strong className="text-foreground">CRM:</strong> If you are on Salesforce Pro Suite
                at $100/seat/mo, compare Pipedrive Growth at $39/seat/mo or Freshsales Growth at
                $11/seat/mo. At 10 seats, that is $7,320 to $10,680 savings per year.
              </li>
            </ul>
          </section>

          {/* Check 4: Renewal Dates */}
          <section>
            <h2 className="text-xl font-bold mb-3">Check 4: Upcoming Renewal Dates (2 Minutes)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Annual contracts auto-renew unless you cancel before the renewal window. Check for
              any tool that renews in the next 60 days.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Salesforce:</strong> 30&ndash;60 day notice required
                before auto-renewal. Missing this window locks you in for another year.
              </li>
              <li>
                <strong className="text-foreground">HubSpot Professional:</strong> Annual contracts
                auto-renew. Check your renewal date in Settings &rarr; Account &amp; Billing.
              </li>
              <li>
                <strong className="text-foreground">Any annual plan:</strong> If you switched to annual
                billing for a discount, set a reminder 60 days before renewal to evaluate whether
                you still need the tool.
              </li>
            </ul>
          </section>

          {/* Check 5: Feature Overlap */}
          <section>
            <h2 className="text-xl font-bold mb-3">Check 5: Feature Overlap (2 Minutes)</h2>
            <p className="text-muted leading-relaxed mb-3">
              As your stack grows, tools start overlapping. Common overlaps that waste money:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">CRM + email tool.</strong> HubSpot includes email
                marketing. If you are also paying for Mailchimp or ActiveCampaign, you may be
                paying for email twice.
              </li>
              <li>
                <strong className="text-foreground">Multiple automation tools.</strong> If you have both
                Zapier ($29.99/mo) and Make ($10.59/mo) running, consolidate onto one platform.
              </li>
              <li>
                <strong className="text-foreground">PM + docs tools.</strong> If you use Notion for
                docs and ClickUp for PM, check if Notion alone covers both needs (or vice versa).
              </li>
            </ul>
          </section>

          {/* The Monthly Template */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Complete Monthly Checklist</h2>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <ol className="list-decimal pl-5 space-y-2 text-sm text-muted">
                <li>Check for unused seats on per-seat tools (CRM, PM, communication)</li>
                <li>Check current usage vs. plan limits (contacts, tasks, ops, sends)</li>
                <li>Clean Mailchimp audience (archive unsubscribed/cleaned contacts)</li>
                <li>Review Zapier/Make task usage dashboard</li>
                <li>Check for auto-renewal dates in the next 60 days</li>
                <li>Note any approaching tier thresholds</li>
                <li>Every 3rd month: compare top 3 most expensive tools to alternatives</li>
                <li>Every 3rd month: check for feature overlap between tools</li>
                <li>Document total monthly SaaS spend and compare to last month</li>
                <li>Action items: remove seats, downgrade tiers, or initiate switches</li>
              </ol>
            </div>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long should this review take?</h3>
                <p className="text-muted">15 minutes for the standard monthly review (checks 1&ndash;4). 25 minutes when you add the quarterly alternative and overlap checks (checks 5&ndash;6). Set a recurring calendar event so it becomes a habit.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is a reasonable SaaS budget for a small team?</h3>
                <p className="text-muted">Solo founders should target $0&ndash;$100/mo. Small teams (3&ndash;5 people) typically spend $200&ndash;$500/mo. Growing teams (5&ndash;15) spend $500&ndash;$2,000/mo. If you are above these ranges, this review will help identify where the excess is.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I track spending in a spreadsheet?</h3>
                <p className="text-muted">Yes. A simple spreadsheet with columns for tool name, plan, monthly cost, seats, renewal date, and last review date is sufficient. Update it monthly during this review. Over time, the trend line reveals whether your stack is growing leaner or fatter.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the single biggest waste in most SaaS stacks?</h3>
                <p className="text-muted">Unused seats on per-seat tools. Most teams pay for 20&ndash;30% more seats than they actively use. At $39/seat/mo (Pipedrive Growth), 3 unused seats cost $1,404/year. This is the first thing to check every month.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "mailchimp", "hubspot-crm", "pipedrive", "make"]}
            comparisons={[]}
            guides={["saas-audit-checklist", "saas-spending-audit-template", "how-much-should-software-cost"]}
          />
        </div>
      </article>
    </>
  );
}
