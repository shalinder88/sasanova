import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "n8n vs Make: Self-Host vs Cloud Automation",
  description: "n8n free self-hosted (unlimited) vs Make Core at $10.59/mo (10,000 ops). Control vs convenience — a detailed automation comparison with exact pricing.",
};

export default function N8nVsMakeDetailedPage() {
  return (<>
    <div className="border-b border-border bg-surface"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3"><nav className="flex items-center gap-1.5 text-xs text-muted"><Link href="/" className="hover:text-accent transition-colors">Home</Link><span>/</span><Link href="/guides" className="hover:text-accent transition-colors">Guides</Link><span>/</span><span className="text-foreground font-medium truncate">n8n vs Make</span></nav></div></div>
    <div className="border-b border-border"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Detailed Comparison</span>
      <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">n8n vs Make: Self-Host vs Cloud Automation</h1>
      <p className="text-muted text-lg leading-relaxed"><strong className="text-foreground">Quick verdict:</strong> n8n wins for developers and technical teams who want full control &mdash; self-host for free with unlimited executions, write custom JavaScript/Python in any node, and own your data. Make wins for power users who want cloud-hosted visual automation with zero infrastructure management starting at $10.59/mo for 10,000 operations. The core tradeoff is control vs convenience.</p>
      <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>22 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
    </div></div>
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div className="prose-custom space-y-8">

      <section>
        <h2 className="text-xl font-bold mb-3">Side-by-Side Pricing</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Plan</th><th className="text-left py-3 px-4 font-semibold text-foreground">n8n</th><th className="text-left py-3 px-4 font-semibold text-foreground">Make</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Free</td><td className="py-3 px-4">$0 &mdash; Self-hosted community edition, unlimited executions</td><td className="py-3 px-4">$0 &mdash; 1,000 ops/mo, 2 active scenarios</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Entry cloud</td><td className="py-3 px-4">Starter $20/mo ($240/yr) &mdash; 2,500 executions, cloud-hosted (EUR pricing)</td><td className="py-3 px-4">Core $10.59/mo ($108/yr) &mdash; 10,000 ops/mo, unlimited scenarios</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Mid tier</td><td className="py-3 px-4">Pro $50/mo ($600/yr) &mdash; 10,000 executions, unlimited workflows</td><td className="py-3 px-4">Pro $18.82/mo ($192/yr) &mdash; 10,000 ops/mo, custom functions, priority</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Team</td><td className="py-3 px-4">Enterprise: custom pricing</td><td className="py-3 px-4">Teams $34.12/mo ($348/yr) &mdash; 10,000 ops/mo, team features</td></tr>
            <tr><td className="py-3 px-4 font-medium text-foreground">Enterprise</td><td className="py-3 px-4">Custom &mdash; SSO, audit logs, dedicated support</td><td className="py-3 px-4">Custom pricing</td></tr>
          </tbody>
        </table></div>
        <p className="text-xs text-muted mt-2">n8n&apos;s self-hosted edition is genuinely free and unlimited. n8n cloud is more expensive than Make cloud &mdash; but self-hosting eliminates the recurring cost entirely. Make&apos;s cloud pricing is significantly cheaper than n8n&apos;s cloud pricing at every tier.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">The Real Cost of Self-Hosting n8n</h2>
        <div className="rounded-lg border border-border bg-surface p-5">
          <p className="text-sm text-muted mb-2">n8n is free to self-host, but hosting infrastructure is not. Realistic costs:</p>
          <ul className="space-y-1.5 text-sm text-muted">
            <li className="flex gap-2"><span className="text-accent shrink-0">&bull;</span><strong className="text-foreground">VPS hosting:</strong> $5&ndash;20/mo (DigitalOcean, Hetzner, Railway)</li>
            <li className="flex gap-2"><span className="text-accent shrink-0">&bull;</span><strong className="text-foreground">Your time:</strong> 1&ndash;4 hours/month for updates, monitoring, debugging</li>
            <li className="flex gap-2"><span className="text-accent shrink-0">&bull;</span><strong className="text-foreground">Total realistic cost:</strong> $5&ndash;20/mo + maintenance time</li>
          </ul>
          <p className="text-sm text-muted mt-2">For a solo developer comfortable with Docker, self-hosting n8n at $5/mo is dramatically cheaper than any cloud automation tool. For a team without DevOps capacity, the maintenance burden can exceed Make&apos;s $10.59/mo Core plan.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Feature Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th><th className="text-left py-3 px-4 font-semibold text-foreground">n8n</th><th className="text-left py-3 px-4 font-semibold text-foreground">Make</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Deployment</td><td className="py-2 px-4">Self-hosted (Docker) or cloud</td><td className="py-2 px-4">Cloud only</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Custom code</td><td className="py-2 px-4">JavaScript/Python in any node</td><td className="py-2 px-4">Custom functions (Pro+ only)</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Integrations</td><td className="py-2 px-4">400+ built-in nodes + custom HTTP</td><td className="py-2 px-4">1,800+ apps</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Visual builder</td><td className="py-2 px-4">Node-based canvas (technical feel)</td><td className="py-2 px-4">Flowchart-style (more visual)</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Error handling</td><td className="py-2 px-4">Basic &mdash; improving</td><td className="py-2 px-4">Advanced &mdash; routers, filters, error branches</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">AI agent nodes</td><td className="py-2 px-4">Yes &mdash; AI agent workflows native</td><td className="py-2 px-4">AI modules available</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Data sovereignty</td><td className="py-2 px-4">Full control (self-hosted)</td><td className="py-2 px-4">Data on Make&apos;s cloud</td></tr>
            <tr><td className="py-2 px-4 font-medium text-foreground">Version control</td><td className="py-2 px-4">Git-based workflow versioning</td><td className="py-2 px-4">Scenario versions (limited)</td></tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">What n8n Does Better</h2>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">Full control.</strong> Self-host n8n and you own everything: the data, the infrastructure, the execution logs. No vendor lock-in, no data leaving your servers. For companies with compliance requirements (HIPAA, GDPR, SOC 2), this is often the deciding factor.</p>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">Custom code everywhere.</strong> Write JavaScript or Python in any node. This makes n8n essentially a visual programming environment. If a pre-built integration doesn&apos;t exist, you can build it with HTTP requests and custom code in minutes.</p>
        <p className="text-muted leading-relaxed"><strong className="text-foreground">No execution limits (self-hosted).</strong> The community edition has no caps on executions, workflows, or data volume. Your only limit is your server&apos;s capacity.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">What Make Does Better</h2>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">Zero infrastructure.</strong> Make runs entirely in the cloud. No servers to manage, no Docker containers to update, no SSL certificates to renew. Sign up and start building. For non-technical teams, this is a massive advantage.</p>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">Integration breadth.</strong> Make has 1,800+ pre-built app integrations vs n8n&apos;s 400+. If you need to connect niche SaaS tools, Make is more likely to have a native module. n8n can use HTTP/webhook nodes for anything, but that requires more technical work.</p>
        <p className="text-muted leading-relaxed"><strong className="text-foreground">Visual scenario builder.</strong> Make&apos;s flowchart interface with routers, filters, aggregators, and iterators is more visual and arguably more intuitive than n8n&apos;s technical canvas &mdash; especially for complex branching logic.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Cost Comparison at Scale</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Scenario</th><th className="text-left py-3 px-4 font-semibold text-foreground">n8n (self-hosted)</th><th className="text-left py-3 px-4 font-semibold text-foreground">Make (cloud)</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">1,000 executions/mo</td><td className="py-3 px-4">$5&ndash;10/mo (hosting only)</td><td className="py-3 px-4">$0/mo (free plan)</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">10,000 executions/mo</td><td className="py-3 px-4">$5&ndash;10/mo (hosting only)</td><td className="py-3 px-4">$10.59/mo (Core)</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">100,000 executions/mo</td><td className="py-3 px-4">$10&ndash;20/mo (bigger VPS)</td><td className="py-3 px-4">$100+/mo (custom ops volume)</td></tr>
            <tr><td className="py-3 px-4 font-medium text-foreground">1,000,000 executions/mo</td><td className="py-3 px-4">$20&ndash;50/mo (powerful VPS)</td><td className="py-3 px-4">$500+/mo (enterprise pricing)</td></tr>
          </tbody>
        </table></div>
        <p className="text-xs text-muted mt-2">At high volumes, n8n self-hosted saves thousands annually. At low volumes, Make&apos;s free tier is the better starting point. The crossover happens around 10,000&ndash;50,000 monthly executions.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Decision Framework</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-5"><p className="text-sm font-bold text-foreground mb-2">Choose n8n if:</p><ul className="space-y-1.5 text-sm text-muted"><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You can self-host (comfortable with Docker)</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need custom code in workflows</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Data privacy / compliance is a requirement</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You run high-volume automations</li></ul></div>
          <div className="rounded-lg border border-border bg-surface p-5"><p className="text-sm font-bold text-foreground mb-2">Choose Make if:</p><ul className="space-y-1.5 text-sm text-muted"><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You want zero infrastructure management</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need the broadest app integrations</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Visual workflow design is a priority</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Your team is non-technical</li></ul></div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Migration Between the Two</h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Make to n8n</p><p className="text-sm text-muted"><strong>Effort:</strong> High. No auto-migration exists. You&apos;ll rebuild each scenario as an n8n workflow. Make&apos;s data stores, routers, and error handling patterns need to be re-implemented. Budget 2&ndash;4 hours per complex scenario.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">n8n to Make</p><p className="text-sm text-muted"><strong>Effort:</strong> High. Custom code nodes in n8n have no direct equivalent in Make (until Pro plan). Workflow JSON doesn&apos;t transfer between platforms. Each workflow needs manual recreation.</p></div>
        </div>
      </section>

      <section><h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><h3 className="text-sm font-bold text-foreground mb-1">Is n8n really free?</h3><p className="text-sm text-muted">The self-hosted community edition is free and unlimited (fair-code license). n8n&apos;s cloud service starts at $20/mo (EUR) for 2,500 executions. Self-hosting requires a VPS ($5&ndash;20/mo) and your time for maintenance.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">How do operations compare to executions?</h3><p className="text-sm text-muted">Make counts each module/step in a scenario as an operation. A 5-step scenario uses 5 operations per run. n8n counts entire workflow runs as executions. This means n8n&apos;s 2,500 cloud executions may handle the same workload as Make&apos;s 10,000 operations.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Can I use n8n cloud instead of self-hosting?</h3><p className="text-sm text-muted">Yes. n8n offers a cloud-hosted service starting at $20/mo. But at that price, Make Core ($10.59/mo) offers more operations and a broader integration library. n8n cloud only makes sense if you specifically need n8n&apos;s custom code capabilities without wanting to self-host.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">What about Zapier?</h3><p className="text-sm text-muted">Zapier ($29.99/mo Starter for 750 tasks) is the most expensive option by far but has the broadest integration catalog (7,000+ apps) and simplest UX. Both n8n and Make are significantly cheaper at scale.</p></div>
        </div>
      </section>

    </div>
    <div className="mt-12"><RelatedLinks
      tools={["n8n", "make"]}
      comparisons={["n8n-vs-make"]}
      guides={["how-to-choose-automation-tool", "automation-pricing-compared", "migrate-zapier-to-n8n"]}
    /></div></article>
  </>);
}
