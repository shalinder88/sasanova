import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Content Team Stack for 3-5 People Under $200/Month",
  description:
    "The content team stack: Mangools Entry ($29.90/mo), Grammarly Free + ChatGPT Plus ($20/mo), Canva Pro ($15/mo), Notion Plus ($12/user x 3 = $36), beehiiv Scale ($49/mo), Buffer Free. Total: $149.90/mo for 3 people.",
  openGraph: {
    title: "Content Team Stack for 3-5 People Under $200/Month",
    description:
      "SEO, writing, design, project management, publishing, and social for a content team under $200/month. Every price verified.",
  },
};

const stackTools = [
  {
    category: "SEO & Research",
    tool: "Mangools Entry",
    slug: "mangools",
    price: "$29.90/mo",
    annualPrice: "$19.99/mo ($239.88/yr)",
    seats: "1 seat",
    description: "KWFinder for keyword research, SERPChecker for SERP analysis, SERPWatcher for rank tracking, LinkMiner for backlinks, and SiteProfiler for domain overview. 100 keyword lookups/day, 200 keyword suggestions, 25 SERP lookups.",
    alternative: "Ahrefs Starter ($29/mo) if you need backlink analysis. Semrush Pro ($139.95/mo) if budget allows for the full enterprise suite.",
    toolPage: "/tools/mangools",
  },
  {
    category: "Writing & Editing",
    tool: "Grammarly Free + ChatGPT Plus",
    slug: "grammarly",
    price: "$20/mo total",
    annualPrice: "$20/mo (ChatGPT Plus has no annual discount)",
    seats: "Shared accounts",
    description: "Grammarly Free gives every team member grammar checking, tone detection, and 100 AI prompts/month. ChatGPT Plus ($20/mo) adds GPT-4o for drafting, outlining, and research. One ChatGPT Plus account shared for the team. Grammarly Pro ($30/mo, or $12/mo annual) upgrades to full rewrites and 2,000 AI prompts if needed.",
    alternative: "Claude Pro ($20/mo) instead of ChatGPT Plus if your team prefers longer-form writing assistance. Jasper ($49/mo) for marketing-specific AI content.",
    toolPage: "/tools/grammarly",
  },
  {
    category: "Design",
    tool: "Canva Pro",
    slug: "canva",
    price: "$15/mo",
    annualPrice: "$10/mo ($120/yr)",
    seats: "1 seat (Teams: $10/seat/mo, min 3)",
    description: "140M+ premium assets, Brand Kit, Magic Studio AI (500 credits/mo), background remover, and 1TB storage. One Pro account is enough if one person handles design. For 3+ designers, Canva Teams ($10/seat/mo, min 3 users = $30/mo) adds approval workflows.",
    alternative: "Canva Free (2M+ templates, 5GB storage) if your design needs are basic. Figma (free for 3 files) for UI/UX work.",
    toolPage: "/tools/canva",
  },
  {
    category: "Project Management & Docs",
    tool: "Notion Plus (3 seats)",
    slug: "notion",
    price: "$36/mo (3 x $12/user)",
    annualPrice: "$30/mo (3 x $10/user)",
    seats: "3 seats",
    description: "Content calendar, editorial workflows, style guides, and content briefs all in one workspace. Unlimited file uploads, 30-day page history, and custom automations. Databases power your content pipeline from idea to published.",
    alternative: "ClickUp Unlimited ($10/seat/mo) if your team prefers task-first project management. Notion Free (unlimited pages, 7-day history) if 3 team members can work within guest limits.",
    toolPage: "/tools/notion",
  },
  {
    category: "Publishing & Newsletter",
    tool: "beehiiv Scale",
    slug: "beehiiv",
    price: "$49/mo",
    annualPrice: "$43/mo ($516/yr)",
    seats: "Unlimited",
    description: "Unlimited subscribers, unlimited sends, referral program, ad network, A/B testing, and paid subscriptions. Publish your newsletter and monetize your content from one platform. Custom domain included.",
    alternative: "Kit Creator ($39/mo) if you need better automation sequences. Mailchimp Standard ($20/mo at 500 contacts) if you need e-commerce integrations.",
    toolPage: "/tools/beehiiv",
  },
  {
    category: "Social Media",
    tool: "Buffer Free",
    slug: "buffer",
    price: "$0/mo",
    annualPrice: "$0/yr",
    seats: "1 user",
    description: "3 channels, 10 scheduled posts per channel, AI assistant for content creation. Enough for a content team that publishes 2-3 social posts per day across 3 platforms. Upgrade to Essentials ($6/channel/mo) when you need unlimited posts and 30-day analytics.",
    alternative: "Buffer Essentials ($6/channel/mo) for unlimited posts. Hootsuite Professional ($99/mo) for advanced analytics and social listening at scale.",
    toolPage: "/tools/buffer",
  },
];

