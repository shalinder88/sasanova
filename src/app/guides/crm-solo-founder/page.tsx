import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "The Best CRM Setup for a Solo Founder Who Hates CRMs",
  description:
    "Most CRMs are built for sales teams, not solo operators. Here's what actually works — Folk for relationship builders, Pipedrive for deal closers — with setup in under 30 minutes.",
};

export default function CRMSoloFounderGuide() {
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
            <span className="text-foreground font-medium truncate">CRM for Solo Founders</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          CRM
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          The Best CRM Setup for a Solo Founder Who Hates CRMs
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 12 min read
        </p>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Tested free tiers and onboarding flows"
          sourceCount={3}
        />

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted mt-8">
          <p>
            You&apos;ve tried a CRM before. You signed up, imported some contacts, used it
            for two weeks, then went back to your inbox and a spreadsheet. I know because
            I&apos;ve done this four times. The problem isn&apos;t discipline. The problem
            is that most CRMs are designed for sales teams with managers, quotas, and
            dedicated ops people. Solo founders need something fundamentally different.
          </p>
          <p>
            After testing eleven CRMs over the past year, I&apos;ve landed on two
            recommendations. Which one you pick depends on how you sell.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Two-Option Decision</h2>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3">
              <p className="mb-3">
                <strong className="text-foreground">If you sell through relationships</strong> (consulting,
                services, partnerships, freelance) &rarr; <strong className="text-foreground">Folk CRM</strong>
              </p>
              <p>
                <strong className="text-foreground">If you sell through deals</strong> (SaaS, products,
                defined sales process with stages) &rarr; <strong className="text-foreground">Pipedrive</strong>
              </p>
            </div>
            <p className="mt-3">
              That&apos;s the whole decision. Everything else is configuration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Folk CRM: For Relationship Builders</h2>
            <p>
              Folk feels like a contact manager that grew up, not a sales tool that was
              simplified. It organizes people into groups (not pipelines), lets you tag and
              filter by any custom field, and has a Chrome extension that imports contacts from
              LinkedIn, Twitter, and Gmail with one click.
            </p>
            <p>
              <strong className="text-foreground">Pricing:</strong> Free for up to 200 contacts.
              Standard plan is $20/user/month (billed annually, or $25 monthly) for unlimited
              contacts, email sequences, and enrichment credits. Premium is $40/user/month and
              adds reporting and priority support.
            </p>
            <p>
              <strong className="text-foreground">Why it works for solo founders:</strong> Folk
              doesn&apos;t force you into a pipeline. If your &quot;sales process&quot; is
              &quot;meet interesting people, stay in touch, occasionally do business together,&quot;
              Folk matches how you actually think about relationships. You create groups like
              &quot;Potential Clients,&quot; &quot;Conference Contacts,&quot; &quot;Investors,&quot;
              and &quot;Friends in Industry.&quot; Each contact can belong to multiple groups.
            </p>
            <p>
              <strong className="text-foreground">The killer feature:</strong> Folk&apos;s
              email sequences. You can send personalized follow-up sequences directly from the
              CRM &mdash; no ConvertKit or Mailchimp needed for relationship nurturing. The
              Standard plan includes this. It&apos;s not as powerful as a dedicated email tool,
              but for &quot;check in every 3 weeks with warm contacts,&quot; it&apos;s plenty.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Pipedrive: For Deal Closers</h2>
            <p>
              Pipedrive is the CRM you pick when you have a defined sales process. Lead comes
              in, gets qualified, enters negotiation, signs or doesn&apos;t. If your revenue
              comes from closing deals rather than maintaining relationships, Pipedrive&apos;s
              visual pipeline is the right mental model.
            </p>
            <p>
              <strong className="text-foreground">Pricing:</strong> Essential is $14/user/month.
              Advanced is $29/user/month and adds email automation, workflow automations, and
              a scheduling tool. Professional is $49/user/month with revenue forecasting,
              custom reporting, and document management. Power is $64/user/month. Enterprise
              is $99/user/month.
            </p>
            <p>
              <strong className="text-foreground">For a solo founder, Essential ($14) or
              Advanced ($29) is the right plan.</strong> Essential gives you the pipeline view,
              deal tracking, activity management, and a mobile app. Advanced adds email open
              tracking, workflow automations (like auto-creating a follow-up activity when a
              deal moves stages), and a built-in meeting scheduler.
            </p>
            <p>
              <strong className="text-foreground">The killer feature:</strong> Activity-based
              selling. Pipedrive nags you when a deal has no scheduled activity. This sounds
              annoying. It&apos;s actually the single most useful feature for solo founders
              who let deals go cold because they got busy with delivery work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Cost Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Solo Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Folk</td>
                    <td className="px-4 py-2.5">200 contacts</td>
                    <td className="px-4 py-2.5">$20&ndash;25/mo</td>
                    <td className="px-4 py-2.5">Relationship-driven sales, networking</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5">14-day trial only</td>
                    <td className="px-4 py-2.5">$14&ndash;29/mo</td>
                    <td className="px-4 py-2.5">Deal-based sales, defined pipeline</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5">Unlimited contacts (limited features)</td>
                    <td className="px-4 py-2.5">$0&ndash;20/mo</td>
                    <td className="px-4 py-2.5">Marketing-heavy teams, inbound leads</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5">No free tier</td>
                    <td className="px-4 py-2.5">$25&ndash;80/mo</td>
                    <td className="px-4 py-2.5">Enterprise, complex sales orgs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Why NOT Salesforce</h2>
            <p>
              Salesforce Essentials starts at $25/user/month and goes up to $80/user/month
              for Professional. It requires an implementation consultant for anything beyond
              basic setup. The average Salesforce deployment takes 3&ndash;6 months for a
              mid-size company. For a solo founder, you&apos;ll spend more time configuring
              Salesforce than actually selling.
            </p>
            <p>
              Salesforce was built for enterprises with 50+ person sales teams, dedicated
              admins, and six-figure implementation budgets. Using it as a solo founder is
              like renting a warehouse to store a bicycle. Technically possible. Financially absurd.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Why NOT HubSpot Free</h2>
            <p>
              HubSpot Free CRM is genuinely free with unlimited contacts. That&apos;s
              appealing. But the free tier is designed to get you onto paid plans, and the
              limitations are strategically placed to make that happen.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Email templates: capped at 5 on free. You&apos;ll hit this in week one.</li>
              <li>Email tracking: 200 notifications/month on free. A busy founder exhausts this quickly.</li>
              <li>No email sequences on free. You need Starter ($20/month) for automated follow-ups.</li>
              <li>HubSpot branding on all forms and live chat on free.</li>
              <li>No custom reporting. The free dashboards show what HubSpot wants you to see.</li>
            </ul>
            <p className="mt-2">
              The real issue is the upgrade path. HubSpot Starter is $20/user/month &mdash; fine.
              But the jump to Professional is $800/month for Marketing Hub or $90/user/month for
              Sales Hub. There&apos;s a massive gap between Starter and Professional with no
              intermediate option. You either stay constrained or make a 10x cost jump.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Spreadsheet-to-CRM Migration</h2>
            <p>
              If you&apos;re coming from a spreadsheet (and most solo founders are), here&apos;s
              what to bring and what to leave behind.
            </p>
            <h3 className="text-base font-bold text-foreground mt-4 mb-2">Bring These Fields</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Name and email (obviously)</li>
              <li>Company name</li>
              <li>Last contact date</li>
              <li>Deal value (if applicable)</li>
              <li>Source (how you met them)</li>
              <li>One &quot;notes&quot; field with context about the relationship</li>
            </ul>
            <h3 className="text-base font-bold text-foreground mt-4 mb-2">Leave These Behind</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Phone numbers you&apos;ve never called</li>
              <li>Addresses you&apos;ll never mail to</li>
              <li>Contacts from 2+ years ago with no recent interaction</li>
              <li>Duplicate entries (deduplicate before importing)</li>
              <li>Custom fields you created but never actually used</li>
            </ul>
            <p className="mt-3">
              Both Folk and Pipedrive accept CSV imports. Export your spreadsheet as CSV,
              map the columns to CRM fields during import, and you&apos;re done. The whole
              migration takes 15&ndash;20 minutes for a list under 500 contacts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Setup in Under 30 Minutes</h2>
            <p>
              Here&apos;s the exact setup sequence. This works for both Folk and Pipedrive.
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 mt-2">
              <li><strong className="text-foreground">Create your account</strong> (2 minutes). Use your work email. Connect Google or Microsoft calendar immediately &mdash; both CRMs will prompt you.</li>
              <li><strong className="text-foreground">Connect your email</strong> (3 minutes). This enables email tracking and logging. Both tools support Gmail and Outlook natively.</li>
              <li><strong className="text-foreground">Set up 3&ndash;5 groups (Folk) or pipeline stages (Pipedrive)</strong> (5 minutes). Keep it simple. Folk: &quot;Active Clients,&quot; &quot;Prospects,&quot; &quot;Network,&quot; &quot;Past Clients.&quot; Pipedrive: &quot;New Lead,&quot; &quot;Contacted,&quot; &quot;Meeting Scheduled,&quot; &quot;Proposal Sent,&quot; &quot;Won/Lost.&quot;</li>
              <li><strong className="text-foreground">Import your contacts</strong> (5 minutes). CSV import. Map the fields. Done.</li>
              <li><strong className="text-foreground">Install the browser extension</strong> (2 minutes). Folk has a Chrome extension for LinkedIn and Gmail. Pipedrive has one for Gmail.</li>
              <li><strong className="text-foreground">Set up one automation</strong> (10 minutes). Folk: a follow-up reminder sequence for new prospects. Pipedrive: an activity auto-created when a deal enters a new stage.</li>
              <li><strong className="text-foreground">Add your 5 most important contacts manually</strong> (3 minutes). Don&apos;t just import. Manually enter your top 5 prospects with full context notes. This builds the muscle memory of using the CRM.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Use This Guide</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Sales teams with 5+ reps</strong> &mdash; you need
                territory management, lead routing, and manager dashboards. Look at HubSpot Sales Hub
                Professional or Salesforce.</li>
              <li><strong className="text-foreground">E-commerce businesses</strong> &mdash; your
                &quot;CRM&quot; is your Shopify/WooCommerce customer database plus Klaviyo. A
                traditional CRM adds friction, not value.</li>
              <li><strong className="text-foreground">People who actually like their current spreadsheet</strong> &mdash;
                if your spreadsheet works and you have fewer than 30 active contacts, a CRM is
                overhead you don&apos;t need yet. Come back when you start losing track of follow-ups.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-foreground">Creating too many custom fields.</strong> Start
                with the defaults. Add custom fields only when you find yourself repeatedly
                needing information that isn&apos;t captured. Most solo founders need 2&ndash;3
                custom fields, not 15.
              </li>
              <li>
                <strong className="text-foreground">Importing every contact you&apos;ve ever met.</strong> A
                CRM with 2,000 stale contacts is worse than a CRM with 200 active ones. Import
                only people you&apos;ve interacted with in the last 12 months.
              </li>
              <li>
                <strong className="text-foreground">Skipping the email connection.</strong> If
                emails don&apos;t automatically log to the CRM, you won&apos;t use the CRM.
                The email integration is what makes it sticky. Set this up on day one.
              </li>
              <li>
                <strong className="text-foreground">Picking a CRM based on features you might need &quot;someday.&quot;</strong> You&apos;re
                not going to need lead scoring, territory management, or revenue forecasting as a
                solo founder. Pick the tool that nails your workflow today. You can migrate later
                &mdash; both Folk and Pipedrive export data cleanly.
              </li>
              <li>
                <strong className="text-foreground">Not using the mobile app.</strong> Half your
                CRM updates will happen after a coffee meeting or a phone call. If you don&apos;t
                have the mobile app installed, you&apos;ll forget to log the interaction by the
                time you&apos;re back at your desk. Both Folk and Pipedrive have solid mobile
                apps.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Bottom Line</h2>
            <p>
              The best CRM is the one you actually use. For most solo founders, that means
              something lightweight, fast to set up, and cheap enough that you don&apos;t
              resent paying for it. Folk at $20/month or Pipedrive at $14/month fits that
              bar. Salesforce and HubSpot Professional do not. Start small, build the habit,
              and upgrade only when you have a specific pain point that your current tool
              can&apos;t solve.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best CRM for a solo founder?</h3>
                <p>Folk ($20/month) is the best CRM for relationship-focused solo founders who manage contacts across networking, partnerships, and sales. Pipedrive ($14/month) is better for founders who run a structured sales pipeline with defined deal stages. Both set up in under 30 minutes.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot free CRM good enough for solo founders?</h3>
                <p>HubSpot&apos;s free CRM is functional but adds friction for solo operators. It&apos;s designed to upsell you into the paid marketing and sales hubs. For pure contact management, Folk or even a well-organized spreadsheet is faster and less distracting. HubSpot free makes more sense if you plan to scale into a team.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I even need a CRM as a solo founder?</h3>
                <p>If you track fewer than 50 active contacts, a spreadsheet or Notion database works fine. Once you regularly lose track of follow-ups, miss warm leads, or forget who introduced whom, a lightweight CRM pays for itself. The trigger is missed opportunities, not company size.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["pipedrive", "hubspot-crm", "folk-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive"]}
            guides={["best-crm-freelancers-consultants", "migrate-spreadsheet-to-crm"]}
          />
        </div>
      </div>
    </>
  );
}
