import Link from "next/link";
import { getLatestVerifiedDate, formatVerifiedLong } from "@/data/tools";

const footerSections = [
  {
    title: "Discover",
    links: [
      { href: "/tools", label: "Tools Directory" },
      { href: "/compare", label: "Compare" },
      { href: "/best", label: "Best Of" },
      { href: "/alternatives", label: "Alternatives" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/guides", label: "Guides" },
      { href: "/vault", label: "Vault Newsletter" },
      { href: "/recommend", label: "Stack Recommender" },
      { href: "/alerts", label: "Price Alerts" },
      { href: "/changelog", label: "Pricing Changelog" },
      { href: "/trends", label: "Price Trends" },
      { href: "/updates", label: "Updates" },
    ],
  },
  {
    title: "Popular Guides",
    links: [
      { href: "/guides/newsletter-stack", label: "Newsletter Stack Under $150/mo" },
      { href: "/guides/hubspot-pricing-reality", label: "HubSpot Pricing Reality" },
      { href: "/guides/zapier-hidden-costs", label: "Zapier Hidden Costs" },
      { href: "/guides/mailchimp-hidden-costs", label: "Mailchimp Hidden Costs" },
      { href: "/guides/best-crm-freelancers-consultants", label: "Best CRM for Freelancers" },
      { href: "/guides/best-email-tool-creators", label: "Best Email for Creators" },
      { href: "/guides/salesforce-hidden-costs", label: "Salesforce Hidden Costs" },
      { href: "/guides/automation-pricing-compared", label: "Automation Pricing Compared" },
    ],
  },
  {
    title: "Popular Alternatives",
    links: [
      { href: "/alternatives/mailchimp", label: "Mailchimp Alternatives" },
      { href: "/alternatives/zapier", label: "Zapier Alternatives" },
      { href: "/alternatives/salesforce", label: "Salesforce Alternatives" },
      { href: "/alternatives/hubspot-crm", label: "HubSpot Alternatives" },
      { href: "/alternatives/notion", label: "Notion Alternatives" },
      { href: "/alternatives/slack", label: "Slack Alternatives" },
    ],
  },
  {
    title: "Top Comparisons",
    links: [
      { href: "/compare/mailchimp-vs-convertkit", label: "Mailchimp vs Kit" },
      { href: "/compare/hubspot-crm-vs-pipedrive", label: "HubSpot vs Pipedrive" },
      { href: "/compare/zapier-vs-make", label: "Zapier vs Make" },
      { href: "/compare/notion-vs-clickup", label: "Notion vs ClickUp" },
      { href: "/compare/beehiiv-vs-substack", label: "beehiiv vs Substack" },
      { href: "/compare/slack-vs-discord", label: "Slack vs Discord" },
      { href: "/compare/figma-vs-canva", label: "Figma vs Canva" },
      { href: "/compare/activecampaign-vs-brevo", label: "ActiveCampaign vs Brevo" },
    ],
  },
  {
    title: "For Vendors",
    links: [
      { href: "/vendors", label: "Claim Your Profile" },
      { href: "/vendors/claim", label: "Submit an Update" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/about", label: "About Sasanova" },
      { href: "/about/editorial-policy", label: "Editorial Policy" },
      { href: "/about/source-policy", label: "Source Policy" },
      { href: "/about/methodology", label: "Methodology" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/disclosure", label: "Advertiser Disclosure" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">S</span>
              </div>
              <span className="text-sm font-bold" aria-label="Sasanova">Sasa<span className="text-accent">nova</span></span>
            </Link>
            <p className="text-xs text-muted leading-relaxed">
              Evidence-backed software comparisons. Normalized pricing. Honest scoring. Live updated.
            </p>
          </div>

          {footerSections.map((s) => (
            <div key={s.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">{s.title}</h4>
              <ul className="space-y-1.5">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-xs text-muted hover:text-accent transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pro CTA */}
        <div className="mt-8 pt-6 border-t border-border flex justify-center">
          <Link
            href="/pro"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent/20 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Upgrade to Pro — $9/month
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="bg-surface-alt rounded-lg p-3 mb-4">
            <p className="text-[11px] text-muted leading-relaxed">
              <strong className="text-foreground">Disclosure:</strong> Sasanova is an independent, editorially driven comparison service. We may earn commissions when you click affiliate links or purchase through our site. This never influences our rankings or editorial scoring. All tools are evaluated using the same methodology regardless of affiliate status. <Link href="/disclosure" className="text-accent hover:underline">Learn more</Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-[11px] text-muted">&copy; {new Date().getFullYear()} Sasanova. All rights reserved.</p>
            <p className="text-[11px] text-muted">Data last verified: {formatVerifiedLong(getLatestVerifiedDate())}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