export default function ContentTeamStack() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Content Team Stack</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Real-World Stack
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Content Team Stack for 3-5 People Under $200/Month
          </h1>
          <p className="text-lg text-muted">
            A content team needs six things: SEO research, writing tools, design, project management, a publishing platform, and social distribution. Here&apos;s the exact stack for a 3-person team at $149.90/month &mdash; with room to grow to 5 people for under $200.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="All pricing verified against vendor pages. Per-seat math calculated at monthly billing."
          sourceCount={6}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Summary */}
          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              3-person team: $149.90/mo. 5-person team: $173.90/mo.
            </p>
            <p className="text-sm text-muted">
              Mangools Entry ($29.90) + Grammarly Free + ChatGPT Plus ($20) + Canva Pro ($15) + Notion Plus 3 seats ($36) + beehiiv Scale ($49) + Buffer Free ($0) = $149.90/mo. Adding 2 Notion seats ($24) brings it to $173.90/mo.
            </p>
          </div>

          {/* Stack Breakdown */}
          {stackTools.map((tool, idx) => (
            <section key={tool.category} className="mb-10">
              <h2 className="text-xl font-bold mt-10 mb-2">
                {idx + 1}. {tool.category}: {tool.tool}
              </h2>
              <div className="border border-border rounded-xl p-5 bg-surface mb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-lg font-bold text-foreground">{tool.tool}</p>
                    <p className="text-xs text-muted mt-0.5">
                      {tool.seats} &middot;{" "}
                      <Link href={tool.toolPage} className="text-accent hover:underline">
                        Full review &rarr;
                      </Link>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-mono text-amber-400 whitespace-nowrap block">
                      {tool.price}
                    </span>
                    <span className="text-[10px] text-muted whitespace-nowrap">
                      Annual: {tool.annualPrice}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted mb-3">{tool.description}</p>
                <p className="text-xs text-muted/70 italic">
                  <strong>Alternative:</strong> {tool.alternative}
                </p>
              </div>
            </section>
          ))}

          {/* Total Cost Table */}
          <h2 className="text-xl font-bold mt-14 mb-4">Complete Monthly Bill</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-3 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">3-Person Team</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">5-Person Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mangools Entry</td>
                  <td className="px-4 py-2.5">$29.90</td>
                  <td className="px-4 py-2.5">$29.90</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Grammarly Free + ChatGPT Plus</td>
                  <td className="px-4 py-2.5">$20.00</td>
                  <td className="px-4 py-2.5">$20.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Canva Pro</td>
                  <td className="px-4 py-2.5">$15.00</td>
                  <td className="px-4 py-2.5">$15.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                  <td className="px-4 py-2.5">$36.00 (3 seats)</td>
                  <td className="px-4 py-2.5">$60.00 (5 seats)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Scale</td>
                  <td className="px-4 py-2.5">$49.00</td>
                  <td className="px-4 py-2.5">$49.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Buffer Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-bold text-foreground">Total</td>
                  <td className="px-4 py-2.5 font-bold text-green-400">$149.90/mo</td>
                  <td className="px-4 py-2.5 font-bold text-amber-400">$173.90/mo</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why Mangools instead of Ahrefs or Semrush?</h3>
              <p className="text-sm text-muted">
                Mangools Entry is $29.90/mo for keyword research, SERP analysis, and rank tracking. Ahrefs Starter is $29/mo but focused on backlinks. Semrush Pro is $139.95/mo. For a content team focused on keyword research and content planning, Mangools delivers the best value.{" "}
                <Link href="/tools/mangools" className="text-accent hover:underline">
                  Mangools review &rarr;
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Should each writer get Grammarly Pro?</h3>
              <p className="text-sm text-muted">
                Grammarly Free is sufficient for most content work &mdash; it covers grammar, spelling, and tone detection with 100 AI prompts/month per person. Grammarly Pro ($30/mo, or $12/mo on annual) adds plagiarism detection and 2,000 AI prompts. Only upgrade individual writers who need plagiarism checking.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why beehiiv over Mailchimp for publishing?</h3>
              <p className="text-sm text-muted">
                beehiiv Scale ($49/mo) gives you unlimited subscribers, a built-in ad network, referral program, and A/B testing. Mailchimp Standard ($20/mo) starts cheaper at 500 contacts but scales to $100+/mo at 5,000 contacts and doesn&apos;t include monetization tools.{" "}
                <Link href="/guides/when-mailchimp-becomes-expensive" className="text-accent hover:underline">
                  Mailchimp cost analysis &rarr;
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">When should we upgrade Buffer from Free?</h3>
              <p className="text-sm text-muted">
                Buffer Free limits you to 3 channels and 10 posts per channel. Upgrade to Essentials ($6/channel/mo) when you need unlimited posts or more than 3 social accounts. At 6 channels, that&apos;s $36/mo. Total stack with Buffer Essentials (6 channels): $185.90/mo for 3 people.
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["mangools", "grammarly", "chatgpt", "canva", "notion", "beehiiv", "buffer"]}
          comparisons={["beehiiv-vs-convertkit", "notion-vs-clickup"]}
          guides={[
            "best-tools-for-small-marketing-teams",
            "newsletter-stack",
            "social-media-management-stack",
            "seo-tools-for-small-sites",
            "design-tools-non-designers",
            "creator-toolkit",
          ]}
        />
      </article>
    </>
  );
}
