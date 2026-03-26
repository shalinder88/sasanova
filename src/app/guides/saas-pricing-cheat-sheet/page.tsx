import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Pricing Cheat Sheet: Every Tool's Starting Price",
  description:
    "One massive table: all 148 tools, cheapest paid plan, free tier yes/no, and billing model. The definitive SaaS pricing quick reference for 2026.",
};

export default function SaasPricingCheatSheetGuide() {
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
            <span className="text-foreground font-medium truncate">SaaS Pricing Cheat Sheet</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Quick Reference
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          SaaS Pricing Cheat Sheet: Every Tool&apos;s Starting Price
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 8 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            All 148 tools we track at Sasanova, with the cheapest paid plan price, free tier availability,
            and billing model. Bookmark this page. Prices verified against vendor sites as of March 2026.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Email Marketing &amp; Newsletter Platforms</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Mailchimp</td><td className="px-3 py-2">Yes (250 contacts)</td><td className="px-3 py-2">$13/mo (Essentials)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Kit (ConvertKit)</td><td className="px-3 py-2">Yes (10K subs)</td><td className="px-3 py-2">$39/mo (Creator)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Brevo</td><td className="px-3 py-2">Yes (100K contacts)</td><td className="px-3 py-2">$9/mo (Starter)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">ActiveCampaign</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$15/mo (Starter)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">beehiiv</td><td className="px-3 py-2">Yes (2,500 subs)</td><td className="px-3 py-2">$49/mo (Scale)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Substack</td><td className="px-3 py-2">Yes (unlimited)</td><td className="px-3 py-2">10% of paid sub revenue</td><td className="px-3 py-2">Revenue share</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Ghost</td><td className="px-3 py-2">No (self-host is free)</td><td className="px-3 py-2">$18/mo (Starter)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Buttondown</td><td className="px-3 py-2">Yes (100 subs)</td><td className="px-3 py-2">$9/mo (Basic)</td><td className="px-3 py-2">Flat</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">CRM Software</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">HubSpot CRM</td><td className="px-3 py-2">Yes (unlimited contacts)</td><td className="px-3 py-2">$20/seat/mo (Starter)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Pipedrive</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$14/seat/mo (Lite)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Salesforce</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$25/seat/mo (Starter Suite)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Zoho CRM</td><td className="px-3 py-2">Yes (3 users)</td><td className="px-3 py-2">$20/seat/mo (Standard)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Close</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$19/seat/mo (Solo)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Freshsales</td><td className="px-3 py-2">Yes (3 users)</td><td className="px-3 py-2">$11/seat/mo (Growth)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Attio</td><td className="px-3 py-2">Yes (3 seats)</td><td className="px-3 py-2">$34/seat/mo (Plus)</td><td className="px-3 py-2">Per seat</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Automation Tools</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Zapier</td><td className="px-3 py-2">Yes (100 tasks/mo)</td><td className="px-3 py-2">$29.99/mo (Professional)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Make</td><td className="px-3 py-2">Yes (1K ops/mo)</td><td className="px-3 py-2">$10.59/mo (Core)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">n8n</td><td className="px-3 py-2">Yes (self-hosted unlimited)</td><td className="px-3 py-2">$20/mo (Starter cloud)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Pipedream</td><td className="px-3 py-2">Yes (100 credits/mo)</td><td className="px-3 py-2">$29/mo (Basic)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Tray.io</td><td className="px-3 py-2">No</td><td className="px-3 py-2">Custom (contact sales)</td><td className="px-3 py-2">Custom</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Workato</td><td className="px-3 py-2">No</td><td className="px-3 py-2">Custom (contact sales)</td><td className="px-3 py-2">Custom</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Bardeen</td><td className="px-3 py-2">Yes (100 credits/mo)</td><td className="px-3 py-2">$99/mo (Starter)</td><td className="px-3 py-2">Flat</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Project Management &amp; Task Management</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Notion</td><td className="px-3 py-2">Yes (unlimited pages)</td><td className="px-3 py-2">$12/seat/mo (Plus)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">ClickUp</td><td className="px-3 py-2">Yes (100MB storage)</td><td className="px-3 py-2">$10/seat/mo (Unlimited)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Asana</td><td className="px-3 py-2">Yes (2 users)</td><td className="px-3 py-2">$13.49/seat/mo (Starter)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Monday.com</td><td className="px-3 py-2">Yes (2 seats)</td><td className="px-3 py-2">$12/seat/mo (Basic)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Basecamp</td><td className="px-3 py-2">Yes (personal)</td><td className="px-3 py-2">$15/user/mo (Basecamp)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Trello</td><td className="px-3 py-2">Yes (unlimited boards)</td><td className="px-3 py-2">$6/seat/mo (Standard)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Jira</td><td className="px-3 py-2">Yes (10 users)</td><td className="px-3 py-2">$8.15/seat/mo (Standard)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Linear</td><td className="px-3 py-2">Yes (250 issues)</td><td className="px-3 py-2">$8/seat/mo (Standard)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Todoist</td><td className="px-3 py-2">Yes (5 projects)</td><td className="px-3 py-2">$7/mo (Pro)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">TickTick</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$3.99/mo (Premium)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Any.do</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$8/mo (Premium)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Things 3</td><td className="px-3 py-2">No</td><td className="px-3 py-2">One-time purchase</td><td className="px-3 py-2">One-time</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">AI Writing &amp; Assistants</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">ChatGPT</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$8/mo (Go)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Claude</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$20/mo (Pro)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Perplexity</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$20/mo (Pro)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Jasper</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$49/mo (Creator)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Copy.ai</td><td className="px-3 py-2">Yes (2K words)</td><td className="px-3 py-2">$49/mo (Starter)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Writesonic</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$20/mo (Individual)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Grammarly</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$30/mo (Pro)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Lex</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$18/mo (Pro)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Sudowrite</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$19/mo (Hobby)</td><td className="px-3 py-2">Flat</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Scheduling, Forms, Communication &amp; Other Categories</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Calendly</td><td className="px-3 py-2">Scheduling</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$12/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Cal.com</td><td className="px-3 py-2">Scheduling</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$15/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Acuity Scheduling</td><td className="px-3 py-2">Scheduling</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$16/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">SavvyCal</td><td className="px-3 py-2">Scheduling</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$12/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Reclaim.ai</td><td className="px-3 py-2">Scheduling</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$8/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Typeform</td><td className="px-3 py-2">Forms</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$39/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Tally</td><td className="px-3 py-2">Forms</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$29/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Jotform</td><td className="px-3 py-2">Forms</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$39/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Fillout</td><td className="px-3 py-2">Forms</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$15/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Slack</td><td className="px-3 py-2">Communication</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$8.75/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Discord</td><td className="px-3 py-2">Communication</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$2.99/mo (Nitro Basic)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Microsoft Teams</td><td className="px-3 py-2">Communication</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$4/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Loom</td><td className="px-3 py-2">Communication</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$18/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Crisp</td><td className="px-3 py-2">Communication</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$45/mo</td><td className="px-3 py-2">Flat</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Design, Analytics, Developer Tools &amp; More</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Figma</td><td className="px-3 py-2">Design</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$15/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Canva</td><td className="px-3 py-2">Design</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$15/mo (Pro)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Framer</td><td className="px-3 py-2">Design</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$15/mo (Basic)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Webflow</td><td className="px-3 py-2">Design</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$18/mo (Basic)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Miro</td><td className="px-3 py-2">Design</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$10/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Hotjar</td><td className="px-3 py-2">Analytics</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$49/mo (Growth)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Plausible</td><td className="px-3 py-2">Analytics</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$9/mo (Starter)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">PostHog</td><td className="px-3 py-2">Analytics</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Usage-based</td><td className="px-3 py-2">Usage</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Mixpanel</td><td className="px-3 py-2">Analytics</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">Custom (Growth)</td><td className="px-3 py-2">Custom</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Amplitude</td><td className="px-3 py-2">Analytics</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$49/mo (Plus)</td><td className="px-3 py-2">Usage</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Vercel</td><td className="px-3 py-2">Developer</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$20/seat/mo (Pro)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Netlify</td><td className="px-3 py-2">Developer</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$9/mo (Personal)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Supabase</td><td className="px-3 py-2">Developer</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$25/mo (Pro)</td><td className="px-3 py-2">Usage</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">PlanetScale</td><td className="px-3 py-2">Developer</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$5/mo (Scaler)</td><td className="px-3 py-2">Usage</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Railway</td><td className="px-3 py-2">Developer</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$5/mo (Hobby)</td><td className="px-3 py-2">Usage</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">E-commerce, Website Builders, Finance, HR &amp; More</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Shopify</td><td className="px-3 py-2">E-commerce</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$39/mo (Basic)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Gumroad</td><td className="px-3 py-2">E-commerce</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">10% fee on sales</td><td className="px-3 py-2">Revenue share</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Lemon Squeezy</td><td className="px-3 py-2">E-commerce</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$24/mo (Growth)</td><td className="px-3 py-2">Usage</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Squarespace</td><td className="px-3 py-2">Website</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$25/mo (Basic)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Wix</td><td className="px-3 py-2">Website</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$17/mo (Light)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">WordPress.com</td><td className="px-3 py-2">Website</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$4/mo (Personal)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Carrd</td><td className="px-3 py-2">Website</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$0.75/mo (Pro Lite)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">QuickBooks Online</td><td className="px-3 py-2">Finance</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$38/mo (Simple Start)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Xero</td><td className="px-3 py-2">Finance</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$29/mo (Starter)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">FreshBooks</td><td className="px-3 py-2">Finance</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$23/mo (Lite)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Wave</td><td className="px-3 py-2">Finance</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$16/mo (Pro)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Gusto</td><td className="px-3 py-2">HR</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$49/mo + $6/person</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Rippling</td><td className="px-3 py-2">HR</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$8/seat/mo (Platform)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Deel</td><td className="px-3 py-2">HR</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$49/contractor/mo</td><td className="px-3 py-2">Per seat</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Help Desk, Meeting, Docs, Sales Outreach &amp; More</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Zendesk</td><td className="px-3 py-2">Help Desk</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$25/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Intercom</td><td className="px-3 py-2">Help Desk</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$39/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Freshdesk</td><td className="px-3 py-2">Help Desk</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$15/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Help Scout</td><td className="px-3 py-2">Help Desk</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$55/mo (Standard)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Otter.ai</td><td className="px-3 py-2">Meeting</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$17/mo (Pro)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Fireflies.ai</td><td className="px-3 py-2">Meeting</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$18/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Fathom</td><td className="px-3 py-2">Meeting</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$20/mo (Premium)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Grain</td><td className="px-3 py-2">Meeting</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$15/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">tl;dv</td><td className="px-3 py-2">Meeting</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$18/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Krisp</td><td className="px-3 py-2">Meeting</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$16/mo (Pro)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Obsidian</td><td className="px-3 py-2">Docs</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$4/mo (Sync)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Coda</td><td className="px-3 py-2">Docs</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$12/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Slite</td><td className="px-3 py-2">Docs</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$8/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Apollo.io</td><td className="px-3 py-2">Sales Outreach</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$59/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Lemlist</td><td className="px-3 py-2">Sales Outreach</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$79/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Instantly</td><td className="px-3 py-2">Sales Outreach</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$37/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Woodpecker</td><td className="px-3 py-2">Sales Outreach</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$29/mo</td><td className="px-3 py-2">Per seat</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Webinars, Landing Pages, SEO, Proposals &amp; More</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Cheapest Paid</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-3 py-2 font-medium text-foreground">Zoom</td><td className="px-3 py-2">Webinar</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$13.33/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Demio</td><td className="px-3 py-2">Webinar</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$59/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Livestorm</td><td className="px-3 py-2">Webinar</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$99/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Unbounce</td><td className="px-3 py-2">Landing Pages</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$99/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Leadpages</td><td className="px-3 py-2">Landing Pages</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$49/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">ClickFunnels</td><td className="px-3 py-2">Landing Pages</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$97/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Swipe Pages</td><td className="px-3 py-2">Landing Pages</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$39/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Ahrefs</td><td className="px-3 py-2">SEO</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$129/mo (Lite)</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Semrush</td><td className="px-3 py-2">SEO</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$139.95/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Mangools</td><td className="px-3 py-2">SEO</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$29.90/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">SE Ranking</td><td className="px-3 py-2">SEO</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$129/mo (Core)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Surfer SEO</td><td className="px-3 py-2">SEO</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$99/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">PandaDoc</td><td className="px-3 py-2">Proposals</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$35/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Proposify</td><td className="px-3 py-2">Proposals</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$49/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Better Proposals</td><td className="px-3 py-2">Proposals</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$19/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">DocuSign</td><td className="px-3 py-2">Proposals</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$15/mo (Personal)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Buffer</td><td className="px-3 py-2">Social Media</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$6/channel/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Hootsuite</td><td className="px-3 py-2">Social Media</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$149/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Later</td><td className="px-3 py-2">Social Media</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$25/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Sprout Social</td><td className="px-3 py-2">Social Media</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$249/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Dropbox</td><td className="px-3 py-2">Cloud Storage</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$11.99/mo (Plus)</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Google Workspace</td><td className="px-3 py-2">Cloud Storage</td><td className="px-3 py-2">No</td><td className="px-3 py-2">$8.40/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Box</td><td className="px-3 py-2">Cloud Storage</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$5/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Descript</td><td className="px-3 py-2">Video</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$24/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Riverside</td><td className="px-3 py-2">Video</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$19/mo</td><td className="px-3 py-2">Flat</td></tr>
                  <tr><td className="px-3 py-2 font-medium text-foreground">Vimeo</td><td className="px-3 py-2">Video</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">$12/seat/mo</td><td className="px-3 py-2">Per seat</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              All prices are monthly rates as of March 2026. Annual billing typically saves 10&ndash;30%.
              &ldquo;Custom&rdquo; means contact sales for pricing. Prices verified against vendor pricing pages.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How often are these prices updated?</h3>
                <p>We verify prices against vendor pricing pages at least monthly. Last full verification: March 2026. SaaS prices change frequently, so always confirm on the vendor&apos;s site before purchasing.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s the cheapest tool on this list?</h3>
                <p>Carrd at $0.75/month (Pro Lite annual billing) for a simple website builder. For productivity tools, TickTick at $3.99/month. For team tools, Discord Nitro Basic at $2.99/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which category has the most free tiers?</h3>
                <p>Project management and task management tools have the most generous free tiers. Notion, ClickUp, Asana, Trello, Jira, and Linear all offer usable free plans. Email marketing is next, with Kit, beehiiv, Brevo, and Mailchimp offering free tiers.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={[]}
            comparisons={[]}
            guides={[
              "saas-free-tier-cheat-sheet",
              "crm-pricing-cheat-sheet",
              "email-pricing-cheat-sheet",
              "automation-pricing-cheat-sheet",
            ]}
          />
        </div>
      </div>
    </>
  );
}
