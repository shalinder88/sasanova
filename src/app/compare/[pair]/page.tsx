import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  tools,
  versusPairs,
  getToolBySlug,
  getVersusMatch,
  getOverallScore,
  type Tool,
  type ToolScore,
} from "@/data/tools";
import ScoreBar from "@/components/ScoreBar";
import { breadcrumbJsonLd, canonicalUrl } from "@/lib/seo";

/* ── Static generation ── */

export function generateStaticParams() {
  return versusPairs.map((vs) => ({
    pair: `${vs.slugA}-vs-${vs.slugB}`,
  }));
}

/* ── Helpers ── */

type PageProps = {
  params: Promise<{ pair: string }>;
};

function parseSlugs(pair: string): [string, string] | null {
  const idx = pair.indexOf("-vs-");
  if (idx === -1) return null;
  return [pair.slice(0, idx), pair.slice(idx + 4)];
}

function cheapestPaidPlan(tool: Tool): string {
  const paid = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  if (paid.length === 0) return "Free only";
  const cheapest = paid.sort((a, b) => (a.priceMonthly ?? 0) - (b.priceMonthly ?? 0))[0];
  return `$${cheapest.priceMonthly}/mo (${cheapest.name})`;
}

const scoreLabels: { key: keyof ToolScore; label: string }[] = [
  { key: "value", label: "Value for Money" },
  { key: "ease", label: "Ease of Use" },
  { key: "power", label: "Feature Power" },
  { key: "setupFriction", label: "Setup Ease" },
  { key: "migrationDifficulty", label: "Migration Ease" },
  { key: "transparency", label: "Transparency" },
];

function VerdictBadge({ verdict, toolA, toolB }: { verdict: string; toolA: Tool; toolB: Tool }) {
  if (verdict === "depends") {
    return (
      <span className="inline-block text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
        It Depends
      </span>
    );
  }
  const winner = verdict === toolA.slug ? toolA : verdict === toolB.slug ? toolB : null;
  return (
    <span className="inline-block text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
      {winner ? `${winner.name} Wins` : `${verdict} Wins`}
    </span>
  );
}

/* ── Metadata ── */

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pair } = await params;
  const slugs = parseSlugs(pair);
  if (!slugs) return { title: "Comparison Not Found" };

  const [slugA, slugB] = slugs;
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);
  if (!toolA || !toolB) return { title: "Comparison Not Found" };

  const title = `${toolA.name} vs ${toolB.name} — Detailed Comparison`;
  const description = `Compare ${toolA.name} and ${toolB.name} side by side. Pricing, features, scores, and an honest verdict to help you choose.`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl(`/compare/${pair}`) },
    openGraph: { title: `${title} | Sasanova`, description },
  };
}

/* ── Page ── */

