import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Source & Data Policy",
  description:
    "How Sasanova sources, verifies, and categorizes data — our three provenance types and editorial standards for accuracy.",
};

export default function SourcePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Source &amp; Data Policy</h1>
      <p className="text-sm text-muted mb-8">
        How we source, verify, and label the data behind every tool listing.
      </p>

      <div className="prose-sm space-y-6 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Three Provenance Types</h2>
          <p>
            Every data point on Sasanova is labeled with one of three provenance levels so you know
            how much confidence to place in it:
          </p>
          <div className="mt-3 space-y-3">
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-success" />
                <h3 className="text-sm font-bold text-foreground">Independently Verified</h3>
              </div>
              <p>
                Data confirmed by our editorial team through direct testing, official vendor
                documentation, or publicly verifiable sources. This is our highest confidence level.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-warning" />
                <h3 className="text-sm font-bold text-foreground">Vendor-Claimed</h3>
              </div>
              <p>
                Data sourced from the vendor&apos;s official materials (pricing pages, marketing
                content, press releases) but not independently verified through testing. We label it
                clearly so you can judge accordingly.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <h3 className="text-sm font-bold text-foreground">Community-Reported</h3>
              </div>
              <p>
                Data contributed by users, reported in forums, or gathered from community sources.
                We include this data when it fills gaps but always label it with lower confidence.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">What Sources We Use</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-foreground">Official vendor websites</strong> — pricing pages,
              feature documentation, help centers, and changelogs.
            </li>
            <li>
              <strong className="text-foreground">Official documentation and API docs</strong> — for
              verifying features, limits, and integration capabilities.
            </li>
            <li>
              <strong className="text-foreground">Direct product testing</strong> — we sign up for
              free tiers and trials to verify the onboarding experience, feature availability, and
              UX quality.
            </li>
            <li>
              <strong className="text-foreground">Public release notes and changelogs</strong> — to
              track feature additions, removals, and pricing changes over time.
            </li>
            <li>
              <strong className="text-foreground">Vendor communications</strong> — when vendors
              submit corrections or provide clarifications (see our{" "}
              <Link href="/about/editorial-policy" className="text-accent hover:underline">
                Editorial Policy
              </Link>{" "}
              for the correction workflow).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">What We Do NOT Do</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong className="text-foreground">We do not scrape competitors.</strong> Our data is
              sourced from primary vendor sources and our own testing, never from other review sites.
            </li>
            <li>
              <strong className="text-foreground">We do not copy reviews.</strong> All editorial
              content is original. We do not republish or paraphrase reviews from other platforms.
            </li>
            <li>
              <strong className="text-foreground">
                We do not use unverifiable anonymous tips.
              </strong>{" "}
              Community-reported data must be corroborated by at least one additional source before
              inclusion.
            </li>
            <li>
              <strong className="text-foreground">We do not accept paid placements.</strong> Vendors
              cannot pay to appear on the site, influence their position, or alter their scores.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Verification Cadence</h2>
          <p>
            Every tool listing displays a &quot;Last verified&quot; date. We aim to re-verify all active
            listings at least once per quarter. High-traffic comparisons and tools with frequent
            pricing changes may be verified more often.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Related Policies</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <Link href="/about/editorial-policy" className="text-accent hover:underline">
                Editorial Independence Policy
              </Link>
            </li>
            <li>
              <Link href="/about/methodology" className="text-accent hover:underline">
                Scoring Methodology
              </Link>
            </li>
            <li>
              <Link href="/disclosure" className="text-accent hover:underline">
                Advertiser Disclosure
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
