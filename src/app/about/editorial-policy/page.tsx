import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Independence Policy",
  description:
    "How Sasanova maintains editorial independence — our scoring methodology, update process, and vendor correction workflow.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">
        Editorial Independence Policy
      </h1>
      <p className="text-sm text-muted mb-8">
        How we keep editorial integrity at the center of everything we publish.
      </p>

      <div className="prose-sm space-y-6 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            Affiliate Status Does Not Influence Ratings
          </h2>
          <p>
            Every tool on Sasanova is evaluated using the same multi-axis scoring methodology,
            regardless of whether we have an affiliate relationship with the vendor. Tools without
            affiliate programs can (and do) outrank tools with affiliate programs. Our editorial team
            does not know which tools have active affiliate partnerships at the time of scoring.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Multi-Axis Scoring Methodology</h2>
          <p>
            We score every tool across six independent axes, each rated 1-10:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong className="text-foreground">Value (25%)</strong> — bang for the buck relative
              to category peers.
            </li>
            <li>
              <strong className="text-foreground">Ease of Use (15%)</strong> — learning curve, UX
              quality, and onboarding experience.
            </li>
            <li>
              <strong className="text-foreground">Power (20%)</strong> — feature depth, capability
              breadth, and extensibility.
            </li>
            <li>
              <strong className="text-foreground">Setup Friction (10%)</strong> — how quickly you
              can go from signup to productive use.
            </li>
            <li>
              <strong className="text-foreground">Migration Ease (10%)</strong> — how easy it is to
              switch to this tool from alternatives.
            </li>
            <li>
              <strong className="text-foreground">Transparency (20%)</strong> — pricing clarity, data
              export options, API openness, and honest communication.
            </li>
          </ul>
          <p className="mt-2">
            The overall score is a weighted average of these axes. For full details, see our{" "}
            <Link href="/about/methodology" className="text-accent hover:underline">
              Scoring Methodology
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Update and Verification Process</h2>
          <p>
            We re-verify all tool data on a regular cadence. Each tool listing includes a
            &quot;Last verified&quot; date showing when the data was last confirmed. Our verification process
            includes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Checking the vendor&apos;s official pricing page for current plan details.</li>
            <li>Testing the free tier or trial experience where available.</li>
            <li>Reviewing release notes and changelogs for feature changes.</li>
            <li>Updating scores when significant changes warrant re-evaluation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Vendor Correction Workflow</h2>
          <p>
            We welcome corrections from software vendors. If a vendor believes our data is inaccurate,
            we follow this process:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 mt-2">
            <li>
              The vendor submits a correction request with supporting evidence (screenshots,
              documentation links, or official pricing pages).
            </li>
            <li>
              Our editorial team independently verifies the claim against official sources.
            </li>
            <li>
              If the correction is valid, we update the data and note the change. If we disagree, we
              explain our reasoning.
            </li>
            <li>
              Vendor corrections never result in score changes unless the underlying data (pricing,
              features, limits) has genuinely changed.
            </li>
          </ol>
          <p className="mt-2">
            Vendors cannot pay to change their scores, rankings, or editorial coverage.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Related Policies</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <Link href="/about/methodology" className="text-accent hover:underline">
                Scoring Methodology
              </Link>
            </li>
            <li>
              <Link href="/about/source-policy" className="text-accent hover:underline">
                Source &amp; Data Policy
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
