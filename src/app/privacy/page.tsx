import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Sasanova Privacy Policy — what we collect, how we use it, cookie usage, third-party services, and your data rights.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

      <div className="prose-sm space-y-6 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">What We Collect</h2>
          <p>
            Sasanova collects minimal personal information. The data we may collect includes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Email address</strong> — if you subscribe to our
              newsletter (The Vault). Provided voluntarily through our signup form.
            </li>
            <li>
              <strong className="text-foreground">Usage analytics</strong> — anonymous page views,
              device type, browser, and referral source. We do not track individual users across
              sessions.
            </li>
            <li>
              <strong className="text-foreground">Cookies</strong> — functional cookies required for
              site operation and optional analytics cookies. See the Cookies section below.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              To deliver our newsletter to subscribers who have opted in.
            </li>
            <li>
              To understand how visitors use the site so we can improve content and user experience.
            </li>
            <li>
              To comply with legal obligations.
            </li>
          </ul>
          <p className="mt-2">
            We do not sell, rent, or share your personal information with third parties for marketing
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Cookies</h2>
          <p>Sasanova uses the following types of cookies:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Essential cookies</strong> — required for basic
              site functionality. These cannot be disabled.
            </li>
            <li>
              <strong className="text-foreground">Analytics cookies</strong> — used to collect
              anonymous usage data. You can opt out of analytics cookies through your browser
              settings.
            </li>
            <li>
              <strong className="text-foreground">Affiliate cookies</strong> — when you click an
              affiliate link, the destination site may set a cookie to track the referral. These are
              governed by the third-party vendor&apos;s privacy policy.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Email service provider</strong> — to manage
              newsletter subscriptions and deliver emails.
            </li>
            <li>
              <strong className="text-foreground">Analytics provider</strong> — to collect anonymous
              site usage metrics.
            </li>
            <li>
              <strong className="text-foreground">Hosting provider</strong> — to serve the website.
            </li>
          </ul>
          <p className="mt-2">
            Each third-party service has its own privacy policy governing data handling.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Unsubscribe</strong> from our newsletter at any
              time using the unsubscribe link in every email.
            </li>
            <li>
              <strong className="text-foreground">Request deletion</strong> of your email address
              from our mailing list by contacting privacy@sasanova.com.
            </li>
            <li>
              <strong className="text-foreground">Access your data</strong> — request a copy of any
              personal data we hold about you.
            </li>
            <li>
              <strong className="text-foreground">Opt out of cookies</strong> — manage cookie
              preferences through your browser settings.
            </li>
          </ul>
          <p className="mt-2">
            If you are a resident of the EU/EEA, you have additional rights under the GDPR including
            the right to data portability and the right to lodge a complaint with a supervisory
            authority.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Data Retention</h2>
          <p>
            Newsletter subscriber data is retained for as long as you remain subscribed. Analytics
            data is retained in aggregate form and is not linked to individual users. If you
            unsubscribe, your email is removed from our active mailing list within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated &quot;Last updated&quot; date. Continued use of the site after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Contact</h2>
          <p>
            For privacy-related questions, contact us at privacy@sasanova.com. For details on our
            editorial practices, see our{" "}
            <Link href="/about/editorial-policy" className="text-accent hover:underline">
              Editorial Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
