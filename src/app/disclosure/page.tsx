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
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Advertiser Disclosure</h1>
      <p className="text-sm text-muted mb-8">Last updated: March 2026</p>

      <div className="prose-sm space-y-6 text-sm leading-relaxed text-muted">
        <section>
          <p>
            Transparency is fundamental to everything we do at Sasanova. This Advertiser Disclosure
            explains how we earn revenue, how our affiliate relationships work, and why those
            relationships have no influence on our editorial content, scores, or rankings. We
            believe you deserve to understand the business model behind the recommendations you
            read, so we are fully transparent about it here.
          </p>
        </section>

        {/* ── 1. How Sasanova Makes Money ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">1. How Sasanova Makes Money</h2>
          <p>
            Sasanova is a free-to-use, independent software comparison platform. We earn revenue
            primarily through SaaS affiliate commissions. Here is how it works:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              We review and compare software tools across multiple categories, providing scores,
              pricing breakdowns, feature comparisons, and editorial assessments.
            </li>
            <li>
              When you click certain outbound links on our Site (such as &quot;Try [Tool]&quot; or &quot;Visit
              [Tool]&quot; buttons) and subsequently sign up for a paid plan with the software vendor, we
              may receive a commission from that vendor.
            </li>
            <li>
              Commissions are paid to us by the software vendor from their marketing budget. You
              pay the same price whether you use our link or visit the vendor directly. There is no
              markup, surcharge, or additional cost to you.
            </li>
            <li>
              Depending on the vendor&apos;s program, commissions may be one-time payments or recurring
              payments for the duration of your subscription.
            </li>
          </ul>
          <p className="mt-2">
            These affiliate commissions are our primary revenue source and allow us to operate the
            Site, maintain our editorial team, keep our data current, and provide all of our
            content free of charge to every user. We participate in affiliate programs through
            networks such as Impact, PartnerStack, and direct partner programs offered by individual
            software vendors.
          </p>
        </section>

        {/* ── 2. What This Means For You ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">2. What This Means for You</h2>
          <p>
            <strong className="text-foreground">
              When you click links to tools on our Site and sign up for a paid plan, we may earn a
              commission from the software provider at no extra cost to you.
            </strong>
          </p>
          <p className="mt-2">
            This financial relationship exists between Sasanova and the software vendor. It does not
            affect the price you pay, the features you receive, or the terms of your subscription
            with the vendor. Your relationship with the software provider is governed entirely by
            that provider&apos;s own terms of service, privacy policy, and pricing.
          </p>
          <p className="mt-2">
            Our recommendations are based on thorough editorial evaluation, not on which tools pay
            us the most. We regularly recommend tools that have no affiliate relationship with us
            when they are the best option in their category. You will always see the same honest
            assessments regardless of our financial relationships with vendors.
          </p>
        </section>

        {/* ── 3. Which Links Earn Commissions ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            3. Which Links Earn Commissions
          </h2>
          <p>
            The following types of links on our Site may be affiliate links that earn us a
            commission if you click through and make a qualifying purchase:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">&quot;Try [Tool]&quot; and &quot;Visit [Tool]&quot; buttons</strong> —
              found on individual tool review pages, comparison pages, best-of category lists, and
              alternatives pages.
            </li>
            <li>
              <strong className="text-foreground">&quot;Start free trial&quot; and &quot;Sign up&quot; links</strong> —
              found on pricing breakdown pages and within editorial content.
            </li>
            <li>
              <strong className="text-foreground">Comparison call-to-action buttons</strong> — found
              on side-by-side comparison pages where we link to each tool being compared.
            </li>
          </ul>
          <p className="mt-2">
            All affiliate links are marked with{" "}
            <code className="text-xs bg-surface-alt px-1 py-0.5 rounded">rel=&quot;sponsored&quot;</code>{" "}
            in our HTML markup, in compliance with search engine guidelines and FTC requirements.
          </p>
        </section>

        {/* ── 4. Which Links Do NOT Earn Commissions ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            4. Which Links Do NOT Earn Commissions
          </h2>
          <p>
            The following types of links on our Site are never affiliate links and do not generate
            revenue for us:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Internal navigation links</strong> — links to
              other pages within Sasanova, including our reviews, comparisons, pricing pages,
              category pages, and editorial content.
            </li>
            <li>
              <strong className="text-foreground">Category browsing links</strong> — links within
              our category navigation and sidebar menus.
            </li>
            <li>
              <strong className="text-foreground">Editorial cross-references</strong> — links
              within articles that reference other Sasanova content, such as methodology
              explanations, source policies, or related reviews.
            </li>
            <li>
              <strong className="text-foreground">Legal and policy pages</strong> — links to our
              Privacy Policy, Terms of Use, Editorial Policy, and this Advertiser Disclosure.
            </li>
            <li>
              <strong className="text-foreground">Non-partnered vendor links</strong> — when we link
              to a vendor&apos;s website and do not have an affiliate relationship with them, those
              links are standard outbound links that do not earn commissions.
            </li>
          </ul>
        </section>

        {/* ── 5. Our Editorial Independence Commitment ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            5. Our Editorial Independence Commitment
          </h2>
          <p>
            Sasanova maintains a strict separation between our editorial operations and our business
            relationships. Our editorial independence is built on the following principles:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Rankings are never sold.</strong> No vendor can pay
              for a higher score, a better ranking position, or more favorable editorial coverage.
              Our scores are calculated using a consistent, multi-axis methodology applied equally
              to all tools.
            </li>
            <li>
              <strong className="text-foreground">Affiliate status does not affect scores.</strong>{" "}
              Whether or not a tool has an affiliate program with us has zero influence on its score,
              placement, or editorial treatment. Tools without affiliate partnerships can and do
              outrank tools that have partnerships.
            </li>
            <li>
              <strong className="text-foreground">We review non-partnered tools.</strong> We include
              tools in our reviews and comparisons based on their relevance and quality, not on
              whether they offer affiliate commissions. Many tools we recommend have no financial
              relationship with us.
            </li>
            <li>
              <strong className="text-foreground">No pay-for-placement.</strong> Vendors cannot pay
              to appear on the Site, to be included in a comparison, or to be featured in a best-of
              list. Inclusion is determined solely by editorial criteria.
            </li>
            <li>
              <strong className="text-foreground">We highlight weaknesses honestly.</strong> Even
              for tools that are affiliate partners, our reviews include honest assessments of
              limitations, drawbacks, and scenarios where a different tool may be a better fit.
            </li>
          </ul>
          <p className="mt-2">
            For a comprehensive description of our editorial standards, see our{" "}
            <Link href="/about/editorial-policy" className="text-accent hover:underline">
              Editorial Independence Policy
            </Link>
            .
          </p>
        </section>

        {/* ── 6. How We Score Tools ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">6. How We Score Tools</h2>
          <p>
            Every tool on Sasanova is evaluated using a structured, multi-axis scoring methodology.
            We assess tools across consistent criteria including features, ease of use, pricing
            value, integrations, support quality, and scalability. Each axis is weighted and scored
            independently to produce an overall composite score.
          </p>
          <p className="mt-2">
            Our scoring process is designed to be objective, repeatable, and transparent. The same
            methodology is applied regardless of whether a tool has an affiliate relationship with
            us. For complete details on our scoring framework, criteria definitions, and weighting
            methodology, see our{" "}
            <Link href="/about/methodology" className="text-accent hover:underline">
              Scoring Methodology
            </Link>
            .
          </p>
        </section>

        {/* ── 7. How We Select Tools to Review ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            7. How We Select Tools to Review
          </h2>
          <p>
            We select tools for review based on editorial criteria, including market relevance,
            category demand, user interest, and product quality. Our selection process is not
            influenced by affiliate relationships or revenue potential. Specifically:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">First-party data only.</strong> All tool data,
              including pricing, features, and capabilities, is sourced from official vendor
              websites, published documentation, and first-party sources. We do not use
              unverified third-party data.
            </li>
            <li>
              <strong className="text-foreground">No pay-for-review.</strong> Vendors cannot pay to
              be reviewed. We decide which tools to cover based on editorial judgment and user
              demand within each software category.
            </li>
            <li>
              <strong className="text-foreground">Comprehensive coverage.</strong> Within each
              category, we aim to cover the most relevant and widely-used tools, including both
              established market leaders and promising emerging products, regardless of affiliate
              availability.
            </li>
          </ul>
          <p className="mt-2">
            For full details on our data sourcing standards, see our{" "}
            <Link href="/about/source-policy" className="text-accent hover:underline">
              Source Policy
            </Link>
            .
          </p>
        </section>

        {/* ── 8. Affiliate Program Partners ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            8. Affiliate Programs
          </h2>
          <p>
            We participate in affiliate programs offered by software vendors. When you click
            certain links on our site and make a purchase, we may earn a commission. We are
            currently enrolled in the following programs:
          </p>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5">
            <span>Shopify</span>
            <span>beehiiv</span>
          </div>
          <p className="mt-3 text-sm text-muted">
            We are in the process of applying to additional affiliate programs. This list will be
            updated as new partnerships are approved. Tools not linked to an affiliate program
            are included purely for editorial completeness.
          </p>
          <p className="mt-3">
            This list changes over time as we establish new partnerships and as existing programs
            are modified or discontinued. The presence of a vendor on this list does not guarantee
            that all links to that vendor are affiliate links. Some links to partnered vendors may
            be standard editorial links that do not earn commissions.
          </p>
          <p className="mt-2">
            Conversely, the absence of a vendor from this list does not mean we do not review or
            recommend them. We review many tools that are not affiliate partners and recommend them
            when they are the best option in their category.
          </p>
        </section>

        {/* ── 9. How Affiliate Links Work ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">9. How Affiliate Links Work</h2>
          <p>
            When you click an affiliate link on our Site, the following process occurs:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              You are redirected from Sasanova to the software vendor&apos;s website through a tracking
              URL provided by the affiliate network or the vendor&apos;s direct partner program.
            </li>
            <li>
              During this redirect, a cookie or tracking parameter is set to record that you were
              referred by Sasanova. This cookie is placed by the vendor or affiliate network, not
              by us.
            </li>
            <li>
              If you purchase a paid plan from the vendor within the cookie attribution window
              (typically 30 to 90 days, depending on the specific program), Sasanova may earn a
              one-time or recurring commission.
            </li>
            <li>
              You pay the same price regardless of whether you arrived at the vendor&apos;s website
              through our affiliate link or through any other means. Affiliate commissions are paid
              by the vendor from their marketing budget and are never passed on to you as a
              surcharge.
            </li>
          </ul>
        </section>

        {/* ── 10. FTC Compliance Statement ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">10. FTC Compliance Statement</h2>
          <p>
            In accordance with the Federal Trade Commission (FTC) Guides Concerning the Use of
            Endorsements and Testimonials in Advertising (16 CFR Part 255), Sasanova discloses the
            following:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              Sasanova has material financial relationships with some of the companies whose
              products are reviewed on this Site, in the form of affiliate commissions.
            </li>
            <li>
              This disclosure applies to all content on the Site, including reviews, comparisons,
              best-of lists, pricing pages, alternatives pages, and editorial articles.
            </li>
            <li>
              Our opinions, scores, and rankings are our own and are not dictated, influenced, or
              approved by any advertiser, affiliate partner, or third party.
            </li>
            <li>
              We strive to provide accurate, up-to-date, and honest information in all of our
              content, and we clearly identify affiliate links with the{" "}
              <code className="text-xs bg-surface-alt px-1 py-0.5 rounded">rel=&quot;sponsored&quot;</code>{" "}
              attribute in compliance with search engine and regulatory guidelines.
            </li>
          </ul>
          <p className="mt-2">
            We take our disclosure obligations seriously. If you believe any content on the Site is
            misleading or fails to adequately disclose a material relationship, please contact us
            immediately at disclosure@sasanova.com.
          </p>
        </section>

        {/* ── 11. Questions or Concerns ── */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">11. Questions or Concerns</h2>
          <p>
            We welcome questions about our affiliate relationships, editorial process, and business
            model. Transparency is a core value at Sasanova, and we are happy to provide additional
            information upon request.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Email:</strong> disclosure@sasanova.com
            </li>
            <li>
              <strong className="text-foreground">Subject line:</strong> Disclosure Inquiry
            </li>
          </ul>
          <p className="mt-3">
            You may also find the following pages helpful:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <Link href="/about/editorial-policy" className="text-accent hover:underline">
                Editorial Independence Policy
              </Link>{" "}
              — our full commitment to unbiased editorial content.
            </li>
            <li>
              <Link href="/about/methodology" className="text-accent hover:underline">
                Scoring Methodology
              </Link>{" "}
              — how we evaluate and score every tool.
            </li>
            <li>
              <Link href="/about/source-policy" className="text-accent hover:underline">
                Source Policy
              </Link>{" "}
              — how we collect and verify tool data.
            </li>
            <li>
              <Link href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>{" "}
              — how we handle your data and protect your privacy.
            </li>
            <li>
              <Link href="/terms" className="text-accent hover:underline">
                Terms of Use
              </Link>{" "}
              — the rules governing your use of the Site.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
