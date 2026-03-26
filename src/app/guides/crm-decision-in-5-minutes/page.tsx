import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Choose Your CRM in 5 Minutes: Decision Flowchart",
  description:
    "Answer 5 questions and get a specific CRM recommendation. HubSpot, Pipedrive, Close, Freshsales, or Folk — with exact pricing for each path.",
};

export default function CrmDecisionIn5MinutesPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">CRM Decision in 5 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Decision Quick-Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Choose Your CRM in 5 Minutes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Stop comparing feature matrices. Answer five questions and get a specific recommendation
            with exact pricing.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>5 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Question 1 */}
          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 1: What is your budget per seat?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">$0/seat</strong> &rarr; <strong className="text-accent">HubSpot Free</strong> (unlimited contacts, basic CRM, 2,000 emails/mo)</p>
              <p><strong className="text-foreground">Under $20/seat</strong> &rarr; Go to Question 2</p>
              <p><strong className="text-foreground">$20&ndash;$50/seat</strong> &rarr; Go to Question 3</p>
              <p><strong className="text-foreground">$50+/seat</strong> &rarr; Go to Question 4</p>
            </div>
          </section>

          {/* Question 2 */}
          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 2: Do you close deals or nurture relationships?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Close deals (pipeline-focused)</strong> &rarr; <strong className="text-accent">Pipedrive Lite at $14/seat/mo</strong>. Visual pipeline, drag-and-drop deals, activity tracking.</p>
              <p><strong className="text-foreground">Nurture relationships (network-focused)</strong> &rarr; <strong className="text-accent">HubSpot Starter at $20/seat/mo</strong>. Contact management, email tracking, forms, live chat.</p>
            </div>
          </section>

          {/* Question 3 */}
          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 3: Do you need built-in calling and email sequences?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, calling is critical</strong> &rarr; <strong className="text-accent">Close Essentials at $49/seat/mo</strong>. Built-in Power Dialer, email sequences, SMS messaging.</p>
              <p><strong className="text-foreground">No, just pipeline management</strong> &rarr; <strong className="text-accent">Pipedrive Growth at $39/seat/mo</strong>. Email sync, automations, scheduler, group emailing.</p>
            </div>
          </section>

          {/* Question 4 */}
          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 4: Do you need marketing automation in the CRM?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, marketing + sales together</strong> &rarr; <strong className="text-accent">HubSpot Professional at $890/mo flat</strong>. Full marketing automation, custom reporting, ABM. Note: this is a significant price jump from Starter ($20/seat).</p>
              <p><strong className="text-foreground">No, sales-focused only</strong> &rarr; <strong className="text-accent">Close Growth at $109/seat/mo</strong>. Multiple pipelines, call recording, workflow automation.</p>
            </div>
          </section>

          {/* Question 5 */}
          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 5: Team size sanity check</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Solo / 1&ndash;2 people</strong> &rarr; Start with <strong className="text-accent">HubSpot Free</strong> or <strong className="text-accent">Pipedrive Lite ($14/seat)</strong>. Do not overspend.</p>
              <p><strong className="text-foreground">3&ndash;10 people</strong> &rarr; <strong className="text-accent">Pipedrive Growth ($39/seat)</strong> or <strong className="text-accent">Close Essentials ($49/seat)</strong> depending on whether you need calling.</p>
              <p><strong className="text-foreground">10+ people with marketing</strong> &rarr; <strong className="text-accent">HubSpot Professional ($890/mo + seats)</strong> if you need marketing automation. Otherwise, <strong className="text-accent">Pipedrive Premium ($49/seat)</strong>.</p>
            </div>
          </section>

          {/* Quick Reference */}
          <section>
            <h2 className="text-xl font-bold mb-4">Quick Price Reference</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Entry Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mid-Tier Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free ($0)</td>
                    <td className="px-4 py-2.5 text-muted">Starter: $20/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Lite: $14/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Growth: $39/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Close</td>
                    <td className="px-4 py-2.5 text-muted">Solo: $19/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Essentials: $49/seat/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What about Salesforce?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Salesforce starts at $25/user/mo (Starter) but most teams need Pro Suite at $100/user/mo
                  plus implementation costs. If you are asking this question, you probably do not need Salesforce yet.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I switch CRMs later?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes, but it gets harder over time. Contact data exports easily via CSV. What does not
                  transfer: automation workflows, email templates, and activity history. Start with the
                  right CRM to avoid a painful migration at 1,000+ contacts.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "close-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive"]}
            guides={["how-to-choose-crm", "best-crm-freelancers-consultants", "best-crm-sales-teams"]}
          />
        </div>
      </article>
    </>
  );
}
