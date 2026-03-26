import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Replace Zendesk with Freshdesk: Enterprise Features at SMB Prices",
  description:
    "Zendesk Suite Team costs $69/agent/mo. Freshdesk Growth is $15/agent/mo. That's 78% less per agent. Feature comparison, what you lose, and migration steps.",
};

export default function ReplaceZendeskWithFreshdesk() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Replace Zendesk with Freshdesk</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Replacement Stack
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Replace Zendesk with Freshdesk: Enterprise Features at SMB Prices
          </h1>
          <p className="text-lg text-muted">
            Zendesk Suite Team costs $69/agent/mo. Freshdesk Growth is $15/agent/mo &mdash; 78% cheaper per agent. Freshdesk covers ticketing, automations, knowledge base, and real-time dashboards. Here&apos;s what you gain, what you lose, and when Zendesk is still worth the premium.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Math (5-agent team)</p>
            <p className="text-sm text-muted">
              Zendesk Suite Team: <strong className="text-foreground">$69/agent/mo &times; 5 = $345/mo</strong> ($4,140/yr).
              <br />
              Freshdesk Growth: <strong className="text-foreground">$15/agent/mo &times; 5 = $75/mo</strong> ($900/yr).
              <br />
              Savings: <strong className="text-foreground">$270/mo ($3,240/yr)</strong> for a 5-agent team. At 10 agents: $540/mo ($6,480/yr).
              <br />
              Or start with Freshdesk Free: <strong className="text-foreground">$0/mo</strong> for up to 2 agents with email ticketing and knowledge base.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Exact Pricing Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Billing Model</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zendesk</td>
                  <td className="px-4 py-2.5">Suite Team</td>
                  <td className="px-4 py-2.5">$69/agent/mo</td>
                  <td className="px-4 py-2.5">Per seat</td>
                  <td className="px-4 py-2.5">Omnichannel messaging, help center, AI agents</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zendesk</td>
                  <td className="px-4 py-2.5">Suite Professional</td>
                  <td className="px-4 py-2.5">$149/agent/mo</td>
                  <td className="px-4 py-2.5">Per seat</td>
                  <td className="px-4 py-2.5">Skills-based routing, custom analytics, HIPAA, community forums</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Flat</td>
                  <td className="px-4 py-2.5">Up to 2 agents, email ticketing, knowledge base, pre-built reports</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk</td>
                  <td className="px-4 py-2.5">Growth</td>
                  <td className="px-4 py-2.5">$15/agent/mo</td>
                  <td className="px-4 py-2.5">Per seat</td>
                  <td className="px-4 py-2.5">Automations, real-time dashboards, branded customer portal</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Freshdesk</td>
                  <td className="px-4 py-2.5">Pro</td>
                  <td className="px-4 py-2.5">$59/agent/mo</td>
                  <td className="px-4 py-2.5">Per seat</td>
                  <td className="px-4 py-2.5">Custom roles, round-robin routing, CSAT surveys, advanced reports</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">What You Gain vs. What You Lose</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">What You Gain</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What You Lose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">$54/agent/mo in savings (78% less)</td>
                  <td className="px-4 py-2.5 text-muted">Zendesk&apos;s massive marketplace (1,500+ apps)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Free tier for 2 agents to start</td>
                  <td className="px-4 py-2.5 text-muted">Zendesk&apos;s advanced AI features (included in Suite)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Freshworks ecosystem (Freshsales, Freshchat)</td>
                  <td className="px-4 py-2.5 text-muted">Zendesk&apos;s mature enterprise customization</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Simpler setup and faster deployment</td>
                  <td className="px-4 py-2.5 text-muted">Omnichannel messaging on the lowest tier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stay on Zendesk If...</h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li><strong className="text-foreground">You depend on Zendesk Marketplace apps.</strong> Zendesk has 1,500+ marketplace apps. If your workflow depends on specific integrations, verify they exist for Freshdesk before switching.</li>
            <li><strong className="text-foreground">You need FedRAMP compliance.</strong> Zendesk offers FedRAMP authorization. Freshdesk does not.</li>
            <li><strong className="text-foreground">You have 100+ agents with complex routing.</strong> Zendesk&apos;s enterprise features (skills-based routing, custom agent roles, sandbox environments) are more mature at scale.</li>
            <li><strong className="text-foreground">You use advanced AI heavily.</strong> Zendesk&apos;s AI agents are included in Suite plans. Freshdesk&apos;s Freddy AI is an add-on.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Migration Steps</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 1: Export Zendesk Data</h3>
          <p className="text-muted mb-4">Export tickets, contacts, and help center articles from Zendesk. Use the data export tool for tickets (CSV) and the Help Center API or manual export for articles.</p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 2: Set Up Freshdesk</h3>
          <p className="text-muted mb-4">Create your Freshdesk account on the Growth plan ($15/agent/mo). Configure email forwarding to point your support address to Freshdesk. Set up your ticket categories, priority levels, and SLA policies.</p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 3: Import Data</h3>
          <p className="text-muted mb-4">Freshdesk has a Zendesk migration tool that imports tickets, contacts, and agents. Help center articles need to be migrated manually or via API. Rebuild your macros and automation rules in Freshdesk&apos;s automation builder.</p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 4: Parallel Run for 2 Weeks</h3>
          <p className="text-muted mb-4">Run both systems for 2 weeks. Route new tickets to Freshdesk while keeping Zendesk for reference on open tickets. Train agents on the new interface and verify automation rules trigger correctly.</p>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Is Freshdesk Growth really comparable to Zendesk Suite Team?</h3>
          <p className="text-muted mb-4">For core ticketing, yes. Both offer email ticketing, automations, knowledge base, and reporting. The main gap: Zendesk Suite Team includes omnichannel messaging (chat, social, voice) while Freshdesk Growth focuses on email. For omnichannel, you&apos;d need Freshdesk Omni, which is a separate product line.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What about Freshdesk&apos;s AI capabilities?</h3>
          <p className="text-muted mb-4">Freshdesk offers Freddy AI as an add-on for chatbot and ticket classification. It&apos;s not as advanced as Zendesk&apos;s built-in AI, but for teams that primarily use email support, basic automations cover most needs.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Can I start with Freshdesk Free and upgrade later?</h3>
          <p className="text-muted mb-4">Yes. Freshdesk Free supports 2 agents with email ticketing and a knowledge base. It&apos;s a genuine free tier, not a trial. Upgrade to Growth ($15/agent/mo) when you need more than 2 agents or want automations and dashboards.</p>
        </div>

        <RelatedLinks
          tools={["zendesk", "freshdesk"]}
          comparisons={[]}
          guides={[
            "customer-support-stack",
            "help-desk-pricing-compared-2026",
            "support-tool-cost-over-3-years",
          ]}
        />
      </article>
    </>
  );
}
