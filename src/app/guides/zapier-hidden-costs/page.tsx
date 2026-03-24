import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Zapier's Hidden Costs: Why Your $20/Month Plan Becomes $100",
  description:
    "Zapier's real pricing exposed: multi-step task counting, premium app charges, the 750-task free tier reality, paths and filters counting as tasks, and when Make actually saves money.",
};

export default function ZapierHiddenCostsPage() {
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
              Zapier Hidden Costs
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Pricing Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Zapier&apos;s Hidden Costs: Why Your $20/Month Plan Becomes $100
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Zapier&apos;s Professional plan starts at $29.99/month for 750 tasks. That sounds
            reasonable until you realize every step in a multi-step Zap counts as a separate
            task, filters and paths burn tasks even when they stop the workflow, and premium
            apps cost extra. Here is how the math actually works.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Multi-step task counting */}
          <section>
            <h2 className="text-xl font-bold mb-3">Multi-Step Zap Task Counting: The Core Problem</h2>
            <p className="text-muted leading-relaxed mb-3">
              Zapier&apos;s billing is based on &quot;tasks.&quot; A task is any action that
              executes in a Zap. The critical detail: every step in a multi-step Zap counts as
              a separate task. This is how a single automation consumes your entire monthly
              allocation.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">Example: A common lead capture Zap</p>
              <p className="text-sm text-muted mb-2">
                Trigger: New form submission (Typeform) &rarr; Step 1: Create contact (HubSpot)
                &rarr; Step 2: Add to list (Mailchimp) &rarr; Step 3: Send notification (Slack)
                &rarr; Step 4: Log row (Google Sheets)
              </p>
              <p className="text-sm text-muted">
                That is 4 tasks per trigger. If this Zap fires 200 times per month, that&apos;s
                800 tasks &mdash; already over the 750-task Professional plan limit. One automation
                just consumed your entire monthly allocation. You now need the Team plan at
                $103.50/month, or you buy additional task packs.
              </p>
            </div>
            <p className="text-muted leading-relaxed mb-3">
              The trigger itself does not count as a task (Zapier changed this in 2023). Only
              actions count. But in practice, most useful automations have 3&ndash;5 actions,
              which means your effective trigger count is 150&ndash;250 per month on the
              Professional plan &mdash; not 750.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zap Complexity</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Steps per Trigger</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Effective Triggers on 750 Tasks</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Effective Triggers on 2,000 Tasks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Simple (1 action)</td>
                    <td className="px-4 py-2.5 text-muted">1</td>
                    <td className="px-4 py-2.5 text-muted">750</td>
                    <td className="px-4 py-2.5 text-muted">2,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Standard (3 actions)</td>
                    <td className="px-4 py-2.5 text-muted">3</td>
                    <td className="px-4 py-2.5 text-muted">250</td>
                    <td className="px-4 py-2.5 text-muted">666</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Complex (5 actions)</td>
                    <td className="px-4 py-2.5 text-muted">5</td>
                    <td className="px-4 py-2.5 text-muted">150</td>
                    <td className="px-4 py-2.5 text-muted">400</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Advanced (8 actions)</td>
                    <td className="px-4 py-2.5 text-muted">8</td>
                    <td className="px-4 py-2.5 text-muted">93</td>
                    <td className="px-4 py-2.5 text-muted">250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Premium Apps */}
          <section>
            <h2 className="text-xl font-bold mb-3">Premium App Pricing</h2>
            <p className="text-muted leading-relaxed mb-3">
              Zapier categorizes some apps as &quot;Premium.&quot; These apps are only available
              on paid plans (Professional and above). The apps themselves don&apos;t cost extra per
              use, but they force you onto a paid plan even if your task volume would fit
              on the Free tier.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Premium apps include:</strong> Salesforce, HubSpot
                (some actions), Shopify, PayPal, QuickBooks, Zendesk, and many others. The full
                list changes frequently. Zapier does not publish a comprehensive public list.
              </li>
              <li>
                <strong className="text-foreground">Free plan blocks premium apps entirely.</strong> If
                any step in your Zap uses a premium app, the entire Zap requires a paid plan.
                This means many &quot;simple&quot; one-step Zaps still require Professional.
              </li>
              <li>
                <strong className="text-foreground">Some &quot;standard&quot; apps have premium actions.</strong> An
                app might be free for basic triggers but premium for specific actions. For
                example, a CRM might offer free &quot;new contact&quot; triggers but charge for
                &quot;update deal&quot; actions.
              </li>
            </ul>
          </section>

          {/* Free Tier Reality */}
          <section>
            <h2 className="text-xl font-bold mb-3">The 100-Task Free Tier Reality</h2>
            <p className="text-muted leading-relaxed mb-3">
              Zapier&apos;s Free plan gives you 100 tasks per month and 5 single-step Zaps.
              Here is what that actually means in practice:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Single-step only.</strong> Free Zaps can have one
                trigger and one action. No multi-step workflows. This rules out most useful
                business automations (which typically need 2&ndash;5 steps).
              </li>
              <li>
                <strong className="text-foreground">100 tasks = 100 runs.</strong> Since free Zaps are
                single-step, 100 tasks means 100 Zap runs per month. That&apos;s roughly 3 per
                day. If you receive more than 3 form submissions, Slack messages, or emails
                that trigger automations daily, you&apos;ll exceed the limit.
              </li>
              <li>
                <strong className="text-foreground">15-minute polling.</strong> Free plan Zaps check for
                new data every 15 minutes (compared to 2 minutes on Professional and 1 minute
                on Team). A 15-minute delay makes time-sensitive automations unreliable.
              </li>
              <li>
                <strong className="text-foreground">No premium apps.</strong> The free plan blocks all
                premium app integrations, which includes many popular business tools.
              </li>
            </ul>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">Verdict on the free tier</p>
              <p className="text-sm text-muted">
                Zapier&apos;s free plan is a demo, not a working tool. It lets you test the
                concept and prove an automation works. It is not viable for any business process
                that runs more than a few times per day. If you&apos;re evaluating Zapier,
                expect to be on the $29.99/month Professional plan within the first week.
              </p>
            </div>
          </section>

          {/* Paths and Filters */}
          <section>
            <h2 className="text-xl font-bold mb-3">Paths and Filters Counting as Tasks</h2>
            <p className="text-muted leading-relaxed mb-3">
              This is the detail that catches experienced Zapier users. Paths (conditional
              logic branches) and Filters (conditions that stop a Zap) both consume tasks.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Filters count as tasks when they stop a Zap.</strong> If
                a filter evaluates the data and determines the Zap should not continue, that
                evaluation still counts as a task. You pay for automations that do nothing.
              </li>
              <li>
                <strong className="text-foreground">Every path branch that runs counts separately.</strong> If
                you have a Path with 3 branches and data matches Path A, all steps in Path A
                count as tasks. If data matches all paths, all steps in all paths count. Paths
                can easily double or triple your task consumption.
              </li>
              <li>
                <strong className="text-foreground">Looping multiplies tasks.</strong> If a Zap uses a
                &quot;Looping by Zapier&quot; step to process 10 items, every action inside that
                loop runs 10 times. A 3-action loop processing 10 items = 30 tasks from a
                single trigger.
              </li>
            </ul>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tasks per Trigger</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">200 Triggers/mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Simple: 2 actions</td>
                    <td className="px-4 py-2.5 text-muted">2</td>
                    <td className="px-4 py-2.5 text-muted">400 tasks</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo (Professional)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Filter + 2 actions</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;3</td>
                    <td className="px-4 py-2.5 text-muted">400&ndash;600 tasks</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo (Professional)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Path (2 branches, 3 actions each)</td>
                    <td className="px-4 py-2.5 text-muted">3&ndash;6</td>
                    <td className="px-4 py-2.5 text-muted">600&ndash;1,200 tasks</td>
                    <td className="px-4 py-2.5 text-muted">$29.99&ndash;$103.50/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Loop (10 items, 3 actions)</td>
                    <td className="px-4 py-2.5 text-muted">30</td>
                    <td className="px-4 py-2.5 text-muted">6,000 tasks</td>
                    <td className="px-4 py-2.5 text-muted">$103.50+/mo (Team + extra tasks)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* When Make Saves Money */}
          <section>
            <h2 className="text-xl font-bold mb-3">When Make Actually Saves Money (Real Numbers)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Make (formerly Integromat) uses &quot;operations&quot; instead of tasks. The
              counting is similar &mdash; each step counts &mdash; but the pricing per operation
              is dramatically lower. Here is the direct comparison:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Volume</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Savings with Make</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">750 tasks/ops</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo (Core)</td>
                    <td className="px-4 py-2.5 text-muted">$233/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">2,000 tasks/ops</td>
                    <td className="px-4 py-2.5 text-muted">$103.50/mo (Team)</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo (Core)</td>
                    <td className="px-4 py-2.5 text-muted">$1,115/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000 tasks/ops</td>
                    <td className="px-4 py-2.5 text-muted">$103.50+/mo (Team + extras)</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo (Core, included)</td>
                    <td className="px-4 py-2.5 text-muted">$1,100+/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000 tasks/ops</td>
                    <td className="px-4 py-2.5 text-muted">Custom pricing</td>
                    <td className="px-4 py-2.5 text-muted">$34.12/mo (Teams)</td>
                    <td className="px-4 py-2.5 text-muted">Thousands per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-3">
              Make&apos;s Core plan at $10.59/month includes 10,000 operations. That&apos;s the
              same volume that requires Zapier&apos;s Team plan at $103.50/month or higher. The
              cost difference is roughly 10x at this volume.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">When Zapier is still worth it</p>
              <p className="text-sm text-muted">
                Zapier wins on integration breadth (7,000+ apps vs. Make&apos;s 1,800+), ease of
                setup, and speed for non-technical users. If you have fewer than 5 simple,
                single-step Zaps running under 750 tasks per month, Zapier Professional at
                $29.99/month is fine. The savings from Make only become meaningful at 2,000+
                tasks per month, which is where most growing businesses end up within 3&ndash;6
                months.
              </p>
            </div>
          </section>

          {/* Who Should NOT Use This Guide */}
          <section>
            <h2 className="text-xl font-bold mb-3">Who Should NOT Use This Guide</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Enterprise teams on custom Zapier contracts.</strong> If
                you&apos;re on Zapier Enterprise with negotiated pricing, your task costs may
                differ from published rates. This guide covers standard published pricing.
              </li>
              <li>
                <strong className="text-foreground">Teams that only use 1&ndash;2 simple Zaps.</strong> If
                your total automation is a single-step Zap that runs 50 times a month, the
                $29.99/month Professional plan is genuinely reasonable and the complexity of
                switching to Make is not worth $20/month in savings.
              </li>
              <li>
                <strong className="text-foreground">Users who need Zapier-exclusive integrations.</strong> Some
                niche SaaS tools only connect through Zapier. If your workflow depends on an
                integration that Make does not support, the price premium is justified.
              </li>
            </ul>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Building multi-step Zaps without calculating task
                consumption.</strong> Before building, multiply the number of actions by your
                expected monthly triggers. If the result exceeds 750, you need the Team plan
                or should consider Make.
              </li>
              <li>
                <strong className="text-foreground">Using Paths when Filters would suffice.</strong> Paths
                consume more tasks because both the path evaluation and all steps in the matched
                branch count. If you only need to stop a Zap for certain conditions, a Filter
                is cheaper (though it still costs a task when it stops).
              </li>
              <li>
                <strong className="text-foreground">Not consolidating Zaps.</strong> Multiple simple Zaps
                triggered by the same event can often be combined into one multi-step Zap with
                a shared trigger, reducing total triggers and simplifying management.
              </li>
              <li>
                <strong className="text-foreground">Ignoring the polling interval.</strong> Free and
                Starter-equivalent plans poll every 15 minutes. If you build a Zap expecting
                real-time responses (e.g., instant Slack notifications from form submissions),
                the 15-minute delay will frustrate your team. Pay for faster polling or use
                webhooks.
              </li>
              <li>
                <strong className="text-foreground">Assuming Make is a drop-in replacement.</strong> Make
                is cheaper but has a steeper learning curve, fewer integrations, and a visual
                builder that takes 2&ndash;4 hours to learn. Budget the transition time before
                committing to the switch.
              </li>
            </ul>
          </section>

          {/* Bottom Line */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
            <p className="text-muted leading-relaxed mb-3">
              Zapier&apos;s pricing is designed around simplicity for simple automations. One
              trigger, one action, under 750 times a month &mdash; $29.99 and done. The
              problem is that useful automations are rarely that simple. The moment you add a
              second action, a filter, a path, or a loop, your effective cost per automation
              run doubles, triples, or multiplies by 10x.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              For most businesses running 5+ active automations with 3&ndash;5 steps each,
              the monthly Zapier bill lands between $100 and $300. That same workload on
              Make costs $10&ndash;35/month. The question is whether the ease-of-use and
              integration breadth justify the premium.
            </p>
            <p className="text-muted leading-relaxed">
              If you&apos;re currently on Zapier, log into your account and check your actual
              task usage (Settings &rarr; Usage). Compare that number against Make&apos;s pricing.
              If the savings exceed $50/month, the switch is worth exploring. If it&apos;s under
              $20/month, the migration effort probably isn&apos;t worth it.
            </p>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do filters really count as tasks on Zapier?</h3>
                <p className="text-muted">Yes. When a filter evaluates data and stops the Zap from continuing, that filter step counts as one task. You pay for the evaluation even though no downstream action occurred. This is documented in Zapier&apos;s help center but easy to miss.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many tasks does a typical business use per month?</h3>
                <p className="text-muted">A small business with 5&ndash;10 active multi-step Zaps typically uses 2,000&ndash;5,000 tasks per month. A growing business with 15&ndash;25 Zaps often uses 10,000&ndash;25,000 tasks per month. These numbers put most businesses well past the Professional plan into Team territory or custom pricing.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make really 10x cheaper than Zapier?</h3>
                <p className="text-muted">At comparable volumes, yes. Make Core at $10.59/month includes 10,000 operations. Zapier&apos;s Team plan at $103.50/month includes 2,000 tasks. The gap narrows at low volumes and widens at high volumes. The tradeoff is that Make has fewer integrations and a steeper learning curve.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I reduce my Zapier bill without switching platforms?</h3>
                <p className="text-muted">Yes. Consolidate Zaps that share triggers. Replace Paths with Filters where possible. Use webhooks instead of polling to avoid wasted task checks. Remove Zaps you&apos;re not actively using (paused Zaps don&apos;t consume tasks). These optimizations can reduce task usage by 20&ndash;40%.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n"]}
            comparisons={["zapier-vs-make", "zapier-vs-n8n"]}
            guides={["migrate-zapier-to-make", "migrate-zapier-to-n8n"]}
          />
        </div>
      </article>
    </>
  );
}
