import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Brevo vs Mailchimp: Pay-Per-Send vs Pay-Per-Contact",
  description: "Brevo Standard at $18/mo vs Mailchimp Standard at $20/mo. Two fundamentally different billing models compared with exact pricing, features, and recommendations.",
};

export default function BrevoVsMailchimpDetailedPage() {
  return (<>
    <div className="border-b border-border bg-surface"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3"><nav className="flex items-center gap-1.5 text-xs text-muted"><Link href="/" className="hover:text-accent transition-colors">Home</Link><span>/</span><Link href="/guides" className="hover:text-accent transition-colors">Guides</Link><span>/</span><span className="text-foreground font-medium truncate">Brevo vs Mailchimp</span></nav></div></div>
    <div className="border-b border-border"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Detailed Comparison</span>
      <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Brevo vs Mailchimp: Pay-Per-Send vs Pay-Per-Contact</h1>
      <p className="text-muted text-lg leading-relaxed"><strong className="text-foreground">Quick verdict:</strong> Brevo wins for businesses with large contact lists who send infrequently &mdash; you pay by emails sent ($18/mo for 5,000 emails), not contacts stored (unlimited). Mailchimp wins for teams wanting the broadest integration ecosystem and most polished email editor, but charges by contacts ($20/mo for 500 contacts). The billing model difference is the entire decision.</p>
      <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>20 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
    </div></div>
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div className="prose-custom space-y-8">

      <section>
        <h2 className="text-xl font-bold mb-3">The Fundamental Billing Difference</h2>
        <p className="text-muted leading-relaxed mb-3">This comparison comes down to one question: <strong className="text-foreground">do you have more contacts than you email regularly?</strong></p>
        <p className="text-muted leading-relaxed mb-3">Mailchimp charges based on how many contacts you store. Brevo charges based on how many emails you send. For businesses with a large contact list that only emails a subset regularly, Brevo can be dramatically cheaper. For businesses with a small list that emails frequently, the difference narrows or reverses.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-5"><p className="text-sm font-bold text-foreground mb-2">Brevo billing model</p><p className="text-sm text-muted">Pay per emails sent. Store unlimited contacts for free. Standard plan: $18/mo for 5,000 emails/month.</p></div>
          <div className="rounded-lg border border-border bg-surface p-5"><p className="text-sm font-bold text-foreground mb-2">Mailchimp billing model</p><p className="text-sm text-muted">Pay per contacts stored. Standard plan: $20/mo for 500 contacts (6,000 sends/mo).</p></div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Side-by-Side Pricing</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Plan</th><th className="text-left py-3 px-4 font-semibold text-foreground">Brevo</th><th className="text-left py-3 px-4 font-semibold text-foreground">Mailchimp</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Free</td><td className="py-3 px-4">$0 &mdash; 100,000 contacts, 300 emails/day, Brevo branding</td><td className="py-3 px-4">$0 &mdash; 250 contacts, 500 sends/mo, limited automations</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Entry paid</td><td className="py-3 px-4">Starter $9/mo ($108/yr) &mdash; 5,000 emails/mo, no daily limit</td><td className="py-3 px-4">Essentials $13/mo ($156/yr) &mdash; 500 contacts, 5,000 sends/mo</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Standard</td><td className="py-3 px-4">Standard $18/mo ($216/yr) &mdash; 5,000 emails/mo, automation, A/B testing</td><td className="py-3 px-4">Standard $20/mo ($240/yr) &mdash; 500 contacts, 6,000 sends/mo, advanced automations</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Professional</td><td className="py-3 px-4">Professional $499/mo ($5,988/yr) &mdash; 150,000+ emails, dedicated IP</td><td className="py-3 px-4">Premium $350/mo ($4,200/yr) &mdash; 10,000 contacts, 150,000 sends/mo, phone support</td></tr>
            <tr><td className="py-3 px-4 font-medium text-foreground">Enterprise</td><td className="py-3 px-4">Custom pricing</td><td className="py-3 px-4">No separate enterprise tier</td></tr>
          </tbody>
        </table></div>
        <p className="text-xs text-muted mt-2">Brevo&apos;s free tier allows 100,000 contacts (300 emails/day). Mailchimp&apos;s free tier caps at 250 contacts. The free tier gap alone makes Brevo the obvious starter choice for large-list businesses.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Feature Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th><th className="text-left py-3 px-4 font-semibold text-foreground">Brevo</th><th className="text-left py-3 px-4 font-semibold text-foreground">Mailchimp</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Email editor</td><td className="py-2 px-4">Functional, improving</td><td className="py-2 px-4">Industry-leading drag-and-drop</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">SMS marketing</td><td className="py-2 px-4">Built-in &mdash; SMS campaigns native</td><td className="py-2 px-4">Available via add-on</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">WhatsApp campaigns</td><td className="py-2 px-4">Yes &mdash; native</td><td className="py-2 px-4">No</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">CRM</td><td className="py-2 px-4">Built-in CRM included</td><td className="py-2 px-4">Audience management (not a true CRM)</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Transactional email</td><td className="py-2 px-4">Yes &mdash; SMTP relay included</td><td className="py-2 px-4">Mandrill add-on (separate pricing)</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Live chat widget</td><td className="py-2 px-4">Yes &mdash; built-in</td><td className="py-2 px-4">No</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">E-commerce integrations</td><td className="py-2 px-4">Shopify, WooCommerce, PrestaShop</td><td className="py-2 px-4">Shopify, WooCommerce, Square &mdash; deeper</td></tr>
            <tr><td className="py-2 px-4 font-medium text-foreground">Template library</td><td className="py-2 px-4">Smaller, simpler</td><td className="py-2 px-4">Large, polished, content optimizer</td></tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">What Brevo Does Better</h2>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">Unlimited contacts.</strong> Store 100,000 contacts on the free plan. Mailchimp&apos;s free plan caps at 250. For businesses with large lists, Brevo&apos;s pricing model is fundamentally more affordable.</p>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">Multi-channel in one tool.</strong> Email, SMS, WhatsApp, CRM, transactional email, and live chat are all built in. Mailchimp would require add-ons or separate tools for most of these.</p>
        <p className="text-muted leading-relaxed"><strong className="text-foreground">Transactional email.</strong> Brevo&apos;s SMTP relay handles password resets, order confirmations, and shipping notifications. Mailchimp requires Mandrill &mdash; a separate product with separate pricing.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">What Mailchimp Does Better</h2>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">Email editor and templates.</strong> Mailchimp&apos;s drag-and-drop editor is the industry benchmark. The template library is larger, more polished, and includes a content optimizer that suggests improvements.</p>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">E-commerce depth.</strong> Mailchimp&apos;s Shopify and WooCommerce integrations are deeper, with product recommendations, purchase behavior triggers, and abandoned cart workflows that require less configuration.</p>
        <p className="text-muted leading-relaxed"><strong className="text-foreground">Integration ecosystem.</strong> Mailchimp integrates with virtually everything. Brevo&apos;s integration library is growing but still narrower.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Cost at Real Contact Counts</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Contacts</th><th className="text-left py-3 px-4 font-semibold text-foreground">Brevo (Standard)</th><th className="text-left py-3 px-4 font-semibold text-foreground">Mailchimp (Standard)</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">500 contacts</td><td className="py-3 px-4">$18/mo (5,000 emails)</td><td className="py-3 px-4">$20/mo</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">2,500 contacts</td><td className="py-3 px-4">$18/mo (5,000 emails)</td><td className="py-3 px-4">~$45/mo</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">10,000 contacts</td><td className="py-3 px-4">$18/mo (5,000 emails)</td><td className="py-3 px-4">~$100/mo</td></tr>
            <tr><td className="py-3 px-4 font-medium text-foreground">50,000 contacts</td><td className="py-3 px-4">$18/mo (5,000 emails)</td><td className="py-3 px-4">~$350/mo</td></tr>
          </tbody>
        </table></div>
        <p className="text-xs text-muted mt-2">Brevo&apos;s price stays at $18/mo regardless of contact count (limited by emails sent). Mailchimp&apos;s price scales with contacts. At 50,000 contacts, Brevo saves approximately $3,984/year vs Mailchimp Standard.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Decision Framework</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-5"><p className="text-sm font-bold text-foreground mb-2">Choose Brevo if:</p><ul className="space-y-1.5 text-sm text-muted"><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You have a large contact list but send selectively</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need email + SMS + WhatsApp + CRM</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need transactional email (SMTP relay)</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Budget is a primary concern</li></ul></div>
          <div className="rounded-lg border border-border bg-surface p-5"><p className="text-sm font-bold text-foreground mb-2">Choose Mailchimp if:</p><ul className="space-y-1.5 text-sm text-muted"><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Email design quality matters (best editor)</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need deep e-commerce integrations</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You want the broadest third-party integration ecosystem</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Your team already knows Mailchimp</li></ul></div>
        </div>
      </section>

      <section><h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><h3 className="text-sm font-bold text-foreground mb-1">How does Brevo count emails vs Mailchimp counting contacts?</h3><p className="text-sm text-muted">Brevo&apos;s Standard plan includes 5,000 emails per month regardless of how many contacts you have (unlimited contacts). Mailchimp&apos;s Standard plan charges based on the number of contacts in your audience, including unsubscribed contacts that haven&apos;t been archived.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Does Mailchimp charge for unsubscribed contacts?</h3><p className="text-sm text-muted">Yes, unless you manually archive them. This is one of the most common complaints about Mailchimp&apos;s billing model. Brevo doesn&apos;t have this problem since contacts are free to store.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Can Brevo handle high-volume sending?</h3><p className="text-sm text-muted">Yes. The Professional plan at $499/mo handles 150,000+ emails. Brevo also offers transactional email via SMTP relay, which is separate from marketing email quotas.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Which has better deliverability?</h3><p className="text-sm text-muted">Mailchimp has a longer track record and historically stronger deliverability reputation. Brevo has improved significantly since the rebrand from Sendinblue and offers dedicated IPs on the Professional plan. Both are acceptable for business use.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">What about ActiveCampaign or Kit as alternatives?</h3><p className="text-sm text-muted">ActiveCampaign ($15/mo Starter) is better for sophisticated automation. Kit ($0 for 10,000 subscribers) is better for solo creators. Neither matches Brevo&apos;s unlimited-contact pricing model or Mailchimp&apos;s email editor polish.</p></div>
        </div>
      </section>

    </div>
    <div className="mt-12"><RelatedLinks
      tools={["brevo", "mailchimp"]}
      comparisons={["brevo-vs-mailchimp"]}
      guides={["how-to-choose-email-platform", "switch-from-mailchimp-to-brevo", "when-mailchimp-becomes-expensive"]}
    /></div></article>
  </>);
}
