import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Intercom (And What to Use Instead)",
  description:
    "Intercom starts at $39/seat/month with no free tier. Plus $0.99 per AI resolution. Here are 4 situations where Intercom is the wrong choice, with cheaper alternatives.",
};

export default function WhoShouldNotUseIntercom() {
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
              Who Should NOT Use Intercom
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Anti-Recommendation
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use Intercom (And What to Use Instead)
          </h1>
          <p className="text-lg text-muted">
            Intercom pioneered conversational customer support and now leads with AI-first features. It&apos;s also expensive: $39/seat/month minimum, no free tier, and the AI chatbot charges $0.99 per resolution on top. Here&apos;s when Intercom is the wrong choice.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Decision Box ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Quick Version</p>
            <p className="text-sm text-muted">
              Intercom Essential starts at $39/seat/month with Fin AI Agent at $0.99 per resolution. For a 3-person support team handling 500 AI resolutions/month, your bill is $612/month. If you&apos;re a small support team, have fewer than 100 customers, or need predictable pricing, Intercom is overkill.
            </p>
          </div>

          {/* ── Case 1: Small Support Teams ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Small Support Teams (1&ndash;3 Agents)</h2>
          <p className="text-muted mb-4">
            Intercom Essential at $39/seat/month gives you Fin AI Agent, Messenger, shared inbox, ticketing, and help center. For 2 agents: $78/month before AI resolution costs. Add 200 Fin resolutions at $0.99 each: $276/month total. That&apos;s a lot for a 2-person support team.
          </p>
          <p className="text-muted mb-4">
            Crisp Free supports 2 seats with a chat widget, shared inbox, and unlimited messages. Crisp Mini at $45/month (flat, not per seat) adds 4 seats, email inbox, and chat triggers. Help Scout Free gives unlimited users with 50 contacts/month, a shared inbox, and knowledge base. Both cost a fraction of Intercom for small teams.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Crisp Free</strong> &mdash; $0 for 2 seats. Chat widget, shared inbox, unlimited messages. Mini at $45/month (flat) for 4 seats. Essentials at $95/month (flat) for 10 seats with AI chatbot and knowledge base. <Link href="/tools/crisp" className="text-accent hover:underline">See Crisp review</Link></li>
              <li><strong className="text-foreground">Help Scout Free</strong> &mdash; $0 for unlimited users, 50 contacts/month. Shared inbox, knowledge base, Beacon widget. Standard at $55/month (flat) for 100 contacts/month. <Link href="/tools/help-scout" className="text-accent hover:underline">See Help Scout review</Link></li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">2-Agent Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pricing Model</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">AI Chatbot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Intercom Essential</td>
                  <td className="px-4 py-2.5">$78/mo + $0.99/AI resolution</td>
                  <td className="px-4 py-2.5">Per seat + usage</td>
                  <td className="px-4 py-2.5">Fin ($0.99/resolution)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Crisp Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Flat (per workspace)</td>
                  <td className="px-4 py-2.5">Essentials tier ($95/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Help Scout Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Flat (unlimited users)</td>
                  <td className="px-4 py-2.5">AI assist (Standard+)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Case 2: Under 100 Customers ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Companies With Under 100 Active Customers</h2>
          <p className="text-muted mb-4">
            If you have fewer than 100 customers, your support volume doesn&apos;t justify a dedicated platform. You might handle 5&ndash;20 support conversations per week &mdash; that&apos;s manageable with a shared email inbox, a simple FAQ page, and good documentation.
          </p>
          <p className="text-muted mb-4">
            At 50&ndash;100 customers, a shared support email (support@company.com) with basic organization is often enough. Help Scout Free gives you a proper shared inbox with 50 contacts/month &mdash; likely enough at this stage. Don&apos;t add tooling complexity before you have the volume to justify it.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Help Scout Free</strong> &mdash; $0 for unlimited users, 50 contacts/month. Shared inbox with email-like experience, knowledge base, and Beacon widget. Feels personal, not robotic. <Link href="/tools/help-scout" className="text-accent hover:underline">See Help Scout review</Link></li>
              <li><strong className="text-foreground">Shared email</strong> &mdash; $0. A support@company.com alias forwarded to your existing email. No tool needed until volume justifies one.</li>
            </ul>
          </div>

          {/* ── Case 3: Budget-Conscious ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Budget-Conscious Teams Who Need Predictable Pricing</h2>
          <p className="text-muted mb-4">
            Intercom&apos;s pricing has two unpredictable components: per-seat costs that scale with team growth, and per-resolution AI costs that scale with support volume. A 5-agent team on Advanced ($99/seat/month) handling 1,000 Fin resolutions/month pays $495 + $990 = $1,485/month. If AI resolutions spike during a product launch, your bill spikes too.
          </p>
          <p className="text-muted mb-4">
            Crisp uses flat-rate pricing per workspace, not per seat. Essentials at $95/month includes 10 seats, AI chatbot, knowledge base, and analytics. No per-resolution charges. No surprise bills. For teams that need cost certainty, flat-rate pricing is a safer model.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Crisp Essentials</strong> &mdash; $95/month (flat). 10 seats, omnichannel inbox, AI chatbot, knowledge base, analytics. No per-seat or per-resolution charges. <Link href="/tools/crisp" className="text-accent hover:underline">See Crisp review</Link></li>
              <li><strong className="text-foreground">Help Scout Standard</strong> &mdash; $55/month (flat). Unlimited users, 100 contacts/month, workflows, custom fields, reporting. Contact-based pricing is predictable. <Link href="/tools/help-scout" className="text-accent hover:underline">See Help Scout review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: Not SaaS ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Non-SaaS Businesses (E-commerce, Services, Agencies)</h2>
          <p className="text-muted mb-4">
            Intercom is designed for SaaS companies: in-app messaging, product tours, user onboarding, and event-triggered messages. If you&apos;re an e-commerce store, a service business, or an agency, half of Intercom&apos;s features don&apos;t apply to your workflow. You&apos;re paying for product tour builders and in-app banners you&apos;ll never use.
          </p>
          <p className="text-muted mb-4">
            Freshdesk Growth at $15/seat/month offers email ticketing, automations, and customer portal &mdash; the traditional support features that non-SaaS businesses need. Crisp covers live chat and omnichannel support across WhatsApp, Instagram, and SMS for businesses that interact with customers across multiple channels.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Crisp Essentials</strong> &mdash; $95/month (flat). Omnichannel support across email, WhatsApp, Instagram, SMS. 10 seats. Built for businesses that talk to customers across channels. <Link href="/tools/crisp" className="text-accent hover:underline">See Crisp review</Link></li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Intercom IS the Right Choice</h2>
          <p className="text-muted mb-4">
            Intercom is the right choice for <strong className="text-foreground">SaaS companies with 500+ customers who want AI-first conversational support with in-app messaging, product tours, and proactive outreach.</strong>
          </p>
          <p className="text-muted mb-4">
            Fin AI Agent genuinely resolves 30&ndash;50% of support conversations without human involvement. At scale, $0.99 per resolution is cheaper than a human agent handling the same ticket. If you have enough volume for AI deflection to save money, and you value in-app messaging for user onboarding and engagement, Intercom&apos;s platform is best-in-class. The Advanced plan at $99/seat/month with Fin paying for itself in deflected tickets is the sweet spot.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Intercom have a free tier?</h3>
                <p className="text-muted">No. Intercom has no free plan. The cheapest option is Essential at $39/seat/month. There is a 14-day free trial available.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Fin AI Agent cost?</h3>
                <p className="text-muted">Fin charges $0.99 per resolution (a conversation it handles without human intervention). If Fin handles 500 conversations/month, that&apos;s $495/month in AI costs on top of your seat fees. Costs are unpredictable and scale with volume.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Intercom vs Zendesk &mdash; which is cheaper?</h3>
                <p className="text-muted">Zendesk Suite Team starts at $25/agent/month (cheaper entry point). Intercom Essential is $39/seat/month. At enterprise scale, both get expensive. The main difference is Intercom&apos;s AI-first approach vs Zendesk&apos;s traditional ticketing model.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate from Intercom to another tool?</h3>
                <p className="text-muted">Conversation history exports via CSV and API. The Messenger widget, Fin AI training data, custom bots, and product tours don&apos;t transfer. Intercom has one of the higher switching costs in the support tool space because of how deeply the Messenger integrates into your product.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["intercom", "crisp", "help-scout", "freshdesk", "zendesk"]}
          comparisons={["intercom-vs-zendesk", "intercom-vs-crisp"]}
          guides={["customer-support-stack"]}
        />
      </article>
    </>
  );
}
