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
      <p className="text-sm text-muted mb-8">Effective date: March 24, 2026</p>

      <div className="prose-sm space-y-6 text-sm leading-relaxed text-muted">
        <section>
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of sasanova.com (the
            &quot;Site&quot;), operated by Sasanova (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Please read these Terms
            carefully before using the Site. By accessing or using the Site, you agree to be bound
            by these Terms. If you do not agree, you must not use the Site.
          </p>
        </section>

        {/* ── 1. Acceptance of Terms ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, or otherwise using the Site, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and our{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            , which is incorporated herein by reference. If you are using the Site on behalf of an
            organization, you represent and warrant that you have the authority to bind that
            organization to these Terms. We reserve the right to modify these Terms at any time, and
            your continued use of the Site following any modifications constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        {/* ── 2. Description of Service ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">2. Description of Service</h2>
          <p>
            Sasanova is a software comparison and review platform. We provide editorial content
            including software reviews, feature comparisons, pricing breakdowns, scoring, category
            rankings, and informational guides designed to help users evaluate and select software
            tools. The Site is an informational resource and does not sell, license, or distribute
            software directly. All content on the Site is provided for general informational and
            educational purposes only.
          </p>
          <p className="mt-2">
            We are not a marketplace, broker, or reseller. When you click an outbound link to a
            software vendor, you leave the Site and interact directly with that vendor under their
            own terms and conditions.
          </p>
        </section>

        {/* ── 3. User Conduct ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">3. User Conduct</h2>
          <p>
            You agree to use the Site only for lawful purposes and in accordance with these Terms.
            Specifically, you agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Use the Site for any purpose that is unlawful or prohibited by these Terms.</li>
            <li>
              Scrape, crawl, spider, or use automated tools to extract data from the Site beyond
              what is expressly permitted by our robots.txt file.
            </li>
            <li>
              Reproduce, duplicate, copy, sell, resell, or otherwise exploit any portion of the Site
              or its content for commercial purposes without our prior written consent.
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the Site, other accounts,
              computer systems, or networks connected to the Site through hacking, password mining,
              or any other means.
            </li>
            <li>
              Introduce any viruses, Trojan horses, worms, or other material that is malicious or
              technologically harmful to the Site or its users.
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the Site or its underlying
              infrastructure.
            </li>
            <li>
              Misrepresent your identity, affiliation, or the origin of any material you transmit to
              or through the Site.
            </li>
            <li>
              Use the Site to transmit unsolicited advertising, promotional materials, spam, or any
              other form of solicitation.
            </li>
          </ul>
          <p className="mt-2">
            We reserve the right to restrict or terminate your access to the Site at our sole
            discretion, without notice, for conduct that we believe violates these Terms or is
            harmful to other users, us, or third parties.
          </p>
        </section>

        {/* ── 4. Intellectual Property ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">4. Intellectual Property</h2>
          <p>
            All content on the Site, including but not limited to text, editorial copy, graphics,
            logos, icons, images, scoring methodologies, data compilations, page layouts, and
            software, is the property of Sasanova or its content licensors and is protected by
            United States and international copyright, trademark, and other intellectual property
            laws.
          </p>
          <p className="mt-2">
            You may not reproduce, distribute, modify, create derivative works from, publicly
            display, publicly perform, republish, download, store, or transmit any content from the
            Site without our prior written consent, except for temporary caching or as permitted by
            applicable law for personal, non-commercial use.
          </p>
          <p className="mt-2">
            Product names, logos, brand names, and trademarks displayed on the Site belong to their
            respective owners and are used solely for identification and informational purposes.
            Their appearance on the Site does not imply endorsement by or affiliation with Sasanova.
            Tool data, including pricing and feature information, is sourced from first-party vendor
            websites and official documentation.
          </p>
        </section>

        {/* ── 5. Disclaimer of Warranties ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">5. Disclaimer of Warranties</h2>
          <p>
            THE SITE AND ALL CONTENT, MATERIALS, INFORMATION, AND SERVICES PROVIDED ON THE SITE ARE
            PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER
            EXPRESS OR IMPLIED.
          </p>
          <p className="mt-2">
            To the fullest extent permitted by applicable law, we disclaim all warranties, express
            or implied, including but not limited to implied warranties of merchantability, fitness
            for a particular purpose, title, and non-infringement.
          </p>
          <p className="mt-2">
            Without limiting the foregoing, we do not warrant that:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>The Site will be available at all times or operate without interruption or error.</li>
            <li>The content on the Site is accurate, complete, current, or reliable.</li>
            <li>Any defects or errors on the Site will be corrected.</li>
            <li>The Site is free of viruses or other harmful components.</li>
          </ul>
          <p className="mt-2">
            The information on this Site is provided for educational and informational purposes
            only. We are not financial advisors, legal advisors, or licensed professionals.
            Content on the Site does not constitute professional, financial, legal, or technical
            advice. Software purchasing and licensing decisions should be made based on your own
            independent evaluation and, where appropriate, consultation with qualified
            professionals.
          </p>
        </section>

        {/* ── 6. Limitation of Liability ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">6. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SASANOVA, ITS
            OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
            LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN
            CONNECTION WITH:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Your access to, use of, or inability to access or use the Site.</li>
            <li>Any content, information, or recommendations obtained from the Site.</li>
            <li>Any conduct or content of any third party on or linked from the Site.</li>
            <li>Unauthorized access, use, or alteration of your data or transmissions.</li>
            <li>Any errors, omissions, or inaccuracies in the content on the Site.</li>
          </ul>
          <p className="mt-2">
            In no event shall our total aggregate liability to you for all claims arising from or
            related to the Site exceed one hundred United States dollars (US $100.00). This
            limitation applies whether the alleged liability is based on contract, tort, negligence,
            strict liability, or any other basis, even if we have been advised of the possibility of
            such damages.
          </p>
        </section>

        {/* ── 7. Affiliate Relationships ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">7. Affiliate Relationships</h2>
          <p>
            Sasanova participates in affiliate programs with various software vendors and affiliate
            networks. Some links on the Site are affiliate links, which means we may earn a
            commission if you click through and make a qualifying purchase from a vendor. For
            complete details, see our{" "}
            <Link href="/disclosure" className="text-accent hover:underline">
              Advertiser Disclosure
            </Link>
            .
          </p>
          <p className="mt-2">
            Our affiliate relationships do not affect our editorial independence. Scores, rankings,
            and editorial assessments are determined independently of affiliate status. Tools with
            affiliate partnerships receive the same evaluation methodology as tools without
            partnerships. The presence or absence of an affiliate relationship with a vendor does
            not influence whether we review a tool, how we score it, or where it appears in our
            rankings.
          </p>
        </section>

        {/* ── 8. Third-Party Links ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">8. Third-Party Links</h2>
          <p>
            The Site contains links to third-party websites, products, and services that are not
            owned or controlled by Sasanova. We provide these links for your convenience and
            reference only. We have no control over, and assume no responsibility for, the content,
            privacy policies, practices, or terms of service of any third-party websites or
            services.
          </p>
          <p className="mt-2">
            You acknowledge and agree that Sasanova shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by or in connection
            with your use of or reliance on any content, goods, or services available on or through
            any third-party websites. We strongly encourage you to read the terms and conditions
            and privacy policy of any third-party website you visit.
          </p>
        </section>

        {/* ── 9. Accuracy of Information ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">9. Accuracy of Information</h2>
          <p>
            We strive to provide accurate, up-to-date information about the software tools we review
            and compare. However, software products are subject to frequent changes in pricing,
            features, terms, and availability. Information on the Site may not reflect the most
            current version of a product at the time you view it.
          </p>
          <p className="mt-2">
            We source our data from first-party vendor websites and official documentation (see our{" "}
            <Link href="/about/source-policy" className="text-accent hover:underline">
              Source Policy
            </Link>
            ), and we update our content regularly. However, we cannot guarantee that all
            information is accurate, complete, or current at any given moment. You should always
            verify pricing, features, terms, and availability directly with the software vendor
            before making a purchasing decision.
          </p>
        </section>

        {/* ── 10. Indemnification ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Sasanova, its officers, directors,
            employees, agents, and affiliates from and against any and all claims, damages,
            obligations, losses, liabilities, costs, or expenses (including reasonable
            attorneys&apos; fees) arising from or related to: (a) your use of and access to the
            Site; (b) your violation of any provision of these Terms; (c) your violation of any
            third-party right, including any intellectual property, privacy, or proprietary right;
            or (d) any claim that your use of the Site caused damage to a third party. This
            indemnification obligation will survive the termination of these Terms and your use of
            the Site.
          </p>
        </section>

        {/* ── 11. Governing Law ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State
            of Delaware, United States, without regard to its conflict-of-law provisions. Any legal
            action or proceeding arising under these Terms shall be brought exclusively in the
            federal or state courts located in the State of Delaware, and you hereby consent to the
            personal jurisdiction and venue of such courts.
          </p>
        </section>

        {/* ── 12. Severability ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">12. Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid, illegal, or unenforceable by a
            court of competent jurisdiction, the remaining provisions shall continue in full force
            and effect. The invalid, illegal, or unenforceable provision shall be modified to the
            minimum extent necessary to make it valid, legal, and enforceable while preserving its
            original intent, or if such modification is not possible, it shall be severed from these
            Terms.
          </p>
        </section>

        {/* ── 13. Changes to Terms ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">13. Changes to Terms</h2>
          <p>
            We reserve the right to modify, amend, or replace these Terms at any time at our sole
            discretion. When we make material changes, we will update the &quot;Effective date&quot; at the
            top of this page. It is your responsibility to review these Terms periodically for
            changes. Your continued use of the Site following the posting of revised Terms means
            that you accept and agree to the changes. If you do not agree to the revised Terms, you
            must stop using the Site.
          </p>
        </section>

        {/* ── 14. Contact Information ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">14. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms of Use, please contact us:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Email:</strong> legal@sasanova.com
            </li>
            <li>
              <strong className="text-foreground">Subject line:</strong> Terms of Use Inquiry
            </li>
          </ul>
          <p className="mt-3">
            For privacy-related inquiries, see our{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            . For questions about our affiliate relationships, see our{" "}
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
