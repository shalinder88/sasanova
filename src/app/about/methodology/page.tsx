import type { Metadata } from "next";
import Link from "next/link";
import ScoreBar from "@/components/ScoreBar";

export const metadata: Metadata = {
  title: "Scoring Methodology",
  description:
    "How Sasanova scores software tools — our 6 scoring axes, weighted overall score formula, and minimum quality thresholds for publication.",
};

export default function MethodologyPage() {
  const axes = [
    {
      name: "Value",
      weight: "25%",
      description:
        "Bang for the buck. How does the pricing compare to what you actually get? We consider free tier generosity, price-to-feature ratio, and how costs scale as you grow.",
      example: 8,
    },
    {
      name: "Ease of Use",
      weight: "15%",
      description:
        "Learning curve and UX quality. How quickly can a new user become productive? We evaluate onboarding flows, documentation quality, interface clarity, and day-to-day usability.",
      example: 7,
    },
    {
      name: "Power",
      weight: "20%",
      description:
        "Feature depth and capability breadth. How much can you accomplish with this tool? We assess the range of features, depth of customization, API capabilities, and extensibility.",
      example: 9,
    },
    {
      name: "Setup Friction",
      weight: "10%",
      description:
        "How quickly you can go from signup to productive use. A score of 10 means you are up and running in minutes. A score of 1 means extensive configuration, integrations, or training is required before the tool is useful.",
      example: 6,
    },
    {
      name: "Migration Ease",
      weight: "10%",
      description:
        "How easy it is to switch to this tool from an alternative. We consider data import capabilities, migration documentation, onboarding support, and compatibility with common data formats.",
      example: 5,
    },
    {
      name: "Transparency",
      weight: "20%",
      description:
        "Pricing clarity, data export options, API openness, and honest communication. A tool that hides pricing, locks in your data, or makes it difficult to understand what you are paying scores low. Open-source tools and those with clear, public pricing score high.",
      example: 8,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2">Scoring Methodology</h1>
      <p className="text-sm text-muted mb-8">
        How we evaluate and score every tool on Sasanova.
      </p>

      <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
        {/* The 6 Axes */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">The 6 Scoring Axes</h2>
          <p className="mb-4">
            Every tool is independently scored on six axes, each rated from 1 (worst) to 10 (best).
            These axes capture different dimensions of software quality so that a single number
            does not flatten important nuances.
          </p>

          <div className="space-y-4">
            {axes.map((axis) => (
              <div key={axis.name} className="border border-border rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-foreground">
                    {axis.name}{" "}
                    <span className="font-normal text-muted">({axis.weight} weight)</span>
                  </h3>
                </div>
                <p className="mb-3">{axis.description}</p>
                <ScoreBar label={axis.name} value={axis.example} />
              </div>
            ))}
          </div>
        </section>

        {/* Weighted Overall Score */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Weighted Overall Score Formula
          </h2>
          <p>
            The overall score is a weighted average of all six axes, rounded to one decimal place:
          </p>
          <div className="mt-3 border border-border rounded-xl p-5 bg-surface font-mono text-xs leading-loose">
            <p>Overall = (</p>
            <p className="pl-4">Value x 0.25 +</p>
            <p className="pl-4">Ease x 0.15 +</p>
            <p className="pl-4">Power x 0.20 +</p>
            <p className="pl-4">SetupFriction x 0.10 +</p>
            <p className="pl-4">MigrationEase x 0.10 +</p>
            <p className="pl-4">Transparency x 0.20</p>
            <p>)</p>
          </div>
          <p className="mt-3">
            This weighting emphasizes <strong className="text-foreground">Value</strong> (25%),{" "}
            <strong className="text-foreground">Power</strong> (20%), and{" "}
            <strong className="text-foreground">Transparency</strong> (20%) as the most important
            factors, while still accounting for usability, setup experience, and migration
            considerations.
          </p>
        </section>

        {/* Publish Gate */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">
            Publish Gate (Quality Thresholds)
          </h2>
          <p>
            Before a tool listing is published on Sasanova, it must meet minimum quality thresholds
            to ensure our data is useful and trustworthy:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-3">
            <li>
              <strong className="text-foreground">Complete pricing data</strong> — all publicly
              available plans must be documented with monthly and annual pricing.
            </li>
            <li>
              <strong className="text-foreground">All six axes scored</strong> — no axis can be left
              unscored. If we cannot evaluate an axis, we note the limitation.
            </li>
            <li>
              <strong className="text-foreground">At least one primary source</strong> — every data
              point must trace back to an official vendor source or direct testing.
            </li>
            <li>
              <strong className="text-foreground">Provenance labeled</strong> — every listing must
              have its provenance level clearly indicated (independently verified, vendor-claimed, or
              community-reported).
            </li>
            <li>
              <strong className="text-foreground">Last verified date</strong> — data must be verified
              within the past 90 days to remain published.
            </li>
          </ul>
          <p className="mt-3">
            Listings that fall below these thresholds are either held from publication or marked with
            a reduced-confidence indicator.
          </p>
        </section>

        {/* Related Policies */}
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Related Policies</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <Link href="/about/editorial-policy" className="text-accent hover:underline">
                Editorial Independence Policy
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
