import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Is Pipedrive Good for Startups? (Yes, Especially for Sales-Led)",
  description:
    "Pipedrive Lite at $14/seat is the best pure sales CRM for startups. No free tier, but the pipeline UX is best-in-class. Growth at $39/seat adds email sync and automations.",
};

export default function IsPipedriveGoodForStartupsPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Is Pipedrive Good for Startups?</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Quick Answer</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Is Pipedrive Good for Startups?</h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">Yes, especially for sales-led startups that need a focused,
            visual pipeline CRM.</strong> Pipedrive Lite at $14/seat/month provides the
            best pipeline UX in the market with drag-and-drop deal management, activity
            tracking, and 3,000 deals. No free tier, but at $14/seat it is affordable even
            for 2-3 person founding teams ($336-$504/year).
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>7 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">Why Pipedrive Works for Startups</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>Best-in-class visual pipeline (drag-and-drop deal management)</li>
              <li>Low implementation complexity (set up in under 30 minutes)</li>
              <li>Affordable entry: Lite at $14/seat/month (annual billing)</li>
              <li>Clean interface focused on selling, not feature bloat</li>
              <li>Strong integrations with Gmail, Outlook, Slack, Zapier</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">When Pipedrive is NOT Right for Startups</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>You need a free CRM (use HubSpot Free or Freshsales Free instead)</li>
              <li>You need marketing automation built in (Pipedrive is sales-only)</li>
              <li>You are product-led and do not have a sales team yet</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">The Caveat</h2>
            <p className="text-muted leading-relaxed">
              Pipedrive Lite does not include email sync or automations. Those require Growth
              at $39/seat/month, which is a 179% price jump. For a 5-person startup, Lite
              costs $840/year but Growth costs $2,340/year. Make sure Lite is enough before
              committing, or consider Freshsales Growth at $11/seat which includes email sync
              and AI scoring at a lower price.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is HubSpot Free better for startups than Pipedrive Lite?</h3>
                <p className="text-sm text-muted">HubSpot Free is $0 vs Pipedrive Lite $14/seat. If budget is your primary constraint, start with HubSpot Free. If pipeline management matters most, Pipedrive Lite is worth $14/seat.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["pipedrive", "hubspot-crm", "freshsales"]}
            comparisons={["hubspot-crm-vs-pipedrive", "pipedrive-vs-freshsales"]}
            guides={["pipedrive-pricing-explained", "best-crm-for-5-person-team", "crm-solo-founder"]}
          />
        </div>
      </article>
    </>
  );
}
