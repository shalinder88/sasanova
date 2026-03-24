import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Self-Hosting Your Automations: Zapier to n8n Migration Guide",
  description:
    "True cost of self-hosting n8n, Docker setup walkthrough, which Zap patterns translate to n8n, and when the hybrid approach beats going all-in.",
};

export default function MigrateZapierToN8nPage() {
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
              Migrate Zapier to n8n
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Migration Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Self-Hosting Your Automations: Zapier to n8n Migration Guide
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            n8n promises unlimited automations for the cost of a VPS. That headline is
            true &mdash; and also misleading. Self-hosting trades subscription fees for
            your time, DevOps knowledge, and the risk of silent failures at 2 AM. Here
            is when the tradeoff makes sense and when it does not.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>17 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* True Cost of Self-Hosting */}
          <section>
            <h2 className="text-xl font-bold mb-3">The True Cost of Self-Hosting n8n</h2>
            <p className="text-muted leading-relaxed mb-3">
              Self-hosted n8n&apos;s Community Edition is free and open source. You pay nothing
              for the software. You pay for everything around it.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost Component</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Range</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">VPS (2GB RAM, 2 vCPU)</td>
                    <td className="px-4 py-2.5 text-muted">$5&ndash;$12/mo</td>
                    <td className="px-4 py-2.5 text-muted">Hetzner, DigitalOcean, or Vultr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">VPS (4GB RAM, production)</td>
                    <td className="px-4 py-2.5 text-muted">$12&ndash;$24/mo</td>
                    <td className="px-4 py-2.5 text-muted">Recommended for 20+ workflows</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Database (PostgreSQL)</td>
                    <td className="px-4 py-2.5 text-muted">$0 (same server) or $7&ndash;15/mo</td>
                    <td className="px-4 py-2.5 text-muted">Managed DB recommended for reliability</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Backups</td>
                    <td className="px-4 py-2.5 text-muted">$1&ndash;$3/mo</td>
                    <td className="px-4 py-2.5 text-muted">Automated snapshots via provider</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Uptime monitoring</td>
                    <td className="px-4 py-2.5 text-muted">$0&ndash;$7/mo</td>
                    <td className="px-4 py-2.5 text-muted">UptimeRobot free, Better Stack paid</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Your time (maintenance)</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;5 hrs/mo</td>
                    <td className="px-4 py-2.5 text-muted">Updates, debugging, monitoring</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors bg-surface-alt">
                    <td className="px-4 py-2.5 font-semibold text-foreground">Total (cash only)</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground">$6&ndash;$44/mo</td>
                    <td className="px-4 py-2.5 text-muted">Before valuing your time</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors bg-surface-alt">
                    <td className="px-4 py-2.5 font-semibold text-foreground">Total (incl. time at $75/hr)</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground">$156&ndash;$419/mo</td>
                    <td className="px-4 py-2.5 text-muted">2&ndash;5 hrs at $75/hr + infrastructure</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              Time costs vary dramatically. A smooth month needs 1&ndash;2 hours. A bad month (failed upgrade, corrupted DB, expired SSL) can eat 10+ hours.
            </p>
          </section>

          {/* n8n Cloud as Middle Ground */}
          <section>
            <h2 className="text-xl font-bold mb-3">n8n Cloud: The Middle Ground Most People Ignore</h2>
            <p className="text-muted leading-relaxed mb-3">
              Before diving into self-hosting, consider n8n Cloud. It gives you n8n&apos;s
              builder and code nodes without the infrastructure burden.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Executions</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Active Workflows</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">2,500/mo</td>
                    <td className="px-4 py-2.5 text-muted">5</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                    <td className="px-4 py-2.5 text-muted">$50/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              n8n Cloud counts &ldquo;executions&rdquo; differently from Zapier tasks or Make operations.
              One execution is one workflow run, regardless of how many nodes it contains. A 10-node
              workflow running once = 1 execution in n8n, but 10 tasks in Zapier. This makes n8n Cloud
              surprisingly competitive at moderate volumes with complex workflows.
            </p>
          </section>

          {/* Docker Setup */}
          <section>
            <h2 className="text-xl font-bold mb-3">Docker Setup Walkthrough</h2>
            <p className="text-muted leading-relaxed mb-3">
              Three hosting paths, in order of simplicity:
            </p>

            <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Option 1: Railway or Render (Easiest)</h3>
            <p className="text-muted leading-relaxed mb-3">
              Railway and Render both support one-click n8n deployment from Docker images.
              Railway&apos;s usage-based pricing starts at ~$5/month for light workloads.
              Render&apos;s starter plan is $7/month. Both handle SSL, container management,
              and basic monitoring. You get self-hosted-like control without managing a raw server.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The tradeoff: Railway and Render have cold starts on lower tiers, meaning webhook
              responses can be slow if the container scales to zero. For automation, where
              reliability matters more than latency, this is a real concern. Keep the instance
              always-on (costs more) or accept occasional delayed triggers.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Option 2: VPS with Docker Compose (Recommended)</h3>
            <p className="text-muted leading-relaxed mb-3">
              The standard self-hosting path. Rent a VPS from Hetzner ($4.50/mo for 2GB), DigitalOcean
              ($6/mo), or Vultr ($6/mo). Install Docker and Docker Compose. Pull n8n&apos;s
              official Docker image. Configure environment variables for database, encryption key,
              and webhook URL. Set up a reverse proxy (Caddy is simplest &mdash; automatic SSL)
              and point your domain.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              Expect 45&ndash;90 minutes for initial setup if you are comfortable with the
              command line. If &ldquo;SSH into a server&rdquo; sounds foreign, this path is not
              for you &mdash; use n8n Cloud or Railway instead.
            </p>

            <h3 className="text-base font-semibold text-foreground mt-5 mb-2">Option 3: Kubernetes (Overkill for Most)</h3>
            <p className="text-muted leading-relaxed">
              Only relevant for teams running 100+ workflows with high-availability requirements.
              n8n publishes a Helm chart. If you already have a Kubernetes cluster, deployment is
              straightforward. If you do not, the operational overhead of Kubernetes far exceeds
              the complexity of n8n itself.
            </p>
          </section>

          {/* Which Zap Patterns Translate */}
          <section>
            <h2 className="text-xl font-bold mb-3">Which Zap Patterns Translate Cleanly to n8n</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Webhook-triggered workflows.</strong>{" "}
                  n8n handles webhooks natively. If your Zap starts with a webhook, the n8n
                  equivalent is a Webhook node. Response times are comparable on a properly
                  configured VPS.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Data transformation chains.</strong>{" "}
                  n8n&apos;s Code node (JavaScript or Python) is vastly more powerful than
                  Zapier&apos;s Formatter. Any data manipulation that required multiple Formatter
                  steps or Code by Zapier becomes a single Code node with full language capabilities.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">API-heavy workflows.</strong>{" "}
                  If your Zaps use Webhooks by Zapier and Code by Zapier to hit custom APIs,
                  n8n&apos;s HTTP Request node and Code node handle this with less friction and
                  no execution time limits.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Scheduled batch processes.</strong>{" "}
                  Cron triggers in n8n are precise and free (no per-execution cost on self-hosted).
                  A workflow that polls an API every 5 minutes costs nothing extra on n8n versus
                  consuming tasks rapidly on Zapier.
                </span>
              </li>
            </ul>
          </section>

          {/* Which Don't */}
          <section>
            <h2 className="text-xl font-bold mb-3">Which Zap Patterns Do NOT Translate Well</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Native app integrations.</strong>{" "}
                  Zapier has 7,000+ app connectors. n8n has ~400 built-in nodes. If your Zap
                  connects to a niche CRM, HR tool, or industry-specific app, n8n probably
                  doesn&apos;t have a prebuilt node. You can use HTTP Request nodes to call any
                  API, but that requires reading API documentation, handling authentication, and
                  parsing responses manually.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Webhook reliability (self-hosted).</strong>{" "}
                  Zapier&apos;s infrastructure guarantees webhook reception with retry logic.
                  Self-hosted n8n is only as reliable as your server. If your VPS goes down or
                  Docker restarts, incoming webhooks are lost. Mitigation: use a webhook relay
                  service or queue (adds complexity and cost).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">OAuth-based app triggers.</strong>{" "}
                  Zapier manages OAuth token refresh automatically for all 7,000+ apps. n8n
                  handles OAuth for its built-in nodes, but custom OAuth setups require manual
                  token management. Tokens expire, refresh flows fail, and you discover the
                  problem when a workflow silently stops working.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Team-managed simple automations.</strong>{" "}
                  If non-technical team members currently build and maintain Zaps, n8n&apos;s
                  interface will be a barrier. The code capabilities that make n8n powerful for
                  developers make it intimidating for operations and marketing teams.
                </span>
              </li>
            </ul>
          </section>

          {/* When n8n Saves Money vs When It Costs More */}
          <section>
            <h2 className="text-xl font-bold mb-4">When n8n Saves Money vs When It Costs More in Time</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Self-Hosted Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-foreground">Solo dev, 5 workflows, low volume</td>
                    <td className="px-4 py-2.5 text-muted">$30/mo</td>
                    <td className="px-4 py-2.5 text-muted">$6/mo + 1 hr/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">n8n wins</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-foreground">Solo dev, 20+ workflows, heavy volume</td>
                    <td className="px-4 py-2.5 text-muted">$200&ndash;400/mo</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo + 3 hrs/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">n8n wins big</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-foreground">Agency, devs billed at $150/hr</td>
                    <td className="px-4 py-2.5 text-muted">$300/mo</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo + $450&ndash;750/mo (time)</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">Zapier wins</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-foreground">Non-technical team, simple Zaps</td>
                    <td className="px-4 py-2.5 text-muted">$30&ndash;70/mo</td>
                    <td className="px-4 py-2.5 text-muted">$6/mo + endless support requests</td>
                    <td className="px-4 py-2.5 text-foreground font-semibold">Zapier wins</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-foreground">Data-sensitive industry (health, finance)</td>
                    <td className="px-4 py-2.5 text-muted">$100+/mo + compliance risk</td>
                    <td className="px-4 py-2.5 text-muted">$20/mo + full data control</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">n8n wins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The Hybrid Approach */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Hybrid Approach: n8n for Heavy, Zapier for Simple</h2>
            <p className="text-muted leading-relaxed mb-3">
              The best migration strategy for most teams is not to go all-in on either platform.
              Run n8n for your high-volume, data-heavy, or custom-code workflows. Keep Zapier
              for the simple, niche-integration, team-editable automations.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              This works because the economics favor different tools at different workflow
              profiles:
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Move to n8n:</strong> Workflows that run
                  frequently (hourly/daily), process batches of data, require custom code
                  transformations, or handle sensitive data.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Keep on Zapier:</strong> Workflows that use
                  Zapier-exclusive integrations, are edited by non-technical team members, run
                  infrequently (weekly/monthly), or are simple 2-step trigger-action patterns.
                </span>
              </li>
            </ul>
            <p className="text-muted leading-relaxed mt-3">
              Downgrade your Zapier plan to match the reduced task volume. The combination of
              Zapier Free/Professional + n8n self-hosted often costs less than either platform
              alone would at full volume.
            </p>
          </section>

          {/* Who Should NOT */}
          <section>
            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-2">Who Should NOT Migrate to Self-Hosted n8n</p>
              <ul className="text-sm text-muted space-y-1.5">
                <li>&bull; Anyone who does not already manage servers or Docker containers</li>
                <li>&bull; Teams where the person maintaining automations is not technical</li>
                <li>&bull; Businesses where a 2-hour outage in automations causes immediate revenue loss</li>
                <li>&bull; Solo operators whose time is better spent on revenue-generating work than DevOps</li>
                <li>&bull; Anyone currently spending under $50/month on Zapier (the savings do not justify the operational burden)</li>
              </ul>
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">1.</span>
                <span>
                  <strong className="text-foreground">Underestimating maintenance time.</strong>{" "}
                  Month one is fine. Month three, when n8n pushes a breaking update or your
                  PostgreSQL needs vacuuming, the time cost spikes. Budget 3&ndash;5 hours/month
                  on average, not the 1 hour of a smooth month.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">2.</span>
                <span>
                  <strong className="text-foreground">No monitoring from day one.</strong>{" "}
                  Set up uptime monitoring (UptimeRobot free tier), error alerting (send failed
                  workflow notifications to Slack or email), and automated backups before you
                  migrate a single workflow.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">3.</span>
                <span>
                  <strong className="text-foreground">Skipping the encryption key.</strong>{" "}
                  n8n encrypts credentials with an encryption key set via environment variable.
                  If you lose this key or redeploy without it, all stored credentials become
                  unreadable. Back it up separately from your server.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">4.</span>
                <span>
                  <strong className="text-foreground">Using SQLite in production.</strong>{" "}
                  n8n defaults to SQLite, which works for testing but degrades under concurrent
                  workflow execution. Switch to PostgreSQL before going live. Migration after the
                  fact is possible but annoying.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">5.</span>
                <span>
                  <strong className="text-foreground">Not testing webhook reliability.</strong>{" "}
                  Send test webhooks to your n8n instance from an external service. Verify they
                  arrive. Then kill the n8n container, send another webhook, restart, and verify
                  it was lost. Understand your failure mode before it costs you real data.
                </span>
              </li>
            </ul>
          </section>

          {/* Bottom Line */}
          <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-3">Bottom Line</h2>
            <p className="text-muted leading-relaxed mb-3">
              Self-hosted n8n is the right move for developers or technical teams spending $100+/month
              on Zapier who are comfortable with Docker and basic server administration. The cash
              savings are real &mdash; $1,000&ndash;$4,000+ per year at high volumes.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              n8n Cloud is the right middle ground for technical teams who want n8n&apos;s builder
              and code nodes without the infrastructure overhead. At $50/month for 10,000 executions,
              it undercuts Zapier on workflows with many steps.
            </p>
            <p className="text-muted leading-relaxed">
              The hybrid approach &mdash; n8n for heavy, Zapier for simple &mdash; is what most
              teams should actually do. It captures 80% of the savings with 20% of the migration risk.
              Start by moving your three highest-volume workflows to n8n, run them for a month, then
              decide whether to move more.
            </p>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How does n8n count executions vs Zapier tasks?</h3>
                <p className="text-sm text-muted">n8n counts one execution per workflow run, regardless of how many nodes are in the workflow. Zapier counts each action step as a separate task. A 10-step workflow running once = 1 n8n execution but 10 Zapier tasks. This makes n8n dramatically cheaper for complex workflows.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use n8n without knowing how to code?</h3>
                <p className="text-sm text-muted">n8n has a visual builder that works without code for basic workflows. However, n8n&apos;s main advantage is the Code node for custom logic. If you never plan to write JavaScript or Python, Make is a better choice &mdash; it offers a similar visual builder with more pre-built app integrations and no self-hosting requirement.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is n8n Cloud worth it vs self-hosting?</h3>
                <p className="text-sm text-muted">If your time is worth more than $30/hour, n8n Cloud is probably worth it until you exceed the Pro plan&apos;s 10,000 executions. Self-hosting saves money at high volume but costs 2&ndash;5 hours/month in maintenance. The break-even is roughly when your Zapier bill exceeds $150/month and you have the DevOps skills in-house.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What happens to my Zapier workflows during migration?</h3>
                <p className="text-sm text-muted">Keep Zapier running during the entire migration. Build the n8n equivalent, test it in parallel for at least a week, then disable the Zapier version. Only downgrade or cancel Zapier after all workflows have been stable on n8n for a full billing cycle.</p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </>
  );
}
