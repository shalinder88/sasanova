import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Is Salesforce Worth It for Small Business? (Almost Never)",
  description:
    "Salesforce Starter Suite costs $25/seat. Pro Suite is $100/seat. Plus implementation costs of $10K-$50K. For teams under 25, HubSpot Starter ($20/seat) or Pipedrive Lite ($14/seat) are better.",
};

export default function IsSalesforceWorthItForSmallBusinessPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Is Salesforce Worth It for Small Business?</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Quick Answer</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Is Salesforce Worth It for Small Business?</h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">No, for almost all small businesses under 25 people.</strong> Salesforce
            Starter Suite at $25/seat/month looks reasonable, but Pro Suite ($100/seat),
            Enterprise ($175/seat), and implementation costs ($10K-$50K) make the true cost
            3-5x what the pricing page suggests. Pipedrive Lite at $14/seat or HubSpot Free
            deliver 80% of the value at a fraction of the cost.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>8 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">The Real Cost at 10 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual (10 seats)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">+ Implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td><td className="px-4 py-2.5 text-muted">Lite</td><td className="px-4 py-2.5 text-accent font-semibold">$1,680/yr</td><td className="px-4 py-2.5 text-muted">Self-setup ($0)</td></tr>
                  <tr><td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td><td className="px-4 py-2.5 text-muted">Starter</td><td className="px-4 py-2.5 text-muted">$2,400/yr</td><td className="px-4 py-2.5 text-muted">Self-setup ($0)</td></tr>
                  <tr><td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td><td className="px-4 py-2.5 text-muted">Starter Suite</td><td className="px-4 py-2.5 text-muted">$3,000/yr</td><td className="px-4 py-2.5 text-muted">$10K-$50K typical</td></tr>
                  <tr><td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td><td className="px-4 py-2.5 text-muted">Pro Suite</td><td className="px-4 py-2.5 text-muted">$12,000/yr</td><td className="px-4 py-2.5 text-muted">$10K-$50K typical</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">When Salesforce DOES Make Sense</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>You have 50+ sales reps with complex, multi-stage deal processes</li>
              <li>You need deep AppExchange marketplace customization</li>
              <li>You have a dedicated Salesforce admin (or can hire one)</li>
              <li>You need enterprise compliance (FedRAMP, HIPAA across all features)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">The Caveat</h2>
            <p className="text-muted leading-relaxed">
              Salesforce is the most powerful CRM available. But power without need is waste.
              Most small businesses use 10-15% of Salesforce features. The implementation
              complexity means you likely need a consultant ($150-$300/hour). Annual contracts
              are standard. And the real per-seat cost after add-ons is typically $200-$400/seat,
              not the $25 you see on the pricing page.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is Salesforce Starter Suite enough for a small team?</h3>
                <p className="text-sm text-muted">It includes basic CRM features at $25/seat, but most teams quickly need Pro Suite ($100/seat) for forecasting and custom dashboards.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What should a 10-person team use instead?</h3>
                <p className="text-sm text-muted">Pipedrive Growth ($39/seat) for sales-focused teams or HubSpot Starter ($20/seat) for marketing+sales in one platform.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["salesforce", "pipedrive", "hubspot-crm"]}
            comparisons={["hubspot-crm-vs-salesforce", "pipedrive-vs-salesforce"]}
            guides={["who-should-not-use-salesforce", "salesforce-hidden-costs", "salesforce-lock-in-analysis"]}
          />
        </div>
      </article>
    </>
  );
}
