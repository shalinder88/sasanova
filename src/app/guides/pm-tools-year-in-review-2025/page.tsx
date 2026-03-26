import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
export const metadata: Metadata = { title: "Project Management Tools Year in Review 2025", description: "Asana free tier shrank to 2 users. ClickUp added AI. Linear grew with engineering teams. Monday.com raised minimum seats. Every major PM tool change in 2025." };
export default function PmToolsYearInReview2025Page() {
  return (<><div className="border-b border-border bg-surface"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3"><nav className="flex items-center gap-1.5 text-xs text-muted"><Link href="/" className="hover:text-accent transition-colors">Home</Link><span>/</span><Link href="/guides" className="hover:text-accent transition-colors">Guides</Link><span>/</span><span className="text-foreground font-medium truncate">PM Tools Year in Review 2025</span></nav></div></div>
    <div className="border-b border-border"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Year in Review</span><h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Project Management Tools Year in Review: 2025</h1><p className="text-muted text-lg leading-relaxed">2025 saw free tiers shrink, AI features arrive everywhere, and engineering-focused tools gain ground. Asana cut its free tier from 10 to 2 users. ClickUp remained the feature-density leader. Linear became the engineering default.</p><div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>14 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div></div></div>
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div className="prose-custom space-y-8">
      <section><h2 className="text-xl font-bold mb-3">Major Changes in 2025</h2>
        <div className="space-y-4">
          <div className="bg-surface rounded-lg border border-border p-4"><p className="text-sm font-semibold text-foreground mb-1">Asana Free Tier Shrank to 2 Users</p><p className="text-sm text-muted">Asana Personal (free) dropped from supporting 10 users to 2 users. Starter at $13.49/seat/month became the minimum for teams. A significant change that pushed small teams toward ClickUp Free (unlimited members) or Notion Free.</p></div>
          <div className="bg-surface rounded-lg border border-border p-4"><p className="text-sm font-semibold text-foreground mb-1">ClickUp Added AI (Brain)</p><p className="text-sm text-muted">ClickUp Brain launched as an AI add-on at $7/member/month. AI writing, task summarization, standup generation, and project analysis. Available on all paid tiers as an add-on to the base subscription.</p></div>
          <div className="bg-surface rounded-lg border border-border p-4"><p className="text-sm font-semibold text-foreground mb-1">Linear Grew Among Engineering Teams</p><p className="text-sm text-muted">Linear Standard held at $8/seat with unlimited issues. Plus at $14/seat added roadmaps and SLAs. The keyboard-first UX and GitHub sync made it the top choice for engineering teams moving away from Jira.</p></div>
          <div className="bg-surface rounded-lg border border-border p-4"><p className="text-sm font-semibold text-foreground mb-1">Monday.com 3-Seat Minimum Continued</p><p className="text-sm text-muted">Monday maintained its 3-seat minimum on all paid plans. Basic at $12/seat, Standard at $14/seat, Pro at $27/seat. The minimum purchase means the actual entry cost is $36-$81/month, not the per-seat price.</p></div>
          <div className="bg-surface rounded-lg border border-border p-4"><p className="text-sm font-semibold text-foreground mb-1">Notion Added AI and Automations</p><p className="text-sm text-muted">Notion AI at $10/user/month add-on. Plus ($12/user/mo) unlocked custom automations. The workspace continued evolving from notes tool to all-in-one platform, competing more directly with ClickUp and Asana.</p></div>
        </div>
      </section>
      <section><h2 className="text-xl font-bold mb-3">Current Pricing at 10 Users (March 2026)</h2>
        <div className="overflow-x-auto rounded-lg border border-border my-4"><table className="w-full text-sm"><thead><tr className="bg-surface-alt text-left"><th className="px-4 py-2.5 font-semibold text-foreground">Tool</th><th className="px-4 py-2.5 font-semibold text-foreground">Plan</th><th className="px-4 py-2.5 font-semibold text-foreground">Annual (10 users)</th></tr></thead><tbody className="divide-y divide-border">
          <tr><td className="px-4 py-2.5 font-medium text-foreground">Trello</td><td className="px-4 py-2.5 text-muted">Standard $6/seat</td><td className="px-4 py-2.5 text-accent font-semibold">$720/yr</td></tr>
          <tr><td className="px-4 py-2.5 font-medium text-foreground">Linear</td><td className="px-4 py-2.5 text-muted">Standard $8/seat</td><td className="px-4 py-2.5 text-muted">$960/yr</td></tr>
          <tr><td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td><td className="px-4 py-2.5 text-muted">Unlimited $10/seat</td><td className="px-4 py-2.5 text-muted">$1,200/yr</td></tr>
          <tr><td className="px-4 py-2.5 font-medium text-foreground">Notion</td><td className="px-4 py-2.5 text-muted">Plus $12/seat</td><td className="px-4 py-2.5 text-muted">$1,440/yr</td></tr>
          <tr><td className="px-4 py-2.5 font-medium text-foreground">Asana</td><td className="px-4 py-2.5 text-muted">Starter $13.49/seat</td><td className="px-4 py-2.5 text-muted">$1,619/yr</td></tr>
          <tr><td className="px-4 py-2.5 font-medium text-foreground">Monday</td><td className="px-4 py-2.5 text-muted">Standard $14/seat</td><td className="px-4 py-2.5 text-muted">$1,680/yr</td></tr>
        </tbody></table></div>
      </section>
      <section><h2 className="text-xl font-bold mb-3">Predictions for 2026</h2>
        <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
          <li>AI features will become bundled rather than add-on priced</li>
          <li>More PM tools will follow Asana in shrinking free tiers</li>
          <li>Linear will expand beyond engineering into product management</li>
          <li>ClickUp and Notion will compete more directly as all-in-one platforms</li>
          <li>Basecamp flat-rate model ($349/mo unlimited) may inspire copycats</li>
        </ul>
      </section>
      <RelatedLinks tools={["clickup", "notion", "asana", "linear", "monday"]} comparisons={["asana-vs-clickup", "notion-vs-clickup"]} guides={["project-management-pricing-compared-2026", "pm-tool-cost-over-3-years", "notion-vs-clickup-vs-asana"]} />
    </div></article></>);
}
