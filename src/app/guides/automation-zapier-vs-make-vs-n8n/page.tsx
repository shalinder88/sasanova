import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zapier vs Make vs n8n: Which Automation Tool Fits Your Budget and Brain",
  description:
    "Three automation platforms, three different philosophies. A real pricing comparison and honest assessment of who should use what.",
};

export default function AutomationComparisonPage() {
  return (
    <>
      {/* Breadcrumb */}
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
              Zapier vs Make vs n8n
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Automation
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Zapier vs Make vs n8n: Which Automation Tool Fits Your Budget and Brain
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Three tools that do roughly the same thing with wildly different pricing,
            interfaces, and assumptions about who you are. The right choice depends less
            on features and more on how your brain works.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Landscape */}
          <section>
            <h2 className="text-xl font-bold mb-3">Three Tools, Three Philosophies</h2>
            <p className="text-muted leading-relaxed mb-3">
              Zapier wants automation to feel like filling out a form. Make wants it to feel
              like drawing a diagram. n8n wants it to feel like writing code &mdash; with a
              visual fallback for when you don&apos;t want to.
            </p>
            <p className="text-muted leading-relaxed">
              All three connect apps, move data between them, and run workflows on triggers.
              But the experience of building and maintaining automations is so different across
              these platforms that picking the wrong one creates friction you&apos;ll feel every
              single week.
            </p>
          </section>

          {/* Zapier */}
          <section>
            <h2 className="text-xl font-bold mb-3">Zapier: Broadest Reach, Simplest Build, Worst Pricing at Scale</h2>
            <p className="text-muted leading-relaxed mb-3">
              Zapier connects to over 7,000 apps. That number matters more than people admit.
              When your workflow involves a niche CRM, an industry-specific tool, or a newer
              SaaS product, Zapier almost certainly has the integration. Make and n8n often
              don&apos;t.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The builder is linear: trigger, then action, then action. Conditional logic exists
              (Paths), but it&apos;s bolted on rather than native. You think in steps, not in
              flows. For simple automations &mdash; new form submission creates CRM contact and
              sends Slack notification &mdash; Zapier is the fastest path from idea to running
              workflow.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              Pricing is where the relationship sours. The free plan gives you 100 tasks/month
              with single-step Zaps only. The Starter plan ($29.99/month billed monthly) gives
              you 750 tasks and multi-step Zaps. The Professional plan ($73.50/month) bumps that
              to 2,000 tasks with advanced logic.
            </p>
            <p className="text-muted leading-relaxed">
              A &quot;task&quot; is each action in a Zap. A 5-step Zap that runs once consumes 5 tasks.
              Run it 100 times a month and you&apos;ve burned 500 tasks on a single automation.
              This is how Zapier&apos;s pricing gets expensive fast &mdash; multi-step workflows
              at moderate volume can eat through plans in days.
            </p>
          </section>

          {/* Make */}
          <section>
            <h2 className="text-xl font-bold mb-3">Make: Best Visual Builder, Best Per-Operation Economics</h2>
            <p className="text-muted leading-relaxed mb-3">
              Make (formerly Integromat) uses a visual canvas where you connect modules with
              lines, add routers for branching, and see your data flow as a diagram. If
              you&apos;ve ever used a flowchart tool, Make&apos;s builder feels intuitive.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The pricing model counts &quot;operations&quot; similarly to Zapier&apos;s tasks, but at
              dramatically different rates. The free plan includes 1,000 operations/month.
              The Core plan ($10.59/month) gives you 10,000 operations. The Pro plan
              ($18.82/month) gives you 10,000 operations with priority execution and full-text
              log search.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              At 10,000 operations/month, Make costs roughly $11. Zapier&apos;s equivalent
              (Professional at 2,000 tasks) costs $73.50 &mdash; and still gives you fewer
              tasks. The gap is staggering.
            </p>
            <p className="text-muted leading-relaxed">
              The tradeoff is complexity. Make&apos;s canvas-based builder has a steeper learning
              curve. Error handling is more manual. And Make supports around 1,800 apps &mdash;
              solid coverage, but less than a quarter of Zapier&apos;s library.
            </p>

            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Who should NOT use Make</p>
              <p className="text-sm text-muted">
                Teams where multiple non-technical people need to build and edit automations.
                Make&apos;s visual builder is powerful but it intimidates people who struggle
                with flowchart thinking. If your marketing manager needs to tweak workflows
                independently, Zapier&apos;s form-style builder causes less support tickets.
              </p>
            </div>
          </section>

          {/* n8n */}
          <section>
            <h2 className="text-xl font-bold mb-3">n8n: Self-Hostable, Code-Capable, Developer-First</h2>
            <p className="text-muted leading-relaxed mb-3">
              n8n is open source. You can self-host it on your own server and run unlimited
              workflows at zero marginal cost. That headline feature is what draws developers
              in. The reality is more nuanced.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The visual builder looks similar to Make&apos;s but adds a critical feature:
              code nodes. You can drop JavaScript or Python directly into any workflow step,
              transform data however you want, and call APIs that don&apos;t have official
              integrations. For developers, this is freedom. For everyone else, it&apos;s a
              blank page that stares back at you.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              n8n Cloud (their hosted version) starts at $24/month for 2,500 executions. The
              Startup plan is $60/month for 10,000 executions. Not dramatically cheaper than
              Make for cloud-hosted usage.
            </p>
            <p className="text-muted leading-relaxed">
              The value proposition is self-hosting. Run it on a $5&ndash;$10/month VPS and
              your only ongoing cost is the server. But &quot;free&quot; ignores your time: setting up
              Docker, configuring SSL, managing updates, monitoring uptime, debugging when
              workflows silently fail at 2 AM.
            </p>
          </section>

          {/* Pricing Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-4">Real Pricing at Different Volumes</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Volume</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Self-Hosted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">100 tasks</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted">$24/mo</td>
                    <td className="px-4 py-2.5 text-muted">$5&ndash;10/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">1,000 tasks</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted">$24/mo</td>
                    <td className="px-4 py-2.5 text-muted">$5&ndash;10/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10,000 tasks</td>
                    <td className="px-4 py-2.5 text-muted">$73.50/mo</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">$60/mo</td>
                    <td className="px-4 py-2.5 text-muted">$5&ndash;10/mo*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">50,000 tasks</td>
                    <td className="px-4 py-2.5 text-muted">$146.25/mo</td>
                    <td className="px-4 py-2.5 text-muted">$29.47/mo</td>
                    <td className="px-4 py-2.5 text-muted">$120/mo</td>
                    <td className="px-4 py-2.5 text-muted">$10&ndash;20/mo*</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              *Server cost only. Does not account for setup time, maintenance, or debugging.
              Assumes a basic VPS (Hetzner, DigitalOcean, etc). Annual billing used where available.
            </p>
          </section>

          {/* When Zapier Makes Sense */}
          <section>
            <h2 className="text-xl font-bold mb-3">When Zapier Makes Sense Despite the Price</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">You need a niche integration.</strong>{" "}
                  If one of your critical tools only has a Zapier connector, the discussion is
                  over. Building custom API calls in Make or n8n for a well-supported Zapier
                  integration is a waste of engineering time.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Your team is non-technical.</strong>{" "}
                  Zapier&apos;s form-based builder requires zero technical intuition. Marketing
                  teams, ops teams, and founders who don&apos;t code can build and maintain Zaps
                  without help.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Your volume is genuinely low.</strong>{" "}
                  Under 750 tasks/month with simple workflows? Zapier Starter at $30/month is
                  fine. The cost difference with Make at this scale is $20/month. Not worth a
                  migration.
                </span>
              </li>
            </ul>
          </section>

          {/* When to Switch */}
          <section>
            <h2 className="text-xl font-bold mb-3">When to Switch from Zapier to Make</h2>
            <p className="text-muted leading-relaxed mb-3">
              These are the specific triggers that should prompt a migration:
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">1.</span>
                <span>
                  <strong className="text-foreground">Your Zapier bill exceeds $75/month.</strong>{" "}
                  At this point, you&apos;re paying 5&ndash;7x what Make would charge for
                  equivalent volume. The migration effort pays for itself in 1&ndash;2 months.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">2.</span>
                <span>
                  <strong className="text-foreground">You&apos;re building multi-branch workflows.</strong>{" "}
                  Zapier Paths work but feel clunky. Make&apos;s router system handles complex
                  branching natively and visually.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">3.</span>
                <span>
                  <strong className="text-foreground">You need to process arrays or nested data.</strong>{" "}
                  Make&apos;s iterator and aggregator modules handle batch operations that require
                  workarounds (or multiple Zaps) in Zapier.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">4.</span>
                <span>
                  <strong className="text-foreground">None of your critical tools are Zapier-exclusive.</strong>{" "}
                  Check Make&apos;s app directory first. If all your tools are supported, the
                  only reason to stay is inertia.
                </span>
              </li>
            </ul>
          </section>

          {/* Self-Hosting n8n */}
          <section>
            <h2 className="text-xl font-bold mb-3">Self-Hosting n8n: The Real Cost</h2>
            <p className="text-muted leading-relaxed mb-3">
              The server itself is cheap. A $5&ndash;$10/month VPS with 2GB RAM runs n8n
              comfortably for moderate workloads. Docker Compose makes the initial setup
              straightforward &mdash; expect 30&ndash;60 minutes if you&apos;re comfortable
              with the command line.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The hidden costs are ongoing. You&apos;re responsible for SSL certificates,
              database backups, security updates, uptime monitoring, and debugging when
              workflows fail silently. Budget 2&ndash;4 hours per month for maintenance if
              things go smoothly. Budget more if they don&apos;t.
            </p>
            <p className="text-muted leading-relaxed">
              For a solo developer running 20+ automations, self-hosted n8n saves real money
              versus cloud alternatives. For a team where the developer&apos;s time is billed
              at $100+/hour, the math reverses quickly. Four hours of monthly maintenance at
              $100/hour is $400 &mdash; more than Make&apos;s highest-tier plan.
            </p>

            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Who should NOT self-host n8n</p>
              <p className="text-sm text-muted">
                Anyone who doesn&apos;t already manage servers. If the phrase &quot;Docker
                Compose&quot; means nothing to you, n8n Cloud or Make will serve you better.
                The learning curve for self-hosting is a separate skill from building
                automations, and conflating the two is how projects stall.
              </p>
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">1.</span>
                <span>
                  <strong className="text-foreground">Choosing based on the free tier alone.</strong>{" "}
                  Free tiers test the UI, not the economics. Build your decision on what the
                  tool costs at your projected 6-month volume.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">2.</span>
                <span>
                  <strong className="text-foreground">Underestimating task/operation counts.</strong>{" "}
                  A 5-step workflow running on every form submission doesn&apos;t consume 1
                  task &mdash; it consumes 5. Multiply steps by trigger frequency to get your
                  real number.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">3.</span>
                <span>
                  <strong className="text-foreground">Migrating all automations at once.</strong>{" "}
                  Move one critical workflow first. Run it for two weeks. Then migrate the rest.
                  Parallel running catches integration gaps that documentation doesn&apos;t mention.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">4.</span>
                <span>
                  <strong className="text-foreground">Ignoring error handling.</strong>{" "}
                  Zapier retries failed steps automatically. Make and n8n require you to
                  configure error handling explicitly. Skip this and you&apos;ll discover
                  failures days after they happen.
                </span>
              </li>
            </ul>
          </section>

          {/* Bottom Line */}
          <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-3">Bottom Line</h2>
            <p className="text-muted leading-relaxed">
              Zapier is the Toyota Camry: reliable, everywhere, and you pay a premium for the
              convenience. Make is the Honda Civic: nearly as capable, significantly cheaper,
              requires slightly more engagement from the driver. n8n is building your own car:
              maximum control, minimum cost, and entirely your problem when something breaks.
              Most small businesses should start with Make. Switch to n8n when you outgrow
              cloud pricing or need code-level control. Stay with Zapier only if the integration
              library or team simplicity demands it.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make cheaper than Zapier?</h3>
                <p>Yes. Make&apos;s paid plans start lower and include more operations per dollar than Zapier. Make charges by operations (each step in a workflow), while Zapier charges by tasks (each workflow run). For multi-step workflows, Make is typically 3&ndash;5x cheaper.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I use n8n instead of Zapier or Make?</h3>
                <p>Use n8n when you need self-hosted automation, custom code execution, or want to avoid per-operation pricing entirely. n8n is ideal for developers and technical teams. Non-technical users should stick with Zapier or Make for their visual builders and managed infrastructure.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate my Zapier workflows to Make?</h3>
                <p>There is no automatic migration tool. You need to rebuild each workflow manually in Make. However, Make&apos;s visual builder makes it straightforward to recreate most Zapier zaps. Start by migrating your highest-volume workflows first to maximize immediate savings.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which automation tool has the most integrations?</h3>
                <p>Zapier leads with 6,000+ app integrations. Make offers around 1,500 native integrations. n8n has fewer native connectors but supports custom HTTP/API nodes that can connect to any service with an API. For most common SaaS tools, all three platforms have coverage.</p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
