import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "6 Zapier Features Most People Miss",
  description:
    "Zapier includes Tables, Interfaces, Formatter, and Paths that most users never discover. Available on Professional ($29.99/mo). Hidden features that reduce the need for other tools.",
};

export default function ZapierFeaturesMostPeopleMissPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link><span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link><span>/</span>
            <span className="text-foreground font-medium truncate">Zapier Features Most People Miss</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Hidden Features</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">6 Zapier Features Most People Miss</h1>
          <p className="text-muted text-lg leading-relaxed">Most people think Zapier is just trigger-action automations. But Zapier includes a no-code database (Tables), form builder (Interfaces), data transformation (Formatter), conditional logic (Paths), schedule triggers, and AI actions that most users never explore.</p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>10 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Tables — No-Code Database (Free — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Zapier Tables is a built-in database you can use as a lightweight CRM, inventory tracker, or data store. Tables sync with Zaps, so you can auto-populate from form submissions or update records from automations. Available on all tiers including free.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Replaces simple Airtable or Google Sheets use cases without a separate tool.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">2. Interfaces — Form and Page Builder (Free — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Build custom forms, landing pages, and dashboards that connect directly to Zaps. No Typeform or Tally needed for basic form-to-automation workflows. Available on free tier.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Form submission to CRM without a separate form tool. Saves $25-$60/month vs Typeform.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">3. Formatter — Data Transformation (Professional — $29.99/mo)</h2>
            <p className="text-muted leading-relaxed mb-2">Format dates, split text, lookup values, calculate numbers, and transform data mid-workflow. Most users manually format data before sending it through Zaps. Formatter handles it automatically.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Clean data transformation without code. Eliminates manual data cleanup steps.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">4. Paths — Conditional Logic (Professional — $29.99/mo)</h2>
            <p className="text-muted leading-relaxed mb-2">Add if/then branching to Zaps. Route leads to different CRMs based on deal size. Send different emails based on form responses. Paths turn simple automations into decision trees.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Conditional routing without building separate Zaps for each path. Note: each path step counts as a task.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">5. Schedule Triggers (Free — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Run Zaps on a schedule (every hour, day, or week) instead of waiting for triggers. Pull data from APIs, generate weekly digests, or clean up databases on autopilot.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Proactive automation instead of reactive. Great for reporting and data maintenance.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">6. AI Actions (Professional — $29.99/mo)</h2>
            <p className="text-muted leading-relaxed mb-2">Use AI within Zaps to summarize text, extract data, classify inputs, or generate responses. Built on GPT models. Eliminates the need for a separate OpenAI API integration for simple AI tasks.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> AI-powered automation without coding or API setup.</p></div>
          </section>
          <RelatedLinks
            tools={["zapier"]}
            comparisons={["zapier-vs-make"]}
            guides={["zapier-setup-guide", "is-zapier-worth-the-price", "zapier-hidden-costs"]}
          />
        </div>
      </article>
    </>
  );
}
