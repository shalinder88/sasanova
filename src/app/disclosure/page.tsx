import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advertiser Disclosure",
  description:
    "How Sasanova earns revenue through affiliate partnerships, and why it never influences our editorial scoring or rankings.",
};

export default function DisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">Advertiser Disclosure</h1>

      <div className="prose-sm space-y-6 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">How We Earn Revenue</h2>
          <p>
            Sasanova is a free-to-use, independent software comparison platform. We earn revenue
            through affiliate partnerships with some of the tools we review. When you click certain
            links on our site and make a purchase or sign up for a paid plan, we may receive a
            commission from the software vendor at no additional cost to you.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            Editorial Independence
          </h2>
          <p>
            Our editorial content, scoring, and rankings are completely independent of our affiliate
            relationships. Whether or not a tool has an affiliate program with us has zero influence
            on its score, placement, or editorial coverage. Every tool is evaluated using the same
            multi-axis methodology regardless of affiliate status.
          </p>
          <p>
            We review and compare tools that do not have affiliate programs alongside those that do.
            A tool without an affiliate partnership can (and does) outrank tools with partnerships.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">How Affiliate Links Work</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Affiliate links are marked with <code className="text-xs bg-surface-alt px-1 py-0.5 rounded">rel=&quot;sponsored&quot;</code> in
              compliance with search engine guidelines.
            </li>
            <li>
              Clicking an affiliate link takes you to the vendor&apos;s website. A cookie or tracking
              parameter records that you came from Sasanova.
            </li>
            <li>
              If you purchase a paid plan (usually within 30-90 days of clicking), we may earn a
              one-time or recurring commission.
            </li>
            <li>
              You pay the same price whether you use our link or go directly to the vendor. Affiliate
              commissions come from the vendor&apos;s marketing budget, not from a markup on your purchase.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">FTC Compliance</h2>
          <p>
            In accordance with the Federal Trade Commission (FTC) guidelines on endorsements and
            testimonials, we disclose that Sasanova has financial relationships with some of the
            companies whose products we review. This disclosure applies to all content on the site.
          </p>
          <p>
            We strive to provide accurate, up-to-date, and honest information. Our opinions are our
            own and are not dictated by any advertiser or affiliate partner.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Questions?</h2>
          <p>
            If you have questions about our affiliate relationships or editorial process, please
            review our{" "}
            <Link href="/about/editorial-policy" className="text-accent hover:underline">
              Editorial Independence Policy
            </Link>{" "}
            or contact us at disclosure@sasanova.com.
          </p>
        </section>
      </div>
    </div>
  );
}
