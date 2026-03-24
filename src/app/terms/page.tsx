import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Sasanova Terms of Use — the rules governing your use of our software comparison and review website.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Terms of Use</h1>
      <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

      <div className="prose-sm space-y-6 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Acceptance of Terms</h2>
          <p>
            By accessing and using Sasanova (&quot;the Site&quot;), you accept and agree to be bound by these
            Terms of Use. If you do not agree to these terms, you should not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Nature of the Service</h2>
          <p>
            Sasanova is an informational and comparison website. We provide software reviews, pricing
            comparisons, scoring, and editorial content to help users make informed decisions about
            software tools. The information on this site is provided for general informational
            purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">No Professional Advice</h2>
          <p>
            The content on Sasanova does not constitute professional, financial, or legal advice.
            Software purchasing decisions should be made based on your own evaluation and, where
            appropriate, consultation with qualified professionals. We are not responsible for
            decisions made based on information found on this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Accuracy of Information</h2>
          <p>
            We strive to keep all information accurate and up to date. However, software pricing,
            features, and policies change frequently. While we verify data regularly (see our{" "}
            <Link href="/about/source-policy" className="text-accent hover:underline">
              Source Policy
            </Link>
            ), we cannot guarantee that all information is current at the time you read it. Always
            verify pricing and features directly with the software vendor before making a purchase
            decision.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Affiliate Links</h2>
          <p>
            Some links on this site are affiliate links. See our{" "}
            <Link href="/disclosure" className="text-accent hover:underline">
              Advertiser Disclosure
            </Link>{" "}
            for full details on how affiliate partnerships work and how they do not influence our
            editorial content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Intellectual Property</h2>
          <p>
            All content on Sasanova, including text, graphics, logos, scoring methodologies, and data
            compilations, is the property of Sasanova or its content creators and is protected by
            applicable copyright and intellectual property laws. You may not reproduce, distribute,
            or create derivative works from our content without written permission.
          </p>
          <p>
            Product names, logos, and trademarks mentioned on the site belong to their respective
            owners and are used for identification purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Use the Site for any unlawful purpose.</li>
            <li>
              Scrape, crawl, or use automated tools to extract data from the Site beyond what is
              permitted by our robots.txt file.
            </li>
            <li>Attempt to interfere with the proper functioning of the Site.</li>
            <li>Misrepresent your identity or affiliation when contacting us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Limitation of Liability</h2>
          <p>
            Sasanova is provided &quot;as is&quot; without warranties of any kind, express or implied. To the
            fullest extent permitted by law, Sasanova shall not be liable for any direct, indirect,
            incidental, consequential, or punitive damages arising from your use of the Site or
            reliance on any information provided.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Third-Party Links</h2>
          <p>
            The Site contains links to third-party websites. We are not responsible for the content,
            privacy practices, or terms of service of any linked sites. Clicking external links is at
            your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms of Use at any time. Changes will be posted on
            this page with an updated date. Your continued use of the Site after any changes
            constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Contact</h2>
          <p>
            For questions about these terms, contact us at legal@sasanova.com.
          </p>
        </section>
      </div>
    </div>
  );
}
