import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
export const metadata: Metadata = { title: "Automation Tools Year in Review 2025", description: "Zapier Professional held at $29.99/mo. Make Core stayed at $10.59/mo. n8n expanded cloud plans. Bardeen jumped 890%. Every major automation pricing change in 2025." };
export default function AutomationYearInReview2025Page() {
  return (<><div className="border-b border-border bg-surface"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3"><nav className="flex items-center gap-1.5 text-xs text-muted"><Link href="/" className="hover:text-accent transition-colors">Home</Link><span>/</span><Link href="/guides" className="hover:text-accent transition-colors">Guides</Link><span>/</span><span className="text-foreground font-medium truncate">Automation Year in Review 2025</span></nav></div></div>
    <div className="border-b border-border"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Year in Review</span><h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Automation Tools Year in Review: 2025</h1><p className="text-muted text-lg leading-relaxed">2025 was the year AI entered automation platforms and pricing diverged further. Make maintained its cost advantage. Zapier added AI actions. n8n expanded cloud offerings. And Bardeen shocked users with an 890% price increase.</p><div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>14 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div></div></div>
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div className="prose-custom space-y-8">
      <section><h2 className="text-xl font-bold mb-3">Major Changes in 2025</h2>
        <div className="space-y-4">
          <div className="bg-surface rounded-lg border border-border p-4"><p className="text-sm font-semibold text-foreground mb-1">Bardeen 890% Price Increase</p><p className="text-sm text-muted">Bardeen went from $10/month to $99/month — an 890% increase. The AI-powered automation tool repositioned from affordable to premium. Users who relied on the $10 tier were forced to 10x their spend or switch to Make or Zapier.</p></div>
          <div className="bg-surface rounded-lg border border-border p-4"><p className="text-sm font-semibold text-foreground mb-1">Zapier Added AI Actions</p><p className="text-sm text-muted">Zapier Professional ($29.99/mo, 750 tasks) added AI-powered actions: summarize, extract, classify, and generate. Available on Professional tier and above. Each AI action counts as a task toward your monthly limit.</p></div>
          <div className="bg-surface rounded-lg border border-border p-4"><p className="text-sm font-semibold text-foreground mb-1">Make Held Pricing Steady</p><p className="text-sm text-muted">Make maintained Core at $10.59/month (10,000 ops), Pro at $18.82/month, and Teams at $34.12/month. The most stable pricing in automation. Make continued gaining market share from Zapier on the cost advantage alone.</p></div>
          <div className="bg-surface rounded-lg border border-border p-4"><p className="text-sm font-semibold text-foreground mb-1">n8n Expanded Cloud Plans</p><p className="text-sm text-muted">n8n Cloud added Starter at $20/month (2,500 executions) and Pro at $50/month (10,000 executions). Self-hosted Community edition remained free and unlimited. The cloud option made n8n accessible to non-technical users.</p></div>
        </div>
      </section>
      <section><h2 className="text-xl font-bold mb-3">Current Pricing (March 2026)</h2>
        <div className="overflow-x-auto rounded-lg border border-border my-4"><table className="w-full text-sm"><thead><tr className="bg-surface-alt text-left"><th className="px-4 py-2.5 font-semibold text-foreground">Tool</th><th className="px-4 py-2.5 font-semibold text-foreground">Entry Paid</th><th className="px-4 py-2.5 font-semibold text-foreground">Included Volume</th><th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th></tr></thead><tbody className="divide-y divide-border">
          <tr><td className="px-4 py-2.5 font-medium text-foreground">Make</td><td className="px-4 py-2.5 text-muted">Core $10.59/mo</td><td className="px-4 py-2.5 text-muted">10,000 ops</td><td className="px-4 py-2.5 text-accent font-semibold">$127/yr</td></tr>
          <tr><td className="px-4 py-2.5 font-medium text-foreground">n8n Cloud</td><td className="px-4 py-2.5 text-muted">Starter $20/mo</td><td className="px-4 py-2.5 text-muted">2,500 executions</td><td className="px-4 py-2.5 text-muted">$240/yr</td></tr>
          <tr><td className="px-4 py-2.5 font-medium text-foreground">Zapier</td><td className="px-4 py-2.5 text-muted">Professional $29.99/mo</td><td className="px-4 py-2.5 text-muted">750 tasks</td><td className="px-4 py-2.5 text-muted">$360/yr</td></tr>
        </tbody></table></div>
      </section>
      <section><h2 className="text-xl font-bold mb-3">Predictions for 2026</h2>
        <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
          <li>AI actions will become standard across all automation platforms</li>
          <li>Make will likely gain further market share from cost-conscious teams</li>
          <li>Zapier may raise prices or restructure task counting to improve margins</li>
          <li>Self-hosted automation (n8n) will grow as data privacy concerns increase</li>
          <li>AI agent frameworks may disrupt traditional trigger-action automation</li>
        </ul>
      </section>
      <RelatedLinks tools={["zapier", "make", "n8n"]} comparisons={["zapier-vs-make", "make-vs-n8n"]} guides={["state-of-automation-pricing-q1-2026", "automation-annual-cost-2026", "zapier-pricing-history"]} />
    </div></article></>);
}
