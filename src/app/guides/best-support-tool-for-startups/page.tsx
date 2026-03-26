import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Best Support Tool for Startups in 2026",
  description:
    "Freshdesk Growth at $15/agent vs Help Scout Standard at $55/mo (unlimited users) vs Crisp Essentials at $95/mo (10 seats). Cost and features for early-stage support.",
};

export default function BestSupportToolForStartupsPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Best Support Tool for Startups</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Tool vs Category
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best Support Tool for Startups in 2026
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Startups need support tools that are affordable, quick to set up, and do not require
            a dedicated admin. Zendesk Suite Team at $69/agent is overkill. Intercom Essential
            at $39/seat plus $0.99/AI resolution is unpredictable. Here are three better options
            ranked for early-stage startups.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Annual Cost at 3 Support Agents</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pricing Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk</td>
                    <td className="px-4 py-2.5 text-muted">Free (2 agents)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/yr</td>
                    <td className="px-4 py-2.5 text-muted">Per agent (free up to 2)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Help Scout</td>
                    <td className="px-4 py-2.5 text-muted">Free (50 contacts/mo)</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">$0/yr</td>
                    <td className="px-4 py-2.5 text-muted">Per contact (unlimited users)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Crisp</td>
                    <td className="px-4 py-2.5 text-muted">Free (2 seats)</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">$0/yr</td>
                    <td className="px-4 py-2.5 text-muted">Per workspace (flat rate)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted">
              All three offer genuine free tiers. Paid plans: Freshdesk Growth $15/agent/mo,
              Help Scout Standard $55/mo (unlimited users), Crisp Mini $45/mo (4 seats).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">#1: Freshdesk Free, Then Growth ($15/agent)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Freshdesk Free supports up to 2 agents with email ticketing, knowledge base,
              and basic reports. For a startup with 1-2 people handling support, this is
              genuinely free and functional. When you hit 3+ agents, Growth at $15/agent/month
              adds automations, real-time dashboards, and a branded customer portal. At 3
              agents, that is $45/month ($540/year).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">#2: Help Scout Free, Then Standard ($55/mo)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Help Scout Free gives unlimited users, a shared inbox, knowledge base, and
              Beacon widget for 50 contacts per month. The pricing model charges by contacts
              helped, not agents. Standard at $55/month includes 100 contacts/month with
              unlimited users, workflows, custom fields, and reporting. At 3 agents, the flat
              $55/month is cheaper than Freshdesk Growth ($45/month for 3) only when your
              ticket volume is low enough.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">#3: Crisp Free, Then Mini ($45/mo)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Crisp Free provides 2 seats with a website chat widget, shared inbox, and
              unlimited messages. Flat-rate pricing means no per-agent surprises. Mini at
              $45/month supports 4 seats with chat triggers, shortcuts, and unlimited history.
              Essentials at $95/month adds omnichannel inbox, AI chatbot, and knowledge base
              for 10 seats. The flat-rate model is startup-friendly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Why Not the Others</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Zendesk Suite Team ($69/agent)</p>
                <p className="text-sm text-muted">
                  At 3 agents, Zendesk costs $207/month ($2,484/year). No free tier. Built for
                  mid-to-large companies. Overkill for startups.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Intercom Essential ($39/seat + $0.99/AI resolution)</p>
                <p className="text-sm text-muted">
                  At 3 seats, base cost is $117/month plus unpredictable AI resolution fees.
                  No free tier. Best AI support features but too expensive for early-stage.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Verdict</h2>
            <p className="text-muted leading-relaxed">
              Start with Freshdesk Free (2 agents) or Help Scout Free (50 contacts/month).
              When you outgrow free, Freshdesk Growth at $15/agent is the most predictable
              cost. Crisp flat-rate pricing is great if you want no per-seat surprises.
              Help Scout Standard at $55/month with unlimited users is best for teams where
              everyone occasionally handles support.
            </p>
          </section>

          <RelatedLinks
            tools={["freshdesk", "help-scout", "crisp"]}
            comparisons={["freshdesk-vs-zendesk", "intercom-vs-freshdesk"]}
            guides={[
              "customer-support-stack",
              "help-desk-pricing-compared-2026",
              "support-tool-cost-over-3-years",
              "who-should-not-use-intercom",
            ]}
          />
        </div>
      </article>
    </>
  );
}
