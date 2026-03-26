import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Free Tier Erosion: Which Tools Are Quietly Removing Free Plans",
  description:
    "Mailchimp shrank free to 250 contacts. Slack added the 90-day limit. Close removed free entirely. Which free tiers are shrinking, which are stable, and which are actually growing.",
};

export default function FreeTierErosionTracker() {
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
              Free Tier Erosion Tracker
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Trend Analysis
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Free Tier Erosion: Which Tools Are Quietly Removing Free Plans
          </h1>
          <p className="text-lg text-muted">
            Free tiers are a customer acquisition strategy, not a permanent promise. When a SaaS company grows past a certain size, free users become a cost center. The pattern is predictable: launch with a generous free tier, grow the user base, then quietly shrink the free plan until it is functionally useless. Here is which tools have done this, which are stable, and which are bucking the trend.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">Free Tiers That Have Shrunk</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">Mailchimp: From 2,000 to 250 Contacts</h3>
          <p className="text-muted mb-4">
            Mailchimp&apos;s free tier once offered 2,000 contacts and 10,000 sends per month. Today: 250 contacts, 500 sends per month, 1 audience, limited templates, limited reporting. That is an 87.5% reduction in the contact limit. The cheapest paid plan (Essentials) starts at $13/month for 500 contacts. For anyone building an email list, Mailchimp Free is now a demo, not a tool.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Slack: The 90-Day Message Cutoff</h3>
          <p className="text-muted mb-4">
            Slack Free previously stored 10,000 messages (searchable forever). In 2022, Slack switched to a 90-day rolling window &mdash; messages older than 90 days are hidden. For a 10-person team posting 100 messages per day, that means losing all messages every quarter. The integration limit also dropped to 10 apps. Slack Pro at $8.75/user/month restores unlimited history.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Close: Free Tier Removed Entirely</h3>
          <p className="text-muted mb-4">
            Close previously offered a free tier. It no longer does. The cheapest plan is Solo at $19/month for a single user. Essentials starts at $49/seat. For teams that relied on Close&apos;s free CRM, the transition was abrupt.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">ActiveCampaign: Never Had a Free Tier</h3>
          <p className="text-muted mb-4">
            ActiveCampaign is notable for never offering a free plan. Starter begins at $15/month for 1,000 contacts. Plus is $49/month. This is honest pricing &mdash; but worth noting against competitors who use free tiers as acquisition tools.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Free Tiers That Remain Stable</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">HubSpot Free CRM: Still Unlimited Contacts</h3>
          <p className="text-muted mb-4">
            HubSpot Free still offers unlimited contacts, deal tracking, email logging, and meeting scheduling. It has remained largely unchanged because HubSpot uses the free CRM as the entry point to its paid ecosystem ($20/seat Starter, $890/month Professional). The free tier is the funnel top &mdash; expect it to remain generous.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Notion Free: Still Unlimited Pages</h3>
          <p className="text-muted mb-4">
            Notion Free still offers unlimited pages, unlimited blocks, and 10 guest collaborators. The 7-day version history and 5MB upload limits have not changed. Notion monetizes through team adoption (Plus at $12/user), so the individual free tier is likely to remain generous.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Discord Free: Still Unlimited Everything</h3>
          <p className="text-muted mb-4">
            Discord Free still offers unlimited message history, unlimited channels, voice/video for 25 people, and 25MB file uploads. Discord monetizes through Nitro subscriptions ($2.99&ndash;$9.99/month) and server boosts, not through restricting the free tier. This model is stable.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Zapier Free: Holding at 100 Tasks</h3>
          <p className="text-muted mb-4">
            Zapier Free still offers 100 tasks per month with unlimited Zaps (two-step only). This limit has been stable. The 100-task cap is low enough that most users outgrow it quickly (which is the point), but it has not gotten lower.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Free Tiers That Are Growing</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">Kit (ConvertKit): Expanded to 10,000 Subscribers</h3>
          <p className="text-muted mb-4">
            Kit&apos;s free tier (Newsletter plan) increased from 1,000 to 10,000 subscribers &mdash; a 10x expansion. This is the opposite of erosion. Kit is using the generous free tier to compete with beehiiv and Substack for newsletter creators. At 10,000 free subscribers, Kit has the largest free tier in the email/newsletter category.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">beehiiv Launch: Free with Monetization Tools</h3>
          <p className="text-muted mb-4">
            beehiiv&apos;s free tier (Launch) gives 2,500 subscribers with custom domains, website builder, and basic analytics. As a relatively new platform, beehiiv is still in growth mode and investing in the free tier to acquire users. Whether this remains as generous as the platform matures is an open question.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Brevo Free: 100,000 Contacts</h3>
          <p className="text-muted mb-4">
            Brevo Free stores up to 100,000 contacts (limited to 300 emails/day). While the daily send limit is restrictive, the contact storage is by far the most generous in the email marketing category. This is a strategic differentiator against Mailchimp&apos;s contact-based pricing.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">How to Protect Yourself from Free Tier Erosion</h2>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li><strong className="text-foreground">Export your data regularly.</strong> Do not wait for a pricing change to discover your data is trapped.</li>
            <li><strong className="text-foreground">Prefer tools with open-source alternatives.</strong> n8n, Ghost, Cal.com can be self-hosted if the vendor changes pricing.</li>
            <li><strong className="text-foreground">Budget for paid plans.</strong> If a free tool is critical to your business, budget for its cheapest paid plan as insurance.</li>
            <li><strong className="text-foreground">Track pricing changes.</strong> Vendors announce free tier changes in blog posts, not notification emails. Check pricing pages quarterly.</li>
          </ul>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which SaaS free tiers are most at risk of shrinking?</h3>
                <p>Tools from publicly traded companies under margin pressure. Mailchimp (Intuit), Slack (Salesforce), and any tool that recently IPO&apos;d or was acquired. Private companies in growth mode (beehiiv, Cal.com) are more likely to maintain or expand free tiers.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why do SaaS companies offer free tiers at all?</h3>
                <p>Customer acquisition. Free users become paid users at a 2&ndash;5% conversion rate. The free tier also creates word-of-mouth marketing. Once a company has enough paid users, the free tier becomes less strategically important and gets cut.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Will HubSpot Free CRM ever get restricted?</h3>
                <p>Unlikely to lose unlimited contacts, as this is HubSpot&apos;s primary acquisition funnel. More likely: features that are currently free (basic reporting, email templates) may become Starter-only. The unlimited contact promise is too central to HubSpot&apos;s brand to change.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "slack", "hubspot-crm", "convertkit", "beehiiv", "brevo"]}
            comparisons={["mailchimp-vs-convertkit", "slack-vs-discord"]}
            guides={[
              "saas-pricing-trends-2026",
              "run-a-business-on-zero-saas-budget",
              "when-to-stop-using-free-tools",
            ]}
          />
        </div>
      </article>
    </>
  );
}
