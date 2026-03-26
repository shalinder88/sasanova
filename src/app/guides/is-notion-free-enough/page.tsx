import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Is Notion Free Enough? (Yes, for Most Individuals)",
  description:
    "Notion Free gives unlimited pages but only 7-day history and 10 guests. Plus is $12/user/mo. For solo users and small teams under 5, free is genuinely enough.",
};

export default function IsNotionFreeEnoughPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Is Notion Free Enough?</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Quick Answer</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Is Notion Free Enough?</h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">Yes, for most individuals and very small teams.</strong> Notion
            Free gives you unlimited pages, unlimited blocks, and the full block-based editor.
            The limits that matter: 7-day page history, 10 guest collaborators, and 5MB max
            file uploads. Plus is $12/user/month when those limits bite.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>7 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">What You Get for Free</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>Unlimited pages and blocks</li>
              <li>All database views (table, board, timeline, calendar, gallery)</li>
              <li>Templates and API access</li>
              <li>7-day page history</li>
              <li>10 guest collaborators</li>
              <li>5MB max file upload size</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">When Free Stops Being Enough</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">You need version history beyond 7 days</p>
                <p className="text-sm text-muted">Plus ($12/user/mo) gives 30 days. Business ($24/user/mo) gives 90 days.</p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">You share with more than 10 guests</p>
                <p className="text-sm text-muted">Plus allows 100 guests. Business allows 250 guests.</p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">You upload large files regularly</p>
                <p className="text-sm text-muted">Free limits to 5MB per file. Plus allows unlimited file uploads.</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">The Caveat</h2>
            <p className="text-muted leading-relaxed">
              Notion Free is generous for individuals but creates upgrade pressure for teams.
              The moment you have more than one person needing full access, the per-seat cost
              adds up. At 10 users, Plus costs $120/month ($1,440/year). Business at 10 users
              is $240/month ($2,880/year). The free tier works well as a personal knowledge
              management tool but becomes limiting quickly for team collaboration.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I use Notion Free for a team?</h3>
                <p className="text-sm text-muted">You can invite up to 10 guests for free. For full team members with editing access, you need Plus ($12/user/mo).</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is Notion AI included in free?</h3>
                <p className="text-sm text-muted">Notion AI is a separate add-on at $10/user/month on top of any plan.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["notion"]}
            comparisons={["notion-vs-clickup"]}
            guides={["notion-pricing-explained", "when-notion-needs-a-paid-plan", "who-should-not-use-notion"]}
          />
        </div>
      </article>
    </>
  );
}
