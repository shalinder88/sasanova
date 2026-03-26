import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "7 HubSpot Features Most People Miss",
  description:
    "HubSpot Free includes meeting scheduling, document tracking, and email templates that most users never discover. Plus hidden features on Starter ($20/seat) and Professional ($890/mo).",
};

export default function HubspotFeaturesMostPeopleMissPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">HubSpot Features Most People Miss</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Hidden Features</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">7 HubSpot Features Most People Miss</h1>
          <p className="text-muted text-lg leading-relaxed">HubSpot is enormous. Most teams use 10-15% of available features. Here are 7 features buried in the platform that deliver real value, organized by which tier unlocks them.</p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>11 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Meeting Scheduler (Free Tools — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">HubSpot Free includes a personal meeting link similar to Calendly. You get one scheduling page with Google Calendar or Outlook sync. Most users pay for Calendly ($12/user/month) without realizing HubSpot offers this free.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Saves $144/year per user vs Calendly Standard. Meetings auto-create contacts in your CRM.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">2. Document Tracking (Free Tools — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Upload proposals and track when prospects open them, how long they read, and which pages they view. Free tier includes 5 documents with tracking. Most teams use DocuSign or PandaDoc without knowing HubSpot has basic document tracking built in.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Follow up when prospects are actively reading your proposal. No additional tool cost.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">3. Email Templates and Snippets (Free Tools — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Create reusable email templates and text snippets that any team member can use. Free tier includes 5 templates and 5 snippets. Starter ($20/seat) unlocks 5,000 of each.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Standardizes outreach without buying a separate sales engagement tool.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">4. Chatflows with Qualification (Free Tools — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Build chatbot flows that qualify leads before routing to a human. Free tier includes basic chatbot with branching logic. Most teams install Intercom ($39/seat) for this without trying HubSpot first.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Lead qualification without Intercom or Drift. Contacts auto-create in CRM.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">5. Email Health Reporting (Starter — $20/seat/mo)</h2>
            <p className="text-muted leading-relaxed mb-2">Starter unlocks email health dashboards showing deliverability metrics, spam reports, and engagement trends. Most email tools charge for this level of reporting.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Catch deliverability issues before they tank your open rates.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">6. Calculated Properties (Professional — $890/mo)</h2>
            <p className="text-muted leading-relaxed mb-2">Create custom properties that auto-calculate based on other fields. Revenue per contact, deal velocity, days since last activity. Professional tier only, but powerful for teams that need custom metrics without exporting to spreadsheets.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Custom sales metrics without a BI tool. But the $890/mo price means this is only justified for teams already on Professional.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">7. Playbooks for Sales Reps (Professional — $890/mo)</h2>
            <p className="text-muted leading-relaxed mb-2">Create guided selling scripts that reps follow during calls. Playbooks appear in the contact record with prompts, questions, and competitive battle cards. Often overlooked in favor of external tools like Gong or Chorus.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Sales enablement built into the CRM. No separate tool license needed if you are already on Professional.</p></div>
          </section>
          <RelatedLinks
            tools={["hubspot-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive"]}
            guides={["hubspot-pricing-reality", "is-hubspot-free-really-free", "hubspot-crm-setup-guide"]}
          />
        </div>
      </article>
    </>
  );
}
