import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Every CRM Free Tier in One Table",
  description:
    "HubSpot, Zoho CRM, Freshsales, and Attio free tier limits compared side by side. Contact limits, user limits, features included, and what triggers an upgrade. All data verified from tools.ts.",
};

export default function AllCrmFreetiersComparedPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">All CRM Free Tiers Compared</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Comparison Matrix
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Every CRM Free Tier in One Table
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Four CRMs offer genuinely free plans: HubSpot, Zoho CRM, Freshsales, and Attio.
            But &ldquo;free&rdquo; means different things to each. Here&apos;s every limit in one
            definitive table so you stop comparison-shopping and start selling.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>10 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Definitive CRM Free Tier Table</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zoho CRM Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Freshsales Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Attio Free</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Users</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Up to 3</td>
                    <td className="px-4 py-2.5 text-muted">Up to 3</td>
                    <td className="px-4 py-2.5 text-muted">Up to 3 seats</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Contacts/Records</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited contacts</td>
                    <td className="px-4 py-2.5 text-muted">5,000 records</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">50,000 records</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Deal Pipeline</td>
                    <td className="px-4 py-2.5 text-muted">1 pipeline</td>
                    <td className="px-4 py-2.5 text-muted">Basic modules</td>
                    <td className="px-4 py-2.5 text-muted">1 pipeline</td>
                    <td className="px-4 py-2.5 text-muted">Core CRM features</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email Marketing</td>
                    <td className="px-4 py-2.5 text-muted">2,000 sends/mo (HubSpot branding)</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">Built-in email &amp; phone</td>
                    <td className="px-4 py-2.5 text-muted">Email integration</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automations</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Professional $890/mo)</td>
                    <td className="px-4 py-2.5 text-muted">No (Standard $20/seat)</td>
                    <td className="px-4 py-2.5 text-muted">No (Growth $11/seat)</td>
                    <td className="px-4 py-2.5 text-muted">No (Plus $34/seat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Forms</td>
                    <td className="px-4 py-2.5 text-muted">Yes (HubSpot branding)</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Live Chat</td>
                    <td className="px-4 py-2.5 text-muted">Yes (HubSpot branding)</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">Built-in chat</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">AI Features</td>
                    <td className="px-4 py-2.5 text-muted">Limited</td>
                    <td className="px-4 py-2.5 text-muted">No (Enterprise $50/seat)</td>
                    <td className="px-4 py-2.5 text-muted">AI contact scoring (Growth)</td>
                    <td className="px-4 py-2.5 text-muted">No (Pro $69/seat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Cheapest Paid Upgrade</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat/mo (Starter)</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat/mo (Standard)</td>
                    <td className="px-4 py-2.5 text-muted">$11/seat/mo (Growth)</td>
                    <td className="px-4 py-2.5 text-muted">$34/seat/mo (Plus)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Which Free CRM to Choose</h2>
            <ul className="space-y-3 text-muted">
              <li className="flex gap-2"><span className="text-accent font-bold">&bull;</span><span><strong>HubSpot Free</strong> &mdash; Best for solo founders and small teams who want unlimited contacts, basic email marketing, and forms in one free package. The catch: automations require Professional at $890/month.</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">&bull;</span><span><strong>Freshsales Free</strong> &mdash; Best for teams that need built-in phone and chat without paying extra. Limited to 3 users. Growth upgrade ($11/seat) is the cheapest path to AI scoring and automations.</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">&bull;</span><span><strong>Zoho CRM Free</strong> &mdash; Best if you already use Zoho&apos;s suite of 50+ apps. Limited to 3 users and 5,000 records. Standard upgrade ($20/seat) adds workflows and custom dashboards.</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold">&bull;</span><span><strong>Attio Free</strong> &mdash; Best for startup teams who want automatic email enrichment and a modern, Notion-like data model. Limited to 3 seats and 50,000 records. Plus upgrade ($34/seat) is the priciest path to automations.</span></li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot Free really unlimited?</h3>
                <p className="text-muted">HubSpot Free supports unlimited contacts and unlimited users, which is unique among CRM free tiers. The limits are functional: no automation, HubSpot branding on emails and forms, basic reporting only, and a massive price jump to Professional ($890/mo) for workflow automation.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which CRM free tier lasts the longest before you need to upgrade?</h3>
                <p className="text-muted">HubSpot Free lasts longest for most use cases because of unlimited contacts and users. You can run a functional CRM for months or even years on Free. The upgrade trigger is usually needing automation or removing HubSpot branding, not contact limits.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What about Pipedrive? Does it have a free tier?</h3>
                <p className="text-muted">Pipedrive has no free tier. Lite starts at $14/seat/month. It&apos;s our top recommendation for sales-focused teams, but if you need free, HubSpot or Freshsales are better starting points.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "zoho-crm", "freshsales", "attio", "pipedrive"]}
            comparisons={["hubspot-crm-vs-pipedrive", "freshsales-vs-zoho-crm", "salesforce-vs-hubspot-crm"]}
            guides={[
              "best-free-crm-2026",
              "when-free-crm-costs-more",
              "crm-adoption-rate-benchmarks",
              "how-to-choose-crm",
            ]}
          />
        </div>
      </article>
    </>
  );
}
