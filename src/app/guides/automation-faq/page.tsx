import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Automation Questions Answered: 20 Things Buyers Actually Ask",
  description:
    "Direct answers to the 20 most common automation tool questions. Specific pricing for Zapier, Make, n8n, and Pipedream with task counting math, self-hosting costs, and definitive recommendations.",
};

export default function AutomationFAQPage() {
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
              Automation FAQ
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Automation Questions Answered: 20 Things Buyers Actually Ask
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Straight answers about Zapier, Make, n8n, and Pipedream. Task
            counting, real pricing math, self-hosting costs, and when automation
            tools are worth paying for at all.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>9 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Pricing & Value */}
          <section>
            <h2 className="text-xl font-bold mb-6">Pricing &amp; Value</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Is Zapier overpriced?</h3>
                <p className="text-muted leading-relaxed">
                  At under 750 tasks/month, Zapier Free works fine and costs nothing. At 2,000+ tasks/month, yes &mdash; Zapier Professional costs $49/month for 2,000 tasks while Make Core costs $10.59/month for 10,000 operations. That&apos;s a 60&ndash;80% savings on Make at comparable volume. Zapier is worth it only if you value its larger app library (7,000+ vs Make&apos;s 2,000+) and simpler interface enough to pay the premium.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What does Zapier actually cost per year?</h3>
                <p className="text-muted leading-relaxed">
                  Zapier Free: $0/year (750 tasks/month, single-step only). Starter: $238.80/year (750 tasks, multi-step). Professional: $588/year (2,000 tasks). Team: $4,068/year (2,000 tasks, shared workspace). At high volume, costs escalate fast: 50,000 tasks/month on Professional is $5,988/year. Make at the same volume is $421/year.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What counts as a Zapier task?</h3>
                <p className="text-muted leading-relaxed">
                  Every action step in a Zap counts as one task. A 5-step Zap that runs once uses 5 tasks. A trigger step that checks but finds nothing (a &ldquo;poll&rdquo;) does not count. Filters and paths don&apos;t count. But every step after a filter that executes does count. A 3-step Zap running 100 times/month uses 300 tasks, not 100.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What counts as a Make operation?</h3>
                <p className="text-muted leading-relaxed">
                  Every module (node) that processes data counts as one operation on Make. A scenario with 5 modules running once uses 5 operations &mdash; similar to Zapier&apos;s counting. The key difference: Make&apos;s free plan includes 1,000 operations/month, and paid plans start at $10.59/month for 10,000 operations. Per-operation cost is roughly 5&ndash;10x cheaper than Zapier.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Is there a truly free automation tool?</h3>
                <p className="text-muted leading-relaxed">
                  n8n Community Edition is fully free and self-hosted with unlimited workflows and executions. You pay only for server hosting ($5&ndash;$20/month on a VPS). Pipedream Free includes 10,000 invocations/month with full code support. Zapier Free gives 750 tasks/month (single-step only). Make Free gives 1,000 operations/month. For unlimited free automation, n8n self-hosted is the answer.
                </p>
              </div>
            </div>
          </section>

          {/* Choosing a Tool */}
          <section>
            <h2 className="text-xl font-bold mb-6">Choosing a Tool</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Zapier vs Make: which should I use?</h3>
                <p className="text-muted leading-relaxed">
                  Zapier if you want the easiest setup, the most app integrations (7,000+), and don&apos;t mind paying 5&ndash;10x more per task. Make if you want visual scenario building, better value at scale, and can handle a steeper learning curve. For most small businesses doing under 750 tasks/month, Zapier Free is fine. Above that, Make saves serious money.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I self-host automation?</h3>
                <p className="text-muted leading-relaxed">
                  Yes, with n8n. Install via Docker on any VPS. Hosting costs $5&ndash;$20/month on DigitalOcean, Hetzner, or Railway. But factor in your time: setup takes 2&ndash;4 hours, and ongoing maintenance (updates, backups, debugging) costs 1&ndash;2 hours/month. Self-hosting makes financial sense at 10,000+ tasks/month where Zapier would cost $49+/month. Below that, a managed tool is cheaper when you value your time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s n8n and should I use it?</h3>
                <p className="text-muted leading-relaxed">
                  n8n is an open-source automation tool you can self-host for free or use their cloud service starting at $24/month for 2,500 executions. Self-hosted n8n has no execution limits. Use n8n if you&apos;re technical, want full control, or need custom code nodes. Skip n8n if you want zero maintenance and prefer drag-and-drop simplicity &mdash; use Make instead.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s Pipedream and who is it for?</h3>
                <p className="text-muted leading-relaxed">
                  Pipedream is a developer-focused automation platform. Free plan includes 10,000 invocations/month. You write workflows in JavaScript, Python, or Go with full access to npm packages. Pipedream is for developers who want code-first automation with managed infrastructure. If you prefer visual builders, use Make or Zapier instead.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Which automation tool has the most integrations?</h3>
                <p className="text-muted leading-relaxed">
                  Zapier leads with 7,000+ app integrations. Make has 2,000+. n8n has 400+ built-in nodes plus community nodes. Pipedream connects to any API via code. If you need a specific niche app (like a vertical SaaS tool), check Zapier first &mdash; it almost certainly has the integration. Make and n8n cover all major apps but may lack obscure ones.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Questions */}
          <section>
            <h2 className="text-xl font-bold mb-6">Technical Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What are the most useful automations for small businesses?</h3>
                <p className="text-muted leading-relaxed">
                  The top 5 automations that save real time: (1) new form submission to CRM contact creation, (2) new subscriber to welcome email sequence, (3) new deal closed to invoice generation, (4) calendar event to meeting notes template, (5) new blog post to social media distribution. These five cover 80% of what small businesses automate. Start here before building complex workflows.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I reduce my Zapier bill?</h3>
                <p className="text-muted leading-relaxed">
                  Consolidate multi-step Zaps using filters to stop unnecessary steps from running. Use Zapier&apos;s built-in formatter instead of separate action steps. Move high-volume Zaps to Make (which is cheaper per operation). Use webhooks instead of polling triggers to reduce task waste. A 5-step Zap running 100x/month uses 500 tasks &mdash; rebuilding it as a 3-step Zap saves 200 tasks/month.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What happens when an automation fails?</h3>
                <p className="text-muted leading-relaxed">
                  Zapier retries failed steps automatically and emails you errors. Make has error routes that let you build fallback logic (e.g., send a Slack notification if a step fails). n8n has try/catch nodes for granular error handling. Zapier&apos;s error handling is the simplest but least flexible. Make&apos;s is the most sophisticated for non-developers. n8n&apos;s is the most powerful for developers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can automation tools handle complex logic (if/then, loops)?</h3>
                <p className="text-muted leading-relaxed">
                  Make handles complex logic best among no-code tools: routers (if/then branching), iterators (loops), aggregators, and error handling &mdash; all visual. Zapier has Paths (if/then) but no native loops. n8n supports everything including loops, merge nodes, and custom JavaScript. If your workflow needs branching logic beyond simple filters, Make or n8n is the right choice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Do I need automation or can I just use built-in integrations?</h3>
                <p className="text-muted leading-relaxed">
                  Many tools have built-in integrations that eliminate the need for Zapier/Make. HubSpot connects natively to Gmail, Outlook, Slack, and 500+ apps. Slack connects to Google Drive, Trello, and Asana natively. Check your tools&apos; native integrations first &mdash; you might not need a separate automation platform at all. Use Zapier/Make only when native integrations don&apos;t exist or can&apos;t do what you need.
                </p>
              </div>
            </div>
          </section>

          {/* Migration & Switching */}
          <section>
            <h2 className="text-xl font-bold mb-6">Migration &amp; Switching</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I switch from Zapier to Make?</h3>
                <p className="text-muted leading-relaxed">
                  There&apos;s no auto-migration tool. You rebuild each Zap as a Make scenario manually. A simple 3-step Zap takes 15&ndash;30 minutes to rebuild in Make. Complex multi-path Zaps take 1&ndash;2 hours each. Most teams with 10&ndash;20 active Zaps complete migration in 1&ndash;2 weeks of part-time work. Run both platforms in parallel for 2 weeks before shutting down Zapier.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Should I switch from Zapier to Make to save money?</h3>
                <p className="text-muted leading-relaxed">
                  Yes, if you use more than 2,000 tasks/month on Zapier. At that volume, Zapier Professional costs $49/month while Make Core at $10.59/month handles 10,000 operations. Annual savings: $461. Below 750 tasks/month, stay on Zapier Free &mdash; the migration effort isn&apos;t worth it. Between 750 and 2,000 tasks, it depends on how many Zaps you&apos;d need to rebuild.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I use Zapier and Make together?</h3>
                <p className="text-muted leading-relaxed">
                  Yes, and many teams do. Keep simple, low-volume Zaps on Zapier Free (under 750 tasks/month). Move high-volume or complex workflows to Make where it&apos;s cheaper. This hybrid approach lets you use Zapier&apos;s superior app library for niche integrations while keeping costs down with Make for heavy lifting.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Is it worth migrating from Zapier to n8n?</h3>
                <p className="text-muted leading-relaxed">
                  Only if you&apos;re technical and spend $100+/month on Zapier. Self-hosted n8n costs $5&ndash;$20/month in server fees with unlimited executions. But the migration requires developer skills (Docker, server management) and 2&ndash;4 hours/month of maintenance. For non-technical teams, Make is the better Zapier alternative &mdash; managed infrastructure, visual builder, and still 60&ndash;80% cheaper.
                </p>
              </div>
            </div>
          </section>

          {/* Source note */}
          <section className="border-t border-border pt-6 mt-8">
            <p className="text-xs text-muted leading-relaxed">
              Prices reflect published rates as of March 2026. All platforms adjust pricing periodically.
              Verify current pricing on each vendor&apos;s website before purchasing. Sasanova is
              editorially independent &mdash; see our{" "}
              <Link href="/about/editorial-policy" className="text-accent hover:underline">
                editorial policy
              </Link>.
            </p>
          </section>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={["zapier", "make", "n8n", "pipedream"]}
          comparisons={["zapier-vs-make", "make-vs-n8n", "zapier-vs-n8n"]}
          guides={[
            "automation-annual-cost-2026",
            "automation-zapier-vs-make-vs-n8n",
            "migrate-zapier-to-make",
            "cheapest-automation-tool-2026",
            "best-automation-tool-solopreneurs",
          ]}
        />
      </article>
    </>
  );
}
