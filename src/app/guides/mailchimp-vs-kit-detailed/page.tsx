import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Mailchimp vs Kit (ConvertKit): Which Email Platform Wins?",
  description:
    "Mailchimp Standard at $20/mo vs Kit Creator at $39/mo — a complete comparison for creators, small businesses, and growing newsletters. Pricing, features, deliverability, and migration.",
};

export default function MailchimpVsKitDetailedPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Mailchimp vs Kit</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Detailed Comparison
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Mailchimp vs Kit (ConvertKit): Which Email Platform Wins?
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">Quick verdict:</strong> Kit wins for creators who sell digital products, courses, or memberships and want simple automation with a subscriber-centric model. Mailchimp wins for e-commerce businesses and small companies that need all-in-one marketing with landing pages, social posting, and postcards. If you&apos;re a solo creator, start with Kit. If you run an online store, start with Mailchimp.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>25 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Pricing verified from vendor sites</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Pricing Table */}
          <section>
            <h2 className="text-xl font-bold mb-3">Side-by-Side Pricing</h2>
            <p className="text-muted leading-relaxed mb-4">
              Mailchimp and Kit have different pricing models. Mailchimp charges by contacts and limits sends. Kit charges by subscriber count with unlimited sends on all paid plans.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Plan</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Mailchimp</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Kit (ConvertKit)</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Free</td>
                    <td className="py-3 px-4">$0 &mdash; 250 contacts, 500 sends/mo, limited automations</td>
                    <td className="py-3 px-4">$0 (Newsletter) &mdash; 10,000 subscribers, unlimited sends, limited automations</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Entry paid</td>
                    <td className="py-3 px-4">Essentials $13/mo &mdash; 500 contacts, 5,000 sends/mo</td>
                    <td className="py-3 px-4">Creator $39/mo &mdash; 1,000 subscribers, automations, integrations</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Mid tier</td>
                    <td className="py-3 px-4">Standard $20/mo &mdash; 500 contacts, 6,000 sends/mo, advanced automations</td>
                    <td className="py-3 px-4">Creator Pro $79/mo &mdash; 1,000 subscribers, advanced reporting, subscriber scoring</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-foreground">Top tier</td>
                    <td className="py-3 px-4">Premium $350/mo &mdash; 10,000 contacts, 150,000 sends/mo, phone support</td>
                    <td className="py-3 px-4">Creator Pro at higher subscriber tiers (price scales with list size)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              Kit&apos;s free tier allows 10,000 subscribers with unlimited sends &mdash; far more generous than Mailchimp&apos;s 250 contacts. But Kit Free lacks automations and integrations.
            </p>
          </section>

          {/* Feature Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-3">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Mailchimp</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Kit</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Email editor</td>
                    <td className="py-2 px-4">Drag-and-drop, templates, rich HTML</td>
                    <td className="py-2 px-4">Clean, text-first, minimal templates</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Visual automation</td>
                    <td className="py-2 px-4">Customer Journey Builder (complex)</td>
                    <td className="py-2 px-4">Visual automation builder (simpler)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Landing pages</td>
                    <td className="py-2 px-4">Yes &mdash; full builder with templates</td>
                    <td className="py-2 px-4">Yes &mdash; simpler, conversion-focused</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Commerce / digital products</td>
                    <td className="py-2 px-4">Product recommendations for e-commerce</td>
                    <td className="py-2 px-4">Built-in commerce for digital products</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Subscriber model</td>
                    <td className="py-2 px-4">Contact-based (unsubscribes count toward limit)</td>
                    <td className="py-2 px-4">Subscriber-centric (one profile across forms)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">A/B testing</td>
                    <td className="py-2 px-4">Subject lines, content, send times</td>
                    <td className="py-2 px-4">Subject lines only</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">E-commerce integrations</td>
                    <td className="py-2 px-4">Shopify, WooCommerce, Square (deep)</td>
                    <td className="py-2 px-4">Shopify, WooCommerce (basic via Zapier)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium text-foreground">Sponsor network</td>
                    <td className="py-2 px-4">No</td>
                    <td className="py-2 px-4">Yes &mdash; Kit Sponsor Network for creators</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Decision Framework */}
          <section>
            <h2 className="text-xl font-bold mb-3">Decision Framework</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-bold text-foreground mb-2">Choose Mailchimp if:</p>
                <ul className="space-y-1.5 text-sm text-muted">
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You run an e-commerce store with Shopify or WooCommerce</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need rich HTML email templates</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You want social posting and ads in one tool</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need postcards and print marketing</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Your list is under 500 and you want free</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-bold text-foreground mb-2">Choose Kit if:</p>
                <ul className="space-y-1.5 text-sm text-muted">
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You&apos;re a creator selling courses, ebooks, or memberships</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You want simple, text-focused emails that feel personal</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You have up to 10,000 subscribers and want free</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You want to sell digital products without a separate tool</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You value a subscriber-centric model over contact lists</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What each does better */}
          <section>
            <h2 className="text-xl font-bold mb-3">What Mailchimp Does Better</h2>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">E-commerce.</strong> Deep Shopify and WooCommerce integrations let Mailchimp pull product data, trigger abandoned cart emails, recommend products based on purchase history, and segment by buying behavior. Kit&apos;s e-commerce integrations are surface-level via Zapier.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Template variety.</strong> Hundreds of pre-built, visually rich email templates. Kit intentionally keeps emails plain-text-looking because that&apos;s what converts for creators &mdash; but businesses sending promotional emails with images and layouts need Mailchimp.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">All-in-one marketing.</strong> Social posting, postcards, ads manager, landing pages, and website builder beyond just email. Kit stays laser-focused on email and digital products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">What Kit Does Better</h2>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Creator economics.</strong> Kit&apos;s built-in commerce lets you sell digital products and memberships with Stripe. No separate storefront needed. The Sponsor Network connects you with brands for newsletter sponsorships. Mailchimp has no equivalent revenue features.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Free tier generosity.</strong> Kit Newsletter free tier allows 10,000 subscribers with unlimited sends. Mailchimp free limits you to 250 contacts and 500 sends/mo. For creators building an audience, Kit free is dramatically more useful.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Subscriber management.</strong> Kit uses a subscriber-centric model &mdash; one person exists once in your account regardless of how many forms they filled out. Mailchimp uses audiences (lists), and the same person on two audiences counts as two contacts against your billing limit.
            </p>
          </section>

          {/* Cost at 3 sizes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Annual Cost at Three Subscriber Counts</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Subscribers</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Mailchimp (Standard)</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Kit (Creator)</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">1,000</td>
                    <td className="py-3 px-4">$240/yr ($20/mo)</td>
                    <td className="py-3 px-4">$468/yr ($39/mo)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">5,000</td>
                    <td className="py-3 px-4">~$828/yr ($69/mo)</td>
                    <td className="py-3 px-4">~$828/yr ($69/mo)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-foreground">25,000</td>
                    <td className="py-3 px-4">~$3,960/yr ($330/mo)</td>
                    <td className="py-3 px-4">~$2,628/yr ($219/mo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              Mailchimp is cheaper at small list sizes but scales steeply. Kit becomes more cost-effective above ~5,000 subscribers. Mailchimp also counts unsubscribed and non-subscribed contacts toward your billing limit.
            </p>
          </section>

          {/* Migration */}
          <section>
            <h2 className="text-xl font-bold mb-3">Migration Between the Two</h2>
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Mailchimp to Kit</p>
                <p className="text-sm text-muted">
                  <strong>Effort:</strong> Low to medium (1&ndash;3 hours for most lists). <strong>What transfers:</strong> Subscribers via CSV, tags, custom fields. <strong>What breaks:</strong> Automation workflows (must be rebuilt), email templates (Kit uses a different editor), e-commerce integrations, and audience segments based on Mailchimp-specific data points.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Kit to Mailchimp</p>
                <p className="text-sm text-muted">
                  <strong>Effort:</strong> Low (1&ndash;2 hours). <strong>What transfers:</strong> Subscribers via CSV, tags. <strong>What breaks:</strong> Visual automations, sequences, commerce products, landing pages, and subscriber scoring data. Note that Mailchimp will count every imported contact against your billing limit.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes When Choosing</h2>
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Choosing Mailchimp because it&apos;s the &ldquo;default&rdquo;</p>
                <p className="text-sm text-muted">
                  Mailchimp has the biggest brand name, but creators paying $20/mo for 500 contacts could have 10,000 subscribers on Kit for free. Mailchimp&apos;s strengths are e-commerce and all-in-one marketing &mdash; not creator email.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Ignoring Mailchimp&apos;s contact counting</p>
                <p className="text-sm text-muted">
                  Mailchimp counts unsubscribed and non-subscribed contacts toward your tier. If you have 500 active subscribers but 800 total contacts, you&apos;re paying for 800. Kit only counts active subscribers.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Thinking Kit is too &ldquo;simple&rdquo;</p>
                <p className="text-sm text-muted">
                  Kit&apos;s plain-text email style is intentional, not a limitation. For creators, personal-feeling emails consistently outperform designed templates. Kit&apos;s visual automation builder is powerful enough for most creator workflows.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Kit still called ConvertKit?</h3>
                <p className="text-sm text-muted">Kit rebranded from ConvertKit in 2024. The product is the same. Old ConvertKit links redirect to kit.com. The domain kit.com is now the primary URL.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which has better deliverability?</h3>
                <p className="text-sm text-muted">Both have solid deliverability. Kit historically has a slight edge because its users send fewer promotional emails and more text-based content, which spam filters prefer. Mailchimp&apos;s massive user base means more variance in deliverability quality.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I sell products on Mailchimp?</h3>
                <p className="text-sm text-muted">Mailchimp integrates with Shopify, WooCommerce, and Square for physical/digital product sales but doesn&apos;t host products natively. Kit lets you create and sell digital products directly within the platform with Stripe payments.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What about beehiiv as an alternative to both?</h3>
                <p className="text-sm text-muted">beehiiv is newsletter-first with a free tier up to 2,500 subscribers, built-in ad network, and referral tools. It&apos;s a strong alternative for newsletter businesses but lacks Kit&apos;s digital product commerce and Mailchimp&apos;s e-commerce depth.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which free tier is better?</h3>
                <p className="text-sm text-muted">Kit Newsletter free (10,000 subscribers, unlimited sends) is far more generous than Mailchimp free (250 contacts, 500 sends/mo). But Kit free lacks automations and integrations. For audience building, Kit wins. For basic email marketing with automation, neither free tier is ideal.</p>
              </div>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["mailchimp", "convertkit"]}
            comparisons={["mailchimp-vs-convertkit"]}
            guides={["when-mailchimp-becomes-expensive", "migrate-mailchimp-to-kit", "how-to-choose-email-platform"]}
          />
        </div>
      </article>
    </>
  );
}