export default async function ComparisonPage({ params }: PageProps) {
  const { pair } = await params;
  const slugs = parseSlugs(pair);
  if (!slugs) notFound();

  const [slugA, slugB] = slugs;
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);
  if (!toolA || !toolB) notFound();

  const vsMatch = getVersusMatch(slugA, slugB);
  const scoreA = getOverallScore(toolA.scores);
  const scoreB = getOverallScore(toolB.scores);

  const sharedFeatures = toolA.features.filter((f) =>
    toolB.features.some((bf) => bf.toLowerCase() === f.toLowerCase())
  );
  const uniqueA = toolA.features.filter(
    (f) => !toolB.features.some((bf) => bf.toLowerCase() === f.toLowerCase())
  );
  const uniqueB = toolB.features.filter(
    (f) => !toolA.features.some((af) => af.toLowerCase() === f.toLowerCase())
  );

  /* JSON-LD */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${toolA.name} vs ${toolB.name}`,
    description: vsMatch?.summary ?? `Comparison of ${toolA.name} and ${toolB.name}.`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: toolA.name,
        url: toolA.website,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: toolB.name,
        url: toolB.website,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Compare", path: "/compare" },
              { name: `${toolA.name} vs ${toolB.name}`, path: `/compare/${pair}` },
            ])
          ),
        }}
      />

      {/* Breadcrumbs */}
      <nav className="border-b border-border bg-surface" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1.5 text-xs text-muted">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/compare" className="hover:text-accent transition-colors">Compare</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium truncate">
              {toolA.name} vs {toolB.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Tool A */}
            <div className="text-center flex-1 max-w-xs">
              <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight">{toolA.name}</h1>
              <p className="text-sm text-muted mt-1">{toolA.vendor}</p>
              <p className="text-4xl font-extrabold text-accent mt-3">{scoreA}</p>
              <p className="text-xs text-muted">Overall Score / 10</p>
            </div>

            {/* VS divider */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg font-bold text-muted">vs</span>
              {vsMatch && <VerdictBadge verdict={vsMatch.verdict} toolA={toolA} toolB={toolB} />}
            </div>

            {/* Tool B */}
            <div className="text-center flex-1 max-w-xs">
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">{toolB.name}</h2>
              <p className="text-sm text-muted mt-1">{toolB.vendor}</p>
              <p className="text-4xl font-extrabold text-accent mt-3">{scoreB}</p>
              <p className="text-xs text-muted">Overall Score / 10</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* AEO Answer Block */}
        <div className="bg-surface-alt border border-border rounded-lg p-4">
          <p className="text-sm text-foreground leading-relaxed">
            Between <strong>{toolA.name}</strong> and <strong>{toolB.name}</strong>,{" "}
            {vsMatch
              ? vsMatch.verdict === "depends"
                ? "the best choice depends on your needs"
                : `${vsMatch.verdict === toolA.slug ? toolA.name : toolB.name} is the stronger pick overall`
              : "both are strong options"}.{" "}
            {toolA.name} scores {scoreA}/10, {toolB.name} scores {scoreB}/10.{" "}
            Choose {toolA.name} if {toolA.bestFor[0]?.toLowerCase()}.{" "}
            Choose {toolB.name} if {toolB.bestFor[0]?.toLowerCase()}.
          </p>
        </div>

        {/* ── Side-by-Side Comparison Table ── */}
        <section>
          <h2 className="text-xl font-bold mb-6">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="text-left py-3 px-4 font-semibold text-muted w-1/3">Criteria</th>
                  <th className="text-left py-3 px-4 font-semibold w-1/3">{toolA.name}</th>
                  <th className="text-left py-3 px-4 font-semibold w-1/3">{toolB.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {/* Pricing */}
                <tr>
                  <td className="py-3 px-4 text-muted font-medium">Cheapest Paid Plan</td>
                  <td className="py-3 px-4">{cheapestPaidPlan(toolA)}</td>
                  <td className="py-3 px-4">{cheapestPaidPlan(toolB)}</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="py-3 px-4 text-muted font-medium">Free Tier</td>
                  <td className="py-3 px-4">
                    {toolA.freeTier ? (
                      <span className="text-success font-medium">Yes</span>
                    ) : (
                      <span className="text-danger font-medium">No</span>
                    )}
                    {toolA.freeTierLimits && (
                      <p className="text-xs text-muted mt-0.5">{toolA.freeTierLimits}</p>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {toolB.freeTier ? (
                      <span className="text-success font-medium">Yes</span>
                    ) : (
                      <span className="text-danger font-medium">No</span>
                    )}
                    {toolB.freeTierLimits && (
                      <p className="text-xs text-muted mt-0.5">{toolB.freeTierLimits}</p>
                    )}
                  </td>
                </tr>

                {/* Scores */}
                {scoreLabels.map((s, i) => (
                  <tr key={s.key} className={i % 2 === 0 ? "" : "bg-surface-alt/50"}>
                    <td className="py-3 px-4 text-muted font-medium">{s.label}</td>
                    <td className="py-3 px-4">
                      <ScoreBar label="" value={toolA.scores[s.key]} />
                    </td>
                    <td className="py-3 px-4">
                      <ScoreBar label="" value={toolB.scores[s.key]} />
                    </td>
                  </tr>
                ))}

                {/* Deployment */}
                <tr>
                  <td className="py-3 px-4 text-muted font-medium">Deployment</td>
                  <td className="py-3 px-4 capitalize">{toolA.deployment}</td>
                  <td className="py-3 px-4 capitalize">{toolB.deployment}</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="py-3 px-4 text-muted font-medium">API Available</td>
                  <td className="py-3 px-4">
                    {toolA.apiAvailable ? (
                      <span className="text-success font-medium">Yes</span>
                    ) : (
                      <span className="text-danger font-medium">No</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {toolB.apiAvailable ? (
                      <span className="text-success font-medium">Yes</span>
                    ) : (
                      <span className="text-danger font-medium">No</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-muted font-medium">Platforms</td>
                  <td className="py-3 px-4">{toolA.platforms.join(", ")}</td>
                  <td className="py-3 px-4">{toolB.platforms.join(", ")}</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="py-3 px-4 text-muted font-medium">Compliance</td>
                  <td className="py-3 px-4">{toolA.compliance.join(", ") || "None listed"}</td>
                  <td className="py-3 px-4">{toolB.compliance.join(", ") || "None listed"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Feature Overlap ── */}
        <section>
          <h2 className="text-xl font-bold mb-6">Feature Overlap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shared */}
            <div className="border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold mb-3 text-accent">
                Shared Features ({sharedFeatures.length})
              </h3>
              {sharedFeatures.length > 0 ? (
                <ul className="space-y-1.5">
                  {sharedFeatures.map((f) => (
                    <li key={f} className="text-xs text-muted flex items-start gap-1.5">
                      <svg className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-muted">No overlapping features detected.</p>
              )}
            </div>

            {/* Unique to A */}
            <div className="border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold mb-3">
                Unique to {toolA.name} ({uniqueA.length})
              </h3>
              {uniqueA.length > 0 ? (
                <ul className="space-y-1.5">
                  {uniqueA.map((f) => (
                    <li key={f} className="text-xs text-muted flex items-start gap-1.5">
                      <svg className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-muted">No unique features found.</p>
              )}
            </div>

            {/* Unique to B */}
            <div className="border border-border rounded-xl p-5">
              <h3 className="text-sm font-semibold mb-3">
                Unique to {toolB.name} ({uniqueB.length})
              </h3>
              {uniqueB.length > 0 ? (
                <ul className="space-y-1.5">
                  {uniqueB.map((f) => (
                    <li key={f} className="text-xs text-muted flex items-start gap-1.5">
                      <svg className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-muted">No unique features found.</p>
              )}
            </div>
          </div>
        </section>

        {/* ── Pricing Comparison ── */}
        <section>
          <h2 className="text-xl font-bold mb-6">Pricing Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[toolA, toolB].map((tool) => (
              <div key={tool.slug} className="border border-border rounded-xl overflow-hidden">
                <div className="bg-surface-alt px-5 py-3 border-b border-border">
                  <h3 className="text-sm font-bold">{tool.name} Pricing</h3>
                </div>
                <div className="divide-y divide-border">
                  {tool.pricing.map((plan) => (
                    <div
                      key={plan.name}
                      className={`px-5 py-3 ${plan.highlighted ? "bg-accent-light/30" : ""}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold">
                          {plan.name}
                          {plan.highlighted && (
                            <span className="ml-2 text-[10px] font-semibold text-accent bg-accent-light px-1.5 py-0.5 rounded-full">
                              Popular
                            </span>
                          )}
                        </span>
                        <span className="text-sm font-bold">
                          {plan.priceMonthly === null
                            ? "Custom"
                            : plan.priceMonthly === 0
                              ? "Free"
                              : `$${plan.priceMonthly}/mo`}
                        </span>
                      </div>
                      <p className="text-xs text-muted">{plan.limits}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Who Should Choose ── */}
        <section>
          <h2 className="text-xl font-bold mb-6">Who Should Choose Which?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[toolA, toolB].map((tool) => (
              <div key={tool.slug} className="border border-border rounded-xl p-5">
                <h3 className="text-base font-bold mb-4">
                  Who should choose {tool.name}
                </h3>
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-success mb-2">Best for</p>
                  <ul className="space-y-1.5">
                    {tool.bestFor.map((b) => (
                      <li key={b} className="text-xs text-muted flex items-start gap-1.5">
                        <svg className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-danger mb-2">Avoid if</p>
                  <ul className="space-y-1.5">
                    {tool.avoidIf.map((a) => (
                      <li key={a} className="text-xs text-muted flex items-start gap-1.5">
                        <svg className="w-3.5 h-3.5 text-danger shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Switching Guidance ── */}
        {(toolA.switchingTriggers?.length || toolB.switchingTriggers?.length) && (
          <section>
            <h2 className="text-xl font-bold mb-6">Switching Guidance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[toolA, toolB].map((tool) => (
                <div key={tool.slug} className="border border-border rounded-xl p-5">
                  <h3 className="text-sm font-bold mb-3">Switching from {tool.name}</h3>
                  {tool.switchingTriggers && tool.switchingTriggers.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-muted mb-1.5">Common triggers to leave:</p>
                      <ul className="space-y-1">
                        {tool.switchingTriggers.map((t) => (
                          <li key={t} className="text-xs text-muted flex items-start gap-1.5">
                            <span className="text-amber-500 shrink-0">&#x2022;</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tool.switchingBlockers && tool.switchingBlockers.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-muted mb-1.5">Potential blockers:</p>
                      <ul className="space-y-1">
                        {tool.switchingBlockers.map((b) => (
                          <li key={b} className="text-xs text-muted flex items-start gap-1.5">
                            <span className="text-danger shrink-0">&#x2022;</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Verdict ── */}
        {vsMatch && (
          <section className="border border-border rounded-xl p-6 bg-surface">
            <h2 className="text-xl font-bold mb-3">Our Verdict</h2>
            <div className="mb-3">
              <VerdictBadge verdict={vsMatch.verdict} toolA={toolA} toolB={toolB} />
            </div>
            <p className="text-sm text-muted leading-relaxed">{vsMatch.summary}</p>
          </section>
        )}

        {/* ── Affiliate CTAs ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[toolA, toolB].map((tool) => (
            <a
              key={tool.slug}
              href={tool.affiliateUrl}
              rel="noopener noreferrer sponsored"
              target="_blank"
              className="flex items-center justify-between border border-accent/30 bg-accent-light/30 rounded-xl p-5 hover:bg-accent-light/60 transition-colors"
            >
              <div>
                <p className="text-sm font-bold">Try {tool.name}</p>
                <p className="text-xs text-muted mt-0.5">
                  {tool.freeTier
                    ? "Start free — no credit card required"
                    : `Plans from $${tool.pricing.find((p) => p.priceMonthly && p.priceMonthly > 0)?.priceMonthly ?? "?"}/mo`}
                </p>
              </div>
              <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ))}
        </section>

        {/* ── See Also ── */}
        <section>
          <h2 className="text-lg font-bold mb-4">See Also</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[toolA, toolB].map((tool) => (
              <Link
                key={`review-${tool.slug}`}
                href={`/tools/${tool.slug}`}
                className="border border-border rounded-lg p-3 hover:border-accent/30 transition-all text-sm"
              >
                <span className="font-semibold hover:text-accent">{tool.name} Review</span>
                <span className="block text-xs text-muted mt-0.5">{getOverallScore(tool.scores)}/10 overall score</span>
              </Link>
            ))}
            {[toolA, toolB].map((tool) => (
              <Link
                key={`alt-${tool.slug}`}
                href={`/alternatives/${tool.slug}`}
                className="border border-border rounded-lg p-3 hover:border-accent/30 transition-all text-sm"
              >
                <span className="font-semibold hover:text-accent">{tool.name} Alternatives</span>
                <span className="block text-xs text-muted mt-0.5">Compare top alternatives</span>
              </Link>
            ))}
            {[toolA, toolB].map((tool) => (
              <Link
                key={`pricing-${tool.slug}`}
                href={`/pricing/${tool.slug}`}
                className="border border-border rounded-lg p-3 hover:border-accent/30 transition-all text-sm"
              >
                <span className="font-semibold hover:text-accent">{tool.name} Pricing</span>
                <span className="block text-xs text-muted mt-0.5">Full plan breakdown</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
