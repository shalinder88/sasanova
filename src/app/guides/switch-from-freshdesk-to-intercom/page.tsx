import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Freshdesk to Intercom: When Ticket-Based Support Isn't Enough",
  description:
    "Why teams switch from Freshdesk to Intercom, the price jump ($15/agent to $39/seat), when messenger-first support is worth it, and what you lose in the move.",
};

export default function SwitchFreshdeskToIntercomPage() {
  return (
    <>
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
              Freshdesk to Intercom
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Migration Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Freshdesk to Intercom: When Ticket-Based Support Isn&apos;t Enough
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Freshdesk handles support tickets at $15/agent/mo. Intercom reimagines
            support as conversations at $39/seat/mo (plus $0.99 per AI resolution).
            The price jump is significant. The approach is fundamentally different.
            This guide helps you decide if the investment is justified and what to
            expect during the transition.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none">

          {/* ── Why People Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Why People Switch from Freshdesk to Intercom</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Ticket-based support feels impersonal.</strong> Freshdesk treats every customer inquiry as a ticket with a number. Intercom treats it as a conversation in a messenger. For SaaS companies, e-commerce, and tech-forward businesses, the conversational approach feels more natural and drives higher customer satisfaction.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">AI-first resolution with Fin.</strong> Intercom&apos;s Fin AI Agent handles customer queries autonomously using your help center content. It resolves common questions without human intervention at $0.99 per AI resolution. Freshdesk has Freddy AI as an add-on, but it&apos;s not as mature or central to the product.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Proactive messaging.</strong> Intercom doesn&apos;t just wait for customers to submit tickets. It enables targeted in-app messages, product tours, and outbound campaigns that reach customers before they need help. Freshdesk is reactive by design.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Modern SaaS customer experience.</strong> Intercom&apos;s messenger widget is recognizable across thousands of SaaS products. Customers expect it. The experience &mdash; chat, help articles, and bot responses in one widget &mdash; feels more integrated than a traditional ticket portal.
            </p>
          </section>

          {/* ── What You Gain ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What You Gain Moving to Intercom</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Fin AI Agent.</strong> Intercom&apos;s AI resolves conversations automatically based on your help center, past conversations, and custom answers. Companies report 30&ndash;50% of conversations resolved by Fin without human handoff. At $0.99/resolution, it can be cost-effective for high-volume support.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Conversational messenger.</strong> The Intercom Messenger combines live chat, help articles, news, and bot flows in one widget. Customers get instant answers from AI, search the help center, or escalate to a human &mdash; all without leaving your app.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Outbound messaging and product tours.</strong> Target specific user segments with in-app messages, banners, and guided tours. Onboard new users, announce features, or nudge engagement based on user behavior. Freshdesk doesn&apos;t have this capability.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Modern workflows and automation.</strong> Intercom&apos;s workflow builder lets you route conversations, assign teams, tag and prioritize based on custom rules. The visual builder is intuitive and powerful.
            </p>
          </section>

          {/* ── What You Lose ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What You Lose Leaving Freshdesk</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Affordable pricing.</strong> Freshdesk Growth is $15/agent/mo. Intercom Essential is $39/seat/mo &mdash; a 160% price increase per agent. At 10 agents, that&apos;s $150/mo vs $390/mo. The gap widens at scale.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Free tier for small teams.</strong> Freshdesk Free supports 2 agents with email ticketing and a knowledge base. Intercom has no free plan &mdash; just a 14-day trial. Small teams on a budget lose a viable zero-cost option.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Predictable pricing.</strong> Freshdesk&apos;s per-agent pricing is predictable. Intercom&apos;s per-resolution AI costs ($0.99/resolution) add unpredictability. High support volume months can spike your bill. Companies have reported surprise charges when Fin resolves more conversations than expected.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Traditional ticketing maturity.</strong> Freshdesk excels at structured ticketing: SLA management, CSAT surveys, canned responses, ticket views, and agent collision detection. Intercom handles these but its conversational model makes traditional ticket management less straightforward.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Freshworks suite integration.</strong> If you use Freshsales, Freshchat, or other Freshworks tools, the native integration is valuable. Intercom integrates with third-party tools but not with the same depth as Freshworks-to-Freshworks.
            </p>
          </section>

          {/* ── Cost Comparison ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Cost Comparison</h2>
            <p className="text-muted mb-4">
              Monthly billing rates, verified March 2026. Intercom AI resolution costs shown separately.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Freshdesk Growth</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Freshdesk Pro</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Intercom Essential</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Intercom Advanced</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">3 agents</td>
                    <td className="px-4 py-2.5">$45/mo</td>
                    <td className="px-4 py-2.5">$177/mo</td>
                    <td className="px-4 py-2.5">$117/mo</td>
                    <td className="px-4 py-2.5">$297/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">5 agents</td>
                    <td className="px-4 py-2.5">$75/mo</td>
                    <td className="px-4 py-2.5">$295/mo</td>
                    <td className="px-4 py-2.5">$195/mo</td>
                    <td className="px-4 py-2.5">$495/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">10 agents</td>
                    <td className="px-4 py-2.5">$150/mo</td>
                    <td className="px-4 py-2.5">$590/mo</td>
                    <td className="px-4 py-2.5">$390/mo</td>
                    <td className="px-4 py-2.5">$990/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Price source:</strong> Freshdesk Growth is $15/agent/mo, Pro is $59/agent/mo. Intercom Essential is $39/seat/mo, Advanced is $99/seat/mo. Intercom Fin AI costs $0.99 per resolution on top of seat costs.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">The AI cost variable:</strong> If Fin AI resolves 500 conversations/month, add $495/mo to your Intercom bill. If it resolves 1,000, add $990/mo. The ROI depends on how many human agent hours Fin replaces. If Fin replaces 1 full-time agent ($3,000&ndash;$5,000/mo), the AI costs pay for themselves quickly.
            </p>
          </section>

          {/* ── Who Should NOT Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Switch to Intercom</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Budget-constrained small teams.</strong> If Freshdesk Growth at $15/agent/mo is already stretching your budget, Intercom at $39/seat/mo plus AI resolution fees is not the right move. Freshdesk delivers solid support functionality at a fraction of the cost.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams needing traditional ticket management.</strong> If your support process centers on SLA compliance, ticket routing rules, and structured escalation paths, Freshdesk&apos;s ticketing model is more mature and purpose-built for these workflows.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Phone-first support teams.</strong> If voice support is your primary channel, neither tool is ideal, but Freshdesk&apos;s Freshcaller integration is more mature than Intercom&apos;s phone support options.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams that need predictable monthly costs.</strong> Intercom&apos;s per-resolution AI billing makes monthly costs variable. If your finance team requires predictable software spend, the billing model can be a problem.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate my Freshdesk tickets to Intercom?</h3>
                <p className="text-muted">Intercom offers migration tools and support for moving from Freshdesk. Ticket history, contacts, and help center articles can be imported. Active conversations should be resolved in Freshdesk before switching.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Intercom&apos;s Fin AI worth the per-resolution cost?</h3>
                <p className="text-muted">For teams handling 500+ conversations/month where many are repetitive (password resets, how-to questions, status checks), Fin can save significant agent time. Calculate: if Fin handles 500 resolutions at $0.99 each ($495/mo), compare that to the cost of an agent handling those same 500 conversations manually.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Intercom have a knowledge base like Freshdesk?</h3>
                <p className="text-muted">Yes. Intercom&apos;s Help Center is included on all plans. Articles are searchable within the Messenger widget and used by Fin AI for automated responses. The editor is modern and supports rich content.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I start with Intercom Essential and upgrade later?</h3>
                <p className="text-muted">Yes. Essential ($39/seat/mo) includes the Messenger, shared inbox, ticketing, help center, and Fin AI. Advanced ($99/seat/mo) adds multiple inboxes, workflow automation, and round-robin routing. Start with Essential and upgrade as your team and volume grow.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/compare/freshdesk-vs-zendesk"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Freshdesk vs Zendesk</span>
                <span className="block text-xs text-muted mt-1">Two top helpdesks compared side by side</span>
              </Link>
              <Link
                href="/compare/freshdesk-vs-intercom"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Freshdesk vs Intercom</span>
                <span className="block text-xs text-muted mt-1">Full comparison with pricing tables</span>
              </Link>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["freshdesk", "intercom"]}
          comparisons={["freshdesk-vs-intercom"]}
          guides={[]}
        />
      </article>
    </>
  );
}
