import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Stack for Healthcare Practices: Scheduling, CRM, Communication, and Compliance",
  description:
    "The software stack for small healthcare practices. Calendly Standard at $12/user/mo for scheduling, HubSpot CRM Free for patient relationships, Slack Pro at $8.75/user/mo for team communication, and compliance considerations.",
};

export default function SaasStackForHealthcarePractices() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Stack for Healthcare Practices</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Industry Stack
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Stack for Healthcare Practices: Scheduling, CRM, Communication, and Compliance
          </h1>
          <p className="text-lg text-muted">
            Small healthcare practices &mdash; therapy offices, dental clinics, wellness centers &mdash; need patient scheduling, relationship management, team communication, and HIPAA-conscious tooling. Here&apos;s the exact stack with verified pricing and compliance notes for every tool.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="rounded-lg border border-yellow-600/30 bg-yellow-600/10 p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              Important: Compliance Disclaimer
            </p>
            <p className="text-sm text-muted">
              This guide covers general-purpose SaaS tools, not dedicated EHR/EMR systems. If your practice handles protected health information (PHI), you must use tools with HIPAA compliance and sign Business Associate Agreements (BAAs). Always verify compliance with your legal advisor before adopting any tool for PHI-related workflows.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Recommended Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Need</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HIPAA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">Scheduling</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Calendly</td>
                  <td className="px-4 py-2.5">Standard</td>
                  <td className="px-4 py-2.5">$12/user/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Patient CRM</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot CRM</td>
                  <td className="px-4 py-2.5">Free Tools</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5 text-yellow-400">No (Enterprise only)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Team Communication</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Slack</td>
                  <td className="px-4 py-2.5">Pro</td>
                  <td className="px-4 py-2.5">$8.75/user/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">Enterprise Grid only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Internal Docs</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5 text-yellow-400">Enterprise only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Patient Email</td>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5 text-yellow-400">No</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-semibold text-foreground" colSpan={4}>Total (solo practitioner)</td>
                  <td className="px-4 py-2.5 font-semibold text-foreground">$20.75/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Why These Tools</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Calendly Standard ($12/user/mo) for Patient Scheduling</h3>
          <p className="text-muted mb-4">
            Calendly handles appointment booking with buffer times between appointments, reminder emails, and calendar sync. Standard gives unlimited event types and workflows. For healthcare, set up different event types for initial consultations, follow-ups, and telehealth sessions. Alternative: Acuity Scheduling (from Squarespace) offers intake forms and HIPAA compliance on their higher tiers.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">HubSpot CRM Free ($0) for Patient Relationships</h3>
          <p className="text-muted mb-4">
            Track patient contacts, appointment history, and communication logs. HubSpot CRM Free gives unlimited contacts, a deal pipeline (use for patient journey stages), and email tracking. Use this for non-PHI data only &mdash; demographics, appointment scheduling, and general communication. For HIPAA-compliant CRM, HubSpot requires Enterprise pricing.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Slack Pro ($8.75/user/mo) for Team Communication</h3>
          <p className="text-muted mb-4">
            Slack Pro gives unlimited message history and unlimited integrations, which matters for healthcare teams that need to search past conversations. Free limits you to 90-day history. For HIPAA-compliant messaging, Slack Enterprise Grid is required &mdash; but for general team coordination (non-PHI), Pro is sufficient. Alternative: Discord Free for teams comfortable with its interface.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Brevo Free ($0) for Patient Communication</h3>
          <p className="text-muted mb-4">
            Send appointment reminders, health tips newsletters, and practice updates. Brevo Free supports 100,000 contacts and 300 emails/day. Use for general communications only &mdash; not for transmitting PHI.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">HIPAA Compliance Guide</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">HIPAA-Eligible Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">BAA Available</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">HubSpot CRM</td>
                  <td className="px-4 py-2.5 text-muted">Enterprise only (custom pricing)</td>
                  <td className="px-4 py-2.5 text-muted">Yes (Enterprise)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Notion</td>
                  <td className="px-4 py-2.5 text-muted">Enterprise only (custom pricing)</td>
                  <td className="px-4 py-2.5 text-muted">Yes (Enterprise)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Slack</td>
                  <td className="px-4 py-2.5 text-muted">Enterprise Grid only (custom pricing)</td>
                  <td className="px-4 py-2.5 text-muted">Yes (Enterprise Grid)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Zoom</td>
                  <td className="px-4 py-2.5 text-muted">Business ($13.33/user/mo) and above</td>
                  <td className="px-4 py-2.5 text-muted">Yes (Business+)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Budget Tiers</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stack</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">$0 Starter</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot Free + Calendly Free + Notion Free + Slack Free + Brevo Free</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Solo Practitioner</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot Free + Calendly Standard ($12) + Notion Free + Slack Pro ($8.75) + Brevo Free</td>
                  <td className="px-4 py-2.5">$20.75/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Small Practice (5 staff)</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot Free + Calendly Standard ($60) + Notion Plus ($60) + Slack Pro ($43.75) + Brevo Free</td>
                  <td className="px-4 py-2.5">$163.75/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Can I use these tools for PHI?</h3>
          <p className="text-muted mb-4">
            Not on the plans listed here. HIPAA compliance requires enterprise-tier plans with signed BAAs. The tools above are recommended for non-PHI workflows: scheduling, general communication, marketing emails, and internal procedures. For clinical workflows involving PHI, use dedicated EHR/EMR software.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What about telehealth?</h3>
          <p className="text-muted mb-4">
            Zoom for Healthcare (Business plan at $13.33/user/mo and above) offers HIPAA compliance with a signed BAA. This can be added to the stack for telehealth consultations. Doxy.me also offers a free HIPAA-compliant telehealth platform.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Should I use a healthcare-specific CRM instead?</h3>
          <p className="text-muted mb-4">
            If you handle significant patient volume (100+ patients/month) or need PHI in your CRM, yes. Dedicated healthcare CRMs like Kareo, PatientPop, or DrChrono integrate with EHR systems. For small practices managing referrals and general patient relationships, HubSpot Free handles the non-clinical side well.
          </p>
        </div>

        <RelatedLinks
          tools={["calendly", "hubspot-crm", "slack", "notion", "brevo"]}
          comparisons={[]}
          guides={[
            "crm-for-service-businesses",
            "scheduling-tool-comparison",
            "remote-team-communication",
          ]}
        />
      </article>
    </>
  );
}
