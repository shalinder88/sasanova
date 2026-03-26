import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Replace Mailchimp with beehiiv + Tally (Save $200+/Year)",
  description:
    "Mailchimp Standard costs $20/mo for 500 contacts. beehiiv is free up to 2,500 subscribers and Tally offers unlimited forms for free. For newsletters, beehiiv is better AND cheaper. Exact pricing and migration steps.",
};

export default function ReplaceMailchimpWithBeehiivTally() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/guides"
              className="hover:text-accent transition-colors"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              Replace Mailchimp with beehiiv + Tally
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Replacement Stack
            </span>
            <span className="text-[11px] text-muted">11 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Replace Mailchimp with beehiiv + Tally (Save $200+/Year)
          </h1>
          <p className="text-lg text-muted">
            Mailchimp Standard costs $20/mo for just 500 contacts &mdash; and
            prices climb steeply from there. If you&apos;re running a newsletter
            and using Mailchimp&apos;s forms for signups, beehiiv gives you a
            better newsletter platform for free (up to 2,500 subscribers) and
            Tally gives you unlimited forms for free. Here&apos;s how to make
            the switch.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Price Comparison ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              The Math
            </p>
            <p className="text-sm text-muted">
              Mailchimp Standard: <strong className="text-foreground">$20/mo</strong> ($240/yr) for 500 contacts, 6,000 sends/mo.
              <br />
              Replacement: beehiiv Launch <strong className="text-foreground">$0/mo</strong> (2,500 subscribers, unlimited sends) + Tally Free <strong className="text-foreground">$0/mo</strong> (unlimited forms, unlimited submissions).
              <br />
              Savings: <strong className="text-foreground">$240/yr</strong> at 500 contacts. At 2,500 contacts, Mailchimp Standard jumps to ~$39/mo ($468/yr) while beehiiv remains free &mdash; saving you <strong className="text-foreground">$468/yr</strong>.
            </p>
          </div>

          {/* ── Pricing Table ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Exact Pricing Comparison
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Tool
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Plan
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Monthly Price
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Includes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Mailchimp
                  </td>
                  <td className="px-4 py-2.5">Standard</td>
                  <td className="px-4 py-2.5">$20/mo</td>
                  <td className="px-4 py-2.5">
                    500 contacts, 6,000 sends/mo, advanced automations
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    beehiiv
                  </td>
                  <td className="px-4 py-2.5">Launch (Free)</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                  <td className="px-4 py-2.5">
                    2,500 subscribers, unlimited sends, website, custom domain
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Tally
                  </td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                  <td className="px-4 py-2.5">
                    Unlimited forms, unlimited submissions, conditional logic
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── What You Gain / Lose ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            What You Gain vs. What You Lose
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    What You Gain
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    What You Lose
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    $240&ndash;$468/yr in savings (depending on list size)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Mailchimp&apos;s e-commerce integrations (Shopify product
                    blocks, abandoned cart)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    5x higher subscriber limit on the free tier (2,500 vs 250)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Built-in A/B testing on email subject lines (beehiiv Scale
                    required)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Built-in referral program, ad network, and paid
                    subscriptions on beehiiv
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Advanced audience segmentation (beehiiv segments are simpler)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Tally&apos;s unlimited forms vs Mailchimp&apos;s basic form
                    builder
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    All-in-one platform convenience (forms + email in one tool)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Newsletter-first features: custom website, SEO, growth tools
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Mailchimp&apos;s social posting and content studio
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Migration Steps ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Migration Steps</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 1: Export Your Mailchimp Subscriber List
          </h3>
          <p className="text-muted mb-4">
            Go to Audience &rarr; All Contacts &rarr; Export Audience. Download
            the CSV. This includes email addresses, tags, signup dates, and
            custom fields. Also export your email templates by saving them as
            HTML from the campaign builder.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 2: Set Up beehiiv
          </h3>
          <p className="text-muted mb-4">
            Create a free beehiiv account (Launch plan: $0/mo, 2,500
            subscribers). Import your subscriber CSV. beehiiv handles
            deduplication automatically. Set up your custom domain, choose a
            theme, and configure your newsletter settings. Recreate your welcome
            email sequence.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 3: Set Up Tally for Forms
          </h3>
          <p className="text-muted mb-4">
            Create a free Tally account. Build your signup forms using
            Tally&apos;s Notion-like editor &mdash; it supports conditional
            logic, file uploads, and hidden fields, all for free. Connect Tally
            to beehiiv using Zapier, Make, or Tally&apos;s native webhook
            integration so new form submissions automatically add subscribers to
            your beehiiv list.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 4: Update Your Embed Codes
          </h3>
          <p className="text-muted mb-4">
            Replace Mailchimp embed forms on your website with either beehiiv
            native embeds or Tally form embeds. beehiiv provides embeddable
            signup forms, or you can embed Tally forms that feed into beehiiv.
            Update any landing pages that link to Mailchimp signup forms.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 5: Send a Test Newsletter and Cancel Mailchimp
          </h3>
          <p className="text-muted mb-4">
            Send a test newsletter from beehiiv to confirm deliverability and
            formatting. Check that Tally form submissions flow into beehiiv
            correctly. Once confirmed, cancel your Mailchimp plan. Keep your
            Mailchimp account active (free tier) for 30 days as a backup
            reference.
          </p>

          {/* ── Who Should NOT Switch ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Who Should NOT Switch
          </h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li>
              <strong className="text-foreground">
                E-commerce businesses relying on Mailchimp&apos;s Shopify
                integration.
              </strong>{" "}
              beehiiv does not have native e-commerce integrations for product
              recommendations, abandoned cart emails, or purchase-triggered
              automations. If you sell products online, Mailchimp (or
              ActiveCampaign, or Brevo) is a better fit.
            </li>
            <li>
              <strong className="text-foreground">
                Teams needing complex multi-branch automations.
              </strong>{" "}
              beehiiv&apos;s automation features are simpler than
              Mailchimp&apos;s. If you have 10+ automation workflows with
              conditional branching, beehiiv won&apos;t replicate them. Consider
              ActiveCampaign instead.
            </li>
            <li>
              <strong className="text-foreground">
                Businesses that use Mailchimp as a CRM.
              </strong>{" "}
              Some small businesses use Mailchimp&apos;s audience management as
              a lightweight CRM. beehiiv is a newsletter platform, not a CRM. If
              you track customer interactions and purchase history in Mailchimp,
              you&apos;ll need a separate CRM.
            </li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Frequently Asked Questions
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Is beehiiv really free?
          </h3>
          <p className="text-muted mb-4">
            Yes. beehiiv Launch is genuinely free: 2,500 subscribers, unlimited
            sends, custom domain, and a website builder. The only limitation is
            beehiiv branding on your emails. beehiiv Scale ($49/mo) removes
            branding and adds the ad network, referral program, and advanced
            analytics.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Why Tally instead of beehiiv&apos;s built-in forms?
          </h3>
          <p className="text-muted mb-4">
            beehiiv has basic signup forms, but Tally offers conditional logic,
            multi-page forms, file uploads, calculations, and payment collection
            &mdash; all free. If you need anything beyond a simple email capture
            form, Tally is more capable.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            What happens when I pass 2,500 subscribers on beehiiv?
          </h3>
          <p className="text-muted mb-4">
            You&apos;ll need to upgrade to beehiiv Scale at $49/mo for unlimited
            subscribers. Even at $49/mo, you&apos;re getting a better newsletter
            platform than Mailchimp Standard &mdash; and Mailchimp at 2,500
            contacts costs roughly $39/mo with fewer newsletter-specific
            features.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Can I monetize my newsletter on beehiiv?
          </h3>
          <p className="text-muted mb-4">
            Yes. beehiiv has a built-in ad network (you earn revenue from
            sponsors), paid subscriptions (readers pay you directly via Stripe),
            and a referral program (readers earn rewards for sharing). None of
            these exist in Mailchimp at any price tier.
          </p>
        </div>

        {/* ── Related Links ── */}
        <RelatedLinks
          tools={["mailchimp", "beehiiv", "tally"]}
          comparisons={["mailchimp-vs-beehiiv"]}
          guides={[
            "who-should-not-use-mailchimp",
            "when-mailchimp-becomes-expensive",
            "best-free-newsletter-platform-2026",
          ]}
        />
      </article>
    </>
  );
}
