import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "How to Automate Lead Capture Without Spending $500/Month on HubSpot",
  description:
    "HubSpot Professional costs $800+/month. Here's how to get 80% of the value for under $100 using Tally, Zapier, Pipedrive, and beehiiv.",
};

export default function AutomateLeadCaptureGuide() {
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
            <span className="text-foreground font-medium truncate">Automate Lead Capture</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Automation
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          How to Automate Lead Capture Without Spending $500/Month on HubSpot
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 13 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            HubSpot Marketing Hub Professional starts at $800/month (annual contract, 3 seats
            included). HubSpot Sales Hub Professional is another $90/user/month. If you need
            both &mdash; and HubSpot will tell you that you do &mdash; a 3-person team is
            looking at $1,070/month before add-ons.
          </p>
          <p>
            For a 50-person sales org? Maybe worth it. For a 3-person startup or solo founder
            doing outbound and content marketing? Absolutely not. You can build an automated
            lead capture pipeline that handles 80% of what HubSpot Professional does for under
            $100/month. Here&apos;s exactly how.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Budget Stack: $14/Month</h2>
            <p>
              This covers the core loop: capture a lead, store it in a CRM, trigger an email
              sequence. Nothing fancy. Everything functional.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Tally</td>
                    <td className="px-4 py-2.5">Free</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">Form builder (unlimited forms, unlimited submissions)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5">Free</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">Automation glue (100 tasks/month, 5 zaps)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5">Essential</td>
                    <td className="px-4 py-2.5">$14/user/mo</td>
                    <td className="px-4 py-2.5">CRM with pipeline view, deal tracking, activity logging</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5">Launch (free)</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">Email newsletter for nurture (up to 2,500 contacts)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">Tally</strong> is the sleeper pick here. Unlike
              Typeform ($25/month for 100 responses), Tally&apos;s free plan includes unlimited
              forms and unlimited submissions. The form builder is clean, supports conditional
              logic, file uploads, and payment collection. The only limit on free: no custom
              domains and Tally branding on the form.
            </p>
            <p>
              <strong className="text-foreground">Pipedrive Essential</strong> at $14/user/month
              gives you a visual deal pipeline, email integration, activity reminders, and a
              mobile app. It&apos;s purpose-built for closing deals, not for marketing automation.
              That&apos;s a feature, not a bug. You want your CRM focused on revenue, not on
              being a Swiss Army knife.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Mid-Range Stack: $85/Month</h2>
            <p>
              For teams doing 50+ leads/month who need multi-step automations, conditional
              form logic, and email sequences beyond a basic newsletter.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What It Adds</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Typeform</td>
                    <td className="px-4 py-2.5">Basic</td>
                    <td className="px-4 py-2.5">$25/mo</td>
                    <td className="px-4 py-2.5">100 responses/mo, custom branding, logic jumps</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5">Core</td>
                    <td className="px-4 py-2.5">$10.59/mo</td>
                    <td className="px-4 py-2.5">10,000 operations/mo, multi-step scenarios, branching</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5">Starter</td>
                    <td className="px-4 py-2.5">$20/user/mo</td>
                    <td className="px-4 py-2.5">CRM + basic marketing, 1,000 marketing contacts, email health</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">ConvertKit</td>
                    <td className="px-4 py-2.5">Creator</td>
                    <td className="px-4 py-2.5">$29/mo</td>
                    <td className="px-4 py-2.5">Automated email sequences, tagging, visual builder</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">Make instead of Zapier</strong> is the upgrade
              that matters most. Make&apos;s Core plan gives you 10,000 operations/month for
              $10.59 &mdash; versus Zapier&apos;s Starter at $29.99/month for 750 tasks. Make
              also supports branching logic, error handling, and multi-step scenarios that
              Zapier reserves for its Professional plan ($73.50/month). The tradeoff: Make&apos;s
              interface has a steeper learning curve. Budget 2&ndash;3 hours to get comfortable.
            </p>
            <p>
              <strong className="text-foreground">HubSpot Starter at $20/user/month</strong> gives
              you a CRM that connects natively to marketing tools. The 1,000 marketing contact
              limit is tight but workable if you&apos;re selective about who enters your
              marketing funnel. Non-marketing contacts are free and unlimited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Automation Recipes</h2>
            <p>
              Here are the four automations that cover 90% of lead capture needs. Each one is
              a single Make scenario or Zapier zap.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Recipe 1: Form &rarr; CRM &rarr; Welcome Email</h3>
            <div className="rounded-lg border border-border bg-surface p-4 mt-2 space-y-2">
              <p><strong className="text-foreground">Trigger:</strong> New Tally/Typeform submission</p>
              <p><strong className="text-foreground">Action 1:</strong> Create contact in Pipedrive/HubSpot with form data</p>
              <p><strong className="text-foreground">Action 2:</strong> Add tag &quot;lead-source: website-form&quot;</p>
              <p><strong className="text-foreground">Action 3:</strong> Add to ConvertKit/beehiiv with &quot;welcome-sequence&quot; tag</p>
              <p className="text-xs text-muted">Estimated setup time: 20 minutes</p>
            </div>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Recipe 2: Calendly Booking &rarr; CRM Deal</h3>
            <div className="rounded-lg border border-border bg-surface p-4 mt-2 space-y-2">
              <p><strong className="text-foreground">Trigger:</strong> New Calendly booking (discovery call)</p>
              <p><strong className="text-foreground">Action 1:</strong> Create or update contact in CRM</p>
              <p><strong className="text-foreground">Action 2:</strong> Create deal in &quot;Discovery&quot; pipeline stage</p>
              <p><strong className="text-foreground">Action 3:</strong> Send Slack notification to you</p>
              <p className="text-xs text-muted">Estimated setup time: 15 minutes</p>
            </div>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Recipe 3: Newsletter Signup &rarr; CRM + Tag</h3>
            <div className="rounded-lg border border-border bg-surface p-4 mt-2 space-y-2">
              <p><strong className="text-foreground">Trigger:</strong> New beehiiv subscriber</p>
              <p><strong className="text-foreground">Action 1:</strong> Create contact in CRM with &quot;subscriber&quot; label</p>
              <p><strong className="text-foreground">Action 2:</strong> If subscriber came from a specific referral source, add that as a custom field</p>
              <p className="text-xs text-muted">Estimated setup time: 10 minutes</p>
            </div>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Recipe 4: Lead Score &rarr; Hot Lead Alert</h3>
            <div className="rounded-lg border border-border bg-surface p-4 mt-2 space-y-2">
              <p><strong className="text-foreground">Trigger:</strong> CRM contact updated (opened 3+ emails AND booked a call)</p>
              <p><strong className="text-foreground">Action 1:</strong> Move deal to &quot;Qualified&quot; stage</p>
              <p><strong className="text-foreground">Action 2:</strong> Send priority Slack/email notification</p>
              <p className="text-xs text-muted">Estimated setup time: 25 minutes. Requires Make (Zapier Free can&apos;t do conditional logic).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Why HubSpot Professional Is Overkill</h2>
            <p>
              HubSpot Marketing Hub Professional ($800/month) gives you: A/B testing on emails,
              custom reporting dashboards, campaign management, social media scheduling, SEO
              tools, and 2,000 marketing contacts. Sales Hub Professional ($90/user/month) adds:
              deal automation, sequences (capped at 500 enrollments/month), meeting scheduling,
              and forecasting.
            </p>
            <p>
              Here&apos;s the honest question: do you use any of that right now? If you&apos;re
              a team of 1&ndash;5 people doing under $500K/year in revenue, the answer is almost
              certainly no. You don&apos;t need A/B testing when you send one newsletter a week
              to 800 people. You don&apos;t need forecasting when you have 12 deals in your
              pipeline. You don&apos;t need custom reporting when you can count your marketing
              channels on one hand.
            </p>
            <p>
              HubSpot Professional is built for marketing teams with dedicated ops people who
              will actually configure the workflows, build the reports, and maintain the
              segmentation. Without that person, you&apos;re paying $800/month for a tool
              running at 15% capacity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When to Actually Upgrade to HubSpot</h2>
            <p>
              There are legitimate triggers that make HubSpot Professional worth the investment.
              Watch for these:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">You have 5,000+ marketing contacts</strong> and need
                advanced segmentation with behavioral triggers (page visits, email engagement scores,
                lifecycle stage changes).</li>
              <li><strong className="text-foreground">You have 3+ sales reps</strong> who need shared
                sequences, call tracking, and pipeline reporting that a manager actually reviews weekly.</li>
              <li><strong className="text-foreground">You&apos;re running multi-channel campaigns</strong> (email
                + ads + social + landing pages) and need attribution reporting to know what&apos;s
                working.</li>
              <li><strong className="text-foreground">You hired a marketing ops person.</strong> If
                nobody owns the HubSpot instance full-time, you won&apos;t get the value. This is
                the real gate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Follow This Guide</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">E-commerce businesses</strong> &mdash; your lead
                capture is fundamentally different. You need Klaviyo or Drip with cart abandonment
                triggers and product recommendation engines. These stacks don&apos;t do that.</li>
              <li><strong className="text-foreground">Companies with existing HubSpot contracts</strong> &mdash;
                if you&apos;re already paying for HubSpot Professional and using 60%+ of its features,
                switching to a budget stack creates more migration pain than it saves in cost.</li>
              <li><strong className="text-foreground">Teams that need HIPAA or SOC 2 compliance</strong> &mdash;
                budget tools often lack the compliance certifications that regulated industries require.
                Check each vendor&apos;s security page before committing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-foreground">Building automations before you have leads.</strong> Get
                the form live and generating submissions before you spend 3 hours in Make. Manual
                process first, automated process second.
              </li>
              <li>
                <strong className="text-foreground">Over-collecting form fields.</strong> Every additional
                field reduces conversion rate by 5&ndash;10%. Name + email is enough for initial capture.
                Qualify later via email or a discovery call.
              </li>
              <li>
                <strong className="text-foreground">Choosing Zapier by default when Make is cheaper.</strong> For
                multi-step automations, Make&apos;s Core plan ($10.59/month for 10,000 operations) destroys
                Zapier&apos;s pricing. Zapier is only cheaper if you need fewer than 100 tasks/month
                (free tier) or you value a simpler interface over cost savings.
              </li>
              <li>
                <strong className="text-foreground">Skipping the CRM.</strong> Spreadsheets work for your
                first 20 leads. They fall apart at 50. A CRM at $14/month is the cheapest insurance
                against losing track of money on the table.
              </li>
              <li>
                <strong className="text-foreground">Not testing the full flow before launching.</strong> Submit
                your own form. Watch the automation fire. Check that the CRM contact is created
                correctly. Open the welcome email. Five minutes of testing prevents embarrassment.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Bottom Line</h2>
            <p>
              You don&apos;t need $800/month software to capture and nurture leads. A
              $14/month stack handles the fundamentals. An $85/month stack handles sophistication.
              The gap between that and HubSpot Professional isn&apos;t features &mdash; it&apos;s
              having a dedicated person to operate the machine. If you don&apos;t have that person,
              save the money and build lean.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the cheapest way to automate lead capture?</h3>
                <p>The cheapest effective stack is a free form tool (Tally or Google Forms) connected to a free CRM (HubSpot free tier or Folk) via Zapier&apos;s free plan. Total cost: $0/month for up to 100 leads per month. Upgrade to paid tools only when volume exceeds free tier limits.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need HubSpot for lead capture?</h3>
                <p>No. HubSpot Professional ($800+/month) is overkill for most small businesses. You can replicate 80% of its lead capture functionality with Tally forms, Make automations, and a lightweight CRM for under $85/month. HubSpot makes sense only when you have a dedicated marketing operations person.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I send leads from a form to my CRM automatically?</h3>
                <p>Connect your form tool to your CRM using Zapier or Make. When someone submits a form, the automation creates a new contact in your CRM with all the submitted fields mapped. Most form tools (Tally, Typeform, JotForm) have native integrations with popular CRMs, often requiring zero code.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "pipedrive", "hubspot-crm", "tally", "beehiiv"]}
            comparisons={["zapier-vs-make", "hubspot-crm-vs-pipedrive"]}
            guides={[
              "zapier-setup-guide",
              "make-setup-guide",
              "crm-integrations-that-matter",
            ]}
          />
        </div>
      </div>
    </>
  );
}
