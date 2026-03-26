import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Is Mailchimp Still Good in 2026? (For Some, Not Most)",
  description:
    "Mailchimp Free shrank to 250 contacts. Standard starts at $20/mo. beehiiv Scale is $49/mo for unlimited subscribers. Mailchimp is still good for e-commerce; not for newsletters.",
};

export default function IsMailchimpStillGoodPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Is Mailchimp Still Good?</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Quick Answer</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Is Mailchimp Still Good in 2026?</h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">For e-commerce stores needing product recommendations and integrations, yes.</strong> For
            newsletter creators, no. Mailchimp Free tier shrank from 2,000 to 250 contacts.
            Standard starts at $20/month for 500 contacts and scales steeply. beehiiv Scale
            ($49/month) gives unlimited subscribers with better growth tools. Kit Free supports
            10,000 subscribers.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>7 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">Where Mailchimp Still Wins</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>E-commerce integrations (Shopify, WooCommerce, product recommendations)</li>
              <li>Most mature automation builder with customer journey mapping</li>
              <li>Content optimizer and A/B testing at Standard ($20/mo)</li>
              <li>Social posting and postcards (unique features)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">Where Mailchimp Falls Short</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>Free tier: only 250 contacts and 500 sends/month (Kit Free: 10K subscribers)</li>
              <li>Contact-based pricing scales steeply (50K contacts ~ $385/month)</li>
              <li>Counts unsubscribed contacts toward your limit</li>
              <li>No built-in monetization tools (beehiiv has ad network + referral program)</li>
              <li>Premium tier jumps to $350/month for 10K contacts</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">The Caveat</h2>
            <p className="text-muted leading-relaxed">
              Mailchimp is no longer the default recommendation for email marketing. Since the
              Intuit acquisition in 2021, the free tier has shrunk dramatically and pricing has
              climbed. The tool is more complex than ever. For most use cases, there is a
              cheaper or better alternative: beehiiv for newsletters ($49/mo unlimited), Kit
              for creators ($0 for 10K subs), Brevo for large lists ($9/mo for 5K sends with
              unlimited contacts), ActiveCampaign for automation ($15/mo).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Should I start with Mailchimp if I have zero subscribers?</h3>
                <p className="text-sm text-muted">No. Kit Free (10K subscribers) or beehiiv Launch (2,500 subscribers) are better starting points with more generous limits.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is Mailchimp Essentials ($13/mo) worth it?</h3>
                <p className="text-sm text-muted">Only for 500 contacts. At 2,500+ contacts, pricing scales. Brevo Starter at $9/month charges by sends, not contacts.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["mailchimp", "beehiiv", "convertkit"]}
            comparisons={["mailchimp-vs-beehiiv", "mailchimp-vs-convertkit"]}
            guides={["who-should-not-use-mailchimp", "when-mailchimp-becomes-expensive", "mailchimp-pricing-history"]}
          />
        </div>
      </article>
    </>
  );
}
