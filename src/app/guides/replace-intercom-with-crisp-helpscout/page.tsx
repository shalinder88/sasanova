import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Replace Intercom with Crisp or Help Scout: 80% Less",
  description:
    "Intercom Essential costs $39/seat/mo plus $0.99/AI resolution. Crisp Mini is $45/mo flat for 4 seats. Help Scout Free is $0 for 50 contacts/mo with unlimited users. Exact pricing and migration guide.",
};

export default function ReplaceIntercomWithCrispHelpscout() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Replace Intercom with Crisp or Help Scout</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Replacement Stack
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Replace Intercom with Crisp or Help Scout: 80% Less
          </h1>
          <p className="text-lg text-muted">
            Intercom is powerful, but at $39/seat/mo (plus $0.99 per AI resolution), costs add up fast for small support teams. Crisp charges a flat $45/mo for up to 4 seats. Help Scout is free for up to 50 contacts/month with unlimited users. Here&apos;s how each alternative compares and when Intercom is still worth it.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Math (3-agent team)</p>
            <p className="text-sm text-muted">
              Intercom Essential: <strong className="text-foreground">$39/seat/mo &times; 3 = $117/mo</strong> + Fin AI resolution costs (~$0.99/resolution).
              <br />
              Crisp Mini: <strong className="text-foreground">$45/mo flat</strong> (includes 4 seats, shared inbox, chat triggers, unlimited history).
              <br />
              Help Scout Free: <strong className="text-foreground">$0/mo</strong> (50 contacts/month, unlimited users, shared inbox, knowledge base).
              <br />
              Savings vs Intercom: <strong className="text-foreground">$72/mo with Crisp ($864/yr)</strong> or <strong className="text-foreground">$117/mo with Help Scout Free ($1,404/yr)</strong>.
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
                  <td className="px-4 py-2.5 font-medium text-foreground">Intercom</td>
                  <td className="px-4 py-2.5">Essential</td>
                  <td className="px-4 py-2.5">$39/seat/mo</td>
                  <td className="px-4 py-2.5">Per seat</td>
                  <td className="px-4 py-2.5">Fin AI Agent ($0.99/resolution), Messenger, shared inbox, ticketing, help center</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Crisp</td>
                  <td className="px-4 py-2.5">Mini</td>
                  <td className="px-4 py-2.5">$45/mo</td>
                  <td className="px-4 py-2.5">Flat (4 seats)</td>
                  <td className="px-4 py-2.5">Shared email inbox, chat triggers, shortcuts, unlimited history</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Crisp</td>
                  <td className="px-4 py-2.5">Essentials</td>
                  <td className="px-4 py-2.5">$95/mo</td>
                  <td className="px-4 py-2.5">Flat (10 seats)</td>
                  <td className="px-4 py-2.5">Omnichannel inbox, AI chatbot, knowledge base, analytics</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Help Scout</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                  <td className="px-4 py-2.5">Flat</td>
                  <td className="px-4 py-2.5">50 contacts/month, unlimited users, shared inbox, knowledge base, Beacon widget</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Help Scout</td>
                  <td className="px-4 py-2.5">Standard</td>
                  <td className="px-4 py-2.5">$55/mo</td>
                  <td className="px-4 py-2.5">Flat</td>
                  <td className="px-4 py-2.5">100 contacts/month, unlimited users, workflows, custom fields, reporting</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Choose Crisp If...</h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li><strong className="text-foreground">You want omnichannel messaging.</strong> Crisp supports email, WhatsApp, Instagram, SMS, and live chat from one inbox. Crisp Essentials at $95/mo for 10 seats includes all channels &mdash; still cheaper than 3 Intercom seats.</li>
            <li><strong className="text-foreground">You hate per-seat pricing.</strong> Crisp charges per workspace, not per agent. Mini is $45/mo for 4 seats. That flat-rate model means your costs stay predictable as you hire.</li>
            <li><strong className="text-foreground">You want a chatbot without AI resolution fees.</strong> Crisp Essentials includes an AI chatbot in the flat rate. No per-resolution charges like Intercom&apos;s Fin.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Choose Help Scout If...</h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li><strong className="text-foreground">You want email-first support.</strong> Help Scout feels like email, not a complex support platform. Clean, simple, and personal.</li>
            <li><strong className="text-foreground">You have low volume.</strong> 50 contacts/month on the Free plan with unlimited users is genuinely generous for early-stage companies.</li>
            <li><strong className="text-foreground">You value unlimited users on every plan.</strong> Help Scout recently switched to contact-based pricing. Standard at $55/mo gives you unlimited users and 100 contacts/month.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Stay on Intercom If...</h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li><strong className="text-foreground">AI-first support is core to your strategy.</strong> Intercom&apos;s Fin AI Agent is best-in-class. If it handles 50%+ of your conversations, the $0.99/resolution may pay for itself by reducing agent headcount.</li>
            <li><strong className="text-foreground">You use product tours and outbound messaging.</strong> Neither Crisp nor Help Scout offers product tours. Intercom is a customer engagement platform, not just a help desk.</li>
            <li><strong className="text-foreground">You&apos;re a SaaS company with complex onboarding.</strong> Intercom&apos;s Messenger, bots, and product tours create a cohesive in-app experience that alternatives can&apos;t match.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Migration Steps</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 1: Export Intercom Data</h3>
          <p className="text-muted mb-4">
            Export conversation history, contacts, and help center articles from Intercom using Data Export. Download your custom bot workflows separately &mdash; these will need to be rebuilt manually.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 2: Set Up Your New Tool</h3>
          <p className="text-muted mb-4">
            For Crisp: Install the chat widget on your site, configure your shared inbox, import contacts, and set up chat triggers. For Help Scout: Set up your mailbox, import contacts, create your knowledge base (Docs), and install the Beacon widget.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 3: Rebuild Help Center Content</h3>
          <p className="text-muted mb-4">
            Both Crisp (Essentials) and Help Scout include knowledge base features. Manually migrate your Intercom help articles. This is the most time-consuming step but only needs to be done once.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Step 4: Run Parallel for 2 Weeks</h3>
          <p className="text-muted mb-4">
            Keep Intercom active while you verify the new tool handles your volume. Monitor response times, team adoption, and customer satisfaction before cutting over completely.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Can Crisp or Help Scout match Intercom&apos;s AI capabilities?</h3>
          <p className="text-muted mb-4">
            Not at the same depth. Crisp Essentials includes an AI chatbot, and Help Scout has AI Answers, but neither matches Fin&apos;s ability to resolve complex queries autonomously. If AI deflection is your primary cost-saving strategy, Intercom may still be cheaper long-term.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What about the 50-contact limit on Help Scout Free?</h3>
          <p className="text-muted mb-4">
            50 contacts/month means 50 unique customers you communicate with &mdash; not 50 conversations. For very early-stage businesses, this is often sufficient. Standard at $55/mo bumps it to 100, and Plus at $83/mo gives you 250.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Is Crisp Mini enough for a real support team?</h3>
          <p className="text-muted mb-4">
            For teams of 1&ndash;4 handling email and live chat, yes. You get a shared inbox, chat triggers, and unlimited message history. If you need omnichannel (WhatsApp, Instagram) or an AI chatbot, step up to Crisp Essentials at $95/mo &mdash; still cheaper than 3 Intercom Essential seats at $117/mo.
          </p>
        </div>

        <RelatedLinks
          tools={["intercom", "crisp", "help-scout"]}
          comparisons={[]}
          guides={[
            "customer-support-stack",
            "help-desk-pricing-compared-2026",
            "switch-from-freshdesk-to-intercom",
          ]}
        />
      </article>
    </>
  );
}
