import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Success Tools: When Spreadsheets Stop Working",
  description:
    "Gainsight vs Vitally vs Totango compared for growing SaaS teams. When you actually need CS software (hint: 50+ accounts), health score reality check, and real pricing.",
};

export default function CustomerSuccessToolsGuide() {
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
            <span className="text-foreground font-medium truncate">Customer Success Tools</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Customer Success
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Customer Success Tools: When Spreadsheets Stop Working
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 14 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Every SaaS company hits the same inflection point: your CSM team is managing accounts
            in a spreadsheet, renewal dates live in someone&apos;s Google Calendar, and &ldquo;health
            scores&rdquo; are whatever the account manager felt during the last call. The spreadsheet
            worked at 20 accounts. At 50, things start falling through cracks. At 100+, you&apos;re
            losing customers you could have saved because nobody noticed the warning signs.
          </p>
          <p>
            That&apos;s the moment CS platforms sell to. But here&apos;s what the vendors won&apos;t
            tell you: Gainsight starts at $2,500/month. Totango&apos;s useful tiers cost $1,000+/month.
            And most companies under 200 accounts can get 80% of the value from Vitally or even a
            well-structured CRM with health score fields. The right tool depends on your team size,
            account count, and whether you actually have the data to power health scores.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Real Pricing (Because Nobody Lists It)</h2>
            <p>
              Customer success platforms are notorious for hiding pricing behind &ldquo;Contact
              Sales&rdquo; forms. Here&apos;s what you&apos;ll actually pay based on reported
              contract values and vendor conversations.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Estimated Monthly Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Vitally</td>
                    <td className="px-4 py-2.5">Startup</td>
                    <td className="px-4 py-2.5">~$300-500/mo</td>
                    <td className="px-4 py-2.5">Startups with 1-3 CSMs, 50-200 accounts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Vitally</td>
                    <td className="px-4 py-2.5">Growth</td>
                    <td className="px-4 py-2.5">~$750-1,500/mo</td>
                    <td className="px-4 py-2.5">Growing teams, 200-1,000 accounts, playbooks</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Totango</td>
                    <td className="px-4 py-2.5">Starter (free)</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">Testing only &mdash; limited to basic features, community support</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Totango</td>
                    <td className="px-4 py-2.5">Growth</td>
                    <td className="px-4 py-2.5">~$1,000-2,000/mo</td>
                    <td className="px-4 py-2.5">Mid-market, 500+ accounts, segmentation, automated journeys</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Totango</td>
                    <td className="px-4 py-2.5">Enterprise</td>
                    <td className="px-4 py-2.5">$3,000-5,000+/mo</td>
                    <td className="px-4 py-2.5">Large teams, custom integrations, dedicated support</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Gainsight</td>
                    <td className="px-4 py-2.5">CS Essentials</td>
                    <td className="px-4 py-2.5">~$2,500/mo</td>
                    <td className="px-4 py-2.5">Mid-market companies with established CS processes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Gainsight</td>
                    <td className="px-4 py-2.5">Enterprise</td>
                    <td className="px-4 py-2.5">$5,000-15,000+/mo</td>
                    <td className="px-4 py-2.5">Enterprise SaaS with complex onboarding, large CS teams</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              All pricing is estimated from reported contracts and vendor conversations. Gainsight and
              Totango Growth/Enterprise require annual commitments. Vitally offers monthly billing on
              Startup tier. Totango Starter is free but severely limited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When You Actually Need CS Software (The 50-Account Rule)</h2>
            <p>
              Here&apos;s the honest framework for when to invest:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Account Count</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What You Need</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Under 30 accounts</td>
                    <td className="px-4 py-2.5">A CRM (HubSpot free, Pipedrive) with custom fields for health status and renewal dates</td>
                    <td className="px-4 py-2.5">$0-$24/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">30-50 accounts</td>
                    <td className="px-4 py-2.5">CRM + a spreadsheet dashboard tracking NPS, usage, and renewal dates. Manual but manageable.</td>
                    <td className="px-4 py-2.5">$0-$50/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">50-200 accounts</td>
                    <td className="px-4 py-2.5">Vitally Startup or Totango Starter. Automated health scoring, task management, basic playbooks.</td>
                    <td className="px-4 py-2.5">$0-$500/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">200-1,000 accounts</td>
                    <td className="px-4 py-2.5">Vitally Growth or Totango Growth. Segmentation, automated journeys, integration with product data.</td>
                    <td className="px-4 py-2.5">$750-$2,000/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">1,000+ accounts</td>
                    <td className="px-4 py-2.5">Gainsight or Totango Enterprise. Advanced analytics, product adoption tracking, executive dashboards.</td>
                    <td className="px-4 py-2.5">$2,500-$15,000+/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              The brutal truth: if you have under 50 accounts, a CS platform is a solution looking
              for a problem. Your CSMs can keep 50 accounts in their heads with a basic CRM. The
              cost of a Gainsight deployment ($30K+/year minimum) is better spent hiring another
              CSM who manages 30 more accounts personally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Health Scores: The Reality Check</h2>
            <p>
              Every CS platform sells health scores as the killer feature. Color-coded dashboards
              showing which accounts are green, yellow, or red. It sounds great in the demo. In
              practice, most health scores are worse than useless &mdash; they&apos;re confidently wrong.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <p className="text-foreground font-semibold">Why Most Health Scores Fail</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-foreground">Garbage in, garbage out.</strong> Health scores combine product usage, support tickets, NPS, and engagement data. If your product doesn&apos;t track granular usage events, the score is built on guesswork. Most startups don&apos;t have the data infrastructure to feed a health score properly.</li>
                <li><strong className="text-foreground">Lagging indicators.</strong> By the time a health score turns red, the customer is already halfway out the door. A customer who stops logging in didn&apos;t churn because they stopped logging in &mdash; they stopped logging in because something else went wrong. The score tells you what happened, not what&apos;s about to happen.</li>
                <li><strong className="text-foreground">False greens are worse than no score.</strong> An account that looks green because they log in daily &mdash; but only because they&apos;re forced to for one workflow &mdash; gives your team false confidence. When renewal comes, the buyer says &ldquo;we never adopted it&rdquo; and your CSM is blindsided.</li>
              </ul>
              <p className="text-foreground font-semibold mt-3">What Actually Works</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-foreground">Leading indicators you define manually.</strong> Did the champion respond to your last email? Did they attend QBR? Are they expanding users? These human-judgment signals beat algorithmic scores for accounts under 500.</li>
                <li><strong className="text-foreground">Usage depth, not frequency.</strong> Logins mean nothing. Feature adoption matters. If a customer uses 3 of your 10 core features, they&apos;re underadopting regardless of how often they log in. Track breadth of feature usage, not login count.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Platform-by-Platform Breakdown</h2>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Vitally: Best for Startups and Small CS Teams</h3>
            <p>
              Vitally is the clear winner for companies with 1-5 CSMs managing 50-500 accounts.
              The Startup tier (~$300-500/month) gives you health scores, account-level task
              management, automated alerts, and integrations with Segment, Mixpanel, and common
              CRMs. The interface is clean and modern &mdash; your team actually wants to use it,
              which matters more than you think for adoption.
            </p>
            <p className="mt-2">
              Vitally&apos;s standout feature is its flexibility in building health scores. Instead
              of a rigid formula, you define weighted inputs from product usage, support data,
              relationship signals, and financial indicators. You can iterate on the model as
              you learn what actually predicts churn for your product.
            </p>
            <p className="mt-2">
              The limitation: Vitally doesn&apos;t have the deep journey orchestration and
              enterprise analytics that Gainsight offers. Once you&apos;re past 5 CSMs and 500+
              accounts, you&apos;ll start hitting workflow limits.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Totango: Best Free Tier, Complex at Scale</h3>
            <p>
              Totango&apos;s Starter tier is genuinely free &mdash; a rarity in CS software. It
              covers basic health scoring, customer segments, and a limited set of automated
              workflows. It&apos;s useful for testing whether CS software adds value before
              committing budget. But the free tier is restrictive enough that serious teams
              outgrow it within a quarter.
            </p>
            <p className="mt-2">
              Totango Growth (~$1,000-2,000/month) is where the platform gets powerful. SuccessBLOCs
              are pre-built workflow templates for onboarding, adoption, renewal, and expansion.
              They&apos;re opinionated playbooks that work well if they match your process and
              feel constraining if they don&apos;t.
            </p>
            <p className="mt-2">
              The trade-off: Totango&apos;s interface is functional but not intuitive. Implementation
              takes 4-8 weeks for Growth tier and longer for Enterprise. Your CS ops person
              (you&apos;ll need one) will spend significant time configuring segments, journeys,
              and integrations.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Gainsight: The Enterprise Standard (and Enterprise Price)</h3>
            <p>
              Gainsight is the Salesforce of customer success. It&apos;s the most powerful platform,
              the most configurable, and the most expensive. CS Essentials starts around $2,500/month
              with annual commitment. Enterprise deals regularly exceed $100K/year.
            </p>
            <p className="mt-2">
              If you have 10+ CSMs, 1,000+ accounts, and a dedicated CS ops team to manage the
              platform, Gainsight is the right choice. Its journey orchestration, executive
              dashboards, product adoption analytics, and Salesforce integration are unmatched.
              The NPS and survey tools are built-in. The renewal forecasting connects to your
              revenue data.
            </p>
            <p className="mt-2">
              For everyone else, Gainsight is a trap. The implementation takes 3-6 months. You
              need a full-time admin. The complexity means your CSMs spend time managing the tool
              instead of managing customers. Companies under 500 accounts with 3 or fewer CSMs
              should not buy Gainsight, no matter how good the demo looks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Spreadsheet Alternative: What to Track Before You Buy</h2>
            <p>
              Before spending $300-2,500/month on CS software, build the spreadsheet version.
              If your team won&apos;t use a structured spreadsheet, they won&apos;t use Gainsight either.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Column</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What It Tracks</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Update Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Account name</td>
                    <td className="px-4 py-2.5">Company and primary contact</td>
                    <td className="px-4 py-2.5">As needed</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">ARR</td>
                    <td className="px-4 py-2.5">Annual contract value</td>
                    <td className="px-4 py-2.5">On change</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Renewal date</td>
                    <td className="px-4 py-2.5">Next renewal with color-coded urgency</td>
                    <td className="px-4 py-2.5">Annually</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Health (R/Y/G)</td>
                    <td className="px-4 py-2.5">CSM gut feeling plus 2-3 data points</td>
                    <td className="px-4 py-2.5">Biweekly</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Last meaningful contact</td>
                    <td className="px-4 py-2.5">Date of last real interaction (not auto-email)</td>
                    <td className="px-4 py-2.5">After each contact</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Champion status</td>
                    <td className="px-4 py-2.5">Is champion still there? Still engaged?</td>
                    <td className="px-4 py-2.5">Monthly</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Open risks</td>
                    <td className="px-4 py-2.5">Active issues, unresolved complaints</td>
                    <td className="px-4 py-2.5">As needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              If your team keeps this spreadsheet current for 3 months, you&apos;ve proven the
              process works and you&apos;re ready for a CS platform to automate it. If the
              spreadsheet goes stale after 2 weeks, no software will fix that &mdash; you have a
              process problem, not a tooling problem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Buy CS Software</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Companies with fewer than 50 managed accounts.</strong> Your CSMs can know each account personally. A CRM with custom fields and calendar reminders covers renewal tracking. Spending $300+/month on CS software at this stage is premature optimization.</li>
              <li><strong className="text-foreground">Teams without product usage data.</strong> Health scores need data inputs. If your product doesn&apos;t track feature adoption, login frequency, or user engagement events, a CS platform will build scores on incomplete information. Get your product analytics right first (Mixpanel, Amplitude, PostHog), then layer CS on top.</li>
              <li><strong className="text-foreground">Companies where CS reports to sales.</strong> If your CS team&apos;s primary job is upselling, not retention, you need a CRM with pipeline management, not a CS platform. Gainsight and Vitally are built around health and retention workflows, not deal progression.</li>
              <li><strong className="text-foreground">Startups still figuring out product-market fit.</strong> If you&apos;re iterating on the product every quarter, your CS workflows will change just as fast. Building automated playbooks on a shifting foundation wastes setup time. Use the spreadsheet until your product and CS motions stabilize.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Buying Gainsight as your first CS tool.</strong> Gainsight&apos;s implementation takes 3-6 months and requires a dedicated admin. Starting with Vitally or Totango&apos;s free tier lets you learn what CS workflows matter for your business before committing $30K+/year.</li>
              <li><strong className="text-foreground">Trusting health scores without validating them.</strong> Before acting on automated health scores, manually review 20-30 accounts the platform marks as &ldquo;healthy&rdquo; and 20-30 it marks as &ldquo;at risk.&rdquo; If the scores don&apos;t match your team&apos;s instinct, the inputs are wrong. Calibrate before scaling.</li>
              <li><strong className="text-foreground">Building too many automated playbooks at once.</strong> Start with one: the renewal playbook that triggers 90 days before contract end. Get it right. Then add onboarding. Then add at-risk intervention. Teams that build 10 playbooks on day one end up maintaining 10 broken automations.</li>
              <li><strong className="text-foreground">Not connecting product usage data.</strong> A CS platform without product data is an expensive CRM. The whole point is correlating product adoption with retention risk. If your Segment/Mixpanel integration isn&apos;t set up properly, you&apos;re missing the most valuable input.</li>
              <li><strong className="text-foreground">Ignoring CSM adoption of the tool.</strong> CS platforms only work if CSMs use them daily. If your team finds the tool cumbersome (common with Gainsight and Totango), they&apos;ll revert to spreadsheets. Vitally&apos;s modern UI has the highest CSM adoption rate for a reason &mdash; usability matters.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Verdict</h2>
            <p>
              <strong className="text-foreground">Under 50 accounts:</strong> don&apos;t buy CS software.
              Use your CRM (HubSpot, Pipedrive, Salesforce) with custom fields for health, renewal
              date, and champion status. Add a Google Sheet for portfolio-level visibility. Total
              cost: $0-50/month.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">50-500 accounts:</strong> Vitally is the right tool.
              The Startup tier (~$300-500/month) gives you health scores, task management, and
              integrations without the complexity of enterprise platforms. Your team will actually
              use it, which is half the battle.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">500-1,000 accounts:</strong> Vitally Growth or Totango
              Growth. You need segmentation, automated journeys, and more sophisticated analytics.
              Budget $750-2,000/month. Test Totango&apos;s free tier first to see if the workflow
              model fits your team before committing.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">1,000+ accounts with 10+ CSMs:</strong> Gainsight
              earns its price here. The depth of analytics, journey orchestration, and Salesforce
              integration justify the $2,500-5,000+/month cost &mdash; but only if you have dedicated
              CS ops to manage the platform. Without an admin, Gainsight becomes expensive shelfware.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Gainsight cost?</h3>
                <p>Gainsight CS Essentials starts around $2,500/month with an annual commitment. Enterprise plans range from $5,000-15,000+/month depending on account volume, users, and integrations. All pricing requires a sales conversation &mdash; there&apos;s no self-serve option. Expect a 3-6 month implementation period on top of the subscription.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best customer success tool for startups?</h3>
                <p>Vitally Startup tier (~$300-500/month) is the best fit for startups with 1-3 CSMs managing 50-200 accounts. It has a modern interface with high team adoption, flexible health scoring, and integrations with Segment, Mixpanel, and common CRMs. For companies under 50 accounts, a CRM with custom fields is sufficient.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do customer health scores actually prevent churn?</h3>
                <p>Only if built on the right data. Health scores based on product usage depth (feature adoption, not just logins), relationship signals (champion engagement, QBR attendance), and financial indicators (expansion vs contraction) can identify at-risk accounts 60-90 days before renewal. Scores based solely on login frequency are unreliable and create false confidence.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I switch from spreadsheets to CS software?</h3>
                <p>When you cross 50 managed accounts and your CSMs can no longer reliably track health, renewal dates, and action items manually. Another signal: if renewal surprises (positive or negative) start happening &mdash; meaning your team didn&apos;t see a churn risk or expansion opportunity coming &mdash; it&apos;s time for better tooling.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
