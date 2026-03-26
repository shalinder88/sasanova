import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Set Up Lead Capture in 30 Minutes: Form + CRM + Automation",
  description:
    "Build a complete lead capture workflow in 30 minutes using Tally (free) + HubSpot Free + Zapier Free. Step-by-step with exact prices. Total cost: $0.",
};

export default function SetUpLeadCapturePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Lead Capture in 30 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Practical Workflow
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Set Up Lead Capture in 30 Minutes: Form + CRM + Automation
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Most lead capture setups take days because people overcomplicate them. This guide
            walks you through a working lead capture system &mdash; form to CRM to notification &mdash;
            using three free tools in 30 minutes flat. Total cost: $0/month.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Stack</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Role</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Form</td>
                    <td className="px-4 py-2.5 text-muted">Tally</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$0/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Free Tools</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$0/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$0/mo</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-surface-alt font-semibold">
                    <td className="px-4 py-2.5 text-foreground" colSpan={3}>Total</td>
                    <td className="px-4 py-2.5 text-foreground">$0/mo</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              <strong>Free tier limits:</strong> Tally: unlimited forms and submissions. HubSpot Free:
              unlimited contacts, 2,000 email sends/mo. Zapier Free: 100 tasks/month, two-step only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Step-by-Step Setup (30 Minutes)</h2>
            <div className="space-y-4">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 1&ndash;10: Create the Form in Tally</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Sign up at tally.so. Create a new form with fields: Name, Email, Company, Message.
                  Add conditional logic if needed (free). Style the form. Copy the embed code or share link.
                  Tally&apos;s Notion-like editor makes this fast.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 10&ndash;20: Set Up HubSpot Free CRM</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Create a HubSpot account (free). Set up your deal pipeline with stages: New Lead,
                  Contacted, Meeting Scheduled, Proposal Sent, Won/Lost. Create custom contact
                  properties that match your Tally form fields.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 20&ndash;30: Connect with Zapier</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Create a Zap: Trigger &mdash; Tally &ldquo;New Submission.&rdquo; Action &mdash; HubSpot
                  &ldquo;Create Contact.&rdquo; Map form fields to HubSpot properties. Test the Zap.
                  This uses 1 task per submission on Zapier Free (100/month).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">When to Upgrade</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Trigger</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Upgrade To</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">More than 100 leads/month</td>
                    <td className="px-4 py-2.5 text-muted">Make Core (replace Zapier)</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo (10,000 ops)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Need multi-step automation</td>
                    <td className="px-4 py-2.5 text-muted">Zapier Professional</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo (750 tasks)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Need CRM automation</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Remove Tally branding</td>
                    <td className="px-4 py-2.5 text-muted">Tally Pro</td>
                    <td className="px-4 py-2.5 text-muted">$29/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Why Tally instead of Typeform?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Tally Free gives unlimited forms and unlimited submissions. Typeform Free gives
                  10 responses/month. For lead capture, Tally is the clear winner on free tier.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Why not use HubSpot&apos;s built-in forms?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  HubSpot Free includes forms, but they have HubSpot branding and limited design options.
                  Tally gives you a better-looking form with a Notion-like editor, plus conditional
                  logic, all for free.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "automate-lead-capture",
              "set-up-crm-pipeline-in-30-minutes",
              "set-up-newsletter-in-30-minutes",
              "what-you-get-for-free-in-automation",
            ]}
          />
        </div>
      </article>
    </>
  );
}
