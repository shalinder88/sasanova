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
          <p>
            Sasanova (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website sasanova.com (the &quot;Site&quot;). This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our Site. Please read this policy carefully. By accessing or using the
            Site, you agree to the collection and use of information in accordance with this policy.
            If you do not agree with the terms of this Privacy Policy, please do not access the Site.
          </p>
        </section>

        {/* ── 1. Information We Collect ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">1. Information We Collect</h2>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            1.1 Personal Information You Provide
          </h3>
          <p>
            We collect personal information that you voluntarily provide to us when you interact
            with the Site. This may include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Email address</strong> — if you subscribe to our
              newsletter (The Vault) through our signup form.
            </li>
            <li>
              <strong className="text-foreground">Name</strong> — if you provide it when contacting
              us or subscribing to communications.
            </li>
            <li>
              <strong className="text-foreground">Correspondence data</strong> — any information you
              include when you email us directly at our contact addresses.
            </li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            1.2 Automatically Collected Information (Usage Data)
          </h3>
          <p>
            When you visit the Site, we automatically collect certain information about your device
            and your visit. This data is collected in aggregate and is not used to personally
            identify you. It includes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Device type (desktop, mobile, tablet)</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring URL (the site that directed you to us)</li>
            <li>Approximate geographic location (country or region level, derived from IP address)</li>
            <li>Date and time of access</li>
          </ul>
          <p className="mt-2">
            We do not track individual users across sessions, and we do not build personal profiles
            based on browsing behavior.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            1.3 Information Collected via Cookies and Similar Technologies
          </h3>
          <p>
            We use cookies and similar tracking technologies to collect information about your
            browsing activity on our Site. For detailed information about the types of cookies we
            use and how to manage them, see Section 3 below.
          </p>
        </section>

        {/* ── 2. How We Use Your Information ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Deliver communications</strong> — to send our
              newsletter to subscribers who have opted in, including editorial content, software
              recommendations, and updates about the Site.
            </li>
            <li>
              <strong className="text-foreground">Improve the Site</strong> — to understand how
              visitors use the Site so we can improve content quality, navigation, and overall user
              experience.
            </li>
            <li>
              <strong className="text-foreground">Monitor performance</strong> — to track site
              performance, diagnose technical issues, and ensure uptime and reliability.
            </li>
            <li>
              <strong className="text-foreground">Respond to inquiries</strong> — to answer your
              questions, requests, or feedback when you contact us.
            </li>
            <li>
              <strong className="text-foreground">Comply with legal obligations</strong> — to meet
              applicable legal, regulatory, or contractual requirements.
            </li>
            <li>
              <strong className="text-foreground">Prevent abuse</strong> — to protect the Site
              against spam, fraud, scraping, and other malicious activity.
            </li>
          </ul>
          <p className="mt-2">
            We do not sell, rent, or share your personal information with third parties for their
            marketing purposes. We do not use your data for automated decision-making or profiling.
          </p>
        </section>

        {/* ── 3. Cookies and Tracking Technologies ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. We use
            the following categories of cookies:
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            3.1 Essential Cookies
          </h3>
          <p>
            These cookies are strictly necessary for the Site to function properly. They enable
            core features such as page navigation, security, and accessibility. Essential cookies
            cannot be disabled without impairing the functionality of the Site.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            3.2 Analytics Cookies
          </h3>
          <p>
            Analytics cookies help us understand how visitors interact with the Site by collecting
            and reporting information anonymously. We use this data in aggregate to identify popular
            content, measure page performance, and improve the Site. These cookies do not collect
            personally identifiable information.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            3.3 Affiliate and Third-Party Cookies
          </h3>
          <p>
            When you click an affiliate link on our Site, the destination vendor or affiliate
            network may place a cookie on your device to record that you were referred by Sasanova.
            These cookies are governed by the respective third party&apos;s privacy policy and are not
            controlled by us. Affiliate cookies typically have a duration of 30 to 90 days depending
            on the partner program.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            3.4 Managing Your Cookie Preferences
          </h3>
          <p>
            You can manage or delete cookies through your browser settings. Most browsers allow you
            to refuse cookies, delete existing cookies, or alert you before a cookie is set. Please
            note that disabling essential cookies may impair your ability to use certain features of
            the Site. For detailed instructions on managing cookies, consult your browser&apos;s help
            documentation.
          </p>
        </section>

        {/* ── 4. Third-Party Services ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">4. Third-Party Services</h2>
          <p>
            We rely on a limited number of third-party services to operate the Site. Each service
            processes data in accordance with its own privacy policy. The categories of services we
            use include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Hosting (Vercel)</strong> — our Site is hosted on
              Vercel&apos;s infrastructure. Vercel may process server logs, IP addresses, and request
              metadata as part of delivering web pages to your browser.
            </li>
            <li>
              <strong className="text-foreground">Database (Supabase)</strong> — we use Supabase to
              store tool data, pricing information, and other structured content that powers our
              comparison pages. Newsletter subscriber email addresses may also be stored securely in
              our database.
            </li>
            <li>
              <strong className="text-foreground">Analytics provider</strong> — we use a
              privacy-focused analytics service to collect anonymous, aggregate site usage data. No
              personally identifiable information is collected through our analytics.
            </li>
            <li>
              <strong className="text-foreground">Email service provider</strong> — we use an email
              delivery service to manage newsletter subscriptions and send transactional emails.
            </li>
            <li>
              <strong className="text-foreground">Affiliate networks</strong> — we participate in
              affiliate programs through networks such as Impact, PartnerStack, and direct vendor
              programs. When you click an affiliate link, these networks may collect referral data
              including your IP address, browser information, and the referring URL.
            </li>
          </ul>
          <p className="mt-2">
            We encourage you to review the privacy policies of these third-party services to
            understand how they handle your data.
          </p>
        </section>

        {/* ── 5. Affiliate Link Tracking ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">5. Affiliate Link Tracking</h2>
          <p>
            Sasanova earns revenue through affiliate commissions. When you click an outbound
            affiliate link (such as a &quot;Try [Tool]&quot; or &quot;Visit [Tool]&quot; button), you are redirected to
            the software vendor&apos;s website through an affiliate tracking link. During this process:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              The affiliate network or vendor may set a cookie on your device to attribute the
              referral to Sasanova.
            </li>
            <li>
              Referral data such as your IP address, browser information, and the page you clicked
              from may be transmitted to the affiliate network.
            </li>
            <li>
              If you subsequently purchase a paid plan from the vendor within the cookie window
              (typically 30 to 90 days), we may receive a commission.
            </li>
            <li>
              You pay the same price regardless of whether you use our affiliate link or visit the
              vendor directly. Commissions are paid by the vendor from their marketing budget.
            </li>
          </ul>
          <p className="mt-2">
            For full details on our affiliate relationships, see our{" "}
            <Link href="/disclosure" className="text-accent hover:underline">
              Advertiser Disclosure
            </Link>
            .
          </p>
        </section>

        {/* ── 6. Data Retention ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">6. Data Retention</h2>
          <p>
            We retain your personal information only for as long as is necessary to fulfill the
            purposes outlined in this Privacy Policy, unless a longer retention period is required
            or permitted by law.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Newsletter subscriber data</strong> — retained for
              as long as you remain subscribed. If you unsubscribe, your email address is removed
              from our active mailing list within 30 days. Anonymized engagement metrics may be
              retained in aggregate.
            </li>
            <li>
              <strong className="text-foreground">Analytics data</strong> — retained in aggregate,
              anonymized form. Analytics data is not linked to individual users and does not contain
              personally identifiable information.
            </li>
            <li>
              <strong className="text-foreground">Correspondence</strong> — emails and messages you
              send to us may be retained for up to 24 months to address ongoing inquiries and
              improve our services, after which they are deleted.
            </li>
            <li>
              <strong className="text-foreground">Server logs</strong> — automatically generated
              server logs are retained by our hosting provider for a limited period (typically 30
              days) for security and diagnostic purposes.
            </li>
          </ul>
        </section>

        {/* ── 7. Your Rights ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">7. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal
            information. We are committed to honoring these rights regardless of where you reside.
          </p>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            7.1 Rights Available to All Users
          </h3>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Unsubscribe</strong> — you may unsubscribe from
              our newsletter at any time using the unsubscribe link included in every email we send.
            </li>
            <li>
              <strong className="text-foreground">Access</strong> — you may request a copy of any
              personal data we hold about you.
            </li>
            <li>
              <strong className="text-foreground">Deletion</strong> — you may request that we delete
              your personal information from our records.
            </li>
            <li>
              <strong className="text-foreground">Correction</strong> — you may request that we
              correct any inaccurate personal data we hold about you.
            </li>
            <li>
              <strong className="text-foreground">Opt out of cookies</strong> — you may manage your
              cookie preferences through your browser settings at any time.
            </li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            7.2 Additional Rights Under the GDPR (EU/EEA Residents)
          </h3>
          <p>
            If you are a resident of the European Union or European Economic Area, you have
            additional rights under the General Data Protection Regulation (GDPR), including:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>The right to data portability (receiving your data in a structured, machine-readable format).</li>
            <li>The right to restrict processing of your personal data.</li>
            <li>The right to object to processing based on legitimate interests.</li>
            <li>The right to withdraw consent at any time where processing is based on consent.</li>
            <li>The right to lodge a complaint with a supervisory authority in your member state.</li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mt-4 mb-1">
            7.3 Additional Rights Under the CCPA (California Residents)
          </h3>
          <p>
            If you are a California resident, you have rights under the California Consumer Privacy
            Act (CCPA), including the right to know what personal information we collect and how it
            is used, the right to request deletion of your personal information, and the right to
            opt out of the sale of your personal information. We do not sell personal information.
          </p>

          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <strong className="text-foreground">privacy@sasanova.com</strong>. We will respond to
            verified requests within 30 days, or within the timeframe required by applicable law.
          </p>
        </section>

        {/* ── 8. Children's Privacy ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">8. Children&apos;s Privacy</h2>
          <p>
            The Site is not intended for use by children under the age of 13. We do not knowingly
            collect personal information from children under 13. If we become aware that we have
            inadvertently collected personal data from a child under 13, we will take steps to
            delete that information as promptly as possible. If you are a parent or guardian and
            believe that your child has provided us with personal information, please contact us at
            privacy@sasanova.com so that we can take appropriate action.
          </p>
        </section>

        {/* ── 9. International Data Transfers ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">9. International Data Transfers</h2>
          <p>
            Sasanova is operated from the United States. If you access the Site from outside the
            United States, please be aware that your information may be transferred to, stored, and
            processed in the United States or other countries where our service providers maintain
            facilities. Data protection laws in these jurisdictions may differ from those in your
            country of residence. By using the Site, you consent to the transfer of your information
            to the United States and other jurisdictions as described in this Privacy Policy. Where
            required by applicable law, we implement appropriate safeguards such as standard
            contractual clauses to protect your data during international transfers.
          </p>
        </section>

        {/* ── 10. Security Measures ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">10. Security Measures</h2>
          <p>
            We take the security of your information seriously and implement reasonable
            administrative, technical, and physical safeguards to protect your personal data against
            unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Encrypted data transmission via HTTPS/TLS across the entire Site.</li>
            <li>Access controls that restrict data access to authorized personnel only.</li>
            <li>Secure storage of subscriber data in encrypted databases.</li>
            <li>Regular review of our data collection, storage, and processing practices.</li>
          </ul>
          <p className="mt-2">
            However, no method of transmission over the internet or method of electronic storage is
            100% secure. While we strive to use commercially acceptable means to protect your
            personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        {/* ── 11. Changes to This Policy ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technologies, legal requirements, or other factors. When we make material changes, we
            will update the &quot;Last updated&quot; date at the top of this page. We encourage you to review
            this Privacy Policy periodically to stay informed about how we are protecting your
            information. Your continued use of the Site after any changes to this Privacy Policy
            constitutes your acceptance of the updated policy.
          </p>
        </section>

        {/* ── 12. Contact Information ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">12. Contact Information</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our
            data practices, please contact us:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Email:</strong> privacy@sasanova.com
            </li>
            <li>
              <strong className="text-foreground">Subject line:</strong> Privacy Policy Inquiry
            </li>
          </ul>
          <p className="mt-3">
            For details on our editorial practices and how we maintain independence from affiliate
            partners, see our{" "}
            <Link href="/about/editorial-policy" className="text-accent hover:underline">
              Editorial Policy
            </Link>
            . For details on our affiliate relationships, see our{" "}
            <Link href="/disclosure" className="text-accent hover:underline">
              Advertiser Disclosure
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
